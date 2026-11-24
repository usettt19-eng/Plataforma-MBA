# Tema 7. Criterios de trazo de instalaciones eléctricas

> **Aviso técnico y normativo:** Esta guía forma parte del programa especializado **IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas** (no constituye un MBA ni habilita legalmente por sí sola para firmar proyectos o dictámenes oficiales). Todos los valores numéricos, distancias libres, porcentajes de ocupación y separaciones citados tienen carácter ilustrativo y **deben verificarse siempre frente al reglamento eléctrico, normativa contra incendios, ordenanzas locales y edición vigente aplicable en el país del proyecto**.

---

## 1. Ficha del tema

| Campo | Detalle |
| :--- | :--- |
| **Título del tema** | Tema 7. Criterios de trazo de instalaciones eléctricas |
| **Bloque y posición dentro del programa** | Bloque 1: Instalaciones eléctricas — Tema 7 de 11 (Tema 7 de 50 del programa) |
| **Programa formativo** | IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas (6 módulos / 50 temas) |
| **Modalidad** | Online / Híbrida interactiva |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Haber completado los Temas 1 a 6 del Bloque 1 (magnitudes eléctricas, tipos de sistemas, normativa aplicable, cálculo de cargas, dimensionamiento de conductores por intensidad/caída de tensión y protecciones eléctricas) y poseer lectura básica de planos arquitectónicos en planta y sección. |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado diseñará y justificará el trazado preliminar de canalizaciones y la zonificación de cuadros y cuartos eléctricos de un edificio técnico o comercial, cumpliendo criterios de accesibilidad, ocupación máxima, radio mínimo de curvatura, separación electromagnética de señales y coordinación espacial con estructura, HVAC e hidrosanitaria. |

---

## 2. Objetivos de aprendizaje

Al completar esta sesión de 4 horas, el alumnado será capaz de:

1. **Identificar** los requisitos espaciales, ambientales y de accesibilidad para zonificar cuartos técnicos, cuadros generales y subtableros secundarios cerca del centro de gravedad de cargas. *(Nivel de Bloom: Recordar)*
2. **Calcular** el porcentaje de ocupación útil en tubos (*conduit*), bandejas portacables y canaletas, comprobando simultáneamente los radios mínimos de curvatura y el margen de ampliación futura. *(Nivel de Bloom: Aplicar)*
3. **Diferenciar** los criterios de separación física y compatibilidad electromagnética entre circuitos de potencia, circuitos de seguridad/emergencia y redes de telecomunicaciones o control en trazados paralelos y cruces. *(Nivel de Bloom: Comprender)*
4. **Analizar** interferencias espaciales típicas entre canalizaciones eléctricas y las disciplinas de estructura, climatización (HVAC) e instalaciones hidrosanitarias en falsos techos y patinillos verticales. *(Nivel de Bloom: Analizar)*
5. **Evaluar** una propuesta de trazo preliminar —incluyendo checklists generados con apoyo de IA— frente a restricciones reales de mantenimiento, seguridad y edificabilidad antes de iniciar el modelado en Revit MEP. *(Nivel de Bloom: Evaluar)*

---

## 3. Contenidos esenciales

### 3.1. Zonificación de cuartos técnicos, tableros y criterios de accesibilidad y mantenimiento

#### Explicación breve y clara
El mejor cálculo de conductores fracasa si los cuartos eléctricos y subtableros quedan confinados en rincones inaccesibles, alejados de las cargas principales o expuestos a humedad y choques mecánicos. La **zonificación eléctrica** consiste en situar la acometida, el cuarto de medida/CGBT y los subtableros de planta en puntos cercanos al **centro de gravedad de las cargas** (para acortar recorridos y reducir caídas de tensión y pérdidas óhmicas $I^2R$), garantizando espacios libres seguros para operación, termografía, mantenimiento y evacuación en caso de arco o fallo.

Además, un cuadro eléctrico no debe ubicarse bajo tuberías con riesgo de fuga o condensación, ni obstruyendo vías de evacuación. Las dimensiones mínimas de franja frontal libre, altura de maniobra de interruptores y apertura de puertas deben comprobarse siempre según la reglamentación nacional aplicable (como ejemplo ilustrativo, las prescripciones sobre locales técnicos y envolventes del REBT en España o el artículo 110.26 del NEC en EE. UU., verificando edición vigente).

#### Conceptos clave
- **Centro de gravedad de cargas:** ubicación teórica ponderada por potencia que minimiza la longitud equivalente de los alimentadores y subalimentadores de mayor intensidad.
- **Espacio libre de trabajo y maniobra:** zona frontal despejada ante envolventes que permite abrir puertas a más de 90°–120°, maniobrar protecciones con seguridad y evacuar sin obstáculos.
- **Protección ambiental e IP/IK:** adecuación de la envolvente frente a polvo, agua, temperatura ambiente y golpes mecánicos según la clasificación real del local.
- **Trazabilidad de reserva espacial:** previsión física en cuarto eléctrico y patinillos (*shafts*) para ampliaciones futuras (normalmente 20 %–30 % de espacio libre en barrajes y pasos).

#### Definiciones necesarias
- **Cuarto técnico eléctrico:** recinto dedicado, ventilado y de acceso restringido a personal autorizado que aloja aparamenta general, transformación o medida, separado de instalaciones húmedas o combustibles según normativa.
- **Distancia de seguridad operacional:** espacio mínimo libre delante y sobre un tablero requerido por reglamento para realizar operaciones con tensión o pruebas sin atrapamiento del operario.
- **Patinillo eléctrico (*shaft*):** conducto vertical registrable en edificios de varias plantas destinado al paso ordenado de montantes eléctricas y de telecomunicaciones, sectorizado contra incendios en cada forjado.

#### Ejemplo práctico realista
En un edificio de oficinas de 4 plantas ($1\,600\text{ m}^2$ totales), el arquitecto propone inicialmente colocar el Cuadro General de Baja Tensión (CGBT) en un trastero bajo una rampa de garaje sin ventilación y debajo de una bajante general de pluviales, con solo $0{,}65\text{ m}$ libres hasta el muro opuesto. Al revisar el trazo, el proyectista reubica el CGBT a un cuarto técnico seco junto al núcleo vertical de escaleras (central respecto a las plantas): gana una franja frontal libre de $1{,}20\text{ m}$ para apertura total de puertas, reduce la longitud media de los 4 subalimentadores de $48\text{ m}$ a $22\text{ m}$ (ahorrando sección de cobre y reduciendo $\Delta U$ en más de un $50\,\%$) y elimina el riesgo de inundación. *(Nota: tanto la franja libre de $1{,}20\text{ m}$ como la sectorización cortafuegos deben validarse en el reglamento eléctrico y código de edificación vigentes del país).*

#### Errores frecuentes
- Ubicar subtableros dentro de aseos, cuartos de limpieza o justo debajo de colectores de agua o unidades interiores de climatización que pueden condensar o gotear.
- Dejar tableros empotrados detrás de puertas abatibles o mobiliario fijo que impide la apertura completa y el acceso rápido en emergencia.
- Colocar el interruptor general a más de $2{,}0\text{ m}$ o por debajo de $0{,}4\text{ m}$ del suelo, dificultando la maniobra ergonómica y la lectura de instrumentos.
- Olvidar el espacio lateral y superior para la llegada de bandejas y el radio de curvatura de los cables de acometida gruesos.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué situar los subtableros cerca del centro de gravedad de las cargas mejora simultáneamente el rendimiento eléctrico y el coste de la instalación?
2. ¿Qué riesgos operativos y de seguridad aparecen si se reduce el espacio frontal de trabajo frente a un cuadro general?
3. ¿Qué condiciones ambientales y constructivas excluyen un espacio como ubicación válida para un tablero eléctrico?

