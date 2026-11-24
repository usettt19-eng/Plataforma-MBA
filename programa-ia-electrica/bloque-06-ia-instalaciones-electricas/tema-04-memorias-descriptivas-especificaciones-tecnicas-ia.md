# Tema 4. Elaboración y revisión de memorias descriptivas y especificaciones técnicas

> **Aviso técnico, normativo y de responsabilidad profesional:** Este módulo forma parte del programa de especialización técnica *IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas* (no es un MBA ni confiere atribuciones legales para visar o firmar memorias y pliegos oficiales sin titulación y colegiación competentes). Toda cita reglamentaria mencionada (como REBT español, CTE DB-HE 3 / DB-SUA 4, IEC 60364, NEC/NFPA 70 o UNE-EN 12464-1) se incluye exclusivamente como **ejemplo ilustrativo**. Antes de emitir cualquier memoria o especificación técnica real, el proyectista responsable debe verificar el país, la normativa y edición vigentes, así como la exactitud de cada referencia legal y la coherencia total con planos y cálculos validados.

---

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Tema 4. Elaboración y revisión de memorias descriptivas y especificaciones técnicas |
| **Bloque y posición dentro del programa** | Bloque 6: Inteligencia artificial aplicada a instalaciones eléctricas — Tema 4 de 11 (Tema 43 de 50 del programa) |
| **Programa formativo** | IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas (Especialización Técnica en Ingeniería Eléctrica, BIM, Iluminación, Renderizado e IA Asistida — 6 módulos / 50 temas) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Haber completado los Temas 1 a 3 del Bloque 6 (anonimización, trabajo con datos tabulares en ChatGPT/Claude y cuadros de criterios de diseño aprobados); conocimientos previos de documentación de proyecto, especificaciones técnicas y láminas PDF en Revit MEP (Bloque 4) |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado redactará borradores estructurados de memorias descriptivas y pliegos de especificaciones técnicas anclados exclusivamente a datos verificados y anonimizados del proyecto, detectará lagunas o contradicciones entre memoria, cálculos, DIALux y planos exportados, y ejecutará un control editorial estricto para erradicar cláusulas ambiguas y citas normativas inventadas por la IA. |

---

## 2. Objetivos de aprendizaje

Al finalizar esta sesión de 4 horas, el alumnado será capaz de:

1. **Identificar** la estructura documental y función técnica diferenciada de la memoria descriptiva, la memoria de cálculo, los planos y el pliego de especificaciones técnicas dentro de un proyecto eléctrico. *(Nivel de Bloom: Recordar)*
2. **Explicar** el principio de anclaje documental (*grounding*) y por qué las restricciones negativas en las instrucciones impiden que ChatGPT o Claude rellenen lagunas del proyecto con suposiciones comerciales o normas inventadas. *(Nivel de Bloom: Comprender)*
3. **Aplicar** una ficha estructurada de datos reales anonimizados (procedentes de criterios aprobados, Revit MEP y DIALux) para generar un borrador técnico coherente sin datos fabricados. *(Nivel de Bloom: Aplicar)*
4. **Analizar** de forma cruzada un borrador de memoria o especificación frente a una tabla de circuitos/materiales de planos y un resumen de DIALux, localizando incoherencias de materiales, calibres, temperaturas de color o alcances omitidos. *(Nivel de Bloom: Analizar)*
5. **Evaluar** y depurar un texto técnico asistido por IA mediante una lista de control editorial estricto que elimine adjetivos no verificables y verifique o señale toda referencia reglamentaria antes de la emisión en PDF. *(Nivel de Bloom: Evaluar)*

---

## 3. Contenidos esenciales

### 3.1. Arquitectura documental de una memoria descriptiva y un pliego de especificaciones técnicas

#### Explicación breve y clara
Uno de los errores más habituales cuando se pide a un asistente de IA «redacta la memoria y las especificaciones de este edificio» es obtener un texto híbrido, repetitivo y lleno de generalidades («se instalarán materiales de primera calidad conforme a la buena práctica») que mezcla lo que describe el proyecto con requisitos de ejecución en obra o con cálculos sin justificar.

En un expediente profesional (enlazando directamente con el Bloque 4 de Documentación), cada documento cumple una misión legal y técnica distinta:
- **Memoria descriptiva:** explica *qué* se proyecta, *para qué* uso, con *qué alcance* y *por qué* se adopta la solución elegida (antecedentes, objeto, descripción de acometida, distribución, cuadros, alumbrado, puesta a tierra, medidas de seguridad y resumen de características).
- **Memoria de cálculo y anexos:** justifica *numéricamente* cargas, secciones, caídas de tensión, cortocircuito, selectividad, puesta a tierra y fotometría (DIALux) —nunca generados como texto libre sin respaldo determinista—.
- **Pliego de especificaciones técnicas (condiciones particulares):** define *cómo* debe suministrarse, montarse, probarse y recibirse cada material y equipo (clase de reacción al fuego, grado IP/IK, ensayos de aislamiento y continuidad, documentación *as-built*).
- **Planos y esquemas:** definen gráficamente *dónde* y *cómo* se conectan e instalan los elementos.

La IA aporta gran velocidad para estructurar índices, homogenizar estilo técnico y redactar párrafos descriptivos o cláusulas de ensayo **cuando recibe claramente separado qué pertenece a la memoria y qué al pliego**.

#### Conceptos clave
- **Separación de roles documentales:** describir la instalación (Memoria), calcularla (Anexo de Cálculo / DIALux), representarla (Planos Revit) y exigir calidad de ejecución/recepción (Pliego de Especificaciones).
- **Lenguaje técnico verificable vs. prosa comercial:** sustituir expresiones vacías («luminarias de alta eficiencia y cables óptimos») por especificaciones comprobables en recepción («eficacia mínima $\ge 120\text{ lm/W}$, $4.000\text{ K}$, $CRI \ge 80$, IP44» o «conductor de cobre aislamiento XLPE $0,6/1\text{ kV}$, clase de reacción al fuego según reglamento vigente»).
- **Orden de prelación documental:** recordar que en la práctica contractual suelen surgir conflictos si memoria, pliego, mediciones y planos no están sincronizados; el LLM debe ayudarnos a detectarlos antes de emitir el PDF final.
- **Trazabilidad desde el Tema 3:** reutilizar la matriz ponderada y el cuadro de criterios aprobados como base factual para el apartado «Justificación de la solución adoptada».

#### Definiciones necesarias
- **Memoria descriptiva:** documento técnico expositivo que define el objeto, alcance, emplazamiento, hipótesis funcionales, características principales de los sistemas eléctricos e iluminación y justificación de la arquitectura proyectada.
- **Pliego de especificaciones técnicas:** documento normativo interno del proyecto que establece de forma inequívoca las características exigibles a materiales, equipos, montaje, pruebas, verificaciones previas a puesta en servicio y criterios de aceptación en obra.

#### Ejemplo práctico realista
Un proyectista está cerrando la documentación de una ampliación de oficinas de $950\text{ m}^2$ (`EXP_OF_21`). Primero separa sus archivos de entrada en dos plantillas cortas: (1) *Ficha para Memoria Descriptiva* (esquema TT, acometida $400/230\text{ V}$, potencia prevista $82\text{ kW}$, 1 cuadro general `CGMP` + 2 subcuadros, bandejas metálicas perforadas en pasillos, alumbrado sectorizado normal + emergencia), y (2) *Ficha para Especificaciones Técnicas* (IP42 en cuadros interiores, cables libres de halógenos según exigencia de pública concurrencia a confirmar en normativa local, pruebas de resistencia de aislamiento y disparo diferencial previas a recepción). Al pedirle a Claude redactar primero la sección descriptiva y después el pliego de condiciones en bloques separados, obtiene dos documentos nítidos sin redundancias ni vaguedades comerciales.

