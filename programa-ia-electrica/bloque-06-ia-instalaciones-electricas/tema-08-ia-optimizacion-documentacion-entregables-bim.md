# Tema 8. IA para optimización de documentación y entregables BIM

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | IA para optimización de documentación y entregables BIM |
| **Programa** | IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas *(Especialización Técnica; no es un MBA ni otorga habilitación legal para firmar proyectos)* |
| **Bloque y posición dentro del programa** | Bloque 6: Inteligencia artificial aplicada a instalaciones eléctricas · Tema 8 de 11 (Tema 47 de 50 del programa) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Modalidad** | Online / Híbrida interactiva |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio - Avanzado |
| **Prerrequisitos** | Conocimientos de documentación eléctrica en Revit MEP (plantillas, etiquetas, tablas de planificación y láminas PDF del Módulo 4) e ingeniería de *prompts* de seis capas (Tema 7 del Bloque 6). |
| **Resultado general de aprendizaje** | Estandarizar nomenclatura de familias y láminas, matrices de parámetros BEP, tablas de planificación, notas generales y actas de coordinación BIM eléctrica mediante plantillas de IA controladas, manteniendo la trazabilidad documental por revisión y la validación técnica independiente previa a la emisión en PDF. |

---

## 2. Objetivos de aprendizaje

1. Identificar los entregables documentales críticos de un proyecto eléctrico BIM (familias, parámetros BEP, láminas, tablas de planificación, notas generales, especificaciones y actas) y sus puntos habituales de fallo. *(Nivel de Bloom: Recordar)*
2. Explicar cómo la asistencia con ChatGPT y Claude acelera la normalización documental sin transferir responsabilidad técnica ni sustituir la comprobación reglamentaria o el criterio del coordinador BIM. *(Nivel de Bloom: Comprender)*
3. Aplicar *prompts* especializados sobre tablas CSV anonimizadas exportadas desde Revit MEP para detectar incumplimientos de nomenclatura, unidades SI mezcladas y parámetros BEP vacíos. *(Nivel de Bloom: Aplicar)*
4. Analizar borradores de notas generales, leyendas y especificaciones técnicas eléctricas para depurar contradicciones, marcas no autorizadas y citas normativas ambiguas. *(Nivel de Bloom: Analizar)*
5. Diseñar un flujo completo de preparación documental y emisión de actas de coordinación interdisciplinar con control de revisiones y lista de validación previa a la impresión en PDF. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Estandarización de nomenclatura de familias, vistas y láminas asistida por IA

#### Explicación breve y clara

En proyectos eléctricos reales modelados en Revit MEP, gran parte de los rechazos en entregas BIM no provienen de la geometría 3D, sino del desorden en los nombres de familias, tipos, vistas de trabajo, filtros y láminas. Cuando varios proyectistas importan luminarias descargadas de fabricantes o duplican vistas sin criterio, aparecen nombres como `Luminaria_Oficina_NUEVA_v2_copia` o planos sin código sistemático.

ChatGPT y Claude resultan muy eficaces como **normalizadores sintácticos**, siempre que no se suba el archivo `.rvt` propietario ni datos del cliente, sino un **listado tabular anonimizado (CSV/Excel)** con los nombres actuales y la regla de codificación definida en el Plan de Ejecución BIM (BEP) o en criterios inspirados en ISO 19650 (a verificar según estándar contractual del proyecto). La IA propone el mapeo `Nombre_Actual -> Nombre_Normalizado`, señala ambigüedades (p. ej. falta de potencia en W o grado IP) y genera una tabla de revisión que el coordinador BIM valida antes de aplicar cambios en Revit.

#### Conceptos clave

- **Regla de codificación BEP:** Sintaxis formal acordada al inicio del proyecto para nombrar disciplinas, sistemas, familias, vistas y láminas sin espacios problemáticos ni ambigüedades.
- **Tabla de mapeo previo (`Antes / Después`):** Documento intermedio generado con apoyo de IA que permite auditar cada renombrado propuesto antes de modificar familias o etiquetas en Revit MEP.
- **Separación vista de trabajo vs. vista de plano:** Criterio organizativo que impide que vistas auxiliares sin filtros ni escala normalizada acaben impresas en el juego oficial de láminas PDF.
- **Coherencia con catálogo fotométrico:** Vínculo explícito entre el nombre normalizado de la familia de luminaria en Revit y el identificador del archivo `.ldt` o `.ies` empleado en DIALux.

#### Definiciones necesarias

- **Plan de Ejecución BIM (BEP):** Documento técnico-organizativo que fija el alcance del modelado, responsabilidades, convenciones de nomenclatura, parámetros obligatorios, niveles de detalle e hitos de entrega del proyecto.
- **Trazabilidad documental de lámina:** Capacidad de relacionar inequívocamente un código de plano PDF (p. ej. `E-AL-P01-002`) con su vista origen en Revit, fecha, estado de revisión (`Rev A`, `Rev B`), autor y responsable de aprobación.

#### Ejemplo práctico realista

Un coordinador BIM exporta a CSV los nombres de 10 familias y tipos de un proyecto anonimizado (`PROY-DOC-03`) cuyo BEP establece el patrón para luminarias `EL-LUM-[MONTAJE]-[TECNOLOGIA]-[POTENCIA_W]-[TCC_K]-[CONTROL]` y para láminas `[DISC]-[SIST]-[NIVEL]-[SEQ]`:
- Entrada original: `Panel LED 60x60 Philips nuevo (2)` | Propuesta IA bajo regla BEP: `EL-LUM-EMP-LED-36W-4000K-DALI` (añadiendo marca `[DATO_FALTANTE_CONTROL]` si la entrada no especificaba DALI o ON/OFF).
- Entrada original: `Toma doble pared normal` | Propuesta IA: `EL-TOM-EMP-SCHUKO-16A-230V-IP20` *(marcando `[VERIFICAR IP Y TIPO SEGÚN REGLAMENTO Y PAÍS]` porque «normal» es ambiguo)*.
- Entrada original de plano: `Planta baja luces final ok` | Propuesta IA: `EL-AL-PB-001` (`Alumbrado Planta Baja · Escala 1:100 · Rev A`).

La IA genera la tabla completa en 20 segundos señalando 3 campos donde faltaba potencia en W o tipo de regulación, evitando que el técnico invente características eléctricas para rellenar el nombre.

#### Errores frecuentes

- Pedir a la IA «inventa una nomenclatura BIM estándar» sin facilitarle el BEP real del cliente ni la convención del estudio.
- Aplicar un renombrado sugerido por IA sin comprobar si las etiquetas de plano (*Tags*) o los filtros de visualización de Revit dependen de subcadenas del nombre anterior.
- Mezclar nomenclatura comercial con fabricante obligatorio cuando el pliego técnico exige especificación abierta neutra.
- Subir listados que contienen nombres reales de edificios protegidos, propietarios o rutas de servidor interno sin anonimizar.