---

### 3.2. Dimensionamiento espacial de canalizaciones: ocupación máxima, agrupamiento y radios mínimos de curvatura

#### Explicación breve y clara
Elegir el calibre de un conductor (Tema 5) no termina el problema constructivo: hay que alojar ese conductor dentro de **tubos (*conduit*)**, **bandejas portacables (*cable trays*)** o **canaletas** sin dañar su aislamiento durante el tiro, sin impedir su refrigeración y dejando espacio para mantenimiento o futuras ampliaciones. Un porcentaje de ocupación excesivo provoca atascos mecánicos en obra, abrasión de cubiertas, calentamiento mutuo (agravando el factor de corrección por agrupamiento $k_a$) y rotura de la geometría interna del aislamiento en curvas cerradas.

Por ello deben verificarse tres parámetros simultáneos en el trazado: (1) **ocupación geométrica máxima** (a título orientativo, límites como $\approx 40\,\%$ de la sección interior útil del tubo para 3 o más conductores en criterios tipo NEC Capítulo 9, o las tablas de diámetro mínimo y reserva para tendido/ampliación de normativas europeas como el REBT ITC-BT-21); (2) **disposición en bandeja** (preferiblemente en una sola capa con reserva del $20\,\%$–$30\,\%$ de ancho libre para cables de potencia); y (3) **radio mínimo de curvatura** ($R_{\min}$), función del diámetro exterior del cable $D_{\text{ext}}$ y del tipo de aislamiento/armadura según fabricante y norma.

#### Conceptos clave
- **Porcentaje de ocupación (factor de llenado):** relación porcentual entre la suma de las áreas exteriores de todos los cables alojados y el área interior útil de la canalización.
- **Radio mínimo de curvatura ($R_{\min}$):** menor radio admisible en un cambio de dirección para no aplastar el aislamiento ni deformar pantallas/armaduras (típicamente expresado como múltiplo de $D_{\text{ext}}$, p. ej. $6D$ a $12D$ según norma y fabricante).
- **Cajas de tiro y registro (*pull boxes*):** envolventes intermedias dispuestas tras tramos largos o acumulaciones de curvas (habitualmente cada 15–25 m o tras 2–3 curvas a 90°) para limitar la tensión de tracción.
- **Disposición monocapa vs. multicapa:** colocación en bandeja que determina el factor térmico de agrupamiento aplicado en el Tema 5.

#### Definiciones necesarias
- **Área interior útil ($A_{\text{int}}$):** superficie libre real de paso de un tubo o canaleta calculada con su diámetro o dimensiones interiores reales (no el diámetro nominal exterior comercial).
- **Ocupación en bandeja por ancho útil:** fracción de la anchura plana disponible de la bandeja ocupada por cables colocados uno junto a otro en capa única, respetando los límites térmicos y de carga mecánica por metro ($\text{kg}/\text{m}$) de los soportes.
- **Esfuerzo máximo de tiro:** fuerza de tracción admisible durante el tendido para no elongar el cobre ni rasgar el aislamiento, dependiente del coeficiente de rozamiento y del número de curvas acumuladas.

#### Ejemplo práctico realista
Se proyecta tender por el mismo tubo rígido curvable **3 circuitos monofásicos de tomas** ($3 \times [\text{F} + \text{N} + \text{PE}] = 9$ conductores unipolares H07Z1-K de $2{,}5\text{ mm}^2$, con diámetro exterior orientativo de catálogo $D_{\text{ext}} = 3{,}6\text{ mm}$).
- Área exterior de un conductor: $A_c = \pi \cdot (3{,}6 / 2)^2 = 10{,}18\text{ mm}^2$.
- Suma de los 9 conductores: $\sum A_c = 9 \times 10{,}18 = 91{,}6\text{ mm}^2$.
- Si se elige un tubo nominal $25\text{ mm}$ con diámetro interior real $D_{\text{int}} = 21{,}2\text{ mm}$: $A_{\text{int}} = \pi \cdot (21{,}2 / 2)^2 = 353{,}0\text{ mm}^2$.
- Porcentaje de ocupación: $\frac{91{,}6}{353{,}0} \times 100 = 25{,}9\,\%$ (inferior al límite orientativo del $40\,\%$ tipo NEC y coherente con reserva para tiro; además, deberá aplicarse el factor de corrección por agrupamiento de 3 circuitos en un mismo tubo y verificar la tabla de diámetros mínimos del reglamento vigente, p. ej., REBT ITC-BT-21 si aplica España).
- En paralelo, para un cable multipolar de acometida $5\text{G}35\text{ mm}^2$ ($D_{\text{ext}} \approx 30\text{ mm}$) cuyo fabricante fija $R_{\min} = 8 \times D_{\text{ext}}$ en instalación fija: $R_{\min} = 8 \times 30 = 240\text{ mm}$, por lo que no puede forzarse en una caja de $150\text{ mm}$ ni en un codo estándar cerrado.

#### Errores frecuentes
- Calcular el área del tubo usando el **diámetro exterior nominal** (p. ej. 25 mm) en lugar del diámetro interior real, sobreestimando el espacio disponible.
- Confundir la sección del cobre ($2{,}5\text{ mm}^2$) con el área exterior total del conductor con su aislamiento ($10{,}18\text{ mm}^2$).
- Apilar cables de potencia en 3 o 4 capas dentro de una bandeja estrecha sin corregir la intensidad admisible por agrupamiento ni verificar la carga en $\text{kg}/\text{m}$ de las ménsulas.
- Trazar 4 curvas de $90^\circ$ seguidas sin caja de registro intermedia, haciendo imposible el cableado en obra.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué la suma de las secciones nominales de cobre ($\text{mm}^2$) no sirve para calcular la ocupación de un tubo?
2. ¿Cómo se relacionan el porcentaje de llenado de una bandeja y el cálculo eléctrico de secciones visto en el Tema 5?
3. ¿Qué consecuencias mecánicas y eléctricas tiene vulnerar el radio mínimo de curvatura en un cable de gran sección?

---

### 3.3. Separación de sistemas y compatibilidad electromagnética: potencia, alumbrado de emergencia y telecomunicaciones

#### Explicación breve y clara
En un edificio moderno conviven canalizaciones de **potencia en baja tensión** (con armónicos, conmutaciones de variadores o arranques de motores), **circuitos de seguridad y alumbrado de emergencia** (que deben seguir funcionando durante un incendio el tiempo reglamentario) y **redes de datos, voz, control BMS y fibra óptica**. Llevarlos mezclados dentro de un mismo tubo o bandeja sin separación compromete la seguridad contra incendios, incumple los reglamentos de baja tensión/telecomunicaciones y provoca interferencias electromagnéticas (ruido inducido por acoplamiento capacitivo e inductivo $M \cdot dI/dt$).

