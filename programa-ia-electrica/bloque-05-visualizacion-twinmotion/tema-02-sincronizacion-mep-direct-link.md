# Tema 2. Sincronización del modelo eléctrico MEP mediante Direct Link

## 1. Ficha del tema

| Campo | Detalle |
| :--- | :--- |
| **Título del tema** | Tema 2. Sincronización del modelo eléctrico MEP mediante Direct Link |
| **Bloque y posición dentro del programa** | Bloque 5: Visualización y renderizado con Twinmotion · Tema 2 de 10 (Tema 31 de 50 del programa de 6 módulos) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Haber completado el Tema 1 del Bloque 5 (vista `3D_EXP_Twinmotion` depurada y plugin Datasmith operativo); dominio intermedio de vínculos RVT y coordenadas en Revit MEP |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado será capaz de establecer y mantener un flujo de actualización controlada mediante Datasmith Direct Link entre modelos federados de Revit (Arquitectura + MEP eléctrico) y Twinmotion, seleccionando el modo de agrupación (*Collapse*) adecuado, preservando materiales aplicados y evitando desplazamientos de coordenadas o sobreescrituras destructivas. |

---

## 2. Objetivos de aprendizaje

Al concluir esta unidad didáctica, el alumnado será capaz de:

1. **Analizar** el funcionamiento técnico de la actualización iterativa mediante *Datasmith Direct Link* frente a la sincronización automática continua, evaluando riesgos de rendimiento y pérdida de configuración en escenas eléctricas complejas *(Nivel de Bloom: Analizar)*
2. **Seleccionar** de forma justificada el modo de importación y agrupación (*Keep Hierarchy*, *Collapse by Material*, *Collapse All*) más apropiado para elementos de arquitectura frente a equipos, luminarias y bandejas MEP *(Nivel de Bloom: Evaluar)*
3. **Aplicar** un protocolo estable de nomenclatura de materiales y gestión de transformaciones en Revit MEP que permita re-sincronizar modificaciones de trazado o equipos sin perder los acabados PBR asignados en Twinmotion *(Nivel de Bloom: Aplicar)*
4. **Coordinar** múltiples vínculos RVT independientes (Arquitectura, Estructura e Instalaciones Eléctricas) dentro de una misma escena de Twinmotion resolviendo discrepancias entre origen interno y coordenadas compartidas *(Nivel de Bloom: Aplicar)*
5. **Diseñar** un estándar operativo de sincronización multi-disciplina para estudios BIM que integre control de versiones, respaldo de escena y verificación independiente de cambios frente a planos y cálculos vigentes *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Flujo iterativo de actualización con Datasmith Direct Link

#### Explicación breve y clara
En un proyecto real, el diseño eléctrico nunca es estático: arquitectura mueve un tabique, clima desplaza un conducto y el proyectista eléctrico reubica tres luminarias y eleva `30 cm` una bandeja portacables. *Datasmith Direct Link* evita tener que reimportar el edificio desde cero tras cada revisión, actualizando únicamente las diferencias sobre la escena abierta en Twinmotion. Sin embargo, «flujo bidireccional de proyecto» no significa que lo que muevas en Twinmotion modifique tu archivo `.rvt`: el cambio geométrico y de ingeniería ocurre en Revit MEP, mientras Twinmotion recibe las actualizaciones geométricas conservando cámaras, entorno y acabados mediante un enlace controlado.

#### Conceptos clave
- **Sincronización manual (*Synchronize*) vs. *Auto-sync*:** en modelos MEP con numerosas canalizaciones, activar *Auto-sync* lanza actualizaciones cada vez que modificas un tramo en Revit, bloqueando ambos programas; en ingeniería eléctrica se recomienda sincronización manual por hitos verificados.
- **Unidireccionalidad geométrica real:** Revit MEP es siempre la «fuente de verdad» geométrica y constructiva; desplazar un cuadro eléctrico visualmente en Twinmotion no actualiza planos ni cuadros de cargas en Revit y genera incoherencias graves.
- **Identificadores persistentes (*GUID / Element ID*):** referencia interna que Datasmith utiliza para saber qué elemento de Revit se movió, se borró o se añadió en la siguiente sincronización sin duplicar objetos.
- **Gestión de estado y copias de seguridad (`.tm`):** disciplina de guardar versiones incrementales de la escena Twinmotion antes de ejecutar una re-sincronización mayor tras cambios estructurales o de catálogo en Revit.

#### Definiciones necesarias
- **Conexión *Direct Link*:** enlace activo establecido entre una vista 3D concreta de una sesión abierta de Revit y un contenedor de importación dentro de Twinmotion a través de una caché local compartida.
- **Sustitución o ruptura de enlace (*Broken Link*):** estado que se produce cuando cambia el nombre del archivo origen de Revit, se cambia la vista activa de sincronización o se borra la caché local, haciendo que Twinmotion deje de reconocer la relación con los objetos previos.

#### Ejemplo práctico realista
Durante el desarrollo de un supermercado de `1.850 m²`, el proyectista recibe una revisión de arquitectura que baja el falso techo de la zona de frutería de `3,40 m` a `3,10 m`. En Revit MEP, desplaza `24` luminarias colgantes y ajusta `42 m` de bandeja de alumbrado para evitar colisión con conductos de ventilación, validando en el cuadro de cargas y planos que la modificación no altera longitudes críticas ni caídas de tensión (verificadas en cálculo eléctrico aparte). Tras guardar una copia `Supermercado_v03.tm`, abre la vista `3D_EXP_Twinmotion` en Revit y pulsa **Synchronize** manualmente: en `18 segundos`, Twinmotion actualiza las cotas de las `24` luminarias y la bandeja manteniendo intactas las cámaras, la configuración de cielo y los materiales configurados la semana anterior.

#### Errores frecuentes
- Dejar activado *Auto-sync* en Revit mientras se modelan bandejas y uniones de tubos, provocando congelamientos continuos de pantalla en cada clic.
- Mover manualmente luminarias o cuadros dentro de Twinmotion para «acomodarlos al render» sin corregirlos en Revit MEP, desalineando por completo los planos de obra respecto a la imagen mostrada al cliente.
- Sincronizar accidentalmente desde otra vista 3D (p. ej. `{3D}` general) sobre un *Direct Link* existente, haciendo desaparecer elementos o volcando toda la instalación oculta dentro de la escena preparada.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué en modelos MEP medianos o grandes es preferible pulsar *Synchronize* manualmente en lugar de trabajar con *Auto-sync* activado?
2. ¿Qué ocurre a nivel documental y de obra si un visualizador corrige la posición de un cuadro o luminaria en Twinmotion sin hacerlo en Revit MEP?
3. ¿Qué precauciones conviene tomar antes de sincronizar una revisión masiva de familias eléctricas desde Revit?

---

### 3.2. Modos de agrupación (*Collapse*): Material frente a Jerarquía de objeto

#### Explicación breve y clara
Al vincular un modelo en Twinmotion a través de *Direct Link* o archivo `.udatasmith`, el cuadro de opciones de importación pregunta cómo agrupar los elementos mediante el parámetro **Collapse**: *Keep Hierarchy* (mantener jerarquía), *Collapse by Material* (colapsar por material) o *Collapse All* (colapsar todo). Esta única elección condiciona toda la operatividad posterior en Twinmotion. Mientras que en un edificio arquitectónico puede resultar eficiente fusionar todos los muros con el mismo ladrillo para mejorar el rendimiento de GPU, en una instalación eléctrica fusionar objetos por material suele destruir la capacidad de ocultar circuitos concretos, animar puertas de armario o reemplazar una luminaria defectuosa.

