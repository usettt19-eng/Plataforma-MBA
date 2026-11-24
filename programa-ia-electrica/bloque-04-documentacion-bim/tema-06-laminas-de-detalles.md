# Tema 6. Láminas de detalles

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Tema 6. Láminas de detalles |
| **Bloque y posición dentro del programa** | Bloque 4: Documentación BIM — Tema 6 de 8 (Tema 27 de 50 en el programa de 6 módulos) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Manejo de plantillas de visualización, escalas, niveles de detalle, anotaciones, simbología y filtros en Revit MEP (Bloque 4, Temas 1 a 5), así como criterios de trazo y puesta a tierra (Bloque 1) |
| **Resultado general de aprendizaje** | Maquetar láminas técnicas con cartelas paramétricas normalizadas, vistas de llamada (*callouts*), secciones de cuartos eléctricos y patinillos, vistas de diseño 2D para detalles constructivos tipo y control formal de revisiones y nubes en Revit MEP |

---

## 2. Objetivos de aprendizaje

Al finalizar este tema, el alumnado será capaz de:

1. **Identificar** la estructura paramétrica de una cartela normalizada (*Title Block*) y los campos obligatorios de identificación documental, escala gráfica y tabla de revisiones en planos eléctricos. *(Nivel de Bloom: Recordar)*
2. **Distinguir** cuándo utilizar vistas vinculadas al modelo 3D (*Floor Plan Callout*, *Detail Callout* y secciones MEP) frente a vistas de diseño 2D (*Drafting Views*) para representar detalles constructivos eléctricos. *(Nivel de Bloom: Comprender)*
3. **Configurar** vistas de llamada, secciones coordinadas de cuartos de cuadros o pasos de instalaciones y detalles constructivos tipo (zanjas, electrodos de puesta a tierra y montaje de bandejas) sobre láminas listas para obra. *(Nivel de Bloom: Aplicar)*
4. **Analizar** la coherencia constructiva y documental entre plantas generales, ampliaciones de cuartos eléctricos, detalles tipo y secuencias de nubes de revisión para prevenir contradicciones antes de la emisión. *(Nivel de Bloom: Analizar)*
5. **Diseñar** un conjunto estructurado de láminas de detalles y protocolo de gestión de revisiones apoyado en IA generativa para redacción de notas técnicas uniformes, manteniendo la anonimización de datos y la validación del técnico competente. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Diseño de láminas y cartelas/cajetines paramétricos (*Title Blocks*)

#### Explicación breve y clara
La lámina (*Sheet*) es el contenedor contractual que reúne vistas de planta, secciones, leyendas, tablas y detalles constructivos dentro de una cartela normalizada (*Title Block*). Una cartela BIM bien construida no es un simple marco estático con textos editados a mano plano por plano: se diseña como una familia paramétrica que lee automáticamente información global del proyecto (*Project Information*, como nombre del proyecto, código, promotor o ubicación), parámetros propios de cada plano (*Sheet Number*, *Sheet Name*, escala, fecha de emisión, revisor, aprobador) y una tabla dinámica de revisiones (*Revision Schedule*). Incorporar además una escala gráfica (barra graduada en metros) dentro de la cartela o de cada vista evita errores críticos si un operario imprime un plano A1 reducido en A3.

#### Conceptos clave
- **Formatos normalizados y márgenes:** Dimensionado estándar de láminas (por ejemplo, ISO A0 de 1189 × 841 mm, A1 de 841 × 594 mm, A2 de 594 × 420 mm y A3 de 420 × 297 mm) respetando margen de encuadernación izquierdo y zonas alfanuméricas de localización en los bordes.
- **Etiquetas paramétricas (*Labels*) en cartela:** Campos vinculados a *Project Information* y *Shared Parameters* de lámina (código de documento, disciplina `EL`, estado de emisión como *WIP*, *Compartido* o *Publicado*, número de plano y revisión vigente) que se actualizan simultáneamente en todas las láminas.
- **Comportamiento del campo `Scale`:** En Revit, si todas las vistas insertadas en una lámina comparten la escala 1:50, el cajetín muestra automáticamente `1:50`; si conviven un detalle 1:10 y una sección 1:25, muestra `Como se indica` (*As indicated*), exigiendo indicar la escala en el título individual de cada vista.
- **Tabla de revisiones integrada (*Revision Schedule*):** Cuadro incluido dentro de la familia de cartela que lista automáticamente únicamente las revisiones cuyas nubes o emisiones afectan a esa lámina concreta, configurable con crecimiento ascendente o descendente y altura fija máxima.

#### Definiciones necesarias
- **Cartela o cajetín (*Title Block*):** Familia de anotación 2D en Revit que define el formato físico de papel, el marco normalizado, el bloque de títulos administrativos/técnicos y el historial de revisiones de cada plano.
- **Escala gráfica:** Barra métrica graduada (por ejemplo, de 0 m a 5 m) incluida en el plano o vista que se amplía o reduce proporcionalmente con el documento, permitiendo detectar cualquier impresión fuera de escala nominal.
- **Título de vista (*Viewport Title*):** Etiqueta automática asociada a cada ventana gráfica insertada en una lámina, donde se muestra el número de detalle/vista dentro de la lámina, su nombre descriptivo y su escala específica.

#### Ejemplo práctico realista
Para la documentación ejecutiva de un edificio universitario de laboratorios, el departamento BIM crea una cartela paramétrica en formato ISO A1 horizontal (841 × 594 mm) con margen izquierdo de 20 mm para archivado, margen perimetral de 10 mm en los otros tres lados y un cajetín inferior derecho de 185 × 65 mm. En el cajetín se vinculan mediante *Shared Parameters* los campos `COD_PROYECTO`, `FASE_EMISION`, `AUTOR_EL`, `REVISOR_EL`, `APROBADOR_EL`, `NUM_PLANO` (`EL-DET-001`) y `REV_ACTUAL`. Cuando una lámina combina la planta de un cuarto eléctrico a escala 1:25 y dos detalles constructivos a escala 1:10, la cartela muestra `Escala: Según detalle` y cada *Viewport Title* rotula `1 / PLANTA CUARTO BT — 1:25` y `2 / DETALLE BANCADA Y TIERRA — 1:10`. Además, la barra de escala gráfica de 0–2 m situada junto a la planta permite comprobar con escalímetro sobre papel o visor PDF que la copia entregada en obra mantiene las dimensiones exactas.

> *Nota obligatoria de verificación normativa:* Las dimensiones normalizadas de papel, la disposición del cajetín y los códigos documentales (por ejemplo, referencias ilustrativas como UNE-EN ISO 5457, ISO 7200 o convenios de codificación inspirados en ISO 19650) deben verificarse siempre según la normativa vigente del país, las exigencias del organismo contratante y el Plan de Ejecución BIM (BEP) aprobado del proyecto.

#### Errores frecuentes
- Escribir el número de plano, el nombre del proyecto o la revisión actual con bloques de *Text* estático en lugar de *Labels* vinculados a parámetros, provocando contradicciones entre láminas al primer cambio.
- Omitir la indicación explícita de escala en cada título de vista cuando la lámina reúne detalles a 1:5, 1:10 y 1:25, dejando `Como se indica` sin especificar qué escala corresponde a cada dibujo.
- Superar la capacidad vertical del *Revision Schedule* en cartela, haciendo que la tabla de revisiones invada el área útil de dibujo o pise el logotipo del cajetín.
- Confiar exclusivamente en la escala numérica escrita (`1:50`) sin incluir una escala gráfica de comprobación, facilitando errores graves de replanteo en obra si alguien imprime «Ajustar a página».

