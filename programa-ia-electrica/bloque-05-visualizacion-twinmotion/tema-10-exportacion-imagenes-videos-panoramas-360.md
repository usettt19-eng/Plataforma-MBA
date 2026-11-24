# Tema 10. Exportación en imágenes, vídeos y panoramas 360°

## 1. Ficha del tema

| Campo | Detalle |
| :--- | :--- |
| **Título del tema** | Exportación en imágenes, vídeos y panoramas 360° |
| **Programa** | IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas |
| **Bloque y posición dentro del programa** | Bloque 5: Visualización y renderizado con Twinmotion · Tema 10 de 10 |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Modalidad** | Online / Híbrida interactiva |
| **Idioma** | Español de España |
| **Prerrequisitos** | Dominio de calibración lumínica (Tema 6), organización de capas en el *Scene Graph* (Tema 7), creación de recorridos y secuencias (Tema 8) y estructuración de presentaciones profesionales en Twinmotion (Tema 9 del Bloque 5). |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado será capaz de configurar y ejecutar la exportación profesional de imágenes fijas 4K, vídeos MP4, panoramas $360^\circ$ y paquetes compartibles desde Twinmotion dimensionando resolución, FPS, códecs, modo de renderizado y tiempos de cálculo, incorporando marcas de agua y notas orientativas de alcance, vinculando el dossier visual con los planos PDF oficiales del proyecto y aplicando listas de control asistidas por IA como transición directa hacia el Bloque 6. |

---

## 2. Objetivos de aprendizaje

1. **Seleccionar** el formato de salida óptimo (imagen 4K, vídeo MP4 o secuencia de fotogramas, panorama $360^\circ$ o paquete interactivo compartible) según la finalidad comunicativa, las restricciones de hardware del receptor y el plazo de entrega. *(Nivel de Bloom: Analizar)*
2. **Configurar** los parámetros de exportación en Twinmotion —resolución, relación de aspecto, fotogramas por segundo (FPS), códec, muestras de *Path Tracer* o modo estándar/Lumen y reducción de ruido (*denoiser*)— estimando con precisión los tiempos totales de renderizado. *(Nivel de Bloom: Aplicar)*
3. **Integrar** marcas de agua discretas, codificación de revisión, notas orientativas de carácter no contractual y correspondencia explícita con los planos PDF del proyecto dentro de un dossier visual estructurado. *(Nivel de Bloom: Crear)*
4. **Evaluar** los archivos exportados para detectar defectos técnicos frecuentes (artefactos de compresión MP4, grano residual por muestras insuficientes, pérdida de legibilidad en etiquetas de cuadros eléctricos o distorsión equirectangular en $360^\circ$). *(Nivel de Bloom: Evaluar)*
5. **Diseñar** un protocolo de verificación previa a la entrega y un índice documental asistido por Inteligencia Artificial (con datos anonimizados) que enlace el cierre del Bloque 5 con la metodología sistemática de IA del Bloque 6. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Exportación de imágenes fijas (*stills*) hasta 4K, modos de render y presupuesto de tiempo

#### Explicación breve y clara
La exportación de imágenes fijas (*Media > Image > Export*) constituye la columna vertebral de la mayoría de informes visuales y anexos a memorias técnicas. Aunque Twinmotion permite lanzar capturas rápidas en resolución HD ($1920 \times 1080\text{ px}$), cuando necesitamos inspeccionar etiquetas en un Cuadro General de Baja Tensión o imprimir paneles de gran formato conviene subir a resolución **4K UHD ($3840 \times 2160\text{ px}$)** o dimensiones personalizadas acordes con la maquetación del documento.

La decisión clave que multiplica o reduce los tiempos es elegir entre el motor en tiempo real (**Standard / Lumen**, según versión y GPU) y el trazado de rayos físico (**Path Tracer**). El modo en tiempo real exporta una imagen 4K en pocos segundos y resulta idóneo para vistas de coordinación MEP o revisiones ágiles. El modo *Path Tracer* calcula rebotes lumínicos más fieles sobre metales, vidrios y techos técnicos, pero requiere configurar manualmente muestras por píxel (*Samples*), rebotes (*Bounces*) y filtro de reducción de ruido (*Denoiser*) si la tarjeta gráfica lo soporta; elevar esos parámetros sin criterio puede convertir una entrega de 15 imágenes en una espera inviable de varias horas.

#### Conceptos clave
- **Resolución y relación de aspecto:** Full HD ($1920\times 1080$, $16:9$) para pantallas y anexos ligeros; 4K UHD ($3840\times 2160$) para zoom sobre aparamenta eléctrica, presentaciones en sala o láminas impresas; formatos personalizados ($3:2$ o $4:3$) para ajustar a planos en formato ISO A3/A1.
- **Modo Tiempo Real (*Standard/Lumen*) frente a *Path Tracer*:** Tiempo real prioriza velocidad (segundos por imagen) con aproximaciones de iluminación global; *Path Tracer* prioriza fidelidad óptica y de reflejos en interiores cerrados a costa de mayor consumo de GPU y tiempo.
- **Muestras (*Samples per pixel*) y *Denoiser*:** En *Path Tracer*, las muestras controlan el nivel de ruido granulado en sombras y cuartos eléctricos poco iluminados; el *denoiser* suaviza el grano con menos muestras, pero un abuso de suavizado borra textos pequeños de señalética o etiquetas.
- **Render de prueba previo (*Test Crop / Low-Res Proof*):** Exportación rápida previa en HD o tiempo real para comprobar encuadre, EV, sombras y ausencia de fallos geométricos antes de lanzar la tanda nocturna en 4K *Path Tracer*.

#### Definiciones necesarias
- **Imagen fija 4K UHD:** Archivo gráfico rasterizado (habitualmente `.png` sin pérdida o `.jpg` comprimido) de $3840 \times 2160$ píxeles ($\approx 8{,}3\text{ megapíxeles}$), recomendado para conservar detalle nítido en bandejas, luminarias y frentes de cuadros.
- ***Path Tracing* (Trazado de trayectorias):** Técnica de cálculo gráfico basada en simulación estadística de rayos de luz que mejora la precisión de sombras suaves, rebotes indirectos y reflejos especulares respecto al rasterizado estándar.
- ***Fireflies* y ruido residual:** Píxeles anormalmente brillantes o aspecto granulado que aparecen en renders con *Path Tracer* cuando existen fuentes luminosas pequeñas muy intensas o insuficiente número de muestras (*samples*) en recintos cerrados.

#### Ejemplo práctico realista
Un proyectista debe entregar 8 imágenes finales de un edificio de laboratorios: 4 vistas arquitectónicas iluminadas (vestíbulo y fachada) y 4 vistas técnicas de coordinación MEP (sala de cuadros BT, pasillo sin falso techo y patinillos). Dispone de $90\text{ minutos}$ antes de cerrar el dossier.
- **Estrategia aplicada:**
  1. Primero exporta las 8 imágenes en HD ($1920\times 1080$) en modo tiempo real en menos de $2\text{ minutos}$ para revisar encuadres, EV y que no quede ninguna capa errónea oculta.
  2. Para las **4 vistas técnicas de coordinación MEP**, las exporta en 4K PNG mediante modo tiempo real/Lumen ($\approx 10\text{ s/imagen}$, total $< 1\text{ minuto}$), ya que ahí prima la lectura nítida de bandejas, soportes y rótulos sin ruido ni difuminado de *denoiser*.
  3. Para las **4 vistas comerciales clave**, activa *Path Tracer* en 4K con muestras moderadas ($128\text{–}256\text{ samples}$ según GPU de pruebas previas) y *Denoiser* activo ($\approx 4\text{ min/imagen}$, total $\approx 16\text{ min}$), logrando reflejos naturales en cristales y luminarias sin comprometer el plazo de entrega.

#### Errores frecuentes
- Exportar 20 imágenes directamente en 8K *Path Tracer* a $1000\text{ samples}$ sin haber hecho antes una prueba rápida de encuadre y exposición en 1080p.
- Usar el formato JPG con alta compresión sobre capturas técnicas de cuadros eléctricos, provocando halos borrosos (*compression artifacts*) alrededor de textos, líneas finas de bandejas y etiquetas.
- Aplicar un *Denoiser* demasiado agresivo con pocas muestras sobre un cuarto eléctrico, convirtiendo la rotulación de circuitos en manchas ilegibles.
- Olvidar activar *Path Tracer* (cuando esté soportado y sea necesario) en cada imagen concreta de la cola de exportación o dejarlo desactivado sin querer en una de las vistas comparativas.