#### Conceptos clave
- ***Keep Hierarchy* (Mantener jerarquía):** conserva la estructura de árbol de categorías, familias y ejemplares de Revit en el grafo de escena (*Scene Graph*) de Twinmotion, permitiendo seleccionar individualmente cualquier cuadro, luminaria o tramo de bandeja.
- ***Collapse by Material* (Colapsar por material):** fusiona en una única malla combinada todos los objetos que comparten el mismo material asignado en Revit, reduciendo drásticamente llamadas de dibujo (*draw calls*) pero eliminando la selección individual.
- ***Collapse All* (Colapsar todo):** agrupa toda la vista vinculada en un solo objeto maestro; útil únicamente para bloques de entorno lejano o mobiliario secundario invariable, nunca para MEP activo.
- **Compromiso rendimiento vs. control (*Draw Calls* vs. Granularidad):** equilibrio técnico entre fluidez gráfica (menos objetos separados en escena) y capacidad de edición individual en elementos eléctricos críticos.

#### Definiciones necesarias
- ***Draw Call* (Llamada de dibujo):** instrucción enviada de la CPU a la GPU para renderizar una malla con un material; miles de tornillos o soportes individuales con *Keep Hierarchy* elevan las *draw calls* y reducen FPS aunque tengan pocos polígonos.
- **Grafo de escena (*Scene Graph*):** panel lateral jerárquico de Twinmotion que organiza contenedores, vínculos, carpetas, mallas individuales, luces y cámaras del proyecto.

#### Ejemplo práctico realista
En una sala técnica industrial, las envolventes de tres armarios CGBT, los soportes de pared y las carcasas de `12` pantallas estancas LED comparten en Revit un material genérico denominado `Metal - Gris estándar`. Si el proyectista vincula el modelo MEP usando *Collapse by Material*:
- Al intentar ocultar las luminarias para comprobar el frente del CGBT, desaparecen también los armarios y los soportes.
- Al sustituir en Twinmotion el bloque de luminaria por un objeto de librería con luz `.ies` integrada, no puede seleccionar individualmente las `12` pantallas porque todas forman una única malla soldada con los cuadros eléctricos.
La solución profesional consiste en importar el vínculo **MEP eléctrico en modo *Keep Hierarchy*** (previa limpieza de tornillería redundante en Revit) y reservar ***Collapse by Material*** para el modelo de **Arquitectura y Estructura**.

#### Errores frecuentes
- Importar todo el modelo MEP en modo *Collapse by Material* cuando los materiales de Revit aún son genéricos (`Por categoría` o `Default`), quedando imposible aislar sistemas eléctricos o luminarias.
- Usar *Keep Hierarchy* sobre un modelo arquitectónico con miles de baldosas, lamas y mobiliario genérico, saturando innecesariamente el grafo de escena y penalizando la fluidez de la GPU.
- Intentar cambiar el modo de *Collapse* en mitad de un proyecto avanzado sin saber que cambiar la estrategia de colapso en un vínculo existente obliga a reestructurar el grafo y puede restablecer transformaciones o asignaciones previas.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué diferencia operativa existe entre *Keep Hierarchy*, *Collapse by Material* y *Collapse All* al seleccionar elementos en Twinmotion?
2. ¿Por qué un modelo eléctrico MEP con luminarias, bandejas y cuadros debería evitar habitualmente *Collapse All* y tener cautela con *Collapse by Material*?
3. ¿En qué casos concretos del entorno del proyecto sí es recomendable aplicar *Collapse by Material* para ganar FPS?

---

### 3.3. Preservación de materiales, transformaciones y reemplazos al re-sincronizar

#### Explicación breve y clara
Uno de los mayores temores de cualquier equipo BIM es invertir cuatro horas ajustando texturas metálicas galvanizadas, difusores LED y acabados de mecanismos en Twinmotion y perder todo el trabajo cuando el proyectista eléctrico re-sincroniza un cambio desde Revit. Twinmotion dispone de mecanismos internos para recordar sustituciones de materiales y borrados/ocultaciones aplicados sobre un *Direct Link*, pero esta persistencia depende estrictamente de reglas técnicas claras: mantener estables los **nombres de material en Revit**, no alterar el **ID de familia o tipo** de manera destructiva y comprender la diferencia entre editar un material y mover un objeto en el espacio.

#### Conceptos clave
- **Persistencia por nombre de material:** al reemplazar en Twinmotion un material procedente de Revit (p. ej. `ELE_Galvanizado_Base`), Twinmotion asocia el nuevo acabado PBR a ese identificador mientras el nombre del material en Revit permanezca inalterado.
- **Regla de materiales específicos por función eléctrica:** evitar en Revit el uso masivo de `<Por categoría>` asignando materiales semánticos diferenciados (`ELE_Tubo_PVC`, `ELE_Bandeja_Acero`, `ELE_Cuadro_RAL7035`, `ELE_Difusor_LED`) para poder editarlos de forma selectiva incluso al actualizar.
- **Comportamiento de transformaciones al re-sincronizar:** si rotas o trasladas un objeto importado dentro de Twinmotion, una re-sincronización posterior puede devolverlo a la coordenada de Revit o generar discrepancia visual según las opciones de actualización/reemplazo; las posiciones oficiales deben ajustarse siempre en Revit.
- **Reemplazo de objetos (*Replace Object*) vs. familia mejorada:** Twinmotion permite sustituir ejemplares de Revit por activos de su biblioteca, pero si la familia de Revit se elimina y recrea con otro ID, el vínculo puede romperse.

#### Definiciones necesarias
- **Material semántico de exportación:** material asignado en Revit cuyo propósito principal no es su renderizado nativo en Revit, sino actuar como «etiqueta puente» limpia e inequívoca para recibir un material PBR calibrado en Twinmotion.
- **Re-mapeado accidental (*Material Reset*):** pérdida del acabado configurado en Twinmotion tras una sincronización provocada por renombrar materiales en Revit, cambiar de vista con otra configuración de fases o recrear familias con distinta geometría base.

#### Ejemplo práctico realista
Un ingeniero modela un cuarto de baja tensión en Revit MEP donde los cuadros `CGBT-01` y `CGBT-02`, la bandeja de fuerza `BF-1` y el soporte metálico `SOP-01` llevan inicialmente el material genérico `Acero`. En Twinmotion los diferencia manualmente con mucho esfuerzo, pero en la revisión 2 otro compañero en Revit edita la familia del cuadro y cambia el parámetro de material a `Chapa Lacada RAL 7035`. Al pulsar *Synchronize*, Twinmotion interpreta la aparición de un material nuevo (`Chapa Lacada RAL 7035`) y reinicia el acabado de los cuadros a un gris plano sin brillo PBR. Si desde el Bloque 3 el estudio hubiese asignado en plantilla `ELE_Envolvente_RAL7035` y `ELE_Bandeja_Galv`, la actualización geométrica de añadir un interruptor o ensanchar el cuadro `20 cm` habría preservado intactos los acabados PBR en Twinmotion.

