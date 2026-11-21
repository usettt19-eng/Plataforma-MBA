# Tema 1. Introducción al big data

## 1. Ficha del tema

| Campo | Detalle |
| --- | --- |
| **Título del tema** | Tema 1. Introducción al big data |
| **Bloque y posición dentro del programa** | Bloque 9: Big data — Posición 1 de 5 |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Mandos intermedios y emprendedores |
| **Nivel de dificultad** | Intermedio |
| **Prerrequisitos** | Conocimientos básicos de gestión empresarial, digitalización de procesos, innovación sostenible y manejo habitual de hojas de cálculo o herramientas de informes (ERP/CRM). |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado será capaz de evaluar el potencial del big data en una pyme o negocio digital diferenciando sus dimensiones clave (las 5 V), identificando las fuentes de datos internas y externas relevantes y proponiendo una arquitectura básica realista y orientada a generar valor de negocio. |

---

## 2. Objetivos de aprendizaje

Al concluir esta sesión, el alumnado será capaz de:

1. **Distinguir** las cinco dimensiones del big data (volumen, velocidad, variedad, veracidad y valor) aplicándolas al diagnóstico de datos de una pyme en proceso de transformación digital. *(Nivel de Bloom: Analizar)*
2. **Clasificar** las principales fuentes de datos empresariales (internas, externas, estructuradas, semiestructuradas y no estructuradas) según su origen, formato y utilidad operativa. *(Nivel de Bloom: Comprender)*
3. **Comparar** los componentes de una arquitectura básica de datos (ingesta, almacenamiento en data warehouse vs. data lake, procesamiento batch vs. streaming y capa de consumo) para seleccionar la opción más proporcionada a los recursos de una empresa mediana. *(Nivel de Bloom: Evaluar)*
4. **Identificar** problemas críticos de calidad, silos de información y costes ocultos que impiden convertir grandes volúmenes de datos en valor real de negocio. *(Nivel de Bloom: Analizar)*
5. **Diseñar** un mapa inicial de fuentes y un esquema conceptual de arquitectura de datos para un proceso concreto de su organización o proyecto emprendedor. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Qué es (y qué no es) el big data: las 5 V con criterio de negocio

**Explicación breve y clara**  
El término *big data* no se refiere únicamente a "tener muchos datos", sino a la capacidad técnica y organizativa de capturar, almacenar, procesar y explotar conjuntos de datos cuya escala, velocidad de generación o diversidad superan las capacidades de las herramientas tradicionales (como hojas de cálculo locales o bases de datos relacionales aisladas) con el fin de tomar mejores decisiones. En el contexto de pymes y empresas en transformación digital, el reto principal rara vez es solo el volumen masivo, sino la **variedad** de fuentes desconectadas, la **velocidad** con la que cambia el mercado y la **veracidad** del dato antes de generar **valor**.

**Conceptos clave**  
- Las 5 V del big data (Volumen, Velocidad, Variedad, Veracidad, Valor).
- *Small data* vs. *Big data*.
- Silos de datos departamentales.
- Coste de almacenamiento vs. retorno de explotación.

**Definiciones necesarias**  
- **Volumen:** Cantidad de datos generados y almacenados (desde gigabytes hasta petabytes) que requiere almacenamiento escalable.
- **Velocidad:** Ritmo al que se generan, ingieren y deben procesarse los datos (en lotes periódicos o en tiempo casi real).
- **Variedad:** Diversidad de formatos y orígenes (tablas de ERP, correos, audios de atención al cliente, registros web, sensores IoT, imágenes).
- **Veracidad:** Grado de fiabilidad, exactitud, completitud y consistencia de los datos para poder confiar en ellos al decidir.
- **Valor:** Impacto económico, operativo o estratégico medible que se obtiene al transformar los datos en decisiones o automatizaciones.

**Ejemplo práctico realista (pyme en transformación digital)**  
Una empresa familiar de venta de recambios agrícolas con 65 empleados en Castilla y León dispone de un ERP con 8 años de facturas (*volumen moderado*), un comercio electrónico recién estrenado que registra clics y carritos abandonados cada segundo (*velocidad*), hojas de cálculo de comerciales, fotos de incidencias enviadas por WhatsApp y hojas de ruta en PDF (*variedad*). El problema real es la *veracidad*: un mismo cliente aparece dado de alta tres veces con nombres distintos. Sin resolver la veracidad, acumular más datos no aporta *valor*; al unificar los datos de cliente y pedidos, logran reducir un 15 % las roturas de stock en campaña de cosecha (ejemplo ilustrativo de impacto esperado).

**Errores frecuentes**  
- Pensar que el big data es exclusivo de grandes tecnológicas o multinacionales.
- Invertir en almacenamiento masivo ("guardar por si acaso") sin haber definido qué decisión de negocio se quiere mejorar.
- Ignorar la veracidad y asumir que más datos equivalen automáticamente a mejores decisiones (*garbage in, garbage out*).

**Preguntas que el alumnado debería poder responder**  
- ¿Por qué una pyme puede tener un problema real de big data aunque no maneje petabytes de información?
- ¿Cuál de las 5 V suele actuar como principal cuello de botella en la rentabilidad de un proyecto de datos y por qué?
- ¿Qué diferencia existe entre disponer de *small data* bien estructurado y necesitar capacidades de big data?

---

### 3.2. Tipos y fuentes de datos en la empresa digital

**Explicación breve y clara**  
Antes de hablar de tecnología, un mando intermedio o emprendedor debe cartografiar de dónde proceden los datos de su organización y en qué formato llegan. Las empresas modernas conviven con tres grandes tipologías según su estructura (estructurados, semiestructurados y no estructurados) y dos orígenes principales (internos y externos). Conocer esta clasificación permite anticipar el esfuerzo técnico de limpieza, integración y cumplimiento normativo.

**Conceptos clave**  
- Datos estructurados, semiestructurados y no estructurados.
- Fuentes internas transaccionales (ERP, CRM, TPV, RR. HH.).
- Fuentes operativas y digitales (analítica web, apps, IoT, telemetría).
- Fuentes externas (redes sociales, marketplaces, proveedores de datos, datos abiertos/meteorología).
- Dato primario (*first-party data*) vs. dato de terceros (*third-party data*).

