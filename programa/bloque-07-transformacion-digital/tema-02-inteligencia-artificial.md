# Tema 2. Inteligencia artificial (AI)

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Tema 2. Inteligencia artificial (AI) |
| **Bloque y posición dentro del programa** | Bloque 7: Transformación digital — Posición 2 de 8 |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Mandos intermedios y emprendedores |
| **Nivel de dificultad** | Intermedio |
| **Prerrequisitos** | Dominio de digitalización de procesos y calidad básica de datos (Bloque 7, Tema 1) |
| **Resultado general de aprendizaje** | Evaluar, priorizar y diseñar casos de uso de Inteligencia Artificial (predictiva, generativa y automatización inteligente) viables, rentables y conformes a principios éticos y regulatorios para una pyme |

---

## 2. Objetivos de aprendizaje

Al finalizar este tema, el alumnado será capaz de:

1. **Distinguir** las capacidades y aplicaciones empresariales del *machine learning* clásico (predictivo/clasificación), la IA generativa y la automatización inteligente en entornos de pyme. *(Nivel de Bloom: Comprender)*
2. **Evaluar** la calidad, disponibilidad y gobernanza de los datos internos necesarios antes de aprobar un piloto de Inteligencia Artificial. *(Nivel de Bloom: Evaluar)*
3. **Aplicar** criterios estructurados de ingeniería de instrucciones (*prompting*) y validación humana (*human-in-the-loop*) para integrar herramientas de IA generativa en flujos reales de trabajo. *(Nivel de Bloom: Aplicar)*
4. **Analizar** los riesgos técnicos, operativos, éticos y legales asociados a un proyecto de IA (alucinaciones, sesgos, confidencialidad, propiedad intelectual y cumplimiento normativo). *(Nivel de Bloom: Analizar)*
5. **Diseñar** la ficha técnica y el plan piloto de un caso de uso de IA de alto valor y riesgo controlado para su departamento o empresa. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Mapa práctico de la IA para directivos y mandos intermedios

- **Explicación breve y clara:** Para un mando intermedio no es imprescindible programar redes neuronales, pero sí distinguir qué tipo de problema empresarial resuelve cada familia de IA. Mientras el *machine learning* clásico sobresale prediciendo números, clasificando clientes o detectando anomalías sobre datos estructurados, la IA generativa sobresale redactando, resumiendo, traduciendo, generando código y sintetizando información no estructurada (textos, correos, contratos, audios).
- **Conceptos clave:** Inteligencia Artificial, *Machine Learning* (aprendizaje supervisado y no supervisado), *Deep Learning*, IA generativa (LLM y modelos multimodales), Automatización inteligente (IA + flujos de trabajo).
- **Definiciones necesarias:**
  - *Machine Learning (aprendizaje automático):* Subcampo de la IA en el que algoritmos aprenden patrones estadísticos a partir de datos históricos para predecir resultados o clasificar casos nuevos sin reglas programadas manualmente una a una.
  - *IA generativa:* Modelos entrenados sobre grandes volúmenes de información capaces de generar contenido nuevo (texto, imagen, audio, código) a partir de instrucciones en lenguaje natural (*prompts*).
  - *Automatización inteligente:* Combinación de motores de flujo de trabajo o RPA con capacidades de IA (extracción de documentos, clasificación de correos, generación de respuestas) para ejecutar tareas cognitivas repetitivas con supervisión humana.
- **Ejemplo práctico realista:** Una tienda online de suministros veterinarios con 22 empleados utiliza dos tipos de IA complementarios: un modelo de *machine learning* clásico predice la demanda semanal de cada referencia para reducir roturas de stock, mientras que un asistente de IA generativa conectado a su base de fichas de producto redacta borradores de respuestas a consultas frecuentes de clientes y resume incidencias posventa para el equipo comercial.
- **Errores frecuentes:**
  - Intentar usar un chat de IA generativa para resolver problemas numéricos de predicción estadística donde un modelo clásico o incluso una regresión bien hecha es más fiable y auditable.
  - Confundir la fluidez lingüística de un modelo generativo con veracidad factual.
  - Lanzar proyectos de «hacer algo con IA» sin definir qué métrica de negocio se quiere mover.
- **Preguntas que el alumnado debería poder responder:**
  - ¿Cuándo conviene aplicar *machine learning* predictivo y cuándo IA generativa en una pyme?
  - ¿Qué aporta la automatización inteligente frente a una automatización tradicional basada solo en reglas fijas?
  - ¿Por qué un modelo de lenguaje no «sabe» hechos como una base de datos sino que calcula probabilidades de secuencia?

### 3.2. Datos necesarios, arquitectura RAG y preparación de la pyme