#### Errores frecuentes
- Dejar en Revit el material `<By Category>` (Por categoría) en luminarias, mecanismos y conductos, lo que provoca que en Twinmotion todo comparta un único material gris neutro inseparable al sincronizar.
- Renombrar materiales en Revit entre entregas para «ordenar la biblioteca» sin advertir al responsable de visualización antes de re-sincronizar el *Direct Link*.
- Editar la posición de luminarias en Twinmotion en lugar de moverlas en Revit MEP, descubriendo tras la siguiente sincronización que han saltado de nuevo a su posición antigua (o quedaron desfasadas respecto al plano PDF).

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué asignar en Revit materiales diferenciados por función eléctrica (aunque parezcan similares visualmente en Revit) ahorra horas de retrabajo al re-sincronizar en Twinmotion?
2. ¿Qué sucede si renombramos en Revit un material cuyo acabado PBR ya estaba configurado en Twinmotion y pulsamos *Synchronize*?
3. ¿Cuál es la regla segura respecto a dónde debe moverse o rotarse un elemento eléctrico durante el ciclo del proyecto?

---

### 3.4. Coordinación de vínculos RVT múltiples y sistema de coordenadas

#### Explicación breve y clara
En proyectos de edificación terciaria o industrial medianos y grandes, el modelo eléctrico (`ELE.rvt`) casi nunca vive en un único archivo monolítico junto con arquitectura (`ARQ.rvt`), estructura (`EST.rvt`) y climatización (`HVAC.rvt`): trabaja mediante **vínculos RVT** federados. Al llevar ese entorno a Twinmotion mediante *Direct Link*, surgen dos decisiones críticas: (1) sincronizar cada disciplina en un *Direct Link* independiente vs. sincronizar desde un modelo contenedor con vínculos visibles, y (2) alinear el **Origen Interno** frente a las **Coordenadas Compartidas (*Shared Coordinates*)** para evitar que el modelo eléctrico aparezca volando a kilómetros del edificio arquitectónico o sufra temblores numéricos (*Z-fighting* / imprecisión de coma flotante).

#### Conceptos clave
- **Vínculos independientes en Twinmotion:** abrir `ARQ.rvt` en Revit (con vínculo eléctrico apagado) y enlazarlo por *Direct Link 1* (*Collapse by Material*), y abrir `ELE.rvt` (con vínculo arquitectónico apagado) en *Direct Link 2* (*Keep Hierarchy*). Permite actualizar solo electricidad en segundos sin re-procesar toda la arquitectura.
- **Sincronización desde archivo federado:** alternativa donde `ELE.rvt` muestra temporalmente `ARQ.rvt` vinculado en la vista de exportación; más simple de encuadrar en un solo enlace, pero obliga a usar un mismo modo de *Collapse* para ambas disciplinas y ralentiza cada actualización eléctrica.
- **Origen Interno vs. Coordenadas Compartidas (UTM / Topográficas):** Twinmotion trabaja óptimamente cerca del origen de coordenadas `(0, 0, 0)`. Si un proyecto tiene coordenadas reales UTM a `500.000 m` del origen y se exporta con coordenadas compartidas lejanas sin compensar, los vértices sufren pérdida de precisión gráfica y temblor en cámara (*floating point jitter*).
- **Verificación de alineación espacial cruzada:** comprobación visual inmediata de que pilares, falsos techos y luminarias empotradas coinciden al milímetro al superponer los dos *Direct Links* en Twinmotion.

#### Definiciones necesarias
- **Modelo federado BIM:** conjunto coordinado de modelos disciplinares independientes (Arquitectura, Estructura, Eléctrica, Clima) referenciados a un sistema común de coordenadas y niveles.
- **Imprecisión por coordenadas lejanas (*Floating Point Precision Error*):** distorsión visual, parpadeo de caras (*Z-fighting*) o desaparición de sombras que ocurre en motores 3D en tiempo real cuando la geometría se sitúa a decenas o cientos de kilómetros del punto `(0, 0, 0)`.

#### Ejemplo práctico realista
Un estudio coordina un complejo logístico de `8.400 m²` con dos archivos Revit vinculados por coordenadas compartidas georreferenciadas (sitio topográfico a `X = 432.150 m`, `Y = 4.478.200 m`). Al sincronizar `ARQ.rvt` desde su vista interna y `ELE.rvt` usando coordenadas reales lejanas, o bien al cambiar el origen entre ambos archivos:
- En un caso, las bandejas de alumbrado aparecen desplazadas `1.450 m` respecto a la nave porque un archivo usó *Project Base Point* y el otro *Internal Origin*.
- En el otro, las luminarias de techo tiemblan al orbitar la cámara por estar a más de `4.000 km` del origen `0,0,0` de Twinmotion.
La solución técnica consiste en mantener ambos archivos coordinados respecto al punto base del edificio cercano al origen interno local (o verificar la opción de alineación/origen de exportación en Datasmith según versión), enlazando `ARQ.rvt` en un *Direct Link* (*Collapse by Material*) y `ELE.rvt` en un segundo *Direct Link* (*Keep Hierarchy*), comprobando la coincidencia exacta en un pilar de referencia `(Eje A-1)` en ambos enlaces.

