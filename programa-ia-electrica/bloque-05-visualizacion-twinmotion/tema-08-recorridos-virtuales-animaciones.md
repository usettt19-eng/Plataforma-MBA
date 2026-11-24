# Tema 8. Creación de recorridos virtuales y animaciones

## 1. Ficha del tema

| Campo | Detalle |
| :--- | :--- |
| **Título del tema** | Creación de recorridos virtuales y animaciones |
| **Programa** | IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas |
| **Bloque y posición dentro del programa** | Bloque 5: Visualización y renderizado con Twinmotion · Tema 8 de 10 |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Modalidad** | Online / Híbrida interactiva |
| **Idioma** | Español de España |
| **Prerrequisitos** | Manejo previo de importación desde Revit MEP, calibración de lúmenes, Kelvin ($\text{K}$) y haces lumínicos (Tema 6), así como organización de capas y ocultación selectiva en el *Scene Graph* (Tema 7 del Bloque 5). |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado será capaz de planificar y producir recorridos virtuales y secuencias animadas en Twinmotion mediante guiones técnicos (*storyboards*), *keyframes* de cámara, control de profundidad de campo y exposición, transiciones día-noche de encendido y fases constructivas MEP, empleando IA con datos anonimizados para estructurar la narrativa y verificando que ninguna secuencia deforme la escala ni el orden real de ejecución. |

---

## 2. Objetivos de aprendizaje

1. **Diseñar** un guion técnico (*storyboard*) con tiempos, encuadres, distancias focales y velocidades de desplazamiento adecuados para explicar cuartos eléctricos, trazados de bandejas en falso techo y escenas de alumbrado. *(Nivel de Bloom: Crear)*
2. **Configurar** trayectorias de cámara mediante *keyframes* y partes de vídeo (*Video Parts*) en Twinmotion, aplicando profundidad de campo (*Depth of Field*) y transiciones suaves de exposición (EV) sin colisiones geométricas ni giros bruscos. *(Nivel de Bloom: Aplicar)*
3. **Programar** transiciones día-noche de encendido lumínico y secuencias constructivas MEP mediante control de hora solar, *Phasing* o capas temporales según las capacidades de la versión de Twinmotion utilizada. *(Nivel de Bloom: Aplicar)*
4. **Evaluar** la claridad comunicativa y fidelidad constructiva de una animación técnica, detectando deformaciones de gran angular, saltos de exposición o secuencias de montaje incompatibles con la ejecución real en obra. *(Nivel de Bloom: Evaluar)*
5. **Elaborar** guiones de subtítulos técnicos y tablas temporales de *keyframes* asistidos por Inteligencia Artificial sobre inventarios anonimizados, auditando manualmente la secuencia lógica de montaje eléctrico y sus advertencias de alcance. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Guionización técnica (*storyboard*), altura de cámara, focal y ritmo cinematográfico

#### Explicación breve y clara
Un recorrido virtual técnico no persigue imitar la cámara frenética de un videojuego, sino permitir que un director de obra, un cliente o un instalador comprenda el espacio eléctrico sin fatiga visual. Antes de pulsar el botón de grabar *keyframes*, resulta imprescindible redactar un **guion técnico (*storyboard*)** que fije qué secuencias se mostrarán, en qué orden lógico, cuánto durará cada toma y qué componente eléctrico debe quedar nítido en pantalla.

Tres parámetros separan un vídeo profesional de uno amateur: la **altura de cámara** (mantener el punto de vista humano habitual entre $1{,}55\text{ m}$ y $1{,}65\text{ m}$ en zonas transitables, elevándose únicamente de forma justificada para enseñar el plenum sobre falso techo), la **distancia focal** (usar objetivos entre $24\text{ mm}$ y $35\text{ mm}$ equivalentes para evitar que el gran angular extremo de $14\text{ mm}$ estire los cuadros eléctricos como trapecios) y la **velocidad de avance** (desplazamientos constantes cercanos a $1{,}0\text{–}1{,}3\text{ m/s}$ con pausas deliberadas de $2\text{ a }3\text{ segundos}$ ante elementos clave).

#### Conceptos clave
- **Guion técnico (*Storyboard*):** Documento previo en tabla que relaciona cada clip de vídeo con su objetivo comunicativo, duración en segundos, movimiento de cámara, capas activas y rótulo informativo.
- **Velocidad de recorrido realista:** Desplazamiento longitudinal equilibrado ($\approx 1\text{ m/s}$ en interiores técnicos; hasta $2\text{–}3\text{ m/s}$ en exteriores amplios), calculado dividiendo la longitud de la trayectoria entre la duración del clip para evitar acelerones artificiales.
- **Distancia focal sin distorsión:** Rango recomendado entre $24\text{ mm}$ y $35\text{ mm}$ en inspección técnica; solo se desciende puntualmente a $18\text{–}20\text{ mm}$ en cuartos eléctricos muy estrechos advirtiendo de la distorsión angular en bordes.
- **Corte limpio frente a giro continuo (*Pan* agresivo):** En lugar de atravesar paredes o girar $180^\circ$ en un segundo dentro de un pasillo estrecho, conviene dividir la animación en partes independientes (*Video Parts*) con cortes o fundidos limpios.

#### Definiciones necesarias
- **Distancia focal (*Focal Length*):** Parámetro óptico de la cámara virtual (expresado en milímetros equivalentes a formato de $35\text{ mm}$) que determina la amplitud del campo visual y la perspectiva; focales muy cortas exageran las distancias y deforman envolventes metálicas.
- **Tiempo de permanencia (*Dwell Time*):** Pausa controlada o movimiento casi estático de $2\text{–}4\text{ segundos}$ al llegar frente a un equipo clave (como el Cuadro General de Baja Tensión) para que el espectador lea su disposición y etiquetado.
- **Partes de vídeo (*Video Parts*):** Subsecuencias autónomas dentro de un clip de vídeo de Twinmotion que permiten cambiar de cámara, ubicación, horario o visibilidad entre planos sin forzar vuelos imposibles de la cámara por todo el edificio.

#### Ejemplo práctico realista
Para explicar la instalación eléctrica de una planta de oficinas de $450\text{ m}^2$ con pasillo técnico de $18\text{ m}$ y sala de cuadros BT, se estructura un vídeo de $52\text{ segundos}$ en 4 partes independientes:
1. **Parte 1 ($12\text{ s}$):** Aproximación exterior al acceso principal ($35\text{ mm}$, avance recto de $15\text{ m}$ a $1{,}25\text{ m/s}$).
2. **Parte 2 ($14\text{ s}$):** Corte limpio a pasillo interior a $1{,}60\text{ m}$ de altura ($28\text{ mm}$); tras $5\text{ s}$ de avance muestra el trazado de alumbrado lineal a $4000\text{ K}$ y se detiene ligeramente mientras se oculta el falso techo para revelar bandejas de fuerza y datos.
3. **Parte 3 ($14\text{ s}$):** Entrada pausada a la sala de cuadros BT ($24\text{ mm}$ por tratarse de un local de $3{,}2\text{ m}$ de ancho), encuadre frontal del CGBT con $3\text{ s}$ de pausa para apreciar envolventes, alumbrado de emergencia y zona libre frontal.
4. **Parte 4 ($12\text{ s}$):** Plano general en oficina abierta ($32\text{ mm}$) mostrando puestos de trabajo iluminados y cajas eléctricas de suelo alineadas.

