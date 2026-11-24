# Tema 9. Sistema de puesta a tierra

> **Aviso técnico y normativo:** Esta guía forma parte del programa especializado **IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas** (no constituye un MBA ni habilita legalmente por sí sola para firmar proyectos o dictámenes oficiales). Los criterios de secciones mínimas, esquemas de conexión, tensiones límite de contacto y selección de uniones aquí expuestos son ilustrativos y **deben verificarse siempre frente al reglamento eléctrico vigente, normativa contra el rayo y edición oficial aplicable en el país del proyecto**.

---

## 1. Ficha del tema

| Campo | Detalle |
| :--- | :--- |
| **Título del tema** | Tema 9. Sistema de puesta a tierra |
| **Bloque y posición dentro del programa** | Bloque 1: Instalaciones eléctricas — Tema 9 de 11 (Tema 9 de 50 del programa) |
| **Programa formativo** | IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas (6 módulos / 50 temas) |
| **Modalidad** | Online / Híbrida interactiva |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Haber completado los Temas 1 a 8 del Bloque 1 (magnitudes eléctricas, tipos de sistemas de suministro, protecciones contra contactos indirectos, cálculo de secciones y diseño eléctrico integrado). |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado diseñará la arquitectura constructiva de un sistema de puesta a tierra —diferenciando tierra de protección, tierra de servicio y equipotencialidad—, especificando electrodos, conductores PE, barraje equipotencial, tipos de unión y medidas frente a la corrosión galvánica y errores de conexión N–PE. |

---

## 2. Objetivos de aprendizaje

Al completar esta sesión de 4 horas, el alumnado será capaz de:

1. **Diferenciar** las funciones de seguridad de la puesta a tierra de protección, la puesta a tierra de servicio (neutro) y la red equipotencial en los principales esquemas de conexión (TT, TN-S e IT). *(Nivel de Bloom: Comprender)*
2. **Identificar** todos los componentes físicos que integran una instalación de puesta a tierra desde la toma enterrada y el puente de comprobación hasta los conductores de protección (PE) de los circuitos terminales. *(Nivel de Bloom: Recordar)*
3. **Aplicar** criterios térmicos, mecánicos y normativos preliminares para especificar secciones de conductores de tierra y protección y la longitud de conexión de descargadores de sobretensión (DPS/SPD). *(Nivel de Bloom: Aplicar)*
4. **Analizar** la compatibilidad electroquímica entre materiales enterrados y tipos de unión (soldadura exotérmica frente a conectores mecánicos certificados) para prevenir la corrosión galvánica y el aflojamiento en obra. *(Nivel de Bloom: Analizar)*
5. **Evaluar** detalles constructivos y esquemas de tablero —incluyendo revisiones asistidas por IA— para detectar fallos críticos como puentes indebidos neutro–tierra aguas abajo, «tierras aisladas» peligrosas o ausencia de continuidad en bandejas. *(Nivel de Bloom: Evaluar)*

---

## 3. Contenidos esenciales

### 3.1. Funciones de seguridad de la puesta a tierra: protección, servicio y referencia equipotencial

#### Explicación breve y clara
La puesta a tierra no es un simple «cable clavado al suelo» que absorbe cualquier avería por sí solo; es un **subsistema de seguridad coordinado con las protecciones automáticas** que cumple tres misiones distintas e irrenunciables:
1. **Tierra de protección:** conecta a tierra todas las masas metálicas normalmente sin tensión (envolventes de cuadros, carcasas de máquinas, luminarias clase I) para limitar la tensión de contacto $U_c$ durante un fallo de aislamiento y ofrecer un camino de retorno que permita el disparo rápido de los interruptores diferenciales (DDR/RCD) o magnetotérmicos según el esquema de conexión.
2. **Tierra de servicio (neutro):** conecta intencionadamente el neutro del transformador o grupo electrógeno a tierra en origen para fijar el potencial de referencia del sistema respecto al suelo, limitar sobretensiones frente a fallos en media tensión o descargas atmosféricas y definir el régimen de explotación (TT, TN-S, TN-C o IT).
3. **Referencia equipotencial:** interconecta masas eléctricas con elementos conductores ajenos a la instalación (tuberías metálicas de agua/gas, estructura metálica del edificio, armaduras, bandejas portacables y racks TIC) mediante el Barraje Equipotencial Principal (BEP), evitando diferencias de potencial peligrosas entre dos elementos que una persona pueda tocar simultáneamente.

#### Conceptos clave
- **Tensión límite convencional de contacto ($U_L$):** valor máximo de tensión de contacto tolerable sin riesgo grave (ilustrativamente $50\text{ V}$ en locales secos o $24\text{ V}$ en húmedos en corriente alterna, siempre sujeto a verificación en el reglamento vigente del país).
- **Esquema TT frente a TN-S:** en **TT**, la tierra de servicio del centro de transformación y la tierra de protección de la instalación receptora son independientes y la protección contra contactos indirectos depende esencialmente de diferenciales; en **TN-S**, neutro y PE viajan separados desde el origen pero comparten referencia de retorno metálico de baja impedancia.
- **Equipotencialidad principal y suplementaria:** unión de baja impedancia entre masas y partes conductoras accesibles en el edificio completo (principal) o en locales de riesgo especial como baños, quirófanos o salas técnicas (suplementaria).
- **Coordinación tierra–protección:** un electrodo de baja resistencia sin interruptor diferencial ni corte automático adecuado NO protege frente a un fallo franco prolongado.

#### Definiciones necesarias
- **Tierra de protección:** puesta a tierra de las masas metálicas accesibles de los equipos eléctricos para evitar tensiones de contacto peligrosas y facilitar la actuación de las protecciones.
- **Tierra de servicio:** conexión a tierra de un punto del circuito activo (habitualmente el punto neutro del transformador o generador) necesaria para el funcionamiento estable y seguro del sistema eléctrico.
- **Enlace equipotencial:** conexión eléctrica directa destinada a poner al mismo potencial eléctrico las masas y elementos conductores externos próximos, anulando tensiones de paso y contacto entre ellos.

#### Ejemplo práctico realista
En una clínica dental instalada en un local comercial con suministro en esquema **TT** ($400/230\text{ V}$), el instalador conecta la carcasa metálica del compresor de aire a una pica de tierra propia, pero olvida unir equipotencialmente la tubería metálica de agua y el chasis de la silla dental al mismo barraje equipotencial, y además deja un circuito del compresor sin interruptor diferencial por «evitar disparos». Al producirse un fallo de aislamiento fase–carcasa en el compresor, su envolvente se eleva respecto a la tubería de agua próxima a más de $120\text{ V}$ (dependiendo de la relación entre resistencias de tierra), generando un choque eléctrico peligroso al operario que toca ambos elementos. La solución obligatoria exige: (1) unificación en un único barraje equipotencial principal (BEP) dentro del edificio y (2) protección diferencial coordinada ($R_A \cdot I_{\Delta n} \le U_L$) conforme al reglamento aplicable vigente.

