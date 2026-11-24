# Tema 5. Accesorios de tubos

## 1. Ficha del tema

| Campo | Detalle |
| :--- | :--- |
| **Título del tema** | Accesorios de tubos |
| **Bloque y posición dentro del programa** | Bloque 3: Modelado 3D – Revit MEP eléctricas — Tema 5 de 5 (Tema 21 de 50 del programa) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Haber completado los Temas 1 a 4 del Bloque 3 (entorno BIM coordinado, equipos y luminarias insertados, trazado 3D de redes diferenciadas y depuración de *Routing Preferences*, radios y desconexiones). |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado será capaz de incorporar cajas de registro/paso, conduletas (`LB/LR/LL/T`), acoplamientos, prensaestopas y soportes mecánicos/sísmicos (*hangers*) correctamente categorizados y parametrizados en Revit MEP, mejorando la fidelidad constructiva del modelo 3D, la detección de interferencias (*clash detection*) con volumen de acceso libre y la fiabilidad de los cómputos métricos previos a la fase de documentación (Bloque 4). |

---

## 2. Objetivos de aprendizaje

Al completar esta sesión de 4 horas, el alumnado será capaz de:

1. **Seleccionar** e insertar cajas de paso/registro y conduletas registrables (`C`, `LB`, `LR`, `LL`, `T`) en los puntos de derivación, cambio brusco de plano o superación de límite angular de curvas, reservando espacio físico de apertura de tapa *(Nivel de Bloom: Aplicar)*.
2. **Integrar** acoplamientos, tuercas-boquilla, prensaestopas métricos (*Cable Glands*) y manguitos flexibles estancos en entradas a envolventes y motores sin fragmentar indebidamente la continuidad lógica del trazado 3D *(Nivel de Bloom: Aplicar)*.
3. **Modelar** sistemas de suspensión y soportería (*hangers*, varillas roscadas, carriles tipo *Unistrut* en trapecio y arriostramientos sísmicos/mecánicos) a distancias constructivas realistas para evitar choques ocultos en coordinación multidisciplinar *(Nivel de Bloom: Crear)*.
4. **Parametrizar** familias de accesorios mediante parámetros compartidos (`Codigo_Partida`, `Grado_IP`, `Material_Soporte`, `Longitud_Varilla`) para generar tablas de planificación precisas y ejecutar pruebas de detección de interferencias (*Clash Detection*) útiles *(Nivel de Bloom: Analizar)*.
5. **Evaluar** modelos terminados de canalizaciones y descripciones técnicas de partidas generadas con apoyo de IA (ChatGPT/Claude) sobre datos anonimizados, preparando un modelo BIM limpio para su documentación en el Bloque 4 sin confundir fidelidad 3D con homologación normativa *(Nivel de Bloom: Evaluar)*.

---

## 3. Contenidos esenciales

### 3.1. Cajas de registro y paso (*Pull/Junction Boxes*) y conduletas registrables (`LB/LR/LL/T/C`)

#### Explicación breve y clara
En el Tema 4 comprobamos que los tubos eléctricos no admiten «tes ciegas» ni recorridos interminables con más de $270^\circ\text{–}360^\circ$ acumulados sin registro. La solución real en obra consiste en intercalar **cajas de registro/derivación** o **conduletas con tapa desmontable (`Conduit Bodies`)**. A diferencia de un codo estándar curvado (que exige espacio amplio de radio y no permite tirar cables por tramos), una conduleta resuelve giros cerrados en espacios reducidos ofreciendo una tapa atornillada con junta de estanqueidad por donde el instalador guía y tira de los conductores.

En Revit MEP, las conduletas y cajas en línea se comportan habitualmente como familias de categoría `Conduit Fittings` (con conectores alineados en línea o a $90^\circ$ para que el tubo entre y salga sin romperse) o `Electrical Fixtures` con conectores de paso. Resulta vital modelar también un **volumen de reserva de acceso frente a su tapa** (*Clearance*), porque una caja de paso tapada por una bandeja o conducto de ventilación es inservible el día del cableado.

#### Conceptos clave
- **Conduleta tipo `C` y tipo `T`:** Accesorios con tapa frontal registrable para paso recto con acceso (`C`) o derivación perpendicular a $90^\circ$ (`T`) sustituyendo cualquier «te ciega» prohibida.
- **Conduletas de giro (`LB`, `LR`, `LL`):** Piezas de cambio de dirección a $90^\circ$ según la posición de la tapa: **`LB`** (*Back*, entrada trasera perpendicular a muro o salida de cuadro); **`LL`** (*Left*, salida hacia la izquierda mirando la tapa); **`LR`** (*Right*, salida hacia la derecha).
- **Cajas de tiro y paso (*Pull / Junction Boxes*):** Envolventes cuadradas o rectangulares (p. ej., $150\times 150\times 80\text{ mm}$ o mayores en alimentadores) ubicadas cada cierto intervalo recto (habitualmente $15\text{–}30\text{ m}$ según criterio constructivo/normativo) o al acercarse a límites angulares de curvado.
- **Accesibilidad obligatoria en plenum y muros:** Toda tapa de caja o conduleta debe quedar orientada hacia una zona registrable (techo desmontable, trampilla o paramento libre), evitando empotrar registros ocultos tras techos continuos de escayola sin registro.

#### Definiciones necesarias
- **Conduleta (*Conduit Body*):** Cuerpo metálico fundido o termoplástico roscado/enchufable con abertura lateral provista de tapa y junta desmontable que facilita el tirado de conductores, inspecciones o cambios de dirección compactos sin radio largo.
- **Volumen de acceso de registro (*Access Clearance*):** Espacio libre geométrico proyectado frente a la tapa desmontable de una caja o conduleta (normalmente $\ge 300\text{–}450\text{ mm}$ libres para destornillador y giro de mano/guía) incluido en la familia para detectarse en pruebas de *clash detection*.

#### Ejemplo práctico realista
En una galería técnica subterránea, un tubo rígido roscado Ø $50\text{ mm}$ asciende verticalmente por la pared lateral del cuarto eléctrico (`Eje 4`) y debe atravesar el muro hacia el corredor contiguo a solo $180\text{ mm}$ del techo, donde no cabe un codo comercial de radio $300\text{ mm}$ (error visto en el Tema 4). El proyectista inserta manualmente en la vertical del muro una **conduleta `LB` Ø $50\text{ mm}$** de aluminio fundido IP66 con tapa mirando hacia el interior del cuarto técnico:
1. El tubo entra por la boca inferior de la `LB` y atraviesa el muro por la boca posterior (`Back`) en apenas $140\text{ mm}$ de fondo total.
2. En la familia `Conduleta_LB.rfa` está modelado un subvolumen semitransparente de $400\text{ mm}$ frente a la tapa frontal para garantizar que ninguna tubería de agua ni otro cuadro tapen los tornillos de registro.
3. Además, a los $18\text{ m}$ del corredor, el proyectista divide un tramo largo con tres curvas a $90^\circ$ intercalando una **caja de paso IP66 de $250\times 250\times 120\text{ mm}$** con conectores en caras opuestas.
*Nota de verificación normativa:* Los requisitos de dimensionamiento mínimo de cajas de tiro en función del diámetro de tubos (p. ej., regla $6\times$ u $8\times$ diámetro en pasos rectos/angulares en determinados códigos), accesibilidad obligatoria y grados IP/IK según ambiente son ilustrativos y deben verificarse siempre con la normativa vigente del país (REBT, IEC 60364, NFPA 70/NEC) y el fabricante.

#### Errores frecuentes
- Modelar conduletas `LB` o `LR` con la tapa orientada contra la cara del hormigón o pegada a una bandeja contigua, haciendo imposible abrir los tornillos en obra.
- Usar codos de radio miniatura imposibles en lugar de insertar una conduleta `LB` a la salida compacta de tableros o pasos de muro.
- Olvidar colocar cajas de registro o paso en tramos extensos o cambios múltiples de dirección, ocultando en 3D la imposibilidad física de pasar los conductores.
- Colocar cajas de registro genéricas sin conectores pasantes (`Conduit Connectors`), provocando que cada caja rompa la trazabilidad continua del parámetro `Service Type` o deje desconexiones en `Show Disconnects`.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué diferencia práctica y espacial existe entre emplear una conduleta `LB`, una `LL` y una `LR` al cambiar de dirección junto a un paramento?
2. ¿Cómo resuelve una conduleta `LB` la salida vertical de un tubo Ø $50\text{ mm}$ desde un cuadro hasta un pasamuros situado a solo $180\text{ mm}$ de profundidad donde fallaba el enrutado automático?
3. ¿Por qué conviene incluir una geometría auxiliar de reserva (*Access Clearance*) frente a la tapa de cajas de paso y conduletas dentro de su familia `.rfa`?

---