**Definiciones necesarias**  
- **Datos estructurados:** Información organizada en esquemas rígidos de filas y columnas (bases de datos SQL, tablas de facturación, inventario).
- **Datos semiestructurados:** Datos que no siguen un esquema tabular estricto pero contienen etiquetas o marcadores que facilitan su interpretación (archivos JSON, XML, logs de servidores, correos electrónicos).
- **Datos no estructurados:** Información sin modelo predefinido de fácil consulta tabular (texto libre de reseñas, audios de llamadas, vídeos de cámaras de planta, PDFs escaneados).
- **First-party data:** Datos recopilados directamente por la empresa en sus propios canales con consentimiento del cliente o usuario.

**Ejemplo práctico realista (pyme en transformación digital)**  
Una cadena hotelera independiente con 4 hoteles boutique en la Costa Brava combina datos **estructurados** internos (reservas del PMS, tarifas, costes de lavandería), datos **semiestructurados** (registros JSON de búsquedas en su motor de reservas web y API de precios de la competencia) y datos **no estructurados** (comentarios en plataformas de reseñas y correos de reclamaciones). Al cruzar sus reservas internas con datos **externos** (calendario de eventos locales y previsión meteorológica), el equipo directivo ajusta precios dinámicos con mayor precisión sin depender únicamente de su intuición.

**Errores frecuentes**  
- Desaprovechar datos no estructurados valiosos (como incidencias de soporte técnico o reclamaciones) por no saber cómo catalogarlos.
- Capturar datos externos o personales sin revisar la base legal, licencias de uso o requisitos de privacidad *(nota para el formador: verificar la normativa vigente aplicable en España/UE, como el RGPD y la LOPDGDD, antes de impartir ejemplos de tratamiento de datos personales)*.
- Depender en exceso de datos de plataformas de terceros (marketplaces o redes sociales) sin construir una base propia de *first-party data*.

**Preguntas que el alumnado debería poder responder**  
- ¿Qué diferencia técnica y práctica existe entre un dato semiestructurado y uno no estructurado?
- ¿Qué riesgos estratégicos asume una pyme que solo analiza los datos que le muestra un marketplace externo?
- ¿Qué fuentes internas suelen estar infrautilizadas en tu departamento o negocio actual?

---

### 3.3. Arquitecturas básicas de datos: del dato bruto a la decisión

**Explicación breve y clara**  
Una arquitectura de datos es el "plano de fontanería" que describe cómo viaja el dato desde que se origina hasta que alguien (o un sistema automático) lo utiliza para decidir. Aunque el ecosistema tecnológico es amplio, prácticamente cualquier arquitectura moderna de datos responde a cinco capas lógicas: **fuentes**, **ingesta**, **almacenamiento**, **procesamiento/transformación** y **consumo**. Comprender esta estructura evita que los responsables de negocio dependan a ciegas de proveedores tecnológicos y les permite dimensionar soluciones proporcionales.

**Conceptos clave**  
- Pipeline de datos (flujo de extremo a extremo).
- ETL (*Extract, Transform, Load*) vs. ELT (*Extract, Load, Transform*).
- Procesamiento *batch* (por lotes) vs. *streaming* (en tiempo real o casi real).
- *Data Warehouse*, *Data Lake* y *Data Lakehouse*.
- Infraestructura *on-premise* vs. *cloud* (nube).

**Definiciones necesarias**  
- **ETL / ELT:** Procesos de integración que extraen datos de distintas fuentes, los limpian/transforman y los cargan en un repositorio central. En ELT la transformación ocurre dentro del repositorio destino, algo muy habitual en arquitecturas *cloud*.
- **Data Warehouse (Almacén de datos):** Repositorio centralizado optimizado para datos estructurados, limpios y modelados para consultas analíticas y cuadros de mando (Business Intelligence).
- **Data Lake (Lago de datos):** Repositorio escalable capaz de almacenar grandes volúmenes de datos en su formato nativo (estructurados, semiestructurados y no estructurados) para usos analíticos avanzados o ciencia de datos.
- **Data Lakehouse:** Arquitectura híbrida que combina la flexibilidad y bajo coste de almacenamiento de un *data lake* con la fiabilidad, gobierno y rendimiento de consulta de un *data warehouse*.
- **Procesamiento batch vs. streaming:** El procesamiento *batch* agrupa y procesa datos a intervalos programados (por ejemplo, cada noche); el *streaming* los procesa de forma continua conforme se generan (segundos o milisegundos).

**Ejemplo práctico realista (pyme en transformación digital)**  
Una empresa valenciana de distribución de material eléctrico con 90 empleados quería "tiempo real para todo". Al analizar sus necesidades con criterio de negocio, descubrieron que para los informes financieros y de compras bastaba un proceso **batch** nocturno hacia un **Data Warehouse en la nube** (coste muy contenido y mantenimiento sencillo), reservando una ingesta en **casi tiempo real** únicamente para sincronizar el stock disponible entre el almacén central y la tienda B2B online, donde una desactualización sí provoca pedidos fallidos y costes de devolución.

**Errores frecuentes**  
- Construir un *Data Lake* sin gobierno ni catálogo, convirtiéndolo en un *Data Swamp* (pantano de datos) inutilizable.
- Exigir procesamiento en tiempo real (*streaming*) para decisiones que la dirección solo revisa una vez a la semana, multiplicando innecesariamente costes y complejidad.
- Elegir herramientas concretas antes de definir los requisitos de negocio y el volumen/latencia real necesario.

**Preguntas que el alumnado debería poder responder**  
- ¿En qué casos conviene priorizar un *Data Warehouse* frente a un *Data Lake* en una pyme?
- ¿Cuál es la diferencia operativa y económica entre procesar datos en *batch* o en *streaming*?
- ¿Qué significa que un *Data Lake* se convierta en un *Data Swamp* y cómo se previene?

---

### 3.4. Del dato al valor de negocio: madurez analítica y viabilidad en pymes

**Explicación breve y clara**  
La tecnología por sí sola no crea ventaja competitiva. Para que el big data sea rentable en una pyme o negocio digital debe alinearse con la madurez de la organización y con casos de uso de retorno claro. La analítica evoluciona habitualmente en cuatro niveles: **descriptiva** (qué pasó), **diagnóstica** (por qué pasó), **predictiva** (qué es probable que pase) y **prescriptiva** (qué acción conviene tomar). Empezar por consolidar bien la capa descriptiva y diagnóstica suele generar victorias rápidas (*quick wins*) que financian fases más avanzadas.

