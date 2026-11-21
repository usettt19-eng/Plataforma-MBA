# Tema 3. Metodologías ágiles en proyectos de big data

## 1. Ficha del tema

| Campo | Detalle |
| --- | --- |
| **Título del tema** | Tema 3. Metodologías ágiles en proyectos de big data |
| **Bloque y posición dentro del programa** | Bloque 9: Big data — Posición 3 de 5 |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Mandos intermedios y emprendedores |
| **Nivel de dificultad** | Intermedio |
| **Prerrequisitos** | Haber completado los Temas 1 y 2 del Bloque 9 (arquitecturas básicas, KPIs, calidad del dato y gobernanza) y nociones básicas de gestión ágil de proyectos (Scrum/Kanban y MVP). |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado será capaz de planificar y dirigir proyectos de datos y analítica mediante iteraciones cortas, MVPs analíticos y ciclos de validación continua adaptados a la incertidumbre propia del big data, evitando proyectos en cascada largos y desconectados del negocio. |

---

## 2. Objetivos de aprendizaje

Al concluir esta sesión, el alumnado será capaz de:

1. **Contrastar** las diferencias críticas entre un proyecto ágil de desarrollo de software tradicional y un proyecto ágil de big data o analítica, identificando las fuentes específicas de incertidumbre del dato. *(Nivel de Bloom: Analizar)*
2. **Estructurar** un proyecto analítico combinando el ciclo iterativo **CRISP-DM** con prácticas ágiles (sprints orientados a hipótesis, *spikes* de exploración y gestión visual Kanban/Scrum híbrido). *(Nivel de Bloom: Aplicar)*
3. **Diseñar** un Producto Mínimo Viable (MVP) analítico en rebanadas verticales (*vertical slices*) que entregue valor temprano a negocio en semanas en lugar de meses. *(Nivel de Bloom: Crear)*
4. **Formular** criterios de validación continua (técnica, de negocio y de adopción por el usuario) para decidir al final de cada iteración si escalar, ajustar o cancelar una iniciativa de datos. *(Nivel de Bloom: Evaluar)*
5. **Reestructurar** un proyecto de datos bloqueado en enfoque cascada (*waterfall*) transformándolo en un *backlog* priorizado por valor, viabilidad del dato y riesgo. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Por qué fallan los proyectos de big data en cascada y qué cambia respecto al software ágil

**Explicación breve y clara**  
Aplicar un enfoque tradicional en cascada (*waterfall*) —donde se invierten 12 meses en construir toda la infraestructura y el almacén de datos antes de enseñar nada a negocio— suele fracasar en proyectos de big data: cuando por fin llega la entrega, los requisitos han cambiado, los datos no tenían la calidad asumida o la dirección ya ha perdido la paciencia. Sin embargo, copiar mecánicamente Scrum de desarrollo de software tampoco funciona sin ajustes, porque en datos existe una **incertidumbre exploratoria** constante: no sabemos si los datos contienen señal útil hasta que los exploramos y limpiamos.

**Conceptos clave**  
- Incertidumbre de requisitos vs. incertidumbre exploratoria del dato.
- Síndrome del "Big Bang analítico" (construir toda la plataforma antes del primer caso de uso).
- *Data Spike* (iteración corta acotada en tiempo para investigar viabilidad del dato).
- Equipo multidisciplinar mínimo (negocio/Product Owner + perfil técnico de datos + usuario final).

**Definiciones necesarias**  
- **Proyecto en cascada (*waterfall*) en datos:** Enfoque secuencial rígido que pretende cerrar especificaciones, arquitectura e ingesta de todas las fuentes corporativas antes de entregar el primer resultado consumible por negocio.
- **Incertidumbre exploratoria del dato:** Desconocimiento inicial sobre si los datos disponibles tienen suficiente calidad, histórico o poder explicativo para resolver la pregunta de negocio.
- **Spike de datos (*Data Spike*):** Tarea o mini-sprint con límite de tiempo estricto (*timebox*, p. ej., 3 a 5 días) cuyo objetivo no es producir software definitivo, sino responder una pregunta de viabilidad (*"¿son cruzables los pedidos del ERP con las rutas del transportista?"*).

**Ejemplo práctico realista (pyme en transformación digital)**  
Una pyme textil de Zaragoza (95 empleados) contrató un proyecto cerrado a 10 meses para "centralizar todos los datos de la empresa y luego hacer informes". Al mes 7 habían gastado el 80 % del presupuesto integrando tablas históricas de contabilidad que nadie consultaba, mientras el equipo de compras seguía sin visibilidad sobre tallas agotadas. Al introducir un enfoque ágil con un *spike* de 5 días centrado únicamente en ventas y stock de las 200 referencias principales, descubrieron dos errores críticos de codificación en el TPV y pudieron lanzar un primer panel operativo útil en la semana 4.

**Errores frecuentes**  
- Exigir estimaciones cerradas en horas para tareas de exploración o limpieza de datos desconocidos.
- Forzar sprints de 2 semanas prometiendo siempre "un modelo predictivo terminado" cuando aún no se ha validado la calidad mínima de las fuentes.
- Aislar al equipo de datos de los mandos intermedios de negocio, entregando resultados técnicamente sofisticados que nadie entiende ni utiliza.

**Preguntas que el alumnado debería poder responder**  
- ¿Por qué un proyecto de big data tiene un tipo de riesgo distinto al de desarrollar una aplicación web convencional?
- ¿Qué es un *Data Spike* y en qué momento conviene introducirlo dentro del *backlog*?
- ¿Qué riesgos asume una pyme al aprobar un proyecto "Big Bang" de plataforma de datos sin entregas intermedias?

---

### 3.2. Integración de CRISP-DM con marcos ágiles (Scrum híbrido y Kanban)

**Explicación breve y clara**  
Para gestionar la incertidumbre sin caer en el caos, los proyectos analíticos exitosos combinan la disciplina metodológica de **CRISP-DM** (*Cross-Industry Standard Process for Data Mining*) —entender el negocio, explorar los datos, prepararlos, modelarlos/analizarlos, evaluarlos y desplegarlos— con la cadencia ágil de **iteraciones cortas**. En la práctica de pymes, suele funcionar un modelo híbrido: **sprints de 2 semanas** orientados a objetivos de negocio claros para la parte de entrega y revisión, apoyados en un **tablero Kanban** que limite el trabajo en curso (*WIP*) para las tareas exploratorias e incidencias de datos.