- **Explicación breve y clara:** La IA amplifica la calidad de los datos de partida: con datos incompletos, duplicados o desactualizados solo genera errores con apariencia convincente (*garbage in, garbage out*). Las pymes rara vez necesitan entrenar modelos desde cero; en la mayoría de los casos logran alto retorno usando modelos existentes vía API o soluciones SaaS, enriquecidos con su documentación propia mediante técnicas como RAG (*Retrieval-Augmented Generation*).
- **Conceptos clave:** Calidad del dato (exactitud, completitud, actualidad), datos estructurados vs. no estructurados, *RAG (Generación Aumentada por Recuperación)*, *fine-tuning* frente a *prompting*, privacidad del dato.
- **Definiciones necesarias:**
  - *RAG (Retrieval-Augmented Generation):* Patrón técnico que conecta un modelo de IA generativa a una base documental privada y actualizada de la empresa para que responda citando y basándose en esos documentos sin necesidad de reentrenar el modelo.
  - *Datos estructurados vs. no estructurados:* Los primeros residen en tablas con campos definidos (facturas, CRM, ERP); los segundos carecen de esquema rígido (correos, PDFs, actas, grabaciones, imágenes).
- **Ejemplo práctico realista:** Una empresa instaladora de placas solares con 35 empleados acumulaba 600 manuales técnicos de inversores y normativas municipales en carpetas dispersas. En lugar de entrenar un modelo propio (inviable por coste), indexó esa documentación limpia en un asistente corporativo con arquitectura RAG: ahora los técnicos en campo consultan códigos de error y requisitos en segundos obteniendo la respuesta junto al enlace exacto a la página del manual.
- **Errores frecuentes:**
  - Pegar datos confidenciales de clientes, nóminas o contratos en versiones gratuitas y públicas de herramientas de IA que pueden utilizar las entradas para entrenamiento.
  - Alimentar un sistema RAG con documentos obsoletos o contradictorios (por ejemplo, tarifas de 2022 mezcladas con las de 2025).
  - Subestimar el esfuerzo de etiquetado y limpieza de históricos en proyectos de *machine learning*.
- **Preguntas que el alumnado debería poder responder:**
  - ¿Por qué una pyme suele preferir *prompting* avanzado o RAG frente a entrenar un modelo desde cero?
  - ¿Qué requisitos mínimos deben cumplir nuestros datos antes de aprobar un caso de uso de IA?
  - ¿Qué diferencia hay entre usar una cuenta gratuita de IA generativa y un entorno corporativo con garantías de privacidad?

### 3.3. Casos de uso de alto impacto, límites técnicos y control humano

- **Explicación breve y clara:** Los casos de uso más rentables en pymes se concentran en tareas de alta frecuencia, bajo riesgo de daño irreversible y verificación rápida por un profesional: soporte al cliente asistido, resumen y extracción documental, preparación de ofertas comerciales, análisis exploratorio de comentarios, previsión de demanda y mantenimiento o calidad asistida. Reconocer sus límites técnicos —especialmente las alucinaciones y la deriva del modelo— exige diseñar siempre controles humanos.
- **Conceptos clave:** *Human-in-the-loop (HITL)*, alucinaciones, ventana de contexto, deriva de datos (*data drift*), *shadow AI* (uso no autorizado de IA por empleados), retorno en horas ahorradas y calidad.
- **Definiciones necesarias:**
  - *Alucinación:* Generación por parte de un modelo de IA de afirmaciones, cifras, citas legales o datos inexistentes presentados con tono seguro y verosímil.
  - *Human-in-the-loop (HITL):* Diseño operativo en el que una persona cualificada revisa, valida o aprueba la salida de la IA antes de que produzca efectos en clientes, finanzas o decisiones críticas.
  - *Shadow AI:* Uso informal y no regulado de herramientas de IA por parte de la plantilla sin conocimiento ni directrices de seguridad de la empresa.
- **Ejemplo práctico realista:** En una consultora de recursos humanos de 18 personas, el equipo usaba IA generativa a escondidas para resumir currículums (*shadow AI*). La dirección, en vez de prohibirla en bloque, estableció una política clara: contrató licencias corporativas sin retención de datos, creó plantillas de *prompts* auditadas para redactar descripciones de puesto y preguntas de entrevista, y prohibió explícitamente que la IA descartara candidatos de forma automática sin revisión humana.
- **Errores frecuentes:**
  - Automatizar de extremo a extremo el envío de respuestas comerciales o legales al cliente sin fase previa de supervisión humana.
  - Prohibir totalmente la IA sin ofrecer una alternativa corporativa segura, empujando al equipo al *shadow AI*.
  - No medir una línea base antes del piloto (tiempo medio actual, tasa de error) y luego no poder demostrar si la IA compensa su coste.
- **Preguntas que el alumnado debería poder responder:**
  - ¿Cómo diseñamos un punto de control *human-in-the-loop* sin anular el ahorro de tiempo de la IA?
  - ¿Qué riesgos genera el *shadow AI* y cómo debería gestionarlo un mando intermedio?
  - ¿Qué características tiene un buen primer caso de uso de IA en una pyme?

### 3.4. Ética, sesgos y marco normativo aplicable

