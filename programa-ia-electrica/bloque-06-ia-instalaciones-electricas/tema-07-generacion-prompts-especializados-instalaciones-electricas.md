# Tema 7. Generación de prompts especializados para instalaciones eléctricas

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Generación de prompts especializados para instalaciones eléctricas |
| **Programa** | IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas *(Especialización Técnica; no es un MBA ni otorga habilitación legal para firmar proyectos)* |
| **Bloque y posición dentro del programa** | Bloque 6: Inteligencia artificial aplicada a instalaciones eléctricas · Tema 7 de 11 (Tema 46 de 50 del programa) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Modalidad** | Online / Híbrida interactiva |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio - Avanzado |
| **Prerrequisitos** | Conocimientos de cálculo eléctrico en baja tensión, lectura de esquemas unifilares, manejo básico de DIALux y Revit MEP, y uso introductorio de ChatGPT y Claude (Temas 1 a 6 del Bloque 6). |
| **Resultado general de aprendizaje** | Diseñar, depurar y catalogar una biblioteca reutilizable de *prompts* técnicos estructurados en seis capas para asistir tareas de ingeniería eléctrica, estudio lumínico en DIALux y modelado en Revit MEP, garantizando la anonimización de datos, la restricción de no invención y la verificación técnica independiente obligatoria. |

---

## 2. Objetivos de aprendizaje

1. Identificar los seis componentes estructurales de un *prompt* técnico especializado para ingeniería eléctrica, fotometría y modelado BIM. *(Nivel de Bloom: Recordar)*
2. Explicar los riesgos de alucinación normativa, ambigüedad en unidades del Sistema Internacional (SI) y exposición de datos confidenciales cuando se formulan consultas abiertas sin restricciones. *(Nivel de Bloom: Comprender)*
3. Aplicar una arquitectura de *prompt* de seis capas (rol acotado, jurisdicción a verificar, entradas con unidades SI, reglas de no invención, formato tabular y protocolo de comprobación) a supuestos reales de baja tensión e iluminación. *(Nivel de Bloom: Aplicar)*
4. Analizar comparativamente las respuestas generadas por ChatGPT y Claude ante variaciones controladas de un mismo *prompt* técnico para detectar supuestos ocultos o citas normativas no confirmadas. *(Nivel de Bloom: Analizar)*
5. Crear una biblioteca versionada y reutilizable de plantillas de *prompts* para el estudio técnico con criterios de anonimización, control de calidad y validación humana obligatoria. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Anatomía del prompt técnico de seis capas en ingeniería eléctrica

#### Explicación breve y clara

Un *prompt* técnico para instalaciones eléctricas no es una pregunta coloquial, sino una **especificación operativa de entrada y salida**. Cuando pedís a ChatGPT o Claude que revise una derivación, organice un cuadro de cargas o interprete resultados de DIALux mediante una frase corta y ambigua, el modelo de lenguaje rellena los huecos asumiendo tensiones, factores de potencia, métodos de instalación o reglamentos de un país cualquiera.

Para evitar respuestas genéricas o peligrosamente plausibles, estructuramos cada *prompt* especializado en **seis capas obligatorias**:
1. **Rol técnico delimitado:** define la perspectiva de apoyo (p. ej., «asistente de revisión documental para proyectista eléctrico»), aclarando que no emite dictámenes vinculantes.
2. **Jurisdicción y normativa declarada como «a verificar»:** especifica país, tipo de edificio y norma orientativa (p. ej., REBT en España, IEC 60364 o NEC/NFPA 70 como marco de referencia que debe comprobarse en su edición vigente).
3. **Entradas exactas con unidades SI:** aporta magnitudes explícitas ($U_n$ en V, $P$ en kW, $\cos\varphi$, $L$ en m, temperatura en °C, método de canalización) en formato estructurado.
4. **Restricciones de no invención:** prohíbe suponer datos ausentes, inventar tablas de intensidades admisibles o citar artículos de memoria sin advertencia.
5. **Formato de salida controlado:** impone tablas Markdown, listas de comprobación o etiquetas `FALTANTE` para facilitar la auditoría humana.
6. **Bloque de verificación final obligatoria:** exige al asistente enumerar hipótesis asumidas, fórmulas empleadas y puntos que el técnico competente debe contrastar manualmente.

#### Conceptos clave

- **Arquitectura de seis capas:** Método sistemático que separa rol, marco normativo a verificar, datos con unidades SI, reglas anti-alucinación, formato de respuesta y lista de validación humana.
- **Restricción de no invención (*Grounding*):** Instrucción explícita que obliga al modelo a declarar `DATO FALTANTE` cuando carece de un parámetro imprescindible en lugar de estimarlo por defecto.
- **Delimitadores estructurales:** Marcas claras (como etiquetas `<entradas>`, `<restricciones>`, `###` o bloques delimitados) que separan las instrucciones técnicas de los datos del proyecto para evitar confusiones de contexto.
- **Salida auditable:** Respuesta organizada en tabla o lista numerada con unidades visibles y trazabilidad paso a paso, diseñada para ser revisada rápidamente por un ingeniero o proyectista.

#### Definiciones necesarias

- **Prompt especializado:** Instrucción técnica parametrizada y repetible que fija contexto, magnitudes de entrada, límites de validez y formato de entrega para una tarea concreta de ingeniería o BIM.
- **Alucinación técnica en LLM:** Generación convincente de cifras, tablas de conductores, coeficientes de corrección, artículos reglamentarios o comandos de software inexistentes o incompatibles con la jurisdicción o versión real utilizada.
- **Validación técnica independiente:** Comprobación obligatoria realizada por un profesional cualificado mediante cálculo manual, hoja verificada, software autorizado y consulta directa del reglamento oficial vigente en el país del proyecto.

#### Ejemplo práctico realista

Un proyectista necesita preparar un borrador de revisión para una derivación trifásica que alimenta un subcuadro de climatización en un local técnico. Si escribe «¿Qué sección necesito para 28 kW a 42 metros?», obtendrá una respuesta inútil y riesgosa porque faltan tensión, sistema de corriente, factor de potencia, método de instalación, agrupamiento y caída de tensión admisible.

Al aplicar la arquitectura de seis capas, el *prompt* queda definido así:
- **Rol:** «Actúa como asistente técnico de ingeniería eléctrica de apoyo documental. Tu salida es un borrador preparatorio; no sustituye la verificación ni la firma de un técnico competente.»
- **Marco:** «Jurisdicción de ejemplo: España (REBT como referencia ilustrativa; marca cualquier criterio reglamentario con `[VERIFICAR EDICIÓN VIGENTE Y AUTORIDAD COMPETENTE]`).»
- **Entradas:** «Sistema trifásico 400 V entre fases / 50 Hz; potencia activa $P = 28,0\text{ kW}$; $\cos\varphi = 0,88$; longitud $L = 42\text{ m}$; canalización prevista en bandeja perforada; temperatura ambiente $35\text{ °C}$; caída de tensión objetivo preliminar en este tramo $\le 1,5\text{ \%}$. Datos NO facilitados: número de circuitos agrupados, tipo de aislamiento (XLPE o PVC) y corriente de cortocircuito $I_{cc}$ en origen.»
- **Restricciones:** «No inventes factores de agrupamiento ni intensidades admisibles de tablas oficiales; escribe `FALTANTE` donde falte un dato.»
- **Formato:** «Devuelve: (1) tabla de cálculo paso a paso de la intensidad de empleo $I_b$ en A, (2) lista de datos faltantes para seleccionar sección en mm² y protección en A, y (3) checklist de verificación manual.»

