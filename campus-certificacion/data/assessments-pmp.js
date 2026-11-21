window.ASSESSMENTS_PMP = {
  passingScore: 70,
  blocks: {
    b01: {
      examTitle: "Examen Situacional PMP — Bloque 1: Fundamentos y Entrega de Valor",
      workshop: {
        title: "Taller Práctico 1: Mapa de Sistema de Entrega de Valor, EEFs/OPAs y Plan PMP",
        subtitle: "Clasifica iniciativas en proyecto/programa/portafolio, identifica EEFs y OPAs de tu organización y traza tu plan de estudio ECO.",
        fields: [
          { id: "iniciativa", label: "Iniciativa real de tu empresa: ¿es proyecto, programa, portafolio u operación? Justifícalo", type: "textarea", placeholder: "Es un proyecto temporal dentro de un programa de transformación..." },
          { id: "valor", label: "Resultado de valor esperado (más allá de plazo y presupuesto) y beneficios medibles", type: "textarea", placeholder: "Reducir tiempo de entrega en 20 % y aumentar retención de clientes..." },
          { id: "eef_opa", label: "2 EEFs (factores ambientales) y 2 OPAs (activos de procesos) que condicionan tu proyecto", type: "textarea", placeholder: "EEFs: regulación del sector, estructura matricial | OPAs: plantillas de acta, lecciones aprendidas..." },
          { id: "pmo", label: "Tipo de PMO (de apoyo, control o directiva) y papel del patrocinador / Product Owner", type: "textarea", placeholder: "PMO de control que audita gobernanza; patrocinador aprueba financiación..." }
        ]
      },
      questions: [
        {
          q: "Una empresa agrupa cuatro proyectos interdependientes de modernización logística que generan beneficios estratégicos conjuntos que no se lograrían gestionándolos por separado. ¿Qué estructura de dirección corresponde?",
          options: [
            "Una operación recurrente.",
            "Un programa.",
            "Un paquete de trabajo aislado.",
            "Un activo de los procesos de la organización (OPA)."
          ],
          correct: 1,
          explanation: "Un programa coordina proyectos y actividades relacionados para obtener beneficios y control que no estarían disponibles gestionándolos individualmente."
        },
        {
          q: "El director del proyecto encuentra plantillas históricas de actas de constitución, procedimientos de control de cambios y registros de lecciones aprendidas en la intranet corporativa. ¿Cómo se clasifican estos elementos?",
          options: [
            "Factores Ambientales de la Empresa (EEFs) externos.",
            "Activos de los Procesos de la Organización (OPAs).",
            "Restricciones regulatorias gubernamentales.",
            "Solicitudes de cambio aprobadas."
          ],
          correct: 1,
          explanation: "Las políticas, procedimientos, plantillas y bases de conocimiento histórico reutilizables son Activos de los Procesos de la Organización (OPAs)."
        },
        {
          q: "Un proyecto se entregó exactamente en la fecha límite y un 5 % por debajo del presupuesto, pero los usuarios finales se negaron a adoptar la herramienta y no se logró ningún beneficio comercial. Según el enfoque orientado al valor, ¿fue exitoso el proyecto?",
          options: [
            "Sí, porque cumplir plazo y presupuesto es el único criterio de éxito.",
            "No plenamente: el éxito moderno se evalúa por la entrega de resultados útiles y realización de beneficios para el negocio y el cliente, no solo por la triple restricción.",
            "Sí, porque los beneficios son responsabilidad exclusiva de marketing.",
            "No se puede evaluar hasta pasados diez años."
          ],
          correct: 1,
          explanation: "Los entregables sin adopción ni resultados de negocio no completan la entrega de valor del proyecto."
        },
        {
          q: "En el esquema orientativo del examen PMP (ECO — sujeto a verificación vigente en PMI.org), ¿cómo se distribuyen los tres grandes dominios de evaluación?",
          options: [
            "Inicio, Ejecución y Cierre a partes iguales.",
            "Personas, Procesos y Entorno empresarial (referencia ECO: Personas 33 %, Procesos 41 %, Entorno empresarial 26 %).",
            "Solo fórmulas matemáticas de Valor Ganado y Ruta Crítica.",
            "Exclusivamente ceremonias de Scrum."
          ],
          correct: 1,
          explanation: "El ECO agrupa las tareas evaluadas en Personas, Procesos y Entorno empresarial, abarcando enfoques predictivos, ágiles e híbridos."
        },
        {
          q: "Un director del proyecto trabaja en una organización donde los gerentes funcionales controlan los presupuestos y el personal, y el PM actúa principalmente como coordinador con baja autoridad formal. ¿Qué estructura organizacional describe mejor este caso?",
          options: [
            "Organización proyectizada.",
            "Organización matricial fuerte.",
            "Organización funcional o matricial débil.",
            "PMO directiva."
          ],
          correct: 2,
          explanation: "En estructuras funcionales y matriciales débiles la autoridad formal del PM es limitada, por lo que las habilidades de influencia y negociación son decisivas."
        }
      ]
    },
    b02: {
      examTitle: "Examen Situacional PMP — Bloque 2: Liderazgo, Principios y Ciclos de Vida",
      workshop: {
        title: "Taller Práctico 2: Selector de Ciclo de Vida y Diagnóstico de Principios",
        subtitle: "Justifica el ciclo de vida adecuado (predictivo, ágil o híbrido) y aplica los principios de calidad incorporada, valor y ética.",
        fields: [
          { id: "contexto", label: "Describe el proyecto y su nivel de incertidumbre en requisitos y tecnología", type: "textarea", placeholder: "Requisitos legales fijos en hardware + alta incertidumbre en interfaz de usuario..." },
          { id: "enfoque", label: "Enfoque de desarrollo elegido (predictivo, iterativo, incremental, ágil o híbrido) y cadencia de entrega", type: "textarea", placeholder: "Híbrido: predictivo en infraestructura + sprints de 2 semanas en app móvil..." },
          { id: "calidad", label: "2 prácticas concretas de 'calidad incorporada' (prevención) y 1 criterio de sostenibilidad", type: "textarea", placeholder: "Revisión entre pares y criterios de aceptación claros antes de construir; reducción de consumo energético..." },
          { id: "liderazgo", label: "Estilo de liderazgo predominante y cómo ejercerás influencia ética con stakeholders clave", type: "textarea", placeholder: "Liderazgo servicial con el equipo técnico y liderazgo colaborativo con directores funcionales..." }
        ]
      },
      questions: [
        {
          q: "Un proyecto tiene requisitos muy estables y regulados para la construcción física de un centro de datos, pero requisitos muy cambiantes y exploratorios para el portal digital de clientes. ¿Qué enfoque de desarrollo debería recomendar el director del proyecto?",
          options: [
            "Estrictamente predictivo para todo el proyecto para evitar cambios.",
            "Estrictamente ágil incluso para la obra civil regulada.",
            "Un enfoque híbrido: predictivo para la infraestructura regulada y ágil/iterativo para el portal digital.",
            "Dejar que cada subcontratista trabaje sin coordinación."
          ],
          correct: 2,
          explanation: "El enfoque híbrido combina la estabilidad predictiva donde los requisitos están claros con la adaptabilidad ágil donde existe incertidumbre."
        },
        {
          q: "¿Cuál es la diferencia fundamental entre 'áreas de enfoque / grupos de procesos' (Inicio, Planificación, Ejecución, Monitoreo y Control, Cierre) y las 'fases del ciclo de vida' de un proyecto?",
          options: [
            "Son exactamente lo mismo y siempre ocurren una sola vez en orden lineal estricto.",
            "Las áreas de enfoque son agrupaciones lógicas de trabajo que interactúan continuamente y pueden repetirse en cada fase o iteración del proyecto.",
            "El monitoreo y control solo ocurre después del cierre.",
            "Las fases del ciclo de vida no requieren cierre ni aprobación."
          ],
          correct: 1,
          explanation: "No deben confundirse los grupos de procesos con fases secuenciales únicas: en proyectos multifase o iterativos, las áreas de enfoque se repiten en cada fase."
        },
        {
          q: "Un miembro clave del equipo descubre que un entregable tiene un defecto oculto que el cliente probablemente no notaría hasta dentro de seis meses, y sugiere entregarlo hoy para no retrasar el hito. Según el liderazgo responsable y la ética profesional, ¿qué debe hacer el PM PRIMERO?",
          options: [
            "Entregarlo sin avisar para proteger la métrica de plazo del mes.",
            "Actuar con transparencia e integridad: evaluar el impacto técnico y de negocio del defecto junto al equipo y comunicar opciones honestas al patrocinador/cliente antes de entregar.",
            "Culpar al área de calidad en el informe mensual.",
            "Ignorar el aviso porque no consta en una solicitud de cambio."
          ],
          correct: 1,
          explanation: "La calidad incorporada y el liderazgo responsable anteponen la integridad, la transparencia y la prevención de fallos costosos al maquillaje de hitos."
        },
        {
          q: "Dentro de la esfera de influencia del director del proyecto, ¿qué tipo de poder tiende a generar mayor compromiso sostenible en equipos de alto conocimiento?",
          options: [
            "Poder coercitivo basado en sanciones constantes.",
            "Poder referente y experto combinado con liderazgo de servicio, influencia y comunicación transparente.",
            "Poder exclusivamente burocrático basado en escalar cada desacuerdo al comité.",
            "Evitar cualquier involucramiento con los interesados externos."
          ],
          correct: 1,
          explanation: "Aunque el poder formal otorga autoridad inicial, el poder experto y referente genera confianza duradera y colaboración genuina."
        },
        {
          q: "¿Qué significa aplicar el principio de 'pensamiento sistémico' (visión holística) en un proyecto?",
          options: [
            "Optimizar el coste de un departamento aunque eso retrase al resto del proyecto.",
            "Comprender el proyecto como un sistema interconectado donde un cambio en alcance, calidad, proveedor o equipo genera efectos cruzados en otros dominios y en la organización.",
            "Comprar un único software para toda la empresa.",
            "Eliminar la comunicación entre equipos para que no se distraigan."
          ],
          correct: 1,
          explanation: "La visión holística anticipa impactos secundarios y evita optimizaciones locales que perjudican el valor global."
        }
      ]
    },
    b03: {
      examTitle: "Examen Situacional PMP — Bloque 3: Dominios de Desempeño, Tailoring, IA y Adquisiciones",
      workshop: {
        title: "Taller Práctico 3: Matriz Make-or-Buy, Estrategia Contractual y Adopción Responsable de IA",
        subtitle: "Justifica una decisión de hacer o comprar, elige el tipo de contrato óptimo según el riesgo y fija reglas de uso ético de IA.",
        fields: [
          { id: "tailoring", label: "Qué procesos o controles adaptarías (tailoring) para un proyecto de tamaño medio sin caer en burocracia", type: "textarea", placeholder: "Simplificar control de cambios menores <2.000 €, reuniones quincenales de gobernanza..." },
          { id: "makebuy", label: "Análisis Hacer o Comprar (Make-or-Buy) de un componente clave (capacidad, coste, plazo y riesgo)", type: "textarea", placeholder: "Comprar módulo de integración a proveedor especializado porque internamente requeriría 6 meses..." },
          { id: "contrato", label: "Modelo contractual seleccionado (Precio Fijo, Coste Reembolsable o T&M) y cómo reparte el riesgo", type: "textarea", placeholder: "Precio Fijo con Incentivo por entrega anticipada porque el alcance está bien definido..." },
          { id: "ia_gov", label: "2 casos de uso útiles de IA en tu proyecto + 3 salvaguardas obligatorias (privacidad, sesgos, validación humana)", type: "textarea", placeholder: "Uso: resumir actas y detectar riesgos | Salvaguardas: anonimizar datos, revisión humana obligatoria..." }
        ]
      },
      questions: [
        {
          q: "Una empresa necesita contratar a un proveedor externo para investigar y desarrollar una solución innovadora cuyos requisitos aún no pueden definirse con precisión. ¿Qué modelo contractual suele ajustarse mejor (verificando siempre con asesoría legal)?",
          options: [
            "Precio Fijo Cerrado (FFP), porque el alcance es totalmente incierto.",
            "Coste Reembolsable o Tiempo y Materiales (T&M) con límites claros y revisiones por hitos, ya que el alcance aún evolucionará.",
            "Acuerdo verbal sin criterios de aceptación.",
            "Penalizar al proveedor por cada cambio de requisito solicitado por el comprador."
          ],
          correct: 1,
          explanation: "En alcance bien definido conviene Precio Fijo (riesgo de coste en el vendedor); cuando el alcance es incierto, Coste Reembolsable o T&M con techo controlado evita sobrecostes por contingencias excesivas."
        },
        {
          q: "Un miembro del equipo utiliza una herramienta pública de IA generativa para redactar el registro de riesgos pegando nombres de clientes confidenciales y datos financieros internos. ¿Cuál es el problema prioritario según la adopción responsable de IA?",
          options: [
            "Ninguno, porque la IA ahorra tiempo de redacción.",
            "Riesgo grave de fuga de confidencialidad y privacidad, además de la necesidad de gobernanza de herramientas autorizadas y validación humana de las salidas.",
            "Que la IA no puede escribir en español.",
            "Que los riesgos deben escribirse siempre a mano."
          ],
          correct: 1,
          explanation: "La adopción responsable de IA exige entornos autorizados, protección de datos confidenciales, control de sesgos y validación humana obligatoria."
        },
        {
          q: "¿Qué significa realizar correctamente la adaptación (*tailoring*) en dirección de proyectos?",
          options: [
            "Eliminar toda la documentación y controles para ir más rápido.",
            "Aplicar mecánicamente el 100 % de las plantillas corporativas sin importar el tamaño del proyecto.",
            "Seleccionar y ajustar deliberadamente el enfoque, procesos, herramientas y gobernanza al contexto, riesgo, tamaño y cultura del proyecto.",
            "Cambiar el alcance del proyecto sin aprobación del patrocinador."
          ],
          correct: 2,
          explanation: "El tailoring busca la gobernanza 'justa y suficiente': ni burocracia innecesaria ni falta de control ante riesgos altos."
        },
        {
          q: "En el análisis de los 7 dominios de desempeño (Gobernanza, Alcance, Cronograma, Finanzas, Interesados, Recursos y Riesgo), un cambio aprobado en Alcance casi siempre exige revisar inmediatamente:",
          options: [
            "Únicamente el logotipo del informe final.",
            "Cronograma, Finanzas (coste/presupuesto), Recursos, Riesgo y expectativas de Interesados, debido a la interdependencia entre dominios.",
            "Solo el dominio de Recursos Humanos.",
            "Ningún otro dominio, porque funcionan de forma aislada."
          ],
          correct: 1,
          explanation: "Los dominios de desempeño interactúan continuamente; evaluar el impacto cruzado es clave en escenarios PMP."
        },
        {
          q: "Al evaluar propuestas de varios licitadores durante una adquisición, ¿qué garantiza una selección objetiva, ética y defendible?",
          options: [
            "Elegir siempre la oferta más barata sin comprobar capacidad técnica ni referencias.",
            "Aplicar criterios ponderados de selección definidos previamente (técnicos, económicos, riesgo, plazos), evitar conflictos de interés y documentar la justificación.",
            "Compartir la oferta económica de un proveedor con su competidor favorito para que la mejore.",
            "Cambiar los criterios después de abrir los sobres para favorecer a un conocido."
          ],
          correct: 1,
          explanation: "Criterios objetivos previos, trato equitativo y transparencia protegen la ética y la calidad de la contratación."
        }
      ]
    },
    b04: {
      examTitle: "Examen Situacional PMP — Bloque 4: Fundamentos Ágiles, Producto y Entorno de Equipo",
      workshop: {
        title: "Taller Práctico 4: Acuerdos de Equipo (Team Charter) y Filtro de Idoneidad Ágil",
        subtitle: "Diseña el acuerdo de colaboración para un equipo ágil híbrido y define acciones concretas de seguridad psicológica.",
        fields: [
          { id: "idoneidad", label: "Evaluación rápida de idoneidad (cultura, equipo y proyecto): ¿listo para ágil puro o transición híbrida?", type: "textarea", placeholder: "Alta incertidumbre técnica pero cultura jerárquica -> iniciar piloto híbrido con sprints de 2 semanas..." },
          { id: "acuerdos", label: "5 reglas clave del Acuerdo de Equipo (Working Agreement) para colaboración remota/híbrida", type: "textarea", placeholder: "1. Horario core 10-14 h | 2. Decisiones documentadas en tablero | 3. Definición de Hecho (DoD)..." },
          { id: "seguridad", label: "2 acciones concretas del líder servicial para fortalecer la seguridad psicológica", type: "textarea", placeholder: "Retrospectivas sin culpas ('blameless post-mortems') y reconocer abiertamente aprendizajes de errores..." },
          { id: "roles", label: "Delimitación de roles (Product Owner vs. Facilitador/Scrum Master vs. Equipo) para evitar solapes", type: "textarea", placeholder: "PO prioriza el Qué/Valor; Equipo decide el Cómo; Facilitador remueve impedimentos..." }
        ]
      },
      questions: [
        {
          q: "Durante una retrospectiva, un desarrollador permanece callado aunque detectó un problema técnico grave, porque la semana pasada otro compañero fue reprendido en público por cometer un error. ¿Qué carencia crítica debe abordar primero el líder servicial?",
          options: [
            "Falta de herramientas de gestión de tickets.",
            "Falta de seguridad psicológica en el equipo, que impide transparentar riesgos, errores y desacuerdos a tiempo.",
            "Exceso de autonomía técnica.",
            "Falta de estimación en horas exactas."
          ],
          correct: 1,
          explanation: "Sin seguridad psicológica, los equipos ocultan problemas hasta que estallan en producción; el líder servicial modela apertura y aprendizaje sin culpas."
        },
        {
          q: "Un patrocinador entra directamente a la sala del equipo ágil a mitad de iteración y ordena a un programador añadir una nueva funcionalidad urgente. ¿Cuál es la intervención más adecuada del líder servicial / Scrum Master?",
          options: [
            "Aceptar el cambio en silencio para no incomodar al patrocinador.",
            "Proteger al equipo de interrupciones no gestionadas y canalizar la necesidad a través del Product Owner para que la priorice en el backlog según su valor frente al trabajo actual.",
            "Cancelar inmediatamente el proyecto.",
            "Pedir al equipo que trabaje todo el fin de semana sin informar al Product Owner."
          ],
          correct: 1,
          explanation: "El Product Owner es responsable de maximizar el valor y priorizar el backlog; proteger el foco de la iteración evita caos y deuda técnica."
        },
        {
          q: "¿Qué describe mejor a un profesional con perfil en 'T' (*T-shaped* o especialista generalista) dentro de un equipo ágil multifuncional?",
          options: [
            "Alguien que solo acepta realizar una única tarea muy específica y se detiene si no hay trabajo de su especialidad.",
            "Un profesional con profunda especialización en un área (barra vertical) y conocimientos suficientes en áreas complementarias (barra horizontal) para colaborar y aliviar cuellos de botella.",
            "Un director que supervisa diez proyectos a la vez.",
            "Un consultor externo contratado únicamente para auditar."
          ],
          correct: 1,
          explanation: "Los perfiles T-shaped aumentan la resiliencia del equipo, reducen esperas por transferencia y mejoran la colaboración multidisciplinar."
        },
        {
          q: "¿Cuál es la diferencia fundamental entre la gestión de productos y la gestión de proyectos?",
          options: [
            "No existe ninguna diferencia práctica.",
            "Un proyecto es un esfuerzo temporal con principio y fin para crear un resultado; un producto tiene un ciclo de vida continuo que evoluciona mientras siga aportando valor a clientes y negocio.",
            "Los proyectos solo existen en construcción y los productos solo en software.",
            "La gestión de productos no utiliza métricas de valor."
          ],
          correct: 1,
          explanation: "Comprender el ciclo continuo del producto evita abandonar la solución tras la primera entrega y conecta los proyectos con el valor sostenido."
        },
        {
          q: "Un equipo realiza todas las ceremonias de Scrum puntualmente pero no entrega valor utilizable al cliente ni adapta nada tras las revisiones. ¿Qué antipatrón ágil está ocurriendo?",
          options: [
            "Agilidad de alto rendimiento.",
            "Reducir la agilidad a rituales mecánicos ('hacer ágil' por cumplir ceremonias) sin adoptar la mentalidad de entrega de valor, retroalimentación y adaptación continua.",
            "Exceso de Lean Startup.",
            "Seguridad psicológica excesiva."
          ],
          correct: 1,
          explanation: "La agilidad es una mentalidad orientada a valor, aprendizaje temprano y adaptación, no una lista rígida de reuniones."
        }
      ]
    },
    b05: {
      examTitle: "Examen Situacional PMP — Bloque 5: Entrega Ágil, Métricas y Agilidad Organizacional",
      workshop: {
        title: "Taller Práctico 5: Diseño de Tablero de Métricas Ágiles (Flujo, GQM y OKR)",
        subtitle: "Define el backlog priorizado, límites WIP y métricas de flujo/valor evitando antipatrones como comparar velocidad entre equipos.",
        fields: [
          { id: "backlog", label: "3 historias de usuario priorizadas por valor con sus criterios de aceptación (DoD)", type: "textarea", placeholder: "Como [rol] quiero [funcionalidad] para [valor] | Criterios de aceptación: ..." },
          { id: "flujo", label: "Columnas de tu tablero Kanban, límite WIP propuesto y cómo medirás Lead Time / Cycle Time", type: "textarea", placeholder: "Por hacer -> Análisis (WIP 3) -> Desarrollo (WIP 4) -> Pruebas (WIP 2) -> Hecho..." },
          { id: "metricas_valor", label: "Conexión GQM / OKR: 1 Objetivo de negocio y 2 métricas reales de impacto (evitando vanity metrics)", type: "textarea", placeholder: "O: Reducir abandono en alta digital | KR1: bajar Lead Time de 14 a 5 días | KR2: +20 % activación..." },
          { id: "escalamiento", label: "Si escalaras a 4 equipos sobre un mismo producto, ¿qué mecanismo usarías para coordinar dependencias?", type: "textarea", placeholder: "Scrum de Scrums semanal + tablero de dependencias + sincronización de revisiones..." }
        ]
      },
      questions: [
        {
          q: "Un director ejecutivo compara dos equipos Scrum y felicita al Equipo A porque completa 60 puntos de historia por sprint frente a los 30 puntos del Equipo B, exigiendo al Equipo B doblar su velocidad. ¿Por qué es errónea esta práctica?",
          options: [
            "Porque los puntos de historia son medidas relativas propias de cada equipo; comparar velocidad entre equipos distintos carece de validez y suele provocar inflación artificial de puntos y caída de calidad.",
            "Porque 30 puntos siempre valen más dinero que 60 puntos.",
            "Porque la velocidad solo se calcula al cerrar el año fiscal.",
            "Porque Scrum prohíbe medir cualquier avance."
          ],
          correct: 0,
          explanation: "La velocidad sirve para que un mismo equipo pronostique su propia capacidad futura, nunca como métrica comparativa de productividad entre equipos."
        },
        {
          q: "En un Diagrama de Flujo Acumulativo (CFD), la banda correspondiente a la columna 'En Pruebas (QA)' se ensancha cada semana mientras 'Terminado' crece muy despacio. ¿Qué indica visualmente este patrón?",
          options: [
            "Flujo perfectamente equilibrado.",
            "Un cuello de botella y acumulación de trabajo en curso (WIP) en la etapa de pruebas, que está incrementando el Cycle Time.",
            "Que el equipo ha terminado el proyecto antes de tiempo.",
            "Que no hay historias nuevas en el backlog."
          ],
          correct: 1,
          explanation: "El ensanchamiento sostenido de una banda en un CFD señala acumulación de WIP y alerta para limitar entradas y aliviar el cuello de botella."
        },
        {
          q: "¿Qué diferencia práctica existe entre un gráfico *Burndown* y un gráfico *Burnup* de liberación?",
          options: [
            "El Burndown muestra el trabajo restante por completar; el Burnup separa visualmente el trabajo completado y la línea de alcance total, haciendo explícitos los aumentos de alcance (*scope creep*).",
            "El Burnup solo se usa en proyectos predictivos de obra civil.",
            "El Burndown mide euros y el Burnup mide horas extra.",
            "Ambos muestran exactamente la misma línea sin mostrar cambios de alcance."
          ],
          correct: 0,
          explanation: "El gráfico Burnup es muy valioso ante patrocinadores porque muestra si el retraso viene de baja entrega o de que se ha añadido alcance nuevo."
        },
        {
          q: "¿Cuál es la diferencia esencial entre *Lead Time* y *Cycle Time* en un flujo Kanban?",
          options: [
            "Son exactamente el mismo intervalo en todos los casos.",
            "Lead Time mide desde que el cliente realiza la petición hasta la entrega final; Cycle Time mide desde que el equipo empieza a trabajar activamente en el elemento hasta que queda terminado.",
            "Cycle Time incluye el tiempo de espera antes de empezar y Lead Time no.",
            "Solo se aplican a fábricas de automóviles."
          ],
          correct: 1,
          explanation: "Lead Time refleja la experiencia total de espera del cliente; Cycle Time mide la velocidad interna de ejecución del equipo."
        },
        {
          q: "Al escalar prácticas ágiles a múltiples equipos que construyen un producto complejo, ¿qué papel cumplen marcos como Scrum de Scrums, LeSS, SAFe o Disciplined Agile?",
          options: [
            "Eliminar la necesidad de entrega incremental.",
            "Coordinar dependencias entre equipos, alinear visión estratégica de portafolio y mantener la integración frecuente de incrementos sin perder agilidad.",
            "Sustituir todas las retrospectivas por informes anuales.",
            "Imponer un único tamaño de equipo de 80 personas en una sola reunión diaria."
          ],
          correct: 1,
          explanation: "Los marcos de escalamiento aportan sincronización y alineación entre equipos manteniendo equipos pequeños y autónomos."
        }
      ]
    },
    b06: {
      examTitle: "Examen Situacional PMP — Bloque 6: Procesos, Inicio y Planificación de Alcance",
      workshop: {
        title: "Taller Práctico 6: Acta de Constitución, Registro de Interesados y EDT/WBS",
        subtitle: "Redacta los 3 artefactos nucleares de Inicio y Planificación de Alcance (Acta, Interesados y descomposición EDT con exclusiones).",
        fields: [
          { id: "acta", label: "Acta de Constitución resumida (propósito, objetivos medibles, hitos, presupuesto preliminar y autoridad del PM)", type: "textarea", placeholder: "Propósito: ... | Objetivo: ... | Presupuesto: 85.000 € | Autoridad PM: asignar recursos y aprobar cambios <3.000 €..." },
          { id: "interesados", label: "Registro inicial de 3 interesados clave (Poder/Interés, expectativa y estrategia inicial)", type: "textarea", placeholder: "1. CFO (Alto poder/Alto interés): gestionar de cerca con foco en ROI..." },
          { id: "exclusiones", label: "Declaración de alcance: 3 entregables incluidos y 2 exclusiones explícitas", type: "textarea", placeholder: "Incluye: portal web, migración 2 años, formación | Excluye: app nativa iOS y migración histórica >5 años..." },
          { id: "edt", label: "Descomposición EDT/WBS en 3 niveles (entregables principales -> paquetes de trabajo)", type: "textarea", placeholder: "1.0 Proyecto -> 1.1 Diseño (1.1.1 Prototipo, 1.1.2 Validación) -> 1.2 Implantación -> 1.3 Cierre..." }
        ]
      },
      questions: [
        {
          q: "¿Cuál es el documento que autoriza formalmente la existencia de un proyecto y otorga al director del proyecto autoridad para asignar recursos organizacionales a las actividades?",
          options: [
            "El registro de incidentes.",
            "El Acta de Constitución del Proyecto (*Project Charter*).",
            "El diccionario de la EDT.",
            "El informe de lecciones aprendidas."
          ],
          correct: 1,
          explanation: "El Acta de Constitución (emitida por el patrocinador) legitima el proyecto y formaliza la autoridad del PM desde el inicio."
        },
        {
          q: "Durante el desarrollo del proyecto, un interesado de alto poder e influencia que no fue identificado en el inicio exige rediseñar una parte central del entregable. ¿Qué fallo de proceso originó este problema?",
          options: [
            "No haber aplicado Fórmula de Valor Ganado el primer día.",
            "Identificación incompleta de interesados y falta de involucramiento temprano desde la fase de Inicio.",
            "Haber definido exclusiones explícitas en el enunciado del alcance.",
            "Haber utilizado una matriz de trazabilidad de requisitos."
          ],
          correct: 1,
          explanation: "Identificar tarde a interesados clave es una de las mayores fuentes de retrabajo, cambios tardíos y conflictos."
        },
        {
          q: "¿Qué garantiza la 'regla del 100 %' al construir la Estructura de Desglose del Trabajo (EDT / WBS)?",
          options: [
            "Que el 100 % del equipo trabajará horas extra.",
            "Que la EDT incluye el 100 % del trabajo definido en el alcance del proyecto (incluyendo gestión del proyecto) y nada fuera de ese alcance.",
            "Que el presupuesto nunca puede variar.",
            "Que cada paquete de trabajo dura exactamente 100 horas."
          ],
          correct: 1,
          explanation: "La regla del 100 % asegura completitud jerárquica: lo que no está en la EDT queda fuera del alcance del proyecto."
        },
        {
          q: "¿Qué tres elementos componen la Línea Base del Alcance (*Scope Baseline*) en un enfoque predictivo?",
          options: [
            "Acta de constitución, presupuesto y cronograma.",
            "Enunciado del alcance del proyecto, Estructura de Desglose del Trabajo (EDT/WBS) y Diccionario de la EDT.",
            "Matriz RACI, plan de comunicaciones y registro de riesgos.",
            "Solo el listado de historias de usuario sin criterios de aceptación."
          ],
          correct: 1,
          explanation: "La Línea Base del Alcance integra el Enunciado del Alcance, la EDT/WBS y el Diccionario de la EDT, y solo cambia mediante control formal de cambios."
        },
        {
          q: "¿Para qué sirve principalmente la Matriz de Trazabilidad de Requisitos (RTM)?",
          options: [
            "Para calcular las nóminas del equipo técnico.",
            "Para vincular cada requisito desde su origen y objetivo de negocio hasta los entregables de la EDT y casos de prueba, asegurando que todo requisito aporta valor y es verificado.",
            "Para sustituir el acta de constitución.",
            "Para listar los riesgos externos del mercado."
          ],
          correct: 1,
          explanation: "La RTM evita construir requisitos huérfanos sin valor de negocio y facilita verificar qué requisitos han sido aceptados."
        }
      ]
    },
    b07: {
      examTitle: "Examen Situacional PMP — Bloque 7: Planificación de Cronograma, Finanzas, Personas y Riesgos",
      workshop: {
        title: "Taller Práctico 7: Calculadora PERT (3 Valores) y Valor Monetario Esperado (EMV)",
        subtitle: "Calcula duraciones/costes PERT con desviación estándar y cuantifica la exposición monetaria de riesgos para dimensionar contingencia.",
        calculator: "pert_emv"
      },
      questions: [
        {
          q: "Para una actividad crítica, el equipo estima: Optimista (O) = 6 días, Más probable (M) = 9 días y Pesimista (P) = 18 días. Aplicando estimación PERT (distribución Beta: `(O + 4M + P) / 6`), ¿cuál es la duración esperada y su desviación estándar `(P - O) / 6`?",
          options: [
            "Duración esperada = 11 días; desviación estándar = 3 días.",
            "Duración esperada = 10 días; desviación estándar = 2 días.",
            "Duración esperada = 9 días; desviación estándar = 1 día.",
            "Duración esperada = 12 días; desviación estándar = 4 días."
          ],
          correct: 1,
          explanation: "PERT Beta = (6 + 4×9 + 18) / 6 = 60 / 6 = 10 días. Desviación estándar σ = (18 - 6) / 6 = 2 días."
        },
        {
          q: "El proyecto lleva retraso y necesitas comprimir el cronograma SIN cambiar el alcance. Decides ejecutar en paralelo dos fases que normalmente serían secuenciales (aumentando el riesgo de retrabajo). ¿Qué técnica de compresión estás aplicando?",
          options: [
            "Intensificación (*Crashing*).",
            "Ejecución rápida (*Fast Tracking*).",
            "Nivelación de recursos (*Resource Leveling*).",
            "Planificación gradual (*Rolling Wave*)."
          ],
          correct: 1,
          explanation: "Fast Tracking solapa actividades secuenciales (sube riesgo/retrabajo); Crashing añade recursos a actividades críticas (sube coste)."
        },
        {
          q: "¿Cuál es la diferencia clave entre la Reserva de Contingencia y la Reserva de Gestión al desarrollar el presupuesto?",
          options: [
            "La Reserva de Contingencia cubre riesgos identificados ('conocidos-desconocidos') y forma parte de la Línea Base de Costes; la Reserva de Gestión cubre imprevistos no identificados ('desconocidos-desconocidos') y queda fuera de la línea base (requiere aprobación para usarla).",
            "Ambas son idénticas y el PM puede gastar la reserva de gestión libremente sin autorización.",
            "La reserva de contingencia nunca se incluye en la línea base de costes.",
            "La reserva de gestión sustituye el presupuesto de mano de obra."
          ],
          correct: 0,
          explanation: "Línea Base de Costes = Estimaciones + Reserva de Contingencia; Presupuesto Total = Línea Base de Costes + Reserva de Gestión."
        },
        {
          q: "Un equipo de proyecto pasa de 5 personas a 8 personas (incluyendo al PM). Aplicando la fórmula de canales potenciales de comunicación `n(n - 1) / 2`, ¿cuántos canales NUEVOS se añaden?",
          options: [
            "3 canales nuevos.",
            "18 canales nuevos (pasa de 10 a 28 canales).",
            "28 canales nuevos.",
            "10 canales nuevos."
          ],
          correct: 1,
          explanation: "Con 5 personas: 5×4/2 = 10 canales. Con 8 personas: 8×7/2 = 28 canales. Incremento = 28 - 10 = 18 canales nuevos."
        },
        {
          q: "Identificas una amenaza grave de incumplimiento de un componente crítico y decides contratar un seguro o trasladar la responsabilidad financiera a un proveedor especializado mediante contrato. ¿Qué estrategia de respuesta a amenazas estás aplicando?",
          options: [
            "Evitar (*Avoid*).",
            "Transferir (*Transfer*).",
            "Explotar (*Exploit*).",
            "Aceptar pasivamente (*Accept*)."
          ],
          correct: 1,
          explanation: "Transferir traslada el impacto financiero de una amenaza a un tercero (seguros, fianzas, contratos), aunque no elimina el riesgo por completo."
        }
      ]
    },
    b08: {
      examTitle: "Examen Situacional PMP — Bloque 8: Ejecución, Control de Cambios y Valor Ganado (EVM)",
      workshop: {
        title: "Taller Práctico 8: Calculadora Completa de Gestión del Valor Ganado (EVM)",
        subtitle: "Introduce BAC, PV, EV y AC para calcular automáticamente CV, SV, CPI, SPI, EAC, ETC, VAC y TCPI con diagnóstico ejecutivo.",
        calculator: "evm_calc"
      },
      questions: [
        {
          q: "Un proyecto tiene PV = 100.000 €, EV = 80.000 € y AC = 100.000 €. Calculando `CPI = EV / AC` y `SPI = EV / PV`, ¿cuál es el estado exacto del proyecto?",
          options: [
            "Adelantado en cronograma y por debajo del presupuesto.",
            "CPI = 0,80 y SPI = 0,80: el proyecto está simultáneamente sobrecosteado (sobre presupuesto) y retrasado respecto al cronograma.",
            "CPI = 1,25 y SPI = 1,00: está exactamente en presupuesto.",
            "Solo está retrasado pero exactamente dentro del presupuesto."
          ],
          correct: 1,
          explanation: "Tanto CPI (80k/100k = 0,80) como SPI (80k/100k = 0,80) son menores que 1,0, indicando sobrecoste y retraso al mismo tiempo."
        },
        {
          q: "Un cliente solicita por teléfono un cambio importante en el alcance durante la ejecución. ¿Cuál es el PRIMER paso correcto según el Control Integrado de Cambios?",
          options: [
            "Ordenar al equipo que lo implemente hoy mismo para mantener contento al cliente.",
            "Rechazar el cambio inmediatamente sin analizarlo.",
            "Documentar la solicitud formalmente y evaluar su impacto integral en alcance, cronograma, costes, calidad y riesgos antes de llevarla al Comité de Control de Cambios (CCB).",
            "Modificar directamente la línea base sin avisar al patrocinador."
          ],
          correct: 2,
          explanation: "Regla de oro PMP: nunca implementar un cambio sobre líneas base sin documentarlo, evaluar su impacto integral y obtener la aprobación correspondiente."
        },
        {
          q: "¿Cuál es la diferencia clave entre 'Controlar la Calidad' y 'Validar el Alcance' en Monitoreo y Control?",
          options: [
            "Son el mismo proceso con nombres distintos.",
            "Controlar la Calidad verifica internamente que el entregable cumple los requisitos técnicos sin defectos (corrección); Validar el Alcance obtiene la aceptación formal del cliente/patrocinador.",
            "Validar el Alcance siempre ocurre antes de producir el entregable.",
            "Controlar la Calidad lo realiza únicamente el cliente externo."
          ],
          correct: 1,
          explanation: "Primero se controla la calidad (generando entregables verificados) y luego se valida el alcance con el cliente (generando entregables aceptados)."
        },
        {
          q: "Con BAC = 200.000 €, EV = 100.000 € y AC = 125.000 € (CPI = 0,80), si supones que las variaciones actuales de eficiencia en costes continuarán al mismo ritmo hasta el final (`EAC = BAC / CPI`), ¿cuál es el coste total estimado al finalizar (EAC)?",
          options: [
            "200.000 €.",
            "225.000 €.",
            "250.000 €.",
            "160.000 €."
          ],
          correct: 2,
          explanation: "Bajo el supuesto de variación típica (continúa el rendimiento actual): EAC = 200.000 / 0,80 = 250.000 €."
        },
        {
          q: "Dos miembros sénior del equipo discrepan fuertemente sobre la arquitectura técnica y la tensión frena el sprint. ¿Qué enfoque de resolución de conflictos recomienda priorizar la dirección de proyectos moderna para una solución duradera?",
          options: [
            "Imponer arbitrariamente una decisión sin escuchar argumentos (Forzar) siempre en primera instancia.",
            "Ignorar el conflicto esperando que desaparezca solo (Retirarse).",
            "Facilitar una sesión de Colaboración / Resolución de problemas enfocada en datos, objetivos del proyecto y criterios técnicos para construir consenso duradero.",
            "Escalar inmediatamente el conflicto a Recursos Humanos para sancionarlos."
          ],
          correct: 2,
          explanation: "Colaborar / Resolver problemas aborda la causa de fondo y produce soluciones ganar-ganar con alto compromiso del equipo."
        }
      ]
    },
    b09: {
      examTitle: "Examen Situacional PMP — Bloque 9: Cierre del Proyecto y Preparación Integral PMP",
      workshop: {
        title: "Taller Práctico 9: Acta de Cierre, Transferencia a Operaciones y Bitácora de Errores PMP",
        subtitle: "Completa el protocolo profesional de cierre de proyecto y tu plan final de preparación ante el examen oficial PMP.",
        fields: [
          { id: "cierre", label: "Checklist de cierre formal (aceptación del cliente, cierre de contratos, informe final y liberación de recursos)", type: "textarea", placeholder: "1. Acta de aceptación firmada | 2. Liquidación con proveedores | 3. Traspaso a soporte..." },
          { id: "handover", label: "Plan de transferencia a operaciones (handover): documentación, formación y periodo de soporte inicial", type: "textarea", placeholder: "Manuales operativos, 2 sesiones de formación a operaciones y 15 días de hypercare..." },
          { id: "mindset", label: "3 principios del 'mindset PMP' que aplicarás al leer preguntas situacionales de examen", type: "textarea", placeholder: "1. Analizar causa raíz antes de actuar | 2. No escalar al sponsor sin proponer opciones | 3. Seguir control de cambios..." },
          { id: "plan_pmp", label: "Tu plan personal de simulacros, registro de errores por dominio ECO y verificación de requisitos en PMI.org", type: "textarea", placeholder: "3 simulacros cronometrados (>75 % sostenido), registro de fallos por causa, validar requisitos en PMI.org..." }
        ]
      },
      questions: [
        {
          q: "Un proyecto es cancelado anticipadamente por el patrocinador al 60 % de avance debido a un cambio regulatorio del mercado. ¿Qué debe hacer el director del proyecto a continuación?",
          options: [
            "Abandonar inmediatamente el proyecto sin documentar nada para ahorrar costes.",
            "Ejecutar los procedimientos formales de cierre: documentar la causa de cancelación, transferir entregables utilizables, cerrar contratos, capturar lecciones aprendidas y liberar ordenadamente los recursos.",
            "Continuar gastando el 40 % restante del presupuesto para terminar los entregables.",
            "Borrar el repositorio de documentos porque el proyecto no llegó al 100 %."
          ],
          correct: 1,
          explanation: "Incluso en cancelación anticipada es obligatorio ejecutar el cierre formal para proteger activos, contratos y aprendizaje organizativo."
        },
        {
          q: "En el cierre administrativo de un proyecto completado con éxito, ¿cuál es el orden lógico correcto antes de liberar definitivamente al equipo del proyecto?",
          options: [
            "Liberar al equipo primero y pedir la aceptación del cliente tres meses después.",
            "Confirmar validación/aceptación formal de entregables, completar transferencia a operaciones, cerrar adquisiciones, consolidar informe final y lecciones aprendidas, y entonces liberar formalmente los recursos.",
            "Cerrar únicamente la contabilidad ignorando las lecciones aprendidas.",
            "Dejar abiertos los contratos de proveedores por si surgen nuevas ideas."
          ],
          correct: 1,
          explanation: "Liberar al equipo es uno de los últimos pasos del cierre, tras asegurar aceptación, transferencia, archivo y cierre administrativo/contractual."
        },
        {
          q: "En una pregunta situacional del examen PMP, el enunciado describe un problema nuevo reportado por un interesado. Tres opciones proponen acciones drásticas inmediatas (cambiar presupuesto, escalar al patrocinador, despedir a un proveedor) y una cuarta propone 'revisar el plan/registro correspondiente y reunirse con el interesado para analizar el impacto'. ¿Cuál refleja el *mindset* PMP?",
          options: [
            "Escalar siempre primero al patrocinador.",
            "Evaluar, analizar la causa/impacto y revisar planes/registros junto a las partes implicadas antes de ejecutar acciones correctivas o cambios formales.",
            "Despedir al proveedor de inmediato.",
            "Cambiar el presupuesto sin aprobación."
          ],
          correct: 1,
          explanation: "El mindset PMP prioriza el liderazgo proactivo, el análisis basado en hechos, la colaboración y el respeto a los procesos de gobernanza antes de acciones reactivas."
        },
        {
          q: "¿Cuál es la forma más efectiva de aprovechar los simulacros de examen PMP (como rondas de 60 preguntas) para mejorar tu probabilidad de aprobar?",
          options: [
            "Hacer miles de preguntas rápido mirando solo el porcentaje final sin revisar los fallos.",
            "Registrar sistemáticamente cada error (dominio ECO, enfoque predictivo/ágil y causa del fallo), entender por qué los distractores son incorrectos y reforzar las áreas débiles.",
            "Memorizar respuestas literales sin comprender el razonamiento situacional.",
            "Estudiar únicamente definiciones evitando preguntas de escenarios."
          ],
          correct: 1,
          explanation: "El análisis razonado de errores y distractores entrena el criterio situacional exigido por el examen PMP."
        },
        {
          q: "Al completar este curso de preparación PMP y obtener su certificado de finalización en la plataforma, ¿qué afirmación es rigurosa y correcta respecto a la acreditación oficial de PMI?",
          options: [
            "El certificado del curso otorga automáticamente el título oficial PMP® sin necesidad de examen.",
            "El certificado de finalización acredita la formación completada en esta plataforma, pero NO equivale a la certificación PMP® oficial; el aspirante debe verificar requisitos de experiencia, horas de formación y el ECO vigente directamente en PMI y aprobar el examen oficial.",
            "Una vez terminado el curso, nunca es necesario renovar PDUs ni consultar PMI.org.",
            "La membresía en PMI sustituye al examen PMP."
          ],
          correct: 1,
          explanation: "Transparencia profesional total: la formación prepara y respalda las horas formativas, pero la certificación PMP® solo la otorga PMI tras validar solicitud y superar el examen oficial."
        }
      ]
    }
  }
};