#### Errores frecuentes
- Crear un único vídeo largo con un solo recorrido continuo en zigzag que atraviesa puertas cerradas, muros y falsos techos, provocando mareo en el espectador.
- Usar un gran angular de $14\text{–}16\text{ mm}$ por defecto para que «quepa todo el cuarto eléctrico», haciendo parecer un armario de $2\text{ m}$ como si tuviera $5\text{ m}$ de profundidad.
- Encadenar *keyframes* con distancias muy dispares asignando los mismos segundos a cada tramo, provocando que la cámara acelere en pasillos largos y frene de golpe en giros cerrados.
- Olvidar calcular pausas mínimas delante de cuadros y luminarias relevantes, impidiendo leer detalles antes de que la cámara siga girando.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué conviene dividir un recorrido técnico en varias *Video Parts* independientes en lugar de animar un único desplazamiento continuo por toda la planta?
2. ¿Qué problema técnico de percepción introduce utilizar una distancia focal inferior a $18\text{ mm}$ al presentar una sala de cuadros eléctricos?
3. Si un tramo recto de pasillo mide $16\text{ m}$ y se desea un avance tranquilo equivalente a caminar ($1{,}1\text{ m/s}$), ¿qué duración aproximada debe tener esa parte del vídeo?

---

### 3.2. *Keyframes*, profundidad de campo (*Depth of Field*) y control de exposición en movimiento

#### Explicación breve y clara
Cada **keyframe** en Twinmotion guarda un estado completo de cámara (posición, orientación, focal, profundidad de campo, exposición y ambiente). El motor interpola automáticamente el trayecto entre un *keyframe* y el siguiente. El principal problema técnico aparece cuando el proyectista deja la cámara automática o coloca *keyframes* demasiado separados en curvas cerradas: la trayectoria interpolada puede recortar esquinas atravesando bandejas portacables, pilares o armarios eléctricos (*clipping*).

Igualmente decisivos son la **profundidad de campo (*Depth of Field*, DoF)** y el **control de exposición (EV)**. Un desenfoque de fondo muy acusado (apertura f/1.4) resulta atractivo en un plano corto de un pulsador de emergencia o un mecanismo de pared, pero resulta contraproducente en una inspección de sala técnica, donde necesitamos nítidos tanto el primer plano de protecciones como las bandejas superiores al fondo. Por su parte, al mover una cámara desde exterior diurno hacia un cuarto interior, dejar activo *Auto-Exposure* genera destellos bruscos al cruzar el umbral; resulta mucho más limpio ajustar manualmente el EV por *keyframe* o usar un corte entre *Video Parts* con exposiciones calibradas.

#### Conceptos clave
- **Interpolación de *keyframes*:** Cálculo automático de la trayectoria intermedia entre dos cámaras guardadas; exige añadir *keyframes* intermedios en giros de $90^\circ$ para controlar el radio de giro y evitar colisiones con paredes o conductos.
- **Profundidad de campo (*Depth of Field*):** Rango de distancia delante y detrás del plano enfocado que aparece nítido en pantalla; en ingeniería prima la legibilidad global (DoF amplio o desactivado en vistas generales, DoF selectivo solo en planos detalle).
- **Transición de EV entre *keyframes*:** Ajuste progresivo y manual de la exposición entre un espacio luminoso y otro más cerrado dentro de un mismo plano secuencia, evitando saltos de luminancia.
- **Control de paralelismo vertical (*Camera Alignment / Vertical Shift*):** Corrección de perspectiva vertical (cuando la cámara está perfectamente horizontal o con compensación vertical) para que las puertas de armarios, pilares y luminarias verticales no aparezcan inclinadas en el recorrido.

#### Definiciones necesarias
- **Keyframe:** Fotograma clave que almacena explícitamente las coordenadas de cámara y propiedades de escena en un instante determinado de la línea de tiempo, sirviendo de ancla para la animación.
- **Distancia de enfoque (*Focus Distance*) y número f (*Aperture*):** Parámetros que determinan a qué distancia exacta desde la lente se sitúa el plano máximo de nitidez y cuán rápido se desenfoca el fondo; valores altos de número f ($f/8$ a $f/16$) mantienen todo el recinto nítido.
- **Clipping de cámara:** Penetración accidental del volumen virtual de la cámara en muros, puertas, luminarias colgantes o conductos durante la interpolación entre dos *keyframes*.

#### Ejemplo práctico realista
Se anima una secuencia continua de $10\text{ s}$ mostrando la transición desde una oficina iluminada a $4000\text{ K}$ ($\text{EV} = 4{,}2$) hasta un detalle de interruptor de paro de emergencia y cuadro secundario junto a la puerta.
- Con *Auto-Exposure* activo y `Aperture = f/1.8` sin reenfocar, al acercarse a la pared blanca el cuadro queda sobreexpuesto y las etiquetas de los magnetotérmicos al fondo aparecen borrosas.
- Al corregir: se añade un *keyframe* intermedio en el giro del umbral para respetar $0{,}60\text{ m}$ de separación respecto a la jamba de la puerta; se bloquea `Auto-Exposure = OFF` fijando `EV = 4,2` en el primer *keyframe* y ajustándolo suavemente a `EV = 3,8` en el plano final del cuadro; finalmente, en el plano general de la sala se desactiva DoF (o se fija `f/11`) y solo en una toma independiente de $4\text{ s}$ sobre el pulsador se activa DoF con distancia enfocada exactamente en la placa del mecanismo.

#### Errores frecuentes
- Dejar que la curva de interpolación atraviese una esquina de bandeja portacables o una puerta entreabierta por ahorrar un *keyframe* intermedio en el giro.
- Activar *Depth of Field* con `f/1.4` durante todo el recorrido de una nave industrial, haciendo ilegibles los rótulos de cuadros, señalización de salida y luminarias del fondo.
- Confiar en *Auto-Exposure* durante recorridos interior-exterior, generando parpadeos o «bombeos» de brillo que alteran la percepción lumínica calibrada en el Tema 6.
- Dejar inclinada la cámara hacia arriba o abajo en recorridos de pasillos largos, haciendo que todos los pilares y marcos de cuadros parezcan caerse hacia los lados.

#### Preguntas que el alumnado debería poder responder
1. ¿Cómo se corrige en Twinmotion una trayectoria curva entre dos *keyframes* que roza o atraviesa la esquina de un armario eléctrico?
2. ¿Cuándo resulta técnicamente útil activar una profundidad de campo marcada y cuándo debe mantenerse amplia o desactivada en un vídeo eléctrico?
3. ¿Qué ventaja ofrece controlar el EV por *keyframe* (o separar en *Video Parts*) frente a dejar *Auto-Exposure* al pasar de un vestíbulo soleado a una sala técnica interior?

---

### 3.3. Transiciones día-noche de encendido y fases constructivas MEP

#### Explicación breve y clara
Dos de los recursos visuales más valorados en presentaciones de instalaciones eléctricas son la **transición día-noche de encendido** (mostrar cómo pasa un edificio del aprovechamiento de luz natural al funcionamiento del alumbrado artificial interior y de fachada) y las **secuencias de fases constructivas MEP** (exponer en pocos segundos qué instalaciones quedan ocultas sobre el falso techo antes de cerrarlo, o el orden lógico de montaje de bandejas, conductos, cuadros y luminarias).

Conviene ser rigurosamente realista respecto a cómo funciona Twinmotion según su versión:
- La **transición solar (día $\rightarrow$ crepúsculo $\rightarrow$ noche)** se anima de forma directa cambiando la hora del día (*Time of Day*) entre dos *keyframes* de un mismo clip.
- El **encendido progresivo de circuitos o la conmutación de capas** depende de las herramientas disponibles en la versión utilizada (por ejemplo, animar visibilidad/fases mediante *Phasing*, agrupar elementos en pistas temporales de fase o animar intensidades/materiales emisivos donde la versión lo permita; cuando se requieran encendidos independientes complejos por circuito sin soporte directo por fotograma, la solución profesional más estable y limpia consiste en exportar dos clips con idéntico encuadre —apagado y encendido— y realizar un fundido encadenado controlado en edición).
- Para mostrar instalaciones ocultas sobre falsos techos sin depender de cambios bruscos, también pueden animarse cajas de sección (*Section Cubes*) o grupos en *Phasing* respetando la secuencia constructiva real de la obra.

