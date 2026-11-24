# Tema 2. Uso de ChatGPT y Claude como asistentes para proyectos eléctricos

> **Aviso técnico, normativo y de responsabilidad profesional:** Este módulo forma parte del programa de especialización técnica *IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas* (no constituye un MBA ni habilita legalmente para firmar proyectos eléctricos sin la titulación y colegiación exigidas en cada jurisdicción). Las capacidades concretas, límites de ventana de contexto, planes de privacidad y funciones de archivo de ChatGPT y Claude evolucionan con cada versión y deben verificarse en su documentación oficial vigente antes de su uso en entornos profesionales. Asimismo, toda referencia normativa citada (REBT en España, IEC 60364, NEC/NFPA 70 o UNE-EN 12464-1) tiene carácter meramente ilustrativo y exige comprobación directa de la edición aplicable por parte del técnico competente.

---

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Tema 2. Uso de ChatGPT y Claude como asistentes para proyectos eléctricos |
| **Bloque y posición dentro del programa** | Bloque 6: Inteligencia artificial aplicada a instalaciones eléctricas — Tema 2 de 11 (Tema 41 de 50 del programa) |
| **Programa formativo** | IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas (Especialización Técnica en Ingeniería Eléctrica, BIM, Iluminación, Renderizado e IA Asistida — 6 módulos / 50 temas) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Haber completado el Tema 1 del Bloque 6 (límites de los LLMs, anonimización básica y responsabilidad técnica), saber exportar tablas de planificación desde Revit MEP (Bloques 3–4) e informes resumen desde DIALux (Bloque 2), y manejo intermedio de hojas de cálculo (CSV/Excel) |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado estructurará y ejecutará flujos de trabajo reproducibles con ChatGPT y Claude para analizar tablas CSV/Excel anonimizadas procedentes de Revit MEP y DIALux sobre proyectos o contextos documentales extensos, aplicando un procedimiento de anonimización estricta previo a la carga y un protocolo de doble verificación sobre cada dato técnico generado. |

---

## 2. Objetivos de aprendizaje

Al finalizar esta sesión de 4 horas, el alumnado será capaz de:

1. **Describir** las diferencias operativas clave entre los flujos de trabajo con ChatGPT y Claude en proyectos eléctricos (espacios de proyecto con contexto persistente, manejo de documentos extensos, análisis tabular y controles de privacidad según plan vigente). *(Nivel de Bloom: Recordar)*
2. **Explicar** por qué la preparación limpia de exportaciones CSV o Markdown desde Revit MEP y DIALux reduce errores de lectura frente a la carga directa de PDFs con tablas maquetadas o celdas combinadas. *(Nivel de Bloom: Comprender)*
3. **Aplicar** un protocolo de anonimización en cinco pasos con tabla local de alias sobre documentos de proyecto y exportaciones tabulares antes de cargarlos en un asistente de IA. *(Nivel de Bloom: Aplicar)*
4. **Comparar** el comportamiento de ChatGPT y Claude al procesar un mismo conjunto de datos técnicos anonimizados (cuadro de circuitos Revit + resumen de locales DIALux), identificando omisiones de filas, errores de agrupación o supuestos no solicitados. *(Nivel de Bloom: Analizar)*
5. **Validar** mediante un protocolo de doble verificación (contraste contra archivo origen + comprobación independiente en hoja de cálculo o reglamento vigente) cada dato técnico emitido por el asistente antes de integrarlo en el proyecto. *(Nivel de Bloom: Evaluar)*

---

## 3. Contenidos esenciales

### 3.1. Comparación práctica de flujos de trabajo: ChatGPT vs. Claude en proyectos eléctricos

#### Explicación breve y clara
Tanto **ChatGPT** (OpenAI) como **Claude** (Anthropic) son asistentes conversacionales basados en LLMs muy capaces para tareas de ingeniería eléctrica y coordinación documental, pero su rendimiento práctico depende menos de «cuál es mejor en abstracto» y más de cómo organiza el técnico el **contexto de proyecto**, los **archivos de entrada** y las **reglas de salida**. En flujos reales de oficina técnica destacan tres funcionalidades transversales (cuya disponibilidad exacta depende del plan, versión y fecha de consulta):

1. **Espacios de trabajo o proyectos con contexto persistente** (p. ej. *Projects* en Claude o *Projects* / instrucciones personalizadas en ChatGPT): permiten fijar un marco de referencia común —país orientativo, sistema de unidades SI, nomenclatura de cuadros, formato de respuesta obligatorio— para no repetir el contexto en cada consulta y acotar el comportamiento del modelo.
2. **Gestión de contextos largos:** útil cuando se contrastan extractos extensos de memorias descriptivas, pliegos de condiciones técnicas o tablas con decenas de circuitos y locales. No obstante, una ventana de contexto amplia no garantiza atención uniforme a cada fila: en listados largos puede producirse pérdida de precisión en filas intermedias («efecto valle» en mitad del contexto).
3. **Análisis asistido de datos tabulares y generación de salidas estructuradas:** capacidad para detectar patrones, comparar columnas o generar plantillas CSV/Markdown o fórmulas de Excel, siempre recordando que toda cifra generada debe verificarse de forma independiente y que las políticas de privacidad y entrenamiento deben revisarse en el panel vigente de cada plataforma.

#### Conceptos clave
- **Proyecto con instrucciones base (*System/Project Instructions*):** contenedor donde se definen criterios fijos del encargo (unidades SI, código de cuadros, regla de no inventar normas y formato de tabla de verificación).
- **Ventana de contexto y dilución atencional:** límite de texto que el modelo procesa a la vez; aunque quepan decenas de páginas, cargar documentos sin filtrar diluye los datos críticos y eleva el riesgo de omisiones.
- **Flujo comparativo A/B:** someter una tarea documental o de revisión tabular (anonimizada) a ambos entornos bajo las mismas restricciones para evaluar claridad estructural, fidelidad a los datos de entrada y tasa de omisión.
- **Gobernanza de privacidad por plataforma:** comprobación obligatoria de si la cuenta (gratuita, profesional o corporativa) desactiva por defecto o permite desactivar el uso de archivos y chats para entrenamiento del modelo.

#### Definiciones necesarias
- **Contexto persistente de proyecto:** conjunto de archivos anonimizados de referencia e instrucciones de trabajo cargados en un espacio dedicado del asistente para mantener coherencia terminológica durante varias sesiones de un mismo expediente.
- **Degradación en contexto largo:** pérdida progresiva de exactitud al localizar valores concretos o comparar filas dentro de documentos muy extensos, habitual cuando se cargan anexos completos sin segmentación previa.

#### Ejemplo práctico realista
Un estudio de ingeniería prepara la revisión documental de un edificio terciario de 3 plantas (`PROY_TERC_09`, datos ficticios). En lugar de abrir un chat suelto y pegar 40 páginas de pliego junto con un PDF de planos, el ingeniero crea un espacio de proyecto dedicado en Claude y otro equivalente en ChatGPT con unas instrucciones fijas de 12 líneas: *«Idioma: español de España. Unidades SI obligatorias (W, kW, kVA, A, V, m, lx, U0, UGR). Prohibido citar artículos normativos si no figuran en los documentos adjuntos; si falta una norma, escribe `[VERIFICAR REGLAMENTO LOCAL]`. Devuelve siempre una columna `Fila_Origen`»*. Al probar una misma exportación CSV de 32 locales de DIALux, comprueba que la respuesta estructurada en bloques pequeños (15 filas por consulta) mantiene el 100 % de las filas rastreables, mientras que pegar un PDF maquetado de 25 páginas provoca que uno de los asistentes salte 3 locales de la planta segunda.

