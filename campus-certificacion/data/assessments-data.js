window.ASSESSMENTS_DIND = window.ASSESSMENTS_DATA = {
  passingScore: 70,
  blocks: {
    b01: {
      examTitle: "Examen de Certificación — Bloque 1: Business Plan",
      workshop: {
        title: "Taller Práctico 1: Hoja de Identidad Estratégica y Mini-DAFO",
        subtitle: "Aplica visión, misión, propuesta de valor y diagnóstico estratégico a una pyme o tu propia empresa.",
        fields: [
          { id: "empresa", label: "Nombre de la empresa o proyecto", type: "text", placeholder: "Ej.: Ferretería Industrial Norte S.L." },
          { id: "mision", label: "Misión operativa (qué hacéis, para quién y qué os diferencia)", type: "textarea", placeholder: "Garantizar el suministro ágil de..." },
          { id: "vision", label: "Visión a 3-5 años (con horizonte temporal e impacto medible)", type: "textarea", placeholder: "Convertirnos antes de 2029 en..." },
          { id: "valores", label: "3 valores traducidos a conductas observables", type: "textarea", placeholder: "1. Transparencia técnica: avisar en <24 h ante cualquier desviación..." },
          { id: "dafo", label: "1 Fortaleza, 1 Debilidad, 1 Oportunidad y 1 Amenaza + 1 KPI clave", type: "textarea", placeholder: "F: ... | D: ... | O: ... | A: ... | KPI: ..." }
        ]
      },
      questions: [
        {
          q: "Al aplicar el 'test de sustitución competitiva' a la misión de una pyme, ¿qué indica que la declaración falla?",
          options: [
            "Que tiene menos de tres líneas de extensión.",
            "Que si sustituyes el nombre de tu empresa por el de un competidor directo, la frase sigue encajando igual de bien.",
            "Que no incluye la cifra exacta de facturación prevista para el año siguiente.",
            "Que menciona el segmento principal de clientes al que atiende."
          ],
          correct: 1,
          explanation: "El test de sustitución competitiva detecta declaraciones genéricas sin diferenciación real. Una misión útil debe ayudar a decir 'no' a iniciativas fuera de foco."
        },
        {
          q: "Una pyme declara la 'orientación al cliente' como valor, pero comisiona al equipo comercial exclusivamente por volumen de venta sin penalizar devoluciones ni incidencias. ¿Qué problema estratégico existe?",
          options: [
            "Exceso de indicadores de seguimiento financiero.",
            "Falta de una visión con horizonte temporal de cinco años.",
            "Desalineación entre valores declarados y el sistema real de incentivos.",
            "Confusión entre análisis PESTEL y análisis interno."
          ],
          correct: 2,
          explanation: "Los valores solo se vuelven cultura real cuando están alineados con incentivos, procesos y consecuencias cotidianas."
        },
        {
          q: "En el Business Model Canvas, ¿qué bloques conectan directamente el cómo se entrega valor con cómo se captura valor económico?",
          options: [
            "Canales, Relación con clientes y Fuentes de ingresos frente a Estructura de costes.",
            "Exclusivamente Socios clave y Actividades clave.",
            "Solo el segmento de clientes y la declaración de visión.",
            "El organigrama interno y el presupuesto de tesorería."
          ],
          correct: 0,
          explanation: "Crear, entregar y capturar valor exige coherencia entre propuesta de valor, canales, relación con clientes, ingresos y estructura de costes."
        },
        {
          q: "¿Cuál es el error más habitual al construir una matriz DAFO en una pyme?",
          options: [
            "Separar factores internos (Debilidades/Fortalezas) de factores externos (Amenazas/Oportunidades).",
            "Combinar el DAFO con el entorno macroeconómico del PESTEL.",
            "Quedarse en un listado descriptivo sin cruzarlo en acciones concretas (matriz CAME) ni priorizar riesgos.",
            "Involucrar a mandos intermedios de varias áreas funcionales."
          ],
          correct: 2,
          explanation: "Un DAFO sin traducción a decisiones concretas (Corregir, Afrontar, Mantener, Explotar) se queda en un diagnóstico estático sin impacto."
        },
        {
          q: "En la monitorización del plan estratégico, un KPI de resultado ('lagging') muestra una caída del 12 % en margen neto trimestral. ¿Cuál es la actuación directiva más rigurosa?",
          options: [
            "Esperar al cierre anual para confirmar si la tendencia es definitiva.",
            "Analizar causas raíz junto a indicadores adelantados ('leading'), definir responsables y activar un plan de corrección con hitos a 30-90 días.",
            "Eliminar ese indicador del cuadro de mando para evitar alarma en el comité.",
            "Cambiar inmediatamente la misión y visión de la compañía."
          ],
          correct: 1,
          explanation: "La monitorización eficaz vincula desviaciones en indicadores de resultado con causas raíz, indicadores adelantados y planes de choque con dueño y plazo."
        }
      ]
    },
    b02: {
      examTitle: "Examen de Certificación — Bloque 2: Project Management",
      workshop: {
        title: "Taller Práctico 2: Acta Rápida de Proyecto y Matriz RACI",
        subtitle: "Estructura un proyecto real de digitalización definiendo triple restricción, riesgos y responsabilidades.",
        fields: [
          { id: "proyecto", label: "Nombre del proyecto y objetivo medible", type: "text", placeholder: "Ej.: Implantación de portal B2B de pedidos en 16 semanas" },
          { id: "restriccion", label: "Triple restricción (Alcance mínimo, Plazo límite y Presupuesto)", type: "textarea", placeholder: "Alcance: ... | Plazo: ... | Presupuesto: ..." },
          { id: "raci", label: "Matriz RACI resumida para 3 entregables (solo un 'A' por entregable)", type: "textarea", placeholder: "Entregable 1: R=..., A=..., C=..., I=..." },
          { id: "riesgos", label: "2 riesgos críticos con probabilidad, impacto y plan de mitigación", type: "textarea", placeholder: "Riesgo 1: Resistencia del equipo comercial -> Mitigación: ..." }
        ]
      },
      questions: [
        {
          q: "En un proyecto de transformación digital, el cliente interno solicita añadir dos módulos nuevos a mitad de ejecución sin ampliar plazo ni presupuesto. ¿Cómo se denomina este fenómeno y cómo debe gestionarlo el Project Manager?",
          options: [
            "Efecto sandía; debe aceptarlo para mantener satisfecho al patrocinador.",
            "Corrupción del alcance ('scope creep'); debe activar el control formal de cambios evaluando impacto en plazo, coste y calidad antes de aprobarlo.",
            "Ruta crítica; debe delegarlo al equipo técnico sin informar a dirección.",
            "Cierre administrativo; debe posponerse a la reunión anual."
          ],
          correct: 1,
          explanation: "El 'scope creep' erosiona plazos y márgenes; el PM protege la línea base canalizando toda petición por un flujo de control de cambios con impacto explícito."
        },
        {
          q: "¿Cuál es la regla de oro en una matriz de responsabilidades RACI para evitar bloqueos y ambigüedades?",
          options: [
            "Todo entregable debe tener múltiples 'A' (Accountable) para compartir la culpa.",
            "Cada entregable o tarea debe tener exactamente un único 'A' (Accountable / Aprobador final).",
            "El rol 'I' (Informado) debe aprobar todos los cambios presupuestarios.",
            "No asignar ningún 'R' (Responsable de ejecución) en fases críticas."
          ],
          correct: 1,
          explanation: "Cuando hay dos 'A' en la misma tarea, nadie asume la decisión final; la regla es exactamente un 'A' y al menos un 'R'."
        },
        {
          q: "¿Qué describe el llamado 'efecto sandía' en el reporting de proyectos con semáforos RAG?",
          options: [
            "Proyectos que alternan entregas ágiles con cascada cada dos semanas.",
            "Informes que muestran verde por fuera ante dirección mientras esconden bloqueos críticos (rojo) por dentro.",
            "Reuniones diarias que superan los 15 minutos establecidos.",
            "Equipos distribuidos en tres zonas horarias diferentes."
          ],
          correct: 1,
          explanation: "El reporting honesto exige criterios objetivos de semáforo para sacar riesgos en ámbar/rojo a tiempo, cuando aún tienen solución barata."
        },
        {
          q: "Según el modelo de desarrollo de equipos de Tuckman, cuando un equipo recién formado entra en desacuerdos sobre roles, prioridades y forma de trabajar, ¿en qué fase se encuentra?",
          options: [
            "Formación (Forming).",
            "Tormenta o Conflicto (Storming).",
            "Desempeño (Performing).",
            "Disolución (Adjourning)."
          ],
          correct: 1,
          explanation: "La fase de Storming es natural en equipos nuevos o híbridos; requiere acuerdos de trabajo ('Working Agreements') claros y liderazgo facilitador."
        },
        {
          q: "¿Cuál de los siguientes entregables es imprescindible para cerrar formalmente un proyecto de forma profesional?",
          options: [
            "Dejar de celebrar reuniones semanales cuando el software entra en producción.",
            "Acta de aceptación formal del cliente/patrocinador, traspaso a operaciones ('handover') y registro de lecciones aprendidas.",
            "Borrar los registros de riesgos cerrados para aligerar el repositorio.",
            "Reasignar al equipo antes de completar las pruebas de aceptación (UAT)."
          ],
          correct: 1,
          explanation: "Sin aceptación formal, traspaso operativo y lecciones aprendidas, el proyecto queda en un 'limbo infinito' consumiendo soporte oculto."
        }
      ]
    },
    b03: {
      examTitle: "Examen de Certificación — Bloque 3: Toma de Decisiones",
      workshop: {
        title: "Taller Práctico 3: Matriz de Decisión Ponderada Automática",
        subtitle: "Evalúa 3 alternativas frente a 4 criterios ponderados (0-10) y calcula automáticamente cuál aporta mayor valor.",
        calculator: "decision_matrix"
      },
      questions: [
        {
          q: "¿Cuál es la diferencia crítica entre un síntoma y una causa raíz al definir un problema empresarial?",
          options: [
            "El síntoma siempre es financiero y la causa raíz siempre es tecnológica.",
            "El síntoma es la manifestación visible del desajuste; la causa raíz es el mecanismo subyacente que, al corregirse, evita que el problema reaparezca.",
            "No existe diferencia práctica en la toma de decisiones en pymes.",
            "La causa raíz solo puede identificarse con inteligencia artificial."
          ],
          correct: 1,
          explanation: "Atacar síntomas consume presupuesto sin resolver el origen; herramientas como los '5 Porqués' o Ishikawa permiten aislar causas raíz."
        },
        {
          q: "Un comité directivo insiste en invertir 40.000 € adicionales en un software a medida que no funciona simplemente porque 'ya hemos gastado 80.000 € en él'. ¿Qué sesgo cognitivo está operando?",
          options: [
            "Sesgo de coste hundido ('sunk cost fallacy').",
            "Efecto halo de marca.",
            "Sesgo de disponibilidad estadística.",
            "Paradoja de la elección."
          ],
          correct: 0,
          explanation: "El coste ya incurrido e irrecuperable no debe condicionar la decisión futura; solo importan los costes y beneficios incrementales desde hoy."
        },
        {
          q: "¿Para qué sirve el protocolo 'Pre-mortem' antes de aprobar una decisión estratégica de alto impacto?",
          options: [
            "Para auditar los gastos una vez finalizado el proyecto.",
            "Para imaginar que la decisión ha fracasado rotundamente un año después e identificar por anticipado las causas probables y medidas preventivas.",
            "Para sustituir el análisis financiero coste-beneficio.",
            "Para asignar culpables en caso de desviación presupuestaria."
          ],
          correct: 1,
          explanation: "El Pre-mortem rompe el pensamiento grupal y el exceso de optimismo al legitimar que el equipo señale vulnerabilidades antes de comprometer recursos."
        },
        {
          q: "¿Por qué es arriesgado plantear una decisión compleja como un dilema binario ('hacer A o no hacer nada')?",
          options: [
            "Porque reduce drásticamente el espacio de soluciones viables e impide descubrir opciones híbridas, pilotos escalonados o alternativas de menor riesgo.",
            "Porque las matrices multicriterio exigen siempre un mínimo de diez opciones.",
            "Porque el análisis binario está prohibido en empresas digitales.",
            "Porque aumenta el coste de las reuniones de seguimiento."
          ],
          correct: 0,
          explanation: "Desarrollar al menos 3-4 alternativas simétricas (incluyendo pilotos o enfoques graduales) eleva significativamente la calidad de la decisión final."
        },
        {
          q: "¿Qué elemento convierte una buena decisión en un plan de acción ejecutable?",
          options: [
            "Un correo general comunicando la intención a toda la empresa.",
            "Desglose en tareas concretas, responsable único por hito, plazos, recursos asignados, indicadores de seguimiento y 'tripwires' (disparadores de revisión).",
            "Dejar abiertos los plazos para mantener flexibilidad total.",
            "Delegar la ejecución sin fijar métricas de control."
          ],
          correct: 1,
          explanation: "Sin responsables, hitos, recursos e indicadores de alerta temprana, las decisiones estratégicas se diluyen en la operativa diaria."
        }
      ]
    },
    b04: {
      examTitle: "Examen de Certificación — Bloque 4: Metodologías Ágiles",
      workshop: {
        title: "Taller Práctico 4: Priorizador RICE y Ficha de Experimento Lean",
        subtitle: "Prioriza una funcionalidad de producto calculando su puntuación RICE y diseña la hipótesis falsable de tu MVP.",
        calculator: "rice_mvp"
      },
      questions: [
        {
          q: "En Product Management, ¿qué mide la técnica de priorización RICE?",
          options: [
            "Rentabilidad, Inversión, Coste y Eficiencia contable.",
            "Alcance (Reach), Impacto (Impact), Confianza (Confidence) dividido entre Esfuerzo (Effort).",
            "Riesgo, Incertidumbre, Calidad y Entregables.",
            "Retorno de inversión dividido entre número de sprints."
          ],
          correct: 1,
          explanation: "RICE = (Reach × Impact × Confidence) / Effort, permitiendo comparar iniciativas de producto de forma transparente y reduciendo decisiones por intuición."
        },
        {
          q: "¿Cuál es la definición correcta de Producto Mínimo Viable (MVP) según Lean Startup?",
          options: [
            "Una versión incompleta y llena de fallos técnicos para salir antes al mercado.",
            "La versión más sencilla que permite recorrer el ciclo Construir-Medir-Aprender y validar o refutar una hipótesis crítica de valor con clientes reales al menor coste.",
            "Un plan de negocio de 60 páginas validado únicamente por el equipo interno.",
            "El producto definitivo pero ofrecido con un descuento del 50 %."
          ],
          correct: 1,
          explanation: "El objetivo principal de un MVP no es solo entregar software, sino maximizar el aprendizaje validado sobre demanda real minimizando inversión desperdiciada."
        },
        {
          q: "En un equipo que atiende incidencias continuas y peticiones imprevisibles de soporte/operaciones, ¿por qué suele funcionar mejor Kanban que Scrum puro?",
          options: [
            "Porque Kanban elimina la necesidad de medir tiempos de entrega.",
            "Porque Kanban gestiona flujo continuo limitando el trabajo en curso (WIP) sin forzar iteraciones cerradas de alcance congelado.",
            "Porque Scrum solo puede utilizarse en empresas de más de 500 empleados.",
            "Porque Kanban no requiere priorizar tareas."
          ],
          correct: 1,
          explanation: "Cuando el trabajo llega de forma continua y urgente, limitar el WIP y medir Lead Time/Cycle Time en Kanban evita romper sprints cada semana."
        },
        {
          q: "Una métrica muestra que las descargas de la app crecieron un 200 % este mes, pero el 92 % de los usuarios no vuelve tras el primer día. ¿Cómo se clasifica el número total de descargas en este contexto?",
          options: [
            "North Star Metric definitiva.",
            "Métrica vanidosa ('vanity metric'), porque luce bien pero oculta falta de retención y valor real.",
            "Indicador de calidad técnica de código.",
            "Indicador de pivote obligatorio de precios."
          ],
          correct: 1,
          explanation: "Las métricas accionables (retención, activación, recurrencia) reflejan valor entregado real; las vanidosas generan falsa sensación de éxito."
        },
        {
          q: "¿Cuál es el propósito central de una Retrospectiva en Agile Management?",
          options: [
            "Demostrar el incremento de producto a clientes externos.",
            "Inspeccionar cómo trabajó el equipo durante el ciclo e identificar 1-3 acciones concretas de mejora del proceso para la siguiente iteración.",
            "Evaluar individualmente el salario de cada miembro del equipo.",
            "Aprobar el presupuesto anual del departamento de tecnología."
          ],
          correct: 1,
          explanation: "La Sprint Review inspecciona el producto; la Retrospectiva inspecciona el proceso y las dinámicas de colaboración del equipo."
        }
      ]
    },
    b05: {
      examTitle: "Examen de Certificación — Bloque 5: Habilidades Directivas",
      workshop: {
        title: "Taller Práctico 5: Guion de Feedback SBI y Mapa de Cambio",
        subtitle: "Prepara una conversación difícil usando el modelo Situación-Comportamiento-Impacto y diseña tu acción frente a resistencias.",
        fields: [
          { id: "situacion", label: "Situación (cuándo y dónde ocurrió el hecho concreto)", type: "text", placeholder: "En la reunión de seguimiento del martes a las 10:00..." },
          { id: "comportamiento", label: "Comportamiento observable (sin juicios ni etiquetas personales)", type: "textarea", placeholder: "Se presentaron los datos sin avisar del retraso del proveedor..." },
          { id: "impacto", label: "Impacto concreto en el equipo, cliente o resultado + pregunta de cierre", type: "textarea", placeholder: "Esto impidió reajustar la entrega a tiempo. ¿Cómo podemos evitarlo la próxima semana?" },
          { id: "cambio", label: "Cambio organizativo que lideras y principal resistencia prevista (y cómo mitigarla)", type: "textarea", placeholder: "Cambio: adopción de CRM -> Resistencia: miedo al control -> Acción: ..." }
        ]
      },
      questions: [
        {
          q: "Un mando intermedio aplica el mismo estilo directivo de control estrecho tanto a una persona recién incorporada como a un técnico sénior muy autónomo. ¿Qué principio del liderazgo situacional incumple?",
          options: [
            "Adaptar el grado de dirección y apoyo al nivel de competencia y compromiso de cada persona para cada tarea concreta.",
            "Mantener la misma distancia jerárquica con toda la plantilla.",
            "Delegar todas las decisiones estratégicas desde el primer día.",
            "Evitar cualquier seguimiento periódico sobre resultados."
          ],
          correct: 0,
          explanation: "El liderazgo situacional ajusta el estilo (dirigir, entrenar, apoyar, delegar) según la madurez técnica y motivacional en cada tarea específica."
        },
        {
          q: "En el modelo de feedback constructivo SBI (Situación, Comportamiento, Impacto), ¿qué frase está correctamente formulada?",
          options: [
            "'Últimamente tienes muy mala actitud y no te comprometes con el equipo.'",
            "'En la entrega del jueves (S), el informe llegó sin revisar los márgenes (B), lo que obligó a posponer la reunión con el cliente 48 horas (I).'",
            "'Todos piensan que deberías organizarte mucho mejor.'",
            "'Si no mejoras pronto tendremos un problema grave en la evaluación anual.'"
          ],
          correct: 1,
          explanation: "SBI evita etiquetas personales y se centra en hechos observables y consecuencias concretas, reduciendo la defensividad y facilitando acuerdos de mejora."
        },
        {
          q: "¿En qué se diferencia principalmente el coaching directivo de la consultoría o el mentoring tradicional?",
          options: [
            "En el coaching el líder da siempre la solución exacta paso a paso.",
            "El coaching utiliza escucha activa y preguntas poderosas (como el modelo GROW) para que la persona desarrolle su propio criterio, autonomía y compromiso.",
            "El coaching solo se aplica a problemas de bajo rendimiento extremo.",
            "El coaching evita establecer metas y plazos de acción."
          ],
          correct: 1,
          explanation: "Mientras el mentoring transfiere experiencia directa, el coaching desbloquea el pensamiento autónomo y la responsabilidad del colaborador."
        },
        {
          q: "¿Qué condición es indispensable para empoderar realmente a un equipo sin caer en el 'abandono directivo'?",
          options: [
            "Eliminar cualquier objetivo o indicador de rendimiento.",
            "Definir límites claros de autonomía (qué pueden decidir solos, qué consultan y qué escalan), proporcionar información y generar seguridad psicológica.",
            "Aprobar personalmente cada correo que envía el equipo.",
            "Cambiar la estructura salarial cada trimestre."
          ],
          correct: 1,
          explanation: "Empoderar no es desentenderse: exige claridad de objetivos, fronteras explícitas de decisión (como Delegation Poker) y respaldo ante errores de aprendizaje."
        },
        {
          q: "Al implantar un nuevo ERP en una pyme familiar, varios empleados veteranos asienten en las reuniones pero siguen usando sus hojas de cálculo paralelas. ¿Qué tipo de resistencia muestran y cuál es la mejor respuesta?",
          options: [
            "Resistencia pasiva; requiere entender sus miedos reales (pérdida de control o miedo al error), implicar a referentes internos, formar de forma práctica y retirar gradualmente el proceso paralelo.",
            "Resistencia activa; basta con enviar un correo sancionador desde dirección.",
            "Falta de liderazgo técnico; se resuelve cambiando de proveedor de ERP.",
            "Ausencia de resistencia; las hojas paralelas deben mantenerse indefinidamente."
          ],
          correct: 0,
          explanation: "La resistencia pasiva suele nacer de incertidumbre, falta de competencia percibida o pérdida de estatus; se vence con participación, acompañamiento y victorias tempranas."
        }
      ]
    },
    b06: {
      examTitle: "Examen de Certificación — Bloque 6: Negocios Digitales",
      workshop: {
        title: "Taller Práctico 6: Calculadora de Unit Economics E-commerce y Última Milla",
        subtitle: "Comprueba el margen real por pedido tras descontar coste de producto, captación (CAC), fulfillment, envío y tasa de devoluciones.",
        calculator: "ecommerce_margin"
      },
      questions: [
        {
          q: "Una tienda online tiene un ticket medio de 55 €, pero sus márgenes desaparecen al crecer las ventas. ¿Qué conjunto de costes suele subestimarse con mayor frecuencia en los Unit Economics del e-commerce?",
          options: [
            "Únicamente el coste del dominio web anual.",
            "Coste de adquisición de cliente (CAC), pasarela de pago, picking/packing (efulfillment), envío de última milla y el coste oculto de la tasa de devoluciones.",
            "Solo el diseño gráfico del logotipo.",
            "El alquiler de la sede central exclusivamente."
          ],
          correct: 1,
          explanation: "Muchos e-commerce parecen rentables en margen bruto de producto, pero pierden dinero por pedido al sumar CAC, logística directa y logística inversa."
        },
        {
          q: "¿Qué aporta principalmente un sistema de eProcurement a una pyme en transformación digital?",
          options: [
            "Vender productos directamente al consumidor final en redes sociales.",
            "Digitalizar solicitudes, catálogos homologados, flujos de aprobación, órdenes de compra y facturación electrónica para eliminar compras fuera de control ('maverick spend').",
            "Sustituir completamente al departamento comercial.",
            "Gestionar únicamente el envío de paquetes a domicilio."
          ],
          correct: 1,
          explanation: "El eProcurement aporta trazabilidad, cumplimiento de contratos homologados, reducción de errores de facturación y visibilidad del gasto."
        },
        {
          q: "¿Qué riesgo estratégico principal asume una marca que concentra el 90 % de sus ventas en un único marketplace externo?",
          options: [
            "Perder visibilidad inmediata en internet.",
            "Alta dependencia de cambios de algoritmo, subida de comisiones, falta de relación directa con los datos del cliente y riesgo de competencia del propio marketplace.",
            "Imposibilidad legal de vender en tienda física.",
            "Reducción automática de la velocidad de entrega."
          ],
          correct: 1,
          explanation: "Los marketplaces aceleran alcance y demanda, pero deben equilibrarse con canales propios (D2C) para proteger margen, marca y base de clientes."
        },
        {
          q: "¿Qué palanca reduce simultáneamente costes operativos, entregas fallidas y huella ambiental en la última milla urbana?",
          options: [
            "Ofrecer entregas en menos de 30 minutos gratis para cualquier pedido sin mínimo.",
            "Impulsar puntos de conveniencia / lockers (PUDO), consolidación de rutas y ventanas horarias comunicadas proactivamente.",
            "Realizar hasta cinco intentos de entrega domiciliaria sin avisar al destinatario.",
            "Enviar cada artículo del mismo pedido en cajas separadas."
          ],
          correct: 1,
          explanation: "Las entregas fallidas a domicilio disparan el coste de última milla; las redes PUDO/lockers y la consolidación optimizan densidad y sostenibilidad."
        },
        {
          q: "¿Qué caracteriza a una estructura o modelo de negocio exponencial frente a uno lineal tradicional?",
          options: [
            "Crecer contratando siempre el mismo porcentaje adicional de personal por cada nuevo cliente.",
            "Apalancarse en plataformas digitales, datos, automatización y efectos de red para escalar ingresos mucho más rápido que los costes marginales.",
            "Tener únicamente oficinas físicas en varios países.",
            "Vender siempre productos físicos de lujo."
          ],
          correct: 1,
          explanation: "Los efectos de red, los activos digitales reutilizables y la automatización desacoplan el crecimiento de los ingresos del crecimiento lineal de estructura."
        }
      ]
    },
    b07: {
      examTitle: "Examen de Certificación — Bloque 7: Transformación Digital",
      workshop: {
        title: "Taller Práctico 7: Mapa de Iniciativas de Transformación Digital y Ciberseguridad",
        subtitle: "Prioriza 1 caso de uso realista de automatización/IA/Cloud y define sus controles mínimos de seguridad y cumplimiento.",
        fields: [
          { id: "proceso", label: "Proceso crítico actual con cuello de botella", type: "text", placeholder: "Ej.: Gestión manual de facturas de proveedores y conciliación" },
          { id: "tecnologia", label: "Tecnologías seleccionadas (Cloud SaaS, RPA, IA, IoT, BI) y por qué", type: "textarea", placeholder: "OCR + RPA + BI en nube europea porque..." },
          { id: "riesgos_ciber", label: "3 controles esenciales de ciberseguridad (MFA, backups 3-2-1, accesos, etc.)", type: "textarea", placeholder: "1. MFA obligatorio... 2. Copias inmutables... 3. Formación anti-phishing..." },
          { id: "normativa", label: "Aspectos éticos o normativos a verificar (RGPD, AI Act, NIS2...)", type: "textarea", placeholder: "Verificar clasificación de riesgo y privacidad de datos antes del despliegue..." }
        ]
      },
      questions: [
        {
          q: "¿Cuál es la diferencia fundamental entre 'digitalizar un documento' y acometer una verdadera 'transformación digital'?",
          options: [
            "No existe diferencia: escanear papeles en PDF ya es transformación digital.",
            "La transformación digital rediseña procesos, modelos de relación con el cliente y cultura organizativa apoyándose en tecnología y datos, no solo replica procesos ineficientes en formato digital.",
            "La transformación digital consiste exclusivamente en comprar ordenadores nuevos.",
            "La transformación digital solo aplica a empresas nacidas en internet."
          ],
          correct: 1,
          explanation: "Digitalizar un proceso roto solo produce un proceso roto más rápido; transformar exige repensar el flujo de valor y la cultura de trabajo."
        },
        {
          q: "Una pyme industrial quiere implantar IA generativa para que su equipo técnico consulte manuales y garantías internas sin inventar respuestas ('alucinaciones'). ¿Qué patrón arquitectónico y buena práctica conviene evaluar?",
          options: [
            "Entrenar desde cero un modelo fundacional propio con millones de euros.",
            "Arquitectura RAG (generación aumentada por recuperación) sobre documentación verificada + supervisión humana ('human-in-the-loop') y control de privacidad.",
            "Subir contratos confidenciales a herramientas públicas gratuitas sin revisar términos.",
            "Sustituir inmediatamente a todo el servicio técnico sin pruebas piloto."
          ],
          correct: 1,
          explanation: "RAG ancla las respuestas en fuentes internas actualizadas, reduce alucinaciones y evita el altísimo coste de entrenar modelos desde cero."
        },
        {
          q: "En Cloud Computing, ¿qué diferencia operativa distingue a SaaS frente a IaaS?",
          options: [
            "En SaaS la empresa alquila infraestructura base y gestiona sistemas operativos; en IaaS solo usa software listo.",
            "En SaaS la pyme consume la aplicación lista por suscripción (mínima carga de mantenimiento); en IaaS gestiona servidores virtuales, sistema operativo y configuración sobre infraestructura del proveedor.",
            "IaaS siempre es gratuito y SaaS siempre requiere servidores locales.",
            "No hay diferencias de responsabilidad en seguridad entre ambos modelos."
          ],
          correct: 1,
          explanation: "El modelo de responsabilidad compartida cambia según IaaS, PaaS o SaaS; para la mayoría de pymes, SaaS acelera el despliegue y reduce carga operativa."
        },
        {
          q: "¿Cuándo tiene sentido real aplicar Blockchain en un proyecto empresarial frente a una base de datos tradicional?",
          options: [
            "En cualquier base de datos interna controlada por una sola empresa.",
            "Cuando múltiples organizaciones independientes necesitan compartir un registro verificable e inmutable de trazabilidad sin depender de un único intermediario central.",
            "Siempre que se quiera acelerar el rendimiento de consultas analíticas masivas.",
            "Para sustituir las copias de seguridad locales."
          ],
          correct: 1,
          explanation: "Si existe una única entidad de confianza, una base de datos relacional clásica es mucho más simple, barata y eficiente que blockchain."
        },
        {
          q: "Ante la amenaza de ransomware en una pyme, ¿qué combinación de medidas defensivas ofrece mayor reducción práctica del riesgo?",
          options: [
            "Confiar únicamente en un antivirus gratuito instalado hace tres años.",
            "Autenticación multifactor (MFA), principio de mínimo privilegio, copias de seguridad aisladas/inmutables probadas periódicamente (regla 3-2-1-1-0), parches al día y formación continua frente a phishing.",
            "Pagar siempre el rescate inmediatamente como único plan de continuidad.",
            "Desconectar indefinidamente el correo electrónico de la empresa."
          ],
          correct: 1,
          explanation: "La resiliencia frente a ransomware combina prevención de acceso (MFA + formación + parches) con recuperación garantizada mediante backups inmutables y probados."
        }
      ]
    },
    b08: {
      examTitle: "Examen de Certificación — Bloque 8: Cadena de Suministro",
      workshop: {
        title: "Taller Práctico 8: Diagnóstico de Supply Chain y Plan de Sostenibilidad",
        subtitle: "Evalúa puntos críticos de compras, almacén, devoluciones y logística verde en una operación física u omnicanal.",
        fields: [
          { id: "flujo", label: "Cuello de botella principal en tu cadena (compras, stock, almacén o transporte)", type: "text", placeholder: "Ej.: Roturas frecuentes en referencias A y alto error de picking" },
          { id: "stock", label: "Política de inventario propuesta (clasificación ABC y stock de seguridad)", type: "textarea", placeholder: "Referencias A con revisión continua y stock de seguridad calculado..." },
          { id: "inversa", label: "Medida para optimizar la logística inversa (devoluciones / reacondicionamiento)", type: "textarea", placeholder: "Motivos estructurados de devolución y circuito rápido de reacondicionamiento..." },
          { id: "verde", label: "2 acciones medibles de logística sostenible (embalaje, rutas, huella de carbono)", type: "textarea", placeholder: "1. Reducir volumen vacío en cajas... 2. Consolidar entregas en rutas..." }
        ]
      },
      questions: [
        {
          q: "¿Qué describe el 'efecto látigo' ('bullwhip effect') en una cadena de suministro?",
          options: [
            "La reducción automática de costes al comprar grandes lotes una vez al año.",
            "La amplificación progresiva de pequeñas variaciones en la demanda final a medida que se transmiten hacia atrás a distribuidores, fabricantes y proveedores, generando excesos de stock y roturas.",
            "El tiempo exacto que tarda un camión en descargar en muelle.",
            "La rotación rápida de personal en campañas de Black Friday."
          ],
          correct: 1,
          explanation: "Compartir datos reales de demanda (sell-out), reducir plazos de reposición y evitar pedidos especulativos por lotes gigantes mitiga el efecto látigo."
        },
        {
          q: "Al seleccionar un proveedor estratégico para una pyme, ¿por qué decidir únicamente por el precio unitario más bajo suele resultar contraproducente?",
          options: [
            "Porque no refleja el Coste Total de Propiedad (TCO): plazos de entrega, calidad/rechazos, flexibilidad, solvencia financiera y riesgo de parada operativa.",
            "Porque los contratos con proveedores más baratos son ilegales.",
            "Porque el precio unitario no influye nunca en el margen.",
            "Porque los departamentos de compras solo negocian plazos de pago."
          ],
          correct: 0,
          explanation: "Evaluar TCO y homologar proveedores con criterios de calidad, OTIF y riesgo evita costes ocultos por paradas, urgencias y reclamaciones."
        },
        {
          q: "En gestión de almacenes, ¿en qué consiste la operativa de 'cross-docking'?",
          options: [
            "Almacenar mercancía durante al menos seis meses como reserva estratégica.",
            "Transferir mercancía recibida directamente hacia los muelles de expedición con almacenamiento intermedio mínimo o nulo, acelerando el flujo y reduciendo coste de almacenaje.",
            "Contar el inventario completo una sola vez al final del año fiscal.",
            "Devolver automáticamente todos los palets incompletos al proveedor."
          ],
          correct: 1,
          explanation: "El cross-docking reduce manipulación, espacio ocupado y tiempos de ciclo cuando existe alta sincronización entre recepción y expedición."
        },
        {
          q: "¿Cuál es una de las claves operativas que explica el rendimiento logístico del modelo de Amazon?",
          options: [
            "Mantener todo el inventario en un único almacén central alejado de las ciudades.",
            "Inventario descentralizado apoyado en previsión predictiva de demanda, alta automatización del fulfillment, integración marketplace-logística (FBA) y control fino de última milla.",
            "Eliminar por completo las devoluciones de clientes.",
            "Evitar el uso de datos en la ubicación de referencias."
          ],
          correct: 1,
          explanation: "Acercar el inventario a la demanda prevista mediante datos, estandarización y automatización comprime radicalmente plazos y coste unitario."
        },
        {
          q: "En logística inversa y economía circular, ¿qué convierte una devolución de 'pérdida pura' en valor recuperable?",
          options: [
            "Destruir sistemáticamente todo producto devuelto sin inspeccionarlo.",
            "Clasificación ágil en recepción (triaje) para reventa inmediata, reacondicionamiento, despiece o reciclaje + análisis de causas raíz para reducir futuras devoluciones.",
            "Retrasar el reembolso al cliente durante varios meses.",
            "Ocultar el proceso de devolución en la tienda online."
          ],
          correct: 1,
          explanation: "Un circuito estructurado de triaje y análisis de motivos de devolución recupera margen y alimenta mejoras de producto, tallaje y embalaje."
        }
      ]
    },
    b09: {
      examTitle: "Examen de Certificación — Bloque 9: Big Data",
      workshop: {
        title: "Taller Práctico 9: Ficha de Proyecto Analítico Ágil (5 V + MVP de Datos)",
        subtitle: "Diseña un primer MVP analítico realizable en 60 días para una pyme, validando fuentes de datos, calidad y retorno esperado.",
        fields: [
          { id: "problema_dato", label: "Decisión de negocio que quieres mejorar con datos", type: "text", placeholder: "Ej.: Reducir roturas de stock en las 100 referencias clave" },
          { id: "cinco_v", label: "Análisis rápido de las 5 V (especialmente Veracidad y Valor)", type: "textarea", placeholder: "Volumen/Variedad: ERP + web | Riesgo de Veracidad: SKUs duplicados | Valor: ..." },
          { id: "mvp_datos", label: "Alcance del MVP vertical en 4-8 semanas y KPI de éxito", type: "textarea", placeholder: "Dashboard + alerta semanal de reposición para Top 100 SKUs; KPI: -25 % roturas..." },
          { id: "ia_uso", label: "Tipo de analítica o modelo de IA aplicable (descriptiva, predictiva, anomalías...)", type: "textarea", placeholder: "Modelo de previsión de demanda estacional con validación humana..." }
        ]
      },
      questions: [
        {
          q: "De las 5 V del Big Data (Volumen, Velocidad, Variedad, Veracidad y Valor), ¿cuál suele ser el principal freno real en una pyme antes de lanzar modelos predictivos?",
          options: [
            "No tener petabytes de datos en tiempo real.",
            "La Veracidad (datos duplicados, incompletos o inconsistentes entre sistemas) y la falta de definición clara del Valor de negocio esperado.",
            "El color corporativo de los cuadros de mando.",
            "Tener demasiados clientes fidelizados."
          ],
          correct: 1,
          explanation: "Aplicar analítica avanzada sobre datos sucios ('garbage in, garbage out') produce predicciones erróneas y destruye la confianza directiva."
        },
        {
          q: "¿Por qué fracasan con frecuencia los proyectos de Big Data ejecutados en cascada durante 12 meses sin entregas intermedias?",
          options: [
            "Porque no existe software capaz de almacenar datos históricos.",
            "Porque acumulan riesgo técnico y de negocio sin validar calidad real del dato ni utilidad con los usuarios hasta el final; un enfoque ágil con 'Data Spike' y MVP vertical valida valor en semanas.",
            "Porque el equipo de datos no debe hablar nunca con negocio.",
            "Porque los dashboards solo pueden construirse en hojas de cálculo."
          ],
          correct: 1,
          explanation: "Validar primero la disponibilidad/calidad de datos ('Data Spike') y entregar un MVP vertical sobre un caso de uso acotado multiplica el éxito."
        },
        {
          q: "¿Qué fenómeno ocurre cuando un modelo predictivo en producción empieza a perder precisión porque han cambiado los hábitos de compra o los precios respecto a los datos con los que fue entrenado?",
          options: [
            "Efecto red exponencial.",
            "Deriva de datos o del concepto ('data/concept drift'), que exige monitorización continua y reentrenamiento.",
            "Normalización relacional.",
            "Cross-docking analítico."
          ],
          correct: 1,
          explanation: "Los modelos de IA no son 'instalar y olvidar': requieren seguimiento de precisión, detección de deriva y gobernanza continua."
        },
        {
          q: "En un caso de uso de prevención de fraude en pedidos online, ¿qué coste empresarial provoca un modelo con demasiados 'falsos positivos'?",
          options: [
            "Bloquear compras legítimas de buenos clientes, generando frustración, pérdida directa de ventas y fuga hacia la competencia.",
            "Aumentar la velocidad de carga de la web.",
            "Eliminar la necesidad de cumplimiento RGPD.",
            "Reducir los costes de almacenamiento cloud."
          ],
          correct: 0,
          explanation: "Ajustar el umbral de decisión requiere equilibrar el coste del fraude no detectado (falso negativo) frente al coste de rechazar clientes buenos (falso positivo)."
        },
        {
          q: "Al priorizar casos de uso industriales de Big Data e IA (mantenimiento predictivo, previsión de demanda, optimización de rutas, eficiencia energética), ¿qué criterio debe mandar en la primera ola de una pyme?",
          options: [
            "Elegir la tecnología más mediática aunque no haya datos históricos recogidos.",
            "Combinar impacto económico cuantificable, disponibilidad real de datos de calidad y complejidad de implantación asumible (enfoque de victorias tempranas).",
            "Empezar siempre por el proyecto más caro y largo.",
            "Implantar los cinco casos de uso simultáneamente el primer mes."
          ],
          correct: 1,
          explanation: "Comenzar por un caso con datos ya disponibles y retorno claro genera caja, aprendizaje organizativo y respaldo para fases más ambiciosas."
        }
      ]
    },
    b10: {
      examTitle: "Examen de Certificación — Bloque 10: Gestión de Datos",
      workshop: {
        title: "Taller Práctico 10: Estrategia de Datos en Una Página (One-Page Data Strategy)",
        subtitle: "Cierra el programa conectando la gobernanza, calidad, privacidad y arquitectura de datos con los objetivos del Bloque 1.",
        fields: [
          { id: "objetivo_b1", label: "Objetivo estratégico de negocio (conectado con el Business Plan)", type: "text", placeholder: "Ej.: Aumentar un 15 % la recurrencia de clientes B2B en 12 meses" },
          { id: "gobernanza", label: "Dominio de dato crítico, Data Owner y 2 reglas de calidad", type: "textarea", placeholder: "Maestro de Clientes | Owner: Dir. Comercial | Reglas: CIF único y email verificado..." },
          { id: "privacidad", label: "Base de legitimación RGPD y medidas de minimización / retención", type: "textarea", placeholder: "Ejecución contractual / consentimiento explícito; borrado a los X años..." },
          { id: "arquitectura", label: "Arquitectura de almacenamiento proporcional y cultura data-driven", type: "textarea", placeholder: "Data Warehouse ligero en nube UE + copias 3-2-1 + comité mensual con KPIs..." }
        ]
      },
      questions: [
        {
          q: "¿Qué requisito es obligatorio verificar antes de reutilizar un conjunto de Open Data (datos abiertos) en un producto comercial de una empresa?",
          options: [
            "Ninguno, porque todo lo que está publicado en internet es de uso libre sin condiciones.",
            "Revisar su licencia de uso (por ejemplo, atribución, uso comercial permitido o 'share-alike'), su vigencia y la calidad/estructura del formato.",
            "Pagar siempre un canon mensual a la administración pública.",
            "Convertirlo manualmente a formato PDF escaneado."
          ],
          correct: 1,
          explanation: "Incluso los datos abiertos llevan licencias específicas (como CC BY o licencias nacionales) que regulan atribución y condiciones de reutilización."
        },
        {
          q: "¿Qué significa establecer una 'Fuente Única de Verdad' (SSOT) dentro de la gobernanza del dato?",
          options: [
            "Guardar todos los archivos de la empresa en un único documento de texto.",
            "Definir un repositorio maestro gobernado con definiciones estándar y responsables claros (Data Owner / Data Steward) para evitar cifras contradictorias entre departamentos.",
            "Impedir que dirección acceda a los datos operativos.",
            "Prohibir la integración entre ERP y CRM."
          ],
          correct: 1,
          explanation: "Sin SSOT ni diccionario de datos, Ventas y Finanzas llegan a las reuniones con cifras distintas de facturación o clientes activos."
        },
        {
          q: "Según los principios del RGPD (siempre sujetos a verificación normativa vigente con asesoría legal), ¿qué implica el principio de 'minimización de datos'?",
          options: [
            "Recoger todos los datos personales posibles 'por si en el futuro resultan útiles'.",
            "Recoger únicamente los datos adecuados, pertinentes y estrictamente limitados a la finalidad legítima para la que se tratan.",
            "Comprimir los archivos en formato ZIP antes de enviarlos por correo.",
            "Almacenar los datos personales sin plazo de supresión."
          ],
          correct: 1,
          explanation: "Recoger datos innecesarios aumenta la exposición legal y el impacto de una brecha de seguridad sin aportar valor real al negocio."
        },
        {
          q: "¿Qué diferencia práctica existe entre una base de datos transaccional (OLTP) y un Data Warehouse (OLAP)?",
          options: [
            "OLTP está optimizada para operaciones diarias rápidas (pedidos, facturas); el Data Warehouse consolida históricos de múltiples fuentes para análisis y reporting sin ralentizar la operativa.",
            "El Data Warehouse solo guarda vídeos y audios sin estructurar.",
            "OLTP únicamente funciona en papel y OLAP en la nube.",
            "Son exactamente sinónimos en arquitectura de datos."
          ],
          correct: 0,
          explanation: "Separar carga operativa (OLTP) de carga analítica (OLAP/Warehouse/Lakehouse) protege el rendimiento del ERP/e-commerce y habilita análisis históricos fiables."
        },
        {
          q: "¿Cómo combate una cultura 'data-driven' el denominado 'efecto HiPPO' (Highest Paid Person's Opinion)?",
          options: [
            "Eliminando el rol de la dirección general en la empresa.",
            "Respaldando las decisiones con hipótesis claras, KPIs compartidos con barandillas ('guardrails') y evidencia contrastada, en lugar de imponer la opinión del cargo de mayor jerarquía.",
            "Tomando decisiones únicamente por votación anónima sin mirar métricas.",
            "Evitando medir los resultados tras lanzar una iniciativa."
          ],
          correct: 1,
          explanation: "Una cultura madura del dato combina criterio directivo con evidencia rigurosa, métricas consensuadas y revisión honesta de resultados."
        }
      ]
    }
  }
};