**Conceptos clave**  
- Las 6 fases iterativas de CRISP-DM (Comprensión del negocio, Comprensión de los datos, Preparación, Modelado/Análisis, Evaluación, Despliegue).
- Historias de usuario basadas en hipótesis (*"Creemos que..., para validar..., mediremos..."*).
- Sprints orientados a valor vs. tablero Kanban con límites de trabajo en curso (*WIP*).
- Rituales adaptados: *Refinement* de datos, *Daily* enfocada en bloqueos de fuentes/accesos y *Sprint Review* con usuarios de negocio.

**Definiciones necesarias**  
- **CRISP-DM:** Marco de referencia estándar e iterativo para proyectos de analítica y ciencia de datos que conecta explícitamente la comprensión del problema de negocio con la exploración, preparación, evaluación y despliegue operativo.
- **Historia de usuario basada en hipótesis:** Unidad de trabajo del *backlog* analítico redactada como experimento contrastable en lugar de especificación cerrada, aceptando que el resultado puede validar o refutar la hipótesis inicial.
- **Límite WIP (*Work In Progress*):** Número máximo de tareas simultáneas permitidas en una columna del tablero Kanban para evitar la saturación del equipo de datos con peticiones urgentes no priorizadas.

**Ejemplo práctico realista (pyme en transformación digital)**  
Una empresa logística mediana en Valencia (110 empleados) tiene un único analista de datos y un ingeniero externo a media jornada. Cada semana recibían 15 peticiones urgentes por correo ("sácame este Excel para mañana"), paralizando el proyecto de optimización de rutas. Al implantar un tablero Kanban con límite WIP de 3 tareas en curso y una *Sprint Review* quincenal con Operaciones y Dirección Comercial, pasaron a priorizar el *backlog* en equipo, dedicar el 70 % de la capacidad a iteraciones del proyecto estratégico y reservar un carril acotado del 30 % para incidencias operativas.

**Errores frecuentes**  
- Seguir CRISP-DM de forma lineal (sin volver atrás cuando la exploración de datos revela que hay que reformular el problema de negocio).
- Celebrar *Sprint Reviews* enseñando código, tablas técnicas o métricas estadísticas incomprensibles en lugar de decisiones de negocio y pantallas reales.
- No gestionar un "carril rápido" acotado para peticiones ad-hoc de dirección, lo que acaba rompiendo todos los sprints.

**Preguntas que el alumnado debería poder responder**  
- ¿En qué se diferencia una historia de usuario clásica de software de una historia analítica basada en hipótesis?
- ¿Por qué un enfoque híbrido (Scrum para cadencia de valor + Kanban para flujo exploratorio) encaja especialmente bien en equipos pequeños de datos?
- ¿Qué debería ocurrir durante una *Sprint Review* de un proyecto de big data para garantizar el compromiso de los mandos intermedios?

---

### 3.3. Diseño de MVPs analíticos mediante rebanadas verticales (*Vertical Slices*)

**Explicación breve y clara**  
El mayor acelerador ágil en big data es abandonar las "capas horizontales" (mes 1-4: conectar las 15 fuentes; mes 5-8: limpiar todo; mes 9-12: hacer informes) y trabajar en **rebanadas verticales (*vertical slices*)**. Una rebanada vertical toma **un único problema de negocio prioritario**, conecta solo las 2 o 3 fuentes imprescindibles para ese problema, aplica la calidad mínima necesaria y entrega en 3 a 6 semanas un **MVP analítico** usable que permite empezar a tomar decisiones reales y aprender del uso cotidiano.

**Conceptos clave**  
- Rebanada horizontal (*horizontal slicing*) vs. rebanada vertical (*vertical slicing*).
- MVP analítico (Producto Mínimo Viable de datos).
- Escalera de fidelidad del MVP: prototipo en hoja de cálculo / *mock-up* -> panel descriptivo automatizado -> alerta/regla de negocio -> modelo avanzado.
- Matriz de priorización de casos de uso (Impacto en negocio vs. Disponibilidad/Calidad del dato y Esfuerzo).

**Definiciones necesarias**  
- **MVP analítico:** Versión más sencilla, funcional y fiable de un producto de datos (cuadro de mando, sistema de alertas, informe automatizado o modelo sencillo) que permite validar valor real de negocio y adopción del usuario con el mínimo tiempo e inversión.
- **Rebanada vertical (*vertical slice*):** Incremento que atraviesa de extremo a extremo todas las capas de la arquitectura (fuente -> ingesta -> transformación -> consumo) pero acotado a un alcance funcional muy concreto.
- **Deuda técnica y de datos:** Atajos conscientes asumidos en un MVP (por ejemplo, una carga semimanual temporal) que deben documentarse y resolverse si el producto demuestra valor y pasa a escalado.

**Ejemplo práctico realista (pyme en transformación digital)**  
Una cadena de 14 panaderías-cafeterías artesanales en Madrid quiere reducir el desperdicio diario de bollería y pan al cierre. En lugar de esperar 8 meses a integrar su sistema de compras, clima, eventos de calle y un algoritmo de inteligencia artificial, lanzan un **MVP analítico en 3 semanas** para solo **2 tiendas piloto**: cruzan las ventas por franja horaria de los últimos 6 meses del TPV con el registro diario de mermas en un formulario móvil sencillo y generan una recomendación semanal de horneado basada en reglas simples (media móvil por día de la semana y festivos). Al validar en el mes 2 que la merma baja de forma significativa en esas 2 tiendas, justifican la inversión para escalar al resto de locales y sofisticar el modelo.

**Errores frecuentes**  
- Confundir MVP analítico con un prototipo chapucero con datos falsos o erróneos ("mínimo" significa alcance acotado, nunca falta de fiabilidad).
- Construir un MVP que nadie integra en su rutina diaria (queda en un enlace olvidado en el correo).
- Dejar en producción indefinidamente soluciones provisionales (hojas de cálculo enlazadas manualmente) sin saldar la deuda técnica cuando el MVP ya ha demostrado su valor.

**Preguntas que el alumnado debería poder responder**  
- ¿Qué diferencia práctica existe entre construir un proyecto de datos por capas horizontales o por rebanadas verticales?
- ¿Por qué un MVP analítico debe tener alcance mínimo pero veracidad suficiente desde el primer día?
- ¿Qué variables utilizarías para decidir qué caso de uso entra en el primer MVP de tu empresa?

---

### 3.4. Validación continua, criterios de decisión y escalado (o cancelación temprana)