- **Explicación breve y clara:** La adopción responsable de la IA no es un freno burocrático, sino una condición de continuidad del negocio y reputación. Decisiones automatizadas sesgadas en selección de personal, fijación de precios o concesión de crédito pueden vulnerar derechos y acarrear sanciones severas. En la Unión Europea existe un marco regulatorio basado en niveles de riesgo (Reglamento de Inteligencia Artificial / *AI Act*) que convive con el RGPD y la normativa de propiedad intelectual. *(Nota obligatoria para el formador: verificar antes de impartir las fechas vigentes de entrada en aplicación progresiva del Reglamento Europeo de IA —AI Act—, las guías actualizadas de la AESIA en España y las directrices vigentes de la AEPD sobre tratamiento de datos con IA).*
- **Conceptos clave:** Sesgo algorítmico, explicabilidad, transparencia, clasificación por riesgo (*AI Act*), protección de datos (RGPD), gobernanza de IA, política de uso aceptable.
- **Definiciones necesarias:**
  - *Sesgo algorítmico:* Desviación sistemática e injusta en las predicciones o clasificaciones de un sistema de IA causada por datos históricos desbalanceados, variables discriminatorias o diseño inadecuado.
  - *Política interna de uso aceptable de IA:* Documento breve y operativo que fija qué herramientas están autorizadas, qué datos nunca pueden introducirse, qué tareas requieren revisión humana y cómo declarar el uso de IA.
- **Ejemplo práctico realista:** Una fintech pyme que ofrece microfinanciación a comercios entrena un modelo de *scoring* con históricos antiguos donde determinadas zonas postales apenas habían recibido crédito. El modelo perpetúa la exclusión de buenos pagadores de esos barrios. Al auditar variables sensibles, documentar criterios de explicabilidad y mantener un comité humano para solicitudes limítrofes, reduce el riesgo legal y capta clientes solventes desatendidos por la competencia.
- **Errores frecuentes:**
  - Asumir que «como usamos una herramienta de un gran proveedor, el cumplimiento legal es problema suyo».
  - Utilizar IA en procesos de RR. HH. (filtrado de CVs, evaluación de desempeño) o salud sin evaluar si entran en categorías de alto riesgo normativo.
  - Desconocer quién posee los derechos de uso comercial de textos, diseños o código generados por IA según los términos de la licencia contratada.
- **Preguntas que el alumnado debería poder responder:**
  - ¿Qué cuatro reglas mínimas incluiríais en una política de uso aceptable de IA de una página para vuestra pyme?
  - ¿Por qué un sistema de IA puede resultar discriminatorio aunque nadie haya programado intencionadamente un sesgo?
  - ¿Qué responsabilidades conserva la empresa que despliega (*deployer*) una herramienta de IA comprada a un tercero?

---

## 4. Metodología didáctica (Secuencia de 4 horas / 240 minutos)

| Fase | Duración | Qué hace el formador | Qué hace el alumnado |
|---|---:|---|---|
| **1. Apertura y activación** | 25 min | Realiza un sondeo en vivo sobre uso real (y *shadow AI*) en el grupo. Lanza la Actividad 1 («Detector de mitos y realidades de la IA») y recoge expectativas. | Responde de forma anónima sobre su uso actual de IA, clasifica 6 escenarios empresariales en mitos/realidades y argumenta sus elecciones. |
| **2. Exposición breve / Microlearning I** | 35 min | Explica las familias de IA (*machine learning*, IA generativa, automatización inteligente), requisitos de datos y patrón RAG con demostración breve en directo (o capturas preparadas). | Identifica diferencias entre casos predictivos y generativos; toma notas sobre requisitos de datos y seguridad. |
| **3. Análisis de caso práctico** | 45 min | Presenta el caso *Clínicas Dentales AuraSalud*, distribuye la tabla de datos y retos regulatorios, y guía el análisis en equipos de 3-4 personas. | Evalúa las 3 propuestas de IA de la clínica, identifica riesgos de datos/RGPD/AI Act y prioriza qué iniciativa aprobar, posponer o descartar. |
| **4. Exposición breve / Microlearning II** | 30 min | Aborda límites técnicos (alucinaciones, sesgos), control *human-in-the-loop*, *shadow AI* y elementos clave de gobernanza ética y normativa (advirtiendo qué aspectos legales deben verificarse según fecha). | Contrasta las medidas de gobernanza y control humano con las decisiones tomadas en el caso de AuraSalud. |
| **5. Actividad práctica de aplicación y transferencia** | 60 min | Coordina la Actividad 2 (taller práctico de diseño y auditoría de un flujo con IA generativa y HITL, 25 min) y la Actividad 3 (Ficha de Caso de Uso de IA para su propia empresa, 35 min). | Prueba/diseña un *prompt* estructurado con lista de verificación humana y redacta su ficha completa de piloto de IA (negocio, datos, riesgos y KPIs). |
| **6. Discusión guiada y puesta en común** | 25 min | Selecciona 3-4 fichas de casos de uso diversos, realiza un «comité de inversión y ética exprés» donde el grupo vota viabilidad y señala puntos ciegos. | Presenta su caso de uso en 2 minutos, recibe críticas constructivas del comité de compañeros y ajusta controles de riesgo. |
| **7. Síntesis, evaluación sumativa y cierre** | 20 min | Sintetiza el decálogo de adopción responsable de IA en pymes, aplica la evaluación sumativa y enlaza con el Tema 3 (IoT: cómo captar datos físicos en tiempo real). | Completa el test aplicado de cierre y redacta su compromiso de redacción/revisión de política interna de IA. |
| **TOTAL** | **240 min** | | |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «Semáforo de viabilidad y mitos de la IA»

