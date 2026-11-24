# Tema 3. Normas y reglamentos aplicables

> **Aviso técnico, normativo y de alcance profesional:** Este programa es una **especialización técnica en diseño eléctrico, iluminación (DIALux), modelado BIM (Revit MEP), visualización (Twinmotion) e IA aplicada**. No equivale a un MBA ni otorga habilitación legal automática para firmar proyectos, memorias técnicas o dictámenes eléctricos oficiales; dichas atribuciones dependen estrictamente de la legislación y titulación competente en cada país. Toda referencia a reglamentos concretos (como **IEC 60364**, **REBT en España**, **NEC/NFPA 70** o **UNE-EN 12464-1**) se incluye únicamente como **ejemplo ilustrativo**, siendo obligatorio verificar en cada proyecto el país, código, autoridad competente y edición vigente aplicables.

---

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Normas y reglamentos aplicables |
| **Bloque y posición dentro del programa** | Bloque 1: Instalaciones eléctricas — Tema 3 de 11 (Tema 3 de 50 del programa) |
| **Programa formativo** | IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas (6 módulos / 50 temas) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Modalidad** | Online / Híbrida interactiva |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Temas 1 y 2 (magnitudes eléctricas SI, triángulo de potencias, sistemas CC/CA monofásicos y trifásicos, y nociones de esquemas de puesta a tierra) |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado identificará la jerarquía normativa, jurisdicción, autoridad competente y edición vigente aplicables a cualquier proyecto eléctrico, elaborando una matriz trazable de cumplimiento normativo y aplicando controles estrictos contra alucinaciones legales al consultar asistentes de IA. |

---

## 2. Objetivos de aprendizaje

Al concluir esta sesión de 4 horas, el alumnado será capaz de:

1. **Identificar** los distintos niveles de la jerarquía normativa en proyectos eléctricos (legislación obligatoria, reglamentos técnicos, normas de estandarización, pliegos de distribuidora y ordenanzas locales). *(Nivel de Bloom: Recordar)*
2. **Diferenciar** el ámbito de obligatoriedad de reglamentos nacionales ilustrativos (REBT en España, NEC/NFPA 70, códigos nacionales) frente a normas técnicas de referencia (IEC 60364, UNE-EN 12464-1) y criterios de modelado BIM. *(Nivel de Bloom: Comprender)*
3. **Aplicar** un protocolo sistemático para determinar la jurisdicción, la autoridad con competencia (AHJ), el uso del edificio y la edición reglamentaria vigente antes de iniciar los cálculos. *(Nivel de Bloom: Aplicar)*
4. **Analizar** memorias técnicas, modelos preliminares y respuestas de IA para detectar mezclas ilegítimas entre códigos de distintos países, ediciones derogadas o citas normativas inventadas. *(Nivel de Bloom: Analizar)*
5. **Crear** una Matriz de Cumplimiento Normativo verificable y auditada para un proyecto real o caso internacional, documentando fuentes oficiales primarias y límites de responsabilidad profesional. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Jerarquía normativa y marco legal en proyectos eléctricos

#### Explicación breve y clara
Un proyecto eléctrico no se diseña «al gusto» del proyectista ni según los valores por defecto de un software BIM o fotométrico: debe cumplir un entramado jerárquico de disposiciones legales y técnicas que garantizan la seguridad de las personas, los bienes y la continuidad del suministro.

En la cúspide de esa pirámide se encuentran las **leyes y reglamentos oficiales de obligado cumplimiento** promulgados por el Estado o región correspondiente. Por debajo aparecen las **instrucciones técnicas complementarias**, las **normas técnicas** publicadas por organismos de normalización (que pueden ser de aplicación voluntaria o volverse obligatorias si un reglamento las cita expresamente), las **especificaciones particulares de la empresa distribuidora** de energía y las **ordenanzas municipales o sectoriales** (incendios, eficiencia energética, accesibilidad). Confundir una recomendación de fabricante con un requisito legal —o creer que completar un curso técnico habilita para firmar proyectos oficiales— constituye un error grave de ejercicio profesional.

#### Conceptos clave
- **Reglamento de obligado cumplimiento:** disposición jurídica sancionada por la Administración pública cuyo incumplimiento conlleva responsabilidad administrativa, civil o penal.
- **Norma técnica de referencia:** documento técnico consensuado (IEC, EN, UNE, IEEE, NFPA) que establece métodos de ensayo o criterios de diseño; solo adquiere fuerza legal si la legislación vigente la adopta o referencia explícitamente.
- **Especificaciones de la empresa distribuidora:** normas particulares de la compañía eléctrica local sobre cajas generales de protección, equipos de medida, acometidas y esquemas de conexión aceptados.
- **Responsabilidad y firma facultativa:** la autorización para proyectar, dirigir obra, certificar o emitir dictámenes eléctricos oficiales depende de la titulación, habilitación y colegiación exigidas por el país, nunca de un software o asistente de IA.

#### Definiciones necesarias
- **Jerarquía normativa:** orden de prelación jurídica entre disposiciones legales y técnicas por el cual una norma de rango inferior o una guía privada nunca puede contradecir ni rebajar las exigencias de un reglamento oficial superior vigente.
- **Norma armonizada / referenciada:** estándar técnico publicado por un organismo reconocido (como IEC, CENELEC o comités nacionales) al que un reglamento remite de forma fechada o no fechada para acreditar soluciones técnicas conformes.
- **Dictamen / Certificado de instalación:** documento oficial emitido por un técnico o instalador habilitado conforme a ley, mediante el cual se declara que una instalación ejecutada cumple la normativa reglamentaria aplicable.

#### Ejemplo práctico realista
Una oficina de arquitectura diseña una nave de oficinas de $900\ \text{m}^2$ con espacio comercial en planta baja. El equipo de diseño utiliza Revit MEP para modelar bandejas y luminarias, DIALux para alcanzar $500\ \text{lx}$ medios en puestos de oficina y Twinmotion para mostrar al cliente una visita virtual realista. Al revisar el expediente antes de solicitar licencia, el ingeniero responsable advierte que:
1. El render en Twinmotion y el cálculo en DIALux no sustituyen las exigencias de alumbrado de seguridad, reacción al fuego de cables ni condiciones especiales de **local de pública concurrencia** si el aforo comercial supera el umbral legal del país.
2. Además, la compañía distribuidora local exige un modelo específico de hornacina de contadores en fachada que no aparece en las normas generales IEC.
*(Nota: los umbrales exactos de pública concurrencia, clases de reacción al fuego y modelos de caja general deben comprobarse siempre en el reglamento vigente y en las normas particulares de la distribuidora del emplazamiento).*

