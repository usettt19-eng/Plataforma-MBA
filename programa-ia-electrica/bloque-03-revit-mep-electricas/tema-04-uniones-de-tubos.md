# Tema 4. Uniones de tubos

## 1. Ficha del tema

| Campo | Detalle |
| :--- | :--- |
| **Título del tema** | Uniones de tubos |
| **Bloque y posición dentro del programa** | Bloque 3: Modelado 3D – Revit MEP eléctricas — Tema 4 de 5 (Tema 20 de 50 del programa) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Haber completado los Temas 1, 2 y 3 del Bloque 3 (tipos `Conduit with Fittings`, tamaños métricos en `Conduit Settings` y trazado 3D de redes de fuerza, alumbrado y acometidas). |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado será capaz de configurar las preferencias de enrutamiento (*Routing Preferences*) de familias de tubos en Revit MEP, controlar la inserción automática y manual de codos, tes, reducciones y manguitos, diagnosticar errores de enrutamiento (*«No auto-route solution»*) y desconexiones en 3D, y validar que ángulos y radios de curvatura respondan a criterios reales de montaje y tendido de cables. |

---

## 2. Objetivos de aprendizaje

Al completar esta sesión de 4 horas, el alumnado será capaz de:

1. **Configurar** las reglas y familias asignadas en las propiedades de tipo de `Conduit with Fittings` (*Bend*, *Tee*, *Cross*, *Transition*, *Union*), discriminando qué uniones tienen sentido constructivo en canalizaciones eléctricas *(Nivel de Bloom: Aplicar)*.
2. **Controlar** la colocación automática frente a la inserción manual de codos estándar, bayonetas a $45^\circ$, manguitos de empalme y transiciones de diámetro en recorridos 3D complejos *(Nivel de Bloom: Aplicar)*.
3. **Diagnosticar** y resolver errores habituales de enrutado (*«No auto-route solution»*, desalineaciones milimétricas y restricciones angulares) así como desconexiones ocultas utilizando `Show Disconnects` y herramientas de edición geométrica *(Nivel de Bloom: Analizar)*.
4. **Evaluar** la viabilidad constructiva de un trazado 3D en Revit contrastando los radios de curvatura del modelo y la suma acumulada de ángulos entre registros frente a las exigencias reales de curvado de tubo y tracción de cables *(Nivel de Bloom: Evaluar)*.
5. **Diseñar** árboles de diagnóstico y listas de control técnico asistidas por IA (ChatGPT/Claude) sobre parámetros anonimizados para depurar recorridos defectuosos antes de incorporar accesorios especiales en el Tema 5 *(Nivel de Bloom: Crear)*.

---

## 3. Contenidos esenciales

### 3.1. Preferencias de enrutamiento (*Routing Preferences*) en familias de conductos

#### Explicación breve y clara
Cuando dibujamos un tramo en Revit con `Conduit with Fittings`, el programa consulta automáticamente las **preferencias de enrutamiento** definidas en el cuadro *Editar tipo* (`Edit Type > Fittings`) del conducto seleccionado. A diferencia de las tuberías hidráulicas —donde la ventana *Routing Preferences* admite rangos de diámetro por fila—, en conductos eléctricos de Revit el tipo asigna directamente las familias cargables `.rfa` de categoría `Conduit Fittings` para cinco funciones: **Curva/Codo (`Bend`)**, **Te (`Tee`)**, **Cruz (`Cross`)**, **Transición (`Transition`)** y **Unión/Manguito (`Union`)**.

Desde el punto de vista de la ingeniería eléctrica, aquí surge una diferencia crítica frente a fontanería: en una instalación eléctrica **no existen «tes soldadas ciegas»** donde los cables se empalmen dentro de un tubo sin tapa registrable. Por ello, cuando un tipo de tubo necesita una derivación (`Tee`), debe apuntar a una familia registrable (como una conduleta T o caja de derivación en el Tema 5) o evitarse el enlace directo entre tubos en T si se trabaja con derivación mediante caja de registro. De igual modo, los manguitos (`Union`) y reducciones (`Transition`) deben corresponder al material real configurado (roscado, compresión EMT o encolado PVC/LSZH).

#### Conceptos clave
- **Curva estándar (*Bend*):** Unión angular cargable que resuelve cambios de dirección horizontales o verticales según el radio de curvatura configurado en su tabla de consulta (*Lookup Table*).
- **Te de deriva y Cruz (*Tee / Cross*):** Ranuras de enrutado para intersecciones a $90^\circ$ entre tres o cuatro tramos; en instalaciones eléctricas reales solo resultan aceptables si representan elementos registrables con tapa (nunca derivaciones ocultas inaccesibles).
- **Transición (*Transition*) y Unión (*Union*):** Familias encargadas respectivamente de cambiar de diámetro nominal en un tramo lineal (reducción/ampliación) y de empalmar dos barras rectas consecutivas al dividir un segmento (`Split Element`).
- **Tabla de consulta (*Lookup Table .csv*):** Archivo interno incrustado dentro de cada familia `Conduit Fitting` que relaciona cada diámetro nominal del proyecto con su diámetro exterior, longitud de encaje y radio de curvatura real.

#### Definiciones necesarias
- **Preferencias de enrutamiento de conducto (*Conduit Fittings Routing*):** Conjunto de asignaciones en las propiedades de tipo de un conducto (`Edit Type`) que determina qué familia `.rfa` de unión insertará Revit de forma automática al girar, bifurcar, dividir o cambiar de diámetro.
- **Manguito de empalme (*Coupling / Union*):** Pieza lineal corta roscada, de compresión o enchufable que une mecánicamente dos tramos rectos colineales de tubo comercial (habitualmente en barras de $3\text{ m}$ en Europa o $10\text{ ft}$ en estándar EMT/RGS).

#### Ejemplo práctico realista
En una nave industrial con tubería vista de acero galvanizado rígido roscado (`Tubo-RSC-Acero`, diámetros $20, 25, 32, 40, 50, 63\text{ mm}$), el proyectista abre `Edit Type > Fittings` y verifica la configuración siguiente:
- `Bend`: `Curva_Acero_Roscado_RadioLargo.rfa` (radio medio $6D$, donde para Ø $50\text{ mm}$ el radio de eje resulta $R = 300\text{ mm}$).
- `Union`: `Manguito_Roscado_Acero.rfa` (insertado automáticamente al usar `Split Element` cada $3{,}00\text{ m}$ si se modelan tramos por longitud comercial).
- `Transition`: `Reduccion_Concentrica_Roscada.rfa` (por ejemplo, transición de Ø $40\text{ mm}$ a Ø $32\text{ mm}$ en salida hacia motor tras derivación).
- `Tee` / `Cross`: dejadas en `<None>` en la plantilla de tubería vista rígida para impedir que los modeladores creen tes ciegas imposibles al conectar dos tubos a $90^\circ$, obligando a insertar explícitamente cajas de registro o conduletas T en el Tema 5.
*Nota de verificación normativa:* Las restricciones sobre prohibición de empalmes ocultos dentro de tubos, accesibilidad de registros y continuidad de tierra de canalizaciones metálicas deben comprobarse siempre frente al reglamento eléctrico aplicable en el país del proyecto (p. ej., REBT en España, IEC 60364 o NFPA 70/NEC) y su edición vigente.

#### Errores frecuentes
- Dejar `<None>` en el campo `Bend` o `Transition` al duplicar un nuevo tipo de tubo, provocando fallos inmediatos cada vez que se intenta girar o cambiar de diámetro en 3D.
- Asignar familias de codos de PVC de radio corto a un tipo de conducto de acero rígido roscado de gran diámetro, falseando las interferencias en obra y el catálogo de mediciones.
- Mantener una te de fontanería (`Tee - Standard`) asignada al tipo de conducto eléctrico y generar derivaciones directas de tubo a tubo sin tapa de registro ni posibilidad física de pasar los cables.
- Cargar una familia de unión con *Lookup Table* en pulgadas en un tubo con tabla métrica (`20, 25, 32 mm`), generando errores de búsqueda de diámetro o uniones gigantes/minúsculas.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué en instalaciones eléctricas de tubos no debe permitirse modelar una «te ciega» de unión directa entre tres tubos como en fontanería?
2. ¿Qué papel desempeña la *Lookup Table* dentro de una familia de codo (`Bend`) cuando Revit inserta automáticamente un giro en un tubo Ø $40\text{ mm}$?
3. ¿Qué diferencia hay en el modelo entre dejar `Tee = <None>` y asignar una te genérica dentro de las propiedades de tipo de un conducto?

