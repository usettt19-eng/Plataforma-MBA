# Tema 5. Dimensionamiento de conductores

> **Aviso técnico, normativo y de alcance profesional:** Este contenido pertenece a una **especialización técnica en diseño eléctrico, iluminación (DIALux), modelado BIM (Revit MEP), visualización (Twinmotion) e IA aplicada**. No equivale a un MBA ni habilita legalmente para firmar proyectos o dictámenes eléctricos oficiales sin la titulación y colegiación competentes. Los valores de conductividad, factores de corrección, ampacidades base y límites porcentuales de caída de tensión expuestos en los ejemplos son **ilustrativos**; en todo proyecto real es obligatorio contrastarlos con las **tablas reglamentarias vigentes** del país aplicable y validarlos por un técnico competente.

---

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Dimensionamiento de conductores |
| **Bloque y posición dentro del programa** | Bloque 1: Instalaciones eléctricas — Tema 5 de 11 (Tema 5 de 50 del programa) |
| **Programa formativo** | IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas (6 módulos / 50 temas) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Modalidad** | Online / Híbrida interactiva |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Temas 1 a 4 (magnitudes SI, Ohm, sistemas $1\text{F}/3\text{F}$, identificación de normativa vigente y obtención de intensidades de diseño $I_B$ en cuadros de cargas) |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado seleccionará y justificará secciones comerciales de conductores eléctricos aplicando de manera integrada el criterio de intensidad máxima admisible corregida (método de instalación, temperatura y agrupamiento), la caída de tensión ($\Delta V$) y la verificación térmica de cortocircuito, contrastando obligatoriamente los resultados con las tablas reglamentarias vigentes sin aceptar tablas no verificadas de IA ni valores automáticos de Revit MEP. |

---

## 2. Objetivos de aprendizaje

Al concluir esta sesión de 4 horas, el alumnado será capaz de:

1. **Identificar** las propiedades eléctricas, térmicas y de seguridad frente al fuego de los principales materiales conductores (cobre y aluminio) y aislamientos (PVC, XLPE/EPR y cables libres de halógenos). *(Nivel de Bloom: Recordar)*
2. **Explicar** cómo influyen los métodos de instalación y los factores de corrección por temperatura ambiente, agrupamiento de circuitos y resistividad térmica del terreno en la capacidad de evacuación de calor de un cable. *(Nivel de Bloom: Comprender)*
3. **Aplicar** el método secuencial de dimensionamiento por triple criterio —ampacidad corregida, caída de tensión máxima ($\Delta V$) y esfuerzo térmico de cortocircuito— para determinar la sección comercial mínima válida en circuitos monofásicos y trifásicos. *(Nivel de Bloom: Aplicar)*
4. **Analizar** líneas alimentadoras y circuitos derivados con longitudes elevadas o tendidos agrupados para detectar subdimensionamientos térmicos o caídas de tensión excesivas ocultas tras tablas base sin corregir. *(Nivel de Bloom: Analizar)*
5. **Evaluar** cálculos de sección generados por hojas propias, software BIM o asistentes de IA (ChatGPT/Claude) exigiendo la verificación explícita frente a las tablas oficiales vigentes del reglamento aplicable. *(Nivel de Bloom: Evaluar)*

---

## 3. Contenidos esenciales

### 3.1. Materiales conductores (Cu/Al), aislamientos y comportamiento térmico

#### Explicación breve y clara
Elegir un cable eléctrico no consiste únicamente en indicar un número en $\text{mm}^2$ o AWG. Un conductor está definido por dos elementos inseparables: el **alma conductora** (habitualmente cobre o aluminio) y el **aislamiento y cubierta exterior**, que fijan la temperatura máxima permanente que el cable soporta sin degradarse ni provocar incendios.

El **cobre (Cu)** ofrece mayor conductividad eléctrica y menor sección necesaria, siendo el estándar en circuitos derivados interiores y calibres pequeños/medios. El **aluminio (Al)** presenta menor conductividad (requiere mayor sección para igual resistencia), pero es mucho más ligero y económico en acometidas y grandes líneas alimentadoras de sección elevada, exigiendo bornas bimetálicas y cumplimiento de secciones mínimas reglamentarias. En cuanto al aislamiento, distinguir entre **termoplásticos (PVC, $70\ ^\circ\text{C}$ de servicio continuo)** y **termoestables (XLPE o EPR, $90\ ^\circ\text{C}$)** cambia drásticamente la capacidad de transporte de corriente del mismo calibre de cobre, mientras que en locales de pública concurrencia suele exigirse comportamiento mejorado frente al fuego (cables libres de halógenos y baja emisión de humos — LSZH/AS, clase CPR a comprobar en normativa).

#### Conceptos clave
- **Cobre (Cu) vs. Aluminio (Al):** a $20\ ^\circ\text{C}$, la resistividad orientativa del cobre recocido es $\rho_{\text{Cu},20} \approx 0{,}01724\ \Omega\cdot\text{mm}^2/\text{m}$ frente a $\rho_{\text{Al},20} \approx 0{,}02826\ \Omega\cdot\text{mm}^2/\text{m}$; el aluminio requiere aproximadamente una o dos secciones comerciales superiores para igualar resistencia.
- **Aislamiento PVC ($70\ ^\circ\text{C}$) vs. XLPE/EPR ($90\ ^\circ\text{C}$):** los aislamientos termoestables soportan mayor temperatura máxima en régimen permanente y hasta $250\ ^\circ\text{C}$ en cortocircuito (frente a $\approx 160\ ^\circ\text{C}$ en PVC, valores orientativos a verificar), aumentando significativamente su intensidad admisible.
- **Comportamiento frente al fuego (LSZH / CPR):** en edificios públicos, garajes, hospitales o vías de evacuación, el reglamento vigente puede exigir cables no propagadores de incendio, sin halógenos y baja opacidad de humos.
- **Efecto térmico de la temperatura de servicio:** al circular corriente, el conductor se calienta por efecto Joule ($I^2 R$), aumentando su resistencia eléctrica respecto a los $20\ ^\circ\text{C}$ de catálogo; los cálculos de caída de tensión rigurosos consideran la resistividad a la temperatura de servicio.

#### Definiciones necesarias
- **Ampacidad (Intensidad máxima admisible, $I_z$):** intensidad máxima de corriente eléctrica que puede transportar un conductor de forma continua bajo condiciones determinadas de instalación sin superar su temperatura límite nominal de aislamiento.
- **Cable libre de halógenos (LSZH):** conductor con aislamiento y cubierta basados en compuestos poliolefínicos exentos de cloro o flúor que, en caso de incendio, emiten humos de baja opacidad y gases no corrosivos ni tóxicos conforme a las clases de reacción al fuego aplicables.

#### Ejemplo práctico realista
Para una línea alimentadora de $L = 100\ \text{m}$ por conductor en una nave industrial, se comparan dos opciones de sección $S = 35\ \text{mm}^2$ a $20\ ^\circ\text{C}$:
- **En cobre ($\rho_{20} \approx 0{,}01724\ \Omega\cdot\text{mm}^2/\text{m}$):** $R_{\text{Cu},20} = \frac{0{,}01724 \times 100}{35} \approx 0{,}0493\ \Omega$.
- **En aluminio ($\rho_{20} \approx 0{,}02826\ \Omega\cdot\text{mm}^2/\text{m}$):** $R_{\text{Al},20} = \frac{0{,}02826 \times 100}{35} \approx 0{,}0807\ \Omega$ ($64\ \%$ más resistencia que el cobre).
Si se opta por aluminio por coste de suministro, habrá que subir la sección (por ejemplo, a $50\ \text{mm}^2$ o $70\ \text{mm}^2$ según ampacidad y caída de tensión) y comprobar si la normativa del país permite aluminio en esa parte de la instalación interior y qué sección mínima exige (p. ej., $16\ \text{mm}^2$ en ciertos reglamentos, dato siempre sujeto a verificación oficial).

