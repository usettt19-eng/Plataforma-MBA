# Tema 2. Aparatos eléctricos, componentes de detalle y conductos

## 1. Ficha del tema

| Campo | Detalle |
| :--- | :--- |
| **Título del tema** | Aparatos eléctricos, componentes de detalle y conductos |
| **Bloque y posición dentro del programa** | Bloque 3: Modelado 3D – Revit MEP eléctricas — Tema 2 de 5 (Tema 18 de 50 del programa) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Haber completado el Tema 1 (plantilla eléctrica MEP, vínculos ARQ/EST con coordenadas compartidas, `Electrical Settings` y taxonomía de categorías), lectura básica de cuadros eléctricos y diagramas unifilares (Bloque 1) e interpretación de replanteos de iluminación (Bloque 2). |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado será capaz de insertar y parametrizar equipos eléctricos, aparatos, dispositivos de alumbrado, luminarias y componentes de detalle 2D en Revit MEP mediante estrategias de anfitrión seguras frente a vínculos externos, así como configurar familias iniciales de conductos y bandejas portacables preparadas para el trazado 3D y la coordinación espacial. |

---

## 2. Objetivos de aprendizaje

Al completar esta sesión de 4 horas, el alumnado será capaz de:

1. **Parametrizar** e insertar equipos eléctricos principales (tableros generales, subtableros, transformadores y equipos SAI/UPS) verificando su sistema de distribución, conectividad MEP y espacios libres frontales de mantenimiento *(Nivel de Bloom: Aplicar)*.
2. **Seleccionar** el método de hospedaje (*Hosting*) más robusto —basado en cara (*Face-based*) o en plano de trabajo (*Work Plane-based*) frente a basado en techo o muro anfitrión— al colocar tomacorrientes, interruptores y luminarias sobre modelos vinculados *(Nivel de Bloom: Evaluar)*.
3. **Diferenciar** la geometría tridimensional de aparatos eléctricos respecto a los componentes de detalle 2D (`Detail Items`) y símbolos anotativos anidados, controlando su visibilidad por nivel de detalle sin sobrecargar el archivo `.rvt` *(Nivel de Bloom: Analizar)*.
4. **Configurar** tipos iniciales de familias de sistema de conductos (`Conduit with Fittings` frente a `Conduit without Fittings`) y bandejas portacables (`Cable Trays`), ajustando series de diámetros, materiales y separación entre fuerza y datos *(Nivel de Bloom: Aplicar)*.
5. **Auditar** familias descargadas de fabricantes y sus parámetros técnicos mediante listas de comprobación asistidas por IA (ChatGPT/Claude) sobre metadatos anonimizados, garantizando que el modelo 3D respete criterios reales de montaje sin asumir validación reglamentaria automática *(Nivel de Bloom: Evaluar)*.

---

## 3. Contenidos esenciales

### 3.1. Inserción y parametrización de equipos eléctricos (`Electrical Equipment`)

#### Explicación breve y clara
Los equipos eléctricos constituyen los nodos jerárquicos de toda la instalación: cuadros generales de baja tensión (CGBT), subtableros secundarios de planta o zona, transformadores MT/BT y sistemas de alimentación ininterrumpida (SAI/UPS). En Revit MEP, estos elementos pertenecen a la categoría `Electrical Equipment` y requieren una doble verificación al insertarse: **eléctrica** (sistema de distribución asignado, tensión nominal, número de polos y calibre general del tablero) y **geométrica** (ubicación respecto al pavimento terminado $\text{NPT}$, anclaje a muro o bancada y volumen de reserva frontal *Clearance*). Un tablero perfectamente conectado en el navegador de sistemas pierde utilidad constructiva si su puerta choca contra un pilar estructural o si una bandeja de climatización bloquea el acceso para maniobra y mantenimiento en obra.

#### Conceptos clave
- **Conectores eléctricos (*Electrical Connectors*):** Elementos funcionales dentro de la familia `.rfa` que transportan los datos de tensión, sistema de distribución, polos y clasificación de carga para generar circuitos lógicos y tablas de paneles.
- **Conectores de conducto (*Conduit / Cable Tray Connectors*):** Puertos físicos geométricos (en cara superior, inferior o lateral del armario) desde los cuales nacen tubos o bandejas 3D sin errores de alineación.
- **Zona libre de mantenimiento (*Clearance Zone*):** Subvolumen geométrico parametrizado en la familia (visible en planta mediante línea discontinua o subcategoría específica) que protege el espacio frontal y lateral requerido para apertura de puertas y trabajo seguro.
- **Peso geométrico de familias (*Family File Size*):** Tamaño en kilobytes o megabytes del `.rfa`; familias de cuadro con tornillería, embarrados y pantallas LCD modeladas al milímetro ralentizan el proyecto entero sin aportar valor a la coordinación general.

#### Definiciones necesarias
- **Sistema de alimentación ininterrumpida (SAI/UPS):** Equipo de respaldo energético situado entre la acometida o cuadro general y cargas críticas (servidores, alumbrado de seguridad específico, equipos médicos) que exige doble espacio técnico, disipación térmica y bancada resistente por su elevado peso en baterías.
- **Parámetro de instancia vs. Parámetro de tipo (*Instance vs. Type Parameter*):** En un subtablero, las dimensiones físicas de la envolvente o grado IP suelen definirse por **tipo**, mientras que el nombre del cuadro (`Nombre del panel`), el `Sistema de distribución` seleccionado o la elevación de montaje se gestionan normalmente por **instancia**.

#### Ejemplo práctico realista
En una clínica ambulatoria de $1\,400\text{ m}^2$, el proyectista inserta el Cuadro General de Baja Tensión (`CGBT-01`) en el cuarto eléctrico de planta baja (solera $\text{NPT} = +0{,}00\text{ m}$), dimensiones $1\,200\times 2\,000\times 450\text{ mm}$ apoyado sobre zócalo de $100\text{ mm}$ de altura, con `Distribution System = 400/230V 3F+N+PE`, `Mains = 250 A` (calibre general orientativo) y una envolvente con volumen de `Clearance` frontal de $1{,}20\text{ m}$ de profundidad y ancho mínimo igual al del armario (o según ancho de paso de evacuación requerido). A su lado ubica un SAI de $30\text{ kVA}$ dejando $0{,}60\text{ m}$ libres en los laterales para ventilación y acceso de baterías. Al comprobar la sección transversal, advierte que la puerta abatible de acceso al cuarto invadía el volumen `Clearance` del `CGBT-01`, por lo que solicita en coordinación con Arquitectura invertir el sentido de apertura de la puerta hacia el exterior.
*Nota de verificación normativa:* Las distancias mínimas libres frente a cuadros eléctricos, ventilación de cuartos de baterías/transformadores y grados de protección IP/IK indicados son valores ilustrativos; deben comprobarse según el reglamento vigente en el país aplicable (p. ej., REBT en España, IEC 60364 o NFPA 70/NEC) y las fichas técnicas del fabricante.

#### Errores frecuentes
- Insertar un tablero sin asignarle el parámetro `Distribution System` en la paleta de propiedades, impidiendo posteriormente conectar ningún circuito de fuerza o alumbrado a ese cuadro.
- Descargar familias de cuadros o transformadores directamente desde portales comerciales con pesos de $12\text{–}25\text{ MB}$ por unidad y decenas de mallas importadas de CAD 3D.
- Colocar cuadros pegados a esquinas o tras puertas abatibles sin representar ni comprobar el espacio frontal de maniobra y apertura de tapas.
- Confundir la cota `Elevation from Level` del cuadro (referida al centro del conector o base de la familia según cómo se haya modelado su plano de origen) y dejar el armario enterrado bajo el suelo.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué diferencia funcional existe entre un *Electrical Connector* y un *Conduit Connector* dentro de una familia de tablero eléctrico?
2. ¿Por qué es recomendable incluir un subvolumen parametrizado de *Clearance* (espacio libre frontal) en todas las familias de equipos eléctricos?
3. ¿Qué consecuencias provoca en un proyecto BIM incorporar familias de transformadores o cuadros descargadas de internet con alto detalle mecánico interno?

---

### 3.2. Aparatos eléctricos, dispositivos de mando y luminarias según comportamiento de anfitrión (*Hosting*)

