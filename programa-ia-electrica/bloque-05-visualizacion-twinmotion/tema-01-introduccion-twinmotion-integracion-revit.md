# Tema 1. Introducción a Twinmotion y su integración con Revit

## 1. Ficha del tema

| Campo | Detalle |
| :--- | :--- |
| **Título del tema** | Tema 1. Introducción a Twinmotion y su integración con Revit |
| **Bloque y posición dentro del programa** | Bloque 5: Visualización y renderizado con Twinmotion · Tema 1 de 10 (Tema 30 de 50 del programa de 6 módulos) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Manejo operativo de Autodesk Revit MEP (navegación 3D, filtros y plantillas de vista del Bloque 3 y Bloque 4); conocimientos básicos de documentación técnica en PDF e interpretación de estudios lumínicos de DIALux |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado será capaz de preparar una vista 3D depurada en Revit MEP, configurar el complemento Datasmith / Direct Link verificando compatibilidad y capacidad de GPU, y generar un entorno inicial de visualización en Twinmotion para comunicar propuestas eléctricas y lumínicas ante perfiles no técnicos sin confundir comunicación visual con validación reglamentaria. |

---

## 2. Objetivos de aprendizaje

Al concluir esta unidad didáctica, el alumnado será capaz de:

1. **Diferenciar** con rigor profesional el alcance comunicativo de Twinmotion frente al cálculo eléctrico reglamentario, el cálculo fotométrico en DIALux y el modelado constructivo BIM en Revit MEP, evitando atribuir validez normativa a una escena fotorrealista *(Nivel de Bloom: Analizar)*
2. **Evaluar** los requisitos mínimos y recomendados de hardware (GPU, VRAM, memoria RAM, almacenamiento y soporte DirectX 12 / trazado de rayos) de una estación de trabajo para decidir entre renderizado en tiempo real y *Path Tracer* según el tamaño del modelo eléctrico *(Nivel de Bloom: Evaluar)*
3. **Instalar** y comprobar la compatibilidad del complemento Datasmith Exporter / Direct Link entre Autodesk Revit y Twinmotion, diagnosticando incidencias frecuentes de versión, licenciamiento y carga inicial *(Nivel de Bloom: Aplicar)*
4. **Configurar** una vista 3D específica de exportación en Revit MEP mediante plantillas de visualización, control de nivel de detalle, cajas de sección (*Section Box*) y depuración de categorías 2D/analíticas para optimizar el rendimiento geométrico *(Nivel de Bloom: Aplicar)*
5. **Diseñar** un protocolo básico de entrega visual para clientes no técnicos que integre vistas preliminares en Twinmotion junto con advertencias explícitas de alcance, confidencialidad de datos y necesidad de revisión por técnico competente *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Rol de Twinmotion en la comunicación de instalaciones eléctricas y frontera técnica

#### Explicación breve y clara
En proyectos eléctricos y de iluminación, la documentación que valida técnicamente la instalación —memorias de cálculo, esquemas unifilares, cuadros de cargas, planos acotados en PDF y cálculos DIALux— resulta indispensable para ingeniería, visado y obra, pero suele ser opaca para promotores, comités médicos, direcciones hoteleras o inversores no técnicos. Twinmotion ocupa el espacio de la **comunicación visual en tiempo real**: permite recorrer un cuarto de baja tensión, visualizar el impacto arquitectónico de luminarias lineales suspendidas o comprobar cómo conviven bandejas portacables vistas con el falso techo antes de ejecutar la obra. Sin embargo, un render atractivo no demuestra cumplimiento de caídas de tensión, selectividad de protecciones ni iluminancias reglamentarias.

#### Conceptos clave
- **Comunicación visual MEP:** traducción espacial, material y lumínica de sistemas eléctricos técnicos para facilitar decisiones estéticas, de mantenimiento y de coordinación con propiedad y arquitectura.
- **Separación de responsabilidades por herramienta:** asignación estricta de funciones: cálculo eléctrico normativo (criterios reglamentarios verificados), estudio fotométrico (DIALux), modelado constructivo y mediciones (Revit MEP) y narrativa visual (Twinmotion).
- **Falsa sensación de validación (*Pretty Render Bias*):** sesgo cognitivo por el cual un cliente o técnico asume que una instalación «funciona y cumple» simplemente porque aparece ordenada, limpia e iluminada en un vídeo o imagen 3D.
- **Alcance no habilitante:** principio ético y profesional según el cual ni el manejo de software de visualización ni la asistencia de herramientas de IA otorgan por sí mismos habilitación legal para firmar dictámenes o proyectos eléctricos oficiales.

#### Definiciones necesarias
- **Renderizado en tiempo real (*Real-Time Rendering*):** generación continua de imágenes 3D a alta tasa de fotogramas por segundo (FPS) mediante GPU, permitiendo navegar interactivamente por el modelo eléctrico sin esperar horas por cada encuadre.
- **Trazabilidad documental:** vínculo explícito entre una imagen o recorrido generado en Twinmotion y la revisión exacta del modelo Revit MEP y memoria técnica de la que procede, dejando constancia de qué muestra y qué no certifica.

#### Ejemplo práctico realista
En la reforma eléctrica de una clínica dental de 420 m² en Valencia, el promotor duda si aprobar un sobrecoste de 4.800 € por sustituir luminarias empotradas estándar (`40 W`, `4.000 lm`) por perfilería lineal suspendida negra en recepción y salas de espera. Los planos en PDF del Bloque 4 muestran cotas de montaje a `2,65 m` sobre pavimento terminado y circuitos de alumbrado `AL-01` y `AL-02`, pero el cliente no percibe el resultado espacial. El equipo proyectista genera en 45 minutos una comparativa visual en Twinmotion entre ambas opciones y adjunta al pie de la lámina una nota obligatoria: *«Simulación visual orientativa de integración arquitectónica. Los niveles de iluminancia media ($E_m = 500\text{ lx}$ en área clínica / $200\text{ lx}$ en espera) y la verificación eléctrica de circuitos deben contrastarse en la memoria fotométrica DIALux y el proyecto eléctrico vigente (p. ej., REBT en España o reglamento local aplicable según país y edición vigente), suscrito por técnico competente»*.

#### Errores frecuentes
- Presentar imágenes de Twinmotion a la propiedad como «prueba» de que el alumbrado de emergencia o de trabajo cumple los lux exigidos por normativa sin haber ejecutado el cálculo fotométrico independiente.
- Exportar el proyecto completo a Twinmotion antes de resolver interferencias graves o tramos incompletos en Revit MEP, generando expectativas constructivas falsas ante el cliente.
- Subir planos, memorias con datos personales de clientes o presupuestos confidenciales a asistentes de IA externos (ChatGPT o Claude) para redactar la memoria comercial de la presentación sin anonimizar previamente ni contar con autorización expresa.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué aporta Twinmotion que no resuelven ni los planos PDF de Revit MEP ni las tablas numéricas de DIALux frente a un cliente no técnico?
2. ¿Por qué un modelo 3D visualmente completo en Twinmotion jamás sustituye al cálculo eléctrico reglamentario ni al estudio fotométrico?
3. ¿Qué información mínima debe figurar en el cajetín o pie de página de cualquier imagen exportada para delimitar su validez técnica?

---

### 3.2. Requisitos de hardware, GPU y motores de renderizado en proyectos MEP

