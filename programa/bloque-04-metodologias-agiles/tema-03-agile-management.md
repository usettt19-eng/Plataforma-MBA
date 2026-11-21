# Tema 3. Agile management

## 1. Ficha del tema

| Campo | Detalle |
| :--- | :--- |
| **Título del tema** | Agile management |
| **Bloque y posición dentro del programa** | Bloque 4: Metodologías ágiles (Tema 3 de 3 — Cierre de bloque) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Mandos intermedios y emprendedores |
| **Nivel de dificultad** | Intermedio |
| **Prerrequisitos** | Haber completado los Temas 1 (*Product management*) y 2 (*Lean startup*) de este bloque: gestión de producto, priorización, MVP y validación iterativa |
| **Resultado general de aprendizaje** | Implantar prácticas de gestión ágil (Scrum, Kanban, gestión del *backlog*, límites de trabajo en curso y retrospectivas) adaptadas a la realidad operativa de una pyme para entregar valor de forma iterativa e incremental, dar visibilidad al flujo de trabajo y fomentar la adaptación continua del equipo |

---

## 2. Objetivos de aprendizaje

Al finalizar este tema, el alumnado será capaz de:

1. **Diferenciar** el enfoque de trabajo predictivo (en cascada) del enfoque iterativo e incremental, justificando en qué tipos de tareas y proyectos de una pyme aporta mayor valor cada uno *(Nivel de Bloom: Analizar)*.
2. **Seleccionar** entre **Scrum**, **Kanban** o un modelo híbrido (*Scrumban*) según la naturaleza de la demanda, el nivel de interrupciones y la estructura de un equipo concreto *(Nivel de Bloom: Evaluar)*.
3. **Estructurar** y priorizar un *Product Backlog* operativo con historias de usuario claras, criterios de aceptación y definición de "Terminado" (*Definition of Done*) *(Nivel de Bloom: Aplicar)*.
4. **Diseñar** un tablero Kanban funcional con columnas basadas en el flujo real, políticas explícitas y límites de trabajo en curso (*WIP limits*) para detectar y reducir cuellos de botella *(Nivel de Bloom: Crear)*.
5. **Planificar** la cadencia de un *Sprint* y facilitar una **retrospectiva** orientada a acciones concretas de mejora continua sin derivar en sesiones de quejas estériles *(Nivel de Bloom: Crear)*.

---

## 3. Contenidos esenciales

### 3.1. Mentalidad ágil y trabajo iterativo e incremental en la pyme

**Explicación breve y clara**  
La agilidad (*Agile*) no consiste en trabajar más rápido ni en eliminar la planificación, sino en **planificar en ciclos cortos** para entregar valor pronto, recibir retroalimentación real y adaptarse antes de acumular errores costosos. Frente al modelo en cascada (*waterfall*), donde todo el alcance se cierra al principio y el cliente solo ve el resultado al final, el trabajo **iterativo** (refinar una solución en ciclos sucesivos) e **incremental** (entregar piezas utilizables de valor progresivo) reduce drásticamente el riesgo en proyectos digitales, comerciales y operativos donde los requisitos cambian.

**Conceptos clave**
- Los 4 valores esenciales del Manifiesto Ágil aplicados al negocio: personas e interacciones sobre procesos rígidos; producto funcionando sobre documentación excesiva; colaboración con el cliente sobre negociación contractual cerrada; respuesta ante el cambio sobre seguir un plan fijo.
- Diferencia entre **iterativo** (mejorar la calidad/enfoque de algo existente en rondas) e **incremental** (entregar partes funcionales completas que ya aportan valor al usuario).
- Los tres pilares del empirismo ágil: **Transparencia** (el trabajo y los bloqueos son visibles), **Inspección** (revisamos con frecuencia producto y proceso) y **Adaptación** (ajustamos el rumbo rápidamente al detectar desvíos).

**Definiciones necesarias**
- **Gestión ágil (*Agile Management*)**: Enfoque de organización del trabajo basado en entregas frecuentes de valor, transparencia radical, equipos multidisciplinares con autonomía y ciclos cortos de inspección y adaptación.
- **Entrega incremental**: Estrategia por la cual un proyecto se divide en porciones funcionales pequeñas que el cliente o usuario puede aprovechar antes de completar la totalidad del proyecto.

**Ejemplo práctico realista**  
Una pyme de distribución alimentaria en Galicia necesita renovar su sistema de facturación y catálogo B2B. En lugar de esperar 9 meses a estrenar todo el sistema de golpe (con alto riesgo de bloqueo en campaña de verano), planifica entregas incrementales cada 3 semanas: Incremento 1 (consulta de catálogo y pedidos de los 20 clientes piloto), Incremento 2 (descarga automática de facturas y albaranes), Incremento 3 (integración de incidencias de entrega). Desde la semana 3 ya obtiene uso real y corrige fallos antes de escalar a los 300 clientes.

**Errores frecuentes**
- Confundir "ágil" con "caótico" o "sin documentación ni disciplina" ("vamos improvisando sobre la marcha").
- Aplicar metodologías ágiles a procesos puramente repetitivos y estables donde un procedimiento estándar es suficiente, o pretender "agilidad" manteniendo aprobaciones burocráticas de 4 niveles jerárquicos.
- Llamar "entregas incrementales" a entregar en el mes 1 solo la base de datos y en el mes 2 solo el diseño gráfico (eso no entrega valor utilizable al cliente).

**Preguntas que el alumnado debería poder responder**
- ¿Cuál es la diferencia práctica entre trabajar de forma iterativa y trabajar de forma incremental?
- ¿Por qué el enfoque predictivo (cascada) suele fracasar en proyectos de transformación digital en pymes?
- ¿Qué ocurre si un equipo aplica reuniones ágiles pero no existe transparencia real sobre los bloqueos?

---

### 3.2. Scrum: roles, artefactos y cadencia de Sprints

**Explicación breve y clara**  
**Scrum** es el marco de trabajo ágil más extendido para equipos que desarrollan productos o proyectos complejos donde conviene proteger un foco de trabajo durante ciclos cortos y fijos llamados **Sprints** (normalmente de 1 a 4 semanas; en pymes suele funcionar especialmente bien el *Sprint* de 2 semanas). Scrum proporciona una estructura ligera de **responsabilidades claras**, **artefactos visibles** y **eventos con tiempo acotado (*timeboxed*)** para transformar necesidades del negocio en incrementos utilizables.

**Conceptos clave**
- **Responsabilidades (roles) en Scrum**:
  - **Product Owner (PO)**: Maximiza el valor del producto y gestiona y prioriza el *Product Backlog* (en pymes suele asumirlo un mando intermedio de negocio o el emprendedor).
  - **Scrum Master (SM)**: Facilita el proceso, vela por la salud del método, protege al equipo de interrupciones improductivas y ayuda a eliminar impedimentos (en pymes pequeñas puede ser un rol compartido o rotativo, nunca un jefe controlador).
  - **Equipo de Desarrollo / Implementación (*Developers*)**: Profesionales multidisciplinares responsables de planificar cómo ejecutar el trabajo y entregar el incremento con calidad.