**Conceptos clave**  
- Escalera de madurez analítica (descriptiva, diagnóstica, predictiva, prescriptiva).
- Retorno de la inversión (ROI) en iniciativas de datos y costes totales de propiedad (TCO).
- Adopción *cloud* escalable (pago por uso) para pymes.
- Cultura basada en datos (*data-driven*) y barreras organizativas.

**Definiciones necesarias**  
- **Analítica descriptiva:** Resume datos históricos para visualizar el estado actual del negocio (ventas por zona, tasa de devolución, consumo energético mensual).
- **Analítica diagnóstica:** Profundiza en las causas de una desviación cruzando variables (por qué aumentaron las devoluciones en una ruta concreta).
- **Analítica predictiva:** Utiliza modelos estadísticos o aprendizaje automático para estimar comportamientos futuros (probabilidad de impago o demanda del próximo mes).
- **Analítica prescriptiva:** Sugiere o automatiza la mejor decisión posible dadas unas restricciones (qué ruta asignar o qué precio ofrecer).
- **TCO (Coste Total de Propiedad):** Suma de costes directos e indirectos de una solución de datos: licencias/nube, integración, formación, mantenimiento y tiempo del equipo.

**Ejemplo práctico realista (pyme en transformación digital)**  
Un emprendedor con una franquicia de 6 lavanderías autoservicio y servicio a domicilio quiere montar un algoritmo predictivo de precios dinámicos. Al revisar su madurez analítica, comprueba que aún no puede saber con exactitud qué margen neto deja cada local por franja horaria (nivel descriptivo). Decide estructurar una hoja de ruta en dos fases: primero consolida automáticamente los datos de TPV, consumo eléctrico y pedidos web en un cuadro de mando semanal (descriptiva + diagnóstica) y, tras 6 meses de histórico limpio, evalúa modelos predictivos de demanda.

**Errores frecuentes**  
- Querer saltar directamente a la analítica predictiva o prescriptiva sin tener resueltos los datos básicos descriptivos.
- Subestimar el coste del cambio cultural (formación de mandos intermedios y adopción diaria) frente al coste del software.
- Medir el éxito del proyecto por el número de informes creados en lugar de por decisiones mejoradas o euros ahorrados/generados.

**Preguntas que el alumnado debería poder responder**  
- ¿Por qué es arriesgado abordar un proyecto predictivo si falla la capa de analítica descriptiva?
- ¿Qué partidas suele olvidar una pyme al calcular el TCO de su primera iniciativa de datos?
- ¿Cómo convencerías a dirección general para priorizar un *quick win* de datos en lugar de una plataforma sobredimensionada?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** sigue un enfoque activo y aplicado, alternando microcápsulas conceptuales con trabajo práctico sobre empresas reales y el caso práctico central.

| Fase | Tiempo | Duración | Qué hace el formador | Qué hace el alumnado |
| --- | --- | --- | --- | --- |
| **1. Apertura y activación** | 00:00 – 00:25 | **25 min** | Da la bienvenida, enlaza con el cierre del Bloque 8 (innovación y sostenibilidad), lanza la evaluación diagnóstica breve y dinamiza la **Actividad 1 (Mapa de las 5 V en tu empresa)**. | Responde al diagnóstico inicial, reflexiona sobre los datos que ya genera su empresa/departamento y comparte en plenario un ejemplo de silo o dolor de datos. |
| **2. Exposición breve / Microlearning I** | 00:25 – 00:55 | **30 min** | Explica los apartados 3.1 y 3.2 (Las 5 V con foco de negocio y clasificación de fuentes de datos) apoyándose en ejemplos de pymes españolas y preguntas socráticas. | Toma notas estructuradas, plantea dudas sobre su propio sector e identifica ejemplos de datos estructurados, semiestructurados y no estructurados. |
| **3. Actividad de aplicación (Fuentes y 5 V)** | 00:55 – 01:25 | **30 min** | Presenta y facilita la **Actividad 2 (Auditoría exprés de fuentes de datos)** en equipos pequeños, circulando para corregir clasificaciones erróneas. | En grupos de 3-4 personas, clasifica un listado de 12 fuentes de datos empresariales, detecta riesgos de veracidad y prioriza 3 fuentes por valor potencial. |
| **Pausa** | 01:25 – 01:40 | **15 min** | Descanso operativo (disponible para consultas informales). | Descanso y networking. |
| **4. Exposición breve / Microlearning II** | 01:40 – 02:10 | **30 min** | Expone los apartados 3.3 y 3.4 (Arquitecturas básicas: ingesta, DW/DL/Lakehouse, batch vs. streaming, madurez analítica y TCO) mediante esquemas visuales comparativos. | Compara arquitecturas, formula preguntas sobre viabilidad *cloud* vs. *on-premise* y valida qué nivel analítico encaja con distintos problemas de negocio. |
| **5. Análisis de caso práctico** | 02:10 – 03:00 | **50 min** | Introduce el caso de **Grupo Frutas del Segura S.L.**, reparte los datos, guía el análisis en equipos y actúa como comité de dirección desafiando propuestas sobredimensionadas. | Analiza el caso en equipo, evalúa las 5 V de la empresa, diseña una arquitectura básica proporcional por fases y prepara una defensa de 3 minutos. |
| **6. Discusión guiada y puesta en común** | 03:00 – 03:25 | **25 min** | Modera las exposiciones breves de 2-3 equipos, contrasta enfoques (por ejemplo, batch vs. streaming y costes) y sintetiza buenas prácticas comunes. | Presenta su propuesta, ofrece retroalimentación constructiva a otros equipos y ajusta sus criterios arquitectónicos. |
| **7. Actividad de transferencia individual** | 03:25 – 03:45 | **20 min** | Guía la **Actividad 3 (Lienzo de Arquitectura Mínima Viable)** aplicada al negocio o área real de cada participante. | Completa individualmente su ficha de transferencia definiendo 1 problema de negocio, fuentes implicadas, arquitectura objetivo y primer *quick win*. |
| **8. Síntesis, evaluación y cierre** | 03:45 – 04:00 | **15 min** | Resume los 5 aprendizajes clave, recoge el ticket de salida / evaluación sumativa breve, explica la conexión con el Tema 2 y cierra la sesión. | Realiza la autoevaluación rápida, entrega su evidencia de transferencia y anota una acción concreta para aplicar en su empresa esta semana. |