#### Errores frecuentes
- Dejar encendido el vínculo `ARQ.rvt` dentro de la vista de exportación de `ELE.rvt` cuando ya se ha enlazado `ARQ.rvt` por separado en Twinmotion, generando geometría duplicada superpuesta (*Z-fighting*) y el doble de carga en GPU.
- Enlazar múltiples disciplinas sin verificar previamente en Revit que comparten exactamente el mismo origen de referencia, provocando que las luminarias floten fuera de la parcela en Twinmotion.
- Confiar en que «si en Twinmotion se ve cerca del techo, ya no hay interferencia», omitiendo el análisis real de colisiones (*Interference Check* / Navisworks / Revit) y la verificación normativa de recorridos.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué ventajas técnicas ofrece sincronizar `ARQ.rvt` y `ELE.rvt` mediante dos *Direct Links* separados en Twinmotion frente a un único enlace con todo activado?
2. ¿Qué síntomas visuales aparecen en Twinmotion si un modelo eléctrico llega georreferenciado a miles de kilómetros del origen `(0, 0, 0)`?
3. ¿Cómo se detecta y evita la duplicación de geometría arquitectónica al trabajar con vínculos RVT múltiples?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** sigue una dinámica de laboratorio BIM progresivo: diagnóstico de fallos reales de sincronización, exposición técnica demostrativa, laboratorio de *Direct Links* en paralelo y resolución de un caso industrial multi-vínculo.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
|---|---:|---|---|
| **1. Apertura y activación del fallo de sincronización** | 20 min | Retoma los archivos del Tema 1; lanza la evaluación diagnóstica breve y dirige la **Actividad 1** mostrando una escena real donde el modo *Collapse by Material* bloqueó la edición de luminarias y cuadros. | Diagnostica qué ocurrió en la escena proyectada, deduce la causa del bloqueo en el *Scene Graph* y comparte hipótesis en parejas. |
| **2. Microlearning técnico I (Flujo Direct Link y modos *Collapse*)** | 30 min | Expone apartados 3.1 y 3.2: sincronización manual vs. *Auto-sync*, unidireccionalidad geométrica Revit → Twinmotion y demostración comparada de *Keep Hierarchy*, *Collapse by Material* y *Collapse All*. | Registra en su matriz comparativa qué modo de agrupación corresponde a arquitectura, estructura, mobiliario y cada categoría eléctrica MEP. |
| **3. Microlearning técnico II (Preservación de materiales y múltiples RVT)** | 30 min | Expone apartados 3.3 y 3.4: estrategia de materiales semánticos en Revit, persistencia tras cambios geométricos y coordinación de vínculos independientes `ARQ.rvt + ELE.rvt` sin duplicidades ni desfases de origen. | Comprueba sobre un ejemplo en pantalla cómo afecta el renombrado de materiales o la duplicación de vínculos RVT y anota la secuencia segura de sincronización. |
| **4. Actividad práctica de aplicación técnica** | 50 min | Guía la **Actividad 2** (sincronización dual `ARQ + ELE`, modificación real en Revit y auditoría de persistencia tras re-sincronizar); supervisa salas/puestos y resuelve fallos de vínculo o coordenadas. | Configura dos *Direct Links* independientes con modos *Collapse* diferenciados, aplica 3 acabados iniciales en Twinmotion, modifica trazado/luminarias en Revit, re-sincroniza y audita qué se preservó. |
| **5. Análisis de caso práctico** | 45 min | Presenta el caso **Centro Logístico Intermodal del Henares (Guadalajara)** con sus 3 vínculos RVT, incidencia de coordenadas a `1.450 m` y pérdida de materiales; orienta a los equipos en el diagnóstico. | En equipos de 3-4 técnicos, diagnostica las causas de desfase y pérdida de acabados y diseña el plan de normalización de vínculos, coordenadas y materiales. |
| **6. Puesta en común y contraste técnico** | 25 min | Modera la exposición de 2-3 equipos, compara decisiones sobre nomenclatura de materiales y estrategia multi-vínculo, y corrige falsas creencias sobre edición geométrica en Twinmotion. | Expone su propuesta de flujo federado y debate con otros equipos los pros y contras de 1 enlace federado frente a 2 enlaces disciplinares. |
| **7. Transferencia al proyecto real y cierre** | 40 min | Dinamiza la **Actividad 3** (estándar de materiales y protocolo Direct Link para su proyecto, 20 min); aplica la prueba sumativa breve, autoevaluación y enlaza con el **Tema 3 (Materiales PBR)** (20 min). | Define la tabla de materiales semánticos de su proyecto integrador/laboral, realiza la evaluación de cierre y guarda la escena sincronizada lista para texturizado PBR. |
| **TOTAL** | **240 min** | — | — |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «El desastre del *Collapse by Material*»

- **Nombre:** Autopsia de un *Scene Graph* eléctrico bloqueado
- **Objetivo:** Comprender de forma intuitiva y visual las consecuencias operativas de elegir un modo de agrupación (*Collapse*) inadecuado al sincronizar un modelo eléctrico MEP.
- **Instrucciones para el alumnado:**
  1. Examinad la captura y archivo de demostración de una sala técnica donde todas las familias eléctricas en Revit compartían dos materiales por defecto (`Metal gris` y `Plástico blanco`) y fueron sincronizadas con *Collapse by Material*.
  2. Identificad en 7 minutos tres tareas habituales ante el cliente que ahora resultan imposibles o destructivas en esa escena: (a) ocultar la bandeja superior para mostrar el interior de una envolvente; (b) reemplazar únicamente las `8` luminarias de emergencia por otro modelo; (c) cambiar a negro mate la bandeja vista sin teñir también la chapa del CGBT.
  3. Proponed en plenario qué dos ajustes previos en Revit y en las opciones de importación habrían evitado el problema.
- **Materiales necesarios:** Escena de demostración con grafo bloqueado (o capturas detalladas de *Scene Graph* y materiales en pantalla), ficha de trabajo.
- **Tiempo estimado:** 15 minutos (integrado en la Fase 1).
- **Rol del formador:** Mostrar en directo qué ocurre al pulsar *Replace Object* o cambiar color sobre una malla colapsada por material y recoger las conclusiones del grupo.
- **Producto o entregable esperado:** Lista de 3 riesgos de *Collapse by Material* con material genérico y regla de oro para MEP.
- **Criterios de éxito:** El 100 % del grupo identifica la relación directa entre materiales genéricos en Revit + *Collapse by Material* = pérdida de control individual sobre equipos y luminarias.

---

### Actividad 2 (Aplicación técnica): «Doble Direct Link (`ARQ + ELE`) y prueba de fuego de re-sincronización»

- **Nombre:** Sincronización federada multi-vínculo y auditoría de persistencia tras cambios en Revit MEP
- **Objetivo:** Configurar dos enlaces *Direct Link* independientes (Arquitectura y Electricidad), ejecutar modificaciones geométricas reales en Revit MEP y verificar la conservación de acabados y alineación espacial tras re-sincronizar.
- **Instrucciones para el alumnado:**
  1. En el archivo arquitectónico `ARQ_NaveOficinas_Base.rvt`, verificad la vista `3D_TM_ARQ` (con cualquier vínculo MEP oculto) y sincronizadla en Twinmotion como **Direct Link 1** seleccionando **`Collapse by Material`**.
  2. En el archivo eléctrico `ELE_NaveOficinas_Base.rvt`, verificad la vista `3D_TM_ELE` (con el vínculo `ARQ` **desactivado** para no duplicar geometría) y sincronizadla como **Direct Link 2** seleccionando **`Keep Hierarchy`**. Comprobad que ambos modelos coinciden con precisión en techos y paredes.
  3. En Twinmotion, asignad 3 acabados provisionales de contraste sobre los materiales semánticos de `ELE` (p. ej. naranja al material de bandejas, azul oscuro a cuadros y amarillo brillante a difusores de luminarias) y guardad la escena como `Practica_T2_v01.tm`.
  4. Volved a Revit `ELE`: desplazad `6` luminarias `0,80 m` en planta, elevad `0,25 m` un tramo de bandeja y añadid `2` luminarias nuevas del mismo tipo; **no renombréis materiales**. Pulsad **Synchronize** manualmente.
  5. Auditad en Twinmotion: ¿se movieron las `6` luminarias?, ¿aparecieron las `2` nuevas heredando el amarillo en el difusor?, ¿permanecieron intactos el naranja de la bandeja modificada y el azul de los cuadros? Documentad el resultado.
- **Materiales necesarios:** Modelos de práctica `ARQ_NaveOficinas_Base.rvt` y `ELE_NaveOficinas_Base.rvt` (o archivos `.udatasmith` secuenciales v1/v2 de respaldo para equipos sin doble sesión Revit), Twinmotion y hoja de auditoría.
- **Tiempo estimado:** 50 minutos (Fase 4).
- **Rol del formador:** Revisar que el vínculo `ARQ` esté apagado en `ELE` para evitar duplicidad, comprobar que nadie active *Auto-sync* accidentalmente y validar los resultados de la re-sincronización.
- **Producto o entregable esperado:** Escena `Practica_T2_v02.tm` con ambos enlaces alineados + tabla de auditoría de persistencia de cambios y FPS comparados.
- **Criterios de éxito:** Cero geometría duplicada (*Z-fighting*), alineación exacta entre luminarias y falso techo, actualización automática de las `6` luminarias movidas y `2` nuevas, y preservación al 100 % de los acabados previamente aplicados en Twinmotion.