#### Preguntas que el alumnado debería poder responder
1. ¿Qué diferencia existe en Revit entre utilizar un texto fijo (*Text*) y una etiqueta paramétrica (*Label*) basada en *Shared Parameters* al construir una familia de cartela?
2. ¿Por qué aparece la expresión `Como se indica` en el cajetín de algunas láminas de detalles y qué obligación documental genera respecto a los títulos de vista?
3. ¿Cómo previene una escala gráfica errores de interpretación dimensional cuando un plano A1 se imprime por descuido en formato A3?

---

### 3.2. Vistas de llamada (*Callouts*) y secciones de pasos y cuartos eléctricos

#### Explicación breve y clara
En las plantas generales a escala 1:100 o 1:200 resulta imposible acotar con claridad las separaciones entre armarios eléctricos, los pasillos de maniobra, los pasos verticales de bandejas o los cruces con conductos de climatización y tuberías. Para resolverlo manteniendo la conexión viva con el modelo 3D, Revit MEP ofrece vistas de llamada (*Callouts*) y vistas de sección (*Sections*). Es fundamental distinguir entre un *Floor Plan Callout* (ampliación de planta con control completo de rango de vista y disciplina MEP, ideal para cuartos eléctricos a 1:20 o 1:25) y un *Detail Callout* (enfocado en representar detalles constructivos donde la geometría 3D se complementa con componentes de detalle 2D). Por su parte, las secciones transversales y longitudinales permiten verificar cotas libres reales bajo falso techo, bancadas de cuadros, radios de curvatura en entradas de acometida y sellados cortafuegos en pasos entre sectores.

#### Conceptos clave
- ***Floor Plan Callout* vs. *Detail Callout*:** El primero se comporta como una planta ampliada independiente con su propio *View Range* y plantilla de vista; el segundo hereda orientación de corte o planta orientada al detalle constructivo con superposición 2D y parámetro *Show in* (vista madre o intersección).
- **Secciones coordinadas de cuartos eléctricos:** Cortes ortogonales (A-A', B-B') acotados respecto a nivel de suelo acabado y cara inferior de losa/viga para validar altura de cuadros, bancadas, pasillos frontales/posteriores y bandejas superiores.
- **Patinillos (*Shafts*) y pasos cortafuegos:** Vistas en planta ampliada y alzado/sección de conductos verticales entre plantas donde se verifica la separación entre potencia y telecomunicaciones, el espacio de reserva y el sellado intumescente en cada forjado.
- **Referencia automática bidireccional (*Callout & Section Head*):** Etiqueta dinámica en la vista general que muestra automáticamente el número de detalle y número de lámina donde se ha colocado la ampliación o sección, actualizándose si el detalle cambia de lámina.

#### Definiciones necesarias
- **Vista de llamada (*Callout*):** Recorte ampliado de una porción de vista (planta, sección o alzado) vinculada al modelo 3D que genera una nueva vista con mayor nivel de detalle y escala ampliada (1:25, 1:20 o 1:10).
- **Cuarto técnico / Sala de cuadros BT:** Recinto dedicado a alojar cuadros generales, armarios de distribución, baterías de condensadores o equipos SAI, sujeto a requisitos estrictos de ventilación, acceso, puertas de evacuación y distancias de seguridad reglamentarias.

#### Ejemplo práctico realista
En una planta industrial de alimentación (planta general 1:100), el Cuadro General de Baja Tensión (CGBT, de 3.200 mm de ancho × 2.100 mm de alto × 800 mm de fondo, montado sobre bancada de hormigón de 150 mm) comparte un cuarto técnico de 4,80 × 3,60 m con un armario de compensación de reactiva y un cuadro de alumbrado. El proyectista crea un *Floor Plan Callout* a escala 1:20 en una lámina específica (`EL-DET-01`) y traza dos secciones ortogonales (A-A' longitudinal y B-B' transversal a escala 1:25). En las secciones se acotan: cota superior de bandejas de salida a +2,65 m sobre suelo acabado, reserva libre de 350 mm sobre cubierta del cuadro para radios de curvatura de cables unipolares de 240 mm², pasillo libre frontal de maniobra de 1,45 m con puerta abriendo hacia el exterior y paso sellado RF-120 al atravesar el muro sectorizado hacia la zona de producción.

> *Nota obligatoria de verificación normativa:* Las distancias mínimas de pasillos de servicio y maniobra frente a cuadros, alturas libres mínimas, apertura de puertas, ventilación y resistencia al fuego de sellados cortafuegos deben contrastarse obligatoriamente con el reglamento eléctrico y código de edificación vigentes en el país (por ejemplo, prescripciones ilustrativas del REBT e ITC correspondientes y CTE DB-SI en España, IEC 60364 o NFPA 70/NEC art. 110 en otras jurisdicciones). Una sección limpia en Revit no valida por sí sola el cumplimiento legal de espacios de trabajo.

#### Errores frecuentes
- Crear ampliaciones duplicando la vista completa (*Duplicate View*) y recortándola sin símbolo de llamada en la planta madre, dejando al lector del plano sin saber de qué zona procede la ampliación o en qué lámina buscarla.
- Olvidar ajustar el *Far Clip Offset* (profundidad de corte) de una sección de cuarto eléctrico, provocando que aparezcan detrás bandejas o tuberías de salas vecinas que ensucian e inducen a confusión en el corte.
- Dejar líneas de sección y *callouts* sin asignar a lámina visibles en las plantas definitivas, generando marcas con campos vacíos (`-/-`) en la entrega impresa.
- No coordinar los pasos de bandejas en sección con la estructura (vigas descolgadas) y conductos de climatización, descubriendo colisiones en obra durante el montaje.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué criterio técnico permite decidir en Revit MEP si conviene crear un *Floor Plan Callout* o un *Detail Callout* para ampliar un cuarto eléctrico?
2. ¿Qué información dimensional y constructiva debe aparecer obligatoriamente acotada en una sección de cuarto de cuadros eléctricos y qué debe comprobarse frente al reglamento vigente?
3. ¿Por qué es imprescindible verificar el parámetro *Far Clip Offset* y la disciplina de la vista en una sección de patinillo eléctrico?

---

### 3.3. Vistas de diseño 2D (*Drafting Views*) para detalles constructivos tipo

#### Explicación breve y clara
No todo detalle eléctrico debe ni merece modelarse en 3D tornillo a tornillo: representar capas de arena lavada, bandas de señalización enterradas, mordazas de varilla roscada o grapas bimetálicas de puesta a tierra dentro del modelo tridimensional sobrecargaría el archivo `.rvt` sin aportar valor de coordinación espacial. Para esos elementos repetitivos y estandarizados se utilizan **vistas de diseño 2D (*Drafting Views*)**, vistas completamente independientes de la geometría 3D del modelo donde se dibuja a escalas detalladas (1:2, 1:5, 1:10 o 1:20) combinando *Detail Components* (familias 2D), *Repeating Details*, regiones rellenas (*Filled Regions*), líneas de detalle y notas clave. Su gran ventaja es la portabilidad: una biblioteca bien depurada de *Drafting Views* (zanjas, electrodos de puesta a tierra, soportación de bandejas, fijación de luminarias en falso techo, paso de muros) puede transferirse de un proyecto a otro mediante *Insert Views from File* manteniendo estándares gráficos uniformes.

