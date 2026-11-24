# Tema 9. Automatización de tareas repetitivas y organización de información del modelo

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Automatización de tareas repetitivas y organización de información del modelo |
| **Programa** | IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas *(Especialización Técnica; no es un MBA ni otorga habilitación legal para firmar proyectos)* |
| **Bloque y posición dentro del programa** | Bloque 6: Inteligencia artificial aplicada a instalaciones eléctricas · Tema 9 de 11 (Tema 48 de 50 del programa) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Modalidad** | Online / Híbrida interactiva |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Avanzado |
| **Prerrequisitos** | Manejo intermedio de Revit MEP (familias, sistemas, parámetros, vistas y láminas del Módulo 3 y Módulo 4), estandarización documental BIM (Tema 8 del Bloque 6) e ingeniería de *prompts* (Tema 7 del Bloque 6). |
| **Resultado general de aprendizaje** | Clasificar tareas repetitivas candidatas a automatización en modelos eléctricos BIM, organizar la arquitectura de información del modelo Revit MEP y redactar especificaciones funcionales paso a paso asistidas por IA con controles de validación tabular y pruebas seguras en copia de respaldo antes de cualquier implementación en Dynamo, API de Revit o complementos. |

---

## 2. Objetivos de aprendizaje

1. Identificar las tareas administrativas y de gestión de datos en modelos eléctricos de Revit MEP aptas para automatización frente a decisiones de diseño y seguridad eléctrica que exigen criterio técnico humano. *(Nivel de Bloom: Recordar)*
2. Explicar el principio de «especificación y saneado tabular previos a la automatización», así como las dependencias reales de versión de Revit, paquetes de Dynamo, API, licencias y entorno controlado. *(Nivel de Bloom: Comprender)*
3. Aplicar *prompts* técnicos estructurados para diseñar lógicas paso a paso, reglas de excepción y validaciones tabulares previas orientadas a renombrado de láminas/circuitos y detección de parámetros vacíos. *(Nivel de Bloom: Aplicar)*
4. Analizar los riesgos operativos de ejecutar modificaciones masivas sin respaldo sobre un modelo eléctrico (pérdida de numeración de circuitos, ruptura de etiquetas en planos PDF o desajustes con *Direct Link* hacia Twinmotion). *(Nivel de Bloom: Analizar)*
5. Evaluar y validar un procedimiento de automatización acotada mediante pruebas piloto en copia de respaldo, comparación antes/después (*diff*) y plan de reversión (*rollback*). *(Nivel de Bloom: Evaluar)*

---

## 3. Contenidos esenciales

### 3.1. Criterios para identificar tareas repetitivas candidatas a automatización en modelos eléctricos

#### Explicación breve y clara

En el modelado eléctrico BIM se invierten decenas de horas en operaciones mecánicas de alto volumen: comprobar qué luminarias o tomas tienen un parámetro vacío, estandarizar mayúsculas y códigos en cincuenta láminas, ordenar el prefijo de circuitos según el tablero origen o exportar tablas de control antes de imprimir a PDF. Estas operaciones siguen reglas lógicas deterministas y son excelentes candidatas a automatización.

Sin embargo, **automatizar no significa delegar el criterio de ingeniería**. Determinar la sección mínima admisible de un conductor, elegir el calibre y curva de una protección magnetotérmica o resolver el trazado de una bandeja portacables frente a obstáculos reales depende de condiciones físicas, normativas vigentes según país y seguridad de las personas. Antes de diseñar cualquier automatización con ayuda de ChatGPT o Claude, debemos filtrar cada tarea mediante una **matriz de idoneidad** basada en cuatro variables: frecuencia, volumen de elementos, determinismo de la regla e impacto si falla.

#### Conceptos clave

- **Determinismo de regla:** Condición según la cual una tarea puede expresarse sin ambigüedad mediante criterios objetivos (`SI [Parámetro_A] está vacío ENTONCES marcar en tabla`) sin requerir juicio ingenieril ni interpretación normativa.
- **Matriz Semáforo de Automatización:** Clasificación operativa en tres niveles: *Verde* (lectura, auditoría y validación tabular previa), *Ámbar* (escritura masiva acotada como renombrado tras validación humana) y *Rojo* (decisiones normativas de cálculo, protecciones o seguridad no automatizables a ciegas).
- **Retorno operativo neto:** Comparación realista entre el tiempo ahorrado al automatizar una tarea repetitiva y el tiempo necesario para especificar, probar, mantener y verificar su resultado según versión de Revit.
- **Automatización por lectura primero:** Principio seguro según el cual los primeros flujos automatizados de un equipo deben **leer y auditar** información del modelo antes de intentar modificar parámetros masivamente.

#### Definiciones necesarias

- **Tarea candidata a automatización:** Operación repetitiva, de alto volumen y reglas explícitas en un modelo BIM (como verificación de campos vacíos, ordenación de vistas o renombrado conforme a tabla aprobada) cuya correcta ejecución puede verificarse objetivamente.
- **Falsa automatización («caja negra»):** Ejecución de rutinas o scripts generados por IA sin comprender sus precondiciones, dependencias de versión o efectos colaterales sobre circuitos, etiquetas o vínculos gráficos.

#### Ejemplo práctico realista

Un estudio gestiona un edificio de oficinas en Revit MEP con `420 luminarias`, `310 tomacorrientes`, `64 circuitos` distribuidos en `5 tableros` y `48 láminas`. El equipo evalúa cuatro tareas con apoyo de IA:
1. *Detectar qué luminarias carecen de parámetro `Ref_Fotometria` (`.ldt`/`.ies`) o `Potencia_W`:* **Verde** (solo lectura; determinista; ahorra ~2,5 h por revisión sin riesgo de alterar el modelo).
2. *Renombrar 48 láminas a partir de un CSV validado manualmente:* **Ámbar** (escritura controlada; requiere copia de respaldo, verificación de caracteres prohibidos y comprobación de cajetines PDF).
3. *Rellenar automáticamente el código `Zona_Mantenimiento` heredándolo del espacio/habitación en que se ubica cada equipo:* **Ámbar** (requiere comprobar qué ocurre si una luminaria está en falso techo fuera de los límites del espacio Revit).
4. *Calcular automáticamente sección en $\text{mm}^2$ e interruptor en A dentro de Revit para emitir planos definitivos:* **Rojo** (exige verificación normativa según país y edición vigente, tablas térmicas, agrupamiento y $I_{cc}$ fuera de una regla simplista).

#### Errores frecuentes

- Intentar automatizar tareas poco frecuentes que consumen más horas en diseño y depuración que en ejecución manual.
- Pedir a ChatGPT o Claude que genere directamente un script complejo para modificar cientos de elementos sin haber clasificado antes el riesgo de escritura.
- Confundir la automatización del llenado de parámetros en Revit MEP con una validación reglamentaria de cálculo eléctrico.
- Ignorar los casos límite (*edge cases*), como luminarias alojadas en vínculos arquitectónicos o circuitos de reserva sin carga asignada.

