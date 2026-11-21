# Tema 4. Inteligencia artificial en big data

## 1. Ficha del tema

| Campo | Detalle |
| --- | --- |
| **Título del tema** | Tema 4. Inteligencia artificial en big data |
| **Bloque y posición dentro del programa** | Bloque 9: Big data — Posición 4 de 5 |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Mandos intermedios y emprendedores |
| **Nivel de dificultad** | Intermedio |
| **Prerrequisitos** | Haber completado los Temas 1, 2 y 3 del Bloque 9 (arquitecturas de datos, KPIs, calidad/gobernanza y MVPs analíticos ágiles). No se requieren conocimientos de programación ni matemáticas avanzadas. |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado será capaz de seleccionar el enfoque adecuado de inteligencia artificial aplicada sobre big data (modelos predictivos, segmentación, recomendación, detección de anomalías o IA generativa) para resolver problemas reales de negocio en pymes, evaluando sus requisitos de datos, métricas de impacto, riesgos y viabilidad operativa. |

---

## 2. Objetivos de aprendizaje

Al concluir esta sesión, el alumnado será capaz de:

1. **Diferenciar** cuándo un problema de negocio requiere reglas deterministas, aprendizaje automático (*machine learning* supervisado o no supervisado) o inteligencia artificial generativa, evitando soluciones sobredimensionadas. *(Nivel de Bloom: Analizar)*
2. **Asociar** problemas empresariales concretos con las familias clave de modelos de IA sobre datos: predicción (clasificación y regresión), segmentación (*clustering*), sistemas de recomendación y detección de anomalías. *(Nivel de Bloom: Aplicar)*
3. **Evaluar** el rendimiento de un modelo de IA desde una perspectiva de negocio, interpretando el equilibrio entre falsos positivos y falsos negativos, el impacto económico y la degradación del modelo (*drift*). *(Nivel de Bloom: Evaluar)*
4. **Identificar** casos de uso viables, límites operativos y riesgos críticos de la IA generativa aplicada a datos empresariales (alucinaciones, privacidad, derechos de autor y uso de RAG). *(Nivel de Bloom: Analizar)*
5. **Diseñar** la especificación ejecutiva de un caso de uso de IA (Canvas de Caso de Uso de IA) definiendo problema, datos de entrenamiento, tipo de modelo, intervención humana (*human-in-the-loop*) y criterios éticos/regulatorios de control. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Del big data a la inteligencia artificial: cuándo usar reglas, *Machine Learning* o IA generativa

**Explicación breve y clara**  
La inteligencia artificial no es un sustituto mágico de la mala calidad de datos ni sirve para todo. Mientras el big data proporciona el combustible (datos limpios, estructurados o no estructurados y accesibles), la IA aporta motores capaces de descubrir patrones complejos, predecir comportamientos futuros o generar contenido a gran escala. Para un mando intermedio o emprendedor, la decisión más rentable suele ser elegir la **técnica más simple que resuelva el problema**: si una regla de negocio explícita resuelve el 85 % del caso, no conviene invertir en un modelo complejo hasta validar el salto incremental de valor.

**Conceptos clave**  
- Jerarquía conceptual: Inteligencia Artificial (IA) -> Aprendizaje Automático (*Machine Learning*) -> Aprendizaje Profundo (*Deep Learning*) -> IA Generativa (LLMs y modelos multimodales).
- Aprendizaje supervisado (con histórico etiquetado) vs. aprendizaje no supervisado (sin etiquetas previas).
- Reglas de negocio (heurísticas) vs. modelos de *Machine Learning*.
- Decisión *Build vs. Buy* (desarrollo a medida vs. APIs y herramientas SaaS con IA integrada).

**Definiciones necesarias**  
- **Aprendizaje supervisado:** Enfoque de *machine learning* donde el algoritmo aprende a predecir un resultado concreto (por ejemplo, impago sí/no o ventas del mes próximo) a partir de ejemplos históricos ya etiquetados.
- **Aprendizaje no supervisado:** Enfoque que descubre agrupaciones o patrones ocultos en los datos sin que nadie haya etiquetado previamente las respuestas (por ejemplo, agrupar clientes por hábitos de compra).
- **IA Generativa:** Familia de modelos entrenados con grandes volúmenes de texto, imágenes o código capaces de crear contenido nuevo, resumir documentos o conversar en lenguaje natural a partir de instrucciones (*prompts*) y contexto.
- **Human-in-the-loop (HITL):** Diseño operativo en el que la IA propone, clasifica o redacta, pero una persona revisa y aprueba las decisiones críticas antes de ejecutarlas.

**Ejemplo práctico realista (pyme en transformación digital)**  
Una empresa murciana de venta B2B de envases (60 empleados) quiere automatizar la clasificación de correos de clientes. Para separar facturas adjuntas de correos normales basta una **regla sencilla** por asunto y buzón dedicado; para estimar qué clientes tienen alto riesgo de dejar de comprar en 90 días necesitan **Machine Learning supervisado** sobre el histórico de pedidos y reclamaciones; y para redactar borradores de respuesta a consultas técnicas complejas consultando sus manuales en PDF, utilizan **IA generativa** con revisión humana previa al envío.

**Errores frecuentes**  
- Utilizar IA generativa (como un modelo de lenguaje) para tareas de predicción numérica o cálculo exacto de inventarios donde funcionan mejor modelos estadísticos o de *machine learning* clásico.
- Comprar desarrollos de IA a medida cuando existen funcionalidades integradas en el CRM, ERP o proveedores *cloud* mucho más baratas y probadas (*buy before build*).
- Intentar entrenar modelos predictivos sin disponer de suficientes ejemplos históricos etiquetados del evento que se desea predecir.

**Preguntas que el alumnado debería poder responder**  
- ¿Qué diferencia fundamental existe entre aprendizaje supervisado, aprendizaje no supervisado e IA generativa?
- ¿En qué situación de tu empresa sería mejor empezar con una regla sencilla antes de entrenar un modelo de *machine learning*?
- ¿Qué criterios aplicarías en una pyme para decidir entre comprar una herramienta SaaS con IA o desarrollar un modelo propio?

---

### 3.2. Familias clave de modelos de IA sobre datos de negocio

**Explicación breve y clara**  
La gran mayoría de aplicaciones rentables de la IA tradicional en empresas digitales se concentran en cuatro grandes capacidades: **predecir** un resultado (modelos predictivos), **agrupar** entidades similares (segmentación), **sugerir** la mejor opción personalizada (recomendación) y **detectar comportamientos inusuales** (detección de anomalías). Comprender qué entrada necesita y qué salida produce cada familia permite a los responsables de negocio formular peticiones claras a proveedores y equipos técnicos.