#### Errores frecuentes
- Aplicar una norma técnica internacional general (p. ej. IEC) ignorando que la legislación nacional introduce restricciones adicionales o modificaciones obligatorias.
- Confundir la edición de una norma citada en un libro de texto o catálogo antiguo con la edición oficialmente vigente en la fecha de solicitud del permiso.
- Suponer que las familias eléctricas preconfiguradas en Revit MEP o los perfiles de cálculo de DIALux garantizan el cumplimiento legal del proyecto.
- Creer que la posesión de una certificación formativa en diseño eléctrico o BIM faculta automáticamente para firmar proyectos oficiales ante la Administración.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué diferencia jurídica y práctica existe entre un reglamento eléctrico nacional y una norma técnica internacional como IEC 60364?
2. ¿Por qué un modelo BIM completo en Revit MEP y un estudio fotométrico aprobado en DIALux siguen siendo insuficientes para justificar el cumplimiento reglamentario de una instalación?
3. ¿Qué papel desempeñan las especificaciones técnicas de la compañía distribuidora dentro de la jerarquía normativa de un proyecto?

---

### 3.2. Identificación de jurisdicción, autoridad competente (AHJ) y edición vigente

#### Explicación breve y clara
Antes de calcular una sola caída de tensión o elegir el color de los cables, todo proyectista debe responder con precisión a cuatro preguntas previas: **¿Dónde está ubicada la obra?**, **¿Qué autoridad competente (AHJ) supervisa o inspecciona la instalación?**, **¿Qué uso o clasificación legal tiene el edificio?** y **¿Qué edición exacta de cada código está vigente en la fecha de tramitación?**

En muchos países conviven reglamentos estatales con enmiendas regionales, ordenanzas municipales o reglamentos específicos para entornos sanitarios, industriales, mineros o ferroviarios. Además, cuando un código se actualiza, suelen existir **periodos transitorios** durante los cuales la fecha de visado o solicitud de licencia de obra determina qué edición debe aplicarse. Documentar esta auditoría normativa desde el Día 1 evita rehacer memorias, cuadros y planos BIM cuando el proyecto llega a revisión administrativa.

#### Conceptos clave
- **Jurisdicción territorial:** país, comunidad autónoma, estado o municipio cuyas leyes eléctricas, edificatorias y de prevención de incendios rigen en el emplazamiento de la obra.
- **Autoridad con Jurisdicción (*Authority Having Jurisdiction*, AHJ):** organismo público, ministerio, ayuntamiento, cuerpo de bomberos o entidad de inspección acreditada encargada de aprobar, inspeccionar o recepcionar la instalación.
- **Clasificación por uso y riesgo:** encuadramiento del proyecto (vivienda, oficinas, pública concurrencia, industrial, local húmedo/mojado, atmósfera explosiva ATEX, uso sanitario) que activa capítulos reglamentarios específicos.
- **Edición vigente y régimen transitorio:** versión exacta publicada en el boletín oficial correspondiente, comprobando modificaciones posteriores, fe de erratas y fechas límite de entrada en vigor.

#### Definiciones necesarias
- **Autoridad Competente / AHJ (*Authority Having Jurisdiction*):** entidad gubernamental, inspector o representante oficial legalmente facultado para interpretar, exigir y verificar el cumplimiento de los códigos y normas aplicables en un territorio.
- **Disposición transitoria:** regla legal incluida en un nuevo reglamento que establece durante qué plazo y bajo qué condiciones pueden seguir tramitándose proyectos iniciados conforme a la edición anterior.

#### Ejemplo práctico realista
Un estudio técnico recibe el encargo de proyectar una clínica veterinaria con equipo de rayos X en un polígono de Madrid, pero reutiliza como plantilla la memoria de una clínica realizada en 2016 en otra región. Al aplicar el protocolo de auditoría previa:
1. Confirma el país y municipio (España / Madrid) y verifica la edición vigente del **REBT** y de sus guías técnicas, así como las exigencias del **Código Técnico de la Edificación (CTE)** en materia de iluminación eficiente (DB-HE3) y seguridad en caso de incendio/alumbrado de emergencia (DB-SI/SUA) *(citados como ejemplos ilustrativos sujetos a comprobación en BOE/organismo competente)*.
2. Comprueba que desde 2016 han cambiado exigencias europeas y nacionales sobre reacción al fuego de cables (Reglamento CPR de productos de construcción) e infraestructuras de recarga de vehículo eléctrico.
3. Verifica si la sala de rayos X o quirófano veterinario activa normativa específica de protección radiológica o locales húmedos, evitando copiar criterios obsoletos de la plantilla antigua.

#### Errores frecuentes
- Reutilizar memorias descriptivas de proyectos pasados sin revisar si el reglamento o sus instrucciones técnicas han sufrido modificaciones desde entonces.
- Omitir la comprobación de códigos transversales (edificación, eficiencia energética, protección contra incendios, prevención de riesgos laborales) que también imponen requisitos eléctricos y lumínicos.
- Desconocer el criterio de la AHJ o de la compañía eléctrica local en proyectos fuera de la provincia o país habitual del proyectista.
- Aplicar normas extranjeras (por ejemplo, secciones AWG o colores de fase norteamericanos) en un país con código métrico europeo, o viceversa, sin autorización expresa ni equivalencia reglamentaria.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué cuatro datos obligatorios deben fijarse en la ficha inicial de un proyecto antes de iniciar cualquier cálculo eléctrico o modelado BIM?
2. ¿Cómo afectan las disposiciones transitorias a un proyecto cuya licencia de obra se solicita justo cuando entra en vigor un nuevo reglamento?
3. ¿Por qué los reglamentos de edificación y protección contra incendios suelen condicionar el diseño eléctrico y lumínico tanto como el código eléctrico principal?

---

### 3.3. Panorama ilustrativo de códigos y normas internacionales

#### Explicación breve y clara
En un mercado globalizado de ingeniería y BIM es habitual encontrar proyectos desarrollados bajo marcos normativos distintos o utilizar tutoriales de Revit, DIALux e IA redactados pensando en otro país. Para evitar confusiones graves, resulta imprescindible conocer el mapa comparativo de los principales marcos técnicos del mundo **como ejemplos ilustrativos**, recordando siempre que ninguno debe aplicarse sin confirmar el país, la autoridad competente y la edición oficial vigente:

- **IEC 60364 (Comisión Electrotécnica Internacional):** serie de referencia mundial para instalaciones eléctricas en edificios; sirve de base técnica para normas europeas (CENELEC HD 60364) y numerosos reglamentos nacionales.
- **REBT (España — Real Decreto 842/2002 e ITC-BT):** ejemplo de reglamento nacional obligatorio europeo articulado en Instrucciones Técnicas Complementarias, complementado por el CTE y normas UNE.
- **NEC / NFPA 70 (*National Electrical Code*, EE. UU.):** código modelo ampliamente adoptado con enmiendas estatales/locales en Norteamérica y tomado como base (adaptado) en diversos países latinoamericanos; emplea secciones en AWG/kcmil y estructura por artículos y tablas.
- **Otros códigos nacionales ilustrativos:** por ejemplo, **NOM-001-SEDE** (México), **NTC 2050 / RETIE** (Colombia), **AEA 90364** (Argentina) o **RIC** (Chile), cada uno con sus propias ediciones vigentes, tensiones y autoridades competentes.
- **UNE-EN 12464-1 (Iluminación de los lugares de trabajo en interiores):** ejemplo clave para el Bloque 2 (DIALux), pues define niveles de iluminancia mantenida ($\bar{E}_m$), uniformidad ($U_0$) y límite de deslumbramiento ($\text{UGR}_L$) según tarea visual *(verificar edición vigente)*.

