# Tema 4. Dimensiones, anotaciones, textos y etiquetas

> **Aviso de alcance técnico y normativo:** Esta guía forma parte de la especialización técnica **IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas** (6 módulos / 50 temas). **No constituye un programa MBA** ni otorga habilitación legal para firmar proyectos, dictámenes o certificados eléctricos oficiales. Todas las alturas de montaje de mecanismos, cotas de seguridad o criterios de accesibilidad mencionados (REBT, CTE DB-SUA, IEC 60364, NEC/NFPA 70) se presentan como **ejemplos ilustrativos**: deben verificarse siempre el país, la autoridad competente, el reglamento y la edición vigente aplicables. Un plano perfectamente acotado y etiquetado en Revit MEP **no sustituye** el cálculo eléctrico normativo ni el cálculo lumínico en DIALux.

---

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Tema 4. Dimensiones, anotaciones, textos y etiquetas |
| **Bloque y posición dentro del programa** | Bloque 4: Documentación BIM — Tema 4 de 8 (Tema 25 de 50 del programa) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Manejo de plantillas de vista (Bloque 4, Tema 1), parámetros compartidos y clasificación de sistemas (Bloque 4, Tema 2), y escalas y niveles de detalle (Bloque 4, Tema 3) |
| **Resultado general de aprendizaje** | Al finalizar la sesión, el alumnado documentará planos eléctricos en Revit MEP empleando etiquetas paramétricas vinculadas al modelo, cotas horizontales y de elevación sin ambigüedad constructiva, directrices limpias y notas clave (*Keynotes*) filtradas por lámina, evitando textos muertos manuales y solapes de anotación en zonas densas. |

---

## 2. Objetivos de aprendizaje

Al concluir las 4 horas de sesión, el alumnado será capaz de:

1. **Identificar** los riesgos constructivos derivados de utilizar textos manuales estáticos frente a etiquetas paramétricas (`Tags`) y notas clave (`Keynotes`) vinculadas a la base de datos BIM. *(Nivel de Bloom: Recordar)*
2. **Diferenciar** los usos documentales de cotas alineadas de replanteo, restricciones de equidistancia (`EQ`), cotas de elevación (`Spot Elevation`), etiquetas de altura de montaje, notas clave y notas generales de plano. *(Nivel de Bloom: Comprender)*
3. **Configurar** etiquetas personalizadas de Revit (`.rfa`) con parámetros nativos y compartidos (tablero, circuito, servicio, diámetro y cota referenciada al fondo o al eje) y leyendas de notas clave filtradas automáticamente por lámina (*Filter by Sheet*). *(Nivel de Bloom: Aplicar)*
4. **Analizar** planos eléctricos congestionados (pasillos con múltiples bandejas, salas técnicas y bordes de recorte) para diagnosticar solapes de texto, recortes involuntarios de anotación y referencias de elevación ambiguas. *(Nivel de Bloom: Analizar)*
5. **Evaluar** y estandarizar un protocolo de anotación limpia y control de calidad textual asistido de forma segura por IA sobre notas clave anonimizadas, verificando manualmente cada especificación antes de emitir los planos. *(Nivel de Bloom: Evaluar)*

---

## 3. Contenidos esenciales

### 3.1. Etiquetado paramétrico (*Tags*) frente a textos muertos manuales

#### Explicación breve y clara
Una de las causas más frecuentes de órdenes de cambio, discusiones en obra y solicitudes de información (*RFIs*) es el uso de **textos muertos manuales (`Text Notes` / `TX`)** para indicar identificadores de cuadros, números de circuito, diámetros de tubos o alturas de instalación. Cuando el proyecto evoluciona y un tubo pasa de `Ø25 mm` a `Ø32 mm` o un circuito cambia de `CS-01` a `CS-P1-NOR`, el modelo 3D y las tablas se actualizan, pero el texto manual escrito a mano permanece congelado mintiendo en el plano impreso.

La práctica BIM rigurosa prohíbe anotar atributos del modelo con texto libre y exige emplear **etiquetas paramétricas (`Tags`, archivos `.rfa`)**. Una etiqueta lee en tiempo real **parámetros integrados** (`Panel`, `Circuit Number`, `Diameter(Trade Size)`, `Service Type`) o **parámetros compartidos** (`E_Servicio`, `E_Tablero_Origen`, `E_Altura_Montaje`). No obstante, conviene mantener un control crítico constante: la etiqueta refleja fielmente lo que dice el modelo BIM, por lo que **si un parámetro de diámetro o circuito fue mal introducido o no se validó frente al cálculo eléctrico, la etiqueta reproducirá automáticamente el error**.

#### Conceptos clave
- **Texto muerto (*Dumb Text*):** Nota de texto estática (`TX`) desconectada de los objetos del modelo; válida únicamente para rótulos generales o aclaraciones constructivas globales, nunca para diámetros, circuitos, paneles ni cotas puntuales.
- **Etiqueta de categoría vs. Multi-categoría:** Familias `.rfa` específicas (`Electrical Equipment Tag`, `Electrical Fixture Tag`, `Lighting Fixture Tag`, `Conduit Tag`, `Cable Tray Tag`) frente a etiquetas transversales (`Multi-Category Tag`) basadas en parámetros compartidos comunes.
- **Texto de etiqueta (*Label*) compuesto:** Dentro del Editor de Familias de etiqueta, capacidad de concatenar múltiples parámetros con prefijos, sufijos y saltos de línea (p. ej., `CS-P1 / C04` + `Ø32 mm` + `E_Servicio`).
- **Trazabilidad entre modelo, etiqueta y cálculo:** Garantía de que cualquier cambio en la base de datos BIM actualiza al instante todas las plantas, detalles y tablas, manteniendo la obligación de validar los valores frente a la memoria de cálculo eléctrico y fotométrico.

#### Definiciones necesarias
- **Etiqueta paramétrica (*Tag*):** Familia de anotación 2D vinculada asociativamente a un ejemplar del modelo BIM que muestra dinámicamente valores reales de sus parámetros de ejemplar o de tipo, escalándose automáticamente según la vista.
- **Texto de etiqueta (*Label*):** Contenedor dinámico dentro de una familia de etiqueta `.rfa` que enlaza uno o varios campos de parámetro con formato tipográfico, prefijos, sufijos y separadores.
- **Etiqueta huérfana (*Orphaned Tag*):** Etiqueta que muestra un signo de interrogación (`?`) al perder la referencia válida de su parámetro (valor vacío en el elemento) o quedar desvinculada tras eliminarse el ejemplar anfitrión.

#### Ejemplo práctico realista
En una planta de oficinas, una fila de `14` luminarias LED de `36 W` y el tubo rígido `Ø25 mm` que las alimenta estaban anotados manualmente con texto `TX`: `"L1 - C02 (CS-01) / Ø25"`. Tras revisar la caída de tensión y redistribuir cargas en el cuadro, el ingeniero mueve ese ramal al circuito `C05` del subcuadro `CS-P1-NOR` y aumenta el tubo troncal a `Ø32 mm`:
- Con **texto manual**, las `14` notas en plano siguen diciendo `"C02 (CS-01) / Ø25"`, provocando un error de cableado y tubería en obra.
- Con **etiqueta paramétrica compuesta** (`Panel` + `Circuit Number` en luminaria y `E_Tablero_Origen` + `E_Servicio` + `Diameter(Trade Size)` en el tubo), al actualizar el circuito lógico y el tubo en el modelo 3D, todas las etiquetas de las vistas de planta y detalles pasan automáticamente a mostrar **`CS-P1-NOR / C05`** y **`Ø32 mm (ALU-NOR)`** sin editar un solo texto. *(Nota de verificación: el aumento de sección de tubo y circuito debe quedar respaldado en el cuadro de cargas y memoria de cálculo conforme a la normativa vigente).*