#### Preguntas que el alumnado debería poder responder

1. ¿Qué diferencia hay entre estandarizar la nomenclatura de una familia con IA a partir de un CSV y suponer que esa familia está eléctricamente validada?
2. ¿Por qué la IA debe marcar `DATO FALTANTE` cuando un nombre original dice «luminaria techo» sin indicar potencia en W ni flujo en lm?
3. ¿Qué comprobaciones debes hacer en Revit MEP y en tus láminas PDF antes de dar por bueno un lote de nombres normalizados?

---

### 3.2. Parámetros BEP, tablas de planificación (Schedules) y control de completitud

#### Explicación breve y clara

Un modelo Revit MEP útil para entregas profesionales no es solo geometría 3D: su verdadero valor reside en la **información estructurada contenida en sus parámetros** y reflejada en las tablas de planificación (*Schedules*) de cuadros eléctricos, circuitos, luminarias, aparamenta y bandejas. Sin embargo, las entregas fallan con frecuencia por celdas vacías, unidades mezcladas (`230 V` junto a `0,4 kV`, `36 W` junto a `0,036 kW`), grados de protección IP ausentes en zonas húmedas o diferencias entre la potencia modelada y la calculada en DIALux.

Mediante *prompts* tabulares, podemos entregar a ChatGPT o Claude el CSV anonimizado exportado de un *Schedule* para que ejecute una **auditoría sintáctica y de completitud**: verificar qué filas incumplen formato de unidad SI, qué parámetros obligatorios del BEP están vacíos y qué discrepancias aparecen frente a la ficha técnica. Es imprescindible recordar que **tener una tabla de planificación 100 % rellena en Revit MEP no equivale a haber verificado el cumplimiento eléctrico reglamentario ni sustituye a la memoria de cálculo ni al informe de DIALux**.

#### Conceptos clave

- **Matriz de parámetros BEP:** Tabla maestra que define nombre exacto del parámetro, categoría Revit afectada, tipo de dato (texto, potencia, tensión, entero), unidad SI obligatoria y fase de entrega en que debe estar completo.
- **Normalización de unidades SI:** Regla estricta de homogeneidad dentro de cada columna de *Schedule* (por ejemplo, toda potencia de luminaria en `W`, toda potencia de circuito en `kW` o `kVA`, toda tensión asignada en `V`).
- **Auditoría de completitud previa a emisión:** Revisión asistida por IA sobre la exportación CSV de las tablas de Revit justo antes de imprimir láminas PDF o entregar el IFC/RVT.
- **Límite informativo del Schedule:** Recordatorio operativo de que un parámetro numérico coherente en una tabla BIM solo demuestra consistencia de registro, no validez normativa de la sección o protección.

#### Definiciones necesarias

- **Tabla de planificación (Schedule):** Vista tabular dinámica de Revit MEP que extrae, agrupa y contabiliza propiedades y parámetros de los ejemplares o tipos modelados en el proyecto.
- **Parámetro compartido (*Shared Parameter*):** Definición de parámetro almacenada en un archivo externo único para garantizar que distintos proyectos, familias y etiquetas lean exactamente el mismo campo y puedan incluirlo en tablas de planificación.

#### Ejemplo práctico realista

Un proyectista exporta la tabla `SCH_EL_Luminarias_PROY05.csv` (18 filas anonimizadas) y pide a Claude auditarla según la matriz BEP (`Potencia_W`, `Flujo_lm`, `TCC_K`, `Grado_IP`, `ID_Circuito`, `Ref_Fotometria`):
- En la fila 4 (`Aseo Público PB`), `Grado_IP` está vacío mientras la matriz exige mínimo a verificar según zona húmeda (p. ej. `IP44` o superior según clasificación aplicable del reglamento vigente).
- En la fila 9 (`Almacén`), `Potencia_W` figura como `0.045` (en kW por error) mientras las demás filas están en `W` (`34`, `36`, `42`).
- En la fila 14 (`Pasillo P01`), `Ref_Fotometria` indica `LUM-A_v1.ldt` ($32\text{ W}$), pero el parámetro `Potencia_W` en Revit sigue indicando `38` W.

La IA devuelve una tabla de incidencias con fila exacta, columna afectada y acción requerida (`Confirmar ficha .ldt vigente y unificar unidad a W en Revit`), dejando al técnico la corrección definitiva en el modelo y en la memoria de cálculo.

#### Errores frecuentes

- Pedir a la IA que rellene automáticamente las celdas vacías (como `Grado_IP` o `ID_Circuito`) asumiendo valores habituales sin consultar los planos ni el catálogo real.
- Exportar tablas de Revit con unidades configuradas como texto libre (`36W`, `36 watts`, `0,036 kW`) en lugar de campos numéricos tipados.
- Confiar en los totales de potencia de un *Schedule* de Revit sin comprobar si el factor de potencia o factor de demanda configurado en el modelo coincide con la memoria de cálculo eléctrico.
- Emitir planos PDF con tablas de planificación sin ocultar columnas auxiliares internas de trabajo.

#### Preguntas que el alumnado debería poder responder

1. ¿Qué ventajas ofrece auditar mediante IA el CSV exportado de un *Schedule* de Revit antes de imprimir las láminas PDF?
2. ¿Por qué la coherencia de unidades SI en parámetros compartidos es crítica antes de cruzar datos entre DIALux, Revit MEP y el cuadro de cargas?
3. ¿Qué diferencia existe entre una auditoría de completitud de parámetros BEP y una comprobación reglamentaria eléctrica?

---

### 3.3. Redacción técnica asistida: notas generales, especificaciones y leyendas de planos

#### Explicación breve y clara

Las notas generales, especificaciones técnicas y leyendas de planos suelen convertirse en un «cajón de sastre» copiado de proyectos antiguos. Es frecuente encontrar láminas donde una nota exige un reglamento derogado de otro país, contradice los calibres indicados en el cuadro unifilar o utiliza siglas en la leyenda que ni siquiera aparecen dibujadas en la planta.

Con ChatGPT o Claude podemos transformar borradores dispersos, requisitos del cliente y listados de simbología en **notas generales limpias, estructuradas por apartados y sin contradicciones internas**, aplicando dos reglas de hierro: (1) prohibir a la IA prescribir marcas comerciales salvo indicación expresa del proyecto y (2) sustituir toda frase ambigua tipo «se cumplirá la normativa vigente» por **marcadores explícitos de verificación jurisdiccional** y referencia cruzada al documento maestro correspondiente (memoria de cálculo, unifilar o estudio DIALux).