---

### 3.2. Comportamiento automático vs. inserción manual de codos, reducciones y transiciones

#### Explicación breve y clara
Al dibujar canalizaciones en Revit, la herramienta intenta resolver automáticamente las uniones cada vez que el usuario hace clic para cambiar de dirección, cambia la cota `Middle Elevation` en mitad de un trazado (creando una bayoneta automática) o cambia el selector de diámetro en la barra de opciones (insertando una `Transition`). Sin embargo, el **enrutado automático tiene límites geométricos**: cuando los ángulos son reducidos, existen dos tramos con distinta pendiente o las tolerancias entre ejes son estrechas, conviene alternar entre automatización y **edición/inserción manual** (`Conduit Fitting` desde la pestaña *Systems*, herramientas `Trim/Extend Single Element`, `Align`, `Split Element` y ajuste del pinzamiento `+` en las uniones para convertir codos en tes o añadir derivaciones controladas).

#### Conceptos clave
- **Enrutado automático en línea (*Auto-Routing*):** Inserción instantánea de `Bend`, `Transition` o bayoneta de cambio de nivel al variar dirección, diámetro o elevación mientras se ejecuta `Draw Conduit`.
- **Inserción manual de accesorios (`Conduit Fitting`):** Colocación explícita de una unión cargable sobre el extremo o punto medio de un tubo ya trazado para forzar una geometría o ángulo específico.
- **Bayoneta u *Offset* en $45^\circ$:** Salto coordinado de cota vertical u horizontal mediante dos codos consecutivos a $45^\circ$ (o $30^\circ$) en lugar de dos codos cerrados a $90^\circ$, facilitando el tendido y paso de cables bajo vigas o conductos.
- **Edición por signos `+` / `-` y rotación de unión:** Controles gráficos sobre uniones seleccionadas que permiten cambiar su orientación en el espacio 3D o convertir un codo existente en derivación cuando el tipo lo permite.

#### Definiciones necesarias
- **Bayoneta (*Offset Bend*):** Desvío geométrico paralelo formado por dos curvas de ángulo idéntico y opuesto (habitualmente $30^\circ$ o $45^\circ$) conectado por un tramo inclinado intermedio para salvar un obstáculo estructural o de otra disciplina.
- **Recortar/Extender (`Trim/Extend`):** Comando de modificación en Revit MEP que alarga dos tubos no paralelos hasta su intersección virtual insertando automáticamente el codo correspondiente si existe solución geométrica válida.

#### Ejemplo práctico realista
En una sala de bombas y climatización, un tubo de acero EMT Ø $32\text{ mm}$ discurre pegado al muro a cota $+2{,}90\text{ m}$ y debe salvar un pilar saliente de $350\text{ mm}$ de ancho antes de entrar en el subtablero de fuerza, reduciéndose al final a Ø $25\text{ mm}$ para acometer a una caja lateral de variador.
- **Con enrutado automático brusco:** Si el modelador baja manualmente con giros a $90^\circ$ rodeando el pilar en $10\text{ cm}$, inserta cuatro codos cerrados a $90^\circ$ en menos de $1{,}20\text{ m}$, haciendo casi imposible pasar después los cables multipolares.
- **Con control manual + automático optimizado:** El modelador ejecuta una **bayoneta suave a $30^\circ$** antes del pilar (codo $30^\circ$ + tramo inclinado + codo $30^\circ$), continúa recto, divide el tramo con `Split Element` a $1{,}50\text{ m}$ del equipo e inserta manualmente o por cambio de diámetro la `Transition` concéntrica Ø $32\to 25\text{ mm}$, rematando con un único codo amplio hacia el conector del variador.

#### Errores frecuentes
- Cambiar la elevación `Middle Elevation` en la cinta de opciones con distancia horizontal disponible de apenas $80\text{ mm}$, forzando codos verticales imposibles o causando el colapso del enrutamiento.
- Utilizar `Trim/Extend` entre dos tubos situados a cotas $Z$ diferentes de $3\text{ mm}$ sin haberlos alineado antes en vista de sección, generando codos con ángulo extraño de $89{,}4^\circ$ o errores de conexión.
- Girar manualmente una unión usando el comando `Rotate` sin desconectar previamente, rompiendo la conectividad geométrica del tramo conectado.
- Reducir diámetros en mitad de una línea principal sin motivo de derivación, bloqueando el paso del haz de cables calculado en el Bloque 1.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué una bayoneta a $30^\circ$ o $45^\circ$ resulta constructivamente superior a rodear una viga con cuatro codos seguidos a $90^\circ$?
2. ¿Qué comprobación previa debes realizar antes de ejecutar `Trim/Extend to Corner` entre dos tubos que parecen coplanarios en planta?
3. ¿En qué situaciones prácticas conviene insertar un `Conduit Fitting` manualmente en lugar de depender exclusivamente del trazado automático `Draw Conduit`?

---

### 3.3. Resolución de errores comunes de enrutamiento («No auto-route solution» y desconexiones)

#### Explicación breve y clara
Uno de los mensajes más frecuentes y frustrantes al modelar instalaciones eléctricas en Revit es **`No auto-route solution was found`** (*No se encontró ninguna solución de enrutamiento automático*). Lejos de ser un fallo aleatorio del programa, responde casi siempre a una de cuatro causas geométricas o paramétricas exactas:
1. **Falta de espacio físico para el radio del codo:** La distancia entre el punto de salida de un conector o el último vértice y el siguiente cambio de dirección es menor que la suma de longitudes de avance de los dos codos requeridos.
2. **Desalineación milimétrica fuera de plano:** Dos tramos parecen alineados en planta, pero difieren en eje $Z$ o presentan una desviación de $0{,}5^\circ$ que impide insertar un codo estándar ortogonal.
3. **Restricción de ángulos permitidos (`Angles`):** El giro intentado (p. ej. $17^\circ$ o $60^\circ$) está desactivado en `Electrical Settings > Conduit Settings > Angles` o fuera del rango de la familia de curva cargada.
4. **Falta de asignación o tabla inválida en `Routing`:** Falta la familia `Bend`/`Transition` o el diámetro elegido no existe en la *Lookup Table* de la unión.

Por otra parte, cuando un modelador «fuerza» visualmente un tubo acercándolo en planta sin enganchar el pinzamiento (*snap*) al conector o unión, el 3D parece correcto a primera vista pero existen **desconexiones abiertas**, localizables sistemáticamente con **`Show Disconnects` (`Mostrar desconexiones`)**.

#### Conceptos clave
- **Diagnóstico de `No auto-route solution`:** Protocolo estructurado para aislar si el fallo proviene de falta de longitud geométrica, ángulo no permitido, desfase en eje $Z$ o configuración de familia de unión.
- **Configuración de ángulos permitidos (`Conduit Settings > Angles`):** Control de proyecto que restringe o habilita ángulos comerciales reales ($90^\circ, 60^\circ, 45^\circ, 30^\circ, 22{,}5^\circ, 11{,}25^\circ$) o permite cualquier ángulo (*Use Any Angle* — peligroso en obra si se abusa).
- **Auditoría con `Show Disconnects`:** Herramienta de la pestaña *Analyze* (`Analizar > Mostrar desconexiones > Conducto/Bandeja eléctrica`) que marca con un triángulo amarillo de advertencia cada extremo abierto no terminado en conector o unión válida.
- **Alineación exacta en sección (`Align` / `Inherit Elevation`):** Técnicas para igualar exactamente las cotas y ejes de dos tramos antes de unirlos mediante `Trim/Extend` o arrastrar extremos hasta el *snap* de conector.

#### Definiciones necesarias
- **Desconexión de conducto (*Conduit Disconnect*):** Extremo libre de un tramo de tubo o unión que no enlaza lógicamente con otro elemento ni con un conector de equipo/caja, rompiendo la continuidad física del recorrido y generando discrepancias en mediciones y detección de choques.
- **Longitud de avance del codo (*Fitting Take-off / Tangent Length*):** Distancia mínima lineal desde la intersección teórica de dos ejes hasta el punto de conexión del codo; la suma de longitudes de dos curvas opuestas marca el tramo recto mínimo necesario para que Revit resuelva el giro.

