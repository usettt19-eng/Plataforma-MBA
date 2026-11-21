# Tema 1. Product management

## 1. Ficha del tema

| Campo | Detalle |
| :--- | :--- |
| **Título del tema** | Product management |
| **Bloque y posición dentro del programa** | Bloque 4: Metodologías ágiles (Tema 1 de 3) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Mandos intermedios y emprendedores |
| **Nivel de dificultad** | Intermedio |
| **Prerrequisitos** | Conocimientos previos de identificación y estructuración de problemas de negocio y cliente (Bloque 3), propuesta de valor y fundamentos de gestión empresarial |
| **Resultado general de aprendizaje** | Diseñar la estrategia operativa de un producto o servicio digital en una pyme, definiendo su visión, priorizando funcionalidades mediante criterios objetivos, estructurando un roadmap orientado a resultados y estableciendo métricas de valor en coordinación con negocio, diseño y desarrollo |

---

## 2. Objetivos de aprendizaje

Al finalizar este tema, el alumnado será capaz de:

1. **Formular** una visión de producto y una propuesta de resultado medible alineadas con los objetivos estratégicos de una pyme en proceso de transformación digital *(Nivel de Bloom: Crear)*.
2. **Analizar** evidencias de descubrimiento de producto (*product discovery*) para distinguir entre peticiones superficiales de clientes o departamentos y necesidades reales de negocio y usuario *(Nivel de Bloom: Analizar)*.
3. **Aplicar** marcos de priorización estructurados (como RICE, MoSCoW o matriz Valor/Esfuerzo) para ordenar iniciativas de un producto digital con recursos limitados *(Nivel de Bloom: Aplicar)*.
4. **Elaborar** un *roadmap* orientado a resultados (*outcome-based roadmap*) y definir el alcance de un Producto Mínimo Viable (MVP) coherente con la capacidad real de un equipo *(Nivel de Bloom: Crear)*.
5. **Seleccionar** indicadores clave de producto (*North Star Metric*, métricas de activación, retención y adopción) para evaluar si las decisiones de producto generan impacto real *(Nivel de Bloom: Evaluar)*.
6. **Coordinar** expectativas y acuerdos de trabajo entre las áreas de negocio, diseño UX/UI y desarrollo técnico reduciendo fricciones y retrabajo *(Nivel de Bloom: Aplicar)*.

---

## 3. Contenidos esenciales

### 3.1. Rol del Product Management y visión de producto

**Explicación breve y clara**  
El *Product Management* es la disciplina encargada de guiar un producto o servicio digital a lo largo de su ciclo de vida para que resuelva un problema relevante del cliente de forma viable para el negocio y factible tecnológicamente. A diferencia de la gestión tradicional de proyectos —centrada en cumplir alcance, plazo y presupuesto cerrados—, la gestión de producto se centra en maximizar el valor entregado y los resultados obtenidos (*outcomes*) frente a la mera producción de funcionalidades (*outputs*). En una pyme, este rol no siempre tiene un puesto exclusivo; a menudo recae en un mando intermedio, responsable de operaciones, dirección comercial o el propio emprendedor.

**Conceptos clave**
- Intersección entre deseabilidad (cliente), viabilidad (negocio) y factibilidad (tecnología/operación).
- Diferencia entre *output* (entregable o funcionalidad) y *outcome* (cambio medible en el comportamiento del cliente o en el negocio).
- Visión de producto y estrategia de producto.
- Riesgos principales de producto (valor, usabilidad, factibilidad y viabilidad de negocio).

**Definiciones necesarias**
- **Visión de producto**: Declaración inspiradora, clara y estable a medio-largo plazo (2-5 años) que describe el futuro que el producto pretende crear para un segmento de clientes concreto.
- **Outcome (resultado)**: Cambio observable en el comportamiento del usuario o cliente que impulsa un resultado de negocio (por ejemplo, reducir el tiempo de reposición de pedidos de 20 minutos a 3 minutos).
- **Output (entregable)**: Funcionalidad, pantalla, documento o mejora construida (por ejemplo, lanzar un botón de "repetir último pedido").

**Ejemplo práctico realista**  
Una asesoría fiscal y laboral de 18 empleados en Zaragoza decide crear un portal web para sus clientes pymes. Si lo enfoca como proyecto de *outputs*, el objetivo será "tener el portal con carga de facturas antes de junio". Si lo enfoca desde *Product Management*, la visión será "ser el panel financiero en tiempo real donde cualquier pyme cliente controla sus obligaciones fiscales sin correos ni llamadas repetitivas", y el primer *outcome* será lograr que el 60 % de los clientes suba sus facturas trimestrales de forma autónoma antes del día 10 de cada mes.

**Errores frecuentes**
- Confundir al responsable de producto con un "tomador de pedidos" (*feature factory*) que solo recopila listas de deseos de dirección o del equipo comercial.
- Redactar visiones genéricas llenas de adjetivos vacíos ("ser líderes innovadores") que no ayudan a decidir qué construir y qué descartar.
- Delegar las decisiones de valor únicamente en el proveedor tecnológico externo.

**Preguntas que el alumnado debería poder responder**
- ¿En qué se diferencia gestionar un proyecto tradicional de gestionar un producto digital?
- ¿Por qué una funcionalidad entregada a tiempo y en presupuesto puede ser un fracaso de producto?
- ¿Qué cuatro riesgos críticos debe evaluar un responsable de producto antes de comprometer horas de desarrollo?

---

### 3.2. Descubrimiento de producto (*Product Discovery*) y necesidades reales

**Explicación breve y clara**  
Antes de invertir presupuesto en construir (*Product Delivery*), el equipo debe reducir la incertidumbre mediante el *Product Discovery*: el proceso continuo de investigar clientes, datos de uso y restricciones de negocio para decidir qué merece la pena construir. En entornos de pyme, donde cada euro y cada hora técnica cuentan, descubrir rápido evita construir herramientas que nadie usa.

**Conceptos clave**
- Descubrimiento continuo (*Continuous Discovery*).
- Entrevistas de descubrimiento basadas en hechos pasados, no en opiniones futuras.
- Árbol de oportunidades (*Opportunity Solution Tree*): relacionar un resultado deseado con oportunidades (dolores/necesidades), posibles soluciones y pruebas.
- Triangulación de datos cualitativos (entrevistas, observación, soporte) y cuantitativos (analítica de uso, tasas de abandono, tickets).