- **Artefactos**: *Product Backlog* (lista priorizada global), *Sprint Backlog* (compromiso y plan del ciclo actual) e *Incremento* (resultado utilizable que cumple la *Definition of Done*).
- **Eventos del Sprint**:
  - *Sprint Planning* (planificación: qué objetivo de valor lograremos y cómo).
  - *Daily Scrum* (sincronización diaria de 15 min máximo centrada en el objetivo del Sprint y bloqueos, **no** es un parte de control al jefe).
  - *Sprint Review* (revisión del incremento funcionando con *stakeholders* o clientes para recoger *feedback* y adaptar el *backlog*).
  - *Sprint Retrospective* (mejora interna del equipo sobre cómo trabajar mejor en el siguiente ciclo).

**Definiciones necesarias**
- **Sprint**: Ciclo corto de duración fija (1-4 semanas) con un objetivo claro (*Sprint Goal*) al final del cual se entrega un incremento utilizable.
- **Definition of Done (DoD)**: Acuerdo explícito del equipo sobre los criterios mínimos de calidad que debe cumplir una tarea o funcionalidad para considerarse verdaderamente terminada (por ejemplo: probada, documentada, revisada y lista para el cliente).

**Ejemplo práctico realista**  
Un equipo de marketing digital y desarrollo web de una pyme hotelera (5 personas) trabaja en Sprints de 2 semanas. Al inicio de cada Sprint, el Product Owner (directora comercial) define un *Sprint Goal* claro: *"Reducir la fricción en la reserva desde móvil para la campaña de puente"*. Cada mañana hacen una *Daily* de 10 minutos frente al tablero para coordinarse y desbloquear dependencias; al final de las dos semanas enseñan en la *Sprint Review* el nuevo flujo de reserva real funcionando en producción al director del hotel, y cierran con una retrospectiva de 45 minutos.

**Errores frecuentes**
- Convertir la *Daily* en una reunión de 45 minutos donde cada persona rinde cuentas al jefe en lugar de coordinarse entre compañeros.
- Interrumpir el Sprint a mitad de camino metiendo urgencias diarias sin renegociar el alcance ("síndrome del paracaidista").
- Usar Scrum para equipos cuyo trabajo es 100 % reactivo (soporte técnico de incidencias o atención al cliente urgente), donde Kanban encaja mucho mejor.

**Preguntas que el alumnado debería poder responder**
- ¿Qué diferencia hay entre una *Sprint Review* y una *Sprint Retrospective*?
- ¿Por qué el *Product Owner* debe ser una sola persona y no un comité con prioridades contradictorias?
- ¿Qué problema resuelve acordar una *Definition of Done* explícita antes de empezar a trabajar?

---

### 3.3. Kanban: visualización, límites WIP y gestión del flujo continuo

**Explicación breve y clara**  
Mientras Scrum organiza el trabajo en ciclos cerrados (*Sprints*), **Kanban** es un método de gestión de **flujo continuo** ideal para operaciones, soporte, mantenimiento, administración, equipos comerciales o servicios donde las peticiones entran de forma impredecible. Su filosofía se resume en un lema práctico: **"Deja de empezar tareas y empieza a terminarlas"**. Visualizar todo el trabajo en un tablero y **limitar el trabajo en curso (*WIP*)** saca a la luz los cuellos de botella y reduce el estrés por multitarea.

**Conceptos clave**
- Principios operativos de Kanban: (1) Visualizar el flujo real de trabajo (no solo "Por hacer / Haciendo / Hecho", sino etapas reales como *Análisis, En curso, En revisión/cliente, Listo*); (2) **Limitar el WIP (*Work in Progress*)** por columna; (3) Gestionar el flujo y desatascar bloqueos; (4) Hacer explícitas las políticas de paso de columna; (5) Mejorar de forma colaborativa y evolutiva.
- Coste oculto del cambio de contexto: trabajar en 6 tareas a la vez alarga el tiempo de entrega de todas y aumenta los errores.
- Métricas de flujo esenciales:
  - **Lead Time**: Tiempo total desde que el cliente solicita algo hasta que lo recibe terminado.
  - **Cycle Time**: Tiempo desde que el equipo empieza a trabajar en la tarea hasta que la termina.
  - **Throughput**: Número de tareas o elementos completados por unidad de tiempo (por ejemplo, por semana).
- **Carriles (*Swimlanes*)** o clases de servicio (por ejemplo, carril *Expedite* para incidencias críticas reales con límite estricto de 1 tarjeta).

**Definiciones necesarias**
- **WIP (*Work in Progress*)**: Cantidad máxima de tareas simultáneas permitidas en una columna o fase del flujo; impide sobrecargar al equipo y obliga a resolver atascos antes de abrir trabajo nuevo.
- **Cuello de botella**: Etapa del proceso cuya capacidad es inferior a la llegada de trabajo, provocando colas y retrasos en todo el sistema.
- **Scrumban**: Enfoque híbrido que combina la cadencia de planificación y retrospectivas de Scrum con el tablero visual y los límites WIP de Kanban.

**Ejemplo práctico realista**  
Un despacho de ingeniería y licencias de 14 personas acumulaba 48 expedientes "en curso" simultáneamente y los clientes se quejaban de retrasos de 6 semanas. Al implantar un tablero Kanban con columnas reales (*Recogida de documentación → Cálculo técnico → Revisión de visado → Espera Ayuntamiento → Entregado*) y fijar un límite WIP de 4 expedientes en "Revisión de visado" (su cuello de botella principal), descubrieron que un único ingeniero sénior estaba saturado revisando mientras otros seguían abriendo expedientes nuevos. Redistribuyeron revisiones y bajaron el *Lead Time* medio de 42 a 21 días sin contratar personal.

**Errores frecuentes**
- Creer que tener un tablero Trello/Jira con columnas "Pendiente / En curso / Hecho" y 60 tarjetas en "En curso" es hacer Kanban (sin límites WIP ni políticas explícitas es solo una lista de tareas con colores).
- Clasificar todo como "urgente" en el carril *Expedite*, destruyendo la prioridad real.
- Medir productividad individual por número de tarjetas en lugar de optimizar el flujo global del equipo.

**Preguntas que el alumnado debería poder responder**
- ¿En qué casos conviene elegir Kanban frente a Scrum dentro de una pyme?
- ¿Por qué limitar el WIP hace que el equipo entregue **más** trabajo terminado y en menos tiempo?
- ¿Cuál es la diferencia entre *Lead Time* y *Cycle Time* y por qué le importa especialmente el primero al cliente?

---

### 3.4. Gestión del Backlog, retrospectivas y adaptación continua

**Explicación breve y clara**  
La verdadera potencia de la gestión ágil reside en dos mecanismos disciplinados: mantener un **Backlog sano y priorizado** (para trabajar siempre en lo que más valor genera) y celebrar **retrospectivas honestas y accionables** (para que el sistema mejore un poco en cada ciclo). Sin refinamiento del *backlog* los equipos se bloquean con tareas mal definidas; sin retrospectivas, repiten los mismos errores trimestre tras trimestre.