- **Objetivo:** Diagnosticar concepciones previas sobre lo que la IA puede y no puede hacer de forma fiable en una pyme.
- **Instrucciones para el alumnado:**
  1. Individualmente (7 min), leed 6 microescenarios de pyme (por ejemplo: «usar un chatbot gratuito para redactar contratos laborales», «predecir impagos con 3 meses de históricos desordenados», «resumir actas de reunión con cuenta corporativa y revisión humana», etc.).
  2. Asignad a cada escenario luz **Verde** (viable hoy con control básico), **Ámbar** (viable solo si se cumplen condiciones de datos/seguridad) o **Roja** (alto riesgo o enfoque técnico equivocado).
  3. En plenario (13 min), el formador pide votación simultánea y debaten los dos escenarios con mayor discrepancia.
- **Materiales necesarios:** Tarjetas de semáforo (físicas o encuesta interactiva) y hoja con los 6 microescenarios.
- **Tiempo estimado:** 20 minutos (en la fase de Apertura).
- **Rol del formador:** Evitar respuestas dogmáticas; hacer emerger las condiciones de datos, riesgo legal y control humano que mueven un caso del rojo al ámbar o verde.
- **Producto o entregable esperado:** Clasificación justificada de los 6 escenarios con al menos un criterio técnico o ético por caso.
- **Criterios de éxito:** El alumnado identifica correctamente riesgos de privacidad, falta de datos históricos y alucinaciones en tareas críticas.

### Actividad 2 (Aplicación): «Diseño de flujo asistido con *prompting* estructurado y control HITL»

- **Objetivo:** Aplicar una estructura profesional de instrucciones (*prompting*) y controles *human-in-the-loop* para resolver una tarea operativa realista minimizando errores y fugas de información.
- **Instrucciones para el alumnado:**
  1. En parejas, elegid una tarea operativa del caso *AuraSalud* o una tarea estándar de negocio (p. ej., redactar respuesta a una reclamación de cliente o resumir condiciones de 3 presupuestos de proveedores anonimizados).
  2. Aplicad el marco **R-C-T-F-L** (Rol, Contexto anonimizado, Tarea concreta, Formato de salida, Límites/qué hacer si falta información).
  3. Definid una lista de chequeo de 4 puntos que el empleado deberá verificar antes de dar por válida la salida (*HITL*).
  4. Si disponéis de entorno seguro en clase, ejecutad el *prompt* con datos ficticios y auditad qué ha hecho bien y dónde ha fallado o generalizado el modelo.
- **Materiales necesarios:** Ficha de *prompting* R-C-T-F-L, texto ficticio anonimizado de prueba y portátil (o trabajo en papel estructurado si no hay conexión).
- **Tiempo estimado:** 25 minutos.
- **Rol del formador:** Comprobar que nadie introduce datos personales reales, reforzar la instrucción explícita de «no inventar datos si no constan en el texto» y mostrar cómo el formato estructurado mejora la auditabilidad.
- **Producto o entregable esperado:** *Prompt* reutilizable versionado + protocolo de revisión humana de 4 puntos.
- **Criterios de éxito:** El *prompt* elimina datos personales identificables, fija formato verificable, incluye cláusula anti-alucinación y cuenta con una revisión humana rápida y realista.

### Actividad 3 (Transferencia a la realidad laboral): «Ficha de caso de uso y piloto de IA responsable»

- **Objetivo:** Formular una propuesta rigurosa de piloto de IA de 60 días aplicable a la empresa o emprendimiento propio, equilibrando valor de negocio, datos y gobernanza.
- **Instrucciones para el alumnado:**
  1. Elegid un problema operativo real de vuestra empresa donde la IA pueda ahorrar tiempo, reducir errores o mejorar ingresos.
  2. Completad la **Plantilla de Ficha de Caso de Uso de IA** (sección 8): problema y KPI base, tipo de IA recomendada (ML / IA generativa / automatización inteligente), inventario y calidad de los datos disponibles, diseño del control humano (HITL), riesgos éticos/normativos y criterio de «seguir o parar» (*Go/No-Go*) tras 60 días.
  3. Preparad un discurso de 2 minutos como si lo presentarais al comité de dirección.