#### Errores frecuentes
- Pedir a la IA «hazme la memoria y el pliego todo junto» con un prompt de dos líneas sin aportarle los datos reales de los cuadros, cables o luminarias.
- Incluir precios o marcas comerciales exclusivas en especificaciones públicas cuando las reglas de contratación aplicables exigen especificaciones abiertas o «equivalente».
- Dejar en el pliego cláusulas genéricas copypaste de viviendas o industria pesada que no aplican al edificio real (p. ej. exigir centro de transformación propio o puente grúa en un local conectado en baja tensión).
- Asumir que un borrador bien redactado equivale a memoria técnica lista para visar sin comprobar su coherencia con planos y cálculos.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué diferencia funcional existe entre la memoria descriptiva y el pliego de especificaciones técnicas en un proyecto eléctrico?
2. ¿Por qué conviene entregar al asistente de IA los datos de partida separados por documento antes de generar borradores?
3. ¿Qué riesgos contractuales y de obra provocan las cláusulas redactadas con adjetivos ambiguos («adecuado», «suficiente», «primera calidad»)?

---

### 3.2. Generación controlada de borradores mediante anclaje a datos reales (*grounding*)

#### Explicación breve y clara
Cuando un LLM redacta un texto técnico sin disponer de algún dato concreto (por ejemplo, desconoce la intensidad asignada del interruptor general, el tipo de aislamiento del cable o la altura libre del falso techo), su comportamiento por defecto es **completar el hueco de forma verosímil para mantener la fluidez del texto**. En ingeniería eléctrica, ese «relleno silencioso» es peligrosísimo: puede escribir que el cuadro tiene $250\text{ A}$ cuando en cálculos tiene $160\text{ A}$, o inventar que los tubos van empotrados cuando en Revit están modelados vistos en bandeja.

Para impedirlo, se aplica la técnica de **anclaje documental estricto (*grounding*) con reglas negativas explícitas**:
1. Suministrar una **Ficha Maestra de Datos del Proyecto** anonimizada y ya verificada (potencias, tensiones, sistema de conexión a tierra, tipos de canalización de Revit, resumen fotométrico de DIALux).
2. Incluir la orden explícita: *«Redacta únicamente con los datos de la ficha adjunta. Si un dato técnico o normativo no figura en la ficha, sustitúyelo obligatoriamente por la etiqueta `[DATO PENDIENTE DE CONFIRMAR]` o `[VERIFICAR NORMA LOCAL]`. Está prohibido estimar, deducir o inventar valores»*.
3. Trabajar por secciones concretas (objeto y alcance, descripción de distribución, alumbrado, puesta a tierra, especificaciones de canalización) para mantener alta precisión y revisar cada bloque en 2 minutos.

#### Conceptos clave
- **Anclaje factual (*Document Grounding*):** restringir la fuente de verdad del LLM exclusivamente al paquete de datos verificado que le aporta el técnico.
- **Marcadores de hueco explícito (`[DATO PENDIENTE]`):** mecanismo preventivo que convierte posibles invenciones silenciosas en alertas visuales fáciles de localizar y completar por el ingeniero.
- **Redacción modular por capítulos:** generar cada apartado de la memoria de forma controlada en vez de producir un documento de 30 páginas de una sola tirada.
- **Sincronía con fuentes BIM y DIALux:** extraer los datos de descripción directamente de las tablas exportadas (Tema 2) en lugar de transcribirlos de memoria.

#### Definiciones necesarias
- **Alucinación de relleno (*Gap-Filling Hallucination*):** invención no advertida de datos numéricos, materiales, marcas o características constructivas por parte de un asistente de IA cuando la información suministrada es incompleta.
- **Ficha Maestra Anonimizada de Proyecto:** resumen estructurado y validado en hoja de texto o tabla Markdown que reúne todos los parámetros confirmados del expediente antes de redactar la memoria.

#### Ejemplo práctico realista
Un ingeniero debe redactar el apartado *«Sistema de alumbrado normal y de emergencia»* de una nave de exposiciones (`PROY_EXP_05`). Entrega a ChatGPT una tabla anonimizada con los datos reales de DIALux y Revit: `Oficinas: paneles LED 36 W, 4.000 K, Em=515 lx, U0=0,66, UGR=17,8; Exposición: proyectores carril 28 W, 3.000 K, Em=340 lx; Emergencia: dato aún no cerrado en plano`. Además añade la regla negativa `[DATO PENDIENTE]`. El borrador generado describe con precisión las dos zonas normalizadas con sus potencias, temperaturas de color y resultados reales, y en el párrafo final escribe literalmente: *«La autonomía mínima, flujo luminoso y distribución de las luminarias de emergencia se completarán tras la validación específica: `[DATO PENDIENTE DE CONFIRMAR — INTEGRAR RESULTADO CÁLCULO EMERGENCIA Y NORMA VIGENTE]`»*. En lugar de inventarse «autonomía de 1 hora con bloques de 150 lm», la IA dejó señalada exactamente la laguna que el técnico debía cerrar.

#### Errores frecuentes
- Olvidar poner la instrucción negativa de `[DATO PENDIENTE]`, dejando que la IA «complete» el esquema de puesta a tierra (asumiendo TT cuando era TN-S) o el grado IP de luminarias exteriores.
- Cargar versiones desactualizadas de la Ficha Maestra mientras se siguen haciendo cambios en Revit MEP o DIALux, generando una memoria obsoleta desde el primer día.
- Permitir que el LLM redacte cifras de cálculo directamente en prosa sin indicar que proceden del Anexo de Cálculo verificado.
- Copiar y pegar el borrador generado sin hacer una búsqueda final de corchetes `[` para asegurarse de que no quedó ningún marcador sin resolver antes de emitir el documento.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué ocurre por defecto cuando se pide a ChatGPT o Claude redactar una memoria si falta un parámetro técnico en los datos de entrada?
2. ¿Cómo funciona la etiqueta `[DATO PENDIENTE DE CONFIRMAR]` dentro de una estrategia de *grounding* documental?
3. ¿Por qué es más seguro y revisable generar memorias técnicas por secciones modulares a partir de una Ficha Maestra anonimizada?

---

### 3.3. Detección asistida de lagunas y contradicciones entre memoria, especificaciones y planos

#### Explicación breve y clara
En proyectos eléctricos reales con plazos ajustados, el origen más frecuente de modificados de obra, sobrecostes y reparos de revisión técnica no es una ecuación mal resuelta, sino la **contradicción interna entre documentos**: la memoria describe cable armado o libre de halógenos y el plano de detalle o cuadro de Revit indica PVC estándar; el pliego exige luminarias con $UGR \le 19$ y $4.000\text{ K}$ mientras la lista exportada de DIALux usó ópticas de $3.000\text{ K}$ con $UGR = 22$; o una acometida aparece en la memoria con $75\text{ kW}$ y en el *panel schedule* figura con $90\text{ kW}$ tras una ampliación tardía.

Aunque un LLM **no puede leer nativamente archivos `.rvt` ni validar geometrías de planos CAD**, resulta extraordinariamente eficaz como **revisor documental cruzado** cuando el técnico le entrega dos textos o tablas limpias anonimizadas: (A) el extracto de memoria o pliego técnico, y (B) la tabla exportada de materiales, circuitos, canalizaciones o luminarias que irá a las láminas de planos (Bloque 4). Al pedirle explícitamente una matriz de discrepancias (`Elemento | Qué dice Memoria/Pliego | Qué dice Tabla de Planos/DIALux | Gravedad | Acción recomendada`), la IA localiza inconsistencias en segundos para que el proyectista las resuelva en el origen correcto.