#### Errores frecuentes
- Usar `Text Note` (`TX`) para escribir nombres de cuadros (`CGBT`), potencias o diámetros de bandejas sobre un plano de Revit, destruyendo la asociatividad del BIM.
- Crear etiquetas que leen parámetros de tipo genéricos (`Type Comments`) para datos variables de obra (`Circuito`, `Altura`), generando etiquetas iguales donde los elementos difieren.
- Ocultar etiquetas con `?` dejándolas en blanco o tapándolas con texto manual encima en lugar de rellenar el parámetro compartido faltante en el elemento.
- Suponer que porque todas las etiquetas de tubo muestran datos completos sin `?`, los diámetros cumplen automáticamente el factor de llenado reglamentario de conductores.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué sustituir etiquetas paramétricas por texto manual (`TX`) anula una de las ventajas principales de documentar instalaciones eléctricas en BIM?
2. ¿Qué parámetro debes usar dentro de *Edit Label* para que una misma etiqueta personalizada muestre un dato propio que no existe de serie en Revit (como `E_Servicio` o `E_Tablero_Origen`)?
3. Si todas las etiquetas de tu plano leen automáticamente el modelo sin mostrar `?`, ¿significa eso que el circuito y la canalización cumplen la normativa eléctrica? Justifica tu respuesta.

---

### 3.2. Cotas de replanteo, elevaciones de canalización y alturas de montaje

#### Explicación breve y clara
Para que el equipo instalador ejecute en obra sin improvisaciones, las etiquetas de identificación deben combinarse con tres familias de acotación rigurosa:
1. **Cotas horizontales de replanteo (*Aligned Dimensions* `DI`):** Ubican ejes de cuadros eléctricos, cajas de suelo, luminarias y recorridos paralelos de bandejas respecto a **ejes estructurales (*Grids*) o caras acabadas de muros fijos**, nunca respecto a mobiliario móvil ni a elementos temporales. Para alineaciones simétricas de luminarias en falsos techos modulados se utilizan restricciones de equidistancia (`EQ`).
2. **Cotas de elevación de canalizaciones (*Spot Elevation* `EL` y etiquetas de cota):** Indican la altura exacta de tubos y bandejas. Es obligatorio explicitar en la leyenda del plano si la cota indica el **fondo inferior (*B.O.T. / Fondo*)** o el **eje (*C.L. / Eje*)** respecto al **Nivel de Piso Terminado (*NPT / FFL*)** del nivel correspondiente.
3. **Alturas de montaje de mecanismos y cuadros:** Pueden informarse mediante parámetro compartido (`E_Altura_Montaje`) o cuadro resumen de alturas típicas en lámina, comprobando siempre las alturas reglamentarias y de accesibilidad aplicables en el país del proyecto.

#### Conceptos clave
- **Cota de replanteo referenciada a ejes/estructura:** Acotación mediante `DI` anclada únicamente a *Grids*, pilares o tabiques fijos; permite al oficial trazar en obra con láser antes incluso de que exista el mobiliario.
- **Equidistancia paramétrica (`EQ`):** Símbolo interactivo al acotar 3 o más luminarias/bandejas entre dos muros o ejes; mantiene el centrado geométrico uniforme incluso si la arquitectura desplaza un tabique `15 cm`.
- **Referencia de elevación (*Bottom* vs. *Centerline* respecto a *NPT*):** Distinción crítica en obra: una bandeja de `60 mm` de canto cuyo eje (`Centerline`) está a `+3,03 m` tiene su fondo inferior (*Bottom Elevation*) exactamente a **`+3,00 m`** sobre el `NPT`. Mezclar ambos criterios genera choques de `30–150 mm` con conductos vecinos.
- **Alturas típicas de montaje (sujetas a verificación normativa):** Toma general (`+0,30 m`), interruptor/toma encimera (`+1,10 m`), cuadros eléctricos (p. ej. envolventes con mecanismos accesibles entre `1,40 m` y `2,00 m` o franjas de accesibilidad); **valores meramente ilustrativos que deben comprobarse en la normativa nacional vigente**.

#### Definiciones necesarias
- **Cota de elevación de punto (*Spot Elevation* `EL`):** Anotación dinámica de Revit que consulta la coordenada vertical $Z$ real de una cara superior, inferior o eje de un elemento 3D respecto al origen de nivel (`Relative`) o cota absoluta de proyecto (`Project`/`Survey`).
- **Nivel de Piso Terminado (`NPT` / `FFL`):** Cota de referencia del pavimento acabado de cada planta desde la cual se miden habitualmente en obra las alturas de mecanismos, cuadros y soportes suspendidos.
- **Cota de alineación (*Aligned Dimension* `DI`):** Medición lineal entre caras paralelas, ejes de familias o líneas de rejilla que permanece paramétricamente vinculada a los elementos acotados.

#### Ejemplo práctico realista
En un corredor técnico de **`2,60 m` de ancho**, se instalan dos bandejas paralelas (`300 × 60 mm` de fuerza normal y `200 × 60 mm` de alumbrado/emergencia) y una hilera centrada de luminarias LED `600 × 600 mm` en falso techo a `+2,80 m`:
- En horizontal (`DI`), la bandeja 1 se acota a **`450 mm`** desde la cara acabada del muro izquierdo de hormigón (y se acotan `350 mm` entre ejes de bandejas 1 y 2 para dejar margen de tendido y acceso lateral).
- En vertical (`Spot Elevation` o etiqueta de bandeja configurada con parámetro nativo `Bottom Elevation`), se fija la cota de fondo inferior a **`+3,10 m s/NPT` (`B.O.B. / Fondo`)** dejando claro en la carátula: *«Todas las cotas de elevación de bandejas corresponden al fondo inferior respecto a NPT, salvo indicación expresa»*. Si el falso techo sube luego a `+2,90 m`, la relación libre en el plénum (`200 mm`) se recalcula de inmediato.
- Para las tomas e interruptores de las aulas anexas se especifican de forma ilustrativa `+0,30 m` (tomas bajas) y `+1,10 m` (interruptores y tomas accesibles), dejando constancia explícita de verificar las alturas mínimas de zonas húmedas y accesibilidad conforme al reglamento aplicable (p. ej., REBT ITC-BT-27 y CTE DB-SUA en España).

#### Errores frecuentes
- Acotar distancias de cajas de suelo o luminarias tomando como referencia un escritorio o sofá del vínculo arquitectónico en lugar de los ejes estructurales o muros fijos.
- Configurar `Spot Elevation` en modo *Display Elevation = Top* en unas vistas y *Bottom* en otras sin indicarlo en la etiqueta ni en la leyenda, engañando al montador en la altura real libre bajo bandeja.
- Sobreescribir manualmente el valor numérico de una cota en Revit (usando *Replace with Text* si se fuerza o trucando textos), rompiendo la integridad del plano frente al modelo 3D.
- Imprimir cotas con precisión decimal inconsistente (p. ej., `1.234,5678 mm` en unas vistas y `1,23 m` en otras) o con unidades sin especificar en las notas generales del plano.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué diferencia práctica de cota existe para un tubo `Ø100 mm` o una bandeja de `100 mm` de alto si un plano anota el *Eje (Centerline)* frente al *Fondo inferior (Bottom)*?
2. ¿Por qué no deben anclarse cotas de replanteo eléctrico a mobiliario vinculado, y qué referencias deben emplearse en su lugar?
3. ¿Qué ventaja aporta la restricción `EQ` al acotar una línea de luminarias respecto a los muros o pilares de una sala?

---

### 3.3. Directrices (*Leaders*), notas clave (*Keynotes*) y jerarquía textual en planos

#### Explicación breve y clara
Un plano bien etiquetado puede seguir resultando confuso si las **directrices (*Leaders*)** se cruzan entre sí como una tela de araña o si las notas constructivas aparecen repetidas como párrafos enormes flotando en mitad del dibujo.

Para conseguir planos de ingeniería limpios y jerarquizados se distinguen tres niveles textuales:
1. **Etiquetas paramétricas con directriz controlada:** Lineamientos ortogonales con codo (`Elbow`), terminador coherente (punto relleno sobre superficie de bandeja/aparato o flecha sobre borde/eje) y colocación ordenada sin cruzar líneas de cota ni otras directrices.
2. **Notas clave (*Keynotes*):** Códigos numéricos cortos (`01`, `E-04`, `26.05`) vinculados a una tabla `.txt` externa mediante el parámetro `Keynote` del elemento/material o mediante *User Keynote*, acompañados de una **Leyenda de Notas Clave (`Keynote Legend`)** en cada lámina con el filtro **`Filter by Sheet`** activado.
3. **Notas generales de plano:** Breve bloque fijo en la zona derecha de la lámina con criterios transversales (unidades, referencia `NPT`, advertencia de comprobación en obra y verificación normativa).