**Conceptos clave**
- Anatomía de una **Historia de Usuario** bien redactada: *"Como [tipo de usuario/cliente], quiero [acción/capacidad], para [beneficio/valor]"* + **Criterios de Aceptación** claros + principio **INVEST** (Independiente, Negociable, Valiosa, Estimable, Pequeña, Comprobable).
- **Refinamiento del Backlog (*Backlog Refinement*)**: Revisión periódica (por ejemplo, 45 min/semana) para trocear tareas grandes (*épicas*) en entregables pequeños que quepan en pocos días, aclarar dudas y reordenar prioridades según nuevo aprendizaje.
- Estructura profesional de una **Retrospectiva** en 5 pasos (45-60 min):
  1. Abrir el espacio (clima de seguridad psicológica).
  2. Recopilar datos hechos del periodo (qué funcionó, qué frenó al equipo).
  3. Generar comprensiones (buscar causas raíz, no culpables).
  4. Decidir **1 a 3 acciones concretas** con responsable y fecha de revisión.
  5. Cerrar la sesión y hacer seguimiento en la siguiente retrospectiva.
- Formatos sencillos de retrospectiva: *Start / Stop / Continue*, *Estrella de mar (Starfish)* o *Barco velero (Sailboat: viento a favor, anclas, rocas/riesgos, isla/objetivo)*.

**Definiciones necesarias**
- **Refinamiento del backlog**: Proceso continuo de aclarar, dividir, estimar de forma ligera y repriorizar los elementos más altos del *backlog* para que estén listos (*Definition of Ready*) antes de pasar a ejecución.
- **Retrospectiva**: Reunión periódica de inspección y adaptación en la que el equipo analiza su forma de trabajar, sus procesos y su colaboración para acordar mejoras concretas de aplicación inmediata.

**Ejemplo práctico realista**  
Un equipo de implantación de *ecommerce* en una pyme descubre en su retrospectiva quincenal (formato *Barco velero*) que el "ancla" principal es empezar tiendas online sin que el cliente haya entregado el catálogo ni las fotos, dejando 7 proyectos bloqueados a medias. En lugar de quejarse de los clientes, acuerdan dos acciones concretas para el próximo ciclo: (1) añadir una política explícita de entrada (*Definition of Ready*) exigiendo al menos 20 productos con fotos antes de pasar la tarjeta a "En desarrollo", y (2) enviar una plantilla guiada 7 días antes del arranque. Dos semanas después, el bloqueo por falta de material se reduce a la mitad.

**Errores frecuentes**
- Llenar el *backlog* con 300 tareas obsoletas de hace dos años que nadie limpia (efecto vertedero).
- Celebrar retrospectivas donde se identifican 12 problemas, pero no se asigna responsable ni se revisa en la siguiente sesión qué se cumplió (genera cinismo y abandono).
- Buscar culpables personales en lugar de mejorar el proceso, destruyendo la seguridad psicológica necesaria para detectar problemas a tiempo.

**Preguntas que el alumnado debería poder responder**
- ¿Qué diferencia a una tarea técnica ambigua ("arreglar facturación") de una historia de usuario lista para ejecutarse?
- ¿Por qué es mejor salir de una retrospectiva con 2 acciones pequeñas con dueño y fecha que con una lista de 15 buenos propósitos?
- ¿Qué necesita hacer un mando intermedio para que su equipo hable con honestidad en una retrospectiva? *(Puente hacia Bloque 5: Liderazgo)*.

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** cierra el Bloque 4 integrando práctica sobre flujo de trabajo, priorización del *backlog* y facilitación de retrospectivas.

| Fase | Tiempo exacto | Qué hace el formador | Qué hace el alumnado |
| :--- | :---: | :--- | :--- |
| **1. Apertura y activación** | 25 min | Conecta el cierre del Tema 2 (ya sabemos qué validar) con el reto de ejecutar y entregar valor sin caos; lanza encuesta diagnóstica rápida y dinamiza la Actividad 1 (*El coste de la multitarea*). | Participa en el ejercicio experiencial cronometrado de multitarea vs. foco con límite WIP y reflexiona sobre el impacto real en tiempo de entrega y calidad. |
| **2. Microlearning 1: Mentalidad ágil, Scrum y Backlog** | 30 min | Expone los apartados 3.1, 3.2 y gestión del *Backlog* (parte de 3.4): iterativo vs. incremental, roles/eventos de Scrum, historias de usuario y *Definition of Done*. | Redacta en su ficha 1 historia de usuario real de su empresa con 2 criterios de aceptación y contrasta un ejemplo en voz alta. |
| **3. Microlearning 2: Kanban, WIP, Métricas de flujo y Retrospectivas** | 30 min | Expone los apartados 3.3 y la dinámica de retrospectivas (3.4): diseño de tablero Kanban, límites WIP, *Lead Time / Cycle Time*, *Scrumban* y facilitación en 5 pasos (*Barco velero* / *Start-Stop-Continue*). | Analiza un tablero Kanban "enfermo" proyectado en pantalla y señala en 5 minutos dónde está el cuello de botella y qué límite WIP aplicaría. |
| **4. Pausa activa** | 15 min | Gestiona el descanso y prepara las mesas/salas con el caso práctico. | Descansa y revisa la documentación del caso. |
| **5. Análisis de caso práctico (en equipos)** | 55 min | Presenta el caso *CliniGest Digital S.L.* (3 equipos saturados: Producto, Implantación y Soporte). Circula por los equipos desafiando elecciones mecánicas (p. ej., forzar Scrum en soporte reactivo). | En equipos de 4-5 personas, decide el modelo ágil óptimo por área (Scrum vs. Kanban vs. Scrumban), diseña el tablero Kanban con límites WIP, prioriza el *backlog* del próximo Sprint y diseña una retrospectiva con 3 acciones concretas. |
| **6. Discusión guiada y simulación breve de Retrospectiva** | 25 min | Modera la puesta en común del caso *CliniGest* comparando tableros y decisiones de WIP; guía una micro-retrospectiva modelo de 10 minutos sobre cómo gestionar las resistencias típicas de dirección y equipo al implantar Agile. | Presenta sus soluciones justificadas, contrasta enfoques Scrum/Kanban y ensaya cómo formular acuerdos accionables sin culpabilizar personas. |
| **7. Actividad de transferencia individual / parejas** | 40 min | Guía la Actividad 3 (*Diseño de tu Sistema Ágil en la Pyme*), asesorando casos variados (equipos comerciales, operaciones, administración, IT o emprendedores en solitario/microequipos). | Diseña el tablero de trabajo (Kanban o Scrum), límites WIP, cadencia semanal de reuniones y primer *backlog* priorizado de 5 tareas para su propio equipo o negocio, revisándolo en parejas. |
| **8. Síntesis del Bloque 4, evaluación final y cierre** | 20 min | Cierra el tema y realiza la síntesis integradora del **Bloque 4 completo** (Product Management → Lean Startup → Agile Management), conduce evaluación sumativa y autoevaluación, y abre el puente al **Bloque 5, Tema 1 (Liderazgo)**. | Completa la evaluación breve final, realiza su autoevaluación y define el primer cambio ágil (tablero, límite WIP o retrospectiva) a implantar en 7 días. |
| **TOTAL** | **240 min** | — | — |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): El juego relámpago de la multitarea (por qué el WIP importa)