#### Errores frecuentes
- Creer que «tener buena tierra» hace innecesario instalar interruptores diferenciales o verificar la impedancia de bucle de defecto.
- Clavar una pica separada para el rack informático o un equipo médico («tierra aislada electrónica») **sin unirla equipotencialmente** al barraje principal del edificio, creando diferencias de potencial destructivas y peligrosas durante rayos o fallos a tierra.
- Confundir las funciones del neutro (retorno funcional en servicio normal) y del conductor de protección PE (seguridad ante fallos).
- Omitir la conexión equipotencial suplementaria en locales húmedos, salas de calderas o cuartos técnicos con tuberías metálicas accesibles.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué diferencia hay entre la tierra de servicio y la tierra de protección en cuanto a la corriente que transportan en operación normal?
2. ¿Por qué clavar dos picas independientes sin interconexión equipotencial dentro de un mismo edificio aumenta el riesgo eléctrico en lugar de reducirlo?
3. ¿Por qué en un esquema TT la protección contra contactos indirectos depende críticamente de la coordinación entre resistencia de tierra e interruptor diferencial?

---

### 3.2. Componentes del sistema de puesta a tierra y dimensionamiento constructivo básico

#### Explicación breve y clara
Un sistema de puesta a tierra completo se organiza físicamente desde el terreno hacia el interior del edificio mediante seis elementos concatenados y claramente identificables en obra y en el unifilar:
1. **Toma de tierra (electrodos):** conjunto de picas verticales, conductores desnudos horizontales o anillos/electrodos de cimentación enterrados en contacto íntimo con el suelo.
2. **Línea de enlace con tierra:** conductor robusto que une los electrodos enterrados con el borne principal de tierra.
3. **Borne principal de tierra y puente de comprobación:** punto de conexión accesible (equipado con **seccionador o puente desmontable**) que permite desconectar temporalmente la toma de tierra del resto de la instalación para medir su resistencia real en obra (Tema 10).
4. **Barraje Equipotencial Principal (BEP):** barra colectora de cobre donde convergen la línea de enlace con tierra, todos los conductores principales de protección (PE), las uniones equipotenciales (tuberías, estructura, pararrayos si procede) y, en esquemas TN-S, la unión única en origen con el neutro.
5. **Conductores de protección (PE):** conductores bicolor verde-amarillo que acompañan a cada circuito terminal desde los barrajes de tierra de los cuadros hasta cada toma y receptor clase I.
6. **Bornes de puesta a tierra de descargadores de sobretensión (DPS/SPD):** conexiones dedicadas de muy baja inductancia (cortas y rectas) entre el DPS y el barraje de tierra del cuadro.

Las secciones mínimas de estos conductores deben cumplir tanto la **resistencia mecánica/corrosión** (especialmente en conductores enterrados) como la **solicitación térmica adiabática en cortocircuito a tierra**, expresada ilustrativamente según criterios tipo IEC 60364-5-54 como $S_{\text{PE}} \ge \frac{\sqrt{I^2 t}}{k}$ o mediante tablas reglamentarias de sección relativa respecto a la fase (por ejemplo, $S_{\text{PE}} = S_F$ si $S_F \le 16\text{ mm}^2$; $16\text{ mm}^2$ si $16 < S_F \le 35\text{ mm}^2$; y $S_F/2$ si $S_F > 35\text{ mm}^2$ en cobre con igual material, verificando siempre la tabla exacta de la norma vigente en el país del proyecto).

#### Conceptos clave
- **Puente de comprobación (seccionador de tierra):** dispositivo mecánico desmontable en arqueta o caja junto al borne principal que aísla la toma enterrada durante la medición con telurómetro.
- **Electrodo de cimentación (anillo en zapatas):** aprovechamiento reglamentado del perímetro de cimentación del edificio mediante conductor continuo embebido o bajo zapata para lograr baja resistencia y excelente equipotencialidad.
- **Criterio térmico adiabático ($S = \sqrt{I^2 t}/k$):** verificación de que el conductor PE soporta la energía térmica de la corriente de falta hasta que la protección despeja el defecto.
- **Código de color verde-amarillo:** identificación exclusiva e irrenunciable de conductores de protección y equipotencialidad (prohibido usar otros colores o reutilizarlo como fase/neutro).

#### Definiciones necesarias
- **Electrodo de puesta a tierra:** pieza o conjunto de piezas conductoras en contacto directo con el terreno diseñadas para dispersar corrientes hacia tierra (picas, placas, mallas o anillos).
- **Línea de enlace con tierra:** conductor que conecta la toma de tierra enterrada con el borne principal de tierra o barraje equipotencial del edificio.
- **Conductor de protección (PE):** conductor prescrito en ciertas medidas de protección contra choques eléctricos destinado a unir eléctricamente las masas de los receptores al borne principal de tierra.

#### Ejemplo práctico realista
En un subtablero alimentado por un cable trifásico de cobre XLPE de $3\times 25 + \text{N }25\text{ mm}^2$ en esquema TN-S, la corriente de defecto fase–PE máxima calculada es $I_f = 3{,}2\text{ kA}$ y el interruptor automático despeja la falta en $t = 0{,}10\text{ s}$. Con un valor orientativo de constante térmica $k = 143\text{ A}\cdot\text{s}^{1/2}/\text{mm}^2$ para cobre aislado a $90\,^\circ\text{C}$ (verificando en IEC 60364-5-54 / REBT):
$$S_{\text{PE},\min,\text{térmica}} = \frac{\sqrt{3\,200^2 \cdot 0{,}10}}{143} = \frac{1\,011{,}9}{143} = 7{,}08\text{ mm}^2$$
Aunque por cálculo térmico $10\text{ mm}^2$ resistiría la energía $I^2t$, aplicando la regla constructiva simplificada orientativa para $16 < S_F \le 35\text{ mm}^2$ se prescribe **$S_{\text{PE}} = 16\text{ mm}^2$ Cu** (salvo que la norma local exija otro mínimo). Asimismo, si la línea de enlace enterrada fuera cobre desnudo sin protección mecánica ni contra corrosión, deberán verificarse las secciones mínimas constructivas específicas del reglamento aplicable (habitualmente $25\text{–}35\text{ mm}^2$ en cobre desnudo enterrado según jurisdicción).

#### Errores frecuentes
- Omitir la instalación del puente de comprobación accesible, obligando luego a cortar o soltar cables bajo tensión o en paralelo con la estructura cuando se intenta medir la resistencia de tierra.
- Aplicar automáticamente la mitad de la sección de fase al PE en acometidas de $16\text{ mm}^2$ o $25\text{ mm}^2$ sin respetar el tramo mínimo de $16\text{ mm}^2$ ni comprobar el criterio térmico.
- Usar cables de tierra enterrados con secciones de $6\text{ mm}^2$ o $10\text{ mm}^2$ vulnerables a rotura mecánica por excavaciones o corrosión en el suelo.
- Utilizar conductor azul claro o negro encintado en verde-amarillo como PE en circuitos de obra sin respetar los estándares de identificación.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué función cumple el puente de comprobación y en qué punto exacto del esquema de puesta a tierra se ubica?
2. ¿Por qué la sección de la línea de enlace enterrada suele ser mayor que la exigida estrictamente por el cálculo térmico $I^2t$?
3. ¿Qué datos se necesitan para verificar el dimensionamiento de un conductor de protección por el método adiabático frente al método simplificado por tabla?

