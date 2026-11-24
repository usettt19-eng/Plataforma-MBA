# Tema 2. Clasificación de sistemas: tomacorrientes, alumbrado y modelado 3D de tubos

> **Aviso de alcance técnico y normativo:** Esta guía forma parte de la especialización técnica **IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas** (6 módulos / 50 temas). **No es un programa MBA** ni confiere habilitación legal automática para firmar proyectos o certificados eléctricos oficiales. Cualquier código de color, tensión nominal (`230/400 V` u otros) o referencia reglamentaria (REBT, IEC 60364, NEC/NFPA 70, HD 308 S2) se incluye como **ejemplo ilustrativo**: debe verificarse siempre la normativa vigente en el país y proyecto aplicables. La clasificación paramétrica de tubos y sistemas en Revit MEP ordena la información BIM, pero **no sustituye** el cálculo eléctrico reglamentario ni el cálculo lumínico en DIALux.

---

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Tema 2. Clasificación de sistemas: tomacorrientes, alumbrado y modelado 3D de tubos |
| **Bloque y posición dentro del programa** | Bloque 4: Documentación BIM — Tema 2 de 8 (Tema 23 de 50 del programa) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Manejo de plantillas de vista en Revit MEP (Bloque 4, Tema 1) y modelado de aparatos, luminarias, tubos, uniones y accesorios en Revit MEP (Bloque 3) |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado estandarizará un esquema de parámetros compartidos y de proyecto en Revit MEP para clasificar tomacorrientes, alumbrado y canalizaciones 3D (tubos y bandejas) por servicio, red, fase y tablero de origen, implementando filtros gráficos repetibles y organización del Navegador de Proyectos por disciplina y subdisciplina. |

---

## 2. Objetivos de aprendizaje

Al concluir las 4 horas de sesión, el alumnado será capaz de:

1. **Identificar** las diferencias entre la conectividad nativa de circuitos eléctricos sobre aparatos/luminarias en Revit MEP y la falta de sistemas nativos automáticos en tubos (*Conduits*) y bandejas (*Cable Trays*). *(Nivel de Bloom: Recordar)*
2. **Clasificar** tomacorrientes, luminarias y recorridos 3D de canalizaciones mediante parámetros normalizados de servicio, tipo de red (normal/emergencia/SAI), tablero de origen, circuito y fase, distinguiendo entre parámetros compartidos, parámetros de proyecto y parámetros de familia. *(Nivel de Bloom: Analizar)*
3. **Configurar** filtros basados en reglas gráficas (colores y patrones de línea) integrados en plantillas de vista y un esquema de organización del Navegador de Proyectos por disciplina, subdisciplina y propósito de vista. *(Nivel de Bloom: Aplicar)*
4. **Detectar** inconsistencias de clasificación eléctrica —tubos sin servicio asignado, aparatos sin tablero ni circuito o mezclas de tensión erróneas— utilizando el Navegador de sistemas (`F9`) y tablas de planificación de auditoría (*QA Schedules*). *(Nivel de Bloom: Evaluar)*
5. **Diseñar** un diccionario de parámetros eléctricos compartidos reutilizable en plantilla `.rte`, apoyándose de forma segura en IA conversacional sobre datos anonimizados y validando cada tipo de dato en Revit MEP. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Comportamiento real de sistemas eléctricos en Revit MEP: circuitos frente a tubos 3D

#### Explicación breve y clara
Quienes llegan a electricidad desde fontanería o climatización en Revit MEP suelen esperar que los tubos (*Conduits*) y bandejas (*Cable Trays*) funcionen como las tuberías o conductos mecánicos: que al conectar un tubo a un cuadro o a un enchufe hereden automáticamente un *System Type* con nombre de circuito y carga acumulada. **En Revit MEP esto no ocurre así.**

Los conectores eléctricos nativos permiten crear **circuitos lógicos** (*Electrical Circuits* de Fuerza, Alumbrado, Datos, etc.) entre cuadros (`Electrical Equipment`), tomacorrientes (`Electrical Fixtures`), luminarias (`Lighting Fixtures`) y mecanismos (`Lighting Devices`), visibles en el **Navegador de sistemas (`F9`)**. Sin embargo, los **tubos (`Conduits`), sus uniones (`Conduit Fittings`) y las bandejas (`Cable Trays`) son contenedores físicos independientes sin sistema eléctrico lógico nativo**: no heredan automáticamente el número de circuito ni el tablero del cableado que alojan, salvo que se clasifiquen explícitamente mediante parámetros como `Service Type` (*Tipo de servicio*) o parámetros compartidos propios. Comprender esta limitación real evita frustraciones y permite diseñar flujos de documentación fiables.

#### Conceptos clave
- **Circuito eléctrico lógico (*Electrical Circuit*):** Agrupación paramétrica generada por Revit al conectar elementos con conector eléctrico a un cuadro de distribución; almacena tensión, carga aparente/activa, tablero y número de circuito.
- **Parámetro `Service Type` en tubos y bandejas:** Parámetro de texto integrado en Revit MEP para `Conduits` y `Cable Trays` que permite etiquetar manualmente o por lotes la función del recorrido (p. ej., `Fuerza Normal`, `Alumbrado Emergencia`, `Acometida BT`).
- **Clasificación de carga (*Load Classification*) y sistema de distribución:** Atributos eléctricos configurados en `Electrical Settings` (`ES`) para asignar tensiones y factores de demanda a circuitos lógicos, siempre sujetos a verificación frente al cálculo normativo externo.
- **Desacople físico-lógico:** Hecho técnico por el cual mover o clasificar un tubo 3D en Revit no cambia las propiedades eléctricas del circuito lógico asociado a los tomacorrientes que ese tubo alimenta, requiriendo control de coherencia explícito.

#### Definiciones necesarias
- **Navegador de sistemas (*System Browser*, tecla `F9`):** Panel nativo de Revit MEP que lista circuitos asignados y dispositivos eléctricos huérfanos (*Unassigned*) sin cuadro ni circuito asignado.
- **Conector eléctrico (*Electrical Connector*):** Punto inteligente dentro de una familia `.rfa` que define el sistema (`Power - Balanced`, `Power - Unbalanced`, `Lighting`, `Data`, `Fire Alarm`), la tensión nominal, el número de polos y la carga del equipo.
- **Tubo modelo (*Conduit*) y accesorio/unión (*Conduit Fitting*):** Categorías físicas 3D de canalización rígida o flexible que requieren transferencia explícita de parámetros de clasificación hacia sus codos, tes y cajas para filtrarlos y cuantificarlos juntos.

#### Ejemplo práctico realista
En una planta de oficinas se modelan **24 tomacorrientes dobles `16 A` (`230 V` monofásico, `3.680 VA` teóricos máximos o factor de diseño definido en memoria)** conectados al subcuadro `CS-P1-NOR` formando 3 circuitos lógicos (`C1`, `C2`, `C3`), y **18 luminarias LED (`34 W`, `230 V`)** conectadas a los circuitos `C4` y `C5` del mismo cuadro. En el techo circulan dos recorridos paralelos de tubo rígido `Ø25 mm` hasta el patinillo: visualmente son idénticos porque comparten tipo de familia (`Conduit with Fittings - EMT`). El proyectista rellena `Service Type = FUE-NOR` en el recorrido de enchufes y `Service Type = ALU-NOR` en el de luminarias, y asigna a sus codos (`Conduit Fittings`) el mismo valor mediante selección de red (`Tab`). De este modo, aunque Revit no vincule físicamente el tubo con el circuito `C1`, ambos sistemas quedan perfectamente diferenciados para planos, filtros y mediciones. *(Nota de verificación: las potencias de diseño, factores de simultaneidad y agrupamientos de circuitos en un mismo tubo deben comprobarse según el reglamento vigente en el país, p. ej., REBT ITC-BT-21 e ITC-BT-25 en España).*