#### Conceptos clave
- **Directriz con codo ortogonal (*Attached / Free End + Elbow*):** Trazado en ángulo recto limpio (`90°` o `45°` uniforme) que parte de la etiqueta hacia el elemento sin atravesar otros textos ni iconos eléctricos.
- **Terminadores normalizados (*Arrowheads*):** Regla gráfica estándar: **punto relleno (`Dot Filled 1,5 mm`)** cuando la directriz apunta al interior de un área/equipo o bandeja, y **flecha abierta/cerrada** cuando apunta a una arista o eje.
- **Nota clave (*Keynote*) frente a nota manual numerada:** Sistema nativo de Revit alimentado por un fichero `.txt` tabulado (`Código [TAB] Texto [TAB] Código Padre`) que garantiza redacción idéntica entre planos y evita errores de numeración.
- **Filtrado dinámico `Filter by Sheet` en `Keynote Legend`:** Ajuste en las propiedades de la leyenda de notas clave por el cual cada lámina muestra automáticamente **únicamente** las notas clave que están realmente etiquetadas en las vistas insertadas en esa lámina concreta.

#### Definiciones necesarias
- **Directriz (*Leader*):** Línea guía con terminador y codo que conecta visualmente una etiqueta, cota desplazada o nota clave con el objeto exacto al que hace referencia cuando no cabe sobre él.
- **Archivo de notas clave (*Keynote Table .txt*):** Base de datos de texto delimitada por tabulaciones vinculada al proyecto Revit (`Annotate -> Keynote Settings`), donde se centralizan especificaciones constructivas repetitivas (fijaciones cortafuegos, sellados intumescentes, alturas especiales, cajas estancas IP65).
- **Leyenda de notas clave (*Keynote Legend*):** Tabla especial de Revit diseñada para colocarse junto al cajetín de cada lámina listando código y descripción de las notas clave utilizadas en ella.

#### Ejemplo práctico realista
En una lámina `E-201` (Planta 1 Fuerza y Canalizaciones) hay requisitos específicos repetidos en varios puntos: sellado cortafuego al atravesar sectorizaciones, bandeja de rejilla con tapa ciega en paso bajo bajante sanitaria y toma estanca `IP65` en cuarto de limpieza. En vez de escribir párrafos de 4 líneas encima del dibujo:
- Se prepara un archivo `Keynotes_Electrico_BEP.txt` con códigos como `E-01` (*Sellado cortafuego EI-120 certificado en paso de muro sectorizado; verificar detalle E-501*), `E-02` (*Instalar tapa metálica de protección mecánica en tramo bajo tubería húmeda*) y `E-03` (*Base de toma estanca IP65 / IK08; verificar altura final con alicatado*).
- Se etiquetan los puntos exactos con **User/Element Keynote** mostrando solo el pequeño hexágono o recuadro `E-01`, `E-02`, `E-03` con directriz ortogonal limpia.
- En la lámina `E-201` se inserta la `Keynote Legend` configurada con **`Filter by Sheet = True`**: si el proyecto tiene `35` notas totales en el `.txt`, en `E-201` aparecen automáticamente **solo las `3` notas usadas en esa lámina**, manteniendo la lámina limpia y sin contradicciones con la Planta de Cubierta.

#### Errores frecuentes
- Dejar la `Keynote Legend` sin marcar **`Filter by Sheet`**, imprimiendo en la Planta Baja notas sobre placas fotovoltaicas de cubierta o centros de transformación inexistentes en esa lámina.
- Modificar el archivo `.txt` de notas clave usando espacios en vez de **tabuladores (`TAB`)**, provocando que Revit falle al recargar la tabla o descuadre las columnas de código y descripción.
- Cruzar directrices de etiquetas por encima de textos de otras etiquetas o atravesar cotas de replanteo en diagonal aleatoria (`17°`, `63°`, `112°`) generando ruido visual.
- Poner una flecha en el centro vacío de una habitación para señalar un falso techo o una bandeja en vez de emplear un punto relleno sobre la superficie o ajustar *Free/Attached End*.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué diferencia práctica existe entre un bloque de *Notas Generales*, una *Nota Clave (Keynote)* y una *Etiqueta Paramétrica (Tag)*?
2. ¿Qué función crítica cumple la opción **`Filter by Sheet`** en una `Keynote Legend` dentro de un juego de múltiples planos?
3. ¿Qué regla gráfica sencilla conviene respetar respecto a los terminadores de directriz (punto frente a flecha) y los ángulos de trazado?

---

### 3.4. Prevención de solapes en planos densos y control de calidad textual asistido por IA

#### Explicación breve y clara
En proyectos reales —especialmente pasillos de hospitales, laboratorios o cuartos de cuadros— la mayor dificultad de documentación no está en modelar el tubo en 3D, sino en lograr que **decenas de etiquetas, cotas y notas clave convivan en el plano sin pisarse ni quedar cortadas al imprimir**.

Para resolver planos densos sin caos se aplican técnicas sistemáticas: creación de **pasillos de anotación** alineados mediante planos de referencia, uso de **etiquetas multi-directriz (*Multi-Leader Tags*)** para series idénticas de luminarias o mecanismos (según compatibilidad de versión en Revit 2022 y posteriores), ajuste fino de la **Región de recorte de anotación (*Annotation Crop*)** en líneas de corte entre sectores, y aplicación selectiva de *Tag All Not Tagged*. Finalmente, asistentes de IA como ChatGPT o Claude resultan muy eficaces para auditar la calidad redaccional de notas generales y ficheros `Keynotes .txt` anonimizados (eliminando ambigüedades como *«instalar adecuadamente»* y unificando abreviaturas), siempre bajo revisión técnica humana.

#### Conceptos clave
- **Pasillo o carril de anotación (*Annotation Lane*):** Banda espacial libre (p. ej., borde exterior del pasillo o zona despejada junto al tabique) donde se alinean vertical u horizontalmente todos los cuadros de texto de las etiquetas sacando directrices ordenadas hacia el haz de bandejas.
- **Etiqueta multi-directriz (*Multi-Leader Tag*):** Función nativa en versiones recientes de Revit (desde Revit 2022; *verificar versión instalada*) que permite conectar una única etiqueta `L1 - CS01/C03` a múltiples luminarias o tomas idénticas, reduciendo drásticamente el volumen de texto repetido en planta.
- **Recorte de anotación (*Annotation Crop*):** Marco exterior discontinuo alrededor del `Model Crop` de una vista; cualquier etiqueta, texto o cota cuyo punto de inserción o caja quede fuera de ese segundo marco desaparecerá al imprimir, provocando cortes silenciosos cerca de líneas de partida (*Matchlines*).
- **Auditoría redaccional segura con IA:** Revisión con LLM de notas constructivas y diccionarios de notas clave sin datos de cliente para detectar verbos ambiguos, inconsistencias terminológicas (p. ej. mezclar «cuadro», «tablero» y «armario» sin definir equivalencia) y faltas de concordancia antes de cargar el `.txt` en Revit.

#### Definiciones necesarias
- **Solape de anotación (*Annotation Clash*):** Superposición gráfica de etiquetas, cotas, directrices o textos con otros textos o con símbolos de instalación que impide leer con fiabilidad datos constructivos en PDF o papel.
- **Línea de partida (*Matchline*):** Línea límite trazada en plantas de edificios extensos que divide una planta grande en dos o más vistas parciales (`Sector A`, `Sector B`) insertadas en láminas separadas.
- **Ambigüedad contractual en notas:** Redacción imprecisa en notas de plano o *Keynotes* (como «dimensionar correctamente» o «dejar suficiente espacio») que traslada decisiones no especificadas al instalador y origina conflictos o sobrecostes en obra.

#### Ejemplo práctico realista
En un corredor hospitalario de `3,00 m` de ancho convergen `4` bandejas eléctricas, `2` conductos de climatización y `12` luminarias empotradas `L2`:
- Si se usa `Tag All Not Tagged` sin control, Revit coloca las `12` etiquetas de luminaria encima de las bandejas y tapa `6` cotas de replanteo.
- La solución ordenada consiste en: *(1)* aplicar **etiqueta multi-directriz** (o agrupar por tipología verificada en la versión de Revit) reduciendo las `12` etiquetas de `L2` a `3` etiquetas agrupadas limpias por tramo; *(2)* sacar las etiquetas de las `4` bandejas lateralmente hacia un **carril de anotación** paralelo al tabique derecho alineando todos los textos mediante guías de alineación azul de Revit; *(3)* ampliar el **Annotation Crop** `15 mm` por fuera del *Matchline* para evitar que se recorten etiquetas de borde; y *(4)* revisar las `12` notas clave del archivo `.txt` en Claude de forma anónima, sustituyendo frases vagas como *«sujetar bien la bandeja»* por *«fijación mediante varilla roscada y perfil soporte cada 1,50 m máximo según ficha del fabricante y cálculo estructural; verificar carga en obra»*.