**Explicación breve y clara**  
La agilidad en big data no consiste en "ir más rápido", sino en **aprender más rápido si una iniciativa genera valor real**. Cada iteración debe cerrarse validando tres dimensiones inseparables: (1) **viabilidad técnica y del dato** (¿el dato es fiable y actualizable?), (2) **adopción por el usuario** (¿el equipo realmente lo consulta y confía en él?) y (3) **impacto de negocio** (¿se mueve el KPI objetivo?). Definir de antemano criterios claros de éxito y de parada (*kill criteria*) permite escalar lo que funciona y frenar a tiempo proyectos estériles sin coste reputacional.

**Conceptos clave**  
- Triple validación continua: Dato/Técnica, Adopción/Uso e Impacto en KPI de negocio.
- *Definition of Done* (DoD) específica para entregables de datos.
- Métricas de adopción de productos de datos (usuarios activos semanales, decisiones documentadas, tiempo ahorrado).
- Criterios de parada o pivote (*pivot or persevere / kill criteria*).

**Definiciones necesarias**  
- **Definition of Done (DoD) en proyectos de datos:** Lista verificable de condiciones que debe cumplir un incremento analítico antes de considerarse terminado (p. ej., fórmula alineada con el glosario oficial, pruebas de calidad superadas, documentación básica actualizada y validado con un usuario de negocio real).
- **Kill criteria (criterios de parada o pivote):** Condiciones objetivas acordadas antes de empezar una iteración que determinan que el enfoque actual no merece más inversión y debe replantearse o detenerse.
- **Línea base (*baseline*):** Valor inicial medido del KPI antes de desplegar el MVP analítico, imprescindible para demostrar si la intervención produjo mejora real.

**Ejemplo práctico realista (pyme en transformación digital)**  
Una correduría de seguros mediana en Bilbao (60 empleados) lanza una iteración de 4 semanas para crear una alerta temprana de pólizas con riesgo de no renovación. Antes de empezar, acuerdan una línea base (tasa de renovación actual: 81 %) y tres criterios de validación: (a) los datos de siniestralidad y llamadas se actualizan cada lunes antes de las 8:00; (b) al menos el 75 % de los gestores revisa el listado semanalmente; (c) en el grupo piloto de clientes contactados mejora la renovación al menos 3 puntos porcentuales frente al grupo de control. Al comprobar que los gestores no usaban la alerta porque estaba en una herramienta externa a su CRM, pivotean en el sprint 3 integrando el aviso directamente en la ficha del cliente dentro del CRM.

**Errores frecuentes**  
- Evaluar un proyecto de datos solo por criterios técnicos ("el panel carga rápido" o "el modelo tiene buena precisión") olvidando si los usuarios lo utilizan y si mejora el negocio.
- No medir la línea base antes del lanzamiento, haciendo imposible demostrar el ROI ante dirección financiera.
- Mantener vivo por inercia (falacia del coste hundido) un proyecto analítico cuyos datos demostraron no aportar valor tras dos iteraciones.

**Preguntas que el alumnado debería poder responder**  
- ¿Cuáles son las tres dimensiones que deben evaluarse al cierre de cada iteración de un MVP analítico?
- ¿Por qué es imprescindible establecer una línea base antes de lanzar un piloto de datos?
- ¿Qué elementos incluirías en una *Definition of Done* (DoD) para evitar entregar informes rápidos pero poco fiables?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** reproduce la dinámica real de un equipo ágil de datos, pasando del diagnóstico de un proyecto en cascada fallido al diseño de un MVP analítico en rebanadas verticales.

| Fase | Tiempo | Duración | Qué hace el formador | Qué hace el alumnado |
| --- | --- | --- | --- | --- |
| **1. Apertura y activación** | 00:00 – 00:25 | **25 min** | Conecta con los KPIs y gobernanza del Tema 2, lanza el diagnóstico inicial y facilita la **Actividad 1 (Autopsia de un proyecto de datos eterno)**. | Comparte experiencias de proyectos de informes/datos retrasados e identifica en parejas qué síntomas del enfoque en cascada provocaron el bloqueo. |
| **2. Exposición breve / Microlearning I** | 00:25 – 00:55 | **30 min** | Explica los apartados 3.1 y 3.2 (Incertidumbre exploratoria, *Data Spikes*, CRISP-DM iterativo, historias basadas en hipótesis e híbrido Scrum+Kanban). | Toma notas, distingue historias de software vs. historias de datos y consulta cómo adaptar estos rituales a equipos pyme pequeños. |
| **3. Actividad de aplicación (Vertical Slicing)** | 00:55 – 01:25 | **30 min** | Facilita la **Actividad 2 (Cortando el elefante en rebanadas verticales)**, guiando a los equipos a priorizar 6 iniciativas en una matriz de Impacto vs. Viabilidad del dato. | En grupos de 3-4 personas, prioriza 6 casos de uso y diseña una rebanada vertical (MVP de 4 semanas) con un *Data Spike* inicial y 2 historias basadas en hipótesis. |
| **Pausa** | 01:25 – 01:40 | **15 min** | Descanso operativo. | Descanso y networking. |
| **4. Exposición breve / Microlearning II** | 01:40 – 02:10 | **30 min** | Explica los apartados 3.3 y 3.4 (Diseño de MVPs analíticos, escalera de fidelidad, deuda de datos, *Definition of Done*, triple validación y *kill criteria*). | Analiza ejemplos reales de MVPs analíticos y define qué indicadores medirían adopción e impacto de negocio en sus áreas. |
| **5. Análisis de caso práctico** | 02:10 – 03:00 | **50 min** | Introduce el caso **Ferretería Industrial Norteña S.A.**, entrega los datos del proyecto *waterfall* encallado y desafía a los equipos como comité inversor. | En equipos, reconduce el proyecto bloqueado diseñando un roadmap ágil de 3 sprints (6 semanas), el MVP de prevención de roturas de stock, la DoD y los criterios de validación. |
| **6. Discusión guiada y puesta en común** | 03:00 – 03:25 | **25 min** | Modera la presentación de 2-3 equipos (simulando una *Sprint Review* ejecutiva), contrasta cómo acotaron el MVP y consolida lecciones clave. | Presenta su plan de rescate ágil en 3 minutos, recibe preguntas críticas de otros equipos y ajusta sus criterios de parada y adopción. |
| **7. Actividad de transferencia individual** | 03:25 – 03:45 | **20 min** | Acompaña la **Actividad 3 (Hoja de Ruta de MVP Analítico propio)** retomando el proceso y KPIs trabajados en los Temas 1 y 2. | Diseña individualmente su MVP analítico de 4-6 semanas (hipótesis, *spike*, alcance mínimo, línea base, DoD y criterio de parada). |
| **8. Síntesis, evaluación y cierre** | 03:45 – 04:00 | **15 min** | Resume los puntos críticos de la agilidad en datos, recoge las evidencias evaluativas, dirige la autoevaluación y enlaza con el Tema 4 (IA en big data). | Completa el ejercicio de reflexión/autoevaluación y entrega su Hoja de Ruta de MVP Analítico en el campus virtual. |

