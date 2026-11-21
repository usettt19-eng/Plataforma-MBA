# Tema 7. Automatización y robótica industrial

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Tema 7. Automatización y robótica industrial |
| **Bloque y posición dentro del programa** | Bloque 7: Transformación digital — Posición 7 de 8 |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Mandos intermedios y emprendedores |
| **Nivel de dificultad** | Intermedio |
| **Prerrequisitos** | Dominio de rediseño de procesos, IA, IoT y fundamentos *cloud* (Bloque 7, Temas 1 a 6) |
| **Resultado general de aprendizaje** | Identificar oportunidades rentables de automatización de procesos de oficina (RPA / conectores) y automatización física en planta o almacén (cobots, visión artificial, Industria 4.0), evaluando su ROI, seguridad laboral y plan de recualificación del equipo |

---

## 2. Objetivos de aprendizaje

Al finalizar este tema, el alumnado será capaz de:

1. **Diferenciar** los tipos de automatización empresarial —automatización de flujos vía API (*no-code/low-code*), automatización robótica de procesos (**RPA**), robótica industrial tradicional, robótica colaborativa (**cobots**) y **visión artificial**— según el problema operativo que resuelven. *(Nivel de Bloom: Comprender)*
2. **Evaluar** la idoneidad de un proceso administrativo u operativo para ser automatizado aplicando criterios objetivos de volumen, estandarización, estabilidad de reglas y tasa de error. *(Nivel de Bloom: Evaluar)*
3. **Analizar** el impacto de la automatización y la Industria 4.0 sobre indicadores de eficiencia operativa (OEE, coste unitario, calidad, tiempos de ciclo, ergonomía y seguridad laboral). *(Nivel de Bloom: Analizar)*
4. **Calcular** de forma estructurada el retorno de inversión (ROI y *payback*) de una iniciativa de RPA o automatización física incluyendo costes ocultos de integración, mantenimiento y seguridad. *(Nivel de Bloom: Aplicar)*
5. **Diseñar** un proyecto piloto de automatización (administrativa o física) que integre gestión del cambio, seguridad hombre-máquina y plan de recualificación (*upskilling/reskilling*) del personal afectado. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Automatización de procesos administrativos: conectores API vs. RPA

- **Explicación breve y clara:** No toda automatización requiere brazos mecánicos en una fábrica. En la mayoría de las pymes, miles de horas anuales se pierden en tareas repetitivas frente al ordenador: copiar pedidos de correos al ERP, conciliar albaranes con facturas, actualizar precios en marketplaces o emitir certificados. Aquí conviene elegir entre **integración vía API / plataformas *no-code*** (cuando los sistemas modernos se hablan entre sí de forma limpia) y **RPA (*Robotic Process Automation*)** (robots de software que operan sobre la interfaz como una persona cuando existen programas antiguos sin API o portales de terceros).
- **Conceptos clave:** Integración vía API, plataformas *no-code/low-code* (Make, Zapier, Power Automate, n8n), **RPA** (atendido y desatendido), hiperautomatización (RPA + IA/OCR), mantenimiento de *bots*.
- **Definiciones necesarias:**
  - *RPA (Robotic Process Automation):* Tecnología de software que ejecuta de forma automática y repetitiva tareas estructuradas basadas en reglas fijas interactuando con pantallas, formularios y aplicaciones igual que un usuario humano.
  - *Integración vía API vs. RPA:* Una integración por API conecta bases de datos directamente (más rápida, estable y barata de mantener); el RPA imita clics y teclas en pantalla, siendo útil como puente rápido sobre software heredado, aunque más sensible si cambia el diseño de una pantalla.
- **Ejemplo práctico realista:** Una distribuidora de bebidas con 35 trabajadores recibía 900 facturas mensuales en PDF de 40 proveedores y las tecleaba manualmente en su ERP heredado (sin API abierta), consumiendo 1,5 jornadas completas a la semana y causando errores de vencimiento. Con una combinación de lectura inteligente de documentos (OCR+IA) + un robot RPA desatendido que introduce los asientos y deriva a revisión humana solo las facturas con discrepancia de precio > 2 %, liberó el 80 % del tiempo de picado y eliminó retrasos por errores tipográficos.
- **Errores frecuentes:**
  - Automatizar un proceso inestable cuyas reglas cambian cada semana o que depende de criterios subjetivos sin excepción clara.
  - Usar RPA para conectar dos herramientas SaaS modernas que ya tienen integración nativa o API sencilla, creando un *bot* frágil e innecesario.
  - Olvidar quién mantiene y supervisa el robot cuando un portal web externo o un proveedor cambia el formato de su factura o pantalla.
- **Preguntas que el alumnado debería poder responder:**
  - ¿Qué cuatro criterios debe cumplir una tarea de oficina para ser buena candidata a RPA o automatización de flujos?
  - ¿Cuándo es preferible una integración por API frente a un robot RPA?
  - ¿Cómo se gestionan las excepciones para que un proceso automatizado no se bloquee ni genere errores en cadena?

### 3.2. Robótica industrial, cobots y automatización intralogística

