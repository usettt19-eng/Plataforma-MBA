# Tema 1. Entrega ágil y medición (flujo, velocidad, GQM y OKR)

## 1. Ficha del tema

| Campo | Detalle |
| :--- | :--- |
| **Título del tema** | Tema 1. Entrega ágil y medición (flujo, velocidad, GQM y OKR) |
| **Bloque y posición dentro del programa** | Bloque 5: Entrega ágil, medición y agilidad organizacional — Tema 1 de 2 (Tema 12 de 27 del **Programa de Preparación PMP y Dirección de Proyectos**) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Project Managers, mandos intermedios, Scrum Masters, Product Owners, responsables de transformación digital y aspirantes a la certificación PMP |
| **Nivel de dificultad** | Intermedio (enfoque PMBOK 8 + Agile + Híbrido) |
| **Prerrequisitos** | Haber completado el Bloque 4 (especialmente el Tema 1 sobre fundamentos ágiles/Lean/Kanban, Tema 2 sobre producto/ciclo de vida y Tema 3: *Creación de un entorno ágil*) y poseer nociones básicas del Manifiesto Ágil y liderazgo servicial |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado será capaz de gestionar la cadencia de entrega ágil y evaluar el desempeño del equipo mediante métricas de flujo, avance y valor (GQM y OKR), evitando sesgos habituales como la comparación de velocidad entre equipos y traduciendo el progreso técnico en informes ejecutivos orientados a resultados de negocio para patrocinadores |

---

## 2. Objetivos de aprendizaje

Al concluir esta sesión de 4 horas, el alumnado será capaz de:

1. **Priorizar y refinar** un Product Backlog orientado al valor de negocio aplicando criterios de descomposición (*INVEST*), preparación (*Definition of Ready*) y terminado (*Definition of Done*) para asegurar incrementos utilizables en cada iteración. *(Nivel de Bloom: Aplicar)*
2. **Diagnosticar** disfunciones en los eventos de cadencia ágil (planificación iterativa, *daily*, *review* y retrospectiva), así como bloqueos y dependencias entre equipos, proponiendo intervenciones propias del liderazgo servicial. *(Nivel de Bloom: Analizar)*
3. **Interpretar** métricas de trabajo y de flujo (*burndown*, *burnup*, velocidad, *story points*, *lead time*, *cycle time*, *throughput* y Diagrama de Flujo Acumulado o CFD) para detectar cuellos de botella y realizar previsiones empíricas de entrega. *(Nivel de Bloom: Analizar)*
4. **Evaluar** el uso adecuado o abusivo de la velocidad y los *story points* en entornos multiequipo, argumentando técnicamente por qué no debe compararse la velocidad entre equipos distintos ni utilizarse como indicador de productividad individual. *(Nivel de Bloom: Evaluar)*
5. **Diseñar** un cuadro de mando de entrega conectado al valor de negocio mediante el enfoque *Goal-Question-Metric* (GQM) y *Objectives and Key Results* (OKR) adaptado al *reporting* ejecutivo para patrocinadores en entornos ágiles e híbridos. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Product Backlog, priorización por valor y refinamiento continuo

#### Explicación breve y clara
En los enfoques ágiles e híbridos alineados con el enfoque de entrega de valor de PMBOK (8.ª edición y principios de desempeño del dominio de Entrega; *nota: verificar la numeración exacta de dominios y terminología definitiva de PMBOK 8 antes de impartir la sesión*), el alcance no se congela al inicio mediante un documento inmutable, sino que emerge de forma ordenada a través del **Product Backlog**. Este artefacto vivo recoge todo lo que puede aportar valor al producto o servicio (funcionalidades, mejoras técnicas, corrección de defectos, requisitos de cumplimiento e investigación o *spikes*).

La clave de una entrega ágil eficaz no reside en "hacer más cosas más rápido", sino en **maximizar el valor entregado minimizando el trabajo innecesario**. Para ello, el refinamiento del backlog (*backlog refinement*) es una actividad continua y colaborativa en la que el Product Owner y el equipo de desarrollo descomponen elementos grandes (épicas) en historias pequeñas y manejables justo a tiempo (*just-in-time*), aclaran criterios de aceptación y reordenan prioridades según el retorno esperado, el riesgo, las dependencias y el aprendizaje obtenido en iteraciones previas.

#### Conceptos clave
* **Product Backlog emergente y priorizado por valor:** Lista única, ordenada y dinámica que refleja la estrategia de producto.
* **Descomposición *just-in-time* (DEEP):** *Detailed appropriately, Estimated, Emergent, Prioritized*. Solo los elementos superiores del backlog deben estar suficientemente detallados para entrar en las próximas 1-2 iteraciones.
* **Criterios de priorización económica y de riesgo:** Valor de negocio, coste de la demora (*Cost of Delay*), WSJF (*Weighted Shortest Job First*), reducción de riesgo técnico y cumplimiento regulatorio.
* **Calidad en la entrada y en la salida:** *Definition of Ready* (DoR) como guía —no muro burocrático— para asegurar claridad antes de iniciar el trabajo, y *Definition of Done* (DoD) como contrato de calidad no negociable para considerar terminado un incremento.

#### Definiciones necesarias
* **Historia de usuario (*User Story*):** Descripción breve y centrada en la persona usuaria de una necesidad o capacidad, habitualmente formulada como *"Como [rol], quiero [funcionalidad] para [beneficio]"*, acompañada de una conversación y criterios de aceptación verificables.
* **Criterio INVEST:** Acrónimo que define la calidad de una buena historia de usuario: *Independent* (independiente), *Negotiable* (negociable), *Valuable* (valiosa), *Estimable* (estimable), *Small* (pequeña) y *Testable* (comprobable).
* **Spike:** Elemento de backlog acotado en tiempo (*timeboxed*) destinado a investigar una incertidumbre técnica o funcional para poder estimar y tomar decisiones con evidencia.
* **Definition of Done (DoD):** Conjunto explícito y compartido de criterios técnicos, funcionales, de pruebas, seguridad y documentación que debe cumplir un elemento para considerarse potencialmente desplegable o utilizable.

#### Ejemplo práctico realista (pyme en transformación digital)
Una pyme española de distribución alimentaria B2B (95 personas) decide digitalizar sus pedidos telefónicos mediante un portal web para hostelería. Inicialmente, su dirección comercial redacta una épica gigante: *"Crear portal de pedidos con catálogo, facturación automática, recomendaciones con IA y fidelización"*. Al aplicar refinamiento por valor y división vertical (*vertical slicing*), el equipo identifica que el 70 % de las incidencias actuales provienen de clientes que repiten exactamente el mismo pedido cada lunes. Priorizan primero una historia pequeña, valiosa y verificable: *"Como gerente de restaurante, quiero repetir mi último pedido en un clic con confirmación de stock para ahorrar 20 minutos semanales"*. Se deja el motor de recomendaciones con IA para una fase posterior, logrando entregas utilizables en la segunda semana y validando adopción real antes de invertir meses de desarrollo.

#### Errores frecuentes
* **Tratar el backlog como un "cubo de basura" sin poda:** Acumular cientos de peticiones obsoletas que nadie elimina, generando ruido y coste cognitivo.
* **Dividir historias por capas técnicas (corte horizontal):** Crear una historia solo de "base de datos", otra de "backend" y otra de "interfaz", impidiendo entregar valor verificable al cliente en la iteración.
* **Usar la DoR como barrera rígida (contrato interno):** Rechazar sistemáticamente cualquier colaboración alegando que "faltaba un detalle en el ticket", volviendo a dinámicas tipo cascada (*mini-waterfall*).
* **Ignorar la deuda técnica y los riesgos en la priorización:** Priorizar únicamente peticiones visibles de negocio hasta que el sistema se vuelve frágil y lento de modificar.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué diferencia hay entre dividir una épica en corte vertical frente a corte horizontal, y por qué afecta a la entrega de valor?
2. ¿Cómo equilibrarías en el backlog una funcionalidad muy demandada por ventas frente a un riesgo crítico de seguridad o deuda técnica?
3. ¿Por qué la *Definition of Done* debe ser un acuerdo común y no negociable al cierre de la iteración, incluso bajo presión de fechas?

---

### 3.2. Planificación iterativa, eventos de cadencia, incrementos utilizables y gestión de impedimentos y dependencias

#### Explicación breve y clara
La entrega ágil sustituye los grandes lotes de trabajo y las revisiones tardías por **ciclos cortos de inspección y adaptación** (*cadence*). Cada evento cumple una función distinta dentro del control empírico del proceso (transparencia, inspección y adaptación):

* **Planificación de la iteración (*Iteration / Sprint Planning*):** Alinea al equipo sobre *por qué* es valiosa la iteración (objetivo de la iteración), *qué* elementos del backlog se seleccionan según capacidad real y *cómo* se ejecutará el trabajo.
* **Reunión diaria (*Daily Standup / Daily Scrum*):** Evento breve (máximo 15 minutos) del equipo para inspeccionar el avance hacia el objetivo de la iteración, sincronizar tareas y detectar bloqueos. En equipos maduros suele recorrerse el tablero de derecha a izquierda ("caminar el tablero" o *walk the board*) priorizando cerrar trabajo en curso antes de abrir nuevo.
* **Revisión de la iteración (*Iteration / Sprint Review*):** Sesión de trabajo con patrocinadores, clientes y usuarios clave para demostrar el **incremento utilizable**, recoger retroalimentación real del mercado/negocio y adaptar el Product Backlog. No es una presentación de diapositivas sobre "lo duro que ha trabajado el equipo".
* **Retrospectiva (*Retrospective*):** Espacio de seguridad psicológica donde el equipo inspecciona sus propios procesos, interacciones, herramientas y DoD, acordando 1 o 2 acciones concretas y medibles de mejora para la siguiente iteración.