- **Nombre**: Multitarea vs. Flujo enfocado (*The Multitasking Name Game*).
- **Objetivo**: Experimentar de forma directa y medible cómo trabajar en demasiadas tareas simultáneas (WIP ilimitado) multiplica el tiempo de entrega y los errores frente al flujo limitado.
- **Instrucciones para el alumnado**:
  1. Prepara una hoja en blanco con 3 columnas encabezadas: **Proyecto A** (escribir los números del 1 al 10), **Proyecto B** (escribir las letras de la A a la J) y **Proyecto C** (escribir los números romanos del I al X).
  2. **Ronda 1 — Multitarea (WIP = 3)**: Cuando el formador diga "¡Ya!", debes avanzar alternando una fila cada vez: `1` → `A` → `I` → `2` → `B` → `II`... hasta completar las tres columnas. Anota el segundo exacto en que terminas cada proyecto y el tiempo total.
  3. **Ronda 2 — Foco / WIP = 1**: Repite el ejercicio, pero completando entero el Proyecto A (`1` al `10`), luego entero el Proyecto B (`A` a `J`) y luego el Proyecto C (`I` a `X`). Anota el tiempo en que entregas cada proyecto y el tiempo total.
  4. Compara en plenario (5 min): ¿cuándo recibió valor el "cliente del Proyecto A" en la Ronda 1 frente a la Ronda 2? ¿Cuánto tiempo total se perdió cambiando de contexto?
- **Materiales necesarios**: Papel y bolígrafo por participante, cronómetro visible en pantalla.
- **Tiempo estimado**: 15 minutos (dentro de la Fase 1).
- **Rol del formador**: Cronometrar en voz alta cada 5 segundos, recoger en pizarra 3 tiempos de ejemplo (Ronda 1 vs. Ronda 2) y conectar la vivencia directamente con la gestión del WIP y las entregas incrementales.
- **Producto o entregable esperado**: Tabla comparativa grupal de tiempos de entrega por proyecto y tiempo total con y sin multitarea.
- **Criterios de éxito**: El 100 % del grupo comprueba empíricamente la reducción drástica del *Lead Time* del primer entregable y del tiempo total al limitar el WIP.

---

### Actividad 2 (Aplicación): Rescate operativo — Caso CliniGest Digital S.L.

- **Nombre**: Transformación ágil por áreas en CliniGest Digital S.L.
- **Objetivo**: Seleccionar el marco ágil adecuado (Scrum, Kanban o Scrumban) para distintas realidades operativas, definir límites WIP, priorizar un *backlog* realista y estructurar la mejora continua mediante una retrospectiva.
- **Instrucciones para el alumnado**:
  1. Formad equipos de 4-5 personas y leed el Caso Práctico de la Sección 6 (10 min).
  2. **Decisión de marco por área (10 min)**: Decidid razonadamente qué enfoque (Scrum, Kanban o Scrumban) implantaríais en cada uno de los tres frentes de CliniGest (**Desarrollo de Producto**, **Implantación en Clínicas** y **Soporte Técnico**).
  3. **Diseño del tablero Kanban de Implantación y Soporte (15 min)**: Definid las columnas reales, los **límites WIP** por columna, una regla clara para urgencias (*Expedite*) y dos políticas explícitas (*Definition of Ready / Done*).
  4. **Priorización del Backlog del próximo Sprint de 2 semanas de Producto (10 min)**: Con una capacidad de **20 puntos**, elegid qué elementos de la tabla del caso entran en el Sprint, formulad el **Sprint Goal** y redactad una de las iniciativas como historia de usuario con 2 criterios de aceptación.
  5. **Retrospectiva inicial (10 min)**: Usando el formato *Start / Stop / Continue* o *Barco velero*, proponed exactamente **3 acciones de mejora** (con dueño y métrica de seguimiento) para el primer mes.
- **Materiales necesarios**: Caso práctico *CliniGest Digital S.L.*, plantilla de tablero Kanban (física A3 o digital en Miro), tabla de *backlog*.
- **Tiempo estimado**: 55 minutos (Fase 5).
- **Rol del formador**: Comprobar que no aplican "Scrum a todo" de forma rígida, verificar que los límites WIP sean coherentes con el tamaño real del equipo (no mayores que el número de personas) y revisar que el Sprint respeta la capacidad de 20 puntos.
- **Producto o entregable esperado**: Mapa de marcos por área, tablero Kanban con límites WIP y políticas, *Sprint Backlog* con *Sprint Goal* y plan de 3 acciones de retrospectiva.
- **Criterios de éxito**: Elección coherente de Scrum para desarrollo planificable y Kanban para soporte/implantación con flujo continuo; tablero con cuello de botella resuelto mediante WIP; Sprint ≤20 puntos alineado con impacto de negocio; acciones de retrospectiva concretas y verificables.

---

### Actividad 3 (Transferencia a la realidad laboral): Diseño de tu Sistema Ágil en la Pyme

- **Nombre**: Plano de implantación ágil para tu equipo o negocio (primeros 30 días).
- **Objetivo**: Transferir las herramientas de gestión ágil a la unidad de trabajo real del alumnado sin burocracia innecesaria.
- **Instrucciones para el alumnado**:
  1. Elige tu departamento, equipo de proyecto o negocio actual (si eres emprendedor individual o micropyme de 2-3 personas, aplícalo a tu flujo semanal de trabajo y colaboradores externos) (3 min).
  2. Completa individualmente la **Plantilla de Sistema Ágil Ligero** (27 min):
     - Elección justificada: **Scrum**, **Kanban** o **Scrumban**.
     - Esquema de tu **tablero visual** (4 a 6 columnas reales) + **límite WIP** de cada columna en curso + **1 política de entrada (*Ready*) y 1 de salida (*Done*)**.
     - Tu **Backlog priorizado** actual (5 elementos reales; al menos 2 redactados con formato Historia de Usuario o entregable de valor).
     - **Cadencia de reuniones ágiles** realista (día, duración exacta y objetivo de tu sincronización breve, revisión y retrospectiva mensual/quincenal).
     - **1 métrica de flujo** que empezarás a medir (*Lead Time*, tareas terminadas/semana o tasa de retrabajo).
  3. Comparte tu plano con un compañero/a durante 10 minutos (5 min cada uno) para detectar si el tablero es demasiado complejo o si los límites WIP son demasiado altos.
- **Materiales necesarios**: Plantilla "Sistema Ágil Ligero en 1 Página" (Sección 8).
- **Tiempo estimado**: 40 minutos (Fase 7).
- **Rol del formador**: Acompañar especialmente a mandos de áreas no tecnológicas (operaciones, administración, ventas, RR. HH.) para demostrar cómo un tablero Kanban y una retrospectiva quincenal transforman su día a día sin jerga innecesaria.
- **Producto o entregable esperado**: Plano "Sistema Ágil Ligero" completado y afinado tras revisión por pares.
- **Criterios de éxito**: El sistema se adapta al tamaño y tipo de demanda real del participante, incluye límites WIP concretos, evita exceso de reuniones y puede ponerse en marcha en menos de una semana.

---

## 6. Caso práctico

### Contexto empresarial
**CliniGest Digital S.L.** es una pyme de servicios tecnológicos con sede en Sevilla, **34 empleados** y **260 clínicas clientes** (dentales, fisioterapia y podología) en toda España. Su actividad se organiza en tres equipos clave:
- **Equipo de Desarrollo de Producto** (6 personas: 4 programadores, 1 diseñadora UX, 1 analista de producto): evoluciona el software SaaS de gestión de citas, historiales y facturación.
- **Equipo de Implantación** (5 consultores): migra datos, configura el software y forma al personal de cada nueva clínica vendida por comercial (entran entre 6 y 9 clínicas nuevas al mes).
- **Equipo de Soporte Técnico** (4 técnicos): atiende incidencias diarias, dudas y errores urgentes de las 260 clínicas activas.