#### Preguntas que el alumnado debería poder responder

1. ¿Qué cuatro criterios permiten decidir si una tarea eléctrica BIM merece ser automatizada o debe mantenerse bajo revisión manual?
2. ¿Por qué conviene comenzar automatizando auditorías de solo lectura antes que escrituras masivas de parámetros?
3. Cita dos tareas del modelo eléctrico BIM aptas para automatización controlada y dos que no deben automatizarse sin verificación técnica independiente.

---

### 3.2. Organización de la información del modelo eléctrico: jerarquía, sistemas y limpieza de datos

#### Explicación breve y clara

Automatizar sobre un modelo desordenado solo sirve para **propagar errores a mayor velocidad**. Antes de pensar en Dynamo, API o cualquier complemento, el proyecto en Revit MEP necesita una arquitectura de información limpia y coherente: organización estructurada del Navegador de proyectos (*Browser Organization*) por disciplina/subdisciplina (`Alumbrado`, `Fuerza`, `Acometidas`, `Coordinación`), correcta clasificación de sistemas eléctricos, congruencia entre niveles de referencia y saneado tabular previo de los datos.

En esta fase, la IA es un excelente asistente de arquitectura de datos: podemos describir de forma anonimizada la estructura caótica actual de vistas, tipos de canalización y tablas de parámetros para que ChatGPT o Claude propongan un **árbol jerárquico normalizado**, reglas de filtrado de vistas de trabajo frente a vistas de plano y un esquema de limpieza de datos en tabla CSV antes de tocar el modelo.

#### Conceptos clave

- **Arquitectura de información del modelo:** Diseño estructurado de cómo se agrupan vistas, láminas, sistemas, familias y parámetros dentro del archivo Revit MEP para que cualquier técnico localice elementos en segundos.
- **Separación Trabajo vs. Documentación:** Clasificación explícita en el navegador que aísla las vistas auxiliares de modelado (`W_3D_Coordinacion`, `W_PB_Trazado`) de las vistas vinculadas a láminas PDF (`P_EL_AL_PB`).
- **Saneado tabular previo (*Data Staging*):** Extracción de propiedades clave a hoja de cálculo o CSV para detectar valores nulos, textos mal escritos o unidades inconsistentes antes de plantear una actualización controlada en el modelo.
- **Integridad de sistemas eléctricos:** Verificación de que todos los aparatos eléctricos, luminarias y tomas pertenecen a su circuito, tablero origen y clasificación de carga correcta dentro de Revit MEP.

#### Definiciones necesarias

- **Organización del Navegador (*Browser Organization*):** Configuración interna de Revit basada en parámetros de vista y lámina que ordena automáticamente el árbol del proyecto por disciplina, subdisciplina, uso o fase de entrega.
- **Clasificación de carga eléctrica:** Atributo técnico del modelo BIM que agrupa consumos homogéneos (Alumbrado, Fuerza, Climatización, Emergencia) permitiendo aplicar factores de demanda de forma coherente con el cuadro de cargas externo.

#### Ejemplo práctico realista

Un modelo de edificio terciario recibido para revisión presenta `38 vistas sin prefijo`, `14 luminarias de emergencia` colocadas como elementos genéricos sin sistema eléctrico asignado y tubos de alumbrado mezclados con acometidas en la misma categoría visual. Con apoyo de Claude sobre un listado CSV anonimizado de vistas y familias, el coordinador define una estructura en 3 niveles:
1. **Navegador de Vistas:** `Disciplina (Electricidad)` → `Uso (01_Documentación / 02_Trabajo / 03_Coordinación)` → `Subdisciplina (Alumbrado / Fuerza / Acometidas / Unifilares)`.
2. **Clasificación de Canalizaciones y Equipos:** Parámetro `EL_Sistema` obligatorio con valores cerrados (`ALUMBRADO`, `EMERGENCIA`, `FUERZA`, `ACOMETIDA`, `TIERRA`).
3. **Limpieza previa en tabla:** Al cruzar la lista exportada, se detecta que las `14 luminarias de emergencia` de $6\text{ W}$ ($84\text{ W}$ totales) no sumaban en ningún tablero porque usaban una familia de «Modelo Genérico» en vez de «Luminaria» con conector eléctrico. El saneado corrige primero la familia y asigna circuito antes de aplicar cualquier rutina posterior.

#### Errores frecuentes

- Tratar de automatizar la numeración de láminas cuando aún coexisten vistas duplicadas obsoletas y sin clasificar en el navegador.
- Usar familias descargadas de internet en categoría incorrecta (por ejemplo, luminarias modeladas como mobiliario o equipo mecánico sin conector eléctrico).
- Sobrescribir manualmente textos de etiquetas (*Tags*) en vez de corregir el parámetro fuente en el elemento o en el tipo.
- Modificar nombres o categorías de elementos ya vinculados a vistas de Twinmotion sin advertir que esto puede alterar la agrupación de materiales o jerarquía en la siguiente actualización por *Direct Link*.

#### Preguntas que el alumnado debería poder responder

1. ¿Por qué la limpieza de familias, sistemas y navegador de proyectos debe preceder siempre a cualquier flujo de automatización?
2. ¿Qué problema técnico genera modelar luminarias o tomas de corriente sin conector eléctrico o bajo una categoría genérica?
3. ¿Cómo puedes usar una tabla CSV exportada de Revit y asistida por IA para validar que todas las vistas listas para plano cumplen la jerarquía del BEP?

---

### 3.3. Especificación funcional, pseudocódigo y lógica paso a paso asistida por IA

#### Explicación breve y clara

Uno de los fallos más habituales al usar ChatGPT o Claude para automatizar Revit es pedir directamente: *«Dame el script de Python o el grafo de Dynamo para hacer esto»*. El resultado suele contener métodos obsoletos de la API de Revit, nombres de nodos de paquetes externos que no existen en vuestro equipo o ausencia total de control de errores.

El método profesional consiste en utilizar la IA primero como **analista funcional**: redactar con ella una **especificación paso a paso (Entradas → Precondiciones → Transformación → Excepciones → Salidas → Registro de auditoría)** y su **pseudocódigo independiente de herramienta**. Solo cuando esa lógica ha sido validada por el técnico, se evalúa la vía de implementación concreta —ya sea mediante tablas Excel/CSV con revisión controlada, Dynamo, Python/API de Revit (p. ej., entornos tipo pyRevit) o complementos comerciales autorizados—, **dejando explícito que la viabilidad técnica depende siempre de la versión exacta de Revit, los paquetes disponibles, las licencias, las políticas de TI del estudio y las pruebas en un entorno controlado**.

#### Conceptos clave