El asistente calculará $I_b = \frac{28\,000}{\sqrt{3} \cdot 400 \cdot 0,88} \approx 45,93\text{ A}$ y bloqueará la elección definitiva de sección y calibre hasta recibir el aislamiento, el agrupamiento y la verificación de tabla normativa oficial. *Nota: tanto la fórmula como los criterios de caída de tensión e intensidad admisible deben verificarse siempre frente al reglamento aplicable en el país y su edición vigente.*

#### Errores frecuentes

- Formular *prompts* de una sola línea sin indicar tensión nominal ($230\text{ V}$ vs. $400\text{ V}$), frecuencia ($50\text{ Hz}$ vs. $60\text{ Hz}$) ni sistema (monofásico vs. trifásico).
- Pedir a ChatGPT o Claude «asegura que cumple con el REBT / NEC / IEC» esperando una certificación legal automática.
- Omitir la instrucción de declarar datos faltantes, provocando que la IA asuma $\cos\varphi = 1$ o temperatura ambiente estándar de $20\text{ °C}$ sin avisar.
- Solicitar prosa extensa en lugar de tablas estructuradas, lo que dificulta detectar un error de unidad ($\text{W}$ frente a $\text{kW}$ o $\text{kVA}$).

#### Preguntas que el alumnado debería poder responder

1. ¿Qué seis capas componen un *prompt* técnico fiable para instalaciones eléctricas y qué riesgo mitiga cada una?
2. ¿Por qué es obligatorio marcar cualquier referencia normativa (REBT, IEC 60364, NEC/NFPA 70) como sujeta a verificación de jurisdicción y edición vigente?
3. ¿Qué datos mínimos con unidades SI debes incluir antes de solicitar a una IA la revisión preliminar de un circuito de fuerza?

---

### 3.2. Ingeniería de restricciones: anti-alucinación, anonimización y gestión de contexto

#### Explicación breve y clara

En un entorno profesional, la calidad de un *prompt* no depende solo de lo que pides hacer, sino de **lo que prohíbes hacer y de lo que proteges antes de enviar la consulta**. Los asistentes conversacionales tienden a ser complacientes: si no impones restricciones duras de veracidad, completarán tablas de catálogos de luminarias, inventarán valores de resistencia de puesta a tierra o darán por cierta una compatibilidad directa inexistente entre herramientas.

Al mismo tiempo, existe una obligación crítica de confidencialidad y seguridad de la información: **nunca deben subirse planos originales (DWG/PDF con carátulas reales), memorias contractuales, datos personales de clientes ni ubicaciones identificables a modelos de IA externos** sin autorización expresa y entornos corporativos habilitados. Por ello, todo flujo de *prompting* profesional incluye una etapa previa de **anonimización y extracción tabular mínima** (enmascarar nombres de empresas, direcciones, códigos internos y sustituirlos por identificadores neutros como `PROY-COM-02`, `CGBT-01`, `ZONA-A`).

#### Conceptos clave

- **Regla de abstención explícita:** Cláusula dentro del *prompt* que obliga a la IA a responder «No verificable con los datos aportados» ante dudas normativas, parámetros faltantes o datos de catálogo no suministrados.
- **Anonimización previa:** Proceso sistemático de eliminación o sustitución de datos personales, razones sociales, ubicaciones exactas, planos propietarios y metadatos sensibles antes de consultar una IA externa.
- **Ventana de contexto y deriva:** Pérdida progresiva de precisión de un modelo de lenguaje cuando una conversación mezcla decenas de circuitos, cambios de versión y correcciones acumuladas sin reiniciar un resumen limpio.
- **Contraste cruzado entre modelos:** Uso metódico de dos asistentes (por ejemplo, ChatGPT y Claude) con el mismo *prompt* estructurado para detectar divergencias en supuestos o razonamientos antes de la validación humana.

#### Definiciones necesarias

- **Dato sensible de proyecto:** Toda información protegida por secreto empresarial, contrato o normativa de protección de datos (identidad del cliente, ubicación exacta de infraestructuras críticas, planos completos o presupuestos reales) que no debe exponerse en servicios externos sin autorización.
- **Prompt con anclaje en fuente adjunta (*Context-Grounded Prompt*):** Instrucción que restringe la respuesta exclusivamente a los fragmentos tabulares o parámetros proporcionados en el propio mensaje, prohibiendo recurrir a memoria paramétrica externa para cifras del proyecto.

#### Ejemplo práctico realista

Un coordinador BIM quiere utilizar Claude para revisar una lista de 12 cuadros secundarios exportada desde una hoja de cálculo de un centro comercial real. Antes de copiar la tabla, ejecuta un saneado en local:
- Sustituye `Centro Comercial Bahía Norte S.A. - Calle Puerto 14` por `PROY-TERC-07`.
- Elimina columnas de precio unitario, proveedor adjudicatario y contacto de propiedad.
- Conserva únicamente columnas técnicas con unidades: `ID_Cuadro`, `Tensión (V)`, `Potencia_Instalada (kW)`, `Factor_Simultaneidad`, `Potencia_Cálculo (kW)`, `Longitud_Acometida (m)`.

Luego aplica una restricción anti-alucinación en el *prompt*: «Evalúa únicamente coherencia aritmética ($P_{\text{cálculo}} = P_{\text{inst}} \cdot F_s$) y completitud de campos en la tabla anonimizada adjunta. Si un factor de simultaneidad está vacío o fuera del rango $(0, 1]$, repórtalo en la columna `Incidencia` sin proponer valores de reemplazo ni citar artículos reglamentarios de memoria.» El modelo detecta con precisión dos filas vacías y un cálculo incoherente ($45,0\text{ kW} \cdot 0,75 \neq 38,5\text{ kW}$), sin exponer ni un solo dato confidencial del cliente.

#### Errores frecuentes

- Pegar capturas o PDFs completos de planos con cajetines de cliente, direcciones reales y firmas profesionales en chats públicos sin autorización.
- Mantener sesiones infinitas de chat donde el modelo sigue recordando valores obsoletos de una versión anterior del cuadro de cargas.
- Permitir que el asistente «complete» características fotométricas de luminarias (lúmenes, potencia, archivo `.ldt`) desde su memoria general en lugar de leer la ficha oficial del fabricante.
- Confiar en una sola respuesta porque «suena muy técnica y segura», sin contrastar operaciones aritméticas básicas ni revisar hipótesis.

#### Preguntas que el alumnado debería poder responder

1. ¿Qué elementos concretos debes eliminar o sustituir al anonimizar información técnica antes de introducirla en un asistente de IA externo?
2. ¿Cómo se redacta una cláusula de abstención explícita eficaz para impedir que ChatGPT o Claude inventen coeficientes o citas normativas?
3. ¿Por qué conviene reiniciar la conversación con un resumen verificado tras varias iteraciones de cambios en un proyecto eléctrico?

---

### 3.3. Diseño de prompts por disciplina: cálculo eléctrico, DIALux, Revit MEP y Twinmotion

#### Explicación breve y clara

