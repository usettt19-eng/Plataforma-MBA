# Tema 1. Planificación del cronograma, ruta crítica y optimización

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Tema 1. Planificación del cronograma, ruta crítica y optimización |
| **Bloque y posición dentro del programa** | Bloque 7: Planificación de cronograma, finanzas, personas y riesgos · Tema 1 de 4 (Tema 16 de 27 del programa) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Project Managers, mandos intermedios, consultores, ingenieros y aspirantes a la certificación PMP® |
| **Nivel de dificultad** | Intermedio / Avanzado |
| **Prerrequisitos** | Haber completado el Bloque 6 (en especial el Tema 3: planificación de gobernanza, abastecimiento y alcance, incluyendo la EDT/WBS y los paquetes de trabajo) y dominar nociones básicas de ciclos de vida predictivos, ágiles e híbridos |
| **Resultado general de aprendizaje** | Construir, calcular y optimizar un cronograma de proyecto realista combinando el Método de Diagramación por Precedencia (PDM), técnicas de estimación cuantitativa (PERT), el Método de la Ruta Crítica (CPM), la compresión del cronograma y la planificación de liberaciones ágiles/híbridas |

---

## 2. Objetivos de aprendizaje

Al finalizar este tema, el alumnado será capaz de:

1. **Diseñar** la estructura de actividades y el diagrama de red de un proyecto a partir de la EDT/WBS aplicando correctamente las relaciones PDM (FS, SS, FF, SF), dependencias, adelantos y retrasos. *(Nivel de Bloom: Crear)*
2. **Calcular** estimaciones de duración y rangos de incertidumbre mediante las técnicas análoga, paramétrica, ascendente y de tres valores (distribución triangular y distribución Beta/PERT). *(Nivel de Bloom: Aplicar)*
3. **Determinar** la ruta crítica, las fechas tempranas y tardías (paso hacia adelante y paso hacia atrás) y las holguras total y libre de un proyecto predictivo o híbrido. *(Nivel de Bloom: Analizar)*
4. **Comparar** las implicaciones sobre el plazo, el coste y el riesgo de la nivelación de recursos, la estabilización de recursos, la intensificación (*crashing*) y la ejecución rápida (*fast tracking*). *(Nivel de Bloom: Evaluar)*
5. **Integrar** un plan de liberaciones (*release planning*) basado en cadencia y velocidad del equipo dentro de una planificación híbrida alineada con los hitos del negocio. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1 Planificación de la gestión del cronograma, descomposición y secuenciación (PDM)

#### Explicación breve y clara
Planificar el cronograma no consiste en abrir una herramienta de diagramas de Gantt y dibujar barras al azar. Empieza por establecer **las reglas del juego** en el **Plan de Gestión del Cronograma**: cómo se descompondrán los paquetes de trabajo de la EDT/WBS en actividades ejecutables, qué unidades de medida y umbrales de variación se utilizarán, cómo se secuenciarán las dependencias y con qué frecuencia se actualizará el calendario. En proyectos predictivos se define una línea base del cronograma detallada; en enfoques ágiles e híbridos se combina una hoja de ruta de hitos con la **planificación gradual (*Rolling Wave Planning*)**, detallando el trabajo próximo y manteniendo el horizonte lejano a nivel de épicas o paquetes de trabajo.

#### Conceptos clave
- **Plan de Gestión del Cronograma**: componente del plan para la dirección del proyecto que define los criterios y procesos para desarrollar, monitorear y controlar el cronograma.
- **Descomposición de actividades e hitos**: paso de paquetes de trabajo (entregables en la EDT/WBS) a actividades con esfuerzo/duración e hitos de duración cero.
- **Método de Diagramación por Precedencia (PDM)**: técnica de red con nodos (actividades) y flechas (dependencias lógicas).
- **Tipos de dependencias**: obligatorias (lógica dura), discrecionales (lógica blanda/preferencial), externas (fuera del control del equipo) e internas (controladas por el equipo).
- **Adelantos (*Leads*) y retrasos (*Lags*)**: ajustes sobre la relación lógica entre dos actividades.

#### Definiciones necesarias
- **Fin a Inicio (FS)**: la actividad sucesora no puede comenzar hasta que haya finalizado la predecesora (la más habitual en proyectos).
- **Inicio a Inicio (SS)**: la sucesora no puede comenzar hasta que haya comenzado la predecesora.
- **Fin a Fin (FF)**: la sucesora no puede finalizar hasta que haya finalizado la predecesora.
- **Inicio a Fin (SF)**: la sucesora no puede finalizar hasta que haya comenzado la predecesora (muy infrecuente; ejemplo típico: relevo de turnos de vigilancia o corte de un sistema heredado al arrancar el nuevo).
- **Adelanto (*Lead*)**: cantidad de tiempo que una actividad sucesora se puede anticipar respecto a la predecesora (p. ej., `FS - 2 días` permite empezar pruebas dos días antes de cerrar toda la configuración).
- **Retraso (*Lag*)**: tiempo de espera obligatorio entre predecesora y sucesora (p. ej., `FS + 3 días` de fraguado de hormigón o espera de validación administrativa).
- **Hito (*Milestone*)**: punto o evento significativo del proyecto con **duración cero** (p. ej., "Firma de aceptación UAT").

#### Ejemplo práctico realista
Una pyme industrial de maquinaria agrícola en Valladolid implanta un sistema de comercio electrónico B2B para recambios. El equipo descompone el paquete de trabajo *"Catálogo digital"* en actividades: `A1. Extracción de tarifas del ERP`, `A2. Limpieza de fichas técnicas`, `A3. Carga en plataforma e-commerce` y el hito `H1. Catálogo validado (0 días)`. Establece una relación `A1 → A2 (SS + 1 día)` para que el equipo de marketing empiece a depurar fichas un día después de iniciar la extracción (dependencia discrecional con retraso), y una relación `A3 → H1 (FS)` obligatoria antes de abrir el entorno de pruebas.

#### Errores frecuentes
- Confundir la EDT/WBS (orientada a entregables) con la lista de actividades (orientada a verbos de acción y trabajo ejecutable).
- Asignar duración a los hitos (un hito siempre tiene duración 0).
- Abusar de relaciones `FS` artificiales cuando existen solapamientos naturales (`SS`/`FF`), inflando innecesariamente el plazo del proyecto.
- Confundir un **adelanto** (se resta tiempo a la espera, solapa) con un **retraso** (se añade espera obligatoria).

#### Preguntas que el alumnado debería poder responder
1. ¿Cuál es la diferencia práctica entre una dependencia obligatoria y una discrecional al intentar acortar un proyecto?
2. ¿En qué situación empresarial real tendría sentido utilizar una relación Inicio a Fin (SF)?
3. ¿Cómo evita la planificación gradual (*Rolling Wave Planning*) la parálisis por análisis en proyectos de transformación digital con requisitos cambiantes?

---

### 3.2 Técnicas de estimación de duraciones: análoga, paramétrica, ascendente y PERT

#### Explicación breve y clara
Estimar duraciones de forma rigurosa exige separar dos magnitudes que suelen mezclarse en las empresas: el **esfuerzo** (horas-persona necesarias) y la **duración** (días o semanas de calendario, afectada por disponibilidad, festivos, rendimiento y ley de rendimientos decrecientes). Para transformar el alcance en plazos realistas se seleccionan técnicas según la fase del proyecto y la disponibilidad de datos históricos: desde estimaciones rápidas en etapas tempranas (análoga) hasta modelos estadísticos (paramétrica), agregaciones detalladas (ascendente) y estimaciones probabilísticas por tres valores (triangular y PERT/Beta) que incorporan explícitamente la incertidumbre.