#### Explicación breve y clara
A diferencia del CAD 2D o del cálculo tabular, Twinmotion se apoya en un motor gráfico derivado de Unreal Engine que exige potencia sostenida de tarjeta gráfica dedicada (GPU) y memoria de vídeo (VRAM). Un modelo de Revit MEP con miles de codos de tubo *conduit*, rejillas de bandeja modeladas varilla a varilla y familias de cuadros descargadas de fabricantes puede superar con facilidad los 15 o 25 millones de polígonos. Si la GPU carece de VRAM suficiente o no soporta trazado de rayos por hardware (DirectX 12), el sistema sufrirá caídas drásticas de fotogramas, cierres inesperados al activar iluminación avanzada o imposibilidad de emplear el motor *Path Tracer*.

#### Conceptos clave
- **VRAM (Memoria de Vídeo):** memoria integrada en la tarjeta gráfica dedicada donde residen geometrías, sombras y texturas PBR activas; si se satura, el rendimiento colapsa al volcar datos hacia la RAM del sistema.
- **Rasterizado en tiempo real / Lumen vs. *Path Tracer*:** el modo estándar / Lumen prioriza interactividad inmediata mediante aproximaciones en tiempo real, mientras que *Path Tracer* calcula rebotes físicos de luz con mayor precisión visual a costa de exigir GPU compatible con Ray Tracing y tiempos de cálculo por fotograma superiores.
- **Complejidad poligonal (*Polycount*) en MEP:** impacto acumulado de curvas de tubería, tornillería en soportes y familias de fabricantes con detalle mecánico excesivo (LOD 400 innecesario para visualización).
- **Gestión térmica y energética en portátiles:** fenómeno de *thermal throttling* por el cual un portátil técnico sin ventilación o alimentación conectada reduce drásticamente la frecuencia de GPU durante exportaciones de vídeo.

#### Definiciones necesarias
- **FPS (*Frames Per Second*):** número de imágenes por segundo que la GPU es capaz de calcular y mostrar en pantalla; en navegación fluida para revisión con cliente conviene mantener al menos 24-30 FPS en el visor de trabajo.
- **DirectX 12 / DXR (*DirectX Raytracing*):** interfaz gráfica de Windows necesaria en versiones actuales de Twinmotion para habilitar funciones avanzadas como Lumen y *Path Tracer* sobre GPUs compatibles (conviene verificar siempre los requisitos exactos de la versión instalada en la documentación oficial de Epic Games).

#### Ejemplo práctico realista
Una oficina técnica dispone de dos equipos para visualizar una nave logística con 180 luminarias industriales campana, 420 m de bandeja escalera y 3 salas técnicas:
- **Equipo A (portátil de oficina estándar):** CPU i7, 16 GB RAM, GPU integrada sin VRAM dedicada. Al cargar el archivo vinculado de `11,4 millones de triángulos` y texturas `2K`, el visor cae a `3-4 FPS` y bloquea *Path Tracer* al no detectar hardware DXR ni VRAM mínima suficiente.
- **Equipo B (estación técnica BIM/Visualización):** CPU 12 núcleos, 64 GB RAM, SSD NVMe, GPU dedicada con `12 GB VRAM` y soporte DXR. En calidad media de visor trabaja a `42 FPS`, y al depurar en Revit la geometría de tornillería de las bandejas (bajando de `11,4 M` a `3,8 M` de triángulos) alcanza `60 FPS` estables y renderiza láminas `3840 × 2160 px` en pocos segundos.

#### Errores frecuentes
- Comprar o asignar licencias de Twinmotion sobre equipos con gráfica integrada asumiendo que, si Revit 3D abre el plano en modo alámbrico o sombreado básico, Twinmotion funcionará igual de fluido.
- Mantener la calidad del visor de trabajo en *Ultra* o con *Path Tracer* activado de forma permanente mientras se colocan objetos o se navega con el cliente, provocando bloqueos innecesarios.
- Descuidar la limpieza de espacio en SSD o trabajar con archivos vinculados sobre carpetas de red lentas o sincronizaciones en la nube bloqueadas.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué diferencia práctica existe entre la RAM del sistema y la VRAM de la GPU al abrir un modelo eléctrico complejo en Twinmotion?
2. ¿Por qué conviene verificar en la documentación oficial de la versión concreta de Twinmotion si la GPU del equipo admite *Lumen* o *Path Tracer*?
3. ¿Qué impacto tiene reducir la densidad poligonal de familias de luminarias o bandejas antes de exportar frente a intentar compensarlo subiendo la potencia del equipo?

---

### 3.3. Instalación de Datasmith Exporter / Direct Link y compatibilidad Revit–Twinmotion

#### Explicación breve y clara
El puente oficial entre Autodesk Revit y Twinmotion se apoya en la tecnología **Datasmith** (mediante el complemento *Datasmith Exporter for Revit* o la integración incorporada de *Twinmotion for Revit* en las versiones de Autodesk que la incluyen según acuerdo vigente de licencia). Este conector ofrece dos mecanismos complementarios: la exportación a archivo estático `.udatasmith` (útil para archivar entregas cerradas o enviar a un equipo externo de renderizado) y la conexión viva **Direct Link** (para sincronizar cambios entre ambas aplicaciones en la misma estación). La primera regla profesional antes de instalar nada en producción es verificar la matriz exacta de compatibilidad entre tu versión de Revit (`2023`, `2024`, `2025`...), la versión del plugin Datasmith y la edición de Twinmotion instalada.

#### Conceptos clave
- **Datasmith Exporter Plugin:** complemento que añade una cinta dedicada en Revit para convertir geometría BIM, materiales básicos, cámaras y jerarquía de familias a un formato interpretable por Twinmotion / Unreal Engine.
- **Archivo `.udatasmith` vs. *Direct Link*:** el archivo `.udatasmith` genera una carpeta de activos (`Assets`) + descriptor XML estático transportable entre ordenadores; el *Direct Link* mantiene un enlace en caché local para actualizaciones iterativas rápidas.
- **Matriz de compatibilidad de versiones:** correspondencia obligatoria entre el año de compilación de Revit, el instalador específico del plugin Datasmith y la versión de Twinmotion; mezclar versiones desfasadas produce errores de lectura o pérdida de elementos.
- **Integración nativa según licencia:** algunas versiones recientes de Revit incorporan acceso directo a *Twinmotion for Revit* dentro de la pestaña *Vista (View)*; su disponibilidad, límites de exportación de vídeo/resolución y términos comerciales dependen de la suscripción vigente y deben comprobarse antes de planificar un entregable.

#### Definiciones necesarias
- **Caché de *Direct Link*:** directorio temporal local donde Datasmith almacena los paquetes geométricos y de textura intercambiados entre el software origen (Revit) y destino (Twinmotion) cuando ambos operan en el mismo equipo.
- **Unidad de escena y origen de proyecto:** relación métrica (`1 unidad = 1 metro` en Twinmotion frente a milímetros, centímetros o metros en Revit) y punto de referencia espacial desde el que se posiciona el modelo importado.

#### Ejemplo práctico realista
Un proyectista instala Twinmotion `2024.1` en un estudio que trabaja en Revit `2023` y Revit `2025`, pero reutiliza un instalador antiguo de Datasmith descargado dos años atrás. Al intentar vincular la vista 3D del edificio terciario, Twinmotion devuelve un error de esquema incompatible o muestra luminarias sin materiales. Tras comprobar la página oficial de descargas de Datasmith para Twinmotion, desinstala el plugin antiguo con Revit cerrado, instala la compilación correspondiente a su versión exacta de Twinmotion y valida que el botón *Synchronize* de la pestaña *Datasmith* aparece activo y genera la vista previa en menos de 20 segundos.

