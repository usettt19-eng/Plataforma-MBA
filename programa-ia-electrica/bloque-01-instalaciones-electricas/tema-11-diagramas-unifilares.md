# Tema 11. Diagramas unifilares

> **Aviso técnico y normativo:** Esta guía forma parte del programa especializado **IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas** (no constituye un MBA ni habilita legalmente por sí sola para firmar proyectos o dictámenes oficiales). Los símbolos gráficos (IEC / ANSI), códigos de circuitos y requisitos documentales presentados son ilustrativos y **deben verificarse siempre frente a la normativa eléctrica vigente, normas de representación gráfica aplicables, exigencias de la compañía suministradora y autoridad competente del país del proyecto**. Asimismo, un diagrama unifilar completo o un posterior modelo en DIALux/Revit no garantizan cumplimiento reglamentario sin verificación técnica independiente.

---

## 1. Ficha del tema

| Campo | Detalle |
| :--- | :--- |
| **Título del tema** | Tema 11. Diagramas unifilares |
| **Bloque y posición dentro del programa** | Bloque 1: Instalaciones eléctricas — Tema 11 de 11 (Tema 11 de 50; cierre del Bloque 1 y puente al Bloque 2 de DIALux) |
| **Programa formativo** | IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas (6 módulos / 50 temas) |
| **Modalidad** | Online / Híbrida interactiva |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Haber completado los Temas 1 a 10 del Bloque 1: magnitudes eléctricas, sistemas de suministro, cálculo de cargas, conductores, protecciones, criterios de trazo, ejemplo integrado de diseño y sistema de puesta a tierra. |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado estructurará, completará y auditará un diagrama unifilar jerárquico completo —desde acometida y medida hasta circuitos terminales, puesta a tierra y reservas—, aplicando simbología normalizada con leyenda explícita y asegurando coherencia estricta frente al cuadro de cargas, los planos de planta y los grupos de alumbrado que alimentarán el modelado en DIALux (Bloque 2). |

---

## 2. Objetivos de aprendizaje

Al completar esta sesión de 4 horas, el alumnado será capaz de:

1. **Diferenciar** la función técnica del diagrama unifilar frente al esquema multifilar y al plano de planta, comparando las convenciones de simbología normalizada IEC y ANSI/NEMA según el proyecto. *(Nivel de Bloom: Comprender)*
2. **Estructurar** jerárquicamente un diagrama unifilar desde la acometida, protección general de acometida y equipo de medida hasta los subtableros, circuitos terminales, puesta a tierra y reservas futuras. *(Nivel de Bloom: Aplicar)*
3. **Especificar** la información técnica obligatoria en cada rama del esquema (identificador único, potencia, tensión, $I_b$, calibre $I_n$, polos, curva, poder de corte en $\text{kA}$, diferencial, conductor, canalización y $\Delta U\,\%$). *(Nivel de Bloom: Aplicar)*
4. **Analizar** la coherencia cruzada entre diagrama unifilar, cuadro de cargas y planos de planta —incluyendo los circuitos de alumbrado que pasarán a estudio fotométrico en DIALux— para detectar discrepancias críticas antes de emitir documentación o modelar en BIM. *(Nivel de Bloom: Analizar)*
5. **Evaluar** inconsistencias documentales utilizando controles deterministas y apoyo responsable de IA sobre tablas anonimizadas, manteniendo la verificación técnica humana sobre el plano final. *(Nivel de Bloom: Evaluar)*

---

## 3. Contenidos esenciales

### 3.1. Función técnica del diagrama unifilar y normalización de simbología (IEC vs. ANSI/NEMA)

#### Explicación breve y clara
El **diagrama unifilar** (*single-line diagram* o SLD) es el «mapa lógico y de seguridad» maestro de toda instalación eléctrica. En él, **una sola línea representa el conjunto completo de conductores de un circuito** (fases, neutro y conductor de protección PE, indicados con trazos oblicuos o anotación normalizada), mostrando la topología de distribución de energía, las protecciones, los equipos de medida, las fuentes de respaldo y la puesta a tierra, **sin preocuparse de la ubicación física en planta ni del cableado punto a punto de cada borne** (función reservada al plano de planta y al esquema multifilar/desarrollado de mando).

En proyectos internacionales o multinacionales conviven dos grandes tradiciones de simbología que **nunca deben mezclarse sin criterio**: la familia **IEC 60617** (predominante en Europa y gran parte de Latinoamérica, con símbolos geométricos estilizados de interruptor automático con disparo térmico-magnético, diferencial con núcleo toroidal y seccionador) y la familia **ANSI / IEEE 315 / NEMA** (habitual en Norteamérica e instalaciones industriales de estándar estadounidense, con arcos curvos para interruptores automáticos, espirales/bobinas para transformadores y barras horizontales características). Por ello, es obligatorio **verificar qué estándar exige el país, reglamento o cliente** e incluir siempre una **leyenda completa de símbolos** en la lámina del esquema unifilar.

#### Conceptos clave
- **Representación unifilar vs. multifilar:** síntesis topológica de potencia y protecciones en una única línea por circuito frente al dibujo detallado hilo por hilo de conexiones internas en cuadros.
- **Familias normativas IEC y ANSI/IEEE:** convenciones gráficas distintas para los mismos aparatos (magnetotérmico, diferencial DDR/GFCI, seccionador en carga, fusible, DPS/SPD, transformador de intensidad).
- **Leyenda de simbología obligatoria:** recuadro en el propio plano que define inequívocamente cada símbolo utilizado, eliminando interpretaciones ambiguas en obra o inspección.
- **Notación de conductores en unifilar:** expresión clara del número de conductores activos, neutro y PE sobre el trazo (por ejemplo, `3×16+N16+PE16 mm²` o `5G16 mm²`).

#### Definiciones necesarias
- **Diagrama unifilar:** representación esquemática simplificada de un sistema eléctrico que muestra mediante un único trazo por circuito la secuencia jerárquica de alimentación, maniobra, protección, medida y puesta a tierra.
- **Esquema multifilar:** dibujo técnico detallado que representa por separado cada conductor (L1, L2, L3, N, PE y circuitos auxiliares de mando) y sus bornes reales de conexión para el montaje en taller del cuadro.
- **Simbología normalizada:** conjunto estandarizado de signos gráficos regulados por normas técnicas (como IEC 60617 o IEEE 315/ANSI) destinado a asegurar la lectura universal de los planos por proyectistas, instaladores e inspectores.

#### Ejemplo práctico realista
Una ingeniería española desarrolla un edificio de oficinas para una empresa tecnológica estadounidense. El ingeniero eléctrico inicia el esquema usando simbología **IEC 60617** (interruptor automático con aspa/cuadrado de disparo, diferencial con toroide ovalado, fusible rectangular), mientras que el cliente solicita validar las protecciones según nomenclatura de su corporación bajo **ANSI/IEEE** (disyuntores con arco semicircular, `GFCI` en lugar de `DDR`, calibres en amperios sobre curvas tipo `MCCB`). Si se pegan bloques CAD descargados de internet mezclando ambos mundos sin leyenda, el instalador local puede confundir un seccionador en carga con un interruptor automático magnetotérmico. La solución profesional define en la carátula y leyenda qué estándar rige en la jurisdicción de obra (por ejemplo, IEC bajo REBT en España, con tabla de equivalencia aclaratoria si el cliente exige revisión corporativa, verificando siempre la normativa oficial vigente).

