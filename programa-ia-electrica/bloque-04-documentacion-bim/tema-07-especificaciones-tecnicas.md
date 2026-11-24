# Tema 7. Especificaciones técnicas

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Tema 7. Especificaciones técnicas |
| **Bloque y posición dentro del programa** | Bloque 4: Documentación BIM — Tema 7 de 8 (Tema 28 de 50 en el programa de 6 módulos) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Cálculo eléctrico y cuadros de cargas (Bloque 1), resultados fotométricos en DIALux (Bloque 2), modelado eléctrico en Revit MEP (Bloque 3) y documentación de planos, símbolos y detalles (Bloque 4, Temas 1 a 6) |
| **Resultado general de aprendizaje** | Estructurar especificaciones técnicas profesionales de materiales, equipos, canalizaciones y pruebas de recepción a partir de tablas de planificación (*schedules*) de Revit MEP, conciliando con rigor documental modelo BIM, planos, cuadro de cargas, estudio lumínico y pliego de condiciones |

---

## 2. Objetivos de aprendizaje

Al finalizar este tema, el alumnado será capaz de:

1. **Reconocer** los apartados estructurales de un pliego de especificaciones técnicas eléctricas (generalidades, productos, ejecución y pruebas de recepción) y los principios de prescripción neutra por prestaciones. *(Nivel de Bloom: Recordar)*
2. **Diferenciar** el alcance técnico de las tablas de planificación (*schedules*) de Revit MEP frente a las memorias de cálculo eléctrico, los resultados fotométricos de DIALux y las condiciones contractuales del pliego. *(Nivel de Bloom: Comprender)*
3. **Configurar** tablas de planificación y tablas de claves (*Key Schedules*) en Revit MEP orientadas a extraer inventarios consistentes de cuadros, mecanismos, luminarias y canalizaciones hacia hojas de auditoría y especificaciones. *(Nivel de Bloom: Aplicar)*
4. **Detectar** contradicciones cruzadas entre el modelo BIM, los planos en lámina, el cuadro de cargas, los datos fotométricos `.ldt`/`.ies` y el pliego de condiciones —incluyendo marcas no justificadas, discrepancias de potencia o grados IP/IK erróneos—. *(Nivel de Bloom: Analizar)*
5. **Redactar** y auditar cláusulas técnicas de especificación y listas de ensayos de puesta en marcha apoyándose en ChatGPT o Claude bajo protocolos estrictos de anonimización, eliminación de referencias inventadas y validación por técnico competente. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Estructura profesional de las especificaciones técnicas de instalaciones eléctricas

#### Explicación breve y clara
Mientras los planos muestran *dónde* y *cómo se dispone* cada elemento en el edificio, las especificaciones técnicas (o pliego de prescripciones técnicas particulares) establecen **qué calidad debe tener, bajo qué norma se fabrica, cómo debe montarse en obra y con qué pruebas se aceptará**. Una especificación profesional no es un folleto comercial copiado de un fabricante ni una declaración genérica del tipo «todo cumplirá la normativa vigente». Se organiza de forma sistemática por capítulos técnicos (acometida y centros de transformación si aplica, cuadros de baja tensión, canalizaciones, cableado, mecanismos, alumbrado normal y de emergencia, puesta a tierra y pruebas de recepción) y sigue una estructura interna repetible en cuatro bloques: alcance, producto, ejecución y control/recepción. En proyectos públicos y licitaciones competitivas, resulta esencial redactar **especificaciones neutras basadas en prestaciones medibles** y normas técnicas, evitando imponer marcas cerradas salvo justificación objetiva de compatibilidad existente.

#### Conceptos clave
- **Arquitectura en cuatro bloques por partida:** Toda sección técnica debe cubrir: (1) *Alcance y documentos de referencia*, (2) *Características de productos y materiales* (parámetros eléctricos, IP/IK, clase térmica o reacción al fuego), (3) *Criterios de ejecución e instalación*, y (4) *Inspecciones, ensayos y documentación de recepción*.
- **Neutralidad técnica y criterio de equivalencia:** Redacción orientada a requisitos verificables (por ejemplo, corriente nominal `In`, poder de corte `Icu`, grado de protección `IP65` / `IK08`, eficacia luminosa y temperatura de color) acompañada de «o equivalente técnico aprobado» cuando corresponda legalmente.
- **Sistemas de clasificación estandarizados:** Organización coherente de partidas mediante estructuras de referencia del sector (por ejemplo, esquemas tipo *CSI MasterFormat División 26*, *Uniclass* o estructuras nacionales de pliegos oficiales según el país del contrato).
- **Plan de pruebas y puesta en marcha:** Definición explícita de ensayos previos a la recepción provisional (continuidad de conductores de protección, resistencia de aislamiento, resistencia de puesta a tierra, impedancia de bucle, disparo de diferenciales, termografía en cuadros y verificación luxométrica en obra).

#### Definiciones necesarias
- **Especificación por prestaciones (*Performance Specification*):** Prescripción técnica que define los resultados medibles, ensayos y requisitos funcionales que debe cumplir un equipo o sistema sin atar el proyecto a una referencia comercial única.
- **Pliego de prescripciones técnicas:** Documento contractual del proyecto que recoge las exigencias técnicas, de materiales, de ejecución, de control de calidad y de recepción que complementan y prevalecen en materia cualitativa junto a planos y mediciones.

#### Ejemplo práctico realista
En la licitación de un edificio administrativo público, el borrador inicial de pliego redactado por un técnico júnior incluye la cláusula: *«Los cuadros secundarios montarán interruptores automáticos marca Alpha-X serie Pro4, o similares, adecuados para la instalación»*. Esta redacción genera dos riesgos: impugnación por direccionamiento de marca sin justificación técnica y aceptación potencial en obra de un equipo barato de 4,5 kA de poder de corte alegando ser «similar». Al transformarla en una especificación profesional neutra, la cláusula pasa a redactarse así: *«Interruptor automático magnetotérmico tetrapolar (4P) modular en carril DIN, tensión asignada Ue = 400 V CA, frecuencia 50 Hz, corriente nominal In = 63 A, curva de disparo C, poder de corte último asignado Icu ≥ 15 kA a 400 V CA según norma aplicable de corte en baja tensión, poder de corte en servicio Ics ≥ 75 % Icu, aptitud para seccionamiento, con bloque de contactos auxiliares 1NA+1NC y dispositivo de enclavamiento por candado en posición abierto»*.

> *Nota obligatoria de verificación normativa:* Las clasificaciones de cables frente al fuego (por ejemplo, exigencias CPR en Europa o estándares UL/NFPA en América), los códigos de normas de ensayo (IEC, EN, UNE, IEEE, UL) y la obligatoriedad de neutralidad de marca en contratación pública varían según el país, reglamento eléctrico vigente y legislación de contratos aplicable. Deben verificarse siempre los códigos y ediciones vigentes antes de emitir el pliego.

