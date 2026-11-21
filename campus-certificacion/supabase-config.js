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
  url: "https://jeabjhqyjdxztjebmxjw.supabase.co",
  publishableKey: "sb_publishable_q5hDt-HLvbUgo01PkdwgOg_DGI5i6lg", // Clave pública (sb_publishable_... o anon)
  publicBaseUrl: "https://campus.useservices.company/", // URL pública usada en los códigos QR
  adminFunctionName: "super-worker", // Nombre/slug real de la Edge Function en Supabase
  closedAccess: true // true = solo entran usuarios creados por el administrador (oculta registro público)
};
