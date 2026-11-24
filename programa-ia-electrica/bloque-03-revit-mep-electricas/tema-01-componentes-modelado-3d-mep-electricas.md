# Tema 1. Componentes de modelado 3D MEP eléctricas

## 1. Ficha del tema

| Campo | Detalle |
| :--- | :--- |
| **Título del tema** | Componentes de modelado 3D MEP eléctricas |
| **Bloque y posición dentro del programa** | Bloque 3: Modelado 3D – Revit MEP eléctricas — Tema 1 de 5 (Tema 17 de 50 del programa) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Fundamentos de cálculo eléctrico y diagramas unifilares (Bloque 1), interpretación de planos 2D y cálculo fotométrico en DIALux (Bloque 2), manejo básico de la interfaz de Autodesk Revit y magnitudes del Sistema Internacional (SI). |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado será capaz de estructurar un modelo eléctrico MEP en Revit desde una plantilla disciplinar limpia, vinculando modelos arquitectónicos y estructurales mediante coordenadas compartidas, configurando parámetros eléctricos preliminares de proyecto y organizando la taxonomía de categorías eléctricas e insumos procedentes de DIALux, diferenciando el alcance geométrico BIM de la validación eléctrica normativa. |

---

## 2. Objetivos de aprendizaje

Al completar esta sesión de 4 horas, el alumnado será capaz de:

1. **Configurar** un archivo de proyecto eléctrico en Revit MEP seleccionando la plantilla adecuada, ajustando disciplinas, subdisciplinas y rangos de vista coherentes con planos de fuerza y alumbrado *(Nivel de Bloom: Aplicar)*.
2. **Integrar** vínculos de Arquitectura y Estructura mediante coordenadas compartidas y herramientas de *Copiar/Supervisar* (*Copy/Monitor*), asegurando la alineación de niveles, rejillas y límites de espacios MEP *(Nivel de Bloom: Aplicar)*.
3. **Analizar** la configuración eléctrica del proyecto (*Electrical Settings*: tensiones nominales, sistemas de distribución, factores de demanda y calibres orientativos) para detectar desajustes frente al sistema de suministro real del edificio y distinguirlos de la memoria de cálculo reglamentaria *(Nivel de Bloom: Analizar)*.
4. **Clasificar** los elementos de una instalación eléctrica dentro de la taxonomía nativa de categorías MEP de Revit y planificar la incorporación controlada de replanteos lumínicos exportados desde DIALux *(Nivel de Bloom: Comprender)*.
5. **Evaluar** críticamente un modelo base y listas de verificación generadas con apoyo de IA (ChatGPT/Claude) sobre datos anonimizados, garantizando que el modelado geométrico 3D nunca sustituya la verificación técnica de ingeniería eléctrica ni el cumplimiento normativo *(Nivel de Bloom: Evaluar)*.

---

## 3. Contenidos esenciales

### 3.1. Plantillas eléctricas MEP, navegador de proyectos y configuración disciplinar

#### Explicación breve y clara
Un modelo BIM eléctrico riguroso no empieza colocando cuadros ni tubos al azar sobre un archivo genérico, sino partiendo de una **plantilla eléctrica MEP** (`Electrical-Default.rte` o plantilla corporativa normalizada). Esta plantilla predefine filtros de disciplina (`Electrical`), parámetros compartidos básicos, vistas de planta de potencia (`Power`) y de alumbrado (`Lighting`), rangos de vista específicos y estilos de línea. En Revit, la propiedad **Disciplina** (*Discipline*) de cada vista controla qué categorías se atenúan como trasfondo (*halftone*) y cuáles aparecen en primer plano con trazo nítido: en una vista eléctrica, muros y pilares vinculados se muestran en gris atenuado para destacar tableros, luminarias y canalizaciones. Asimismo, configurar correctamente el **Rango de vista** (*View Range*) evita errores habituales como no visualizar luminarias empotradas en falso techo en vistas de potencia o perder de vista tomas de corriente bajas en planos de techo reflejado (*RCP*).

#### Conceptos clave
- **Plantilla eléctrica MEP (`.rte`):** Archivo base que contiene familias cargadas, configuraciones de navegador de proyectos, estilos de visualización y parámetros eléctricos iniciales para evitar empezar de cero en cada obra.
- **Disciplina y Subdisciplina:** Parámetros de vista que agrupan planos en el Navegador de proyectos (p. ej., *Electricidad > Fuerza*, *Electricidad > Alumbrado*, *Electricidad > Corrientes Débiles*) y regulan la atenuación automática de elementos arquitectónicos y estructurales.
- **Rango de vista (*View Range*):** Conjunto de planos horizontales (*Top*, *Cut Plane*, *Bottom*, *View Depth*) que delimitan qué elementos 3D se seccionan o proyectan en cada vista de planta o techo reflejado.
- **Subproyectos (*Worksets*):** División lógica en modelos centrales colaborativos que permite a varios proyectistas trabajar en paralelo (p. ej., *MEP-EL-Acometidas*, *MEP-EL-Alumbrado*, *MEP-EL-Fuerza*, *Vínculos*).

#### Definiciones necesarias
- **Vista de plano de techo reflejado (*Reflected Ceiling Plan - RCP*):** Vista orientada de abajo hacia arriba utilizada en iluminación y detección para visualizar falsos techos, luminarias, difusores y detectores en su plano real de montaje.
- **Nivel de detalle (*Detail Level*):** Parámetro de vista (*Bajo/Coarse*, *Medio/Medium*, *Alto/Fine*) que alterna entre representación unifilar o simbólica simplificada y geometría volumétrica real de bandejas y conductos.

#### Ejemplo práctico realista
En un edificio de oficinas de 3 plantas (altura libre de suelo acabado a falso techo: $2{,}70\text{ m}$; cota de forjado superior: $3{,}40\text{ m}$), el proyectista organiza el navegador en dos subdisciplinas:
- En **Planta 1 – Fuerza**, fija `Disciplina = Electricidad`, `Plano de corte = 1,20 m` y `Superior = 2,50 m`, de modo que los tomacorrientes a $0{,}30\text{ m}$ y $1{,}10\text{ m}$ y los subtableros a $1{,}60\text{ m}$ se muestren claramente sin solaparse con las luminarias del falso techo.
- En **Planta 1 – Alumbrado (RCP)**, fija `Plano de corte = 2,30 m` y `Superior = 3,35 m`, visualizando el entramado del falso techo a $+2{,}70\text{ m}$ y las canalizaciones por plenum entre $+2{,}80\text{ m}$ y $+3{,}20\text{ m}$.
*Nota de verificación normativa:* Las alturas de montaje de mecanismos y cuadros reflejadas en vistas deben contrastarse siempre con el reglamento nacional aplicable (p. ej., REBT en España, IEC 60364, NEC/NFPA 70 o normativa de accesibilidad vigente en cada jurisdicción y edición).

#### Errores frecuentes
- Trabajar con la plantilla arquitectónica por defecto en lugar de una plantilla eléctrica MEP, perdiendo configuraciones de conectores, vistas y familias de sistema.
- Mantener la disciplina de vista en `Coordination` durante el modelado diario, lo que oculta la jerarquía visual al dibujar todo con el mismo grosor y opacidad.
- No ajustar el `View Range` en vistas de alumbrado y concluir erróneamente que las luminarias han desaparecido del modelo.
- Crear decenas de vistas de trabajo desordenadas sin prefijos normalizados, dificultando la posterior transición a documentación en el Bloque 4.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué diferencia práctica existe entre trabajar en una vista con disciplina `Electrical` frente a `Coordination`?
2. ¿Por qué las vistas de fuerza utilizan planos de planta convencionales y las de alumbrado suelen emplear planos de techo reflejado (*RCP*)?
3. ¿Qué riesgos conlleva iniciar un proyecto eléctrico colaborativo sin definir una estructura previa de subdisciplinas y subproyectos?

---

### 3.2. Vinculación de modelos arquitectónicos y estructurales, coordenadas compartidas, niveles y rejillas