---

### Actividad 3 (Transferencia a proyecto real): «Estándar de materiales puente y protocolo de federación Direct Link»

- **Nombre:** Catálogo mínimo de materiales semánticos MEP y protocolo de sincronización del estudio
- **Objetivo:** Definir una estructura estandarizada de materiales en Revit MEP y una hoja de ruta multi-vínculo replicable para el proyecto real o integrador del alumnado.
- **Instrucciones para el alumnado:**
  1. Diseñad en la plantilla de la Sección 8 vuestro **Catálogo de materiales puente MEP** (mínimo 8 materiales distintos: bandejas vistas, bandeja oculta/técnica, tubo acero/EMT, tubo PVC, envolvente cuadro general, carcasa luminaria, difusor LED emisivo, placas/mecanismos) fijando una convención de nombres estable que nadie pueda renombrar tras la primera sincronización.
  2. Definid la **arquitectura de *Direct Links*** de vuestro proyecto (cuántos enlaces, desde qué vista de cada `.rvt`, qué modo de *Collapse* lleva cada uno y quién autoriza el clic en *Synchronize*).
  3. *(Apoyo opcional con IA)*: Si usáis ChatGPT o Claude para generar una lista de verificación rápida de control de cambios entre la revisión R1 y R2 de Revit (usando únicamente códigos de familia/material ficticios o genéricos, sin datos confidenciales del cliente), revisad manualmente que el listado distinga con precisión qué valida Revit/cálculo frente a qué actualiza Twinmotion.
- **Materiales necesarios:** Plantilla técnica práctica (Sección 8), acceso opcional a asistente de IA bajo criterios de anonimización.
- **Tiempo estimado:** 20 minutos (integrado en la Fase 7).
- **Rol del formador:** Verificar que los nombres de materiales propuestos cubren por separado carcasas frente a difusores de luminaria y armarios frente a bandejas, evitando colisiones futuras al texturizar en el Tema 3.
- **Producto o entregable esperado:** Tabla estándar de nomenclatura de materiales puente + esquema de enlaces *Direct Link* del proyecto propio.
- **Criterios de éxito:** El catálogo separa al menos 8 familias materiales clave sin ambigüedades, establece prohibición de renombrado tras el hito 0 y protege la confidencialidad del proyecto.

---

## 6. Caso práctico

### Caso: Centro Logístico Intermodal del Henares (Guadalajara) — El edificio fantasma y los materiales perdidos

#### Contexto empresarial
**TecnoVía Ingeniería MEP, S.L.** desarrolla las instalaciones de una nueva plataforma logística de `8.400 m²` en Guadalajara (`zona de muelles + 1.200 m² de oficinas en entreplanta + centro de seccionamiento/CGBT`). El proyecto se trabaja en BIM federado con tres estudios externos: arquitectura (`ARQ_Henares.rvt`), estructura metálica y prefabricada (`EST_Henares.rvt`) e instalaciones eléctricas (`ELE_Henares.rvt`). El promotor ha solicitado revisar semanalmente en Twinmotion el avance de luminarias lineales de pasillos de estanterías, bandejas de gran capacidad y señalización de emergencia de muelles.

#### Situación o problema
Durante la segunda semana de trabajo conjunto, la coordinadora BIM del proyecto detecta tres graves anomalías al actualizar la escena de Twinmotion para la reunión con propiedad:
1. **Desfase espacial de `1.450 metros`:** al vincular `ELE_Henares.rvt` junto con `ARQ_Henares.rvt`, todas las bandejas portacables, proyectores y cuadros eléctricos aparecieron flotando en medio del campo, a `1.450 m` al noreste de la nave y con un giro aproximado de `14°`, haciendo imposible visualizar las instalaciones dentro del edificio.
2. **Temblor gráfico y duplicidad en pilares:** cuando lograron traer manualmente los archivos en una prueba paralela desde un modelo federado, las cerchas metálicas y los cerramientos mostraban manchas parpadeantes (*Z-fighting*) en pantalla y los bordes de los cuadros vibraban ligeramente al acercar la cámara.
3. **Pérdida total de los acabados configurados:** en la entrega de la semana 1, el especialista en visualización había invertido 5 horas ajustando las texturas galvanizadas, el difusor LED y los RAL corporativos de los cuadros en Twinmotion. En la semana 2, un proyectista eléctrico decidió «limpiar» la librería de Revit renombrando los materiales (`Metal galvanizado` pasó a `04_ELE_Galvanizado_Bandeja`, y `Emisivo` pasó a `LED_4000K_General`), mientras otro movió `12` proyectores directamente en Twinmotion para cuadrarlos con una vista sin avisar al autor de Revit. Al sincronizar en semana 2, todos los acabados de Twinmotion desaparecieron y los `12` proyectores saltaron de vuelta a una posición antigua que colisionaba con la cercha metálica.

#### Datos disponibles

| Archivo / Parámetro | Configuración observada en semana 2 | Observación crítica |
|---|---|---|
| **`ARQ_Henares.rvt`** | Origen interno cerca del eje `A-1`; vinculado en Twinmotion con *Collapse All* | Imposible ocultar falsos techos de oficinas para enseñar bandejas superiores |
| **`EST_Henares.rvt`** | Vinculado dentro de `ARQ` y además activado dentro de la vista 3D de `ELE` | Duplicación completa de estructura en Twinmotion (origen del *Z-fighting*) |
| **`ELE_Henares.rvt`** | Exportado desde vista `3D_Coordinacion` con *Auto-sync* activado; punto base movido respecto al origen interno (`X = +1.450 m`, `Rotación = 14°`) y coordenadas UTM lejanas en sitio compartido | Generó el desplazamiento espacial, bloqueos cada vez que el técnico trazaba un tubo y pérdida de fluidez |
| **Gestión de materiales Revit** | `6` materiales renombrados entre la Revisión 1 y la Revisión 2 | Rompió el vínculo de persistencia en Twinmotion |
| **Ajustes en Twinmotion** | `12` proyectores reubicados solo dentro de Twinmotion | No constan en planos PDF de Revit ni en la verificación fotométrica DIALux |

#### Preguntas de análisis
1. ¿Qué combinación exacta de errores en Revit y en Datasmith provocó: (a) el desplazamiento de `1.450 m` con giro de `14°`, (b) el parpadeo en cerchas metálicas y (c) el temblor de vértices?
2. ¿Por qué usar *Collapse All* en `ARQ_Henares.rvt` bloquea la revisión visual de instalaciones en la entreplanta de oficinas?
3. ¿Qué consecuencias de coordinación y validez técnica habría tenido enseñar en la reunión los `12` proyectores movidos únicamente en Twinmotion si el cliente los hubiera aprobado?
4. ¿Qué protocolo estricto debe implantar **TecnoVía Ingeniería MEP** para que la entrega semanal (Semana 3 en adelante) tome menos de 10 minutos sin perder materiales ni desalinear disciplinas?

