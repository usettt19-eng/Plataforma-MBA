# Tema 9. Herramientas para generar presentaciones profesionales

## 1. Ficha del tema

| Campo | Detalle |
| :--- | :--- |
| **Título del tema** | Herramientas para generar presentaciones profesionales |
| **Programa** | IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas |
| **Bloque y posición dentro del programa** | Bloque 5: Visualización y renderizado con Twinmotion · Tema 9 de 10 |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Modalidad** | Online / Híbrida interactiva |
| **Idioma** | Español de España |
| **Prerrequisitos** | Manejo fluido de calibración lumínica (Tema 6), organización por carpetas y capas en el *Scene Graph* (Tema 7) y creación de recorridos, *keyframes* y fases constructivas MEP (Tema 8 del Bloque 5). |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado será capaz de estructurar presentaciones interactivas profesionales mediante el módulo *Presentation*, conjuntos de estados (*View Sets* / *Phasing*), encuadres arquitectónicos y de coordinación MEP y comparativas bloqueadas antes-después o día-noche, articulando una narrativa técnica clara para comités de cliente o gerencia con apoyo de IA sobre datos anonimizados y delimitando estrictamente el carácter ilustrativo de la visualización frente al proyecto de ingeniería certificado. |

---

## 2. Objetivos de aprendizaje

1. **Estructurar** presentaciones interactivas ordenadas (*Local Presentation* y *Twinmotion Cloud*, según versión y licencia disponibles) combinando imágenes, panoramas, clips de vídeo y conjuntos de vistas con navegación controlada para reuniones técnicas o ejecutivas. *(Nivel de Bloom: Crear)*
2. **Configurar** comparativas visuales rigurosas antes-después, día-noche y acabado arquitectónico frente a coordinación MEP manteniendo idéntico encuadre, distancia focal y trazabilidad de capas mediante *View Sets* o *Phasing*. *(Nivel de Bloom: Aplicar)*
3. **Aplicar** principios compositivos específicos según el encuadre (perspectiva vertical corregida en vistas arquitectónicas para gerencia y encuadres axiales o elevados despejados para inspección de bandejas y cuadros en coordinación MEP). *(Nivel de Bloom: Aplicar)*
4. **Evaluar** una presentación ante comité de cliente verificando que ni la secuencia visual, ni la navegación interactiva en tiempo real, ni el lenguaje expositivo presenten una escena de Twinmotion como cálculo eléctrico aprobado o verificación normativa oficial. *(Nivel de Bloom: Evaluar)*
5. **Redactar** guiones ejecutivos y fichas argumentales por escena asistidos por Inteligencia Artificial sobre datos anonimizados, auditando manualmente su terminología eléctrica y asegurando la inclusión de notas de alcance y vinculación con planos PDF. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Presentaciones interactivas en Twinmotion: *Presenter*, *Cloud* y *View Sets*

#### Explicación breve y clara
Mostrar un archivo de trabajo abierto en directo desde la interfaz de edición de Twinmotion durante una reunión con gerencia o propiedad suele generar distracciones: menús de herramientas visibles, clics accidentales sobre luces o carpetas y tirones de cámara si un cliente pide «girar rápido hacia la otra esquina». Para resolverlo profesionalmente, Twinmotion dispone del módulo **Media > Presentation** (habitualmente conocido como *Presenter* en formato local o publicado en *Twinmotion Cloud*, según versión, cuenta y plan de licenciamiento).

Una presentación empaquetada ordena secuencialmente imágenes, vídeos, panoramas y estados de escena (*View Sets* / *Phasing*) en un visor limpio sin interfaz de edición. Además, permite definir el **modo de navegación permitido** al espectador: **Guiado (*Guided*)** (el usuario solo salta entre las cámaras y estados aprobados por el técnico) o **Libre (*Free*)** (permite caminar por la escena, útil para inspecciones técnicas pero arriesgado si no se bloquean límites, ya que el usuario puede atravesar falsos techos o entrar en zonas sin modelar). Conviene además evaluar con rigor la privacidad: si el proyecto contiene datos confidenciales de cliente o infraestructura crítica, publicar en *Twinmotion Cloud* exige autorización expresa y revisar las condiciones de acceso o contraseña.

#### Conceptos clave
- ***Local Presentation* (Presentación local):** Paquete ejecutable o autocontenido generado desde Twinmotion para exponer en ordenador presencial o compartir sin que el destinatario necesite abrir el editor ni saber manejar el *Scene Graph* (requiere hardware gráfico compatible para ejecutarse con fluidez).
- ***Twinmotion Cloud*:** Servicio de alojamiento web en nube vinculado a la licencia/cuenta correspondiente que permite compartir enlaces interactivos de navegador (sujeto a límites de tamaño, versión y requisitos de confidencialidad del proyecto).
- **Conjuntos de vistas (*View Sets* / *Phasing* interactivo):** Estados preguardados de visibilidad de capas, iluminación o variantes de diseño que el presentador conmuta en directo con un clic manteniendo la cámara quieta.
- **Modo de cámara *Guided* frente a *Free*:** Control de autonomía del espectador; *Guided* garantiza que el comité vea únicamente encuadres calibrados y seguros, mientras que *Free* ofrece exploración abierta para revisiones internas de coordinación MEP.

#### Definiciones necesarias
- **Presentación interactiva en tiempo real:** Entorno de visualización empaquetado sin menús de edición donde el ponente o el cliente alternan cámaras, fases y horarios sobre el modelo 3D activo.
- **Estado de escena (*View Set*):** Instantánea de configuración que registra qué carpetas del *Scene Graph* están visibles u ocultas (y ajustes asociados según versión) para conmutar instantáneamente entre alternativas técnicas o fases sin duplicar archivos.
- **Límite de privacidad en nube (*Cloud Governance*):** Política de seguridad documental por la cual ningún modelo BIM/visualización de instalaciones sensibles se sube a servidores externos sin permiso contractual del cliente.

#### Ejemplo práctico realista
Para una reunión con la dirección de un centro educativo, el proyectista prepara una **Presentación Local** estructurada en 6 paradas fijas con modo *Guided* para evitar que los directivos atraviesen muros accidentalmente:
1. Parada 1: Acceso exterior diurno (contextualización de parcela).
2. Parada 2: Acceso exterior nocturno (evaluación visual del alumbrado de fachada a $3000\text{ K}$).
3. Parada 3: Aula tipo en modo *View Set A* (falso techo cerrado, luminarias lineales $4000\text{ K}$).
4. Parada 4: Misma cámara de aula en modo *View Set B* (falso techo oculto mostrando trazado de bandejas y derivaciones).
5. Parada 5: Cuarto de contadores y CGBT con vista frontal despejada.
6. Parada 6: Clip de vídeo corto de $25\text{ s}$ integrado como cierre del recorrido.
Durante la reunión en sala de juntas, un portátil con GPU dedicada proyecta el paquete fluido a pantalla completa sin barras de herramientas ni riesgo de descalibrar accidentalmente las luces.