#### Errores frecuentes
- Usar tablas de intensidad admisible de cables XLPE ($90\ ^\circ\text{C}$) cuando el cable finalmente instalado en obra o especificado en presupuesto es de PVC ($70\ ^\circ\text{C}$).
- Especificar conductores de aluminio en calibres pequeños o sin prever terminales bimetálicos de compresión en bornes de cobre de interruptores.
- Ignorar los requisitos de reacción al fuego (CPR o equivalente) al tender bandejas por falsos techos de locales de pública concurrencia.
- Calcular caídas de tensión en cables muy cargados utilizando la resistividad en frío a $20\ ^\circ\text{C}$ cuando el reglamento exige evaluar a temperatura máxima de servicio ($70\ ^\circ\text{C}$ o $90\ ^\circ\text{C}$).

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué un mismo conductor de cobre de $16\ \text{mm}^2$ admite mayor intensidad con aislamiento XLPE que con aislamiento PVC?
2. ¿Qué ventajas, limitaciones técnicas y comprobaciones normativas implica utilizar conductores de aluminio en alimentadores de baja tensión?
3. ¿En qué zonas de un edificio suele resultar obligatorio especificar cables libres de halógenos con alta clasificación de reacción al fuego?

---

### 3.2. Métodos de instalación y factores de corrección (temperatura, agrupamiento y terreno)

#### Explicación breve y clara
Las tablas reglamentarias de intensidad admisible no dan un valor único por sección: cada columna corresponde a un **método de instalación de referencia** (empotrados en pared térmicamente aislante, bajo tubo en superficie, sobre bandeja perforada, al aire, o enterrados en zanja bajo tubo o directamente) evaluado en unas **condiciones estándar de referencia** (habitualmente $30\ ^\circ\text{C}$ al aire o $20\ ^\circ\text{C}$ en el terreno, con un único circuito aislado y resistividad estándar del suelo).

En la realidad de una obra, rara vez viaja un solo cable a $30\ ^\circ\text{C}$. Las bandejas portacables acumulan múltiples circuitos en paralelo que se calientan entre sí, las cubiertas técnicas superan los $40\ ^\circ\text{C}$ y los suelos secos evacuan peor el calor. Por ello, es obligatorio aplicar de forma multiplicativa los **factores de corrección**:
$$I_z' = I_{z,\text{base}} \cdot k_T \cdot k_g \cdot k_s \ge I_B$$
donde $k_T$ corrige temperatura, $k_g$ corrige agrupamiento de circuitos y $k_s$ la resistividad térmica del suelo (cuando aplica).

#### Conceptos clave
- **Método de instalación de referencia:** clasificación normalizada (p. ej. códigos A1, A2, B1, B2, C, D, E, F en la familia IEC 60364-5-52 / ITC-BT-19 a verificar) que describe cómo disipa calor el cable hacia el entorno.
- **Factor de corrección por temperatura ($k_T$):** penaliza la ampacidad si la temperatura ambiente supera la de referencia ($30\ ^\circ\text{C}$ aire / $20\ ^\circ\text{C}$ suelo) y la mejora ligeramente en ambientes fríos estables.
- **Factor de corrección por agrupamiento ($k_g$):** reduce la corriente admisible cuando varios circuitos multipolares o ternas discurren juntos en contacto dentro de un mismo tubo, canal o bandeja.
- **Condiciones en tendidos enterrados:** influencia adicional de la profundidad de zanja, presencia de tubos y resistividad térmica del terreno ($k_s$, referencia habitual $2{,}5\ \text{K}\cdot\text{m/W}$ en IEC, sujeta a verificación local).

#### Definiciones necesarias
- **Factor de corrección ($k$):** coeficiente multiplicador adimensional extraído de tablas normativas que ajusta la intensidad admisible de referencia de un conductor a las condiciones térmicas y constructivas reales de su trazado.
- **Método de referencia térmica:** configuración normalizada de montaje (aislado térmico, tubo empotrado, superficie, bandeja perforada/no perforada, enterrado) usada en normativa para agrupar instalaciones de disipación térmica equivalente.

#### Ejemplo práctico realista
Un circuito trifásico de climatización en una sala técnica con intensidad de diseño $I_B = 42{,}0\ \text{A}$ discurre con cable multipolar Cu XLPE ($90\ ^\circ\text{C}$) sobre **bandeja perforada** en una sola capa en contacto con otros **3 circuitos trifásicos** ($n = 4$ circuitos agrupados) a una temperatura ambiente estival de $40\ ^\circ\text{C}$.
- Usando valores ilustrativos de tabla normativa (a verificar siempre en la edición vigente del país): $k_T(40\ ^\circ\text{C},\ \text{XLPE}\ 90\ ^\circ\text{C}) = 0{,}91$ y $k_g(4\ \text{circuitos en contacto en bandeja perforada}) = 0{,}77$.
- Factor combinado: $k_{\text{tot}} = 0{,}91 \times 0{,}77 = 0{,}7007$.
- Intensidad base mínima que debemos exigir en la tabla de referencia: $I_{z,\text{req}} = \frac{42{,}0\ \text{A}}{0{,}7007} \approx 59{,}94\ \text{A}$.
- Si una tabla oficial asignase $49\ \text{A}$ base a $6\ \text{mm}^2$ y $65\ \text{A}$ base a $10\ \text{mm}^2$ (datos ilustrativos): $6\ \text{mm}^2$ quedaría en $49 \times 0{,}7007 = 34{,}3\ \text{A} < 42{,}0\ \text{A}$ (fallo térmico grave), por lo que se requiere al menos **$10\ \text{mm}^2$** ($65 \times 0{,}7007 = 45{,}5\ \text{A} \ge 42{,}0\ \text{A}$).
*(Nota: los valores concretos de $I_{z,\text{base}}$, $k_T$ y $k_g$ varían según código —IEC 60364-5-52, REBT ITC-BT-19, NEC 310.15— y deben verificarse siempre en las tablas vigentes aplicables).*

#### Errores frecuentes
- Buscar $I_B$ directamente en la tabla de ampacidad sin multiplicar por $k_g$ cuando por la misma bandeja o patinillo discurren 6 u 8 circuitos juntos.
- Aplicar el método de bandeja al aire libre a un tramo que en realidad atraviesa 15 metros empotrado en tabique con lana mineral aislante (el tramo más desfavorable manda si supera la longitud crítica).
- Confundir «número de cables» con «número de conductores cargados» al aplicar el factor de agrupamiento (en un circuito trifásico equilibrado se cuentan los 3 conductores cargados de ese circuito como 1 circuito en las tablas de agrupamiento IEC; en NEC los criterios de ajuste cuentan conductores portadores de corriente).
- Usar factores de temperatura de PVC ($70\ ^\circ\text{C}$) con cables XLPE o viceversa.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué un tramo corto de cable que atraviesa una pared aislada térmicamente puede condicionar la sección de toda una línea?
2. ¿Cómo se combinan los factores de temperatura ($k_T$) y de agrupamiento ($k_g$) para comprobar si una sección cumple por ampacidad?
3. ¿Qué diferencia existe en el tratamiento del agrupamiento entre contar «circuitos agrupados» (enfoque IEC) frente a contar «conductores portadores de corriente» (enfoque NEC)?

---

### 3.3. Criterio de caída de tensión ($\Delta V$) y verificación térmica ante cortocircuito