#### Conceptos clave
- **Animación solar (*Time of Day*):** Variación continua de la posición y color del sol desde horario diurno hasta crepuscular/nocturno entre *keyframes*, permitiendo evaluar la convivencia entre luz natural y alumbrado artificial.
- **Secuencia constructiva por fases (*Phasing*):** Línea temporal basada en hitos que activa progresivamente grupos del *Scene Graph* (estructura $\rightarrow$ bandejas/tubos primarios $\rightarrow$ cuadros/mecanismos $\rightarrow$ luminarias $\rightarrow$ cerramientos/falsos techos).
- **Caja de sección animada (*Section Cube*):** Volumen de recorte geométrico desplazado entre *keyframes* (donde el flujo y versión lo soporten) o mostrado por fases para «abrir» virtualmente un falso techo o muro técnico durante el recorrido.
- **Fundido de pases idénticos (flujo híbrido robusto):** Exportación de dos versiones exactas de una misma cámara (p. ej., circuito diurno vs. circuito nocturno o con techo vs. sin techo) para lograr encendidos por zonas limpios sin forzar capacidades inexistentes en tiempo real.

#### Definiciones necesarias
- **Phasing (Fases en Twinmotion):** Herramienta de planificación temporal que vincula carpetas del *Scene Graph* a intervalos en una línea de tiempo para visualizar la evolución constructiva o la aparición secuencial de disciplinas MEP.
- **Escenario de encendido:** Estado específico de la instalación lumínica (alumbrado general, de acento, exterior o de emergencia) correspondiente a un modo operativo real de los circuitos de mando o regulación del proyecto.
- **Secuencia lógica de montaje MEP:** Orden constructivo verificable en obra (generalmente replanteo y soportación, tendido de bandejas/canalizaciones principales, montaje de envolventes y aparamenta, cableado/conexionado, montaje de luminarias y pruebas tras cierres, sujeto al plan de obra específico).

#### Ejemplo práctico realista
En una nave comercial con lucernarios y alumbrado exterior de fachada, el equipo debe presentar en $18\text{ s}$ el paso del día a la noche y la distribución de bandejas sobre falso techo:
1. **Transición día-noche ($10\text{ s}$):** Con la cámara exterior estática o en ligero *travelling* lateral, el primer *keyframe* fija la hora en las `17:30` (luz solar oblicua cálida, focos exteriores apagados o al mínimo en toma base) y el último en las `21:15` (cielo crepuscular profundo, fachada bañada a $3000\text{ K}$ e interior visible a $4000\text{ K}$). Dado que se desea mostrar el encendido escalonado por dos zonas (primero alumbrado interior de trabajo y dos segundos después los bañadores de fachada), el técnico renderiza dos pases idénticos si su versión no automatiza encendido independiente por grupo en vídeo y los mezcla suavemente en edición —o emplea pistas de *Phasing* si las luces se controlan por visibilidad de fase— logrando un encendido creíble y fiel a los circuitos de reloj astronómico del proyecto.
2. **Secuencia MEP ($8\text{ s}$):** En el vestíbulo técnico, una secuencia de *Phasing* (de 4 pasos en el orden real de obra) activa primero la estructura base, luego los conductos y bandejas principales sobre forjado, después los cuadros y luminarias suspendidas, y finalmente el cierre de falso techo registrable dejando visibles únicamente las pantallas LED integradas.

#### Errores frecuentes
- Mostrar en una animación de fases constructivas que se instala el falso techo acabado y los muebles antes de tender las bandejas portacables superiores o las acometidas principales.
- Encender todas las luces interiores a plena potencia a mediodía soleado sin diferencia visual perceptible respecto al anochecer, perdiendo el sentido comunicativo de la transición día-noche.
- Inventar automatismos de conmutación por circuito DALI inexistentes en la versión instalada de Twinmotion sin validar antes en una prueba de 5 segundos qué parámetros soporta realmente cada *keyframe* o pista de *Phasing*.
- Desplazar una caja de sección demasiado rápido, cortando por la mitad cuadros eléctricos y luminarias de forma confusa para el cliente.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué diferencia técnica existe entre animar la hora solar (*Time of Day*) entre *keyframes* y construir una secuencia constructiva mediante *Phasing*?
2. Si una versión concreta de Twinmotion no permite animar de forma independiente el encendido progresivo de tres circuitos de luminarias dentro de un único clip, ¿qué procedimiento práctico fiable permite resolverlo sin perder exactitud de cámara?
3. ¿Qué error grave de lógica constructiva debe evitarse al definir los hitos de una animación de fases MEP?

---

### 3.4. Narrativa técnica, revisión crítica de recorridos y asistencia con IA para *storyboards*

#### Explicación breve y clara
Una animación sin narrativa suele convertirse en una sucesión de planos bonitos donde el espectador no sabe qué está mirando: «¿esa bandeja es de fuerza o de datos?, ¿por qué estamos viendo ahora la fachada oeste?». Integrar un **guion breve de locución o subtítulos técnicos** sincronizado con la duración de cada *Video Part* convierte el recorrido en una herramienta de toma de decisiones para propiedad, dirección facultativa e instaladores.

En esta fase, **ChatGPT o Claude** son excelentes aliados para redactar la tabla de *storyboard*, calcular duraciones coherentes a partir de distancias en metros y velocidades deseadas, sugerir transiciones limpias y elaborar rótulos concisos en español técnico. Sin embargo, debemos aplicar dos controles estrictos: primero, **anonimizar cualquier dato del proyecto** (sin nombres de cliente, direcciones ni archivos o memorias confidenciales); segundo, **verificar manualmente toda secuencia constructiva o afirmación eléctrica** generada por la IA, ya que los modelos lingüísticos pueden confundir órdenes de montaje en obra (p. ej., proponer energizar cuadros antes de pruebas de aislamiento o invertir fases de bandeja y falso techo) o redactar frases que parezcan certificar cumplimiento reglamentario mediante el vídeo.

#### Conceptos clave
- **Tabla de *storyboard* cronometrado:** Matriz con columnas `Parte | Tiempo (s) | Movimiento/Focal | Capas activas | Subtítulo técnico | Advertencia/Límite`, usada como hoja de ruta antes de renderizar.
- **Sincronía duración-texto:** Regla comunicativa por la cual un rótulo técnico en pantalla debe permanecer legible al menos $1\text{ s}$ por cada 3–4 palabras (generalmente $4\text{ a }6\text{ segundos}$ por subtítulo breve), coordinado con los *dwell times* de cámara.
- **Validación del orden constructivo MEP:** Revisión por un técnico cualificado de las etapas de *Phasing* propuestas por IA frente al plan real de obra e instalaciones.
- **Claridad de alcance en vídeos:** Inclusión de un rótulo final o marca informativa explicando que la animación es un recorrido visual orientativo y no sustituye planos constructivos, esquemas unifilares ni pruebas reglamentarias.

#### Definiciones necesarias
- **Narrativa técnica visual:** Estructuración intencionada de planos, ritmos y rótulos que guía la atención del espectador desde la visión general del edificio hasta el detalle operativo de la instalación eléctrica sin sobrecarga informativa.
- **Rótulo de verificación (*Technical Callout*):** Breve sobreimpresión textual (nombre de recinto, sistema eléctrico visible y estado de fase) añadida en posproducción o presentación para evitar interpretaciones erróneas durante el vídeo.
- **Sesgo de secuencia en IA:** Tendencia de un modelo de lenguaje a generar listas de pasos constructivos aparentemente lógicas en el plano lingüístico pero erróneas en la práctica de obra eléctrica o de seguridad.