### 3.2. Acoplamientos, boquillas, prensaestopas (*Cable Glands*) y sellados de estanqueidad

#### Explicación breve y clara
La transición real entre un tramo de tubo rígido y la envolvente metálica de un tablero, motor vibrante, luminaria estanca o bandeja portacables nunca se realiza «pegando» el tubo a pelo contra la chapa. En obra intervienen elementos pequeños pero críticos para la seguridad mecánica, la estanqueidad frente a agua/polvo y la compatibilidad electromagnética: **acoplamientos roscados o de compresión (`Couplings`)**, **tuercas de bloqueo y boquillas aislantes (`Locknuts & Bushings`)** para no rasgar el cable en el borde cortante de la chapa, **tramos flexibles antivibratorios** hacia motores, **prensaestopas métricos (`Cable Glands` M20–M63)** y **sellados cortafuegos**. En Revit MEP, modelar el prensaestopas o manguito de entrada en puntos singulares (tableros, exteriores, equipos industriales) eleva la precisión del cómputo y previene fallos de longitud real en barras y conexiones finales.

#### Conceptos clave
- **Acoplamientos (`Couplings`) y racores mixtos:** Uniones rectas de empalme por barras comerciales (p. ej., cada $3\text{ m}$), adaptadores macho/hembra de tubo rígido a tubo flexible y manguitos de expansión térmica en tramos muy largos expuestos al sol.
- **Contratuercas y boquillas (`Locknuts & Bushings`):** Conjunto mecánico que fija el extremo de un tubo metálico a la chapa de un cuadro eléctrico y protege la cubierta de los cables contra aristas vivas.
- **Prensaestopas (`Cable Glands`):** Accesorio roscado con junta elastomérica de compresión (M16, M20, M25, M32, M40, M50, M63) indispensable en entrada de cables a envolventes desde bandeja portacables o zonas húmedas/intemperie/ATEX para garantizar grado IP66/IP68 y retención mecánica a tracción.
- **Conexión flexible a equipos vibrantes:** Último tramo corto ($0{,}30\text{–}0{,}60\text{ m}$) en tubo flexible metálico recubierto de PVC o polímero estanco que desacopla vibraciones entre el tubo rígido fijado a estructura y un motor, bomba o ventilador.

#### Definiciones necesarias
- **Prensaestopas (*Cable Gland*):** Dispositivo mecánico de entrada de cable en envolvente eléctrica que asegura estanqueidad frente a líquidos y polvo (grado IP), sujeción frente a tirones y, en versiones blindadas/ATEX, continuidad de pantalla o barrera antideflagrante.
- **Boquilla protectora (*Insulating Bushing*):** Casquillo redondeado termoplástico o mixto instalado en el extremo roscado de un tubo al entrar en una caja o cuadro para evitar cortes en el aislamiento de los conductores durante el tirado y por vibración.

#### Ejemplo práctico realista
En el nivel -2 de un aparcamiento subterráneo con ventiladores de extracción de humos (`VEX-01` de $18{,}5\text{ kW}$, alimentación por cable resistente al fuego hasta su caja de bornas sobre la carcasa):
1. El tubo metálico rígido Ø $32\text{ mm}$ (`Service Type = VENTILACION-EMERGENCIA`) termina en una **caja de conexión estanca IP66** fijada a una viga cercana, utilizando un acoplamiento roscado con boquilla de entrada.
2. Desde la caja hasta la borna del ventilador, debido a la vibración en marcha del rotor, el modelador coloca un **prensaestopas metálico M32** en salida de caja, un tramo curvo corto de $0{,}45\text{ m}$ de tubo flexible metálico recubierto (`Tubo-Flexible-Estanco-32mm`) y otro prensaestopas M32 en la carcasa del motor.
3. En la tabla de accesorios, cada prensaestopas M32 y cada tramo flexible aparecen contabilizados por unidad y metro, evitando olvidar en presupuesto estos elementos críticos de remate.
*Nota de verificación normativa:* Las exigencias de cables resistentes al fuego para extracción de humos en aparcamientos, compatibilidad de prensaestopas certificados en atmósferas clasificadas (ATEX) y obligatoriedad de boquillas protectoras deben verificarse siempre con la normativa aplicable vigente del país (p. ej., REBT ITC-BT-29/28 y CTE DB-SI en España, IEC 60364 o NFPA 70) y las especificaciones del fabricante.

#### Errores frecuentes
- Conectar tubería rígida metálica directamente contra carcasas de ventiladores, bombas o transformadores secos sin tramo flexible antivibración ni racor de entrada.
- Omitir prensaestopas en modelos de bandejas portacables que llegan a envolventes exteriores o salas húmedas, produciendo desfases reales en el presupuesto de montaje (centenares de prensaestopas olvidados).
- Modelar cada tornillo o tuerca individual como familia independiente pesada en todas las cajas del edificio en lugar de integrarlos paramétricamente o asociarlos en familias ligeras de acometida/tablero donde aportan valor real.
- Mezclar diámetros métricos de prensaestopas (`M25`) con roscas imperiales (`NPT 3/4"`) en la descripción técnica de compras sin comprobar compatibilidad física de paso de rosca.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué no debe acometerse directamente con tubo metálico rígido a la caja de bornas de un motor eléctrico o ventilador de extracción?
2. ¿Qué función cumple un prensaestopas frente a un simple pasacables de goma cuando una acometida entra desde bandeja abierta a un cuadro en ambiente húmedo?
3. ¿Qué criterio de eficiencia BIM seguirías para decidir cuándo modelar físicamente cada acoplamiento/prensaestopas frente a asociarlo como parámetro cuantificable dentro del conjunto o familia?

---

### 3.3. Colgantes, carriles tipo *Unistrut* y soportes sísmicos/mecánicos (*Hangers & Supports*)

#### Explicación breve y clara
Uno de los puntos ciegos más costosos en la coordinación BIM tradicional es **omitir la soportería de tubos y bandejas**. Un paquete de seis tubos de acero Ø $40\text{ mm}$ o una bandeja de $400\text{ mm}$ llena de cables pesados no flotan en el aire: cuelgan de la losa superior mediante **varillas roscadas (M8/M10), tacos de expansión, perfiles ranurados tipo C (*Unistrut* en montaje tipo trapecio), abrazaderas individuales y, cuando aplica por normativa sísmica o cargas elevadas, arriostramientos diagonales rígidos o por cable**. En Revit MEP, modelar los colgantes con familias paramétricas ajustables en altura (`Longitud_Varilla` hasta la losa superior) permite comprobar en *clash detection* que las varillas no perforan conductos de climatización que pasan por encima y extraer mediciones exactas de metros de perfil metálico, varilla y unidades de abrazaderas.

#### Conceptos clave
- **Colgante individual vs. Soporte en trapecio (*Trapeze Hanger*):** Abrazadera de una sola varilla para tubo aislado frente a perfil horizontal tipo *Unistrut* suspendido por dos varillas laterales para soportar baterías paralelas de varios tubos o bandejas pesadas.
- **Soportes sísmicos / Arriostramiento lateral y longitudinal:** Tirantes en V (a $\sim 45^\circ$) o perfiles rígidos diagonales instalados periódicamente en zonas sísmicas o grandes alimentadores para impedir el balanceo horizontal durante sismos o ante esfuerzos electrodinámicos de cortocircuito.
- **Separación máxima entre soportes:** Distancia constructiva regulada según peso del haz y rigidez del material (p. ej., ilustrativamente cada $1{,}2\text{–}1{,}5\text{ m}$ en PVC rígido y $2{,}0\text{–}3{,}0\text{ m}$ en acero rígido EMT/RSC o bandejas según carga del fabricante).
- **Anclaje real a estructura vinculada:** La varilla del soporte no debe quedar suspendida en el aire ni anclada al falso techo ligero; debe alcanzar la cara inferior del forjado estructural o vigas de acero, o fijarse a muros portantes mediante ménsulas (*Wall Brackets*).

#### Definiciones necesarias
- **Soporte tipo trapecio (*Trapeze Support*):** Estructura de suspensión formada por dos varillas roscadas verticales ancladas al forjado superior y un perfil horizontal ranurado (tipo *Unistrut*) inferior sobre el que descansan y se abrazan varios conductos paralelos o bandejas.
- **Arriostramiento sísmico (*Seismic Bracing*):** Sistema de fijación diagonal transversal y longitudinal diseñado para resistir aceleraciones horizontales y verticales de diseño sísmico sin que las canalizaciones colapsen sobre vías de evacuación ni arranquen los cuadros.

