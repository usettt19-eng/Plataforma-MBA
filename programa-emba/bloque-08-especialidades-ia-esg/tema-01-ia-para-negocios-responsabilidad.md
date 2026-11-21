# Tema 1. Artificial Intelligence for Business y Responsabilidad Algorítmica

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Artificial Intelligence for Business y Responsabilidad Algorítmica |
| **Bloque y posición dentro del programa** | Bloque 8: Especialidades (*Majors*), concentraciones e impacto — Tema 1 de 3 (Tema 24 de 26 del Executive MBA) |
| **Duración recomendada** | 4 horas (240 minutos lectivos) |
| **Público objetivo** | Directivos con experiencia, gerentes, emprendedores y profesionales en transición a alta dirección |
| **Nivel de dificultad** | Avanzado / Directivo |
| **Prerrequisitos** | Haber cursado los Bloques 1 a 7, especialmente *Regression Analysis for Business* y *Business Analytics* (Bloque 2), *Corporate Finance* (Bloque 3), *Estrategia Tecnológica* (Bloque 6) y *Negociación Ejecutiva, Gestión del Cambio y People Analytics* (Bloque 7) |
| **Resultado general de aprendizaje** | Al finalizar la sesión, el alumnado será capaz de priorizar una cartera de casos de uso de inteligencia artificial con criterio económico-financiero, calcular su retorno ajustado por costes de inferencia e integración y diseñar un marco de gobernanza y responsabilidad algorítmica alineado con la gestión del cambio y la regulación vigente. |

---

## 2. Objetivos de aprendizaje

Al completar este tema, el alumnado será capaz de:

1. **Clasificar** las aplicaciones empresariales de la IA predictiva, generativa y agéntica en una matriz de impacto económico frente a factibilidad operativa y de datos. *(Nivel de Bloom: Comprender / Analizar)*
2. **Calcular** el coste total de propiedad (TCO) y el retorno de la inversión (ROI) de iniciativas de IA, incorporando costes de preparación de datos, inferencia, integración, supervisión humana y mantenimiento continuo. *(Nivel de Bloom: Aplicar)*
3. **Evaluar** si una iniciativa de IA construye una ventaja competitiva sostenible basada en datos propios y rediseño de procesos, o si replica capacidades comoditizadas fácilmente copiables por la competencia. *(Nivel de Bloom: Evaluar)*
4. **Identificar** riesgos algorítmicos críticos —sesgos discriminatorios, alucinaciones, fugas de privacidad, propiedad intelectual y pérdida de explicabilidad— y asignar controles de mitigación proporcionados al nivel de riesgo del caso de uso. *(Nivel de Bloom: Analizar)*
5. **Diseñar** una política ejecutiva de gobernanza de la IA y un plan de reconversión laboral (*reskilling*) que garanticen la supervisión humana y la adecuación a los principios regulatorios europeos y sectoriales. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1 Cartera de casos de uso de IA en dirección general

#### Explicación breve y clara
Para la alta dirección, la inteligencia artificial no es un proyecto informático aislado, sino una palanca de productividad, diferenciación comercial y reasignación de capital. El reto ejecutivo consiste en escapar tanto de la parálisis escéptica como de la «fiebre de pilotos» sin retorno. Gestionar la IA como una cartera (*portfolio*) permite equilibrar mejoras rápidas de productividad personal, automatización de procesos troncales y apuestas transformadoras en el modelo de negocio, siempre ancladas a una métrica de cuenta de resultados (ingresos, margen, capital circulante o reducción de riesgo).

#### Conceptos clave
- **IA predictiva (aprendizaje automático clásico):** modelos supervisados y no supervisados orientados a pronosticar demanda, impagos, fugas de clientes (*churn*), fallos de maquinaria o fraude.
- **IA generativa (modelos fundacionales y LLM):** sistemas capaces de sintetizar texto, código, imágenes o audio a partir de instrucciones (*prompts*) y bases documentales internas (arquitecturas RAG).
- **IA agéntica (agentes autónomos):** sistemas que encadenan razonamiento, llamadas a herramientas corporativas (ERP, CRM, correo) y ejecución de tareas multipaso bajo umbrales de autorización definidos.
- **Trampa del piloto perpetuo:** proliferación de pruebas de concepto vistosas que nunca pasan a producción por falta de datos limpios, integración en flujos reales o dueño de negocio responsable del P&L.

#### Definiciones necesarias
- **Arquitectura RAG (*Retrieval-Augmented Generation*):** patrón técnico que conecta un modelo de lenguaje con documentación interna actualizada y controlada de la empresa para fundamentar sus respuestas y reducir invenciones (*alucinaciones*), sin necesidad de reentrenar el modelo base.
- **Paso a producción (*MLOps / LLMOps*):** conjunto de prácticas operativas para desplegar, monitorizar, evaluar continuamente y actualizar modelos de IA en entornos reales con acuerdos de nivel de servicio (SLA).

#### Ejemplo práctico realista
Una empresa industrial mediana de distribución de material eléctrico en Zaragoza (140 empleados, 34 M€ de facturación) clasifica 18 propuestas de IA en tres horizontes: (1) *Quick wins* con herramientas existentes (asistente comercial conectado vía RAG al catálogo de 28.000 referencias técnicas para preparar ofertas en 12 minutos en lugar de 90); (2) *Core operativo* (modelo predictivo de reposición de inventario para reducir roturas de stock y capital inmovilizado); y (3) *Apuesta estratégica* (configurador técnico asistido por IA para instaladores B2B). En lugar de dispersar el presupuesto en 18 pruebas, la dirección financia solo 3 iniciativas con responsables de negocio claros y objetivos medibles a 90 días.

#### Errores frecuentes
- Comprar licencias masivas de copilotos sin rediseñar los procesos ni formar a los equipos, esperando mejoras automáticas de margen.
- Elegir casos de uso de altísimo riesgo regulatorio o reputacional (por ejemplo, selección automatizada de personal o fijación opaca de precios) como primer proyecto de IA de la compañía.
- Delegar la priorización exclusivamente al departamento de TI sin participación de finanzas, operaciones, comercial y asesoría jurídica.

#### Preguntas que el alumnado debería poder responder
- ¿Qué criterios distinguen un caso de uso apto para IA predictiva frente a uno que exige IA generativa o agéntica?
- ¿Por qué más de la mitad de los pilotos de IA corporativa no llegan a generar impacto auditado en el EBITDA?
- ¿Cómo debe estructurarse una cartera equilibrada de proyectos de IA en una pyme con presupuesto limitado?

---

### 3.2 Economía de la IA: ROI, costes de inferencia y datos propios como foso competitivo

