window.ASSESSMENTS_EMBA = {
  passingScore: 70,
  blocks: {
    b01: {
      examTitle: "Examen Ejecutivo EMBA — Bloque 1: Liderazgo Ejecutivo y Responsabilidad Global",
      workshop: {
        title: "Taller Práctico 1: Memorándum de Comité (Pirámide SCQA) y Dilema Ético Global",
        subtitle: "Estructura una recomendación ejecutiva para consejo de administración y define salvaguardas éticas en una operación internacional.",
        fields: [
          { id: "scqa", label: "Comunicación ejecutiva SCQA (Situación, Complicación, Pregunta y Recomendación directa arriba)", type: "textarea", placeholder: "S: ... | C: ... | Q: ... | Respuesta/Recomendación ejecutiva: aprobar inversión de..." },
          { id: "equipo", label: "Medida concreta para reducir silos/jerarquías y elevar la rendición de cuentas en tu comité", type: "textarea", placeholder: "Delegar decisiones operativas <25k € con revisión mensual por resultados..." },
          { id: "dilema", label: "Dilema ético o de cumplimiento transfronterizo y protocolo de decisión responsable", type: "textarea", placeholder: "Presión por pagos de facilitación en nuevo mercado -> política cero tolerancia y due diligence..." },
          { id: "feedback", label: "Conversación de feedback ejecutivo pendiente y mensaje central basado en hechos", type: "textarea", placeholder: "Feedback a director de área sobre alineación entre objetivos comerciales y cumplimiento..." }
        ]
      },
      questions: [
        {
          q: "Al presentar una propuesta de inversión estratégica ante un Consejo de Administración con tiempo limitado, ¿qué estructura de comunicación ejecutiva (como el Principio de la Pirámide) maximiza la claridad y persuasión?",
          options: [
            "Dejar la conclusión y recomendación para la última diapositiva tras 40 minutos de contexto histórico.",
            "Comenzar directamente por la recomendación principal (respuesta ejecutiva) y respaldarla después con 3-4 argumentos lógicos sustentados en datos y riesgos.",
            "Leer textualmente un informe técnico de 30 páginas sin resumen.",
            "Omitir los riesgos y supuestos clave para evitar preguntas difíciles."
          ],
          correct: 1,
          explanation: "Los comités ejecutivos deciden mejor cuando conocen primero la tesis y recomendación, seguida de evidencia estructurada y riesgos transparentes."
        },
        {
          q: "Una empresa en expansión internacional descubre que un agente comercial local ofrece 'acelerar licencias aduaneras' mediante comisiones informales habituales en ese país. Según el enfoque de *Responsibility in Global Management*, ¿cuál es la postura directiva correcta?",
          options: [
            "Aceptarlo si la competencia local también lo hace.",
            "Rechazar cualquier pago irregular o práctica corrupta, aplicar debida diligencia de terceros y cumplir tanto el código ético corporativo como las leyes anticorrupción aplicables (verificando normativa internacional y local vigente).",
            "Delegarlo al agente sin pedir facturas para no enterarse.",
            "Aprobarlo temporalmente hasta consolidar cuota de mercado."
          ],
          correct: 1,
          explanation: "El liderazgo global responsable protege la integridad legal, reputacional y fiduciaria de la empresa incluso cuando renunciar a atajos cuesta tiempo a corto plazo."
        },
        {
          q: "¿Qué distingue la reducción saludable de jerarquías en un equipo directivo frente al desorden organizativo?",
          options: [
            "Eliminar toda definición de objetivos y responsables.",
            "Aplanar capas burocráticas manteniendo claridad absoluta en derechos de decisión, facilitación constructiva y rendición de cuentas compartida.",
            "Tomar todas las decisiones operativas únicamente por unanimidad de toda la plantilla.",
            "Evitar el feedback individualizado para no generar tensión."
          ],
          correct: 1,
          explanation: "Empoderar equipos de alto nivel requiere menos burocracia pero más claridad en objetivos, límites de decisión y responsabilidad."
        },
        {
          q: "Un alto directivo recibe feedback de que su estilo interrumpe a los miembros más jóvenes en reuniones estratégicas, silenciando alertas críticas. ¿Cuál es la respuesta más madura?",
          options: [
            "Defender que su experiencia justifica dominar las reuniones.",
            "Reconocer el impacto en la calidad de las decisiones, instaurar reglas de turno abierto (escuchar primero a perfiles técnicos/locales) y solicitar seguimiento periódico de su conducta.",
            "Reducir la participación de perfiles júnior en el comité.",
            "Sustituir todas las reuniones por comunicados unidireccionales."
          ],
          correct: 1,
          explanation: "El liderazgo ejecutivo eficaz crea espacios donde la mejor evidencia prevalece sobre el rango jerárquico."
        },
        {
          q: "¿Por qué la responsabilidad corporativa y el cumplimiento se integran en el núcleo obligatorio de un Executive MBA en lugar de dejarse solo al departamento legal?",
          options: [
            "Porque las decisiones estratégicas, financieras y comerciales de alta dirección generan impactos sistémicos en clientes, empleados, reguladores y accionistas que no pueden delegarse exclusivamente al área jurídica.",
            "Porque los abogados ya no participan en contratos internacionales.",
            "Solo por estética reputacional en la memoria anual.",
            "Porque no tiene relación con la rentabilidad a largo plazo."
          ],
          correct: 0,
          explanation: "Los fallos éticos y de gobernanza destruyen valor económico, licencia social para operar y viabilidad corporativa."
        }
      ]
    },
    b02: {
      examTitle: "Examen Ejecutivo EMBA — Bloque 2: Economía, Analítica Cuantitativa y Decisiones",
      workshop: {
        title: "Taller Práctico 2: Simulador de Elasticidad Precio–Demanda e Impacto en Margen",
        subtitle: "Prueba distintos ajustes de precio y elasticidad de mercado para comprobar si subir o bajar precios aumenta tu beneficio operativo.",
        calculator: "pricing_elasticity"
      },
      questions: [
        {
          q: "Un producto B2B muy diferenciado tiene una elasticidad-precio de la demanda de -0,4 (demanda inelástica). Si la empresa sube el precio un 10 % manteniendo el coste variable unitario constante, ¿qué ocurrirá previsiblemente con los ingresos y el margen operativo?",
          options: [
            "El volumen caerá aproximadamente un 4 %, por lo que tanto los ingresos totales como el margen operativo aumentarán de forma significativa.",
            "Las ventas caerán un 40 % y la empresa entrará en pérdidas.",
            "Los ingresos y el margen permanecerán exactamente iguales.",
            "La elasticidad no influye en las decisiones de precios."
          ],
          correct: 0,
          explanation: "Con demanda inelástica (|E| < 1), el aumento porcentual de precio supera la caída porcentual del volumen, elevando ingresos y aún más el margen de contribución."
        },
        {
          q: "En un análisis de regresión múltiple de ventas en función de inversión publicitaria, precio y estacionalidad, el equipo encuentra una alta correlación entre dos variables del mercado y concluye inmediatamente que una causa la otra. ¿Qué precaución gerencial es obligatoria?",
          options: [
            "Aceptar causalidad automática siempre que el R² supere 0,70.",
            "Recordar que correlación no implica causalidad: verificar variables omitidas, sesgo de selección, multicolinealidad y contrastar con experimentos controlados o criterio económico.",
            "Eliminar el análisis cuantitativo y decidir por intuición pura.",
            "Aumentar indefinidamente el número de variables sin revisar sobreajuste."
          ],
          correct: 1,
          explanation: "Un directivo formado en analítica sabe leer coeficientes, p-valores e intervalos, pero sobre todo detecta variables confusoras y evita confundir correlación con causalidad."
        },
        {
          q: "¿Qué aporta la analítica prescriptiva (como modelos de optimización) frente a la analítica descriptiva o predictiva?",
          options: [
            "Solo muestra gráficos históricos del trimestre pasado.",
            "Recomienda la asignación óptima de recursos (precios, inventario, rutas o presupuesto) maximizando un objetivo bajo restricciones reales del negocio.",
            "Elimina por completo la incertidumbre del mercado.",
            "Sustituye la necesidad de validar los datos de entrada."
          ],
          correct: 1,
          explanation: "Descriptiva explica qué pasó, predictiva estima qué puede pasar y prescriptiva determina cuál es la mejor decisión bajo restricciones concretas."
        },
        {
          q: "En microeconomía directiva, ¿cuál es el error clásico al decidir si aceptar o rechazar un pedido especial puntual cuando la planta tiene capacidad ociosa?",
          options: [
            "Comparar el precio ofertado frente al coste marginal / incremental del pedido.",
            "Rechazar un pedido cuyo precio cubre con holgura los costes variables incrementales solo porque queda por debajo del coste medio total (que incluye costes fijos hundidos que se pagarán igualmente).",
            "Verificar si el precio especial puede canibalizar a clientes actuales.",
            "Evaluar la capacidad disponible antes de comprometer la entrega."
          ],
          correct: 1,
          explanation: "A corto plazo y con capacidad ociosa, mientras no haya canibalización de mercado, todo pedido cuyo precio supere su coste marginal aporta contribución positiva a cubrir costes fijos."
        },
        {
          q: "¿Por qué un modelo de regresión con un R² muy alto dentro de los datos históricos puede fallar estrepitosamente al predecir el próximo año?",
          options: [
            "Por sobreajuste (*overfitting*) al ruido histórico o por un cambio estructural del mercado que invalida los supuestos del pasado.",
            "Porque un R² alto siempre indica un error de suma.",
            "Porque la regresión lineal solo funciona con menos de diez observaciones.",
            "Porque las predicciones nunca deben validarse fuera de la muestra."
          ],
          correct: 0,
          explanation: "Validar fuera de muestra (*out-of-sample*) y revisar cambios de régimen económico evita confiar ciegamente en modelos sobreajustados."
        }
      ]
    },
    b03: {
      examTitle: "Examen Ejecutivo EMBA — Bloque 3: Operaciones, Contabilidad, Finanzas Corporativas y Macro",
      workshop: {
        title: "Taller Práctico 3: Calculadora de Valoración DCF (Flujo de Caja Descontado), WACC y VAN",
        subtitle: "Evalúa un proyecto de inversión o adquisición calculando su VAN (NPV), Índice de Rentabilidad y Valor Empresa en vivo.",
        calculator: "dcf_npv"
      },
      questions: [
        {
          q: "Un proyecto de expansión exige una inversión inicial de 500.000 € y genera flujos de caja libres futuros cuyo valor presente (descontados al WACC del 10 %) suma 615.000 €. ¿Cuál es su VAN (NPV) y la decisión financiera correcta?",
          options: [
            "VAN = -115.000 €; rechazar el proyecto.",
            "VAN = +115.000 €; aceptar el proyecto porque crea valor económico por encima del coste de capital exigido por accionistas y acreedores.",
            "VAN = 615.000 €; no depende de la inversión inicial.",
            "No puede decidirse sin conocer el beneficio contable histórico."
          ],
          correct: 1,
          explanation: "VAN = Valor Presente de flujos futuros - Inversión inicial = 615.000 - 500.000 = +115.000 €. Un VAN positivo indica creación neta de valor."
        },
        {
          q: "¿Qué representa el WACC (Coste Medio Ponderado de Capital) en Finanzas Corporativas?",
          options: [
            "El tipo de interés medio de las facturas impagadas.",
            "La tasa mínima de rentabilidad exigida por el conjunto de proveedores de capital (deuda neta de escudo fiscal y capital propio/equity) ponderada según la estructura financiera de la empresa.",
            "El porcentaje anual de inflación del país.",
            "El margen bruto sobre ventas de la unidad comercial."
          ],
          correct: 1,
          explanation: "El WACC sirve como tasa de descuento en valoración DCF para flujos de caja libres de la empresa: todo proyecto con retorno inferior al WACC destruye valor."
        },
        {
          q: "En Estrategia de Operaciones, ¿qué enseña la 'frontera eficiente de operaciones' cuando una empresa intenta ser simultáneamente la más barata, la más rápida y la más personalizada del sector sin innovar su sistema operativo?",
          options: [
            "Que siempre se puede maximizar todo a la vez sin renuncias.",
            "Que existen *trade-offs* reales entre coste, calidad, velocidad y flexibilidad; sobresalir requiere elegir prioridades estratégicas claras o innovar procesos/tecnología para desplazar la frontera.",
            "Que la calidad nunca influye en la productividad.",
            "Que la capacidad instalada debe mantenerse al 100 % sin margen ante variabilidad."
          ],
          correct: 1,
          explanation: "Operar cerca del 100 % de utilización con alta variabilidad dispara las colas y destruye calidad/plazo; la estrategia operativa exige alinear capacidades con la propuesta de valor."
        },
        {
          q: "Si un banco central sube de forma sostenida los tipos de interés para frenar la inflación, ¿qué doble impacto directo debe vigilar un comité de dirección en su empresa?",
          options: [
            "Abaratamiento inmediato de toda la deuda variable y mayor demanda de crédito.",
            "Encarecimiento del coste de financiación (mayor WACC y coste de deuda nueva/variable) y potencial enfriamiento de la demanda e inversión de clientes.",
            "Desaparición automática del riesgo de tipo de cambio.",
            "Incremento garantizado de los múltiplos de valoración empresarial."
          ],
          correct: 1,
          explanation: "Tipos más altos elevan las tasas de descuento (presionando valoraciones), encarecen la refinanciación y suelen moderar el consumo y el CAPEX."
        },
        {
          q: "En contabilidad directiva, ¿por qué una línea de negocio con alto volumen de ventas puede estar destruyendo valor económico real?",
          options: [
            "Porque puede tener margen de contribución muy estrecho, consumir alto capital circulante (inventario y cuentas por cobrar) y absorber recursos indirectos sin cubrir su coste de capital.",
            "Porque vender mucho siempre provoca pérdidas contables.",
            "Porque las amortizaciones aumentan las ventas netas.",
            "Porque el flujo de caja operativo siempre coincide con el volumen facturado."
          ],
          correct: 0,
          explanation: "Conectar márgenes reales (contabilidad de gestión), capital invertido y generación de caja revela qué líneas crean o destruyen valor."
        }
      ]
    },
    b04: {
      examTitle: "Examen Ejecutivo EMBA — Bloque 4: Dirección de la Empresa y Estrategia de Marketing",
      workshop: {
        title: "Taller Práctico 4: Alineación de Arquitectura Organizativa y Estrategia STP / CLV",
        subtitle: "Conecta diseño de incentivos corporativos con tu posicionamiento estratégico de marketing y valor de vida del cliente.",
        fields: [
          { id: "arquitectura", label: "Desajuste actual entre estructura, incentivos o cultura y la estrategia general de tu empresa", type: "textarea", placeholder: "Incentivos trimestrales penalizan la retención y la inversión en nuevos mercados..." },
          { id: "stp", label: "Estrategia STP (Segmento prioritario, Target y Declaración de Posicionamiento diferencial)", type: "textarea", placeholder: "Para [segmento] que necesita [valor], nuestra oferta es [categoría] que ofrece [diferencial]..." },
          { id: "mix_4p", label: "Coherencia de las 4P (Producto, Precio basado en valor, Canales y Comunicación)", type: "textarea", placeholder: "Producto modular + precio por tiers de valor + canal directo consultivo..." },
          { id: "clv", label: "Palanca principal para elevar el Customer Lifetime Value (CLV) y defender cuota frente a competidores", type: "textarea", placeholder: "Aumentar tasa de retención anual del 78 % al 88 % mediante éxito de cliente..." }
        ]
      },
      questions: [
        {
          q: "En *Managing the Enterprise*, ¿por qué el gobierno corporativo y el diseño de incentivos se analizan combinando economía, psicología y sociología organizativa?",
          options: [
            "Porque las personas responden únicamente a normas escritas sin influencias sociales ni sesgos.",
            "Porque los incentivos mal diseñados generan conductas indeseadas (problema principal-agente), mientras la cultura, las normas sociales y la motivación intrínseca determinan si la estrategia se ejecuta de verdad.",
            "Porque la economía no estudia el comportamiento de las empresas.",
            "Solo para redactar la memoria de recursos humanos."
          ],
          correct: 1,
          explanation: "Dirigir una empresa compleja exige alinear incentivos económicos, arquitectura de decisiones y dinámicas humanas."
        },
        {
          q: "¿Cuál es la diferencia central entre *Marketing Management* (operativo) y *Marketing Strategy* (estratégico)?",
          options: [
            "Marketing Management gestiona las palancas tácticas de la mezcla (producto, precio, canales, comunicación); Marketing Strategy define en qué mercados competir, cómo posicionarse de forma diferenciada y cómo sostener ventaja competitiva y valor de cliente a largo plazo.",
            "Marketing Strategy consiste únicamente en gestionar redes sociales diarias.",
            "Marketing Management no se ocupa nunca del precio ni de los canales.",
            "No existe ninguna diferencia entre ambos niveles."
          ],
          correct: 0,
          explanation: "Las tácticas de las 4P solo construyen rentabilidad duradera cuando ejecutan una estrategia clara de segmentación y posicionamiento (STP)."
        },
        {
          q: "Ante la entrada de un competidor de bajo precio (*low-cost*), ¿cuál suele ser el error estratégico más destructivo para una empresa posicionada en calidad y servicio?",
          options: [
            "Reforzar la diferenciación en segmentos de mayor valor y lanzar, si procede, una oferta acotada diferenciada.",
            "Iniciar una guerra de precios lineal bajando precios en todo el catálogo sin tener una estructura de costes *low-cost*, destruyendo margen y posicionamiento.",
            "Analizar la elasticidad y rentabilidad por segmento de clientes.",
            "Medir el impacto en retención antes de reaccionar."
          ],
          correct: 1,
          explanation: "Competir por precio sin ventaja de costes destruye el beneficio del sector y erosiona el valor percibido de la marca."
        },
        {
          q: "¿Por qué el *Customer Lifetime Value* (CLV) es una métrica estratégica superior al margen de una sola transacción?",
          options: [
            "Porque integra margen recurrente, tasa de retención y horizonte temporal, permitiendo asignar presupuesto de captación (CAC) y fidelización con criterio de valor presente.",
            "Porque ignora los costes de adquisición de clientes.",
            "Porque solo aplica a supermercados físicos.",
            "Porque siempre es igual al precio de lista de un producto."
          ],
          correct: 0,
          explanation: "Gestionar la cartera de clientes como un activo financiero (Customer Equity) guía decisiones de retención, servicio y precios."
        },
        {
          q: "¿Qué ocurre cuando los canales de distribución, el precio y la comunicación envían señales contradictorias al mercado (por ejemplo, marca 'premium' con descuentos agresivos permanentes en canales masivos)?",
          options: [
            "Aumenta la lealtad de los clientes de alto margen.",
            "Se diluye el posicionamiento de marca, se entrena al cliente a esperar descuentos y se destruye poder de fijación de precios.",
            "Se reducen automáticamente los costes logísticos.",
            "Mejora la consistencia de la mezcla de marketing."
          ],
          correct: 1,
          explanation: "La coherencia interna de las 4P es indispensable para sostener un posicionamiento rentable."
        }
      ]
    },
    b05: {
      examTitle: "Examen Ejecutivo EMBA — Bloque 5: Experiencia Global y Cursos Modulares",
      workshop: {
        title: "Taller Práctico 5: Diagnóstico de Expansión Internacional (Marco CAGE) y Hoja de Ruta Modular",
        subtitle: "Evalúa la entrada a un nuevo país analizando distancias culturales, administrativas, geográficas y económicas, y elige el modo de entrada.",
        fields: [
          { id: "pais", label: "País / región objetivo para expansión internacional y oportunidad estratégica", type: "text", placeholder: "Ej.: México / Colombia / Alemania para expansión B2B SaaS o industrial" },
          { id: "cage", label: "Análisis de distancias CAGE (Cultural, Administrativa/Legal, Geográfica y Económica)", type: "textarea", placeholder: "Cultural: idioma común pero hábitos de negocio... | Administrativa: aranceles/regulación..." },
          { id: "entrada", label: "Modo de entrada recomendado (exportación, socio/JV, filial o adquisición) y gestión de riesgo país/divisa", type: "textarea", placeholder: "Alianza estratégica local en Año 1 con opción de filial en Año 2 para acotar CAPEX..." },
          { id: "tendencia", label: "1 tendencia emergente de Block Week (IA, nearshoring, lujo/retail, salud) aplicable a tu sector", type: "textarea", placeholder: "Nearshoring industrial hacia Norteamérica/LATAM aprovechando cadena regional..." }
        ]
      },
      questions: [
        {
          q: "Al evaluar la entrada de una empresa en un país extranjero usando el marco CAGE de Ghemawat, ¿qué cuatro dimensiones de 'distancia' deben analizarse además de los kilómetros físicos?",
          options: [
            "Coste, Activo, Ganancia y Eficiencia.",
            "Cultural, Administrativa (política/regulatoria), Geográfica y Económica.",
            "Comercial, Algorítmica, Gerencial y Energética.",
            "Únicamente tipo de cambio e idioma."
          ],
          correct: 1,
          explanation: "Muchos fracasos internacionales nacen de subestimar distancias administrativas, regulatorias, culturales o de poder adquisitivo."
        },
        {
          q: "¿Por qué una empresa suele preferir una alianza estratégica o *Joint Venture* con un socio local al entrar en un mercado emergente complejo frente a construir una filial propia desde cero (*greenfield*)?",
          options: [
            "Porque aporta conocimiento regulatorio, acceso a redes de distribución, mitigación de riesgo local y menor compromiso inicial de capital, a cambio de compartir control y beneficios.",
            "Porque elimina cualquier necesidad de gobierno o acuerdos claros.",
            "Porque las filiales propias están prohibidas en todo el mundo.",
            "Porque garantiza el 100 % de los beneficios sin asumir riesgo."
          ],
          correct: 0,
          explanation: "Elegir el modo de entrada equilibra velocidad, control, inversión de capital y mitigación de riesgo local."
        },
        {
          q: "¿Qué valor estratégico aporta el movimiento de *nearshoring* / diversificación geográfica en cadenas globales de suministro?",
          options: [
            "Aumentar deliberadamente los tiempos de tránsito marítimo.",
            "Acercar la producción a los mercados finales, reducir exposición a disrupciones geopolíticas y plazos de entrega, aunque requiera gestionar inversión en infraestructura y talento local.",
            "Concentrar el 100 % del suministro en un único proveedor lejano.",
            "Eliminar los requisitos de calidad y cumplimiento."
          ],
          correct: 1,
          explanation: "Las cadenas globales actuales equilibran eficiencia en costes con resiliencia geopolítica y velocidad de respuesta."
        },
        {
          q: "En el diseño de un Executive MBA, ¿qué función cumplen los cursos modulares intensivos (*Block Weeks* y *Global Modular Courses*) frente al núcleo obligatorio?",
          options: [
            "Sustituyen los fundamentos de finanzas y contabilidad.",
            "Permiten explorar con agilidad tendencias emergentes, sectores específicos y realidades económicas in situ de otros países, adaptando el programa a los retos actuales del directivo.",
            "Son obligatorios únicamente para perfiles recién graduados sin experiencia.",
            "No aportan créditos ni conexión con la práctica directiva."
          ],
          correct: 1,
          explanation: "La modularidad combina una base generalista rigurosa con especialización ágil en frontera tecnológica y mercados globales."
        },
        {
          q: "Una empresa europea o latinoamericana factura en dólares pero paga la mayor parte de sus costes operativos en moneda local muy volátil. ¿Qué riesgo global requiere gestión financiera activa?",
          options: [
            "Riesgo de tipo de cambio (exposición transaccional y económica), gestionable mediante cobertura natural o instrumentos financieros derivados bien gobernados.",
            "Exclusivamente riesgo de reputación en redes sociales.",
            "Riesgo nulo, porque las divisas nunca afectan al margen.",
            "Únicamente riesgo de inventario físico."
          ],
          correct: 0,
          explanation: "Las oscilaciones cambiarias pueden borrar el margen operativo completo de una exportación si no se gestiona la exposición."
        }
      ]
    },
    b06: {
      examTitle: "Examen Ejecutivo EMBA — Bloque 6: Electivas de Finanzas Avanzadas, M&A y Emprendimiento",
      workshop: {
        title: "Taller Práctico 6: Simulador de Valoración M&A (EV/EBITDA, Deuda Neta y Sinergias)",
        subtitle: "Calcula Valor Empresa (EV), Valor del Capital (Equity Value) y comprueba si una adquisición crea o destruye valor tras la prima de control.",
        calculator: "ma_valuation"
      },
      questions: [
        {
          q: "Una compañía tiene un EBITDA normalizado de 4 M€, se valora a un múltiplo de 7,5× EV/EBITDA y presenta una Deuda Financiera Neta de 6 M€. ¿Cuál es su *Enterprise Value* (EV) y su *Equity Value* (valor de las acciones)?",
          options: [
            "EV = 30 M€; Equity Value = 36 M€.",
            "EV = 30 M€; Equity Value = 24 M€ (EV menos Deuda Neta).",
            "EV = 24 M€; Equity Value = 30 M€.",
            "EV = 10 M€; Equity Value = 4 M€."
          ],
          correct: 1,
          explanation: "Enterprise Value = 4 × 7,5 = 30 M€. Para llegar al valor para los accionistas (Equity Value) se resta la Deuda Neta: 30 - 6 = 24 M€."
        },
        {
          q: "¿Cuál es una de las principales causas por las que muchas operaciones de Fusiones y Adquisiciones (M&A) destruyen valor para el comprador?",
          options: [
            "Realizar una *due diligence* financiera, comercial y cultural rigurosa.",
            "Pagar una prima de control excesiva basada en sinergias sobreestimadas y subestimar la complejidad cultural y operativa de la integración post-fusión (PMI).",
            "Analizar la estructura de deuda antes del cierre.",
            "Definir un plan de integración de 100 días antes de firmar."
          ],
          correct: 1,
          explanation: "Las sinergias de ingresos suelen ser inciertas y lentas; si la prima pagada supera el valor presente real de las sinergias ejecutadas, el comprador destruye valor."
        },
        {
          q: "¿En qué consiste el modelo de *Entrepreneurship Through Acquisition* (ETA / Search Funds) frente a crear una startup desde cero?",
          options: [
            "En invertir únicamente en bolsa cotizada sin gestionar la empresa.",
            "En buscar, adquirir y dirigir como CEO una pyme ya rentable y consolidada (frecuentemente en relevo generacional) para profesionalizarla y hacerla crecer, reduciendo el riesgo inicial de validación de producto.",
            "En cerrar empresas para vender su mobiliario.",
            "En franquiciar restaurantes sin financiación."
          ],
          correct: 1,
          explanation: "ETA combina ambición emprendedora con la adquisición de negocios con flujos de caja probados y potencial de mejora directiva y digital."
        },
        {
          q: "Una startup levanta 2 M€ de capital riesgo (*Venture Capital*) a una valoración *pre-money* de 8 M€. ¿Cuál es la valoración *post-money* y qué porcentaje de participación obtienen los nuevos inversores?",
          options: [
            "Post-money = 8 M€; participación = 25 %.",
            "Post-money = 10 M€; participación = 20 % (2 M€ / 10 M€).",
            "Post-money = 6 M€; participación = 33 %.",
            "Post-money = 12 M€; participación = 16 %."
          ],
          correct: 1,
          explanation: "Valoración Post-money = Pre-money (8 M€) + Inversión (2 M€) = 10 M€. Participación del inversor = 2 / 10 = 20 %."
        },
        {
          q: "¿Cuál es el propósito prudente del uso de derivados financieros (como *forwards* de divisa o *swaps* de tipos de interés) en una empresa no financiera?",
          options: [
            "Especular agresivamente buscando duplicar los beneficios trimestrales.",
            "Cubrir riesgos financieros identificados (*hedging*) para estabilizar flujos de caja, márgenes y previsibilidad presupuestaria bajo una política de tesorería aprobada.",
            "Ocultar deudas fuera de la supervisión del consejo.",
            "Sustituir las ventas operativas del negocio."
          ],
          correct: 1,
          explanation: "En dirección corporativa, los derivados sirven para reducir volatilidad no deseada del negocio subyacente, no para apostar en mercados."
        }
      ]
    },
    b07: {
      examTitle: "Examen Ejecutivo EMBA — Bloque 7: Electivas de Crecimiento Comercial, Precios, Negociación y Personas",
      workshop: {
        title: "Taller Práctico 7: Estrategia de Pricing Basado en Valor y Preparación de Negociación (BATNA/ZOPA)",
        subtitle: "Diseña una arquitectura de precios por valor (tiers/bundling) y prepara tu mapa de negociación ejecutiva antes de sentarte a la mesa.",
        fields: [
          { id: "pricing", label: "Cambio de modelo de precios (de 'coste + margen' a 'valor percibido': 3 niveles / tiers o suscripción)", type: "textarea", placeholder: "Básico (esencial), Pro (automatización + SLA), Enterprise (personalización y soporte dedicado)..." },
          { id: "jtbd", label: "Trabajo por hacer (Jobs-to-be-Done) que resuelve tu nuevo producto/servicio y prueba de validación", type: "textarea", placeholder: "Cuando [situación], el cliente quiere [progreso] para lograr [resultado]..." },
          { id: "batna", label: "Negociación clave próxima: tu BATNA, precio de reserva, intereses subyacentes y posible ZOPA", type: "textarea", placeholder: "BATNA: proveedor alternativo a 92k € | Reserva: 90k € | Intereses mutuos: plazo y volumen plurianual..." },
          { id: "people", label: "Pregunta de negocio para People Analytics (ej. predictores de rotación comercial) y salvaguarda de privacidad", type: "textarea", placeholder: "Analizar correlación entre onboarding/cuotas y rotación voluntaria usando datos agregados y RGPD..." }
        ]
      },
      questions: [
        {
          q: "¿Por qué la fijación de precios basada en valor (*Value-Based Pricing*) suele generar mayor rentabilidad que la fórmula tradicional 'coste + margen fijo' (*cost-plus*)?",
          options: [
            "Porque ignora los costes internos por completo.",
            "Porque captura una parte proporcional del valor económico y diferencial percibido por cada segmento de clientes, permitiendo versionado (*versioning*) y evitando regalar margen en segmentos con alta disposición a pagar.",
            "Porque obliga a cobrar siempre el precio más bajo del mercado.",
            "Porque impide usar modelos de suscripción."
          ],
          correct: 1,
          explanation: "Los costes fijan el suelo mínimo, pero es el valor creado para el cliente frente a su mejor alternativa lo que determina el techo real de precio."
        },
        {
          q: "En Negociación Ejecutiva, ¿qué es el BATNA (*Best Alternative to a Negotiated Agreement* / MAAN) y por qué es tu principal fuente de poder?",
          options: [
            "El primer precio agresivo que lanzas al empezar la reunión.",
            "Tu mejor alternativa realista si NO llegas a un acuerdo en esta mesa; cuanto más sólido es tu BATNA, mayor es tu capacidad para rechazar malos acuerdos y negociar con serenidad.",
            "El descuento máximo que exige el cliente.",
            "El contrato final firmado por los abogados."
          ],
          correct: 1,
          explanation: "Mejorar tu BATNA antes de negociar y comprender los intereses profundos (no solo posiciones) amplía la creación de valor."
        },
        {
          q: "¿Qué caracteriza a una negociación integrativa ('agrandar el pastel') frente a un regateo puramente distributivo ('suma cero')?",
          options: [
            "Ceder en precio sin pedir nada a cambio.",
            "Explorar múltiples variables con distinto valor relativo para cada parte (plazos, exclusividad, volumen, garantía, formación) para crear valor conjunto antes de repartirlo.",
            "Ocultar información clave sobre el alcance del contrato.",
            "Negociar exclusivamente sobre una única cifra de precio unitario."
          ],
          correct: 1,
          explanation: "Introducir múltiples variables convierte un choque de suma cero en acuerdos más rentables y sostenibles para ambas partes."
        },
        {
          q: "En el desarrollo de nuevos productos, ¿qué aporta el enfoque *Jobs-to-be-Done* (JTBD)?",
          options: [
            "Centrarse únicamente en copiar las funciones técnicas de la competencia.",
            "Comprender el progreso funcional, emocional y social concreto que el cliente busca lograr en una situación real, revelando oportunidades de innovación que las encuestas superficiales ocultan.",
            "Eliminar los prototipos antes del lanzamiento.",
            "Sustituir la investigación de mercados por la opinión del fundador."
          ],
          correct: 1,
          explanation: "Los clientes 'contratan' productos para resolver un progreso concreto en su vida o negocio; entender ese trabajo guía innovación con encaje real."
        },
        {
          q: "Al aplicar *People Analytics* en una organización, ¿qué riesgo ético y legal debe controlarse rigurosamente?",
          options: [
            "Ninguno, porque los datos de empleados son de libre uso ilimitado.",
            "Sesgos históricos en algoritmos de selección/promoción, falta de transparencia y cumplimiento estricto de la privacidad y normativa laboral vigente.",
            "Que los cuadros de mando muestren la tasa de rotación.",
            "Medir el impacto de la formación en el desempeño."
          ],
          correct: 1,
          explanation: "La analítica de personas aporta enorme valor si se gobierna con transparencia, datos agregados, auditoría de sesgos y respeto legal."
        }
      ]
    },
    b08: {
      examTitle: "Examen Ejecutivo EMBA — Bloque 8: Especialidades (Majors), IA Responsable y ESG",
      workshop: {
        title: "Taller Práctico 8: Diseño de Itinerario EMBA (19 Créditos) y Plan Ejecutivo IA + ESG",
        subtitle: "Personaliza tu recorrido de especialización (Major/Concentración) y sintetiza tu Proyecto Integrador de alta dirección.",
        fields: [
          { id: "itinerario", label: "Tu ruta de personalización EMBA (9,5 créditos núcleo + electivas + Major 4 cr. o Concentración 3 cr.)", type: "textarea", placeholder: "Núcleo + Concentración en IA para Negocios + Electivas de Pricing, M&A y Negociación..." },
          { id: "ia_caso", label: "Iniciativa estratégica de IA en tu organización (foso de datos propios, ROI y gobernanza algorítmica)", type: "textarea", placeholder: "Motor predictivo de churn/pricing sobre histórico propio + comité de ética y validación humana..." },
          { id: "esg", label: "2 temas ESG con doble materialidad en tu sector y métrica auditable (sin greenwashing)", type: "textarea", placeholder: "Descarbonización logística (tCO2e/envío) y gobernanza de proveedores homologados..." },
          { id: "capstone", label: "Resumen ejecutivo de tu Proyecto Integrador (tesis estratégica, impacto financiero VAN/EBITDA y plan 12 meses)", type: "textarea", placeholder: "Transformar modelo de ingresos en 18 meses logrando +3,5 pts de EBITDA y VAN positivo..." }
        ]
      },
      questions: [
        {
          q: "¿Dónde reside la verdadera ventaja competitiva sostenible al adoptar Inteligencia Artificial en la empresa?",
          options: [
            "En pagar licencias del mismo modelo público que usa cualquier competidor sin cambiar procesos.",
            "En combinar datos propios gobernados y diferenciadores, rediseño de flujos de trabajo, talento preparado y responsabilidad algorítmica alineados con el modelo de negocio.",
            "En automatizar decisiones críticas sin supervisión humana ni auditoría de sesgos.",
            "En prohibir totalmente el uso de IA en todos los departamentos."
          ],
          correct: 1,
          explanation: "Los modelos fundacionales tienden a comoditizarse; el foso competitivo nace de datos propios, integración operativa y gobernanza responsable."
        },
        {
          q: "¿Qué significa el concepto de 'doble materialidad' en la gestión ESG y sostenibilidad corporativa?",
          options: [
            "Publicar dos versiones distintas de la memoria anual.",
            "Evaluar tanto cómo los factores ambientales y sociales afectan financieramente a la empresa (riesgos/oportunidades) como el impacto real que la actividad de la empresa genera sobre el entorno y la sociedad.",
            "Invertir únicamente en campañas publicitarias verdes.",
            "Medir solo las emisiones de la oficina central ignorando la cadena de suministro."
          ],
          correct: 1,
          explanation: "La doble materialidad conecta riesgos financieros climáticos/sociales con impactos reales auditables, evitando el *greenwashing*."
        },
        {
          q: "¿Cómo estructura su personalización académica el modelo de Executive MBA analizado (19 unidades de crédito)?",
          options: [
            "Obliga a todos los alumnos a cursar exactamente las mismas asignaturas y exige dos especialidades obligatorias.",
            "Combina un núcleo obligatorio de 9,5 créditos y la Global Business Week con amplia libertad en electivas, Block Weeks y la opción voluntaria de cursar una *Major* (+4 créditos) o *Concentración* (+3 créditos).",
            "No tiene núcleo obligatorio de finanzas ni analítica.",
            "Se compone exclusivamente de cursos de ventas telefónicas."
          ],
          correct: 1,
          explanation: "El equilibrio entre núcleo generalista sólido y electivas/módulos/majors opcionales permite adaptar el EMBA al objetivo directivo de cada profesional."
        },
        {
          q: "¿Por qué una directiva de IA responsable en alta dirección exige trazabilidad, control de sesgos y revisión de marcos regulatorios (como el AI Act europeo u otras normas vigentes)?",
          options: [
            "Porque los fallos algorítmicos en crédito, selección de personal, precios o salud pueden provocar discriminación, sanciones legales severas y pérdida irreversible de confianza del mercado.",
            "Porque las empresas pequeñas están exentas de cualquier responsabilidad ética.",
            "Solo para retrasar todos los proyectos tecnológicos.",
            "Porque los modelos de IA nunca heredan sesgos de los datos históricos."
          ],
          correct: 0,
          explanation: "Los modelos aprenden patrones históricos que pueden reproducir sesgos; gobernar el riesgo algorítmico es hoy una obligación de comité de dirección."
        },
        {
          q: "Para un perfil directivo con vocación de crecimiento comercial y alta dirección general, ¿qué aporta un Proyecto Integrador EMBA bien defendido?",
          options: [
            "Una recopilación desconectada de definiciones teóricas.",
            "Un plan de negocio ejecutable que integra diagnóstico estratégico y global, análisis cuantitativo/analítico, política de precios y clientes, plan operativo, valoración financiera (VAN/WACC/caja) y gobernanza ética/ESG.",
            "Únicamente un presupuesto de publicidad digital sin cuenta de resultados.",
            "Un organigrama sin métricas ni horizonte temporal."
          ],
          correct: 1,
          explanation: "El sello de un Executive MBA es integrar visión de negocio, rigor cuantitativo-financiero y liderazgo ético en una sola decisión coherente."
        }
      ]
    }
  }
};