#### Errores frecuentes
- Ejecutar `Tag All Not Tagged` sobre toda la planta y entregar el plano sin reubicar ni alinear ninguna etiqueta superpuesta.
- Activar el recorte de modelo (`Crop View`) olvidando ampliar el `Annotation Crop`, provocando que media etiqueta o el extremo de una cota desaparezcan al borde del plano de sectorización.
- Usar un parámetro de texto manual para simular agrupaciones (`"6x L2"`) que no coincide con el recuento real si posteriormente se elimina una luminaria en 3D.
- Copiar y pegar notas generadas por ChatGPT que citan normas inexistentes, artículos inventados o términos ajenos a la normativa nacional del proyecto sin haberlas leído y validado línea por línea.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué papel juega el marco exterior *Annotation Crop* respecto al *Model Crop* cuando se divide una planta grande mediante un *Matchline*?
2. ¿Cómo reduce el ruido visual un *carril de anotación* combinado con etiquetas multi-directriz en un corredor técnico congestionado?
3. ¿Por qué conviene auditar con apoyo humano (y opcionalmente IA sobre texto anónimo) las expresiones vagas dentro del fichero `.txt` de notas clave antes de emitir planos a contrata?

---

## 4. Metodología didáctica

La sesión combina análisis crítico de RFIs reales generadas por mala anotación, demostración guiada de familias `.rfa` de etiquetas y ficheros *Keynote*, laboratorio práctico de acotación y ordenamiento, y resolución del caso de obra *Campus Sur*.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
|---|---|---|---|
| **1. Apertura y activación de conocimientos** | 00:00 – 00:25 (25 min) | Conecta con el tema de escalas y densidad gráfica (Tema 3), presenta un listado de RFIs reales originadas por textos muertos y dinamiza la Actividad 1. | Analiza una lámina saturada llena de `TX` manuales y cotas confusas, identificando 5 fallos que ocasionarían errores inmediatos de ejecución en obra. |
| **2. Microexposición y demo: Etiquetas paramétricas (`.rfa`) vs. textos muertos y cotas** | 00:25 – 01:05 (40 min) | Abre el Editor de Familias de una etiqueta de tubo y de aparato, muestra *Edit Label* con parámetros compartidos, demuestra `DI`, `EQ`, `Spot Elevation` (*Bottom* vs. *Centerline*) y aclara límites normativos en alturas. | Modifica una familia de etiqueta en paralelo para concatenar `E_Tablero_Origen / E_Servicio / Diámetro`, e identifica cotas de fondo frente a eje sobre esquema técnico. |
| **3. Microexposición: Directrices, Keynotes (`.txt`), *Annotation Crop* y planos densos** | 01:05 – 01:40 (35 min) | Demuestra la estructura tabulada de `Keynotes.txt`, el filtrado `Filter by Sheet` en `Keynote Legend`, directrices ortogonales, etiquetas multi-directriz y carriles de anotación. | Configura un archivo `.txt` breve de notas clave, comprueba cómo `Filter by Sheet` depura la leyenda de lámina y practica la limpieza de *Annotation Crop*. |
| **Descanso activo** | 01:40 – 01:55 (15 min) | Mantiene disponible el material de práctica y responde dudas rápidas sobre versiones de Revit y familias de etiquetas. | Descansa fuera de pantalla y prepara los archivos del laboratorio y del caso práctico. |
| **4. Actividad 2: Laboratorio de etiquetado, acotación y Keynotes** | 01:55 – 02:35 (40 min) | Supervisa la conversión de textos muertos a etiquetas paramétricas, verifica el anclaje correcto de cotas a ejes/muros y revisa que ninguna `Keynote Legend` imprima notas ajenas. | Elimina los `TX` manuales en una planta modelo, inserta etiquetas compuestas, acota ejes de bandejas + `EL` al fondo inferior y genera una lámina con `Keynote Legend` filtrada. |
| **5. Estudio de caso y transferencia (Actividad 3): Campus Sur** | 02:35 – 03:20 (45 min) | Introduce el caso *Campus Sur* (11 RFIs sobre lámina `E-203`), supervisa a los equipos en la limpieza del corredor denso y guía la auditoría segura del fichero `Keynotes.txt` con IA anónima. | Diagnostica las causas de las 11 RFIs, corrige el plano `E-203` en Revit eliminando solapes/cortes y audita el listado de notas clave con revisión humana explícita. |
| **6. Discusión guiada y contraste técnico** | 03:20 – 03:45 (25 min) | Proyecta láminas corregidas de 2–3 equipos al `100 %`, compara claridad de carriles de anotación y subraya la diferencia entre buena anotación y validación técnica/normativa. | Defiende su estrategia de anotación sin solapes, comenta mejoras de redacción en las *Keynotes* auditadas y contrasta soluciones con otros equipos. |
| **7. Síntesis, evaluación sumativa y cierre** | 03:45 – 04:00 (15 min) | Resume el decálogo de anotación limpia en Revit MEP, aplica el test sumativo breve y presenta el puente hacia el Tema 5 (Símbolos y filtros de visualización). | Realiza el cuestionario sumativo (6 preguntas), completa la autoevaluación y entrega su lámina PDF y tabla de notas clave en la plataforma. |

**Total cronometrado:** 25 + 40 + 35 + 15 + 40 + 45 + 25 + 15 = **240 minutos (4 horas)**.

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Cazadores de textos muertos y cotas trampa

- **Nombre:** Cazadores de textos muertos y cotas trampa
- **Objetivo:** Activar la mirada crítica del alumnado detectando errores documentales reales provocados por textos estáticos, cotas mal referenciadas y solapes en planos eléctricos.
- **Instrucciones para el alumnado:**
  1. Observa el extracto de plano proyectado (`Extracto_Plano_Trampa_B4T4.pdf`, una planta de distribución con bandejas, luminarias y tomas).
  2. En 7 minutos, localiza individualmente al menos **5 defectos documentales** (por ejemplo: etiqueta manual en contradicción con la tabla de circuitos, cota anclada a una silla móvil, elevación ambigua sin aclarar eje o fondo, directrices cruzadas, nota clave de otro piso).
  3. Comparte tus hallazgos en el chat o en pizarra colaborativa durante 8 minutos priorizando cuál causaría el error más caro en obra.
- **Materiales necesarios:** Archivo PDF `Extracto_Plano_Trampa_B4T4.pdf` y pizarra digital o encuesta en vivo.
- **Tiempo estimado:** 15 minutos (integrados en la Fase 1).
- **Rol del formador:** Moderar las respuestas, cuantificar el coste típico de una RFI evitada a tiempo y enlazar cada fallo con la herramienta correspondiente en Revit.
- **Producto o entregable esperado:** Lista grupal de defectos priorizados con su impacto constructivo en obra.
- **Criterios de éxito:** El alumnado identifica al menos 4 de los 5 defectos incorporados y justifica por qué un texto manual desconectado del modelo supone un riesgo grave en obra.

---

### Actividad 2 (Aplicación técnica): Sustitución de textos muertos, acotación de replanteo y montaje de `Keynote Legend`

- **Nombre:** Sustitución de textos muertos, acotación de replanteo y montaje de `Keynote Legend`
- **Objetivo:** Aplicar la edición de etiquetas `.rfa`, la acotación vinculada a estructura y elevación al fondo inferior, y la vinculación de notas clave filtradas por lámina.
- **Instrucciones para el alumnado:**
  1. Abre `Lab_Anotaciones_B4_T4.rvt` (planta de oficinas con 2 bandejas, 12 luminarias y 10 tomas que actualmente contiene notas manuales `TX` erróneas).
  2. Abre la etiqueta `Etiqueta_Tubo_Base.rfa`, añade dentro de *Edit Label* el parámetro compartido `E_Servicio` y `Diameter(Trade Size)` en dos líneas limpias, y cárgala en el modelo reemplazando los textos `TX` de tubos y bandejas.
  3. Acota con `DI` la posición transversal de las bandejas desde los ejes estructurales `A` y `1`, aplica `EQ` a la fila de luminarias entre muros y coloca `Spot Elevation` (`Bottom`) en las dos bandejas especificando la unidad y referencia `NPT`.
  4. Vincula el archivo `Keynotes_Lab_B4T4.txt`, inserta `3` notas clave con directrices ortogonales con codo y coloca en la lámina `E-101` la `Keynote Legend` con **`Filter by Sheet`** activado.