En el itinerario técnico del programa intervienen cuatro naturalezas de trabajo completamente distintas que **no deben mezclarse en un mismo *prompt* ambiguo**:
1. **Cálculo eléctrico normativo:** requiere rigor matemático, unidades SI, hipótesis explícitas y contraste reglamentario posterior; la IA actúa como ayuda para estructurar memoria, verificar pasos aritméticos y listar comprobaciones.
2. **Estudio fotométrico en DIALux:** se apoya en archivos `.ldt` (Eulumdat) o `.ies` y superficies del modelo lumínico; la IA no ejecuta el motor de cálculo de iluminación, pero sí redacta *prompts* excelentes para interpretar tablas exportadas ($E_m$ en lx, uniformidad $U_0$, UGR, eficiencia en $\text{W/m}^2$ frente a criterios orientativos tipo UNE-EN 12464-1 o CTE DB-HE3, verificando siempre edición y país).
3. **Modelado 3D en Revit MEP:** se centra en familias, categorías, sistemas (`Alumbrado`, `Fuerza`, `Acometidas`), canalizaciones y parámetros compartidos; un *prompt* aquí optimiza estructura de datos y coordinación geométrica, recordando siempre que un modelo 3D sin colisiones no demuestra cumplimiento eléctrico.
4. **Visualización en Twinmotion:** persigue comunicar espacialmente el proyecto (escenas, temperaturas de color en K, recorridos mediante *Direct Link* desde Revit, limitaciones reales si se busca llevar información desde DIALux); la IA apoya guiones de cámara y coherencia visual, aclarando que un render atractivo jamás valida una instalación eléctrica ni un cálculo lumínico.

#### Conceptos clave

- **Separación de dominios técnicos:** Principio de diseño de *prompts* que distingue explícitamente cálculos eléctricos, resultados fotométricos (DIALux), geometría/datos BIM (Revit MEP) y comunicación visual (Twinmotion).
- **Interpretación post-simulación:** Uso de la IA sobre resultados reales exportados desde DIALux o Revit (CSV, tablas o resúmenes numéricos) en lugar de pedirle que «simule» mentalmente niveles de iluminancia o trayectorias 3D.
- **Realismo de interoperabilidad:** Restricción incorporada en los *prompts* que prohíbe al asistente afirmar transferencias directas inexistentes (por ejemplo, asumir que Twinmotion importa cálculos fotométricos reglamentarios completos desde DIALux o que Revit valida automáticamente el reglamento eléctrico sin configuración ni verificación externa).
- **Trazabilidad entre disciplinas:** Inclusión de identificadores comunes en el *prompt* (`ID_Circuito`, `ID_Luminaria`, `ID_Local`) para enlazar lo calculado, lo modelado y lo documentado.

#### Definiciones necesarias

- **Archivo fotométrico (.ldt / .ies):** Archivo estándar normalizado (Eulumdat `.ldt` habitual en Europa e `.ies` habitual en Norteamérica/IESNA) que contiene la distribución espacial de intensidad luminosa, flujo en lúmenes y potencia de una luminaria para su cálculo en programas como DIALux.
- **Direct Link (Revit–Twinmotion):** Conector de sincronización geométrica y de materiales entre Revit y Twinmotion orientado a visualización en tiempo real; no transfiere memorias de cálculo eléctrico ni certificaciones normativas.

#### Ejemplo práctico realista

Un equipo trabaja en un espacio de oficina técnica (`LOCAL-OF-01`, $120\text{ m}^2$, altura libre $3,0\text{ m}$) y quiere utilizar un *prompt* específico para contrastar los resultados exportados desde DIALux frente a la carga asignada en Revit MEP:
- **Datos reales exportados de DIALux:** 24 luminarias modelo `LUM-LIN-34W` (catálogo `.ldt` verificado, flujo $4\,080\text{ lm}$, $P = 34\text{ W}$, $4\,000\text{ K}$), iluminancia media mantenida $E_m = 482\text{ lx}$, uniformidad $U_0 = 0,58$, UGR = 18, potencia total instalada $816\text{ W}$ ($6,80\text{ W/m}^2$).
- **Objetivo orientativo a verificar (referencia ilustrativa tipo UNE-EN 12464-1, pendiente de comprobar edición vigente):** $E_m \ge 500\text{ lx}$, $U_0 \ge 0,60$, UGR $\le 19$.
- **Instrucción del prompt:** «Compara únicamente estos datos de DIALux con el criterio objetivo indicado, señala desviaciones numéricas exactas y genera una nota de coordinación para Revit MEP (confirmando que los 24 ejemplares sumen $816\text{ W}$ en el circuito `C-AL1`) y una observación para Twinmotion (ajustar apariencia visual a $4\,000\text{ K}$ sin tratar el render como validación lumínica).»

La IA identifica con exactitud que $E_m$ está $18\text{ lx}$ por debajo ($-3,6\text{ \%}$) y $U_0$ está $0,02$ por debajo del objetivo, sugiere revisar el factor de mantenimiento o disposición de luminarias en DIALux (no «arreglarlo subiendo el brillo en Twinmotion») y recuerda confirmar el parámetro de potencia en la familia de Revit.

#### Errores frecuentes

- Pedir a ChatGPT o Claude que «calcule los luxes de una oficina de $120\text{ m}^2$ con 24 luminarias» dando por válido su número sin modelar ni simular en DIALux con archivos `.ldt`/`.ies`.
- Solicitar un flujo de automatización asumiendo que DIALux exporta resultados normativos directos a Twinmotion mediante *Direct Link* de forma nativa y bidireccional.
- Redactar *prompts* para Revit MEP que mezclan lenguaje de diseño eléctrico normativo con parámetros puramente geométricos, confundiendo «familia colocada y conectada en 3D» con «instalación verificada».
- Ajustar la intensidad visual de luces en Twinmotion guiándose por sugerencias estéticas de la IA y presentar la imagen resultante como prueba de confort visual reglamentario.

#### Preguntas que el alumnado debería poder responder

1. ¿Qué diferencia existe entre usar un *prompt* para asistir cálculos eléctricos frente a usarlo para interpretar tablas exportadas de DIALux o revisar parámetros de Revit MEP?
2. ¿Por qué un *prompt* sobre Twinmotion nunca debe pedir conclusiones sobre cumplimiento lumínico ni seguridad eléctrica?
3. Si cambias el archivo `.ldt` de una luminaria en DIALux de $34\text{ W}$ a $42\text{ W}$, ¿qué cadena de verificación documental entre DIALux, Revit MEP y cuadro de cargas debes incluir en tu *prompt*?

---

### 3.4. Creación, versionado y gobernanza de una biblioteca de prompts del estudio

#### Explicación breve y clara

Escribir un buen *prompt* una vez ahorra diez minutos; **convertirlo en una plantilla versionada, probada y compartida dentro de una biblioteca del estudio** estandariza la calidad de todo el equipo técnico. Sin gobernanza, cada proyectista improvisa consultas distintas en su ordenador, obtiene formatos incompatibles y repite errores que ya se habían corregido semanas atrás.

Una biblioteca profesional de *prompts* para ingeniería eléctrica y BIM se organiza por fases del proyecto (`01-CALC`, `02-DIALUX`, `03-REVIT`, `04-DOC`, `05-TWINMOTION`, `06-QA`). Cada ficha lleva un identificador único, número de versión semántica (`v1.0`, `v1.1`), variables claramente marcadas entre corchetes (`[TENSION_V]`, `[NORMA_A_VERIFICAR]`), modelo(s) en los que se ha ensayado, un **caso patrón verificado manualmente** (*golden test*) para comprobar que sigue funcionando tras actualizaciones de ChatGPT o Claude, y el responsable de revisión técnica.