#### Conceptos clave
- **Revisión cruzada interdocumental:** confrontar sistemáticamente Memoria Descriptiva vs. Pliego de Especificaciones vs. Tablas de Revit (planos) vs. Resumen de DIALux.
- **Taxonomía de discrepancias:** clasificar los hallazgos en (1) contradicción directa (datos opuestos), (2) omisión/laguna (elemento en plano ausente en memoria o viceversa) y (3) incoherencia terminológica (distintos códigos para el mismo cuadro o luminaria).
- **Fuente única de verdad (*Single Source of Truth*) definida por el técnico:** la IA señala la contradicción, pero **nunca decide cuál de los dos documentos tiene razón**; esa decisión corresponde exclusivamente al ingeniero revisando cálculo, Revit y DIALux.
- **Control previo a emisión PDF:** integrar esta auditoría cruzada justo antes de maquetar e imprimir las láminas a PDF (conexión directa con Bloque 4).

#### Definiciones necesarias
- **Contradicción interdocumental:** incompatibilidad técnica o numérica entre dos piezas del mismo proyecto (p. ej. distinta sección de conductor, tipo de aislamiento, código de tablero o potencia luminotécnica entre memoria, pliego, cálculos y planos).
- **Laguna documental:** ausencia en la memoria o en las especificaciones técnicas de un equipo, sistema o requisito de montaje que sí figura en los planos o en el modelo BIM (p. ej. grupo electrógeno, SAI, sistema DALI o red de tierra).

#### Ejemplo práctico realista
Antes de imprimir a PDF el juego final de láminas de una clínica pequeña (`EXP_CLI_02`), el coordinador BIM exporta desde Revit una tabla anonimizada de tipos de canalización, cuadros y familias de luminarias, y la cruza en Claude frente al borrador de Memoria + Pliego. El informe de revisión cruzada detecta tres fallos críticos en 20 segundos:
1. La memoria habla de **dos subcuadros** (`CS-PB` y `CS-P1`), pero la tabla de Revit incluye un tercer cuadro **`CS-RX`** (diagnóstico).
2. El pliego técnico especifica luminarias empotradas de **$4.000\text{ K}$ e IP44 en aseos**, pero la lista exportada de DIALux para los aseos tiene cargada una familia de **$3.000\text{ K}$ e IP20**.
3. En la memoria consta canalización bajo **tubo rígido libre de halógenos**, mientras que el listado de *conduits* de Revit del falso techo de pasillo figura modelado como **bandeja de rejilla metálica**.
El técnico agradece el aviso, comprueba en obra/cliente cuál era el criterio definitivo, corrige la memoria y actualiza la especificación IP44 en DIALux/Revit antes de emitir los PDFs.

#### Errores frecuentes
- Confiar en que «si nadie se queja en la revisión visual rápida de planos, la memoria coincide».
- Dejar que el LLM «corrija automáticamente» la contradicción eligiendo al azar entre el dato de la memoria y el dato del plano sin consultar el proyecto real.
- Intentar pasar capturas de pantalla borrosas de un plano completo para la revisión cruzada en vez de exportar las tablas de planificación y leyendas limpias de Revit/DIALux.
- Cambiar nombres de cuadros en Revit a última hora sin volver a correr el cruce documental frente a memoria y esquema unifilar.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué formato de entrada debe extraerse de Revit MEP y DIALux para que ChatGPT o Claude detecten contradicciones frente a la memoria sin ver el modelo 3D?
2. ¿Por qué el asistente puede señalar una discrepancia entre memoria y plano, pero nunca debe decidir por su cuenta qué documento prevalece?
3. ¿Cuáles son las cinco contradicciones más habituales entre memoria, especificaciones técnicas y planos eléctricos?

---

### 3.4. Control editorial estricto: eliminación de citas inventadas y cláusulas ambiguas

#### Explicación breve y clara
Incluso un borrador generado con datos reales del proyecto puede arrastrar dos vicios muy graves si el asistente de IA introduce redacción jurídica o normativa de su entrenamiento: **citas inventadas o incorrectas de normas** y **cláusulas técnicas ambiguas o no verificables**.

Un **control editorial estricto** obliga a someter cualquier borrador asistido por IA a una auditoría en tres pasadas humanas antes de pasar a maquetación:
1. **Auditoría de citas legales y normas:** extraer o subrayar **todas** las referencias a leyes, reglamentos, instrucciones técnicas o normas UNE/IEC/EN/NFPA que aparezcan en el texto. Por cada referencia, el técnico debe verificar directamente en fuente oficial: (a) que el código y título existen literalmente, (b) que corresponde al país y ámbito del edificio, y (c) que es la **edición vigente** (no una norma anulada o sustituida). Si no se verifica, se elimina o se sustituye hasta su comprobación oficial.
2. **Auditoría de precisión técnica y mensurabilidad:** eliminar palabras difusas («adecuado», «suficiente», «oportuno», «de primera marca», «conforme a normativa» sin concretar cuál) y sustituirlas por magnitudes verificables (mm², A, kA, IP/IK, K, lm/W, $\Omega$, clases de reacción al fuego según norma vigente).
3. **Auditoría de coherencia de versiones y alcance:** comprobar que no quedan marcadores `[DATO PENDIENTE]`, referencias a sistemas no incluidos en el encargo ni mezcla de variantes lingüísticas o unidades no SI.

#### Conceptos clave
- **Cero citas no verificadas:** regla editorial absoluta por la cual ninguna norma citada en memoria o pliego se mantiene sin haber comprobado existencia, jurisdicción y vigencia en el documento oficial.
- **Cláusula auditable en obra:** requisito del pliego redactado de manera que la dirección de obra o un instalador cualificado pueda comprobar objetivamente (`PASA / NO PASA`) su cumplimiento en recepción.
- **Lista blanca normativa del proyecto:** relación cerrada de reglamentos y normas realmente aplicables en ese país y edificio (verificada por el proyectista al inicio del encargo) que se entrega al LLM como único repertorio permitido para citar.
- **Limpieza de lenguaje inflado (*De-fluffing*):** supresión de párrafos retóricos repetitivos habituales en salidas de LLMs que alargan la memoria sin aportar valor de ingeniería.

#### Definiciones necesarias
- **Control editorial técnico:** revisión sistemática humana de fondo, forma, precisión cuantitativa, validez jurídica de citas y coherencia documental antes de aprobar la emisión oficial de una memoria o pliego.
- **Lista blanca normativa (*Normative Allowlist*):** conjunto acotado y verificado por el técnico de reglamentos, instrucciones y normas técnicas vigentes aplicables al proyecto específico, fuera del cual el asistente tiene prohibido generar citas normativas.

#### Ejemplo práctico realista
Al revisar un borrador de especificaciones técnicas generado por IA para una reforma comercial, el responsable editorial detecta tres frases problemáticas:
- *Frase 1:* «Los cables cumplirán la ITC-BT-99 y la norma UNE-EN 50575:2010 sobre cables de alta resistencia térmica». $\rightarrow$ **Alucinación doble**: no existe una «ITC-BT-99» en el REBT español de baja tensión y el año/título de la norma europea citada es impreciso o desactualizado respecto a las tablas/edición vigentes del Reglamento de Productos de Construcción y reglamento eléctrico aplicable; se borra y se verifica la edición oficial vigente en el país del proyecto.
- *Frase 2:* «Las bandejas tendrán espesor suficiente y acabado de buena calidad». $\rightarrow$ **Ambigüedad no auditable**: se reemplaza por dimensión, material, tratamiento anticorrosivo y clase de resistencia mecánica concreta decidida por el proyectista (p. ej. chapa galvanizada sendzimir o recubrimiento verificado según ambiente).
- *Frase 3:* «En caso de incendio en sala de bombas aplicará el artículo NEC 695.4». $\rightarrow$ **Contaminación de país**: referencia estadounidense insertada en un proyecto europeo; se elimina y se consulta la reglamentación nacional contra incendios y eléctrica vigente.