Para que la cadencia genere resultados, el equipo debe producir **incrementos utilizables** (que cumplan la DoD) y gestionar proactivamente **dependencias** (internas o con proveedores/departamentos externos) e **impedimentos** (obstáculos que frenan el flujo y exceden la autonomía inmediata del equipo). En el examen PMP, ante un impedimento o conflicto de dependencias, el Project Manager o líder servicial protege al equipo, facilita la eliminación del bloqueo a nivel organizacional y fomenta la autoorganización en lugar de microgestionar.

#### Conceptos clave
* **Empirismo (Transparencia, Inspección, Adaptación):** Base del gobierno ágil frente a la planificación predictiva a largo plazo.
* **Incremento utilizable:** Suma de todos los elementos completados en la iteración y anteriores que cumplen la DoD y aportan capacidad funcional verificable.
* **Gestión visual de dependencias e impedimentos:** Tablero de bloqueos (*impediment log / blocker board*), matriz o tablero de dependencias entre equipos y políticas explícitas de escalado.
* **Liderazgo servicial (*Servant Leadership*):** Enfoque del Project Manager/Scrum Master centrado en despejar obstáculos, facilitar la colaboración con áreas externas y proteger el foco del equipo.

#### Definiciones necesarias
* **Objetivo de la iteración (*Sprint / Iteration Goal*):** Meta coherente y de negocio que da sentido conjunto a las historias seleccionadas y ofrece flexibilidad táctica si surge un imprevisto técnico.
* **Impedimento:** Cualquier obstáculo organizativo, técnico o administrativo que detiene o ralentiza el avance del equipo y requiere intervención facilitadora o escalado (ej. falta de permisos en entornos, aprobación legal bloqueada, proveedor retrasado).
* **Dependencia:** Relación en la que el progreso o despliegue de un elemento de trabajo requiere la finalización o colaboración previa de otro equipo, sistema o tercero.

#### Ejemplo práctico realista (pyme en transformación digital)
Una asesoría fiscal y laboral en expansión (60 empleados) implanta un portal de nóminas y firma electrónica con un equipo ágil interno de 6 personas. Al principio, su *Daily* duraba 35 minutos porque cada miembro rendía cuentas al director de proyecto sobre lo hecho el día anterior, mientras dos historias llevaban 6 días atascadas esperando la validación del departamento jurídico. El Project Manager rediseñó la dinámica: limitó la *Daily* a 15 minutos enfocándose en las tarjetas bloqueadas del tablero Kanban, creó un "carril de dependencias externas" visible en el tablero y acordó con Jurídico una ventana semanal de revisión de 45 minutos dos días antes del cierre de iteración. En tres iteraciones, los retrasos por validación se redujeron drásticamente y las *Reviews* pasaron de mostrar maquetas estáticas a probar flujos reales con asesores y clientes piloto.

#### Errores frecuentes
* **Convertir la *Daily* en una reunión de reporte de estado al jefe:** Destruye la autoorganización y oculta bloqueos por miedo a la evaluación.
* **Hacer una *Review* sin usuarios ni producto funcionando:** Mostrar pantallas en PowerPoint o explicar tareas técnicas sin recabar retroalimentación de negocio.
* **Celebrar retrospectivas sin acciones con responsable y seguimiento:** Repetir las mismas quejas iteración tras iteración genera cinismo y fatiga ágil.
* **Aceptar "trabajo al 90 % hecho" como avance parcial:** El trabajo casi terminado no entrega valor, acumula riesgo de integración y distorsiona las métricas.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué diferencia práctica existe entre un *status meeting* tradicional y una *Daily Standup* enfocada al flujo?
2. Si un equipo no logra terminar una historia porque depende de un proveedor externo, ¿qué debería hacer el Project Manager durante la iteración y qué debería tratarse en la retrospectiva?
3. ¿Por qué el objetivo de la iteración es más importante que completar literalmente cada tarea estimada el primer día?

---

### 3.3. Métricas de trabajo y flujo: velocidad, story points, burndown, burnup y CFD

#### Explicación breve y clara
Medir en ágil tiene un único propósito legítimo: **aprender, mejorar la predictibilidad del sistema y apoyar la toma de decisiones**. Para lograrlo, combinamos métricas de avance de iteración/lanzamiento con métricas de flujo basadas en principios Lean/Kanban:

* **Estimación relativa (*Story Points*) y Velocidad:** Los *story points* miden el esfuerzo relativo (combinando complejidad, incertidumbre y volumen de trabajo), nunca horas exactas de reloj. La **velocidad** es la suma de *story points* de elementos completamente terminados (según DoD) por iteración. Tras 3-5 iteraciones estables, la velocidad media (y su rango mínimo-máximo) permite estimar cuántas iteraciones podría requerir una parte del backlog.
* **Gráficos *Burndown* y *Burnup*:**
  * El **Burndown** muestra el trabajo pendiente frente al tiempo restante. Es útil dentro de la iteración, pero puede confundir a nivel de *release* cuando cambia el alcance (no distingue fácilmente si el equipo fue lento o si el Product Owner añadió trabajo nuevo).
  * El **Burnup** separa dos líneas: el **alcance total** (arriba) y el **trabajo completado** (abajo). Es muy superior para comunicar a patrocinadores el impacto exacto de añadir alcance sobre la fecha estimada.
* **Métricas de flujo (Kanban / Lean):** Especialmente útiles cuando el trabajo es continuo, de soporte o heterogéneo:
  * **WIP (*Work in Progress*):** Número de elementos iniciados y aún no terminados. Limitar el WIP mejora el foco y reduce el cambio de contexto.
  * **Throughput (tasa de rendimiento):** Número de elementos completados por unidad de tiempo (ej. historias/semana).
  * **Cycle Time (tiempo de ciclo):** Tiempo transcurrido desde que el equipo empieza a trabajar activamente en un elemento hasta que está terminado.
  * **Lead Time (tiempo de entrega total):** Tiempo total desde que se solicita/crea la necesidad hasta que se entrega al cliente/usuario.
  * **Ley de Little:** En un sistema estable, $\text{Cycle Time promedio} = \frac{\text{WIP promedio}}{\text{Throughput promedio}}$. Reducir el WIP es la palanca más directa para acortar tiempos de entrega.
  * **CFD (*Cumulative Flow Diagram*):** Gráfico de áreas apiladas que muestra cuántos elementos están en cada estado del flujo a lo largo del tiempo. Permite visualizar de un vistazo WIP (distancia vertical entre la línea de entrada y la de terminado), *Cycle Time* aproximado (distancia horizontal) y cuellos de botella (bandas que se ensanchan progresivamente).

> **Principio crítico de examen PMP y de dirección ágil — Por qué NO debe compararse la velocidad entre equipos distintos:**
> Los *story points* son una escala relativa, local y calibrada únicamente con la experiencia interna de un equipo concreto. Para el Equipo A, una integración de API puede valer 5 puntos; para el Equipo B, con otra arquitectura, senioridad o deuda técnica, el mismo trabajo puede valer 13 puntos. Comparar velocidades entre equipos (o fijar objetivos de "subir un 20 % la velocidad") no mide productividad real: **provoca inflación artificial de estimaciones (Ley de Goodhart)**, destrucción de la calidad técnica (se salta la DoD para sumar puntos), aversión a ayudar a otros compañeros y ruptura de la confianza. La velocidad sirve para la **planificación y previsibilidad interna de cada equipo**, jamás para evaluar, rankear o comparar equipos o personas.

#### Conceptos clave
* **Estimación relativa vs. estimación absoluta:** Comparar complejidad/incertidumbre relativa reduce sesgos de optimismo frente a estimar horas exactas en entornos inciertos.
* **Flujo continuo y Ley de Little:** Relación matemática entre WIP, *Throughput* y *Cycle Time*.
* **Predictibilidad empírica:** Usar rangos históricos (optimista/probable/conservador o percentiles de *Cycle Time*) en lugar de promesas deterministas únicas.
* **Ley de Goodhart:** *"Cuando una medida se convierte en un objetivo, deja de ser una buena medida"*.

#### Definiciones necesarias
* **Velocidad (*Velocity*):** Cantidad de trabajo (habitualmente en *story points*, aunque también puede expresarse en número de historias) que cumple íntegramente la DoD y completa un equipo en una iteración.
* **Gráfico *Burnup*:** Representación visual acumulada que muestra simultáneamente la evolución del trabajo completado y las variaciones en el alcance total del proyecto o lanzamiento.
* **Diagrama de Flujo Acumulado (CFD):** Herramienta visual de flujo que grafica el número acumulado de elementos en cada columna/estado a lo largo del tiempo, revelando estabilidad del sistema y cuellos de botella.

#### Ejemplo práctico realista (pyme en transformación digital)
Una empresa tecnológica de tamaño medio especializada en software para clínicas dentales (110 empleados) tiene dos equipos Scrum: Equipo Clínica (producto maduro con mucha deuda técnica heredada) y Equipo Pagos (arquitectura moderna en la nube). El nuevo director de operaciones exige un informe semanal comparando la velocidad de ambos: Equipo Pagos promedia 48 puntos/sprint y Equipo Clínica 24 puntos/sprint. Al presionar al Equipo Clínica para "alcanzar al menos 40 puntos", el equipo empieza a reestimar tareas habituales de 3 puntos como 8 puntos y a recortar pruebas automatizadas. En dos meses, su velocidad "sube" a 42 puntos, pero los defectos en producción se duplican y el *Lead Time* empeora. Un Project Manager certificado PMP interviene: sustituye la comparativa de velocidad por un análisis de CFD y *Cycle Time* por equipo, identifica que el verdadero cuello de botella del Equipo Clínica es la fase de pruebas manuales (banda ancha en el CFD) y redirige la inversión hacia automatización de pruebas y reducción del WIP.