*Suma total verificada: 25 + 30 + 30 + 15 + 30 + 50 + 25 + 20 + 15 = **240 minutos (4 horas exactas)**.*

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Autopsia de un proyecto de datos eterno

- **Nombre:** ¿Por qué se murió aquel proyecto de datos?
- **Objetivo:** Activar la experiencia previa del alumnado identificando los síntomas clásicos de la gestión en cascada y de la desconexión entre IT y negocio.
- **Instrucciones para el alumnado:**
  1. De forma individual (4 minutos), recuerda un proyecto de informes, ERP, CRM o analítica que hayas vivido (o leído) que tardó mucho más de lo previsto o acabó sin usarse.
  2. En parejas (6 minutos), anotad las **3 causas principales del retraso o abandono** y clasificad cada una en una de estas categorías: *(A) Alcance gigante desde el principio*, *(B) Problemas ocultos de datos descubiertos tarde*, *(C) Falta de implicación de usuarios reales*, *(D) Cambio de prioridades de negocio durante el proyecto*.
  3. Compartid en plenario las causas más repetidas (5 minutos).
- **Materiales necesarios:** Notas adhesivas o tablero digital con los 4 cuadrantes (A, B, C, D).
- **Tiempo estimado:** 15 minutos (dentro de la fase de Apertura y activación).
- **Rol del formador:** Mapear las causas en el tablero y mostrar cómo cada cuadrante se resuelve con una práctica específica de la sesión (A -> MVP vertical; B -> *Data Spike*; C -> *Sprint Review* con usuarios; D -> Sprints cortos).
- **Producto o entregable esperado:** Mapa diagnóstico colectivo de causas de fracaso en proyectos de datos.
- **Criterios de éxito:** El grupo identifica al menos una causa por cada cuadrante y relaciona el fracaso con el enfoque de gestión, no solo con falta de presupuesto.

---

### Actividad 2 (Aplicación): Cortando el elefante en rebanadas verticales

- **Nombre:** Priorización de backlog y diseño de una rebanada vertical.
- **Objetivo:** Aplicar la matriz de valor vs. disponibilidad del dato para elegir un primer caso de uso y descomponerlo en un *Data Spike* y dos historias analíticas basadas en hipótesis.
- **Instrucciones para el alumnado:**
  1. En equipos de 3-4 personas, analizad una lista de **6 peticiones de negocio** recibidas por una pyme de distribución de café y maquinaria para hostelería: (1) Predecir averías de cafeteras en clientes con sensores aún no instalados; (2) Detectar clientes que llevan >30 días sin pedir café respecto a su frecuencia habitual; (3) Crear un Data Lake con todas las facturas desde 2012; (4) Calcular el margen real por comercial incluyendo descuentos y café promocional; (5) Analizar el sentimiento en redes sociales de los bares clientes; (6) Automatizar el informe semanal de pedidos retrasados por zona.
  2. Situad las 6 peticiones en una **matriz 2x2** (*Impacto de negocio* vs. *Disponibilidad y calidad actual del dato*).
  3. Elegid la **iniciativa ganadora** para el primer MVP (4 semanas) y redactad:
     - **1 Data Spike** de 3 días (qué incógnita técnica o de calidad hay que despejar primero).
     - **2 historias de usuario basadas en hipótesis** (*"Creemos que [entregable] ayudará a [usuario] a [decisión], lo validaremos midiendo [métrica]"*).
- **Materiales necesarios:** Ficha con las 6 peticiones y plantilla de matriz 2x2 + tarjetas de historias.
- **Tiempo estimado:** 30 minutos (20 min trabajo en equipo + 10 min puesta en común rápida).
- **Rol del formador:** Cuestionar elecciones seductoras pero inviables a corto plazo (como los sensores aún no instalados) y asegurar que las hipótesis incluyan una métrica comprobable.
- **Producto o entregable esperado:** Matriz priorizada y mini-backlog de arranque (1 *spike* + 2 historias de hipótesis).
- **Criterios de éxito:** Se descarta el enfoque "Big Bang" (petición 3) y la iniciativa sin datos disponibles (petición 1), eligiendo un MVP viable con datos existentes (como la 2, 4 o 6) y formulando hipótesis verificables.

---

### Actividad 3 (Transferencia a la realidad laboral): Hoja de Ruta de MVP Analítico propio

- **Nombre:** Del problema real a tu primer MVP analítico en 4-6 semanas.
- **Objetivo:** Traducir el proceso y los KPIs trabajados en los Temas 1 y 2 a un plan ágil ejecutable con entregas cortas y validación continua.
- **Instrucciones para el alumnado:**
  1. Retoma el proceso real de tu empresa o proyecto emprendedor trabajado en los Temas 1 y 2 (o selecciona uno prioritario de tu puesto actual).
  2. Completa la **Plantilla de MVP Analítico Ágil** especificando:
     - **Hipótesis principal de negocio** y **línea base actual** del KPI.
     - **Alcance de la rebanada vertical** (qué entra en el MVP y —muy importante— qué queda **fuera** explícitamente).
     - **Sprint 0 / Data Spike (semana 1):** qué riesgo de dato vas a comprobar antes de invertir más.
     - **Sprints 1 y 2 (semanas 2-5):** entregable mínimo usable y grupo piloto de usuarios.
     - **Definition of Done (3 puntos)** y **triple criterio de validación / criterio de parada (*kill criterion*)**.
  3. Sube tu plantilla al campus virtual al cierre de la sesión.
- **Materiales necesarios:** Plantilla editable o impresa de Hoja de Ruta de MVP Analítico.
- **Tiempo estimado:** 20 minutos.
- **Rol del formador:** Ayudar a recortar alcances excesivos (regla de oro: *"¿qué quitarías para poder enseñarlo funcionando en 4 semanas?"*).
- **Producto o entregable esperado:** Hoja de ruta individual de 1 página lista para arrancar un piloto real.
- **Criterios de éxito:** Incluye explícitamente qué queda fuera del MVP, fija una línea base, prevé un *Data Spike* inicial y establece criterios objetivos para escalar o pivotar.

---

## 6. Caso práctico