- **Especificación funcional previa:** Documento breve que describe qué debe hacer exactamente la automatización, qué condiciones impiden su ejecución y qué reporte genera sin depender aún de un lenguaje concreto.
- **Pseudocódigo auditable:** Descripción secuencial en lenguaje estructurado (`PARA CADA elemento EN selección`, `SI parámetro ES nulo`) comprensible tanto para ingenieros eléctricos sin experiencia en programación como para desarrolladores BIM.
- **Dependencia de versión y entorno:** Restricción real por la cual un script o grafo válido para Revit 2022 puede fallar en Revit 2024 o 2025 (por ejemplo, cambios en la API de unidades internas de Revit o nodos de terceros), exigiendo validación técnica del entorno.
- **Manejador de excepciones (*Fail-Safe*):** Regla explícita incluida desde el diseño para detener o aislar elementos anómalos (elementos bloqueados en subproyectos, solo lectura o tipos sin parámetro) en lugar de abortar a mitad de proceso.

#### Definiciones necesarias

- **Especificación lógica de automatización:** Descripción formal y verificable de entradas, reglas de transformación, validaciones, excepciones y salidas de un flujo repetitivo antes de construirlo en Dynamo, código o herramienta de intercambio tabular.
- **Registro de ejecución (*Log*):** Archivo o tabla generada tras correr una rutina que detalla elemento por elemento (`ElementId` o código) qué valor existía antes, qué valor se escribió después y qué elementos se omitieron por error o restricción.

#### Ejemplo práctico realista

Un proyectista desea comprobar automáticamente antes de cada entrega qué circuitos y paneles carecen de parámetros obligatorios y detectar anomalías simples. En lugar de pedir código ciego, usa un *prompt* para redactar con Claude la **especificación funcional `SPEC-AUTO-02`**:
1. **Entradas:** Lista de elementos de categoría `Circuitos Eléctricos` y `Equipos Eléctricos` en el modelo activo (o CSV exportado).
2. **Precondiciones:** Confirmar que existen en el proyecto los parámetros compartidos `EL_CaidaTension_Calc_Pct`, `EL_Longitud_Est_m` y `EL_Cuadro_Origen`; si falta alguno en el esquema del modelo, **detener y reportar error de configuración**.
3. **Lógica paso a paso (solo lectura en Fase 1):**
   - Leer `ID_Circuito`, `Nombre_Carga`, `Tensión_V`, `Potencia_Aparente_VA`, `Longitud_m` y `EL_CaidaTension_Calc_Pct`.
   - Si `Potencia_Aparente_VA == 0` y el circuito NO contiene `"RESERVA"` en `Nombre_Carga` → registrar alerta `ALTA: Circuito activo con potencia nula`.
   - Si `EL_CaidaTension_Calc_Pct` está vacío → registrar alerta `MEDIA: Dato faltante (debe importarse o verificarse desde cálculo externo)`.
   - Exportar tabla de incidencias con fecha y hora sin modificar ni un solo parámetro del `.rvt`.
4. **Nota de implementación realista:** Este diseño puede ejecutarse inicialmente mediante exportación de *Schedule* + macro/hoja verificada o implementarse en Dynamo/Python según la versión instalada de Revit, permisos de scripts del estudio y pruebas previas en copia de respaldo.

#### Errores frecuentes

- Copiar y ejecutar código Python o sugerencias de nodos Dynamo generadas por IA directamente sobre el modelo central de producción.
- No verificar si la versión de la API de Revit usada en el ejemplo de la IA coincide con la instalada en el estudio (especialmente en conversiones de unidades internas de longitud o potencia).
- Diseñar rutinas sin manejo de excepciones para elementos en subproyectos (*Worksets*) prestados por otros usuarios o familias anidadas bloqueadas.
- Asumir que todos los ordenadores del equipo tienen instalados los mismos paquetes de terceros en Dynamo o las mismas licencias de complementos.

#### Preguntas que el alumnado debería poder responder

1. ¿Por qué redactar primero una especificación funcional y un pseudocódigo con IA reduce drásticamente los fallos frente a pedir directamente un script ejecutable?
2. ¿Qué factores técnicos de entorno condicionan siempre la implementación real en Dynamo, Python/API de Revit o complementos?
3. ¿Qué datos mínimos debe contener un registro de ejecución (*log*) para poder auditar una tarea automatizada?

---

### 3.4. Protocolo de seguridad, pruebas piloto en copia de respaldo y control de cambios

#### Explicación breve y clara

Incluso una lógica impecable puede producir resultados inesperados en un modelo complejo: un carácter no permitido en un nombre de lámina, una etiqueta que pierde su referencia o un cambio de nomenclatura que afecta el enlace visual hacia Twinmotion. Por esa razón, toda automatización que escriba o modifique datos en un modelo BIM eléctrico debe regirse por un **protocolo de seguridad en cuatro barreras**:
1. **Copia de respaldo fechada e inmutable:** Nunca ejecutar cambios masivos sobre el archivo vivo; trabajar siempre sobre una copia aislada (`PROY_BACKUP_PRE_AUTO_YYYYMMDD.rvt`).
2. **Prueba piloto acotada:** Probar primero sobre un subconjunto reducido (`5 a 10 elementos` o `1 planta`) y comprobar visualmente el comportamiento de etiquetas, *Schedules* y planos.
3. **Auditoría *Diff* (Antes vs. Después):** Comparar la tabla exportada previa con la tabla posterior para confirmar que solo cambiaron exactamente los registros previstos y las sumas de potencia total en W o kVA permanecieron intactas.
4. **Plan de reversión (*Rollback*) y registro:** Documentar versión de la herramienta/rutina, operador, fecha y resultado antes de promover el archivo o sincronizar el *Direct Link* con Twinmotion.

#### Conceptos clave

- **Entorno *Sandbox* (Copia de respaldo controlada):** Archivo duplicado y desconectado del modelo central o del entorno compartido de producción donde se ensayan flujos automatizados sin riesgo para el proyecto.
- **Comparación *Diff* tabular:** Contraste sistemático fila a fila entre la exportación previa y posterior a la automatización para verificar que no hubo sobrescrituras accidentales ni alteración de cargas eléctricas.
- **Prueba piloto acotada:** Validación inicial sobre una muestra mínima representativa que permite detectar efectos colaterales en etiquetas, filtros de vista o sincronización gráfica antes de escalar a todo el edificio.
- **Plan de reversión (*Rollback*):** Procedimiento predefinido para restaurar instantáneamente el estado anterior verificado si el *diff* o la revisión visual en planos PDF detecta una anomalía.

#### Definiciones necesarias

- **Copia de respaldo previa a automatización:** Duplicado íntegro, fechado y almacenado fuera de la ruta de sincronización activa del equipo que sirve como punto seguro de ensayo y restauración.
- **Efecto colateral en entregables:** Alteración imprevista provocada por una modificación automática (por ejemplo, desaparición de texto en una etiqueta de plano PDF, ruptura de filtro de color por sistema o pérdida de ajuste de material en Twinmotion tras cambiar nombres de tipo).

#### Ejemplo práctico realista