#### Ejemplo práctico realista
Un proyectista necesita preparar un recorrido de $60\text{ s}$ para presentar la instalación eléctrica de un edificio terciario anonimizado (`EDIF_TERC_02`) con cuatro zonas: fachada con alumbrado exterior, hall con tira cálida, falso techo de pasillo con doble bandeja (BT + comunicaciones) y sala de CGBT. Introduce únicamente datos genéricos y longitudes de tramo en su prompt a Claude/ChatGPT para generar el *storyboard* y los subtítulos.

La IA devuelve una tabla muy clara con duraciones, pero en la secuencia de *Phasing* coloca el «cierre de falso techo registrable y montaje de mecanismos» antes del «tendido de cableado sobre bandejas principales» y escribe en el subtítulo final «Vídeo de validación normativa completa de alumbrado y seguridad eléctrica». El ingeniero **corrige ambos fallos**: reordena las fases MEP situando soportación, bandejas, cableado y pruebas previas antes del cierre definitivo del techo, y sustituye el subtítulo final por «Visualización orientativa de diseño y coordinación BIM — sujeta a planos constructivos, memoria de cálculo y normativa vigente aplicable».

#### Errores frecuentes
- Renderizar una animación de $4\text{ minutos}$ en 4K antes de haber revisado y aprobado el *storyboard* de tiempos y subtítulos en baja resolución (*preview*).
- Aceptar sin leer críticamente un orden de montaje MEP sugerido por IA en el que la envolvente arquitectónica o el falso techo impiden acceder a las bandejas.
- Sobrecargar la pantalla con párrafos técnicos largos durante movimientos rápidos de cámara de 3 segundos en los que nadie puede leerlos.
- Subir el guion real con datos identificativos de infraestructura sensible (hospitales, centros de datos, clientes privados) a un chat público de IA sin anonimización ni permiso.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué columnas debe contener un *storyboard* técnico antes de empezar a colocar *keyframes* en Twinmotion?
2. ¿Por qué conviene validar el ritmo del vídeo mediante una previsualización rápida de baja resolución antes de exportar el archivo definitivo?
3. ¿Qué dos tipos de errores críticos hay que vigilar siempre al pedir a ChatGPT o Claude un guion de fases constructivas MEP y rótulos técnicos?

---

## 4. Metodología didáctica

La sesión combina análisis crítico de vídeos de referencia, demostración guiada sobre cámara y *Phasing* en Twinmotion, guionización asistida por IA y taller aplicado de producción de secuencias, sumando exactamente **240 minutos**.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
| :--- | :---: | :--- | :--- |
| **1. Activación y crítica de recorridos reales** | 25 min | Proyecta 2 recorridos cortos contrastados (uno mareante con focal de $15\text{ mm}$, *clipping* y *Auto-Exposure*, frente a otro pausado con cortes limpios y focal de $28\text{ mm}$) y plantea objetivos. | Identifica fallos de cámara, deformación perspectiva, exceso de velocidad y problemas de legibilidad eléctrica en parejas mediante una ficha rápida. |
| **2. Demostración I: *Storyboard*, *keyframes*, focal, DoF y EV** | 40 min | Muestra cómo traducir un *storyboard* a *Video Parts* en Twinmotion, ajustando focal ($24\text{–}35\text{ mm}$), velocidad constante, *dwell times*, *Depth of Field* selectivo y EV manual entre planos. | Construye 3 *Video Parts* en su escena base (acceso, pasillo eléctrico y entrada a sala de cuadros), evitando colisiones y fijando EV coherente. |
| **3. Demostración II: Transiciones día-noche y fases constructivas MEP** | 40 min | Explica y demuestra la animación de *Time of Day* para transiciones día-noche, estrategias honestas de encendido por circuitos (según versión/edición) y el uso de *Phasing* o capas temporales para exponer bandejas sobre falso techo. | Configura una transición día-noche exterior de $8\text{–}10\text{ s}$ y una secuencia de 4 pasos de montaje/descubrimiento de bandejas MEP en el interior. |
| **4. Práctica guiada: Guionización y auditoría de fases con IA** | 40 min | Facilita plantilla de *storyboard* anonimizado y muestra cómo usar ChatGPT/Claude para calcular tiempos por longitud de tramo y redactar rótulos técnicos, destacando errores constructivos típicos de la IA. | Genera el *storyboard* y subtítulos de un recorrido de $50\text{–}60\text{ s}$ con datos anonimizados, corrige errores de secuencia MEP y valida las notas de alcance. |
| **5. Pausa activa** | 15 min | Atiende dudas puntuales sobre curvas de cámara, ubicación de *keyframes* en giros y límites de *Phasing* según versión de Twinmotion. | Descansa y comprueba las previsualizaciones rápidas (*viewport previews*) de sus partes de vídeo. |
| **6. Taller aplicado: Caso práctico integral de recorrido MEP** | 55 min | Supervisa el desarrollo autónomo del caso práctico verificando fluidez, ausencia de *clipping*, orden lógico constructivo y coherencia con la calibración lumínica previa. | Ejecuta el caso práctico completo: redacta el *storyboard* revisado, programa las partes de vídeo (día-noche + secuencia de falso techo/sala técnica) y exporta previsualización de comprobación. |
| **7. Puesta en común, evaluación y cierre** | 25 min | Proyecta 3 previsualizaciones voluntarias evaluando en directo ritmo, focal y secuencia MEP con la rúbrica, y conecta con herramientas de presentación profesional del Tema 9. | Presenta su guion y previsualización, realiza la autoevaluación de calidad técnica y completa el cuestionario sumativo final. |

**Total cronometrado:** $25 + 40 + 40 + 40 + 15 + 55 + 25 = \mathbf{240\text{ minutos}}$.

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «Autopsia de un recorrido mareante»
- **Objetivo:** Reconocer rápidamente los errores de cámara, ritmo, distancia focal, exposición y continuidad que restan credibilidad técnica a una animación de instalaciones eléctricas.
- **Instrucciones para el alumnado:**
  1. Visualiza los dos clips de prueba (`Clip_Error_01.mp4` de $30\text{ s}$ y `Clip_Referencia_02.mp4` de $30\text{ s}$) en el aula o plataforma.
  2. Registra en la tabla comparativa los defectos exactos detectados en el `Clip_Error_01`: instantes en segundos donde ocurre *clipping*, tramos con gran angular extremo, giros bruscos sin pausa frente a cuadros eléctricos y bombeo de exposición por *Auto-Exposure*.
  3. Anota qué solución específica aplicada en `Clip_Referencia_02` resuelve cada problema (división en *Video Parts*, focal $28\text{ mm}$, *keyframe* intermedio en giro, EV fijo).
- **Materiales necesarios:** Dos vídeos cortos de ejemplo en formato MP4 ligero + ficha de diagnóstico temporal.
- **Tiempo estimado:** 25 minutos (Fase 1).
- **Rol del formador:** Pausa el vídeo en los segundos clave para demostrar cómo un giro rápido de 1 segundo o un gran angular de $15\text{ mm}$ impiden leer un esquema o valorar un pasillo de seguridad.
- **Producto o entregable esperado:** Ficha diagnóstica con al menos 5 defectos localizados por código de tiempo y su corrección técnica asociada.
- **Criterios de éxito:** Identificación precisa de *clipping*, distorsión de focal, falta de *dwell time* y saltos de exposición; propuesta correcta de división en partes independientes.