#### Errores frecuentes
- Copiar y pegar fichas comerciales completas de fabricantes manteniendo nombres propios, códigos de catálogo exclusivos o características irrelevantes que impiden la concurrencia de alternativas equivalentes.
- Redactar cláusulas vacías como *«cableado reglamentario»* o *«iluminación de alta calidad»* sin especificar sección, tensión de aislamiento (`0,6/1 kV` o `450/750 V`), temperatura de color (`4.000 K`), IRC (`CRI ≥ 80`) o grados `IP`/`IK`.
- Omitir la sección de pruebas de recepción y entregas *as-built* (protocolos de medidas calibradas, esquemas finales y manuales de mantenimiento), dejando sin herramientas a la dirección de obra para exigir ensayos antes de firmar la recepción.
- Contradecir la especificación neutra incluyendo en las tablas del modelo BIM o en el diagrama unifilar referencias comerciales fijas de otro fabricante distinto.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué cuatro bloques mínimos debe contener cada apartado de un pliego de especificaciones técnicas eléctricas para resultar auditable en licitación y en obra?
2. ¿Por qué resulta técnicamente deficiente escribir *«marca X o similar»* sin detallar los parámetros eléctricos, mecánicos y de ensayo que definen la equivalencia real?
3. ¿Qué diferencia existe entre el contenido que corresponde a los planos, el que corresponde a las tablas de planificación y el que debe residir en el pliego de especificaciones?

---

### 3.2. Tablas de planificación (*Schedules*) extraídas de Revit MEP

#### Explicación breve y clara
En un flujo BIM ordenado, los listados de equipos, luminarias y canalizaciones del pliego de especificaciones no se redactan a mano en un procesador de texto independiente del proyecto: se fundamentan en **tablas de planificación (*Schedules*)** extraídas de Revit MEP. Categorías como *Electrical Equipment*, *Lighting Fixtures*, *Electrical Fixtures*, *Conduits*, *Cable Trays* y los *Panel Schedules* permiten agrupar por `Type Mark`, código de partida (`IE_Cod_Espec` o `Assembly Code`), contar unidades exactas y sumar longitudes de bandeja o tubo. Además, las **tablas de claves (*Key Schedules*)** agilizan enormemente el trabajo asignando de forma automática múltiples parámetros técnicos (material, grado IP, grado IK, acabado, código de especificación) al seleccionar una única clave de estilo por elemento. Sin embargo, es imprescindible conocer las **limitaciones reales de Revit**: los conductores dentro de tubos modelados no se miden automáticamente en longitud si solo se conectaron circuitos lógicos sin calcular reservas de acometida, y cualquier cálculo eléctrico dentro de una tabla de planificación (*Calculated Value*) requiere contraste externo independiente.

#### Conceptos clave
- **Tablas por categoría y *Multi-Category Schedules*:** Extracción parametrizada de cuadros eléctricos, luminarias, mecanismos, tubos y bandejas agrupados por código de tipo (`Type Mark`) para eliminar duplicidades y cuantificar partidas reales.
- **Tablas de claves (*Key Schedules*):** Tablas auxiliares de estandarización donde cada clave (p. ej. `CAN-BPG-300` para bandeja perforada galvanizada de 300 mm) rellena automáticamente en los elementos asignados sus parámetros descriptivos y de especificación.
- **Limpieza previa a la exportación (CSV / Excel):** Uso de casillas *Itemize every instance* (desactivada para agrupar resúmenes de especificaciones/mediciones; activada para auditoría individual de errores) y filtros de tabla para detectar elementos sin `Type Mark` o sin código de especificación.
- **Limitaciones cuantitativas del modelo MEP:** Diferencia entre elementos geométricos medibles directamente en tablas (número de luminarias, metros de bandeja recta) y elementos que requieren factor de desperdicio, curvas/accesorios o cálculo eléctrico externo (longitud real de cableado en verticales, reservas de conexionado en bornes, caída de tensión y protecciones).

#### Definiciones necesarias
- **Tabla de planificación (*Schedule*):** Vista tabular dinámica de Revit vinculada bidireccionalmente al modelo BIM que consulta, filtra, agrupa y muestra propiedades de instancia y de tipo de los componentes del proyecto.
- ***Type Mark* / Código de Especificación:** Identificador alfanumérico único asignado a cada tipo de equipo, luminaria o canalización (por ejemplo, `LUM-01`, `CGBT`, `BDJ-02`) que actúa como llave de enlace entre plano, modelo, tabla y pliego técnico.

#### Ejemplo práctico realista
En un edificio de oficinas de 1.850 m², el coordinador BIM prepara tres *Schedules* maestros en Revit MEP antes de redactar las especificaciones finales:
1. **Tabla de luminarias (`TAB-EL-LUM`):** Agrupada por `Type Mark` con columnas `IE_Cod_Espec`, `Descripción Neutra`, `Potencia (W)`, `Flujo (lm)`, `Temperatura Color (K)`, `IRC`, `IP/IK`, `Count` (Cantidad). Muestra `LUM-01` (panel LED empotrado 34 W, 4.000 lm, 4.000 K, CRI ≥ 80, UGR ≤ 19, IP40/IK04): 182 unidades; `LUM-02` (estanca IP65 42 W): 38 unidades; `LUM-EM-01` (emergencia 1 h / 200 lm): 46 unidades.
2. **Tabla de bandejas portacables (`TAB-EL-BDJ`):** Agrupada por `Key Schedule` (`IE_Clave_Bandeja`) + dimensiones nominales: 420,5 m de bandeja perforada de acero galvanizado Sendzimir de 300 × 60 mm y 185,0 m de bandeja de rejilla electrocincada de 200 × 60 mm en falso techo.
3. **Tabla de auditoría *Itemize every instance* (`QA-EL-SIN-COD`):** Filtrada por `IE_Cod_Espec` *has no value*, que revela 6 luminarias decorativas de recepción añadidas a última hora sin codificar ni vincular al pliego.

Al exportar las tablas limpias a CSV, el ingeniero de mediciones añade las consideraciones de accesorios y desperdicios en bandejas y contrasta las potencias totales de luminarias frente al cálculo en DIALux y el cuadro de cargas.

#### Errores frecuentes
- Dejar elementos de mobiliario o familias de prueba dentro de las categorías eléctricas sin filtrar, inflando las cantidades de las tablas de planificación.
- Asumir que la longitud de cable mostrada por defecto en el circuito lógico de Revit (calculada muchas veces en ángulo recto aproximado *Manhattan* entre puntos sin entrar correctamente por cada bandeja o reserva en cuadro) constituye una medición definitiva o un cálculo reglamentario de caída de tensión.
- No asignar un `Type Mark` único a cada variante técnica (por ejemplo, llamar `L1` tanto a la luminaria normal como a la versión con kit de emergencia de 1 h), mezclando equipos distintos en la misma línea de especificación.
- Modificar manualmente cantidades o potencias en un archivo Excel exportado sin corregir la fuente en el modelo Revit ni en el cuadro de cargas, rompiendo la trazabilidad en la siguiente entrega.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué ventaja ofrece utilizar una *Key Schedule* en Revit MEP para vincular el modelo 3D con los textos de especificación técnica de bandejas o mecanismos?
2. ¿Por qué conviene mantener dos variantes de tabla de planificación (una agrupada por `Type Mark` para el proyecto y otra con *Itemize every instance* filtrando vacíos para auditoría)?
3. ¿Por qué no debe aceptarse sin comprobación externa la longitud de circuito o los cálculos mostrados en un *Panel Schedule* de Revit como sustituto de una memoria de cálculo normativo?

---

### 3.3. Conciliación estricta entre modelo BIM, planos, cuadro de cargas, DIALux y pliego de condiciones