La regla básica de diseño establece canalizaciones independientes o compartimentadas mediante tabiques separadores metálicos puestos a tierra, mantenimiento de distancias mínimas en recorridos paralelos (como referencia ilustrativa, las tablas de separación de normas tipo **EN 50174-2** o **ANSI/TIA-569**, verificando siempre su aplicabilidad en el proyecto) y **cruces ortogonales (a $90^\circ$)** cuando resulte inevitable cruzar potencia y datos.

#### Conceptos clave
- **Acoplamiento electromagnético:** transferencia indeseada de ruido eléctrico desde cables de potencia con corrientes variables ($dI/dt$) o tensiones conmutadas ($dV/dt$) hacia pares de datos o buses de control próximos.
- **Cruce ortogonal ($90^\circ$):** geometría obligatoria cuando una bandeja o tubo de telecomunicaciones cruza uno de potencia para anular prácticamente la inducción mutua.
- **Compartimentación y tabique separador:** división física continua dentro de una bandeja o canaleta (preferiblemente metálica y conectada a tierra) para separar servicios distintos cuando comparten trazado.
- **Circuitos de seguridad/emergencia:** líneas de alumbrado de emergencia, extracción de humos o detección de incendios que requieren trazado protegido, cables resistentes al fuego y separación de circuitos ordinarios según normativa vigente.

#### Definiciones necesarias
- **Compatibilidad electromagnética (EMC) en trazado:** conjunto de prácticas de segregación espacial, apantallamiento y puesta a tierra que garantizan que los cables de potencia no degraden la señal de datos o instrumentación adyacentes.
- **Separación física de servicios:** distancia mínima o barrera constructiva exigida entre redes de distinta tensión, función o nivel de seguridad (BT potencia vs. muy baja tensión de seguridad MBTS/SELV y datos).
- **Cableado estructurado de telecomunicaciones:** infraestructura de pares trenzados apantallados/no apantallados (UTP/FTP/S/FTP) o fibra óptica sujeta a restricciones estrictas de radio de curvatura, tracción y distancia a fuentes de interferencia.

#### Ejemplo práctico realista
En una oficina de ingeniería, la bandeja principal del pasillo central lleva alimentadores trifásicos con variadores de frecuencia de climatización ($400\text{ V}$) y, a tan solo $2\text{ cm}$ en paralelo durante $35\text{ m}$, el instalador tendió los cables UTP Cat 6 sin apantallar de la red local porque «entraban en la misma anchura». El resultado son caídas intermitentes de enlaces Ethernet al arrancar las enfriadoras. La solución de diseño correcto separa las bandejas en dos niveles independientes (potencia en bandeja inferior y datos en bandeja superior a $200\text{ mm}$ de distancia libre vertical, o mediante bandeja de chapa cerrada puesta a tierra y cable apantallado según la tabla aplicable de EN 50174-2 / TIA-569 a verificar), asegurando cruces estrictamente a $90^\circ$ y derivando el alumbrado de emergencia por conducto independiente resistente al fuego.

#### Errores frecuentes
- Mezclar cables de $230/400\text{ V}$ y cables de datos o control ($24\text{ V}$) dentro del mismo tubo o caja de empalmes sin aislamiento equivalente ni separación reglamentaria.
- Trazar cables de datos paralelos junto a reactancias, variadores de frecuencia o luminarias de descarga a menos de las distancias recomendadas.
- Compartir la misma bandeja sin tabique separador entre circuitos normales y circuitos críticos de evacuación o contraincendios.
- Emplear fibra óptica (inmune a EMI) con radios de curvatura cerrados como si fuera cable eléctrico flexible, provocando pérdidas ópticas o rotura de fibras.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué un cruce a $90^\circ$ entre una línea de potencia y una de datos reduce drásticamente la interferencia respecto a un tramo paralelo?
2. ¿Qué diferencia hay entre separar por distancia en aire, usar tabique separador metálico puesto a tierra y migrar datos a fibra óptica?
3. ¿Por qué los circuitos de alumbrado de emergencia y seguridad contra incendios tienen requisitos de trazo propios frente a los circuitos de tomas ordinarias?

---

### 3.4. Coordinación espacial multidisciplinar (MEP + Estructura) y criterios de trazado BIM con apoyo responsable de IA

#### Explicación breve y clara
En edificación real, las instalaciones eléctricas compiten por un espacio muy limitado en falsos techos, patinillos y losas junto con **estructura**, **HVAC (climatización y ventilación)** e **instalaciones hidrosanitarias (fontanería, saneamiento y protección contra incendios)**. Un buen trazo eléctrico respeta la **jerarquía física de coordinación MEP**: primero van los conductos con pendiente obligatoria por gravedad (saneamiento/pluviales), después los grandes conductos de aire de HVAC (difíciles de desviar), a continuación tuberías a presión y rociadores, y las bandejas eléctricas y de datos aprovechan cotas accesibles respetando su distancia a tuberías de agua (preferentemente **por encima** de conducciones hidráulicas o desplazadas lateralmente para evitar goteos) y a conducciones calientes (calefacción/ACS) para no elevar la temperatura ambiente del conductor.

En el flujo hacia **Revit MEP** (Bloque 3), el criterio de trazo se traduce en definir **franjas de cota** (*elevation zones*), reservas de paso en vigas y muros (*pasamuros* con sellado cortafuegos *firestop*), y respeto a juntas estructurales. Aquí la **IA (ChatGPT/Claude)** puede asistir redactando listas de comprobación de coordinación espacial o estructurando criterios de trazado a partir de datos anonimizados, pero **nunca puede detectar interferencias 3D reales** ni sustituir la inspección geométrica y normativa del proyectista.

#### Conceptos clave
- **Jerarquía de coordinación MEP:** orden de prioridad espacial en plenums y *shafts* según rigidez geométrica y dependencia de la gravedad de cada sistema.
- **Franja de cota (*elevation band*):** banda vertical asignada en falso techo por disciplina (por ejemplo, datos/electricidad en cota definida) para evitar cruces continuos e interferencias (*clashes*).
- **Pasamuros y sellado cortafuegos (*firestop*):** apertura prevista en fase estructural para atravesar elementos resistentes o sectorizaciones de incendio, restituyendo la resistencia al fuego exigida.
- **Separación térmica respecto a HVAC/ACS:** alejamiento mínimo respecto a tuberías de agua caliente, vapor o conductos sin aislar para evitar sobrecalentamiento de cables.

#### Definiciones necesarias
- **Interferencia (*clash*) dura y blanda:** colisión física directa entre dos elementos constructivos (clash duro, ej. bandeja atravesando una viga) o invasión de un volumen de mantenimiento/acceso necesario (clash blando, ej. conducto HVAC bloqueando el acceso a una caja de registro).
- **Junta de dilatación estructural:** discontinuidad constructiva del edificio destinada a absorber movimientos térmicos o sísmicos que ninguna canalización rígida debe cruzar sin elemento flexible y manguito adecuado.
- **Criterios de trazo BIM:** reglas geométricas y paramétricas previas al modelado en Revit MEP que fijan alturas libres, separaciones entre servicios y familias/soportes autorizados.

