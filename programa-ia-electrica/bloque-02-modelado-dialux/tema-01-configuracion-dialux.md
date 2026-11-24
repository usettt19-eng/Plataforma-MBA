# Tema 1. Configuración de DIALux

## 1. Ficha del tema

| Campo | Detalle |
| :--- | :--- |
| **Título del tema** | Configuración de DIALux |
| **Bloque y posición dentro del programa** | Bloque 2: Modelado en DIALux — Posición 1 de 5 (Tema 12 de 50 del programa) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Conocimientos básicos de magnitudes eléctricas y luminotécnicas (flujo, iluminancia, potencia eléctrica), lectura de planos técnicos en 2D y manejo básico de software técnico en entorno Windows. |
| **Resultado general de aprendizaje** | Al finalizar la sesión, el alumnado será capaz de configurar un proyecto nuevo en DIALux (unidades métricas SI, perfil de proyecto, normativa de referencia verificada, planos de utilidad y estructura de zonas y capas) dejando preparada una base metodológicamente limpia y trazable para la importación de planos y el cálculo fotométrico posterior. |

---

## 2. Objetivos de aprendizaje

Al completar esta sesión de 4 horas, el alumnado será capaz de:

1. **Identificar** los módulos principales de la interfaz de DIALux y el orden lógico de su flujo de trabajo desde la configuración inicial hasta la documentación *(Nivel de Bloom: Recordar)*.
2. **Diferenciar** las funciones del plano de utilidad, las áreas de tarea visual, las áreas circundantes y las áreas de fondo dentro de la estructuración de un recinto *(Nivel de Bloom: Comprender)*.
3. **Configurar** correctamente las unidades métricas del Sistema Internacional, los datos generales del proyecto y la jerarquía de edificio, plantas, locales y capas en un archivo nuevo de DIALux *(Nivel de Bloom: Aplicar)*.
4. **Analizar** la correspondencia entre los perfiles de utilización predeterminados del software y los requisitos normativos vigentes aplicables según país, uso del edificio y autoridad competente *(Nivel de Bloom: Analizar)*.
5. **Evaluar** una plantilla base de proyecto configurada por terceros para detectar errores de unidades, omisiones en la zonificación de tareas o confusiones entre requisitos fotométricos y cálculo eléctrico normativo *(Nivel de Bloom: Evaluar)*.

---

## 3. Contenidos esenciales

### 3.1. Interfaz y flujos de trabajo en DIALux (evo / versión vigente del centro)

#### Explicación breve y clara
DIALux (en su entorno habitual DIALux evo, cuya disposición exacta de iconos puede variar ligeramente según la versión instalada en el centro o empresa) estructura el proyecto mediante un flujo de trabajo secuencial de pestañas superiores y herramientas laterales contextuales. No es un programa de dibujo CAD general ni de cálculo eléctrico reglamentario, sino un motor fotométrico tridimensional orientado por fases: configuración inicial y geometría (*Construcción*), inserción y orientación de luminarias (*Luz*), configuración de cámaras/superficies (*Objetos y Cálculo*) y emisión de informes (*Documentación*). Comprender esta secuencia evita empezar a colocar luminarias antes de haber cerrado correctamente la envolvente, las alturas, las zonas de trabajo y los perfiles de cálculo.

#### Conceptos clave
- **Modos de trabajo secuenciales:** Pestañas principales (Construcción, Luz, Objetos de cálculo, Exportación/Documentación) que ordenan el proyecto de lo estructural a lo analítico.
- **Árbol de proyecto (Navegador espacial):** Jerarquía que organiza Terreno, Edificio, Planta, Local y Zonas de evaluación para evitar mezclar resultados de distintos recintos.
- **Vistas 2D y 3D sincronizadas:** Alternancia entre planta, alzado/sección y perspectiva axonométrica para comprobar cotas, solapamientos y alturas de montaje sin perder la referencia geométrica.
- **Guardado incremental y compatibilidad de versión:** Política de copias de seguridad (`.evo`) considerando que las versiones nuevas suelen abrir archivos antiguos, pero no permiten retroceso hacia versiones anteriores del software.

#### Definiciones necesarias
- **DIALux evo:** Software de simulación luminotécnica desarrollado por DIAL GmbH que permite modelar edificios completos (interiores, fachadas y exteriores) y calcular parámetros fotométricos mediante trazado fotométrico y radiosidad.
- **Flujo de trabajo fotométrico:** Secuencia ordenada que garantiza la validez geométrica y óptica del modelo antes de lanzar cálculos: configuración inicial → planos 2D → geometría → materiales → luminarias → rejillas de cálculo → análisis y memoria.
- **Proyecto de interior vs. edificio completo:** Modalidad de inicio que determina si se modela un único local rectangular rápido (*Creación rápida de local*) o un proyecto multizona basado en planos arquitectónicos (*Construcción de edificio/terreno*).

#### Ejemplo práctico realista
Un proyectista eléctrico recibe el encargo de diseñar la iluminación de una pequeña nave industrial con zona de oficinas en dos plantas (superficie total $640\ \text{m}^2$) en Zaragoza. Si elige la opción rápida de «local único vacío», no podrá evaluar simultáneamente el almacén de $7,50\ \text{m}$ de altura libre y los despachos de planta primera de $2,70\ \text{m}$ bajo falso techo con un único origen coordinado. Al iniciar el proyecto en modo **Terreno / Edificio completo**, estructura desde el principio `Edificio Principal` → `Planta Baja (Almacén + Taller)` y `Planta Primera (Oficinas)`, asignando cada área de trabajo por separado. *(Nota: los valores normativos de referencia aplicados posteriormente a cada recinto deberán contrastarse con el reglamento nacional y edición vigente aplicables en España u otro país de implantación).*

#### Errores frecuentes
- Iniciar un proyecto complejo de varias estancias usando el asistente de «local rectangular rápido» y tratar de añadir habitaciones después forzando particiones improvisadas.
- Colocar luminarias en la pestaña *Luz* antes de definir plantas, alturas y zonas de evaluación, obligando a reubicar cada punto de luz al corregir el modelo.
- Trabajar únicamente en vista 2D sin revisar las vistas 3D ni las secciones, ocultando errores de elevación de suelos o luminarias colgadas por encima del forjado.
- Subir archivos completos del proyecto o datos identificativos del cliente a asistentes de IA externos para redactar memorias sin autorización ni anonimización previa.

#### Preguntas que el alumnado debería poder responder
1. ¿Cuál es la diferencia práctica entre iniciar un proyecto mediante «local único» y «construcción de edificio completo» en DIALux?
2. ¿En qué fase del flujo de trabajo resulta imprescindible haber cerrado la jerarquía de plantas y locales antes de insertar luminarias?
3. ¿Por qué un modelo visualmente atractivo en la ventana 3D de DIALux no equivale en ningún caso a una validación eléctrica ni normativa?

---

### 3.2. Gestión de unidades métricas/imperiales y perfiles de proyecto