#### Errores frecuentes
- Esperar que un tubo conectado físicamente a la cara de un cuadro `Electrical Equipment` herede automáticamente el nombre del cuadro, la tensión o el número de circuito.
- Clasificar únicamente los tramos rectos de `Conduits` olvidando rellenar el parámetro de servicio en los codos y uniones (`Conduit Fittings`), lo que provoca que al aplicar un filtro los codos desaparezcan o queden negros en mitad del trazado.
- Dejar tomas de corriente y luminarias colocadas en el modelo sin asignarlas a ningún circuito (*Unassigned* en `F9`), impidiendo etiquetar tablero y circuito de forma paramétrica.
- Utilizar la categoría `Lighting Fixtures` para modelar una luminaria cuyo conector eléctrico interno viene configurado por error como `Power` en lugar de `Lighting` (o con tensión incompatible de `120 V` en un proyecto europeo de `230 V`), bloqueando el circuitado en Revit.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué los tubos (`Conduits`) y bandejas (`Cable Trays`) en Revit MEP requieren una estrategia de clasificación diferente a la de las tuberías de fontanería o los circuitos de luminarias?
2. ¿Qué ocurre gráficamente en un plano filtrado si asignas el servicio eléctrico a los tramos rectos de tubo pero lo omites en sus `Conduit Fittings`?
3. ¿Cómo puedes comprobar en menos de un minuto cuántos tomacorrientes o luminarias de una planta siguen sin circuito asignado?

---

### 3.2. Estandarización de parámetros compartidos y de proyecto para clasificar sistemas

#### Explicación breve y clara
Para que la información eléctrica viaje con fluidez desde el modelo 3D hacia **filtros visuales, etiquetas automáticas (`Tags`), tablas de planificación (`Schedules`) y entregables de coordinación (IFC / Navisworks)**, no basta con rellenar campos libres inconsistentes (como escribir en un sitio `"Alumbrado"`, en otro `"ILUM"` y en otro `"Alum. Emergencia"`).

El núcleo de la clasificación profesional en Revit MEP reside en definir un **esquema de parámetros compartidos (`.txt`)** normalizado por la empresa o el BEP del proyecto, con valores codificados cerrados o listas estandarizadas: **tipo de servicio** (fuerza, alumbrado, acometida), **tipo de red** (normal, emergencia/grupo electrógeno, SAI/UPS), **tablero de origen**, **circuito**, **fase** y **tensión de servicio**. Mientras los **parámetros de proyecto** solo viven dentro de un `.rvt` concreto y no pueden leerse desde etiquetas `.rfa`, los **parámetros compartidos** poseen un identificador único (`GUID`) que permite que tanto las familias de aparato/luminaria como las etiquetas de plano lean exactamente el mismo dato.

#### Conceptos clave
- **Parámetro compartido (*Shared Parameter*):** Definición almacenada en un archivo `.txt` externo con un `GUID` único; imprescindible para mostrar el mismo parámetro en múltiples categorías, tablas de planificación y etiquetas personalizadas.
- **Parámetro de proyecto (*Project Parameter*):** Parámetro vinculado rápidamente a categorías dentro de un solo proyecto `.rvt`; aparece en tablas y filtros, pero **no puede insertarse en etiquetas de anotación (`.rfa`)**.
- **Parámetros de ejemplar (*Instance*) vs. Tipo (*Type*):** Los datos variables según ubicación o cableado (`E_Tablero_Origen`, `E_Circuito`, `E_Fase`, `E_Tipo_Red`) deben ser de **ejemplar**; las características constructivas idénticas del modelo comercial (`E_Codigo_Catalogo`, potencia nominal de luminaria) son de **tipo**.
- **Codificación estructurada de valores:** Uso de prefijos normalizados breves (p. ej. `FUE-NOR`, `FUE-SAI`, `ALU-NOR`, `ALU-EME`, `ACO-BT`) en lugar de frases largas, evitando errores tipográficos que rompen los filtros de visualización.

#### Definiciones necesarias
- **Archivo de parámetros compartidos (`.txt`):** Fichero de texto plano gestionado de forma centralizada por el coordinador BIM que contiene grupos y definiciones con `GUID` inmutables; nunca debe editarse a mano en el Bloc de notas para no corromper los identificadores.
- **Esquema de clasificación eléctrica BIM:** Estructura jerárquica de atributos que describe a qué subsistema funcional, nivel de continuidad energética, cuadro de alimentación y fase pertenece cada elemento o canalización modelado.
- **Parámetro integrado (*Built-in Parameter*):** Propiedad nativa de Revit (como `Panel`, `Circuit Number`, `Service Type` o `Mark`) que conviene aprovechar antes de duplicar parámetros compartidos innecesarios.

#### Ejemplo práctico realista
Para un edificio administrativo con suministro normal, grupo electrógeno y SAI, el equipo estandariza el archivo `SP_Electrico_BEP.txt` y vincula **5 parámetros compartidos de ejemplar** a `Electrical Equipment`, `Electrical Fixtures`, `Lighting Fixtures`, `Lighting Devices`, `Conduits`, `Conduit Fittings`, `Cable Trays` y `Cable Tray Fittings`:

| Nombre del parámetro | Tipo de dato en Revit | Valores normalizados de ejemplo | Uso principal |
|---|---|---|---|
| `E_Servicio` | Texto | `FUE-NOR`, `FUE-SAI`, `ALU-NOR`, `ALU-EME`, `ACO-BT`, `PAT` | Filtros gráficos y mediciones por subsistema |
| `E_Tipo_Red` | Texto | `Normal`, `Emergencia-GE`, `SAI-UPS` | Diferenciar respaldo energético en planos y tablas |
| `E_Tablero_Origen` | Texto | `CGBT-01`, `CS-P1-NOR`, `CS-P1-SAI` | Trazabilidad desde cuadro en tubos y tomas |
| `E_Circuito` | Texto | `C01`, `C02`... (o espejo de circuito) | Etiquetado en tubos/bandejas multi-circuito |
| `E_Fase` | Texto | `L1`, `L2`, `L3`, `3F` | Control preliminar de reparto de cargas en tablas |

*(Nota de verificación: las tensiones nominales —por ejemplo `230 V` / `400 V` a `50 Hz` en Europa o `120 V` / `208 V` / `277 V` / `480 V` a `60 Hz` en sistemas bajo NEC— y el equilibrado real de fases deben comprobarse siempre mediante cálculo eléctrico independiente acorde al reglamento del país).*

#### Errores frecuentes
- Crear un parámetro como **Parámetro de proyecto** y descubrir días antes de entregar que las familias de etiquetas de alumbrado o tubos no pueden seleccionarlo en *Edit Label*.
- Duplicar parámetros nativos existentes (por ejemplo, crear `Mi_Panel` en dispositivos que ya poseen el parámetro nativo `Panel` rellenado automáticamente al circuitar), obligando a teclear datos por duplicado y generando contradicciones.
- Editar manualmente los valores de `GUID` o copiar el archivo `.txt` con múltiples versiones divergentes entre proyectistas, creando «parámetros gemelos» con distinto `GUID` que las etiquetas no reconocen.
- Configurar `E_Fase` o `E_Tablero_Origen` como parámetro de **Tipo**, haciendo que todas las tomas de una misma familia cambien de tablero al editar una sola.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué un parámetro creado únicamente como *Parámetro de proyecto* resulta insuficiente cuando necesitas mostrar el tablero de origen en una etiqueta de tubo?
2. ¿Qué diferencia hay entre configurar `E_Tablero_Origen` como parámetro de *Ejemplar (Instance)* frente a *Tipo (Type)*?
3. ¿Qué ventaja aporta emplear códigos normalizados cortos (`ALU-EME`, `FUE-SAI`) frente a descripciones libres escritas a mano?

---

### 3.3. Codificación de colores, patrones de línea y modelado 3D coherente de tubos y aparatos

#### Explicación breve y clara
Una vez que los aparatos, luminarias y tubos poseen parámetros fiables, las **reglas de filtros gráficos (`View Filters`)** transforman esos datos en un código visual inmediato: tanto en las vistas 3D de trabajo como en las plantas de documentación (en combinación con las plantillas del Tema 1), el proyectista distingue de un golpe de vista una bandeja de alumbrado de emergencia de una de fuerza normal o una acometida principal.

