# Tema 7. Inserción de escenarios, fondos y ambientes dinámicos

## 1. Ficha del tema

| Campo | Detalle |
| :--- | :--- |
| **Título del tema** | Inserción de escenarios, fondos y ambientes dinámicos |
| **Programa** | IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas |
| **Bloque y posición dentro del programa** | Bloque 5: Visualización y renderizado con Twinmotion · Tema 7 de 10 |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Modalidad** | Online / Híbrida interactiva |
| **Idioma** | Español de España |
| **Prerrequisitos** | Dominio de la navegación básica en Twinmotion, importación de modelos BIM desde Revit MEP, calibración de materiales y ajuste de intensidad, color, temperatura ($\text{K}$) y haces lumínicos trabajados en los Temas 1 a 6 del Bloque 5. |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado será capaz de contextualizar escenas de instalaciones eléctricas y alumbrado mediante mobiliario, vegetación, personas, fondos urbanos y ambientes dinámicos organizados en capas selectivas dentro del *Scene Graph*, preservando la visibilidad íntegra de cuadros, bandejas, mecanismos y luminarias clave y documentando con apoyo de IA la separación entre ambientación visual y alcance contractual del proyecto. |

---

## 2. Objetivos de aprendizaje

1. **Seleccionar** activos de la biblioteca de Twinmotion (mobiliario, equipamiento, vegetación, personas y vehículos) coherentes con el uso funcional, la escala arquitectónica y la legibilidad técnica de cada estancia o fachada. *(Nivel de Bloom: Analizar)*
2. **Estructurar** jerarquías limpias de carpetas y estados de visibilidad en el *Scene Graph* de Twinmotion para alternar de forma inmediata entre vistas de coordinación eléctrica limpia y vistas comerciales ambientadas. *(Nivel de Bloom: Aplicar)*
3. **Configurar** fondos urbanos, cúpulas HDRI, meteorología y animaciones ambientales (viento, tránsito peatonal o rodado) sin provocar reflexiones engañosas ni obstrucciones de haces lumínicos sobre el proyecto aprobado. *(Nivel de Bloom: Aplicar)*
4. **Evaluar** posibles interferencias espaciales o visuales entre el mobiliario/vegetación de ambientación y los componentes críticos de la instalación (cuadros eléctricos, rutas de evacuación, luminarias de emergencia, bandejas y tomas), manteniendo zonas libres coherentes con la práctica proyectual. *(Nivel de Bloom: Evaluar)*
5. **Diseñar** guías y listas de comprobación asistidas por Inteligencia Artificial (sobre listados anonimizados de recintos) para estandarizar criterios de ambientación segura y redactar cláusulas visuales que excluyan el atrezo de las mediciones eléctricas del proyecto. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Biblioteca de objetos, mobiliario y escala humana en proyectos eléctricos

#### Explicación breve y clara
Un modelo eléctrico exportado directamente desde Revit suele parecer frío o abstracto para un cliente no técnico: muros desnudos con cuadros, bandejas portacables, tomas de corriente y luminarias flotando sobre pavimentos vacíos dificultan comprender alturas reales, proporciones de uso o ergonomía. La biblioteca integrada de Twinmotion (y los recursos vinculados compatibles según versión y licencia, como activos de Quixel Megascans o catálogos propios) aporta mobiliario, equipamiento técnico auxiliar, herramientas y figuras humanas que dotan de **escala inmediata** a la escena.

Sin embargo, ambientar un proyecto de instalaciones exige disciplina técnica. En una oficina comercial puede tener sentido amueblar puestos de trabajo bajo luminarias lineales para validar que los deslumbramientos aparentes o la ubicación de cajas de suelo coinciden con las mesas; en cambio, en un cuarto eléctrico de baja o media tensión o en un centro de transformación nunca deben añadirse estanterías decorativas, cajas de cartón ni operarios colocados delante de los armarios de maniobra ocultando los seccionadores, etiquetas de circuitos o el alumbrado de emergencia.

#### Conceptos clave
- **Escala humana funcional (*Human Scale*):** Inclusión puntual de figuras humanas vestidas acorde al recinto (personal técnico con EPI en salas industriales o usuarios de oficina en zonas terciarias) para comunicar al instante altura libre, alcance de interruptores y dimensiones de pasillos.
- **Mobiliario de contexto frente a mobiliario proyectado:** Distinción nítida entre muebles realmente contemplados en planos arquitectónicos (p. ej., mesas con torretas eléctricas de suelo) y atrezo añadido solo en Twinmotion para contextualizar el espacio.
- **Zonas libres operativas (*Clearance Zones*):** Espacio frontal y lateral mínimo alrededor de cuadros eléctricos, centros de control de motores y celdas que debe permanecer siempre despejado tanto en obra como en las visualizaciones para transmitir seguridad y mantenimiento realista.
- **Coherencia constructiva de apoyos y tomas:** Verificación visual de que los muebles añadidos en Twinmotion no tapan mecanismos, bases de enchufe, pulsadores de alarma o registros de suelo modelados en Revit.

#### Definiciones necesarias
- **Atrezo digital (*Entourage*):** Conjunto de objetos no contractuales (personas, plantas ornamentales, libros, vehículos, mobiliario genérico) insertados en un motor de renderizado exclusivamente para aportar realismo espacial, contexto de uso y referencia de escala.
- **Biblioteca nativa y activos en nube:** Colección de modelos optimizados en tiempo real disponibles en Twinmotion; su descarga o disponibilidad depende de la versión instalada y la conectividad/licencia del equipo de trabajo.
- **Colisión visual de mobiliario:** Superposición geométrica entre un elemento decorativo insertado en Twinmotion y un componente MEP importado de Revit (por ejemplo, un armario archivador tapando un subcuadro secundario o una toma de datos).

#### Ejemplo práctico realista
En la presentación de unas oficinas técnicas con sala eléctrica anexa ($28\text{ m}^2$), el proyecto eléctrico de Revit incluye un Cuadro Secundario de Distribución (`CS-PL01`), dos luminarias de emergencia sobre puertas y bandejas portacables vistas a $2{,}85\text{ m}$ de altura. Al ambientar en Twinmotion:
- En la **zona de oficinas**, se colocan mesas de trabajo alineadas con las luminarias lineales de $4000\text{ K}$ y las cajas de suelo modeladas en BIM, comprobando que ninguna silla ni mampara queda desplazada respecto a las tomas de fuerza y voz/datos.
- En la **sala técnica**, se suprimen elementos ornamentales y se inserta únicamente una figura de técnico de mantenimiento a $1{,}8\text{ m}$ lateralmente respecto al `CS-PL01`, manteniendo despejado un pasillo de maniobra frontal superior a $1{,}20\text{ m}$ (sin palés, carros ni plantas) para mostrar de forma clara la accesibilidad y la rotulación de circuitos.
*Nota normativa:* las distancias libres reglamentarias frente a cuadros eléctricos y aparamenta dependen de la tensión y de la normativa aplicable en cada país (por ejemplo, REBT e ITC-BT correspondientes en España, IEC 60364 o requisitos de espacio de trabajo de NFPA 70 / NEC en EE. UU.), por lo que deben comprobarse siempre en el proyecto oficial y no deducirse del render.