#### Ejemplo práctico realista
En el techo del nivel -2 de un aparcamiento subterráneo (forjado de hormigón a $+3{,}40\text{ m}$ sobre solera), discurre una batería de 6 tubos paralelos de acero EMT Ø $40\text{ mm}$ a cota de eje $+2{,}75\text{ m}$ sobre una zona donde un conducto de ventilación rectangular de chapa de $600\times 300\text{ mm}$ cruza por encima a $+3{,}10\text{ m}$ (`Fondo = +2,95 m`).
1. El modelador coloca soportes en trapecio con perfil ranurado $41\times 41\text{ mm}$ de ancho $500\text{ mm}$ cada $2{,}50\text{ m}$ en los tramos rectos, ajustando las dos varillas M10 hasta el forjado ($L_{\text{varilla}} = 650\text{ mm}$).
2. Al ejecutar detección de interferencias con `MEC.rvt`, el modelo detecta inmediatamente que la varilla derecha del soporte #4 atraviesa de lleno el conducto de extracción de ventilación a $+3{,}10\text{ m}$.
3. Gracias a haber modelado los soportes en 3D antes de obra, el coordinador desplaza el trapecio #4 $450\text{ mm}$ antes del cruce (y el #5 $450\text{ mm}$ después) o sustituye el punto conflictivo por una ménsula anclada al pilar contiguo, evitando un retrabajo costoso de montaje en campo.
*Nota de verificación normativa:* Las distancias máximas entre fijaciones, requisitos de soportería resistente al fuego en vías de evacuación (para evitar caída prematura de cables en caso de incendio) y criterios de diseño sísmico deben comprobarse siempre frente a la normativa vigente aplicable en el país del proyecto (REBT, CTE, Eurocódigo, ASCE/NFPA o equivalente) y cálculo del fabricante de soportería.

#### Errores frecuentes
- Omitir por completo el modelado de soportes y varillas en zonas congestionadas bajo conductos de clima, descubriendo en obra que no existe punto recto vertical al techo donde fijar las varillas del trapecio.
- Anclar colgantes eléctricos directamente al entramado ligero del falso techo arquitectónico en lugar de extender la varilla hasta el forjado estructural superior.
- Sobrepasar distancias constructivas reales poniendo solo un soporte simbólico cada $8\text{ m}$ en tubos de PVC o bandejas cargadas, distorsionando los cómputos métricos de soportería.
- Modelar abrazaderas genéricas no paramétricas que obligan a crear 40 familias distintas para cada longitud de varilla diferente.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué modelar las varillas verticales de los soportes en trapecio hasta el forjado estructural superior resulta clave en la detección de interferencias frente a climatización?
2. ¿Qué diferencia constructiva existe entre un soporte gravitatorio estándar y un arriostramiento sísmico/mecánico en una batería de grandes alimentadores?
3. ¿Cómo parametrizarías una familia de soporte en trapecio para que se adapte automáticamente a distintos anchos de batería y alturas libres hasta losa?

---

### 3.4. Parametrización para detección de interferencias (*Clash Detection*), cómputos métricos y transición al Bloque 4

#### Explicación breve y clara
La culminación del **Bloque 3** consiste en convertir la geometría 3D en un modelo **verificable, medible y listo para documentar**. Para que los accesorios de tubos aporten verdadero valor en coordinación (**Clash Detection**) y presupuesto (**Cómputos métricos**), cada familia debe incorporar parámetros compartidos consistentes (`Codigo_Articulo`, `Descripcion_Medicion`, `Service Type`, `Grado_IP`, `Unidad_Medicion`) y geometrías auxiliares claras para holguras (*Clearance*) en subcategorías separadas que puedan activarse durante el análisis de interferencias (Revit `Interference Check` o Navisworks) y ocultarse al imprimir planos de montaje. Asimismo, verificar tablas de planificación (`Schedules`) limpias de tubos, codos, conduletas, cajas de paso y soportes prepara directamente el terreno para el **Bloque 4 (Documentación)**, donde en el **Tema 1** se construirán plantillas de vista (`View Templates`), etiquetas y láminas constructivas coherentes con el modelo 3D.

#### Conceptos clave
- **Subcategoría de holgura (*Clearance Subcategory*):** Capa geométrica diferenciada dentro de cajas, conduletas y equipos que permite verificar colisiones contra espacio de apertura/mantenimiento en *clash detection* sin ensanchar el cuerpo real en planos constructivos.
- **Tablas de planificación (*Schedules*) de canalizaciones y accesorios:** Extracción directa de metros lineales de tubo por diámetro y `Service Type`, conteo exacto de `Conduit Fittings` (codos, reducciones, conduletas `LB/LR/LL/T`), cajas de paso y conjuntos de soporte.
- **Control de calidad pre-documentación (Paso a Bloque 4):** Comprobación de que todo accesorio pertenece a la categoría correcta para ser etiquetado (`Conduit Fitting Tags`, `Electrical Fixture Tags`), tiene `Service Type` heredado/asignado y se muestra adecuadamente en niveles `Coarse/Medium/Fine`.
- **Asistencia con IA en redacción de partidas y auditoría de mediciones:** Uso de ChatGPT/Claude sobre listados CSV anonimizados de tablas de planificación para estructurar textos descriptivos de partidas de presupuesto y detectar desviaciones atípicas (p. ej., $800\text{ m}$ de tubo con $0$ soportes modelados), manteniendo siempre la validación humana de precios, rendimientos y normativa.

#### Definiciones necesarias
- **Detección de interferencias (*Clash Detection*):** Proceso automatizado de comprobación geométrica entre conjuntos de selección de distintas disciplinas (p. ej., Electricidad + Soportes + *Clearance* frente a Estructura y Climatización) clasificando colisiones duras (*Hard Clash*: dos sólidos ocupando el mismo espacio) y colisiones blandas (*Soft Clash*: invasión de zona libre de acceso o mantenimiento).
- **Cómputo métrico BIM (*Quantity Takeoff*):** Extracción estructurada de mediciones geométricas y recuentos unitarios desde las propiedades del modelo 3D (longitudes netas de tubería, unidades de conduletas, soportes y cajas), sujeta siempre a factores de despunte/merma y revisión técnica del presupuestador.

#### Ejemplo práctico realista
Antes de cerrar el modelo del edificio para pasar al **Bloque 4 (Documentación)**, el coordinador genera tres tablas de planificación en Revit (`Conduit Schedule`, `Conduit Fitting Schedule`, `Hangers & Boxes Schedule`), las exporta como CSV anonimizado y revisa junto con el jefe de obra los resultados siguientes:
- **Tramo `ACOMETIDA-BT` Ø $63\text{ mm}$:** $64{,}5\text{ m}$ lineales totales, $8$ curvas radio largo $R=400\text{ mm}$, $2$ conduletas `LB` Ø $63\text{ mm}$, $24$ acoplamientos roscados y $26$ soportes en trapecio M10 (ratio aproximado $1$ soporte cada $2{,}48\text{ m}$, coherente con especificación de acero rígido).
- **Incidencia detectada al cruzar tabla con IA y revisión manual:** Para `Tubo-LSZH` Ø $25\text{ mm}$ aparecen $310\text{ m}$ lineales pero solo $12$ cajas de registro y $0$ abrazaderas en la planta primera. Al investigar, el equipo verifica que el modelo no tenía insertadas las fijaciones de techo del corredor de planta 1 y que faltaba etiquetar el `Codigo_Articulo` de 14 cajas de paso antes de crear láminas en el Bloque 4.
- **Resultado de `Interference Check`:** Se distinguen $0$ *Hard Clashes* con estructura y únicamente $3$ *Soft Clashes* en tapas de conduletas en plenum, resueltos rotando las tapas hacia el pasillo registrable.