#### Explicación breve y clara
Al insertar tomacorrientes (`Electrical Fixtures`), interruptores o sensores (`Lighting Devices`), tomas de datos (`Data Devices`) y luminarias (`Lighting Fixtures`), la decisión técnica más determinante en Revit es el **comportamiento de anfitrión (*Hosting*)** de la familia. En un modelo único donde Arquitectura y Electricidad están en el mismo archivo, una familia `Wall-hosted` o `Ceiling-hosted` funciona con comodidad. Sin embargo, en el trabajo profesional real —donde Arquitectura está en un `.rvt` vinculado— las familias *hosted* en muro o techo solo pueden adherirse de forma frágil o quedan **huérfanas (*Orphaned*)** cada vez que el arquitecto reemplaza un tabique o modifica un falso techo. Por ello, en BIM coordinado se estandarizan familias **basadas en cara (*Face-based*)** o **basadas en plano de trabajo (*Work Plane-based*)**, capaces de ajustarse por cara de cualquier vínculo o por cota directa respecto al nivel $\text{NPT}$ sin perder sus conexiones ni su ubicación ante cambios arquitectónicos.

#### Conceptos clave
- **Basada en cara (*Face-based*):** Familia que se adhiere a cualquier cara plana (muro vinculado, falso techo, viga o suelo), manteniendo orientación ortogonal al plano de montaje.
- **Basada en plano de trabajo (*Work Plane-based*):** Familia independiente de caras vinculadas que se sitúa sobre un nivel o plano de referencia con desfase exacto (`Offset from Host`), ideal para luminarias suspendidas o tomas en suelo técnico.
- **Basada en muro o techo anfitrión (*Wall-hosted / Ceiling-hosted*):** Familia restringida a elementos nativos de la misma categoría dentro del modelo; su uso directo sobre vínculos suele restringir la edición o generar elementos huérfanos tras actualizaciones del modelo arquitectónico.
- **Cotas ergonómicas y sectoriales de montaje:** Alturas de referencia coherentes por zona (p. ej., tomas generales a $0{,}30\text{ m}$ sobre $\text{NPT}$, mecanismos de mando a $1{,}05\text{–}1{,}10\text{ m}$, tomas sobre encimeras de laboratorio o cocina a $1{,}10\text{–}1{,}20\text{ m}$).

#### Definiciones necesarias
- **Elemento huérfano (*Orphaned Element*):** Familia dependiente de un anfitrión cuya referencia geométrica en el vínculo ha sido borrada o sustituida por otro tipo constructivo, provocando alertas en *Reconcile Hosting* y pérdida de asociatividad espacial.
- **Plano de colocación (*Placement Plane*):** Opción contextual en Revit al insertar familias (*Place on Vertical Face*, *Place on Face*, *Place on Work Plane*) que determina si el aparato se anclará a una pared, al plano de un falso techo o a una elevación absoluta desde nivel.

#### Ejemplo práctico realista
En una oficina de $600\text{ m}^2$ con falsos techos registrables a $+2{,}70\text{ m}$ y tabiquería de cartón-yeso en modelo vinculado `ARQ.rvt`, el equipo inserta 48 paneles LED de $600\times 600\text{ mm}$ empleando una familia `Lighting Fixtures` configurada como `Work Plane-based` (o `Face-based` con verificación de plano) asociada al nivel `N01-NPT` con `Elevation from Level = 2,70 m`. En la revisión semanal, el arquitecto sustituye el tipo de falso techo de placa continua a placas acústicas modulares y cambia el ID del elemento en `ARQ.rvt`. Las 48 luminarias siguen en su cota $+2{,}70\text{ m}$ sin quedar huérfanas ni desplazarse; mediante el visor de sección, el proyectista comprueba en 2 minutos si algún techo bajó a $+2{,}60\text{ m}$ y actualiza el desfase en bloque seleccionando las instancias afectadas.
*Nota de verificación normativa:* Las alturas de colocación de tomacorrientes, interruptores y distancias respecto a zonas húmedas (baños, cocinas, exteriores) deben verificarse siempre contra la normativa de edificación, accesibilidad y seguridad eléctrica vigente en el país del proyecto.

#### Errores frecuentes
- Crear o descargar familias de interruptores y luminarias como `Wall-hosted` o `Ceiling-hosted` para usarlas contra modelos vinculados de Arquitectura, generando decenas de avisos *Orphaned* tras cada entrega del arquitecto.
- Colocar luminarias con `Place on Face` sobre la cara inferior del forjado superior ($+3{,}60\text{ m}$) en lugar de la cara del falso techo ($+2{,}70\text{ m}$), dejándolas ocultas dentro del plenum.
- Insertar tomas dobles o triples sin definir su altura desde $\text{NPT}$ y dejar mecanismos empotrados detrás de rodapiés, radiadores o mobiliario fijo.
- Conectar tomacorrientes de datos/voz (`Data Devices`) y de fuerza (`Electrical Fixtures`) en el mismo nivel de elevación sin verificar cajas de mecanismo compartidas o separación reglamentaria.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué ventaja práctica ofrece una familia `Face-based` o `Work Plane-based` frente a una `Ceiling-hosted` cuando el techo pertenece a un archivo RVT vinculado?
2. ¿Cómo identificas y corriges en Revit MEP un elemento eléctrico que ha quedado huérfano (*Orphaned*) tras actualizar el vínculo arquitectónico?
3. ¿Qué comprobación visual rápida realizarías tras colocar luminarias con `Place on Face` en una vista de techo reflejado (*RCP*) para asegurar que no quedaron pegadas al forjado estructural?

---

### 3.3. Componentes de detalle 2D (`Detail Items`), simbología anotativa y niveles de detalle

#### Explicación breve y clara
En planos eléctricos de edificación a escalas habituales ($1:50$ o $1:100$), una base de enchufe real de $80\times 80\text{ mm}$ o un interruptor de $10\text{ mm}$ de espesor sería casi invisible o ilegible si solo se mostrara su geometría 3D real. Para resolver esta exigencia gráfica sin perder la realidad volumétrica en secciones, 3D y detección de interferencias, Revit combina **geometría 3D paramétrica** (que se oculta en planta cuando conviene) con **símbolos anotativos genéricos (`Generic Annotations`) o componentes de detalle 2D (`Detail Items`)** anidados dentro de la familia o colocados en vistas de detalle específicas. Esta separación controlada por **Nivel de detalle** (*Coarse*, *Medium*, *Fine*) y visibilidad de vista evita tanto dibujar planos puramente en 2D desconectados del modelo como modelar tornillería innecesaria en 3D.

#### Conceptos clave
- **Símbolo de anotación anidado (*Nested Generic Annotation*):** Familia 2D escalable automáticamente según la escala de la vista (`Maintain Annotation Orientation`) insertada dentro de la familia 3D de tomacorriente, interruptor o luminaria para mostrarse en planos de planta.
- **Componente de detalle (`Detail Item`):** Elemento gráfico exclusivamente 2D (no aparece en vistas 3D ni en *clash detection*) utilizado para enriquecer secciones constructivas, detalles de zanjas, arquetas o fijaciones de bandejas en láminas técnicas.
- **Control de visibilidad de subcategorías (*Visibility Settings*):** Regla dentro del Editor de Familias que apaga la extrusión 3D del mecanismo en vista de planta cuando se muestra el símbolo 2D normalizado, o muestra la geometría real en nivel `Fine` y vistas 3D.
- **Coherencia entre símbolo 2D y tabla de mediciones:** A diferencia de dibujar líneas 2D sueltas con *Detail Lines*, usar símbolos anidados dentro de familias 3D garantiza que cada símbolo en planta corresponde a un objeto real contabilizado en tablas de planificación (`Schedules`).

#### Definiciones necesarias
- **Orientación de anotación (*Maintain Annotation Orientation*):** Casilla en las propiedades de familia que fuerza al símbolo 2D anidado a permanecer legible en planta aunque el cuerpo 3D esté montado verticalmente sobre un muro o tabique.
- **Desfase de símbolo (*Symbol Offset*):** Parámetros de instancia (`Offset X / Y`) en familias de tomacorrientes o interruptores que permiten desplazar ligeramente el símbolo gráfico en planta cuando varios mecanismos coinciden verticalmente (p. ej., enchufe a $+0{,}30\text{ m}$ e interruptor a $+1{,}10\text{ m}$ en el mismo pilar) sin mover la caja 3D real en el modelo.