### Contexto empresarial
**Ferretería Industrial Norteña S.A.** es una distribuidora B2B de tornillería técnica, herramientas de corte y suministros para talleres mecánicos ubicada en Gipuzkoa, con 140 empleados, 3 almacenes regionales y una facturación anual aproximada de 34 millones de euros *(caso ficticio con fines docentes)*. Gestiona un catálogo activo de 28.000 referencias y recibe pedidos por teléfono, comerciales en ruta y portal B2B.

### Situación o problema
Hace 8 meses, la empresa inició un ambicioso proyecto de "Transformación Big Data y Data Warehouse Corporativo" planificado en cascada (*waterfall*) a **14 meses** con un presupuesto total de **190.000 €** junto a un integrador externo. El plan original establecía: meses 1-4 toma de requisitos de los 7 departamentos; meses 5-10 construcción del Data Warehouse completo con todas las tablas históricas desde 2015; meses 11-14 desarrollo de 35 cuadros de mando y formación.

Al llegar al **mes 8**, la situación es crítica:
- Ya se han gastado **115.000 €** y todavía **ningún departamento ha recibido ni un solo informe usable**.
- El equipo comercial y el jefe de compras están frustrados porque las **roturas de stock en las 500 referencias de alta rotación** (que representan el 62 % de las ventas) les han hecho perder clientes industriales clave en el último trimestre.
- El integrador informa de que necesita "4 meses adicionales y 45.000 € extra" porque los históricos de 2015-2019 tienen formatos corruptos.
- El Consejo de Administración amenaza con cancelar todo el proyecto la próxima semana si no ven valor tangible en los próximos **60 días** con el presupuesto restante (máximo 75.000 €, aunque idealmente reservar parte para fases posteriores).

### Datos disponibles

| Dimensión del proyecto | Estado actual en el Mes 8 | Oportunidad / Restricción clave |
| --- | --- | --- |
| **Presupuesto restante** | 75.000 € (de los 190.000 € iniciales) | Dirección exige demostrar valor tangible en 60 días antes de liberar más fondos. |
| **Equipo disponible** | 2 técnicos del integrador externo + 1 responsable IT interno (30 % dedicación) + Jefes de Compras y Almacén (2h/semana) | Nadie ejerce hoy el rol activo de *Product Owner* de negocio. |
| **Datos históricos ERP (2015-2019)** | Inconsistentes, migración de ERP en 2019 con códigos cambiados | Responsable del 70 % del retraso actual; poco útil para patrones de demanda recientes. |
| **Datos recientes ERP (2022-actualidad)** | Limpios en un 92 %, ventas diarias, stock por almacén y plazos de entrega de proveedores | Suficientes para analizar rotación, roturas y pedidos pendientes de las referencias críticas. |
| **Pedidos perdidos / sin stock** | No existe campo formal en ERP, pero los comerciales y el portal B2B registran búsquedas sin stock y presupuestos no servidos desde hace 6 meses | Requiere un *Data Spike* para validar si se puede cruzar el log del portal B2B con el catálogo. |
| **Dolor prioritario de negocio** | Tasa actual de rotura de stock en referencias clase A (top 500): **11,4 %** (línea base) | Objetivo de negocio: bajar por debajo del **6 %** en las 500 referencias críticas. |

### Preguntas de análisis
1. ¿Qué errores clásicos del enfoque en cascada explican la crisis de Ferretería Industrial Norteña S.A. en el mes 8?
2. ¿Qué decisiones de **recorte inmediato de alcance** tomaríais esta misma semana para detener la hemorragia de presupuesto y tiempo?
3. ¿Cómo reorganizaríais los roles y la cadencia de trabajo (nombramiento de *Product Owner*, formato de sprints y tablero Kanban) para el rescate en 60 días?
4. Diseñad el **MVP analítico en rebanada vertical** centrado en las 500 referencias de alta rotación (clase A): ¿qué entra, qué queda fuera y qué *Data Spike* ejecutaríais en la primera semana?
5. ¿Qué **triple validación** (dato, adopción y negocio) presentaríais al Consejo de Administración en el día 60 para justificar la continuidad del proyecto?

### Tarea a realizar
En equipos de 4 personas, actuad como **equipo de rescate ágil** contratado por la dirección general y preparad un **Plan de Rescate Ágil a 60 días (3 Sprints de 2 semanas + revisión ejecutiva)** que incluya:
1. Lista de decisiones de parada inmediata (qué se congela o descarta del plan original).
2. Definición del MVP analítico de prevención de roturas de stock (alcance vertical, fuentes exactas y usuarios piloto).
3. Planificación detallada de los **3 Sprints** (Sprint 1 con *Data Spike*, Sprint 2 MVP piloto en 1 almacén, Sprint 3 ajuste e integración operativa en compras).
4. *Definition of Done* (4 criterios) y **cuadro de validación del día 60** con línea base, objetivo y *kill criteria*.

### Posibles soluciones o criterios de análisis
Una propuesta sólida de rescate debería contemplar:
- **Decisiones inmediatas de recorte:** Congelar de inmediato la migración del histórico corrupto 2015-2019 (bajo valor marginal y alto coste) y suspender el desarrollo de los 35 cuadros de mando genéricos. Reenfocar todo el equipo a un único problema de alto retorno: **roturas de stock en las 500 referencias clase A**.
- **Gobierno y cadencia ágil:** Nombrar al Jefe de Compras (o Dirección de Operaciones) como **Product Owner** con autoridad de priorización; establecer sprints de 2 semanas con *Sprint Review* quincenal obligatoria ante compras, almacén y dirección; trabajar con tablero Kanban visible limitando el WIP.
- **Plan de 3 Sprints (6 semanas / 45-60 días):**
  - *Sprint 1 (Semanas 1-2):* **Data Spike** de 4 días sobre el ERP (2022-actualidad) y los logs de búsquedas sin stock del portal B2B; limpieza acotada únicamente a los códigos de las 500 referencias clase A y plazos reales de sus proveedores; validación del prototipo de pantalla con compradores.
  - *Sprint 2 (Semanas 3-4):* Construcción y despliegue de la **rebanada vertical MVP** en el almacén principal (ingesta diaria automatizada *batch* de stock + ventas + pedidos en curso + alertas de punto de pedido dinámico simple basado en lead time real del proveedor). Uso piloto diario por 2 compradores.
  - *Sprint 3 (Semanas 5-6):* Corrección de fricciones detectadas por los compradores (por ejemplo, falsas alertas en referencias estacionales), extensión a los otros 2 almacenes y presentación de resultados con datos reales al Consejo.