#### Conceptos clave
- **Independencia del modelo 3D:** A diferencia de las secciones y *callouts*, una *Drafting View* no se actualiza si cambia la geometría 3D; exige rigor técnico para seleccionar e incluir únicamente detalles que correspondan al alcance real del proyecto.
- **Componentes de detalle (*Detail Items*) y detalles repetitivos:** Familias 2D paramétricas reutilizables (tubos corrugados en sección, perfiles C-rail, varillas roscadas, picas de tierra, bloques de hormigón) y matrices automáticas (*Repeating Detail Components*) para representar rellenos de grava o capas de tierra compactada.
- **Detalles constructivos eléctricos esenciales:** (1) Zanjas enterradas de BT/MT (profundidad, lecho de arena, separación entre circuitos, protección mecánica y cinta señalizadora); (2) Electrodos y arquetas de puesta a tierra (pica cobre-acero, grapa registrable, cable desnudo de enlace, puente de comprobación); y (3) Montaje y puesta a tierra de bandejas metálicas (soportación a forjado, distancia mínima respecto a tuberías húmedas o calientes, continuidad equipotencial).
- **Gestión segura de detalles heredados en CAD (DWG/DXF):** Cuando una oficina dispone de detalles históricos en CAD, conviene redibujarlos progresivamente en familias nativas Revit o, al menos, limpiarlos en un archivo puente (*Explode* prohibido dentro del modelo central de producción para evitar proliferación de estilos de línea y sombreados corruptos).

#### Definiciones necesarias
- **Vista de diseño 2D (*Drafting View*):** Vista bidimensional no vinculada a la geometría del modelo BIM, destinada a documentar detalles constructivos estándar, esquemas típicos de montaje o diagramas auxiliares a escala gráfica definida.
- **Componente de detalle (*Detail Component / Detail Item*):** Familia 2D cargable de Revit que representa elementos constructivos o accesorios en vistas de detalle y secciones sin añadir carga geométrica 3D al modelo.

#### Ejemplo práctico realista
Para una urbanización industrial con alumbrado exterior y acometida subterránea de baja tensión (0,6/1 kV), el proyectista prepara tres *Drafting Views* a escala 1:10 e 1:5 en la lámina `EL-DET-02`:
- **Detalle 1 (`1:10`): Zanja tipo bajo calzada y bajo acera.** Representa mediante regiones rellenas y *Detail Items* la zanja de 0,80 m de profundidad mínima bajo calzada frente a 0,60 m bajo acera, cama de arena de río de 100 mm bajo generatriz inferior, dos tubos corrugados de doble pared Ø 160 mm separados entre sí, recubrimiento de arena 100 mm por encima de generatriz superior, losa/capa de hormigón de protección mecánica bajo calzada, banda plástica de señalización eléctrica a 0,30 m bajo rasante y reposición de firme.
- **Detalle 2 (`1:5`): Arqueta registrable y pica de puesta a tierra.** Muestra arqueta de 400 × 400 mm con tapa practicable sin carga de tráfico (o reforzada en calzada), pica de acero cobreado Ø 14 mm × 2.000 mm hincada en fondo drenante, grapa de latón/bronce accesible para medición con telurómetro y conductor de cobre desnudo de 35 mm² protegido en tubo hasta barra equipotencial.
- **Detalle 3 (`1:5`): Suspensión de bandeja perforada a techo.** Detalla varilla roscada M10 con taco metálico homologado en losa, perfil C 41×21 mm, separación mínima de 200 mm sobre tubería de agua fría inferior, tornillería de unión y cable de puesta a tierra de masas metálicas.

> *Nota obligatoria de verificación normativa:* Las profundidades de zanja (0,60 m / 0,80 m), diámetros y espesores de picas, secciones mínimas de conductor de tierra (por ejemplo, 35 mm² o 50 mm² según uso y terreno) y distancias de separación frente a conducciones de gas, agua o telecomunicaciones son **valores ilustrativos**. Deben verificarse siempre conforme al reglamento aplicable en el país del proyecto (por ejemplo, ITC-BT-07, ITC-BT-18 del REBT en España, normas de compañía distribuidora o NEC/IEC vigentes) y validarse con el cálculo específico de resistencia de puesta a tierra y estudio geotécnico.

#### Errores frecuentes
- Importar e **explotar (*Full Explode*)** decenas de detalles DWG directamente dentro del modelo central `.rvt`, contaminando el archivo con cientos de patrones de relleno, fuentes y subcategorías de línea basura.
- Insertar en la lámina un detalle tipo reciclado que contradice el proyecto real (por ejemplo, mostrar tubo Ø 110 mm en el detalle cuando el plano de planta y las mediciones especifican Ø 160 mm, o incluir una zanja con protección de ladrillo cuando el pliego exige hormigón pobre).
- Usar *Drafting Views* para representar un cuarto eléctrico real específico del edificio en lugar de un *Callout* y secciones vinculadas al modelo 3D, perdiendo toda coordinación cuando arquitectura desplaza un tabique.
- Omitir la referencia cruzada desde el plano de planta o sección hacia el detalle tipo correspondiente (dejar detalles «sueltos» en láminas sin indicar dónde se aplican).

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué no conviene modelar en 3D capas de arena, cintas señalizadoras o tornillería de montaje de bandejas y resulta preferible documentarlas mediante *Drafting Views*?
2. ¿Qué riesgo técnico implica explotar bloques CAD DWG directamente dentro del modelo BIM de producción y cómo debe gestionarse la transición a detalles nativos?
3. ¿Cómo se asegura la coherencia entre una *Drafting View* estandarizada (independiente del modelo 3D) y los datos reales especificados en las plantas, cuadro de cargas y pliego?

---

### 3.4. Control de revisiones, nubes de revisión y gestión de entregas sin contradicciones

#### Explicación breve y clara
Cada emisión de planos tras la primera entrega oficial exige trazabilidad absoluta sobre qué cambió, cuándo cambió y quién lo aprobó. Revit incorpora un sistema integrado de control mediante *Sheet Issues/Revisions* (*Issued*, *Numbering: Per Project* vs. *Per Sheet*, secuencia numérica o alfanumérica) unido a las *Revision Clouds* (nubes de revisión) y etiquetas *Revision Tag*. Cuando se dibuja una nube sobre una vista o directamente sobre una lámina vinculada a la Revisión 02, la tabla de revisiones de esa cartela registra automáticamente la fila `Rev. 02`, mientras las láminas no modificadas permanecen intactas sin falsas actualizaciones. Al finalizar la emisión, bloquear (*Issued*) la revisión impide alteraciones accidentales de nubes históricas. La IA generativa (ChatGPT o Claude) resulta muy práctica para unificar la redacción clara y técnica de las notas de detalles y resumir listas de cambios (*changelogs*) a partir de registros internos anonimizados, siempre verificando lámina por lámina que nubes, números de revisión y textos del cajetín coinciden exactamente.

#### Conceptos clave
- **Numeración *Per Project* vs. *Per Sheet*:** En *Per Project*, todas las láminas que cambian en la emisión 2 reciben el código global de proyecto (p. ej. `R02`); en *Per Sheet*, cada lámina incrementa su propio contador consecutivo (`01`, `02`...) independientemente de si otras láminas sufrieron revisiones previas.
- **Ámbito de la nube (*View* vs. *Sheet*):** Si el cambio afecta al modelo o geometría (por ejemplo, reubicación de un cuadro en un *Callout*), la nube debe dibujarse **dentro de la vista** para acompañar al elemento; si el cambio afecta únicamente a la composición de la lámina o una nota en cartela, se dibuja sobre la **lámina**.
- **Bloqueo de revisiones emitidas (*Issued*):** Marcado obligatorio tras entregar el paquete PDF que impide añadir, mover o borrar nubes pertenecientes a una revisión pasada, preservando el historial contractual.
- **Asistencia auditada de IA en notas y *changelogs*:** Conversión de notas técnicas breves de ingeniería en descripciones homogéneas para detalles tipo y consolidación de listados de cambios entre revisiones, sin datos confidenciales del cliente y con comprobación manual sobre cada plano.