#### Explicación breve y clara
En un flujo BIM coordinado, el especialista eléctrico rara vez modela muros, pilares o losas dentro del archivo eléctrico: vincula (*Link Revit*) el modelo de Arquitectura y el modelo de Estructura como referencias bloqueadas (`Pin`). La clave geométrica del arranque es el sistema de coordenadas: si Arquitectura, Estructura y Electricidad no comparten origen ni cota cero, aparecerán desplazamientos horizontales de decenas de metros o diferencias de altura al federar el proyecto para detección de interferencias o al sincronizar con Twinmotion en el Bloque 5. Tras vincular y fijar coordenadas compartidas, se utiliza **Copiar/Supervisar** (*Copy/Monitor*) sobre niveles y rejillas para heredar las referencias verticales del edificio y recibir alertas automáticas si el arquitecto cambia la cota de una planta.

#### Conceptos clave
- **Coordenadas compartidas (*Shared Coordinates*):** Sistema común de referencia espacial (Norte real, Norte de proyecto, Este/Oeste y cota de elevación respecto al nivel del mar o cota $\pm 0{,}00\text{ m}$) que garantiza el encaje exacto entre disciplinas.
- **Copiar/Supervisar (*Copy/Monitor*):** Herramienta de coordinación que copia niveles y ejes desde el modelo vinculado al modelo MEP y monitoriza cambios posteriores mediante avisos de revisión (*Coordination Review*).
- **Nivel estructural (SSL) vs. Nivel de pavimento terminado (NPT/FFL):** Distinción crítica entre la cara superior de la losa de hormigón y la cota final de suelo acabado; confundir ambos produce errores de 5 a 15 cm en alturas de enchufes y rodapiés.
- **Delimitación de habitación (*Room Bounding*):** Propiedad del vínculo arquitectónico que debe activarse para que Revit MEP reconozca recintos cerrados al crear **Espacios MEP** (*MEP Spaces*), útiles para agrupar cargas por zona y contrastar zonas lumínicas procedentes de DIALux.

#### Definiciones necesarias
- **Vínculo RVT (*Revit Link*):** Archivo externo insertado como referencia de solo lectura geométrica dentro del modelo anfitrión, evitando duplicar elementos constructivos y manteniendo la autoría por disciplina.
- **Espacio MEP (*MEP Space*):** Volumen tridimensional analítico propio de los modelos de instalaciones que se asocia a las habitaciones arquitectónicas para almacenar datos de uso, densidad de ocupación, potencia instalada o nivel lumínico objetivo.

#### Ejemplo práctico realista
En la ampliación de un centro logístico en Valencia, la parcela está referenciada en coordenadas UTM con cota de solera de proyecto $+0{,}00\text{ m}$ equivalente a $+14{,}20\text{ m}$ sobre el nivel del mar, y giro del Norte real de $23{,}5^\circ$. El proyectista eléctrico vincula `ARQ-CentroLogistico.rvt` usando `Auto - By Shared Coordinates`, bloquea el vínculo con `Pin`, activa `Room Bounding` en las propiedades de tipo del vínculo y ejecuta `Copy/Monitor` sobre los niveles `N00-Solera (+0,00 m)`, `N01-Entreplanta (+4,20 m)` y `N02-Cubierta (+9,80 m)` más las rejillas principales `A–H` y `1–12`. Posteriormente vincula `EST-CentroLogistico.rvt` por coordenadas compartidas y verifica en una vista de sección que la losa estructural en `N01` está a $+4{,}10\text{ m}$ ($10\text{ cm}$ bajo el NPT $+4{,}20\text{ m}$).

#### Errores frecuentes
- Vincular el modelo de Arquitectura mediante *Center to Center* y desplazar manualmente el edificio a ojo, rompiendo la federación BIM con Estructura y DIALux/Twinmotion.
- Olvidar bloquear (`Pin`) el archivo RVT vinculado y moverlo accidentalmente al seleccionar luminarias o tabiques.
- Duplicar niveles propios en el modelo MEP con nombres o cotas distintas a los de Arquitectura en lugar de usar *Copy/Monitor*.
- No activar `Room Bounding` en el vínculo arquitectónico, impidiendo delimitar espacios MEP para inventario de cargas por recinto.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué ocurre al federar modelos en coordinación BIM si Electricidad vinculó Arquitectura por *Origin to Origin* mientras Estructura usó *Shared Coordinates*?
2. ¿Por qué conviene supervisar (`Monitor`) los niveles arquitectónicos en lugar de crear niveles independientes sin vínculo?
3. ¿Qué diferencia constructiva existe entre referenciar alturas de aparatos eléctricos respecto al nivel NPT frente al nivel estructural SSL?

---

### 3.3. Configuración eléctrica de proyecto (`Electrical Settings`): tensiones, sistemas de distribución y calibres orientativos

#### Explicación breve y clara
Antes de conectar un solo tablero o circuito, es imprescindible adaptar la **Configuración eléctrica** (`Manage > MEP Settings > Electrical Settings`) al país y al sistema de suministro del proyecto. Las plantillas estándar suelen traer configuraciones norteamericanas (120/208 V, 277/480 V, calibres AWG), que provocarán errores graves si se trabaja en Europa o Latinoamérica con redes de 400/230 V a 50 Hz (o 220/127 V, 380/220 V según región). En este cuadro se definen **Definiciones de voltaje**, **Sistemas de distribución**, **Clasificaciones de carga**, **Factores de demanda** y **Tamaños de cable orientativos**.

Ahora bien, debe subrayarse un límite técnico innegociable: **configurar tensiones y calibres en Revit NO constituye una validación eléctrica normativa**. Revit asigna secciones orientativas para conectividad de circuitos y tablas de tableros con un algoritmo simplificado (a menudo basado en tablas NEC por defecto si no se personalizan), por lo que toda caída de tensión ($\Delta U$), intensidad admisible por método de instalación, factor de agrupamiento, temperatura ambiente y poder de corte frente a cortocircuito debe calcularse y verificarse independientemente conforme al reglamento vigente por un técnico competente.

#### Conceptos clave
- **Rangos nominales de voltaje (*Voltage Definitions*):** Intervalos mínimo y máximo admisibles en torno a un valor nominal (p. ej., nominal $230\text{ V}$, rango $207\text{ V} - 253\text{ V}$; nominal $400\text{ V}$, rango $360\text{ V} - 440\text{ V}$) necesarios para que Revit permita conectar equipos compatibles.
- **Sistema de distribución (*Distribution System*):** Configuración eléctrica de fases, hilos y tensiones línea-línea / línea-neutro (p. ej., `400/230 V Trifásico 4 hilos Estrella`, `230 V Monofásico 2 hilos + PE`).
- **Clasificación de carga y Factor de demanda (*Load Classification & Demand Factor*):** Categorización de potencias (alumbrado, tomas de uso general, climatización, motores) y coeficientes de simultaneidad aplicables en paneles de Revit.
- **Límite de cálculo BIM frente a cálculo normativo:** Distinción entre la comprobación de conectividad y balance orientativo de fases en Revit frente a la memoria de cálculo reglamentaria auditada.

#### Definiciones necesarias
- **Tensión línea-línea ($U_L$) y línea-neutro ($U_0$):** Magnitudes de tensión en sistemas trifásicos equilibrados en estrella relacionadas por $U_L = \sqrt{3} \cdot U_0$ (en redes europeas habituales, $400\text{ V} \approx \sqrt{3} \times 230\text{ V}$).
- **Calibre orientativo de conductor (*Wire Size*):** Parámetro interno de Revit expresado en $\text{mm}^2$ (IEC) o AWG/kcmil (NEC) que debe ajustarse manualmente a la serie normalizada de secciones comerciales del país del proyecto ($1{,}5; 2{,}5; 4; 6; 10; 16; 25; 35; 50\text{ mm}^2\dots$).