*Suma total verificada: 25 + 30 + 30 + 15 + 30 + 50 + 25 + 20 + 15 = **240 minutos (4 horas exactas)**.*

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Termómetro de las 5 V en tu realidad laboral

- **Nombre:** Termómetro de las 5 V en tu empresa o proyecto.
- **Objetivo:** Activar los conocimientos previos del alumnado y diagnosticar de forma intuitiva qué dimensión del big data genera más fricción en su contexto profesional.
- **Instrucciones para el alumnado:**
  1. De forma individual (5 minutos), puntúa del 1 (muy bajo) al 5 (crítico/muy alto) cómo percibes cada una de las 5 V en tu organización actual o proyecto emprendedor: Volumen, Velocidad, Variedad, Veracidad (en este caso 1 = muy poco fiable, 5 = muy fiable) y Valor obtenido hoy.
  2. Anota en una nota adhesiva (física o digital) el mayor "dolor de datos" que sufres cada mes (por ejemplo: "tardamos 4 días en cruzar ventas con almacén").
  3. Comparte en parejas (5 minutos) y prepara una frase resumen para la puesta en común.
- **Materiales necesarios:** Notas adhesivas y rotafolio (presencial) o pizarra digital tipo Miro/Mural/Mentimeter (online).
- **Tiempo estimado:** 15 minutos (dentro de la fase de Apertura y activación).
- **Rol del formador:** Dinamizar la votación rápida, agrupar dolores repetidos (normalmente silos y veracidad) y conectarlos con la agenda de la sesión.
- **Producto o entregable esperado:** Mapa colectivo de puntuaciones 5 V y nube de dolores reales del grupo.
- **Criterios de éxito:** El 100 % del alumnado participa, identifica al menos un problema concreto de datos en su entorno y reconoce que el volumen no es el único factor relevante.

---

### Actividad 2 (Aplicación): Auditoría exprés de fuentes de datos

- **Nombre:** Clasifica, limpia y prioriza: auditoría de fuentes en una pyme omnicanal.
- **Objetivo:** Clasificar distintas fuentes de datos empresariales por origen y estructura, detectando riesgos de veracidad y potencial de negocio.
- **Instrucciones para el alumnado:**
  1. En equipos de 3-4 personas, revisad la lista de 12 fuentes de datos de una empresa distribuidora de equipamiento deportivo (facturas ERP, fichas de clientes CRM, clics de Google Analytics/web en JSON, correos de reclamaciones, audios de call center, Excel de tarifas de proveedores, reseñas en Google Maps, API meteorológica, registros GPS de furgonetas, facturas de luz en PDF, catálogo de precios de competidores y comentarios en Instagram).
  2. Clasificad cada fuente en una matriz según: **Origen** (interno/externo), **Estructura** (estructurado/semiestructurado/no estructurado) y **Latencia necesaria** (batch/streaming).
  3. Seleccionad las **3 fuentes prioritarias** para resolver el objetivo: *"Reducir las roturas de stock y las devoluciones por talla en los próximos 6 meses"*, justificando qué riesgos de veracidad habría que corregir primero.
- **Materiales necesarios:** Ficha impresa o documento compartido con las 12 tarjetas de fuentes y la matriz de clasificación.
- **Tiempo estimado:** 30 minutos (20 min trabajo en equipo + 10 min contraste rápido).
- **Rol del formador:** Revisar dudas conceptuales (especialmente la frontera entre semiestructurado y no estructurado) y cuestionar por qué descartan o priorizan cada fuente.
- **Producto o entregable esperado:** Matriz completada con las 12 fuentes y selección razonada de las 3 prioritarias con plan de control de veracidad.
- **Criterios de éxito:** Al menos 10 de las 12 fuentes están correctamente clasificadas; las 3 elegidas responden directamente al objetivo de negocio y explicitan al menos un riesgo realista de calidad del dato.

---

### Actividad 3 (Transferencia a la realidad laboral): Lienzo de Arquitectura Mínima Viable

- **Nombre:** Mi primer mapa de datos orientado a valor.
- **Objetivo:** Transferir los conceptos de fuentes, arquitectura básica y madurez analítica a un reto real de la empresa o proyecto emprendedor de cada participante.
- **Instrucciones para el alumnado:**
  1. Elige un proceso real de tu departamento o negocio donde hoy se tomen decisiones "a ojo" o con hojas de cálculo manuales propensas a error.
  2. Completa de forma individual el **Lienzo de Arquitectura Mínima Viable** (incluido en la Sección 8), rellenando: (a) Decisión de negocio que quieres mejorar, (b) Fuentes necesarias (máximo 4), (c) Tipo de ingesta recomendada (batch o streaming) y repositorio (DW/DL/Lakehouse simplificado), (d) Nivel de madurez analítica inicial (descriptiva/diagnóstica), (e) Riesgo principal de veracidad y (f) Primer entregable rápido (*quick win*) alcanzable en 60-90 días.
  3. Sube el lienzo al campus virtual antes del cierre para recibir feedback en la siguiente sesión.
- **Materiales necesarios:** Plantilla del Lienzo de Arquitectura Mínima Viable (en papel o formato editable).
- **Tiempo estimado:** 20 minutos.
- **Rol del formador:** Acompañar individualmente a quienes tengan dudas para acotar el alcance, evitando proyectos faraónicos o excesivamente técnicos.
- **Producto o entregable esperado:** Lienzo individual completo y realista aplicable al entorno laboral del alumno.
- **Criterios de éxito:** El problema de negocio está formulado de manera concreta, la arquitectura propuesta es coherente con la latencia real necesaria y el *quick win* es viable sin requerir infraestructuras desproporcionadas.

---

## 6. Caso práctico