Antes de aplicar un renombrado masivo de `48 láminas` y `120 tipos de luminaria` en el modelo de un edificio docente, el coordinador BIM ejecuta el protocolo seguro sobre la copia `PROY_DOCENTE_BACKUP_20261124.rvt` probando solo con la **Planta Baja (6 láminas y 15 tipos)**:
1. Exporta `Pre_Auto_PB.csv` y registra suma total de carga de alumbrado en PB: `3 840 W`.
2. Ejecuta el renombrado controlado desde la tabla de mapeo validada previamente con apoyo de IA.
3. Exporta `Post_Auto_PB.csv` y revisa las 6 láminas impresas en PDF borrador + el enlace en Twinmotion:
   - **Hallazgo crítico en la prueba piloto:** Al cambiar el nombre de tipo de la familia de luminaria, un filtro de vista basado en la regla `"Nombre de Tipo contiene [LED-EM]"` dejó de colorear en rojo las 14 luminarias de emergencia en el plano `EL-AL-PB-001` porque el nuevo código pasó a usar `EMERG` en lugar de `LED-EM`.
4. Gracias al ensayo en copia de respaldo sobre un subconjunto piloto, se actualiza la regla del filtro de vista antes de procesar el resto de las plantas, evitando emitir `48 planos` con simbología de emergencia mal coloreada.

#### Errores frecuentes

- Trabajar directamente sobre el archivo central compartido o confiar en «Deshacer (`Ctrl+Z`)» tras modificar cientos de parámetros.
- Dar por buena una automatización porque «terminó sin dar mensaje de error en pantalla» sin abrir ni una sola lámina PDF ni comprobar las sumas del *Schedule*.
- Omitir el control del impacto en filtros de visualización, plantillas de vista o *Direct Link* de Twinmotion tras renombrar familias o tipos.
- No guardar el archivo de registro (*log*) ni la copia de respaldo, haciendo imposible saber qué elementos cambiaron si días después aparece una discrepancia en el cuadro de cargas.

#### Preguntas que el alumnado debería poder responder

1. ¿Cuáles son las cuatro barreras mínimas de seguridad antes de aplicar una modificación masiva sobre un modelo eléctrico en Revit MEP?
2. ¿Qué puede revelar una prueba piloto sobre 10 elementos y sus láminas PDF que nunca verías en la consola de ejecución de un script?
3. ¿Cómo comprobarías mediante una tabla *diff* que un renombrado automatizado de luminarias no alteró ni las potencias totales ni la asignación a circuitos?

---

## 4. Metodología didáctica

Duración total de la secuencia didáctica: **240 minutos (4 horas)**.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
|---|---|---|---|
| **1. Apertura y reflexión sobre riesgos reales** | 15 min | Presenta el Tema 9, expone un caso real breve de corrupción documental por automatización sin respaldo y realiza la evaluación diagnóstica inicial. | Responde el cuestionario diagnóstico y comparte qué tareas repetitivas consumen más tiempo en sus modelos eléctricos. |
| **2. Microexposición: Matriz Semáforo y organización del modelo** | 25 min | Explica los criterios Verde/Ámbar/Rojo de idoneidad para automatizar y la arquitectura limpia de navegador, sistemas y datos tabulares en Revit MEP. | Analiza la matriz de clasificación y revisa qué requisitos previos faltan habitualmente en los modelos que recibe o crea. |
| **3. Actividad 1 (Activación): Semáforo de automatización** | 20 min | Entrega una lista de 8 tareas eléctricas BIM mixtas y guía la discusión técnica para frenar automatizaciones temerarias («caja negra»). | Clasifica en parejas las 8 tareas en Verde, Ámbar o Rojo justificando riesgo normativo, determinismo y necesidad de juicio humano. |
| **4. Exposición aplicada: especificación lógica y dependencias reales** | 25 min | Demuestra en vivo cómo pedir a ChatGPT/Claude una especificación funcional y pseudocódigo sin inventar APIs, aclarando límites por versión de Revit, Dynamo y licencias. | Contrasta la claridad del pseudocódigo frente a código sin validar y anota los campos obligatorios de una especificación segura. |
| **5. Actividad 2 (Aplicación técnica): especificación y validación CSV** | 50 min | Facilita un CSV exportado con anomalías y supervisa que cada equipo redacte la especificación completa con reglas de excepción y registro *log*. | Diseña con apoyo de IA la especificación paso a paso para auditar parámetros vacíos y validar una tabla de renombrado previa a ejecución. |
| **6. Pausa activa y análisis de efectos colaterales** | 15 min | Modera una puesta en común sobre efectos secundarios ocultos (filtros rotos, etiquetas PDF, desajuste de *Direct Link* en Twinmotion). | Expone las excepciones críticas detectadas en su especificación y debate cómo prevenirlas en fase de pruebas. |
| **7. Actividad 3 (Transferencia): organización de modelo y protocolo seguro** | 50 min | Proporciona la plantilla de arquitectura de modelo y protocolo *Sandbox/Diff/Rollback* y revisa los criterios de validación de cada grupo. | Diseña el árbol organizativo del modelo de su proyecto y el protocolo completo de prueba piloto en copia de respaldo. |
| **8. Caso práctico de rescate, evaluación y cierre** | 40 min | Presenta el caso práctico del hotel de 5 plantas, evalúa la resolución mediante la rúbrica de 4 niveles y cierra con la autoevaluación. | Resuelve en equipos el plan de rescate y protocolo seguro del caso práctico, completa el cierre sumativo y su autoevaluación. |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Semáforo de automatización en un proyecto eléctrico BIM

- **Nombre:** Semáforo de automatización: ¿Automatizar en lectura, asistir con control o prohibir automatización ciega?
- **Objetivo:** Discriminar con rigor técnico qué tareas repetitivas de un proyecto eléctrico BIM son candidatas seguras a automatización y cuáles exigen análisis e intervención profesional directa.
- **Instrucciones para el alumnado:**
  1. Examinad la lista de **8 tareas técnicas** de un proyecto eléctrico en Revit MEP:
     - T1: Listar en tabla todos los circuitos sin longitud informada (`Longitud = 0 m`).
     - T2: Asignar automáticamente el calibre de interruptor magnetotérmico y curva de disparo dentro de Revit sin memoria externa.
     - T3: Renombrar 60 láminas según una tabla Excel ya validada por el coordinador BIM.
     - T4: Calcular y certificar la resistencia de puesta a tierra de la red equipotencial sin datos del terreno ni medición.
     - T5: Comprobar que ninguna luminaria del *Schedule* tenga la unidad mezclada entre `W` y `kW`.
     - T6: Modificar en lote el parámetro `Nivel_Iluminancia_Objetivo` basándose en el uso del local declarado en una matriz aprobada.
     - T7: Trazar automáticamente todas las bandejas portacables del edificio ignorando patinillos y mantenimiento.
     - T8: Generar un registro *diff* comparando las potencias totales por tablero antes y después de una actualización de familias.
  2. Clasificad cada tarea en **Verde**, **Ámbar** o **Rojo**, detallando: `Motivo técnico`, `Requisito previo de datos` y `Control humano obligatorio`.