#### Conceptos clave

- **Taxonomía por fase de proyecto:** Clasificación estructurada de plantillas según el módulo de trabajo (`01-CALC` hasta `06-QA`) para localizar rápidamente la herramienta correcta.
- **Variables parametrizadas:** Marcadores explícitos como `[POTENCIA_KW]` o `[PAIS_Y_NORMA_A_VERIFICAR]` que indican exactamente qué datos anonimizados debe rellenar el usuario antes de ejecutar el *prompt*.
- **Caso patrón de regresión (*Golden Case*):** Conjunto de datos reales o ficticios ya resuelto y verificado manualmente que sirve para probar si una plantilla nueva o una nueva versión del modelo de IA mantiene la precisión esperada.
- **Control de versiones documental:** Registro de fecha, autor, cambios introducidos y motivo de actualización en cada plantilla para garantizar trazabilidad interna.

#### Definiciones necesarias

- **Biblioteca de prompts del estudio:** Repositorio centralizado, catalogado y mantenido bajo control de versiones que reúne plantillas de consulta validadas internamente para tareas técnicas recurrentes.
- **Criterio de aceptación de plantilla:** Conjunto de requisitos mínimos (ausencia de alucinación en el caso patrón, cumplimiento estricto de formato, unidades SI correctas y advertencias de verificación presentes) exigido antes de publicar una plantilla para el equipo.

#### Ejemplo práctico realista

Un estudio técnico define la ficha catalogada `PR-CALC-02 v1.2` («Auditoría preparatoria de hipótesis en cuadro de cargas») dentro de su carpeta compartida:
- **Código y versión:** `PR-CALC-02 v1.2` · **Estado:** Validada para uso interno de apoyo.
- **Modelos ensayados:** ChatGPT (modelo de razonamiento actualizado en entorno corporativo sin entrenamiento) y Claude (proyecto con instrucciones del estudio).
- **Entradas obligatorias:** Tabla anonimizada de circuitos con `ID`, `Uso`, `U_n (V)`, `P_inst (kW)`, `cos(phi)`, `F_s`, `L (m)`, `Método_instalación`.
- **Prueba patrón aplicada:** Cuadro de 8 circuitos donde el circuito `C-05` omite la longitud `L` y el `C-07` muestra inconsistencia entre $P_{\text{inst}}$ y $I_b$.
- **Resultado esperado para aprobar `v1.2`:** El asistente debe señalar exactamente `C-05` como `FALTANTE`, detectar el desajuste aritmético en `C-07`, no proponer secciones comerciales sin datos térmicos/agrupamiento y cerrar con la tabla de comprobación manual por el técnico competente.

#### Errores frecuentes

- Guardar *prompts* sueltos en notas personales sin indicar qué datos son obligatorios ni en qué unidades deben introducirse.
- Actualizar una plantilla cambiando restricciones clave sin volver a probarla con el caso patrón, reintroduciendo alucinaciones ya resueltas.
- Dejar que el alumnado o personal junior copie una plantilla sin leer la cláusula de jurisdicción normativa y asuma criterios de otro país.
- Carecer de responsable de mantenimiento y control de versiones, acumulando copias duplicadas (`prompt_final_v2_bueno.txt`).

#### Preguntas que el alumnado debería poder responder

1. ¿Qué campos mínimos de metadatos debe contener una ficha de plantilla dentro de la biblioteca de *prompts* de un estudio de ingeniería?
2. ¿Para qué sirve un caso patrón de regresión (*golden test*) al actualizar una plantilla o cambiar de versión de ChatGPT/Claude?
3. ¿Cómo gestionarías una actualización de una plantilla cuando cambia el formato de exportación CSV desde Revit MEP?

---

## 4. Metodología didáctica

Duración total de la secuencia didáctica: **240 minutos (4 horas)**.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
|---|---|---|---|
| **1. Apertura y activación de conocimientos previos** | 15 min | Presenta los objetivos del tema, muestra un ejemplo real de fallo grave provocado por un *prompt* vago sin restricciones y formula preguntas iniciales de diagnóstico. | Responde al sondeo diagnóstico inicial y señala los riesgos técnicos y de confidencialidad observados en el ejemplo de apertura. |
| **2. Exposición breve: anatomía de 6 capas y seguridad** | 20 min | Explica mediante microaprendizaje la estructura de seis capas, las cláusulas de no invención y el protocolo obligatorio de anonimización. | Toma notas estructuradas y identifica en su ficha de trabajo qué capas faltan en dos consultas cotidianas reales. |
| **3. Actividad 1 (Activación): autopsia de prompt defectuoso** | 25 min | Entrega el enunciado de una consulta defectuosa con datos sin anonimizar y guía el análisis grupal hacia las seis brechas clave. | Diagnostica en parejas los errores de unidades, contexto normativo, confidencialidad y alucinación del ejemplo y comparte conclusiones. |
| **4. Exposición aplicada: prompts por disciplina (Eléctrica, DIALux, Revit, Twinmotion)** | 20 min | Demuestra en vivo en ChatGPT y Claude cómo separar cálculo, fotometría, BIM y visualización manteniendo trazabilidad e interoperabilidad realista. | Observa la demostración comparativa y registra diferencias entre ambos modelos respecto a fidelidad al formato y manejo de datos faltantes. |
| **5. Actividad 2 (Aplicación técnica): de consulta vaga a 6 capas** | 50 min | Supervisa el trabajo práctico en equipos, valida que nadie suba datos confidenciales reales y resuelve dudas sobre unidades SI y marcadores normativos. | Redacta y ejecuta dos *prompts* de seis capas (baja tensión y tabla DIALux), compara salidas de ChatGPT y Claude y verifica manualmente cada cifra. |
| **6. Pausa activa y debate de hallazgos** | 15 min | Modera una puesta en común de errores detectados en las salidas de la IA y refuerza los límites entre ayuda documental y validación profesional. | Expone qué supuestos ocultos o alucinaciones interceptó durante la prueba comparativa y contrasta criterios con el grupo. |
| **7. Actividad 3 (Transferencia): biblioteca de prompts del estudio** | 55 min | Facilita la plantilla de catalogación y propone un caso patrón de prueba para verificar que las plantillas diseñadas cumplen criterios de gobernanza. | Construye, parametriza y prueba 3 fichas de plantilla (`CALC`, `DIALUX`, `REVIT/DOC`) listas para incorporar a su biblioteca de estudio. |
| **8. Caso práctico de cierre, evaluación y síntesis** | 40 min | Presenta el caso práctico integrador del tema, orienta la resolución mediante rúbrica, conduce la autoevaluación y cierra con próximos pasos. | Resuelve el caso práctico aplicando la rúbrica, completa el test sumativo/autoevaluación y entrega su primer repositorio catalogado de *prompts*. |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Autopsia de un prompt defectuoso y saneado de datos

- **Nombre:** Autopsia de un *prompt* defectuoso y saneado de datos sensibles.
- **Objetivo:** Diagnosticar carencias estructurales, riesgos normativos y fugas de confidencialidad en una consulta técnica mal formulada.
- **Instrucciones para el alumnado:**
  1. Leed el siguiente *prompt* real defectuoso: *«Hola, tengo el proyecto de Supermercados El Roble en Calle Mayor 22 (Valencia). El cuadro general tiene 65 kW y el pasillo sale en DIALux con 180 luxes pero en Revit puse 14 lámparas. Dime qué cable y magnetotérmico pongo según el REBT y cómo exporto directo de DIALux a Twinmotion para demostrar al cliente que cumple.»*
  2. Identificad al menos 6 fallos críticos agrupados en: confidencialidad, unidades/datos eléctricos faltantes, uso indebido de normativa, confusión entre cálculo/DIALux/Revit/Twinmotion y falta de formato auditable.
  3. Redactad la versión anonimizada de los datos de partida antes de formular cualquier consulta.