#### Ejemplo práctico realista
En una habitación de hotel o consulta médica coinciden sobre el mismo tabique, en la misma vertical, un interruptor doble a $+1{,}10\text{ m}$, un termostato a $+1{,}40\text{ m}$ y dos bases de enchufe a $+0{,}30\text{ m}$. Si el modelo muestra los símbolos superpuestos en su coordenada X-Y exacta, el plano a escala $1:50$ resulta ilegible. El proyectista utiliza familias `Electrical Fixtures` y `Lighting Devices` que incorporan:
1. Caja y placa 3D real visible únicamente en vistas 3D, alzados y secciones (`Detail Level = Fine`).
2. Símbolo normalizado `Generic Annotation` visible en vistas de planta (`Coarse` y `Medium`) con parámetros de instancia `Desfase_Simbolo_X` y `Desfase_Simbolo_Y`.
De este modo, en planta separa gráficamente los tres símbolos $180\text{ mm}$ lateralmente para lectura limpia del instalador, mientras en 3D y detección de interferencias las tres cajas siguen alineadas exactamente en su eje real constructivo. Además, en la lámina de detalle de paso de zanja exterior emplea `Detail Items` 2D de tubo corrugado, lecho de arena y cinta señalizadora sin contaminar el modelo 3D con capas de tierra innecesarias.

#### Errores frecuentes
- Dibujar enchufes, cajas o luminarias usando líneas 2D o bloques de `Detail Items` independientes sobre la planta en lugar de familias 3D con símbolo anidado, rompiendo los cómputos métricos y dejando el modelo 3D vacío.
- No habilitar `Maintain Annotation Orientation` en familias `Face-based` colocadas en muro, provocando que el símbolo 2D desaparezca o quede girado de canto en planta.
- Mover físicamente el objeto 3D en planta para evitar que dos símbolos se tapen en plano en lugar de usar parámetros de desplazamiento del símbolo (`Symbol Offset`), falseando el replanteo real de obra.
- Mostrar simultáneamente en planta la caja 3D y el símbolo anotativo sobredimensionado, creando manchas negras ilegibles al imprimir a PDF.

#### Preguntas que el alumnado debería poder responder
1. ¿Cuál es la diferencia técnica y de uso entre una `Generic Annotation` anidada en una familia 3D y un `Detail Item` colocado en una vista de detalle?
2. ¿Cómo evitas que los símbolos en planta de un interruptor a $+1{,}10\text{ m}$ y una toma de corriente a $+0{,}30\text{ m}$ situados en la misma vertical se superpongan sin desplazar su posición real 3D?
3. ¿Por qué no debe sustituirse el modelado de aparatos 3D por símbolos o líneas 2D sueltas en un proyecto BIM?

---

### 3.4. Configuración inicial de familias de tubos/conductos (`Conduits`) y bandejas portacables (`Cable Trays`)

#### Explicación breve y clara
A diferencia de equipos y luminarias (familias cargables `.rfa`), los **tubos/conductos (`Conduits`)** y las **bandejas portacables (`Cable Trays`)** son **familias de sistema** nativas de Revit que dependen de las configuraciones de proyecto y de las familias de uniones (*Fittings*) asociadas. Antes de trazar un solo metro de canalización en el Tema 3, es indispensable distinguir entre **`Conduit with Fittings`** (genera uniones/codos individuales contabilizables e inspeccionables) y **`Conduit without Fittings`** (tramo continuo estilizado que agrupa curvas en una sola línea lógica, inadecuado si se requiere cómputo real de accesorios y detalle constructivo). Del mismo modo, en `Electrical Settings > Conduit Settings` se configuran los tamaños comerciales métricos (p. ej., serie europea EN 61386: $16, 20, 25, 32, 40, 50, 63\text{ mm}$) o imperiales según país, el radio de curvatura por defecto y los tipos de tubo por material y entorno (PVC rígido, acero galvanizado EMT, rígido roscado RSC, libre de halógenos LSZH), así como las familias de bandejas perforadas, escalera o rejilla con reserva de separación entre potencia y señales débiles.

#### Conceptos clave
- **Conduit with Fittings vs. Conduit without Fittings:** Familias de sistema que determinan si los cambios de dirección insertan familias individuales de codo/curva contabilizables (recomendado para proyecto constructivo y cómputos) o curvas integradas sin pieza separada.
- **Estándares de tamaños de tubo (*Conduit Size Standards*):** Tablas internas de diámetros nominales, diámetro interior y diámetro exterior real en `Electrical Settings > Conduit Settings > Sizes`, ajustables a series métricas IEC/EN o series comerciales EMT/IMC/RGS según país.
- **Tipología de bandejas portacables (`Cable Trays`):** Diferenciación constructiva entre bandeja ciega o perforada (protección mecánica y apantallamiento), bandeja de escalera (*ladder*, alta capacidad de carga y ventilación para grandes alimentadores) y bandeja de rejilla (*wire mesh*, ligereza en falsos techos para distribución y datos).
- **Auditoría asistida por IA de familias y catálogos:** Uso de ChatGPT o Claude para revisar tablas de parámetros exportadas o validar checklists de propiedades de familias `.rfa` de fabricantes (peso, conectores, categoría, nivel de detalle) antes de incorporarlas a la plantilla maestra, sin subir archivos propietarios del cliente.

#### Definiciones necesarias
- **Familia de sistema (*System Family*):** Elemento constructivo intrínseco de Revit (`Conduit`, `Cable Tray`, muros, suelos) cuyos tipos se duplican y editan dentro del proyecto `.rvt` en lugar de cargarse desde un `.rfa` externo, aunque se apoyan en `.rfa` para sus uniones (*Fittings*).
- **Separación electromagnética y de servicios:** Distancia mínima constructiva o tabique separador físico entre canalizaciones de potencia (baja/media tensión) y canalizaciones de telecomunicaciones/datos o tuberías de fluidos para evitar interferencias electromagnéticas y riesgos térmicos o de humedad.

#### Ejemplo práctico realista
Al preparar la plantilla de un edificio terciario en Barcelona, el coordinador BIM revisa `Electrical Settings > Conduit Settings > Sizes` y crea dos estándares comerciales métricos personalizados conforme a catálogo europeo ilustrativo:
1. `Tubo-LSZH-Rigido` (libre de halógenos, empotrado o bajo falso techo): diámetros nominales $20, 25, 32, 40, 50\text{ mm}$ con diámetros exteriores reales exactos para *clash detection*.
2. `Tubo-EMT-Acero` (instalación vista en cuarto técnico y garaje): diámetros $20, 25, 32, 40, 50, 63\text{ mm}$.
En el mismo archivo duplica dos tipos de `Conduit with Fittings` asociando esos estándares y configura dos familias de `Cable Tray with Fittings`: `Bandeja-Escalera-Fuerza` ($400\times 100\text{ mm}$ para alimentadores principales) y `Bandeja-Rejilla-Datos` ($200\times 60\text{ mm}$ instalada $300\text{ mm}$ por encima o separada lateralmente respecto a fuerza).
*Nota de verificación normativa:* Las exigencias de libre de halógenos (LSZH) en locales de pública concurrencia, factores de llenado máximo de tubos/bandejas y separaciones mínimas respecto a datos, agua o gas deben verificarse siempre con la normativa aplicable vigente del país (p. ej., REBT ITC-BT-21/28 en España, IEC 60364 o NFPA 70/NEC) y con el proyectista eléctrico responsable.