#### Explicación breve y clara
La calidad técnica de un proyecto eléctrico no se mide por lo vistoso que resulte el modelo 3D, sino por la **ausencia de contradicciones entre sus entregables**. En la práctica real de ingeniería, un proyecto suele distribuirse entre cinco documentos vivos: (1) memoria y cuadro de cargas / diagrama unifilar, (2) estudio fotométrico en DIALux (con sus archivos `.ldt` / `.ies`), (3) modelo tridimensional en Revit MEP, (4) planos y detalles en PDF, y (5) pliego de especificaciones técnicas y mediciones. Cuando durante la fase de diseño se cambia una luminaria de 40 W a 34 W en DIALux o se modifica el grado IP de una zona húmeda en el pliego sin propagar el cambio, surgen incompatibilidades que derivan en modificados de obra, sobrecostes o rechazo en inspección. Establecer una **matriz de conciliación cruzada** basada en códigos únicos (`Type Mark` / Código de Circuito / Código de Cuadro) permite auditar de forma sistemática la correspondencia exacta antes de firmar o licitar.

#### Conceptos clave
- **Matriz de trazabilidad cruzada:** Tabla de auditoría que cruza cada elemento eléctrico crítico por su código único frente a sus cinco fuentes: *Cuadro de Cargas/Unifilar*, *DIALux*, *Revit Schedule*, *Planos/Detalles* y *Pliego de Especificaciones*.
- **Conciliación eléctrico–fotométrica:** Comprobación de que la potencia activa (W), factor de potencia, flujo luminoso, temperatura de color, grado IP y número exacto de luminarias en DIALux coinciden al 100 % con las familias de Revit y con las líneas de alumbrado del cuadro de cargas.
- **Conciliación constructivo–documental:** Verificación de que los diámetros de tubos, tipos de aislamiento/cubierta de cable, secciones de tierra y grados IP/IK anotados en detalles 2D y leyendas coinciden exactamente con los artículos del pliego de especificaciones.
- **Independencia frente a la representación visual:** Recordatorio operativo de que ni un modelo Revit sin colisiones ni un render fotorrealista validan el cumplimiento reglamentario; la conciliación comprueba coherencia documental mientras la ingeniería verifica el cálculo normativo.

#### Definiciones necesarias
- **Conciliación documental BIM (*Model-to-Spec Reconciliation*):** Proceso sistemático de verificación cruzada orientado a garantizar que parámetros geométricos, eléctricos, fotométricos y textuales coinciden sin discrepancias entre modelo, planos, cálculos y pliego.
- **Discrepancia crítica de proyecto:** Contradicción entre dos documentos contractuales del mismo proyecto (por ejemplo, diferente calibre de protección entre unifilar y cuadro de cargas, o distinto diámetro de tubo entre detalle 2D y especificación) capaz de alterar el presupuesto, la seguridad o la legalización.

#### Ejemplo práctico realista
Durante la auditoría previa a entrega de una clínica ambulatoria (1.200 m²), la ingeniera responsable cruza los cinco documentos maestros y detecta cuatro contradicciones ocultas:
1. **Discrepancia DIALux vs. Revit/Unifilar:** El estudio de DIALux fue optimizado cambiando la luminaria `LUM-A` de 40 W a una versión de alta eficiencia de 32 W (`3.840 lm`, `4.000 K`, `IP44` en zonas húmedas), pero Revit seguía cargando la familia inicial con `Apparent Load = 40 VA` en 84 unidades (diferencia de 672 W y cambio de `IP20` a `IP44` no reflejado en la tabla de especificaciones).
2. **Discrepancia Detalle 2D vs. Pliego:** La *Drafting View* de acometida indicaba «tubo PVC rígido Ø 110 mm», mientras el pliego prescribía «tubo corrugado doble pared PEAD Ø 160 mm conforme a especificación enterrada».
3. **Discrepancia Pliego vs. Zona de pública concurrencia:** Un borrador de pliego citaba cables convencionales de PVC en falsos techos de sala de espera cuando la memoria de cálculo y el unifilar prescribían cables libres de halógenos de alta seguridad frente al incendio (a verificar según el reglamento vigente aplicable).
4. **Discrepancia Cuadro de cargas vs. Revit Panel Schedule:** El subcuadro `CS-P1` mostraba en Revit 18 circuitos activos y en el diagrama unifilar externo 20 circuitos (faltaban dos tomas de climatización exterior que nunca se modelaron ni conectaron en Revit).

Aplicando la matriz de conciliación, se fija la versión validada de cálculo y DIALux como origen maestro, se actualizan los parámetros de tipo en Revit, se corrige el detalle 2D y se alinea el texto del pliego antes de imprimir.

#### Errores frecuentes
- Dar por buena la conciliación revisando únicamente si las cantidades totales (`Count`) coinciden entre plano y presupuesto, ignorando discrepancias cualitativas críticas (grado IP, curva de protección, poder de corte `Icu`, clase frente al fuego o temperatura de color `K`).
- Editar manualmente un *Panel Schedule* convertido en imagen o texto estático o un unifilar CAD sin reflejar las modificaciones en el modelo BIM ni en el pliego.
- Cambiar de luminaria o modificar el factor de mantenimiento en DIALux al final del proyecto sin reexportar la lista actualizada al proyectista de Revit y al redactor de especificaciones.
- No designar una jerarquía documental clara de validación (memoria de cálculo eléctrico y estudio DIALux verificados mandan sobre familias genéricas descargadas de internet).

#### Preguntas que el alumnado debería poder responder
1. ¿Qué cinco documentos deben cruzarse sistemáticamente durante la conciliación final de un proyecto eléctrico BIM antes de pasar a impresión PDF?
2. ¿Qué ocurre en obra y en la certificación económica si cambia la potencia o el grado IP de una luminaria en DIALux y no se actualiza la familia de Revit ni el pliego de especificaciones?
3. ¿Por qué un modelo BIM visualmente limpio y con tablas de planificación completas puede seguir teniendo discrepancias graves respecto al cuadro de cargas o a la normativa aplicable?

---

### 3.4. Uso de ChatGPT y Claude para redactar, estructurar y auditar pliegos técnicos con control humano

#### Explicación breve y clara
Redactar y revisar decenas de páginas de especificaciones técnicas desde cero consume gran cantidad de horas propensas a fatiga y omisiones. ChatGPT y Claude son herramientas muy eficaces como asistentes de redacción y auditoría estructural si se alimentan con **tablas exportadas de Revit en CSV anonimizado** y **especificaciones base verificadas por el técnico**. Pueden transformar parámetros tabulares (`Type Mark`, tensión, intensidad, IP/IK, flujo luminoso, tipo de canalización) en cláusulas ordenadas bajo la estructura Producto / Ejecución / Pruebas de recepción, homogeneizar el tono técnico neutro sin marcas comerciales, y actuar como revisores críticos (*red-teaming*) comparando dos fragmentos anonimizados para señalar lagunas en ensayos de puesta en marcha o redacciones ambiguas. No obstante, los modelos de lenguaje **alucinan frecuentemente códigos concretos de normas (números de UNE, IEC, ITC o artículos del NEC)** y ediciones desactualizadas: toda referencia normativa y todo valor numérico eléctrico debe ser introducido y verificado de forma independiente por el ingeniero competente.

#### Conceptos clave
- **Generación controlada desde CSV anonimizado:** Entrega al asistente únicamente de tablas técnicas sin nombres de cliente, ubicación, presupuesto confidencial ni secretos industriales, exigiendo formato de salida estructurado en los cuatro bloques de especificación.
- **Auditoría cruzada (*Red-teaming* documental):** Uso de la IA para detectar frases subjetivas («calidad superior», «adecuado a su uso»), posibles marcas encubiertas, ausencia de tolerancias o pruebas de recepción faltantes en un borrador redactado por el equipo.
- **Cláusula estricta anti-alucinación normativa:** Instrucción explícita en el *prompt* ordenando a la IA que **no invente códigos de normas ni ediciones** y que deje marcado `[VERIFICAR NORMA Y EDICIÓN VIGENTE POR TÉCNICO]` allí donde no se le haya facilitado el código exacto.
- **Validación humana obligatoria (*Human-in-the-loop*):** Responsabilidad exclusiva del profesional competente para validar cada calibre, poder de corte, clase de reacción al fuego, referencia normativa y criterio de aceptación antes de incorporar el texto al pliego oficial.

