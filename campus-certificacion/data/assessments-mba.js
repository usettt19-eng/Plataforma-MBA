window.ASSESSMENTS_GMBA = {
  passingScore: 70,
  blocks: {
    b01: {
      examTitle: "Examen de Certificación — Bloque 1: Marketing",
      workshop: {
        title: "Taller Práctico 1: Ficha de Buyer Persona y Mapa de Fricciones del Customer Journey",
        subtitle: "Define el cliente ideal (ICP/Buyer Persona) y detecta los 3 puntos de fuga principales de su recorrido de compra.",
        fields: [
          { id: "marca", label: "Marca / Empresa y propuesta de valor diferencial en 1 frase", type: "text", placeholder: "Ej.: Soluciones de climatización eficiente para hoteles boutique..." },
          { id: "icp", label: "Buyer Persona / Cliente Ideal (rol, dolores principales, objeciones y criterios de decisión)", type: "textarea", placeholder: "Rol: Director de Operaciones | Dolor: costes energéticos altos | Objeción: tiempo de instalación..." },
          { id: "journey", label: "3 fricciones críticas en el Customer Journey (Consideración, Compra y Posventa)", type: "textarea", placeholder: "1. Consideración: falta de casos con ROI... 2. Compra: proceso lento... 3. Posventa: ..." },
          { id: "mix", label: "Mix de marketing priorizado (Inbound, Contenidos, Relacional, Performance) y KPI principal", type: "textarea", placeholder: "Inbound B2B + casos de éxito + email relacional -> KPI: MQLs cualificados/mes..." }
        ]
      },
      questions: [
        {
          q: "¿Qué caracteriza al 'consumidor empoderado' (*empowered consumer*) actual frente al modelo comercial tradicional?",
          options: [
            "Toma decisiones únicamente a partir de la información que le proporciona el comercial en la primera llamada.",
            "Investiga activamente en múltiples canales, compara reseñas y opiniones de terceros antes de contactar con la marca y exige coherencia omnicanal.",
            "Solo compra en tiendas físicas locales sin consultar internet.",
            "Valora exclusivamente el precio más bajo ignorando la experiencia posventa."
          ],
          correct: 1,
          explanation: "El consumidor actual recorre gran parte del proceso de evaluación de forma autónoma y exige transparencia, prueba social y experiencia consistente."
        },
        {
          q: "Una empresa invierte mucho en rediseñar su logotipo y eslogan prometiendo 'atención inmediata', pero tarda 5 días en contestar correos de soporte. ¿Qué principio de gestión de marca está rompiendo?",
          options: [
            "La coherencia entre la promesa de marca (identidad) y la experiencia real entregada (reputación).",
            "La arquitectura de submarcas internacionales.",
            "La segmentación geográfica de puntos de venta.",
            "La inversión en publicidad exterior."
          ],
          correct: 0,
          explanation: "La marca no es solo identidad visual: es la promesa cumplida de forma consistente en cada punto de contacto; la brecha entre mensaje y realidad destruye reputación."
        },
        {
          q: "¿Cuál es la diferencia práctica entre un segmento demográfico genérico ('mujeres de 30 a 50 años') y un *Buyer Persona* útil para dirección comercial?",
          options: [
            "El Buyer Persona incluye únicamente el código postal y el nivel de ingresos.",
            "El Buyer Persona incorpora dolores concretos, motivaciones, objeciones reales, criterios de decisión y canales de información basados en datos y entrevistas reales.",
            "El segmento demográfico sustituye por completo al perfil de cliente ideal en B2B.",
            "No existe ninguna diferencia operativa en campañas comerciales."
          ],
          correct: 1,
          explanation: "Conocer los 'pains', objeciones y disparadores de compra permite crear mensajes, argumentarios comerciales y ofertas mucho más efectivas."
        },
        {
          q: "Al mapear el *Customer Journey*, ¿por qué no debe terminar el análisis en el momento del pago?",
          options: [
            "Porque la legislación prohíbe medir solo la fase de compra.",
            "Porque las fases de uso/onboarding, fidelización y recomendación determinan la retención, el valor de vida del cliente (LTV) y la captación orgánica más rentable.",
            "Porque el equipo de marketing no puede acceder a datos de clientes existentes.",
            "Porque la fase de concienciación ocurre siempre después de la compra."
          ],
          correct: 1,
          explanation: "Retener y convertir clientes satisfechos en prescriptores reduce el CAC y dispara la rentabilidad a medio plazo."
        },
        {
          q: "¿Qué combinación distingue mejor al *Inbound Marketing* frente al *Outbound Marketing* tradicional?",
          options: [
            "Inbound atrae clientes mediante contenido útil, SEO y valor educativo según su momento de compra; Outbound impacta proactivamente a audiencias mediante anuncios, llamadas o campañas salientes.",
            "Inbound solo funciona en televisión y Outbound solo en redes sociales.",
            "Outbound es siempre gratuito e Inbound siempre es de pago por clic.",
            "Son metodologías incompatibles que nunca deben combinarse en una pyme."
          ],
          correct: 0,
          explanation: "Combinar Inbound (atracción sostenible y cualificación) con Outbound bien segmentado (aceleración comercial) equilibra corto y largo plazo."
        }
      ]
    },
    b02: {
      examTitle: "Examen de Certificación — Bloque 2: E-commerce",
      workshop: {
        title: "Taller Práctico 2: Simulador de Embudo E-commerce y Optimización CRO",
        subtitle: "Modela las tasas de conversión de tu tienda online y calcula cuánta facturación extra genera mejorar la ficha o el checkout.",
        calculator: "funnel_cro"
      },
      questions: [
        {
          q: "En una tienda online, el 72 % de los usuarios abandona justo en el paso del checkout antes de pagar. ¿Cuál suele ser una de las causas de fricción más críticas?",
          options: [
            "Mostrar demasiada claridad en el precio final desde la ficha de producto.",
            "Costes de envío sorpresa al final, obligación de crear cuenta previa, formularios largos o falta de métodos de pago ágiles (wallets/Bizum/tarjeta móvil).",
            "Tener una velocidad de carga inferior a 1,5 segundos en móvil.",
            "Ofrecer política de devoluciones clara y visible."
          ],
          correct: 1,
          explanation: "La transparencia temprana de costes, el checkout como invitado y los pagos móviles en un toque reducen drásticamente el abandono de carrito."
        },
        {
          q: "¿Qué métrica de analítica web refleja mejor si una tienda online está logrando transformar el tráfico recibido en pedidos reales?",
          options: [
            "Número total de impresiones en redes sociales.",
            "Tasa de conversión (pedidos / sesiones o usuarios) analizada junto con el valor medio del pedido (AOV) y la rentabilidad por canal.",
            "Número de páginas publicadas en el blog corporativo.",
            "Total de seguidores acumulados en el perfil de empresa."
          ],
          correct: 1,
          explanation: "El tráfico sin conversión rentable no genera negocio; analizar conversión por fuente, dispositivo y paso del embudo revela dónde optimizar."
        },
        {
          q: "¿Por qué el diseño *mobile-first* y los pagos por móvil (*wallets* / autenticación biométrica) son determinantes en el e-commerce actual?",
          options: [
            "Porque la mayoría del tráfico de descubrimiento y una gran parte de la compra ocurren en smartphone, donde cada campo manual extra desploma la conversión.",
            "Porque los navegadores de escritorio ya no admiten tarjetas bancarias.",
            "Porque eliminan automáticamente todas las obligaciones de seguridad SCA/PSD2.",
            "Porque solo los menores de 20 años compran desde el teléfono."
          ],
          correct: 0,
          explanation: "Reducir fricción táctil, acelerar la carga móvil y habilitar pagos rápidos con biometría eleva significativamente la conversión móvil."
        },
        {
          q: "¿Qué elemento es clave en una *Landing Page* de alta conversión orientada a captar leads o ventas desde una campaña digital?",
          options: [
            "Incluir 15 enlaces de navegación distintos para que el visitante explore toda la web corporativa.",
            "Coherencia exacta entre el mensaje del anuncio y el titular, propuesta de valor clara por encima del pliegue, prueba social verificable, formulario mínimo y una única llamada a la acción (CTA) clara.",
            "Esconder el formulario al final de cinco páginas de historia de la empresa.",
            "Evitar cualquier test A/B para no cambiar el diseño inicial."
          ],
          correct: 1,
          explanation: "El enfoque en un único objetivo sin fugas de atención, respaldado por prueba social y test A/B continuos, maximiza el retorno de cada clic."
        },
        {
          q: "En el proceso 'De interesado a comprador', ¿qué función cumple el *lead nurturing*?",
          options: [
            "Llamar diez veces al día al contacto hasta que compre o bloquee el número.",
            "Acompañar y educar progresivamente a contactos aún no listos para comprar con contenido relevante y personalizado hasta llevarlos a una conversación comercial cualificada.",
            "Borrar de la base de datos a todo interesado que no compre en las primeras 24 horas.",
            "Enviar exactamente el mismo catálogo genérico a todos los suscriptores sin segmentar."
          ],
          correct: 1,
          explanation: "La mayoría de los leads no compran en el primer contacto; nutrirlos según su fase e interés multiplica la tasa de cierre."
        }
      ]
    },
    b03: {
      examTitle: "Examen de Certificación — Bloque 3: Gestión del Talento",
      workshop: {
        title: "Taller Práctico 3: Scorecard de Selección Comercial y Plan de Rendimiento OKR",
        subtitle: "Diseña los criterios objetivos de contratación para un perfil comercial y define sus OKRs e indicadores de People Analytics.",
        fields: [
          { id: "puesto", label: "Puesto comercial / equipo a incorporar y misión en los primeros 90 días", type: "text", placeholder: "Ej.: Account Executive B2B — generar pipeline de 150k € en 90 días" },
          { id: "competencias", label: "4 competencias observables y 1 prueba práctica (role-play / caso) en selección", type: "textarea", placeholder: "Escucha consultiva, gestión de objeciones, disciplina CRM... Prueba: simulación de discovery call..." },
          { id: "okrs", label: "1 Objetivo (O) y 3 Resultados Clave (KR) medibles para el trimestre", type: "textarea", placeholder: "O: Consolidar cartera B2B | KR1: 25 demos/mes | KR2: 22 % cierre | KR3: NPS > 60..." },
          { id: "metricas", label: "3 métricas clave de talento a vigilar (rotación, ramp-up, productividad, clima)", type: "textarea", placeholder: "Tiempo de ramp-up (<60 días), rotación voluntaria (<10 %), cumplimiento de cuota..." }
        ]
      },
      questions: [
        {
          q: "¿Qué mejora drásticamente la fiabilidad de un proceso de selección de perfiles comerciales frente a entrevistas informales no estructuradas?",
          options: [
            "Decidir exclusivamente por intuición en los primeros 5 minutos de conversación.",
            "Utilizar una ficha de competencias definida (*scorecard*), entrevista estructurada conductual (método STAR) y una prueba práctica realista (como un *role-play* comercial).",
            "Contratar siempre al candidato con el currículum más largo sin verificar referencias.",
            "Evitar involucrar al responsable directo del equipo en el proceso."
          ],
          correct: 1,
          explanation: "Las entrevistas estructuradas combinadas con muestras de trabajo reducen sesgos y predicen mucho mejor el desempeño real."
        },
        {
          q: "¿Qué distingue un objetivo bien formulado bajo la metodología OKR frente a una lista tradicional de tareas?",
          options: [
            "Los OKR solo se usan para calcular sanciones disciplinarias.",
            "Un OKR combina un Objetivo cualitativo inspirador con 2-4 Resultados Clave cuantificables orientados a impacto (*outcomes*), no a simples listas de actividades (*outputs*).",
            "Los OKR nunca se comparten entre departamentos.",
            "Un OKR debe tener al menos 25 resultados clave por persona."
          ],
          correct: 1,
          explanation: "Los OKR alinean dirección y equipos en torno a resultados medibles que mueven la aguja del negocio."
        },
        {
          q: "Un director comercial detecta que los nuevos vendedores tardan 7 meses en alcanzar su cuota y el 35 % abandona antes del primer año. ¿Qué indicador y acción debe priorizar?",
          options: [
            "Bajar la exigencia de selección para contratar más rápido sin formar.",
            "Analizar *tiempo de ramp-up*, rotación temprana (*early turnover*) y entrevistas de salida para reforzar el *onboarding*, el *playbook* comercial y el acompañamiento de mandos.",
            "Aumentar únicamente la publicidad en redes sociales.",
            "Eliminar las reuniones 1:1 de seguimiento durante el primer semestre."
          ],
          correct: 1,
          explanation: "La rotación temprana y un ramp-up lento suelen revelar fallos en ajuste del perfil, onboarding estructurado o liderazgo cercano."
        },
        {
          q: "Según el modelo de evaluación de la formación de Kirkpatrick, ¿qué diferencia el nivel 1 (Reacción) del nivel 3 (Comportamiento) y nivel 4 (Resultados)?",
          options: [
            "El nivel 1 mide si el curso gustó; el nivel 3 verifica si aplican lo aprendido en el puesto de trabajo y el nivel 4 mide el impacto real en métricas de negocio (ventas, margen, retención).",
            "Son cuatro encuestas idénticas enviadas el mismo día.",
            "El nivel 4 mide únicamente las horas de asistencia.",
            "El nivel 1 es el único indicador válido de retorno de la formación."
          ],
          correct: 0,
          explanation: "Una formación con notas de satisfacción altas puede tener impacto cero si no cambia hábitos en el puesto ni mueve KPIs comerciales."
        },
        {
          q: "¿Cuándo resulta más eficaz aplicar un Plan de Mejora del Desempeño (PIP) ante bajo rendimiento continuado?",
          options: [
            "Sin haber dado nunca feedback previo, comunicándolo por sorpresa al final del año.",
            "Tras diagnosticar si la brecha es de capacidad, recursos o motivación, fijando expectativas claras, apoyo/formación concreta, hitos medibles y revisiones quincenales transparentes.",
            "Evitando documentar acuerdos para mantener un ambiente informal.",
            "Comparando públicamente al empleado frente al resto del equipo comercial."
          ],
          correct: 1,
          explanation: "La gestión profesional del bajo rendimiento es clara, respetuosa, basada en hechos y ofrece herramientas reales de mejora antes de decisiones drásticas."
        }
      ]
    },
    b04: {
      examTitle: "Examen de Certificación — Bloque 4: Dirección de Operaciones",
      workshop: {
        title: "Taller Práctico 4: Mapa de Cuellos de Botella y Alineación Comercial–Operaciones (S&OP)",
        subtitle: "Detecta el principal cuello de botella entre promesa comercial y capacidad operativa, y propone un plan de mejora Lean.",
        fields: [
          { id: "promesa", label: "Promesa comercial actual vs. capacidad real de operaciones", type: "text", placeholder: "Ej.: Ventas promete entrega en 48 h pero producción necesita 5 días en picos" },
          { id: "demanda", label: "Cómo mejorar la previsión de demanda y estacionalidad (reunión S&OP)", type: "textarea", placeholder: "Compartir pipeline ponderado mensualmente + histórico estacional + stock de seguridad..." },
          { id: "cuello", label: "Cuello de botella principal identificado y 2 desperdicios Lean a eliminar", type: "textarea", placeholder: "Cuello: validación manual de pedidos especiales | Desperdicios: esperas y reprocesos..." },
          { id: "kpis_ops", label: "3 KPIs operativos críticos (OTIF, Lead Time, OEE / Utilización, Calidad)", type: "textarea", placeholder: "OTIF > 95 %, Lead Time < 72 h, tasa de incidencias < 1,5 %..." }
        ]
      },
      questions: [
        {
          q: "¿Qué ocurre cuando el departamento comercial lanza promociones agresivas sin coordinarse con Dirección de Operaciones (ausencia de proceso S&OP)?",
          options: [
            "La capacidad productiva y de stock se ajusta mágicamente sin costes extra.",
            "Se producen roturas de stock, retrasos de entrega, horas extra urgentes que destruyen margen y deterioro de la satisfacción del cliente.",
            "Mejora automáticamente la rotación de inventarios sin riesgo.",
            "Desaparece la estacionalidad de la demanda."
          ],
          correct: 1,
          explanation: "El proceso S&OP (Sales & Operations Planning) alinea previsiones de ventas, campañas, capacidad productiva e inventarios."
        },
        {
          q: "Según la Teoría de las Restricciones (cuellos de botella), ¿dónde tiene mayor impacto real invertir para aumentar la salida total de un proceso?",
          options: [
            "Acelerando la etapa más rápida del proceso aunque el cuello de botella siga saturado.",
            "Identificando, explotando y elevando la capacidad del recurso cuello de botella que limita el ritmo global del sistema.",
            "Acumulando grandes pilas de producto semiterminado antes de cada puesto.",
            "Eliminando los controles de calidad al final de la línea."
          ],
          correct: 1,
          explanation: "Mejorar etapas no restrictivas no aumenta la salida final; solo crea inventario intermedio y costes ocultos."
        },
        {
          q: "En el desarrollo de nuevos productos, ¿por qué conviene validar prototipos con clientes antes de industrializar o comprar grandes lotes?",
          options: [
            "Porque reduce drásticamente el riesgo de lanzar productos sin encaje de mercado y permite corregir fallos de diseño cuando el coste del cambio es aún bajo.",
            "Porque sustituye la necesidad de calcular costes unitarios.",
            "Porque retrasa deliberadamente la llegada al mercado durante años.",
            "Porque evita tener que definir una estrategia comercial."
          ],
          correct: 0,
          explanation: "Iterar prototipos con feedback real acorta el aprendizaje y protege el capital antes de compromisos fijos elevados."
        },
        {
          q: "¿Cuál de los siguientes indicadores mide de forma integrada la fiabilidad operativa percibida por el cliente (entregar completo y a tiempo)?",
          options: [
            "OTIF (On-Time In-Full).",
            "CTR (Click-Through Rate).",
            "CPC (Coste Por Clic).",
            "Coste por contratación."
          ],
          correct: 0,
          explanation: "OTIF mide el porcentaje de pedidos entregados en la fecha comprometida y con las cantidades/calidad exactas solicitadas."
        },
        {
          q: "En la dirección de operaciones, ¿por qué el factor humano es crítico incluso en entornos altamente automatizados?",
          options: [
            "Solo para firmar los albaranes en papel.",
            "Porque las personas operan, mantienen, detectan anomalías, lideran la mejora continua (Kaizen) y sostienen la seguridad y la adopción del cambio.",
            "Porque la automatización impide medir la productividad.",
            "No tiene relevancia una vez instalado el software ERP."
          ],
          correct: 1,
          explanation: "La tecnología sin equipos formados, seguros e implicados en mejora continua no sostiene la excelencia operativa."
        }
      ]
    },
    b05: {
      examTitle: "Examen de Certificación — Bloque 5: Posicionamiento Web",
      workshop: {
        title: "Taller Práctico 5: Calculadora de Campaña SEM / Growth (ROAS, CPA y Retorno Neto)",
        subtitle: "Simula inversión publicitaria, CTR, conversión y margen para comprobar si tu captación de pago es rentable.",
        calculator: "sem_roas"
      },
      questions: [
        {
          q: "¿Cuál es la diferencia estratégica esencial entre SEO y SEM en un plan de captación digital?",
          options: [
            "SEO construye visibilidad orgánica acumulativa y sostenible a medio-largo plazo; SEM genera tráfico inmediato de pago por clic ideal para validar oferta, capturar demanda urgente y escalar campañas rentables.",
            "SEM es gratuito y SEO requiere pagar por cada clic recibido.",
            "SEO solo sirve para redes sociales y SEM solo para correo electrónico.",
            "Ambos canales son idénticos en estructura de costes y plazos."
          ],
          correct: 0,
          explanation: "SEO y SEM se complementan: SEM ofrece velocidad y testeo rápido de palabras clave; SEO construye un activo orgánico que reduce el CAC medio con el tiempo."
        },
        {
          q: "En Google Ads (SEM), ¿por qué un anunciante con mejor 'Nivel de Calidad' (*Quality Score*) puede aparecer arriba pagando menos por clic que un competidor?",
          options: [
            "Porque la subasta premia la relevancia del anuncio, el CTR esperado y la experiencia de la página de destino, no únicamente la puja máxima.",
            "Porque Google selecciona los anuncios al azar cada mañana.",
            "Porque tener una web más lenta reduce el coste por clic.",
            "Porque la antigüedad del dominio es el único factor en SEM."
          ],
          correct: 0,
          explanation: "Alinear intención de búsqueda, texto del anuncio y landing page mejora el Quality Score y reduce el CPC y CPA."
        },
        {
          q: "¿Para qué sirve el *Lead Scoring* al automatizar ventas y marketing en un CRM?",
          options: [
            "Para asignar puntos a cada contacto según su encaje de perfil (fit) y su nivel de interacción (interés), permitiendo al equipo comercial priorizar primero los leads más calientes.",
            "Para enviar facturas automáticas sin consentimiento del cliente.",
            "Para sustituir completamente el trabajo de los vendedores en cierres complejos B2B.",
            "Para medir la velocidad de carga del servidor web."
          ],
          correct: 0,
          explanation: "El lead scoring conecta marketing y ventas evitando que el equipo comercial pierda horas en contactos fríos mientras se enfrían los listos para comprar."
        },
        {
          q: "¿Qué 5 etapas componen el marco de *Growth Hacking* conocido como embudo pirata (AARRR)?",
          options: [
            "Análisis, Alcance, Riesgo, Rentabilidad y Reporte.",
            "Adquisición, Activación, Retención, Ingresos (Revenue) y Recomendación (Referral).",
            "Anuncios, Algoritmo, Redes, Ranking y Reputación.",
            "Aprobación, Asignación, Revisión, Resolución y Retrospectiva."
          ],
          correct: 1,
          explanation: "AARRR evita obsesionarse solo con captar visitas (Adquisición) obligando a optimizar Activación, Retención, Monetización y Recomendación."
        },
        {
          q: "En psicología aplicada al marketing, ¿cuál es la línea roja que separa la persuasión ética de las prácticas manipuladoras (*dark patterns*)?",
          options: [
            "Mostrar testimonios verificables de clientes reales.",
            "Utilizar pruebas sociales reales, transparencia y escasez verídica (ética) frente a contadores falsos, costes ocultos o suscripciones trampa que destruyen confianza y vulneran normativa de consumo.",
            "Usar colores contrastados en el botón de compra.",
            "Explicar claramente los beneficios del producto."
          ],
          correct: 1,
          explanation: "Los atajos manipuladores pueden rascar un clic puntual, pero disparan devoluciones, reseñas negativas y riesgos legales."
        }
      ]
    },
    b06: {
      examTitle: "Examen de Certificación — Bloque 6: Transformación Digital",
      workshop: {
        title: "Taller Práctico 6: Hoja de Ruta de Transformación Comercial-Digital y Ciberseguridad",
        subtitle: "Prioriza una iniciativa de IA/Cloud/Automatización en tu área comercial y define sus controles de seguridad y cumplimiento.",
        fields: [
          { id: "proceso", label: "Proceso comercial u operativo con cuello de botella", type: "text", placeholder: "Ej.: Generación de ofertas técnicas y seguimiento de presupuestos" },
          { id: "tecnologia", label: "Tecnología priorizada (IA generativa RAG, CRM Cloud, BI, RPA, IoT)", type: "textarea", placeholder: "CRM Cloud + asistente IA sobre catálogo verificado + dashboard BI..." },
          { id: "ciber", label: "3 controles de ciberseguridad obligatorios (MFA, backups inmutables, accesos)", type: "textarea", placeholder: "1. MFA en CRM y correo... 2. Principio de mínimo privilegio... 3. Formación anti-phishing..." },
          { id: "etica", label: "Controles de privacidad y verificación normativa (RGPD, AI Act, NIS2)", type: "textarea", placeholder: "No introducir datos confidenciales en herramientas públicas; revisar AI Act y RGPD..." }
        ]
      },
      questions: [
        {
          q: "¿Cuál es la diferencia fundamental entre digitalizar documentos y acometer una verdadera transformación digital?",
          options: [
            "No hay diferencia: pasar formularios de papel a PDF ya es transformación digital.",
            "Transformar digitalmente implica rediseñar procesos, propuesta de valor, uso de datos y cultura de trabajo, no solo copiar procesos lentos a formato digital.",
            "Consiste únicamente en cambiar el proveedor de telefonía.",
            "Solo aplica a startups tecnológicas recién creadas."
          ],
          correct: 1,
          explanation: "Digitalizar ineficiencias solo acelera el desorden; transformar exige repensar procesos centrados en el cliente y los datos."
        },
        {
          q: "Un equipo comercial quiere usar IA generativa para responder dudas sobre tarifas, garantías y fichas técnicas sin inventar condiciones ('alucinaciones'). ¿Qué enfoque es más sólido?",
          options: [
            "Entrenar desde cero un modelo de lenguaje propio con una inversión millonaria.",
            "Desplegar un sistema RAG conectado a documentación oficial actualizada, con control de accesos y revisión humana (*human-in-the-loop*).",
            "Dejar que cada vendedor pegue contratos de clientes en chats gratuitos sin políticas de uso.",
            "Eliminar la revisión humana en contratos de gran volumen."
          ],
          correct: 1,
          explanation: "RAG ancla las respuestas en fuentes verificadas de la empresa, protege datos y minimiza errores comerciales."
        },
        {
          q: "En Cloud Computing, ¿por qué la mayoría de las pymes prefieren SaaS para herramientas como CRM o ERP antes que infraestructura propia (IaaS)?",
          options: [
            "Porque SaaS entrega la aplicación lista por suscripción con actualizaciones y mantenimiento gestionados por el proveedor, acelerando la adopción y reduciendo carga técnica.",
            "Porque en SaaS no hace falta gestionar contraseñas ni usuarios.",
            "Porque IaaS no permite alojar aplicaciones empresariales.",
            "Porque SaaS es siempre gratuito para empresas."
          ],
          correct: 0,
          explanation: "SaaS convierte grandes inversiones iniciales (CAPEX) en coste operativo predecible (OPEX) y libera al equipo para enfocarse en negocio."
        },
        {
          q: "¿Cuándo aporta valor diferencial real Blockchain frente a una base de datos tradicional?",
          options: [
            "Siempre que una sola empresa quiera guardar sus facturas internas.",
            "Cuando varios actores independientes necesitan compartir trazabilidad verificable e inmutable sin confiar en un único intermediario central.",
            "Para sustituir los dashboards de Business Intelligence.",
            "Para reemplazar las copias de seguridad del CRM."
          ],
          correct: 1,
          explanation: "Blockchain tiene sentido en ecosistemas multiparte de baja confianza mutua (p. ej., trazabilidad de origen), no en bases internas simples."
        },
        {
          q: "¿Qué defensa resulta más efectiva para que una pyme sobreviva operativamente a un ataque de ransomware?",
          options: [
            "Confiar únicamente en que 'somos demasiado pequeños para ser atacados'.",
            "MFA obligatorio, segmentación y mínimo privilegio, parches actualizados, formación anti-phishing y copias de seguridad inmutables/aisladas probadas (regla 3-2-1-1-0).",
            "Guardar una copia de seguridad en la misma carpeta compartida del servidor.",
            "Pagar siempre el rescate como única estrategia."
          ],
          correct: 1,
          explanation: "Prevenir accesos comprometidos y garantizar recuperación limpia mediante backups inmutables probados es la base de la continuidad de negocio."
        }
      ]
    },
    b07: {
      examTitle: "Examen de Certificación — Bloque 7: Business Plan",
      workshop: {
        title: "Taller Práctico 7: Business Model Canvas y Cuadro de Mando Comercial",
        subtitle: "Conecta misión/visión, modelo de negocio, DAFO-CAME y KPIs de seguimiento para tu plan comercial.",
        fields: [
          { id: "identidad", label: "Misión y Visión comercial a 3-5 años (superando el test de sustitución competitiva)", type: "textarea", placeholder: "Misión: ... | Visión 2029: ..." },
          { id: "canvas", label: "Propuesta de valor, canales principales y modelo de ingresos", type: "textarea", placeholder: "Propuesta: ... | Canales: D2C + B2B | Ingresos: suscripción + servicio..." },
          { id: "came", label: "1 acción CAME derivada de tu DAFO (Corregir, Afrontar, Mantener o Explotar)", type: "textarea", placeholder: "Explotar fortaleza técnica para captar cuentas industriales..." },
          { id: "kpis", label: "3 KPIs del cuadro de mando (1 lagging y 2 leading) con frecuencia de revisión", type: "textarea", placeholder: "Lagging: Margen neto mensual | Leading: Pipeline cualificado y tasa de conversión semanal..." }
        ]
      },
      questions: [
        {
          q: "¿Cómo sabes si una declaración de misión está redactada de forma genérica ('papel mojado')?",
          options: [
            "Cuando cabe en tres líneas claras.",
            "Cuando al sustituir el nombre de tu empresa por el de un competidor directo la frase sigue encajando igual de bien (falla el test de sustitución competitiva).",
            "Cuando especifica claramente el segmento de cliente al que sirve.",
            "Cuando ayuda a descartar proyectos fuera de foco."
          ],
          correct: 1,
          explanation: "Una misión útil define diferenciación y límites claros para guiar decisiones y prioridades."
        },
        {
          q: "En el Business Model Canvas, ¿qué indica que un modelo de negocio es financieramente sostenible?",
          options: [
            "Que tiene muchos socios clave aunque los costes superen los ingresos.",
            "Que existe coherencia rentable entre propuesta de valor, canales de entrega, fuentes de ingresos y estructura de costes.",
            "Que únicamente vende por suscripción mensual.",
            "Que no requiere recursos clave ni inversión tecnológica."
          ],
          correct: 1,
          explanation: "Crear y entregar valor solo es sostenible si la mecánica de captura de valor supera de forma saludable la estructura de costes."
        },
        {
          q: "¿Por qué es clave combinar el análisis PESTEL con el DAFO y la matriz CAME?",
          options: [
            "Porque PESTEL detecta fuerzas macroexternas (políticas, económicas, sociales, tecnológicas, ecológicas y legales), DAFO integra el diagnóstico y CAME lo convierte en acciones estratégicas concretas.",
            "Porque PESTEL sustituye al presupuesto anual de ventas.",
            "Porque CAME sirve exclusivamente para empresas industriales.",
            "Son tres nombres distintos para la misma hoja de cálculo."
          ],
          correct: 0,
          explanation: "El diagnóstico solo genera ventaja competitiva cuando aterriza en iniciativas concretas priorizadas con responsable y presupuesto."
        },
        {
          q: "Al monitorizar un plan estratégico, ¿por qué conviene combinar indicadores *lagging* (resultado) con indicadores *leading* (adelantados)?",
          options: [
            "Porque los *lagging* confirman el resultado ya ocurrido (p. ej., facturación trimestral) mientras los *leading* avisan antes (p. ej., pipeline nuevo o visitas cualificadas) permitiendo corregir a tiempo.",
            "Porque los *leading* son siempre más baratos de inventar.",
            "Porque los *lagging* no deben enseñarse a dirección.",
            "Porque solo se necesitan indicadores adelantados una vez al año."
          ],
          correct: 0,
          explanation: "Dirigir solo con indicadores lagging es como conducir mirando exclusivamente el espejo retrovisor."
        },
        {
          q: "¿Qué debe ocurrir en un comité de seguimiento cuando un objetivo clave se desvía más de un 15 % respecto al plan?",
          options: [
            "Esperar seis meses a ver si el mercado se corrige solo.",
            "Identificar causas raíz, asignar un dueño del plan de choque, fijar acciones correctivas a 30-90 días y reevaluar hipótesis.",
            "Ocultar el indicador hasta recuperar las cifras.",
            "Cambiar la visión corporativa cada mes."
          ],
          correct: 1,
          explanation: "La disciplina de seguimiento convierte el plan estratégico en una herramienta viva de aprendizaje y ejecución."
        }
      ]
    },
    b08: {
      examTitle: "Examen de Certificación — Bloque 8: Project Management",
      workshop: {
        title: "Taller Práctico 8: Planificación de Lanzamiento Comercial (Triple Restricción y RACI)",
        subtitle: "Planifica un proyecto comercial clave (lanzamiento de producto, CRM o expansión) con roles claros y gestión de riesgos.",
        fields: [
          { id: "proj", label: "Proyecto comercial y entregable final aceptable", type: "text", placeholder: "Ej.: Lanzamiento de nueva línea B2B en 12 semanas" },
          { id: "tri", label: "Triple restricción (Alcance, Fecha límite y Presupuesto)", type: "textarea", placeholder: "Alcance: catálogo + CRM + formación | Fecha: 15 sept | Presupuesto: 28.000 €" },
          { id: "raci", label: "Matriz RACI de 3 hitos (garantizando exactamente un único 'A' por hito)", type: "textarea", placeholder: "Hito 1 (Precios): R=Marketing, A=Dir. Comercial, C=Finanzas, I=Ventas..." },
          { id: "riesgo", label: "2 riesgos de lanzamiento y respuesta preventiva", type: "textarea", placeholder: "Riesgo: retraso en material técnico -> Mitigación: hitos semanales y borrador en semana 4..." }
        ]
      },
      questions: [
        {
          q: "Durante el lanzamiento de un nuevo CRM comercial, el director de ventas pide añadir tres informes a medida fuera del alcance inicial sin mover fecha ni presupuesto. ¿Cómo debe actuar el Project Manager?",
          options: [
            "Aceptarlo verbalmente en el pasillo para evitar fricciones.",
            "Activar el control formal de cambios frente a *scope creep*, estimando impacto en plazo, coste y riesgo para que el patrocinador decida con transparencia.",
            "Ignorar la petición hasta el día del cierre del proyecto.",
            "Reducir las pruebas con usuarios para ganar tiempo."
          ],
          correct: 1,
          explanation: "Gestionar cambios de forma formal protege la calidad, el presupuesto y las expectativas de todos los interesados."
        },
        {
          q: "En una matriz RACI de un proyecto transversal (Ventas, Marketing y TI), ¿qué regla evita que una decisión quede bloqueada sin dueño?",
          options: [
            "Asignar al menos tres 'A' (Accountable) para mayor consenso.",
            "Garantizar exactamente un único 'A' (aprobador final) por cada entregable y al menos un 'R' (responsable de ejecución).",
            "Poner a toda la plantilla como 'C' (Consultado) en todas las tareas.",
            "Eliminar los roles 'I' (Informado)."
          ],
          correct: 1,
          explanation: "Un único 'A' asegura claridad de rendición de cuentas y evita dilución de responsabilidades."
        },
        {
          q: "¿Qué problema refleja el 'efecto sandía' en los informes de estado de proyecto?",
          options: [
            "Proyectos que se entregan antes de la fecha prevista.",
            "Reportes marcados en verde hacia dirección mientras ocultan bloqueos críticos en rojo dentro del equipo.",
            "Reuniones demasiado cortas y enfocadas.",
            "Equipos que documentan sus decisiones."
          ],
          correct: 1,
          explanation: "Sacar alertas en ámbar o rojo temprano permite desbloquear recursos antes de que el retraso sea irrecuperable."
        },
        {
          q: "¿Qué elemento es clave al gestionar un equipo híbrido o remoto de proyecto para evitar malentendidos?",
          options: [
            "Multiplicar las reuniones improvisadas sin agenda.",
            "Establecer acuerdos de trabajo (*Working Agreements*), canales claros por urgencia, documentación centralizada y feedback constructivo regular.",
            "Controlar exclusivamente la hora exacta de conexión al chat.",
            "No compartir los hitos del calendario con el equipo."
          ],
          correct: 1,
          explanation: "La claridad en canales, entregables y cadencia de comunicación sustituye el control presencial ineficaz."
        },
        {
          q: "¿Por qué la fase de cierre de proyecto es obligatoria aunque el entregable ya esté en funcionamiento?",
          options: [
            "Solo para llenar carpetas administrativas.",
            "Para obtener aceptación formal, traspasar soporte a operaciones (*handover*), cerrar contratos y capturar lecciones aprendidas que mejoren futuros proyectos.",
            "Para borrar el registro de riesgos y desviaciones.",
            "Para evitar evaluar la satisfacción del cliente interno."
          ],
          correct: 1,
          explanation: "Un cierre ordenado evita proyectos 'zombi' y convierte la experiencia en aprendizaje organizativo."
        }
      ]
    },
    b09: {
      examTitle: "Examen de Certificación — Bloque 9: Toma de Decisiones",
      workshop: {
        title: "Taller Práctico 9: Matriz de Decisión Comercial Ponderada Automática",
        subtitle: "Compara 3 decisiones comerciales estratégicas (canales, precios o mercados) ponderando criterios en tiempo real.",
        calculator: "decision_matrix"
      },
      questions: [
        {
          q: "Ante una caída del 18 % en ventas en una región, el equipo propone inmediatamente 'bajar precios un 15 %'. ¿Qué error del proceso de toma de decisiones están cometiendo?",
          options: [
            "Aplicar análisis multicriterio demasiado exhaustivo.",
            "Saltar a una solución prematura confundiendo el síntoma (caída de ventas) con la causa raíz (que podría ser pérdida de leads, rotación de comerciales o fallos de entrega).",
            "Generar demasiadas alternativas viables.",
            "Consultar datos históricos antes de actuar."
          ],
          correct: 1,
          explanation: "Definir bien el problema y sus causas raíz evita aplicar remedios caros (como guerra de precios) que agravan el margen."
        },
        {
          q: "Una empresa mantiene abierta una línea comercial deficitaria solo porque 'llevamos 3 años y 120.000 € invertidos en desarrollarla'. ¿Qué sesgo cognitivo está influyendo?",
          options: [
            "Sesgo de coste hundido (*sunk cost fallacy*).",
            "Sesgo de anclaje positivo.",
            "Pensamiento divergente.",
            "Análisis de sensibilidad."
          ],
          correct: 0,
          explanation: "Las decisiones racionales miran hacia delante (retornos y costes incrementales futuros), no hacia costes ya irrecuperables."
        },
        {
          q: "¿Por qué conviene desarrollar al menos 3-4 alternativas reales antes de analizar y decidir?",
          options: [
            "Para romper dilemas binarios ('sí/no') y descubrir opciones híbridas, pilotos acotados o alternativas con mejor relación riesgo-retorno.",
            "Para alargar el comité de dirección innecesariamente.",
            "Porque las decisiones buenas nunca pueden tomarse en menos de un año.",
            "Para evitar asignar criterios de evaluación."
          ],
          correct: 0,
          explanation: "La calidad de una decisión nunca puede superar la calidad de la mejor alternativa que se haya puesto sobre la mesa."
        },
        {
          q: "¿Qué aporta realizar un ejercicio *Pre-mortem* antes de ejecutar una gran decisión comercial?",
          options: [
            "Buscar culpables después de fracasar.",
            "Imaginar que el plan ha fracasado un año después para descubrir a tiempo riesgos ciegos, sesgos optimistas y disparadores de corrección (*tripwires*).",
            "Eliminar la necesidad de plan de acción.",
            "Sustituir las pruebas de mercado."
          ],
          correct: 1,
          explanation: "El Pre-mortem legitima el pensamiento crítico dentro del equipo antes de comprometer capital o reputación."
        },
        {
          q: "¿Qué garantiza que una decisión tomada en comité se convierta en resultados reales?",
          options: [
            "Redactar un plan de acción con tareas concretas, responsable único por hito, recursos, calendario, KPIs y fechas de revisión.",
            "Aprobarla por unanimidad sin asignar dueños de ejecución.",
            "Comunicarla únicamente al equipo financiero.",
            "Evitar medir desviaciones durante los primeros seis meses."
          ],
          correct: 0,
          explanation: "Una decisión sin plan de acción, dueño y seguimiento es solo una buena intención."
        }
      ]
    },
    b10: {
      examTitle: "Examen de Certificación — Bloque 10: Dirección Estratégica de Personas",
      workshop: {
        title: "Taller Práctico 10: Política de Cultura Comercial, Ética y Trabajo Híbrido",
        subtitle: "Diseña los pilares culturales, el código de integridad comercial y las reglas del modelo híbrido de tu organización.",
        fields: [
          { id: "rrhh", label: "Prioridad estratégica de personas a 12 meses alineada con el crecimiento comercial", type: "text", placeholder: "Ej.: Retener talento clave y crear plan de carrera para Account Managers" },
          { id: "comunicacion", label: "Plan de comunicación interna ante un cambio sensible o crisis", type: "textarea", placeholder: "Quién comunica, en qué orden, qué hechos transparenta y cómo recoge dudas..." },
          { id: "etica", label: "3 líneas rojas de ética comercial / compliance (comisiones, promesas, diversidad)", type: "textarea", placeholder: "1. Prohibido prometer plazos o funciones inexistentes... 2. Cero conflictos de interés..." },
          { id: "hibrido", label: "Acuerdo de flexibilidad laboral y desconexión digital (orientado a resultados)", type: "textarea", placeholder: "2 días presenciales de colaboración, franja core, derecho a desconexión tras 19:00..." }
        ]
      },
      questions: [
        {
          q: "¿Qué diferencia a la Dirección Estratégica de Recursos Humanos de una administración de personal puramente burocrática?",
          options: [
            "Se centra únicamente en emitir nóminas y archivar contratos.",
            "Alinea la planificación de plantilla, capacidades críticas, sucesión y cultura con los objetivos de crecimiento y transformación del negocio.",
            "Delega todas las decisiones de personas a un software automático.",
            "Evita medir el impacto de las políticas de talento en los resultados."
          ],
          correct: 1,
          explanation: "El área de personas actúa como socio estratégico cuando anticipa el talento y la cultura necesarios para ejecutar el plan de negocio."
        },
        {
          q: "Durante una reestructuración comercial importante, dirección guarda silencio durante semanas 'hasta tener todos los detalles cerrados'. ¿Qué efecto suele provocar esto?",
          options: [
            "Aumenta automáticamente la tranquilidad y el compromiso de la plantilla.",
            "El vacío informativo se llena rápidamente de rumores, ansiedad, caída de productividad y fuga de talento clave; la comunicación estratégica transparente y oportuna es esencial.",
            "Elimina cualquier resistencia al cambio.",
            "Mejora la reputación externa de la empresa."
          ],
          correct: 1,
          explanation: "En gestión de cambios y crisis, comunicar con honestidad lo que se sabe, lo que aún se decide y cuándo habrá nueva información protege la confianza."
        },
        {
          q: "¿Qué factor moldea con más fuerza la cultura organizacional real de un equipo de ventas?",
          options: [
            "Los carteles motivacionales colgados en la sala de reuniones.",
            "Los comportamientos que los líderes modelan cada día y aquello que el sistema de incentivos y promociones realmente premia o tolera.",
            "El tipo de letra elegido en la presentación corporativa.",
            "El número de páginas del manual de bienvenida."
          ],
          correct: 1,
          explanation: "La cultura es lo que ocurre cuando nadie mira: las promociones, los bonos y el ejemplo directivo envían señales mucho más fuertes que los discursos."
        },
        {
          q: "Un vendedor estrella consigue cerrar un gran contrato ocultando deliberadamente una limitación crítica del servicio al cliente. ¿Cómo debe responder una dirección ética?",
          options: [
            "Premiar el cierre porque ayuda a cumplir la cuota del trimestre.",
            "Corregir de inmediato con transparencia ante el cliente y reforzar las líneas rojas de integridad comercial, porque tolerar malas prácticas destruye la cultura y la reputación a medio plazo.",
            "Ignorarlo mientras el cliente no presente una demanda judicial.",
            "Trasladar el problema únicamente al departamento de soporte posventa."
          ],
          correct: 1,
          explanation: "La ética empresarial y el compliance son activos económicos: la confianza perdida cuesta mucho más que una venta puntual."
        },
        {
          q: "¿Cuál es la clave para que la flexibilidad laboral y el trabajo híbrido impulsen la productividad sin generar agotamiento (*burnout*)?",
          options: [
            "Exigir disponibilidad permanente en WhatsApp durante fines de semana.",
            "Dirigir por objetivos y resultados claros, acordar normas de colaboración síncrona/asíncrona y respetar de forma real la desconexión digital y el bienestar (verificando la normativa vigente).",
            "Eliminar toda interacción presencial o de equipo.",
            "Medir el rendimiento únicamente por horas con el ratón en movimiento."
          ],
          correct: 1,
          explanation: "La flexibilidad madura combina autonomía responsable, claridad de entregables y límites saludables de desconexión."
        }
      ]
    },
    b11: {
      examTitle: "Examen de Certificación — Bloque 11: Dirección Contable",
      workshop: {
        title: "Taller Práctico 11: Simulador de Cuenta de Pérdidas y Ganancias (EBITDA y Punto de Equilibrio)",
        subtitle: "Calcula en tiempo real margen bruto, EBITDA, resultado neto y ventas mínimas de equilibrio para tu unidad comercial.",
        calculator: "pnl_ebitda"
      },
      questions: [
        {
          q: "¿Cuál es la ecuación patrimonial fundamental que siempre debe cumplirse en el Balance de Situación?",
          options: [
            "Activo = Pasivo + Patrimonio Neto.",
            "Ingresos = Gastos + Caja.",
            "Activo Corriente = Beneficio Neto.",
            "EBITDA = Activo - Pasivo."
          ],
          correct: 0,
          explanation: "Todo lo que la empresa posee y tiene derecho a cobrar (Activo) se financia con recursos propios (Patrimonio Neto) o deuda/obligaciones (Pasivo)."
        },
        {
          q: "¿Cómo puede una pyme comercial presentar un beneficio contable positivo en la Cuenta de Pérdidas y Ganancias y, al mismo tiempo, quedarse sin dinero en el banco para pagar nóminas?",
          options: [
            "Eso es matemáticamente imposible en contabilidad.",
            "Porque la cuenta de resultados registra ingresos y gastos por devengo (al facturar), mientras la tesorería depende de los cobros y pagos reales (plazos de cobro largos, impagos o exceso de stock consumen caja).",
            "Porque el IVA siempre convierte los beneficios en pérdidas.",
            "Porque las amortizaciones implican salidas inmediatas de efectivo cada mes."
          ],
          correct: 1,
          explanation: "Beneficio ≠ Caja: el Estado de Flujos de Efectivo y la gestión del Periodo Medio de Cobro son vitales para no morir de éxito al crecer."
        },
        {
          q: "¿Qué mide el EBITDA y por qué lo utilizan habitualmente inversores y directivos comerciales?",
          options: [
            "El dinero exacto disponible hoy en la cuenta corriente tras impuestos.",
            "El beneficio operativo antes de intereses, impuestos, depreciaciones y amortizaciones; permite evaluar la capacidad recurrente del negocio para generar margen operativo puro.",
            "El porcentaje de IVA repercutido en las ventas anuales.",
            "El valor de liquidación de los inmuebles de la empresa."
          ],
          correct: 1,
          explanation: "El EBITDA aísla el rendimiento operativo del negocio respecto a su estructura financiera y fiscal, aunque debe complementarse siempre con el flujo de caja."
        },
        {
          q: "Un cliente clave que debe 35.000 € entra en concurso de acreedores con muy baja probabilidad de cobro. Según el principio de prudencia contable, ¿qué ajuste corresponde evaluar?",
          options: [
            "Seguir contabilizando la deuda como cobrable al 100 % indefinidamente.",
            "Dotar un deterioro / provisión por insolvencias comerciales para reflejar fielmente la pérdida probable en resultados y balance (verificando criterios del PGC y normativa fiscal vigente).",
            "Registrar los 35.000 € como nuevo ingreso extraordinario.",
            "Eliminar la factura original sin dejar rastro en los libros contables."
          ],
          correct: 1,
          explanation: "La imagen fiel y la prudencia exigen reconocer deterioros y provisiones por riesgos probables, no inflar artificialmente activos incobrables."
        },
        {
          q: "Desde el punto de vista de la dirección comercial de una pyme en España, ¿por qué el IVA cobrado en las facturas a clientes NO es un ingreso ni un beneficio de la empresa?",
          options: [
            "Porque la empresa actúa como recaudadora frente a Hacienda: el IVA repercutido menos el IVA soportado deducible debe liquidarse periódicamente (siempre verificando normativa y tipos vigentes).",
            "Porque las empresas comerciales nunca facturan IVA.",
            "Porque el IVA se suma directamente al EBITDA como margen comercial.",
            "Porque el IVA solo existe en operaciones internacionales."
          ],
          correct: 0,
          explanation: "Gastar la tesorería procedente del IVA cobrado como si fuera beneficio propio es una de las causas más frecuentes de tensiones de liquidez en pymes."
        }
      ]
    }
  }
};