#### Errores frecuentes
- Exponer directamente desde el editor de Twinmotion moviendo el ratón a mano, provocando temblores, pérdidas de encuadre y menús laterales molestos en pantalla.
- Entregar un paquete en modo *Free* a un cliente poco acostumbrado a navegación 3D, quien termina atrapado dentro de un pilar o debajo de la solera y concluye que «el modelo tiene fallos».
- Subir un proyecto industrial confidencial o de cliente privado a *Twinmotion Cloud* mediante enlace público sin autorización escrita ni protección de acceso.
- Enviar un paquete *Local Presentation* pesado ($> 4\text{ GB}$) a un gerente con portátil de oficina sin tarjeta gráfica dedicada esperando que lo abra sin problemas.

#### Preguntas que el alumnado debería poder responder
1. ¿En qué situaciones de presentación con cliente conviene bloquear el modo *Guided* en lugar de habilitar navegación *Free*?
2. ¿Qué requisitos técnicos y de confidencialidad deben comprobarse antes de optar por *Local Presentation* frente a *Twinmotion Cloud*?
3. ¿Cómo permiten los *View Sets* mostrar variantes eléctricas o estados de falso techo sin perder la posición exacta de la cámara?

---

### 3.2. Comparativas técnicas: antes-después, día-noche y arquitectura frente a MEP

#### Explicación breve y clara
En ingeniería de instalaciones, una imagen aislada convence menos que una **comparativa rigurosa**. Los comités toman decisiones rápidas cuando observan exactamente la misma perspectiva bajo dos condiciones controladas: **estado previo frente a reforma propuesta** (antes-después), **operación solar frente a alumbrado artificial** (día-noche), **opción de luminaria A frente a opción B**, o **acabado arquitectónico frente a coordinación MEP oculta**.

Para que la comparativa sea técnicamente honesta y no manipuladora, la regla inquebrantable es el **bloqueo de cámara**: las dos imágenes o paradas deben compartir exactamente las mismas coordenadas $(X, Y, Z)$, la misma rotación y la misma distancia focal ($\text{mm}$). Si al cambiar del «antes» al «después» el proyectista acerca la cámara o abre la focal, induce una comparación engañosa. Asimismo, al comparar dos niveles de alumbrado artificial nocturno debe mantenerse fijo el valor de exposición (**EV**); únicamente cuando se compara día soleado frente a noche cerrada se ajusta coherentemente el EV propio de cada toma documentándolo de forma explícita.

#### Conceptos clave
- **Bloqueo geométrico de cámara:** Reutilización idéntica de una vista guardada duplicando únicamente el *View Set*, la capa activa o la hora solar para producir pares comparativos superponibles.
- **Comparativa antes-después (Reforma / Retrofit):** Contraste entre luminarias obsoletas o distribución antigua y la nueva implantación LED/cuadros proyectados, útil en auditorías energéticas y renovaciones.
- **Comparativa día-noche:** Contraste entre iluminación natural predominante y escena nocturna de alumbrado interior/exterior para validar integración arquitectónica y presencia de deslumbramiento aparente o contaminación visual.
- **Comparativa Arquitectura vs. Coordinación MEP:** Alternancia en un mismo encuadre entre el espacio terminado y la transparencia del falso techo/trasdosados exponiendo bandejas de fuerza, comunicaciones, clima y cajas eléctricas.

#### Definiciones necesarias
- **Par comparativo calibrado:** Dos capturas o vistas interactivas con encuadre y distancia focal idénticos en las que varía exclusivamente una variable técnica controlada (capa de diseño, fase o estado horario).
- **Cortinilla comparativa (*Before/After Slider*):** Recurso visual (en presentación PDF/web o herramienta externa tras exportar dos imágenes bloqueadas) que permite deslizar verticalmente entre el estado A y el estado B sobre exactamente los mismos píxeles.
- **Integridad de exposición en variantes:** Principio según el cual dos alternativas lumínicas nocturnas comparadas entre sí deben renderizarse con idéntico EV y *White Balance* para reflejar honestamente su diferencia de flujo o temperatura.

#### Ejemplo práctico realista
En el proyecto de renovación eléctrica e lumínica de un taller mecánico antiguo, el equipo debe justificar ante gerencia la sustitución de luminarias de halogenuros metálicos amarillentas y canalizaciones desordenadas vistas por nuevas campanas LED a $4000\text{ K}$ y bandeja de rejilla organizada:
- Se fija una cámara única en el eje central de la nave ($h = 1{,}65\text{ m}$, focal $28\text{ mm}$).
- **Vista 1A (Estado existente simulado como referencia visual):** capa `01_Existente` activa, iluminación cálida/degradada antigua, EV calibrado de referencia.
- **Vista 1B (Propuesta proyectada):** capa `02_Reforma_MEP` activa (manteniendo la misma cámara exacta y el mismo EV nocturno/cerrado para contraste de distribución), mostrando mayor uniformidad percibida a $4000\text{ K}$ y la nueva bandeja portacables ordenada en lateral izquierdo.
- **Vista 1C (Coordinación MEP ampliada):** sobre la misma cámara o variante en falso techo en zona anexa de oficinas, se apaga el falso techo para ver el cruce entre bandeja eléctrica y conducto de climatización.
*Nota normativa:* la justificación energética o de ahorro real (kW instalados, eficiencia $\text{lm/W}$, VEEI y luxes medios) se demuestra exclusivamente en la memoria de cálculo y estudio DIALux según normativa aplicable (p. ej., CTE DB-HE3 o UNE-EN 12464-1 en España), nunca mediante el contraste fotográfico de los renders.

#### Errores frecuentes
- Cambiar ligeramente el ángulo o la focal entre la vista «antes» y la vista «después», haciendo que la comparativa salte visualmente y parezca manipulada.
- Subir el EV manualmente solo en la foto «después» cuando se comparan dos tipos de luminaria interior nocturna para hacer que la propuesta recomendada parezca el doble de potente.
- Mostrar una vista «MEP descubierta» mezclando elementos antiguos y nuevos por descuido al olvidar ocultar la capa previa en el *View Set*.
- Utilizar la comparativa día-noche para afirmar sin estudio solar ni cálculo que el edificio «cumple con el aporte mínimo de luz natural».

#### Preguntas que el alumnado debería poder responder
1. ¿Qué parámetros de cámara deben permanecer estrictamente bloqueados al construir cualquier par comparativo antes-después o arquitectura vs. MEP?
2. ¿Cuándo debe mantenerse idéntico el EV entre dos imágenes comparadas y cuándo resulta lógico ajustarlo documentando la diferencia?
3. ¿Cómo ayuda una comparativa de arquitectura frente a coordinación MEP en una reunión multidisciplinar con clima y estructura?

---

### 3.3. Encuadres arquitectónicos y de coordinación MEP según audiencia

#### Explicación breve y clara
No todas las personas que se sientan en un comité buscan la misma información en una imagen. Un director general o un propietario inversor evalúa **confort espacial, imagen corporativa, integración estética de luminarias y claridad del entorno**; por el contrario, un director de ejecución, jefe de mantenimiento o coordinador BIM busca **accesibilidad a envolventes, separación entre bandejas de fuerza y datos, alturas libres bajo obstáculos y trazabilidad de circuitos**.