#### Errores frecuentes
- Dar por hecho que una función, modelo o límite de archivo vigente hace seis meses sigue exactamente igual sin comprobar la versión actual de ChatGPT o Claude.
- Cargar expedientes enteros de 150 páginas en una sola consulta esperando una auditoría minuciosa línea por línea sin segmentar por capítulos o sistemas.
- Mezclar varios proyectos distintos dentro de una misma conversación o espacio de proyecto, contaminando los parámetros de tensión, país o luminarias.
- Usar cuentas gratuitas con entrenamiento habilitado para pruebas con archivos de proyectos reales.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué ventajas aporta trabajar con un espacio de proyecto e instrucciones persistentes frente a chats aislados en un proyecto eléctrico?
2. ¿Por qué conviene fragmentar tablas extensas o capítulos largos antes de analizarlos en ChatGPT o Claude aunque la ventana de contexto admita todo el documento?
3. ¿Qué comprobaciones de versión y privacidad debe hacer un técnico antes de adoptar un flujo con ChatGPT o Claude en su oficina?

---

### 3.2. Preparación y limpieza de tablas CSV/Excel exportadas desde Revit y DIALux

#### Explicación breve y clara
Una parte enorme de los errores atribuidos a «fallos de la IA» en ingeniería nace de introducir datos en formatos hostiles para su lectura tabular: PDFs con tablas partidas entre páginas, hojas Excel llenas de celdas combinadas, filas de subtotales intermedios, títulos decorativos en las primeras 8 filas o unidades mezcladas en la misma celda (`150 W` junto a `0,25 kW` o `15 m` junto a `1500 cm`).

Para analizar con fiabilidad exportaciones de **Revit MEP** (tablas de planificación de circuitos, *panel schedules* exportados, listados de luminarias o *conduits*) y **DIALux** (tablas de locales, resumen de zonas de cálculo y listas de luminarias), el técnico debe aplicar una **normalización tabular previa**:
- **Encabezados en una sola fila** con nombres inequívocos y unidad SI explícita (`Potencia_W`, `Longitud_m`, `Iluminancia_Em_lx`, `Uniformidad_U0`).
- **Sin celdas combinadas ni subtotales mezclados** entre filas de datos.
- **Separación de formato:** exportar a `.csv` (delimitado por comas o punto y coma consistente) o pegar fragmentos limpios en tabla Markdown, evitando el formato visual complejo del libro Excel cuando no sea necesario.
- **Identificador único por fila** (`ID_Fila` o `Circuito_ID` / `Local_ID`) para poder auditar después qué fila analizó exactamente el asistente.

#### Conceptos clave
- **Tabla plana normalizada (*Tidy Data*):** estructura donde cada fila es un único elemento (un circuito eléctrico o un local) y cada columna representa una sola variable con unidad homogénea.
- **Unidades en cabecera vs. celda:** escribir `Potencia_W` con valor `1800` evita mezclas con texto que rompen análisis cuantitativos o agrupaciones.
- **Trazabilidad por clave única:** columna `ID_Registro` (`C-01`, `LOC-04`) que obliga al LLM a referenciar el registro exacto en sus observaciones.
- **Límites de interoperabilidad reales:** Revit exporta tablas de planificación a `.txt`/`.csv` o vía complementos/Dynamo según versión; DIALux genera informes PDF/XLS/RTF/CSV según vista; no existe una sincronización mágica directa que exima al técnico de revisar los archivos puente.

#### Definiciones necesarias
- **CSV (*Comma-Separated Values*):** formato de texto plano tabular donde cada registro ocupa una línea y los campos se separan mediante un delimitador estándar, eliminando estilos visuales, fórmulas ocultas o celdas combinadas.
- **Contaminación de esquema tabular:** presencia de filas de cabecera repetidas, notas al pie intercaladas, celdas combinadas o cambios de unidad dentro de una misma columna que inducen a error al asistente de IA.

#### Ejemplo práctico realista
Desde Revit MEP, una coordinadora exporta un *panel schedule* a formato delimitado por tabulaciones/Excel. El archivo bruto trae 6 filas iniciales con logotipo y nombre del cuadro, celdas combinadas para las fases `L1 / L2 / L3`, potencias mezcladas en `VA` y `kVA` y filas vacías de reserva sin código. Antes de subirlo, dedica 4 minutos en hoja de cálculo a transformarlo en una tabla limpia `Revit_Panel_CGMP_Limpio.csv` con las columnas: `ID_Fila | Cuadro | Circuito | Descripcion_Anon | Fase | Potencia_Aparente_VA | Longitud_Est_m | Calibre_Modelado_mm2 | Estado`. De forma análoga, convierte el resumen de 12 locales de DIALux en `DIALux_Locales_Limpio.csv` con `ID_Local | Uso_Tipo | Area_m2 | Em_lx | U0 | UGR | P_Ilum_W | N_Luminarias`. Al cargar ambos CSV limpios, tanto ChatGPT como Claude emparejan sin errores el número de luminarias modeladas en cada local con los circuitos correspondientes.

#### Errores frecuentes
- Subir capturas de pantalla borrosas o PDFs de *panel schedules* de Revit a doble página donde el asistente malinterpreta a qué fase pertenece cada circuito.
- Dejar mezclados valores con coma decimal y punto decimal o mezclar `W` y `kW` en la misma columna sin normalizar.
- Exportar tablas de Revit con filas «Resumen Total» al final y olvidar excluirlas al pedir sumatorios o medias al asistente.
- Suponer que el LLM lee automáticamente pestañas ocultas o fórmulas complejas dentro de un libro `.xlsx` si solo se copia una vista parcial.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué cinco características debe cumplir una tabla CSV exportada de Revit MEP o DIALux antes de analizarla con un LLM?
2. ¿Por qué la inclusión de unidades SI directamente en el nombre de cada columna evita errores frecuentes de análisis?
3. ¿Cómo ayuda una columna `ID_Fila` a detectar si ChatGPT o Claude ha omitido registros al revisar un listado de 30 circuitos o locales?

---

### 3.3. Anonimización estricta de clientes y documentos antes de cualquier carga

#### Explicación breve y clara
Antes de pulsar «adjuntar archivo» en ChatGPT o Claude, el proyectista debe ejecutar un **control de frontera de seguridad**. Aunque la interfaz parezca un entorno de trabajo privado, todo envío a un servidor externo sin autorización explícita y sin acuerdo corporativo de retención cero representa un riesgo de divulgación de datos del cliente, secretos de proceso industrial, ubicaciones críticas o datos personales de técnicos firmantes.

La **anonimización estricta** no consiste solo en borrar el nombre de la empresa de la línea 1. Requiere limpiar sistemáticamente: (1) identificadores comerciales y fiscales (razón social, marcas, NIF/CIF, códigos de contrato), (2) localización física (dirección, parcela, coordenadas, nombres de edificios reconocibles), (3) datos personales (autores, revisores, correos, teléfonos, firmas), (4) información económica sensible (precios unitarios, márgenes, ofertas de licitación), y (5) metadatos internos del archivo (`Autor`, `Organización`, `Comentarios`, rutas de red en encabezados). El mapeo real se conserva únicamente en una **tabla local de correspondencias** que jamás abandona la red del estudio.

