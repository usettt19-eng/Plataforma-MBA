// =============================================================================
// Configuración pública de Supabase para Campus Multi-Programa (Plataforma-MBA)
// =============================================================================
// IMPORTANTE:
//   - Usa EXCLUSIVAMENTE tu "Project URL" y tu clave pública ("Publishable key"
//     sb_publishable_... o "anon public" JWT) desde:
//     Supabase Dashboard -> Project Settings -> API
//   - NUNCA pegues una clave "service_role" ni "secret" en archivos del navegador.
//   - Con Row Level Security (RLS) activado en supabase/schema.sql, cada alumno
//     solo puede leer y modificar sus propios registros.
// =============================================================================
window.CAMPUS_SUPABASE_CONFIG = {
  url: "https://jtivokxatefewtamlsxx.supabase.co",
  publishableKey: "", // Pega aquí tu Publishable key (sb_publishable_...) o anon key
  publicBaseUrl: ""   // Opcional: ej. "https://usettt19-eng.github.io/Plataforma-MBA/"
};