#### Preguntas que el alumnado debería poder responder
1. ¿En qué tipo de vistas del proyecto eléctrico resulta preferible exportar en modo tiempo real frente a *Path Tracer*, y por qué?
2. ¿Por qué conviene guardar en formato `.png` en lugar de `.jpg` altamente comprimido las vistas destinadas a láminas con etiquetas o coordinación MEP?
3. ¿Qué riesgo visual introduce compensar un número muy bajo de muestras en *Path Tracer* confiando exclusivamente en el *Denoiser*?

---

### 3.2. Exportación de vídeo MP4: FPS, códecs, secuencias de fotogramas y cálculo de tiempos

#### Explicación breve y clara
Exportar un recorrido virtual multiplica exponencialmente la carga de cálculo respecto a una imagen fija, porque cada segundo de vídeo contiene decenas de fotogramas individuales. La fórmula base de planificación que todo proyectista debe calcular antes de pulsar *Start Export* es:

$$\text{Fotogramas totales} = \text{Duración (s)} \times \text{FPS}$$

Un vídeo de $60\text{ segundos}$ exportado a **$30\text{ FPS}$** exige renderizar **$1800\text{ fotogramas}$**; exportarlo a $60\text{ FPS}$ duplica la cifra a $3600\text{ fotogramas}$ (duplicando exactamente el tiempo de render y el tamaño de archivo) con muy escasa mejora práctica para desplazamientos pausados de ingeniería a $1{,}1\text{ m/s}$. Por tanto, **$24\text{ o }30\text{ FPS}$** en **1080p** (o **4K** únicamente si el proyecto y la GPU lo justifican) constituye el estándar más eficiente.

En cuanto al formato y códec, la exportación directa a **MP4 (H.264 / H.265 según soporte de la versión)** produce archivos ligeros y universales listos para enviar o proyectar. Sin embargo, para vídeos largos de alta calidad o si se van a añadir rótulos, marcas de agua, locución y fundidos en un editor externo (Premiere, DaVinci Resolve, Clipchamp), exportar como **secuencia de imágenes PNG** permite reanudar en caso de corte eléctrico sin perder horas de render y evita recomprimir dos veces el vídeo (evitando pérdida de nitidez en bandejas y cuadros).

#### Conceptos clave
- **Fotogramas por segundo (FPS):** Frecuencia de actualización de imagen; $24\text{ FPS}$ ofrece cadencia cinematográfica y $30\text{ FPS}$ fluidez técnica óptima en vídeos corporativos sin doblar innecesariamente tiempos frente a $60\text{ FPS}$.
- **Tasa de bits (*Bitrate*) y compresión H.264 vs. H.265:** H.264 garantiza compatibilidad casi universal en ordenadores antiguos de clientes y proyectores de sala; H.265 (HEVC) comprime mejor el 4K a menor tamaño pero puede requerir códecs específicos en algunos equipos corporativos.
- **Secuencia de fotogramas (`.png`) frente a MP4 directo:** Estrategia de seguridad ante renders largos o posproducción profesional con subtítulos y marcas de agua; previene perder todo el trabajo si se interrumpe el proceso al 85 %.
- **Presupuesto real de tiempo de render:** Estimación previa midiendo el tiempo de 1 solo fotograma representativo de la escena y multiplicándolo por $\text{Duración} \times \text{FPS}$.

#### Definiciones necesarias
- **Códec de vídeo (H.264 / AVC o H.265 / HEVC):** Algoritmo que codifica y comprime secuencias de vídeo digital; un *bitrate* insuficiente genera macrobloques y pérdida de detalle en movimientos sobre falsos techos y rejillas metálicas.
- **Re-compresión generacional (*Double Compression*):** Pérdida acumulada de calidad visual que ocurre cuando un vídeo ya comprimido en MP4 con pérdida vuelve a editarse y reexportarse en otro MP4 comprimido.
- **Desenfoque de movimiento (*Motion Blur*):** Efecto óptico que suaviza el desplazamiento rápido entre fotogramas; en recorridos técnicos lentos conviene mantenerlo muy sutil o desactivado para no emborronar la rotulación de equipos al pasar junto a ellos.

#### Ejemplo práctico realista
Debes exportar el vídeo de $55\text{ segundos}$ del recorrido del Tema 8 en resolución Full HD ($1920 \times 1080$) para enviarlo adjunto al dossier técnico de un cliente. Haces una prueba de tiempo sobre 5 segundos de vídeo:
- En modo **Tiempo Real (Lumen/Estándar)** a $30\text{ FPS}$, la GPU tarda $0{,}25\text{ s}$ por fotograma:
  $$1650\text{ fotogramas} \times 0{,}25\text{ s} \approx 412{,}5\text{ s} \approx 6{,}9\text{ minutos}$$
- Si intentaras el mismo vídeo en **4K Path Tracer** a $60\text{ FPS}$ ($3300\text{ fotogramas}$) a razón de $6\text{ s}$ por fotograma:
  $$3300 \times 6\text{ s} = 19\,800\text{ s} = 5{,}5\text{ horas}$$
Decides exportar en **1080p a 30 FPS en modo Tiempo Real con calidad alta** (en menos de $8\text{ minutos}$), generando el MP4 H.264 directo para revisión ágil (o secuencia PNG si vas a añadir carátula inicial, subtítulos técnicos y marca de agua final en editor de vídeo sin doble compresión), obteniendo un archivo limpio de $\approx 85\text{ MB}$ perfectamente reproducible en cualquier sala de juntas.

#### Errores frecuentes
- Seleccionar $60\text{ FPS}$ y 4K *Path Tracer* por inercia para un recorrido lento de $90\text{ s}$ sin calcular previamente las horas necesarias ni el peso final en gigabytes del MP4.
- Utilizar *bitrates* demasiado bajos para «que quepa en un correo electrónico», destruyendo la nitidez de luminarias lineales, cables y textos sobre cuadros.
- Dejar activado *Motion Blur* elevado, haciendo borrosas las etiquetas de los interruptores generales durante los giros de cámara.
- Enviar por correo un vídeo MP4 suelto de $800\text{ MB}$ sin comprimir ni comprobar si el equipo del cliente tiene ancho de banda o códec compatible (p. ej., H.265 en PC antiguo sin extensión).

#### Preguntas que el alumnado debería poder responder
1. Si un clip dura $45\text{ s}$ y se exporta a $30\text{ FPS}$ con un tiempo medio de render de $0{,}4\text{ s}$ por fotograma, ¿cuántos fotogramas totales se renderizan y cuánto tardará aproximadamente la exportación?
2. ¿En qué dos escenarios profesionales merece la pena exportar secuencia de imágenes PNG en lugar de MP4 directo desde Twinmotion?
3. ¿Por qué suele preferirse H.264 a $30\text{ FPS}$ sobre H.265 a $60\text{ FPS}$ cuando se distribuye un recorrido técnico a clientes con ordenadores corporativos heterogéneos?

---

### 3.3. Panoramas $360^\circ$, paquetes compartibles, marcas de agua y planos PDF adjuntos

#### Explicación breve y clara
A veces ni una imagen fija basta ni un vídeo lineal deja que el jefe de mantenimiento mire hacia arriba para inspeccionar una derivación en bandeja o hacia atrás para verificar una puerta de evacuación. Los **panoramas $360^\circ$** (y conjuntos de panoramas enlazables o *Panorama Sets*, según versión) resuelven esa necesidad: generan imágenes esféricas equirectangulares ($2:1$, habitualmente $4096 \times 2048$ o $8192 \times 4096\text{ px}$ en modo monoscópico estándar) desde un punto estático clave (centro de la sala de cuadros BT, cruce principal de pasillo técnico o vestíbulo), permitiendo al usuario girar la cabeza $360^\circ$ y mirar al techo o al suelo en cualquier visor $360^\circ$ ligero o plataforma web autorizada sin tener instalado Twinmotion ni GPU potente.