#### Conceptos clave

- **Higiene documental de notas:** Revisión sistemática que elimina duplicidades, notas heredadas obsoletas, contradicciones con el unifilar y lenguaje ambiguo en los planos.
- **Especificación agnóstica de fabricante:** Redacción técnica centrada en prestaciones verificables (tensión asignada, aislamiento, grado IP/IK, flujo en lm, IRC/CRI, protocolo de control) salvo exigencia motivada del pliego.
- **Sincronización leyenda–plano:** Comprobación cruzada para asegurar que todo símbolo incluido en la leyenda aparece realmente en la lámina (o en la lámina maestra de simbología) y viceversa.
- **Marcador trazable de verificación:** Etiqueta estandarizada como `[VERIFICAR: criterio según reglamento aplicable y edición vigente en ubicación del proyecto]` que impide publicar suposiciones no confirmadas.

#### Definiciones necesarias

- **Notas generales de plano:** Conjunto de instrucciones técnicas concisas insertadas en las láminas gráficas sobre ejecución, alturas de montaje, códigos de colores, coordinación y remisión a memorias o esquemas.
- **Especificación técnica particular:** Documento escrito que detalla materiales, características constructivas, ensayos, criterios de instalación y recepción de equipos que complementan los planos y el modelo BIM.

#### Ejemplo práctico realista

En la lámina de fuerza y alumbrado `EL-FZ-P01-002`, el proyectista detecta 6 notas copiadas de un encargo anterior:
- Nota original 2: *«Todos los conductores serán libres de halógenos de sección mínima 2,5 mm² para alumbrado y 4 mm² para fuerza según REBT 2002.»* (Contradice el unifilar del proyecto actual que usa $1,5\text{ mm}^2$ en alumbrado bajo criterios a verificar, y cita el reglamento sin comprobar edición o país si el nuevo proyecto estuviera fuera de España).
- Nota original 5: *«Las luminarias se colocarán según render de Twinmotion presentado al cliente.»* (Error conceptual grave: el criterio de ubicación responde al cálculo fotométrico de DIALux y al replanteo del proyecto, no a un render comunicativo).

Tras aplicar un *prompt* depurador con restricciones de no invención, la IA redacta un bloque limpio:
- *«Los conductores, aislamientos y secciones mínimas cumplirán estrictamente el Cuadro de Cargas y Diagrama Unifilar vigentes del proyecto (`DOC-CALC-v2`), verificados conforme al reglamento eléctrico aplicable en el emplazamiento y su edición en vigor.»*
- *«La ubicación, tipo fotométrico (`.ldt`/`.ies`) y altura de montaje de luminarias atenderán al Estudio Lumínico (`DOC-DIALUX-v2`) y planos de replanteo; las imágenes de visualización en Twinmotion tienen carácter exclusivamente ilustrativo.»*

#### Errores frecuentes

- Copiar y pegar notas generales generadas por IA que citan normas específicas (ITC-BT, artículos NEC o cláusulas IEC) sin comprobar si existen con esa numeración y si aplican al país del proyecto.
- Dejar en la leyenda símbolos de elementos que fueron eliminados del modelo Revit MEP en una revisión anterior.
- Contradecir en las notas de plano la altura de montaje de cajas o luminarias modelada en 3D en Revit o calculada en DIALux.
- Emplear vocabulario impreciso («cable grueso», «luz blanca suficiente») en lugar de magnitudes y prestaciones concretas.

#### Preguntas que el alumnado debería poder responder

1. ¿Qué riesgos contractuales y técnicos conlleva reutilizar notas generales heredadas sin depurarlas ni verificar la normativa local?
2. ¿Por qué debe quedar explícito en las notas de proyecto que un render en Twinmotion no sustituye al estudio fotométrico en DIALux ni al plano técnico?
3. ¿Cómo diseñas un *prompt* para contrastar que la lista de abreviaturas de una leyenda coincide exactamente con las etiquetas exportadas de una vista de Revit?

---

### 3.4. Actas de coordinación BIM, registro de incidencias y trazabilidad de entregas

#### Explicación breve y clara

En fase de proyecto, los ingenieros eléctricos y coordinadores BIM asisten a reuniones semanales de coordinación con Arquitectura, Estructura y Climatización/Fontanería. De esas reuniones suelen quedar apuntes rápidos desordenados, capturas de cruces de bandejas portacables con conductos de ventilación o cambios verbales de potencia de equipos que nunca llegan a reflejarse en el unifilar ni en la carátula de los planos PDF.

Utilizando plantillas de IA bien delimitadas, podéis transformar notas crudas anonimizadas y listados de colisiones (*clashes*) en **actas de coordinación BIM estructuradas**, listas de acciones con responsable y fecha, y **registros de control de revisión previos a la impresión a PDF**. La clave de la trazabilidad es conectar cada incidencia con el código de elemento o zona, el código de lámina afectado y el estado de cierre confirmado por un técnico antes de emitir la siguiente revisión (`Rev A`, `Rev B`, `Rev C`).

#### Conceptos clave

- **Acta de coordinación estructurada:** Documento breve y accionable con fecha, asistentes por rol, decisiones adoptadas, impacto en cálculo/DIALux/Revit/PDF, responsable y fecha límite.
- **Matriz de impacto cruzado:** Tabla que vincula cada cambio acordado en reunión (por ejemplo, mover un patinillo o aumentar potencia de una enfriadora) con todos los entregables que deben actualizarse en cascada.
- **Registro de revisiones de láminas:** Tabla de control que audita código de plano, título, revisión actual, motivo del cambio, verificación visual PDF y responsable humano de aprobación.
- **Anonimización de actas externas:** Sustitución de nombres propios completos por roles o iniciales (`ING-ELEC`, `COORD-BIM`, `ING-CLIMA`) y códigos de proyecto antes de procesar apuntes en un asistente externo.

#### Definiciones necesarias

- **Incidencia de coordinación BIM (Issue / BCF):** Desviación geométrica o informativa detectada entre disciplinas o entregables (por ejemplo, interferencia entre bandeja eléctrica y conducto de clima o falta de espacio de mantenimiento frente a un cuadro) que requiere seguimiento hasta su cierre verificado.
- **Emisión controlada en PDF:** Publicación formal de un juego de planos tras comprobar escala, plumillas/filtros, visibilidad de etiquetas, cajetín de revisión y coherencia con la última versión aprobada del modelo y cálculos.

#### Ejemplo práctico realista