#### Definiciones necesarias
- **Alucinación normativa en IA:** Generación plausible pero falsa o desactualizada de números de normas técnicas, artículos reglamentarios, tablas de intensidades admisibles o parámetros de ensayo por parte de un modelo de lenguaje.
- **Especificación auditada por técnico competente:** Documento técnico cuyo texto preliminar pudo apoyarse en una herramienta de IA, pero cuya exactitud de magnitudes, normas vigentes, neutralidad y correspondencia con cálculos y modelo BIM ha sido comprobada y asumida por un profesional cualificado.

#### Ejemplo práctico realista
Un ingeniero eléctrico necesita redactar 6 apartados del pliego de especificaciones de un edificio terciario a partir del CSV exportado de sus tablas de planificación de Revit (bandejas metálicas, luminarias LED interiores, alumbrado de emergencia, cuadros secundarios, mecanismos y puesta a tierra). Anonimiza el encabezado eliminando el nombre del promotor y ciudad, y proporciona a Claude una tabla CSV limpia con los parámetros reales aprobados junto con este *prompt*: *«Redacta la especificación técnica neutra de estas 6 partidas dividida en: 1. Alcance, 2. Producto (prestaciones medibles sin marcas), 3. Ejecución y 4. Pruebas de recepción. No inventes ni cites códigos concretos de normas UNE/IEC/REBT salvo los indicados por mí; en su lugar escribe [VERIFICAR CÓDIGO NORMATIVO VIGENTE].»*
La IA devuelve en segundos seis cláusulas claras y homogéneas, pero en la revisión humana el ingeniero detecta dos errores graves: (a) en la partida de alumbrado de emergencia la IA asumió «autonomía mínima 2 horas» cuando el diseño en DIALux y cuadro exige «1 hora / 150 lm», y (b) en la partida de cuadros omitió la prueba de par de apriete en embarrados y ensayo de disparo de diferenciales. El técnico corrige ambos puntos, completa las referencias reglamentarias verificadas de la jurisdicción aplicable y concilia el texto con el modelo BIM.

#### Errores frecuentes
- Pedir a ChatGPT o Claude «escríbeme el pliego completo según el reglamento vigente» sin aportar datos del proyecto, generando textos genéricos llenos de normas derogadas o mezclando reglamentos de distintos países (por ejemplo, citar NFPA junto a ITC-BT españolas en un mismo párrafo).
- Subir el pliego confidencial completo del cliente, el presupuesto con precios unitarios reales o los planos con datos de seguridad a una cuenta gratuita de IA.
- No revisar los cambios sutiles de unidades o valores por defecto que introduce la IA (cambiar `400 V` por `380 V`, cambiar `IP65` por `IP54`, o inventar grados `IK10` innecesarios que encarecen la licitación).
- Dar por cerrada la conciliación porque «la IA dijo que el texto es coherente», sin contrastar manualmente los valores frente a las tablas de Revit, el unifilar y DIALux.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué es obligatorio incluir una regla anti-alucinación sobre códigos normativos al solicitar borradores de especificaciones técnicas a ChatGPT o Claude?
2. ¿Qué tipo de errores de redacción e incoherencias detecta bien una IA al auditar un pliego en texto plano, y qué comprobaciones **no** puede garantizar sin intervención del ingeniero?
3. ¿Qué datos del proyecto deben excluirse siempre al preparar un archivo CSV de Revit para trabajar con asistentes de IA externos?

---

## 4. Metodología didáctica

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
|---|---:|---|---|
| **1. Apertura y activación** | 20 min | Presenta dos fragmentos de pliego real anonimizados: uno lleno de marcas comerciales y frases ambiguas («cable reglamentario de primera marca») y otro neutro por prestaciones. Lanza la Actividad 1. | Analiza ambos fragmentos en parejas, señala riesgos legales/técnicos de la redacción vaga o sesgada y propone qué parámetros medibles faltan. |
| **2. Exposición guiada / Microlearning I** | 35 min | Explica la estructura en 4 bloques de un pliego técnico, criterios de neutralidad y demuestra en Revit MEP la extracción limpia de *Schedules* y *Key Schedules* hacia CSV. | Identifica qué campos deben vivir en el modelo Revit para alimentar el pliego, reconoce limitaciones de medición de conductores y toma notas prácticas. |
| **3. Análisis de caso práctico** | 45 min | Presenta el caso *Centro Tecnológico Alborán — Licitación con Contradicciones Cruzadas* con extractos reales de DIALux, Revit, unifilar y pliego; guía equipos de 3-4 personas. | Cruza las cinco fuentes del proyecto usando la matriz de trazabilidad, lista todas las discrepancias ocultas y define cuál fuente manda y cómo propagar correcciones. |
| **4. Exposición guiada / Microlearning II** | 30 min | Expone la metodología formal de conciliación BIM–DIALux–Cuadro de Cargas–Pliego y realiza una demostración segura en directo con IA (CSV anonimizado + *prompt* con cláusula anti-alucinación). | Audita en vivo la salida proyectada de la IA detectando parámetros alterados, referencias inventadas o pruebas de recepción omitidas. |
| **5. Taller práctico de aplicación y transferencia** | 65 min | Coordina la Actividad 2 (25 min: diseñar la estructura de *Schedule* / *Key Schedule* y matriz de conciliación sobre datos dados) y la Actividad 3 (40 min: redactar 3 partidas neutras de su proyecto apoyándose en IA bajo auditoría humana). | Construye tablas de conciliación y claves de especificación, redacta el *prompt* anonimizado, corrige los fallos de la salida generada y valida coherencia total. |
| **6. Discusión guiada y puesta en común** | 25 min | Selecciona 3 equipos para leer una especificación neutra redactada y explicar qué errores detectaron tanto en el modelo como en la IA. | Debate criterios de equivalencia técnica sin marcas injustificadas, verifica suficiencia de las pruebas de recepción y ajusta sus propias cláusulas. |
| **7. Síntesis, evaluación sumativa y cierre** | 20 min | Sintetiza el principio de Fuente Única de Verdad y conciliación documental, aplica el test sumativo y abre paso al Tema 8 (Impresión a PDF y QA final de entrega). | Completa el cuestionario breve de evaluación, ejecuta su checklist de autoevaluación y registra tareas pendientes de conciliación en su proyecto. |
| **TOTAL** | **240 min** | | |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «Detector de trampas y ambigüedades en un pliego de licitación»

- **Objetivo:** Sensibilizar al alumnado sobre los riesgos contractuales, económicos y de seguridad provocados por pliegos sesgados a marcas comerciales o redactados con generalidades vacías.
- **Instrucciones para el alumnado:**
  1. Leed individualmente (7 minutos) cuatro cláusulas breves de un pliego eléctrico borrador (cuadro de protección, luminaria LED de oficina, bandeja portacables y prueba de puesta a tierra).
  2. Marcado en pareja (6 minutos): subrayad toda prescripción de marca sin justificación, toda frase vacía («calidad superior», «según normativa») y toda magnitud eléctrica faltante para poder ofertar o instalar en obra.
  3. En plenario (7 minutos), clasificad cuál de las 4 cláusulas provocaría el mayor sobrecoste o litigio durante la obra.