---

### 3.3. Uniones, empalmes y control de la corrosión galvánica y química

#### Explicación breve y clara
La mayoría de los fallos reales de un sistema de puesta a tierra a los 5 o 10 años de servicio **no ocurren en la pica ni en el cable**, sino en **las uniones enterradas y en los pares galvánicos mal ejecutados**. Las uniones subterráneas están sometidas a humedad permanente, ciclos térmicos, corrientes de defecto y ataques químicos (terrenos ácidos, salinos, sulfatos o rellenos de escombros). Por eso, las uniones directamente enterradas deben realizarse mediante **soldadura exotérmica (aluminotérmica)** —que crea una fusión molecular continua de mayor conductividad y resistencia a la corrosión que un empalme mecánico— o mediante **conectores mecánicos irreversibles certificados** (compresión hidráulica en C o cuña certificada para enterramiento directo según norma aplicable), reservando las grapas atornilladas exclusivamente para arquetas registrables accesibles, limpias e inspeccionables.

Igualmente crítico es evitar la **corrosión galvánica**. Cuando se unen eléctricamente dos metales con distinto potencial electroquímico dentro de un electrolito común (suelo húmedo o salino), el metal menos noble actúa como ánodo y se corroe aceleradamente. El caso clásico en edificación es enterrar cobre desnudo en contacto directo o proximidad eléctrica con armaduras de acero negro o tuberías/picas de acero galvanizado: el zinc y el acero se sacrifican protegiendo al cobre y destruyendo las cimentaciones o conducciones.

#### Conceptos clave
- **Soldadura exotérmica (aluminotérmica):** proceso químico de ignición en molde de grafito (óxido de cobre + aluminio) que funde los conductores formando una unión molecular permanente libre de aflojamiento.
- **Conector certificado para enterramiento:** unión mecánica por compresión de alta presión o grapa listada específicamente por norma (p. ej. UL 467 / IEC 62561) para resistir tracción, ciclos térmicos y suelo agresivo.
- **Par galvánico:** pila electroquímica formada cuando dos metales distintos (p. ej., cobre y acero galvanizado) comparten contacto eléctrico en presencia de humedad o sales disueltas.
- **Acero cobrizado (*copper-bonded*):** varilla de acero de alta resistencia mecánica con recubrimiento electrolítico de cobre molecularmente unido (habitualmente $\ge 250\text{ }\mu\text{m}$ según norma), que aporta rigidez para hinca profunda sin crear par galvánico con el cable de cobre.

#### Definiciones necesarias
- **Corrosión galvánica:** degradación electroquímica acelerada del metal anódico cuando se acopla eléctricamente con otro metal más catódico (noble) en un medio conductor húmedo.
- **Arqueta de puesta a tierra:** cámara registrable con tapa accesible construida sobre el punto de unión principal electrodo–línea de enlace para permitir inspección visual de corrosión y desconexión en ensayos.
- **Borna bimetálica:** pieza de transición especialmente diseñada (por ejemplo, cobre–aluminio o cobre–acero inoxidable) para unir metales disímiles sin contacto directo en atmósfera húmeda.

#### Ejemplo práctico realista
En una planta industrial cerca de la costa, el constructor sustituyó las picas de acero cobrizado especificadas en proyecto por picas más baratas de **acero galvanizado** unidas con grapas de latón y cable de cobre desnudo de $50\text{ mm}^2$ enterrado en relleno de tierra húmeda salina ($\text{Cl}^-$ elevados), y además conectó sin transición bimetálica el conductor de cobre a un pilar metálico galvanizado de la nave. En menos de 3 años, el recubrimiento de zinc de las picas y de la base del pilar sufrió corrosión severa y dos grapas atornilladas perdieron continuidad por oxidación, elevando la resistencia de tierra de $8\text{ }\Omega$ a más de $95\text{ }\Omega$. La reparación exige: (1) usar electrodos compatibles homogéneos (picas de acero cobrizado de $\ge 254\text{ }\mu\text{m}$ o acero inoxidable AISI 316 en ambientes muy agresivos según ensayo de suelo); (2) ejecutar uniones enterradas con soldadura exotérmica o manguito de compresión irreversible certificado; y (3) ubicar las uniones inspeccionables en arquetas estancas/drenadas con grasas antioxidantes y conectores bimetálicos donde cambie el metal.

#### Errores frecuentes
- Enterrar directamente bajo tierra compactada grapas de tornillería de latón o bronce diseñadas únicamente para montaje visto o arqueta seca.
- Conectar cable de cobre desnudo directamente a armaduras de acero galvanizado o tuberías de hierro en suelo húmedo sin valorar el par galvánico ni las recomendaciones normativas sobre hormigón vs. suelo.
- Utilizar soldadura blanda de estaño–plomo en líneas de tierra (prohibida porque funde a baja temperatura durante un cortocircuito a tierra).
- Usar sal común ($\text{NaCl}$) o fertilizantes en torno a las picas para «bajar la resistencia» en la entrega de obra: aunque baja temporalmente $\rho$, corroe agresivamente los electrodos en meses y desaparece con la lluvia.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué la soldadura blanda de estaño no es admisible en empalmes de puesta a tierra mientras que la soldadura exotérmica sí lo es?
2. ¿Qué ocurre electroquímicamente si enterramos acero galvanizado conectado a una malla extensa de cobre desnudo en un suelo húmedo salino?
3. ¿En qué ubicaciones concretas se permiten uniones atornilladas desmontables frente a uniones permanentes enterradas?

---

### 3.4. Integración en planos/BIM y prevención de errores críticos entre tierra, neutro y electrónica

#### Explicación breve y clara
En proyectos reales de edificios comerciales, oficinas con CPD e industrias, gran parte de las averías posventa nacen en el tablero y en el trazado de tierras: disparos intempestivos de diferenciales, corrientes armónicas circulando por pantallas de red Ethernet o bandejas portacables, y destrucción de equipos electrónicos por rayos cercanos. La regla fundamental en esquemas **TT** y **TN-S** es que **el neutro (N) y el conductor de protección (PE) deben permanecer rigurosamente aislados entre sí en todos los subtableros y circuitos terminales** (la única unión N–PE admisible en TN-S se sitúa en el origen/CGBT o transformador, y en TT nunca se unen en la instalación del usuario). Si un operario puentea N y PE en un subtablero de planta, divide la corriente de retorno de neutro por la estructura, tuberías y mallas de datos, generando ruido electromagnético, corrosión y disparos falsos.

Igualmente, deben asegurarse tres detalles constructivos antes de llevar la instalación al modelo BIM (Bloque 3) y al unifilar (Tema 11): (1) **continuidad equipotencial de bandejas metálicas portacables** con trenzas o conductores de tierra entre tramos y uniones flexibles; (2) **instalación correcta de descargadores de sobretensión (DPS/SPD)** manteniendo el tramo de cable entre fase/neutro–DPS–barraje de tierra lo más corto y recto posible (idealmente $L_{\text{total}} \le 0{,}50\text{ m}$ mediante conexión en V o barraje próximo, porque un cable de $1\text{ m}$ a $1\text{ }\mu\text{s}$ de frente de impulso añade más de $1\,000\text{ V}$ inductivos $L\cdot di/dt$); y (3) uso responsable de IA (ChatGPT/Claude) solo para preparar listas de inspección de tableros con datos anonimizados, nunca para certificar compatibilidad normativa ni esquemas de conexión.