#### Conceptos clave
- **Protocolo de anonimización en 5 pasos:** (1) Copiar a carpeta temporal de salida IA; (2) Eliminar columnas no técnicas y económicas; (3) Sustituir identificadores mediante tabla local de alias; (4) Limpiar propiedades/metadatos del documento; (5) Inspección visual rápida + búsqueda (`Ctrl+F`) de palabras clave sensibles antes de subir.
- **Tabla local de alias (*Key Lookup Table*):** archivo guardado exclusivamente en local (p. ej. `00_ALIAS_PRIVADO_NO_SUBIR.xlsx`) que traduce `Cliente Real S.A.` $\rightarrow$ `CLI-01` o `Sala Servidores Ala Norte` $\rightarrow$ `LOC-08`.
- **Saneamiento de texto libre en descripciones:** revisar la columna `Descripción` o `Comentarios` de Revit porque los modeladores suelen escribir nombres reales de máquinas, marcas confidenciales o nombres de usuarios (`Despacho Dirección Sra. Martínez`).
- **Regla de no subida de nativos ni planos completos:** no cargar archivos `.rvt`, `.dwg`, `.ifc` completos ni juegos de planos PDF con carátula en asistentes públicos; extraer únicamente texto o CSV anonimizado.

#### Definiciones necesarias
- **Reidentificación indirecta:** posibilidad de deducir la identidad de un cliente o instalación crítica combinando pistas secundarias dejadas en el texto (como códigos internos de edificio, nombres de calles en la descripción de una acometida o denominaciones únicas de líneas de producción).
- **Saneamiento de metadatos:** borrado de información oculta en las propiedades del archivo (autor, empresa, rutas locales de servidor, historial de cambios y comentarios) antes de compartirlo fuera de la organización.

#### Ejemplo práctico realista
Al preparar un listado de 24 circuitos exportado de Revit para analizarlo en Claude, un proyectista observa que la columna `Nombre_Carga` incluye entradas como: *«Acometida Sala Control Banco Atlántico — Sucursal Calle Mayor 14»*, *«SAI Rack 2 — Planta 3 Pedro Gómez»* y *«Clima Exterior — Ref. Contrato 2026-BA-99»*. Si hubiera subido el CSV tal cual, habría filtrado cliente, dirección, empleado y referencia contractual. Aplicando el protocolo en 5 pasos, sustituye esos textos por `CARGA_CRIT_01`, `SAI_RACK_02` y `CLIMA_EXT_01`, borra la columna de observaciones personales, elimina las propiedades de autoría del CSV/Excel y comprueba con `Ctrl+F` que ni el nombre del banco ni la calle aparecen en ninguna celda antes de cargar el archivo.

#### Errores frecuentes
- Reemplazar el nombre del cliente en el título del archivo pero dejarlo intacto dentro de las descripciones de los circuitos o locales (`Despacho Gerencia Empresa X`).
- Subir la tabla local de alias en el mismo chat o carpeta de proyecto de la IA por descuido al seleccionar varios archivos a la vez.
- Copiar y pegar un bloque grande de Excel en el chat sin advertir que incluía columnas ocultas a la derecha con precios o datos de contacto.
- Asumir que anonimizar solo aplica a hospitales o bancos y omitirlo en pymes, comercios o viviendas con datos personales de propietarios.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué puede producirse una fuga de confidencialidad incluso cuando se ha borrado el nombre del cliente de la primera fila de una tabla?
2. ¿Qué cinco pasos componen el protocolo práctico de anonimización antes de subir archivos a ChatGPT o Claude?
3. ¿Dónde debe guardarse la tabla de correspondencias de alias y qué ocurriría si se cargase en la misma carpeta de proyecto del asistente?

---

### 3.4. Protocolo de doble verificación de cada dato técnico emitido

#### Explicación breve y clara
Incluso con tablas CSV limpias, instrucciones precisas y datos anonimizados, ChatGPT y Claude pueden cometer errores de interpretación: sumar mal una columna al redactar el resumen, confundir potencia activa (W) con aparente (VA), intercambiar dos códigos de local parecidos (`LOC-11` y `LOC-12`), proponer valores límite reglamentarios inventados o suavizar discrepancias para dar una respuesta complaciente.

Por eso, en ingeniería eléctrica aplicada se implanta un **Protocolo de Doble Verificación Obligatoria** en dos capas independientes:
- **Capa 1 — Verificación de fidelidad al origen (Dato vs. Fuente):** comprobar que cada número, código de circuito, potencia, longitud o iluminancia citado por el asistente coincide exactamente con el CSV exportado de Revit o DIALux (sin omisiones, duplicaciones ni desplazamientos de fila).
- **Capa 2 — Verificación técnica y normativa externa (Criterio vs. Herramienta/Norma):** validar todo resultado cuantitativo en hoja de cálculo auditada o software eléctrico/fotométrico especializado, y contrastar cualquier exigencia reglamentaria (caída de tensión máxima, protección diferencial, iluminancia mínima $E_m$, $UGR$ o $VEEI$) directamente en la edición oficial vigente del reglamento del país aplicable.

Solo cuando un dato supera ambas capas pasa en la tabla de control de `[PENDIENTE]` a `[VERIFICADO POR TÉCNICO]`.

#### Conceptos clave
- **Verificación Capa 1 (Fidelidad de entrada):** confirmar recuento de filas (`N` circuitos leídos = `N` circuitos analizados), totales de control (suma de potencia total) y correspondencia exacta de códigos ID.
- **Verificación Capa 2 (Contraste determinista y legal):** recalcular sumas, porcentajes de desequilibrio y caídas de tensión en Excel/software técnico y abrir el texto oficial de la norma aplicable.
- **Marcadores de estado explícitos:** obligar al asistente a etiquetar sus observaciones con `[HIPÓTESIS IA — NO VALIDADA]` o `[VERIFICAR NORMA LOCAL]` para impedir confusiones en borradores compartidos.
- **Totales de control (*Checksums* humanos):** calcular previamente en Excel el número total de circuitos y la suma total de kW/VA antes de preguntar al LLM; si el resumen del asistente no clava esa suma exacta, su análisis queda invalidado hasta localizar la fila omitida o alterada.

#### Definiciones necesarias
- **Total de control (*Checksum* técnico):** magnitud agregada conocida de antemano (número de filas, suma total de potencia instalada, máximo $UGR$ de la tabla) que el técnico utiliza para detectar inmediatamente si el asistente omitió o alteró registros durante el análisis.
- **Doble verificación (*Two-Layer Verification*):** procedimiento obligatorio por el cual ningún dato generado por un LLM se incorpora a planos o memorias sin comprobar primero su fidelidad al archivo fuente (Capa 1) y segundo su validez técnica/reglamentaria mediante herramienta determinista y norma vigente (Capa 2).

#### Ejemplo práctico realista
Un proyectista carga en ChatGPT un CSV limpio y anonimizado de 20 circuitos del cuadro `CS-02` cuya suma real calculada en Excel es **$48.600\text{ VA}$**. Pide al asistente clasificar los circuitos por tipo (alumbrado, fuerza, clima) y calcular el subtotal por grupo y el equilibrio entre L1, L2 y L3. El asistente devuelve una tabla limpia donde la suma de los tres grupos da **$46.200\text{ VA}$** y concluye que «el cuadro está equilibrado». Al aplicar el **total de control** (Capa 1), el técnico detecta de inmediato una diferencia de $2.400\text{ VA}$: el asistente omitió silenciosamente la fila `C-14` (`Toma técnica $2.400\text{ VA}$` en fase L1). Además, en Capa 2, el técnico recalcula el reparto de fases en su hoja de cálculo verificada y comprueba que L1 supera en un $22\,\%$ la media trifásica, decidiendo reequilibrar circuitos en Revit MEP.