#### Errores frecuentes
* **Equivaler 1 *story point* a un número fijo de horas (ej. 1 punto = 8 horas):** Elimina la ventaja de la estimación relativa y reintroduce la falsa precisión.
* **Sumar crédito parcial de historias inacabadas a la velocidad:** Infla la capacidad aparente y esconde problemas crónicos de cierre.
* **Medir velocidad individual por desarrollador:** Fomenta silos, competencia interna y rechazo a revisar código o ayudar al equipo.
* **Ignorar el ensanchamiento de bandas en el CFD:** Seguir inyectando trabajo nuevo en un sistema saturado en lugar de desatascar la fase cuello de botella.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué un gráfico *Burnup* es más recomendable que un *Burndown* cuando presentas el progreso de un lanzamiento ante un comité directivo donde el alcance cambia con frecuencia?
2. Según la Ley de Little, si un equipo mantiene su *Throughput* pero duplica su WIP aceptando peticiones urgentes en paralelo, ¿qué ocurrirá con su *Cycle Time*?
3. ¿Cómo explicarías a un director general por qué el Equipo A (50 puntos/sprint) no es "el doble de productivo" que el Equipo B (25 puntos/sprint)?

---

### 3.4. Conexión con el valor de negocio: GQM, OKR y reporting ejecutivo a patrocinadores

#### Explicación breve y clara
Entregar rápido funcionalidades que nadie usa o que no mueven la aguja del negocio es uno de los mayores desperdicios en transformación digital ("fábrica de funcionalidades" o *feature factory*). Las métricas de trabajo y flujo (sección 3.3) miden **eficiencia de entrega (*outputs*)**, pero la dirección de proyectos moderna —y el enfoque de entrega de valor de PMBOK 8— exige conectar la entrega con **resultados e impacto (*outcomes*)**.

Para construir esa conexión sin caer en la parálisis por exceso de KPIs, existen dos marcos complementarios muy valorados en dirección de proyectos y productos digitales:

1. **GQM (*Goal-Question-Metric*, Basili y Weiss):** Método estructurado descendente para definir únicamente métricas con propósito claro:
   * **Goal (Objetivo):** ¿Qué queremos mejorar o lograr, desde qué perspectiva y en qué contexto?
   * **Question (Pregunta):** ¿Qué preguntas clave debemos responder para saber si estamos logrando ese objetivo?
   * **Metric (Métrica):** ¿Qué datos objetivos, cuantitativos o cualitativos responden directamente a cada pregunta?
2. **OKR (*Objectives and Key Results*):** Marco de alineación estratégica que conecta la visión de la organización con los equipos de entrega:
   * **Objective (Objetivo):** Cualitativo, inspirador, claro y acotado en el tiempo (ej. trimestre).
   * **Key Results (Resultados Clave):** 2 a 4 indicadores cuantitativos y verificables que miden **cambio de comportamiento o valor generado (*outcome*)**, no listas de tareas entregadas (*output*).
   * **Iniciativas / Backlog:** Las hipótesis y funcionalidades que el equipo construye para intentar mover los *Key Results*.

Finalmente, el **reporting a patrocinadores y alta dirección** en entornos ágiles e híbridos debe evolucionar desde informes extensos llenos de porcentajes ficticios hacia **radiadores de información transparentes y ejecutivos** que respondan a cuatro preguntas directivas: *¿Estamos logrando el valor de negocio esperado (OKR/outcomes)? ¿Cómo evoluciona el avance frente al alcance y presupuesto (Burnup + tasa de consumo/burn rate)? ¿Es saludable y predecible nuestro flujo (Cycle Time, calidad/defectos)? ¿Qué riesgos o decisiones necesitan apoyo del patrocinador ahora?*

#### Conceptos clave
* ***Output* vs. *Outcome* vs. Impacto:** Entregar una funcionalidad (*output*) no garantiza que cambie el comportamiento del cliente (*outcome*) ni mejore la rentabilidad o retención (impacto).
* **Indicadores adelantados (*Leading Indicators*) vs. rezagados (*Lagging Indicators*):** Los *leading* anticipan tendencias mientras aún podemos actuar (ej. activación en la primera semana, *Cycle Time*, tasa de adopción piloto); los *lagging* confirman el resultado final (ej. ingresos trimestrales, tasa de cancelación anual).
* **GQM como filtro antimétricas vanidosas:** Evita recopilar métricas fáciles de medir que no guían ninguna decisión (*vanity metrics*, como visitas brutas sin conversión o líneas de código).
* **Radiadores de información ejecutivos:** Cuadros de mando concisos, actualizados y orientados a decisiones para patrocinadores.

#### Definiciones necesarias
* **Goal-Question-Metric (GQM):** Marco metodológico que deriva métricas operativas y de negocio a partir de objetivos explícitos y preguntas diagnósticas, garantizando trazabilidad entre cada dato y una decisión de gestión.
* **Objectives and Key Results (OKR):** Sistema de fijación y seguimiento de metas que vincula objetivos estratégicos cualitativos con resultados clave medibles centrados en valor.
* **Métrica vanidosa (*Vanity Metric*):** Indicador que luce bien en presentaciones pero carece de correlación real con decisiones accionables o valor de negocio.

#### Ejemplo práctico realista (pyme en transformación digital)
Una aseguradora regional mediana (210 empleados) lanza una app para gestionar partes de siniestros de hogar. Su informe inicial al comité de dirección solo mostraba "85 % de historias completadas" y "velocidad de 38 puntos". Sin embargo, el centro de llamadas seguía saturado. El Project Manager aplica **GQM + OKR**:
* **Objetivo (OKR):** *Simplificar la apertura de partes de hogar para ofrecer una experiencia ágil y autosuficiente al asegurado.*
* **KR1:** Aumentar del 18 % al 45 % el porcentaje de partes abiertos completamente por la app sin llamada telefónica en el trimestre.
* **KR2:** Reducir el tiempo medio de registro de un parte de 14 minutos a menos de 5 minutos.
* **KR3:** Alcanzar una puntuación de satisfacción del proceso (CSAT) ≥ 4,3/5.
* **Conexión GQM en el reporting:** El comité ahora ve en una sola página: avance de KR (valor), gráfico *Burnup* de iniciativas habilitadoras (alcance/plazo), *Lead Time* y tasa de abandono por pantalla (*leading indicator*), más 2 bloqueos que requieren decisión directiva. Gracias a ello descubren que el 60 % abandona en el paso de subir fotos pesadas y repriorizan el backlog de inmediato.

#### Errores frecuentes
* **Redactar *Key Results* como listas de tareas (*outputs*):** Ejemplo incorrecto: *"KR1: Lanzar el módulo de facturación el 30 de junio"*. Eso es una iniciativa, no un resultado de valor.
* **Presentar jerga ágil cruda a patrocinadores ejecutivos:** Hablarles de *story points*, *burndown* de tareas o *velocity* en lugar de valor entregado, previsión de fechas con rangos, retorno económico, riesgos y decisiones pendientes.
* **Medir solo indicadores rezagados:** Enterarse al final del semestre de que la iniciativa fracasó cuando ya se consumió todo el presupuesto.
* **Exceso de métricas sin dueño ni umbral de acción:** Crear cuadros de mando con 30 KPIs que nadie consulta para decidir.

#### Preguntas que el alumnado debería poder responder
1. ¿Cómo transformarías el supuesto resultado clave *"Implantar chatbot de atención al cliente en Q2"* en un verdadero *Key Result* orientado a *outcome*?
2. ¿Cómo ayuda el método GQM a evitar métricas vanidosas en un proyecto de transformación digital?
3. ¿Qué cuatro bloques mínimos debería contener un informe ejecutivo quincenal o mensual para patrocinadores en un proyecto ágil o híbrido?

---

## 4. Metodología didáctica

La sesión está diseñada para modalidad **100 % online síncrona** de **4 horas (240 minutos)** con un enfoque altamente participativo, combinando microexposiciones conceptuales, análisis de métricas reales, resolución de un caso empresarial en salas de grupos (*breakout rooms*) y transferencia directa al examen PMP y al puesto de trabajo.

