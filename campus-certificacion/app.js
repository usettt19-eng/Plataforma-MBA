(function () {
  const PROGRAMS = window.PROGRAMS || {};
  const ASSESS_MAP = {
    dind: window.ASSESSMENTS_DIND || window.ASSESSMENTS_DATA,
    gmba: window.ASSESSMENTS_GMBA,
    pmp: window.ASSESSMENTS_PMP,
    emba: window.ASSESSMENTS_EMBA
  };
  const PROGRAM_ORDER = ["dind", "gmba", "pmp", "emba"].filter((id) => PROGRAMS[id]);
  const STORAGE_KEY_V2 = "campus_multicert_state_v2";
  const LEGACY_KEY_V1 = "campus_cert_dind_state_v1";
  const THEME_KEY = "campus_cert_dind_theme_v1";

  const flatCache = {};
  function getFlatTopics(pid) {
    if (!flatCache[pid]) {
      const p = PROGRAMS[pid];
      const list = [];
      if (p) {
        p.blocks.forEach((b) => {
          b.topics.forEach((t) => {
            list.push({
              ...t,
              blockId: b.id,
              blockCode: b.code,
              blockName: b.name,
              blockNum: b.num,
              blockIcon: b.icon,
              blockGradient: b.gradient
            });
          });
        });
      }
      flatCache[pid] = list;
    }
    return flatCache[pid];
  }

  function makeEmptyProgramState() {
    return {
      completedTopics: [],
      exams: {},
      workshops: {},
      notes: {},
      studyTime: { totalSeconds: 0, byBlock: {}, byTopic: {}, byDay: {}, sessions: [] },
      certIssuedAt: null
    };
  }

  function normalizeProgramState(ps) {
    const base = makeEmptyProgramState();
    const out = Object.assign(base, ps || {});
    if (!out.studyTime) out.studyTime = base.studyTime;
    if (!out.studyTime.byBlock) out.studyTime.byBlock = {};
    if (!out.studyTime.byTopic) out.studyTime.byTopic = {};
    if (!out.studyTime.byDay) out.studyTime.byDay = {};
    if (!out.studyTime.sessions) out.studyTime.sessions = [];
    return out;
  }

  function loadPersisted() {
    try {
      const rawV2 = localStorage.getItem(STORAGE_KEY_V2);
      if (rawV2) {
        const parsed = JSON.parse(rawV2);
        parsed.programs = parsed.programs || {};
        PROGRAM_ORDER.forEach((pid) => {
          parsed.programs[pid] = normalizeProgramState(parsed.programs[pid]);
        });
        return parsed;
      }
    } catch {}

    // Migrate legacy v1 data into dind automatically
    let migratedDind = makeEmptyProgramState();
    let migratedProfile = {
      name: "Alex Rivera Fernández",
      email: "alex.rivera@pymedigital.es",
      company: "Dirección Comercial y Transformación Digital",
      org: "Escuela Ejecutiva de Dirección, Ventas e Innovación",
      signer: "Dra. Elena Navarro · Dirección Académica"
    };
    try {
      const rawV1 = localStorage.getItem(LEGACY_KEY_V1);
      if (rawV1) {
        const old = JSON.parse(rawV1);
        if (old.profile) migratedProfile = Object.assign(migratedProfile, old.profile);
        migratedDind = normalizeProgramState({
          completedTopics: old.completedTopics || [],
          exams: old.exams || {},
          workshops: old.workshops || {},
          notes: old.notes || {},
          studyTime: old.studyTime,
          certIssuedAt: old.certIssuedAt || null
        });
      }
    } catch {}

    const fresh = { profile: migratedProfile, programs: {} };
    PROGRAM_ORDER.forEach((pid) => {
      fresh.programs[pid] = pid === "dind" ? migratedDind : makeEmptyProgramState();
    });
    return fresh;
  }

  let db = loadPersisted();

  let ui = {
    programId: PROGRAM_ORDER[0] || "dind",
    view: "catalog", // catalog | dashboard | topic | workshop | exam | certificate | verify | portfolio
    role: "student", // student | trainer
    blockId: "b01",
    topicId: "b01-t01",
    topicTab: "all",
    slideIndex: 0,
    angleTab: "defs",
    deckFullscreen: false,
    studentReadingMode: false,
    expandedSlides: new Set(),
    checkedQuestions: new Set(),
    flippedCards: new Set(),
    solutionRevealed: false,
    openBlocks: new Set(["b01"]),
    examDraft: {}, // keyed by `${pid}:${blockId}`
    verifyQuery: ""
  };

  function P() { return PROGRAMS[ui.programId]; }
  function A() { return ASSESS_MAP[ui.programId]; }
  function PDB(pid = ui.programId) {
    if (!db.programs[pid]) db.programs[pid] = makeEmptyProgramState();
    return db.programs[pid];
  }
  function saveDb() {
    localStorage.setItem(STORAGE_KEY_V2, JSON.stringify(db));
  }

  // Theme
  if (localStorage.getItem(THEME_KEY) === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  // DOM Refs
  const elSidebar = document.getElementById("sidebar");
  const elNav = document.getElementById("sidebarNav");
  const elRoot = document.getElementById("appRoot");
  const elCrumb = document.getElementById("crumb");
  const elViewport = document.getElementById("viewport");
  const elProgLabel = document.getElementById("sidebarProgLabel");
  const elProgTitle = document.getElementById("sidebarProgTitle");
  const elProgBar = document.getElementById("sidebarProgBar");
  const elTopName = document.getElementById("topStudentName");
  const elToast = document.getElementById("toast");
  const elTopTimerPill = document.getElementById("topTimerPill");
  const elTopTimerValue = document.getElementById("topTimerValue");
  const elTopTimerState = document.getElementById("topTimerState");
  const elSidebarTimeLabel = document.getElementById("sidebarTimeLabel");

  function toast(msg) {
    elToast.textContent = msg;
    elToast.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => elToast.classList.remove("show"), 2400);
  }

  function esc(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // =====================================================
  // REAL-TIME SMART STUDY TIME ACCUMULATOR (ANTI-IDLE)
  // =====================================================
  const IDLE_LIMIT_MS = 3 * 60 * 1000;
  const timerState = {
    manualPaused: false,
    lastActivityAt: Date.now(),
    currentSessionKey: null,
    currentSessionProgramId: null,
    currentSessionLabel: "",
    currentSessionBlockId: null,
    currentSessionSeconds: 0,
    unsavedTicks: 0
  };

  function todayKey() { return new Date().toISOString().slice(0, 10); }

  function formatHMS(totalSec) {
    const s = Math.max(0, Math.floor(totalSec || 0));
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  }

  function formatShortDuration(totalSec) {
    const s = Math.max(0, Math.floor(totalSec || 0));
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    if (h > 0) return `${h}h ${m}m`;
    if (m > 0) return `${m}m ${s % 60}s`;
    return `${s}s`;
  }

  function getGlobalStudySeconds() {
    return PROGRAM_ORDER.reduce((acc, pid) => acc + (PDB(pid).studyTime.totalSeconds || 0), 0);
  }

  function getStudyContext() {
    const prog = P();
    if (!prog) return null;
    if (ui.view === "topic") {
      const t = getFlatTopics(ui.programId).find((x) => x.id === ui.topicId);
      if (t) return { key: `${ui.programId}:topic:${t.id}`, programId: ui.programId, blockId: t.blockId, topicId: t.id, label: `${prog.shortName} · ${t.blockCode} · ${t.shortTitle}` };
    }
    if (ui.view === "workshop") {
      const b = prog.blocks.find((x) => x.id === ui.blockId);
      if (b) return { key: `${ui.programId}:ws:${b.id}`, programId: ui.programId, blockId: b.id, topicId: null, label: `${prog.shortName} · ${b.code} · Taller práctico` };
    }
    if (ui.view === "exam") {
      const b = prog.blocks.find((x) => x.id === ui.blockId);
      if (b) return { key: `${ui.programId}:exam:${b.id}`, programId: ui.programId, blockId: b.id, topicId: null, label: `${prog.shortName} · ${b.code} · Examen` };
    }
    return null;
  }

  function flushStudySession() {
    if (timerState.currentSessionSeconds >= 3 && timerState.currentSessionLabel && timerState.currentSessionProgramId) {
      const pdb = PDB(timerState.currentSessionProgramId);
      pdb.studyTime.sessions.unshift({
        date: new Date().toISOString(),
        blockId: timerState.currentSessionBlockId,
        label: timerState.currentSessionLabel,
        seconds: timerState.currentSessionSeconds
      });
      if (pdb.studyTime.sessions.length > 40) pdb.studyTime.sessions.length = 40;
      saveDb();
    }
    timerState.currentSessionSeconds = 0;
  }

  function updateTimerUI() {
    const ctx = getStudyContext();
    const isIdle = Date.now() - timerState.lastActivityAt > IDLE_LIMIT_MS;
    const isHidden = document.visibilityState !== "visible";
    const isCounting = Boolean(ctx) && !timerState.manualPaused && !isIdle && !isHidden;

    const shownSec = ui.view === "catalog" ? getGlobalStudySeconds() : (PDB().studyTime.totalSeconds || 0);
    const totalStr = formatHMS(shownSec);
    elTopTimerValue.textContent = totalStr;
    elSidebarTimeLabel.textContent = totalStr;

    elTopTimerPill.classList.remove("active", "paused");
    if (isCounting) {
      elTopTimerPill.classList.add("active");
      elTopTimerState.textContent = "Estudiando";
    } else if (timerState.manualPaused) {
      elTopTimerPill.classList.add("paused");
      elTopTimerState.textContent = "Pausado";
    } else if (ctx && isIdle) {
      elTopTimerPill.classList.add("paused");
      elTopTimerState.textContent = "Inactivo";
    } else {
      elTopTimerState.textContent = "En espera";
    }

    const clsBadge = document.getElementById("classTimerValue");
    if (clsBadge && ctx && ctx.topicId) {
      clsBadge.textContent = formatHMS(PDB(ctx.programId).studyTime.byTopic[ctx.topicId] || 0);
    }
    const dashKpi = document.getElementById("dashTimeKpi");
    if (dashKpi) {
      dashKpi.textContent = formatShortDuration(PDB().studyTime.totalSeconds || 0);
    }
  }

  ["mousemove", "mousedown", "keydown", "scroll", "touchstart"].forEach((evt) => {
    window.addEventListener(evt, () => { timerState.lastActivityAt = Date.now(); }, { passive: true });
  });
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState !== "visible") saveDb();
    updateTimerUI();
  });
  window.addEventListener("beforeunload", () => {
    stopAudio(true);
    flushStudySession();
    saveDb();
  });

  setInterval(() => {
    const ctx = getStudyContext();
    if (!ctx) {
      if (timerState.currentSessionKey) {
        flushStudySession();
        timerState.currentSessionKey = null;
      }
      updateTimerUI();
      return;
    }

    if (timerState.currentSessionKey && timerState.currentSessionKey !== ctx.key) {
      flushStudySession();
    }
    timerState.currentSessionKey = ctx.key;
    timerState.currentSessionProgramId = ctx.programId;
    timerState.currentSessionLabel = ctx.label;
    timerState.currentSessionBlockId = ctx.blockId;

    const isIdle = Date.now() - timerState.lastActivityAt > IDLE_LIMIT_MS;
    const isVisible = document.visibilityState === "visible";

    if (!timerState.manualPaused && !isIdle && isVisible) {
      const pdb = PDB(ctx.programId);
      pdb.studyTime.totalSeconds = (pdb.studyTime.totalSeconds || 0) + 1;
      pdb.studyTime.byBlock[ctx.blockId] = (pdb.studyTime.byBlock[ctx.blockId] || 0) + 1;
      if (ctx.topicId) {
        pdb.studyTime.byTopic[ctx.topicId] = (pdb.studyTime.byTopic[ctx.topicId] || 0) + 1;
      }
      const tk = todayKey();
      pdb.studyTime.byDay[tk] = (pdb.studyTime.byDay[tk] || 0) + 1;
      timerState.currentSessionSeconds += 1;
      timerState.unsavedTicks += 1;
      if (timerState.unsavedTicks >= 5) {
        saveDb();
        timerState.unsavedTicks = 0;
      }
    }
    updateTimerUI();
  }, 1000);

  // =====================================================
  // SPANISH AUDIO NARRATOR (VISUAL + AUDITORY LEARNING)
  // =====================================================
  const audioState = {
    supported: typeof window !== "undefined" && "speechSynthesis" in window,
    voices: [],
    selectedVoiceURI: localStorage.getItem("campus_voice_uri_v1") || "",
    rate: Number(localStorage.getItem("campus_voice_rate_v1") || "1"),
    autoAdvance: localStorage.getItem("campus_voice_auto_v1") === "1",
    playing: false,
    paused: false,
    queue: [],
    idx: 0,
    statusText: "",
    runToken: 0
  };

  function loadSpanishVoices() {
    if (!audioState.supported) return;
    const all = window.speechSynthesis.getVoices() || [];
    const es = all.filter((v) => /^es/i.test(v.lang));
    es.sort((a, b) => {
      const score = (v) => {
        let s = 0;
        if (/es-ES/i.test(v.lang)) s += 20;
        if (/natural|online|neural|google/i.test(v.name)) s += 30;
        if (/helena|alvaro|elvira|pablo|laura|sabina|dalia/i.test(v.name)) s += 10;
        return s;
      };
      return score(b) - score(a);
    });
    audioState.voices = es.length ? es : all.slice(0, 8);
    if (!audioState.selectedVoiceURI || !audioState.voices.some((v) => v.voiceURI === audioState.selectedVoiceURI)) {
      if (audioState.voices[0]) audioState.selectedVoiceURI = audioState.voices[0].voiceURI;
    }
    updateAudioBarUI();
  }

  if (audioState.supported) {
    loadSpanishVoices();
    window.speechSynthesis.onvoiceschanged = loadSpanishVoices;
  }

  function cleanForSpeech(mdText) {
    return String(mdText || "")
      .replace(/```[\s\S]*?```/g, " ")
      .replace(/\|/g, ", ")
      .replace(/[#*_`>~]/g, "")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}✓✕▶⏸⏹]/gu, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function splitIntoSpeechChunks(label, rawText) {
    const clean = cleanForSpeech(rawText);
    if (!clean) return [];
    const sentences = clean.split(/(?<=[.!?])\s+/);
    const chunks = [];
    let buf = "";
    for (const s of sentences) {
      if ((buf + " " + s).length > 220 && buf) {
        chunks.push({ label, text: buf.trim() });
        buf = s;
      } else {
        buf = buf ? buf + " " + s : s;
      }
    }
    if (buf.trim()) chunks.push({ label, text: buf.trim() });
    return chunks;
  }

  function buildSlideSpeechQueue(t, slide) {
    const q = [];
    if (slide.type === "cover") {
      q.push(...splitIntoSpeechChunks("Portada", `${t.blockCode}: ${t.blockName}. ${t.title}.`));
      if (t.outcome) q.push(...splitIntoSpeechChunks("Meta principal", `Qué dominarás al terminar esta clase: ${t.outcome}`));
      const objs = t.deck.objectives || [];
      if (objs.length) {
        q.push(...splitIntoSpeechChunks("Objetivos", "Objetivos de aprendizaje:"));
        objs.forEach((o, i) => q.push(...splitIntoSpeechChunks(`Objetivo ${i + 1}`, `${i + 1}. ${o.text}`)));
      }
    } else if (slide.type === "module") {
      const m = slide.mod;
      q.push(...splitIntoSpeechChunks(`Clave ${m.num}`, `Clave ${Number(m.num)}. ${m.title}.`));
      q.push(...splitIntoSpeechChunks("Lo más importante", `Lo más importante: ${m.fullExplanation || m.highlight}`));
      if (ui.angleTab === "defs" && m.definitions?.length) {
        q.push(...splitIntoSpeechChunks("Definiciones", "Conceptos y definiciones clave:"));
        m.definitions.forEach((d) => q.push(...splitIntoSpeechChunks(d.term, `${d.term}: ${d.desc}`)));
      } else if (ui.angleTab === "example" && m.example) {
        q.push(...splitIntoSpeechChunks("Ejemplo real", `Ejemplo real en pyme: ${m.example}`));
      } else if (ui.angleTab === "mistakes" && m.mistakes?.length) {
        q.push(...splitIntoSpeechChunks("Errores a evitar", "Errores frecuentes que debes evitar:"));
        m.mistakes.forEach((err, i) => q.push(...splitIntoSpeechChunks(`Error ${i + 1}`, `Error ${i + 1}: ${err}`)));
      } else if (ui.angleTab === "check" && m.questions?.length) {
        q.push(...splitIntoSpeechChunks("Autochequeo", "Preguntas de comprobación para reflexionar:"));
        m.questions.forEach((pq, i) => q.push(...splitIntoSpeechChunks(`Pregunta ${i + 1}`, `${pq}`)));
      }
    } else if (slide.type === "case") {
      const cs = slide.cs || {};
      q.push(...splitIntoSpeechChunks("Caso práctico", `Caso práctico: ${cs.title || "Reto empresarial"}.`));
      if (cs.context) q.push(...splitIntoSpeechChunks("Contexto", `Contexto: ${cs.context}`));
      if (cs.problem) q.push(...splitIntoSpeechChunks("Problema", `Situación o problema: ${cs.problem}`));
      if (cs.task) q.push(...splitIntoSpeechChunks("Tu misión", `Tu misión: ${cs.task}`));
      if (ui.solutionRevealed && cs.solutions) {
        q.push(...splitIntoSpeechChunks("Criterios del experto", `Criterios de solución del experto: ${cs.solutions}`));
      }
    } else if (slide.type === "flashcards") {
      q.push(...splitIntoSpeechChunks("Glosario", "Repaso auditivo de términos clave del glosario."));
      (slide.cards || []).forEach((c, i) => {
        q.push(...splitIntoSpeechChunks(`Tarjeta ${i + 1}: ${c.term}`, `${c.term}. ${c.def}`));
      });
    } else if (slide.type === "summary") {
      q.push(...splitIntoSpeechChunks("Resumen ejecutivo", `Resumen ejecutivo de ${t.shortTitle}.`));
      (t.deck.modules || []).forEach((m) => {
        q.push(...splitIntoSpeechChunks(`Clave ${m.num}`, `Clave ${Number(m.num)}, ${m.title}. ${m.highlight}`));
      });
    }
    return q;
  }

  function updateAudioBarUI() {
    const playBtn = document.getElementById("audioPlayBtn");
    const stopBtn = document.getElementById("audioStopBtn");
    const statusEl = document.getElementById("audioStatusLine");
    const voiceSel = document.getElementById("audioVoiceSel");

    if (voiceSel && audioState.voices.length) {
      if (voiceSel.options.length !== audioState.voices.length) {
        voiceSel.innerHTML = audioState.voices.map((v) =>
          `<option value="${esc(v.voiceURI)}" ${v.voiceURI === audioState.selectedVoiceURI ? "selected" : ""}>${esc(v.name.replace(/Microsoft |Google /g, "").slice(0, 30))} (${esc(v.lang)})</option>`
        ).join("");
      } else {
        voiceSel.value = audioState.selectedVoiceURI;
      }
    }
    if (playBtn) {
      playBtn.classList.toggle("speaking", audioState.playing && !audioState.paused);
      if (audioState.playing && !audioState.paused) {
        playBtn.innerHTML = `<span class="audio-waves"><span></span><span></span><span></span></span> ⏸ Pausar audio`;
      } else if (audioState.playing && audioState.paused) {
        playBtn.innerHTML = `▶ Reanudar audio`;
      } else {
        playBtn.innerHTML = `🔊 Escuchar diapositiva`;
      }
    }
    if (stopBtn) stopBtn.style.display = audioState.playing ? "inline-flex" : "none";
    if (statusEl) {
      statusEl.textContent = audioState.playing
        ? (audioState.paused ? "⏸ Audio en pausa" : `🎙️ ${audioState.statusText}`)
        : "Modo visual + auditivo listo";
    }
  }

  function stopAudio(silent = false) {
    audioState.runToken++;
    if (audioState.supported) {
      try { window.speechSynthesis.cancel(); } catch {}
    }
    audioState.playing = false;
    audioState.paused = false;
    audioState.queue = [];
    audioState.idx = 0;
    audioState.statusText = "";
    if (!silent) updateAudioBarUI();
  }

  function speakQueueNext(token, programId, topicId, totalSlides) {
    if (token !== audioState.runToken) return;
    if (audioState.idx >= audioState.queue.length) {
      audioState.playing = false;
      audioState.paused = false;
      audioState.statusText = "Diapositiva finalizada";
      updateAudioBarUI();
      if (audioState.autoAdvance && ui.view === "topic" && ui.programId === programId && ui.topicId === topicId && ui.slideIndex < totalSlides - 1) {
        ui.slideIndex++;
        ui.angleTab = "defs";
        render();
        setTimeout(() => {
          const t = getFlatTopics(ui.programId).find((x) => x.id === ui.topicId);
          if (t) startSlideAudio(t);
        }, 350);
      }
      return;
    }

    const item = audioState.queue[audioState.idx];
    audioState.statusText = `${item.label} (${audioState.idx + 1}/${audioState.queue.length})`;
    updateAudioBarUI();

    const utt = new SpeechSynthesisUtterance(item.text);
    utt.lang = "es-ES";
    utt.rate = audioState.rate || 1;
    const chosenVoice = audioState.voices.find((v) => v.voiceURI === audioState.selectedVoiceURI);
    if (chosenVoice) utt.voice = chosenVoice;

    utt.onend = () => {
      if (token !== audioState.runToken) return;
      audioState.idx++;
      speakQueueNext(token, programId, topicId, totalSlides);
    };
    utt.onerror = (ev) => {
      if (token !== audioState.runToken) return;
      if (ev.error === "interrupted" || ev.error === "canceled") return;
      audioState.idx++;
      speakQueueNext(token, programId, topicId, totalSlides);
    };

    timerState.lastActivityAt = Date.now();
    window.speechSynthesis.speak(utt);
  }

  function startSlideAudio(t) {
    if (!audioState.supported) { toast("Tu navegador no soporta síntesis de voz"); return; }
    const slides = buildSlides(t);
    const slide = slides[ui.slideIndex];
    const queue = buildSlideSpeechQueue(t, slide);
    if (!queue.length) { toast("No hay texto narrable en esta diapositiva"); return; }
    stopAudio(true);
    const token = ++audioState.runToken;
    audioState.queue = queue;
    audioState.idx = 0;
    audioState.playing = true;
    audioState.paused = false;
    speakQueueNext(token, ui.programId, t.id, slides.length);
  }

  // =====================================================
  // STATS & CERTIFICATES (MULTI-PROGRAM)
  // =====================================================
  function getStats(pid = ui.programId) {
    const prog = PROGRAMS[pid];
    const pdb = PDB(pid);
    const flat = getFlatTopics(pid);
    const doneSet = new Set(pdb.completedTopics || []);
    const topicsDone = flat.filter((t) => doneSet.has(t.id)).length;
    const examsPassed = prog.blocks.filter((b) => pdb.exams[b.id]?.passed).length;
    const workshopsDone = prog.blocks.filter((b) => pdb.workshops[b.id]?.completed).length;

    const passedScores = prog.blocks
      .map((b) => pdb.exams[b.id]?.bestScore)
      .filter((s) => typeof s === "number");
    const avgScore = passedScores.length
      ? Math.round(passedScores.reduce((a, c) => a + c, 0) / passedScores.length)
      : 0;

    const pctTopics = flat.length ? topicsDone / flat.length : 0;
    const pctExams = prog.blocks.length ? examsPassed / prog.blocks.length : 0;
    const pctWorkshops = prog.blocks.length ? workshopsDone / prog.blocks.length : 0;
    const overallPct = Math.round((pctTopics * 0.4 + pctExams * 0.4 + pctWorkshops * 0.2) * 100);

    const certUnlocked = examsPassed === prog.blocks.length && prog.blocks.length > 0;
    if (certUnlocked && !pdb.certIssuedAt) {
      pdb.certIssuedAt = new Date().toISOString();
      saveDb();
    }

    return { doneSet, topicsDone, examsPassed, workshopsDone, avgScore, overallPct, certUnlocked, totalBlocks: prog.blocks.length, totalTopics: flat.length };
  }

  function getCertId(pid = ui.programId) {
    const prog = PROGRAMS[pid];
    const prefix = prog?.certPrefix || "CERT-2026";
    const seed = `${db.profile.name}|${db.profile.email}|${prefix}`;
    let h = 2166136261;
    for (let i = 0; i < seed.length; i++) {
      h ^= seed.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    const hex = (h >>> 0).toString(16).toUpperCase().padStart(8, "0").slice(0, 6);
    return `${prefix}-${hex}`;
  }

  function generateQrSvg(code) {
    const size = 21;
    const grid = Array.from({ length: size }, () => Array(size).fill(false));
    function drawFinder(r0, c0) {
      for (let r = 0; r < 7; r++) {
        for (let c = 0; c < 7; c++) {
          grid[r0 + r][c0 + c] = r === 0 || r === 6 || c === 0 || c === 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4);
        }
      }
    }
    drawFinder(0, 0); drawFinder(0, size - 7); drawFinder(size - 7, 0);
    let hash = 5381;
    for (let i = 0; i < code.length; i++) hash = ((hash << 5) + hash + code.charCodeAt(i)) >>> 0;
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if ((r < 8 && c < 8) || (r < 8 && c >= size - 8) || (r >= size - 8 && c < 8)) continue;
        hash = (Math.imul(hash, 1664525) + 1013904223) >>> 0;
        grid[r][c] = (hash & 1) === 1;
      }
    }
    let rects = "";
    const cell = 4;
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (grid[r][c]) rects += `<rect x="${c * cell + 4}" y="${r * cell + 4}" width="${cell}" height="${cell}" fill="#0f172a"/>`;
      }
    }
    const dim = size * cell + 8;
    return `<svg width="88" height="88" viewBox="0 0 ${dim} ${dim}" xmlns="http://www.w3.org/2000/svg" style="border:1px solid #cbd5e1; border-radius:6px; background:#fff;">${rects}</svg>`;
  }

  // =====================================================
  // MARKDOWN RENDERER
  // =====================================================
  function parseSections(raw) {
    const lines = raw.replace(/\r\n/g, "\n").split("\n");
    const sections = [];
    let curH = null, curL = [], inFence = false;
    for (const line of lines) {
      if (line.trim().startsWith("```")) {
        inFence = !inFence;
        if (curH !== null) curL.push(line);
        continue;
      }
      if (!inFence && line.startsWith("## ")) {
        if (curH !== null) sections.push({ heading: curH, content: curL.join("\n").trim() });
        curH = line.slice(3).trim(); curL = [];
      } else if (curH !== null) curL.push(line);
    }
    if (curH !== null) sections.push({ heading: curH, content: curL.join("\n").trim() });
    return sections;
  }

  function inlineMd(text) {
    let s = esc(text);
    s = s.replace(/`([^`]+)`/g, "<code>$1</code>");
    s = s.replace(/\*\*\*([^*]+)\*\*\*/g, "<strong><em>$1</em></strong>");
    s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>");
    s = s.replace(/<em>\((Nivel de Bloom:[^)]+)\)<\/em>|\((Nivel de Bloom:[^)]+)\)/gi, (_, a, b) => `<span class="bloom-pill">${a || b}</span>`);
    return s;
  }

  function renderMd(md) {
    const lines = String(md || "").replace(/\r\n/g, "\n").split("\n");
    const out = [];
    let i = 0;
    const isSep = (l) => /^\s*\|?(\s*:?-+:?\s*\|)+\s*:?-+:?\s*\|?\s*$/.test(l);

    while (i < lines.length) {
      const line = lines[i];
      if (line.trim().startsWith("```")) {
        const buf = []; i++;
        while (i < lines.length && !lines[i].trim().startsWith("```")) { buf.push(lines[i]); i++; }
        i++;
        out.push(`<pre><code>${esc(buf.join("\n"))}</code></pre>`);
        continue;
      }
      if (!line.trim()) { i++; continue; }
      if (/^\s*(---+|\*\*\*+)\s*$/.test(line)) { out.push("<hr />"); i++; continue; }
      const hm = line.match(/^(#{1,4})\s+(.*)$/);
      if (hm) { out.push(`<h${Math.min(hm[1].length, 4)}>${inlineMd(hm[2].trim())}</h${Math.min(hm[1].length, 4)}>`); i++; continue; }

      if (line.includes("|") && i + 1 < lines.length && isSep(lines[i + 1])) {
        const parseR = (r) => r.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());
        const headers = parseR(line); i += 2;
        const rows = [];
        while (i < lines.length && lines[i].includes("|") && lines[i].trim() !== "") { rows.push(parseR(lines[i])); i++; }
        out.push(`<div class="table-wrap"><table><thead><tr>${headers.map((h) => `<th>${inlineMd(h)}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${headers.map((_, idx) => `<td>${inlineMd(r[idx] || "")}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
        continue;
      }
      if (line.trim().startsWith(">")) {
        const bq = [];
        while (i < lines.length && lines[i].trim().startsWith(">")) { bq.push(lines[i].trim().replace(/^>\s?/, "")); i++; }
        out.push(`<blockquote>${bq.map(inlineMd).join("<br />")}</blockquote>`);
        continue;
      }
      if (/^\s*[-*+]\s+/.test(line)) {
        let html = "<ul>";
        while (i < lines.length && /^\s*[-*+]\s+/.test(lines[i])) {
          const indent = lines[i].match(/^(\s*)/)[1].length;
          const body = lines[i].replace(/^\s*[-*+]\s+/, "");
          html += indent >= 2 ? `<li style="margin-left:18px; list-style-type:circle;">${inlineMd(body)}</li>` : `<li>${inlineMd(body)}</li>`;
          i++;
        }
        html += "</ul>"; out.push(html); continue;
      }
      if (/^\s*\d+\.\s+/.test(line)) {
        let html = "<ol>";
        while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
          html += `<li>${inlineMd(lines[i].replace(/^\s*\d+\.\s+/, ""))}</li>`; i++;
        }
        html += "</ol>"; out.push(html); continue;
      }
      const p = [line.trim()]; i++;
      while (
        i < lines.length && lines[i].trim() !== "" && !lines[i].trim().startsWith("#") &&
        !lines[i].trim().startsWith("```") && !lines[i].trim().startsWith(">") &&
        !/^\s*[-*+]\s+/.test(lines[i]) && !/^\s*\d+\.\s+/.test(lines[i]) &&
        !/^\s*(---+|\*\*\*+)\s*$/.test(lines[i]) &&
        !(lines[i].includes("|") && i + 1 < lines.length && isSep(lines[i + 1]))
      ) { p.push(lines[i].trim()); i++; }
      out.push(`<p>${inlineMd(p.join(" "))}</p>`);
    }
    return out.join("\n");
  }

  // =====================================================
  // NAVIGATION
  // =====================================================
  function selectProgram(pid, targetView = "dashboard") {
    stopAudio(true);
    flushStudySession();
    ui.programId = pid;
    ui.blockId = "b01";
    ui.topicId = getFlatTopics(pid)[0]?.id || "b01-t01";
    ui.openBlocks = new Set(["b01"]);
    ui.slideIndex = 0;
    ui.angleTab = "defs";
    ui.deckFullscreen = false;
    ui.studentReadingMode = false;
    ui.view = targetView;
    render();
    updateTimerUI();
    elViewport.scrollTop = 0;
  }

  function navigate(view, opts = {}) {
    stopAudio(true);
    flushStudySession();
    if (opts.programId) ui.programId = opts.programId;
    ui.view = view;
    if (opts.blockId) {
      ui.blockId = opts.blockId;
      ui.openBlocks.add(opts.blockId);
    }
    if (opts.topicId) {
      ui.topicId = opts.topicId;
      const found = getFlatTopics(ui.programId).find((t) => t.id === opts.topicId);
      if (found) {
        ui.blockId = found.blockId;
        ui.openBlocks.add(found.blockId);
      }
      ui.topicTab = "all";
      ui.slideIndex = 0;
      ui.angleTab = "defs";
      ui.solutionRevealed = false;
      ui.studentReadingMode = false;
      ui.deckFullscreen = false;
    }
    render();
    updateTimerUI();
    elViewport.scrollTop = 0;
  }

  // =====================================================
  // SIDEBAR
  // =====================================================
  function renderSidebar() {
    elTopName.textContent = db.profile.name.split(" ")[0] || "Alumno";
    const markEl = document.getElementById("sidebarBrandMark");
    const nameEl = document.getElementById("sidebarBrandName");
    const tagEl = document.getElementById("sidebarBrandTag");

    if (ui.view === "catalog") {
      markEl.textContent = "🏛️";
      nameEl.textContent = "Portal de Certificaciones";
      const totalTopicsAll = PROGRAM_ORDER.reduce((a, id) => a + PROGRAMS[id].totalTopics, 0);
      tagEl.textContent = `${PROGRAM_ORDER.length} programas · ${totalTopicsAll} temas`;
      const certsDone = PROGRAM_ORDER.filter((id) => getStats(id).certUnlocked).length;
      const pctAll = Math.round(PROGRAM_ORDER.reduce((a, id) => a + getStats(id).overallPct, 0) / PROGRAM_ORDER.length);
      elProgTitle.textContent = `Avance global (${certsDone}/${PROGRAM_ORDER.length} certs)`;
      elProgLabel.textContent = `${pctAll}%`;
      elProgBar.style.width = `${pctAll}%`;

      elNav.innerHTML = `
        <button class="nav-link active" data-nav="catalog">
          <span class="left"><span>🏛️</span><span>Elegir Programa</span></span>
        </button>
        <button class="nav-link" data-nav="verify">
          <span class="left"><span>🔍</span><span>Verificar Credencial</span></span>
        </button>
        <div class="nav-divider">Certificados Disponibles</div>
        ${PROGRAM_ORDER.map((pid) => {
          const pr = PROGRAMS[pid];
          const st = getStats(pid);
          return `
            <button class="nav-link" data-pick-prog="${pid}">
              <span class="left"><span>${pr.icon}</span><span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${esc(pr.shortName)}</span></span>
              <span class="block-status-dot ${st.certUnlocked ? "passed" : ""}">${st.overallPct}%</span>
            </button>
          `;
        }).join("")}
      `;
      elNav.querySelectorAll("[data-nav]").forEach((b) => (b.onclick = () => navigate(b.getAttribute("data-nav"))));
      elNav.querySelectorAll("[data-pick-prog]").forEach((b) => (b.onclick = () => selectProgram(b.getAttribute("data-pick-prog"), "dashboard")));
      return;
    }

    const prog = P();
    const stats = getStats();
    const pdb = PDB();

    markEl.textContent = prog.icon;
    nameEl.textContent = prog.shortName;
    tagEl.textContent = `${prog.creditsLabel} · ${prog.durationLabel}`;
    elProgTitle.textContent = "Avance hacia el certificado";
    elProgLabel.textContent = `${stats.overallPct}%`;
    elProgBar.style.width = `${stats.overallPct}%`;

    let html = `
      <button class="nav-link" data-nav="catalog" style="background:var(--surface-2); margin-bottom:8px;">
        <span class="left"><span>🏛️</span><span>Cambiar de Programa</span></span>
      </button>
      <button class="nav-link ${ui.view === "dashboard" ? "active" : ""}" data-nav="dashboard">
        <span class="left"><span>🏠</span><span>Inicio del Programa</span></span>
      </button>
      <button class="nav-link ${ui.view === "certificate" ? "active" : ""}" data-nav="certificate">
        <span class="left"><span>🎓</span><span>Mi Certificado</span></span>
        <span class="block-status-dot ${stats.certUnlocked ? "passed" : ""}">${stats.certUnlocked ? "Listo" : `${stats.examsPassed}/${stats.totalBlocks}`}</span>
      </button>
      <button class="nav-link ${ui.view === "verify" ? "active" : ""}" data-nav="verify">
        <span class="left"><span>🔍</span><span>Verificar Credencial</span></span>
      </button>
      <button class="nav-link ${ui.view === "portfolio" ? "active" : ""}" data-nav="portfolio">
        <span class="left"><span>📁</span><span>Mi Portafolio</span></span>
      </button>
      <div class="nav-divider">Itinerario (${prog.blocks.length} Bloques)</div>
    `;

    prog.blocks.forEach((b) => {
      const open = ui.openBlocks.has(b.id);
      const ex = pdb.exams[b.id];
      const ws = pdb.workshops[b.id];
      html += `
        <div class="block-acc ${open ? "open" : ""}">
          <button class="block-btn" data-toggle-b="${b.id}">
            <span class="left">
              <span>${b.icon}</span>
              <span class="block-title-sm">${b.num}. ${esc(b.name)}</span>
            </span>
            <span class="block-status-dot ${ex?.passed ? "passed" : ""}">${ex?.passed ? `${ex.bestScore}%` : `${b.topics.filter((t) => stats.doneSet.has(t.id)).length}/${b.topics.length}`}</span>
          </button>
          <div class="block-items">
            ${b.topics.map((t) => {
              const active = ui.view === "topic" && ui.topicId === t.id;
              const done = stats.doneSet.has(t.id);
              return `
                <div class="sub-item ${active ? "active" : ""} ${done ? "done" : ""}" data-open-topic="${t.id}">
                  <span class="check-mini">✓</span>
                  <span>${t.num}. ${esc(t.shortTitle)}</span>
                </div>
              `;
            }).join("")}
            <div class="sub-item special ${ui.view === "workshop" && ui.blockId === b.id ? "active" : ""} ${ws?.completed ? "passed" : ""}" data-open-workshop="${b.id}">
              <span>🛠️</span><span>Taller práctico ${ws?.completed ? "(Hecho)" : ""}</span>
            </div>
            <div class="sub-item special ${ui.view === "exam" && ui.blockId === b.id ? "active" : ""} ${ex?.passed ? "passed" : ""}" data-open-exam="${b.id}">
              <span>📝</span><span>Examen Bloque ${b.num} ${ex?.passed ? `(${ex.bestScore}%)` : ""}</span>
            </div>
          </div>
        </div>
      `;
    });

    elNav.innerHTML = html;
    elNav.querySelectorAll("[data-nav]").forEach((btn) => (btn.onclick = () => navigate(btn.getAttribute("data-nav"))));
    elNav.querySelectorAll("[data-toggle-b]").forEach((btn) => {
      btn.onclick = () => {
        const bid = btn.getAttribute("data-toggle-b");
        if (ui.openBlocks.has(bid)) ui.openBlocks.delete(bid);
        else ui.openBlocks.add(bid);
        renderSidebar();
      };
    });
    elNav.querySelectorAll("[data-open-topic]").forEach((el) => (el.onclick = () => navigate("topic", { topicId: el.getAttribute("data-open-topic") })));
    elNav.querySelectorAll("[data-open-workshop]").forEach((el) => (el.onclick = () => navigate("workshop", { blockId: el.getAttribute("data-open-workshop") })));
    elNav.querySelectorAll("[data-open-exam]").forEach((el) => (el.onclick = () => navigate("exam", { blockId: el.getAttribute("data-open-exam") })));
  }

  // =====================================================
  // VIEW 0: MULTI-PROGRAM CATALOG HOME PAGE
  // =====================================================
  function renderCatalog() {
    elCrumb.innerHTML = `<strong>🏛️ Portal de Certificaciones Ejecutivas Online</strong>`;
    const totalTopics = PROGRAM_ORDER.reduce((a, id) => a + PROGRAMS[id].totalTopics, 0);
    const totalHours = PROGRAM_ORDER.reduce((a, id) => a + PROGRAMS[id].totalHours, 0);
    const certsEarned = PROGRAM_ORDER.filter((id) => getStats(id).certUnlocked).length;
    const globalSec = getGlobalStudySeconds();

    elRoot.innerHTML = `
      <section class="hero-banner" style="background:linear-gradient(135deg, #0f172a 0%, #312e81 55%, #0e7490 100%);">
        <div class="hero-top">
          <div>
            <div class="hero-badge">🏛️ ${esc(db.profile.org)} · Plataforma Multi-Certificación</div>
            <h1>Elige tu Programa Certificado Online</h1>
            <p>Hola, <strong>${esc(db.profile.name)}</strong>. Selecciona el certificado que deseas cursar o continuar. Ambos programas incluyen presentaciones interactivas por diapositivas, narrador de audio en español, acumulador inteligente de tiempo, calculadoras prácticas, exámenes y diploma verificable por QR.</p>
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <button class="btn" id="catVerifyBtn" style="background:#fff; color:#0f172a; border:none;">🔍 Verificar un Certificado</button>
          </div>
        </div>
        <div class="kpi-grid">
          <div class="kpi-card"><div class="kpi-val">${PROGRAM_ORDER.length}</div><div class="kpi-lbl">Programas certificados activos</div></div>
          <div class="kpi-card"><div class="kpi-val">${totalTopics}</div><div class="kpi-lbl">Clases interactivas con audio</div></div>
          <div class="kpi-card"><div class="kpi-val">${totalHours} h</div><div class="kpi-lbl">Formación ejecutiva total</div></div>
          <div class="kpi-card"><div class="kpi-val">${certsEarned} / ${PROGRAM_ORDER.length}</div><div class="kpi-lbl">Diplomas obtenidos</div></div>
          <div class="kpi-card" id="catTimeKpi" style="cursor:pointer;"><div class="kpi-val">${formatShortDuration(globalSec)}</div><div class="kpi-lbl">⏱ Tiempo global de estudio</div></div>
        </div>
      </section>

      <div class="section-head">
        <h2>Programas de Certificación Disponibles</h2>
        <span class="pill">Progreso, exámenes y diplomas independientes por programa</span>
      </div>

      <div class="catalog-grid">
        ${PROGRAM_ORDER.map((pid) => {
          const pr = PROGRAMS[pid];
          const st = getStats(pid);
          const pSec = PDB(pid).studyTime.totalSeconds || 0;
          return `
            <div class="prog-card">
              <div class="prog-card-banner" style="background:${pr.heroGradient};">
                <span class="hero-chip">${pr.icon} ${esc(pr.badge)}</span>
                <h2>${esc(pr.programName)}</h2>
                <p>${esc(pr.tagline)}</p>
              </div>
              <div class="prog-card-body">
                <div>
                  <div class="prog-meta-chips" style="margin-bottom:12px;">
                    <span class="pill">${esc(pr.creditsLabel)}</span>
                    <span class="pill">⏱ ${esc(pr.durationLabel)}</span>
                    <span class="pill">📝 ${st.examsPassed}/${st.totalBlocks} exámenes</span>
                    <span class="pill">🕒 ${formatShortDuration(pSec)} estudiadas</span>
                    ${st.certUnlocked ? `<span class="pill success">🎓 Certificado emitido</span>` : ""}
                  </div>
                  <div style="font-size:12.5px; color:var(--text-soft); margin-bottom:10px;">
                    <strong>Dirigido a:</strong> ${esc(pr.audience)}
                  </div>
                  <div class="prog-row">
                    <span>Progreso del certificado</span>
                    <strong>${st.overallPct}% (${st.topicsDone}/${st.totalTopics} temas)</strong>
                  </div>
                  <div class="prog-track"><div class="prog-bar" style="width:${st.overallPct}%"></div></div>
                </div>

                <div style="display:flex; gap:8px; flex-wrap:wrap; margin-top:6px;">
                  <button class="btn btn-primary" data-enter-prog="${pid}" style="flex:1; justify-content:center; padding:10px 14px; font-size:13.5px;">
                    ${st.overallPct > 0 ? "▶ Continuar programa →" : "🚀 Entrar al programa →"}
                  </button>
                  ${st.certUnlocked ? `<button class="btn btn-gold" data-enter-cert="${pid}">🎓 Ver Diploma</button>` : ""}
                </div>
              </div>
            </div>
          `;
        }).join("")}
      </div>

      <div class="prog-features-grid">
        <div class="feat-mini"><strong>🎬 Clases tipo presentación</strong><span>8 diapositivas visuales por tema con ideas clave resaltadas, casos y flashcards 3D.</span></div>
        <div class="feat-mini"><strong>🔊 Audio + Auto-clase</strong><span>Narrador integrado en español para aprender viendo, escuchando o ambos a la vez.</span></div>
        <div class="feat-mini"><strong>⏱ Tiempo real anti-inactividad</strong><span>Acumula horas por clase, bloque y programa con pausa automática si cambias de pestaña.</span></div>
        <div class="feat-mini"><strong>🎓 Diplomas con QR verificable</strong><span>Certificado PDF A4 horizontal e ID único verificable por empresas y LinkedIn.</span></div>
      </div>
    `;

    document.getElementById("catVerifyBtn").onclick = () => navigate("verify");
    document.getElementById("catTimeKpi").onclick = openStudyTimeModal;
    elRoot.querySelectorAll("[data-enter-prog]").forEach((btn) => {
      btn.onclick = () => selectProgram(btn.getAttribute("data-enter-prog"), "dashboard");
    });
    elRoot.querySelectorAll("[data-enter-cert]").forEach((btn) => {
      btn.onclick = () => selectProgram(btn.getAttribute("data-enter-cert"), "certificate");
    });
  }

  // =====================================================
  // VIEW 1: PROGRAM DASHBOARD
  // =====================================================
  function renderDashboard() {
    const prog = P();
    const stats = getStats();
    const pdb = PDB();
    const flat = getFlatTopics(ui.programId);
    elCrumb.innerHTML = `<span style="cursor:pointer;" id="crumbCatalogLink">🏛️ Programas</span> › <strong>${esc(prog.shortName)}</strong>`;
    document.getElementById("crumbCatalogLink").onclick = () => navigate("catalog");

    const nextTopic = flat.find((t) => !stats.doneSet.has(t.id)) || flat[0];
    const nextExamBlock = prog.blocks.find((b) => !pdb.exams[b.id]?.passed);

    elRoot.innerHTML = `
      <section class="hero-banner" style="background:${prog.heroGradient};">
        <div class="hero-top">
          <div>
            <div class="hero-badge">${prog.icon} ${esc(prog.badge)} · ${esc(prog.durationLabel)}</div>
            <h1>${esc(prog.programName)}</h1>
            <p>Bienvenido/a, <strong>${esc(db.profile.name)}</strong>. Completa los ${prog.totalTopics} temas interactivos, los ${prog.blocks.length} talleres prácticos y aprueba los ${prog.blocks.length} exámenes de bloque (≥ ${A().passingScore} %) para emitir tu diploma oficial.</p>
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            ${stats.certUnlocked
              ? `<button class="btn btn-gold" id="heroCertBtn">🎓 Ver mi Certificado Oficial</button>`
              : `<button class="btn" id="heroContinueBtn" style="background:#fff; color:#1e1b4b; border:none;">▶ Continuar: ${esc(nextTopic.shortTitle)}</button>`
            }
            ${nextExamBlock ? `<button class="btn" id="heroExamBtn" style="background:rgba(255,255,255,0.16); color:#fff; border-color:rgba(255,255,255,0.3);">📝 Ir a Examen Bloque ${nextExamBlock.num}</button>` : ""}
          </div>
        </div>
        <div class="kpi-grid">
          <div class="kpi-card"><div class="kpi-val">${stats.overallPct}%</div><div class="kpi-lbl">Avance global ponderado</div></div>
          <div class="kpi-card"><div class="kpi-val">${stats.topicsDone} / ${prog.totalTopics}</div><div class="kpi-lbl">Temas completados</div></div>
          <div class="kpi-card"><div class="kpi-val">${stats.examsPassed} / ${prog.blocks.length}</div><div class="kpi-lbl">Exámenes aprobados</div></div>
          <div class="kpi-card"><div class="kpi-val">${stats.workshopsDone} / ${prog.blocks.length}</div><div class="kpi-lbl">Talleres guardados</div></div>
          <div class="kpi-card"><div class="kpi-val">${stats.avgScore ? `${stats.avgScore}%` : "—"}</div><div class="kpi-lbl">Nota media</div></div>
          <div class="kpi-card" id="dashTimeCard" style="cursor:pointer;" title="Ver desglose de tiempo"><div class="kpi-val" id="dashTimeKpi">${formatShortDuration(pdb.studyTime.totalSeconds)}</div><div class="kpi-lbl">⏱ Tiempo registrado</div></div>
        </div>
      </section>

      <div class="section-head">
        <h2>Itinerario de los ${prog.blocks.length} Bloques</h2>
        <span class="pill ${stats.certUnlocked ? "success" : "gold"}">${stats.certUnlocked ? "✅ Requisitos de certificación cumplidos" : `Faltan ${prog.blocks.length - stats.examsPassed} exámenes para certificar`}</span>
      </div>

      <div class="blocks-grid">
        ${prog.blocks.map((b) => {
          const doneCount = b.topics.filter((t) => stats.doneSet.has(t.id)).length;
          const pct = b.topics.length ? Math.round((doneCount / b.topics.length) * 100) : 0;
          const ex = pdb.exams[b.id];
          const ws = pdb.workshops[b.id];
          return `
            <div class="b-card">
              <div>
                <div class="b-card-top">
                  <span class="pill">${b.icon} ${esc(b.code)} · ${b.hours} h</span>
                  ${ex?.passed ? `<span class="pill success">✓ Aprobado (${ex.bestScore}%)</span>` : `<span class="pill">${pct}% lecciones</span>`}
                </div>
                <h3>${esc(b.name)}</h3>
                <p>${esc(b.desc)}</p>
                <div class="b-metrics">
                  <span class="pill">${doneCount}/${b.topics.length} temas</span>
                  <span class="pill">⏱ ${formatShortDuration(pdb.studyTime.byBlock[b.id] || 0)}</span>
                  <span class="pill ${ws?.completed ? "success" : ""}">🛠️ Taller: ${ws?.completed ? "Guardado" : "Pendiente"}</span>
                  <span class="pill ${ex?.passed ? "success" : ex ? "danger" : ""}">📝 Examen: ${ex ? `${ex.bestScore}%` : "Sin hacer"}</span>
                </div>
                <div class="prog-track"><div class="prog-bar" style="width:${pct}%"></div></div>
              </div>
              <div class="b-actions">
                <button class="btn btn-primary" data-dash-study="${b.topics[0]?.id || ""}">Estudiar</button>
                <button class="btn" data-dash-ws="${b.id}">🛠️ Taller</button>
                <button class="btn ${ex?.passed ? "btn-success" : "btn-gold"}" data-dash-exam="${b.id}">📝 Examen</button>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;

    const cBtn = document.getElementById("heroContinueBtn");
    if (cBtn) cBtn.onclick = () => navigate("topic", { topicId: nextTopic.id });
    document.getElementById("dashTimeCard").onclick = openStudyTimeModal;
    const certBtn = document.getElementById("heroCertBtn");
    if (certBtn) certBtn.onclick = () => navigate("certificate");
    const exBtn = document.getElementById("heroExamBtn");
    if (exBtn) exBtn.onclick = () => navigate("exam", { blockId: nextExamBlock.id });

    elRoot.querySelectorAll("[data-dash-study]").forEach((b) => (b.onclick = () => navigate("topic", { topicId: b.getAttribute("data-dash-study") })));
    elRoot.querySelectorAll("[data-dash-ws]").forEach((b) => (b.onclick = () => navigate("workshop", { blockId: b.getAttribute("data-dash-ws") })));
    elRoot.querySelectorAll("[data-dash-exam]").forEach((b) => (b.onclick = () => navigate("exam", { blockId: b.getAttribute("data-dash-exam") })));
  }

  // =====================================================
  // VIEW 2: TOPIC (INTERACTIVE DECK + TRAINER GUIDE)
  // =====================================================
  function buildSlides(t) {
    const deck = t.deck || { objectives: [], modules: [], caseStudy: {}, flashcards: [] };
    const slides = [{ type: "cover", label: "Portada" }];
    deck.modules.forEach((m, idx) => slides.push({ type: "module", label: `Clave ${idx + 1}`, mod: m, modIdx: idx }));
    slides.push({ type: "case", label: "Caso Real", cs: deck.caseStudy });
    if (deck.flashcards && deck.flashcards.length) slides.push({ type: "flashcards", label: "Flashcards", cards: deck.flashcards });
    slides.push({ type: "summary", label: "Cierre" });
    return slides;
  }

  function bloomClass(bloom) {
    const b = (bloom || "").toLowerCase();
    if (b.includes("record")) return "bloom-recordar";
    if (b.includes("compren")) return "bloom-comprender";
    if (b.includes("aplic")) return "bloom-aplicar";
    if (b.includes("analiz")) return "bloom-analizar";
    if (b.includes("evalu")) return "bloom-evaluar";
    if (b.includes("crea")) return "bloom-crear";
    return "bloom-aplicar";
  }

  function renderTopic() {
    const flat = getFlatTopics(ui.programId);
    const stats = getStats();
    const t = flat.find((x) => x.id === ui.topicId) || flat[0];
    const idx = flat.findIndex((x) => x.id === t.id);
    const prev = idx > 0 ? flat[idx - 1] : null;
    const next = idx < flat.length - 1 ? flat[idx + 1] : null;
    const isLastInBlock = !next || next.blockId !== t.blockId;
    const isDone = stats.doneSet.has(t.id);

    elCrumb.innerHTML = `${esc(P().shortName)} › ${esc(t.blockCode)} › <strong>${esc(t.title)}</strong>`;

    if (ui.role === "student" && !ui.studentReadingMode) {
      renderStudentDeck(t, prev, next, isLastInBlock, isDone);
      return;
    }

    const sections = parseSections(t.raw);
    const trainerTabs = [
      { id: "all", label: "Vista completa (10 secciones)", match: () => true },
      { id: "t12", label: "1-2. Ficha y Objetivos", match: (h) => /^(1\.|2\.)/.test(h) },
      { id: "t3", label: "3. Contenidos", match: (h) => /^3\./.test(h) },
      { id: "t45", label: "4-5. Metodología y Actividades", match: (h) => /^(4\.|5\.)/.test(h) },
      { id: "t6", label: "6. Caso Práctico", match: (h) => /^6\./.test(h) },
      { id: "t7", label: "7. Evaluación y Rúbrica", match: (h) => /^7\./.test(h) },
      { id: "t810", label: "8-10. Materiales, Adaptaciones y Cierre", match: (h) => /^(8\.|9\.|10\.|Siguientes)/i.test(h) }
    ];
    if (!trainerTabs.some((x) => x.id === ui.topicTab)) ui.topicTab = "all";
    const currentTab = trainerTabs.find((x) => x.id === ui.topicTab);
    const visible = sections.filter((s) => currentTab.match(s.heading));

    elRoot.innerHTML = `
      <div class="card">
        <div style="display:flex; flex-wrap:wrap; gap:7px; margin-bottom:10px;">
          <span class="pill">${t.blockIcon} ${esc(t.blockCode)} · ${esc(t.blockName)}</span>
          <span class="pill">⏱ ${t.hours} horas</span>
          <span class="pill">${ui.role === "trainer" ? "👩‍🏫 Vista Formador (Guía docente 10 secciones)" : "📄 Modo Lectura Completa"}</span>
          ${isDone ? `<span class="pill success">✅ Completado</span>` : ""}
        </div>
        <h1 style="margin:0 0 12px; font-size:24px;">${esc(t.title)}</h1>
        <div style="display:flex; flex-wrap:wrap; gap:8px;">
          ${ui.role === "student" ? `<button class="btn btn-primary" id="backToDeckBtn">🎬 Volver a Presentación Interactiva</button>` : ""}
          <button class="btn ${isDone ? "btn-success" : "btn-primary"}" id="markTopicBtn">${isDone ? "✅ Completado" : "✓ Marcar completado"}</button>
          <button class="btn" id="jumpWorkshopBtn">🛠️ Taller del ${esc(t.blockCode)}</button>
          <button class="btn btn-gold" id="jumpExamBtn">📝 Examen del ${esc(t.blockCode)}</button>
          <button class="btn" id="downloadTopicMdBtn">⬇️ Descargar .md</button>
        </div>
      </div>

      <div class="tabs-bar">
        ${trainerTabs.map((tb) => `<button class="tab-btn ${ui.topicTab === tb.id ? "active" : ""}" data-ttab="${tb.id}">${tb.label}</button>`).join("")}
      </div>

      <article class="card md">
        ${visible.map((s) => `<section style="margin-bottom:28px;"><h2>${esc(s.heading)}</h2>${renderMd(s.content)}</section>`).join("")}
      </article>

      <div style="display:flex; justify-content:space-between; gap:10px; flex-wrap:wrap; margin-top:16px;">
        ${prev ? `<button class="btn" id="prevTBtn">← ${esc(prev.shortTitle)}</button>` : `<span></span>`}
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          ${isLastInBlock ? `<button class="btn btn-gold" id="endBlockExamBtn">📝 Examen ${esc(t.blockCode)} →</button>` : ""}
          ${next ? `<button class="btn btn-primary" id="nextTBtn">Siguiente: ${esc(next.shortTitle)} →</button>` : `<button class="btn btn-primary" id="goCertEndBtn">🎓 Ir a Mi Certificado →</button>`}
        </div>
      </div>
    `;

    const bDeck = document.getElementById("backToDeckBtn");
    if (bDeck) bDeck.onclick = () => { ui.studentReadingMode = false; render(); };
    wireTopicFooterButtons(t, prev, next);
    elRoot.querySelectorAll("[data-ttab]").forEach((btn) => (btn.onclick = () => { ui.topicTab = btn.getAttribute("data-ttab"); render(); }));
  }

  function wireTopicFooterButtons(t, prev, next) {
    const pdb = PDB();
    const mBtn = document.getElementById("markTopicBtn");
    if (mBtn) {
      mBtn.onclick = () => {
        const set = new Set(pdb.completedTopics);
        if (set.has(t.id)) { set.delete(t.id); toast("Tema desmarcado"); }
        else { set.add(t.id); toast("¡Clase marcada como completada!"); }
        pdb.completedTopics = [...set];
        saveDb();
        render();
      };
    }
    const wsBtn = document.getElementById("jumpWorkshopBtn");
    if (wsBtn) wsBtn.onclick = () => navigate("workshop", { blockId: t.blockId });
    const exBtn = document.getElementById("jumpExamBtn");
    if (exBtn) exBtn.onclick = () => navigate("exam", { blockId: t.blockId });
    const dlBtn = document.getElementById("downloadTopicMdBtn");
    if (dlBtn) {
      dlBtn.onclick = () => {
        const blob = new Blob([t.raw], { type: "text/markdown;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = t.filename; a.click();
        URL.revokeObjectURL(url);
      };
    }
    if (prev && document.getElementById("prevTBtn")) document.getElementById("prevTBtn").onclick = () => navigate("topic", { topicId: prev.id });
    if (next && document.getElementById("nextTBtn")) document.getElementById("nextTBtn").onclick = () => navigate("topic", { topicId: next.id });
    const endEx = document.getElementById("endBlockExamBtn");
    if (endEx) endEx.onclick = () => navigate("exam", { blockId: t.blockId });
    const goCert = document.getElementById("goCertEndBtn");
    if (goCert) goCert.onclick = () => navigate("certificate");
  }

  function renderStudentDeck(t, prev, next, isLastInBlock, isDone) {
    const pdb = PDB();
    const slides = buildSlides(t);
    if (ui.slideIndex >= slides.length) ui.slideIndex = slides.length - 1;
    if (ui.slideIndex < 0) ui.slideIndex = 0;

    const slide = slides[ui.slideIndex];
    const progressPct = Math.round(((ui.slideIndex + 1) / slides.length) * 100);
    const grad = t.blockGradient || "linear-gradient(135deg, #1e1b4b 0%, #3730a3 55%, #0284c7 100%)";

    let slideHtml = "";
    if (slide.type === "cover") {
      const objs = t.deck.objectives || [];
      slideHtml = `
        <div class="slide-hero" style="background:${grad};">
          <div class="slide-hero-meta">
            <span class="hero-chip">${t.blockIcon} ${esc(t.blockCode)} · ${esc(t.blockName)}</span>
            <span class="hero-chip">⏱ ${t.hours} h · Clase Interactiva</span>
            <span class="hero-chip">🎬 ${slides.length} diapositivas</span>
            ${isDone ? `<span class="hero-chip" style="background:rgba(16,185,129,0.35);">✅ Completada</span>` : ""}
          </div>
          <h1>${esc(t.title)}</h1>
          ${t.outcome ? `<div class="slide-goal-box"><strong>🎯 Qué dominarás al terminar:</strong><br/>${inlineMd(t.outcome)}</div>` : ""}
        </div>
        <div class="slide-body">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; flex-wrap:wrap; gap:8px;">
            <h3 style="margin:0; font-size:17px;">🧭 Mapa de objetivos de esta clase</h3>
            <span style="font-size:12px; color:var(--text-soft);">Taxonomía de Bloom · Enfoque práctico</span>
          </div>
          <div class="obj-grid">
            ${objs.map((o) => `<div class="obj-card"><span class="bloom-badge ${bloomClass(o.bloom)}">${esc(o.bloom)}</span><div style="font-size:13.6px; line-height:1.48;">${inlineMd(o.text)}</div></div>`).join("")}
          </div>
          <div style="margin-top:24px; text-align:center;">
            <button class="btn btn-primary" id="startDeckBtn" style="padding:12px 28px; font-size:15px; border-radius:12px;">▶ Empezar presentación interactiva →</button>
          </div>
        </div>
      `;
    } else if (slide.type === "module") {
      const m = slide.mod;
      const expandKey = `${ui.programId}-${t.id}-${m.num}`;
      const isExpanded = ui.expandedSlides.has(expandKey);
      const hasMoreExp = m.fullExplanation && m.fullExplanation.length > (m.highlight || "").length + 25;

      let angleHtml = "";
      if (ui.angleTab === "defs") {
        angleHtml = `<div class="def-grid">${(m.definitions || []).map((d) => `<div class="def-card"><div class="def-term">${inlineMd(d.term)}</div><div class="def-desc">${inlineMd(d.desc)}</div></div>`).join("")}</div>`;
      } else if (ui.angleTab === "example") {
        angleHtml = `<div class="example-spotlight md"><div class="example-spotlight-head">🏢 Caso real aplicado en empresa</div>${renderMd(m.example || "Ejemplo no disponible.")}</div>`;
      } else if (ui.angleTab === "mistakes") {
        angleHtml = `<div class="mistake-list">${(m.mistakes || []).map((err) => `<div class="mistake-card"><span class="mistake-x">✕</span><div>${inlineMd(err)}</div></div>`).join("")}</div>`;
      } else if (ui.angleTab === "check") {
        const qs = m.questions || [];
        const checkedCount = qs.filter((_, qi) => ui.checkedQuestions.has(`${expandKey}-q${qi}`)).length;
        angleHtml = `
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <span style="font-size:13px; color:var(--text-soft);">Pulsa cada pregunta cuando sepas responderla con tus propias palabras:</span>
            <span class="pill ${checkedCount === qs.length && qs.length ? "success" : ""}">${checkedCount} / ${qs.length} dominadas</span>
          </div>
          <div class="check-list">
            ${qs.map((q, qi) => {
              const qKey = `${expandKey}-q${qi}`;
              const ok = ui.checkedQuestions.has(qKey);
              return `<div class="check-card ${ok ? "checked" : ""}" data-toggle-q="${qKey}"><span style="font-size:14px; font-weight:500;">${inlineMd(q)}</span><span class="check-pill">${ok ? "✓ Lo tengo claro" : "Marcar claro"}</span></div>`;
            }).join("")}
          </div>
        `;
      }

      slideHtml = `
        <div class="slide-body">
          <div class="concept-head">
            <div class="concept-num" style="background:${grad};">${esc(m.num)}</div>
            <div style="min-width:0; flex:1;">
              <h2>${inlineMd(m.title)}</h2>
              <div class="concept-chips">${(m.concepts || []).map((c) => `<span class="concept-chip"># ${inlineMd(c)}</span>`).join("")}</div>
            </div>
          </div>
          <div class="takeaway-box">
            <div class="takeaway-kicker">💡 Lo más importante de esta diapositiva</div>
            <p class="takeaway-text">${inlineMd(isExpanded ? m.fullExplanation : m.highlight)}</p>
            ${hasMoreExp ? `<button class="expand-btn" id="toggleExpandBtn">${isExpanded ? "▲ Resumir a la idea clave" : "▼ Leer detalle completo"}</button>` : ""}
          </div>
          <div class="angle-tabs">
            <button class="angle-tab ${ui.angleTab === "defs" ? "active" : ""}" data-angle="defs">📌 Definiciones (${(m.definitions || []).length})</button>
            <button class="angle-tab ${ui.angleTab === "example" ? "active" : ""}" data-angle="example">🏢 Ejemplo Real</button>
            <button class="angle-tab ${ui.angleTab === "mistakes" ? "active" : ""}" data-angle="mistakes">⚠️ Errores (${(m.mistakes || []).length})</button>
            <button class="angle-tab ${ui.angleTab === "check" ? "active" : ""}" data-angle="check">🧠 Autochequeo</button>
          </div>
          ${angleHtml}
        </div>
      `;
    } else if (slide.type === "case") {
      const cs = slide.cs || {};
      const savedNote = pdb.notes[t.id] || "";
      slideHtml = `
        <div class="slide-body">
          <div class="concept-head">
            <div class="concept-num" style="background:${grad};">💼</div>
            <div>
              <div style="font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--primary); letter-spacing:0.06em;">Reto Empresarial Interactivo</div>
              <h2>${inlineMd(cs.title || "Caso práctico aplicado")}</h2>
            </div>
          </div>
          <div class="case-split">
            <div class="case-panel md">
              ${cs.context ? `<h3 style="margin-top:0;">🏢 Contexto</h3>${renderMd(cs.context)}` : ""}
              ${cs.problem ? `<h3>🚨 Situación / Problema</h3>${renderMd(cs.problem)}` : ""}
              ${cs.data ? `<h3>📊 Datos clave</h3>${renderMd(cs.data)}` : ""}
              ${!cs.context && !cs.problem ? renderMd(cs.raw || "") : ""}
            </div>
            <div class="case-panel">
              ${cs.task ? `<div class="md"><h3 style="margin-top:0;">🎯 Tu Misión</h3>${renderMd(cs.task)}</div>` : ""}
              ${(cs.questions || []).length ? `<h4 style="margin:12px 0 8px;">Preguntas clave para decidir:</h4><ul style="margin:0 0 14px; padding-left:18px; font-size:13.3px;">${cs.questions.map((q) => `<li style="margin-bottom:5px;">${inlineMd(q)}</li>`).join("")}</ul>` : ""}
              <div class="field-group" style="margin-top:12px;">
                <label for="deckCaseNote">✍️ Anota tu decisión (se guarda en tu portafolio)</label>
                <textarea class="textarea" id="deckCaseNote" style="min-height:105px;" placeholder="¿Qué decidirías tú y por qué?">${esc(savedNote)}</textarea>
              </div>
              <div style="display:flex; gap:8px; flex-wrap:wrap;">
                <button class="btn btn-primary" id="saveDeckNoteBtn">💾 Guardar mi respuesta</button>
                ${cs.solutions ? `<button class="btn btn-gold" id="revealSolBtn">${ui.solutionRevealed ? "🙈 Ocultar criterios del experto" : "👀 Revelar criterios del experto"}</button>` : ""}
              </div>
              ${ui.solutionRevealed && cs.solutions ? `<div class="solution-reveal md"><div style="font-size:12px; font-weight:800; color:var(--gold); text-transform:uppercase; margin-bottom:6px;">💡 Criterios de solución del experto</div>${renderMd(cs.solutions)}</div>` : ""}
            </div>
          </div>
        </div>
      `;
    } else if (slide.type === "flashcards") {
      const cards = slide.cards || [];
      const flippedHere = cards.filter((_, ci) => ui.flippedCards.has(`${ui.programId}-${t.id}-fc${ci}`)).length;
      slideHtml = `
        <div class="slide-body">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:18px;">
            <div>
              <div style="font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--primary); letter-spacing:0.06em;">Repaso Activo · Tarjetas Giratorias 3D</div>
              <h2 style="margin:4px 0 0; font-size:23px;">🃏 Glosario Interactivo — Pulsa cualquier tarjeta para girarla</h2>
            </div>
            <div style="display:flex; gap:8px; align-items:center;">
              <span class="pill ${flippedHere === cards.length ? "success" : "gold"}" id="fcCounter">${flippedHere} / ${cards.length} giradas</span>
              <button class="btn" id="flipAllBtn">${flippedHere === cards.length ? "↺ Volver al frente" : "↻ Girar todas"}</button>
            </div>
          </div>
          <div class="flash-grid">
            ${cards.map((c, ci) => {
              const fk = `${ui.programId}-${t.id}-fc${ci}`;
              const isFlipped = ui.flippedCards.has(fk);
              return `
                <div class="flip-card ${isFlipped ? "flipped" : ""}" data-flip="${fk}">
                  <div class="flip-inner">
                    <div class="flip-face flip-front">
                      <span class="pill" style="align-self:flex-start;">Término ${ci + 1}</span>
                      <div class="flip-front-term">${inlineMd(c.term)}</div>
                      <div class="flip-hint">👆 Clic para revelar definición</div>
                    </div>
                    <div class="flip-face flip-back">
                      <div style="font-size:12px; font-weight:800; opacity:0.85;">${inlineMd(c.term)}</div>
                      <div class="flip-back-def">${inlineMd(c.def)}</div>
                      <div style="font-size:10.5px; opacity:0.75;">👆 Clic para volver</div>
                    </div>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>
      `;
    } else if (slide.type === "summary") {
      const mods = t.deck.modules || [];
      slideHtml = `
        <div class="slide-body" style="text-align:center;">
          <div style="font-size:44px; margin-bottom:6px;">🏆</div>
          <h2 style="margin:0 0 6px; font-size:26px;">Resumen Ejecutivo: ${esc(t.shortTitle)}</h2>
          <p style="margin:0 auto 18px; color:var(--text-soft); max-width:640px;">Las ${mods.length} ideas clave que debes llevarte de esta clase listas para aplicar en tu empresa:</p>
          <div class="summary-tiles" style="text-align:left;">
            ${mods.map((m) => `<div class="summary-tile"><div class="summary-tile-num">Clave ${m.num}</div><h4>${inlineMd(m.title)}</h4><p>${inlineMd(m.highlight.slice(0, 170))}${m.highlight.length > 170 ? "…" : ""}</p></div>`).join("")}
          </div>
          <div style="display:flex; justify-content:center; gap:10px; flex-wrap:wrap; margin-top:22px;">
            <button class="btn ${isDone ? "btn-success" : "btn-primary"}" id="finishAndNextBtn" style="padding:12px 24px; font-size:14.5px;">
              ${isDone
                ? (next ? `✅ Completada · Ir a ${esc(next.shortTitle)} →` : "✅ Clase completada")
                : (next ? `✓ Completar clase y seguir a ${esc(next.shortTitle)} →` : "✓ Completar última clase del programa")
              }
            </button>
            <button class="btn" id="jumpWorkshopBtn">🛠️ Hacer Taller del ${esc(t.blockCode)}</button>
            <button class="btn btn-gold" id="jumpExamBtn">📝 Hacer Examen del ${esc(t.blockCode)}</button>
          </div>
        </div>
      `;
    }

    elRoot.innerHTML = `
      <div class="deck-wrapper ${ui.deckFullscreen ? "fullscreen" : ""}">
        <div class="deck-toolbar">
          <div class="deck-pills">
            ${slides.map((s, sIdx) => `<button class="slide-pill ${sIdx === ui.slideIndex ? "active" : ""}" data-go-slide="${sIdx}">${sIdx + 1}. ${s.label}</button>`).join("")}
          </div>
          <div style="display:flex; gap:6px; align-items:center; flex-wrap:wrap;">
            <span class="class-timer-badge" title="Tiempo activo dedicado a esta clase">⏱ Clase: <span id="classTimerValue">${formatHMS(pdb.studyTime.byTopic[t.id] || 0)}</span></span>
            <button class="btn" id="openReadingBtn" title="Cambiar a modo texto completo">📄 Lectura</button>
            <button class="btn" id="toggleFsBtn" title="Modo pantalla completa">${ui.deckFullscreen ? "✕ Salir" : "⛶ Pantalla completa"}</button>
          </div>
        </div>

        <div class="slide-canvas">
          <div class="slide-progress-line"><div class="slide-progress-fill" style="width:${progressPct}%"></div></div>
          <div class="audio-bar">
            <div class="audio-controls">
              <button class="audio-btn-play ${audioState.playing && !audioState.paused ? "speaking" : ""}" id="audioPlayBtn">🔊 Escuchar diapositiva</button>
              <button class="btn" id="audioStopBtn" style="display:${audioState.playing ? "inline-flex" : "none"}; padding:5px 10px;">⏹ Detener</button>
              <select class="audio-select" id="audioRateSel" title="Velocidad de narración">
                ${[0.85, 1, 1.15, 1.3, 1.5].map((r) => `<option value="${r}" ${audioState.rate === r ? "selected" : ""}>${r}x</option>`).join("")}
              </select>
              <select class="audio-select" id="audioVoiceSel" title="Voz en español"></select>
              <label class="audio-auto-lbl" title="Al terminar una diapositiva, pasa automáticamente a la siguiente y sigue narrando">
                <input type="checkbox" id="audioAutoChk" ${audioState.autoAdvance ? "checked" : ""} />
                <span>Auto-clase</span>
              </label>
            </div>
            <div class="audio-status-line" id="audioStatusLine">Modo visual + auditivo listo</div>
          </div>
          ${slideHtml}
          <div class="deck-footer">
            <button class="btn" id="prevSlideBtn" ${ui.slideIndex === 0 ? "disabled style='opacity:0.45; cursor:not-allowed;'" : ""}>← Anterior</button>
            <div style="display:flex; align-items:center; gap:12px;">
              <div class="deck-dots">${slides.map((_, sIdx) => `<button class="deck-dot ${sIdx === ui.slideIndex ? "active" : ""}" data-go-slide="${sIdx}" title="Ir a diapositiva ${sIdx + 1}"></button>`).join("")}</div>
              <span style="font-size:12px; color:var(--text-soft); font-weight:600;">${ui.slideIndex + 1} / ${slides.length} · Usa ← →</span>
            </div>
            ${ui.slideIndex < slides.length - 1
              ? `<button class="btn btn-primary" id="nextSlideBtn">Siguiente →</button>`
              : (isLastInBlock
                  ? `<button class="btn btn-gold" id="endBlockExamBtn">📝 Examen ${esc(t.blockCode)} →</button>`
                  : `<button class="btn btn-primary" id="nextTBtn">Siguiente clase →</button>`)
            }
          </div>
        </div>
      </div>
    `;

    updateAudioBarUI();
    document.getElementById("audioPlayBtn").onclick = () => {
      if (!audioState.supported) { toast("Tu navegador no soporta audio integrado"); return; }
      if (audioState.playing && !audioState.paused) { window.speechSynthesis.pause(); audioState.paused = true; updateAudioBarUI(); }
      else if (audioState.playing && audioState.paused) { window.speechSynthesis.resume(); audioState.paused = false; updateAudioBarUI(); }
      else startSlideAudio(t);
    };
    document.getElementById("audioStopBtn").onclick = () => stopAudio();
    document.getElementById("audioRateSel").onchange = (e) => {
      audioState.rate = Number(e.target.value) || 1;
      localStorage.setItem("campus_voice_rate_v1", String(audioState.rate));
      if (audioState.playing) startSlideAudio(t);
    };
    document.getElementById("audioVoiceSel").onchange = (e) => {
      audioState.selectedVoiceURI = e.target.value;
      localStorage.setItem("campus_voice_uri_v1", audioState.selectedVoiceURI);
      if (audioState.playing) startSlideAudio(t);
    };
    document.getElementById("audioAutoChk").onchange = (e) => {
      audioState.autoAdvance = e.target.checked;
      localStorage.setItem("campus_voice_auto_v1", audioState.autoAdvance ? "1" : "0");
      toast(audioState.autoAdvance ? "Auto-clase activada" : "Auto-clase desactivada");
    };

    elRoot.querySelectorAll("[data-go-slide]").forEach((btn) => {
      btn.onclick = () => { stopAudio(true); ui.slideIndex = Number(btn.getAttribute("data-go-slide")); ui.angleTab = "defs"; render(); elViewport.scrollTop = 0; };
    });
    const pBtn = document.getElementById("prevSlideBtn");
    if (pBtn) pBtn.onclick = () => { if (ui.slideIndex > 0) { stopAudio(true); ui.slideIndex--; ui.angleTab = "defs"; render(); } };
    const nBtn = document.getElementById("nextSlideBtn");
    if (nBtn) nBtn.onclick = () => { if (ui.slideIndex < slides.length - 1) { stopAudio(true); ui.slideIndex++; ui.angleTab = "defs"; render(); } };
    const startBtn = document.getElementById("startDeckBtn");
    if (startBtn) startBtn.onclick = () => { stopAudio(true); ui.slideIndex = 1; ui.angleTab = "defs"; render(); };

    document.getElementById("openReadingBtn").onclick = () => { stopAudio(true); ui.studentReadingMode = true; ui.deckFullscreen = false; render(); };
    document.getElementById("toggleFsBtn").onclick = () => { ui.deckFullscreen = !ui.deckFullscreen; render(); };

    const expBtn = document.getElementById("toggleExpandBtn");
    if (expBtn && slide.type === "module") {
      const k = `${ui.programId}-${t.id}-${slide.mod.num}`;
      expBtn.onclick = () => { if (ui.expandedSlides.has(k)) ui.expandedSlides.delete(k); else ui.expandedSlides.add(k); render(); };
    }
    elRoot.querySelectorAll("[data-angle]").forEach((btn) => {
      btn.onclick = () => {
        const wasPlaying = audioState.playing && !audioState.paused;
        stopAudio(true);
        ui.angleTab = btn.getAttribute("data-angle");
        render();
        if (wasPlaying) startSlideAudio(t);
      };
    });
    elRoot.querySelectorAll("[data-toggle-q]").forEach((card) => {
      card.onclick = () => {
        const qk = card.getAttribute("data-toggle-q");
        if (ui.checkedQuestions.has(qk)) ui.checkedQuestions.delete(qk); else ui.checkedQuestions.add(qk);
        render();
      };
    });

    const saveNote = document.getElementById("saveDeckNoteBtn");
    if (saveNote) {
      saveNote.onclick = () => {
        pdb.notes[t.id] = document.getElementById("deckCaseNote").value;
        saveDb();
        toast("Respuesta guardada en tu portafolio");
      };
    }
    const revBtn = document.getElementById("revealSolBtn");
    if (revBtn) revBtn.onclick = () => { ui.solutionRevealed = !ui.solutionRevealed; render(); };

    elRoot.querySelectorAll("[data-flip]").forEach((card) => {
      card.onclick = () => {
        const fk = card.getAttribute("data-flip");
        if (ui.flippedCards.has(fk)) ui.flippedCards.delete(fk); else ui.flippedCards.add(fk);
        card.classList.toggle("flipped");
        const cards = slide.cards || [];
        const flippedHere = cards.filter((_, ci) => ui.flippedCards.has(`${ui.programId}-${t.id}-fc${ci}`)).length;
        const badge = document.getElementById("fcCounter");
        if (badge) badge.textContent = `${flippedHere} / ${cards.length} giradas`;
      };
    });
    const flipAllBtn = document.getElementById("flipAllBtn");
    if (flipAllBtn && slide.type === "flashcards") {
      flipAllBtn.onclick = () => {
        const cards = slide.cards || [];
        const allFlipped = cards.every((_, ci) => ui.flippedCards.has(`${ui.programId}-${t.id}-fc${ci}`));
        cards.forEach((_, ci) => {
          const fk = `${ui.programId}-${t.id}-fc${ci}`;
          if (allFlipped) ui.flippedCards.delete(fk); else ui.flippedCards.add(fk);
        });
        render();
      };
    }

    const finBtn = document.getElementById("finishAndNextBtn");
    if (finBtn) {
      finBtn.onclick = () => {
        const set = new Set(pdb.completedTopics);
        set.add(t.id);
        pdb.completedTopics = [...set];
        saveDb();
        toast("¡Clase completada!");
        if (next) navigate("topic", { topicId: next.id });
        else navigate("certificate");
      };
    }
    wireTopicFooterButtons(t, prev, next);
  }

  // =====================================================
  // VIEW 3: INTERACTIVE WORKSHOP (6 LIVE CALCULATORS + FORMS)
  // =====================================================
  function renderWorkshop() {
    const prog = P();
    const pdb = PDB();
    const b = prog.blocks.find((x) => x.id === ui.blockId) || prog.blocks[0];
    const wsMeta = A().blocks[b.id].workshop;
    const saved = pdb.workshops[b.id] || { completed: false, data: {} };

    elCrumb.innerHTML = `${esc(prog.shortName)} › ${esc(b.code)} › <strong>Taller Práctico Interactivo</strong>`;

    let innerHtml = "";
    if (wsMeta.calculator === "decision_matrix") {
      const d = Object.assign({
        problem: "Elegir nueva plataforma CRM comercial para equipo híbrido",
        c1: "Coste total (3 años)", w1: 30, c2: "Facilidad de adopción", w2: 30,
        c3: "Integración con ERP", w3: 25, c4: "Escalabilidad / Soporte", w4: 15,
        a1: "Alternativa A: SaaS líder", a1s: [7, 9, 8, 9],
        a2: "Alternativa B: Desarrollo a medida", a2s: [4, 6, 9, 5],
        a3: "Alternativa C: Módulo del ERP", a3s: [9, 6, 10, 6]
      }, saved.data);
      innerHtml = `
        <div class="field-group"><label>Decisión a evaluar</label><input class="input" id="dmProblem" value="${esc(d.problem)}" /></div>
        <div class="table-wrap"><table><thead><tr><th>Criterio</th><th style="width:90px;">Peso (%)</th><th><input class="input" id="dmA1" value="${esc(d.a1)}" /></th><th><input class="input" id="dmA2" value="${esc(d.a2)}" /></th><th><input class="input" id="dmA3" value="${esc(d.a3)}" /></th></tr></thead><tbody>
          ${[1, 2, 3, 4].map((n) => `<tr><td><input class="input" id="dmC${n}" value="${esc(d["c" + n])}" /></td><td><input class="input" type="number" min="0" max="100" id="dmW${n}" value="${d["w" + n]}" /></td><td><input class="input" type="number" min="1" max="10" id="dmA1_${n}" value="${d.a1s[n - 1]}" /></td><td><input class="input" type="number" min="1" max="10" id="dmA2_${n}" value="${d.a2s[n - 1]}" /></td><td><input class="input" type="number" min="1" max="10" id="dmA3_${n}" value="${d.a3s[n - 1]}" /></td></tr>`).join("")}
        </tbody></table></div>
        <div class="calc-result" id="calcOutput"></div>
      `;
    } else if (wsMeta.calculator === "rice_mvp") {
      const d = Object.assign({
        feature: "Portal de reposición automática en 1 clic para clientes B2B",
        reach: 400, impact: 2, confidence: 80, effort: 3,
        hypothesis: "Ofrecer reposición en 1 clic a clientes B2B recurrentes aumentará los pedidos digitales en un 25 % en 60 días.",
        mvp: "Formulario web conectado a hoja de pedidos + confirmación manual para 30 clientes piloto (< 900 €)."
      }, saved.data);
      innerHtml = `
        <div class="field-group"><label>Iniciativa / Funcionalidad</label><input class="input" id="rFeature" value="${esc(d.feature)}" /></div>
        <div class="calc-grid">
          <div class="field-group"><label>Reach (usuarios/trimestre)</label><input class="input" type="number" id="rReach" value="${d.reach}" /></div>
          <div class="field-group"><label>Impact (0.25 a 3)</label><input class="input" type="number" step="0.25" id="rImpact" value="${d.impact}" /></div>
          <div class="field-group"><label>Confidence (%)</label><input class="input" type="number" id="rConf" value="${d.confidence}" /></div>
          <div class="field-group"><label>Effort (persona-meses)</label><input class="input" type="number" step="0.5" id="rEffort" value="${d.effort}" /></div>
        </div>
        <div class="calc-result" id="calcOutput"></div>
        <div class="field-group" style="margin-top:14px;"><label>Hipótesis falsable Lean</label><textarea class="textarea" id="rHyp">${esc(d.hypothesis)}</textarea></div>
        <div class="field-group"><label>Diseño de MVP de mínimo coste</label><textarea class="textarea" id="rMvp">${esc(d.mvp)}</textarea></div>
      `;
    } else if (wsMeta.calculator === "ecommerce_margin") {
      const d = Object.assign({ aov: 65, cogs: 26, cac: 14, fulfill: 4.5, shipping: 5.5, paymentPct: 2.2, returnRate: 14, returnCost: 7 }, saved.data);
      innerHtml = `
        <div class="calc-grid">
          <div class="field-group"><label>Ticket medio sin IVA (€)</label><input class="input" type="number" step="0.5" id="ecAov" value="${d.aov}" /></div>
          <div class="field-group"><label>Coste producto COGS (€)</label><input class="input" type="number" step="0.5" id="ecCogs" value="${d.cogs}" /></div>
          <div class="field-group"><label>CAC por pedido (€)</label><input class="input" type="number" step="0.5" id="ecCac" value="${d.cac}" /></div>
          <div class="field-group"><label>Picking & Packing (€)</label><input class="input" type="number" step="0.5" id="ecFulfill" value="${d.fulfill}" /></div>
          <div class="field-group"><label>Envío última milla (€)</label><input class="input" type="number" step="0.5" id="ecShip" value="${d.shipping}" /></div>
          <div class="field-group"><label>Pasarela pago (%)</label><input class="input" type="number" step="0.1" id="ecPay" value="${d.paymentPct}" /></div>
          <div class="field-group"><label>Tasa devoluciones (%)</label><input class="input" type="number" id="ecRetRate" value="${d.returnRate}" /></div>
          <div class="field-group"><label>Coste por devolución (€)</label><input class="input" type="number" step="0.5" id="ecRetCost" value="${d.returnCost}" /></div>
        </div>
        <div class="calc-result" id="calcOutput"></div>
      `;
    } else if (wsMeta.calculator === "funnel_cro") {
      const d = Object.assign({ sessions: 25000, toProduct: 42, toCart: 14, toCheckout: 55, toPaid: 58, aov: 78 }, saved.data);
      innerHtml = `
        <div class="calc-grid">
          <div class="field-group"><label>Sesiones mensuales</label><input class="input" type="number" id="fnSess" value="${d.sessions}" /></div>
          <div class="field-group"><label>% Visita ficha producto</label><input class="input" type="number" step="0.5" id="fnProd" value="${d.toProduct}" /></div>
          <div class="field-group"><label>% Añade al carrito</label><input class="input" type="number" step="0.5" id="fnCart" value="${d.toCart}" /></div>
          <div class="field-group"><label>% Inicia checkout</label><input class="input" type="number" step="0.5" id="fnChk" value="${d.toCheckout}" /></div>
          <div class="field-group"><label>% Completa pago</label><input class="input" type="number" step="0.5" id="fnPaid" value="${d.toPaid}" /></div>
          <div class="field-group"><label>Ticket medio AOV (€)</label><input class="input" type="number" step="1" id="fnAov" value="${d.aov}" /></div>
        </div>
        <div class="calc-result" id="calcOutput"></div>
      `;
    } else if (wsMeta.calculator === "sem_roas") {
      const d = Object.assign({ budget: 3500, cpc: 0.75, cr: 3.2, aov: 110, marginPct: 48 }, saved.data);
      innerHtml = `
        <div class="calc-grid">
          <div class="field-group"><label>Inversión SEM mensual (€)</label><input class="input" type="number" id="smBud" value="${d.budget}" /></div>
          <div class="field-group"><label>CPC medio (€)</label><input class="input" type="number" step="0.05" id="smCpc" value="${d.cpc}" /></div>
          <div class="field-group"><label>Conversión landing (%)</label><input class="input" type="number" step="0.1" id="smCr" value="${d.cr}" /></div>
          <div class="field-group"><label>Ticket medio (€)</label><input class="input" type="number" id="smAov" value="${d.aov}" /></div>
          <div class="field-group"><label>Margen bruto producto (%)</label><input class="input" type="number" id="smMar" value="${d.marginPct}" /></div>
        </div>
        <div class="calc-result" id="calcOutput"></div>
      `;
    } else if (wsMeta.calculator === "pnl_ebitda") {
      const d = Object.assign({ revenue: 1200000, varPct: 52, fixedCosts: 360000, amort: 45000, finCost: 18000, taxPct: 25 }, saved.data);
      innerHtml = `
        <div class="calc-grid">
          <div class="field-group"><label>Ventas netas anuales (€)</label><input class="input" type="number" step="10000" id="pnRev" value="${d.revenue}" /></div>
          <div class="field-group"><label>Costes variables (% s/ ventas)</label><input class="input" type="number" step="1" id="pnVar" value="${d.varPct}" /></div>
          <div class="field-group"><label>Gastos fijos operativos (€)</label><input class="input" type="number" step="5000" id="pnFix" value="${d.fixedCosts}" /></div>
          <div class="field-group"><label>Amortizaciones anuales (€)</label><input class="input" type="number" step="1000" id="pnAmort" value="${d.amort}" /></div>
          <div class="field-group"><label>Gastos financieros (€)</label><input class="input" type="number" step="1000" id="pnFin" value="${d.finCost}" /></div>
          <div class="field-group"><label>Tipo impositivo orientativo (%)</label><input class="input" type="number" id="pnTax" value="${d.taxPct}" /></div>
        </div>
        <div class="calc-result" id="calcOutput"></div>
      `;
    } else if (wsMeta.calculator === "pert_emv") {
      const d = Object.assign({ opt: 6, most: 9, pess: 18, r1Prob: 30, r1Imp: -25000, r2Prob: 20, r2Imp: -15000, o1Prob: 25, o1Imp: 12000 }, saved.data);
      innerHtml = `
        <h3 style="margin:0 0 10px; font-size:15px;">1. Estimación de 3 Valores (PERT Beta)</h3>
        <div class="calc-grid">
          <div class="field-group"><label>Optimista (O) — días</label><input class="input" type="number" step="0.5" id="ptO" value="${d.opt}" /></div>
          <div class="field-group"><label>Más probable (M) — días</label><input class="input" type="number" step="0.5" id="ptM" value="${d.most}" /></div>
          <div class="field-group"><label>Pesimista (P) — días</label><input class="input" type="number" step="0.5" id="ptP" value="${d.pess}" /></div>
        </div>
        <h3 style="margin:12px 0 10px; font-size:15px;">2. Valor Monetario Esperado (EMV) — Reserva de Contingencia</h3>
        <div class="calc-grid">
          <div class="field-group"><label>Amenaza 1: Prob. (%)</label><input class="input" type="number" id="emP1" value="${d.r1Prob}" /></div>
          <div class="field-group"><label>Amenaza 1: Impacto (€)</label><input class="input" type="number" step="500" id="emI1" value="${d.r1Imp}" /></div>
          <div class="field-group"><label>Amenaza 2: Prob. (%)</label><input class="input" type="number" id="emP2" value="${d.r2Prob}" /></div>
          <div class="field-group"><label>Amenaza 2: Impacto (€)</label><input class="input" type="number" step="500" id="emI2" value="${d.r2Imp}" /></div>
          <div class="field-group"><label>Oportunidad: Prob. (%)</label><input class="input" type="number" id="emPo" value="${d.o1Prob}" /></div>
          <div class="field-group"><label>Oportunidad: Impacto (+€)</label><input class="input" type="number" step="500" id="emIo" value="${d.o1Imp}" /></div>
        </div>
        <div class="calc-result" id="calcOutput"></div>
      `;
    } else if (wsMeta.calculator === "evm_calc") {
      const d = Object.assign({ bac: 200000, pv: 110000, ev: 96000, ac: 120000 }, saved.data);
      innerHtml = `
        <div class="calc-grid">
          <div class="field-group"><label>BAC — Presupuesto total (€)</label><input class="input" type="number" step="1000" id="evBac" value="${d.bac}" /></div>
          <div class="field-group"><label>PV — Valor Planificado (€)</label><input class="input" type="number" step="1000" id="evPv" value="${d.pv}" /></div>
          <div class="field-group"><label>EV — Valor Ganado (€)</label><input class="input" type="number" step="1000" id="evEv" value="${d.ev}" /></div>
          <div class="field-group"><label>AC — Coste Real (€)</label><input class="input" type="number" step="1000" id="evAc" value="${d.ac}" /></div>
        </div>
        <div class="calc-result" id="calcOutput"></div>
      `;
    } else if (wsMeta.calculator === "pricing_elasticity") {
      const d = Object.assign({ price: 120, units: 5000, varCost: 65, elasticity: -0.6, priceDeltaPct: 8 }, saved.data);
      innerHtml = `
        <div class="calc-grid">
          <div class="field-group"><label>Precio actual (€)</label><input class="input" type="number" step="1" id="pePrice" value="${d.price}" /></div>
          <div class="field-group"><label>Volumen actual (unidades/año)</label><input class="input" type="number" step="100" id="peUnits" value="${d.units}" /></div>
          <div class="field-group"><label>Coste variable unitario (€)</label><input class="input" type="number" step="1" id="peCost" value="${d.varCost}" /></div>
          <div class="field-group"><label>Elasticidad precio-demanda (ej. -0.6 o -1.8)</label><input class="input" type="number" step="0.1" id="peElast" value="${d.elasticity}" /></div>
          <div class="field-group"><label>Cambio de precio propuesto (%)</label><input class="input" type="number" step="1" id="peDelta" value="${d.priceDeltaPct}" /></div>
        </div>
        <div class="calc-result" id="calcOutput"></div>
      `;
    } else if (wsMeta.calculator === "dcf_npv") {
      const d = Object.assign({ inv: 500000, wacc: 10, cf1: 120000, cf2: 150000, cf3: 180000, cf4: 200000, cf5: 220000, gTerm: 2.5 }, saved.data);
      innerHtml = `
        <div class="calc-grid">
          <div class="field-group"><label>Inversión inicial Año 0 (€)</label><input class="input" type="number" step="10000" id="dcInv" value="${d.inv}" /></div>
          <div class="field-group"><label>WACC — Tasa descuento (%)</label><input class="input" type="number" step="0.5" id="dcWacc" value="${d.wacc}" /></div>
          <div class="field-group"><label>Flujo Caja Libre Año 1 (€)</label><input class="input" type="number" step="5000" id="dcCf1" value="${d.cf1}" /></div>
          <div class="field-group"><label>Flujo Caja Libre Año 2 (€)</label><input class="input" type="number" step="5000" id="dcCf2" value="${d.cf2}" /></div>
          <div class="field-group"><label>Flujo Caja Libre Año 3 (€)</label><input class="input" type="number" step="5000" id="dcCf3" value="${d.cf3}" /></div>
          <div class="field-group"><label>Flujo Caja Libre Año 4 (€)</label><input class="input" type="number" step="5000" id="dcCf4" value="${d.cf4}" /></div>
          <div class="field-group"><label>Flujo Caja Libre Año 5 (€)</label><input class="input" type="number" step="5000" id="dcCf5" value="${d.cf5}" /></div>
          <div class="field-group"><label>Crecimiento perpetuo g (%)</label><input class="input" type="number" step="0.5" id="dcG" value="${d.gTerm}" /></div>
        </div>
        <div class="calc-result" id="calcOutput"></div>
      `;
    } else if (wsMeta.calculator === "ma_valuation") {
      const d = Object.assign({ ebitda: 4000000, mult: 7.5, netDebt: 6000000, premiumPct: 20, pvSynergies: 7500000 }, saved.data);
      innerHtml = `
        <div class="calc-grid">
          <div class="field-group"><label>EBITDA objetivo (€)</label><input class="input" type="number" step="100000" id="maEb" value="${d.ebitda}" /></div>
          <div class="field-group"><label>Múltiplo EV / EBITDA (×)</label><input class="input" type="number" step="0.25" id="maMul" value="${d.mult}" /></div>
          <div class="field-group"><label>Deuda Financiera Neta (€)</label><input class="input" type="number" step="100000" id="maDebt" value="${d.netDebt}" /></div>
          <div class="field-group"><label>Prima de control ofertada (%)</label><input class="input" type="number" step="1" id="maPrem" value="${d.premiumPct}" /></div>
          <div class="field-group"><label>Valor Presente Sinergias (€)</label><input class="input" type="number" step="100000" id="maSyn" value="${d.pvSynergies}" /></div>
        </div>
        <div class="calc-result" id="calcOutput"></div>
      `;
    } else {
      innerHtml = wsMeta.fields.map((f) => `
        <div class="field-group">
          <label for="ws_${f.id}">${esc(f.label)}</label>
          ${f.type === "textarea"
            ? `<textarea class="textarea" id="ws_${f.id}" placeholder="${esc(f.placeholder)}">${esc(saved.data?.[f.id] || "")}</textarea>`
            : `<input class="input" id="ws_${f.id}" placeholder="${esc(f.placeholder)}" value="${esc(saved.data?.[f.id] || "")}" />`}
        </div>
      `).join("");
    }

    elRoot.innerHTML = `
      <div class="card">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:10px;">
          <span class="pill">${b.icon} ${esc(b.code)} · ${esc(b.name)}</span>
          ${saved.completed ? `<span class="pill success">✅ Entregable guardado en portafolio</span>` : `<span class="pill gold">🛠️ Pendiente de guardar</span>`}
        </div>
        <h1 style="margin:0 0 6px; font-size:23px;">${esc(wsMeta.title)}</h1>
        <p style="margin:0 0 20px; color:var(--text-soft);">${esc(wsMeta.subtitle)}</p>
        ${innerHtml}
        <div style="display:flex; justify-content:space-between; align-items:center; gap:10px; flex-wrap:wrap; margin-top:20px; padding-top:14px; border-top:1px solid var(--border);">
          <button class="btn" id="wsBackBlock">← Volver al ${esc(b.code)}</button>
          <div style="display:flex; gap:8px;">
            <button class="btn btn-primary" id="saveWsBtn">💾 Guardar entregable en portafolio</button>
            <button class="btn btn-gold" id="wsToExamBtn">📝 Ir al Examen del ${esc(b.code)} →</button>
          </div>
        </div>
      </div>
    `;

    function collectCalcData() {
      const out = document.getElementById("calcOutput");
      if (wsMeta.calculator === "decision_matrix") {
        const w = [1, 2, 3, 4].map((n) => Number(document.getElementById(`dmW${n}`).value) || 0);
        const wSum = w.reduce((a, c) => a + c, 0) || 1;
        const aNames = [1, 2, 3].map((k) => document.getElementById(`dmA${k}`).value || `Alternativa ${k}`);
        const scores = [1, 2, 3].map((k) => {
          const vals = [1, 2, 3, 4].map((n) => Number(document.getElementById(`dmA${k}_${n}`).value) || 0);
          return { name: aNames[k - 1], vals, total: Math.round(vals.reduce((acc, v, idx) => acc + v * (w[idx] / wSum), 0) * 100) / 100 };
        });
        const best = [...scores].sort((x, y) => y.total - x.total)[0];
        out.innerHTML = `<strong>Resultado ponderado (Suma pesos: ${wSum}%):</strong><div class="calc-grid" style="margin-top:10px;">${scores.map((s) => `<div class="card" style="margin:0; padding:12px; ${s.name === best.name ? "border-color:var(--success-bright); background:var(--success-soft);" : ""}"><div style="font-size:12px; color:var(--text-soft);">${esc(s.name)}</div><div style="font-size:22px; font-weight:800;">${s.total} / 10</div>${s.name === best.name ? `<span class="pill success">🏆 Mejor opción</span>` : ""}</div>`).join("")}</div>`;
        return { problem: document.getElementById("dmProblem").value, winner: `${best.name} (${best.total}/10)`, w1: w[0], w2: w[1], w3: w[2], w4: w[3], a1: aNames[0], a2: aNames[1], a3: aNames[2], a1s: scores[0].vals, a2s: scores[1].vals, a3s: scores[2].vals };
      }
      if (wsMeta.calculator === "rice_mvp") {
        const reach = Number(document.getElementById("rReach").value) || 0;
        const impact = Number(document.getElementById("rImpact").value) || 0;
        const conf = Number(document.getElementById("rConf").value) || 0;
        const effort = Math.max(0.1, Number(document.getElementById("rEffort").value) || 1);
        const rice = Math.round((reach * impact * (conf / 100)) / effort);
        out.innerHTML = `<div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;"><div><div style="font-size:12px; color:var(--text-soft);">Puntuación RICE</div><div style="font-size:28px; font-weight:800; color:var(--primary);">${rice} puntos</div></div><span class="pill ${rice >= 200 ? "success" : "gold"}">${rice >= 200 ? "🔥 Prioridad Alta (Now)" : rice >= 80 ? "⚡ Prioridad Media (Next)" : "🧊 Prioridad Baja (Later)"}</span></div>`;
        return { feature: document.getElementById("rFeature").value, reach, impact, confidence: conf, effort, riceScore: rice, hypothesis: document.getElementById("rHyp").value, mvp: document.getElementById("rMvp").value };
      }
      if (wsMeta.calculator === "ecommerce_margin") {
        const aov = Number(document.getElementById("ecAov").value) || 0;
        const cogs = Number(document.getElementById("ecCogs").value) || 0;
        const cac = Number(document.getElementById("ecCac").value) || 0;
        const fulfill = Number(document.getElementById("ecFulfill").value) || 0;
        const shipping = Number(document.getElementById("ecShip").value) || 0;
        const payPct = Number(document.getElementById("ecPay").value) || 0;
        const retRate = Number(document.getElementById("ecRetRate").value) || 0;
        const retCost = Number(document.getElementById("ecRetCost").value) || 0;
        const expectedRet = (retRate / 100) * (retCost + shipping);
        const net = aov - cogs - cac - fulfill - shipping - aov * (payPct / 100) - expectedRet;
        const ok = net > 0;
        out.innerHTML = `<div class="calc-grid"><div><small style="color:var(--text-soft);">Margen neto por pedido</small><div style="font-size:24px; font-weight:800; color:${ok ? "var(--success)" : "var(--danger)"};">${net.toFixed(2)} € (${aov ? ((net / aov) * 100).toFixed(1) : 0}%)</div></div><div><small style="color:var(--text-soft);">Impacto devoluciones</small><div style="font-size:20px; font-weight:700;">-${expectedRet.toFixed(2)} €</div></div><div><small style="color:var(--text-soft);">Diagnóstico</small><div style="margin-top:4px;"><span class="pill ${ok ? "success" : "danger"}">${ok ? "✅ Rentable" : "⚠️ Pérdida en 1.er pedido"}</span></div></div></div>`;
        return { aov, cogs, cac, fulfill, shipping, paymentPct: payPct, returnRate: retRate, returnCost: retCost, netMargin: Number(net.toFixed(2)) };
      }
      if (wsMeta.calculator === "funnel_cro") {
        const sessions = Number(document.getElementById("fnSess").value) || 0;
        const toProd = Number(document.getElementById("fnProd").value) || 0;
        const toCart = Number(document.getElementById("fnCart").value) || 0;
        const toChk = Number(document.getElementById("fnChk").value) || 0;
        const toPaid = Number(document.getElementById("fnPaid").value) || 0;
        const aov = Number(document.getElementById("fnAov").value) || 0;
        const orders = Math.round(sessions * (toProd / 100) * (toCart / 100) * (toChk / 100) * (toPaid / 100));
        const crTotal = sessions ? (orders / sessions) * 100 : 0;
        const rev = orders * aov;
        const improvedOrders = Math.round(sessions * (toProd / 100) * (toCart / 100) * (toChk / 100) * (Math.min(100, toPaid + 10) / 100));
        const extraRev = (improvedOrders - orders) * aov;
        out.innerHTML = `<div class="calc-grid"><div><small style="color:var(--text-soft);">Conversión global</small><div style="font-size:23px; font-weight:800; color:var(--primary);">${crTotal.toFixed(2)}%</div></div><div><small style="color:var(--text-soft);">Pedidos / Facturación mes</small><div style="font-size:21px; font-weight:800;">${orders.toLocaleString("es-ES")} · ${rev.toLocaleString("es-ES")} €</div></div><div><small style="color:var(--text-soft);">Si mejoras el checkout +10 pts</small><div style="font-size:21px; font-weight:800; color:var(--success);">+${extraRev.toLocaleString("es-ES")} € / mes</div></div></div>`;
        return { sessions, toProduct: toProd, toCart, toCheckout: toChk, toPaid, aov, orders, monthlyRevenue: rev };
      }
      if (wsMeta.calculator === "sem_roas") {
        const budget = Number(document.getElementById("smBud").value) || 0;
        const cpc = Math.max(0.01, Number(document.getElementById("smCpc").value) || 0.5);
        const cr = Number(document.getElementById("smCr").value) || 0;
        const aov = Number(document.getElementById("smAov").value) || 0;
        const mar = Number(document.getElementById("smMar").value) || 0;
        const clicks = Math.round(budget / cpc);
        const conv = Math.round(clicks * (cr / 100));
        const rev = conv * aov;
        const roas = budget ? rev / budget : 0;
        const cpa = conv ? budget / conv : 0;
        const net = rev * (mar / 100) - budget;
        const ok = net > 0;
        out.innerHTML = `<div class="calc-grid"><div><small style="color:var(--text-soft);">Clics / Ventas estimadas</small><div style="font-size:21px; font-weight:800;">${clicks.toLocaleString("es-ES")} / ${conv}</div></div><div><small style="color:var(--text-soft);">ROAS / CPA</small><div style="font-size:21px; font-weight:800; color:var(--primary);">${roas.toFixed(2)}x · ${cpa.toFixed(2)} €</div></div><div><small style="color:var(--text-soft);">Contribución neta tras SEM</small><div style="font-size:22px; font-weight:800; color:${ok ? "var(--success)" : "var(--danger)"};">${net.toLocaleString("es-ES", { maximumFractionDigits: 0 })} €</div></div></div>`;
        return { budget, cpc, cr, aov, marginPct: mar, clicks, conversions: conv, roas: Number(roas.toFixed(2)), netContribution: Math.round(net) };
      }
      if (wsMeta.calculator === "pnl_ebitda") {
        const rev = Number(document.getElementById("pnRev").value) || 0;
        const varPct = Number(document.getElementById("pnVar").value) || 0;
        const fixed = Number(document.getElementById("pnFix").value) || 0;
        const amort = Number(document.getElementById("pnAmort").value) || 0;
        const fin = Number(document.getElementById("pnFin").value) || 0;
        const taxPct = Number(document.getElementById("pnTax").value) || 0;
        const grossMargin = rev * (1 - varPct / 100);
        const ebitda = grossMargin - fixed;
        const ebit = ebitda - amort;
        const ebt = ebit - fin;
        const net = ebt > 0 ? ebt * (1 - taxPct / 100) : ebt;
        const breakeven = (1 - varPct / 100) > 0 ? (fixed + amort + fin) / (1 - varPct / 100) : 0;
        out.innerHTML = `<div class="calc-grid"><div><small style="color:var(--text-soft);">EBITDA (% s/ ventas)</small><div style="font-size:22px; font-weight:800; color:${ebitda >= 0 ? "var(--primary)" : "var(--danger)"};">${Math.round(ebitda).toLocaleString("es-ES")} € (${rev ? ((ebitda / rev) * 100).toFixed(1) : 0}%)</div></div><div><small style="color:var(--text-soft);">Resultado Neto estimado</small><div style="font-size:22px; font-weight:800; color:${net >= 0 ? "var(--success)" : "var(--danger)"};">${Math.round(net).toLocaleString("es-ES")} €</div></div><div><small style="color:var(--text-soft);">Punto de equilibrio (ventas mín.)</small><div style="font-size:20px; font-weight:800;">${Math.round(breakeven).toLocaleString("es-ES")} €</div></div></div>`;
        return { revenue: rev, varPct, fixedCosts: fixed, amort, finCost: fin, taxPct, ebitda: Math.round(ebitda), netProfit: Math.round(net), breakeven: Math.round(breakeven) };
      }
      if (wsMeta.calculator === "pert_emv") {
        const opt = Number(document.getElementById("ptO").value) || 0;
        const most = Number(document.getElementById("ptM").value) || 0;
        const pess = Number(document.getElementById("ptP").value) || 0;
        const pert = (opt + 4 * most + pess) / 6;
        const sd = Math.abs(pess - opt) / 6;
        const p1 = Number(document.getElementById("emP1").value) || 0;
        const i1 = Number(document.getElementById("emI1").value) || 0;
        const p2 = Number(document.getElementById("emP2").value) || 0;
        const i2 = Number(document.getElementById("emI2").value) || 0;
        const po = Number(document.getElementById("emPo").value) || 0;
        const io = Number(document.getElementById("emIo").value) || 0;
        const emvTotal = (p1 / 100) * i1 + (p2 / 100) * i2 + (po / 100) * io;
        out.innerHTML = `<div class="calc-grid"><div><small style="color:var(--text-soft);">Duración PERT Beta / σ</small><div style="font-size:22px; font-weight:800; color:var(--primary);">${pert.toFixed(2)} días (±${sd.toFixed(2)})</div><div style="font-size:11.5px; color:var(--text-soft);">Rango 68 %: ${(pert - sd).toFixed(1)} a ${(pert + sd).toFixed(1)} días</div></div><div><small style="color:var(--text-soft);">Exposición neta EMV</small><div style="font-size:22px; font-weight:800; color:${emvTotal < 0 ? "var(--danger)" : "var(--success)"};">${Math.round(emvTotal).toLocaleString("es-ES")} €</div></div><div><small style="color:var(--text-soft);">Reserva de contingencia sugerida</small><div style="font-size:22px; font-weight:800; color:var(--gold);">${Math.max(0, Math.round(-emvTotal)).toLocaleString("es-ES")} €</div></div></div>`;
        return { opt, most, pess, pert: Number(pert.toFixed(2)), sd: Number(sd.toFixed(2)), r1Prob: p1, r1Imp: i1, r2Prob: p2, r2Imp: i2, o1Prob: po, o1Imp: io, emvNet: Math.round(emvTotal) };
      }
      if (wsMeta.calculator === "evm_calc") {
        const bac = Math.max(1, Number(document.getElementById("evBac").value) || 0);
        const pv = Math.max(1, Number(document.getElementById("evPv").value) || 0);
        const ev = Number(document.getElementById("evEv").value) || 0;
        const ac = Math.max(1, Number(document.getElementById("evAc").value) || 0);
        const cv = ev - ac;
        const sv = ev - pv;
        const cpi = ev / ac;
        const spi = ev / pv;
        const eacTyp = cpi > 0 ? bac / cpi : bac;
        const etcTyp = Math.max(0, eacTyp - ac);
        const vac = bac - eacTyp;
        const tcpi = (bac - ac) > 0 ? (bac - ev) / (bac - ac) : 0;
        const costOk = cpi >= 1;
        const schedOk = spi >= 1;
        out.innerHTML = `
          <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:12px;">
            <span class="pill ${costOk ? "success" : "danger"}">${costOk ? "✅ Bajo/En presupuesto" : "⚠️ Sobrecosteado"} (CPI: ${cpi.toFixed(2)})</span>
            <span class="pill ${schedOk ? "success" : "danger"}">${schedOk ? "✅ En plazo/Adelantado" : "⚠️ Retrasado"} (SPI: ${spi.toFixed(2)})</span>
          </div>
          <div class="calc-grid">
            <div><small style="color:var(--text-soft);">CV (EV - AC) / SV (EV - PV)</small><div style="font-size:18px; font-weight:800;">${Math.round(cv).toLocaleString("es-ES")} € / ${Math.round(sv).toLocaleString("es-ES")} €</div></div>
            <div><small style="color:var(--text-soft);">EAC típico (BAC / CPI)</small><div style="font-size:20px; font-weight:800; color:var(--primary);">${Math.round(eacTyp).toLocaleString("es-ES")} €</div></div>
            <div><small style="color:var(--text-soft);">ETC (EAC - AC) / VAC</small><div style="font-size:18px; font-weight:800;">${Math.round(etcTyp).toLocaleString("es-ES")} € / ${Math.round(vac).toLocaleString("es-ES")} €</div></div>
            <div><small style="color:var(--text-soft);">TCPI (hacia BAC)</small><div style="font-size:20px; font-weight:800; color:${tcpi > 1.1 ? "var(--danger)" : "var(--success)"};">${tcpi.toFixed(2)}</div></div>
          </div>
        `;
        return { bac, pv, ev, ac, cv: Math.round(cv), sv: Math.round(sv), cpi: Number(cpi.toFixed(2)), spi: Number(spi.toFixed(2)), eacTyp: Math.round(eacTyp), tcpi: Number(tcpi.toFixed(2)) };
      }
      if (wsMeta.calculator === "pricing_elasticity") {
        const price = Number(document.getElementById("pePrice").value) || 0;
        const units = Number(document.getElementById("peUnits").value) || 0;
        const varCost = Number(document.getElementById("peCost").value) || 0;
        const elast = Number(document.getElementById("peElast").value) || 0;
        const deltaPct = Number(document.getElementById("peDelta").value) || 0;
        const newPrice = price * (1 + deltaPct / 100);
        const newUnits = Math.max(0, Math.round(units * (1 + (elast * deltaPct) / 100)));
        const oldMargin = (price - varCost) * units;
        const newMargin = (newPrice - varCost) * newUnits;
        const diffMargin = newMargin - oldMargin;
        const ok = diffMargin >= 0;
        out.innerHTML = `<div class="calc-grid"><div><small style="color:var(--text-soft);">Nuevo precio / Volumen estimado</small><div style="font-size:20px; font-weight:800;">${newPrice.toFixed(2)} € · ${newUnits.toLocaleString("es-ES")} uds</div></div><div><small style="color:var(--text-soft);">Nuevo margen de contribución</small><div style="font-size:21px; font-weight:800; color:var(--primary);">${Math.round(newMargin).toLocaleString("es-ES")} €</div></div><div><small style="color:var(--text-soft);">Impacto neto en beneficio</small><div style="font-size:21px; font-weight:800; color:${ok ? "var(--success)" : "var(--danger)"};">${diffMargin >= 0 ? "+" : ""}${Math.round(diffMargin).toLocaleString("es-ES")} €</div></div></div>`;
        return { price, units, varCost, elasticity: elast, priceDeltaPct: deltaPct, newPrice: Number(newPrice.toFixed(2)), newUnits, marginDelta: Math.round(diffMargin) };
      }
      if (wsMeta.calculator === "dcf_npv") {
        const inv = Number(document.getElementById("dcInv").value) || 0;
        const wacc = Math.max(0.5, Number(document.getElementById("dcWacc").value) || 10) / 100;
        const cfs = [1, 2, 3, 4, 5].map((n) => Number(document.getElementById(`dcCf${n}`).value) || 0);
        const gTerm = Math.min(wacc * 100 - 0.5, Number(document.getElementById("dcG").value) || 0) / 100;
        const pvCfs = cfs.reduce((acc, cf, idx) => acc + cf / Math.pow(1 + wacc, idx + 1), 0);
        const tv = (cfs[4] * (1 + gTerm)) / Math.max(0.005, wacc - gTerm);
        const pvTv = tv / Math.pow(1 + wacc, 5);
        const npvExplicit = pvCfs - inv;
        const evTotal = pvCfs + pvTv;
        const pi = inv > 0 ? pvCfs / inv : 0;
        const ok = npvExplicit >= 0;
        out.innerHTML = `<div style="margin-bottom:10px;"><span class="pill ${ok ? "success" : "danger"}">${ok ? "✅ Crea valor económico (VAN explícito positivo)" : "⚠️ VAN explícito negativo — depende del valor terminal"}</span></div><div class="calc-grid"><div><small style="color:var(--text-soft);">VAN explícito (5 años)</small><div style="font-size:21px; font-weight:800; color:${ok ? "var(--success)" : "var(--danger)"};">${Math.round(npvExplicit).toLocaleString("es-ES")} €</div></div><div><small style="color:var(--text-soft);">Índice de Rentabilidad (VP/Inv.)</small><div style="font-size:21px; font-weight:800;">${pi.toFixed(2)}×</div></div><div><small style="color:var(--text-soft);">Enterprise Value (con Valor Terminal)</small><div style="font-size:21px; font-weight:800; color:var(--primary);">${Math.round(evTotal).toLocaleString("es-ES")} €</div></div></div>`;
        return { inv, wacc: Number((wacc * 100).toFixed(2)), cf1: cfs[0], cf2: cfs[1], cf3: cfs[2], cf4: cfs[3], cf5: cfs[4], gTerm: Number((gTerm * 100).toFixed(2)), npvExplicit: Math.round(npvExplicit), enterpriseValue: Math.round(evTotal) };
      }
      if (wsMeta.calculator === "ma_valuation") {
        const eb = Number(document.getElementById("maEb").value) || 0;
        const mul = Number(document.getElementById("maMul").value) || 0;
        const debt = Number(document.getElementById("maDebt").value) || 0;
        const premPct = Number(document.getElementById("maPrem").value) || 0;
        const pvSyn = Number(document.getElementById("maSyn").value) || 0;
        const evStand = eb * mul;
        const eqStand = evStand - debt;
        const premEur = eqStand * (premPct / 100);
        const offerEq = eqStand + premEur;
        const netBuyerVal = pvSyn - premEur;
        const ok = netBuyerVal >= 0;
        out.innerHTML = `<div style="margin-bottom:10px;"><span class="pill ${ok ? "success" : "danger"}">${ok ? "✅ Adquisición creadora de valor (Sinergias > Prima)" : "⚠️ Destruye valor para el comprador (Prima > Sinergias)"}</span></div><div class="calc-grid"><div><small style="color:var(--text-soft);">EV / Equity Standalone</small><div style="font-size:19px; font-weight:800;">${Math.round(evStand).toLocaleString("es-ES")} € / ${Math.round(eqStand).toLocaleString("es-ES")} €</div></div><div><small style="color:var(--text-soft);">Precio Oferta Equity (con prima)</small><div style="font-size:20px; font-weight:800; color:var(--primary);">${Math.round(offerEq).toLocaleString("es-ES")} €</div></div><div><small style="color:var(--text-soft);">Valor neto comprador (Sinergias - Prima)</small><div style="font-size:20px; font-weight:800; color:${ok ? "var(--success)" : "var(--danger)"};">${netBuyerVal >= 0 ? "+" : ""}${Math.round(netBuyerVal).toLocaleString("es-ES")} €</div></div></div>`;
        return { ebitda: eb, mult: mul, netDebt: debt, premiumPct: premPct, pvSynergies: pvSyn, evStand: Math.round(evStand), offerEq: Math.round(offerEq), netBuyerValue: Math.round(netBuyerVal) };
      }

      const data = {};
      wsMeta.fields.forEach((f) => { data[f.id] = document.getElementById(`ws_${f.id}`).value.trim(); });
      return data;
    }

    if (wsMeta.calculator) {
      collectCalcData();
      elRoot.querySelectorAll("input, textarea").forEach((inp) => inp.addEventListener("input", collectCalcData));
    }

    document.getElementById("saveWsBtn").onclick = () => {
      pdb.workshops[b.id] = { completed: true, data: collectCalcData(), updatedAt: new Date().toISOString() };
      saveDb();
      toast("¡Taller práctico guardado en tu portafolio!");
      render();
    };
    document.getElementById("wsBackBlock").onclick = () => navigate("topic", { topicId: b.topics[0].id });
    document.getElementById("wsToExamBtn").onclick = () => navigate("exam", { blockId: b.id });
  }

  // =====================================================
  // VIEW 4: BLOCK CERTIFICATION EXAM
  // =====================================================
  function renderExam() {
    const prog = P();
    const pdb = PDB();
    const b = prog.blocks.find((x) => x.id === ui.blockId) || prog.blocks[0];
    const exMeta = A().blocks[b.id];
    const record = pdb.exams[b.id];
    const draftKey = `${ui.programId}:${b.id}`;
    if (!ui.examDraft[draftKey]) ui.examDraft[draftKey] = { answers: {}, submitted: false };
    const draft = ui.examDraft[draftKey];

    elCrumb.innerHTML = `${esc(prog.shortName)} › ${esc(b.code)} › <strong>Examen de Certificación</strong>`;

    let resultBanner = "";
    if (draft.submitted) {
      const correctCount = exMeta.questions.filter((q, idx) => draft.answers[idx] === q.correct).length;
      const score = Math.round((correctCount / exMeta.questions.length) * 100);
      const passed = score >= A().passingScore;
      resultBanner = `
        <div class="card" style="border:2px solid ${passed ? "var(--success-bright)" : "var(--danger)"}; background:${passed ? "var(--success-soft)" : "var(--danger-soft)"};">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
            <div>
              <h2 style="margin:0 0 4px;">${passed ? "🎉 ¡Examen de Bloque Aprobado!" : "⚠️ Puntuación insuficiente para certificar"}</h2>
              <p style="margin:0; font-size:14px;">Has acertado <strong>${correctCount} de ${exMeta.questions.length}</strong> preguntas (<strong>${score}%</strong>). Mínimo requerido: ${A().passingScore}%.</p>
            </div>
            <div style="display:flex; gap:8px;">
              <button class="btn" id="retryExamBtn">🔄 Reintentar examen</button>
              ${getStats().certUnlocked
                ? `<button class="btn btn-gold" id="examGoCertBtn">🎓 ¡Emitir mi Certificado Oficial!</button>`
                : b.num < prog.blocks.length
                  ? `<button class="btn btn-primary" id="examNextBlockBtn">Ir al Bloque ${b.num + 1} →</button>`
                  : `<button class="btn btn-primary" id="examGoDashBtn">Ver progreso en Inicio</button>`}
            </div>
          </div>
        </div>
      `;
    }

    elRoot.innerHTML = `
      <div class="card">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:8px;">
          <span class="pill">${b.icon} ${esc(b.code)} · ${esc(b.name)}</span>
          ${record ? `<span class="pill ${record.passed ? "success" : "danger"}">Mejor nota: ${record.bestScore}% (${record.attempts} intento${record.attempts > 1 ? "s" : ""})</span>` : `<span class="pill gold">Mínimo para aprobar: ${A().passingScore}%</span>`}
        </div>
        <h1 style="margin:0 0 6px; font-size:23px;">${esc(exMeta.examTitle)}</h1>
        <p style="margin:0; font-size:13.5px; color:var(--text-soft);">Responde a los 5 casos situacionales basados en el contenido real del bloque. Corrección inmediata y explicación detallada.</p>
      </div>
      ${resultBanner}
      ${exMeta.questions.map((q, qIdx) => {
        const chosen = draft.answers[qIdx];
        const isCorrect = chosen === q.correct;
        return `
          <div class="q-card">
            <div class="q-title">${qIdx + 1}. ${esc(q.q)}</div>
            ${q.options.map((opt, oIdx) => {
              let cls = "opt-label";
              if (draft.submitted) {
                if (oIdx === q.correct) cls += " correct";
                else if (chosen === oIdx) cls += " wrong";
              } else if (chosen === oIdx) cls += " selected";
              return `<label class="${cls}" data-pick-q="${qIdx}" data-pick-o="${oIdx}"><input type="radio" name="q_${qIdx}" ${chosen === oIdx ? "checked" : ""} ${draft.submitted ? "disabled" : ""} style="margin-top:3px;" /><span>${esc(opt)}</span></label>`;
            }).join("")}
            ${draft.submitted ? `<div class="q-feedback ${isCorrect ? "ok" : "ko"}"><strong>${isCorrect ? "✅ Correcto." : "❌ Respuesta incorrecta."}</strong> ${esc(q.explanation)}</div>` : ""}
          </div>
        `;
      }).join("")}
      ${!draft.submitted ? `<div style="display:flex; justify-content:space-between; align-items:center; margin-top:16px; flex-wrap:wrap; gap:10px;"><button class="btn" id="examBackBtn">← Repasar temas del ${esc(b.code)}</button><button class="btn btn-primary" id="submitExamBtn" style="padding:10px 22px; font-size:14px;">✓ Corregir examen y obtener nota</button></div>` : ""}
    `;

    if (!draft.submitted) {
      elRoot.querySelectorAll("[data-pick-q]").forEach((lbl) => {
        lbl.onclick = () => {
          draft.answers[Number(lbl.getAttribute("data-pick-q"))] = Number(lbl.getAttribute("data-pick-o"));
          render();
        };
      });
      document.getElementById("examBackBtn").onclick = () => navigate("topic", { topicId: b.topics[0].id });
      document.getElementById("submitExamBtn").onclick = () => {
        if (Object.keys(draft.answers).length < exMeta.questions.length) { toast("Responde todas las preguntas antes de corregir"); return; }
        const correctCount = exMeta.questions.filter((q, idx) => draft.answers[idx] === q.correct).length;
        const score = Math.round((correctCount / exMeta.questions.length) * 100);
        const passed = score >= A().passingScore;
        const prevRec = pdb.exams[b.id];
        pdb.exams[b.id] = {
          bestScore: prevRec ? Math.max(prevRec.bestScore, score) : score,
          lastScore: score,
          passed: (prevRec?.passed || false) || passed,
          attempts: (prevRec?.attempts || 0) + 1,
          date: new Date().toISOString()
        };
        draft.submitted = true;
        saveDb();
        toast(passed ? `¡Bloque ${b.num} aprobado con ${score}%!` : `Nota: ${score}%. Puedes reintentarlo`);
        render();
        elViewport.scrollTop = 0;
      };
    } else {
      document.getElementById("retryExamBtn").onclick = () => { ui.examDraft[draftKey] = { answers: {}, submitted: false }; render(); };
      const gCert = document.getElementById("examGoCertBtn");
      if (gCert) gCert.onclick = () => navigate("certificate");
      const nBlk = document.getElementById("examNextBlockBtn");
      if (nBlk) nBlk.onclick = () => navigate("topic", { topicId: prog.blocks[b.num].topics[0].id });
      const gDash = document.getElementById("examGoDashBtn");
      if (gDash) gDash.onclick = () => navigate("dashboard");
    }
  }

  // =====================================================
  // VIEW 5: OFFICIAL CERTIFICATE
  // =====================================================
  function renderCertificate() {
    const prog = P();
    const pdb = PDB();
    const stats = getStats();
    elCrumb.innerHTML = `${esc(prog.shortName)} › <strong>🎓 Certificado Oficial Digital</strong>`;

    if (!stats.certUnlocked) {
      elRoot.innerHTML = `
        <div class="card" style="text-align:center; padding:42px 28px;">
          <div style="font-size:48px; margin-bottom:10px;">🔒</div>
          <h1 style="margin:0 0 8px;">Tu Certificado de ${esc(prog.shortName)} aún está bloqueado</h1>
          <p style="color:var(--text-soft); max-width:580px; margin:0 auto 22px;">
            Para emitir el diploma oficial (<strong>${esc(prog.durationLabel)}</strong>) con código QR verificable necesitas aprobar los <strong>${prog.blocks.length} exámenes de bloque</strong> (mínimo ${A().passingScore} %). Llevas <strong>${stats.examsPassed} de ${prog.blocks.length}</strong> aprobados.
          </p>
          <div style="max-width:460px; margin:0 auto 22px;">
            <div class="prog-row"><span>Progreso de exámenes</span><strong>${stats.examsPassed} / ${prog.blocks.length}</strong></div>
            <div class="prog-track"><div class="prog-bar" style="width:${Math.round((stats.examsPassed / prog.blocks.length) * 100)}%"></div></div>
          </div>
          <div style="display:flex; justify-content:center; gap:10px; flex-wrap:wrap;">
            <button class="btn btn-primary" id="certGoHomeBtn">Continuar con los bloques</button>
            <button class="btn btn-gold" id="certOpenQaBtn">🧪 Usar Modo Pruebas para ver vista previa del diploma</button>
          </div>
        </div>
      `;
      document.getElementById("certGoHomeBtn").onclick = () => navigate("dashboard");
      document.getElementById("certOpenQaBtn").onclick = () => document.getElementById("qaModal").classList.add("open");
      return;
    }

    const certId = getCertId();
    const issuedDate = new Date(pdb.certIssuedAt || Date.now()).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });
    const qrSvg = generateQrSvg(certId);

    elRoot.innerHTML = `
      <div class="card no-print" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
        <div>
          <span class="pill success">✅ Certificado Oficial Emitido · ID ${certId}</span>
          <p style="margin:6px 0 0; font-size:13px; color:var(--text-soft);">Imprime o guarda en PDF (A4 horizontal), personaliza institución/firmante o valida en el portal público.</p>
        </div>
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          <button class="btn btn-primary" id="printCertBtn">🖨️ Descargar / Imprimir PDF</button>
          <button class="btn btn-success" id="openVerifyBtn">🔍 Probar Verificación Pública</button>
          <button class="btn" id="copyLinkedInBtn">🔗 Copiar datos LinkedIn</button>
          <button class="btn" id="editCertBrandBtn">⚙️ Personalizar marca/nombre</button>
        </div>
      </div>

      <div class="diploma-shell">
        <div class="diploma-top">
          <div>
            <div class="diploma-org">${esc(db.profile.org)}</div>
            <div class="diploma-sub">${esc(prog.badge)} · Verificación Digital Activa</div>
          </div>
          <svg width="68" height="68" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-label="Sello oficial">
            <circle cx="40" cy="40" r="35" fill="#fef3c7" stroke="#d97706" stroke-width="3"/>
            <circle cx="40" cy="40" r="28" fill="none" stroke="#b45309" stroke-width="1.5" stroke-dasharray="3 2"/>
            <text x="40" y="36" text-anchor="middle" font-size="11" font-weight="800" fill="#92400e">OFICIAL</text>
            <text x="40" y="50" text-anchor="middle" font-size="8.5" font-weight="700" fill="#b45309">${prog.id === "gmba" ? "90 ECTS" : prog.id === "pmp" ? "108 H · PMP" : prog.id === "emba" ? "19 CRÉDITOS" : "228 HORAS"}</text>
          </svg>
        </div>

        <div class="diploma-center">
          <div class="diploma-kicker">${prog.id === "pmp" ? "Certificado de Finalización y Preparación Ejecutiva" : "Certificado de Aprovechamiento y Competencia Ejecutiva"}</div>
          <div class="diploma-title">Se otorga el presente diploma a</div>
          <div class="diploma-student">${esc(db.profile.name)}</div>
          <p class="diploma-desc">
            Por haber completado y superado satisfactoriamente las evaluaciones de los <strong>${prog.blocks.length} bloques formativos (${prog.totalTopics} temas)</strong> del <strong>${esc(prog.programName)}</strong>, acreditando sus competencias directivas y prácticas en ${esc(prog.tagline.toLowerCase())}
          </p>
          ${prog.id === "pmp" ? `<p style="font-size:11px; color:#64748b; max-width:660px; margin:0 auto 10px;"><em>Nota de acreditación: este certificado acredita la finalización de la formación interna en dirección de proyectos y preparación del examen; no equivale a la certificación oficial PMP® otorgada por PMI.</em></p>` : ""}

          <div class="diploma-meta-grid">
            <div><small>Carga académica</small><strong>${esc(prog.durationLabel)}</strong></div>
            <div><small>Calificación media</small><strong>${stats.avgScore}% (${stats.avgScore >= 90 ? "Sobresaliente" : stats.avgScore >= 80 ? "Notable" : "Aprobado"})</strong></div>
            <div><small>Fecha de emisión</small><strong>${esc(issuedDate)}</strong></div>
            <div><small>ID de verificación</small><strong>${certId}</strong></div>
          </div>
        </div>

        <div class="diploma-bottom">
          <div class="sig-box">
            <div class="sig-script">${esc(db.profile.signer.split("·")[0].trim())}</div>
            <div class="sig-line">${esc(db.profile.signer)}</div>
            <div class="sig-role">${esc(db.profile.org)}</div>
          </div>
          <div class="qr-box">
            <div class="qr-meta">
              <div><strong>Verificación online</strong></div>
              <div>Código: <code>${certId}</code></div>
              <div>Escanea o consulta el portal oficial</div>
            </div>
            ${qrSvg}
          </div>
        </div>
      </div>
    `;

    document.getElementById("printCertBtn").onclick = () => window.print();
    document.getElementById("openVerifyBtn").onclick = () => { ui.verifyQuery = certId; navigate("verify"); };
    document.getElementById("editCertBrandBtn").onclick = openProfileModal;
    document.getElementById("copyLinkedInBtn").onclick = async () => {
      const txt = `Certificación: ${prog.programName}\nEntidad emisora: ${db.profile.org}\nID de credencial: ${certId}\nCarga: ${prog.durationLabel} | Calificación media: ${stats.avgScore}%`;
      try { await navigator.clipboard.writeText(txt); toast("Datos de credencial copiados para LinkedIn"); }
      catch { toast("Copiado: " + certId); }
    };
  }

  // =====================================================
  // VIEW 6: UNIFIED PUBLIC CREDENTIAL VERIFIER (ALL PROGRAMS)
  // =====================================================
  function renderVerify() {
    elCrumb.innerHTML = `<strong>🔍 Portal Público de Verificación de Certificados</strong>`;
    const issuedCerts = PROGRAM_ORDER
      .filter((pid) => getStats(pid).certUnlocked)
      .map((pid) => ({ pid, id: getCertId(pid), prog: PROGRAMS[pid], stats: getStats(pid), pdb: PDB(pid) }));

    const query = (ui.verifyQuery || issuedCerts[0]?.id || "").trim().toUpperCase();
    const match = issuedCerts.find((c) => c.id === query);

    elRoot.innerHTML = `
      <div class="card">
        <h1 style="margin:0 0 6px; font-size:23px;">🔍 Verificador Público de Credenciales</h1>
        <p style="margin:0 0 14px; color:var(--text-soft); font-size:13.5px;">Valida en línea cualquier certificado emitido en cualquiera de los programas de <strong>${esc(db.profile.org)}</strong>.</p>
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          <input class="input" id="verifyInput" style="flex:1; min-width:240px;" value="${esc(query)}" placeholder="Ej.: CERT-DIND-2026-... o CERT-GMBA-2026-..." />
          <button class="btn btn-primary" id="doVerifyBtn">Verificar código</button>
          ${issuedCerts.map((c) => `<button class="btn" data-fill-cid="${c.id}">Usar ${c.prog.icon} ${c.id}</button>`).join("")}
        </div>
      </div>

      ${query ? (match ? `
        <div class="verify-banner">
          <div style="font-size:38px;">✅</div>
          <div>
            <h2 style="margin:0 0 3px; color:var(--success);">Credencial Auténtica y Verificada</h2>
            <p style="margin:0; font-size:13.5px;">El certificado <strong>${match.id}</strong> es válido y acredita a <strong>${esc(db.profile.name)}</strong> en el programa <strong>${esc(match.prog.programName)}</strong> (${esc(match.prog.durationLabel)}).</p>
          </div>
        </div>
        <div class="card">
          <h3 style="margin:0 0 12px;">Expediente verificado (${match.prog.blocks.length} bloques · ⏱ ${formatShortDuration(match.pdb.studyTime.totalSeconds)} registradas)</h3>
          <div class="table-wrap"><table><thead><tr><th>Bloque</th><th>Temas</th><th>Horas</th><th>Tiempo estudiado</th><th>Taller práctico</th><th>Nota Examen</th><th>Estado</th></tr></thead><tbody>
            ${match.prog.blocks.map((b) => {
              const ex = match.pdb.exams[b.id];
              const ws = match.pdb.workshops[b.id];
              return `<tr><td><strong>${b.icon} ${esc(b.code)}:</strong> ${esc(b.name)}</td><td>${b.topics.length} temas</td><td>${b.hours} h</td><td>${formatShortDuration(match.pdb.studyTime.byBlock[b.id] || 0)}</td><td>${ws?.completed ? "✅ Entregado" : "Pendiente"}</td><td><strong>${ex?.bestScore || 0}%</strong></td><td><span class="pill success">Superado</span></td></tr>`;
            }).join("")}
          </tbody></table></div>
        </div>
      ` : `
        <div class="card" style="border-color:var(--danger-border); background:var(--danger-soft);">
          <h3 style="margin:0 0 6px; color:var(--danger);">❌ Certificado no encontrado o aún no emitido</h3>
          <p style="margin:0; font-size:13.5px;">No existe registro emitido para <code>${esc(query)}</code>. Completa los exámenes de un programa (o usa 🧪 Pruebas) para generar una credencial verificable.</p>
        </div>
      `) : ""}
    `;

    document.getElementById("doVerifyBtn").onclick = () => { ui.verifyQuery = document.getElementById("verifyInput").value; render(); };
    elRoot.querySelectorAll("[data-fill-cid]").forEach((btn) => (btn.onclick = () => { ui.verifyQuery = btn.getAttribute("data-fill-cid"); render(); }));
  }

  // =====================================================
  // VIEW 7: STUDENT PORTFOLIO
  // =====================================================
  function renderPortfolio() {
    const prog = P();
    const pdb = PDB();
    const stats = getStats();
    const flat = getFlatTopics(ui.programId);
    elCrumb.innerHTML = `${esc(prog.shortName)} › <strong>📁 Mi Portafolio de Evidencias</strong>`;
    const wsEntries = prog.blocks.filter((b) => pdb.workshops[b.id]?.completed);
    const noteEntries = flat.filter((t) => (pdb.notes[t.id] || "").trim().length > 0);

    elRoot.innerHTML = `
      <div class="card" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
        <div>
          <h1 style="margin:0 0 4px; font-size:23px;">📁 Portafolio — ${esc(prog.shortName)}</h1>
          <p style="margin:0; font-size:13.5px; color:var(--text-soft);">Titular: <strong>${esc(db.profile.name)}</strong> · Tiempo registrado: <strong>${formatHMS(pdb.studyTime.totalSeconds)}</strong></p>
        </div>
        <button class="btn btn-primary" id="exportPortfolioBtn">⬇️ Exportar Portafolio (.md)</button>
      </div>

      <div class="card">
        <h3 style="margin:0 0 12px;">🛠️ Talleres Prácticos Guardados (${wsEntries.length} / ${prog.blocks.length})</h3>
        ${wsEntries.length === 0
          ? `<p style="color:var(--text-soft); font-size:13.5px;">Aún no has guardado ningún taller práctico en este programa.</p>`
          : wsEntries.map((b) => `
              <div style="padding:12px; border:1px solid var(--border); border-radius:10px; margin-bottom:10px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <strong>${b.icon} ${esc(b.code)}: ${esc(A().blocks[b.id].workshop.title)}</strong>
                  <button class="btn" data-edit-ws="${b.id}">Editar</button>
                </div>
                <pre style="margin:8px 0 0; font-size:12px; background:var(--surface-2); color:var(--text); padding:10px; border-radius:8px; overflow-x:auto;">${esc(JSON.stringify(pdb.workshops[b.id].data, null, 2))}</pre>
              </div>
            `).join("")}
      </div>

      <div class="card">
        <h3 style="margin:0 0 12px;">✍️ Notas del Cuaderno de Trabajo (${noteEntries.length})</h3>
        ${noteEntries.length === 0
          ? `<p style="color:var(--text-soft); font-size:13.5px;">Aún no tienes notas guardadas en los casos prácticos de este programa.</p>`
          : noteEntries.map((t) => `<div style="padding:12px; border:1px solid var(--border); border-radius:10px; margin-bottom:10px;"><strong>${esc(t.blockCode)} · ${esc(t.title)}</strong><p style="margin:6px 0 0; white-space:pre-wrap; font-size:13.5px;">${esc(pdb.notes[t.id])}</p></div>`).join("")}
      </div>
    `;

    elRoot.querySelectorAll("[data-edit-ws]").forEach((btn) => (btn.onclick = () => navigate("workshop", { blockId: btn.getAttribute("data-edit-ws") })));
    document.getElementById("exportPortfolioBtn").onclick = () => {
      let md = `# Portafolio de Certificación — ${db.profile.name}\n\n`;
      md += `- **Programa:** ${prog.programName} (${prog.durationLabel})\n`;
      md += `- **Correo:** ${db.profile.email}\n`;
      md += `- **Avance global:** ${stats.overallPct}% | **Exámenes aprobados:** ${stats.examsPassed}/${prog.blocks.length} | **Nota media:** ${stats.avgScore}%\n`;
      md += `- **Tiempo de estudio registrado:** ${formatHMS(pdb.studyTime.totalSeconds)}\n\n## Calificaciones y tiempo por bloque\n\n`;
      prog.blocks.forEach((b) => {
        const ex = pdb.exams[b.id];
        md += `- **${b.code} (${b.name}):** ${ex ? `${ex.bestScore}% (${ex.passed ? "Aprobado" : "Pendiente"})` : "No realizado"} · Tiempo: ${formatShortDuration(pdb.studyTime.byBlock[b.id] || 0)}\n`;
      });
      md += `\n## Talleres Prácticos\n\n`;
      wsEntries.forEach((b) => { md += `### ${b.code} — ${A().blocks[b.id].workshop.title}\n\`\`\`json\n${JSON.stringify(pdb.workshops[b.id].data, null, 2)}\n\`\`\`\n\n`; });
      md += `## Cuaderno de Trabajo\n\n`;
      noteEntries.forEach((t) => { md += `### ${t.blockCode} · ${t.title}\n${pdb.notes[t.id]}\n\n`; });

      const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = `portafolio-${prog.id}-${db.profile.name.toLowerCase().replace(/\s+/g, "-")}.md`;
      a.click(); URL.revokeObjectURL(url);
      toast("Portafolio descargado en Markdown");
    };
  }

  // =====================================================
  // MAIN RENDER ROUTER
  // =====================================================
  function render() {
    renderSidebar();
    document.getElementById("roleStudentBtn").classList.toggle("active", ui.role === "student");
    document.getElementById("roleTrainerBtn").classList.toggle("active", ui.role === "trainer");

    if (ui.view === "catalog") renderCatalog();
    else if (ui.view === "dashboard") renderDashboard();
    else if (ui.view === "topic") renderTopic();
    else if (ui.view === "workshop") renderWorkshop();
    else if (ui.view === "exam") renderExam();
    else if (ui.view === "certificate") renderCertificate();
    else if (ui.view === "verify") renderVerify();
    else if (ui.view === "portfolio") renderPortfolio();
  }

  // =====================================================
  // MODALS: PROFILE, STUDY TIME & QA TOOLS
  // =====================================================
  const profileModal = document.getElementById("profileModal");
  function openProfileModal() {
    document.getElementById("profName").value = db.profile.name;
    document.getElementById("profEmail").value = db.profile.email;
    document.getElementById("profCompany").value = db.profile.company;
    document.getElementById("profOrg").value = db.profile.org;
    document.getElementById("profSigner").value = db.profile.signer;
    profileModal.classList.add("open");
  }
  document.getElementById("openProfileBtn").onclick = openProfileModal;
  document.getElementById("closeProfileBtn").onclick = () => profileModal.classList.remove("open");
  profileModal.onclick = (e) => { if (e.target === profileModal) profileModal.classList.remove("open"); };
  document.getElementById("saveProfileBtn").onclick = () => {
    db.profile = {
      name: document.getElementById("profName").value.trim() || "Alumno Demo",
      email: document.getElementById("profEmail").value.trim() || "alumno@ejemplo.es",
      company: document.getElementById("profCompany").value.trim(),
      org: document.getElementById("profOrg").value.trim() || "Escuela Ejecutiva de Dirección, Ventas e Innovación",
      signer: document.getElementById("profSigner").value.trim() || "Dirección Académica"
    };
    saveDb(); profileModal.classList.remove("open"); toast("Perfil actualizado"); render();
  };

  // Study Time Breakdown Modal
  const studyTimeModal = document.getElementById("studyTimeModal");
  const togglePauseBtn = document.getElementById("togglePauseTimerBtn");
  function renderStudyTimeModal() {
    const prog = P();
    const pdb = PDB();
    togglePauseBtn.textContent = timerState.manualPaused ? "▶ Reanudar contador" : "⏸ Pausar contador";
    const todaySec = pdb.studyTime.byDay[todayKey()] || 0;
    const maxBlockSec = Math.max(60, ...prog.blocks.map((b) => pdb.studyTime.byBlock[b.id] || 0));
    const sessions = pdb.studyTime.sessions || [];

    document.getElementById("studyTimeModalBody").innerHTML = `
      <div style="margin-bottom:10px;"><span class="pill">${prog.icon} Programa activo: ${esc(prog.shortName)}</span> <span class="pill">🌐 Tiempo total en todos los programas: ${formatHMS(getGlobalStudySeconds())}</span></div>
      <div class="calc-grid" style="margin-bottom:16px;">
        <div class="card" style="margin:0; padding:12px 14px;"><small style="color:var(--text-soft);">En este programa</small><div style="font-size:21px; font-weight:800; color:var(--primary); font-variant-numeric:tabular-nums;">${formatHMS(pdb.studyTime.totalSeconds)}</div></div>
        <div class="card" style="margin:0; padding:12px 14px;"><small style="color:var(--text-soft);">Estudiado hoy</small><div style="font-size:21px; font-weight:800; color:var(--success); font-variant-numeric:tabular-nums;">${formatHMS(todaySec)}</div></div>
        <div class="card" style="margin:0; padding:12px 14px;"><small style="color:var(--text-soft);">Sesión actual</small><div style="font-size:21px; font-weight:800; font-variant-numeric:tabular-nums;">${formatHMS(timerState.currentSessionSeconds)}</div></div>
      </div>
      <h4 style="margin:0 0 10px;">Tiempo por bloque (${esc(prog.shortName)})</h4>
      <div style="margin-bottom:18px;">
        ${prog.blocks.map((b) => {
          const sec = pdb.studyTime.byBlock[b.id] || 0;
          const pct = Math.min(100, Math.round((sec / maxBlockSec) * 100));
          return `<div class="time-bar-row"><span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${b.icon} <strong>${esc(b.code)}</strong> · ${esc(b.name)}</span><div class="prog-track"><div class="prog-bar" style="width:${sec > 0 ? Math.max(4, pct) : 0}%"></div></div><strong style="text-align:right; font-variant-numeric:tabular-nums;">${formatShortDuration(sec)}</strong></div>`;
        }).join("")}
      </div>
      <h4 style="margin:0 0 8px;">Historial reciente de sesiones (${sessions.length})</h4>
      ${sessions.length === 0
        ? `<p style="font-size:12.8px; color:var(--text-soft); margin:0;">Entra en cualquier clase, taller o examen: el registro aparecerá aquí automáticamente.</p>`
        : `<div class="table-wrap"><table><thead><tr><th>Fecha / Hora</th><th>Actividad</th><th>Duración</th></tr></thead><tbody>${sessions.slice(0, 12).map((s) => `<tr><td>${new Date(s.date).toLocaleString("es-ES", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" })}</td><td>${esc(s.label)}</td><td><strong>${formatHMS(s.seconds)}</strong></td></tr>`).join("")}</tbody></table></div>`}
    `;
  }
  function openStudyTimeModal() { renderStudyTimeModal(); studyTimeModal.classList.add("open"); }
  elTopTimerPill.onclick = openStudyTimeModal;
  document.getElementById("sidebarTimeBtn").onclick = openStudyTimeModal;
  document.getElementById("closeStudyTimeBtn").onclick = () => studyTimeModal.classList.remove("open");
  studyTimeModal.onclick = (e) => { if (e.target === studyTimeModal) studyTimeModal.classList.remove("open"); };
  togglePauseBtn.onclick = () => {
    timerState.manualPaused = !timerState.manualPaused;
    if (timerState.manualPaused) flushStudySession();
    updateTimerUI(); renderStudyTimeModal();
    toast(timerState.manualPaused ? "Cronómetro pausado" : "Cronómetro reanudado");
  };

  // QA Modal (operates cleanly on active program!)
  const qaModal = document.getElementById("qaModal");
  document.getElementById("openQaBtn").onclick = () => {
    if (ui.view === "catalog") { toast("Entra primero en uno de los 2 programas para simular su progreso"); return; }
    qaModal.classList.add("open");
  };
  document.getElementById("closeQaBtn").onclick = () => qaModal.classList.remove("open");
  qaModal.onclick = (e) => { if (e.target === qaModal) qaModal.classList.remove("open"); };

  document.getElementById("qaSim1Btn").onclick = () => {
    const prog = P(); const pdb = PDB(); const b1 = prog.blocks[0];
    const set = new Set(pdb.completedTopics);
    b1.topics.forEach((t) => { set.add(t.id); pdb.studyTime.byTopic[t.id] = (pdb.studyTime.byTopic[t.id] || 0) + 1800; });
    pdb.studyTime.byBlock.b01 = (pdb.studyTime.byBlock.b01 || 0) + b1.topics.length * 1800;
    pdb.studyTime.totalSeconds = Object.values(pdb.studyTime.byBlock).reduce((a, c) => a + c, 0);
    pdb.completedTopics = [...set];
    pdb.exams.b01 = { bestScore: 80, lastScore: 80, passed: true, attempts: 1, date: new Date().toISOString() };
    pdb.workshops.b01 = { completed: true, data: { resumen: `Entregable completado del ${b1.code}` }, updatedAt: new Date().toISOString() };
    saveDb(); qaModal.classList.remove("open"); toast(`Bloque 1 de ${prog.shortName} simulado (80 %)`); navigate("dashboard");
  };

  document.getElementById("qaSim9Btn").onclick = () => {
    const prog = P(); const pdb = PDB();
    const lastBlock = prog.blocks[prog.blocks.length - 1];
    const set = new Set();
    prog.blocks.slice(0, -1).forEach((b, i) => {
      let bSec = 0;
      b.topics.forEach((t) => { set.add(t.id); pdb.studyTime.byTopic[t.id] = 2400; bSec += 2400; });
      pdb.studyTime.byBlock[b.id] = bSec;
      const sc = i % 2 === 0 ? 80 : 100;
      pdb.exams[b.id] = { bestScore: sc, lastScore: sc, passed: true, attempts: 1, date: new Date().toISOString() };
      pdb.workshops[b.id] = { completed: true, data: { resumen: `Entregable completado del ${b.code}` }, updatedAt: new Date().toISOString() };
    });
    pdb.studyTime.totalSeconds = Object.values(pdb.studyTime.byBlock).reduce((a, c) => a + c, 0);
    delete pdb.exams[lastBlock.id];
    pdb.certIssuedAt = null;
    pdb.completedTopics = [...set];
    ui.examDraft[`${ui.programId}:${lastBlock.id}`] = { answers: {}, submitted: false };
    saveDb(); qaModal.classList.remove("open");
    toast(`¡Aprueba el ${lastBlock.code} para emitir tu certificado!`);
    navigate("exam", { blockId: lastBlock.id });
  };

  document.getElementById("qaUnlockAllBtn").onclick = () => {
    const prog = P(); const pdb = PDB();
    pdb.completedTopics = getFlatTopics(ui.programId).map((t) => t.id);
    prog.blocks.forEach((b, i) => {
      let bSec = 0;
      b.topics.forEach((t) => { pdb.studyTime.byTopic[t.id] = 2700; bSec += 2700; });
      pdb.studyTime.byBlock[b.id] = bSec;
      const sc = i % 2 === 0 ? 80 : 100;
      pdb.exams[b.id] = { bestScore: sc, lastScore: sc, passed: true, attempts: 1, date: new Date().toISOString() };
      pdb.workshops[b.id] = { completed: true, data: { resumen: `Entregable completado del ${b.code}` }, updatedAt: new Date().toISOString() };
    });
    pdb.studyTime.totalSeconds = Object.values(pdb.studyTime.byBlock).reduce((a, c) => a + c, 0);
    pdb.certIssuedAt = new Date().toISOString();
    saveDb(); qaModal.classList.remove("open");
    toast(`¡100 % completado en ${prog.shortName}! Diploma emitido`);
    navigate("certificate");
  };

  document.getElementById("qaResetBtn").onclick = () => {
    db.programs[ui.programId] = makeEmptyProgramState();
    ui.examDraft = {};
    timerState.currentSessionSeconds = 0;
    saveDb(); qaModal.classList.remove("open");
    toast("Progreso del programa actual reiniciado a 0 %");
    navigate("dashboard");
  };

  // Topbar controls
  document.getElementById("goCatalogBrand").onclick = () => navigate("catalog");
  document.getElementById("topCatalogBtn").onclick = () => navigate("catalog");
  document.getElementById("toggleSidebarBtn").onclick = () => elSidebar.classList.toggle("collapsed");
  document.getElementById("roleStudentBtn").onclick = () => { ui.role = "student"; ui.studentReadingMode = false; render(); };
  document.getElementById("roleTrainerBtn").onclick = () => { stopAudio(true); ui.role = "trainer"; ui.topicTab = "all"; ui.deckFullscreen = false; render(); };
  document.getElementById("themeBtn").onclick = () => {
    const dark = document.documentElement.getAttribute("data-theme") === "dark";
    if (dark) { document.documentElement.removeAttribute("data-theme"); localStorage.setItem(THEME_KEY, "light"); }
    else { document.documentElement.setAttribute("data-theme", "dark"); localStorage.setItem(THEME_KEY, "dark"); }
  };

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (ui.view !== "topic" || ui.role !== "student" || ui.studentReadingMode) return;
    const tag = (e.target && e.target.tagName) || "";
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
    const t = getFlatTopics(ui.programId).find((x) => x.id === ui.topicId);
    if (!t) return;
    const totalSlides = buildSlides(t).length;
    if (e.key === "ArrowRight" && ui.slideIndex < totalSlides - 1) {
      stopAudio(true); ui.slideIndex++; ui.angleTab = "defs"; render();
    } else if (e.key === "ArrowLeft" && ui.slideIndex > 0) {
      stopAudio(true); ui.slideIndex--; ui.angleTab = "defs"; render();
    } else if (e.key === "Escape" && ui.deckFullscreen) {
      ui.deckFullscreen = false; render();
    }
  });

  render();
  updateTimerUI();
})();