- **Materiales necesarios:** Ficha de trabajo impresa o digital del Tema 7 y guía de marcadores de anonimización.
- **Tiempo estimado:** 25 minutos (15 min análisis en parejas + 10 min puesta en común).
- **Rol del formador:** Moderar la identificación de fallos, evitar que el grupo pase por alto la falsa interoperabilidad DIALux→Twinmotion y recalcar la prohibición de subir direcciones o clientes reales.
- **Producto o entregable esperado:** Tabla de diagnóstico con los 6 fallos clasificados y bloque de entrada anonimizado (`PROY-COM-01`) con lista de datos eléctricos y fotométricos faltantes.
- **Criterios de éxito:** Identifica correctamente el 100 % de los riesgos de confidencialidad, distingue las cuatro disciplinas (cálculo, DIALux, Revit, Twinmotion) y enumera al menos 5 parámetros SI ausentes imprescindibles antes de calcular.

### Actividad 2 (Aplicación técnica): Transformación a arquitectura de 6 capas y contraste LLM

- **Nombre:** De consulta vaga a *prompt* de seis capas con contraste entre ChatGPT y Claude.
- **Objetivo:** Redactar y probar *prompts* estructurados con restricciones de no invención para asistir la revisión de un circuito eléctrico y la lectura de resultados exportados de DIALux.
- **Instrucciones para el alumnado:**
  1. En equipos de 2 o 3 personas, redactad dos *prompts* completos aplicando las 6 capas:
     - **Prompt A (Eléctrico):** Revisión preparatoria de un circuito trifásico alimentador de maquinaria (`400 V / 50 Hz`, $P = 22,0\text{ kW}$, $\cos\varphi = 0,85$, $L = 38\text{ m}$, bandeja perforada, $T_{\text{amb}} = 30\text{ °C}$), omitiendo intencionadamente el tipo de aislamiento y el número de conductores agrupados para comprobar si la IA respeta la regla de no invención.
     - **Prompt B (DIALux + Revit):** Contraste de una tabla exportada de un aula de formación (`90 m²`, 12 luminarias de `36 W`, $E_m = 465\text{ lx}$, $U_0 = 0,62$, UGR = 18) frente a criterios orientativos de referencia (`500 lx`, $U_0 \ge 0,60$, UGR $\le 19$, a verificar edición vigente) y comprobación de suma de potencia hacia Revit MEP.
  2. Ejecutad ambos *prompts* en ChatGPT y en Claude (usando únicamente datos ficticios del ejercicio).
  3. Auditad manualmente la fórmula $I_b$ (en A) y la potencia total de alumbrado (en W y $\text{W/m}^2$), registrando si alguno de los modelos inventó datos faltantes o asumió normativa sin advertencia.
- **Materiales necesarios:** Acceso a ChatGPT y Claude (cuentas formativas o demostración en pantalla), calculadora o hoja de cálculo independiente y plantilla de 6 capas.
- **Tiempo estimado:** 50 minutos.
- **Rol del formador:** Supervisar en tiempo real que los *prompts* incluyan cláusulas de abstención y marcadores de verificación normativa; verificar con el grupo el cálculo manual ($I_b \approx 37,36\text{ A}$; alumbrado $432\text{ W} \rightarrow 4,80\text{ W/m}^2$).
- **Producto o entregable esperado:** Documento comparativo con los 2 *prompts* finales, captura o extracto de respuestas de ambos asistentes y tabla de verificación manual de cálculos y alucinaciones.
- **Criterios de éxito:** Ambos *prompts* contienen las 6 capas completas; ambos asistentes reportan `FALTANTE` en los datos omitidos en el Prompt A; el alumnado comprueba independientemente $I_b$ y densidad de potencia sin errores de unidades.

### Actividad 3 (Transferencia a proyecto real): Construcción de 3 fichas para la biblioteca del estudio

- **Nombre:** Diseño, parametrización y prueba de regresión de 3 plantillas de *prompts* reutilizables.
- **Objetivo:** Crear un primer módulo funcional de biblioteca de *prompts* estandarizada aplicable al proyecto integrador del curso o al flujo habitual del estudio.
- **Instrucciones para el alumnado:**
  1. Tomad el formato de ficha catalogada del Tema 7 (`ID`, `Versión`, `Disciplina`, `Entradas obligatorias con [VARIABLES]`, `Restricciones de seguridad y no invención`, `Prompt parametrizado`, `Caso patrón` y `Checklist de validación humana`).
  2. Diseñad **3 plantillas reutilizables** adaptadas a vuestro entorno profesional o proyecto del programa:
     - `PR-ELEC-01`: Comprobación preparatoria de cuadro de cargas e hipótesis.
     - `PR-DIALUX-01`: Lectura crítica de tabla fotométrica exportada y cruce con catálogo `.ldt`/`.ies`.
     - `PR-REVIT-01`: Revisión de coherencia de nomenclatura y parámetros de circuitos/luminarias en tabla CSV.
  3. Ensayad al menos una plantilla con un caso patrón que incluya un error sembrado deliberadamente (p. ej. una unidad mezclada o un campo vacío) y documentad el resultado.
- **Materiales necesarios:** Plantilla técnica de ficha de biblioteca en Markdown o hoja de cálculo y extracto de datos ficticios anonimizados del proyecto del curso.
- **Tiempo estimado:** 55 minutos.
- **Rol del formador:** Revisar la claridad de las variables `[ENTRE_CORCHETES]`, asegurar que no existan referencias normativas sin advertencia de jurisdicción y validar el diseño del caso patrón.
- **Producto o entregable esperado:** Mini-biblioteca con 3 fichas de *prompts* versionadas (`v1.0`) y registro de prueba con el caso patrón.
- **Criterios de éxito:** Las 3 fichas son directamente reutilizables por otro compañero sin ambigüedad de unidades, incorporan reglas de anonimización y superan la prueba del error sembrado.

---

## 6. Caso práctico

### Consultora ElectroBIM Levante S.L.: estandarización de prompts tras una entrega con incidencias

#### Contexto empresarial

ElectroBIM Levante S.L. es una oficina técnica de tamaño medio (14 profesionales entre ingenieros eléctricos, proyectistas CAD/BIM y delineantes) que desarrolla instalaciones eléctricas de edificios terciarios y pequeñas naves logísticas. El equipo utiliza software de cálculo según país de proyecto, DIALux para iluminación, Revit MEP para modelado 3D y planos, y Twinmotion para presentaciones al cliente. Desde hace cuatro meses, parte de la plantilla usa ChatGPT y Claude de forma libre y sin criterios unificados para acelerar memorias, revisar tablas y redactar listas de comprobación.

#### Situación o problema