Por ello, los encuadres deben diseñarse de forma diferenciada pero complementaria:
- **Encuadre arquitectónico / gerencia:** Punto de vista natural ($1{,}55\text{–}1{,}65\text{ m}$), perspectiva vertical corregida (*Parallelism / Vertical Shift* activo para que paredes y armarios queden perfectamente verticales), regla de tercios equilibrada, luminarias integradas sin deslumbramiento molesto y presencia sutil de atrezo humano que aporte escala.
- **Encuadre de coordinación MEP / técnico:** Puntos de vista ligeramente elevados ($2{,}10\text{–}2{,}60\text{ m}$) o axiales a ejes de pasillo técnico y cuartos eléctricos, con atrezo innecesario y falsos techos ocultos, centrando la atención en pasos de bandejas, derivaciones a cajas, distancias de trabajo frente a cuadros BT/MT y cruce limpio con otras instalaciones (climatización, PCI, fontanería).

#### Conceptos clave
- **Corrección de verticales (*Parallelism*):** Activación de paralelismo vertical en cámara para evitar el efecto de convergencia o «edificio cayéndose hacia atrás» en fachadas, vestíbulos y frentes de armarios eléctricos.
- **Regla de tercios y punto focal técnico:** Distribución del encuadre ubicando el equipo eléctrico principal o la línea de alumbrado protagonista sobre líneas de fuerza visuales, evitando esquinas cortadas o grandes zonas vacías de suelo/techo sin información.
- **Encuadre axial de pasillo técnico:** Vista centrada a lo largo de un corredor con techo oculto que permite seguir visualmente de un vistazo el paralelismo de bandejas portacables, soportación y luminarias.
- **Encuadre isométrico / seccionado de sala técnica:** Vista elevada en ángulo de $35^\circ\text{–}45^\circ$ (combinada con *Section Cube* si procede) para explicar en un solo plano la implantación completa de cuadros, celdas, alumbrado y canalizaciones de un cuarto eléctrico pequeño.

#### Definiciones necesarias
- **Perspectiva de dos puntos (verticales paralelas):** Proyección óptica en la que todas las aristas verticales reales del edificio (muros, pilares, puertas de cuadros) se mantienen estrictamente paralelas a los bordes verticales de la pantalla.
- **Encuadre de coordinación MEP:** Vista técnica intencionada cuyo objetivo prioritario es revelar relaciones espaciales, holguras y posibles conflictos entre redes eléctricas y otras especialidades del modelo BIM.
- **Peso visual del encuadre:** Equilibrio entre luminancia, contraste y densidad geométrica que dirige automáticamente la mirada del espectador hacia el elemento que el ponente está explicando.

#### Ejemplo práctico realista
Para defender el proyecto de un nuevo centro comercial de tamaño medio ante el comité de propiedad y la dirección facultativa de obra, se diseñan dos familias de encuadres en Twinmotion:
1. **Lote Gerencia (4 vistas con *Parallelism* activo, $h = 1{,}60\text{ m}$, $32\text{ mm}$):**
   - Acceso principal crepuscular equilibrado en regla de tercios destacando la marquesina iluminada a $3000\text{ K}$.
   - Galería interior amueblada mostrando cómo la línea continua de luminarias acompaña el flujo peatonal sin reflejos agresivos en escaparates.
2. **Lote Coordinación MEP (4 vistas sin atrezo y techo oculto, $h = 2{,}40\text{ m}$ o vista seccionada):**
   - Pasillo de servicio con encuadre axial mostrando bandeja de fuerza BT separada verticalmente de la bandeja de telecomunicaciones y su cruce bajo un conducto de climatización sin colisión.
   - Vista seccionada superior del Cuarto General de Contadores y BT mostrando puerta abriendo hacia fuera (vía modelo Revit), luminarias de emergencia sobre salida y espacio frontal libre.

#### Errores frecuentes
- Presentar a un jefe de obra únicamente encuadres bajos artísticos con mobiliario que tapan por completo las instalaciones sobre el falso techo.
- Presentar a un cliente comercial encuadres técnicos crudos en perspectiva picada con cables, cajas grises y techos abiertos sin explicar previamente el contexto arquitectónico terminado.
- Olvidar activar la corrección de verticales (*Parallelism*) al mirar hacia arriba en una fachada iluminada o hacia abajo dentro de un cuarto de cuadros estrecho.
- Cortar por la mitad cuadros eléctricos o luminarias protagonistas en los bordes del encuadre por no ajustar unos grados el paneo o retroceder un paso la cámara.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué defecto óptico corrige la función de paralelismo vertical (*Parallelism*) en encuadres de fachadas y salas de cuadros eléctricos?
2. ¿En qué se diferencia un encuadre pensado para aprobación estética de propiedad frente a un encuadre pensado para coordinación MEP con instaladores?
3. ¿Cuándo resulta más informativa una vista elevada con *Section Cube* que una cámara a $1{,}60\text{ m}$ dentro de un cuarto eléctrico reducido?

---

### 3.4. Narrativa técnica honesta para comités y asistencia con IA para dosieres

#### Explicación breve y clara
La herramienta más sofisticada fracasa si el mensaje oral o escrito confunde al público o crea falsas expectativas legales. Al presentar ante comités de cliente, gerencia o propiedad, la visualización de Twinmotion debe enmarcarse en una **narrativa técnica estructurada** que responda en orden a cuatro preguntas: *¿Qué problema resuelve el proyecto?*, *¿Cómo se percibe el espacio iluminado y ordenado?*, *¿Cómo se coordina técnicamente sin interferencias?* y *¿Qué documentos oficiales respaldan los cálculos?*.

Aquí, **ChatGPT o Claude** agilizan enormemente la preparación de la reunión: a partir de un esquema **anonimizado** de las paradas de la presentación (título de vista, audiencia, equipos visibles y objetivo), la IA puede redactar guiones ejecutivos claros, notas de orador de $45\text{ segundos}$ por diapositiva/parada, tablas comparativas sin argot innecesario para gerencia y advertencias claras de alcance. No obstante, debemos revisar con rigor cada texto generado: la IA nunca debe escribir expresiones como «validación certificada en Twinmotion», «garantiza el cumplimiento de la norma X» ni incluir cifras eléctricas o fotométricas que no hayan sido extraídas y comprobadas por el técnico desde la memoria de cálculo oficial.

#### Conceptos clave
- **Arco narrativo para comité mixto:** Secuencia comunicativa en 4 bloques: (1) Contexto y objetivo funcional, (2) Impacto visual y alumbrado para usuario, (3) Coordinación técnica y mantenimiento MEP, (4) Soportes contractuales y próximos hitos.
- **Traducción de lenguaje técnico sin pérdida de rigor:** Explicar a gerencia el valor de una buena uniformidad lumínica o de una bandeja separada por servicios sin prometer datos no certificados ni caer en tecnicismos incomprensibles.
- **Regla de no sustitución documental:** Declaración verbal y escrita en toda presentación de Twinmotion dejando claro que la visualización complementa —pero jamás sustituye— los planos visados en PDF, el esquema unifilar, la memoria de cálculo eléctrico y el estudio fotométrico en DIALux.
- **Revisión humana de guiones IA:** Auditoría obligatoria de nombres de sistemas, unidades ($\text{kW}$, $\text{lm}$, $\text{K}$), orden de fases y cláusulas legales en textos redactados por modelos lingüísticos sobre resúmenes anonimizados.