#### Ejemplo práctico realista
Para una nave comercial en Madrid alimentada en baja tensión trifásica ($400/230\text{ V}$, $50\text{ Hz}$, esquema TT):
1. El técnico entra en `Electrical Settings > Voltage Definitions` y crea `230 V` (mín. $207\text{ V}$, máx. $253\text{ V}$) y `400 V` (mín. $360\text{ V}$, máx. $440\text{ V}$).
2. En `Distribution Systems` define `400/230V 3F+N+PE` (Fase: 3, Hilos: 4, L-L: `400 V`, L-N: `230 V`) y `230V 1F+N+PE` (Fase: 1, Hilos: 2, L-N: `230 V`).
3. En `Wiring > Wire Sizes` sustituye o verifica la tabla de conductores de cobre aislamiento XLPE/PVC con secciones métricas ($1{,}5\text{ mm}^2$ a $240\text{ mm}^2$).
4. Para un circuito de tomas de uso general de $3{,}68\text{ kW}$ ($16\text{ A}$ a $230\text{ V}$, $\cos\varphi = 1$), aunque Revit permita asignar cable de $2{,}5\text{ mm}^2$, el ingeniero comprueba independientemente en la memoria de cálculo (Bloque 1) que la longitud de $48\text{ m}$ provoca una caída de tensión del $3{,}45\,\%$ con $2{,}5\text{ mm}^2$, superando el límite ilustrativo del $3\,\%$ para fuerza en instalaciones interiores (p. ej., ITC-BT-19 del REBT en España), por lo que eleva la sección final a $4\text{ mm}^2$ ($\Delta U \approx 2{,}16\,\%$).
*Nota de verificación normativa:* Los valores $400/230\text{ V}$, tolerancias y límites de caída de tensión indicados son ejemplos ilustrativos; deben comprobarse el país, reglamento, autoridad competente y edición vigentes aplicables al proyecto.

#### Errores frecuentes
- Dejar configurados `120/208 V` y `277/480 V` de la plantilla imperial por defecto al modelar proyectos de $230/400\text{ V}$, generando alertas de incompatibilidad al conectar luminarias o tableros europeos.
- Dar por válido el calibre automático calculado por Revit en el panel (`Panel Schedule`) sin verificar condiciones de instalación, temperatura, agrupamiento ni cortocircuito.
- Mezclar sistemas de distribución `3 hilos` y `4 hilos` en el mismo subcuadro sin coherencia de neutro, impidiendo asignar circuitos monofásicos de $230\text{ V}$.
- Confundir potencia aparente ($\text{VA}$) con potencia activa ($\text{W}$) al cargar parámetros de luminarias o equipos sin revisar el factor de potencia ($\cos\varphi$).

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué Revit impide conectar un tomacorriente de $230\text{ V}$ a un subcuadro cuyo sistema de distribución está definido en `480/277 V` o `400 V 3 hilos sin neutro`?
2. ¿Qué dos ajustes mínimos deben realizarse en `Electrical Settings` antes de insertar equipos en un proyecto europeo de $400/230\text{ V}$?
3. ¿Por qué un esquema de cuadro generado en Revit con calibres asignados no sustituye la memoria de cálculo eléctrico firmada por técnico competente?

---

### 3.4. Taxonomía de categorías MEP eléctricas y puente de datos desde DIALux hacia Revit MEP

#### Explicación breve y clara
Revit clasifica todos los objetos en **categorías** rígidas que determinan cómo se etiquetan, se filtran, se computan en tablas de planificación y se conectan entre sí. No es lo mismo modelar un cuadro como *Generic Model* (Modelo genérico, incapaz de alojar circuitos) que en su categoría correcta (`Electrical Equipment`). De igual modo, hay que comprender con realismo el puente con el **Bloque 2 (DIALux)**: DIALux es la herramienta especializada para cálculo fotométrico normativo (p. ej., verificando iluminancias $E_m$, deslumbramiento $UGR$ y uniformidad $U_0$ según normas como UNE-EN 12464-1), mientras que Revit MEP es la plataforma BIM de coordinación geométrica y documental. Los archivos fotométricos `.ldt` (Eulumdat) y `.ies` describen curvas de distribución luminosa, no geometría paramétrica nativa `.rfa`; la transferencia realista desde DIALux a Revit se apoya en planos 2D replanteados (`.dwg`/`.dxf`), tablas de coordenadas/luminarias (`.csv`/Excel) o complementos específicos sujetos a versión, manteniendo la verificación fotométrica siempre en DIALux.

#### Conceptos clave
- **Categorías de elementos eléctricos en Revit:** Distinción operativa entre `Electrical Equipment` (equipos de distribución/transformación), `Electrical Fixtures` (tomacorrientes/cajas de suelo), `Lighting Fixtures` (luminarias), `Lighting Devices` (interruptores/sensores), `Communication/Data/Fire Alarm Devices`, y canalizaciones (`Conduits`, `Cable Trays`).
- **Familia cargable (`.rfa`) vs. Familia de sistema:** Los equipos, aparatos y luminarias se cargan como archivos `.rfa` independientes; los tubos (`Conduits`) y bandejas (`Cable Trays`) son familias de sistema propias del archivo de proyecto `.rvt`.
- **Interoperabilidad realista DIALux – Revit MEP:** Comprensión de qué viaja desde DIALux (replanteo DWG, listado de luminarias con potencia y coordenadas, archivos `.ies`/`.ldt` asociables a fuentes de luz de familias Revit para render) y qué NO se valida automáticamente dentro de Revit (cumplimiento fotométrico completo de DIALux).
- **Asistencia responsable con IA (ChatGPT/Claude):** Uso de asistentes para redactar diccionarios de mapeo entre referencias de DIALux y nombres de familia en Revit o checklists de auditoría de categorías, usando datos técnicos anonimizados y jamás subiendo planos RVT/DWG confidenciales del cliente.

#### Definiciones necesarias
- **Archivo Eulumdat (`.ldt`) e IES (`.ies`):** Formatos estándar de datos fotométricos que almacenan la distribución espacial de intensidad luminosa ($\text{cd/klm}$), flujo luminoso y potencia de una luminaria, pero carecen de conectividad eléctrica BIM o reglas de anfitrión de Revit.
- **Parámetro compartido (*Shared Parameter*):** Definición externa (`.txt`) con GUID único que permite a múltiples familias y proyectos compartir atributos personalizados (p. ej., `Codigo_DIALux`, `Flujo_lm`, `Grado_IP`) para etiquetarlos y tabularlos de forma uniforme.

#### Ejemplo práctico realista
En una oficina de $450\text{ m}^2$, el estudio en DIALux evo (Bloque 2) determina que se requieren 36 paneles LED empotrados de $600\times 600\text{ mm}$, $34\text{ W}$ ($\cos\varphi = 0{,}95$), $3800\text{ lm}$, $4000\text{ K}$, distribuidos en retícula de $2{,}40\text{ m}\times 2{,}40\text{ m}$ para lograr $E_m = 515\text{ lx}$ y $UGR \le 19$ (referencia ilustrativa UNE-EN 12464-1 para puestos de oficina — verificar edición vigente).
Para trasladarlo a Revit MEP con rigor:
1. Desde DIALux se exporta el plano de replanteo 2D en `.dwg` (en metros, capas separadas de luminarias normales y de emergencia) y la tabla de luminarias.
2. En Revit se vincula ese `.dwg` únicamente en la vista de trabajo de techo reflejado (`Import/Link CAD`, `Current View Only`, unidades metros) alineándolo por las rejillas estructurales.
3. Se carga una familia `.rfa` ligera de categoría `Lighting Fixtures` (`Face-based`), se le asigna el parámetro de potencia aparente $S = 34\text{ W} / 0{,}95 \approx 35{,}8\text{ VA}$ y código `LUM-OF-01`, y se ubica exactamente sobre las marcas del DWG vinculando su archivo `.ies` solo si se empleará en vistas fotorrealistas o validación visual.
4. La verificación fotométrica oficial permanece en el informe de DIALux, mientras Revit gestiona la coordinación 3D con el falso techo, conductos de aire y circuitos de alumbrado.