#### Explicación breve y clara
Un error silencioso al arrancar un proyecto en DIALux es trabajar con el sistema de unidades incorrecto o dejar sin definir las propiedades del proyecto. En ingeniería en España y Europa (así como en gran parte de Latinoamérica bajo criterios SI), los proyectos se configuran en el **Sistema Internacional (SI)**: dimensiones en metros ($\text{m}$) o milímetros ($\text{mm}$), iluminancia en **lux ($\text{lx}$)** y luminancia en **candelas por metro cuadrado ($\text{cd/m}^2$)**. Si el software permanece en unidades imperiales (pies, pulgadas, *foot-candles*), una exigencia de $500\ \text{lx}$ o una altura de $3,00\ \text{m}$ queda completamente distorsionada al compararla con los planos y cuadros eléctricos. Paralelamente, la ficha de **Perfil de proyecto** almacena nombre codificado, descripción, autor y fecha que aparecerán en la memoria PDF final.

#### Conceptos clave
- **Unidades métricas vs. imperiales:** Selección independiente en preferencias generales de DIALux para longitudes ($\text{m}$ / $\text{ft}$) e iluminación ($\text{lx}$ / $\text{fc}$, donde $1\ \text{fc} \approx 10,764\ \text{lx}$).
- **Precisión decimal y tolerancia de dibujo:** Número de decimales visibles en cotas (habitualmente 2 o 3 en metros, p. ej. $2,85\ \text{m}$) para evitar redondeos acumulados al alinear luminarias y ejes.
- **Metadatos del proyecto:** Identificación del proyecto, cliente (anonimizado si es práctica docente o si se consulta con IA), proyectista y notas técnicas de alcance que se imprimen en la cabecera del informe fotométrico.
- **Plantillas corporativas de partida:** Archivos base preconfigurados con unidades SI, logotipos propios, criterios de mantenimiento iniciales y configuración estándar de páginas de salida.

#### Definiciones necesarias
- **Lux ($\text{lx}$):** Unidad derivada del Sistema Internacional para la iluminancia, equivalente a un lumen por metro cuadrado ($1\ \text{lx} = 1\ \text{lm/m}^2$).
- **Foot-candle ($\text{fc}$):** Unidad del sistema imperial que mide la iluminancia en lúmenes por pie cuadrado ($1\ \text{fc} \approx 10,764\ \text{lx}$); no debe utilizarse en proyectos regidos por normativa métrica salvo requerimiento explícito del cliente internacional.
- **Perfil de proyecto:** Conjunto de parámetros administrativos, geográficos (si se calcula aporte diurno), de unidades y de formato documental que acompañan al archivo `.evo` desde su creación.

#### Ejemplo práctico realista
Durante la revisión de un presupuesto para un concesionario en Bilbao, un técnico abre una plantilla descargada de un catálogo norteamericano y realiza el cálculo de la zona de exposición leyendo «50» en los resultados pensando que faltan lux, cuando en realidad el software estaba configurado en *foot-candles* ($50\ \text{fc} \approx 538\ \text{lx}$). Como resultado, duplica el número de proyectores de $35\ \text{W}$ instalados, elevando la potencia total de alumbrado de $2,10\ \text{kW}$ a $4,20\ \text{kW}$, sobredimensionando el cuadro de alumbrado y empeorando la eficiencia energética del local. Al revisar la configuración inicial en unidades métricas ($\text{m}$ y $\text{lx}$), el error se detecta en menos de un minuto. *(Nota: cualquier requisito mínimo de iluminancia o límite de potencia deberá verificarse contra la normativa nacional y edición vigente aplicable en el lugar del proyecto).*

#### Errores frecuentes
- Dejar las unidades fotométricas en sistema imperial (*foot-candles*) y las geométricas en metros, generando mezclas incompatibles en la memoria.
- No configurar la ubicación geográfica, orientación Norte ni fecha/hora cuando el proyecto pretende simular iluminación natural, dando valores solares ficticios.
- Introducir nombres reales de clientes, direcciones confidenciales o datos personales en archivos de práctica que luego se comparten o se procesan con IA externa.
- Redondear dimensiones críticas a un solo decimal en pantalla (ej. mostrar $2,9\ \text{m}$ en lugar de $2,85\ \text{m}$), causando descuadres al coordinar con Revit MEP.

#### Preguntas que el alumnado debería poder responder
1. ¿Cuál es la equivalencia aproximada en lux de $30\ \text{fc}$ y qué consecuencias eléctricas tendría confundir ambas unidades en un proyecto de oficinas?
2. ¿Dónde se configuran las unidades de longitud y las unidades fotométricas en la versión de DIALux utilizada en el curso?
3. ¿Qué información mínima debe figurar en el perfil de proyecto antes de generar entregables, y qué datos conviene anonimizar si se trabaja en entornos compartidos o con IA?

---

### 3.3. Normas de referencia configurables (p. ej. UNE-EN 12464-1 a verificar por país/uso)

#### Explicación breve y clara
DIALux incorpora bases de datos de perfiles de utilización vinculados a normas luminotécnicas de referencia (habitualmente basadas en familias europeas como **EN 12464-1 / UNE-EN 12464-1** para lugares de trabajo interiores o **EN 12464-2** para exteriores, o catálogos equivalentes según idioma y configuración). Estos perfiles precargan valores objetivo orientativos de iluminancia media mantenida ($E_m$), uniformidad mínima ($U_0$), límite de deslumbramiento ($UGR_L$) e índice de reproducción cromática mínimo ($R_a$). Sin embargo, **el software no certifica legalmente el cumplimiento reglamentario**: las normas cambian de edición, cada país puede tener reglamentos adicionales de eficiencia energética o seguridad laboral (por ejemplo, en España el CTE DB-HE3 o la Guía Técnica de Lugares de Trabajo, o en otros países IEC/ASHRAE/IES), y la responsabilidad de comprobar qué norma y edición rige recae siempre en el técnico competente.

#### Conceptos clave
- **Perfil de utilización / actividad:** Preset seleccionable por recinto que precarga criterios fotométricos asociados a una tarea visual concreta (ej. «Oficina: escribir, mecanografiar, leer, procesar datos»).
- **Criterios fotométricos objetivo:** Parámetros de referencia cargados automáticamente: $E_m$ ($\text{lx}$), $U_0$ (adimensional), $UGR_L$ y $R_a$ mínimo.
- **Verificación jurisdiccional:** Obligación del proyectista de confirmar si el país, comunidad/estado, ordenanza municipal y edición normativa vigente exigen valores distintos a los precargados por el software.
- **Separación de disciplinas:** Distinción estricta entre requisitos fotométricos (DIALux), exigencias de alumbrado de emergencia (otras reglas específicas como EN 1838 o reglamento nacional) y dimensionamiento eléctrico reglamentario (REBT / IEC 60364 / NEC).

#### Definiciones necesarias
- **UNE-EN 12464-1 (ejemplo ilustrativo de referencia):** Norma europea y española sobre iluminación de los lugares de trabajo en interiores que establece recomendaciones cuantitativas y cualitativas según tarea visual; su edición vigente y trasposición aplicable deben verificarse en cada proyecto.
- **Iluminancia media mantenida ($E_m$):** Valor mínimo por debajo del cual no debe descender la iluminancia media sobre la superficie especificada al final del periodo de mantenimiento considerado.
- **Perfil personalizado de cálculo:** Conjunto de valores objetivo ajustados manualmente por el técnico en DIALux cuando una normativa local o una especificación particular del cliente difiere del estándar precargado.

