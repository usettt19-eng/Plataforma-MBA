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

  currency: "USD",
  // true = muestra precios en tarjetas | false = muestra "Consultar inversión"
  showPrices: true,
  plans: {
    individual: {
      count: 1,
      badge: "Acceso Individual",
      name: "Paquete 1 Programa",
      subtitle: "Elige 1 programa entre DIND, Global MBA, PMP, Executive MBA o IA Eléctrica BIM.",
      price: "$490",
      period: "USD · pago único · acceso 12 meses",
      ctaLabel: "Elegir 1 programa →",
      ctaUrl: "" // Opcional: enlace directo de Stripe / Hotmart / PayPal
    },
    pack3: {
      count: 3,
      badge: "Ahorra $720 · $250 / prog.",
      name: "Paquete 3 Programas",
      subtitle: "Combina a tu medida 3 programas certificados del catálogo con acceso 24/7.",
      price: "$750",
      period: "USD · pago único · ahorras 49 %",
      ctaLabel: "Elegir 3 programas →",
      ctaUrl: ""
    },
    pack4: {
      count: 4,
      badge: "Ahorra $1,110 · $212 / prog.",
      name: "Paquete 4 Programas",
      subtitle: "Ruta ejecutiva y técnica avanzada eligiendo 4 programas por solo $100 más.",
      price: "$850",
      period: "USD · pago único · ahorras 57 %",
      ctaLabel: "Elegir 4 programas →",
      ctaUrl: ""
    },
    allAccess: {
      count: 5,
      badge: "★ Mejor Valor · $190 / prog.",
      name: "Paquete 5 Programas",
      subtitle: "Pase All-Access completo: 44 bloques, 230 temas, 920 h y 5 diplomas QR.",
      price: "$950",
      period: "USD · pago único · ahorras $1,500",
      ctaLabel: "Solicitar los 5 programas →",
      ctaUrl: ""
    },
    corporate: {
      count: 0,
      badge: "Para Empresas y Equipos",
      name: "Plan Corporativo B2B",
      subtitle: "Desde 5 licencias nominales para equipos directivos, comerciales, PMO o ingeniería BIM. Facturación oficial en USD y seguimiento de horas y diplomas.",
      price: "A medida",
      period: "USD · facturación empresa · alta gestionada",
      ctaLabel: "Solicitar propuesta empresa →",
      ctaUrl: ""
    }
  }
};