#### Errores frecuentes
- Instalar el plugin Datasmith con Autodesk Revit abierto, provocando que el complemento no se registre correctamente en la carpeta de *Add-ins* o genere fallos al iniciar.
- Confundir la exportación clásica FBX/OBJ (que destruye jerarquías y rompe actualizaciones incrementales) con el flujo Datasmith / Direct Link.
- Asumir que un archivo `.tm` que apunta por *Direct Link* a una ruta local `C:\Users\...` abrirá actualizado en el ordenador de otro compañero sin volver a empaquetar activos (*Resource Collector*) o exportar `.udatasmith`.

#### Preguntas que el alumnado debería poder responder
1. ¿En qué situaciones profesionales conviene exportar un archivo estático `.udatasmith` en lugar de depender exclusivamente de *Direct Link*?
2. ¿Qué comprobación previa es obligatoria antes de instalar o actualizar Datasmith en un entorno con varias versiones de Revit?
3. ¿Qué diferencia existe entre abrir *Twinmotion for Revit* (según versión/licencia de Autodesk) y utilizar el complemento independiente Datasmith Exporter?

---

### 3.4. Limpieza y preparación de la vista 3D de exportación en Revit MEP

#### Explicación breve y clara
Datasmith exporta **exactamente lo que está visible en la vista 3D activa de Revit** en el momento de pulsar *Export* o *Synchronize*. Si exportas desde la vista `{3D}` de trabajo diario del ingeniero eléctrico, arrastrarás líneas de anotación, cajas de referencia, rejillas de cálculo, niveles en 3D, enlaces ocultos no depurados o miles de metros de tubería enterrada bajo solera que nadie verá en el render pero que multiplican por tres el consumo de VRAM. La disciplina BIM exige crear una vista dedicada exclusiva —por ejemplo `3D_EXP_Twinmotion_Alumbrado`— con una plantilla de visualización específica, nivel de detalle (*Detail Level*) calibrado y *Section Box* ajustada.

#### Conceptos clave
- **Vista 3D dedicada de exportación:** vista independiente bloqueada para no usarse como vista de modelado diario, garantizando repetibilidad cada vez que se re-sincroniza el modelo.
- **Control de *Visibility/Graphics* (VV) para visualización:** desactivación sistemática de categorías de anotación, modelos analíticos, ejes/niveles 3D, masas conceptuales y vínculos CAD 2D importados que ensucian la escena en Twinmotion.
- **Calibración de *Detail Level* (Alto vs. Medio vs. Bajo):** en Revit MEP, los conductos y tubos en nivel *Bajo/Medio* se dibujan como líneas de eje (que pueden desaparecer o verse mal en render), mientras que en nivel *Alto* generan sólidos 3D reales; conviene aplicar *Alto* a equipos, luminarias y bandejas vistas, y ocultar tramos empotrados o en cámara inaccesible.
- **Uso estratégico de *Section Box* (Caja de sección):** recorte tridimensional limpio de plantas enteras o cuartos eléctricos aislados (p. ej. sala de Centro de Transformación y Cuadro General de Baja Tensión) para acelerar presentaciones parciales de alto detalle.

#### Definiciones necesarias
- **Plantilla de vista de exportación (*View Template*):** configuración guardada de visibilidad, disciplina, nivel de detalle y filtros de sistema en Revit que permite replicar exactamente la misma limpieza 3D en diferentes fases o edificios del proyecto.
- **Geometría fantasma o pesada (*Over-modeled Families*):** familias paramétricas descargadas de portales externos que incluyen roscas, bornes internos ocultos, logotipos extruidos o curvaturas hipersegmentadas que disparan la carga gráfica sin aportar valor visual exterior.

#### Ejemplo práctico realista
En un modelo Revit MEP de un edificio de oficinas de `3.200 m²` (`145 MB`), la vista `{3D}` general contiene `4.200` tramos de tubo PVC empotrado en tabiquería, `8` planos DWG vinculados con capas de mobiliario y `320` familias de mecanismos con caja universal interior modelada en 3D. Al duplicar la vista como `3D_TM_Vestibulo_N1`, aplicar un filtro que oculta los tubos empotrados dentro de tabiques, desactivar los `DWG` importados y activar una *Section Box* centrada en el vestíbulo y cuarto técnico de planta baja (`680 m²`), el recuento geométrico exportado a Twinmotion cae de `9,6 millones` a `1,9 millones` de polígonos, reduciendo el tiempo de sincronización de `3 min 40 s` a `22 segundos`.

#### Errores frecuentes
- Sincronizar desde una vista en Revit con *Detail Level = Medium/Coarse*, provocando que los conductos y tubos eléctricos exportados desaparezcan o aparezcan como geometrías incompletas en Twinmotion.
- Olvidar apagar los planos CAD 2D importados o vinculados en la vista 3D, generando tramas de líneas negras sobre el suelo de la escena en Twinmotion.
- Aplicar la visibilidad temporal (*Temporary Hide/Isolate* — las gafas en Revit) antes de pulsar *Direct Link* esperando que oculte objetos de forma permanente: Datasmith respeta la visibilidad real de la vista, no las ocultaciones temporales no aplicadas.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué las tuberías y conductos eléctricos de Revit MEP deben estar en *Detail Level = Fine (Alto)* en la vista de exportación a Twinmotion?
2. ¿Qué ocurre si exportas a Twinmotion habiendo ocultado objetos únicamente mediante *Temporary Hide/Isolate* en Revit?
3. ¿Qué criterios técnicos permiten decidir qué elementos eléctricos deben permanecer visibles y cuáles deben filtrarse fuera de la vista `{3D - Twinmotion}`?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** combina diagnóstico inicial de entregables visuales frente a documentación técnica, microcápsulas demostrativas en vivo sobre Revit + Datasmith + Twinmotion, laboratorio guiado de depuración de vista 3D y análisis de un caso real de clínica médica.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
|---|---:|---|---|
| **1. Apertura, diagnóstico y activación** | 25 min | Presenta los objetivos del Bloque 5 y su enlace con el Bloque 4; lanza la evaluación diagnóstica inicial y dirige la **Actividad 1** contrastando un plano PDF, un informe DIALux y un render en Twinmotion. | Completa el diagnóstico inicial; analiza 3 piezas documentales reales/anonimizadas y clasifica qué preguntas del cliente resuelve cada herramienta y qué riesgos conlleva confundirlas. |
| **2. Microlearning técnico I (Alcance y Hardware/GPU)** | 25 min | Expone apartados 3.1 y 3.2: papel comunicativo de Twinmotion, separación estricta frente a validación normativa y evaluación práctica de VRAM, DirectX 12, Lumen vs. *Path Tracer* y peso poligonal MEP. | Audita las especificaciones de su propio equipo (o ficha de estación propuesta) frente a un escenario MEP concreto e identifica posibles cuellos de botella de VRAM o CPU. |
| **3. Microlearning técnico II (Datasmith y preparación de vista 3D)** | 30 min | Demuestra en directo la verificación de compatibilidad de Datasmith Exporter / Direct Link, configuración de la vista `3D_TM`, control de *Detail Level = Fine*, eliminación de DWG 2D y aplicación de *Section Box*. | Sigue la demostración registrando en su ficha de trabajo la lista de comprobación paso a paso para evitar exportaciones fallidas o modelos incompletos. |
| **4. Actividad práctica de aplicación técnica** | 45 min | Dinamiza la **Actividad 2** sobre el modelo Revit MEP de práctica; resuelve incidencias de instalación/plugin, revisa filtros de vista y comprueba que nadie use *Temporary Hide* ni exporte tubos ocultos innecesarios. | Prepara la vista 3D depurada en Revit MEP, verifica compatibilidad y unidades, ejecuta el primer enlace hacia Twinmotion (o carga paquete `.udatasmith` preparado) y mide el ahorro geométrico conseguido. |
| **5. Análisis de caso práctico** | 45 min | Presenta el caso **Clínica Oftalmológica Mirasierra (Madrid)** con los datos de hardware, tiempos y errores de comunicación; organiza equipos de 3-4 personas y supervisa el diagnóstico técnico. | En equipos, evalúa los fallos técnicos y comunicativos del estudio MEP del caso, propone el reajuste de vista 3D/hardware y redacta la nota de alcance visual vs. validación normativa. |
| **6. Puesta en común y debate crítico** | 25 min | Modera la exposición de 2-3 equipos, desafía criterios ambiguos sobre qué puede prometerse al cliente en una reunión con Twinmotion y sintetiza las reglas de oro del bloque. | Defiende su diagnóstico del caso y contrasta criterios con el resto de equipos usando la rúbrica de calidad técnica. |
| **7. Actividad de transferencia y cierre evaluativo** | 45 min | Guía la **Actividad 3** (protocolo personal de puesta a punto y plantilla de entrega visual del proyecto real, 25 min); aplica la prueba sumativa breve, la autoevaluación y enlaza con el **Tema 2 (Direct Link)** (20 min). | Elabora su protocolo de preparación de escena y entrega visual (apoyándose opcionalmente en IA con datos anonimizados y revisión técnica propia), completa la evaluación final y registra reflexiones. |
| **TOTAL** | **240 min** | — | — |