| Fase | Tiempo | Min. acum. | Qué hace el formador | Qué hace el alumnado |
| :--- | :---: | :---: | :--- | :--- |
| **1. Apertura y activación** (encuesta diagnóstica + Actividad 1: *Mito o Realidad sobre métricas ágiles*) | 25 min | 25 min | Presenta objetivos y agenda; lanza encuesta interactiva diagnóstica (Mentimeter/Slido) con 5 afirmaciones provocadoras sobre velocidad, *story points* y *reporting*; dinamiza debate inicial conectando con experiencias reales del grupo. | Responde la encuesta diagnóstica, argumenta su postura en chat/micrófono y comparte un reto real de medición o cadencia ágil en su organización. |
| **2. Microlearning Bloque A** (Backlog por valor, refinamiento, cadencia iterativa, incrementos, dependencias e impedimentos — Apartados 3.1 y 3.2) | 35 min | 60 min | Explica con apoyo visual (diapositivas 4-9) el flujo de valor del backlog, INVEST, DoR/DoD, propósitos de los 4 eventos y gestión de bloqueos desde el liderazgo servicial; resuelve dudas con mini-ejemplos PMP situacionales. | Toma notas en la ficha de trabajo, responde a 2 micropreguntas situacionales en el chat y plantea dudas sobre su entorno (ágil o híbrido). |
| **3. Microlearning Bloque B** (Métricas de trabajo y flujo: velocidad, *burndown*, *burnup*, *Lead/Cycle Time*, Ley de Little, CFD y trampa de comparar velocidades — Apartado 3.3) | 35 min | 95 min | Expone e interpreta en directo gráficos reales de *Burnup* y CFD; demuestra la Ley de Little y explica por qué comparar velocidades entre equipos rompe el sistema (efecto Goodhart). | Interpreta un CFD simplificado proyectado en pantalla y señala en el chat dónde está el cuello de botella y qué ocurriría al reducir WIP. |
| **Pausa activa** | 15 min | 110 min | Recuerda la hora exacta de retorno y deja visible la consigna de la actividad práctica posterior. | Descanso fuera de pantalla. |
| **4. Actividad práctica de aplicación (Actividad 2)** + Microlearning Bloque C (GQM, OKR y reporting ejecutivo — Apartado 3.4) | 40 min | 150 min | Dedica 20 min a explicar GQM, OKR (*output* vs. *outcome*) y arquitectura de un informe ejecutivo para patrocinadores; luego facilita 20 min de taller práctico rápido en parejas/tríos para convertir métricas vanidosas/outputs en un mini-árbol GQM + OKR. | Escucha la microexposición y trabaja en *breakout rooms* completando la plantilla de transformación *Output → Outcome* y árbol GQM, subiendo su resultado al tablero colaborativo (Miro/Mural). |
| **5. Análisis de caso práctico en equipos** (Caso *MercaSalud Digital S.L.* — diagnóstico de flujo, velocidad y rediseño de reporting) | 45 min | 195 min | Presenta el caso práctico (5 min), distribuye al alumnado en salas de 4-5 personas (30 min) pasando por cada sala como facilitador para hacer preguntas socráticas, y coordina el registro de propuestas en la pizarra compartida (10 min de preparación de síntesis). | Analiza los datos de los Equipos Alfa y Beta de *MercaSalud Digital*, identifica los errores de métricas y cadencia, calcula indicadores clave y diseña la respuesta directiva + tablero GQM/OKR. |
| **6. Discusión guiada y transferencia laboral** (puesta en común del caso + Actividad 3: *Rediseño de tu cuadro de mando real*) | 30 min | 225 min | Modera la puesta en común de 2-3 equipos contrastando soluciones con criterios PMP y buenas prácticas ágiles (15 min); guía el inicio del plan individual de transferencia a su proyecto actual (15 min). | Expone hallazgos del caso, debate objeciones típicas de patrocinadores y redacta en su plantilla personal 1 mejora de cadencia/flujo y 1 OKR/GQM aplicable a su trabajo la próxima semana. |
| **7. Síntesis, evaluación sumativa y cierre** | 15 min | 240 min | Lanza el test sumativo rápido tipo PMP (5 preguntas situacionales), revisa las respuestas clave en directo, resume los 5 aprendizajes esenciales, explica la tarea asíncrona y conecta con el Tema 2 del Bloque 5. | Completa el test sumativo y la autoevaluación rápida, formula dudas finales y registra su compromiso de aplicación. |

**Comprobación de tiempos:** $25 + 35 + 35 + 15 + 40 + 45 + 30 + 15 = \mathbf{240\text{ minutos}}$ (4 horas exactas).

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «El Tribunal de las Métricas Ágiles: ¿Mito, Riesgo o Buena Práctica?»
* **Objetivo:** Activar conocimientos previos y aflorar concepciones erróneas frecuentes sobre velocidad, *story points*, *daily* y seguimiento de proyectos ágiles.
* **Instrucciones para el alumnado:**
  1. Acceded al enlace de votación interactiva proporcionado por el formador.
  2. Leed las 5 afirmaciones siguientes y clasificad cada una en 30 segundos como **Buena práctica**, **Depende / Riesgo** o **Mito peligroso**:
     * A1: *"Si el Equipo A completa 60 story points y el Equipo B completa 35, debemos analizar por qué el Equipo B rinde casi la mitad."*
     * A2: *"Una historia terminada al 90 % al final del sprint debería sumar al menos la mitad de sus story points a la velocidad para reflejar el esfuerzo."*
     * A3: *"En un proyecto con cambios frecuentes de alcance, un gráfico Burnup comunica mejor la situación a los patrocinadores que un Burndown."*
     * A4: *"Si reducimos el número de historias abiertas en paralelo (WIP), es probable que las entregas individuales tarden menos tiempo en completarse."*
     * A5: *"Completar el 100 % de las historias planificadas en el trimestre garantiza que el proyecto ha entregado el valor esperado."*
  3. Tras ver los resultados agregados, dos voluntarios con posturas distintas defenderán brevemente su razonamiento durante 1 minuto.
* **Materiales necesarios:** Herramienta de encuestas online (Mentimeter, Slido o encuesta de Zoom/Teams) y diapositiva de apoyo con las 5 afirmaciones.
* **Tiempo estimado:** 15 minutos (integrados en la Fase 1 de apertura y activación).
* **Rol del formador:** Provocar reflexión sin dar la respuesta correcta inmediatamente; contrastar argumentos del grupo y usar los resultados para conectar con los bloques teóricos 3.2, 3.3 y 3.4.
* **Producto o entregable esperado:** Mapa de creencias iniciales del grupo (captura de resultados de la votación) y listado de 3 errores reales reconocidos por los participantes en sus organizaciones.
* **Criterios de éxito:** Participación superior al 85 % en la votación; identificación explícita de al menos 2 riesgos asociados a la comparación de velocidad o a confundir *output* con valor.

---

### Actividad 2 (Aplicación): «De Fábrica de Funcionalidades a Valor Medible (Transformación GQM + OKR)»
* **Objetivo:** Aplicar el marco GQM y la distinción *output* vs. *outcome* para reformular métricas deficientes en indicadores accionables conectados al negocio.
* **Instrucciones para el alumnado:**
  1. En grupos de 3 personas en *breakout rooms*, elegid uno de los 3 escenarios propuestos por el formador (Escenario A: implantación de CRM en pyme comercial; Escenario B: portal de autoservicio para clientes en empresa de mantenimiento industrial; Escenario C: migración de facturación a la nube en distribuidora).
  2. Partid de una métrica pobre típica de ese escenario (ej. *"Entregar 12 funcionalidades del CRM en Q3"* o *"Cerrar 150 story points del portal"*).
  3. Completad la plantilla compartida construyendo:
     * **1 Objetivo cualitativo (O)** orientado a valor.
     * **2 Key Results (KR)** estrictamente orientados a *outcome* (medibles, con línea base y meta).
     * **1 cadena GQM completa** (Objetivo → 2 Preguntas clave → 2 Métricas: una *leading* de flujo/adopción y una *lagging* de resultado).
  4. Pegad vuestra tarjeta en el mural compartido indicando qué decisión tomaría el patrocinador si la métrica *leading* empeora.
* **Materiales necesarios:** Tablero colaborativo online (Miro, Mural o Google Slides compartido) con tarjetas preconfiguradas y los 3 mini-escenarios.
* **Tiempo estimado:** 20 minutos (15 min de trabajo en sala + 5 min de revisión cruzada rápida).
* **Rol del formador:** Visitar salas para detectar si los grupos cuelan *outputs* disfrazados de *Key Results* (p. ej., "lanzar...", "completar...", "implementar...") y reconducirlos mediante preguntas guía (*"¿Qué cambiará en el cliente o en el negocio si eso funciona?"*).
* **Producto o entregable esperado:** Una ficha GQM + OKR completa y verificable publicada en el mural colaborativo.
* **Criterios de éxito:** Los KR expresan cambios medibles de comportamiento o negocio (no tareas); existe coherencia lógica entre Objetivo, Preguntas y Métricas; se diferencia correctamente al menos una métrica *leading* y una *lagging*.

---

### Actividad 3 (Transferencia a la realidad laboral): «Rediseño del Cuadro de Mando y Cadencia de tu Proyecto Real»
* **Objetivo:** Transferir los conceptos de flujo, cadencia y reporting ejecutivo al proyecto actual (o proyecto de referencia) de cada participante.
* **Instrucciones para el alumnado:**
  1. De forma individual, seleccionad un proyecto ágil o híbrido en el que participéis actualmente (o uno reciente si estáis en transición profesional).
  2. Completad la **Ficha de Transferencia Ejecutiva** (incluida en la Sección 8) respondiendo a 4 bloques:
     * **Diagnóstico de cadencia:** Identifica 1 disfunción concreta en vuestros eventos (refinamiento, *daily*, *review* o retrospectiva) y define una acción de mejora concreta.
     * **Selección de métricas de flujo:** Elige 2 métricas de trabajo/flujo que implantarías (ej. *Burnup* + *Cycle Time* o CFD) y especifica qué decisión operativa te ayudarán a tomar.
     * **Blindaje frente a sesgos:** Redacta en 3 líneas cómo explicarías a tu patrocinador o dirección por qué no vais a reportar comparativas de velocidad entre equipos ni horas por *story point*.
     * **Reporting orientado a valor:** Diseña el esquema de un informe ejecutivo de una página para vuestro patrocinador incorporando 1 OKR y el seguimiento de 1 dependencia o riesgo clave.
  3. Compartid en el foro del campus virtual (entrega asíncrona en los 4 días posteriores a la sesión) vuestra ficha anonimizada y comentad constructivamente la ficha de un compañero.