#### Ejemplo práctico realista
Un proyectista intenta conectar un tubo Ø $50\text{ mm}$ (`Curva_Acero_RadioLargo`, radio $R = 300\text{ mm}$, longitud de avance por curva $\approx 330\text{ mm}$) que baja verticalmente desde el techo hasta el conector superior de un subtablero situado a solo $220\text{ mm}$ de separación horizontal respecto a la vertical del tubo. Al hacer clic, Revit lanza **`No auto-route solution was found`**.
- **Diagnóstico matemático:** Para ejecutar un giro en bayoneta de $90^\circ\to 90^\circ$ o de $45^\circ$ con radio $300\text{ mm}$, el desplazamiento horizontal mínimo disponible debe superar los $330 + 330\text{ mm}$ (o al menos $280\text{ mm}$ en ángulo $45^\circ$). En $220\text{ mm}$ de separación es físicamente imposible curvar un tubo rígido de Ø $50\text{ mm}$ sin aplastarlo.
- **Resolución técnica:** El proyectista desplaza el eje de la bajante horizontalmente $400\text{ mm}$ más atrás usando `Align`, activa `Inherit Elevation` desde el conector superior del tablero y vuelve a ejecutar `Draw Conduit`: Revit resuelve la curva suave de radio $300\text{ mm}$ sin errores. Seguidamente activa `Analyze > Show Disconnects (Conduit)` y verifica que ningún extremo queda marcado con advertencia amarilla tras la edición.

#### Errores frecuentes
- Activar indiscriminadamente `Use Any Angle` en `Conduit Settings > Angles` para quitar errores rápidos de pantalla, generando en el modelo codos de $13{,}7^\circ$ o $71{,}2^\circ$ imposibles de comprar ni curvar con precisión en obra.
- Acercar a ojo dos extremos de tubo en vista de planta hasta que «parecen tocarse» sin ver el punto de enganche magnético (*endpoint snap*), dejando desconexiones invisibles en 3D y cortes en la lista de materiales.
- Culpar a la familia de tablero o del tubo cuando en realidad dos segmentos están desfasados $2\text{ mm}$ en el eje vertical $Z$ (comprobable activando la sección o igualando explícitamente `Middle Elevation`).
- Ignorar los avisos de `Show Disconnects` en extremos terminales abiertos que deberían estar rematados en cajas, tapas o conectores de equipo.

#### Preguntas que el alumnado debería poder responder
1. ¿Cuál es la primera comprobación geométrica que debes hacer si `No auto-route solution` aparece al intentar unir dos tubos con `Draw Conduit` en una distancia corta?
2. ¿Por qué activar `Use Any Angle` en `Conduit Settings` suele trasladar el problema del modelo BIM a la obra en lugar de resolverlo?
3. ¿Cómo localizas rápidamente en un modelo grande todos los tramos de tubo que parecen unidos en planta pero presentan roturas milimétricas en 3D?

---

### 3.4. Radios de curvatura de obra, ángulos imposibles y límites de tracción de cables

#### Explicación breve y clara
Un modelo 3D geométricamente «limpio» en pantalla puede seguir siendo **inconstruible en obra** si ignora las leyes físicas del doblado de tubos y del tendido de conductores. Tanto las tuberías metálicas/plásticas como los propios cables multipolares o unipolares poseen **radios mínimos de curvatura** definidos por fabricante y reglamento para no estrangular la sección ni fracturar el aislamiento. Además, en la práctica eléctrica existe un límite acumulado de curvatura entre puntos de tiro accesibles (habitualmente un máximo de **$270^\circ$ a $360^\circ$** —equivalente a tres o cuatro codos a $90^\circ$— o una longitud recta máxima antes de intercalar una caja de tiro o conduleta, según normativa aplicable), porque el rozamiento de la guía pasacables y los cables crece exponencialmente con cada curva. Por ello, antes de pasar al Tema 5 (accesorios de registro), debemos auditar ángulos imposibles, radios reales y suma angular por tramo.

#### Conceptos clave
- **Radio mínimo de curvatura del tubo vs. del cable:** El radio de giro adoptado por la familia `Bend` en Revit debe satisfacer el mayor de dos límites: el radio mínimo de curvado comercial del tubo (p. ej., $6D\text{–}10D$ en tubos rígidos metálicos de gran diámetro) y el radio mínimo de curvatura admisible del cable alojado (p. ej., $8D_{\text{cable}}\text{ a }15D_{\text{cable}}$ según tipo de aislamiento/armadura y ficha del fabricante).
- **Suma angular acumulada entre registros:** Recuento total de grados de cambio de dirección en un tramo continuo de tubo entre dos cajas o envolventes accesibles; superar el límite admisible (ilustrativamente $270^\circ\text{–}360^\circ$) impide tender el cableado sin dañar la cubierta.
- **Ángulos imposibles y codos espalda con espalda (*Back-to-Back Bends*):** Dos curvas a $90^\circ$ conectadas directamente sin tramo recto suficiente ni registro crean un cuello de botella mecánico imposible de alambrar en campo.
- **Auditoría de radios y sumas angulares asistida por IA:** Exportación anonimizada de tablas de uniones (`Conduit Fittings Schedule` con ángulo y radio por tramo) para que ChatGPT o Claude clasifique anomalías angulares y genere checklists de revisión humana antes de emitir planos.

#### Definiciones necesarias
- **Radio de curvatura ($R_{\text{min}}$):** Radio mínimo medido al eje del tubo o cara interior de la curva que permite doblar la canalización y alojar conductores sin abolladuras, ovalización excesiva ni esfuerzos mecánicos peligrosos sobre el aislamiento.
- **Tensión de tiro y coeficiente de rozamiento (*Pulling Tension*):** Fuerza axial necesaria para arrastrar los cables por el interior del tubo; aumenta exponencialmente con el ángulo total acumulado ($\theta_{\text{total}}$) de las curvas según el factor $e^{\mu \theta}$.

#### Ejemplo práctico realista
En una línea de acometida con cable tetrapolar aislado XLPE $4\times 50\text{ mm}^2$ (diámetro exterior aproximado $D_{\text{cable}} \approx 28\text{ mm}$) alojado en tubo rígido de Ø $63\text{ mm}$:
- Según ficha técnica ilustrativa del fabricante, el radio mínimo de curvatura en instalación fija del cable armado/XLPE es $12 \times D_{\text{cable}} = 12 \times 28\text{ mm} = 336\text{ mm}$ (y el tubo comercial Ø $63\text{ mm}$ tiene curvas estándar de radio $R = 400\text{ mm}$).
- Si un modelador dejó en Revit una curva genérica de $R = 120\text{ mm}$, la familia permite dibujar sin dar error en pantalla, pero en obra el cable quedará dañado o no pasará por la curva.
- Además, en un tramo de $24\text{ m}$ entre el cuarto general y la cámara frigorífica, el trazado actual acumula $5$ codos de $90^\circ$ ($450^\circ$ totales). Al auditar el tramo antes del Tema 5, el ingeniero decide reemplazar el tercer codo por una **caja de paso o conduleta registrable** (que se incorporará como accesorio en el Tema 5), dividiendo el recorrido en dos subtramos de $180^\circ$ y $180^\circ$ perfectamente tendibles.
*Nota de verificación normativa:* Los radios mínimos exactos de curvatura de cables, diámetros de tubo y número máximo de curvas entre registros (p. ej., límite de $360^\circ$ o exigencias específicas según tipo de canalización) son ilustrativos y deben verificarse siempre con la normativa vigente en el país aplicable (REBT, IEC 60364, NFPA 70/NEC) y los catálogos certificados de fabricante.