- **Materiales necesarios:** `Lab_Anotaciones_B4_T4.rvt`, `Etiqueta_Tubo_Base.rfa` y `Keynotes_Lab_B4T4.txt`.
- **Tiempo estimado:** 40 minutos (Fase 4).
- **Rol del formador:** Asistir la edición de `Edit Label`, vigilar que la cota `DI` no se ancle a mobiliario y validar en pantalla que la `Keynote Legend` solo muestre las 3 notas usadas.
- **Producto o entregable esperado:** Archivo `.rvt` actualizado con etiquetas vivas, cotas referenciadas y lámina `E-101` lista para exportar a PDF.
- **Criterios de éxito:** Al cambiar el diámetro de un tubo en 3D de `Ø25` a `Ø32 mm`, la etiqueta se actualiza automáticamente; las luminarias quedan equidistantes (`EQ`); y la `Keynote Legend` oculta las notas no usadas en `E-101`.

---

### Actividad 3 (Transferencia a proyecto real): Rescate de la lámina `E-203` en *Campus Sur* y auditoría de *Keynotes* con IA controlada

- **Nombre:** Rescate de la lámina `E-203` en *Campus Sur* y auditoría de *Keynotes* con IA controlada
- **Objetivo:** Transferir técnicas avanzadas de ordenación de anotaciones en planos congestionados y control de calidad textual con IA segura al rescate de un juego de planos real devuelto con RFIs.
- **Instrucciones para el alumnado:**
  1. En equipos de 3 personas (o parejas) sobre `Caso_CampusSur_B4_T4.rvt`, inspeccionad la lámina **`E-203` (Corredor y Taller Planta 1)** y resolved todas las incidencias causantes de las `11` RFIs del caso práctico: reemplazad los `18` textos muertos `TX`, unificad las elevaciones especificando `Fondo (B.O.T.) s/NPT`, reubicad las etiquetas en un **carril de anotación** fuera del eje de climatización (usando multi-directriz si vuestra versión lo permite o agrupamiento limpio), corregid el `Annotation Crop` junto al *Matchline* y activad `Filter by Sheet` en la `Keynote Legend`.
  2. Extraed el contenido textual de `Keynotes_CampusSur_Anonimo.txt` (ya anonimizado sin datos del proyecto) y utilizad ChatGPT o Claude mediante un prompt estructurado para detectar **ambigüedades redaccionales, abreviaturas no definidas y faltas de consistencia técnica**.
  3. Revisad manualmente la propuesta de la IA descartando cualquier código normativo inventado o requisito no aplicable, actualizad el `.txt` verificando que se mantienen las tabulaciones (`TAB`), recargadlo en Revit y exportad la lámina `E-203` en PDF.
- **Materiales necesarios:** `Caso_CampusSur_B4_T4.rvt`, `Keynotes_CampusSur_Anonimo.txt`, plantilla de Protocolo de Anotación (Sección 8) y acceso opcional a asistente IA.
- **Tiempo estimado:** 45 minutos (Fase 5).
- **Rol del formador:** Supervisar la organización espacial del carril de anotación, recordar el formato estricto de tabuladores del archivo `.txt` y auditar la revisión humana aplicada a la salida de IA.
- **Producto o entregable esperado:** Lámina PDF `E-203` limpia sin solapes ni recortes, `Keynotes_CampusSur.txt` depurado y tabla breve con las correcciones aceptadas/rechazadas de la IA.
- **Criterios de éxito:** 0 textos muertos para datos del modelo, 0 solapes de etiquetas/cotas al `100 %` de zoom, todas las elevaciones con referencia uniforme al fondo `s/NPT`, `Keynote Legend` filtrada a las notas reales de `E-203` y auditoría textual verificada.

---

## 6. Caso práctico

### Caso práctico: 11 RFIs por anotación defectuosa en la lámina E-203 del Centro Educativo y Polideportivo Campus Sur

#### Contexto empresarial
**TecnoElec Ingeniería S.L.P.** entrega la fase de ejecución BIM del **Centro Educativo y Polideportivo Campus Sur** (`5.200 m²`). En la Planta 1, un **corredor principal de `3,20 m` de ancho por `42 m` de largo** concentra la alimentación hacia aulas tecnológicas y un taller mecánico-eléctrico. Para caber en formato A1 a `1:50`, la planta fue dividida en dos sectores mediante una **línea de partida (*Matchline*)** en el eje estructural `6`. La contrata eléctrica acaba de devolver la lámina **`E-203` (`Planta 1 Sector A - Alumbrado y Canalizaciones`)** acompañada de **11 solicitudes de información (RFIs)** que paralizan el inicio del montaje en techo.

#### Situación o problema
El análisis técnico de la lámina `E-203` revela cuatro focos de conflicto documental:
1. **Textos muertos desactualizados:** Durante una revisión previa se actualizó en el modelo 3D la salida de emergencia hacia taller de `Ø25 mm` (cuadro `CS-01`) a **`Ø32 mm` alimentado desde `CS-P1-NOR`**. Sin embargo, `18` anotaciones del plano habían sido colocadas con texto manual `TX` (`"Tubo Ø25 - CS-01"`) y quedaron obsoletas, contradiciendo al cuadro de cargas del proyecto.
2. **Elevaciones contradictorias y sin referencia:** Las notas sobre tres bandejas paralelas indican `+2,95 m`, `+3,10 m` y `+3,05 m` escritas a mano sin precisar si se trata del **eje** o del **fondo inferior (*B.O.T.*)** ni si miden desde el forjado bruto o el `NPT`. Con un falso techo proyectado a `+2,85 m` y conductos de climatización ocupando de `+3,05 m` a `+3,45 m`, la contrata no sabe si las bandejas chocan con los conductos.
3. **Solapes y etiquetas amputadas:** El modelador ejecutó `Tag All Not Tagged` sin mover etiquetas; `14` etiquetas de luminarias y `9` de tomas se montan encima de los difusores de climatización y las directrices se cruzan en diagonal. Además, junto al eje `6` (*Matchline*), dos etiquetas de acometida quedaron cortadas por la mitad porque el `Annotation Crop` estaba oculto o pegado al recorte del modelo.
4. **Leyenda de notas clave desbordada y ambigua:** La `Keynote Legend` de la lámina `E-203` imprime **34 notas clave** incluyendo `19` partidas sobre inversores fotovoltaicos de cubierta y celdas de media tensión inexistentes en Planta 1, y contiene frases ambiguas como *«sujetar bandejas convenientemente a buena altura»* o referencias normativas sin verificar.

#### Datos disponibles

| Parámetro / Elemento de `E-203` | Valor real en modelo 3D y estado en lámina |
|---|---|
| **Corredor Planta 1 Sector A** | Anchura libre `3,20 m`, longitud parcial `24 m` hasta `Matchline` eje `6`, escala `1:50` |
| **Falso techo y forjado superior** | `NPT P1 = +4,00 m` · Falso techo acabado: `+2,85 m s/NPT` · Losa superior: `+3,80 m s/NPT` |
| **Bandejas eléctricas (`300 × 60 mm` y `200 × 60 mm`)** | Eje real `C.L.` en modelo a `+3,03 m s/NPT` (Fondo `B.O.T. = +3,00 m s/NPT`) y `+3,23 m` (`B.O.T. = +3,20 m`) |
| **Conducto clima vecino (`ARQ/MEP`)** | Ocupa de `+3,05 m` a `+3,45 m s/NPT` en el lateral izquierdo del corredor |
| **Luminarias empotradas (`L2`)** | `24` unidades en pasillo, circuito `CS-P1-NOR / C08`, actualmente con `Tag All` solapado |
| **Tubos actualizados hacia taller** | `Ø32 mm` (`E_Servicio = FUE-NOR`, `E_Tablero_Origen = CS-P1-NOR`), con `18` textos `TX` viejos (`Ø25 / CS-01`) |
| **Archivo de notas clave vinculado** | `34` notas totales; `Keynote Legend` sin `Filter by Sheet` |