Al mismo tiempo, resulta vital evitar un error conceptual frecuente en obra: **la codificación cromática de los filtros BIM en Revit sirve para leer el plano o el modelo 3D, NO determina el color físico del aislamiento de los conductores** (marrón/negro/gris para fases, azul para neutro y verde-amarillo para protección PE según normativa europea HD 308 S2 / REBT, o códigos equivalentes bajo NEC). Además, la coherencia del modelado 3D exige mantener conectores y parámetros alineados en racks paralelos, evitando mezclar servicios incompatibles dentro de un mismo conducto sin documentarlo.

#### Conceptos clave
- **Filtro basado en reglas (*Rule-based View Filter*):** Criterio dinámico (`Category = Conduits, Conduit Fittings, Cable Trays` AND `E_Servicio equals "ALU-EME"`) al que la plantilla de vista asigna color de línea, patrón (*Solid*, *Dash*, *Dash Dot*) y relleno de superficie.
- **Separación gráfica BIM vs. código de colores de cables:** Distinción obligatoria entre el color representativo de una canalización o familia en pantalla/PDF y el color reglamentario de los aislamientos de fase, neutro y tierra en instalación real.
- **Jerarquía de prioridad en filtros:** Orden vertical en la pestaña *Filters* de `VG` / View Template; el filtro situado más arriba tiene prioridad si un elemento cumple varias condiciones simultáneas.
- **Coherencia física en modelado 3D de tubos:** Uso de diámetros comerciales reales (`Ø20`, `Ø25`, `Ø32`, `Ø40`, `Ø50`, `Ø63 mm` u equivalentes), mantenimiento de separación en paralelismos y clasificación explícita de cajas de derivación y soportes.

#### Definiciones necesarias
- **Patrón de línea (*Line Pattern*):** Secuencia repetitiva de trazos y espacios aplicada por un filtro o subcategoría (p. ej., trazo continuo para normal, discontinuo para empotrado/bajo suelo o punto-raya para emergencia) para garantizar legibilidad incluso al imprimir en blanco y negro o escala de grises.
- **Sobreescritura de patrón de corte y proyección (*Projection/Surface vs. Cut*):** Propiedades dentro de un *View Filter* que permiten colorear no solo los contornos (`Lines`), sino también las caras 3D sólidas (`Patterns -> Solid Fill`) de tubos y bandejas en vistas de coordinación 3D.
- **Canalización multi-circuito:** Tubo o bandeja que transporta conductores de varios circuitos compatibles; en BIM debe etiquetarse mediante código de servicio maestro (`FUE-NOR` / `ALU-NOR`) o lista de circuitos asociados en parámetro dedicado, validando factores de agrupamiento térmicos en el cálculo eléctrico.

#### Ejemplo práctico realista
En el modelo 3D de un hospital ambulatorio, se aplican **5 filtros maestros** sobre vistas de trabajo 3D y plantas de canalizaciones (nunca sustituyendo el código físico de cables):

| Servicio (`E_Servicio`) | Color gráfico BIM (3D y color) | Patrón de línea en plano (legible en B/N) | Elementos incluidos |
|---|---|---|---|
| `FUE-NOR` | Azul cobalto (`RGB 0-90-180`) | Continuo | Tomas normales, tubos y bandejas fuerza normal |
| `FUE-SAI` | Violeta (`RGB 140-40-180`) | Trazo largo – doble punto | Tomas críticas/SAI y sus canalizaciones dedicadas |
| `ALU-NOR` | Ámbar oscuro (`RGB 210-130-0`) | Trazo medio | Luminarias normales, interruptores y sus tubos |
| `ALU-EME` | Rojo carmesí (`RGB 200-20-20`) | Punto – raya (*Centerline*) | Luminarias de emergencia/señalización y tubos |
| `ACO-BT` | Verde esmeralda (`RGB 0-140-70`) | Doble trazo grueso | Acometidas, CGBT y alimentadores principales |

Obsérvese cómo combinar **color + patrón de línea distinto** permite que el plano siga siendo perfectamente interpretable si el jefe de obra lo imprime en blanco y negro en obra. *(Nota de verificación: las separaciones físicas entre redes normales, de seguridad/emergencia y telecomunicaciones, así como los materiales libres de halógenos o resistentes al fuego, deben verificarse siempre contra la normativa vigente del edificio).*

#### Errores frecuentes
- Asignar colores únicamente (p. ej. rojo vs. verde con línea continua idéntica) olvidando cambiar el **patrón de línea**, volviendo indistinguibles ambos sistemas cuando en obra se imprime en monocromo o tonos de gris.
- Colocar el filtro general (`E_Tipo_Red = Normal`) por encima del filtro específico (`E_Servicio = ALU-EME`) en la lista de filtros, provocando que el segundo quede anulado silenciosamente.
- Confundir a instaladores o alumnos afirmando que un tubo pintado de rojo en Revit significa que lleva cables rojos o que un filtro azul representa el conductor neutro.
- Modelar circuitos de alumbrado de emergencia y tomas normales en un único tubo físico sin justificación normativa ni etiquetado separado.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué todo esquema de codificación visual mediante *View Filters* debería combinar variación de **color** y de **patrón de línea**?
2. ¿Qué ocurre si dos filtros compatibles aplican sobre una misma bandeja y el más genérico está ubicado por encima del más específico en la pestaña *Filters*?
3. ¿Qué diferencia existe entre el código de color gráfico de un modelo BIM en Revit y el código de color de conductores regulado por normativa eléctrica?

---

### 3.4. Organización del Navegador de Proyectos (*Project Browser*), auditoría QA y apoyo responsable de IA

#### Explicación breve y clara
De poco sirve clasificar perfectamente tomas, luminarias y tubos en el modelo 3D si luego el **Navegador de Proyectos (*Project Browser*)** es una lista plana interminable de 80 vistas llamadas `Level 1`, `Level 1 - Copy 1`, `3D View 14`. La clasificación de sistemas debe reflejarse también en la arquitectura documental del Navegador mediante reglas de **Organización del navegador (*Browser Organization*)** que agrupen automáticamente vistas y láminas por **Disciplina -> Subdisciplina eléctrica -> Uso de vista**.

Para cerrar el ciclo con rigor, se crean **Tablas de planificación de auditoría (*QA Schedules*)** que revelan al instante elementos sin parámetro de servicio o aparatos desconectados. En esta fase, asistentes de IA como ChatGPT o Claude pueden ayudar a estructurar diccionarios de parámetros, convenciones de subdisciplinas y reglas de filtrado en texto o CSV a partir de un listado anónimo de necesidades, exigiendo siempre comprobación humana directa de los tipos de parámetro, restricciones de categoría y filtros dentro de Revit.

#### Conceptos clave
- **Organización del Navegador (*Browser Organization*):** Regla multinivel en Revit que ordena vistas y planos usando parámetros nativos (`Discipline`, `Family and Type`) y parámetros compartidos creados expresamente para vistas (`E_Subdisciplina`, `E_Uso_Vista`).
- **Parámetro de vista `E_Uso_Vista`:** Atributo compartido aplicado a la categoría `Views` que separa de raíz las carpetas `01_TRABAJO` (modelado/coordinación) de `02_DOCUMENTACION` (vistas maquetadas en planos).
- **Tablas de auditoría multi-categoría (*QA Schedules*):** Listados filtrados por `E_Servicio is blank` o `Panel is blank` con formato condicional rojo (*Conditional Formatting*), pensados para limpiar el modelo en minutos antes de exportar planos.
- **Diccionario BIM asistido por IA con control humano:** Uso de LLM para redactar la tabla maestra de parámetros y códigos normalizados desde requisitos anónimos, seguido de validación obligatoria contra el archivo `.txt` de parámetros compartidos y la interfaz de Revit.

#### Definiciones necesarias
- **Subdisciplina (*Sub-Discipline*):** Parámetro estándar o compartido aplicado a vistas de Revit que subdivide la disciplina `Electrical` en ramas claras (`01_Fuerza`, `02_Alumbrado`, `03_Canalizaciones_3D`, `04_Acometidas_PAT`, `05_Esquemas_Detalles`).
- **Formato condicional en tablas (*Conditional Formatting*):** Regla visual dentro de un *Schedule* que resalta automáticamente en rojo o naranja cualquier celda vacía o fuera de rango (p. ej., un tubo sin `Service Type` o un tomacorriente sin circuito).
- **Auditoría de integridad de sistemas:** Proceso periódico de verificación cruzada entre el Navegador de sistemas (`F9`), las tablas de planificación y los cuadros de cargas de ingeniería para detectar elementos huérfanos o discrepancias antes de emitir planos.