#### Errores frecuentes
- Comenzar a modelar usando `Conduit without Fittings` en proyectos que exigen mediciones de codos, acoplamientos y planos de montaje detallado en Bloque 4.
- Dejar las tablas de diámetros imperiales (`EMT 1/2"`, `3/4"`, `1"`) en proyectos que se licitarán y ejecutarán con tubería métrica europea ($20, 25, 32\text{ mm}$), generando incoherencias graves en listas de materiales.
- Usar un único tipo genérico de `Cable Tray` llamado `Standard` para fuerza normal, emergencia, telecomunicaciones y control sin diferenciar servicio ni tipo constructivo (rejilla vs. escalera).
- Sobredimensionar o subdimensionar diámetros exteriores en las tablas de tamaño (`OD`), falseando los resultados de detección de interferencias frente a conductos de climatización y estructura.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué diferencia existe en mediciones y en comportamiento de modelado entre `Conduit with Fittings` y `Conduit without Fittings`?
2. ¿Por qué es imprescindible verificar el diámetro exterior real (`OD`) dentro de `Conduit Settings > Sizes` antes de comenzar el trazado 3D?
3. ¿En qué criterios técnicos te basarías para seleccionar bandeja de escalera, perforada o de rejilla en distintas zonas de un edificio?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** combina diagnóstico inicial de familias reales, demostración práctica en Revit MEP sobre hospedaje y simbología 2D/3D, configuración de canalizaciones y análisis crítico de un caso clínico con apoyo controlado de IA.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
| :--- | :---: | :--- | :--- |
| **1. Apertura, diagnóstico y activación** | 00:00 – 00:25 (25 min) | Conecta con el archivo base creado en el Tema 1, realiza sondeo diagnóstico breve sobre *hosting* y categorías, y lanza la **Actividad 1**. | Audita 4 familias `.rfa` de muestra (una pesada, una *Ceiling-hosted*, una sin conector y una optimizada) y clasifica sus defectos en parejas. |
| **2. Microlearning técnico I (3.1 y 3.2)** | 00:25 – 00:55 (30 min) | Demuestra en directo la inserción de un CGBT con volumen `Clearance`, la parametrización de `Distribution System` y la inserción `Face-based` / `Work Plane-based` de tomas y luminarias sobre el vínculo ARQ. | Sigue la demostración en su modelo del Tema 1, contrasta cotas respecto a $\text{NPT}$ y comprueba en sección el encaje de luminarias sobre falso techo. |
| **3. Práctica guiada de aplicación (Actividad 2)** | 00:55 – 01:40 (45 min) | Lanza la **Actividad 2**, supervisa la colocación de cuadros, tomacorrientes, interruptores, luminarias del DWG de DIALux y ajuste de `Conduit Settings`, resolviendo bloqueos de plano de trabajo. | Inserta CGBT y subtablero, coloca luminarias y mecanismos en una planta tipo usando familias seguras, ajusta desfases de símbolo 2D y crea tipos iniciales de tubos y bandejas. |
| **Descanso breve** | 01:40 – 01:55 (15 min) | Pausa técnica y preparación de los archivos y capturas del caso clínico. | Descanso activo e intercambio informal. |
| **4. Microlearning técnico II (3.3 y 3.4)** | 01:55 – 02:20 (25 min) | Explica la diferencia entre `Detail Items`, `Generic Annotations` anidadas y geometría 3D; desglosa `Conduit with/without Fittings`, tablas métricas de tamaños y tipologías de bandejas. | Configura `Electrical Settings > Conduit Settings > Sizes` en serie métrica (o del proyecto), duplica tipos de tubo/bandeja y ajusta visibilidad de símbolos en planta. |
| **5. Resolución del caso práctico** | 02:20 – 03:05 (45 min) | Presenta el caso **«Centro Médico Valdebebas»**, facilita el informe de incidencias (*orphaned fixtures*, familias de $18\text{ MB}$, `Clearance` invadido) y orienta el análisis en equipos. | En equipos de 3-4 personas, diagnostica cada incidencia, diseña el plan de saneamiento de familias y redacta un checklist anonimizado para auditoría asistida por IA. |
| **6. Puesta en común y auditoría cruzada** | 03:05 – 03:25 (20 min) | Modera la exposición de 3 equipos, compara criterios de peso de familias y estrategias de *hosting*, y corrige cualquier confusión entre detalle gráfico y cálculo normativo. | Presenta sus soluciones (4 min/equipo), contrasta los límites detectados en el checklist de IA y acuerda estándares comunes de familia limpia. |
| **7. Transferencia a proyecto real (Actividad 3)** | 03:25 – 03:45 (20 min) | Guía la **Actividad 3** facilitando la matriz de auditoría de familias y tipos de canalización para el proyecto propio o integrador. | Aplica la plantilla de auditoría a 3 familias reales o del proyecto integrador y ejecuta un prompt anonimizado de verificación de parámetros antes del Tema 3. |
| **8. Síntesis, evaluación sumativa y cierre** | 03:45 – 04:00 (15 min) | Resume las 5 claves del tema, aplica la prueba sumativa breve + autoevaluación y anticipa el **Tema 3** (trazado 3D de tubos de fuerza, alumbrado y acometidas). | Completa el test técnico de cierre y la reflexión de autoevaluación; guarda el archivo `.rvt` actualizado como base para el Tema 3. |

*Suma total verificada: $25 + 30 + 45 + 15 + 25 + 45 + 20 + 20 + 15 = \mathbf{240\text{ minutos (4 horas)}}$.*

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «El escáner de familias tóxicas»

- **Nombre:** El escáner de familias tóxicas.
- **Objetivo:** Desarrollar criterio técnico rápido para detectar defectos críticos en familias `.rfa` de fabricantes o repositorios públicos antes de cargarlas en un proyecto BIM eléctrico.
- **Instrucciones para el alumnado:**
  1. Inspeccionad en parejas las 4 familias de muestra proporcionadas en la carpeta `Kit-T2-FamiliasMuestra` (`Panel_FabricanteA.rfa`, `Luminaria_WebB.rfa`, `Toma_GenericaC.rfa`, `Subcuadro_LimpioD.rfa`) o su ficha técnica resumida proyectada en pantalla.
  2. Evaluad en 10 minutos cinco aspectos por cada familia: (a) tamaño de archivo en $\text{MB}/\text{KB}$, (b) categoría asignada, (c) comportamiento de anfitrión (*Wall/Ceiling/Face/Work Plane*), (d) presencia de conectores eléctricos/conducto y (e) existencia de símbolo 2D anotativo y volumen `Clearance`.
  3. Clasificad cada archivo con un semáforo (**Apta**, **Apta tras depuración**, **Rechazada**) y anotad el motivo técnico en vuestra ficha.
- **Materiales necesarios:** Carpeta `Kit-T2-FamiliasMuestra` (4 `.rfa` + ficha comparativa), Revit instalado, temporizador de 10 min + 5 min de debate guiado.
- **Tiempo estimado:** 15 minutos (integrados en la Fase 1).
- **Rol del formador:** Evitar revelar el semáforo de antemano; preguntar al grupo qué ocurriría al replicar 200 veces una luminaria de $15\text{ MB}$ o al usar una familia `Ceiling-hosted` sobre un vínculo ARQ.
- **Producto o entregable esperado:** Tabla de auditoría cumplimentada por parejas con veredicto y justificación técnica para las 4 familias.
- **Criterios de éxito:** Identificación correcta de al menos 3 de los 4 riesgos implantados (peso excesivo, ausencia de conector eléctrico, hospedaje frágil sobre vínculo y categoría genérica).

---

### Actividad 2 (Aplicación técnica): «Equipamiento, simbología y configuración de canalizaciones»

- **Nombre:** Equipamiento, simbología y configuración de canalizaciones.
- **Objetivo:** Insertar equipos, mecanismos, luminarias y configurar tipos iniciales de conductos y bandejas en Revit MEP sobre el modelo coordinado del Tema 1.
- **Instrucciones para el alumnado:**
  1. Abrid vuestro archivo `Apellido_Nombre_T1_ModeloBase.rvt` (o el archivo de respaldo `Kit-T2-ModeloInicio.rvt`) con el vínculo arquitectónico y el replanteo DWG de DIALux activos.
  2. Insertad en el cuarto técnico el cuadro `CGBT-01` (`Electrical Equipment`, sistema `400/230V 3F+N+PE`) y en planta tipo el subtablero `SP-01` verificando que su volumen `Clearance` ($1{,}20\text{ m}$ frontales) no colisiona con muros ni puertas vinculadas.
  3. Colocad 12 luminarias LED sobre la vista `Alumbrado RCP` siguiendo el replanteo DWG de DIALux mediante familias `Face-based` o `Work Plane-based` a cota $+2{,}70\text{ m}$ (comprobad en vista de sección que descansan exactamente en el falso techo y no en el forjado).
  4. Insertad en la sala de oficinas 6 tomacorrientes dobles ($+0{,}30\text{ m}$ sobre $\text{NPT}$) y 2 interruptores ($+1{,}10\text{ m}$ sobre $\text{NPT}$) usando el parámetro `Desfase_Simbolo` cuando dos símbolos coincidan en planta.
  5. Configurad en `Electrical Settings > Conduit Settings > Sizes` la serie métrica `LSZH` ($20, 25, 32, 40, 50\text{ mm}$) y cread dos tipos de `Conduit with Fittings` (`Tubo-LSZH-Fuerza` y `Tubo-EMT-Alumbrado`) más dos tipos de `Cable Tray with Fittings` (`Bandeja-Escalera-Fuerza` y `Bandeja-Rejilla-Datos`).
