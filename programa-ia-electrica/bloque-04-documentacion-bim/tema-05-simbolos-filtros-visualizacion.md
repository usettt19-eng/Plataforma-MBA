# Tema 5. Símbolos y filtros de visualización

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Tema 5. Símbolos y filtros de visualización |
| **Bloque y posición dentro del programa** | Bloque 4: Documentación BIM — Tema 5 de 8 (Tema 26 de 50 en el programa de 6 módulos) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Dominio de plantillas de visualización, clasificación de sistemas MEP, escalas, niveles de detalle y etiquetado básico en Revit MEP (Bloque 4, Temas 1 a 4), así como modelado de componentes eléctricos y canalizaciones (Bloque 3) |
| **Resultado general de aprendizaje** | Configurar familias de símbolos de anotación eléctrica anidados en componentes 3D, construir leyendas de simbología consistentes y diseñar filtros basados en reglas para resaltar circuitos críticos, tensión nominal, sistemas de emergencia y elementos sin asignar en planos BIM |

---

## 2. Objetivos de aprendizaje

Al finalizar este tema, el alumnado será capaz de:

1. **Identificar** la estructura y las propiedades de las familias de anotación genérica anidadas dentro de componentes eléctricos tridimensionales en Revit MEP para garantizar su legibilidad a distintas escalas de plano. *(Nivel de Bloom: Recordar)*
2. **Diferenciar** la función documental de los símbolos 2D normativos, las leyendas vinculadas al proyecto y los filtros basados en reglas frente a la validación eléctrica reglamentaria y el cálculo fotométrico. *(Nivel de Bloom: Comprender)*
3. **Configurar** símbolos eléctricos anidados con control de visibilidad, orientación y desfase gráfico junto con filtros basados en reglas que clasifiquen circuitos por tensión, sistema normal/emergencia/SAI y estado de asignación. *(Nivel de Bloom: Aplicar)*
4. **Detectar** inconsistencias de documentación BIM —como símbolos ausentes en leyenda, solapamientos gráficos, conflictos de prioridad entre filtros o aparatos sin circuito asignado— mediante vistas de control de calidad. *(Nivel de Bloom: Analizar)*
5. **Evaluar** una propuesta de estandarización gráfica y asistencia mediante IA generativa (ChatGPT o Claude) comprobando de forma independiente los parámetros reales del modelo, la anonimización de datos y los requisitos normativos vigentes del proyecto. *(Nivel de Bloom: Evaluar)*

---

## 3. Contenidos esenciales

### 3.1. Familias de símbolos de anotación eléctrica anidados en componentes 3D

#### Explicación breve y clara
En un proyecto eléctrico BIM profesional, un mismo elemento (por ejemplo, una base de enchufe, un interruptor o una luminaria de emergencia) debe mostrarse como un volumen geométrico realista en vistas 3D y secciones, pero como un símbolo técnico convencional normalizado en planos de planta a escalas 1:50 o 1:100. Para lograr esa doble representación sin duplicar elementos en el modelo, Revit MEP permite anidar una familia de tipo *Generic Annotation* (anotación métrica independiente de la escala del modelo) dentro de la familia 3D hospedada o basada en cara (*Electrical Fixtures*, *Lighting Fixtures*, *Electrical Equipment*). De este modo, el símbolo impreso conserva siempre una altura constante en papel (por ejemplo, 3,0 mm), mantiene su orientación legible frente al lector del plano mediante *Maintain Annotation Orientation* y puede desplazarse gráficamente cuando varias cajas se agrupan en el mismo paramento sin mover la caja 3D real del muro.

#### Conceptos clave
- **Anidamiento 2D/3D (*Nested Annotation Family*):** Inserción de una familia de anotación escalable automáticamente según la vista dentro de una familia tridimensional para separar la geometría física del símbolo en planta.
- **Tamaño de impresión constante (*Scale-Independent Annotation*):** Propiedad por la cual una familia de anotación de 3,0 mm en el editor mide siempre 3,0 mm en el plano impreso, ocupando 150 mm equivalentes en el modelo a escala 1:50 o 300 mm a escala 1:100.
- **Control de visibilidad por nivel de detalle:** Configuración de la geometría 3D para mostrarse en vistas 3D, alzados y nivel *Fine* (Alto), mientras el símbolo 2D anidado se restringe a vistas en planta con nivel *Coarse* (Bajo) o *Medium* (Medio).
- **Parámetros de desfase simbólico (*Symbol Offset X/Y*):** Parámetros de instancia asociados a planos de referencia dentro de la familia anfitriona que permiten separar visualmente símbolos apilados en planta sin alterar las coordenadas reales del mecanismo ni su conexión eléctrica.

#### Definiciones necesarias
- **Familia de anotación genérica (*Generic Annotation*):** Tipo de familia 2D cuyo tamaño en el modelo varía de forma proporcional a la escala de la vista para mantener unas dimensiones físicas constantes en el plano final impreso.
- **Parámetro *Maintain Annotation Orientation*:** Propiedad de familia que fuerza al símbolo 2D anidado a rotar o permanecer paralelo al plano de vista en planta incluso cuando el componente 3D está montado verticalmente sobre un muro o pilar.
- **Subcategoría de anotación:** Subdivisión gráfica definida dentro de *Object Styles* que permite controlar por separado el grosor, color y patrón de las líneas de un símbolo eléctrico respecto al resto de anotaciones del proyecto.

#### Ejemplo práctico realista
En el diseño de un laboratorio de análisis clínicos, sobre un mismo tabique técnico coinciden en vertical y en un tramo de 250 mm de longitud tres cajas: una base de enchufe normal 2P+T de 16 A / 230 V (a +0,30 m), una base para red de alimentación ininterrumpida (SAI) 16 A / 230 V con discriminación de polo (a +1,10 m sobre encimera) y una toma doble de datos RJ45 (a +1,10 m). En planta a escala 1:100, un diámetro real de caja de 65 mm sería ilegible (0,65 mm impresos) y los símbolos estándar de 3,5 mm de diámetro (350 mm virtuales en el modelo) se superpondrían completamente. Al emplear familias con anotación anidada de 3,0 mm, habilitar *Maintain Annotation Orientation* y dotar al símbolo de un parámetro de instancia `Desfase_Simbolo_X` / `Desfase_Simbolo_Y`, el proyectista separa las tres representaciones en el plano 1:100 manteniéndolas legibles y unidas al punto real mediante una línea directriz corta, mientras la geometría 3D en coordinación MEP permanece en sus cotas exactas (+0,30 m y +1,10 m).

> *Nota obligatoria de verificación normativa:* La forma exacta de cada símbolo gráfico (por ejemplo, criterios derivados de normas como IEC 60617 o estándares nacionales aplicables) y las alturas mínimas o distancias de seguridad entre mecanismos y puntos de agua deben verificarse siempre conforme al país, reglamento eléctrico vigente (como el REBT en España o el NEC/NFPA 70 en Norteamérica, citados aquí únicamente como ejemplos ilustrativos) y criterio de la autoridad o cliente competente.