#### Errores frecuentes
- Confiar en las mediciones brutas de Revit para licitar una obra sin verificar si se omitieron soportes, cajas, despuntes comerciales de barras ni accesorios menores (tornillería, tacos, mermas).
- Mezclar la geometría del cuerpo sólido y el volumen `Clearance` en la misma subcategoría, provocando cientos de «falsos choques duros» o cajas gigantes imposibles al acotar en planos del Bloque 4.
- Crear familias de soportes o conduletas bajo `Generic Models` en lugar de `Conduit Fittings` / `Electrical Fixtures` (o categoría específica de soportería asignada en proyecto), impidiendo etiquetarlas automáticamente y agruparlas en tablas por sistema.
- Pedir a ChatGPT o Claude que «genere el presupuesto final oficial» sin darle criterios técnicos de obra ni comprobar manualmente unidades, descompuestos y normativa local.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué diferencia operativa existe entre un *Hard Clash* y un *Soft Clash* al analizar interferencias de cajas de paso, conduletas y soportes?
2. ¿Cómo puedes comprobar rápidamente mediante tablas de planificación (`Schedules`) si un modelo eléctrico 3D tiene un nivel realista de soportería y cajas de registro respecto a sus metros lineales de tubo?
3. ¿Qué requisitos mínimos de categorización y parametrización deben cumplir los accesorios de tubos antes de comenzar a crear plantillas de visualización y planos en el Bloque 4?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** cierra el Bloque 3 combinando auditoría visual de ausencia de accesorios, microlecciones sobre conduletas, prensaestopas y soportes, modelado práctico en Revit MEP sobre el archivo heredado del Tema 4 y un caso complejo subterráneo con *clash detection* y cómputos asistidos por IA.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
| :--- | :---: | :--- | :--- |
| **1. Apertura, diagnóstico y activación** | 00:00 – 00:25 (25 min) | Conecta con el modelo depurado del Tema 4, realiza el sondeo diagnóstico inicial sobre conduletas y soportes, y lanza la **Actividad 1**. | Compara dos modelos/capturas de la misma galería técnica (solo tubos+codos vs. tubos+conduletas+prensaestopas+trapecios) e identifica en parejas 5 omisiones críticas de constructibilidad y mediciones. |
| **2. Microlearning técnico I (3.1 y 3.2)** | 00:25 – 00:55 (30 min) | Demuestra la inserción correcta de conduletas (`LB`, `LR`, `LL`, `T`), cajas de paso con volumen `Access Clearance`, prensaestopas métricos y tramos flexibles antivibratorios sin generar desconexiones. | Sigue la demostración sobre su modelo del Tema 4, practicando la sustitución de un giro estrecho por una conduleta `LB` y orientando su tapa hacia zona accesible. |
| **3. Práctica guiada de aplicación (Actividad 2)** | 00:55 – 01:40 (45 min) | Lanza la **Actividad 2** sobre `Apellido_Nombre_T4_UnionesLimpias.rvt`, supervisa la inserción de accesorios, extensión de varillas de trapecio hasta el forjado y ajuste de parámetros compartidos. | Incorpora conduletas `LB/T`, cajas de paso en tramos largos, prensaestopas/tramo flexible a equipo vibrante y una serie de soportes tipo trapecio ajustados a losa; extrae tabla preliminar de cómputo. |
| **Descanso breve** | 01:40 – 01:55 (15 min) | Pausa técnica y preparación del escenario del caso de infraestructura subterránea. | Descanso activo e intercambio informal. |
| **4. Microlearning técnico II (3.3 y 3.4)** | 01:55 – 02:20 (25 min) | Explica soportería pesada, arriostramientos sísmicos/mecánicos, detección de choques *Hard* vs. *Soft Clash*, control de ratios en *Schedules* y transición hacia plantillas del Bloque 4. | Configura un `Interference Check` de prueba entre sus accesorios/soportes y el vínculo de climatización/estructura, y revisa los parámetros compartidos de sus tablas. |
| **5. Resolución del caso práctico** | 02:20 – 03:05 (45 min) | Presenta el caso **«Intercambiador Norte — Nivel -2»** (faltan `LB`, ausencia de trapecios, tapas bloqueadas por conductos de clima), acompañando el análisis por equipos. | En equipos de 3-4 personas, resuelve los choques de soportes y tapas, selecciona los accesorios faltantes (incluyendo sellados/prensaestopas y sísmica si procede) y redacta un prompt anonimizado de auditoría de cómputos. |
| **6. Puesta en común y auditoría cruzada** | 03:05 – 03:25 (20 min) | Modera la exposición de 3 equipos, compara las soluciones de *Soft Clash* y ratios de soportería, y consolida el estándar de entrega del Bloque 3. | Presenta su solución técnica (4 min/equipo), contrasta posibles sesgos en las mediciones revisadas con IA y valida la preparación del modelo para el Bloque 4. |
| **7. Transferencia a proyecto real (Actividad 3)** | 03:25 – 03:45 (20 min) | Guía la **Actividad 3** proporcionando la Checklist de Cierre del Bloque 3 y la plantilla de auditoría de cómputos/choques para el proyecto real o integrador del alumnado. | Aplica la checklist final al modelo de su proyecto, diseña un prompt anonimizado para estructurar partidas de accesorios a partir del CSV y verifica manualmente ratios y normativas a comprobar. |
| **8. Síntesis, evaluación sumativa y cierre** | 03:45 – 04:00 (15 min) | Cierra el **Bloque 3** resumiendo el recorrido de los 5 temas, aplica la evaluación sumativa final + autoevaluación y abre la puerta al **Bloque 4 (Tema 1: Plantillas de visualización)**. | Completa el test técnico de cierre y la ficha de autoevaluación; deja archivado su modelo completo `LOD 300/350` listo para documentar en el Bloque 4. |

*Suma total verificada: $25 + 30 + 45 + 15 + 25 + 45 + 20 + 20 + 15 = \mathbf{240\text{ minutos (4 horas)}}$.*

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «Encuentra los 5 elementos invisibles que arruinan la obra»

- **Nombre:** Encuentra los 5 elementos invisibles que arruinan la obra.
- **Objetivo:** Sensibilizar al alumnado sobre la brecha entre un trazado «limpio» de tubos con codos básicos y un modelo con fidelidad constructiva real para coordinación y presupuesto.
- **Instrucciones para el alumnado:**
  1. Observad en parejas las dos vistas proyectadas (o los dos archivos comparativos de `Kit-T5-Comparativa`): Modelo A (tubos y codos simples heredados de un modelo preliminar) frente a Modelo B (instalación industrial/subterránea completa).
  2. Identificad en 10 minutos cinco carencias constructivas en el Modelo A dentro de estas categorías: (a) giro compacto en paso de muro con falta de espacio para codo, (b) accesibilidad de tiro en tramo largo con 4 curvas, (c) remate antivibración/estanco en motor, (d) falta de sujeción mecánica contra forjado en batería paralela y (e) colisión oculta con conducto superior al añadir varillas.
  3. Anotad qué impacto tendría cada omisión si el Modelo A se enviara directamente a presupuestos (cómputos) o al coordinador BIM de obra.
- **Materiales necesarios:** Capturas comparativas de alta resolución o archivos `Kit-T5-Comparativa` (`ModeloA.rvt` y `ModeloB.rvt`), ficha de trabajo, temporizador.
- **Tiempo estimado:** 15 minutos (integrados en la Fase 1).
- **Rol del formador:** Guiar la discusión conectando cada omisión visual con partidas reales de obra (*«¿Cuántos metros de perfil y cuántos trapecios faltan en el presupuesto del Modelo A?»*).
- **Producto o entregable esperado:** Lista por parejas de 5 carencias técnicas clasificadas por accesorio necesario y riesgo en obra/mediciones.
- **Criterios de éxito:** Identificación precisa de al menos 4 de las 5 omisiones y diferenciación correcta entre codo curvado estándar y conduleta registrable.

---

### Actividad 2 (Aplicación técnica): «Incorporación de conduletas, cajas de paso, prensaestopas y soportes en trapecio»

- **Nombre:** Incorporación de conduletas, cajas de paso, prensaestopas y soportes en trapecio.
- **Objetivo:** Modelar accesorios constructivos reales en Revit MEP sobre el proyecto del Tema 4, parametrizarlos y comprobar su comportamiento en tablas de cómputo y pruebas básicas de *clash detection*.
- **Instrucciones para el alumnado:**
  1. Abrid vuestro archivo `Apellido_Nombre_T4_UnionesLimpias.rvt` (o `Kit-T5-ModeloBase.rvt` con la librería `Kit-T5-Accesorios.rfa` cargada).
  2. En la salida ajustada del subtablero o paso de muro indicado, sustituid el codo imposible o forzado por una **conduleta `LB`** (u otra `LR/LL` según orientación) comprobando que la tapa desmontable mira hacia el pasillo registrable y que su subvolumen `Access Clearance` queda libre.
  3. En el tramo troncal largo con varias curvas, intercalad una **caja de paso/registro** conectada en línea manteniendo continuidad del parámetro `Service Type` y cero desconexiones en `Show Disconnects`.
  4. En la acometida al equipo vibrante (ventilador/bomba de prueba), insertad un tramo corto de tubo flexible estanco rematado con **prensaestopas** en ambos extremos.
  5. En el corredor con batería paralela de tubos, colocad al menos **3 soportes tipo trapecio (`Unistrut`)** separados $2{,}50\text{ m}$ ajustando `Longitud_Varilla` hasta la cara inferior de la losa estructural del vínculo `EST`, y ejecutad un `Interference Check` contra el vínculo `MEC` (climatización) para verificar que ninguna varilla ni tapa colisiona.
  6. Abrid las tablas de planificación `Conduit Fittings` y `Accesorios_Soportes` verificando que contabilizan correctamente cada unidad insertada.