- **Materiales necesarios:** Ficha impresa o digital de las 8 tareas y matriz de criterios del Tema 9.
- **Tiempo estimado:** 20 minutos.
- **Rol del formador:** Provocar debate en los casos frontera (como T3 y T6) y reforzar que T2, T4 y T7 jamás pueden delegarse en scripts automáticos ciegos ni en IA.
- **Producto o entregable esperado:** Matriz Semáforo completa con las 8 tareas clasificadas y justificadas.
- **Criterios de éxito:** Clasifica correctamente al menos 7 de 8 tareas, fundamentando con claridad por qué cálculo normativo, puesta a tierra y criterio espacial no son automatizaciones ciegas.

### Actividad 2 (Aplicación técnica): Especificación funcional y lógica paso a paso sin «caja negra»

- **Nombre:** Diseño asistido por IA de especificación funcional, reglas de excepción y validación tabular previa.
- **Objetivo:** Redactar con apoyo de ChatGPT o Claude una especificación técnica clara, verificable e independiente de versión para auditar datos del modelo y validar un renombrado controlado.
- **Instrucciones para el alumnado:**
  1. Seleccionad uno de estos dos flujos operativos:
     - **Flujo A:** Auditoría previa de completitud de circuitos y luminarias sobre tabla exportada (detectar potencia `0 VA` en circuitos no marcados como `RESERVA`, ausencia de código `.ldt`/`.ies` y celdas vacías de tablero).
     - **Flujo B:** Validación previa a renombrado masivo de láminas (`Tabla_Mapeo_Laminas.csv`) detectando códigos duplicados, caracteres inválidos (`\ / : * ? " < > |`), longitudes excesivas y desajustes con la convención BEP.
  2. Formulad un *prompt* de 6 capas pidiendo a la IA elaborar: (a) **Especificación funcional completa** (Entradas, Precondiciones, Pasos lógicos en pseudocódigo, Excepciones, Registro *log*), y (b) **Ejecución de prueba** sobre el CSV de muestra con 12 filas que incluye 3 errores sembrados.
  3. Redactad la nota explícita de entorno aclarando que cualquier implementación futura en Dynamo, Python/API de Revit o complemento externo quedará sujeta a versión de Revit, licencias y prueba en copia de respaldo.
- **Materiales necesarios:** CSV de muestra con 12 filas (`Muestra_T9_Circuitos.csv` o `Muestra_T9_Laminas.csv`), acceso a ChatGPT/Claude y plantilla de especificación.
- **Tiempo estimado:** 50 minutos.
- **Rol del formador:** Revisar que el pseudocódigo contenga manejo de excepciones y que la IA no proponga líneas de código ficticias ni omita ninguno de los 3 errores sembrados en la prueba.
- **Producto o entregable esperado:** Ficha de especificación funcional + pseudocódigo auditado + reporte de prueba sobre las 12 filas verificando detección del 100 % de errores sembrados.
- **Criterios de éxito:** La especificación incluye todas las precondiciones y excepciones; el ensayo identifica los 3 errores sembrados sin modificar datos válidos; aparece la cláusula realista de dependencia de versión/API/entorno.

### Actividad 3 (Transferencia a proyecto real): Arquitectura de información del modelo y protocolo de ensayo seguro

- **Nombre:** Plan de organización del modelo Revit MEP y protocolo `Sandbox–Piloto–Diff–Rollback`.
- **Objetivo:** Estructurar la organización documental del modelo del proyecto integrador y definir el protocolo formal de seguridad previo a cualquier automatización de escritura masiva.
- **Instrucciones para el alumnado:**
  1. Diseñad la arquitectura de información del modelo Revit MEP de vuestro proyecto del programa definiendo:
     - Árbol del Navegador de proyectos (`Vistas de Documentación` vs. `Vistas de Trabajo` vs. `Coordinación`).
     - Listado cerrado de sistemas eléctricos y clasificación de cargas.
     - Tabla de parámetros críticos que deben mantenerse sincronizados entre modelo, láminas PDF y el enlace visual *Direct Link* de Twinmotion.
  2. Elaborad un **Protocolo Operativo de Prueba Segura (Checklist en 10 pasos)** que cubra desde la creación de la copia de respaldo fechada hasta la inspección visual de planos PDF y restauración en caso de fallo.
- **Materiales necesarios:** Esquema de estructura del proyecto del curso y plantilla de protocolo seguro del Tema 9.
- **Tiempo estimado:** 50 minutos.
- **Rol del formador:** Verificar que el árbol de vistas separa claramente trabajo y entrega PDF y comprobar que el protocolo incluye validación cuantitativa de potencias en *diff* antes de aprobar el cambio.
- **Producto o entregable esperado:** Guía de organización del modelo (1 página) y protocolo `Sandbox–Piloto–Diff–Rollback` listo para auditar cambios en el proyecto final.
- **Criterios de éxito:** El árbol de navegador evita la mezcla de vistas de trabajo en planos; el protocolo detalla copias fechadas, subconjunto piloto, verificación *diff* de sumas en W/kVA, comprobación de filtros/etiquetas PDF y plan de reversión.

---

## 6. Caso práctico

### Ingeniería Vértice MEP: incidente por renombrado masivo sin copia de respaldo en un hotel de cinco plantas

#### Contexto empresarial

Ingeniería Vértice MEP desarrolla el modelo eléctrico en Revit MEP de un hotel urbano de 5 plantas y sótano de instalaciones. El proyecto cuenta con `650 circuitos eléctricos` repartidos en `18 tableros`, `92 láminas` preparadas para emisión a PDF y una escena de presentación arquitectónica vinculada en Twinmotion mediante *Direct Link* para mostrar al promotor los vestíbulos, habitaciones piloto y luminarias decorativas.

#### Situación o problema

A tres días de la entrega de proyecto de ejecución, un técnico descargó de internet un fragmento de código Python/Dynamo sugerido por un asistente de IA para «renombrar automáticamente todas las láminas, tipos de luminarias y prefijos de circuito según la nueva nomenclatura del cliente». Lo ejecutó directamente sobre el archivo principal de trabajo sin copia de respaldo previa ni prueba piloto:
- El script utilizó un método incompatible con ciertas subfamilias anidadas y se detuvo a mitad de ejecución dejando `38 láminas` con el código nuevo, `54 láminas` con el antiguo y `6 láminas duplicadas`.
- En `110 luminarias` de pasillos y habitaciones se sobrescribió el código de tipo, provocando que los filtros de color de emergencia en planta dejaran de funcionar y que `24 etiquetas` de planos mostraran signos de interrogación (`?`) en la exportación a PDF.
- Además, al reordenar nombres de circuitos sin control, perdió la correspondencia directa con las filas del cuadro de cargas externo en hoja de cálculo, y al resincronizar *Direct Link* hacia Twinmotion desaparecieron agrupaciones de materiales aplicadas sobre las luminarias renombradas.

#### Datos disponibles