#### Ejemplo práctico realista
En un falso techo con altura libre útil de $420\text{ mm}$ entre el bajo de viga y la placa de pladur, coexisten: una bajante horizontal de saneamiento con pendiente del $1{,}5\,\%$ ($\varnothing\,110\text{ mm}$ que cae de cota $+3{,}15\text{ m}$ a $+2{,}95\text{ m}$), un conducto rectangular de impulsión de aire de $500 \times 250\text{ mm}$ aislado, tubería de PCI de $\varnothing\,65\text{ mm}$ y dos bandejas eléctricas ($200 \times 60\text{ mm}$ potencia y $150 \times 60\text{ mm}$ datos). Si no se planifican cotas antes de modelar, la bandeja de potencia choca con el conducto HVAC o queda atrapada encima sin acceso para tender cables ni registrar cajas. Asignando corredores paralelos en planta (HVAC al centro del pasillo; saneamiento en banda lateral izquierda; bandejas eléctricas en banda lateral derecha a $+3{,}05\text{ m}$ potencia y $+3{,}18\text{ m}$ datos, siempre con espacio superior mínimo de $150\text{ mm}$ para tendido de manos/cables y evitando quedar bajo la tubería de PCI), se eliminan colisiones antes de abrir Revit.

#### Errores frecuentes
- Modelar o dibujar líneas eléctricas en planta 2D sin dibujar al menos secciones críticas de pasillos y cuartos técnicos.
- Colgar bandejas eléctricas directamente bajo tuberías de agua fría/ACS o colectores de saneamiento, exponiendo los cuadros y empalmes a condensación o fugas.
- Atravesar vigas de hormigón o muros cortafuegos sin haber coordinado pasamuros previos ni especificado sellado intumescente.
- Pedir a ChatGPT o Claude que «valide el trazado» enviando planos confidenciales del cliente o confiando en sugerencias genéricas sin comprobar alturas reales en sección.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué criterio justifica el orden de prioridad entre saneamiento, HVAC, fontanería y canalizaciones eléctricas en un falso techo estrecho?
2. ¿Qué diferencia existe entre una interferencia dura (*hard clash*) y una interferencia blanda (*soft clash*) de mantenimiento?
3. ¿Cómo se documenta un cruce de junta de dilatación o de sector de incendio en el trazado eléctrico?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** combina microexposición técnica, cálculos geométricos rápidos de ocupación/curvatura, resolución de un caso de coordinación MEP en sección y planta, y uso controlado de IA para redactar listas de chequeo de trazado.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
| :--- | :---: | :--- | :--- |
| **1. Apertura y activación** | 00:00 – 00:25 (25 min) | Presenta los objetivos del Tema 7, conecta con los cálculos del Tema 6 y dirige la **Actividad 1** mostrando 4 fotografías reales de errores graves de trazado y cuartos eléctricos. | Diagnostica rápidamente qué falla en cada imagen (accesibilidad, ocupación, humedad, cruce sin protección) y responde a la evaluación diagnóstica inicial. |
| **2. Microexposición Bloque A (Zonificación y ocupación)** | 00:25 – 01:00 (35 min) | Explica los apartados 3.1 y 3.2: centro de gravedad de cargas, espacios libres de trabajo, cálculo real de ocupación de tubos/bandejas y radio mínimo de curvatura. | Toma notas en su ficha de trabajo y resuelve en vivo dos ejercicios cortos de porcentaje de ocupación de tubo y cálculo de $R_{\min}$. |
| **3. Actividad práctica de aplicación técnica** | 01:00 – 01:40 (40 min) | Lanza y supervisa la **Actividad 2**: dimensionamiento geométrico de canalizaciones y zonificación de subtableros de una planta comercial tipo. | En parejas, calcula ocupación de 3 tubos y 1 bandeja, selecciona cajas de tiro, verifica radios de curvatura y justifica la ubicación del subtablero. |
| **Descanso breve** | 01:40 – 01:55 (15 min) | Pausa activa y verificación de acceso a los materiales del caso práctico. | Descanso fuera de pantalla. |
| **4. Microexposición Bloque B (EMC y coordinación MEP)** | 01:55 – 02:25 (30 min) | Expone los apartados 3.3 y 3.4: separación potencia-emergencia-datos, jerarquía MEP en falso techo, pasamuros y límites de la IA en coordinación. | Analiza un corte esquemático de falso techo y clasifica interferencias duras vs. blandas entre HVAC, saneamiento y bandejas. |
| **5. Caso práctico integrado** | 02:25 – 03:10 (45 min) | Presenta el caso **TecnoVigo Ingeniería, S.L.**, organiza equipos de 3–4 personas y realiza seguimiento crítico cuestionando accesibilidad, EMI y cotas. | En equipos, rediseña el cuarto técnico y las bandas de cota en planta y sección, resuelve la separación potencia/datos y redacta criterios de coordinación. |
| **6. Puesta en común y transferencia a proyecto** | 03:10 – 03:45 (35 min) | Modera la exposición de 2–3 equipos y lanza la **Actividad 3** (creación de checklist de trazo previo a Revit MEP con apoyo crítico de IA). | Contrasta soluciones del caso, depura un *prompt* anonimizado para generar un checklist de trazo y detecta al menos 2 omisiones técnicas de la IA. |
| **7. Síntesis, evaluación sumativa y cierre** | 03:45 – 04:00 (15 min) | Resume los criterios maestros de trazado, aplica el cuestionario breve de cierre y enlaza con el **Tema 8 (Ejemplo práctico de diseño y cálculo)**. | Completa el test sumativo y la autoevaluación de cierre. |

**Suma total verificada:** 25 + 35 + 40 + 15 + 30 + 45 + 35 + 15 = **240 minutos (4 horas)**.

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «Cazadores de fallos en obra y cuarto técnico»
- **Nombre:** Cazadores de fallos en obra y cuarto técnico.
- **Objetivo:** Activar la mirada crítica del alumnado para detectar incumplimientos constructivos, riesgos de mantenimiento y errores de trazado a partir de evidencias visuales reales.
- **Instrucciones para el alumnado:**
  1. Observad las 4 imágenes/esquemas proyectados por el formador (un tablero bloqueado por un conducto HVAC, un tubo saturado al ~75 %, una bandeja eléctrica bajo un colector de saneamiento y cables UTP encintados sobre un alimentador trifásico).
  2. En 6 minutos de forma individual, anotad en vuestra ficha el fallo principal de cada caso, el riesgo técnico (térmico, mecánico, eléctrico o de mantenimiento) y la corrección inmediata.
  3. Participad en la puesta en común rápida defendiendo cuál de los 4 fallos supone mayor coste de corrección si se detecta tras cerrar el falso techo.
- **Materiales necesarios:** Diapositiva con 4 casos visuales anonimizados y ficha de trabajo impresa o digital.
- **Tiempo estimado:** 15 minutos (integrados en la Fase 1).
- **Rol del formador:** Dinamizar la votación rápida, evitar respuestas genéricas («está mal puesto») y traducirlas a términos técnicos (ocupación excesiva, *soft clash*, acoplamiento inductivo, protección ambiental IP).
- **Producto o entregable esperado:** Tabla de diagnóstico rápido con 4 fallos clasificados por riesgo y medida correctora.
- **Criterios de éxito:** El alumnado identifica al menos 3 de los 4 riesgos técnicos específicos y relaciona la falta de coordinación previa con sobrecostes de obra.