*(Nota de organización: en sesiones presenciales u online síncronas continuas, se recomienda intercalar una pausa activa de 10 minutos tras la Fase 4 ajustando 5 minutos en la Fase 5 y 5 minutos en la Fase 7 o añadiendo 10 minutos al horario bruto para mantener íntegros los 240 minutos lectivos netos).*

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «¿Qué valida el plano y qué comunica el render?»

- **Nombre:** Diagnóstico comparativo de entregables eléctricos, lumínicos y visuales
- **Objetivo:** Diferenciar con claridad las capacidades y límites del plano técnico en PDF (Revit), la memoria lumínica (DIALux) y la escena en Twinmotion antes de iniciar el manejo de la herramienta.
- **Instrucciones para el alumnado:**
  1. Observad las 3 láminas proyectadas de un mismo proyecto de restaurante y cocina industrial (anonymized): (A) plano PDF de alumbrado y fuerza de Revit MEP, (B) hoja resumen de cálculo DIALux con valores $E_m$, $U_0$ y $UGR$, y (C) render fotorrealista de Twinmotion del comedor con luminarias colgantes y carril visto.
  2. Responded en parejas durante 8 minutos a cuatro preguntas ante la propiedad: (1) *«¿Quedará bien la lámpara decorativa sobre la barra con el conducto visto detrás?»*; (2) *«¿Cumplimos 500 lx en zona de preparación de cocina según normativa aplicable?»*; (3) *«¿Qué sección de cable y diferencial protege este circuito?»*; (4) *«¿Qué herramienta usarías para responder con rigor a cada pregunta?»*.
  3. Compartid en plenario un riesgo grave que ocurriría si un proyectista respondiera a la pregunta (2) o (3) enseñando únicamente la lámina (C).
- **Materiales necesarios:** Diapositiva comparativa con 3 capturas anonimizadas (PDF MEP, informe DIALux, render Twinmotion) y tabla de respuestas en la ficha de trabajo.
- **Tiempo estimado:** 15 minutos (integrado en la Fase 1).
- **Rol del formador:** Moderar las intervenciones, evitar debates teóricos largos y fijar en pizarra la matriz «Herramienta ↔ Qué demuestra ↔ Qué NO demuestra».
- **Producto o entregable esperado:** Cuadro comparativo de fronteras técnicas cumplimentado en pareja.
- **Criterios de éxito:** El 100 % del alumnado asigna correctamente el alcance de cada herramienta y formula al menos dos razones por las que un render atractivo no constituye prueba reglamentaria.

---

### Actividad 2 (Aplicación técnica): «Operación bisturí: vista `{3D - Twinmotion}` y primer enlace Datasmith»

- **Nombre:** Depuración de vista 3D MEP en Revit, verificación de compatibilidad y primera sincronización con Twinmotion
- **Objetivo:** Aplicar un flujo reproducible de preparación de vista en Revit MEP y comprobar la correcta transferencia geométrica hacia Twinmotion manteniendo el rendimiento de la GPU.
- **Instrucciones para el alumnado:**
  1. Abrid el archivo de práctica `ELE_Edificio_Terciario_Base.rvt` (o el paquete suministrado) y verificad la versión instalada de Revit y del complemento **Datasmith Exporter / Twinmotion for Revit**.
  2. Duplicad la vista `{3D}` con el nombre `3D_EXP_Twinmotion_N01` y asignadle una nueva configuración limpia: (a) Nivel de detalle **Alto (*Fine*)** para que tubos y bandejas se exporten en sólido 3D; (b) desactivación de anotaciones, niveles/rejillas 3D, modelo analítico y enlaces DWG 2D; (c) filtro que oculte canalizaciones empotradas dentro de tabiques no visibles; (d) *Section Box* ajustada a la zona de recepción y sala técnica (`~350 m²`).
  3. Ejecutad **Synchronize** con Direct Link (o exportad `.udatasmith` e importadlo en una escena nueva de Twinmotion si trabajáis en equipo remoto/limitado), revisad el menú de estadísticas de escena en Twinmotion (FPS y tamaño) y comprobad que ninguna bandeja ni luminaria ha desaparecido por error de nivel de detalle.
  4. Documentad en una breve tabla comparativa los FPS / tiempos antes y después de depurar la vista.
- **Materiales necesarios:** Modelo de práctica `.rvt` (y respaldo `.udatasmith` para equipos sin licencia Revit local o GPU limitada), Revit + Datasmith + Twinmotion instalados, ficha de registro técnico.
- **Tiempo estimado:** 45 minutos (Fase 4).
- **Rol del formador:** Supervisar puestos/pantallas compartidas, detectar rápidamente fallos típicos (uso de *Temporary Hide* en vez de filtro permanente, *Detail Level* en *Medium*, conflictos de versión Datasmith) y orientar en tiempo real.
- **Producto o entregable esperado:** Archivo de escena `.tm` inicial con la zona depurada cargada correctamente + captura de la configuración de vista `3D_EXP_Twinmotion_N01` y tabla comparativa de rendimiento.
- **Criterios de éxito:** Todas las luminarias, bandejas vistas y cuadros principales aparecen como sólidos 3D completos, no existen líneas CAD 2D ni niveles flotantes en Twinmotion, y la vista opera sin bloqueos en el hardware disponible.

---

### Actividad 3 (Transferencia a proyecto real): «Protocolo de puesta a punto y descargo técnico para presentaciones al cliente»