* **Materiales necesarios:** Plantilla descargable *Ficha de Transferencia Ejecutiva* (Markdown/Excel/PDF editable) y foro del LMS.
* **Tiempo estimado:** 15 minutos de arranque guiado en la sesión síncrona + 30-45 minutos de finalización asíncrona individual.
* **Rol del formador:** Acompañar el arranque en directo aclarando dudas de contexto (especialmente en proyectos híbridos no tecnológicos) y ofrecer retroalimentación escrita en el LMS usando la rúbrica de la Sección 7.
* **Producto o entregable esperado:** Ficha de Transferencia Ejecutiva personalizada y anonimizada lista para aplicar en la organización del participante.
* **Criterios de éxito:** Coherencia con el contexto real del proyecto, ausencia de métricas vanidosas o comparativas indebidas de velocidad, claridad ejecutiva apta para un patrocinador no técnico y plan de acción realista a 2 semanas.

---

## 6. Caso práctico

### Caso: «MercaSalud Digital S.L. — Mucha velocidad en los informes, poco valor en los clientes»

#### Contexto empresarial
**MercaSalud Digital S.L.** es una pyme española con sede en Valencia y delegación en Madrid (140 empleados) dedicada a la distribución B2B de material sanitario y productos parafarmacéuticos a más de 1.800 farmacias y clínicas privadas. Ante la entrada de grandes operadores digitales, la empresa lanzó hace 5 meses su proyecto estratégico **«MercaSalud 360»**: un nuevo portal web y app de pedidos inteligentes con reabastecimiento predictivo y seguimiento de entregas en tiempo real.

La dirección tecnológica organizó el desarrollo en dos equipos Scrum que trabajan en sprints de 2 semanas:
* **Equipo Alfa (6 personas):** Responsable del nuevo catálogo inteligente, carrito de compra y experiencia de usuario en el portal (tecnología moderna en la nube).
* **Equipo Beta (6 personas):** Responsable de la integración en tiempo real con el ERP heredado de almacén, facturación y cálculo de precios por cliente (sistema antiguo con documentación escasa y alta dependencia del departamento de Sistemas/ERP).

#### Situación o problema
Al cumplirse el quinto mes (fin del Sprint 10), la Dirección General expresa una fuerte frustración en el Comité de Seguimiento:
1. **Conflicto por comparación de velocidades:** El director financiero, al ver los informes internos de Jira, cuestiona abiertamente al Equipo Beta porque "solo produce 22 puntos por sprint mientras el Equipo Alfa entrega 46 puntos". Exige equiparar ambos equipos a un mínimo de 40 puntos por sprint en el próximo mes y vincular el bonus semestral del equipo a la velocidad.
2. **Desfase entre *outputs* y valor de negocio:** Aunque los informes indican que se han completado 135 historias de usuario, solo el 14 % de las farmacias piloto realizan pedidos recurrentes en el portal (el objetivo comercial era 40 % al mes 5). Muchas farmacias abandonan el pedido porque el precio final con descuentos personalizados tarda o muestra errores al sincronizar con el ERP.
3. **Saturación del flujo y cuellos de botella:** El Equipo Beta acumula historias bloqueadas esperando aprobaciones del responsable del ERP corporativo. Para "no parecer parados", los desarrolladores abren nuevas historias constantemente mientras las anteriores quedan en espera.
4. **Eventos desvirtuados:** Las *Sprint Reviews* consisten en presentaciones de diapositivas con gráficos de velocidad y *burndown* de tareas; ningún cliente ni responsable comercial de campo participa. Las retrospectivas del Equipo Beta se suspendieron en los dos últimos sprints "para ganar horas de programación".

#### Datos disponibles

| Indicador / Observación (Últimos 4 sprints: S7 a S10) | Equipo Alfa (Portal UX) | Equipo Beta (Integración ERP) | Nota operativa |
| :--- | :---: | :---: | :--- |
| **Velocidad media (story points / sprint)** | 46 pts (rango 42-50) | 22 pts (rango 14-29) | Cada equipo definió su propia escala de referencia al inicio del proyecto |
| **Tendencia de estimación (S7 → S10)** | Estable | Sube de 18 a 29 pts tras la advertencia directiva | El Equipo Beta empezó a puntuar historias similares el doble de alto en S9-S10 |
| **WIP promedio simultáneo (historias en curso)** | 5 historias | 14 historias | Equipo Beta tiene 6 miembros (más de 2 historias abiertas por persona) |
| **Cycle Time promedio (días naturales)** | 3,5 días | 16,2 días | 9,5 de esos 16,2 días están en columna *"Esperando validación ERP"* |
| **Throughput medio (historias/sprint)** | 11 historias | 4 historias | En S10, Equipo Beta dejó 6 historias al "80 % hechas" |
| **Defectos escapados a producción (últimos 2 sprints)** | 2 defectos menores | 11 defectos (4 críticos de precios) | Equipo Beta redujo pruebas de regresión para intentar subir velocidad |
| **Alcance total del lanzamiento (historias)** | Creció de 90 a 128 historias (+42 %) | Creció de 55 a 78 historias (+42 %) | Comercial añadió peticiones sin retirar nada; solo se muestra un *Burndown* simple |
| **Adopción real de farmacias piloto (pedidos/mes)** | 14 % global | (Impactado por errores de precio ERP) | Meta de negocio inicial: 40 % de recurrencia en mes 5 |

#### Preguntas de análisis
1. ¿Qué señales empíricas en la tabla demuestran que la presión directiva sobre la velocidad ya está dañando el sistema (efecto Goodhart)?
2. Al analizar los datos de flujo del Equipo Beta (WIP = 14, *Cycle Time* = 16,2 días, 9,5 días en espera de ERP), ¿cuál es la causa raíz real de su baja tasa de entrega y qué ocurriría al aplicar la Ley de Little si limitan el WIP?
3. ¿Qué disfunciones graves se observan en la cadencia ágil (*Review*, Retrospectiva y gestión del alcance) y cómo impiden detectar a tiempo el problema de adopción de las farmacias?
4. ¿Por qué el gráfico *Burndown* actual está generando confusión en el Comité de Seguimiento y qué herramienta visual debería sustituirlo?
5. Como Project Manager / Agile Lead con enfoque PMP, ¿cómo abordarías la conversación con el director financiero respecto a vincular el bonus a la velocidad?

#### Tarea a realizar (en grupos de 4-5 personas, 30 minutos)
Elaborad un **Plan de Intervención de 30 días** para el Comité de Dirección de MercaSalud Digital que incluya:
1. **Diagnóstico ejecutivo (máx. 5 viñetas):** Causas raíz separando síntomas de problemas estructurales.
2. **Intervención en flujo y cadencia (3 medidas concretas):** Límites de WIP, gestión de la dependencia del ERP, restauración de DoD y rediseño de *Review* y Retrospectiva.
3. **Nuevo cuadro de mando GQM + OKR para el próximo trimestre:**
   * 1 Objetivo de negocio para MercaSalud 360 + 3 *Key Results* orientados a *outcome*.
   * 1 tabla GQM (2 preguntas clave + métricas *leading* y *lagging* sin comparativas de velocidad).
4. **Guion breve de conversación (3 argumentos sólidos)** para convencer al director financiero de descartar la comparación de velocidades y el bonus por *story points*.

#### Posibles soluciones o criterios de análisis (guía para el formador)
* **Diagnóstico esperado:**
  * Comparar 46 pts vs. 22 pts es metodológicamente inválido (escalas relativas distintas + arquitecturas y deuda técnica completamente diferentes).
  * La subida artificial de puntos en S9-S10 combinada con 11 defectos críticos evidencia **inflación de puntos y recorte de calidad (DoD)** por presión sobre una métrica mal utilizada.
  * El cuello de botella real del sistema no es "falta de esfuerzo" del Equipo Beta, sino la **dependencia externa del responsable del ERP** (59 % del *Cycle Time* es tiempo de espera) agravada por un **WIP excesivo (14 historias para 6 personas)**.
  * El aumento de alcance (+42 %) queda oculto en un *Burndown* simple y hace parecer que los equipos no avanzan.
  * El enfoque en *outputs* (135 historias) oculta el verdadero problema de negocio: baja adopción (14 %) debido a precios erróneos en la integración ERP.
* **Medidas de flujo y cadencia esperadas:**
  * Implantar un **límite de WIP** en Equipo Beta (p. ej., máx. 4-6 historias) y política de *"dejar de empezar, empezar a terminar"*.
  * Abordar la **dependencia del ERP** como impedimento organizacional prioritario: asignar capacidad dedicada parcial del experto de ERP (o incorporarlo temporalmente al equipo / crear SLA de validación de 24-48 h y pruebas automatizadas de contratos de API).
  * Restablecer la **DoD no negociable** (incluyendo pruebas de regresión de precios) y recuperar las **Retrospectivas**.
  * Transformar la **Sprint Review** en una sesión conjunta de producto integrando el valor de ambos equipos con participación de usuarios piloto (farmacias) y equipo comercial.
  * Sustituir el *Burndown* de lanzamiento por un **gráfico Burnup** que haga visible el incremento del +42 % de alcance y obligue a priorizar/descartar elementos de bajo valor.