### Actividad 2 (Aplicación técnica): «Dimensionamiento geométrico de canalizaciones y radios de curvatura»
- **Nombre:** Dimensionamiento geométrico de canalizaciones y radios de curvatura.
- **Objetivo:** Aplicar el cálculo de área útil interior, porcentaje de ocupación, ancho de bandeja con reserva y radio mínimo de curvatura en un conjunto realista de circuitos de potencia y datos.
- **Instrucciones para el alumnado:**
  1. Trabajad en parejas con la tabla de conductores suministrada (3 circuitos trifásicos de fuerza, 4 circuitos monofásicos de alumbrado/tomas y 6 cables UTP Cat 6A con sus diámetros exteriores reales $D_{\text{ext}}$ en $\text{mm}$).
  2. Calculad la sección interior útil necesaria y seleccionad diámetros comerciales de tubo (*conduit*) manteniendo una ocupación orientativa $\le 40\,\%$ (y verificando qué criterio reglamentario local habría que comprobar).
  3. Dimensionad una bandeja perforada para los 3 circuitos de potencia en **capa única** con al menos $25\,\%$ de ancho libre de reserva y calculad el radio mínimo de curvatura del cable de mayor sección ($R_{\min} = 8 \times D_{\text{ext}}$).
  4. Definid la distancia entre cajas de registro y la solución de separación respecto a los 6 cables de datos.
- **Materiales necesarios:** Hoja de cálculo o ficha de trabajo, tabla orientativa de diámetros interiores de tubos comerciales y diámetros exteriores de cables de fabricante.
- **Tiempo estimado:** 40 minutos (Fase 3).
- **Rol del formador:** Resolver dudas sobre diámetro nominal vs. diámetro interior real, comprobar que nadie sume solo secciones de cobre en $\text{mm}^2$ y validar las unidades SI.
- **Producto o entregable esperado:** Hoja de dimensionamiento geométrico cumplimentada con justificación de tubo, ancho de bandeja, radio de curvatura y esquema de separación.
- **Criterios de éxito:** Cálculos geométricos exactos con unidades correctas ($\text{mm}$ y $\text{mm}^2$), ocupación dentro del límite fijado, respeto de monocapa en bandeja y cálculo correcto de $R_{\min}$.

### Actividad 3 (Transferencia a proyecto real): «Protocolo de trazo y auditoría asistida por IA previo a Revit MEP»
- **Nombre:** Protocolo de trazo y auditoría asistida por IA previo a Revit MEP.
- **Objetivo:** Elaborar un estándar de criterios de trazado transferible a un proyecto profesional real y utilizar ChatGPT o Claude de forma controlada para generar y depurar una lista de comprobación previa al modelado BIM.
- **Instrucciones para el alumnado:**
  1. Seleccionad un proyecto tipo real de vuestro entorno (nave pequeña, clínica, oficina o local comercial) manteniendo todos los datos de cliente **estrictamente anonimizados**.
  2. Redactad un *prompt* estructurado (objetivo, tipología de edificio, restricciones de altura de plenum, disciplinas presentes y formato de tabla) solicitando a ChatGPT o Claude un checklist de coordinación espacial de trazado eléctrico en 10 puntos.
  3. Auditad críticamente la respuesta de la IA: señalad al menos 2 criterios demasiado vagos, omitidos o no verificables normativamente (por ejemplo, omitir normativa aplicable del país, confundir cálculo eléctrico con trazado geométrico o ignorar radios de curvatura), y corregidlos en vuestra plantilla técnica final.
- **Materiales necesarios:** Plantilla técnica práctica (Sección 8), acceso a un asistente de IA (o ejemplo impreso de salida de IA para análisis offline).
- **Tiempo estimado:** 25 minutos (integrados en la Fase 6).
- **Rol del formador:** Recordar la prohibición de subir planos reales confidenciales a la IA, revisar la precisión de los *prompts* y validar que las correcciones humanas reflejen criterio técnico sólido.
- **Producto o entregable esperado:** Checklist personalizado de 10 puntos validado por el técnico + registro breve «Salida IA vs. Corrección de ingeniería».
- **Criterios de éxito:** El entregable incluye anonimización, referencias explícitas a normativa por verificar según país, cotas/reservas cuantificadas y detección documentada de las carencias de la respuesta generada por IA.

---

## 6. Caso práctico

### Caso: TecnoVigo Ingeniería, S.L. — «Un falso techo sin aire y un cuarto eléctrico bajo sospecha»

#### Contexto empresarial
**TecnoVigo Ingeniería, S.L.** es una pyme de desarrollo de prototipos electrónicos y oficinas técnicas situada en un polígono industrial de Pontevedra. Ha alquilado una nave diáfana de una planta más entreplanta ($680\text{ m}^2$ útiles) para implantar zona de oficinas técnicas, sala de servidores (CPD), laboratorio de ensayos con bancos de potencia trifásica y taller de montaje. El proyecto de reforma está en fase de diseño previo antes de pasar a modelado BIM y licitación de obra.

#### Situación o problema
El borrador inicial de distribución entregado por el equipo de arquitectura interior presenta graves problemas constructivos que amenazan con bloquear la obra:
1. El Cuadro General de Baja Tensión (CGBT) se proyectó dentro del aseo accesible/cuarto de limpieza bajo el termo eléctrico de agua caliente, con $0{,}70\text{ m}$ libres hasta el tabique frontal.
2. El pasillo central que conecta el CGBT con el laboratorio y las oficinas tiene un falso techo con altura útil total de solo **$450\text{ mm}$** (desde cara inferior de forjado hasta placa de falso techo), por donde deben discurrir: un colector horizontal de saneamiento con pendiente, un conducto de impulsión de climatización, la red de rociadores/BIE y las bandejas eléctricas y de datos.
3. En la versión preliminar de planta, el delineante trazó una **única bandeja de acero perforada de $150 \times 60\text{ mm}$** por el centro del pasillo llevando juntos 5 cables de potencia XLPE ($400\text{ V}$ hacia bancos de ensayo y enfriadora), el circuito resistente al fuego del alumbrado de emergencia y 14 cables de red Cat 6A hacia los puestos de ingeniería y el CPD.
4. Además, el alimentador principal de acometida ($5\text{G}50\text{ mm}^2$ Cu, $D_{\text{ext}} = 34\text{ mm}$) gira a $90^\circ$ en la entrada al cuadro dentro de un hueco de $180\text{ mm}$ de fondo.

#### Datos disponibles

| Elemento / Sistema | Parámetro geométrico o técnico disponible | Observación crítica |
| :--- | :--- | :--- |
| **Altura útil de plenum (pasillo)** | $450\text{ mm}$ totales (ancho del pasillo: $1{,}80\text{ m}$) | Existen vigas de cuelgue transversales que reducen localmente a $320\text{ mm}$ en 2 puntos |
| **Saneamiento descolgado** | Tubería PVC $\varnothing\,110\text{ mm}$, pendiente $1{,}5\,\%$ en $24\text{ m}$ | Cota eje inicial $-0{,}10\text{ m}$ bajo forjado; cae $360\text{ mm}$ a lo largo del pasillo |
| **Conducto HVAC principal** | Chapa aislada $550 \times 250\text{ mm}$ (alto total con aislamiento $300\text{ mm}$) | No puede comprimirse por pérdida de carga acústica/caudal |
| **Cables potencia en bandeja** | 5 cables multipolares $0{,}6/1\text{ kV}$ ($D_{\text{ext}}$: $2\times 26\text{ mm}$ y $3\times 18\text{ mm}$) | Requieren capa única y al menos $25\,\%$ de reserva de ancho |
| **Red de datos (CPD + oficinas)** | 14 cables UTP Cat 6A ($D_{\text{ext}} \approx 7{,}5\text{ mm}$ c/u) + 2 cables de fibra óptica | Alta sensibilidad a EMI de bancos de ensayo con variadores |
| **Alumbrado de emergencia** | 2 circuitos monofásicos con cable resistente al fuego | Deben mantener integridad física/funcional independiente |
| **Cable acometida principal** | $5\text{G}50\text{ mm}^2$ ($D_{\text{ext}} = 34\text{ mm}$), $R_{\min}$ fabricante $= 8 \times D_{\text{ext}}$ | Hueco actual tras el cuadro: $180\text{ mm}$ |