- **Materiales necesarios:** Hoja con las 4 cláusulas borrador y plantilla rápida de marcado de defectos.
- **Tiempo estimado:** 20 minutos (Fase 1).
- **Rol del formador:** Evitar discusiones sobre preferencias personales de fabricantes y centrar el debate en parámetros técnicos objetivos, verificabilidad en obra y principio de neutralidad.
- **Producto o entregable esperado:** Diagnóstico escrito de defectos en las 4 cláusulas junto con el listado de parámetros medibles ausentes en cada una.
- **Criterios de éxito:** El alumnado detecta al menos el 80 % de los sesgos de marca y vacíos cuantitativos y distingue qué información corresponde al pliego frente al plano.

### Actividad 2 (Aplicación técnica): «Diseño de *Key Schedule* y conciliación cruzada de 5 documentos»

- **Objetivo:** Configurar la estructura de parámetros de una tabla de planificación (*Schedule* / *Key Schedule*) en Revit MEP y ejecutar una auditoría de conciliación cruzada entre DIALux, modelo BIM, planos, unifilar y pliego.
- **Instrucciones para el alumnado:**
  1. En parejas (25 minutos), revisad el mini-paquete de datos suministrado (resumen de 3 luminarias en DIALux, extracto CSV de tabla de Revit, un detalle 2D de canalización y un extracto del cuadro de cargas).
  2. Diseñad las columnas y campos de agrupación necesarios para una *Key Schedule* de canalizaciones (`CAN-01`, `CAN-02`) y una tabla de luminarias (`LUM-01` a `LUM-03`) en Revit MEP que aseguren trazabilidad hacia el pliego.
  3. Completad la **Matriz de Conciliación Cruzada** identificando las 4 contradicciones ocultas entre los documentos entregados y anotando la acción correctora exacta en cada archivo.
- **Materiales necesarios:** Extracto CSV/tabla de prácticas, resumen fotométrico simulado de DIALux, ficha de unifilar y plantilla de Matriz de Conciliación.
- **Tiempo estimado:** 25 minutos (primera parte de la Fase 5).
- **Rol del formador:** Orientar la diferencia entre parámetro de instancia y parámetro de tipo en las tablas, recordar las limitaciones de Revit para medir longitudes reales de cableado interno y exigir trazabilidad desde la fuente calculada válida.
- **Producto o entregable esperado:** Esquema completo de *Schedule* + Matriz de Conciliación con las 4 discrepancias resueltas de forma coherente.
- **Criterios de éxito:** Diseño correcto de claves únicas (`Type Mark`), detección exacta de las discrepancias (potencia, IP, diámetro de tubo y circuitos faltantes) y secuencia lógica de corrección sin dejar fuentes desincronizadas.

### Actividad 3 (Transferencia a proyecto real): «Redacción y auditoría asistida por IA de 3 especificaciones técnicas neutras»

- **Objetivo:** Aplicar un flujo profesional y seguro con ChatGPT o Claude para transformar datos exportados de tablas BIM en especificaciones técnicas neutras listas para licitación y someterlas a validación técnica independiente.
- **Instrucciones para el alumnado:**
  1. Seleccionad 3 partidas reales de vuestro proyecto (por ejemplo: 1 tipo de luminaria del estudio DIALux, 1 familia de cuadros/protecciones y 1 sistema de canalización/bandeja o puesta a tierra).
  2. Construid una micro-tabla técnica en formato CSV o tabla Markdown **completamente anonimizada** con los parámetros verificados por vosotros (magnitudes SI, grados IP/IK, flujo, temperatura de color, poder de corte, condiciones de instalación).
  3. Diseñad un *prompt* con el formato de 4 bloques (Alcance, Producto, Ejecución, Pruebas y Recepción), exigiendo redacción neutra sin marcas comerciales y prohibiendo explícitamente inventar códigos normativos.
  4. Analizad la salida de la IA: señalad por escrito al menos 2 correcciones, ampliaciones o verificaciones normativas realizadas por vosotros (por ejemplo, añadir tolerancias, ajustar parámetros de ensayo o eliminar términos imprecisos) y documentadlo en la **Plantilla de Especificación y Conciliación** (Sección 8).
- **Materiales necesarios:** Plantilla de Especificación y Conciliación (Sección 8), datos técnicos del proyecto propio y acceso seguro a ChatGPT/Claude (o respuesta simulada impresa para auditar en entornos sin conexión).
- **Tiempo estimado:** 40 minutos (segunda parte de la Fase 5) + 25 minutos de revisión conjunta en la Fase 6.
- **Rol del formador:** Supervisar que ningún dato confidencial entre en el *prompt*, cuestionar cualquier término comercial que sobreviva y comprobar que las pruebas de recepción de cada partida son concretas y medibles en obra.
- **Producto o entregable esperado:** Dossier con tabla fuente anonimizada, *prompt* empleado, 3 especificaciones técnicas neutras auditadas y registro de correcciones humanas aplicadas sobre la salida de la IA.
- **Criterios de éxito:** Especificaciones completas en 4 bloques sin marcas injustificadas, coherencia exacta de magnitudes con el modelo/DIALux/unifilar, cláusula explícita de verificación de normas vigentes y auditoría humana crítica demostrada.

---

## 6. Caso práctico

### Centro Tecnológico Alborán — Licitación pública paralizada por contradicciones entre modelo BIM, DIALux y pliego

#### Contexto empresarial
**Ingeniería Meridiano Eléctrica, S.L.** (14 técnicos) finalizó el proyecto de ejecución para la rehabilitación energética y nuevas instalaciones de baja tensión de un centro tecnológico público (**2.600 m²**, presupuesto estimado de ejecución material eléctrica de **410.000 €**). El expediente debe salir a licitación pública abierta, lo cual exige neutralidad estricta frente a fabricantes y coherencia documental total entre memoria, cuadro de cargas/unifilares, estudio lumínico en DIALux, modelo Revit MEP, planos en PDF y Pliego de Prescripciones Técnicas Particulares (PPTP).

#### Situación o problema
Durante la supervisión técnica de la administración contratante previa a la publicación del concurso, el técnico revisor devuelve el expediente con **cuatro no conformidades graves** que bloquean la licitación:
1. **Direccionamiento indebido de marca:** El PPTP especifica para los 6 cuadros secundarios: *«Interruptores automáticos y diferenciales de la serie MasterSafe-Z de ElectroCorp o equivalente exacto en dimensiones de envolvente»*, lo cual excluye a otros fabricantes sin justificación de compatibilidad preexistente.
2. **Desfase eléctrico–lumínico:** El estudio de DIALux validado incluye 130 pantallas LED empotradas `LUM-03` de **30 W / 3.900 lm / 4.000 K / UGR ≤ 19 / IP40**; sin embargo, la tabla de planificación extraída del modelo Revit muestra `LUM-03` con **42 W / 3.400 lm / 3.000 K**, mientras el cuadro de cargas externo suma circuitos calculados para **36 W** por unidad.
3. **Contradicción de seguridad en cables y bandejas:** Los planos de detalles y el PPTP hablan de bandejas perforadas de chapa galvanizada y cables convencionales de cubierta PVC `0,6/1 kV` en falso techo de pasillos y aulas de formación, cuando la memoria descriptiva y el diagrama unifilar prescriben cableado libre de halógenos de alta seguridad frente al fuego conforme a las condiciones de local de pública concurrencia (a verificar según reglamento aplicable vigente).
4. **Falta de criterios de pruebas y uso sin control de IA:** El capítulo de pruebas de recepción del PPTP fue redactado directamente por un becario copiando un chat de IA sin revisar: cita dos artículos de una norma extranjera inaplicable en el país, omite las mediciones obligatorias de aislamiento, impedancia de bucle y verificación luxométrica in situ, y contiene la frase ambigua *«la empresa probará todo a satisfacción del cliente»*.