#### Explicación breve y clara
Que un cable no se queme por intensidad continua ($I_z' \ge I_B$) es condición necesaria pero **insuficiente**. En instalaciones largas o muy cargadas, la impedancia del conductor provoca una pérdida de tensión entre el cuadro y el receptor ($\Delta V$) que hace parpadear luminarias, impide el arranque de motores o sobrecalienta equipos electrónicos. La caída de tensión se calcula considerando resistencia ($R$) y reactancia ($X$) del cable a su temperatura de servicio:
- **Monofásico ($2$ hilos):** $\Delta V = 2 \cdot I_B \cdot L_{\text{km}} \cdot (R \cos\varphi + X \sin\varphi)$
- **Trifásico equilibrado ($3$ o $4$ hilos):** $\Delta V = \sqrt{3} \cdot I_B \cdot L_{\text{km}} \cdot (R \cos\varphi + X \sin\varphi)$

Adicionalmente, ante un cortocircuito franco en los primeros ciclos antes de que abra el interruptor automático o fusible, la energía disipada ($I_{cc}^2 \cdot t$) calienta el conductor de forma prácticamente adiabática. Debe verificarse que la sección soporta esa solicitación térmica ($S_{\min} \ge \frac{I_{cc} \cdot \sqrt{t}}{k}$ o mediante las curvas de energía pasante $I^2 t \le k^2 S^2$ del fabricante de la protección).

#### Conceptos clave
- **Caída de tensión absoluta ($\Delta V$ en voltios) y relativa ($\Delta V\ \%$):** diferencia entre tensión en origen y tensión en receptor; debe mantenerse bajo los límites acumulados desde acometida/CGMP hasta el punto final fijados por la normativa vigente (p. ej., límites orientativos del $3\ \%$ en alumbrado y $5\ \%$ en fuerza interior, o reparto alimentador + derivado según código local a verificar).
- **Peso de la reactancia ($X$) en secciones grandes:** para cables de $\le 16\ \text{mm}^2$, la resistencia $R$ domina casi por completo; en secciones $\ge 50\ \text{mm}^2$, la reactancia inductiva ($X \approx 0{,}08\ \Omega/\text{km}$) influye sensiblemente cuando $\cos\varphi < 1$.
- **Caída de tensión acumulada por tramos:** suma de la caída en la línea general/alimentador hasta el subcuadro más la caída en el circuito derivado hasta el receptor más alejado.
- **Esfuerzo térmico adiabático de cortocircuito ($I^2 t \le k^2 S^2$):** comprobación de que el aislamiento no alcanza su temperatura límite de daño (p. ej. $160\ ^\circ\text{C}$ PVC / $250\ ^\circ\text{C}$ XLPE) mientras actúa la protección contra cortocircuitos.

#### Definiciones necesarias
- **Caída de tensión ($\Delta V$):** disminución de la diferencia de potencial eléctrico a lo largo de un circuito entre su punto de alimentación y el punto de utilización debida a la impedancia de los conductores y la corriente circulante.
- **Constante térmica del conductor ($k$):** parámetro dependiente del material conductor y de las temperaturas inicial y límite de cortocircuito de su aislamiento (p. ej. valores orientativos en tabla IEC como $k = 143$ para Cu XLPE o $k = 115$ para Cu PVC en tiempos breves $\le 5\ \text{s}$, sujetos a verificación en tabla normativa).

#### Ejemplo práctico realista
Retomando el circuito trifásico anterior ($U_L = 400\ \text{V}$, $I_B = 42{,}0\ \text{A}$, $\cos\varphi = 0{,}85$, $\sin\varphi = 0{,}527$) con una longitud desde subcuadro de $L = 75\ \text{m}$ ($0{,}075\ \text{km}$) y la sección de **$10\ \text{mm}^2$ Cu XLPE** elegida por ampacidad ($R_{90} \approx 2{,}27\ \Omega/\text{km}$ y $X \approx 0{,}08\ \Omega/\text{km}$ ilustrativos):
1. **Caída de tensión en el tramo:**
   $\Delta V = \sqrt{3} \times 42{,}0 \times 0{,}075 \times (2{,}27 \times 0{,}85 + 0{,}08 \times 0{,}527) = 5{,}456 \times 1{,}972 \approx 10{,}76\ \text{V} \implies \mathbf{2{,}69\ \%}$.
   Si el alimentador aguas arriba desde el `CGMP` ya consume un $1{,}80\ \%$ de caída de tensión, la caída acumulada es $1{,}80 + 2{,}69 = 4{,}49\ \%$. Si el código del proyecto limitase la caída total a $4\ \%$ o $3\ \%$, habría que subir a **$16\ \text{mm}^2$** (con $R_{90} \approx 1{,}42\ \Omega/\text{km} \implies \Delta V_{\text{tramo}} \approx 6{,}82\ \text{V} = 1{,}70\ \% \implies$ total $3{,}50\ \%$).
2. **Comprobación de cortocircuito:** con $I_{cc} = 4{,}5\ \text{kA}$ y tiempo máximo de corte $t = 0{,}04\ \text{s}$ ($k = 143$ ilustrativo):
   $S_{\min,cc} = \frac{4\,500 \times \sqrt{0{,}04}}{143} = \frac{900}{143} \approx 6{,}29\ \text{mm}^2$.
Tanto $10\ \text{mm}^2$ como $16\ \text{mm}^2$ cumplen holgadamente la verificación térmica ante cortocircuito.
*(Nota: los límites máximos de $\Delta V\ \%$ totales y parciales —como REBT ITC-BT-19 / Art. 210.19/215.2 NEC— y la temperatura de cálculo de $R$ deben contrastarse siempre con la normativa vigente).*

#### Errores frecuentes
- Comprobar la caída de tensión solo en el circuito final olvidando sumar la caída producida en la línea repartidora o alimentador del subcuadro.
- Aplicar la fórmula monofásica ($2\cdot L$) a un circuito trifásico equilibrado (que lleva $\sqrt{3}$), sobredimensionando el cable innecesariamente, o viceversa.
- Olvidar la comprobación frente a cortocircuito en cables de pequeña sección ($1{,}5\ \text{mm}^2$ o $2{,}5\ \text{mm}^2$) situados muy cerca del transformador o cuadro general donde $I_{cc}$ es elevada.
- Confundir la caída de tensión en régimen permanente con la caída transitoria durante el arranque directo de grandes motores.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué un circuito de $1{,}5\ \text{mm}^2$ o $2{,}5\ \text{mm}^2$ que cumple perfectamente por ampacidad puede tener que aumentarse a $4\ \text{mm}^2$ o $6\ \text{mm}^2$?
2. ¿Cómo se acumulan las caídas de tensión desde el origen de la instalación hasta el receptor más alejado?
3. ¿Qué relación física expresa la desigualdad $I^2 t \le k^2 S^2$ y cuándo puede fallar un conductor frente a un cortocircuito aunque soporte bien su corriente nominal $I_B$?

---

### 3.4. Secciones comerciales, trazabilidad en BIM y contraste crítico con tablas oficiales e IA

#### Explicación breve y clara
El resultado definitivo del dimensionamiento es siempre la **mayor sección normalizada comercial** que satisfaga simultáneamente cuatro filtros:
1. **Sección mínima mecánica/reglamentaria por uso** (p. ej., iluminación, tomas de fuerza o alimentación de puntos especiales según código vigente).
2. **Ampacidad corregida:** $I_z' \ge I_B$ (y coordinación con la protección $I_n$ que veremos en el Tema 6).
3. **Caída de tensión acumulada:** $\Delta V_{\text{acumulada}} \le \Delta V_{\text{máx,reglamentario}}$.
4. **Verificación térmica de cortocircuito** (y longitud máxima para corte magnético ante cortocircuito mínimo).

En sistemas métricos IEC, la serie comercial habitual avanza en $\text{mm}^2$: $1{,}5;\ 2{,}5;\ 4;\ 6;\ 10;\ 16;\ 25;\ 35;\ 50;\ 70;\ 95;\ 120;\ 150;\ 185;\ 240\ \text{mm}^2$ (mientras que en entornos NEC se utilizan calibres AWG/kcmil). Es crucial recordar que **ni Revit MEP ni ChatGPT/Claude sustituyen las tablas reglamentarias oficiales**: Revit MEP calcula calibres usando tablas internas que dependen de la configuración estadounidense o personalizada de la plantilla, y los asistentes de IA frecuentemente inventan valores de intensidad admisible mezclando aislamientos o métodos de tendido.

#### Conceptos clave
- **Regla del máximo envolvente:** $S_{\text{elegida}} = \max(S_{\text{mín,norma}},\ S_{\text{ampacidad}},\ S_{\text{caída }\Delta V},\ S_{\text{cortocircuito}})$ redondeada al escalón comercial superior.
- **Secciones normalizadas métricas vs. AWG/kcmil:** escalones discretos de fabricación comercial y comprobación de disponibilidad (p. ej., evitando secciones poco comerciales si el mercado local salta de $70$ a $95\ \text{mm}^2$ o si requiere cables unipolares frente a multipolares).
- **Parámetros de cableado en Revit MEP:** los campos de tamaño de conductor y diámetro de tubo en BIM deben nutrirse de la memoria verificada, nunca al revés.
- **Prohibición de confiar en ampacidades generadas de memoria por IA:** ChatGPT y Claude pueden explicar el procedimiento o estructurar fórmulas de caída de tensión en Excel, pero jamás debe aceptarse un valor de $I_z$, $k_T$ o $k_g$ entregado por un LLM sin cotejarlo con la tabla oficial vigente.

#### Definiciones necesarias
- **Sección comercial normalizada:** área nominal de la sección recta conductora estandarizada por las normas de fabricación de cables (en $\text{mm}^2$ o AWG/kcmil), que no siempre coincide geométricamente con la sección medida con calibre sino con su resistencia eléctrica máxima garantizada.
- **Triple criterio de dimensionamiento:** método técnico consistente en seleccionar el conductor más restrictivo entre el límite térmico permanente (ampacidad), el límite funcional (caída de tensión) y el límite térmico transitorio (cortocircuito).

#### Ejemplo práctico realista
Un modelador pide a ChatGPT: *«¿Qué sección de cable de cobre necesito para $48\ \text{A}$ trifásicos a $85\ \text{m}$ en bandeja a $40\ ^\circ\text{C}$?»*. La IA responde de forma escueta: *«Usa $10\ \text{mm}^2$ porque en tabla soporta $57\ \text{A}$ y cumple la caída de tensión»*.
Al someter la respuesta al protocolo del programa, el ingeniero detecta cuatro omisiones graves:
1. La IA no preguntó ni aclaró qué **país o reglamento vigente** aplica, ni el tipo de **aislamiento** (PVC $70\ ^\circ\text{C}$ vs. XLPE $90\ ^\circ\text{C}$).
2. No aplicó ningún **factor de agrupamiento ($k_g$)** ni indicó si la bandeja era perforada o no perforada.
3. No comprobó la **caída de tensión real** en $85\ \text{m}$ ($3{,}45\ \%$ con $10\ \text{mm}^2$ frente a un probable límite más estricto al sumarse al alimentador) ni preguntó el factor de potencia $\cos\varphi$.
4. No verificó si el edificio requiere cable **libre de halógenos** ni contrastó ninguna cifra con una tabla oficial vigente.

#### Errores frecuentes
- Aceptar el calibre automático calculado por Revit MEP (`Wire Sizing`) sin haber introducido las tablas reglamentarias, factores de agrupamiento ni resistividades del código del país.
- Tomar como válidos los valores de intensidad admisible citados de memoria por ChatGPT o Claude.
- No coordinar la sección final elegida (junto con el diámetro exterior real de la cubierta del cable multipolar) para verificar posteriormente el llenado de tubos y bandejas (conexión directa con el Tema 7 y el Bloque 3 en Revit MEP).
- Elegir cables unipolares de gran sección sin comprobar su disposición (en trébol vs. plana) ni si requieren canalización no magnética cuando van separados por fase.

#### Preguntas que el alumnado debería poder responder
1. ¿Cuáles son los cuatro filtros que determinan la sección comercial definitiva de un conductor eléctrico?
2. ¿Por qué resulta arriesgado utilizar la función de dimensionamiento automático de cables de Revit MEP sin auditoría previa de tablas y factores?
3. ¿Qué datos exactos debes introducir tú en una hoja verificada (y jamás delegar en ChatGPT o Claude) al seleccionar un conductor?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** combina diagnóstico de fallos reales por temperatura/agrupamiento, resolución matemática guiada de los tres criterios, auditoría de tablas de IA y resolución aplicada de un caso frigorífico industrial.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
|---|---|---|---|
| **1. Activación: ¿Por qué se calentó este cable si «cabía» en la tabla?** | 00:00 – 00:25 (25 min) | Lanza la **Actividad 1** presentando una fotografía/esquema de una bandeja saturada en cubierta técnica y pregunta por qué falló un cable elegido con intensidad base suficiente. | Identifica qué factores ambientales y de tendido (temperatura, agrupamiento, longitud, aislamiento) no se consideraron en la selección ingenua. |
| **2. Microlearning A: Materiales, aislamientos y factores ($k_T, k_g, k_s$)** | 00:25 – 01:05 (40 min) | Expone los apartados 3.1 y 3.2; compara Cu vs. Al y PVC vs. XLPE, y resuelve en directo el cálculo de $I_{z,\text{req}}$ aplicando factores de corrección sujetos a tabla vigente. | Calcula en su ficha de trabajo la ampacidad corregida de dos tendidos reales y contrasta cómo cambia la sección al pasar de PVC a XLPE. |
| **3. Microlearning B: Caída de tensión ($\Delta V$), cortocircuito y límites BIM/IA** | 01:05 – 01:45 (40 min) | Expone los apartados 3.3 y 3.4; desarrolla la ecuación de $\Delta V$ con $R$ y $X$, la comprobación adiabática $I^2 t \le k^2 S^2$ y advierte sobre el *Wire Sizing* de Revit y tablas inventadas por IA. | Resuelve un ejercicio guiado de caída de tensión acumulada (alimentador + circuito derivado) y comprueba la sección mínima de cortocircuito. |
| **4. Actividad práctica de aplicación técnica** | 01:45 – 02:15 (30 min) | Dirige la **Actividad 2** (auditoría de 3 circuitos mal dimensionados y refutación de una recomendación de sección generada por IA). Supervisa salas/mesas. | Recalcula las secciones correctas de los 3 circuitos por triple criterio y documenta los fallos de la respuesta generada por IA. |
| **Descanso activo** | 02:15 – 02:30 (15 min) | Pausa de desconexión y preparación de la hoja de datos del caso *FríoExpress S.A.* | Descansa e hidrata; anota dudas sobre secciones comerciales o factores de corrección en su país. |
| **5. Estudio del caso práctico** | 02:30 – 03:15 (45 min) | Presenta el caso *Nave Logística FríoExpress S.A.* ($85\ \text{m}$, bandeja no perforada, $40\ ^\circ\text{C}$, $5$ circuitos), organiza grupos de 3–4 personas y guía la verificación por triple criterio. | En equipos, calcula $I_B$, aplica $k_T$ y $k_g$, comprueba $\Delta V$ con $10$, $16$ y $25\ \text{mm}^2$, verifica cortocircuito y redacta el dictamen técnico. |
| **6. Discusión guiada y transferencia a proyecto real** | 03:15 – 03:45 (30 min) | Modera la exposición de 2–3 equipos sobre *FríoExpress S.A.* y dirige la **Actividad 3** (ampliación de la hoja de Cuadro de Cargas del Tema 4 con columnas de cálculo de conductores). | Presenta su solución del caso y añade a su plantilla propia las columnas formuladas de $I_z'$, $\Delta V\ \%$ y selección de sección comercial. |
| **7. Síntesis, evaluación sumativa y cierre** | 03:45 – 04:00 (15 min) | Resume las claves del triple criterio y verificación reglamentaria, lanza el test sumativo y conecta con el Tema 6 (Protecciones eléctricas). | Completa el test breve (6 preguntas), realiza su autoevaluación y guarda su tabla de cables para coordinarla con interruptores en el Tema 6. |

**Total exacto:** 25 + 40 + 40 + 30 + 15 + 45 + 30 + 15 = **240 minutos (4 horas)**.

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «La bandeja que quemaba cables nuevos»

- **Objetivo**: Activar el razonamiento térmico y de caída de tensión detectando por qué un cable correctamente elegido en «tabla simple» puede fallar en obra real.
- **Instrucciones para el alumnado**:
  1. Analiza la situación proyectada: un alimentador trifásico de $40\ \text{A}$ con cable Cu PVC elegido usando la fila de $43\ \text{A}$ en tabla base, tendido junto con otros 5 circuitos en un falso techo sin ventilación a $42\ ^\circ\text{C}$ hasta un equipo situado a $95\ \text{m}$.
  2. Durante 7 minutos, enumera individualmente al menos 4 motivos físicos por los que este diseño presentará anomalías térmicas o de tensión en el receptor.
  3. Vota en la encuesta rápida qué parámetro es más crítico revisar primero y debate en plenario (8 minutos).
- **Materiales necesarios**: Diapositiva con esquema del falso techo/bandeja y herramienta de encuesta en vivo.
- **Tiempo estimado**: 15 minutos (integrados en la Fase 1).
- **Rol del formador**: Recoger todas las causas aportadas por el grupo (aislamiento PVC, $42\ ^\circ\text{C}$, $6$ circuitos agrupados, $95\ \text{m}$ de longitud) y ordenarlas como anticipo de los tres criterios del tema.
- **Producto o entregable esperado**: Mapa grupal de factores de riesgo en el tendido de conductores.
- **Criterios de éxito**: Al menos el 90 % del alumnado identifica temperatura, agrupamiento y caída de tensión por longitud como variables obligatorias adicionales a la intensidad nominal.

### Actividad 2 (Aplicación técnica): Auditoría de Conductores y Refutación de Tabla IA

- **Objetivo**: Aplicar los criterios de ampacidad corregida, caída de tensión y cortocircuito para detectar subdimensionamientos y corregir una recomendación incompleta de IA.
- **Instrucciones para el alumnado**:
  1. En parejas o tríos (20 minutos), analizad los 3 circuitos facilitados en la ficha de trabajo (Circuito A: alumbrado largo monofásico de $110\ \text{m}$ con límite $\Delta V$; Circuito B: motor trifásico en tubo empotrado en pared aislada con 3 circuitos juntos; Circuito C: salida corta de $1{,}5\ \text{mm}^2$ junto a cabecera con $I_{cc} = 7\ \text{kA}$) junto con una respuesta breve de ChatGPT que propone secciones sin consultar tablas vigentes ni factores.
  2. Calculad manualmente o en hoja de cálculo la verificación de los 3 criterios usando los datos ilustrativos de tabla adjuntos en la ficha, y señalad qué dato oficial del país habría que validar en un proyecto real.
  3. Dedicad 10 minutos finales a contrastar resultados con otra pareja y listar las 4 preguntas que faltaron en el prompt de IA.
- **Materiales necesarios**: Ficha de la Actividad 2 con extracto ilustrativo de tabla térmica (señalada explícitamente como ejemplo docente) y calculadora/hoja de cálculo.
- **Tiempo estimado**: 30 minutos (Fase 4).
- **Rol del formador**: Vigilar que el alumnado no olvide el factor $2$ en el circuito monofásico A ni el agrupamiento en el B, y reforzar el mensaje de no confiar en ampacidades memorizadas por LLM.
- **Producto o entregable esperado**: Ficha resuelta con las secciones corregidas de los 3 circuitos y crítica documentada de la salida de IA.
- **Criterios de éxito**: Corrección acertada de los 3 circuitos (detectando que el largo falla por $\Delta V$, el agrupado falla por $k_g$ y el corto requiere verificar $S_{\min}$ frente a $I^2 t$).

### Actividad 3 (Transferencia a proyecto real): Ampliación del Cuadro de Cargas con Cálculo de Conductores

- **Objetivo**: Integrar el cálculo de secciones en la plantilla de Cuadro de Cargas creada en el Tema 4, generando una memoria unificada trazable hasta el nivel de cable.
- **Instrucciones para el alumnado**:
  1. Abre tu hoja de cálculo del **Cuadro de Cargas Trazable** (Actividad 3 del Tema 4) y añade un bloque de columnas a la derecha para el dimensionamiento de conductores: `Material/Aislamiento`, `Método tendido`, `Longitud L [m]`, `k_T`, `k_g`, `I_z base tabla [A]` *(a verificar)*, `I_z corregida [A]`, `Sección elegida [mm²]`, `ΔV tramo [%]`, `ΔV acumulada [%]` y `S_min cortocircuito [mm²]`.
  2. Durante 20 minutos, formula dinámicamente `I_z corregida`, `ΔV tramo [%]` y una columna de estado `OK / REVISAR` condicional (`SI(Y(Iz_corr>=IB; dV_acum<=dV_max; S>=Smin_cc);"CUMPLE";"REVISAR")`) para al menos 4 circuitos de tu proyecto piloto.
  3. Añade en la columna de observaciones qué tabla exacta de tu reglamento nacional vigente debes consultar para validar `I_z base` y los factores `k`.
- **Materiales necesarios**: Hoja de cálculo propia del Tema 4, ficha de fórmulas de caída de tensión y Matriz Normativa del Tema 3.
- **Tiempo estimado**: 25 minutos (integrados en la Fase 6).
- **Rol del formador**: Proyectar la sintaxis exacta de la fórmula condicional en hoja de cálculo y revisar en vivo el funcionamiento en 2–3 pantallas del alumnado.
- **Producto o entregable esperado**: Hoja unificada Carga + Conductor con validación lógica automática (`CUMPLE / REVISAR`) y nota de contraste normativo.
- **Criterios de éxito**: Las fórmulas de $I_z'$ y $\Delta V\ \%$ responden dinámicamente al cambiar $L$, $I_B$ o los factores $k$, y señalan alerta automática si la sección no cumple alguno de los criterios.

---

## 6. Caso práctico

### Caso práctico: *Nave Logística FríoExpress S.A.* — La línea de cámara frigorífica al límite térmico

#### Contexto empresarial
**FríoExpress S.A.** es una empresa de almacenamiento y distribución alimentaria a temperatura controlada ubicada en Mercazaragoza (Zaragoza, España). Acaba de instalar una nueva central de compresores frigoríficos al fondo de la nave, situada a una distancia de recorrido de cable de $L = 85\ \text{m}$ desde el Cuadro General de Mando y Protección (`CGMP`), donde además ya se acumulan varias líneas existentes sobre las bandejas principales.

#### Situación o problema
Durante las pruebas de carga estival, el responsable de mantenimiento mide con cámara termográfica una temperatura preocupante en el tramo de bandeja técnica bajo cubierta metálica donde discurre el nuevo cable de alimentación de la cámara frigorífica, además de detectar dificultades en el arranque de uno de los compresores.

Al revisar el proyecto entregado por una subcontrata anterior, se descubren cuatro fallos graves:
1. El técnico calculó $I_B$ y seleccionó directamente un conductor de cobre multipolar XLPE de **$10\ \text{mm}^2$** tomando un valor de tabla básica de $\approx 63\ \text{A}$ sin aplicar ningún factor de corrección.
2. Ignoró que el cable discurre sobre una **bandeja no perforada** en contacto directo con otros **4 circuitos trifásicos** ($5$ circuitos agrupados en total) bajo una cubierta técnica cuya temperatura ambiente en verano alcanza **$40\ ^\circ\text{C}$**.
3. No calculó la caída de tensión en los **$85\ \text{m}$** de recorrido ni sumó la caída de tensión previa del $1{,}00\ \%$ existente en la derivación individual/acometida hasta el `CGMP`.
4. No realizó la comprobación frente al esfuerzo térmico de cortocircuito en cabecera ni verificó la normativa vigente aplicable en España (REBT / ITC-BT-19 como referencia ilustrativa).

#### Datos disponibles

| Parámetro del circuito frigorífico | Valor / Dato documentado | Referencia o nota |
|---|---|---|
| **Sistema y tensión nominal** | Trifásico equilibrado $U_L = 400\ \text{V}$, $50\ \text{Hz}$ | Red alimentadora desde `CGMP` |
| **Potencia activa absorbida y $\cos\varphi$** | $P = 28{,}00\ \text{kW}$, $\cos\varphi = 0{,}85$ ($\sin\varphi = 0{,}527$) | Régimen continuo de la central frigorífica |
| **Longitud real del tendido** | $L = 85\ \text{m}$ ($0{,}085\ \text{km}$) | Medida sobre trazado real de bandeja |
| **Cable y método de tendido** | Cobre multipolar aislamiento **XLPE ($90\ ^\circ\text{C}$)** en **bandeja no perforada** | Temperatura de cálculo $R_{90}$: $10\ \text{mm}^2 \to 2{,}27\ \Omega/\text{km}$; $16\ \text{mm}^2 \to 1{,}42\ \Omega/\text{km}$; $25\ \text{mm}^2 \to 0{,}90\ \Omega/\text{km}$; $X \approx 0{,}08\ \Omega/\text{km}$ |
| **Condiciones ambientales y agrupamiento** | $T_{\text{amb}} = 40\ ^\circ\text{C}$; $5$ circuitos trifásicos agrupados en contacto | Factores ilustrativos de tabla docente (contrastar en código vigente): $k_T = 0{,}91$; $k_g = 0{,}75$ |
| **Ampacidad base ilustrativa (bandeja no perforada, Cu XLPE)** | $10\ \text{mm}^2 \to 63\ \text{A}$; $16\ \text{mm}^2 \to 82\ \text{A}$; $25\ \text{mm}^2 \to 107\ \text{A}$ | Valores ilustrativos para el caso *(verificar siempre en tabla reglamentaria vigente)* |
| **Caída de tensión previa hasta `CGMP` y límite de proyecto** | Previa $= 1{,}00\ \%$; límite objetivo total $\le 4{,}00\ \%$ (y $\le 3{,}00\ \%$ en este tramo) | Verificar límites exactos de aplicación industrial/interior en reglamento vigente |
| **Cortocircuito en `CGMP` y tiempo de despeje** | $I_{cc} = 6{,}0\ \text{kA}$; tiempo máximo de corte $t = 0{,}02\ \text{s}$; constante Cu XLPE $k = 143$ | Comprobar en curvas reales de protección |

#### Preguntas de análisis
1. Calcula la intensidad de cálculo $I_B$ de la central frigorífica y el factor de corrección combinado $k_{\text{tot}} = k_T \cdot k_g$. ¿Cuál es la intensidad admisible corregida $I_z'$ del cable de $10\ \text{mm}^2$ instalado actualmente?
2. Determina la caída de tensión en el tramo ($\Delta V$ en voltios y en $\%$) y la caída acumulada total para las tres secciones candidatas ($10\ \text{mm}^2$, $16\ \text{mm}^2$ y $25\ \text{mm}^2$).
3. Realiza la comprobación térmica adiabática ante cortocircuito ($S_{\min,cc}$) para $I_{cc} = 6{,}0\ \text{kA}$ y $t = 0{,}02\ \text{s}$.
4. Comparando los resultados de $16\ \text{mm}^2$ frente a $25\ \text{mm}^2$, ¿cuál recomendarías teniendo en cuenta una posible futura ampliación o el pico de arranque de los compresores, y qué verificaciones normativas obligatorias debes hacer antes de emitir la orden de cambio?

#### Tarea a realizar
En equipos de 3–4 personas (30 minutos de trabajo + 15 minutos de puesta en común), elaborad un **Dictamen Técnico de Redimensionamiento para *FríoExpress S.A.*** que incluya:
1. **Tabla comparativa de cálculo** para $10\ \text{mm}^2$, $16\ \text{mm}^2$ y $25\ \text{mm}^2$ mostrando $I_z'$, cumplimiento frente a $I_B$, $\Delta V_{\text{tramo}}\ \%$, $\Delta V_{\text{acum}}\ \%$ y $S_{\min,cc}$.
2. **Diagnóstico físico de por qué la línea de $10\ \text{mm}^2$ actual presentaba sobrecalentamiento** y caída excesiva.
3. **Selección de la sección recomendada** (justificando técnicamente $16\ \text{mm}^2$ vs. $25\ \text{mm}^2$ e incluyendo una medida constructiva alternativa como separar circuitos en bandeja perforada si fuera viable).
4. **Cláusula de verificación normativa e IA:** qué tablas oficiales del reglamento vigente deben cotejarse y qué datos sería prohibido pedir «de memoria» a ChatGPT/Claude.

#### Posibles soluciones o criterios de análisis
Un dictamen técnico riguroso debe obtener los valores exactos siguientes:
- **Intensidad de cálculo y factor combinado:**
  - $I_B = \frac{28\,000}{\sqrt{3} \times 400 \times 0{,}85} \approx \mathbf{47{,}55\ \text{A}}$.
  - $k_{\text{tot}} = 0{,}91 \times 0{,}75 = \mathbf{0{,}6825}$.
  - Intensidad base mínima necesaria: $I_{z,\text{req}} = \frac{47{,}55}{0{,}6825} \approx \mathbf{69{,}67\ \text{A}}$.
- **Evaluación comparativa de secciones:**
  1. **$10\ \text{mm}^2$ (instalada erróneamente):**
     - $I_z' = 63 \times 0{,}6825 = \mathbf{43{,}00\ \text{A}} < 47{,}55\ \text{A}$ $\implies$ **NO CUMPLE** ampacidad (explica directamente el calentamiento detectado con cámara termográfica!).
     - $\Delta V_{\text{tramo}} = \sqrt{3} \times 47{,}55 \times 0{,}085 \times (2{,}27 \times 0{,}85 + 0{,}08 \times 0{,}527) = 7{,}000 \times 1{,}972 \approx 13{,}80\ \text{V} \implies \mathbf{3{,}45\ \%}$ ($\Delta V_{\text{acum}} = 4{,}45\ \% > 4{,}00\ \%$) $\implies$ **NO CUMPLE**.
  2. **$16\ \text{mm}^2$:**
     - $I_z' = 82 \times 0{,}6825 = \mathbf{55{,}97\ \text{A}} \ge 47{,}55\ \text{A}$ $\implies$ **CUMPLE** ampacidad (margen $+17{,}7\ \%$).
     - $\Delta V_{\text{tramo}} = 7{,}000 \times (1{,}42 \times 0{,}85 + 0{,}042) = 7{,}000 \times 1{,}249 \approx 8{,}74\ \text{V} \implies \mathbf{2{,}19\ \%}$ ($\Delta V_{\text{acum}} = 1{,}00 + 2{,}19 = \mathbf{3{,}19\ \%} \le 4{,}00\ \%$) $\implies$ **CUMPLE**.
  3. **$25\ \text{mm}^2$:**
     - $I_z' = 107 \times 0{,}6825 = \mathbf{73{,}03\ \text{A}} \ge 47{,}55\ \text{A}$ $\implies$ **CUMPLE** ampacidad con amplia reserva.
     - $\Delta V_{\text{tramo}} = 7{,}000 \times (0{,}90 \times 0{,}85 + 0{,}042) = 7{,}000 \times 0{,}807 \approx 5{,}65\ \text{V} \implies \mathbf{1{,}41\ \%}$ ($\Delta V_{\text{acum}} = 2{,}41\ \%$) $\implies$ **CUMPLE** con gran estabilidad en arranque.
- **Cortocircuito térmico:** $S_{\min,cc} = \frac{6\,000 \times \sqrt{0{,}02}}{143} = \frac{848{,}53}{143} \approx \mathbf{5{,}93\ \text{mm}^2}$. Tanto $16\ \text{mm}^2$ como $25\ \text{mm}^2$ verifican este criterio.
- **Conclusión y criterio de ingeniería:** **$16\ \text{mm}^2$ Cu XLPE** es la sección mínima técnicamente válida en estas condiciones (siempre tras cotejar las ampacidades exactas y los límites de caída de tensión en el REBT vigente en España, p. ej. ITC-BT-19 / ITC-BT-47 para motores si aplica coeficiente $1{,}25$ a la corriente del motor — comprobación crítica adicional!). Si se prevé ampliar un compresor o el arranque directo produce caídas transitorias notables, **$25\ \text{mm}^2$** aporta margen de potencia y reduce pérdidas Joule continuas (a un $24/7$ frigorífico se amortiza rápidamente). Además, pasar a bandeja perforada y separar los cables en capa única mejoraría la disipación térmica.

#### Preguntas de reflexión final
- ¿Cuántas instalaciones industriales aparentemente «calculadas» terminan con cables recalentados simplemente por omitir el factor de agrupamiento de una bandeja llena?
- ¿Por qué el ahorro económico aparente de elegir $10\ \text{mm}^2$ en lugar de $16\ \text{mm}^2$ o $25\ \text{mm}^2$ desaparece por completo frente a pérdidas energéticas continuas o riesgo de incendio?

---

## 7. Evaluación

### Evaluación diagnóstica
- **Instrumento:** Sondeo y lluvia de ideas dirigida en la Actividad 1 sobre causas térmicas y eléctricas del fallo en una bandeja cargada.
- **Propósito:** Explorar conocimientos previos sobre aislamientos, agrupamiento y caída de tensión sin calificación numérica.

### Evaluación formativa
- **Observación activa** durante la Actividad 2 (corrección de los 3 circuitos y crítica de la respuesta de IA) y durante el cálculo comparado del caso *FríoExpress S.A.*
- **Verificación de fórmulas vivas** en la Actividad 3 asegurando que el indicador automático `CUMPLE / REVISAR` evalúa los tres criterios simultáneamente.

### Evaluación sumativa
Se compone de dos evidencias:
1. **Cuestionario técnico breve (6 preguntas de cálculo y criterio de conductores, 10 minutos, 40 % del tema):** evalúa materiales/aislamientos, aplicación de factores $k_T$ y $k_g$, cálculo de $\Delta V$, verificación $I^2 t \le k^2 S^2$ y contraste normativo frente a BIM/IA.
2. **Entregable combinado: Dictamen de *FríoExpress S.A.* + Hoja Unificada de Cargas y Conductores (Actividad 3) (60 % del tema)**, evaluado con la rúbrica siguiente.

### Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
|---|---|---|---|---|
| **1. Aplicación de método de tendido y factores ($k_T, k_g$)** | Toma intensidades de tabla base sin corregir temperatura ni agrupamiento o ignora el tipo de aislamiento. | Aplica un factor de corrección, pero olvida el otro o confunde criterios de PVC con XLPE. | Corrige rigurosamente la ampacidad aplicando $k_T$ y $k_g$ según método de instalación e indica la necesidad de validar tablas oficiales. | Evalúa además alternativas constructivas (separación en bandeja, cambio de método de tendido) optimizando coste y margen térmico. |
| **2. Cálculo de caída de tensión ($\Delta V$) y cortocircuito** | Omite la caída de tensión, usa fórmula monofásica en trifásico o no verifica el esfuerzo térmico de cortocircuito. | Calcula $\Delta V$ de forma aproximada, pero olvida la caída acumulada aguas arriba o comete errores en $S_{\min,cc}$. | Determina correctamente $\Delta V$ en voltios y $\%$, suma caídas acumuladas y comprueba $S_{\min,cc}$ frente a $I_{cc}$ y $t$. | Incorpora el efecto reactivo ($X$), resistencia a temperatura de servicio, impacto de arranques y amortización de pérdidas Joule entre secciones. |
| **3. Selección de sección comercial y trazabilidad en plantilla** | Elige una sección que incumple alguno de los criterios o presenta celdas calculadas con números fijos sin fórmulas. | Selecciona la sección final correcta en el caso, pero su plantilla de la Actividad 3 no automatiza las alertas de incumplimiento. | Selecciona la mayor sección comercial válida bajo el triple criterio y programa fórmulas dinámicas `CUMPLE / REVISAR`. | Entrega una hoja profesional totalmente integrada con el Cuadro de Cargas del Tema 4, lista para coordinar diámetros de tubo en el Tema 7 y BIM. |
| **4. Rigor normativo y control crítico de BIM / IA** | Acepta valores de ampacidad citados por ChatGPT/Claude o calibres automáticos de Revit sin verificar fuentes oficiales. | Señala que hay que comprobar las tablas, pero no especifica qué datos faltan ni audita las omisiones técnicas de la IA. | Rechaza ampacidades no contrastadas de IA, distingue el alcance de Revit MEP y exige verificación frente al reglamento vigente del país. | Documenta de forma precisa qué norma y tabla oficial validan cada parámetro y define reglas preventivas claras contra errores de plantilla BIM/IA. |

### Actividad de autoevaluación
Al cerrar el tema, el alumnado responde brevemente en su aula virtual:
1. *De los tres criterios de dimensionamiento (ampacidad corregida, $\Delta V$ y cortocircuito), ¿cuál suelo olvidar o simplificar en exceso en mi práctica actual y cómo lo corregiré?*
2. *Si mañana una herramienta de IA me sugiere «usa $10\ \text{mm}^2$» para una línea industrial, ¿qué cuatro comprobaciones documentales le exigiré antes de aceptar el cálculo?*
3. *¿Qué ajuste específico necesitaré revisar en la normativa vigente de mi país para validar los valores ilustrativos vistos hoy (por ejemplo, si alimentamos motores o cables enterrados)?*

---

## 8. Materiales y recursos

### Guion de diapositivas

| Diapositiva | Título y objetivo visual | Contenido clave y notas del formador |
|---|---|---|
| **Slide 1** | **Portada y objetivos del Tema 5** | Posición (Bloque 1 · 5/11), enlace con el $I_B$ del Cuadro de Cargas (Tema 4), aviso de verificación oficial de tablas y 5 objetivos Bloom. |
| **Slide 2** | **Actividad 1: La bandeja que quemaba cables** | Caso disparador visual de falso techo saturado a $42\ ^\circ\text{C}$ y $95\ \text{m}$; pregunta abierta sobre qué falló. |
| **Slide 3** | **Cobre vs. Aluminio y aislamientos (PVC, XLPE, LSZH)** | Tabla comparativa de resistividades, temperaturas de servicio/cortocircuito y requisitos de reacción al fuego según edificio. |
| **Slide 4** | **Métodos de instalación y factores de corrección** | Esquema gráfico de métodos (tubo empotrado, superficie, bandeja perforada/ciega, enterrado) y ecuación $I_z' = I_{z,\text{base}}\cdot k_T \cdot k_g \cdot k_s$. |
| **Slide 5** | **Caída de tensión ($\Delta V$) y cortocircuito ($I^2 t \le k^2 S^2$)** | Fórmulas $1\text{F}$ vs. $3\text{F}$ con $R$ y $X$, acumulación por tramos desde acometida y comprobación térmica de cortocircuito. |
| **Slide 6** | **Regla del máximo envolvente, Revit MEP e IA** | Embudo de los 4 filtros hasta la sección comercial; límites de *Wire Sizing* en Revit y auditoría de tabla inventada por ChatGPT. |
| **Slide 7** | **Caso práctico: *Nave Logística FríoExpress S.A.*** | Diagrama del tendido de $85\ \text{m}$ a $40\ ^\circ\text{C}$ con $5$ circuitos en bandeja ciega y tabla de datos para evaluar $10/16/25\ \text{mm}^2$. |
| **Slide 8** | **Síntesis, plantilla unificada y puente al Tema 6** | 5 reglas de oro de dimensionamiento de cables, entrega de la Actividad 3 y adelanto del Tema 6 (Protecciones eléctricas coordinadas con $I_z$). |

### Ficha de trabajo
Documento descargable (2 páginas) con:
1. **Formulario resumido del triple criterio:** ecuaciones de resistividad a temperatura de servicio, factores $k$, caída de tensión $1\text{F}/3\text{F}$ y cortocircuito adiabático.
2. **Extracto ilustrativo docente de tabla térmica (solo para ejercicios de aula):** con advertencia destacada de no utilizarlo fuera de clase sin validar el reglamento oficial vigente.
3. **Lienzo de resolución del caso *FríoExpress S.A.*** con matriz comparativa de secciones candidatas.

### Plantilla técnica práctica
Ampliación de la **Hoja Unificada de Cargas y Conductores (v1.0)**:

| ID Circ. | $I_B$ [A] | Aislamiento | Método | $L$ [m] | $k_T$ | $k_g$ | $I_{z,\text{base}}$ [A] *(a verificar)* | $I_z'$ [A] | $S$ [mm²] | $\Delta V_{\text{tramo}}$ [%] | $\Delta V_{\text{acum}}$ [%] | $S_{\min,cc}$ [mm²] | Estado |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| C-01 | 47,55 | Cu XLPE 90°C | Bandeja ciega | 85 | 0,91 | 0,75 | 82,0 | `=H2*F2*G2` | 16 | `=...` | `=1,00+K2` | `=(6000*SQRT(0,02))/143` | `=SI(Y(I2>=B2;L2<=4;J2>=M2);"CUMPLE";"REVISAR")` |

### Lecturas y recursos recomendados
> **Advertencia obligatoria de validación:** Las tablas y normas citadas son ejemplos ilustrativos. El diseñador debe consultar siempre directamente la edición vigente de la norma o reglamento aplicable en la jurisdicción del proyecto para extraer los valores oficiales de ampacidad, factores de corrección, constantes térmicas $k$ y límites de caída de tensión.

- **IEC 60364-5-52 (*Selection and erection of electrical equipment — Wiring systems*)** — Referencia internacional para métodos de instalación, intensidades admisibles y factores de corrección (*verificar edición vigente en catálogo IEC*).
- **REBT (España — RD 842/2002), especialmente ITC-BT-19, ITC-BT-06, ITC-BT-07 e ITC-BT-47** y norma **UNE-HD 60364-5-52** — Ejemplos ilustrativos de aplicación en baja tensión europea (*verificar guías técnicas y actualizaciones vigentes*).
- **NFPA 70 / NEC — Artículo 310 (*Conductors for General Wiring*) y Capítulo 9 (Tablas de impedancia CA)** — Referencia ilustrativa en proyectos bajo código norteamericano AWG/kcmil (*comprobar edición adoptada localmente*).
- **Catálogos técnicos oficiales de fabricantes de cables certificados** — Para consultar diámetros exteriores reales, reactancias exactas y certificaciones de reacción al fuego (*validar vigencia de ficha técnica*).

### Glosario de términos clave

| Término | Definición |
|---|---|
| **Ampacidad ($I_z$)** | Intensidad máxima admisible que un conductor puede transportar en servicio permanente sin superar la temperatura límite de su aislamiento. |
| **Caída de tensión ($\Delta V$)** | Pérdida de potencial eléctrico a lo largo de un circuito entre el origen y la carga debida al paso de la corriente por la resistencia y reactancia del conductor. |
| **Esfuerzo térmico adiabático** | Calentamiento instantáneo de un conductor durante un cortocircuito breve ($I^2 t$) antes de que el dispositivo de protección interrumpa la corriente, limitado por $k^2 S^2$. |
| **Factor de agrupamiento ($k_g$)** | Coeficiente reductor aplicado a la intensidad admisible cuando varios circuitos discurren juntos compartiendo un mismo conducto o bandeja y dificultan la disipación de calor. |
| **Factor de corrección por temperatura ($k_T$)** | Coeficiente que ajusta la ampacidad base de tabla cuando la temperatura ambiente o del terreno difiere de la temperatura estándar de referencia. |
| **Método de instalación** | Forma física y entorno constructivo en que se aloja un conductor (empotrado, tubo en superficie, bandeja perforada, enterrado), determinante para evacuar calor. |
| **Sección comercial normalizada** | Tamaño estándar de conductor fabricado conforme a normas métricas ($\text{mm}^2$) o AWG/kcmil seleccionado finalmente por encima del mínimo calculado. |
| **XLPE (Polietileno reticulado)** | Material aislante termoestable de alta prestación térmica (habitualmente $90\ ^\circ\text{C}$ en servicio continuo y $250\ ^\circ\text{C}$ en cortocircuito), superior al PVC termoplástico. |

---

## 9. Adaptaciones

### Sesión presencial
- **Muestrario físico de cables:** llevar a la mesa trozos cortos reales de cable unipolar y multipolar en cobre y aluminio ($2{,}5;\ 6;\ 16;\ 35\ \text{mm}^2$), PVC vs. XLPE LSZH, para que el alumnado reconozca cubiertas, rigidez y grabados normalizados.
- **Resolución en pizarra de *FríoExpress S.A.*:** comparar en columnas paralelas $10$, $16$ y $25\ \text{mm}^2$ verificando cada criterio con participación rotatoria de equipos.
- **Revisión de fórmulas en portátil:** circular entre mesas ayudando a depurar paréntesis en la función condicional de Excel/Calc.

### Sesión online síncrona
- **Votación y demostración de hoja de cálculo:** utilizar sondeos en vivo en la Actividad 1 y compartir en pantalla la construcción paso a paso de la fórmula $\Delta V$ en trifásico para la Actividad 3.
- **Salas reducidas (*breakout rooms*):** grupos de 3–4 personas resuelven el caso *FríoExpress S.A.* sobre una copia compartida de la matriz comparativa, permitiendo al formador revisar avances en vivo.
- **Pausa intermedia:** respetar estrictamente los 15 minutos de descanso fuera de pantalla antes de abordar el caso industrial.

### Sesión asíncrona
- **Cuatro cápsulas conceptuales + taller grabado:** cuatro vídeos breves correspondientes a los apartados 3.1–3.4 y un screencast de 10 minutos explicando cómo programar la comprobación del triple criterio en hoja de cálculo.
- **Entrega práctica obligatoria:** subir al buzón del aula virtual el dictamen de *FríoExpress S.A.* junto con la hoja de cálculo ampliada de la Actividad 3, asegurando que la alerta `CUMPLE / REVISAR` cambia al modificar la longitud $L$.
- **Foro de dudas normativas:** hilo moderado para contrastar dónde consultar las tablas de ampacidad oficiales según el país de residencia de cada estudiante.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** transforma las intensidades $I_B$ obtenidas en el Cuadro de Cargas (Tema 4) y el marco reglamentario identificado (Tema 3) en secciones reales de cable físicamente viables y térmicamente seguras.
- **Competencias que desarrolla:** selección de materiales y aislamientos, cálculo térmico por factores de corrección, análisis de caídas de tensión acumuladas y cortocircuito, automatización trazable en hoja de cálculo y rechazo de ampacidades no verificadas en BIM o IA.
- **Conexión dentro del plan de 6 módulos / 50 temas:**
  - **Tema anterior:** **Tema 4. Cálculo de cargas eléctricas según normativa actual** (Bloque 1, Tema 4 de 11), que suministra las intensidades de cálculo $I_B$ y el balanceo de fases de cada circuito.
  - **Tema posterior:** **Tema 6. Protecciones eléctricas** (Bloque 1, Tema 6 de 11), donde las secciones comerciales elegidas hoy y su intensidad admisible corregida $I_z'$ marcarán los límites exactos ($I_B \le I_n \le I_z'$) para dimensionar interruptores automáticos, fusibles, diferenciales y selectividad.