* **Propuesta orientativa de OKR y GQM:**
  * *Objetivo:* Convertir MercaSalud 360 en el canal habitual y fiable de reposición para nuestras farmacias cliente.
  * *KR1:* Incrementar la tasa de farmacias piloto con pedidos recurrentes mensuales del 14 % al 40 %.
  * *KR2:* Reducir la tasa de incidencias de discrepancia de precios ERP-portal del nivel actual a menos del 0,5 % de los pedidos.
  * *KR3:* Reducir el *Cycle Time* de extremo a extremo de las historias de integración ERP de 16,2 días a ≤ 6 días (reduciendo el tiempo de espera de validación a ≤ 1,5 días).
  * *GQM:* Pregunta 1: *"¿Estamos resolviendo el bloqueo que impide entregar cambios fiables de precios?"* → Métricas: Tiempo de espera en columna ERP (CFD), tasa de defectos escapados de precios (*leading*). Pregunta 2: *"¿Los cambios desplegados están generando adopción real?"* → Métricas: Tasa de finalización de carrito sin abandono (*leading*), % de farmacias recurrentes (*lagging*).
* **Argumentario para el director financiero:** Apelar a los datos financieros reales (los 4 defectos críticos de precios y el 14 % de adopción cuestan dinero real; pagar bonus por puntos inflados incentiva producir defectos más rápido) y proponerle un tablero trimestral transparente con *Burnup*, coste/tasa de consumo y métricas de adopción e ingresos digitales.

#### Preguntas de reflexión final
1. ¿En qué situaciones de tu propia organización has visto que una métrica pensada para mejorar acabó generando comportamientos contraproducentes?
2. ¿Cómo equilibrarías la presión legítima de un patrocinador por tener previsibilidad de fechas con la realidad empírica de un entorno incierto?
3. Si el Equipo Alfa sigue entregando a gran velocidad funcionalidades de interfaz mientras el Equipo Beta sigue bloqueado en el ERP, ¿está optimizando la empresa el rendimiento local o el valor global del sistema?

---

## 7. Evaluación

### Evaluación diagnóstica breve (inicio de la sesión — 5 min)
Cuestionario anónimo de 5 ítems (integrado en la Actividad 1) que mide el nivel de partida en:
1. Diferencia entre estimación relativa (*story points*) y horas.
2. Validez de comparar velocidades entre equipos.
3. Uso de *Burnup* frente a *Burndown* con cambios de alcance.
4. Relación entre WIP y *Cycle Time* (Ley de Little).
5. Diferencia entre *output* y *outcome*.

### Evaluación formativa durante la sesión
* **Preguntas situacionales rápidas en el chat** tras los microlearnings A y B (identificación de cuellos de botella en un CFD y rol del líder servicial ante bloqueos).
* **Revisión en directo del mural de la Actividad 2** comprobando que los grupos eliminan *outputs* de sus *Key Results* y mantienen trazabilidad GQM.
* **Observación estructurada en *breakout rooms*** durante el caso *MercaSalud Digital*, dando retroalimentación inmediata sobre rigor analítico y enfoque PMP.

### Evaluación sumativa al final de la sesión (10 min + entrega de transferencia)
Consta de dos componentes:
1. **Mini-simulador PMP (5 preguntas situacionales de opción múltiple en plataforma online):**
   * *Pregunta 1 (Velocidad y ética/gestión):* Un patrocinador solicita un informe mensual que compare la velocidad de tres equipos Scrum para premiar al más productivo. ¿Cuál es la mejor acción del Project Manager? *(Clave: Explicar que la velocidad es una métrica relativa interna de cada equipo no comparable y proponer métricas de valor/resultados de negocio y flujo).*
   * *Pregunta 2 (Métricas de flujo / CFD):* En el Diagrama de Flujo Acumulado (CFD) de un equipo ágil, la banda correspondiente a "En pruebas" se ensancha progresivamente durante tres iteraciones mientras la línea de "Terminado" apenas sube. ¿Qué indica esto y qué debe hacer el equipo primero? *(Clave: Existe un cuello de botella en pruebas; limitar el WIP entrante y colaborar como equipo multifuncional para desatascar pruebas).*
   * *Pregunta 3 (Gestión del alcance y reporting):* En un proyecto híbrido, el patrocinador reclama que el equipo "no avanza" según el gráfico *Burndown*, aunque el equipo mantiene su ritmo habitual porque el Product Owner añadió nuevas peticiones urgentes. ¿Qué gráfico facilita mayor transparencia? *(Clave: Un gráfico Burnup que separa la curva de alcance total de la de trabajo completado).*
   * *Pregunta 4 (Cadencia e impedimentos):* Un desarrollador lleva cuatro días bloqueado esperando acceso a un entorno administrado por otro departamento y lo menciona cada mañana en la *Daily*. ¿Qué debe hacer el Project Manager/Scrum Master? *(Clave: Tratarlo como un impedimento prioritario y facilitar activamente su resolución/escalado con el departamento externo, eliminando la barrera para el equipo).*
   * *Pregunta 5 (GQM y OKR):* Un equipo definió como Resultado Clave (KR): *"Publicar 10 nuevas funcionalidades en la app móvil antes de junio"*. Al revisar el cuadro de mando, ¿cuál es el principal fallo de este KR? *(Clave: Mide un output o lista de entregables en lugar de un outcome medible de valor o cambio de comportamiento del usuario).*
2. **Evaluación del entregable de transferencia (Actividad 3 — Ficha de Transferencia Ejecutiva):** Evaluada mediante la siguiente rúbrica.

### Rúbrica de evaluación (4 niveles)

| Criterio de evaluación | Insuficiente (0-4,9) | En desarrollo (5-6,9) | Adecuado (7-8,9) | Destacado (9-10) |
| :--- | :--- | :--- | :--- | :--- |
| **1. Gestión de backlog, cadencia e impedimentos (25 %)** | Confunde el propósito de los eventos ágiles o propone soluciones de control/microgestión; ignora DoD y dependencias. | Identifica problemas básicos de cadencia o bloqueos, pero propone medidas genéricas sin vincularlas a DoD o liderazgo servicial. | Diagnostica con precisión disfunciones de backlog, eventos y dependencias, proponiendo acciones prácticas y realistas alineadas a principios ágiles/PMP. | Integra de forma sistémica refinamiento por valor, DoD, gestión proactiva de dependencias y facilitación organizacional anticipando resistencias. |
| **2. Dominio de métricas de trabajo y flujo (25 %)** | Usa incorrectamente velocidad, *story points* o compara equipos; no interpreta *Burnup*, *Cycle Time* ni CFD. | Define correctamente los conceptos, pero comete imprecisiones al aplicar la Ley de Little o elegir entre *Burndown* y *Burnup*. | Selecciona e interpreta correctamente métricas de flujo (*Lead/Cycle Time*, WIP, CFD) y *Burnup*, argumentando con claridad por qué no comparar velocidades entre equipos. | Realiza diagnósticos empíricos avanzados (cuellos de botella, variabilidad, efecto Goodhart) y formula planes concretos de mejora de flujo con límites de WIP y rangos predictivos. |
| **3. Conexión con el valor mediante GQM y OKR (25 %)** | Redacta objetivos vagos o confunde *Key Results* con listas de tareas (*outputs*) y métricas vanidosas. | Distingue parcialmente *output* de *outcome*, pero presenta saltos lógicos entre Objetivo, Preguntas y Métricas. | Diseña OKR orientados a *outcome* y árboles GQM coherentes combinando métricas *leading* y *lagging* vinculadas a decisiones claras. | Construye un sistema completo de medición de valor plenamente trazable (estrategia → OKR → GQM → backlog) con umbrales explícitos de decisión ejecutiva. |
| **4. Calidad del reporting a patrocinadores y transferencia laboral (25 %)** | Informe cargado de jerga técnica sin foco en decisiones ni aplicable al contexto real del participante. | Presenta información comprensible pero incompleta (omite riesgos, alcance o conexión con el negocio). | Diseña un informe ejecutivo claro, transparente y de una página adaptado a patrocinadores, directamente aplicable a su proyecto real. | Crea un radiador ejecutivo impecable, persuasivo y libre de sesgos que equilibra valor, predictibilidad, flujo y decisiones pendientes, listo para comité de dirección. |

### Actividad de autoevaluación y reflexión (5 min al cierre)
Cada participante responde brevemente en el formulario de cierre (escala 1-5 + 2 respuestas abiertas):
1. *Del 1 al 5, ¿con qué seguridad puedes hoy explicar a un directivo por qué no debe comparar la velocidad entre dos equipos?*
2. *¿Qué métrica actual de tu empresa dejarías de usar (o cambiarías de propósito) tras esta sesión?*
3. *¿Cuál es la primera acción concreta que aplicarás en los próximos 7 días en tu equipo o proyecto?*

---

## 8. Materiales y recursos

### Guion de diapositivas (slide por slide)