Al cerrar el paquete entregable, es imprescindible aplicar **higiene documental de ingeniería**:
1. **Marcas de agua y rótulos orientativos:** añadir discretamente en una esquina de imágenes, vídeos y carátula del dossier el código de proyecto, fecha/revisión (`REV02`), y el texto orientativo *«Visualización BIM orientativa — No sustituye planos ni cálculo reglamentario»*. (Nota práctica: cuando Twinmotion no incluya sobreimpresión textual directa por fotograma en el exportador de esa versión, las marcas de agua y notas se añaden limpiamente en posproducción o sobre la lámina/PDF contenedor).
2. **Acompañamiento inseparable de los planos PDF del proyecto:** un dossier visual de Twinmotion **nunca** se entrega huérfano; debe ir en la misma carpeta o índice que el juego de planos PDF exportado desde Revit (Bloque 4) y el resumen fotométrico de DIALux, con referencias cruzadas claras (`Vista V-03` $\leftrightarrow$ `Plano E-04 Planta Alumbrado`).

#### Conceptos clave
- **Panorama equirectangular $360^\circ$ (2:1):** Proyección esférica completa en un único archivo de imagen rectangular de proporción exacta $2:1$ (p. ej., $4096\times 2048$ u $8192\times 4096\text{ px}$), optimizado para inspección omnidireccional dentro de cuartos eléctricos reducidos.
- **Panorama monoscópico frente a estereoscópico:** Para pantallas de ordenador, tabletas y navegadores web se exporta **monoscópico (Mono)**; el modo estereoscópico (izquierda/derecha o arriba/abajo) duplica peso y tiempo y solo se emplea cuando el receptor utiliza expresamente gafas de realidad virtual (VR).
- **Paquetes compartibles estructurados:** Elección realista entre paquete ligero universal (`ZIP` ordenado con `01_Planos_PDF`, `02_Renders_4K`, `03_Video_MP4`, `04_Panoramas_360`) frente a paquete interactivo *Local Presentation* (más pesado y dependiente de GPU) o enlace web autorizado.
- **Trazabilidad entre dossier visual y planos PDF:** Inclusión en cada imagen/vídeo de un identificador único vinculado a la numeración oficial de planos del proyecto, evitando confusiones en obra si se producen modificaciones posteriores.

#### Definiciones necesarias
- **Proyección equirectangular:** Mapeo cartográfico de toda una esfera visual ($360^\circ$ horizontales $\times$ $180^\circ$ verticales) sobre un rectángulo de relación $2:1$, legible en visores $360^\circ$ estándar o herramientas web interactivas.
- **Marca de agua técnica (*Technical Watermark*):** Leyenda semitransparente o pie informativo discreto incrustado en entregables visuales que identifica autoría, número de revisión, fecha y advertencia de uso exclusivamente orientativo.
- **Carpeta maestra de entrega (*Transmittal Package*):** Estructura normalizada de directorios y archivos que empaqueta conjuntamente planos PDF contractuales, memorias de cálculo/DIALux y anexos visuales de Twinmotion con un índice maestro.

#### Ejemplo práctico realista
Al concluir la fase de proyecto de una reforma eléctrica de oficinas y centro de transformación privado, el coordinador prepara el paquete de entrega final `2026-11_PROY-T10_Entrega_REV01`:
- `00_Indice_y_Notas_Alcance.pdf`: carátula con tabla de correspondencia (`Vista` $\leftrightarrow$ `Plano PDF`) y descargo técnico explícito.
- `01_Planos_PDF_Revit/`: planos `E-01` (Fuerza y tomas), `E-02` (Alumbrado), `E-03` (Esquema unifilar y detalles) y resumen de resultados de `DIALux.pdf`.
- `02_Imagenes_4K/`: 6 PNG en 4K ($3840 \times 2160$) rotuladas en pie de lámina discreto con revisión `REV01` y nota orientativa (añadida en composición de lámina o editor ligero).
- `03_Recorrido_Video/`: `Recorrido_MEP_1080p_30fps.mp4` (H.264, $78\text{ MB}$) con cartela de entrada y subtítulo final de alcance no contractual.
- `04_Panoramas_360/`: 3 panoramas equirectangulares monoscópicos de $8192 \times 4096\text{ px}$ situados en el centro de la sala CGBT, pasillo técnico sin techo y vestíbulo principal, comprobados en visor $360^\circ$ antes del envío.
*Nota de verificación:* si un plano PDF sufre una revisión (`REV02`) tras una corrección de protecciones o reubicación de luminarias en Revit, el dossier visual debe marcarse como obsoleto o regenerarse sincronizado para no entregar renders de la `REV01` junto a planos `REV02`.

#### Errores frecuentes
- Exportar panoramas $360^\circ$ en modo estereoscópico $8K \times 8K$ por error cuando el cliente solo va a abrirlos en su monitor o navegador web, generando imágenes partidas por la mitad ilegibles.
- Entregar una carpeta llena de archivos sin formato homogéneo (`Image1.png`, `Video_final_final2.mp4`, `Pano.jpg`) sin índice, sin revisión ni planos PDF adjuntos que permitan ubicar las vistas en planta.
- Omitir la marca de revisión y la nota orientativa sobre las imágenes y vídeos, facilitando que se reenvíen capturas antiguas desactualizadas como si fueran definitivas en obra.
- Dejar en un panorama $360^\circ$ el punto de cámara pegado a un muro o dentro de una luminaria colgante, causando deformación extrema al girar la vista.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué un panorama $360^\circ$ monoscópico de relación $2:1$ suele ser más práctico que un paquete *Local Presentation* cuando el destinatario en obra solo dispone de una tableta o portátil básico?
2. ¿Qué información mínima debe figurar en la marca de agua o pie informativo de las imágenes y vídeos exportados para evitar errores de versión en obra?
3. ¿Por qué es obligatorio acompañar el dossier visual exportado con los planos PDF del proyecto y mantener sincronizados sus códigos de revisión?

---

### 3.4. Control de calidad del dossier con IA y puente hacia el Bloque 6

#### Explicación breve y clara
Antes de pulsar «enviar» al cliente o subir la entrega al entorno común de datos (CDE), el último control de calidad suele fallar por prisas: nombres de archivo inconsistentes, vistas que no coinciden con la última revisión de los planos PDF, estimaciones erróneas de tamaño total del paquete ZIP o falta de algún archivo en el índice de envío (*transmittal*).

En esta etapa final, asistentes como **ChatGPT o Claude** ayudan de forma rápida y estructurada siempre que trabajemos sobre el **listado de archivos y metadatos anonimizados** (sin adjuntar planos PDF confidenciales ni datos personales del cliente a chats externos públicos): la IA puede auditar que la nomenclatura sigue la convención del estudio, detectar si falta algún par de correspondencia `Vista` $\leftrightarrow$ `Plano PDF`, verificar fórmulas de cálculo de tiempo/peso de vídeo (que igualmente comprobaremos a mano) y redactar la carta de entrega (*transmittal*) profesional.

Con este cierre culmina el **Bloque 5 (Visualización y renderizado con Twinmotion)** y queda tendido el puente directo hacia el **Bloque 6 (Inteligencia artificial aplicada a instalaciones eléctricas)**, donde pasaremos de usar la IA como apoyo puntual en checklists visuales a integrarla de forma sistemática y auditada en todo el ciclo eléctrico y BIM: criterios de diseño, memorias descriptivas, asistencia en cálculos verificados, análisis de tablas de Revit y DIALux, ingeniería de prompts y control de inconsistencias.

#### Conceptos clave
- **Control de calidad pre-envío (*Pre-Delivery QC*):** Revisión final de resolución real, códec reproducible, ausencia de ruido/artefactos, presencia de marcas de agua/revisión, integridad del ZIP y correspondencia con planos PDF.
- **Auditoría de nomenclatura y *transmittal* con IA:** Uso seguro de LLM sobre listas `dir / ls` o tablas CSV anonimizadas para detectar saltos de numeración, versiones mezcladas (`REV01` vs `REV02`) o vistas huérfanas sin plano asociado.
- **Límite de verificación visual de la IA:** Aunque existen modelos multimodales capaces de comentar imágenes, la IA **no** sustituye la inspección técnica humana de nitidez de etiquetas eléctricas, fidelidad frente al proyecto DIALux ni la responsabilidad profesional del envío.
- **Transición metodológica al Bloque 6:** Paso del uso táctico de IA en documentación visual (Bloque 5) a su aplicación transversal en ingeniería eléctrica, Revit, DIALux y documentación técnica bajo validación humana obligatoria (Bloque 6).