#### Explicación breve y clara
A diferencia del software tradicional —donde el coste marginal por usuario adicional tiende a cero—, las soluciones de IA generativa y agéntica presentan un **coste variable continuo por uso** (inferencia, consumo de *tokens*, llamadas a API, computación GPU) y un **coste recurrente de mantenimiento** (deriva de datos, evaluación de calidad, reentrenamiento y actualización de *prompts* o integraciones). Por tanto, el análisis financiero ejecutivo debe revisar el margen unitario (*unit economics*) de cada transacción asistida por IA y comprobar si la empresa está construyendo un foso competitivo real o simplemente pagando un peaje tecnológico que también tiene a su alcance cualquier competidor.

#### Conceptos clave
- **Coste Total de Propiedad (TCO) en IA:** suma de costes fijos iniciales (preparación y gobierno del dato, integración con ERP/CRM, seguridad, consultoría, formación) y costes recurrentes (licencias, inferencia por volumen, monitorización, auditoría y gestión del cambio).
- **Costes de inferencia:** gasto directo generado cada vez que un modelo procesa una consulta o genera una salida; depende del tamaño del modelo, longitud del contexto, latencia requerida y frecuencia de uso.
- **Comoditización de modelos base:** tendencia a que la capacidad de los modelos fundacionales genéricos se iguale rápidamente en el mercado, desplazando la ventaja competitiva hacia los datos propietarios, la distribución y la integración en el flujo de trabajo.
- **Efecto volante de datos (*data flywheel*):** ciclo virtuoso en el que el uso del producto genera datos propios exclusivos y retroalimentación de expertos que mejoran progresivamente el servicio y elevan los costes de cambio del cliente.

#### Definiciones necesarias
- **Retorno ajustado al riesgo en IA:** relación entre el valor económico neto capturado (ingresos incrementales verificables o ahorro de costes efectivamente liberados/reasignados) y el TCO completo, ponderado por la probabilidad de adopción real y los riesgos legales u operativos.
- **Ilusión de productividad no monetizada:** ahorro teórico de horas (por ejemplo, «2 horas ahorradas por empleado a la semana») que no se traduce en mayor facturación, menor coste externo ni reducción de plazos críticos porque la capacidad liberada no se reasigna a actividades de valor.

#### Ejemplo práctico realista
Una firma de asesoría laboral y fiscal con 95 profesionales en Bilbao analiza automatizar la revisión de contratos y consultas recurrentes de clientes mediante un modelo fundacional de máxima capacidad. El cálculo inicial del proveedor solo incluye 18.000 €/año de licencias, pero la directora financiera añade: 35.000 € de limpieza y etiquetado documental, 28.000 € de integración con el gestor documental y control de permisos, 24.000 €/año en consumo de inferencia y evaluación de calidad, y 15.000 € en formación. Al optimizar la arquitectura usando un modelo más ligero para clasificación inicial y reservando el modelo avanzado solo para casos complejos (*model routing*), reduce el coste de inferencia en un 60 % y logra un periodo de recuperación (*payback*) de 14 meses liberando horas sénior que se venden en nuevos servicios de consultoría estratégica.

#### Errores frecuentes
- Calcular el ROI únicamente con el precio de la licencia mensual e ignorar la preparación de datos, la integración de sistemas y la verificación humana.
- Utilizar modelos sobredimensionados y costosos para tareas repetitivas que pueden resolverse con reglas deterministas o modelos pequeños mucho más baratos y rápidos.
- Suponer que «usar IA» es una ventaja competitiva duradera cuando la empresa carece de datos propios diferenciados o relaciones exclusivas con clientes.

#### Preguntas que el alumnado debería poder responder
- ¿Qué partidas suelen quedar ocultas en el TCO real de un proyecto de IA generativa?
- ¿Cómo puede una pyme evitar la «ilusión de productividad no monetizada» al presentar un caso de negocio al comité de dirección?
- ¿Por qué los datos propietarios y los procesos integrados constituyen un foso competitivo más sólido que el acceso a un modelo fundacional concreto?

---

### 3.3 Gobernanza, gestión de riesgos y responsabilidad algorítmica

#### Explicación breve y clara
Cuando un algoritmo influye en precios, concesión de créditos, evaluación de candidatos, diagnósticos o atención al cliente, los fallos dejan de ser simples incidencias técnicas para convertirse en riesgos reputacionales, legales y fiduciarios para el consejo de administración. La responsabilidad algorítmica no pretende frenar la innovación, sino establecer barreras de seguridad (*guardrails*) claras que permitan escalar la IA con confianza, trazabilidad y rendición de cuentas.

#### Conceptos clave
- **Sesgo algorítmico:** desviación sistemática e injusta en las decisiones de un sistema derivada de datos históricos sesgados, variables aproximadas (*proxies*) discriminatorias o muestras no representativas.
- **Explicabilidad y trazabilidad:** capacidad de comprender y justificar ante clientes, auditores o reguladores qué factores principales han conducido a una recomendación o decisión automatizada.
- **Alucinaciones y fiabilidad factual:** generación de afirmaciones plausibles pero falsas por parte de modelos generativos, especialmente grave en entornos jurídicos, financieros, médicos o contractuales.
- **Privacidad, confidencialidad y propiedad intelectual:** riesgo de introducir datos personales, secretos comerciales o código propietario en herramientas externas sin acuerdos de no entrenamiento ni aislamiento de datos (*shadow AI*).
- **Supervisión humana efectiva (*Human-in-the-Loop*, HITL):** diseño del proceso donde una persona competente revisa, valida o puede anular decisiones críticas antes de que produzcan efectos irreversibles.

#### Definiciones necesarias
- **Gobernanza de la IA:** conjunto de políticas, roles, comités, controles técnicos y mecanismos de auditoría que definen quién aprueba, despliega, monitoriza y detiene un sistema de IA dentro de la organización.
- ***Shadow AI* (IA en la sombra):** uso no autorizado ni supervisado de aplicaciones de IA externas por parte de empleados con datos corporativos o de clientes, al margen de las políticas de seguridad de la empresa.

#### Ejemplo práctico realista
Una pyme española de financiación al consumo y *renting* tecnológico descubre durante una auditoría interna que su modelo predictivo de aprobación automática penalizaba sistemáticamente códigos postales concretos y autónomos con historial reciente, actuando como *proxy* indirecto de perfil socioeconómico y origen. Además, varios comerciales pegaban balances confidenciales de clientes en cuentas gratuitas de chatbots públicos. La dirección establece una política de IA corporativa con entorno privado sin retención de datos, un registro central de modelos, auditorías trimestrales de equidad por subgrupos y revisión humana obligatoria para toda denegación de crédito o límite superior a 15.000 €.