#### Ejemplo práctico realista
En un proyecto industrial con **95 vistas**, el coordinador BIM añade dos parámetros compartidos a la categoría `Views`: `E_Uso_Vista` y `E_Subdisciplina`. Configura una regla de *Browser Organization* llamada `00_BIM_Electrico` con agrupación:
1. `Discipline` (`Electrical` / `Coordination`)
2. `E_Uso_Vista` (`01_TRABAJO` / `02_DOCUMENTACION` / `03_QA_AUDITORIA`)
3. `E_Subdisciplina` (`01_Fuerza`, `02_Alumbrado`, `03_Canalizaciones_3D`, `04_Acometidas_PAT`)
4. Ordenado por `Associated Level` y `View Name`.

Paralelamente, abre la tabla `QA_Tubos_Sin_Clasificar` (`Conduits` + `Conduit Fittings`, filtrada por `Service Type` igual a vacío) y detecta **19 codos** sin servicio asignado en menos de 30 segundos, corrigiéndolos directamente desde la tabla o con *Highlight in Model*. Previamente, consultó a ChatGPT para generar un esquema inicial de codificación en formato tabla a partir de una descripción genérica («nave logística con fuerza normal, alumbrado normal/emergencia y cuadros»), eliminando dos parámetros que la IA inventó como «nativos de Revit» (`Conduit Electrical System` inexistente) y ajustando el diccionario a parámetros reales de Revit MEP. *(Nota: nunca deben pegarse nombres reales de cliente, ubicaciones sensibles ni ficheros del proyecto en servicios externos de IA sin autorización).*

#### Errores frecuentes
- Dejar el Navegador de Proyectos en modo `All` sin subdisciplinas, provocando que el equipo pierda tiempo buscando planos reales entre decenas de copias temporales.
- Editar datos de forma masiva en tablas sin haber configurado `Itemize every instance` correctamente, alterando por error tipos completos o mezclando tramos y uniones incoherentes.
- Asumir que porque una tabla en Revit suma `100 %` de los elementos clasificados, las secciones de cable y protecciones de los circuitos están bien dimensionadas conforme a reglamento.
- Copiar directamente scripts, nombres de parámetros o supuestas funciones automáticas sugeridas por un asistente de IA sin verificar si existen realmente en la versión de Revit instalada.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué combinación de parámetros permite separar automáticamente en el Navegador de Proyectos las vistas de trabajo de las vistas listas para lámina por especialidad eléctrica?
2. ¿Cómo ayuda una tabla de auditoría con *Conditional Formatting* a garantizar que ningún tramo ni codo de tubo 3D quede sin clasificar?
3. ¿Qué tipo de alucinación frecuente puede cometer una IA al proponer parámetros de Revit para tubos eléctricos y cómo la detectarías antes de implantarla?

---

## 4. Metodología didáctica

La secuencia didáctica alterna explicación técnica sobre la arquitectura real de datos de Revit MEP, demostración de parámetros compartidos y filtros, laboratorio práctico guiado y resolución colaborativa de un caso industrial realista.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
|---|---|---|---|
| **1. Apertura y activación de conocimientos** | 00:00 – 00:25 (25 min) | Conecta la sesión con las View Templates del Tema 1, plantea la «paradoja del tubo sin sistema en Revit» y dirige la Actividad 1 (detección de aparatos huérfanos y tubos sin servicio). | Explora el Navegador de sistemas (`F9`) y propiedades de un modelo ejemplo identificando qué elementos pertenecen a circuitos lógicos y cuáles carecen de clasificación. |
| **2. Microexposición: Circuitos nativos vs. Parámetros compartidos** | 00:25 – 01:05 (40 min) | Demuestra cómo funcionan los conectores eléctricos, la diferencia crítica entre parámetros compartidos (`.txt`), de proyecto y nativos (`Service Type`), y la definición de instancia vs. tipo. | Construye junto al formador la ficha de diccionario de clasificación eléctrica (`E_Servicio`, `E_Tipo_Red`, `E_Tablero_Origen`, `E_Circuito`, `E_Fase`) en el modelo de práctica. |
| **3. Microexposición y demo: Filtros de color/patrón y Browser Organization** | 01:05 – 01:40 (35 min) | Configura en directo `View Filters` combinando color + patrón de línea, explica la jerarquía de orden, demuestra la organización del Navegador por `E_Subdisciplina` y crea una tabla QA. | Configura en paralelo la prioridad de filtros dentro de sus plantillas y observa cómo los colores y trazos distinguen Fuerza Normal, SAI, Alumbrado Normal y Emergencia. |
| **Descanso activo** | 01:40 – 01:55 (15 min) | Resuelve dudas puntuales en el chat/aula y verifica que todos disponen del paquete del caso *Nave Logística EbroSur*. | Descansa de pantalla y prepara los archivos de la siguiente fase práctica. |
| **4. Actividad 2: Aplicación técnica en laboratorio BIM** | 01:55 – 02:35 (40 min) | Supervisa la vinculación del archivo de parámetros compartidos `.txt`, revisa que los `Conduit Fittings` hereden clasificación y orienta en la depuración con tablas QA. | Vincula parámetros compartidos a tubos, uniones, bandejas, tomas y luminarias; asigna circuitos a dispositivos huérfanos; aplica 4 filtros de color/patrón en planta y 3D. |
| **5. Estudio de caso y transferencia (Actividad 3): Nave Logística EbroSur** | 02:35 – 03:20 (45 min) | Presenta el caso *EbroSur*, modera equipos, supervisa el uso opcional responsable de IA para estructurar el diccionario de parámetros y valida la organización del Navegador. | Sanea el modelo caótico del caso: organiza las 64 vistas con `Browser Organization`, clasifica tubos y luminarias normales/emergencia, y limpia incidencias con una tabla QA. |
| **6. Discusión guiada y contraste técnico** | 03:20 – 03:45 (25 min) | Proyecta resultados de 2–3 equipos, compara decisiones de codificación (B/N vs. color) y subraya la frontera entre código visual BIM y código físico de conductores. | Presenta su esquema del Navegador, justifica sus códigos de servicio y analiza errores detectados en tablas QA o en sugerencias revisadas de IA. |
| **7. Síntesis, evaluación sumativa y cierre** | 03:45 – 04:00 (15 min) | Resume las claves del tema, lanza el cuestionario corto de salida y enlaza con el Tema 3 (Escalas y niveles de detalle). | Realiza el test sumativo (6 ítems), completa la autoevaluación y entrega su modelo y diccionario de parámetros en el campus. |

**Total cronometrado:** 25 + 40 + 35 + 15 + 40 + 45 + 25 + 15 = **240 minutos (4 horas)**.

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Autopsia del Navegador de sistemas (`F9`) y tubos anónimos

- **Nombre:** Autopsia del Navegador de sistemas (`F9`) y tubos anónimos
- **Objetivo:** Comprobar de primera mano cómo gestiona Revit MEP los circuitos lógicos frente a la ausencia de sistema nativo en tubos 3D y bandejas.
- **Instrucciones para el alumnado:**
  1. Abre el archivo ligero de diagnóstico `Diagnostico_B4_T2.rvt` y pulsa `F9` para desplegar el *System Browser*.
  2. Localiza cuántos aparatos en `Unassigned` no tienen circuito asignado y selecciona después un tramo de tubo conectado al cuadro `CS-01`: observa qué parámetros aparecen en la paleta *Properties*.
  3. Responde en 5 minutos a las 3 preguntas rápidas de diagnóstico: *(a) ¿Aparece el tubo dentro del System Browser?; (b) ¿Qué parámetro nativo permite clasificar el tubo?; (c) ¿Qué le ocurre a un codo si solo rellenas el tramo recto?*