#### Errores frecuentes
- Modelar tableros, cajas de registro o luminarias bajo la categoría `Generic Models`, impidiendo conectar circuitos, filtrar por disciplina o extraer tablas de planificación eléctricas.
- Creer que insertar un archivo `.ies` dentro de una familia de Revit equivale a realizar o actualizar el cálculo lumínico normativo de DIALux.
- Importar el plano `.dwg` de DIALux con la opción *Import CAD* en todas las vistas en lugar de *Link CAD* en vista actual, ensuciando estilos de línea y pesos del archivo `.rvt`.
- Subir planos confidenciales o tablas con datos identificativos de clientes a ChatGPT/Claude para generar scripts o diccionarios de nomenclatura sin anonimizar previamente nombres de proyecto, ubicaciones y clientes.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué un archivo `.ldt` o `.ies` exportado de un fabricante no sustituye a una familia `.rfa` de categoría `Lighting Fixtures` en Revit MEP?
2. ¿Qué consecuencias técnicas y documentales provoca asignar la categoría `Generic Models` a un subtablero o luminaria?
3. ¿Qué flujo realista de intercambio emplearías para llevar la distribución de luminarias validada en DIALux a un modelo coordinado de Revit MEP sin perder trazabilidad?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** combina diagnóstico técnico, microlecciones orientadas a la herramienta, demostración guiada en Revit MEP, análisis de un caso real de fallo de coordinación y transferencia directa al proyecto integrador del alumnado.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
| :--- | :---: | :--- | :--- |
| **1. Apertura, diagnóstico y activación** | 00:00 – 00:25 (25 min) | Presenta la transición del Bloque 2 (DIALux) al Bloque 3 (Revit MEP), aclara el alcance no legal del modelado 3D y dinamiza la evaluación diagnóstica + **Actividad 1**. | Responde al sondeo inicial sobre categorías y sistemas de tensión, inspecciona un archivo `.rvt` preparado con 5 errores de arranque y detecta fallos en parejas. |
| **2. Microlearning técnico I (3.1 y 3.2)** | 00:25 – 00:55 (30 min) | Demuestra en directo la creación desde plantilla eléctrica, vinculación por coordenadas compartidas de ARQ/EST, bloqueo (`Pin`), `Room Bounding` y `Copy/Monitor` de niveles y rejillas. | Replica los pasos clave en su ficha de control, comprueba la diferencia entre NPT y losa estructural y resuelve dudas sobre vistas de potencia frente a RCP. |
| **3. Práctica guiada de aplicación (Actividad 2)** | 00:55 – 01:40 (45 min) | Lanza la **Actividad 2**, entrega archivos base de práctica (ARQ + EST + DWG de DIALux) y supervisa en tiempo real configuraciones de `Electrical Settings` y rangos de vista. | Configura un proyecto eléctrico desde cero en Revit MEP: vincula ARQ/EST por coordenadas compartidas, copia niveles, parametriza tensiones $400/230\text{ V}$ y clasifica elementos base. |
| **Descanso breve** | 01:40 – 01:55 (15 min) | Pausa técnica y preparación del escenario del caso práctico. | Descanso activo y revisión informal de incidencias de software. |
| **4. Microlearning técnico II (3.3 y 3.4)** | 01:55 – 02:20 (25 min) | Explica `Electrical Settings`, límites frente al cálculo normativo, taxonomía completa de categorías MEP, puente realista DIALux→Revit y uso seguro de IA con datos anonimizados. | Contrasta un ejemplo de cálculo de caída de tensión externo frente al parámetro orientativo de Revit y anota reglas de mapeo de categorías. |
| **5. Resolución del caso práctico** | 02:20 – 03:05 (45 min) | Presenta el caso **«Logística Ebro Sur, S.L.»**, aporta los datos del incidente de coordenadas y voltajes y orienta a los equipos con preguntas de auditoría. | En equipos de 3-4 personas, diagnostica las causas raíz de los fallos del modelo, redacta el protocolo de corrección BIM y formula un prompt anonimizado de verificación con IA. |
| **6. Puesta en común y auditoría cruzada** | 03:05 – 03:25 (20 min) | Modera la exposición de 3 equipos, compara las listas de verificación propuestas y corrige conceptos erróneos sobre validación reglamentaria vs. modelado. | Presenta su diagnóstico (4 min/equipo), contrasta los errores detectados en la salida de IA y consolida los criterios comunes de calidad de arranque. |
| **7. Transferencia a proyecto real (Actividad 3)** | 03:25 – 03:45 (20 min) | Guía la **Actividad 3** facilitando la plantilla de protocolo de arranque BIM eléctrico para el proyecto integrador o proyecto laboral propio. | Cumplimenta su propia matriz de arranque (sistema eléctrico a verificar según país, plantilla, estrategia de coordenadas y vínculo desde Bloque 2). |
| **8. Síntesis, evaluación sumativa y cierre** | 03:45 – 04:00 (15 min) | Resume las 5 ideas fuerza del tema, aplica el cuestionario sumativo final + autoevaluación y enlaza con el **Tema 2** (inserción de equipos, dispositivos y conductos). | Completa el cuestionario técnico de cierre y la ficha de autoevaluación, dejando preparado el archivo `.rvt` base para la siguiente sesión. |

*Suma total verificada: $25 + 30 + 45 + 15 + 25 + 45 + 20 + 20 + 15 = \mathbf{240\text{ minutos (4 horas)}}$.*

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «Autopsia exprés de un modelo MEP mal arrancado»

- **Nombre:** Autopsia exprés de un modelo MEP mal arrancado.
- **Objetivo:** Activar la capacidad de diagnóstico técnico identificando errores críticos de plantilla, coordenadas, rango de vista y tensiones en un modelo eléctrico recién creado.
- **Instrucciones para el alumnado:**
  1. Abrid en parejas el archivo de muestra `Practica-01-ModeloDefectuoso.rvt` (o inspeccionad las 4 capturas técnicas proyectadas si no se abre localmente en esta fase) junto con el vínculo `ARQ-Base.rvt`.
  2. Disponéis de 10 minutos para localizar al menos 4 anomalías graves entre las siguientes áreas: (a) posición del vínculo arquitectónico respecto a las rejillas, (b) disciplina y rango de vista en la vista `Planta Baja - Alumbrado`, (c) sistema de tensión en `Electrical Settings`, y (d) categoría asignada al tablero principal.
  3. Anotad cada hallazgo en la ficha de trabajo indicando qué riesgo generaría en obra o en coordinación con Bloque 4 y Bloque 5.
- **Materiales necesarios:** Archivo de práctica `.rvt` con errores intencionados (o paquete de capturas de pantalla), ficha de trabajo digital o impresa y temporizador de 10 min + 5 min de puesta en común.
- **Tiempo estimado:** 15 minutos (integrados en la Fase 1).
- **Rol del formador:** No adelantar las soluciones; guiar mediante preguntas (*«¿Por qué aparecen las luminarias atenuadas?»*, *«¿Qué pasa si intentamos conectar un equipo de $230\text{ V}$?»*) y recoger los 5 errores en pizarra para enlazarlos con la microlección.
- **Producto o entregable esperado:** Lista individual/pareja de 4–5 errores de arranque clasificados por impacto (geométrico, visual, eléctrico o documental).
- **Criterios de éxito:** Identificación correcta de al menos 4 de las 5 anomalías implantadas y distinción clara entre un error de representación visual (`View Range`/Disciplina) y un error de datos de ingeniería (`Voltage Definitions`).

---

### Actividad 2 (Aplicación técnica): «Arranque limpio del modelo eléctrico MEP y enlace desde DIALux»

- **Nombre:** Arranque limpio del modelo eléctrico MEP y enlace desde DIALux.
- **Objetivo:** Aplicar de forma autónoma el procedimiento completo de preparación de un modelo eléctrico en Revit MEP coordinado con Arquitectura, Estructura y replanteo 2D de DIALux.
- **Instrucciones para el alumnado:**
  1. Cread un nuevo proyecto en Revit utilizando la plantilla eléctrica MEP facilitada (`Plantilla-MEP-EL-IEC.rte` o `Electrical-Default.rte`).
  2. Vinculad `ARQ-EdificioBase.rvt` y `EST-EdificioBase.rvt` mediante coordenadas compartidas (`Auto - By Shared Coordinates`), bloquead ambos vínculos (`Pin`) y activad `Room Bounding` en Arquitectura.
  3. Ejecutad `Copy/Monitor` sobre los niveles `N00`, `N01` y `Cubierta` y sobre los ejes principales `A–D` y `1–5`.
  4. Organizad el Navegador de proyectos creando vistas diferenciadas de `Fuerza` (plano de corte $1{,}20\text{ m}$) y `Alumbrado RCP` (plano de techo reflejado captando el falso techo a $+2{,}70\text{ m}$).
  5. Configurad `Electrical Settings` con tensiones $230\text{ V}$ y $400\text{ V}$ (ejemplo ilustrativo de sistema europeo $50\text{ Hz}$), sistema de distribución `400/230V 3F+N+PE` y serie métrica orientativa de conductores en $\text{mm}^2$.
  6. Vinculad en `N00 - Alumbrado RCP` el archivo `DIALux-Replanteo-N00.dwg` (`Current View Only`, metros) verificando que coincide con las rejillas A–D / 1–5.