- **Materiales necesarios:** Plantilla de Ficha de Caso de Uso de IA (digital o impresa).
- **Tiempo estimado:** 35 minutos + 25 minutos de comité exprés en la fase 6.
- **Rol del formador:** Cuestionar supuestos optimistas sobre disponibilidad de datos y exigir una métrica base real antes del piloto.
- **Producto o entregable esperado:** Ficha ejecutiva de piloto de IA lista para validación interna.
- **Criterios de éxito:** Adecuación entre problema y tipo de IA elegida, análisis honesto de la calidad de datos, controles de privacidad/HITL concretos y métrica de éxito medible.

---

## 6. Caso práctico: Clínicas Dentales AuraSalud

### Contexto empresarial
**Clínicas Dentales AuraSalud** es una red pyme de **5 clínicas odontológicas** en la provincia de Valencia, con **42 empleados** (14 odontólogos, 15 higienistas/auxiliares, 8 recepcionistas, 3 administrativos y 2 directivos) y unos 11.500 pacientes activos. Utiliza un software de gestión clínica en la nube y recibe reservas por teléfono, web y WhatsApp Business.

### Situación o problema
La dirección quiere «implantar Inteligencia Artificial este año» para mejorar rentabilidad y liberar a recepción y doctores de carga administrativa. Ha recibido tres propuestas de proveedores distintos, pero solo tiene capacidad operativa y presupuesto (15.000 € anuales en piloto) para abordar **un máximo de dos iniciativas bien gobernadas**. Además, el responsable jurídico externo ha advertido que tratan **datos especialmente sensibles de salud** y que un mal paso puede generar graves sanciones de protección de datos y pérdida de confianza del paciente.

### Datos disponibles

| Propuesta sobre la mesa | Promesa del proveedor | Situación real de datos y operativa | Coste estimado año 1 |
|---|---|---|---|
| **A. Modelo predictivo de ausencias (*no-shows*) y recordatorios inteligentes** | Reducir las cancelaciones de última hora y huecos vacíos en sillón mediante predicción de riesgo de ausencia y reconfirmación automática. | 3 años de histórico de citas (68.000 registros) bien estructurados en el software clínico: fecha, tipo de tratamiento, antelación, historial de asistencia. Tasa actual de *no-shows*: 11,5 % (~95.000 €/año de capacidad desaprovechada). | 6.500 € |
| **B. Asistente de IA generativa para dictado y resumen de historiales clínicos** | Transcribir la conversación en gabinete y generar automáticamente la nota clínica y el plan de tratamiento para el paciente. | Requiere grabar audio con pacientes; el proveedor barato ofrecido almacena audios fuera de la UE y no firma aún acuerdo específico de encargado del tratamiento ni garantiza no-entrenamiento. El ahorro estimado es de 25 min/día por odontólogo. | 5.200 € (opción barata) / 11.800 € (opción sanitaria certificada UE) |
| **C. Chatbot diagnóstico automático en la web** | Responder síntomas dentales 24/7 y recomendar tratamiento y presupuesto orientativo antes de la primera visita. | No existe base de conocimiento clínica revisada; si el bot da un consejo erróneo ante una infección o urgencia, implica riesgo clínico y reputacional alto. | 7.900 € |

### Preguntas de análisis
1. ¿Qué tipo de IA corresponde a cada una de las tres propuestas (A, B y C) y cuál tiene mejor base de datos hoy?
2. ¿Qué riesgos de privacidad, seguridad del paciente y cumplimiento normativo (RGPD y marco europeo de IA —a verificar según normativa vigente—) presenta cada propuesta?
3. Si fuerais el comité de dirección con 15.000 € de presupuesto, ¿qué combinación aprobaríais, con qué proveedor/condiciones y qué descartaríais?
4. ¿Qué controles humanos (*HITL*) y métricas de piloto a 60 días fijaríais antes de escalar a las 5 clínicas?

### Tarea a realizar
En equipos de 3-4 personas, redactad un dictamen ejecutivo para la dirección de AuraSalud con:
1. Decisión motivada sobre las propuestas A, B y C (Aprobar / Aprobar condicionada / Descartar).
2. Condiciones contractuales y de privacidad mínimas exigibles al proveedor elegido.
3. Diseño del piloto en 1 sola clínica durante 60 días, indicando controles humanos y criterios de éxito.