#### Definiciones necesarias
- **Carta de entrega (*Transmittal*):** Documento índice que acompaña formalmente a un paquete de archivos técnicos listando nombres exactos, formatos, número de revisión, propósito de entrega y advertencias de alcance.
- **Control de versiones cruzado (*Cross-Revision Check*):** Comprobación sistemática que asegura que las vistas renderizadas, vídeos y panoramas $360^\circ$ corresponden exactamente a la misma revisión geométrica y lumínica que los planos PDF adjuntos.
- **Flujo auditado con IA (*Human-in-the-Loop*):** Modelo de trabajo donde la Inteligencia Artificial propone estructuras, revisiones de listados y borradores documentales, mientras el técnico competente aporta datos anonimizados, contrasta resultados y asume la validación final.

#### Ejemplo práctico realista
El equipo termina de exportar los archivos del centro de transformación y edificio terciario (`PROY_ANON_T10`). Extrae un listado simple en texto de los nombres de archivo de sus carpetas (`01_Planos_PDF`, `02_Renders_4K`, `03_Video`, `04_Panoramas_360`), borra todo dato identificativo real y pide a ChatGPT/Claude que cruce el inventario contra la lista prevista de planos (`E-01` a `E-04`, todos en `REV02`) y genere la tabla del *transmittal*.

La IA detecta inmediatamente dos fallos de coherencia en los nombres de archivo:
1. El vídeo se llama `Recorrido_MEP_REV01.mp4` mientras que todos los planos PDF y las imágenes 4K ya están etiquetados como `REV02`.
2. Falta el panorama $360^\circ$ asignado al código `E-04` (cuarto de cuadros secundario).
Además, la IA propone añadir en el *transmittal* la frase «Renderizados certificados conforme a normativa vigente», que el ingeniero **elimina de inmediato** al revisar el texto, reemplazándola por la nota de alcance correcto y verificando manualmente que abre todos los archivos antes de comprimir el envío.

#### Errores frecuentes
- Confiar en que «ya exportó bien Twinmotion» sin abrir y reproducir cada archivo MP4, PNG 4K y panorama $360^\circ$ en un visor externo antes de entregar.
- Enviar un dossier donde los planos PDF están en `REV03` pero los renders o panoramas adjuntos muestran luminarias cambiadas de la `REV01`.
- Subir directamente los planos PDF reales del edificio o renders con logotipos/direcciones confidenciales del cliente a un asistente de IA público sin autorización expresa.
- Cerrar el Bloque 5 pensando que Twinmotion y la IA actúan como procesos automáticos autónomos, olvidando el papel de control técnico humano que se profundizará en el Bloque 6.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué comprobaciones manuales obligatorias deben ejecutarse sobre los archivos exportados aunque una IA haya validado positivamente el inventario de nombres del *transmittal*?
2. ¿Cómo ayuda cruzar la lista de archivos exportados frente a los códigos de revisión de los planos PDF a prevenir errores graves en obra?
3. ¿Cómo se conecta la experiencia de control asistido por IA vista en el Bloque 5 con los objetivos globales del Bloque 6 del programa?

---

## 4. Metodología didáctica

La sesión combina análisis de calidad de exportaciones reales, laboratorio de configuración y cálculo de presupuestos de renderizado, taller de empaquetado con marcas orientativas y planos PDF, y cierre integrador del Bloque 5, sumando exactamente **240 minutos**.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
| :--- | :---: | :--- | :--- |
| **1. Activación: Inspección forense de exportaciones defectuosas** | 25 min | Muestra 4 archivos reales defectuosos (JPG muy comprimido con halos, MP4 pixelado por bajo *bitrate*, panorama estereoscópico partido en visor web y carpeta desordenada sin planos PDF) y plantea objetivos. | Analiza cada archivo en parejas, diagnostica la causa técnica de exportación en una ficha rápida y estima mejoras concretas. |
| **2. Demostración I: Exportación de *stills* 4K y vídeo MP4 / PNG** | 40 min | Explica y demuestra configuración de resolución, formatos PNG vs. JPG, *Standard/Lumen* vs. *Path Tracer* (*samples* + *denoiser*), cálculo de fotogramas/tiempo en vídeo, FPS y códecs H.264/H.265. | Realiza pruebas comparativas sobre su escena base: exporta 1 imagen HD prueba + 1 imagen 4K, mide tiempo por fotograma y calcula el presupuesto temporal de un clip a $30\text{ FPS}$. |
| **3. Demostración II: Panoramas $360^\circ$, marcas orientativas y paquete con PDF** | 40 min | Demuestra la ubicación óptima de cámara para panoramas $360^\circ$ monoscópicos ($2:1$), su comprobación en visor, la adición de marcas de agua/revisión y la estructura maestra junto a planos PDF. | Exporta 2 panoramas $360^\circ$ monoscópicos de zonas técnicas, los inspecciona en visor, incorpora marca orientativa en una imagen/lámina y monta la estructura de carpetas con un plano PDF de muestra. |
| **4. Práctica guiada: Auditoría de entrega y *transmittal* con IA** | 35 min | Facilita una lista anonimizada de archivos con fallos ocultos de revisión (`REV01` vs `REV02`) y guía el diseño de prompts de auditoría y *transmittal* conectando con el Bloque 6. | Ejecuta el prompt de control sobre el inventario anonimizado, corrige los desajustes de versión detectados y elimina cualquier falsa promesa normativa de la carta de entrega. |
| **5. Pausa activa** | 15 min | Resuelve incidencias de hardware (tiempos de *Path Tracer*, falta de VRAM, códecs de reproducción en equipos locales). | Descansa y comprueba que sus exportaciones parciales reproducen con fluidez fuera de Twinmotion. |
| **6. Taller aplicado: Caso práctico integral de empaquetado final** | 60 min | Supervisa el cierre del dossier completo actuando como receptor técnico exigente que verifica apertura real de archivos, trazabilidad con PDF y claridad de marcas de alcance. | Resuelve el caso práctico configurando perfiles de exportación óptimos dentro del plazo simulado, generando entregas, añadiendo marcas orientativas y cerrando el *transmittal* auditado. |
| **7. Puesta en común, evaluación y puente al Bloque 6** | 25 min | Dirige la revisión cruzada de paquetes entregables con la rúbrica, sintetiza los aprendizajes clave del Bloque 5 y presenta el salto metodológico hacia el Bloque 6. | Presenta brevemente su estructura de dossier y presupuesto de tiempos, completa su autoevaluación y realiza el test sumativo de cierre de tema/bloque. |

**Total cronometrado:** $25 + 40 + 40 + 35 + 15 + 60 + 25 = \mathbf{240\text{ minutos}}$.

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «Laboratorio de defectos de exportación»
- **Objetivo:** Diagnosticar rápidamente fallos habituales de compresión, resolución, relación de aspecto, ruido *Path Tracer* y desorden documental antes de producir entregables definitivos.
- **Instrucciones para el alumnado:**
  1. Abre los 4 archivos de muestra proporcionados en la carpeta `Muestras_Defectuosas_T10`:
     - `Muestra_A_CGBT.jpg` (artefactos de compresión sobre rótulos de armarios).
     - `Muestra_B_Oficina_PT.png` (ruido excesivo / manchas de *denoiser* agresivo).
     - `Muestra_C_Pasillo_360.jpg` (panorama exportado en estereoscópico visto en visor estándar).
     - `Muestra_D_Recorrido.mp4` (vídeo con *bitrate* insuficiente y *Motion Blur* alto).
  2. Completa la ficha diagnóstica indicando para cada archivo: (a) síntoma observable, (b) parámetro de exportación que lo provocó y (c) ajuste exacto para corregirlo.