- **Materiales necesarios:** Software Autodesk Revit (versión de aula), carpeta comprimida `Kit-T1-Base` (`ARQ-EdificioBase.rvt`, `EST-EdificioBase.rvt`, `DIALux-Replanteo-N00.dwg`, plantilla `.rte`), guía rápida de atajos.
- **Tiempo estimado:** 45 minutos (Fase 3).
- **Rol del formador:** Modelar los dos primeros pasos en pantalla compartida durante 5 minutos, supervisar errores de escala al vincular el DWG (milímetros vs. metros) y resolver bloqueos de `Copy/Monitor`.
- **Producto o entregable esperado:** Archivo `Apellido_Nombre_T1_ModeloBase.rvt` guardado con vínculos bloqueados, niveles copiados, `Electrical Settings` ajustado y DWG de DIALux alineado.
- **Criterios de éxito:** Tolerancia de desfase geométrico igual a $0{,}00\text{ mm}$ entre ejes copiados y vínculo ARQ/EST; ausencia de avisos de voltaje incompatible al verificar el sistema `400/230V`; DWG de DIALux visible solo en la vista RCP asignada y a escala 1:1 correcta.

---

### Actividad 3 (Transferencia a proyecto real): «Protocolo de arranque BIM eléctrico y auditoría asistida por IA»

- **Nombre:** Protocolo de arranque BIM eléctrico y auditoría asistida por IA.
- **Objetivo:** Transferir los criterios de configuración inicial a un proyecto real del alumnado o al proyecto integrador del curso, incorporando un prompt estructurado y anonimizado de verificación previa en ChatGPT/Claude.
- **Instrucciones para el alumnado:**
  1. Descargad la **Plantilla técnica de Protocolo de Arranque BIM Eléctrico** (Sección 8.3) y seleccionad vuestro proyecto real actual (anonimizado) o el edificio del proyecto integrador del curso.
  2. Completad los parámetros reales aplicables a vuestra jurisdicción: país/reglamento a verificar, tensión de suministro, esquema de puesta a tierra, criterio de cota cero ($\text{NPT}$ vs. $\text{SSL}$), estrategia de coordenadas y método de importación desde DIALux.
  3. Redactad un **prompt anonimizado** para ChatGPT o Claude pidiéndole generar una lista de comprobación (*checklist*) previa al modelado adaptada a esos parámetros técnicos (sin incluir nombres de empresa, clientes, direcciones ni archivos adjuntos confidenciales).
  4. Revisad críticamente la respuesta de la IA: señalad al menos 1 dato normativo o funcionalidad de Revit que la IA haya supuesto de forma genérica o inexacta y corregidlo con criterio técnico propio.
- **Materiales necesarios:** Plantilla técnica práctica (Sección 8.3), acceso a ChatGPT o Claude (en caso de aula sin acceso individual, se trabaja en parejas o sobre consola proyectada por el formador).
- **Tiempo estimado:** 20 minutos (Fase 7).
- **Rol del formador:** Velar por la anonimización estricta de datos de empresas reales y reforzar la verificación humana de toda respuesta generada por IA, especialmente cuando la IA confunde normas NEC/NFPA con REBT/IEC o inventa botones inexistentes en Revit.
- **Producto o entregable esperado:** Ficha «Protocolo de Arranque BIM Eléctrico» cumplimentada + registro de prompt anonimizado con corrección humana anotada.
- **Criterios de éxito:** El protocolo identifica expresamente el reglamento a comprobar según país, no contiene datos confidenciales en el prompt y documenta al menos una verificación independiente respecto a la salida de la IA.

---

## 6. Caso práctico

### Caso: Nave logística y oficinas «Logística Ebro Sur, S.L.» — Desfase de coordenadas y fallo de arranque eléctrico

#### Contexto empresarial
**Ingeniería Mecatrónica Aragón, S.L.** es un estudio técnico de 14 profesionales (ingenieros eléctricos, proyectistas mecánicos y dos modeladores BIM) contratado para diseñar y modelar las instalaciones eléctricas de baja tensión e iluminación de una nueva plataforma logística con edificio anexo de oficinas para **Logística Ebro Sur, S.L.** en la Plataforma Logística de Zaragoza (PLAZA). El proyecto abarca una nave de almacenamiento de $2\,400\text{ m}^2$ (altura libre $10{,}5\text{ m}$) y un módulo de oficinas de 2 plantas ($400\text{ m}^2$ por planta, falso techo a $+2{,}70\text{ m}$).

El estudio externo de arquitectura entregó `ARQ-EbroSur-v03.rvt` (trabajado con coordenadas UTM oficiales y giro de Norte real de $18{,}4^\circ$) y la ingeniería estructural entregó `EST-EbroSur-v02.rvt`. Además, el ingeniero lumínico del equipo completó en **DIALux evo** (Bloque 2) el estudio de iluminación de la nave (campanas LED industriales de $150\text{ W}$ a $+9{,}80\text{ m}$) y oficinas (paneles LED $36\text{ W}$), generando el plano de replanteo en `.dwg` y un listado CSV de luminarias.

#### Situación o problema
Tres días antes de la primera reunión de coordinación BIM (*federación IFC/RVT*), el coordinador detecta que el modelo eléctrico preliminar `EL-EbroSur-v01.rvt` presenta fallos críticos que bloquean el avance del equipo hacia el modelado de equipos y conductos:
1. Al federar Arquitectura, Estructura y Electricidad, toda la red preliminar de luminarias y reservas de cuadros eléctricos aparece **desplazada $42{,}6\text{ m}$ hacia el oeste y rotada $18{,}4^\circ$**, flotando fuera de la parcela.
2. En la vista `Planta Baja - Oficinas Alumbrado`, el proyectista asegura que «las luminarias de oficina no aparecen», aunque están visibles en la vista 3D general; además, todas las luminarias se modelaron como `Generic Models` porque el modelador descargó geometrías 3D sin parámetros eléctricos desde un portal web genérico.
3. Un técnico junior ha estado intentando configurar los sistemas de tableros de oficina en $230\text{ V}$, pero Revit solo ofrece `120/208 V` y `277/480 V`, y el cálculo automático preliminar muestra calibres expresados en `12 AWG` y `10 AWG`.
4. El gerente de proyecto preguntó a un asistente de IA externo subiendo capturas del plano con el logotipo del cliente y obtuvo una respuesta afirmando que *«basta importar el archivo `.ldt` de DIALux directamente en Revit para que Revit genere los circuitos y valide el reglamento eléctrico automáticamente»*.

#### Datos disponibles

| Parámetro / Evidencia detectada | Valor / Situación observada en `EL-EbroSur-v01.rvt` | Dato de referencia del proyecto |
| :--- | :--- | :--- |
| **Método de vinculación ARQ/EST** | `Auto - Center to Center` sin `Pin` en el vínculo | Coordenadas compartidas UTM con Norte real $+18{,}4^\circ$ |
| **Niveles eléctricos propios** | Creados manualmente (`PB = 0,00 m`, `P1 = +3,60 m`) sin supervisar | `ARQ` tiene `N00-NPT = 0,00 m`, `N01-NPT = +3,80 m` (losa SSL $+3,68\text{ m}$) |
| **Vista `PB - Oficinas Alumbrado`** | Plano de planta normal: `Cut Plane = 1,20 m`, `Top = 2,30 m`, Disciplina `Coordination` | Falso techo oficinas a $+2{,}70\text{ m}$, losa superior a $+3{,}68\text{ m}$ |
| **Plantilla de origen empleada** | `Electrical-Default-Imperial` convertida a metros | Proyecto en España: red trifásica $400/230\text{ V}$, $50\text{ Hz}$, calibres $\text{mm}^2$ (verificar REBT vigente) |
| **Categoría de luminarias colocadas** | `Generic Models` con geometría importada de fabricante sin conectores | Categoría requerida: `Lighting Fixtures` con conector eléctrico y potencia aparente |
| **Intercambio desde DIALux** | Intento fallido de arrastrar archivos `.ldt` a la vista de Revit | Se dispone de `DIALux-Nave-Oficinas.dwg` (metros) y tabla CSV |