#### Errores frecuentes
- Prohibir completamente el uso de herramientas de IA sin ofrecer una alternativa corporativa segura, lo que dispara la *shadow AI*.
- Tratar la supervisión humana como un mero «botón de aceptar» (*rubber-stamping*) sin formación ni tiempo real para detectar errores del modelo (sesgo de automatización).
- Asumir que contratar a un proveedor externo de IA transfiere la responsabilidad legal y reputacional frente a clientes y reguladores.

#### Preguntas que el alumnado debería poder responder
- ¿Cómo puede aparecer un sesgo discriminatorio en un modelo aunque se hayan eliminado variables sensibles como sexo o edad?
- ¿Qué medidas prácticas reducen la *shadow AI* en una organización de tamaño medio en menos de 60 días?
- ¿Qué diferencia existe entre una supervisión humana meramente formal y un control *Human-in-the-Loop* realmente eficaz?

---

### 3.4 Impacto laboral, rediseño organizativo y marco regulatorio de la IA

#### Explicación breve y clara
La adopción de la IA transforma la composición de tareas de casi todos los puestos de trabajo —desde administrativos y analistas financieros hasta mandos intermedios y directivos— mucho antes de eliminar puestos completos. Liderar esta transición exige combinar rigor regulatorio con diálogo social, transparencia y planes creíbles de recualificación (*upskilling* y *reskilling*). En el ámbito europeo, la alta dirección debe incorporar el enfoque basado en niveles de riesgo en su proceso de aprobación de proyectos y compras tecnológicas.

#### Conceptos clave
- **Descomposición del puesto en tareas:** análisis de qué tareas son automatizables, cuáles se potencian mediante colaboración humano-IA (*augmentación*) y cuáles requieren juicio ético, negociación o relación humana irremplazable.
- **Reconversión y cultura de aprendizaje (*upskilling / reskilling*):** inversión estructurada para que los equipos pasen de ejecutar tareas repetitivas a supervisar sistemas, interpretar resultados y atender excepciones complejas.
- **Enfoque regulatorio basado en el riesgo:** clasificación de sistemas de IA según su impacto potencial sobre derechos fundamentales, seguridad y salud (prácticas prohibidas, alto riesgo, obligaciones de transparencia y riesgo mínimo).
- **Comité multidisciplinar de IA:** órgano ligero integrado por dirección general/operaciones, TI/datos, finanzas, asesoría jurídica/cumplimiento y personas (RR. HH.) para aprobar casos de uso y vigilar proveedores.

#### Definiciones necesarias
- **Reglamento Europeo de Inteligencia Artificial (*EU AI Act*):** marco normativo de la Unión Europea que regula el desarrollo, comercialización y uso de sistemas de IA según categorías de riesgo, imponiendo obligaciones reforzadas de gestión de riesgos, calidad de datos, documentación técnica, transparencia y supervisión humana a los sistemas de alto riesgo *(nota: el calendario exacto de entrada en vigor por capítulos, las directrices de la Oficina Europea de IA, los criterios técnicos de clasificación de alto riesgo y las normas nacionales de desarrollo y régimen sancionador deben verificarse en fuentes oficiales vigentes antes de impartir la sesión)*.
- **Alfabetización en IA (*AI literacy*):** conjunto de competencias prácticas, técnicas y éticas que permiten a empleados y directivos utilizar sistemas de IA de forma informada, crítica y consciente de sus límites y obligaciones.

#### Ejemplo práctico realista
Un grupo de logística y transporte capilar de 260 empleados en Cataluña implanta planificación dinámica de rutas y atención automatizada de incidencias de entrega. En lugar de comunicar el proyecto como un recorte de plantilla, la dirección mapea las 12 tareas del centro de tráfico: automatiza el 70 % de las confirmaciones rutinarias y reconvierte a 9 gestores administrativos en especialistas de resolución de incidencias críticas y atención a cuentas clave. Paralelamente, el equipo de cumplimiento revisa sus contratos con proveedores de software para exigir documentación técnica, cláusulas de protección de datos y verificación de si el módulo de evaluación de productividad de repartidores podría encuadrarse en supuestos sensibles o de alto riesgo laboral *(verificación jurídica preceptiva según normativa vigente de AI Act y protección de datos)*.

#### Errores frecuentes
- Comunicar los proyectos de IA desde la opacidad, generando resistencia pasiva, boicot operativo y fuga del mejor talento.
- Creer que la regulación de IA solo afecta a grandes tecnológicas desarrolladoras y olvidar que las empresas usuarias (*deployers*) también tienen obligaciones cuando aplican sistemas de terceros a empleados o clientes.
- Evaluar la regulación solo al final del proyecto, cuando el sistema ya está integrado y resulta muy costoso rediseñarlo o sustituirlo.

#### Preguntas que el alumnado debería poder responder
- ¿Qué diferencia práctica existe entre las obligaciones de un proveedor de IA y las de una empresa usuaria (*deployer*)?
- ¿Cómo debe integrarse el área de Personas (RR. HH.) y la representación laboral en el despliegue de herramientas de IA?
- ¿Qué elementos mínimos debe contener una ficha de aprobación de un proyecto de IA antes de liberar presupuesto?

---

## 4. Metodología didáctica

La sesión tiene una duración de **240 minutos lectivos** (se recomienda insertar una pausa de 15–20 minutos en el ecuador de la sesión, fuera del cómputo lectivo o ajustada al horario del campus).

| Fase | Tiempo | Qué hace el formador | Qué hace el alumnado |
|---|---|---|---|
| **1. Apertura y activación** | 20 min | Plantea el dilema inicial («¿Inversión estratégica o moda costosa?»), lanza una encuesta rápida sobre el grado de uso real y *shadow AI* en las organizaciones del grupo y encuadra los objetivos de la sesión. | Responde individualmente al diagnóstico rápido, comparte en parejas un piloto de IA exitoso o fallido de su entorno y detecta patrones comunes de frustración ejecutiva. |
| **2. Exposición breve / microlearning** | 50 min | Expone de forma estructurada y visual los 4 bloques conceptuales (cartera de IA, TCO/ROI y fosos competitivos, riesgos y gobernanza algorítmica, rediseño laboral y marco *AI Act*), intercalando micropreguntas de comprobación y ejemplos reales de pymes. | Toma notas estructuradas en la ficha de trabajo, formula preguntas sobre sus sectores y contrasta supuestos de costes ocultos y clasificación de riesgos. |
| **3. Análisis de caso práctico** | 50 min | Presenta el caso **AseguraPyme Ibérica S.A.**, organiza los equipos directivos (4–5 personas), distribuye los datos financieros y técnicos del caso y circula por los grupos formulando preguntas de contraste sobre sesgos, costes de inferencia y regulación. | Analiza los datos del caso en equipo, recalcula el TCO/ROI real de las tres propuestas de IA, identifica riesgos algorítmicos y regulatorios y prepara una recomendación priorizada para el consejo. |
| **4. Actividad aplicada de transferencia** | 60 min | Facilita la construcción del *AI Business Case & Governance Canvas* aplicado a un proceso real de la empresa de cada participante (o del caso si trabajan en dúos), orientando el diseño de controles *Human-in-the-Loop* y el plan de *reskilling*. | Diseña un caso de negocio completo con presupuesto TCO a 24 meses, clasificación de riesgo, matriz de controles de gobernanza y hoja de ruta de adopción a 90 días. |
| **5. Discusión guiada y debate ejecutivo** | 35 min | Modera la simulación de Comité de Inversiones y Gobernanza de IA, asigna roles críticos (CFO, CIO, Legal/Compliance, Dirección de Personas) y somete 2–3 propuestas a escrutinio riguroso. | Presenta en formato ejecutivo (3 minutos) sus decisiones clave, defiende los números y controles frente a objeciones de otros compañeros y refina sus criterios de priorización. |
| **6. Síntesis y cierre** | 25 min | Recapitula los 5 principios directivos del tema, aplica la evaluación sumativa breve y la autoevaluación de madurez en gobernanza de IA, y enlaza el tema con el siguiente bloque de ESG e impacto (consumo energético de IA, ética corporativa y sostenibilidad). | Completa el test sumativo de aplicación, rellena su compromiso ejecutivo a 30 días y conecta los aprendizajes con su Proyecto Integrador del EMBA. |
| **Total lectivo** | **240 min** | — | — |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Radar de madurez y mapa de *Shadow AI*