- **Nombre:** Checklist de exportación Revit–Twinmotion y cláusula de alcance profesional
- **Objetivo:** Transferir los criterios de hardware, compatibilidad, limpieza BIM y comunicación responsable al entorno laboral o proyecto integrador de cada participante.
- **Instrucciones para el alumnado:**
  1. Tomando como referencia vuestro proyecto real o el proyecto integrador del curso, completad la **Plantilla técnica de preparación Revit–Twinmotion** (Sección 8): inventariad GPU/VRAM del equipo disponible, versión exacta de Revit/Datasmith/Twinmotion, criterios de la vista de exportación y reglas de ocultación de elementos no visibles.
  2. Redactad una **nota técnica estándar de alcance** (entre 60 y 90 palabras) para insertar en todas las presentaciones visuales al cliente, dejando explícito qué aspectos estéticos/espaciales valida el render y qué comprobaciones remiten al proyecto eléctrico y memoria DIALux conforme a la normativa del país aplicable.
  3. *(Opcional asistido con IA)*: Si empleáis ChatGPT o Claude para pulir la claridad comunicativa de la nota hacia un cliente no técnico, utilizad exclusivamente datos ficticios o anonimizados (sin nombres reales de cliente, dirección exacta ni archivos del proyecto) y revisad manualmente que el borrador generado no prometa cumplimiento normativo automático ni habilitación legal impropia.
- **Materiales necesarios:** Plantilla técnica replicable (Sección 8), acceso opcional a asistente de IA bajo criterios de anonimización.
- **Tiempo estimado:** 25 minutos (integrado en la Fase 7).
- **Rol del formador:** Revisar muestras aleatorias, corregir redacciones que suenen a «garantía de cumplimiento» a partir del render y comprobar que ningún alumno pegue datos reales confidenciales en herramientas externas.
- **Producto o entregable esperado:** Checklist personalizado de estación/vista 3D + nota estándar revisada y validada por el alumno.
- **Criterios de éxito:** El checklist cubre hardware, compatibilidad de versión, reglas de vista y respaldo `.udatasmith`; la nota distingue explícitamente comunicación visual de validación eléctrica/fotométrica y cumple las reglas de confidencialidad.

---

## 6. Caso práctico

### Caso: Clínica Oftalmológica Mirasierra (Madrid) — Un render bloqueado, un cliente confundido y una obra parada

#### Contexto empresarial
**Ingeluz BIM S.L.** es una ingeniería de instalaciones de 11 personas que colabora con un estudio de arquitectura en la reforma integral de **Clínica Oftalmológica Mirasierra** (`1.150 m²` distribuidos en recepción, 6 consultas de diagnóstico, 2 quirófanos ambulatorios, pasillo técnico visto y sala de grupo electrógeno/SAI en sótano). Para ganar la adjudicación de la fase ejecutiva ante la junta médica propietaria —integrada por cuatro médicos socios sin formación técnica eléctrica—, el responsable comercial prometió «un recorrido virtual en tiempo real con Twinmotion para aprobar la estética de luminarias, bandejas vistas y sala de cuadros antes de pedir material».

#### Situación o problema
A 48 horas de la reunión con la junta médica, el equipo técnico afronta tres incidencias simultáneas:
1. **Colapso del equipo del proyectista:** al intentar sincronizar el modelo completo de Revit (`480 MB` con vínculo de arquitectura y mobiliario quirúrgico descargado de internet) en el portátil asignado (`GPU integrada` + `16 GB RAM`), Twinmotion tarda 9 minutos en importar, cae a `2 FPS` y se cierra al intentar activar iluminación avanzada.
2. **Geometría eléctrica errónea en pantalla:** en una prueba rápida realizada en otro ordenador con un plugin Datasmith antiguo, las bandejas portacables del pasillo técnico aparecían únicamente como finas líneas flotantes, mientras que los planos DWG de arquitectura importados ensuciaban el pavimento de los quirófanos con textos y cotas 2D en negro.
3. **Expectativa contractual peligrosa:** el director comercial envió un correo previo a los médicos indicando: *«Con el modelo visual 3D podréis confirmar que la iluminación de quirófanos y consultas cumple todos los estándares médicos y que el cuarto eléctrico tiene espacio reglamentario suficiente»*. Además, un técnico junior propuso subir el presupuesto y planos completos en PDF de la clínica a una cuenta gratuita de ChatGPT para «generar automáticamente el guion técnico de la presentación».

#### Datos disponibles

| Parámetro / Elemento del caso | Situación actual registrada | Observación técnica relevante |
|---|---|---|
| **Superficie y alcance del proyecto** | `1.150 m²` (2 plantas: Clínica + Sótano SAI/CGBT) | Solo la recepción, pasillo técnico y consultas requieren visualización al cliente en esta reunión |
| **Peso del archivo Revit completo** | `480 MB` (`ARQ + MEP + Mobiliario quirúrgico LOD 400`) | El mobiliario quirúrgico importado suma `8,9 millones` de triángulos; la parte eléctrica útil suma `2,1 millones` |
| **Estación 1 (Portátil del delineante)** | CPU 8 núcleos · `16 GB RAM` · GPU integrada (`0 GB VRAM dedicada`) | No cumple requisitos recomendados de VRAM ni soporte DXR para *Path Tracer* |
| **Estación 2 (PC de cálculo de oficina)** | CPU 12 núcleos · `64 GB RAM` · GPU dedicada `12 GB VRAM` (DX12/DXR) | Disponible en estudio, pero tiene instalado Revit `2024` con Datasmith compilado para Twinmotion `2022.2` mientras Twinmotion instalado es `2024.1` |
| **Configuración actual de vista `{3D}` en Revit** | `Detail Level: Medium` · Categorías de anotación y DWG activas · Sin *Section Box* | Explica desaparición volumétrica de tubos/bandejas y aparición de líneas DWG en suelo |
| **Documentación técnica paralela** | Memoria DIALux en curso (`500 lx` / `1.000 lx` según zona, a verificar normativa sanitaria aplicable) y unifilares aún en revisión | No está finalizada ni visada todavía para los quirófanos |

#### Preguntas de análisis
1. ¿Qué tres causas técnicas concretas explican tanto el bloqueo de la Estación 1 como la pérdida volumétrica de bandejas y aparición de líneas 2D en el modelo sincronizado?
2. ¿Por qué resulta inaceptable a nivel profesional y de responsabilidad técnica el correo enviado por el director comercial a la junta médica?
3. ¿Qué riesgos de confidencialidad y rigor técnico conlleva la propuesta del técnico junior de subir planos y presupuesto completo de la clínica a una IA externa?
4. Aprovechando únicamente los recursos reales de la oficina (Estación 2, Revit `2024`, Twinmotion `2024.1`), ¿qué plan de rescate en menos de 4 horas permitiría llegar a la reunión con una entrega visual fluida, veraz y segura?

#### Tarea a realizar
Actuando en equipos de 3-4 técnicos responsables de BIM y Visualización de **Ingeluz BIM S.L.**, elaborad un **Informe Técnico de Rescate y Protocolo de Reunión** (1-2 páginas) que incluya:
1. **Diagnóstico estructurado** de las incidencias de hardware, versión de Datasmith y preparación de vista 3D en Revit MEP.
2. **Configuración exacta de la vista de exportación** (`Detail Level`, categorías a desactivar, filtros y uso de *Section Box* por zonas) para reducir la carga geométrica por debajo de los `3,5 millones` de triángulos sin ocultar la instalación eléctrica vista relevante.
3. **Plan de migración a la Estación 2** detallando qué debe actualizarse/verificarse antes de pulsar *Direct Link* o generar un `.udatasmith`.
4. **Comunicado rectificativo al cliente y reglas de uso de IA**, redactando una nota clara que delimite qué valida la presentación visual (estética de luminarias, integración de bandejas y percepción espacial) frente a lo que exige cálculo en DIALux y proyecto eléctrico conforme a normativa sanitaria/eléctrica vigente aplicable, y estableciendo las condiciones de anonimización si se emplea IA para redactar el guion de la reunión.