#### Errores frecuentes
- Modificar manualmente el parámetro `Bend Radius` dentro de una familia para reducirlo a la mitad con tal de «hacer que quepa» entre dos conductos de climatización, violando las leyes físicas de curvado del cable.
- Encadenar 4 o 5 curvas a $90^\circ$ ($360^\circ\text{–}450^\circ$) en un mismo tramo continuo sin intercalar una caja de tiro o conduleta registrable.
- Conectar dos curvas a $90^\circ$ directamente en U (*back-to-back*) dejando $0\text{ mm}$ de tramo recto para empalme o inserción de guía pasacables.
- Asumir que porque Revit no muestra ningún mensaje de advertencia amarillo, el radio de curvatura y el tendido de cables cumplen el reglamento y las fichas técnicas del fabricante.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué el radio mínimo de una curva en Revit debe contrastarse tanto con el diámetro comercial del tubo como con el radio mínimo admisible del cable que irá dentro?
2. ¿Qué problema físico real ocurre en obra cuando un tramo continuo de tubo entre dos registros acumula más de $360^\circ$ en curvas?
3. ¿Cómo utilizarías una tabla de planificación de `Conduit Fittings` junto con un asistente de IA anonimizado para detectar ángulos irregulares o curvas incompatibles antes de cerrar el modelo?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** combina diagnóstico en directo de modelos bloqueados por errores de enrutamiento, microlecciones orientadas a preferencias de enrutamiento y física de curvado, práctica intensiva de depuración sobre el archivo del Tema 3 y resolución de un caso industrial húmedo.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
| :--- | :---: | :--- | :--- |
| **1. Apertura, diagnóstico y activación** | 00:00 – 00:25 (25 min) | Recoge la continuidad del Tema 3, aplica la evaluación diagnóstica breve y lanza la **Actividad 1** con un modelo que dispara errores *«No auto-route solution»* y desconexiones. | En parejas, intenta conectar 3 tramos preparados en el modelo muestra, observa exactamente cuándo falla Revit y formula hipótesis sobre las causas geométricas o de familia. |
| **2. Microlearning técnico I (3.1 y 3.2)** | 00:25 – 00:55 (30 min) | Explica `Edit Type > Fittings` (*Bend, Tee, Cross, Transition, Union*), el criterio eléctrico contra tes ciegas y demuestra en vivo automático vs. manual (`Bayoneta 45°`, `Split`, `Trim/Extend`). | Inspecciona las propiedades de tipo de sus conductos del Tema 3, elimina tes ciegas si existen y practica una bayoneta suave a $30^\circ\text{–}45^\circ$ frente a un obstáculo. |
| **3. Práctica guiada de aplicación (Actividad 2)** | 00:55 – 01:40 (45 min) | Lanza la **Actividad 2**, supervisa la configuración de *Routing Preferences*, la resolución de 4 desconexiones implantadas y la validación con `Show Disconnects`. | Configura preferencias de enrutamiento de sus tipos `LSZH` y `EMT`, corrige 4 errores de enrutamiento en el modelo del Tema 3 y depura desconexiones hasta lograr cero avisos en `Show Disconnects`. |
| **Descanso breve** | 01:40 – 01:55 (15 min) | Pausa técnica y preparación del paquete de datos del caso industrial. | Descanso activo e intercambio informal. |
| **4. Microlearning técnico II (3.3 y 3.4)** | 01:55 – 02:20 (25 min) | Desglosa las 4 causas raíz de *«No auto-route solution»*, el riesgo de `Use Any Angle`, el cálculo ilustrativo de radios mínimos de tubo/cable y el límite acumulado de curvas entre registros. | Verifica el parámetro `Bend Radius` de sus curvas Ø $50\text{ mm}$ y revisa sus tramos del Tema 3 para detectar acumulaciones excesivas de curvas (> $270^\circ\text{–}360^\circ$). |
| **5. Resolución del caso práctico** | 02:20 – 03:05 (45 min) | Presenta el caso **«Conservas del Guadalquivir, S.A.»** (34 errores de enrutado, 19 desconexiones, tes ciegas y 5 codos seguidos), orientando el diagnóstico en equipos. | En equipos de 3-4 personas, clasifica los errores de la tabla CSV anonimizada del caso, define las correcciones de `Routing`, radios y registros, y prueba un árbol de diagnóstico asistido por IA. |
| **6. Puesta en común y auditoría cruzada** | 03:05 – 03:25 (20 min) | Modera la puesta en común de 3 equipos, compara decisiones sobre radios de curvatura e intercalado de registros y corrige posibles falsas suposiciones de la IA. | Presenta su protocolo de rescate (4 min/equipo), contrasta los resultados del análisis tabular con IA y valida la coherencia constructiva. |
| **7. Transferencia a proyecto real (Actividad 3)** | 03:25 – 03:45 (20 min) | Guía la **Actividad 3** facilitando la plantilla de auditoría de uniones y radios de curvatura aplicable al proyecto real o integrador del alumno. | Elabora su matriz de reglas de curvado y uniones por material + ejecuta un prompt anonimizado de auditoría sobre tabla de `Conduit Fittings` verificando límites manualmente. |
| **8. Síntesis, evaluación sumativa y cierre** | 03:45 – 04:00 (15 min) | Resume las 5 claves del tema, administra la prueba sumativa corta + autoevaluación y enlaza directamente con el **Tema 5** (cajas de registro, conduletas y soportes). | Responde el cuestionario técnico final y la autoevaluación; guarda su archivo `.rvt` saneado sin desconexiones listo para insertar accesorios en el Tema 5. |

*Suma total verificada: $25 + 30 + 45 + 15 + 25 + 45 + 20 + 20 + 15 = \mathbf{240\text{ minutos (4 horas)}}$.*

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «El rompecabezas de las cuatro uniones imposibles»

- **Nombre:** El rompecabezas de las cuatro uniones imposibles.
- **Objetivo:** Experimentar en primera persona los cuatro bloqueos clásicos de enrutado de Revit MEP para identificar su causa raíz antes de aplicar soluciones de prueba y error.
- **Instrucciones para el alumnado:**
  1. Abrid en parejas el archivo de muestra `Kit-T4-ErroresEnrutado.rvt` (4 zonas numeradas A, B, C y D).
  2. Intentad conectar con `Draw Conduit` o `Trim/Extend` los pares de tubos indicados en cada zona sin modificar las propiedades previas: anotad el mensaje exacto que arroja Revit o la geometría defectuosa resultante.
  3. Formulad en 6 minutos una hipótesis técnica por cada zona: ¿falta espacio para el radio del codo, hay un desfase milimétrico en $Z$, el ángulo está bloqueado en `Conduit Settings` o falta asignar una familia en `Edit Type > Fittings`?
- **Materiales necesarios:** Archivo `Kit-T4-ErroresEnrutado.rvt` (o secuencia de capturas/vídeo corto si se trabaja sin Revit local en esta fase), ficha de trabajo, cronómetro.
- **Tiempo estimado:** 15 minutos (integrados en la Fase 1).
- **Rol del formador:** Evitar dar la respuesta directa; guiar con pistas (*«Probad a cambiar al corte transversal en la Zona B»*, *«Mirad `Edit Type > Fittings` en la Zona D»*) y sistematizar las 4 causas en pizarra.
- **Producto o entregable esperado:** Tabla de diagnóstico de 4 filas con causa raíz identificada y solución propuesta para cada zona A–D.
- **Criterios de éxito:** Identificación correcta de al menos 3 de las 4 causas raíz sin recurrir al botón `Use Any Angle` como atajo indiscriminado.

---

### Actividad 2 (Aplicación técnica): «Saneamiento de uniones, bayonetas y cero desconexiones»

- **Nombre:** Saneamiento de uniones, bayonetas y cero desconexiones.
- **Objetivo:** Configurar correctamente las preferencias de enrutamiento de los conductos del modelo propio y depurar completamente un recorrido 3D eliminando ángulos anómalos, errores de transición y desconexiones.
- **Instrucciones para el alumnado:**
  1. Abrid vuestro archivo `Apellido_Nombre_T3_Trazado3D.rvt` (o el modelo base `Kit-T4-ModeloPracticas.rvt` que incluye 4 zonas con incidencias preparadas).
  2. Auditad `Edit Type > Fittings` en los tipos `Tubo-LSZH-Fuerza` y `Tubo-EMT-Alumbrado`: asegurad familias coherentes en `Bend`, `Transition` y `Union`, y bloquead `Tee = <None>` donde deban usarse cajas registrables en lugar de tes ciegas.
  3. Verificad en `Electrical Settings > Conduit Settings > Angles` que solo están habilitados ángulos comerciales normalizados ($90^\circ, 60^\circ, 45^\circ, 30^\circ, 22{,}5^\circ$).
  4. Corregid un tramo con salto de cota sustituyendo codos cerrados a $90^\circ$ por una bayoneta limpia a $30^\circ$ o $45^\circ$, realizad una reducción controlada de diámetro Ø $40\text{ mm}\to 32\text{ mm}$ (`Transition`) y solucionad al menos 2 desconexiones ocultas utilizando `Analyze > Show Disconnects (Electrical/Conduit)` + `Align` + `Trim/Extend`.
  5. Comprobad las tablas de ángulos y radios mínimos de los codos en una tabla temporal de `Conduit Fittings`, verificando que ninguna curva supera límites mínimos realistas de doblado y que ningún tramo acumula más de $270^\circ\text{–}360^\circ$ sin marcar necesidad de registro (preparando el Tema 5).