#### Errores frecuentes
- Colocar archivadores, sofás, plantas altas o figuras estáticas directamente delante de cuadros eléctricos o pulsadores de emergencia, impidiendo verlos en cámara.
- Insertar personajes con vestimenta informal (ropa de playa o deportiva) dentro de una nave industrial o centro de transformación, destruyendo la credibilidad ante un comité técnico.
- Desplazar luminarias o tomas en Revit para adaptarlas a un mueble genérico puesto al azar en Twinmotion, en lugar de respetar el layout arquitectónico aprobado.
- Dejar flotando o incrustado en el pavimento el mobiliario por no activar correctamente las ayudas de apoyo superficial durante la colocación.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué criterio técnico permite decidir si un elemento de mobiliario en Twinmotion aporta valor al proyecto eléctrico o introduce ruido y ocultación indeseada?
2. ¿Por qué conviene colocar figuras humanas con equipo de protección individual (EPI) en salas técnicas o industriales en lugar de personajes genéricos?
3. ¿Cómo debe comprobarse que el atrezo insertado no contradice las tomas de suelo, mecanismos de pared ni las zonas libres de mantenimiento del proyecto?

---

### 3.2. Escenarios, fondos urbanos, cúpulas HDRI y vegetación dinámica

#### Explicación breve y clara
Ningún edificio flota en el vacío blanco: cuando se presenta una fachada iluminada por proyectores, una marquesina fotovoltaica o una oficina con grandes ventanales hacia el exterior, lo que aparece detrás del acristalamiento o rodeando la parcela condiciona radicalmente la percepción de la luz artificial. Twinmotion ofrece tres vías complementarias para resolver el entorno: la herramienta de **Contexto Urbano (*Urban Context*)** basada en cartografía OpenStreetMap, los **Fondos de horizonte (*Backgrounds*)** y las **Cúpulas HDRI (*Skydome / Backdrop*)**.

Del mismo modo, la inserción de **vegetación** (árboles, setos, arbustos mediante colocación individual o herramientas de dispersión/pintado) da vida a viales y zonas exteriores alumbradas con báculos o balizas. No obstante, en proyectos de alumbrado exterior, colocar árboles frondosos arbitrariamente entre una farola y la calzada o delante de un bañador de fachada altera por completo las sombras proyectadas en el render respecto al cálculo fotométrico de DIALux, donde quizá ni siquiera existía masa arbórea o tenía otra altura de copa.

#### Conceptos clave
- **Urban Context (Contexto urbano):** Descarga de volúmenes blancos o texturizados simples de manzanas y vías próximas mediante datos abiertos (OpenStreetMap), útil para situar el edificio y estudiar sombras vecinas aproximadas, aunque sujeto a la actualización y exactitud topográfica real de la zona.
- **HDRI Skydome / Backdrop:** Entorno esférico de alto rango dinámico que envuelve la escena con cielo realista y horizonte lejano; aporta reflejos creíbles en fachadas acristaladas y envolventes metálicas exteriores.
- **Horizontes predefinidos (*Backgrounds*):** Siluetas urbanas, industriales, boscosas o montañosas situadas en el plano lejano para evitar que el terreno termine en un corte abrupto al mirar por una ventana.
- **Interferencia arbórea en alumbrado exterior:** Bloqueo parcial o total del haz de columnas, balizas y proyectores cuando se inserta vegetación sin respetar la implantación paisajística real del proyecto.

#### Definiciones necesarias
- **Imagen de alto rango dinámico (HDRI):** Archivo panorámico de $360^\circ$ que almacena información lumínica extendida más allá del blanco estándar, permitiendo iluminar suavemente una escena y generar reflejos coherentes con la hora del día representada.
- **Contexto georreferenciado aproximado:** Representación esquemática de edificios colindantes extraída de bases de datos abiertas (p. ej., OpenStreetMap); sirve como referencia visual de entorno y nunca sustituye un levantamiento topográfico ni un estudio oficial de servidumbres o soleamiento.
- **Dispersión (*Scatter / Paint Vegetation*):** Técnica de Twinmotion que distribuye múltiples ejemplares vegetales sobre una superficie seleccionada controlando densidad, escala aleatoria y variación de especies para optimizar tiempo de modelado.

#### Ejemplo práctico realista
Para visualizar el alumbrado exterior nocturno de un edificio industrial con parking y viales perimetrales (12 columnas de $6\text{ m}$ de altura con luminarias viales de $4000\text{ K}$), el alumno genera primero el contexto urbano cercano desde *Urban Context* para dar referencia de naves colindantes y añade un cielo HDRI crepuscular despejado que evite un fondo negro plano. A continuación, sobre los parterres del proyecto paisajístico inserta árboles ornamentales mediante dispersión selectiva.

Al realizar la revisión previa de cámara, detecta que dos árboles de copa ancha ($7\text{ m}$ de altura) se han generado justo debajo de dos columnas de alumbrado vial, interceptando completamente el haz hacia el paso de peatones y contradiciendo la memoria fotométrica aprobada. El proyectista sustituye esas especies por arbustos bajos de $0{,}8\text{ m}$ bajo el área de influencia directa de las luminarias y reubica el arbolado alto exactamente en los alcorques definidos en el plano de urbanización. *Nota normativa:* la coordinación entre arbolado urbano y alumbrado exterior debe respetar las distancias y criterios de poda o implantación previstos en los pliegos municipales y en la normativa de alumbrado exterior aplicable en cada país (p. ej., RD 1890/2008 en España o guías municipales equivalentes).

#### Errores frecuentes
- Confiar en las alturas de edificios colindantes de *Urban Context* para justificar cálculos técnicos de sombras fotovoltaicas sin comprobar la topografía y planimetría reales.
- Usar un HDRI diurno brillante mientras el sol y la escena están configurados de noche, produciendo reflejos incoherentes de cielo soleado en los cristales de una fachada iluminada artificialmente.
- Pintar árboles densos con el pincel de vegetación sobre viales y líneas de fachada sin verificar si bloquean báculos, proyectores, cámaras CCTV o rótulos luminosos.
- Dejar visible el corte del plano de suelo infinito sin horizonte ni contexto, dando sensación de maqueta aislada en vistas interiores a través de ventanales.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué diferencia funcional existe entre insertar un *Background* lejano, un *HDRI Skydome* y una malla de *Urban Context*?
2. ¿Por qué los datos de *Urban Context* no deben emplearse como base topográfica o métrica de ingeniería sin verificación externa?
3. ¿Qué comprobación visual obligatoria debe hacerse tras añadir vegetación alrededor de columnas de alumbrado exterior o proyectores de fachada?

---

### 3.3. Gestión del *Scene Graph*, capas y ocultación selectiva por disciplina

#### Explicación breve y clara
El verdadero salto de calidad entre un aficionado y un coordinador BIM/visualizador técnico reside en el orden interno del archivo. El **Scene Graph** de Twinmotion es el árbol jerárquico que organiza tanto la geometría importada desde Revit MEP (estructuras, cerramientos, falsos techos, bandejas, luminarias, cuadros) como todos los elementos añadidos en Twinmotion (luces calibradas, cámaras, mobiliario, personas, vegetación).

Cuando todo se inserta suelto en la raíz del *Scene Graph*, cualquier cambio solicitado en obra —por ejemplo, «muéstrame la sala técnica sin muebles ni personas» o «oculta las placas del falso techo para ver el trazado de bandejas y cajas de derivación»— se convierte en una búsqueda caótica objeto por objeto. Mediante una **estructura normalizada de carpetas y capas lógicas**, combinada con la ocultación selectiva por estado o vista, un único archivo `.tm` permite alternar instantáneamente entre la presentación arquitectónica cálida para propiedad y la vista técnica transparente para coordinación de instaladores.