#### Tarea a realizar
En equipos de 3-4 personas actuando como comité de coordinación BIM de **TecnoVía Ingeniería MEP**, redactad un **Plan de Normalización de Sincronización Federada** que contenga:
1. **Esquema correcto de los 3 enlaces *Direct Link*** (`ARQ`, `EST`, `ELE`), indicando para cada uno: qué vínculos deben permanecer apagados en su vista de exportación de Revit, qué modo de *Collapse* se aplica y por qué.
2. **Procedimiento de corrección de origen y coordenadas** entre los tres `.rvt` antes de enlazar en Twinmotion (eliminando desfases de `1.450 m`, rotaciones y temblor por coordenadas lejanas).
3. **Regla innegociable de gobierno geométrico y de materiales** (quién puede cambiar nombres de material, desactivación de *Auto-sync*, copias de seguridad `.tm` y prohibición de mover luminarias/equipos en Twinmotion sin actualizar Revit y validar nuevamente en DIALux y cálculo eléctrico).
4. **Checklist de 6 comprobaciones previas** a pulsar *Synchronize* cada viernes antes de la reunión semanal con propiedad.

#### Posibles soluciones o criterios de análisis
- **Arquitectura de enlaces sin duplicidades:** Generar tres *Direct Links* independientes en Twinmotion (`DL_ARQ`, `DL_EST`, `DL_ELE`), asegurándose de que en la vista `3D_TM` de cada archivo estén **desactivados todos los vínculos RVT de las otras disciplinas** para eliminar la doble estructura y el *Z-fighting*.
- **Modos *Collapse* diferenciados:**
  - `ARQ_Henares.rvt`: **`Collapse by Material`** (permite seleccionar y ocultar la categoría/material de falso techo completo para enseñar las bandejas superiores sin arrastrar miles de objetos sueltos). No usar *Collapse All*.
  - `EST_Henares.rvt`: **`Collapse by Material`** (cerchas y pilares unificados por acero/hormigón para máximas FPS).
  - `ELE_Henares.rvt`: **`Keep Hierarchy`** (control individual por cuadro, luminaria y tramo de bandeja).
- **Resolución de coordenadas:** Comprobar en Revit que los tres modelos comparten el mismo origen de coordenadas local respecto al edificio (p. ej. alineando por coordenadas compartidas respecto a un *Project Base Point* o origen común situado cerca del `(0,0,0)` en Twinmotion en lugar de coordenadas topográficas lejanas de cientos de kilómetros, verificando el comportamiento exacto según la versión instalada del conector Datasmith). Validar en Twinmotion que el pilar `A-1` y el cuadro `CGBT` coinciden exactamente antes de guardar la base `v01`.
- **Gobernanza de cambios y materiales:** Desactivar *Auto-sync*; congelar el listado de nombres de materiales puente de Revit desde la semana 1 (si se requiere mejorar la semántica, hacerlo antes de la primera texturización en Twinmotion); prohibir reubicar luminarias en Twinmotion: cualquier movimiento de los `12` proyectores se ejecuta en Revit MEP, se verifica en DIALux (iluminancia y uniformidad de pasillos según normativa aplicable vigente) y se re-sincroniza por *Direct Link* previo guardado de copia incremental `.tm`.

#### Preguntas de reflexión final
1. ¿Qué coste oculto en horas de equipo supone cambiar la convención de nombres de materiales en Revit a mitad de fase de visualización sin un protocolo BIM acordado?
2. Si el cliente pide durante la reunión mover cuatro luminarias porque «quedan cerca de un rótulo», ¿cómo debe gestionarse esa petición en Twinmotion sin crear una falsa versión de obra?

---

## 7. Evaluación

### Evaluación diagnóstica breve (5 minutos, inicio de sesión)
Cuestionario rápido individual (3 preguntas):
1. Si modificas la altura de una luminaria dentro de Twinmotion tras haberla sincronizado desde Revit, ¿qué ocurre con el plano de alumbrado de Revit MEP?
   - a) Se actualiza automáticamente en tiempo real en Revit.
   - b) No cambia en Revit; se crea una incoherencia entre modelo visual y planos constructivos. *(Correcta)*
   - c) Se actualiza solo cuando cierras Twinmotion.
2. ¿Cuál de los tres modos de agrupación (*Collapse*) conserva el árbol de objetos individuales para poder sustituir o mover selectivamente una luminaria o abrir un cuadro eléctrico en Twinmotion?
   - a) *Collapse All*.
   - b) *Collapse by Material*.
   - c) *Keep Hierarchy*. *(Correcta)*
3. Cuando en una escena de Twinmotion aparecen superficies metálicas parpadeando con triángulos superpuestos (*Z-fighting*), ¿cuál suele ser la causa más frecuente en un proyecto multi-vínculo? *(Respuesta corta abierta)*.

### Evaluación formativa durante la sesión
- Observación estructurada del formador durante la Actividad 2 y el Caso práctico mediante lista de cotejo:
  - Desactiva *Auto-sync* y ejecuta sincronizaciones controladas por hito.
  - Combina *Collapse by Material* (ARQ/EST) con *Keep Hierarchy* (ELE) de forma justificada.
  - Apaga vínculos RVT redundantes dentro de cada vista de exportación para impedir geometría duplicada.
  - Mantiene nombres de materiales estables y preserva acabados tras modificar posiciones y añadir luminarias en Revit.

### Evaluación sumativa al final
Dos evidencias combinadas:
1. **Entregable técnico práctico (60 %):** Escena `Practica_T2_v02.tm` con doble *Direct Link* (`ARQ + ELE`) actualizado sin pérdida de acabados ni duplicidades + Plan de Normalización del caso *Centro Logístico del Henares*.
2. **Entregable de transferencia (40 %):** Catálogo estándar de materiales puente y protocolo de federación *Direct Link* de la Actividad 3 + mini-test de 4 ítems sobre sincronización y coordenadas.

### Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
| :--- | :--- | :--- | :--- | :--- |
| **Control de flujo *Direct Link* y unidireccionalidad** | Usa *Auto-sync* sin control o mueve equipos eléctricos en Twinmotion generando incoherencias con planos y cálculos. | Sincroniza manualmente, pero olvida guardar copias previas o no documenta la relación con revisiones de Revit/DIALux. | Ejecuta sincronizaciones manuales controladas, mantiene Revit como fuente geométrica única y valida cambios frente a planos y cálculo. | Diseña un flujo versionado robusto con copias `.tm`, hitos de sincronización y trazabilidad explícita hacia Revit MEP y DIALux. |
| **Selección de modos *Collapse*** | Aplica *Collapse All* o *Collapse by Material* indistintamente al modelo MEP impidiendo editar luminarias o cuadros. | Usa *Keep Hierarchy* en electricidad, pero también en toda la arquitectura sobrecargando innecesariamente el rendimiento. | Selecciona *Keep Hierarchy* para MEP eléctrico y *Collapse by Material* para arquitectura/estructura de forma coherente. | Optimiza el equilibrio entre *draw calls* y control granular, justificando excepciones (p. ej., bandejas/mobiliario secundario) con métricas de rendimiento. |
| **Preservación de materiales y transformaciones** | Renombra materiales destructivamente o pierde los acabados PBR asignados tras cada actualización. | Conserva parte de los materiales, pero usa `<By Category>` en elementos críticos provocando ediciones globales no deseadas. | Mantiene nomenclatura estable de materiales puente en Revit y preserva acabados en Twinmotion tras modificar y añadir elementos. | Estandariza un catálogo completo de materiales puente MEP en plantilla Revit que blinda la persistencia ante iteraciones del equipo. |
| **Coordinación multi-vínculo y coordenadas** | Sincroniza disciplinas con vínculos cruzados activos (*Z-fighting*) o presenta desfases espaciales no resueltos. | Detecta el desfase o duplicidad, pero aplica correcciones manuales aproximadas moviendo edificios a ojo en Twinmotion. | Coordina múltiples enlaces `ARQ/EST/ELE` sin duplicidades, verifica alineación por origen común y evita coordenadas lejanas problemáticas. | Implementa un protocolo completo de federación multi-RVT libre de *Z-fighting*, temblor numérico y desajustes angulares entre disciplinas. |