#### Errores frecuentes
- Mezclar bloques de símbolos IEC y ANSI dentro del mismo plano unifilar sin leyenda ni criterio homogéneo.
- Dibujar el diagrama unifilar intentando copiar la forma física de las paredes o el recorrido geométrico del plano de planta.
- Omitir la diferenciación gráfica entre un interruptor **automático** (con disparo por sobrecarga/cortocircuito), un **seccionador en carga** (sin poder de corte automático) y un **diferencial puro** (sin protección magnetotérmica propia).
- Descargar símbolos de bibliotecas gratuitas o sugeridos por herramientas sin verificar si corresponden al estándar vigente en el proyecto.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué diferencia práctica existe entre un diagrama unifilar, un esquema multifilar y un plano de planta eléctrico?
2. ¿Por qué es imprescindible verificar qué familia simbólica (IEC o ANSI/IEEE) exige la jurisdicción o el cliente e incluir una leyenda en el plano?
3. ¿Qué peligro de interpretación en obra surge si un símbolo no distingue claramente entre seccionador, magnetotérmico y diferencial puro?

---

### 3.2. Estructura jerárquica del unifilar: desde acometida y equipo de medida hasta circuitos terminales

#### Explicación breve y clara
Un diagrama unifilar bien construido sigue una **lectura jerárquica inequívoca** de arriba hacia abajo (o de izquierda a derecha en sistemas industriales extensos), reflejando exactamente el flujo eléctrico desde la red exterior hasta el último receptor y permitiendo identificar cada punto de corte e interrupción en cascada:
1. **Origen y acometida:** punto de conexión con red de distribución pública o centro de transformación, Caja General de Protección (CGP) o seccionamiento exterior, fusibles o protección de acometida.
2. **Equipo de medida:** contador de energía (medida directa hasta la intensidad máxima permitida por compañía/reglamento, o medida indirecta mediante **transformadores de intensidad TI** indicando relación, por ejemplo `200/5 A`, clase de precisión y fusibles de tensión).
3. **Derivación individual / Alimentador principal y CGBT:** entrada al **Interruptor General Automático (IGA)** en Cuadro General de Baja Tensión, **Descargador de Sobretensiones (DPS/SPD)** con su protección previa si exige fabricante/norma, analizador de redes si existe, barraje principal y reparto a salidas.
4. **Fuentes secundarias y conmutación (si existen):** grupo electrógeno o inversor fotovoltaico conectados mediante dispositivo de **enclavamiento mecánico/eléctrico** o transferencia automática (ATS) claramente grafiado.
5. **Subalimentadores y Subtableros:** líneas hacia tableros de planta o usos específicos (ST-PB, ST-P1, ST-CLIMA), cada uno con su interruptor de corte/cabecera propio.
6. **Protecciones diferenciales y magnetotérmicos terminales:** agrupaciones por interruptor diferencial (protegiendo un número acotado de circuitos según normativa aplicable) e interruptores automáticos individuales hacia cada circuito de alumbrado, tomas, HVAC, fuerza y **reservas** equipadas o espacio físico libre.
7. **Sistema de puesta a tierra integrado:** representación explícita del **esquema de conexión (TT, TN-S o IT)**, electrodo de tierra, puente de comprobación, **Barraje Equipotencial Principal (BEP)** y continuidad de conductores PE hasta barras de tierra de cada cuadro.

#### Conceptos clave
- **Jerarquía de distribución (niveles 1 a 4):** cadena ordenada Acometida/Medida $\rightarrow$ CGBT $\rightarrow$ Subtableros $\rightarrow$ Circuitos terminales y reservas.
- **Protección de cabecera vs. subtablero:** distinción clara entre IGA general de corte único, interruptores de salida hacia subtableros y cabecera local de cada subtablero.
- **Enclavamiento de fuentes:** representación obligatoria de interbloqueo cuando conviven red pública con grupo electrógeno o generación distribuida para impedir acoplamientos indebidos o retorno a red.
- **Integración gráfica de tierras:** inclusión del esquema TT/TN-S, puente de comprobación y BEP directamente sobre el diagrama unifilar de cabecera.

#### Definiciones necesarias
- **Barraje principal (embarrado):** conductor rígido colector (de cobre o aluminio) dentro de un cuadro eléctrico donde se conectan la entrada general y las derivaciones hacia interruptores de salida.
- **Medida indirecta (con TI):** configuración de contaje utilizada cuando la intensidad supera el umbral de paso directo del contador, empleando transformadores de intensidad que reducen la corriente proporcionalmente a $5\text{ A}$ o $1\text{ A}$ secundarios.
- **Reserva equipada vs. reserva sin equipar:** previsión de ampliación reflejada en el unifilar ya sea con interruptor montado de reserva conectado al barraje (equipada) o como módulo/espacio reservado libre en envolvente y barraje (sin equipar).

#### Ejemplo práctico realista
Para el edificio **«Ágora Oficina»** del Tema 8 ($P_{\text{diseño}} = 85{,}46\text{ kW}$, $I_b = 137{,}1\text{ A}$, suministro trifásico $400/230\text{ V}$, esquema **TT**), el diagrama unifilar arranca arriba con la acometida y CGP $\rightarrow$ equipo de medida indirecta con 3 transformadores de intensidad `200/5 A` $\rightarrow$ línea principal hasta **CGBT** con **IGA MCCB `4P 160 A` ($I_{cu} = 25\text{ kA}$)** + **DPS Tipo 1+2 / Tipo 2** conectado al barraje y a tierra $\rightarrow$ barraje principal `400/230 V` $\rightarrow$ salidas hacia `ST-PB`, `ST-P1`, `ST-CLIMA`, `Ascensor`, `Emergencia`, `VE` y **2 módulos de reserva** (1 equipada de `3P+N 32 A` y 1 espacio libre en barraje) $\rightarrow$ y abajo a la izquierda el detalle completo del sistema de puesta a tierra (**esquema TT**, línea de enlace `35 mm² Cu`, puente de comprobación, BEP conectado a agua/estructura/bandejas y derivaciones PE hacia cada cuadro). *(Nota: el umbral de medida directa vs. indirecta y las protecciones de DPS deben verificarse con la compañía distribuidora y reglamento vigente).*

#### Errores frecuentes
- Dibujar el esquema empezando directamente en las barras del CGBT sin incluir la acometida, el equipo de medida ni la protección general de entrada.
- Olvidar grafiar el sistema de puesta a tierra (esquema TT/TN-S, electrodo, puente de comprobación y BEP), dejando imposible saber cómo se protege la instalación frente a contactos indirectos.
- No incluir el interruptor de corte o cabecera dentro del propio subtablero secundario (especialmente cuando está en otra planta distinta al CGBT).
- Omitir la indicación de enclavamiento cuando hay SAI, grupo electrógeno o inversores fotovoltaicos.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué elementos componen obligatoriamente el nivel superior (cabecera) de un diagrama unifilar antes de llegar a los circuitos terminales?
2. ¿Cuándo aparece un equipo de medida con transformadores de intensidad (TI) en un unifilar y qué datos técnicos debe indicar?
3. ¿Cómo se distingue gráficamente una reserva equipada de un espacio de reserva en barraje y por qué ambos importan en proyecto?

---

### 3.3. Datos técnicos obligatorios en cada nivel y trazabilidad documental