#### Errores frecuentes
- Confiar en las citas normativas generadas en un pliego porque «suenan muy oficiales y llevan números y años».
- Permitir que el LLM use expresiones como «según normativa vigente» repetida 20 veces sin concretar ni verificar qué norma rige cada requisito.
- Olvidar actualizar la «Lista blanca normativa» cuando cambia el país del proyecto o se aprueba una modificación reglamentaria reciente.
- Dejar que la IA alargue las especificaciones con párrafos genéricos de relleno que contradicen sutilmente las condiciones particulares de la obra.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué es una «Lista blanca normativa» y cómo reduce drásticamente las citas inventadas en memorias y pliegos?
2. ¿Por qué son problemáticas en un pliego de especificaciones expresiones como «sección adecuada» o «iluminación suficiente» frente a magnitudes verificables?
3. ¿Qué tres comprobaciones obligatorias debe superar cualquier referencia legal antes de permanecer en el texto final de una memoria?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** simula el ciclo completo de producción documental asistida de un despacho técnico: preparación de Ficha Maestra, redacción anclada, cruce interdocumental frente a exportaciones Revit/DIALux y control editorial estricto.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
|---|---|---|---|
| **1. Apertura y activación: «El texto bonito que falla en obra»** | 00:00 – 00:20 (20 min) | Presenta un fragmento de 12 líneas de memoria/pliego generado por IA con errores ocultos (una cita inventada, un adjetivo ambiguo y una contradicción de material) y modera la Actividad 1. | Subraya en 8 minutos las debilidades del fragmento y debate por qué causaría problemas de obra, presupuesto o visado. |
| **2. Microexposición A: Arquitectura documental y técnica de *grounding* (`[DATO PENDIENTE]`)** | 00:20 – 01:00 (40 min) | Explica la frontera entre memoria descriptiva, memoria de cálculo, pliego y planos; demuestra cómo construir una Ficha Maestra anonimizada con Lista Blanca Normativa y reglas negativas. | Diseña una Ficha Maestra reducida y prueba cómo cambia la salida de IA al introducir la prohibición de rellenar huecos sin dato. |
| **3. Actividad 2: Redacción controlada y revisión cruzada Memoria vs. Tablas Revit/DIALux** | 01:00 – 01:50 (50 min) | Entrega el paquete anonimizado de un proyecto ejemplo (criterios aprobados + CSV de Revit y DIALux con discrepancias introducidas) y guía la detección de contradicciones. | Genera el borrador anclado de dos secciones, ejecuta el cruce interdocumental asistido por IA y redacta la tabla de discrepancias indicando qué documento corrige el proyectista. |
| **Descanso activo** | 01:50 – 02:05 (15 min) | Pausa recomendada fuera de pantalla; prepara la lista de verificación editorial del segundo bloque. | Descansa y prepara el paquete del Caso práctico. |
| **4. Microexposición B: Control editorial estricto y erradicación de citas inventadas** | 02:05 – 02:35 (30 min) | Muestra ejemplos reales de alucinaciones normativas (números falsos de ITC, mezcla IEC/NEC, ediciones antiguas) y enseña la auditoría editorial en 3 pasadas. | Practica sobre 4 cláusulas defectuosas transformando lenguaje ambiguo en especificaciones medibles y marcando citas a verificar en fuentes oficiales. |
| **5. Resolución del Caso práctico (*Edificio Mirador*)** | 02:35 – 03:20 (45 min) | Introduce el caso de la reforma corporativa de $1.450\text{ m}^2$ con 6 contradicciones y 2 citas normativas falsas; supervisa el trabajo por equipos verificando que ninguna alucinación sobreviva. | Audita el borrador completo frente a las tablas exportadas de Revit y DIALux, limpia las citas inventadas, resuelve las 6 contradicciones y emite la versión depurada con bitácora. |
| **6. Actividad 3 y puesta en común (Transferencia a proyecto real)** | 03:20 – 03:45 (25 min) | Modera la exposición de hallazgos del caso y acompaña la creación de una checklist editorial y plantilla de Ficha Maestra aplicable al proyecto propio/integrador. | Crea su *Checklist Editorial Pre-PDF* y configura la estructura de memoria y pliego para su proyecto integrador del curso. |
| **7. Síntesis, evaluación sumativa y cierre** | 03:45 – 04:00 (15 min) | Resume los principios clave de documentación segura asistida por IA, aplica el cuestionario sumativo y presenta el puente hacia el Tema 5 (asistencia con cálculos y fórmulas). | Realiza el cuestionario sumativo (6 ítems), completa la autoevaluación y archiva su checklist editorial. |

*Suma total cronometrada:* $20 + 40 + 50 + 15 + 30 + 45 + 25 + 15 = \mathbf{240\text{ minutos (4 horas)}}$.

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Autopsia rápida de un pliego técnico alucinado

- **Nombre:** Autopsia rápida de un pliego técnico alucinado
- **Objetivo:** Activar la capacidad crítica editorial del alumnado frente a textos técnicos redactados por IA que parecen impecables formalmente pero contienen fallos legales y contractuales graves.
- **Instrucciones para el alumnado:**
  1. Lee en pantalla el fragmento de 12 líneas titulado *«Especificación técnica de canalización y alumbrado — Local Comercial Modelo»*.
  2. En 7 minutos, detecta y clasifica al menos: (a) una referencia normativa sospechosa o de otro país, (b) dos expresiones ambiguas imposibles de exigir objetivamente en obra, y (c) una contradicción obvia respecto a la ficha técnica básica adjunta (`falso techo registrable` vs. `roza empotrada en hormigón`).
  3. Comparte tus hallazgos en la encuesta/chat indicando cuál provocaría mayor coste o conflicto con la contrata en obra.
- **Materiales necesarios:** Diapositiva o documento breve de 1 página con el fragmento contaminado, ficha de trabajo y chat/pizarra.
- **Tiempo estimado:** 15 minutos (integrados en la Fase 1).
- **Rol del formador:** Destacar las trampas lingüísticas habituales de la IA y demostrar por qué revisar textos generados por LLM exige lectura técnica línea a línea.
- **Producto o entregable esperado:** Lista individual con al menos 4 defectos clasificados y justificados.
- **Criterios de éxito:** El alumnado identifica la cita normativa sospechosa, las ambigüedades no mensurables y la contradicción constructiva antes de empezar la Microexposición A.

### Actividad 2 (Aplicación técnica): Redacción anclada (*grounding*) y matriz de discrepancias Memoria vs. Revit/DIALux