#### Conceptos clave
- **Prohibición de puente N–PE aguas abajo:** separación estricta entre barra de neutro y barra de protección en todo subtablero en TT y TN-S para evitar corrientes vagabundas y fallo de diferenciales.
- **Inductancia de conexión en DPS/SPD:** caída de tensión transitoria ($\Delta U = L_{\text{cable}} \cdot di/dt$) en el latiguillo de tierra del descargador; exige longitud mínima ($\le 0{,}50\text{ m}$).
- **Continuidad de bandejas metálicas:** interconexión eléctrica certificada entre tramos de bandeja (ya sea por eclisas homologadas o puente flexible verde-amarillo) y puesta a tierra en ambos extremos o tramos definidos.
- **Equipotencialidad funcional TIC/CPD:** malla de referencia de alta frecuencia en salas de servidores enlazada al BEP general del edificio, nunca «tierra flotante aislada».

#### Definiciones necesarias
- **Corriente vagabunda de neutro:** fracción de la corriente de retorno monofásica que circula indebidamente por conductores PE, estructuras o blindajes de datos a causa de un puente accidental N–PE aguas abajo.
- **Longitud efectiva de conexión de un DPS ($L_a + L_b$):** suma de longitudes de los conductores que conectan la fase/neutro al descargador y el descargador al barraje de tierra del cuadro, clave para no superar el nivel de protección $U_p$ soportado por los equipos.
- **Tierra de referencia de señal (SRG):** red equipotencial mallada bajo suelo técnico de salas CPD destinada a igualar potenciales a altas frecuencias y proteger la electrónica manteniendo unión segura al sistema general de tierras.

#### Ejemplo práctico realista
En una planta de oficinas con sala de servidores (CPD), los equipos sufren reinicios aleatorios y el interruptor diferencial general de $300\text{ mA}$ de Planta 1 dispara sin causa aparente. Durante la inspección con pinza amperimétrica de fugas se descubren tres fallos combinados: (1) un instalador puenteó el barraje de neutro con el de tierra dentro del subtablero ST-P1 «para mejorar la referencia del SAI»; (2) los descargadores de sobretensión tipo 2 del CGBT estaban conectados al barraje de tierra mediante un bucle de cable verde-amarillo de $1{,}8\text{ m}$ enrollado detrás de la chapa de montaje (añadiendo miles de voltios en transitorios); y (3) las bandejas metálicas de potencia tenían tramos pintados sin rascar la pintura ni puentes equipotenciales. Al eliminar el puente N–PE en ST-P1, rehacer la conexión del DPS en V con longitud total de $0{,}35\text{ m}$ y unir los tramos de bandeja con trenzas de cobre, desaparecen los disparos y el ruido sobre los racks.

#### Errores frecuentes
- Conectar cables de tierra y neutro en el mismo bornero dentro de un subtablero secundario en una instalación TT o TN-S.
- Instalar descargadores de sobretensión (DPS) lejos del barraje de tierra con cables largos o con cocas enrolladas «por estética».
- Asumir que dos tramos de bandeja metálica pintada con epoxi tienen continuidad eléctrica entre sí solo por estar atornillados sin arandelas dentadas ni puente conductor.
- Pedir a una IA que decida el esquema TT o TN-S de un país sin verificar la normativa de la compañía eléctrica local ni las prescripciones reglamentarias vigentes.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué anomalías eléctricas y de seguridad ocurren si se puentean N y PE en un subtablero secundario en esquema TT o TN-S?
2. ¿Por qué un metro adicional de cable en la puesta a tierra de un descargador de sobretensión (DPS) puede dejar desprotegidos los equipos electrónicos?
3. ¿Cómo se garantiza la continuidad equipotencial real en una bandeja metálica portacables de varios tramos?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** combina diagnóstico visual de anomalías en obra, análisis constructivo guiado de componentes y corrosión, resolución de un caso industrial completo en zona costera y auditoría de detalles de tablero con apoyo crítico de IA.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
| :--- | :---: | :--- | :--- |
| **1. Apertura y activación** | 00:00 – 00:25 (25 min) | Sitúa el Tema 9 dentro del Bloque 1, realiza el sondeo diagnóstico inicial y dinamiza la **Actividad 1** («Verdades y mitos mortales sobre la tierra»). | Debate en plenario 5 afirmaciones polémicas (tierra aislada para CPD, uso de sal común, puente N–PE, tierra sin diferencial) y justifica su postura. |
| **2. Microexposición Bloque A (Funciones y componentes)** | 00:25 – 01:00 (35 min) | Explica los apartados 3.1 y 3.2: tierra de protección vs. servicio vs. equipotencialidad, esquemas TT/TN-S, componentes, puente de comprobación y fórmula adiabática $I^2t$. | Toma notas sobre el diagrama de flujo completo de tierra y calcula en vivo la sección mínima de un conductor PE para $I_f = 3{,}2\text{ kA}$. |
| **3. Actividad práctica de aplicación técnica** | 01:00 – 01:35 (35 min) | Lanza la **Actividad 2** (especificación de componentes, uniones y compatibilidad de materiales en una sala técnica y subtablero). | En parejas, selecciona electrodos, tipos de unión (enterrada vs. arqueta), secciones PE y disposición de conexión corta de DPS. |
| **Descanso breve** | 01:35 – 01:50 (15 min) | Pausa activa y carga del dossier de datos del caso práctico. | Descanso fuera de pantalla. |
| **4. Microexposición Bloque B (Corrosión, EMC e integración)** | 01:50 – 02:20 (30 min) | Expone los apartados 3.3 y 3.4: soldadura exotérmica vs. mecánica, corrosión galvánica, errores N–PE aguas abajo, continuidad de bandejas e inductancia de DPS. | Analiza un esquema defectuoso de tablero con DPS y subtablero con puente N–PE, identificando dónde circula la corriente vagabunda. |
| **5. Caso práctico integrado** | 02:20 – 03:10 (50 min) | Presenta el caso **«Centro Logístico Levante»**, organiza equipos de 3–4 personas y realiza seguimiento crítico cuestionando corrosión, arquetas y uniones. | En equipos, diagnostica los 5 fallos del proyecto costero, rediseña materiales y uniones enterradas, corrige el esquema N–PE/DPS y redacta especificaciones. |
| **6. Puesta en común y transferencia a proyecto** | 03:10 – 03:45 (35 min) | Modera la exposición de 2–3 equipos y dirige la **Actividad 3** (auditoría de ficha constructiva de puesta a tierra asistida por IA y verificación de sesgos). | Presenta soluciones del caso y redacta con apoyo crítico de IA un protocolo de inspección en obra de puesta a tierra, corrigiendo omisiones normativas. |
| **7. Síntesis, evaluación sumativa y cierre** | 03:45 – 04:00 (15 min) | Resume los principios irrenunciables de seguridad en tierras, aplica el cuestionario sumativo y conecta con el **Tema 10 (Cálculo de resistencia de puesta a tierra)**. | Completa la evaluación de cierre y la ficha de autoevaluación. |