#### Explicación breve y clara
Un diagrama unifilar con solo dibujos de interruptores «mudos» no sirve para presupuestar, construir, inspeccionar ni auditar. Cada rama, aparamenta y tablero del unifilar debe portar un **bloque de datos técnicos estandarizado** que resuma exactamente los cálculos realizados en los Temas 4 a 10. En concreto, en cada circuito deben constar al menos cinco familias de datos:
1. **Identificación y carga:** código único del circuito (p. ej. `ST1-AL01`), descripción de uso (alumbrado zona norte, tomas despacho, climatización), potencia asignada ($\text{kW}$ / $\text{kVA}$), tensión/fases, corriente de empleo $I_b$ ($\text{A}$) y caída de tensión parcial y/o acumulada ($\Delta U\,\%$).
2. **Protección contra sobrecorrientes:** tipo de aparato (MCB modular, MCCB caja moldeada, fusible), número de polos (`1P+N`, `2P`, `3P`, `4P`), calibre nominal $I_n$ ($\text{A}$), curva de disparo (`B`, `C`, `D` o ajuste electrónico) y **poder de corte $I_{cu}$ / $I_{cn}$ en $\text{kA}$** (dato vital que no debe faltar nunca!).
3. **Protección diferencial (cuando aplique):** sensibilidad $I_{\Delta n}$ (p. ej. `30 mA`, `300 mA`), tipo de disparo instantáneo vs. selectivo (`S`), calibre del bloque/interruptor diferencial ($\ge$ suma o cabecera correspondiente) y **clase de sensibilidad a la forma de onda** (`AC`, `A`, `F`, `B` — crítica con cargas LED, variadores de frecuencia y puntos de recarga VE según reglamento vigente).
4. **Conductor y canalización:** número de conductores, sección fase/neutro/PE ($\text{mm}^2$ o AWG según jurisdicción), material (`Cu` / `Al`), aislamiento y reacción al fuego (p. ej. `RZ1-K (AS) 0,6/1 kV`), longitud estimada ($\text{m}$) y tipo/dimensión de tubo o bandeja (`Ø 25 mm`, `Bandeja 200×60`).
5. **Cabecera y datos globales del tablero:** potencia total instalada y demandada, envolvente (IP/IK), tensión asignada, intensidad del barraje y código del plano de planta donde se ubica físicamente.

#### Conceptos clave
- **Código único de circuito:** etiqueta alfanumérica inmutable (p. ej. `CGBT-ST1-A01`) que conecta unifilar, cuadro de cargas, etiqueta física en cuadro y plano de planta.
- **Poder de corte en $\text{kA}$ ($I_{cu}/I_{cn}$):** capacidad de interrupción en cortocircuito que debe quedar explícita tanto en el IGA como en subtableros y circuitos terminales.
- **Clase diferencial (`AC`, `A`, `F`, `B`):** especificación técnica indispensable ante cargas electrónicas rectificadas (LED, SAI, bombas inverter, recarga VE) sujeta a verificación reglamentaria vigente.
- **Etiqueta completa de línea:** cadena compacta de texto junto al trazo que recoge conductor, sección, aislamiento, canalización, longitud y $\Delta U\,\%$.

#### Definiciones necesarias
- **Trazabilidad unifilar–cálculo:** capacidad de comprobar de un vistazo, leyendo el diagrama unifilar, que el calibre $I_n$, la sección del conductor y el poder de corte concuerdan con la memoria de cálculo.
- **Clase de interruptor diferencial:** clasificación normalizada según el tipo de corriente residual que el dispositivo es capaz de detectar con seguridad (alterna senoidal `AC`, pulsante continua `A`, frecuencias compuestas `F` o continua pura `B`).
- **Curva de disparo magnetotérmica (`B`, `C`, `D`):** rango de múltiplos de $I_n$ al que actúa el disparo magnético instantáneo del interruptor, elegido según corrientes de inserción de la carga y cortocircuito mínimo al final de línea.

#### Ejemplo práctico realista
Comparación entre una anotación deficiente y una anotación profesional completa para un circuito terminal de alumbrado LED en oficina:
- **Anotación deficiente:** `Alumbrado oficina - 10 A - 1,5 mm²`. *(Falta poder de corte, polos, curva, clase diferencial, aislamiento, tipo de tubo, potencia, longitud y código; imposible auditar o comprar material!).*
- **Anotación técnica completa:**
  `Cód: ST1-AL02 | Alumbrado Oficinas Ala Norte | 1,45 kW (230 V, 1F+N+PE) | Ib=6,6 A | ΔU_acum=2,1 % | MCB 1P+N 10 A Curva C (Icu=6 kA) bajo DDR 2P 40 A 30 mA Clase A | Cable H07Z1-K (AS) 3G1,5 mm² Cu en tubo rígido Ø20 mm (L=28 m)`.
Con esta etiqueta, el cuadrista sabe exactamente qué aparato comprar, el instalador qué tubo y cable montar, el inspector verifica $I_{cu}$ y clase `A`, y el proyectista de iluminación en **DIALux (Bloque 2)** sabe cuánta potencia y cuántos puntos pertenecen al circuito `ST1-AL02`. *(Nota: comprobar siempre si el reglamento vigente exige clase A/F o secciones mínimas concretas para alumbrado).*

#### Errores frecuentes
- Omitir el **poder de corte ($\text{kA}$)** en subtableros e interruptores generales o copiar `6 kA` por defecto en cuadros junto al transformador.
- Indicar el diferencial sin especificar su intensidad asignada ($I_n$, p. ej. `40 A` o `63 A`) ni su clase (`A`, `AC`, `B`), o poner varios magnetotérmicos cuya suma supera al diferencial sin interruptor general limitador aguas arriba.
- Escribir solo `3×2,5 mm²` sin aclarar si incluye o no el conductor de protección (`3G2,5` vs. `3×2,5 + TT` o `2×2,5 + PE 2,5`).
- Dejar las reservas como líneas vacías sin indicar si llevan aparamenta montada ni reserva de barraje/potencia contemplada en cabecera.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué cinco grupos de datos técnicos son obligatorios en cada circuito del diagrama unifilar para que sea construible y auditable?
2. ¿Por qué especificar únicamente `30 mA` en un diferencial resulta incompleto ante instalaciones modernas con luminarias LED, variadores o recarga de vehículos eléctricos?
3. ¿Cómo se refleja correctamente la sección de fases, neutro y conductor de protección en una línea trifásica desequilibrada o con armónicos?

---

### 3.4. Auditoría de coherencia estricta (unifilar $\leftrightarrow$ cuadro de cargas $\leftrightarrow$ planta $\leftrightarrow$ futuro BIM/DIALux) y revisión asistida con IA

#### Explicación breve y clara
El fallo documental más frecuente en oficinas técnicas no ocurre por desconocer la ley de Ohm, sino por **desincronización entre documentos**: se modifica un circuito en el plano de planta (p. ej., se añaden 8 luminarias más tras un estudio lumínico), se actualiza el cuadro de cargas en Excel, pero **se olvida actualizar el diagrama unifilar** (o viceversa). Antes de entregar la documentación del Bloque 1 y pasar al **Bloque 2 (Modelado en DIALux)** y **Bloque 3 (Revit MEP)**, es obligatorio ejecutar una **auditoría de coherencia estricta a cuatro bandas**:
1. **Unifilar $\leftrightarrow$ Cuadro de cargas:** coincidencia 1 a 1 en códigos, potencias, calibres $I_n$, protecciones diferenciales, secciones y reservas.
2. **Unifilar $\leftrightarrow$ Planos de planta:** cada circuito dibujado en el unifilar debe existir en planta con el mismo código y número coherente de luminarias/tomas, y cada subtablero grafiado debe corresponder a su ubicación física real.
3. **Unifilar $\leftrightarrow$ Puesta a tierra:** coherencia entre esquema TT/TN-S, electrodos y secciones PE proyectadas en los Temas 9 y 10.
4. **Puente directo hacia DIALux (Bloque 2) y Revit MEP (Bloque 3):** los grupos de alumbrado normal y de emergencia definidos en el unifilar determinan las zonas, potencias y circuitos de encendido que luego se comprobarán fotométricamente en **DIALux** (`Tema 12: Configuración de DIALux`) y se asignarán a familias y sistemas en **Revit MEP**. Un unifilar inconsistente arruina la automatización y genera discrepancias en tablas de planificación BIM.