- **Nombre:** Redacción anclada (*grounding*) y matriz de discrepancias Memoria vs. Revit/DIALux
- **Objetivo:** Generar borradores modulares de memoria y especificaciones sin inventar datos mediante una Ficha Maestra y ejecutar una revisión cruzada asistida frente a tablas exportadas de Revit y DIALux.
- **Instrucciones para el alumnado:**
  1. En parejas o tríos, descargad el paquete anonimizado `Act2_Memoria_Cruce.zip`, que contiene: (a) una `Ficha_Maestra_Anon.md` con lagunas intencionadas en puesta a tierra y emergencia, (b) un borrador previo de memoria/especificaciones y (c) dos CSV limpios exportados de Revit (`Revit_Canalizaciones_Cuadros.csv`) y DIALux (`DIALux_Luminarias.csv`).
  2. Durante 20 minutos, configurad un prompt con **anclaje estricto**, **Lista Blanca Normativa** y regla **`[DATO PENDIENTE DE CONFIRMAR]`** para redactar el apartado de *Distribución Interior y Alumbrado*, verificando que la IA no invente los valores omitidos de puesta a tierra ni emergencia.
  3. Durante 25 minutos, ejecutad la **revisión cruzada** entregando a ChatGPT/Claude el borrador previo y los dos CSV, exigiendo una tabla con 5 columnas (`ID | Apartado Memoria/Pliego | Dato en Revit/DIALux | Tipo de discrepancia | Decisión técnica del proyectista`). Completad la última columna sin delegar la decisión en el asistente.
- **Materiales necesarios:** Paquete `Act2_Memoria_Cruce.zip`, acceso a asistente IA (o extractos simulados en entorno offline) y plantilla de matriz de discrepancias.
- **Tiempo estimado:** 50 minutos (Fase 3: 45 min de ejecución + 5 min de contraste rápido).
- **Rol del formador:** Revisar que la regla negativa de `[DATO PENDIENTE]` se aplicó con éxito y comprobar que los equipos resuelven la discrepancia verificando el criterio técnico real en lugar de pedir a la IA que elija.
- **Producto o entregable esperado:** Borrador redactado con marcadores explícitos en las lagunas + Matriz de Discrepancias resuelta por el proyectista.
- **Criterios de éxito:** Cero datos inventados en el borrador, detección correcta de al menos el 90 % de las contradicciones sembradas entre memoria y CSV de Revit/DIALux y decisiones técnicas justificadas.

### Actividad 3 (Transferencia a proyecto real): Ficha Maestra + Checklist Editorial Pre-PDF para tu proyecto

- **Nombre:** Ficha Maestra + Checklist Editorial Pre-PDF para tu proyecto
- **Objetivo:** Transferir los controles editoriales y de coherencia documental del tema a un instrumento reutilizable para el proyecto integrador del curso y la práctica profesional diaria.
- **Instrucciones para el alumnado:**
  1. Abre la **Plantilla 6.4 — Ficha Maestra de Grounding + Checklist Editorial Pre-PDF** (sección 8).
  2. Adapta la Ficha Maestra a un proyecto real tuyo anonimizado (o al caso integrador del programa): incluye el apartado **Lista Blanca Normativa** especificando país, jurisdicción y reglamentos concretos que tú mismo confirmarás antes de citarlos.
  3. Personaliza las 8 comprobaciones de la *Checklist Editorial Pre-PDF* añadiendo al menos 2 controles específicos de tu ámbito (por ejemplo, verificación de códigos de luminarias entre DIALux y leyenda de planos PDF, o coherencia de clases de reacción al fuego de cables entre pliego y cuadro de circuitos).
- **Materiales necesarios:** Plantilla editable de Ficha Maestra y Checklist Editorial (Word/Markdown/Excel).
- **Tiempo estimado:** 25 minutos (Fase 6).
- **Rol del formador:** Auditar las listas blancas normativas propuestas para asegurar que explicitan país y verificación de edición vigente, evitando listas genéricas sin jurisdicción.
- **Producto o entregable esperado:** Plantilla adaptada *Ficha Maestra y Checklist Editorial Pre-PDF* lista para emplear antes de emitir planos.
- **Criterios de éxito:** Incluye Lista Blanca Normativa acotada por país, regla `[DATO PENDIENTE]` explícita y checklist editorial de al menos 10 puntos verificables antes de imprimir PDF.

---

## 6. Caso práctico

### Caso práctico: Depuración editorial y cruce interdocumental del *Edificio Mirador*

#### Contexto empresarial
**Luminia & Red Proyectos S.L.** es un estudio de ingeniería eléctrica y coordinación BIM encargado de redactar la documentación final de reforma integral eléctrica e iluminación de unas oficinas corporativas de **$1.450\text{ m}^2$** distribuidas en dos plantas (código anonimizado `EXP_MIR_14`). Para cumplir con el plazo de entrega al cliente y antes de imprimir el juego definitivo de planos en PDF desde Revit (Bloque 4), un miembro del equipo utilizó un asistente de IA para generar rápidamente el borrador de la Memoria Descriptiva y el Pliego de Especificaciones Técnicas, pero no ejecutó ni el anclaje estricto ni la auditoría editorial posterior.

#### Situación o problema
La revisión interna detecta sospechas de inconsistencias graves entre el documento redactado (`Borrador_Memoria_Pliego_Mirador.docx`), el estudio fotométrico definitivo exportado de **DIALux** y las tablas reales modeladas en **Revit MEP** (que ya coinciden con los planos preliminares). Además, el texto contiene referencias reglamentarias dudosas y lenguaje impreciso que expondrían al estudio a reparos técnicos y reclamaciones del instalador en obra.

#### Datos disponibles

| Área / Elemento | Lo que afirma el Borrador IA (`Memoria + Pliego`) | Dato verificado en fuente real (`Revit MEP / DIALux / Criterio Proyecto`) |
|---|---|---|
| **1. Potencia total prevista y acometida** | «Acometida trifásica $400/230\text{ V}$ con potencia total prevista de **$95\text{ kW}$** y cuadro general único» | Revit *Panel Schedules*: existen 3 cuadros (`CGMP`, `CS-P1`, `CS-P2`) cuya suma verificada es **$112\text{ kW}$** |
| **2. Tipo de cable en falso techo oficinas** | «Todo el cableado interior se ejecutará con conductor rígido aislado en **PVC convencional $450/750\text{ V}$** bajo tubo» | Criterio de seguridad y planos Revit: edificio con aforo/evacuación que requiere conductor **libre de halógenos / baja emisión de humos** según exigencia a comprobar en reglamento vigente |
| **3. Canalización principal en pasillos** | «Distribución principal mediante tubo empotrado en tabiquería de ladrillo» | Revit *Conduit/Tray Schedule*: distribución principal por **bandeja metálica perforada en falso techo registrable** + tabique separador fuerza/datos |
| **4. Iluminación zona trabajo abierto (`LOC-02`)** | «Se instalarán 42 paneles LED de **$4.000\text{ K}$** con $UGR < 19$ e **IP54**» | Tabla DIALux definitiva (`LOC-02`): **48 paneles LED de $3.000\text{ K}$** con $UGR = 18,4$ e **IP20** (oficina seca) |
| **5. Puesta a tierra** | «Red de tierra con picas de cobre hasta alcanzar resistencia máxima garantizada de $2\ \Omega$» | En el proyecto real aún **no existe ensayo geotécnico/medición de resistividad del terreno** (dato sin confirmar; además el límite depende de verificación reglamentaria y tensión de contacto aplicable) |
| **6. Alumbrado de emergencia** | «Luminarias autónomas con autonomía de 2 horas según **ITC-BT-55**» | No existe «ITC-BT-55» en el REBT español de ejemplo (en España la de alumbrado de emergencia/pública concurrencia debe consultarse directamente en el texto oficial vigente, como ITC-BT-28 y CTE DB-SUA 4, verificando jurisdicción del país) |
| **7. Cláusula de recepción en Pliego** | «El instalador entregará aparamenta de excelente calidad y realizará las pruebas oportunas antes de energizar» | Exige redacción medible: grados IP/IK, poder de corte verificado en unifilar, ensayos de continuidad, resistencia de aislamiento y disparo diferencial según reglamento aplicable |
| **8. Cita de estándar fotométrico** | «Cumple plenamente la norma **NFPA 101-L** de oficinas europeas» | Alucinación mixta: mezcla norma estadounidense de seguridad humana (`NFPA 101`) con sufijo inventado y ámbito europeo (en Europa suele tomarse como referente ilustrativo `UNE-EN 12464-1`, verificando siempre edición vigente) |