#### Preguntas de análisis
1. ¿Qué infracciones de seguridad, accesibilidad y mantenimiento presenta la ubicación actual del CGBT y el hueco de entrada del cable de $5\text{G}50\text{ mm}^2$?
2. Sumando los diámetros exteriores de los 5 cables de potencia en capa única, ¿cabe esa carga en la bandeja de $150\text{ mm}$ dejando un $25\,\%$ de reserva? ¿Qué ancho comercial de bandeja proponéis?
3. Si se mantiene el saneamiento con pendiente en el centro del pasillo junto al conducto HVAC de $300\text{ mm}$ de altura, ¿qué colisiones (*hard clashes* y *soft clashes*) se producen bajo las vigas de $320\text{ mm}$?
4. ¿Cómo resolveréis la segregación física y electromagnética entre potencia, alumbrado de emergencia y datos Cat 6A en el pasillo?

#### Tarea a realizar
En equipos de 3–4 personas (45 minutos), elaborad una **Propuesta de Reordenación de Trazo MEP** que incluya:
1. **Nueva zonificación del cuarto técnico eléctrico** (ubicación propuesta respecto al centro de cargas, distancia frontal libre de maniobra, ventilación y separación de zonas húmedas).
2. **Dimensionamiento de canalizaciones** (ancho de bandeja de potencia con reserva $\ge 25\,\%$, bandeja independiente de datos/tabique y canalización del alumbrado de emergencia, más $R_{\min}$ exacto y profundidad de cámara/registro necesaria para el $5\text{G}50\text{ mm}^2$).
3. **Sección esquemática de coordinación en el pasillo ($1{,}80\text{ m}$ de ancho $\times 0{,}45\text{ m}$ de plenum)**: distribución por bandas paralelas en planta y cotas verticales para evitar el saneamiento y salvar el paso bajo vigas de $320\text{ mm}$ (o justificación de pasamuros estructurales).
4. **Nota de verificación normativa** indicando qué reglamentos exactos habría que comprobar antes de emitir proyecto constructivo en España (REBT, CTE DB-SI, ICT/normativa de telecomunicaciones aplicable).

#### Posibles soluciones o criterios de análisis
- **Reubicación y accesibilidad:** sacar el CGBT del aseo/zona húmeda a un recinto técnico seco junto al muro medianero entre oficinas y laboratorio (acortando alimentadores pesados), garantizando al menos $1{,}00\text{–}1{,}20\text{ m}$ de franja frontal libre (verificando reglamento vigente) y acceso directo.
- **Radio de curvatura de acometida:** $R_{\min} = 8 \times 34\text{ mm} = 272\text{ mm}$ de radio interior (más el propio diámetro del cable y margen de empalme/prensaestopa, requiriendo cámara/fondo mínimo de $350\text{–}400\text{ mm}$ o acometida por parte superior/inferior alineada, nunca en $180\text{ mm}$).
- **Ancho de bandeja de potencia:** suma de diámetros $= 2(26) + 3(18) = 52 + 54 = 106\text{ mm}$. Con $25\,\%$ mínimo de reserva de ancho: $106 / 0{,}75 = 141{,}3\text{ mm}$ (una bandeja de $150\text{ mm}$ solo admitiría potencia justísima en capa única sin holgura ni separaciones de aire si los cables se tocan; lo recomendable para diseño profesional con holgura y posible ampliación real del laboratorio es especificar **bandeja de $200 \times 60\text{ mm}$** para potencia, logrando $47\,\%$ de ancho libre).
- **Segregación de servicios:** instalar **bandeja dedicada de $100 \times 60\text{ mm}$ o $150 \times 60\text{ mm}$** para los 14 cables Cat 6A + fibras, separada físicamente al menos $150\text{–}200\text{ mm}$ (o utilizando bandeja metálica cerrada puesta a tierra según tablas verificadas de EN 50174-2 / TIA-569) y tubo metálico/canalización independiente resistente al fuego para los 2 circuitos de alumbrado de emergencia.
- **Sección del pasillo de $1{,}80\text{ m}$:** dividir el ancho en 3 bandas paralelas en lugar de apilar todo en el centro:
  - Banda A ($0{,}45\text{ m}$ izquierda): saneamiento con pendiente (que no puede variar de cota) + PCI.
  - Banda B ($0{,}70\text{ m}$ central): conducto HVAC ($550\text{ mm}$ ancho $\times 300\text{ mm}$ alto), estudiando paso bajo viga o reducción local ensanchada ($700 \times 220\text{ mm}$) coordinada con el ingeniero de climatización.
  - Banda C ($0{,}65\text{ m}$ derecha): bandeja de datos arriba (cota más próxima a forjado, p. ej. $150\text{ mm}$ bajo forjado dejando acceso superior/lateral) y bandeja de potencia $200\text{ mm}$ por debajo con separación libre $\ge 200\text{ mm}$ o desplazadas lateralmente, lejos del saneamiento y accesibles desde el falso techo registrable.

#### Preguntas de reflexión final
- ¿Qué habría costado corregir estas interferencias si se hubieran descubierto con el conducto HVAC y el saneamiento ya montados en obra?
- ¿Qué información imprescindible debe entregar el proyectista eléctrico al modelador BIM de Revit MEP antes de que empiece a dibujar un solo tubo o bandeja?

---

## 7. Evaluación

### Evaluación diagnóstica
- **Instrumento (inicio de sesión, 5 min):** Sondeo interactivo de 4 preguntas rápidas (sin calificación) sobre: (1) si la sección útil de un tubo se calcula con el diámetro exterior o interior; (2) si el $40\,\%$ de ocupación aplica a cables con aislamiento o solo a cobre; (3) prioridad espacial entre saneamiento y electricidad en falsos techos; y (4) riesgo principal de llevar potencia y datos en el mismo conducto.
- **Finalidad:** Identificar errores conceptuales previos y calibrar el ritmo del Bloque A.

### Evaluación formativa
- Observación directa del formador durante las **Actividades 1, 2 y 3** y el trabajo por equipos en el caso **TecnoVigo Ingeniería, S.L.** mediante lista de cotejo:
  - Distingue diámetro nominal de diámetro interior real en el cálculo de ocupación.
  - Aplica correctamente el radio mínimo de curvatura ($R_{\min} = k \cdot D_{\text{ext}}$).
  - Separa potencia, emergencia y datos con criterio técnico justificado.
  - Respeta la jerarquía MEP (gravedad/HVAC antes que electricidad) en sección transversal.
  - Verifica y corrige críticamente las salidas de la IA sin delegar decisiones normativas.