En esta auditoría cruzada, **ChatGPT o Claude** son muy útiles para comparar dos tablas exportadas en texto/CSV (por ejemplo, listado textual de ramas del unifilar frente al cuadro de cargas anonimizado) y señalar diferencias de códigos, calibres incompatibles ($25\text{ A}$ con $2{,}5\text{ mm}^2$) o sumas discordantes. No obstante, **la IA no «ve» la coherencia geométrica del plano PDF ni sustituye la inspección visual del técnico competente**.

#### Conceptos clave
- **Coherencia documental cruzada:** correspondencia exacta e unívoca entre diagrama unifilar, cuadro de cargas, memoria de cálculo y planos de planta.
- **Circuito huérfano:** circuito que aparece en planta pero no en el unifilar (o viceversa), fuente típica de sobrecostes y rechazos en inspección.
- **Interfaz Eléctrica $\rightarrow$ DIALux (Bloque 2):** transferencia conceptual de zonas, grupos de encendido y potencia máxima de alumbrado desde el diseño eléctrico (Bloque 1) al estudio lumínico en DIALux (sin asumir automatismos mágicos entre ambas herramientas).
- **Auditoría tabular con LLM:** comparación automatizada de listas exportadas (CSV/Markdown) mediante *prompts* estructurados con datos anonimizados para cazar discrepancias antes de imprimir PDFs.

#### Definiciones necesarias
- **Matriz de coherencia documental:** tabla de comprobación que cruza cada documento del proyecto eléctrico (memoria, cuadro de cargas, unifilar, planos de planta) verificando coincidencia exacta de códigos, calibres, secciones y cargas.
- **Integridad de circuito de alumbrado:** coincidencia entre la potencia total de las luminarias calculadas en el estudio fotométrico (DIALux) y la potencia asignada a su circuito correspondiente en el unifilar y cuadro de cargas.
- **Control previo a visado/BIM:** revisión multidisciplinar de cierre de diseño eléctrico que bloquea la emisión de modelos 3D o planos constructivos hasta resolver todas las incongruencias detectadas.

#### Ejemplo práctico realista
Al preparar los datos de entrada para el **Bloque 2 (DIALux)** de un centro ambulatorio, el proyectista exporta a CSV el cuadro de cargas de **ST-P1** (anonimizado) y transcribe las líneas de alumbrado del unifilar en una tabla para auditarlas con Claude. La IA detecta rápidamente que el circuito `ST1-AL03` figura en el cuadro de cargas con $2{,}4\text{ kW}$ y protección `16 A` sobre `2,5 mm²`, mientras que en el unifilar aparece como `ST1-AL03` con protección `10 A` sobre `1,5 mm²`; además falta el circuito `ST1-EM01` de alumbrado de emergencia presente en planta. Al abrir los planos manualmente, el proyectista confirma otro error que la IA no podía ver en texto: el plano de planta tenía 28 luminarias asignadas a `ST1-AL02` (que excedían la capacidad diseñada) frente a las 20 luminarias del cuadro. Corregidas las tres discrepancias antes de abrir DIALux, el estudio lumínico arranca sobre bases coherentes.

#### Errores frecuentes
- Modificar el número o potencia de luminarias en DIALux durante el Bloque 2 sin volver atrás a actualizar el cuadro de cargas ni el diagrama unifilar.
- Enviar a un cliente un diagrama unifilar «reutilizado» de otro proyecto antiguo con códigos de circuitos y subtableros que no existen en los planos de planta actuales.
- Creer que si Revit MEP dibuja cables o genera un esquema básico de panel ya valida automáticamente la selectividad, el poder de corte en $\text{kA}$ o el cumplimiento reglamentario.
- Subir planos confidenciales o cuadros completos con nombre del edificio/cliente a ChatGPT o Claude sin anonimizar previamente.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué cuatro documentos o planos deben coincidir al 100 % en códigos de circuito, calibres y potencias antes de pasar a fase BIM o de obra?
2. ¿Cómo se conectan las decisiones de circuitos de alumbrado del Tema 11 con el trabajo que comenzaremos en el Bloque 2 (DIALux)?
3. ¿Qué tipo de errores detecta con rapidez un asistente de IA al comparar tablas anonimizadas y qué errores requiere obligatoriamente inspección visual humana sobre planos?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** cierra el Bloque 1 integrando todos los aprendizajes previos en el arte de estructurar y auditar diagramas unifilares profesionales, conectando explícitamente con el Bloque 2.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
| :--- | :---: | :--- | :--- |
| **1. Apertura y activación** | 00:00 – 00:25 (25 min) | Sitúa el Tema 11 como cierre del Bloque 1 y puerta al Bloque 2 (DIALux); lanza el sondeo diagnóstico y la **Actividad 1** con un unifilar caótico. | Analiza el unifilar proyectado (mezcla de símbolos, sin kA, sin tierra) e identifica los 5 fallos principales que impiden aprobarlo. |
| **2. Microexposición Bloque A (Simbología y jerarquía)** | 00:25 – 01:00 (35 min) | Explica los apartados 3.1 y 3.2: diferencias IEC vs. ANSI, leyenda obligatoria, flujo acometida $\rightarrow$ medida TI $\rightarrow$ CGBT $\rightarrow$ subtableros $\rightarrow$ puesta a tierra. | Clasifica una batería de 8 símbolos reales en IEC vs. ANSI y traza el esqueleto jerárquico de un edificio comercial tipo. |
| **3. Actividad práctica de aplicación técnica** | 01:00 – 01:40 (40 min) | Dinamiza la **Actividad 2**: construcción completa de la etiqueta de datos obligatorios y bloque de cabecera/tierras para el edificio *Ágora Oficina*. | En parejas, redacta las especificaciones completas de cabecera (IGA, TI, DPS, TT/BEP) y de 4 circuitos críticos con todos los campos obligatorios. |
| **Descanso breve** | 01:40 – 01:55 (15 min) | Pausa activa y verificación de acceso a los tres documentos del caso práctico (unifilar, cuadro y planta). | Descanso fuera de pantalla. |
| **4. Microexposición Bloque B (Datos obligatorios y auditoría cruzada)** | 01:55 – 02:25 (30 min) | Expone los apartados 3.3 y 3.4: clase diferencial `A/AC/B`, $I_{cu}$ en kA, reservas, matriz de coherencia y puente hacia DIALux/Revit + auditoría segura con IA. | Revisa un ejemplo real de auditoría CSV entre unifilar y cuadro de cargas y formula el enlace entre circuitos de alumbrado y DIALux. |
| **5. Caso práctico integrado** | 02:25 – 03:15 (50 min) | Presenta el caso **«Clínica Norte Salud»**, organiza equipos de 3–4 personas y supervisa la caza de las 7 discrepancias graves entre documentos. | En equipos, cruza el unifilar borrador, el cuadro de cargas y el extracto de planta, localiza y corrige las 7 discrepancias y reconstruye la ficha técnica. |
| **6. Puesta en común y transferencia a proyecto** | 03:15 – 03:45 (30 min) | Modera la exposición de soluciones del caso y guía la **Actividad 3** (auditoría tabular con IA sobre datos anonimizados y checklist de cierre del Bloque 1). | Contrasta sus correcciones del caso, ejecuta un *prompt* de auditoría cruzada validando manualmente sus límites y prepara el dossier de alumbrado para el Bloque 2. |
| **7. Síntesis, evaluación sumativa y cierre** | 03:45 – 04:00 (15 min) | Resume el cierre completo del Bloque 1 (Temas 1–11), aplica la evaluación sumativa final y abre oficialmente el puente al **Tema 12 (Configuración de DIALux)**. | Completa la prueba sumativa y la autoevaluación de cierre de bloque. |