**Conceptos clave**  
- Modelos predictivos: clasificación (probabilidad de un evento discreto, p. ej., fuga de cliente/*churn* o impago) y regresión (estimación de un valor numérico continuo, p. ej., demanda o precio óptimo).
- Segmentación dinámica (*clustering*): agrupación por comportamiento real (RFM avanzado, patrones de uso) frente a segmentación demográfica estática.
- Motores de recomendación: filtrado colaborativo ("usuarios como tú compraron..."), basado en contenido (similitud de atributos) e híbrido.
- Detección de anomalías: identificación de desviaciones atípicas en transacciones, devoluciones, ciberseguridad o sensores industriales.

**Definiciones necesarias**  
- **Modelo de clasificación:** Algoritmo que asigna una categoría o probabilidad a un registro (p. ej., "cliente con 78 % de probabilidad de baja en los próximos 60 días").
- **Modelo de regresión:** Algoritmo que estima una magnitud numérica continua (p. ej., "se venderán 1.420 unidades de la referencia X la próxima semana").
- **Clustering (Segmentación automática):** Técnica no supervisada que agrupa clientes, productos o tiendas según similitudes reales de comportamiento sin imponer segmentos preconcebidos.
- **Detección de anomalías:** Técnicas estadísticas o de IA que señalan eventos raros que se apartan significativamente del patrón normal (posible fraude, fallo técnico o error de facturación).

**Ejemplo práctico realista (pyme en transformación digital)**  
Una plataforma pyme de venta online de alimentación para mascotas en Barcelona (50 empleados) aplica las cuatro familias de forma escalonada: (1) **Segmentación** para distinguir compradores ocasionales de snacks, dueños de cachorros y suscriptores fieles de pienso veterinario; (2) **Predicción de *churn*** para avisar al equipo de retención cuando un comprador recurrente retrasa su pedido habitual más de 10 días; (3) **Recomendación** de productos complementarios en el carrito (antiparasitarios según peso y temporada); y (4) **Detección de anomalías** para bloquear pedidos con patrones inusuales de múltiples tarjetas y direcciones distintas.

**Errores frecuentes**  
- Crear 12 micro-segmentos estadísticos muy sofisticados que el equipo de marketing no tiene capacidad operativa para atender con mensajes distintos.
- Implementar un recomendador sin resolver el "arranque en frío" (*cold start*) para productos nuevos o clientes que visitan la web por primera vez.
- Confundir la probabilidad de un modelo predictivo con una certeza absoluta en lugar de usarla para priorizar recursos comerciales limitados.

**Preguntas que el alumnado debería poder responder**  
- ¿Qué diferencia hay entre un modelo de clasificación y un modelo de regresión? Pon un ejemplo empresarial de cada uno.
- ¿Qué ventaja ofrece la segmentación conductual mediante *clustering* frente a segmentar solo por edad o provincia?
- ¿Qué problema resuelve la detección de anomalías cuando apenas existen casos históricos etiquetados de fraude o avería?

---

### 3.3. IA generativa aplicada a los datos empresariales: casos de uso, RAG y límites

**Explicación breve y clara**  
La IA generativa (grandes modelos de lenguaje o LLMs y modelos multimodales) ha democratizado la explotación de los **datos no estructurados** que antes quedaban olvidados en las pymes: correos, contratos, manuales técnicos, actas, reseñas, incidencias y catálogos. Sin embargo, los modelos genéricos no conocen los datos privados de tu empresa y pueden inventar respuestas plausibles pero falsas (**alucinaciones**). Por eso, el patrón más práctico y seguro para conectar la IA generativa con el conocimiento interno de una empresa es **RAG** (*Retrieval-Augmented Generation*), que obliga al modelo a responder citando únicamente documentos corporativos actualizados.

**Conceptos clave**  
- Explotación de datos no estructurados (resumen, extracción de campos, clasificación de incidencias, análisis de voz del cliente).
- Copilotos de productividad (atención al cliente, soporte a ventas, generación y enriquecimiento de fichas de producto, consultas en lenguaje natural sobre bases de datos).
- Arquitectura **RAG** (*Generación Aumentada por Recuperación*) vs. ajuste fino (*Fine-tuning*).
- Riesgos específicos: alucinaciones, fuga de datos confidenciales en herramientas públicas gratuitas, sesgos y propiedad intelectual.

**Definiciones necesarias**  
- **Alucinación:** Generación por parte de un modelo de IA generativa de afirmaciones, cifras o citas inventadas pero redactadas con tono totalmente convincente.
- **RAG (*Retrieval-Augmented Generation*):** Técnica que busca primero los fragmentos relevantes en las bases documentales o datos internos autorizados de la empresa y los entrega al modelo generativo para que elabore una respuesta fundamentada y trazable.
- **Prompt engineering (diseño de instrucciones):** Práctica de estructurar contexto, rol, restricciones y formato de salida para obtener respuestas consistentes y útiles de un modelo generativo.

**Ejemplo práctico realista (pyme en transformación digital)**  
Una ingeniería pyme de climatización industrial en Sevilla (40 empleados) tenía 600 manuales técnicos de fabricantes y 12 años de partes de averías en PDF. Sus técnicos de campo perdían una media de 35 minutos por incidencia buscando códigos de error. En lugar de entrenar un modelo propio (inviable por coste), implantaron un **asistente interno con arquitectura RAG** en un entorno privado en la nube (sin usar sus datos para entrenar modelos públicos): el técnico consulta por voz el código de error y el modelo de caldera, y el asistente devuelve el procedimiento exacto citando la página del manual correspondiente, siempre bajo validación final del técnico.

**Errores frecuentes**  
- Permitir que empleados peguen datos personales de clientes, nóminas o contratos confidenciales en versiones públicas gratuitas de herramientas de IA generativa ("Shadow AI").
- Conectar un chatbot de IA generativa directamente al cliente final sin filtros, sin RAG actualizado y sin escalado rápido a un humano.
- Invertir en *fine-tuning* costoso cuando la información cambia cada semana (como precios o stock), situación en la que RAG o conexión a API es mucho más eficaz y barata.

**Preguntas que el alumnado debería poder responder**  
- ¿Por qué la técnica RAG suele ser preferible al *fine-tuning* para consultar documentación viva de una pyme?
- ¿Qué es el "Shadow AI" y qué política mínima debería establecer una empresa para gestionarlo sin frenar la innovación?
- ¿En qué tipo de procesos resulta imprescindible mantener el esquema *human-in-the-loop* al usar IA generativa?

---

### 3.4. Evaluación orientada a negocio, mantenimiento (*MLOps* ligero), sesgos y ética/regulación

**Explicación breve y clara**  
Poner un modelo de IA en producción no es el final del proyecto, sino el principio de su vida útil. Un error habitual es juzgar un modelo solo por su porcentaje global de acierto (*accuracy*), ignorando que **los falsos positivos y los falsos negativos tienen costes económicos muy diferentes**. Además, los modelos envejecen porque el comportamiento de los clientes y del mercado cambia (*data drift* y *model drift*). Finalmente, cualquier directivo debe vigilar los sesgos discriminatorios en los datos históricos y asegurarse de cumplir la normativa europea y española vigente sobre privacidad e inteligencia artificial.

**Conceptos clave**  
- Coste asimétrico del error: falsos positivos (falsa alarma) vs. falsos negativos (caso real no detectado).
- Degradación del modelo (*data drift* y *concept drift*) y monitorización periódica (*MLOps* ligero).
- Explicabilidad (*Explainable AI*) y confianza del usuario de negocio.
- Sesgos algorítmicos heredados de datos históricos y cumplimiento normativo *(nota para el formador: verificar el calendario de aplicación vigente del Reglamento Europeo de IA —AI Act— y las directrices de la AEPD sobre decisiones automatizadas y RGPD antes de impartir esta sección)*.

**Definiciones necesarias**  
- **Falso positivo vs. Falso negativo:** En detección de fraude, un falso positivo bloquea injustamente a un cliente legítimo (fricción y pérdida de venta), mientras que un falso negativo deja pasar un fraude real (pérdida económica directa). El umbral de decisión debe calibrarse según el coste de cada error.
- **Data drift / Model drift:** Pérdida progresiva de precisión de un modelo en producción porque los datos de entrada o las relaciones de mercado han cambiado respecto al periodo con el que fue entrenado (por ejemplo, tras una subida brusca de inflación o un cambio de catálogo).
- **Sesgo algorítmico:** Reproducción o amplificación sistemática de prejuicios o desequilibrios presentes en los datos históricos de entrenamiento que perjudica injustamente a determinados colectivos o segmentos.
- **Explicabilidad:** Capacidad de comprender y comunicar en lenguaje de negocio qué variables principales han llevado a un modelo a emitir una predicción o recomendación concreta.

**Ejemplo práctico realista (pyme en transformación digital)**  
Una empresa de alquiler de vehículos industriales en Alicante (80 empleados) implantó un modelo de *scoring* crediticio automático para nuevos clientes autónomos. A los 9 meses notaron un repunte de impagos y quejas comerciales: al auditar el modelo descubrieron *drift* (había sido entrenado con datos previos a la subida de tipos de interés) y un sesgo geográfico injustificado por código postal. Establecieron una revisión trimestral de métricas, sustituyeron el código postal por variables reales de comportamiento de pago y limitaron la automatización: el modelo aprueba automáticamente casos claros, pero cualquier rechazo pasa por revisión humana (*human-in-the-loop*).

**Errores frecuentes**  
- Evaluar un modelo de detección de fraude o *churn* únicamente por su "precisión global" (*accuracy*): si solo el 2 % de las operaciones son fraudulentas, un sistema inútil que diga siempre "no es fraude" tendría un 98 % de *accuracy* y un 0 % de utilidad.
- Desplegar un modelo y no volver a medir su desempeño durante un año.
- Aceptar modelos de "caja negra" sin explicabilidad en decisiones sensibles (crédito, selección de personal, precios discriminatorios o bloqueo de clientes).

**Preguntas que el alumnado debería poder responder**  
- ¿Por qué un modelo con 98 % de acierto global puede ser completamente inútil para detectar fraude o averías poco frecuentes?
- ¿Qué diferencia hay entre el coste de un falso positivo y el de un falso negativo en una campaña de retención de clientes?
- ¿Por qué un modelo de IA que funcionaba muy bien en enero puede tomar malas decisiones en octubre?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** desmitifica la IA con enfoque estrictamente directivo y práctico, guiando al alumnado desde la selección de la técnica adecuada hasta el diseño integral de soluciones sobre datos reales.

| Fase | Tiempo | Duración | Qué hace el formador | Qué hace el alumnado |
| --- | --- | --- | --- | --- |
| **1. Apertura y activación** | 00:00 – 00:25 | **25 min** | Conecta con el MVP ágil del Tema 3, lanza el diagnóstico inicial y facilita la **Actividad 1 (Semáforo: ¿Regla, ML o IA Generativa?)**. | Clasifica 6 retos cotidianos según si requieren reglas simples, *Machine Learning* o IA generativa, justificando sus elecciones en parejas. |
| **2. Exposición breve / Microlearning I** | 00:25 – 00:55 | **30 min** | Explica los apartados 3.1 y 3.2 (Mapa de la IA, *Build vs. Buy* y las 4 familias: predicción, segmentación, recomendación y detección de anomalías). | Toma notas estructuradas, contrasta ejemplos por familia de modelo y pregunta sobre requisitos mínimos de datos en cada caso. |
| **3. Actividad de aplicación (Falsos positivos vs. negativos)** | 00:55 – 01:25 | **30 min** | Dinamiza la **Actividad 2 (El coste real del error en IA)** en grupos pequeños, retando a los equipos a traducir métricas técnicas a euros y experiencia de cliente. | En equipos de 3-4 personas, calcula el impacto económico de falsos positivos vs. falsos negativos en 2 escenarios y propone el umbral operativo adecuado. |
| **Pausa** | 01:25 – 01:40 | **15 min** | Descanso operativo. | Descanso y networking. |
| **4. Exposición breve / Microlearning II** | 01:40 – 02:10 | **30 min** | Expone los apartados 3.3 y 3.4 (IA generativa, RAG, *Shadow AI*, *drift*, explicabilidad, sesgos y marco ético/regulatorio con advertencia de verificación vigente). | Identifica casos de uso seguros de IA generativa con RAG y analiza medidas concretas contra alucinaciones, *drift* y sesgos. |
| **5. Análisis de caso práctico** | 02:10 – 03:00 | **50 min** | Presenta el caso **Moda Mediterránea Online S.L.**, distribuye los datos cuantitativos y facilita la priorización y diseño de la cartera de iniciativas de IA. | Analiza el caso en equipo, empareja cada problema con la familia de IA correcta, prioriza los 2 primeros casos de uso y define arquitectura de control (HITL, RAG, métricas de negocio). |
| **6. Discusión guiada y puesta en común** | 03:00 – 03:25 | **25 min** | Modera el debate comparando cómo cada equipo priorizó las iniciativas de *Moda Mediterránea* y cuestiona riesgos de privacidad, *drift* y *Build vs. Buy*. | Defiende su cartera priorizada de IA en 3 minutos y evalúa críticamente las propuestas de otros equipos. |
| **7. Actividad de transferencia individual** | 03:25 – 03:45 | **20 min** | Guía la **Actividad 3 (Canvas de Caso de Uso de IA propio)** sobre el negocio o departamento real de cada alumno. | Diseña individualmente un caso de uso de IA viable para su organización especificando tipo de técnica, datos necesarios, impacto, *HITL* y riesgos. |
| **8. Síntesis, evaluación y cierre** | 03:45 – 04:00 | **15 min** | Resume los 5 principios directivos de la IA sobre big data, recoge el Canvas evaluable, aplica la autoevaluación y enlaza con el Tema 5 (Casos de uso en la industria). | Completa su autoevaluación y sube el Canvas de Caso de Uso de IA al campus virtual. |

*Suma total verificada: 25 + 30 + 30 + 15 + 30 + 50 + 25 + 20 + 15 = **240 minutos (4 horas exactas)**.*

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Semáforo — ¿Regla simple, Machine Learning o IA Generativa?

- **Nombre:** Elige el martillo correcto para cada clavo.
- **Objetivo:** Desmontar el impulso de aplicar IA generativa o modelos complejos a cualquier problema y ejercitar el criterio de proporcionalidad técnica.
- **Instrucciones para el alumnado:**
  1. El formador presenta 6 necesidades empresariales concretas:
     - *(1) Enviar un cupón automático a todo cliente que cumpla años hoy.*
     - *(2) Estimar cuántos pedidos recibirá el almacén la semana del Black Friday.*
     - *(3) Resumir 300 reseñas negativas del último mes y extraer los 5 defectos más repetidos.*
     - *(4) Bloquear una transacción con tarjeta que presenta un patrón inusual a las 3:00 de la madrugada.*
     - *(5) Agrupar a los 15.000 clientes del e-commerce según su frecuencia, ticket y sensibilidad al descuento.*
     - *(6) Calcular el margen bruto exacto de cada factura del mes.*
  2. Individualmente (4 min) y luego en parejas (6 min), asignad a cada caso: **R** (Regla / consulta tradicional), **ML** (*Machine Learning* predictivo, segmentación o anomalías) o **GenIA** (IA Generativa).
  3. Puesta en común rápida (5 min) debatiendo discrepancias.
- **Materiales necesarios:** Tarjetas de colores o votación digital (Mentimeter/chat).
- **Tiempo estimado:** 15 minutos (dentro de la fase de Apertura y activación).
- **Rol del formador:** Destacar por qué el caso (1) y el (6) son reglas deterministas (usar GenIA en el 6 sería un error grave por riesgo de alucinación aritmética), mientras (2), (4) y (5) son ML clásico y (3) es ideal para GenIA.
- **Producto o entregable esperado:** Clasificación razonada de los 6 escenarios.
- **Criterios de éxito:** El alumnado acierta al menos 5 de 6 escenarios y justifica por qué no se debe usar IA generativa para cálculos deterministas exactos.

---

### Actividad 2 (Aplicación): El coste real del error — Falsos positivos vs. Falsos negativos

- **Nombre:** Traduce el acierto del algoritmo a euros y experiencia de cliente.
- **Objetivo:** Evaluar modelos de clasificación desde criterios económicos y operativos en lugar de depender de métricas técnicas aisladas.
- **Instrucciones para el alumnado:**
  1. En grupos de 3-4 personas, analizad dos escenarios de negocio:
     - **Escenario A (Retención de clientes SaaS B2B):** Un modelo predice qué clientes se darán de baja el próximo mes. A cada cliente marcado como "riesgo alto", un gestor le dedica 1 hora y le ofrece un mes de consultoría gratuita (coste total de intervención: **120 €**). Si perdemos a un cliente real que el modelo no detectó, perdemos **1.800 €** de margen anual.
     - **Escenario B (Detección automática de fraude en devoluciones de e-commerce):** Si el modelo bloquea automáticamente la cuenta de un cliente honesto por error (falso positivo), el cliente se marcha y publica una reseña negativa (pérdida estimada de valor de vida y reputación: **450 €**). Si deja pasar una devolución fraudulenta (falso negativo), perdemos el coste de la prenda (**35 €**).
  2. Para cada escenario, responded: (a) ¿Qué error sale más caro: un falso positivo o un falso negativo? (b) ¿Preferiríais un modelo más "sensible" (que avise ante la mínima duda) o más "conservador" (que solo actúe cuando esté muy seguro)? (c) ¿Qué mecanismo *human-in-the-loop* pondríais en el escenario más delicado?
- **Materiales necesarios:** Ficha impresa o digital con los dos escenarios y tabla de análisis.
- **Tiempo estimado:** 30 minutos (20 min debate grupal + 10 min puesta en común).
- **Rol del formador:** Ayudar al alumnado a ver la asimetría opuesta de ambos escenarios (en A duele mucho más el falso negativo -> interesa alta sensibilidad; en B duele mucho más el falso positivo automático -> conviene alta precisión o revisión humana antes de bloquear).
- **Producto o entregable esperado:** Recomendación ejecutiva de calibración del umbral y protocolo *HITL* para ambos escenarios.
- **Criterios de éxito:** Los equipos identifican correctamente la asimetría de costes en ambos escenarios y proponen acciones proporcionales que protegen tanto margen como reputación.

---

### Actividad 3 (Transferencia a la realidad laboral): Canvas de Caso de Uso de IA propio

- **Nombre:** Especificación ejecutiva de una iniciativa de IA viable para tu empresa.
- **Objetivo:** Transferir los criterios de selección de modelos, datos, *build vs. buy*, control humano y gestión de riesgos a una oportunidad concreta del entorno laboral del participante.
- **Instrucciones para el alumnado:**
  1. Elige un reto real de tu empresa o proyecto emprendedor donde ya existan (o puedan captarse a corto plazo) datos relevantes.
  2. Completa de forma individual el **Canvas de Caso de Uso de IA** (disponible en la Sección 8), rellenando sus 8 bloques: Problema y KPI, Tipo de IA justificado (por qué no basta una regla), Datos necesarios y su calidad actual, Enfoque *Build vs. Buy*, Gestión del error (falso positivo vs. negativo o alucinaciones/RAG), Control humano (*HITL*), Riesgos éticos/privacidad y Plan de piloto ágil (4-6 semanas).
  3. Sube el Canvas completado al campus virtual antes del cierre.
- **Materiales necesarios:** Plantilla del Canvas de Caso de Uso de IA (digital o impresa).
- **Tiempo estimado:** 20 minutos.
- **Rol del formador:** Revisar individualmente que los casos elegidos tengan datos realistas y que el nivel de automatización sea prudente (*human-in-the-loop* en decisiones de alto impacto).
- **Producto o entregable esperado:** Canvas individual completo de 1 página evaluable mediante rúbrica.
- **Criterios de éxito:** Existe correspondencia exacta entre el problema y la familia de IA elegida, se explicita la estrategia frente a errores/riesgos y se propone un enfoque proporcional de *Build vs. Buy*.

---

## 6. Caso práctico

### Contexto empresarial
**Moda Mediterránea Online S.L.** es una pyme valenciana de moda casual omnicanal con 6 tiendas físicas en la Comunidad Valenciana y Cataluña, un e-commerce propio en crecimiento (65 % de las ventas totales), 75 empleados y una facturación anual aproximada de 14 millones de euros *(caso ficticio con fines docentes)*. Cuenta con un ERP de stock, una plataforma e-commerce (Shopify/PrestaShop o similar), un CRM con 110.000 clientes registrados y un equipo de atención al cliente de 6 personas.

### Situación o problema
En el último año, las ventas online crecieron un 22 %, pero el **beneficio neto cayó** debido a cuatro presiones simultáneas:
1. La **tasa de devoluciones online ha subido al 31 %** (gran parte por problemas de talla y un porcentaje creciente de abuso de "compra para un evento y devolución usada").
2. El **coste de captación digital se ha encarecido**, mientras el 58 % de los clientes solo compra una vez y nunca vuelve.
3. El **ticket medio online está estancado en 64 €** porque los clientes compran una sola prenda sin añadir complementos.
4. El equipo de atención al cliente está desbordado con **4.200 consultas mensuales** (el 70 % repetitivas sobre tallas, estado de envíos y políticas de devolución) y el equipo de catálogo tarda 3 semanas en redactar y traducir al inglés y francés las fichas de cada nueva colección.

La dirección quiere invertir **45.000 € en los próximos 9 meses** en iniciativas de inteligencia artificial, pero recibe propuestas contradictorias de agencias y no sabe qué abordar primero, qué comprar vs. desarrollar ni cómo evitar riesgos legales o reputacionales.

### Datos disponibles

| Área / Dataset | Histórico y volumen | Calidad actual | Observación clave |
| --- | --- | --- | --- |
| **Pedidos y devoluciones (e-commerce + tiendas)** | 3 años (~420.000 líneas de pedido) | Alta (94 % completa) | Incluye talla comprada, motivo declarado de devolución y método de pago; falta estandarizar las medidas exactas en cm de algunas prendas de proveedores externos. |
| **Navegación web y carritos** | 18 meses de eventos web (JSON) | Media (78 % trazable) | Los clientes no logueados dificultan el seguimiento entre móvil y ordenador. |
| **Base de clientes CRM y campañas email** | 110.000 clientes (3 años) | Alta en compras, baja en datos demográficos | Permite calcular recencia, frecuencia, valor monetario y tasa de devolución histórica por cliente. |
| **Tickets de atención al cliente y chats** | 2 años (~85.000 conversaciones) | Texto no estructurado con datos personales (nombres, direcciones, DNI en algunos casos) | Muy útil para detectar dudas reales de tallaje, pero requiere anonimización y control de privacidad. |
| **Catálogo y fichas de producto** | 3.500 referencias activas por temporada | Fotos y atributos básicos en ERP | Redacción manual inconsistente; genera muchas consultas repetidas sobre composición y ajuste. |

### Preguntas de análisis
1. Empareja cada uno de los **4 problemas de negocio** de Moda Mediterránea Online S.L. con la **familia de IA** más adecuada (modelos predictivos, segmentación, recomendación, detección de anomalías o IA generativa), señalando dónde conviene simplemente mejorar una regla o dato base antes de usar IA.
2. Con un presupuesto total de **45.000 €** y sin equipo interno de científicos de datos (solo 1 responsable de e-commerce y 1 analista de negocio), ¿en qué casos recomendaríais **comprar/integrar soluciones SaaS (*Buy*)** frente a **desarrollar a medida (*Build*)**?
3. Seleccionad las **2 iniciativas prioritarias** para los primeros 4 meses y justificad el orden según impacto en margen neto, calidad actual del dato y rapidez de retorno.
4. Diseñad los **controles operativos y éticos** críticos para:
   - La detección de devoluciones abusivas/fraudulentas (gestión de falsos positivos y *human-in-the-loop*).
   - El asistente de IA generativa para atención al cliente y fichas de producto (uso de RAG, anonimización de datos personales y prevención de alucinaciones).

### Tarea a realizar
En equipos de 4 personas, actuad como **asesores de estrategia de IA y datos** para la dirección de Moda Mediterránea Online S.L. y presentad una propuesta estructurada con:
1. **Mapa Problema -> Técnica de IA -> Build vs. Buy** para los 4 retos de la empresa.
2. **Selección y justificación de las 2 iniciativas de Ola 1 (Meses 1-4)** respetando el presupuesto de 45.000 € (dejando margen para Ola 2 y mantenimiento).
3. **Diseño detallado de una de las dos iniciativas** usando criterios de negocio: KPI objetivo, línea base, gestión de falsos positivos/negativos o alucinaciones, intervención humana (*HITL*) y plan frente a *drift* (cambios de temporada primavera/verano vs. otoño/invierno).

### Posibles soluciones o criterios de análisis
Una propuesta de alta calidad incluirá los siguientes criterios orientativos:
- **Mapeo correcto Problema -> Familia de IA:**
  - *Devoluciones por talla y abuso:* Dos problemas distintos que no deben mezclarse. Para reducir devoluciones por talla, mejorar primero el dato maestro de medidas reales + **recomendador de talla** (*SaaS* especializado). Para devoluciones abusivas, **detección de anomalías / clasificación** sobre historial de devoluciones por cliente/dirección/tiempo de retorno.
  - *Clientes que no repiten (58 %):* **Segmentación (*clustering*)** conductual + **modelo predictivo de abandono (*churn*)** para disparar acciones de fidelización selectivas (sin regalar descuentos a quien ya iba a comprar).
  - *Ticket medio estancado (64 €):* **Motor de recomendación** (venta cruzada de "completa el look" y productos complementarios en ficha y carrito, integrado vía plugin/SaaS del e-commerce).
  - *Saturación de soporte y fichas de catálogo:* **IA generativa con RAG** conectada a la política oficial de devoluciones, guía de tallas y API de estado de pedidos (para responder/asistir agentes) y copiloto generativo para redactar y traducir fichas de producto con revisión del equipo de catálogo.
- **Decisión *Buy vs. Build*:** Al no tener científicos de datos en plantilla y contar con 45.000 €, la estrategia óptima es **Buy / Configure** (módulos nativos o SaaS especializados de recomendación, soporte con RAG y segmentación en el CRM) en lugar de construir modelos propios desde cero, reservando parte del presupuesto a limpiar el dato de tallas/medidas y formar al equipo.
- **Priorización razonable en Ola 1 (Meses 1-4):**
  - *Opción muy sólida:* (1) **Copiloto de IA generativa con RAG para atención al cliente (modo asistente interno primero, no bot abierto sin filtro) + generación asistida de fichas/guías de talla** (impacto inmediato en costes operativos y reducción de dudas de talla) y (2) **Motor de recomendación en e-commerce + segmentación de clientes recurrentes** (impacto directo y rápido en ticket medio y recurrencia con datos ya disponibles al 94 %).
  - En Ola 2 (Meses 5-9): detección de anomalías en devoluciones abusivas y modelo predictivo de *churn*.
- **Controles de riesgo, privacidad y *drift*:**
  - *Fraude en devoluciones:* Nunca bloquear automáticamente a una clienta por una sola alerta (alto coste reputacional de falso positivo); usar la detección de anomalías para marcar el caso en revisión humana (*HITL*) y exigir verificación adicional o limitar devolución gratuita solo en patrones reincidentes probados.
  - *IA Generativa y privacidad:* Anonimizar o no enviar datos personales sensibles de los 85.000 tickets a modelos públicos; usar entornos empresariales con acuerdo de no entrenamiento con datos propios; usar **RAG** sobre políticas vigentes y obligar a validación humana en traducciones y casos complejos *(recordar verificar el cumplimiento legal aplicable bajo RGPD/LOPDGDD y normativa europea de IA —AI Act— sobre transparencia cuando un usuario interactúa con un chatbot)*.
  - *Drift estacional:* En moda los patrones cambian radicalmente cada temporada (verano vs. invierno, rebajas, nuevas marcas); programar recalibración y revisión de métricas al inicio de cada colección.

### Preguntas de reflexión final
- ¿Qué habría pasado si la empresa hubiera lanzado directamente un chatbot de IA generativa sin RAG respondiendo de forma autónoma sobre devoluciones y precios?
- ¿Por qué el problema del 31 % de devoluciones requiere primero un esfuerzo de calidad del dato (medidas de proveedores) antes que un algoritmo sofisticado?
- ¿Cómo explicaríais al equipo de atención al cliente la implantación del copiloto de IA para fomentar la adopción y no el rechazo por miedo al reemplazo?

---

## 7. Evaluación

### Evaluación diagnóstica breve (al inicio de la sesión — 5 min)
Cuatro afirmaciones de Verdadero/Falso (votación rápida):
1. *"La IA generativa (como un LLM) es la mejor herramienta para calcular previsiones numéricas exactas de tesorería."* (Falso).
2. *"Para detectar anomalías o patrones nuevos de fraude siempre necesitamos miles de fraudes etiquetados previamente."* (Falso; existen técnicas no supervisadas de detección de anomalías).
3. *"RAG permite conectar un modelo de IA generativa con documentos internos actualizados sin tener que reentrenar el modelo completo."* (Verdadero).
4. *"Un modelo predictivo que funciona con un 90 % de acierto hoy seguirá funcionando igual dentro de dos años sin mantenimiento."* (Falso; sufre *drift*).

### Evaluación formativa durante la sesión
- Verificación de criterio técnico-empresarial en la **Actividad 1** (proporcionalidad Regla vs. ML vs. GenIA).
- Revisión del razonamiento económico sobre falsos positivos y falsos negativos en la **Actividad 2**.
- Preguntas de comprobación durante la presentación del caso **Moda Mediterránea Online S.L.** sobre *Build vs. Buy*, *HITL* y riesgos de privacidad.

### Evaluación sumativa al final de la sesión
Entrega individual del **Canvas de Caso de Uso de IA propio (Actividad 3)** evaluado mediante la rúbrica siguiente.

### Rúbrica de evaluación

| Criterio | Insuficiente (1) | En desarrollo (2) | Adecuado (3) | Destacado (4) |
| --- | --- | --- | --- | --- |
| **1. Adecuación de la técnica de IA al problema** | Elige una técnica de IA inadecuada (p. ej., GenIA para cálculo exacto) o el problema se resolvería mejor con una regla simple sin justificarlo. | Selecciona una familia de IA plausible pero no justifica por qué aporta valor sobre reglas actuales ni especifica entrada/salida. | Empareja correctamente el problema de negocio con la familia de IA adecuada y justifica su valor diferencial sobre una regla simple. | Selecciona con precisión la técnica óptima, justifica *Build vs. Buy* de forma realista para una pyme y conecta el resultado a una decisión concreta y un KPI. |
| **2. Viabilidad de datos y enfoque de piloto** | Ignora qué datos se necesitan o asume datos inexistentes sin plan para obtenerlos. | Enumera datos genéricos sin evaluar su volumen, calidad actual ni estructura de piloto. | Detalla las fuentes reales necesarias, su calidad aproximada y propone un piloto acotado de 4-6 semanas con línea base. | Evalúa disponibilidad, histórico y limpieza necesaria (incluyendo *Data Spike*), definiendo un piloto incremental de mínimo riesgo y retorno medible. |
| **3. Gestión de errores, *drift* y *Human-in-the-Loop*** | Asume que la IA no falla o propone automatización total en decisiones de alto riesgo. | Menciona posibles errores de forma genérica sin analizar su impacto económico ni supervisión humana. | Analiza el coste de falsos positivos vs. negativos (o alucinaciones/RAG) e incorpora revisión humana (*HITL*) coherente. | Diseña una matriz operativa completa de control de errores, establece monitorización de *drift* y calibra el nivel de autonomía según el riesgo del proceso. |
| **4. Ética, privacidad y cumplimiento** | Omite riesgos de privacidad, sesgos o uso indebido de herramientas públicas. | Menciona "cumplir la ley" de forma vaga sin medidas operativas concretas. | Identifica riesgos específicos de privacidad (*Shadow AI*, datos personales) o sesgos y propone medidas preventivas básicas. | Integra privacidad desde el diseño (anonimización, entornos privados/RAG), prevención de sesgos históricos, explicabilidad y trazabilidad alineada con requisitos normativos. |

### Actividad de autoevaluación o reflexión (Semáforo ético y práctico — 5 min)
Cada alumno responde por escrito a tres preguntas breves:
1. *¿Qué caso de uso de IA que antes veía viable hoy descartaría o pospondría por falta de datos o retorno?*
2. *¿Qué único caso de uso con alto retorno y riesgo controlado (con HITL o RAG) propondría probar primero en mi empresa?*
3. *¿Qué norma básica de uso seguro de IA generativa necesita comunicar mi empresa ya para evitar el Shadow AI?*

---

## 8. Materiales y recursos

### Guion de diapositivas (slide por slide)

1. **Slide 1 — Portada:** Título del tema, Bloque 9 (4/5), objetivo general y agenda de 4 horas.
2. **Slide 2 — Puente desde el Tema 3:** De los MVPs analíticos ágiles al salto inteligente: IA sobre big data.
3. **Slide 3 — Activación (Actividad 1):** El semáforo: ¿Regla determinista, *Machine Learning* o IA generativa?
4. **Slide 4 — Mapa claro de la IA para directivos:** IA, *Machine Learning* (supervisado y no supervisado), *Deep Learning* e IA Generativa.
5. **Slide 5 — Estrategia pyme: *Build vs. Buy*:** Cuándo comprar SaaS/APIs frente a desarrollar modelos propios.
6. **Slide 6 — Familia 1: Modelos predictivos:** Clasificación (*churn*, impago) vs. Regresión (demanda, precio) con ejemplos en pymes.
7. **Slide 7 — Familia 2 y 3: Segmentación (*clustering*) y Recomendación:** Del segmento demográfico estático a la personalización dinámica.
8. **Slide 8 — Familia 4: Detección de anomalías:** Cómo cazar fraude, fallos y comportamientos atípicos con pocos ejemplos previos.
9. **Slide 9 — El engaño del 98 % de acierto:** Falsos positivos vs. falsos negativos y el coste asimétrico del error.
10. **Slide 10 — Taller práctico (Actividad 2):** Cálculo del coste del error en retención B2B y fraude en devoluciones.
11. **Slide 11 — IA Generativa en la empresa:** Desbloqueando el 80 % de datos no estructurados (correos, PDFs, soporte, catálogos).
12. **Slide 12 — Cómo domesticar las alucinaciones:** Arquitectura **RAG** explicada en 3 pasos vs. *Fine-tuning*.
13. **Slide 13 — Riesgos de la IA Generativa:** *Shadow AI*, confidencialidad, propiedad intelectual y *Human-in-the-Loop*.
14. **Slide 14 — La vida después del despliegue:** *Data drift*, *model drift*, explicabilidad, sesgos y marco normativo (recordatorio de verificación vigente de RGPD y Reglamento Europeo de IA).
15. **Slide 15 — Caso práctico:** Retos, datos y presupuesto de **Moda Mediterránea Online S.L.**
16. **Slide 16 — Contraste del caso práctico:** Cartera priorizada en dos olas, *Buy vs. Build* y salvaguardas operativas.
17. **Slide 17 — Transferencia individual (Actividad 3):** Presentación del Canvas de Caso de Uso de IA propio.
18. **Slide 18 — Cierre y conexión con el Tema 5:** 5 principios clave, autoevaluación y adelanto de *Casos de uso en la industria*.

### Ficha de trabajo (para el alumnado — Actividad 2)

| Dimensión de análisis | Escenario A: Retención SaaS B2B | Escenario B: Bloqueo automático fraude devoluciones |
| --- | --- | --- |
| **Coste de 1 Falso Positivo (FP)** | 120 € (intervención innecesaria) | 450 € (cliente honesto bloqueado + daño reputacional) |
| **Coste de 1 Falso Negativo (FN)** | 1.800 € (pérdida de cliente real) | 35 € (prenda fraudulenta no detectada) |
| **Relación de asimetría (qué duele más)** | | |
| **Calibración recomendada (más sensible vs. más conservador)** | | |
| **Acción y control *Human-in-the-Loop* recomendado** | | |

### Plantilla práctica replicable: Canvas de Caso de Uso de IA (Actividad 3)

| Bloque del Canvas | Pregunta guía | Respuesta aplicada a tu empresa |
| --- | --- | --- |
| **1. Problema y KPI** | ¿Qué decisión mejoramos, cuál es la línea base y el KPI objetivo? | |
| **2. Técnica de IA elegida** | Predicción / Segmentación / Recomendación / Anomalías / GenIA (¿por qué no basta una regla?) | |
| **3. Datos y calidad** | ¿Qué datos históricos o documentales existen hoy y qué limpieza requieren? | |
| **4. Estrategia *Build vs. Buy*** | ¿Herramienta SaaS/API existente, configuración RAG o desarrollo a medida? | |
| **5. Errores y calibración** | ¿Qué cuesta más (FP vs. FN) o cómo se mitigan alucinaciones? | |
| **6. Control humano (*HITL*)** | ¿Qué parte automatiza la IA y qué aprueba o supervisa una persona? | |
| **7. Riesgos, privacidad y *drift*** | Privacidad/datos personales, posibles sesgos y frecuencia de revisión del modelo. | |
| **8. Piloto ágil (4-6 semanas)** | Alcance mínimo del piloto y criterio de éxito para escalar. | |

### Lecturas y recursos recomendados
- **Lectura recomendada 1:** Agrawal, A., Gans, J., & Goldfarb, A. *Prediction Machines: The Simple Economics of Artificial Intelligence* (marco directivo excelente sobre la IA como abaratamiento de la predicción).
- **Lectura recomendada 2:** Ng, A. *AI Transformation Playbook* (guía breve y práctica para directivos sobre selección de primeros proyectos piloto, equipos y estrategia de IA).
- **Lectura recomendada 3:** Davenport, T. H., & Mittal, N. *All-in on AI* (casos aplicados sobre integración de IA tradicional y generativa en procesos reales de negocio).

### Vídeos, artículos y fuentes adicionales *(Nota obligatoria: validar enlaces, vigencia y disponibilidad antes de utilizarlos en clase)*
- Vídeo divulgativo breve (5-8 min) explicando visualmente cómo funciona **RAG** (*Retrieval-Augmented Generation*) frente al *fine-tuning* (**validar enlace y actualidad técnica antes de compartir**).
- Guía oficial de la Comisión Europea / AESIA (Agencia Española de Supervisión de la Inteligencia Artificial) sobre niveles de riesgo y plazos de aplicación del Reglamento Europeo de IA (*AI Act*) — **verificar siempre el estado exacto de entrada en vigor y obligaciones vigentes antes de impartir**.
- Guías de la AEPD sobre inteligencia artificial, tratamientos de datos personales y decisiones automatizadas — **validar última versión publicada antes de referenciarla en clase**.

### Glosario de términos clave

| Término | Definición operativa |
| --- | --- |
| **Alucinación** | Respuesta fabricada o inexacta generada por un modelo de IA generativa con apariencia de veracidad. |
| **Aprendizaje no supervisado** | Técnicas de *machine learning* que hallan agrupaciones o anomalías en datos sin respuestas previamente etiquetadas. |
| **Aprendizaje supervisado** | Técnicas de *machine learning* entrenadas con datos históricos etiquetados para predecir categorías o valores futuros. |
| **Clustering** | Agrupación automática de entidades (clientes, productos, tiendas) según patrones reales de similitud. |
| **Data / Model Drift** | Pérdida de eficacia de un modelo en producción debido a cambios en los datos de entrada o en el comportamiento del entorno. |
| **Falso negativo (FN)** | Caso positivo real (p. ej., fraude o baja) que el modelo no logra detectar. |
| **Falso positivo (FP)** | Falsa alarma: caso normal que el modelo marca erróneamente como positivo (p. ej., bloquear a un cliente legítimo). |
| **Human-in-the-Loop (HITL)** | Modelo operativo donde la persona revisa, valida o decide sobre las propuestas generadas por la IA. |
| **RAG** | *Retrieval-Augmented Generation*: patrón que combina búsqueda en documentos corporativos actualizados con un modelo generativo para reducir alucinaciones y aportar trazabilidad. |
| **Sesgo algorítmico** | Desviación sistemática e injusta en las salidas de un modelo originada en datos históricos desequilibrados o mal formulados. |
| **Shadow AI** | Uso no supervisado ni autorizado por parte de empleados de herramientas externas de IA con información confidencial de la empresa. |

---

## 9. Adaptaciones para modalidad híbrida

### Sesión presencial
- **Actividad 1 (Semáforo):** Entregar a cada participante tres tarjetas de colores (Verde = Regla simple, Amarillo = *Machine Learning*, Azul = IA Generativa) para levantarlas simultáneamente ante cada uno de los 6 escenarios; las diferencias visuales inmediatas generan un debate muy ágil.
- **Demostración en vivo (5 min durante Microlearning II):** Si se dispone de conexión y datos ficticios (nunca datos reales confidenciales), mostrar un ejemplo práctico breve de cómo un prompt sin contexto puede alucinar frente a una consulta fundamentada en un documento dado (simulando RAG).
- **Caso práctico:** Trabajar sobre lienzos impresos en A3 para mapear las dos olas de *Moda Mediterránea Online S.L.*, fijando un "presupuesto simbólico en billetes/fichas de 45.000 €" para que los equipos tangibilicen el coste de oportunidad entre *Build* y *Buy*.

### Sesión online síncrona
- **Votaciones instantáneas:** Utilizar encuestas de Zoom/Teams o Mentimeter tanto para el diagnóstico Verdadero/Falso como para la Actividad 1 (Semáforo) y la elección de priorización en el caso práctico.
- **Salas reducidas (*breakout rooms*):** Proveer una plantilla compartida en Miro o Google Slides donde cada equipo rellena su tabla de costes de error (Actividad 2) y su cartera de 2 olas para *Moda Mediterránea Online S.L.*. El formador monitoriza las diapositivas en paralelo e interviene solo donde detecta confusión entre técnicas.
- **Cierre dinámico:** Pedir a cada participante que escriba en el chat su titular de 1 línea del caso de uso de IA elegido en su Canvas (Actividad 3) para generar inspiración cruzada entre sectores.

### Sesión asíncrona (trabajo previo y posterior en campus virtual)
- **Trabajo previo (20 min):** Infografía descargable con la taxonomía visual (Reglas / ML Supervisado / ML No Supervisado / GenIA) + breve encuesta anónima preguntando *"¿Qué herramientas de IA usas ya en tu trabajo y qué duda o temor principal tienes?"* para personalizar la sesión.
- **Modalidad 100 % asíncrona:** Visualización de las dos cápsulas grabadas, ejercicio autocorregible de emparejamiento de 10 problemas de negocio con familias de IA + cálculo guiado de falsos positivos/negativos, y entrega en el foro de la propuesta para *Moda Mediterránea Online S.L.* comentando el enfoque de control de riesgos de un compañero.
- **Evaluación diferida:** Entrega del **Canvas de Caso de Uso de IA propio** en 72 horas; el formador devuelve feedback focalizado en comprobar si realmente requiere IA (o basta una regla) y si los controles de privacidad/HITL son suficientes.

---

## 10. Conexión con el programa

- **Qué conocimientos previos refuerza:** Aprovecha las arquitecturas y fuentes de datos (Tema 1), la definición de KPIs y calidad del dato (Tema 2) y la ejecución iterativa en MVPs con validación continua (Tema 3) como cimientos imprescindibles para que la IA funcione en el mundo real.
- **Qué competencias desarrolla:** Criterio directivo para evaluar soluciones de IA sin dejarse llevar por modas, traducción de métricas algorítmicas a impacto económico, diseño de controles éticos y de supervisión humana (*HITL*) y toma de decisiones *Build vs. Buy*.
- **Conexión con el tema anterior (Bloque 9, Tema 3 — Metodologías ágiles en proyectos de big data):** Los modelos de IA requieren más que ningún otro proyecto la disciplina de *Data Spikes*, líneas base, validación continua y *kill criteria* vista en el Tema 3, ya que hasta experimentar con los datos no puede garantizarse su poder predictivo.
- **Conexión con el tema posterior (Bloque 9, Tema 5 — Casos de uso en la industria):** Tras dominar las familias técnicas de la IA y sus reglas de gobierno y evaluación, el Tema 5 integrará todo el Bloque 9 aplicándolo a los grandes casos de uso sectoriales e industriales de mayor retorno: mantenimiento predictivo, optimización logística, personalización, prevención de fraude, previsión de demanda y eficiencia energética.
- **Evidencia de aprendizaje que dejará el alumnado:** El **Canvas de Caso de Uso de IA propio**, que documenta cómo escalar su proceso o negocio digital hacia capacidades predictivas o generativas bajo control económico, operativo y ético.

---

## Siguientes pasos para el formador

1. **Actualización normativa obligatoria:** Verificar antes de impartir la sesión la fecha y requisitos vigentes de aplicación del Reglamento Europeo de IA (*AI Act*), guías de la AESIA y recomendaciones de la AEPD sobre IA generativa y decisiones automatizadas.
2. **Preparación de ejemplos sectoriales:** Adaptar los ejemplos orales de *Build vs. Buy* y RAG a los sectores presentes en el aula (servicios B2B, comercio, industria, salud o turismo).
3. **Prueba previa de materiales interactivos:** Confirmar que las tarjetas/encuestas de la Actividad 1 (Semáforo) y la ficha de cálculos de la Actividad 2 estén listas y revisadas.
4. **Control del nivel técnico:** Mantener el equilibrio pedagógico adecuado al público (mandos intermedios y emprendedores): profundizar en decisiones de negocio, costes de error y gobernanza sin derivar en fórmulas matemáticas complejas ni programación.
5. **Puente al Tema 5:** Cerrar invitando al alumnado a identificar qué dos casos de uso industriales o de operaciones (demanda, logística, mantenimiento, energía, fraude o personalización) tendrían mayor impacto en la cuenta de resultados de su sector.
