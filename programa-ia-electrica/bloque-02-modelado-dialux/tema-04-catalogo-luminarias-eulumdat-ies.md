# Tema 4. Catálogo de luminarias (Eulumdat, IES)

## 1. Ficha del tema

| Campo | Detalle |
| :--- | :--- |
| **Título del tema** | Catálogo de luminarias (Eulumdat, IES) |
| **Bloque y posición dentro del programa** | Bloque 2: Modelado en DIALux — Posición 4 de 5 (Tema 15 de 50 del programa) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Haber completado los Temas 1, 2 y 3 del Bloque 2 (entorno calibrado en DIALux con materiales y obstáculos) y nociones eléctricas básicas del Bloque 1 (potencia activa, factor de potencia, tensión de suministro). |
| **Resultado general de aprendizaje** | Al finalizar la sesión, el alumnado será capaz de inspeccionar y validar archivos fotométricos reales en formato Eulumdat (`.ldt`) e IES (`.ies`), interpretar sus curvas polares y parámetros luminotécnicos (flujo neto de luminaria, eficacia, IRC, TCC y control de UGR), y seleccionar e implantar luminarias en DIALux acordes al uso del espacio, sistema de montaje y grados de protección IP/IK. |

---

## 2. Objetivos de aprendizaje

Al completar esta sesión de 4 horas, el alumnado será capaz de:

1. **Identificar** la estructura textual y los bloques de datos internos que componen un archivo fotométrico normalizado Eulumdat (`.ldt`) y un archivo IESNA LM-63 (`.ies`) *(Nivel de Bloom: Recordar)*.
2. **Interpretar** diagramas polares de intensidad luminosa (planos C0–C180 y C90–C270) para distinguir distribuciones simétricas, extensivas, intensivas, *batwing* y asimétricas según la aplicación espacial *(Nivel de Bloom: Comprender)*.
3. **Diferenciar** flujo nominal de fuente frente a flujo emitido por la luminaria (LOR), eficacia del conjunto ($\text{lm/W}$), temperatura de color (TCC), índice de reproducción cromática (IRC) y parámetros constructivos que condicionan el UGR *(Nivel de Bloom: Analizar)*.
4. **Seleccionar** e insertar luminarias adecuadas en un modelo de DIALux considerando la altura de montaje, sistema de fijación (empotrado, suspendido, carril, proyector o superficie) y grados de protección IP/IK del recinto *(Nivel de Bloom: Aplicar)*.
5. **Auditar** archivos fotométricos propuestos por proveedores o catálogos comerciales (con apoyo controlado de IA para tabular fichas técnicas, bajo verificación humana obligatoria) detectando datos incompletos, discrepancias entre ficha PDF y archivo fotométrico o incompatibilidades mecánicas/ambientales *(Nivel de Bloom: Evaluar)*.

---

## 3. Contenidos esenciales

### 3.1. Qué es un archivo fotométrico real: estructura y diferencias entre Eulumdat (.ldt) e IES (.ies)

#### Explicación breve y clara
Un archivo fotométrico real no es una simple imagen 3D de una carcasa comercial, sino un **fichero de texto plano estandarizado** que contiene la distribución angular de intensidades luminosas medidas en un laboratorio goniofotométrico, además de las dimensiones del cuerpo luminoso, dimensiones del área emisora de luz, potencia eléctrica del sistema y flujo luminoso. En Europa predomina el estándar **EULUMDAT (`.ldt`)**, cuyas intensidades vienen normalizadas en candelas por cada $1\,000$ lúmenes de flujo de lámpara ($\text{cd/klm}$), mientras que en el ámbito norteamericano e internacional es habitual el formato **IESNA LM-63 (`.ies`)**, expresado directamente en candelas absolutas ($\text{cd}$). Inspeccionar el archivo en un editor de texto o visor fotométrico permite detectar archivos manipulados, geometrías emisoras falsas ($0 \times 0\ \text{mm}$) o discrepancias con la ficha técnica PDF del fabricante.

#### Conceptos clave
- **Eulumdat (`.ldt`):** Estándar europeo en formato ASCII con líneas de posición fija (identificador del fabricante, tipo de simetría, dimensiones de luminaria y superficie luminosa, número de planos C y ángulos $\gamma$, potencia $\text{W}$, flujo de lámpara y matriz en $\text{cd/klm}$).
- **IESNA LM-63 (`.ies`):** Formato estándar norteamericano basado en etiquetas de cabecera (`IESNA:LM-63-2002` o `TM-33` reciente) con multiplicador fotométrico, dimensiones en metros o pies (según bandera `units`) y matriz en candelas absolutas.
- **Superficie emisora luminosa (área luminosa vs. carcasa):** Dimensiones reales del difusor u óptica emisora declaradas en el fichero; si aparecen a cero o irreales, el cálculo de deslumbramiento UGR en DIALux queda completamente falseado.
- **Catálogos integrados vs. archivos verificados:** Aunque DIALux conecta con catálogos en línea y plugins de fabricantes, cualquier `.ldt`/`.ies` descargado debe contrastarse frente a la ficha técnica oficial vigente de esa referencia exacta (potencia total de sistema incluyendo *driver*, flujo neto y código de óptica).

#### Definiciones necesarias
- **Goniofotómetro:** Instrumento de laboratorio óptico que mide la intensidad luminosa ($I$, en candelas) emitida por una luminaria en todas las direcciones esféricas caracterizadas por ángulos de plano azimutal $C$ ($0^\circ$ a $360^\circ$) y ángulo de elevación $\gamma$ ($0^\circ$ nadir a $180^\circ$ cenit).
- **Plano $C$ y ángulo $\gamma$:** Sistema de coordenadas esféricas fotométricas donde $\gamma = 0^\circ$ apunta verticalmente hacia el suelo (nadir) y los planos $C0\text{–}C180$ y $C90\text{–}C270$ definen los cortes principales longitudinal y transversal de la luminaria.
- **Archivo fotométrico corrupto o genérico:** Fichero cuya matriz de intensidades no coincide con el código comercial especificado, omite pérdidas del *driver* en la potencia o declara un área emisora puntual irreal.

#### Ejemplo práctico realista
Un instalador descarga de una web genérica un fichero `.ies` supuestamente equivalente a una campana LED de $150\ \text{W}$ para un taller mecánico en Tarragona. Al abrir el `.ies` con el Bloc de notas y compararlo con un `.ldt` oficial equivalente de fabricante certificado, detecta en la línea de cabecera del `.ies` que declara `19500 lm`, `150 W`, pero con superficie luminosa `0.00 x 0.00` (fuente puntual teórica) y simetría rotacional perfecta copiada de un foco genérico, mientras que el archivo oficial `.ldt` del modelo real muestra una superficie emisora circular de diámetro $320\ \text{mm}$, potencia total de sistema $152\ \text{W}$, flujo neto $20\,400\ \text{lm}$ y óptica real de $90^\circ$. Al reemplazar el archivo dudoso por el `.ldt` oficial trazable, DIALux calcula correctamente el UGR y la distribución en la zona de trabajo. *(Nota: verificar siempre el código exacto del producto y normas de ensayo fotométrico aplicables en cada país).*