**Suma total verificada:** 25 + 35 + 40 + 15 + 30 + 50 + 30 + 15 = **240 minutos (4 horas)**.

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «El unifilar imposible de construir»
- **Nombre:** El unifilar imposible de construir.
- **Objetivo:** Reconocer de forma inmediata qué omisiones gráficas o técnicas convierten un diagrama unifilar en un documento inservible para obra, inspección o BIM.
- **Instrucciones para el alumnado:**
  1. Examinad el fragmento de diagrama unifilar proyectado por el formador (un esquema aparentemente «bonito» hecho en CAD, pero sin leyenda, con mezcla IEC/ANSI, sin valores de $\text{kA}$, sin sección de PE ni esquema de tierras, y con líneas sin código).
  2. En 7 minutos de forma individual, anotad al menos 5 defectos críticos que impedirían a un cuadrista montar el cuadro o a un inspector aprobarlo.
  3. Participad en la puesta en común priorizando cuál de esos defectos supone mayor riesgo de seguridad o coste.
- **Materiales necesarios:** Diapositiva con fragmento defectuoso de unifilar y ficha de trabajo.
- **Tiempo estimado:** 15 minutos (integrados en la Fase 1).
- **Rol del formador:** Recoger los defectos encontrados y agruparlos en tres categorías: simbología ambigua, datos faltantes de cálculo/seguridad y omisión de puesta a tierra.
- **Producto o entregable esperado:** Lista clasificada de los 5 defectos críticos y su consecuencia en obra.
- **Criterios de éxito:** El alumnado detecta al menos 4 de las 5 carencias principales (falta de kA, mezcla simbólica sin leyenda, ausencia de tierras, carencia de códigos o datos de cable/canalización).

### Actividad 2 (Aplicación técnica): «Construcción de bloque de cabecera y etiquetas completas de circuito»
- **Nombre:** Construcción de bloque de cabecera y etiquetas completas de circuito.
- **Objetivo:** Traducir los resultados numéricos de cálculo (del Tema 8 y Tema 9) a una estructura jerárquica correcta y a etiquetas normalizadas de diagrama unifilar.
- **Instrucciones para el alumnado:**
  1. En parejas, tomad los datos de diseño de **«Ágora Oficina»** (Tema 8: IGA `160 A`, $I_{cu}=25\text{ kA}$, acometida `70 mm²` o `50 mm²`, esquema TT con DPS, subtablero ST-CLIMA `63 A` con `5G16 mm²` y circuito terminal alumbrado `10 A`).
  2. Dibujad esquemáticamente (en papel cuadriculado, pizarra digital o plantilla CAD/draw.io) la rama vertical desde la acometida + medida indirecta TI `200/5 A` hasta el CGBT, el detalle completo de puesta a tierra (BEP, puente comprobación, línea de enlace) y 4 salidas completas (ST-CLIMA, ST-P1, Alumbrado 1 y 1 Reserva equipada).
  3. Redactad la etiqueta completa de cada una de las 4 ramas con código único, potencia, $I_b$, $\Delta U_{\text{acum}}\,\%$, protección ($I_n$, polos, curva, $\text{kA}$, clase DDR), cable completo (incluyendo PE), tubo/bandeja y longitud, más leyenda de los símbolos empleados (eligiendo exclusivamente estándar IEC o ANSI).
- **Materiales necesarios:** Ficha con resumen de datos de *Ágora Oficina*, tabla de símbolos IEC/ANSI ilustrativa y plantilla esquemática.
- **Tiempo estimado:** 40 minutos (Fase 3).
- **Rol del formador:** Vigilar que nadie mezcle símbolos IEC y ANSI, comprobar la coherencia $I_b \le I_n \le I_z'$ en las etiquetas y revisar que el PE, los $\text{kA}$ y la clase diferencial estén presentes.
- **Producto o entregable esperado:** Esquema unifilar parcial completo con leyenda coherente, puesta a tierra integrada y 4 ramas totalmente etiquetadas.
- **Criterios de éxito:** Jerarquía correcta (medida $\rightarrow$ IGA/DPS $\rightarrow$ barraje $\rightarrow$ salidas/reservas + tierras), cero mezcla de estándares sin leyenda y 100 % de los campos técnicos obligatorios incluidos.

### Actividad 3 (Transferencia a proyecto real): «Auditoría cruzada unifilar–cuadro con IA y preparación hacia DIALux»
- **Nombre:** Auditoría cruzada unifilar–cuadro con IA y preparación hacia DIALux.
- **Objetivo:** Implantar un flujo de control de calidad previo a la entrega documental y al Bloque 2 (DIALux), empleando asistentes de IA para cruzar tablas anonimizadas y validando el resultado en plano.
- **Instrucciones para el alumnado:**
  1. Tomad el extracto anonimizado en texto/CSV del cuadro de cargas y la lista de circuitos de alumbrado de vuestro proyecto propio (o del caso modelo del Bloque 1).
  2. Redactad un *prompt* para ChatGPT o Claude solicitando exclusivamente una **tabla de discrepancias** entre ambas listas (códigos faltantes, potencias divergentes, protecciones incompatibles con sección de cable y suma total de cargas de alumbrado).
  3. Ejecutad una verificación manual de los resultados devueltos por la IA y rellenad el **Registro de Transferencia al Bloque 2 (DIALux)** con los grupos reales de luminarias, potencias máximas por zona y circuitos asignados (recordando verificar normativa de iluminación como UNE-EN 12464-1 o equivalente aplicable en Bloque 2).
- **Materiales necesarios:** Plantilla técnica práctica (Sección 8), datos CSV anonimizados y acceso a asistente de IA (o ejemplo offline).
- **Tiempo estimado:** 25 minutos (integrados en la Fase 6).
- **Rol del formador:** Confirmar la anonimización previa, demostrar por qué la IA solo detecta inconsistencias tabulares pero no fallos de dibujo en planta, y revisar la tabla puente hacia el Tema 12 (DIALux).
- **Producto o entregable esperado:** Matriz de auditoría cruzada validada manualmente + Ficha puente de circuitos de alumbrado para DIALux.
- **Criterios de éxito:** El alumnado identifica discrepancias tabulares reales, documenta al menos una limitación visual de la IA frente al plano de planta y deja trazado un vínculo limpio entre los circuitos del unifilar y las zonas lumínicas del Bloque 2.

---

## 6. Caso práctico

### Caso: Clínica Norte Salud — «Siete errores ocultos antes de visar el proyecto y modelar en DIALux»

#### Contexto empresarial
**Clínica Norte Salud** va a reformar integralmente un centro médico ambulatorio y administrativo de $750\text{ m}^2$ en una sola planta (recepción, 6 consultas, sala de curas, pasillo principal, vestuarios/aseos y despacho de dirección). La ingeniería encargada del proyecto debe entregar el expediente eléctrico definitivo del Bloque 1 (memoria, cuadro de cargas, diagrama unifilar y planos de planta) esta semana para iniciar el estudio de iluminación interior en **DIALux (Bloque 2)** y el posterior modelado en **Revit MEP (Bloque 3)**.

#### Situación o problema
Durante la revisión interna previa a la emisión, el coordinador técnico detecta señales preocupantes de falta de control entre documentos. El diagrama unifilar fue redactado apresuradamente copiando bloques de dos proyectos anteriores y modificando a mano algunos textos, mientras el cuadro de cargas en Excel y el plano de planta de alumbrado/tomas recibieron cambios de última hora por parte del equipo de arquitectura interior. El cliente exige además saber exactamente qué circuitos de alumbrado corresponden a cada zona para validar niveles de iluminación y emergencia en DIALux.