Tras una reunión de 40 minutos de coordinación MEP del proyecto `PROY-DOC-03`, el coordinador tiene estas notas rápidas anonimizadas:
- *«Bandeja fuerza 300×60 en pasillo P01 choca con conducto clima cota +3,10 m; clima no baja; electricidad sube bandeja a +3,40 m junto a techo. Enfriadora cubierta sube de 22 kW a 28 kW según clima; revisar interruptor y cable desde CGBT. En sala reuniones DIALux pide pasar de 8 a 10 luminarias por sombra viga; actualizar Revit y lámina E-AL-P01.»*

Un *prompt* estructurado transforma estos apuntes en una tabla de acciones trazables:
1. `INC-01` (`Revit MEP` + `PDF`): Desplazar bandeja portacables $300\times60\text{ mm}$ en Pasillo P01 a cota $+3,40\text{ m}$; verificar distancia libre y actualizar corte de detalle en lámina `EL-DET-001`. Responsable: `MOD-BIM-EL`.
2. `INC-02` (`Cálculo` + `Unifilar` + `Revit` + `PDF`): Recalcular acometida y protección para nueva potencia de enfriadora ($28\text{ kW}$ frente a $22\text{ kW}$, $+27,3\text{ \%}$); comprobar impacto en potencia total de `CGBT-01` y actualizar unifilar y carátula. Responsable: `ING-ELEC`.
3. `INC-03` (`DIALux` + `Revit` + `Twinmotion` + `PDF`): Recalcular distribución con 10 luminarias en DIALux, actualizar ejemplares y circuito en Revit, regenerar lámina `EL-AL-P01` y resincronizar *Direct Link* en Twinmotion si procede para presentación. Responsable: `ESP-ILUM / MOD-BIM-EL`.

#### Errores frecuentes

- Generar actas largas con texto narrativo que no asignan responsable, fecha ni documentos afectados en cascada.
- Cerrar una incidencia en Revit (mover una bandeja o añadir luminarias) olvidando regenerar la lámina PDF correspondiente y actualizar la letra de revisión en el cajetín.
- Procesar transcripciones literales de reuniones con nombres de clientes, correos personales y precios sin anonimizar previamente.
- Confiar en que Twinmotion o los planos PDF reflejan automáticamente los cambios de cálculo si no existe una lista de verificación previa a emisión.

#### Preguntas que el alumnado debería poder responder

1. ¿Qué campos mínimos necesita una acción dentro de un acta de coordinación BIM para ser auditable hasta su cierre?
2. Si en una reunión aumenta la potencia eléctrica de un equipo de climatización, ¿qué secuencia de documentos y modelos debe actualizarse antes de emitir el nuevo PDF?
3. ¿Cómo ayuda una tabla de control de emisión generada con apoyo de IA a reducir errores justo antes de imprimir láminas a PDF?

---

## 4. Metodología didáctica

Duración total de la secuencia didáctica: **240 minutos (4 horas)**.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
|---|---|---|---|
| **1. Apertura y diagnóstico de problemas documentales** | 15 min | Presenta el Tema 8, muestra ejemplos reales anonimizados de láminas rechazadas por caos de nomenclatura y notas obsoletas, y lanza preguntas de activación. | Identifica qué errores documentales ha sufrido en proyectos previos y completa la evaluación diagnóstica breve. |
| **2. Microexposición: nomenclatura BEP y parámetros en Revit** | 20 min | Explica cómo exportar tablas CSV anonimizadas desde Revit MEP y aplicar reglas de codificación y completitud con apoyo de ChatGPT/Claude. | Analiza la matriz de parámetros BEP modelo y anota qué controles deben ejecutarse siempre antes de emitir planos. |
| **3. Actividad 1 (Activación): caza de caos documental** | 25 min | Entrega un extracto simulado de entregas BIM con fallos de familias, unidades mezcladas y notas contradictorias y coordina la puesta en común. | Localiza en parejas las incoherencias de nomenclatura, parámetros, leyendas y revisión PDF del paquete entregado. |
| **4. Demostración guiada: notas, especificaciones y actas BIM** | 25 min | Demuestra en directo el depurado de notas generales con marcadores normativos y la conversión de notas crudas de reunión en un acta de coordinación trazable. | Observa el flujo en vivo, verifica qué restricciones impiden la invención de marcas o normas y formula dudas técnicas. |
| **5. Actividad 2 (Aplicación técnica): normalización de CSV BEP y notas** | 50 min | Facilita el CSV anonimizado (`PROY-DOC-03`) y acompaña a los equipos vigilando coherencia SI, no invención y conservación de etiquetas. | Normaliza nombres de familias/láminas, audita celdas vacías/unidades del *Schedule* y depura un pliego de notas generales con IA y revisión manual. |
| **6. Pausa breve e intercambio de incidencias** | 15 min | Modera una puesta en común ágil donde cada grupo muestra una trampa o error sutil interceptado durante la Actividad 2. | Comparte hallazgos, compara propuestas de nomenclatura y ajusta criterios de revisión previa a PDF. |
| **7. Actividad 3 (Transferencia): paquete estándar y acta de coordinación** | 50 min | Proporciona las notas crudas de coordinación del proyecto y supervisa la elaboración de la guía documental y el checklist de impresión a PDF. | Construye el paquete documental normalizado de su proyecto (guía BEP breve, tabla de revisión de láminas y acta de coordinación con impactos cruzados). |
| **8. Caso práctico, evaluación final y cierre** | 40 min | Plantea el caso del edificio docente, orienta su resolución con la rúbrica de 4 niveles y lidera la síntesis y autoevaluación final. | Resuelve el caso práctico en equipo, completa el cuestionario sumativo/autoevaluación y entrega su paquete documental auditado. |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Caza de caos documental en un juego de entregas BIM

- **Nombre:** Caza de caos documental en un paquete de entrega eléctrica.
- **Objetivo:** Reconocer los errores más frecuentes en nomenclatura de familias, *Schedules*, notas generales y cajetines PDF antes de automatizar o asistir su optimización con IA.
- **Instrucciones para el alumnado:**
  1. Revisad el paquete ficticio de 1 página que contiene: 6 nombres de familias de Revit, un extracto de 5 filas de un *Schedule* de alumbrado, 4 notas generales de plano y la carátula de 2 láminas PDF.
  2. Marcado de incidencias: señalad al menos 8 defectos concretos clasificándolos en: `Nomenclatura`, `Unidades/Parámetros`, `Normativa/Responsabilidad`, `Inconsistencia con DIALux/Cálculo` y `Control de Revisión PDF`.
  3. Ordenad las 3 incidencias más graves según su impacto en obra o licitación.