### Situación o problema
El crecimiento comercial del último año ha colapsado la operación. La dirección está preocupada porque la tasa de cancelación (*churn*) de clínicas nuevas está subiendo, el estrés interno es alto y nadie sabe con certeza cuándo estará lista cada cosa:
- El equipo de **Desarrollo** intenta hacer "Scrum", pero los comerciales y soporte interrumpen a los programadores varias veces al día con urgencias directas por Slack/WhatsApp; el último supuesto "Sprint" duró 5 semanas y entregó solo el 40 % de lo prometido.
- El equipo de **Implantación** tiene **22 clínicas "en proceso" simultáneamente** (más de 4 por consultor). El tiempo medio de puesta en marcha ha subido de 18 a 47 días porque muchas clínicas se quedan paradas esperando migración de datos o validación de facturación, pero comercial sigue prometiendo arranques en 2 semanas.
- El equipo de **Soporte** vive apagando fuegos sin criterios de prioridad claros y escala incidencias a Desarrollo sin información mínima reproducida.

### Datos disponibles

**1. Radiografía operativa actual de los tres equipos**

| Área | Personas | Tipo de demanda | Problemas principales detectados | Métrica actual crítica |
| :--- | :---: | :--- | :--- | :--- |
| **Desarrollo de Producto** | 6 | Evolución planificable de producto + correcciones complejas | Interrupciones constantes; tareas gigantes sin trocear; sin *Definition of Done* (suben errores a producción) | 40 % de cumplimiento de compromisos; 14 fallos/mes tras despliegue |
| **Implantación** | 5 | Flujo continuo de altas de clínicas (6-9/mes) | 22 implantaciones abiertas a la vez; cuello de botella en "Migración de datos" (solo 1 persona sabe hacer scripts); clínicas sin datos listos | *Lead Time* medio: 47 días (objetivo comercial: ≤21 días) |
| **Soporte Técnico** | 4 | Reactiva e impredecible (35-50 tickets/día) | Todo entra como "urgente"; sin tablero común; 30 % de tickets escalados a Desarrollo vuelven atrás por falta de datos básicos | Tiempo medio resolución: 29 horas; alta frustración de clientes |

**2. Candidatos para el próximo Sprint de 2 semanas de Desarrollo (Capacidad real estimada: 20 puntos, reservando ya un 20 % para incidencias críticas)**

| ID | Elemento del Backlog | Solicitante | Puntos de esfuerzo | Impacto de negocio / operativo |
| :---: | :--- | :--- | :---: | :--- |
| **B1** | Herramienta guiada de importación CSV de pacientes para que cualquier consultor de Implantación haga migraciones sin depender de 1 solo técnico | Operaciones / Implantación | 8 | Desatasca el principal cuello de botella de Implantación; reduce ~15 días de *Lead Time* |
| **B2** | Corregir 3 errores recurrentes en el módulo de facturación que generan el 45 % de los tickets críticos de Soporte | Soporte / Clientes | 5 | Reduce drásticamente interrupciones a Desarrollo y bajas de clientes |
| **B3** | Recordatorio automático de citas por WhatsApp (petición muy valorada por clínicas actuales) | Producto / Clientes | 7 | Alta satisfacción y retención; puede trocearse (MVP solo confirmación básica = 5 pts) |
| **B4** | Nuevo panel de analítica avanzada con 18 gráficos para directores de cadenas de clínicas | Comercial (1 cliente potencial grande) | 13 | Aún sin validar con otras clínicas; consumiría casi todo el Sprint |
| **B5** | Plantilla obligatoria de reporte de error en el sistema de tickets (campos de captura, usuario y pasos) | Soporte / Desarrollo | 2 | Elimina el 30 % de tickets devueltos por falta de información |

### Preguntas de análisis
1. ¿Por qué está fracasando el "Scrum" actual del equipo de Desarrollo y qué medidas concretas debe tomar el *Product Owner* y el *Scrum Master* (o responsable de operaciones) para proteger el Sprint?
2. ¿Por qué NO tiene sentido forzar Sprints rígidos de 2 semanas en Soporte Técnico ni en Implantación, y qué método encaja mejor en cada área?
3. En Implantación, ¿dónde está exactamente el cuello de botella y cómo lo resolveríais combinando límites WIP, políticas explícitas y un elemento del *backlog* de Desarrollo?
4. Con una capacidad de 20 puntos en Desarrollo, ¿qué combinación de elementos maximiza el impacto global en la empresa y cuál debe quedarse fuera o dividirse?

### Tarea a realizar
En equipo, elaborad el **Plan de Rescate Ágil de CliniGest Digital S.L.** con cuatro entregables:
1. **Mapa de marcos ágiles**: Elección justificada (Scrum / Kanban / Scrumban) y cadencia mínima de coordinación para cada una de las 3 áreas.
2. **Tablero Kanban de Implantación** (columnas reales, límites WIP por columna, regla *Definition of Ready* antes de abrir clínica y gestión de urgencias).
3. **Planificación del próximo Sprint de Desarrollo (≤20 puntos)**: Elementos seleccionados, **Sprint Goal** claro en una frase, 1 **Historia de Usuario** bien redactada con 2 criterios de aceptación y **3 reglas de Definition of Done**.
4. **Plan de Retrospectiva del primer mes**: 3 acciones concretas de mejora continua (formato: *Acción + Responsable + Indicador de comprobación en 30 días*).

### Posibles soluciones o criterios de análisis (guía para el formador)
- **Marcos óptimos por área**:
  - *Desarrollo de Producto*: **Scrum** (Sprints de 2 semanas) o **Scrumban** (Scrum con tablero Kanban y carril separado/capacidad reservada del 20 % para fallos críticos de producción, canalizados únicamente vía filtro de Soporte/PO, jamás por mensajes directos al programador).
  - *Implantación*: **Kanban** de flujo continuo con límite WIP estricto (por ejemplo, bajar de 22 a máximo **8-10 clínicas activas en total** para 5 consultores, con límite de **2** en la columna de "Migración de datos") y política *Definition of Ready* (no arrancar implantación hasta recibir ficheros base de la clínica).
  - *Soporte Técnico*: **Kanban** puro con clases de servicio claras (Carril *Expedite* solo para caída de servicio o bloqueo de facturación, máx. 1-2 tickets simultáneos; carril estándar por orden de prioridad).
- **Selección óptima del Sprint de Desarrollo (capacidad ≤ 20 puntos)**:
  - **B1** (8 pts) + **B2** (5 pts) + **B5** (2 pts) = **15 puntos** — ataca directamente las tres hemorragias operativas (cuello de botella de migración, 45 % de tickets críticos y 30 % de rebotes de soporte).
  - Con los **5 puntos restantes** puede entrar la **versión troceada (MVP) de B3** (recordatorio básico de citas = 5 pts) para aportar también valor visible a las clínicas clientes, sumando **20 puntos exactos**, o dejar 3-5 puntos de margen para pruebas y deuda técnica.
  - **B4 (13 pts)** queda claramente fuera para refinamiento/descubrimiento previo (enlazando con Temas 1 y 2).