#### Errores frecuentes
- Leer únicamente las conclusiones redactadas por la IA sin comparar el sumatorio total frente al archivo Excel/CSV original.
- Hacer la «doble verificación» preguntándole al otro modelo (p. ej. revisar lo que dijo ChatGPT preguntando a Claude) en vez de comprobarlo con hoja de cálculo, DIALux, Revit y reglamento oficial.
- Eliminar las etiquetas de `[PENDIENTE DE VERIFICACIÓN]` antes de haber comprobado los valores en campo o normativa.
- Aceptar una agrupación por categorías hecha por IA sin revisar qué circuitos ambiguos clasificó bajo «otros».

#### Preguntas que el alumnado debería poder responder
1. ¿En qué consisten la Capa 1 y la Capa 2 del protocolo de doble verificación sobre salidas de ChatGPT y Claude?
2. ¿Cómo funciona un «total de control» (*checksum* técnico) para detectar en 15 segundos si un LLM se ha saltado filas de un cuadro eléctrico o tabla de DIALux?
3. ¿Por qué contrastar la respuesta de ChatGPT únicamente con Claude NO equivale a una validación técnica independiente?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** sigue una dinámica altamente operativa de laboratorio documental comparativo con datos tabulares simulados de Revit MEP y DIALux.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
|---|---|---|---|
| **1. Apertura y actividad de activación (diagnóstico de tablas sucias)** | 00:00 – 00:25 (25 min) | Recuerda brevemente el principio de seguridad del Tema 1; presenta un extracto real simulado de exportación «sucia» de Revit/DIALux y dirige la Actividad 1. | Identifica en 10 minutos los errores de formato y fugas de privacidad presentes en la tabla proyectada antes de poder usar ningún asistente. |
| **2. Microexposición A: Flujos comparados ChatGPT vs. Claude y preparación CSV/Markdown** | 00:25 – 01:05 (40 min) | Demuestra en pantalla cómo configurar un espacio de proyecto con instrucciones restrictivas; compara la lectura de una tabla PDF maquetada frente a un CSV limpio normalizado y explica las diferencias operativas según versión vigente. | Toma notas sobre la estructura de proyecto persistente y diseña un bloque de instrucciones base de 8–10 líneas adaptado a su especialidad. |
| **3. Actividad 2: Limpieza, anonimización en 5 pasos y cálculo de totales de control** | 01:05 – 01:50 (45 min) | Facilita el archivo bruto `Export_Bruto_Edificio.xlsx` (Revit + DIALux con datos sensibles ficticios) y supervisa el saneamiento completo en hoja de cálculo. | Ejecuta la anonimización en 5 pasos, crea `Tabla_Alias_Local`, genera dos CSV normalizados con `ID_Fila` y calcula los totales de control (n.º filas, suma VA/W, $E_m$ mínimo) en Excel/Calc. |
| **Descanso activo** | 01:50 – 02:05 (15 min) | Pausa recomendada fuera de pantalla; verifica que todos los equipos tengan listos sus CSV anonimizados para el bloque práctico. | Descansa y prepara sus archivos limpios para la fase comparativa. |
| **4. Microexposición B: Protocolo de doble verificación (Capa 1 + Capa 2)** | 02:05 – 02:35 (30 min) | Explica cómo auditar respuestas de ambos asistentes usando totales de control, detección de omisiones silenciosas, etiquetas `[PENDIENTE]` y comprobación determinista/normativa externa. | Analiza un caso breve de discrepancia de $2.400\text{ VA}$ en sumatorio y practica la cumplimentación de la Matriz de Doble Verificación. |
| **5. Resolución del Caso práctico (*Vértice MEP & Luz S.L.*)** | 02:35 – 03:25 (50 min) | Presenta el caso del edificio terciario de 4 plantas (38 circuitos Revit + 14 locales DIALux); guía la comparación A/B entre salidas de ChatGPT y Claude (o simulaciones provistas) y audita las verificaciones. | Ejecuta la comparativa A/B sobre datos anonimizados, localiza las anomalías ocultas en las respuestas de IA mediante Capa 1 y Capa 2, y redacta el informe verificado de incidencias. |
| **6. Actividad 3 y puesta en común (Transferencia al propio entorno)** | 03:25 – 03:45 (20 min) | Modera la puesta en común de aprendizajes entre usar ChatGPT y Claude, destacando límites reales de contexto y calidad tabular. | Adapta su plantilla de flujo estándar (Exportar $\rightarrow$ Anonimizar $\rightarrow$ Total de control $\rightarrow$ Consultar $\rightarrow$ Doble verificación) para aplicarla en el Tema 3 y en su trabajo real. |
| **7. Síntesis, evaluación sumativa y cierre** | 03:45 – 04:00 (15 min) | Sintetiza los puntos clave de seguridad y calidad de datos, lanza el cuestionario sumativo final y presenta el Tema 3 (criterios de diseño con IA y matriz ponderada). | Completa el cuestionario sumativo (6 ítems), realiza la autoevaluación de cierre y entrega sus archivos anonimizados y matriz de verificación. |

*Suma total cronometrada:* $25 + 40 + 45 + 15 + 30 + 50 + 20 + 15 = \mathbf{240\text{ minutos (4 horas)}}$.

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Auditoría exprés de una exportación contaminada

- **Nombre:** Auditoría exprés de una exportación contaminada
- **Objetivo:** Reconocer en un vistazo los riesgos de confidencialidad y los defectos estructurales de tabla que provocan fallos cuando se sube un archivo directo de Revit/DIALux a un chat de IA.
- **Instrucciones para el alumnado:**
  1. Observa durante 5 minutos la hoja `Muestra_Export_Sin_Limpiar.png` (captura de un Excel generado directamente desde un cuadro eléctrico y un informe lumínico).
  2. Anota en el chat o en tu ficha de trabajo: (a) al menos 3 datos que vulnerarían la confidencialidad de un cliente real, y (b) al menos 3 problemas de formato que confundirían a un LLM (celdas combinadas, unidades mixtas, filas de subtotal intercaladas, ausencia de ID único).
  3. Contrasta tus hallazgos con la lista proyectada por el formador.
- **Materiales necesarios:** Captura de pantalla / hoja ejemplo `Muestra_Export_Sin_Limpiar`, ficha de trabajo y pizarra o chat grupal.
- **Tiempo estimado:** 15 minutos (integrados en la Fase 1).
- **Rol del formador:** Activar el debate rápido pidiendo respuestas breves en 30 segundos y mostrar cómo una misma tabla «sucia» induce errores inmediatos de lectura.
- **Producto o entregable esperado:** Lista individual con 6 fallos identificados (3 de privacidad + 3 de estructura tabular).
- **Criterios de éxito:** El alumnado identifica al menos el 80 % de los riesgos de privacidad y fallos de formato antes de iniciar la Microexposición A.

### Actividad 2 (Aplicación técnica): Tubería de saneamiento Revit/DIALux a CSV limpio + Totales de control