#### Conceptos clave
- **Jerarquía normalizada en el *Scene Graph*:** Convención de carpetas numeradas por disciplina (`00_Entorno_HDRI`, `01_Arq_Estructura`, `02_Arq_FalsosTechos`, `03_MEP_Electrica`, `04_Iluminacion_TM`, `05_Atrezo_Mobiliario`, `06_Personas_Vehiculos`, `07_Vegetacion`).
- **Ocultación selectiva de envolventes:** Capacidad de apagar únicamente la capa de falsos techos o trasdosados para exponer el recorrido superior de bandejas portacables, tubos y cajas de registro sin desmontar el modelo BIM origen.
- **Separación estricta BIM frente a atrezo:** Regla por la cual ningún objeto descargado de la biblioteca de Twinmotion se mezcla dentro de las carpetas sincronizadas por Direct Link/Datasmith desde Revit.
- **Consistencia al re-sincronizar Direct Link:** Mantener intacta la organización de atrezo y cámaras al actualizar el modelo eléctrico de Revit, evitando que una actualización geométrica borre o desordene la ambientación creada.

#### Definiciones necesarias
- **Scene Graph:** Panel estructural de Twinmotion que muestra mediante árbol padre-hijo todos los objetos, grupos, luces, cámaras y sistemas de partículas contenidos en el proyecto, permitiendo seleccionarlos, agruparlos y conmutar su visibilidad.
- **Capa lógica de visualización:** Carpeta o contenedor creado deliberadamente para agrupar elementos según un criterio operativo (disciplina constructiva, fase o tipo de atrezo) con el fin de activarlos o desactivarlos en bloque en cada toma.
- **Vista de coordinación MEP limpia:** Configuración de visibilidad en la que se ocultan temporalmente personas, vegetación interior y mobiliario superfluo (y opcionalmente falsos techos) para inspeccionar sin estorbos el trazado eléctrico y el acceso a equipos.

#### Ejemplo práctico realista
Un estudio prepara la revisión de coordinación de una clínica ambulatoria antes del cierre de falsos techos. En el *Scene Graph* de Twinmotion:
1. La geometría importada por Datasmith/Direct Link desde Revit conserva su jerarquía por categorías, y el técnico agrupa el falso techo desmontable de pasillos en una subcarpeta accesible (`02_Arq_FalsoTecho_Pasillo`).
2. Todo el mobiliario hospitalario, camillas, plantas y figuras humanas añadidas en Twinmotion se alojan estrictamente bajo `05_Atrezo_Clinica` y `06_Personas`.
3. Se guardan dos encuadres idénticos desde el pasillo principal:
   - **Vista A (Presentación Gerencia):** Todas las capas activas; ambiente cálido/neutro acogedor mostrando cómo percibe el paciente el alumbrado lineal y la señalización.
   - **Vista B (Coordinación Instaladores):** Se ocultan `02_Arq_FalsoTecho_Pasillo`, `05_Atrezo_Clinica` y `06_Personas`, dejando al descubierto la bandeja de fuerza, la bandeja de datos/llamada enfermera, las derivaciones a luminarias y las cajas estancas sin obstáculos visuales.
Así, una misma escena sirve a dos audiencias técnicas distintas con cero duplicación de archivos.

#### Errores frecuentes
- Arrastrar mobiliario, árboles o focos nuevos dentro del grupo principal importado desde Revit, arriesgando su pérdida o descolocación al re-sincronizar el enlace BIM.
- Ocultar un componente eléctrico individualmente en el visor para «limpiar la foto» y olvidarse luego de reactivarlo antes de exportar el dossier técnico.
- Dejar centenares de elementos sin agrupar (`Box01`, `Oak_Tree_43`, `Person_12`) en la raíz del *Scene Graph*, imposibilitando el mantenimiento del archivo por otro compañero del equipo.
- Confundir la ocultación visual en Twinmotion con la supresión constructiva en el modelo BIM de mediciones.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué nunca debe mezclarse el atrezo nativo de Twinmotion dentro de la jerarquía sincronizada mediante Direct Link desde Revit?
2. ¿Qué capas o carpetas concretas conviene desactivar para transformar una escena comercial amueblada en una vista útil de coordinación eléctrica de falsos techos?
3. ¿Qué ventaja organizativa aporta mantener un único archivo `.tm` bien estructurado frente a guardar copias separadas «con muebles» y «sin muebles»?

---

### 3.4. Ambientes dinámicos, rendimiento en tiempo real y control asistido por IA

#### Explicación breve y clara
Twinmotion incorpora simulaciones ambientales muy atractivas: nubes en movimiento, ciclos de lluvia con reflejos sobre pavimento mojado, hojas agitadas por el viento (*Wind*), multitudes caminando (*Character Paths*) y tráfico de vehículos (*Vehicle Paths*). Utilizadas con mesura en recorridos o vistas exteriores, transmiten vitalidad y contexto real de operación. Utilizadas sin criterio técnico, pueden arruinar la lectura de un proyecto eléctrico: por ejemplo, activar suelo encharcado por lluvia en un aparcamiento exterior multiplica artificialmente los brillos especulares y hace pensar al cliente que unas luminarias viales generan mucho más flujo o deslumbramiento del real; igualmente, saturar el modelo con decenas de vehículos y vegetación de alta densidad colapsa la memoria de vídeo (VRAM) y ralentiza la navegación en directo ante el cliente.

En este punto, el uso responsable de asistentes de **Inteligencia Artificial (ChatGPT / Claude)** resulta muy eficaz para redactar **protocolos de ambientación por tipología de recinto** y cláusulas claras de exclusión contractual a partir de un listado anonimizado de estancias del proyecto. Como siempre, la IA actúa únicamente como asistente de organización y redacción: no puede comprobar visualmente si un mueble tapa un cuadro eléctrico ni determinar requisitos legales de seguridad, por lo que el técnico competente debe auditar cada escena y validar cualquier nota normativa.

#### Conceptos clave
- **Efectos meteorológicos honestos:** Uso de lluvia o suelo húmedo solo cuando se pretende analizar específicamente una escena bajo clima adverso y advirtiéndolo explícitamente, nunca como truco para dar «espectacularidad» a un alumbrado exterior estándar.
- **Presupuesto de rendimiento (*Performance Budget*):** Equilibrio entre densidad de activos dinámicos (árboles, personajes animados, coches), calidad de iluminación (Lumen / Path Tracer) y fluidez en tiempo real según la GPU disponible.
- **Trazados dinámicos (*Paths*) controlados:** Inserción de trayectorias peatonales o de vehículos en ubicaciones lógicas (aceras, calzadas, pasos señalizados) lejos de áreas de mantenimiento eléctrico o zonas de carga restringidas.
- **Separación de alcance contractual asistida por IA:** Redacción sistemática de notas que aclaren ante propiedad y contrata qué elementos pertenecen al suministro eléctrico/lumínico proyectado y cuáles son ambientación ilustrativa de Twinmotion.

#### Definiciones necesarias
- **Reflectancia especular inducida por humedad:** Aumento marcado del reflejo directo de fuentes luminosas sobre pavimentos y cubiertas al activar clima lluvioso en el motor de render, lo que altera la percepción real de uniformidad lumínica de una instalación exterior.
- **Memoria de vídeo (VRAM) y tasa de fotogramas (FPS):** Recursos de hardware de la tarjeta gráfica que limitan cuántos polígonos, texturas y animaciones simultáneas pueden moverse con fluidez en tiempo real; un exceso de vegetación o avatares provoca tirones (*stuttering*) o cierres inesperados.
- **Nota de exclusión de atrezo:** Advertencia escrita integrada en la documentación visual que deja explícito que mobiliario, vegetación, vehículos y personas proceden de biblioteca de visualización y no forman parte de las mediciones ni del presupuesto eléctrico.