- **Materiales necesarios:** Revit MEP, archivo del Tema 3 o `Kit-T4-ModeloPracticas.rvt` con librería de uniones métricas cargada.
- **Tiempo estimado:** 45 minutos (Fase 3).
- **Rol del formador:** Mostrar en los primeros 5 minutos cómo activar `Show Disconnects` y cómo alinear exactamente en el eje $Z$ dos tramos desfasados $4\text{ mm}$; revisar las configuraciones de `Angles` y *Routing* mesa por mesa o por pantalla compartida.
- **Producto o entregable esperado:** Archivo `Apellido_Nombre_T4_UnionesLimpias.rvt` con cero advertencias de `Show Disconnects` en la zona trabajada y `Routing Preferences` depuradas.
- **Criterios de éxito:** El indicador `Show Disconnects` muestra $0$ desconexiones no intencionadas en las líneas trabajadas; todos los codos poseen ángulos comerciales reales ($\in \{30^\circ, 45^\circ, 90^\circ\}$); los tipos de tubo tienen `Transition` y `Union` métricas coherentes.

---

### Actividad 3 (Transferencia a proyecto real): «Árbol de diagnóstico de enrutado y auditoría de radios con IA»

- **Nombre:** Árbol de diagnóstico de enrutado y auditoría de radios con IA.
- **Objetivo:** Crear un procedimiento propio de control de calidad de uniones y radios de curvatura para proyectos reales o el proyecto integrador, apoyándose en tablas exportadas y prompts anonimizados.
- **Instrucciones para el alumnado:**
  1. Completad la **Plantilla de Control de Uniones y Radios de Curvatura** (Sección 8.3) definiendo las familias permitidas por material de conducto, los ángulos autorizados en proyecto, el criterio de radio mínimo tubo/cable y el límite máximo angular entre cajas de registro según normativa a verificar en vuestra jurisdicción.
  2. Tomad la tabla CSV anonimizada `Muestra_Conduit_Fittings.csv` (conteniendo tipo de unión, diámetro nominal en $\text{mm}$, ángulo en grados, radio de curvatura en $\text{mm}$ y código de tramo) y redactad un **prompt en ChatGPT o Claude** pidiendo identificar filas con ángulos no comerciales, radios inferiores al mínimo de referencia dado en el prompt y errores de congruencia material.
  3. Auditad manualmente la respuesta de la IA comprobando con calculadora que no ha pasado por alto ninguna fila límite (por ejemplo, una curva Ø $50\text{ mm}$ con $R = 250\text{ mm}$ cuando el cable exige $R_{\text{min}} = 320\text{ mm}$) y añadiendo la advertencia obligatoria de verificación humana en proyecto real.
- **Materiales necesarios:** Plantilla técnica práctica (Sección 8.3), archivo `Muestra_Conduit_Fittings.csv`, acceso a ChatGPT o Claude.
- **Tiempo estimado:** 20 minutos (Fase 7).
- **Rol del formador:** Confirmar la ausencia total de datos de clientes en los prompts y hacer énfasis en comprobar manualmente los cálculos numéricos de radio de la IA (ya que los modelos de lenguaje pueden equivocarse al comparar columnas numéricas grandes si no se verifican).
- **Producto o entregable esperado:** Plantilla cumplimentada + registro de auditoría CSV con prompt anonimizado y verificación matemática manual de los resultados.
- **Criterios de éxito:** La matriz diferencia correctamente radio mínimo de tubo frente a radio mínimo de cable, identifica el límite angular entre registros a comprobar y documenta la verificación manual exacta de los hallazgos de la IA.

---

## 6. Caso práctico

### Caso: Planta de Envasado Alimentario «Conservas del Guadalquivir, S.A.» — Colapsos de enrutamiento, tes prohibidas y curvas imposibles de alambrar

#### Contexto empresarial
**Andalucía Industrial MEP, S.L.** está modelando en Revit MEP la reforma de la línea de envasado y autoclave de la planta alimentaria **Conservas del Guadalquivir, S.A.** (Sevilla). Debido al ambiente húmedo con lavados frecuentes a presión, la especificación del proyecto exige canalización superficial vista en **tubo metálico rígido roscado (acero galvanizado / inoxidable IP66)** en diámetros métricos comerciales de $20, 25, 32, 40, 50\text{ y }63\text{ mm}$, alimentando motores de cintas transportadoras, bombas de proceso y cuadros locales desde el subtablero de fuerza `SF-ENV-01`.

El modelado fue ejecutado con prisas durante el fin de semana por dos técnicos con experiencia en tubería sanitaria/fontanería, pero sin formación específica en uniones eléctricas ni física de tendido de cables.

#### Situación o problema
Al preparar el modelo `EL-Envasado.rvt` para la emisión de planos de montaje de taller e incorporación de accesorios de registro (Tema 5), el jefe de ingeniería detecta cuatro fallos críticos que invalidan el modelo actual:
1. **34 avisos y fallos de «No auto-route solution»:** En las salidas superiores de `SF-ENV-01` y en el cruce bajo la pasarela metálica de mantenimiento, los modeladores no lograron conectar tramos de Ø $40\text{ mm}$ y Ø $50\text{ mm}$ porque dejaron solo $150\text{ mm}$ de separación entre la vertical de pared y el eje de la bandeja superior; ante el bloqueo, activaron `Use Any Angle` en `Conduit Settings` y forzaron giros manuales arbitrarios de $19{,}4^\circ$, $53{,}8^\circ$ y $77{,}2^\circ$.
2. **19 desconexiones ocultas en vista 3D:** Al ejecutar `Show Disconnects`, aparecen 19 extremos abiertos flotando a $5\text{–}15\text{ mm}$ del conector de motores y uniones intermedias donde el modelador aproximó el tubo en vista de planta sin comprobar la cota $Z$.
3. **Tes ciegas de fontanería en tubería rígida:** El tipo de tubo `Tubo-Rigido-IP66` tenía cargada una familia genérica de te hidráulica (`Tee_Roscada_Ciega.rfa`) en `Edit Type > Fittings`, habiendo insertado 14 derivaciones en T sin tapa registrable en mitad de líneas de motores.
4. **Tramo imposible de alambrar:** La línea de alimentación a la bomba principal de autoclave (`L-Bomba01`, cable tetrapolar blindado de $D_{\text{cable}} = 24\text{ mm}$ en tubo Ø $50\text{ mm}$) recorre $18\text{ m}$ acumulando **$5$ codos consecutivos de $90^\circ$ ($450^\circ$ totales)** en dos planos distintos, dos de ellos unidos espalda con espalda (*back-to-back*) con un radio de curvatura modificado manualmente a $110\text{ mm}$ para esquivar un soporte de tubería de vapor.

#### Datos disponibles

| Parámetro / Incidencia del caso | Valor actual en `EL-Envasado.rvt` | Criterio técnico / Constructivo de referencia |
| :--- | :--- | :--- |
| **Ángulos habilitados en `Conduit Settings`** | `Use Any Angle` activado; codos detectados de $19{,}4^\circ, 53{,}8^\circ, 77{,}2^\circ$ | Solo ángulos estándar comerciales ($30^\circ, 45^\circ, 90^\circ$ o curvas conformadas normalizadas) |
| **Distancia horizontal salida cuadro → bandeja** | $150\text{ mm}$ para tubo Ø $50\text{ mm}$ (radio familia $300\text{ mm}$) | Longitud mínima de encaje + avance de curva requiere $\ge 350\text{–}450\text{ mm}$ o salida por registro/conduleta |
| **Desconexiones abiertas (`Show Disconnects`)** | 19 extremos sin conectar (desfases $Z$ de $5\text{–}15\text{ mm}$) | Tolerancia exigida: $0$ desconexiones abiertas no terminales |
| **Derivaciones en T (`Edit Type > Tee`)** | 14 unidades de `Tee_Roscada_Ciega.rfa` | Prohibidas tes ciegas en instalaciones eléctricas; sustituir por cajas/conduletas T registrables |
| **Línea `L-Bomba01` (Ø $50\text{ mm}$, cable $D=24\text{ mm}$)** | 5 codos $90^\circ$ ($450^\circ$), dos *back-to-back*, radio forzado a $R = 110\text{ mm}$ | Radio mínimo ilustrativo cable $12D \approx 288\text{ mm}$ (tubo comercial $R \ge 300\text{ mm}$); máx. $270^\circ\text{–}360^\circ$ entre puntos de tiro (verificar norma vigente) |

