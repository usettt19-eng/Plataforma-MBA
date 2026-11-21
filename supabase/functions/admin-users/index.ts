import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS"
};

function jsonRes(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" }
  });
}

function translateAdminErr(msg: string) {
  const low = msg.toLowerCase();
  if (low.includes("already") && low.includes("registered")) {
    return "Ya existe un usuario registrado con ese correo electrónico.";
  }
  if (low.includes("password") && low.includes("6")) {
    return "La contraseña debe tener al menos 6 caracteres.";
  }
  if (low.includes("invalid email")) {
    return "El formato del correo electrónico no es válido.";
  }
  return msg;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return jsonRes({ ok: false, error: "Método no permitido. Usa POST." }, 405);
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
  if (!supabaseUrl || !serviceRoleKey) {
    return jsonRes({ ok: false, error: "Faltan variables internas SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY." }, 500);
  }

  const authHeader = req.headers.get("authorization") ?? "";
  const token = authHeader.replace(/^Bearer\s+/i, "").trim();
  if (!token) {
    return jsonRes({ ok: false, error: "Falta token de sesión en Authorization." }, 401);
  }

  const adminClient = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false }
  });

  const { data: userRes, error: authErr } = await adminClient.auth.getUser(token);
  const caller = userRes?.user;
  if (authErr || !caller) {
    return jsonRes({ ok: false, error: "Sesión inválida o caducada. Vuelve a iniciar sesión." }, 401);
  }

  const { data: callerProfile, error: profErr } = await adminClient
    .from("profiles")
    .select("id, role, email, full_name")
    .eq("id", caller.id)
    .maybeSingle();

  if (profErr || !callerProfile || callerProfile.role !== "admin") {
    return jsonRes({ ok: false, error: "Acceso restringido únicamente a administradores." }, 403);
  }

  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {
    return jsonRes({ ok: false, error: "Cuerpo JSON inválido." }, 400);
  }

  const action = String(body.action ?? "").trim();

  try {
    if (action === "list") {
      const [usersRes, profilesRes, topicsRes, examsRes, studyRes, certsRes] = await Promise.all([
        adminClient.auth.admin.listUsers({ page: 1, perPage: 200 }),
        adminClient.from("profiles").select("*"),
        adminClient.from("topic_progress").select("user_id, program_id, completed"),
        adminClient.from("exam_attempts").select("user_id, program_id, passed, best_score"),
        adminClient.from("program_study_time").select("user_id, program_id, total_seconds"),
        adminClient.from("certificates").select("cert_id, user_id, program_id, avg_score, issued_at, status")
      ]);

      if (usersRes.error) throw usersRes.error;

      const profMap = new Map<string, Record<string, unknown>>();
      for (const p of (profilesRes.data ?? [])) profMap.set(String(p.id), p);

      const topicsDoneMap = new Map<string, number>();
      for (const t of (topicsRes.data ?? [])) {
        if (t.completed) {
          const uid = String(t.user_id);
          topicsDoneMap.set(uid, (topicsDoneMap.get(uid) ?? 0) + 1);
        }
      }

      const examsPassedMap = new Map<string, number>();
      for (const ex of (examsRes.data ?? [])) {
        if (ex.passed) {
          const uid = String(ex.user_id);
          examsPassedMap.set(uid, (examsPassedMap.get(uid) ?? 0) + 1);
        }
      }

      const studySecMap = new Map<string, number>();
      for (const st of (studyRes.data ?? [])) {
        const uid = String(st.user_id);
        studySecMap.set(uid, (studySecMap.get(uid) ?? 0) + Number(st.total_seconds ?? 0));
      }

      const certsMap = new Map<string, Array<Record<string, unknown>>>();
      let issuedCerts = 0;
      let revokedCerts = 0;
      for (const c of (certsRes.data ?? [])) {
        const uid = String(c.user_id);
        if (!certsMap.has(uid)) certsMap.set(uid, []);
        certsMap.get(uid)!.push(c);
        if (c.status === "revoked") revokedCerts += 1;
        else issuedCerts += 1;
      }

      const users = (usersRes.data?.users ?? []).map((u) => {
        const p = profMap.get(u.id) ?? {};
        const metaName = String((u.user_metadata as Record<string, unknown> | undefined)?.full_name ?? "").trim();
        const bannedUntil = (u as unknown as { banned_until?: string | null }).banned_until;
        const banned = Boolean(bannedUntil && new Date(bannedUntil).getTime() > Date.now());
        return {
          id: u.id,
          email: String(u.email ?? p.email ?? ""),
          full_name: String(p.full_name ?? metaName ?? ""),
          company: String(p.company ?? ""),
          role: String(p.role ?? "student"),
          created_at: u.created_at,
          last_sign_in_at: u.last_sign_in_at ?? null,
          banned,
          completedTopics: topicsDoneMap.get(u.id) ?? 0,
          examsPassed: examsPassedMap.get(u.id) ?? 0,
          totalStudySeconds: studySecMap.get(u.id) ?? 0,
          certificates: certsMap.get(u.id) ?? []
        };
      });

      users.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

      const totalStudyAllSec = users.reduce((acc, u) => acc + u.totalStudySeconds, 0);
      return jsonRes({
        ok: true,
        users,
        stats: {
          totalUsers: users.length,
          admins: users.filter((u) => u.role === "admin").length,
          trainers: users.filter((u) => u.role === "trainer").length,
          students: users.filter((u) => u.role === "student").length,
          issuedCerts,
          revokedCerts,
          totalHours: Math.round((totalStudyAllSec / 3600) * 10) / 10
        }
      });
    }

    if (action === "create") {
      const email = String(body.email ?? "").trim().toLowerCase();
      const password = String(body.password ?? "");
      const fullName = String(body.full_name ?? "").trim();
      const company = String(body.company ?? "").trim();
      const role = String(body.role ?? "student").trim();

      if (!email || !email.includes("@")) {
        return jsonRes({ ok: false, error: "Introduce un correo electrónico válido." }, 400);
      }
      if (password.length < 6) {
        return jsonRes({ ok: false, error: "La contraseña inicial debe tener al menos 6 caracteres." }, 400);
      }
      if (!fullName) {
        return jsonRes({ ok: false, error: "Escribe el nombre completo del usuario (aparecerá en su diploma)." }, 400);
      }
      if (!["student", "trainer", "admin"].includes(role)) {
        return jsonRes({ ok: false, error: "Rol no válido (usa student, trainer o admin)." }, 400);
      }

      const { data: created, error: createErr } = await adminClient.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
        user_metadata: { full_name: fullName }
      });

      if (createErr || !created?.user) {
        return jsonRes({ ok: false, error: translateAdminErr(createErr?.message ?? "No se pudo crear el usuario.") }, 400);
      }

      const newUserId = created.user.id;
      const { error: upsertErr } = await adminClient.from("profiles").upsert({
        id: newUserId,
        full_name: fullName,
        email,
        company,
        role
      }, { onConflict: "id" });

      if (upsertErr) {
        return jsonRes({ ok: false, error: `Usuario Auth creado, pero falló al guardar perfil: ${upsertErr.message}` }, 500);
      }

      return jsonRes({
        ok: true,
        user: { id: newUserId, email, full_name: fullName, company, role }
      });
    }

    if (action === "update") {
      const userId = String(body.user_id ?? "").trim();
      const fullName = String(body.full_name ?? "").trim();
      const company = String(body.company ?? "").trim();
      const role = String(body.role ?? "student").trim();
      const newPassword = String(body.new_password ?? "");

      if (!userId) return jsonRes({ ok: false, error: "Falta user_id." }, 400);
      if (!fullName) return jsonRes({ ok: false, error: "El nombre completo no puede estar vacío." }, 400);
      if (!["student", "trainer", "admin"].includes(role)) {
        return jsonRes({ ok: false, error: "Rol no válido." }, 400);
      }
      if (userId === caller.id && role !== "admin") {
        return jsonRes({ ok: false, error: "No puedes quitarte a ti mismo el rol de administrador." }, 400);
      }
      if (newPassword && newPassword.length < 6) {
        return jsonRes({ ok: false, error: "La nueva contraseña debe tener al menos 6 caracteres." }, 400);
      }

      const { error: updProfErr } = await adminClient
        .from("profiles")
        .update({ full_name: fullName, company, role })
        .eq("id", userId);

      if (updProfErr) {
        return jsonRes({ ok: false, error: updProfErr.message }, 400);
      }

      const authPatch: Record<string, unknown> = { user_metadata: { full_name: fullName } };
      if (newPassword) authPatch.password = newPassword;

      const { error: updAuthErr } = await adminClient.auth.admin.updateUserById(userId, authPatch);
      if (updAuthErr) {
        return jsonRes({ ok: false, error: translateAdminErr(updAuthErr.message) }, 400);
      }

      return jsonRes({ ok: true });
    }

    if (action === "toggle_ban") {
      const userId = String(body.user_id ?? "").trim();
      const ban = Boolean(body.ban);
      if (!userId) return jsonRes({ ok: false, error: "Falta user_id." }, 400);
      if (userId === caller.id && ban) {
        return jsonRes({ ok: false, error: "No puedes suspender tu propia cuenta." }, 400);
      }

      const { error: banErr } = await adminClient.auth.admin.updateUserById(userId, {
        ban_duration: ban ? "876000h" : "none"
      });
      if (banErr) return jsonRes({ ok: false, error: banErr.message }, 400);
      return jsonRes({ ok: true, banned: ban });
    }

    if (action === "delete") {
      const userId = String(body.user_id ?? "").trim();
      if (!userId) return jsonRes({ ok: false, error: "Falta user_id." }, 400);
      if (userId === caller.id) {
        return jsonRes({ ok: false, error: "No puedes eliminar tu propia cuenta mientras estás conectado." }, 400);
      }
      const { error: delErr } = await adminClient.auth.admin.deleteUser(userId);
      if (delErr) return jsonRes({ ok: false, error: delErr.message }, 400);
      return jsonRes({ ok: true });
    }

    if (action === "set_cert_status") {
      const certId = String(body.cert_id ?? "").trim().toUpperCase();
      const status = String(body.status ?? "").trim();
      if (!certId || !["valid", "revoked"].includes(status)) {
        return jsonRes({ ok: false, error: "Parámetros inválidos (cert_id y status valid|revoked)." }, 400);
      }
      const { error: certErr } = await adminClient
        .from("certificates")
        .update({ status })
        .eq("cert_id", certId);
      if (certErr) return jsonRes({ ok: false, error: certErr.message }, 400);
      return jsonRes({ ok: true, cert_id: certId, status });
    }

    return jsonRes({ ok: false, error: `Acción desconocida: ${action}` }, 400);
  } catch (err) {
    return jsonRes({ ok: false, error: String((err as Error)?.message ?? err ?? "Error interno") }, 500);
  }
});