#### Posibles soluciones o criterios de análisis
- **Hardware y compatibilidad:** Descartar la Estación 1 para Twinmotion por ausencia de VRAM dedicada y DXR; utilizar la Estación 2 (`12 GB VRAM`), desinstalando primero el plugin antiguo de Datasmith `2022.2` con Revit cerrado e instalando la compilación compatible con Revit `2024` y Twinmotion `2024.1` (verificando siempre la matriz oficial del fabricante).
- **Depuración de vista 3D en Revit:** Crear vistas específicas (p. ej. `3D_TM_Recepcion_Pasillo` y `3D_TM_SalaSAI`) con *Detail Level = Fine* para que las bandejas y tubos se muestren en geometría 3D completa; desactivar anotaciones, niveles 3D y vínculos DWG; ocultar temporalmente o sustituir el mobiliario quirúrgico LOD 400 irrelevante en zonas que no se presenten; y recortar con *Section Box* para trabajar por ámbitos.
- **Límite técnico-legal frente a la junta médica:** Rectificar amablemente el mensaje comercial antes de la reunión aclarando que la sesión en Twinmotion tiene finalidad exclusivamente **visual y de coordinación espacial/estética**, mientras que las iluminancias de quirófano y consulta, el deslumbramiento, las protecciones de locales de uso médico y las distancias reglamentarias de mantenimiento en sala de SAI se justifican exclusivamente en la memoria DIALux y el proyecto eléctrico conforme a la normativa aplicable del país y edición vigente (p. ej., en España REBT ITC-BT-38 y UNE-EN 12464-1 como referencia ilustrativa a verificar), bajo firma de técnico competente.
- **Seguridad con IA:** Prohibir subir planos, presupuestos reales o datos identificativos de la clínica a asistentes externos sin autorización escrita; en caso de usar IA para mejorar la estructura de la presentación para perfiles médicos, emplear únicamente un esquema anonimizado sin datos sensibles y revisar manualmente el texto resultante.

#### Preguntas de reflexión final
1. ¿En qué momento del flujo BIM de un estudio conviene fijar el estándar de vista `3D_Twinmotion` para no improvisar depuraciones de emergencia antes de una entrega?
2. ¿Cómo responderíais en directo a un socio médico si durante el recorrido en Twinmotion pregunta: *«Veo mucha luz en la pantalla, ¿podemos quitar dos pantallas LED por consulta para ahorrar presupuesto?»*?

---

## 7. Evaluación

### Evaluación diagnóstica breve (5 minutos, inicio de sesión)
Cuestionario rápido individual (escala o elección múltiple en LMS o en aula):
1. ¿Qué archivo o herramienta certifica el nivel reglamentario de iluminancia media ($E_m$) y el índice $UGR$ de una sala?
   - a) Una captura de Twinmotion con exposición ajustada.
   - b) El estudio fotométrico en DIALux contrastado con la normativa aplicable vigente. *(Correcta)*
   - c) El plano de distribución de luminarias en PDF sin tabla de resultados.
2. En Revit MEP, ¿qué nivel de detalle (*Detail Level*) exige normalmente una vista 3D para que los tubos (*conduit*) y bandejas exporten geometría sólida y no líneas de eje?
   - a) Bajo (*Coarse*).
   - b) Medio (*Medium*).
   - c) Alto (*Fine*). *(Correcta)*
3. Marca tu nivel actual de experiencia (1 a 5) con motores de visualización 3D en tiempo real y con verificación de especificaciones GPU/VRAM.

### Evaluación formativa durante la sesión
- Supervisión directa del formador durante las Actividades 1 y 2 mediante lista de cotejo observable:
  - Distingue sin ambigüedad cálculo normativo eléctrico, cálculo DIALux, modelo Revit MEP y render Twinmotion.
  - Comprueba matriz de compatibilidad entre Revit, Datasmith y Twinmotion antes de operar.
  - Configura vista 3D dedicada en Revit con *Detail Level = Fine*, categorías 2D desactivadas y *Section Box* coherente.
  - Evita introducir datos reales confidenciales al formular consultas o notas asistidas por IA.
- Retroalimentación correctiva inmediata durante el análisis del caso **Clínica Oftalmológica Mirasierra**.

### Evaluación sumativa al final
Dos evidencias evaluables combinadas:
1. **Evidencia técnica práctica (60 %):** Escena inicial en Twinmotion y configuración documentada de la vista `3D_EXP_Twinmotion` de la Actividad 2 + Informe de Rescate del Caso Práctico (evaluados según rúbrica).
2. **Evidencia de transferencia y control (40 %):** Plantilla individual cumplimentada (Actividad 3) con análisis de estación de trabajo, flujo de exportación y cláusula de alcance técnico + test rápido de 4 preguntas conceptuales de cierre.

### Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
| :--- | :--- | :--- | :--- | :--- |
| **Frontera técnica y rigor normativo** | Atribuye validez de cálculo eléctrico o fotométrico al render de Twinmotion u omite aclaraciones de alcance. | Menciona diferencias entre herramientas, pero deja ambigüedades ante preguntas sobre cumplimiento reglamentario. | Diferencia con claridad comunicación visual (Twinmotion), cálculo lumínico (DIALux), BIM (Revit) y cálculo eléctrico, indicando verificación normativa vigente por técnico competente. | Integra cláusulas precisas de alcance visual, delimita responsabilidades técnicas y prevé objeciones típicas de clientes no técnicos sin perder rigor ni habilitación. |
| **Evaluación de hardware e interoperabilidad Datasmith** | Ignora requisitos de GPU/VRAM o intenta enlazar versiones incompatibles sin diagnóstico. | Identifica especificaciones básicas de hardware o plugin, pero no relaciona VRAM/polígonos ni distingue `.udatasmith` de *Direct Link*. | Evalúa correctamente GPU, VRAM y compatibilidad Revit–Datasmith–Twinmotion; selecciona adecuadamente *Direct Link* frente a `.udatasmith`. | Diagnostica cuellos de botella de VRAM/DXR, optimiza carga poligonal por zonas y establece respaldo portátil con `.udatasmith` / gestión de versiones. |
| **Preparación de la vista 3D en Revit MEP** | Exporta la vista `{3D}` general con líneas 2D, anotaciones y detalle medio/bajo que oculta tuberías. | Crea una vista nueva, pero mantiene DWG, niveles 3D o usa ocultación temporal (*Temporary Hide*) en lugar de filtros. | Crea una vista dedicada con *Detail Level = Fine*, categorías 2D desactivadas, filtros coherentes y *Section Box* ajustada. | Estandariza una *View Template* replicable de exportación MEP, depura familias pesadas redundantes y documenta la reducción poligonal obtenida. |
| **Transferencia profesional y uso responsable de IA** | Copia textos genéricos sin adaptar al proyecto o introduce planos/datos confidenciales en IA externa sin control. | Redacta un checklist incompleto o usa IA sin verificar si el borrador exagera promesas técnicas. | Elabora checklist técnico aplicable a su entorno, protege datos confidenciales y verifica manualmente cualquier apoyo de IA. | Presenta un protocolo operativo completo listo para estudio de ingeniería (hardware, vista, entrega, confidencialidad y revisión humana trazable). |