#### Preguntas de análisis
1. Clasifica las 8 incidencias de la tabla anterior en: (a) **Contradicciones entre borrador y Revit/DIALux**, (b) **Alucinaciones de relleno sin dato real**, (c) **Citas normativas inventadas o transjurisdiccionales**, y (d) **Cláusulas ambiguas no verificables**.
2. ¿Qué consecuencias técnicas, de seguridad o económicas tendría emitir el juego de planos PDF y memoria sin corregir las incidencias n.º 2 (PVC vs. libre de halógenos), n.º 4 (42 uds. $4.000\text{ K}$ IP54 vs. 48 uds. $3.000\text{ K}$ IP20) y n.º 5 ($2\ \Omega$ inventados sin dato de terreno)?
3. ¿Qué instrucciones de *grounding* y Lista Blanca Normativa habrían evitado que el asistente redactara las incidencias n.º 5, 6 y 8?
4. Ante la contradicción n.º 4 entre DIALux (48 uds. $3.000\text{ K}$ IP20) y la memoria (42 uds. $4.000\text{ K}$ IP54), ¿puede el LLM decidir cuál es correcta o cómo debe proceder el proyectista?

#### Tarea a realizar
En equipos de 3 a 4 personas (30 minutos de trabajo + 15 minutos de exposición), elaborad el **Paquete de Saneamiento Documental de `EXP_MIR_14`** que incluya:
1. **Matriz completa de diagnóstico** clasificando las 8 incidencias y definiendo la acción correctora exacta en el documento fuente (Memoria, Pliego, DIALux o Revit).
2. **Reescritura técnica depurada** de los apartados correspondientes a **Canalización**, **Iluminación `LOC-02`**, **Puesta a tierra** (aplicando correctamente `[DATO PENDIENTE DE CONFIRMAR]`) y **Cláusula de Pruebas en Pliego** (medible y sin citas inventadas).
3. **Lista Blanca Normativa acotada** que pasaría el equipo al asistente si tuviera que regenerar el resto de capítulos según un país de referencia explícitamente indicado (señalando verificación de edición vigente).

#### Posibles soluciones o criterios de análisis
Un diagnóstico y reescritura sólidos deberán contemplar:
- **Clasificación exacta:**
  - *Contradicciones interdocumentales:* #1 (potencia y número de cuadros), #2 (tipo de aislamiento de cable), #3 (tubo empotrado vs. bandeja perforada en falso techo) y #4 (n.º, temperatura de color e IP de luminarias entre memoria y DIALux).
  - *Alucinación de relleno sin dato:* #5 (inventar $2\ \Omega$ sin estudio de resistividad del terreno ni cálculo/medición de puesta a tierra).
  - *Citas normativas inventadas / mezcla de países:* #6 (`ITC-BT-55` inexistente) y #8 (`NFPA 101-L` de oficinas europeas).
  - *Cláusula ambigua no auditable:* #7 («excelente calidad» y «pruebas oportunas»).
- **Impacto real en obra:** especificar PVC en lugar de libre de halógenos en zonas que por reglamento requieren baja emisión de humos supone un defecto grave de seguridad frente a incendio y rechazo en inspección; licitar 42 luminarias IP54 frente a 48 IP20 calculadas en DIALux desajusta presupuesto, iluminancia real $E_m$ y uniformidad $U_0$; comprometer $2\ \Omega$ sin dato de terreno puede obligar a costosas redes de tierra no previstas.
- **Reescritura modelo de ejemplo:**
  - *Puesta a tierra:* «La instalación dispondrá de sistema de puesta a tierra acorde al esquema de conexión proyectado y al valor máximo que resulte exigible por tensión de contacto límite tras aplicar el reglamento vigente en la jurisdicción del proyecto. El diseño definitivo de electrodos y sección de línea principal queda sujeto a `[DATO PENDIENTE DE CONFIRMAR: MEDICIÓN/DATO DE RESISTIVIDAD DEL TERRENO Y CÁLCULO VERIFICADO]`».
  - *Pruebas en Pliego:* sustituir «pruebas oportunas» por verificación obligatoria previa a puesta en servicio de continuidad de conductores de protección, resistencia de aislamiento entre conductores activos y tierra, comprobación de sensibilidad y tiempo de disparo de protecciones diferenciales, impedancia de bucle y verificación de niveles lumínicos en puntos representativos conforme a los protocolos establecidos en la normativa vigente aplicable.
- **Resolución de #4:** el proyectista consulta el requerimiento del cliente/arquitectura (si pidió $4.000\text{ K}$ de trabajo neutro o $3.000\text{ K}$ cálido, confirmando que en oficina seca basta IP20 y no hace falta IP54), y alinea **ambos** entornos (recalcula DIALux si cambia modelo, actualiza familias en Revit y sincroniza finalmente memoria y pliego).

#### Preguntas de reflexión final
- ¿Cuántas horas de discusiones con obra o correcciones urgentes de última hora ahorra pasar 15 minutos haciendo un cruce tabular entre memoria, Revit y DIALux antes de imprimir los PDF?
- ¿Qué palabra o muletilla típica de ChatGPT/Claude has aprendido hoy a detectar al instante como señal de «relleno comercial sin rigor técnico»?

---

## 7. Evaluación

### Evaluación diagnóstica
- **Instrumento:** Actividad 1 (*Autopsia rápida de un pliego técnico alucinado*) durante los primeros 20 minutos.
- **Finalidad:** Comprobar la sensibilidad editorial inicial del alumnado para identificar ambigüedades contractuales, citas sospechosas e incoherencias constructivas antes de presentar el método de *grounding* y control editorial.

### Evaluación formativa
- **Instrumento:** Observación y corrección continua durante la **Actividad 2** (verificación de uso efectivo de `[DATO PENDIENTE]` y matriz de discrepancias) y el **Caso práctico** (*Edificio Mirador*), asegurando la erradicación total de citas normativas falsas y la reescritura medible de cláusulas de pliego.
- **Retroalimentación:** Revisión directa en pantalla de dos borradores depurados señalando cualquier vestigio de lenguaje ambiguo o dato sin fuente.

### Evaluación sumativa
Se articula en dos evidencias al cierre de la sesión:
1. **Cuestionario sumativo (6 ítems de análisis documental y control editorial, 10 minutos, 40 % de la nota):** evalúa diferenciación entre memoria y pliego, anclaje documental (*grounding*), uso de marcadores de laguna, revisión cruzada frente a Revit/DIALux y erradicación de alucinaciones normativas.
2. **Dossier documental del tema (60 % de la nota):** entrega de (a) borrador anclado y matriz de discrepancias (Actividad 2), (b) Paquete de Saneamiento del caso *Edificio Mirador* con reescrituras técnicas depuradas, y (c) Ficha Maestra + Checklist Editorial Pre-PDF personalizada (Actividad 3), evaluado según la rúbrica siguiente.

### Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
|---|---|---|---|---|
| **1. Estructura y separación entre Memoria y Pliego** | Mezcla descripciones generales, cálculos inventados y cláusulas de obra en un único texto repetitivo con prosa comercial vacía. | Diferencia parcialmente memoria y pliego, aunque conserva expresiones vagas o secciones fuera de lugar. | Estructura claramente memoria descriptiva y especificaciones técnicas diferenciando alcance, hipótesis y requisitos medibles de ejecución. | Logra además redacción concisa, homogénea y auditable en obra (`PASA / NO PASA`), sin relleno retórico ni ambigüedades. |
| **2. Anclaje documental (*grounding*) y control de lagunas** | Permite que el LLM rellene datos ausentes (secciones, resistencias de tierra, potencias) o invente marcas/parámetros. | Usa parcialmente datos del proyecto, pero deja escapar suposiciones menores o no marca claramente los datos faltantes. | Ancla la redacción a la Ficha Maestra anonimizada y fuerza etiquetas `[DATO PENDIENTE DE CONFIRMAR]` ante cualquier laguna. | Sistematiza una Ficha Maestra modular vinculada directamente a campos exportados de Revit y DIALux con trazabilidad completa. |
| **3. Detección de contradicciones entre Memoria y Planos/DIALux** | No detecta incompatibilidades evidentes de potencia, canalizaciones, tipo de cable o luminarias entre texto y tablas exportadas. | Identifica discrepancias numéricas obvias (p. ej. potencia total), pero omite incoherencias técnicas de aislamiento, IP, $K$ o sistemas de montaje. | Localiza las contradicciones y lagunas en la revisión cruzada y define la acción correctora del proyectista sobre el origen real. | Clasifica el impacto constructivo/normativo de cada discrepancia y establece control de versión sincronizado antes de imprimir PDF. |
| **4. Control editorial sobre citas normativas y lenguaje** | Mantiene citas legales inventadas o de otro país (`ITC-BT-55`, `NFPA` en Europa) y expresiones ambiguas («calidad adecuada»). | Elimina las citas obviamente falsas, pero conserva cláusulas genéricas («según buena práctica») o no explicita verificación de edición vigente. | Aplica Lista Blanca Normativa por jurisdicción, exige comprobación oficial de toda norma citada y redacta cláusulas técnicas verificables. | Realiza una auditoría editorial en 3 pasadas impecable, dejando cero citas sin verificar y cero marcadores pendientes sin registrar. |

### Actividad de autoevaluación
Reflexión breve individual al cierre de la sesión (3 minutos):
1. *De las tres pasadas editoriales (citas normativas, precisión medible, coherencia con planos/DIALux), ¿cuál tendía a saltarme más fácilmente antes de hoy?*
2. *¿Qué cláusula ambigua que suelo usar en mis pliegos o memorias he aprendido a sustituir por criterios objetivos verificables?*
3. *¿Tengo ya definida la Lista Blanca Normativa aplicable al país y tipo de edificio de mi proyecto integrador?*

---

## 8. Materiales y recursos

### Guion de diapositivas

- **Slide 1 — Portada y encuadre del Tema 4:** Título, posición en el programa (Tema 43 de 50; Bloque 6, 4/11), enlace desde los Criterios de Diseño del Tema 3 y aviso de responsabilidad profesional y vigencia normativa.
- **Slide 2 — Activación: autopsia de un pliego alucinado:** Fragmento de 12 líneas con errores reales de obra, cita falsa y contradicción constructiva; debate de impacto económico y legal.
- **Slide 3 — Arquitectura del expediente eléctrico (Bloque 4 + Bloque 6):** Roles estrictos de Memoria Descriptiva, Memoria de Cálculo/DIALux, Planos Revit MEP y Pliego de Especificaciones Técnicas.
- **Slide 4 — Técnica de *Grounding* y regla `[DATO PENDIENTE]`:** Cómo impedir el relleno silencioso de ChatGPT/Claude mediante Ficha Maestra anonimizada, Lista Blanca Normativa y generación modular.
- **Slide 5 — Revisión cruzada asistida (Memoria vs. Revit/DIALux):** Flujo práctico para detectar contradicciones de potencias, cuadros, bandejas vs. tubos, aislamientos y luminarias ($W$, $K$, $IP$, $UGR$) sin que la IA invente qué archivo manda.
- **Slide 6 — Control editorial en 3 pasadas:** (1) Auditoría de citas legales por país y edición vigente, (2) Erradicación de adjetivos ambiguos por magnitudes SI auditables, (3) Limpieza final de marcadores y retórica.
- **Slide 7 — Caso práctico *Edificio Mirador* (`EXP_MIR_14`):** Tabla de las 8 incidencias reales simuladas entre borrador IA, Revit y DIALux, y reto de saneamiento integral.
- **Slide 8 — Checklist Pre-PDF y puente al Tema 5:** Síntesis de control editorial antes de emitir láminas y avance del Tema 5 (*Asistencia con cálculos, fórmulas y procedimientos de diseño*).

### Ficha de trabajo
Documento de 2 páginas que incluye:
1. **Esquema comparativo de contenidos propios de Memoria Descriptiva vs. Pliego de Especificaciones Técnicas**.
2. **Plantilla de Prompt de Redacción Anclada + Prompt de Revisión Cruzada Interdocumental**.
3. **Lista de palabras prohibidas por ambigüedad** («adecuado», «oportuno», «primera calidad», «suficiente», «habitual») junto a su sustitución técnica verificable.

### Plantilla técnica práctica
**Plantilla 6.4 — Ficha Maestra de Grounding + Checklist Editorial Pre-PDF (`EXP_MIR_14` modelo)**

| Sección / Control | Contenido verificado o regla aplicada | Origen verificado | Estado editorial |
|---|---|---|---|
| **Lista Blanca Normativa (ejemplo a confirmar)** | *Solo citar normativa comprobada del país aplicable (p. ej. en España REBT RD 842/2002 vigente, CTE DB-HE 3 / DB-SUA 4 vigente, UNE-EN 12464-1 vigente — prohibido citar otras sin validación previa)* | *Comprobación directa técnico en fuente oficial* | `[VALIDADA PARA PROYECTO]` |
| **Datos Maestros Cuadros (Revit)** | *3 cuadros (`CGMP`, `CS-P1`, `CS-P2`), $400/230\text{ V}$ trifásico, demanda total verificada $112\text{ kW}$, reserva $+25\,\%$* | *Exportación `Revit_Panels_Anon.csv` + Hoja cálculo* | `[SINCRONIZADO]` |
| **Canalización y Cables** | *Bandeja perforada chapa en falso techo pasillos (fuerza + datos separados); cables baja emisión humos según reglamento local* | *`Revit_Conduits.csv` + Criterio Tema 3* | `[SINCRONIZADO]` |
| **Iluminación `LOC-02` (DIALux)** | *48 luminarias panel LED (definir $W$, $K$ e $IP$ exactos tras alinear criterio cliente-DIALux-Revit)* | *`DIALux_Locales.csv` + Acta criterio cliente* | `[PENDIENTE ALINEACIÓN FINAL]` |
| **Control 1: Cero marcadores `[`** | *Búsqueda global `Ctrl+F` de `[DATO PENDIENTE` y `[VERIFICAR` igual a 0 coincidencias* | *Revisión humana final de documento* | `[OBLIGATORIO PRE-PDF]` |
| **Control 2: Cero citas no verificadas** | *Cada código de ITC/IEC/UNE/EN/NFPA subrayado y comprobado en texto oficial vigente* | *Auditoría de Lista Blanca Normativa* | `[OBLIGATORIO PRE-PDF]` |

### Lecturas y recursos recomendados
> **Advertencia de validación obligatoria:** Antes de incorporar cualquier norma, guía de redacción de pliegos o plantilla en proyectos reales o docentes, deben comprobarse el **país y jurisdicción del proyecto**, la **edición vigente exacta de cada reglamento/norma**, y las **condiciones de privacidad vigentes del asistente IA utilizado**.