#### Datos disponibles

| Área / Partida | Cuadro de Cargas / Unifilar | Estudio DIALux (`.ldt`/`.ies`) | Modelo Revit MEP (*Schedules*) | Planos PDF y PPTP (Pliego actual) |
|---|---|---|---|---|
| **Cuadros secundarios (`CS-01` a `CS-06`)** | 4P 63 A curva C, `Icu = 15 kA`, diferencial clase A 30 mA / 300 mA selectivo | N/A | Familias genéricas sin parámetro `Icu` ni clase diferencial | Cita marca comercial «MasterSafe-Z» y excluye alternativas equivalentes |
| **Luminaria `LUM-03` (130 uds.)** | 36 W/ud (4.680 W totales en líneas) | **30 W**, 3.900 lm, 4.000 K, UGR ≤ 19, IP40 *(aprobado)* | **42 W**, 3.400 lm, 3.000 K, IP20 *(familia desactualizada)* | PPTP indica «luminaria LED 40 W» copiando texto del modelo desfasado |
| **Cableado de distribución** | Cables alta seguridad libres de halógenos según uso público | N/A | Parámetro de circuito genérico sin tipo de aislamiento/reacción al fuego | Detalle 2D y PPTP indican «cable PVC estándar 0,6/1 kV» |
| **Pruebas y recepción** | Cita inspección inicial y medidas reglamentarias | Requiere contraste con luxómetro tras montaje | No aplica en geometría 3D | Texto copiado de IA con norma de otro país y sin magnitudes ni ensayos concretos |

#### Preguntas de análisis
1. ¿Cuál de las fuentes técnicas debe actuar como referencia maestra para corregir la partida `LUM-03`, y qué pasos concretos deben darse en Revit, cuadro de cargas, planos y PPTP para restablecer la conciliación?
2. ¿Cómo debe reformularse la especificación de aparamenta de cuadros (`CS-01` a `CS-06`) para garantizar neutralidad en licitación pública manteniendo intactos los requisitos técnicos y de seguridad?
3. ¿Por qué la contradicción entre cable PVC y cable libre de halógenos entre el unifilar y el detalle/PPTP supone un riesgo crítico de legalización y seguridad en un centro docente/tecnológico?
4. ¿Qué fallos concretos produjo el uso acrítico de la IA en el capítulo de pruebas de recepción y cómo debería reestructurarse con verificación humana?

#### Tarea a realizar
En equipos de 3-4 personas (30 minutos de trabajo + 15 de puesta en común), elaborad el **Acta de Conciliación y Corrección del PPTP** para Ingeniería Meridiano Eléctrica que contenga:
1. Tabla de decisión de conciliación indicando qué valores se fijan como definitivos para las 4 áreas problemáticas y qué archivos deben actualizarse en orden secuencial.
2. Redacción neutra completa (en 4 bloques: Alcance, Producto, Ejecución, Pruebas) de la especificación corregida para los cuadros secundarios o para la luminaria `LUM-03`.
3. Estructura de campos a añadir o corregir en los *Schedules* de Revit MEP (`TAB-EL-LUM` y `TAB-EL-CUADROS`) para que la próxima exportación a Excel/PPTP no vuelva a perder atributos críticos (`Icu`, clase diferencial, IP, lm, K, reacción al fuego).
4. Protocolo definitivo de pruebas de recepción cuantificables (eléctricas y lumínicas) con advertencia explícita de verificación del reglamento nacional vigente.

#### Posibles soluciones o criterios de análisis
- **Fuente maestra y secuencia de corrección:** En alumbrado (`LUM-03`), prevalece el estudio fotométrico aprobado en DIALux (**30 W, 3.900 lm, 4.000 K, UGR ≤ 19, IP40**); primero se actualiza la familia y el `Schedule` en Revit MEP, luego se recalcula el cuadro de cargas y unifilar con 30 W (3.900 W totales en lugar de 4.680 W — comprobando si protecciones y secciones siguen cumpliendo o permiten optimización validada por el ingeniero), y finalmente se corrige el PPTP y etiquetas en PDF.
- **Especificación neutra de aparamenta:** Eliminar toda referencia a «MasterSafe-Z» o dimensiones exclusivas de una envolvente propietaria; especificar prestaciones eléctricas medibles (`Ue = 400 V`, `In`, curva `C`, `Icu ≥ 15 kA`, `Ics`, selectividad o coordinación de protecciones requerida, diferencial tipo `A` o `F` según cargas electrónicas, reserva modular mínima del 20–30 % en envolvente IP/IK definida).
- **Resolución de cableado y seguridad contra incendios:** Mantener el criterio de seguridad superior del unifilar y memoria (cable libre de halógenos con la clase de reacción al fuego aplicable según clasificación vigente para locales de pública concurrencia — a verificar estrictamente según el país y edición reglamentaria, por ejemplo ITC-BT-28 / CPR en España como referencia ilustrativa); actualizar inmediatamente las notas de los detalles constructivos 2D y el PPTP eliminando toda mención a cable PVC estándar en esas zonas.
- **Reconstrucción del capítulo de pruebas con rigor:** Descartar el texto copiado de la IA y sustituirlo por una lista concreta de verificaciones previas a puesta en tensión y en servicio: inspección visual, continuidad de conductores de protección y equipotencialidad, resistencia de aislamiento (MΩ a tensión de ensayo aplicable), resistencia de puesta a tierra (Ω), impedancia de bucle/corriente de cortocircuito presunta, prueba temporal y de sensibilidad de cada interruptor diferencial (ms / mA), secuencia de fases, termografía en carga nominal y mediciones de iluminancia media y uniformidad en obra contrastadas con los objetivos de DIALux.

#### Preguntas de reflexión final
- ¿Qué responsabilidad legal y deontológica recae sobre el ingeniero proyectista cuando un colaborador pega en el pliego oficial un texto con normas falsas o extranjeras sugerido por ChatGPT?
- ¿Por qué es mucho más barato invertir dos horas en una matriz de conciliación antes de licitar que resolver una contradicción de materiales durante la obra?

---

## 7. Evaluación

### Evaluación diagnóstica
Sondeo inicial de 3 preguntas rápidas:
1. ¿Qué diferencia técnica y contractual existe entre una especificación por marca («modelo X o similar») y una especificación por prestaciones?
2. Si necesitas conocer los metros totales de bandeja portacables y las unidades exactas de luminarias desde Revit, ¿qué vista utilizas y qué comprobación previa haces para no contar elementos duplicados o sin código?
3. Si ChatGPT te redacta un pliego citando «UNE-EN 50999-2023» con mucha seguridad, ¿qué debes hacer antes de copiar ese código al proyecto?