#### Conceptos clave
- **Familia IEC 60364 / HD 60364:** estándar internacional basado en sistema métrico ($\text{mm}^2$), clasificación de influencias externas y esquemas TT/TN/IT.
- **Ejemplo REBT (España):** reglamento nacional con 52+ Instrucciones Técnicas Complementarias y guías del Ministerio, que interactúa con normas UNE y el CTE *(verificar modificaciones vigentes)*.
- **Ejemplo NEC / NFPA 70:** código basado en artículos prescriptivos, calibres AWG/kcmil, ampacidades de tabla 310.16 y reglas específicas por ocupación *(verificar edición adoptada localmente)*.
- **Puente con iluminación (UNE-EN 12464-1 y reglamentos de eficiencia):** criterios fotométricos de referencia empleados al evaluar resultados en DIALux en proyectos europeos (o IESNA/reglamentos locales en otras regiones).

#### Definiciones necesarias
- **Calibre métrico ($\text{mm}^2$) vs. AWG/kcmil:** sistemas de normalización de sección transversal de conductores; no son equivalentes exactos uno a uno, por lo que cualquier sustitución exige verificar la tabla oficial de ampacidad de la norma aplicable.
- **Código modelo (*Model Code*):** documento técnico redactado por una organización normativa (como NFPA con el NEC) que no tiene fuerza de ley hasta que una jurisdicción nacional, estatal o municipal lo adopta formalmente, a menudo con enmiendas locales.

#### Ejemplo práctico realista
Un coordinador BIM habituado a trabajar en España recibe una familia de cuadro eléctrico descargada de un repositorio estadounidense configurado para **NEC / NFPA 70** (con calibres `#12 AWG`, `#10 AWG`, tensión `120/208 V`, `60 Hz` y código de colores negro/rojo/azul para fases y blanco para neutro). Si pretende utilizarla en un proyecto ubicado en Valencia (donde aplicaría el **REBT** español como ejemplo ilustrativo, $230/400\ \text{V}$, $50\ \text{Hz}$, secciones normalizadas en $\text{mm}^2$ como $2{,}5\ \text{mm}^2$ o $4\ \text{mm}^2$ y código de color distinto para neutro y fases), deberá adaptar completamente las tablas de cables, protecciones, tensiones y nomenclaturas tras verificar la edición vigente en España. A la inversa, si trabajase en un proyecto en EE. UU. o México, no podría imponer automáticamente tablas de caída de tensión del REBT español.

#### Errores frecuentes
- Copiar límites porcentuales de caída de tensión (p. ej. 3 % / 5 % vs. 2 % / 3 % / 5 %) o factores de demanda de un país distinto al del proyecto.
- Convertir AWG a $\text{mm}^2$ por simple aproximación geométrica y utilizar la intensidad admisible de otro reglamento sin revisar temperatura de aislamiento ni método de tendido.
- Mezclar criterios de luminotecnia (como iluminancias de UNE-EN 12464-1 en DIALux) pensando que sustituyen requisitos de circuitos de emergencia o protección eléctrica.
- Citar «la norma IEC» o «el NEC» en una memoria sin indicar qué parte o edición específica está vigente y adoptada en esa jurisdicción.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué no pueden trasladarse directamente tablas de caída de tensión o colores de cableado entre un proyecto bajo NEC/NFPA 70 y uno bajo REBT o IEC 60364?
2. ¿Qué diferencia existe entre una norma de instalación eléctrica (p. ej., IEC 60364 / REBT / NEC) y una norma de calidad lumínica como UNE-EN 12464-1?
3. ¿Qué riesgos introduce descargar familias BIM o plantillas de cálculo de internet sin revisar bajo qué código normativo fueron creadas?

---

### 3.4. Trazabilidad normativa, auditoría de requisitos y límites de la IA ante códigos vigentes

#### Explicación breve y clara
Los asistentes de Inteligencia Artificial como **ChatGPT y Claude** son extremadamente útiles para organizar índices de memorias, comparar estructuras de capítulos o resumir conceptos generales de una normativa **siempre que el usuario aporte el texto oficial vigente**. Sin embargo, cuando se les pregunta directamente *«¿Qué sección mínima exige el reglamento actual en mi ciudad para este circuito?»*, los modelos de lenguaje sufren con frecuencia **alucinaciones normativas**: mezclan artículos de ediciones derogadas, confunden reglamentos de países hispanohablantes entre sí o citan con total seguridad números de tabla inexistentes.

Por ello, en ingeniería eléctrica profesional el uso de IA exige un doble blindaje: (1) construir una **Matriz de Cumplimiento Normativo** basada exclusivamente en boletines oficiales, normas originales adquiridas y guías de la AHJ; y (2) tratar toda respuesta normativa de una IA como **hipótesis no verificada** hasta contrastarla línea por línea con la fuente primaria oficial, manteniendo siempre anonimizados los datos del cliente.

#### Conceptos clave
- **Matriz de Cumplimiento Normativo:** tabla de proyecto que vincula cada requisito de diseño (tensiones, caída de tensión, colores, reacción al fuego, tierra, iluminancias) con su código oficial exacto, artículo y fecha de verificación.
- **Alucinación normativa en LLM:** generación verosímil pero falsa de artículos, porcentajes, calibres o fechas de vigencia reglamentaria por parte de modelos entrenados con texto heterogéneo de internet.
- **Principio de fuente primaria oficial:** validar todo criterio legal directamente en publicaciones oficiales del Estado, comités de normalización o documentos de la distribuidora, nunca en blogs ni respuestas sin respaldo documental de una IA.
- **Gobernanza de datos y confidencialidad:** prohibido subir pliegos confidenciales, contratos o planos con datos identificativos de clientes a herramientas públicas de IA sin autorización expresa.

#### Definiciones necesarias
- **Trazabilidad normativa:** capacidad de justificar cada decisión técnica de un proyecto (cálculo, plano o especificación) mediante una cadena documental verificable que enlaza el requisito de proyecto con el artículo exacto de la norma vigente aplicable.
- **Auditoría de edición vigente:** procedimiento periódico de comprobación de la fecha de entrada en vigor, modificaciones, notas aclaratorias y corrección de errores de un reglamento técnico antes de iniciar un expediente.