**Suma total verificada:** 25 + 35 + 35 + 15 + 30 + 50 + 35 + 15 = **240 minutos (4 horas)**.

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «Mito o riesgo mortal en puesta a tierra»
- **Nombre:** Mito o riesgo mortal en puesta a tierra.
- **Objetivo:** Desmontar creencias erróneas extendidas en obra (tierras independientes sin equipotencialidad, aditivos salinos, puentes N–PE) activando el análisis de seguridad eléctrica.
- **Instrucciones para el alumnado:**
  1. Leed individualmente las 5 afirmaciones de práctica habitual en obra que proyectará el formador (p. ej.: *«Para evitar ruido en los servidores conviene clavar una pica aparte y no unirla a la tierra del edificio»*; *«Si el cuadro tiene buena tierra por debajo de 5 Ω ya no hacen falta diferenciales»*; *«Echar sal y carbón en el hoyo de la pica es la mejor solución definitiva»*).
  2. Votad en 4 minutos si cada afirmación es segura o peligrosa/errónea y anotad una razón física para cada voto.
  3. Defended vuestro argumento en plenario frente a la opinión contraria antes de recibir la síntesis técnica.
- **Materiales necesarios:** Diapositiva con 5 afirmaciones y herramienta de votación rápida (Mentimeter/Slido o tarjetas verde/rojo).
- **Tiempo estimado:** 15 minutos (integrados en la Fase 1).
- **Rol del formador:** Provocar el debate preguntando «¿qué pasa si cae un rayo cerca o falla el aislamiento de un equipo conectado a las dos redes?» y sintetizar las tres funciones de la tierra.
- **Producto o entregable esperado:** Cuadro grupal con las 5 creencias desmontadas y su principio físico corrector.
- **Criterios de éxito:** Al menos el 90 % del grupo distingue correctamente por qué la «tierra aislada sin equipotencialidad» es peligrosa y por qué la tierra necesita coordinación con protecciones.

### Actividad 2 (Aplicación técnica): «Selección de componentes, secciones PE y detalle de DPS»
- **Nombre:** Selección de componentes, secciones PE y detalle de DPS.
- **Objetivo:** Especificar correctamente los elementos constructivos de puesta a tierra de un subtablero industrial ligero, dimensionando el PE por criterio térmico/constructivo y detallando uniones y descargadores.
- **Instrucciones para el alumnado:**
  1. En parejas, revisad la ficha técnica suministrada (acometida $4\times 50\text{ mm}^2$ Cu XLPE en esquema TN-S, $I_f = 4{,}8\text{ kA}$, tiempo de corte $t = 0{,}08\text{ s}$, $k = 143$; subtablero de oficinas a $30\text{ m}$ con cable de $16\text{ mm}^2$ y protección de sobretensiones DPS Tipo 2).
  2. Calculad la sección térmica mínima adiabática del PE principal y comparadla con la regla simplificada orientativa por tabla (recordando verificar siempre en la norma vigente del país).
  3. Especificad sobre el esquema mudo de detalle: ubicación exacta del puente de comprobación, BEP, tipo de unión enterrada (exotérmica vs. arqueta accesible), latiguillos del DPS ($\le 0{,}50\text{ m}$ en V) y puente equipotencial hacia la tubería de agua y bandeja metálica.
- **Materiales necesarios:** Ficha de esquema mudo de tablero y toma de tierra, calculadora y tabla de constantes $k$ ilustrativas.
- **Tiempo estimado:** 35 minutos (Fase 3).
- **Rol del formador:** Revisar que no se puenteen N y PE en el subtablero secundario, comprobar el cálculo $\sqrt{I^2 t}/k$ y vigilar la longitud de conexión del DPS.
- **Producto o entregable esperado:** Esquema anotado y memoria breve de selección de materiales y secciones PE.
- **Criterios de éxito:** Cálculo adiabático correcto ($S_{\text{PE},\min} = \frac{4\,800\cdot \sqrt{0{,}08}}{143} = 9{,}5\text{ mm}^2$ vs. sección constructiva de $25\text{ mm}^2$ por tabla $S_F/2$ para $50\text{ mm}^2$), ubicación correcta del puente de comprobación y DPS con longitud $\le 0{,}50\text{ m}$.

### Actividad 3 (Transferencia a proyecto real): «Protocolo de inspección de puesta a tierra en obra con apoyo crítico de IA»
- **Nombre:** Protocolo de inspección de puesta a tierra en obra con apoyo crítico de IA.
- **Objetivo:** Crear un checklist real de control constructivo en obra (antes de tapar zanjas y antes de energizar tableros) utilizando un asistente de IA de forma segura y auditando sus omisiones.
- **Instrucciones para el alumnado:**
  1. Definid el escenario de un proyecto propio o frecuente en vuestra empresa (local comercial, nave o edificio de viviendas) manteniendo **datos 100 % anonimizados**.
  2. Pedid a ChatGPT o Claude mediante un *prompt* acotado una lista de inspección en obra dividida en dos hitos: «Antes de hormigonar/tapar zanjas» y «Antes de energizar cuadros».
  3. Revisad críticamente la lista devuelta por la IA: añadid al menos 3 puntos técnicos críticos que suele omitir (por ejemplo, comprobar ausencia de puente N–PE en subtableros, verificar distancia $\le 0{,}50\text{ m}$ en DPS, prohibir soldadura blanda/sal común o exigir registro de par galvánico y puente de comprobación desmontable) y etiquetad qué artículos del reglamento local aplicable deben validarse.
- **Materiales necesarios:** Plantilla técnica práctica (Sección 8) y acceso a asistente de IA (o extracto de ejemplo offline).
- **Tiempo estimado:** 20 minutos (integrados en la Fase 6).
- **Rol del formador:** Verificar que el checklist distingue claramente criterios universales de buena práctica frente a prescripciones legales específicas de cada país que requieren comprobación reglamentaria.
- **Producto o entregable esperado:** Checklist de inspección en obra en 2 fases con trazabilidad de correcciones humanas sobre el borrador de IA.
- **Criterios de éxito:** Lista práctica aplicable en obra, sin confusión entre diseño teórico e inspección real, y detección documentada de al menos 3 puntos omitidos o imprecisos en la respuesta inicial de la IA.

---

## 6. Caso práctico

### Caso: Centro Logístico Levante — «Corrosión silenciosa y fugas fantasma junto al mar»

#### Contexto empresarial
**Logística Levante Sur, S.L.** opera una nave técnico-comercial de $2\,100\text{ m}^2$ con zona de oficinas y carga de carretillas eléctricas situada a $600\text{ m}$ del puerto comercial en Valencia. El suministro eléctrico es trifásico $400/230\text{ V}$, $50\text{ Hz}$, bajo esquema **TT** (con interruptor diferencial general selectivo en cabecera y diferenciales de $30\text{ mA}$ en circuitos de oficinas y talleres). Dos años después de la puesta en marcha, la instalación presenta disparos constantes de diferenciales en oficinas, reinicios de ordenadores y fallos de lectura en la red de datos.