- **Materiales necesarios:** Revit MEP, paquete `Kit-T2-LibreriaBase` (familias `.rfa` depuradas con conectores, `Clearance` y símbolos 2D), modelo base del Tema 1.
- **Tiempo estimado:** 45 minutos (Fase 3).
- **Rol del formador:** Guiar en vivo la colocación del primer subtablero y la primera luminaria con verificación inmediata en sección 2D; controlar que el alumnado no use `Conduit without Fittings` ni olvide asignar `Distribution System` al CGBT.
- **Producto o entregable esperado:** Archivo `Apellido_Nombre_T2_Equipado.rvt` con cuadros, luminarias, aparatos y familias iniciales de canalizaciones configuradas.
- **Criterios de éxito:** El CGBT y SP-01 tienen sistema de distribución asignado y zona `Clearance` libre; las 12 luminarias se apoyan a $+2{,}70\text{ m}$ sin ser `Ceiling-hosted`; los símbolos en planta son legibles sin mover cajas 3D; existen los tipos de tubo con tamaños métricos y bandejas diferenciadas.

---

### Actividad 3 (Transferencia a proyecto real): «Protocolo de admisión de familias y tipos de canalización con apoyo de IA»

- **Nombre:** Protocolo de admisión de familias y tipos de canalización con apoyo de IA.
- **Objetivo:** Elaborar un estándar aplicable a proyectos reales o al proyecto integrador del programa para validar familias `.rfa`, simbología 2D y configuraciones de conductos/bandejas antes de iniciar el trazado masivo.
- **Instrucciones para el alumnado:**
  1. Utilizando la **Plantilla técnica de Auditoría de Familias y Canalizaciones** (Sección 8.3), definid las reglas obligatorias de vuestro proyecto (peso máximo de `.rfa` admitido, estrategia de *hosting* permitida frente a vínculos, lista de símbolos 2D requeridos y estándares comerciales de tubos y bandejas según país).
  2. Preparad una tabla anonimizada (sin cliente ni nombre real de obra) con los metadatos de 3 familias reales o del proyecto integrador (categoría, tipo de *hosting*, tamaño de archivo, conectores presentes, parámetros eléctricos).
  3. Lanzad un **prompt estructurado en ChatGPT o Claude** pidiendo que evalúe esos metadatos frente a criterios de rendimiento BIM y coordinación MEP, y proponga mejoras de parametrización.
  4. Revisad manualmente la propuesta de la IA: señalad cualquier parámetro inventado por la IA que no exista de serie en Revit o cualquier criterio normativo que deba verificarse externamente (p. ej., distancias libres de cuadros o factor de llenado de bandejas).
- **Materiales necesarios:** Plantilla técnica práctica (Sección 8.3), acceso a ChatGPT o Claude (en parejas o proyectado si el aula no dispone de acceso individual).
- **Tiempo estimado:** 20 minutos (Fase 7).
- **Rol del formador:** Supervisar que no se suban archivos `.rfa` ni planos de clientes reales, insistiendo en pasar únicamente tablas de metadatos anonimizadas y validando técnicamente las sugerencias de la IA.
- **Producto o entregable esperado:** Ficha de estándar de familias y canalizaciones cumplimentada + registro de auditoría IA con verificación crítica humana.
- **Criterios de éxito:** Estándar completo con criterios cuantificables (peso en $\text{MB}$, estrategia *hosting* segura, diámetros comerciales de canalización verificables) y al menos una observación crítica corregida sobre la respuesta de la IA.

---

## 6. Caso práctico

### Caso: Clínica Ambulatoria «Centro Médico Valdebebas» — Familias huérfanas, sobrecarga del modelo y bloqueo de mantenimiento

#### Contexto empresarial
**BIM ElectroSalud Ingeniería, S.L.** desarrolla el proyecto de instalaciones eléctricas y alumbrado de una clínica ambulatoria privada de $1\,400\text{ m}^2$ distribuida en planta baja y planta primera en Madrid, con zonas de consultas, diagnóstico por imagen de baja potencia, un bloque de cirugía menor ambulatoria (con SAI dedicado) y cuarto técnico general. La oficina cuenta con dos ingenieros eléctricos sénior y dos modeladores BIM junior que trabajan sobre el modelo eléctrico `EL-ClinicaValdebebas.rvt`, vinculado al modelo arquitectónico externo `ARQ-Clinica.rvt` y al estructural `EST-Clinica.rvt`.

Tras el buen arranque de coordenadas realizado en la fase equivalente al Tema 1, los modeladores comenzaron a poblar el modelo insertando cuadros, tomacorrientes, interruptores, luminarias médicas y configurando bandejas y tubos.

#### Situación o problema
Al abrir el modelo tras la tercera revisión arquitectónica semanal (en la que Arquitectura cambió todos los falsos techos de escayola continua a techos modulares registrables y reubicó dos tabiques en la zona de espera), el equipo se encuentra con cuatro incidencias graves que paralizan el paso al trazado de tubos:
1. **78 luminarias empotradas** (`Lighting Fixtures`) aparecen con el icono amarillo de advertencia en *Reconcile Hosting* (`Orphaned`): han perdido su referencia de plano y 14 de ellas quedaron flotando a cota $+0{,}00\text{ m}$ al actualizarse los techos de `ARQ-Clinica.rvt`.
2. El archivo `EL-ClinicaValdebebas.rvt` ha pasado de $28\text{ MB}$ a **$214\text{ MB}$** en cinco días, tardando 4 minutos en abrirse; el modelador junior descargó luminarias quirúrgicas y tomacorrientes hospitalarios directamente desde portales web de fabricantes sin limpiar mallas 3D internas ni CAD importados dentro de las familias `.rfa`.
3. En la sala de cuadros de planta primera, el subtablero `SC-CM-01` (cirugía menor, con alimentación respaldada por SAI) fue insertado sin volumen `Clearance` visible en planta; al cruzarlo con instalaciones mecánicas, un conducto de impulsión de climatización de $500\times 300\text{ mm}$ y una puerta batiente invaden los $0{,}90\text{ m}$ frontales del armario, haciendo imposible abrir la puerta del cuadro al $90\,^\circ$.
4. Para representar los 92 mecanismos de las consultas, un modelador usó bloques `Detail Items` 2D sin geometría 3D en planta, mientras que todas las canalizaciones preliminares fueron creadas con `Conduit without Fittings` usando diámetros en pulgadas (`3/4"`, `1"`), impidiendo generar el cómputo de codos y uniones en milímetros.

#### Datos disponibles

| Elemento / Incidencia | Estado actual en `EL-ClinicaValdebebas.rvt` | Impacto cuantificado |
| :--- | :--- | :--- |
| **Luminarias médicas y generales (78 ud.)** | Familias `Ceiling-hosted` descargadas de catálogo (`18,4 MB` por familia de luminaria quirúrgica) | 78 elementos huérfanos tras cambio de techo ARQ; +150 MB de peso acumulado en archivo |
| **Mecanismos en consultas (92 ud.)** | Colocados como `Detail Items` 2D en planta (sin familia 3D ni conectores) | Cero conectividad eléctrica; invisibles en 3D y *clash detection*; no computan como `Electrical Fixtures` |
| **Subtablero `SC-CM-01` y SAI `SAI-15kVA`** | Sin geometría de espacio libre (`Clearance`), sin parámetro `Distribution System` asignado en el SAI | Puerta del cuadro bloqueada a $35^\circ$ por conducto de clima; el SAI no aparece conectable al subcuadro |
| **Familias de conductos configuradas** | `Conduit without Fittings` con tabla imperial por defecto (`1/2"` a `2"`) | Imposibilidad de computar codos/acoplamientos reales ni planificar tubo métrico europeo ($20\text{–}50\text{ mm}$) |
| **Separación de servicios en pasillo técnico** | Un único tipo `Cable Tray - Default` sin distinguir fuerza, SAI ni datos | Mezcla potencial de líneas críticas y corrientes débiles sin criterio constructivo |

