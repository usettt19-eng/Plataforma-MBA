# Tema 3. Tubos: tomacorrientes, alumbrado y acometidas

## 1. Ficha del tema

| Campo | Detalle |
| :--- | :--- |
| **Título del tema** | Tubos: tomacorrientes, alumbrado y acometidas |
| **Bloque y posición dentro del programa** | Bloque 3: Modelado 3D – Revit MEP eléctricas — Tema 3 de 5 (Tema 19 de 50 del programa) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Haber completado los Temas 1 y 2 de este bloque (modelo coordinado con ARQ/EST, equipos eléctricos, mecanismos, luminarias y tipos configurados de `Conduit with Fittings` y `Cable Trays`), además de lectura de diagramas unifilares y cuadros de cargas (Bloque 1). |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado será capaz de trazar redes tridimensionales diferenciadas de tubos y canalizaciones para fuerza/tomacorrientes, alumbrado normal/emergencia y acometidas principales en Revit MEP, controlando cotas de elevación, cruces con estructura, parámetros `Service Type` y trazabilidad respecto a los circuitos eléctricos lógicos del proyecto. |

---

## 2. Objetivos de aprendizaje

Al completar esta sesión de 4 horas, el alumnado será capaz de:

1. **Trazar** recorridos tridimensionales de tubos para circuitos de tomacorrientes y fuerza desde subtableros hasta cajas de mecanismos mediante herramientas de enrutado paralelo, bajantes por tabiques y control de elevaciones *(Nivel de Bloom: Aplicar)*.
2. **Diferenciar** físicamente los recorridos 3D de alumbrado normal frente al alumbrado de emergencia/evacuación en el plenum de falso techo, respetando holguras frente a conductos de climatización y protección contra incendios *(Nivel de Bloom: Analizar)*.
3. **Modelar** trazados de acometidas principales y alimentadores de potencia (*Feeders*) entre centro de transformación/CGP, CGBT y subtableros, incorporando reservas de paso de vigas/forjados (*sleeves*) y sectorización cortafuegos *(Nivel de Bloom: Aplicar)*.
4. **Parametrizar** sistemáticamente `Service Type` y parámetros compartidos de identificación (`Circuito_ID`, `Tablero_Origen`) para mantener trazabilidad demostrable entre la geometría física de los tubos y los circuitos lógicos del esquema unifilar *(Nivel de Bloom: Crear)*.
5. **Auditar** recorridos 3D de canalizaciones mediante tablas de coherencia y prompts anonimizados en ChatGPT/Claude, verificando de forma independiente que ningún trazado modelado en BIM sustituye el cálculo reglamentario de llenado, caída de tensión o resistencia al fuego *(Nivel de Bloom: Evaluar)*.

---

## 3. Contenidos esenciales

### 3.1. Estrategia de trazado 3D para fuerza y tomacorrientes

#### Explicación breve y clara
El trazado de fuerza y tomacorrientes conecta los subtableros de planta con las bases de enchufe (`Electrical Fixtures`) y equipos terminales (climatización, maquinaria, puntos de carga). En edificación terciaria o industrial, rara vez resulta eficiente modelar cientos de tubos individuales desde el cuadro hasta cada enchufe sin jerarquía: la estrategia profesional combina **troncales principales sobre bandeja o batería de tubos paralelos** (`Parallel Conduits`) por pasillos de circulación a cota alta de plenum, con **derivaciones locales en tubo rígido o flexible** (p. ej., Ø $20\text{–}25\text{ mm}$) que descienden verticalmente por tabiques o patinillos hasta la cota de mecanismo ($+0{,}30\text{ m}$ o $+1{,}10\text{ m}$ sobre $\text{NPT}$). Durante el dibujo (`Draw Conduit`), el proyectista debe vigilar si la cota introducida corresponde al eje del tubo (`Middle Elevation`) o a su generatriz inferior (`Bottom Elevation`), especialmente cuando varios tubos cruzan por encima de vigas o bajo conductos de ventilación.

#### Conceptos clave
- **Trazado troncal con derivación (*Trunk & Branch*):** Organización jerárquica donde alimentadores o líneas troncales discurren agrupados por pasillos técnicos y se bifurcan por zonas hacia receptores finales, reduciendo congestión en falso techo.
- **Tubos paralelos (*Parallel Conduits*):** Herramienta nativa de Revit MEP que replica paralelamente una serie de conductos manteniendo separación constante horizontal (`Horizontal Offset`) y vertical (`Vertical Offset`) por capas.
- **Cota de referencia (`Middle` vs. `Bottom Elevation`):** Control numérico imprescindible para garantizar espacio libre bajo viga o sobre perfiles de falso techo; la `Bottom Elevation` manda cuando se apoya sobre bandejas o soportes tipo carril.
- **Bajantes en tabiquería vs. canalización vista:** Distinción constructiva entre tubos empotrados dentro del espesor de tabique hueco (verificando que el diámetro exterior más boquilla cabe en el perfil metálico disponible) y tubería vista en garajes o talleres.

#### Definiciones necesarias
- **Batería de tubos (*Conduit Rack*):** Conjunto ordenado de múltiples tubos paralelos tendidos a la misma cota sobre un soporte común horizontal, con separación entre ejes suficiente para alojar acoplamientos, abrazaderas y curvas paralelas concéntricas.
- **Generatriz inferior (*Bottom of Conduit - BOC*):** Cota correspondiente al punto más bajo de la superficie exterior del tubo, referencia real para detectar interferencias con falsos techos, luminarias o vigas inferiores.

#### Ejemplo práctico realista
En la planta primera de oficinas ($\text{NPT} = +3{,}80\text{ m}$, falso techo a $+6{,}50\text{ m}$, es decir, $2{,}70\text{ m}$ libres, y cara inferior de viga descolgada a $+6{,}95\text{ m}$), salen 4 circuitos de tomacorrientes desde el subtablero `SP-P1` hacia cuatro zonas de puestos de trabajo. El proyectista traza 4 tubos paralelos `Tubo-LSZH-Fuerza` de Ø $25\text{ mm}$ utilizando `Parallel Conduits` con separación entre ejes de $55\text{ mm}$ y fija `Middle Elevation = +2,95 m` respecto a `N01-NPT` (equivalente a $+6{,}75\text{ m}$ absolutos, quedando $25\text{ cm}$ sobre el falso techo y $20\text{ cm}$ libres por debajo de la viga). Al llegar a la vertical de los tabiques de cartón-yeso (espesor de cámara interior $70\text{ mm}$), cada tubo gira y desciende verticalmente hasta $0{,}30\text{ m}$ sobre `N01-NPT` conectando en la caja de mecanismo correspondiente.
*Nota de verificación normativa:* El número máximo de conductores por tubo, factor de llenado (p. ej., $40\,\%$ o criterio según reglamento), diámetro mínimo admisible y separación respecto a tuberías de agua/gas son ejemplos ilustrativos; deben verificarse siempre con la normativa vigente en el país aplicable (p. ej., REBT en España, IEC 60364 o NEC/NFPA 70).

#### Errores frecuentes
- Modelar bajantes de Ø $32\text{ mm}$ o Ø $40\text{ mm}$ empotrados dentro de tabiques de ladrillo o cartón-yeso con cámara útil de $46\text{ mm}$, imposibles de ejecutar sin romper la estabilidad o aislamiento del tabique.
- Olvidar activar el desfase automático de plano (`Offset` / `Elevation`) al hacer clic en un conector vertical de tablero, provocando un choque en diagonal o errores de enrutado.
- Trazar tubos exactamente pegados a la cara superior del falso techo (`BOC = +2,70 m`) sin dejar espacio para las luminarias empotradas ni para las varillas de suspensión del propio techo.
- Usar curvas continuas libres sin respetar la alineación de paso entre tuberías de agua fría/ACS o conductos de climatización situados en el mismo pasillo.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué en cruces críticos de plenum resulta más fiable controlar la `Bottom Elevation` de una batería de tubos que guiar el trazado a ojo en vista 3D?
2. ¿Qué ventaja operativa aporta la herramienta `Parallel Conduits` frente a dibujar y alinear uno por uno cuatro circuitos de tomacorrientes paralelos?
3. ¿Qué comprobación geométrica debes realizar en el modelo arquitectónico antes de trazar una bajante empotrada en un tabique interior?

---

### 3.2. Trazado 3D de alumbrado normal y alumbrado de emergencia