### Actividad de autoevaluación (5 minutos al cierre)
Cada participante completa en el campus o cuaderno:
1. *¿Qué ajuste previo en la vista y materiales de Revit MEP considero ahora indispensable antes de lanzar la primera sincronización con Twinmotion?*
2. *Si mañana recibo un archivo `ARQ.rvt` actualizado y un `ELE.rvt` actualizado, ¿en qué orden exacto sincronizo y qué tres verificaciones visuales hago antes de enviar imágenes al cliente?*
3. *Evalúa de 1 a 5 tu confianza para diagnosticar por qué desapareció un material o se duplicó un muro tras una re-sincronización.*

---

## 8. Materiales y recursos

### Guion estructurado de diapositivas (Slide 1 a Slide 8)

| Diapositiva | Título | Contenido clave y mensaje visual |
|---|---|---|
| **Slide 1** | Portada: Sincronización viva MEP con *Direct Link* | Título del tema, Bloque 5 (2/10), puente desde el Tema 1, objetivos de aprendizaje y agenda de 240 minutos. |
| **Slide 2** | Anatomía de un cambio en proyecto: Revit ↔ Twinmotion | Diagrama del flujo unidireccional de geometría (Revit MEP como fuente única de verdad → *Synchronize* → Twinmotion preserva escena, cámaras y materiales). |
| **Slide 3** | *Auto-sync* vs. sincronización manual controlada | Cuadro comparativo de riesgos en modelos MEP complejos, papel de la caché local y regla de guardado incremental `.tm`. |
| **Slide 4** | El poder oculto del *Collapse* | Comparativa visual de *Scene Graph* y capacidades de edición entre *Keep Hierarchy*, *Collapse by Material* y *Collapse All* sobre cuadros y luminarias. |
| **Slide 5** | Cómo no perder tus materiales al re-sincronizar | Regla de estabilidad de nombres en Revit: pasar de `<By Category>` a materiales puente semánticos (`ELE_Bandeja_Galv`, `ELE_Difusor_LED`, etc.). |
| **Slide 6** | Modelos federados: múltiples RVT y coordenadas | Esquema de enlaces separados (`DL_ARQ` + `DL_EST` + `DL_ELE`), prevención de geometría duplicada (*Z-fighting*) y gestión de origen cercano a `(0,0,0)`. |
| **Slide 7** | Caso práctico: Centro Logístico Intermodal del Henares | Mapa de incidencias (`1.450 m` de desfase, rotación `14°`, duplicidad en cerchas y renombrado de `6` materiales) y misión de normalización en equipos. |
| **Slide 8** | Protocolo de viernes y puente al Tema 3 | Checklist de 6 puntos antes de sincronizar y anticipo del **Tema 3**: mapeado PBR, rugosidades metálicas, emisores LED y códigos *exposed MEP*. |

### Ficha de trabajo del alumnado
Documento estructurado en 4 bloques prácticos:
1. **Bloque A (Comparativa *Collapse*):** Tabla de decisión por disciplina (`ARQ`, `EST`, `MEP-Cuadros`, `MEP-Luminarias`, `MEP-Bandejas`, `Entorno`).
2. **Bloque B (Hoja de auditoría de re-sincronización):** Registro de las `6` luminarias desplazadas, `2` nuevas añadidas, modificación de bandeja y verificación de materiales persistentes.
3. **Bloque C (Caso Henares):** Diagrama de vínculos sin duplicación y corrección de coordenadas/materiales.
4. **Bloque D (Transferencia):** Catálogo de materiales puente para su proyecto propio.

### Plantilla técnica práctica: Catálogo de Materiales Puente y Protocolo Direct Link

```markdown
# ESTÁNDAR DE SINCRONIZACIÓN FEDERADA REVIT MEP <-> TWINMOTION
Proyecto: ___________________________  Coordinador BIM: __________________  Versión: ______

1. ESTRUCTURA DE ENLACES DIRECT LINK (1 enlace = 1 disciplina limpia)
| Nombre enlace en TM | Archivo Revit origen | Vista 3D dedicada | Vínculos apagados en esa vista | Modo Collapse elegido |
| :--- | :--- | :--- | :--- | :--- |
| DL_01_ARQ | ARQ_Modelo.rvt | 3D_EXP_TM_ARQ | EST, ELE, HVAC | Collapse by Material |
| DL_02_EST | EST_Modelo.rvt | 3D_EXP_TM_EST | ARQ, ELE, HVAC | Collapse by Material |
| DL_03_ELE | ELE_Modelo.rvt | 3D_EXP_TM_ELE | ARQ, EST, HVAC | Keep Hierarchy |

2. CATÁLOGO CONGELADO DE MATERIALES PUENTE MEP (NO renombrar tras la Sync 01)
- Bandejas portacables vistas:    ELE_MAT_Bandeja_Galv_Vista
- Tubos metálicos / EMT vistos:   ELE_MAT_Tubo_EMT_Acero
- Tubos PVC / libres de halóg.:   ELE_MAT_Tubo_PVC_RAL7035
- Envolvente tableros / CGBT:     ELE_MAT_Cuadro_RAL7035
- Carcasa / cuerpo luminaria:     ELE_MAT_Lum_Cuerpo_Alu
- Difusor / óptica emisora LED:   ELE_MAT_Lum_Difusor_LED
- Placas / marcos mecanismos:     ELE_MAT_Mecanismo_Marco
- Teclas / cuerpo mecanismos:     ELE_MAT_Mecanismo_Tecla

3. CHECKLIST PREVIO A PULSAR "SYNCHRONIZE"
[ ] Copia de seguridad guardada de la escena Twinmotion (Proyecto_vXX.tm)
[ ] Auto-sync DESACTIVADO en Revit
[ ] Vista activa confirmada: 3D_EXP_TM_ELE (Detail Level = Fine; sin DWG ni vínculos cruzados)
[ ] Cambios geométricos validados en Revit y contrastados con estudio DIALux / cálculo vigente
[ ] Cero movimientos manuales de equipos o luminarias hechos solo en Twinmotion sin reflejo en Revit
```

### Lecturas y recursos recomendados
*(Nota de validación previa: antes de utilizar o distribuir en aula, el formador y el alumnado deben comprobar en los portales oficiales de Epic Games y Autodesk las especificaciones vigentes de la versión exacta de Twinmotion y Revit instalada, dado que los menús de Datasmith Direct Link y gestión de orígenes evolucionan entre versiones).*
- **Documentación oficial de Twinmotion (Epic Games):** secciones *Managing Geometry / Collapse options*, *Datasmith Direct Link workflow* y *Scene Graph & Replacing Objects* (verificar la versión actual del manual).
- **Documentación oficial de Autodesk Revit:** gestión de *Project Base Point*, *Survey Point*, *Internal Origin* y trabajo con modelos vinculados (*Revit Links* por disciplina y plantillas de vista).
- **Guías técnicas BIM sobre federación de modelos (p. ej. recomendaciones ISO 19650 / guías BIM nacionales aplicables):** consultar la normativa o estándar de nomenclatura vigente adoptado por el cliente o país del proyecto.
- **Vídeos formativos complementarios:** demostraciones oficiales de Epic Games sobre actualización en vivo con *Direct Link* entre múltiples archivos de origen y resolución de desfases de coordenadas (validar idioma, vigencia y versión antes de reproducir).