- **Nombre:** Diagnóstico exprés: ¿Dónde se nos escapa valor y riesgo con la IA hoy?
- **Objetivo:** Identificar usos reales (formales e informales) de la IA en las organizaciones del alumnado y diagnosticar brechas iniciales entre ambición estratégica, control económico y gobernanza.
- **Instrucciones para el alumnado:**
  1. De forma individual (5 min), completad una matriz rápida de 3 preguntas: (a) ¿Qué 2 tareas de tu área ya están usando empleados con herramientas de IA externas?; (b) ¿Existe política escrita y entorno privado corporativo?; (c) ¿Qué métrica financiera concreta esperas mover con IA en los próximos 12 meses?
  2. En grupos de 3 personas (8 min), poned en común las respuestas y clasificad vuestras organizaciones en 4 estadios: *Negación/Prohibición*, *Experimentación desordenada (Shadow AI)*, *Pilotos con gobierno básico* o *Escala con ROI y gobernanza*.
  3. Un portavoz por grupo comparte en plenario (7 min) el mayor riesgo silencioso detectado.
- **Materiales necesarios:** Encuesta digital interactiva (Mentimeter/Slido) o tarjetas físicas de diagnóstico rápido y pizarra compartida.
- **Tiempo estimado:** 20 minutos (integrados en la fase de apertura).
- **Rol del formador:** Dinamizar la encuesta en vivo, garantizar confidencialidad («regla de Chatham House») y agrupar los hallazgos en los 4 ejes del tema.
- **Producto o entregable esperado:** Mapa colectivo de madurez y listado de los 5 principales focos de *shadow AI* del aula.
- **Criterios de éxito:** El 100 % de los participantes identifica al menos un uso informal concreto en su empresa y distingue entre adopción tecnológica y creación de valor económico.

### Actividad 2 (Aplicación): Auditoría económica y algorítmica de cartera (Caso AseguraPyme Ibérica)

- **Nombre:** Comité de Inversión y Riesgo Algorítmico: tres proyectos sobre la mesa.
- **Objetivo:** Aplicar el cálculo completo de TCO/ROI y la matriz de riesgos algorítmicos y regulatorios para decidir qué proyecto financiar, cuál rediseñar y cuál detener.
- **Instrucciones para el alumnado:**
  1. Leed los datos financieros, operativos y técnicos del caso **AseguraPyme Ibérica S.A.** (Sección 6).
  2. Recalculad en hoja de cálculo el flujo neto a 24 meses de las tres iniciativas (Triaje y liquidación de siniestros, Asistente RAG para corredores y Scoring predictivo de tarificación), incluyendo costes de datos, inferencia, integración y revisión humana.
  3. Clasificad el nivel de riesgo ético, reputacional y regulatorio potencial de cada proyecto (indicando qué controles obligatorios exige cada uno).
  4. Preparad una recomendación ejecutiva de una página con: asignación del presupuesto disponible (320.000 €), orden de ejecución, condiciones de gobernanza y métricas de parada (*kill criteria*).
- **Materiales necesarios:** Caso escrito, hoja de cálculo con plantilla de TCO/ROI de IA y matriz de riesgo algorítmico.
- **Tiempo estimado:** 50 minutos.
- **Rol del formador:** Acompañar a los equipos, cuestionar supuestos excesivamente optimistas de ahorro de personal y señalar alertas ocultas en los datos del caso (sesgo geográfico y coste de inferencia escalado).
- **Producto o entregable esperado:** Informe ejecutivo de 1 página con recomendación de cartera y cuadro comparativo financiero-regulatorio.
- **Criterios de éxito:** Los cálculos incorporan todos los costes ocultos, detectan al menos 3 riesgos críticos del caso y justifican la asignación de capital respetando la restricción presupuestaria.

### Actividad 3 (Transferencia a la realidad laboral): *AI Business Case & Governance Canvas* propio

- **Nombre:** Hoja de ruta ejecutable de IA responsable para mi empresa.
- **Objetivo:** Transferir los marcos de economía de la IA, gobernanza y gestión del cambio a un caso de uso prioritario y real de la organización del participante.
- **Instrucciones para el alumnado:**
  1. Seleccionad un proceso real de vuestra empresa o proyecto emprendedor con fricción operativa o comercial medible.
  2. Completad el *AI Business Case & Governance Canvas* (Sección 8): problema y KPI de negocio, tipo de IA recomendada, fuente de datos propios (ventaja competitiva), estimación realista de TCO y beneficios monetizables a 24 meses, riesgos principales, nivel de supervisión humana (HITL), plan de formación/reconversión y 3 hitos a 90 días.
  3. Intercambiad el lienzo con un compañero que actuará como «abogado del diablo» (CFO + Compliance) durante 10 minutos para detectar puntos ciegos.
  4. Ajustad la versión final y preparad un *pitch* ejecutivo de 3 minutos para el debate plenario.
- **Materiales necesarios:** Plantilla *AI Business Case & Governance Canvas* (digital o impresa) y guía de preguntas críticas del revisor.
- **Tiempo estimado:** 60 minutos (40 min de diseño individual/parejas + 20 min de revisión cruzada y refinamiento).
- **Rol del formador:** Asesorar de forma personalizada a los directivos, evitar soluciones sobredimensionadas y asegurar la coherencia entre economía, gobernanza y personas.
- **Producto o entregable esperado:** *AI Business Case & Governance Canvas* cumplimentado y listo para presentar al comité de dirección real de la empresa.
- **Criterios de éxito:** El caso de negocio presenta un KPI financiero trazable, diferencia ahorro teórico de ahorro monetizable, define un responsable humano explícito y contempla controles de privacidad y cumplimiento desde el diseño.