#### Ejemplo práctico realista
Un ingeniero prepara el entorno de un edificio corporativo con aparcamiento fotovoltaico en marquesinas exteriores y sala de inversores/cuadros generales. Antes de empezar a poblar Twinmotion, exporta un listado CSV anonimizado con las 6 zonas del proyecto (`Zona_ID`, `Uso`, `Elementos_Electricos_Visibles`, `Publico_Objetivo`) —eliminando nombre de empresa, coordenadas y razón social— y pide a Claude o ChatGPT que genere una matriz de criterios de ambientación segura (qué atrezo incluir, qué zonas dejar libres y qué ajustes dinámicos evitar).

La IA sugiere correctamente mantener despejado un radio frontal ante los inversores y usar baja densidad peatonal en viales; sin embargo, propone incluir «charcos brillantes bajo las marquesinas solares para realzar la iluminación nocturna» y cita erróneamente un artículo genérico sobre distancias mínimas. El técnico **descarta el efecto de lluvia** (porque falsearía el reflejo de las luminarias LED bajo marquesina y podría confundirse con un fallo de drenaje), corrige las referencias legales remitiendo exclusivamente a la comprobación del reglamento aplicable vigente en el país del proyecto y organiza todo el atrezo en carpetas separadas del *Scene Graph*, garantizando una tasa estable superior a $30\text{ FPS}$ para la presentación en vivo.

#### Errores frecuentes
- Activar clima lluvioso o asfalto mojado en presentaciones técnicas de alumbrado exterior sin justificarlo, distorsionando el brillo real de las luminarias sobre el pavimento.
- Poblar toda la parcela con miles de árboles de alto poligonaje y múltiples trayectorias peatonales, provocando bloqueos del archivo durante la reunión con el cliente.
- Incluir personas circulando dentro de recintos de acceso restringido (centros de transformación, salas de grupos electrógenos o áreas con riesgo eléctrico señalizado).
- Confiar en las distancias de seguridad o prescripciones normativas redactadas por la IA sin contrastarlas con el reglamento electrotécnico y de seguridad laboral vigente.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué activar suelo mojado o lluvia en Twinmotion puede inducir a error al evaluar visualmente un proyecto de alumbrado vial o de aparcamiento?
2. ¿Qué medidas prácticas en el *Scene Graph* y en la biblioteca ayudan a mantener fluido el modelo cuando el proyecto incluye contexto urbano, vegetación y personas?
3. ¿Qué tipo de sugerencias erróneas puede generar un asistente de IA al redactar reglas de ambientación para salas técnicas eléctricas y cómo debe filtrarlas el técnico?

---

## 4. Metodología didáctica

La sesión combina demostración guiada sobre modelo vivo, laboratorio de estructuración del *Scene Graph*, análisis crítico con IA y taller práctico de caso real, completando exactamente **240 minutos**.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
| :--- | :---: | :--- | :--- |
| **1. Activación visual y diagnóstico de obstrucciones** | 25 min | Muestra 3 escenas ambientadas con fallos ocultos (cuadros tapados por estanterías, farolas bloqueadas por árboles y brillos falsos por pavimento mojado) e introduce objetivos y criterios de seguridad visual. | Inspecciona las imágenes en parejas, localiza interferencias entre atrezo e instalación eléctrica y responde al sondeo diagnóstico inicial. |
| **2. Demostración I: Biblioteca, escala humana y zonas libres** | 35 min | Demuestra en directo la inserción de mobiliario y figuras con EPI desde la biblioteca de Twinmotion manteniendo zonas libres frente a armarios eléctricos y alineación coherente con tomas y luminarias. | Inserta mobiliario y escala humana en la sala de oficinas y cuarto técnico de su archivo base respetando las zonas de maniobra y evitando oclusiones. |
| **3. Demostración II: Contexto urbano, HDRI, vegetación y *Scene Graph*** | 45 min | Explica el uso realista de *Urban Context*, *HDRI Skydome*, dispersión controlada de vegetación y organización jerárquica de carpetas en el *Scene Graph* para alternar vista comercial y vista MEP. | Estructura el *Scene Graph* en carpetas normalizadas por disciplina, añade contexto exterior/vegetación sin interceptar haces lumínicos y crea dos estados de visibilidad. |
| **4. Práctica guiada: Ambientes dinámicos y matriz de ambientación con IA** | 40 min | Presenta los riesgos de clima dinámico excesivo y caída de FPS; guía la creación de prompts anonimizados para generar protocolos de ambientación por recinto y notas de exclusión de atrezo. | Ejecuta el prompt sobre tabla anonimizada, filtra críticamente las recomendaciones de la IA (descartando propuestas erróneas) y optimiza el entorno dinámico de su escena. |
| **5. Pausa activa** | 15 min | Resuelve incidencias técnicas individuales sobre descarga de activos, rendimiento gráfico o rutas de capas en el *Scene Graph*. | Descansa y comprueba que sus archivos y carpetas de respaldo están correctamente guardados. |
| **6. Taller aplicado: Resolución del caso práctico** | 55 min | Supervisa el desarrollo del caso práctico asumiendo el rol de director de proyecto exigente con la claridad de equipos eléctricos y el orden del *Scene Graph*. | Depura e implementa la ambientación completa del caso práctico en sus dos modos (comercial y coordinación MEP), redactando la matriz de reglas y la cláusula de alcance. |
| **7. Puesta en común, evaluación y cierre** | 25 min | Modera la exposición rápida de 3 escenas voluntarias proyectando la conmutación de capas en vivo, aplica la rúbrica y enlaza con recorridos y animaciones del Tema 8. | Realiza la autoevaluación, completa la prueba sumativa de 10 ítems y entrega su paquete visual con capturas comparativas. |

**Total cronometrado:** $25 + 35 + 45 + 40 + 15 + 55 + 25 = \mathbf{240\text{ minutos}}$.

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «Auditoría exprés de escenas sobrecargadas»
- **Objetivo:** Detectar con rapidez interferencias físicas, errores de escala, ocultación de aparamenta eléctrica y distorsiones climáticas provocadas por una ambientación descuidada en Twinmotion.
- **Instrucciones para el alumnado:**
  1. Descarga el dossier de 3 escenas capturadas (`CasoA_SalaBT.png`, `CasoB_FachadaArboles.png`, `CasoC_ParkingLluvia.png`) junto con el esquema simplificado de implantación eléctrica.
  2. Trabajando por parejas, señala en la ficha de diagnóstico al menos 2 errores técnicos por imagen (por ejemplo: mueble delante de cuadro, árbol dentro del cono de un proyector de fachada, personaje sin EPI junto a cuadro abierto o suelo mojado que exagera la uniformidad del parking).
  3. Propón en una frase la corrección mínima necesaria en Twinmotion (reubicar, ocultar en capa o suprimir efecto).
- **Materiales necesarios:** Paquete gráfico de 3 imágenes + plano esquemático simplificado + ficha de diagnóstico rápido.
- **Tiempo estimado:** 25 minutos (Fase 1).
- **Rol del formador:** Guía la puesta en común proyectando cada captura y marcando en rojo las zonas de conflicto eléctrico frente a las decisiones puramente estéticas.
- **Producto o entregable esperado:** Ficha con al menos 6 fallos localizados y su medida correctora técnica asociada.
- **Criterios de éxito:** Identificación precisa de todas las obstrucciones que impiden leer cuadros, luminarias o haces, así como reconocimiento del sesgo lumínico del pavimento mojado.