#### Preguntas de análisis
1. ¿Por qué activar `Use Any Angle` en `Conduit Settings` resolvió el bloqueo visual en pantalla de los modeladores pero arruinó la constructibilidad y las mediciones de obra en tubo metálico rígido roscado?
2. ¿Qué dos fallos mecánicos y eléctricos graves hacen inaceptables tanto las 14 tes ciegas roscadas como los $5$ codos a $90^\circ$ ($450^\circ$) con radio $110\text{ mm}$ en `L-Bomba01`?
3. ¿Cómo explicarías a un modelador proveniente de fontanería qué ocurre en Revit si une dos tramos de tubo en planta sin comprobar su cota $Z$ ni ejecutar `Show Disconnects`?
4. Si en la salida de `SF-ENV-01` el espacio físico real de la pared impide alejar la bandeja más de $150\text{ mm}$, ¿qué alternativa constructiva limpia resuelve el giro sin violar radios mínimos de curvado? *(Enlace directo al Tema 5)*.

#### Tarea a realizar
En equipos de 3-4 personas durante **45 minutos**, elaborad el **Dictamen de Depuración de Uniones y Curvado** para `EL-Envasado.rvt`:
1. **Reconfiguración de `Conduit Settings` y *Routing Preferences*:** Especificad exactamente qué ángulos deben bloquearse/habilitarse y cómo debe quedar configurado `Edit Type > Fittings` para `Tubo-Rigido-IP66`.
2. **Plan de corrección de las 19 desconexiones y los 34 fallos de enrutamiento:** Secuencia ordenada paso a paso en Revit (`Show Disconnects`, secciones auxiliares, `Align`, `Inherit Elevation`, reubicación de ejes o bayoneta a $45^\circ$).
3. **Rediseño de `L-Bomba01` y eliminación de tes ciegas:** Cálculo del radio mínimo aceptable para tubo Ø $50\text{ mm}$ + cable $D = 24\text{ mm}$, separación de codos *back-to-back* y propuesta de división angular mediante puntos de registro/conduletas (anticipando su inserción detallada en el Tema 5).
4. **Prompt anonimizado de auditoría tabular con IA:** Redactad un prompt para ChatGPT/Claude que reciba la tabla exportada de `Conduit Fittings` (anonimizada) y detecte automáticamente ángulos no normalizados, radios menores de $300\text{ mm}$ y presencia de familias `Tee` prohibidas, indicando la comprobación manual final obligatoria del ingeniero.

#### Posibles soluciones o criterios de análisis
- **Ángulos y *Routing*:** Desactivar `Use Any Angle` en `Conduit Settings > Angles` dejando únicamente $90^\circ, 45^\circ, 30^\circ$ (y $22{,}5^\circ$ si existe herramienta de curvado controlada). En `Edit Type > Fittings` de `Tubo-Rigido-IP66`, asignar curva estándar radio largo comercial ($R \ge 6D$, mínimo $300\text{ mm}$ en Ø $50\text{ mm}$), `Union` roscada IP66, `Transition` roscada concéntrica y dejar `Tee = <None>` (o asignar exclusivamente una conduleta `Conduleta_T_Registrable` en el Tema 5) eliminando las 14 tes ciegas.
- **Desconexiones y `No auto-route solution`:** Activar `Show Disconnects (Electrical Conduit)` en vista 3D limpia; recorrer los 19 puntos en corte/3D igualando cotas con `Align` / `Inherit Elevation` y uniendo mediante `Trim/Extend`. En la salida del cuadro `SF-ENV-01` donde solo hay $150\text{ mm}$, si no puede desplazarse la bandeja a $\ge 400\text{ mm}$, no forzar curvas imposibles: prever en el Tema 5 una caja de tiro o conduleta `LB` registrable a la salida del tablero o reordenar el conector lateral.
- **Rediseño de `L-Bomba01`:** Restaurar el radio comercial mínimo del codo Ø $50\text{ mm}$ a $R \ge 300\text{ mm}$ (superando los $288\text{ mm}$ del cable $12D$ ilustrativo, siempre verificando ficha técnica oficial del cable y reglamento vigente), eliminar los codos *back-to-back* intercalando tramo recto suficiente y dividir los $450^\circ$ acumulados intercalando al menos una **caja de paso o conduleta registrable** intermedia para no superar el límite de $270^\circ\text{–}360^\circ$ entre puntos de tiro.
- **Control con IA:** El prompt anonimizado omite el nombre de la conservera y la localidad; solicita filtrar filas con `Angle not in {30, 45, 90}`, `Radius < 300 mm (para Ø 50)` o `Family contains "Tee_Ciega"`, con comprobación matemática independiente en hoja de cálculo por el ingeniero.

#### Preguntas de reflexión final
1. ¿Por qué errores aparentemente «menores» de modelado como dejar una unión con $10\text{ mm}$ de desconexión o un ángulo de $53{,}8^\circ$ multiplican los sobrecostes cuando se emiten tablas de mediciones en el Bloque 4?
2. ¿Cómo equilibrarías en un equipo mixto la rapidez de modelado del delineante con el cumplimiento estricto de radios de curvatura y accesibilidad de tiro exigidos por el instalador electricista en obra?

---

## 7. Evaluación

### 7.1. Evaluación diagnóstica
Cuestionario inicial de 3 preguntas (5 minutos en la Fase 1):
1. ¿Cuál de las cinco ranuras de `Edit Type > Fittings` de un conducto eléctrico debe evitar apuntar a una pieza sellada sin tapa registrable? *(Respuesta esperada: Tee / Cross)*.
2. Si aparece el mensaje *«No auto-route solution was found»* al conectar dos tubos separados solo $120\text{ mm}$, ¿cuál suele ser la causa principal? *(Respuesta esperada: falta de espacio geométrico para alojar el radio y longitud de avance de los codos)*.
3. ¿Qué herramienta nativa de Revit permite localizar visualmente en 3D todos los extremos de tubo que no han quedado conectados correctamente? *(Respuesta esperada: Show Disconnects)*.

### 7.2. Evaluación formativa
Observación estructurada del formador durante las Actividades 1 y 2 y el Caso práctico mediante lista de cotejo:
- Comprueba que el alumno no usa `Use Any Angle` para ocultar errores geométricos.
- Verifica la configuración coherente de `Bend`, `Transition`, `Union` y la prevención de tes ciegas en `Edit Type > Fittings`.
- Supervisa el uso efectivo de `Show Disconnects`, `Align` y `Trim/Extend` en vista 3D/sección.
- Valora la argumentación técnica sobre radios mínimos tubo/cable y suma angular máxima entre puntos de registro.

### 7.3. Evaluación sumativa
Dos evidencias evaluables al cierre de la sesión (Fase 8):
1. **Evidencia práctica en Revit y dictamen del caso (65 %):** Archivo `Apellido_Nombre_T4_UnionesLimpias.rvt` (Actividad 2) + Dictamen grupal de depuración de *Conservas del Guadalquivir, S.A.*, evaluados según la rúbrica de la sección 7.4.
2. **Prueba técnica individual + Auditoría de radios con IA (35 %):** Test de 5 ítems sobre *Routing Preferences*, causas de `No auto-route solution`, bayonetas a $45^\circ$, `Show Disconnects` y límites físicos de curvado + plantilla y verificación manual de la Actividad 3.