---

## 6. Caso práctico

### Contexto empresarial
**AseguraPyme Ibérica S.A.** es una entidad aseguradora de tamaño medio con sede en Madrid y oficinas comerciales en Valencia y Sevilla. Cuenta con 185 empleados, opera en los ramos de hogar, comercios y flotas de furgonetas de pymes, y gestiona 42 M€ en primas anuales con un ratio combinado del 97,8 % (margen técnico muy ajustado) y un EBITDA de 2,9 M€. El 68 % de sus ventas llega a través de una red de 340 corredores independientes.

### Situación o problema
La dirección general dispone de un presupuesto máximo de **320.000 € de inversión para los próximos 12 meses** (incluyendo tecnología, integración y gestión del cambio) para lanzar su programa de IA y mejorar al menos 1,5 puntos porcentuales el margen operativo en 24 meses. Tres direcciones internas han presentado propuestas enfrentadas y el Consejo de Administración solicita una decisión priorizada que maximice el retorno sostenible sin exponer a la compañía a sanciones regulatorias ni crisis reputacionales.

### Datos disponibles

| Iniciativa propuesta | Promotor | Inversión inicial (Año 1) | Coste recurrente anual (licencias + inferencia + mantenimiento) | Beneficio bruto estimado por el promotor (Año 1 / Año 2) | Riesgos y notas técnicas detectadas en *due diligence* |
|---|---|---|---|---|---|
| **Proyecto A: Asistente RAG para corredores y tramitadores** (consulta de condicionados, exclusiones y presupuestos complejos) | Dirección Comercial y Operaciones | 115.000 € (limpieza de 1.400 pólizas, RAG privado, integración CRM, formación) | 38.000 €/año (inferencia estimada para 18.000 consultas/mes + evaluación de calidad) | 120.000 € (Año 1) / 290.000 € (Año 2) por reducción de tiempo de cotización de 48 h a 4 h y aumento de tasa de conversión del 2 % | Riesgo de alucinaciones en coberturas si no cita la cláusula exacta; requiere entorno privado sin entrenamiento con datos de clientes y validación del tramitador antes de emitir póliza. |
| **Proyecto B: Liquidación automática de siniestros de hogar de baja cuantía (<600 €)** con visión por computador e IA agéntica | Dirección de Siniestros | 195.000 € (integración core asegurador, flujo agéntico, detección de fraude) | 64.000 €/año (API multimodal de imágenes + auditoría muestral) | 160.000 € (Año 1) / 380.000 € (Año 2) por ahorro en peritajes externos (210 €/siniestro) y menor fuga de clientes | Alto volumen (4.200 siniestros/año); si el modelo aprueba falsos positivos, el fraude podría subir un 8 % (estimado en 110.000 €/año si no hay controles); fuerte temor en el equipo de 18 tramitadores a despidos. |
| **Proyecto C: Scoring predictivo de tarificación y rechazo automático en seguros de comercio** con variables externas enriquecidas | Dirección Actuarial / Datos | 140.000 € (compra de datos externos, entrenamiento y despliegue) | 45.000 €/año (compra de datos y reentrenamiento) | 95.000 € (Año 1) / 340.000 € (Año 2) por mejora de selección de riesgos | El modelo usa datos de geolocalización por barrio, idioma de contacto y reseñas online; pruebas preliminares muestran tasas de rechazo 2,4 veces superiores en barrios de renta baja con alta población migrante; baja explicabilidad («caja negra») y potencial encuadre sensible bajo normativa aseguradora, de protección de datos y marco *AI Act* *(verificar calificación exacta en normativa vigente)*. |

**Restricciones adicionales:**
- Presupuesto total disponible para inversión inicial Año 1: **320.000 €** (no ampliable sin autorización extraordinaria del Consejo).
- Capacidad del equipo interno de TI y Datos: solo puede abordar **un proyecto troncal de alta integración a la vez** (o un proyecto ligero + preparación de datos de un segundo).
- El comité de empresa ha solicitado transparencia inmediata tras filtrarse rumores de «sustitución de tramitadores por bots».

### Preguntas de análisis
1. ¿Cuál es el flujo de caja neto acumulado a 24 meses de cada proyecto si se descuentan el coste recurrente completo y un escenario conservador de adopción (70 % del beneficio estimado por el promotor) y riesgo de fraude en el Proyecto B?
2. ¿Cuál de los tres proyectos construye un foso competitivo más duradero a partir de los datos propios de AseguraPyme Ibérica?
3. ¿Qué riesgos algorítmicos, legales y laborales descalifican o condicionan la ejecución inmediata del Proyecto C y del Proyecto B?
4. ¿Cómo secuenciarías la inversión de 320.000 € en 18 meses para generar caja temprana, evitar cuellos de botella en TI y gestionar constructivamente el impacto laboral?

### Tarea a realizar
Actuando como Comité Ejecutivo de Transformación, elaborad una propuesta formal al Consejo de Administración que incluya:
1. Decisión clara (Aprobar / Aprobar con condiciones / Aplazar o rechazar) para los Proyectos A, B y C.
2. Cuadro económico revisado (escenario base y conservador a 24 meses).
3. Arquitectura mínima de gobernanza (roles, controles HITL, auditoría de sesgos, protección de datos y *kill criteria*).
4. Plan de comunicación y reconversión laboral para el equipo de siniestros y tramitación.

### Posibles soluciones o criterios de análisis
- **Decisión financiera y de capacidad óptima:**
  - **Aprobar de inmediato el Proyecto A (115.000 €):** menor complejidad técnica, alto valor comercial para los 340 corredores, retorno rápido (incluso en escenario conservador al 70 % de beneficios: 287.000 € de ingresos/ahorros en 24 meses frente a 191.000 € de TCO total = +96.000 € netos y *payback* ~16 meses), bajo riesgo regulatorio si se exige citación exacta de cláusulas, privacidad contractual y validación humana. Además, limpia el repositorio documental de pólizas, generando base de conocimiento reutilizable.
  - **Aprobar en Fase 2 condicionada el Proyecto B (195.000 €, suma total A+B = 310.000 €, dentro del límite de 320.000 €):** arrancar la preparación de datos y el piloto en modo «asistente de recomendación» (*Human-in-the-Loop* obligatorio) una vez desplegado A, sin liquidación 100 % autónoma inicial hasta validar tasas de fraude inferiores al 2 % en pruebas sombra (*shadow mode*). Reconvertir a los tramitadores para gestionar siniestros complejos (>600 €), auditoría de alertas de fraude y fidelización proactiva.
  - **Rechazar en su forma actual / aplazar el Proyecto C:** alto riesgo de discriminación indirecta (*proxies* de barrio/idioma), falta de explicabilidad frente a clientes y supervisores aseguradores, posible conflicto con normativa de protección de datos (decisiones automatizadas) y requisitos estrictos del marco europeo de IA *(a verificar según clasificación sectorial vigente)*. Solo sería replanteable tras rediseño con variables actuariales auditables, explicables y revisión jurídica formal.