#### Ejemplo práctico realista
Un proyectista pregunta a ChatGPT: *«Según el reglamento vigente en Colombia, ¿cuál es el porcentaje máximo de caída de tensión y la edición obligatoria del código?»*. La IA responde con gran seguridad citando un porcentaje único y una edición antigua ya sustituida o mezclada con requisitos de otro país. Para evitar un rechazo de inspección:
1. El técnico **no copia ni firma** la respuesta de la IA.
2. Accede a los portales oficiales competentes (en ese ejemplo ilustrativo, Ministerio de Minas y Energía / ICONTEC para comprobar la vigencia exacta de RETIE y NTC 2050, o el BOE y guías del Ministerio en el caso de España, o NFPA/autoridad municipal en EE. UU.).
3. Si necesita usar Claude o ChatGPT para extraer una lista de chequeo, **pega anonimizado el fragmento exacto del texto oficial vigente** y le pide únicamente estructurarlo en una tabla de verificación sin añadir requisitos externos.

#### Errores frecuentes
- Confiar en la fecha de corte de conocimiento de un modelo de IA para decidir qué edición normativa está vigente hoy en un país concreto.
- Pedir a ChatGPT citas exactas de artículos legales de memoria sin proporcionar el documento oficial en el contexto del prompt.
- Omitir en la memoria de cálculo el año o edición exacta de la normativa aplicada («se cumple el reglamento eléctrico» en abstracto).
- Cargar archivos PDF completos con información confidencial de clientes o licitaciones privadas en cuentas gratuitas de IA sin permiso.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué los modelos de IA tienden a mezclar ediciones derogadas o normativas de distintos países hispanohablantes cuando se les consulta sobre reglamentos eléctricos?
2. ¿Qué elementos mínimos debe contener cada fila de una Matriz de Cumplimiento Normativo para considerarse trazable y auditable?
3. ¿Cómo se puede utilizar Claude o ChatGPT de forma segura y útil al revisar requisitos normativos sin exponer datos confidenciales ni aceptar alucinaciones legales?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** combina análisis crítico de errores reales de jurisdicción, microlearning normativo comparado, detección en directo de alucinaciones legales de IA y resolución aplicada de un caso internacional bipais.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
|---|---|---|---|
| **1. Activación: Fronteras legales y mitos normativos** | 00:00 – 00:25 (25 min) | Recuerda el límite técnico-legal del programa (sin habilitación automática de firma) y lanza la **Actividad 1** («¿Qué norma manda aquí?») con 6 escenarios conflictivos entre países y herramientas. | Vota y debate qué documento prevalece en cada caso (reglamento nacional, norma técnica, distribuidora, DIALux o Revit MEP). |
| **2. Microlearning A: Jerarquía normativa y protocolo AHJ** | 00:25 – 01:05 (40 min) | Expone los apartados 3.1 y 3.2 detallando la pirámide jurídica, las disposiciones transitorias y el protocolo paso a paso para auditar jurisdicción y edición vigente. | Completa en su ficha de trabajo el diagrama de jerarquía y aplica el protocolo de auditoría previa a su propia localidad o proyecto tipo. |
| **3. Microlearning B: Panorama comparado (IEC, REBT, NEC, EN 12464-1) e IA** | 01:05 – 01:45 (40 min) | Expone los apartados 3.3 y 3.4 mostrando ejemplos ilustrativos comparados (métrico $\text{mm}^2$ vs. AWG, códigos de color, alumbrado) y demuestra en vivo una alucinación normativa típica de un LLM. | Registra diferencias críticas entre códigos en una tabla comparativa y analiza el fallo generado en directo por la demostración de IA. |
| **4. Actividad práctica de aplicación técnica** | 01:45 – 02:15 (30 min) | Dirige la **Actividad 2** (auditoría de una memoria contaminada con salidas falsas de IA y cruce de normativas). Supervisa mesas/salas y aporta retroalimentación. | Detecta y corrige 5 afirmaciones normativas falsas o descontextualizadas en un extracto técnico redactado con IA. |
| **Descanso activo** | 02:15 – 02:30 (15 min) | Pausa de desconexión; habilita tablero para consultar dudas sobre reglamentos de los países representados en el grupo. | Descansa fuera de pantalla y anota códigos locales que desea contrastar en la segunda parte. |
| **5. Estudio del caso práctico** | 02:30 – 03:15 (45 min) | Presenta el caso *Ingeniería Noroeste BIM S.L.* (locales gemelos en Madrid y Ciudad de México), organiza grupos de 3–4 personas y guía la construcción de las matrices normativas. | En equipos, separa requisitos aplicables a España y México, identifica las fuentes oficiales a consultar y corrige la memoria errónea. |
| **6. Discusión guiada y transferencia a proyecto real** | 03:15 – 03:45 (30 min) | Modera la exposición de 2–3 equipos sobre el caso y dirige la **Actividad 3** (creación de la Matriz de Cumplimiento Normativo para el proyecto propio de cada alumno/a). | Contrasta las diferencias entre ambas jurisdicciones y elabora su Matriz Normativa inicial (mínimo 8 ítems verificables + prompt seguro). |
| **7. Síntesis, evaluación sumativa y cierre** | 03:45 – 04:00 (15 min) | Sintetiza las reglas de oro de trazabilidad normativa y uso seguro de IA, lanza el cuestionario sumativo final y conecta con el Tema 4 (Cálculo de cargas eléctricas). | Realiza el test sumativo breve (6 preguntas), completa la autoevaluación y archiva su matriz para usarla en los temas de cálculo. |

**Total exacto:** 25 + 40 + 40 + 30 + 15 + 45 + 30 + 15 = **240 minutos (4 horas)**.

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «¿Qué norma manda aquí?»

- **Objetivo**: Activar el criterio jerárquico del alumnado distinguiendo entre legislación obligatoria, norma técnica de referencia, especificaciones de distribuidora y parámetros por defecto de software.
- **Instrucciones para el alumnado**:
  1. Lee los 6 dilemas breves proyectados en pantalla (por ejemplo: conflicto entre una tabla de fabricante y el reglamento nacional; familia Revit con colores estadounidenses importada en Europa; render en Twinmotion aprobado por el cliente frente a duda sobre alumbrado de emergencia; requisito específico de hornacina exigido por la distribuidora local).
  2. Durante 7 minutos, selecciona individualmente qué criterio manda en cada situación y qué documento oficial debe consultarse primero.
  3. Debate en plenario (8 minutos) justificando por qué el criterio comercial o el software BIM nunca prevalecen sobre la normativa vigente.
- **Materiales necesarios**: Diapositiva con 6 dilemas y encuesta en vivo (Mentimeter/Slido o tarjetas).
- **Tiempo estimado**: 15 minutos (integrados en la Fase 1).
- **Rol del formador**: Provocar respuestas rápidas, corregir mitos sobre «lo que siempre se ha hecho en obra» y remarcar la jerarquía jurídica.
- **Producto o entregable esperado**: Mapa de prioridades normativas consensuado por el grupo.
- **Criterios de éxito**: Al menos el 90 % del alumnado ubica correctamente la primacía de la legislación vigente y las exigencias de la AHJ/distribuidora frente a catálogos y software.

### Actividad 2 (Aplicación técnica): Detector de alucinaciones normativas en IA