#### Preguntas de análisis
1. ¿Por qué el cambio de tipo de falso techo en `ARQ-Clinica.rvt` dejó huérfanas a las 78 luminarias, y qué propiedad de familia habría evitado este fallo?
2. ¿Cómo explicas el salto de $28\text{ MB}$ a $214\text{ MB}$ del archivo `.rvt` y qué consecuencias produce en las fases futuras (Documentación en Bloque 4 y Twinmotion en Bloque 5)?
3. ¿Qué dos fallos distintos presenta el conjunto `SC-CM-01` + `SAI-15kVA` (uno de ingeniería eléctrica BIM y otro de coordinación espacial constructiva)?
4. ¿Por qué el uso de `Detail Items` 2D para mecanismos y `Conduit without Fittings` en pulgadas invalida la transición al Tema 3 y al Bloque 4?

#### Tarea a realizar
En equipos de 3-4 personas durante **45 minutos**, redactad un **Plan de Saneamiento de Familias y Canalizaciones** para rescatar `EL-ClinicaValdebebas.rvt` antes del modelado de rutas 3D:
1. **Estrategia de sustitución segura de luminarias y mecanismos:** Cómo reemplazar las 78 luminarias huérfanas y los 92 `Detail Items` por familias ligeras (`< 1 MB` objetivo), `Face-based` / `Work Plane-based` con símbolos `Generic Annotations` anidados y `Symbol Offset`.
2. **Corrección del conjunto `SC-CM-01` y `SAI-15kVA`:** Especificación de conectores, asignación de `Distribution System` ($400/230\text{ V}$ ilustrativo, a verificar según reglamento de locales de uso médico aplicable), definición del volumen `Clearance` y propuesta de coordinación frente al conducto de clima.
3. **Reconfiguración de tubos y bandejas:** Definición exacta de familias de sistema (`Conduit with Fittings` con serie métrica $20, 25, 32, 40, 50\text{ mm}$ y tipos `LSZH` / `EMT`, más diferenciación de `Cable Trays` para Fuerza Normal, Fuerza SAI/Crítica y Datos).
4. **Prompt anonimizado de auditoría en ChatGPT/Claude:** Prompt estructurado para generar una lista de verificación previa a la carga de nuevas familias de fabricante, indicando explícitamente qué validaciones humanas obligatorias realizará el ingeniero eléctrico.

#### Posibles soluciones o criterios de análisis
- **Rescate de luminarias y reducción de peso:** Eliminar las familias de $18{,}4\text{ MB}$ importadas con mallas CAD, purgar tipos no usados (`Purge Unused`) y sustituirlas por familias `Lighting Fixtures` nativas ligeras (`Work Plane-based` o `Face-based` parametrizadas por nivel + elevación al techo $+2{,}70\text{ m}$) con representación simplificada en 3D y fotometría `.ies` solo referenciada si se requiere para visualización posterior.
- **Sustitución de `Detail Items` por familias 3D con símbolo anidado:** Reemplazar los bloques 2D sueltos por familias `Electrical Fixtures` y `Lighting Devices` (`Face-based` / `Work Plane-based`) con conector eléctrico $230\text{ V}$, caja 3D real en vista `Fine`/3D y símbolo normalizado `Generic Annotation` con `Maintain Annotation Orientation` y `Desfase_Simbolo` para evitar solapes en consultas densas.
- **Saneamiento de `SC-CM-01` y SAI:** Configurar el conector de salida del SAI y de entrada del subtablero en $400/230\text{ V}$ (o sistema monofásico/trifásico correspondiente según esquema del Bloque 1 y normativa específica de locales de pública concurrencia / uso médico, p. ej., ITC-BT-38 en España o equivalente vigente, siempre verificada por técnico competente); incorporar subvolumen `Clearance` frontal mínimo de $1{,}00\text{–}1{,}20\text{ m}$ (según fabricante/reglamento) para forzar en coordinación el desvío del conducto de climatización o el desplazamiento del cuadro antes de tender acometidas.
- **Familias de sistema de canalizaciones:** Migrar de `Conduit without Fittings` imperial a `Conduit with Fittings` con tabla métrica europea (`20–50 mm`) y diferenciar bandejas en 3 sistemas/tipos (`Bandeja-Fuerza-Normal`, `Bandeja-Fuerza-SAI`, `Bandeja-Rejilla-Datos`) respetando separación constructiva.
- **Control sobre la IA:** El prompt debe omitir el nombre «Centro Médico Valdebebas» y su ubicación, pasar únicamente criterios técnicos genéricos y exigir verificación humana de peso `.rfa`, conectores y normativa sanitaria/eléctrica aplicable (que ninguna IA puede certificar).

#### Preguntas de reflexión final
1. ¿En qué situaciones concretas seguirías utilizando `Detail Items` 2D dentro de un proyecto eléctrico BIM en lugar de familias 3D con símbolos anidados?
2. ¿Qué protocolo interno de «cuarentena de familias» debería implantar una oficina técnica antes de permitir que cualquier modelador descargue un `.rfa` externo al modelo central?

---

## 7. Evaluación

### 7.1. Evaluación diagnóstica
Cuestionario rápido de 3 preguntas al inicio de la sesión (5 minutos en la Fase 1):
1. Si una luminaria `Ceiling-hosted` se coloca sobre un modelo arquitectónico vinculado y el arquitecto borra y vuelve a modelar el falso techo, ¿qué ocurre con la luminaria? *(Respuesta esperada: queda huérfana / Orphaned y pierde referencia de montaje)*.
2. ¿Para qué sirve marcar `Maintain Annotation Orientation` en un símbolo 2D anidado dentro de un tomacorriente `Face-based`? *(Respuesta esperada: para mantener legible el símbolo en vista de planta cuando el mecanismo va montado en vertical sobre muro)*.
3. ¿Qué ventaja clave aporta `Conduit with Fittings` frente a `Conduit without Fittings` para el control constructivo y cómputos? *(Respuesta esperada: genera uniones/codos individuales contabilizables e inspeccionables)*.

### 7.2. Evaluación formativa
Seguimiento continuo del formador durante las Actividades 1 y 2 y el Caso práctico mediante lista de cotejo:
- Comprueba que el alumno evalúa peso, categoría, conectores y *hosting* antes de cargar familias.
- Verifica la alineación vertical de luminarias respecto al falso techo en vista de sección (no pegadas al forjado).
- Revisa el uso correcto de `Distribution System` en cuadros y de `Desfase_Simbolo` sin mover la geometría 3D real.
- Confirma que la configuración de `Conduit Settings > Sizes` refleja diámetros métricos reales (o del sistema justificado) en tipos `Conduit with Fittings`.

### 7.3. Evaluación sumativa
Evaluación final ponderada en dos partes al cierre de la sesión (Fase 8):
1. **Entregable práctico BIM y Plan de rescate del caso (65 %):** Archivo `Apellido_Nombre_T2_Equipado.rvt` (Actividad 2) + entregable grupal del caso *Centro Médico Valdebebas*, evaluados mediante la rúbrica de la sección 7.4.
2. **Prueba objetiva corta + Ficha de auditoría de familias con IA (35 %):** Test de 5 ítems sobre hospedaje seguro, `Detail Items` vs. `Generic Annotations`, volumen `Clearance` y familias de sistema de conductos/bandejas + ficha de la Actividad 3 con prompt anonimizado y verificación crítica humana.