### Actividad 2 (Aplicación técnica): «Circuito visual de 3 partes, transición día-noche y secuencia MEP»
- **Objetivo:** Programar en Twinmotion *keyframes* limpios con altura humana, focal técnica, transición solar día-noche y apertura/montaje secuencial de falso techo sobre bandejas portacables.
- **Instrucciones para el alumnado:**
  1. Abre el archivo `Bloque5_T8_EscenaBase.tm` (escena ordenada del Tema 7 con capas de Revit y atrezo diferenciadas).
  2. Crea un nuevo vídeo (`Video_Revision_MEP`) dividido en 3 *Video Parts*:
     - **Parte 1 ($10\text{ s}$):** Exterior de acceso pasando de las `17:45` a las `21:15` mediante *Time of Day* entre el primer y último *keyframe*, comprobando el protagonismo del alumbrado exterior calibrado y el balance de blancos coherente.
     - **Parte 2 ($12\text{ s}$):** Recorrido por pasillo interior a $1{,}60\text{ m}$ de altura y focal $28\text{ mm}$, con pausa de $2{,}5\text{ s}$ en el centro donde se oculta o secciona por fases la capa `02_Arq_FalsoTecho` para mostrar bandejas y luminarias.
     - **Parte 3 ($10\text{ s}$):** Entrada pausada a la sala de cuadros BT ($24\text{ mm}$, *dwell time* frontal de $3\text{ s}$ y profundidad de campo amplia `f/11` o desactivada para mantener nítidos todos los armarios y rótulos).
  3. Verifica en tiempo real que ningún tramo presenta *clipping* ni bombeos de *Auto-Exposure* y guarda la configuración para previsualización rápida.
- **Materiales necesarios:** Escena `.tm` base con capas organizadas del Tema 7 y guía rápida de atajos de *Media > Video* y *Phasing* de Twinmotion.
- **Tiempo estimado:** 80 minutos (integrado en las Fases 2 y 3).
- **Rol del formador:** Comprueba en pantalla que las velocidades se mantienen estables, que se insertan *keyframes* intermedios en las puertas y que no se promete ni simula encendido automático inexistente sin método validado.
- **Producto o entregable esperado:** Escena `.tm` guardada con el vídeo estructurado en 3 partes + previsualización en baja resolución (720p/HD rápido) o capturas secuenciales de inicio-medio-fin de cada parte.
- **Criterios de éxito:** Cero *clipping*; altura de cámara y focal coherentes; transición día-noche suave; exposición legible de las bandejas ocultas y pausa clara frente a los cuadros.

### Actividad 3 (Transferencia a proyecto real): «Storyboard cronometrado y guion de locución auditado con IA»
- **Objetivo:** Elaborar un guion técnico cronometrado y subtítulos claros con apoyo de IA sobre datos anonimizados, auditando la secuencia lógica constructiva MEP y eliminando afirmaciones normativas improcedentes.
- **Instrucciones para el alumnado:**
  1. Toma la lista anonimizada de espacios y longitudes de recorrido del proyecto `Nave_Terciaria_Anon.txt` (incluye 4 zonas: fachada, hall, pasillo técnico con bandejas y sala CGBT).
  2. Utiliza ChatGPT o Claude para generar una tabla de *storyboard* para un vídeo de $55\text{ segundos}$ (incluyendo cálculo de velocidad aproximada = distancia / tiempo, recomendaciones de focal y subtítulos de máximo 12 palabras por plano) y una propuesta de secuencia de 5 hitos para animación constructiva (*Phasing*).
  3. Audita manualmente el resultado: verifica las divisiones matemáticas de velocidad ($\le 1{,}4\text{ m/s}$ en interiores), corrige cualquier inversión del orden real de montaje (p. ej., asegurar que soportación, bandejas y cableado figuran antes del cierre de falsos techos y acabados finales) y sustituye cualquier frase que dé a entender certificación legal por un descargo técnico adecuado.
- **Materiales necesarios:** Archivo de datos anonimizados `Nave_Terciaria_Anon.txt`, plantilla de prompt y acceso a asistente de IA (o dossier de salida simulada para modo offline).
- **Tiempo estimado:** 40 minutos (Fase 4).
- **Rol del formador:** Revisa ejemplos de errores típicos generados por la IA (tiempos imposibles de lectura de subtítulos o secuencias constructivas incoherentes) y refuerza la prohibición de introducir datos reales de clientes.
- **Producto o entregable esperado:** Tabla de *storyboard* final corregida a mano + secuencia de 5 fases MEP validada + bloque de subtítulos cronometrados.
- **Criterios de éxito:** Datos 100 % anonimizados; velocidades y tiempos de lectura verificados aritméticamente; orden constructivo MEP realista; redacción técnica precisa sin promesas de cumplimiento legal automático.

---

## 6. Caso práctico

### Recorrido virtual ejecutivo y secuencia constructiva MEP para la ampliación eléctrica de una planta agroalimentaria

#### Contexto empresarial
La oficina técnica **Instalaciones Norte Ingenieros** (empresa ficticia) va a presentar ante la propiedad de una planta procesadora y su dirección de obra el proyecto de ampliación eléctrica de una nueva línea de envasado y su centro de seccionamiento/baja tensión anexo. Debido a que las obras convivirán con la actividad de la fábrica, la propiedad exige ver en una animación breve de **60 segundos** cómo convivirá la iluminación diurna y nocturna en la zona de carga, por dónde discurren las bandejas portacables sobre el falso techo sanitario y cuál será la secuencia constructiva de montaje de la sala de cuadros antes de autorizar los cortes programados de fin de semana.

#### Situación o problema
El primer borrador de animación realizado sin guion previo presenta cuatro fallos críticos que generan desconfianza en el jefe de planta:
1. La cámara entra volando desde el exterior a $6\text{ m}$ de altura y atraviesa directamente la puerta cerrada de la sala de cuadros BT a una velocidad excesiva ($4{,}5\text{ m/s}$), sin detenerse frente al cuadro general de maniobra.
2. Todo el vídeo utiliza una focal de $15\text{ mm}$ y *Auto-Exposure* activado: al pasar del muelle soleado al pasillo interior técnico, la pantalla queda casi negra durante $2\text{ segundos}$ y luego pega un destello brusco; además, el `Depth of Field` ajustado en `f/1.8` deja desenfocadas todas las bandejas portacables del fondo.
3. En la transición día-noche exterior, los proyectores LED de fachada no se ven encender de forma coherente porque la cámara termina antes de que anochezca (`18:30` en verano) y no hay contraste frente al cielo.
4. La animación de fases constructivas (*Phasing*) muestra primero la instalación de luminarias colgantes y paneles de techo sanitario y hace aparecer después las bandejas de acero inoxidable y los tubos de fuerza atravesando los paneles ya colocados.

#### Datos disponibles
- Archivo Twinmotion preparado con geometría Revit MEP organizada en carpetas (`01_Arq_Estructura`, `02_Arq_FalsoTechoSanitario`, `03_MEP_Bandejas`, `04_MEP_Cuadros_Tubos`, `05_MEP_Luminarias`, `06_Atrezo_Operacion`) y luces calibradas del Tema 6.
- Longitudes reales de recorrido interior: muelle exterior visible ($18\text{ m}$), pasillo técnico hasta sala eléctrica ($14\text{ m}$), sala de cuadros BT ($5{,}5\text{ m} \times 4{,}0\text{ m}$, altura $3{,}4\text{ m}$).
- Ficha anonimizada de proyecto con el orden real previsto en obra: (1) estructura y paramentos base $\rightarrow$ (2) soportación y bandejas principales de fuerza/control $\rightarrow$ (3) canalizaciones, cuadros BT y conexionado $\rightarrow$ (4) cierre de falso techo sanitario registrable y montaje de luminarias estancas $\rightarrow$ (5) pruebas funcionales y atrezo operativo.