### Evaluación sumativa
Se compone de dos evidencias al cierre de la sesión:
1. **Entregable grupal del caso práctico** (Propuesta de reordenación MEP de *TecnoVigo Ingeniería, S.L.*, **60 %** del peso del tema).
2. **Cuestionario técnico breve (5 ítems aplicados)** + **Actividad 3 individual** (checklist validado de trazo previo a Revit MEP, **40 %** del peso del tema).

### Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
| :--- | :--- | :--- | :--- | :--- |
| **1. Zonificación y accesibilidad de cuartos/tableros** | Mantiene cuadros en zonas húmedas, obstruidas o sin espacio de maniobra ni justificación. | Reubica el cuadro lejos de zonas húmedas, pero omite franjas libres de trabajo o centro de cargas. | Zonifica el cuadro cerca del centro de gravedad de cargas, con franja libre de trabajo, ventilación y nota de verificación normativa. | Optimiza además reservas de ampliación, recorridos de acometida, protección IP/IK y seguridad de evacuación documentando cotas precisas. |
| **2. Cálculo de ocupación y radios de curvatura** | Usa secciones de cobre o diámetro nominal exterior para calcular el llenado, o ignora $R_{\min}$. | Calcula áreas aproximadas con errores menores de conversión o sin contemplar margen de reserva. | Calcula exactamente el porcentaje de ocupación con diámetros exteriores/interiores reales, reserva en bandeja y $R_{\min}$. | Integra además el impacto térmico del agrupamiento (Tema 5), ubicación de cajas de tiro y holgura constructiva en curvas y entradas de cuadro. |
| **3. Separación de sistemas y compatibilidad electromagnética** | Mezcla potencia, alumbrado de emergencia y datos en una misma bandeja o tubo sin justificación. | Propone separar servicios pero sin cuantificar distancias, tabiques, cruces ortogonales ni protección de emergencia. | Segrega potencia, emergencia y telecomunicaciones con bandejas/tubos dedicados, cruces a $90^\circ$ y puesta a tierra de bandejas metálicas. | Justifica la solución por niveles de señal/EMI (citando estándares ilustrativos a verificar), integra apantallamiento/fibra si procede y protege líneas resistentes al fuego. |
| **4. Coordinación MEP y uso crítico de IA** | Presenta un trazo en planta que colisiona con vigas, saneamiento o HVAC, o acepta salidas de IA sin revisar. | Identifica colisiones evidentes, pero propone soluciones parciales en planta sin validar la sección vertical. | Resuelve bandas paralelas y cotas en sección respetando la jerarquía MEP, e identifica carencias en el checklist generado con IA. | Propone un esquema completo planta+sección sin colisiones duras ni blandas, con pasamuros/juntas resueltos y auditoría rigurosa de la IA con datos anonimizados. |

### Actividad de autoevaluación
Al finalizar la sesión (5 minutos), cada participante responde por escrito en su cuaderno o campus virtual:
1. *¿Qué parámetro geométrico o de coordinación espacial solía pasar por alto en mis trazos 2D anteriores?*
2. *Antes de abrir Revit MEP en mi próximo proyecto, ¿qué tres comprobaciones físicas de sección y separación voy a fijar obligatoriamente?*
3. *¿Qué errores o suposiciones peligrosas detecté al pedirle criterios de trazado a un asistente de IA?*

---

## 8. Materiales y recursos

### Guion de diapositivas
- **Slide 1 — Portada y mapa del Bloque 1:** Título del Tema 7 (7/11), conexión con dimensionamiento de conductores (T5) y protecciones (T6), y resultado esperado de aprendizaje.
- **Slide 2 — Activación y evaluación diagnóstica:** Sondeo inicial de 4 ítems + 4 fotografías/casos reales de fallos constructivos de cuartos eléctricos y canalizaciones (Actividad 1).
- **Slide 3 — Zonificación de cuartos eléctricos y tableros:** Centro de gravedad de cargas, distancias libres de trabajo, altura de maniobra, ventilación, zonas húmedas y recordatorio de verificación reglamentaria local.
- **Slide 4 — Ocupación de canalizaciones y radios de curvatura:** Fórmula geométrica $\sum A_{\text{ext}} / A_{\text{int}}$, tubo vs. bandeja en capa única vs. canaleta, cajas de tiro y cálculo práctico de $R_{\min} = k \cdot D_{\text{ext}}$ (Actividad 2).
- **Slide 5 — Separación de sistemas y EMC:** Potencia BT vs. circuitos de seguridad/emergencia vs. redes de datos/BMS; tabiques separadores puestos a tierra, distancias en paralelo y cruces a $90^\circ$.
- **Slide 6 — Jerarquía de coordinación MEP y paso a BIM:** Secciones de falso techo (gravedad → HVAC → PCI → electricidad/datos), *hard/soft clashes*, pasamuros *firestop* y juntas de dilatación.
- **Slide 7 — Caso práctico «TecnoVigo Ingeniería, S.L.»:** Planta, datos del plenum de $450\text{ mm}$, tabla de cargas/cables y reto por equipos (45 min).
- **Slide 8 — IA responsable en criterios de trazo y cierre:** Uso de ChatGPT/Claude para checklists anonimizados (Actividad 3), límites frente a detección real de colisiones, evaluación sumativa y puente al Tema 8.

### Ficha de trabajo
Documento de 2 páginas para el alumnado con: (1) matriz de registro para la Actividad 1; (2) tabla guiada de cálculo de ocupación de tubos y ancho de bandeja para la Actividad 2; (3) esquema mudo de sección transversal de pasillo para resolver el caso *TecnoVigo Ingeniería, S.L.*; y (4) cuestionario breve de autoevaluación.

### Plantilla técnica práctica
```text
=== CHECKLIST Y HOJA DE CRITERIOS DE TRAZO ELÉCTRICO (PRE-BIM) ===
Proyecto (código anonimizado): ___________________   País / Norma aplicable a verificar: ___________________

1. CUARTOS TÉCNICOS Y TABLEROS
- Ubicación respecto a centro de cargas: _________________  Franja frontal libre prevista (m): ________
- Libre de bajantes/zonas húmedas: [ ] Sí  [ ] No        Ventilación y protección IP/IK: ______________
- Reserva física de ampliación en cuadro (%): ________

2. CANALIZACIONES, OCUPACIÓN Y CURVATURA
| Tramo / Código | Tipo canalización (Tubo/Bandeja) | N.º y D_ext cables (mm) | Ocupación calculada (%) | Reserva (%) | R_mín cable mayor (mm) | Factor agrupamiento aplicado (T5) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| | | | | | | |

3. SEGREGACIÓN Y COMPATIBILIDAD ELECTROMAGNÉTICA
- Separación física potencia vs. datos (mm o tabique puesto a tierra): __________________________________
- Cruces potencia/datos estrictamente a 90°: [ ] Sí       - Circuitos de emergencia independientes: [ ] Sí

4. COORDINACIÓN ESPACIAL MEP Y ESTRUCTURA
- Cota asignada a bandejas potencia / datos: _______________   Paso bajo vigas verificado: [ ] Sí
- Pasamuros y sellados cortafuegos (firestop) identificados: [ ] Sí   - Juntas dilatación resueltas: [ ] Sí
- Revisión humana independiente realizada sobre sugerencias de IA: [ ] Sí (Responsable: ______________)
```