#### Definiciones necesarias
- **Nube de revisión (*Revision Cloud*):** Elemento gráfico de anotación en forma de contorno ondulado asociado a una revisión concreta en Revit que rodea exactamente la zona modificada desde la emisión anterior y activa automáticamente su entrada en la tabla de revisiones de la lámina.
- **Transmittal / Registro de emisión:** Documento índice que acompaña cada entrega de planos detallando códigos de lámina, títulos, número de revisión vigente, formato, fecha y motivo del cambio.

#### Ejemplo práctico realista
Tras recibir comentarios de coordinación con Arquitectura y Protección Contra Incendios en la entrega `Rev. 01` de un edificio de oficinas, el equipo eléctrico debe emitir la `Rev. 02` que afecta únicamente a 3 de las 14 láminas del paquete (`EL-102`, `EL-DET-01` y `EL-DET-03`). El coordinador abre *Sheet Issues/Revisions*, confirma que `Rev. 01` está marcada como *Issued*, crea `Rev. 02` con fecha y descripción `Actualización pasos cortafuegos y detalle arqueta PT`, y elige visibilidad *Cloud and Tag* para `Rev. 02` (dejando `Rev. 01` en *None* para ocultar nubes viejas sin borrar su fila de historial en cartela). En `EL-DET-01`, dibuja dos *Revision Clouds* dentro de la sección B-B' rodeando el nuevo sellado cortafuegos RF-120 del patinillo y les aplica el *Revision Tag* `02`. Las otras 11 láminas no modificadas conservan su última revisión `Rev. 01` sin cambios ficticios. Antes de imprimir, el coordinador pega una lista anonimizada de los 5 cambios técnicos en Claude para redactar descripciones concisas de menos de 45 caracteres para la tabla de cartela y las revisa una por una frente a las nubes visibles en las 3 láminas afectadas.

#### Errores frecuentes
- Dejar activa la visibilidad de todas las nubes históricas indefinidamente hasta convertir los planos de la `Rev. 06` en un amasijo ilegible de nubes superpuestas, o bien **borrar** las nubes de la `Rev. 01` eliminando así su registro automático en la tabla de revisiones de la cartela.
- Incrementar manualmente el número de revisión en todas las láminas de un proyecto («todas pasan a Rev. 02») aunque 10 planos no hayan sufrido ningún cambio, obligando al equipo de obra a revisar innecesariamente documentos idénticos.
- Dibujar *Revision Clouds* directamente sobre la lámina encima de una vista recortada: si después se desplaza la ventana gráfica (*Viewport*) en el cajetín, la nube queda señalando el sitio equivocado del dibujo.
- Confiar en resúmenes de cambios generados por IA sin contrastar el número exacto de plano, detalle y descripción real visible en las nubes del archivo Revit.

#### Preguntas que el alumnado debería poder responder
1. ¿Cómo se ocultan en Revit las nubes de la Revisión 01 al preparar la Revisión 02 sin que desaparezca la fila histórica de la Revisión 01 en el cajetín de la cartela?
2. ¿Por qué conviene dibujar las nubes de cambios geométricos dentro de la vista (*Callout*/planta/sección) en lugar de dibujarlas directamente sobre la lámina?
3. ¿Qué diferencia práctica existe entre la numeración de revisiones *Per Project* y *Per Sheet* al emitir un lote parcial de planos modificados?

---

## 4. Metodología didáctica

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
|---|---:|---|---|
| **1. Apertura y activación** | 20 min | Muestra una lámina real anonimizada con fallos típicos (cajetín sin escala gráfica, sección de cuarto eléctrico sin cotas de altura libre, detalle DWG explotado y nube de revisión borrada). Lanza la Actividad 1. | Realiza una inspección rápida en parejas, localiza los errores de maquetación y trazabilidad documental y prioriza riesgos en obra. |
| **2. Exposición guiada / Microlearning I** | 35 min | Explica y demuestra en vivo la creación de cartelas paramétricas (*Labels* + *Revision Schedule*), la diferencia operativa entre *Floor Plan Callout* y *Detail Callout* y la acotación de secciones de cuartos eléctricos. | Identifica los parámetros clave de cartela y vistas vinculadas, distingue escalas adecuadas (1:20, 1:25) y registra criterios de verificación reglamentaria. |
| **3. Análisis de caso práctico** | 45 min | Presenta el caso *Centro Comercial Mirador del Sur — Ampliación de Cuarto CGBT y Red Exterior* junto a su paquete de anomalías documentales y modera equipos de 3-4 personas. | Analiza las incoherencias entre planta general, sección de cuarto de cuadros, detalle 2D de zanja/tierra y gestión de revisiones, proponiendo la arquitectura correcta de láminas. |
| **4. Exposición guiada / Microlearning II** | 30 min | Desarrolla la creación de *Drafting Views* con *Detail Items* (zanjas, electrodos de puesta a tierra, bandejas), gestión segura de DWG heredados, flujo formal de *Revision Clouds* y apoyo con IA en notas técnicas. | Contrasta cuándo modelar en 3D frente a detallar en 2D, define reglas de limpieza CAD y ensaya criterios para validar notas técnicas generadas con IA. |
| **5. Taller práctico de aplicación y transferencia** | 65 min | Dirige la Actividad 2 (25 min: diseñar la ficha y esquema constructivo de un detalle 2D eléctrico + configuración de sección de cuarto) y la Actividad 3 (40 min: maquetar el índice de láminas de detalles y protocolo de revisiones de su proyecto con notas asistidas por IA). | Construye la especificación de cartela, maqueta vistas/detalles o plantillas 2D, redacta *prompts* anonimizados para normalizar notas constructivas y verifica manualmente nubes y parámetros. |
| **6. Discusión guiada y puesta en común** | 25 min | Selecciona 3 láminas o propuestas de detalle del alumnado para revisión cruzada tipo «comité de calidad antes de emisión a obra», cuestionando cotas faltantes o contradicciones 2D/3D. | Presenta su lámina de detalles y tabla de revisiones en 3 minutos, detecta puntos ciegos en propuestas ajenas y ajusta etiquetas y referencias cruzadas. |
| **7. Síntesis, evaluación sumativa y cierre** | 20 min | Consolida la lista de oro para láminas de detalles, aplica el cuestionario sumativo y conecta con el Tema 7 (Especificaciones técnicas y conciliación con *schedules*). | Responde al cuestionario aplicado, realiza su autoevaluación y anota las correcciones necesarias en su plantilla de proyecto. |
| **TOTAL** | **240 min** | | |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «Caza de errores en la lámina de detalles enviada a obra»

- **Objetivo:** Reconocer de forma crítica las fallas documentales y constructivas más frecuentes en cartelas, ampliaciones de cuartos eléctricos, detalles 2D y control de revisiones antes de emitir planos a obra.
- **Instrucciones para el alumnado:**
  1. Examinad en parejas durante 8 minutos la lámina A1 de ejemplo proporcionada (`EL-DET-01_BORRADOR.pdf`), que contiene un cajetín, una ampliación de cuarto BT, un detalle de arqueta de puesta a tierra y un historial de revisiones.
  2. Señalad en rojo al menos 6 fallos concretos agrupados en: *Cartela/Escala*, *Cuarto eléctrico/Sección*, *Detalle 2D* y *Revisiones*.
  3. Debatid en plenario (12 minutos) qué consecuencias prácticas tendría enviar esa lámina sin corregir al instalador o a la dirección facultativa.