#### Datos disponibles

| Documento | Extracto real detectado durante la revisión |
| :--- | :--- |
| **Diagrama Unifilar (borrador)** | 1. No incluye **leyenda** y mezcla el símbolo IEC de interruptor automático en cabecera con símbolos ANSI en los circuitos de consultas y símbolo sin disparo automático para el seccionador de ST-CLIMA.<br>2. El **IGA de `125 A`** figura sin indicar **poder de corte ($I_{cu}$ en $\text{kA}$)** pese a que el cálculo de cabecera reporta $I_{cc} = 14\text{ kA}$.<br>3. Omite completamente el **sistema de puesta a tierra** (ni régimen TT/TN-S, ni línea de enlace, ni puente de comprobación, ni BEP).<br>4. En el circuito de tomas `ST1-TC04` aparece protección **`MCB 25 A`** protegiendo cable **`3G2,5 mm²`**. |
| **Cuadro de Cargas (Excel)** | 5. Incluye los circuitos de alumbrado `ST1-AL01` (Consultas, $1{,}8\text{ kW}$, `10 A`, `1,5 mm²`), `ST1-AL02` (Pasillo y Recepción, $1{,}4\text{ kW}$, `10 A`, `1,5 mm²`) y **`ST1-AL03`** (Zona técnica/almacén, $0{,}9\text{ kW}$, `10 A`, `1,5 mm²`), pero `ST1-AL03` **no aparece dibujado** en el diagrama unifilar.<br>6. En los circuitos de consultas y vestuarios húmedos figura un diferencial de `30 mA`, pero **sin especificar clase (`A`/`AC`)** ni si existen requisitos especiales de sala húmeda/uso médico a verificar. |
| **Plano de Planta (CAD 2D)** | 7. El plano de alumbrado muestra **32 luminarias LED de $45\text{ W}$** ($1\,440\text{ W}$) en `ST1-AL01` más 6 luminarias de emergencia en el circuito `ST1-EM01`, pero en el unifilar `ST1-AL01` está anotado para $1{,}8\text{ kW}$ (`40 luminarias`) y el circuito **`ST1-EM01` ni siquiera existe en el cuadro de cargas ni en el unifilar**. Además, no hay ninguna reserva prevista en el tablero para futuras ampliaciones médicas. |

#### Preguntas de análisis
1. Identificad y clasificad las **7 discrepancias graves** repartidas entre seguridad eléctrica, simbología/normalización y coherencia documental cruzada.
2. ¿Qué consecuencias técnicas y reglamentarias tendría pasar a obra o a modelado BIM/DIALux manteniendo el error de **`25 A` sobre `2,5 mm²`** y la ausencia de **`Icu` en el IGA** frente a $I_{cc} = 14\text{ kA}$?
3. ¿Qué datos faltantes del sistema de puesta a tierra y de las protecciones diferenciales deben quedar reflejados explícitamente en el unifilar y verificados en la normativa nacional vigente (especialmente al tratarse de un centro médico ambulatorio)?
4. ¿Cómo afecta la discordancia entre las 32 luminarias en planta vs. 40 en cuadro (`ST1-AL01`) y la omisión de `ST1-EM01` al inicio del estudio lumínico en DIALux (Bloque 2)?

#### Tarea a realizar
En equipos de 3–4 personas (50 minutos), elaborad un **Informe de Auditoría y Reestructuración del Unifilar** que contenga:
1. **Matriz de las 7 discrepancias** detallando dónde está cada error, su gravedad (seguridad / normativa / coherencia) y la corrección exacta aplicada.
2. **Esquema unifilar corregido (estructura jerárquica y etiquetas completas)** siguiendo un único estándar simbólico (IEC con leyenda explícita) e incorporando: acometida/medida, IGA con $I_{cu} \ge 15\text{–}25\text{ kA}$, DPS, puesta a tierra completa (TT/BEP/puente de comprobación), corrección de `ST1-TC04`, alta de `ST1-AL03` y `ST1-EM01`, especificación de clase diferencial a verificar y 2 reservas (1 equipada + 1 espacio).
3. **Tabla puente de circuitos de alumbrado hacia DIALux (Bloque 2)** conciliando definitivamente `ST1-AL01`, `ST1-AL02`, `ST1-AL03` y `ST1-EM01` con las luminarias de planta.
4. **Nota expresa de verificación normativa especial** recordando validar si la clínica o sala de curas exige prescripciones específicas (por ejemplo en España, REBT ITC-BT-38 / locales de pública concurrencia ITC-BT-28 o normativa sanitaria vigente).

#### Posibles soluciones o criterios de análisis
- **Corrección de las 7 discrepancias:**
  1. *Simbología:* unificar al $100\,\%$ bajo **IEC 60617**, eliminar bloques ANSI e insertar leyenda completa de símbolos en la lámina.
  2. *Poder de corte en cabecera:* especificar en el IGA `125 A` un poder de corte mínimo **$I_{cu} \ge 16\text{ kA}$ o $25\text{ kA}$** (superior a $I_{cc} = 14\text{ kA}$), verificando también los interruptores aguas abajo o tablas de filiación.
  3. *Puesta a tierra en unifilar:* añadir gráficamente el régimen de neutro aplicable (p. ej. **TT**), el electrodo, la línea de enlace, el puente de comprobación, el **BEP** y el conductor PE en todas las salidas.
  4. *Error térmico peligroso (`ST1-TC04`):* `25 A` sobre `2,5 mm²` Cu supera ampliamente su intensidad admisible ($I_z$ típica $\approx 21\text{–}24\text{ A}$ según instalación); debe reducirse la protección a **`16 A` (si es circuito de tomas estándar $16\text{ A}$)** o recalcular la carga y subir el conductor a **`4 mm²` o `6 mm²`** si realmente demanda más de $16\text{ A}$ (verificando norma vigente).
  5. *Circuito faltante (`ST1-AL03`):* incorporarlo al unifilar exactamente con su código, carga ($0{,}9\text{ kW}$), `MCB 1P+N 10 A C` y `3G1,5 mm²` en tubo especificado (verificando caída de tensión).
  6. *Diferenciales y entorno clínico:* especificar la clase de diferencial (**Clase A** mínimo ante luminarias LED/equipos médicos electrónicos, o lo que exija la norma vigente) y verificar obligatoriamente en reglamento local si la sala de curas o el centro ambulatorio requiere medidas especiales (p. ej. esquema IT médico, transformador de aislamiento, monitor de aislamiento o alumbrado de pública concurrencia).
  7. *Coherencia planta–alumbrado–emergencia–reservas:* alinear `ST1-AL01` a una única cifra real acordada con arquitectura/DIALux (por ejemplo, validar en DIALux si las consultas necesitan 32 o 40 luminarias antes de cerrar potencia definitiva), dar de alta `ST1-EM01` en cuadro de cargas y unifilar con cable resistente al fuego/circuitos independientes según norma de incendios, y añadir al menos un $15\text{–}20\,\%$ de reserva en cuadro.

#### Preguntas de reflexión final
- ¿Por qué el diagrama unifilar es el primer documento que abre un inspector técnico o una oficina de control al auditar un proyecto eléctrico?
- ¿Qué pasos de control implementaríais en vuestra oficina para que un cambio de última hora en planos de planta nunca vuelva a quedar sin reflejar en el cuadro de cargas y en el unifilar?

---

## 7. Evaluación