#### Definiciones necesarias
- **Guion de orador por parada (*Speaker Notes*):** Texto breve de apoyo vinculado a cada vista o diapositiva de *Twinmotion Presentation* que resume en 3 ideas clave qué señalar en pantalla, qué decisión se solicita al comité y qué límite técnico aplica.
- **Ingeniería certificada frente a apoyo visual:** Distinción profesional y legal entre documentos técnicos suscritos por técnico competente conforme a reglamento aplicable (memoria, cálculos, unifilar, planos PDF, certificados de instalación) y renders o recorridos interactivos de comunicación.
- **Anonimización de dosier:** Eliminación de datos identificativos de cliente, emplazamiento, importes confidenciales o marcas sensibles antes de emplear asistentes de IA externos para redactar el discurso de presentación.

#### Ejemplo práctico realista
Un coordinador BIM eléctrico prepara un comité de dirección de 15 minutos con 8 vistas en *Twinmotion Presentation* para un edificio terciario anonimizado (`PROY_TERC_09`). Introduce la lista de 8 paradas en Claude/ChatGPT pidiendo notas de orador de máximo 70 palabras por parada y un resumen ejecutivo de cierre.

La IA genera un guion muy fluido, pero en la Parada 4 redacta: *«Como observamos en el modelo 3D de Twinmotion, la iluminación de emergencia supera ampliamente el mínimo legal de lux y el trazado de bandejas queda completamente homologado para licitación»*. El ingeniero detecta el peligro técnico-legal y modifica el texto a: *«Esta vista ilustra la ubicación prevista de luminarias de emergencia sobre las salidas y la separación física proyectada entre bandejas de fuerza y datos; la verificación reglamentaria de niveles de iluminancia y los detalles constructivos quedan recogidos en el estudio fotométrico y en los planos PDF del proyecto»*. Así conserva la claridad comercial con absoluta integridad profesional.

#### Errores frecuentes
- Vender un recorrido o presentación de Twinmotion al cliente como «gemelo certificado» o «prueba de cumplimiento normativo».
- Improvisar el discurso durante la presentación saltando desordenadamente entre vistas sin un hilo conductor adaptado al perfil de los asistentes.
- Llenar la presentación de cifras eléctricas complejas en pantalla sin contextualizarlas ni acompañarlas del documento oficial donde fueron calculadas.
- Copiar directamente notas de presentación generadas por IA sin verificar que reflejan exactamente los sistemas y la normativa aplicable del país del proyecto.

#### Preguntas que el alumnado debería poder responder
1. ¿Cómo debe estructurarse el discurso de una presentación en Twinmotion cuando en la misma sala asisten propiedad/gerencia y jefatura de mantenimiento?
2. ¿Por qué es profesional y legalmente indispensable incluir de forma explícita la referencia a planos PDF y memorias de cálculo durante una presentación visual?
3. ¿Qué tipo de afirmaciones improcedentes suele introducir un asistente de IA al redactar guiones comerciales para ingeniería y cómo debe corregirlas el técnico?

---

## 4. Metodología didáctica

La sesión combina análisis crítico de presentaciones reales, laboratorio práctico en *Twinmotion Presentation* y *View Sets*, diseño de encuadres por audiencia y taller de guionización segura con IA, sumando exactamente **240 minutos**.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
| :--- | :---: | :--- | :--- |
| **1. Activación: Diagnóstico de presentaciones ante comité** | 25 min | Proyecta una presentación caótica hecha desde el editor abierto frente a una presentación empaquetada con narrativa clara y encuadres duales, planteando los objetivos del tema. | Analiza en parejas los errores de interfaz, encuadre, comparativa sesgada y afirmaciones comerciales improcedentes en una ficha breve. |
| **2. Demostración I: Encuadres duales y comparativas bloqueadas** | 40 min | Muestra en directo la configuración de *Parallelism*, regla de tercios para gerencia, vistas axiales/elevadas para MEP y bloqueo exacto de cámara para pares antes-después y día-noche. | Crea en su archivo base 2 pares comparativos bloqueados (Arquitectura vs. MEP y Día vs. Noche) más 2 encuadres diferenciados según audiencia. |
| **3. Demostración II: *Presentation*, *View Sets* y *Cloud* vs. *Local*** | 35 min | Explica y demuestra la construcción de una secuencia en *Media > Presentation*, conmutación mediante *View Sets* / *Phasing*, elección entre modo *Guided* y *Free*, y límites reales de *Cloud* frente a paquete local. | Ensambla su primera presentación interactiva en Twinmotion integrando vistas fijas, un par comparativo mediante *View Sets* y el clip breve del Tema 8. |
| **4. Práctica guiada: Guion ejecutivo y auditoría ética con IA** | 40 min | Proporciona plantilla anonimizada de paradas de presentación y orienta el diseño de prompts para redactar *speaker notes* claras, señalando frases ilegales o exageradas generadas por IA. | Genera notas de orador y resumen ejecutivo con IA sobre datos anonimizados, corrige afirmaciones de falsa certificación y los asocia a cada parada. |
| **5. Pausa activa** | 15 min | Atiende dudas sobre requisitos de hardware de *Local Presentation*, políticas de privacidad de *Cloud* o ajustes de *Parallelism*. | Descansa y comprueba las capturas de contraste de sus vistas comparativas. |
| **6. Taller aplicado: Caso práctico integral ante comité mixto** | 60 min | Actúa como comité de cliente y gerencia técnica supervisando el montaje final del paquete interactivo, el rigor de las comparativas y el guion oral. | Resuelve el caso práctico configurando la presentación interactiva completa, pares comparativos bloqueados, encuadres gerencia/MEP y guion auditado con IA. |
| **7. Puesta en común, evaluación y cierre** | 25 min | Modera micro-presentaciones de 3 minutos por parte de 3 equipos voluntarios simulando un comité real, aplica la rúbrica y enlaza con la exportación final del Tema 10. | Expone o evalúa entre pares una presentación en modo *Guided*, completa la autoevaluación y realiza el test sumativo de cierre. |

**Total cronometrado:** $25 + 40 + 35 + 40 + 15 + 60 + 25 = \mathbf{240\text{ minutos}}$.

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «Caza de sesgos y errores de comité»
- **Objetivo:** Identificar errores frecuentes en presentaciones visuales de proyectos eléctricos (encuadres manipulados, perspectivas sin corregir, navegación descontrolada y discurso con falsas promesas normativas).
- **Instrucciones para el alumnado:**
  1. Revisa el material de entrada (`Demo_Presentacion_Defectuosa.pdf` y 2 pares de imágenes comparativas).
  2. Trabajando por parejas, detecta al menos 5 fallos técnicos o comunicativos (por ejemplo: cambio de posición de cámara entre «antes» y «después», diferente EV en comparativa nocturna, líneas verticales caídas por falta de *Parallelism*, frase comercial vendiendo el render como certificado de obra).
  3. Anota qué ajuste concreto en Twinmotion o en el guion corrige cada fallo.
