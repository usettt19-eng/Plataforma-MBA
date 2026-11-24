# Tema 3. Escalas y niveles de detalle

> **Aviso de alcance técnico y normativo:** Esta guía forma parte de la especialización técnica **IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas** (6 módulos / 50 temas). **No constituye un programa MBA** ni habilita legalmente para firmar proyectos, dictámenes o certificados eléctricos oficiales. Las referencias a estándares BIM (como BIMForum LOD Specification o ISO 19650) y ejemplos de distancias de seguridad o mantenimiento eléctrico (REBT, IEC 60364, NEC/NFPA 70) se presentan con fines **ilustrativos**: deben comprobarse siempre el país, reglamento, autoridad competente y edición vigente aplicables. Un nivel de detalle geométrico alto (`Fine` o LOD 350) no valida por sí solo cálculos eléctricos ni lumínicos.

---

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Tema 3. Escalas y niveles de detalle |
| **Bloque y posición dentro del programa** | Bloque 4: Documentación BIM — Tema 3 de 8 (Tema 24 de 50 del programa) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Conocimientos de plantillas de vista (Bloque 4, Tema 1), clasificación de sistemas y parámetros compartidos (Bloque 4, Tema 2) y familias/canalizaciones 3D en Revit MEP (Bloque 3) |
| **Resultado general de aprendizaje** | Al finalizar la sesión, el alumnado seleccionará con criterio técnico las escalas de plano (`1:100`, `1:50`, `1:20`), los niveles de detalle de Revit (*Bajo / Medio / Alto*) y el alcance LOD/LOI adecuado para aparatos, luminarias y canalizaciones eléctricas, evitando solapes gráficos, pérdidas de rendimiento y errores de legibilidad en obra. |

---

## 2. Objetivos de aprendizaje

Al concluir las 4 horas de formación, el alumnado será capaz de:

1. **Identificar** cómo procesa Revit MEP los niveles de detalle **Bajo (*Coarse*)**, **Medio (*Medium*)** y **Alto (*Fine*)** en tubos, bandejas portacables, aparatos eléctricos y luminarias, diferenciando representación simbólica de geometría real 3D. *(Nivel de Bloom: Recordar)*
2. **Diferenciar** el parámetro gráfico de vista *Detail Level* de Revit respecto a los conceptos de **LOD** (*Level of Development*) y **LOI** (*Level of Information*), evitando sobre-modelados innecesarios que degradan el rendimiento. *(Nivel de Bloom: Comprender)*
3. **Aplicar** criterios matemáticos de resolución en papel para elegir escalas de plano (`1:100` general, `1:50` replanteo/coordinación densa y `1:20` cuartos eléctricos y detalles) creando vistas ampliadas (*Callouts*) vinculadas a sus plantillas de vista. *(Nivel de Bloom: Aplicar)*
4. **Analizar** la densidad gráfica producida por la interacción entre escala anotativa (símbolos 2D de tamaño fijo en papel), grosores de línea y geometría real de canalizaciones para diagnosticar empastamientos y solapes en PDF. *(Nivel de Bloom: Analizar)*
5. **Elaborar** una matriz estructurada de Escala–Nivel de Detalle–LOD/LOI para proyectos eléctricos reales, utilizando opcionalmente IA sobre requisitos anonimizados con validación obligatoria en familias y vistas reales de Revit. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Niveles de detalle en Revit (*Bajo / Medio / Alto*) en aparatos, luminarias y canalizaciones

#### Explicación breve y clara
En Revit MEP, el control **Nivel de detalle (*Detail Level*)** —disponible en la barra de control de vista o gobernado desde la *View Template*— no es una preferencia estética menor: decide qué geometría dibuja el motor gráfico para cada categoría eléctrica y con qué carga computacional trabaja el modelo.

Su comportamiento específico varía según la categoría:
- En **tubos (`Conduits`) y sus uniones**, los niveles **Bajo (*Coarse*)** y **Medio (*Medium*)** muestran una **línea simple simbólica** centrada con símbolos de subida/bajada; solo en nivel **Alto (*Fine*)** se dibuja la **geometría real 3D en doble línea** con el diámetro exterior exacto.
- En **bandejas portacables (`Cable Trays`)**, el nivel **Bajo** muestra línea simple simbólica, mientras que **Medio** y **Alto** ya representan la anchura real en **doble línea** (mostrando detalles adicionales de perfil y radio en *Alto*).
- En **aparatos (`Electrical Fixtures`, `Lighting Devices`) y luminarias (`Lighting Fixtures`)**, la visibilidad en *Bajo / Medio / Alto* depende de cómo esté configurada la geometría dentro del Editor de Familias (`.rfa`): lo habitual en familias profesionales bien construidas es mostrar un **símbolo 2D anotativo** en *Bajo*, una envolvente 3D simplificada en *Medio* y la carcasa detallada en *Alto*.

#### Conceptos clave
- **Línea simple simbólica (*1-Line*):** Representación axial ligera de tubos (`Coarse`/`Medium`) y bandejas (`Coarse`) acompañada de símbolos de codo, te y subida/bajada, idónea para planos generales de distribución.
- **Geometría real doble línea (*2-Line / 3D True Geometry*):** Representación a espesor real en `Fine` (para tubos) o `Medium`/`Fine` (para bandejas), indispensable en cuartos eléctricos, cruces críticos y vistas de coordinación 3D/Twinmotion.
- **Control por nivel de detalle en Editor de Familias (`.rfa`):** Propiedad *Family Element Visibility Settings* que permite asignar cada extrusión 3D o línea simbólica a `Coarse`, `Medium` o `Fine` (y definir si solo se ve en planta o también en alzado/3D).
- **Trampa de exportación 3D en *Coarse*:** Si se exporta una vista 3D hacia Navisworks o se sincroniza con Twinmotion mediante *Direct Link* estando la vista en detalle *Bajo*, los tubos y bandejas aparecen como hilos finos sin volumen real, invalidando la coordinación espacial y el renderizado.