- **Materiales necesarios:** Revit MEP, modelo del Tema 4 o `Kit-T5-ModeloBase.rvt`, librería de familias ligeras de conduletas, cajas de paso, prensaestopas y soporte paramétrico trapecio con subcategoría `Clearance`.
- **Tiempo estimado:** 45 minutos (Fase 3).
- **Rol del formador:** Mostrar inicialmente cómo orientar la tapa de la `LB` con la barra espaciadora / controles de volteo y cómo ajustar la altura de varilla del trapecio en vista de sección; verificar en aula que el `Interference Check` incluye la subcategoría `Clearance`.
- **Producto o entregable esperado:** Archivo `Apellido_Nombre_T5_ModeloFinalBloque3.rvt` con accesorios integrados, cero colisiones tras ajuste y tablas de planificación actualizadas.
- **Criterios de éxito:** Conduleta correctamente orientada y accesible; cero desconexiones en `Show Disconnects` tras insertar caja de paso; varillas de trapecio ancladas exactamente a la losa estructural sin colisiones con climatización; todos los accesorios aparecen contabilizados en tabla con `Service Type` coherente.

---

### Actividad 3 (Transferencia a proyecto real): «Checklist de cierre del Bloque 3 y auditoría de cómputos con IA»

- **Nombre:** Checklist de cierre del Bloque 3 y auditoría de cómputos con IA.
- **Objetivo:** Consolidar una auditoría técnica integral previa al Bloque 4 (Documentación) y emplear IA generativa de manera segura sobre CSV anonimizados para detectar inconsistencias en mediciones y redactar borradores de partidas de presupuesto.
- **Instrucciones para el alumnado:**
  1. Cumplimentad la **Checklist de Cierre de Modelado 3D MEP Eléctrico** (Sección 8.3) aplicándola al modelo de vuestro proyecto integrador o a una obra real anonimizada.
  2. Exportad o utilizad la tabla CSV anonimizada `Muestra_Computos_Accesorios.csv` (metros por diámetro/material de tubo, unidades de codos, conduletas `LB/LR/LL/T`, cajas de registro, prensaestopas y soportes en trapecio).
  3. Redactad un **prompt estructurado en ChatGPT o Claude** (sin datos de empresa ni cliente) solicitando: (a) verificar ratios básicos de coherencia (p. ej., número de soportes frente a longitud total de tubo por material y presencia de registros en tramos largos), y (b) generar un borrador de texto descriptivo técnico de 2 partidas de medición (p. ej., partida de conduleta `LB` IP66 y partida de soporte trapecio con varilla).
  4. Revisad manualmente la salida de la IA: comprobad las operaciones aritméticas de ratios y añadid las referencias normativas o de fabricante que el técnico competente debe verificar antes de llevar esas partidas a un proyecto oficial.
- **Materiales necesarios:** Plantilla técnica práctica (Sección 8.3), archivo `Muestra_Computos_Accesorios.csv`, acceso a ChatGPT o Claude.
- **Tiempo estimado:** 20 minutos (Fase 7).
- **Rol del formador:** Vigilar la anonimización total de los datos de obra y recalcar que los textos generados por IA son borradores descriptivos que exigen revisión técnica y ajuste al cuadro de precios y normativa del país.
- **Producto o entregable esperado:** Checklist de cierre cumplimentada + registro del análisis de ratios y borrador de partidas revisado y corregido manualmente.
- **Criterios de éxito:** El alumno identifica matemáticamente cualquier déficit de soportería o accesorios en la tabla CSV, comprueba los ratios calculados por la IA y delimita con rigor qué aspectos legales/normativos no cubre el borrador de la IA.

---

## 6. Caso práctico

### Caso: Estación Intermodal y Aparcamiento Subterráneo «Intercambiador Norte» — Fallos de accesibilidad, soportería omitida y *Clash Detection* fallido en Nivel -2

#### Contexto empresarial
**Infraestructuras Eléctricas del Norte, S.A.** lidera el modelado BIM eléctrico (*LOD 350* de coordinación de montaje) del **Nivel -2** de una gran estación intermodal con aparcamiento subterráneo de $4\,800\text{ m}^2$ y salas técnicas de ventilación, bombeo y transformación. Debido a la humedad ambiental, la clasificación del aparcamiento y las exigencias de evacuación contra incendios, gran parte de la distribución secundaria y alimentadores se ejecuta vista bajo losa de hormigón (cota losa $+3{,}60\text{ m}$, altura libre requerida de paso vehicular mínimo $+2{,}45\text{ m}$ bajo instalaciones).

En la galería técnica conviven conductos metálicos de extracción de humos de $900\times 400\text{ mm}$ (cota inferior $+2{,}85\text{ m}$), red de rociadores contra incendios, bandejas de telecomunicaciones y las canalizaciones eléctricas de potencia y ventilación de emergencia en tubo metálico rígido roscado (Ø $25, 32, 40, 50\text{ mm}$).

#### Situación o problema
Durante la reunión de coordinación previa a la generación de láminas de montaje (Bloque 4), el coordinador general de la UTE ejecuta una auditoría de interferencias (*Navisworks / Interference Check*) y de cómputos métricos sobre el modelo eléctrico `EL-Intercambiador-N2.rvt`, emitiendo un rechazo técnico por cuatro fallos graves:
1. **Acometidas a cuartos técnicos sin conduletas `LB`:** En 12 pasos de muro cortafuegos desde el corredor principal hacia salas de máquinas y subtableros (`S-VEX-01` a `S-VEX-04`), el modelador dejó tubos Ø $50\text{ mm}$ atravesando el muro sin accesorios de giro compacto ni acoplamiento/boquilla, o con codos apretados que sobresalen por debajo de la cota mínima de gálibo de paso ($+2{,}45\text{ m}$).
2. **Ausencia total de soportes modelados para baterías:** El cómputo arroja $420\text{ m}$ de tubos en baterías paralelas de 6 tubos Ø $40\text{ mm}$ a cota $+2{,}65\text{ m}$, pero **$0$ soportes modelados** y **$0$ arriostramientos sísmicos/mecánicos** (solicitados en el proyecto por tratarse de infraestructura de transporte estratégica). Cuando un subcontratista simuló colocar trapecios cada $2{,}50\text{ m}$, descubrió que el $35\,\%$ de los recorridos pasaba exactamente bajo conductos de extracción de humos de $900\text{ mm}$ de ancho sin posibilidad vertical de anclaje directo a la losa.
3. **14 cajas de registro bloqueadas (*Soft Clash*):** El modelo incluye 14 cajas de paso de $300\times 300\times 120\text{ mm}$ en tramos troncales largos, pero al activar su volumen de reserva de acceso frontal (`Access Clearance` de $450\text{ mm}$), 14 cajas tienen la tapa apuntando hacia arriba (chocando a $120\text{ mm}$ del fondo del conducto de extracción de humos) o mirando contra la bandeja superior de rociadores, haciendo imposible abrir los tornillos y pasar cables.
4. **Cómputo irreal de remates a motores:** Los 8 ventiladores de extracción de humos de $22\text{ kW}$ muestran el tubo rígido Ø $32\text{ mm}$ entrando directamente al sólido de la carcasa sin caja previa, tramo flexible antivibración ni prensaestopas resistentes al entorno.

#### Datos disponibles

| Parámetro / Elemento en Nivel -2 | Situación actual en `EL-Intercambiador-N2.rvt` | Requisito técnico y de coordinación |
| :--- | :--- | :--- |
| **Gálibos verticales en corredor** | Losa $+3{,}60\text{ m}$; fondo conducto humos $900\times 400\text{ mm}$ a $+2{,}85\text{ m}$ | Gálibo libre vehicular mínimo $+2{,}45\text{ m}$; margen bajo conducto humos: $400\text{ mm}$ |
| **Batería de 6 tubos Ø $40\text{ mm}$** | $420\text{ m}$ lineales totales a eje $+2{,}65\text{ m}$; **$0$ soportes** en modelo | Soportes trapecio *Unistrut* cada $2{,}50\text{ m}$ ($\sim 28$ uds. en batería) + arriostramiento sísmico/mecánico cada $9\text{–}12\text{ m}$ |
| **12 acometidas a cuartos técnicos** | Codos forzados bajo $+2{,}45\text{ m}$ o tubos directos sin accesorio | Conduletas `LB` IP66 en paso de muro + sellado cortafuegos + boquillas/acoplamientos |
| **14 cajas de registro ($300\times 300\times 120$)** | Tapa orientada hacia arriba o contra rociadores (*Soft Clash*) | Acceso frontal o lateral mínimo libre de $450\text{ mm}$ sin obstrucciones MEP |
| **8 ventiladores `VEX` ($22\text{ kW}$)** | Tubo rígido Ø $32\text{ mm}$ directo a carcasa | Caja estanca + prensaestopas métricos + tubo flexible estanco $0{,}45\text{ m}$ |