- **Errores que penalizan la solución:** aprobar A+B simultáneamente ignorando el cuello de botella de TI; aceptar las cifras de beneficio del promotor sin ajuste por costes recurrentes ni fraude; aprobar C solo por su potencial margen sin abordar el riesgo de sesgo discriminatorio.

### Preguntas de reflexión final
- ¿Qué habría ocurrido si la dirección hubiera elegido únicamente por el mayor beneficio teórico del Año 2 (Proyecto B o C) sin analizar el TCO, el sesgo y la capacidad de ejecución?
- ¿En qué punto un ahorro en peritajes o personal se convierte en pérdida de confianza de los corredores y clientes?
- ¿Qué cláusulas mínimas exigiríais a los proveedores de software de IA antes de firmar los contratos de los Proyectos A y B?

---

## 7. Evaluación

### Evaluación diagnóstica breve (Inicio de sesión — 5 min)
Cuestionario anónimo de 4 ítems en escala 1–5 para medir el punto de partida del grupo:
1. Claridad en la distinción entre IA predictiva, generativa y agéntica.
2. Experiencia previa evaluando el TCO/ROI completo de proyectos tecnológicos.
3. Existencia de políticas corporativas frente a *shadow AI* y sesgos algorítmicos en su empresa.
4. Familiaridad con los principios de gestión de riesgos del marco regulatorio europeo de IA.

### Evaluación formativa durante la sesión
- Observación estructurada del debate en equipos durante el caso **AseguraPyme Ibérica S.A.** (comprobación de que incorporan costes recurrentes de inferencia, riesgos de sesgo y restricciones de capacidad).
- Revisión entre pares (*peer review*) del *AI Business Case & Governance Canvas* con lista de verificación crítica de 6 puntos (KPI financiero, TCO completo, datos propios, sesgos/privacidad, HITL y plan de personas).
- Preguntas de contraste del formador durante el Comité de Inversiones simulado.

### Evaluación sumativa al final (15 min)
1. **Entrega del *AI Business Case & Governance Canvas*** individual (70 % de la calificación del tema).
2. **Prueba corta de decisión ejecutiva** (30 %): 5 escenarios breves de opción múltiple razonada sobre economía de inferencia, detección de *proxies* discriminatorios, *shadow AI*, diseño de *Human-in-the-Loop* y responsabilidades de la empresa usuaria (*deployer*).

### Rúbrica de evaluación

| Criterio | Insuficiente (0–4,9) | En desarrollo (5,0–6,9) | Adecuado (7,0–8,9) | Destacado (9,0–10) |
|---|---|---|---|---|
| **1. Priorización y encaje estratégico de la IA (25 %)** | Propone tecnología sin problema de negocio definido o elige el tipo de IA inadecuado para la tarea. | Define un caso de uso pertinente, pero con métricas de negocio genéricas y poca conexión con la estrategia. | Selecciona un caso de uso bien alineado al P&L, justifica el tipo de IA y diferencia ventaja propia de herramienta genérica. | Construye una lógica de cartera clara, demuestra cómo los datos propios y procesos integrados crean foso competitivo y fija criterios de parada (*kill criteria*). |
| **2. Rigor financiero: TCO y ROI ajustado (25 %)** | Omite costes críticos (datos, inferencia, integración) o presenta ahorros no monetizables como flujo de caja real. | Calcula inversión inicial y licencias, pero subestima costes recurrentes o no plantea escenarios de sensibilidad. | Estima TCO completo a 24 meses (datos, inferencia, integración, formación) y ROI realista con beneficios trazables. | Incorpora análisis de sensibilidad (adopción/errores), optimización de costes de inferencia y plan concreto de monetización de la capacidad liberada. |
| **3. Gobernanza y responsabilidad algorítmica (25 %)** | Ignora riesgos de sesgo, privacidad, alucinaciones o exigencias regulatorias básicas. | Menciona riesgos generales, pero propone controles vagos sin responsables ni métricas de auditoría. | Identifica los riesgos específicos del caso, define controles HITL claros, medidas contra *shadow AI* y revisión regulatoria preceptiva. | Diseña un marco completo de gobernanza desde el diseño: clasificación de riesgo, auditoría de sesgos por subgrupos, cláusulas a proveedores y trazabilidad auditable. |
| **4. Gestión del cambio e impacto laboral (25 %)** | Trata el despliegue como un proyecto meramente técnico sin contemplar adopción ni impacto en personas. | Incluye formación genérica, pero no analiza cambios en tareas ni resistencias organizativas. | Descompone las tareas afectadas, propone un plan realista de *upskilling/reskilling* y comunicación transparente. | Integra a negocio, TI, legal y personas en una hoja de ruta ejecutable a 90 días con incentivos de adopción y métricas de compromiso del equipo. |

### Actividad de autoevaluación o reflexión
Al cierre de la sesión, cada participante responde por escrito en 5 minutos a tres preguntas de transferencia personal:
1. *¿Qué suposición errónea sobre los costes o riesgos de la IA he corregido hoy?*
2. *¿Qué primera medida de gobernanza (por ejemplo, política frente a shadow AI o inventario de casos de uso) implantaré en los próximos 15 días en mi empresa?*
3. *¿Qué brecha de conocimiento o apoyo especializado (legal, técnico o financiero) necesito incorporar a mi comité de decisión?*

---

## 8. Materiales y recursos

### Guion de diapositivas (estructura *slide by slide*)