#### Errores frecuentes
- Colocar luminarias genéricas «de relleno» o editar manualmente el flujo dentro de DIALux sobre un `.ldt` de otra familia óptica distinta en lugar de usar la fotometría real de la luminaria proyectada.
- Confundir las unidades dimensionales dentro de cabeceras `.ies` (pies frente a metros cuando falta revisar la bandera de unidad en archivos antiguos).
- Ignorar la potencia eléctrica total del archivo (que incluye pérdidas del equipo auxiliar/*driver*) frente a la potencia nominal exclusiva del módulo LED, desajustando después la carga en el cuadro eléctrico del Bloque 1.
- Creer que un modelo 3D bonito en `.obj`/`.3ds` o Revit sin archivo fotométrico asociado puede realizar cálculos reales en DIALux.

#### Preguntas que el alumnado debería poder responder
1. ¿En qué unidad básica se expresan las tablas de intensidad luminosa dentro de un `.ldt` (Eulumdat) frente a un `.ies` (LM-63)?
2. ¿Por qué es imprescindible que el archivo `.ldt`/`.ies` declare las dimensiones reales de la superficie luminosa emisora y no valores nulos ($0 \times 0$)?
3. ¿Qué comprobaciones rápidas en texto plano se pueden hacer sobre un `.ldt` o `.ies` antes de importarlo a un proyecto profesional en DIALux?

---

### 3.2. Lectura de curvas fotométricas polares y distribuciones ópticas

#### Explicación breve y clara
La **curva fotométrica polar** es la huella digital visual de una luminaria: representa en coordenadas polares cómo reparte su intensidad luminosa (en $\text{cd/klm}$ o $\text{cd}$) desde el nadir ($\gamma = 0^\circ$, vertical hacia abajo) hasta la horizontal ($\gamma = 90^\circ$) y el hemisferio superior ($\gamma > 90^\circ$). Habitualmente muestra dos trazos: una curva continua para el plano transversal ($C0\text{–}C180$) y una discontinua para el longitudinal ($C90\text{–}C270$). Saber leer esta curva antes de colocar una sola luminaria permite predecir si un espacio tendrá charcos de luz y sombras duras (óptica muy cerrada o intensiva a baja altura), deslumbramiento en oficinas (mucha intensidad entre $65^\circ$ y $85^\circ$) o una cobertura uniforme de pasillos sin desperdiciar flujo hacia paredes altas.

#### Conceptos clave
- **Curvas $C0\text{–}C180$ y $C90\text{–}C270$:** Cortes ortogonales que revelan si la luminaria emite de forma rotacionalmente simétrica (ambas curvas superpuestas, típico de *downlights* circulares) o biaxial/elíptica (típico de luminarias lineales de pasillo o viales).
- **Ángulo de apertura del haz (FWHM / $50\ \% I_{\max}$):** Ángulo total entre las dos direcciones donde la intensidad luminosa cae a la mitad de su valor máximo; permite clasificar ópticas en intensivas/concentradas ($<30^\circ$), medias ($30^\circ\text{–}60^\circ$) o extensivas ($>60^\circ\text{–}110^\circ$).
- **Distribución *Batwing* (alas de murciélago):** Curva con menor intensidad en el nadir ($\gamma = 0^\circ$) y picos simétricos hacia $30^\circ\text{–}45^\circ$, ideal para lograr alta uniformidad separando luminarias y evitando brillos directos bajo ellas.
- **Distribución asimétrica / bañador de pared (*wallwasher*):** Emisión desplazada intencionadamente hacia un cuadrante para iluminar verticalmente pizarras, estanterías, fachadas o cuadros sin iluminar en exceso el suelo adyacente.

#### Definiciones necesarias
- **Intensidad luminosa ($I$):** Flujo luminoso emitido por unidad de ángulo sólido en una dirección determinada; su unidad en el SI es la **candela ($\text{cd}$)**.
- **Diagrama polar fotométrico:** Gráfico circular concéntrico que representa la magnitud de intensidad luminosa según el ángulo $\gamma$ en uno o varios planos $C$, permitiendo evaluar visualmente apertura, simetría y emisión superior/inferior.
- **Ángulo de apantallamiento (*cut-off*):** Ángulo por encima del cual la luminaria oculta o atenúa drásticamente la visión directa de la fuente luminosa para controlar el deslumbramiento (crítico a ángulos $\gamma \ge 65^\circ$ en oficinas con pantallas).

#### Ejemplo práctico realista
Para iluminar un pasillo estrecho de almacenamiento de $2,40\ \text{m}$ de ancho y $7,00\ \text{m}$ de altura entre estanterías, un proyectista compara dos campanas LED de idéntico flujo neto ($18\,000\ \text{lm}$) y potencia ($120\ \text{W}$):
- La **Luminaria A** presenta una curva rotacional extensiva ($110^\circ$, $C0 = C90$): proyecta más del $50\ \%$ del flujo lateralmente contra la parte alta de los palés superiores, desperdiciando luz y dejando solo $115\ \text{lx}$ en el suelo del pasillo.
- La **Luminaria B** tiene una curva asimétrica biaxial específica de pasillo (*aisle optic*): $C0\text{–}C180$ estrecho de $35^\circ$ (concentra hacia abajo dentro del ancho de $2,40\ \text{m}$) y $C90\text{–}C270$ amplio tipo *batwing* de $95^\circ$ (estira la luz a lo largo del pasillo, permitiendo separar las campanas $8,00\ \text{m}$ entre sí). Con la misma potencia eléctrica de $120\ \text{W}$, logra $185\ \text{lx}$ uniformes en el corredor. *(Nota: verificar niveles exigidos de iluminancia horizontal y vertical sobre etiquetas según norma aplicable vigente).*

#### Errores frecuentes
- Seleccionar luminarias únicamente por vatios ($\text{W}$) o lúmenes ($\text{lm}$) sin abrir nunca su curva polar fotométrica.
- Instalar downlights o campanas muy extensivas ($>110^\circ$) en naves de gran altura ($>9\ \text{m}$), perdiendo gran parte de la luz en muros altos oscuros.
- Instalar haces estrechos intensivos ($<40^\circ$) en techos bajos de $2,60\ \text{m}$, generando conos aislados de alta iluminancia y bandas muy oscuras entre luminarias.
- Girar una luminaria lineal con óptica de pasillo $90^\circ$ en planta sin revisar en el diagrama polar qué eje corresponde a $C0\text{–}C180$ y cuál a $C90\text{–}C270$.

#### Preguntas que el alumnado debería poder responder
1. ¿Cómo se distingue en una curva polar si una luminaria tiene óptica circular simétrica o óptica alargada específica para pasillos?
2. ¿Por qué una luminaria de oficina con elevada intensidad en $\gamma = 70^\circ\text{–}85^\circ$ suele provocar problemas graves de deslumbramiento UGR?
3. ¿Qué ventaja geométrica y energética aporta una distribución *batwing* frente a un haz puramente cónico estrecho en techos de altura media?

---

### 3.3. Flujo de luminaria vs. lámpara, eficacia (lm/W), IRC/CRI, TCC (K) y UGR

#### Explicación breve y clara
Al comparar catálogos comerciales de luminarias es frecuente encontrar cifras engañosas: algunos fabricantes destacan en portada los lúmenes brutos del chip LED o lámpara interior (*lumen package* de fuente a $25^\circ\text{C}$) en lugar del **flujo neto real emitido por la luminaria completa** tras atravesar el difusor opal, los reflectores y alcanzar la temperatura térmica de funcionamiento. En ingeniería fotométrica y energética siempre deben verificarse el **flujo útil de salida**, la **eficacia global del sistema ($\text{lm/W}$ reales sobre potencia absorbida total incluyendo *driver*)**, el **IRC/CRI ($R_a$)** y la **temperatura de color correlacionada (TCC en K)** adaptadas a la tarea visual, y los parámetros geométricos/ópticos que determinan el **UGR** (luminancia de luminaria, difusor microprismático o reflector oscuro).

#### Conceptos clave
- **Flujo de fuente vs. flujo de luminaria (LOR):** Relación denominada rendimiento óptico (*Light Output Ratio*, $\text{LOR} = \Phi_{\text{luminaria}} / \Phi_{\text{lámpara}}$), desglosada en flujo inferior ($\text{DLOR}$) y flujo superior ($\text{ULOR}$); un difusor muy denso puede absorber $20\text{–}35\ \%$ del flujo inicial del LED.
- **Eficacia luminosa real ($\text{lm/W}$):** Cociente entre el flujo luminoso neto emitido por la luminaria y la potencia eléctrica total consumida de red (incluyendo pérdidas del equipo auxiliar/fuente de alimentación).
- **IRC / CRI ($R_a$ y $R_9$) y TCC ($\text{K}$):** Índice de reproducción cromática (fidelidad de colores, habitual $R_a \ge 80$ en oficinas/industria y $R_a \ge 90$ con buen $R_9$ en comercio textil, clínica o artes gráficas) y tonalidad de luz blanca (cálida $\approx 2\,700\text{–}3\,000\ \text{K}$, neutra $\approx 4\,000\ \text{K}$, fría $\approx 5\,000\text{–}6\,500\ \text{K}$).
- **Factores de luminaria en el UGR:** No existe un «UGR fijo de fábrica» universal independiente de la sala, pero la óptica (microprisma, rejilla lamas aluminio, borde apantallado) y la luminancia superficial determinan si puede mantenerse por debajo de $UGR_L \le 19$ en oficinas o $\le 16$ en dibujo técnico.

#### Definiciones necesarias
- **LOR (*Light Output Ratio* / Rendimiento luminoso):** Porcentaje del flujo luminoso total generado por las fuentes/lámparas internas que logra salir al exterior de la luminaria montada con su óptica y difusor.
- **Eficacia luminosa de luminaria ($\eta_v$):** Relación en lúmenes por vatio ($\text{lm/W}$) entre el flujo emitido al entorno por la luminaria completa y la potencia eléctrica activa absorbida de la red.
- **Temperatura de Color Correlacionada (TCC):** Magnitud medida en Kelvin ($\text{K}$) que describe la apariencia cromática de la luz blanca emitida por una fuente respecto a un radiador teórico de cuerpo negro.

#### Ejemplo práctico realista
Un proyectista evalúa dos paneles LED empotrables $600\ \text{mm} \times 600\ \text{mm}$ para un laboratorio de control de color y oficinas en Sevilla:
- **Modelo X (catálogo básico):** Anuncia «chip LED $140\ \text{lm/W}$, $4\,500\ \text{lm}$ de fuente», pero en su archivo `.ldt` real el difusor opal presenta un $\text{LOR} = 76\ \%$ ($3\,420\ \text{lm}$ netos de salida) y un consumo de red de $38\ \text{W}$ (eficacia real del sistema $= 3\,420 / 38 = 90\ \text{lm/W}$), $R_a = 80$, $4\,000\ \text{K}$ y alta luminancia lateral (óptica opal sin control UGR).
- **Modelo Y (luminaria técnica microprismática):** Declara en su `.ldt` $3\,600\ \text{lm}$ netos de luminaria, potencia total de sistema $30\ \text{W}$ (eficacia real $= 120\ \text{lm/W}$), $R_a \ge 90$, $4\,000\ \text{K}$ y óptica microprismática de baja luminancia lateral. Con un $21\ \%$ menos de potencia eléctrica instalada por punto de luz, aporta más flujo útil al plano de trabajo y permite controlar el UGR por debajo de 19. *(Nota: verificar valores límite normativos de eficacia, $R_a$ y UGR según reglamento vigente del país y actividad).*

#### Errores frecuentes
- Dividir los lúmenes brutos del chip LED entre la potencia nominal sin contar pérdidas ópticas ni pérdidas del *driver*, sobrestimando la eficacia real.
- Seleccionar luminarias por «UGR < 19 garantizado en caja» sin verificar el UGR calculado en DIALux para las dimensiones, reflectancias y orientaciones reales de la sala.
- Mezclar distintas temperaturas de color ($3\,000\ \text{K}$ y $5\,000\ \text{K}$) en un mismo espacio diáfano sin intención arquitectónica justificada.
- Usar asistentes de IA para extraer tablas comparativas de fichas técnicas PDF sin verificar manualmente cada cifra ($\text{lm}$ de luminaria frente a $\text{lm}$ de chip, $\text{W}$ totales y factor de potencia).

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué dos luminarias con un mismo módulo LED de $4\,000\ \text{lm}$ pueden emitir flujos netos diferentes al montarse en el techo?
2. ¿Cómo se calcula la eficacia real de una luminaria en $\text{lm/W}$ a partir de los datos de un archivo `.ldt` o `.ies`?
3. ¿Qué relación guardan la temperatura de color ($\text{K}$), el IRC ($R_a$) y el confort visual según el tipo de actividad de un local?

---

### 3.4. Criterios de selección según espacio, montaje e índice de protección IP/IK

#### Explicación breve y clara
Una luminaria fotométricamente excelente puede resultar completamente inviable en obra si su sistema de fijación es incompatible con el techo, si sobresale dentro del plenum ocupado por conductos o si carece de estanqueidad y resistencia mecánica frente al ambiente real del local. En la selección técnica se cruzan siempre cuatro ejes: **(1) tipo de espacio y altura**, **(2) sistema de montaje** (empotrado en falso techo modular o cartón-yeso, superficie, suspendido por cable/varilla, carril electrificado electrónicamente compatible o proyector orientable), **(3) dimensiones físicas y profundidad de empotramiento** (que condicionarán el choque o paso libre en Revit MEP en el Bloque 3) y **(4) grados de protección IP (IEC 60529) e IK (IEC 62262)** frente a polvo, humedad o impactos.

#### Conceptos clave
- **Tipologías de montaje y su impacto eléctrico/BIM:** Empotrable modular ($600\times600\ \text{mm}$ / $1\,200\times300\ \text{mm}$, requiere comprobar altura de plenum y accesibilidad del conector), superficie (techo hormigón visto sin falso techo), suspendida (descolgada para acercar el plano luminoso al trabajo en naves altas o añadir componente indirecta), carril trifásico/monofásico (flexibilidad comercial con límites mecánicos y de carga por fase) y proyector.
- **Grado de protección IP (dos dígitos, IEC 60529):** Primer dígito ($0\text{–}6$) protección frente a sólidos/polvo; segundo dígito ($0\text{–}8/9$) protección frente a líquidos/agua (p. ej., IP20 oficinas secas; IP44 aseos/zonas húmedas; IP65/IP66 aparcamientos, cocinas, talleres polvorientos o intemperie).
- **Grado de resistencia al impacto IK (IEC 62262):** Escala de IK00 a IK10 expresada en julios de energía de choque (p. ej., IK08/IK10 obligatorio o recomendable en aparcamientos públicos, polideportivos, zonas accesibles a baja altura o industria pesada).
- **Accesibilidad de mantenimiento y datos eléctricos de entrada:** Espacio libre para sustitución de *driver*, compatibilidad con regulación DALI/0-10V y registro de potencia total + factor de potencia ($\cos\varphi$) para el cuadro de cargas del Bloque 1.

#### Definiciones necesarias
- **Código IP (*Ingress Protection*, IEC 60529):** Sistema internacional de clasificación del grado de protección que proporciona la envolvente de un material eléctrico frente al acceso a partes peligrosas, penetración de cuerpos sólidos extraños y entrada de agua (a verificar edición vigente aplicable).
- **Código IK (IEC 62262):** Clasificación normalizada del nivel de protección proporcionado por las envolventes de equipos eléctricos frente a impactos mecánicos externos nocivos, escalado de IK00 a IK10 ($20\ \text{J}$).
- **Profundidad de empotramiento:** Cota vertical mínima necesaria dentro del falso techo (incluida holgura térmica/conexión) para alojar la luminaria empotrada y su equipo auxiliar sin colisionar con forjados o conductos.

#### Ejemplo práctico realista
En el diseño de un aparcamiento subterráneo cubierto con techo de losa vista de hormigón ($2,55\ \text{m}$ de altura libre) y riesgo de golpes por antenas/furgonetas y limpieza periódica con agua a presión baja/polvo de frenado, el proyectista descarta paneles empotrables IP20/IK02 (no hay falso techo ni estanqueidad). Selecciona luminarias lineales estancas de superficie en policarbonato/aluminio con **IP65 / IK08**, montaje directo con grapas antivandálicas a losa o bajo bandeja, óptica extensiva con buen control lateral en baja altura, potencia de $32\ \text{W}$ y $4\,300\ \text{lm}$ netos. Deja además anotado en su tabla que en la fase de Revit MEP (Bloque 3) estas luminarias se coordinarán bajo la cota de vigas para evitar conflictos de gálibo de vehículos. *(Nota: verificar requisitos mínimos IP/IK exigidos por el reglamento eléctrico nacional aplicable para garajes o locales húmedos/polvorientos, p. ej., ITC-BT correspondientes del REBT en España u otra norma local vigente).*

#### Errores frecuentes
- Especificar luminarias IP20 estándar de oficina en cocinas industriales, vestuarios con duchas, cuartos de calderas o zonas de lavado.
- Proyectar empotrables de $110\ \text{mm}$ de profundidad en falsos techos donde el plenum neto bajo conductos apenas mide $70\ \text{mm}$.
- Instalar luminarias suspendidas por cable en naves atravesadas por puentes grúa sin respetar el gálibo de seguridad del carro y gancho.
- Seleccionar proyectores orientables en DIALux apuntando en ángulos imposibles que en obra deslumbrarían directamente al paso peatonal o chocarían con el carril.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué indica exactamente la primera y segunda cifra de una luminaria certificada como **IP66**, y en qué diferencia mecánica radica elegir **IK08** frente a **IK02**?
2. ¿Por qué la profundidad de empotramiento de una luminaria seleccionada en DIALux condiciona directamente el modelado del falso techo y de instalaciones en Revit MEP?
3. ¿En qué casos técnicos conviene elegir luminarias suspendidas con componente indirecta superior frente a empotrables puramente directos?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** combina análisis de ficheros fotométricos en formato texto, lectura comparativa de curvas polares, implantación de luminarias reales en el archivo `.evo` del Tema 3 y auditoría técnica de un caso de selección real.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
| :--- | :--- | :--- | :--- |
| **1. Apertura y activación** | 00:00 – 00:25 (25 min) | Realiza la evaluación diagnóstica y lanza la **Actividad 1 (Activación)**: proyecta 4 fichas comerciales con curvas polares y datos ocultos (chip vs. luminaria, IP20 vs. IP65) para someterlas a criba rápida. | En parejas, evalúa qué luminaria descartaría para un taller húmedo y para una oficina con pantallas, identificando trampas habituales de catálogo. |
| **2. Microexposición: Archivos .ldt/.ies y curvas polares (3.1 y 3.2)** | 00:25 – 01:00 (35 min) | Abre un archivo `.ldt` y un `.ies` en editor de texto plano en paralelo a DIALux, explicando coordenadas C-$\gamma$, superficie emisora, flujo neto vs. chip y lectura rápida de curvas polares. | Inspecciona dos ficheros `.ldt`/`.ies` suministrados, localiza flujo, potencia, área luminosa y dibuja/clasifica el tipo de haz de cada curva polar. |
| **3. Microexposición: Parámetros ópticos, montaje e IP/IK (3.3 y 3.4)** | 01:00 – 01:25 (25 min) | Explica LOR, eficacia real ($\text{lm/W}$), IRC, TCC, factores de UGR, tipos de montaje (empotrado, suspendido, carril, proyector) y tablas IP/IK, más pautas seguras de tabulación con IA. | Completa en su ficha de trabajo la tabla comparativa de montaje y grados IP/IK según las condiciones ambientales de 4 espacios tipo. |
| **4. Práctica guiada: Actividad 2 (Aplicación técnica)** | 01:25 – 02:15 (50 min) | Lanza la **Actividad 2** sobre el archivo `B2_T03_Materiales.evo` del Tema 3, enseña cómo importar `.ldt`/`.ies`, orientar luminarias lineales y verificar altura de montaje y ángulo de proyección. | Importa 3 tipos de luminarias reales (panel microprismático empotrado, lineal suspendida y proyector de carril), verifica ejes $C0/C90$ y realiza una primera inserción ordenada en su modelo. |
| *Descanso técnico* | 02:15 – 02:30 (15 min) | Pausa activa y comprobación de carga correcta de fotometrías de catálogo en todos los equipos. | Descanso y guardado incremental `_T04.evo`. |
| **5. Resolución del caso práctico** | 02:30 – 03:10 (40 min) | Presenta el caso **Centro Técnico Levante (Alicante)** con 4 archivos fotométricos reales/anómalos y los requerimientos de aula, taller con puente grúa y laboratorio electrónico. | En equipos de 3, audita los 4 archivos `.ldt`/`.ies` (abriendo texto plano y cargándolos en DIALux), detecta incompatibilidades y asigna la luminaria correcta a cada zona. |
| **6. Puesta en común y debate técnico** | 03:10 – 03:25 (15 min) | Modera la exposición de criterios de selección y descarte, verificando coherencia entre fotometría, montaje físico en plenum y protección IP/IK. | Defiende su matriz de selección ante el grupo y contrasta la potencia total eléctrica resultante frente a las previsiones iniciales. |
| **7. Transferencia a proyecto real (Actividad 3)** | 03:25 – 03:45 (20 min) | Guía la **Actividad 3**, aportando la *Ficha de Selección y Auditoría Fotométrica* y supervisando cómo usar IA (opcional) solo con texto técnico anónimo para comparar especificaciones. | Selecciona y audita la familia de luminarias reales (`.ldt`/`.ies`) de su proyecto integrador, registrando potencia real, montaje, IP/IK y verificación independiente. |
| **8. Evaluación sumativa y cierre** | 03:45 – 04:00 (15 min) | Aplica el cuestionario de evaluación sumativa, recoge evidencias, facilita la autoevaluación y conecta con el **Tema 5 (Generación de cálculos lumínicos)**. | Completa el test final y autoevaluación; deja guardada su implantación de luminarias reales en el archivo `.evo` para ejecutar el cálculo completo en el Tema 5. |

*Suma verificada: 25 + 35 + 25 + 50 + 15 + 40 + 15 + 20 + 15 = **240 minutos (4 horas)**.*

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «Cazando trampas de catálogo comercial»
- **Nombre:** Cazando trampas de catálogo: ficha comercial frente a realidad fotométrica.
- **Objetivo:** Desarrollar criterio crítico rápido para no dejarse guiar por eslóganes comerciales («150 lm/W de chip», «UGR<19 garantizado») sin inspeccionar el archivo fotométrico real ni el ambiente de instalación.
- **Instrucciones para el alumnado:**
  1. Examinad en parejas durante 6 minutos las 4 fichas resumidas proyectadas:
     - *Ficha 1:* Campana de nave anunciando $22\,000\ \text{lm}$ de chip LED a $150\ \text{W}$, pero con archivo `.ies` de $16\,200\ \text{lm}$ netos y grado IP20 para una zona de lavado industrial.
     - *Ficha 2:* Panel $600\times600\ \text{mm}$ con difusor opal uniforme que afirma «UGR < 19 universal» sin mencionar dimensiones del local ni ángulo de observación.
     - *Ficha 3:* Proyector asimétrico de $20^\circ$ propuesto para un techo de oficina de $2,65\ \text{m}$.
     - *Ficha 4:* Luminaria lineal suspendida con potencia total de $42\ \text{W}$, $5\,100\ \text{lm}$ netos, $R_a \ge 80$, $4\,000\ \text{K}$ y área emisora declarada en `.ldt`.
  2. Señalad el fallo principal de las tres fichas problemáticas y qué comprobación técnica adicional exigiríais a la Ficha 4 antes de incorporarla a proyecto.
- **Materiales necesarios:** Diapositiva comparativa de las 4 fichas y tabla de anotación rápida.
- **Tiempo estimado:** 12 minutos (dentro de la Fase 1).
- **Rol del formador:** Guiar el debate poniendo énfasis en la diferencia entre flujo de chip y flujo de luminaria, y en la exigencia IP/IK y de altura de montaje.
- **Producto o entregable esperado:** Checklist grupal de «5 señales de alerta al descargar o recibir un catálogo de luminarias».
- **Criterios de éxito:** El grupo identifica al menos 3 discrepancias críticas (LOR oculto, IP insuficiente, apertura inadecuada para altura baja, falsa garantía universal de UGR).

### Actividad 2 (Aplicación técnica): «Inspección de .ldt/.ies e implantación en el modelo calibrado»
- **Nombre:** Inspección textual de fotometrías e implantación de luminarias en DIALux.
- **Objetivo:** Verificar internamente archivos `.ldt` e `.ies`, importarlos en el archivo `.evo` del Tema 3, comprobar la orientación de sus ejes $C0/C90$ y posicionarlos según el tipo de montaje real.
- **Instrucciones para el alumnado:**
  1. Abrid en un editor de texto plano (Bloc de notas) los 2 archivos fotométricos facilitados (`Panel_Microprisma_30W.ldt` y `Lineal_Pasillo_38W.ies`) e identificad: flujo nominal/neto, potencia total del sistema ($\text{W}$), dimensiones del área luminosa ($\text{mm}$) y simetría declarada.
  2. Abrid vuestro modelo calibrado `B2_T03_Materiales_NombreApellido.evo` y guardadlo como `B2_T04_Luminarias_NombreApellido.evo`.
  3. Importad las tres luminarias reales suministradas e implantadlas respetando cotas de montaje y orientación de haz:
     - En `P00_E03_DespachoTecnico`: luminarias empotradas $600\times600\ \text{mm}$ integradas exactamente a cota inferior del falso techo ($2,70\ \text{m}$), comprobando que su profundidad cabe dentro del plenum ($0,90\ \text{m}$).
     - En `P00_E01_Recepcion`: carril electrificado suspendido a $2,50\ \text{m}$ con 3 proyectores orientables dirigidos hacia el muro corporativo/mostrador (sin cruzar vigas ni apuntar a ojos de entrada).
     - En `P00_E02_SalaReuniones`: luminaria lineal suspendida a $2,35\ \text{m}$ sobre la mesa, verificando en planta 2D/3D la orientación correcta de sus curvas $C0\text{–}C180$ respecto al eje largo de la mesa.
  4. Realizad una visualización 3D preliminar (con conos de luz activados) para validar orientación, ausencia de colisiones con vigas o armarios y coherencia física del montaje.
- **Materiales necesarios:** Archivo `.evo` del Tema 3, carpeta con los 3 archivos `.ldt`/`.ies` verificados y guion rápido de inspección de texto plano.
- **Tiempo estimado:** 50 minutos (Fase 4).
- **Rol del formador:** Mostrar primero cómo leer las líneas clave de `.ldt` y `.ies` y cómo activar la visualización de curvas fotométricas 3D sobre la luminaria en DIALux; revisar individualmente la orientación $C0/C90$ y cotas Z de montaje.
- **Producto o entregable esperado:** Archivo `B2_T04_Luminarias_NombreApellido.evo` con las 3 tipologías de luminarias correctamente implantadas + ficha con los datos extraídos del `.ldt` y `.ies`.
- **Criterios de éxito:** Lectura exacta de flujo neto, potencia y superficie emisora en texto plano; cotas de empotramiento/suspensión coherentes con el falso techo y plenum; orientación correcta de proyectores y ejes fotométricos sin colisión con obstáculos.

### Actividad 3 (Transferencia a proyecto real): «Auditoría de catálogo y apoyo controlado con IA para el proyecto integrador»
- **Nombre:** Selección técnica de luminarias e inspección asistida para el proyecto integrador.
- **Objetivo:** Seleccionar la cartera de luminarias reales (`.ldt`/`.ies`) de cada local del proyecto integrador justificando fotometría, montaje y grados IP/IK, utilizando opcionalmente IA de forma segura únicamente para estructurar comparativas de texto ya extraído.
- **Instrucciones para el alumnado:**
  1. Seleccionad al menos 3 familias de luminarias reales con archivo `.ldt`/`.ies` descargado para las estancias principales de vuestro proyecto integrador.
  2. Completad la *Ficha de Selección y Auditoría de Luminarias* (sección 8.3) indicando: referencia codificada, formato (`.ldt`/`.ies`), flujo de luminaria ($\text{lm}$), potencia total ($\text{W}$), eficacia real ($\text{lm/W}$), TCC ($\text{K}$), IRC ($R_a$), tipo de distribución polar, sistema de montaje, profundidad/gálibo e IP/IK exigido.
  3. **Uso opcional controlado de IA:** Copiad **solo las especificaciones técnicas textuales** de dos fichas de producto (sin ningún plano ni dato del cliente) en ChatGPT o Claude y pedidle generar una tabla comparativa calculando $\text{lm/W}$ reales y comprobando compatibilidad con montaje empotrado/ambiente. Después, **verificad manualmente cada división $\text{lm/W}$ y cada cifra** de la respuesta de la IA antes de incorporarla a vuestra ficha.
- **Materiales necesarios:** Plantilla de sección 8.3, archivos `.ldt`/`.ies` del proyecto integrador y calculadora/hoja de cálculo para verificación independiente.
- **Tiempo estimado:** 20 minutos (Fase 7).
- **Rol del formador:** Revisar las fichas completas en sala y exigir la evidencia de comprobación manual si el alumnado empleó un asistente IA para tabular datos.
- **Producto o entregable esperado:** *Ficha de Selección y Auditoría de Luminarias* del proyecto integrador verificada e implantación preliminar de archivos `.ldt`/`.ies`.
- **Criterios de éxito:** Coherencia entre distribución polar, altura de montaje, ambiente IP/IK y uso del recinto; cálculos de eficacia verificados manualmente; cero datos sensibles expuestos en herramientas externas.

---

## 6. Caso práctico

### Selección y auditoría lumínica del Centro Técnico Levante (Alicante)

#### Contexto empresarial
El **Centro Técnico Levante** (Alicante) va a renovar integralmente el alumbrado de una de sus alas formativas de $580\ \text{m}^2$, compuesta por: (A) un aula técnica teórica con pantallas de ordenador ($140\ \text{m}^2$, falso techo modular $600\times600\ \text{mm}$ a $2,80\ \text{m}$ de altura, plenum de $0,45\ \text{m}$); (B) un laboratorio de ensayos electrónicos y soldadura de precisión ($90\ \text{m}^2$, techo técnico a $2,75\ \text{m}$); y (C) un taller de mecanizado con puente grúa y presencia de neblina de taladrina y polvo metálico ($350\ \text{m}^2$, techo industrial a $6,80\ \text{m}$, gancho de grúa circulando a cota máxima $+5,10\ \text{m}$).

#### Situación o problema
Tres distribuidores locales han enviado cuatro archivos fotométricos (`.ldt` y `.ies`) junto con una oferta económica cerrada. Antes de cargarlos en DIALux y lanzar el cálculo definitivo, la dirección técnica sospecha que algunos archivos enviados no corresponden a luminarias aptas o contienen discrepancias graves frente a lo ofertado comercialmente.

#### Datos disponibles
Extracto auditado de los 4 archivos fotométricos y fichas enviadas:
- **Archivo 1 (`Panel_Eco_Opal.ies` — propuesto para Aula teórica con pantallas):**
  - Dimensiones físicas $595\times595\ \text{mm}$, profundidad $45\ \text{mm}$, IP20/IK02.
  - Cabecera `.ies` declara: flujo $4\,000\ \text{lm}$, potencia $40\ \text{W}$, pero superficie emisora declarada `0.00 x 0.00 m` y curva polar cosinusoidal muy abierta ($\gamma = 75^\circ$ con intensidad elevada lateralmente).
- **Archivo 2 (`Panel_Micro_Pro.ldt` — alternativa para Aula teórica):**
  - Dimensiones físicas $595\times595\ \text{mm}$, profundidad $55\ \text{mm}$, área emisora real $560\times560\ \text{mm}$, IP20/IK03 (frontal IP40).
  - Flujo de fuente $4\,200\ \text{lm}$, LOR $= 88\ \%$ ($3\,696\ \text{lm}$ netos de luminaria), potencia total de sistema $30\ \text{W}$, $4\,000\ \text{K}$, $R_a = 85$, óptica microprismática con fuerte corte a partir de $\gamma = 65^\circ$.
- **Archivo 3 (`Lineal_Lab_HiCRI.ldt` — propuesto para Laboratorio electrónico):**
  - Lineal suspendida/superficie $1\,500\ \text{mm}$, área luminosa $1\,460\times70\ \text{mm}$, IP40/IK05.
  - Flujo neto luminaria $5\,200\ \text{lm}$, potencia total de sistema $44\ \text{W}$, $4\,000\ \text{K}$, $R_a = 92$ ($R_9 > 55$), óptica directa-indirecta ($80\ \%$ abajo / $20\ \%$ arriba), curva *batwing* suave en plano transversal.
- **Archivo 4 (`Campana_Ind_150.ies` — propuesta para Taller de mecanizado con puente grúa):**
  - Campana industrial suspendida mediante cadena de $1,80\ \text{m}$ desde cubierta ($6,80 - 1,80 = 5,00\ \text{m}$ de cota inferior de luminaria).
  - Fichero `.ies` declara $21\,000\ \text{lm}$, $150\ \text{W}$, $5\,000\ \text{K}$, $R_a = 72$, grado **IP40 / IK04**, haz concentrado de $35^\circ$.

*(Nota normativa: los niveles mínimos de $E_m$, $U_0$, $UGR_L$, $R_a$ y requisitos de seguridad eléctrica/ambiental IP-IK exigibles en aulas, laboratorios electrónicos y talleres industriales deberán verificarse siempre contra la normativa vigente aplicable en España, p. ej., referencias orientativas UNE-EN 12464-1 y reglamentos electrotécnicos/seguridad laboral vigentes, o jurisdicción del proyecto).*

#### Preguntas de análisis
1. ¿Qué anomalía crítica invalida el **Archivo 1** tanto para evaluar el deslumbramiento UGR en el aula de ordenadores como para confiar en la integridad del fichero `.ies`?
2. Calcula la **eficacia luminosa real ($\text{lm/W}$)** de cada una de las 4 opciones comparando los flujos netos frente a la potencia total de sistema. ¿Por qué el Archivo 2 logra mejor eficacia real que el Archivo 1 aunque declare un flujo bruto menor?
3. ¿Qué tres problemas graves (mecánico/gálibo, ambiental IP/IK y óptico de haz/IRC) impedirían instalar tal cual el **Archivo 4** en el taller de mecanizado con puente grúa?
4. ¿Por qué el **Archivo 3** ($R_a = 92$, $R_9 > 55$, directa-indirecta) es especialmente adecuado para el laboratorio de ensayos electrónicos frente a una luminaria básica $R_a = 72$ o puramente directa?

#### Tarea a realizar
En equipos de 3 personas (40 minutos):
1. Inspeccionad en texto plano y dentro de DIALux los archivos fotométricos de trabajo suministrados para el caso (`Caso_Levante_Archivos/`).
2. Elaborad la **Matriz de Dictamen Técnico** determinando para cada una de las 3 estancias (Aula, Laboratorio, Taller): qué archivo se acepta, cuál se rechaza y qué especificación de corrección exacta debe pedirse al proveedor para el Taller de mecanizado (montaje respecto al puente grúa a $5,10\ \text{m}$, IP/IK mínimo, apertura angular recomendada para techo a $6,80\ \text{m}$ y $R_a$ aconsejable).
3. Implantad las luminarias validadas para Aula y Laboratorio en el modelo de práctica del caso (`Levante_Base.evo`), comprobando cotas de falso techo, plenum y orientación correcta.

#### Posibles soluciones o criterios de análisis
- **Aula teórica:** Se **rechaza Archivo 1** por área emisora nula (`0.00 x 0.00 m` inválida para UGR), menor eficacia ($4\,000/40 = 100\ \text{lm/W}$ dudoso frente a datos incompletos) y óptica opal sin control de corte a $>65^\circ$. Se **acepta Archivo 2 (`Panel_Micro_Pro.ldt`)**: eficacia real $= 3\,696 / 30 = 123,2\ \text{lm/W}$, área emisora real verificada ($560\times560\ \text{mm}$), profundidad $55\ \text{mm}$ compatible con plenum de $450\ \text{mm}$, y óptica microprismática adecuada para pantallas.
- **Laboratorio electrónico:** Se **acepta Archivo 3 (`Lineal_Lab_HiCRI.ldt`)**: eficacia $= 5\,200 / 44 = 118,2\ \text{lm/W}$, excelente reproducción cromática ($R_a = 92$, $R_9 > 55$) vital para distinguir códigos de colores de resistencias, cables finos y pistas electrónicas, y componente indirecta ($20\ \%$) que suaviza contrastes en el techo técnico (siempre montada a cota que no genere sombras ni choque).
- **Taller de mecanizado:** Se **rechaza Archivo 4** por tres motivos acumulativos:
  1. *Colisión física:* suspenderla a $5,00\ \text{m}$ invade el gálibo del puente grúa ($5,10\ \text{m}$). Debe ir adosada cerca de cubierta ($6,40\text{–}6,70\ \text{m}$) o en cerchas fuera de la trayectoria de carro/gancho.
  2. *Protección ambiental insuficiente:* IP40/IK04 no resiste neblina de taladrina, polvo metálico ni posibles impactos en taller; se requiere mínimo **IP65 / IK08** (a verificar según clasificación exacta de emplazamiento).
  3. *Óptica e IRC inadecuados:* un haz de $35^\circ$ desde $6,70\ \text{m}$ puede producir falta de uniformidad o sombras muy duras bajo máquinas (conviene haz medio de $60^\circ\text{–}90^\circ$ según separación entre puntos), y $R_a = 72$ resulta bajo para lectura segura de escalas de micrómetros/mandos (recomendable $R_a \ge 80$, a verificar con normativa vigente).

#### Preguntas de reflexión final
1. ¿Qué consecuencias habría tenido en obra adjudicar la compra del lote de luminarias basándose únicamente en la tabla de precios del distribuidor sin haber abierto los archivos `.ldt`/`.ies`?
2. ¿Cómo se traslada la potencia total real de luminaria verificada hoy ($30\ \text{W}$ vs. $44\ \text{W}$ por punto de luz) al cálculo de circuitos del Bloque 1 y al modelado de familias en Revit MEP (Bloque 3)?

---

## 7. Evaluación

### 7.1. Evaluación diagnóstica
Cuestionario breve inicial de 5 preguntas (5 min):
1. ¿Qué extensión tiene el formato fotométrico estándar europeo frente al formato estándar norteamericano LM-63?
2. ¿Es siempre igual el flujo luminoso del chip LED que el flujo luminoso emitido por la luminaria completa?
3. Si una curva polar muestra un círculo perfecto en $C0\text{–}C180$ y $C90\text{–}C270$, ¿qué tipo de distribución geométrica tiene la luminaria?
4. ¿Qué significan los dígitos IP e IK en la ficha de una luminaria estanca industrial?
5. ¿Puede una luminaria empotrada de $120\ \text{mm}$ de alto instalarse en un falso techo con solo $80\ \text{mm}$ de espacio libre bajo un conducto?

### 7.2. Evaluación formativa
Seguimiento práctico mediante lista de cotejo durante las Actividades 1 y 2 y el Caso práctico:
- Abre e inspecciona archivos `.ldt`/`.ies` en texto plano sin limitarse a arrastrar iconos del catálogo.
- Calcula correctamente la eficacia real ($\text{lm/W}$ netos sobre potencia total de sistema).
- Verifica orientación de ejes $C0\text{–}C180$ y $C90\text{–}C270$ en planta al colocar luminarias lineales o asimétricas.
- Selecciona montaje y grados IP/IK coherentes con ambiente, techo y gálibos del local.

### 7.3. Evaluación sumativa
Evaluación final ponderada de la sesión:
1. **Archivo `.evo` de la Actividad 2 + Dictamen y modelo del Caso *Centro Técnico Levante* (65 %):** Evaluado según la rúbrica de la sección 7.4.
2. **Ficha de Selección y Auditoría de Luminarias del proyecto propio (Actividad 3) + cuestionario de cierre de 5 ítems (35 %):** Comprueba lectura de `.ldt`/`.ies`, cálculo de $\text{lm/W}$, criterios IP/IK y verificación humana sobre apoyo IA.

### 7.4. Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
| :--- | :--- | :--- | :--- | :--- |
| **Inspección de archivos .ldt / .ies** | Usa luminarias genéricas sin abrir ni validar los ficheros fotométricos reales; ignora dimensiones de área luminosa. | Importa archivos `.ldt`/`.ies`, pero no revisa su cabecera en texto plano ni detecta áreas emisoras nulas o potencias incompletas. | Inspecciona ficheros `.ldt`/`.ies` verificando formato, flujo neto, potencia total del sistema y superficie emisora real. | Audita con precisión archivos fotométricos detectando incoherencias frente a fichas comerciales y validando unidades antes de modelar. |
| **Lectura de curvas polares y parámetros ópticos** | No interpreta curvas polares; confunde flujo de chip con flujo de luminaria o elige TCC/IRC al azar. | Identifica parámetros básicos (TCC, IRC, potencia), pero interpreta de forma imprecisa aperturas polares o ignora el impacto del LOR y luminancia en el UGR. | Interpreta curvas $C0/C90$, calcula eficacia real ($\text{lm/W}$), distingue LOR y selecciona TCC e IRC coherentes con la tarea visual. | Optimiza la elección óptica (simétrica, *batwing*, pasillo o asimétrica) anticipando su efecto sobre uniformidad, potencia instalada y control de UGR. |
| **Criterios de montaje y grados IP/IK** | Coloca empotrables sin hueco o luminarias IP20 en zonas húmedas/industriales; ignora gálibos físicos. | Revisa el montaje general en DIALux, pero descuida profundidad de plenum o justifica de forma vaga los grados IP/IK requeridos. | Selecciona montaje compatible con falso techo/estructura y exige grados IP/IK coherentes con el ambiente del local. | Coordina físicamente alturas, gálibos y profundidades anticipando interferencias en Revit MEP y cita normativa de protección ambiental a verificar. |
| **Rigor técnico y verificación independiente** | Acepta resúmenes de catálogos o tablas generadas por IA sin comprobar cifras ni citar verificación normativa. | Realiza alguna comprobación manual, pero omite revisar unidades o mezcla criterios estéticos de luminaria con validez técnica. | Verifica manualmente cálculos de eficacia y especificaciones de fichas antes de aceptarlas en proyecto y aclara normas aplicables a verificar. | Demuestra criterio profesional íntegro: documenta trazabilidad completa de catálogo, exige verificación independiente de cualquier apoyo IA y prepara datos fiables para el cálculo (Tema 5). |

### 7.5. Actividad de autoevaluación
Cuestionario reflexivo individual de cierre (5 min):
1. *¿Qué dato oculto dentro de un archivo `.ldt` o `.ies` te resulta ahora imprescindible comprobar antes de dar por buena la oferta de un fabricante?*
2. *Describe un escenario laboral concreto donde una mala lectura de los planos $C0\text{–}C180$ y $C90\text{–}C270$ o del grado IP/IK generaría un sobrecoste directo en obra.*
3. *Valora del 1 al 5 tu destreza actual para seleccionar luminarias reales en DIALux equilibrando eficacia ($\text{lm/W}$), confort visual ($UGR$, $R_a$) y viabilidad mecánica de instalación.*

---

## 8. Materiales y recursos

### 8.1. Guion estructurado de diapositivas

| Diapositiva | Título | Contenido visual y mensajes clave |
| :--- | :--- | :--- |
| **Slide 1** | **Portada: Catálogo de luminarias reales (.ldt / .ies)** | Posición en Bloque 2 (Tema 4/5), enlace con el entorno calibrado del Tema 3 y objetivo: de carcasas vacías a datos goniofotométricos reales. |
| **Slide 2** | **Actividad 1: Cazando trampas comerciales** | 4 fichas comerciales reales adaptadas con discordancias entre flujo de chip, área emisora, UGR prometido e IP insuficiente. |
| **Slide 3** | **Anatomía de un archivo Eulumdat (.ldt) frente a IES (.ies)** | Vista comentada línea a línea en texto plano de `.ldt` ($\text{cd/klm}$, área emisora, potencia) y `.ies` LM-63 ($\text{cd}$, multiplicador, unidades). |
| **Slide 4** | **Lectura de curvas fotométricas polares ($C0\text{–}C180$ / $C90\text{–}C270$)** | Comparativa gráfica de 4 curvas tipo: simétrica extensiva, haz estrecho intensivo, *batwing* de oficina y asimétrica de pasillo/bañador de pared. |
| **Slide 5** | **Flujo neto (LOR), eficacia real (lm/W), IRC, TCC y UGR** | Infografía del «embudo de lúmenes» (chip LED → pérdidas térmicas/ópticas → LOR → lúmenes útiles) junto a escala visual de TCC ($\text{K}$) e IRC ($R_a$). |
| **Slide 6** | **Sistemas de montaje y protección ambiental IP / IK** | Esquema seccionado (empotrado con plenum, superficie, suspendido, carril, proyector) y matriz práctica de códigos IP (IEC 60529) e IK (IEC 62262). |
| **Slide 7** | **Práctica aplicada y Caso Centro Técnico Levante** | Plano esquemático del ala de $580\ \text{m}^2$ (Aula, Laboratorio, Taller con puente grúa a $+5,10\ \text{m}$) y tabla de los 4 archivos a auditar. |
| **Slide 8** | **Transferencia, uso seguro de IA y puente al Tema 5** | Regla de verificación independiente al tabular catálogos con IA y avance al Tema 5: cómo calcular $E_m$, $U_0$, UGR y VEEI/LPD sobre estas luminarias. |

### 8.2. Ficha de trabajo del alumnado
Documento de 2 páginas (PDF editable o impreso) compuesto por:
- **Sección A:** Mapa anatómico anotado de una cabecera `.ldt` y `.ies` (qué significa cada línea).
- **Sección B:** Guía visual de identificación rápida de 6 curvas polares fotométricas y tabla resumen de IP/IK más frecuentes en edificación e industria.
- **Sección C:** Plantilla de auditoría de archivos del caso *Centro Técnico Levante*.
- **Sección D:** Autoevaluación de cierre y registro de archivo `.evo` guardado.

### 8.3. Plantilla técnica práctica: «Ficha de Selección y Auditoría Fotométrica de Luminarias»

```markdown
# FICHA DE SELECCIÓN Y AUDITORÍA FOTOMÉTRICA (DIALUX)
Código de proyecto: ________________________  Archivo .evo: ___________________________
Responsable: _______________________________  Fecha: _________________________________

1. AUDITORÍA DE ARCHIVOS FOTOMÉTRICOS (.ldt / .ies)
| ID Tipo | Local destino | Archivo fotométrico (.ldt/.ies) | Área luminosa real (mm) | Flujo luminaria (lm) | Potencia total (W) | Eficacia real (lm/W) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| LUM-01 | | | | | | |
| LUM-02 | | | | | | |

2. ESPECIFICACIÓN ÓPTICA, MECÁNICA Y AMBIENTAL
| ID Tipo | Curva polar / Óptica | TCC (K) | IRC (Ra) | Montaje y cota (m) | Profundidad / Gálibo | Grado IP / IK exigido vs. equipo | Dictamen |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| LUM-01 | | | | | | / vs. / | [ ] Apto [ ] Rechazado |
| LUM-02 | | | | | | / vs. / | [ ] Apto [ ] Rechazado |

3. CONTROL DE VERIFICACIÓN (SI SE USÓ IA PARA TABULAR FICHAS PDF)
- Herramienta empleada (solo con texto técnico, sin planos ni datos de cliente): ____________________
- ¿Se comprobaron manualmente flujo neto, potencia de sistema y eficacia lm/W frente al .ldt/.ies? [ ] Sí
- Normativa nacional vigente pendiente de verificación para IP/IK y confort visual: ________________
```

### 8.4. Lecturas y recursos recomendados
*(Nota de validación: el formador y el alumnado deben verificar siempre las versiones vigentes de normas técnicas, estándares de ficheros y catálogos de fabricantes antes de aplicar valores o procedimientos en proyectos reales).*
- **Especificación oficial del formato EULUMDAT (`.ldt`) e IESNA LM-63 / ANSI/IES TM-33:** Documentación técnica de referencia sobre estructura de campos de intensidad luminosa y dimensiones de áreas emisoras.
- **Normas IEC 60529 (Grados de protección IP) e IEC 62262 (Grados de protección IK) / trasposiciones UNE-EN aplicables:** Verificar siempre edición vigente y exigencias particulares del reglamento eléctrico de baja tensión del país.
- **Catálogos abiertos de fabricantes de iluminación profesional (p. ej., Zumtobel, Trilux, Signify/Philips, LEDVANCE, Simon):** Utilizar exclusivamente sus bibliotecas verificadas de `.ldt`/`.ies` y contrastar con las fichas técnicas oficiales vigentes.

### Glosario de términos clave

| Término | Definición |
| :--- | :--- |
| **Ángulo de apertura (FWHM)** | Ángulo total entre las dos direcciones de una curva fotométrica en las que la intensidad luminosa se reduce al $50\ \%$ de su valor máximo. |
| **Curva fotométrica polar** | Representación gráfica en coordenadas polares de la intensidad luminosa ($\text{cd}$ o $\text{cd/klm}$) emitida por una luminaria según el ángulo $\gamma$ en planos $C$ definidos. |
| **Eficacia luminosa ($\text{lm/W}$)** | Relación entre el flujo luminoso neto emitido por la luminaria completa y la potencia eléctrica total consumida de la red, incluyendo el equipo auxiliar. |
| **Eulumdat (`.ldt`)** | Formato estándar europeo de texto plano que almacena datos geométricos, eléctricos y tabla de intensidades en $\text{cd/klm}$ de una luminaria. |
| **Grado IK** | Índice normalizado (IK00 a IK10, según IEC 62262) que clasifica la resistencia de la envolvente de una luminaria frente a impactos mecánicos externos. |
| **Grado IP** | Índice normalizado (dos cifras según IEC 60529) que expresa el nivel de estanqueidad de un equipo eléctrico frente a sólidos/polvo y penetración de agua. |
| **IESNA LM-63 (`.ies`)** | Formato estándar norteamericano en texto plano que describe la distribución espacial de intensidades luminosas absolutas en candelas y las propiedades básicas de la luminaria. |
| **LOR (*Light Output Ratio*)** | Rendimiento óptico de la luminaria, definido como la relación entre el flujo luminoso emitido al exterior y el flujo nominal de la fuente luminosa interna. |

---

## 9. Adaptaciones

### 9.1. Sesión presencial
- **Inspección colectiva en proyector:** Abrir simultáneamente en pantalla dividida un archivo `.ldt` en editor de texto con números de línea y su vista polar en DIALux para señalar en vivo dónde están el flujo, la potencia y el área luminosa.
- **Muestrario físico:** Si el centro dispone de 2 o 3 luminarias reales de muestra (un panel microprismático, una regleta estanca IP65 y un proyector de carril), mostrar físicamente la diferencia entre el difusor opal y el microprismático y los conectores traseros que ocupan altura en el plenum.

### 9.2. Sesión online síncrona
- **Paquete de descarga:** Compartir el archivo ZIP con `Panel_Eco_Opal.ies`, `Panel_Micro_Pro.ldt`, `Lineal_Lab_HiCRI.ldt`, `Campana_Ind_150.ies` y el modelo `Levante_Base.evo` al inicio o el día anterior para agilizar la Actividad 2 y el Caso práctico.
- **Tablero colaborativo en salas:** En el Caso *Centro Técnico Levante*, cada grupo completa su *Matriz de Dictamen Técnico* en una hoja compartida en vivo para comparar inmediatamente los valores calculados de $\text{lm/W}$ y las propuestas de sustitución del Taller.

### 9.3. Sesión asíncrona
- **Vídeos cortos de apoyo:** Grabar dos cápsulas: (1) «Cómo leer un archivo `.ldt` y un `.ies` en 60 segundos con el Bloc de notas» (7 min) y (2) «Cómo orientar los ejes $C0/C90$ e insertar luminarias empotradas y proyectores en DIALux» (9 min).
- **Entrega en LMS:** Subir el archivo `B2_T04_Luminarias.evo`, el modelo con las soluciones del caso *Centro Técnico Levante* y la *Ficha de Selección y Auditoría* del proyecto integrador en 7 días.
- **Foro de revisión:** Cada participante revisa el archivo `.ldt`/`.ies` elegido por un compañero comprobando que su superficie emisora no sea cero y que el grado IP/IK concuerde con el recinto declarado.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Integra la comprensión del entorno óptico y de sombras trabajado en el **Tema 3 (Definición de materiales y texturas en el entorno)** y recupera conceptos eléctricos del **Bloque 1** (potencia activa de circuitos, factor de potencia, protección IP/IK según emplazamiento y criterio normativo aplicable).
- **Competencias técnicas que desarrolla:** Lectura crítica de archivos fotométricos normalizados (`.ldt`/`.ies`), análisis de distribuciones polares, evaluación comparativa de eficacia real y confort visual, y selección mecánica/ambiental compatible con edificación e industria.
- **Conexión con el tema anterior y posterior del programa (6 módulos / 50 temas):**
  - *Tema anterior:* **Bloque 2, Tema 3 — Definición de materiales y texturas en el entorno** (posición 3 de 5 del Bloque 2; tema 14 de 50), que dejó calibradas las reflectancias, vidrios y sombras donde hoy se insertan los equipos emisores reales.
  - *Tema posterior:* **Bloque 2, Tema 5 — Generación de cálculos lumínicos** (posición 5 de 5 del Bloque 2; tema 16 de 50). Sobre las luminarias reales implantadas hoy en DIALux, en la próxima sesión aplicaremos factores de mantenimiento (MF), configuraremos rejillas de evaluación, interpretaremos mapas de aislíneas/colores falsos ($E_m$, $U_0$, UGR, VEEI/LPD), exportaremos memorias y prepararemos el puente limpio hacia **Revit MEP (Bloque 3)** y **Twinmotion (Bloque 5)**.
- **Evidencia de aprendizaje que aporta el alumnado:** Archivo `B2_T04_Luminarias.evo` con fotometrías reales orientadas, dictamen e implantación del caso *Centro Técnico Levante*, y *Ficha de Selección y Auditoría Fotométrica* del proyecto integrador.

---

## Siguientes pasos para el formador

1. **Verificar archivos de práctica `.ldt` y `.ies`:** Preparar y probar en DIALux los archivos de la Actividad 2 y la carpeta `Caso_Levante_Archivos/` asegurando que `Panel_Eco_Opal.ies` muestre de forma didáctica y clara el fallo de superficie luminosa `0.00 x 0.00` y los otros tres archivos carguen sin errores de formato.
2. **Revisar permisos y versión de catálogos online:** Comprobar en el aula si los equipos disponen de acceso a red para descargar catálogos en línea o conviene proporcionar toda la librería local predescargada para evitar cortes de conexión.
3. **Preparar tabla resumen de normas IP/IK:** Tener a mano un cuadro de referencia orientativo de códigos IP/IK (advirtiendo expresamente que su exigencia reglamentaria varía según país y norma eléctrica aplicable).
4. **Ensayar el ejemplo de tabulación segura con IA:** Preparar un *prompt* modelo limpio de cómo resumir especificaciones de dos fichas públicas en texto para demostrar en la Actividad 3 cómo detectar posibles errores aritméticos de la IA al calcular $\text{lm/W}$.
5. **Conectar con el cierre de bloque (Tema 5):** Recordar al alumnado traer guardado su archivo `B2_T04_Luminarias.evo` para ejecutar la simulación final, optimizar la disposición de luminarias y generar la memoria técnica completa en el Tema 5.