#### Preguntas de análisis
1. ¿Cuál es la causa raíz del desplazamiento de $42{,}6\text{ m}$ y rotación de $18{,}4^\circ$ al federar el modelo eléctrico, y por qué corregir manualmente moviendo el vínculo empeoraría la coordinación futura?
2. ¿Por qué desaparecen las luminarias en `PB - Oficinas Alumbrado` y qué combinación exacta de tipo de vista, disciplina y `View Range` resuelve el problema?
3. ¿Qué riesgos de ingeniería y de seguridad de la información implica confiar tanto en los calibres `12 AWG` de Revit como en la recomendación obtenida de la IA con capturas del cliente?
4. ¿Cómo afecta la diferencia de $12\text{ cm}$ entre `N01-NPT (+3,80 m)` y `N01-SSL (+3,68 m)` si no se corrigen los niveles mediante *Copy/Monitor*?

#### Tarea a realizar
Trabajando en equipos de 3-4 personas durante **45 minutos** en el rol de coordinación BIM eléctrica, elaborad un **Informe Técnico de Rescate del Modelo (1 página estructurada)** que incluya:
1. **Secuencia ordenada de reconstrucción/corrección** del archivo `EL-EbroSur-v02.rvt` (decidiendo de forma justificada si conviene reparar el archivo actual o arrancar limpio desde plantilla métrica MEP).
2. **Especificación exacta de configuración** de coordenadas compartidas, `Copy/Monitor`, `View Range` para la vista RCP de oficinas y parámetros de `Electrical Settings` ($400/230\text{ V}$, $50\text{ Hz}$, serie métrica orientativa).
3. **Procedimiento realista de incorporación del estudio de DIALux** para las campanas de nave y paneles de oficina bajo categoría `Lighting Fixtures`.
4. **Respuesta técnica de desmentido y verificación** frente a la afirmación de la IA sobre los `.ldt` y la validación normativa, acompañada de un **prompt corregido y anonimizado** útil para generar el checklist de control de calidad del arranque.

#### Posibles soluciones o criterios de análisis
- **Decisión de arranque:** Es más seguro y rápido iniciar `EL-EbroSur-v02.rvt` desde una plantilla métrica IEC configurada ($400/230\text{ V}$, $\text{mm}^2$) que purgar decenas de definiciones imperiales en `EL-EbroSur-v01.rvt`, dado que el modelo apenas contiene reservas preliminares mal ubicadas y en categoría errónea.
- **Corrección geométrica:** Vincular `ARQ` y `EST` por `Shared Coordinates`, bloquear con `Pin`, activar `Room Bounding` en `ARQ` y ejecutar `Copy/Monitor` sobre `N00-NPT (0,00 m)` y `N01-NPT (+3,80 m)` más las rejillas. Esto elimina la desviación de $42{,}6\text{ m}$, el giro de $18{,}4^\circ$ y el error vertical de $20\text{ cm}$ respecto a `P1 = +3,60 m` inventada.
- **Vista de alumbrado:** Crear plano de techo reflejado (`RCP`) con `Disciplina = Electricidad`, `Cut Plane = +2,30 m` (sobre nivel `N00`) y `Top / View Depth = +3,65 m` para captar el falso techo a $+2{,}70\text{ m}$ y las luminarias empotradas sin cortar el forjado superior.
- **DIALux y categorías:** Sustituir los `Generic Models` por familias `.rfa` ligeras de categoría `Lighting Fixtures` con conector eléctrico (`230 V`, potencia aparente calculada $S = P / \cos\varphi$). Vincular el `.dwg` exportado de DIALux en unidades metros (`Current View Only`) para replantear posiciones exactas, recordando que `.ldt` solo aporta datos fotométricos para DIALux o render y NO genera circuitos ni valida el reglamento (REBT en España en su edición vigente debe comprobarse independientemente).
- **Seguridad e IA:** Advertir al gerente que subir planos con logotipos o datos del cliente a una IA pública vulnera confidencialidad, y reescribir el prompt sin datos identificativos pidiendo únicamente criterios técnicos de revisión que el ingeniero contrastará manualmente.

#### Preguntas de reflexión final
1. ¿En qué punto de vuestro flujo habitual de oficina técnica o de obra suelen producirse desajustes entre el plano arquitectónico y el replanteo de instalaciones, y cómo lo evitaría un protocolo obligatorio de coordenadas compartidas?
2. ¿Qué argumentos técnicos emplearíais ante un cliente o jefe de proyecto para explicar que un modelo 3D completo en Revit MEP no equivale a un proyecto eléctrico reglamentariamente calculado y visado?

---

## 7. Evaluación

### 7.1. Evaluación diagnóstica
Se realiza al inicio de la sesión (5 minutos dentro de la Fase 1) mediante sondeo interactivo rápido (3 preguntas de opción múltiple):
1. ¿Qué formato nativo contiene la fotometría estándar exportada para estudios en DIALux pero NO constituye una familia BIM paramétrica de Revit? *(Respuesta esperada: `.ldt` / `.ies`)*.
2. Si vinculamos un modelo arquitectónico en Revit por *Center to Center* y el edificio real tiene coordenadas compartidas rotadas $15^\circ$, ¿qué sucederá al federar disciplinas? *(Respuesta esperada: desfase espacial y giro incorrecto)*.
3. ¿Sirve el parámetro `Wire Sizes` de Revit por defecto para dar por verificada reglamentariamente la sección de una línea eléctrica? *(Respuesta esperada: No; requiere cálculo independiente según normativa vigente del país)*.

### 7.2. Evaluación formativa
Observación directa del formador durante la **Actividad 1**, la **Actividad 2** en Revit MEP y el trabajo por equipos en el **Caso práctico**, empleando una lista de comprobación continua:
- Verifica si el alumno bloquea (`Pin`) los vínculos ARQ/EST y utiliza `Copy/Monitor` en lugar de duplicar niveles sin control.
- Comprueba que configura `Voltage Definitions` y `Distribution Systems` acordes a $400/230\text{ V}$ (o sistema justificado del caso) antes de colocar elementos.
- Revisa que distingue entre categoría `Lighting Fixtures` / `Electrical Equipment` y `Generic Models`.
- Valora la capacidad crítica de detectar afirmaciones falsas de herramientas de IA sobre interoperabilidad DIALux–Revit y cumplimiento normativo.

### 7.3. Evaluación sumativa
Al término de la sesión (Fase 8), el alumnado entrega y responde dos evidencias ponderadas:
1. **Evidencia práctica en modelo y caso (60 %):** Archivo `Apellido_Nombre_T1_ModeloBase.rvt` (Actividad 2) + entregable grupal de rescate de *Logística Ebro Sur, S.L.*, evaluados con la rúbrica de la sección 7.4.
2. **Prueba técnica individual breve + Protocolo de transferencia (40 %):** Cuestionario de 5 ítems de aplicación técnica (rango de vista, coordenadas, taxonomía de categorías, puente DIALux y alcance legal/técnico BIM) + ficha de la Actividad 3 con prompt anonimizado y verificación humana.

### 7.4. Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
| :--- | :--- | :--- | :--- | :--- |
| **Configuración de plantilla, vistas y disciplina** | Trabaja sobre plantilla no eléctrica o mantiene vistas desordenadas con rango de vista incorrecto que oculta elementos clave. | Utiliza plantilla eléctrica, pero presenta inconsistencias en `View Range` o mantiene la disciplina en `Coordination` sin separar fuerza y alumbrado. | Configura plantilla eléctrica MEP, separa subdisciplinas de fuerza y alumbrado RCP y ajusta correctamente el rango de vista para visualizar cada plano. | Estructura el proyecto con plantilla limpia, subdisciplinas y `View Range` optimizados por planta/RCP, además de justificar criterios de trabajo colaborativo (*Worksets*). |
| **Coordinación espacial y vínculos ARQ/EST** | Vincula archivos a ojo o por centro, sin bloquearlos y creando niveles propios incoherentes con Arquitectura. | Vincula correctamente por coordenadas compartidas, pero olvida bloquear el vínculo, activar `Room Bounding` o usar `Copy/Monitor`. | Vincula ARQ y EST por coordenadas compartidas, aplica `Pin`, activa `Room Bounding` y supervisa niveles y rejillas con `Copy/Monitor` sin desfases. | Aplica todo el protocolo espacial sin desfases, distingue con precisión cotas NPT frente a SSL estructural y documenta alertas de coordinación preventiva. |
| **Configuración eléctrica y rigor normativo** | Mantiene valores imperiales (120/208 V, AWG) sin relación con el proyecto o confunde Revit con software de cálculo reglamentario certificado. | Ajusta tensiones básicas, pero omite sistemas de distribución completos o asume sin verificar los calibres automáticos orientativos de Revit. | Configura `Voltage Definitions`, `Distribution Systems` y series métricas en $\text{mm}^2$ coherentes, declarando explícitamente que la validación reglamentaria es externa. | Parametriza sistemas de distribución completos con factores de demanda y justifica con precisión numérica la verificación externa de caída de tensión y normativa aplicable. |
| **Taxonomía MEP, enlace DIALux y uso crítico de IA** | Usa `Generic Models` para equipos/luminarias, confunde `.ldt`/`.ies` con `.rfa` o comparte datos sensibles con la IA aceptando sus errores. | Clasifica la mayoría de categorías correctamente, pero importa el DWG de DIALux de forma sucia o revisa superficialmente la salida de la IA. | Asigna categorías MEP nativas, vincula limpiamente el replanteo DWG desde DIALux y aplica prompts anonimizados con corrección manual de errores de IA. | Domina la taxonomía MEP completa, establece un puente trazable DIALux→Revit con parámetros compartidos y audita críticamente a la IA protegiendo confidencialidad y normativa. |