- **Materiales necesarios:** Archivo `Diagnostico_B4_T2.rvt` (con 1 cuadro, 6 tomas, 4 luminarias y 2 recorridos de tubo) y formulario breve en aula.
- **Tiempo estimado:** 15 minutos (integrados en la Fase 1).
- **Rol del formador:** Guiar la exploración rápida sin adelantar la respuesta, recoger las respuestas y mostrar en pantalla la ausencia real de sistemas en `Conduits`.
- **Producto o entregable esperado:** Registro individual de las 3 respuestas en el cuestionario de activación.
- **Criterios de éxito:** El alumnado identifica con precisión las tomas en `Unassigned`, confirma que los tubos no forman parte de *Electrical Systems* nativos y señala `Service Type` / parámetros compartidos como vía de solución.

---

### Actividad 2 (Aplicación técnica): Parametrización compartida y filtros multicolor/patrón sobre red eléctrica mixta

- **Nombre:** Parametrización compartida y filtros multicolor/patrón sobre red eléctrica mixta
- **Objetivo:** Aplicar un archivo de parámetros compartidos `.txt`, asignar circuitos faltantes y construir filtros de vista robustos que diferencien fuerza normal, fuerza SAI, alumbrado normal y alumbrado de emergencia tanto en planta como en 3D.
- **Instrucciones para el alumnado:**
  1. Abre el modelo de laboratorio `Lab_Clasificacion_B4_T2.rvt`. Carga o crea el archivo de parámetros compartidos con `E_Servicio`, `E_Tipo_Red`, `E_Tablero_Origen` y `E_Fase` como parámetros de **ejemplar** aplicados a `Electrical Equipment`, `Electrical Fixtures`, `Lighting Fixtures`, `Lighting Devices`, `Conduits`, `Conduit Fittings`, `Cable Trays` y `Cable Tray Fittings`.
  2. Conecta las 4 luminarias de emergencia huérfanas al cuadro `CS-EMERGENCIA` y rellena `E_Servicio = ALU-EME` en las luminarias y en toda su red de tubos y codos. Haz lo mismo para `FUE-NOR`, `FUE-SAI` y `ALU-NOR`.
  3. Configura 4 *View Filters* dentro de la plantilla `E_DOC_Canalizaciones` y en la vista 3D de coordinación combinando color distinto y patrón de línea distinto (`Solid`, `Dash`, `Center`, `Dash Dot`).
  4. Crea una tabla `QA_Control_Tubos` que liste `Conduits` y `Conduit Fittings` mostrando `E_Servicio` y `E_Tablero_Origen` con *Conditional Formatting* en rojo cuando estén vacíos.
- **Materiales necesarios:** `Lab_Clasificacion_B4_T2.rvt`, guía de códigos normalizados de la Sección 8 y archivo base `SP_Electrico_Aula.txt`.
- **Tiempo estimado:** 40 minutos (Fase 4).
- **Rol del formador:** Revisar que el alumnado no cree parámetros de proyecto en lugar de compartidos, verificar que los codos están clasificados junto a los tubos y orientar el orden de prioridad en *Filters*.
- **Producto o entregable esperado:** Modelo `.rvt` con 0 celdas rojas en `QA_Control_Tubos`, filtros activos en planta y 3D, y todas las luminarias conectadas en el *System Browser*.
- **Criterios de éxito:** El 100 % de los tramos y uniones aparecen clasificados en la tabla QA sin celdas vacías, y la vista en escala de grises sigue diferenciando los 4 sistemas gracias a los patrones de línea.

---

### Actividad 3 (Transferencia a proyecto real): Reordenamiento integral del Navegador y diccionario de datos en *Nave Logística EbroSur*

- **Nombre:** Reordenamiento integral del Navegador y diccionario de datos en *Nave Logística EbroSur*
- **Objetivo:** Transferir la clasificación paramétrica de sistemas y la organización del Navegador de Proyectos a un proyecto industrial desestructurado, validando opcionalmente un diccionario de parámetros generado con asistencia segura de IA.
- **Instrucciones para el alumnado:**
  1. Trabajando en equipos de 3 personas (o parejas) sobre el caso práctico *Nave Logística EbroSur*, diseñad el **Diccionario de Parámetros Eléctricos** del proyecto y la jerarquía de **Browser Organization** (`Disciplina -> E_Uso_Vista -> E_Subdisciplina`).
  2. *(Apoyo opcional con IA)*: Solicitad a ChatGPT o Claude, mediante un prompt completamente anónimo (sin mencionar «EbroSur» ni datos reales), una tabla de diccionario de parámetros para clasificar un almacén industrial con 3 redes (Fuerza, Alumbrado Normal, Alumbrado Emergencia) + organización del Navegador. Auditad la respuesta señalando al menos 1 parámetro o función que deba corregirse o verificarse para ajustarse a Revit MEP real.
  3. Implementad en el modelo del caso los parámetros compartidos en vistas (`E_Uso_Vista`, `E_Subdisciplina`) y elementos, reclasificando las vistas dispersas en las ramas `01_TRABAJO` y `02_DOCUMENTACION`.
  4. Generad una tabla `QA_Dispositivos_Sin_Circuito` y dejad documentado el listado de incidencias resueltas.
- **Materiales necesarios:** Archivo `Caso_EbroSur_B4_T2.rvt`, plantilla de Diccionario de Parámetros (Sección 8) y acceso opcional a asistente IA en navegador.
- **Tiempo estimado:** 45 minutos (Fase 5).
- **Rol del formador:** Actuar como BIM Manager revisor en cada equipo, exigir evidencia de verificación de cualquier propuesta generada por IA y comprobar que las vistas ordenadas respetan las View Templates del Tema 1.
- **Producto o entregable esperado:** Diccionario de Parámetros validado + modelo `.rvt` del caso con Navegador de Proyectos ordenado y tablas QA depuradas.
- **Criterios de éxito:** Las 64 vistas quedan agrupadas sin ambigüedad en `01_TRABAJO` / `02_DOCUMENTACION` y subdisciplinas eléctricas; el diccionario separa correctamente parámetros nativos vs. compartidos; las salidas de IA empleadas aparecen contrastadas y corregidas por el equipo.

---

## 6. Caso práctico

### Caso práctico: Caos de sistemas y Navegador desbordado en la Nave Logística EbroSur

#### Contexto empresarial
**ElectroBIM Norte S.L.** asume la asistencia BIM de última fase para la **Nave Logística EbroSur**, una plataforma de distribución de **4.800 m² de zona de almacenamiento (altura libre bajo cercha `9,50 m`)** y **600 m² de oficinas en dos plantas**. El modelo eléctrico previo fue iniciado por una subcontrata que entregó el archivo `.rvt` sin Plan de Ejecución BIM (BEP) interno. Dentro de tres días comienza el replanteo de las bandejas principales y los recorridos de tubo galvanizado en el almacén.

#### Situación o problema
Al abrir el modelo `EbroSur_ELE_v03.rvt`, el coordinador eléctrico encuentra un grave bloqueo documental:
1. Existen **64 vistas** acumuladas en el Navegador de Proyectos sin orden ni subdisciplinas (`Floor Plan: Nivel Almacén - Copy 4`, `3D View 9`, `Alumbrado nuevo definitivo (2)`), impidiendo saber qué vista va a plano y cuál era un borrador de trabajo.
2. Se han modelado **450 metros de tubo metálico (`Ø25 mm` a `Ø63 mm`)**, **120 luminarias industriales de gran altura** (96 de alumbrado normal y 24 de emergencia/balizamiento), **85 tomas de corriente** (`16 A 2P+T` en oficinas y `32 A 3P+N+T` trifásicas en muelles de carga) y **2 subcuadros (`CS-ALM` y `CS-OFI`)**. Sin embargo, todos los tubos y codos comparten un único aspecto gris continuo sin `Service Type` ni parámetro de red o tablero de origen.
3. De las 24 luminarias de emergencia, **11 aparecen como dispositivos huérfanos (`Unassigned`)** en el *System Browser*, y 6 tomas trifásicas de los muelles fueron configuradas en su familia con conector monofásico de `230 V` en lugar de trifásico `400 V`, falseando el resumen de cargas del cuadro `CS-ALM`. *(Nota: valores de tensión ilustrativos para red europea; verificar tensión nominal del país).*
4. En las vistas en planta y 3D, resulta imposible distinguir si un recorrido aéreo a `+8,20 m` pertenece a alumbrado normal, alumbrado de emergencia o fuerza trifásica para muelles de carga.