- **Materiales necesarios:** Lámina PDF/impresa de diagnóstico con errores intencionados y ficha de control de 4 categorías.
- **Tiempo estimado:** 20 minutos (Fase 1).
- **Rol del formador:** Guiar la detección de fallos sutiles (como ausencia de escala gráfica, sección sin altura de bancada ni referencia a vista madre, detalle 2D con sección de cobre incompatible con la tabla o nube de revisión borrada en Rev. 02).
- **Producto o entregable esperado:** Lista comentada de al menos 6 defectos detectados con su impacto técnico en obra.
- **Criterios de éxito:** El alumnado identifica errores en las cuatro categorías y justifica por qué la trazabilidad entre vista madre, detalle y revisión es indispensable.

### Actividad 2 (Aplicación técnica): «Diseño combinado de cuarto eléctrico (Callout + Sección) y detalle constructivo 2D»

- **Objetivo:** Aplicar la diferenciación entre vistas vinculadas al modelo 3D y *Drafting Views* 2D configurando parámetros reales de representación, cotas críticas y referencias cruzadas en una lámina normalizada.
- **Instrucciones para el alumnado:**
  1. En parejas (25 minutos), tomad el supuesto de un cuarto eléctrico de 4,00 × 3,20 m con altura libre a losa de 3,30 m y acometida subterránea exterior con puesta a tierra.
  2. Especificad en la plantilla de lámina la configuración exacta de: (a) el *Floor Plan Callout* (1:25) y una sección transversal A-A' (1:25) con sus 5 cotas obligatorias, y (b) una *Drafting View* (1:10) para el detalle de zanja enterrada o arqueta de puesta a tierra utilizando únicamente *Detail Items* y regiones rellenas (sin explotar DWG).
  3. Indicad en la cartela qué *Labels* paramétricos se emplearán y qué norma o reglamento aplicable deberá comprobar el ingeniero antes de validar cotas mínimas de pasillo, profundidad de zanja o sección de tierra.
- **Materiales necesarios:** Archivo de proyecto Revit MEP de práctica (o plantilla técnica impresa/digital de maquetación de lámina A1 + catálogo de *Detail Items*).
- **Tiempo estimado:** 25 minutos (primera parte de la Fase 5).
- **Rol del formador:** Supervisar el uso correcto de *View Range* y *Far Clip Offset* en la sección, verificar la inclusión de escala gráfica y recordar que los valores dimensionales de ejemplo deben validarse siempre frente al reglamento local vigente.
- **Producto o entregable esperado:** Esquema técnico o lámina configurada con 1 *Callout*, 1 sección acotada y 1 *Drafting View* debidamente referenciadas en cartela paramétrica.
- **Criterios de éxito:** Correcta elección de escalas, separación limpia entre elementos 3D y detalle 2D, acotación completa de alturas/pasillos/capas y advertencia explícita de verificación normativa.

### Actividad 3 (Transferencia a proyecto real): «Plan de láminas de detalles, notas normalizadas con IA y protocolo de revisiones»

- **Objetivo:** Diseñar la estructura completa de láminas de detalles y el flujo formal de control de revisiones para el proyecto real del alumnado (o caso integrador del programa), utilizando IA generativa de forma segura para estandarizar notas técnicas.
- **Instrucciones para el alumnado:**
  1. Definid el inventario de láminas de detalles necesarias para vuestro proyecto (mínimo 2 láminas: 1 de cuartos eléctricos/pasos vinculados al 3D y 1 de detalles constructivos tipo 2D).
  2. Preparad un listado **100 % anonimizado** de los 4 detalles constructivos seleccionados (sin incluir planos, cliente ni ubicación sensible) junto con sus características técnicas reales decididas por vosotros (p. ej., diámetro de tubo, tipo de arqueta, calibre de perfil de bandeja).
  3. Redactad un *prompt* para ChatGPT o Claude solicitando notas constructivas breves, homogéneas, en imperativo/infinitivo técnico y libres de marcas comerciales injustificadas para insertar en las *Drafting Views*, más un borrador de texto para la tabla de `Rev. 01` / `Rev. 02`.
  4. Auditad la salida de la IA: eliminad cualquier código de norma o dato técnico que la IA haya añadido sin verificar, corregid unidades al Sistema Internacional (SI) y documentad el protocolo de control de nubes de revisión (*Per Project* vs. *Per Sheet*, bloqueo *Issued*) en la **Plantilla de Control de Láminas y Revisiones** (Sección 8).
- **Materiales necesarios:** Plantilla de Control de Láminas y Revisiones (Sección 8), acceso a entorno autorizado de IA (o ficha de *prompting* en papel si no hay conexión).
- **Tiempo estimado:** 40 minutos (segunda parte de la Fase 5) + 25 minutos de revisión cruzada en la Fase 6.
- **Rol del formador:** Comprobar la anonimización del *prompt*, revisar que la IA no introduzca prescripciones normativas falsas o marcas comerciales, y auditar la coherencia del sistema de nubes de revisión elegido.
- **Producto o entregable esperado:** Matriz de Láminas de Detalles del Proyecto + 4 bloques de notas constructivas revisadas + protocolo operativo de revisiones y registro de validación humana frente a la IA.
- **Criterios de éxito:** Inventario realista de detalles vinculados y 2D, notas constructivas uniformes verificadas sin datos inventados por la IA, y flujo de *Revision Clouds* coherente sin contradicciones en cartela.

---

## 6. Caso práctico

### Centro Comercial Mirador del Sur — Descoordinación de detalles, cuartos técnicos y revisiones en obra

#### Contexto empresarial
**Estudio Técnico VoltBIM, S.L.P.** (25 empleados) realiza el proyecto de ejecución y dirección de obra eléctrica de la ampliación de un centro comercial (**4.200 m²** de nueva galería comercial y zona de restauración). El paquete documental incluye 18 planos en formato A1, entre los cuales hay 4 láminas de detalles (`EL-DET-01` a `EL-DET-04`) con ampliaciones del cuarto principal de cuadros y centro de transformación privado de cliente, pasos cortafuegos entre locales y detalles constructivos exteriores para alimentación a rótulos y alumbrado de aparcamiento.

#### Situación o problema
Durante la reunión semanal de obra tras emitir la **Revisión 03 (`Rev. 03`)**, la contrata instaladora presenta tres reclamaciones graves basadas en los planos recibidos:
1. En la lámina `EL-DET-01`, la ampliación del cuarto eléctrico principal carece de secciones verticales; la planta a 1:25 muestra un cuadro de 800 mm de fondo con solo 950 mm libres hasta la pared opuesta y sin indicar si las bandejas de salida pasan por encima o por detrás de un conducto de extracción de humos de 600 × 400 mm que atraviesa la sala.
2. En la lámina `EL-DET-02`, el detalle tipo «Zanja de alumbrado exterior» —importado y explotado desde un viejo archivo DWG de 2016— especifica un único tubo PVC corrugado Ø 63 mm enterrado a 0,40 m sin protección mecánica ni arqueta intermedia, contradiciendo el plano de planta exterior (`EL-104`) y el cuadro de mediciones donde figuran dos tubos PEAD doble pared Ø 110 mm a 0,60 m bajo acera y 0,80 m bajo vial. Además, tras explotar el DWG, el archivo central de Revit aumentó 38 MB y generó 140 estilos de línea duplicados.
3. En la lámina `EL-DET-04`, el proyectista borró las nubes de la `Rev. 01` y `Rev. 02` para «limpiar el plano» y reescribió manualmente con texto plano «Rev. 03» en el cajetín de las 4 láminas de detalles, aunque 2 de ellas no cambiaron nada desde la `Rev. 01`. El instalador construyó un tramo siguiendo notas obsoletas porque el cajetín mostraba `Rev. 03` sin reflejar qué cambió ni en qué fecha.