#### Conceptos clave
- **Estimación análoga**: estimación descendente basada en proyectos históricos similares; rápida y económica, pero menos precisa.
- **Estimación paramétrica**: usa relaciones estadísticas entre variables históricas y parámetros del proyecto (p. ej., 4 horas por pantalla migrada × 30 pantallas = 120 horas).
- **Estimación ascendente (*Bottom-Up*)**: agrega estimaciones detalladas desde las actividades más pequeñas hasta el proyecto; la más precisa, pero la que consume más tiempo y esfuerzo.
- **Estimación por tres valores**: captura la incertidumbre combinando el escenario **Optimista ($O$)**, **Más probable ($M$)** y **Pesimista ($P$)**.
- **Análisis de reservas**: reserva de contingencia de cronograma para riesgos identificados ("incógnitas conocidas").

#### Definiciones necesarias
- **Distribución Triangular**: otorga el mismo peso a los tres escenarios:
  $$E_{\text{triangular}} = \frac{O + M + P}{3}$$
- **Distribución Beta (PERT)**: pondera cuatro veces el valor más probable (estándar habitual en preparación PMP salvo que el enunciado indique distribución triangular):
  $$E_{\text{PERT}} = \frac{O + 4M + P}{6}$$
- **Desviación estándar ($\sigma$) y Varianza ($\sigma^2$)**:
  $$\sigma = \frac{P - O}{6} \qquad \text{y} \qquad \sigma^2 = \left(\frac{P - O}{6}\right)^2$$
- **Rangos de confianza (aproximación normal)**: $E \pm 1\sigma \approx 68,26\,\%$; $E \pm 2\sigma \approx 95,46\,\%$; $E \pm 3\sigma \approx 99,73\,\%$. *(Nota: cuando se agregan varias actividades en serie en una ruta, la desviación estándar total de la ruta se calcula como la raíz cuadrada de la suma de varianzas: $\sigma_{\text{ruta}} = \sqrt{\sum \sigma_i^2}$, nunca sumando desviaciones estándar directamente).*

#### Ejemplo práctico realista
Una consultora tecnológica en Madrid estima la integración de una pasarela de pagos en una pyme hotelera:
- Optimista ($O$): 4 días (API documentada y sin incidencias bancarias).
- Más probable ($M$): 6 días (ajustes habituales de homologación).
- Pesimista ($P$): 14 días (cambios en la normativa bancaria o rechazos de certificación).
- Cálculo PERT: $E = \frac{4 + 4(6) + 14}{6} = \frac{42}{6} = \mathbf{7\text{ días}}$; $\sigma = \frac{14 - 4}{6} = \mathbf{1,67\text{ días}}$.
- Con ~68,26 % de confianza, la tarea tardará entre **5,33 y 8,67 días**; con ~95,46 %, entre **3,67 y 10,33 días**. Por el contrario, una distribución triangular arrojaría $\frac{4+6+14}{3} = 8\text{ días}$, reflejando mayor peso de la cola pesimista.

#### Errores frecuentes
- Aplicar la fórmula Beta/PERT cuando el problema exige distribución triangular (o viceversa).
- Sumar las desviaciones estándar de las actividades de la ruta crítica en lugar de sumar sus **varianzas** y extraer la raíz cuadrada.
- Confundir el síndrome del estudiante (dejar el trabajo para el último momento) y la Ley de Parkinson (el trabajo se expande hasta llenar todo el tiempo disponible) con reservas bien gestionadas: el colchón oculto (*padding*) debe evitarse y sustituirse por reservas transparentes.
- Suponer que doblar el equipo divide la duración a la mitad (ignorando costes de coordinación y curva de aprendizaje).

#### Preguntas que el alumnado debería poder responder
1. ¿En qué fase del ciclo de vida elegirías una estimación análoga frente a una estimación ascendente y por qué?
2. Si una actividad tiene $O=2$, $M=5$ y $P=14$, ¿por qué la media PERT (6 días) es superior al valor más probable (5 días)?
3. ¿Qué diferencia existe entre añadir "colchón oculto" (*padding*) en cada tarea y establecer una reserva de contingencia centralizada?

---

### 3.3 Método de la Ruta Crítica (CPM), holguras y planificación de liberaciones ágiles/híbridas

#### Explicación breve y clara
El **Método de la Ruta Crítica (CPM)** calcula la secuencia más larga de actividades dependientes que determina la duración mínima posible del proyecto, asumiendo disponibilidad suficiente de recursos. Permite identificar dónde está el verdadero riesgo de plazo (las actividades sin holgura) y dónde existe margen de maniobra (actividades con holgura). En entornos ágiles e híbridos, esta lógica de red convive con la **planificación de liberaciones (*Release Planning*)**: mientras el macro-cronograma coordina hitos contractuales o dependencias entre departamentos, los equipos de desarrollo planifican entregas incrementales en iteraciones de duración fija (*timeboxed*) basándose en su velocidad histórica.

#### Conceptos clave
- **Paso hacia adelante (*Forward Pass*)**: calcula el inicio temprano (*Early Start*, ES) y fin temprano (*Early Finish*, EF) desde el principio hasta el final del diagrama. Ante múltiples predecesoras, se elige el **máximo** EF.
- **Paso hacia atrás (*Backward Pass*)**: calcula el fin tardío (*Late Finish*, LF) y el inicio tardío (*Late Start*, LS) desde el final hacia el inicio. Ante múltiples sucesoras, se elige el **mínimo** LS.
- **Holgura Total (*Total Float*, TF)** y **Holgura Libre (*Free Float*, FF)**.
- **Ruta Crítica y rutas subcríticas**: puede existir más de una ruta crítica; cuantas más rutas críticas o cercanas a críticas existan, mayor es el riesgo de incumplimiento del plazo.
- **Planificación de liberaciones (*Release Planning*)**: planificación de alto nivel que agrupa historias de usuario o épicas en entregas de valor usando la velocidad empírica del equipo.

#### Definiciones necesarias
- **Convención de numeración (Día 0 vs. Día 1)**: en este programa (y habitualmente en cálculos rápidos tipo PMP) se utiliza la **convención día 0** (el proyecto arranca en $t = 0$), donde $EF = ES + d$ y $LS = LF - d$. *(En la convención día 1 —inicio en el día 1— las fórmulas son $EF = ES + d - 1$ y $LS = LF - d + 1$; las holguras y la duración total del proyecto resultan idénticas en ambos métodos).*
- **Holgura Total ($TF$)**: tiempo máximo que una actividad puede retrasarse desde su inicio temprano **sin retrasar la fecha de finalización del proyecto** (ni incumplir una restricción de cronograma):
  $$TF = LS - ES = LF - EF$$
- **Holgura Libre ($FF$)**: tiempo máximo que una actividad puede retrasarse **sin retrasar el inicio temprano ($ES$) de ninguna actividad sucesora inmediata**:
  $$FF = \min(ES_{\text{sucesoras}}) - EF$$
- **Holgura negativa**: aparece cuando una fecha objetivo impuesta por el cliente o patrocinador es anterior a la fecha calculada por el paso hacia adelante; indica cuántos días debe comprimirse el cronograma.
- **Velocidad (*Velocity*)**: promedio de puntos de historia (o elementos completados) que un equipo ágil entrega de forma sostenible por iteración/sprint.

#### Ejemplo práctico realista
Una empresa de desarrollo de software de gestión en Valencia coordina un proyecto híbrido de 6 meses para una red de franquicias. El despliegue de servidores en la nube y la auditoría legal siguen una ruta crítica predictiva (CPM) con holgura cero porque dependen de proveedores externos. Paralelamente, las funcionalidades del portal web se organizan en un **plan de liberaciones** de 6 sprints de 2 semanas. Con un backlog de 180 puntos de historia y una velocidad demostrada de 30 puntos/sprint, el equipo programa 3 liberaciones (Release 1 tras el Sprint 2 con el MVP de pedidos, Release 2 tras el Sprint 4 con facturación automática y Release 3 tras el Sprint 6 con analítica).

#### Errores frecuentes
- Creer que la ruta crítica es siempre la ruta con mayor número de actividades (en realidad es la de **mayor duración total**).
- Pensar que una ruta crítica siempre tiene holgura igual a cero (puede tener **holgura negativa** si hay una fecha límite impuesta más corta, o positiva si la fecha límite es posterior a la duración calculada).
- Confundir holgura total con holgura libre (si una tarea consume toda su holgura total cuando $TF > FF$, retrasará el inicio temprano de su sucesora y consumirá la holgura compartida de la ruta).
- Comparar la velocidad de dos equipos ágiles distintos como métrica de productividad (los puntos de historia son relativos a cada equipo).