- **Materiales necesarios:** Dossier impreso o PDF de la Actividad 1 (`Paquete_Defectuoso_T8`) y tabla de clasificación en la ficha de trabajo.
- **Tiempo estimado:** 25 minutos.
- **Rol del formador:** Facilitar el material, evitar que el grupo ignore fallos de revisión (`Rev A` con fecha desactualizada o mezcla `W` vs `kW`) y sintetizar criterios en pizarra.
- **Producto o entregable esperado:** Lista priorizada con al menos 8 defectos detectados y justificación breve de impacto técnico/documental.
- **Criterios de éxito:** Localiza mínimo 8 defectos reales, distingue inconsistencias de formato frente a omisiones técnicas graves y justifica la prioridad correctamente.

### Actividad 2 (Aplicación técnica): Normalización de matriz BEP, Schedule y notas generales con IA

- **Nombre:** Auditoría y normalización asistida de CSV de Revit MEP y notas técnicas de plano.
- **Objetivo:** Utilizar *prompts* estructurados para estandarizar un listado de familias y láminas, auditar parámetros BEP exportados y depurar notas generales sin introducir alucinaciones normativas.
- **Instrucciones para el alumnado:**
  1. Descargad el archivo anonimizado `PROY-DOC-03_Schedule.csv` (15 luminarias y equipos con errores de unidades, grados IP faltantes y nombres irregulares) y el bloque de 6 notas generales heredadas.
  2. Aplicad la regla BEP facilitada (`EL-[CAT]-[SIST]-[PARÁMETROS_SI]`) mediante un *prompt* en ChatGPT o Claude solicitando: (a) tabla `Nombre_Original | Nombre_Propuesto | Dato_Faltante`, (b) reporte de celdas vacías o unidades SI incoherentes en el CSV, y (c) reescritura depurada de las 6 notas sustituyendo citas ambiguas por marcadores `[VERIFICAR]`.
  3. Realizad una **revisión humana obligatoria** de la salida obtenida: corregid cualquier suposición no autorizada de la IA y confirmad que ningún equipo de zona húmeda quede sin verificación de grado IP ni potencia total mal sumada.
- **Materiales necesarios:** Archivo `PROY-DOC-03_Schedule.csv`, reglas BEP de referencia, acceso a ChatGPT/Claude y hoja de cálculo local.
- **Tiempo estimado:** 50 minutos.
- **Rol del formador:** Comprobar que los equipos no piden a la IA «inventar» datos faltantes, verificar la suma correcta de potencias en hoja de cálculo y señalar cómo proteger el vínculo con `.ldt`/`.ies`.
- **Producto o entregable esperado:** Archivo editado con las tres tablas validadas (mapeo de nomenclatura, auditoría de *Schedule* y notas generales depuradas con sello de revisión humana).
- **Criterios de éxito:** 100 % de unidades homogeneizadas al SI; todos los datos ausentes etiquetados explícitamente como `FALTANTE` o `[VERIFICAR]`; cero normas inventadas ni marcas comerciales no solicitadas en las notas finales.

### Actividad 3 (Transferencia a proyecto real): Paquete documental estándar y acta de coordinación BIM

- **Nombre:** Elaboración de guía breve documental, control de emisión PDF y acta de coordinación BIM.
- **Objetivo:** Integrar las plantillas de IA aprendidas para generar un paquete documental repetible y un acta de coordinación trazable aplicables al proyecto del programa.
- **Instrucciones para el alumnado:**
  1. Tomad las notas brutas de una reunión de coordinación MEP de vuestro proyecto de curso (o del escenario `PROY-DOC-03` ampliado con 4 incidencias entre Electricidad, Clima, DIALux y Twinmotion).
  2. Generad con apoyo de IA y validación manual:
     - **Documento 1:** Acta de coordinación estructurada con tabla de acciones (`ID`, `Disciplina`, `Descripción`, `Documentos/Modelos afectados en cascada`, `Responsable`, `Plazo`, `Criterio de cierre`).
     - **Documento 2:** Lista de control previa a impresión a PDF (*Pre-flight Checklist*) adaptada a las láminas eléctricas de vuestro proyecto (escalas, filtros de sistema, etiquetas, leyenda sincronizada, cajetín y revisión).
  3. Contrastad en parejas la claridad del acta y comprobad si contempla la actualización en cadena cuando cambia una carga o una luminaria.
- **Materiales necesarios:** Plantilla de Acta y Pre-flight PDF del Tema 8, notas de reunión anonimizadas y acceso a ChatGPT/Claude.
- **Tiempo estimado:** 50 minutos.
- **Rol del formador:** Supervisar la trazabilidad entre disciplinas, verificar que las láminas PDF y el modelo Twinmotion queden claramente diferenciados respecto al cálculo eléctrico/DIALux y validar la coherencia de los criterios de cierre.
- **Producto o entregable esperado:** Dossier breve con el Acta de coordinación validada y el Checklist de control de emisión PDF listos para usar en entregas del estudio o proyecto integrador.
- **Criterios de éxito:** El acta recoge el 100 % de las incidencias con cascada documental completa (Cálculo / DIALux / Revit / PDF / Visualización); el *checklist* incluye al menos 10 controles verificables antes de imprimir a PDF.

---

## 6. Caso práctico

### Estudio Norba Ingeniería BIM: estandarización documental de un edificio docente de tres plantas

#### Contexto empresarial

Norba Ingeniería BIM es un estudio de 10 técnicos especializado en instalaciones de edificios terciarios y educativos. Actualmente desarrolla el proyecto eléctrico de un edificio docente de tres plantas (aulas, laboratorios básicos, administración y vestíbulo general), modelado íntegramente en Revit MEP a partir de cálculos lumínicos elaborados en DIALux y con presentación visual al promotor preparada en Twinmotion mediante *Direct Link*.

#### Situación o problema

En la segunda entrega parcial (50 % de desarrollo documental), la dirección facultativa y la coordinación BIM general devolvieron el paquete de entregables eléctricos con una calificación de **«Rechazado por falta de consistencia documental»**, generando un desvío estimado de **35 % en horas de retrabajo**. Entre los fallos observados destacan:
- Nombres heterogéneos de 24 familias y 14 láminas sin seguir el patrón BEP del contrato.
- Tablas de planificación exportadas a plano con potencias en `W` y `kW` mezcladas y 11 luminarias sin código fotométrico ni grado IP.
- Notas generales en la lámina `E-02` que citaban normas de edificación de un país distinto y afirmaban que «el aspecto de iluminación se validó en modelo 3D visual».
- Cambios de potencia en equipos de ventilación acordados verbalmente en reunión de coordinación que nunca llegaron al unifilar ni al índice de revisiones de los PDFs emitidos.

#### Datos disponibles