### Glosario de términos clave

| Término | Definición |
|---|---|
| ***Auto-sync*** | Modo de sincronización continua en Datasmith que actualiza la escena en Twinmotion automáticamente tras cada edición en Revit; desaconsejado durante modelado intensivo MEP. |
| ***Collapse All*** | Opción de importación que fusiona todos los elementos de un enlace en una única malla sólida; inutilizable para elementos eléctricos que requieran edición o sustitución individual. |
| ***Collapse by Material*** | Modo de agrupación que combina geometrías que comparten un mismo material de Revit en mallas únicas por material, optimizando *draw calls* pero impidiendo editar ejemplares sueltos. |
| ***Draw Call*** | Petición enviada de la CPU a la tarjeta gráfica para dibujar una malla con un material asignado; su exceso degrada la fluidez en tiempo real. |
| ***Keep Hierarchy*** | Modo de importación que preserva el árbol jerárquico de familias y ejemplares de Revit dentro de Twinmotion, imprescindible para gestionar luminarias, cuadros y canalizaciones individuales. |
| **Material puente (semántico)** | Material definido con nombre estable e inequívoco en Revit cuya función principal es permitir la asignación selectiva y persistente de acabados PBR en Twinmotion entre sincronizaciones. |
| **Modelo federado** | Conjunto coordinado de archivos disciplinares separados (Arquitectura, Estructura, Eléctrica, Clima) enlazados mediante coordenadas comunes en un entorno BIM. |
| ***Z-fighting*** | Artefacto visual de parpadeo o manchas triangulares en superficies provocado por dos mallas coplanares superpuestas, típico cuando se exporta un mismo vínculo RVT duplicado. |

---

## 9. Adaptaciones

### Sesión presencial
- **Laboratorio en red / local:** Preparar en cada puesto de trabajo una carpeta local rápida (`C:\Curso_TM_T2\`) evitando rutas largas de red o sincronización automática de OneDrive/Dropbox durante la prueba de *Direct Link*, que suele bloquear la caché de Datasmith.
- **Trabajo colaborativo:** En la Actividad 2, trabajar en parejas donde un alumno asume el rol de «Proyectista Revit MEP» (ejecuta modificaciones y revisa vínculos) y el otro de «Especialista Twinmotion» (audita persistencia de materiales y *Scene Graph*), rotando roles al finalizar.

### Sesión online síncrona
- **Respaldo para anchos de banda o licencia:** Para alumnado que siga la clase desde un único monitor o equipo con limitaciones para mantener Revit + Twinmotion abiertos simultáneamente, suministrar dos paquetes `.udatasmith` preexportados (`ELE_Rev1.udatasmith` y `ELE_Rev2.udatasmith` con la carpeta de activos) para practicar la actualización de ruta/vínculo y auditar qué ocurrió con los modos *Collapse* y los materiales.
- **Salas reducidas (*Breakout rooms*):** Equipos de 3-4 personas resolviendo el caso *Centro Logístico del Henares* sobre un diagrama interactivo compartido (Miro/Mural/Google Slides) donde conectan los 3 modelos RVT con sus modos de colapso y coordenadas.

### Sesión asíncrona
- **Secuencia en campus virtual:**
  1. Dos microvídeos técnicos (8 min cada uno): (a) *Collapse Hierarchy vs. Material* en MEP; (b) coordinación de 2 vínculos RVT sin geometría duplicada ni pérdida de materiales.
  2. Ejecución individual de la Actividad 2 subiendo una tabla verificada de auditoría con capturas del *Scene Graph* mostrando la jerarquía MEP separada de la arquitectura colapsada por material.
  3. Foro evaluable del caso *Centro Logístico del Henares*: publicación del esquema de 3 enlaces y revisión crítica entre pares centrada en detectar riesgos de *Z-fighting* o rotura de persistencia de materiales.

---

## 10. Conexión con el programa

- **Qué conocimientos previos refuerza:** Aplica directamente la gestión de vínculos RVT, coordenadas de proyecto y familias por sistema aprendida en el **Módulo 3 (Modelado 3D – Revit MEP eléctricas)** y la disciplina de organización vista en el **Módulo 4**, integrándolos con la preparación inicial de Twinmotion del **Tema 1 del Bloque 5**.
- **Qué competencias desarrolla:** Control de flujos iterativos BIM–Visualización, gestión avanzada del *Scene Graph*, optimización de *draw calls*, estandarización de materiales puente en Revit MEP y gobierno estricto de la integridad geométrica entre disciplinas.
- **Cómo se conecta con el tema anterior y posterior en el programa (6 módulos / 50 temas):**
  - *Tema anterior:* Profundiza en el **Bloque 5, Tema 1 (Introducción a Twinmotion y su integración con Revit)** pasando de una primera exportación aislada a un flujo profesional vivo y multi-archivo capaz de resistir revisiones reales de obra y proyecto.
  - *Tema posterior:* Prepara el terreno imprescindible para el **Bloque 5, Tema 3 (Ajuste de materiales, texturas y acabados para elementos eléctricos)**; sin haber separado correctamente la jerarquía MEP y estabilizado los nombres de materiales puente en Revit en el Tema 2, resulta inviable configurar acabados PBR fiables en el Tema 3 sin perderlos en la siguiente revisión.
- **Evidencia de aprendizaje que dejará el alumnado:** (1) Escena Twinmotion con doble *Direct Link* sincronizada tras modificaciones geométricas verificadas en Revit MEP, y (2) Estándar de nomenclatura de materiales puente y checklist pre-sincronización listo para usar en el proyecto integrador.

---

## Siguientes pasos para el formador

1. **Probar los archivos de práctica en un entorno limpio:** Validar antes de la sesión que `ARQ_NaveOficinas_Base.rvt` y `ELE_NaveOficinas_Base.rvt` comparten origen exacto y no presentan alertas de vínculos rotos en la ruta local del aula.
2. **Preparar los archivos de contingencia `.udatasmith` (Rev 1 y Rev 2):** Tenerlos listos en el repositorio del curso para alumnos cuya GPU o RAM impida ejecutar Revit y Twinmotion simultáneamente con fluidez.
3. **Recalcar la regla de oro de la unidireccionalidad geométrica:** Enfatizar durante toda la clase que ningún cambio de posición de equipos o luminarias hecho solo en Twinmotion es válido para obra ni sustituye al ajuste en Revit y cálculo DIALux/eléctrico.
4. **Revisar los catálogos de materiales de la Actividad 3:** Asegurarse de que todos los participantes han separado explícitamente el material del cuerpo de la luminaria frente al material del difusor LED antes de dar paso al **Tema 3**.
5. **Guardar copia limpia de la escena sincronizada:** Recordar al alumnado conservar `Practica_T2_v02.tm` como base directa para aplicar los mapeados PBR de acero galvanizado, PVC, armarios y emisores en la siguiente sesión.