**Definiciones necesarias**
- **Product Discovery**: Conjunto de actividades rápidas y de bajo coste orientadas a identificar qué problema merece resolverse y qué solución aporta mayor valor antes del desarrollo completo.
- **Oportunidad**: Necesidad no cubierta, fricción o deseo detectado en el cliente que, si se resuelve, acerca al equipo al *outcome* fijado.

**Ejemplo práctico realista**  
Una pyme distribuidora de recambios de automoción recibe la petición del equipo comercial de "añadir un chat con inteligencia artificial en la web". Al realizar ocho entrevistas breves y observar a cinco jefes de taller haciendo pedidos reales, descubren que el problema no es falta de chat, sino que los códigos de referencia del fabricante no coinciden con los del catálogo interno y buscan por matrícula o bastidor. La oportunidad real es acelerar la identificación exacta de la pieza, lo que se resuelve primero con un buscador por referencia cruzada mucho más económico y útil.

**Errores frecuentes**
- Preguntar al cliente "¿usarías esta funcionalidad si la construyéramos?" (genera sesgo de cortesía y falsos positivos).
- Saltar directamente del síntoma a la solución sin explorar causas raíz.
- Hacer descubrimiento solo una vez al año en lugar de integrarlo de forma ligera cada semana o quincena.

**Preguntas que el alumnado debería poder responder**
- ¿Cómo distinguirías entre una petición de solución y una necesidad subyacente durante una conversación con un cliente o un directivo?
- ¿Qué fuentes internas ya existentes en una pyme (soporte, ventas, devoluciones, analítica) aportan evidencias rápidas para el descubrimiento?
- ¿Cómo ayuda un Árbol de Oportunidades a justificar por qué se descarta una idea ante dirección?

---

### 3.3. Priorización, Roadmap y definición del Producto Mínimo Viable (MVP)

**Explicación breve y clara**  
Los recursos de una pyme son siempre menores que la lista de ideas posibles. Priorizar no consiste en hacer todo un poco más rápido, sino en decidir deliberadamente qué **no** se va a hacer ahora. Esa priorización se traduce en un *roadmap* claro y en la definición de un MVP que permita entregar valor temprano y aprender del mercado con riesgo controlado.