- **Objetivo**: Desarrollar el hábito profesional de auditar cualquier afirmación reglamentaria generada por ChatGPT o Claude antes de incorporarla a un proyecto eléctrico o modelo BIM.
- **Instrucciones para el alumnado**:
  1. En equipos de 3 personas (20 minutos), recibid un extracto de 1 página de una «memoria descriptiva generada con IA» que contiene 5 errores intencionados: (a) afirma que un certificado de formación BIM autoriza a firmar el boletín eléctrico; (b) mezcla secciones métricas $\text{mm}^2$ con tablas NEC sin conversión ni verificación; (c) cita una supuesta instrucción técnica inexistente; (d) confunde niveles de iluminancia de confort (DIALux/UNE-EN 12464-1) con alumbrado de evacuación/emergencia; y (e) omite el país y la edición vigente de los códigos citados.
  2. Subrayad cada error, explicad por qué es técnicamente o legalmente inaceptable y redactad la nota de verificación obligatoria para cada punto.
  3. En 10 minutos finales, compartid en plenario el hallazgo más engañoso (el que parecía «más convincente»).
- **Materiales necesarios**: Extracto impreso o digital de la memoria contaminada con IA y lista de chequeo de auditoría normativa.
- **Tiempo estimado**: 30 minutos (Fase 4).
- **Rol del formador**: Circular por salas/mesas guiando la detección de los errores sutiles (especialmente la mezcla de alumbrado de confort y de seguridad o las citas apócrifas).
- **Producto o entregable esperado**: Memoria anotada con los 5 errores clasificados y su criterio de verificación en fuente oficial.
- **Criterios de éxito**: Detección clara de al menos 4 de los 5 fallos, incluyendo necesariamente los errores de habilitación legal de firma y mezcla de jurisdicciones.

### Actividad 3 (Transferencia a proyecto real): Matriz de Cumplimiento Normativo y Prompt Auditado

- **Objetivo**: Construir una herramienta práctica reutilizable para documentar el marco normativo exacto de un proyecto real y consultar asistentes de IA sin riesgos de alucinación ni fuga de datos.
- **Instrucciones para el alumnado**:
  1. Abre la **Plantilla de Matriz de Cumplimiento Normativo** (Sección 8) y define el contexto real de un proyecto tuyo (o de tu ciudad habitual de trabajo): país, municipio, uso del edificio y empresa distribuidora.
  2. Durante 20 minutos, cumplimenta al menos 8 filas cubriendo: reglamento eléctrico principal, esquemas de tierra, caída de tensión y secciones, protecciones, alumbrado interior/emergencia, eficiencia energética, protección contra incendios en canalizaciones y especificaciones de acometida/medida. En la columna «Estado de verificación», indica la fuente oficial exacta donde debes comprobar la edición vigente hoy.
  3. Redacta un prompt seguro (anonimizado y acotado a un extracto oficial que tú mismo aportarías) para pedir a Claude o ChatGPT que organice un checklist de revisión de planos.
- **Materiales necesarios**: Plantilla editable en hoja de cálculo o procesador de textos y acceso orientativo a portales oficiales de normalización/legislación.
- **Tiempo estimado**: 25 minutos (integrados en la Fase 6).
- **Rol del formador**: Mostrar una matriz modelo de 4 filas ya cumplimentada y verificar que ninguna celda de norma queda genérica («norma vigente» sin nombre, organismo ni comprobación pendiente).
- **Producto o entregable esperado**: Matriz de Cumplimiento Normativo inicial del proyecto propio + prompt seguro de apoyo documental.
- **Criterios de éxito**: Matriz con al menos 8 requisitos diferenciados por ámbito, identificación explícita de la AHJ y fuentes oficiales a comprobar, y prompt redactado sin datos confidenciales.

---

## 6. Caso práctico

### Caso práctico: *Ingeniería Noroeste BIM S.L.* — El proyecto franquiciado en dos países que falló la revisión previa

#### Contexto empresarial
**Ingeniería Noroeste BIM S.L.** es un estudio de ingeniería multidisciplinar de 16 profesionales con sede en A Coruña (España), especializado en implantaciones comerciales llave en mano en Revit MEP y estudios lumínicos en DIALux. Acaba de firmar un contrato con una cadena de tiendas de óptica y audiología para diseñar dos locales gemelos en concepto arquitectónico e imagen corporativa: el **Local A** en un centro comercial de Madrid (España) y el **Local B** en un local a pie de calle en Ciudad de México (México).

#### Situación o problema
Para ahorrar tiempo, la dirección técnica encargó a un delineante-modelador junior preparar una «base normativa única» usando un proyecto anterior de 2014 y apoyándose en consultas rápidas a ChatGPT. Al revisar el paquete previo antes de iniciar los cálculos de carga, la jefa de ingeniería detecta graves incoherencias:
1. El junior utilizó la misma tabla de caída de tensión y los mismos calibres en $\text{mm}^2$ para Madrid y para Ciudad de México porque «como el proyecto es en español, los reglamentos técnicos son equivalentes».
2. ChatGPT le generó una lista de artículos atribuidos simultáneamente a «IEC/REBT/NOM» mezclando ediciones derogadas, y además subió al chat el plano DWG original con el nombre comercial confidencial de la franquicia, dirección exacta y datos del promotor.
3. En el Local A (Madrid), ignoró tanto la posible clasificación de local de pública concurrencia / requisitos de centro comercial como las exigencias de alumbrado eficiente (CTE) y cableado libre de halógenos/reacción al fuego, dando por bueno solo el render de Twinmotion y un cálculo de $500\ \text{lx}$ en DIALux.
4. En el Local B (Ciudad de México), mantuvo en Revit MEP una tensión de `400/230 V 50 Hz` cuando la red pública habitual de servicio comercial en México opera a `60 Hz` y con tensiones y códigos nacionales propios (por ejemplo, NOM-001-SEDE y normativa de la suministradora CFE — a verificar en proyecto).

#### Datos disponibles

| Elemento del expediente | Local A — Madrid (España) | Local B — Ciudad de México (México) |
|---|---|---|
| **Tipología de inmueble** | Local comercial de $240\ \text{m}^2$ dentro de centro comercial | Local comercial a pie de calle de $240\ \text{m}^2$ |
| **Marco regulatorio ilustrativo a verificar** | Reglamento estatal de baja tensión (p. ej. REBT RD 842/2002 e ITC aplicables), CTE (DB-HE3, DB-SI/SUA), Reglamento CPR, normas particulares de distribuidora y normativa del centro comercial *(verificar ediciones vigentes)* | Norma oficial mexicana de instalaciones eléctricas (p. ej. NOM-001-SEDE en edición vigente publicada en DOF), especificaciones de compañía suministradora (CFE) y reglamento de construcciones local *(verificar edición vigente)* |
| **Sistema eléctrico real esperado** | $400/230\ \text{V}$, $50\ \text{Hz}$ (confirmar acometida con propiedad/distribuidora) | $60\ \text{Hz}$ (confirmar tensión exacta $220\text{Y}/127\ \text{V}$, $208\text{Y}/120\ \text{V}$ u otra con suministradora CFE) |
| **Unidad normalizada de conductores** | Sistema métrico ($\text{mm}^2$) | Calibres AWG/kcmil (o equivalentes aceptados en NOM vigente) |
| **Requisitos lumínicos** | Confort en DIALux (p. ej. referencia UNE-EN 12464-1) + límites eficiencia energética CTE + alumbrado emergencia | Confort lumínico + normas oficiales mexicanas de eficiencia energética en alumbrado no residencial (p. ej. NOM-ENER vigentes a comprobar) |
| **Incidencia con IA y datos** | Se subieron planos DWG con marca y ubicación reales a IA pública y se aceptaron citas normativas sin contraste | Igual fuga de confidencialidad y mezcla de tablas métricas europeas con red de $60\ \text{Hz}$ |