- **Nombre:** Tubería de saneamiento Revit/DIALux a CSV limpio + Totales de control
- **Objetivo:** Aplicar de principio a fin el proceso de limpieza tabular, anonimización estricta en 5 pasos y cálculo previo de totales de control antes de utilizar ChatGPT o Claude.
- **Instrucciones para el alumnado:**
  1. Descarga `Export_Bruto_Edificio.xlsx` (contiene una pestaña simulada de *Panel Schedule* de Revit con 24 circuitos y una pestaña de resumen de DIALux con 10 locales, incluyendo datos ficticios sensibles de cliente, precios, nombres personales, unidades mezcladas y celdas combinadas).
  2. Crea una copia local `00_ALIAS_PRIVADO_NO_SUBIR.xlsx` donde mapees cliente, edificio y descripciones con nombre propio a códigos neutros (`CLI-A`, `C-01..C-24`, `LOC-01..LOC-10`).
  3. Limpia ambas pestañas eliminando columnas económicas/personales, separando unidades en el encabezado SI (`Potencia_VA`, `Longitud_m`, `Area_m2`, `Em_lx`, `U0`, `UGR`), eliminando filas combinadas y comprobando metadatos/propiedades del archivo.
  4. Calcula aparte en una hoja de control los *checksums*: n.º exacto de circuitos, suma total de `Potencia_VA`, reparto real por fases L1/L2/L3, y n.º de locales con suma total de `Area_m2` y `P_Ilum_W`.
  5. Exporta `Revit_Limpio_ANON.csv` y `DIALux_Limpio_ANON.csv`.
- **Materiales necesarios:** Excel o LibreOffice Calc, archivo `Export_Bruto_Edificio.xlsx` y checklist de 5 pasos de anonimización.
- **Tiempo estimado:** 45 minutos (Fase 3).
- **Rol del formador:** Revisar aleatoriamente 3–4 pantallas/archivos para comprobar que no queden nombres en columnas de comentarios, ni mezcla de coma/punto decimal ni celdas combinadas.
- **Producto o entregable esperado:** Dos archivos CSV normalizados y anonimizados + tabla con los totales de control calculados en hoja de cálculo.
- **Criterios de éxito:** Cero identificadores sensibles restantes (verificado con búsqueda), esquema plano sin celdas combinadas y totales de control exactos al 100 %.

### Actividad 3 (Transferencia a proyecto real): Estándar de flujo seguro A/B (ChatGPT y Claude) para tu estudio

- **Nombre:** Estándar de flujo seguro A/B (ChatGPT y Claude) para tu estudio
- **Objetivo:** Transferir lo practicado a un procedimiento operativo estándar (SOP) personalizable para analizar tablas de proyectos eléctricos reales con ChatGPT o Claude bajo doble verificación.
- **Instrucciones para el alumnado:**
  1. Toma la plantilla **SOP de Flujo con Asistentes IA y Matriz de Doble Verificación** (sección 8).
  2. Redacta tu bloque fijo de instrucciones de proyecto (máximo 12 líneas) adaptado a tu tipo habitual de proyectos (vivienda, terciario, industrial o alumbrado) especificando unidades SI, prohibición de inventar normas, columna `ID_Fila` obligatoria y marcado `[VERIFICAR]`.
  3. Define qué herramienta utilizarás preferentemente según el tipo de tarea (p. ej. contexto largo de pliegos vs. iteración tabular) tras revisar sus políticas de privacidad vigentes, y establece los 3 totales de control obligatorios que calcularás en Excel antes de cada consulta.
- **Materiales necesarios:** Plantilla editable de SOP y matriz de verificación (Word/Markdown/Excel).
- **Tiempo estimado:** 20 minutos (Fase 6).
- **Rol del formador:** Guiar la redacción para evitar instrucciones vagas («revisa esto bien») sustituyéndolas por restricciones comprobables; destacar buenas prácticas compartidas en el grupo.
- **Producto o entregable esperado:** Ficha operativa SOP personalizada de 1 página lista para utilizar en el Tema 3 y siguientes.
- **Criterios de éxito:** El SOP incluye instrucciones persistentes claras, checklist de anonimización, definición previa de totales de control y tabla de doble verificación Capa 1 + Capa 2.

---

## 6. Caso práctico

### Caso práctico: Auditoría tabular comparativa en *Vértice MEP & Luz S.L.*

#### Contexto empresarial
**Vértice MEP & Luz S.L.** es una ingeniería multidisciplinar de 25 personas que ejecuta proyectos eléctricos en Revit MEP y estudios lumínicos en DIALux para edificios corporativos y comerciales. El equipo está preparando la entrega previa a revisión interna de un **edificio terciario de 4 plantas (oficinas, salas de reuniones, aseos, circulación y garaje en sótano)** identificado internamente bajo el código anonimizado `EXP-TER-2026-04`. Para evitar errores antes de generar planos PDF (Bloque 4), la dirección técnica quiere probar un flujo comparativo con **ChatGPT** y **Claude** utilizando exportaciones CSV de Revit MEP (38 circuitos distribuidos en dos cuadros: `CGMP` y `CS-GAR`) y de DIALux (14 locales).

#### Situación o problema
Un técnico del equipo ya limpió parcialmente los archivos y lanzó la misma consulta en ambos asistentes pidiendo: *(1) sumar la potencia total por cuadro y por fase, (2) detectar locales de DIALux por debajo de objetivos de referencia y (3) cruzar el número de luminarias entre DIALux y el cuadro de alumbrado de Revit*. Sin embargo, cometió dos descuidos previos y confió en el primer resumen obtenido:
- En la columna `Observaciones` de la exportación de Revit quedaron tres textos con datos sensibles reales del cliente ficticio (*«Cuadro anexo despacho Sra. Soler — Banco Meridional»* y una referencia catastral).
- Al comparar las respuestas generadas por ambos asistentes frente a la hoja de cálculo maestra de control, aparecieron discrepancias graves que el técnico no notó a primera vista porque ambos informes estaban redactados con gran fluidez.

#### Datos disponibles

| Concepto / Registro | Valor real en hoja de control (Revit / DIALux) | Salida observada en Asistente A (ChatGPT simulado) | Salida observada en Asistente B (Claude simulado) |
|---|---|---|---|
| **Privacidad previa** | Contenía nombre personal, empresa ficticia y ref. catastral en col. `Observaciones` | Procesó el archivo sin advertir la fuga de datos | Procesó el archivo sin advertir la fuga de datos |
| **Cuadro `CGMP` (28 circuitos)** | Suma real = **$64.800\text{ VA}$** ($L1=21.200$, $L2=21.600$, $L3=22.000\text{ VA}$) | Reportó 27 circuitos y suma **$61.300\text{ VA}$** (omitió `C-19: Clima Sala Reuniones = 3.500 VA`) | Reportó los 28 circuitos y suma exacta **$64.800\text{ VA}$**, pero clasificó un motor trifásico en `Alumbrado` |
| **Cuadro `CS-GAR` (10 circuitos)** | Suma real = **$18.400\text{ VA}$** ($4$ circuitos de extracción de humo/ventilación + $6$ de alumbrado/tomas) | Sumó correctamente **$18.400\text{ VA}$**, pero inventó que los extractores «exigen cable según artículo NEC 695» (mezcla de país/norma) | Detectó bien los 10 circuitos, pero dio por válidos los calibres de Revit sin advertir que faltaba longitud y caída de tensión |
| **Locales DIALux (`LOC-01` a `LOC-14`)** | `LOC-07` (Oficina abierta 2.ª planta): $E_m = 465\text{ lx}$, $U_0 = 0,64$, $UGR = 21$; `LOC-12` (Garaje): $E_m = 82\text{ lx}$, $U_0 = 0,38$; total luminarias en DIALux = **118 uds.** | Señaló correctamente `LOC-07` por $UGR > 19$ (objetivo interno), pero no detectó `LOC-12` y sumó **112 luminarias** | Detectó `LOC-07` y `LOC-12` fuera de objetivo, sumó **118 luminarias**, pero afirmó que «el garaje cumple evacuación» sin haber cargado luminarias de emergencia |
| **Cruce Revit vs. DIALux** | Revit contabiliza **114 luminarias** modeladas en circuitos de alumbrado (faltan 4 luminarias de `LOC-09` sin conectar a circuito) | No detectó la diferencia (asumió que coincidían) | Detectó una diferencia de 4 unidades, aunque atribuyó erróneamente la falta a `LOC-11` en lugar de `LOC-09` |