#### Preguntas de análisis
1. ¿Qué tres ajustes de cámara deben cambiarse de inmediato para eliminar el efecto de vuelo mareante, el *clipping* en la puerta y la distorsión espacial en la sala de cuadros BT?
2. ¿Cómo debe resolverse la transición desde el muelle soleado hasta el interior técnico sin sufrir los $2\text{ segundos}$ de pantalla oscura por culpa de *Auto-Exposure*?
3. ¿Hasta qué hora solar debe prolongarse el último *keyframe* de la transición día-noche para mostrar con claridad el alumbrado exterior calibrado?
4. ¿Por qué la secuencia de fases constructivas del borrador resulta imposible en obra real y cuál es el orden correcto de las capas MEP?

#### Tarea a realizar
En equipos de trabajo o individualmente, deberéis:
1. **Redactar el *storyboard* definitivo de 60 segundos** (apoyándoos de forma segura con IA sobre los datos anonimizados y verificando manualmente velocidades y tiempos de lectura de subtítulos), dividiéndolo en 4 *Video Parts* lógicas con pausas (*dwell times*) frente a bandejas y al cuadro general BT.
2. **Reprogramar las cámaras y *keyframes* en Twinmotion:** fijar altura humana ($1{,}60\text{ m}$), focales entre $24\text{ mm}$ y $32\text{ mm}$, velocidades $\le 1{,}3\text{ m/s}$ en interiores, añadir *keyframes* intermedios en giros/puertas para eliminar *clipping*, ajustar `Aperture` amplia (o desactivar DoF en inspecciones) y controlar el EV manualmente en cada parte.
3. **Corregir las animaciones especiales:** llevar la transición solar hasta noche/crepúsculo cerrado (p. ej., `21:30`) para evidenciar la iluminación exterior, y reordenar la secuencia de *Phasing* (o capas por fases) respetando estrictamente la lógica constructiva MEP previa al cierre del techo sanitario.
4. **Entregar:** archivo de *storyboard* con subtítulos revisados (incluyendo descargo técnico final), capturas clave de cada parte o vídeo previsualizado de comprobación rápida en baja resolución.

#### Posibles soluciones o criterios de análisis
- **Estructura temporal recomendada (60 s):**
  - *Parte 1 (16 s):* Exterior de muelle de carga ($32\text{ mm}$, $1{,}1\text{ m/s}$), transición *Time of Day* de `18:30` a `21:30` mostrando la entrada progresiva del alumbrado de muelle a $4000\text{ K}$ (mediante doble pase fundido o visibilidad de fase si la versión lo requiere).
  - *Parte 2 (16 s):* Corte limpio a pasillo técnico ($28\text{ mm}$, $1{,}0\text{ m/s}$, $\text{EV}$ manual interior constante); pausa intermedia de $4\text{ s}$ donde una secuencia de *Phasing* o retirada selectiva del techo sanitario deja ver las bandejas de fuerza/datos y sus soportes.
  - *Parte 3 (16 s):* Corte o giro limpio con *keyframe* en umbral hacia la sala de cuadros BT ($24\text{ mm}$, DoF desactivado o $f/11$, pausa final de $3{,}5\text{ s}$ frontal al CGBT con técnico EPI a un lado).
  - *Parte 4 (12 s):* Secuencia constructiva en 4–5 hitos ordenados sobre el área clave (estructura $\rightarrow$ soportes y bandejas $\rightarrow$ cuadros y tubos $\rightarrow$ falso techo sanitario y luminarias estancas $\rightarrow$ atrezo operativo).
- **Rigor técnico y normativo:** Subtitular claramente al cierre que la secuencia ilustra la coordinación constructiva y visual del modelo BIM, quedando la secuencia definitiva de descargos eléctricos, bloqueos LOTO y verificación reglamentaria sujeta al plan de seguridad, dirección facultativa y normativa vigente aplicable (p. ej., REBT / RD 614/2001 de riesgo eléctrico en España o estándares nacionales equivalentes).

#### Preguntas de reflexión final
1. ¿Por qué en una presentación ejecutiva ante planta industrial vale más un vídeo de 55 segundos dividido en 4 planos claros que un plano secuencia de 3 minutos recorriendo cada metro de pasillo?
2. ¿Cómo reaccionas si un responsable comercial te pide acelerar la cámara al triple en el cuarto eléctrico para «hacer el vídeo más dinámico»?
3. ¿Qué ventajas concretas aporta haber organizado previamente el *Scene Graph* (Tema 7) antes de configurar el *Phasing* o las transiciones de falso techo de este Tema 8?

---

## 7. Evaluación

### Evaluación diagnóstica
- **Cuándo:** Primeros 25 minutos (Fase 1 / Actividad 1).
- **Instrumento:** Ficha de análisis comparativo de los dos clips de $30\text{ s}$ (`Clip_Error_01` vs. `Clip_Referencia_02`).
- **Propósito:** Detectar concepciones erróneas sobre uso de gran angular, velocidad de desplazamiento, *clipping* y exposición automática en movimiento.

### Evaluación formativa
- **Cuándo:** Durante las Fases 2, 3 y 4 (Actividades 2 y 3).
- **Instrumento:** Revisión de previsualizaciones rápidas en el *viewport* de Twinmotion y chequeo de la tabla de *storyboard* auditada tras consulta a IA.
- **Criterios de seguimiento:** Coherencia de focal ($24\text{–}35\text{ mm}$), estabilidad de velocidad ($\text{m/s}$), limpieza de trayectorias, uso honesto de transiciones día-noche y secuencia lógica MEP.

### Evaluación sumativa
- **Cuándo:** Fases 6 y 7 (Caso práctico + test breve final de 10 ítems).
- **Composición de la calificación:**
  - **60 %** Entregable del Caso práctico (*storyboard* cronometrado con descargo, programación de *Video Parts* / *keyframes* sin *clipping*, transición día-noche y *Phasing* MEP ordenado en previsualización o capturas secuenciales).
  - **25 %** Ejecución de la Actividad 3 (guion cronometrado y auditoría de fases constructivas asistida por IA sobre datos anonimizados).
  - **15 %** Cuestionario objetivo sobre parámetros ópticos de cámara, *keyframes*, DoF, EV en movimiento y límites de fases constructivas.

### Rúbrica de evaluación

| Criterio | Insuficiente (0–4,9) | En desarrollo (5,0–6,9) | Adecuado (7,0–8,9) | Destacado (9,0–10) |
| :--- | :--- | :--- | :--- | :--- |
| **Planificación, ritmo y focal de cámaras** | Sin *storyboard*; velocidad caótica, focal $< 18\text{ mm}$ con fuerte distorsión, sin pausas ante cuadros y con *clipping* en muros o bandejas. | Presenta guion básico, pero mantiene algún tramo acelerado, giros bruscos o falta de *dwell time* frente a equipos eléctricos clave. | Diseña *storyboard* claro con *Video Parts*, altura humana ($1{,}60\text{ m}$), focal $24\text{–}35\text{ mm}$, velocidad estable y cero *clipping*. | Logra narrativa audiovisual impecable con cálculo exacto de tiempos por metro, pausas didácticas y transiciones sin cortes forzados ni distorsión óptica. |
| **Control de *keyframes*, DoF y exposición (EV)** | Desenfoca equipos críticos por DoF extremo y deja *Auto-Exposure* provocando destellos o pantallas negras al cambiar de estancia. | Controla parcialmente DoF o EV, pero presenta ligeros saltos de brillo entre planos o desenfoque accidental de etiquetas al fondo. | Configura DoF amplio o selectivo justificado y bloquea/ajusta manualmente el EV por *keyframe* o parte de vídeo logrando nitidez homogénea. | Domina interpolación suave con *keyframes* de seguridad en giros, paralelismo vertical limpio y continuidad luminosa fiel a la calibración del Tema 6. |
| **Transición día-noche y fases constructivas MEP** | La transición solar no llega al contraste nocturno o la secuencia MEP muestra el falso techo y acabados antes que bandejas y canalizaciones. | Logra transición día-noche aceptable pero con encendido brusco/poco claro, o secuencia MEP con algún paso constructivo ambiguo. | Programa transición solar completa hasta crepúsculo/noche y secuencia de *Phasing* o capas coherente con el orden real de montaje MEP. | Combina transición día-noche creíble (respetando capacidades reales de versión) con *Phasing* técnico riguroso que expone con total claridad las instalaciones ocultas. |
| **Uso seguro de IA, subtítulos y rigor profesional** | Sube datos confidenciales sin anonimizar, acepta errores constructivos de la IA o presenta la animación como certificación de obra o normativa. | Anonimiza los datos y genera guion legible, pero deja subtítulos demasiado largos o notas finales ambiguas sobre alcance técnico. | Anonimiza datos, audita y corrige velocidades y orden MEP en las salidas de IA, y añade subtítulos claros con descargo técnico adecuado. | Produce *storyboard* y guion ejecutivo listos para producción real con trazabilidad completa, revisión constructiva validada y advertencias normativas precisas. |