**Conceptos clave**
- Marcos de priorización: **RICE** (*Reach, Impact, Confidence, Effort*), **MoSCoW** (*Must, Should, Could, Won't*) y matriz **Valor vs. Esfuerzo**.
- *Roadmap* basado en resultados y horizontes (*Now / Next / Later*) frente al *roadmap* rígido tipo diagrama de Gantt con fechas cerradas de funcionalidades.
- Alcance vertical del MVP: entregar una experiencia completa, aunque pequeña, que resuelva un problema de principio a fin, en lugar de construir solo la "base técnica" sin valor visible.

**Definiciones necesarias**
- **RICE**: Fórmula de puntuación para priorizar iniciativas calculada como `(Alcance × Impacto × Confianza) / Esfuerzo`.
- **Roadmap de producto**: Herramienta estratégica de comunicación visual que muestra la dirección del producto, los problemas u objetivos prioritarios a abordar y su secuencia lógica en el tiempo.
- **Producto Mínimo Viable (MVP)**: Primera versión funcional de un producto o iniciativa con el esfuerzo mínimo necesario para entregar valor real a un segmento inicial y validar aprendizajes clave. *(En el Tema 2 se profundizará en su vertiente experimental dentro de Lean Startup)*.

**Ejemplo práctico realista**  
Una academia de idiomas con tres centros en Málaga quiere digitalizar la gestión de alumnos y clases particulares. Con 14 ideas sobre la mesa, aplica RICE y el enfoque *Now / Next / Later*:
- **Now (próximos 2 meses)**: Portal simple de reserva y cambio de clases particulares (alto alcance, impacto directo en reducir llamadas administrativas y baja complejidad).
- **Next (trimestre siguiente)**: Panel de seguimiento de asistencia y progreso para familias.
- **Later (futuro)**: App móvil nativa gamificada de vocabulario (alto esfuerzo e impacto aún sin validar).

**Errores frecuentes**
- Priorizar por el criterio HiPPO (*Highest Paid Person's Opinion*, la opinión de quien más cobra) o por el cliente que más ruido hace.
- Presentar un *roadmap* como contrato inamovible de fechas y pantallas a 18 meses vista.
- Confundir MVP con un producto roto, feo o inservible que daña la reputación de la empresa.

**Preguntas que el alumnado debería poder responder**
- ¿En qué situaciones conviene usar RICE frente a MoSCoW?
- ¿Por qué el formato *Now / Next / Later* reduce los conflictos con dirección y clientes respecto a un cronograma cerrado?
- ¿Qué criterios garantizan que un MVP sea realmente "viable" y no simplemente "mínimo"?

---

### 3.4. Métricas de producto y colaboración transversal (Negocio, Diseño y Desarrollo)

**Explicación breve y clara**  
Sin métricas claras, las decisiones de producto se basan en opiniones. Medir correctamente permite saber si los clientes encuentran valor, vuelven a usar el producto y generan rentabilidad. Al mismo tiempo, ningún responsable de producto trabaja aislado: su eficacia depende de cómo alinea a negocio (ventas, dirección, operaciones), diseño (experiencia de usuario) y desarrollo (equipo interno o proveedor tecnológico).

**Conceptos clave**
- Métricas de vanidad frente a métricas accionables.
- *North Star Metric* (métrica estrella polar) y métricas de soporte (embudo AARRR: Adquisición, Activación, Retención, Referencia, Ingresos).
- Métricas de protección o *guardrail metrics* (calidad, tickets de soporte, margen, rendimiento).
- Trío de producto (*Product Trio*: Producto + Diseño + Tecnología) y rituales de alineación con áreas de negocio.

**Definiciones necesarias**
- **North Star Metric**: Indicador único principal que captura el valor esencial que el producto entrega de forma recurrente a los clientes y que predice el crecimiento sostenible del negocio.
- **Métrica de vanidad**: Dato que suena bien en presentaciones (por ejemplo, descargas totales o usuarios registrados acumulados) pero que no indica si el producto aporta valor ni ayuda a tomar decisiones.
- **Trío de producto**: Unidad colaborativa formada por responsables de producto, diseño y tecnología que participan conjuntamente desde el descubrimiento hasta la entrega.

**Ejemplo práctico realista**  
Una empresa de software de gestión de reservas para casas rurales presumía de tener 1.200 alojamientos registrados (métrica de vanidad), pero la cancelación mensual era alta. Al redefinir su *North Star Metric* como "número de reservas confirmadas y cobradas semanalmente a través del motor sin intervención manual", producto, diseño y desarrollo descubrieron juntos que la configuración de tarifas de temporada bloqueaba al 55 % de los propietarios en la primera semana. Diseño simplificó el asistente, desarrollo automatizó plantillas por calendario y soporte creó vídeos de 90 segundos, elevando la activación de nuevos clientes.

**Errores frecuentes**
- Medir decenas de KPIs sin que ninguno dispare decisiones concretas.
- Trabajar en "cascada por silos": negocio define requisitos en un Word, se lo pasa a diseño, diseño pasa pantallas cerradas a desarrollo y nadie cuestiona si resuelve el problema.
- Omitir métricas de salvaguarda (*guardrails*), optimizando la conversión a costa de disparar devoluciones o incidencias en atención al cliente.

**Preguntas que el alumnado debería poder responder**
- ¿Cómo transformarías una métrica de vanidad típica de tu empresa en una métrica accionable de producto?
- ¿Por qué debe participar el perfil técnico o proveedor de desarrollo desde la fase de descubrimiento y no solo al final?
- ¿Qué acuerdos mínimos de comunicación deben existir entre producto, ventas y operaciones en una pyme?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** combina microexposiciones claras con trabajo aplicado sobre situaciones reales de pymes.

| Fase | Tiempo exacto | Qué hace el formador | Qué hace el alumnado |
| :--- | :---: | :--- | :--- |
| **1. Apertura y activación** | 25 min | Da la bienvenida, conecta con el cierre del Bloque 3 (definición de problemas), lanza encuesta diagnóstica rápida (3 preguntas) y facilita la Actividad 1 (*Autopsia de funcionalidades inútiles*). | Responde la diagnóstica breve, comparte en parejas una iniciativa digital o funcionalidad de su entorno que fracasó o nadie usó y sintetiza la causa principal. |
| **2. Microlearning 1: Visión, Discovery y Outcomes** | 30 min | Expone con apoyo visual los apartados 3.1 y 3.2: diferencia *output* vs. *outcome*, riesgos de producto y cómo estructurar un Árbol de Oportunidades. Formula preguntas de contraste al grupo. | Toma notas sobre la Ficha de trabajo, contrasta ejemplos de su empresa y clasifica en voz alta enunciados como *output* u *outcome*. |
| **3. Microlearning 2: Priorización, Roadmap y Métricas** | 30 min | Explica los apartados 3.3 y 3.4: cálculo práctico de RICE, estructura *Now / Next / Later*, lógica de MVP, *North Star Metric* y colaboración en el Trío de Producto. | Resuelve un microcálculo guiado de RICE en 5 minutos y plantea dudas sobre su aplicación con proveedores externos o dirección. |
| **4. Pausa activa** | 15 min | Gestiona el descanso y prepara los materiales y grupos para el análisis de caso. | Descansa e intercambia impresiones informales. |
| **5. Análisis de caso práctico (en equipos)** | 55 min | Presenta el caso *FerroNorte Suministros S.L.*, reparte roles (Producto, Comercial/Negocio, Diseño/UX, Tecnología), circula por los grupos formulando preguntas retadoras y evitando soluciones prematuras. | Analiza los datos del caso en equipos de 4-5 personas, diagnostica el problema de producto, prioriza iniciativas con RICE, define el *roadmap Now/Next/Later* y propone la *North Star Metric*. |
| **6. Actividad de transferencia individual / parejas** | 35 min | Explica la Actividad 3 (*Mini-Canvas de Estrategia de Producto* aplicado a su propia pyme o proyecto) y ofrece mentoría breve individualizada. | Redacta la visión de producto, 1 *outcome* prioritario, 3 iniciativas priorizadas y 2 métricas accionables para un producto o servicio digital real de su organización. |
| **7. Discusión guiada y puesta en común** | 30 min | Modera exposiciones relámpago de 2-3 equipos sobre el caso y 2 voluntarios sobre su aplicación real; sintetiza patrones comunes de fricción entre negocio, diseño y desarrollo. | Presenta decisiones justificadas con datos, ofrece retroalimentación estructurada a otros equipos y debate objeciones realistas de dirección o ventas. |
| **8. Síntesis, evaluación final y cierre** | 20 min | Recapitula los 5 aprendizajes clave, conduce la evaluación sumativa breve y la autoevaluación, y presenta el enlace directo con el Tema 2 (*Lean Startup*). | Completa el cuestionario/entregable de cierre y define un compromiso de aplicación inmediata para los próximos 7 días. |
| **TOTAL** | **240 min** | — | — |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Autopsia de funcionalidades fantasma

- **Nombre**: Autopsia de funcionalidades fantasma (*Feature Graveyard*).
- **Objetivo**: Identificar las causas habituales por las que productos o funcionalidades digitales en pymes fracasan por falta de descubrimiento y enfoque a resultados.
- **Instrucciones para el alumnado**:
  1. De forma individual (4 min), recuerda una funcionalidad, herramienta digital, app o portal que tu empresa (o una conocida) lanzó y que casi nadie terminó utilizando.
  2. Anota en una tarjeta o nota digital: qué se construyó, quién lo pidió, cuánto costó aproximadamente (en tiempo o dinero) y por qué crees que falló.
  3. En parejas (6 min), comparad vuestros casos y clasificad la causa raíz principal según los cuatro riesgos de producto: **Valor** (no resolvía un problema real), **Usabilidad** (era difícil de usar), **Factibilidad** (falló técnica u operativamente) o **Viabilidad** (no encajaba en el negocio).
  4. Compartid un titular de 20 segundos en plenario (5 min).
- **Materiales necesarios**: Notas adhesivas o tablero colaborativo (Miro/Mural/Padlet) con los cuatro cuadrantes de riesgo.
- **Tiempo estimado**: 15 minutos (dentro de la Fase 1).
- **Rol del formador**: Crear un clima de confianza sin culpabilizar errores pasados; agrupar las tarjetas en los cuatro riesgos y conectar directamente con la necesidad del *Product Discovery*.
- **Producto o entregable esperado**: Mapa grupal clasificado de fallos de producto por tipo de riesgo.
- **Criterios de éxito**: Al menos el 80 % de los casos queda correctamente vinculado a uno de los cuatro riesgos de producto y se distingue el síntoma de la causa raíz.

---

### Actividad 2 (Aplicación): Comité de Product Management — Caso FerroNorte

- **Nombre**: Comité de priorización y *roadmap* de FerroNorte Suministros S.L.
- **Objetivo**: Aplicar la metodología RICE, el diseño de *roadmap Now / Next / Later* y la selección de métricas de producto en un entorno realista con intereses departamentales contrapuestos.
- **Instrucciones para el alumnado**:
  1. Formad equipos de 4 personas y asignad un rol a cada miembro: **Product Manager**, **Dirección Comercial**, **Diseño UX/Cliente** y **Desarrollo/IT**.
  2. Leed el Caso Práctico de la Sección 6 (10 min).
  3. Evaluad las 6 iniciativas propuestas aplicando la matriz **RICE** en la plantilla suministrada, justificando cada puntuación con los datos del caso (20 min).
  4. Diseñad un *roadmap* en tres horizontes (*Now / Next / Later*), definid el alcance concreto del MVP de la fase *Now* y seleccionad 1 *North Star Metric* + 2 métricas de salvaguarda (*guardrails*) (20 min).
  5. Preparad una defensa ejecutiva de 3 minutos orientada al comité de dirección (5 min).
- **Materiales necesarios**: Caso práctico impreso o en PDF, plantilla de matriz RICE (hoja de cálculo o ficha impresa), plantilla de *roadmap* *Now / Next / Later*.
- **Tiempo estimado**: 55 minutos (Fase 5).
- **Rol del formador**: Asegurar que cada rol defienda sus restricciones reales (comercial quiere ventas rápidas, IT vigila capacidad y deuda técnica, UX vela por fricción de uso, PM equilibra evidencia y valor), evitando consensos artificiales.
- **Producto o entregable esperado**: Tabla RICE completada, *roadmap* estructurado, definición de MVP y cuadro breve de 3 métricas.
- **Criterios de éxito**: Las puntuaciones RICE son coherentes con los datos del caso, el bloque *Now* respeta el presupuesto/capacidad disponible, se descartan explícitamente al menos 2 peticiones de bajo retorno y la *North Star Metric* mide valor recurrente real.

---

### Actividad 3 (Transferencia a la realidad laboral): Mini-Canvas de Estrategia de Producto propio

- **Nombre**: Plan de producto en una página para tu empresa o proyecto.
- **Objetivo**: Transferir los conceptos de visión, *outcome*, priorización y métricas a un producto, servicio digital o herramienta interna real del alumnado.
- **Instrucciones para el alumnado**:
  1. Elige un producto digital, servicio online o iniciativa de digitalización real de tu empresa o proyecto emprendedor (2 min).
  2. Completa de forma individual la Ficha de Transferencia (23 min):
     - Declaración de **Visión de producto** (máx. 2 frases).
     - **Usuario/cliente principal** y problema prioritario respaldado por una evidencia actual (o indica qué evidencia debes recoger esta semana).
     - **1 Outcome trimestral medible** (evitando formularlo como entrega de funcionalidad).
     - **4 iniciativas candidatas** ordenadas mediante matriz Valor/Esfuerzo o RICE simplificado, indicando claramente cuál se queda fuera (*Won't*).
     - **1 North Star Metric** y **1 métrica de salvaguarda**.
     - **1 acuerdo concreto** de colaboración que propondrás a diseño, desarrollo/proveedor o dirección comercial.
  3. Intercambia tu hoja con un compañero/a para recibir 5 minutos de crítica constructiva cada uno (10 min).
- **Materiales necesarios**: Plantilla "Product Strategy One-Pager" (Sección 8).
- **Tiempo estimado**: 35 minutos (Fase 6).
- **Rol del formador**: Acompañar a quienes trabajen en empresas de servicios no tecnológicas para ayudarles a identificar su "producto" (portal de cliente, proceso de reserva, servicio empaquetado digitalmente o herramienta interna).
- **Producto o entregable esperado**: Documento "Product Strategy One-Pager" completado y revisado por pares.
- **Criterios de éxito**: El documento diferencia claramente *output* de *outcome*, descarta al menos una iniciativa con justificación y propone métricas verificables en su empresa real.

---

## 6. Caso práctico

### Contexto empresarial
**FerroNorte Suministros S.L.** es una distribuidora B2B de ferretería industrial, tornillería, epis y herramientas profesionales ubicada en Álava, con **42 empleados** y una facturación anual de **7,8 millones de euros**. Atiende a **620 clientes activos** (talleres mecánicos, instaladores eléctricos, fontaneros y pequeñas constructoras). Hace 11 meses lanzó un **portal B2B de pedidos online** desarrollado por una agencia externa, con el objetivo de reducir carga administrativa y aumentar la recurrencia de pedidos pequeños.

### Situación o problema
Tras casi un año en producción, solo el **18 % de los clientes activos** realiza pedidos online de forma habitual (al menos 2 veces al mes). El resto sigue enviando pedidos por WhatsApp, correo electrónico o llamadas telefónicas a los comerciales de oficina, que dedican más de 25 horas semanales a picar albaranes manualmente.

En la reunión trimestral, cada área exige soluciones distintas y la dirección solo dispone de un presupuesto cerrado de **24.000 €** y **20 semanas-persona** equivalentes de desarrollo con la agencia externa para los próximos **4 meses** (equivalente a una capacidad máxima aproximada de **16 puntos de esfuerzo** en la escala interna del caso). No hay nadie ejerciendo formalmente de Product Manager, y el gerente te ha pedido a ti y a tu comité que toméis el control del producto.

### Datos disponibles

**1. Analítica del portal B2B y operación actual (últimos 6 meses)**

| Indicador | Dato actual | Observación |
| :--- | :---: | :--- |
| Clientes activos totales | 620 | 410 compran al menos 2 veces/mes por algún canal |
| Clientes con cuenta creada en el portal | 390 | 63 % registrados tras campaña inicial de comerciales |
| Clientes que completan su 1.er pedido online | 175 | 45 % de los registrados; el resto abandona en el carrito |
| Clientes recurrentes online (≥2 pedidos/mes) | 112 | Solo el 18 % del total de clientes activos |
| Motivo principal de abandono en carrito (encuesta a 45 clientes) | 64 % | No muestra su tarifa personalizada ni stock real del almacén |
| Motivo secundario de abandono (encuesta) | 27 % | Buscar 15-20 referencias frecuentes cada semana lleva más tiempo que enviar una foto por WhatsApp |
| Tickets mensuales de incidencias del portal | 58 | El 70 % son errores de precios respecto al presupuesto acordado o roturas de stock no avisadas |
| Tiempo medio de pedido por WhatsApp/teléfono (cliente) | 4 min | Aunque luego cuesta 12 min internos de tramitación manual |
| Tiempo medio de pedido en portal actual (cliente) | 16 min | Exige buscar referencia una a una y no permite repetir pedidos |

**2. Peticiones acumuladas en la bandeja de entrada (Iniciativas candidatas)**

| ID | Iniciativa propuesta | Quién la pide | Esfuerzo estimado (1-10) | Notas técnicas y de negocio |
| :---: | :--- | :--- | :---: | :--- |
| **I1** | Sincronizar tarifas personalizadas de cliente y stock en tiempo real desde el ERP al portal | Operaciones / Clientes | 6 | Requiere conector con ERP; elimina el 70 % de incidencias y el principal motivo de abandono |
| **I2** | Funcionalidad "Repetir último pedido" y listas de compra habituales por cliente | Soporte / UX | 3 | Baja complejidad; reduce tiempo de pedido recurrente de 16 min a ~2 min |
| **I3** | Desarrollar app móvil nativa iOS y Android con catálogo completo en 3D | Dirección General | 9 | Alto coste; sin evidencia de que los instaladores prefieran app nativa frente a web móvil |
| **I4** | Rediseñar la portada del portal con banner promocional y blog corporativo | Marketing | 2 | Fácil de hacer; impacto bajo en clientes recurrentes B2B |
| **I5** | Botón de "Pedido rápido por carga de Excel o lista de códigos" para grandes cuentas | Dirección Comercial (2 clientes grandes) | 4 | Muy útil para 35 cuentas grandes (que representan el 28 % de la facturación), poco relevante para pequeños instaladores |
| **I6** | Programa de puntos y gamificación para instaladores | Comercial | 5 | Confianza baja en impacto real: los compradores en talleres a menudo no son quienes deciden el premio |

### Preguntas de análisis
1. ¿Cuál es el verdadero problema de producto de FerroNorte: falta de captación de usuarios, fallo de activación/retención o falta de canales nuevos? Justifícalo con los datos.
2. ¿Qué métricas actuales están ocultando la realidad (vanidad) y cuál debería ser la *North Star Metric* del portal B2B?
3. Si aplicas RICE a las 6 iniciativas, ¿cuáles obtienen mayor retorno por esfuerzo y qué nivel de confianza asignas a cada una?
4. ¿Cómo gestionarías diplomáticamente la petición de la Dirección General (I3) y la presión de Dirección Comercial (I5 e I6) utilizando evidencias?

### Tarea a realizar
En equipo, elaborad una propuesta ejecutiva de Product Management que incluya:
1. **Visión de producto** del portal B2B de FerroNorte (máx. 2 frases) y **objetivo trimestral (*outcome*)** medible.
2. **Matriz RICE** completada para las 6 iniciativas (I1–I6), respetando el límite de **16 puntos de esfuerzo** para los próximos 4 meses.
3. **Roadmap Now / Next / Later**, detallando el **MVP de relanzamiento** de la fase *Now*.
4. **Cuadro de métricas**: 1 *North Star Metric*, 2 métricas de embudo (activación/retención) y 1 métrica de salvaguarda (*guardrail*).
5. **Plan de colaboración**: 3 acciones concretas para alinear a Comercial, Diseño UX, Operaciones/ERP y la agencia de desarrollo.

### Posibles soluciones o criterios de análisis (guía para el formador)
- **Diagnóstico correcto**: No existe un problema de registro (63 % ya tiene cuenta), sino un grave problema de **activación y retención** provocado por fricción de valor (tarifas incorrectas y stock no fiable) y usabilidad (lentitud al repetir pedidos).
- **Priorización sólida esperada**:
  - **Now (capacidad total ≤ 16 puntos; idealmente dejar un colchón de 2-3 puntos para imprevistos e iteraciones)**:
    - **I1** (Esfuerzo 6): imprescindible porque resuelve el 64 % de abandonos y el 70 % de incidencias.
    - **I2** (Esfuerzo 3): *quick win* de altísimo impacto en recurrencia y reducción del tiempo de pedido de 16 a 2 min.
    - **I5** (Esfuerzo 4): opcional al final de *Now* o al inicio de *Next*, defendible por el peso del 28 % en facturación de las 35 cuentas grandes (total I1+I2+I5 = 13 puntos, dejando 3 puntos de margen para pruebas UX y ajustes).
  - **Next**: I5 (si no entró en *Now*) + descubrimiento ligero sobre uso móvil real en obra (probar web *responsive* antes de valorar app).
  - **Later / Descartado por ahora**: **I3** (app nativa 3D: esfuerzo 9, baja confianza, destruye todo el presupuesto sin resolver tarifas ni stock), **I4** (blog/banners: bajo impacto en el problema real) e **I6** (gamificación sin validar).
- **North Star Metric sólida**: *Número de pedidos B2B recurrentes completados online sin intervención manual a la semana* (o *Porcentaje de pedidos recurrentes de clientes activos tramitados de forma autónoma por el portal*).
- **Métrica de salvaguarda (*guardrail*)**: *Tasa de incidencias por discrepancia de precio/stock por cada 100 pedidos* o *NPS/CSAT de clientes B2B*.

### Preguntas de reflexión final
- ¿Qué habría ocurrido en FerroNorte si se hubiera ejecutado primero la petición de la Dirección General (I3)?
- En tu propia empresa, ¿qué iniciativa equivalente a "I3" está consumiendo energía o presupuesto mientras un problema equivalente a "I1" sigue sin resolverse?
- ¿Qué autoridad y datos necesita un mando intermedio para decir "ahora no" de forma constructiva?

---

## 7. Evaluación

### Evaluación diagnóstica breve (inicio de sesión, 5 min)
Cuestionario anónimo rápido (3 preguntas en Mentimeter/Forms o a mano alzada):
1. En tu organización actual, ¿cómo se decide principalmente qué mejoras o proyectos digitales se construyen primero? *(a) Quien más insiste o dirección, (b) Demanda puntual de un cliente importante, (c) Análisis de impacto y esfuerzo con datos, (d) No hay criterio definido.*
2. ¿Cuál de estos enunciados es un *outcome* y no un *output*? *(a) Lanzar una app móvil en Q3, (b) Reducir en un 30 % las llamadas de seguimiento de pedidos, (c) Integrar la pasarela de pago Stripe.*
3. En una escala de 1 a 5, ¿con qué frecuencia habláis con clientes reales antes de encargar un desarrollo digital?

### Evaluación formativa durante la sesión
- Observación directa del formador durante el microcálculo de RICE y el caso FerroNorte mediante lista de cotejo rápida:
  - ¿El equipo usa datos del caso para puntuar Confianza e Impacto en RICE?
  - ¿Respeta la restricción de capacidad real en la fase *Now*?
  - ¿Diferencia métricas de vanidad de métricas accionables?
- Revisión entre pares (*peer feedback*) en la Actividad 3 utilizando dos preguntas guiadas: *"¿Qué parte de tu estrategia está más respaldada por evidencias?"* y *"¿Qué supuesto clave sigue sin validarse?"*.

### Evaluación sumativa al final (10 min)
Entrega individual del **"Product Strategy One-Pager"** (Actividad 3) más resolución de 4 preguntas de aplicación rápida (escenario corto: identificar 1 error de priorización, reescribir 1 *output* como *outcome*, detectar 1 métrica de vanidad y elegir 1 acción de *discovery*).

### Rúbrica de evaluación (para el entregable "Product Strategy One-Pager" y participación en el caso)

| Criterio | Insuficiente (1) | En desarrollo (2) | Adecuado (3) | Destacado (4) |
| :--- | :--- | :--- | :--- | :--- |
| **Visión y orientación a *outcomes*** (25 %) | Formula solo listas de tareas o funcionalidades (*outputs*) sin visión clara. | Redacta una visión comprensible, pero mezcla *outputs* con objetivos vagos no medibles. | Formula una visión clara y al menos un *outcome* medible ligado al valor para el cliente. | Articula una visión nítida y *outcomes* precisos que conectan directamente valor al cliente con impacto económico en la pyme. |
| **Uso de evidencias y *discovery*** (20 %) | Se basa únicamente en suposiciones internas sin mencionar al cliente ni datos. | Menciona al cliente de forma genérica pero no vincula decisiones a evidencias concretas. | Respalda las decisiones prioritarias en datos reales o define qué evidencia recoger antes de construir. | Triangula datos cualitativos y cuantitativos, identifica los riesgos clave y propone pruebas concretas de descubrimiento. |
| **Priorización y *roadmap*** (25 %) | Incluye todas las peticiones sin descartar nada ni respetar restricciones de capacidad. | Aplica un criterio de priorización parcialmente, pero el *roadmap* sigue pareciendo una lista de deseos o cronograma rígido. | Aplica RICE/MoSCoW coherentemente, respeta capacidad y estructura *Now/Next/Later* descartando opciones de bajo retorno. | Optimiza el retorno bajo restricciones reales, deja margen operativo, justifica los descartes ante *stakeholders* y define un MVP viable de extremo a extremo. |
| **Métricas de producto** (15 %) | No define métricas o utiliza únicamente métricas de vanidad. | Propone métricas parcialmente útiles pero desconectadas del *outcome* principal. | Define una *North Star Metric* accionable y al menos una métrica de salvaguarda coherente. | Diseña un sistema equilibrado (*North Star*, métricas de embudo y *guardrails*) con umbrales claros para la toma de decisiones. |
| **Colaboración transversal** (15 %) | Trata el producto como tarea aislada de un único departamento o del proveedor técnico. | Menciona la necesidad de coordinarse, pero sin acciones o acuerdos concretos. | Propone acuerdos realistas entre negocio, diseño y desarrollo adaptados al tamaño de una pyme. | Diseña una cadencia concreta de colaboración (Trío de producto y alineación con dirección/ventas) que previene retrabajos y conflictos. |

### Actividad de autoevaluación y reflexión
Al cerrar la sesión, cada participante responde por escrito en 5 minutos:
1. **Semáforo personal** (Rojo / Ámbar / Verde): ¿Qué grado de madurez tiene hoy la toma de decisiones de producto en mi empresa?
2. **Un hábito a dejar de hacer**: ¿Qué práctica de "fábrica de funcionalidades" voy a frenar esta semana?
3. **Un paso concreto en 7 días**: ¿Con qué 3 clientes o usuarios internos voy a hablar, o qué iniciativa voy a someter a RICE antes de aprobarla?

---

## 8. Materiales y recursos

### Guion de diapositivas (slide por slide)

| Slide | Título | Contenido clave y propósito |
| :---: | :--- | :--- |
| **1** | Portada: Product Management en la pyme digital | Título del tema, objetivos de la sesión y agenda de 4 horas. |
| **2** | Puente desde Bloque 3: Del problema al producto | Cómo pasar de problemas bien diagnosticados a decisiones de producto rentables. |
| **3** | Actividad de activación: Funcionalidades fantasma | Instrucciones visuales y matriz de los 4 riesgos de producto (Valor, Usabilidad, Factibilidad, Viabilidad). |
| **4** | Proyecto vs. Producto (*Outputs* vs. *Outcomes*) | Tabla comparativa y 3 ejemplos rápidos de pymes transformando entregas en resultados. |
| **5** | Qué hace (y qué no hace) el Product Management | Intersección Cliente–Negocio–Tecnología; desmitificar el rol de "recoge-pedidos". |
| **6** | Visión de producto que guía decisiones | Estructura simple de visión de producto + ejemplo bueno vs. ejemplo vacío. |
| **7** | Product Discovery: reducir incertidumbre antes de picar código | Ciclo Discovery vs. Delivery y Árbol de Oportunidades (*Opportunity Solution Tree*). |
| **8** | Cómo entrevistar sin engañarse | 4 reglas prácticas (preguntar por hechos pasados, observar, evitar promesas futuras) + datos internos de la pyme. |
| **9** | Priorizar es renunciar: RICE, MoSCoW y Valor/Esfuerzo | Fórmula RICE paso a paso con escala sencilla (1-10) y cuándo usar cada método. |
| **10** | Roadmap *Now / Next / Later* y lógica de MVP | Comparativa Gantt rígido vs. *Roadmap* por horizontes; ilustración de corte vertical del MVP. |
| **11** | Métricas que importan: *North Star*, AARRR y *Guardrails* | Ejemplos de métricas de vanidad convertidas en métricas accionables. |
| **12** | Colaboración sin silos: el Trío de Producto en la pyme | Roles complementarios de Negocio, Diseño y Desarrollo (incluido trabajo con agencias externas). |
| **13** | Presentación del Caso Práctico: FerroNorte Suministros S.L. | Resumen visual del contexto, embudo de adopción actual y reto de capacidad (16 puntos). |
| **14** | Taller de transferencia: Product Strategy One-Pager | Instrucciones paso a paso para aplicar los contenidos a la empresa del alumnado. |
| **15** | Síntesis y puente al Tema 2 (Lean Startup) | 5 ideas fuerza del tema + anticipo: cómo validar hipótesis con experimentos antes de escalar. |

### Ficha de trabajo (para el alumnado durante la sesión)
- **Bloque A (Microlearning)**: Tabla de conversión de 3 *outputs* de tu empresa a *outcomes* medibles.
- **Bloque B (Práctica rápida RICE)**: Mini-ejercicio de cálculo con 3 iniciativas ejemplo para calibrar la fórmula antes del caso.
- **Bloque C (Notas del Caso FerroNorte)**: Espacio estructurado para diagnóstico, puntuación RICE, *roadmap* y defensa ejecutiva.
- **Bloque D (Autoevaluación)**: Semáforo de madurez y compromiso a 7 días.

### Plantilla práctica replicable: *Product Strategy One-Pager* + Matriz RICE

```markdown
## PRODUCT STRATEGY ONE-PAGER
- **Producto / Servicio digital**: [Nombre]
- **Visión de producto**: Para [cliente objetivo] que necesita [problema/necesidad], nuestro producto ofrece [propuesta clave] logrando [impacto futuro].
- **Outcome prioritario (próximos 90 días)**: Pasar de [línea base actual] a [meta cuantificable] en [fecha].
- **Evidencia actual de Discovery**: [Dato cuantitativo o hallazgo de entrevistas/soporte] | **Hueco a investigar**: [Qué falta validar]

### PRIORIZACIÓN RICE
| Iniciativa | Reach (Alcance) | Impact (0,25 a 3) | Confidence (%) | Effort (1-10) | Score RICE = (R×I×C)/E | Horizonte (Now/Next/Later/Out) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| 1. | | | | | | |
| 2. | | | | | | |
| 3. | | | | | | |
| 4. | | | | | | |

### DEFINICIÓN DEL MVP (FASE NOW)
- **Qué entra**: [Mínimo funcional de extremo a extremo]
- **Qué queda fuera explícitamente**: [Alcance descartado ahora]

### MÉTRICAS Y COLABORACIÓN
- **North Star Metric**: [Indicador principal de valor recurrente]
- **Métrica de salvaguarda (Guardrail)**: [Calidad / soporte / margen]
- **Acuerdo de colaboración Negocio–Diseño–Desarrollo**: [Cadencia y responsable]
```

### Lecturas y recursos recomendados
- **Marty Cagan**, *Inspired: How to Create Tech Products Customers Love* (obra de referencia sobre descubrimiento, equipos empoderados y riesgos de producto).
- **Teresa Torres**, *Continuous Discovery Habits* (guía práctica sobre entrevistas semanales y Árbol de Oportunidades).
- **Melissa Perri**, *Escaping the Build Trap* (enfoque estratégico para pasar de fábrica de funcionalidades a organización orientada a resultados).
- **Román Pichler**, *Strategize: Product Strategy and Product Roadmap Practices for the Digital Age* (práctico para *roadmaps* orientados a objetivos).

### Vídeos, artículos y fuentes adicionales
*(Nota importante para el formador: todos los enlaces, vídeos y artículos externos deben validarse en disponibilidad, vigencia y adecuación al nivel del grupo antes de impartir la sesión).*
- Artículos del blog de **Silicon Valley Product Group (SVPG)** sobre *Product Discovery* y *Product vs. Feature Teams* *(validar URLs vigentes antes de compartir)*.
- Artículos de **Product Talk** (Teresa Torres) con plantillas de *Opportunity Solution Tree* *(validar disponibilidad antes de usar)*.
- Artículos de **Intercom** sobre el origen y aplicación práctica del modelo **RICE** *(validar versión y enlace antes de distribuir)*.
- Charlas breves (10-15 min) de conferencias como *Mind the Product* sobre *Outcome-based Roadmaps* *(revisar subtítulos en español y vigencia antes de proyectar)*.

### Glosario de términos clave

| Término | Definición operativa |
| :--- | :--- |
| **Backlog de producto** | Lista viva y priorizada de problemas, oportunidades o iniciativas candidatas a desarrollarse en un producto. |
| **Guardrail metric** | Métrica de protección que alerta si una mejora en un indicador principal está dañando la calidad, experiencia o rentabilidad. |
| **HiPPO** | Siglas de *Highest Paid Person's Opinion*; sesgo organizativo por el que se priorizan ideas según jerarquía y no según evidencia. |
| **MVP (Producto Mínimo Viable)** | Versión inicial más sencilla de una solución capaz de entregar valor real a un segmento y generar aprendizaje validado. |
| **North Star Metric** | Métrica principal que refleja el valor central recurrente que los clientes obtienen del producto y guía al equipo. |
| **Outcome** | Cambio observable y medible en el comportamiento del cliente o resultado de negocio generado por el producto. |
| **Output** | Entregable construido (funcionalidad, pantalla, integración o documento), independientemente de si genera impacto real. |
| **Product Discovery** | Proceso continuo de investigación y experimentación ligera para decidir qué merece la pena construir antes de desarrollarlo. |
| **RICE** | Marco cuantitativo de priorización que pondera Alcance (*Reach*), Impacto (*Impact*), Confianza (*Confidence*) y Esfuerzo (*Effort*). |
| **Roadmap de producto** | Plan estratégico y comunicativo que alinea a la organización sobre qué problemas y objetivos del producto se abordarán y en qué secuencia. |

---

## 9. Adaptaciones para modalidad híbrida

### Sesión presencial
- **Dinámicas físicas**: Utilizar la pared o pizarra grande para la Actividad 1 (*Feature Graveyard*) con notas adhesivas de cuatro colores según el tipo de riesgo.
- **Trabajo en caso**: Repartir tarjetas físicas de rol (PM, Comercial, UX, Tecnología) y plantillas impresas en formato A3 para la matriz RICE y el *roadmap*, favoreciendo la negociación cara a cara.
- **Puesta en común**: Colgar los *roadmaps* en las paredes para una "galería rápida" de 5 minutos donde los equipos comparan decisiones antes del debate guiado.

### Sesión online síncrona (videoconferencia)
- **Herramientas**: Utilizar un tablero colaborativo compartido (Miro, Mural o FigJam) con marcos preconfigurados por equipo y una hoja de cálculo en la nube (Google Sheets/Excel Online) con la fórmula RICE ya automatizada para evitar pérdida de tiempo en cálculos.
- **Gestión del ritmo**: Reducir las microexposiciones a bloques de máximo 12-15 minutos intercalando encuestas rápidas en el chat o Mentimeter cada 10 minutos para mantener la atención.
- **Salas de grupos (*breakout rooms*)**: Configurar salas de 4 personas para el caso FerroNorte con avisos de tiempo claros (minutos 15, 35 y 50) y visita rotativa del formador por cada sala cada 10 minutos. Para la Actividad 3, formar parejas en salas durante los últimos 10 minutos para el *peer feedback*.

### Sesión asíncrona (campus virtual / trabajo autónomo)
- **Píldoras pregrabadas**: Dividir los contenidos esenciales en 4 vídeos breves de 8-10 minutos (uno por subapartado 3.1 a 3.4) acompañados de una autoevaluación interactiva de 6 preguntas con retroalimentación automática.
- **Foro de activación**: Cada alumno publica su caso breve de "funcionalidad fantasma" (Actividad 1) y comenta obligatoriamente la publicación de dos compañeros identificando el riesgo predominante.
- **Caso FerroNorte y transferencia**: Facilitar la hoja de cálculo RICE preconfigurada para entrega individual o en grupos asíncronos (plazo de 4 días), seguida de un vídeo de devolución del formador analizando soluciones típicas y errores comunes. La entrega del *Product Strategy One-Pager* se realiza en el LMS con revisión entre pares asignada mediante la rúbrica de la Sección 7.

---

## 10. Conexión con el programa

- **Qué conocimientos previos refuerza**: Consolida el diagnóstico y formulación de problemas reales trabajados en el **Bloque 3** (especialmente en el Tema 7, *Ejemplos de problemas*), demostrando cómo un problema bien delimitado se convierte en la materia prima del *Product Discovery* y evita construir soluciones desconectadas del cliente. También rescata nociones de propuesta de valor y viabilidad económica de bloques anteriores.
- **Qué competencias desarrolla**: Pensamiento estratégico orientado a producto, priorización basada en evidencias bajo restricciones presupuestarias, alfabetización en métricas digitales, negociación con *stakeholders* y liderazgo transversal sin autoridad jerárquica directa.
- **Conexión con el tema anterior y posterior**:
  - *Tema anterior (Bloque 3, Tema 7: Ejemplos de problemas)*: En el Bloque 3 el alumnado aprendió a identificar, diseccionar y formular problemas empresariales relevantes; este Tema 1 del Bloque 4 da el siguiente paso lógico: decidir cómo transformar esos problemas en una visión de producto, una hoja de ruta priorizada y resultados medibles.
  - *Tema posterior (Bloque 4, Tema 2: Lean Startup)*: Aquí hemos introducido el concepto de *Discovery* y el alcance del MVP dentro de la estrategia de producto. En el Tema 2, el alumnado profundizará en cómo someter las hipótesis más arriesgadas de ese MVP al ciclo **Construir–Medir–Aprender**, diseñar experimentos rápidos y decidir con datos si perseverar o pivotar.
- **Evidencia de aprendizaje que dejará el alumnado**: Un documento individual **"Product Strategy One-Pager"** aplicado a su propia empresa o proyecto (con visión, *outcome*, matriz RICE, alcance de MVP, métricas y acuerdo de colaboración), además de la resolución en equipo de la matriz RICE y *roadmap* del caso *FerroNorte Suministros S.L.*.

---

## Siguientes pasos para el formador

1. **Verificar recursos externos**: Revisar y comprobar todos los enlaces, artículos o vídeos adicionales de la Sección 8 al menos 48 horas antes de la sesión, asegurando que siguen activos y alineados con el perfil del grupo.
2. **Preparar plantillas operativas**: Duplicar la plantilla RICE en formato hoja de cálculo (con fórmula ya introducida) y el tablero digital o copias A3 del caso *FerroNorte Suministros S.L.* según la modalidad concreta del día.
3. **Recabar contexto del grupo**: Si es posible, revisar previamente el sector de los participantes para adaptar los ejemplos verbales de la exposición (servicios B2B, comercio, industria, hostelería o *ecommerce*).
4. **Calibrar el reloj de la sesión**: Tener visibles los bloques de tiempo de la Sección 4 (especialmente no alargar las microexposiciones más allá de 30 minutos cada una para proteger los 55 minutos del caso práctico y los 35 de transferencia).
5. **Dejar el puente abierto al Tema 2**: Al finalizar, recoger qué hipótesis más incierta aparece en los *Product Strategy One-Pager* del alumnado para rescatarla como punto de partida en el próximo tema (*Lean Startup*).