### Evaluación formativa
- **Actividad 1:** Identificación certera de sesgos comerciales, lagunas paramétricas y frases legalmente ambiguas en cláusulas borrador.
- **Actividad 2:** Coherencia de los campos propuestos en *Schedules*/*Key Schedules* y precisión al resolver las 4 discrepancias cruzadas entre DIALux, BIM, cuadro de cargas y pliego.
- **Fase 6 (Revisión en plenario):** Calidad de las cláusulas neutras redactadas en clase y transparencia en la auditoría de errores detectados a la IA.

### Evaluación sumativa
1. **Trabajo práctico aplicado (Actividad 3):** Dossier de Especificaciones y Conciliación del proyecto compuesto por: tabla CSV anonimizada fuente, *prompt* estructurado, 3 partidas completas en 4 bloques (sin marcas injustificadas) y registro documentado de correcciones humanas realizadas sobre la salida de la IA.
2. **Prueba objetiva corta (5 ítems de decisión técnica):** Preguntas sobre diseño de *Key Schedules*, limitaciones cuantitativas de Revit MEP en cableado, prioridad de fuentes en conciliación BIM–DIALux–Unifilar, neutralidad en licitación y control de alucinaciones normativas en IA.

### Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
|---|---|---|---|---|
| **Estructura y neutralidad de especificaciones técnicas** | Redacta textos vagos («según norma», «calidad superior») o prescribe marcas cerradas sin justificación técnica ni parámetros de equivalencia. | Divide parcialmente las partidas, pero deja lagunas en ejecución o pruebas de recepción, o conserva términos comerciales ambiguos. | Redacta especificaciones completas en 4 bloques (Alcance, Producto, Ejecución, Pruebas) con prestaciones medibles, unidades SI y estricta neutralidad de marca. | Elabora especificaciones modulares de nivel licitación pública, integrando tolerancias, ensayos cuantificados, documentación *as-built* y cláusulas de verificación normativa vigente. |
| **Diseño y uso de *Schedules* de Revit MEP** | Extrae listas desordenadas sin códigos únicos (`Type Mark`) o asume longitudes de cableado lógico de Revit como mediciones finales exactas. | Crea tablas básicas por categoría, pero omite filtros de auditoría (elementos sin código) o no aprovecha *Key Schedules* para estandarizar especificaciones. | Configura *Schedules* limpios agrupados por código de especificación y *Key Schedules* consistentes, reconociendo límites de medición del modelo MEP. | Implementa sistema completo de tablas de diseño y tablas de auditoría (*Itemize* para vacíos) listo para exportación CSV limpia y trazable hacia presupuesto y pliego. |
| **Conciliación estricta entre documentos del proyecto** | Mantiene contradicciones evidentes entre DIALux, modelo BIM, cuadro de cargas, detalles 2D y pliego técnico. | Detecta inconsistencias cuantitativas obvias (cantidades), pero pasa por alto desajustes cualitativos críticos (potencia W, grados IP/IK, `Icu`, clase de cable). | Ejecuta matriz de conciliación cruzada verificando correspondencia entre modelo, planos, cuadro de cargas, DIALux y pliego, propagando correcciones desde la fuente maestra. | Establece protocolo preventivo de Fuente Única de Verdad por `Type Mark`, integrando control bidireccional antes de cada hito de entrega y validación externa por técnico competente. |
| **Uso crítico, ético y seguro de IA generativa** | Introduce pliegos o presupuestos confidenciales en IA o acepta sin revisar códigos de normas, magnitudes o ensayos inventados. | Anonimiza datos básicos y revisa parcialmente la redacción, pero deja pasar cambios sutiles de unidades o omisiones de pruebas en obra. | Anonimiza las tablas CSV, aplica *prompts* con regla anti-alucinación normativa y documenta correcciones técnicas manuales sobre las propuestas de la IA. | Utiliza la IA tanto para estructuración desde CSV como para auditoría cruzada (*red-teaming*), dejando trazabilidad completa de qué datos se validaron de forma independiente. |

### Actividad de autoevaluación
Checklist individual de cierre (5 minutos): el alumnado marca su nivel de seguridad (1 a 4) respecto a: (a) redactar una partida técnica sin citar marcas ni generalidades vacías; (b) exportar y auditar un *Schedule* de Revit sin elementos fantasma; (c) detectar incompatibilidades entre DIALux, cuadro de cargas y pliego; y (d) revisar críticamente códigos normativos y cifras generados por ChatGPT/Claude. Anota el mayor punto de riesgo en su propio proyecto y el paso de verificación que aplicará antes del Tema 8.

---

## 8. Materiales y recursos

### Guion de diapositivas

- **Slide 1:** Portada — Bloque 4 · Tema 7: Especificaciones técnicas. El puente contractual entre el modelo BIM, los cálculos y la obra.
- **Slide 2:** Activación — Por qué fallan los pliegos: marcas injustificadas, textos reciclados y contradicciones con los planos.
- **Slide 3:** Estructura profesional de una especificación eléctrica — Los 4 bloques (Alcance, Producto, Ejecución, Pruebas y Recepción) y la neutralidad por prestaciones.
- **Slide 4:** Tablas de planificación (*Schedules*) en Revit MEP — Agrupación por `Type Mark`, *Key Schedules*, auditoría de vacíos y límites reales de medición en conductos y cables.
- **Slide 5:** Matriz de Conciliación Estricta — Cómo cruzar sin fisuras Cuadro de Cargas/Unifilar, DIALux (`.ldt`/`.ies`), Revit MEP, Planos/Detalles y Pliego de Condiciones.
- **Slide 6:** Caso práctico *Centro Tecnológico Alborán* — Análisis de las 4 no conformidades que bloquearon la licitación y secuencia maestra de resolución.
- **Slide 7:** ChatGPT y Claude en redacción y *red-teaming* documental — Flujo seguro desde CSV anonimizado, prevención de alucinaciones normativas y validación humana obligatoria.
- **Slide 8:** Síntesis y puente al Tema 8 — Con el modelo, planos, detalles y especificaciones estrictamente conciliados, preparamos la emisión final controlada en PDF.

### Ficha de trabajo
Documento de prácticas en aula compuesto por:
- Plantilla de 4 bloques para redactar partidas técnicas neutras con lista de parámetros mínimos recomendados por familia (cuadros, cables, bandejas, luminarias, puesta a tierra).
- Tabla comparativa de datos de práctica del ejercicio de conciliación (extractos simulados de DIALux, Revit, unifilar y pliego).
- Modelo de *prompt* R-C-T-F-L especializado en especificaciones eléctricas con cláusula explícita anti-alucinación normativa.

### Plantilla técnica práctica

**Plantilla de Especificación Neutra y Matriz de Conciliación Documental**

| Código (`Type Mark`) | Equipo / Partida | Fuente maestra técnica | Valores verificados (SI) | Coincide en Unifilar / Cargas (`Sí/No`) | Coincide en DIALux / Detalles (`Sí/No`) | Coincide en Revit Schedule (`Sí/No`) | Pruebas de recepción exigibles en obra |
|---|---|---|---|---|---|---|---|
| `LUM-03` | Luminaria LED empotrada oficina | Estudio DIALux aprobado | 30 W, 3.900 lm, 4.000 K, UGR ≤ 19, IRC ≥ 80, IP40/IK04 | Sí (actualizado desde 36 W) | Sí (`.ldt` validado) | Sí (130 uds. en `TAB-EL-LUM`) | Inspección de marcaje CE/ficha técnica, encendido y medición luxométrica en retícula representativa |
| `CS-01..06` | Cuadro secundario de distribución BT | Memoria de cálculo y Unifilar | 400/230 V, IGA 4P 63 A curva C, `Icu ≥ 15 kA`, Dif. Clase A, envolvente IK08/IP42, reserva 25 % | Sí (unifilar y cuadro) | N/A (detalles en lámina `EL-DET-01`) | Sí (`Panel Schedule` y equipo) | Continuidad PE, aislamiento, disparo diferenciales (ms/mA), par de apriete y termografía |
| `CAN-02` | Bandeja perforada distribución general | Diseño de trazado y cálculo de llenado | Acero galvanizado 300 × 60 mm, reserva ≥ 30 %, puesta a tierra continua, varilla M10 | Sí (en criterio de agrupamiento) | Sí (Detalle `EL-DET-02` y planta) | Sí (420,5 m en `TAB-EL-BDJ`) | Continuidad equipotencial entre tramos, rigidez de soportes y verificación visual de curvaturas |

### Lecturas y recursos recomendados
- Documentación oficial de Autodesk Revit sobre *Schedules*, *Key Schedules*, *Panel Schedules* y exportación de tablas de datos.
- Referencias metodológicas de estructuración de especificaciones técnicas en edificación e ingeniería (por ejemplo, estructuras orientativas como *CSI MasterFormat División 26 — Electrical* o pliegos tipo oficiales publicados por organismos técnicos del país correspondiente).
- Guías técnicas de ensayos de verificación inicial y puesta en marcha en instalaciones de baja tensión (por ejemplo, apartados de verificación inicial en estándares internacionales de la serie **IEC 60364-6** o instrucciones técnicas del reglamento nacional aplicable).

> **Advertencia obligatoria de validación:** Todo ejemplo numérico, clasificación frente al fuego, grado IP/IK, parámetro de ensayo o estructura de clasificación citado en este tema tiene carácter orientativo. El formador y el alumnado deben verificar obligatoriamente las normas, códigos vigentes, ediciones actualizadas y requisitos contractuales aplicables en el país y proyecto específicos antes de incorporar cualquier especificación a una obra o licitación real.

### Glosario de términos clave

| Término | Definición |
|---|---|
| **Alucinación normativa** | Generación por un modelo de IA de códigos de normas, reglamentos, artículos o parámetros técnicos inexistentes, derogados o pertenecientes a otra jurisdicción. |
| **Conciliación documental** | Comprobación sistemática y cruzada que garantiza la coherencia exacta de códigos, magnitudes y requisitos entre modelo BIM, planos, cálculos, estudio DIALux y pliego. |
| **Especificación por prestaciones** | Prescripción técnica redactada en función de características medibles, ensayos y normas aplicables, evitando imponer marcas comerciales cerradas sin justificación. |
| ***Key Schedule* (Tabla de claves)** | Tabla especial de Revit que permite asignar automáticamente múltiples parámetros descriptivos y de especificación a elementos del modelo mediante un único código de clave. |
| **Pliego de prescripciones técnicas** | Documento contractual del proyecto que establece la calidad exigida de materiales, normas de ejecución, tolerancias, ensayos y condiciones de recepción de la instalación. |
| **Pruebas de recepción** | Conjunto de inspecciones visuales, ensayos eléctricos (aislamiento, continuidad, impedancia, diferenciales) y medidas lumínicas exigidos antes de aceptar una instalación terminada. |
| ***Red-teaming* documental** | Revisión crítica dirigida a encontrar contradicciones, ambigüedades, sesgos de marca u omisiones en un texto técnico antes de su emisión formal. |
| ***Schedule* (Tabla de planificación)** | Vista tabular paramétrica vinculada al modelo BIM que extrae listados, propiedades y recuentos de componentes eléctricos para auditoría, medición y especificaciones. |

---

## 9. Adaptaciones

### Sesión presencial
- Proyectar en pantalla partida un informe simulado de DIALux junto al *Panel Schedule* de Revit MEP y la hoja CSV de mediciones para que todo el grupo vea en tiempo real cómo el cambio de un solo parámetro de potencia (`42 W` → `30 W`) obliga a revisar toda la cadena documental.
- En la Actividad 1, entregar tarjetas impresas con cláusulas reales anonimizadas para subrayar en rojo los «puntos de litigio potencial» en obra y debatirlos de pie en grupos cortos.

### Sesión online síncrona
- Proporcionar un archivo CSV descargable desde el aula virtual para que cada pareja lo cargue en una hoja de cálculo compartida y aplique filtros dinámicos de detección de discrepancias durante la Actividad 2.
- Realizar la demostración de *red-teaming* con IA compartiendo ventana en directo (usando exclusivamente el CSV anonimizado) y pedir al grupo que señale por el chat cualquier error numérico o norma sospechosa introducida por el modelo en tiempo real.

### Sesión asíncrona
- **Pre-trabajo (20 minutos antes de la sesión):** Lectura de dos especificaciones contrastadas (una con marca cerrada y otra neutra por prestaciones) y respuesta en foro a un micro-reto de 3 preguntas sobre inconsistencias habituales entre DIALux y planos.
- **Post-trabajo (30 minutos después de la sesión):** Subida al campus virtual de la **Plantilla de Especificación y Conciliación** completa con al menos 3 partidas reales del proyecto del alumno, el *prompt* anonimizado utilizado y un párrafo justificativo de las correcciones aplicadas tras validar la respuesta de la IA.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Integra la base de cálculos eléctricos y protecciones (Bloque 1), las magnitudes fotométricas de luminarias en DIALux (Bloque 2), la organización de parámetros y familias en Revit MEP (Bloque 3) y la normalización gráfica, etiquetas, símbolos y detalles 2D desarrollados en el Bloque 4 (Temas 1 a 6).
- **Competencias que desarrolla:** Redacción técnica contractual neutra, explotación analítica de tablas de planificación BIM, auditoría multidisciplinar de coherencia documental y uso crítico, seguro y auditado de asistentes de IA en documentación técnica.
- **Conexión dentro del plan de 6 módulos / 50 temas:**
  - *Tema anterior (Bloque 4, Tema 6 — Láminas de detalles):* Conecta directamente cada detalle constructivo dibujado en lámina (zanjas, arquetas de puesta a tierra, cuartos eléctricos y bandejas) con su especificación técnica escrita, pruebas de recepción y tabla cuantificada en Revit.
  - *Tema posterior (Bloque 4, Tema 8 — Impresión a PDF):* Una vez verificada la conciliación total entre modelo, planos, detalles, cuadro de cargas, DIALux y especificaciones técnicas, el Tema 8 culminará el bloque enseñando cómo generar, configurar y auditar el paquete final de planos en PDF para entrega oficial o licitación.
- **Evidencia de aprendizaje que dejará el alumnado:** Dossier de Especificaciones y Conciliación compuesto por diseño de *Schedules*/*Key Schedules*, Matriz de Conciliación Cruzada resuelta, 3 partidas de especificación neutra en 4 bloques y registro auditable de validación humana frente a la IA.