- **Materiales necesarios:** Carpeta con las 4 muestras defectuosas ligeras + ficha de inspección de calidad.
- **Tiempo estimado:** 25 minutos (Fase 1).
- **Rol del formador:** Proyecta con zoom al 200 % la `Muestra_A` y la `Muestra_B` para demostrar por qué un render que «se ve bien en miniatura» resulta inútil para inspeccionar ingeniería eléctrica en pantalla completa.
- **Producto o entregable esperado:** Ficha diagnóstica cumplimentada con los 4 fallos correctamente diagnosticados y corregidos.
- **Criterios de éxito:** Identificación precisa de compresión JPG, insuficiencia de *samples* / exceso de *denoiser*, error mono vs. estéreo en $360^\circ$ y *bitrate*/*Motion Blur* en MP4.

### Actividad 2 (Aplicación técnica): «Banco de pruebas de exportación y panorama $360^\circ$ técnico»
- **Objetivo:** Medir tiempos reales de render en tu propio equipo, configurar exportaciones óptimas de imagen 4K, vídeo MP4 a $30\text{ FPS}$ y panorama $360^\circ$ monoscópico, y añadir marca de agua/revisión vinculada a plano PDF.
- **Instrucciones para el alumnado:**
  1. Abre `Bloque5_T10_EscenaFinal.tm` (escena ya calibrada e iluminada de temas previos).
  2. Ejecuta un test de tiempos exportando:
     - 1 vista en **1080p Tiempo Real** vs. **4K Tiempo Real (PNG)** vs. **4K Path Tracer** (si la GPU lo soporta; en caso contrario, mide 1080p Tiempo Real Calidad Alta vs. Ultra) y anota los segundos reales empleados.
     - 1 clip corto de $10\text{ s}$ en **1080p a $30\text{ FPS}$ (MP4 H.264)**, midiendo el tiempo por fotograma y calculando cuánto tardaría un vídeo de $60\text{ s}$.
     - 1 **panorama $360^\circ$ monoscópico ($2:1$, mínimo $4096\times 2048\text{ px}$)** centrado en el cuarto de cuadros BT a $1{,}60\text{ m}$ de altura.
  3. Añade sobre tu imagen 4K (mediante composición sencilla en editor gráfico, PowerPoint/Canva corporativo o herramienta de lámina PDF) una marca discreta en esquina inferior con código de vista, revisión `REV01`, código de plano PDF asociado (`E-02`) y nota de alcance orientativo.
  4. Comprueba en un visor externo gratuito o navegador el funcionamiento fluido del panorama $360^\circ$ y la reproducción del MP4.
- **Materiales necesarios:** Archivo `.tm` preparado, plano de referencia `Plano_Muestra_E02.pdf`, visor $360^\circ$ ligero (o herramienta web local sin subida a nube pública) y plantilla de pie de lámina/marca de agua.
- **Tiempo estimado:** 80 minutos (distribuidos en las Fases 2 y 3).
- **Rol del formador:** Ayuda a ajustar parámetros de exportación según la tarjeta gráfica real de cada alumno evitando bloqueos y comprueba la legibilidad real de los archivos generados fuera de Twinmotion.
- **Producto o entregable esperado:** Hoja de medición de tiempos + 1 PNG 4K rotulado + 1 MP4 breve reproducible + 1 panorama $360^\circ$ verificado en visor.
- **Criterios de éxito:** Estimación matemática coherente de tiempos; PNG 4K nítido sin artefactos; MP4 fluido sin macrobloques; panorama $360^\circ$ monoscópico correctamente centrado y legible; presencia de marca orientativa y referencia al plano PDF.

### Actividad 3 (Transferencia a proyecto real): «Auditoría de *transmittal* con IA y cierre hacia Bloque 6»
- **Objetivo:** Utilizar ChatGPT o Claude sobre un listado anonimizado de entregables para auditar consistencia de versiones, redactar un índice de envío (*transmittal*) vinculado a planos PDF y consolidar hábitos seguros de cara al Bloque 6.
- **Instrucciones para el alumnado:**
  1. Examina el listado en texto `Inventario_Entrega_Anon.txt` (incluye nombres de archivos de planos PDF, imágenes 4K, vídeo MP4 y panoramas $360^\circ$ de un proyecto ficticio anonimizado, con 3 fallos deliberados: una imagen con versión `REV01` frente a planos `REV02`, un panorama asignado a una vista inexistente y un archivo MP4 con peso sospechoso de $2{,}4\text{ GB}$).
  2. Redacta un prompt seguro solicitando a la IA que: (a) detecte todas las incoherencias de revisión o correspondencia vista-plano, (b) alerte sobre riesgos de distribución por peso de archivo y (c) redacte una tabla de *transmittal* formal incluyendo nota de no sustitución documental.
  3. Revisa manualmente la respuesta de la IA: verifica los 3 fallos, corrige cualquier suposición normativa errónea de la IA y añade una breve reflexión escrita (5 líneas) explicando qué tarea de este flujo automatizarías o ampliarías éticamente en el Bloque 6.
- **Materiales necesarios:** Inventario `Inventario_Entrega_Anon.txt`, plantilla de prompt y acceso a asistente de IA (o hoja de salida simulada para modo offline).
- **Tiempo estimado:** 35 minutos (Fase 4).
- **Rol del formador:** Comenta ejemplos de errores que la IA detecta con rapidez frente a aquellos que requieren criterio de ingeniería (como decidir si $2{,}4\text{ GB}$ es viable para un portal CDE o requiere recomprimir códec), y traza la transición al Bloque 6.
- **Producto o entregable esperado:** Prompt utilizado + listado de los 3 fallos detectados + tabla final de *transmittal* corregida + reflexión de enlace al Bloque 6.
- **Criterios de éxito:** Anonimización íntegra; identificación del 100 % de las inconsistencias; redacción de *transmittal* profesional con vinculación expresa a planos PDF y descargo técnico.

---

## 6. Caso práctico

### Entrega final multiformato del proyecto eléctrico y lumínico de un centro médico ambulatorio

#### Contexto empresarial
El estudio de ingeniería **TecnoSalud Instalaciones S.L.** (entidad ficticia) debe entregar mañana a primera hora el paquete final completo de la fase de proyecto de un nuevo centro médico ambulatorio ($1200\text{ m}^2$: recepción, pasillos asistenciales, 6 consultas, sala de curas y cuarto de Cuadro General de Baja Tensión con SAI). La dirección facultativa requiere una entrega unificada donde los archivos visuales de Twinmotion complementen con rigor a los planos PDF definitivos (`REV02`) y al estudio de DIALux.

#### Situación o problema
A las 16:00 h del día previo a la entrega, la coordinación detecta un colapso en la preparación del paquete final:
1. Un colaborador lanzó la exportación del vídeo completo de $75\text{ segundos}$ en **4K *Path Tracer* a $60\text{ FPS}$**, estimándose un tiempo restante de **14 horas**, por lo que no estará listo para la reunión y además superaría los $3{,}5\text{ GB}$ imposibles de subir al buzón de entrega del cliente (límite máximo total del envío: $500\text{ MB}$).
2. Las imágenes de coordinación MEP en la sala de CGBT y pasillo sin falso techo se exportaron en **JPG de baja calidad** sin marca de agua ni código de revisión, y muestran un diseño previo (`REV01`) en el que el SAI estaba en otra pared distinta a la que aparece en el plano PDF `E-03_REV02` que ya está listo para enviarse.
3. En la sala de CGBT + SAI ($3{,}5\text{ m} \times 4{,}0\text{ m}$), el colaborador olvidó incluir panoramas $360^\circ$ y dejó únicamente una imagen fija con gran angular extremo que corta el alumbrado de emergencia.
4. No existe índice de envío (*transmittal*) ni advertencia alguna aclarando que los renders no constituyen certificación sanitaria ni eléctrica.

#### Datos disponibles
- Escena Twinmotion actualizada tras re-sincronizar Direct Link desde Revit con la ubicación definitiva (`REV02`) del SAI y cuadros BT.
- Juego de planos PDF oficiales `REV02` ya validados y firmados como borrador final (`E-01_Planta_Fuerza_REV02.pdf`, `E-02_Planta_Alumbrado_REV02.pdf`, `E-03_Sala_CGBT_SAI_REV02.pdf`, `E-04_Unifilar_REV02.pdf`, `DIALux_Resumen_REV02.pdf`).
- Estación de trabajo de capacidad media (puede renderizar 1 imagen 4K en Tiempo Real/Lumen en $8\text{ s}$, 1 imagen 4K en *Path Tracer* en $3{,}5\text{ min}$, y vídeo 1080p a $30\text{ FPS}$ en Tiempo Real a razón de $0{,}30\text{ s/fotograma}$).
- Límite estricto de tamaño total del dossier comprimido/compartible: **$\le 500\text{ MB}$** incluyendo PDFs.

#### Preguntas de análisis
1. Calcula exactamente cuánto tiempo tardaría el vídeo de $75\text{ s}$ si se cambia la configuración a **1080p, $30\text{ FPS}$ en Tiempo Real** frente a la configuración inviable de 4K *Path Tracer* $60\text{ FPS}$, y justifica por qué cumple sobradamente la necesidad comunicativa.
2. ¿Qué mezcla selectiva de formatos (PNG Tiempo Real vs. *Path Tracer* 4K vs. panorama $360^\circ$ monoscópico) permite cumplir el plazo de la tarde y entregar el paquete antes del cierre?
3. ¿Qué peligro técnico y contractual habría supuesto enviar las imágenes `REV01` del SAI junto al plano `E-03_REV02`?
4. ¿Cómo se resuelve la inspección completa de la reducida sala CGBT + SAI sin recurrir a un gran angular extremo deformado?

#### Tarea a realizar
En equipos o individualmente, deberéis:
1. **Planificar la estrategia de exportación dentro de presupuesto de tiempo y tamaño ($\le 500\text{ MB}$):**
   - Calcular los minutos totales de renderizado combinando 2 imágenes 4K *Path Tracer* (recepción/fachada representativa), 4 imágenes 4K PNG en Tiempo Real (coordinación MEP y consultas), 1 vídeo MP4 H.264 1080p a $30\text{ FPS}$ ($75\text{ s}$) y 2 panoramas $360^\circ$ monoscópicos $2:1$ (centro de sala CGBT + SAI y cruce pasillo asistencial).
2. **Ejecutar o simular sobre la escena actualizada (`REV02`)** las exportaciones clave disponibles en aula (al menos 1 still 4K rotulado, 1 panorama $360^\circ$ monoscópico de la sala CGBT + SAI y comprobación de vídeo), asegurando que la ubicación del SAI coincide exactamente con `E-03_REV02`.
3. **Rotular y estructurar el paquete final:** incluir marcas de agua/pies discretos con `REV02`, código de plano vinculado y nota de carácter orientativo, organizando la carpeta maestra junto a los planos PDF del proyecto.
4. **Elaborar el *transmittal* auditado con IA** (sobre datos anonimizados) redactando la tabla de correspondencia `Entregable visual` $\leftrightarrow$ `Plano PDF REV02` y la nota de descargo técnico-sanitario/eléctrico final.

#### Posibles soluciones o criterios de análisis
- **Presupuesto temporal realista:**
  - Vídeo $75\text{ s} \times 30\text{ FPS} = 2250\text{ fotogramas} \times 0{,}30\text{ s} = 675\text{ s} \approx 11{,}25\text{ min}$ (H.264 1080p con *bitrate* equilibrado $\approx 90\text{–}130\text{ MB}$).
  - 2 imágenes 4K *Path Tracer*: $2 \times 3{,}5\text{ min} = 7\text{ min}$ ($\approx 25\text{ MB}$ en PNG).
  - 4 imágenes 4K Tiempo Real PNG: $4 \times 8\text{ s} = 32\text{ s}$ ($\approx 45\text{ MB}$).
  - 2 panoramas $360^\circ$ monoscópicos ($8192 \times 4096$ JPG calidad alta o PNG optimizado): $< 2\text{ min}$ ($\approx 20\text{–}35\text{ MB}$).
  - Tiempo total de renderizado: **$\approx 21\text{ minutos}$**; tamaño total incluyendo PDFs ($\approx 30\text{ MB}$): **$\approx 220\text{–}265\text{ MB}$**, muy por debajo del límite de $500\text{ MB}$.
- **Solución a la sala CGBT + SAI:** Re-sincronizar y verificar visualmente que el SAI coincide con `E-03_REV02`; situar un panorama $360^\circ$ monoscópico a $1{,}60\text{ m}$ en el centro del local para que mantenimiento gire libremente y examine armarios BT, SAI, alumbrado de emergencia y entradas de bandejas sin distorsión de gran angular.
- **Trazabilidad y descargo:** Incorporar pie discreto en cada visual (`Centro Médico Tipo | Vista V-0X | Ref. Plano E-03_REV02 | Visualización orientativa`) y dejar constancia en el *transmittal* de que cualquier requisito de locales de pública concurrencia, quirófanos/salas médicas o sistemas de alimentación ininterrumpida se rige exclusivamente por la normativa vigente aplicable (p. ej., REBT ITC-BT-28 e ITC-BT-38 en España o códigos hospitalarios/eléctricos locales) verificada en las memorias y planos PDF oficiales, nunca en las imágenes de Twinmotion.

#### Preguntas de reflexión final
1. ¿En qué criterio objetivo te apoyas para decidir ante un cliente exigente qué vistas merecen invertir minutos en *Path Tracer* y cuáles deben salir en tiempo real?
2. ¿Qué procedimiento implantarías en tu estudio para impedir físicamente que salgan renders `REV01` en una carpeta de planos `REV02`?
3. Mirando ya hacia el Bloque 6, ¿qué tareas repetitivas de documentación, revisión de tablas Revit/DIALux y control de entrega que has practicado manualmente en este Bloque 5 podrían beneficiarse de un flujo sistemático asistido por IA?

---

## 7. Evaluación

### Evaluación diagnóstica
- **Cuándo:** Primeros 25 minutos (Fase 1 / Actividad 1).
- **Instrumento:** Ficha de autopsia técnica sobre las 4 muestras exportadas con fallos deliberados.
- **Propósito:** Identificar concepciones erróneas sobre formatos JPG/PNG, *samples*, *denoiser*, FPS, *bitrate* y panoramas mono vs. estéreo.

### Evaluación formativa
- **Cuándo:** Durante las Fases 2, 3 y 4 (Actividades 2 y 3).
- **Instrumento:** Hoja de registro de pruebas reales de tiempo de renderizado en estación + inspección directa de los archivos exportados en visores externos y del *transmittal* auditado con IA.
- **Criterios de seguimiento:** Exactitud de cálculo de fotogramas/tiempo, legibilidad nítida de etiquetas en 4K, reproducción limpia de MP4 y panorama $360^\circ$, e integridad de la trazabilidad con planos PDF.

### Evaluación sumativa
- **Cuándo:** Fases 6 y 7 (Caso práctico + prueba objetiva final de cierre del Bloque 5).
- **Composición de la calificación:**
  - **60 %** Entregable del Caso práctico (plan de presupuesto tiempo/peso $\le 500\text{ MB}$ + carpeta maestra estructurada con imagen 4K rotulada, panorama $360^\circ$ verificado, muestra MP4, planos PDF de referencia y *transmittal* auditado).
  - **25 %** Ejecución de la Actividad 2 y Actividad 3 (banco de pruebas de tiempos y auditoría de inventario anonimizado con IA).
  - **15 %** Cuestionario objetivo final integrando parámetros de exportación (resolución, FPS, H.264/H.265, $360^\circ$ mono, marcas y límites profesionales del Bloque 5).

### Rúbrica de evaluación

| Criterio | Insuficiente (0–4,9) | En desarrollo (5,0–6,9) | Adecuado (7,0–8,9) | Destacado (9,0–10) |
| :--- | :--- | :--- | :--- | :--- |
| **Configuración técnica (4K, vídeo MP4, $360^\circ$) y tiempos** | Elige configuraciones inviables o de baja calidad (JPG borroso, $60\text{ FPS}$ innecesarios, estéreo erróneo); no calcula tiempos ni tamaño final. | Exporta archivos legibles, pero sobreestima tiempos o elige formatos poco optimizados para la red o equipo receptor. | Dimensiona con criterio 4K Tiempo Real/*Path Tracer*, MP4 H.264 a $30\text{ FPS}$ y panoramas $360^\circ$ mono ($2:1$) cumpliendo plazos y peso objetivo. | Optimiza con precisión matemática tiempos de cálculo, calidad de detalle eléctrico y tamaño total del envío, verificando la reproducción en visores externos. |
| **Calidad visual final de los exportados** | Imágenes con fuerte ruido o *denoiser* borroso, vídeos con cortes/macrobloques o panoramas deformados/mal ubicados. | Calidad general aceptable pero con pérdida leve de nitidez en etiquetas de cuadros o transiciones algo comprimidas. | Archivos limpios y nítidos: rótulos eléctricos legibles en 4K, vídeo fluido sin *Motion Blur* excesivo y panorama $360^\circ$ bien centrado. | Calidad de entrega profesional impecable sin artefactos de compresión ni ruido, demostrando revisión externa rigurosa pieza por pieza. |
| **Marcas orientativas, revisión y planos PDF** | Entrega archivos sueltos sin nombres normalizados, sin marcas de revisión/descargo y desconectados de los planos PDF. | Agrupa archivos en carpetas básicas, pero omite la correspondencia vista–plano o mezcla revisiones inconsistentes. | Estructura carpeta maestra vinculada a planos PDF, aplica códigos de revisión homogéneos y añade marcas orientativas claras. | Diseña paquete de entrega estándar de ingeniería con trazabilidad bidireccional `Vista` $\leftrightarrow$ `Plano PDF` y control estricto de versiones `REV`. |
| **Auditoría segura con IA y enlace al Bloque 6** | Sube planos reales confidenciales a IA, ignora inconsistencias del inventario o presenta el dossier visual como certificación oficial. | Anonimiza datos y detecta errores obvios en nombres, pero redacta un *transmittal* incompleto o con advertencias ambiguas. | Anonimiza listados, detecta inconsistencias mediante IA con verificación humana y entrega *transmittal* correcto y respetuoso con la normativa. | Integra flujo *Human-in-the-Loop* ejemplar para control pre-envío y articula con claridad la continuidad técnica hacia el Bloque 6. |

### Actividad de autoevaluación
Antes de enviar cualquier dossier visual definitivo a cliente o dirección facultativa, el alumno comprobará individualmente:
1. ¿He calculado previamente $\text{Duración} \times \text{FPS} \times \text{tiempo/fotograma}$ y verificado que el tamaño del envío cabe dentro de los límites acordados?
2. ¿He abierto externamente cada imagen 4K (al 100 % de zoom sobre cuadros eléctricos), cada MP4 y cada panorama $360^\circ$ fuera de Twinmotion para confirmar que no hay ruido, halos ni errores de proyección?
3. ¿Coincide exactamente la revisión (`REV`) de todas mis imágenes, vídeos y panoramas con la revisión de los planos PDF adjuntos en la misma entrega?
4. ¿Incluyen mis piezas visuales y la carátula/*transmittal* una marca clara con código de proyecto, fecha y nota indicando su carácter exclusivamente orientativo?
5. ¿He anonimizado cualquier inventario o dato antes de apoyarme en IA y verificado personalmente cada cifra y afirmación técnica del *transmittal*?

---

## 8. Materiales y recursos

### Guion estructurado de diapositivas (Slides 1 a 8)

- **Slide 1: Portada — Del modelo en Twinmotion al dossier profesional de entrega**
  - Visión general del cierre del Bloque 5: la mejor escena pierde valor si se exporta tarde, borrosa, pesada o desconectada de los planos del proyecto.

- **Slide 2: Imágenes fijas (HD vs. 4K), formatos (PNG/JPG) y Tiempo Real vs. *Path Tracer***
  - Recorte al 200 % de una etiqueta eléctrica comparando JPG comprimido, PNG Tiempo Real y PNG *Path Tracer* con muestras insuficientes vs. óptimas.

- **Slide 3: Matemáticas del vídeo MP4 (FPS, duración, *bitrate* y códecs)**
  - Tabla comparativa rápida de tiempos y pesos: $30\text{ FPS}$ H.264 1080p vs. $60\text{ FPS}$ 4K *Path Tracer*, y criterio de cuándo exportar secuencia PNG.

- **Slide 4: Panoramas $360^\circ$ equirectangulares y paquetes compartibles**
  - Esquema $2:1$ monoscópico vs. estereoscópico, posicionamiento óptimo dentro de salas de cuadros BT/SAI y comparación práctica entre ZIP ligero + panoramas frente a *Local Presentation* ejecutables.

- **Slide 5: Higiene documental — Marcas de agua, control `REV` y planos PDF inseparables**
  - Estructura estándar de carpeta maestra de entrega (`00_Indice`, `01_Planos_PDF`, `02_Renders_4K`, `03_Video`, `04_Panoramas_360`) y diseño de pie de lámina orientativo.

- **Slide 6: Lista de inspección pre-envío y auditoría de *transmittal* con IA**
  - Flujo paso a paso con inventario anonimizado para cazar incoherencias `REV01`/`REV02`, huecos de planos o pesos fuera de límite.

- **Slide 7: Caso práctico ambulatorio — Presupuesto de tiempos bajo presión ($\le 500\text{ MB}$)**
  - Desglose cuantitativo en directo de cómo bajar de 14 horas / $3{,}5\text{ GB}$ a $21\text{ minutos}$ / $\approx 240\text{ MB}$ manteniendo calidad de ingeniería.

- **Slide 8: Cierre del Bloque 5 y puente hacia el Bloque 6 (IA aplicada a instalaciones eléctricas)**
  - Mapa conceptual de lo aprendido en Twinmotion (Temas 1–10) y presentación de los 11 temas del Bloque 6 donde la IA pasa a asistir diseño, memorias, cálculos verificados y modelos Revit/DIALux.

### Ficha de trabajo (Calculadora de render y control de entrega)
- **Documento:** `Ficha_T10_Calculadora_Exportacion_y_QC.md` con dos bloques:
  - **Bloque A (Presupuesto de tiempos y peso):** Tabla con `Media_ID`, `Tipo (Still 4K / Video MP4 / Pano 360)`, `Motor (TR / PT)`, `Resolucion`, `FPS / Samples`, `Fotogramas_Totales`, `Tiempo_s_por_frame`, `Tiempo_Estimado_min`, `Peso_MB`.
  - **Bloque B (Control pre-envío):** Casillas de verificación por archivo: `Reproduccion externa OK`, `Zoom 100 % etiquetas OK`, `Marca REV + Nota orientativa OK`, `Plano PDF asociado OK`.

### Plantilla técnica práctica (Prompt seguro para auditoría de inventario y *transmittal*)
```text
ROL: Actúas como coordinador de control documental (Document Controller) especializado en proyectos de ingeniería eléctrica y BIM.
RESTRICCIONES DE SEGURIDAD:
- Los nombres y códigos han sido anonimizados.
- NO des por certificado ni validado legalmente ningún cálculo o plano a partir de los renders.
- Si detectas incoherencias numéricas o de revisión entre carpetas, resáltalas en negrita.

DATOS DE ENTRADA (Listado de archivos del paquete y planos PDF esperados en REV02):
[Pegar listado simple de archivos con tamaño en MB, extensión y código de revisión]

TAREA:
1. Audita el listado detectando: (a) archivos visuales en revisión distinta a REV02, (b) planos PDF sin correspondencia visual asignada o viceversa, (c) archivos cuyo peso en MB o formato comprometa un envío estándar <= 500 MB o la compatibilidad en oficina técnica.
2. Genera una tabla Markdown lista para la carátula del Transmittal con: Codigo_Archivo | Formato | Revision | Plano_PDF_Vinculado | Proposito_Visual.
3. Redacta un aviso estándar (máx. 50 palabras) para la carátula del dossier indicando que los renders, vídeos y panoramas 360° son exclusivamente orientativos y que prevalecen los planos PDF y memorias técnicas visadas conforme a la normativa aplicable.
```

### Lecturas y recursos recomendados
- **Documentación oficial de Twinmotion (Epic Games):** manuales actualizados de *Exporting Media* (*Images, Videos, Panoramas, Presentations*), configuraciones de *Path Tracer* (*Samples, Bounces, Denoiser*) y requisitos de GPU compatibles según la versión exacta instalada.
- **Guías técnicas de compresión multimedia y estándares de imagen:** documentación introductoria sobre códecs H.264/H.265, proyección equirectangular $2:1$ y buenas prácticas de archivo digital sin pérdida (PNG/EXR frente a JPG).
- **Estándares de gestión documental en proyectos técnicos (ISO 19650 — principios de estados y codificación de revisiones):** referencias orientativas sobre nomenclatura unificada de entregables BIM y PDF.
- *Advertencia expresa:* Los tiempos de exportación, compatibilidad de *Path Tracer* con determinadas tarjetas gráficas y códecs disponibles dependen directamente de la versión de Twinmotion y del hardware del equipo; realiza siempre una prueba corta de calibración antes de comprometer plazos de entrega reales.

### Glosario de términos clave

| Término | Definición |
| :--- | :--- |
| **Resolución 4K UHD** | Formato de imagen de $3840 \times 2160$ píxeles recomendado para preservar el detalle fino de aparamenta eléctrica, textos y bandejas en renders fijos. |
| ***Path Tracer*** | Motor de cálculo basado en trazado físico de rayos integrado en Twinmotion que aporta mayor fidelidad de sombras y reflejos a costa de mayores tiempos de GPU. |
| ***Samples* y *Denoiser*** | Número de muestras de luz por píxel y filtro de suavizado de ruido en *Path Tracer*; equilibrarlos evita tanto grano residual como borrosidad en etiquetas. |
| **Fotogramas por segundo (FPS)** | Cantidad de imágenes individuales reproducidas por cada segundo de vídeo ($24\text{–}30\text{ FPS}$ es el rango óptimo en recorridos de instalaciones eléctricas). |
| **Códec H.264 / H.265** | Estándares de compresión para vídeo MP4; H.264 ofrece máxima compatibilidad entre equipos de clientes y H.265 reduce tamaño en 4K. |
| **Panorama equirectangular $360^\circ$** | Imagen panorámica única en proporción $2:1$ que envuelve una esfera visual completa para inspeccionar recintos eléctricos en visores interactivos. |
| **Carta de entrega (*Transmittal*)** | Documento índice que lista todos los entregables visuales y planos PDF de una remesa, su revisión y las condiciones o límites de uso. |
| **Control de versiones cruzado** | Verificación obligatoria de que la geometría e iluminación mostradas en los renders coinciden con la última revisión de los planos PDF adjuntos. |

---

## 9. Adaptaciones

### Sesión presencial
- **Estación de contraste y cronómetro:** El formador ejecuta en vivo en el equipo del aula la diferencia real de tiempo entre Tiempo Real y *Path Tracer* en 4K mientras el alumnado anota los valores en su ficha calculadora.
- **Revisión en pantalla grande:** Se proyectan dos imágenes 4K de estudiantes voluntarios haciendo zoom al 150 % sobre etiquetas de cuadros y luminarias para auditar colectivamente nitidez, compresión y marcas de agua.

### Sesión online síncrona
- **Validación sin saturar la red:** Dado que subir vídeos MP4 o paquetes de $300\text{ MB}$ en directo bloquearía la videoconferencia, durante la sesión cada estudiante comparte únicamente su **ficha calculadora de presupuesto**, un recorte 100 % en PNG de su imagen 4K rotulada, la captura de su carpeta organizada y el *transmittal* auditado con IA; las exportaciones completas se suben al repositorio del campus al finalizar o en las horas posteriores.
- **Visor online local de $360^\circ$:** Se recomienda que el alumnado abra su panorama en un visor $360^\circ$ local del sistema o navegador offline (o sin subir archivos sensibles) durante la comprobación por pantalla compartida.

### Sesión asíncrona
- **Tutoriales grabados focalizados:** 3 micro-vídeos prácticos: (1) configuración de *stills* 4K y control de *Path Tracer* / Tiempo Real, (2) cálculo de FPS, H.264 vs. secuencia PNG y adición sencilla de marca orientativa, y (3) exportación de panorama $360^\circ$ mono $2:1$ + empaquetado final junto a planos PDF.
- **Entrega final integradora del Bloque 5:** El participante sube un archivo ZIP optimizado ($\le 150\text{ MB}$ para plataforma LMS, ajustando duración del MP4 de muestra a $20\text{–}30\text{ s}$) siguiendo exactamente la estructura maestra con planos PDF de ejemplo, imagen 4K rotulada, MP4, panorama $360^\circ$ y *transmittal* auditado, recibiendo rúbrica completa de cierre de bloque.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Culmina el flujo completo del Bloque 5 integrando el enlace desde Revit MEP (Temas 1–2), materiales y luces importadas desde DIALux (Temas 3–5), calibración de intensidad y temperatura $\text{K}$ (Tema 6), organización por capas del *Scene Graph* (Tema 7), recorridos/secuencias MEP (Tema 8) y empaquetado de presentaciones (Tema 9), conectándolos explícitamente con los planos PDF producidos en el Bloque 4 (Documentación).
- **Competencias técnicas que desarrolla:**
  - Planificación cuantitativa de tiempos, formatos, FPS, códecs y pesos de entrega en producción visual BIM.
  - Garantía de trazabilidad documental entre visualizaciones Twinmotion, marcas de revisión y planos PDF oficiales.
  - Control de calidad asistido por IA bajo principios de privacidad y responsabilidad profesional humana.
- **Ubicación en la secuencia del programa (6 bloques / 50 temas):**
  - **Tema anterior (Bloque 5 · Tema 9 — Herramientas para generar presentaciones profesionales):** Preparó las comparativas bloqueadas, encuadres duales y conjuntos de vistas en modo interactivo; este Tema 10 materializa y empaqueta todos esos medios en archivos finales compartibles y auditados listos para entrega al cliente.
  - **Tema posterior (Bloque 6 · Tema 1 — Introducción a la IA aplicada a la ingeniería eléctrica y BIM):** Con el cierre del Bloque 5, el alumnado inicia el sexto y último bloque del programa, trasladando la disciplina de prompts seguros, datos anonimizados y verificación humana independiente desde los checklists visuales hacia el corazón del diseño eléctrico, las memorias técnicas, la revisión de resultados de Revit/DIALux y el control integral del proyecto.
- **Evidencia de aprendizaje:** Paquete completo de entrega final del caso práctico ($\le 500\text{ MB}$) integrado por planos PDF de referencia, imágenes 4K rotuladas, vídeo MP4 a $30\text{ FPS}$, panoramas $360^\circ$ monoscópicos verificados, calculadora de tiempos de renderizado y *transmittal* con descargo auditado tras consulta segura a IA.

---

## Siguientes pasos para el formador

1. **Preparar la carpeta `Muestras_Defectuosas_T10`:** Verificar que las 4 muestras de la Actividad 1 exhiben de forma clara y sin ambigüedades los defectos previstos (compresión JPG, ruido/*denoiser*, panorama estéreo partido y vídeo con *bitrate* bajo) para agilizar el diagnóstico inicial.
2. **Comprobar equipos del aula para pruebas de *Path Tracer*:** Identificar de antemano qué ordenadores disponen de GPU compatible con *Path Tracer* en Twinmotion y prever la alternativa de medición comparativa *Calidad Alta vs. Ultra* en modo Tiempo Real para quienes utilicen portátiles sin aceleración ray-tracing por hardware.
3. **Suministrar un juego de planos PDF `REV02` de ejemplo:** Facilitar al alumnado archivos PDF ligeros ya maquetados (del Bloque 4 o equivalentes ficticios) para que practiquen el emparejamiento real `Vista` $\leftrightarrow$ `Plano PDF` y detecten discrepancias de revisión.
4. **Reforzar el enlace pedagógico con el Bloque 6:** Dedicar los últimos 5 minutos de la sesión a recapitular los límites éticos y técnicos vividos en el Bloque 5 (no inventar datos, anonimizar antes de consultar modelos externos, validar siempre cifras y normativa) como base metodológica obligatoria para abordar con madurez el Bloque 6.