#### Ejemplo práctico realista
En el diseño de un aula de informática en un centro formativo en Sevilla, el proyectista selecciona en DIALux un perfil genérico de «Zona de circulación» ($E_m = 100\ \text{lx}$) por error al crear el espacio, obteniendo «cumple» en la casilla de verificación del software con apenas 3 luminarias LED de $18\ \text{W}$. Al auditar los perfiles de uso, corrige la asignación a un perfil equivalente a «Aulas / Enseñanza nocturna o de adultos y manejo de pantallas» (ejemplo ilustrativo de referencia en torno a $E_m = 300\ \text{lx}$–$500\ \text{lx}$, $U_0 \ge 0,60$, $UGR_L \le 19$, **sujeto a verificación de la edición vigente de UNE-EN 12464-1 y normativa autonómica/estatal aplicable**). Adicionalmente, recuerda que la validación en DIALux no exime de calcular la caída de tensión ni la protección diferencial en el circuito eléctrico correspondiente.

#### Errores frecuentes
- Confiar ciegamente en el icono verde de «cumple» en DIALux sin revisar qué perfil de actividad y qué edición de norma está aplicando el programa.
- Usar un único perfil para todo el edificio (p. ej., asignar criterios de almacén de $100\ \text{lx}$ o $150\ \text{lx}$ también a las zonas de oficinas o aseos incluidos en la misma planta).
- Creer que una IA como ChatGPT o Claude conoce automáticamente el reglamento local actualizado sin aportar el texto de referencia o sin verificar los valores frente a la norma oficial vigente.
- Confundir los valores de iluminación normal de trabajo con los requisitos independientes del alumbrado de seguridad/emergencia.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué un indicador positivo de cumplimiento dentro de DIALux no garantiza por sí solo la legalidad del proyecto en un país determinado?
2. ¿Qué cuatro parámetros fotométricos principales suele cargar un perfil de utilización interior en DIALux?
3. ¿Cómo se debe proceder cuando la normativa nacional o un pliego técnico exige $E_m = 750\ \text{lx}$ en una zona de inspección y el catálogo del software propone $500\ \text{lx}$?

---

### 3.4. Planos de utilidad, áreas de trabajo y organización de capas y localizaciones

#### Explicación breve y clara
Para que los cálculos reflejen la realidad operativa de un espacio, no basta con calcular sobre el suelo a cota $0,00\ \text{m}$. DIALux distingue cada espacio físico (*Local*) de las **superficies de cálculo** y del **plano de utilidad** (*working plane*), situado habitualmente a la altura de las mesas o bancos de trabajo (por ejemplo, $0,75\ \text{m}$ o $0,80\ \text{m}$ en oficinas, o $0,85\ \text{m}$–$0,90\ \text{m}$ en talleres, frente a $0,00\ \text{m}$ en pasillos y zonas de paso). Asimismo, en recintos amplios o multifunción (como una nave industrial con mesas de control en un extremo y pasillo logístico en el otro), conviene subdividir en **áreas de tarea visual**, **áreas circundantes** y **áreas de fondo**, además de organizar capas y nomenclatura coherente desde el minuto cero.

#### Conceptos clave
- **Plano de utilidad (*Working Plane*):** Superficie horizontal virtual asociada automáticamente a cada local cuya altura respecto al suelo y margen perimetral (*wall zone*, p. ej. $0,50\ \text{m}$) define dónde se evalúa por defecto la iluminancia.
- **Zona de tarea visual (*Task Area*):** Subárea delimitada exactamente sobre los puestos donde se desarrolla la actividad principal (escritorios, líneas de montaje) para aplicar el nivel $E_m$ exigido sin sobreiluminar todo el recinto.
- **Área circundante y área de fondo (*Surrounding / Background Area*):** Franjas adyacentes a la tarea (p. ej., banda de $0,50\ \text{m}$ alrededor del área de tarea) y resto del local donde la norma permite niveles proporcionalmente menores de iluminancia para optimizar energía.
- **Localizaciones y capas:** Convención de nombres (`P01_E01_OficinaTecnica`) y activación/ocultación de capas gráficas importadas para evitar errores visuales de selección.

#### Definiciones necesarias
- **Plano de utilidad:** Superficie de referencia horizontal en la que se mide o calcula normalmente la iluminancia de un local cuando no existen áreas de tarea específicas definidas; suele descontar una franja perimetral junto a los muros salvo indicación contraria.
- **Zona de margen perimetral (*Wall Zone*):** Franja junto a las paredes (habitualmente $0,50\ \text{m}$ en criterios tipo EN 12464-1 para el plano de utilidad general, aunque depende del uso y norma aplicable) excluida de la rejilla de evaluación para no penalizar artificialmente la uniformidad $U_0$.
- **Área de tarea visual:** Región tridimensional o superficial específica donde se realiza una tarea visual determinada y sobre la cual se concentran los requisitos máximos de iluminancia y uniformidad.

#### Ejemplo práctico realista
En una sala polivalente de ingeniería de $12,00\ \text{m} \times 8,00\ \text{m}$ ($96\ \text{m}^2$) y $3,10\ \text{m}$ de altura libre, solo la zona central de $6,00\ \text{m} \times 4,00\ \text{m}$ ($24\ \text{m}^2$) alberga 6 puestos de dibujo técnico y lectura de planos con exigencia orientativa de $500\ \text{lx}$ a cota $0,75\ \text{m}$ (ejemplo ilustrativo de criterio de tarea de precisión a verificar). El resto de la sala corresponde a circulación y archivo temporal ($300\ \text{lx}$ o inferior según criterio de área circundante/fondo). Si el técnico deja todo el plano de utilidad de $96\ \text{m}^2$ a $500\ \text{lx}$, instalará aproximadamente un $35\text{–}45\ \%$ más de potencia eléctrica innecesaria. Configurando en DIALux el área de tarea sobre las mesas (a $0,75\ \text{m}$) y diferenciando el área circundante, reduce la potencia de alumbrado y refleja la operación real del local.

#### Errores frecuentes
- Dejar el plano de utilidad en cota $0,00\ \text{m}$ en oficinas o laboratorios, subestimando la iluminancia real sobre la mesa de trabajo (más cercana a la luminaria).
- Incluir los $0,50\ \text{m}$ pegados a la pared dentro de un plano de trabajo general de oficina sin justificación, haciendo caer artificialmente la uniformidad mínima $U_0$.
- No nombrar sistemáticamente plantas, locales y áreas de trabajo (`Local 1`, `Local 2`, `Área 1`), produciendo memorias ilegibles en edificios con más de 10 estancias.
- Mantener visibles todas las capas arquitectónicas secundarias (mobiliario complejo, texto de cotas, tramas) durante el cálculo y la edición geométrica básica.