- **Triple validación en el día 60:**
  - *Dato:* Actualización diaria automatizada antes de las 7:30 con <1 % de discrepancia frente al inventario físico muestreado.
  - *Adopción:* Los compradores utilizan la lista priorizada al menos 4 días por semana para lanzar órdenes de reposición.
  - *Negocio:* Reducción medible de la tasa de rotura en referencias clase A en el almacén piloto (por ejemplo, tendencia clara desde el 11,4 % inicial hacia <7-8 % en el primer mes de uso) y valoración económica de ventas salvadas.
  - *Kill / Pivot criterion:* Si tras el Sprint 1 se demuestra que los plazos de proveedor del ERP son irrecuperables o si en el Sprint 2 los compradores no confían en la alerta, se pivota el diseño antes de gastar el resto del presupuesto.

### Preguntas de reflexión final
- ¿Cómo gestionaríais la conversación contractual con el integrador externo para cambiar de un plan cerrado en cascada a entregas quincenales por valor?
- ¿Por qué el histórico de 2015-2019 parecía "imprescindible" en la fase de requisitos iniciales y resultó ser un lastre en la práctica?
- ¿Qué coste emocional y político tiene cancelar trabajo ya hecho (falacia del coste hundido) y cómo ayudan los datos a tomar esa decisión?

---

## 7. Evaluación

### Evaluación diagnóstica breve (al inicio de la sesión — 5 min)
Tres preguntas interactivas de contraste:
1. Si tu empresa te pide mejorar la retención de clientes con datos, ¿qué harías el primer mes? *(a) Integrar todas las bases de datos de la empresa; (b) Investigar en 1 semana los datos de cancelación de los últimos 12 meses y lanzar un piloto pequeño; (c) Comprar una herramienta de IA*.
2. ¿Verdadero o falso? *"Un MVP analítico puede lanzarse con datos aproximados y poco fiables siempre que sea rápido."* *(Respuesta correcta: Falso — acota alcance, nunca veracidad).*
3. ¿Qué es un *Data Spike*? *(a) Un pico de tráfico en la web; (b) Una exploración breve y acotada en tiempo para comprobar si los datos permiten resolver el problema; (c) Un error de calidad del dato).*

### Evaluación formativa durante la sesión
- Supervisión activa de la matriz 2x2 y de la redacción de historias basadas en hipótesis en la **Actividad 2**.
- Evaluación oral durante la *Sprint Review* simulada del caso **Ferretería Industrial Norteña S.A.** verificando que los equipos recortan el histórico 2015-2019 y acotan una rebanada vertical realista.

### Evaluación sumativa al final de la sesión
Entrega individual de la **Hoja de Ruta de MVP Analítico propio (Actividad 3)** aplicada al proyecto real del participante, evaluada con la rúbrica siguiente.

### Rúbrica de evaluación

| Criterio | Insuficiente (1) | En desarrollo (2) | Adecuado (3) | Destacado (4) |
| --- | --- | --- | --- | --- |
| **1. Enfoque en rebanada vertical y alcance del MVP** | Propone un proyecto largo en cascada o pretende integrar todas las fuentes a la vez. | Acota parcialmente el proyecto, pero sigue siendo demasiado amplio para 4-6 semanas o no explicita qué queda fuera. | Define una rebanada vertical coherente (de fuente a consumo) ejecutable en 4-6 semanas y explicita qué queda fuera. | Diseña un MVP analítico de alto impacto y mínimo esfuerzo, equilibrando alcance reducido, fiabilidad del dato y plan para gestionar la deuda técnica. |
| **2. Gestión de la incertidumbre (*Data Spike* e hipótesis)** | Asume que los datos están listos sin exploración previa y redacta tareas técnicas sin vínculo a hipótesis. | Menciona la necesidad de revisar datos, pero sin *timebox* ni pregunta verificable de viabilidad. | Incluye un *Data Spike* acotado en tiempo e hipótesis de negocio contrastables vinculadas a un KPI. | Formula *Data Spikes* precisos que atacan los mayores riesgos primero y traduce el valor en hipótesis con línea base clara. |
| **3. Cadencia ágil y roles implicados** | No define iteraciones ni contempla la participación de usuarios de negocio hasta el final. | Menciona sprints genéricos, pero no detalla qué se valida en cada iteración ni quién decide prioridades. | Planifica iteraciones cortas con roles claros (*Product Owner* de negocio, técnico, usuario piloto) y revisiones periódicas. | Integra con rigor CRISP-DM con cadencia ágil (Scrum/Kanban híbrido), protege al equipo de peticiones ad-hoc y diseña *Sprint Reviews* centradas en decisión. |
| **4. Validación continua, DoD y criterios de parada** | Solo evalúa criterios técnicos o no establece métricas de éxito ni criterios de pivote/parada. | Incluye alguna métrica de negocio pero omite adopción por usuarios o *Definition of Done*. | Define una *Definition of Done* de datos y criterios claros en las tres dimensiones (dato, adopción y negocio). | Establece DoD verificable, triple validación con grupo piloto o línea base, y *kill/pivot criteria* objetivos que evitan la falacia del coste hundido. |

### Actividad de autoevaluación o reflexión (Retrospectiva personal 3-2-1 — 5 min)
Cada alumno anota brevemente:
- **3 prácticas ágiles de datos** que puede aplicar desde la próxima semana (p. ej., *Data Spike*, *vertical slice*, *Sprint Review* con usuarios).
- **2 bloqueos organizativos** que anticipa en su empresa al proponer trabajar por MVPs en vez de grandes proyectos cerrados.
- **1 conversación concreta** que tendrá con su dirección o proveedor tecnológico para introducir validación continua.

---

## 8. Materiales y recursos

### Guion de diapositivas (slide por slide)

