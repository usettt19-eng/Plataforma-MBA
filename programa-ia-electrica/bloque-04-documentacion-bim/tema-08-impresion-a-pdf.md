# Tema 8. Impresión a PDF

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Tema 8. Impresión a PDF |
| **Bloque y posición dentro del programa** | Bloque 4: Documentación BIM — Tema 8 de 8 (Tema 29 de 50 en el programa de 6 módulos) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Dominio de plantillas de visualización, escalas, anotaciones, símbolos, filtros, láminas de detalles y conciliación con especificaciones técnicas en Revit MEP (Bloque 4, Temas 1 a 7) |
| **Resultado general de aprendizaje** | Configurar conjuntos de planos (*print sets*), seleccionar motores de exportación PDF nativos o virtuales con procesamiento vectorial optimizado, calibrar grosores de línea y transparencias y ejecutar auditorías finales de calidad previa a la entrega a cliente, obra o licitación |

---

## 2. Objetivos de aprendizaje

Al finalizar este tema, el alumnado será capaz de:

1. **Identificar** las opciones clave de configuración de impresión y exportación a PDF en Revit MEP (conjuntos de planos, escala real al 100 %, tamaño de papel, reglas de nomenclatura y calidad ráster). *(Nivel de Bloom: Recordar)*
2. **Comparar** el funcionamiento técnico, compatibilidad de versiones y limitaciones operativas entre la exportación nativa a PDF (desde Revit 2022) y las impresoras virtuales PDF, así como entre el procesamiento vectorial y el procesamiento ráster. *(Nivel de Bloom: Comprender)*
3. **Configurar** lotes de impresión (*Print Sets* / *Export Sets*) con grosores de línea calibrados, eliminación de transparencias que fuercen rasterización innecesaria y reglas de nombrado consistentes para entregas multiformato. *(Nivel de Bloom: Aplicar)*
4. **Detectar** defectos críticos en archivos PDF ya emitidos —como escalas deformadas por ajuste a página, textos pixelados, vínculos ocultos, filtros QA activos o contradicciones con el índice— mediante una lista de chequeo sistemática. *(Nivel de Bloom: Analizar)*
5. **Evaluar** un paquete documental PDF definitivo y generar actas de entrega (*transmittals*) o checklists personalizados con ayuda de IA sobre índices CSV anonimizados, diferenciando la documentación técnica contractual de la futura visualización en Twinmotion. *(Nivel de Bloom: Evaluar)*

---

## 3. Contenidos esenciales

### 3.1. Conjuntos de planos/impresión (*Print Sets*), escalas reales y reglas de nomenclatura

#### Explicación breve y clara
Emitir un proyecto eléctrico con decenas de láminas seleccionándolas manualmente una a una resulta lento y propenso a olvidos o cambios accidentales de escala. En Revit MEP, los **conjuntos de impresión (*View/Sheet Sets*)** permiten guardar agrupaciones estables por hito contractual (Anteproyecto, Ejecución, Licitación, *As-Built*), por revisión afectada o por tamaño de formato físico (láminas A1 frente a esquemas unifilares y detalles en A3). Dos parámetros resultan innegociables en planos eléctricos medibles: la colocación centrada y el **Zoom al 100 %**, quedando terminantemente desaconsejado utilizar *Fit to Page* (Ajustar a página), ya que reduce la escala real (por ejemplo, convirtiendo un 1:100 en 1:104) e invalida mediciones en obra. Asimismo, conviene definir si la entrega requiere PDF individuales con nomenclatura normalizada o un cuaderno PDF multipágina combinado con marcadores de lámina.

#### Conceptos clave
- **Conjuntos de impresión (*View/Sheet Sets*):** Listas guardadas de láminas en Revit que permiten reemitir exactamente el mismo paquete documental tras cualquier revisión sin reelección manual.
- **Zoom 100 % frente a *Fit to Page*:** Solo el escalado al 100 % sobre el tamaño exacto de cartela conserva la escala métrica de diseño (`1:50`, `1:100`); *Fit to Page* introduce distorsión dimensional silenciosa.
- **PDF combinado vs. archivos individuales:** Los PDF individuales facilitan plataformas de licitación, control documental por revisión (CDE) y sustitución de planos sueltos, mientras el PDF combinado sirve como cuaderno rápido de revisión o impresión completa.
- **Reglas de nomenclatura automatizada (*Naming Rules*):** Combinación de parámetros de lámina (`Sheet Number`, `Sheet Name`, `Current Revision` o códigos estándar tipo ISO 19650 orientativos) para nombrar automáticamente cada archivo sin edición manual posterior.

#### Definiciones necesarias
- **Conjunto de impresión (*Print Set*):** Selección nominada y almacenada de vistas o láminas dentro de Revit que define el alcance exacto de un lote de exportación o trazado.
- **Escala nominal impresa:** Relación dimensional exacta entre el dibujo en el archivo PDF y la realidad física (p. ej. 10 mm en pantalla/papel a escala 1:100 = 1,00 m en obra), verificable sobre la barra de escala gráfica.

#### Ejemplo práctico realista
Para una licitación de instalaciones eléctricas en un complejo deportivo, la oficina técnica debe entregar 24 láminas: 10 plantas generales y de alumbrado en formato ISO **A1 horizontal (841 × 594 mm)** y 14 esquemas unifilares y detalles constructivos en formato **A3 horizontal (420 × 297 mm)**. El coordinador configura dos conjuntos separados para entornos clásicos (`SET-EL-A1_Licitacion` y `SET-EL-A3_Licitacion`) —o un lote unificado en exportación nativa con detección automática de tamaño— fijando en ambos `Zoom: 100 %` y `Center`. En la regla de nombrado configura `<Sheet Number>_<Sheet Name>_Rev<Current Revision>.pdf`, generando automáticamente archivos trazables como `EL-101_Planta_Alumbrado_Nivel_00_Rev02.pdf` y un cuaderno combinado auxiliar con el índice completo.

> *Nota obligatoria de verificación normativa:* Las convenciones exactas de codificación de archivos PDF, estados de revisión y tamaños de formato exigidos en licitaciones públicas o Entornos Comunes de Datos (CDE, por ejemplo inspirados en **UNE-EN ISO 19650** o normativa administrativa nacional) deben verificarse siempre en el Pliego de Cláusulas Administrativas, el Plan de Ejecución BIM (BEP) del cliente y las instrucciones vigentes del país correspondiente.

#### Errores frecuentes
- Dejar activado *Fit to Page* («Ajustar a página») para «asegurar que no se corte el marco», deformando la escala 1:50 o 1:100 y provocando errores de replanteo en obra cuando alguien mide en PDF o papel.
- Imprimir vistas sueltas del navegador de proyectos en lugar de láminas maquetadas (*Sheets*), enviando documentos sin cartela, sin tabla de revisiones ni escala gráfica.
- Nombrar manualmente los PDF emitidos (`Plano1_final_DEFINITIVO_v2.pdf`), rompiendo el orden alfabético y ocultando el número de revisión oficial del cajetín.
- Mezclar láminas A1 y A3 en un único lote sobre una impresora virtual configurada en A1 fijo, generando documentos A3 rodeados de un enorme marco blanco vacío o viceversa recortando cartelas A1.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué la opción *Fit to Page* supone un riesgo grave en planos técnicos eléctricos aunque visualmente parezca encajar perfectamente el cajetín?
2. ¿Qué ventaja organizativa aporta guardar varios *Print Sets* separados por fase o formato en Revit antes de empezar a emitir revisiones?
3. ¿En qué situaciones conviene entregar archivos PDF individuales frente a un único PDF multipágina combinado?