#### Situación o problema
Una inspección técnica revela que el proyecto as-built y la ejecución combinaron múltiples errores en el sistema de puesta a tierra:
1. Para ahorrar presupuesto, la subcontrata sustituyó las picas de acero cobrizado por **picas de acero galvanizado** unidas directamente a un anillo exterior de cable de **cobre desnudo de $35\text{ mm}^2$** en un terreno húmedo con elevada concentración salina (alta presencia de cloruros) y conectadas mediante grapas de tornillería simple enterradas directamente sin arqueta.
2. En el anillo exterior no se instaló ningún **borne o puente de comprobación desmontable**, enterrando la subida hasta el interior de la pared del CGBT.
3. En el subtablero de oficinas (**ST-OFICINAS**), un electricista realizó un puente sólido entre el barraje de neutro y el barraje de tierra para intentar «estabilizar» la tensión de los puestos informáticos.
4. Las **bandejas metálicas perforadas pintadas con recubrimiento epoxi** que llevan potencia y datos carecen de puentes de continuidad eléctrica entre tramos y no están conectadas al BEP.
5. Los **descargadores de sobretensión (DPS Tipo 2)** añadidos en el CGBT tras la primera tormenta fueron cableados con conductores de $6\text{ mm}^2$ de $1{,}40\text{ m}$ de longitud formando una espiral ordenada por el lateral del armario hasta el borne de tierra.

#### Datos disponibles

| Elemento inspeccionado | Estado actual encontrado en obra | Parámetro ambiental / eléctrico |
| :--- | :--- | :--- |
| **Terreno y ambiente** | Suelo arcilloso húmedo con nivel freático salino a $1{,}8\text{ m}$ | Alta agresividad química ($\text{Cl}^-$, pH ligeramente ácido) |
| **Electrodos y anillo** | 4 picas de acero galvanizado + cable cobre desnudo $35\text{ mm}^2$ | Uniones enterradas con grapas de tornillo de latón (fuertemente oxidadas) |
| **Registro y comprobación** | Sin arqueta visitable ni puente seccionador de medida | No se puede aislar la toma de tierra para ensayo periódico |
| **Esquema y protecciones** | Suministro **TT**; diferencial general $300\text{ mA}$ S; oficinas $30\text{ mA}$ | En **ST-OFICINAS**, barraje de N puenteado con PE |
| **Equipotencialidad** | Bandejas portacables pintadas epoxi sin trenzas de unión | Tuberías metálicas de agua contra incendios sin conexión al BEP |
| **DPS en CGBT** | Tipo 2, cableado $6\text{ mm}^2$ de $1{,}40\text{ m}$ en espiral hasta PE | Tensión residual teórica $U_p = 1{,}5\text{ kV}$ desvirtuada por inductancia |

#### Preguntas de análisis
1. ¿Qué proceso electroquímico destruye aceleradamente las picas galvanizadas y las grapas de latón en el suelo salino de la nave, y qué combinación de materiales y uniones debió haberse proyectado?
2. ¿Por qué el puente N–PE instalado en **ST-OFICINAS** provoca disparos continuos de diferenciales y corrientes parásitas en la nave?
3. ¿Cómo afecta la instalación actual del DPS ($1{,}40\text{ m}$ en espiral y $6\text{ mm}^2$) a la protección real de los servidores y equipos electrónicos ante una sobretensión?
4. ¿Qué riesgos de seguridad y qué problemas de inspección oficial implica carecer de puente de comprobación y de enlace equipotencial en las tuberías metálicas de PCI?

#### Tarea a realizar
En equipos de 3–4 personas (50 minutos), redactad un **Plan Técnico de Remediación del Sistema de Puesta a Tierra** que contenga:
1. **Especificación de nueva toma de tierra resistente a corrosión:** selección de material homogéneo para electrodos (acero cobrizado de alto espesor o acero inoxidable según ensayo de agresividad del terreno), tipo de unión enterrada (soldadura exotérmica o compresión certificada), diseño de arqueta visitable y puente de comprobación desmontable.
2. **Corrección del esquema interno de tableros (TT) y DPS:** eliminación del puente N–PE, trazado correcto y sección mínima de conexión del DPS en V con longitud total $\le 0{,}50\text{ m}$ (indicando la sección mínima a verificar según reglamento aplicable).
3. **Plan de equipotencialidad integral:** conexión al BEP de tuberías metálicas de PCI/agua, pilares metálicos y continuidad eléctrica de las bandejas pintadas.
4. **Checklist de verificación normativa previa a puesta en marcha** señalando qué apartados del reglamento aplicable en España (REBT ITC-BT-18, ITC-BT-24, ITC-BT-23) o norma equivalente del país deben contrastarse.

#### Posibles soluciones o criterios de análisis
- **Corrosión y uniones:** el contacto eléctrico cobre–acero galvanizado en suelo húmedo salino crea un par galvánico intenso donde el zinc/acero de las picas se oxida rápidamente. Se debe sustituir el conjunto por electrodos compatibles con cobre (picas de acero cobrizado de alta capa $\ge 254\text{ }\mu\text{m}$ o picas/malla de **acero inoxidable AISI 316** en suelo altamente corrosivo si se evita cobre desnudo agresivo, manteniendo siempre coherencia de pares y usando conectores bimetálicos en transición seca) unidos mediante **soldadura exotérmica** o conectores de compresión irreversibles certificados, dejando una arqueta registrable con **puente de comprobación desmontable** para medición periódica.
- **Puente N–PE en TT:** eliminar inmediatamente el puente N–PE en **ST-OFICINAS**. En esquema TT, el neutro es un conductor activo que nunca debe conectarse a PE en la instalación receptora; al puentearlo, parte de la corriente de neutro retorna por tierra saltándose el diferencial (provocando su disparo inmediato al desequilibrar $I_{\text{fase}} \ne I_{\text{neutro}}$ en el toroidal del diferencial) y elevando el potencial de masas y pantallas de red.
- **DPS Tipo 2:** acortar y enderezar el cableado conectando en configuración **en V (o Kelvin)** lo más cerca posible de las bornas del interruptor/barraje para que $L_a + L_b \le 0{,}50\text{ m}$ (sin espirales que aumentan la autoinducción $L$), incrementando además la sección según normativa aplicable (p. ej. mínimo $16\text{ mm}^2$ Cu si existe riesgo directo/pararrayos o mínimo $6\text{–}10\text{ mm}^2$ según categoría Tipo 2 verificada en fabricante y REBT/IEC).
- **Equipotencialidad:** rascar localmente la pintura epoxi en puntos de unión, instalar eclisas conductoras o puentes flexibles de cobre entre tramos de bandeja, enlazarlas al PE/BEP, y conectar mediante abrazaderas adecuadas la red metálica de PCI, agua y estructura al **Barraje Equipotencial Principal (BEP)**.

#### Preguntas de reflexión final
- ¿Cuánto cuesta ejecutar bien una soldadura exotérmica y un puente de comprobación en obra frente al coste de picar soleras y reparar equipos destruidos a los dos años?
- ¿Por qué ningún cálculo teórico de resistencia de puesta a tierra sirve si en obra se toleran uniones atornilladas bajo tierra o puentes N–PE ocultos?