1. **Slide 1 — Portada:** Título del tema, Bloque 9 (3/5), objetivo general y estructura de las 4 horas.
2. **Slide 2 — Conexión con el Tema 2:** Ya tenemos arquitectura, KPIs y gobernanza; ahora, ¿cómo ejecutamos sin tardar 14 meses?
3. **Slide 3 — Activación (Actividad 1):** Autopsia de un proyecto de datos eterno (los 4 cuadrantes de fracaso).
4. **Slide 4 — Por qué falla el *waterfall* en big data:** El mito de "centralicemos todo primero" y la incertidumbre exploratoria del dato.
5. **Slide 5 — Software ágil vs. Big Data ágil:** Tabla comparativa (requisitos vs. datos desconocidos, *Data Spikes*, estimaciones y perfiles).
6. **Slide 6 — CRISP-DM en clave ágil:** Cómo recorrer el ciclo de 6 fases en iteraciones cortas en lugar de una sola vuelta anual.
7. **Slide 7 — Híbrido Scrum + Kanban para pymes:** Sprints de valor + límites WIP + carril acotado para urgencias ad-hoc.
8. **Slide 8 — Historias de usuario basadas en hipótesis:** Plantilla práctica y ejemplos comparados (petición vaga vs. hipótesis analítica).
9. **Slide 9 — Taller práctico (Actividad 2):** Matriz 2x2 de priorización y diseño de rebanada vertical.
10. **Slide 10 — Rebanadas horizontales vs. Rebanadas verticales:** Esquema visual del valor acumulado semana a semana.
11. **Slide 11 — Qué es (y qué no es) un MVP analítico:** La escalera de fidelidad y la gestión consciente de la deuda de datos.
12. **Slide 12 — Definition of Done (DoD) en proyectos de datos:** Checklist mínima para combinar velocidad y veracidad.
13. **Slide 13 — Triple validación continua:** Dato/Técnica + Adopción/Uso + Impacto de negocio frente a línea base.
14. **Slide 14 — Aprender a parar o pivotar:** *Kill criteria* y cómo evitar la falacia del coste hundido en analítica.
15. **Slide 15 — Caso práctico:** Crisis en el mes 8 de **Ferretería Industrial Norteña S.A.**
16. **Slide 16 — Sprint Review del caso:** Contraste de planes de rescate a 60 días y claves de resolución.
17. **Slide 17 — Transferencia individual (Actividad 3):** Hoja de Ruta de tu propio MVP Analítico.
18. **Slide 18 — Cierre y puente al Tema 4:** Retrospectiva 3-2-1 y adelanto de *Inteligencia artificial en big data*.

### Ficha de trabajo (para el alumnado — Actividad 2)

**Matriz de priorización de casos de uso (coloca los números del 1 al 6):**

| | **Baja disponibilidad / calidad del dato hoy** | **Alta disponibilidad / calidad del dato hoy** |
| --- | --- | --- |
| **Alto impacto de negocio** | *Proyectos estratégicos futuros (requieren preparar datos antes)* | **ZONA MVP (Empezar aquí — Quick Wins de alto valor)** |
| **Bajo impacto de negocio** | *Descartar* | *Posponer / Automatizar solo si el coste es mínimo* |

**Diseño rápido del arranque:**
- **Caso ganador elegido:** `________________________`
- **Data Spike (máx. 3-5 días):** *"Necesitamos comprobar si ________________________ antes de invertir en ________________________."*
- **Historia basada en hipótesis 1:** *"Creemos que entregando ________________________ a [usuario], podrá decidir ________________________ y lo validaremos midiendo ________________________."*
- **Historia basada en hipótesis 2:** *"Creemos que ________________________..."*

### Plantilla práctica replicable: Hoja de Ruta de MVP Analítico Ágil (Actividad 3)

| Sección | Contenido a definir | Tu proyecto / proceso real |
| --- | --- | --- |
| **1. Hipótesis y línea base** | Qué KPI queremos mover, valor actual (*baseline*) y mejora esperada. | |
| **2. Alcance vertical (DENTRO)** | Fuentes mínimas (2-3), usuario piloto y entregable usable. | |
| **3. Alcance excluido (FUERA)** | Qué históricos, departamentos o funciones NO entran en este MVP. | |
| **4. Data Spike (Semana 1)** | Incógnita principal de calidad/cruce a resolver en <=5 días. | |
| **5. Sprints 1 y 2 (Semanas 2-5)** | Hitos quincenales y fecha de *Sprint Review* con usuarios reales. | |
| **6. Definition of Done (DoD)** | 3 requisitos mínimos de calidad, documentación y validación. | |
| **7. Triple validación y Kill Criterion** | Métrica de dato, métrica de adopción, métrica de negocio y condición de parada/pivote. | |

### Lecturas y recursos recomendados
- **Lectura recomendada 1:** Jurney, R. *Agile Data Science 2.0* (enfoque práctico sobre iteraciones cortas, pirámide de valor del dato y trabajo con equipos ágiles).
- **Lectura recomendada 2:** Saltz, J., & Shamshurin, I. Artículos divulgativos sobre *Data Driven Scrum (DDS)* y gestión ágil de equipos de ciencia de datos (referencia académica/profesional de adaptación de Scrum a datos).
- **Lectura recomendada 3:** Documentación clásica de **CRISP-DM 1.0** (guía paso a paso de las 6 fases para comprender su estructura iterativa).

### Vídeos, artículos y fuentes adicionales *(Nota obligatoria: validar enlaces, vigencia y disponibilidad antes de utilizarlos en clase)*
- Guía o artículo comparativo sobre *CRISP-DM*, *Kanban* y *Data Driven Scrum* en proyectos analíticos (p. ej., blogs especializados de ingeniería de datos o *Data Science Process Alliance* — **validar enlaces y vigencia antes de compartir con el alumnado**).
- Vídeo breve (5-8 min) explicando visualmente *Vertical Slicing* (rebanadas verticales vs. horizontales en proyectos ágiles) — **verificar disponibilidad y subtítulos en español antes de impartir**.
- Estudios sectoriales sobre tasas de fracaso o estancamiento en proyectos de big data e iniciativas de datos (p. ej., resúmenes de analistas como Gartner o McKinsey — **advertir al alumnado y verificar siempre la fuente y año exacto antes de citar cifras específicas**).

### Glosario de términos clave

| Término | Definición operativa |
| --- | --- |
| **Backlog analítico** | Lista viva y priorizada de problemas de negocio, hipótesis, *spikes* y mejoras de datos ordenadas por valor y riesgo. |
| **CRISP-DM** | Metodología estándar iterativa de 6 fases para desarrollar proyectos de analítica y minería de datos orientada a negocio. |
| **Data Spike** | Experimento técnico o exploratorio con duración máxima estricta (*timebox*) para despejar incertidumbre sobre los datos antes de comprometer un desarrollo. |
| **Definition of Done (DoD)** | Conjunto de criterios de calidad técnica, documental y de negocio que debe superar un incremento de datos para considerarse terminado. |
| **Deuda de datos / técnica** | Soluciones temporales aceptadas para entregar un MVP rápido que exigirán consolidación posterior si el producto escala. |
| **Historia basada en hipótesis** | Elemento de trabajo formulado como suposición verificable con una métrica de éxito, en lugar de una especificación rígida. |
| **Kill Criteria** | Condiciones objetivas preacordadas que determinan cuándo detener o redirigir un proyecto analítico si no demuestra viabilidad o valor. |
| **Línea base (*Baseline*)** | Medición inicial del rendimiento de un proceso antes de introducir la solución de datos, necesaria para evaluar el impacto real. |
| **Límite WIP** | Tope de tareas simultáneas en curso en un tablero Kanban para evitar dispersión y acelerar la finalización de entregas. |
| **MVP analítico** | Producto mínimo viable de datos capaz de entregar valor verificable a usuarios reales en pocas semanas con alcance reducido y alta fiabilidad. |
| **Rebanada vertical (*Vertical Slice*)** | Entrega de extremo a extremo (fuente a usuario) acotada a un único caso de uso prioritario. |