#### Preguntas de análisis
1. ¿Por qué el hecho de pasar una batería de 6 tubos Ø $40\text{ mm}$ por debajo de un conducto de humos de $900\text{ mm}$ de ancho a $+2{,}85\text{ m}$ hace fracasar unos soportes de varilla verticales simples si no se detectó en *clash detection*?
2. ¿Cómo resolverías constructivamente la orientación y reubicación de las 14 cajas de registro y de las 12 salidas hacia cuartos técnicos respetando simultáneamente el gálibo de $+2{,}45\text{ m}$ y los $450\text{ mm}$ de acceso a tapa?
3. ¿Qué diferencia habría en el presupuesto de licitación y en el montaje de obra entre entregar el cómputo actual frente a un cómputo con conduletas `LB`, acoplamientos, prensaestopas, tramos flexibles y trapecios con arriostramiento modelados?
4. ¿Cómo evitarías que la subcategoría `Access Clearance` de las cajas produzca falsos positivos de choque duro en los planos de planta que se generarán en el Bloque 4?

#### Tarea a realizar
En equipos de 3-4 personas durante **45 minutos**, elaborad el **Plan de Fidelización Constructiva y Cierre BIM (LOD 350)** para `EL-Intercambiador-N2.rvt`:
1. **Rediseño de soportería bajo conducto de humos y arriostramiento:** Proponed una solución constructiva viable (p. ej., trapecios anclados lateralmente fuera del ancho de $900\text{ mm}$ con perfil puente sobredimensionado, ménsulas a pilares/muro contiguo o desplazamiento lateral de la batería $500\text{ mm}$ respecto al conducto) verificando que se respeta el gálibo $+2{,}45\text{ m}$, más el criterio de ubicación de arriostramientos transversales/longitudinales.
2. **Especificación de accesorios en acometidas, registros y motores:** Definid el paquete exacto de familias a insertar en los 12 pasos de muro (conduletas `LB` + sellado cortafuegos), las 14 cajas de paso (orientación lateral de tapas y verificación `Soft Clash`) y los 8 ventiladores `VEX` (caja + prensaestopas + flexible estanco).
3. **Tabla estimada de cómputos corregidos y parámetros clave:** Estimad el orden de magnitud de las unidades faltantes de soportes trapecio, prensaestopas y conduletas que deben aparecer en el modelo, indicando qué parámetros compartidos deben quedar listos para las etiquetas y vistas del Bloque 4.
4. **Prompt anonimizado para auditoría de cómputos y descripción técnica con IA:** Redactad un prompt para ChatGPT/Claude que revise la tabla CSV exportada tras la corrección, compruebe coherencia de ratios soporte/metro y genere el borrador de especificación técnica de montaje de las conduletas y soportes, explicitando las validaciones normativas externas obligatorias.

#### Posibles soluciones o criterios de análisis
- **Soportería bajo conducto de $900\text{ mm}$:** El margen bajo el conducto ($+2{,}85\text{ m}$ a $+2{,}45\text{ m}$) es de $400\text{ mm}$. Si la batería va a $+2{,}65\text{ m}$ (`BOC \approx +2,63 m`), añadiendo perfil `Unistrut` de $41\text{ mm}$ bajo los tubos quedamos en $+2{,}59\text{ m}$ (cumple gálibo $>2{,}45\text{ m}$). Para colgar las varillas a losa sin atravesar el conducto de $900\text{ mm}$ situado encima, la solución óptima es **desplazar la batería lateralmente fuera de la proyección del conducto** si el corredor lo permite, o bien emplear un **perfil puente ancho ($1\,100\text{ mm}$)** cuyas dos varillas bajen por los costados exteriores del conducto de ventilación (dejando $100\text{ mm}$ libres a cada lado), o anclarse mediante ménsulas a muro lateral. Además, intercalar arriostramientos sísmicos/mecánicos transversales/longitudinales según diseño estructural/normativa sísmica vigente del proyecto.
- **Accesorios en muros, registros y `VEX`:** En los 12 pasos a cuartos técnicos, sustituir los codos bajos por conduletas `LB` Ø $50\text{ mm}$ IP66 con tapa lateral o frontal accesible hacia el pasillo, garantizando altura $>+2{,}45\text{ m}$ y paso cortafuegos certificado. Rotar las 14 cajas de registro $90^\circ$ para que su tapa y subvolumen `Access Clearance` ($450\text{ mm}$) miren lateralmente hacia el pasillo de circulación libre (cero *Soft Clash*). En los 8 motores `VEX`, terminar tubo rígido en caja IP66 + 2 prensaestopas M32 (en caja y carcasa) + $0{,}45\text{ m}$ de tubo flexible estanco (verificando resistencia al fuego del conjunto si exige normativa de extracción de humos).
- **Cómputos y transición a Bloque 4:** De $0$ soportes se pasa a $\sim 28\text{–}30$ trapecios en batería ($420\text{ m}$ de batería de 6 tubos = $70\text{ m}$ de recorrido dividido entre $2{,}50\text{ m}$ = $28$ conjuntos + extremos/arriostramientos), $12$ conduletas `LB`, $16$ prensaestopas M32 y $8$ tramos flexibles. Todo ello clasificado con `Service Type`, `Codigo_Articulo` y subcategoría `Access Clearance` apagable mediante plantilla de vista en Bloque 4 Tema 1.
- **Uso de IA:** Prompt anonimizado (sin citar «Intercambiador Norte» ni ubicación) que verifica el ratio $2{,}5\text{ m/soporte}$ sobre $70\text{ m}$ de corredor de batería y redacta borradores descriptivos sujetos a verificación de cálculo estructural sísmico, resistencia al fuego y normativa vigente aplicable.

#### Preguntas de reflexión final
1. ¿Por qué el coordinador BIM rechazó el modelo a pesar de que los tubos principales y cajas ya estaban dibujados sin *Hard Clashes* directos antes de añadir soportes y volúmenes de acceso?
2. Pensando en el Bloque 4 (Documentación), ¿qué ahorro de tiempo y errores en planos supone tener desde hoy todos los accesorios categorizados, parametrizados y con subcategorías de holgura separadas?

---

## 7. Evaluación

### 7.1. Evaluación diagnóstica
Sondeo breve de 3 preguntas (5 minutos en la Fase 1):
1. ¿Cuál de las siguientes conduletas utilizarías para entrar verticalmente por la parte superior y salir perpendicularmente por la parte posterior atravesando un muro hacia un tablero? *(Respuesta esperada: Conduleta `LB`)*.
2. ¿Qué elemento resulta imprescindible al pasar de un tubo rígido fijado a techo hasta la caja de bornas de un motor eléctrico sometido a vibraciones? *(Respuesta esperada: Tramo corto de tubo flexible + prensaestopas/racor estanco)*.
3. ¿Por qué no basta comprobar colisiones únicamente contra el cuerpo físico de una caja de registro en pruebas de *clash detection*? *(Respuesta esperada: Porque debe comprobarse también un volumen libre de acceso frontal —Soft Clash— para poder abrir la tapa y tender cables)*.

### 7.2. Evaluación formativa
Seguimiento continuo del formador durante las Actividades 1 y 2 y el Caso práctico mediante lista de cotejo:
- Verifica que la orientación de tapas de conduletas `LB/LR/LL` y cajas de paso queda hacia zonas accesibles sin obstrucciones.
- Comprueba que los accesorios insertados en línea no producen desconexiones abiertas en `Show Disconnects`.
- Revisa que las varillas roscadas de los soportes en trapecio alcanzan el forjado estructural del vínculo `EST` sin atravesar conductos vinculados ni detenerse en el falso techo.
- Valora la calidad y anonimización de las auditorías sobre tablas CSV realizadas con ChatGPT/Claude.

### 7.3. Evaluación sumativa
Evaluación final ponderada al cierre del Tema 5 y del Bloque 3 (Fase 8):
1. **Entregable práctico BIM final del Bloque 3 y resolución del caso (65 %):** Archivo `Apellido_Nombre_T5_ModeloFinalBloque3.rvt` (Actividad 2) + Plan de Fidelización Constructiva del caso *Intercambiador Norte*, evaluados con la rúbrica de la sección 7.4.
2. **Prueba técnica integradora del tema + Auditoría de cómputos con IA (35 %):** Test de 5 ítems sobre tipos de conduletas (`LB/LR/LL/T/C`), prensaestopas/boquillas, soportería y arriostramiento, *Hard/Soft Clash* y transición al Bloque 4 + entregable de la Actividad 3.