### Contexto empresarial
**Grupo Frutas del Segura S.L.** es una pyme agroalimentaria ubicada en Murcia, con 110 empleados y una facturación anual aproximada de 28 millones de euros *(caso ficticio con fines docentes)*. Se dedica al envasado, conservación en frío y distribución de fruta de hueso y cítricos a cadenas de supermercados en España, Francia y Alemania, además de contar con un canal B2B online lanzado hace un año para fruterías independientes.

### Situación o problema
En los últimos 18 meses, las mermas por deterioro del producto en tránsito y cámara han aumentado un 3,2 %, reduciendo significativamente el margen neto. Al mismo tiempo, la dirección comercial recibe cada vez más penalizaciones de supermercados europeos por retrasos en entregas o incidencias de temperatura. La empresa ya genera muchos datos, pero cada departamento trabaja de forma aislada. El director general ha recibido una oferta de una consultora para implantar en 12 meses un *Data Lake* corporativo con *streaming* total en todas las áreas por un presupuesto inicial de 240.000 €, pero la directora de operaciones y el responsable financiero dudan de que ese enfoque sea el adecuado.

### Datos disponibles

| Área / Fuente | Sistema actual | Formato | Volumen / Frecuencia estimada | Problema detectado |
| --- | --- | --- | --- | --- |
| **Compras a agricultores y lotes** | ERP agrícola antiguo (*on-premise*) | Tablas SQL estructuradas | ~40.000 registros/mes | Códigos de variedad duplicados entre fincas. |
| **Cámaras frigoríficas (12 cámaras)** | Sensores IoT de temperatura y humedad | Mensajes JSON vía API del fabricante | Lectura cada 2 minutos (~260.000 registros/mes) | Los datos se sobreescriben a los 30 días; solo generan alertas por SMS si falla la luz. |
| **Flota frigorífica (18 camiones propios + subcontratados)** | GPS y termógrafos de cabina | Archivos CSV semanales + alertas web | ~500.000 puntos/mes | Los camiones subcontratados envían informes en PDF escaneado al final de la semana. |
| **Pedidos B2B y supermercados** | Portal e-commerce + EDI de supermercados | XML/EDI y base de datos relacional | ~1.800 pedidos/mes | El stock en la web se actualiza manualmente 2 veces al día. |
| **Incidencias y reclamaciones de clientes** | Correo electrónico y WhatsApp de comerciales | Texto libre y fotos de fruta dañada | ~140 incidencias/mes | No se vinculan al número de lote ni al camión que hizo la entrega. |
| **Climatología y precios en destino** | Fuentes externas (agencias meteorológicas y lonjas) | Consulta manual en web | Diario | Nadie guarda histórico ni lo cruza con la maduración del lote. |

**Restricciones de negocio:**
- Presupuesto disponible para el primer año de transformación de datos: **55.000 €** (incluyendo nube, integración básica y formación).
- Equipo técnico interno actual: 1 responsable de sistemas (soporte generalista) y 1 administrativa avanzada en Excel.
- Objetivo prioritario de dirección: **reducir las mermas y penalizaciones por cadena de frío en los próximos 9 meses**.

### Preguntas de análisis
1. ¿Cómo se manifiestan las **5 V del big data** en Grupo Frutas del Segura S.L.? ¿Cuál es hoy la V más crítica y cuál está generando el mayor coste oculto?
2. ¿Por qué la propuesta de la consultora (Data Lake + streaming total por 240.000 €) está desalineada con la realidad de la empresa?
3. ¿Qué fuentes de datos son imprescindibles en una **Fase 1** para atacar las mermas y penalizaciones, y cuáles pueden posponerse?
4. ¿En qué flujos se justifica realmente el procesamiento **en tiempo casi real (streaming)** y en cuáles basta un procesamiento **batch** diario?
5. ¿Qué arquitectura básica (capas de ingesta, almacenamiento, transformación y consumo) recomendarías con el presupuesto y equipo disponibles?

### Tarea a realizar
En equipos de 4 personas, asumid el rol de **comité asesor de transformación digital** y elaborad una propuesta ejecutiva en 1 página (o 3 diapositivas esquemáticas) que incluya:
1. Diagnóstico breve de las 5 V y del nivel de madurez analítica actual.
2. Selección priorizada de fuentes para la Fase 1 y medidas concretas de corrección de veracidad (por ejemplo, trazabilidad del lote).
3. Esquema visual de la arquitectura recomendada (diferenciando qué va en *batch* y qué va en *streaming*, y justificando *Data Warehouse* vs. *Data Lake* / *Lakehouse* en la nube).
4. Hoja de ruta en 2 fases (0-6 meses y 6-12 meses) ajustada al presupuesto de 55.000 € y con un *quick win* medible.

### Posibles soluciones o criterios de análisis
Una propuesta sólida debería recoger los siguientes criterios orientativos:
- **Diagnóstico 5 V:** El volumen es manejable en nube a muy bajo coste; el reto real está en la **Variedad** (JSON IoT, EDI, PDFs, fotos/correos) y la **Veracidad** (códigos duplicados, incidencias sin número de lote, pérdida del histórico de cámaras a los 30 días).
- **Criterio batch vs. streaming:**
  - *Streaming / casi tiempo real:* Justificado únicamente para **alertas de temperatura en cámaras frigoríficas y camiones propios**, donde una desviación detectada a tiempo salva un cargamento completo, y eventualmente para sincronizar stock B2B.
  - *Batch (nocturno/diario):* Suficiente para integrar pedidos ERP/EDI, históricos de mermas, costes por agricultor/variedad y análisis de reclamaciones.
- **Arquitectura proporcional:** En lugar de construir un *Data Lake* complejo desde cero, conviene una **arquitectura cloud gestionada ligera** (almacenamiento en la nube tipo *object storage* económico para guardar el histórico bruto de sensores y fotos de incidencias + un *Data Warehouse* cloud sencillo o *Lakehouse* gestionado como capa analítica) conectada mediante herramientas de ingesta ELT de bajo código (*low-code*) para no saturar al único técnico interno.
- **Medidas de veracidad imprescindibles:** Obligar a registrar el **ID de lote** en cualquier reclamación (sustituyendo WhatsApp informal por un formulario móvil sencillo que adjunte foto y lote), unificar el catálogo maestro de variedades en el ERP y exigir a transportistas subcontratados un CSV estándar o acceso API en lugar de PDFs escaneados.
- **Madurez analítica:** Fase 1 centrada en **analítica descriptiva y diagnóstica** (cuadro de mando de mermas por lote, cámara, transportista y variedad + alertas tempranas de cadena de frío); Fase 2 orientada a cruzar climatología y vida útil para **analítica predictiva** de deterioro.