### 7.4. Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
| :--- | :--- | :--- | :--- | :--- |
| **Inserción y parametrización de equipos (`Electrical Equipment`)** | Inserta cuadros sin sistema de distribución, a cota errónea o invadiendo puertas/elementos sin volumen libre de mantenimiento. | Inserta equipos con sistema de distribución básico, pero omite la verificación de espacio libre `Clearance` o deja conectores mal orientados. | Inserta CGBT, subtablero y SAI en su categoría correcta, asigna `Distribution System` válido y verifica el volumen libre frontal de mantenimiento en planta y sección. | Parametriza completamente equipos (polos, calibre general orientativo, `Clearance`, conectores MEP y de conducto) anticipando choques con otras disciplinas y normativa aplicable a comprobar. |
| **Estrategia de *Hosting* en aparatos y luminarias** | Emplea familias *Wall/Ceiling-hosted* frágiles sobre vínculos o deja luminarias desfasadas dentro del plenum del forjado. | Usa familias *Face-based* o *Work Plane-based*, pero presenta errores puntuales de elevación respecto al falso techo o mecanismos desalineados. | Inserta tomacorrientes, interruptores y luminarias mediante familias *Face-based* o *Work Plane-based* a cotas exactas ($\text{NPT}$ y falso techo), verificadas en vista de sección. | Combina con solvencia hospedaje seguro, reposicionamiento ante cambios de vínculo y control ergonómico/sectorial de cotas para todas las familias eléctricas del nivel. |
| **Simbología 2D, `Detail Items` y control gráfico** | Sustituye aparatos 3D por líneas o `Detail Items` sueltos sin conectividad, o genera solapes gráficos ilegibles al ocultar o mover cajas 3D. | Mantiene familias 3D con símbolos básicos, aunque mezcla geometría 3D y símbolo en planta o desplaza físicamente cajas para leer el plano. | Separa correctamente geometría 3D (vistas 3D/secciones/`Fine`) y símbolo anotativo en planta usando desplazamiento gráfico sin mover la caja real. | Domina la jerarquía entre `Generic Annotations` anidadas y `Detail Items` 2D para láminas de detalle, manteniendo ligereza de archivo (`< 1 MB`/familia) y trazabilidad total en tablas. |
| **Configuración de conductos/bandejas y criterio crítico con IA** | Mantiene `Conduit without Fittings` imperial o tipos genéricos sin clasificar; acepta parámetros de IA sin verificar ni anonimizar datos. | Configura tipos básicos de tubo o bandeja, pero mantiene inconsistencias en tablas de tamaños o realiza una revisión superficial de la IA. | Configura `Conduit with Fittings` con serie métrica verificada, separa tipos de bandejas (fuerza/datos) y ejecuta auditoría de familias con IA anonimizada y corregida manualmente. | Estructura estándares completos de familias de sistema (`LSZH`, `EMT`, escalera, rejilla) con diámetros exteriores exactos para *clash detection* y documenta verificación humana exhaustiva frente a IA y reglamento. |

### 7.5. Actividad de autoevaluación
En los últimos 5 minutos de la Fase 8, cada participante responde por escrito en su cuaderno o campus virtual:
1. *¿Qué criterio de depuración de familias externas (peso en MB, estrategia de hosting, conectores o simbología 2D) habría evitado un problema en un proyecto pasado en el que hayas participado?*
2. *Explica con tus palabras por qué desplazar la geometría 3D de un tomacorriente para mejorar la lectura de un plano en planta genera errores graves en coordinación BIM y replanteo de obra.*
3. *Puntúa del 1 al 5 tu seguridad actual para preparar una librería base de equipos, aparatos y tipos de conductos/bandejas antes de iniciar el trazado 3D del Tema 3.*

---

## 8. Materiales y recursos

### 8.1. Guion estructurado de diapositivas

| Diapositiva | Título | Contenido clave y actividad asociada |
| :---: | :--- | :--- |
| **Slide 1** | Portada: Aparatos eléctricos, detalle y conductos | Título del tema, Bloque 3 (Tema 2/5), 5 objetivos medibles y secuencia de 240 minutos. |
| **Slide 2** | El coste oculto de una mala familia `.rfa` (Actividad 1) | Instrucciones del *Escáner de familias tóxicas*, impacto en peso del `.rvt`, rendimiento y falsos choques. |
| **Slide 3** | Equipos eléctricos (`Electrical Equipment`) y `Clearance` | Anatomía de un CGBT/subtablero/SAI: conectores MEP vs. conducto, parámetros de tipo/instancia y zona libre de mantenimiento. |
| **Slide 4** | La regla de oro del *Hosting* frente a vínculos externos | Comparativa gráfica: por qué fallan *Ceiling-hosted* y *Wall-hosted* ante cambios del vínculo ARQ y cuándo usar *Face-based* vs. *Work Plane-based*. |
| **Slide 5** | Mecanismos, luminarias y control vertical en sección | Alturas típicas sobre $\text{NPT}$ (a verificar por reglamento), colocación de luminarias desde replanteo DIALux y comprobación obligatoria en corte 2D. |
| **Slide 6** | Geometría 3D vs. `Generic Annotations` y `Detail Items` | Esquema de visibilidad por `Detail Level`, `Maintain Annotation Orientation` y parámetro `Desfase_Simbolo` sin mover cajas reales. |
| **Slide 7** | Familias de sistema: `Conduits` y `Cable Trays` | Comparativa `with Fittings` vs. `without Fittings`, ajuste de diámetros métricos en `Conduit Settings > Sizes` y tipologías de bandeja (escalera, perforada, rejilla). |
| **Slide 8** | Caso Centro Médico Valdebebas, IA y paso al Tema 3 | Planteamiento del caso clínico, protocolo de auditoría anonimizada con ChatGPT/Claude y preparación del modelo para el trazado 3D de tubos. |

### 8.2. Ficha de trabajo del alumnado
Documento de 2 páginas (PDF editable o impreso) organizado en 4 bloques operativos:
- **Bloque A (Actividad 1):** Matriz de evaluación de las 4 familias de muestra (peso, categoría, hospedaje, conectores, veredicto).
- **Bloque B (Checklist de inserción en Revit MEP):** Secuencia de verificación para cuadros (`Distribution System`, `Clearance`), luminarias (elevación al techo en corte), mecanismos (`Desfase_Simbolo`) y configuración de `Conduit Settings > Sizes`.
- **Bloque C (Caso Centro Médico Valdebebas):** Tabla de diagnóstico de incidencias y esquema del Plan de Saneamiento.
- **Bloque D (Transferencia y cierre):** Registro de la Actividad 3, prompt anonimizado y autoevaluación final.

### 8.3. Plantilla técnica práctica

```markdown
# ESTÁNDAR DE ADMISIÓN DE FAMILIAS ELÉCTRICAS Y CONFIGURACIÓN DE CANALIZACIONES
Proyecto (código anonimizado): ___________________   Versión Revit: ________   Fecha: ____________

1. CRITERIOS DE ADMISIÓN DE FAMILIAS CARGABLES (.RFA)
- Peso máximo admitido por familia (.rfa): <= ______ MB (prohibidas mallas CAD/3D sin depurar)
- Categorías obligatorias: Cuadros/SAI -> Electrical Equipment | Tomas -> Electrical Fixtures |
  Luminarias -> Lighting Fixtures | Interruptores/Sensores -> Lighting Devices
- Estrategia de Hosting permitida sobre vínculos: [ ] Face-based  [ ] Work Plane-based  (Prohibido Ceiling/Wall-hosted)
- Conectores exigidos: [ ] Conector Eléctrico (V, Fases, Carga)  [ ] Conector Conduit (si aplica en equipos)
- Representación 2D/3D: [ ] Símbolo Generic Annotation con Maintain Annotation Orientation + Desfase_Simbolo
- Espacio libre de mantenimiento en cuadros (Clearance): ____ m frontales (verificar normativa vigente y fabricante)

2. CONFIGURACIÓN INICIAL DE FAMILIAS DE SISTEMA (CANALIZACIONES)
- Familia de tubo estándar obligatoria: [ ] Conduit with Fittings (prohibido without Fittings en fase constructiva)
- Serie de tamaños en Conduit Settings > Sizes: [ ] Métrica EN/IEC (16, 20, 25, 32, 40, 50, 63 mm)  [ ] Otra: ______
- Tipos de tubo creados:
  1) _______________________ (Material/uso: ____________)  2) _______________________ (Material/uso: ____________)
- Tipos de bandeja portacables creados (con separación entre servicios):
  1) Fuerza Normal: _______________  2) Fuerza Crítica/SAI: _______________  3) Datos/Control: _______________

3. AUDITORÍA ASISTIDA POR IA (DATOS ANONIMIZADOS)
- Metadatos introducidos en ChatGPT/Claude (sin nombre real de proyecto ni archivos adjuntos confidenciales):
- Revisión humana realizada (errores detectados o normas externas verificadas por técnico competente):
```