- **Magnitud del modelo:** 5 plantas + sótano; 18 tableros; 650 circuitos; 92 láminas PDF; 1 archivo maestro `.rvt` sin copia del día (última copia automática de servidor disponible: hace 48 horas, faltan las últimas 16 horas de modelado de habitaciones en Planta 4 y Planta 5).
- **Extracto de datos para prueba de diagnóstico (`PROY-HOT-12`):**
  - Lámina `EL-AL-P02-014` cambió a `E_P02_AL_014` (carácter `_` en lugar de `-`, rompiendo el filtro de índice de planos).
  - Familia `LUM-EMERG-6W-DALI` cambió a `EL-LUM-06W-GEN` (perdió la subcadena `EMERG`, anulando el filtro rojo de alumbrado de emergencia en 4 plantas).
  - En el cuadro de cargas externo (Excel verificado) constan `12 circuitos` de Planta 3 (`C3-01` a `C3-12`) con potencia total `41,8 kW`, pero en el CSV exportado de Revit tras el incidente aparecen duplicados `C3-04` y `C3-04_1` sumando erróneamente `45,2 kW`.
- **Restricciones reales:** La implementación de cualquier arreglo definitivo mediante herramientas internas de Revit o scripts está condicionada a la versión instalada en el estudio, licencias disponibles y validación previa sobre copia de respaldo.

#### Preguntas de análisis

1. ¿Qué cadena de errores metodológicos y de seguridad provocó que un incidente de automatización afectara simultáneamente al modelo BIM, a los planos PDF, a la coherencia con el cuadro de cargas y a Twinmotion?
2. Entre recuperar la copia de hace 48 horas (perdiendo 16 horas de trabajo en P04–P05) o reparar el archivo actual mediante saneado tabular y *diff*, ¿qué criterios técnicos deben evaluarse antes de decidir?
3. Con los datos de `PROY-HOT-12`, ¿qué tres desviaciones exactas detectas en el extracto y cómo impacta la desviación de `45,2 kW` frente a `41,8 kW` si no se corrige antes de emitir el proyecto?
4. ¿Qué papel puede desempeñar ChatGPT o Claude de forma segura en la fase de rescate y qué acciones le están estrictamente vedadas?

#### Tarea a realizar

En equipos de 3 personas, elaborad el **Plan de Rescate y Blindaje de Automatización** para Ingeniería Vértice MEP con los siguientes 4 apartados:
1. **Diagnóstico técnico de daños y decisión de recuperación:** Comparativa razonada entre restaurar copia + reincorporar cambios vs. saneado controlado del modelo actual sobre copia de respaldo, fijando comprobación obligatoria de sumas de potencia por tablero.
2. **Especificación funcional segura asistida por IA (sin código ciego):** Redacción de la especificación paso a paso para auditar la tabla exportada completa de circuitos y láminas (`650 circuitos` y `92 láminas`) y detectar duplicidades como `C3-04 / C3-04_1` ($+3,4\text{ kW}$ fantasma), códigos con guion bajo `_` y pérdida de la palabra clave `EMERG`.
3. **Estrategia de organización de modelo y restauración de filtros/Twinmotion:** Reglas de clasificación de navegador, uso de parámetro compartido dedicado (`EL_Es_Emergencia = Sí/No`) en lugar de depender de subcadenas frágiles en el nombre de tipo, y pauta de resincronización controlada de *Direct Link* hacia Twinmotion tras estabilizar el modelo.
4. **Protocolo corporativo obligatorio («Reglas de Oro de Automatización BIM»):** Documento breve en 6 puntos que regirá desde mañana cualquier uso futuro de Dynamo, API o macros en el estudio.

#### Posibles soluciones o criterios de análisis

- **Diagnóstico de potencia:** La diferencia entre `45,2 kW` y `41,8 kW` supone **$+3,4\text{ kW}$ ($+8,13\text{ \%}$) ficticios** en el tablero de Planta 3 por duplicidad de circuito (`C3-04` y `C3-04_1`), lo que distorsionaría el equilibrio de fases y el cuadro general si se usara ese *Schedule* sin contrastar con el cuadro de cargas verificado.
- **Solución estructural de filtros:** Nunca basar un filtro crítico de planos (como alumbrado de emergencia) en fragmentos de texto del nombre de tipo (`contiene "EMERG"`). Debe crearse un parámetro booleano o de texto controlado (`EL_Tipo_Servicio = Emergencia`) protegido y validado en tabla CSV.
- **Papel de la IA en el rescate:** ChatGPT/Claude analizan exclusivamente exportaciones CSV anonimizadas para cruzar `Tabla_Control_Excel` frente a `CSV_Revit_Dañado`, listar diferencias exactas y redactar la especificación lógica y el protocolo de pruebas; nunca ejecutan acciones directas sobre `.rvt` ni sustituyen la verificación del cuadro de cargas por el ingeniero eléctrico.
- **Criterios de protocolo futuro:** Prohibición de ejecutar scripts generados por IA sin revisar dependencias de versión/API; copia de respaldo fechada obligatoria; prueba piloto en `1 planta` o `10 elementos`; validación *diff* de sumas eléctricas y revisión de 2 láminas PDF antes de aplicar al proyecto completo.

#### Preguntas de reflexión final

1. ¿Por qué depender de nombres de familia para controlar filtros gráficos de planos PDF convierte al modelo en un sistema frágil ante cualquier cambio del cliente?
2. ¿Cuánto tiempo real ahorró el script sin validar frente al coste de reparar `92 láminas`, `650 circuitos` y un enlace de Twinmotion a 72 horas de la entrega?

---

## 7. Evaluación

### Evaluación diagnóstica (inicio de sesión, 10 minutos)

Test rápido de 4 preguntas previas:
1. Distinguir qué tarea BIM es de «solo lectura» frente a una tarea de «escritura masiva».
2. Señalar qué ocurre cuando un filtro de vista en Revit depende de una palabra dentro del nombre de una familia que luego se renombra.
3. Identificar qué información debe verificarse antes de usar un código Python/Dynamo sugerido por una IA.
4. Indicar qué utilidad tiene exportar una tabla *Schedule* a CSV antes y después de una modificación masiva.

### Evaluación formativa (durante la sesión)

Seguimiento en tiempo real durante las Actividades 1, 2 y 3 mediante lista de control del formador:
- Justificación rigurosa de la clasificación Verde/Ámbar/Rojo sin validar automatizaciones normativas ciegas.
- Inclusión de precondiciones, manejo de excepciones y declaración realista de dependencias de versión/API en las especificaciones.
- Definición completa de las cuatro barreras de seguridad (`Copia de respaldo`, `Piloto`, `Diff`, `Rollback`) en los protocolos diseñados.

### Evaluación sumativa (cierre de sesión)

Entrega del **Expediente de Automatización Segura y Organización de Modelo** integrado por:
1. Matriz Semáforo (Actividad 1).
2. Especificación funcional, pseudocódigo y reporte de auditoría sobre el CSV de 12 filas con errores sembrados (Actividad 2).
3. Arquitectura de información del modelo y protocolo de ensayo en 10 pasos (Actividad 3).
4. Plan de Rescate y Blindaje del caso práctico `PROY-HOT-12`.