| Diapositiva | Título | Contenido clave y propósito |
|---|---|---|
| **1** | Portada y reto ejecutivo | Título del tema, objetivos de la sesión y pregunta detonante: *¿Cuánto valor real de tu cuenta de resultados genera hoy la IA?* |
| **2** | Resultados del radar en vivo | Visualización en tiempo real de la encuesta de madurez y focos de *shadow AI* del grupo. |
| **3** | Mapa de capacidades: Predictiva, Generativa y Agéntica | Tabla comparativa de cuándo usar cada enfoque, madurez operativa y ejemplos de pyme. |
| **4** | Gestión en cartera: escapar de la trampa del piloto | Matriz Impacto en P&L vs. Factibilidad de datos/integración; los 3 horizontes de inversión. |
| **5** | La economía real de la IA (TCO vs. precio de licencia) | Desglose gráfico de costes ocultos: preparación de datos, inferencia, integración, evaluación y cambio. |
| **6** | Costes de inferencia y *unit economics* | Ejemplo numérico de consumo variable por consulta y palancas de optimización (*model routing*, caché, RAG). |
| **7** | ¿Dónde está el foso competitivo? | Modelos comoditizados vs. datos propietarios, *data flywheel* e integración en flujos críticos. |
| **8** | La ilusión de la productividad no monetizada | Diferencia entre ahorrar minutos dispersos y liberar/reasignar capacidad medible en EBITDA. |
| **9** | Mapa de riesgos algorítmicos | Sesgos y *proxies*, alucinaciones, fugas de privacidad, propiedad intelectual y *shadow AI*. |
| **10** | Arquitectura de gobernanza y *Human-in-the-Loop* | Modelo de comité multidisciplinar, registro de sistemas de IA y supervisión humana efectiva (evitando el *rubber-stamping*). |
| **11** | Marco regulatorio basado en riesgos (*AI Act*) | Esquema conceptual de niveles de riesgo y obligaciones del usuario (*deployer*), con nota expresa de verificación normativa vigente. |
| **12** | Impacto laboral: descomponer puestos en tareas | Automatización vs. aumentación, plan de *upskilling/reskilling* y comunicación transparente. |
| **13** | Presentación del caso: AseguraPyme Ibérica S.A. | Contexto, restricción de 320.000 € y tabla comparativa de los Proyectos A, B y C. |
| **14** | Taller de transferencia: *AI Business Case & Governance Canvas* | Instrucciones visuales de trabajo y guía de revisión cruzada entre pares. |
| **15** | Síntesis ejecutiva y conexión con ESG (Tema 2) | Las 5 reglas de oro de la IA responsable, huella energética/social de la IA y puente hacia sostenibilidad e impacto. |

### Ficha de trabajo (para el alumnado)
Documento estructurado en 3 bloques descargable en PDF/DOCX:
- **Parte 1:** Matriz de diagnóstico inicial de *Shadow AI* y madurez (Actividad 1).
- **Parte 2:** Hoja de análisis financiero y de riesgos para **AseguraPyme Ibérica S.A.** (espacio para recalcular flujos a 24 meses, identificar 3 riesgos críticos y redactar decisión al Consejo).
- **Parte 3:** Lista de verificación de 10 cláusulas imprescindibles antes de contratar a un proveedor externo de IA (no entrenamiento con datos propios, localización de datos, SLA de precisión, trazabilidad, propiedad intelectual, auditoría, salida/portabilidad, cumplimiento normativo).

### Plantilla práctica replicable: *AI Business Case & Governance Canvas*

| Bloque del Canvas | Campos a cumplimentar por el directivo |
|---|---|
| **1. Problema y objetivo de negocio** | Proceso concreto · Dolor cuantificado actual · KPI principal de P&L o caja · Responsable de negocio (*Business Owner*) |
| **2. Solución de IA y ventaja competitiva** | Tipo de IA (predictiva / generativa / agéntica) · Datos propios necesarios y estado de calidad · Por qué genera ventaja defendible |
| **3. Economía de la IA (24 meses)** | Inversión inicial (datos + integración + formación) · Coste recurrente anual (licencias + inferencia + evaluación) · Beneficio monetizable conservador · *Payback* y VAN estimado |
| **4. Riesgos y gobernanza** | Categoría de riesgo potencial · Riesgos clave (sesgo, privacidad, alucinación, legal) · Diseño de control *Human-in-the-Loop* · Verificación jurídica/normativa requerida |
| **5. Personas y gestión del cambio** | Tareas automatizadas vs. tareas aumentadas · Colectivos afectados · Plan de *upskilling/reskilling* · Plan de comunicación |
| **6. Ejecución a 90 días y *Kill Criteria*** | Hito Día 30 (datos y piloto sombra) · Hito Día 60 (validación de calidad y sesgos) · Hito Día 90 (decisión de escala) · Umbral mínimo de precisión/ROI para continuar o detener |

### Lecturas o recursos recomendados
- Agrawal, A., Gans, J. y Goldfarb, A. *Prediction Machines: The Simple Economics of Artificial Intelligence* (y su continuación *Power and Prediction*). Referencia clásica para analizar la IA desde la economía de la decisión y el rediseño de sistemas.
- Iansiti, M. y Lakhani, K. R. *Competing in the Age of AI*. Marco estratégico sobre fábricas de IA, escala operativa y gobierno de modelos.
- NIST. *AI Risk Management Framework (AI RMF 1.0)*. Guía práctica y estructurada para gobernar, mapear, medir y gestionar riesgos algorítmicos.

### Vídeos, artículos y fuentes adicionales *(verificar vigencia y acceso antes de utilizarse)*
- Portal oficial de la Unión Europea y de la Oficina Europea de IA sobre el Reglamento de Inteligencia Artificial (*EU AI Act*) y sus guías de aplicación para empresas usuarias *(verificar calendario de entrada en vigor y actualizaciones reglamentarias vigentes antes de impartir la sesión)*.
- Informes recientes de OECD.AI y agencias nacionales de supervisión de IA (por ejemplo, AESIA en España) sobre alfabetización en IA, auditoría algorítmica y buenas prácticas en pymes *(validar enlaces, fechas y guías publicadas más recientes antes de su uso)*.
- Artículos ejecutivos de *Harvard Business Review* o *MIT Sloan Management Review* sobre economía de la IA generativa, *unit economics* de inferencia y gobernanza en consejos de administración *(seleccionar y verificar acceso actualizado previo a la cohorte)*.

### Glosario de términos clave