Durante el último mes se han producido **dos incidentes críticos** en revisiones internas previas a entrega:
1. Un proyectista junior pidió a un asistente abierto «revisar la tabla de circuitos de la nave de un cliente real» pegando un extracto PDF que incluía el nombre del promotor, la dirección exacta de la parcela y precios confidenciales; además, el asistente propuso secciones de conductores basándose en una norma de otro país sin que el usuario lo advirtiera hasta la revisión senior.
2. En un edificio de oficinas, un técnico pidió a la IA redactar conclusiones sobre el confort visual a partir de capturas de Twinmotion y un resumen incompleto de DIALux sin unidades ni UGR, confundiendo calidad visual del render con cumplimiento lumínico y dejando discrepancias de potencia entre los `.ldt` de DIALux (38 W por luminaria) y la familia cargada en Revit MEP (32 W por luminaria).

La dirección técnica decide implantar en 10 días una **Biblioteca Oficial de Prompts v1.0** obligatoria para todo el estudio, acompañada de un protocolo de anonimización y pruebas de verificación.

#### Datos disponibles

- **Plantilla afectada:** 4 ingenieros eléctricos, 6 modeladores Revit MEP y 4 técnicos de apoyo documental/visualización.
- **Tipologías de tareas recurrentes:** (a) verificación preparatoria de cuadros de cargas, (b) interpretación de tablas exportadas de DIALux, (c) revisión de parámetros CSV de Revit MEP, (d) redacción de notas generales y especificaciones, y (e) preparación de guiones visuales para Twinmotion.
- **Extracto técnico de prueba (datos ya anonimizados `PROY-NAV-04`):**
  - Circuito `C-MOT-02` (trifásico $400\text{ V} / 50\text{ Hz}$): $P = 30,0\text{ kW}$, $\cos\varphi = 0,86$, $L = 55\text{ m}$, método instalación no indicado, agrupamiento no indicado.
  - Zona Oficinas `Z-OF-01` ($150\text{ m}^2$): en DIALux constan 30 luminarias de $38\text{ W}$ ($4\,500\text{ lm}$, $4\,000\text{ K}$, $E_m = 515\text{ lx}$, $U_0 = 0,63$, UGR = 17); en el schedule exportado de Revit MEP constan 30 ejemplares de la familia `LUM-EMP-32W` ($960\text{ W}$ totales frente a $1\,140\text{ W}$ en DIALux).
- **Restricción organizativa:** Ninguna herramienta de IA tiene habilitación para firmar ni validar proyectos; la oficina dispone de 6 horas de formación interna para implantar la nueva metodología.

#### Preguntas de análisis

1. ¿Qué fallos de gobernanza y de diseño de *prompts* originaron los dos incidentes en ElectroBIM Levante S.L.?
2. ¿Qué reglas obligatorias de anonimización y qué restricciones de no invención deben imponerse antes de permitir el uso de ChatGPT o Claude en el estudio?
3. Con los datos anonimizados de `PROY-NAV-04`, ¿qué datos exactos faltan para dimensionar `C-MOT-02` y qué discrepancia cuantitativa debe resolverse entre DIALux y Revit MEP?
4. ¿Cómo evitar que el equipo vuelva a mezclar la presentación en Twinmotion con la comprobación fotométrica de DIALux o el cálculo eléctrico?

#### Tarea a realizar

En grupos de 3 personas, actuad como comité técnico de implantación y elaborad un **Plan Operativo de Prompts del Estudio** que incluya:
1. Decálogo breve de seguridad, anonimización y límites normativos para el equipo (máximo 1 página).
2. Dos plantillas completas de 6 capas listas para el caso `PROY-NAV-04`: una para auditar `C-MOT-02` sin inventar datos faltantes y otra para cruzar el resumen de DIALux con el CSV de Revit MEP y emitir notas diferenciadas hacia Twinmotion.
3. Ejecución comprobada de ambas plantillas frente a los datos del caso y tabla manual de validación verificando intensidad de empleo $I_b$ de `C-MOT-02`, diferencia de potencia en W y densidad de potencia en $\text{W/m}^2$ de `Z-OF-01`.

#### Posibles soluciones o criterios de análisis

- **Sobre confidencialidad y gobernanza:** Prohibición expresa de introducir nombres de clientes, direcciones, planos completos o presupuestos reales; uso obligatorio de códigos `PROY-XXX`; activación de cuentas corporativas sin retención para entrenamiento cuando proceda y mantenimiento centralizado de versiones.
- **Sobre `C-MOT-02`:** Cálculo manual independiente $I_b = \frac{30\,000}{\sqrt{3} \cdot 400 \cdot 0,86} \approx 50,35\text{ A}$. El *prompt* debe bloquear cualquier recomendación de sección en $\text{mm}^2$ o interruptor automático hasta disponer del tipo de cable/aislamiento, método de instalación normalizado, temperatura ambiente, agrupamiento, caída de tensión máxima admisible e $I_{cc}$ según la normativa vigente del país aplicable.
- **Sobre `Z-OF-01`:** En DIALux, $30 \times 38\text{ W} = 1\,140\text{ W}$ ($7,60\text{ W/m}^2$); en Revit MEP figuran $30 \times 32\text{ W} = 960\text{ W}$ ($6,40\text{ W/m}^2$). Existe una subestimación de **$180\text{ W}$ ($+18,75\text{ \%}$ respecto a Revit)** que debe corregirse en la familia/parámetro de Revit MEP y en el circuito eléctrico de alumbrado. Twinmotion solo reflejará apariencia visual a $4\,000\text{ K}$ vía *Direct Link* tras actualizar el modelo Revit.

#### Preguntas de reflexión final

1. ¿Qué coste de retrabajo supone detectar una discrepancia de $180\text{ W}$ en alumbrado o una norma errónea en fase de obra frente a interceptarla mediante un *prompt* auditado antes de emitir planos?
2. ¿Qué controles organizativos garantizan que la biblioteca de *prompts* siga viva dentro de seis meses y no quede olvidada en una carpeta compartida?

---

## 7. Evaluación

### Evaluación diagnóstica (inicio de sesión, 5–10 minutos)

Cuestionario breve de 5 ítems (en aula o formulario online) para comprobar punto de partida:
1. Identificar qué ocurre cuando no se especifica tensión ni $\cos\varphi$ en una consulta a un LLM.
2. Señalar qué datos de un plano real son confidenciales y no deben pegarse en un chat público.
3. Distinguir qué herramienta realiza cálculo fotométrico (DIALux), modelado BIM (Revit MEP), visualización (Twinmotion) y apoyo documental (ChatGPT/Claude).
4. Reconocer qué unidades SI corresponden a potencia activa, potencia aparente, iluminancia y caída de tensión.

### Evaluación formativa (durante la sesión)

Observación estructurada mediante lista de cotejo durante las Actividades 1, 2 y 3:
- Uso efectivo de códigos de anonimización en todas las entradas de prueba.
- Inclusión explícita de las 6 capas en los *prompts* redactados.
- Comprobación manual independiente (calculadora u hoja de cálculo) de toda cifra devuelta por la IA antes de comentarla en plenario.

### Evaluación sumativa (cierre de sesión)

Entrega individual o en pareja de un **Paquete de Biblioteca de Prompts v1.0** compuesto por:
1. Tres fichas técnicas de *prompts* parametrizadas (`PR-ELEC`, `PR-DIALUX`, `PR-REVIT`).
2. Resolución escrita del caso práctico `PROY-NAV-04` con registro de prueba en ChatGPT/Claude y verificación matemática independiente.
3. Test teórico-práctico corto (8 preguntas de opción múltiple y análisis de fallo en un *prompt* real).

### Rúbrica de evaluación