### Posibles soluciones o criterios de análisis
- **Propuesta A (Aprobar en primer lugar):** Mejor encaje técnico y económico. Datos estructurados suficientes (68.000 citas), bajo riesgo ético/clínico si se usa para mejorar recordatorios y lista de espera (evitando penalizar o discriminar automáticamente a pacientes). Retorno medible rápido: reducir los *no-shows* aunque sea 3-4 puntos porcentuales paga con creces el proyecto.
- **Propuesta B (Aprobar solo condicionada o fase 2, nunca con el proveedor barato):** Alto valor para los doctores, pero inaceptable sin garantías de privacidad sanitaria, contrato de encargado del tratamiento (DPA), residencia de datos conforme al RGPD, consentimiento informado del paciente y revisión/firma obligatoria del odontólogo (HITL). Con 15.000 € totales, si se aprueba A (6.500 €), la opción certificada de B (11.800 €) supera el presupuesto anual (18.300 €), por lo que conviene negociar piloto reducido en 1 clínica o dejarla para fase 2 una vez A genere retorno.
- **Propuesta C (Descartar en su forma diagnóstica):** Riesgo clínico, legal y reputacional desproporcionado. Como alternativa segura de bajo coste, podría replantearse en el futuro como un asistente exclusivamente informativo/administrativo (horarios, ubicación, pedir cita, preparación básica) sin emitir diagnósticos médicos.
- **Criterios de análisis clave:** Primar calidad de datos + ROI demostrable + cumplimiento en datos de salud frente a funcionalidades llamativas de alto riesgo.

### Preguntas de reflexión final
- ¿Cuántas veces en una empresa resulta más rentable un modelo predictivo discreto (Propuesta A) que un proyecto vistoso de IA generativa (Propuesta C)?
- ¿Cómo explicaríais al equipo de recepción y a los odontólogos estas herramientas para evitar miedo al despido o rechazo por desconfianza?

---

## 7. Evaluación

### Evaluación diagnóstica breve (al inicio)
Sondeo anónimo de 3 preguntas:
1. ¿Has utilizado herramientas de IA generativa en tu trabajo en los últimos 30 días? (Sí, con herramienta corporativa / Sí, con cuenta personal gratuita / No todavía).
2. ¿Existe en tu empresa una política clara sobre qué datos se pueden introducir en una IA? (Sí / No / No lo sé).
3. ¿Qué diferencia principal ves entre *machine learning* clásico e IA generativa? (Respuesta abierta breve de 1 línea).

### Evaluación formativa durante la sesión
- Revisión guiada de las clasificaciones del «Semáforo de viabilidad» (Actividad 1).
- Auditoría directa de los *prompts* R-C-T-F-L y protocolos HITL (Actividad 2), verificando ausencia de datos personales reales y presencia de límites contra alucinaciones.
- Retroalimentación en vivo durante el comité exprés de la fase 6.

### Evaluación sumativa al final
1. Entrega de la **Ficha de caso de uso y piloto de IA responsable** (Actividad 3) aplicada a su organización.
2. Cuestionario corto de 5 ítems de decisión práctica (selección de técnica de IA adecuada, detección de riesgo de fuga de datos, identificación de necesidad de RAG, diseño de HITL y gestión de sesgo).

### Rúbrica de evaluación (para la Ficha de caso de uso de IA)