- **Sprint Goal sólido**: *"Estabilizar la operación reduciendo a la mitad los fallos críticos de facturación y desbloqueando las migraciones de nuevas clínicas"*.
- **Acciones de retrospectiva esperadas**: (1) Eliminar peticiones directas por WhatsApp/Slack canalizando todo por el tablero/PO; (2) Formar a dos consultores adicionales o usar B1 para eliminar el punto único de fallo en migraciones; (3) Alinear a Comercial con los datos reales de *Lead Time* del tablero Kanban para prometer fechas realistas.

### Preguntas de reflexión final
- ¿Cómo impacta en la motivación y salud del equipo pasar de 22 proyectos abiertos sin visibilidad a un tablero con límite WIP de 8?
- ¿Qué papel debe desempeñar el gerente o mando intermedio cuando un cliente o comercial intenta saltarse el tablero y el *Product Owner*?
- ¿Por qué implantar tableros y rituales ágiles fracasa si el estilo de liderazgo sigue siendo autoritario y basado en el miedo al error? *(Puente directo al Bloque 5, Tema 1: Liderazgo)*.

---

## 7. Evaluación

### Evaluación diagnóstica breve (inicio de sesión, 5 min)
3 preguntas rápidas al comenzar la sesión:
1. ¿Cuál de estas afirmaciones describe mejor el trabajo ágil? *(a) Eliminar toda planificación y documentación, (b) Entregar valor en ciclos cortos inspeccionando y adaptando continuamente, (c) Hacer una reunión diaria de control de tareas.*
2. En tu equipo actual, si alguien tiene 8 tareas "en curso" a la vez, ¿dirías que es señal de alta productividad o de riesgo de cuello de botella?
3. ¿Qué diferencia principal existe entre Scrum y Kanban? *(respuesta breve en 1 frase o selección múltiple).*

### Evaluación formativa durante la sesión
- Comprobación en vivo durante el Microlearning 1 de 2 historias de usuario redactadas por el alumnado (verificando valor para el usuario + criterios de aceptación comprobables).
- Diagnóstico rápido grupal del "tablero Kanban enfermo" durante el Microlearning 2.
- Observación estructurada del formador en el caso *CliniGest Digital S.L.* revisando: diferenciación correcta Scrum/Kanban, realismo de límites WIP y coherencia del Sprint Goal con los 20 puntos de capacidad.

### Evaluación sumativa al final (10 min)
Entrega individual del plano **"Sistema Ágil Ligero en 1 Página"** (Actividad 3) más un cuestionario práctico breve de 4 preguntas situacionales (elegir Scrum vs. Kanban para 2 casos concretos, calcular/interpretar un exceso de WIP y seleccionar la mejor acción de retrospectiva).

### Rúbrica de evaluación (para el entregable "Sistema Ágil Ligero" y resolución del caso)

| Criterio | Insuficiente (1) | En desarrollo (2) | Adecuado (3) | Destacado (4) |
| :--- | :--- | :--- | :--- | :--- |
| **Elección del marco ágil (Scrum/Kanban/Scrumban)** (20 %) | Elige un marco al azar o aplica Scrum rígido a entornos puramente reactivos sin justificación. | Elige un marco parcialmente adecuado pero con argumentación genérica. | Justifica correctamente la elección según tipo de demanda, previsibilidad e interrupciones. | Diseña una arquitectura ágil a medida (incluyendo hibridación si aplica) perfectamente adaptada al tamaño y realidad de la pyme. |
| **Diseño del tablero, flujo y límites WIP** (25 %) | Se limita a 3 columnas genéricas sin límites WIP ni políticas explícitas. | Incluye columnas del flujo pero con límites WIP irreales (superiores a la capacidad) o sin políticas. | Diseña columnas fieles al flujo real, establece límites WIP sensatos y define políticas *Ready/Done*. | Optimiza el flujo identificando el cuello de botella real, fija límites WIP equilibrados, regla clara de urgencias y métricas de flujo (*Lead/Cycle Time*). |
| **Priorización y calidad del Backlog** (20 %) | Lista tareas técnicas ambiguas sin orden claro ni ajuste a capacidad. | Ordena tareas de forma básica pero sin historias de usuario ni criterios de aceptación. | Prioriza por valor/impacto respetando capacidad y redacta historias claras con criterios de aceptación. | Combina visión de negocio y desbloqueo operativo, trocea iniciativas grandes en incrementos viables y formula un *Sprint Goal* preciso. |
| **Retrospectiva y adaptación continua** (20 %) | Confunde retrospectiva con revisión de tareas o propone quejas sin plan de acción. | Propone deseos generales ("comunicarnos mejor") sin dueño ni verificación. | Plantea 2-3 acciones concretas con responsable y plazo verificable tras analizar causas raíz. | Diseña una retrospectiva psicológicamente segura orientada a causas sistémicas con experimentos de mejora medibles en 30 días. |
| **Viabilidad de transferencia real** (15 %) | El diseño es excesivamente burocrático o inaplicable en su entorno laboral. | Es parcialmente aplicable pero sobrecarga al equipo con demasiadas reuniones o jerga. | Es ligero, claro y ejecutable de inmediato con los recursos reales de su equipo o negocio. | Presenta un plan de arranque en 7 días sin fricciones que integra a otros departamentos o clientes de forma realista. |

### Actividad de autoevaluación y reflexión (cierre del tema y del Bloque 4)
En los últimos 5 minutos, cada participante responde por escrito:
1. **Mi principal cuello de botella actual**: ¿En qué fase de mi trabajo diario se acumulan más tareas "empezadas pero sin terminar"?
2. **Integración del Bloque 4**: En una frase, ¿cómo conecto ahora *Product Management* (qué aporta valor), *Lean Startup* (cómo validarlo sin desperdicio) y *Agile Management* (cómo entregarlo en ciclos cortos)?
3. **Primer paso en 7 días**: ¿Qué herramienta ágil implantaré primero esta semana (tablero visual, límite WIP, *Daily* de 10 minutos o primera retrospectiva de 45 minutos)?

---

## 8. Materiales y recursos

### Guion de diapositivas (slide por slide)