| Criterio | Insuficiente (0–4,9) | En desarrollo (5,0–6,9) | Adecuado (7,0–8,9) | Destacado (9,0–10) |
|---|---|---|---|---|
| **Estructura de 6 capas del prompt** | Consulta vaga de texto libre; faltan 3 o más capas esenciales (rol, entradas SI, restricciones o formato). | Incluye 4 capas básicas, pero deja ambiguo el formato de salida o el bloque de verificación. | Incorpora las 6 capas completas con variables claras, unidades SI y formato tabular limpio. | Diseña *prompts* modulares de 6 capas con delimitadores precisos, etiquetas `FALTANTE` y salida directamente auditable. |
| **Seguridad, confidencialidad y normativa** | Introduce datos reales identificables o acepta citas normativas inventadas sin advertir jurisdicción ni edición. | Anonimiza parcialmente los datos, pero olvida advertir la verificación normativa de país y edición vigente. | Anonimiza correctamente toda entrada e incluye cláusula explícita de normativa a verificar. | Aplica protocolo estricto de saneado previo, regla de abstención dura y trazabilidad documental ejemplar. |
| **Rigor técnico y verificación independiente** | Acepta cálculos o valores de la IA sin contrastar; confunde unidades ($\text{W}$/$\text{kVA}$, $\text{lx}$/$\text{lm}$) o mezcla funciones de DIALux y Twinmotion. | Realiza comprobación manual parcial con errores menores de redondeo o deja alguna hipótesis sin explicar. | Verifica manualmente fórmulas, unidades SI y discrepancias entre disciplinas antes de concluir. | Detecta alucinaciones sutiles, comprueba cálculos paso a paso y separa con precisión cálculo, fotometría, BIM y render. |
| **Reutilización y gobernanza de biblioteca** | Entrega textos sueltos sin metadatos, versiones ni pruebas reproducibles. | Presenta fichas incompletas sin caso patrón o con variables poco claras para terceros. | Cataloga 3 plantillas con metadatos completos, variables `[ENTRE_CORCHETES]` y prueba básica. | Entrega biblioteca versionada, probada frente a errores sembrados (*golden test*) y lista para uso inmediato del equipo. |

### Actividad de autoevaluación

El alumnado completa individualmente la siguiente escala rápida de verificación al finalizar la sesión:
- ¿He comprobado de forma independiente cada fórmula, unidad SI y resultado numérico generado por el asistente antes de darlo por válido? *(Sí / No / Requiere revisión)*
- ¿He marcado explícitamente cualquier referencia normativa (REBT, IEC, NEC, UNE-EN) como «ilustrativa / a verificar según país y edición vigente»? *(Sí / No)*
- ¿He anonimizado completamente clientes, direcciones y planos antes de interactuar con la IA? *(Sí / No)*
- ¿Qué capa de mis *prompts* necesito reforzar en las próximas sesiones del Bloque 6 (Temas 8 a 11)? *(Respuesta abierta breve de 3 líneas)*

---

## 8. Materiales y recursos

### Guion estructurado de diapositivas (8 diapositivas)

- **Slide 1 — Portada y encuadre del tema:** Título del Tema 7, posición en el Bloque 6 (Tema 46 de 50), objetivos de aprendizaje y recordatorio de alcance técnico (la IA asiste, el técnico competente verifica y responde).
- **Slide 2 — Por qué fallan los prompts genéricos en ingeniería eléctrica:** Ejemplo real en pantalla de una pregunta corta y las 5 alucinaciones típicas que produce (norma equivocada, $\cos\varphi$ supuesto, temperatura inventada, sección sin agrupamiento, unidades mezcladas).
- **Slide 3 — Arquitectura del prompt especializado en 6 capas:** Esquema visual de las 6 capas obligatorias con ejemplo anotado de entrada y salida en tabla Markdown.
- **Slide 4 — Ingeniería de restricciones, no invención y anonimización:** Reglas duras de abstención (`FALTANTE`), delimitadores de contexto y tabla «Qué NO subir jamás vs. Cómo anonimizar».
- **Slide 5 — Prompts diferenciados por disciplina:** Matriz comparativa de uso en Cálculo Eléctrico, DIALux (`.ldt`/`.ies`, $E_m$, $U_0$, UGR), Revit MEP (parámetros y sistemas) y Twinmotion (*Direct Link*, comunicación visual sin validez normativa).
- **Slide 6 — Comparativa práctica ChatGPT vs. Claude:** Criterios de contraste entre respuestas, gestión de deriva de contexto y detección de supuestos implícitos.
- **Slide 7 — Biblioteca de prompts del estudio y control de versiones:** Taxonomía (`01-CALC` a `06-QA`), estructura de ficha catalogada y concepto de caso patrón de regresión (*golden test*).
- **Slide 8 — Resumen operativo, caso práctico y checklist de cierre:** Síntesis de reglas de oro y presentación de la actividad evaluativa final.

### Ficha de trabajo del alumnado (para actividades en aula)

Documento de trabajo estructurado en tres bloques para completar durante la sesión:
- **Bloque A (Auditoría rápida):** Matriz de 6 columnas para registrar fallos detectados en la Actividad 1 (`Confidencialidad`, `Unidades SI`, `Datos faltantes`, `Normativa`, `Falsa interoperabilidad`, `Formato`).
- **Bloque B (Mesa de pruebas comparativas):** Plantilla con espacios para pegar el *prompt* de 6 capas, resultado de ChatGPT, resultado de Claude, cálculo manual independiente y veredicto de discrepancias.
- **Bloque C (Registro de verificación personal):** Lista de chequeo con casillas de confirmación de anonimización y comprobación numérica.

### Plantilla técnica práctica: Ficha de Biblioteca de Prompts v1.0

| Campo de la ficha | Especificación a completar |
|---|---|
| **Código y versión** | `[PR-DISCIPLINA-NN v1.0]` |
| **Título descriptivo** | `[Nombre claro de la tarea técnica]` |
| **Objetivo y límites** | `[Qué asiste exactamente y qué NO sustituye (cálculo oficial, ensayo o visado)]` |
| **Jurisdicción / Norma** | `[País y reglamento a verificar explícitamente en edición vigente]` |
| **Entradas anonimizadas obligatorias** | `[Listado con unidades SI exactas: V, A, kW, kVA, m, mm², lx, lm, W/m²]` |
| **Cuerpo del prompt (6 capas)** | `[Rol + Marco a verificar + <entradas> + Reglas de no invención + Formato de tabla + Bloque de validación]` |
| **Caso patrón (Golden Test)** | `[Mini-entrada con fallo sembrado + salida esperada para aprobar la plantilla]` |
| **Criterio de validación humana** | `[Comprobación manual, software de cálculo o catálogo que debe revisar el técnico]` |

### Lecturas y recursos recomendados

> **Advertencia obligatoria de validación:** Antes de aplicar en proyectos reales cualquier referencia normativa, guía de ingeniería de *prompts*, documentación de software o criterio técnico citado en estos recursos, debéis verificar su país de aplicación, organismo emisor, edición vigente, versión exacta de Revit/DIALux/Twinmotion y políticas vigentes de privacidad de ChatGPT y Claude.