---

### 3.2. Exportación nativa a PDF vs. impresoras virtuales PDF y compatibilidad de versiones

#### Explicación breve y clara
No todas las versiones de Revit manejan la generación de PDF del mismo modo, por lo que un proyectista profesional debe conocer la realidad operativa de cada entorno. A partir de **Revit 2022** (con mejoras sucesivas en Revit 2023, 2024 y 2025), Autodesk incorporó la **exportación nativa a PDF (*File > Export > PDF*)**, que permite detectar automáticamente el tamaño de papel de cada lámina (*Use Sheet Size*), mezclar formatos A0, A1 y A3 en una sola ejecución, aplicar reglas dinámicas de nombrado por parámetros y mejorar la generación de marcadores e hipervínculos internos. En cambio, en **Revit 2021 y versiones anteriores** (o cuando las directrices de un estudio exigen un controlador concreto para sellados corporativos), se utilizan **impresoras virtuales PDF** (Bluebeam PDF, Adobe PDF, PDFCreator, CutePDF o Microsoft Print to PDF), las cuales requieren definir tamaños de página personalizados en el controlador de Windows, separar los lotes por formato y gestionar manualmente o mediante scripts el nombrado de archivos.

#### Conceptos clave
- **Exportación nativa a PDF (Revit ≥ 2022):** Motor integrado sin drivers externos de impresora, con detección automática del formato de cartela (`Use Sheet Size`) y constructor paramétrico de nombres de archivo.
- **Impresoras virtuales PDF (Revit ≤ 2021 o flujos corporativos):** Controladores de impresión del sistema operativo; sufren limitaciones frecuentes con tamaños de papel grandes no estándar (como A0/A1 en *Microsoft Print to PDF* por defecto) y tienden a ser más lentas en vistas densas.
- **Hipervínculos y marcadores interactivos:** Capacidad de preservar enlaces clicables entre marcas de sección/*callout* en planta y las láminas de detalles correspondientes cuando se exporta de forma vectorial nativa.
- **Gestión de fuentes tipográficas:** Riesgo de sustitución o desplazamiento de textos cuando se usan tipografías exóticas no instaladas en el sistema o no incrustadas correctamente por controladores virtuales antiguos.

#### Definiciones necesarias
- **Exportación nativa PDF:** Funcionalidad integrada directamente en la aplicación BIM para convertir vistas y láminas en documentos PDF respetando parámetros internos de tamaño, nomenclatura y vectores sin depender de cola de impresión del sistema operativo.
- **Impresora virtual PDF:** Software controlador instalado como dispositivo de impresión en Windows que intercepta datos gráficos de cualquier programa para generar un archivo PDF según plantillas de papel preconfiguradas.

#### Ejemplo práctico realista
Un estudio de ingeniería colabora simultáneamente en dos obras: una reforma hospitalaria heredada en **Revit 2021** y un edificio logístico nuevo en **Revit 2024**, ambos con paquetes mixtos de 18 láminas (12 en A1 y 6 en A3).
- En **Revit 2024**, el técnico abre `Export > PDF`, selecciona el conjunto de 18 láminas, marca `Use Sheet Size` y `Zoom 100 %`, configura la regla de nombre `<Sheet Number>_<Sheet Name>_<Current Revision>` y obtiene los 18 PDF con tamaños exactos (841×594 mm y 420×297 mm) y textos seleccionables en aproximadamente 90 segundos.
- En **Revit 2021**, al intentar usar *Microsoft Print to PDF*, el controlador solo ofrece por defecto hasta tamaño A3/Tabloide, recortando las cartelas A1. El equipo debe cambiar a un controlador profesional (p. ej. PDFCreator o Bluebeam PDF), dar de alta los formatos A1 personalizados en el servidor de impresión, dividir la impresión en dos *Print Sets* separados (uno para A1 y otro para A3) y verificar que el escalado no haya cambiado entre lotes.

#### Errores frecuentes
- Asumir que un entorno antiguo (Revit 2020/2021) dispone de *Export > PDF* nativo, o intentar replicar tutoriales de versiones modernas sin comprobar la versión instalada en la oficina técnica o cliente.
- Imprimir láminas A1 mediante *Microsoft Print to PDF* sin configurar formatos de papel grandes personalizados, descubriendo que el documento resultante recortó la mitad derecha del plano y el cajetín.
- Emplear fuentes tipográficas no estándar descargadas de internet en la cartela y etiquetas, provocando desbordamientos de texto al abrir el PDF en la impresora virtual o en el visor del cliente.
- No desactivar la opción de abrir o confirmar cuadro de diálogo archivo por archivo en PDFCreator/Adobe PDF al imprimir 40 láminas individuales.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué ventajas concretas ofrece la exportación nativa a PDF introducida a partir de Revit 2022 frente al uso tradicional de impresoras virtuales?
2. ¿Qué problema técnico ocurre habitualmente al intentar imprimir láminas A1 o A0 con *Microsoft Print to PDF* y cómo se resuelve en entornos que aún operan en Revit 2021 o anterior?
3. ¿Por qué conviene estandarizar el proyecto con fuentes tipográficas universales (por ejemplo, Arial o Calibri) en cartelas y etiquetas antes de emitir planos en PDF?

---

### 3.3. Procesamiento vectorial frente a ráster, control de grosores de línea y transparencias

#### Explicación breve y clara
La nitidez técnica de un plano eléctrico en PDF depende directamente de si el motor de exportación genera **procesamiento vectorial** o **procesamiento ráster**. En el procesamiento **vectorial**, cada línea de canalización, símbolo, cota y carácter de texto se guarda como entidad geométrica matemática y fuente real: el instalador puede hacer zoom al 400 % o 800 % en una tableta en obra sin perder un píxel, seleccionar y buscar códigos de circuito (`C1-04`) y realizar mediciones precisas en visores PDF. En el procesamiento **ráster**, la lámina se convierte en una imagen de mapa de bits cuya claridad queda limitada a la resolución elegida (`Low` 72 dpi, `Medium` 150 dpi, `High` 300 dpi, `Presentation` 600 dpi) y cuyo peso en megabytes se dispara. Lo más crítico que todo técnico BIM debe saber es que **Revit fuerza automáticamente el procesamiento ráster aunque hayas elegido *Vector Processing*** en cuanto la vista contiene sombras, estilos visuales *Shaded / Consistent Colors / Realistic*, degradados, nubes de puntos o determinados usos de **transparencia en elementos y filtros**.

#### Conceptos clave
- **Procesamiento vectorial (*Vector Processing*):** Salida ligera, escalable infinitamente sin pixelado, con textos buscables (`Ctrl+F`) y apta para lectura de alta precisión en obra y licitación.
- **Procesamiento ráster (*Raster Processing*):** Salida basada en píxeles (`dpi`); necesaria únicamente en vistas 3D renderizadas/sombreadas o láminas con imágenes de fondo, pero contraproducente en plantas eléctricas técnicas.
- **Causas silenciosas de rasterización forzada:** Activación de *Shadows*, estilos visuales distintos de *Wireframe* / *Hidden Line*, uso de *Transparency* en sobrescrituras gráficas o filtros de vista (por ejemplo, hacer semitransparentes bandejas o cubiertas), o imágenes vinculadas con transparencia.
- **Calibración de grosores (*Line Weights*) y *Halftone*:** Control de la tabla numérica de espesores (números 1 al 16 según escala de vista) para que la instalación eléctrica (grosor 3 a 6) destaque nítidamente sobre la arquitectura vinculada en gris atenuado (*Halftone*) sin empastar textos ni símbolos.

#### Definiciones necesarias
- **Procesamiento vectorial:** Método de generación gráfica del archivo PDF que representa trazos, curvas y tipografías mediante ecuaciones matemáticas independientes de la resolución de pantalla o impresora.
- **Rasterización forzada:** Conversión automática a imagen de mapa de bits ejecutada por el motor de impresión/exportación de Revit cuando una vista en lámina contiene efectos gráficos incompatibles con la salida vectorial pura.
- ***Halftone* (Semitono):** Ajuste gráfico que atenúa el contraste (tonos grises claros) de categorías o vínculos arquitectónicos subyacentes permitiendo mantener el procesamiento vectorial sin recurrir a transparencias de superficie.

#### Ejemplo práctico realista
Un proyectista genera el PDF de una planta eléctrica de alumbrado y fuerza en falso techo a escala 1:50. Aunque en el diálogo de exportación seleccionó *Vector Processing*, el PDF de una sola lámina A1 pesa **48 MB**, tarda 40 segundos en abrirse y, al ampliar una cabecera de cuadro eléctrico, las etiquetas `C3-14 (3×2,5 mm²)` se muestran borrosas e imposibles de buscar con texto. Al inspeccionar la *View Template*, el coordinador detecta dos causas: (1) la vista estaba en estilo visual *Consistent Colors* en lugar de *Hidden Line*, y (2) el vínculo de climatización y las bandejas existentes tenían aplicada una **transparencia del 45 %** en *Visibility/Graphics* para «verse debajo». Se cambia el estilo de vista a *Hidden Line*, se sustituye la transparencia por **Halftone + patrón de línea discontinua fina** y se reexporta con *Vector Processing*: el archivo PDF pasa de **48 MB a 1,8 MB**, todos los textos quedan perfectamente buscables y cada símbolo a 2,5 mm resulta nítido al 800 % de zoom. Asimismo, en *Appearance* se verifica la opción *Color* (cuando los sistemas críticos usan código cromático reglamentario/de leyenda) frente a *Black Lines* (si la entrega exige plano monocromo, cuidando que no se pierda diferenciación entre redes).

#### Errores frecuentes
- Aplicar transparencia superficial del 30–60 % a arquitectura, mobiliario o bandejas en plantillas de planta sin saber que ello obliga a Revit a rasterizar toda la ventana gráfica de la lámina.
- Seleccionar calidad *Low (72 dpi)* o *Medium (150 dpi)* en una vista rasterizada con etiquetas pequeñas de 1,8 mm o 2,0 mm, haciéndolas completamente ilegibles al imprimir en papel o abrir en móvil.
- Exportar con *Black Lines* planos que dependían exclusivamente del color de los filtros (por ejemplo, verde para emergencia y azul para SAI sin cambio de patrón de línea), volviendo indistinguibles ambos sistemas cuando se imprime en blanco y negro.
- Usar grosores de línea 7 u 8 en líneas de circuito o contornos de luminarias a escala 1:100, creando borrones negros continuos donde las líneas cercanas se funden entre sí.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué cuatro condiciones en una vista de Revit fuerzan automáticamente el paso de procesamiento vectorial a procesamiento ráster aunque hayamos marcado *Vector Processing*?
2. ¿Cómo se logra visualmente que las instalaciones vinculadas de clima o arquitectura queden discretas en segundo plano sin activar transparencia ni provocar rasterización?
3. ¿Por qué conviene combinar cambios de **patrón de línea** (discontinuo, raya-punto) además de **color** en los filtros de sistemas críticos cuando un plano PDF puede acabar impreso en blanco y negro en obra?

---

### 3.4. Lista de chequeo de calidad previa a entrega (QA/QC PDF), asistencia con IA y puente a visualización

#### Explicación breve y clara
El mayor error en entregas BIM consiste en revisar únicamente la vista en la pantalla de Revit y enviar el archivo PDF generado sin abrirlo ni inspeccionarlo. La conversión a PDF puede cortar textos en el borde derecho, desactivar vínculos que quedaron sin cargar (*Unload*), mostrar regiones de recorte (*Crop Region*), ocultar elementos por límites de rango de vista o arrastrar filtros de diagnóstico QA rojos. Todo paquete PDF destinado a cliente, obra o licitación debe superar una **lista de chequeo de calidad sobre el propio PDF emitido** utilizando un visor externo (Adobe Acrobat, Bluebeam Revu o navegador/visor profesional). En esta etapa, ChatGPT o Claude resultan útiles para redactar listas de comprobación adaptadas al tipo de entrega (licitación pública vs. ejecución vs. *as-built*) y generar el índice o *Transmittal* a partir de un CSV anonimizado de láminas, sin subir jamás los planos PDF reales de clientes a chats públicos ni delegar la comprobación técnica en la IA. Con este paso culmina la documentación normativa del Bloque 4 y se abre el puente hacia el **Bloque 5 (Twinmotion)**: el juego de planos PDF es el documento técnico de obra; la visualización 3D fotorrealista comunicará la propuesta espacialmente sin sustituir nunca la documentación técnica ni la validación reglamentaria.

#### Conceptos clave
- **Inspección directa sobre el PDF final:** Revisión sistemática del archivo resultante en un visor PDF externo (zoom, búsqueda de texto, medición sobre escala gráfica, orden de páginas y marcadores), nunca solo en la interfaz de Revit.
- **Limpieza visual de entrega:** Comprobación obligatoria de que *Crop Regions*, planos de referencia auxiliares, marcas de sección sin colocar y filtros rojos de auditoría `QA` están ocultos antes de exportar.
- **Integridad de vínculos y cajetines:** Verificación de que el modelo de arquitectura/estructura está recargado (*Reload*), la fecha y revisión del cajetín coinciden con el *Transmittal* y todas las páginas mantienen orientación horizontal/vertical coherente.
- **Frontera Documentación PDF vs. Visualización Twinmotion:** Distinción estricta entre planos PDF técnicos acotados y validados por técnico competente (Bloque 4) y renders/recorridos visuales orientados a comunicación con el cliente (Bloque 5).

#### Definiciones necesarias
- **Lista de chequeo QA/QC de entrega (*Pre-Issue PDF Checklist*):** Protocolo estandarizado de puntos de control ejecutado sobre los documentos PDF finales antes de emitirlos formalmente para descartar errores de escala, legibilidad, vínculos o control documental.
- **Acta de emisión (*Transmittal Sheet*):** Registro formal que acompaña un envío de planos en PDF especificando destinatario, código y título exacto de cada plano, revisión vigente, formato de papel y propósito de la emisión (*Para información*, *Para licitación*, *Para construcción*).

#### Ejemplo práctico realista
Antes de subir 22 planos eléctricos en PDF al portal de licitación de un polideportivo municipal, la coordinadora BIM sigue dos pasos finales:
1. **Generación de checklist y *Transmittal* con IA (datos anonimizados):** Exporta el *Sheet List* desde Revit a un CSV eliminando los datos confidenciales del cliente y pide a Claude redactar el cuadro *Transmittal* de la emisión `Rev. 01 — Para Licitación` y un checklist de 10 puntos específicos de inspección PDF para planos de alumbrado e instalaciones enterradas. Revisa que los 22 números de plano (`EL-001` a `EL-122`), títulos y revisiones del *Transmittal* coinciden al 100 % con los cajetines.
2. **Inspección directa de los 22 PDF en visor externo:** Con la herramienta *Measure* (Calibración de medida) del visor PDF mide la barra de escala gráfica de 0–5 m en `EL-101` y comprueba que mide exactamente `50,0 mm` a escala 1:100 (detectando que una lámina A3 de detalles había sido exportada por descuido al 94 % y reexportándola al 100 %). Además, usa `Ctrl+F` sobre `"CGBT"` y `"IP65"` para verificar que el PDF es vectorial y buscable, y comprueba que ninguna vista muestra el borde rectangular del *Crop Region* ni alertas QA rojas.

#### Errores frecuentes
- Enviar los archivos PDF al cliente o subirlos a la plataforma de licitación nada más terminar la barra de progreso de Revit sin abrir ni revisar una sola página del PDF generado.
- Subir planos PDF completos con nombres de cliente, ubicación de infraestructuras o cuadros de mando a ChatGPT/Claude pidiendo «revisa si hay errores en mis planos».
- Dejar activa la visibilidad del *Crop Region*, puntos de referencia de nivel o vínculos CAD temporales de trabajo en una de las doce láminas del paquete.
- Pensar que un render o vídeo espectacular preparado posteriormente en Twinmotion (Bloque 5) puede suplir deficiencias de legibilidad, falta de escala o contradicciones en el juego de planos PDF.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué cinco comprobaciones mínimas deben realizarse directamente dentro de un visor PDF externo sobre el archivo ya exportado antes de enviarlo a obra o licitación?
2. ¿Cómo se comprueba en diez segundos dentro de un visor PDF si una lámina se ha generado como vector limpio a escala exacta 1:100 o como imagen rasterizada deformada?
3. ¿Qué diferencia técnica y contractual separa el juego de planos PDF del Bloque 4 respecto a las presentaciones visuales en Twinmotion que se abordarán en el Bloque 5?

---

## 4. Metodología didáctica

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
|---|---:|---|---|
| **1. Apertura y activación** | 20 min | Muestra dos archivos PDF de una misma planta eléctrica: uno de 45 MB pixelado y deformado por *Fit to Page*, y otro de 1,6 MB nítido y vectorial. Lanza la Actividad 1. | Inspecciona ambos PDF mediante zoom y búsqueda de texto, identifica síntomas visibles de mala configuración y formula hipótesis sobre su causa en Revit. |
| **2. Exposición guiada / Microlearning I** | 35 min | Explica la gestión de *Print Sets*, escala al 100 % vs. *Fit to Page*, reglas de nombrado y compara en directo la exportación nativa a PDF (Revit ≥ 2022) frente a impresoras virtuales PDF. | Registra diferencias operativas según versión de Revit, configura mentalmente los *Print Sets* por formato A1/A3 y comprende los riesgos de recortes en drivers virtuales. |
| **3. Análisis de caso práctico** | 45 min | Presenta el caso *Estación Intermodal del Norte — Licitación Rechazada por Defectos en PDF*, distribuye el informe de rechazo y guía equipos de 3-4 personas. | Diagnostica las 5 incidencias técnicas del paquete PDF rechazado (rasterización por transparencia, escala 95 %, texto no buscable, A1 en A3, filtro QA encendido) y diseña la solución. |
| **4. Exposición guiada / Microlearning II** | 30 min | Demuestra cómo localizar elementos con transparencia que fuerzan rasterización, calibrar *Line Weights* / *Halftone*, ejecutar el protocolo QA final en PDF y generar checklists/transmittals con IA segura. | Contrasta las causas de rasterización en *View Templates*, diseña estrategias cromáticas + patrón compatibles con blanco y negro, y valida el puente al Bloque 5 (Twinmotion). |
| **5. Taller práctico de aplicación y transferencia** | 65 min | Dirige la Actividad 2 (25 min: diagnosticar y depurar la configuración de exportación de una lámina rasterizada) y la Actividad 3 (40 min: elaborar el *Print Set*, reglas de nombrado, *Transmittal* con IA anonimizada y checklist QA del proyecto propio). | Ajusta configuraciones para pasar de ráster a vector, ejecuta medición sobre barra gráfica en PDF, construye su *Transmittal* a partir de CSV anonimizado y audita manualmente su paquete. |
| **6. Discusión guiada y puesta en común** | 25 min | Selecciona 3 participantes o grupos para exponer su protocolo de entrega PDF y los defectos reales detectados durante la auditoría sobre visor externo. | Presenta sus criterios de aceptación antes de emitir, compara soluciones entre Revit antiguo y moderno y corrige lagunas de su propio checklist. |
| **7. Síntesis, evaluación sumativa y cierre** | 20 min | Cierra el Módulo 4 integrando documentación, conciliación y emisión PDF; aplica el test sumativo y abre el puente motivador al Módulo 5 (Twinmotion). | Completa la prueba de cierre, realiza la autoevaluación del bloque documental y anota qué archivos necesitará preparar para visualización 3D. |
| **TOTAL** | **240 min** | | |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «Autopsia rápida de dos PDF: Vectorial perfecto vs. Ráster deformado»

- **Objetivo:** Reconocer de inmediato en un visor PDF externo las señales inequívocas de procesamiento ráster forzado, pérdida de escala y defectos de configuración en Revit.
- **Instrucciones para el alumnado:**
  1. Abrid en parejas (8 minutos) los dos archivos PDF de muestra (`PLANTA_A.pdf` y `PLANTA_B.pdf`) en vuestro visor PDF habitual.
  2. Realizad cuatro pruebas rápidas sobre ambos archivos: (a) comprobar el tamaño en MB; (b) ampliar al 400 % una etiqueta de circuito pequeña; (c) buscar con `Ctrl+F` la palabra `"CGBT"` o `"IP65"`; y (d) medir la barra de escala gráfica de 0–5 m (o comparar proporciones).
  3. Anotad qué archivo es apto para obra/licitación y enumerad en plenario (12 minutos) las posibles causas dentro de Revit que generaron los fallos en el archivo defectuoso.
- **Materiales necesarios:** Dos archivos PDF comparativos preparados por el formador (uno vectorial al 100 % y otro rasterizado con transparencia y ajustado a página) + ficha rápida de 4 comprobaciones.
- **Tiempo estimado:** 20 minutos (Fase 1).
- **Rol del formador:** Evitar revelar de entrada el origen del fallo; guiar las deducciones del grupo hasta que descubran la relación directa entre transparencia/estilo visual y peso en MB o pérdida de búsqueda textual.
- **Producto o entregable esperado:** Tabla comparativa completada con veredicto técnico y lista de causas probables en Revit MEP.
- **Criterios de éxito:** El alumnado identifica correctamente cuál PDF es vectorial al 100 %, explica por qué el otro falló al buscar texto y mide el error porcentual de escala causado por *Fit to Page*.

### Actividad 2 (Aplicación técnica): «Rescate de lámina rasterizada y calibración de impresión»

- **Objetivo:** Aplicar ajustes en plantillas de vista y configuración de exportación PDF en Revit MEP para recuperar la salida vectorial limpia, reducir el peso del archivo y asegurar legibilidad en color y blanco/negro.
- **Instrucciones para el alumnado:**
  1. En parejas (25 minutos), analizad la configuración de la vista y exportación de una lámina problemática: estilo *Consistent Colors*, vínculo arquitectónico con transparencia 50 %, filtro de red SAI diferenciado únicamente por color azul sin cambio de patrón, *Crop Region Visible* activado y ajuste de salida *Fit to Page*.
  2. Documentad paso a paso (o aplicad directamente sobre el archivo `.rvt` de práctica) las 5 correcciones necesarias en *View Template*, *Filters* y *PDF Export Setup* para lograr procesamiento vectorial a escala exacta 1:50 con menos de 3 MB de peso.
  3. Definid qué tamaño de papel exacto y qué regla de nomenclatura se aplicarán según si el equipo usa exportación nativa (Revit ≥ 2022) o impresora virtual PDF.
- **Materiales necesarios:** Ficha de diagnóstico técnico de la vista problemática (y proyecto Revit de práctica si hay licencia en aula).
- **Tiempo estimado:** 25 minutos (primera parte de la Fase 5).
- **Rol del formador:** Comprobar que nadie «resuelve» el problema subiendo la calidad ráster a 600 dpi (lo que crearía archivos gigantes sin recuperar vector ni búsqueda de texto), sino atacando la raíz en estilo visual, *Halftone* y transparencia.
- **Producto o entregable esperado:** Ficha de configuración corregida (o archivo PDF reexportado) con salida vectorial pura, patrones diferenciados y escala bloqueada al 100 %.
- **Criterios de éxito:** Eliminación total de causas de rasterización forzada, sustitución de transparencia por *Halftone*, diferenciación por patrón+color y correcta selección de Zoom 100 %.

### Actividad 3 (Transferencia a proyecto real): «Paquete de entrega PDF, *Transmittal* con IA segura y checklist QA»

- **Objetivo:** Diseñar el protocolo completo de emisión en PDF para el proyecto real del alumnado o proyecto integrador del curso, utilizando IA generativa sobre datos anonimizados para generar el acta de entrega y lista de chequeo adaptada.
- **Instrucciones para el alumnado:**
  1. Definid el inventario de láminas de vuestro proyecto agrupado en *Print Sets* según formato (A1/A3) y fase de entrega (Licitación o Ejecución).
  2. Exportad o preparad un índice tabular CSV **100 % anonimizado** (códigos de lámina ficticios o genéricos, formato, escala, revisión vigente, motivo de emisión — sin cliente, dirección ni importes confidenciales).
  3. Redactad un *prompt* para ChatGPT o Claude solicitando: (a) una tabla estructurada de *Transmittal* lista para acompañar el envío, y (b) un checklist de inspección QA/QC de 10 puntos en visor PDF específico para vuestra tipología de proyecto (por ejemplo, nave industrial vs. clínica o local comercial).
  4. Auditad la respuesta de la IA completando los criterios medibles exactos (tolerancia de escala gráfica, umbral máximo de tamaño de archivo, comprobación de hipervínculos y verificación final de firma técnica independiente) en la **Plantilla de Emisión y QA de PDF** (Sección 8).
- **Materiales necesarios:** Plantilla de Emisión y QA de PDF (Sección 8), índice de láminas del proyecto y acceso a entorno autorizado de IA (o ficha offline).
- **Tiempo estimado:** 40 minutos (segunda parte de la Fase 5) + 25 minutos de exposición en la Fase 6.
- **Rol del formador:** Garantizar que el alumnado nunca sube archivos PDF reales a la IA y exigir criterios objetivos en el checklist («medir barra de 5 m = 50,0 mm ± 0,2 mm» en lugar de «ver si la escala parece bien»).
- **Producto o entregable esperado:** Dossier de Emisión PDF del proyecto (configuración de *Print Sets*, regla de nombrado, *Transmittal* auditado y checklist QA/QC de 10 puntos verificado).
- **Criterios de éxito:** Coherencia total de lotes y escalas, anonimización estricta en el *prompt*, ausencia de errores de correspondencia entre índice y cajetines, y diferenciación clara respecto al entregable visual de Twinmotion (Bloque 5).

---

## 6. Caso práctico

### Estación Intermodal del Norte — Paquete PDF rechazado en licitación a 24 horas del cierre

#### Contexto empresarial
**Consultora Eléctrica IberoBIM, S.L.** (22 empleados) actúa como ingeniería subcontratada para redactar las instalaciones eléctricas de baja tensión y alumbrado de la nueva área de vestíbulos y andenes de la **Estación Intermodal del Norte** (**3.800 m²**). El expediente final consta de **20 láminas**: 14 en formato A1 (plantas de fuerza, alumbrado, canalizaciones y puesta a tierra) y 6 en formato A3 (esquemas unifilares y láminas de detalles constructivos).

#### Situación o problema
El cliente principal envía los 20 planos generados por un modelador de guardia a la plataforma de validación técnica de la propiedad contratante. Cuatro horas más tarde, el sistema y el revisor técnico **rechazan formalmente la entrega completa** devolviendo cinco incidencias bloqueantes a falta de 24 horas para el cierre del plazo:
1. **Tamaño total desmesurado y texto ilegible:** El archivo combinado de 20 láminas pesa **312 MB**; al abrir `EL-104` (alumbrado exterior y andenes) y hacer zoom al 200 %, todas las etiquetas `LUM-02 (42 W)` y líneas de circuito salen dentadas/pixeladas y el comando buscar (`Ctrl+F`) no encuentra ningún texto.
2. **Escala adulterada en láminas A1:** Al medir la barra gráfica de 0–5 m en la lámina `EL-101` (escala nominal 1:100), la distancia impresa resulta de **47,2 mm** en lugar de **50,0 mm** (un error del 5,6 % que invalida toda medición de longitudes).
3. **Cartelas A3 cortadas y formato mixto roto:** El archivo se imprimió usando *Microsoft Print to PDF* con un único lote de 20 láminas; las 6 láminas A3 aparecieron centradas dentro de lienzos tamaño A1 con inmensos márgenes blancos, mientras dos láminas A1 de detalles quedaron recortadas en un borde.
4. **Filtros de auditoría y *Crop Regions* visibles:** En tres láminas (`EL-102`, `EL-105` y `EL-108`) se observan 9 luminarias pintadas en rojo chillón por el filtro `QA_Sin_Circuito` junto con los rectángulos negros de borde de recorte (*Crop Region*) rodeando cada plano.
5. **Nomenclatura errónea y vínculo descargado:** Los archivos individuales fueron renombrados a mano con errores (`EL-103_Alumbrado_FINAL.pdf` en lugar de `PRY-EL-103_Rev01.pdf`) y en `EL-106` falta por completo el fondo de arquitectura de la planta primera.

#### Datos disponibles

| Incidencia en el PDF rechazado | Configuración detectada en el archivo Revit de origen | Consecuencia en la evaluación de licitación |
|---|---|---|
| **Peso 312 MB / texto pixelado sin `Ctrl+F`** | *View Template* con estilo *Consistent Colors*, sombras encendidas y 40 % de transparencia en cubierta arquitectónica; exportación cayó en ráster a 150 dpi. | Imposible leer etiquetas pequeñas en andenes ni hacer búsquedas automáticas de circuitos en visor PDF. |
| **Barra gráfica 47,2 mm (error −5,6 %)** | Configuración de impresión marcada en *Zoom: Fit to Page* en vez de *Zoom: 100 %*. | Incumplimiento de precisión métrica; riesgo grave si obra intenta medir recorridos de bandejas sobre PDF. |
| **Lienzos A1/A3 erróneos y recortes** | Lote único enviado por *Microsoft Print to PDF* (Revit 2021 sin exportación nativa) con papel fijo mal asignado. | Rechazo automático de formato por el gestor documental (CDE) de la propiedad. |
| **Alertas rojas QA + recuadros *Crop* + falta arquitectura** | Se imprimió con la plantilla de trabajo `TPL-EL-QA` en lugar de `TPL-EL-DOC`, con *Crop Region Visible* activado y el vínculo RVT de Planta 1 descargado localmente (*Unloaded*). | Imagen de proyecto inacabado con luminarias sin asignar a circuito y ausencia de referencia constructiva. |

#### Preguntas de análisis
1. ¿Qué combinación exacta de ajustes en las *View Templates* y en las opciones de PDF eliminará la rasterización forzada devolviendo un paquete vectorial buscable de menos de 20–30 MB totales?
2. ¿Cómo debe procederse en la gestión de *Print Sets* y tamaños de papel para solucionar las láminas A1 y A3 tanto si el estudio trabaja en Revit 2021 (impresora virtual) como si dispone de Revit 2022 o superior (exportación nativa)?
3. ¿Qué error subyacente del modelo revelan las 9 luminarias rojas visibles en `EL-102`, `EL-105` y `EL-108` (es decir, basta con apagar el filtro rojo o hay que corregir primero el modelo y los cuadros de cargas)?
4. ¿Qué protocolo de inspección directa en visor PDF habría evitado el rechazo de las 5 incidencias antes de pulsar «Enviar»?

#### Tarea a realizar
En equipos de 3-4 personas (30 minutos de trabajo + 15 de puesta en común), elaborad el **Plan de Rescate de Emisión PDF en 4 horas** para IberoBIM que incluya:
1. Lista secuencial de correcciones en el modelo Revit MEP (saneamiento de las 9 luminarias sin circuito, recarga de vínculo, cambio a plantilla `TPL-EL-DOC`, eliminación de transparencia/sombras/estilo *Consistent Colors* y ocultado de *Crop Regions*).
2. Configuración técnica exacta de exportación PDF para ambos escenarios de versión: **Escenario A (Revit 2024 nativo)** y **Escenario B (Revit 2021 con impresora virtual profesional)**.
3. Regla de nomenclatura automatizada y diseño del *Transmittal* para los 20 planos (listo para acompañar la entrega sin subir planos reales a IA).
4. Checklist definitivo de 8 comprobaciones obligatorias sobre los PDF ya generados en visor externo antes de autorizar la subida al portal de licitación.

#### Posibles soluciones o criterios de análisis
- **Saneamiento previo en modelo (nunca maquillar errores):** Jamás apagar simplemente el filtro `QA_Sin_Circuito` sin conectar las 9 luminarias; hay que asignarles circuito y cuadro reales, comprobar que las cargas y protecciones en cuadro/unifilar siguen verificadas, recargar el vínculo de arquitectura de Planta 1 (*Reload*), cambiar todas las vistas de lámina a la plantilla `TPL-EL-DOC` (estilo *Hidden Line*, sombras apagadas, *Crop Region Visible* desactivado, vínculo arquitectónico en *Halftone* sin transparencia superficial) y revisar el resto de vistas.
- **Configuración PDF (Escenario A — Revit 2024 nativo):** Seleccionar `File > Export > PDF`, elegir el conjunto de 20 láminas, marcar `Use Sheet Size` (detecta automáticamente los 14 A1 y los 6 A3), fijar `Zoom: 100 %`, `Vector Processing`, `Hide crop boundaries`, configurar `Naming Rule` (`PRY-<Sheet Number>_Rev<Current Revision>`) y generar tanto los 20 PDF individuales como un combinado para consulta.
- **Configuración PDF (Escenario B — Revit 2021 con impresora virtual profesional):** Configurar una impresora capaz de tamaños grandes (p. ej. Bluebeam PDF o PDFCreator), definir dos *Print Sets* separados (`SET-EL-A1` y `SET-EL-A3`), asignar tamaño exacto `ISO A1` al primer lote y `ISO A3` al segundo, fijar `Zoom: 100 %` + `Center`, `Vector Processing` + `Hide crop boundaries`, y verificar el renombrado estandarizado sin intervención manual propensa a fallos.
- **Verificación final sobre el PDF generado:** Abrir los 20 PDF en visor externo, verificar peso total (< 25 MB en lugar de 312 MB), probar `Ctrl+F` sobre etiquetas, medir con herramienta de distancia que la barra 0–5 m en `EL-101` marca exactamente `50,0 mm` a 1:100, comprobar presencia del fondo arquitectónico de Planta 1 y validar visualmente ausencia de alertas rojas o recortes de cajetín.

#### Preguntas de reflexión final
- ¿Por qué el tiempo ahorrado al saltarse la revisión final sobre el archivo PDF exportado suele convertirse en el mayor riesgo reputacional de una ingeniería ante el cliente?
- Una vez emitido este paquete PDF vectorial y conciliado al 100 %, ¿qué valor diferencial aporta pasar al Módulo 5 (Twinmotion) y qué límites nunca debe cruzar la visualización 3D?

---

## 7. Evaluación

### Evaluación diagnóstica
Sondeo inicial de 3 cuestiones rápidas:
1. ¿Qué diferencia técnica produce en un archivo PDF haber seleccionado *Fit to Page* frente a *Zoom: 100 %*?
2. Si activas sombras o transparencia del 50 % en una planta eléctrica de Revit, ¿qué ocurre con el archivo PDF exportado aunque hayas marcado *Vector Processing*?
3. ¿Qué diferencia existe en tu ordenador de trabajo entre generar un PDF en Revit 2024 frente a Revit 2020/2021?

### Evaluación formativa
- **Actividad 1:** Precisión al diagnosticar procesamiento ráster vs. vectorial, errores de escala y ausencia de búsqueda textual en los dos PDF de muestra.
- **Actividad 2:** Corrección técnica de la secuencia de rescate (sustitución de transparencia por *Halftone*, estilo *Hidden Line*, patrones + color y bloqueo al 100 %).
- **Fase 6 (Puesta en común):** Solidez de los criterios medibles incluidos en el checklist QA/QC del alumnado y rigor en la anonimización del *Transmittal* generado con IA.

### Evaluación sumativa
1. **Entregable del proyecto (Actividad 3):** Dossier de Emisión y QA de PDF compuesto por: definición de *Print Sets*, configuración exacta de exportación (nativa o virtual según entorno), regla de nomenclatura, *Transmittal* generado desde CSV anonimizado y checklist de 10 puntos de validación sobre el PDF emitido.
2. **Prueba objetiva corta de cierre de Bloque 4 (5 ítems):** Preguntas integradoras sobre causas de rasterización forzada, incompatibilidad de *Microsoft Print to PDF* con formatos grandes, escala al 100 %, manejo de filtros QA en emisión y frontera técnica entre plano PDF y render en Twinmotion.

### Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
|---|---|---|---|---|
| **Configuración de *Print Sets*, escalas y nomenclatura** | Exporta vistas sueltas sin cartela, utiliza *Fit to Page* alterando escalas o renombra archivos manualmente de forma inconsistente. | Agrupa láminas en conjuntos y fija escala 100 %, pero mezcla tamaños A1/A3 de forma errónea en impresora virtual o deja nombres ambiguos. | Configura *Print Sets* coherentes por formato y fase, garantiza *Zoom 100 %* y aplica reglas de nombrado automatizadas y trazables por revisión. | Estandariza lotes duales (individuales para CDE/licitación + combinado con marcadores), adaptando con precisión el método a la versión real de Revit disponible. |
| **Control vectorial vs. ráster, grosores y transparencias** | Genera PDF ráster gigantes e ilegibles sin entender la causa o depende únicamente del color sin diferenciación para impresión monocroma. | Identifica diferencias entre vector y ráster, pero mantiene transparencias que fuerzan rasterización parcial o deja grosores mal calibrados. | Garantiza salida vectorial limpia eliminando sombras/transparencias mediante *Halftone* y *Hidden Line*, con pesos calibrados y patrones compatibles en B/N. | Optimiza plantillas de emisión logrando archivos ligeros, textos 100 % buscables, contrastes jerarquizados y preservación de hipervínculos interactivos entre láminas. |
| **Protocolo QA/QC directo sobre el PDF emitido** | Entrega los archivos PDF sin abrirlos ni comprobar escalas, vínculos, recortes o filtros QA activos. | Revisa superficialmente alguna página del PDF, pero omite comprobar la escala gráfica medida o la presencia de todos los vínculos. | Ejecuta checklist completo en visor PDF externo validando medición sobre barra gráfica, búsqueda `Ctrl+F`, cajetines, revisión y limpieza visual. | Aplica auditoría integral documentada con verificación dimensional exacta, control de alertas previas en el modelo sin ocultarlas en falso y cero incidencias en entrega. |
| **Uso seguro de IA y diferenciación técnica (PDF vs. Twinmotion)** | Sube planos PDF completos con datos confidenciales a herramientas IA o confunde visualización 3D con documentación técnica aprobada. | Anonimiza parcialmente el índice CSV para la IA, pero incluye criterios vagos en el checklist o no define el alcance frente al Bloque 5. | Emplea CSV 100 % anonimizado para crear *Transmittal* y checklist QA auditados manualmente, diferenciando documentación normativa de visualización 3D. | Demuestra gobernanza documental completa: trazabilidad de entradas seguras a la IA, validación humana verificable y transición clara hacia el Módulo 5 (Twinmotion). |

### Actividad de autoevaluación
Checklist reflexivo de cierre del Módulo 4 (5 minutos): el alumnado puntúa de 1 a 4 su preparación práctica para entregar un juego completo de planos eléctricos en PDF verificando: (a) escalas exactas al 100 % sin deformación; (b) procesamiento vectorial ligero y buscable; (c) correspondencia estricta entre planos, detalles, cuadro de cargas, DIALux y especificaciones; y (d) protección de confidencialidad de clientes al utilizar asistentes de IA en tareas documentales. Anota el punto de mayor mejora antes de iniciar el Módulo 5.

---

## 8. Materiales y recursos

### Guion de diapositivas

- **Slide 1:** Portada — Bloque 4 · Tema 8: Impresión a PDF. El control de calidad final que convierte el modelo BIM en documentación contractual fiable.
- **Slide 2:** Activación — Dos PDF bajo la lupa: cómo detectar en 30 segundos rasterización, errores de escala y falta de búsqueda de texto.
- **Slide 3:** Conjuntos de impresión (*Print Sets*) y escalas reales — Separación por formatos A1/A3, *Zoom 100 %* obligatorio frente a la trampa de *Fit to Page* y reglas de nomenclatura.
- **Slide 4:** Exportación nativa a PDF vs. impresoras virtuales — Qué cambió desde Revit 2022 (`Use Sheet Size`, *Naming Rules*) y cómo trabajar de forma segura en Revit 2021 o con drivers virtuales.
- **Slide 5:** Vectorial vs. Ráster bajo el capó — Por qué sombras, estilos *Consistent Colors* y transparencias fuerzan rasterización; uso correcto de *Hidden Line*, *Halftone*, patrones y pesos de línea.
- **Slide 6:** Caso práctico *Estación Intermodal del Norte* — Análisis de los 5 defectos de rechazo en licitación y protocolo de rescate sin maquillar errores del modelo.
- **Slide 7:** Auditoría QA/QC del PDF en visor externo y uso seguro de IA — Medición sobre escala gráfica, `Ctrl+F`, limpieza visual y generación de *Transmittal* desde CSV anonimizado.
- **Slide 8:** Cierre del Bloque 4 y puente al Bloque 5 (Twinmotion) — Del plano técnico vectorial firmado a la comunicación fotorrealista 3D mediante *Direct Link*, sin confundir render con cumplimiento normativo.

### Ficha de trabajo
Documento práctico de 2 páginas con:
- Cuadro resumen «Causas de rasterización en Revit y su alternativa vectorial limpia».
- Guía comparativa rápida de configuración de impresión/exportación: Revit ≥ 2022 Nativo vs. Impresoras virtuales (Bluebeam / PDFCreator / Adobe).
- Plantilla de 10 pasos para inspección directa sobre visor PDF externo antes de emitir planos.

### Plantilla técnica práctica

**Plantilla de Control de Emisión PDF, *Transmittal* y Checklist QA/QC**

| Código de plano | Formato | Escala nominal | *Print Set* | Método y motor PDF | Procesamiento verificado (`Vector`/`Ráster`) | Peso PDF (MB) | Medición barra gráfica en visor PDF | Estado revisión y *Transmittal* |
|---|---|---|---|---|---|---|---|---|
| `EL-101` | ISO A1 | `1:100` | `SET-EL-A1` | Exportación nativa PDF (Zoom 100 %) | Vector (`Ctrl+F` OK) | 1,8 MB | Barra 5 m = `50,0 mm` (OK) | `Rev. 01` — Para licitación |
| `EL-104` | ISO A1 | `1:50` | `SET-EL-A1` | Exportación nativa PDF (Zoom 100 %) | Vector (Halftone sin transp.) | 2,3 MB | Barra 2 m = `40,0 mm` (OK) | `Rev. 01` — Para licitación |
| `EL-DET-01` | ISO A3 | `Como se indica` | `SET-EL-A3` | Exportación nativa PDF (Zoom 100 %) | Vector (Hipervínculos OK) | 1,1 MB | Barra 1 m (1:25) = `40,0 mm` (OK) | `Rev. 02` — Actualizado sellados |

### Lecturas y recursos recomendados
- Documentación oficial de Autodesk Revit sobre *Export to PDF* (versiones 2022 y posteriores), *Print Setup*, *Line Weights* y *Vector vs. Raster Processing*.
- Guías técnicas de referencia sobre revisión documental y gestión de entregas digitales en PDF para ingeniería y construcción (por ejemplo, recomendaciones de estructuración documental en entornos CDE basadas en **UNE-EN ISO 19650** y guías de estándares de intercambio PDF/A para archivo técnico a largo plazo).
- Manuales de buenas prácticas de visores técnicos PDF profesionales (por ejemplo, calibración de escala, comparación de revisiones *Overlay* y revisión de capas/marcadores).

> **Advertencia obligatoria de validación:** Las opciones de interfaz y capacidades exactas de exportación nativa PDF dependen estrictamente de la versión concreta de Revit instalada (disponible de forma nativa desde Revit 2022; sujeta a impresoras virtuales en versiones anteriores). Asimismo, cualquier requisito de formato de archivo, nomenclatura CDE, visado digital, firma electrónica o estándar PDF/A debe verificarse previamente frente a los pliegos vigentes del cliente, colegio profesional o administración contratante del país aplicable.

### Glosario de términos clave

| Término | Definición |
|---|---|
| **Acta de emisión (*Transmittal*)** | Documento índice que acompaña formalmente un envío de archivos PDF detallando códigos de lámina, títulos, revisión vigente, formato y finalidad de la entrega. |
| **Calibración de escala en visor PDF** | Verificación dimensional realizada directamente sobre el PDF emitido midiendo su barra de escala gráfica para confirmar que equivale exactamente al 100 % nominal. |
| **Exportación nativa PDF** | Herramienta integrada en Revit (desde versión 2022) para generar archivos PDF directamente con detección automática de tamaño de lámina y reglas de nombrado paramétricas. |
| ***Fit to Page* (Ajustar a página)** | Opción de escalado automático que adapta el dibujo al área imprimible de una hoja cambiando arbitrariamente la escala nominal; prohibida en planos técnicos medibles. |
| ***Halftone* (Semitono)** | Propiedad gráfica de atenuación tonal empleada para dejar en segundo plano arquitectura o vínculos manteniendo el procesamiento vectorial sin usar transparencias. |
| ***Print Set* (Conjunto de impresión)** | Selección guardada de vistas o láminas dentro del proyecto Revit para automatizar la generación repetible de lotes de impresión o exportación PDF. |
| **Procesamiento ráster** | Conversión gráfica de una lámina en imagen de mapa de bits definida por puntos por pulgada (`dpi`), generando archivos pesados con pérdida de nitidez al ampliar. |
| **Procesamiento vectorial** | Generación de un documento PDF basado en entidades geométricas matemáticas y fuentes reales buscables, manteniendo nitidez infinita a cualquier nivel de zoom. |

---

## 9. Adaptaciones

### Sesión presencial
- Proyectar en pantalla grande un visor PDF haciendo zoom al 600 % en paralelo sobre el PDF vectorial (1,8 MB) y el PDF rasterizado (48 MB) de la misma lámina para fijar de forma visual e inolvidable el impacto de las transparencias y estilos sombreados en Revit.
- Imprimir en papel un plano con error intencionado de *Fit to Page* (94 %) para que el alumnado mida físicamente la barra de escala gráfica con escalímetro y descubra la desviación dimensional.

### Sesión online síncrona
- Subir al repositorio de la sesión los archivos `PLANTA_A.pdf` y `PLANTA_B.pdf` junto con un índice CSV anonimizado para que todo el alumnado realice en vivo las pruebas de peso, zoom, `Ctrl+F` y medición en su propio visor PDF durante la Actividad 1.
- Compartir una pantalla de Revit mostrando el panel *Export > PDF* (o *Print Setup* en caso de versión clásica) mientras los participantes dictan paso a paso cada casilla que debe marcarse o desmarcarse antes de exportar.

### Sesión asíncrona
- **Pre-trabajo (20 minutos antes de la sesión):** Vídeo breve comparando *Vector* vs. *Raster Processing* y encuesta previa sobre qué versión de Revit y qué impresora o exportador PDF utilizan habitualmente en su trabajo o estudio.
- **Post-trabajo (30 minutos después de la sesión):** Entrega en el campus del **Dossier Final de Emisión PDF** del Bloque 4: conjunto de al menos 3 láminas exportadas en PDF vectorial al 100 % (o ficha detallada de configuración), *Transmittal* generado desde CSV anonimizado y checklist QA/QC de 10 puntos completado con evidencias de verificación.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Cierra e integra todos los aprendizajes del **Bloque 4 (Temas 1 a 7)**: plantillas de visualización (Tema 1), clasificación de sistemas (Tema 2), escalas y niveles de detalle (Tema 3), textos y etiquetas (Tema 4), símbolos y filtros (Tema 5), cartelas, detalles y revisiones (Tema 6) y conciliación con especificaciones técnicas (Tema 7).
- **Competencias que desarrolla:** Gestión profesional de entregas documentales BIM, optimización técnica de salidas PDF vectoriales multiformato, auditoría de calidad previa a licitación/obra y trazabilidad responsable asistida por IA.
- **Conexión dentro del plan de 6 módulos / 50 temas:**
  - *Tema anterior (Bloque 4, Tema 7 — Especificaciones técnicas):* Garantiza que los planos, detalles y tablas estrictamente conciliados con el pliego de condiciones y los cálculos previos salgan al exterior con total fidelidad dimensional y gráfica en formato PDF.
  - *Tema posterior (Bloque 5, Tema 1 — Introducción a Twinmotion y su integración con Revit):* Marca la transición desde la documentación técnica normativa (planos PDF del Módulo 4) hacia la comunicación visual tridimensional en tiempo real (renders, iluminación realista y recorridos en Twinmotion del Módulo 5), recordando que la presentación visual complementa y nunca sustituye al juego de planos PDF ni al cálculo reglamentario.
- **Evidencia de aprendizaje que dejará el alumnado:** Paquete documental final del Módulo 4 en formato PDF vectorial verificado al 100 % (con barra gráfica comprobada, nomenclatura trazable, *Transmittal* generado sobre CSV anonimizado y checklist QA/QC completo).

---

## Siguientes pasos para el formador

1. **Preparar los dos archivos PDF de diagnóstico (`PLANTA_A.pdf` y `PLANTA_B.pdf`):** Verificar que ambos abren sin problemas en los visores estándar del aula (navegador, Adobe Reader, Bluebeam) y que la diferencia de peso, pixelado, `Ctrl+F` y medición en escala gráfica es inequívoca.
2. **Aclarar la versión de Revit del grupo:** Si hay alumnado trabajando con Revit 2021 o anterior junto a usuarios de Revit 2022–2025, dedicar 5 minutos extra a mostrar cómo configurar tamaños A1/A0 personalizados en impresoras virtuales para no dejar a nadie atrás.
3. **Cerrar formalmente el hito del Bloque 4:** Confirmar que cada participante guarda su paquete PDF del proyecto integrador como base documental validada antes de abrir el entorno de renderizado del Bloque 5.
4. **Tender el puente al Bloque 5 (Tema 1 — Introducción a Twinmotion y su integración con Revit):** Despedir la sesión lanzando el siguiente reto: «Nuestros planos técnicos PDF son ahora impecables para construir, licitar y verificar en obra; pero cuando un cliente no técnico o un comité directivo quiere *ver* cómo quedarán iluminados y equipados los espacios antes de empezar la obra, ¿cómo conectamos este mismo modelo de Revit con Twinmotion sin romper nuestro trabajo BIM?».