### Actividad 2 (Aplicación técnica): «Doble vista desde un único *Scene Graph* ordenado»
- **Objetivo:** Aplicar una jerarquía limpia de carpetas en el *Scene Graph* e insertar mobiliario, escala humana, vegetación y fondo HDRI/urbano sin interferir con el diseño eléctrico ni ocultar los equipos proyectados.
- **Instrucciones para el alumnado:**
  1. Abre el archivo `Bloque5_T7_EscenaCalibrada.tm` (que conserva la iluminación calibrada del Tema 6).
  2. Crea en el *Scene Graph* la estructura estándar de carpetas separadas de los grupos enlazados desde Revit (`05_Atrezo_Mobiliario`, `06_Personas`, `07_Vegetacion`, `08_Contexto_HDRI`).
  3. Inserta:
     - En zona de trabajo interior: mobiliario de oficina respetando las cajas eléctricas de suelo y luminarias; 2 personas a escala real y un fondo exterior coherente a través de los ventanales (mediante *Background* o *Urban Context*).
     - En cuarto técnico anexo: ningún mobiliario obstructivo y una figura técnica con EPI situada lateralmente manteniendo despejado el frente de cuadros.
     - En zona exterior de acceso: vegetación baja y arbolado lateral que no intercepte las balizas ni proyectores exteriores.
  4. Genera dos pares de capturas desde exactamente la misma cámara (`Cam_Pasillo` y `Cam_Acceso`): una con todas las capas visibles (**Presentación Cliente**) y otra con el falso techo y el atrezo ocultos (**Coordinación MEP**).
- **Materiales necesarios:** Escena base `.tm`, guía rápida de nomenclatura del *Scene Graph* y plano de referencia de tomas y luminarias.
- **Tiempo estimado:** 75 minutos (distribuidos en las Fases 2 y 3).
- **Rol del formador:** Revisa en directo que el alumnado no meta assets de Twinmotion dentro de carpetas Direct Link de Revit y comprueba la limpieza de acceso a cuadros y luminarias.
- **Producto o entregable esperado:** Archivo `.tm` organizado y 4 capturas PNG comparativas (2 vistas $\times$ 2 estados de capas).
- **Criterios de éxito:** Estructura limpia sin elementos huérfanos en la raíz; cero ocultación de cuadros o luminarias en vista de coordinación; coherencia entre mobiliario y tomas proyectadas.

### Actividad 3 (Transferencia a proyecto real): «Protocolo de ambientación segura y exclusión de alcance con IA»
- **Objetivo:** Utilizar asistentes de IA sobre un listado anonimizado de estancias para redactar un protocolo reutilizable de ambientación por zona y las notas técnicas que delimitan qué elementos pertenecen al proyecto eléctrico y cuáles al atrezo visual.
- **Instrucciones para el alumnado:**
  1. Revisa la tabla CSV anonimizada `Listado_Estancias_ProyectoX.csv` (contiene 5 tipos de espacios: vestíbulo, oficina abierta, sala de baterías/SAI, nave de montaje y urbanización exterior) comprobando que no incluye nombres reales de clientes ni direcciones.
  2. Redacta un prompt dirigido a ChatGPT o Claude solicitando: (a) reglas de ambientación permitida y prohibida por estancia, (b) verificación de zonas despejadas recomendadas para inspección visual y (c) un párrafo formal de exclusión de atrezo para el dossier de presentación.
  3. Audita críticamente la salida generada por la IA: corrige cualquier cifra legal o distancia reglamentaria inventada por el modelo (sustituyéndola por remisión expresa al proyecto oficial y normativa aplicable), elimina recomendaciones que afecten al cálculo lumínico (como añadir lluvia reflectante) y valida la coherencia eléctrica de cada regla.
  4. Ajusta los parámetros climáticos y trayectorias dinámicas en tu archivo de Twinmotion conforme al protocolo revisado.
- **Materiales necesarios:** Tabla CSV anonimizada de 5 recintos, plantilla de prompt seguro y acceso a asistente de IA (o dossier impreso de respuestas simuladas para modo sin conexión).
- **Tiempo estimado:** 40 minutos (Fase 4).
- **Rol del formador:** Modera la revisión crítica de respuestas de IA, mostrando ejemplos reales de normas mal citadas por los modelos lingüísticos y recordando la obligación de anonimizar antes de subir información.
- **Producto o entregable esperado:** Protocolo de ambientación de 5 estancias corregido manualmente + nota de exclusión contractual lista para incorporar al dossier + ajuste dinámico verificado en escena.
- **Criterios de éxito:** Cero datos confidenciales en los prompts; corrección efectiva de cualquier alucinación normativa o recomendación visual engañosa de la IA; distinción nítida entre atrezo y partidas del proyecto eléctrico.

---

## 6. Caso práctico

### Ambientación dual de una subestación de autoconsumo industrial y edificio de control para comité mixto (dirección y mantenimiento)

#### Contexto empresarial
La empresa instaladora e ingeniería **Voltia Sistemas Técnicos** (entidad ficticia) ha completado el diseño en Revit MEP y el alumbrado en DIALux de un nuevo edificio de control anexo a una planta industrial con cubierta solar fotovoltaica. Mañana debe presentar la visualización en Twinmotion ante un **comité mixto**: por un lado, la dirección general y propiedad (que desea comprender cómo se integra el edificio en el entorno del polígono y validar el confort visual de la sala de control); por otro, el jefe de mantenimiento eléctrico (que exige verificar accesos, rutas de bandejas portacables, ubicación de inversores, cuadros de baja tensión y alumbrado exterior de maniobra).

#### Situación o problema
Un colaborador externo ambientó la escena de Twinmotion sin metodología técnica y entregó un archivo problemático:
1. Descargó el *Urban Context* del polígono pero dejó edificios colindantes traspasando parcialmente el vallado de la parcela por un ligero desfase de orientación, además de añadir un HDRI de atardecer tormentoso con pavimento encharcado que hace brillar excesivamente las balizas del camino de acceso.
2. En el interior de la **sala de cuadros y protecciones BT/FV**, colocó una estantería metálica decorativa justo frente a dos celdas de maniobra, una planta de interior grande junto al cuadro de servicios auxiliares y dos operarios sin casco ni gafas de seguridad apoyados en un pupitre improvisado.
3. Pintó árboles frondosos alrededor de todo el edificio; dos de ellos atraviesan la fachada técnica y cubren parcialmente dos luminarias exteriores de emergencia y un proyector de zona de descarga.
4. Todo el atrezo (más de 140 elementos) quedó suelto en la raíz del *Scene Graph*, mezclándose con objetos enlazados de Revit, y el archivo cae a $9\text{ FPS}$ al mover la cámara porque colocó una trayectoria con 25 vehículos y vegetación densa fuera de plano.

#### Datos disponibles
- Archivo de partida con el modelo Revit MEP enlazado (edificio de control: recepción/oficina de supervisión, sala de cuadros BT/FV, pasillo con falso techo registrable y zona exterior con 4 plazas de aparcamiento y báculos de alumbrado).
- Tabla de especificaciones de mantenimiento y alumbrado:
  - Zona de control/oficina: 3 puestos de monitorización con tomas de suelo proyectadas; luminarias a $4000\text{ K}$.
  - Sala de cuadros BT/FV: envolventes accesibles frontalmente sin obstáculos, señalización de salida iluminada y luminarias estancas $4000\text{ K}$.
  - Exterior: 3 luminarias viales/de fachada despejadas y acceso peatonal claramente legible sin reflejos artificiales de lluvia.
- Listado anonimizado de recintos para apoyar la redacción del protocolo de presentación y exclusión de atrezo.