#### Preguntas de análisis
1. ¿Qué fallos de jerarquía normativa, jurisdicción y AHJ se cometieron al intentar unificar ambos locales bajo una misma memoria y plantilla BIM?
2. ¿Qué elementos concretos cambian obligatoriamente entre el Local A (Madrid) y el Local B (Ciudad de México) aunque el diseño estético y las luminarias arquitectónicas parezcan idénticos?
3. ¿Qué diferencia técnica y legal hay entre aprobar la propuesta estética en Twinmotion/DIALux y acreditar el cumplimiento normativo eléctrico en ambos países?
4. ¿Qué brechas de confidencialidad y validación técnica ocurrieron en el uso de ChatGPT y cómo deben remediarse de inmediato?

#### Tarea a realizar
En equipos de 3–4 personas (30 minutos de trabajo + 15 minutos de puesta en común), elaborad el **Protocolo Bicultural de Cumplimiento Normativo para *Ingeniería Noroeste BIM S.L.*** que incluya:
1. **Tabla comparativa de auditoría previa** separando Local A y Local B (jurisdicción, AHJ/inspección, compañía suministradora, códigos ilustrativos y documentos oficiales primarios donde confirmar la edición vigente hoy).
2. **Lista de 5 parámetros técnicos que deben bifurcarse en Revit MEP** entre la plantilla de Madrid y la plantilla de Ciudad de México (tensiones, frecuencia, sistema de calibres, nomenclatura/colores a confirmar y familias).
3. **Separación de entregables:** qué valida cada herramienta (cálculo eléctrico normativo vs. DIALux vs. Revit MEP vs. Twinmotion) y quién debe asumir la firma/habilitación legal en cada país.
4. **Protocolo interno de IA y confidencialidad** (4 reglas obligatorias antes de usar asistentes de IA en el estudio).

#### Posibles soluciones o criterios de análisis
Un protocolo sólido por parte de los equipos debe recoger:
- **Separación estricta de jurisdicciones:** aunque el cliente sea la misma cadena comercial, Madrid y Ciudad de México requieren **dos expedientes normativos, dos cálculos eléctricos y dos configuraciones BIM independientes**. Nunca se traslada una memoria ni una tabla de calibres entre países sin auditoría previa.
- **Identificación de AHJ y verificación vigente:**
  - En Madrid: confirmar vigencia del REBT y sus ITC (p. ej. pública concurrencia ITC-BT-28, cables CPR), CTE vigente, ordenanzas municipales y normas técnicas del centro comercial y distribuidora, con proyecto/certificado firmado por técnico titulado y habilitado en España.
  - En Ciudad de México: confirmar edición vigente de la **NOM-001-SEDE** en el Diario Oficial de la Federación (DOF), normas de eficiencia energética aplicables, requerimientos de **CFE** y necesidad de Unidad de Verificación de Instalaciones Eléctricas (**UVIE**) según carga/concentración pública conforme a la legislación mexicana vigente, además de firma por profesional habilitado en México.
- **Bifurcación BIM y fotométrica:** en Revit MEP se bifurcan dos modelos/plantillas (`400/230 V 50 Hz` en $\text{mm}^2$ vs. tensión trifásica confirmada `60 Hz` en AWG/kcmil). El modelo de Twinmotion puede compartir apariencia de tienda, pero **no valida ni homologa** ninguna instalación. DIALux aporta estudio lumínico (iluminancia, uniformidad, UGR), que deberá contrastarse con las exigencias energéticas y de emergencia propias de cada país.
- **Saneamiento de IA y privacidad:** retirar inmediatamente datos confidenciales y planos propietarios de herramientas públicas sin acuerdo corporativo de privacidad; prohibir aceptar citas de artículos generadas por IA sin verificar el boletín oficial; usar prompts anonimizados solo sobre textos normativos verificados aportados por el ingeniero.

#### Preguntas de reflexión final
- ¿Cuánto tiempo «ahorrado» al copiar una plantilla de 2014 o usar un prompt rápido en IA se convierte en sobrecoste cuando una entidad de inspección rechaza el proyecto?
- ¿Qué protocolo implantarías en tu estudio o empresa para asegurarte de que nadie reutilice una memoria antigua sin revisar cambios normativos recientes?

---

## 7. Evaluación

### Evaluación diagnóstica
- **Instrumento:** Sondeo de 6 dilemas jerárquicos en la Fase 1 (Actividad 1) para diagnosticar falsas creencias sobre obligatoriedad de normas IEC, rol de las distribuidoras, validez legal del BIM y habilitación profesional.
- **Propósito:** Ajustar el énfasis de la exposición según la experiencia normativa previa del alumnado. No califica.

### Evaluación formativa
- **Observación estructurada** durante la Actividad 2 (detección de 5 alucinaciones y errores legales en memoria generada con IA) y durante el análisis del caso bipais *Ingeniería Noroeste BIM S.L.*
- **Comprobación rápida de Matrices de Cumplimiento (Actividad 3)** verificando que ningún alumno utilice etiquetas genéricas sin citar organismo ni comprobación vigente.

### Evaluación sumativa
Consta de dos instrumentos complementarios:
1. **Cuestionario breve online (6 preguntas de criterio normativo y control de IA, 10 minutos, 40 % del tema):** evalúa jerarquía legal, identificación de AHJ y ediciones vigentes, distinción métrico/AWG y límites de la IA.
2. **Entregable combinado: Protocolo del caso *Ingeniería Noroeste BIM S.L.* + Matriz de Cumplimiento Normativo propia (Actividad 3) (60 % del tema)**, evaluado conforme a la rúbrica siguiente.

### Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
|---|---|---|---|---|
| **1. Comprensión de jerarquía normativa y AHJ** | Confunde normas voluntarias, catálogos o software BIM con reglamentos de obligado cumplimiento. | Identifica el reglamento principal, pero omite el rol de la AHJ, compañía distribuidora o códigos transversales (edificación/incendios). | Ordena correctamente la jerarquía jurídica e identifica país, jurisdicción, AHJ y necesidad de comprobar la edición vigente. | Construye un mapa exhaustivo incluyendo régimen transitorio, normativa transversal, pliegos de distribuidora y límites legales de firma facultativa. |
| **2. Diferenciación internacional y de herramientas** | Mezcla parámetros de códigos distintos (p. ej., REBT con NEC/NOM) o atribuye validez normativa a DIALux/Twinmotion/Revit. | Separa los países básicamente, pero mantiene ambigüedades en unidades ($\text{mm}^2$/AWG) o en el alcance de cada herramienta. | Bifurca correctamente los requisitos por país y distingue cálculo normativo, cálculo lumínico, modelado BIM y visualización. | Detalla con precisión los ajustes exactos que cambian en Revit MEP y en cálculos eléctricos al cambiar de código nacional. |
| **3. Trazabilidad de la Matriz de Cumplimiento** | Entrega una lista vaga («cumplir normativa eléctrica vigente») sin artículos, ámbitos ni fuentes oficiales identificadas. | Incluye varios ámbitos normativos, pero deja casillas genéricas sin indicar dónde validar ediciones vigentes. | Presenta una matriz completa (mínimo 8 ítems) vinculando cada requisito técnico con su código ilustrativo y fuente oficial de verificación. | Entrega una matriz profesional auditable lista para adjuntar a memorias técnicas, con fechas de comprobación y control de cambios. |
| **4. Control de alucinaciones y privacidad en IA** | Reproduce respuestas normativas no verificadas de IA o mantiene datos reales/planos confidenciales en prompts externos. | Reconoce que la IA puede equivocarse, pero propone controles ambiguos o incompletos sobre fuentes oficiales y privacidad. | Detecta alucinaciones normativas en IA, exige verificación en fuentes primarias oficiales y aplica anonimización sistemática. | Diseña un protocolo operativo completo de uso seguro de IA con prompts acotados a texto oficial verificado y trazabilidad humana. |

### Actividad de autoevaluación
Al concluir el tema, cada participante responde en su ficha o campus virtual:
1. *¿Qué organismo o boletín oficial debo consultar en mi país/región para comprobar hoy mismo si un reglamento eléctrico ha tenido modificaciones o erratas?*
2. *Si un compañero me envía un parámetro descargado de internet o una respuesta de ChatGPT sobre un código eléctrico, ¿qué tres comprobaciones haré antes de adoptarlo?*
3. *¿Qué diferencia entre responsabilidad técnica de diseño y habilitación legal para firmar proyectos queda ahora totalmente clara en mi práctica profesional?*

---

## 8. Materiales y recursos

### Guion de diapositivas

| Diapositiva | Título y objetivo visual | Contenido clave y notas del formador |
|---|---|---|
| **Slide 1** | **Portada y aviso de alcance profesional** | Tema 3 (Bloque 1 · 3/11), 5 objetivos Bloom y recordatorio explícito: el programa no habilita por sí solo para firma oficial ni sustituye la comprobación del código vigente. |
| **Slide 2** | **Actividad 1: «¿Qué norma manda aquí?»** | 6 tarjetas con dilemas reales (reglamento vs. catálogo, distribuidora vs. estándar, BIM vs. ley) para encuesta en directo. |
| **Slide 3** | **La pirámide normativa en instalaciones eléctricas** | Gráfico jerárquico de 5 niveles: Leyes/Reglamentos $\to$ ITC $\to$ Normas técnicas $\to$ Distribuidora $\to$ Ordenanzas locales/sectoriales. |
| **Slide 4** | **Protocolo de auditoría previa (Jurisdicción y AHJ)** | Diagrama de flujo en 4 pasos: País/Municipio $\to$ Uso/Riesgo $\to$ AHJ/Distribuidora $\to$ Edición vigente y disposiciones transitorias. |
| **Slide 5** | **Mapa comparado ilustrativo de códigos** | Tabla visual orientativa: IEC 60364, REBT (España), NEC/NFPA 70, códigos nacionales LATAM y UNE-EN 12464-1 (puente con DIALux), destacando la obligación de verificación vigente. |
| **Slide 6** | **Alucinaciones normativas en IA y privacidad** | Captura comentada de una respuesta falsa pero convincente de LLM + protocolo de anonimización y contraste en fuentes oficiales primarias. |
| **Slide 7** | **Caso práctico: *Ingeniería Noroeste BIM S.L.*** | Cuadro comparativo de los locales gemelos en Madrid y Ciudad de México con las 4 incidencias técnicas, legales y de IA a resolver. |
| **Slide 8** | **Síntesis, plantilla normativa y puente al Tema 4** | 5 reglas de blindaje normativo, presentación de la Matriz de Cumplimiento y anticipo del Tema 4 (Cálculo de cargas eléctricas según normativa). |

### Ficha de trabajo
Documento editable (2 páginas) con:
1. **Pirámide normativa muda:** esquema para ordenar las fuentes jurídicas de la jurisdicción propia del alumno.
2. **Registro de auditoría de la Actividad 2:** tabla para clasificar las 5 alucinaciones de la memoria generada por IA.
3. **Hoja de resolución del caso *Ingeniería Noroeste BIM S.L.*:** comparativa paralela Madrid vs. Ciudad de México.

### Plantilla técnica práctica
**Matriz de Cumplimiento Normativo del Proyecto (v1.0)**:

| ID | Ámbito técnico | Parámetro / Requisito a justificar | Código / Norma ilustrativa aplicable | Edición / Año verificado | Organismo / Fuente oficial primaria | Responsable verificación |
|---|---|---|---|---|---|---|
| N-01 | Baja tensión general | Reglas generales, sistemas y protecciones | *(Ej. REBT RD 842/2002 o NOM-001-SEDE)* | *(A comprobar)* | *(BOE / DOF / Portal oficial)* | *(Iniciales + fecha)* |
| N-02 | Acometida y medida | Ubicación CGP, contadores y enlace | *(Normas particulares distribuidora local)* | *(A comprobar)* | *(Portal técnico distribuidora)* | *(Iniciales + fecha)* |
| N-03 | Iluminación interior | Iluminancia, uniformidad, UGR y eficiencia | *(Ej. UNE-EN 12464-1 + CTE DB-HE3)* | *(A comprobar)* | *(UNE / Organismo edificación)* | *(Iniciales + fecha)* |
| N-04 | Seguridad incendio y cables | Reacción al fuego y alumbrado emergencia | *(Ej. CPR + CTE DB-SI/SUA o NFPA 101)* | *(A comprobar)* | *(Boletín / AHJ bomberos)* | *(Iniciales + fecha)* |

### Lecturas y recursos recomendados
> **Advertencia obligatoria de validación:** Todos los organismos, códigos y portales citados son ejemplos ilustrativos. Antes de utilizarlos en aula o proyecto real, el formador y el alumnado deben verificar directamente en las webs oficiales correspondientes qué edición, modificaciones y guías técnicas están legalmente vigentes en el país del proyecto.