| N.º | Título de la diapositiva | Contenido visual y mensajes clave | Notas para el formador |
| :---: | :--- | :--- | :--- |
| **1** | Portada — Entrega ágil y medición | Título del tema, Bloque 5 (1/2), hoja de ruta de las 4 horas y resultado de aprendizaje. | Dar la bienvenida, situar el tema tras el Bloque 4 y explicar dinámica interactiva. |
| **2** | Activación: El Tribunal de las Métricas | QR / enlace de Mentimeter con las 5 afirmaciones de la Actividad 1. | No revelar soluciones todavía; fomentar contraste de posturas reales. |
| **3** | Del alcance fijo al backlog orientado al valor | Comparativa visual: alcance predictivo vs. backlog emergente DEEP; corte vertical vs. corte horizontal. | Usar el ejemplo de la distribuidora alimentaria para ilustrar valor temprano. |
| **4** | Calidad del backlog: INVEST, DoR y DoD | Tarjeta visual de historia de usuario + checklist INVEST + equilibrio entre DoR (guía) y DoD (contrato de calidad). | Enfatizar que recortar DoD genera deuda técnica invisible y falsas entregas. |
| **5** | Cadencia iterativa: 4 eventos, 4 propósitos | Diagrama circular del ciclo iterativo: Planning (alinear), Daily (sincronizar flujo), Review (inspeccionar incremento/valor), Retrospectiva (mejorar el sistema). | Destacar los antipatrones típicos de examen PMP en cada evento. |
| **6** | Incrementos utilizables, impedimentos y dependencias | Ejemplo visual de tablero con carril de bloqueos y matriz de dependencias; rol del líder servicial. | Diferenciar qué resuelve el equipo y qué escala/desbloquea el Project Manager. |
| **7** | Estimación relativa y velocidad: qué son y qué NO son | Escala de Fibonacci, calibración interna del equipo y gráfico de velocidad histórica con banda de previsión. | Aclarar que 1 *story point* ≠ X horas fijas. |
| **8** | La trampa de comparar velocidades (Ley de Goodhart) | Comparativa visual Equipo A vs. Equipo B + espiral del *gaming* (presión → inflación de puntos → caída de calidad). | Punto crítico de examen PMP y práctica directiva; abrir breve ronda de preguntas. |
| **9** | Burndown vs. Burnup: transparencia ante cambios | Dos gráficos en paralelo ante un aumento del 30 % de alcance: confusión en *Burndown* vs. claridad en *Burnup*. | Mostrar cómo el *Burnup* facilita conversaciones maduras de alcance/fecha con patrocinadores. |
| **10** | Métricas de flujo y Ley de Little | Esquema de tablero Kanban señalando *Lead Time*, *Cycle Time*, WIP y *Throughput* + fórmula de Ley de Little. | Ejemplo numérico sencillo: WIP 12 / Throughput 3 = 4 semanas; bajar WIP a 6 reduce el tiempo a 2 semanas. |
| **11** | Lectura rápida de un CFD | Gráfico CFD con anotaciones de colores: cómo leer WIP (vertical), *Cycle Time* (horizontal) y un cuello de botella (banda que se ensancha). | Pregunta rápida en el chat: *"¿En qué columna está el atasco?"* |
| **12** | Salto al valor: Output vs. Outcome vs. Impacto | Cadena visual de ejemplo (funcionalidad → adopción → reducción de costes/ingresos) + *leading* vs. *lagging indicators*. | Conectar con el enfoque de entrega de valor de PMBOK 8. |
| **13** | Diseño de métricas con GQM y OKR | Plantilla visual en embudo: Objetivo (O) + Resultados Clave (KR) + preguntas GQM → métricas accionables. | Mostrar 2 ejemplos "mal redactados" (*outputs*) y su reescritura correcta (*outcomes*). |
| **14** | Reporting ejecutivo a patrocinadores (1 página) | Maqueta de radiador ejecutivo en 4 cuadrantes: Valor (OKR), Alcance/Plazo (Burnup), Salud de flujo/calidad y Decisiones/Riesgos. | Explicar cómo traducir métricas de equipo a lenguaje de negocio sin ocultar problemas. |
| **15** | Caso práctico: MercaSalud Digital S.L. | Resumen de datos críticos de Equipo Alfa y Equipo Beta + instrucciones y tiempo en *breakout rooms*. | Verificar que todos tienen el documento del caso antes de abrir salas. |
| **16** | Síntesis, test PMP y conexión con Tema 2 | 5 ideas fuerza del día, enlace al mini-test PMP, recordatorio de la Actividad 3 y anticipo del Bloque 5 Tema 2. | Cerrar en hora exacta reforzando el siguiente paso asíncrono. |

### Ficha de trabajo del alumnado (para seguimiento durante la sesión)
```markdown
# Ficha de Trabajo — Tema 1: Entrega ágil y medición

1. **Mi principal reto actual de entrega o medición:**
   - Situación actual: ________________________________________________
   - Síntoma observable: ______________________________________________

2. **Auditoría rápida de nuestra cadencia ágil / híbrida:**
   - ¿Nuestras historias se dividen verticalmente? [ ] Sí [ ] Parcial [ ] No
   - ¿Existe DoD explícita y respetada? [ ] Sí [ ] Parcial [ ] No
   - ¿La Daily se enfoca en flujo y bloqueos (no en rendir cuentas)? [ ] Sí [ ] No
   - ¿Asisten stakeholders/usuarios reales a la Review? [ ] Sí [ ] No
   - Principal mejora prioritaria: ____________________________________

3. **Lectura de flujo (práctica en directo):**
   - Fórmula Ley de Little: Cycle Time = WIP / Throughput
   - Cuello de botella detectado en el CFD proyectado: ________________

4. **Transformación GQM + OKR (Actividad 2):**
   - Objetivo (O): ____________________________________________________
   - KR1 (Outcome): ___________________________________________________
   - KR2 (Outcome): ___________________________________________________
   - Pregunta GQM: ____________________________________________________
   - Métrica Leading: _________________ | Métrica Lagging: ____________
```

### Plantilla práctica replicable: Cuadro de Mando Ejecutivo de Entrega y Valor (1 página)

| Bloque ejecutivo | Indicador / Artefacto | Situación actual | Meta / Umbral | Tendencia | Decisión o acción requerida |
| :--- | :--- | :--- | :--- | :---: | :--- |
| **1. Valor de negocio (OKR)** | KR1 (ej. % clientes recurrentes en portal) | 14 % | 40 % (fin Q2) | ↓ Riesgo | Priorizar corrección integración precios ERP |
| **1. Valor de negocio (OKR)** | KR2 (ej. tasa incidencias de precio) | 4,2 % pedidos | < 0,5 % | ↓ Riesgo | Reforzar pruebas automatizadas de contratos API |
| **2. Alcance y previsión** | Gráfico *Burnup* (alcance vs. completado) | 72 / 128 historias | Rango entrega: S15-S17 | → Atención | Congelar nuevas peticiones hasta validar piloto |
| **3. Salud del flujo y calidad** | *Cycle Time* medio / WIP / Defectos críticos | 16,2 d / WIP 14 / 4 críticos | ≤ 6 d / WIP ≤ 5 / 0 críticos | ↓ Alerta | Limitar WIP y crear SLA de validación ERP |
| **4. Bloqueos y decisiones para el patrocinador** | Dependencia crítica externa (ERP) | 9,5 días espera media | ≤ 1,5 días espera | ↑ Escalar | Aprobar asignación del 30 % del experto ERP al equipo |

### Lecturas y recursos recomendados
* **Project Management Institute (PMI).** *Guía de los Fundamentos para la Dirección de Proyectos (Guía del PMBOK) — 8.ª edición* (enfoque en dominio de desempeño de Entrega, Medición y Principio de Valor; *nota: verificar edición final publicada y correspondencia exacta de capítulos antes de distribuir referencias de página*).
* **PMI & Agile Alliance.** *Guía Práctica de Ágil (Agile Practice Guide)* — Capítulos sobre ejecución en entornos ágiles, métricas, resolución de problemas frecuentes y liderazgo servicial.
* **Schwaber, K. y Sutherland, J.** *La Guía de Scrum (The Scrum Guide)* — Revisión de artefactos, incremento, DoD y eventos de inspección y adaptación.
* **Vacanti, D. S.** *Actionable Agile Metrics for Predictability* — Referencia práctica sobre *Cycle Time*, WIP, Ley de Little y CFD.
* **Doerr, J.** *Mide lo que importa (Measure What Matters)* — Aplicación práctica de OKR orientados a resultados.
* **Basili, V. R., Caldiera, G. y Rombach, H. D.** *The Goal Question Metric Approach* — Fundamento original del método GQM.

### Vídeos, artículos y fuentes adicionales
> **Nota importante para el formador:** Todos los enlaces, vídeos, artículos y referencias externas listados a continuación son propuestas temáticas cuya vigencia, disponibilidad, idioma y alineación con el temario oficial vigente del examen PMP **deben validarse antes de utilizarse en la formación**.

* Vídeo explicativo corto sobre *Cumulative Flow Diagram (CFD) y Ley de Little en Kanban* (buscar recurso actualizado en español o subtitulado, duración recomendada 5-8 min — *validar enlace antes de impartir*).
* Artículo práctico sobre *"Output vs. Outcome en gestión de productos digitales y OKR"* (p. ej., publicaciones de *Product Talk* / Teresa Torres o *Silicon Valley Product Group* — *validar disponibilidad y traducción antes de impartir*).
* Guía de referencia de PMI sobre *Examination Content Outline (ECO) de PMP* para contrastar las tareas evaluables en los dominios Personas, Procesos y Entorno Empresarial (*verificar versión vigente del ECO antes de la sesión*).

### Glosario de términos clave