### Preguntas de reflexión final
- ¿Qué habría ocurrido si la empresa hubiera aceptado el proyecto de 240.000 € sin resolver antes la captura del ID de lote en las reclamaciones?
- ¿Dónde trazaríais la línea entre lo que debe desarrollarse internamente y lo que conviene contratar como servicio gestionado en la nube en una pyme con equipo IT reducido?
- ¿Qué similitudes encontráis entre los silos de Frutas del Segura y los de vuestra propia organización?

---

## 7. Evaluación

### Evaluación diagnóstica breve (al inicio de la sesión — 5 min)
Cuestionario rápido de 4 preguntas (vía Mentimeter, Forms o mano alzada):
1. ¿Qué afirmación describe mejor el big data en una pyme? *(Diferenciar volumen masivo vs. capacidad de explotar variedad/velocidad/veracidad para generar valor).*
2. Señala cuál de estos ejemplos es un dato **semiestructurado**: (a) Tabla de facturas SQL, (b) Archivo JSON de sensores IoT, (c) Audio de una llamada de soporte.
3. ¿En qué nivel de madurez analítica situarías hoy a tu organización? *(Descriptiva manual / Descriptiva automatizada / Diagnóstica / Predictiva / Prescriptiva).*
4. ¿Cuál crees que es el principal freno para aprovechar los datos en tu empresa? *(Falta de tecnología / Calidad de los datos / Silos entre departamentos / Falta de presupuesto / Cultura).*

### Evaluación formativa durante la sesión
- Observación directa del formador durante la **Actividad 2** (precisión al clasificar fuentes y detectar riesgos de veracidad).
- Preguntas de comprobación oral tras cada microcápsula (*"Si una pyme revisa márgenes cada lunes, ¿necesita streaming?"*).
- Retroalimentación inmediata durante la defensa del **Caso práctico (Grupo Frutas del Segura S.L.)** sobre proporcionalidad técnica y económica.

### Evaluación sumativa al final de la sesión
Entrega individual del **Lienzo de Arquitectura Mínima Viable (Actividad 3)** aplicado a un proceso real del alumnado, junto con una breve justificación escrita (máximo 250 palabras) explicando por qué la solución es viable y qué valor generará. Se evalúa con la siguiente rúbrica.

### Rúbrica de evaluación

| Criterio | Insuficiente (1) | En desarrollo (2) | Adecuado (3) | Destacado (4) |
| --- | --- | --- | --- | --- |
| **1. Aplicación de las 5 V y enfoque a valor** | Confunde el big data únicamente con volumen; no define ningún problema de negocio medible. | Menciona algunas V de forma teórica, pero el vínculo con la decisión de negocio es vago. | Diagnostica correctamente las V relevantes y vincula la iniciativa a un objetivo operativo o económico claro. | Integra las 5 V con rigor, identifica el cuello de botella principal (p. ej., veracidad) y cuantifica criterios claros de valor esperado. |
| **2. Identificación y clasificación de fuentes** | Enumera fuentes incompletas o confunde sistemáticamente su origen y tipo de estructura. | Identifica fuentes básicas internas, pero omite formatos o riesgos de integración relevantes. | Clasifica con acierto fuentes internas/externas y su estructura, seleccionando solo las necesarias para el objetivo. | Combina estratégicamente fuentes internas y externas, diferenciando *first-party data* y anticipando requisitos de limpieza y captura. |
| **3. Proporcionalidad de la arquitectura básica** | Propone herramientas inconexas o una arquitectura sobredimensionada e inviable para una pyme. | Incluye algunas capas arquitectónicas, pero no justifica la elección entre *batch/streaming* o *DW/DL*. | Diseña una arquitectura coherente por capas (fuentes, ingesta, almacenamiento, consumo) ajustada a latencia y recursos. | Propone una arquitectura escalable, modular y realista en costes/equipo (TCO), justificando con precisión *batch vs. streaming* y evitando *Data Swamps*. |
| **4. Calidad del dato y plan de implantación (quick win)** | Ignora los problemas de veracidad y plantea un despliegue sin fases ni responsables. | Reconoce problemas de calidad del dato de forma genérica sin proponer soluciones operativas. | Identifica riesgos concretos de veracidad y define un *quick win* realista alineado con el nivel de madurez analítica. | Propone controles operativos específicos de veracidad en origen y una hoja de ruta por fases con métricas de éxito en 60-90 días. |

### Actividad de autoevaluación o reflexión (Ticket de salida — 5 min)
Cada participante responde por escrito a tres preguntas breves:
1. *¿Qué mito sobre el big data he desmontado hoy?*
2. *¿Qué fuente de datos de mi empresa está hoy infrautilizada y podría generar valor rápido?*
3. *¿Qué pregunta concreta haría mañana a un proveedor tecnológico antes de aprobar un presupuesto de datos?*

---

## 8. Materiales y recursos

### Guion de diapositivas (slide por slide)