- **Materiales necesarios:** Dos pares comparativos con sesgo oculto, extracto de guion defectuoso y ficha de diagnóstico rápido.
- **Tiempo estimado:** 25 minutos (Fase 1).
- **Rol del formador:** Facilita el debate y muestra superponiendo las imágenes por qué cambiar $10^\circ$ la cámara o subir el EV en el «después» invalida la honestidad técnica de la comparativa.
- **Producto o entregable esperado:** Lista diagnóstica con 5 errores clasificados (óptico, expositivo, de interfaz o de alcance legal) y su solución técnica.
- **Criterios de éxito:** Detección precisa de la manipulación expositiva/geométrica y formulación clara de la distinción entre visualización e ingeniería certificada.

### Actividad 2 (Aplicación técnica): «Paquete interactivo dual: Gerencia y Coordinación MEP»
- **Objetivo:** Configurar un proyecto ordenado en *Media > Presentation* con *View Sets*, encuadres arquitectónicos con *Parallelism*, encuadres MEP elevados y comparativas estrictamente bloqueadas.
- **Instrucciones para el alumnado:**
  1. Abre `Bloque5_T9_EscenaCompleta.tm` (escena con iluminación calibrada, *Scene Graph* ordenado y vídeo corto de temas anteriores).
  2. Crea y guarda 6 paradas organizadas:
     - **Parada 1 y 2 (Día vs. Noche bloqueado):** Misma cámara exterior fija ($32\text{ mm}$, *Parallelism* ON), cambiando únicamente estado solar y encendido nocturno.
     - **Parada 3 y 4 (Acabado Gerencia vs. Coordinación MEP):** Misma cámara interior de pasillo/oficina ($28\text{ mm}$, *Parallelism* ON), alternando mediante *View Set* / *Phasing* entre techo cerrado + mobiliario y techo oculto exponiendo bandejas y cajas de derivación.
     - **Parada 5 (Coordinación sala técnica):** Encuadre elevado/seccionado de la sala de cuadros BT mostrando frente libre, alumbrado de emergencia y entradas de tubos sin atrezo obstructivo.
     - **Parada 6:** Inserción del clip de vídeo del Tema 8.
  3. Configura la presentación en modo *Guided*, revisa la transición entre todas las paradas sin mostrar barras de edición y exporta/guarda el paquete configurado (o verifica su vista previa en modo presentación).
- **Materiales necesarios:** Archivo `.tm` base completo y hoja de comprobación de coordenadas y *Parallelism*.
- **Tiempo estimado:** 75 minutos (distribuidos en las Fases 2 y 3).
- **Rol del formador:** Comprueba que el alumnado no mueve un milímetro las cámaras entre pares comparativos, que activa *Parallelism* en las vistas arquitectónicas y que limita adecuadamente el modo *Guided*.
- **Producto o entregable esperado:** Escena guardada con módulo *Presentation* estructurado en 6 paradas + capturas de los dos pares comparativos demostrando alineación exacta.
- **Criterios de éxito:** Alineación píxel a píxel entre pares comparativos; verticales paralelas; conmutación fluida entre vista comercial y vista MEP; ausencia de navegación errática.

### Actividad 3 (Transferencia a proyecto real): «Guion ejecutivo seguro con IA para comité mixto»
- **Objetivo:** Generar con ayuda de IA un guion de presentación estructurado y comprensible para perfiles no técnicos sin comprometer la confidencialidad ni atribuir validez normativa a los renders.
- **Instrucciones para el alumnado:**
  1. Prepara un esquema anonimizado de tus 6 paradas (`Proyecto_Demo_Comite`: tipo de recinto, equipos eléctricos visibles y audiencia).
  2. Pide a ChatGPT o Claude que genere para cada parada: (a) título ejecutivo claro, (b) notas de orador de 50–70 palabras evitando jerga excesiva pero manteniendo precisión eléctrica, y (c) una pregunta probable del cliente con su respuesta técnica honesta.
  3. Audita manualmente la respuesta de la IA: elimina cualquier promesa implícita de cumplimiento reglamentario automático, valida las magnitudes mencionadas (kW, lm, K) contra datos reales de proyecto y añade al cierre una referencia explícita a los planos PDF y memorias de cálculo oficiales.
- **Materiales necesarios:** Tabla anonimizada de 6 paradas, plantilla de prompt seguro y acceso a asistente de IA (o guion impreso simulado para trabajo offline).
- **Tiempo estimado:** 40 minutos (Fase 4).
- **Rol del formador:** Revisa ejemplos de respuestas demasiado «vendedoras» generadas por la IA e ilustra cómo reformularlas con sobriedad técnica profesional.
- **Producto o entregable esperado:** Documento de guion ejecutivo de 6 paradas revisado manualmente, incluyendo las notas de orador y la cláusula de alcance técnico.
- **Criterios de éxito:** Anonimización completa; lenguaje claro adaptado a gerencia y mantenimiento; corrección efectiva de exageraciones o falsas garantías técnicas generadas por la IA.

---

## 6. Caso práctico

### Presentación ante comité mixto de la renovación eléctrica e iluminación de un complejo deportivo municipal

#### Contexto empresarial
La ingeniería **Luz & Red Consultores S.L.** (empresa ficticia) ha finalizado el diseño en DIALux, el modelado en Revit MEP y la documentación en planos PDF de la reforma eléctrica y de alumbrado LED de un complejo deportivo municipal (vestíbulo de acceso, pista polideportiva cubierta, sala de depuración/climatización y cuarto de Cuadro General de Baja Tensión). Esta semana debe presentar el avance ante un **comité mixto** formado por la concejala de deportes (perfil institucional/gerencial), el gerente de instalaciones (enfocado en uso diario y mantenimiento) y el ingeniero municipal revisor (enfocado en coordinación física y documentación).

#### Situación o problema
El equipo de visualización preparó un avance preliminar sin criterio de presentación profesional que está a punto de enviarse al comité:
1. En lugar de montar una secuencia en *Twinmotion Presentation*, propusieron «compartir la ventana normal de Twinmotion durante la videollamada y moverse libremente con el ratón», además de subir el modelo sin anonimizar ni clave a un enlace público de nube sin autorización del ayuntamiento.
2. La comparativa «antes-después» de la pista polideportiva muestra el estado antiguo desde un rincón oscuro con gran angular de $18\text{ mm}$ y la propuesta nueva desde la grada central con $35\text{ mm}$ y un EV artificialmente elevado, pareciendo que hay el triple de luz de la real.
3. No existe ninguna vista que permita mostrar el trazado de bandejas portacables sobre el falso techo del vestíbulo ni la accesibilidad del nuevo cuarto de CGBT, ya que todo está oculto por techos y taquillas decorativas.
4. El borrador de guion (redactado sin revisar desde un chat de IA) afirma textualmente: *«Esta presentación en Twinmotion demuestra el cumplimiento íntegro del reglamento eléctrico y lumínico de pistas deportivas»*.

#### Datos disponibles
- Modelo `.tm` completo con capas separadas del *Scene Graph* (`01_Existente_Pista`, `02_Propuesta_LED_Pista`, `03_FalsoTecho_Vestibulo`, `04_MEP_Bandejas_Cuadros`, `05_Atrezo_Deportivo`), luces calibradas del Tema 6 y clip de recorrido de $20\text{ s}$ del Tema 8.
- Datos resumidos anonimizados del proyecto (`Complejo_Municipal_Tipo`):
  - Pista cubierta: sustitución de proyectores antiguos por proyectores LED asimétricos de $4000\text{ K}$ (cálculo oficial en DIALux adjunto en PDF).
  - Vestíbulo: luminarias lineales $3000\text{ K}$ / $4000\text{ K}$ y doble bandeja portacables oculta sobre techo acústico registrable.
  - Cuarto de CGBT: armario modular con envolvente accesible, alumbrado de emergencia y espacio frontal libre.