### 8.4. Lecturas y recursos recomendados
*(Advertencia importante para el formador y el alumnado: validar previamente la vigencia de enlaces, la versión exacta de Autodesk Revit utilizada y las ediciones reglamentarias aplicables en el país del proyecto antes de incorporar estos criterios a entregas reales).*
- **Manual de referencia de Autodesk Revit — MEP Families & Conduit/Cable Tray Settings:** Secciones oficiales sobre creación y comportamiento de familias `Face-based`, *Reconcile Hosting*, `Detail Items`, anotaciones anidadas y configuración de `Conduit Settings` y `Cable Tray Settings`.
- **Guías prácticas de optimización BIM y gestión de familias (p. ej., estándares BIM de clientes o guías openBIM de esBIM / buildingSMART):** Recomendaciones sobre pesos máximos de `.rfa`, niveles de desarrollo geométrico e informativo (LOD/LOI) y parámetros compartidos en instalaciones MEP.
- **Catálogos técnicos de fabricantes de aparamenta, envolventes y canalizaciones (tubos LSZH/EMT, bandejas escalera/rejilla y sistemas SAI):** Fichas técnicas para verificar diámetros exteriores reales ($OD$), radios mínimos, grados IP/IK, disipación térmica y espacios libres frontales de mantenimiento (validar siempre edición actualizada del fabricante).
- **Reglamentación técnica aplicable según jurisdicción:** Verificar siempre país, edición y autoridad competente respecto a alturas de mecanismos, zonas húmedas, circuitos de seguridad/emergencia en locales de pública concurrencia o uso médico y separación entre servicios (p. ej., REBT en España, CTE, IEC 60364 o NFPA 70/NEC).

### Glosario de términos clave

| Término | Definición |
| :--- | :--- |
| **Anfitrión (*Host*)** | Elemento constructivo o plano de referencia al cual se vincula geométricamente una familia cargable (muro, falso techo, cara plana o plano de trabajo). |
| **Basada en cara (*Face-based*)** | Tipo de familia `.rfa` capaz de adherirse a cualquier superficie plana de un modelo propio o vinculado, evitando dependencias frágiles con muros o techos nativos. |
| **Componente de detalle (`Detail Item`)** | Familia exclusivamente 2D empleada para representar detalles constructivos en vistas de corte o planta sin generar geometría en el modelo 3D ni aparecer en detecciones de choques. |
| **Conector eléctrico (*Electrical Connector*)** | Objeto lógico incrustado en una familia MEP que almacena tensión, fases, sistema de distribución y potencia para habilitar la creación de circuitos y paneles. |
| ***Conduit with Fittings*** | Familia de sistema de tubos en Revit que inserta familias cargables independientes en cada codo, unión o transición para permitir mediciones reales y control constructivo. |
| **Elemento huérfano (*Orphaned*)** | Elemento hospedado cuya superficie o anfitrión de origen en un vínculo externo ha desaparecido o cambiado de identidad tras una actualización del modelo. |
| **Símbolo anotativo anidado (*Generic Annotation*)** | Familia 2D escalable automáticamente insertada dentro de un aparato eléctrico 3D para garantizar su lectura normalizada en planos de planta a cualquier escala. |
| **Volumen *Clearance*** | Geometría auxiliar parametrizada frente a cuadros eléctricos, transformadores o SAI que reserva el espacio libre mínimo exigido para apertura de puertas, maniobra y mantenimiento. |

---

## 9. Adaptaciones

### Sesión presencial
- **Inspección colaborativa en aula:** Proyectar en pantalla grande las entrañas de las 4 familias de la Actividad 1 abriéndolas con *Edit Family* para mostrar en vivo por qué una pesa $18{,}4\text{ MB}$ (mallas importadas) frente a una de $420\text{ KB}$.
- **Verificación física de planos:** Llevar o proyectar muestras reales o fotografías técnicas de un tramo de tubo LSZH, un tubo EMT, una bandeja de rejilla y una de escalera, asociando el objeto físico real con su familia de sistema en Revit.

### Sesión online síncrona
- **Trabajo en salas y compartición de pantalla:** En la Actividad 2, pedir a 2–3 participantes voluntarios compartir pantalla brevemente al minuto 20 y al minuto 40 para comprobar en directo la sección de luminarias sobre el techo vinculado y el diálogo `Conduit Settings > Sizes`.
- **Tablero colaborativo en el caso práctico:** Configurar en Miro/Mural/Google Docs una tabla por sala virtual (*breakout room*) con las 4 incidencias del caso *Centro Médico Valdebebas* para agilizar la puesta en común de la Fase 6 sin pérdidas de tiempo al cambiar de presentador.

### Sesión asíncrona
- **Cápsulas grabadas modulares:** Dividir la teoría y demostración en cuatro vídeotutoriales breves de 10 minutos cada uno: (1) Inserción de cuadros, conectores y *Clearance*; (2) *Hosting* seguro (`Face-based` vs. `Work Plane-based`) en luminarias y tomas; (3) Símbolos 2D anidados, `Desfase_Simbolo` y `Detail Items`; (4) `Conduit with Fittings`, tamaños métricos y bandejas.
- **Entrega y revisión entre pares en campus virtual:** El alumnado sube `Apellido_Nombre_T2_Equipado.rvt` (junto con dos capturas PDF de planta y sección mostrando luminarias sobre el techo y el espacio *Clearance* del cuadro) y su ficha de auditoría de familias con prompt anonimizado. En el foro del módulo evalúa la captura en sección de otro compañero comprobando que ninguna luminaria flota o invade el plenum superior.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Traduce a geometría BIM paramétrica los cuadros de cargas, potencias y protecciones diseñados en el **Bloque 1 (Instalaciones eléctricas)**, materializa las luminarias estudiadas en el **Bloque 2 (DIALux)** sobre el modelo arquitectónico coordinado y consolida las categorías y tensiones configuradas en el **Tema 1 del Bloque 3**.
- **Competencias que desarrolla:** Criterio de selección y depuración de librerías BIM, prevención de errores de coordinación por *hosting* sobre vínculos externos, gestión dual de representación gráfica 2D frente a realidad 3D y preparación técnica de redes de canalización eléctrica.
- **Conexión con el tema anterior y posterior en el programa (6 módulos / 50 temas):**
  - *Tema anterior (Bloque 3, Tema 1 — Componentes de modelado 3D MEP eléctricas):* Aprovecha la plantilla limpia, los vínculos ARQ/EST bloqueados con coordenadas compartidas, los niveles supervisados y el entorno `Electrical Settings` ($400/230\text{ V}$) preparados en el Tema 1 como soporte directo donde insertar los equipos, luminarias y canalizaciones de hoy.
  - *Tema posterior (Bloque 3, Tema 3 — Tubos: tomacorrientes, alumbrado y acometidas):* Los cuadros eléctricos con conectores, los tomacorrientes, los interruptores, las luminarias ya posicionadas y los tipos configurados de `Conduit with Fittings` y `Cable Trays` constituyen exactamente los puntos origen/destino y familias que el alumnado interconectará mediante trazados 3D diferenciados en la próxima sesión.
- **Evidencia de aprendizaje que deja el alumnado:** Archivo `Apellido_Nombre_T2_Equipado.rvt` con equipamiento, aparatos y luminarias correctamente hospedados y canalizaciones preconfiguradas + Plan de Saneamiento del caso *Centro Médico Valdebebas* + Estándar de Admisión de Familias con auditoría crítica sobre IA.

---

## Siguientes pasos para el formador

1. **Verificar compatibilidad de versiones en `Kit-T2-FamiliasMuestra` y `Kit-T2-LibreriaBase`** asegurándose de que las familias `.rfa` de práctica contienen los parámetros compartidos de `Desfase_Simbolo` y el subvolumen `Clearance` funcionando sin errores en la versión de Revit del aula.
2. **Comprobar que el archivo `Luminaria_WebB.rfa` de la Actividad 1** sea lo bastante pesado o representativo para ilustrar el problema sin llegar a colgar los ordenadores del alumnado con menor memoria RAM.
3. **Revisar los valores ilustrativos de altura de mecanismos y espacios libres** según el país mayoritario del grupo, remarcando en la presentación que toda cota constructiva debe validarse con la edición reglamentaria aplicable.
4. **Hacer copia de seguridad del modelo limpio `Kit-T2-ModeloInicio.rvt`** para entregárselo al inicio de la Actividad 2 a cualquier participante que no haya podido completar o traer el archivo del Tema 1.
5. **Indicar al alumnado que conserve `Apellido_Nombre_T2_Equipado.rvt`** listo en su carpeta de trabajo, pues sobre estos equipos y luminarias comenzará el trazado físico 3D de tubos de fuerza, alumbrado y acometidas en el **Tema 3**.