### Evaluación diagnóstica
- **Instrumento (inicio de sesión, 5 min):** Sondeo rápido de 4 preguntas junto con la Actividad 1: (1) diferencia entre unifilar y multifilar; (2) qué significan las siglas `kA` en un automático; (3) si un diferencial de `30 mA` protege por sí solo contra cortocircuitos; y (4) si un símbolo de Revit o DIALux implica validación normativa.

### Evaluación formativa
- Seguimiento continuo en las **Actividades 2 y 3** y el caso **«Clínica Norte Salud»** verificando que el alumnado:
  - Mantiene coherencia estricta entre símbolos (solo IEC o solo ANSI) y añade leyenda.
  - Incluye todos los datos obligatorios por circuito sin omitir $\text{kA}$, PE, clase diferencial ni $\Delta U\,\%$.
  - Representa gráficamente la jerarquía completa incluyendo medida, CGBT, tierras y reservas.
  - Detecta los 7 errores documentales del caso y entiende la relación limpia con DIALux.

### Evaluación sumativa
1. **Informe de Auditoría y Esquema Unifilar Corregido del caso «Clínica Norte Salud»** en equipo (**60 %** del peso).
2. **Etiquetado técnico de la Actividad 2 + Auditoría cruzada con puente a DIALux (Actividad 3) + mini-test final de cierre de Bloque 1** (**40 %** del peso).

### Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
| :--- | :--- | :--- | :--- | :--- |
| **1. Simbología normalizada y jerarquía unifilar** | Mezcla símbolos IEC y ANSI sin leyenda, omite cabecera/medida o ignora la puesta a tierra en el esquema. | Representa la jerarquía principal, pero olvida la medida TI, el puente de comprobación de tierra o las reservas. | Aplica un estándar único con leyenda explícita y estructura completa (acometida, medida, CGBT, DPS, salidas, tierras y reservas). | Presenta además notación impecable de fuentes/enclavamientos, envolventes IP/IK y correspondencia total entre barrajes y niveles. |
| **2. Completitud técnica de datos en circuitos** | Circuitos «mudos» sin $I_{cu}$ en $\text{kA}$, sin calibre, sin sección PE o sin datos de canalización. | Incluye calibres y secciones básicas, pero omite poder de corte ($\text{kA}$), clase diferencial o caída de tensión acumulada. | Incluye los 5 bloques obligatorios en cada rama ($I_b$, $\Delta U$, protección con $\text{kA}$ y clase DDR, cable+PE y canalización). | Documenta además selectividad/filiación en cabecera, cables resistentes al fuego para emergencia y notas normativas de verificación local. |
| **3. Auditoría de coherencia documental** | Deja pasar errores graves como `25 A` sobre `2,5 mm²`, ausencia de `kA` o circuitos huérfanos en planta. | Detecta 4–5 inconsistencias evidentes, pero no concilia los circuitos de alumbrado ni el error de emergencia. | Localiza y corrige las 7 discrepancias entre unifilar, cuadro de cargas y planta con soluciones técnicamente sólidas. | Propone una matriz integral de control documental que previene futuras desincronizaciones al pasar a DIALux y Revit MEP. |
| **4. Puente a DIALux y uso crítico de IA** | Confunde el estudio fotométrico en DIALux con el diseño eléctrico o confía en la IA para validar planos PDF. | Genera la tabla de auditoría con IA, pero no concilia las zonas de alumbrado ni revisa el resultado en plano. | Audita tablas CSV anonimizadas con IA, comprueba manualmente en planta y entrega la ficha puente de alumbrado para el Bloque 2. | Diseña un flujo reproducible y seguro (anonimización + chequeo IA + verificación visual en plano + alerta normativa sanitaria/local). |

### Actividad de autoevaluación
Al finalizar el tema y cerrar el Bloque 1, cada participante reflexiona por escrito:
1. *De los 11 temas del Bloque 1, ¿qué concepto eléctrico o criterio de diseño siento más consolidado y cuál necesito reforzar antes de empezar DIALux y Revit MEP?*
2. *¿Qué cinco datos obligatorios voy a revisar siempre en cualquier diagrama unifilar antes de firmarlo, visarlo o modelarlo en BIM?*
3. *¿Cómo garantizo en mi flujo de trabajo que el diseño eléctrico (Bloque 1) permanezca sincronizado con las modificaciones futuras de iluminación (Bloque 2) y modelado 3D (Bloque 3)?*

---

## 8. Materiales y recursos

### Guion de diapositivas
- **Slide 1 — Portada y cierre del Bloque 1:** Tema 11 (11/11), síntesis del recorrido completo T1–T11 y papel puente hacia el Bloque 2 (DIALux).
- **Slide 2 — Activación (Actividad 1):** Fragmento real de «unifilar imposible de construir» para detectar los 5 fallos iniciales.
- **Slide 3 — Simbología normalizada (IEC vs. ANSI):** Comparativa visual de interruptores, diferenciales, seccionadores, DPS, TI y regla de leyenda única obligatoria.
- **Slide 4 — Estructura jerárquica completa:** De acometida y medida (directa/TI) hasta IGA, DPS, barraje, subtableros, terminales, reservas y puesta a tierra integrada.
- **Slide 5 — Datos obligatorios en cada rama:** Checklist de los 5 bloques por circuito (código, $I_b/\Delta U$, $I_n$/curva/$\text{kA}$/clase DDR, cable+PE, canalización) (Actividad 2).
- **Slide 6 — Coherencia a cuatro bandas:** Sincronización estricta Unifilar $\leftrightarrow$ Cuadro de cargas $\leftrightarrow$ Planta $\leftrightarrow$ Circuitos de alumbrado para DIALux (Bloque 2).
- **Slide 7 — Caso práctico «Clínica Norte Salud»:** Extracto de unifilar, cuadro Excel y plano de planta con las 7 discrepancias ocultas (50 min).
- **Slide 8 — Auditoría asistida por IA y apertura del Bloque 2:** Revisión CSV anonimizada con LLM (Actividad 3), cierre sumativo del Bloque 1 y anticipo del **Tema 12: Configuración de DIALux**.

### Ficha de trabajo
Documento de 2 páginas para el alumnado con: (1) lista de chequeo para la Actividad 1; (2) cuadro comparativo mudo de símbolos IEC vs. ANSI y plantilla para las 4 etiquetas de la Actividad 2; (3) tabla comparativa para cazar las 7 discrepancias del caso *Clínica Norte Salud*; y (4) cuestionario de autoevaluación de fin de Bloque 1.

### Plantilla técnica práctica
```text
=== MATRIZ DE AUDITORÍA DE DIAGRAMA UNIFILAR Y PUENTE A DIALUX (BLOQUE 2) ===
Proyecto (anonimizado): ___________________   Estándar simbólico: [ ] IEC 60617  [ ] ANSI/IEEE (Leyenda adjunta: [ ] Sí)
Normativa eléctrica a verificar en jurisdicción: ___________________________

1. AUDITORÍA DE CABECERA Y PUESTA A TIERRA
- Acometida / CGP / Equipo medida (TI si aplica) grafiados: [ ] Sí   - IGA con Icu (___ kA) >= Icc_origen (___ kA): [ ] Sí
- DPS protegido y conectado al barraje de tierra: [ ] Sí           - Régimen tierra (TT/TN-S/IT) + BEP + puente prueba: [ ] Sí
- Reservas en cuadro reflejadas (equipadas + espacio): ___ %

2. TABLA CRUZADA DE COHERENCIA (UNIFILAR <-> CUADRO <-> PLANTA <-> DIALUX)
| Código circuito | Descripción / Zona | Potencia Unifilar vs. Cuadro (kW) | Protec. (In / kA / DDR clase) | Cable + PE + Canaliz. | N.º luminarias / puntos en Planta | ¿Coincide 100 %? |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| | | | | | | [ ] Sí / [ ] Corregir |

3. PREPARACIÓN PARA BLOQUE 2 (DIALUX - TEMA 12)
- Circuitos normales de alumbrado exportados a ficha lumínica: _______________________________
- Circuitos de alumbrado de emergencia independientes identificados: _______________________
- Revisión humana independiente tras auditoría tabular con IA: [ ] Sí   Fecha: ____________
```