### Rúbrica de evaluación

| Criterio | Insuficiente (0–4,9) | En desarrollo (5,0–6,9) | Adecuado (7,0–8,9) | Destacado (9,0–10) |
|---|---|---|---|---|
| **Criterio de selección de tareas (Semáforo)** | Propone automatizar a ciegas cálculos normativos o decisiones de seguridad eléctrica. | Clasifica correctamente la mayoría de tareas, pero justifica débilmente los riesgos en casos límite. | Distingue con claridad tareas deterministas de lectura/escritura controlada frente a decisiones ingenieriles humanas. | Aplica matriz rigurosa considerando determinismo, volumen, impacto y dependencias reales sin fisuras técnicas. |
| **Organización del modelo e integridad de datos** | Mantiene vistas mezcladas y filtros frágiles basados en texto libre sin limpieza tabular previa. | Propone un navegador ordenado, pero descuida clasificación de sistemas o parámetros compartidos estables. | Diseña árbol limpio (Trabajo vs. Documentación), sistemas clasificados y saneado previo CSV. | Construye arquitectura robusta inmune a renombrados, protegiendo parámetros críticos, etiquetas PDF y *Direct Link* a Twinmotion. |
| **Diseño de especificación lógica asistida por IA** | Pide código directo sin especificar precondiciones, excepciones ni advertir dependencias de versión/API. | Redacta pasos lógicos básicos, pero omite manejo de errores o falla en detectar un error sembrado. | Elabora especificación completa con entradas, excepciones, *log* y advertencia realista de versión/entorno. | Especificación modular impecable, pseudocódigo claro, 100 % de errores sembrados detectados y trazabilidad completa. |
| **Protocolo de seguridad, pruebas y rescate** | Ejecuta cambios sobre el archivo vivo sin copia de respaldo, prueba piloto ni plan de reversión. | Incluye copia de respaldo, pero carece de prueba piloto acotada o comprobación *diff* de cargas eléctricas. | Integra las cuatro barreras (`Backup`, `Piloto`, `Diff`, `Rollback`) y resuelve coherentemente el caso `PROY-HOT-12`. | Diseña un protocolo corporativo ejecutable de inmediato que audita sumas en kW/W, láminas PDF y sincronización visual. |

### Actividad de autoevaluación

Cuestionario breve de reflexión individual al cierre del tema:
- ¿He separado claramente en mis especificaciones lo que depende de la lógica de datos frente a lo que depende de la versión concreta de Revit, Dynamo o complementos disponibles? *(Sí / No)*
- ¿He garantizado que todo flujo de escritura masiva incluya una copia de respaldo fechada, un subconjunto piloto y una comprobación *diff* de potencias totales? *(Sí / No)*
- ¿Qué parte de mi modelo eléctrico del proyecto integrador requiere mayor limpieza organizativa antes de pasar al Tema 10? *(Respuesta breve de 3 líneas)*

---

## 8. Materiales y recursos

### Guion estructurado de diapositivas (8 diapositivas)

- **Slide 1 — Portada y alcance del Tema 9:** Posición en el Bloque 6 (Tema 48 de 50), diferencia entre automatizar gestión de información y automatizar decisiones de ingeniería.
- **Slide 2 — Matriz Semáforo de Automatización:** Criterios Verde, Ámbar y Rojo aplicados a instalaciones eléctricas en Revit MEP.
- **Slide 3 — Primero organizar, después automatizar:** Arquitectura del Navegador de proyectos, separación Trabajo/Documentación, sistemas y limpieza tabular en CSV.
- **Slide 4 — De la necesidad técnica a la especificación funcional:** Por qué diseñar entradas, precondiciones, pseudocódigo y manejo de excepciones con IA antes de tocar Dynamo o Python/API.
- **Slide 5 — Realismo técnico de implementación:** Dependencias reales de versión de Revit, API, paquetes de Dynamo, licencias, permisos de TI y por qué la IA alucina métodos obsoletos.
- **Slide 6 — Las 4 barreras de seguridad (`Sandbox`, `Piloto`, `Diff`, `Rollback`):** Demostración paso a paso de cómo evitar pérdidas de filtros, etiquetas PDF o enlaces de Twinmotion.
- **Slide 7 — Anatomía de un registro de ejecución (*Log*) auditable:** Qué debe registrar toda rutina automatizada para poder revisarse en segundos.
- **Slide 8 — Caso práctico `PROY-HOT-12` y puente al Tema 10:** Presentación del rescate del hotel de 5 plantas y conexión con la detección cruzada de inconsistencias.

### Ficha de trabajo del alumnado

Cuaderno de trabajo práctico con tres secciones:
1. **Tabla Semáforo (Actividad 1):** 8 filas con columnas `Tarea | Clasificación (V/A/R) | Riesgo principal | Validación humana obligatoria`.
2. **Lienzo de Especificación Segura (Actividad 2):** Bloques guiados para `Objetivo`, `Entradas`, `Precondiciones`, `Pseudocódigo`, `Excepciones`, `Formato de Log` y `Dependencias de entorno`.
3. **Checklist de Protocolo de Prueba Segura (Actividad 3):** Lista verificable en 10 pasos para validar antes, durante y después de correr una rutina sobre copia de respaldo.

### Plantilla técnica práctica: Ficha de Especificación y Ensayo Seguro de Automatización

| Sección de la ficha | Contenido obligatorio a completar |
|---|---|
| **ID y Título del flujo** | `[SPEC-AUTO-NN · Nombre de la tarea]` |
| **Nivel de riesgo (Verde / Ámbar)** | `[Solo lectura / Escritura controlada — Prohibido Rojo]` |
| **Entorno y dependencias reales** | `[Versión de Revit prevista · Vía (CSV/Dynamo/API/Complemento) · Licencias/paquetes requeridos]` |
| **Entradas y Precondiciones** | `[Parámetros que deben existir antes de iniciar; regla de parada si faltan]` |
| **Lógica paso a paso (Pseudocódigo)** | `[Secuencia numerada con tratamiento explícito de elementos nulos o reservados]` |
| **Salida y Registro (*Log*)** | `[Columnas del reporte: ID_Elemento | Valor_Anterior | Valor_Nuevo | Estado | Incidencia]` |
| **Protocolo de ensayo seguro** | `[Ruta de copia de respaldo · Tamaño del piloto · Comprobación Diff de W/kVA y láminas PDF · Rollback]` |

### Lecturas y recursos recomendados

> **Advertencia obligatoria de validación:** Cualquier flujo técnico implementado mediante Dynamo, Python/API de Revit o complementos de terceros depende estrictamente de la versión exacta de Revit instalada, paquetes activos, licencias y permisos de seguridad del sistema. Validéis siempre documentación oficial actualizada y ensayéis exclusivamente en copias de respaldo controladas antes de aplicar cambios en proyectos reales.