- **International Electrotechnical Commission (IEC)** — Catálogo y resúmenes oficiales de la serie *IEC 60364 (Low-voltage electrical installations)* en `iec.ch` (*validar edición vigente de cada parte*).
- **Ministerio competente / Boletín Oficial del Estado (BOE, España)** — Texto consolidado del *Reglamento Electrotécnico para Baja Tensión (REBT)*, Guías Técnicas de Aplicación y *Código Técnico de la Edificación (CTE)* como caso ilustrativo europeo (*comprobar consolidación y reformas vigentes*).
- **National Fire Protection Association (NFPA)** — Portal oficial de códigos *NFPA 70 (National Electrical Code, NEC)* y estado de adopción por jurisdicciones (*comprobar edición adoptada por la AHJ local*).
- **Organismos nacionales de normalización y energía** (por ejemplo, UNE en España, Secretaría de Energía/DOF en México, Ministerio de Minas/ICONTEC en Colombia, IRAM/AEA en Argentina) — Para verificar siempre la fuente oficial primaria aplicable.

### Glosario de términos clave

| Término | Definición |
|---|---|
| **Alucinación normativa** | Error mediante el cual un modelo de IA inventa, mezcla o cita como vigentes artículos, tablas o ediciones de reglamentos eléctricos incorrectos o derogados. |
| **Autoridad Competente (AHJ)** | Organismo público, entidad inspectora o funcionario legalmente facultado para aprobar, interpretar y hacer cumplir los códigos aplicables en un territorio. |
| **Código modelo** | Conjunto estructurado de requisitos técnicos publicado por una entidad normativa que adquiere obligatoriedad legal cuando es adoptado por una jurisdicción. |
| **Disposición transitoria** | Norma temporal que regula qué edición reglamentaria aplica a proyectos iniciados o en tramitación durante el cambio entre dos versiones legales. |
| **Fuente primaria oficial** | Publicación directa del boletín oficial estatal, comité oficial de normalización o pliego oficial de distribuidora que acredita la vigencia exacta de un requisito. |
| **Jerarquía normativa** | Principio jurídico que ordena leyes, reglamentos, normas técnicas y especificaciones particulares estableciendo qué disposición prevalece en caso de conflicto. |
| **Jurisdicción eléctrica** | Ámbito territorial y sectorial que determina qué reglamentos obligatorios y códigos complementarios rigen una instalación. |
| **Trazabilidad normativa** | Documentación explícita que vincula cada hipótesis o resultado de cálculo de un proyecto con el artículo, tabla y edición vigente de la norma aplicada. |

---

## 9. Adaptaciones

### Sesión presencial
- **Actividad 1 participativa:** entregar tarjetas físicas con el nombre de cada documento («Reglamento estatal», «Catálogo de fabricante», «Render Twinmotion», «Norma distribuidora», «Plantilla Revit») para ordenarlas físicamente sobre la mesa en forma de pirámide antes del debate.
- **Revisión impresa de la Actividad 2:** trabajar sobre copias en papel de la memoria contaminada con rotulador fluorescente para subrayar las alucinaciones de IA y discutirlas en grupo.
- **Mural de códigos:** anotar en pizarra los códigos reales de los países o regiones presentes entre los asistentes de la sala.

### Sesión online síncrona
- **Encuestas y salas virtuales:** usar sondeo interactivo en la Fase 1 y *breakout rooms* de 3–4 personas para analizar la memoria contaminada (Actividad 2) y el caso *Ingeniería Noroeste BIM S.L.*
- **Demostración controlada de IA:** mostrar en vivo (o con capturas verificadas para evitar latencias) cómo una pregunta genérica sin país ni edición induce al LLM a mezclar códigos, contrastándolo al momento frente a un boletín oficial abierto en otra pestaña.
- **Pausa activa:** respetar estrictamente el descanso de 15 minutos a mitad de sesión.

### Sesión asíncrona
- **Cápsulas grabadas:** dividir los apartados 3.1 a 3.4 en cuatro vídeos breves de 12 minutos más una demostración comentada de 8 minutos sobre cómo verificar vigencia en portales oficiales.
- **Foro internacional de matrices:** cada estudiante publica la Matriz de Cumplimiento Normativo de su país/ciudad en el foro y revisa la matriz de otro participante comprobando que incluye edición vigente, AHJ y fuentes oficiales primarias.
- **Control de entregables:** habilitar cuestionario autocorregible sobre alucinaciones normativas antes de permitir la entrega de la matriz final.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** da marco jurídico y procedimental a las tensiones, frecuencias y esquemas de conexión a tierra vistos en el Tema 2, aclarando por qué no existe un único estándar universal sino reglas dependientes de país y edición vigente.
- **Competencias que desarrolla:** auditoría normativa previa, lectura jerárquica de códigos eléctricos y de edificación, trazabilidad documental, gobierno de plantillas BIM multirregión y control crítico frente a alucinaciones legales de IA.
- **Conexión dentro del plan de 6 módulos / 50 temas:**
  - **Tema anterior:** **Tema 2. Tipos de sistemas eléctricos** (Bloque 1, Tema 2 de 11), cuyas configuraciones ($1\text{F}$, *split-phase*, $3\text{F}$, TT/TN/IT) requieren validación bajo un código territorial concreto.
  - **Tema posterior:** **Tema 4. Cálculo de cargas eléctricas según normativa actual** (Bloque 1, Tema 4 de 11), donde la Matriz de Cumplimiento construida hoy determinará qué factores de demanda, simultaneidad y criterios de cuadro de cargas deben aplicarse y documentarse.
- **Evidencia de aprendizaje:**
  1. **Protocolo Bicultural del caso *Ingeniería Noroeste BIM S.L.*** (separación Madrid vs. Ciudad de México + reglas de privacidad/IA).
  2. **Matriz de Cumplimiento Normativo del proyecto propio (Actividad 3)** con al menos 8 requisitos y fuentes oficiales identificadas.
  3. **Cuestionario sumativo final completado** (6 preguntas).

---

## Siguientes pasos para el formador

1. **Actualizar ejemplos de portales oficiales 48 horas antes:** comprobar que las rutas de acceso a los boletines oficiales o páginas informativas de los códigos citados como ejemplo funcionan correctamente y reflejan su situación vigente.
2. **Preparar la memoria contaminada de la Actividad 2:** revisar que los 5 errores introducidos sean realistas y representativos de fallos reales que cometen los LLM en diseño eléctrico.
3. **Solicitar al alumnado su país/uso objetivo:** recopilar al inicio de la sesión en qué países o tipos de edificios trabajan los participantes para personalizar los ejemplos durante los debates.
4. **Reforzar el mensaje de límites profesionales:** reiterar al cierre que ningún resultado de IA ni plantilla formativa sustituye al código oficial vigente ni otorga atribuciones legales de firma.
5. **Enlazar con el Tema 4:** indicar al grupo que tenga a mano su Matriz Normativa y su Ficha de Magnitudes (Tema 1) para construir en la próxima sesión el cuadro de cargas y el balanceo de fases.