### 7.4. Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
| :--- | :--- | :--- | :--- | :--- |
| **Configuración de *Routing Preferences* en conductos** | Deja valores por defecto o `<None>` que impiden enrutar, o permite tes ciegas y tablas imperiales incompatibles. | Configura curvas y manguitos básicos, pero mantiene familias discordantes por material o no controla el uso de `Tee` / `Transition`. | Configura coherentemente `Bend`, `Transition` y `Union` por tipo de conducto con *Lookup Tables* métricas y restringe tes ciegas no registrables. | Optimiza preferencias de enrutamiento completas por cada sistema constructivo (`LSZH`, `EMT`, `RSC`), garantizando coherencia total entre familias `.rfa`, materiales y mediciones. |
| **Control de enrutado automático/manual y bayonetas** | Abusa de ángulos arbitrarios (`Use Any Angle`), crea codos *back-to-back* o fuerza giros que rompen la red. | Resuelve giros simples automáticos, pero presenta dificultades con cambios de cota mediante bayoneta o inserción manual de `Transition`. | Combina eficazmente dibujo automático con edición manual (`Split`, `Trim/Extend`, bayonetas a $30^\circ\text{–}45^\circ$ y transiciones concéntricas) con ángulos comerciales válidos. | Ejecuta transiciones, empalmes comerciales y bayonetas complejas con absoluta precisión geométrica, optimizando trazados para facilitar el tendido real en obra. |
| **Diagnóstico de errores y eliminación de desconexiones** | Deja bloqueos *«No auto-route solution»* sin resolver o múltiples extremos desconectados en el modelo 3D. | Localiza algunas desconexiones visuales evidentes, pero omite revisar con `Show Disconnects` o deja microdesfases en eje $Z$. | Diagnostica correctamente las causas de fallos de enrutado, iguala elevaciones/ejes y verifica con `Show Disconnects` hasta lograr cero desconexiones abiertas en la zona trabajada. | Aplica un método sistemático infalible de depuración geométrica (desfases $Z$, longitud de avance, ángulos y `Show Disconnects`), asegurando continuidad total del modelo. |
| **Física de curvado, criterio normativo y verificación de IA** | Fuerza radios imposibles en curvas o encadena $>360^\circ$ sin registros; confía ciegamente en resultados de IA. | Identifica radios mínimos de tubo de forma genérica, pero olvida contrastar el radio del cable o revisa superficialmente la tabla generada con IA. | Evalúa radios mínimos frente a tubo y cable, limita la acumulación angular entre registros y audita tablas CSV anonimizadas con IA realizando comprobación matemática manual. | Integra rigor constructivo (ley de rozamiento/tiro, radios tubo-cable, normativa vigente a comprobar) con auditorías tabulares de IA 100 % verificadas y trazables. |

### 7.5. Actividad de autoevaluación
Durante los últimos 5 minutos de la Fase 8, cada participante responde por escrito en su cuaderno o campus virtual:
1. *De las cuatro causas principales de «No auto-route solution», ¿cuál te causaba más bloqueos antes de la sesión y qué procedimiento paso a paso aplicarás ahora para resolverla?*
2. *¿Por qué es peligroso desde el punto de vista constructivo solucionar un problema de espacio reduciendo manualmente el radio de giro de una familia de codo en Revit?*
3. *Puntúa del 1 al 5 tu capacidad actual para auditar las uniones de un modelo MEP eléctrico antes de incorporar cajas de registro, conduletas y soportes en el Tema 5.*

---

## 8. Materiales y recursos

### 8.1. Guion estructurado de diapositivas

| Diapositiva | Título | Contenido clave y actividad asociada |
| :--- | :--- | :--- |
| **Slide 1** | Portada: Uniones de tubos | Título, Bloque 3 (Tema 4/5), 5 objetivos medibles y secuencia cronometrada de 240 minutos. |
| **Slide 2** | El rompecabezas de las cuatro uniones imposibles (Actividad 1) | Presentación de `Kit-T4-ErroresEnrutado.rvt` (Zonas A–D) y método de diagnóstico de hipótesis. |
| **Slide 3** | Anatomía de *Routing Preferences* (`Edit Type > Fittings`) | Explicación de `Bend`, `Union`, `Transition`, `Tee`, `Cross`, papel de las *Lookup Tables* y prohibición constructiva de tes ciegas. |
| **Slide 4** | Automático vs. Manual: Bayonetas, `Split` y `Trim/Extend` | Secuencia comparada: cuatro codos a $90^\circ$ frente a bayoneta suave a $30^\circ\text{–}45^\circ$ e inserción controlada de reducciones. |
| **Slide 5** | Anatomía del error «No auto-route solution» | Las 4 causas raíz (espacio de avance del codo, desfase $Z$, ángulos bloqueados en `Conduit Settings`, tabla inválida) y peligro de `Use Any Angle`. |
| **Slide 6** | Auditoría de continuidad 3D con `Show Disconnects` | Procedimiento paso a paso de detección de triángulos amarillos, alineación en sección y reconexión limpia. |
| **Slide 7** | Física de curvado en obra y límites de tracción de cables | Comparación radio de tubo ($6D\text{–}10D$) vs. radio de cable ($12D\text{–}15D$), codos *back-to-back* y regla práctica de $\le 270^\circ\text{–}360^\circ$ entre registros. |
| **Slide 8** | Caso Conservas del Guadalquivir, auditoría IA y puente al Tema 5 | Resumen del caso industrial, auditoría CSV con ChatGPT/Claude y transición hacia cajas de paso, conduletas y soportes. |

### 8.2. Ficha de trabajo del alumnado
Documento de 2 páginas (PDF editable o impreso) compuesto por:
- **Sección A (Actividad 1):** Tabla de hipótesis y diagnóstico de las 4 zonas de error (`Kit-T4-ErroresEnrutado.rvt`).
- **Sección B (Árbol de decisión rápido en Revit):** Diagrama lógico en 4 pasos para resolver *«No auto-route solution»* y checklist de `Show Disconnects`.
- **Sección C (Caso Conservas del Guadalquivir, S.A.):** Matriz de correcciones de `Conduit Settings`, cálculo de radio mínimo en `L-Bomba01` y propuesta de división angular.
- **Sección D (Transferencia y cierre):** Tabla de auditoría CSV con IA y preguntas de autoevaluación.

### 8.3. Plantilla técnica práctica

```markdown
# ESTÁNDAR DE PREFERENCIAS DE ENRUTAMIENTO, RADIOS Y AUDITORÍA DE UNIONES
Proyecto (código anonimizado): ___________________   Fecha: ____________   Responsable BIM: ______________

1. REGLAS DE ENRUTAMIENTO POR TIPO DE CONDUCTO (EDIT TYPE > FITTINGS)
- Tipo de conducto: ________________________  Material: _______________  Serie: Metric EN/IEC / Otra: _____
- Familia Bend asignada: ___________________  Radio por defecto (xD): _____  Angles permitidos: __________
- Familia Union asignada: __________________  Longitud barra comercial (Split): _____ m
- Familia Transition asignada: _____________  Regla Tee / Cross: [ ] <None> (registro en Tema 5)  [ ] Conduleta T

2. CRITERIOS FÍSICOS DE CURVADO Y TRACCIÓN (VERIFICACIÓN EXTERNA OBLIGATORIA)
- Límite acumulado de ángulos entre cajas/conduletas de tiro: <= ______ grados (norma a verificar: _________)
- Radio mínimo por diámetro comercial de tubo y cable dominante:
  * Ø 20-25 mm -> R_min modelo: ______ mm | * Ø 32-40 mm -> R_min modelo: ______ mm | * Ø 50-63 mm -> R_min modelo: ______ mm
- Regla contra codos back-to-back: tramo recto mínimo entre curvas consecutivas >= ______ mm

3. CONTROL DE DESCONEXIONES Y AUDITORÍA CSV CON IA (DATOS ANONIMIZADOS)
- Comprobación Analyze > Show Disconnects (Electrical Conduit): Fecha: __________ | Desconexiones abiertas: ___
- Prompt anonimizado ejecutado sobre Conduit_Fittings.csv (sin datos de cliente/obra): _____________________
- Anomalías detectadas por IA y verificación matemática humana realizada: _________________________________
```