#### Preguntas que el alumnado debería poder responder
1. ¿Cómo varía la iluminancia calculada sobre una mesa a $0,80\ \text{m}$ de altura respecto al suelo a $0,00\ \text{m}$ bajo luminarias montadas a $2,80\ \text{m}$, considerando la ley inversa del cuadrado?
2. ¿Qué función cumple la zona de margen perimetral (*wall zone*) en la configuración del plano de utilidad y qué efecto tiene omitirla sobre la uniformidad $U_0$?
3. ¿En qué situaciones técnicas es preferible crear un área de tarea visual específica en lugar de exigir la iluminancia máxima sobre todo el plano de utilidad del local?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** combina diagnóstico inicial, demostración guiada paso a paso en DIALux, prácticas de configuración controlada y análisis crítico de un caso técnico completo.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
| :--- | :--- | :--- | :--- |
| **1. Apertura y activación** | 00:00 – 00:25 (25 min) | Presenta el encuadre del Bloque 2 dentro del programa de 6 módulos, delimita fronteras entre DIALux, Revit MEP, Twinmotion y cálculo eléctrico reglamentario, y lanza la **Actividad 1 (Activación)** + sondeo diagnóstico. | Responde al cuestionario diagnóstico rápido de 5 preguntas y detecta errores iniciales en una ficha de configuración de proyecto proyectada. |
| **2. Microexposición: Interfaz y unidades (3.1 y 3.2)** | 00:25 – 00:55 (30 min) | Demuestra en directo la interfaz de DIALux, creación de proyecto de edificio, cambio de unidades métricas/imperiales, decimales y configuración de perfil de proyecto anonimizado. | Replica en su equipo la creación de un archivo plantilla limpio con unidades SI ($\text{m}$, $\text{lx}$, $\text{cd/m}^2$) y valida la estructura de carpetas/guardado. |
| **3. Microexposición: Normas y planos de utilidad (3.3 y 3.4)** | 00:55 – 01:25 (30 min) | Explica los perfiles de utilización (ej. UNE-EN 12464-1 como referencia ilustrativa a verificar), planos de utilidad, áreas de tarea visual/circundante y organización jerárquica de localizaciones y capas. | Toma notas en la ficha de trabajo, formula preguntas sobre márgenes perimetrales y compara 3 perfiles de uso diferentes dentro del catálogo del software. |
| **4. Práctica guiada: Actividad 2 (Aplicación técnica)** | 01:25 – 02:10 (45 min) | Lanza la **Actividad 2**, supervisa configuraciones pantalla a pantalla y corrige en tiempo real fallos de unidades, alturas de plano de utilidad o selección de perfil normativo. | Configura en DIALux un proyecto multizona con 3 estancias diferenciadas, ajusta alturas de plano de utilidad, áreas de tarea y capas de trabajo, y exporta captura de verificación. |
| *Descanso técnico* | 02:10 – 02:25 (15 min) | Pausa activa y verificación de dudas puntuales de instalación o versión de DIALux. | Descanso y preparación de archivos para el caso práctico. |
| **5. Resolución del caso práctico** | 02:25 – 03:05 (40 min) | Presenta el caso **Soler & Méndez Instalaciones**, distribuye la hoja de datos defectuosa y reta a los equipos a identificar todos los fallos de configuración antes de recalcular nada. | En parejas o tríos, audita la configuración defectuosa del caso, elabora la matriz de correcciones normativas y técnicas, y configura la plantilla base corregida. |
| **6. Puesta en común y debate técnico** | 03:05 – 03:25 (20 min) | Modera la exposición de hallazgos de 2–3 equipos, contrasta decisiones sobre zonificación y verifica que nadie confunda cumplimiento en DIALux con validación eléctrica legal. | Argumenta sus criterios de corrección ante el grupo y contrasta cómo un error de configuración inicial impactaría en el cuadro eléctrico del Bloque 1. |
| **7. Transferencia a proyecto real (Actividad 3)** | 03:25 – 03:45 (20 min) | Guía la **Actividad 3**, aportando la plantilla de *Checklist de Arranque de Proyecto DIALux* para que cada alumno la adapte al edificio de su proyecto integrador. | Completa el documento de configuración previa (alcance, país/norma a verificar, unidades, locales, alturas de plano de trabajo y nomenclatura) de su proyecto real o asignado. |
| **8. Evaluación sumativa y cierre** | 03:45 – 04:00 (15 min) | Aplica el test final de verificación, recoge las evidencias entregables, guía la autoevaluación y conecta con el **Tema 2 (Importación de planos en 2D)**. | Realiza el cuestionario de cierre y la autoevaluación; guarda su plantilla `.evo` y su *checklist* para la próxima sesión. |