#### Preguntas de análisis
1. ¿Qué fallo de procedimiento cometió el técnico antes de cargar el CSV y cómo habría debido eliminarlo en el paso de anonimización?
2. Aplicando **Capa 1 (Fidelidad al origen / totales de control)**, ¿qué errores exactos quedan al descubierto inmediatamente tanto en la salida del Asistente A como en la del Asistente B?
3. Aplicando **Capa 2 (Contraste técnico y normativo independiente)**, ¿qué afirmaciones de ambos asistentes son técnicamente peligrosas aunque la suma de filas fuera correcta?
4. ¿Cómo explica este caso que utilizar simultáneamente ChatGPT y Claude sirva para detectar *diferencias*, pero **no** sustituya la comprobación directa en Excel, Revit, DIALux y el reglamento vigente?

#### Tarea a realizar
En equipos de 3 a 4 personas (35 minutos de análisis + 15 minutos de exposición), elaborad el **Informe de Auditoría Comparativa y Doble Verificación** de `EXP-TER-2026-04` incluyendo:
1. **Corrección de anonimización:** reescritura segura de los registros con fuga en `Observaciones` y actualización de la `Tabla_Alias_Local`.
2. **Tabla de Doble Verificación (Capa 1 y Capa 2):** registro de cada métrica analizada (`CGMP VA`, `CS-GAR VA`, `N.º luminarias`, `LOC-07`, `LOC-12`, cruce Revit-DIALux), comparación frente al valor real verificado en Excel/Revit/DIALux y estado final (`[VERIFICADO]` / `[RECHAZADO IA]`).
3. **Dictamen técnico de acciones reales en software:** qué debe corregir el proyectista manualmente en Revit MEP (asignar las 4 luminarias de `LOC-09` a circuito y recalcular el cuadro) y en DIALux (revisar óptica/posición en `LOC-07` para bajar $UGR \le 19$ si el criterio aplicable lo exige, revisar `LOC-12` y simular aparte alumbrado de emergencia según reglamento aplicable del país).
4. **Propuesta de ajuste del prompt de proyecto** para evitar que el asistente invente cumplimiento de evacuación o mezcle normas NEC/REBT/IEC.

#### Posibles soluciones o criterios de análisis
Una resolución rigurosa del caso debe recoger:
- **Privacidad:** eliminación inmediata de `Sra. Soler`, `Banco Meridional` y referencia catastral de la columna `Observaciones`, sustituyéndolos por `DESP_DIR_01` y borrando metadatos; revisión del chat donde se subió el archivo contaminado.
- **Capa 1 (Fidelidad):**
  - El Asistente A falló en el total de control de `CGMP` ($61.300\text{ VA}$ vs. $64.800\text{ VA}$, omisión de `C-19` de $3.500\text{ VA}$) y en el recuento de luminarias de DIALux ($112$ vs. $118$).
  - El Asistente B acertó ambos totales de control ($64.800\text{ VA}$ y $118$ uds.), pero erró al clasificar un circuito de motor en alumbrado y al atribuir la discrepancia de 4 luminarias a `LOC-11` cuando correspondía a `LOC-09`.
- **Capa 2 (Técnica y normativa):**
  - En `CS-GAR`, la alusión del Asistente A a «NEC 695» (norma de bombas contra incendios en EE. UU.) es una mezcla transjurisdiccional grave si el edificio está en España o bajo marco IEC; el técnico debe consultar el reglamento de Baja Tensión y seguridad contra incendios vigente en el país del proyecto.
  - En ningún caso los calibres de Revit pueden darse por válidos sin comprobar intensidad admisible $I_z$, método de instalación, agrupamiento, caída de tensión y protecciones en software/hoja de cálculo homologada.
  - En DIALux, las luminarias normales de garaje (`LOC-12`) **no** acreditan alumbrado de emergencia/evacuación; se requiere cálculo específico de emergencia con luminarias autónomas o centrales de emergencia y valores normativos verificados en la legislación vigente aplicable.
- **Conclusión metodológica:** comparar ChatGPT y Claude en flujo A/B ayuda a descubrir discrepancias más rápido, pero el criterio de verdad reside exclusivamente en los archivos fuente de Revit/DIALux, la hoja de cálculo independiente y la normativa oficial vigente.

#### Preguntas de reflexión final
- ¿Qué resultado del caso práctico te habría pasado más fácilmente desapercibido si no hubieras calculado antes los totales de control en Excel?
- ¿En qué fase de tu trabajo diario resulta más rentable invertir 5 minutos preparando un CSV limpio frente a escribir largos párrafos explicativos en el chat?

---

## 7. Evaluación

### Evaluación diagnóstica
- **Instrumento:** Actividad 1 (*Auditoría exprés de una exportación contaminada*) al arranque de la sesión.
- **Propósito:** Comprobar si el alumnado detecta de inicio tanto fugas indirectas de confidencialidad en columnas de comentarios como errores estructurales de Excel/PDF que degradan el análisis de los LLMs.

### Evaluación formativa
- **Instrumento:** Revisión continua del formador durante la **Actividad 2** (auditoría de los CSV limpios y cálculo de totales de control en hoja de cálculo) y seguimiento en tiempo real del **Caso práctico** (*Vértice MEP & Luz S.L.*), comprobando la aplicación explícita de Capa 1 y Capa 2.
- **Retroalimentación:** Corrección inmediata de delimitadores CSV, normalización de unidades en cabeceras y detección de etiquetas normativas no verificadas.

### Evaluación sumativa
Se compone de dos pruebas complementarias al finalizar el tema:
1. **Cuestionario sumativo (6 ítems de análisis y selección múltiple, 10 minutos, 40 % de la nota):** evalúa criterios de selección de flujo entre ChatGPT y Claude, normalización tabular CSV, anonimización en 5 pasos, totales de control y protocolo de doble verificación.
2. **Carpeta de evidencias prácticas (60 % de la nota):** entrega de: (a) `Revit_Limpio_ANON.csv` y `DIALux_Limpio_ANON.csv` con hoja de totales de control (Actividad 2), (b) Informe de Auditoría y Doble Verificación del caso práctico, y (c) Ficha SOP personalizada (Actividad 3), evaluado según la siguiente rúbrica.

### Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
|---|---|---|---|---|
| **1. Comparación operativa y control de contexto (ChatGPT / Claude)** | Usa chats sueltos sin instrucciones fijas o asume funciones de herramienta no verificadas; mezcla proyectos o ignora límites de contexto largo. | Configura instrucciones básicas, pero no segmenta tablas extensas ni especifica restricciones contra alucinaciones normativas. | Estructura espacios/instrucciones de proyecto claras, segmenta cargas largas y compara salidas A/B con trazabilidad de fila. | Diseña además flujos diferenciados por tarea, documenta supuestos de versión/privacidad vigentes y optimiza el formato de entrada/salida. |
| **2. Normalización de exportaciones Revit y DIALux** | Trabaja con tablas sucias (celdas combinadas, unidades mezcladas, filas resumen intercaladas o PDFs sin limpiar). | Limpia la mayoría de filas, pero mantiene inconsistencias menores de unidades o carece de columna `ID_Fila` único. | Genera CSV planos normalizados con unidad SI en cada cabecera, sin celdas combinadas y con identificador único trazable. | Incorpora además totales de control (*checksums*) automatizados en hoja local para validar cualquier análisis posterior. |
| **3. Anonimización estricta de clientes y documentos** | Mantiene identificadores directos o indirectos (razón social, direcciones, nombres en `Observaciones` o costes) en los archivos preparados para IA. | Borra títulos y nombres principales, pero olvida revisar columnas de observaciones, rutas en metadatos o propiedades del archivo. | Ejecuta los 5 pasos de anonimización completa, aísla la tabla de alias en local y confirma cero fugas con búsqueda de texto. | Establece controles preventivos en el propio flujo de exportación Revit/Excel evitando que datos sensibles lleguen siquiera a la carpeta temporal. |
| **4. Protocolo de doble verificación técnica** | Acepta las sumas, clasificaciones o referencias normativas de los asistentes sin comprobarlas ni contrastarlas entre capas. | Verifica algunas sumas (Capa 1), pero omite el contraste técnico/normativo independiente (Capa 2) o valida una IA solo con otra IA. | Aplica sistemáticamente Capa 1 (fidelidad a fuente + totales de control) y Capa 2 (cálculo independiente + norma vigente aplicable). | Documenta un registro completo de discrepancias, corrige el origen en Revit/DIALux y deja marcado explícito de validación humana firmada. |

### Actividad de autoevaluación
Cuestionario individual de cierre (3 minutos en plataforma o ficha):
1. *Antes de subir una tabla exportada de Revit o DIALux a ChatGPT o Claude, ¿qué tres comprobaciones automáticas ya forman parte de mi rutina?*
2. *En el caso práctico, ¿qué diferencia concreta ha marcado calcular los totales de control en Excel antes de leer el análisis del asistente?*
3. *¿Qué ajuste específico debo revisar en las opciones de privacidad de la plataforma que utilizo habitualmente antes de trabajar con datos reales anonimizados?*

---

## 8. Materiales y recursos

### Guion de diapositivas

- **Slide 1 — Portada y objetivos del Tema 2:** Título, posición en el programa (Tema 41 de 50; Bloque 6, 2/11), metas prácticas de productividad segura y aviso de responsabilidad técnica y vigencia de herramientas.
- **Slide 2 — ChatGPT y Claude en el flujo de ingeniería eléctrica:** Comparativa operativa honesta (espacios de proyecto/contexto persistente, análisis de tablas extensas, lectura de documentos, políticas de privacidad y verificación obligatoria de versión/plan vigente).
- **Slide 3 — De exportación «sucia» a CSV limpio (*Tidy Data*):** Antes y después visual de un *panel schedule* de Revit MEP y una tabla de locales DIALux: eliminación de celdas combinadas, subtotales intermedios y mezcla de unidades.
- **Slide 4 — Protocolo de anonimización en 5 pasos:** Flujo gráfico: Copia temporal $\rightarrow$ Poda económica/personal $\rightarrow$ Alias locales (`00_ALIAS_PRIVADO`) $\rightarrow$ Limpieza de metadatos $\rightarrow$ Búsqueda `Ctrl+F` final.
- **Slide 5 — El «efecto valle» en contextos largos:** Por qué cargar 40 páginas o 100 circuitos de golpe provoca omisiones silenciosas y cómo segmentar por cuadros o plantas con `ID_Fila` único.
- **Slide 6 — Doble verificación: Capa 1 (Fidelidad) + Capa 2 (Rigor técnico y legal):** Esquema del uso de totales de control (*checksums*) frente a hoja de cálculo, software eléctrico, DIALux y reglamento vigente del país.
- **Slide 7 — Caso práctico *Vértice MEP & Luz S.L.*:** Datos de entrada de `EXP-TER-2026-04` (cuadros `CGMP`, `CS-GAR` y 14 locales DIALux) y reto de auditoría comparativa A/B.
- **Slide 8 — SOP resumen y puente al Tema 3:** Flujo de 5 etapas listo para imprimir y avance del Tema 3 (*Generación y optimización de criterios de diseño mediante IA*).

### Ficha de trabajo
Documento de 2 páginas que incluye:
1. **Checklist de 5 pasos de anonimización y saneamiento CSV** con casillas verificables.
2. **Tabla de totales de control previos** (`N_filas`, `Suma_VA`, `Reparto_L1_L2_L3`, `Total_Area_m2`, `Total_Luminarias`).
3. **Bloque plantilla de Instrucciones Persistentes de Proyecto** para copiar y adaptar en ChatGPT o Claude.

### Plantilla técnica práctica
**Plantilla 6.2 — Matriz de Doble Verificación (Capa 1 + Capa 2) para Tablas Revit/DIALux**

| ID Verificación | Dato o hallazgo analizado | Fuente real (CSV / Excel) | Resultado Asistente A / B | Verificación Capa 1 (Fidelidad y Total de control) | Verificación Capa 2 (Cálculo independiente / Norma vigente) | Estado final y Acción en Revit/DIALux |
|---|---|---|---|---|---|---|
| `DV-01` | *Potencia total cuadro `CGMP`* | *`64.800 VA` (28 ctos.)* | *A: `61.300 VA` (27) / B: `64.800 VA` (28)* | *Fallo en A (omitió `C-19`); B coincide con checksum* | *Suma verificada en Excel maestro v1.2* | *[VERIFICADO] Descartar resumen A* |
| `DV-02` | *Cruce luminarias DIALux vs. Revit* | *DIALux `118` / Revit `114`* | *A: `112` / B: detecta `-4` en `LOC-11`* | *Fallo parcial en B: faltan 4 en `LOC-09`, no `LOC-11`* | *Comprobado plano planta y tabla luminarias Revit* | *[CORREGIR] Asignar 4 uds. `LOC-09` a circuito* |
| `DV-03` | *Alumbrado emergencia garaje `LOC-12`* | *Solo cálculo normal en CSV* | *B: «cumple evacuación»* | *Dato no existía en tabla de entrada (alucinación)* | *Verificar reglamento emergencia vigente del país* | *[RECHAZADO IA] Simular emergencia aparte* |

### Lecturas y recursos recomendados
> **Advertencia de validación obligatoria:** Antes de aplicar o recomendar cualquiera de los recursos siguientes, deben verificarse la **versión vigente de ChatGPT y Claude** (incluidos límites de contexto, funciones de proyectos y controles de privacidad/retención de datos), la **versión de Revit y DIALux** instalada en el centro u oficina, y la **normativa eléctrica y lumínica aplicable en el país del proyecto**.

- **Documentación oficial de plataformas IA (revisar fecha y plan vigente):**
  - Centro de ayuda y documentación de privacidad empresarial de **OpenAI (ChatGPT)** (configuración de *Data Controls*, proyectos y manejo de archivos CSV/Excel).
  - Documentación oficial de **Anthropic (Claude)** (uso de *Projects*, guías de ingeniería de contexto y políticas de privacidad/retención vigentes).