### Actividad de autoevaluación (5 minutos al cierre)
Cada participante responde por escrito en su cuaderno o campus virtual:
1. *¿Qué mito sobre renderizado 3D o interoperabilidad entre Revit y Twinmotion he descartado hoy con argumentos técnicos?*
2. *Si mañana tuviera que preparar una vista 3D de un cuarto eléctrico para exportar a Twinmotion, ¿cuáles son los 3 ajustes obligatorios en Revit que revisaré antes de sincronizar?*
3. *Valora del 1 al 5 tu seguridad para justificar ante un cliente por qué un render espectacular no sustituye a la memoria de DIALux ni al proyecto eléctrico firmado.*

---

## 8. Materiales y recursos

### Guion estructurado de diapositivas (Slide 1 a Slide 8)

| Diapositiva | Título | Contenido clave y mensaje visual |
|---|---|---|
| **Slide 1** | Portada: Twinmotion en el flujo BIM eléctrico | Título del tema, ubicación en el Bloque 5 (1/10), puente desde el Bloque 4 (Documentación PDF), objetivos Bloom y agenda de 240 minutos. |
| **Slide 2** | El triángulo de herramientas: Cálculo vs. BIM vs. Visualización | Diagrama comparativo claro: Normativa/Cálculo eléctrico vs. DIALux (lux/$UGR$) vs. Revit MEP (geometría/planos) vs. Twinmotion (comunicación visual). Mensaje central: «Bonito ≠ Reglamentario». |
| **Slide 3** | Arquitectura de hardware, GPU y motores gráficos | Cuadro comparativo *Tiempo real / Lumen* vs. *Path Tracer*: papel crítico de la VRAM, soporte DX12/DXR, RAM y efecto del *polycount* de familias MEP. |
| **Slide 4** | Puente oficial: Datasmith Exporter y *Direct Link* | Esquema de flujo Revit → Datasmith (`Direct Link` local vs. archivo `.udatasmith` portátil), integración según versión/licencia y regla de compatibilidad de compilaciones. |
| **Slide 5** | Anatomía de una vista `3D_TM` limpia en Revit MEP | Captura comparativa «Antes vs. Después»: *Detail Level = Fine*, desactivación de DWG/anotaciones, filtros de tubos empotrados y recorte con *Section Box*. |
| **Slide 6** | Caso práctico: Clínica Oftalmológica Mirasierra | Datos clave de hardware (`0 GB` vs. `12 GB VRAM`), pesos poligonales (`480 MB`), incidencia comercial de promesas reglamentarias y reto de rescate en equipos. |
| **Slide 7** | Protocolo de entrega segura y uso ético de IA | Reglas de trazabilidad visual, nota de descargo de responsabilidad profesional, anonimización de datos y verificación humana ante borradores asistidos por ChatGPT/Claude. |
| **Slide 8** | Cierre, checklist y enlace con el Tema 2 | Síntesis de 5 comprobaciones previas a exportar y avance hacia el **Tema 2**: actualización viva con *Direct Link*, modos de colapso (*Collapse*) y múltiples vínculos RVT. |

### Ficha de trabajo del alumnado
Documento de 2 páginas (digital o impreso) organizado en 4 bloques:
1. **Bloque A (Activación):** Matriz comparativa de alcance entre Plano PDF, DIALux y Twinmotion.
2. **Bloque B (Auditoría técnica):** Tabla de verificación de estación (CPU, RAM, GPU, VRAM, DXR, versión Revit, versión Datasmith y versión Twinmotion).
3. **Bloque C (Checklist Revit):** Lista de verificación de la vista `3D_EXP_Twinmotion` (Nivel de detalle, filtros, vínculos DWG, *Section Box* y estadísticas en Twinmotion).
4. **Bloque D (Caso y Transferencia):** Lienzo de resolución de *Clínica Oftalmológica Mirasierra* y redacción de la cláusula visual estándar.

### Plantilla técnica práctica: Protocolo de Puesta a Punto Revit–Twinmotion

```markdown
# PROTOCOLO DE PREPARACIÓN REVIT MEP -> TWINMOTION
Proyecto (código anonimizado): ___________________   Fecha: ____________   Técnico: _________________

1. AUDITORÍA DE EQUIPO Y COMPATIBILIDAD (validar en documentación oficial vigente del fabricante)
- Versión Autodesk Revit instalada: __________  | Versión Twinmotion instalada: __________
- Plugin / Conector utilizado: [ ] Datasmith Exporter (versión: ______)  [ ] Integración nativa for Revit
- GPU dedicada y VRAM: __________________ (____ GB) | Soporte DXR / Path Tracer: [ ] Sí  [ ] No
- Estrategia de enlace elegida: [ ] Direct Link (misma estación)  [ ] Exportación .udatasmith (portátil/terceros)

2. CONFIGURACIÓN DE VISTA DEDICADA EN REVIT MEP (Nombre vista: 3D_EXP_TM__________)
[ ] Vista 3D duplicada (NO usar la vista {3D} de modelado diario)
[ ] Detail Level = Fine (Alto) para sólidos 3D en bandejas, conductos y tubos vistos
[ ] Categorías de anotación, rejillas 3D, niveles y masas desactivadas en VV
[ ] Planos CAD 2D (DWG/DXF) importados o vinculados desactivados en vista de exportación
[ ] Filtros aplicados para ocultar canalizaciones empotradas o zonas fuera de alcance
[ ] Section Box ajustada al ámbito de presentación (polígonos reducidos y FPS estables)

3. NOTA OBLIGATORIA DE ALCANCE EN ENTREGABLES VISUALES (revisada por técnico competente)
"Representación visual orientativa elaborada con fines de comunicación espacial y estética sobre modelo BIM
revisión ____. Esta visualización NO constituye cálculo eléctrico ni fotométrico ni acredita cumplimiento
normativo. Las comprobaciones técnicas de potencia, protecciones, secciones e iluminancia/deslumbramiento
constan en la memoria técnica y estudio DIALux vigentes conforme al reglamento aplicable del país."
```

### Lecturas y recursos recomendados
*(Nota importante para el formador y el alumnado: las referencias técnicas, notas de versión, requisitos mínimos de GPU y disponibilidad de enlaces deben validarse directamente en los portales oficiales de Epic Games y Autodesk antes de impartir o aplicar en producción, ya que cambian entre lanzamientos anuales).*
- **Documentación oficial de Twinmotion (Epic Games):** apartados de *System Requirements*, *Datasmith Direct Link for Revit* y *Path Tracer hardware support* (verificar versión exacta utilizada en el curso).
- **Documentación oficial de Autodesk Revit:** guías de gestión de *View Templates*, *Visibility/Graphics Overrides*, *Detail Levels* en elementos MEP y uso de *Section Box* (validar edición vigente del software).
- **Materiales propios del Bloque 4 (Documentación) y Bloque 2 (DIALux) del programa:** para mantener coherencia entre vistas documentales, parámetros de luminarias y alcance de visualización.
- **Vídeos y guías complementarias:** videotutoriales oficiales de Epic Games / Twinmotion sobre instalación de *Datasmith Exporter for Revit* y optimización de escenas arquitectónicas (comprobar idioma, subtítulos, fecha de publicación y compatibilidad con la versión instalada antes de proyectarlos en aula).