- **Explicación breve y clara:** La robótica industrial tradicional (robots rápidos, pesados, vallados en celdas cerradas y rentables solo en tiradas masivas) quedaba históricamente fuera del alcance de muchas pymes con lotes cortos y alta variedad de productos. Hoy, los **robots colaborativos (cobots)** y los **robots móviles autónomos (AMR/AGV)** permiten automatizar tareas repetitivas, pesadas o lesivas (paletizado, atornillado, carga/descarga de máquinas CNC, transporte interno de palés) con menor inversión, rápida reprogramación y convivencia segura junto a operarios.
- **Conceptos clave:** Robot industrial tradicional, **cobot** (robot colaborativo), efector final (*gripper*), AMR (*Autonomous Mobile Robot*) y AGV, flexibilidad por lotes cortos, *RaaS (Robotics-as-a-Service)*.
- **Definiciones necesarias:**
  - *Cobot (robot colaborativo):* Brazo robótico diseñado con sensores de fuerza/par y velocidades limitadas para colaborar de forma segura cerca de personas en tareas repetitivas o ergonómicamente exigentes, siempre tras evaluación formal de riesgos de la aplicación completa.
  - *AMR (Robot Móvil Autónomo):* Vehículo intralogístico que navega por planta o almacén sin raíles ni cintas magnéticas fijas, esquivando obstáculos dinámicamente para mover materiales entre estaciones.
- **Ejemplo práctico realista:** Un taller pyme de inyección de plástico con 48 empleados sufría alta rotación y bajas laborales por lesiones de espalda en el encajado y paletizado al final de dos líneas de producción. Instaló un cobot de paletizado compacto (ocupando el espacio de dos palés) programable en 15 minutos al cambiar de referencia. Redujo a cero las lesiones de carga en esa línea, mantuvo la producción continua en el turno de noche y reubicó a los dos operarios en tareas de preparación de moldes y control de calidad.
- **Errores frecuentes:**
  - Creer que un «cobot» es automáticamente seguro sin evaluar la pieza que sujeta (por ejemplo, si manipula chapas cortantes o piezas calientes, el riesgo sigue existiendo y requiere evaluación de seguridad de maquinaria). *(Nota para el formador: recordar verificar la normativa europea vigente de seguridad de maquinaria —Reglamento UE 2023/1230 sobre máquinas y normas técnicas ISO aplicables a robótica colaborativa— antes de abordar requisitos concretos de marcado CE).*
  - Presupuestar solo el precio del brazo robótico olvidando el *gripper* (pinza), integrador, programación, vallado/escáneres de seguridad y mantenimiento (que suelen duplicar el coste del brazo solo).
  - Intentar automatizar la operación más compleja de la fábrica en vez de la tarea repetitiva, pesada y estable con cuello de botella claro.
- **Preguntas que el alumnado debería poder responder:**
  - ¿Qué diferencias operativas y económicas existen entre un robot industrial tradicional vallado y un cobot para una pyme de lotes cortos?
  - ¿Por qué el coste real de un proyecto robótico suele ser muy superior al precio de catálogo del brazo mecánico?
  - ¿Por qué la evaluación de seguridad depende de toda la célula (robot + pinza + pieza + entorno) y no solo de que el robot sea colaborativo?

### 3.3. Visión artificial e Industria 4.0 orientada a la eficiencia (OEE)

- **Explicación breve y clara:** La **visión artificial** combina cámaras industriales, iluminación controlada y algoritmos de IA para «ver» e inspeccionar piezas, etiquetas, niveles de llenado o defectos microscópicos a gran velocidad y sin fatiga visual. Integrada dentro del ecosistema **Industria 4.0** (sensores IoT + sistemas MES/ERP + gemelos digitales sencillos), impacta directamente en la **OEE (*Overall Equipment Effectiveness*)**, mejorando disponibilidad, rendimiento y tasa de calidad a la primera.
- **Conceptos clave:** Visión artificial (2D/3D + *deep learning*), control de calidad automatizado, iluminación industrial, **OEE** (Disponibilidad × Rendimiento × Calidad), sistema MES (*Manufacturing Execution System*), gemelo digital.
- **Definiciones necesarias:**
  - *Visión artificial:* Sistema que captura imágenes en tiempo real y las analiza algorítmicamente para detectar defectos, medir tolerancias, leer códigos/fechas de caducidad o guiar robots (*bin picking*).
  - *OEE (Eficiencia Global de Equipos):* Indicador estándar industrial que mide el porcentaje real de tiempo productivo sin defectos de una máquina o línea: **OEE = Disponibilidad × Rendimiento × Calidad**.
- **Ejemplo práctico realista:** Una pyme envasadora de conservas vegetales sufría devoluciones de supermercados por etiquetas torcidas o fechas de caducidad borrosas que el ojo humano no detectaba tras cuatro horas inspeccionando 120 tarros por minuto. Al instalar una cámara inteligente de visión artificial con iluminación LED dedicada y un actuador neumático de rechazo automático (inversión ~14.000 €), eliminó las reclamaciones por etiquetado y redujo las mermas por reproceso de lotes completos.
- **Errores frecuentes:**
  - Subestimar la iluminación y el entorno físico (reflejos metálicos, vibraciones, polvo): en visión artificial, el 60 % del éxito técnico está en la iluminación y óptica antes que en la IA.
  - Confundir Industria 4.0 con comprar tecnología aislada sin conectarla con el seguimiento real de la OEE y los pedidos del ERP.
  - No medir la tasa actual de rechazos, paradas y reprocesos antes de instalar el sistema, impidiendo calcular el retorno real.
- **Preguntas que el alumnado debería poder responder:**
  - ¿Qué tres factores componen la OEE y sobre cuáles impacta directamente la visión artificial o un cobot?
  - ¿Qué tareas de inspección en una pyme justifican implantar visión artificial frente a inspección visual humana?
  - ¿Qué factores físicos (iluminación, velocidad de línea, reflejos) condicionan un proyecto de visión artificial?