### 7.4. Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
| :--- | :--- | :--- | :--- | :--- |
| **Incorporación de cajas de paso y conduletas (`LB/LR/LL/T/C`)** | Omite registros en tramos complejos o inserta conduletas con tapas bloqueadas contra muros, vigas o conductos, rompiendo la continuidad de los tubos. | Inserta cajas o conduletas básicas, pero presenta algún error de orientación de tapa, falta de subvolumen `Clearance` o desconexiones en línea. | Inserta conduletas (`LB/LR/LL/T`) y cajas de paso correctamente orientadas hacia zonas registrables, con volumen `Access Clearance` libre y cero desconexiones. | Domina el empleo estratégico de conduletas y cajas de registro para optimizar espacios compactos y longitudes de tiro, manteniendo trazabilidad integral de `Service Type`. |
| **Acoplamientos, prensaestopas y remates a equipos** | Conecta tubos rígidos directamente a equipos vibrantes sin racores ni flexibles, u omite prensaestopas en entornos húmedos/exteriores. | Incorpora algún elemento de remate o acoplamiento, pero con inconsistencias métricas o sin parametrizar su cómputo en tablas. | Integra acoplamientos, boquillas protectoras, prensaestopas métricos y tramos flexibles antivibratorios coherentes en entradas a equipos y envolventes. | Selecciona y parametriza con rigor constructivo accesorios de estanqueidad y transición, distinguiendo claramente qué modelar en 3D y qué vincular por parámetro para optimizar el archivo. |
| **Soportería mecánica, trapecios y *Clash Detection*** | No modela soportes ni comprueba interferencias con otras disciplinas, dejando canalizaciones flotando o varillas invadiendo conductos de clima. | Modela soportes aislados sin respetar separación constructiva o deja varillas colgadas del falso techo sin llegar a la losa estructural. | Modela soportes en trapecio (*Unistrut*) ajustados exactamente al forjado estructural con separación realista y resuelve *Hard* y *Soft Clashes* en prueba de interferencias. | Diseña soportería completa (trapecios, ménsulas y criterio de arriostramiento sísmico/mecánico) con subcategorías de holgura separadas, logrando cero colisiones críticas. |
| **Cómputos métricos, transición a Bloque 4 y uso de IA** | Tablas vacías o categorías erróneas (`Generic Models`); acepta mediciones o especificaciones de IA sin validar ni anonimizar datos. | Extrae tablas básicas de tubos/accesorios, pero omite validar ratios soporte/metro o realiza revisión superficial del borrador de la IA. | Parametriza accesorios en categorías etiquetables para extraer cómputos fiables, audita ratios en CSV anonimizado con IA y prepara el modelo limpio para Bloque 4. | Consolida un modelo `LOD 350` auditable con parámetros compartidos completos, detección manual de omisiones frente a IA y delimitación explícita de validación normativa externa. |

### 7.5. Actividad de autoevaluación
En los últimos 5 minutos de la Fase 8, cada participante responde por escrito en su cuaderno o campus virtual:
1. *Comparando tu modelo inicial del Tema 1 con el archivo final del Tema 5, ¿qué cambio técnico concreto aporta mayor valor real al instalador electricista en obra y al ingeniero de presupuestos?*
2. *Explica con tus palabras por qué un modelo 3D lleno de conduletas, prensaestopas y soportes sin errores en `Interference Check` sigue necesitando verificación humana de cálculos y normativa antes de ejecutarse en obra.*
3. *Puntúa del 1 al 5 tu preparación actual del modelo 3D en Revit MEP para comenzar el **Bloque 4 (Documentación)** generando vistas, filtros, etiquetas y planos PDF.*

---

## 8. Materiales y recursos

### 8.1. Guion estructurado de diapositivas

| Diapositiva | Título | Contenido clave y actividad asociada |
| :--- | :--- | :--- |
| **Slide 1** | Portada: Accesorios de tubos y cierre del Bloque 3 | Título, Bloque 3 (Tema 5/5), 5 objetivos medibles y agenda de 240 minutos. |
| **Slide 2** | Lo que falta en un modelo «limpio» (Actividad 1) | Comparativa visual Modelo A (tubo simple) vs. Modelo B (constructivo): detección de los 5 accesorios invisibles en obra. |
| **Slide 3** | Cajas de registro y conduletas (`C`, `LB`, `LR`, `LL`, `T`) | Guía visual de orientación de tapas según dirección de salida, reglas de accesibilidad y volumen `Access Clearance`. |
| **Slide 4** | Acoplamientos, boquillas, prensaestopas y conexión flexible | Esquema constructivo de llegada a cuadro y motor vibrante: roscas métricas, grado IP y protección mecánica de aislamiento. |
| **Slide 5** | Soportería *Unistrut*, trapecios y arriostramientos sísmicos | Detalle de anclaje real a forjado estructural, distancias ilustrativas por material y prevención de choques de varillas contra clima. |
| **Slide 6** | *Clash Detection* (*Hard* vs. *Soft Clash*) y cómputos métricos | Configuración de `Interference Check`, separación de subcategoría de holgura y revisión de ratios en *Schedules*. |
| **Slide 7** | Caso Intercambiador Norte (Nivel -2) | Esquema en sección del gálibo $+2{,}45\text{ m}$, conducto de humos de $900\text{ mm}$ a $+2{,}85\text{ m}$ y reto de rescate `LOD 350`. |
| **Slide 8** | Auditoría de cómputos con IA y salto al Bloque 4 | Uso seguro de ChatGPT/Claude para ratios y borradores de partidas + puente directo hacia el Bloque 4 (Plantillas de visualización). |

### 8.2. Ficha de trabajo del alumnado
Documento de 2 páginas (PDF editable o impreso) dividido en 4 bloques prácticos:
- **Sección A (Actividad 1):** Hoja de registro de los 5 accesorios omitidos y su impacto en presupuesto y montaje.
- **Sección B (Guía visual de accesorios):** Diagrama esquemático de las 5 conduletas (`C`, `LB`, `LR`, `LL`, `T`) y checklist de parametrización de soporte en trapecio y *Interference Check*.
- **Sección C (Caso Intercambiador Norte):** Sección acotada en blanco del Nivel -2 para diseñar la solución del puente *Unistrut* bajo el conducto de humos y orientación de tapas de registro.
- **Sección D (Cierre de Bloque 3):** Checklist final de entrega hacia Bloque 4, registro de auditoría CSV con IA y autoevaluación.

### 8.3. Plantilla técnica práctica

```markdown
# CHECKLIST DE CIERRE DEL BLOQUE 3 (MODELADO 3D MEP ELÉCTRICO) Y AUDITORÍA DE ACCESORIOS
Proyecto (código anonimizado): ___________________   Fecha: ____________   Coordinador BIM: ______________

1. FIDELIDAD CONSTRUCTIVA DE ACCESORIOS Y REGISTROS
- Conduletas (LB/LR/LL/T/C) insertadas en salidas compactas y derivaciones sin tes ciegas: [ ] Verificado
- Cajas de paso/registro ubicadas según límite angular/distancia del proyecto: [ ] Verificado
- Subvolumen Access Clearance libre en 100 % de tapas (0 Soft Clashes sin resolver): [ ] Verificado
- Acoplamientos, boquillas, prensaestopas y tramos flexibles incorporados en equipos vibrantes: [ ] Verificado
- Continuidad tras inserción (Analyze > Show Disconnects = 0 alertas): [ ] Verificado

2. SOPORTERÍA Y DETECCIÓN DE INTERFERENCIAS (CLASH DETECTION)
- Soportes trapecio / abrazaderas modelados con varilla anclada a losa o estructura (EST): [ ] Verificado
- Distancia media entre soportes verificada (Acero/EMT: ~____ m | PVC/LSZH: ~____ m): [ ] Verificado
- Arriostramiento sísmico/mecánico contemplado si aplica por zona/infraestructura: [ ] Verificado (Norma: ______)
- Resultado Interference Check contra EST y MEC: Hard Clashes = ___ | Soft Clashes = ___

3. CÓMPUTOS MÉTRICOS, AUDITORÍA IA Y PREPARACIÓN PARA BLOQUE 4 (DOCUMENTACIÓN)
- Todos los accesorios en categorías etiquetables (Conduit Fittings / Electrical Fixtures) con Service Type: [ ] Sí
- Subcategorías de holgura (Clearance) separadas para poder apagarse en Plantillas de Vista (Bloque 4): [ ] Sí
- Prompt anonimizado ejecutado sobre CSV de tablas (sin datos de cliente) y ratios verificados manualmente: ________
- Verificación técnica independiente pendiente/confirmada (cálculo eléctrico, carga estructural, normativa vigente): ___
```