### 7.5. Actividad de autoevaluación
Durante los últimos 5 minutos de la Fase 8, cada participante completa en su cuaderno o campus virtual las siguientes 3 preguntas de reflexión:
1. *¿Qué error de arranque en Revit MEP (coordenadas, rango de vista, plantilla o configuración de voltaje) he comprobado hoy que habría provocado más retrabajos en obra?*
2. *Si un compañero afirmara que «como el tablero y los circuitos ya están en Revit con secciones asignadas, no hace falta memoria de cálculo eléctrico», ¿qué dos argumentos técnicos le daría?*
3. *Valora del 1 al 5 tu autonomía actual para preparar un modelo eléctrico MEP limpio conectado con un replanteo de DIALux, y anota qué aspecto concreto necesitas practicar antes del Tema 2.*

---

## 8. Materiales y recursos

### 8.1. Guion estructurado de diapositivas

| Diapositiva | Título | Contenido clave y actividad asociada |
| :---: | :--- | :--- |
| **Slide 1** | Portada: Componentes de modelado 3D MEP eléctricas | Título, Bloque 3 (Tema 1/5), objetivos medibles, agenda de 240 min y aviso de alcance técnico-normativo. |
| **Slide 2** | Del cálculo lumínico (DIALux) al entorno BIM (Revit MEP) | Mapa de flujo del programa (Bloque 1 → Bloque 2 → Bloque 3 → Bloque 4 → Bloque 5), delimitando cálculo eléctrico, fotometría, modelado 3D y visualización. |
| **Slide 3** | Diagnóstico inicial y Actividad 1: Autopsia exprés | QR de sondeo diagnóstico (3 preguntas) e instrucciones de inspección de `Practica-01-ModeloDefectuoso.rvt`. |
| **Slide 4** | Plantilla eléctrica MEP, Disciplina y *View Range* | Esquema en corte comparando vista de Planta de Fuerza ($+1{,}20\text{ m}$) frente a Techo Reflejado RCP ($+2{,}70\text{ m}$ a $+3{,}40\text{ m}$). |
| **Slide 5** | Vínculos ARQ/EST, Coordenadas Compartidas y *Copy/Monitor* | Diagrama de coordenadas compartidas, uso obligatorio de `Pin`, activación de `Room Bounding` y distinción crítica NPT vs. SSL. |
| **Slide 6** | *Electrical Settings* y límites frente a la normativa | Capturas comentadas de `Voltage Definitions`, `Distribution Systems` ($400/230\text{ V}$ ilustrativo) y advertencia de validación externa obligatoria. |
| **Slide 7** | Taxonomía de categorías MEP y puente realista desde DIALux | Tabla visual de categorías (`Electrical Equipment`, `Fixtures`, `Lighting Fixtures/Devices`, `Conduits/Trays`) y flujo DWG/CSV frente a `.ldt`/`.ies`. |
| **Slide 8** | Caso práctico, transferencia segura con IA y puente al Tema 2 | Resumen del caso *Logística Ebro Sur, S.L.*, reglas de anonimización en ChatGPT/Claude, síntesis de cierre y enlace al Tema 2. |

### 8.2. Ficha de trabajo del alumnado
Documento editable de 2 páginas (PDF/DOCX) estructurado en 4 bloques de trabajo durante la sesión:
- **Sección A (Actividad 1):** Tabla de registro de anomalías detectadas en el modelo defectuoso y su impacto en coordinación.
- **Sección B (Práctica Revit MEP):** Lista de verificación paso a paso de arranque limpio (`Plantilla` → `Shared Coordinates` → `Pin` → `Copy/Monitor` → `View Range` → `Electrical Settings` → `Link DWG DIALux`).
- **Sección C (Caso Logística Ebro Sur, S.L.):** Espacio de diagnóstico de causas raíz, matriz de acciones correctivas y redacción de prompt anonimizado.
- **Sección D (Cierre):** Registro de respuestas de autoevaluación y enlace al repositorio donde guardar el archivo `.rvt` base para el Tema 2.

### 8.3. Plantilla técnica práctica

```markdown
# PROTOCOLO DE ARRANQUE DE MODELO ELÉCTRICO BIM (REVIT MEP)
Proyecto (código anonimizado): ___________________   Fecha: ____________   Responsable BIM: ______________

1. MARCO NORMATIVO Y PARÁMETROS ELÉCTRICOS (VERIFICACIÓN OBLIGATORIA)
- País / Jurisdicción del proyecto: ____________________________________________________________________
- Reglamento eléctrico aplicable (verificar edición vigente): __________________________________________
- Tensión nominal de suministro / Frecuencia: ____ / ____ V  |  ____ Hz  |  Esquema tierra (TT/TN-S/IT): ____
- Serie comercial de conductores (mm2 IEC / AWG): ______________________________________________________
- Nota de control: Los datos en Revit Electrical Settings son orientativos; memoria de cálculo firmada externa: [ ] Sí

2. CONFIGURACIÓN DE PLANTILLA Y VÍNCULOS
- Plantilla base (.rte): _________________________   Versión de Revit acordada del proyecto: _____________
- Archivo ARQ vinculado: _________________________   Posicionamiento: [ ] Shared Coordinates  [ ] Pin  [ ] Room Bounding
- Archivo EST vinculado: _________________________   Posicionamiento: [ ] Shared Coordinates  [ ] Pin
- Niveles supervisados con Copy/Monitor (indicar cota NPT vs SSL): _____________________________________
- Rejillas supervisadas con Copy/Monitor: ______________________________________________________________

3. VISTAS Y TAXONOMÍA DE CATEGORÍAS
- Vistas de Fuerza (Cut Plane / Top): ____________   Vistas de Alumbrado RCP (Cut Plane / Top): __________
- Regla de categorías obligatoria: Tableros -> Electrical Equipment | Tomas -> Electrical Fixtures |
  Luminarias -> Lighting Fixtures | Mandos/Sensores -> Lighting Devices | Prohibido usar Generic Models: [ ] Verificado

4. PUENTE CON ESTUDIO LUMÍNICO (DIALUX) Y USO DE IA
- Insumo recibido de DIALux: [ ] DWG replanteo (unidades: ____)  [ ] Tabla CSV luminarias  [ ] .ldt/.ies (solo referencia/render)
- Prompt anonimizado utilizado para checklist de arranque (sin datos de cliente): _______________________
- Error o supuesto genérico detectado y corregido en la salida de IA: __________________________________
```

### 8.4. Lecturas y recursos recomendados
*(Advertencia importante para el formador y el alumnado: validar siempre la versión de Autodesk Revit empleada en el proyecto, los enlaces activos, la accesibilidad documental y la edición vigente de cualquier reglamento técnico citado antes de aplicarlos en proyectos reales).*
- **Documentación oficial de Autodesk Revit — MEP Electrical Settings & Linking Models:** Guías de ayuda técnica sobre configuración de voltajes, sistemas de distribución, coordenadas compartidas y herramienta *Copy/Monitor* (verificar correspondencia exacta con la versión de Revit instalada en aula, p. ej., 2023–2026).
- **buildingSMART International / guías openBIM (esBIM en España):** Documentos introductorios sobre estándares de coordinación multidisciplinar, matrices de responsabilidades y clasificación de categorías BIM en edificación (verificar publicaciones actualizadas en el portal oficial).
- **Normativa eléctrica y lumínica de referencia según jurisdicción:** Reglamento Electrotécnico para Baja Tensión (REBT en España e ITCs), norma internacional IEC 60364, NEC/NFPA 70 (según país) y UNE-EN 12464-1 sobre iluminación de lugares de trabajo interiores (siempre contrastar país, autoridad competente y edición vigente).
- **Guía de uso seguro de asistentes de IA generativa en ingeniería (ChatGPT / Claude):** Recomendaciones internas del curso sobre anonimización de datos de proyecto, redacción de prompts estructurados y prohibición de validación ciega de cálculos o normativas.