### Actividad de autoevaluación
Antes de exportar o dar por terminado un recorrido virtual en Twinmotion, el alumno comprobará individualmente:
1. ¿He calculado la duración de cada *Video Part* dividiendo la distancia aproximada entre una velocidad de paseo cómoda ($\approx 1{,}0\text{–}1{,}3\text{ m/s}$) más $2\text{–}3\text{ s}$ de pausa en puntos clave?
2. ¿He revisado el recorrido completo en el visor comprobando que la cámara no atraviesa ninguna puerta, muro, luminaria suspendida ni bandeja portacables (*clipping*)?
3. ¿Las envolventes, etiquetas de cuadros y rótulos aparecen nítidos (DoF amplio o desactivado) y sin saltos de brillo provocados por *Auto-Exposure*?
4. ¿El orden de aparición de elementos en mi secuencia de *Phasing* respeta el proceso constructivo real (estructura $\rightarrow$ soportes/bandejas $\rightarrow$ cuadros/tubos $\rightarrow$ cierres/falsos techos $\rightarrow$ luminarias finales)?
5. ¿He validado manualmente el *storyboard* y subtítulos generados con apoyo de IA asegurando que los datos estaban anonimizados y que no se promete cumplimiento normativo?

---

## 8. Materiales y recursos

### Guion estructurado de diapositivas (Slides 1 a 8)

- **Slide 1: Portada — Del render estático a la narrativa técnica en movimiento**
  - Comparativa entre recorrido lúdico mareante y recorrido de ingeniería legible.
  - Idea fuerza: cada segundo de animación debe explicar un sistema, una transición espacial o una fase de montaje.

- **Slide 2: Reglas de oro de cámara técnica (altura, focal y ritmo)**
  - Esquema comparativo: focal $15\text{ mm}$ (deformación de armarios) vs. $28\text{ mm}$ (proporción fiel); altura $1{,}60\text{ m}$; tabla práctica distancia–duración a $1{,}1\text{ m/s}$ + *dwell time*.

- **Slide 3: Anatomía de *Video Parts* y *keyframes* sin colisiones**
  - Ilustración en planta de un giro de $90^\circ$ en puerta técnica: error de interpolación con 2 *keyframes* (atraviesa marco) vs. trayectoria limpia con *keyframe* intermedio en umbral.

- **Slide 4: Profundidad de campo (DoF) y exposición manual en movimiento**
  - Ejemplos visuales de `f/1.8` (etiquetas y bandejas del fondo ilegibles) vs. `f/11` / DoF desactivado en inspecciones; gráfica de transición suave de EV entre exterior e interior.

- **Slide 5: Transiciones día-noche y realismo sobre versiones de Twinmotion**
  - Línea temporal `17:30 -> 21:30` con cambio solar; explicación honesta de qué parámetros animan directamente las versiones recientes frente a la técnica profesional de doble pase fundido en edición.

- **Slide 6: Secuencias constructivas MEP con *Phasing* y *Section Cubes***
  - Diagrama de 5 hitos lógicos en obra eléctrica (estructura $\rightarrow$ bandejas $\rightarrow$ cuadros/canalización $\rightarrow$ cierres/falso techo $\rightarrow$ equipos/acabados) frente a errores frecuentes de orden inverso.

- **Slide 7: *Storyboards* y subtítulos asistidos por IA bajo control humano**
  - Plantilla segura con campos anonimizados, regla de legibilidad (máx. 10–12 palabras cada $4\text{ s}$) y ejemplo real de error constructivo detectado por el ingeniero.

- **Slide 8: Caso práctico agroalimentario y checklist de previsualización**
  - Desglose de los 4 planos en 60 segundos, criterios de evaluación y recordatorio de render previo en baja resolución antes de la exportación final (Tema 10).

### Ficha de trabajo (*Storyboard* y control de *keyframes*)
- **Documento:** `Ficha_T8_Storyboard_Recorrido_MEP.md` con tabla maestra:
  - N.º de *Video Part*
  - Recinto / Ubicación
  - Distancia estimada ($\text{m}$) y Duración ($\text{s}$) $\rightarrow$ Velocidad ($\text{m/s}$)
  - Focal ($\text{mm}$), Altura ($\text{m}$), DoF ($f$-stop / OFF) y EV inicial $\rightarrow$ final
  - Capas activas / Fase *Phasing* / Hora solar
  - Subtítulo técnico (máx. 12 palabras)
  - Revisión de *clipping* y orden constructivo (OK / Corregir).

### Plantilla técnica práctica (Prompt seguro para *storyboard* y fases MEP)
```text
ROL: Actúas como coordinador BIM eléctrico especializado en comunicación técnica y guionización de recorridos arquitectónicos e industriales.
RESTRICCIONES: Todos los datos están anonimizados. NO inventes prescripciones legales ni afirmes cumplimiento normativo. Las velocidades interiores no deben superar 1,3 m/s e incluirán pausas (dwell time) de 2 a 4 s frente a cuadros y tramos críticos.

DATOS ANONIMIZADOS DEL RECORRIDO (Duración objetivo total: 60 segundos):
- Zona 1: Fachada y muelle exterior (18 m; transición día a noche de alumbrado exterior)
- Zona 2: Pasillo técnico interior con falso techo registrable (14 m; exponer bandejas de fuerza y datos)
- Zona 3: Sala de Cuadro General BT (local 5,5 m x 4,0 m; visión frontal de envolventes y espacio de maniobra)
- Zona 4: Secuencia constructiva MEP en 5 hitos del edificio.

TAREA:
1. Devuelve una tabla de storyboard en Markdown con: Part | Tiempo_s | Longitud_m | Velocidad_m_s | Focal_mm | Altura_m | Enfoque_DoF | Subtitulo_max_12_palabras.
2. Propón una lista numerada de 5 hitos lógicos de montaje MEP para el Phasing (advirtiendo que el orden debe ser validado por dirección de obra).
3. Redacta un subtítulo final de descargo técnico (máx. 18 palabras) aclarando el carácter orientativo de la animación.
```

### Lecturas y recursos recomendados
- **Documentación oficial de Twinmotion (Epic Games):** manuales actualizados de *Video creation*, *Keyframes & Parts*, *Camera settings (Focal, DoF, Exposure)*, *Phasing Tool* y *Section Cubes* según la edición exacta instalada.
- **Principios de composición y narrativa audiovisual técnica:** guías básicas de lectura de subtítulos (tasa máxima de palabras por segundo en vídeo formativo) y planificación de *storyboards* arquitectónicos.
- **Referencias ilustrativas de seguridad y secuencia de obra eléctrica (de verificación obligatoria según país y edición vigente):** pliegos constructivos de instalaciones eléctricas en edificios, guías técnicas de riesgo eléctrico en maniobras y puesta en servicio (p. ej., REBT y RD 614/2001 en España, o códigos NFPA 70 / NFPA 70E / normas locales equivalentes).
- *Advertencia expresa:* Cualquier capacidad de animación por fotograma clave o pista de *Phasing* debe confirmarse en la versión concreta de Twinmotion empleada, y toda secuencia constructiva mostrada al cliente debe validarse con el jefe de obra y dirección facultativa competentes.