- **Alcance del edificio:** 3 plantas (`PB`, `P01`, `P02`), superficie construida total $1\,850\text{ m}^2$, 18 láminas previstas entre plantas de alumbrado, fuerza, esquemas y detalles.
- **Extracto de datos anonimizados (`PROY-EDU-09`):**
  - Convención BEP exigida: Familias `EL-[CAT]-[TIPO]-[POT_W]-[TCC_K]` · Láminas `[DISC]-[SUB]-[NIV]-[NNN]` (p. ej., `EL-AL-P01-003`).
  - Muestra de *Schedule*: Aula 101 (`16 luminarias × 36 W`), Aula 102 (`16 luminarias × 0,040 kW`), Pasillo P01 (`12 luminarias × 18 W`, sin código `.ldt`), Laboratorio PB (`8 luminarias sin IP declarado`).
  - Nota de reunión sin formalizar: *«Climatización cambia recuperador de P02 de 5,5 kW a 9,2 kW; se añade punto de fuerza trifásico en cubierta; pasillo P01 requiere subir iluminación tras informe DIALux de 12 a 14 luminarias de 18 W.»*
- **Limitaciones contractuales:** Prohibido subir archivos `.rvt` o planos del promotor a asistentes externos; cualquier criterio reglamentario debe señalarse para verificación conforme al país y edición vigentes.

#### Preguntas de análisis

1. ¿Qué fallos documentales del rechazo son imputables a falta de estandarización de datos y cuáles a confusión entre disciplinas (cálculo, DIALux, Revit y visualización)?
2. ¿Cómo debe prepararse la información antes de consultar a ChatGPT o Claude para cumplir con la confidencialidad contractual?
3. ¿Qué impacto numérico exacto en potencia instalada de alumbrado y fuerza introducen los datos y cambios pendientes en `PROY-EDU-09`?
4. ¿Qué orden de actualización y qué controles previos a la impresión en PDF evitan volver a emitir un paquete desincronizado?

#### Tarea a realizar

En equipos de 3 personas, actuad como responsables de calidad documental de Norba Ingeniería BIM y preparad un **Plan de Rescate y Estandarización Documental** compuesto por:
1. Tabla de normalización de las muestras del *Schedule* y cálculo corregido de potencias en W y kW para los cuatro espacios indicados.
2. Reescritura depurada de las notas generales conflictivas eliminando la falsa validación mediante visualización 3D y añadiendo marcadores de verificación normativa.
3. Acta de coordinación BIM formalizada a partir de la nota de reunión de `PROY-EDU-09`, detallando todos los documentos afectados en cascada (Cálculo eléctrico, Unifilar, DIALux, Revit MEP, Láminas PDF y *Direct Link* Twinmotion).
4. Procedimiento en 8 pasos («Del cambio en reunión al PDF revisado») que utilizará todo el estudio en futuras entregas.

#### Posibles soluciones o criterios de análisis

- **Limpieza y cálculo del *Schedule*:** Homogeneizar toda la columna a `W`: Aula 101 = $16 \times 36\text{ W} = 576\text{ W}$; Aula 102 = $16 \times 40\text{ W} = 640\text{ W}$ (corrigiendo `0,040 kW`); Pasillo P01 inicialmente $12 \times 18\text{ W} = 216\text{ W}$, y tras actualización de DIALux pasa a $14 \times 18\text{ W} = 252\text{ W}$ ($+36\text{ W}$, es decir $+16,7\text{ \%}$), exigiendo además vincular su archivo `.ldt`/`.ies`; Laboratorio PB requiere verificación de grado IP según condiciones ambientales antes de cerrar ficha.
- **Notas generales:** Suprimir toda alusión a validación técnica por modelo visual; establecer remisión expresa al estudio DIALux para fotometría, al cuadro de cargas/unifilar para protecciones y secciones, y a la normativa oficial aplicable según emplazamiento y edición vigente.
- **Acta de coordinación y cascada:** El aumento del recuperador de $5,5\text{ kW}$ a $9,2\text{ kW}$ ($+3,7\text{ kW}$, $+67,3\text{ \%}$) obliga a recalcular sección, caída de tensión y protección en el circuito correspondiente, actualizar cuadro y unifilar, modificar parámetro de carga en Revit MEP y emitir nueva revisión (`Rev B`) en la lámina de fuerza de P02/cubierta y esquemas. Twinmotion solo se resincroniza por *Direct Link* tras cerrar los cambios geométricos de luminarias en Revit, sin valor probatorio técnico.

#### Preguntas de reflexión final

1. ¿En qué porcentaje estimáis que se reduce el tiempo de revisión de un paquete de 18 láminas si se aplica de forma sistemática la auditoría CSV previa con IA frente a revisarlo «a ojo» sobre planos PDF ya impresos?
2. ¿Qué responsabilidad recae sobre el coordinador BIM y cuál sobre el ingeniero proyectista cuando una tabla de planificación en Revit está formalmente completa pero el cálculo eléctrico cambia a última hora?

---

## 7. Evaluación

### Evaluación diagnóstica (inicio de sesión, 10 minutos)

Encuesta corta de diagnóstico con 4 cuestiones prácticas:
1. Identificar la diferencia entre un parámetro compartido de Revit y un texto suelto dibujado sobre una lámina.
2. Detectar el error en una tabla con mezcla de `18 W` y `0,036 kW`.
3. Explicar por qué no debe enviarse un archivo `.rvt` o PDF con carátula comercial a un chat externo sin permiso.
4. Señalar qué diferencia un plano constructivo PDF de una escena en Twinmotion.

### Evaluación formativa (durante la sesión)

Seguimiento continuo en las Actividades 1, 2 y 3 verificando:
- Uso estricto de datos anonimizados al consultar los asistentes.
- Identificación correcta de inconsistencias de unidades SI y campos vacíos sin permitir que la IA invente valores.
- Trazabilidad real entre decisiones de reunión, parámetros del modelo y láminas PDF afectadas.

### Evaluación sumativa (cierre de sesión)

Entrega grupal del **Dossier de Optimización Documental BIM** integrado por:
1. Tabla normalizada de nomenclatura y auditoría del CSV `PROY-DOC-03` con verificación manual.
2. Pliego depurado de notas generales y checklist previo a impresión PDF (`Pre-flight`).
3. Resolución completa del caso práctico `PROY-EDU-09` (cálculos corregidos, notas, acta de coordinación y procedimiento en 8 pasos).

### Rúbrica de evaluación