- Plantilla para preparar *Local Presentation* segura y guion de comité.

#### Preguntas de análisis
1. ¿Por qué abrir el editor de Twinmotion en vivo y subir un enlace público sin permiso a la nube supone un doble error profesional y de seguridad frente a preparar una *Local Presentation* en modo *Guided*?
2. ¿Qué dos manipulaciones visuales invalidan la comparativa «antes-después» de la pista deportiva y cómo deben corregirse técnicamente?
3. ¿Qué combinación de *View Sets* y encuadres diferenciados satisface en una sola reunión tanto a la concejala de deportes como al ingeniero municipal revisor?
4. ¿Por qué es técnicamente inadmisible la afirmación del borrador de guion redactado por IA sobre el «cumplimiento íntegro» y cómo debe reformularse?

#### Tarea a realizar
Por equipos o individualmente, deberéis:
1. **Corregir los encuadres y comparativas en Twinmotion:**
   - Bloquear una cámara exacta ($28\text{–}35\text{ mm}$, *Parallelism* activo) para la comparativa «antes-después» de la pista cubierta usando exactamente el mismo EV en ambas escenas para contrastar de manera honesta la distribución del alumbrado.
   - Configurar un par día-noche bloqueado para el acceso exterior.
   - Configurar en el vestíbulo una pareja *Arquitectura acabada vs. Coordinación MEP* (mediante *View Set* / *Phasing*) y añadir un encuadre técnico despejado del cuarto CGBT sin taquillas ni obstáculos.
2. **Ensamblar la presentación en *Media > Presentation*** en modo *Guided* (formato *Local Presentation*, evitando subida no autorizada a nube) con 6–7 paradas ordenadas lógicamente para comité mixto, integrando el vídeo corto al cierre.
3. **Redactar el guion de orador y resumen ejecutivo con apoyo seguro de IA** (usando únicamente datos anonimizados), auditando cada texto para eliminar falsas garantías reglamentarias y vinculando expresamente la presentación con los planos PDF del modelo Revit y las memorias de DIALux/cálculo eléctrico.

#### Posibles soluciones o criterios de análisis
- **Empaquetado y seguridad:** Usar *Local Presentation* en modo *Guided* (o *Cloud* solo si el cliente lo autoriza por escrito con acceso restringido y contraseña, verificando versión y licencia). Así se evita mostrar barras de herramientas, perderse bajo el suelo o exponer modelos institucionales en enlaces abiertos.
- **Comparativa honesta de pista:** Misma coordenada de cámara, misma focal ($32\text{ mm}$), mismo EV nocturno/interior y misma geometría de gradas; únicamente conmutar la capa `01_Existente` frente a `02_Propuesta_LED` para comparar color ($4000\text{ K}$), ausencia de sombras duras y distribución óptica real.
- **Encuadres para doble audiencia:**
  - *Bloque Gerencia/Institucional:* Vestíbulo y acceso con *Parallelism*, escala humana con usuarios y ambiente equilibrado.
  - *Bloque Técnico/Ingeniero Revisor:* Vestíbulo en la misma cámara con falso techo oculto exponiendo bandejas fuerza/datos, más encuadre ligeramente elevado/frontal en cuarto CGBT mostrando acceso despejado y alumbrado de emergencia.
- **Guion revisado y descargo:** Sustituir cualquier mención de certificación en Twinmotion por una fórmula clara: *«Visualización de apoyo arquitectónico y coordinación BIM; los niveles lumínicos, secciones de conductores, protecciones y cumplimiento reglamentario (según normativa nacional aplicable y edición vigente, como REBT / UNE-EN 12464-1 / CTE en España o códigos equivalentes) constan exclusivamente en los planos PDF, estudio DIALux y memoria técnica visada del proyecto»*.

#### Preguntas de reflexión final
1. Durante el turno de preguntas del comité, el gerente pide «ver qué pasa detrás de ese muro en el modelo 3D». ¿Cómo gestionas esa petición combinando modo *Guided* para la presentación base y acceso controlado sin improvisar zonas sin modelar?
2. ¿Qué riesgos reputacionales asume un estudio si presenta reiteradamente comparativas antes-después con distintos ángulos y exposiciones manipuladas?
3. ¿Cómo puedes complementar la presentación interactiva de Twinmotion con los planos PDF exportados desde Revit (Bloque 4) para que el cliente tome decisiones rápidas y seguras?

---

## 7. Evaluación

### Evaluación diagnóstica
- **Cuándo:** Primeros 25 minutos (Fase 1 / Actividad 1).
- **Instrumento:** Diagnóstico en parejas sobre presentación defectuosa y dos pares comparativos manipulados.
- **Propósito:** Detectar hábitos poco rigurosos al comparar vistas o preparar exposiciones en vivo sin empaquetado ni guion.

### Evaluación formativa
- **Cuándo:** Durante las Fases 2, 3 y 4 (Actividades 2 y 3).
- **Instrumento:** Revisión en estación del módulo *Media > Presentation*, alineación de cámaras entre *View Sets* y lectura crítica de *speaker notes* generadas con IA.
- **Criterios de seguimiento:** Cámaras bloqueadas en comparativas, verticales corregidas (*Parallelism*), modo *Guided* configurado y ausencia de afirmaciones legales falsas en guion.

### Evaluación sumativa
- **Cuándo:** Fases 6 y 7 (Caso práctico + micro-exposición de 3 minutos + test de cierre de 10 ítems).
- **Composición de la calificación:**
  - **60 %** Entregable del Caso práctico (proyecto `.tm` con *Presentation* estructurada en modo *Guided* + capturas de pares comparativos bloqueados y encuadres Gerencia/MEP + guion auditado con descargo técnico).
  - **25 %** Ejecución de la Actividad 3 (guion ejecutivo anonimizado con IA y depuración crítica de promesas normativas) y defensa oral de 3 minutos.
  - **15 %** Cuestionario objetivo sobre *Presenter/Cloud*, *View Sets*, encuadres compositivos, comparativas calibradas y límites legales.

### Rúbrica de evaluación