### Glosario de términos clave

| Término | Definición |
| :--- | :--- |
| **Coordenadas compartidas (*Shared Coordinates*)** | Sistema de referencia espacial común entre archivos RVT vinculados que alinea ubicación en planta, rotación al Norte real y cota de elevación al federar disciplinas. |
| **Copiar/Supervisar (*Copy/Monitor*)** | Herramienta de Revit que copia niveles o ejes desde un vínculo externo hacia el modelo eléctrico y notifica automáticamente cambios de geometría del modelo anfitrión. |
| **Disciplina (*Discipline*)** | Parámetro de vista en Revit que regula el comportamiento gráfico y la atenuación (*halftone*) de vínculos externos para priorizar visualmente los elementos eléctricos. |
| **Sistema de distribución (*Distribution System*)** | Definición lógica en `Electrical Settings` que especifica número de fases, hilos y tensiones línea-línea/línea-neutro permitidas para conectar equipos y circuitos. |
| **Espacio MEP (*MEP Space*)** | Objeto volumétrico analítico del modelo de instalaciones delimitado por recintos arquitectónicos (*Room Bounding*) que almacena datos de uso, cargas o demanda lumínica. |
| **Rango de vista (*View Range*)** | Conjunto de planos horizontales (*Top*, *Cut Plane*, *Bottom*, *View Depth*) que define qué altura del modelo 3D se corta o se proyecta en cada plano o vista RCP. |
| **Vista de techo reflejado (*RCP*)** | Vista orientada hacia arriba empleada en diseño eléctrico de iluminación para visualizar falsos techos, luminarias empotradas, sensores y canalizaciones de plenum. |
| **Taxonomía de categorías MEP** | Clasificación estructural nativa de Revit (*Electrical Equipment*, *Electrical Fixtures*, *Lighting Fixtures*, *Lighting Devices*, *Conduits*, *Cable Trays*) necesaria para conectividad y cómputos. |

---

## 9. Adaptaciones

### Sesión presencial
- **Disposición del aula y soporte técnico:** Organizar puestos con ordenadores y Revit preinstalado con el paquete `Kit-T1-Base` cargado localmente en disco para evitar cuellos de botella de red al vincular archivos `.rvt`. Proyectar en pantalla grande las diferencias visuales de `View Range` dibujando el esquema en corte sobre pizarra física.
- **Dinámica de equipo:** En el caso práctico *Logística Ebro Sur, S.L.*, formar mesas de 3–4 personas asignando roles rotativos (Coordinador BIM, Especialista Eléctrico, Auditor Normativo/IA) y realizar una ronda rápida de pizarra con notas adhesivas sobre los 4 errores más costosos al arrancar un modelo.

### Sesión online síncrona
- **Gestión de doble pantalla y salas:** Recomendar al alumnado trabajar con doble monitor (videoconferencia + Revit) o ventana partida. Para las actividades en parejas y el caso práctico, habilitar *breakout rooms* de 3–4 participantes donde uno comparte pantalla abriendo `Practica-01-ModeloDefectuoso.rvt` o el tablero colaborativo (Miro/Whiteboard) con la ficha de rescate.
- **Ritmo e interacción:** Sustituir las comprobaciones físicas de aula por sondeos instantáneos cada 20–25 minutos («Pulgar arriba / captura en chat de vuestro nivel copiado en `Copy/Monitor`») y entrar en las salas virtuales en los minutos 12 y 30 del caso práctico para verificar la anonimización de los prompts de IA.

### Sesión asíncrona
- **Paquete multimedia previo y guiado:** Dividir la exposición teórica en 3 microvídeos grabados de 10–12 minutos con demostración paso a paso en pantalla: (1) Plantilla, vistas y `View Range`; (2) Coordenadas compartidas y `Copy/Monitor`; (3) `Electrical Settings`, categorías MEP y enlace desde DIALux.
- **Entregable y retroalimentación diferida:** El alumnado descarga `Kit-T1-Base`, sube al campus virtual su archivo `Apellido_Nombre_T1_ModeloBase.rvt`, la ficha de rescate del caso *Logística Ebro Sur, S.L.* y su **Protocolo de Arranque BIM Eléctrico** con el prompt anonimizado. En el foro del módulo, cada participante revisa la captura de un compañero verificando que no existen desfases de coordenadas ni configuraciones imperiales residuales.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Consolida los fundamentos de sistemas trifásicos/monofásicos, tensiones nominales, secciones y criterios normativos trabajados en el **Bloque 1 (Instalaciones eléctricas)**, y operacionaliza espacialmente las distribuciones de luminarias obtenidas en el **Bloque 2 (Modelado en DIALux)**.
- **Competencias que desarrolla:** Estructuración rigurosa de entornos BIM eléctricos, coordinación geométrica multidisciplinar en Revit MEP, parametrización eléctrica preliminar coherente con el país de proyecto, trazabilidad entre estudio fotométrico y modelo 3D, y criterio crítico de verificación humana frente a salidas de IA generativa.
- **Conexión con el tema anterior y posterior en el programa (6 módulos / 50 temas):**
  - *Tema anterior (Bloque 2, Tema 5 — Generación de cálculos lumínicos):* Toma los resultados validados en DIALux (planos DWG de replanteo, niveles de iluminancia alcanzados y tablas de luminarias `.ldt`/`.ies`) para traducirlos a un entorno BIM coordinado en 3D sin perder la referencia espacial ni confundir el cálculo fotométrico normativo con el modelado geométrico.
  - *Tema posterior (Bloque 3, Tema 2 — Aparatos eléctricos, componentes de detalle y conductos):* Sobre el archivo limpio, vinculado por coordenadas compartidas y configurado en `400/230 V` (o sistema del proyecto) creado hoy, el alumnado insertará en la siguiente sesión los cuadros generales, subcuadros, tomacorrientes, interruptores, luminarias basadas en anfitrión seguro, símbolos 2D de detalle y familias iniciales de tubos y bandejas.
- **Evidencia de aprendizaje que deja el alumnado:** Archivo `.rvt` base coordinado con Arquitectura, Estructura y replanteo DWG de DIALux + Informe técnico de rescate del caso *Logística Ebro Sur, S.L.* + Protocolo de Arranque BIM Eléctrico con registro de prompt anonimizado y verificación técnica.

---

## Siguientes pasos para el formador

1. **Verificar la versión exacta de Revit y plantillas disponibles** en el aula o equipos del alumnado al menos 72 horas antes de la sesión, asegurándose de que `Kit-T1-Base` (`ARQ`, `EST`, `Practica-01-ModeloDefectuoso.rvt` y `DIALux-Replanteo-N00.dwg`) está guardado en una versión compatible para no bloquear la apertura.
2. **Comprobar la configuración regional de ejemplos** adaptando el ejemplo ilustrativo ($400/230\text{ V}$ en España/UE o el sistema aplicable si el grupo pertenece mayoritariamente a otra jurisdicción), manteniendo siempre explícita la obligación de verificar reglamento y edición vigentes.
3. **Probar previamente en local el enlace DWG de DIALux** comprobando que las unidades de exportación/importación están fijadas en metros y que las coordenadas coinciden con el punto base del vínculo arquitectónico.
4. **Preparar las soluciones de referencia de la Actividad 1** para proyectar rápidamente los 5 errores implantados durante la Fase 1 sin consumir tiempo de la práctica principal.
5. **Recordar al alumnado conservar el archivo `Apellido_Nombre_T1_ModeloBase.rvt`**, ya que será el entorno vivo sobre el que trabajarán de forma acumulativa desde el **Tema 2** hasta el cierre del **Bloque 4 (Documentación)**.