### 3.4. Viabilidad económica, impacto humano y recualificación (*Upskilling/Reskilling*)

- **Explicación breve y clara:** La automatización rentable en la pyme no busca «fábricas ni oficinas sin personas», sino **eliminar tareas penosas, repetitivas y propensas a error** para elevar la productividad por empleado y retener talento en un mercado con escasez de operarios cualificados. Sin transparencia desde el inicio y sin un plan serio de formación interna (*upskilling* para operar/mantener automatismos y *reskilling* hacia funciones de mayor valor), el equipo puede boicotear el despliegue por miedo al despido.
- **Conceptos clave:** ROI y *payback* integral, automatización como complemento (no solo recorte de plantilla), ergonomía y prevención de riesgos, *upskilling* y *reskilling*, modelo *RaaS* (pago por uso/alquiler).
- **Definiciones necesarias:**
  - *Upskilling vs. Reskilling:* *Upskilling* amplía las competencias digitales/técnicas del trabajador dentro de su área (ej. operario de línea que aprende a programar y supervisar cobots o cámaras de visión); *reskilling* lo capacita para un nuevo rol dentro de la empresa (ej. administrativo de picado de facturas que pasa a analista de compras o atención comercial).
  - *RaaS (Robotics-as-a-Service):* Modalidad contractual de alquiler o pago por uso de robots que reduce la barrera de inversión inicial (CAPEX → OPEX) e incluye mantenimiento y actualizaciones.
- **Ejemplo práctico realista:** Una pyme de mecanizado temía rechazos sindicales al introducir dos celdas robotizadas de alimentación de tornos. Antes de firmar la compra, dirección reunió al taller, explicó que los robots cubrirían el turno de noche y las piezas pesadas sin despedir a nadie, abrió un itinerario formativo remunerado de 40 horas en operación y programación básica de cobots y ofreció un complemento salarial de polivalencia. La iniciativa recibió más voluntarios que plazas y mejoró tanto la productividad como el clima laboral.
- **Errores frecuentes:**
  - Calcular el ROI de la automatización basándose únicamente en «ahorro teórico de salarios» sin considerar mejoras de calidad, eliminación de horas extra, reducción de bajas laborales y capacidad de aceptar nuevos pedidos.
  - Comunicar la compra de robots o RPA el día que llegan a la empresa, disparando rumores de recortes de plantilla.
  - Depender al 100 % del integrador externo para cambiar un pequeño parámetro de un cobot o un *bot* RPA por no haber formado a ningún técnico interno.
- **Preguntas que el alumnado debería poder responder:**
  - ¿Qué beneficios tangibles más allá del ahorro de horas directas deben entrar en el cálculo económico de una automatización?
  - ¿Cómo diseñaríais la comunicación y el plan de *upskilling/reskilling* al anunciar un proyecto de RPA o cobots?
  - ¿Cuándo conviene a una pyme valorar modelos *RaaS* (alquiler) frente a compra en propiedad?

---

## 4. Metodología didáctica (Secuencia de 4 horas / 240 minutos)