- **Documentación oficial de Autodesk Revit y Revit API:** Guías oficiales sobre Organización del Navegador (*Browser Organization*), parámetros compartidos y notas de versión de la API de Revit (*Revit API Docs*) para verificar cambios entre versiones (por ejemplo, unidades internas o manejo de elementos).
- **Recursos oficiales de Dynamo BIM:** *Dynamo Primer* y documentación oficial de nodos nativos y gestión de paquetes, contrastando siempre compatibilidad con la versión exacta de Revit MEP utilizada.
- **Documentación de pyRevit y entornos Python en BIM (uso informativo a validar):** Guías de buenas prácticas para scripts de solo lectura y auditoría de modelos, verificando políticas de seguridad informática del estudio.
- **Documentación oficial de Epic Games Twinmotion (*Direct Link*):** Notas de comportamiento de sincronización desde Revit al renombrar o sustituir familias/materiales para evitar pérdida de configuraciones visuales.

### Glosario de términos clave

| Término | Definición |
|---|---|
| **Automatización determinista** | Proceso repetitivo gobernado por reglas exactas y verificables sin ambigüedad, apto para auditoría o ejecución asistida tras validación previa. |
| **Especificación funcional** | Documento previo a la programación que fija entradas, precondiciones, lógica paso a paso, excepciones y registro de salida de una rutina BIM. |
| **Pseudocódigo** | Representación estructurada en lenguaje claro de los pasos lógicos de una automatización, independiente de la sintaxis de Python o de nodos específicos de Dynamo. |
| **Entorno *Sandbox* (Copia de respaldo)** | Duplicado aislado y fechado del archivo del proyecto empleado exclusivamente para ensayar modificaciones automáticas sin exponer el modelo vivo de producción. |
| **Prueba piloto acotada** | Ejecución controlada de un flujo sobre una muestra pequeña (5–10 elementos o una planta) para verificar impacto en etiquetas, filtros, *Schedules* y PDFs. |
| **Auditoría *Diff*** | Comparación sistemática entre datos exportados antes y después de una operación masiva para confirmar que no hubo alteraciones no deseadas en cargas o identificadores. |
| **Plan de reversión (*Rollback*)** | Procedimiento documentado que permite restaurar de inmediato la última versión íntegra del modelo ante cualquier incidencia detectada durante el ensayo. |

---

## 9. Adaptaciones

### Sesión presencial

- **Dinámica de aula:** Trabajo en equipos de 3 con una hoja de cálculo y un editor Markdown por mesa; el formador muestra en pantalla grande un ejemplo real de cómo un renombrado sin parámetro dedicado rompe un filtro de vista en Revit.
- **Ejercicio físico de control:** En la Actividad 1, cada mesa clasifica tarjetas impresas de las 8 tareas sobre un tablero físico Semáforo (Verde/Ámbar/Rojo) antes de debatir en plenario.
- **Ritmo:** Pausa de 15 minutos con revisión cruzada rápida de especificaciones entre mesas vecinas.

### Sesión online síncrona

- **Salas y materiales en la nube:** Subida previa de los archivos `Muestra_T9_Circuitos.csv`, `Muestra_T9_Laminas.csv` y el extracto `PROY-HOT-12` a la carpeta del aula virtual; trabajo en *breakout rooms* de 3 personas.
- **Demostración controlada:** El formador comparte pantalla mostrando cómo se genera una especificación limpia y un reporte *diff* en hoja de cálculo comparando dos CSVs (antes y después), evitando instalar complementos durante la sesión para no generar bloqueos técnicos por distintas versiones de software.
- **Supervisión:** Paso por salas cada 15 minutos comprobando que ningún grupo intenta validar código no probado ni omitir copias de respaldo.

### Sesión asíncrona

- **Módulos grabados:** Tres cápsulas de vídeo (12–15 min cada una): (1) Matriz Semáforo y errores clásicos de «caja negra», (2) Organización de navegador y saneado tabular previo, y (3) Redacción de especificación + prueba *diff* en CSV.
- **Práctica guiada:** El alumnado realiza individualmente las Actividades 1, 2 y 3 y el caso `PROY-HOT-12`, subiendo un dossier único con las fichas completadas, capturas de pruebas sobre los CSV de muestra y su protocolo de ensayo seguro.
- **Feedback:** Corrección individual del formador en plataforma basada en la rúbrica de 4 niveles y debate en foro sobre experiencias reales de incidencias en modelos BIM.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Recupera la organización de sistemas y familias de **Revit MEP (Módulo 3)**, la estructura de plantillas de vista, filtros y láminas PDF del **Módulo 4**, las relaciones de sincronización hacia **Twinmotion (Módulo 5)**, los *prompts* de seis capas del **Tema 7** y la estandarización documental BEP del **Tema 8 del Bloque 6 (Tema 47 de 50)**.
- **Competencias que desarrolla:** Criterio ingenieril para delimitar qué puede automatizarse y qué no, diseño funcional de flujos lógicos asistidos por IA, gobernanza de datos BIM y gestión de riesgos operativos en modelos eléctricos complejos.
- **Conexión con el tema anterior y posterior en el programa (6 módulos / 50 temas):**
  - *Tema anterior — Bloque 6, Tema 8 de 11 (Tema 47 de 50): IA para optimización de documentación y entregables BIM.* El Tema 8 definió los estándares de nomenclatura, parámetros BEP y control documental; el Tema 9 estructura cómo organizar el modelo y diseñar automatizaciones seguras sobre esos mismos estándares.
  - *Tema posterior — Bloque 6, Tema 10 de 11 (Tema 49 de 50): IA como apoyo en detección de inconsistencias y revisión del proyecto.* Las auditorías tabulares de solo lectura y los registros de ejecución (*logs*) diseñados en el Tema 9 alimentarán directamente las listas de verificación cruzada multifuente del Tema 10.
- **Evidencia de aprendizaje generada:** **Especificación funcional segura, árbol de organización del modelo y protocolo `Sandbox–Piloto–Diff–Rollback`** aplicados y validados junto con el plan de rescate de `PROY-HOT-12`.

---

## Siguientes pasos para el formador

1. Preparar y verificar los archivos `Muestra_T9_Circuitos.csv` y `Muestra_T9_Laminas.csv` asegurando que los 3 errores sembrados (potencia cero no marcada como reserva, duplicidad de circuito y carácter inválido en código de lámina) son claros y trazables.
2. Subrayar repetidamente durante la sesión que cualquier automatización en Dynamo, Python/API o complementos depende de la versión exacta de Revit y licencias disponibles, evitando que el alumnado ejecute código sin probar sobre archivos reales de trabajo.
3. Verificar que los árboles de organización y protocolos seguros elaborados en la Actividad 3 quedan guardados por cada alumno, ya que servirán para estructurar la auditoría cruzada del **Tema 10** y el dossier final del **Tema 11**.
4. Recoger las mejores especificaciones funcionales diseñadas en la clase para incorporarlas como plantillas de solo lectura a la biblioteca compartida del grupo.