| Criterio | Insuficiente (0–4,9) | En desarrollo (5,0–6,9) | Adecuado (7,0–8,9) | Destacado (9,0–10) |
| :--- | :--- | :--- | :--- | :--- |
| **Configuración de *Presentation* y *View Sets*** | No usa *Media > Presentation*, expone desde el editor abierto o sube datos sensibles a nube pública sin control. | Crea presentación básica, pero mezcla paradas desordenadas, deja cámara *Free* sin límites o no aprovecha *View Sets* en la misma vista. | Estructura presentación ordenada en modo *Guided* con *View Sets* / *Phasing* funcionales y criterios claros de seguridad documental (*Local* vs. *Cloud*). | Diseña paquete interactivo fluido y robusto para comité mixto combinando imágenes, comparativas, *View Sets* y clip animado sin margen de error en vivo. |
| **Rigor de comparativas bloqueadas** | Varía encuadre, focal o EV arbitrariamente entre «antes» y «después», distorsionando los resultados visibles. | Mantiene encuadre similar con leves variaciones de ángulo o exposición no justificadas entre variantes nocturnas. | Bloquea exactamente coordenadas, focal y EV en variantes equivalentes (antes-después, arquitectura-MEP y día-noche documentado). | Logra pares comparativos superponibles píxel a píxel, justificando con total honestidad perceptual cualquier variación de EV entre día y noche. |
| **Composición de encuadres (Gerencia vs. MEP)** | Encuadres cortados, sin corrección vertical (*Parallelism* OFF) ni diferenciación entre estética arquitectónica y claridad técnica de cuadros/bandejas. | Corrige parcialmente perspectivas o adapta algún encuadre, pero persisten objetos que restan legibilidad en la sala técnica o pasillos. | Aplica *Parallelism*, regla de tercios en vistas para gerencia y encuadres elevados/axiales despejados en coordinación MEP. | Adapta magistralmente cada encuadre al perfil del interlocutor logrando máximo impacto arquitectónico y absoluta claridad constructiva de equipos eléctricos. |
| **Narrativa honesta, uso de IA y vínculo documental** | Sube información real confidencial a IA, reproduce sin filtrar promesas de «certificación en Twinmotion» u omite la referencia a planos y cálculos. | Anonimiza datos y genera guion comprensible, pero incluye términos imprecisos o notas de descargo ambiguas. | Anonimiza datos, corrige falsas validaciones de la IA y entrega guion claro con descargo explícito y enlace a planos PDF y cálculo oficial. | Articula narrativa ejecutiva impecable adaptada a comité mixto, libre de sesgos legales, respaldada por auditoría de IA documentada y trazabilidad total con BIM/DIALux. |

### Actividad de autoevaluación
Antes de dar por cerrada una presentación para cliente o comité, cada estudiante comprobará individualmente:
1. ¿He empaquetado la secuencia en *Media > Presentation* en modo *Guided* para evitar mover accidentalmente luces o quedar atrapado en muros durante la reunión?
2. ¿Puedo demostrar que todas mis comparativas antes-después y arquitectura vs. MEP comparten exactamente la misma cámara, focal y EV equivalente?
3. ¿He activado la corrección de paralelismo vertical (*Parallelism*) en fachadas, vestíbulos y frentes de armarios eléctricos?
4. ¿He validado que el uso de *Twinmotion Cloud* (si se contempla) cuenta con autorización expresa del cliente, o he optado por *Local Presentation* segura?
5. ¿Contienen mi guion oral y mis diapositivas de cierre una referencia explícita a que los planos PDF y cálculos oficiales son la única documentación técnica vinculante?

---

## 8. Materiales y recursos

### Guion estructurado de diapositivas (Slides 1 a 8)

- **Slide 1: Portada — Comunicar ingeniería con claridad ante comités**
  - Diferencia visual entre improvisar en el editor 3D y dirigir una reunión mediante *Twinmotion Presentation*.
  - Idea fuerza: convencer visualmente sin prometer lo que solo certifica el cálculo y el plano visado.

- **Slide 2: Arquitectura de *Media > Presentation* (*Local* vs. *Cloud*)**
  - Esquema de flujo de empaquetado: selección de imágenes, panoramas, vídeos y *Phasing/View Sets* $\rightarrow$ configuración de navegación *Guided* vs. *Free* $\rightarrow$ consideraciones de hardware y privacidad en la nube.

- **Slide 3: Comparativas honestas mediante cámaras bloqueadas y *View Sets***
  - Regla de los 3 bloqueos: Coordenadas $(X,Y,Z)$ + Distancia focal ($\text{mm}$) + EV comparable.
  - Ejemplos visuales de «antes-después», «día-noche» y «acabado vs. falso techo oculto».

- **Slide 4: Composición para Gerencia frente a Coordinación MEP**
  - Comparativa lado a lado: vista con *Parallelism* activo a $1{,}60\text{ m}$ (propiedad) vs. vista axial elevada con techo oculto y foco en bandejas/CGBT (instaladores/BIM).

- **Slide 5: Secuencia narrativa para una reunión de 15 minutos**
  - Estructura en 4 actos: Contexto $\rightarrow$ Experiencia lumínica $\rightarrow$ Viabilidad y mantenimiento MEP $\rightarrow$ Respaldo documental (PDF + DIALux + Memoria).

- **Slide 6: Guionización de comité asistida por IA bajo control ético**
  - Ejemplo real de salida problemática de IA («demuestra cumplimiento reglamentario») corregida por el técnico hacia una redacción profesional honesta.

- **Slide 7: Errores frecuentes en presentaciones de proyectos eléctricos**
  - Decálogo breve: no improvisar en editor, no cambiar focal en comparativas, no olvidar verticales, no exponer clientes en nube pública.

- **Slide 8: Caso práctico complejo deportivo y preparación de entrega final**
  - Resumen de paradas obligatorias para el comité mixto y conexión con los formatos de exportación definitiva del Tema 10.

### Ficha de trabajo (Mapa de presentación y guion de comité)
- **Documento:** `Ficha_T9_Mapa_Presentacion_Comite.md` con tabla de planificación:
  - N.º de parada en *Presentation*
  - Tipo de medio (Imagen / *View Set* / Panorama / Vídeo)
  - Audiencia principal (Gerencia / Mantenimiento / Comité mixto)
  - Parámetros bloqueados (Cámara ID, Focal $\text{mm}$, *Parallelism* ON/OFF, EV)
  - Qué elemento eléctrico/lumínico demuestra visualmente
  - Nota de orador (50–70 palabras)
  - Documento técnico de respaldo (Plano PDF / Memoria cálculo / Estudio DIALux).

### Plantilla técnica práctica (Prompt seguro para guion de comité mixto)
```text
ROL: Actúas como consultor senior en comunicación técnica de proyectos eléctricos e iluminación para comités mixtos (dirección general, mantenimiento e ingeniería revisora).
RESTRICCIONES INNEGOCIABLES:
- Todos los datos adjuntos están anonimizados.
- PROHIBIDO afirmar que Twinmotion o las imágenes certifican cumplimiento legal, eléctrico o fotométrico.
- Cada nota de orador debe tener entre 50 y 70 palabras, lenguaje claro sin argot innecesario para gerencia pero técnicamente exacto para mantenimiento.

PARADAS DE LA PRESENTACIÓN:
[Lista numerada: Parada_ID | Tipo_Vista | Audiencia | Elementos_Visibles | Comparativa_Asociada]

TAREA:
1. Para cada parada, redacta: Título ejecutivo, Nota de orador (50-70 palabras) y Qué decisión o validación visual se busca en ese punto.
2. Propón 2 preguntas difíciles típicas de gerencia o mantenimiento y sus respuestas técnicas honestas remitiendo al proyecto en PDF o cálculo oficial cuando corresponda.
3. Redacta un bloque de cierre estándar (máx. 45 palabras) diferenciando apoyo visual en Twinmotion frente a documentación contractual de ingeniería.
```