---

## 7. Evaluación

### Evaluación diagnóstica
- **Instrumento (inicio de sesión, 5 min):** Sondeo de 5 afirmaciones de verdadero/falso integradas en la **Actividad 1** sobre tierra aislada para informática, suficiencia de una pica sin diferencial, sal en picas, puente N–PE y papel del borne desmontable.
- **Objetivo:** Detectar prejuicios habituales de obra antes de explicar la normativa y electroquímica.

### Evaluación formativa
- Supervisión del formador durante las **Actividades 2 y 3** y en el caso **«Centro Logístico Levante»** comprobando:
  - Distinción inequívoca entre tierra de protección, servicio y equipotencialidad.
  - Ejecución correcta del cálculo adiabático de PE y comparación con tabla constructiva.
  - Identificación de pares galvánicos y especificación correcta de uniones enterradas vs. registrables.
  - Detección de fallos en tableros (puente N–PE y lazo inductivo en DPS) y revisión crítica de salidas de IA.

### Evaluación sumativa
1. **Plan Técnico de Remediación del caso «Centro Logístico Levante»** en equipo (**60 %** del tema).
2. **Esquema de detalle de la Actividad 2 + Checklist de inspección en obra auditado (Actividad 3) + mini-cuestionario de 4 preguntas** (**40 %** del tema).

### Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
| :--- | :--- | :--- | :--- | :--- |
| **1. Arquitectura de puesta a tierra y esquemas (TT/TN-S)** | Confunde tierra de protección, servicio y equipotencialidad o mantiene puentes N–PE indebidos. | Distingue las funciones teóricamente, pero omite el puente de comprobación o la equipotencialidad de tuberías/bandejas. | Diferencia con rigor protección, servicio y BEP, elimina el puente N–PE y garantiza equipotencialidad completa. | Integra además continuidad detallada en bandejas pintadas, coordinación tierra–diferenciales y análisis de corrientes parásitas. |
| **2. Dimensionamiento de PE y conexión de DPS** | Asigna secciones al azar sin criterio térmico ni constructivo y deja el DPS con cables largos o en espiral. | Calcula $I^2t$ o cita tabla orientativa con imprecisiones, o acorta el DPS sin justificar la inductancia $L\cdot di/dt$. | Calcula $S_{\text{PE}}$ adiabática y constructiva verificable y detalla el DPS en V con longitud total $\le 0{,}50\text{ m}$. | Justifica con rigor sección mínima mecánica vs. térmica, conexión Kelvin del DPS y verificación expresa en reglamento vigente. |
| **3. Control de corrosión y calidad de uniones** | Mantiene acero galvanizado acoplado a cobre en suelo salino, tornillería enterrada o aditivos salinos. | Identifica la corrosión pero propone parches temporales o no especifica el tipo de unión certificada enterrada. | Prescribe materiales compatibles homogéneos/inoxidables, soldadura exotérmica o compresión certificada y arqueta registrable. | Analiza el par electroquímico completo según agresividad del terreno e incorpora transición bimetálica y plan de mantenimiento. |
| **4. Inspección en obra y uso responsable de IA** | Acepta listas de inspección genéricas de IA sin verificar normativa local ni puntos críticos reales de obra. | Elabora checklist básico con IA, pero omite comprobar puente de comprobación, N–PE o longitud de DPS. | Adapta y corrige el checklist de obra con datos anonimizados detectando al menos 3 omisiones técnicas de la IA. | Entrega un protocolo de inspección en 2 hitos listo para obra con criterios medibles de aceptación y trazabilidad normativa. |

### Actividad de autoevaluación
Al concluir la sesión, cada participante responde por escrito:
1. *¿Qué mito técnico o hábito incorrecto sobre puesta a tierra he descartado definitivamente hoy?*
2. *En mi próxima revisión de cuadro o proyecto, ¿qué tres comprobaciones físicas haré primero (N–PE, DPS, puente de prueba, equipotencialidad)?*
3. *¿Qué pregunta específica debo confirmar siempre según la normativa vigente del país antes de especificar electrodos y secciones mínimas enterradas?*

---

## 8. Materiales y recursos

### Guion de diapositivas
- **Slide 1 — Portada y rol de la puesta a tierra en el diseño eléctrico:** Tema 9 (9/11), enlace con protecciones (T6) y diseño integrado (T8), límites normativos.
- **Slide 2 — Activación (Actividad 1):** 5 mitos frecuentes de obra (tierra aislada CPD, tierra sin diferencial, sal en pica, puente N–PE) para debate rápido.
- **Slide 3 — Tres funciones de seguridad:** Tierra de protección vs. tierra de servicio (neutro) vs. barraje equipotencial (BEP) en esquemas TT, TN-S e IT.
- **Slide 4 — Anatomía completa del sistema y dimensionamiento de PE:** Electrodo, línea de enlace, puente de comprobación, BEP, PE y fórmula $S = \sqrt{I^2 t}/k$ frente a secciones mínimas constructivas (Actividad 2).
- **Slide 5 — Uniones y corrosión galvánica:** Soldadura exotérmica vs. compresión irreversible vs. tornillería en arqueta; par cobre–acero galvanizado y prohibición de sal común.
- **Slide 6 — Errores críticos en tableros y electrónica:** Consecuencias de unir N–PE aguas abajo, continuidad de bandejas pintadas, conexión en V de DPS ($\le 0{,}50\text{ m}$) y equipotencialidad TIC.
- **Slide 7 — Caso práctico «Centro Logístico Levante»:** Diagnóstico de fallo costero y plan de remediación en equipos (50 min).
- **Slide 8 — Auditoría de obra con IA, evaluación y puente al Tema 10:** Checklist de inspección en 2 hitos (Actividad 3), cierre sumativo y avance al cálculo de resistencia y medición con telurómetro (Tema 10).

### Ficha de trabajo
Documento de 2 páginas que incluye: (1) cuadro de votación de mitos de la Actividad 1; (2) diagrama mudo de tablero y arqueta para completar en la Actividad 2; (3) tabla resumen de diagnóstico del caso *Centro Logístico Levante*; y (4) cuestionario de autoevaluación.

### Plantilla técnica práctica
```text
=== FICHA DE ESPECIFICACIÓN E INSPECCIÓN EN OBRA — SISTEMA DE PUESTA A TIERRA ===
Proyecto (anonimizado): _____________________   País / Reglamento a verificar: _____________________
Esquema de conexión: [ ] TT   [ ] TN-S   [ ] IT     Agresividad estimada del terreno: ________________

1. COMPONENTES Y MATERIALES (Hito 1: Antes de hormigonar / tapar zanjas)
- Tipo y material de electrodo(s): ______________________  Compatibilidad galvánica verificada: [ ] Sí
- Línea de enlace: Sección _____ mm² | Material: __________ | Profundidad de enterramiento: _____ m
- Uniones directamente enterradas: [ ] Soldadura exotérmica  [ ] Compresión irreversible certificada
- Arqueta registrable y puente de comprobación desmontable instalados: [ ] Sí (Ubicación: __________)
- Prohibición de aditivos salinos corrosivos cumplida: [ ] Sí

2. TABLEROS, EQUIPOTENCIALIDAD Y DPS (Hito 2: Antes de energizar)
- Separación estricta N vs. PE verificada en todos los subtableros: [ ] Sí
- BEP conectado a: [ ] Tuberías agua/PCI  [ ] Estructura metálica  [ ] Bandejas  [ ] Pararrayos (si aplica)
- Continuidad eléctrica entre tramos de bandeja pintada verificada: [ ] Sí
- Conexión DPS / SPD: Longitud total (L_a + L_b) = _____ m (Objetivo <= 0,50 m) | Sección: _____ mm²
- Revisión humana de salidas IA y contraste con reglamento oficial vigente: [ ] Sí
```