- **Evidencia de aprendizaje:**
  1. **Dictamen Técnico de Redimensionamiento de *FríoExpress S.A.*** con comparativa de $10, 16$ y $25\ \text{mm}^2$.
  2. **Hoja Unificada de Cargas y Conductores (Actividad 3)** con alertas automáticas y citas de verificación pendiente en reglamento oficial.
  3. **Cuestionario sumativo final completado** (6 preguntas).

---

## Siguientes pasos para el formador

1. **Etiquetar visiblemente las tablas docentes:** comprobar que la hoja de trabajo de aula lleva una nota destacada indicando que las ampacidades mostradas son ilustrativas y no deben emplearse en obra real sin validar el código vigente del país.
2. **Preparar el muestrario o imágenes macro de cables:** disponer fotografías nítidas del marcado sobre cubierta (tensión asignada, norma, clase de reacción al fuego, sección) si la sesión es online.
3. **Probar la fórmula de la Actividad 3 en distintos idiomas de Excel:** preparar equivalentes `SI/Y` (español) e `IF/AND` (inglés) para evitar bloqueos técnicos en clase.
4. **Revisar el salto al Tema 6:** verificar que el alumnado anota las intensidades corregidas $I_z'$ obtenidas en sus circuitos, ya que serán el dato obligatorio de entrada para coordinar protecciones en la próxima sesión.
5. **Reforzar el criterio frente a IA:** insistir al cierre en que pedir «qué sección pongo» a un modelo de lenguaje sin tablas oficiales es una de las fuentes más peligrosas de error en oficina técnica.