| Slide | Título | Contenido clave y propósito |
| :---: | :--- | :--- |
| **1** | Portada: Agile Management — Entregar valor de forma continua | Título, objetivos de la sesión y ubicación como cierre del Bloque 4. |
| **2** | Actividad de activación: El coste oculto de la multitarea | Instrucciones cronometradas del ejercicio de 3 proyectos (WIP = 3 vs. WIP = 1). |
| **3** | Cascada vs. Iterativo e Incremental | Diagrama comparativo claro (cuándo sirve lo predictivo y cuándo lo empírico/ágil). |
| **4** | Mentalidad Ágil sin dogmas en la pyme | Los 4 valores del Manifiesto Ágil traducidos a decisiones diarias de negocio + 3 pilares (Transparencia, Inspección, Adaptación). |
| **5** | Scrum en una página: Roles, Artefactos y Eventos | Esquema visual del ciclo de Sprint (PO, SM, Equipo; Backlog, Incremento; Planning, Daily, Review, Retro). |
| **6** | Cómo escribir un Backlog sano | Formato Historia de Usuario + Criterios de Aceptación + *Definition of Ready* y *Definition of Done*. |
| **7** | Kanban: Deja de empezar, empieza a terminar | Principios de Kanban, columnas reales, políticas explícitas y el efecto de los límites WIP. |
| **8** | Métricas de flujo y diagnóstico de cuellos de botella | *Lead Time*, *Cycle Time*, *Throughput* + mini-reto visual ("Encuentra el atasco en este tablero"). |
| **9** | ¿Scrum, Kanban o Scrumban? Árbol de decisión | Tabla comparativa práctica para elegir el marco adecuado según cada departamento de la pyme. |
| **10** | Retrospectivas que sí funcionan | Secuencia en 5 pasos + dos formatos sencillos (*Barco velero* y *Start/Stop/Continue*) + regla de 1-3 acciones con dueño. |
| **11** | Errores clásicos del "falso Agile" en pymes | *Daily* como interrogatorio, Sprint interrumpido, tableros sin WIP y retrospectivas sin seguimiento. |
| **12** | Caso Práctico: CliniGest Digital S.L. | Radiografía de los 3 equipos (Producto, Implantación, Soporte), tabla de *backlog* (20 pts) y retos a resolver. |
| **13** | Taller de transferencia: Sistema Ágil Ligero en 1 Página | Instrucciones para diseñar el sistema ágil de su propio equipo o negocio. |
| **14** | Mapa integrador del Bloque 4 | Esquema unificado: Product Management (Qué y Por qué) → Lean Startup (Validar hipótesis) → Agile Management (Construir y entregar iterativamente). |
| **15** | Cierre y puente al Bloque 5 (Liderazgo) | Por qué la agilidad necesita liderazgo facilitador y seguridad psicológica; compromiso a 7 días. |

### Ficha de trabajo (para el alumnado durante la sesión)
- **Sección A**: Registro de tiempos de la Actividad 1 (Multitarea vs. WIP = 1).
- **Sección B**: Plantilla guiada para redactar 1 Historia de Usuario real + 2 Criterios de Aceptación + 3 puntos de *Definition of Done*.
- **Sección C**: Hoja de resolución del caso *CliniGest Digital S.L.* (cuadro de decisión de marcos, boceto de tablero Kanban, *Sprint Backlog* de 20 puntos y tabla de 3 acciones de retrospectiva).
- **Sección D**: Reflexión integradora de cierre del Bloque 4.

### Plantilla práctica replicable: *Sistema Ágil Ligero en 1 Página*

```markdown
## SISTEMA ÁGIL LIGERO PARA PYMES
- **Equipo / Área**: [Nombre] | **N.º de personas**: [X] | **Marco elegido**: [ ] Scrum  [ ] Kanban  [ ] Scrumban
- **Motivo de la elección**: [Ej.: Demanda continua con alta variabilidad / Proyectos planificables cada 2 semanas]

### 1. TABLERO VISUAL Y LÍMITES WIP
| Columna 1: Backlog priorizado | Columna 2: Listo (Ready) | Columna 3: En curso [WIP: __] | Columna 4: Revisión / Cliente [WIP: __] | Columna 5: Terminado (Done) |
| :--- | :--- | :--- | :--- | :--- |
| [Top 5 tareas priorizadas] | [Requisitos mínimos cumplidos] | [Trabajo activo] | [Validación] | [Valor entregado] |

- **Política de entrada (Definition of Ready)**: [Qué debe estar claro antes de empezar]
- **Política de salida (Definition of Done)**: [Qué debe cumplirse para darlo por terminado]
- **Regla para urgencias (Carril Expedite)**: [Qué cuenta realmente como urgencia crítica y límite máx.: 1]

### 2. TOP 5 DEL BACKLOG ACTUAL
1. Como [usuario/cliente], quiero [acción], para [beneficio]. *(Criterio de aceptación: ...)*
2. ...
3. ...
4. ...
5. ...

### 3. CADENCIA DE EVENTOS ÁGILES
- **Sincronización breve (Daily / 3 veces por semana)**: [Día/hora, 10-15 min] — Foco: desbloqueos.
- **Refinamiento / Planificación**: [Frecuencia y duración] — Foco: priorizar y trocear trabajo.
- **Revisión con clientes/negocio**: [Frecuencia y duración] — Foco: enseñar avance real y recoger feedback.
- **Retrospectiva**: [Cada 2 o 4 semanas, 45 min] — Foco: acordar 1-3 mejoras con dueño y fecha.

### 4. MÉTRICA DE FLUJO PRINCIPAL
- **Indicador elegido**: [Lead Time / Tareas terminadas por semana / Tasa de retrabajo]
- **Línea base actual**: [Dato estimado] | **Objetivo en 60 días**: [Meta realista]
```

### Lecturas y recursos recomendados
- **Ken Schwaber y Jeff Sutherland**, *La Guía de Scrum (The Scrum Guide)* (documento oficial breve de referencia, disponible gratuitamente en español; conviene confirmar la edición vigente de 2020 o posterior antes de compartir).
- **David J. Anderson**, *Kanban: Successful Evolutionary Change for Your Technology Business* (referencia esencial sobre gestión de flujo, límites WIP y mejora evolutiva).
- **Henrik Kniberg**, *Scrum y XP desde las trincheras* y *Kanban y Scrum: obteniendo lo mejor de ambos* (guías muy visuales, prácticas y orientadas a equipos reales).
- **Esther Derby y Diana Larsen**, *Agile Retrospectives: Making Good Teams Great* (referencia práctica sobre facilitación de retrospectivas en 5 fases).

### Vídeos, artículos y fuentes adicionales
*(Nota importante para el formador: todos los recursos, enlaces, guías y vídeos externos deben validarse en vigencia, edición y disponibilidad antes de impartir la sesión).*
- Web oficial de **ScrumGuides.org** para descargar la última versión oficial en español de la Guía de Scrum *(verificar versión vigente antes de enlazar)*.
- **Manifiesto por el Desarrollo Ágil de Software** (`agilemanifesto.org`) en su versión oficial en español *(validar enlace antes de usar)*.
- Vídeo ilustrativo breve de **Henrik Kniberg** sobre *Agile Product Ownership in a Nutshell* *(verificar disponibilidad de subtítulos en español antes de proyectar)*.
- Guías prácticas de herramientas accesibles para pymes (Trello, Jira, Notion, Asana o Microsoft Planner) para montar tableros Kanban con límites WIP *(comprobar cambios recientes de interfaz o planes gratuitos antes de recomendar)*.

### Glosario de términos clave