| Término | Definición operativa para directivos |
|---|---|
| **Alucinación (*Hallucination*)** | Salida generada por un modelo de IA que resulta lingüísticamente convincente pero fácticamente incorrecta o inventada. |
| **Coste de inferencia** | Gasto variable de computación o consumo de API incurrido cada vez que un modelo desplegado procesa una petición y genera una respuesta o predicción. |
| ***Deployer* (Responsable del despliegue)** | Organización que utiliza un sistema de IA bajo su propia autoridad en una actividad profesional, asumiendo obligaciones propias de uso adecuado, supervisión y cumplimiento. |
| **Efecto volante de datos (*Data Flywheel*)** | Mecanismo por el cual el uso continuado de un servicio genera datos propietarios que mejoran la calidad del modelo y refuerzan la retención de clientes. |
| **Explicabilidad (*Explainability*)** | Capacidad de traducir el funcionamiento o resultado de un modelo a factores comprensibles y justificables para personas, clientes y auditores. |
| ***Human-in-the-Loop* (HITL)** | Esquema operativo en el que la intervención y validación humana competente forman parte obligatoria del circuito de decisión antes de ejecutar acciones de impacto. |
| **IA agéntica** | Sistemas basados en modelos de IA capaces de planificar pasos intermedios, consultar herramientas externas y ejecutar acciones secuenciales hacia un objetivo dentro de límites definidos. |
| ***Model Routing*** | Técnica de optimización que dirige las consultas sencillas a modelos pequeños y económicos y reserva los modelos más avanzados y costosos solo para tareas de alta complejidad. |
| **RAG (*Retrieval-Augmented Generation*)** | Arquitectura que recupera fragmentos relevantes de una base documental interna controlada para que un modelo de lenguaje responda fundamentándose en información verificada de la empresa. |
| **Sesgo algorítmico** | Error sistemático que produce resultados injustamente favorables o desfavorables para determinados colectivos debido a datos históricos, diseño del modelo o variables *proxy*. |
| ***Shadow AI*** | Uso informal y no aprobado por la empresa de herramientas externas de IA por parte de empleados, con riesgo de fuga de datos confidenciales e incumplimiento legal. |
| **TCO de IA (*Total Cost of Ownership*)** | Coste integral de ciclo de vida de una solución de IA, sumando datos, integración, licencias, inferencia, supervisión humana, auditoría, seguridad y gestión del cambio. |

---

## 9. Adaptaciones

### Sesión presencial
- Utilizar votación en directo con el móvil (Mentimeter/Slido) para el radar inicial de *shadow AI* y proyectar los resultados en pantalla para detonar el debate inmediato.
- Imprimir el *AI Business Case & Governance Canvas* en formato A3 para que los equipos trabajen con notas adhesivas en mesas redondas durante el caso de **AseguraPyme Ibérica S.A.** y roten para hacer auditoría cruzada tipo «galería ejecutiva».
- Escenificar el Comité de Inversiones disponiendo una mesa frontal con 4 carteles de rol (CFO, CIO, Legal/Compliance, Dirección de Personas) que interpelan en vivo a cada equipo ponente.

### Sesión online síncrona
- Sustituir la pizarra física por un tablero colaborativo (Miro o Mural) preconfigurado con salas por equipo y plantillas editables del cuadro financiero del caso y del *AI Business Case & Governance Canvas*.
- Dividir la exposición de 50 minutos en dos bloques de 22–25 minutos con una pausa activa de encuesta o chat estructurado en medio para mantener la atención ejecutiva.
- Utilizar salas de grupos reducidos (*breakout rooms*) de 4 personas con cronómetro visible y visitas breves del formador (3 minutos por sala) para destrabar el análisis financiero y de sesgos.

### Sesión asíncrona
- Dividir el bloque expositivo en 4 píldoras de vídeo de 10–12 minutos (una por cada apartado `3.1` a `3.4`) acompañadas de microcuestionarios autocorregibles de verificación tras cada vídeo.
- Proporcionar una hoja de cálculo guiada y un vídeo de 6 minutos con la resolución comentada del caso **AseguraPyme Ibérica S.A.**, que se desbloquea únicamente después de que el alumno entregue su propia recomendación escrita en el foro del campus.
- Organizar la revisión cruzada del *AI Business Case & Governance Canvas* mediante evaluación entre pares asíncrona en el LMS: cada directivo sube su lienzo y un vídeo breve de defensa (máx. 3 minutos en Loom o similar) y comenta obligatoriamente dos propuestas de compañeros aplicando la rúbrica de 4 niveles.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Integra la base cuantitativa y analítica de *Regression Analysis for Business* y *Business Analytics* (Bloque 2), la disciplina de flujos de caja y valoración de *Corporate Finance* (Bloque 3), los marcos éticos de *Responsibility in Global Management* (Bloque 1), la estrategia tecnológica y gestión de riesgos del Bloque 6, y las capacidades de transformación cultural de *Negociación Ejecutiva, Gestión del Cambio y People Analytics* (Bloque 7).
- **Competencias que desarrolla:** Toma de decisiones de inversión tecnológica basada en *unit economics*, gobierno corporativo de datos y algoritmos, gestión proactiva del riesgo regulatorio y liderazgo humanista de la transformación laboral.
- **Conexión con el tema anterior y posterior del plan (8 bloques / 26 temas):**
  - *Tema anterior — Bloque 7, Tema 3 (Negociación Ejecutiva, Gestión del Cambio y People Analytics):* retoma directamente el uso responsable de datos de personas y los mecanismos de negociación y gestión del cambio para desplegar iniciativas de IA sin fracturar la cultura organizativa ni la confianza laboral.
  - *Tema posterior — Bloque 8, Tema 2 (ESG, Sostenibilidad Corporativa e Inversión de Impacto):* extiende la dimensión de responsabilidad corporativa desde la ética algorítmica y el impacto laboral hacia la sostenibilidad ambiental, social y de gobernanza (incluyendo la huella energética de la infraestructura digital y de IA, la transparencia corporativa y la creación de valor sostenible a largo plazo).
- **Evidencia de aprendizaje que dejará el alumnado:** (1) Recomendación ejecutiva documentada del caso **AseguraPyme Ibérica S.A.**; (2) *AI Business Case & Governance Canvas* aplicado a un proceso real de su organización, auditable e integrable como capítulo tecnológico del Proyecto Integrador Ejecutivo del EMBA.

---

## Siguientes pasos para el formador

1. **Verificar normativa vigente antes de impartir:** comprobar en fuentes oficiales de la Unión Europea y autoridades nacionales competentes el estado actualizado de aplicación por fases del *EU AI Act*, las guías para empresas usuarias (*deployers*) y cualquier novedad en protección de datos relativa a decisiones automatizadas.
2. **Preparar las plantillas digitales:** cargar la hoja de cálculo editable del caso **AseguraPyme Ibérica S.A.** (con pestaña de cálculo base y pestaña de sensibilidad) y el *AI Business Case & Governance Canvas* en el campus virtual al menos 72 horas antes de la sesión.
3. **Configurar la encuesta diagnóstica inicial:** preparar las 4 preguntas del radar de madurez y *shadow AI* en la herramienta interactiva elegida y comprobar el anonimato para fomentar respuestas honestas.
4. **Calibrar ejemplos al perfil de la cohorte:** revisar los sectores predominantes del grupo (industrial, servicios B2B, salud, retail, finanzas) para ajustar los microejemplos durante la exposición de los apartados `3.1` y `3.2`.
5. **Cerrar el puente hacia el Tema 2 del Bloque 8:** anunciar al finalizar la sesión que en el siguiente tema se analizará cómo integrar los criterios ESG, el reporte riguroso sin *greenwashing* y la inversión de impacto en la estrategia y financiación corporativa.