---

## Siguientes pasos para el formador

1. **Preparar el conjunto de datos de práctica sin marca real:** Confirmar que los extractos de DIALux, Revit CSV, unifilar y pliego del ejercicio contienen las 4 discrepancias exactas (`42 W vs 30 W vs 36 W`, PVC vs. libre de halógenos, marca cerrada y texto de pruebas erróneo) claramente rastreables.
2. **Enfatizar la jerarquía de validación técnica:** Reiterar ante el grupo que las tablas de planificación de Revit ayudan a contar y organizar atributos, pero nunca reemplazan al cálculo eléctrico reglamentario ni al estudio fotométrico de DIALux.
3. **Reforzar la cultura de neutralidad y privacidad:** Recordar que copiar textos de fabricantes sin editar ni anonimizar documentos de clientes al usar IA acarrea riesgos legales reales tanto en licitación pública como en confidencialidad contractual.
4. **Preparar el puente hacia el Tema 8:** Cerrar la sesión anunciando: «Tenemos el modelo conciliado, los detalles depurados y el pliego limpio; en la próxima sesión aprenderemos a transformar todo este trabajo en un paquete PDF vectorial, nítido, a escala exacta y libre de errores de impresión antes de entregarlo al cliente o pasar a visualización 3D con Twinmotion».