- **Normativa y guías de documentación técnica (ejemplos ilustrativos a verificar según país):**
  - *Reglamento Electrotécnico para Baja Tensión (REBT — RD 842/2002 e ITC-BT)* y normativa de edificación aplicable (p. ej. *CTE DB-HE 3* y *DB-SUA 4* en España), verificando siempre el listado real y vigente de instrucciones técnicas para evitar invenciones.
  - Serie *IEC 60364* y normas europeas aplicables a cables frente al fuego / productos de construcción (comprobar actualización y clasificación vigente, como clases CPR cuando aplique en la UE) y *UNE-EN 12464-1* vigente para iluminación interior.
  - Normativa nacional de contratación o visado técnico aplicable en el país del proyectista sobre contenido mínimo obligatorio de Memorias y Pliegos de Condiciones.
- **Recursos de ingeniería de contexto y calidad documental:**
  - Guías oficiales sobre *grounding* y reducción de alucinaciones mediante cita obligatoria de fuente en documentación técnica de **Anthropic (Claude)** y **OpenAI (ChatGPT)** *(validar fecha y versión)*.
  - Estándares orientativos de gestión documental en proyectos de construcción y BIM (p. ej. estructura documental de proyecto y control de calidad previa a emisión).

### Glosario de términos clave

| Término | Definición |
|---|---|
| **Alucinación de relleno** | Invención silenciosa de valores numéricos, materiales o requisitos técnicos por un LLM cuando la ficha de entrada omite algún dato del proyecto. |
| **Anclaje documental (*Grounding*)** | Técnica de consulta que obliga a la IA a redactar exclusivamente a partir de datos verificados suministrados por el técnico, prohibiendo suposiciones externas. |
| **Cláusula auditable** | Especificación técnica redactada con magnitudes físicas, ensayos y criterios de aceptación objetivos (`PASA / NO PASA`) comprobables durante la ejecución y recepción de obra. |
| **Contradicción interdocumental** | Discrepancia técnica o cuantitativa entre dos documentos del mismo proyecto (p. ej. potencia o tipo de cable distinto entre memoria, pliego, cálculos y planos Revit/DIALux). |
| **Control editorial técnico** | Auditoría humana sistemática previa a la emisión en PDF que verifica citas normativas, elimina ambigüedades lingüísticas, resuelve marcadores pendientes y confirma coherencia documental. |
| **Ficha Maestra de Proyecto** | Documento o tabla anonimizada de síntesis con todos los parámetros aprobados y verificados del encargo que actúa como fuente única para redactar borradores con IA. |
| **Lista blanca normativa** | Relación cerrada de reglamentos y normas vigentes comprobados por el proyectista para un país y edificio concretos, fuera de la cual el asistente tiene prohibido citar preceptos legales. |
| **Pliego de especificaciones técnicas** | Documento contractual-técnico que fija calidades mínimas medibles, normas de montaje, pruebas y criterios de recepción para materiales e instalaciones en obra. |

---

## 9. Adaptaciones

### Sesión presencial
- **Corrección editorial colectiva con rotulador rojo:** Entregar impreso el caso del *Edificio Mirador* (1 página de borrador sucio) junto a la tabla resumen de Revit/DIALux para que los equipos marquen físicamente en papel todas las contradicciones y citas inventadas antes de abrir el ordenador.
- **Demostración comparativa en proyector:** Mostrar en vivo la diferencia de resultado entre lanzar un prompt abierto («redacta memoria de oficinas») frente al mismo encargo con Ficha Maestra, Lista Blanca Normativa y regla `[DATO PENDIENTE]`.

### Sesión online síncrona
- **Edición colaborativa en directo:** En el Caso práctico, cada sala trabaja en una copia de documento compartido usando el modo «Sugerencias / Control de cambios» para reescribir las cláusulas defectuosas de `EXP_MIR_14`, permitiendo al formador revisar los comentarios en tiempo real.
- **Ronda relámpago de detección de ambigüedades:** Durante la Microexposición B, el alumnado pega en el chat la sustitución medible de 3 adjetivos vagos proyectados en pantalla.

### Sesión asíncrona
- **Guía grabada de revisión cruzada:** Vídeotutorial de 10 minutos mostrando cómo exportar las leyendas/tablas de canalizaciones y luminarias desde Revit y el resumen de DIALux para cruzarlos en ChatGPT/Claude contra un borrador de memoria en formato texto limpio.
- **Entrega evaluable en campus virtual:** Subida del paquete completo del caso *Edificio Mirador* (matriz de 8 incidencias + reescrituras limpias + Lista Blanca Normativa) y la *Checklist Editorial Pre-PDF* de la Actividad 3.
- **Revisión entre pares:** Cada alumno audita el borrador depurado de otro participante buscando específicamente si se coló alguna palabra ambigua o cita sin verificación jurisdiccional.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Da continuidad directa a la documentación de planos, detalles, especificaciones técnicas e impresión a PDF del **Bloque 4 (Documentación en Revit MEP)**, al criterio fotométrico del **Bloque 2 (DIALux)** y a los cuadros de criterios aprobados mediante matriz ponderada en el **Tema 3 del Bloque 6**.
- **Competencias que desarrolla:** Redacción técnica controlada por anclaje factual (*grounding*), auditoría interdocumental entre texto técnico y exportaciones BIM/DIALux, control editorial contra alucinaciones normativas y aseguramiento de calidad previa a emisión en PDF.
- **Conexión dentro del plan de 6 módulos / 50 temas:**
  - **Tema anterior:** **Tema 3 del Bloque 6: Generación y optimización de criterios de diseño mediante IA** (Tema 42 de 50), cuyos criterios técnicos seleccionados sirven aquí como entrada factual para construir la Ficha Maestra de la memoria descriptiva.
  - **Tema posterior:** Prepara el terreno para el **Tema 5 del Bloque 6: Asistencia con cálculos, fórmulas y procedimientos de diseño** (Tema 44 de 50), donde el alumnado abordará la parte más sensible de la documentación técnica —las memorias de cálculo eléctrico y lumínico— evitando confiar en la aritmética textual de los LLMs y construyendo hojas de cálculo auditables.
- **Evidencia de aprendizaje que dejará el alumnado:**
  1. Borrador modular anclado con `[DATO PENDIENTE]` y Matriz de Discrepancias resuelta (Actividad 2).
  2. Paquete de Saneamiento Documental del caso *Edificio Mirador* (`EXP_MIR_14`).
  3. Ficha Maestra + Checklist Editorial Pre-PDF adaptada a su proyecto real (Actividad 3).
  4. Cuestionario sumativo completado.

---

## Siguientes pasos para el formador

1. **Preparar el paquete `Act2_Memoria_Cruce.zip` y el borrador sucio del *Edificio Mirador*** comprobando que las discrepancias entre texto y CSV de Revit/DIALux son nítidas y totalmente libres de datos reales de clientes.
2. **Preparar una Lista Blanca Normativa ilustrativa por defecto** acorde al país de la cohorte (p. ej. REBT España o código nacional correspondiente), dejando siempre espacio editable para alumnado de otros países y recordando verificar edición vigente.
3. **Revisar en las entregas de la Actividad 3** que la *Checklist Editorial Pre-PDF* incluye explícitamente el control de búsqueda de `[DATO PENDIENTE]` y la comprobación de correspondencia exacta de códigos entre memoria, planos y DIALux.
4. **Conectar el cierre con el Tema 5** advirtiendo que el único capítulo de la memoria que nunca debe «redactarse libremente» con IA sin respaldo de hoja o software determinista es la memoria de cálculo, protagonista de la siguiente sesión.