#### Explicación breve y clara
Aunque en planta de techo reflejado (*RCP*) los circuitos de alumbrado normal y de alumbrado de emergencia comparten a menudo el mismo pasillo de distribución, en la realidad constructiva y normativa requieren **diferenciación estricta**. En función del reglamento aplicable, los circuitos de alumbrado de emergencia suelen exigir canalización independiente o cable con resistencia al fuego (AS+, RF/PH según norma aplicable), además de circuitos de alimentación dedicados y origen protegido diferente en el cuadro. En Revit MEP, modelar ambos sistemas sobre planos de altura claramente coordinados (por ejemplo, alumbrado normal a $+3{,}05\text{ m}$ desde $\text{NPT}$ y emergencia a $+3{,}15\text{ m}$ o en tubo paralelo con código cromático distinto) permite inspeccionar colisiones en el plenum saturado sin confundir las redes ni omitir la conexión real con las luminarias empotradas desde la cara superior del falso techo.

#### Conceptos clave
- **Independencia de canalizaciones (Normal vs. Emergencia):** Separación física en conductos diferenciados o compartimentos específicos que impide el deterioro simultáneo y permite filtrar ambos sistemas en vistas y mediciones.
- **Coordinación en plenum de techo:** Reserva ordenada de franjas de altura (*zoning* MEP) entre rociadores/climatización, bandejas, tubos de alumbrado y el cuerpo empotrado de las luminarias sobre el falso techo.
- **Conexión desde falso techo a luminaria:** Empleo de caja de derivación accesible en plenum con latiguillo corto/tubo flexible hacia la luminaria (o conexión directa al conector de la familia si el detalle constructivo del proyecto lo exige).
- **Pendientes y desvíos en pasillos técnicos:** Aunque los tubos eléctricos no conducen fluidos por gravedad (salvo casos especiales de drenaje en intemperie/túneles con ligera pendiente para condensaciones), sí utilizan cambios de cota escalonados o en ángulo ($30^\circ / 45^\circ$) para sortear obstáculos existentes en el plenum.

#### Definiciones necesarias
- **Plenum de instalaciones:** Espacio técnico comprendido entre la cara superior del falso techo arquitectónico y la cara inferior de la losa estructural o descuelgue de vigas, donde conviven alumbrado, climatización, detección de incendios y fontanería.
- **Zonificación vertical de servicios (*MEP Height Zoning*):** Acuerdo de coordinación BIM que asigna bandas de altura fijas por disciplina (p. ej., rociadores pegados a losa, conductos de aire debajo, bandejas eléctricas y tubos de alumbrado en franja intermedia accesible).

#### Ejemplo práctico realista
En la planta baja de un edificio docente ($\text{NPT} = 0{,}00\text{ m}$, falso techo a $+2{,}80\text{ m}$, altura total libre a forjado $+3{,}65\text{ m}$), el plenum disponible mide $850\text{ mm}$ de altura, ocupado parcialmente por un conducto de ventilación de $400\times 250\text{ mm}$ cuyo fondo está a $+3{,}20\text{ m}$ y por luminarias LED empotradas que sobresalen $110\text{ mm}$ por encima del techo (hasta $+2{,}91\text{ m}$). El equipo eléctrico asigna:
- **Alumbrado Normal** (`Service Type = ALUMBRADO-NORMAL`): tubo LSZH Ø $20\text{ mm}$ a cota eje $+3{,}05\text{ m}$ sobre `N00-NPT`, pasando limpio bajo el conducto de clima ($+3{,}20\text{ m}$) y por encima del cuerpo de luminaria ($+2{,}91\text{ m}$).
- **Alumbrado de Emergencia** (`Service Type = ALUMBRADO-EMERGENCIA`): tubo independiente Ø $20\text{ mm}$ con cable resistente al fuego en cota paralela $+3{,}05\text{ m}$ (desplazado $100\text{ mm}$ lateralmente) hasta cada luminaria de evacuación y señalización.
*Nota de verificación normativa:* La necesidad de cable resistente al fuego, canalización independiente, autonomía mínima (p. ej., $1\text{ h}$) y niveles mínimos de iluminancia de emergencia debe comprobarse siempre con la legislación vigente aplicable al país y uso del edificio (p. ej., REBT ITC-BT-28 y CTE DB-SI en España, o normativa equivalente).

#### Errores frecuentes
- Conectar tubos rígidos de alumbrado normal y emergencia dentro del mismo conducto en proyectos donde la normativa o especificación exige separación física entre circuitos de seguridad y normales.
- Trazar tubos horizontales a cota $+2{,}85\text{ m}$ atravesando directamente el cuerpo superior de luminarias empotradas ($+2{,}80\text{ m} \to +2{,}91\text{ m}$) sin verificar su altura real en sección.
- Llevar un único tubo continuo atravesando directamente luminarias tipo panel LED sin contemplar cajas de derivación accesibles o longitud de latiguillo flexible para permitir el desmontaje del panel en mantenimiento.
- Ignorar la presencia de descuelgues de conductos de aire o bandejas principales y modelar el tubo por el eje geométrico sin comprobar la sección transversal.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué tres cotas límite necesitas conocer en un plenum antes de fijar la elevación de los tubos de alumbrado?
2. ¿Por qué conviene separar en conductos e identificadores distintos el alumbrado normal y el alumbrado de emergencia aunque compartan zona de pasillo?
3. ¿Qué ventaja constructiva aporta terminar el tramo rígido en una caja accesible sobre el falso techo antes de bajar con tramo flexible hacia una luminaria registrable?

---

### 3.3. Acometidas principales, alimentadores de potencia (*Feeders*) y pasos constructivos

#### Explicación breve y clara
Las **acometidas principales** (desde el Centro de Transformación o Caja General de Protección hasta el CGBT) y los **alimentadores de potencia (*Feeders*)** entre el CGBT y los subtableros de planta o grandes cargas (enfriadoras, ascensores, grupos de presión) presentan exigencias espaciales muy superiores a los circuitos terminales. Hablamos de conductos de Ø $50\text{ a }110\text{ mm}$ (o múltiples tubos en paralelo por fase/terna según cálculo), bancos de tubos enterrados bajo solera o bandejas portacables dedicadas de gran anchura. En su trazado 3D en Revit MEP, no basta con unir dos cuadros: hay que definir **patinillos verticales (*risers*)** alineados planta a planta, prever **pasos de viga o losa (*sleeves*/pasatubos)** coordinados con Estructura antes del hormigonado, y registrar las **penetraciones en muros o forjados cortafuegos** para prever sellados intumescentes y evitar que las instalaciones propaguen humo o fuego entre sectores de incendio.

#### Conceptos clave
- **Montantes verticales (*Risers*):** Trazados verticales continuos a través de patinillos o conductos técnicos registrables que comunican el CGBT en sótano o planta baja con los subtableros de plantas superiores.
- **Pasatubos o camisas (*Sleeves*) en estructura:** Tubos de reserva o huecos coordinados con el ingeniero estructural cuando una acometida o batería de tubos debe atravesar una losa o el alma de una viga, respetando zonas libres de armado crítico.
- **Sectorización cortafuegos (*Firestopping*):** Identificación de puntos donde la canalización cruza un muro o forjado resistente al fuego (EI) para garantizar la inserción de collarines, masillas o sacos intumescentes.
- **Bancos de tubos enterrados (*Duct Banks*):** Agrupaciones paralelas de tubos corrugados o rígidos de gran diámetro (p. ej., Ø $90\text{–}160\text{ mm}$) bajo cota $\pm 0{,}00\text{ m}$ con separación para disipación térmica y arquetas de tiro/registro.

#### Definiciones necesarias
- **Acometida / Derivación individual / Alimentador (*Feeder*):** Canalización eléctrica de gran capacidad que transporta energía desde el punto de entrega o cuadro principal hasta los cuadros secundarios de distribución; exige cálculo independiente de caída de tensión, cortocircuito y disipación térmica por agrupamiento.
- **Patín o patinillo técnico (*Shaft*):** Hueco vertical arquitectónico o constructivo reservado exclusivamente para el paso vertical accesible y registrable de canalizaciones entre plantas.