#### Preguntas de análisis
1. Tomando los datos reales de las bandejas (`B.O.T. = +3,00 m` / `300 × 60 mm`) frente al falso techo (`+2,85 m`) y conducto clima (`+3,05 m` a `+3,45 m`), ¿qué conflictos reales o aparentes existen y por qué las anotaciones manuales ambiguas dispararon las RFIs?
2. ¿Cómo impedirías técnicamente que vuelva a producirse la divergencia de los `18` textos `Ø25 / CS-01` frente al modelo `Ø32 / CS-P1-NOR`?
3. ¿Qué cuatro ajustes concretos en Revit eliminan al mismo tiempo los solapes del corredor, el corte junto al *Matchline* del eje `6` y las `19` notas sobrantes en la `Keynote Legend`?
4. ¿Cómo emplearías un asistente de IA de forma responsable para depurar el fichero `.txt` de notas clave antes de reemitir `E-203`?

#### Tarea a realizar
En equipos de 3 personas (45 minutos en la Fase 5), reemitid virtualmente la lámina **`E-203 Rev.01`** resolviendo las 11 RFIs:
1. Eliminad los `18` textos manuales y sustituidlos por **etiquetas paramétricas** (`Conduit Tag` / `Equipment Tag`) leyendo `Diameter(Trade Size)`, `E_Servicio` y `E_Tablero_Origen` / `Panel`.
2. Configurad `Spot Elevation` y/o etiqueta leyendo el **fondo inferior (`Bottom Elevation`)** referido a `NPT`, dejando explícito en nota general el criterio `B.O.T. s/NPT`, e insertad cotas horizontales `DI` desde ejes estructurales y paredes fijas comprobando la separación lateral frente al conducto de climatización.
3. Reorganizad el corredor usando un **carril de anotación** alineado, directrices ortogonales limpias, agrupación/multi-directriz donde proceda, margen correcto de **Annotation Crop** en el eje `6` y **`Filter by Sheet`** activado en la `Keynote Legend` tras auditar con IA anónima y revisión humana las notas clave afectadas.

#### Posibles soluciones o criterios de análisis
Una resolución técnica sobresaliente incluirá:
- **Corrección geométrica y de elevación:** La bandeja 1 (`300 × 60 mm` con `B.O.T. = +3,00 m`, tope superior a `+3,06 m`) pasa por debajo del conducto (`+3,05 m`) únicamente si no se solapan en planta o si se desplaza lateralmente hacia la mitad derecha del corredor de `3,20 m`; la bandeja 2 (`B.O.T. = +3,20 m`) **sí coincide en cota vertical** con el conducto (`+3,05–3,45 m`), por lo que es indispensable acotar horizontalmente `DI` ambas trazas desde la pared derecha (`p. ej. 400 mm` y `800 mm`) separadas del conducto izquierdo y marcar **exclusivamente `Fondo (B.O.T.) s/NPT`** con `Spot Elevation` en cada bandeja.
- **Erradicación de `TX` manuales:** Al reemplazar los `18` textos `TX` por etiquetas `.rfa` vinculadas a `Conduits` y `Lighting Fixtures`, la lámina pasa a leer en vivo `Ø32 mm · FUE-NOR · CS-P1-NOR`, eliminando de raíz el desfase con el modelo y el cuadro de cargas.
- **Limpieza espacial y *Annotation Crop*:** Sacar las etiquetas de bandejas y luminarias hacia un carril lateral ordenado paralelo al tabique mediante planos de referencia, usar codos ortogonales sin cruces, agrupar series repetitivas de `L2` (`CS-P1-NOR / C08`), ampliar el margen del **Annotation Crop** `15–20 mm` fuera del *Matchline* del eje `6` y activar **`Filter by Sheet`** en la `Keynote Legend` (reduciendo de `34` notas a únicamente las `~5–7` notas reales presentes en `E-203`).
- **Auditoría segura de `Keynotes.txt` y alcance normativo:** Transformar frases vagas (*«sujetar convenientemente»*) en prescripciones verificables (*«soportación de bandeja cada 1,50 m máximo según tabla del fabricante y carga de cálculo; verificar anclaje en forjado en obra»*), tras pasar una versión anonimizada por IA y **verificar manualmente** que ninguna nota incluye normas inventadas ni invade competencias de cálculo reglamentario (recordando comprobar REBT/CTE o normativa nacional vigente en alturas de taller y sectorización cortafuegos).

#### Preguntas de reflexión final
- ¿Cuánto tiempo de revisión se ahorra evitando usar `Text Notes` (`TX`) para etiquetar diámetros y circuitos en un edificio de `5.200 m²`?
- ¿Qué comprobación final de 2 minutos sobre el PDF exportado te asegura que ningún *Annotation Crop* ha amputado una etiqueta en un borde de sectorización?

---

## 7. Evaluación

### Evaluación diagnóstica
- **Instrumento:** Actividad 1 (*Cazadores de textos muertos y cotas trampa*) sobre el extracto `Extracto_Plano_Trampa_B4T4.pdf` al comienzo de la sesión.
- **Propósito:** Identificar hábitos heredados de CAD 2D (uso de textos muertos, flechas aleatorias, olvido de cotas de referencia) sin ponderación en la nota final.

### Evaluación formativa
- **Seguimiento práctico en vivo** durante la Actividad 2 (edición de `.rfa`, colocación de `DI`/`EQ`/`EL`, configuración de `Filter by Sheet`) y tutorización por equipos en el caso *Campus Sur* (Actividad 3), verificando asociatividad real al modificar un diámetro o circuito en 3D y comprobando el orden visual sin solapes.

### Evaluación sumativa
Se compone de dos evidencias al cierre del tema:
1. **Cuestionario breve de conocimientos (6 ítems situacionales, 10 minutos, 30 % de la calificación):** Evalúa la diferencia entre texto muerto, etiqueta paramétrica, nota clave y nota general; diferencia `Bottom` vs. `Centerline`; papel del `Annotation Crop`; y límites frente a validación eléctrica/normativa.
2. **Entregable práctico del Caso *Campus Sur* (`E-203 Rev.01`) (70 % de la calificación):** Lámina PDF exportada, archivo `.rvt` saneado y `Keynotes_CampusSur.txt` depurado (con evidencia de verificación humana si se usó IA), evaluados mediante la rúbrica siguiente.

### Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
|---|---|---|---|---|
| **1. Etiquetado paramétrico vs. textos muertos** | Conserva textos manuales (`TX`) para diámetros, circuitos o tableros o deja etiquetas rotas con `?`. | Sustituye parte de los `TX` por etiquetas genéricas de serie sin incluir parámetros clave (`E_Servicio`, `E_Tablero_Origen`). | Reemplaza el `100 %` de los datos de modelo por etiquetas paramétricas `.rfa` compuestas vinculadas a parámetros nativos y compartidos. | Personaliza el diseño tipográfico de la `.rfa` con prefijos claros, orden lógico y actualiza instantáneamente todo el plano ante cambios en 3D. |
| **2. Cotas de replanteo, elevación y alturas de montaje** | Acota a mobiliario móvil, mezcla alturas de eje y fondo sin criterio o usa textos editados a mano. | Acota a elementos fijos pero omite `EQ` en luminarias o no explicita el criterio (`B.O.T. s/NPT`) en leyenda/etiqueta. | Referencia cotas `DI` a ejes/muros, aplica `EQ`, usa `Spot Elevation` consistente (`Bottom s/NPT`) y aclara carácter ilustrativo de alturas normativas. | Demuestra además la coherencia espacial frente a conductos vecinos y valida alturas accesibles/técnicas frente a la leyenda constructiva del plano. |
| **3. Directrices, *Keynotes* y gestión de planos densos** | Presenta solapes graves, directrices cruzadas, etiquetas amputadas en *Matchline* o leyenda con notas de todo el proyecto. | Ordena parcialmente el pasillo o activa `Filter by Sheet`, pero persisten cruces menores o cortes cerca del recorte de vista. | Implementa carril de anotación alineado, directrices ortogonales limpias, `Annotation Crop` calibrado y `Keynote Legend` filtrada por lámina. | Optimiza el plano mediante etiquetas multi-directriz/agrupación limpia y logra legibilidad cristalina al `100 %` en PDF sin pérdida de información. |
| **4. Calidad redaccional, IA segura y límites profesionales** | Mantiene notas ambiguas, sube información confidencial a IA o acepta texto normativo inventado sin revisión. | Corrige errores graves del `.txt`, pero mantiene vaguedades constructivas o omite la trazabilidad de validación si usó IA. | Depura el archivo `.txt` eliminando ambigüedades, conserva el formato de tabuladores y separa anotación BIM de cálculo reglamentario. | Documenta el prompt anónimo y la lista exacta de correcciones humanas frente a sugerencias de IA, manteniendo rigor contractual y normativo. |