- **Documentación técnica de exportación de datos BIM y lumínicos:**
  - Documentación oficial de **Autodesk Revit** sobre exportación de tablas de planificación (*Schedules / Panel Schedules*) a texto delimitado / CSV según versión.
  - Manual oficial de **DIALux** (exportación de resúmenes de locales, listas de luminarias y resultados fotométricos, diferenciando informes visuales de datos tabulares).
- **Guías de buenas prácticas de datos tabulares:**
  - Principios de datos ordenados (*Tidy Data*, Hadley Wickham) aplicados a la limpieza previa de tablas de ingeniería en hojas de cálculo.

### Glosario de términos clave

| Término | Definición |
|---|---|
| **Anonimización estricta** | Eliminación completa de identificadores directos, pistas indirectas en observaciones, importes confidenciales y metadatos internos antes de subir un documento a un asistente externo. |
| **Archivo CSV normalizado** | Tabla de texto plano con encabezados únicos en la primera fila, unidades SI explícitas en cabecera, identificador por registro y ausencia de celdas combinadas o subtotales mezclados. |
| **Capa 1 (Fidelidad al origen)** | Comprobación de que los códigos, cantidades, recuento de filas y sumatorios devueltos por la IA coinciden exactamente con el archivo fuente suministrado. |
| **Capa 2 (Validación técnica/legal)** | Contraste independiente de resultados, fórmulas y criterios frente a herramientas de cálculo deterministas, simulaciones DIALux/Revit y la edición vigente de la norma aplicable. |
| **Contexto persistente (Proyecto IA)** | Espacio de trabajo dentro de ChatGPT o Claude que almacena instrucciones fijas y documentos base anonimizados para mantener criterios homogéneos en varias consultas. |
| **Degradación en contexto largo** | Pérdida de precisión u omisión silenciosa de registros intermedios cuando se procesan tablas o documentos extensos en una sola consulta sin fragmentación. |
| **Tabla local de alias** | Archivo guardado exclusivamente dentro de la red segura del técnico que vincula códigos neutros usados con la IA (`CLI-01`, `LOC-07`) con sus nombres reales de proyecto. |
| **Total de control (*Checksum*)** | Cifra agregada calculada previamente en hoja local (número de circuitos, potencia total o número total de luminarias) usada para detectar al instante omisiones en el resumen de la IA. |

---

## 9. Adaptaciones

### Sesión presencial
- **Laboratorio en directo por parejas:** En la Actividad 2, cada pareja trabaja en un único equipo para forzar el diálogo técnico mientras limpian `Export_Bruto_Edificio.xlsx`, verificando mutuamente con `Ctrl+F` que no quede ningún nombre sensible.
- **Comparativa proyectada en vivo:** En el Caso práctico, el formador proyecta lado a lado las dos salidas simuladas (o en vivo con cuentas de demostración configuradas con privacidad) y pide a distintos equipos pasar a señalar en pizarra las discrepancias de Capa 1 y Capa 2.

### Sesión online síncrona
- **Trabajo en salas (*breakout rooms*) con plantilla compartida:** Dividir al grupo en salas de 3–4 personas con acceso a una copia individual por sala de la Matriz de Doble Verificación en hoja compartida online, permitiendo al formador supervisar avances en tiempo real.
- **Dinámica ágil de totales de control:** En la Microexposición B, pedir que todos escriban simultáneamente en el chat el resultado del *checksum* (`64.800 VA` vs. `61.300 VA`) antes de revelar el circuito omitido (`C-19`).

### Sesión asíncrona
- **Guía paso a paso en vídeo breve:** Acompañar el paquete `Export_Bruto_Edificio.xlsx` con un videotutorial de 8 minutos mostrando cómo descombinar celdas en Excel/Calc, limpiar propiedades del archivo y exportar a CSV UTF-8 sin errores de separador decimal.
- **Entrega estructurada en campus virtual:** El alumnado sube en una única carpeta comprimida: (1) los dos CSV anonimizados (`Revit_Limpio_ANON.csv`, `DIALux_Limpio_ANON.csv`), (2) la Matriz de Doble Verificación del caso *Vértice MEP & Luz S.L.* cumplimentada y (3) su SOP personal.
- **Debate asíncrono guiado:** Hilo en el foro para comparar qué instrucciones persistentes resultaron más eficaces para frenar suposiciones normativas no verificadas en ambos asistentes.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Afianza las reglas de seguridad, confidencialidad y no delegación profesional introducidas en el **Tema 1 del Bloque 6**, y aprovecha el dominio práctico de estructuras de datos de cuadros eléctricos (*panel schedules*) de **Revit MEP (Bloques 3 y 4)** y tablas fotométricas de **DIALux (Bloque 2)**.
- **Competencias que desarrolla:** Gestión segura de flujos de trabajo en ChatGPT y Claude, ingeniería básica de contexto con datos limpios, saneamiento y anonimización documental estricta, y auditoría de doble verificación técnica.
- **Conexión dentro del plan de 6 módulos / 50 temas:**
  - **Tema anterior:** **Tema 1 del Bloque 6: Introducción a la IA aplicada a la ingeniería eléctrica y BIM** (Tema 40 de 50), del que hereda los límites técnicos y éticos de los LLMs para convertirlos aquí en un flujo práctico operativo entre ChatGPT y Claude.
  - **Tema posterior:** Conecta directamente con el **Tema 3 del Bloque 6: Generación y optimización de criterios de diseño mediante IA** (Tema 42 de 50), donde el alumnado aplicará este flujo seguro con ChatGPT/Claude para comparar arquitecturas de distribución, reservas en cuadros y sectorización mediante matrices de decisión ponderadas.
- **Evidencia de aprendizaje que dejará el alumnado:**
  1. Archivos `Revit_Limpio_ANON.csv` y `DIALux_Limpio_ANON.csv` validados con hoja de totales de control.
  2. Informe de Auditoría Comparativa y Matriz de Doble Verificación del caso *Vértice MEP & Luz S.L.*.
  3. Ficha SOP de Flujo Seguro A/B personalizada para su estudio o actividad.
  4. Cuestionario sumativo completado.

---

## Siguientes pasos para el formador

1. **Verificar vigencia de interfaces y privacidad antes de clase:** comprobar el estado actual de los planes, límites de carga de CSV/Excel y botones de exclusión de entrenamiento tanto en ChatGPT como en Claude para no mostrar pantallas obsoletas.
2. **Validar los archivos de práctica (`Export_Bruto_Edificio.xlsx` y extractos del caso):** confirmar que todos los datos «sensibles» de ejemplo son 100 % ficticios y que las sumas de control (`64.800 VA`, `18.400 VA`, `118` luminarias DIALux, `114` luminarias Revit) coinciden con las soluciones docentes.
3. **Revisar los CSV entregados por el alumnado** poniendo especial atención en la columna de `Observaciones` y metadatos, corrigiendo cualquier fuga sutil antes de avanzar al Tema 3.
4. **Guardar las mejores instrucciones persistentes propuestas en la Actividad 3** como base evolutiva que se perfeccionará en el Tema 7 (*Generación de prompts especializados*).
5. **Enlazar el inicio del Tema 3** planteando cómo pasar de revisar tablas ya existentes a utilizar la IA para explorar y puntuar alternativas de diseño eléctrico antes de modelar en Revit.