| Criterio | Insuficiente (0–4,9) | En desarrollo (5,0–6,9) | Adecuado (7,0–8,9) | Destacado (9,0–10) |
|---|---|---|---|---|
| **Estandarización BEP y nomenclatura** | No aplica la sintaxis BEP ni detecta inconsistencias obvias en nombres de familias y láminas. | Aplica parcialmente el patrón BEP, pero deja ambigüedades o no señala datos faltantes. | Normaliza familias, vistas y láminas conforme al patrón BEP creando una tabla de mapeo auditable. | Estandariza con precisión completa, previene rupturas de etiquetas en Revit y exige datos `.ldt`/`.ies` o eléctricos antes de cerrar nombres. |
| **Auditoría de Schedules y unidades SI** | Mantiene unidades mezcladas ($\text{W}$ / $\text{kW}$) o acepta valores inventados por la IA para rellenar celdas vacías. | Detecta las celdas vacías principales, pero omite algún fallo de unidad o cálculo de suma. | Unifica todas las unidades al SI, señala campos obligatorios ausentes y verifica los totales manualmente. | Realiza una auditoría exhaustiva cruzando *Schedule*, catálogo fotométrico y cuadro de cargas con cero errores de suma o unidad. |
| **Calidad de notas generales y rigor normativo** | Mantiene citas reglamentarias inaplicables, marcas no justificadas o confunde render con cálculo lumínico. | Depura parte del texto, pero deja alguna expresión vaga («normativa vigente») sin marcador de verificación. | Redacta notas claras, agnósticas de marca y con marcadores explícitos de verificación normativa y de cálculo. | Produce notas y especificaciones altamente trazables que delimitan cálculo, DIALux, Revit y Twinmotion sin fisuras conceptuales. |
| **Actas BIM y trazabilidad de entregas PDF** | Acta narrativa incompleta sin responsables ni vínculo con láminas o cálculos afectados. | Registra las incidencias básicas, pero omite la cascada completa de actualización documental. | Redacta acta estructurada con responsables, impactos cruzados y lista de control previa a PDF. | Diseña un sistema completo de gobernanza documental (`Rev` controladas, cascada multi-herramienta y *Pre-flight* PDF verificable). |

### Actividad de autoevaluación

El alumnado responde individualmente esta ficha de reflexión antes de cerrar la sesión:
- ¿Puedo justificar cada parámetro normalizado de mis tablas sin haber inventado ni asumido ningún dato técnico? *(Sí / No)*
- ¿He revisado que mis notas generales distingan con claridad entre memoria de cálculo, estudio DIALux, modelo Revit MEP y visualización en Twinmotion? *(Sí / No)*
- ¿Qué elemento de la lista previa a impresión a PDF considero más crítico para evitar retrabajos en mi entorno habitual? *(Respuesta breve de 3 líneas)*

---

## 8. Materiales y recursos

### Guion estructurado de diapositivas (8 diapositivas)

- **Slide 1 — Portada y enfoque del Tema 8:** Posición en el Bloque 6 (Tema 47 de 50), objetivos del día y coste real de los errores documentales en proyectos BIM eléctricos.
- **Slide 2 — Mapa de entregables BIM eléctricos:** Conexión entre familias, parámetros BEP, *Schedules*, láminas, especificaciones, actas y planos PDF.
- **Slide 3 — Estandarización de nomenclatura asistida por IA:** Cómo exportar listados anonimizados, aplicar reglas BEP y evitar que el renombrado rompa etiquetas o filtros en Revit MEP.
- **Slide 4 — Auditoría tabular de Schedules y unidades SI:** Detección de celdas vacías, mezcla de unidades y discrepancias frente a `.ldt`/`.ies` y cuadros de cargas.
- **Slide 5 — Higiene de notas generales, leyendas y especificaciones:** Eliminación de herencias obsoletas, prohibición de inventar citas normativas y marcadores `[VERIFICAR]`.
- **Slide 6 — Actas de coordinación BIM y trazabilidad en cascada:** Transformación de notas crudas de reunión en matrices de acción conectando Cálculo, DIALux, Revit, PDF y Twinmotion.
- **Slide 7 — Control de emisión a PDF (*Pre-flight Checklist*):** Revisión de cajetines, revisiones, escalas, filtros y visibilidad antes de entregar al cliente o dirección facultativa.
- **Slide 8 — Caso práctico `PROY-EDU-09` y rúbrica de cierre:** Presentación del reto grupal, criterios de evaluación y puente hacia la automatización segura (Tema 9).

### Ficha de trabajo del alumnado

Plantilla editable con tres áreas de trabajo:
1. **Tabla de diagnóstico (Actividad 1):** Columnas `Elemento analizado | Categoría del fallo | Riesgo en obra/entrega | Corrección propuesta`.
2. **Mesa de auditoría CSV (Actividad 2):** Registro de *prompts* empleados, lista de incidencias detectadas por la IA, falsos positivos descartados y verificación manual de totales.
3. **Checklist de control de calidad previa a PDF (Actividad 3):** Lista de 12 puntos verificables con casillas `[ ] Cumple / [ ] Corregir / [ ] N/A` y espacio para firma de revisión humana.

### Plantilla técnica práctica: Matriz de Acta de Coordinación e Impacto en Cascada

| ID Acción | Disciplina(s) | Descripción técnica resumida | Impacto en Cálculo / Unifilar | Impacto en DIALux / Revit MEP | Láminas PDF y Rev afectadas | Responsable y plazo | Estado de cierre verificado |
|---|---|---|---|---|---|---|---|
| `[INC-01]` | `[EL / CLIMA]` | `[Detalle técnico con cota/kW/mm]` | `[Sí/No — detalle]` | `[Sí/No — detalle]` | `[Código lámina + Rev]` | `[Rol · Fecha]` | `[Pendiente / Cerrado por Técnico]` |

### Lecturas y recursos recomendados

> **Advertencia obligatoria de validación:** Antes de adoptar en proyectos reales cualquier plantilla BEP, convenio de nomenclatura o cláusula técnica de los recursos siguientes, debéis validar la edición vigente de la norma aplicable en vuestro país, los requisitos contractuales del promotor y la compatibilidad exacta con vuestra versión de Revit MEP, DIALux y Twinmotion.

- **Estándar internacional de gestión de la información BIM (referencia orientativa a verificar):** Serie ISO 19650 (Partes 1 y 2) sobre organización y digitalización de la información en obras de construcción, validando su adaptación nacional o contractual (p. ej., anexos nacionales UNE-EN ISO 19650).
- **Documentación oficial de Autodesk Revit MEP:** Guías oficiales sobre gestión de parámetros compartidos (*Shared Parameters*), tablas de planificación (*Schedules*), plantillas de vista (*View Templates*) y configuración de exportación/impresión PDF según versión instalada.
- **Guías de formato abierto de incidencias BIM:** Documentación técnica de buildingSMART sobre el formato BCF (*BIM Collaboration Format*) para estructurar incidencias trazables en coordinación multidisciplinar.
- **Normativa eléctrica y lumínica aplicable (a verificar por jurisdicción):** Reglamento eléctrico nacional vigente (p. ej., REBT en España, IEC 60364 o NEC/NFPA 70 según emplazamiento) y normas aplicables de alumbrado (p. ej., UNE-EN 12464-1), comprobando siempre edición en vigor antes de incluir cualquier referencia en especificaciones técnicas.