#### Datos disponibles

| Lámina / Elemento | Problema registrado en obra | Evidencia en modelo Revit / PDF |
|---|---|---|
| **`EL-DET-01` (Cuarto de cuadros BT)** | Sin secciones ni cotas libres de techo; conflicto con conducto HVAC de 600 × 400 mm; pasillo frontal medido en obra de 950 mm. | Se duplicó la vista de planta como *Detail Callout* sin crear secciones transversales y sin encender el vínculo de clima en la *View Template*. |
| **`EL-DET-02` (Zanja exterior y puesta a tierra)** | Discrepancia grave: detalle indica 1 tubo Ø 63 mm a 0,40 m vs. planta/mediciones 2 tubos Ø 110 mm a 0,60–0,80 m. | Se insertó y explotó un bloque DWG antiguo en una *Drafting View* sin auditar cotas ni textos respecto al proyecto actual. |
| **`EL-DET-04` y cajetines `Rev. 03`** | Desaparición del historial de `Rev. 01` y `Rev. 02`; emisión de 2 láminas sin cambios etiquetadas falsamente como `Rev. 03`. | El campo de revisión del cajetín estaba creado como *Text* manual y las nubes previas fueron eliminadas al no usar *Sheet Issues/Revisions*. |
| **Cartela A1 del proyecto** | Falta de barra de escala gráfica; el campo escala muestra `1:25` fijo en el cajetín pese a tener detalles 1:10 en la misma lámina. | Texto estático `1:25` en familia *Title Block* en vez del parámetro nativo `Scale`; un encargado imprimió en A3 y midió mal la bancada. |

#### Preguntas de análisis
1. ¿Qué vistas vinculadas al modelo y qué disciplinas vinculadas deberían activarse en `EL-DET-01` para resolver y acotar de forma inequívoca el conflicto con el conducto de extracción y validar el pasillo de maniobra?
2. ¿Cómo debe procederse en Revit para eliminar la contaminación provocada por el DWG explotado y reemplazar el detalle contradictorio de zanja por una *Drafting View* coherente con la planta y las mediciones?
3. ¿Qué configuración exacta de cartela paramétrica y de *Sheet Issues/Revisions* habría impedido la pérdida del historial de revisiones, la falsa `Rev. 03` en láminas sin cambios y el error de escala en papel A3?
4. ¿Qué comprobaciones normativas y técnicas externas debe realizar el ingeniero responsable antes de autorizar la `Rev. 04` corregida en obra?

#### Tarea a realizar
En grupos de 3-4 personas (30 minutos de trabajo + 15 de puesta en común), elaborad el **Informe Técnico de Corrección Documental (`Rev. 04`)** para VoltBIM que incluya:
1. Rediseño estructural de la familia de cartela A1 (parámetros dinámicos, *Revision Schedule*, escala nativa y barra de escala gráfica).
2. Plan de vistas para `EL-DET-01` (*Floor Plan Callout* 1:25 + 2 secciones coordinadas con vínculo HVAC activado y cotas críticas) y especificaciones para reconstruir `EL-DET-02` con *Drafting Views* nativas limpias.
3. Protocolo de saneamiento del historial de revisiones (`Rev. 01` a `Rev. 04`) definiendo criterio *Per Sheet* o *Per Project*, regla de visibilidad de nubes y emisión exclusiva de láminas modificadas.
4. Lista de verificación reglamentaria obligatoria fuera de Revit (pasillos mínimos frente a cuadros BT, sectorización de extracción de humos, profundidades de zanja y puesta a tierra según el reglamento vigente aplicable).

#### Posibles soluciones o criterios de análisis
- **Reconstrucción de la cartela:** Reemplazar el texto estático `1:25` y `Rev. 03` por *Labels* nativos (`Scale`, `Current Revision`, `Current Revision Date`) y un *Revision Schedule* integrado en el cajetín; añadir escala gráfica en metros junto al cajetín o en cada plantilla de vista para evidenciar reducciones A1→A3.
- **Resolución en `EL-DET-01`:** Convertir la ampliación en *Floor Plan Callout* 1:25, activar en su *View Template* el vínculo de climatización en semitono (*Halftone*) y crear secciones A-A' y B-B' 1:20/1:25 que atraviesen el cuadro y el conducto de 600 × 400 mm. Verificar con ingeniería si es obligatorio reubicar el cuadro o ampliar el cuarto para cumplir la anchura mínima reglamentaria de pasillo de maniobra y apertura de puertas (por ejemplo, distancias mínimas aplicables según reglamento eléctrico vigente del país, nunca aceptando los 950 mm sin validar norma y apertura de armario).
- **Saneamiento de `EL-DET-02`:** Restaurar copia previa limpia o purgar estilos basura generados por la explosión DWG; crear una *Drafting View* nativa 1:10 con *Detail Items* paramétricos que refleje exactamente **2 tubos PEAD doble pared Ø 110 mm**, cama de arena, protección mecánica y profundidades de **0,60 m (acera) / 0,80 m (vial)** —verificadas frente al reglamento aplicable y especificaciones del proyecto— junto con el detalle 1:5 de arqueta de puesta a tierra registrable.
- **Control de revisiones (`Rev. 04`):** Bloquear (`Issued`) las revisiones pasadas, documentar explícitamente la corrección en la `Rev. 04` mediante *Revision Clouds* dentro de las vistas afectadas (`EL-DET-01` y `EL-DET-02` únicamente), configurar visibilidad *None* en nubes anteriores para mantener limpias las láminas conservando sus filas en el *Revision Schedule*, y emitir *Transmittal* indicando que `EL-DET-03` y `EL-DET-04` mantienen su revisión previa vigente si no sufrieron cambios técnicos.

#### Preguntas de reflexión final
- ¿Qué coste económico y reputacional tiene en una obra real «ahorrar 20 minutos» explotando un detalle DWG antiguo sin verificar sus cotas frente al modelo y las mediciones?
- ¿Cómo convences a un jefe de proyecto con prisas de que emitir una revisión falsa en láminas que no han cambiado perjudica directamente a la dirección de obra y a la contrata?

---

## 7. Evaluación

### Evaluación diagnóstica
Cuestionario rápido inicial de 3 preguntas:
1. ¿En qué caso usarías una vista de sección vinculada al modelo 3D y en cuál una *Drafting View* 2D?
2. Si una lámina combina vistas a escala 1:25 y 1:10, ¿qué debe aparecer en el cajetín y en cada título de vista?
3. ¿Qué ocurre con la tabla de revisiones de una cartela en Revit si borras las nubes de la revisión anterior en lugar de ocultarlas desde *Sheet Issues/Revisions*?

### Evaluación formativa
- **Actividad 1:** Precisión al localizar fallos ocultos de escala, conflictos multidisciplinares y trazabilidad de revisiones en la lámina borrador.
- **Actividad 2:** Validación técnica de la configuración de *Callout*, cotas críticas en sección de cuarto eléctrico y uso limpio de *Detail Items* sin explosión de DWG.
- **Fase 6 (Revisión cruzada):** Capacidad de argumentar decisiones de maquetación y detectar inconsistencias en las propuestas de compañeros.