### Lecturas y recursos recomendados
- **Documentación oficial de Twinmotion (Epic Games):** secciones de *Presentations (Local & Cloud)*, *View Sets / Phasing*, *Camera Parallelism* y requisitos de sistema del visor autónomo según la versión utilizada.
- **Guías de composición fotográfica aplicada a arquitectura e interiorismo técnico:** principios de perspectiva de dos puntos, corrección de verticales y control de luminancia en comparativas.
- **Buenas prácticas de entrega BIM (ISO 19650 — conceptos generales de intercambio de información en entornos comunes de datos):** distinción entre estados de información visual informativa frente a entregables técnicos verificados y publicados.
- *Advertencia expresa:* Las funciones de *Twinmotion Cloud*, límites de archivo y compatibilidad de presentaciones locales cambian entre versiones y licencias; verifícalas antes de comprometer una entrega en remoto con un cliente y respeta siempre la política de confidencialidad aplicable.

### Glosario de términos clave

| Término | Definición |
| :--- | :--- |
| ***Twinmotion Presentation*** | Módulo para empaquetar vistas, panoramas, vídeos y fases en una experiencia interactiva limpia sin menús de edición. |
| ***Local Presentation*** | Archivo o paquete autónomo ejecutable localmente en equipo compatible para presentar proyectos sin conexión a nube externa. |
| ***Twinmotion Cloud*** | Plataforma en línea asociada a licencia para compartir presentaciones interactivas vía navegador, sujeta a autorización y confidencialidad del proyecto. |
| ***View Set* (Conjunto de vistas)** | Estado guardado de visibilidad y configuración de capas en el *Scene Graph* que permite conmutar variantes o fases en una misma cámara. |
| **Navegación *Guided* frente a *Free*** | Opciones de presentación que restringen al espectador a paradas preaprobadas (*Guided*) o permiten desplazamiento abierto por el modelo (*Free*). |
| **Paralelismo vertical (*Parallelism*)** | Ajuste de cámara virtual que mantiene rectas y paralelas las aristas verticales de muros, edificios y envolventes eléctricas. |
| **Par comparativo bloqueado** | Pareja de imágenes o estados con exactamente las mismas coordenadas y distancia focal para contrastar con honestidad dos situaciones técnicas. |
| **Guion de orador (*Speaker Notes*)** | Texto estructurado de apoyo por parada que sincroniza el discurso verbal del técnico con los elementos visuales y límites normativos del proyecto. |

---

## 9. Adaptaciones

### Sesión presencial
- **Simulación de comité en vivo:** Al cierre del taller (Fase 7), un equipo proyecta su *Local Presentation* en la pantalla principal mientras otros dos alumnos adoptan el rol de «gerente preocupado por estética y presupuesto» e «ingeniero revisor escéptico», formulando preguntas reales durante 3 minutos.
- **Comprobación rápida de alineación:** El formador proyecta las dos imágenes comparativas de un voluntario superponiéndolas en un editor o visor para verificar al instante que no se movió la cámara ni un milímetro.

### Sesión online síncrona
- **Prueba de rendimiento en videoconferencia:** Dado que compartir pantalla con una presentación 3D activa consume ancho de banda y CPU/GPU simultáneamente, el formador instruye cómo ocultar ventanas secundarias, fijar calidad de presentación adecuada en el visor durante llamadas y tener preparadas como respaldo las capturas de los pares comparativos en PDF/PNG.
- **Salas de ensayo:** Uso de salas pequeñas de 3 personas para practicar en 4 minutos el guion oral redactado con IA antes de volver a la sala plenaria.

### Sesión asíncrona
- **Demostraciones guiadas breves:** 3 cápsulas grabadas: (1) configuración de *Parallelism* y comparativas bloqueadas, (2) montaje de *Media > Presentation* con *View Sets* y modo *Guided*, y (3) cómo redactar y auditar el guion de comité con IA.
- **Entregable asíncrono alternativo:** En lugar de exponer en vivo, el alumno graba una narración de pantalla de 3 minutos (mediante OBS, Loom o grabador integrado del sistema) recorriendo su presentación en modo *Guided* mientras lee su guion auditado, acompañando el vídeo de las capturas comparativas y las notas de orador en PDF/Markdown.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Integra la calibración de lúmenes, CCT y exposición del Tema 6, la estructura limpia de capas en el *Scene Graph* del Tema 7 y las secuencias de vídeo y *Phasing* del Tema 8 para convertir archivos técnicos dispersos en un producto de comunicación estructurado. Relaciona además la visualización interactiva con los planos y láminas generados en Revit durante el Bloque 4 (Documentación).
- **Competencias técnicas que desarrolla:**
  - Empaquetado profesional de modelos interactivos con control de navegación y seguridad documental.
  - Diseño de comparativas visuales honestas y encuadres diferenciados según interlocutor técnico o directivo.
  - Comunicación ejecutiva rigurosa asistida por IA sin invadir atribuciones ni falsear certificaciones.
- **Ubicación en la secuencia del programa (6 bloques / 50 temas):**
  - **Tema anterior (Bloque 5 · Tema 8 — Creación de recorridos virtuales y animaciones):** Generó los clips y secuencias temporales MEP que aquí se integran como piezas dentro de un discurso interactivo completo.
  - **Tema posterior (Bloque 5 · Tema 10 — Exportación en imágenes, vídeos y panoramas 360°):** Cierra el Bloque 5 llevando toda esta presentación y sus escenas calibradas a los entregables finales exportados (stills 4K, vídeo MP4, panoramas 360° y paquetes compartibles con marcas de agua y planos PDF adjuntos) antes de iniciar el Bloque 6 de IA aplicada.
- **Evidencia de aprendizaje:** Proyecto Twinmotion con presentación configurada en modo *Guided* (*Local Presentation*), lote de pares comparativos bloqueados (antes-después, día-noche, arquitectura-MEP) y guion de orador revisado críticamente tras consulta anonimizada a IA con vínculo explícito a documentación oficial en PDF.

---

## Siguientes pasos para el formador

1. **Verificar soporte de *View Sets* / *Phasing* y *Presentation* en la versión de aula:** Confirmar los nombres exactos de botones y limitaciones de *Twinmotion Cloud* en la versión instalada, advirtiendo al alumnado si el entorno educativo/corporativo restringe publicaciones en la nube.
2. **Preparar los ejemplos defectuosos de la Actividad 1:** Incluir un par «antes-después» claramente manipulado por ángulo o EV y un extracto de guion exagerado redactado por IA para maximizar el impacto de la activación inicial.
3. **Probar un portátil de referencia para *Local Presentation*:** Comprobar cuánto pesa la escena del caso práctico empaquetada y cuánta VRAM requiere para abrirse con fluidez, enseñando al grupo a dimensionar el entregable según el equipo receptor del cliente (y cuándo conviene enviar vídeo/imágenes del Tema 10 en lugar de un paquete interactivo pesado).
4. **Reforzar el enfoque de responsabilidad profesional:** Recordar en la simulación de comité que el mejor presentador BIM/eléctrico no es el que deslumbra con gráficos, sino el que sabe explicar exactamente dónde terminan las imágenes orientativas y dónde empiezan los planos PDF, los cálculos normativos y la firma técnica competente.