*Suma verificada: 25 + 30 + 30 + 45 + 15 + 40 + 20 + 20 + 15 = **240 minutos (4 horas)**.*

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «La auditoría del minuto cero»
- **Nombre:** La auditoría del minuto cero: cazando errores ocultos de configuración.
- **Objetivo:** Activar los conocimientos previos de magnitudes luminotécnicas y detectar cómo pequeños fallos en la configuración inicial invalidan por completo un estudio lumínico posterior.
- **Instrucciones para el alumnado:**
  1. Observad en pantalla las 3 capturas de configuración inicial de un proyecto de nave comercial (captura A: preferencias de unidades; captura B: propiedades de un recinto de oficinas; captura C: árbol de proyecto y plano de utilidad).
  2. Disponéis de 8 minutos en parejas para localizar al menos 4 inconsistencias técnicas graves (p. ej., unidades en pies/*foot-candles*, plano de utilidad a $0,00\ \text{m}$ en despachos, uso de perfil «Pasillo 100 lx» en sala de dibujo CAD, ausencia de nomenclatura y datos confidenciales de cliente en portada).
  3. Anotad qué consecuencia eléctrica o de proyecto tendría cada error si nadie lo corrigiese antes de pasar los datos a Revit MEP o al presupuesto de obra.
- **Materiales necesarios:** Diapositiva o PDF con las 3 capturas de configuración defectuosa y ficha de anotación rápida.
- **Tiempo estimado:** 15 minutos (integrados en la Fase 1 tras la evaluación diagnóstica).
- **Rol del formador:** Dinamizar la lluvia de ideas sin dar las soluciones de inmediato; enlazar cada error detectado con el bloque teórico correspondiente.
- **Producto o entregable esperado:** Lista consensuada en pizarra digital con los «5 errores críticos de arranque en DIALux y su impacto en costes o normativa».
- **Criterios de éxito:** El alumnado identifica correctamente al menos 4 de las 5 anomalías presentadas y distingue el impacto fotométrico del eléctrico.

### Actividad 2 (Aplicación técnica): «Configuración de plantilla multizona en DIALux»
- **Nombre:** Configuración de plantilla multizona en DIALux en Sistema Internacional.
- **Objetivo:** Configurar desde cero un archivo `.evo` limpio con unidades métricas SI, metadatos anonimizados, jerarquía de edificio/plantas/locales, perfiles normativos revisados y planos de utilidad diferenciados.
- **Instrucciones para el alumnado:**
  1. Abrid DIALux y cread un nuevo proyecto vacío bajo la modalidad **Edificio y terreno** (no local único rápido).
  2. Verificad en *Ajustes generales* que las longitudes estén en metros ($\text{m}$) con 2 decimales y las magnitudes de luz en sistema métrico ($\text{lx}$, $\text{cd/m}^2$).
  3. Completad el perfil del proyecto con nombre codificado `PRJ-B2-T01-ALUMNO` (sin datos personales sensibles), autor y nota de alcance: *«Estudio fotométrico preliminar; valores normativos ilustrativos pendientes de verificación reglamentaria local»*.
  4. Cread la estructura `Edificio_A` → `Planta_00` con 3 locales conceptuales de prueba (solo definición de propiedades iniciales/zonas de evaluación base):
     - `P00_E01_Recepcion` (plano de utilidad a $0,80\ \text{m}$, margen perimetral $0,50\ \text{m}$).
     - `P00_E02_Sala_CAD` (plano de utilidad a $0,75\ \text{m}$, margen $0,50\ \text{m}$, perfil orientativo tipo oficina técnica/dibujo).
     - `P00_E03_Almacen_Pasillo` (plano de utilidad a $0,00\ \text{m}$, margen $0,00\ \text{m}$ o según criterio de paso, perfil orientativo de zona de circulación/almacén).
  5. Guardad el archivo como `Plantilla_Base_SI_NombreApellido.evo` y exportad una captura de la pantalla de configuración de unidades y del árbol de proyecto.
- **Materiales necesarios:** Ordenador con DIALux instalado, ficha técnica con especificaciones de los 3 recintos y guía rápida de atajos de interfaz.
- **Tiempo estimado:** 45 minutos (Fase 4).
- **Rol del formador:** Proyectar primero los pasos clave durante 5 minutos y después recorrer las mesas o salas online resolviendo incidencias de versión de interfaz.
- **Producto o entregable esperado:** Archivo `.evo` configurado + captura de comprobación de unidades y jerarquía de locales.
- **Criterios de éxito:** El archivo utiliza unidades SI coherentes, respeta la convención de nombres propuesta, asigna cotas correctas a cada plano de utilidad y documenta la salvedad normativa del perfil utilizado.

### Actividad 3 (Transferencia a proyecto real): «Protocolo de arranque y verificación normativa del proyecto integrador»
- **Nombre:** Protocolo de arranque y verificación normativa para proyecto propio o integrador.
- **Objetivo:** Transferir la metodología de configuración previa a un proyecto real del entorno laboral del participante (o al edificio base del programa integrador) definiendo parámetros fotométricos, normas a verificar y límites de uso de IA.
- **Instrucciones para el alumnado:**
  1. Seleccionad un proyecto real reciente (anonimizado estrictamente: sin razón social ni dirección real) o la ficha base de edificio comercial/industrial del proyecto integrador del curso.
  2. Completad la plantilla *«Checklist de Configuración Previa DIALux»* (sección 8.3) definiendo: país y reglamento/norma vigente a verificar manualmente, lista de al menos 4 recintos codificados, altura del plano de utilidad de cada uno, distinción entre área de tarea visual y área circundante, y qué datos saldrán después hacia el cuadro de cargas del Bloque 1 o hacia Revit MEP (Bloque 3).
  3. Opcionalmente, redactad un *prompt* estructurado (sin subir planos ni datos reales del cliente) para pedir a un asistente de IA un borrador de tabla organizativa de locales y planos de trabajo, y anotad **qué tres datos de esa respuesta debéis verificar independientemente antes de aceptarla**.
- **Materiales necesarios:** Plantilla editable de *Checklist de Configuración Previa DIALux* (sección 8.3) y ficha de proyecto base.
- **Tiempo estimado:** 20 minutos (Fase 7).
- **Rol del formador:** Revisar en directo 2 o 3 borradores seleccionados aleatoriamente, reforzando la necesidad de citar normativa vigente por verificar y anonimizar datos antes de consultar asistentes de IA.
- **Producto o entregable esperado:** Ficha completa de arranque de proyecto DIALux lista para recibir los planos DWG/DXF en el Tema 2.
- **Criterios de éxito:** Coherencia entre el uso real de cada recinto y su plano de utilidad, identificación explícita de la normativa pendiente de verificar por jurisdicción y ausencia de datos confidenciales.

---

## 6. Caso práctico

### Auditoría previa en Soler & Méndez Instalaciones (Valencia)

#### Contexto empresarial
**Soler & Méndez Instalaciones S.L.** es una ingeniería e instaladora eléctrica de tamaño medio situada en el área metropolitana de Valencia (22 empleados), especializada en naves industriales, talleres y oficinas técnicas anexas. La empresa ha incorporado recientemente a un técnico júnior para agilizar los estudios de iluminación en DIALux antes de redactar las memorias eléctricas en oficina técnica y modelar las bandejas y luminarias en Revit MEP.

#### Situación o problema
La dirección técnica está a punto de enviar al cliente la propuesta lumínica y el predimensionado de potencia de alumbrado para una nave mixta de $850\ \text{m}^2$ («Nave Mecanizados Turia», nombre ficticio). Al revisar el archivo `.evo` preliminar generado por el técnico júnior, la jefa de proyectos detecta discrepancias alarmantes respecto a la potencia eléctrica estimada en la fase previa: la memoria arroja valores incoherentes de iluminancia cercanos a $45$ unidades y el área administrativa aparece evaluada en la misma zona que el almacén de estanterías. Si este archivo erróneo se utilizase como base para la oferta y el diseño del cuadro de distribución de alumbrado, el presupuesto sufriría una desviación superior al $35\ \%$ y el proyecto incumpliría los requisitos visuales de los puestos de trabajo.

#### Datos disponibles
El archivo `.evo` auditado contiene la siguiente configuración inicial:
- **Preferencias de DIALux:** Longitud en metros ($\text{m}$), pero iluminación configurada en **foot-candles ($\text{fc}$)** tras haber abierto previamente un proyecto de referencia estadounidense.
- **Estructura del proyecto:** Todo el edificio de $850\ \text{m}^2$ ($600\ \text{m}^2$ de taller/almacén a $7,00\ \text{m}$ de altura y $250\ \text{m}^2$ de oficinas y sala de control de calidad a $2,75\ \text{m}$) está metido dentro de un único proyecto con nomenclatura `Proyecto1 / Local 1` sin subdivisión de zonas.
- **Perfil de uso asignado:** Se seleccionó un perfil genérico único de «Almacén general» ($E_m$ objetivo $\approx 100\ \text{lx}$ a verificar) aplicado tanto al pasillo de estanterías como a las mesas de inspección de tolerancias mecánicas y a las oficinas administrativas.
- **Plano de utilidad:** Configurado por defecto a cota $0,00\ \text{m}$ y margen perimetral de $0,00\ \text{m}$ en todas las áreas, incluidas las mesas de oficina ($0,75\ \text{m}$) y los bancos de verificación dimensional ($0,90\ \text{m}$).
- **Información de proyecto:** En el campo «Descripción» el técnico copió el correo completo del cliente con su NIF, dirección exacta de la parcela y presupuesto objetivo, y lo pegó directamente en un chat público de IA para pedir una redacción comercial de la portada.

#### Preguntas de análisis
1. ¿Qué error numérico concreto produce mantener la lectura de iluminancia en *foot-candles* pensando que son *lux* ($45\ \text{fc}$ frente a $45\ \text{lx}$)? ¿Conduciría a infradimensionar o a sobredimensionar la instalación si se intenta corregir manualmente añadiendo luminarias hasta ver «500» en pantalla?
2. ¿Qué consecuencias técnicas y energéticas tiene asignar un perfil único de $100\ \text{lx}$ a toda la superficie en lugar de separar oficina administrativa, mesa de control de calidad y zona de almacenaje?
3. ¿Cómo afecta al cálculo de uniformidad $U_0$ dejar el margen perimetral a $0,00\ \text{m}$ y la altura del plano de utilidad a $0,00\ \text{m}$ en una sala de oficinas?
4. ¿Qué incumplimientos de seguridad de la información y metodología profesional se produjeron al usar la IA externa con los datos de portada?

#### Tarea a realizar
En equipos de 3 personas (actuando como comité de revisión de calidad técnica), elaborad en 40 minutos:
1. Un **Informe breve de hallazgos** listando los 5 fallos de configuración detectados, su causa raíz y su impacto cuantitativo o reglamentario.
2. Una **Tabla de reconfiguración correcta** especificando para cada recinto (Oficina administrativa, Control de calidad, Taller/Almacén): código de localización, sistema de unidades, altura del plano de utilidad ($\text{m}$), margen perimetral ($\text{m}$), áreas de tarea vs. circundantes y criterio normativo ilustrativo a verificar según la normativa española vigente.
3. La creación física en DIALux del **esqueleto de proyecto corregido** (`PRJ_Turia_Corregido.evo`) listo para importar los planos 2D en la siguiente fase.

#### Posibles soluciones o criterios de análisis
- **Corrección de unidades:** Cambiar inmediatamente las unidades de iluminación a **lux ($\text{lx}$)** y candelas/$\text{m}^2$ ($\text{cd/m}^2$). Nota clave: $45\ \text{fc} \approx 484\ \text{lx}$; si alguien ve «45» creyendo que son lux e intenta subirlo hasta «500» manteniendo la unidad en *foot-candles*, acabaría diseñando para $\approx 5\,382\ \text{lx}$ (más de 10 veces la potencia necesaria), disparando costes, deslumbramiento y consumo eléctrico.
- **Zonificación y perfiles (valores ilustrativos a verificar según país y edición normativa vigente, p. ej., UNE-EN 12464-1 y normativa de lugares de trabajo en España):**
  - `P00_E01_Oficinas`: plano de utilidad a $0,75\ \text{m}$ (o $0,80\ \text{m}$), margen perimetral $0,50\ \text{m}$, referencia orientativa $500\ \text{lx}$, $UGR_L \le 19$.
  - `P00_E02_ControlCalidad`: área de tarea visual específica sobre los bancos a $0,90\ \text{m}$ (referencia orientativa de inspección de precisión $\ge 750\text{–}1000\ \text{lx}$ según detalle de pieza a verificar) y área circundante a menor nivel para evitar sobreconsumo.
  - `P00_E03_Almacen_Pasillos`: plano de utilidad a $0,00\ \text{m}$ en pasillos de circulación (referencia orientativa $100\text{–}150\ \text{lx}$ o $200\ \text{lx}$ si hay lectura continua de etiquetas, a verificar).
- **Seguridad y fronteras de disciplina:** Eliminar inmediatamente datos personales/NIF del cliente de la plantilla compartida y de cualquier *prompt* en herramientas IA externas; documentar que el proyecto DIALux evaluará la fotometría, pero las protecciones y secciones de cables de los circuitos de alumbrado se validarán por cálculo eléctrico normativo (Bloque 1).

#### Preguntas de reflexión final
1. ¿Cuánto tiempo real se ahorra en un proyecto de $850\ \text{m}^2$ si se dedica 15 minutos iniciales a auditar la configuración frente a tener que recalcular luminarias y cuadros tras una revisión tardía?
2. ¿Qué controles internos implantaríais en una oficina técnica para asegurar que nadie emita un PDF de DIALux con unidades equivocadas o normas sin verificar?

---

## 7. Evaluación

### 7.1. Evaluación diagnóstica
Cuestionario breve inicial de 5 preguntas tipo test/respuesta corta al comienzo de la sesión (5 min):
1. ¿En qué unidad del Sistema Internacional se mide la iluminancia sobre un plano de trabajo?
2. ¿Cuál es la altura habitual en metros de un plano de utilidad en una oficina convencional?
3. ¿Qué diferencia existe entre un cálculo fotométrico y el dimensionamiento de la sección de un conductor de alumbrado?
4. ¿Basta con que DIALux muestre un icono verde en un perfil de uso para dar por cumplido un reglamento nacional? ¿Por qué?
5. ¿Qué riesgo existe al pegar el PDF completo de un proyecto de cliente en un chat público de IA?

### 7.2. Evaluación formativa
Seguimiento continuo mediante observación estructurada durante las Actividades 1 y 2 y la resolución del caso práctico:
- Comprobación en pantalla de que cada participante configura unidades SI ($\text{m}$, $\text{lx}$, $\text{cd/m}^2$).
- Verificación de uso correcto de jerarquía de edificio/planta/local y nomenclatura codificada.
- Retroalimentación inmediata sobre la diferenciación entre plano de utilidad, área de tarea visual y zona de margen perimetral.

### 7.3. Evaluación sumativa
Combinación ponderada de dos evidencias al cierre de la sesión:
1. **Archivo `.evo` de la Actividad 2 + tabla de reconfiguración del Caso práctico (60 %):** Evaluados conforme a la rúbrica de la sección 7.4.
2. **Checklist de arranque aplicado al proyecto propio (Actividad 3) + cuestionario de cierre de 5 ítems (40 %):** Incluye comprobación de coherencia normativa, unidades SI y protocolo de confidencialidad con IA.

### 7.4. Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
| :--- | :--- | :--- | :--- | :--- |
| **Configuración de unidades y perfil de proyecto** | Deja unidades imperiales (*fc* o *ft*) o mezcla sistemas sin coherencia; incluye datos confidenciales sin anonimizar o deja el perfil vacío. | Configura el sistema métrico en longitudes, pero omite revisar decimales, unidades fotométricas o trazabilidad del perfil de proyecto. | Configura íntegramente el proyecto en unidades métricas SI ($\text{m}$, $\text{lx}$, $\text{cd/m}^2$), decimales adecuados y metadatos limpios. | Crea una plantilla reutilizable impecable en unidades SI, documenta alcance y versión, aplica anonimización estricta y verifica tolerancias de redondeo. |
| **Estructura espacial y organización de capas** | Modela todo en un único local sin diferenciar plantas, estancias ni nomenclatura; mantiene capas desordenadas. | Separa los recintos principales, pero utiliza nombres genéricos (`Local 1`) o no organiza el árbol espacial con criterio técnico. | Organiza el árbol `Edificio → Planta → Local → Zonas` con codificación clara y capas ordenadas para el flujo de trabajo. | Diseña una taxonomía de localizaciones y capas compatible con la futura coordinación hacia Revit MEP, anticipando cruces con otros bloques. |
| **Planos de utilidad y áreas de trabajo** | Deja todos los planos de utilidad a $0,00\ \text{m}$ sin margen perimetral ni diferenciación entre tareas visuales. | Ajusta la altura de algún plano de utilidad, pero no distingue áreas de tarea frente a zonas circundantes o falla el margen perimetral. | Define correctamente alturas de plano de utilidad, márgenes perimetrales y áreas de tarea visual acordes al uso de cada local. | Optimiza energéticamente el modelo delimitando con precisión áreas de tarea visual, circundantes y de fondo, justificando su impacto en potencia y uniformidad. |
| **Criterio normativo y límites técnicos** | Asume que el «cumple» automático de DIALux valida legalmente toda la instalación eléctrica y lumínica. | Reconoce que existe una norma de referencia, pero no indica la necesidad de verificar país, reglamento ni edición vigente. | Distingue cálculo fotométrico de cálculo eléctrico normativo y señala explícitamente la necesidad de verificar la norma aplicable vigente. | Demuestra rigor profesional completo: diferencia fotometría, electricidad reglamentaria, BIM y visualización, y aplica control independiente sobre cualquier apoyo de IA. |

### 7.5. Actividad de autoevaluación
Al finalizar la sesión (5 min), cada participante responde en su ficha digital del campus:
1. *¿Qué ajuste de configuración inicial de DIALux pasaba por alto antes de esta sesión y qué impacto cuantitativo podría haber tenido en un proyecto real?*
2. *Si tuvieras que auditar en 3 minutos el archivo `.evo` de un compañero antes de iniciar el cálculo de luminarias, ¿cuáles serían tus 3 puntos de inspección obligatorios?*
3. *Valora del 1 al 5 tu seguridad actual para estructurar desde cero un proyecto multizona en DIALux verificando la normativa de referencia aplicable, e indica qué duda concreta necesitas reforzar antes del Tema 2.*

---

## 8. Materiales y recursos

### 8.1. Guion estructurado de diapositivas

| Diapositiva | Título | Contenido visual y mensajes clave |
| :--- | :--- | :--- |
| **Slide 1** | **Portada: Configuración de DIALux en el flujo eléctrico-BIM** | Título del tema (Bloque 2, Tema 1/5), mapa visual de los 6 bloques del programa y advertencia de alcance: fotometría vs. cálculo eléctrico normativo vs. BIM/render. |
| **Slide 2** | **Evaluación diagnóstica y Actividad 1: El minuto cero** | 3 capturas reales con errores ocultos (*foot-candles*, plano de utilidad en cota $0,00\ \text{m}$, perfil único de almacén) para detonar el análisis inicial. |
| **Slide 3** | **Anatomía de la interfaz y secuencia de trabajo en DIALux** | Diagrama esquemático de las pestañas (*Construcción → Luz → Objetos → Exportación*) y jerarquía del árbol `Terreno / Edificio / Planta / Local`. |
| **Slide 4** | **Unidades SI vs. Imperiales y metadatos seguros** | Comparativa visual $\text{lx}$ vs. $\text{fc}$ ($1\ \text{fc} \approx 10,764\ \text{lx}$), ejemplo de sobredimensionamiento $10\times$ de potencia por error de unidad y buenas prácticas de anonimización ante IA externa. |
| **Slide 5** | **Perfiles de utilización y verificación normativa** | Captura de selección de perfil en DIALux junto a la tabla de parámetros ($E_m$, $U_0$, $UGR_L$, $R_a$), destacando la obligación de comprobar país, reglamento y edición vigente (p. ej. UNE-EN 12464-1). |
| **Slide 6** | **Plano de utilidad, área de tarea y margen perimetral** | Sección transversal 3D de una oficina: suelo ($0,00\ \text{m}$), mesa/plano de utilidad ($0,75\ \text{m}$), margen de pared ($0,50\ \text{m}$), área de tarea vs. área circundante. |
| **Slide 7** | **Práctica aplicada y Caso Soler & Méndez Instalaciones** | Esquema de la nave mixta de $850\ \text{m}^2$, resumen de las 5 anomalías del archivo auditado y temporizador de trabajo en equipos. |
| **Slide 8** | **Transferencia, checklist de arranque y puente al Tema 2** | Resumen de las 5 reglas de oro de configuración inicial, acceso al *Checklist de Arranque* y avance de cómo prepararemos planos DWG/DXF/PDF para importarlos en el Tema 2. |

### 8.2. Ficha de trabajo del alumnado
Documento estructurado en 2 páginas (PDF editable o impreso) que recoge:
- **Sección A:** Tabla de registro de anomalías de la Actividad 1.
- **Sección B:** Guía rápida de ajustes SI de DIALux y tabla comparativa de alturas de plano de utilidad por tipo de recinto (oficinas, aulas, pasillos, talleres, laboratorios).
- **Sección C:** Plantilla de auditoría y matriz de reconfiguración para el caso *Soler & Méndez Instalaciones*.
- **Sección D:** Espacio para respuestas de autoevaluación y control de archivo guardado (`.evo`) para el Tema 2.

### 8.3. Plantilla técnica práctica: «Checklist de Configuración Previa de Proyecto DIALux»

```markdown
# CHECKLIST DE CONFIGURACIÓN PREVIA — PROYECTO DIALUX
Código interno de proyecto: ________________________  Versión DIALux: ____________
Responsable técnico: ______________________________  Fecha: _____________________

1. SEGURIDAD Y DATOS DEL PROYECTO
- [ ] Datos confidenciales del cliente anonimizados (si es práctica o antes de usar IA externa).
- [ ] Modalidad seleccionada: [ ] Edificio/Terreno completo   [ ] Local individual (justificado).
- [ ] Ruta de guardado local con control de versión incremental (`_v01.evo`, `_v02.evo`).

2. UNIDADES Y PREFERENCIAS
- [ ] Longitud en sistema métrico: metros (m), precisión mínima 2 decimales.
- [ ] Iluminación en sistema métrico: lux (lx) y cd/m² (descartado foot-candles/fc).
- [ ] Ubicación geográfica / Norte verificados (solo si interviene cálculo de luz natural).

3. MARCO NORMATIVO APLICABLE (A VERIFICAR POR EL TÉCNICO)
- País y jurisdicción del proyecto: ______________________________________________
- Reglamento/norma de referencia principal verificada (edición vigente): __________
- Normativa complementaria energética o de seguridad verificada: __________________
- Nota expresa de alcance: el estudio fotométrico NO sustituye el cálculo eléctrico reglamentario.

4. MATRIZ DE ZONIFICACIÓN Y PLANOS DE UTILIDAD
| Código Local | Uso del espacio | Perfil referencia (a verificar) | Em obj. (lx) | Cota plano utilidad (m) | Margen pared (m) | ¿Área de tarea separada? |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| P00_E01_... | | | | | | [ ] Sí  [ ] No |
| P00_E02_... | | | | | | [ ] Sí  [ ] No |
| P01_E01_... | | | | | | [ ] Sí  [ ] No |
```

### 8.4. Lecturas y recursos recomendados
*(Nota de validación para el formador y el alumnado: las referencias técnicas, enlaces oficiales, guías y ediciones normativas citadas a continuación deben validarse en fuente oficial antes de su aplicación en proyecto real o uso en aula, ya que la interfaz del software y las ediciones reglamentarias se actualizan periódicamente).*
- **Documentación oficial y manual de usuario de DIALux evo** (DIAL GmbH — verificar la versión exacta instalada en los equipos del centro antes de compartir enlaces).
- **Norma UNE-EN 12464-1 (ejemplo ilustrativo de referencia para iluminación de lugares de trabajo en interiores):** Consultar siempre la edición vigente publicada por el organismo de normalización correspondiente al país del proyecto (AENOR/UNE en España o equivalente nacional).
- **Guía Técnica del Código Técnico de la Edificación (CTE DB-HE3 en España) o reglamento nacional equivalente:** Verificar vigencia y excepciones de aplicación según tipología y superficie del edificio.
- **Vídeos tutoriales oficiales de primeros pasos en el canal de DIALux:** Revisar idioma, versión de interfaz mostrada y vigencia antes de asignarlos como material complementario.

### Glosario de términos clave

| Término | Definición |
| :--- | :--- |
| **Área circundante** | Franja inmediata alrededor del área de tarea visual dentro de un mismo local cuya iluminancia mínima exigida suele ser proporcionalmente menor que la de la tarea principal según la norma aplicada. |
| **Área de tarea visual** | Zona delimitada específicamente donde se realiza una actividad visual concreta y sobre la cual se aplican los requisitos principales de iluminancia, uniformidad y control de deslumbramiento. |
| **Factor de reflectancia ($\rho$)** | Relación entre el flujo luminoso reflejado por una superficie y el flujo luminoso incidente sobre ella; su configuración realista resulta determinante en las interreflexiones del recinto. |
| **Foot-candle ($\text{fc}$)** | Unidad anglosajona de iluminancia equivalente a un lumen por pie cuadrado ($1\ \text{fc} \approx 10,764\ \text{lx}$), fuente habitual de errores graves si no se cambia al sistema métrico SI. |
| **Iluminancia media mantenida ($E_m$)** | Valor mínimo por debajo del cual no debe situarse la iluminancia media sobre la superficie de cálculo especificada al final del ciclo de mantenimiento previsto. |
| **Lux ($\text{lx}$)** | Unidad de iluminancia del Sistema Internacional equivalente a un lumen incidiendo uniformemente sobre una superficie de un metro cuadrado ($1\ \text{lm/m}^2$). |
| **Plano de utilidad** | Superficie horizontal de referencia dentro de un local en la que se evalúa por defecto la iluminancia cuando no se establecen áreas de tarea particulares (por ejemplo, $0,75\ \text{m}$–$0,85\ \text{m}$ en escritorios o bancos). |
| **Uniformidad global ($U_0$)** | Cociente entre la iluminancia mínima ($E_{\min}$) y la iluminancia media ($E_m$) sobre una superficie o área de cálculo determinada ($U_0 = E_{\min} / E_m$). |

---

## 9. Adaptaciones

### 9.1. Sesión presencial
- **Configuración del aula:** Puestos informáticos individuales o por parejas con DIALux preinstalado y la misma versión exacta en todos los equipos (para evitar diferencias de menús durante las demostraciones).
- **Dinámica de resolución:** Realizar una comprobación visual cruzada entre compañeros de mesa al cierre de la Actividad 2 (*peer-check* de 3 minutos mirando unidades y plano de utilidad en el equipo contiguo).
- **Soporte visual:** Proyectar las capturas de la Actividad 1 en pantalla grande y utilizar una pizarra física para construir el mapa comparativo de disciplinas (Cálculo eléctrico / DIALux / Revit MEP / Twinmotion).

### 9.2. Sesión online síncrona
- **Operativa técnica:** Solicitar al alumnado con 48 horas de antelación la instalación y apertura de prueba de DIALux, recomendando doble pantalla o división de ventana (videoconferencia a un lado y DIALux al otro).
- **Salas de trabajo (*breakout rooms*):** En el caso práctico *Soler & Méndez*, agrupar en salas de 3 personas permitiendo compartir pantalla de un participante mientras los otros dos auditan el archivo `.evo` usando el checklist compartido en línea.
- **Ritmo atencional:** Dividir las microexposiciones teóricas en bloques máximos de 15 minutos seguidos de comprobación práctica mediante encuestas rápidas o capturas subidas al chat del aula.

### 9.3. Sesión asíncrona
- **Material previo en campus virtual:** Píldora en vídeo grabada por el formador (10 min) mostrando el recorrido por las pestañas iniciales de DIALux y el cambio de unidades SI, acompañada del archivo defectuoso del caso práctico para descarga.
- **Entregable asíncrono:** Cada participante sube al buzón del LMS su archivo `.evo` de la Actividad 2, el archivo corregido del caso práctico y su *Checklist de Configuración Previa* (Actividad 3) en un plazo de 7 días.
- **Interacción en foro:** Cada alumno revisa el *checklist* anonimizado de un compañero verificando coherencia entre uso del recinto, cota del plano de utilidad y salvedad normativa aplicable.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Recupera y aplica directamente los fundamentos de magnitudes eléctricas, potencias y análisis de cargas trabajados en el **Bloque 1: Instalaciones eléctricas** (especialmente la estimación de cargas de alumbrado y criterios normativos por país/uso), trasladándolos desde la hoja de cálculo hacia un entorno de simulación luminotécnica tridimensional.
- **Competencias técnicas que desarrolla:** Configuración rigurosa de entornos de ingeniería fotométrica en SI, estructuración espacial de proyectos técnicos, interpretación crítica de perfiles normativos y control preventivo de errores de escala/unidades antes de modelar.
- **Conexión con el tema anterior y posterior del programa (6 módulos / 50 temas):**
  - *Tema anterior:* **Bloque 1, Tema 11 — Diagramas unifilares** (posición 11 de 50), que cierra la fase de diseño eléctrico base (cargas, conductores, protecciones, puesta a tierra y esquemas). Este Tema 1 inaugura el **Bloque 2: Modelado en DIALux** estableciendo las bases técnicas para validar cuántas luminarias y qué potencia real requiere cada espacio.
  - *Tema posterior:* **Bloque 2, Tema 2 — Importación de planos en 2D** (posición 2 de 5 del Bloque 2; tema 13 de 50). La plantilla `.evo` configurada hoy en unidades SI y con jerarquía limpia recibirá directamente en la próxima sesión los planos arquitectónicos DWG/DXF/PDF debidamente escalados y alineados al origen común BIM.
- **Evidencia de aprendizaje que aporta el alumnado:** Archivo base `Plantilla_Base_SI.evo` validado en unidades métricas, matriz de corrección del caso *Soler & Méndez Instalaciones* y *Checklist de Configuración Previa* aplicado al edificio del proyecto integrador.

---

## Siguientes pasos para el formador

1. **Unificar versiones de software:** Comprobar al menos 72 horas antes que todos los equipos (presenciales u online) disponen de una versión compatible y actualizada de DIALux para abrir el archivo `.evo` defectuoso del caso práctico.
2. **Preparar los recursos de arranque:** Generar y probar en aula el archivo `.evo` intencionadamente mal configurado del caso *Soler & Méndez* (en *foot-candles*, local único y plano de utilidad a $0,00\ \text{m}$) y las 3 capturas de la Actividad 1.
3. **Validar normativa de referencia local:** Confirmar con qué normativa fotométrica y energética nacional trabaja el grupo (por ejemplo, UNE-EN 12464-1 y CTE DB-HE3 en España, o normativa vigente equivalente si hay alumnado de otros países) para aclarar los ejemplos en directo.
4. **Verificar enlaces y lecturas:** Revisar la vigencia y accesibilidad de los enlaces de la sección 8.4 antes de publicarlos en el campus virtual.
5. **Custodiar la evidencia para el Tema 2:** Recordar al alumnado al cerrar la sesión que debe conservar su archivo `.evo` limpio y su *checklist* de localizaciones para la importación de planos 2D de la siguiente clase.