### Lecturas y recursos recomendados
*(Nota importante: el formador y el alumnado deben validar siempre la edición vigente, el país de aplicación, la disponibilidad de acceso y los enlaces antes de utilizar cualquiera de estas referencias en un proyecto o sesión).*
- **Reglamento Electrotécnico para Baja Tensión (REBT, España — especialmente ITC-BT-19, ITC-BT-20, ITC-BT-21 e ITC-BT-28) y su Guía Técnica de Aplicación** *(referencia ilustrativa para España; verificar actualizaciones oficiales vigentes del Ministerio competente)*.
- **Serie IEC 60364-5-52** (*Low-voltage electrical installations — Selection and erection of electrical equipment — Wiring systems*) *(verificar edición vigente)*.
- **NFPA 70 / National Electrical Code (NEC) — Artículos 110.26, Capítulo 9 (Tablas de ocupación) y Artículos sobre bandejas/conductos** *(referencia ilustrativa si el proyecto sigue código norteamericano/latinoamericano basado en NEC; verificar edición adoptada por la autoridad competente)*.
- **EN 50174-2 / ANSI/TIA-569** sobre instalación de cableado de tecnologías de la información y distancias de separación frente a cables de potencia *(validar edición y requisitos específicos del proyecto)*.
- **Documentación técnica de fabricantes de cables y bandejas portacables** (tablas reales de $D_{\text{ext}}$, $R_{\min}$ y carga admisible en $\text{kg}/\text{m}$ — *validar siempre catálogo actualizado del fabricante*).

### Glosario de términos clave

| Término | Definición |
| :--- | :--- |
| **Centro de gravedad de cargas** | Punto geométrico ponderado por la potencia de los receptores que minimiza la longitud equivalente y las pérdidas de los alimentadores principales. |
| **Porcentaje de ocupación** | Relación entre la suma de las áreas transversales exteriores de todos los cables alojados y el área interior útil de un tubo o canaleta. |
| **Radio mínimo de curvatura ($R_{\min}$)** | Menor radio de giro admisible para un cable durante el tendido o en instalación fija sin dañar su aislamiento, cubierta o pantalla metálica. |
| **Compatibilidad electromagnética (EMC)** | Capacidad de coexistencia entre sistemas eléctricos y electrónicos sin que las interferencias electromagnéticas degraden su funcionamiento. |
| **Cruce ortogonal ($90^\circ$)** | Intersección perpendicular entre canalizaciones de potencia y telecomunicaciones destinada a minimizar la inducción magnética mutua. |
| **Interferencia dura (*hard clash*)** | Colisión geométrica física entre dos elementos constructivos (por ejemplo, una bandeja portacables atravesando una viga o conducto HVAC). |
| **Interferencia blanda (*soft clash*)** | Invasión del volumen libre requerido para montaje, apertura de puertas, mantenimiento o seguridad reglamentaria de un equipo o canalización. |
| **Pasamuros cortafuegos (*firestop*)** | Elemento de paso a través de muros o forjados sectorizados que se sella con material certificado para restituir la resistencia al fuego original. |

---

## 9. Adaptaciones

### Sesión presencial
- **Dinámica de aula:** Proyectar las fotografías de la Actividad 1 y trabajar la sección transversal del caso *TecnoVigo Ingeniería, S.L.* sobre papel milimetrado o pizarra cuadriculada a escala (1:10 o 1:20) para que cada equipo dibuje físicamente las cotas del plenum.
- **Muestras reales:** Llevar a clase tramos cortos reales de tubo corrugado/rígido de 25 mm, bandeja perforada de 150 mm, tabique separador y retales de cable multipolar $5\text{G}35\text{ mm}^2$ para experimentar de forma táctil el radio mínimo de curvatura.

### Sesión online síncrona
- **Salas y pizarra digital:** Utilizar salas de grupos reducidos (*breakout rooms*) de 3–4 personas con una plantilla prediseñada en Miro, FigJam o Google Drawings que contenga rectángulos a escala ($450\text{ mm} \times 1\,800\text{ mm}$) arrastrables para el saneamiento, HVAC y bandejas.
- **Control de ritmo:** Emplear encuesta interactiva en vivo para la Actividad 1 y revisar en tiempo real la hoja de cálculo compartida de la Actividad 2 antes del descanso.

### Sesión asíncrona
- **Cápsulas grabadas:** Dividir la teoría en 4 micropíldoras de 10 minutos (3.1 a 3.4) con una pregunta de autoverificación obligatoria entre vídeos.
- **Entregable diferido:** Cada alumno descarga el plano esquemático base de *TecnoVigo Ingeniería, S.L.*, entrega en PDF su hoja de cálculo de ocupación + esquema de sección anotado y publica en el foro su análisis crítico del *prompt* de IA (Actividad 3), comentando la propuesta de al menos un compañero dentro de los 5 días siguientes.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Da expresión espacial y constructiva a los factores de corrección por agrupamiento y temperatura del **Tema 5 (Dimensionamiento de conductores)** y a la accesibilidad y protección física de los dispositivos del **Tema 6 (Protecciones eléctricas)**.
- **Competencias que desarrolla:** Pensamiento espacial tridimensional previo al BIM, cálculo geométrico de canalizaciones, criterio de compatibilidad electromagnética y coordinación interdisciplinar MEP.
- **Conexión con el tema anterior y posterior:**
  - *Tema anterior:* **Tema 6. Protecciones eléctricas** (Bloque 1, 6/11), donde se definieron los dispositivos de corte y protección; ahora se decide dónde alojarlos físicamente y cómo llevar hasta ellos los conductores con seguridad.
  - *Tema posterior:* **Tema 8. Ejemplo práctico de diseño y cálculo** (Bloque 1, 8/11), donde se integrarán cargas, secciones, protecciones, caídas de tensión y criterios reales de trazo de longitud y agrupamiento en el diseño completo de un edificio comercial/oficina mediana.
- **Evidencia de aprendizaje que dejará el alumnado:** Dos entregables en su portafolio técnico: (1) la hoja de dimensionamiento geométrico y propuesta de coordinación MEP del caso *TecnoVigo Ingeniería, S.L.*, y (2) el checklist pre-BIM de criterios de trazado auditado frente a salidas de IA.

---

## Siguientes pasos para el formador

1. **Preparar las 4 imágenes/esquemas reales de la Actividad 1** asegurando que no contienen datos identificables ni logotipos de clientes confidenciales.
2. **Validar las tablas de diámetros reales de tubo y cables** que se entregarán en la Actividad 2 con catálogos vigentes de fabricantes locales y comprobar la normativa aplicable del grupo (REBT, IEC o NEC).
3. **Configurar la pizarra o plantilla a escala del plenum de $450\text{ mm}$** para el caso *TecnoVigo Ingeniería, S.L.* (en formato impreso o Miro/FigJam según modalidad).
4. **Verificar que el alumnado dispone de calculadora u hoja de cálculo** antes de iniciar la sesión para agilizar los cálculos de áreas y radios de curvatura.
5. **Guardar los checklists validados de la Actividad 3** como material de entrada para los Bloques 3 y 4 (modelado y documentación en Revit MEP).