| Fase | Duración | Qué hace el formador | Qué hace el alumnado |
|---|---:|---|---|
| **1. Apertura y activación** | 25 min | Lanza la Actividad 1 («Cazadores de tareas robóticas»): pide detectar tareas «4D» (*Dull, Dirty, Dangerous, Duplicate*: aburridas, penosas, peligrosas o duplicadas) en oficina y operativa física. | Lista 3 tareas repetitivas de su empresa (oficina o planta/almacén), evalúa si son 4D y comparte qué impacto tienen en errores, fatiga o tiempo. |
| **2. Exposición breve / Microlearning I** | 35 min | Explica el espectro completo de automatización: APIs/*no-code* vs. RPA en oficina, y robots tradicionales, cobots, AMR y visión artificial en operativa física, junto con el cálculo básico de OEE. | Aplica los 4 criterios de automatización sobre ejemplos rápidos distinguiendo cuándo usar API, RPA, cobot o visión artificial. |
| **3. Análisis de caso práctico** | 45 min | Presenta el caso *Envases y Componentes Metálicos del Ebro S.L.* (doble reto: cuello de botella administrativo en pedidos/facturas + defectos y lesiones en final de línea). Organiza equipos de 3-4 personas. | Analiza las tres inversiones propuestas (RPA, visión artificial y cobot de paletizado), calcula *payback*, evalúa riesgos de planta/oficina y prioriza secuencia dentro del presupuesto. |
| **4. Exposición breve / Microlearning II** | 30 min | Expone los costes ocultos de integración, seguridad en células colaborativas (advirtiendo qué normativa técnica/CE verificar), modelos *RaaS* y gestión humana (*upskilling/reskilling*). | Revisa cómo integrar seguridad, mantenimiento y recualificación del equipo en las decisiones del caso práctico. |
| **5. Actividad práctica de aplicación y transferencia** | 60 min | Dirige la Actividad 2 (matriz de priorización, *payback* y plan de recualificación del caso *Envases del Ebro*, 25 min) y la Actividad 3 (Caso de Negocio de Automatización para su propia empresa —oficina o física—, 35 min). | Resuelve el plan priorizado del caso y diseña su propia propuesta de piloto de automatización (diagnóstico, tecnología adecuada, ROI y plan humano). |
| **6. Discusión guiada y puesta en común** | 25 min | Modera una ronda donde 3-4 participantes (mezclando casos RPA/oficina y casos físicos/Industria 4.0) presentan su piloto y responden preguntas sobre excepciones, mantenimiento y gestión del equipo. | Presenta su piloto, recibe críticas sobre puntos ciegos técnicos o laborales y enriquece las propuestas de otros sectores. |
| **7. Síntesis, evaluación sumativa y cierre** | 20 min | Resume el marco de decisión de automatización rentable y humana, aplica la evaluación sumativa y conecta con el Tema 8 (Ciberseguridad: más sistemas conectados, RPA y robots implican mayor superficie de ataque que debemos proteger). | Completa la prueba breve de cierre y define 1 proceso candidato para auditar la próxima semana. |
| **TOTAL** | **240 min** | | |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «Cazadores de tareas 4D»

- **Objetivo:** Identificar tareas concretas de oficina o de operativa física que destruyen valor humano y presentan potencial realista de automatización.
- **Instrucciones para el alumnado:**
  1. Individualmente (8 min), identificad **2 tareas de oficina** (copiar datos, cotejar facturas, generar informes, responder consultas idénticas) y **1 tarea física o logística** (si aplicáis a servicios, pensad en un cliente industrial/logístico o gestión de almacén/material).
  2. Puntuad cada tarea de 1 a 5 en cuatro filtros: *Volumen/frecuencia*, *Reglas claras (sin subjetividad)*, *Penosidad/tasa de error* y *Estabilidad del proceso*.
  3. En parejas (12 min), seleccionad la tarea con puntuación más alta y debatid: «¿Es un candidato para simplificar primero, para conector API, para RPA o para robótica/visión?».
- **Materiales necesarios:** Ficha «Radar de tareas 4D».
- **Tiempo estimado:** 20 minutos (en fase de Apertura).
- **Rol del formador:** Evitar que el alumnado proponga automatizar tareas creativas, mal definidas o de volumen mínimo (donde el coste de automatizar supera al ahorro).
- **Producto o entregable esperado:** Matriz puntuada de 3 tareas con preselección de la mejor candidata y justificación breve.
- **Criterios de éxito:** Uso riguroso de los 4 filtros (volumen, reglas, error/penosidad, estabilidad) y descarte de tareas con reglas ambiguas.

### Actividad 2 (Aplicación): «Priorización de cartera de automatización y plan humano en Envases del Ebro»

- **Objetivo:** Evaluar tres tecnologías de automatización distintas (RPA, visión artificial y cobot) con criterios financieros, técnicos y laborales dentro de un presupuesto limitado.
- **Instrucciones para el alumnado:**
  1. En equipos de 3-4 personas, tomad los datos de *Envases y Componentes Metálicos del Ebro S.L.* (presupuesto máximo de inversión Año 1: **90.000 €**).
  2. Calculad el coste total real (incluyendo integración/seguridad), el ahorro anual directo e indirecto (calidad, bajas, horas) y el *payback* estimado de las tres propuestas (A: RPA pedidos/facturas; B: Visión artificial control sellado/impresión; C: Cobot de paletizado, valorando compra vs. *RaaS*).
  3. Definid la secuencia en Fase 1 (Año 1 dentro de 90.000 €) y Fase 2 (Año 2), junto con un plan concreto de *upskilling/reskilling* para las personas afectadas en administración y final de línea.
- **Materiales necesarios:** Datos del caso práctico, plantilla de evaluación ROI + Plan de Recualificación y calculadora.
- **Tiempo estimado:** 25 minutos.
- **Rol del formador:** Recordar que en robótica industrial el presupuesto debe incluir integración, pinza y seguridad, y valorar la creatividad financiera (por ejemplo, combinar compra de soluciones de *payback* ultrarrápido con alquiler *RaaS* si encaja en caja).
- **Producto o entregable esperado:** Tabla financiera comparada + secuencia de inversión + plan de comunicación y recualificación en 4 acciones.
- **Criterios de éxito:** Cálculos consistentes, respeto del límite presupuestario de 90.000 €, gestión de excepciones técnicas y plan laboral creíble y empático.

### Actividad 3 (Transferencia a la realidad laboral): «Caso de negocio de piloto de automatización (Oficina o Planta)»

- **Objetivo:** Elaborar un caso de negocio completo y realista para automatizar un proceso concreto de la empresa o emprendimiento del participante.
- **Instrucciones para el alumnado:**
  1. Elegid vuestra mejor tarea candidata (de oficina mediante API/RPA o física mediante cobot/visión/sensorización).
  2. Completad la **Plantilla de Caso de Negocio de Automatización** (sección 8): situación actual y línea base (horas, errores, OEE/calidad), tecnología recomendada y justificación, gestión de excepciones y mantenimiento, estimación de inversión integral y *payback*, y plan de *upskilling/reskilling* para el equipo implicado.
  3. Preparad una defensa de 2 minutos destacando tanto el ROI como el impacto positivo en la calidad del trabajo de las personas.
- **Materiales necesarios:** Plantilla de Caso de Negocio de Automatización (sección 8).
- **Tiempo estimado:** 35 minutos + 25 minutos de puesta en común en la fase 6.
- **Rol del formador:** Revisar que no se omita la simplificación previa (Tema 1) ni el coste de mantenimiento anual de *bots* o células robóticas.
- **Producto o entregable esperado:** Caso de negocio de 1 página listo para comité de dirección o solicitud de ofertas a integradores.
- **Criterios de éxito:** Elección tecnológica proporcionada al tamaño de la pyme, cálculo completo de costes/beneficios, manejo de excepciones y plan humano explícito.

---

## 6. Caso práctico: Envases y Componentes Metálicos del Ebro S.L.

### Contexto empresarial
**Envases y Componentes Metálicos del Ebro S.L.** (Navarra) es una pyme industrial familiar con **74 empleados** (56 en producción/almacén, 12 en administración/compras/calidad y 6 en dirección/comercial) dedicada a fabricar latas y envases metálicos litografiados para alimentación y cosmética. Trabaja en dos turnos (16 h/día) produciendo lotes medios y cortos de más de 180 referencias distintas, con una facturación anual de 10,8 millones de euros.

### Situación o problema
La empresa sufre presión simultánea en márgenes, plazos y calidad por parte de clientes del sector alimentario y cosmético, y tiene dificultades para cubrir vacantes de operarios en final de línea. Se han identificado tres grandes cuellos de botella —uno en oficina y dos en planta— y la dirección dispone de un **presupuesto máximo de inversión (CAPEX) de 90.000 € para el Año 1** (pudiendo valorar modalidades de alquiler operativo/*RaaS* si el retorno mensual lo justifica). Además, existe inquietud en el comité de empresa ante rumores de que «van a traer robots para echar gente».

### Datos disponibles

| Propuesta / Área | Situación y coste del problema actual | Inversión y coste anual de la solución | Impacto esperado conservador |
|---|---|---|---|
| **A. Oficina (Pedidos y facturación): Integración + RPA con OCR** | 3 administrativos dedican un total de 52 horas/semana a picar pedidos recibidos en PDF/correo de 60 clientes y conciliar albaranes en un ERP antiguo (sin API de entrada). Error de transcripción en el 3,2 % de pedidos (~18.000 €/año en abonos, portes urgentes y reprocesos). | Implantación + licencias RPA/OCR Año 1: **19.500 €**. Mantenimiento/licencias desde Año 2: **4.800 €/año**. | Automatiza el 80 % de pedidos estándar (~1.900 h/año liberadas, equivalentes a ~38.000 €/año de capacidad reasignable a atención comercial y compras) + reduce errores en un 75 % (~13.500 €/año directos). |
| **B. Planta (Calidad): Visión artificial en línea crítica de cosmética** | Inspección visual manual de microabolladuras, defectos de litografía y cierre en 90 envases/minuto. Fatiga visual genera reclamaciones: **3 lotes devueltos al año** con coste total (producto + logística + penalización cliente) de **54.000 €/año** y riesgo de perder al 2.º mayor cliente. | Cámara industrial + iluminación específica para brillo metálico + sistema rechazo + integración: **34.000 €** (llave en mano). Mantenimiento anual: **2.500 €/año**. | Reduce devoluciones por defecto visual en un 85 % (**~45.900 €/año** directos), mejora la OEE por detección temprana de desajuste de troquel y blinda el contrato clave. |
| **C. Planta (Final de línea): Cobot de paletizado flexible** | 2 operarios por turno (4 personas en total) levantan manualmente 1.600 cajas/día de 9 kg. Alta fatiga: **4 bajas musculoesqueléticas/año** (~26.000 €/año en sustituciones y sobrecoste) + paradas frecuentes por ritmo desigual. | **Compra llave en mano** (cobot + *gripper* + escáner seguridad + programación + marcado CE): **72.000 €** (mantenimiento 3.500 €/año). **Alternativa *RaaS* (alquiler 36 meses):** **2.150 €/mes** (25.800 €/año, mantenimiento incluido). | Elimina el 90 % de bajas ergonómicas (~23.400 €/año), permite reubicar a 2 operarios a puestos de mayor valor (control de calidad/operación de líneas con déficit de personal, valorado en ~58.000 €/año de capacidad sin nuevas contrataciones) y estabiliza el rendimiento de línea. |

### Preguntas de análisis
1. Calculad el *payback* aproximado de cada una de las tres propuestas (A, B y C en compra). ¿Cuáles dos caben juntas en compra directa dentro del presupuesto de 90.000 €?
2. ¿Es viable abordar los tres cuellos de botella en el Año 1 combinando compra directa en A y B con la modalidad *RaaS* en C, o resulta operativamente arriesgado lanzar tres proyectos simultáneos? Argumentad pros y contras.
3. ¿Qué detalles técnicos críticos hay que vigilar en cada proyecto (excepciones de formatos en A, reflejos metálicos en B, evaluación de seguridad de la célula y tiempos de cambio de lote en C)?
4. Diseñad la estrategia de diálogo con el comité de empresa y el plan de *upskilling/reskilling* para las personas de administración y final de línea.

### Tarea a realizar
En equipos de 3-4 personas, elaborad el plan recomendado para el Consejo de Administración de Envases del Ebro S.L. que incluya:
1. Cuadro de evaluación económica (inversión llave en mano, ahorro directo/indirecto y meses de *payback*) de A, B y C.
2. Recomendación de secuencia de implantación (Fase 1 meses 1-6 y Fase 2 meses 7-12 o Año 2) justificando tanto el límite de 90.000 € como la capacidad real de absorción del equipo.
3. Plan de comunicación interna y recualificación (*upskilling/reskilling*) que convierta el miedo en respaldo.

### Posibles soluciones o criterios de análisis
- **Cálculos orientativos de *payback* (sobre ahorro directo + capacidad liberada conservadora):**
  - **Propuesta B (Visión artificial):** 34.000 € / 45.900 € ahorro directo anual ≈ **9 meses** (además protege al 2.º mayor cliente; riesgo laboral muy bajo porque elimina una inspección tediosa y mejora la reputación del taller).
  - **Propuesta A (RPA/OCR pedidos):** 19.500 € / (13.500 € directos en errores + capacidad administrativa liberada de ~38.000 €) ≈ **~5 meses** incluyendo capacidad liberada (o ~17 meses contando solo ahorro directo de errores, muy atractivo y de rápida implantación en 6-8 semanas).
  - **Propuesta C (Cobot paletizado):** Compra 72.000 € / (~23.400 € bajas + ~58.000 € capacidad operativa reubicada en vacantes sin cubrir) ≈ **~11 meses** (o autofinanciable mensualmente vía *RaaS* a 2.150 €/mes frente a > 6.700 €/mes de impacto combinado).
- **Decisión presupuestaria y secuenciación inteligente:**
  - En compra directa, **A + B suman 53.500 €** (muy por debajo de 90.000 €, dejando 36.500 € de colchón). Lanzar A + B + C simultáneamente el mes 1 saturaría la capacidad de gestión y elevaría la tensión laboral.
  - **Recomendación óptima en dos oleadas:**
    - *Oleada 1 (Meses 1-5):* Implantar **B (Visión artificial, 34.000 €)** para frenar devoluciones del cliente clave y **A (RPA pedidos, 19.500 €)** como victoria rápida de oficina (total CAPEX = 53.500 €).
    - *Oleada 2 (Meses 6-12):* Con la credibilidad ganada y el acuerdo cerrado con el comité de empresa (compromiso de **cero despidos** y recolocación ergonómica), desplegar **C (Cobot)** en modalidad ***RaaS* (2.150 €/mes)** o financiado con los ahorros ya generados por A y B (sin rebasar los 90.000 € de CAPEX).
- **Claves técnicas y laborales:** En B exigir prueba previa de iluminación con latas brillantes reales antes de aceptar oferta; en A definir regla clara de derivación a humano ante discrepancias; en C exigir marcado CE de célula completa, involucrar a los propios operarios de paletizado en la ergonomía del puesto y ofrecerles formación certificada para operar el cobot y cubrir vacantes internas mejor remuneradas.

### Preguntas de reflexión final
- ¿Qué habría ocurrido con el clima laboral si la dirección hubiera empezado por el cobot sin anunciar previamente el compromiso de recolocación y formación?
- ¿Por qué en muchos proyectos de automatización el factor limitante no es el dinero sino la capacidad de la organización para absorber cambios simultáneos?

---

## 7. Evaluación

### Evaluación diagnóstica breve (al inicio)
Sondeo de 3 preguntas:
1. ¿Qué entiendes por RPA? (Robot físico en fábrica / Software que automatiza tareas repetitivas en ordenador / Inteligencia artificial creativa / No lo conozco).
2. En tu empresa, ¿dónde crees que se pierden hoy más horas de bajo valor: en tareas administrativas repetitivas o en tareas físicas/logísticas?
3. Verdadero/Falso: «Un robot colaborativo (cobot) no requiere nunca evaluación de riesgos ni medidas de seguridad adicionales».

### Evaluación formativa durante la sesión
- Revisión de los 4 criterios de idoneidad en la Actividad 1 («Radar de tareas 4D»).
- Verificación de cálculos de coste llave en mano, *payback* y manejo de excepciones en *Envases del Ebro* (Actividad 2).
- Retroalimentación cruzada durante la ronda de casos de negocio propios (fase 6).

### Evaluación sumativa al final
1. Entrega individual del **Caso de Negocio de Piloto de Automatización** (Actividad 3).
2. Cuestionario breve de 5 ítems prácticos (API vs. RPA, componentes de OEE, cobot vs. robot tradicional, seguridad de célula y diferencia entre *upskilling* y *reskilling*).

### Rúbrica de evaluación (para el Caso de Negocio de Automatización)

| Criterio | Insuficiente (1) | En desarrollo (2) | Adecuado (3) | Destacado (4) |
|---|---|---|---|---|
| **Diagnóstico y selección tecnológica** | Propone automatizar una tarea mal definida o elige una tecnología desproporcionada. | Identifica una tarea real, pero no aplica los criterios de idoneidad ni distingue bien API/RPA/robótica. | Selecciona un proceso estable de alto valor aplicando los 4 filtros y elige la tecnología adecuada al tamaño de la pyme. | Simplifica el proceso antes de automatizar, justifica la elección tecnológica frente a alternativas y diseña la gestión de excepciones. |
| **Rigor económico (ROI, TCO y *payback*)** | Omite cifras de inversión o ahorros esperados. | Solo contempla el precio de licencia/equipo ignorando integración, seguridad o mantenimiento. | Calcula inversión llave en mano, mantenimiento anual y *payback* conservador con métricas base claras. | Integra impactos directos e indirectos (calidad, OEE, bajas, capacidad), evalúa *CAPEX vs. RaaS/OPEX* y fija criterio *Go/No-Go*. |
| **Operación, mantenimiento y seguridad** | Ignora riesgos de seguridad laboral, fallos del robot o dependencia del proveedor. | Menciona seguridad o mantenimiento de forma genérica sin responsables. | Contempla seguridad aplicable, supervisión de excepciones y plan básico de mantenimiento sin dependencia total externa. | Detalla protocolo de excepciones, requisitos de prueba piloto previa, seguridad integral de célula/accesos y formación de referente interno. |
| **Gestión humana (*Upskilling/Reskilling*)** | Plantea la automatización únicamente como recorte de personal o ignora al equipo afectado. | Menciona «comunicar al equipo» sin itinerario formativo ni reubicación clara. | Incluye comunicación transparente previa y acciones concretas de *upskilling/reskilling* para las personas implicadas. | Diseña un plan completo de participación temprana, recualificación hacia tareas de mayor valor y seguimiento del clima laboral. |

### Actividad de autoevaluación o reflexión
«Compromiso de eficiencia humana» (5 min): el alumnado responde brevemente: (1) ¿Qué tarea repetitiva de mi equipo genera hoy más frustración o errores? (2) ¿Qué necesito medir durante 2 semanas para calcular si merece automatizarse? (3) ¿En qué tarea de mayor valor invertiríamos las horas liberadas?

---

## 8. Materiales y recursos

### Guion de diapositivas (estructura slide por slide)

1. **Portada:** Bloque 7 · Tema 7. Automatización y robótica industrial: eficiencia operativa en oficina y planta.
2. **Activación:** Radar de tareas 4D (*Dull, Dirty, Dangerous, Duplicate*).
3. **Automatización de oficina:** Conectores API/*no-code* frente a RPA — cuándo usar cada uno.
4. **Los 4 filtros de oro:** Qué procesos automatizar y cuáles simplificar o dejar en manos humanas.
5. **Hiperautomatización práctica:** Combinar RPA + IA/OCR y cómo diseñar la gestión de excepciones.
6. **Automatización física e Industria 4.0:** Robot industrial tradicional vs. Cobot vs. AMR (intralogística).
7. **Visión artificial y OEE:** Disponibilidad × Rendimiento × Calidad (y por qué la iluminación es crítica).
8. **Caso práctico:** *Envases y Componentes Metálicos del Ebro S.L.* — 3 retos, 90.000 € de CAPEX y tensión laboral.
9. **La economía real de la automatización:** Costes llave en mano (integración, pinza, seguridad, mantenimiento) y opción *RaaS*.
10. **Seguridad y cumplimiento en planta:** Evaluación de riesgos de la célula completa *(nota de verificación de Reglamento Europeo de Máquinas)*.
11. **Automatizar CON las personas:** Comunicación temprana, ergonomía e itinerarios de *upskilling* y *reskilling*.
12. **Taller práctico:** Caso de negocio de piloto de automatización (oficina o planta).
13. **Puesta en común:** Lecciones cruzadas entre automatización administrativa y física.
14. **Síntesis y puente al Tema 8:** Cada robot, *bot* RPA, sensor y servidor *cloud* que conectamos amplía la superficie de ataque: llega el turno de la Ciberseguridad.

### Ficha de trabajo
Documento de 2 páginas con:
- Tabla puntuada «Radar de tareas 4D» (Actividad 1).
- Esquema visual comparativo: API/*no-code* vs. RPA vs. Cobot vs. Robot tradicional vs. Visión artificial (coste orientativo, flexibilidad, tiempo de despliegue y mantenimiento).

### Plantilla práctica replicable: Caso de Negocio de Piloto de Automatización

| Bloque | Preguntas guía | Definición del piloto |
|---|---|---|
| **1. Proceso y línea base** | ¿Qué tarea concreta se automatiza? Horas/semana, tasa de error, OEE o bajas actuales. | |
| **2. Simplificación previa** | ¿Qué pasos redundantes se eliminan antes de automatizar? | |
| **3. Tecnología elegida** | API/*no-code*, RPA (+OCR/IA), Cobot, AMR o Visión artificial. ¿Por qué esta y no otra? | |
| **4. Excepciones y seguridad** | ¿Qué ocurre cuando falla una regla o pieza? Requisitos de seguridad (CE/PRL o permisos RPA). | |
| **5. Inversión integral y *payback*** | Coste llave en mano (hardware/licencias + integración + seguridad) + mantenimiento anual vs. ahorro/valor anual = meses de retorno (¿compra o *RaaS*?). | |
| **6. Plan humano (*Upskilling*)** | Personas afectadas, comunicación previa, formación y nueva asignación de tiempo liberado. | |

### Lecturas o recursos recomendados
- Willcocks, L., & Lacity, M. *Service Automation: Robots and the Future of Work*. Steve Brookes Publishing (referencia clásica sobre RPA y gestión de servicios).
- Schwab, K. *La cuarta revolución industrial* (marco divulgativo de Industria 4.0).
- Guías prácticas sobre Industria Conectada 4.0, robótica colaborativa y prevención de riesgos laborales (publicaciones del INSST en España e asociaciones de robótica industrial como AER).

### Vídeos, artículos y fuentes adicionales *(Validación previa obligatoria)*
> **Nota importante para el formador:** Verificar enlaces, cifras de mercado y normativa técnica vigente antes de impartir el tema.
- Verificar la fecha de aplicación y requisitos vigentes del **Reglamento (UE) 2023/1230 relativo a las máquinas** (que sustituye a la Directiva de Máquinas 2006/42/CE) y las normas técnicas vigentes sobre seguridad en robots colaborativos (serie ISO 10218 / ISO/TS 15066) junto con guías del **INSST**.
- Validar antes de clase 2 vídeos breves (2-3 min cada uno): una demostración clara de RPA/automatización de facturas y un vídeo real de cobot de paletizado o cámara de visión artificial trabajando en una pyme.
- Comprobar precios orientativos actualizados de licencias RPA/*no-code* y tarifas orientativas de soluciones *RaaS* en España para ajustar los ejemplos económicos al mercado actual.

### Glosario de términos clave

| Término | Definición operativa |
|---|---|
| ***AMR (Autonomous Mobile Robot)*** | Robot móvil autónomo capaz de transportar cargas por planta o almacén navegando dinámicamente sin guías físicas fijas. |
| **Cobot** | Robot colaborativo diseñado para trabajar con seguridad cerca de operarios en tareas repetitivas o pesadas. |
| **Hiperautomatización** | Combinación coordinada de RPA, APIs, inteligencia artificial y gestión de procesos para automatizar flujos complejos de extremo a extremo. |
| **Industria 4.0** | Integración de tecnologías digitales (IoT, robótica, visión artificial, *cloud*, datos) en los procesos productivos para ganar flexibilidad y eficiencia. |
| **OEE (*Overall Equipment Effectiveness*)** | Indicador industrial que multiplica Disponibilidad × Rendimiento × Calidad para medir la eficiencia real de un equipo o línea. |
| ***RaaS (Robotics-as-a-Service)*** | Alquiler operativo o pago por uso de soluciones robóticas con mantenimiento incluido, convirtiendo CAPEX en OPEX. |
| ***RPA (Robotic Process Automation)*** | Software que ejecuta tareas administrativas repetitivas sobre interfaces digitales siguiendo reglas predefinidas. |
| ***Upskilling / Reskilling*** | *Upskilling* mejora competencias para evolucionar en el mismo puesto; *reskilling* capacita para desempeñar un rol distinto dentro de la empresa. |
| **Visión artificial** | Uso de cámaras, iluminación industrial e IA para inspeccionar calidad, leer códigos o guiar robots automáticamente. |

---

## 9. Adaptaciones para modalidad híbrida

### Sesión presencial
- Mostrar dos microvídeos validados de 2 minutos (uno de RPA procesando facturas en pantalla y otro de cobot/visión en planta) para anclar visualmente ambos mundos antes del caso práctico.
- Realizar la priorización presupuestaria de *Envases del Ebro* en mesas de trabajo usando fichas de presupuesto («90.000 € de CAPEX») para experimentar físicamente la restricción financiera y la alternativa *RaaS*.

### Sesión online síncrona
- Usar una plantilla de cálculo compartida con las tres propuestas de *Envases del Ebro* para que cada sala compare el escenario de compra directa frente a la combinación compra + *RaaS*.
- Aprovechar el chat y sondeos en vivo para que participantes de empresas de servicios (más cercanos a API/RPA) y participantes industriales/logísticos (más cercanos a cobots/visión) compartan preguntas cruzadas.

### Sesión asíncrona (trabajo previo y posterior en plataforma LMS)
- **Pre-trabajo (20 min):** Observar durante una jornada laboral 2 tareas repetitivas propias o del equipo (anotando minutos invertidos y errores habituales) y subir el resumen breve al LMS.
- **Post-trabajo (30 min):** Entregar el Caso de Negocio de Piloto de Automatización refinado + participar en un breve foro sobre «cómo presentar una iniciativa de automatización al equipo sin generar rechazo».

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Integra la simplificación de procesos del **Tema 1**, el OCR y clasificación inteligente del **Tema 2 (IA)**, la sensorización física del **Tema 3 (IoT)**, el seguimiento de KPIs/OEE del **Tema 5 (BI)** y las plataformas conectadas del **Tema 6 (Cloud)**.
- **Competencias que desarrolla:** Diagnóstico de procesos automatizables, criterio técnico-económico ante soluciones de oficina y planta, evaluación integral de inversiones (CAPEX vs. *RaaS*) y liderazgo ético de recualificación laboral.
- **Conexión dentro del plan de 10 bloques:**
  - *Tema anterior (Bloque 7, Tema 6 — Cloud computing):* Las automatizaciones modernas (APIs, RPA en la nube, sistemas MES conectados) dependen de infraestructuras *cloud* e híbridas seguras y estables.
  - *Tema posterior (Bloque 7, Tema 8 — Ciberseguridad):* Cuanto más automatizamos y conectamos oficinas, nubes, sensores IoT y maquinaria de planta, mayor es el impacto de un ciberataque o secuestro de sistemas (*ransomware*). El Tema 8 cierra el bloque dotando a la pyme de resiliencia y protección integral.
- **Evidencia de aprendizaje que dejará el alumnado:** Un **Caso de Negocio de Piloto de Automatización (Oficina o Planta)** completo, con cálculo de *payback*, gestión de excepciones/seguridad y plan de *upskilling/reskilling*.

---

## Siguientes pasos para el formador

1. **Validar normativa de seguridad de máquinas:** Comprobar antes de impartir las fechas y obligaciones vigentes del Reglamento Europeo de Máquinas (UE 2023/1230) y recomendaciones del INSST sobre robótica colaborativa.
2. **Equilibrar perfiles de oficina e industria en el aula:** Asegurar que tanto los mandos de pymes de servicios (foco API/RPA) como los de industria/logística (foco cobots/visión/OEE) perciban aplicación inmediata y aprendan unos de otros.
3. **Preparar dos vídeos cortos reales y validados:** Tener descargados o comprobados dos clips de 2 minutos (RPA y cobot/visión) para que nadie se quede en abstracciones.
4. **Conectar con el cierre del Bloque 7 (Tema 8):** Plantear la pregunta puente: «Imagina que mañana Envases del Ebro ya tiene RPA, visión artificial y ERP en la nube… y a las 8:00 h aparece una pantalla roja pidiendo rescate por un *ransomware* que bloquea toda la empresa. ¿Están preparados?».