1. **Slide 1 — Portada:** Título del tema, Bloque 9 (1/5), objetivo general de la sesión y hoja de ruta de las 4 horas.
2. **Slide 2 — Conexión con el programa:** De la innovación sostenible (Bloque 8) a la empresa basada en datos (Bloque 9).
3. **Slide 3 — Diagnóstico rápido:** Preguntas interactivas y Termómetro de las 5 V (Actividad 1).
4. **Slide 4 — Desmontando mitos:** Qué es y qué NO es big data en una pyme (*Small data* vs. *Big data*).
5. **Slide 5 — Las 5 V con gafas de directivo:** Tabla visual de Volumen, Velocidad, Variedad, Veracidad y Valor con ejemplos cotidianos.
6. **Slide 6 — El verdadero cuello de botella:** Por qué la Veracidad y los silos bloquean el Valor (*Garbage in, garbage out*).
7. **Slide 7 — Mapa de fuentes empresariales:** Datos internos vs. externos; *first-party* vs. *third-party data*.
8. **Slide 8 — Estructura del dato:** Comparativa visual con ejemplos reales de datos estructurados, semiestructurados y no estructurados.
9. **Slide 9 — Taller exprés (Actividad 2):** Instrucciones de la auditoría de 12 fuentes de datos.
10. **Slide 10 — Anatomía de una arquitectura básica:** Diagrama de 5 capas (Fuentes -> Ingesta -> Almacenamiento -> Transformación -> Consumo).
11. **Slide 11 — Ingesta y procesamiento:** ETL vs. ELT y matriz de decisión *Batch* vs. *Streaming*.
12. **Slide 12 — Dónde viven los datos:** Comparativa práctica *Data Warehouse* vs. *Data Lake* vs. *Data Lakehouse* (y cómo evitar el *Data Swamp*).
13. **Slide 13 — Escalera de madurez analítica:** Descriptiva, Diagnóstica, Predictiva y Prescriptiva (dónde empezar para obtener ROI rápido).
14. **Slide 14 — TCO y realidad pyme:** Costes visibles vs. costes ocultos (calidad, integración, cambio cultural) y ventaja del pago por uso *cloud*.
15. **Slide 15 — Caso práctico:** Contexto, datos y reto de **Grupo Frutas del Segura S.L.**
16. **Slide 16 — Puesta en común y criterios clave:** Arquitectura recomendada por fases para el caso práctico.
17. **Slide 17 — Transferencia individual (Actividad 3):** Presentación del Lienzo de Arquitectura Mínima Viable.
18. **Slide 18 — Cierre y puente al Tema 2:** 5 ideas fuerza, ticket de salida y adelanto de *Big data en proyectos: KPIs, calidad y gobernanza*.

### Ficha de trabajo (para el alumnado — Actividad 2)

| N.º | Fuente de datos | Origen (Interno / Externo) | Estructura (Estructurado / Semi / No estruct.) | Latencia óptima (Batch / Streaming) | Riesgo de veracidad detectado | ¿Prioritaria? (Sí/No) |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Facturas ERP | | | | | |
| 2 | Fichas clientes CRM | | | | | |
| 3 | Clics web (JSON) | | | | | |
| 4 | Correos reclamaciones | | | | | |
| 5 | Audios call center | | | | | |
| 6 | Excel tarifas proveedores | | | | | |
| 7 | Reseñas Google Maps | | | | | |
| 8 | API meteorológica | | | | | |
| 9 | GPS furgonetas | | | | | |
| 10 | Facturas luz en PDF | | | | | |
| 11 | Precios competidores | | | | | |
| 12 | Comentarios Instagram | | | | | |

### Plantilla práctica replicable: Lienzo de Arquitectura Mínima Viable (Actividad 3)

| Bloque del Lienzo | Pregunta guía para completar | Respuesta aplicada a tu empresa / proyecto |
| --- | --- | --- |
| **1. Decisión de negocio** | ¿Qué decisión concreta queremos mejorar y cómo mediremos el valor? | |
| **2. Diagnóstico 5 V** | ¿Cuál es la V más crítica hoy (variedad, veracidad, velocidad...)? | |
| **3. Fuentes clave (máx. 4)** | ¿De qué sistemas o canales salen los datos y en qué formato? | |
| **4. Ingesta y latencia** | ¿Necesita actualización *batch* (diaria/semanal) o *streaming*? ¿Por qué? | |
| **5. Almacenamiento base** | ¿Qué enfoque encaja mejor (*Data Warehouse* cloud, *Data Lake*, *Lakehouse*)? | |
| **6. Regla de veracidad** | ¿Qué único cambio operativo en origen limpiará el dato antes de procesarlo? | |
| **7. Consumo y nivel analítico** | ¿Quién usará el dato y en qué nivel empezaremos (descriptivo / diagnóstico)? | |
| **8. Quick win (60-90 días)** | ¿Cuál es el primer entregable sencillo que demostrará retorno a dirección? | |

### Lecturas y recursos recomendados
- **Lectura recomendada 1:** Provost, F., & Fawcett, T. *Data Science for Business* (capítulos iniciales sobre pensamiento analítico basado en datos).
- **Lectura recomendada 2:** Marr, B. *Big Data in Practice* (selección de casos aplicados a distintas industrias para inspirar el paso del dato al valor).
- **Lectura recomendada 3:** Documentación conceptual de arquitecturas modernas de datos (comparativa Data Warehouse vs. Data Lake vs. Lakehouse de proveedores cloud principales como AWS, Google Cloud o Microsoft Azure).

### Vídeos, artículos y fuentes adicionales *(Nota obligatoria: validar enlaces, vigencia y disponibilidad antes de utilizarlos en clase)*
- Vídeo divulgativo breve (5-8 min) sobre la diferencia entre *Data Warehouse*, *Data Lake* y *Data Lakehouse* (p. ej., canal técnico de IBM Technology o similar en español/subtitulado — **validar antes de impartir**).
- Informe anual sobre madurez digital y uso de analítica de datos en pymes españolas (p. ej., informes de ONTSI / Red.es o Fundación Telefónica — **verificar última edición y cifras vigentes antes de citarlas en clase**).
- Guía práctica de protección de datos y uso empresarial de datos de la Agencia Española de Protección de Datos (AEPD) — **comprobar normativa y guías vigentes antes de su referencia**.

### Glosario de términos clave

| Término | Definición operativa |
| --- | --- |
| **Batch (procesamiento por lotes)** | Procesamiento agrupado de datos en ventanas de tiempo programadas (cada hora, noche o semana). |
| **Data Lake** | Repositorio de almacenamiento masivo capaz de guardar datos brutos en cualquier formato (estructurado, semi o no estructurado). |
| **Data Lakehouse** | Arquitectura que une el almacenamiento flexible de un *Data Lake* con la estructura, gobierno y rendimiento de consulta de un *Data Warehouse*. |
| **Data Swamp** | *Data Lake* degradado por falta de catálogo, limpieza y gobierno, cuyos datos resultan inservibles o poco fiables. |
| **Data Warehouse** | Repositorio centralizado de datos limpios y estructurados diseñado para informes de negocio y analítica histórica. |
| **ETL / ELT** | Procesos de extracción, transformación y carga de datos desde fuentes origen hacia un repositorio analítico. |
| **First-party data** | Datos recogidos directamente por la empresa en sus propios puntos de contacto con clientes y usuarios. |
| **Latencia** | Tiempo transcurrido desde que se genera un dato en origen hasta que está disponible para ser consultado o utilizado. |
| **Pipeline de datos** | Flujo automatizado que mueve y transforma datos desde las fuentes hasta el destino analítico. |
| **Streaming** | Ingesta y procesamiento continuo de datos conforme se producen, con latencia de segundos o milisegundos. |
| **TCO (Coste Total de Propiedad)** | Coste completo de implantar, operar, mantener y evolucionar una solución tecnológica durante su vida útil. |