### Lecturas y recursos recomendados
*(Nota importante: el formador y el alumnado deben validar siempre la edición vigente, jurisdicción aplicable, disponibilidad de acceso y autenticidad de las referencias antes de utilizarlas).*
- **REBT (España) — ITC-BT-18 (Instalaciones de puesta a tierra), ITC-BT-23 (Sobretensiones) e ITC-BT-24 (Protección contra contactos indirectos)** *(marco ilustrativo en España; comprobar texto consolidado y guías técnicas vigentes)*.
- **IEC 60364-4-41 e IEC 60364-5-54** (*Protection for safety — Protection against electric shock* y *Earthing arrangements and protective conductors*) *(verificar edición vigente)*.
- **NFPA 70 (NEC) — Artículo 250 (*Grounding and Bonding*)** *(referencia ilustrativa para proyectos bajo norma norteamericana; validar edición vigente adoptada)*.
- **Serie IEC 62561 / UL 467** sobre componentes de protección contra el rayo, uniones exotérmicas y conectores certificados de puesta a tierra *(verificar requisitos del fabricante y ensayo aplicable)*.

### Glosario de términos clave

| Término | Definición |
| :--- | :--- |
| **Tierra de protección** | Puesta a tierra de las masas metálicas accesibles de equipos eléctricos para limitar tensiones de contacto y permitir la actuación de las protecciones. |
| **Tierra de servicio** | Conexión intencionada a tierra del punto neutro de un transformador o fuente para estabilizar tensiones y definir el esquema de conexión (TT, TN o IT). |
| **Barraje Equipotencial Principal (BEP)** | Barra colectora de tierra donde se interconectan la línea de enlace, los conductores PE principales y las canalizaciones o estructuras metálicas del edificio. |
| **Puente de comprobación** | Seccionador mecánico desmontable situado en el origen del sistema que permite aislar la toma de tierra para medir su resistencia real en obra. |
| **Soldadura exotérmica** | Unión aluminotérmica en molde de grafito que fusiona molecularmente los conductores formando un empalme permanente y altamente resistente a la corrosión. |
| **Corrosión galvánica** | Deterioro electroquímico acelerado del metal menos noble (ánodo) cuando está conectado eléctricamente a otro más noble en un suelo húmedo conductor. |
| **Esquema TT** | Sistema en el que el neutro del suministro está puesto a tierra en origen y las masas de la instalación receptora se conectan a una toma de tierra independiente. |
| **Longitud efectiva de DPS** | Longitud total de los conductores que enlazan la red y el descargador de sobretensión con el barraje de tierra, crítica por su caída inductiva $L\cdot di/dt$. |

---

## 9. Adaptaciones

### Sesión presencial
- **Muestras físicas reales:** Llevar al aula un molde o muestra terminada de soldadura exotérmica, una grapa de compresión irreversible en C, una grapa atornillada corroída de ejemplo, un trozo de pica *copper-bonded* y un puente de comprobación real para que el grupo inspeccione la calidad constructiva.
- **Trabajo en mesa:** Dibujar sobre lámina A3 el esquema completo de tablero CGBT + ST-OFICINAS para marcar con rotulador rojo y verde los caminos de neutro y PE.

### Sesión online síncrona
- **Anotación colaborativa en pantalla:** Proyectar en Miro o Zoom Whiteboard el esquema eléctrico defectuoso de *Centro Logístico Levante* y pedir a los equipos que señalen con etiquetas los puntos donde circula corriente vagabunda o donde se produce el par galvánico.
- **Sondeos rápidos:** Usar encuestas en vivo de 2 minutos para la Actividad 1 y para contrastar resultados del cálculo adiabático $\sqrt{I^2t}/k$.

### Sesión asíncrona
- **Vídeos demostrativos cortos:** Grabar 4 microcápsulas explicativas (10–12 min) y enlazar un vídeo técnico validado de ejecución segura de soldadura exotérmica (verificando previamente enlace y medidas de seguridad EPI).
- **Tarea evaluable en campus:** Subir en PDF el esquema anotado de la Actividad 2 junto con el Plan de Remediación de *Centro Logístico Levante* y el checklist auditado frente a la IA.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Da continuidad directa a la protección contra contactos indirectos del **Tema 6 (Protecciones eléctricas)**, al esquema de suministro del **Tema 2 (Tipos de sistemas eléctricos)** y a la protección frente a rayos/sobretensiones e integración constructiva vista en el **Tema 8**.
- **Competencias que desarrolla:** Diseño constructivo de sistemas de seguridad eléctrica, prevención de patologías por corrosión y corrientes parásitas, detalle de envolventes y criterio de inspección en obra.
- **Conexión con el tema anterior y posterior:**
  - *Tema anterior:* **Tema 8. Ejemplo práctico de diseño y cálculo** (Bloque 1, 8/11), donde se definió el cuadro de cargas, corrientes y protecciones del edificio; ahora se asegura la puesta a tierra y equipotencialidad de toda esa instalación.
  - *Tema posterior:* **Tema 10. Cálculo de resistencia de puesta a tierra** (Bloque 1, 10/11), donde se cuantificará la resistividad del terreno ($\rho$), el dimensionamiento geométrico de picas y mallas (fórmulas de diseño), y su comprobación real mediante telurómetro en obra.
- **Evidencia de aprendizaje que dejará el alumnado:** Dos entregables en su portafolio técnico: (1) el Plan Técnico de Remediación del caso *Centro Logístico Levante*, y (2) la ficha de especificación e inspección en obra de puesta a tierra validada frente a IA.

---

## Siguientes pasos para el formador

1. **Preparar los 5 enunciados de mitos (Actividad 1)** y comprobar que el sistema de votación rápida funciona antes de iniciar la clase.
2. **Revisar si en el país de los alumnos predomina el esquema TT, TN-S o TN-C-S** para adaptar los ejemplos verbales manteniendo el aviso obligatorio de verificación reglamentaria vigente.
3. **Preparar los esquemas mudos de tablero y arqueta (Actividad 2)** en formato editable (PDF/Miro/imagen) para no perder tiempo dibujando recuadros durante la práctica.
4. **Verificar enlaces o muestras visuales de soldadura exotérmica y DPS en V** al menos 48 horas antes de la sesión.
5. **Recordar al alumnado al cerrar** que en el Tema 10 pasarán del «cómo se construye y protege la puesta a tierra» al cálculo de resistividad del suelo, dimensionamiento de electrodos y medición real en campo.