### 8.4. Lecturas y recursos recomendados
*(Advertencia importante para el formador y el alumnado: validar siempre la vigencia de fuentes, la versión exacta de Autodesk Revit y Navisworks empleada, las fichas de fabricantes certificados y la edición aplicable de reglamentos eléctricos, sísmicos y contra incendios antes de utilizar cualquier parámetro en obra real).*
- **Documentación oficial de Autodesk Revit — Conduit Fittings, Interference Check & Schedules:** Guías técnicas sobre familias paramétricas de accesorios en línea, subcategorías de visibilidad, ejecución de pruebas de interferencias dentro de Revit y exportación de tablas de planificación a CSV/TXT.
- **Catálogos técnicos de fabricantes especializados en canalizaciones industriales y soportería (*Unistrut* / sistemas de carriles y prensaestopas IP66/IP68/ATEX):** Tablas oficiales de cargas admisibles de perfiles, longitudes máximas entre soportes según diámetro de tubo, grados de protección ambiental y tablas de selección de conduletas (`C/LB/LR/LL/T`).
- **Normativa aplicable según país y tipo de obra:** Verificar siempre edición vigente para pasos cortafuegos en sectores de incendio, soportería resistente al fuego en vías de evacuación, diseño sismorresistente de instalaciones no estructurales y criterios de accesibilidad de cajas de registro (p. ej., REBT y CTE en España, Eurocódigo 8, IEC 60364 o NFPA 70 / ASCE 7).
- **Guía práctica del curso sobre uso seguro de ChatGPT y Claude en presupuestos BIM:** Metodología para redactar descripciones técnicas normalizadas a partir de mediciones CSV anonimizadas manteniendo el control profesional sobre criterios constructivos, rendimientos y normativa.

### Glosario de términos clave

| Término | Definición |
| :--- | :--- |
| **Acoplamiento (*Coupling*)** | Accesorio de unión lineal roscada, por compresión o enchufable destinado a empalmar tramos consecutivos de tubo rígido o conectar adaptadores a tramo flexible. |
| ***Clash Detection* (*Hard / Soft Clash*)** | Análisis automatizado de interferencias en 3D que diferencia colisiones físicas entre sólidos (*Hard Clash*) e invasiones de zonas libres de acceso o mantenimiento (*Soft Clash*). |
| **Conduleta (`C`, `LB`, `LR`, `LL`, `T`)** | Cuerpo metálico o sintético con tapa registrable desmontable que permite cambios de dirección compactos y acceso para tirado de cables sin emplear codos curvos amplios ni tes ciegas. |
| **Cómputo métrico (*Quantity Takeoff*)** | Extracción ordenada desde tablas de planificación BIM de longitudes de canalización y unidades de accesorios, que requiere validación humana de mermas y partidas no modeladas. |
| **Prensaestopas (*Cable Gland*)** | Dispositivo roscado de entrada de cable en envolvente eléctrica que aporta estanqueidad (IP66/IP68), alivio de tracción mecánica y, en su caso, continuidad de pantalla o protección ATEX. |
| **Soporte en trapecio (*Trapeze Hanger*)** | Conjunto de suspensión compuesto por perfil horizontal tipo *Unistrut* y dos varillas roscadas ancladas al forjado estructural superior para sostener baterías de tubos o bandejas. |
| **Arriostramiento sísmico (*Seismic Bracing*)** | Sistema de tirantes o perfiles diagonales rígidos añadido a la soportería gravitatoria para impedir desplazamientos excesivos ante sismos o fuerzas dinámicas. |
| **Subcategoría de holgura (*Access Clearance*)** | Geometría auxiliar asignada a una subcategoría independiente dentro de cajas y conduletas para comprobar espacio de apertura de tapa en *clash detection* y ocultarla en planos constructivos. |

---

## 9. Adaptaciones

### Sesión presencial
- **Taller visual de piezas y orientación:** Si el centro dispone de muestrario físico o láminas a escala real, contrastar en mano una conduleta `LB`, una `LR`, un prensaestopas métrico y una pieza de perfil ranurado tipo *Unistrut* para fijar inmediatamente la orientación espacial del conector y de la tapa antes de pasar al teclado.
- **Revisión conjunta del caso en pizarra:** En la Fase 5, dibujar en pizarra el alzado del corredor del *Intercambiador Norte* con el gálibo $+2{,}45\text{ m}$ y el conducto de humos a $+2{,}85\text{ m}$ para validar gráficamente las soluciones de perfil puente ancho frente a ménsula lateral.

### Sesión online síncrona
- **Demostración en vivo de `Interference Check` y exportación CSV:** Compartir pantalla ejecutando en 3 minutos el `Interference Check` nativo de Revit entre `EL` y `MEC`, mostrando cómo la subcategoría `Access Clearance` detecta exactamente las cajas bloqueadas, y exportando la tabla a CSV para la Actividad 3.
- **Rondas rápidas en salas (*breakout rooms*):** Dividir a los equipos de 3-4 personas entregándoles el paquete `IntercambiadorNorte_DatosCSV` y supervisar mediante visitas breves cómo estructuran la solución del puente *Unistrut* y el prompt anonimizado.

### Sesión asíncrona
- **Cápsulas de cierre de Bloque 3 (4 vídeos de 10–12 min):** (1) Conduletas `LB/LR/LL/T/C` y cajas de paso con *Access Clearance*; (2) Prensaestopas, boquillas y conexiones flexibles a equipos; (3) Trapecios *Unistrut*, varillas a losa y nociones de arriostramiento; (4) *Interference Check*, tablas de cómputos, auditoría CSV con IA y preparación hacia el Bloque 4.
- **Entrega final del Bloque 3 en el campus virtual:** El alumnado sube su archivo acumulado `Apellido_Nombre_T5_ModeloFinalBloque3.rvt` (junto con el reporte HTML/PDF de `Interference Check` limpio y la captura de sus tablas de cómputo) y la Checklist de cierre de la Actividad 3 con prompt anonimizado y verificación humana.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Cierra el ciclo de modelado físico del **Bloque 3** integrando los cálculos de protecciones y trazado del **Bloque 1**, la ubicación de luminarias del **Bloque 2 (DIALux)** y las estructuras de plantilla, equipos, rutas diferenciadas y uniones depuradas en los **Temas 1 al 4 del Bloque 3**.
- **Competencias que desarrolla:** Detallado constructivo *LOD 350* de accesorios eléctricos y soportería en Revit MEP, coordinación multidisciplinar basada en *Hard* y *Soft Clashes*, control técnico de mediciones BIM y uso crítico/anonimizado de IA en presupuestos y auditoría de modelos.
- **Conexión con el tema anterior y posterior en el programa (6 módulos / 50 temas):**
  - *Tema anterior (Bloque 3, Tema 4 — Uniones de tubos):* Recoge los trazados 3D depurados sin desconexiones ni tes ciegas y resuelve finalmente los puntos críticos detectados allí mediante conduletas `LB/LR/LL/T`, cajas de registro para limitar la acumulación angular, acoplamientos, prensaestopas y soportería real.
  - *Tema posterior (Bloque 4, Tema 1 — Plantillas de visualización para diversos tipos de planos):* Entrega un modelo eléctrico tridimensional completo, clasificado y auditado donde todas las categorías (`Electrical Equipment`, `Electrical Fixtures`, `Lighting Fixtures/Devices`, `Conduits`, `Conduit Fittings` y subcategorías de `Clearance`) quedan listas para crear plantillas de vista (`View Templates`), filtros cromáticos normalizados, etiquetas y láminas constructivas en el **Bloque 4 (Documentación)**, y posteriormente preparadas para su sincronización visual en el **Bloque 5 (Twinmotion)**.
- **Evidencia de aprendizaje que deja el alumnado:** Modelo completo del Bloque 3 `Apellido_Nombre_T5_ModeloFinalBloque3.rvt` + reporte de interferencias resuelto y tablas de cómputo de canalizaciones/accesorios + Plan de Fidelización Constructiva del caso *Intercambiador Norte* + Checklist de Cierre con auditoría CSV y prompt anonimizado.

---

## Siguientes pasos para el formador

1. **Verificar `Kit-T5-Accesorios.rfa` y `Kit-T5-ModeloBase.rvt` antes de la clase** comprobando que todas las conduletas (`C/LB/LR/LL/T`), la caja de paso y la familia paramétrica de soporte trapecio disponen de subcategoría `Access Clearance` independiente y conectores pasantes que respetan `Service Type`.
2. **Probar previamente el ejemplo de `Interference Check` contra el vínculo `MEC.rvt`** para confirmar que aparecen los *Soft Clashes* didácticos esperados al rotar una tapa o colocar un trapecio bajo el conducto de clima.
3. **Revisar la tabla `Muestra_Computos_Accesorios.csv`** garantizando la anonimización total de nombres de empresa/proyecto y verificando el cálculo manual exacto de los ratios que servirá como clave de corrección frente a ChatGPT o Claude.
4. **Destacar en el cierre de la sesión la frontera profesional:** recordar al alumnado que un modelo `LOD 350` completo y sin interferencias geométricas todavía requiere planos documentados con rigor (Bloque 4) y firma/validación reglamentaria por técnico titulado competente en su jurisdicción.
5. **Indicar al alumnado respaldar y conservar `Apellido_Nombre_T5_ModeloFinalBloque3.rvt`**, ya que será el modelo de trabajo directo para configurar `View Templates`, filtros, simbología, etiquetas y láminas PDF desde la primera sesión del **Bloque 4: Documentación**.