- **Documentación oficial de guías de ingeniería de prompts:** Guías técnicas oficiales de OpenAI (*Prompt Engineering Guide*) y Anthropic (*Prompt Engineering Overview* — uso de etiquetas XML/delimitadores y prevención de alucinaciones), revisando siempre su actualización vigente.
- **Marcos normativos eléctricos de referencia (a validar según jurisdicción):** Reglamento Electrotécnico para Baja Tensión (REBT en España e ITCs aplicables), norma internacional IEC 60364 (*Low-voltage electrical installations*) o NFPA 70 / NEC en jurisdicciones norteamericanas, comprobando siempre el texto legal oficial vigente en el emplazamiento del proyecto.
- **Referencia de iluminación interior (a validar según jurisdicción):** Norma europea UNE-EN 12464-1 sobre iluminación de los lugares de trabajo y documentos técnicos de ahorro energético aplicables (p. ej., CTE DB-HE3 en España si procede), verificando edición y ámbito.
- **Manuales oficiales de software del programa:** Documentación oficial de DIALux (uso de archivos `.ldt` Eulumdat e `.ies`), Autodesk Revit MEP (sistemas eléctricos y tablas de planificación) y Epic Games Twinmotion (*Direct Link* con Revit), consultando la compatibilidad según la versión instalada.

### Glosario de términos clave

| Término | Definición |
|---|---|
| **Prompt de seis capas** | Instrucción técnica estructurada en rol acotado, marco normativo a verificar, entradas con unidades SI, restricciones de no invención, formato controlado y protocolo de validación humana. |
| **Alucinación técnica** | Respuesta generada por un modelo de lenguaje que inventa o distorsiona cifras, secciones de cables, artículos reglamentarios o capacidades de interoperabilidad de software con apariencia verosímil. |
| **Anonimización previa** | Eliminación o sustitución de datos sensibles (clientes, ubicaciones, planos reales, importes contractuales) por códigos neutros antes de introducir información en asistentes de IA externos. |
| **Regla de abstención** | Cláusula incluida en el *prompt* que obliga al modelo a declarar explícitamente `FALTANTE` o «no verificable» cuando carece de datos suficientes en lugar de asumir valores por defecto. |
| **Archivo Eulumdat (.ldt) / IES (.ies)** | Formato normalizado de datos fotométricos suministrado por fabricantes de luminarias para modelar con rigor la distribución luminosa en DIALux. |
| **Caso patrón (*Golden Test*)** | Conjunto controlado de datos de prueba con errores conocidos y resultado validado manualmente que permite comprobar si una plantilla de *prompt* sigue siendo fiable tras editarla. |
| **Trazabilidad documental** | Capacidad de rastrear sin ambigüedad el origen de cada dato, hipótesis de cálculo, versión de plantilla de IA, revisión humana y cambio aplicado en planos o modelos. |

---

## 9. Adaptaciones

### Sesión presencial

- **Dinámica de aula:** Trabajo en islas de 3 personas con un portátil cada una; el formador proyecta en paralelo la respuesta en vivo de ChatGPT y Claude para contrastar al instante discrepancias de formato y posibles alucinaciones.
- **Soporte físico:** Se entregan impresas la «Ficha de trabajo (Bloques A–C)» y tarjetas de rol con errores sembrados para la Actividad 1.
- **Gestión del tiempo:** La pausa activa de 15 minutos se aprovecha como galería rápida donde cada mesa deja abierta en pantalla su mejor plantilla de 6 capas para revisión por pares.

### Sesión online síncrona

- **Herramientas digitales:** Videoconferencia con salas de grupos pequeños (*breakout rooms*) de 2–3 participantes y documento colaborativo compartido en la nube (hoja de cálculo o Markdown compartido) para construir en directo las 3 fichas de biblioteca.
- **Control de ritmo:** Uso de temporizador visible en pantalla para los bloques de 25, 50 y 55 minutos; el formador rota por las salas verificando que se anonimicen datos y se comprueben cálculos manualmente.
- **Interacción:** Sondeo inicial y autoevaluación final mediante encuesta interactiva instantánea en la plataforma del campus.

### Sesión asíncrona

- **Estructura guiada:** Vídeo microformativo pregrabado (20–25 min) explicando las 6 capas y mostrando la demostración comparativa entre ChatGPT y Claude con subtítulos de verificación.
- **Práctica autónoma:** El participante descarga el paquete de datos anonimizados (`PROY-NAV-04.csv`), redacta los *prompts*, ejecuta sus pruebas en los asistentes y sube al campus un único archivo PDF o Markdown con sus 3 fichas catalogadas, capturas de verificación y hoja de cálculo independiente con las comprobaciones manuales.
- **Retroalimentación:** Foro técnico obligatorio donde cada alumno comenta al menos una brecha de seguridad o alucinación detectada en el trabajo de un compañero empleando la rúbrica del tema; tutoría diferida del formador en 48–72 horas.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Consolida los fundamentos de magnitudes y circuitos eléctricos del **Módulo 1**, la lectura e interpretación de parámetros fotométricos de **DIALux (Módulo 2)**, la estructura de familias y parámetros de **Revit MEP (Módulo 3)**, la coherencia de planos del **Módulo 4**, los límites puramente comunicativos de **Twinmotion (Módulo 5)** y la revisión analítica de resultados tratada en el **Tema 6 del Bloque 6 (Tema 45 de 50)**.
- **Competencias que desarrolla:** Ingeniería de *prompts* de alta fiabilidad técnica, gobernanza y seguridad de la información en despachos de ingeniería, detección temprana de alucinaciones normativas o numéricas y estandarización de flujos asistidos por IA.
- **Conexión con el tema anterior y posterior en el programa (6 módulos / 50 temas):**
  - *Tema anterior — Bloque 6, Tema 6 de 11 (Tema 45 de 50): Análisis y revisión de resultados obtenidos en Revit y DIALux.* El Tema 7 sistematiza y empaqueta en plantillas repetibles de 6 capas los análisis puntuales aprendidos en el Tema 6.
  - *Tema posterior — Bloque 6, Tema 8 de 11 (Tema 47 de 50): IA para optimización de documentación y entregables BIM.* Las plantillas catalogadas en el Tema 7 servirán como base directa para estandarizar nomenclaturas, parámetros BEP, tablas de planificación, notas generales y actas de coordinación BIM en el Tema 8.
- **Evidencia de aprendizaje generada:** Primer repositorio personal/de estudio con **3 fichas de *prompts* especializadas, versionadas (`v1.0`) y auditadas mediante caso patrón**, junto con la resolución verificada del caso `PROY-NAV-04`.

---

## Siguientes pasos para el formador

1. Verificar previamente en el aula que los asistentes (ChatGPT y Claude) funcionan en cuentas formativas o corporativas habilitadas y recordar explícitamente al alumnado no activar el entrenamiento con datos de proyectos reales.
2. Preparar con antelación los archivos CSV ficticios y anonimizados (`PROY-COM-01` y `PROY-NAV-04`) comprobando manualmente todas las magnitudes SI de control antes de iniciar la sesión.
3. Definir explícitamente al comienzo de la clase la jurisdicción normativa ilustrativa que utilizará el grupo (p. ej., España/REBT, IEC 60364 o normativa local de los asistentes) reiterando que ninguna salida de IA posee validez reglamentaria ni habilitación legal.
4. Revisar la plantilla de ficha de biblioteca que usará el alumnado para asegurar continuidad directa con las prácticas de documentación BIM del **Tema 8**.
5. Guardar las mejores plantillas depuradas durante la Actividad 3 como base compartida para el **Proyecto Integrador Final (Tema 11 / Tema 50 de 50)**.