---

## 9. Adaptaciones para modalidad híbrida

### Sesión presencial
- **Actividad 2 (Matriz 2x2):** Dibujar la matriz en la pizarra o pared con cinta de carrocero y entregar a cada equipo las 6 peticiones impresas en tarjetas imantadas/adhesivas; al comparar las colocaciones de todos los grupos en la misma pared se dispara un debate muy enriquecedor sobre "qué datos creemos tener vs. qué datos tenemos de verdad".
- **Caso práctico:** Organizar la puesta en común como una simulación física de **Consejo de Administración**: un equipo presenta su rescate de 60 días de pie frente a dos "consejeros" (otros alumnos con tarjeta de rol: *Director Financiero* y *Jefe de Compras*) que les hacen 2 preguntas incisivas.
- **Tablero Kanban de ejemplo:** Mostrar un tablero físico o proyectado con post-its moviéndose por columnas (*Backlog -> Data Spike -> Preparación -> Validación usuario -> Done*) para tangibilizar el límite WIP.

### Sesión online síncrona
- **Tablero colaborativo en vivo:** Preparar en Miro/Mural/FigJam una pizarra con la matriz 2x2 de la Actividad 2 duplicada por equipos y tarjetas arrastrables con las 6 peticiones; todos los grupos ven el resultado global al volver de las salas reducidas (*breakout rooms*).
- **Micro-interacciones:** Durante las exposiciones, utilizar reacciones o encuestas rápidas de Zoom/Teams para decidir casos límite (por ejemplo: *"¿Aceptaríais entregar un MVP sin automatizar la carga aún, cargando CSV manual durante 3 semanas? Sí / No"*).
- **Caso práctico:** Compartir un documento estructurado con temporizador visible en pantalla (15 min diagnóstico y recorte + 25 min diseño de los 3 sprints + 10 min DoD y validación) para mantener el foco en remoto.

### Sesión asíncrona (trabajo previo y posterior en campus virtual)
- **Trabajo previo (20 min):** Píldora en vídeo de 6 minutos repasando CRISP-DM + breve lectura del contexto de *Ferretería Industrial Norteña S.A.* para que en la sesión síncrona se pueda ir directamente al análisis sin consumir 10 minutos leyendo el enunciado.
- **Modalidad 100 % asíncrona:** Dos cápsulas grabadas (20 min cada una), cuestionario interactivo de clasificación de iniciativas en la matriz 2x2 con feedback explicativo automático, y resolución escrita del caso práctico en formato "Memo ejecutivo de rescate a 60 días" (máximo 2 páginas) con revisión cruzada entre compañeros.
- **Seguimiento:** Entrega de la **Hoja de Ruta de MVP Analítico propio** en el campus virtual (plazo 72 horas) con devolución específica del formador centrada en dos aspectos: si el alcance cabe realmente en 4-6 semanas y si el criterio de parada es suficientemente concreto.

---

## 10. Conexión con el programa

- **Qué conocimientos previos refuerza:** Integra la mentalidad ágil y de experimentación vista en bloques anteriores de innovación y gestión de proyectos con las arquitecturas básicas (Tema 1) y los KPIs/gobernanza (Tema 2) del Bloque 9.
- **Qué competencias desarrolla:** Gestión ágil de la incertidumbre en proyectos tecnológicos, priorización orientada a retorno temprano, diseño de MVPs analíticos, negociación de alcance con dirección/proveedores y toma de decisiones basada en evidencia experimental.
- **Conexión con el tema anterior (Bloque 9, Tema 2 — Big data en proyectos):** En el Tema 2 se establecieron los KPIs oficiales, la calidad del dato y los roles de gobernanza; este Tema 3 aporta el método de ejecución ágil para convertir esos requisitos en productos de datos utilizables en semanas sin quedar atrapados en proyectos infinitos.
- **Conexión con el tema posterior (Bloque 9, Tema 4 — Inteligencia artificial en big data):** Dominar los *Data Spikes*, el ciclo CRISP-DM iterativo y la validación continua frente a una línea base es el requisito indispensable para el Tema 4, donde el alumnado evaluará y diseñará iniciativas de inteligencia artificial (modelos predictivos, segmentación, recomendación, detección de anomalías e IA generativa) que presentan aún mayor incertidumbre experimental.
- **Evidencia de aprendizaje que dejará el alumnado:** La **Hoja de Ruta de MVP Analítico Ágil** aplicada a su propio proyecto (continuación directa del Lienzo del Tema 1 y de los KPIs/Gobernanza del Tema 2), que conformará la base iterativa sobre la cual explorar oportunidades de IA en el Tema 4.

---

## Siguientes pasos para el formador

1. **Revisión de continuidad:** Comprobar los KPIs y problemas de calidad entregados por el alumnado en el Tema 2 para ayudarles a elegir un buen *Data Spike* en la Actividad 3 de esta sesión.
2. **Preparación de materiales visuales:** Preparar las 6 tarjetas de la Actividad 2 y el tablero visual de *Vertical Slicing* vs. *Horizontal Slicing* para que la diferencia resulte inmediatamente comprensible.
3. **Validación de referencias:** Revisar antes de la sesión cualquier artículo o vídeo externo recomendado sobre CRISP-DM o *Data Driven Scrum*, verificando enlaces y vigencia.
4. **Calibración del rol de comité en el caso práctico:** Preparar objeciones realistas para el caso de *Ferretería Industrial Norteña S.A.* (p. ej., *"El director financiero dice que ya pagamos por migrar los datos de 2015 y no quiere tirarlos a la basura"*) para trabajar explícitamente la falacia del coste hundido.
5. **Puente al Tema 4:** En el cierre, lanzar una pregunta provocadora: *"Una vez que tu MVP descriptivo ya funciona en 4 semanas, ¿cuándo compensa realmente dar el salto a modelos de inteligencia artificial y cuándo basta una regla sencilla?"*.