#### Preguntas de análisis
1. ¿Qué impacto negativo tiene dejar el pavimento húmedo de lluvia y el atardecer tormentoso al presentar a mantenimiento y propiedad el alumbrado exterior del edificio de control?
2. ¿Qué riesgos de interpretación técnica y de seguridad transmite colocar estanterías frente a armarios eléctricos y operarios sin EPI en la sala de cuadros?
3. ¿Cómo debe organizarse el *Scene Graph* para resolver con un único archivo tanto la reunión estética con gerencia como la inspección de bandejas sobre falso techo con el jefe de mantenimiento?
4. ¿Por qué los volúmenes de *Urban Context* que invaden el vallado deben corregirse o limitarse visualmente, y qué advertencia debe darse sobre su precisión geométrica?

#### Tarea a realizar
En equipos de trabajo o de forma individual, deberéis:
1. **Depurar el *Scene Graph*** agrupando en carpetas ordenadas por disciplina toda la ambientación conservable y eliminando las interferencias (estantería, planta en sala técnica, árboles sobre fachadas/luminarias y exceso de tráfico fuera de plano).
2. **Corregir el entorno exterior:** ajustar o limpiar las colisiones visuales de *Urban Context* respecto al vallado, sustituir el clima lluvioso por una atmósfera seca realista coherente con el horario elegido y reubicar el arbolado respetando el alcance de los proyectores y luminarias exteriores.
3. **Configurar la ambientación correcta por zona:** amueblar de forma coherente la oficina de supervisión (alineando puestos con las cajas de suelo BIM), dejar despejada la sala de cuadros BT/FV añadiendo un técnico con EPI en posición segura, y habilitar la ocultación selectiva del falso techo del pasillo para mostrar las bandejas portacables.
4. **Preparar las entregas:** exportar 4 vistas comparativas (2 para gerencia y 2 de coordinación MEP sin atrezo/techo), junto con un protocolo de ambientación revisado con IA (sobre datos anonimizados) y una nota de alcance visual que aclare que ni el entorno *Urban Context* ni el mobiliario/vegetación forman parte del proyecto eléctrico ni del presupuesto.

#### Posibles soluciones o criterios de análisis
- **Atmósfera exterior y entorno:** Desactivar lluvia y charcos para eliminar brillos especulares irreales sobre el pavimento; usar cielo HDRI despejado o parcialmente nublado acorde al horario solar; ocultar o recortar los bloques de *Urban Context* colisionantes y advertir que su geometría es meramente ilustrativa y no sustituye al plano topográfico de parcela.
- **Sala de cuadros BT/FV:** Retirar estanterías y macetas de la sala técnica; mantener libre el frente completo de las envolventes y las salidas señalizadas; situar al técnico con EPI (casco, calzado y ropa adecuada) en un lateral observando la lectura sin obstaculizar vías de evacuación ni equipos.
- **Oficina y pasillo:** Alinear los 3 puestos de monitorización con las tomas de suelo reales del modelo Revit; guardar una carpeta específica para las placas del falso techo del pasillo y otra para el atrezo de oficina para alternar limpiamente entre la vista comercial y la vista de inspección de bandejas.
- **Rendimiento:** Suprimir los vehículos innecesarios fuera del encuadre y limitar la dispersión vegetal al perímetro visible para recuperar fluidez interactiva en directo ($> 25\text{–}30\text{ FPS}$).
- **Documentación y normativa:** Recordar que la validación de pasillos de maniobra, distancias de seguridad eléctrica y niveles de alumbrado exterior debe contrastarse exclusivamente con la normativa vigente aplicable en el país de ejecución (p. ej., REBT, RD 1890/2008 o reglamentos de prevención y alta/baja tensión pertinentes), nunca con la escena visual de Twinmotion.

#### Preguntas de reflexión final
1. Si la dirección general pide «poner más árboles pegados a la fachada porque queda más verde», ¿cómo negocias técnicamente la solución mostrando en vivo la capa de haces y luminarias?
2. ¿Qué problemas contractuales pueden surgir si entregas un render con mobiliario especial, luminarias decorativas de biblioteca o vehículos eléctricos de carga no incluidos en el presupuesto del proyecto eléctrico?
3. ¿Qué convenciones de nombres de carpetas en el *Scene Graph* propondrías implantar como estándar obligatorio en toda tu oficina técnica?

---

## 7. Evaluación

### Evaluación diagnóstica
- **Cuándo:** Primeros 25 minutos (Fase 1 / Actividad 1).
- **Instrumento:** Análisis de las 3 capturas problemáticas y breve cuestionario oral/escrito sobre riesgos visuales de atrezo y clima.
- **Propósito:** Comprobar si el alumnado detecta oclusiones eléctricas, incompatibilidades de escala y sesgos lumínicos de clima antes de empezar a insertar activos.

### Evaluación formativa
- **Cuándo:** Durante las Fases 2, 3 y 4 (Actividades 2 y 3).
- **Instrumento:** Revisión directa del árbol *Scene Graph* y los ajustes dinámicos en estación/pantalla compartida mediante lista de comprobación técnica.
- **Criterios de seguimiento:** Separación estricta entre Revit y atrezo, ausencia de colisiones con equipos eléctricos, control de rendimiento/FPS, anonimización y filtrado crítico de IA.

### Evaluación sumativa
- **Cuándo:** Fases 6 y 7 (Caso práctico + test de cierre de 10 preguntas).
- **Composición de la calificación:**
  - **60 %** Resolución del caso práctico (archivo `.tm` ordenado o captura del *Scene Graph*, 4 renders comparativos Gerencia vs. Coordinación MEP, protocolo de ambientación y cláusula de alcance).
  - **25 %** Ejecución de la Actividad 3 (prompt anonimizado y auditoría crítica de las respuestas de la IA).
  - **15 %** Test objetivo final sobre gestión de capas, entornos HDRI/Urban Context, efectos dinámicos y límites técnicos de la ambientación.

### Rúbrica de evaluación

| Criterio | Insuficiente (0–4,9) | En desarrollo (5,0–6,9) | Adecuado (7,0–8,9) | Destacado (9,0–10) |
| :--- | :--- | :--- | :--- | :--- |
| **Ambientación coherente y seguridad visual eléctrica** | Inserta muebles, árboles o personas que tapan cuadros, luminarias o tomas; incluye personajes inadecuados o invade zonas técnicas restringidas. | Respeta los cuadros principales, pero mantiene interferencias menores en tomas, luminarias secundarias o detalles incoherentes de escala/vestuario. | Selecciona mobiliario, EPI y vegetación coherentes con el uso de cada zona, dejando completamente visibles cuadros, bandejas, tomas y luminarias. | Integra escala humana y mobiliario alineados milimétricamente con el proyecto BIM, optimizando la lectura técnica y anticipando conflictos visuales de obra. |
| **Escenarios, fondos, vegetación y atmósfera dinámica** | Mantiene cortes de horizonte vacíos, HDRI contradictorios con la hora solar o lluvia/árboles que falsean la luz y bloquean haces exteriores. | Añade contexto y cielo coherentes, pero presenta leves conflictos de arbolado con luminarias o exceso innecesario de partículas/tráfico. | Combina *Urban Context*/HDRI/horizontes y vegetación sin interceptar luminarias, con atmósfera limpia y tasa de FPS fluida. | Logra integración paisajística y urbana verosímil, controla los reflejos sin trucos climáticos engañosos y documenta las limitaciones de *Urban Context*. |
| **Organización del *Scene Graph* y visibilidad selectiva** | Todos los objetos quedan sueltos en la raíz o mezclados dentro del enlace Revit; no puede ocultar selectivamente el techo o el atrezo. | Agrupa parcialmente algunos objetos, pero conserva elementos sueltos o requiere apagar piezas una a una para obtener vista MEP. | Estructura carpetas normalizadas separando BIM y atrezo, logrando conmutar en bloque entre vista comercial y coordinación MEP limpia. | Diseña una arquitectura ejemplar del *Scene Graph* resistente a re-sincronizaciones Direct Link, permitiendo múltiples perfiles de presentación sin duplicar archivos. |
| **Control asistido por IA y delimitación contractual** | Sube información identificable a la IA, adopta sugerencias erróneas sin revisar o presenta el atrezo/entorno como parte exacta del proyecto eléctrico. | Anonimiza datos pero redacta reglas incompletas o deja ambiguo qué elementos de la escena pertenecen a biblioteca visual y cuáles a BIM. | Anonimiza listados, detecta y corrige errores de la IA y entrega una nota clara diferenciando atrezo ilustrativo del proyecto técnico. | Elabora protocolo replicable por tipología de recinto tras auditoría crítica rigurosa de IA y redacta cláusulas precisas de alcance visual y normativo. |