#### Datos disponibles

| Concepto / Inventario del modelo | Estado encontrado en `EbroSur_ELE_v03.rvt` |
|---|---|
| **Superficie y zonas** | Almacén `4.800 m²` (altura `+9,50 m`) + Oficinas `600 m²` (`PB ±0,00 m` y `P1 +3,40 m`) |
| **Vistas existentes** | `64` vistas mezcladas bajo `Electrical -> Floor Plans / 3D Views` sin subdisciplina ni prefijo |
| **Cuadros eléctricos** | `CGBT-NAVE`, `CS-ALM` (Almacén y muelles) y `CS-OFI` (Oficinas) |
| **Luminarias modeladas** | `96` campanas LED `150 W` normales + `24` bloques/luminarias emergencia (`11` sin asignar a circuito) |
| **Tomacorrientes modelados** | `65` tomas `16 A` (oficinas) + `20` tomas `32 A 3F+N+PE` en muelles (`6` mal configuradas a `230 V`) |
| **Canalizaciones 3D** | `450 m` de tubos `Ø25–Ø63 mm` + `180` codos/uniones; `Service Type = <vacío>` en el `100 %` |
| **Parámetros compartidos** | Ninguno creado actualmente en el modelo |

#### Preguntas de análisis
1. ¿Qué riesgos reales de montaje en obra y de seguridad genera imprimir planos de la nave donde las 24 luminarias de emergencia y sus tubos son visualmente idénticos a los del alumbrado normal?
2. ¿Por qué no basta con rellenar el tablero `CS-ALM` manualmente en un parámetro de texto de las 6 tomas de `32 A` si su conector interno está configurado a `230 V` en vez de `400 V`?
3. ¿Qué estructura mínima de parámetros compartidos (en elementos y en vistas) permite ordenar simultáneamente las 64 vistas del Navegador y los 450 m de tubos + 180 uniones?
4. ¿Cómo garantizarías mediante tablas QA que no queda ni una sola luminaria de emergencia sin circuito ni un solo codo sin clasificar antes de emitir los planos en 72 horas?

#### Tarea a realizar
En equipos de 3 personas (45 minutos en la Fase 5), ejecutad el rescate técnico del modelo `EbroSur`:
1. Definid el **Diccionario de Parámetros Compartidos** (`E_Servicio`, `E_Tipo_Red`, `E_Tablero_Origen`, `E_Fase`, `E_Uso_Vista`, `E_Subdisciplina`), justificando en cada caso si es de *Ejemplar* o *Tipo* y a qué categorías aplica.
2. Diseñad la **Configuración de `Browser Organization`** para clasificar las 64 vistas en `01_TRABAJO`, `02_DOCUMENTACION` y `03_QA_AUDITORIA`, agrupadas por subdisciplina (`01_Fuerza`, `02_Alumbrado`, `03_Canalizaciones_3D`, `04_Acometidas_PAT`).
3. Proponed la **Tabla de `View Filters`** (código, color RGB y patrón de línea) para diferenciar en planta y 3D al menos `FUE-NOR`, `FUE-3F-MUELLES`, `ALU-NOR`, `ALU-EME` y `ACO-BT`, y ejecutad la depuración en las tablas QA sobre el archivo del caso.

#### Posibles soluciones o criterios de análisis
Un planteamiento completo del equipo incorporará:
- **Saneamiento eléctrico base en familias/conectores:** Corregir el parámetro de tensión/polos del conector en las 6 tomas de muelle `32 A` (`400 V`, `3 polos` — verificando tensión real del proyecto y cálculo de protecciones externas) y asignar las 11 luminarias de emergencia huérfanas al circuito correspondiente en `CS-ALM`, confirmando `0` elementos en `Unassigned` dentro de `F9`.
- **Clasificación unificada de tubos y accesorios:** Aplicar el archivo `.txt` de parámetros compartidos de **ejemplar** sobre `Conduits`, `Conduit Fittings`, `Cable Trays` y aparatos, utilizando selección en cadena (`Tab`) o tablas de planificación por tramo para asignar `E_Servicio` (`ALU-EME`, `ALU-NOR`, `FUE-NOR`, `FUE-3F`, `ACO-BT`), `E_Tipo_Red` (`Normal` / `Emergencia`) y `E_Tablero_Origen` (`CS-ALM` / `CS-OFI` / `CGBT-NAVE`) al `100 %` de tramos rectos y sus **180 uniones**.
- **Filtros resilientes en color y blanco/negro:** Definir filtros combinados de color y patrón de línea (`ALU-EME` en rojo con patrón *Center/Dash-Dot* y prioridad superior en la pila de filtros; `FUE-3F` con trazo doble/grueso; `ALU-NOR` con trazo medio; `FUE-NOR` continuo), integrados en las View Templates heredadas del Tema 1.
- **Reorganización del Navegador de Proyectos:** Crear el esquema `00_Elec_Estandar` en *Browser Organization* agrupando por `Discipline` -> `E_Uso_Vista` -> `E_Subdisciplina`, identificando las vistas sobrantes duplicadas (`- Copy 4`) para depurarlas de forma controlada tras verificar que no están insertadas en láminas.
- **Frontera normativa explícita:** Recordar en el informe de entrega que corregir la tensión en el conector BIM y clasificar visualmente los tubos de emergencia **no sustituye** la comprobación reglamentaria de secciones, caídas de tensión en `9,50 m` de altura + recorridos largos de nave, ni la autonomía e iluminancia mínima de evacuación en DIALux según el reglamento aplicable (p. ej. REBT ITC-BT-28 y CTE DB-SUA en España, o normativa equivalente del país).

#### Preguntas de reflexión final
- ¿Cuánto tiempo real ahorra en una obra de `4.800 m²` una tabla QA frente a revisar 64 vistas una a una haciendo zoom?
- Si decidieras generar con ChatGPT el guion de nomenclatura para las 64 vistas de *EbroSur*, ¿qué información anonimizarías obligatoriamente antes de escribir el prompt?

---

## 7. Evaluación

### Evaluación diagnóstica
- **Instrumento:** Actividad 1 (*Autopsia del Navegador de sistemas `F9` y tubos anónimos*) mediante respuesta a 3 preguntas técnicas al inicio de la sesión.
- **Propósito:** Comprobar si el alumnado comprende la diferencia entre circuito lógico y tubo físico 3D antes de abordar parámetros compartidos. Sin calificación numérica.

### Evaluación formativa
- **Seguimiento práctico en laboratorio (Actividad 2) y tutoría de equipos en el caso *EbroSur* (Actividad 3):** Revisión directa en pantalla de la carga correcta del archivo `.txt` de parámetros compartidos, clasificación efectiva de `Conduit Fittings`, ausencia de elementos en `Unassigned` (`F9`) y funcionamiento de filtros tanto en vista 3D como en planta.

### Evaluación sumativa
Se compone de dos entregas evaluables:
1. **Cuestionario técnico corto (6 preguntas, 10 minutos, 30 % de la calificación):** Evalúa la diferencia entre parámetros compartidos/de proyecto/integrados, instancia vs. tipo, limitaciones nativas de `Conduits`, prioridad de *View Filters* y separación entre código BIM y código físico de conductores.
2. **Entregable del Caso *Nave Logística EbroSur* + Diccionario de Parámetros (70 % de la calificación):** Modelo `.rvt` saneado (o exportación de capturas de Navegador + tablas QA + filtros) junto con la tabla de Diccionario de Parámetros validada, evaluados según la siguiente rúbrica.

### Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
|---|---|---|---|---|
| **1. Diseño de parámetros compartidos y clasificación** | Crea parámetros locales de texto libre inconsistentes o usa parámetros de proyecto que no permiten etiquetado. | Crea parámetros compartidos básicos, pero confunde instancia/tipo o deja categorías clave (como `Conduit Fittings`) sin vincular. | Define un archivo `.txt` coherente con parámetros compartidos de ejemplar (`E_Servicio`, `E_Tipo_Red`, `E_Tablero_Origen`, `E_Fase`) ligados a todas las categorías MEP eléctricas. | Optimiza el diccionario evitando duplicar parámetros nativos útiles (`Panel`, `Circuit Number`), documentando códigos cerrados y reglas de relleno en una guía reutilizable `.rte`. |
| **2. Circuitado y saneamiento en *System Browser* y tablas QA** | Deja dispositivos `Unassigned` y numerosos tramos o uniones de tubo sin servicio ni tablero de origen. | Conecta los dispositivos principales, pero mantiene tubos o accesorios sin clasificar o ignora errores de tensión en conectores. | Clasifica el `100 %` de los tubos, accesorios y equipos, conecta luminarias huérfanas y valida el modelo mediante tablas QA con formato condicional. | Implementa además controles de coherencia entre fases/circuitos de conectores y las tablas de auditoría, documentando la verificación frente al cálculo externo. |
| **3. Filtros gráficos (color + patrón) y coherencia 3D** | Aplica colores manuales por elemento (`Override in View`) o filtros que fallan al imprimir en blanco y negro. | Configura *View Filters* por color, pero omite patrones de línea diferenciados o tiene errores de prioridad en la pila de filtros. | Implementa filtros ordenados correctamente que combinan color y patrón de línea para distinguir normal, emergencia/SAI, fuerza y acometida en 3D y planta. | Integra los filtros directamente dentro de las View Templates del Tema 1 y aclara explícitamente la diferencia respecto al código reglamentario de aislamiento de cables. |
| **4. Organización del Navegador y uso responsable de IA** | Mantiene las vistas desordenadas sin distinguir trabajo de entrega o acepta salidas erróneas de IA sin verificar. | Crea una agrupación parcial del Navegador, pero mezcla vistas temporales con vistas en plano o no audita completamente las sugerencias de IA. | Configura `Browser Organization` por disciplina, uso de vista (`01_TRABAJO`/`02_DOCUMENTACION`) y `E_Subdisciplina`, ordenando todo el proyecto. | Si apoya el diccionario con IA, anonimiza completamente el proyecto, detecta parámetros inventados por el LLM y registra la validación técnica en Revit. |

### Actividad de autoevaluación
Al cerrar la clase, cada participante responde por escrito a tres preguntas de reflexión práctica:
1. *¿Qué diferencias concretas detecto hoy entre clasificar circuitos eléctricos nativos y clasificar recorridos físicos 3D de tubos/bandejas en Revit MEP?*
2. *En mi entorno habitual de trabajo, ¿qué parámetro compartido único aportaría mayor claridad inmediata si lo implantara desde el próximo proyecto?*
3. *¿Cómo garantizo que un compañero nuevo encuentre en menos de 15 segundos cualquier plano de alumbrado o de fuerza en el Navegador de Proyectos?*

---

## 8. Materiales y recursos

### Guion estructurado de diapositivas (Slide 1 a Slide 8)

| Diapositiva | Título | Contenido clave y visual | Notas para el formador |
|---|---|---|---|
| **Slide 1** | Portada: Tema 2. Clasificación de sistemas y modelado 3D de tubos | Título, posición (Bloque 4, Tema 2/8 · 23/50), objetivos y aviso de límites normativos/técnicos. | Enlazar con las plantillas de vista del Tema 1 como «contenedor» donde viven los filtros de hoy. |
| **Slide 2** | El mito del tubo inteligente: Circuitos nativos vs. `Conduits` | Diagrama comparativo: conector de luminaria/enchufe (alimenta `F9`) frente a tubo 3D (`Service Type`, sin sistema eléctrico automático). | Conducir aquí la Actividad 1 de autopsia sobre `Diagnostico_B4_T2.rvt`. |
| **Slide 3** | Parámetros compartidos (`.txt`), de proyecto e integrados | Esquema visual de flujo: `.txt` con `GUID` -> Modelo (Ejemplar/Tipo) -> Filtros + Tablas + Etiquetas (Tema 4). | Remarcar por qué nunca se edita a mano un `GUID` ni se usan parámetros de proyecto para etiquetar. |
| **Slide 4** | Diccionario estándar de clasificación eléctrica | Tabla de 5 parámetros clave (`E_Servicio`, `E_Tipo_Red`, `E_Tablero_Origen`, `E_Circuito`, `E_Fase`) y códigos breves normalizados. | Recordar verificar tensiones nominales (`230/400 V` vs. `120/208 V`) según el país del proyecto. |
| **Slide 5** | Filtros gráficos: Color + Patrón de línea y jerarquía | Captura de pantalla dividida: vista 3D a color vs. plano monocromo en PDF manteniendo diferenciación por trazos. | Advertir explícitamente la diferencia entre color de filtro BIM y código normativo de cables. |
| **Slide 6** | Organización del Navegador de Proyectos (`Browser Organization`) | Comparativa «Antes» (64 vistas caóticas) vs. «Después» (árbol ordenado por Disciplina -> Uso -> Subdisciplina). | Enseñar el paso exacto `Manage -> Project Parameters` sobre categoría `Views`. |
| **Slide 7** | Tablas QA y apoyo seguro con IA | Captura de `QA_Control_Tubos` con celdas rojas de *Conditional Formatting* + ejemplo de prompt anónimo auditado frente a alucinaciones de IA. | Mostrar un ejemplo real donde la IA sugiere un parámetro inexistente en Revit y cómo descartarlo. |
| **Slide 8** | Caso *Nave Logística EbroSur* y puente al Tema 3 | Resumen de inventario de *EbroSur*, entregables de la Actividad 3, evaluación y adelanto del Tema 3 (Escalas y niveles de detalle). | Recordar fecha de entrega del modelo saneado y diccionario validado. |

### Ficha de trabajo del alumnado
Documento práctico (2 páginas) que incluye:
1. **Árbol de decisión de parámetros:** Cuándo usar parámetro nativo (`Panel`, `Circuit Number`, `Service Type`), cuándo parámetro compartido de **Ejemplar** y cuándo parámetro de **Tipo**.
2. **Matriz en blanco de filtros gráficos** para rellenar código de servicio, categorías incluidas, color RGB, patrón de línea y orden de prioridad.
3. **Checklist de configuración de `Browser Organization`** y de tablas QA (`Itemize every instance`, filtro por vacío, *Conditional Formatting*).

### Plantilla técnica práctica: Diccionario de Parámetros Compartidos y Esquema de Clasificación Eléctrica

*(Plantilla editable para implantar en archivo `.rte` corporativo; verificar nombres y unidades según BEP del proyecto)*:

| Parámetro | Archivo origen | Categorías vinculadas en Revit | Agrupación | Ejemplar / Tipo | Valores permitidos / Formato |
|---|---|---|---|---|---|
| `Service Type` | Nativo Revit | `Conduits`, `Conduit Fittings`, `Cable Trays`, `Cable Tray Fittings` | Mechanical / Electrical | Ejemplar | `FUE-NOR`, `FUE-SAI`, `ALU-NOR`, `ALU-EME`, `ACO-BT` |
| `E_Servicio` | Compartido (`.txt`) | Todos los equipos, mecanismos, luminarias y canalizaciones eléctricas | Datos / Electrical | Ejemplar | Código corto igual al anterior (unifica aparatos + tubos) |
| `E_Tipo_Red` | Compartido (`.txt`) | Equipos, luminarias, tomas y canalizaciones eléctricas | Datos / Electrical | Ejemplar | `Normal` · `Emergencia-GE` · `SAI-UPS` |
| `E_Tablero_Origen` | Compartido (`.txt`) | Tubos, bandejas y cajas (en tomas/luminarias leer `Panel` nativo) | Electrical | Ejemplar | Código de cuadro (ej. `CGBT-01`, `CS-P1-NOR`) |
| `E_Fase` | Compartido (`.txt`) | Circuitos / tomas / luminarias según protocolo de proyecto | Electrical | Ejemplar | `L1`, `L2`, `L3`, `3F` (validar en cálculo eléctrico) |
| `E_Subdisciplina` | Compartido (`.txt`) | `Views` (Vistas) y opcionalmente `Sheets` | Identity Data | Ejemplar | `01_Fuerza`, `02_Alumbrado`, `03_Canalizaciones_3D`, `04_Acometidas_PAT` |
| `E_Uso_Vista` | Compartido (`.txt`) | `Views` (Vistas) | Identity Data | Ejemplar | `01_TRABAJO`, `02_DOCUMENTACION`, `03_QA_AUDITORIA` |

