// =============================================================================
// Configuración comercial y de conexión de la Landing Page
// Edita aquí precios, WhatsApp o enlaces de pago directo sin tocar el diseño.
// =============================================================================
window.LANDING_CONFIG = {
  brandName: "USE Services Business School",
  brandShort: "USE Services Academy",
  siteUrl: "https://academia.useservices.company",
  campusUrl: "https://campus.useservices.company",
  supabaseUrl: "https://jeabjhqyjdxztjebmxjw.supabase.co",
  supabasePublishableKey: "sb_publishable_q5hDt-HLvbUgo01PkdwgOg_DGI5i6lg",

  // Pon tu número con prefijo internacional sin "+" ni espacios (ej. "34600112233")
  // Al rellenarlo se activa automáticamente el botón flotante de WhatsApp y envío directo.
  whatsappNumber: "50760759851",
  contactEmail: "info@useservices.company",

  // true = muestra precios en tarjetas | false = muestra "Consultar inversión"
  showPrices: true,
  plans: {
    individual: {
      badge: "Acceso Específico",
      name: "1 Programa Certificado",
      subtitle: "Elige entre DIND, Global MBA Comercial, Preparación PMP o Executive MBA.",
      price: "490 €",
      period: "pago único · acceso 12 meses",
      ctaLabel: "Solicitar acceso a 1 programa",
      ctaUrl: "" // Opcional: enlace directo de Stripe / Hotmart / PayPal
    },
    allAccess: {
      badge: "Más Elegido · Mejor Valor",
      name: "Pase Ejecutivo All-Access",
      subtitle: "Acceso completo a los 4 programas (38 bloques, 180 temas, 720 h y 4 diplomas QR).",
      price: "890 €",
      period: "pago único · acceso completo",
      ctaLabel: "Solicitar Pase All-Access",
      ctaUrl: ""
    },
    corporate: {
      badge: "Para Empresas y Equipos",
      name: "Plan Corporativo B2B",
      subtitle: "Desde 5 licencias para formar mandos intermedios, ventas, PMO y dirección.",
      price: "A medida",
      period: "facturación empresa · alta gestionada",
      ctaLabel: "Solicitar propuesta empresa",
      ctaUrl: ""
    }
  }
};
