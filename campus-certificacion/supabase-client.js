(function () {
  const PLACEHOLDER_NAMES = new Set(["", "Alex Rivera Fernández", "Alumno Demo", "Alumno"]);
  const PLACEHOLDER_EMAILS = new Set(["", "alex.rivera@pymedigital.es", "alumno@ejemplo.es"]);

  let client = null;
  let currentSession = null;
  let currentUser = null;
  let syncStatusCb = null;
  let authChangeCb = null;
  let initialized = false;

  function getCfg() {
    return window.CAMPUS_SUPABASE_CONFIG || {};
  }

  function isConfigured() {
    const cfg = getCfg();
    const hasSdk = typeof window.supabase?.createClient === "function";
    const url = String(cfg.url || "").trim();
    const key = String(cfg.publishableKey || "").trim();
    if (!hasSdk || !/^https:\/\/[a-z0-9-]+\.supabase\.co/i.test(url) || !key) return false;
    if (/PEGA_AQUI|YOUR_|EXAMPLE|REPLACE/i.test(key)) return false;
    return true;
  }

  function setSyncStatus(state, detail = "") {
    if (typeof syncStatusCb === "function") {
      try { syncStatusCb(state, detail); } catch {}
    }
  }

  function translateAuthError(err) {
    const msg = String(err?.message || err || "Error inesperado").trim();
    const low = msg.toLowerCase();
    if (low.includes("invalid login credentials")) return "Correo o contraseña incorrectos.";
    if (low.includes("email not confirmed")) return "Debes confirmar tu correo electrónico antes de iniciar sesión (revisa tu bandeja o spam).";
    if (low.includes("already registered") || low.includes("already been registered")) return "Ya existe una cuenta registrada con este correo.";
    if (low.includes("password should be at least")) return "La contraseña debe tener al menos 6 caracteres.";
    if (low.includes("rate limit") || low.includes("too many requests")) return "Demasiados intentos seguidos. Espera un minuto y vuelve a intentarlo.";
    if (low.includes("unable to validate email") || low.includes("invalid email")) return "Introduce una dirección de correo válida.";
    if (low.includes("network") || low.includes("failed to fetch")) return "No se pudo conectar con Supabase. Revisa tu conexión a internet.";
    return msg;
  }

  function ensureClient() {
    if (!isConfigured()) return null;
    if (!client) {
      const cfg = getCfg();
      client = window.supabase.createClient(cfg.url.trim(), cfg.publishableKey.trim(), {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true
        }
      });
    }
    return client;
  }

  async function init(onAuthChange, onSyncStatus) {
    authChangeCb = onAuthChange || null;
    syncStatusCb = onSyncStatus || null;

    if (!isConfigured()) {
      setSyncStatus("local");
      return { configured: false, user: null, session: null };
    }

    const sb = ensureClient();
    if (!initialized) {
      initialized = true;
      sb.auth.onAuthStateChange((event, session) => {
        currentSession = session || null;
        currentUser = session?.user || null;
        if (!currentUser) setSyncStatus("local");
        if (typeof authChangeCb === "function") {
          authChangeCb(event, currentUser, currentSession);
        }
      });
    }

    try {
      const { data, error } = await sb.auth.getSession();
      if (error) throw error;
      currentSession = data?.session || null;
      currentUser = currentSession?.user || null;
      setSyncStatus(currentUser ? "saved" : "local");
      return { configured: true, user: currentUser, session: currentSession };
    } catch (err) {
      setSyncStatus("error", translateAuthError(err));
      return { configured: true, user: null, session: null, error: translateAuthError(err) };
    }
  }

  function getUser() { return currentUser; }
  function getSession() { return currentSession; }
  function getClient() { return ensureClient(); }

  async function signUp({ email, password, fullName }) {
    const sb = ensureClient();
    if (!sb) return { ok: false, error: "Supabase aún no está configurado con la clave pública." };
    try {
      const redirectTo = window.location.origin.startsWith("http")
        ? window.location.origin + window.location.pathname
        : undefined;
      const { data, error } = await sb.auth.signUp({
        email: String(email || "").trim(),
        password: String(password || ""),
        options: {
          data: { full_name: String(fullName || "").trim() },
          ...(redirectTo ? { emailRedirectTo: redirectTo } : {})
        }
      });
      if (error) return { ok: false, error: translateAuthError(error) };
      const needsEmailConfirm = Boolean(data?.user && !data?.session);
      return { ok: true, user: data?.user || null, session: data?.session || null, needsEmailConfirm };
    } catch (err) {
      return { ok: false, error: translateAuthError(err) };
    }
  }

  async function signIn({ email, password }) {
    const sb = ensureClient();
    if (!sb) return { ok: false, error: "Supabase aún no está configurado con la clave pública." };
    try {
      const { data, error } = await sb.auth.signInWithPassword({
        email: String(email || "").trim(),
        password: String(password || "")
      });
      if (error) return { ok: false, error: translateAuthError(error) };
      currentSession = data?.session || null;
      currentUser = data?.user || null;
      return { ok: true, user: currentUser, session: currentSession };
    } catch (err) {
      return { ok: false, error: translateAuthError(err) };
    }
  }

  async function resetPassword(email) {
    const sb = ensureClient();
    if (!sb) return { ok: false, error: "Supabase aún no está configurado." };
    try {
      const redirectTo = window.location.origin.startsWith("http")
        ? window.location.origin + window.location.pathname
        : undefined;
      const { error } = await sb.auth.resetPasswordForEmail(String(email || "").trim(), redirectTo ? { redirectTo } : undefined);
      if (error) return { ok: false, error: translateAuthError(error) };
      return { ok: true };
    } catch (err) {
      return { ok: false, error: translateAuthError(err) };
    }
  }

  async function signOut() {
    const sb = ensureClient();
    if (!sb) return { ok: true };
    try {
      const { error } = await sb.auth.signOut();
      if (error) return { ok: false, error: translateAuthError(error) };
      currentSession = null;
      currentUser = null;
      setSyncStatus("local");
      return { ok: true };
    } catch (err) {
      return { ok: false, error: translateAuthError(err) };
    }
  }

  function makeEmptyProgram() {
    return {
      completedTopics: [],
      exams: {},
      workshops: {},
      notes: {},
      studyTime: { totalSeconds: 0, byBlock: {}, byTopic: {}, byDay: {}, sessions: [] },
      certId: null,
      certIssuedAt: null
    };
  }

  async function loadUserState(programIds, defaultProfile) {
    const sb = ensureClient();
    if (!sb || !currentUser) return null;
    const uid = currentUser.id;

    const [profRes, topRes, wsRes, exRes, stRes, sessRes, certRes] = await Promise.all([
      sb.from("profiles").select("*").eq("id", uid).maybeSingle(),
      sb.from("topic_progress").select("*").eq("user_id", uid),
      sb.from("workshop_submissions").select("*").eq("user_id", uid),
      sb.from("exam_attempts").select("*").eq("user_id", uid),
      sb.from("program_study_time").select("*").eq("user_id", uid),
      sb.from("study_sessions").select("*").eq("user_id", uid).order("recorded_at", { ascending: false }).limit(160),
      sb.from("certificates").select("*").eq("user_id", uid)
    ]);

    const firstErr = [profRes, topRes, wsRes, exRes, stRes, sessRes, certRes].find((r) => r.error)?.error;
    if (firstErr) throw firstErr;

    const pRow = profRes.data;
    const metaName = String(currentUser.user_metadata?.full_name || "").trim();
    const profile = {
      name: (pRow?.full_name || "").trim() || metaName || defaultProfile.name,
      email: (pRow?.email || currentUser.email || defaultProfile.email).trim(),
      company: pRow?.company ?? defaultProfile.company,
      org: (pRow?.cert_org || "").trim() || defaultProfile.org,
      signer: (pRow?.cert_signer || "").trim() || defaultProfile.signer,
      role: pRow?.role || "student"
    };

    if (!pRow) {
      sb.from("profiles").upsert({
        id: uid,
        full_name: profile.name,
        email: profile.email,
        company: profile.company,
        cert_org: profile.org,
        cert_signer: profile.signer
      }, { onConflict: "id" }).then(() => {});
    }

    const programs = {};
    programIds.forEach((pid) => { programs[pid] = makeEmptyProgram(); });

    const topicSecAccum = {};
    (topRes.data || []).forEach((row) => {
      if (!programs[row.program_id]) programs[row.program_id] = makeEmptyProgram();
      const pr = programs[row.program_id];
      if (row.completed && !pr.completedTopics.includes(row.topic_id)) {
        pr.completedTopics.push(row.topic_id);
      }
      if (row.notes) pr.notes[row.topic_id] = row.notes;
      if (row.study_seconds > 0) {
        topicSecAccum[row.program_id] = topicSecAccum[row.program_id] || {};
        topicSecAccum[row.program_id][row.topic_id] = row.study_seconds;
      }
    });

    (wsRes.data || []).forEach((row) => {
      if (!programs[row.program_id]) programs[row.program_id] = makeEmptyProgram();
      programs[row.program_id].workshops[row.block_id] = {
        completed: Boolean(row.completed),
        data: row.payload || {},
        updatedAt: row.updated_at
      };
    });

    (exRes.data || []).forEach((row) => {
      if (!programs[row.program_id]) programs[row.program_id] = makeEmptyProgram();
      programs[row.program_id].exams[row.block_id] = {
        bestScore: Number(row.best_score || 0),
        lastScore: Number(row.last_score || 0),
        passed: Boolean(row.passed),
        attempts: Number(row.attempts || 0),
        date: row.last_attempt_at || row.updated_at
      };
    });

    (stRes.data || []).forEach((row) => {
      if (!programs[row.program_id]) programs[row.program_id] = makeEmptyProgram();
      programs[row.program_id].studyTime = {
        totalSeconds: Number(row.total_seconds || 0),
        byBlock: Object.assign({}, row.by_block || {}),
        byTopic: Object.assign({}, topicSecAccum[row.program_id] || {}, row.by_topic || {}),
        byDay: Object.assign({}, row.by_day || {}),
        sessions: []
      };
    });

    Object.keys(topicSecAccum).forEach((pid) => {
      const st = programs[pid].studyTime;
      Object.entries(topicSecAccum[pid]).forEach(([tid, sec]) => {
        st.byTopic[tid] = Math.max(Number(st.byTopic[tid] || 0), Number(sec || 0));
      });
    });

    (sessRes.data || []).forEach((row) => {
      if (!programs[row.program_id]) programs[row.program_id] = makeEmptyProgram();
      const arr = programs[row.program_id].studyTime.sessions;
      if (arr.length < 40) {
        arr.push({
          date: row.recorded_at,
          blockId: row.block_id,
          topicId: row.topic_id || null,
          label: row.label,
          seconds: Number(row.seconds || 0)
        });
      }
    });

    (certRes.data || []).forEach((row) => {
      if (!programs[row.program_id]) programs[row.program_id] = makeEmptyProgram();
      programs[row.program_id].certId = row.cert_id;
      programs[row.program_id].certIssuedAt = row.issued_at;
    });

    return { profile, programs };
  }

  function mergeNumMap(a = {}, b = {}) {
    const out = Object.assign({}, a);
    Object.entries(b || {}).forEach(([k, v]) => {
      out[k] = Math.max(Number(out[k] || 0), Number(v || 0));
    });
    return out;
  }

  async function mergeAndPushState(localDb, cloudDb, programOrder, catalog) {
    const sb = ensureClient();
    if (!sb || !currentUser) return cloudDb || localDb;
    const uid = currentUser.id;
    const merged = {
      profile: Object.assign({}, cloudDb.profile),
      programs: {}
    };

    const locProf = localDb?.profile || {};
    const cldProf = cloudDb?.profile || {};
    if (PLACEHOLDER_NAMES.has(cldProf.name) && locProf.name && !PLACEHOLDER_NAMES.has(locProf.name)) {
      merged.profile.name = locProf.name;
    }
    if (PLACEHOLDER_EMAILS.has(cldProf.email) && (currentUser.email || locProf.email)) {
      merged.profile.email = currentUser.email || locProf.email;
    }
    if (!cldProf.company && locProf.company) merged.profile.company = locProf.company;
    if (!cldProf.org && locProf.org) merged.profile.org = locProf.org;
    if (!cldProf.signer && locProf.signer) merged.profile.signer = locProf.signer;

    let pushedAnything = false;

    if (merged.profile.name !== cldProf.name || merged.profile.company !== cldProf.company || merged.profile.email !== cldProf.email) {
      await syncProfile(merged.profile);
      pushedAnything = true;
    }

    for (const pid of programOrder) {
      const loc = localDb?.programs?.[pid] || makeEmptyProgram();
      const cld = cloudDb?.programs?.[pid] || makeEmptyProgram();
      const out = makeEmptyProgram();

      const cldDoneSet = new Set(cld.completedTopics || []);
      const locDoneSet = new Set(loc.completedTopics || []);
      out.completedTopics = [...new Set([...cldDoneSet, ...locDoneSet])];

      out.notes = Object.assign({}, cld.notes || {});
      Object.entries(loc.notes || {}).forEach(([tid, txt]) => {
        if (!out.notes[tid] && String(txt || "").trim()) out.notes[tid] = txt;
      });

      const wsRows = [];
      const allWsKeys = new Set([...Object.keys(cld.workshops || {}), ...Object.keys(loc.workshops || {})]);
      allWsKeys.forEach((bid) => {
        const lw = loc.workshops?.[bid];
        const cw = cld.workshops?.[bid];
        let pick = cw || lw;
        if (lw && cw) {
          const lt = Date.parse(lw.updatedAt || 0) || 0;
          const ct = Date.parse(cw.updatedAt || 0) || 0;
          pick = lt > ct ? lw : cw;
        }
        if (pick) {
          out.workshops[bid] = pick;
          if (!cw || (lw && (Date.parse(lw.updatedAt || 0) || 0) > (Date.parse(cw.updatedAt || 0) || 0))) {
            wsRows.push({
              user_id: uid,
              program_id: pid,
              block_id: bid,
              completed: Boolean(pick.completed),
              payload: pick.data || {}
            });
          }
        }
      });

      const exRows = [];
      const allExKeys = new Set([...Object.keys(cld.exams || {}), ...Object.keys(loc.exams || {})]);
      allExKeys.forEach((bid) => {
        const le = loc.exams?.[bid];
        const ce = cld.exams?.[bid];
        if (!ce && le) {
          out.exams[bid] = le;
          exRows.push({
            user_id: uid,
            program_id: pid,
            block_id: bid,
            best_score: Number(le.bestScore || 0),
            last_score: Number(le.lastScore || 0),
            passed: Boolean(le.passed),
            attempts: Number(le.attempts || 1),
            last_attempt_at: le.date || new Date().toISOString()
          });
        } else if (ce && le) {
          const best = Math.max(Number(ce.bestScore || 0), Number(le.bestScore || 0));
          const passed = Boolean(ce.passed || le.passed);
          const attempts = Math.max(Number(ce.attempts || 0), Number(le.attempts || 0));
          const newerLocal = (Date.parse(le.date || 0) || 0) > (Date.parse(ce.date || 0) || 0);
          out.exams[bid] = {
            bestScore: best,
            lastScore: newerLocal ? Number(le.lastScore || 0) : Number(ce.lastScore || 0),
            passed,
            attempts,
            date: newerLocal ? le.date : ce.date
          };
          if (best > Number(ce.bestScore || 0) || (passed && !ce.passed) || attempts > Number(ce.attempts || 0)) {
            exRows.push({
              user_id: uid,
              program_id: pid,
              block_id: bid,
              best_score: out.exams[bid].bestScore,
              last_score: out.exams[bid].lastScore,
              passed: out.exams[bid].passed,
              attempts: out.exams[bid].attempts,
              last_attempt_at: out.exams[bid].date || new Date().toISOString()
            });
          }
        } else if (ce) {
          out.exams[bid] = ce;
        }
      });

      const lst = loc.studyTime || { totalSeconds: 0, byBlock: {}, byTopic: {}, byDay: {}, sessions: [] };
      const cst = cld.studyTime || { totalSeconds: 0, byBlock: {}, byTopic: {}, byDay: {}, sessions: [] };
      const byBlock = mergeNumMap(cst.byBlock, lst.byBlock);
      const byTopic = mergeNumMap(cst.byTopic, lst.byTopic);
      const byDay = mergeNumMap(cst.byDay, lst.byDay);
      const totalSeconds = Math.max(Number(cst.totalSeconds || 0), Number(lst.totalSeconds || 0));

      const seenSess = new Set();
      const sessions = [];
      [...(cst.sessions || []), ...(lst.sessions || [])].forEach((s) => {
        const key = `${s.date}|${s.label}|${s.seconds}`;
        if (!seenSess.has(key)) { seenSess.add(key); sessions.push(s); }
      });
      sessions.sort((a, b) => (Date.parse(b.date || 0) || 0) - (Date.parse(a.date || 0) || 0));
      if (sessions.length > 40) sessions.length = 40;

      out.studyTime = { totalSeconds, byBlock, byTopic, byDay, sessions };
      out.certId = cld.certId || loc.certId || null;
      out.certIssuedAt = cld.certIssuedAt || loc.certIssuedAt || null;
      merged.programs[pid] = out;

      // Collect topic diffs to push
      const topicIdsToPush = new Set();
      (loc.completedTopics || []).forEach((tid) => { if (!cldDoneSet.has(tid)) topicIdsToPush.add(tid); });
      Object.entries(loc.notes || {}).forEach(([tid, txt]) => {
        if (String(txt || "").trim() && !cld.notes?.[tid]) topicIdsToPush.add(tid);
      });
      Object.entries(lst.byTopic || {}).forEach(([tid, sec]) => {
        if (Number(sec || 0) > Number(cst.byTopic?.[tid] || 0)) topicIdsToPush.add(tid);
      });

      const topicRows = [...topicIdsToPush].map((tid) => ({
        user_id: uid,
        program_id: pid,
        topic_id: tid,
        completed: out.completedTopics.includes(tid),
        notes: out.notes[tid] || "",
        study_seconds: Math.round(out.studyTime.byTopic[tid] || 0)
      }));

      const studyChanged = Number(lst.totalSeconds || 0) > Number(cst.totalSeconds || 0);
      const hasAnyLocal = topicRows.length > 0 || wsRows.length > 0 || exRows.length > 0 || studyChanged;

      if (hasAnyLocal) {
        pushedAnything = true;
        await sb.from("enrollments").upsert({
          user_id: uid,
          program_id: pid,
          last_accessed_at: new Date().toISOString()
        }, { onConflict: "user_id,program_id" });

        if (topicRows.length) {
          await sb.from("topic_progress").upsert(topicRows, { onConflict: "user_id,program_id,topic_id" });
        }
        if (wsRows.length) {
          await sb.from("workshop_submissions").upsert(wsRows, { onConflict: "user_id,program_id,block_id" });
        }
        if (exRows.length) {
          await sb.from("exam_attempts").upsert(exRows, { onConflict: "user_id,program_id,block_id" });
        }
        if (studyChanged) {
          await sb.from("program_study_time").upsert({
            user_id: uid,
            program_id: pid,
            total_seconds: Math.round(out.studyTime.totalSeconds || 0),
            by_block: out.studyTime.byBlock,
            by_topic: out.studyTime.byTopic,
            by_day: out.studyTime.byDay
          }, { onConflict: "user_id,program_id" });
        }
      }
    }

    return { merged, pushedAnything };
  }

  async function runWrite(fn) {
    const sb = ensureClient();
    if (!sb || !currentUser) return { ok: false, skipped: true };
    setSyncStatus("saving");
    try {
      const res = await fn(sb, currentUser.id);
      if (res?.error) throw res.error;
      setSyncStatus("saved");
      return { ok: true, data: res?.data || null };
    } catch (err) {
      setSyncStatus("error", translateAuthError(err));
      return { ok: false, error: translateAuthError(err) };
    }
  }

  function syncProfile(profile) {
    return runWrite((sb, uid) =>
      sb.from("profiles").upsert({
        id: uid,
        full_name: String(profile.name || "").trim(),
        email: String(profile.email || currentUser?.email || "").trim(),
        company: String(profile.company || "").trim(),
        cert_org: String(profile.org || "").trim(),
        cert_signer: String(profile.signer || "").trim()
      }, { onConflict: "id" })
    );
  }

  function touchEnrollment(programId) {
    return runWrite((sb, uid) =>
      sb.from("enrollments").upsert({
        user_id: uid,
        program_id: programId,
        last_accessed_at: new Date().toISOString()
      }, { onConflict: "user_id,program_id" })
    );
  }

  function syncTopic(programId, topicId, { completed, notes, studySeconds }) {
    return runWrite((sb, uid) =>
      sb.from("topic_progress").upsert({
        user_id: uid,
        program_id: programId,
        topic_id: topicId,
        completed: Boolean(completed),
        notes: String(notes || ""),
        study_seconds: Math.max(0, Math.round(studySeconds || 0))
      }, { onConflict: "user_id,program_id,topic_id" })
    );
  }

  function syncWorkshop(programId, blockId, wsRec) {
    return runWrite((sb, uid) =>
      sb.from("workshop_submissions").upsert({
        user_id: uid,
        program_id: programId,
        block_id: blockId,
        completed: Boolean(wsRec?.completed),
        payload: wsRec?.data || {}
      }, { onConflict: "user_id,program_id,block_id" })
    );
  }

  function syncExam(programId, blockId, exRec) {
    return runWrite((sb, uid) =>
      sb.from("exam_attempts").upsert({
        user_id: uid,
        program_id: programId,
        block_id: blockId,
        best_score: Math.round(exRec?.bestScore || 0),
        last_score: Math.round(exRec?.lastScore || 0),
        passed: Boolean(exRec?.passed),
        attempts: Math.max(1, Math.round(exRec?.attempts || 1)),
        last_attempt_at: exRec?.date || new Date().toISOString()
      }, { onConflict: "user_id,program_id,block_id" })
    );
  }

  function syncStudyTime(programId, studyTime) {
    return runWrite((sb, uid) =>
      sb.from("program_study_time").upsert({
        user_id: uid,
        program_id: programId,
        total_seconds: Math.max(0, Math.round(studyTime?.totalSeconds || 0)),
        by_block: studyTime?.byBlock || {},
        by_topic: studyTime?.byTopic || {},
        by_day: studyTime?.byDay || {}
      }, { onConflict: "user_id,program_id" })
    );
  }

  function recordStudySession(programId, session) {
    if (!session || (session.seconds || 0) < 3) return Promise.resolve({ ok: false, skipped: true });
    return runWrite((sb, uid) =>
      sb.from("study_sessions").insert({
        user_id: uid,
        program_id: programId,
        block_id: session.blockId || null,
        topic_id: session.topicId || null,
        label: String(session.label || "Estudio"),
        seconds: Math.max(1, Math.round(session.seconds || 0)),
        recorded_at: session.date || new Date().toISOString()
      })
    );
  }

  function syncCertificate(certPayload) {
    return runWrite((sb, uid) =>
      sb.from("certificates").upsert({
        cert_id: certPayload.certId,
        user_id: uid,
        program_id: certPayload.programId,
        holder_name: certPayload.holderName,
        program_name: certPayload.programName,
        org_name: certPayload.orgName,
        signer_name: certPayload.signerName,
        duration_label: certPayload.durationLabel,
        avg_score: Math.round(certPayload.avgScore || 0),
        total_study_seconds: Math.max(0, Math.round(certPayload.totalStudySeconds || 0)),
        transcript: certPayload.transcript || [],
        issued_at: certPayload.issuedAt || new Date().toISOString()
      }, { onConflict: "user_id,program_id" })
    );
  }

  async function syncProgramBatch(programId, pdb, certPayload) {
    const sb = ensureClient();
    if (!sb || !currentUser) return { ok: false, skipped: true };
    const uid = currentUser.id;
    setSyncStatus("saving");
    try {
      await sb.from("enrollments").upsert({
        user_id: uid,
        program_id: programId,
        last_accessed_at: new Date().toISOString()
      }, { onConflict: "user_id,program_id" });

      const topicIds = new Set([
        ...(pdb.completedTopics || []),
        ...Object.keys(pdb.notes || {}),
        ...Object.keys(pdb.studyTime?.byTopic || {})
      ]);
      const topicRows = [...topicIds].map((tid) => ({
        user_id: uid,
        program_id: programId,
        topic_id: tid,
        completed: (pdb.completedTopics || []).includes(tid),
        notes: pdb.notes?.[tid] || "",
        study_seconds: Math.round(pdb.studyTime?.byTopic?.[tid] || 0)
      }));
      if (topicRows.length) {
        const r = await sb.from("topic_progress").upsert(topicRows, { onConflict: "user_id,program_id,topic_id" });
        if (r.error) throw r.error;
      }

      const wsRows = Object.entries(pdb.workshops || {}).map(([bid, ws]) => ({
        user_id: uid,
        program_id: programId,
        block_id: bid,
        completed: Boolean(ws.completed),
        payload: ws.data || {}
      }));
      if (wsRows.length) {
        const r = await sb.from("workshop_submissions").upsert(wsRows, { onConflict: "user_id,program_id,block_id" });
        if (r.error) throw r.error;
      }

      const exRows = Object.entries(pdb.exams || {}).map(([bid, ex]) => ({
        user_id: uid,
        program_id: programId,
        block_id: bid,
        best_score: Math.round(ex.bestScore || 0),
        last_score: Math.round(ex.lastScore || 0),
        passed: Boolean(ex.passed),
        attempts: Math.max(1, Math.round(ex.attempts || 1)),
        last_attempt_at: ex.date || new Date().toISOString()
      }));
      if (exRows.length) {
        const r = await sb.from("exam_attempts").upsert(exRows, { onConflict: "user_id,program_id,block_id" });
        if (r.error) throw r.error;
      }

      const stRes = await sb.from("program_study_time").upsert({
        user_id: uid,
        program_id: programId,
        total_seconds: Math.round(pdb.studyTime?.totalSeconds || 0),
        by_block: pdb.studyTime?.byBlock || {},
        by_topic: pdb.studyTime?.byTopic || {},
        by_day: pdb.studyTime?.byDay || {}
      }, { onConflict: "user_id,program_id" });
      if (stRes.error) throw stRes.error;

      if (certPayload) {
        const cRes = await sb.from("certificates").upsert({
          cert_id: certPayload.certId,
          user_id: uid,
          program_id: certPayload.programId,
          holder_name: certPayload.holderName,
          program_name: certPayload.programName,
          org_name: certPayload.orgName,
          signer_name: certPayload.signerName,
          duration_label: certPayload.durationLabel,
          avg_score: Math.round(certPayload.avgScore || 0),
          total_study_seconds: Math.max(0, Math.round(certPayload.totalStudySeconds || 0)),
          transcript: certPayload.transcript || [],
          issued_at: certPayload.issuedAt || new Date().toISOString()
        }, { onConflict: "user_id,program_id" });
        if (cRes.error) throw cRes.error;
      }

      setSyncStatus("saved");
      return { ok: true };
    } catch (err) {
      setSyncStatus("error", translateAuthError(err));
      return { ok: false, error: translateAuthError(err) };
    }
  }

  async function resetProgramCloud(programId) {
    const sb = ensureClient();
    if (!sb || !currentUser) return { ok: false, skipped: true };
    const uid = currentUser.id;
    setSyncStatus("saving");
    try {
      await Promise.all([
        sb.from("topic_progress").delete().eq("user_id", uid).eq("program_id", programId),
        sb.from("workshop_submissions").delete().eq("user_id", uid).eq("program_id", programId),
        sb.from("exam_attempts").delete().eq("user_id", uid).eq("program_id", programId),
        sb.from("program_study_time").delete().eq("user_id", uid).eq("program_id", programId),
        sb.from("study_sessions").delete().eq("user_id", uid).eq("program_id", programId),
        sb.from("certificates").delete().eq("user_id", uid).eq("program_id", programId)
      ]);
      setSyncStatus("saved");
      return { ok: true };
    } catch (err) {
      setSyncStatus("error", translateAuthError(err));
      return { ok: false, error: translateAuthError(err) };
    }
  }

  async function verifyCertificatePublic(certId) {
    const sb = ensureClient();
    const clean = String(certId || "").trim().toUpperCase();
    if (!sb || !clean) return { ok: false, configured: isConfigured(), data: null };
    try {
      const { data, error } = await sb.rpc("verify_certificate", { p_cert_id: clean });
      if (error) return { ok: false, configured: true, data: null, error: translateAuthError(error) };
      const row = Array.isArray(data) ? (data[0] || null) : (data || null);
      return { ok: true, configured: true, data: row };
    } catch (err) {
      return { ok: false, configured: true, data: null, error: translateAuthError(err) };
    }
  }

  function isClosedAccess() {
    const cfg = getCfg();
    return Boolean(cfg.closedAccess !== false && isConfigured());
  }

  async function adminCall(action, payload = {}) {
    const sb = ensureClient();
    const cfg = getCfg();
    if (!sb || !cfg.url || !cfg.publishableKey) {
      return { ok: false, status: 0, error: "Supabase no está configurado." };
    }
    try {
      const { data: sessData } = await sb.auth.getSession();
      const token = sessData?.session?.access_token;
      if (!token) {
        return { ok: false, status: 401, error: "No hay sesión activa de administrador." };
      }

      const fnSlug = String(cfg.adminFunctionName || "admin-users").trim();
      const endpoint = `${String(cfg.url).replace(/\/+$/, "")}/functions/v1/${fnSlug}`;
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": cfg.publishableKey.trim(),
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(Object.assign({ action }, payload || {}))
      });

      let parsed = {};
      try { parsed = await res.json(); } catch {}

      if (!res.ok || parsed.ok === false) {
        return {
          ok: false,
          status: res.status,
          notDeployed: res.status === 404,
          error: parsed.error || parsed.message || `Error HTTP ${res.status} al invocar admin-users.`
        };
      }
      return Object.assign({ ok: true, status: res.status }, parsed);
    } catch (err) {
      return {
        ok: false,
        status: 0,
        notDeployed: false,
        error: "No se pudo conectar con la Edge Function admin-users (verifica si ya está desplegada en Supabase)."
      };
    }
  }

  window.CampusCloud = {
    isConfigured,
    isClosedAccess,
    init,
    getUser,
    getSession,
    getClient,
    signUp,
    signIn,
    resetPassword,
    signOut,
    loadUserState,
    mergeAndPushState,
    syncProfile,
    touchEnrollment,
    syncTopic,
    syncWorkshop,
    syncExam,
    syncStudyTime,
    recordStudySession,
    syncCertificate,
    syncProgramBatch,
    resetProgramCloud,
    verifyCertificatePublic,
    adminCall
  };
})();