### Actividad de autoevaluación
Antes de entregar la práctica final del tema, cada participante verificará de forma autónoma:
1. ¿Está todo el mobiliario, vegetación, vehículos y personas de Twinmotion agrupado fuera de las carpetas sincronizadas desde Revit MEP?
2. ¿Puedo activar una «vista limpia de coordinación eléctrica» ocultando falsos techos y atrezo en menos de 3 clics dentro del *Scene Graph*?
3. ¿He comprobado en planta y en perspectiva que ningún árbol, pared móvil ni mueble bloquea cuadros, mecanismos, salidas de emergencia o proyectores?
4. ¿He evitado activar lluvia o pavimento mojado en tomas pensadas para ilustrar alumbrado estándar y mantenido el modelo fluido sin saturar animaciones?
5. ¿He anonimizado cualquier listado utilizado en IA, comprobado manualmente cada afirmación técnica y añadido la nota que excluye el atrezo de las mediciones eléctricas?

---

## 8. Materiales y recursos

### Guion estructurado de diapositivas (Slides 1 a 8)

- **Slide 1: Portada — Ambientar para comunicar sin ocultar la ingeniería**
  - Comparativa dual de un mismo pasillo técnico: vista desnuda de Revit frente a vista ambientada con escala humana y mobiliario alineado.
  - Idea fuerza: el atrezo da escala y contexto de uso, jamás debe esconder la instalación eléctrica ni confundirse con el alcance presupuestado.

- **Slide 2: Escala humana, mobiliario y zonas libres eléctricas**
  - Criterios de colocación segura: frente libre en cuadros BT/MT, alineación de escritorios con tomas de suelo BIM, uso de figuras con EPI en recintos industriales.
  - Ejemplos visuales de «qué evitar» (estanterías delante de armarios, plantas cubriendo pulsadores).

- **Slide 3: Contexto exterior — *Urban Context*, *Backgrounds* y *HDRI Skydome***
  - Cuadro comparativo de los tres métodos según distancia a cámara, carga gráfica y realismo de reflejos en vidrio.
  - Advertencia técnica sobre las limitaciones geométricas de OpenStreetMap frente a topografía oficial.

- **Slide 4: Vegetación dinámica y respeto al alumbrado exterior**
  - Uso de pinceles/dispersión frente a implantación manual junto a farolas, balizas y bañadores de fachada.
  - Secuencia «antes/después» corrigiendo un árbol que interceptaba el cono de una luminaria vial.

- **Slide 5: Arquitectura del *Scene Graph* y capas por disciplina**
  - Estructura modelo recomendada de 8 carpetas numeradas (`00` a `08`) separando estrictamente geometría Direct Link/Datasmith de activos propios de Twinmotion.
  - Demostración esquemática de conmutación: *Vista Propiedad* vs. *Vista Coordinación Falsos Techos*.

- **Slide 6: Clima dinámico, reflejos engañosos y rendimiento (FPS/VRAM)**
  - Por qué el pavimento encharcado por lluvia distorsiona la percepción del alumbrado exterior.
  - Buenas prácticas de optimización: limitar *Character/Vehicle Paths* al encuadre útil y vigilar vegetación de alto poligonaje.

- **Slide 7: IA aplicada a protocolos de ambientación y control de alcance**
  - Flujo seguro: tabla anonimizada de recintos $\rightarrow$ prompt de reglas de ambientación $\rightarrow$ filtro humano de errores normativos y técnicos $\rightarrow$ nota de exclusión de atrezo.

- **Slide 8: Caso práctico y criterios de entrega**
  - Resumen de la subestación fotovoltaica y edificio de control para comité mixto, entregables requeridos y checklist de calidad.

### Ficha de trabajo (Control de *Scene Graph* y colisiones)
- **Documento:** `Ficha_T7_Ambientacion_y_SceneGraph.md` con tabla de comprobación por zona:
  - Zona / Estancia
  - Carpeta asignada en *Scene Graph*
  - Atrezo insertado (sí/no y tipo)
  - Verificación de acceso despejado a cuadros/mecanismos (OK / Corregir)
  - Verificación de haces de luminarias sin interceptación vegetal/mobiliario (OK / Corregir)
  - Estado en Vista Coordinación MEP (Oculto / Visible)
  - Clima y efecto dinámico aplicado (ninguno / viento sutil / observación).

### Plantilla técnica práctica (Prompt seguro para protocolo de ambientación y alcance)
```text
ROL: Eres un especialista en coordinación BIM e ingeniería de visualización arquitectónica para proyectos eléctricos.
SEGURIDAD Y LÍMITES: La tabla adjunta está completamente anonimizada. NO inventes ni cites distancias legales exactas de reglamentos nacionales salvo indicar que deben verificarse en el proyecto oficial y norma vigente aplicable. NO propongas trucos climáticos (como lluvia o charcos) que distorsionen la lectura real de la iluminación.

ENTRADA:
Listado de estancias: [Zona_ID | Uso_Funcional | Altura_Libre_m | Equipos_Electricos_Criticos | Destinatario_Vista]

TAREA:
Para cada recinto, devuelve una tabla Markdown con:
1. Elementos de ambientación recomendados (mobiliario, escala humana/EPI, contexto)
2. Elementos estrictamente prohibidos o zonas que deben permanecer visualmente despejadas
3. Capas del Scene Graph que deben ocultarse al pasar de "Vista Cliente" a "Vista Coordinación MEP"

Al final, redacta un párrafo breve (máx. 80 palabras) de "Nota de alcance visual y exclusión de atrezo" indicando claramente que el mobiliario, vegetación, vehículos y entorno mostrados son meramente ilustrativos y no forman parte de las mediciones eléctricas ni sustituyen a los planos ni al cálculo reglamentario.
```

### Lecturas y recursos recomendados
- **Documentación oficial de Twinmotion (Epic Games):** apartados sobre *Scene Graph*, *Populate* (*Paths*, *Scatter/Paint*), *Urban Context*, *Skydome / HDRI* y gestión de capas/escenas según la versión exacta instalada en vuestro equipo.
- **Guías de coordinación BIM-MEP (buildingSMART / estándares internos de estudio):** buenas prácticas de organización por disciplinas y gestión de vínculos entre Revit MEP y software de visualización.
- **Normativa técnica ilustrativa (de verificación obligatoria según país y edición vigente):** criterios de accesibilidad y espacios de trabajo en salas eléctricas e instalaciones exteriores (en España, p. ej., REBT RD 842/2002 e ITC aplicables, Reglamento de Líneas de Alta Tensión si existen centros de transformación, RD 1890/2008 en alumbrado exterior y CTE DB-SUA en evacuación; en otros países, IEC 60364, NFPA 70 / NEC o códigos locales equivalentes).
- *Advertencia expresa:* Toda referencia documental, normativa o función de biblioteca debe validarse previamente respecto a su vigencia legal, licenciamiento comercial del activo y versión concreta de software utilizada.