### 8.4. Lecturas y recursos recomendados
*(Advertencia importante para el formador y el alumnado: comprobar siempre la vigencia editorial, los enlaces, la versión exacta de Autodesk Revit empleada y la edición vigente de los reglamentos eléctricos y fichas de fabricantes antes de aplicar cualquier parámetro en obra real).*
- **Documentación oficial de Autodesk Revit — Conduit Settings, Routing & Show Disconnects:** Secciones técnicas sobre configuración de ángulos permitidos, longitud de avance de accesorios, tablas *Lookup Tables* en familias `.rfa` y detección de desconexiones en sistemas MEP.
- **Manuales técnicos de fabricantes de conductores eléctricos (p. ej., cables BT aislados XLPE/PVC/armados) y canalizaciones metálicas/LSZH:** Tablas oficiales de radios mínimos de curvatura en instalación fija y durante el tendido, coeficientes de rozamiento y radios de curvas prefabricadas comerciales.
- **Normativa eléctrica aplicable según país y jurisdicción:** Verificar siempre reglamento vigente respecto a radios mínimos, accesibilidad de registros, número máximo de curvas entre cajas de paso y continuidad eléctrica de canalizaciones metálicas (p. ej., REBT ITC-BT-21 en España, IEC 60364 o NFPA 70/NEC artículos sobre tubos EMT/RMC).
- **Guías de verificación de datos tabulares con IA generativa:** Buenas prácticas de análisis seguro de listados CSV exportados desde tablas de planificación de Revit usando ChatGPT o Claude sobre datos anonimizados y contraste numérico independiente.

### Glosario de términos clave

| Término | Definición |
| :--- | :--- |
| **Bayoneta (*Offset Bend*)** | Desvío geométrico en paralelo formado por dos curvas de igual ángulo (habitualmente $30^\circ$ o $45^\circ$) y un tramo inclinado intermedio para sortear obstáculos estructurales o MEP. |
| **Codos *back-to-back*** | Dos curvas consecutivas conectadas sin tramo recto intermedio suficiente ni registro, generando un cuello de botella mecánico que dificulta o impide el tendido de cables. |
| **Desconexión (*Disconnect*)** | Extremo abierto de un segmento de tubo o unión que no enlaza correctamente con un conector o accesorio vecino en el espacio 3D, interrumpiendo la continuidad del sistema. |
| **Longitud de avance (*Take-off*)** | Distancia lineal ocupada por la geometría de un codo desde el eje de giro hasta el punto de encaje; condiciona la separación mínima que Revit necesita para generar un enrutado automático. |
| **Preferencias de enrutamiento (*Routing Preferences*)** | Asignación en las propiedades de tipo del conducto (`Edit Type > Fittings`) de las familias `.rfa` de curva, te, cruz, transición y manguito que se insertan al modelar. |
| **Radio mínimo de curvatura** | Valor límite de curvatura en el eje del tubo o cara interior del cable que garantiza no deformar la canalización ni dañar el aislamiento del conductor al doblar o tirar del haz. |
| ***Show Disconnects*** | Herramienta de diagnóstico de Revit MEP que resalta con marcadores visuales todos los extremos de canalización o uniones sin conexión válida dentro del modelo 3D. |
| **Tabla de consulta (*Lookup Table*)** | Archivo CSV embebido en las familias `.rfa` de uniones que vincula cada diámetro nominal con sus dimensiones reales de fabricación, longitudes de encaje y radios de curvatura. |

---

## 9. Adaptaciones

### Sesión presencial
- **Laboratorio en directo de resolución de bloqueos:** Proyectar el archivo `Kit-T4-ErroresEnrutado.rvt` y resolver en pizarra un esquema acotado de la suma de longitudes de avance de dos codos a $45^\circ$ frente a la distancia disponible, demostrando visualmente por qué falla el enrutado en distancias cortas.
- **Manipulación de piezas físicas (recomendado):** Si el centro formativo dispone de muestras reales, mostrar una curva metálica rígida de radio largo, un manguito roscado y un tramo corto de cable armado grueso para evidenciar físicamente la rigidez que suele subestimarse en pantalla.

### Sesión online síncrona
- **Control en pantalla compartida por turnos:** Durante la Actividad 2, pedir a dos participantes compartir su ventana de Revit con `Show Disconnects` activado para practicar la caza colaborativa de un triángulo amarillo de desconexión mediante vistas de sección auxiliares.
- **Trabajo en salas con CSV preexportado:** En las *breakout rooms* del caso práctico, entregar el archivo `Conduit_Fittings_Guadalquivir.csv` listo para abrir en Excel/LibreOffice y probar prompts anonimizados en ChatGPT o Claude sin perder tiempo tecleando datos.

### Sesión asíncrona
- **Cuatro cápsulas audiovisuales breves (10–12 min cada una):** (1) Configuración de `Edit Type > Fittings` y prevención de tes ciegas; (2) Bayonetas suaves, `Split Element` y `Transition`; (3) Decálogo para resolver *«No auto-route solution»* y auditoría `Show Disconnects`; (4) Radios reales de tubo/cable y límite de curvas entre registros.
- **Evaluación diferida en campus virtual:** El alumnado sube `Apellido_Nombre_T4_UnionesLimpias.rvt`, una captura de vista 3D con `Show Disconnects` limpio ($0$ alertas) y la ficha de la Actividad 3 con el cruce CSV anonimizado verificado a mano; en foro comenta el criterio de curvado de un compañero.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Exige aplicar los diámetros de conductores y secciones calculados en el **Bloque 1 (Instalaciones eléctricas)** para fundamentar los radios mínimos de curvado y límites de tracción, y optimiza directamente las redes tridimensionales de fuerza, alumbrado y acometidas creadas en los **Temas 2 y 3 del Bloque 3**.
- **Competencias que desarrolla:** Configuración experta de *Routing Preferences* en Revit MEP, dominio de edición manual y automática de uniones, resolución ágil de bloqueos geométricos complejos, control de constructibilidad física de canalizaciones y verificación crítica de datos exportados mediante IA.
- **Conexión con el tema anterior y posterior en el programa (6 módulos / 50 temas):**
  - *Tema anterior (Bloque 3, Tema 3 — Tubos: tomacorrientes, alumbrado y acometidas):* Toma las redes 3D de fuerza, alumbrado normal, emergencia y alimentadores trazadas en el Tema 3 y las depura eliminando desconexiones, tes ciegas, ángulos arbitrarios y curvas inviables en obra.
  - *Tema posterior (Bloque 3, Tema 5 — Accesorios de tubos):* Deja exactamente identificados los puntos donde una curva continua no basta o donde se supera el límite de $270^\circ\text{–}360^\circ$ entre registros, preparando el terreno para insertar en la siguiente sesión cajas de registro/paso, conduletas (`LB/LR/LL/T`), prensaestopas, acoplamientos y soportes/colgantes listos para *clash detection* y cómputos métricos.
- **Evidencia de aprendizaje que deja el alumnado:** Archivo `Apellido_Nombre_T4_UnionesLimpias.rvt` depurado con cero desconexiones abiertas + Dictamen técnico del caso *Conservas del Guadalquivir, S.A.* + Estándar de *Routing* y auditoría de radios verificada manualmente frente a IA.

---

## Siguientes pasos para el formador

1. **Probar `Kit-T4-ErroresEnrutado.rvt` y `Kit-T4-ModeloPracticas.rvt` antes de la sesión** asegurándose de que cada una de las 4 zonas reproduce exactamente el fallo didáctico esperado en la versión de Revit del aula.
2. **Revisar la tabla `Muestra_Conduit_Fittings.csv` y `Conduit_Fittings_Guadalquivir.csv`** verificando que no contienen ningún nombre de empresa real ni dato sensible antes de entregarlas para ejercicios con ChatGPT o Claude.
3. **Preparar ejemplos numéricos locales de radios de curvatura** con fichas técnicas reales de cables BT habituales del país del alumnado, aclarando siempre que el dato oficial en obra pertenece al catálogo certificado del fabricante y al reglamento vigente.
4. **Tener listo un archivo puente saneado al final del Tema 4** por si algún participante necesita partir de un modelo limpio para incorporar cajas de registro, conduletas y soportes al comenzar el **Tema 5**.
5. **Anticipar al grupo el cierre del Bloque 3 en la próxima sesión**, recordándoles traer identificados los puntos de su modelo donde la suma de curvas o derivaciones exigirá insertar cajas de registro o conduletas en el Tema 5.