### Actividad de autoevaluación
Al cerrar la sesión, cada participante responde por escrito a tres preguntas metacognitivas en la plataforma:
1. *¿Qué hábito de anotación heredado del dibujo 2D tradicional (textos `TX`, cotas libres, directrices rápidas) me comprometo a eliminar definitivamente en mi próximo modelo Revit?*
2. *Al revisar una lámina antes de imprimir a PDF, ¿qué tres comprobaciones rápidas me aseguran que ni el `Annotation Crop`, ni la referencia `Bottom vs. Centerline`, ni la `Keynote Legend` inducirán errores en obra?*
3. *¿Por qué la revisión humana del archivo `Keynotes.txt` sigue siendo irrenunciable incluso cuando un asistente de IA mejora la redacción y ortografía?*

---

## 8. Materiales y recursos

### Guion estructurado de diapositivas (Slide 1 a Slide 8)

| Diapositiva | Título | Contenido clave y visual | Notas para el formador |
|---|---|---|---|
| **Slide 1** | Portada: Tema 4. Dimensiones, anotaciones, textos y etiquetas | Título, Bloque 4 (Tema 4/8 · 25/50), objetivos y aviso de alcance técnico/normativo. | Conectar con escalas y densidad gráfica del Tema 3: «ahora poblamos de información esas vistas». |
| **Slide 2** | Activación: El coste real de un texto muerto y una cota ambigua | Captura del plano trampa (`Extracto_Plano_Trampa_B4T4.pdf`) + coste típico de RFIs en obra. | Dirigir la Actividad 1 antes de mostrar el menú de etiquetas de Revit. |
| **Slide 3** | Etiquetas paramétricas (`.rfa`) frente a *Text Notes* (`TX`) | Esquema interno de *Edit Label* concatenando `Panel`, `Circuit Number`, `E_Servicio` y `Diameter` vs. caja estática `TX`. | Demostrar en vivo cómo una edición 3D actualiza 15 etiquetas en 1 segundo. |
| **Slide 4** | Cotas de replanteo (`DI`), equidistancia (`EQ`) y elevaciones (`EL`) | Sección gráfica comparando `Bottom Elevation (B.O.T.)` frente a `Centerline (C.L.)` respecto a `NPT`, más tabla ilustrativa de alturas de montaje. | Insistir en comprobar siempre el reglamento de cada país para alturas de mecanismos y cuadros. |
| **Slide 5** | Directrices limpias y arquitectura de *Keynotes* (`.txt` + `Filter by Sheet`) | Flujo visual: Archivo `.txt` tabulado -> Etiqueta `Keynote` en vista -> `Keynote Legend` filtrada por lámina (`E-201` vs. `E-203`). | Recordar que el separador obligatorio del `.txt` de Revit es `TAB` y no espacios. |
| **Slide 6** | Ingeniería de planos densos: carriles, multi-directriz y *Annotation Crop* | Comparativa «Antes» (`Tag All` caótico + etiqueta cortada en *Matchline*) vs. «Después» (carril alineado + *Annotation Crop* ampliado). | Señalar que la función multi-directriz depende de versión (Revit 2022+) para mantener rigor realista. |
| **Slide 7** | Control de calidad textual asistido con IA sobre datos anónimos | Ejemplo «Antes / Después» de una nota clave ambigua auditada con LLM y checklist de revisión humana contra alucinaciones normativas. | Recalcar la regla estricta de no subir planos ni archivos `.rvt` confidenciales a herramientas externas. |
| **Slide 8** | Caso *Campus Sur* (`E-203`), rúbrica y puente al Tema 5 | Resumen de las 11 RFIs de *Campus Sur*, criterios de éxito de entrega y adelanto del Tema 5 (Símbolos y filtros de visualización). | Recordar fecha de entrega del PDF `E-203 Rev.01` y del archivo `.txt` depurado. |

### Ficha de trabajo del alumnado
Documento práctico (2 páginas) que contiene:
1. **Guía rápida del Editor de Etiquetas (`.rfa`):** Pasos para crear/editar un *Label*, añadir parámetros compartidos desde el archivo `.txt`, añadir saltos de línea/prefijos y ajustar el marco (*Leader Attachment*).
2. **Lista de chequeo de acotación eléctrica sin ambigüedad:** Referencia a ejes/muros fijos, verificación `Bottom vs. Centerline s/NPT`, formato numérico y aclaración de alturas ilustrativas.
3. **Checklist pre-emisión de anotaciones en planos densos:** Revisión de `?` huérfanas, carriles alineados, `Annotation Crop` y `Filter by Sheet` en leyendas.

### Plantilla técnica práctica: Protocolo de Etiquetado, Acotación y Notas Clave (`.txt`)

#### A. Estructura estándar de archivo `Keynotes.txt` (delimitado por tabuladores `TAB`)
```text
E-00	NOTAS CLAVE DE INSTALACIONES ELÉCTRICAS (EJEMPLO ILUSTRATIVO)
E-01	Sellado cortafuego certificado en paso de paramento sectorizado; verificar resistencia EI en proyecto PCI.	E-00
E-02	Bandeja de rejilla con tapa metálica superior de protección mecánica bajo tubería hidráulica.	E-00
E-03	Mecanismo estanco IP65 / IK08; confirmar cota definitiva con despiece de alicatado en obra.	E-00
E-04	Soportación mediante perfil metálico y varilla roscada cada 1,50 m máximo según ficha de fabricante y cálculo.	E-00
E-05	Cota de fondo inferior (B.O.T.) referida a Nivel de Piso Terminado (NPT); coordinar con falso techo.	E-00
```
*(Nota: al guardar este formato para Revit, sustituir los espacios entre columnas por un único carácter tabulador `TAB` y codificar en UTF-8 / Unicode compatible con la versión de Revit).*

#### B. Matriz de referencia rápida de anotación por categoría eléctrica

| Categoría BIM | Parámetros recomendados en Etiqueta | Referencia de cota / elevación | Tipo de directriz recomendada |
|---|---|---|---|
| **Tableros (`Electrical Equipment`)** | `Panel Name` + `Voltage` / `E_Servicio` (verificar con unifilar) | `DI` a ejes estructurales; altura montaje ilustrativa verificada | Sin directriz (centrada) o codo `90°` + punto relleno |
| **Tomacorrientes (`Electrical Fixtures`)** | `Panel` + `Circuit Number` + `E_Altura_Montaje` (si difiere de estándar) | Altura estándar en leyenda de lámina; especial con etiqueta/cota | Preferible sin directriz junto al símbolo o codo corto |
| **Luminarias (`Lighting Fixtures`)** | `Type Mark` (p. ej. `L1`, `L2`) + `Panel / Circuit` | `DI` + `EQ` entre ejes de sala/rejilla de techo `600×600` | Multi-directriz o agrupación limpia por tramo |
| **Tubos (`Conduits`)** | `E_Servicio` + `E_Tablero_Origen` + `Diameter(Trade Size)` | `EL` (*Bottom* o *Centerline* explícito `s/NPT`) | Codo ortogonal con flecha sobre eje de tubo |
| **Bandejas (`Cable Trays`)** | `E_Servicio` + `Size` (`300×60`) + `Bottom Elevation` | `DI` transversal desde muro fijo + `EL` al fondo (`B.O.T.`) | Carril lateral alineado + punto relleno sobre bandeja |