| Criterio | Insuficiente (1) | En desarrollo (2) | Adecuado (3) | Destacado (4) |
|---|---|---|---|---|
| **Encaje negocio-tecnología** | Elige una herramienta de IA sin definir el problema ni el tipo de técnica adecuada. | Define el problema de forma genérica, pero la técnica de IA propuesta no es la más apropiada. | Alinea un problema concreto de negocio con la familia de IA correcta (ML, GenAI o automatización inteligente). | Justifica por qué la IA supera a una solución tradicional simple y vincula el caso con un KPI base cuantificado. |
| **Evaluación de datos y viabilidad técnica** | Omite qué datos se requieren o asume que existen sin comprobarlo. | Nombra fuentes de datos, pero no evalúa su calidad, limpieza ni acceso seguro. | Identifica fuentes de datos reales, evalúa su calidad actual y especifica enfoque pragmático (SaaS/RAG/*prompting*). | Incluye diagnóstico realista de brechas de datos, requisitos de limpieza previa y estimación razonada de coste/esfuerzo. |
| **Control humano, ética y cumplimiento** | Ignora riesgos de privacidad, alucinaciones, sesgos o marco regulatorio. | Menciona riesgos genéricos («proteger datos») sin medidas operativas concretas. | Incorpora controles HITL claros, medidas de privacidad/anonimización y prevención de sesgos y *shadow AI*. | Integra un protocolo completo de gobernanza (clasificación de riesgo, DPA/licencia corporativa, HITL auditable y transparencia). |
| **Diseño del piloto y métricas de éxito** | Propone despliegue directo total sin pruebas ni criterios de parada. | Define un piloto vago sin duración acotada ni métricas claras. | Plantea un piloto de 60 días acotado con métricas de eficiencia/calidad y criterio *Go/No-Go*. | Diseña un experimento riguroso con grupo control o línea base, criterios objetivos de escalado/parada y plan de adopción del equipo. |

### Actividad de autoevaluación o reflexión
Checklist personal de «Madurez IA responsable» (5 min): el alumnado marca en una escala de 1 a 4 su capacidad actual para: (a) detectar cuándo **no** hace falta IA, (b) impedir fugas de datos confidenciales en el equipo, (c) diseñar un piloto acotado con revisión humana y (d) exigir garantías a un proveedor de IA. Anota el punto más débil y el recurso que revisará esta semana.

---

## 8. Materiales y recursos

### Guion de diapositivas (estructura slide por slide)

1. **Portada:** Bloque 7 · Tema 2. Inteligencia artificial (AI) aplicada a pymes.
2. **Sondeo inicial y realidad del *shadow AI*:** Por qué la IA ya está en tu empresa aunque no la hayas aprobado.
3. **Activación:** Semáforo de 6 microescenarios — separar humo comercial de valor real.
4. **El mapa de la IA sin jerga:** *Machine learning* predictivo vs. IA generativa vs. Automatización inteligente.
5. **Cuándo NO usar IA:** Si una regla fija o una hoja limpia lo resuelve al 100 %, no compliques el sistema.
6. **El combustible real:** Calidad de datos, datos estructurados vs. no estructurados y por qué falla el «basura entra, basura sale».
7. **Cómo conecta una pyme sus documentos a la IA:** *Prompting* vs. RAG vs. *Fine-tuning* (comparativa de coste y complejidad).
8. **Caso práctico:** *Clínicas Dentales AuraSalud* — 3 propuestas, 15.000 € y datos sensibles de salud.
9. **Límites que todo mando debe dominar:** Alucinaciones, sesgos, deriva del modelo y opacidad.
10. **Diseño *Human-in-the-Loop* (HITL):** Dónde situar la validación humana para ganar velocidad sin perder rigor.
11. **Ética y regulación práctica:** RGPD, propiedad intelectual y enfoque basado en riesgos del *AI Act* europeo *(con aviso de verificación de fechas vigentes)*.
12. **Política de uso aceptable en 1 página:** Reglas claras para transformar el *shadow AI* en productividad segura.
13. **Taller:** Estructura de *prompt* R-C-T-F-L + Ficha de Piloto de IA a 60 días.
14. **Síntesis y puente al Tema 3:** La IA decide mejor cuando recibe datos frescos del mundo físico: bienvenidos al IoT.

### Ficha de trabajo
Documento estructurado con:
- Los 6 microescenarios del Semáforo (Actividad 1).
- Tarjeta de referencia del marco **R-C-T-F-L** (Rol, Contexto anonimizado, Tarea, Formato, Límites anti-alucinación) + Checklist HITL de 4 verificaciones.

### Plantilla práctica replicable: Ficha de Caso de Uso y Piloto de IA (60 días)

| Sección | Preguntas guía a completar | Respuesta del proyecto |
|---|---|---|
| **1. Problema y KPI base** | ¿Qué tarea/decisión queremos mejorar? ¿Cuál es la cifra actual (tiempo, error, conversión)? | |
| **2. Enfoque de IA** | ¿ML predictivo, IA generativa (con/sin RAG) o automatización inteligente? ¿Por qué no basta una regla simple? | |
| **3. Datos necesarios** | ¿Qué datos usa? ¿Dónde están? ¿Están limpios, actualizados y legalmente utilizables? | |
| **4. Control humano (HITL)** | ¿Quién revisa la salida antes de impactar al cliente o al negocio? ¿Qué checklist aplica? | |
| **5. Privacidad, ética y ley** | ¿Hay datos personales/sensibles? ¿Licencia sin entrenamiento? ¿Riesgo de sesgo o categoría especial? | |
| **6. Piloto y *Go/No-Go*** | Alcance (equipo/volumen), coste máximo, duración (60 días) y umbral numérico para escalar o cancelar. | |

### Lecturas o recursos recomendados
- Agrawal, A., Gans, J., & Goldfarb, A. *Prediction Machines: The Simple Economics of Artificial Intelligence* (edición actualizada). Harvard Business Review Press.
- Mollick, E. *Co-Intelligence: Living and Working with AI*. Portfolio/Penguin (enfoque muy práctico sobre trabajo cotidiano con IA generativa).
- Guías oficiales introductorias sobre gobernanza y gestión de riesgos de IA (por ejemplo, marco NIST AI RMF y documentación divulgativa de la Comisión Europea).

### Vídeos, artículos y fuentes adicionales *(Validación previa obligatoria)*
> **Nota importante para el formador:** Validar antes de la sesión la vigencia exacta de normas, guías y enlaces, dado el ritmo acelerado de cambios en IA.
- Verificar el calendario vigente de aplicación del **Reglamento Europeo de Inteligencia Artificial (Reglamento UE 2024/1689 — AI Act)** y las guías prácticas publicadas por la **AESIA (Agencia Española de Supervisión de la Inteligencia Artificial)**.
- Consultar las últimas guías de la **AEPD (Agencia Española de Protección de Datos)** sobre privacidad en sistemas de IA y uso de modelos generativos.
- Revisar antes de clase la política vigente de retención y entrenamiento de datos de las plataformas de IA generativa más habituales en pymes (planes Business/Enterprise frente a planes gratuitos) para ofrecer comparativas actualizadas.

### Glosario de términos clave

| Término | Definición operativa |
|---|---|
| **Alucinación** | Respuesta generada por una IA que contiene información falsa o inventada expresada con aparente seguridad. |
| ***Fine-tuning*** | Ajuste fino de los pesos de un modelo preentrenado mediante ejemplos especializados; más costoso y técnico que RAG. |
| ***Human-in-the-loop (HITL)*** | Intervención humana diseñada explícitamente para supervisar, corregir o aprobar resultados de la IA. |
| **LLM (*Large Language Model*)** | Modelo de lenguaje de gran tamaño capaz de procesar y generar texto en lenguaje natural a partir de patrones aprendidos. |
| ***Machine Learning*** | Rama de la IA centrada en algoritmos que aprenden patrones de datos para predecir o clasificar. |
| ***Prompt*** | Instrucción estructurada que el usuario proporciona a un sistema de IA generativa para guiar su salida. |
| ***RAG (Retrieval-Augmented Generation)*** | Técnica que consulta una base documental propia de la empresa para fundamentar las respuestas de la IA generativa. |
| ***Shadow AI*** | Uso no autorizado ni supervisado de herramientas de IA públicas dentro de la empresa por parte de empleados. |

---

## 9. Adaptaciones para modalidad híbrida

### Sesión presencial
- Realizar el «Semáforo de viabilidad» físicamente con tarjetas verdes, amarillas y rojas levantadas al unísono para visualizar de inmediato consensos y desacuerdos.
- En el taller de *prompting* (Actividad 2), proyectar en pantalla un ejemplo en vivo (con datos 100 % ficticios) comparando un *prompt* vago frente al *prompt* R-C-T-F-L para demostrar la reducción de alucinaciones.

### Sesión online síncrona
- Usar sondeo anónimo integrado para la pregunta de *shadow AI* (el anonimato online favorece respuestas mucho más honestas).
- Compartir la plantilla de la Ficha de Caso de Uso en documento colaborativo (Google Docs / Notion / Loop) donde cada equipo o participante trabaja en su pestaña y el formador deja comentarios en tiempo real.
- Durante el comité exprés (fase 6), los participantes votan en el chat «Aprobar / Aprobar con condiciones / Replantear» tras cada presentación de 2 minutos.

### Sesión asíncrona (trabajo previo y posterior en plataforma LMS)
- **Pre-trabajo (20 min):** Lectura de una infografía comparativa «ML clásico vs. IA generativa» y envío anónimo de una tarea real del puesto que el participante desearía agilizar con IA.
- **Post-trabajo (30 min):** Redacción de un borrador de «Política de uso aceptable de IA en 1 página» adaptado a su empresa (subido al LMS) y revisión de un microcuestionario de casos éticos.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Se apoya directamente en la limpieza de procesos y el principio de fuente única de verdad (*SSOT*) trabajados en el **Tema 1 (Digitalización empresarial)**, demostrando que la calidad del dato determina el éxito de la IA.
- **Competencias que desarrolla:** Pensamiento crítico ante soluciones tecnológicas, evaluación de casos de uso basados en datos, diseño de controles humanos (*HITL*) y criterio ético-regulatorio para la adopción segura de IA.
- **Conexión dentro del plan de 10 bloques:**
  - *Tema anterior (Bloque 7, Tema 1 — Digitalización empresarial):* Sin procesos digitalizados y documentos ordenados no existen datos fiables para alimentar modelos predictivos ni sistemas RAG.
  - *Tema posterior (Bloque 7, Tema 3 — Internet de las cosas, IoT):* Mientras la IA procesa y convierte datos en predicciones y decisiones, el IoT proporciona el flujo continuo de datos del mundo físico (máquinas, flotas, almacenes) que alimenta casos avanzados como el mantenimiento predictivo.
- **Evidencia de aprendizaje que dejará el alumnado:** Una **Ficha de caso de uso y piloto de IA responsable a 60 días** (con diagnóstico de datos, controles HITL y criterios *Go/No-Go*) y un borrador de política interna de uso aceptable de IA.

---

## Siguientes pasos para el formador

1. **Verificar normativa vigente:** Revisar justo antes de la edición del curso las obligaciones ya exigibles del *AI Act* europeo y las guías vigentes de la AEPD/AESIA.
2. **Preparar entorno seguro de demostración:** Si realizas demo en directo de *prompting*, utiliza siempre una cuenta profesional sin entrenamiento y un conjunto de datos sintéticos preparados de antemano (plan B: capturas de pantalla por si falla la conexión).
3. **Recopilar los casos del pre-trabajo:** Seleccionar 2 ejemplos reales enviados por el alumnado para usarlos como referencia en el microlearning I y aumentar la relevancia percibida.
4. **Tender el puente al Tema 3:** Cerrar preguntando al grupo: «Si nuestros modelos predictivos necesitan datos frescos y objetivos de máquinas, mercancías o espacios físicos, ¿cómo los capturamos sin intervención manual?».