### Lecturas y recursos recomendados
*(Nota importante: el formador y el alumnado deben validar siempre la edición vigente, la normativa del país, el acceso y las versiones de software antes de utilizar cualquier referencia).*
- **IEC 60617** (*Graphical symbols for diagrams*) y **IEC 61082-1** (*Preparation of documents used in electrotechnology*) *(referencias internacionales de simbología y reglas de esquemas eléctricos; verificar edición vigente)*.
- **IEEE Std 315 / ANSI Y32.2** (*Graphic Symbols for Electrical and Electronics Diagrams*) *(referencia ilustrativa si se trabaja bajo normativa norteamericana; verificar edición vigente)*.
- **REBT (España) — ITC-BT-04 (Documentación y puesta en servicio), ITC-BT-17 (Dispositivos de mando y protección) e ITC-BT-38 (Quirófanos y salas de intervención)** *(ejemplos ilustrativos de documentación exigible y locales especiales; verificar siempre vigencia oficial y jurisdicción real del proyecto)*.
- **Documentación oficial de DIALux evo** (manual introductorio de flujo de proyectos y preparación de áreas/espacios antes del Tema 12 — *comprobar versión vigente descargada*).

### Glosario de términos clave

| Término | Definición |
| :--- | :--- |
| **Diagrama unifilar** | Esquema topológico que representa con un único trazo cada circuito, detallando la jerarquía de alimentación, protecciones, medida y puesta a tierra. |
| **Esquema multifilar** | Representación detallada hilo a hilo de cada conductor activo, neutro, protección y mando necesaria para el cableado físico en taller. |
| **IEC 60617 / ANSI-IEEE 315** | Normas de referencia para simbología eléctrica normalizada en Europa/internacional y Norteamérica respectivamente, que nunca deben mezclarse sin leyenda. |
| **Transformador de intensidad (TI)** | Equipo de medida que reduce proporcionalmente corrientes elevadas a valores normalizados secundarios ($5\text{ A}$ o $1\text{ A}$) para contadores y analizadores. |
| **Poder de corte ($I_{cu}/I_{cn}$)** | Corriente máxima de cortocircuito en kiloamperios ($\text{kA}$) que un interruptor automático puede despejar con seguridad sin destruirse. |
| **Clase de diferencial (`AC`, `A`, `F`, `B`)** | Categoría del dispositivo diferencial según su capacidad para detectar corrientes de defecto senoidales, pulsantes o continuas lisas. |
| **Circuito huérfano** | Circuito que figura en planos de planta pero falta en el diagrama unifilar o cuadro de cargas (o viceversa) por desincronización documental. |
| **Trazabilidad documental** | Correspondencia exacta y verificable de códigos, potencias, protecciones y conductores entre memoria, cuadro de cargas, unifilar y planos de planta. |

---

## 9. Adaptaciones

### Sesión presencial
- **Taller físico en papel A3/A2:** Imprimir el unifilar defectuoso y el plano de planta de *Clínica Norte Salud* en formato grande A3 para que cada equipo utilice rotuladores fosforescentes de colores al cazar las 7 discrepancias entre papel y tabla.
- **Mural comparativo de símbolos:** Dibujar en pizarra dos columnas paralelas (IEC vs. ANSI) con los 8 símbolos principales para consolidar visualmente la diferencia.

### Sesión online síncrona
- **Tablero colaborativo de 3 paneles:** En Miro o FigJam, colocar lado a lado los tres extractos del caso (*Unifilar*, *Cuadro Excel*, *Planta CAD*) para que cada grupo en su *breakout room* una con flechas y notas adhesivas las 7 discrepancias encontradas.
- **Demostración en vivo de auditoría CSV:** El formador muestra en pantalla cómo anonimizar un cuadro de cargas, pasarlo a Claude/ChatGPT y detectar en 30 segundos una discrepancia tabular, destacando acto seguido el fallo visual que la IA no vio en el plano.

### Sesión asíncrona
- **Vídeo cierre del Bloque 1 + tutorial de auditoría:** Publicar 4 cápsulas grabadas de 10 minutos más una demostración grabada de cruce unifilar–cuadro–planta.
- **Entregable evaluable:** El alumnado sube en PDF la Matriz de Auditoría de *Clínica Norte Salud* resuelta y su Ficha Puente de Circuitos de Alumbrado lista como insumo de entrada para el **Tema 12 (Configuración de DIALux)**.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Integra y formaliza gráficamente todo el **Bloque 1: Instalaciones eléctricas** (Temas 1 a 10): magnitudes, sistemas de suministro, normativa, cargas, conductores, protecciones, criterios de trazo, diseño integrado y sistema/cálculo de puesta a tierra.
- **Competencias que desarrolla:** Lectura y elaboración de esquemas normalizados, auditoría de integridad documental multidisciplinar, control de calidad asistido con IA y preparación de datos estructurados para herramientas lumínicas y BIM.
- **Conexión con el tema anterior y posterior:**
  - *Tema anterior:* **Tema 10. Cálculo de resistencia de puesta a tierra** (Bloque 1, 10/11), cuyos resultados de esquema de conexión, electrodos, resistencia objetivo y secciones de enlace/PE se plasman de forma obligatoria en la cabecera del diagrama unifilar.
  - *Tema posterior:* **Tema 12. Configuración de DIALux** (Bloque 2: Modelado en DIALux, Tema 1 de 5; Tema 12 de 50 del programa). Los grupos y circuitos de alumbrado normal y de emergencia definidos y validados aquí en el unifilar y cuadro de cargas serán el marco técnico de potencia, zonificación y control al configurar el proyecto lumínico en DIALux.
- **Evidencia de aprendizaje que dejará el alumnado:** Dos piezas de cierre del Bloque 1 en su portafolio del programa: (1) el Informe de Auditoría y Esquema Unifilar Corregido del caso *Clínica Norte Salud*, y (2) la Matriz de Coherencia y Ficha Puente de Circuitos de Alumbrado hacia DIALux (Bloque 2).

---

## Siguientes pasos para el formador

1. **Preparar las láminas del caso «Clínica Norte Salud»** (extracto unifilar CAD/PDF, tabla Excel y recorte de plano de planta) verificando que las 7 discrepancias sean nítidas y no haya errores involuntarios adicionales.
2. **Revisar la tabla de símbolos IEC 60617 y ANSI/IEEE** que se proyectará en la diapositiva 3 para garantizar exactitud gráfica antes de clase.
3. **Asegurar la recopilación de la evidencia final del Bloque 1** (memoria preliminar + cuadro de cargas + diagrama unifilar completo) de cada alumno como cierre evaluativo antes de pasar al Bloque 2.
4. **Advertir al alumnado sobre la preparación del Bloque 2:** recordar que para la próxima sesión (**Tema 12. Configuración de DIALux**) deberán tener verificada su instalación de DIALux evo y a mano su Ficha Puente de Circuitos de Alumbrado generada en la Actividad 3.
5. **Reiterar el principio de responsabilidad técnica:** recordar al despedir el bloque eléctrico que ni un buen unifilar ni un posterior cálculo lumínico en DIALux o modelo 3D en Revit sustituyen la validación reglamentaria del técnico competente según la jurisdicción del proyecto.