#### Preguntas que el alumnado debería poder responder
1. Si una actividad no crítica tiene $TF = 4\text{ días}$ y $FF = 1\text{ día}$, y se retrasa 2 días, ¿se retrasa el proyecto? ¿Qué ocurre con su actividad sucesora?
2. ¿Por qué un proyecto con tres rutas subcríticas (holgura de 1 día) es más arriesgado que uno con una única ruta crítica clara?
3. ¿Cómo se combina un hito contractual fijo con un plan de liberaciones basado en velocidad en un proyecto híbrido?

---

### 3.4 Optimización del cronograma: nivelación, estabilización y técnicas de compresión

#### Explicación breve y clara
El cronograma inicial obtenido mediante CPM suele presentar dos problemas reales: **sobreasignación de recursos** (p. ej., un mismo arquitecto de sistemas asignado a dos tareas simultáneas al 100 %) o una **duración superior a la fecha objetivo del negocio**. Para resolver lo primero se aplican técnicas de optimización de recursos (**nivelación** y **estabilización**); para acortar el plazo sin recortar alcance se emplean técnicas de compresión (**intensificación/*crashing*** y **ejecución rápida/*fast tracking***). Cada decisión implica un compromiso (*trade-off*) distinto entre plazo, coste, recursos y riesgo que el director de proyecto debe justificar ante el patrocinador.

#### Conceptos clave
- **Nivelación de recursos (*Resource Leveling*)**: resuelve sobreasignaciones o disponibilidad limitada de recursos moviendo tareas; **frecuentemente cambia y alarga la ruta crítica**.
- **Estabilización o alisado de recursos (*Resource Smoothing*)**: suaviza picos de demanda de recursos moviendo actividades **exclusivamente dentro de sus holguras libre y total**; **nunca altera la ruta crítica ni la fecha de fin**.
- **Intensificación (*Crashing*)**: acorta la duración de actividades de la ruta crítica asignando más recursos (personal adicional, horas extra, pagos urgentes) buscando el **menor coste incremental por unidad de tiempo**.
- **Ejecución rápida (*Fast Tracking*)**: solapa en paralelo actividades que originalmente eran secuenciales.
- **Análisis de escenarios "¿Qué pasa si?" y simulación**: evaluación del impacto de retrasos imprevistos sobre la fecha final.

#### Definiciones necesarias
- **Pendiente de coste de compresión (*Crash Cost Slope*)**:
  $$\text{Coste por unidad comprimida} = \frac{\text{Coste intensificado} - \text{Coste normal}}{\text{Duración normal} - \text{Duración intensificada}}$$
- **Regla de oro del *Crashing***: solo se intensifican actividades ubicadas **en la ruta crítica** (empezando por la de menor pendiente de coste). Si surge una segunda ruta crítica paralela, para seguir reduciendo el proyecto hay que comprimir **ambas rutas simultáneamente** (o una actividad común a ambas).
- **Regla de oro del *Fast Tracking***: solo es viable cuando las dependencias son **discrecionales** (no obligatorias). No suele aumentar el coste directo inicial, pero **incrementa significativamente el riesgo de retrabajo y defectos**.

#### Ejemplo práctico realista
Una pyme de ingeniería industrial en Bilbao debe entregar una planta piloto automatizada 1 semana antes de lo previsto para exhibirla en una feria internacional.
1. Primero detecta que su único programador PLC está asignado al 150 % en la semana 4: aplica **estabilización de recursos** moviendo una tarea no crítica (con 4 días de holgura) a la semana 5 sin tocar la fecha de fin.
2. Luego evalúa comprimir la ruta crítica en 3 días: aplica **crashing** contratando soporte externo durante 2 días en el montaje del cuadro eléctrico (coste marginal 900 €/día, el más barato de la ruta crítica) y **fast tracking** iniciando el manual de usuario en paralelo a las últimas pruebas funcionales (solapamiento de 1 día con riesgo controlado de pequeñas correcciones).

#### Errores frecuentes
- Aplicar *crashing* sobre una actividad que **no pertenece a la ruta crítica** (aumenta el coste sin reducir un solo día la duración del proyecto).
- Confundir nivelación (*leveling*, puede extender la fecha fin) con estabilización (*smoothing*, respeta siempre la fecha fin y las holguras).
- Recurrir al *fast tracking* en dependencias obligatorias (p. ej., intentar probar un código que aún no existe o construir la planta 2 antes de fraguar los pilares).
- Olvidar recalcular todas las rutas tras cada paso de *crashing*, pasando por alto la aparición de nuevas rutas críticas.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué técnica elegirías si tienes un presupuesto congelado pero margen para asumir cierto riesgo técnico de retrabajo: *crashing* o *fast tracking*?
2. ¿Por qué la estabilización de recursos puede no eliminar todas las sobreasignaciones de un proyecto?
3. Ante un recurso clave compartido entre una tarea crítica y otra con 3 días de holgura que coinciden 5 días, ¿qué ocurre si aplicas nivelación de recursos?

---

## 4. Metodología didáctica

La sesión tiene una duración total de **4 horas (240 minutos)** en formato online interactivo (adaptable a presencial o asíncrono según la sección 9).

| Fase | Duración | Actividad principal | Qué hace el formador | Qué hace el alumnado |
|---|---:|---|---|---|
| **1. Apertura y activación** | 25 min | Diagnóstico exprés + Actividad 1: *"¿Por qué fallan nuestros cronogramas?"* (encuesta interactiva + debate breve) | Presenta los objetivos del tema, lanza encuesta diagnóstica sobre errores reales en plazos y conecta con la EDT/WBS del Bloque 6. | Responde la encuesta diagnóstica, comparte un problema real de plazos de su empresa y distingue entregables de actividades. |
| **2. Exposición breve / Microlearning (Bloque A)** | 35 min | Micro-cápsulas sobre PDM (FS/SS/FF/SF, adelantos/retrasos) y estimación cuantitativa (análoga, paramétrica, ascendente y PERT) | Explica con ejemplos visuales paso a paso, resuelve en pizarra digital un cálculo PERT Beta vs. Triangular y señala trampas habituales del examen PMP. | Toma notas en su ficha de trabajo, ejecuta un cálculo rápido PERT en calculadora/hoja de cálculo y plantea dudas en el chat o micrófono. |
| **3. Actividad guiada (Aplicación)** | 35 min | Actividad 2: *Construcción de red PDM y cálculo completo de CPM + holguras* en salas pequeñas | Divide al alumnado en grupos de 3-4 personas en salas online, supervisa los tableros colaborativos y da pistas sin revelar la solución. | Dibuja la red, calcula ES/EF/LS/LF, identifica la ruta crítica, calcula $TF$ y $FF$ y contrasta resultados con su equipo. |
| **4. Exposición breve / Microlearning (Bloque B)** | 30 min | Optimización (nivelación vs. estabilización, *crashing* vs. *fast tracking*) y *Release Planning* ágil/híbrido | Contrasta visualmente los 4 mecanismos de optimización mediante matriz de *trade-offs* y muestra cómo se enlazan sprints y velocidad con hitos predictivos. | Clasifica 4 mini-escenarios situacionales tipo PMP en el chat (indicando si conviene *leveling*, *smoothing*, *crashing* o *fast tracking*). |
| **5. Análisis de caso práctico** | 50 min | Resolución en equipo del caso **LogiVía Ibérica S.L.** (PERT + CPM + compresión óptima bajo penalización contractual) | Presenta el caso y los datos, guía la revisión de supuestos en salas y verifica que los equipos detecten la aparición de la segunda ruta crítica al comprimir. | Calcula las duraciones PERT, construye la red CPM, calcula holguras total y libre, y diseña la estrategia de compresión más rentable para llegar a 16 días. |
| **6. Discusión guiada y transferencia** | 40 min | Puesta en común del caso + Actividad 3: *Auditoría de cronograma de tu proyecto real* | Modera la defensa de soluciones (2 equipos exponen), valida cálculos exactos y facilita la aplicación a los proyectos propios del alumnado. | Defiende su propuesta de compresión, compara *crashing* vs. *fast tracking* y redacta el mini-plan de optimización para un proyecto real de su empresa. |
| **7. Síntesis y cierre** | 25 min | Test sumativo tipo PMP (5 preguntas situacionales/cálculo), mapa resumen y autoevaluación | Aplica el mini-test cronometrado, comenta el porqué de cada respuesta correcta/incorrecta y enlaza con el Tema 2 (Finanzas y presupuesto). | Completa el test sumativo, realiza la autoevaluación de cierre y registra una acción inmediata para aplicar en su puesto de trabajo. |
| **TOTAL** | **240 min** | **Secuencia completa (4 horas)** | | |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Autopsia de un retraso real y mapa de dependencias PDM
- **Nombre**: *Del caos en el Gantt a la lógica de red PDM*
- **Objetivo**: Distinguir dependencias obligatorias, discrecionales, adelantos y retrasos a partir de experiencias reales del alumnado.
- **Instrucciones para el alumnado**:
  1. De forma individual (5 min), piensa en un proyecto reciente de tu organización que sufriera un retraso relevante y anota 4 actividades encadenadas que intervinieron en ese retraso.
  2. Clasifica cada relación indicando su tipo PDM (`FS`, `SS`, `FF`, `SF`), si la dependencia era obligatoria o discrecional y si existía algún retraso (*lag*) oculto (p. ej., tiempos de aprobación).
  3. En plenario (10 min), 3 voluntarios comparten su secuencia en el tablero colaborativo y el grupo propone al menos un adelanto (*lead*) viable para reducir el plazo sin aumentar riesgo crítico.
- **Materiales necesarios**: Pizarra colaborativa online (Miro, Mural o pizarra de la plataforma) y plantilla de tarjetas PDM.
- **Tiempo estimado**: 15 minutos (integrados en la Fase 1).
- **Rol del formador**: Facilitador; corrige al vuelo confusiones entre entregables y actividades y entre *leads* y *lags*.
- **Producto o entregable esperado**: Micro-diagrama de 4 nodos con etiquetas PDM y propuesta de solapamiento justificada.
- **Criterios de éxito**: Uso correcto de la notación PDM, diferenciación precisa entre lógica dura (obligatoria) y blanda (discrecional) y al menos un ajuste válido de adelanto/retraso.

### Actividad 2 (Aplicación): Laboratorio guiado de cálculo CPM y holguras
- **Nombre**: *Paso hacia adelante, paso hacia atrás y trampa de la holgura libre*
- **Objetivo**: Calcular sin errores el diagrama de red, la ruta crítica, la holgura total ($TF$) y la holgura libre ($FF$) de un proyecto de 6 actividades.
- **Instrucciones para el alumnado**:
  1. En grupos de 3-4 personas en salas online, descargad la tabla de 6 actividades proporcionada en la Ficha de Trabajo (Sección 8): `Inicio → P(2d) → Q(5d) y R(3d); Q → S(4d); R → T(3d); S y T → U(2d)`.
  2. Construid el diagrama de red en convención día 0 indicando en cada nodo `ES | d | EF` arriba y `LS | TF | LF` abajo.
  3. Calculad la duración total del proyecto, la ruta crítica, la **holgura total ($TF$)** y la **holgura libre ($FF$)** de las actividades `R` y `T`.
  4. Responded: si `R` se retrasa 2 días, ¿afecta a la fecha de fin del proyecto? ¿Afecta al inicio temprano de `T`?
- **Materiales necesarios**: Ficha de trabajo (Sección 8), hoja de cálculo o pizarra colaborativa con cajas de nodos preconfiguradas.
- **Tiempo estimado**: 35 minutos (Fase 3).
- **Rol del formador**: Mentor itinerante por salas; verifica que el grupo aplica el **máximo** en el paso hacia adelante y el **mínimo** en el paso hacia atrás.
- **Producto o entregable esperado**: Diagrama de red completo con los 6 valores por nodo y respuesta razonada sobre `R` y `T` (solución de referencia: ruta crítica `P-Q-S-U = 13 d`; ruta `P-R-T-U = 10 d`; en `R`: $ES=2, EF=5, LS=5, LF=8 \Rightarrow TF=3, FF=0$; en `T`: $ES=5, EF=8, LS=8, LF=11 \Rightarrow TF=3, FF=3$. Un retraso de 2 días en `R` NO retrasa el proyecto, pero SÍ retrasa 2 días el inicio temprano de `T` porque $FF_R = 0$).
- **Criterios de éxito**: 100 % de exactitud en `ES`, `EF`, `LS`, `LF`, distinción exacta entre $TF$ y $FF$ en la actividad `R`, y conclusión correcta sobre el impacto del retraso.

### Actividad 3 (Transferencia a la realidad laboral): Auditoría de optimización de tu propio proyecto
- **Nombre**: *Plan de choque realista para mi cronograma actual*
- **Objetivo**: Transferir las técnicas de estimación PERT, compresión y planificación híbrida de liberaciones a un proyecto real del puesto de trabajo del alumnado.
- **Instrucciones para el alumnado**:
  1. Selecciona un proyecto real (en curso o próximo) de tu empresa o emprendimiento que tenga presión de fecha límite.
  2. Identifica 3 actividades de su ruta crítica probable y estima para cada una sus valores $O$, $M$ y $P$, calculando su media PERT y su desviación estándar ($\sigma$).
  3. Selecciona una medida de optimización concreta (*crashing*, *fast tracking*, *smoothing* o reordenación de *release planning* hacia un MVP) y documenta su impacto en coste, riesgo y recursos usando la plantilla de la Sección 8.
  4. Comparte un resumen de 90 segundos en parejas o en el foro del campus para recibir retroalimentación entre pares.
- **Materiales necesarios**: Plantilla de Auditoría y Optimización de Cronograma (Sección 8).
- **Tiempo estimado**: 20 minutos de diseño en sesión + entrega ampliada asíncrona opcional en el campus.
- **Rol del formador**: Consultor crítico; cuestiona supuestos optimistas y verifica que no se proponga *crashing* fuera de la ruta crítica ni *fast tracking* sobre dependencias obligatorias.
- **Producto o entregable esperado**: Ficha cumplimentada de auditoría de cronograma con cálculo PERT de 3 tareas críticas y plan de optimización justificado.
- **Criterios de éxito**: Coherencia entre el tipo de restricción (plazo, presupuesto o recursos) y la técnica elegida; identificación explícita de al menos un riesgo secundario derivado de la optimización.

---

## 6. Caso práctico

### Contexto empresarial
**LogiVía Ibérica S.L.** es una pyme de logística y distribución refrigerada con sede en Zaragoza (85 empleados) inmersa en un proceso de transformación digital. Para renovar el contrato con su principal cliente (una cadena nacional de supermercados), debe implantar un nuevo **Portal WMS-Cloud y trazabilidad móvil por RFID** en su almacén central.

### Situación o problema
El contrato con el cliente estratégico incluye una cláusula estricta: el sistema debe estar operativo en un máximo de **16 días laborables** a partir del lunes de inicio. Cada día laborable de retraso a partir del día 16 conlleva una **penalización contractual de 3.500 €**. La dirección general te nombra Director/a del Proyecto y te pide:
1. Calcular la duración realista del proyecto utilizando estimaciones de tres valores (PERT Beta) y el Método de la Ruta Crítica.
2. Evaluar si el proyecto cumple el plazo de 16 días y qué actividades tienen mayor riesgo o holgura.
3. Proponer la estrategia de compresión más rentable para cumplir la fecha de 16 días (o decidir justificadamente si conviene asumir penalización), evaluando también qué ocurriría si el cliente solicitase adelantar el lanzamiento un día más (a 15 días).

### Datos disponibles

*(Convención de cálculo: inicio del proyecto en día 0; $EF = ES + d$; $LS = LF - d$. Todas las dependencias iniciales son Fin a Inicio — FS.)*

| ID | Actividad | Predecesora | $O$ (días) | $M$ (días) | $P$ (días) | Coste normal (€) | Duración mín. comprimida | Coste adicional por día comprimido (€/día) |
|---|---|---|---:|---:|---:|---:|---:|---:|
| **A** | Levantamiento de flujos y arquitectura WMS | — | 2 | 3 | 4 | 4.500 € | No comprimible | — |
| **B** | Configuración del núcleo WMS-Cloud | A | 4 | 6 | 8 | 12.000 € | 4 días (máx. -2 d) | 1.800 €/día |
| **C** | Integración API con ERP contable | A | 3 | 4 | 11 | 9.000 € | 4 días (máx. -1 d) | 1.500 €/día |
| **D** | Desarrollo de app de escaneo RFID para operarios | B | 4 | 5 | 6 | 10.000 € | 3 días (máx. -2 d) | 1.200 €/día |
| **E** | Migración de maestro de artículos y pruebas de carga | B, C | 2 | 3 | 4 | 6.000 € | 2 días (máx. -1 d) | 2.500 €/día |
| **F** | Pruebas integrales UAT y formación a jefes de turno | D, E | 3 | 4 | 5 | 8.000 € | 3 días (máx. -1 d) | 2.200 €/día |

**Información adicional del entorno:**
- El responsable técnico indica que la actividad **F** (pruebas UAT y formación) podría iniciarse 1 día antes de cerrar completamente **D** (relación `FS - 1 día`, *fast tracking*), pero esto introduce un riesgo moderado de tener que repetir pruebas con los jefes de turno si cambia la interfaz RFID.
- El equipo está preocupado por la actividad **C** (integración API con el ERP heredado), ya que la documentación del proveedor del ERP es antigua y su escenario pesimista alcanza los 11 días.

### Preguntas de análisis
1. ¿Cuál es la duración esperada (PERT Beta) y la desviación estándar ($\sigma$) de cada actividad? ¿Qué actividad presenta mayor incertidumbre individual?
2. ¿Cuál es la duración total inicial del proyecto, cuál es la ruta crítica y cuáles son las holguras total ($TF$) y libre ($FF$) de las actividades **C** y **E**?
3. ¿Cuál es el coste mínimo mediante *crashing* para reducir la duración del proyecto de 18 días a **16 días**? ¿Resulta rentable frente a la penalización contractual?
4. Tras comprimir el proyecto a 16 días, ¿qué cambio estructural ocurre en la red del proyecto? Si dirección pidiese bajar a **15 días**, ¿qué actividad debería comprimirse y por qué?
5. ¿Por qué no debes descuidar la actividad **C** aunque inicialmente no esté en la ruta crítica?

### Tarea a realizar
En equipos de 3-4 personas, elaborad una **Nota Ejecutiva de Cronograma** (máximo 1 página o 3 diapositivas) que incluya:
- Tabla completa de cálculos PERT ($\text{E}$ y $\sigma$) y CPM (`ES`, `EF`, `LS`, `LF`, `TF`, `FF`).
- Plan óptimo de compresión a 16 días con comparativa económica (coste de compresión vs. penalización evitada).
- Recomendación argumentada sobre el uso o descarte del *fast tracking* en **F** y medidas de control sobre **C**.

### Posibles soluciones o criterios de análisis

#### 1. Cálculos PERT y CPM inicial (convención día 0)

| ID | $E_{\text{PERT}} = \frac{O+4M+P}{6}$ | $\sigma = \frac{P-O}{6}$ | ES | EF | LS | LF | $TF = LS-ES$ | $FF = \min(ES_{\text{suc}})-EF$ | ¿Crítica? |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---|
| **A** | 3 d | 0,33 d | 0 | 3 | 0 | 3 | 0 | 0 | **Sí** |
| **B** | 6 d | 0,67 d | 3 | 9 | 3 | 9 | 0 | 0 | **Sí** |
| **C** | 5 d | **1,33 d** | 3 | 8 | 6 | 11 | **3** | **1** | No |
| **D** | 5 d | 0,33 d | 9 | 14 | 9 | 14 | 0 | 0 | **Sí** |
| **E** | 3 d | 0,33 d | 9 | 12 | 11 | 14 | 2 | 2 | No |
| **F** | 4 d | 0,33 d | 14 | 18 | 14 | 18 | 0 | 0 | **Sí** |

- **Rutas del proyecto**:
  - `A → B → D → F` = 3 + 6 + 5 + 4 = **18 días** (**Ruta Crítica**).
  - `A → B → E → F` = 3 + 6 + 3 + 4 = **16 días** (holgura 2 días).
  - `A → C → E → F` = 3 + 5 + 3 + 4 = **15 días** (holgura 3 días).
- **Incertidumbre de C**: tiene la mayor desviación estándar ($\sigma_C = 1,33\text{ días}$). Además, ilustra perfectamente la diferencia entre holgura total y libre: su $TF = 3\text{ días}$, pero su $FF = 1\text{ día}$ (porque `E` comienza en $ES=9$ y `C` acaba en $EF=8$; si `C` se retrasa 2 días ya desplaza el inicio temprano de `E` al día 10, aunque aún no retrase el proyecto). Si se materializa su escenario pesimista ($P=11$, +6 días sobre su media), superaría sus 3 días de holgura total y alargaría el proyecto a 21 días.
- **Varianza y desviación de la ruta crítica inicial (`A-B-D-F`)**:
  $$\sigma_{\text{RC}} = \sqrt{0,33^2 + 0,67^2 + 0,33^2 + 0,33^2} = \sqrt{0,111 + 0,444 + 0,111 + 0,111} = \sqrt{0,778} \approx 0,88\text{ días}$$

#### 2. Plan óptimo de compresión a 16 días (reducir 2 días)
- **Actividades comprimibles de la ruta crítica `A-B-D-F`** ordenadas de menor a mayor coste diario:
  1. **D**: 1.200 €/día (hasta 2 días).
  2. **B**: 1.800 €/día (hasta 2 días).
  3. **F**: 2.200 €/día (hasta 1 día).
  *(Nota: C cuesta 1.500 €/día, pero NO está en la ruta crítica; comprimirla sería un error grave).*
- **Acción óptima**: comprimir **D en 2 días** (pasa de 5 a 3 días).
  - Coste total de compresión: $2 \times 1.200\text{ €} = \mathbf{2.400\text{ €}}$ (el coste total del proyecto sube de 49.500 € a 51.900 €).
  - Penalización evitada: $2 \times 3.500\text{ €} = \mathbf{7.000\text{ €}}$.
  - **Ahorro neto**: **4.600 €** frente a asumir el retraso.
- **Cambio estructural crítico**: al bajar D a 3 días, las rutas quedan así:
  - `A → B → D → F` = **16 días (Crítica)**
  - `A → B → E → F` = **16 días (¡Nueva Ruta Crítica paralela!)**
  - `A → C → E → F` = 15 días (holgura reducida a solo 1 día).
- **¿Y si dirección pide llegar a 15 días?** Ahora hay dos rutas críticas simultáneas (`A-B-D-F` y `A-B-E-F`). Las únicas actividades comunes a ambas rutas que pueden comprimirse son **B** (1.800 €/día) y **F** (2.200 €/día). La opción óptima sería comprimir **B en 1 día por 1.800 €**, reduciendo ambas rutas críticas a 15 días simultáneamente (y convirtiendo también a `A-C-E-F` en tercera ruta crítica de 15 días).
- **Valoración del *fast tracking* en F**: dado que el *crashing* de D solo cuesta 1.200 €/día y evita el riesgo de retrabajo en formación con operarios, resulta preferible el *crashing* de D sobre el *fast tracking* de F; no obstante, mantener la posibilidad de solapar parcialmente la documentación de formación sirve como plan de contingencia si **C** sufriera retrasos.

### Preguntas de reflexión final
1. ¿Qué riesgos operativos y humanos aparecen cuando un proyecto pasa de tener una sola ruta crítica a tener dos o tres rutas críticas simultáneas?
2. Si LogiVía Ibérica hubiera utilizado un enfoque híbrido con una liberación MVP el día 16 (solo recepción y expedición básica) y analítica avanzada el día 22, ¿habría podido evitar parte del coste de *crashing*?

---

## 7. Evaluación

### Evaluación diagnóstica breve (inicio de sesión, 5 min)
Encuesta interactiva de 3 preguntas rápidas sin calificación (Mentimeter / formulario del campus):
1. ¿Cuál es la duración de un hito en un cronograma? *(A: 1 día / B: 0 días / C: Depende de la fase)* → Respuesta: **B**.
2. Si un miembro del equipo está asignado al 150 % en dos tareas y movemos una tarea sin alterar la fecha final del proyecto, ¿estamos aplicando nivelación o estabilización? → Respuesta: **Estabilización (*smoothing*)**.
3. ¿Qué diferencia hay entre esfuerzo y duración en tu día a día? *(Respuesta abierta breve)*.

### Evaluación formativa durante la sesión
- Observación directa y retroalimentación inmediata durante el laboratorio CPM (Actividad 2), verificando el cálculo manual de `ES/EF/LS/LF`, `TF` y `FF`.
- Preguntas de comprobación oral tras cada micro-cápsula (*check-in* de 4 mini-escenarios de compresión y recursos).
- Revisión guiada de los cálculos del caso **LogiVía Ibérica S.L.** en salas online antes de la puesta en común.

### Evaluación sumativa al final (mini-test tipo PMP, 15 min)
El alumnado responde individualmente 5 preguntas situacionales y de cálculo (puntuación mínima de superación: 4/5):

1. **(Cálculo PERT)** Una actividad crítica de migración tiene estimaciones $O = 5$ días, $M = 8$ días y $P = 17$ días. Usando la distribución Beta (PERT), ¿cuál es su duración esperada y su desviación estándar?
   - A) $E = 10$ d; $\sigma = 2$ d
   - B) $E = 9$ d; $\sigma = 2$ d *(Correcta: $(5+32+17)/6 = 54/6 = 9$; $(17-5)/6 = 2$)*
   - C) $E = 9$ d; $\sigma = 4$ d
   - D) $E = 8$ d; $\sigma = 1,5$ d
2. **(Situacional - Compresión)** Tu proyecto lleva un retraso de 5 días respecto a un hito regulatorio inamovible. El patrocinador te informa de que **no hay presupuesto adicional**, pero el alcance no puede reducirse. ¿Qué técnica debes evaluar primero?
   - A) Intensificación (*Crashing*) en la ruta crítica
   - B) Nivelación de recursos (*Resource Leveling*)
   - C) Ejecución rápida (*Fast Tracking*) en actividades críticas con dependencias discrecionales *(Correcta)*
   - D) Añadir reserva de gestión al cronograma
3. **(Conceptual - Holguras)** Una actividad no crítica tiene $ES = 4$, $EF = 7$, $LS = 8$ y $LF = 11$. Su única actividad sucesora tiene $ES = 9$. ¿Cuáles son su holgura total ($TF$) y su holgura libre ($FF$)?
   - A) $TF = 4$, $FF = 2$ *(Correcta: $TF = 8-4 = 4$; $FF = 9-7 = 2$)*
   - B) $TF = 2$, $FF = 4$
   - C) $TF = 4$, $FF = 4$
   - D) $TF = 3$, $FF = 2$
4. **(Situacional - Recursos)** Tu única especialista en ciberseguridad está asignada simultáneamente a una tarea de la ruta crítica y a otra con 2 días de holgura durante 4 días. El cliente exige mantener intacta la fecha de finalización. ¿Qué ocurre si aplicas *Resource Smoothing*?
   - A) Resolverá completamente la sobreasignación extendiendo el proyecto 2 días.
   - B) Solo podrá desplazar la tarea no crítica hasta 2 días sin cambiar la fecha fin, por lo que seguirá existiendo una sobreasignación parcial de 2 días que requerirá otra medida. *(Correcta)*
   - C) Cambiará la ruta crítica automáticamente.
   - D) Eliminará la dependencia obligatoria entre ambas tareas.
5. **(Híbrido / Ágil)** Un equipo Scrum trabaja con una velocidad estable de 25 puntos de historia por sprint de 2 semanas. El Product Owner necesita estimar en cuántos sprints podrá liberar un paquete de funcionalidades de 115 puntos con una fecha fija de feria en 10 semanas (5 sprints). ¿Qué acción refleja mejor la planificación de liberaciones?
   - A) Exigir al equipo aumentar su velocidad a 30 puntos por sprint mediante horas extra.
   - B) Confirmar que 5 sprints ofrecen una capacidad esperada de ~125 puntos, validar dependencias externas y reservar margen para posibles ajustes de alcance o incertidumbre. *(Correcta)*
   - C) Convertir los puntos de historia en horas exactas y bloquear cambios en el backlog.
   - D) Eliminar las pruebas UAT del último sprint para garantizar la entrega.

### Rúbrica de evaluación (Actividad práctica + Caso LogiVía Ibérica S.L.)

| Criterio | Insuficiente (0–4,9) | En desarrollo (5,0–6,9) | Adecuado (7,0–8,9) | Destacado (9,0–10) |
|---|---|---|---|---|
| **1. Modelado PDM y cálculos PERT (25 %)** | Confunde relaciones PDM o aplica erróneamente las fórmulas PERT en más de la mitad de las actividades. | Aplica la fórmula PERT con errores menores de redondeo o confunde ocasionalmente adelantos y retrasos. | Calcula con exactitud $E_{\text{PERT}}$ y $\sigma$ en todas las actividades y representa correctamente la red PDM. | Ejecuta todos los cálculos con 100 % de exactitud, interpreta la dispersión ($\sigma$) de actividades no críticas de alto riesgo (como C) y diferencia claramente distribución Beta y triangular. |
| **2. Cálculo CPM y holguras (25 %)** | No logra completar el paso adelante/atrás o identifica una ruta crítica incorrecta. | Identifica la ruta crítica correcta, pero comete errores al calcular $TF$ o confunde $TF$ con $FF$. | Determina con exactitud `ES`, `EF`, `LS`, `LF`, ruta crítica, $TF$ y $FF$ en todas las actividades. | Domina el cálculo completo, explica el impacto real de consumir $FF$ frente a $TF$ y calcula correctamente la desviación estándar combinada de la ruta crítica ($\sqrt{\sum \sigma^2}$). |
| **3. Optimización y compresión del cronograma (30 %)** | Propone comprimir actividades fuera de la ruta crítica o confunde *crashing* con *fast tracking*. | Aplica *crashing* sobre la ruta crítica, pero no elige la actividad más económica o ignora el impacto financiero frente a la penalización. | Diseña el plan de *crashing* de menor coste (D en 2 días = 2.400 €), demuestra el ahorro neto y evalúa *fast tracking*. | Además del óptimo a 16 días, detecta la aparición de la segunda ruta crítica, resuelve acertadamente el escenario a 15 días (comprimir B) y propone medidas de mitigación para el riesgo de C. |
| **4. Transferencia profesional y enfoque híbrido (20 %)** | Entrega incompleta o meramente teórica, sin conexión con proyectos reales. | Aplica los conceptos a su proyecto real de forma genérica sin cuantificar duraciones ni riesgos. | Presenta una auditoría práctica clara de su proyecto con estimación PERT y acción de optimización viable. | Integra con rigor criterios predictivos e híbridos (*release planning*), justifica el *trade-off* plazo-coste-riesgo y redacta recomendaciones ejecutivas listas para presentar a dirección. |

### Actividad de autoevaluación o reflexión
Al cierre de la sesión, cada participante responde en su diario de aprendizaje del campus (5 minutos):
1. ¿Qué concepto de hoy cambia de forma más directa cómo planifico los plazos en mi trabajo (PERT, diferencia entre $TF$ y $FF$, *smoothing* vs. *leveling* o coste marginal de *crashing*)?
2. En una escala de 1 a 5, ¿cuál es mi nivel de seguridad actual para resolver un ejercicio de red CPM y compresión bajo presión de tiempo en el examen PMP?
3. ¿Qué hábito concreto implantaré esta semana en mi equipo para reducir el "colchón oculto" (*padding*) y mejorar la fiabilidad de nuestras fechas de entrega?

---

## 8. Materiales y recursos

### Guion de diapositivas (slide por slide)

| Slide | Título | Contenido clave y recurso visual | Tiempo aprox. |
|---:|---|---|---:|
| **1** | Portada y objetivos | Título del tema, posición en Bloque 7 (1/4), 5 objetivos Bloom y enlace con el Bloque 6 (EDT/WBS). | 3 min |
| **2** | Diagnóstico: ¿por qué se retrasan los proyectos? | Encuesta en vivo sobre causas reales de retraso (optimismo, dependencias ocultas, multitarea, *padding*). | 7 min |
| **3** | Del alcance al cronograma | Esquema visual: EDT/WBS → Paquetes de trabajo → Actividades → Hitos (duración 0) → Planificación gradual (*Rolling Wave*). | 8 min |
| **4** | Método PDM: FS, SS, FF y SF | Diagramas limpios de las 4 relaciones lógicas + matriz de dependencias (obligatorias, discrecionales, externas, internas). | 9 min |
| **5** | Adelantos (*Leads*) y retrasos (*Lags*) | Ejemplo visual `FS - 2d` vs. `FS + 3d` y cuándo aceleran o frenan la red. | 6 min |
| **6** | Estimación de duraciones | Tabla comparativa: Análoga, Paramétrica, Ascendente y Tres valores (precisión, coste, momento de uso) + Esfuerzo vs. Duración. | 10 min |
| **7** | PERT Beta, Triangular y desviación estándar | Fórmulas destacadas, campana de Gauss ($1\sigma, 2\sigma, 3\sigma$) y ejemplo numérico resuelto. | 10 min |
| **8** | Método de la Ruta Crítica (CPM) | Reglas de paso hacia adelante (máximo) y paso hacia atrás (mínimo) en convención día 0 + nota rápida sobre convención día 1. | 10 min |
| **9** | Holgura Total ($TF$) vs. Holgura Libre ($FF$) | Diagrama comparativo mostrando visualmente cómo un retraso afecta a la sucesora aunque no afecte al proyecto. | 8 min |
| **10** | Laboratorio guiado CPM (Actividad 2) | Enunciado de las 6 actividades y plantilla visual de nodo (`ES/d/EF` y `LS/TF/LF`). | 5 min (+30 taller) |
| **11** | Optimización de recursos: Nivelación vs. Estabilización | Cuadro comparativo de dos columnas + histogramas antes/después mostrando impacto en la ruta crítica. | 10 min |
| **12** | Compresión: *Crashing* vs. *Fast Tracking* | Matriz de decisión plazo/coste/riesgo + fórmula de pendiente de coste + aviso de aparición de nuevas rutas críticas. | 12 min |
| **13** | Planificación de liberaciones ágil e híbrida | Esquema de *Story Mapping* + hoja de ruta de *Releases* basada en velocidad y sprints frente a hitos predictivos. | 8 min |
| **14** | Caso práctico: LogiVía Ibérica S.L. | Contexto, tabla de datos PERT/costes de compresión, restricción de 16 días y penalización de 3.500 €/día. | 5 min (+45 taller) |
| **15** | Solución comentada del caso | Red resuelta, tabla de holguras, decisión óptima (D -2d = 2.400 €), aparición de 2ª ruta crítica y escenario 15 días. | 15 min |
| **16** | Síntesis, errores de examen PMP y cierre | Checklist de 6 trampas típicas PMP, mini-test de 5 preguntas y puente hacia el Tema 2 (Costes y Presupuesto). | 15 min |

### Ficha de trabajo (para Actividad 2 — Laboratorio CPM)

> **Instrucciones**: Completa la tabla en convención día 0 ($EF = ES + d$; $LS = LF - d$).

| ID | Descripción breve | Predecesora | Duración ($d$) | ES | EF | LS | LF | $TF$ | $FF$ | ¿Crítica? |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---|
| **P** | Especificación técnica | — | 2 d | | | | | | | |
| **Q** | Desarrollo backend | P | 5 d | | | | | | | |
| **R** | Diseño de interfaz UI | P | 3 d | | | | | | | |
| **S** | Integración base de datos | Q | 4 d | | | | | | | |
| **T** | Maquetación frontend | R | 3 d | | | | | | | |
| **U** | Pruebas de humo y despliegue | S, T | 2 d | | | | | | | |

- Duración total del proyecto: `_____` días.
- Ruta crítica: `___________________`.
- Si `R` se retrasa 2 días, ¿cuál es el efecto sobre `T` y sobre el proyecto? `___________________________________`.

### Plantilla o herramienta práctica replicable

**Plantilla de Auditoría y Optimización de Cronograma (copiable a Excel / Google Sheets / Notion):**

```markdown
## Ficha de Optimización de Cronograma — [Nombre del Proyecto]
- **Fecha objetivo / restricción contractual:** [DD/MM/AAAA] | **Penalización o coste de retraso:** [€ / día]
- **Enfoque de ciclo de vida:** [Predictivo / Híbrido / Ágil con liberaciones]

### 1. Actividades críticas y análisis PERT
| Actividad | O | M | P | E (PERT) | Desv. Est. (σ) | Dependencia (Oblig./Discr.) | Coste Crashing (€/d) | Máx. compresión |
|---|---:|---:|---:|---:|---:|---|---:|---:|
| [Act. 1] | | | | =(O+4*M+P)/6 | =(P-O)/6 | | | |
| [Act. 2] | | | | | | | | |
| [Act. 3] | | | | | | | | |

### 2. Decisión de optimización seleccionada
- **Técnica aplicada:** [ ] Crashing  [ ] Fast Tracking  [ ] Resource Smoothing  [ ] Resource Leveling  [ ] Re-priorización MVP/Release
- **Días ahorrados:** [ ] días | **Coste incremental:** [ ] € | **Nueva(s) ruta(s) crítica(s) generada(s):** [ ]
- **Riesgo secundario identificado y medida de mitigación:** [Describir]
```

### Lecturas o recursos recomendados
- **Project Management Institute (PMI)**: *Guía de los Fundamentos para la Dirección de Proyectos (Guía del PMBOK®)* — Dominio de Desempeño de la Planificación y técnicas de modelado de cronograma *(verificar la numeración exacta de secciones en la edición PMBOK 8 vigente antes de impartir)*.
- **Project Management Institute (PMI)**: *Practice Standard for Scheduling* (estándar específico de referencia para buenas prácticas de programación y ruta crítica).
- **Project Management Institute (PMI) & Agile Alliance**: *Guía Práctica de Ágil* (secciones sobre planificación de liberaciones, iteraciones y métricas basadas en flujo/velocidad).
- **Herramienta del Campus**: Calculadora interactiva PERT/CPM integrada en el Campus de Certificación del programa.

### Vídeos, artículos y fuentes adicionales *(validar enlaces y vigencia antes de utilizarse)*
- **Recurso audiovisual sugerido**: Vídeos explicativos de resolución paso a paso de redes CPM y cálculo de holguras total/libre en convención día 0 y día 1 (p. ej., canal oficial de PMI o instructores acreditados ATP en YouTube — *validar disponibilidad, exactitud de la convención usada y subtítulos en español antes de enlazar en el aula*).
- **Artículo técnico sugerido**: Artículos sobre *Critical Path Method vs. Critical Chain Project Management (CCPM)* y prevención del síndrome del estudiante / Ley de Parkinson en *ProjectManagement.com* (*validar vigencia y acceso abierto antes de compartir con el alumnado*).
- **Guía de herramienta**: Tutoriales oficiales de MS Project, Primavera P6 o Jira Plans/Roadmaps para visualizar ruta crítica y hojas de ruta de liberaciones híbridas (*verificar versión de interfaz actual antes de la sesión*).

### Glosario de términos clave

| Término | Definición operativa |
|---|---|
| **Adelanto (*Lead*)** | Cantidad de tiempo en la que una actividad sucesora puede anticiparse respecto a su predecesora (genera solapamiento). |
| **Compresión del cronograma** | Conjunto de técnicas (*crashing* y *fast tracking*) orientadas a acortar la duración del proyecto sin reducir el alcance. |
| **Ejecución rápida (*Fast Tracking*)** | Técnica de compresión que ejecuta en paralelo actividades o fases que normalmente se harían en secuencia; incrementa el riesgo de retrabajo. |
| **Estabilización de recursos (*Resource Smoothing*)** | Técnica de optimización que ajusta actividades solo dentro de sus holguras libre y total para equilibrar la demanda de recursos sin alterar la ruta crítica ni la fecha final. |
| **Hito (*Milestone*)** | Punto o evento significativo de control dentro del proyecto cuya duración es siempre cero. |
| **Holgura libre (*Free Float*, FF)** | Tiempo que una actividad puede retrasarse sin demorar la fecha de inicio temprano ($ES$) de ninguna actividad sucesora inmediata. |
| **Holgura total (*Total Float*, TF)** | Tiempo que una actividad puede retrasarse desde su inicio temprano sin retrasar la fecha de finalización del proyecto. |
| **Intensificación (*Crashing*)** | Técnica de compresión que añade recursos a actividades de la ruta crítica para acortar su duración con el menor incremento de coste posible. |
| **Nivelación de recursos (*Resource Leveling*)** | Técnica de optimización que ajusta fechas de inicio y fin por limitaciones de disponibilidad de recursos; con frecuencia modifica y alarga la ruta crítica. |
| **PDM (Método de Diagramación por Precedencia)** | Técnica de construcción de diagramas de red donde los nodos representan actividades y las flechas sus relaciones lógicas (FS, SS, FF, SF). |
| **PERT (Distribución Beta)** | Técnica de estimación por tres valores ponderada: $E = (O + 4M + P)/6$, con desviación estándar $\sigma = (P - O)/6$. |
| **Planificación gradual (*Rolling Wave Planning*)** | Técnica iterativa de planificación donde el trabajo cercano se detalla en profundidad y el lejano se mantiene a alto nivel. |
| **Retraso (*Lag*)** | Tiempo de espera obligatorio que debe transcurrir entre la relación lógica de una actividad predecesora y su sucesora. |
| **Ruta Crítica (CPM)** | Secuencia más larga de actividades dependientes que determina la duración mínima del proyecto (presenta la menor holgura total, normalmente cero o negativa). |

---

## 9. Adaptaciones

Dado que la modalidad principal del **Programa de Preparación PMP y Dirección de Proyectos** es **100 % online interactiva**, a continuación se detallan las adaptaciones concretas para los tres formatos de impartición:

- **Sesión online síncrona (formato estándar del programa)**:
  - Utilizar salas de grupos reducidos (*breakout rooms*) de 3-4 personas con tableros colaborativos preconfigurados (nodos PDM editables en Miro/Mural o hoja compartida en Google Sheets) para evitar que el dibujo manual consuma tiempo de análisis.
  - Programar pausas activas de 10 minutos a las 2 horas (p. ej., tras la Fase 4) manteniendo el total efectivo de 240 minutos de trabajo guiado.
  - Usar encuestas en tiempo real y el chat para respuestas rápidas de cálculo PERT y clasificación de escenarios de compresión, manteniendo una participación constante.
- **Sesión presencial (para ediciones *in-company* o talleres presenciales)**:
  - Sustituir el tablero digital por **notas adhesivas (*post-its*) de colores** sobre papelógrafo (un color para actividades críticas y otro para no críticas) y rotuladores para trazar las flechas PDM; el alumnado mueve físicamente las tarjetas al simular *leveling*, *smoothing* y *fast tracking*.
  - Entregar la Ficha de Trabajo y el Caso LogiVía Ibérica impresos, realizando una breve galería (*gallery walk*) para que los equipos comparen sus diagramas de red antes de mostrar la solución oficial.
- **Sesión asíncrona (estudio autónomo guiado en el Campus)**:
  - Fragmentar las dos exposiciones en 4 píldoras de vídeo de 10–12 minutos (PDM, PERT, CPM/Holguras y Compresión/Release Planning) acompañadas de preguntas de comprobación embebidas al final de cada vídeo.
  - Facilitar la plantilla Excel/Calc interactiva de autoverificación para la Actividad 2 y el Caso LogiVía Ibérica, exigiendo la entrega de la **Nota Ejecutiva de Cronograma** y la **Auditoría del proyecto propio** (Actividad 3) en el foro evaluable con revisión obligatoria a al menos un compañero/a.
  - Habilitar el simulador sumativo de 5 preguntas tipo PMP con retroalimentación detallada automática por opción.

---

## 10. Conexión con el programa

- **Qué conocimientos previos refuerza**: Consolida directamente el **Bloque 6, Tema 3 (*Planificación: gobernanza, abastecimiento y alcance*)**, transformando la Estructura de Desglose del Trabajo (EDT/WBS) y los paquetes de trabajo en actividades secuenciadas e hitos; además, integra la velocidad y las iteraciones vistas en el **Bloque 5, Tema 1 (*Entrega ágil y medición*)** dentro de una planificación híbrida de liberaciones.
- **Qué competencias desarrolla**: Pensamiento analítico-cuantitativo, gestión de dependencias complejas, toma de decisiones bajo restricciones de plazo/coste/riesgo y dominio práctico del dominio **Procesos** del ECO PMP (junto con coordinación de equipos del dominio **Personas**).
- **Conexión con el tema anterior y posterior**:
  - *Tema anterior*: **Bloque 6, Tema 3 — Planificación: gobernanza, abastecimiento y alcance** (aporta la línea base del alcance y la EDT/WBS, insumos imprescindibles para descomponer el cronograma).
  - *Tema posterior*: **Bloque 7, Tema 2 — Planificación financiera, estimación de costes y presupuesto** (toma el cronograma y sus hitos como columna vertebral temporal para construir el presupuesto escalonado en el tiempo —curva S—, valorar el coste del *crashing* y conciliar límites de financiación; posteriormente ambos se medirán de forma conjunta mediante Valor Ganado en el **Bloque 8, Tema 4**).
- **Evidencia de aprendizaje que dejará el alumnado**:
  1. Diagrama de red PDM/CPM resuelto con cálculo exacto de holguras total y libre (Actividad 2).
  2. Nota Ejecutiva de optimización del caso **LogiVía Ibérica S.L.** con análisis PERT y decisión rentable de compresión.
  3. Ficha de auditoría y optimización aplicada a un proyecto real del alumno/a (Actividad 3) y resultado del mini-test sumativo tipo PMP.

---

## Siguientes pasos para el formador

1. **Verificar la alineación vigente**: Confirmar antes de impartir que las referencias al dominio de Planificación de PMBOK 8 y al *Examination Content Outline (ECO)* del PMI no han sufrido actualizaciones recientes en pesos o terminología.
2. **Preparar los tableros colaborativos**: Crear con antelación las copias de los tableros de la Actividad 2 (6 nodos vacíos) y las hojas de cálculo del caso **LogiVía Ibérica S.L.** (una por sala de trabajo) para ahorrar 10 minutos de logística durante la sesión online.
3. **Aclarar la convención CPM desde el minuto uno**: Confirmar al alumnado que todos los ejercicios de la sesión utilizan la convención día 0 (y mostrar un único ejemplo comparativo de día 1) para evitar errores mecánicos innecesarios.
4. **Revisar y validar recursos externos**: Comprobar que los vídeos o artículos complementarios recomendados en la Sección 8 sigan accesibles y sean técnicamente consistentes antes de publicarlos en el Campus.
5. **Guardar las notas del caso para el Tema 2**: Conservar el coste base (49.500 €) y el coste de *crashing* (+2.400 €) de LogiVía Ibérica como puente narrativo ideal para introducir la agregación de costes y las reservas de contingencia en la siguiente sesión.