#### Ejemplo práctico realista
Para alimentar el subtablero de planta segunda `SP-P2` ($63\text{ kVA}$ trifásico $400/230\text{ V}$ según cálculo del Bloque 1) desde el `CGBT-01` en planta baja, el proyectista traza una acometida interior mediante tubo rígido de acero galvanizado Ø $63\text{ mm}$ (diámetro exterior real $\approx 63{,}5\text{ mm}$) con `Service Type = ACOMETIDA-ALIMENTADOR`:
1. Sale por la parte superior del `CGBT-01` hasta la bandeja principal de sótano/planta baja a cota $+2{,}90\text{ m}$.
2. Recorre $14\text{ m}$ por el pasillo técnico, atraviesa un muro de sectorización EI-120 del cuarto eléctrico (dejando prevista marca de sellado cortafuegos en parámetro `Paso_Sector_Incendios = Sí`) y gira hacia el patinillo vertical eléctrico (`Eje C-3`).
3. Al llegar a una viga de canto de $600\text{ mm}$ que cruza el corredor antes del patinillo, en lugar de atravesar la viga arbitrariamente, el proyectista comprueba si pasa por debajo ($200\text{ mm}$ libres sobre el falso techo) o, de ser imposible por falta de altura, solicita a Estructura un pasatubos circular en el tercio central neutro de la viga a cota exacta $+3{,}05\text{ m}$, documentando la solicitud de reserva (*Builder's Work / Void Request*).
*Nota de verificación normativa:* Las condiciones de pasos de sector de incendios, resistencia al fuego de cables de seguridad, separación en zanjas enterradas y diámetros mínimos de acometidas son orientativas y deben comprobarse con el reglamento vigente del país (REBT, CTE DB-SI, IEC 60364 o NFPA 70) y con el cálculo estructural aprobado.

#### Errores frecuentes
- Perforar indiscriminadamente vigas descolgadas, pilares o losas postensadas en Revit MEP sin emitir solicitud coordinada de hueco/pasatubos al equipo de Estructura.
- Trazar acometidas verticales desplazadas horizontalmente entre planta baja y planta segunda porque no se comprobó la alineación vertical del patinillo en todos los niveles.
- Modelar curvas cerradas en tubos de Ø $63\text{ mm}$ o Ø $90\text{ mm}$ pegadas a la tapa del cuadro sin comprobar si el cable multipolar real permite ese radio de doblado ni espacio para peinado de fases dentro de la envolvente.
- Omitir la identificación de cruces con muros o forjados de sectorización contra incendios, provocando olvidos costosos de sellado cortafuegos en presupuesto y obra.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué riesgo constructivo y estructural provoca trazar una batería de acometidas atravesando vigas de hormigón en Revit sin coordinar previamente pasatubos con Estructura?
2. ¿Cómo verificarías rápidamente en Revit que un patinillo vertical eléctrico mantiene continuidad limpia desde sótano hasta planta tercera sin chocar con un forjado o viga de borde?
3. ¿Qué datos constructivos adicionales conviene asociar a una acometida principal cuando atraviesa un cerramiento de sector de incendios?

---

### 3.4. Control de cotas, pasos de viga, `Service Type` y coherencia entre geometría y circuitos

#### Explicación breve y clara
Existe una particularidad arquitectónica dentro de Revit MEP que todo proyectista eléctrico debe dominar para no caer en falsas expectativas: **en Revit, los circuitos eléctricos lógicos (`Electrical Circuits`) y los tubos/bandejas físicos (`Conduits` / `Cable Trays`) son dos entidades independientes**. A diferencia de climatización o fontanería —donde al borrar o cambiar el caudal de un difusor el conducto conectado hereda datos automáticamente—, en electricidad un circuito lógico conecta conectores eléctricos del tablero y las tomas (generando cables esquemáticos `Wire` y cuadros de cargas orientativos), mientras que el tubo 3D es una red geométrica separada. Por eso, el único modo profesional de mantener **coherencia demostrable entre la geometría 3D y los circuitos del esquema unifilar** es clasificar rigurosamente cada tramo mediante **`Service Type` (`Tipo de servicio`)**, parámetros compartidos de trazabilidad (`Circuito_ID`, `Tablero_Origen`, `Seccion_Ref`) y filtros visuales, realizando comprobaciones cruzadas con tablas exportadas (donde ChatGPT o Claude pueden asistir sobre datos anonimizados para detectar circuitos huérfanos o tubos sin asignar, siempre con verificación final del técnico).

#### Conceptos clave
- **Independencia nativa circuito lógico vs. tubo 3D:** Comprensión realista de que Revit no actualiza automáticamente el diámetro del tubo cuando cambia la potencia de un circuito ni deduce por sí solo qué circuito lógico viaja por dentro de qué tubo físico.
- **`Service Type` (Tipo de servicio):** Parámetro nativo de sistema en `Conduits` y `Cable Trays` utilizado para clasificar cada tramo (p. ej., `FUERZA-NORMAL`, `ALUMBRADO-NORMAL`, `ALUMBRADO-EMERGENCIA`, `ACOMETIDA-BT`, `DATOS`).
- **Parámetros compartidos de trazabilidad (`Circuito_ID` / `Tablero_Origen`):** Campos alfanuméricos asignados a los segmentos y uniones de tubo para vincular inequívocamente cada recorrido físico con el circuito correspondiente del diagrama unifilar (Bloque 1).
- **Auditoría tabular con IA sobre datos anonimizados:** Exportación a CSV/Excel de la tabla de circuitos lógicos y la tabla de tramos de tubos (sin nombres de cliente ni direcciones reales) para que ChatGPT/Claude detecte discrepancias de códigos `Circuito_ID` antes de la revisión técnica final humana.

#### Definiciones necesarias
- **Circuito eléctrico lógico (`Electrical Circuit`):** Agrupación de conectores de carga asignada a un polo o circuito de un tablero dentro del *System Browser* de Revit, responsable de los diagramas esquemáticos de cableado (`Wire`) y tablas de panel.
- **Coherencia modelo-esquema:** Grado de correspondencia verificable entre cada circuito reflejado en el diagrama unifilar y memoria de cálculo (Bloque 1), su carga en el tablero de Revit y el recorrido físico 3D modelado en tubos y bandejas.

#### Ejemplo práctico realista
En una planta de oficinas se han definido 8 circuitos en el subtablero `SP-P1`: `C1` a `C4` (Alumbrado normal), `CE1` (Alumbrado emergencia) y `F1` a `F3` (Tomacorrientes). Como Revit no enlaza nativamente `Electrical Circuit C1` con el `Conduit` físico, el equipo implanta una matriz estricta de parámetros en cada tramo modelado:
- `Service Type`: `ALUMBRADO-NORMAL` / `ALUMBRADO-EMERGENCIA` / `FUERZA-NORMAL`.
- `Tablero_Origen`: `SP-P1`.
- `Circuito_ID`: `SP-P1 / C1` (o `SP-P1 / F1–F2` cuando dos circuitos discurren por tubos paralelos identificados individualmente).
- `Seccion_Ref`: `3G1,5 mm2` o `3G2,5 mm2` (valor traído del cálculo externo del Bloque 1, nunca deducido ciegamente por el 3D).
A continuación, mediante filtros de vista por `Service Type`, Fuerza se muestra en azul, Alumbrado normal en naranja, Emergencia en rojo y Acometidas en magenta. Al final del día, el modelador exporta dos listados CSV anonimizados (`Lista_Circuitos_Unifilar.csv` y `Lista_Tubos_Revit.csv`) y pide a Claude identificar qué circuitos del unifilar carecen de tramo físico asignado en `Circuito_ID`, descubriendo rápidamente que el circuito `F3` tiene 6 tomas modeladas pero ningún tubo conectado hasta `SP-P1`.

#### Errores frecuentes
- Suponer que al conectar un tubo físicamente al `Conduit Connector` de un enchufe y de un tablero, Revit crea automáticamente el circuito eléctrico lógico (o viceversa, que crear el circuito lógico dibuja automáticamente el tubo 3D).
- Dejar el campo `Service Type` en blanco o con el texto por defecto en todos los tubos del proyecto, impidiendo aplicar filtros de color, organizar vistas en el Bloque 4 o separar cómputos por sistema.
- Usar el parámetro `Comments` de forma libre e inconsistente (`alumbrado`, `Alum.`, `iluminacion p1`) en lugar de un catálogo cerrado de valores en `Service Type` y parámetros compartidos estandarizados.
- Confiar en que una tabla revisada por IA demuestra que el llenado de tubo o la caída de tensión cumplen la norma sin comprobar manualmente las fórmulas y límites reglamentarios.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué en Revit MEP la conectividad de un circuito eléctrico lógico no garantiza automáticamente que exista un tubo físico 3D correctamente enlazado entre esos elementos?
2. ¿Qué papel cumplen `Service Type` y un parámetro compartido como `Circuito_ID` para conectar geométricamente el modelo 3D con el diagrama unifilar del Bloque 1?
3. ¿Cómo puedes aprovechar un asistente de IA de forma segura para detectar omisiones entre los circuitos del proyecto y los tramos de tubo modelados en Revit?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** combina diagnóstico sobre inconsistencias reales entre circuitos y tubos, microlecciones orientadas al trazado 3D diferenciado, práctica acumulativa en Revit MEP sobre el modelo del Tema 2 y resolución colaborativa de un edificio multi-planta con cruces estructurales y verificación con IA.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
| :--- | :---: | :--- | :--- |
| **1. Apertura, diagnóstico y activación** | 00:00 – 00:25 (25 min) | Conecta con el modelo equipado del Tema 2, realiza el sondeo diagnóstico inicial sobre circuitos vs. tubos y lanza la **Actividad 1**. | Analiza un modelo o captura comparativa donde los circuitos lógicos están completos pero los tubos 3D presentan mezclas de servicio y choques con vigas; identifica fallos en parejas. |
| **2. Microlearning técnico I (3.1 y 3.2)** | 00:25 – 00:55 (30 min) | Demuestra en directo el trazado de fuerza con `Parallel Conduits`, bajantes en tabiques por cota $\text{NPT}$ y diferenciación en plenum entre alumbrado normal y emergencia. | Observa y replica la lectura de `Bottom Elevation` vs. `Middle Elevation`, comprobando holguras entre falso techo, luminarias y conductos vinculados. |
| **3. Práctica guiada de aplicación (Actividad 2)** | 00:55 – 01:40 (45 min) | Lanza la **Actividad 2** sobre el archivo `Apellido_Nombre_T2_Equipado.rvt`, supervisa cotas de plenum, conexiones a cuadros y clasificación por `Service Type`. | Modela recorridos 3D completos en una planta tipo para tomacorrientes (`FUERZA-NORMAL`), alumbrado normal, alumbrado de emergencia y acometida al subtablero asignando `Service Type` y `Circuito_ID`. |
| **Descanso breve** | 01:40 – 01:55 (15 min) | Pausa técnica y preparación de las tablas/planos del caso práctico del Tema 3. | Descanso activo e intercambio informal. |
| **4. Microlearning técnico II (3.3 y 3.4)** | 01:55 – 02:20 (25 min) | Explica estrategias de acometidas y montantes verticales (*risers*), coordinación de pasos de viga (*sleeves*), sectorización cortafuegos y trazabilidad `Service Type` + parámetros compartidos frente a circuitos lógicos. | Aplica filtros temporales de color por `Service Type` en su vista 3D y verifica la correspondencia con un listado de circuitos tipo unifilar. |
| **5. Resolución del caso práctico** | 02:20 – 03:05 (45 min) | Presenta el caso **«Parque Tecnológico Alcobendas B2»**, aporta las cotas de viga, plenum y tabla de circuitos, y guía la resolución de conflictos en equipos. | En equipos de 3-4 personas, diseña la reordenación de cotas por servicios, resuelve la interferencia con viga de la acometida y audita inconsistencias de circuitos mediante prompt anonimizado. |
| **6. Puesta en común y auditoría cruzada** | 03:05 – 03:25 (20 min) | Modera la exposición de 3 equipos, compara las propuestas de paso de viga/sectorización y recalca que el control visual 3D no valida secciones ni llenados reglamentarios. | Expone su estrategia de zonificación vertical (4 min/equipo), contrasta los hallazgos de la auditoría CSV con IA y consensúa criterios de nomenclatura. |
| **7. Transferencia a proyecto real (Actividad 3)** | 03:25 – 03:45 (20 min) | Guía la **Actividad 3** proporcionando la matriz de zonificación de alturas y nomenclatura de `Service Type` para el proyecto real o integrador del alumnado. | Define su tabla propia de bandas de elevación MEP, nomenclatura `Service Type` / `Circuito_ID` y prueba un prompt anonimizado para verificar cobertura de circuitos. |
| **8. Síntesis, evaluación sumativa y cierre** | 03:45 – 04:00 (15 min) | Sintetiza las 5 ideas clave del tema, aplica la prueba sumativa corta + autoevaluación y enlaza con el **Tema 4** (uniones de tubos y errores de enrutamiento). | Responde el cuestionario técnico de cierre y autoevaluación; guarda su modelo con rutas trazadas listo para optimizar uniones en el Tema 4. |

*Suma total verificada: $25 + 30 + 45 + 15 + 25 + 45 + 20 + 20 + 15 = \mathbf{240\text{ minutos (4 horas)}}$.*

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «Circuito completo en tabla, caos invisible en 3D»

- **Nombre:** Circuito completo en tabla, caos invisible en 3D.
- **Objetivo:** Reconocer la desconexión nativa entre los circuitos lógicos de Revit y las redes físicas de conductos, identificando colisiones y mezclas de servicios en un modelo preliminar.
- **Instrucciones para el alumnado:**
  1. Abrid en parejas el archivo de muestra `Kit-T3-ModeloInconsistente.rvt` (o examinad las 3 vistas proyectadas: Planta de Alumbrado, Sección de Pasillo y Navegador de Sistemas).
  2. Comprobad que en el *System Browser* los 6 circuitos de planta aparecen completos y balanceados, pero inspeccionad la vista 3D y la sección transversal para localizar 4 errores graves de modelado físico: (a) un circuito sin tubo trazado, (b) alumbrado normal y de emergencia agrupados bajo el mismo `Service Type`, (c) un tubo que atraviesa una viga estructural descolgada y (d) una bajante de Ø $40\text{ mm}$ atravesando horizontalmente un tabique delgado.
  3. Anotad en la ficha de trabajo por qué Revit no mostró ningún aviso eléctrico automático ante esos cuatro fallos físicos.
- **Materiales necesarios:** Archivo `Kit-T3-ModeloInconsistente.rvt` (o set de vistas PDF/imágenes de diagnóstico), ficha de trabajo, cronómetro de 10 min + 5 min de debate.
- **Tiempo estimado:** 15 minutos (integrados en la Fase 1).
- **Rol del formador:** Enfatizar con preguntas provocadoras la diferencia entre cálculo eléctrico, circuito lógico y geometría 3D (*«Si el panel de Revit dice que todo suma bien, ¿por qué en obra no cabe el tubo?»*).
- **Producto o entregable esperado:** Registro de las 4 discrepancias encontradas clasificando su impacto en obra, normativa a verificar y coordinación BIM.
- **Criterios de éxito:** Localización de al menos 3 de las 4 anomalías y explicación correcta de por qué los circuitos lógicos de Revit no controlan automáticamente la geometría ni la separación física de tubos.

---

### Actividad 2 (Aplicación técnica): «Trazado 3D diferenciado: fuerza, alumbrado y acometida»

- **Nombre:** Trazado 3D diferenciado: fuerza, alumbrado y acometida.
- **Objetivo:** Ejecutar recorridos 3D diferenciados por tipo de servicio, controlando elevaciones de plenum, paralelismo de conductos y trazabilidad mediante parámetros de circuito.
- **Instrucciones para el alumnado:**
  1. Abrid vuestro archivo `Apellido_Nombre_T2_Equipado.rvt` (o `Kit-T3-ModeloBase.rvt`) donde ya están insertados `CGBT-01`, `SP-P1`, luminarias y tomacorrientes.
  2. Trazad la **acometida/alimentador** desde `CGBT-01` hasta `SP-P1` en tubo Ø $50\text{ mm}$ (`Tubo-EMT-Alumbrado` o `Tubo-EMT-Fuerza`) asignando `Service Type = ACOMETIDA-BT` y `Circuito_ID = ACOM-SP-P1`, subiendo ordenadamente por el patinillo sin cruzar vigas descolgadas del vínculo `EST`.
  3. Trazad desde `SP-P1` dos tubos paralelos de Ø $25\text{ mm}$ (`Parallel Conduits`, separación $60\text{ mm}$, `Middle Elevation = +2,95 m`) con `Service Type = FUERZA-NORMAL` (`Circuito_ID = F1` y `F2`) y realizad al menos 2 bajantes verticales por tabiques hacia los tomacorrientes a $+0{,}30\text{ m}$.
  4. En la zona de techo reflejado (plenum entre $+2{,}70\text{ m}$ del falso techo y $+3{,}30\text{ m}$ de losa), trazad un recorrido de `ALUMBRADO-NORMAL` (Ø $20\text{ mm}$, `Circuito_ID = C1`) hacia 6 luminarias y un recorrido separado de `ALUMBRADO-EMERGENCIA` (Ø $20\text{ mm}$, `Circuito_ID = CE1`) hacia 2 luminarias de emergencia, verificando en sección que ninguno corta el cuerpo empotrado de las luminarias ni invade el conducto de clima vinculado.
  5. Aplicad un filtro de vista temporal por `Service Type` para distinguir visualmente los 4 servicios en una vista 3D isométrica.
- **Materiales necesarios:** Revit MEP, archivo base del Tema 2 con parámetros compartidos `Circuito_ID` y `Tablero_Origen` precargados, vínculo `EST` y `MEC` (climatización de referencia).
- **Tiempo estimado:** 45 minutos (Fase 3).
- **Rol del formador:** Guiar los primeros 5 minutos usando `Parallel Conduits` y la lectura en sección de `Bottom Elevation`; asistir en giros verticales desde conectores de cuadro y recordar guardar cambios antes de cada prueba.
- **Producto o entregable esperado:** Archivo `Apellido_Nombre_T3_Trazado3D.rvt` con los 4 sistemas trazados, filtrados por color y libres de colisiones graves en la sección analizada.
- **Criterios de éxito:** Trazados continuos desde cuadro hasta aparatos/luminarias; cero choques directos con vigas o conductos de clima en el corredor practicado; el $100\,\%$ de los tramos tiene cumplimentado `Service Type` y `Circuito_ID` coherentes.

---

### Actividad 3 (Transferencia a proyecto real): «Matriz de zonificación de alturas y auditoría de cobertura con IA»

- **Nombre:** Matriz de zonificación de alturas y auditoría de cobertura con IA.
- **Objetivo:** Definir un estándar replicable de cotas de plenum y clasificación `Service Type` para un proyecto real o el proyecto integrador, complementado con una verificación tabular asistida por IA.
- **Instrucciones para el alumnado:**
  1. Completad la **Plantilla de Zonificación de Canalizaciones y Trazabilidad** (Sección 8.3) adaptándola al edificio de vuestro proyecto integrador o a una obra real anonimizada (definiendo cota $\text{NPT}$, fondo de viga, cota de falso techo y franjas de elevación reservadas para acometidas, bandejas, fuerza y alumbrado).
  2. Tomad la tabla de ejemplo anonimizada `Muestra_Circuito_vs_Tubo.csv` (o exportad las tablas de vuestro modelo de práctica en 2 clics) y ejecutad un prompt en ChatGPT o Claude solicitando cruzar ambas listas para detectar qué circuitos declarados en el unifilar carecen de tramo físico asignado o tienen `Service Type` contradictorio.
  3. Contrastad manualmente la respuesta de la IA contra los datos originales y redactad una nota técnica recordando qué verificaciones reglamentarias (factor de llenado, caída de tensión, resistencia al fuego) quedan fuera del alcance tanto de Revit como de la IA.
- **Materiales necesarios:** Plantilla técnica (Sección 8.3), archivo `Muestra_Circuito_vs_Tubo.csv` anonimizado, acceso a ChatGPT o Claude.
- **Tiempo estimado:** 20 minutos (Fase 7).
- **Rol del formador:** Vigilar que ningún participante pegue datos reales de clientes o direcciones de obra en el chat de IA y verificar que el alumnado detecta manualmente al menos una limitación de la IA o un falso positivo si aparece.
- **Producto o entregable esperado:** Plantilla cumplimentada con bandas de elevación definidas + informe breve del cruce IA-humano sobre la cobertura de circuitos.
- **Criterios de éxito:** Bandas de altura matemáticamente coherentes (sin solape entre falso techo, luminarias y tubos), catálogo cerrado de `Service Type` y verificación humana explícita de la tabla cruzada.

---

## 6. Caso práctico

### Caso: Edificio Corporativo y Taller Tecnológico «Parque Tecnológico Alcobendas B2» — Cruce de vigas, mezcla de servicios e incoherencia de circuitos

#### Contexto empresarial
**TecnoInstalaciones Centro, S.L.** ejecuta el diseño BIM y la ingeniería de detalle de un edificio mixto de $3\,200\text{ m}^2$ compuesto por sótano técnico/garaje, planta baja de taller/laboratorio de prototipos y dos plantas superiores de oficinas. El equipo dispone del cuadro de cargas y diagrama unifilar aprobados en fase de proyecto (Bloque 1), del estudio de iluminación validado en DIALux (Bloque 2) y del modelo eléctrico equipado con tableros y luminarias (Temas 1 y 2). Para acelerar la entrega de la maqueta 3D coordinada (*LOD 300*), se incorporó a dos delineantes con poca experiencia en instalaciones MEP para modelar los tubos de fuerza, alumbrado y acometidas durante dos semanas.

#### Situación o problema
En la primera revisión interdisciplinar previa a la coordinación de obra, el director técnico detecta cuatro problemas severos en el modelo `EL-AlcobendasB2.rvt`:
1. **Colisión estructural de acometida:** Desde el `CGBT-01` (en sótano) parte una bandeja principal de $400\times 100\text{ mm}$ acompañada de 2 tubos paralelos de acero rígido Ø $63\text{ mm}$ (`Feeders` hacia `SP-P1` y `SP-Taller`) a una cota constante `Middle Elevation = +3,10 m` en planta baja. Sin embargo, el modelo estructural vinculado `EST` tiene una viga descolgada de hormigón armado en el eje `3` cuya cara inferior baja hasta $+2{,}95\text{ m}$ (siendo el falso techo de planta baja $+2{,}65\text{ m}$). La bandeja y los tubos atraviesan limpiamente $15\text{ cm}$ del hormigón de la viga sin pasatubos ni desvío.
2. **Mezcla de alumbrado normal y emergencia:** Los 14 circuitos de alumbrado normal y los 4 circuitos de emergencia de las plantas de oficinas fueron trazados juntos en tubos de Ø $16\text{ mm}$ bajo un único `Service Type = General` y sin parámetro `Circuito_ID`. Según el cálculo externo del Bloque 1, en uno de esos tramos estaban previstos $3\text{ circuitos}$ de alumbrado normal (9 conductores de $1{,}5\text{ mm}^2$) más un circuito de emergencia con cable resistente al fuego de $2{,}5\text{ mm}^2$ en el mismo tubo de Ø $16\text{ mm}$.
3. **Invasión del plenum y bajantes imposibles:** En planta 1, los tubos de fuerza hacia puestos de trabajo se dibujaron a $+2{,}72\text{ m}$ (con falso techo a $+2{,}70\text{ m}$ y luminarias LED de $105\text{ mm}$ de altura hasta $+2{,}805\text{ m}$), atravesando 22 luminarias. Además, 8 bajantes de Ø $32\text{ mm}$ para mesas de laboratorio se insertaron dentro de tabiques ligeros con montante de $48\text{ mm}$.
4. **Falsa sensación de completitud:** El coordinador observa 120 metros lineales de tubos en el 3D, pero al contrastar con los 38 circuitos del diagrama unifilar desconoce qué tramos corresponden a cada circuito y detecta que 5 circuitos de tomacorrientes dedicados del taller no tienen canalización modelada.

#### Datos disponibles

| Zona / Elemento | Cota / Dimensión en modelo actual | Cota / Condición constructiva real |
| :--- | :--- | :--- |
| **Planta Baja — Eje 3 (Viga descolgada)** | Bandeja y 2 tubos Ø $63\text{ mm}$ a eje $+3{,}10\text{ m}$ | Losa sup. $+3{,}55\text{ m}$; fondo de viga $+2{,}95\text{ m}$; falso techo $+2{,}65\text{ m}$ (margen bajo viga: $300\text{ mm}$) |
| **Planta 1 Oficinas — Plenum alumbrado/fuerza** | Tubos trazados a eje $+2{,}72\text{ m}$ | Falso techo $+2{,}70\text{ m}$; tope superior luminarias $+2{,}805\text{ m}$; fondo conducto clima $+3{,}15\text{ m}$; forjado sup. $+3{,}60\text{ m}$ |
| **Alumbrado Normal + Emergencia oficinas** | Tubo único Ø $16\text{ mm}$, `Service Type = General`, sin `Circuito_ID` | Exige circuitos separados por seguridad/mantenimiento y verificación reglamentaria de tubo (p. ej., mínimo Ø $20\text{–}25\text{ mm}$ según conductores) |
| **Bajantes a mesas de laboratorio (Taller)** | Tubo Ø $32\text{ mm}$ empotrado en tabique | Tabique con perfil interior de $48\text{ mm}$ (diámetro exterior tubo + acoplamiento $\approx 36\text{ mm}$, debilita placa y no admite caja) |
| **Trazabilidad Unifilar vs. Modelo 3D** | 38 circuitos en unifilar vs. tubos sin identificador `Circuito_ID` | Se dispone de `Unifilar_Circuitos.csv` y tabla `Revit_Conduits.csv` anonimizadas |

#### Preguntas de análisis
1. ¿Cabe geométricamente la bandeja de $400\times 100\text{ mm}$ y los dos tubos Ø $63\text{ mm}$ por debajo de la viga del eje 3 ($+2{,}95\text{ m}$) sin chocar con el falso techo ($+2{,}65\text{ m}$), o qué alternativa constructiva elegirías?
2. ¿Qué franja vertical exacta (expresada en cotas $\text{BOC}$ y eje respecto a $\text{NPT}$) queda realmente libre en Planta 1 para trazar alumbrado y fuerza sin chocar con las luminarias ($+2{,}805\text{ m}$) ni con el conducto de clima ($+3{,}15\text{ m}$)?
3. ¿Por qué el tubo único Ø $16\text{ mm}$ con 9 conductores normales más circuito de emergencia falla simultáneamente a nivel constructivo, de modelado BIM y de normativa eléctrica a verificar?
4. ¿Cómo resolverías las 8 bajantes de Ø $32\text{ mm}$ en el taller sabiendo que el perfil del tabique tiene solo $48\text{ mm}$?

#### Tarea a realizar
En equipos de 3-4 personas durante **45 minutos**, elaborad un **Plan de Reingeniería de Trazados 3D** para `EL-AlcobendasB2.rvt`:
1. **Resolución del cruce con viga en Planta Baja:** Calculad las cotas exactas de paso (alternativa de desvío bajo viga con bayoneta a $45^\circ$ frente a solicitud de pasatubos estructurales en viga), eligiendo la opción óptima y justificando holguras para soportes y luminarias.
2. **Esquema de zonificación de alturas en Planta 1:** Definid la tabla de bandas verticales (`Bottom` y `Middle Elevation`) para alumbrado normal, alumbrado de emergencia y batería de fuerza dentro de los $345\text{ mm}$ libres entre luminarias ($+2{,}805\text{ m}$) y conducto de clima ($+3{,}15\text{ m}$).
3. **Estrategia de separación de servicios, bajantes y diámetros:** Proponed el catálogo obligatorio de `Service Type`, la separación física entre alumbrado normal y emergencia (dimensionando de forma ilustrativa los tubos según el unifilar y recordando la verificación reglamentaria obligatoria) y la solución constructiva para las bajantes del taller (trasdosado técnico o canalización vista en tubo EMT sobre paramento/columna de bajada).
4. **Protocolo de auditoría Unifilar–Revit asistido por IA:** Redactad el prompt anonimizado exacto para cruzar `Unifilar_Circuitos.csv` y `Revit_Conduits.csv` junto con la lista de comprobaciones humanas obligatorias antes de dar el modelo por listo para el Tema 4.

#### Posibles soluciones o criterios de análisis
- **Cruce de viga en Planta Baja:** Entre el fondo de viga ($+2{,}95\text{ m}$) y el falso techo ($+2{,}65\text{ m}$) hay exactamente $300\text{ mm}$ libres. Una bandeja de $100\text{ mm}$ de alto necesita como mínimo otros $100\text{–}150\text{ mm}$ libres sobre ella para poder tender/peinar cables lateralmente (alrededor de $250\text{ mm}$ totales), además del perfil inferior del soporte ($40\text{ mm}$) y la altura de luminarias si coinciden debajo. Por tanto, pasar por debajo de la viga con la bandeja resulta muy justo o inviable si hay luminarias/soportes; la solución óptima es mantener los tubos Ø $63\text{ mm}$ y la bandeja por el pasillo lateral libre de viga o bajar ligeramente con bayoneta a $45^\circ$ a cota `BOC = +2,72 m` solo en zonas sin luminarias empotradas, o bien coordinar con Estructura pasatubos o ventana rectangular reforzada si el canto de viga lo permite tras cálculo estructural.
- **Zonificación en Planta 1:** El margen real entre el tope superior de las luminarias ($+2{,}805\text{ m}$) y el fondo del conducto de clima ($+3{,}15\text{ m}$) es de $345\text{ mm}$. Puede asignarse la banda inferior libre (`Middle Elevation = +2,92 m`, `BOC \approx +2,90 m`, dejando $95\text{ mm}$ sobre luminarias para latiguillos/cajas) a tubos de alumbrado normal y emergencia paralelos en plano horizontal, o escalonar fuerza a $+2{,}95\text{ m}$ y alumbrado a $+3{,}05\text{ m}$ manteniendo al menos $50\text{ mm}$ de holgura respecto al fondo del conducto de clima ($+3{,}15\text{ m}$).
- **Separación de servicios y bajantes:** Prohibir `Service Type = General`; implantar `ACOMETIDA-BT`, `FUERZA-NORMAL`, `ALUMBRADO-NORMAL` y `ALUMBRADO-EMERGENCIA`. Separar el circuito de emergencia en tubo independiente con cable resistente al fuego según reglamento vigente (ejemplo ilustrativo: REBT ITC-BT-28 en España — verificar país/edición) y corregir el tubo Ø $16\text{ mm}$ sobrecargado aumentando diámetro o dividiendo en tubos independientes según tabla de llenado calculada en Bloque 1. Para las bajantes de Ø $32\text{ mm}$ en el taller, cambiar de empotrado en tabique fino a instalación vista en tubo metálico `EMT` fijado superficialmente o mediante columna técnica bajante.
- **Cruce con IA:** El prompt anonimizado debe solicitar únicamente cruce de listas de códigos `Circuito_ID`, detección de `Service Type` inválidos y detección de circuitos del unifilar sin tramo 3D, prohibiendo a la IA aprobar secciones, radios o cumplimiento normativo.

#### Preguntas de reflexión final
1. ¿Qué coste económico y de retraso en obra evita detectar hoy una interferencia de una bandeja principal con una viga descolgada frente a descubrirlo cuando el instalador ya está montando soportes?
2. ¿Por qué establecer acuerdos previos de bandas de elevación (*MEP Height Zoning*) entre Electricidad, Climatización y Protección contra Incendios ahorra horas de retrabajo en Revit MEP?

---

## 7. Evaluación

### 7.1. Evaluación diagnóstica
Sondeo inicial de 3 preguntas (5 minutos en Fase 1):
1. Si dibujas un tubo conectando físicamente un tablero y un enchufe en Revit MEP, ¿crea Revit automáticamente el circuito eléctrico de potencia en la tabla del tablero? *(Respuesta esperada: No, son redes independientes)*.
2. ¿Qué magnitud vertical (`Top`, `Middle` o `Bottom Elevation`) debes verificar con prioridad cuando un tubo cruza por encima de un falso techo con luminarias empotradas? *(Respuesta esperada: Bottom Elevation)*.
3. ¿Qué parámetro nativo de `Conduits` y `Cable Trays` resulta indispensable rellenar para diferenciar fuerza, alumbrado normal, emergencia y acometidas sin usar textos inconsistentes en `Comments`? *(Respuesta esperada: Service Type)*.

### 7.2. Evaluación formativa
Observación directa del formador durante las Actividades 1 y 2 y el Caso práctico mediante lista de cotejo:
- Verifica el uso de `Parallel Conduits` con separación constructiva realista entre tubos.
- Comprueba en vistas de sección la ausencia de colisiones con falsos techos, luminarias, vigas estructurales y conductos de climatización.
- Revisa que alumbrado normal y emergencia disponen de tubos físicamente separados y `Service Type` diferenciados.
- Audita el llenado sistemático de `Circuito_ID` y la anonimización estricta al exportar CSV para análisis con IA.

### 7.3. Evaluación sumativa
Evaluación final ponderada en dos partes al cierre de la sesión (Fase 8):
1. **Entregable práctico en Revit y resolución del caso (65 %):** Archivo `Apellido_Nombre_T3_Trazado3D.rvt` (Actividad 2) + Plan de Reingeniería del caso *Parque Tecnológico Alcobendas B2*, evaluados según la rúbrica de la sección 7.4.
2. **Prueba técnica de cierre + Matriz de zonificación con auditoría IA (35 %):** Cuestionario de 5 ítems sobre cotas `BOC`, zonificación en plenum, pasatubos estructurales, `Service Type` y relación circuito-geometría + entregable de la Actividad 3.

### 7.4. Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
| :--- | :--- | :--- | :--- | :--- |
| **Trazado 3D de fuerza, alumbrado normal y emergencia** | Modela recorridos aleatorios o mezcla fuerza, alumbrado normal y emergencia dentro del mismo conducto o recorrido indiferenciado. | Traza los servicios por separado de forma básica, pero presenta desconexiones o falta de orden en los recorridos paralelos y bajantes. | Modela trazados ordenados y físicamente separados para tomacorrientes (`Parallel Conduits`), alumbrado normal, emergencia y acometidas con conexión a equipos y cajas. | Ejecuta recorridos jerarquizados (*Trunk & Branch*), optimizados para montaje en obra, con bajantes realistas respecto al espesor de tabiques y separación total de seguridad. |
| **Control de cotas y coordinación estructural/MEP** | Los tubos atraviesan vigas, losas, luminarias o conductos de climatización sin verificar cotas ni vistas de sección. | Controla elevaciones en planta de forma aproximada, pero mantiene choques puntuales con el cuerpo superior de luminarias o descuelgues de vigas. | Verifica `Bottom` y `Middle Elevation` en sección, respeta falso techo, luminarias, conductos vinculados y coordina pasos de viga o patinillos alineados. | Define una matriz matemática completa de bandas de elevación (*MEP Height Zoning*) libre de colisiones, identificando pasatubos estructurales y cruces cortafuegos. |
| **Clasificación por `Service Type` y coherencia de circuitos** | Deja `Service Type` vacío o genérico y no identifica a qué circuito o tablero pertenece cada tramo modelado. | Rellena `Service Type` en la mayoría de tramos, pero mantiene incoherencias con los circuitos del esquema unifilar o filtros incompletos. | Clasifica el $100\,\%$ de tubos y bandejas con catálogo cerrado de `Service Type`, `Circuito_ID` y `Tablero_Origen` coherentes con los circuitos del proyecto. | Establece trazabilidad bidireccional auditable entre unifilar, circuito lógico de Revit y geometría 3D mediante parámetros compartidos y filtros cromáticos listos para Bloque 4. |
| **Verificación crítica y uso responsable de IA** | Confía en que el trazado 3D valida diámetros y normativa o sube archivos confidenciales completos a la IA sin revisión. | Utiliza listas exportadas con IA, pero omite comprobar discrepancias o no aclara qué cálculos normativos deben validarse fuera de Revit. | Exporta tablas CSV anonimizadas para auditar cobertura circuitos-tubos con IA y verifica manualmente omisiones, llenados y normativa aplicable. | Realiza auditorías cruzadas exhaustivas sobre datos anonimizados, documenta falsos positivos/negativos de la IA y exige validación independiente de secciones y protecciones. |

### 7.5. Actividad de autoevaluación
En los últimos 5 minutos de la Fase 8, cada participante responde por escrito en su cuaderno o campus virtual:
1. *Al comprobar hoy en sección transversal las cotas de luminarias, conductos y vigas, ¿qué error de cálculo de holgura vertical detectaste que en vista de planta habría pasado desapercibido?*
2. *Explica brevemente qué diferencia práctica existe entre comprobar la conectividad de un circuito en el System Browser de Revit y comprobar la coherencia física de su canalización mediante `Service Type` y `Circuito_ID`.*
3. *Valora del 1 al 5 tu dominio actual del trazado 3D de canalizaciones diferenciadas antes de entrar en el Tema 4 (Uniones de tubos y resolución de errores de enrutamiento).*

---

## 8. Materiales y recursos

### 8.1. Guion estructurado de diapositivas

| Diapositiva | Título | Contenido clave y actividad asociada |
| :---: | :--- | :--- |
| **Slide 1** | Portada: Tubos — tomacorrientes, alumbrado y acometidas | Título, Bloque 3 (Tema 3/5), 5 objetivos medibles y cronograma de 240 minutos. |
| **Slide 2** | Circuito lógico vs. Tubo físico 3D (Actividad 1) | Diagnóstico de la desconexión nativa en Revit MEP y análisis de *Kit-T3-ModeloInconsistente.rvt*. |
| **Slide 3** | Estrategia *Trunk & Branch* y `Parallel Conduits` para fuerza | Trazado en batería, control de `Middle` vs. `Bottom Elevation` y espesor real de bajantes en tabiques. |
| **Slide 4** | Alumbrado normal vs. Alumbrado de emergencia en plenum | Esquema en corte con cotas reales: falso techo, altura de luminaria empotrada, conductos de clima y franja MEP libre. |
| **Slide 5** | Acometidas principales, *Risers*, *Sleeves* y sectorización | Trazado vertical por patinillos, solicitud de pasatubos en vigas a Estructura y marcado de pasos cortafuegos. |
| **Slide 6** | Control por `Service Type` y trazabilidad con el unifilar | Catálogo cerrado de valores `Service Type`, parámetros compartidos `Circuito_ID` / `Tablero_Origen` y filtros visuales de color. |
| **Slide 7** | Caso Parque Tecnológico Alcobendas B2 | Datos de cotas en PB y P1, tabla de incidencias y guía de trabajo para el Plan de Reingeniería de Trazados 3D. |
| **Slide 8** | Auditoría CSV con IA segura y enlace al Tema 4 | Flujo de cruce anonimizado Unifilar vs. Revit con ChatGPT/Claude, síntesis final y adelanto del Tema 4 (Uniones). |

### 8.2. Ficha de trabajo del alumnado
Documento de 2 páginas (PDF editable o impreso) compuesto por:
- **Sección A (Actividad 1):** Hoja de inspección de discrepancias entre *System Browser* y modelo 3D.
- **Sección B (Guía de cotas y comandos):** Recordatorio de atajos de `Draw Conduit`, `Parallel Conduits`, lectura de `BOC` y valores obligatorios de `Service Type`.
- **Sección C (Caso Parque Tecnológico Alcobendas B2):** Esquema en corte en blanco para acotar la banda de paso en Planta 1 y el cruce de viga en Planta Baja.
- **Sección D (Transferencia y cierre):** Ficha de auditoría CSV con IA y respuestas de autoevaluación.

### 8.3. Plantilla técnica práctica

```markdown
# MATRIZ DE ZONIFICACIÓN 3D DE CANALIZACIONES Y TRAZABILIDAD DE CIRCUITOS
Proyecto (código anonimizado): ___________________   Fecha: ____________   Proyectista: __________________

1. ZONIFICACIÓN VERTICAL EN PLENUM (EJEMPLO POR PLANTA TIPO)
- Nivel de referencia (NPT): +______ m   |   Cota falso techo: +______ m   |   Cota forjado sup.: +______ m
- Altura máxima cuerpo luminaria sobre falso techo: ______ mm (Cota tope: +______ m)
- Fondo de viga estructural / conducto clima más desfavorable: +______ m
- Franja asignada Acometidas/Bandejas (Bottom / Middle Elev.): +______ m / +______ m
- Franja asignada Alumbrado Normal (Middle Elev.): +______ m   |   Emergencia: +______ m
- Franja asignada Fuerza / Tomacorrientes (Middle Elev.): +______ m

2. CATÁLOGO CERRADO DE SERVICE TYPE Y PARÁMETROS DE COHERENCIA
| Service Type obligatorio | Color filtro vista | Parámetros requeridos en tramos |
| :--- | :--- | :--- |
| ACOMETIDA-BT | Magenta | Tablero_Origen + Circuito_ID + Paso_Sector_Incendios |
| FUERZA-NORMAL | Azul | Tablero_Origen + Circuito_ID + Seccion_Ref (verificada) |
| ALUMBRADO-NORMAL | Naranja | Tablero_Origen + Circuito_ID |
| ALUMBRADO-EMERGENCIA | Rojo | Tablero_Origen + Circuito_ID + Cable_RF (según norma) |
| DATOS-COMUNICACIONES | Verde | Rack_Origen + Enlace_ID (separado de potencia) |

3. CRUCE DE COBERTURA CON IA (DATOS CSV ANONIMIZADOS)
- Prompt utilizado (sin nombres reales de obra/cliente ni archivos confidenciales): _______________________
- Circuitos del unifilar detectados sin tramo físico 3D: ________________________________________________
- Verificación independiente realizada (llenado de tubo, caída de tensión y norma vigente aplicable): _____
```

### 8.4. Lecturas y recursos recomendados
*(Advertencia importante para el formador y el alumnado: comprobar siempre la vigencia de fuentes, la versión exacta de Autodesk Revit y el reglamento eléctrico y contra incendios aplicable en el país del proyecto antes de aplicar cualquier criterio numérico en obra).*
- **Documentación oficial de Autodesk Revit — Routing Conduits & Parallel Conduits:** Guías sobre el uso de `Conduit`, `Parallel Conduits`, modificación de elevaciones (`BOC`/`TOC`) y filtros de vista por parámetro `Service Type`.
- **Estándares de coordinación MEP (*MEP Height Zoning & Builder's Work / Openings*):** Recursos prácticos de metodologías BIM sobre coordinación de patinillos, solicitudes de huecos en vigas/forjados con Estructura y control de interferencias previo a obra.
- **Normativa eléctrica y de protección contra incendios según jurisdicción:** Verificar siempre país y edición vigente respecto a llenado máximo de canalizaciones, agrupamiento de conductores, circuitos de emergencia/evacuación y sellado de sectores de incendio (p. ej., REBT e ITCs + CTE DB-SI en España, IEC 60364 o NFPA 70/NEC).
- **Guías de uso responsable de asistentes de IA para análisis tabular:** Buenas prácticas para exportar tablas CSV limpias desde Revit, anonimizar identificadores y validar manualmente los cruces de datos devueltos por ChatGPT o Claude.

### Glosario de términos clave

| Término | Definición |
| :--- | :--- |
| **Alimentador (*Feeder*)** | Canalización eléctrica principal que enlaza el cuadro general de distribución (CGBT) con subtableros secundarios o cargas de elevada potencia. |
| **Batería de tubos (*Conduit Rack*)** | Agrupación paralela y coplanaria de varios conductos que comparten trazado troncal y sistema de soportería común manteniendo separación regular. |
| **Generatriz inferior (*Bottom Elevation / BOC*)** | Cota vertical correspondiente al punto exterior más bajo de un tubo o bandeja, determinante para comprobar holguras sobre falsos techos, luminarias y vigas. |
| **Pasatubos (*Sleeve*)** | Manguito o reserva tubular coordinada con Estructura para permitir el paso seguro de canalizaciones eléctricas a través de vigas o losas de hormigón. |
| **Patinillo técnico (*Riser / Shaft*)** | Conducto constructivo vertical continuo a través de las plantas del edificio destinado a alojar montantes eléctricos accesibles y registrables. |
| **Plenum de instalaciones** | Cámara horizontal situada entre el falso techo y el forjado estructural superior donde se coordinan en altura conductos de aire, luminarias, rociadores y tubos eléctricos. |
| **Sectorización cortafuegos (*Firestopping*)** | Conjunto de soluciones de sellado intumescente en pasos de canalizaciones a través de muros o forjados resistentes al fuego para impedir la propagación de incendios. |
| **Tipo de servicio (`Service Type`)** | Parámetro nativo de sistema en conductos y bandejas de Revit utilizado para clasificar el uso eléctrico de cada tramo y controlar filtros visuales y tablas. |

---

## 9. Adaptaciones

### Sesión presencial
- **Proyección comparada en sección 2D/3D:** Abrir una vista dividida (*Tile Views*: Planta RCP + Sección transversal + Isométrica 3D) en el proyector durante la Actividad 2 para que el alumnado visualice al instante cómo un cambio de `Middle Elevation` mueve el tubo respecto a las luminarias y vigas vinculadas.
- **Taller físico rápido en pizarra:** En el caso *Parque Tecnológico Alcobendas B2*, dibujar a escala esquemática el plenum de $345\text{ mm}$ de Planta 1 en la pizarra para validar entre todos los equipos las cotas `BOC` exactas antes de volver a Revit.

### Sesión online síncrona
- **Verificación visual mediante capturas en tiempo real:** Al finalizar la Actividad 2, solicitar a todo el grupo subir al chat o tablero compartido una captura de su vista 3D isométrica con el filtro cromático por `Service Type` aplicado; comentar 3 capturas al azar para detectar errores de clasificación o choques evidentes.
- **Salas de equipo para el caso práctico:** En las *breakout rooms* de 3-4 personas, asignar la hoja de cálculo/CSV `Unifilar_Circuitos.csv` y `Revit_Conduits.csv` para que practiquen el cruce con ChatGPT/Claude compartiendo pantalla dentro de cada sala.

### Sesión asíncrona
- **Secuencia de 4 microcápsulas técnicas:** Grabar demostraciones breves (8–12 min) cubriendo: (1) `Parallel Conduits` y bajantes de fuerza en tabiques; (2) Zonificación de plenum y diferenciación normal/emergencia; (3) Acometidas verticales y cruce de vigas; (4) Configuración de filtros por `Service Type` y exportación CSV para auditoría con IA.
- **Entrega y revisión entre compañeros:** El alumnado sube `Apellido_Nombre_T3_Trazado3D.rvt` (junto con dos capturas de sección de plenum y vista 3D filtrada por colores de servicio) y la plantilla cumplimentada de la Actividad 3. En el foro del módulo revisa el filtro de colores y las holguras de sección de un compañero siguiendo una lista de 3 comprobaciones.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Recupera la topología de circuitos, secciones y criterios de trazado del **Bloque 1 (Instalaciones eléctricas)**, respeta la disposición espacial de luminarias obtenida en el **Bloque 2 (DIALux)** y da continuidad funcional a los equipos, aparatos y tipos de tubo configurados en los **Temas 1 y 2 del Bloque 3**.
- **Competencias que desarrolla:** Modelado 3D ordenado de redes de fuerza, alumbrado y acometidas en Revit MEP; lectura y coordinación en sección transversal de plenum; gestión de pasos estructurales y cortafuegos; parametrización sistemática por `Service Type` y auditoría cruzada unifilar-BIM con IA.
- **Conexión con el tema anterior y posterior en el programa (6 módulos / 50 temas):**
  - *Tema anterior (Bloque 3, Tema 2 — Aparatos eléctricos, componentes de detalle y conductos):* Parte exactamente de los tableros (`CGBT-01`, `SP-P1`), luminarias y mecanismos ya insertados de forma segura y utiliza las familias `Conduit with Fittings` configuradas allí para materializar sus interconexiones físicas 3D.
  - *Tema posterior (Bloque 3, Tema 4 — Uniones de tubos):* Los recorridos 3D trazados hoy se encuentran sujetos a las reglas de enrutado automático de Revit; en el Tema 4 el alumnado profundizará en las *Routing Preferences*, codos, tes de deriva, transiciones, radios mínimos de curvatura de obra y resolución de errores como *"No auto-route solution"* y desconexiones en recorridos complejos.
- **Evidencia de aprendizaje que deja el alumnado:** Archivo `Apellido_Nombre_T3_Trazado3D.rvt` con las redes diferenciadas de fuerza, alumbrado normal, emergencia y acometidas trazadas y clasificadas + Plan de Reingeniería del caso *Parque Tecnológico Alcobendas B2* + Matriz de zonificación y reporte de cruce CSV con IA.

---

## Siguientes pasos para el formador

1. **Comprobar antes de la sesión los archivos `Kit-T3-ModeloInconsistente.rvt`, `Kit-T3-ModeloBase.rvt` y `Muestra_Circuito_vs_Tubo.csv`** verificando que los vínculos `EST` (con viga descolgada de prueba) y `MEC` (conducto de climatización en plenum) cargan con rutas relativas limpias.
2. **Preparar las plantillas de filtros de vista por `Service Type`** como recurso de apoyo opcional en caso de que el grupo requiera acelerar el final de la Actividad 2.
3. **Recalcar en cada transición de teoría a práctica** que la presencia de tubos en 3D y la comprobación de cobertura con IA no eximen de validar llenados de conducto, radios de curvatura ni protecciones eléctricas según la normativa vigente del país.
4. **Revisar las tablas CSV de ejemplo** para garantizar que todos los nombres de edificio, empresa y cliente estén completamente anonimizados antes de usarlos en prompts con ChatGPT o Claude.
5. **Confirmar que el alumnado guarda `Apellido_Nombre_T3_Trazado3D.rvt`**, ya que sobre estos trazados se auditarán uniones, errores de enrutamiento y radios de curvatura en el **Tema 4**.