| Término | Definición operativa |
| :--- | :--- |
| **Backlog Refinement** | Proceso continuo de revisar, clarificar, descomponer y reordenar elementos del Product Backlog para mantenerlos preparados justo a tiempo. |
| **Burndown Chart** | Gráfico que muestra el trabajo restante pendiente a lo largo del tiempo en una iteración o proyecto. |
| **Burnup Chart** | Gráfico acumulado que representa por separado el alcance total y el trabajo completado a lo largo del tiempo, haciendo visibles los cambios de alcance. |
| **Cumulative Flow Diagram (CFD)** | Gráfico de áreas apiladas que visualiza el número acumulado de elementos en cada etapa del flujo de trabajo a lo largo del tiempo para detectar WIP, *Cycle Time* y cuellos de botella. |
| **Cycle Time** | Tiempo transcurrido desde que el equipo inicia el trabajo activo sobre un elemento hasta que este queda completamente terminado según la DoD. |
| **Definition of Done (DoD)** | Acuerdo explícito y compartido sobre todos los criterios de calidad que debe satisfacer un elemento para considerarse terminado y potencialmente utilizable. |
| **Definition of Ready (DoR)** | Guía colaborativa que describe las condiciones deseables para que una historia de usuario esté suficientemente clara antes de entrar en una iteración. |
| **Goal-Question-Metric (GQM)** | Metodología que vincula objetivos de negocio con preguntas diagnósticas concretas y estas con métricas específicas, evitando indicadores sin utilidad. |
| **Impedimento** | Obstáculo que ralentiza o bloquea el progreso del equipo y cuya resolución suele requerir facilitación o escalado organizacional. |
| **INVEST** | Acrónimo que resume atributos de una buena historia de usuario: *Independent, Negotiable, Valuable, Estimable, Small, Testable*. |
| **Lead Time** | Tiempo total transcurrido desde que una petición se registra o solicita hasta que se entrega efectivamente al cliente o usuario final. |
| **Ley de Goodhart** | Principio según el cual cuando una métrica se convierte en un objetivo de control o incentivo directo, deja de ser una medida fiable porque induce comportamientos distorsionados. |
| **Ley de Little** | Relación de teoría de colas aplicada al flujo de trabajo: en un sistema estable, $\text{Cycle Time medio} = \text{WIP medio} / \text{Throughput medio}$. |
| **OKR (Objectives and Key Results)** | Marco de gestión por objetivos que combina metas cualitativas inspiradoras (O) con resultados clave cuantitativos centrados en *outcomes* (KR). |
| **Outcome vs. Output** | *Output* es el entregable producido (funcionalidad, documento); *outcome* es el cambio medible de comportamiento o valor que dicho entregable genera en clientes o negocio. |
| **Story Points** | Unidad de medida relativa que estima el esfuerzo global de un elemento considerando complejidad, incertidumbre y volumen de trabajo dentro de un equipo específico. |
| **Throughput** | Cantidad de elementos de trabajo completados por unidad de tiempo (p. ej., historias por semana o por iteración). |
| **Velocidad (*Velocity*)** | Cantidad de trabajo completamente terminado (normalmente en *story points*) que un equipo completa en una iteración; útil únicamente para la previsión interna de ese equipo. |
| **WIP (*Work in Progress*)** | Número de elementos de trabajo ya iniciados que aún no han alcanzado el estado de terminado. |

---

## 9. Adaptaciones

Aunque el **Programa de Preparación PMP y Dirección de Proyectos** se imparte en modalidad **100 % online**, a continuación se detallan las adaptaciones concretas para sus dos formatos principales (online síncrono y asíncrono) y una variante presencial opcional para despliegues corporativos *in-company* o híbridos.

### Sesión online síncrona (modalidad principal del programa)
* **Dinamización y fatiga digital:** Alternar bloques de máximo 20-35 minutos de exposición con interacciones cada 10-12 minutos (encuestas Mentimeter, anotaciones en pantalla sobre el CFD, micropreguntas situacionales en el chat).
* **Trabajo colaborativo en salas (*breakout rooms*):** Configurar previamente las salas de 4-5 personas y asignar roles rotativos (facilitador de tiempo, secretario en Miro/Mural y portavoz) para evitar silencios iniciales.
* **Visibilidad de métricas:** Compartir el archivo de datos del caso *MercaSalud Digital* en formato PDF y enlace directo al tablero colaborativo antes de abrir las salas para no perder minutos técnicos.
* **Grabación y accesibilidad:** Grabar las partes expositivas y de puesta en común (no las salas privadas) y publicarlas en el LMS junto con los murales exportados en PDF.

### Sesión asíncrona (trabajo autónomo en campus virtual / LMS)
* **Píldoras de microlearning:** Dividir la teoría en 4 vídeos cortos de 12-15 minutos correspondientes a los apartados 3.1 a 3.4, intercalados con una pregunta de verificación rápida (*quiz* embebido) tras cada vídeo.
* **Resolución individual del caso práctico:** En lugar de debate en sala, el alumnado descarga el dossier de *MercaSalud Digital*, sube su *Plan de Intervención de 30 días* al foro temático y realiza revisión por pares (*peer review*) a la propuesta de al menos un compañero usando una lista de cotejo simplificada.
* **Transferencia y autoevaluación:** Completar la Actividad 3 (*Ficha de Transferencia Ejecutiva*) y el mini-simulador PMP autocorregible de 5 preguntas con retroalimentación explicativa detallada por cada opción (correcta y distractores).
* **Soporte docente:** Habilitar un hilo de dudas en el foro con respuesta en menos de 48 horas laborables y una tutoría breve opcional de cierre semanal.

### Sesión presencial (adaptación para formato *in-company* o híbrido)
* **Activación física y visual:** Sustituir Mentimeter por votación con tarjetas de colores (verde = buena práctica, amarillo = riesgo, rojo = mito peligroso) o desplazamiento por el aula hacia tres zonas etiquetadas.
* **Simulación tangible de flujo:** Realizar el análisis de flujo y WIP con *post-its* sobre una pizarra física Kanban (simulando la columna atascada de "Validación ERP") para hacer tangible la Ley de Little.
* **Caso práctico en mesas de trabajo:** Entregar dossier impreso, rotafolios (*flipcharts*) y rotuladores; realizar una galería de soluciones (*gallery walk*) donde cada equipo visita el cuadrante GQM + OKR de otro grupo dejando *post-its* con preguntas desde el rol de "Director Financiero".

---

## 10. Conexión con el programa

* **Conocimientos previos que refuerza:** Consolida los principios de agilidad, Lean y Kanban (Bloque 4, Tema 1), selección del ciclo de vida orientado a producto (Bloque 4, Tema 2) y los fundamentos de seguridad psicológica, roles y liderazgo servicial trabajados en el **Bloque 4, Tema 3 (*Creación de un entorno ágil*)**, trasladando ese entorno a la ejecución iterativa diaria, la medición empírica y el control orientado a valor.
* **Competencias profesionales y PMP que desarrolla:**
  * *Dominio Personas (PMP):* Liderazgo servicial, eliminación de impedimentos, protección de la seguridad psicológica del equipo y gestión de expectativas de patrocinadores.
  * *Dominio Procesos (PMP):* Gestión empírica del alcance y cronograma, control de calidad basado en DoD, análisis de métricas de flujo y *reporting* transparente.
  * *Dominio Entorno Empresarial (PMP):* Entrega continua de valor de negocio, alineación estratégica mediante OKR/GQM y gestión de beneficios (*outcomes* frente a *outputs*).
* **Conexión con el tema anterior y posterior del plan de 9 bloques / 27 temas:**
  * *Conexión con el tema anterior (Bloque 4, Tema 3 — Creación de un entorno ágil):* Mientras el cierre del Bloque 4 estableció las condiciones culturales, roles ágiles, acuerdos de equipo y liderazgo servicial necesarios para operar con agilidad, este Tema 1 del Bloque 5 muestra cómo **entregar valor de forma iterativa, medir el flujo real sin sesgos y rendir cuentas a patrocinadores**.
  * *Conexión con el tema posterior (Bloque 5, Tema 2 — Agilidad organizacional, marcos de referencia y escalamiento):* Una vez dominada la entrega y medición a nivel de equipo y producto (y comprendido cómo las dependencias externas —como el ERP en el caso práctico— frenan la agilidad), el Tema 2 amplía la mirada a la **escala organizacional**: cambio cultural, portafolios Lean, oficinas de valor (VMO/xMO), selección entre marcos ágiles, escalamiento multiequipo y métricas DevOps/DORA.
* **Evidencia de aprendizaje que dejará el alumnado:**
  1. Ficha GQM + OKR construida colaborativamente en la Actividad 2.
  2. Plan de Intervención de 30 días del caso *MercaSalud Digital S.L.*
  3. **Ficha de Transferencia Ejecutiva** aplicada a un proyecto real del participante (evaluada mediante rúbrica y archivada en su portafolio del programa).
  4. Resultado y revisión comentada del mini-simulador de 5 preguntas situacionales tipo examen PMP.

---

## Siguientes pasos para el formador

1. **Validar referencias antes de la impartición:** Comprobar la vigencia de los enlaces externos, vídeos recomendados y la terminología exacta de la edición publicada de la *Guía del PMBOK (8.ª edición)* y del *Examination Content Outline (ECO)* vigente de PMI.
2. **Preparar el entorno digital 48 horas antes:** Configurar las 5 preguntas de activación en Mentimeter/Slido, crear las plantillas de la Actividad 2 y del caso *MercaSalud Digital* en Miro/Mural y cargar el mini-simulador PMP de 5 preguntas en el LMS.
3. **Personalizar los ejemplos al perfil del grupo:** Revisar el listado de inscritos para confirmar qué proporción proviene de TI, industria, servicios o administración, y ajustar los ejemplos verbales de flujo y *outcomes* a sus sectores.
4. **Controlar rigurosamente los tiempos de la sesión:** Respetar la pausa de 15 minutos en el minuto 95 y garantizar al menos 30 minutos netos de trabajo en equipo en el caso práctico, ya que es donde el alumnado interioriza el peligro de comparar velocidades y el diseño de cuadros de mando GQM/OKR.
5. **Seguimiento asíncrono y retroalimentación:** Publicar la grabación y los murales en las 24 horas posteriores, corregir las *Fichas de Transferencia Ejecutiva* con la rúbrica de 4 niveles y recoger 2 ejemplos anónimos destacados para abrir el **Tema 2 (Agilidad organizacional, marcos de referencia y escalamiento)**.