### Glosario de términos clave

| Término | Definición |
|---|---|
| **BEP (*BIM Execution Plan*)** | Documento rector que establece normas de nomenclatura, matriz de parámetros, niveles de desarrollo, flujos de coordinación y estándares de entrega de un proyecto BIM. |
| **Parámetro compartido** | Parámetro definido en un archivo externo único de Revit que permite reutilizar exactamente el mismo campo entre múltiples familias, etiquetas y tablas de planificación. |
| **Tabla de planificación (*Schedule*)** | Vista tabular vinculada al modelo BIM que lista y cuantifica propiedades de elementos eléctricos; su completitud es documental y no sustituye el cálculo reglamentario. |
| **Higiene documental** | Proceso sistemático de depuración de notas generales, leyendas y especificaciones heredadas para eliminar contradicciones, normas inaplicables o datos obsoletos. |
| **Matriz de impacto en cascada** | Tabla de seguimiento que identifica todos los entregables afectados (cálculo, unifilar, DIALux, Revit, láminas PDF y visualización) cuando se modifica un requisito del proyecto. |
| **Pre-flight PDF** | Lista de comprobación ejecutada inmediatamente antes de emitir planos en PDF para validar escalas, filtros, etiquetas, cajetines, índice de revisiones y legibilidad gráfica. |
| **Trazabilidad de revisión** | Registro ordenado mediante códigos (`Rev A`, `Rev B`, fecha, descripción del cambio y revisor) que permite auditar qué cambió entre entregas y por qué. |

---

## 9. Adaptaciones

### Sesión presencial

- **Dinámica de aula:** Proyección dual en sala (CSV exportado a la izquierda, lámina PDF de muestra a la derecha) para realizar la «Caza de caos documental» de manera visual e interactiva.
- **Colaboración:** Equipos de 3 personas en mesa compartida; rotación de 5 minutos donde un equipo audita el *Pre-flight Checklist* generado por la mesa contigua.
- **Material impreso:** Plano tamaño A3 con errores sembrados en cajetín, leyenda y notas para subrayar físicamente durante la Actividad 1.

### Sesión online síncrona

- **Entorno colaborativo:** Salas de grupos reducidos con acceso a una carpeta compartida en la nube conteniendo los CSV anonimizados (`PROY-DOC-03_Schedule.csv` y `PROY-EDU-09`) y hojas de cálculo compartidas para validar sumas al instante.
- **Seguimiento del formador:** Revisión rápida en pantalla compartida de 2 muestras de tablas normalizadas por grupo antes de pasar a la Actividad 3.
- **Pizarra virtual:** Mural digital (Miro o equivalente) donde cada equipo pega sus tarjetas de incidencias clasificadas durante los 15 minutos de intercambio.

### Sesión asíncrona

- **Guía grabada:** Dos píldoras en vídeo (15 min cada una): la primera mostrando exportación limpia de *Schedules* a CSV desde Revit MEP sin datos confidenciales, y la segunda demostrando la depuración de notas y generación de actas BIM con Claude/ChatGPT.
- **Entregable autónomo:** El alumnado descarga el paquete completo del caso `PROY-EDU-09`, ejecuta las Actividades 2 y 3 en sus herramientas locales y sube un único expediente PDF con capturas de los *prompts*, tablas verificadas, acta de coordinación y checklist PDF.
- **Evaluación entre pares y tutoría:** Revisión cruzada obligatoria en el foro comentando el *Pre-flight Checklist* de un compañero y corrección personalizada del docente usando la rúbrica de 4 niveles.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Integra la generación de planos, etiquetas, leyendas, especificaciones e impresión a PDF aprendida en el **Módulo 4 (Documentación)**, los datos de sistemas eléctricos de **Revit MEP (Módulo 3)**, los parámetros fotométricos de **DIALux (Módulo 2)** y la arquitectura de *prompts* de seis capas del **Tema 7 del Bloque 6 (Tema 46 de 50)**.
- **Competencias que desarrolla:** Gobernanza documental BIM aplicada a instalaciones eléctricas, auditoría de calidad de datos tabulares, redacción técnica verificable y coordinación interdisciplinar trazable.
- **Conexión con el tema anterior y posterior en el programa (6 módulos / 50 temas):**
  - *Tema anterior — Bloque 6, Tema 7 de 11 (Tema 46 de 50): Generación de prompts especializados para instalaciones eléctricas.* El Tema 8 aplica la biblioteca de *prompts* creada en el Tema 7 directamente sobre familias, *Schedules*, notas y actas del flujo documental BIM.
  - *Tema posterior — Bloque 6, Tema 9 de 11 (Tema 48 de 50): Automatización de tareas repetitivas y organización de información del modelo.* Una vez estandarizados en el Tema 8 los criterios de nomenclatura, parámetros BEP y tablas limpias, el Tema 9 enseñará a identificar qué tareas repetitivas sobre esos mismos datos pueden automatizarse de forma segura mediante especificaciones lógicas y pruebas en copias de respaldo.
- **Evidencia de aprendizaje generada:** **Paquete Documental Estandarizado** (tabla de mapeo BEP, auditoría de *Schedule* verificada, pliego de notas depuradas, acta de coordinación con cascada de impactos y *Pre-flight Checklist* PDF), además de la resolución del caso `PROY-EDU-09`.

---

## Siguientes pasos para el formador

1. Preparar y verificar previamente los archivos `PROY-DOC-03_Schedule.csv` y el paquete `Paquete_Defectuoso_T8` comprobando todas las sumas en vatios ($\text{W}$) y kilovatios ($\text{kW}$) antes de la sesión.
2. Confirmar que el alumnado dispone de un ejemplo limpio de reglas de nomenclatura BEP para evitar que cada grupo improvise convenciones incompatibles durante las Actividades 2 y 3.
3. Insistir durante toda la jornada en que estandarizar un parámetro o una nota mediante IA **no equivale** a comprobar reglamentariamente una instalación eléctrica ni una iluminación en DIALux.
4. Conservar los *Pre-flight Checklists* y las matrices de parámetros depuradas por el alumnado, ya que servirán como requisitos de entrada para las especificaciones de automatización del **Tema 9** y la auditoría cruzada del **Tema 10**.
5. Recordar a los participantes la regla de seguridad de anonimización continua cuando trabajen posteriormente con archivos reales de sus estudios entre sesiones.