### Lecturas y recursos recomendados
> **Advertencia de validación obligatoria:** Antes de adoptar guías, archivos `.txt` de parámetros compartidos o referencias normativas en un proyecto o sesión docente, es imprescindible **validar la versión exacta de Revit MEP utilizada, la integridad de enlaces externos y la normativa vigente en el país de aplicación**.
- Ayuda oficial de **Autodesk Revit — Shared Parameters, View Filters & Browser Organization** (correspondiente a la versión de Revit MEP empleada en el curso; *comprobar menús vigentes por año de versión*).
- Guías públicas de estandarización BIM (p. ej., **Guía uBIM / buildingSMART** o **BIMForum** sobre clasificación y propiedades de modelos eléctricos MEP; *validar edición vigente y compatibilidad con el BEP del cliente*).
- Documentación técnica de referencia normativa sobre identificación de conductores y circuitos (p. ej., **HD 308 S2 / REBT en España** o **NFPA 70 / NEC** según jurisdicción; *ejemplo ilustrativo exclusivo para diferenciar color gráfico BIM de código físico en obra*).
- Artículos o vídeos técnicos sobre auditoría de parámetros MEP mediante tablas de planificación con formato condicional (*verificar fuente, fecha y versión de Revit antes de proyectarlos*).

### Glosario de términos clave

| Término | Definición |
|---|---|
| **Parámetro compartido (*Shared Parameter*)** | Definición de parámetro almacenada en un archivo `.txt` externo mediante un identificador único (`GUID`), indispensable para leer y etiquetar el mismo atributo en múltiples familias, tablas y vistas. |
| **Parámetro de proyecto (*Project Parameter*)** | Atributo personalizado creado únicamente dentro de un archivo `.rvt`; sirve para filtrar y planificar en tablas, pero no puede vincularse dentro de etiquetas de anotación (`.rfa`). |
| **`Service Type`** | Parámetro nativo de texto disponible en tubos (`Conduits`) y bandejas (`Cable Trays`) en Revit MEP para clasificar su servicio ante la ausencia de sistemas eléctricos lógicos automáticos en esas categorías. |
| **Navegador de sistemas (*System Browser*)** | Ventana auxiliar de Revit (`F9`) que organiza jerárquicamente tableros, circuitos lógicos y elementos desconectados (`Unassigned`) de las categorías eléctricas conectables. |
| **Filtro de vista (*View Filter*)** | Regla lógica parametrizada dentro de una vista o plantilla que modifica automáticamente color, grosor, patrón de línea o visibilidad de los elementos que cumplen condiciones sobre sus parámetros. |
| **Organización del Navegador (*Browser Organization*)** | Regla de agrupación y ordenación del árbol de vistas y planos en Revit basada en parámetros nativos o compartidos como disciplina, uso de vista y subdisciplina. |
| **Tabla de auditoría (*QA Schedule*)** | Tabla de planificación diseñada para control de calidad interno que detecta parámetros vacíos, dispositivos sin circuito o incoherencias mediante filtros y formato condicional. |

---

## 9. Adaptaciones

### Sesión presencial
- Proyectar en paralelo el modelo de *Diagnostico_B4_T2.rvt* y entregar una hoja impresa con la lista de 7 parámetros para que el alumnado marque con rotulador cuáles corresponden a Ejemplar vs. Tipo antes de abrir el editor en Revit.
- Realizar en directo la creación del archivo `.txt` de parámetros compartidos y distribuir una copia controlada vía carpeta compartida local para que todos prueben la coherencia de `GUID`.
- Trabajar el caso *Nave Logística EbroSur* en mesas de 3 personas fomentando el debate técnico sobre patrones de impresión en blanco y negro.

### Sesión online síncrona
- Compartir el archivo `SP_Electrico_Aula.txt` mediante el aula virtual al inicio de la Fase 2 para evitar pérdidas de tiempo tecleando manualmente cada parámetro durante el directo.
- Usar salas pequeñas (*breakout rooms*) de 3 participantes en la Actividad 3 (*EbroSur*), pidiendo a cada grupo que suba una captura de su *Project Browser* reordenado y de su tabla `QA_Control_Tubos` al tablero colaborativo para comentarlos en la Fase 6.
- Ejecutar una encuesta rápida en chat para contrastar qué errores de «alucinación» detectó cada grupo si utilizó IA para redactar su diccionario.

### Sesión asíncrona
- Dividir la demostración en 4 vídeos cortos (10–12 min): *(1) Limitación nativa de Conduits y uso de `F9`*, *(2) Creación de `.txt` de parámetros compartidos*, *(3) Filtros de color + patrón en planta y 3D*, *(4) Browser Organization y tablas QA*.
- Entregar un paquete comprimido con `Diagnostico_B4_T2.rvt`, `Lab_Clasificacion_B4_T2.rvt` y `Caso_EbroSur_B4_T2.rvt` acompañados de guías de comprobación paso a paso.
- Evaluar mediante la subida del modelo *EbroSur* saneado y una tabla en foro donde el alumno justifica sus 4 filtros gráficos y verifica un ejemplo de prompt anónimo con sus correcciones humanas.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Afianza el modelado tridimensional de tomacorrientes, luminarias, tubos, codos y accesorios del **Bloque 3 (Modelado 3D – Revit MEP eléctricas)** y da contenido semántico a las **plantillas de vista** construidas en el **Tema 1 del Bloque 4**.
- **Competencias que desarrolla:** Estandarización de datos BIM mediante parámetros compartidos, clasificación funcional de sistemas eléctricos y canalizaciones 3D, diseño de filtros gráficos resilientes a impresión monocromo, organización del Navegador de Proyectos y auditoría cuantitativa de integridad de modelos.
- **Conexión dentro del programa (6 módulos / 50 temas):**
  - **Tema anterior:** Continúa directamente el **Tema 1 del Bloque 4: Plantillas de visualización para diversos tipos de planos** (Tema 22 de 50), incorporando ahora la capa de datos y filtros de sistema que alimentan a esas plantillas.
  - **Tema posterior:** Prepara la transición hacia el **Tema 3 del Bloque 4: Escalas y niveles de detalle** (Tema 24 de 50), donde el alumnado decidirá cómo mostrar estos sistemas ya clasificados en representación simbólica de línea simple o geometría real 3D doble línea según la escala de cada plano (`1:100`, `1:50`, `1:20`) y el alcance LOD/LOI.
- **Evidencia de aprendizaje:**
  1. Archivo `.rvt` del caso *Nave Logística EbroSur* saneado con el `100 %` de dispositivos circuitados, tubos/accesorios clasificados y Navegador de Proyectos organizado por disciplina, uso y subdisciplina.
  2. **Diccionario de Parámetros Compartidos y Matriz de Filtros** validados (junto con el registro de verificación humana en caso de uso de IA).
  3. Cuestionario sumativo y autoevaluación registrados en la plataforma.

---

## Siguientes pasos para el formador

1. **Comprobar los 3 archivos `.rvt` antes de la sesión:** Validar que `Diagnostico_B4_T2.rvt`, `Lab_Clasificacion_B4_T2.rvt` y `Caso_EbroSur_B4_T2.rvt` conservan exactamente las 11 luminarias huérfanas, las 6 tomas con tensión errónea y las 64 vistas desordenadas descritas en la guía.
2. **Verificar el archivo `.txt` de parámetros compartidos de aula:** Confirmar que no existen duplicados de nombres ni parámetros con `GUID` conflictivos respecto a la plantilla base del Tema 1.
3. **Probar una impresión PDF monocromo de demostración:** Tener preparada una hoja PDF en escala de grises para demostrar visualmente por qué un filtro basado solo en colores falla frente a un filtro que combina color y patrón de línea.
4. **Revisar la guía de uso seguro de IA:** Recordar al alumnado antes de la Actividad 3 la prohibición de introducir nombres reales de clientes, direcciones o planos confidenciales en asistentes externos.
5. **Preparar el puente hacia el Tema 3:** Cerrar mostrando un tubo clasificado de `Ø32 mm` en nivel de detalle *Medio* (línea simple) frente a *Alto* (doble línea 3D) como anticipo directo de la siguiente sesión sobre escalas y niveles de detalle.