### Glosario de términos clave

| Término | Definición |
| :--- | :--- |
| ***Storyboard* técnico** | Guion visual y tabular previo a la animación que define planos, duraciones, movimientos de cámara, capas visibles y subtítulos de un recorrido. |
| ***Keyframe* (Fotograma clave)** | Registro guardado en la línea de tiempo que almacena posición de cámara, parámetros ópticos y condiciones ambientales como punto de interpolación. |
| ***Video Part* (Parte de vídeo)** | Subsecuencia independiente dentro de un proyecto de vídeo de Twinmotion que permite cortes limpios entre encuadres y configuraciones distintas. |
| **Distancia focal ($\text{mm}$)** | Medida óptica que controla la amplitud del ángulo de visión; entre $24\text{ mm}$ y $35\text{ mm}$ evita deformaciones perspectivas en armarios y salas eléctricas. |
| **Profundidad de campo (*DoF*)** | Zona de distancia que aparece nítida en imagen; conviene mantenerla amplia ($f/8\text{–}f/16$ o desactivada) en inspecciones técnicas para leer primer plano y fondo. |
| ***Dwell Time* (Tiempo de permanencia)** | Pausa intencionada de la cámara ($2\text{ a }4\text{ segundos}$) frente a un cuadro eléctrico, luminaria o detalle constructivo para facilitar la comprensión visual. |
| ***Clipping* de cámara** | Error de trayectoria en el que la cámara atraviesa físicamente muros, puertas, luminarias o bandejas durante la interpolación entre dos *keyframes*. |
| ***Phasing* (Fases constructivas)** | Herramienta temporal que muestra de forma escalonada la aparición de grupos del *Scene Graph* para ilustrar etapas de montaje o desmontaje MEP. |

---

## 9. Adaptaciones

### Sesión presencial
- **Supervisión en vivo:** Uso de proyector para revisar conjuntamente el error típico de *clipping* al cruzar puertas, mostrando cómo añadir un *keyframe* intermedio justo en el dintel o dividir en dos *Video Parts*.
- **Control de carga de máquina:** Trabajar toda la clase con la calidad del visor (*Viewport Quality*) en nivel Medio durante la edición de *keyframes*, reservando la previsualización o exportación en alta calidad para el Tema 10.
- **Dinámica grupal:** Coevaluación en parejas de 5 minutos donde un compañero ve el vídeo del otro sin audio ni explicaciones orales y debe describir qué sistema eléctrico acaba de ver; si no lo identifica, el ritmo es demasiado rápido.

### Sesión online síncrona
- **Revisión por compartición fluida:** Dado que reproducir animaciones en directo por videoconferencia suele sufrir pérdida de FPS en la transmisión, el alumnado exportará previsualizaciones rápidas en MP4 de muy baja resolución (720p o inferior y pocos segundos) o ejecutará la revisión deslizando manualmente la barra de tiempo de *Media > Video* en pantalla compartida.
- **Salas de trabajo:** En grupos de 3 personas durante la Actividad 3, un alumno genera el *storyboard* con IA, otro valida matemáticamente las velocidades y un tercero audita el orden constructivo MEP.
- **Tablero central:** Subida de tablas de *storyboard* en formato Markdown o PDF al canal del grupo antes de empezar a animar en Twinmotion.

### Sesión asíncrona
- **Guías audiovisuales paso a paso:** 3 píldoras de vídeo de 10 minutos mostrando: (1) creación de *Video Parts* y prevención de *clipping*, (2) control de focal, DoF y EV entre *keyframes*, y (3) transición solar día-noche y montaje por capas de *Phasing*.
- **Entrega y revisión diferida:** El estudiante sube al campus un único documento con la tabla de *storyboard* + enlace o archivo ligero de previsualización MP4 (máx. 60 s en resolución de borrador) para recibir comentarios cronometrados del formador por código de tiempo (p. ej., «en el segundo 0:18 reducir velocidad» o «invertir hito 3 y 4 en el *Phasing*»).

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Aprovecha directamente la jerarquía de carpetas del *Scene Graph* y la ocultación selectiva aprendidas en el Tema 7 para activar o desactivar falsos techos y atrezo en *Phasing* o *Video Parts*, manteniendo intacta la calibración de lúmenes, Kelvin y exposición del Tema 6 y los sistemas modelados en Revit MEP (Bloque 3 y Bloque 4).
- **Competencias técnicas que desarrolla:**
  - Planificación audiovisual de ingeniería mediante *storyboards* cronometrados con criterio técnico y pedagógico.
  - Manejo preciso de cámaras animadas, óptica virtual, exposición continua y secuencias temporales MEP en Twinmotion.
  - Revisión crítica de guiones y secuencias constructivas generadas con asistencia de IA.
- **Ubicación en la secuencia del programa (6 bloques / 50 temas):**
  - **Tema anterior (Bloque 5 · Tema 7 — Inserción de escenarios, fondos y ambientes dinámicos):** Organizó el entorno completo en capas separadas (arquitectura, MEP, atrezo y contexto); este Tema 8 pone en movimiento la cámara y esas capas a través del tiempo.
  - **Tema posterior (Bloque 5 · Tema 9 — Herramientas para generar presentaciones profesionales):** Todas las cámaras, estados de capas y clips animados creados en este tema se integrarán ahora en paquetes interactivos (*Presenter*, configuraciones de fases y comparativas antes-después / día-noche) adaptados a comités de cliente, gerencia o propiedad.
- **Evidencia de aprendizaje:** Tabla de *storyboard* cronometrado verificada tras consulta segura a IA, secuencia animada de $50\text{–}60\text{ s}$ configurada en Twinmotion sin *clipping* (incluyendo transición día-noche y secuencia MEP en orden constructivo real) y rótulos de descargo técnico.

---

## Siguientes pasos para el formador

1. **Preparar los dos clips de activación (`Clip_Error_01.mp4` y `Clip_Referencia_02.mp4`):** Comprobar su reproducción en el aula virtual/proyector verificando que los fallos de focal, *clipping* y *Auto-Exposure* son evidentes en menos de 30 segundos.
2. **Validar herramientas de *Phasing* en la versión instalada:** Confirmar exactamente dónde se ubican las pistas de *Phasing*, *Video Parts* y control de *Time of Day* en la interfaz de la versión de Twinmotion que usará el alumnado para evitar confusión de menús.
3. **Ajustar tiempos de previsualización de prueba:** Enseñar desde el minuto cero a configurar exportaciones rápidas de borrador (resolución reducida o *Viewport Playback*) para que el alumnado pueda validar ritmo y colisiones sin esperar renders finales de 20 minutos en clase (que se abordarán en detalle en el Tema 10).
4. **Verificar el ejemplo de error constructivo de IA:** Probar el prompt de la Actividad 3 antes de la sesión para disponer de un ejemplo real donde la IA proponga una secuencia ilógica o un cálculo de velocidad incorrecto para debatirlo en directo.
5. **Insistir en la honestidad de las fases:** Recordar al cierre que una animación de *Phasing* explica visualmente la relación espacial de las instalaciones, pero la planificación oficial de obra, descargos eléctricos y seguridad laboral corresponden exclusivamente a la dirección facultativa y al plan de obra aprobado.