### Glosario de términos clave

| Término | Definición |
|---|---|
| **Datasmith** | Tecnología y conjunto de complementos de Epic Games que traduce escenas BIM y CAD (geometría, jerarquía y materiales básicos) desde software como Revit hacia Twinmotion o Unreal Engine. |
| **Direct Link** | Mecanismo de conexión viva dentro de Datasmith que permite re-sincronizar modificaciones del modelo origen en Revit directamente sobre una escena abierta en Twinmotion sin reimportar desde cero. |
| **Falsa sensación de validación** | Sesgo por el cual una imagen fotorrealista o recorrido fluido induce erróneamente a suponer que la instalación eléctrica o lumínica cumple la normativa técnica vigente. |
| **Lumen / Tiempo real** | Modo de iluminación global en tiempo real basado en GPU que equilibra fluidez interactiva y rebotes de luz para navegación ágil en pantalla (sujeto a versión y compatibilidad gráfica). |
| **Path Tracer** | Motor de renderizado físico por trazado de rayos progresivo integrado en Twinmotion que produce imágenes de alta fidelidad lumínica, exigiendo GPU compatible con Ray Tracing (DXR) y mayor tiempo de cálculo. |
| **Section Box** | Caja de recorte tridimensional en Revit que delimita exactamente qué porción volumétrica del edificio permanece visible en una vista 3D y se transfiere al exportar. |
| **VRAM** | Memoria dedicada de alta velocidad integrada en la tarjeta gráfica (GPU) donde se almacenan mallas 3D, texturas y búferes de renderizado durante la sesión de Twinmotion. |
| **`.udatasmith`** | Formato de archivo de intercambio estático generado por el exportador Datasmith que encapsula la geometría y activos en una carpeta transportable independiente del enlace vivo. |

---

## 9. Adaptaciones

### Sesión presencial
- **Disposición del aula:** Estaciones de trabajo con GPU dedicada o proyección en pantalla principal de alta resolución para comparar en tiempo real los FPS antes y después de depurar la vista 3D de Revit.
- **Dinámica colaborativa:** Durante la Actividad 1 y el caso práctico, organizar mesas de 3-4 personas rotando el puesto de «director de visualización» frente al de «jefe de ingeniería responsable de límites reglamentarios».
- **Contingencia técnica:** Disponer en memoria USB de un paquete preexportado `.udatasmith` del modelo de práctica para equipos del aula que presenten incidencias puntuales de red o licencia de Revit.

### Sesión online síncrona
- **Herramientas interactivas:** Sondeo inicial en directo (Mentimeter o encuesta de plataforma) para inventariar la GPU/VRAM de cada participante al arranque; salas reducidas (*breakout rooms*) de 3-4 alumnos para resolver el caso *Clínica Oftalmológica Mirasierra* sobre una plantilla compartida.
- **Gestión de ancho de banda y demostración:** Al compartir pantalla con Twinmotion en movimiento, reducir temporalmente la calidad del visor o mostrar capturas comparativas nítidas para evitar compresión borrosa en la videoconferencia; enviar con 48 horas de antelación el enlace oficial para verificar/instalar Datasmith y descargar el archivo `.rvt` de práctica.
- **Seguimiento en vivo:** Solicitar a dos alumnos voluntarios que compartan pantalla durante la Actividad 2 para diagnosticar en directo errores reales de *Detail Level* o categorías 2D.

### Sesión asíncrona
- **Secuencia autoguiada en el campus virtual:**
  1. Vídeocápsula demostrativa paso a paso (12 min) sobre verificación de versiones de Datasmith y creación de vista `3D_EXP_Twinmotion` en Revit MEP + lectura de la guía del tema.
  2. Descarga del archivo `ELE_Edificio_Terciario_Base.rvt` (o respaldo `.udatasmith`) y subida de dos capturas comparativas: configuración *Visibility/Graphics* de Revit y estadísticas de escena cargada en Twinmotion.
  3. Participación en foro técnico del caso *Clínica Oftalmológica Mirasierra*, publicando el informe de rescate y evaluando la cláusula de alcance de al menos un compañero para detectar si incurre en promesas normativas implícitas.

---

## 10. Conexión con el programa

- **Qué conocimientos previos refuerza:** Consolida la organización de vistas, plantillas de visualización (*View Templates*), filtros por sistema eléctrico y disciplina BIM trabajados en el **Módulo 3 (Modelado 3D – Revit MEP eléctricas)** y en el **Módulo 4 (Documentación)**, orientándolos ahora hacia una salida visual depurada y segura.
- **Qué competencias desarrolla:** Preparación estratégica de modelos BIM para visualización en tiempo real, evaluación técnica de hardware gráfico, control de interoperabilidad Revit–Datasmith–Twinmotion, comunicación visual efectiva ante perfiles no técnicos y ética profesional en la delimitación de alcance técnico.
- **Cómo se conecta con el tema anterior y posterior en el programa (6 módulos / 50 temas):**
  - *Tema anterior:* Conecta directamente con el cierre del **Bloque 4 (Documentación), Tema 8: Impresión a PDF**. Una vez garantizada la entrega documental formal en planos PDF acotados y especificaciones, el Bloque 5 abre la capa de comunicación espacial para clientes no técnicos sin reemplazar jamás los planos ni cálculos previos.
  - *Tema posterior:* Enlaza de forma inmediata con el **Bloque 5, Tema 2: Sincronización del modelo eléctrico MEP mediante Direct Link**, donde el alumnado pasará de la primera carga limpia a gestionar actualizaciones iterativas bidireccionales, modos de colapso (*Keep Hierarchy* vs. *Collapse by Material*), preservación de acabados y múltiples archivos RVT vinculados.
- **Evidencia de aprendizaje que dejará el alumnado:** (1) Vista 3D depurada en Revit MEP y escena inicial cargada en Twinmotion con registro de optimización geométrica, y (2) Protocolo individual de puesta a punto + nota técnica estándar de alcance visual frente a validación normativa para su portafolio del programa.

---

## Siguientes pasos para el formador

1. **Verificar compatibilidad de software 48 horas antes:** Comprobar en las aulas o equipos de práctica que coinciden exactamente las versiones instaladas de Autodesk Revit, *Datasmith Exporter* y Twinmotion, teniendo preparado un paquete `.udatasmith` de respaldo.
2. **Confirmar capacidad gráfica de los puestos:** Verificar si los equipos disponen de GPU compatible con *Path Tracer* o si la demostración principal se realizará en modo estándar / *Lumen* para garantizar fluidez sin bloqueos.
3. **Preparar las 3 láminas de la Actividad 1:** Asegurar que los extractos de plano PDF MEP, memoria DIALux y render de ejemplo estén completamente anonimizados y sin datos identificativos de clientes reales.
4. **Recoger el inventario hardware del grupo al inicio:** Usar el sondeo diagnóstico inicial para detectar alumnos con portátil sin GPU dedicada y asignarles trabajo en parejas o archivos optimizados por *Section Box*.
5. **Conservar la escena `.tm` y el archivo `.rvt` de la Actividad 2:** Indicar al alumnado que mantenga ambos archivos localizados en su carpeta de proyecto, ya que serán el punto de partida directo para probar cambios iterativos en el **Tema 2 (Sincronización del modelo eléctrico MEP mediante Direct Link)**.