#### Definiciones necesarias
- **Nivel de detalle (*Detail Level*):** Parámetro nativo de vista en Revit con tres estados (`Coarse` / Bajo, `Medium` / Medio, `Fine` / Alto) que conmuta la complejidad geométrica visible de familias y elementos de sistema sin modificar los datos del modelo.
- **Símbolo anidado (*Nested Annotation Symbol*):** Familia 2D de anotación genérica insertada dentro de una familia 3D de enchufe, interruptor o luminaria para mostrarse limpia y escalada automáticamente en vistas de planta configuradas en detalle *Bajo*.
- **Símbolo de subida/bajada (*Rise/Drop Symbol*):** Marcador normalizado en planta que indica automáticamente en modo *Coarse*/*Medium* si un tubo o bandeja sube hacia techo o baja hacia suelo/cuadro en el plano de corte.

#### Ejemplo práctico realista
En una cocina industrial conectada a un subcuadro `CS-COCINA` llegan **4 tubos de acero galvanizado `Ø32 mm`** agrupados en paralelo separados `60 mm` entre ejes y una bandeja de rejilla de **`300 × 60 mm`** a `+2,95 m`:
1. En la **vista 3D de coordinación** y en la **vista de detalle del cuarto técnico a `1:20`**, se bloquea `Detail Level = Fine`: cada tubo muestra su diámetro real de `32 mm`, la bandeja muestra sus `300 mm` de ancho y sus radios de curva, y se aprecia con claridad que la separación física entre tubo y conducto de extracción vecino es de `45 mm`.
2. En la **planta general de la planta baja a `1:100`**, la plantilla aplica `Detail Level = Coarse` (o `Medium` para tubos): los 4 tubos se dibujan como líneas simples limpias con su símbolo de bajada hacia el cuadro, y las luminarias estancas muestran su símbolo 2D sin saturar la pantalla ni el PDF con tornillería 3D de carcasa. *(Nota de verificación: las distancias de separación frente a tuberías calientes, vapor o gas en cocinas deben comprobarse siempre conforme al reglamento aplicable, p. ej., REBT en España).*

#### Errores frecuentes
- Colocar `Detail Level = Fine` por defecto en todas las plantillas de plantas generales `1:100`, multiplicando el tiempo de regeneración gráfica y generando manchas negras donde los tubos en doble línea se fusionan al imprimir.
- Descargar familias de fabricantes con geometría 3D hiperdetallada (disipadores, tornillos, reflectores internos) configuradas para mostrarse en los **tres niveles** (`Coarse`, `Medium` y `Fine`), inutilizando el cambio a detalle *Bajo*.
- Sincronizar una vista 3D hacia Twinmotion o exportar a coordinación IFC/NWC desde una vista dejada en `Coarse`, produciendo canalizaciones invisibles o líneas planas sin espesor.
- Olvidar insertar el símbolo 2D en familias de tomacorrientes o luminarias personalizadas, provocando que al cambiar la vista a `Coarse` el aparato desaparezca o se vea únicamente como un rectángulo sin significado eléctrico.

#### Preguntas que el alumnado debería poder responder
1. ¿En qué nivel o niveles de detalle dibuja Revit un `Conduit` como línea simple frente a geometría real doble línea, y en qué difiere de una `Cable Tray`?
2. ¿Por qué una familia profesional de luminaria o tomacorriente debería apagar su geometría 3D compleja en detalle *Bajo* y activar un símbolo de anotación anidado?
3. ¿Qué consecuencias tiene lanzar una sincronización hacia Twinmotion o una revisión de choques desde una vista 3D en `Detail Level = Coarse`?

---

### 3.2. Selección de escalas de plano (`1:100`, `1:50`, `1:20`) y su propósito constructivo

#### Explicación breve y clara
Elegir la escala de un plano eléctrico en Revit no es una decisión estética ni arbitraria para «que quepa en un A1»: responde a una **relación matemática directa entre las dimensiones físicas reales de la instalación y la resolución mínima legible en el papel o PDF**.

Cuando reduces un edificio `100` veces (`1:100`), un tubo de `Ø20 mm` mide **`0,20 mm`** en el plano impreso: es más fino que la propia línea de contorno estándar (`0,25–0,35 mm`), por lo que sus dos bordes exteriores se superponen formando un trazo empastado. Por ello, cada rango de escala tiene un rol constructivo definido: **`1:100`** para plantas generales de distribución y zonificación (con detalle *Bajo* / simbólico), **`1:50`** para zonas densas, replanteo de techos modulados y racks de bandejas, y **`1:20`** (o `1:25`) para cuartos eléctricos, salas de cuadros, patinillos y detalles constructivos en nivel *Alto*.

#### Conceptos clave
- **Escala general `1:100` (`1:150` / `1:200` en naves enormes):** Sirve para leer la distribución global de circuitos, zonas de iluminación, emplazamiento de cuadros y trayectorias principales de acometida; exige obligatoriamente representación simbólica (`Coarse`/`Medium`).
- **Escala intermedia `1:50`:** `1 mm` en plano = `50 mm` reales (`Ø32 mm` = `0,64 mm`, bandeja `400 mm` = `8,0 mm`); adecuada para coordinar bandejas paralelas en pasillos técnicos, centrar luminarias en falsos techos `600 × 600 mm` y replantear cocinas o laboratorios con alta concentración de mecanismos.
- **Escala de detalle `1:20` (o `1:25`):** `1 mm` en plano = `20 mm` reales (`Ø32 mm` = `1,60 mm`, armario `800 mm` = `40 mm`); obligatoria para cuartos de CGBT, salas de transformadores/SAI, patinillos verticales y bancadas, empleando `Detail Level = Fine`, envolventes de apertura de puertas y cotas de replanteo reales.
- **Vista de llamada (*Callout View*):** Herramienta nativa de Revit para recortar una zona crítica de una planta general (`1:100`) y generar una vista ampliada vinculada (`1:50` o `1:20`) referenciada automáticamente mediante símbolo de llamada en la lámina.

#### Definiciones necesarias
- **Factor de reducción de escala (`1:N`):** Relación geométrica entre la medida representada en el documento impreso y la medida real en obra; a escala `1:N`, cualquier longitud física $L$ (en mm) ocupa en papel exactamente $L / N$ milímetros.
- **Espacio de mantenimiento y maniobra (*Clearance Zone*):** Volumen geométrico libre alrededor de cuadros eléctricos y transformadores modelado normalmente como subcategoría translúcida o línea discontinua dentro de la familia del equipo para verificar accesibilidad y apertura de puertas en escalas `1:20` / `1:50`.
- **Recorte de vista (*Crop Region*):** Marco perimetral que delimita la extensión espacial del modelo visible en una vista de planta o detalle antes de insertarla en una lámina.

#### Ejemplo práctico realista
Considera un cuarto eléctrico general (CGBT) de **`4,00 m × 3,20 m`** dentro de un edificio de oficinas de `3.200 m²`:
- Si se documenta únicamente en la planta general a **`1:100`**, el cuarto entero mide **`40 mm × 32 mm`** sobre el papel A1; dos armarios contiguos de `800 × 600 mm` miden `8 × 6 mm`, y resulta imposible acotar el espacio frontal libre de maniobra (p. ej., `1,00 m` a `1,50 m` ilustrativos según tensión/acceso) ni distinguir los `8` tubos `Ø50 mm` que suben por el patinillo anexo.
- Al crear una **Vista de llamada (`Callout`) a escala `1:20`** con `Detail Level = Fine`, el mismo cuarto ocupa **`200 mm × 160 mm`** en el plano, los tubos `Ø50 mm` muestran un ancho limpio de **`2,50 mm`** separados entre sí, las puertas abatibles del cuadro se dibujan sin solape y las etiquetas de tablero/circuito caben holgadamente. *(Nota de verificación: las dimensiones mínimas de pasillos de servicio, apertura de puertas hacia el exterior y distancias libres frente a cuadros en baja o media tensión deben verificarse estrictamente según el reglamento vigente en cada país, p. ej., REBT e ITC-BT-17/19 en España o NEC 110.26 en EE. UU.).*

#### Errores frecuentes
- Forzar todo el edificio a escala `1:50` generando 24 láminas gigantes innecesarias por planta, o comprimir cuartos técnicos complejos en `1:100` alegando falta de espacio en planos.
- Crear copias independientes de plantas enteras y recortarlas manualmente para simular un detalle en lugar de usar **Callouts** vinculados, rompiendo las referencias cruzadas automáticas entre lámina general y lámina de detalle.
- Dibujar detalles constructivos en `1:20` manteniendo la plantilla en `Detail Level = Coarse`, mostrando tubos como líneas simples sin anchura real cuando en esa escala ya se precisa comprobar el diámetro real y los codos.
- Desactivar el parámetro *Hide at scales coarser than* en secciones o llamadas, llenando las plantas `1:200` de marcas de llamada de detalles minúsculos.

#### Preguntas que el alumnado debería poder responder
1. Matemáticamente, ¿qué tamaño en milímetros ocupa sobre el papel un tubo de `Ø25 mm` representado en doble línea a escala `1:100` frente a escala `1:20`?
2. ¿Por qué un cuarto de cuadros eléctricos o una sala de transformadores requieren obligatoriamente una vista ampliada (`1:20` o `1:25`) en nivel `Fine`?
3. ¿Qué ventaja organizativa aporta crear una vista ampliada mediante *Callout* frente a duplicar manualmente una planta y encoger su *Crop Region*?

---

### 3.3. Densidad gráfica, comportamiento anotativo vs. geometría real y legibilidad en obra

#### Explicación breve y clara
Un aspecto que sorprende a muchos proyectistas al cambiar de escala en Revit es comprobar que **las dimensiones físicas del edificio encogen al pasar de `1:50` a `1:100`, pero los textos, cotas, etiquetas y símbolos de anotación anidados mantienen exactamente el mismo tamaño en milímetros sobre el papel**.

Esta propiedad —llamada **comportamiento anotativo (*Annotative Scaling*)**— garantiza que un texto de `2,5 mm` siempre mida `2,5 mm` al imprimirse. Pero genera un problema matemático crítico en plantas densas: a escala `1:100`, un símbolo de tomacorriente de `3,0 mm` de diámetro en papel «invade» **`300 mm` reales** a lo largo del muro. Si un puesto de trabajo lleva tres mecanismos seguidos separados `150 mm` entre ejes (enchufe normal + enchufe SAI + toma de datos), sus símbolos de `300 mm` se superpondrán unos encima de otros formando un borrón ilegible si no se gestionan desplazamientos simbólicos, agrupación gráfica o cambio de escala local.

#### Conceptos clave
- **Escalado anotativo automático:** Mecanismo de Revit por el cual categorías de anotación (`Text`, `Dimensions`, `Tags`, `Generic Annotations`) conservan altura fija en papel (`mm`), mientras las categorías de modelo escalan según `1:N`.
- **Radio de ocupación simbólica en muro:** Distancia real equivalente del símbolo 2D sobre la planta ($D_{\text{real}} = D_{\text{papel}} \times N$); determina cuántas cajas caben en un tabique antes de colisionar gráficamente en una escala dada.
- **Parámetro de desplazamiento simbólico (*Symbol Offset*):** Parámetro de ejemplar integrado en buenas familias de mecanismos y tomas para desplazar en 2D el símbolo gráfico perpendicularmente al muro o en fila sin mover la caja real 3D de su coordenada exacta de replanteo.
- **Tabla de grosores de línea por escala (*Line Weights*):** Matriz de Revit (`Manage -> Additional Settings -> Line Weights`) que asigna espesores en milímetros (`0,13 mm` a `0,70 mm`) a los números de pluma `1–16` en función de cada escala (`1:20`, `1:50`, `1:100`, `1:200`).

#### Definiciones necesarias
- **Densidad gráfica:** Relación entre la cantidad de geometría, símbolos, cotas y etiquetas concentrados en un área determinada de plano y el espacio en blanco disponible para leerlos sin ambigüedad a distancia de obra.
- **Empastamiento de líneas (*Lineweight Bleeding*):** Efecto visual producido en PDF o impresiones cuando el grosor de pluma asignado a una escala es demasiado ancho respecto a la separación física en papel entre líneas paralelas, fundiendo varios trazos en uno solo.
- **Símbolo agrupado / compuesto:** Representación gráfica única en planta `1:100` (p. ej. bloque de 3 mecanismos con anotación `3×16A` o `2F+RJ45`) o desplazamiento escalonado en abanico que preserva legibilidad manteniendo intacto el cómputo de elementos en las tablas del modelo 3D.

#### Ejemplo práctico realista
En una cabecera de cama hospitalaria o en una mesa técnica de laboratorio de `1,80 m` de largo se instalan **4 tomas seguidas** separadas `120 mm` entre ejes (`x = 0, 120, 240, 360 mm`). Las familias llevan un símbolo 2D de `3,5 mm` de ancho:
- A escala **`1:100`**, cada símbolo ocupa en pantalla/papel el equivalente a **`350 mm` reales**. Con separación física de `120 mm`, los 4 símbolos se montan un **`65 %`** entre sí, volviéndose ilegibles.
- Solución sin falsear la posición 3D: *(a)* si el proyecto exige `1:100` en planta general, dotar a la familia del parámetro de desplazamiento perpendicular/escalonado en vista simbólica (o mostrar una llamada hacia alzado interior/detalle `1:20` de cabeceros), y *(b)* configurar en la vista `1:20` detalle real con grosores de pluma ajustados (`pluma 1 = 0,13 mm` para arquitectura, `pluma 4 = 0,35 mm` para mecanismos y `pluma 3 = 0,25 mm` para tubos en doble línea), logrando lectura cristalina en obra.

#### Errores frecuentes
- Mover físicamente en 3D las cajas de mecanismos `400 mm` hacia un lado «para que los símbolos no se pisen en el plano `1:100`», introduciendo errores reales de replanteo de albañilería y colisiones con montantes o mobiliario.
- Mantener los grosores por defecto de Revit (`Line Weight 5 = 0,50 mm` o `0,70 mm`) en vistas `1:100` para tubos o marcos de luminaria, provocando manchas gruesas en PDF al hacer zoom normal.
- Usar familias de anotación mal configuradas como *Model Lines* en lugar de *Generic Annotations*, haciendo que los símbolos cambien de tamaño desproporcionadamente al cambiar entre `1:50` y `1:100`.
- Llenar una planta `1:100` de textos grandes (`3,5 mm`) y cotas redundantes cuando la solución limpia era generar una llamada `1:50` para las zonas densas.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué dos tomacorrientes separados `150 mm` en la realidad se superponen gráficamente en un plano `1:100` aunque el modelo 3D esté geométricamente perfecto?
2. ¿Por qué es un error grave desplazar la posición 3D real de un enchufe para resolver un solape visual de símbolos en planta, y cuál es la alternativa profesional?
3. ¿Cómo influye la configuración de *Line Weights* por escala en la legibilidad de un plano exportado a PDF?

---

### 3.4. Relación entre Escala, Nivel de Detalle de Revit y LOD / LOI (Nivel de Desarrollo e Información)

#### Explicación breve y clara
En proyectos BIM colaborativos aparece con frecuencia una confusión terminológica perjudicial: equiparar el parámetro visual de Revit (`Coarse / Medium / Fine`) con el **LOD (*Level of Development*)** contractual del proyecto. Son conceptos distintos:

- **`Coarse / Medium / Fine`** es únicamente un **selector de visualización por vista** en Revit.
- **LOD** define el **grado de madurez geométrica y fiabilidad posicional** de los elementos del modelo a lo largo de las fases del proyecto (p. ej., `LOD 200` anteproyecto aproximado frente a `LOD 300` proyecto ejecutivo o `LOD 350` coordinación detallada con soportes y zonas de acceso), según marcos orientativos como **BIMForum LOD Specification** o **ISO 19650 (*Level of Information Need*)**.
- **LOI (*Level of Information*)** define la **densidad y fiabilidad de los datos alfanuméricos** adheridos al elemento (potencia, tensión, tablero, circuito, fabricante, grado IP/IK, código de mantenimiento).

Un modelo eléctrico inteligente combina **geometría contenida (`LOD 300–350` realista, sin tornillería `LOD 400`)** con **alto `LOI` en parámetros** y representación ajustada por vista mediante `Coarse`/`Medium`/`Fine`. Como en todo el programa, herramientas de IA conversacional (ChatGPT/Claude) pueden ayudar a redactar borradores de Matrices Escala–Detalle–LOD/LOI adaptadas a una tipología anónima de edificio, verificando siempre el formador o coordinador BIM cada especificación frente al BEP del cliente y las capacidades reales de Revit.

#### Conceptos clave
- **Independencia entre *Detail Level* y *LOD*:** Una familia pesada de fabricante (`LOD 400`) seguirá ralentizando el archivo aunque la pongas en `Coarse`, mientras que un cuadro prismático ligero (`LOD 200` o `300`) con buen `LOI` y volumen de acceso puede documentarse perfectamente en `1:20` con `Fine`.
- **LOD geométrico frente a LOI informativo:** Separación entre «qué precisión física tiene la geometría 3D» (dimensiones, aberturas, soportes, curvas) y «qué datos técnicos fiables contiene» (`Panel`, `E_Servicio`, `E_Tablero_Origen`, potencia en W/VA).
- **Límite óptimo de modelado eléctrico (`LOD 300 / 350`):** En fase de proyecto y obra eléctrica, modelar envolventes exactas, acometidas, zonas de apertura de puertas, bandejas, soportes principales y tubos `≥ Ø20 mm` (o según alcance del BEP) aporta máximo valor; modelar cada borna, cable individual interno o grapa menor (`LOD 400` generalizado) colapsa el modelo sin mejorar la coordinación.
- **Cálculo y normativa siguen fuera de la geometría:** Aumentar de `LOD 200` a `LOD 350` o imprimir a `1:20` en `Fine` no garantiza cumplimiento de caída de tensión, cortocircuito ni uniformidad lumínica ($U_0$ en DIALux), los cuales requieren cálculo técnico independiente.

#### Definiciones necesarias
- **LOD (*Level of Development*):** Escala estandarizada orientativa (habitualmente `LOD 100` a `500` según BIMForum, o *Nivel de Necesidad de Información* bajo ISO 19650; *verificar siempre el estándar vigente pactado en el BEP del proyecto*) que especifica qué nivel de precisión geométrica y fiabilidad tiene un elemento BIM en una fase dada.
- **LOI (*Level of Information*):** Grado de completitud y exactitud de los atributos no gráficos (eléctricos, identificativos, de operación y mantenimiento) vinculados a los objetos del modelo BIM.
- **Volumen de reserva / mantenimiento (*Clearance Box*):** Geometría auxiliar integrada en equipos `LOD 350` (subcategoría activable en vistas de coordinación/detalle) que reserva físicamente en 3D el espacio necesario para abrir puertas de cuadros o extraer bastidores.

#### Ejemplo práctico realista
Para una **subestación interior y cuadro general CGBT** en fase de proyecto ejecutivo (`LOD 300/350` orientativo), un proyectista compara dos familias del mismo armario de `2.200 × 800 × 2.000 mm`:
- **Familia A (descarga directa sin filtrar, `18 MB`):** Contiene modelado en 3D cada interruptor automático, pletina de cobre interior, bisagra y tornillo (`~45.000` polígonos por armario), pero carece del parámetro de zona libre frontal y pesa tanto que congela la rotación 3D.
- **Familia B (optimizada para BIM MEP, `0,9 MB`):** Presenta carcasa exterior exacta (`2.200 × 800 × 2.000 mm`), zonas superiores/inferiores de entrada de cables, volumen translúcido frontal de mantenimiento de `1,20 m` activable en `Fine` y parámetros completos (`E_Servicio`, tensión, corriente asignada de corte en `kA` verificada en memoria de cálculo).

En la documentación: en planta general `1:100` (`Coarse`), Familia B muestra su rectángulo simbólico rayado; en la llamada `1:20` del cuarto eléctrico (`Fine`), muestra puertas abiertas, entradas de tubos `Ø63 mm` y envolvente de maniobra limpia, manteniendo fluido todo el modelo. *(Nota: verificar las distancias mínimas de paso y maniobra del cuadro en el reglamento vigente aplicable).*

#### Errores frecuentes
- Exigir «todo el modelo en LOD 400 / 500» en contratos sin comprender el impacto técnico en peso de archivo (`.rvt` de cientos de megabytes) ni en legibilidad de planos `1:100`.
- Descargar familias de fabricantes directamente al modelo central sin purgar subcomponentes innecesarios ni revisar su comportamiento en `Coarse / Medium / Fine`.
- Confundir a la propiedad o a obra presentando un cuadro `LOD 350` con conectores y etiquetas bonitas como prueba de que el poder de corte (`kA`) o la selectividad han sido calculados.
- Copiar literalmente tablas de niveles LOD/LOI generadas por un asistente de IA sin adaptar los requisitos reales al BEP del país, cliente y capacidad de modelado del equipo.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué cambiar la vista de `Coarse` a `Fine` en Revit no transforma un elemento `LOD 200` en `LOD 350`?
2. ¿Qué problemas provoca insertar familias comerciales de `15–20 MB` con tornillería interior 3D dentro de un modelo eléctrico de un edificio de varias plantas?
3. ¿Cómo se complementan los niveles de escala (`1:100`, `1:50`, `1:20`), los niveles de detalle de Revit y el par LOD/LOI para equilibrar fluidez del modelo y precisión en obra?

---

## 4. Metodología didáctica

La secuencia de 240 minutos combina análisis matemático-gráfico de escalas, inspección real de familias `.rfa` en distintos niveles de detalle, laboratorio de ajuste de *Callouts* y *Line Weights*, y resolución de un caso corporativo con saturación documental.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
|---|---|---|---|
| **1. Apertura y activación de conocimientos** | 00:00 – 00:25 (25 min) | Conecta con los filtros y clasificación del Tema 2, lanza la Actividad 1 (comparativa de un PDF impastado a `1:100` en `Fine` frente a `1:100 Coarse` y `1:20 Fine`) y recoge hipótesis. | Analiza 3 planos exportados a PDF a distintas escalas y niveles de detalle, midiendo mentalmente por qué unos trazos empastan y otros son legibles. |
| **2. Microexposición y demo: Detail Level (`Coarse`/`Medium`/`Fine`) en familias y tubos** | 00:25 – 01:05 (40 min) | Demuestra en Revit cómo conmutan `Conduits`, `Cable Trays` y familias `.rfa` entre Bajo, Medio y Alto, abriendo una familia en el Editor para inspeccionar *Visibility Settings* y símbolos anidados. | Registra en la ficha técnica las diferencias entre tubo y bandeja, e identifica qué geometrías 3D deben ocultarse en `Coarse`. |
| **3. Microexposición: Escalas (`1:100`/`1:50`/`1:20`), anotación, *Line Weights* y LOD/LOI** | 01:05 – 01:40 (35 min) | Realiza el cálculo de ocupación en papel (`L / N`), explica el escalado anotativo, demuestra la tabla `Line Weights` y deslinda `Detail Level` de `LOD/LOI`. | Calcula la ocupación en mm sobre papel de varios componentes (tubo `Ø25`, bandeja `300`, símbolo `3 mm`) y verifica el criterio de cuándo crear un `Callout`. |
| **Descanso activo** | 01:40 – 01:55 (15 min) | Resuelve dudas rápidas y comprueba la disponibilidad de los archivos de laboratorio y caso práctico. | Descansa de pantalla y prepara los modelos de la fase práctica. |
| **4. Actividad 2: Laboratorio de familias, *Callouts* y *Line Weights*** | 01:55 – 02:35 (40 min) | Supervisa la edición de visibilidad en una familia de toma/luminaria, guía la creación de una llamada `1:20` de cuarto técnico y valida la exportación comparativa a PDF. | Ajusta una familia pesada para separar símbolo 2D (`Coarse`) de 3D (`Medium`/`Fine`), configura *Line Weights* y crea un *Callout* `1:20` en nivel Alto. |
| **5. Estudio de caso y transferencia (Actividad 3): Edificio Mirador Norte** | 02:35 – 03:20 (45 min) | Presenta el caso *Mirador Norte*, acompaña a equipos/parejas en el saneamiento multi-escala y supervisa la redacción asistida (opcional y anónima) de la Matriz Escala–Detalle–LOD/LOI. | Diagnostica la saturación del modelo a `1:100 Fine`, reconfigura las vistas generales a `1:100 Coarse/Medium`, genera `1:50` zona densa y `1:20` CGBT, y entrega su matriz BEP. |
| **6. Discusión guiada y contraste técnico** | 03:20 – 03:45 (25 min) | Proyecta las láminas PDF generadas por 2–3 participantes/equipos, evalúa el contraste de grosores en papel real (zoom `100 %`) y corrige mitos sobre LOD 400. | Compara la legibilidad de sus PDF a escala real `100 %`, defiende sus umbrales de escala y justifica qué elementos se modelan y cuáles quedan en anotación/LOI. |
| **7. Síntesis, evaluación sumativa y cierre** | 03:45 – 04:00 (15 min) | Sintetiza las reglas prácticas de escalas y detalle, aplica el cuestionario corto de salida y anuncia la transición al Tema 4 (Dimensiones, anotaciones y etiquetas). | Responde al test sumativo (6 preguntas), completa la autoevaluación y sube los entregables al aula virtual. |

**Total cronometrado:** 25 + 40 + 35 + 15 + 40 + 45 + 25 + 15 = **240 minutos (4 horas)**.

---

## 5. Actividades prácticas

### Actividad 1 (Activación): El reto de la lupa en PDF (`1:100` vs. `1:50` vs. `1:20`)

- **Nombre:** El reto de la lupa en PDF (`1:100` vs. `1:50` vs. `1:20`)
- **Objetivo:** Sensibilizar al alumnado sobre el impacto real que tiene combinar mal la escala de plano y el nivel de detalle de Revit en la legibilidad impresa de obra.
- **Instrucciones para el alumnado:**
  1. Abre los 3 extractos PDF suministrados (Plano A: planta con 5 tubos paralelos `Ø25 mm` a `1:100 Fine`; Plano B: misma planta a `1:100 Coarse/Medium`; Plano C: cuarto de cuadros a `1:100` vs. `1:20 Fine`) visualizados en lector PDF exactamente al **`100 %` de tamaño real** (nunca haciendo zoom al `400 %`).
  2. Responde en 6 minutos al formulario de diagnóstico identificando en qué plano se funden los contornos, cuánto espacio real ocupan los símbolos superpuestos en un cabecero de `1,50 m` y qué detalle falta en el cuarto eléctrico a `1:100`.
  3. Comenta tus conclusiones en puesta en común de 9 minutos.
- **Materiales necesarios:** 3 archivos PDF calibrados a tamaño de hoja A1/A3 real y encuesta rápida interactiva.
- **Tiempo estimado:** 15 minutos (integrados en la Fase 1).
- **Rol del formador:** Insistir en ver los PDF al `100 %` («como los verá el oficial electricista impreso en el tablón de obra») y revelar la aritmética simple detrás del fallo visual.
- **Producto o entregable esperado:** Respuestas individuales en el diagnóstico de activación.
- **Criterios de éxito:** El alumnado explica por qué hacer zoom al `500 %` en pantalla engaña al proyectista y justifica por qué un tubo `Ø25 mm` no debe ir en doble línea a `1:100`.

---

### Actividad 2 (Aplicación técnica): Optimización de familia eléctrica, ajuste de *Line Weights* y creación de *Callout* `1:20`

- **Nombre:** Optimización de familia eléctrica, ajuste de *Line Weights* y creación de *Callout* `1:20`
- **Objetivo:** Aplicar el control por nivel de detalle dentro de una familia `.rfa` y configurar escalas, grosores de línea y vistas de llamada en un modelo Revit MEP.
- **Instrucciones para el alumnado:**
  1. Abre la familia de laboratorio `Luminaria_LED_Pesada_B4T3.rfa` (que actualmente muestra toda su geometría 3D en todos los niveles y carece de símbolo limpio).
  2. En *Family Element Visibility Settings*, desmarca `Coarse` en las extrusiones 3D de carcasa y difusor, dejando visible el plano 3D únicamente en `Medium` y `Fine`, e inserta/activa la familia de anotación simbólica 2D para `Coarse` en vistas en planta. Cárgala de nuevo en el modelo `Lab_Escalas_B4_T3.rvt`.
  3. En `Lab_Escalas_B4_T3.rvt`, configura una vista general de planta a **`1:100`** (`Detail Level = Coarse`) y crea una vista de llamada (*Callout*) sobre el cuarto técnico de baterías/cuadros a escala **`1:20`** (`Detail Level = Fine`).
  4. Ajusta la tabla `Line Weights` para `1:100` (suavizando la pluma asignada a tubos y vínculos) y exporta ambas vistas en una lámina PDF de comprobación al `100 %`.
- **Materiales necesarios:** `Luminaria_LED_Pesada_B4T3.rfa`, `Lab_Escalas_B4_T3.rvt` y ficha guía de grosores de línea orientativos.
- **Tiempo estimado:** 40 minutos (Fase 4).
- **Rol del formador:** Guiar los clics dentro de *Visibility/Graphics* del Editor de Familias, vigilar que el símbolo 2D esté centrado con la geometría 3D y revisar los PDF exportados al `100 %`.
- **Producto o entregable esperado:** Familia `.rfa` optimizada, modelo `.rvt` con planta `1:100` + llamada `1:20` y lámina PDF comprobada.
- **Criterios de éxito:** Al conmutar entre `Coarse` y `Fine` en planta la luminaria cambia limpiamente de símbolo 2D a geometría 3D sin superponerse, los tubos se ven en línea simple a `1:100` y en doble línea nítida a `1:20`, y la lámina PDF no muestra trazos empastados.

---

### Actividad 3 (Transferencia a proyecto real): Reestructuración multi-escala y Matriz Escala–Detalle–LOD/LOI del *Edificio Mirador Norte*

- **Nombre:** Reestructuración multi-escala y Matriz Escala–Detalle–LOD/LOI del *Edificio Mirador Norte*
- **Objetivo:** Transferir los criterios de escala, densidad gráfica y deslinde LOD/LOI a un proyecto corporativo real con vistas ralentizadas e ilegibles, elaborando una matriz estandarizada para su BEP.
- **Instrucciones para el alumnado:**
  1. En equipos de 3 personas (o parejas), inspeccionad el modelo del caso práctico (`Caso_MiradorNorte_B4_T3.rvt`) e identificad las causas de lentitud en planta y de ilegibilidad en la zona de *open office* densa y en el Cuarto Eléctrico General (`CGBT`).
  2. Reconfigurad las plantillas de vista y vistas documentales del caso para establecer **tres niveles de lectura escalar**:
     - Plantas generales de fuerza y alumbrado a **`1:100`** (`Detail Level = Coarse/Medium`).
     - Ampliación (*Callout*) de la zona de puestos de trabajo densa / techo técnico a **`1:50`** (`Detail Level = Medium`).
     - Ampliación (*Callout*) del Cuarto CGBT (`4,20 × 3,50 m`) a **`1:20`** (`Detail Level = Fine`), activando los volúmenes de maniobra frontal del cuadro.
  3. Redactad la **Matriz Escala–Nivel de Detalle–LOD/LOI** del proyecto usando la plantilla de la Sección 8. *(Opcional)*: Podéis pedir a ChatGPT o Claude, mediante descripción anónima («edificio de oficinas de 4 plantas con cuarto eléctrico»), una propuesta base de tabla LOD/LOI por categoría eléctrica, verificando y corrigiendo manualmente cualquier confusión entre `LOD` y `Detail Level` de Revit antes de incorporarla.
- **Materiales necesarios:** `Caso_MiradorNorte_B4_T3.rvt`, plantilla de Matriz Escala–Detalle–LOD/LOI y acceso opcional a asistente LLM en navegador.
- **Tiempo estimado:** 45 minutos (Fase 5).
- **Rol del formador:** Actuar como coordinador BIM cliente evaluando si la distribución de láminas es ejecutable en obra y comprobando que la matriz deslinda explícitamente geometría BIM de cálculo eléctrico normativo.
- **Producto o entregable esperado:** Modelo `.rvt` saneado con los 3 niveles de escala configurados, lámina PDF de muestra y Matriz Escala–Detalle–LOD/LOI firmada por el equipo.
- **Criterios de éxito:** El tiempo de regeneración y claridad visual de las plantas `1:100` mejora notablemente, el cuarto CGBT a `1:20 Fine` muestra todos los tubos en doble línea y zona de maniobra sin solapes, y la matriz distingue con rigor `Detail Level`, `LOD` y `LOI`.

---

## 6. Caso práctico

### Caso práctico: Planos empastados, lentitud extrema y cuarto eléctrico ilegible en el Edificio Corporativo Mirador Norte

#### Contexto empresarial
**Estudio Alfa Ingeniería BIM S.L.** desarrolla la documentación ejecutiva de instalaciones eléctricas del **Edificio Corporativo Mirador Norte**, un inmueble de oficinas de **4 plantas sobre rasante (`3.800 m²`)** con un **Cuarto Eléctrico General (`CGBT`) en planta baja de `4,20 m × 3,50 m`**. El cliente exige entregas en Revit 2024 y juegos de planos en PDF A1. A una semana de entregar el proyecto de ejecución, tanto el equipo de modelado como la dirección de obra reportan graves problemas operativos.

#### Situación o problema
1. **Lentitud crítica del modelo:** Un proyectista junior insertó familias descargadas de fabricantes con geometría hiperdetallada (`14 MB` cada luminaria lineal con aletas de disipación y tornillería, visibles en todos los niveles de detalle) y fijó **`Detail Level = Fine`** en las plantillas de todas las plantas generales a escala **`1:100`**. Abrir o hacer zoom en las plantas de alumbrado tarda más de 30 segundos.
2. **Manchas negras al imprimir (`1:100`):** En los pasillos de oficina circulan `6` tubos paralelos `Ø25 mm` separados `50 mm` entre ejes. Impresos a `1:100` en `Fine` con el grosor de pluma estándar (`Line Weight 4 = 0,35 mm`), las dobles líneas (`0,25 mm` de ancho real en papel) se funden en una masa negra continua imposible de contar en obra.
3. **Solape en mesas de trabajo densas:** En la zona de *Open Office* (módulos de mesas con `3` tomas de fuerza normal + `2` tomas SAI por puesto separadas `110 mm`), los símbolos 2D de `3,2 mm` se pisan unos encima de otros a escala `1:100`. Para «arreglarlo», otro modelador empezó a desplazar físicamente las cajas 3D `300 mm` hacia los lados, desalineándolas respecto al mobiliario arquitectónico.
4. **Cuarto Eléctrico General ilegible:** El cuarto `CGBT` (`4,20 × 3,50 m`) contiene `2` armarios modulares de `2.200 × 800 × 2.000 mm`, `1` armario SAI de `1.000 × 800 mm` y `14` tubos acometiendo por techo. Solo aparece dibujado dentro de la planta general a `1:100`, ocupando apenas **`42 mm × 35 mm`** en el plano A1. La contrata ha rechazado el plano por imposible replanteo.

#### Datos disponibles

| Elemento / Zona | Datos reales y configuración actual |
|---|---|
| **Planta general (PB–P3)** | `3.800 m²` totales; escala actual `1:100`; `Detail Level = Fine`; hoja formato **A1 (`841 × 594 mm`)** |
| **Luminarias instaladas** | `420` luminarias lineales y paneles LED; familia actual `14 MB`, sin símbolo 2D en `Coarse` |
| **Pasillo técnico de tubos** | `6 × Ø25 mm` separados `50 mm` entre ejes; grosor de contorno actual `0,35 mm` |
| **Puestos densos (*Open Office*)** | `5` tomas juntas separadas `110 mm` entre ejes; símbolo de `3,2 mm` en papel (`= 320 mm` a `1:100`) |
| **Cuarto Eléctrico (`CGBT`)** | `4,20 m × 3,50 m`; armarios `2.200 × 800 mm` + SAI `1.000 × 800 mm` + `14` tubos acometida; sin *Callout* |
| **Requisito BEP orientativo** | Fase Ejecución: geometría precisa de envolventes, recorridos y zonas de maniobra (`LOD 300/350` orientativo), sin modelado de cableado interno ni tornillería |

#### Preguntas de análisis
1. Demuestra numéricamente qué anchura tiene en papel un tubo `Ø25 mm` a `1:100` y por qué una pluma de `0,35 mm` lo funde visualmente con su vecino situado a `50 mm` entre ejes.
2. ¿Qué dos errores críticos comete el equipo con las luminarias de `14 MB` y al desplazar `300 mm` en 3D las tomas del *Open Office*?
3. ¿Qué tamaño en milímetros ocupará el cuarto `CGBT` (`4,20 × 3,50 m`) en la lámina A1 si se documenta mediante una llamada a `1:20` frente a `1:50` o `1:100`, y qué elementos deben verse en esa vista?
4. ¿Cómo aclararías en el BEP la diferencia entre `LOD 300/350` del proyecto y el parámetro `Coarse / Medium / Fine` de Revit?

#### Tarea a realizar
En equipos de 3 personas (45 minutos en la Fase 5), elaborad y aplicad la solución técnica de rescate para **Mirador Norte**:
1. Reconfigurad las vistas y familias del archivo del caso: `1:100` (`Coarse`) para plantas generales con símbolo 2D optimizado; *Callout* a `1:50` (`Medium`) para zona densa de *Open Office* y pasillo de bandejas/tubos; y *Callout* a `1:20` (`Fine`) para el cuarto `CGBT` mostrando geometría real en doble línea y volumen de maniobra frontal.
2. Corregid el desplazamiento indebido de las cajas en 3D devolviéndolas a su coordenada real y resolviendo la legibilidad mediante escala `1:50` o parámetro de desplazamiento puramente simbólico (*Symbol Offset*).
3. Entregad la **Matriz Escala–Nivel de Detalle–LOD/LOI** del estudio diferenciando qué se exige en geometría frente a datos LOI y cálculo externo.

#### Posibles soluciones o criterios de análisis
Un diagnóstico y ejecución excelentes recogerán:
- **Análisis matemático del empastamiento (`1:100`):** Un tubo `Ø25 mm` mide a escala `1:100` exactamente **`0,25 mm`** en papel; sus ejes están separados `0,50 mm` (`50 mm / 100`). Si ambos bordes de un tubo se trazan con pluma de `0,35 mm`, cada tubo ocupa en realidad `0,25 + 0,35 = 0,60 mm` en papel, invadiendo el espacio del tubo contiguo (`0,60 mm > 0,50 mm`). Pasar las plantas `1:100` a **`Detail Level = Coarse/Medium`** sustituye esa doble línea imposible por una línea axial limpia (`1-line`), reservando la doble línea real (`Fine`) para el *Callout* `1:50` (donde `Ø25 mm = 0,50 mm` con `1,00 mm` entre ejes) y `1:20` (`Ø25 mm = 1,25 mm` con `2,50 mm` entre ejes).
- **Saneamiento de familias y coordinación 3D:** Purgar la tornillería y aletas de las luminarias pesadas (o reemplazarlas por una familia optimizada `< 1 MB` con símbolo 2D en `Coarse` y caja 3D simple en `Medium`/`Fine`), y devolver las tomas del *Open Office* a su posición exacta de replanteo `110 mm`, documentando esa zona en un *Callout* `1:50` o mediante representación simbólica agrupada/desplazada sin mover el sólido 3D.
- **Dimensionamiento de la vista del Cuarto CGBT:** A escala **`1:20`**, el cuarto de `4,20 × 3,50 m` mide **`210 mm × 175 mm`** en papel A1: cabe cómodamente en un cuadrante de la lámina junto con sus detalles constructivos, permite leer sin solapes los armarios (`110 mm × 40 mm` en papel), los `14` tubos `Ø50 mm` (`2,5 mm` de ancho real cada uno), los radios de curvatura y el pasillo libre frontal.
- **Deslinde LOD/LOI y normativa:** Dejar explícito en la Matriz que cumplir `LOD 300/350` o imprimir a `1:20 Fine` aporta fidelidad geométrica y constructiva, pero la verificación del pasillo mínimo de maniobra frente a cuadros, ventilación del cuarto SAI y capacidad de corte sigue sujeta al cálculo eléctrico y a la normativa vigente aplicable en la ubicación del edificio (p. ej., REBT en España o normativa nacional correspondiente).

#### Preguntas de reflexión final
- ¿Qué señal temprana te indicará en un proyecto futuro que estás forzando una escala demasiado pequeña para la densidad real de tus instalaciones?
- ¿Qué argumentos técnicos emplearías ante un cliente que solicita «todo el modelo en LOD 400 y todas las plantas en nivel Alto»?

---

## 7. Evaluación

### Evaluación diagnóstica
- **Instrumento:** Actividad 1 (*El reto de la lupa en PDF*) con análisis visual al `100 %` de escala real sobre 3 extractos PDF al inicio de la sesión.
- **Propósito:** Detectar concepciones erróneas habituales sobre zoom en pantalla, empastamiento de grosores de línea y escalado de símbolos. Sin peso en la calificación.

### Evaluación formativa
- **Supervisión continua en laboratorio (Actividad 2) y tutoría de equipos sobre el caso *Mirador Norte* (Actividad 3):** Revisión directa en Revit del Editor de Familias (*Visibility Settings*), la configuración de *Line Weights*, la vinculación correcta de *Callouts* (`1:50` y `1:20`) y la ausencia de desplazamientos falsos de cajas 3D para ocultar solapes simbólicos.

### Evaluación sumativa
Consta de dos evidencias obligatorias al concluir el tema:
1. **Test técnico de verificación (6 ítems situacionales y de cálculo escalar básico, 10 minutos, 30 % de la nota):** Evalúa el comportamiento de `Conduits` vs. `Cable Trays` en *Coarse/Medium/Fine*, el escalado anotativo, el cálculo `L / N` en papel y la diferencia entre *Detail Level*, `LOD` y `LOI`.
2. **Entregable práctico del Caso *Edificio Mirador Norte* (70 % de la nota):** Modelo `.rvt` saneado (con familia optimizada, plantas `1:100`, *Callouts* `1:50` y `1:20`, PDF comprobado al `100 %`) más la **Matriz Escala–Nivel de Detalle–LOD/LOI**, calificados con la rúbrica siguiente.

### Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
|---|---|---|---|---|
| **1. Control de *Detail Level* en familias y canalizaciones** | Mantiene todas las vistas en `Fine` o conserva familias pesadas con 3D completo visible en `Coarse` sin símbolo 2D. | Separa parcialmente símbolos en `Coarse`, pero presenta desalineaciones o desconoce la diferencia entre tubos y bandejas en `Medium`. | Configura con exactitud `Coarse`/`Medium`/`Fine` en tubos, bandejas y familias `.rfa`, separando símbolo 2D ligero de geometría 3D. | Optimiza además peso de familias (`< 1–2 MB`), añade volumen de mantenimiento activable en `Fine` y verifica la vista 3D de exportación/Twinmotion. |
| **2. Elección de escalas (`1:100`/`1:50`/`1:20`) y *Callouts*** | Documenta cuartos técnicos complejos solo a `1:100` o duplica plantas manualmente sin *Callouts* vinculados. | Crea vistas ampliadas pero mantiene incoherencias de `Detail Level` (p. ej. `1:20` en `Coarse`) o omite zonas densas críticas. | Aplica `1:100` general (`Coarse`), `1:50` zonas densas (`Medium`) y `1:20` cuarto CGBT (`Fine`) mediante *Callouts* limpios y legibles. | Justifica matemáticamente la resolución de papel (`L / N`), gestiona el umbral *Hide at scales coarser than* y produce láminas PDF perfectamente legibles al `100 %`. |
| **3. Densidad gráfica, anotación y *Line Weights*** | Mueve físicamente cajas 3D para separar símbolos 2D o entrega PDF empastados por plumas gruesas. | Evita mover elementos 3D, pero mantiene solapes simbólicos o no ajusta `Line Weights` para las distintas escalas. | Respeta la posición 3D exacta, resuelve solapes con escala/desplazamiento simbólico y calibra grosores de línea limpios en PDF. | Documenta un criterio claro de convivencia entre símbolos 2D escalados y geometría real, asegurando lectura inmediata en obra sin sobrecarga visual. |
| **4. Deslinde LOD/LOI, uso de IA y límites normativos** | Confunde `Fine` de Revit con `LOD 400`, exige sobre-modelado innecesario o no valida salidas de IA ni límites normativos. | Distingue de forma básica `LOD` y `LOI`, pero la matriz carece de concreción técnica por categoría o de advertencias normativas. | Elabora una Matriz Escala–Detalle–LOD/LOI coherente, distingue datos de geometría y separa documentación BIM de cálculo eléctrico/DIALux. | Si usa IA en la matriz BEP, anonimiza completamente el proyecto, corrige confusiones típicas de LLM entre `LOD` y `Detail Level` y explicita verificación reglamentaria aplicable. |

### Actividad de autoevaluación
Cada estudiante completa en el campus virtual tres cuestiones breves de cierre:
1. *¿Qué regla rápida de cálculo en papel (`L / N`) aplicaré a partir de hoy antes de elegir escala y nivel de detalle para un pasillo con múltiples tubos?*
2. *Al revisar mis propias familias eléctricas actuales, ¿cuál es el cambio inmediato que reduciría más el peso y mejoraría el rendimiento del proyecto?*
3. *¿Cómo explicaré a un cliente o jefe de obra la diferencia entre el nivel de detalle visual en Revit, el LOD/LOI contractual y el cálculo eléctrico reglamentario?*

---

## 8. Materiales y recursos

### Guion estructurado de diapositivas (Slide 1 a Slide 8)

| Diapositiva | Título | Contenido clave y visual | Notas para el formador |
|---|---|---|---|
| **Slide 1** | Portada: Tema 3. Escalas y niveles de detalle | Título, Bloque 4 (Tema 3/8 · 24/50), objetivos de aprendizaje y aviso técnico-normativo. | Conectar la clasificación de sistemas del Tema 2 con cómo se dibujan en distintas escalas. |
| **Slide 2** | Activación: El mito del zoom en pantalla frente al PDF al `100 %` | Captura comparativa de un mismo pasillo a `1:100 Fine` (mancha negra) frente a `1:100 Coarse` y `1:50 Medium`. | Ejecutar la Actividad 1 antes de explicar la fórmula `L / N`. |
| **Slide 3** | Comportamiento real de *Coarse / Medium / Fine* en Revit MEP | Tabla visual comparando `Conduits`, `Cable Trays` y familias `.rfa` (`Electrical/Lighting Fixtures`) en los 3 niveles. | Remarcar la diferencia real entre `Conduit` (doble línea solo en `Fine`) y `Cable Tray` (doble línea en `Medium` y `Fine`). |
| **Slide 4** | Anatomía de una familia eléctrica eficiente (`.rfa`) | Esquema del Editor de Familias: *Visibility Settings* (símbolo 2D en `Coarse`, envolvente 3D en `Medium`, detalle + clearance en `Fine`). | Advertir del impacto en rendimiento de familias comerciales de `15+ MB` sin optimizar. |
| **Slide 5** | Escalas constructivas: `1:100` vs. `1:50` vs. `1:20` y *Callouts* | Comparativa matemática de un tubo `Ø25 mm` y un cuarto CGBT en las tres escalas sobre plano A1. | Mostrar en vivo cómo crear un *Callout* vinculado y controlar *Hide at scales coarser than*. |
| **Slide 6** | Escalado anotativo, solape de símbolos y *Line Weights* | Diagrama del conflicto entre símbolo `3 mm` (`300 mm` a `1:100`) y cajas reales separadas `120 mm` + solución con *Symbol Offset*. | Enfatizar la regla de oro: nunca mover un objeto 3D real para maquillar un plano 2D. |
| **Slide 7** | `Detail Level` ≠ `LOD` / `LOI` y límites de modelado eléctrico | Infografía en 2 ejes: Precisión Geométrica (`LOD 200–350`) frente a Riqueza de Datos (`LOI`) y cálculo externo independiente. | Mostrar brevemente cómo validar una tabla LOD/LOI redactada con IA sobre datos anónimos. |
| **Slide 8** | Caso *Mirador Norte*, evaluación y puente al Tema 4 | Resumen del caso de rescate, rúbrica clave y adelanto del Tema 4 (Dimensiones, anotaciones, textos y etiquetas). | Recordar entrega del `.rvt` saneado, PDF al `100 %` y Matriz BEP. |

### Ficha de trabajo del alumnado
Documento descargable (2 páginas) con:
1. **Tabla de cálculo rápido de resolución en papel (`L / N`)** para tubos (`Ø20`, `Ø25`, `Ø32`, `Ø50`, `Ø63 mm`), bandejas (`200`, `300`, `600 mm`) y símbolos (`2,5` y `3,5 mm`) a escalas `1:100`, `1:50` y `1:20`.
2. **Diagrama de decisión de *Visibility Settings*** en el Editor de Familias para extrusiones 3D, cajas de maniobra y símbolos 2D.
3. **Checklist de exportación PDF al `100 %`** para validar legibilidad antes de emitir a obra.

### Plantilla técnica práctica: Matriz Escala – Nivel de Detalle – LOD / LOI Eléctrico

*(Plantilla editable para integrar en el BEP de proyecto; los niveles LOD/LOI son orientativos y deben contrastarse con el contrato y la normativa vigente aplicable)*:

| Tipo de Plano / Vista | Escala estándar | *Detail Level* Revit | Representación de Tubos / Bandejas | Representación de Equipos / Luminarias | Alcance geométrico orientativo (LOD) | Requisitos clave de datos (LOI) |
|---|---|---|---|---|---|---|
| **Planta general Fuerza / Alumbrado** | `1:100` *(o `1:200` gran nave)* | `Bajo (Coarse)` | Línea simple simbólica + símbolos subida/bajada | Símbolo 2D anotativo normalizado (`3 mm` papel) | `LOD 200–300` (ubicación coordinada) | `E_Servicio`, `Panel`, `Circuit Number`, potencia/carga |
| **Planta densa / Techo modulado / Racks** | `1:50` | `Medio (Medium)` | Tubos `1-line` limpia; Bandejas `2-line` anchura real | Símbolo 2D o caja 3D simple centrada en placa | `LOD 300` (coordinación falsa/techo y ejes) | `E_Servicio`, `E_Tablero_Origen`, altura `Elevation`, código luminaria |
| **Cuartos eléctricos (CGBT / CT) y Patinillos** | `1:20` *(o `1:25`)* | `Alto (Fine)` | Tubos y Bandejas en geometría real 3D doble línea + codos | Geometría real 3D + puertas + volumen de maniobra | `LOD 350` (soportes, acometidas, espacios libres) | Dimensiones exactas, `kA` corte, grado IP/IK, `E_Tablero_Origen` |
| **Vista 3D Coordinación / Direct Link Twinmotion** | `1:50` *(o vista 3D)* | `Alto (Fine)` | Geometría 3D sólida real con espesores y accesorios | Geometría 3D optimizada (sin tornillería `LOD 400`) | `LOD 300–350` | `E_Servicio` para filtros, material visual (en Twinmotion) |

### Lecturas y recursos recomendados
> **Advertencia de validación obligatoria:** Antes de aplicar en proyectos reales cualquier guía LOD, familia descargada de catálogo o criterio dimensional de cuartos eléctricos, el formador y el alumnado deben **validar la versión exacta de Revit utilizada, la vigencia del estándar BEP elegido y la edición reglamentaria aplicable en su jurisdicción**.
- Documentación oficial de **Autodesk Revit — Detail Level, Family Visibility Settings & Line Weights** (Ayuda oficial correspondiente a la versión instalada; *comprobar menús exactos de versión*).
- **BIMForum — Level of Development (LOD) Specification** (secciones de sistemas eléctricos `D50` como referencia internacional ilustrativa de alcance geométrico y no geométrico; *verificar edición vigente*).
- **UNE-EN ISO 19650 / ISO 7817 (Level of Information Need)** como marco organizativo de definición de necesidades de información BIM *(validar aplicación contractual)*.
- Reglamentos técnicos de seguridad y espacios mínimos en salas eléctricas aplicables al país (p. ej. **REBT en España — ITC-BT-17 / ITC-BT-19** o **NEC/NFPA 70 art. 110** en otros ámbitos; *ejemplos exclusivamente ilustrativos para distinguir BIM de diseño legal*).

### Glosario de términos clave

| Término | Definición |
|---|---|
| **Nivel de detalle (*Detail Level*)** | Parámetro de vista en Revit (`Coarse` / Bajo, `Medium` / Medio, `Fine` / Alto) que controla si las canalizaciones y familias se dibujan de modo simbólico simplificado o con geometría 3D real completa. |
| **Línea simple simbólica (*1-Line*)** | Representación axial unifilar utilizada en detalle Bajo (y Medio en tubos) que evita el solape gráfico en escalas generales como `1:100` o `1:200`. |
| **Doble línea real (*2-Line*)** | Representación geométrica a escala real del diámetro exterior de tubos (en detalle Alto) o anchura real de bandejas (en detalle Medio y Alto). |
| **Escalado anotativo** | Comportamiento por el cual textos, cotas, etiquetas y símbolos de anotación genérica mantienen tamaño constante en milímetros sobre papel al cambiar la escala de la vista. |
| **Vista de llamada (*Callout*)** | Vista ampliada vinculada a una zona acotada de una planta general, empleada para documentar áreas densas (`1:50`) o cuartos eléctricos (`1:20`) con referencia automática en lámina. |
| **Grosores de línea (*Line Weights*)** | Tabla de correspondencia entre números de pluma (`1–16`) y espesor real de impresión en milímetros según la escala de la vista, clave para evitar empastamientos en PDF. |
| **LOD (*Level of Development*)** | Referencia contractual orientativa que define la precisión geométrica, dimensional y de coordinación de un elemento BIM según la fase del proyecto; no equivale a *Detail Level* de Revit. |
| **LOI (*Level of Information*)** | Grado de profundidad y fiabilidad de los datos alfanuméricos no gráficos (parámetros eléctricos, identificadores, potencias, referencias) contenidos en los elementos del modelo. |

---

## 9. Adaptaciones

### Sesión presencial
- Entregar físicamente en la Actividad 1 copias impresas en papel A3 real de los tres extractos PDF (`1:100 Fine`, `1:100 Coarse` y `1:20 Fine`) junto con un escalímetro para que el alumnado mida sobre papel el empastamiento real de líneas.
- Realizar en proyector el despiece en vivo de la familia `Luminaria_LED_Pesada_B4T3.rfa`, mostrando paso a paso el impacto de desactivar extrusiones pesadas en `Coarse`.
- Revisar en los monitores del aula los PDF generados al `100 %` comprobando que nadie haya movido cajas 3D para disimular solapes simbólicos.

### Sesión online síncrona
- Indicar explícitamente al alumnado que ajuste su visor PDF (Adobe Acrobat, Edge o navegador) exactamente al **`100 %`** (o use la regla de pantalla calibrada) durante la Actividad 1 para percibir el tamaño real sin autoengaño por zoom.
- Organizar salas pequeñas (*breakout rooms*) de 3 personas en la Actividad 3 (*Mirador Norte*), compartiendo un tablero común donde cada equipo pega captura de su *Callout* `1:20` del CGBT y su Matriz Escala–Detalle–LOD/LOI.
- Compartir de forma síncrona una comparativa en pantalla dividida entre la vista `3D Coarse` y la vista `3D Fine` conectadas conceptualmente con los flujos posteriores de Twinmotion.

### Sesión asíncrona
- Estructurar los contenidos en 4 vídeos breves (10–12 min cada uno): *(1) Anatomía `Coarse/Medium/Fine` en tubos, bandejas y familias*; *(2) Aritmética de escalas `1:100 / 1:50 / 1:20` y Callouts*; *(3) Comportamiento anotativo, Symbol Offset y Line Weights*; *(4) Deslinde Detail Level vs. LOD/LOI*.
- Proporcionar el paquete de archivos `Lab_Escalas_B4_T3.rvt`, `Luminaria_LED_Pesada_B4T3.rfa` y `Caso_MiradorNorte_B4_T3.rvt` junto con los 3 PDF de muestra calibrados.
- Solicitar la entrega de la lámina PDF con planta `1:100`, llamada `1:50` y cuarto `CGBT 1:20`, además de la Matriz Escala–Detalle–LOD/LOI y una breve revisión crítica cruzada en foro sobre el entregable de un compañero.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Aprovecha el modelado 3D de aparatos, luminarias, tubos y accesorios del **Bloque 3**, las **plantillas de vista** del **Tema 1 del Bloque 4** y los **parámetros y filtros de sistemas** del **Tema 2 del Bloque 4**, ajustando ahora la representación geométrica adecuada a cada escala de plano.
- **Competencias que desarrolla:** Selección matemática y técnica de escalas documentales, optimización de familias `.rfa` por nivel de detalle, prevención de empastamientos en PDF mediante calibración de grosores de línea, creación de vistas de llamada para cuartos técnicos y distinción rigurosa entre visualización Revit, LOD y LOI.
- **Conexión dentro del programa (6 módulos / 50 temas):**
  - **Tema anterior:** Sucede directamente al **Tema 2 del Bloque 4: Clasificación de sistemas: tomacorrientes, alumbrado y modelado 3D de tubos** (Tema 23 de 50), aplicando ahora el nivel de detalle idóneo a los sistemas y canalizaciones ya clasificados.
  - **Tema posterior:** Establece la base geométrica y escalar indispensable para el **Tema 4 del Bloque 4: Dimensiones, anotaciones, textos y etiquetas** (Tema 25 de 50), dado que las alturas de texto, cotas de replanteo, directrices y etiquetas paramétricas se diseñan siempre respecto a la escala y densidad gráfica elegidas en cada vista.
- **Evidencia de aprendizaje:**
  1. Familia `.rfa` optimizada con separación limpia entre símbolo 2D (`Coarse`) y geometría 3D (`Medium`/`Fine`).
  2. Modelo `.rvt` del caso *Mirador Norte* con vistas a `1:100`, `1:50` y *Callout* `1:20` del CGBT + juego de láminas PDF verificadas al `100 %`.
  3. **Matriz Escala–Nivel de Detalle–LOD/LOI** cumplimentada y cuestionario sumativo/autoevaluación completados en plataforma.

---

## Siguientes pasos para el formador

1. **Calibrar los 3 PDF de la Actividad 1:** Comprobar que los extractos PDF del reto inicial tienen tamaño de página exacto (`A1` o `A3`) para que al abrirlos al `100 %` reflejen fielmente el empastamiento real de líneas en papel.
2. **Revisar la familia pesada de laboratorio (`Luminaria_LED_Pesada_B4T3.rfa`):** Confirmar que pesa lo suficiente (`~10–15 MB` o geometría densa equivalente) como para notar la mejora de fluidez al ocultar su malla 3D en `Coarse`, sin llegar a bloquear ordenadores de gama media del alumnado.
3. **Verificar el archivo `Caso_MiradorNorte_B4_T3.rvt`:** Comprobar que las `5` tomas desplazadas por error `300 mm` están documentadas en la guía del instructor para validar que el alumnado las devuelve a su coordenada original.
4. **Preparar ejemplos contrastados de *Line Weights*:** Guardar una captura comparativa de impresión con plumas por defecto vs. plumas calibradas en `1:100` para proyectar durante la Fase 6.
5. **Anticipar el Tema 4:** Al despedir la clase, mostrar brevemente cómo una cota de replanteo y una etiqueta paramétrica de tubo se adaptan al cambiar de `1:100` a `1:20`, enlazando directamente con el siguiente tema sobre dimensiones, anotaciones, textos y etiquetas.