---

## 9. Adaptaciones para modalidad híbrida

### Sesión presencial
- **Dinámica de activación:** Utilizar un mural físico con 5 columnas (las 5 V) donde el alumnado coloca gomets o notas adhesivas con su puntuación y su mayor dolor de datos; esto genera impacto visual inmediato.
- **Caso práctico y aplicación:** Repartir tarjetas físicas plastificadas en la Actividad 2 y hojas tamaño A3 para que cada equipo dibuje el diagrama de arquitectura de *Grupo Frutas del Segura S.L.* con rotuladores de colores (azul para *batch*, rojo para *streaming*) y realice una "galería de arquitecturas" de 5 minutos recorriendo las mesas.
- **Gestión del tiempo:** Reservar la pausa presencial exacta de 15 minutos en el minuto 85 para mantener la energía cognitiva antes del bloque arquitectónico.

### Sesión online síncrona
- **Activación e interacción:** Sustituir los gomets físicos por una encuesta en vivo (Mentimeter/Slido) y una pizarra colaborativa (Miro/Mural/Whiteboard) con zonas preconfiguradas para cada equipo.
- **Trabajo en equipos:** Crear salas reducidas (*breakout rooms*) de 3-4 personas con el enlace a la ficha de Google Sheets/Miro ya abierto; el formador rota 3 minutos por sala para desbloquear dudas y envía avisos de tiempo por broadcast.
- **Microlearning y ritmo:** Insertar micro-preguntas en el chat cada 10-12 minutos (por ejemplo: *"Escribe B si usarías Batch o S si usarías Streaming para actualizar precios de hoteles"*) para evitar fatiga de pantalla. En la puesta en común, un portavoz comparte pantalla con su esquema durante 3 minutos exactos.

### Sesión asíncrona (trabajo previo y posterior en campus virtual)
- **Preparación previa (20-30 min opcionales antes de la sesión):** Vídeo-píldora grabada de 8 minutos sobre las 5 V y glosario básico + cuestionario diagnóstico online para que el formador adapte los ejemplos al sector mayoritario del grupo.
- **Trabajo autónomo si la sesión se cursa en diferido:** Visualización de las dos microcápsulas grabadas (20 min cada una), resolución guiada del ejercicio de las 12 fuentes mediante cuestionario autocorregible en el LMS y estudio del caso *Frutas del Segura* con entrega de un diagrama de arquitectura (en PowerPoint, Draw.io o Canva) en el foro para evaluación entre pares (cada alumno comenta la propuesta de un compañero siguiendo 2 criterios de la rúbrica).
- **Cierre asíncrono:** Entrega del *Lienzo de Arquitectura Mínima Viable* en el buzón de tareas en un plazo máximo de 72 horas, con feedback escrito o en audio de 2 minutos por parte del formador.

---

## 10. Conexión con el programa

- **Qué conocimientos previos refuerza:** Conecta la visión estratégica, la transformación de procesos y la gestión de la innovación trabajadas en bloques anteriores con la infraestructura informacional que hace posible medir y escalar negocios digitales.
- **Qué competencias desarrolla:** Pensamiento analítico orientado a negocio, alfabetización en arquitecturas de datos, evaluación crítica de proveedores tecnológicos y priorización de inversiones digitales bajo criterios de viabilidad y retorno.
- **Conexión con el tema anterior (Bloque 8, Tema 8 — Innovación y sostenibilidad):** En el cierre del Bloque 8 se abordó cómo innovar generando impacto económico, social y ambiental sostenible; este tema demuestra que sin datos fiables y bien arquitectados (por ejemplo, trazabilidad de mermas alimentarias, consumos energéticos o huella logística) no es posible medir ni demostrar la sostenibilidad ni escalar la innovación con rigor.
- **Conexión con el tema posterior (Bloque 9, Tema 2 — Big data en proyectos):** Una vez comprendido qué datos existen, cómo se clasifican y cómo fluyen por una arquitectura básica, el Tema 2 profundizará en cómo integrar esos datos en la dirección de proyectos y la toma de decisiones diaria mediante la definición de KPIs accionables, estándares de calidad del dato y marcos de gobernanza.
- **Evidencia de aprendizaje que dejará el alumnado:** El **Lienzo de Arquitectura Mínima Viable** aplicado a un proceso real de su empresa o proyecto emprendedor, acompañado de su justificación escrita de valor y viabilidad (insumo directo que retomará en el Tema 2 para definir KPIs y reglas de gobierno sobre ese mismo proceso).

---

## Siguientes pasos para el formador

1. **Revisión previa del perfil del grupo:** Consultar 48 horas antes los sectores y perfiles del alumnado inscrito para ajustar al menos dos ejemplos orales de las microcápsulas a sus sectores reales.
2. **Validación de recursos externos:** Verificar los enlaces de vídeos, artículos de referencia y normativa vigente (RGPD/LOPDGDD o guías de la AEPD) antes de publicarlos en el campus virtual.
3. **Preparación de materiales interactivos:** Configurar la encuesta diagnóstica inicial, preparar las copias impresas (o plantillas duplicadas en Miro/Drive) de la Actividad 2, el caso de *Grupo Frutas del Segura S.L.* y el Lienzo de la Actividad 3.
4. **Calibración del tiempo:** Controlar estrictamente los bloques de exposición (máximo 30 minutos cada uno) para proteger los 50 minutos del caso práctico y los 20 minutos de transferencia individual.
5. **Seguimiento post-sesión:** Revisar los lienzos entregados por el alumnado antes del Tema 2 y seleccionar 2 o 3 ejemplos anónimos destacados para utilizarlos como puente en la apertura de la siguiente sesión (*Big data en proyectos*).