### Glosario de términos clave

| Término | Definición |
| :--- | :--- |
| ***Scene Graph*** | Árbol jerárquico de Twinmotion que organiza todos los objetos importados, luces, cámaras y elementos de biblioteca, permitiendo agruparlos y controlar su visibilidad. |
| **Atrezo digital (*Entourage*)** | Conjunto de objetos ilustrativos (mobiliario, vegetación, personas, vehículos) añadidos en visualización para dar escala y contexto sin pertenecer necesariamente al suministro contractual. |
| ***Urban Context*** | Herramienta de Twinmotion que genera volúmenes esquemáticos del entorno urbano a partir de cartografía abierta (OpenStreetMap) con fines de ambientación orientativa. |
| ***HDRI Skydome*** | Entorno panorámico esférico de alto rango dinámico que aporta cielo realista, iluminación ambiental y reflejos coherentes en superficies exteriores o acristaladas. |
| **Ocultación selectiva** | Técnica de apagado controlado de capas o carpetas (como falsos techos o mobiliario) para exponer instalaciones eléctricas ocultas sin modificar el modelo BIM de origen. |
| **Escala humana funcional** | Uso de figuras de personas acordes al recinto (p. ej., técnicos con EPI en salas eléctricas) para transmitir de manera inmediata dimensiones reales y ergonomía de operación. |
| **Interferencia arbórea** | Colisión o bloqueo visual provocado al insertar vegetación dentro del cono de iluminación de farolas, balizas o proyectores o delante de señalización eléctrica. |
| **Reflectancia inducida por humedad** | Incremento irreal de brillos especulares sobre pavimentos generado por efectos de lluvia en el motor gráfico que puede confundir la percepción de uniformidad lumínica. |

---

## 9. Adaptaciones

### Sesión presencial
- **Dinámica de aula:** Proyección en vivo del *Scene Graph* modelo antes de iniciar la Actividad 2 para asegurar que todo el grupo replica la misma estructura de carpetas numeradas (`00` a `08`).
- **Control en mesa:** El formador revisa físicamente en pantalla que cada estudiante ejecuta el cambio «Vista Cliente $\leftrightarrow$ Vista Coordinación MEP» con un máximo de 2–3 clics de visibilidad y sin perder el enlace con Revit.
- **Solución ante equipos limitados:** Trabajar la dispersión vegetal en baja densidad y desactivar animaciones de multitudes durante el modelado, activándolas únicamente si el equipo permite capturar la vista sin caída severa de FPS.

### Sesión online síncrona
- **Trabajo colaborativo:** División en salas reducidas de 3–4 personas para la Actividad 1 y el Caso práctico; se designa un portavoz que comparte su ventana del *Scene Graph* para auditar entre todos la nomenclatura de carpetas y posibles colisiones con cuadros eléctricos.
- **Entrega ligera en vivo:** Uso de tablero compartido en línea donde cada participante sube sus dos capturas comparativas lado a lado (`Vista Cliente` vs. `Vista MEP`) con título y nota de alcance.
- **Control de conectividad:** Proporcionar un paquete previo descargable en ZIP con fondos HDRI locales ligeros por si algún estudiante experimenta lentitud descargando bibliotecas en nube durante la videoconferencia.

### Sesión asíncrona
- **Cápsulas de apoyo:** 3 vídeos breves guiados (10 min cada uno): (1) Inserción de mobiliario y escala humana sin obstrucciones eléctricas, (2) *Urban Context*, *HDRI* y control de vegetación junto a luminarias, y (3) Organización avanzada del *Scene Graph* y conmutación de capas.
- **Interacción diferida:** Cada participante publica en el foro del campus la pareja de capturas de su caso práctico y revisa el *Scene Graph* (mediante captura de árbol expandido) de otro compañero aplicando una lista de cotejo de 4 puntos.
- **Seguimiento tutorial:** Corrección asíncrona por rúbrica con anotaciones visuales directas sobre las capturas entregadas, verificando tanto el orden de carpetas como la redacción de la nota de exclusión contractual.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Integra el control fotométrico-visual de intensidad, temperatura en Kelvin ($\text{K}$) y haces `.ies` aprendido en el Tema 6 dentro de entornos complejos reales, aprovechando la estructura de familias importadas desde Revit MEP (Bloque 4 y primeros temas del Bloque 5).
- **Competencias técnicas que desarrolla:**
  - Gestión jerárquica profesional de escenas complejas mediante *Scene Graph* y capas disciplinares.
  - Criterio técnico-preventivo para ambientar espacios eléctricos e industriales sin comprometer legibilidad ni accesibilidad de aparamenta.
  - Comunicación honesta con propiedad y contratas diferenciando alcance eléctrico real frente a atrezo ilustrativo.
- **Ubicación en la secuencia del programa (6 bloques / 50 temas):**
  - **Tema anterior (Bloque 5 · Tema 6 — Intensidad, color y temperatura de luz):** Estableció la calibración rigurosa de lúmenes, $\text{K}$, balance de blancos, ángulos de haz y atenuación; en este Tema 7 esa iluminación calibrada se somete a la prueba del entorno real con muebles, personas, vegetación y horizontes sin dejar que el atrezo la oculte o distorsione.
  - **Tema posterior (Bloque 5 · Tema 8 — Creación de recorridos virtuales y animaciones):** Una vez estructurado el *Scene Graph* por capas y definido el escenario completo, el siguiente tema aprovechará esas mismas capas activables y ambientes dinámicos para guionizar recorridos con cámaras, transiciones día-noche de encendido y secuencias constructivas MEP.
- **Evidencia de aprendizaje:** Archivo `.tm` organizado en *Scene Graph* por disciplinas (o captura completa del árbol expandido), pareja de renders comparativos *Vista Cliente vs. Vista Coordinación MEP* del caso práctico, protocolo de ambientación validado críticamente tras consulta segura a IA y cláusula de exclusión de atrezo.

---

## Siguientes pasos para el formador

1. **Comprobar bibliotecas y licencias en el aula:** Verificar con antelación que la versión de Twinmotion instalada descarga correctamente los activos básicos de mobiliario, personajes con EPI y vegetación (o disponer de una carpeta local de activos predescargados en caso de restricciones de red corporativa).
2. **Validar la escena base `Bloque5_T7_EscenaCalibrada.tm`:** Asegurarse de que conserva la jerarquía limpia de Revit MEP con los falsos techos agrupados de forma independiente para que el alumnado pueda practicar la ocultación selectiva sin contratiempos.
3. **Preparar el entorno de *Urban Context* de prueba:** Comprobar si el acceso a OpenStreetMap desde Twinmotion funciona sin bloqueo de proxy/firewall en el aula o tener preparada una escena con el *Urban Context* ya pre-descargado como respaldo.
4. **Probar el prompt de protocolo con datos ficticios:** Ejecutar la plantilla en ChatGPT o Claude antes de la sesión para identificar ejemplos reales de distancias normativas inventadas o propuestas climáticas erróneas (como lluvia reflectante) y comentarlos en vivo con el grupo.
5. **Recordatorio transversal de rigor profesional:** Enfatizar al cierre de la clase que ni la presencia de figuras humanas ni la limpieza aparente de un pasillo en Twinmotion sustituyen la comprobación reglamentaria de espacios de trabajo, recorridos de evacuación ni el proyecto eléctrico visado.