### Lecturas y recursos recomendados
> **Advertencia de validación obligatoria:** Antes de utilizar plantillas `.txt`, familias de etiquetas descargadas o ejemplos de alturas de mecanismos en un proyecto real, el formador y el alumnado deben **validar la versión exacta de Revit utilizada, el BEP vigente del proyecto y la edición reglamentaria aplicable en su país**.
- Documentación oficial de **Autodesk Revit — Tags, Multi-Leader Tags, Keynotes, Spot Elevations & Annotation Crop** (Ayuda oficial según versión instalada, comprobando disponibilidad de etiquetas multi-directriz a partir de Revit 2022+).
- Guías de estandarización gráfica y documentación BIM (p. ej., **UNE-EN ISO 13567 / Guías uBIM buildingSMART** sobre capas, anotación y planos técnicos; *verificar vigencia*).
- Reglamentos técnicos aplicables sobre alturas de mecanismos, zonas húmedas y accesibilidad (p. ej. **REBT ITC-BT-25/27 y CTE DB-SUA en España** o **NEC / ADA** en otras jurisdicciones; *referencias ilustrativas para validar siempre requisitos reales del emplazamiento*).
- Tutoriales técnicos contrastados sobre construcción de etiquetas multi-parámetro y solución de errores de formato `TAB` en ficheros `Keynote.txt` (*revisar antes de proyectar*).

### Glosario de términos clave

| Término | Definición |
|---|---|
| **Etiqueta paramétrica (*Tag*)** | Familia de anotación 2D asociativa que lee y muestra dinámicamente parámetros reales de ejemplares o tipos del modelo BIM, actualizándose al instante ante cambios. |
| **Texto muerto (*Dumb Text*)** | Nota de texto estática (`TX`) sin vínculo con los parámetros del modelo; su uso para diámetros, circuitos o tableros genera discrepancias graves al modificarse el diseño. |
| **Texto de etiqueta (*Label*)** | Elemento dinámico dentro de una familia de etiqueta `.rfa` que combina uno o más parámetros integrados o compartidos con prefijos, sufijos y formato gráfico. |
| **Nota clave (*Keynote*)** | Código normalizado vinculado a una base de datos `.txt` tabulada que asocia prescripciones constructivas estandarizadas a elementos o puntos de plano sin saturar el dibujo con párrafos extensos. |
| **`Filter by Sheet`** | Opción de configuración en la *Keynote Legend* de Revit que filtra automáticamente la tabla de notas de la lámina para listar únicamente las notas clave presentes en sus vistas. |
| **Cota de elevación (*Spot Elevation*)** | Anotación paramétrica (`EL`) que consulta la altura real de fondo (`Bottom`), cara superior (`Top`) o eje (`Centerline`) de canalizaciones y equipos respecto al nivel de referencia (`NPT`). |
| **Recorte de anotación (*Annotation Crop*)** | Contorno externo respecto al *Model Crop* que delimita hasta dónde se imprimen etiquetas, cotas y textos; si es demasiado estrecho, amputa anotaciones junto a bordes o *Matchlines*. |
| **Carril de anotación (*Annotation Lane*)** | Franja espacial ordenada donde se alinean los bloques de texto de múltiples etiquetas con directrices ortogonales paralelas para evitar solapes en corredores o salas densas. |

---

## 9. Adaptaciones

### Sesión presencial
- Repartir copias impresas del `Extracto_Plano_Trampa_B4T4.pdf` en la Actividad 1 para que cada pareja rodee con rotulador rojo los 5 fallos antes de abrir debate en el aula.
- Mostrar paso a paso en pantalla la creación del fichero `.txt` de notas clave desde un editor que haga visibles los caracteres de tabulación (como Notepad++ o VS Code) para evitar errores típicos de espacios vs. `TAB`.
- Revisar directamente sobre los equipos de los asistentes que las etiquetas `Ø32 mm` cambian de verdad en vivo al modificar un tubo en 3D y que ninguna cota fue sobreescrita con texto manual.

### Sesión online síncrona
- Compartir de inicio el paquete con `Etiqueta_Tubo_Base.rfa` y `Keynotes_CampusSur_Anonimo.txt` para centrar el tiempo práctico en editar *Labels*, alinear carriles y depurar el caso.
- Trabajar el rescate de `E-203` en salas pequeñas (*breakout rooms*) de 3 personas y solicitar al final que suban la lámina PDF exportada a una carpeta compartida para inspeccionarla juntos al `100 %` en la Fase 6.
- Ejecutar en vivo en pantalla compartida una prueba controlada de auditoría textual de `Keynotes` con IA sobre 5 líneas anonimizadas, señalando en tiempo real un fallo o invención del modelo que requiera corrección humana.

### Sesión asíncrona
- Dividir la demostración técnica en 4 microvídeos de 10–12 minutos: *(1) Edición de etiquetas `.rfa` y parámetros compartidos*; *(2) Cotas `DI`, `EQ` y `Spot Elevation` Fondo vs. Eje*; *(3) Fichero `Keynotes.txt` y `Filter by Sheet`*; *(4) Carriles de anotación, Multi-Leader y `Annotation Crop`*.
- Facilitar el modelo de contraste solucionado para descarga diferida una vez entregada la lámina `E-203 Rev.01` y el archivo `.txt` depurado.
- Incluir en el foro una dinámica de revisión entre pares donde cada participante descarga la lámina PDF de un compañero y realiza una «mini-auditoría de RFIs» verificando si queda algún texto muerto, solape o elevación ambigua.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Explota directamente los **parámetros compartidos** creados en el **Tema 2 del Bloque 4**, respeta la jerarquía de **escalas y comportamiento anotativo** definida en el **Tema 3 del Bloque 4** e integra las anotaciones dentro de las **plantillas de vista** del **Tema 1 del Bloque 4**.
- **Competencias que desarrolla:** Documentación paramétrica cero textos muertos, acotación horizontal y vertical inequívoca para montaje eléctrico en obra, gestión centralizada de notas clave mediante `Keynote Legends` filtradas, limpieza espacial de planos densos y auditoría redaccional segura con asistencia de IA.
- **Conexión dentro del programa (6 módulos / 50 temas):**
  - **Tema anterior:** Continúa de forma inmediata el **Tema 3 del Bloque 4: Escalas y niveles de detalle** (Tema 24 de 50), aplicando ahora las etiquetas, cotas y notas adecuadas al tamaño de papel y nivel geométrico elegidos en cada vista.
  - **Tema posterior:** Prepara el terreno para el **Tema 5 del Bloque 4: Símbolos y filtros de visualización** (Tema 26 de 50), donde se profundizará en la normalización de simbología eléctrica 2D, leyendas de símbolos y filtros avanzados que completan la lectura gráfica junto a las etiquetas y notas clave.
- **Evidencia de aprendizaje:**
  1. Familia de etiqueta `.rfa` personalizada leyendo parámetros integrados y compartidos (`E_Servicio`, `E_Tablero_Origen`, `Diameter`).
  2. Lámina `E-203 Rev.01` del caso *Campus Sur* exportada a PDF sin textos muertos, sin solapes al `100 %`, con elevaciones referidas a `Fondo s/NPT`, *Annotation Crop* limpio y `Keynote Legend` filtrada por lámina.
  3. Archivo `Keynotes_CampusSur.txt` depurado (con registro de verificación humana en caso de asistencia con IA), más cuestionario sumativo y autoevaluación en plataforma.

---

## Siguientes pasos para el formador

1. **Comprobar compatibilidad de versión para Multi-Leader Tags:** Verificar antes de la sesión qué versión de Revit MEP utiliza el alumnado (en Revit 2022 y posteriores existen etiquetas multi-directriz nativas; si algún alumno trabaja en versión anterior, preparar la alternativa de agrupación tipológica limpia).
2. **Validar los ficheros `.txt` con tabuladores visibles:** Abrir `Keynotes_Lab_B4T4.txt` y `Keynotes_CampusSur_Anonimo.txt` en un editor que muestre tabulaciones (`→`) para asegurar que cargan sin errores en `Annotate -> Keynote Settings`.
3. **Revisar la lámina `Extracto_Plano_Trampa_B4T4.pdf`:** Confirmar que los 5 defectos de la Actividad 1 son claramente legibles y representativos de errores reales de obra.
4. **Reforzar la separación cálculo vs. etiqueta:** Recordar al cierre que una etiqueta paramétrica solo muestra el dato guardado en Revit y nunca valida por sí sola secciones de conductor, caídas de tensión ni niveles en lux de DIALux.
5. **Anticipar el Tema 5:** Mostrar un avance rápido de cómo una tabla de leyenda de símbolos eléctricos normalizados y filtros de estado/fase se integran con las etiquetas vistas hoy en el Tema 5 (*Símbolos y filtros de visualización*).