| Término | Definición operativa |
| :--- | :--- |
| **Backlog (Product Backlog)** | Lista única, viva y ordenada por valor de todas las funcionalidades, mejoras o tareas candidatas de un producto o equipo. |
| **Cycle Time** | Tiempo transcurrido desde que el equipo comienza a trabajar activamente en una tarea hasta que la termina. |
| **Daily Scrum** | Reunión diaria breve (máx. 15 minutos) en la que el equipo se sincroniza respecto al objetivo actual y visibiliza bloqueos. |
| **Definition of Done (DoD)** | Lista acordada de criterios de calidad que todo elemento debe cumplir para considerarse verdaderamente terminado y entregable. |
| **Historia de usuario** | Descripción corta y orientada al valor de una necesidad desde la perspectiva de quien la usará (*Como... quiero... para...*). |
| **Kanban** | Método visual de gestión de flujo continuo que optimiza la entrega limitando el trabajo en curso (WIP) y eliminando cuellos de botella. |
| **Lead Time** | Tiempo total percibido por el cliente desde que realiza una petición hasta que recibe el entregable terminado. |
| **Product Owner (PO)** | Rol responsable de maximizar el valor del producto y mantener el *backlog* claro y priorizado según objetivos de negocio. |
| **Retrospectiva** | Reunión periódica en la que el equipo inspecciona cómo trabaja y acuerda mejoras concretas para el siguiente ciclo. |
| **Scrum** | Marco ágil basado en ciclos cortos de duración fija (*Sprints*), roles definidos, artefactos transparentes e incrementos frecuentes de valor. |
| **Sprint** | Iteración de duración fija (habitualmente 1 a 4 semanas) con un objetivo claro al término del cual se entrega un incremento utilizable. |
| **WIP (Work in Progress)** | Número de tareas iniciadas y aún no terminadas; limitarlo reduce la multitarea y acelera el flujo real de entregas. |

---

## 9. Adaptaciones para modalidad híbrida

### Sesión presencial
- **Actividad 1 física**: Usar papel, bolígrafo y un cronómetro proyectado en grande; el sonido de los bolígrafos y la tensión de la Ronda 1 frente a la calma de la Ronda 2 generan un aprendizaje memorable.
- **Tablero físico del caso CliniGest**: Entregar cartulinas A3 y notas adhesivas de colores (azul = desarrollo, amarillo = implantación, rojo = urgencia) para construir el tablero Kanban y mover tarjetas simulando cómo se respeta el límite WIP.
- **Simulación de retrospectiva**: Pegar en la pared un esquema grande del *Barco velero* para que todo el grupo aporte en 5 minutos anclas y vientos a favor de implantar Agile en pymes.

### Sesión online síncrona (videoconferencia)
- **Actividad 1 en remoto**: Cada participante la realiza en una hoja física frente a la cámara (o en un documento en blanco) siguiendo el cronómetro compartido en pantalla, y luego vuelca sus tiempos de Ronda 1 y Ronda 2 en el chat o en una encuesta rápida de Mentimeter para comparar promedios en tiempo real.
- **Tableros digitales**: Preconfigurar en Miro, Mural, FigJam o Trello plantillas de tablero Kanban para cada grupo del caso *CliniGest Digital S.L.*, con tarjetas ya escritas para que inviertan el tiempo en decidir flujo, WIP y priorización, no en teclear texto.
- **Salas de grupos (*breakout rooms*)**: Organizar grupos de 4-5 personas durante 55 minutos para el caso (con recordatorios de fase en los minutos 20, 35 y 45) y parejas durante los últimos 10 minutos de la Actividad 3 para auditar mutuamente los límites WIP.

### Sesión asíncrona (campus virtual / trabajo autónomo)
- **Píldoras de vídeo y simulación guiada**: 4 vídeos cortos de 8-10 minutos (uno por subapartado) más una versión autoguiada de la Actividad 1 donde el alumno se cronometra a sí mismo y sube sus dos tiempos a un foro breve explicando qué aprendió.
- **Reto diagnóstico interactivo**: Cuestionario autoevaluable en el LMS con 3 escenarios de empresas (donde el alumnado debe elegir Scrum, Kanban o Scrumban y detectar el cuello de botella en un tablero con datos de WIP).
- **Entrega y coevaluación**: Subida del plano **"Sistema Ágil Ligero en 1 Página"** (Actividad 3) acompañado de la resolución individual o en grupo del caso *CliniGest Digital S.L.*, con evaluación entre pares guiada mediante la rúbrica de la Sección 7 y sesión breve de retroalimentación grabada por el formador.

---

## 10. Conexión con el programa

- **Qué conocimientos previos refuerza**: Cierra el arco metodológico completo del **Bloque 4**, integrando la estrategia y priorización de producto del **Tema 1 (*Product management*)** y la experimentación sin desperdicio del **Tema 2 (*Lean startup*)** dentro de un sistema operativo cotidiano capaz de entregar valor de forma sostenible.
- **Qué competencias desarrolla**: Organización del trabajo orientada al flujo de valor, gestión visual, control de capacidad y carga operativa, facilitación de mejora continua, gestión de expectativas con clientes/dirección y coordinación de equipos multidisciplinares.
- **Conexión con el tema anterior y posterior**:
  - *Tema anterior (Bloque 4, Tema 2: Lean startup)*: El Tema 2 enseñó a descubrir y validar qué merece la pena construir eliminando desperdicios de mercado; este Tema 3 resuelve cómo organizar al equipo para construir, implantar y mejorar continuamente esas soluciones mediante Scrum, Kanban y retrospectivas.
  - *Tema posterior (Bloque 5, Tema 1: Liderazgo)*: Al cerrar el Bloque 4 queda una conclusión evidente: ninguna metodología ágil funciona solo con tableros y rituales si el liderazgo no fomenta autonomía responsable, confianza, comunicación clara y seguridad psicológica en las retrospectivas. El **Bloque 5, Tema 1 (*Liderazgo*)** abordará precisamente las capacidades humanas y directivas necesarias para liderar equipos en entornos ágiles y de cambio constante.
- **Evidencia de aprendizaje que dejará el alumnado**: Un plano individual **"Sistema Ágil Ligero en 1 Página"** listo para implantar en su equipo o pyme (elección de marco, tablero visual con límites WIP, políticas *Ready/Done*, top 5 del *backlog* y cadencia de reuniones), además del **Plan de Rescate Ágil** completo elaborado en equipo para el caso *CliniGest Digital S.L.*.

---

## Siguientes pasos para el formador

1. **Preparar el cronómetro y tablero de ejemplo**: Tener a punto el cronómetro visible para la Actividad 1 (multitarea) y la diapositiva del "tablero Kanban enfermo" para el microejercicio de diagnóstico de cuellos de botella.
2. **Validar enlaces y edición vigente de la Guía de Scrum**: Comprobar antes de la sesión todos los recursos externos de la Sección 8 y confirmar la versión actualizada de la Guía de Scrum en español.
3. **Adaptar el lenguaje al perfil del grupo**: Si predominan perfiles no técnicos (operaciones, ventas, administración, emprendedores de servicios), reforzar ejemplos de Kanban y retrospectivas fuera del software para evitar que perciban Agile como "cosa exclusiva de programadores".
4. **Hacer visible el hilo completo del Bloque 4**: Dedicar 3 minutos del cierre (Diapositiva 14) a conectar los tres entregables que el alumnado ha construido a lo largo del bloque (*Product Strategy One-Pager* + *Kit de Validación Lean* + *Sistema Ágil Ligero*), mostrando que juntos forman un sistema completo de innovación y ejecución.
5. **Preparar el relevo hacia el Bloque 5 (Liderazgo)**: Recoger las dos principales resistencias culturales o humanas que hayan surgido en la discusión guiada sobre retrospectivas e interrupciones, para enlazarlas con el inicio del **Bloque 5, Tema 1 (*Liderazgo*)**.