#### Errores frecuentes
- Dibujar el símbolo 2D con líneas de modelo (*Model Lines*) o líneas simbólicas fijas (*Symbolic Lines*) dentro de la familia 3D en lugar de anidar una *Generic Annotation*, provocando que el símbolo se vuelva minúsculo a escala 1:200 o gigante a escala 1:20.
- Activar el desplazamiento físico del componente 3D para «hacer hueco» en el plano de planta, destruyendo la coordinación con mobiliario, fontanería y mediciones de rozas en obra.
- Olvidar desmarcar la visibilidad de la geometría 3D en vistas de planta (*Coarse*/*Medium*), generando contornos superpuestos que emborronan el símbolo impreso.
- Utilizar rellenos sólidos oscuros en símbolos muy pequeños, haciendo que al imprimir a 1:100 la tinta se funda y resulte indistinguible una toma estándar de una toma de emergencia.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué una familia *Generic Annotation* anidada mantiene su legibilidad cuando cambiamos la escala de una planta de 1:50 a 1:100, a diferencia de unas *Symbolic Lines* dibujadas directamente en la familia 3D?
2. ¿Cómo se evita que dos mecanismos superpuestos en altura en un mismo muro se tapen en el plano de planta sin alterar sus coordenadas tridimensionales ni las tablas de planificación?
3. ¿Qué diferencia hay entre representar correctamente un símbolo de toma SAI en un plano BIM y demostrar que el circuito cumple con la caída de tensión y la selectividad de protecciones exigibles?

---

### 3.2. Leyendas de simbología consistentes y vinculadas al estándar gráfico del proyecto

#### Explicación breve y clara
Una leyenda de simbología eléctrica solo cumple su función contractual si refleja de forma exacta y sin ambigüedades los símbolos realmente empleados en los planos del proyecto. En proyectos mal coordinados, es habitual importar leyendas recicladas de CAD 2D con decenas de símbolos que no existen en obra o con gráficos distintos a los de las familias BIM cargadas. En Revit existen dos mecanismos principales: las *Legend Views* (vistas de leyenda reutilizables en múltiples láminas mediante arrastre directo) compuestas por *Legend Components*, anotaciones genéricas y texto descriptivo; y las vistas auxiliares o *Note Blocks* (tablas basadas en familias de anotación genérica) para auditar y listar de forma sistemática cada símbolo presente en el proyecto.

#### Conceptos clave
- **Vista de leyenda (*Legend View*):** Vista especial de Revit que, a diferencia de las vistas de planta o detalle, puede insertarse simultáneamente en tantas láminas de planos como sea necesario para mantener un cuadro de símbolos único.
- **Componente de leyenda (*Legend Component*):** Representación paramétrica extraída directamente de una familia cargada en el proyecto (indicando vista en planta, alzado frontal o lateral), aunque sujeta a limitaciones cuando el símbolo vive únicamente como anotación anidada orientada a plano.
- **Tabla *Note Block*:** Tabla de planificación que lee instancias de familias de anotación genérica (con parámetros como `Codigo_Simbolo`, `Descripcion_Tecnica`, `Altura_Montaje_Tipica`), útil para estandarizar descripciones y evitar errores tipográficos.
- **Correspondencia 1:1 plano–leyenda:** Regla de control de calidad por la cual todo símbolo dibujado en cualquier plano del proyecto aparece exactamente una vez en la leyenda, y ningún símbolo ausente en el proyecto permanece en la leyenda generando confusión en licitación o en obra.

#### Definiciones necesarias
- **Estándar gráfico del proyecto (*Project Graphic Standard*):** Conjunto documentado de convenciones simbólicas, grosores de trazo, abreviaturas y textos que unifica la interpretación de los planos entre todos los miembros del equipo y frente a la dirección de obra.
- **Símbolo huérfano:** Símbolo incluido en la leyenda del plano que no se corresponde con ningún elemento instalado en el proyecto, o bien símbolo utilizado en planos que carece de entrada explicativa en la leyenda.

#### Ejemplo práctico realista
En una nave logística de 3.200 m², el equipo modela 14 variantes de luminarias (entre ellas luminarias estancas LED IP65 de 48 W, campanas industriales de 150 W y bloques autónomos de emergencia de 150 lm y 1 h de autonomía), 6 tipos de bases de fuerza (2P+T 16 A 230 V, 3P+N+T 32 A 400 V) y 4 subcuadros eléctricos. Al revisar la primera entrega en PDF, el responsable de calidad detecta que la leyenda —importada de un proyecto antiguo en DWG— muestra la toma trifásica 32 A con círculo relleno negro y cita «tomacorriente 220 V», mientras el plano BIM utiliza un símbolo triangular hueco rotulado «3P+N+T 32 A / 400 V». Asimismo, figuran en leyenda 5 símbolos de detectores antiguos ajenos al alcance eléctrico. Para corregirlo, el equipo construye una *Legend View* nativa con los símbolos exactos extraídos de las familias del proyecto y crea una vista de auditoría donde inserta cada familia usada, verificando gráficamente la coincidencia 1:1 antes de bloquear la plantilla de leyenda.

#### Errores frecuentes
- Pegar un bloque CAD 2D estándar en la leyenda sin contrastarlo con los símbolos reales de las familias MEP cargadas en el modelo.
- Confiar ciegamente en *Legend Components* sin comprobar si la familia de muro/techo muestra el símbolo 2D anidado o únicamente el contorno de la caja 3D en planta.
- Mantener la misma leyenda genérica en todas las láminas (por ejemplo, incluyendo símbolos de alumbrado exterior en un plano exclusivo de fuerza interior), dificultando la lectura rápida del instalador.
- Usar descripciones comerciales con marcas en la leyenda («Base modelo X») en lugar de descripciones técnicas funcionales y normalizadas («Base de enchufe 2P+T 16 A / 230 V IP44»).

#### Preguntas que el alumnado debería poder responder
1. ¿Qué ventaja operativa ofrece una *Legend View* frente a una *Drafting View* cuando se necesita repetir la misma leyenda de simbología eléctrica en 12 láminas de planta?
2. ¿Por qué un *Legend Component* de una familia de mecanismo montado en muro puede no mostrar el símbolo de anotación anidado esperado y qué solución práctica existe en Revit para garantizar fidelidad gráfica?
3. ¿Qué riesgos contractuales y de ejecución en obra provoca incluir símbolos huérfanos o discrepantes entre la leyenda y el plano?

---

### 3.3. Filtros basados en reglas para sistemas, tensión, circuitos críticos y elementos sin asignar

#### Explicación breve y clara
Los filtros basados en reglas (*Rule-based Filters*) en Revit MEP permiten sobrescribir automáticamente el color, el patrón, el grosor de línea o la visibilidad de cualquier categoría eléctrica según los valores reales de sus parámetros, sin necesidad de modificar gráficamente elemento por elemento. Mientras el color manual (*Override Graphics in View > By Element*) es frágil y desaparece o se corrompe ante cambios del modelo, un filtro lee propiedades como `System Type`, `Voltage`, `Panel`, `Circuit Number` o parámetros compartidos personalizados (por ejemplo, `IE_Criticidad_Circuito`) y mantiene la codificación visual sincronizada en tiempo real. Además de diferenciar sistemas en planos finales (normal, emergencia, SAI, fuerza, baja/media tensión), los filtros constituyen una potente herramienta de auditoría QA/QC para detectar al instante componentes aún sin circuito asignado o canalizaciones sin clasificación de servicio.

#### Conceptos clave
- **Filtro basado en reglas (*Rule-based Filter*):** Regla lógica compuesta por categorías seleccionadas, condiciones sobre parámetros (`AND` / `OR`) y sobrescrituras gráficas aplicadas en *Visibility/Graphics Overrides*.
- **Jerarquía y prioridad de filtros:** Orden vertical dentro de la pestaña *Filters* de la vista o plantilla; si un elemento cumple simultáneamente dos filtros, prevalece la configuración del filtro ubicado más arriba en la lista.
- **Filtros de documentación vs. filtros de auditoría QA/QC:** Diferenciación entre los filtros estéticos/normativos destinados al plano imprimible (por ejemplo, distinguir alumbrado de emergencia en verde o rojo oscuro discreto) y los filtros de trabajo interno en colores estridentes para cazar errores de modelado.
- **Parámetros nativos frente a parámetros compartidos:** Aprovechamiento de propiedades incorporadas en Revit (`Circuit Number`, `Panel`, `Voltage`, `Service Type` en tubos y bandejas) complementadas con *Shared Parameters* cuando el estándar del proyecto exige distinguir servicios no contemplados de serie (por ejemplo, red crítica hospitalaria vs. red de grupo electrógeno).

#### Definiciones necesarias
- **Operador booleano en reglas de filtro:** Condición lógica (`AND` cuando deben cumplirse todas las reglas simultáneamente; `OR` cuando basta con que se cumpla al menos una) disponible para construir criterios precisos en versiones recientes de Revit.
- **Elemento sin asignar (*Unassigned Circuit/System Element*):** Componente eléctrico modelado en el proyecto cuyo parámetro `Panel`, `Circuit Number` o `Service Type` está vacío o conserva un valor por defecto genérico, lo que impide reflejarlo correctamente en cuadros de cargas y planos.

#### Ejemplo práctico realista
En el proyecto de un centro sanitario ambulatorio de 1.600 m², la ingeniería establece cuatro estados visuales obligatorios en la vista de trabajo de coordinación eléctrica:
1. **Filtro QA — Sin circuito asignado (Prioridad 1, superior):** Categorías *Electrical Fixtures* y *Lighting Fixtures* donde `Circuit Number` *has no value* (sin valor) → Relleno sólido y línea en rojo intenso (`RGB 220-38-38`, grosor 6).
2. **Filtro SAI / Crítico (Prioridad 2):** Categorías eléctricas y conductos donde `IE_Tipo_Servicio` *equals* `"SAI"` → Color azul cian (`RGB 2-132-199`) y patrón de línea discontinuo de canalización.
3. **Filtro Emergencia / Grupo electrógeno (Prioridad 3):** Donde `IE_Tipo_Servicio` *equals* `"EMERGENCIA"` o `Panel` *contains* `"CGE"` → Color naranja (`RGB 217-119-6`) y grosor 4.
4. **Filtro Fuerza 400 V trifásica (Prioridad 4):** Donde `Voltage` *equals* `400 V` → Color magenta oscuro (`RGB 147-51-234`).

Al abrir la vista de planta, el coordinador identifica en tres segundos 4 tomas dobles en una sala de curas iluminadas en rojo intenso porque fueron copiadas tras modificar la tabiquería y aún no se conectaron al cuadro `CS-P1`, así como una bandeja de salida del cuadro de emergencia que quedó por error con `Service Type = "Normal"` en lugar de `"EMERGENCIA"`.

> *Nota obligatoria de verificación normativa:* Los códigos de colores asignados en planos y las definiciones de «circuito de seguridad», «suministro de socorro» o «alumbrado de emergencia» varían según el país, la norma de diseño y la autoridad competente (por ejemplo, disposiciones del REBT e ITC-BT-28 en España, IEC 60364 o NFPA 70/99 como ejemplos ilustrativos). Deben verificarse siempre las exigencias reglamentarias y del pliego del cliente antes de fijar la paleta de filtros definitiva.

#### Errores frecuentes
- Aplicar sobrescrituras manuales por elemento (*Override Graphics By Element*) para colorear circuitos urgentes antes de una entrega, rompiendo la coherencia cuando se renumera o cambia un circuito.
- Colocar el filtro general («Todos los tubos en gris») en la parte superior de la lista de filtros, anulando visualmente los filtros más específicos situados debajo («Tubos SAI en azul»).
- Confiar en que el parámetro `Service Type` de un tubo o bandeja se actualiza automáticamente al conectarlo a un circuito (en Revit MEP el `Service Type` de *Conduit* y *Cable Tray* es un parámetro de texto independiente que debe rellenarse de forma disciplinada o automatizarse con control).
- Olvidar apagar los filtros de auditoría QA/QC (como el rojo brillante de «sin asignar») en la *View Template* destinada a la impresión final en PDF para cliente u obra.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué el orden vertical de los filtros en la ventana *Visibility/Graphics Overrides* determina el resultado visual cuando un mismo tubo o aparato eléctrico cumple dos reglas simultáneamente?
2. ¿Qué diferencia existe entre filtrar un aparato eléctrico por su parámetro `Voltage` frente a filtrar una bandeja portacables por su parámetro `Service Type`?
3. ¿Por qué la aparición en color verde de todos los elementos bajo un filtro «Verificado» no garantiza en absoluto que el dimensionamiento eléctrico o el cálculo lumínico en DIALux cumplan la normativa?

---

### 3.4. Integración en plantillas de vista y asistencia crítica con IA para auditoría gráfica

#### Explicación breve y clara
Los símbolos anidados, las leyendas y los filtros solo generan productividad sostenida cuando quedan encapsulados dentro de plantillas de visualización (*View Templates*) claramente separadas por fase de trabajo: plantillas de **Trabajo/QA** (colores de diagnóstico vivos, verificación de elementos sin asignar, contraste frente a vínculos) y plantillas de **Documentación/Emisión** (códigos cromáticos normalizados o monocromos en escala de grises, grosores calibrados para impresión). En este flujo, asistentes de IA como ChatGPT o Claude pueden ayudar a redactar matrices de estandarización gráfica, diseñar reglas booleanas de filtros sin ambigüedades, generar listados de comprobación para auditorías BIM o proponer borradores de scripts de Dynamo para rellenar parámetros faltantes; siempre bajo supervisión estricta del técnico competente, sin subir planos ni datos confidenciales de clientes a modelos externos y validando en Revit cada nombre exacto de parámetro y versión.

#### Conceptos clave
- **Separación de plantillas QA vs. Emisión:** Uso de al menos dos plantillas de vista hermanas para el mismo ámbito (una cargada de filtros de error para revisión interna y otra depurada exclusivamente para las láminas imprimibles).
- **Auditoría tabular previa con IA:** Exportación de propiedades no confidenciales de familias y parámetros a CSV anonimizado para que el asistente de IA detecte incoherencias de nomenclatura o proponga prioridades de filtros.
- **Límites de la automatización BIM con IA:** La IA no «ve» el archivo `.rvt` nativo ni valida códigos normativos vigentes por sí sola; cualquier regla o script de Dynamo sugerido debe probarse primero en una copia de respaldo del modelo.
- **Confidencialidad y anonimización:** Prohibición de introducir planos completos, ubicaciones reales, nombres de clientes, datos de infraestructuras críticas o pliegos privados en chats de IA públicos o sin acuerdo corporativo de no retención.

#### Definiciones necesarias
- **Matriz de reglas de filtros (*Filter Priority Matrix*):** Documento de control (normalmente en hoja de cálculo) que registra para cada filtro su nombre exacto, categorías afectadas, parámetro evaluado, operador, valor, orden de prioridad y aspecto gráfico en vistas QA y vistas de plano.
- **Validación humana independiente (*Human-in-the-loop*):** Revisión obligatoria realizada por un proyectista o ingeniero cualificado sobre cualquier tabla, regla o script sugerido por IA antes de aplicarlo al modelo BIM o a la documentación del proyecto.

#### Ejemplo práctico realista
Un coordinador BIM eléctrico gestiona un proyecto de edificio terciario de 5 plantas con 12 filtros de vista (por sistema, nivel de tensión, circuito esencial, bandeja bajo suelo técnico y estado de asignación). Observa que las bandejas con doble condición («Red Esencial» y «Montaje en falso techo») cambian de color de forma errática entre planos. Anonimiza los nombres reales del cliente y exporta únicamente la tabla de nombres genéricos de sus 12 parámetros y reglas actuales. Pide a Claude que organice la matriz de prioridad de filtros minimizando solapamientos entre reglas de ubicación y reglas de servicio eléctrico, y que redacte una lista de verificación de 8 puntos para revisar las vistas antes de imprimir. El asistente sugiere correctamente situar las reglas de estado de error arriba, luego las de servicio crítico y abajo las de ubicación geométrica, pero inventa un parámetro llamado `Revit_System_Class` inexistente en su plantilla. El coordinador corrige ese nombre al parámetro real `System Classification` en su Revit 2024 y valida el comportamiento visual en una vista de prueba antes de actualizar las *View Templates* maestras.

#### Errores frecuentes
- Subir capturas de planos de edificios sensibles (hospitales, centros de datos, instalaciones industriales) o archivos PDF completos del cliente a herramientas de IA sin autorización expresa.
- Copiar y ejecutar directamente un script de Dynamo o regla compleja generada por ChatGPT/Claude sobre el modelo central de producción sin hacer copia previa ni comprobar los nombres de parámetros según el idioma de la interfaz (inglés vs. español).
- Creer que una vista de Revit con filtros perfectamente ordenados y símbolos nítidos equivale a una auditoría eléctrica completa; el modelo BIM no sustituye al cálculo eléctrico ni al estudio fotométrico en DIALux.
- Mezclar criterios gráficos de vistas de coordinación 3D con vistas de plano 2D dentro de una misma *View Template*, desconfigurando las láminas listas para entrega.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué diferencias funcionales deben existir entre una plantilla de vista de auditoría QA/QC y una plantilla de vista destinada a las láminas contractuales en PDF?
2. ¿Qué datos deben eliminarse o anonimizarse obligatoriamente antes de consultar a ChatGPT o Claude sobre la estructura de filtros o nomenclatura de símbolos de un proyecto real?
3. ¿Cómo se comprueba en Revit si un script de Dynamo o una matriz de reglas propuesta por una IA funciona realmente sin poner en riesgo el archivo de producción?

---

## 4. Metodología didáctica

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
|---|---:|---|---|
| **1. Apertura y activación** | 20 min | Presenta dos extractos reales anonimizados de planos eléctricos (uno con símbolos solapados y colores aleatorios; otro con simbología normalizada y filtros coherentes). Lanza la Actividad 1 de diagnóstico visual. | Identifica fallos de legibilidad y coherencia en los planos proyectados y clasifica qué errores proceden de familias, de leyenda o de ausencia de filtros. |
| **2. Exposición guiada / Microlearning I** | 35 min | Demuestra en directo (o con capturas paso a paso) el anidado de una *Generic Annotation* en una toma 3D con `Desfase_Simbolo`, visibilidad por nivel de detalle y creación de una *Legend View* sincronizada. | Toma notas de los parámetros clave, verifica la diferencia entre tamaño impreso constante y escala de modelo, y formula dudas sobre casos de cajas múltiples. |
| **3. Análisis de caso práctico** | 45 min | Introduce el caso *Hospital Comarcal Valdeverde — Reformas de Área Quirúrgica y Urgencias*, reparte la matriz de anomalías del modelo y guía la deliberación en equipos de 3-4 personas. | Analiza las discrepancias de símbolos, leyendas y filtros del modelo hospitalario, define una jerarquía de filtros y justifica qué elementos exigen verificación eléctrica externa. |
| **4. Exposición guiada / Microlearning II** | 30 min | Explica la configuración de filtros basados en reglas (`AND`/`OR`, prioridad vertical), la separación entre plantillas QA/Emisión y el flujo seguro con IA para generar matrices y checklists sin datos sensibles. | Contrasta las soluciones planteadas en el caso práctico frente a la prioridad real de reglas en *Visibility/Graphics* y distingue validez gráfica de cumplimiento normativo. |
| **5. Taller práctico de aplicación y transferencia** | 65 min | Acompaña la Actividad 2 (25 min: diseñar la lógica de un símbolo con desfase y matriz de 5 filtros) y la Actividad 3 (40 min: adaptar el estándar de simbología, leyenda y filtros a su proyecto de curso o laboral con apoyo revisado de IA). | Configura familias/parámetros o diseña la hoja de especificaciones gráficas, redacta el *prompt* anonimizado para estructurar su matriz de filtros y audita manualmente cada parámetro propuesto. |
| **6. Discusión guiada y puesta en común** | 25 min | Selecciona 3 equipos o participantes para exponer en 3 minutos su matriz de filtros y leyenda; provoca preguntas críticas sobre conflictos de prioridad y errores detectados en la IA. | Presenta sus decisiones de jerarquía visual, compara criterios entre proyectos (terciario vs. industrial/sanitario) y corrige posibles ambigüedades en su entregable. |
| **7. Síntesis, evaluación sumativa y cierre** | 20 min | Resume los principios clave de normalización gráfica BIM, aplica el cuestionario corto sumativo y enlaza con el Tema 6 (Láminas de detalles y control de revisiones). | Completa la prueba de cierre, realiza su autoevaluación de madurez documental y anota los ajustes finales pendientes en su estándar personal. |
| **TOTAL** | **240 min** | | |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «Auditoría exprés de un plano eléctrico ilegible»

- **Objetivo:** Activar los conocimientos previos sobre escalas y etiquetas (Temas 3 y 4) y diagnosticar problemas reales causados por ausencia de símbolos anidados, leyendas desactualizadas y filtros mal configurados.
- **Instrucciones para el alumnado:**
  1. Observad individualmente durante 7 minutos el fragmento de plano eléctrico 1:100 proyectado/entregado (zona de oficinas con 6 cajas múltiples en tabiques, luminarias normales y de emergencia, tomas SAI y un circuito aún sin panel asignado).
  2. Anotad al menos 5 defectos gráficos o documentales clasificándolos en tres columnas: *Problema de símbolo 2D/3D*, *Problema de leyenda* o *Problema de filtro/visualización*.
  3. En parejas y luego en plenario (13 minutos), compartid los fallos críticos y priorizad cuál afectaría más gravemente a la ejecución en obra o a una licitación.
- **Materiales necesarios:** Extracto de plano comparativo A3 (digital en PDF o impreso) y tabla de registro rápido de 3 columnas.
- **Tiempo estimado:** 20 minutos (Fase 1).
- **Rol del formador:** Moderar la puesta en común evitando soluciones superficiales («arreglarlo en AutoCAD después») y subrayar cómo cada fallo nace de la configuración del modelo BIM.
- **Producto o entregable esperado:** Lista clasificada con un mínimo de 5 defectos detectados y su causa raíz en Revit MEP.
- **Criterios de éxito:** El alumnado diferencia entre fallo geométrico 3D y fallo de anotación 2D, detecta el desfase entre plano y leyenda y reconoce la falta de resaltado para circuitos críticos o sin asignar.

### Actividad 2 (Aplicación técnica): «Diseño de símbolo anidado y matriz de prioridad de 5 filtros»

- **Objetivo:** Aplicar las reglas de construcción de familias de anotación anidadas y configurar la lógica y prioridad exacta de filtros basados en reglas en Revit MEP.
- **Instrucciones para el alumnado:**
  1. En parejas (25 minutos), analizad el conjunto de componentes de práctica: base normal 230 V, base SAI 230 V, luminaria de emergencia 1 h y bandeja de alimentación esencial.
  2. Especificad la configuración de la familia de base SAI: tamaño del símbolo en *Generic Annotation* (mm en papel), niveles de detalle visibles para 2D y 3D, activación de *Maintain Annotation Orientation* y nombre/tipo de parámetro de desfase simbólico.
  3. Construid sobre la plantilla proporcionada (o en el entorno Revit si hay equipo disponible) la secuencia ordenada de 5 filtros de visualización: (1) Sin circuito asignado (QA rojo), (2) Circuito SAI, (3) Circuito Emergencia, (4) Fuerza 400 V y (5) Elementos normales en gris/negro, indicando categorías, parámetro exacto, operador y regla de prioridad.
- **Materiales necesarios:** Ficha de especificación de familia y matriz de filtros, plantilla de proyecto Revit MEP de práctica (o lámina de especificaciones técnicas de parámetros).
- **Tiempo estimado:** 25 minutos (primera parte de la Fase 5).
- **Rol del formador:** Verificar que nadie utiliza colores manuales por elemento, comprobar el orden descendente de prioridad (el filtro QA arriba del todo) y recordar que el `Service Type` de bandejas/tubos requiere asignación explícita.
- **Producto o entregable esperado:** Ficha técnica de la familia anidada + tabla ordenada de los 5 filtros con sus reglas lógicas exactas y propiedades de sobrescritura.
- **Criterios de éxito:** Coherencia total de unidades y niveles de detalle en la familia; ausencia de conflictos de prioridad entre filtros; separación explícita entre vista QA y vista imprimible.

### Actividad 3 (Transferencia a proyecto real): «Estandarización gráfica y auditoría asistida con IA para tu proyecto»

- **Objetivo:** Transferir los criterios de simbología, leyenda y filtros a un proyecto propio del alumnado (o al proyecto integrador del curso), empleando IA generativa como apoyo bajo protocolo de anonimización y verificación independiente.
- **Instrucciones para el alumnado:**
  1. Definid el ámbito de vuestro proyecto (edificio terciario, nave industrial, clínica o local comercial) y listad los 8-12 símbolos eléctricos principales y los 4-6 servicios/estados que deben diferenciarse visualmente.
  2. Preparad un bloque de contexto **100 % anonimizado** (sin nombre de cliente, dirección ni planos adjuntos) con vuestra lista genérica de categorías y parámetros disponibles en Revit.
  3. Redactad un *prompt* estructurado para ChatGPT o Claude solicitando: (a) una tabla estándar de descripción para la leyenda de simbología libre de marcas comerciales y (b) una propuesta ordenada de filtros de visualización QA/Emisión con reglas de prueba.
  4. Auditad críticamente la respuesta de la IA: corregid cualquier parámetro inexistente en vuestra versión de Revit, eliminad referencias normativas no verificadas y documentad los ajustes en vuestra **Plantilla de Estándar Gráfico** (Sección 8).
- **Materiales necesarios:** Plantilla de Estándar Gráfico y Matriz de Filtros (Sección 8), acceso a entorno seguro de IA (o simulación estructurada en ficha si no hay acceso en aula).
- **Tiempo estimado:** 40 minutos (segunda parte de la Fase 5) + 25 minutos de exposición/discusión en la Fase 6.
- **Rol del formador:** Supervisar que no se introduzcan datos reales confidenciales, señalar posibles alucinaciones de nombres de parámetros de Revit en la respuesta de la IA y exigir justificación técnica de cada código de color frente a la normativa aplicable del país.
- **Producto o entregable esperado:** Dossier de Estándar Gráfico del Proyecto (tabla de leyenda normalizada + matriz de filtros QA/Emisión + registro de *prompt* y correcciones manuales aplicadas a la IA).
- **Criterios de éxito:** El entregable presenta correspondencia 1:1 entre familias y leyenda, orden lógico de filtros sin solapamientos destructivos, anonimización completa en el *prompt* y detección explícita de al menos una mejora o corrección realizada manualmente sobre la propuesta de la IA.

---

## 6. Caso práctico

### Hospital Comarcal Valdeverde — Normalización gráfica y detección de errores en Reforma de Urgencias

#### Contexto empresarial
**Ingeniería ElectroBIM Norte, S.L.** (18 profesionales) desarrolla el proyecto de ejecución en BIM (Revit MEP) para la reforma integral del área de Urgencias y dos quirófanos ambulatorios de un hospital comarcal (superficie de intervención: **1.450 m²**). El cliente exige entrega en planos PDF normalizados a escalas 1:50 (salas críticas y boxes) y 1:100 (planta general), con diferenciación inequívoca entre cuatro redes eléctricas: **Red Normal (230/400 V)**, **Red de Socorros / Grupo Electrógeno**, **Red SAI (Sistema de Alimentación Ininterrumpida)** y **Red de Muy Baja Tensión / Tierra Equipotencial de Salas Médicas**.

#### Situación o problema
A 48 horas de la entrega de revisión de diseño (*Design Review*), la coordinadora BIM detecta graves fallos en las plantas generadas por dos modeladores júnior:
1. En las cabeceras de cama de los 12 boxes de urgencias, donde convergen 6 tomas normales, 4 tomas SAI, 2 tomas de grupo electrógeno y 1 toma de puesta a tierra equipotencial en apenas 900 mm de ancho, los símbolos de las familias 3D aparecen superpuestos en una mancha negra ilegible al imprimir en 1:50.
2. Un filtro llamado «Instalación Eléctrica General» con color negro sólido fue colocado al inicio de la lista de filtros, ocultando los filtros azules (SAI) y naranjas (Grupo Electrógeno) en casi todo el plano.
3. Existen 14 tomas de corriente en la sala de espera copiadas por simetría (*Mirror*) que no tienen circuito ni cuadro asignado en el modelo, aunque el modelador las pintó manualmente de naranja en la vista para «que parezcan conectadas al cuadro de emergencia».
4. La leyenda de simbología procede de un proyecto residencial de 2019 y omite el símbolo de toma equipotencial, manteniendo en cambio símbolos de portero automático de viviendas.

#### Datos disponibles

| Elemento / Anomalía detectada | Estado actual en modelo Revit MEP | Impacto en planos y proyecto |
|---|---|---|
| **Familias de mecanismos en cabecera de box** | Símbolos dibujados con *Symbolic Lines* fijas de 120 mm dentro de la familia 3D, sin parámetros de desfase. | Ilegibles a escala 1:100 y solapados a escala 1:50; si se mueve la familia 3D en planta se descuadran los paneles médicos de arquitectura. |
| **Orden de filtros en *View Template* «PL-EL-PLANTA-1-50»** | 1. Filtro General (Categorías eléctricas → Negro); 2. Filtro SAI (`Panel contains "SAI"` → Azul); 3. Filtro Grupo (`Panel contains "GE"` → Naranja). | El Filtro 1 anula visualmente los filtros 2 y 3 en las tomas y luminarias; las bandejas muestran todas el mismo trazo porque carecen de regla sobre `Service Type`. |
| **14 tomas en sala de espera** | `Panel` = vacío, `Circuit Number` = vacío; sobrescritura manual por elemento (*By Element*) en naranja. | No aparecen en los cuadros de cargas ni en el unifilar, pero inducen a engaño en plano impreso simulando pertenecer a red de grupo electrógeno. |
| **Leyenda de simbología «LEY-EL-01»** | Importada de CAD antiguo: 22 símbolos, 6 inexistentes en la reforma, ausencia de toma equipotencial y discrepancia gráfica en luminaria de emergencia. | Contradicción documental que puede provocar errores de compra/montaje en obra y reclamaciones de presupuesto en licitación. |

#### Preguntas de análisis
1. ¿Por qué el uso de *Symbolic Lines* fijas en la familia de mecanismos impide escalar adecuadamente entre las vistas 1:50 y 1:100, y qué estructura de familia debe sustituirlas?
2. ¿Qué ocurre exactamente con la jerarquía de filtros actual y cómo habría que reordenar y completar las reglas (incluyendo bandejas/tubos y elementos sin asignar)?
3. ¿Qué peligro técnico y contractual encierra haber coloreado manualmente de naranja las 14 tomas sin circuito asignado, y cómo se detecta automáticamente este fraude gráfico o descuido?
4. ¿Qué pasos concretos deben seguirse para reconstruir la leyenda «LEY-EL-01» manteniendo correspondencia exacta 1:1 con el proyecto y verificando la normativa hospitalaria aplicable?

#### Tarea a realizar
En equipos de 3-4 personas (30 minutos de trabajo + 15 de puesta en común), elaborad el **Plan de Choque Documental de 48 horas** para ElectroBIM Norte que incluya:
1. Especificación técnica de corrección de la familia de tomas médicas (anidado, tamaño en papel, nivel de detalle y desfase).
2. Tabla ordenada definitiva de filtros para dos plantillas separadas: `TPL-EL-QA` (revisión interna) y `TPL-EL-DOC` (entrega al cliente).
3. Protocolo de saneamiento de las 14 tomas sobrescritas manualmente y actualización de la leyenda nativa en Revit.
4. Lista de comprobaciones que permanecen fuera del alcance visual de Revit y que debe firmar el ingeniero eléctrico competente (cálculos, aislamiento de red IT médica si aplica, selectividad y estudio lumínico DIALux).

#### Posibles soluciones o criterios de análisis
- **Corrección de familias:** Sustituir las *Symbolic Lines* por una familia *Generic Annotation* anidada de ~2,5–3,0 mm en papel (con diferenciación gráfica clara por servicio: normal, SAI, grupo, equipotencial), visible solo en *Coarse*/*Medium* de planta, con *Maintain Annotation Orientation* activado y parámetros de instancia `Desfase_X` / `Desfase_Y` para desplegar los símbolos en abanico o línea sobre la cabecera sin mover la caja 3D.
- **Reordenación y separación de filtros:** Eliminar el Filtro General superior que pisa a los demás (dejando la apariencia base en *Object Styles* o al final de la lista). En `TPL-EL-QA`, situar arriba del todo un filtro rojo sólido para `Circuit Number has no value OR Panel has no value` y otro para `Conduit/Cable Tray Service Type has no value`; debajo, colocar en orden específico SAI, Grupo Electrógeno, Alumbrado Emergencia y Normal. En `TPL-EL-DOC`, apagar los filtros QA tras haber corregido todas las asignaciones reales en el modelo.
- **Saneamiento de sobrescrituras manuales:** Seleccionar todas las tomas de sala de espera, ejecutar *Reset Graphics in View > By Element*, conectarlas eléctricamente al circuito y cuadro reales calculados en memoria/unifilar y confirmar que desaparecen del filtro de error QA.
- **Leyenda nativa:** Eliminar el DWG importado, crear una *Legend View* nativa en Revit que utilice exactamente las familias de anotación y etiquetas del proyecto, retirar los 6 símbolos residenciales inexistentes e incorporar la toma equipotencial.
- **Verificación normativa obligatoria:** Recordar al equipo que aunque los colores de SAI y Grupo queden impecables en el plano, en áreas médicas críticas (como quirófanos o boxes) deben comprobarse por ingeniería competente la normativa sanitaria y eléctrica vigente del país (por ejemplo, criterios equivalentes a ITC-BT-38 en España o IEC 60364-7-710 como referencias ilustrativas a confirmar según jurisdicción y edición), esquemas de transformador de aislamiento si procede, protecciones diferenciales y cálculo fotométrico en DIALux.

#### Preguntas de reflexión final
- ¿Cuánto tiempo real se pierde en una oficina técnica por aplicar «parches manuales» (*By Element* o líneas 2D sueltas) frente a invertir dos horas en estandarizar la familia anidada y los filtros en la plantilla?
- ¿De qué forma comunicarías al cliente la diferencia entre una entrega gráfica BIM validada y la memoria de cálculo eléctrico y lumínico reglamentaria?

---

## 7. Evaluación

### Evaluación diagnóstica
Sondeo inicial de 3 cuestiones rápidas (vía encuesta digital o tarjetas al comenzar la sesión):
1. ¿Qué diferencia existe en Revit entre dibujar un símbolo con *Symbolic Lines* frente a anidar una *Generic Annotation*?
2. Si un elemento eléctrico cumple dos filtros distintos en una vista, ¿cuál de los dos prevalece y por qué?
3. Si todos los símbolos y colores de una planta eléctrica BIM se muestran ordenados y sin alertas rojas, ¿significa que la instalación cumple la normativa eléctrica del país? (Sí / No — justificación en 1 frase).

### Evaluación formativa
- **Observación directa en Actividad 1:** Capacidad para diagnosticar causas raíz BIM detrás de defectos en planos 2D.
- **Revisión técnica en Actividad 2:** Comprobación in situ (o sobre ficha) de que los parámetros de visibilidad y desfase no mueven geometría 3D y de que la lista de filtros respeta la prioridad lógica sin solapamientos erróneos.
- **Retroalimentación en vivo durante el Caso Práctico y la Fase 6:** Valoración de argumentos sobre separación de plantillas QA/Emisión, rechazo a sobrescrituras manuales y revisión crítica de salidas de IA.

### Evaluación sumativa
1. **Entrega práctica individual/por parejas:** Dossier de Estándar Gráfico del Proyecto (Actividad 3) compuesto por: tabla de leyenda normalizada (mínimo 8 símbolos sin marcas injustificadas), matriz de filtros QA/Emisión con reglas booleanas exactas y registro del *prompt* anonimizado con al menos una corrección manual documentada sobre la propuesta de IA.
2. **Prueba objetiva corta (5 ítems de decisión técnica):** Preguntas prácticas sobre comportamiento de escalas en *Generic Annotation*, precedencia de filtros, detección de elementos sin asignar, limitaciones de *Legend Components* y verificación independiente frente a resultados de IA o gráficos BIM.

### Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
|---|---|---|---|---|
| **Configuración de símbolos anidados 2D/3D** | Confunde geometría 3D con anotación 2D; propone mover físicamente cajas 3D para evitar solapes o usa tamaños dependientes de la escala del modelo. | Emplea anotación anidada, pero omite el control por nivel de detalle o no resuelve el desfase gráfico en cajas agrupadas. | Configura adecuadamente la familia *Generic Annotation* anidada con tamaño fijo impreso, visibilidad por nivel de detalle, orientación en muro y desfase simbólico sin mover el 3D. | Optimiza la biblioteca simbólica integrando subcategorías propias, directrices automáticas opcionales y parámetros compartidos listos para leyendas y tablas *Note Block*. |
| **Consistencia de leyendas de simbología** | Recicla bloques CAD sin revisar, deja símbolos huérfanos o introduce marcas comerciales injustificadas. | Incluye los símbolos principales del proyecto, pero mantiene discrepancias menores en descripción técnica o formato frente al plano. | Construye una leyenda nativa coherente con correspondencia 1:1 respecto a las familias cargadas en plano y descripciones técnicas neutras y claras. | Implementa una leyenda modular vinculada al estándar de proyecto con procedimiento verificable de auditoría (p. ej. vista de control o *Note Block*) y mención expresa a la normativa gráfica aplicable. |
| **Diseño y prioridad de filtros basados en reglas** | Utiliza sobrescrituras manuales por elemento o crea filtros mal ordenados que anulan los sistemas críticos. | Crea filtros por sistema o tensión, pero mezcla reglas de auditoría QA con reglas de emisión o deja sin cubrir bandejas/tubos o elementos sin asignar. | Diseña una matriz ordenada de filtros basados en reglas que distingue sistemas críticos, tensión y elementos sin asignar, separando claramente vista QA y vista documental. | Estructura plantillas paralelas (`QA` y `Emisión`) con reglas booleanas depuradas, cobertura total de categorías (aparatos, equipos, tubos, bandejas) y protocolo documentado de verificación. |
| **Uso crítico de IA y rigor técnico-normativo** | Introduce datos confidenciales en IA o acepta parámetros inventados y normas sin verificar; confunde aspecto visual BIM con cumplimiento eléctrico. | Anonimiza parcialmente los datos y revisa algunas propuestas de la IA, pero deja ambigüedades normativas o de parámetros reales de Revit. | Anonimiza por completo el contexto, aplica estructura de *prompt* clara, corrige manualmente errores de la IA y distingue el modelado BIM del cálculo eléctrico y fotométrico. | Documenta trazabilidad completa (*prompt*, salida, auditoría de parámetros según versión de Revit y verificación independiente por técnico competente conforme a normativa vigente aplicable). |

### Actividad de autoevaluación
Checklist reflexivo individual (5 minutos al cierre): el alumnado valora del 1 al 4 su dominio actual en: (a) distinguir qué pertenece a la geometría 3D y qué a la anotación 2D en familias eléctricas; (b) ordenar filtros de vista sin conflictos de precedencia; (c) auditar la correspondencia exacta entre leyenda y plano; y (d) revisar de forma crítica una tabla o regla generada por IA sin ceder el criterio técnico. Anota una acción de mejora concreta para aplicar en el Tema 6.

---

## 8. Materiales y recursos

### Guion de diapositivas

- **Slide 1:** Portada — Bloque 4 · Tema 5: Símbolos y filtros de visualización. Objetivos del tema y relación con la documentación BIM eléctrica.
- **Slide 2:** Activación — Dos planos eléctricos cara a cara: detección de solapes simbólicos, leyendas fantasma y ausencia de jerarquía visual.
- **Slide 3:** Anatomía de una familia eléctrica BIM — Geometría 3D vs. *Generic Annotation* anidada, tamaño constante en papel (mm), niveles de detalle y *Maintain Annotation Orientation*.
- **Slide 4:** Solapamiento sin destruir el modelo 3D — Cómo implementar parámetros de instancia `Desfase_Simbolo_X/Y` en agrupaciones de mecanismos sobre un mismo paramento.
- **Slide 5:** Leyendas fiables en Revit MEP — *Legend Views*, alcance y límites de *Legend Components*, *Note Blocks* y regla de correspondencia 1:1 plano–leyenda.
- **Slide 6:** Filtros basados en reglas y prioridad vertical — Diferenciación de tensión, redes SAI/Emergencia, `Service Type` en bandejas/tubos y filtro QA rojo para elementos «sin asignar».
- **Slide 7:** Caso práctico *Hospital Comarcal Valdeverde* — Diagnóstico de los 4 fallos críticos, separación de plantillas `QA` vs. `Documentación` y recordatorio de cálculo independiente (eléctrico y DIALux).
- **Slide 8:** IA como copiloto documental y puente al Tema 6 — Anonimización de parámetros, detección de alucinaciones de IA, síntesis final y avance hacia láminas de detalles constructivos.

### Ficha de trabajo
Documento guía en dos caras para el aula que incluye:
- Esquema visual de visibilidad por nivel de detalle (*Coarse* / *Medium* / *Fine*) para familias eléctricas anfitrionas y anotaciones anidadas.
- Tabla comparativa de operadores lógicos de filtros en Revit (`equals`, `contains`, `has no value`, combinación `AND`/`OR`).
- Protocolo de 5 puntos de seguridad y verificación para consultas en ChatGPT/Claude sobre documentación BIM.

### Plantilla técnica práctica

**Plantilla de Matriz de Estándar Gráfico y Filtros de Visualización (Revit MEP)**

| Prioridad | Nombre del filtro | Uso (`QA` / `DOC`) | Categorías incluidas | Regla lógica (Parámetro + Operador + Valor) | Color / Patrón / Grosor | Observaciones y verificación |
|---:|---|---|---|---|---|---|
| 1 | `QA_Sin_Circuito_Asignado` | Solo `QA` | Equipos, Aparatos, Luminarias | `Circuit Number` *has no value* `OR` `Panel` *has no value* | Rojo `#DC2626` / Relleno sólido / Grosor 6 | Apagar en plantilla `DOC`; corregir asignando circuito real. |
| 2 | `QA_Canalizacion_Sin_Servicio` | Solo `QA` | Tubos, Bandejas, Accesorios | `Service Type` *has no value* | Magenta `#C026D3` / Línea continua / Grosor 5 | Asignar parámetro `Service Type` antes de emitir plano. |
| 3 | `EL_Red_SAI_Critica` | `QA` y `DOC` | Equipos, Aparatos, Luminarias, Tubos, Bandejas | `IE_Servicio` *equals* `"SAI"` `OR` `Service Type` *equals* `"SAI"` | Azul cian `#0284C7` / Trazo discontinuo / Grosor 4 | Confirmar simbología y normativa de sala crítica aplicable. |
| 4 | `EL_Red_Emergencia_Grupo` | `QA` y `DOC` | Equipos, Aparatos, Luminarias, Tubos, Bandejas | `IE_Servicio` *equals* `"EMERGENCIA"` `OR` `Service Type` *equals* `"EMERGENCIA"` | Naranja `#D97706` / Trazo raya-punto / Grosor 4 | Contrastar ubicación de luminarias con cálculo en DIALux. |
| 5 | `EL_Fuerza_Trifasica_400V` | `QA` y `DOC` | Equipos, Aparatos | `Voltage` *equals* `400 V` | Violeta `#7C3AED` / Línea continua / Grosor 3 | Verificar equilibrio de fases en cuadro de cargas externo. |
| 6 | `EL_Red_Normal_Base` | `DOC` | Aparatos, Luminarias, Tubos, Bandejas | `IE_Servicio` *equals* `"NORMAL"` | Negro/Gris oscuro `#1F2937` / Continua / Grosor 2 | Mantener arquitectura vinculada en *Halftone*. |

### Lecturas y recursos recomendados
- Documentación técnica oficial de Autodesk Revit sobre *View Filters*, *Annotation Families* y *Legends* (sección de sistemas eléctricos MEP).
- Guías metodológicas de estandarización gráfica BIM y simbología eléctrica internacional (por ejemplo, referencias a **IEC 60617** sobre símbolos gráficos para esquemas y documentación técnica, o directrices nacionales de representación técnica aplicables).
- Guías introductorias de buenas prácticas para revisión de modelos BIM (por ejemplo, documentos de referencia de *buildingSMART* sobre calidad de información en modelos IFC/BIM).

> **Advertencia obligatoria de validación:** Antes de utilizar cualquier referencia normativa, código simbólico, guía o recurso en un proyecto real, el formador y el alumnado deben validar la versión vigente del software (especialmente operadores `AND`/`OR` en filtros de Revit y comportamiento de anotaciones en familias según versión), así como la normativa eléctrica, simbólica y de seguridad vigente en el país y jurisdicción específicos del proyecto.

### Glosario de términos clave

| Término | Definición |
|---|---|
| **Anotación genérica (*Generic Annotation*)** | Familia bidimensional de Revit cuyo tamaño escala automáticamente respecto al modelo para mantener unas dimensiones físicas constantes en el plano impreso. |
| **Desfase simbólico (*Symbol Offset*)** | Parámetro de instancia que permite desplazar gráficamente en planta un símbolo 2D anidado sin alterar la posición tridimensional real del componente eléctrico. |
| **Filtro basado en reglas (*Rule-based Filter*)** | Herramienta de visualización que aplica sobrescrituras automáticas de color, patrón, grosor o visibilidad a elementos que cumplen condiciones lógicas sobre sus parámetros. |
| **Leyenda (*Legend View*)** | Vista especial reutilizable en múltiples láminas de un proyecto BIM destinada a mostrar y describir los símbolos, tipos de línea y elementos gráficos normalizados. |
| ***Maintain Annotation Orientation*** | Propiedad de las familias de componentes 3D que mantiene el símbolo 2D anidado legible y orientado paralelamente al plano de vista aunque el componente se hospede en muros verticales. |
| **Prioridad de filtros** | Orden vertical en *Visibility/Graphics Overrides* que determina qué regla visual prevalece cuando un mismo elemento cumple simultáneamente varios filtros activos. |
| **Sobrescritura por elemento (*By Element*)** | Modificación gráfica manual y puntual aplicada sobre un único ejemplar en una vista; práctica desaconsejada por romper la coherencia frente a cambios del modelo. |
| ***View Template* (Plantilla de vista)** | Conjunto guardado de configuraciones gráficas (escala, nivel de detalle, visibilidad de categorías, filtros y subyacentes) que asegura uniformidad entre múltiples vistas del proyecto. |

---

## 9. Adaptaciones

### Sesión presencial
- Proyectar en aula el archivo `.rvt` de ejemplo con dos ventanas en mosaico (*Tile Views*): a la izquierda la planta 1:50 con la plantilla `QA` (mostrando alertas rojas de elementos sin asignar) y a la derecha el mismo espacio con la plantilla `DOC` para demostrar el impacto inmediato del orden de filtros.
- Realizar la Actividad 1 repartiendo copias físicas en papel A3 para que el alumnado rodee con rotulador los solapamientos a escala real impresa, comprobando de forma táctil por qué un símbolo mal escalado resulta ilegible en obra.

### Sesión online síncrona
- Compartir una hoja colaborativa en la nube (Excel Online / Google Sheets) con pestañas por equipo donde cada grupo rellena su matriz de prioridad de filtros y pega su *prompt* anonimizado junto con las correcciones realizadas a la respuesta de la IA.
- Utilizar salas de grupos reducidos (*breakout rooms*) durante el caso práctico *Hospital Comarcal Valdeverde* y pedir que cada portavoz comparta pantalla en el plenario durante 3 minutos señalando los cambios de orden en la tabla de filtros.

### Sesión asíncrona
- **Pre-trabajo (20 minutos antes de la sesión):** Vídeo corto demostrando el problema de dibujar símbolos con líneas de modelo frente a *Generic Annotation* y cuestionario diagnóstico de 3 preguntas en el campus virtual.
- **Post-trabajo (30 minutos después de la sesión):** Entrega en el repositorio del curso de la **Matriz de Estándar Gráfico y Filtros** aplicada al caso individual del alumnado, acompañada de dos capturas comparativas (vista `QA` con detección de errores corregidos y vista `DOC` lista para componer en lámina) o ficha técnica documentada en PDF.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Integra la limpieza de plantillas de vista (Bloque 4, Tema 1), la clasificación de sistemas en circuitos y canalizaciones (Bloque 4, Tema 2), la elección de escalas y niveles de detalle (Bloque 4, Tema 3) y la disciplina de etiquetado sin colisiones (Bloque 4, Tema 4), además de la identificación técnica de sistemas de emergencia y puesta a tierra introducida en el Bloque 1.
- **Competencias que desarrolla:** Estandarización gráfica BIM multi-escala, control visual de calidad (*QA/QC*) sobre modelos MEP, gestión de jerarquías de datos en Revit y uso crítico, seguro y auditado de IA generativa en tareas de normalización documental.
- **Conexión dentro del plan de 6 módulos / 50 temas:**
  - *Tema anterior (Bloque 4, Tema 4 — Dimensiones, anotaciones, textos y etiquetas):* Completa el lenguaje gráfico del plano añadiendo simbología normalizada en familias y diferenciación cromática automatizada por reglas encima de las cotas y etiquetas parametrizadas.
  - *Tema posterior (Bloque 4, Tema 6 — Láminas de detalles):* Todas las vistas ya depuradas con símbolos consistentes, leyendas sincronizadas y filtros limpios se ensamblarán en cartelas paramétricas junto con *callouts*, secciones de cuartos eléctricos, detalles 2D y control de revisiones.
- **Evidencia de aprendizaje que dejará el alumnado:** Dossier de Estándar Gráfico del Proyecto que incluye especificación de familia anidada con desfase, leyenda sincronizada sin símbolos huérfanos, matriz ordenada de filtros `QA` y `DOC` y registro de uso responsable y auditado de IA.

---

## Siguientes pasos para el formador

1. **Verificar versión de Revit en el aula:** Confirmar antes de impartir si los equipos utilizan Revit 2022 o superior (con reglas `OR` nativas en *View Filters*) o versiones anteriores donde se requieren múltiples entradas o parámetros combinados, ajustando la demostración en vivo.
2. **Preparar el archivo de práctica sin datos reales:** Comprobar que el modelo `.rvt` del ejercicio hospitalario contiene intencionadamente los 4 fallos documentados (familia sin anotación anidada, filtro general superior bloqueante, 14 tomas con sobrescritura manual naranja y leyenda CAD obsoleta).
3. **Recordar la frontera técnica:** Enfatizar al cierre del tema que unos filtros verdes y una leyenda pulcra no sustituyen en ningún caso al cálculo reglamentario de protecciones/conductores ni al estudio lumínico en DIALux, que deben seguir trazabilidad independiente.
4. **Introducir el Tema 6:** Cerrar la sesión preguntando al alumnado: «Ahora que nuestras plantas eléctricas se leen con precisión y muestran cada circuito crítico sin errores, ¿cómo las maquetamos en cartelas normalizadas, ampliamos los cuartos de cuadros mediante secciones y controlamos formalmente cada nueva revisión del proyecto?».