### Evaluación sumativa
1. **Entregable del proyecto (Actividad 3):** Dossier de Maquetación y Revisiones compuesto por: estructura de cartela paramétrica, índice de láminas de detalles (vinculadas 3D y 2D), 4 notas constructivas revisadas con trazabilidad de *prompt* anonimizado y protocolo de control de revisiones y nubes.
2. **Prueba práctica corta (5 ítems):** Selección entre *Floor Plan Callout* / *Detail Callout* / *Drafting View*, configuración de *Revision Schedule*, gestión segura de DWG en Revit, impacto de escala gráfica y verificación reglamentaria independiente de cuartos eléctricos y zanjas.

### Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
|---|---|---|---|---|
| **Diseño de cartelas paramétricas y maquetación** | Usa textos estáticos en cajetín, omite escalas individuales cuando hay escalas mixtas y no incluye escala gráfica. | Configura parámetros básicos de lámina, pero falla en la tabla de revisiones o deja márgenes/títulos de vista inconsistentes. | Diseña una cartela paramétrica completa con *Labels* de proyecto/lámina, *Revision Schedule* controlado, escala automática y barra de escala gráfica. | Estandariza familias de cartela multi-formato (A1/A3) con estados documentales trazables, zonas de referencia alfanuméricas y títulos de vista uniformes. |
| **Vistas de llamada (*Callouts*) y secciones de cuartos eléctricos** | Duplica vistas sin vínculo de llamada, no acota alturas libres ni pasillos o ignora vínculos de otras disciplinas (HVAC/estructura). | Crea *Callouts* y secciones básicas, pero deja profundidad de corte (*Far Clip*) excesiva o faltan cotas clave de maniobra y pasos. | Aplica correctamente *Floor Plan Callouts* y secciones ortogonales acotadas con vínculos coordinados y mención a la comprobación reglamentaria de distancias. | Produce documentación ejecutiva de cuartos y patinillos con secciones cruzadas, sellados cortafuegos, reservas de curvatura y coordinación integral MEP-Estructura. |
| **Vistas de diseño 2D (*Drafting Views*) y detalles constructivos** | Explota archivos DWG basura dentro del modelo central o inserta detalles contradictorios con plantas y mediciones. | Crea *Drafting Views* coherentes en parte, pero emplea líneas sueltas poco reutilizables u omite referencias cruzadas desde las plantas. | Construye detalles tipo limpios (zanjas, electrodos PT, bandejas) con *Detail Items*, coherentes con mediciones y planta, con nota de verificación normativa. | Desarrolla biblioteca modular 2D transferible entre proyectos con *Repeating Details*, notas neutras sin marcas injustificadas y matriz de consistencia frente al modelo. |
| **Control de revisiones y uso responsable de IA** | Borra nubes antiguas destruyendo el historial, incrementa revisiones a láminas sin cambios o sube planos confidenciales a IA sin verificar normas. | Mantiene historial básico de revisiones y anonimiza datos, pero comete errores de ámbito (*View* vs. *Sheet*) o acepta frases vagas de la IA. | Gestiona *Sheet Issues/Revisions* con bloqueo *Issued*, nubes ubicadas correctamente, visibilidad controlada y notas revisadas tras usar IA anonimizada. | Implementa flujo integral de emisión (*Transmittal* + nubes trazables + control QA) documentando todas las correcciones realizadas sobre las propuestas de la IA. |

### Actividad de autoevaluación
Reflexión guiada individual (5 minutos al finalizar la sesión): el alumnado revisa su propio entregable respondiendo a cuatro preguntas de verificación binaria (*Sí/No*): (1) ¿Cualquier técnico en obra podría detectar si mi lámina fue impresa fuera de escala?; (2) ¿Cada detalle 2D coincide exactamente en diámetros y secciones con el plano de planta?; (3) ¿Están las nubes geométricas dibujadas dentro de las vistas y bloqueadas las revisiones emitidas?; (4) ¿He comprobado personalmente cada referencia normativa o técnica sugerida por la IA?

---

## 8. Materiales y recursos

### Guion de diapositivas

- **Slide 1:** Portada — Bloque 4 · Tema 6: Láminas de detalles. Objetivos de aprendizaje y papel de la lámina como documento contractual de obra.
- **Slide 2:** Activación — Caso rápido: anatomía de una lámina de detalles defectuosa enviada a obra y sus costes reales.
- **Slide 3:** Cartelas paramétricas (*Title Blocks*) — Formatos ISO A0–A3, *Shared Parameters*, comportamiento de `Scale`, escala gráfica y *Revision Schedule*.
- **Slide 4:** Ampliaciones vinculadas al 3D — Cuándo elegir *Floor Plan Callout*, *Detail Callout* o secciones coordinadas MEP para cuartos de cuadros y patinillos.
- **Slide 5:** Vistas de diseño 2D (*Drafting Views*) — Qué conviene detallar en 2D (zanjas enterradas, arquetas/picas PT, montaje de bandejas), *Detail Items* y regla «prohibido explotar DWG en producción».
- **Slide 6:** Control formal de revisiones — *Sheet Issues/Revisions*, numeración *Per Project* vs. *Per Sheet*, ámbito de nube (*View* vs. *Sheet*) y bloqueo *Issued*.
- **Slide 7:** Caso práctico *Centro Comercial Mirador del Sur* — Diagnóstico integral y plan de saneamiento para emitir una `Rev. 04` sin contradicciones.
- **Slide 8:** IA generativa en notas constructivas y puente al Tema 7 — Cómo redactar notas limpias sin marcas ni alucinaciones normativas y cómo estas láminas se concilian con las especificaciones técnicas.

### Ficha de trabajo
Guía de aula en dos páginas que contiene:
- Cuadro comparativo de decisión: *Floor Plan Callout* vs. *Detail Callout* vs. *Section* vs. *Drafting View*.
- Esquema acotado en blanco de tres detalles tipo (Zanja BT, Arqueta con pica de tierra, Suspensión de bandeja) para completar magnitudes verificables y notas técnicas.
- Checklist de 7 puntos antes de emitir una nueva revisión en Revit.

### Plantilla técnica práctica

**Plantilla de Control de Láminas de Detalles, Consistencia y Revisiones**

| Código de lámina | Formato y escala principal | Vistas incluidas (Tipo: Callout / Sección / Drafting) | Referencia desde plano madre | Notas clave / Parámetros críticos a conciliar con modelo y mediciones | Revisión vigente y descripción del cambio | Estado (*WIP* / *Emitida* / *Bloqueada*) |
|---|---|---|---|---|---|---|
| `EL-DET-01` | A1 · `Como se indica` (Barra 0–2 m) | Planta CGBT (Floor Callout 1:25), Secc. A-A' y B-B' (1:25) | Desde `EL-101` | Pasillo maniobra, bancada +0,15 m, altura libre +2,65 m, vínculo HVAC activo y RF-120 | `Rev. 02`: Ajuste sellado cortafuegos en sección B-B' | Emitida y bloqueada (*Issued*) |
| `EL-DET-02` | A1 · `Como se indica` (Barras 1:10 / 1:5) | Zanja tipo (Drafting 1:10), Arqueta PT (Drafting 1:5), Bandeja (Drafting 1:5) | Desde `EL-104` y `EL-102` | 2×Ø110 mm PEAD, prof. 0,60/0,80 m (a verificar), pica Ø14×2000 mm, Cu 35 mm², perfil C 41×21 | `Rev. 01`: Emisión inicial coordinada con mediciones | Emitida y bloqueada (*Issued*) |

### Lecturas y recursos recomendados
- Documentación técnica oficial de Autodesk Revit sobre *Sheets*, *Title Blocks*, *Callouts*, *Drafting Views* y *Revision Management*.
- Normativa gráfica de referencia sobre formatos de papel, cajetines y dibujo técnico (por ejemplo, referencias ilustrativas a la serie **ISO 128**, **UNE-EN ISO 5457** e **ISO 7200**, sujetas a verificación del país y edición vigente).
- Manuales técnicos de buenas prácticas en gestión documental BIM (por ejemplo, guías de implantación basadas en **UNE-EN ISO 19650** sobre códigos documentales, estados de contenedor de información y control de revisiones).

> **Advertencia obligatoria de validación:** Todos los ejemplos dimensionales de zanjas, electrodos de puesta a tierra, distancias frente a cuadros eléctricos y requisitos de resistencia al fuego son **ilustrativos**. Antes de aplicar cualquier detalle constructivo en proyecto u obra real, el formador y el alumnado deben verificar la edición vigente del reglamento eléctrico, código técnico de edificación y normas de compañía distribuidora del país y municipio aplicables, así como comprobar la compatibilidad exacta con su versión de Revit.

### Glosario de términos clave

| Término | Definición |
|---|---|
| **Cartela paramétrica (*Title Block*)** | Familia 2D de lámina que incorpora marco, formato normalizado, etiquetas automáticas (*Labels*) y tabla de revisiones vinculadas al proyecto y plano. |
| **Componente de detalle (*Detail Item*)** | Familia bidimensional cargable empleada para representar con precisión accesorios constructivos o capas materiales dentro de secciones y *Drafting Views* sin recargar el 3D. |
| **Escala gráfica** | Barra métrica graduada incorporada al plano que escala solidariamente con el dibujo para comprobar en obra o en PDF si la impresión mantiene la proporción correcta. |
| ***Floor Plan Callout*** | Vista ampliada de planta generada desde un recorte de plano madre que conserva disciplina MEP y configuración propia de *View Range*. |
| ***Issued* (Revisión bloqueada)** | Estado en *Sheet Issues/Revisions* que cierra una revisión ya emitida impidiendo editar, mover o eliminar sus nubes asociadas en el modelo. |
| **Nube de revisión (*Revision Cloud*)** | Anotación gráfica que delimita visualmente la zona modificada de una vista o lámina y vincula automáticamente la entrada correspondiente en la tabla de revisiones. |
| **Numeración *Per Project* / *Per Sheet*** | Criterio de asignación del identificador de revisión, ya sea global para toda la entrega del proyecto o consecutivo e independiente por cada lámina modificada. |
| **Vista de diseño 2D (*Drafting View*)** | Vista bidimensional independiente de la geometría tridimensional del modelo destinada a detalles constructivos repetitivos y esquemas estándar. |

---

## 9. Adaptaciones

### Sesión presencial
- Realizar una comprobación física en mesa con escalímetro sobre dos copias impresas de la misma lámina A1: una al 100 % y otra impresa en A3 con «Ajustar a página», demostrando de manera práctica cómo la barra de escala gráfica salva errores en obra.
- Proyectar en directo un archivo `.rvt` antes y después de explotar un DWG antiguo (mostrando el panel *Manage > Purgue Unused / Line Styles*) para concienciar sobre la higiene del modelo BIM.

### Sesión online síncrona
- Compartir un paquete PDF multipágina con marcadores (*bookmarks*) para la Actividad 1 utilizando herramientas de revisión colaborativa (como el visor PDF de navegador, Bluebeam o pizarra digital tipo Miro) donde cada pareja marca con rectángulos y notas los defectos detectados.
- Emplear salas reducidas para el caso *Centro Comercial Mirador del Sur* y pedir que cada grupo complete en vivo una pestaña de la **Plantilla de Control de Láminas y Revisiones** compartida en la nube.

### Sesión asíncrona
- **Pre-trabajo (20 minutos antes de la sesión):** Lectura de un extracto comparativo sobre *Callouts* vs. *Drafting Views* y envío de una foto o captura anonimizada de un detalle constructivo eléctrico real de su entorno laboral (zanja, cuadro o bandeja) señalando qué cota suele olvidarse en obra.
- **Post-trabajo (30 minutos después de la sesión):** Entrega en el LMS de su **Índice y Plantilla de Láminas de Detalles** junto con una *Drafting View* documentada (captura o PDF acotado) y el registro de revisión humana de notas constructivas generadas con IA.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Aprovecha las plantillas de visualización (Bloque 4, Tema 1), la selección de escalas y niveles de detalle (Bloque 4, Tema 3), la disciplina de cotas y etiquetas (Bloque 4, Tema 4), los símbolos y filtros normalizados (Bloque 4, Tema 5) y los fundamentos físicos de puesta a tierra y criterios de trazo (Bloque 1).
- **Competencias que desarrolla:** Composición técnica de planos constructivos BIM, coordinación gráfica 2D/3D de recintos eléctricos críticos, gestión de cambios y revisiones sin contradicciones y normalización segura de notas de detalle con IA.
- **Conexión dentro del plan de 6 módulos / 50 temas:**
  - *Tema anterior (Bloque 4, Tema 5 — Símbolos y filtros de visualización):* Las plantas y vistas ya depuradas con símbolos escalables, leyendas consistentes y filtros por sistema alimentan directamente las ventanas gráficas y ampliaciones que se maquetan en las láminas del Tema 6.
  - *Tema posterior (Bloque 4, Tema 7 — Especificaciones técnicas):* Cada detalle constructivo representado en las láminas (tubos enterrados, picas de puesta a tierra, tipos de bandejas y sellados) deberá quedar respaldado y estrictamente conciliado con las tablas de planificación (*schedules*) y las cláusulas del pliego de especificaciones técnicas.
- **Evidencia de aprendizaje que dejará el alumnado:** Estructura completa de cartela paramétrica, diseño documentado de 1 lámina de cuarto eléctrico (*Callout* + sección acotada) y 1 lámina de detalles 2D constructivos, junto con el protocolo formal de nubes de revisión y notas normalizadas verificadas.

---

## Siguientes pasos para el formador

1. **Preparar las láminas de diagnóstico (`EL-DET-01_BORRADOR.pdf`):** Asegurarse de que los fallos de la Actividad 1 son visibles a simple vista tanto en proyector como en pantallas pequeñas para participantes conectados en remoto.
2. **Validar la biblioteca de *Detail Items* del curso:** Comprobar que las familias 2D de zanja, arqueta, pica y bandeja están cargadas en la plantilla de práctica y en unidades métricas del Sistema Internacional (`mm` / `m`).
3. **Subrayar la coordinación normativa externa:** Insistir durante el Caso Práctico en que las dimensiones de pasillos de maniobra, profundidades de zanja y secciones de tierra dependen del reglamento aplicable vigente y requieren verificación del técnico competente, nunca suposición por plantilla heredada.
4. **Enlazar con el Tema 7:** Cerrar la clase planteando al grupo: «Nuestros planos y detalles constructivos ya muestran gráficamente qué queremos construir y cómo instalarlo; pero ¿cómo aseguramos que los diámetros, calidades de cable, grados IP y pruebas de recepción descritos en las especificaciones técnicas no contradicen ni una sola cota de estas láminas ni del cuadro de cargas?».
