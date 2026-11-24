# Tema 11. Caso práctico: aplicación de IA en un proyecto de instalaciones eléctricas modelado en Revit

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Caso práctico: aplicación de IA en un proyecto de instalaciones eléctricas modelado en Revit |
| **Programa** | IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas *(Especialización Técnica; no es un MBA ni otorga habilitación legal para firmar proyectos)* |
| **Bloque y posición dentro del programa** | Bloque 6: Inteligencia artificial aplicada a instalaciones eléctricas · Tema 11 de 11 (Tema 50 de 50 — cierre integrador del programa) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Modalidad** | Online / Híbrida interactiva |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Avanzado — Integrador |
| **Prerrequisitos** | Haber completado los Módulos 1 a 5 (cálculo eléctrico, DIALux, Revit MEP, documentación PDF y visualización Twinmotion) y los Temas 1 a 10 del Bloque 6 (ingeniería de *prompts*, estandarización BIM, automatización segura y auditoría cruzada QA/QC). |
| **Resultado general de aprendizaje** | Integrar en un expediente único las evidencias técnicas de diseño eléctrico, estudio lumínico en DIALux, modelado en Revit MEP, planos PDF, recorrido visual en Twinmotion y un Dossier Auditado de IA que documente entradas anonimizadas, *prompts* aplicados, fallos de la IA corregidos independientemente y Acta de Validación Técnica Humana. |

---

## 2. Objetivos de aprendizaje

1. Integrar en una cadena documental trazable los ocho entregables técnicos transversales del programa (ficha de alcance, cuadro de cargas, unifilar, estudio DIALux, modelo Revit MEP, planos PDF, presentación Twinmotion y Dossier de IA). *(Nivel de Bloom: Aplicar)*
2. Aplicar *prompts* especializados de seis capas y controles de anonimización con ChatGPT y Claude a lo largo del ciclo completo de un proyecto eléctrico modelado en Revit MEP sin atribuir validez normativa automática a ninguna herramienta. *(Nivel de Bloom: Aplicar)*
3. Analizar la coherencia punta a punta entre cálculos eléctricos verificados manualmente, parámetros fotométricos `.ldt`/`.ies` de DIALux, circuitos/tablas de Revit MEP y láminas emitidas en PDF. *(Nivel de Bloom: Analizar)*
4. Evaluar todas las respuestas generadas por la IA durante el proyecto mediante registro explícito de alucinaciones detectadas, discrepancias numéricas interceptadas y comprobaciones independientes en unidades SI. *(Nivel de Bloom: Evaluar)*
5. Crear y defender el **Dossier Auditado de IA y Acta de Validación Técnica Humana** como cierre integrador del proyecto eléctrico BIM, delimitando claramente la responsabilidad profesional exigible en instalaciones reales. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Arquitectura del proyecto integrador de cierre y cadena de trazabilidad (Módulos 1–6)

#### Explicación breve y clara

El cierre del programa reúne las seis competencias trabajadas en una única narrativa técnica coherente: **Diseñar** (Módulo 1), **Estudiar la iluminación** (Módulo 2), **Modelar en 3D** (Módulo 3), **Documentar** (Módulo 4), **Comunicar visualmente** (Módulo 5) y **Asistir y revisar con IA** (Módulo 6). En un proyecto real o formativo, el error más peligroso ocurre cuando estas seis fases actúan como compartimentos estancos o cuando el técnico asume erróneamente que la información se transfiere y valida automáticamente de una aplicación a otra.

Para completar el proyecto integrador con rigor, debemos construir una **cadena de trazabilidad punta a punta** donde cada decisión técnica nazca con alcance, hipótesis y jurisdicción normativa declarada como «a verificar», se valide mediante cálculos independientes y estudio en DIALux, se represente ordenadamente en Revit MEP, se emita en PDFs legibles, se comunique sin engaños en Twinmotion y quede auditada en un **Dossier de IA** con verificación humana final.

#### Conceptos clave

- **Cadena de trazabilidad de seis eslabones:** Secuencia vinculada `Bases y Cálculo → DIALux (.ldt/.ies) → Revit MEP → Láminas PDF → Twinmotion (Direct Link) → Dossier Auditado de IA`, donde cada cambio relevante se propaga y verifica explícitamente.
- **Definición inicial de alcance y jurisdicción:** Declaración obligatoria en la Ficha del Proyecto del país, uso del edificio, normativa aplicable a verificar (por ejemplo, REBT, IEC 60364 o NEC según emplazamiento) y nivel de desarrollo del modelo.
- **No transferencia automática de cumplimiento:** Principio rector del programa según el cual pasar geometría de Revit a Twinmotion por *Direct Link* o completar un *Schedule* en Revit jamás implica conformidad reglamentaria eléctrica ni fotométrica.
- **Dossier integrador de cierre:** Compendio de los 8 entregables transversales donde el bloque de IA funciona como capa de apoyo, control de calidad documental y trazabilidad de decisiones.

#### Definiciones necesarias

- **Proyecto integrador de cierre:** Caso técnico completo de edificio o local comercial/técnico donde el alumnado demuestra la coordinación multidisciplinar entre cálculo eléctrico, iluminación, BIM, documentación, visualización e IA responsable.
- **Línea base de proyecto (*Baseline*):** Conjunto cerrado y versionado de hipótesis, cargas en kW/kVA, luminarias `.ldt`/`.ies` y parámetros BEP a partir del cual se evalúa cualquier cambio o auditoría cruzada final.

#### Ejemplo práctico realista

Un estudio desarrolla el proyecto de un **Centro Técnico de Formación y Taller Demostrador (`PROY-INT-480`, $480\text{ m}^2$, dos plantas)**. Durante la fase final, la dirección académica añade un equipo de soldadura/maquinaria en el taller aumentando la potencia de fuerza en $+4,5\text{ kW}$ y sustituye las luminarias del aula principal de $32\text{ W}$ a $38\text{ W}$ para asegurar $E_m \ge 500\text{ lx}$.

La cadena trazable opera así:
1. **Módulo 1 (Cálculo y Unifilar):** Se recalcula intensidad, caída de tensión, sección en $\text{mm}^2$ y protección en A del circuito de taller y del cuadro general `CGBT-01` (verificando criterios según reglamento y edición aplicables en el país).
2. **Módulo 2 (DIALux):** Se actualiza el archivo `.ldt` a $38\text{ W}$, verificando $E_m$, $U_0$, UGR y $\text{W/m}^2$ en el aula.
3. **Módulo 3 y 4 (Revit MEP y PDF):** Se actualizan parámetros de carga, familia de luminaria, tablas de planificación (*Schedules*), unifilar y cajetines `Rev B` de las láminas PDF afectadas.
4. **Módulo 5 (Twinmotion):** Se resincroniza el modelo Revit vía *Direct Link* para actualizar visualmente el aula, manteniendo explícito que la escena sirve solo para comunicar espacio y temperatura de color ($4\,000\text{ K}$).
5. **Módulo 6 (IA):** Todo el impacto se verifica con *prompts* de auditoría cruzada sobre tablas anonimizadas y queda registrado en el Dossier Auditado de IA.

#### Errores frecuentes

- Presentar entregables de los seis módulos con datos contradictorios entre sí (por ejemplo, un cuadro de cargas de 42 kW, un modelo Revit que suma 37 kW y un estudio DIALux con otro tipo de luminaria).
- Asumir que tener un vídeo atractivo de Twinmotion compensa láminas PDF ilegibles, etiquetas desconectadas o cálculos sin justificar.
- Olvidar declarar en la Ficha del Proyecto la jurisdicción normativa ilustrativa y que las verificaciones deben confirmarse en su edición vigente.
- Subir el paquete completo del proyecto con datos identificables de una empresa real a un asistente de IA externo sin anonimizar ni autorización.

#### Preguntas que el alumnado debería poder responder

1. ¿Cuáles son los ocho entregables que componen el proyecto integrador del programa y cómo se enlazan entre sí?
2. Si cambia la potencia de una luminaria en DIALux durante la fase final del proyecto, ¿qué pasos obligatorios deben completarse en Revit MEP, cálculo eléctrico, PDF y Twinmotion?
3. ¿Por qué un modelo Revit MEP sin colisiones y un recorrido en Twinmotion no constituyen validación eléctrica ni lumínica?

---

### 3.2. Integración práctica de IA en diseño eléctrico, DIALux y Revit MEP durante el proyecto

#### Explicación breve y clara

En un proyecto real de principio a fin, el secreto de la productividad con ChatGPT y Claude no está en pedirles «hazme el proyecto», sino en **desplegar plantillas especializadas en cuatro momentos de alto valor añadido**:
1. **Arranque y memorias:** Estructurar la Ficha del Proyecto, ordenar hipótesis de partida y depurar borradores de memoria descriptiva y especificaciones técnicas sin marcas no autorizadas ni normas inventadas.
2. **Apoyo en cálculos y DIALux:** Verificar consistencia dimensional de fórmulas (siempre comprobadas manualmente después) y analizar tablas exportadas de DIALux para comparar iluminancia $E_m$ (lx), uniformidad $U_0$, UGR y $\text{W/m}^2$.
3. **Normalización en Revit MEP:** Limpiar nomenclaturas BEP, auditar parámetros vacíos en *Schedules* y redactar especificaciones paso a paso para tareas repetitivas (recordando que cualquier implementación en Dynamo/API depende de versión y copia de respaldo).
4. **Revisión y comunicación:** Auditar tablas cruzadas antes de emitir PDFs y redactar el guion de escenas para Twinmotion aclarando su alcance puramente comunicativo.

#### Conceptos clave

- **Puntos de intervención estratégica:** Fases concretas del proyecto donde un *prompt* de seis capas ahorra tiempo documental o de verificación sin invadir el cálculo normativo oficial.
- **Encadenamiento controlado de *prompts*:** Uso sucesivo de plantillas catalogadas (`PR-CALC`, `PR-DIALUX`, `PR-REVIT`, `PR-QA`) conservando los mismos identificadores anonimizados (`ID_Circuito`, `ID_Local`).
- **Separación de salidas por propósito:** Distinción rigurosa en cada respuesta entre dato calculado externamente, dato fotométrico exportado, parámetro BIM de Revit y descripción visual de Twinmotion.
- **Verificación paralela obligatoria:** Comprobación manual mediante hoja de cálculo, software de cálculo autorizado o catálogo `.ldt`/`.ies` antes de dar por aceptada cualquier tabla ordenada por la IA.

#### Definiciones necesarias

- **Flujo asistido por IA con control humano (*Human-in-the-Loop*):** Metodología operativa en la que cada paso asistido por un modelo de lenguaje exige una validación explícita del técnico antes de pasar la información al siguiente entregable.
- **Guion visual técnico:** Descripción estructurada de recorridos y encuadres en Twinmotion diseñada para explicar zonas, cuadros eléctricos y ambientes luminosos al cliente sin atribuirles validez reglamentaria.

#### Ejemplo práctico realista

Durante el desarrollo del proyecto `PROY-INT-480`, el proyectista ejecuta cuatro micro-intervenciones asistidas y auditadas:
- **Paso 1 (Ficha e hipótesis):** Usa `PR-DOC-01` para redactar la tabla de alcance e hipótesis del cuadro `CGBT-01` (`400/230 V`, `50 Hz`, `54,2 kW` instalados) marcando todas las referencias reglamentarias con `[VERIFICAR JURISDICCIÓN Y EDICIÓN VIGENTE]`.
- **Paso 2 (Cálculo asistido + verificación manual):** Pide a ChatGPT comprobar pasos aritméticos de intensidad de empleo de 14 circuitos anonimizados y contrasta manualmente en Excel cada resultado (detectando que en `C-TALLER-01` de `12,0 kW`, $400\text{ V}$, $\cos\varphi = 0,85$, el resultado correcto es $I_b = \frac{12\,000}{\sqrt{3} \cdot 400 \cdot 0,85} \approx 20,38\text{ A}$).
- **Paso 3 (DIALux + Revit):** Exporta resultados de 6 locales de DIALux y los cruza con `Revit_Schedule_Luminarias.csv`, verificando que los ejemplares, vatios (W), lúmenes (lm) y temperatura de color ($4\,000\text{ K}$ en aulas/taller, $3\,000\text{ K}$ en recepción) coinciden 1 a 1.
- **Paso 4 (Twinmotion):** Usa Claude para redactar un guion de 4 escenas en el recorrido virtual explicando accesibilidad a cuadros eléctricos y contraste térmico visual $3\,000\text{ K}$ vs. $4\,000\text{ K}$ tras sincronizar por *Direct Link*, incluyendo una nota final de descargo sobre su carácter ilustrativo.

#### Errores frecuentes

- Utilizar la IA para generar valores iniciales inventados de cargas o iluminación y modelar sobre ellos sin cálculo previo ni archivo `.ldt`/`.ies`.
- Copiar directamente especificaciones técnicas generadas por ChatGPT que incluyen cláusulas legales o ensayos de otro país no verificados.
- Emplear en un *prompt* del proyecto integrador nombres reales de clientes, parcelas o plantillas propietarias de un despacho sin autorización.
- Olvidar actualizar la biblioteca de *prompts* con las correcciones aprendidas durante el desarrollo del proyecto.

#### Preguntas que el alumnado debería poder responder

1. ¿En qué fases exactas de un proyecto eléctrico BIM aporta mayor retorno seguro el uso de ChatGPT y Claude?
2. ¿Cómo garantizas que las temperaturas de color y luminarias mostradas en Twinmotion tras *Direct Link* corresponden a las especificadas en DIALux y Revit MEP?
3. ¿Qué comprobación independiente mínima debes documentar cuando utilizas la IA como apoyo explicativo en un cálculo de intensidad o caída de tensión?

---

### 3.3. Control de calidad cruzado, documentación de fallos de la IA y corrección técnica

#### Explicación breve y clara

Un **Dossier Auditado de IA** no es una colección de capturas diciendo «qué bien funcionó ChatGPT». Su verdadero valor profesional radica en demostrar **sentido crítico técnico**: mostrar con honestidad qué errores, omisiones o alucinaciones produjeron los asistentes durante el desarrollo del proyecto integrador, cómo los interceptó el ingeniero mediante verificación independiente y qué corrección técnica exacta se aplicó en el cálculo, DIALux, Revit MEP o planos PDF.

Documentar los fallos detectados en la IA cumple dos propósitos esenciales: (1) prueba ante cualquier revisor o auditor que las cifras finales del proyecto proceden de **verificación técnica humana**, no de fe ciega en un algoritmo, y (2) permite refinar las plantillas de *prompts* y los *checklists* QA/QC del estudio para futuros encargos.

#### Conceptos clave

- **Registro de incidencias de IA (*AI Audit Log*):** Tabla cronológica que recoge cada consulta relevante, el fallo o limitación detectada en la respuesta del modelo, la evidencia independiente que lo refutó y la decisión técnica aplicada.
- **Categorías típicas de fallo en proyectos eléctricos:** Alucinación normativa, omisión de factores de corrección (agrupamiento/temperatura), error de unidades ($\text{W}$ vs. $\text{kVA}$, $\text{lm}$ vs. $\text{lx}$), falsa interoperabilidad de software y sugerencia de API/Dynamo incompatible.
- **Reconciliación multifuente:** Acción técnica posterior a la auditoría cruzada que actualiza simultáneamente cálculo, unifilar, DIALux, Revit y PDFs hasta alcanzar cero discrepancias críticas.
- **Trazabilidad del error corregido:** Evidencia documental del «antes y después» en el modelo o memoria que demuestra la resolución efectiva de cada incidencia abierta.

#### Definiciones necesarias

- **Incidencia técnica interceptada:** Discrepancia o afirmación errónea detectada en una salida de IA o entre entregables del proyecto durante la revisión QA/QC antes de la emisión formal.
- **Evidencia de refutación:** Cálculo manual, tabla de catálogo oficial (`.ldt`/`.ies`), captura de parámetro en Revit MEP o cláusula del reglamento oficial vigente que demuestra por qué una respuesta de la IA era incompleta o incorrecta.

#### Ejemplo práctico realista

En el **Registro de Fallos de IA** del proyecto `PROY-INT-480`, el equipo documenta tres incidentes reales interceptados antes del cierre:
1. **Fallo 1 (Omisión geométrica y caída de tensión):** Al pedir apoyo explicativo para un circuito de fuerza a cubierta (`C-CLIMA-02`, $7,5\text{ kW}$, $400\text{ V}$), el usuario facilitó solo la distancia en planta ($25\text{ m}$) y la IA dio por aceptable la estimación sin recordar desniveles. Al revisar la ruta en **Revit MEP**, los tramos verticales en patinillo sumaban $+9,0\text{ m}$ adicionales ($L_{\text{real}} = 34,0\text{ m}$, $+36\text{ \%}$). El proyectista recalculó en su hoja verificada la caída de tensión con $34\text{ m}$.
2. **Fallo 2 (Alucinación normativa e interoperabilidad):** En una consulta sin restricción previa, el asistente afirmó que *«Twinmotion lee directamente los cálculos fotométricos de DIALux para validar la norma de iluminación»* y citó una tabla reglamentaria sin edición. Se refutó mediante la documentación oficial (Twinmotion sincroniza con Revit vía *Direct Link* con finalidad visual y no ejecuta validaciones fotométricas normativas) y se corrigió la nota en el plano PDF.
3. **Fallo 3 (Confusión de magnitud en falso positivo):** Durante la auditoría cruzada, Claude señaló incoherencia entre `10,8 kW` en cuadro y `12,0 kVA` en un equipo de reserva/SAI en Revit; el ingeniero comprobó $\cos\varphi = 0,90$ ($10,8 / 0,90 = 12,0\text{ kVA}$), documentando el hallazgo como falso positivo resuelto.

#### Errores frecuentes

- Ocultar los fallos cometidos por ChatGPT o Claude en el dossier final por creer erróneamente que «quitan nota» o restan profesionalidad.
- Registrar correcciones genéricas (*«Se corrigió el cálculo»*) sin indicar valores numéricos antiguos, nuevos y documento exacto modificado.
- Corregir un fallo únicamente en la memoria escrita dejando intacto el error en el esquema unifilar PDF o en las familias de Revit MEP.
- Utilizar la IA para «justificar» un resultado incorrecto del modelo en vez de rectificar el modelo en Revit o DIALux.

#### Preguntas que el alumnado debería poder responder

1. ¿Qué columnas mínimas debe incluir el registro de fallos de IA dentro del Dossier Auditado para demostrar control técnico humano?
2. ¿Por qué documentar un fallo interceptado de la IA (como olvidar tramos verticales BIM o confundir capacidades de Twinmotion) aporta solidez profesional al expediente?
3. ¿Cómo demuestras documentalmente que una discrepancia crítica entre DIALux y Revit MEP quedó resuelta en todas las fases del proyecto?

---

### 3.4. Estructura del Dossier Auditado de IA y Acta de Validación Técnica Humana

#### Explicación breve y clara

El entregable culminante del Tema 11 —y evidencia de cierre de todo el Bloque 6— es el **Dossier Auditado de IA acompañado del Acta de Validación Técnica Humana**. Este documento formaliza la gobernanza de principio a fin: demuestra cómo se protegió la información confidencial, qué *prompts* estructurados se emplearon, qué datos exactos entraron, qué devolvieron los asistentes, qué errores fueron interceptados y qué técnico competente revisó y validó de manera independiente cada parámetro crítico del proyecto.

Es fundamental cerrar el programa con absoluta claridad profesional y jurídica: **ni este dossier ni el certificado académico de la formación otorgan por sí solos habilitación legal para firmar dictámenes o proyectos eléctricos oficiales**, ni constituyen un título MBA. En la práctica profesional real, toda instalación eléctrica ejecutiva exige la validación, firma o visado por el profesional con titulación y colegiación competente conforme a la legislación vigente del país aplicable.

#### Conceptos clave

- **Estructura estándar en siete capítulos:** Organización clara del Dossier Auditado de IA desde la ficha de alcance/anonimización hasta el acta de cierre firmada.
- **Trazabilidad bidireccional:** Posibilidad de ir desde cualquier dato de un plano PDF (`EL-AL-PB-001`) hasta el cálculo verificado, la luminaria `.ldt` en DIALux, el parámetro en Revit y el *prompt* de auditoría que comprobó su coherencia.
- **Acta de Validación Técnica Humana:** Documento de control de cierre que enumera los puntos verificados de forma independiente fuera de la IA (cálculos, secciones, protecciones, puesta a tierra, luminotecnia, planos PDF y deslinde visual de Twinmotion).
- **Límite legal y de competencia profesional:** Declaración expresa de que la IA y los modelos BIM son herramientas auxiliares bajo responsabilidad de técnicos habilitados según la jurisdicción del proyecto.

#### Definiciones necesarias

- **Dossier Auditado de IA:** Expediente estructurado que recopila de forma trazable entradas anonimizadas, *prompts* versionados, respuestas revisadas, incidencias corregidas, matriz de coherencia multifuente y validación humana final del proyecto.
- **Acta de Validación Técnica Humana:** Documento de verificación final suscrito por el proyectista o revisor responsable donde consta la comprobación independiente de cálculos, normativa aplicable en edición vigente, coherencia de planos PDF y alcance no vinculante de las vistas 3D.

#### Ejemplo práctico realista

Estructura resumida del **Dossier Auditado de IA y Acta de Validación Técnica Humana** para el cierre de `PROY-INT-480`:
- **Capítulo 1 — Ficha y Gobernanza:** Alcance (`480 m²`, oficinas y taller demostrador), jurisdicción ilustrativa declarada a verificar (p. ej., REBT en España u otra normativa local vigente), política de anonimización aplicada (`PROY-INT-480`, cero datos reales de clientes).
- **Capítulo 2 — Biblioteca de Prompts Aplicados:** 4 fichas versionadas (`PR-CALC-02`, `PR-DIALUX-01`, `PR-REVIT-01`, `PR-QA-01`).
- **Capítulo 3 — Entradas Anonimizadas y Salidas Revisadas:** Extractos CSV del cuadro de cargas (`14 circuitos`, `54,2 kW`), resumen DIALux (`6 locales`), *Schedule* Revit MEP e historial resumido de respuestas de ChatGPT/Claude.
- **Capítulo 4 — Registro de Errores Interceptados y Correcciones:** Tabla con los 3 fallos de IA/proyecto corregidos (tramo vertical $+9\text{ m}$, falsa afirmación Twinmotion–DIALux, falso positivo $\text{kW}/\text{kVA}$).
- **Capítulo 5 — Matriz Final de Coherencia Cruzada (Cero Bloqueos Críticos):** Confirmación 1 a 1 entre Cálculo, Unifilar, DIALux, Revit MEP, PDF y Twinmotion.
- **Capítulo 6 — Especificación de Automatización Segura (Opcional/Acotada):** Nota de auditoría previa de parámetros en copia de respaldo dependiente de versión.
- **Capítulo 7 — Acta de Validación Técnica Humana:** Lista de 8 comprobaciones independientes firmadas académicamente con la cláusula expresa de alcance formativo y requisito de titulación/colegiación competente para firma de proyectos oficiales reales.

#### Errores frecuentes

- Entregar únicamente capturas de pantalla sueltas de chats sin organizar entradas, versión de *prompt*, comprobación manual ni matriz de coherencia final.
- Firmar el Acta de Validación Técnica Humana sin haber comprobado independientemente al menos un circuito crítico completo, el esquema unifilar y el balance de potencias.
- Redactar el cierre atribuyendo al curso carácter de MBA o habilitación legal automática para suscribir boletines o proyectos oficiales.
- Dejar en el dossier final capturas de Twinmotion etiquetadas como «Evidencia de cumplimiento lumínico».

#### Preguntas que el alumnado debería poder responder

1. ¿Qué siete apartados debe contener un Dossier Auditado de IA completo al cerrar un proyecto eléctrico modelado en Revit MEP?
2. ¿Qué comprobaciones independientes deben figurar explícitamente en el Acta de Validación Técnica Humana antes de aprobar una entrega?
3. ¿Por qué debe diferenciarse con precisión el certificado formativo de especialización técnica frente a la habilitación legal exigida para firmar proyectos oficiales?

---

## 4. Metodología didáctica

Duración total de la secuencia didáctica: **240 minutos (4 horas)**.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
|---|---|---|---|
| **1. Apertura y encuadre del cierre integrador** | 15 min | Presenta el Tema 11 (Tema 50 de 50), repasa la arquitectura completa de los 6 módulos y aclara criterios de entrega y alcance profesional/legal. | Revisa el inventario completo de los 8 entregables transversales y realiza la autoevaluación diagnóstica de partida. |
| **2. Actividad 1 (Activación): mapa de madurez integradora** | 20 min | Proporciona una tabla de control de eslabones rotos y guía una ronda rápida de diagnóstico sobre qué entregables de cada alumno tienen huecos antes de auditar. | Evalúa el estado de su proyecto de curso identificando eslabones pendientes entre cálculo, DIALux, Revit, PDF y Twinmotion. |
| **3. Microexposición: Dossier Auditado de IA y Acta Humana** | 25 min | Muestra un modelo completo de Dossier Auditado de IA (7 capítulos) y explica cómo documentar errores interceptados y refutaciones técnicas con rigor. | Toma notas de la estructura del Dossier y analiza ejemplos reales de actas de validación humana bien y mal redactadas. |
| **4. Actividad 2 (Aplicación técnica): simulacro de auditoría integral** | 50 min | Facilita el paquete multifuente del edificio demostrador `EnerLab 480` con 4 incidencias técnicas y errores inducidos de IA; supervisa las comprobaciones manuales. | Ejecuta la auditoría integral asistida por ChatGPT/Claude sobre `EnerLab 480`, recalcula en hoja independiente y documenta los fallos interceptados. |
| **5. Pausa activa y clínica de resolución de bloqueos** | 15 min | Atiende dudas técnicas puntuales sobre discrepancias de Revit/DIALux/Twinmotion y valida en voz alta las correcciones matemáticas de la Actividad 2. | Contrasta resultados numéricos con otros equipos y ajusta sus tablas de coherencia cruzada. |
| **6. Actividad 3 (Transferencia): compilación del Dossier y Acta final** | 60 min | Acompaña la compilación del Dossier Auditado de IA propio de cada participante/equipo y verifica el cumplimiento de la rúbrica integradora. | Compila el Dossier Auditado de IA de su proyecto (o de `EnerLab 480`), completa la matriz cruzada final y redacta el Acta de Validación Técnica Humana. |
| **7. Defensas ejecutivas breves y coevaluación** | 35 min | Modera presentaciones técnicas de 4–5 minutos por equipo/participante formulando preguntas de verificación normativa, fotométrica y BIM. | Expone su cadena de trazabilidad, un fallo crítico de IA interceptado y su dictamen final; aporta retroalimentación estructurada a pares. |
| **8. Evaluación sumativa final y cierre del programa** | 20 min | Consolida valoraciones según la rúbrica integradora de 4 niveles, recoge las autoevaluaciones y presenta la hoja de ruta de transferencia profesional. | Completa el cuestionario sumativo final de cierre del programa y su reflexión personal de competencia técnica. |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Mapa de madurez del proyecto integrador

- **Nombre:** Mapa de madurez de los ocho entregables transversales y detección de eslabones rotos.
- **Objetivo:** Verificar la continuidad técnica de los productos acumulados a lo largo de los Módulos 1 a 6 antes de compilar el dossier definitivo.
- **Instrucciones para el alumnado:**
  1. Completad la matriz de los 8 entregables transversales (`1. Ficha alcance/normativa`, `2. Cuadro cargas y memoria`, `3. Unifilar`, `4. Estudio DIALux`, `5. Modelo Revit MEP`, `6. Planos PDF`, `7. Presentación Twinmotion`, `8. Registro IA`).
  2. Asignad a cada entregable su estado real (`Listo y cruzado`, `Generado sin cruzar`, `Pendiente`) e identificad qué dos interfaces presentan hoy mayor riesgo de inconsistencia en vuestro trabajo.
  3. Comprobad que ningún archivo contiene datos reales confidenciales sin anonimizar.
- **Materiales necesarios:** Carpeta de trabajos previos del alumnado (o paquete base del proyecto demostrador `EnerLab 480`) y matriz de madurez del Tema 11.
- **Tiempo estimado:** 20 minutos.
- **Rol del formador:** Detectar rápidamente equipos con brechas graves entre el Módulo 1/2 y el Módulo 3/4 y asignarles prioridad de conciliación para la Actividad 3.
- **Producto o entregable esperado:** Mapa de madurez completado con los 2 eslabones prioritarios de corrección identificados.
- **Criterios de éxito:** Evalúa los 8 entregables completos, identifica exactamente los puntos de ruptura documental y confirma anonimización.

### Actividad 2 (Aplicación técnica): Simulacro de auditoría integral sobre paquete multifuente

- **Nombre:** Auditoría integral asistida por IA y documentación de fallos sobre `EnerLab 480`.
- **Objetivo:** Ejecutar de principio a fin un ciclo de revisión asistida con ChatGPT/Claude sobre datos multifuente reales simulados, localizando inconsistencias técnicas y errores del propio asistente.
- **Instrucciones para el alumnado:**
  1. Trabajad con el paquete anonimizado del caso integrador `EnerLab 480` (extracto de cuadro general `CGBT-01` con 14 circuitos, informe resumen DIALux de 5 zonas, *Schedule* Revit MEP, notas de láminas PDF y ficha de escena Twinmotion).
  2. Aplicad vuestra biblioteca de *prompts* (Temas 7 a 10) para: (a) cruzar cargas y longitudes entre cálculo, unifilar y Revit, (b) cruzar luminarias `.ldt`, vatios e iluminancias entre DIALux y Revit, y (c) revisar las notas PDF y el guion Twinmotion.
  3. Comprobad manualmente todos los cálculos críticos (intensidades en A, suma total de potencia instalada en kW y densidad de potencia lumínica en $\text{W/m}^2$), y registrad en la tabla de auditoría tanto las **inconsistencias del proyecto** como **cualquier error o alucinación cometida por la IA** durante el ejercicio.
- **Materiales necesarios:** Paquete de datos `EnerLab_480_Multifuente`, biblioteca de *prompts* propios del Tema 7, hoja de cálculo y acceso a ChatGPT/Claude.
- **Tiempo estimado:** 50 minutos.
- **Rol del formador:** Introducir una consulta de contraste donde se ponga a prueba la tendencia de la IA a asumir valores por defecto, y verificar la exactitud matemática de las correcciones de cada grupo.
- **Producto o entregable esperado:** Tabla de incidencias técnicas resueltas + Registro de Auditoría de IA con al menos 2 errores interceptados y refutados con evidencia independiente.
- **Criterios de éxito:** Localiza todas las inconsistencias sembradas en `EnerLab 480`, comprueba manualmente todas las unidades SI sin error y documenta de forma rigurosa la refutación de fallos de la IA.

### Actividad 3 (Transferencia a proyecto real): Compilación del Dossier Auditado de IA y defensa técnica

- **Nombre:** Elaboración del Dossier Auditado de IA, Acta de Validación Técnica Humana y defensa en 5 minutos.
- **Objetivo:** Consolidar el entregable final de cierre del Módulo 6 y del programa completo integrando todas las evidencias verificadas.
- **Instrucciones para el alumnado:**
  1. Utilizando la plantilla oficial de 7 capítulos del Tema 11, compilad el **Dossier Auditado de IA** de vuestro proyecto integrador (o completad la versión íntegra de `EnerLab 480`), asegurándoos de incluir:
     - Ficha de alcance, normativa declarada como «a verificar» y declaración de anonimización.
     - Biblioteca de *prompts* utilizados y entradas anonimizadas aportadas.
     - Registro de errores interceptados (en cálculo, DIALux, Revit, PDF y respuestas IA) con corrección trazada.
     - Matriz final de coherencia cruzada 6-en-1 y **Acta de Validación Técnica Humana** completada.
  2. Preparad una defensa ejecutiva de **4 a 5 minutos** resumiendo la arquitectura del proyecto, la mayor inconsistencia detectada gracias al flujo asistido y la justificación de por qué el paquete puede emitirse (o qué verificación oficial requiere antes de ejecución real).
- **Materiales necesarios:** Plantilla del Dossier Auditado de IA (7 capítulos), Acta de Validación Técnica Humana y todos los archivos verificados de las fases anteriores.
- **Tiempo estimado:** 60 minutos de compilación + 35 minutos de defensas en fase siguiente.
- **Rol del formador:** Actuar como director técnico en las defensas, planteando preguntas de control sobre trazabilidad, límites de Twinmotion, validez de `.ldt`/`.ies` y responsabilidad profesional en proyectos reales.
- **Producto o entregable esperado:** Dossier Auditado de IA completo en PDF/Markdown con Acta de Validación Técnica Humana y presentación oral breve.
- **Criterios de éxito:** Contiene los 7 capítulos íntegros, trazabilidad total de cifras verificadas manualmente, separación nítida de disciplinas y defensa clara sin atribuir habilitación legal ni validación automática a la IA.

---

## 6. Caso práctico

### Proyecto Integrador Final: Edificio de Oficinas y Taller Demostrador «EnerLab 480» — Cierre documental y auditoría IA

#### Contexto empresarial

El centro formativo y de ensayos técnicos **EnerLab 480** ocupa un edificio de **480 m² construidos en dos plantas** (`PB: 280 m²` con recepción, taller demostrador eléctrico-mecánico y cuarto técnico; `P01: 200 m²` con oficina técnica, aula de formación para 20 personas y sala de reuniones). El estudio encargado ha desarrollado todo el flujo de los seis módulos del programa: diseño eléctrico preliminar, estudio fotométrico en DIALux con archivos `.ldt` verificados, modelado 3D en Revit MEP, juego de 8 láminas PDF y recorrido de comunicación al cliente en Twinmotion conectado mediante *Direct Link*. *(Todas las referencias normativas ilustrativas se declaran sujetas a verificación del país, reglamento vigente y autoridad competente antes de cualquier uso ejecutivo real).*

#### Situación o problema

A falta de una sesión de cierre para entregar el expediente final, la auditoría integradora detecta que el proyecto sufrió ajustes parciales en tres disciplinas sin consolidación final y con un uso irregular de asistentes de IA por parte de un colaborador:
1. En el **Taller Demostrador (PB)** se añadió una toma trifásica de banco de pruebas (`C-FZT-02`: $12,0\text{ kW}$, $400\text{ V} / 50\text{ Hz}$, $\cos\varphi = 0,85$), pero el cálculo inicial usó una distancia estimada en planta de $18\text{ m}$ mientras el recorrido real modelado en Revit MEP subiendo a bandeja de $+3,6\text{ m}$ alcanza **$29\text{ m}$** ($+61,1\text{ \%}$). Además, el unifilar PDF todavía muestra la toma anterior de $8,0\text{ kW}$.
2. En el **Aula de Formación (P01, $80\text{ m}^2$)**, el estudio en DIALux sustituyó las luminarias iniciales de $32\text{ W}$ por **16 luminarias lineales de $38\text{ W}$** ($4\,400\text{ lm}$, $4\,000\text{ K}$) logrando $E_m = 524\text{ lx}$, $U_0 = 0,65$, UGR = 17. Sin embargo, el *Schedule* de Revit MEP conserva `16 × 32 W = 512 W` en vez de `608 W`, y un colaborador ajustó manualmente las luces en **Twinmotion** para que el aula «se viera más cálida» a $2\,700\text{ K}$ y declaró en una nota que «el confort visual está validado en el render».
3. En la **Recepción (PB, $40\text{ m}^2$)**, un chat previo sin restricciones con una IA sugirió utilizar un flujo directo automatizado para «exportar el cumplimiento normativo desde DIALux hacia Twinmotion» y propuso una sección para `C-FZT-02` sin verificar temperatura ambiente ni agrupamiento de 4 circuitos en bandeja.

#### Datos disponibles

- **Cuadro General `CGBT-01` (400/230 V, 50 Hz, 14 circuitos):**
  - Suma de potencias asignadas antes de corregir Taller y Aula: `50,20 kW`.
  - Circuitos críticos afectados: `C-FZT-02` (pasa de `8,0 kW` a `12,0 kW`, incremento $+4,0\text{ kW}$, $\cos\varphi = 0,85$, longitud BIM real $29\text{ m}$) y `C-AL-P01` (Aula de $80\text{ m}^2$, pasa de `512 W` a `608 W`, incremento $+96\text{ W} = +0,096\text{ kW}$).
- **Resumen DIALux actualizado:**
  - `Aula P01 (80 m²)`: 16 luminarias × $38\text{ W}$ = $608\text{ W}$ ($7,60\text{ W/m}^2$), $E_m = 524\text{ lx}$, $U_0 = 0,65$, UGR = 17, $4\,000\text{ K}$, archivo `.ldt` verificado.
  - `Oficina P01 (90 m²)`: 18 luminarias × $34\text{ W}$ = $612\text{ W}$ ($6,80\text{ W/m}^2$), $E_m = 510\text{ lx}$, $U_0 = 0,63$, UGR = 18, $4\,000\text{ K}$.
  - `Taller PB (140 m²)`: 14 campanas industriales × $85\text{ W}$ = $1\,190\text{ W}$ ($8,50\text{ W/m}^2$), $E_m = 340\text{ lx}$, $U_0 = 0,61$, UGR = 21, $4\,000\text{ K}$.
- **Entregables existentes:** `Juego de 8 láminas PDF` (`EL-00` a `EL-07`), modelo `.rvt` con 14 circuitos, escena Twinmotion enlazada por *Direct Link*, y registros crudos de dos conversaciones con ChatGPT/Claude.

#### Preguntas de análisis

1. ¿Qué valor actualizado exacto de potencia total asignada en `CGBT-01` resulta tras incorporar ambos incrementos ($+4,0\text{ kW}$ y $+0,096\text{ kW}$), y cuál es la intensidad de empleo $I_b$ en A de `C-FZT-02` ($12,0\text{ kW}$, $400\text{ V}$, $\cos\varphi = 0,85$)?
2. ¿Qué tres errores conceptuales y de interoperabilidad aparecen en la mezcla entre DIALux, Revit MEP y Twinmotion en el Aula P01 y la Recepción?
3. ¿Qué datos técnicos faltan obligatoriamente para poder dimensionar de forma definitiva y conforme a reglamento el conductor y la protección de `C-FZT-02` a $29\text{ m}$?
4. ¿Cómo debe quedar reflejado este conjunto de incidencias en el **Dossier Auditado de IA** y qué condiciones exige el **Acta de Validación Técnica Humana** antes de aprobar el paquete final?

#### Tarea a realizar

Actuando como equipo responsable de cierre del proyecto `EnerLab 480`, elaborad y presentad el **Expediente Integrador Final** que contenga:
1. **Tabla de reconciliación numérica verificada:** Nuevo balance del cuadro `CGBT-01` en kW, cálculo manual de $I_b$ para `C-FZT-02` y recálculo de potencia instalada y densidad ($\text{W/m}^2$) de alumbrado en Aula P01, Oficina P01 y Taller PB.
2. **Matriz de impacto y actualización cruzada (6 módulos):** Listado exacto de cambios necesarios en Cálculo/Unifilar, DIALux, Revit MEP (parámetros y familia `.ldt`), láminas PDF (revisión de cajetín y notas) y Twinmotion (*Direct Link* ajustado a $4\,000\text{ K}$ eliminando la nota falsa de validación).
3. **Dossier Auditado de IA (Extracto completo):** *Prompt* de auditoría de 6 capas utilizado, registro formal de las **3 incidencias de IA/proyecto interceptadas** y evidencia de refutación.
4. **Acta de Validación Técnica Humana:** Documento completo de cierre con 8 puntos verificados de forma independiente, declaración de alcance formativo (no habilitación legal ni MBA) y requisitos de verificación normativa local vigente.

#### Posibles soluciones o criterios de análisis

- **Verificación cuantitativa independiente:**
  - **Potencia asignada `CGBT-01`:** $50,20\text{ kW} + 4,00\text{ kW} + 0,096\text{ kW} = \mathbf{54,296\text{ kW}}$ (redondeo documental documentado $54,30\text{ kW}$, incremento global $+8,16\text{ \%}$). Debe comprobarse si este aumento modifica el interruptor general, la acometida o la potencia contratada prevista.
  - **Intensidad de empleo `C-FZT-02`:** $I_b = \frac{12\,000}{\sqrt{3} \cdot 400 \cdot 0,85} \approx \mathbf{20,38\text{ A}}$ (frente a los $\approx 13,59\text{ A}$ que correspondían a $8,0\text{ kW}$, un incremento de intensidad del $+50\text{ \%}$). Con una longitud real BIM de **$29\text{ m}$** (frente a $18\text{ m}$), es imprescindible verificar manualmente en tabla oficial aplicable: tipo de aislamiento (p. ej. XLPE/PVC), método de instalación en bandeja, temperatura ambiente, factor de agrupamiento para 4 circuitos en bandeja, caída de tensión real en % e $I_{cc}$ para confirmar sección en $\text{mm}^2$ y calibre de protección.
  - **Iluminación verificada:** Aula P01 = $608\text{ W}$ ($7,60\text{ W/m}^2$); Oficina P01 = $612\text{ W}$ ($6,80\text{ W/m}^2$); Taller PB = $1\,190\text{ W}$ ($8,50\text{ W/m}^2$). Total alumbrado estas tres zonas = $2\,410\text{ W}$.
- **Corrección conceptual BIM–DIALux–Twinmotion:** Actualizar en Revit MEP la familia del Aula P01 al tipo `38 W / 4 000 K` vinculado al `.ldt` de DIALux, reimprimir láminas PDF afectadas incrementando revisión (`Rev B`), resincronizar Twinmotion por *Direct Link* corrigiendo la apariencia visual a $4\,000\text{ K}$ (no $2\,700\text{ K}$) y eliminar de inmediato cualquier texto que afirme que Twinmotion valida normas o importa resultados fotométricos normativos desde DIALux.
- **Acta de Validación Técnica Humana:** Solo puede emitirse como **«Aprobado en fase formativa / Condicionado en fase ejecutiva real a cálculo de agrupamiento y verificación reglamentaria por técnico titulado competente en la jurisdicción del emplazamiento»**, dejando trazadas todas las correcciones en el Dossier de IA.

#### Preguntas de reflexión final

1. Al mirar atrás desde el Módulo 1 hasta el Tema 50, ¿qué papel real ocupó la IA en el éxito técnico de `EnerLab 480`: autora del diseño o aceleradora sujeta a auditoría constante?
2. ¿Qué hábito profesional concreto aprendido en este programa mantendrás desde mañana en todo proyecto que combine cálculo eléctrico, DIALux, Revit MEP, planos PDF, Twinmotion e IA?

---

## 7. Evaluación

### Evaluación diagnóstica (inicio de sesión, 10 minutos)

Autochequeo inicial de preparación mediante matriz de 8 entregables (Actividad 1), verificando si cada participante cuenta con insumos anonimizados coherentes para cerrar el caso integrador sin huecos críticos ni datos confidenciales expuestos.

### Evaluación formativa (durante la sesión)

Seguimiento continuo del formador durante las Actividades 2 y 3 y la clínica de bloqueos:
- Verificación de cálculos manuales en `EnerLab 480` ($54,30\text{ kW}$, $20,38\text{ A}$, $608\text{ W}$ y $7,60\text{ W/m}^2$).
- Control de que ningún grupo confunde comunicación visual en Twinmotion con verificación fotométrica ni modelado Revit con cumplimiento normativo.
- Calidad del registro de fallos de la IA y de las refutaciones técnicas documentadas.

### Evaluación sumativa (cierre de sesión y del programa)

Evaluación integradora basada en dos evidencias finales:
1. **Dossier Auditado de IA y Expediente Integrador Final** (incluyendo tabla de reconciliación verificada, matriz cruzada 6-en-1, registro de errores de IA corregidos y Acta de Validación Técnica Humana).
2. **Defensa técnica breve (4–5 minutos)** ante el formador y el grupo respondiendo preguntas de control.

### Rúbrica de evaluación

| Criterio | Insuficiente (0–4,9) | En desarrollo (5,0–6,9) | Adecuado (7,0–8,9) | Destacado (9,0–10) |
|---|---|---|---|---|
| **Integración transversal (Módulos 1–6)** | Entregables desconectados con cifras incompatibles entre cálculo, DIALux, Revit, PDF y Twinmotion. | Conecta la mayoría de módulos, pero persiste alguna incoherencia menor entre modelo y planos PDF. | Integra coherentemente las 6 disciplinas con trazabilidad clara entre cargas, luminarias, modelo y documentos. | Logra una cadena punta a punta impecable donde cada cambio se propaga con precisión absoluta por todos los entregables. |
| **Rigor de cálculo y verificación independiente** | Acepta cálculos o selecciones de cable/luz generados por IA sin comprobación manual ni unidades SI claras. | Comprueba cálculos básicos, pero omite factores de instalación o deja algún porcentaje sin verificar. | Recalcula manualmente todas las magnitudes clave ($I_b$, $\text{kW}$, $\text{W/m}^2$) y declara normativa a verificar. | Verificación matemática irreprochable, identifica de inmediato qué datos faltan para dimensionar conforme a norma y refuta errores con rigor. |
| **Auditoría de IA, seguridad y límites disciplinares** | Expone datos reales sin anonimizar, oculta fallos de la IA o confunde Twinmotion/Revit con cumplimiento normativo. | Anonimiza datos y registra algún fallo, aunque delimita de forma genérica las fronteras entre herramientas. | Cumple anonimización estricta, documenta errores de IA interceptados y separa cálculo, DIALux, Revit y Twinmotion. | Dossier auditado ejemplar con pruebas de refutación detalladas, interoperabilidad realista y gobernanza de *prompts* lista para estudio. |
| **Acta de Validación Humana y defensa técnica** | Omite el acta o la presenta como certificación automática válida para firmar proyectos reales sin técnico habilitado. | Incluye el acta, pero falta claridad en las comprobaciones independientes o resulta imprecisa en la defensa oral. | Redacta un Acta completa con 8 comprobaciones independientes, aclara alcance legal y defiende con solvencia técnica. | Acta ejecutiva rigurosa y defensa brillante que equilibra eficiencia con IA, trazabilidad documental y responsabilidad ingenieril. |

### Actividad de autoevaluación

Cuestionario de cierre del programa completado individualmente al finalizar la sesión:
- ¿Puedo justificar mediante evidencia verificable cada cifra de potencia, intensidad, luminotecnia y parámetro BIM de mi proyecto final sin depender de la «autoridad aparente» de ChatGPT o Claude? *(Sí / No)*
- ¿He dejado explícitamente documentado en mi Dossier que las normativas citadas son de verificación obligatoria según país/edición vigente y que la formación no otorga habilitación legal para firmar proyectos oficiales ni equivale a un MBA? *(Sí / No)*
- ¿Cuál ha sido el aprendizaje más transformador de los 6 módulos y qué próximo paso de mejora técnica aplicarás en tus proyectos reales tras finalizar el programa? *(Respuesta reflexiva breve de 4–5 líneas)*

---

## 8. Materiales y recursos

### Guion estructurado de diapositivas (8 diapositivas)

- **Slide 1 — Portada de cierre del programa (Tema 11 de 11 · Tema 50 de 50):** Visión panorámica de los 6 módulos y propósito del proyecto integrador final.
- **Slide 2 — Mapa de trazabilidad 6-en-1:** Cómo conectan Cálculo/Unifilar, DIALux (`.ldt`/`.ies`), Revit MEP, Planos PDF, Twinmotion (*Direct Link*) y el Dossier de IA.
- **Slide 3 — Fronteras innegociables entre disciplinas:** Diferenciación visual clara: cálculo normativo ≠ cálculo fotométrico ≠ modelo BIM ≠ render fotorrealista ≠ asistencia IA.
- **Slide 4 — Puntos estratégicos de intervención con ChatGPT y Claude:** Síntesis práctica de plantillas desde la Ficha inicial hasta la auditoría QA/QC.
- **Slide 5 — Anatomía del Dossier Auditado de IA (7 capítulos):** Qué documentar exactamente para demostrar control técnico, anonimización y trazabilidad.
- **Slide 6 — Cómo registrar fallos de la IA y refutaciones técnicas:** Ejemplos reales comentados (tramos verticales omitidos, falsa compatibilidad DIALux→Twinmotion, $\text{kW}/\text{kVA}$).
- **Slide 7 — El Acta de Validación Técnica Humana y marco legal:** Lista de 8 puntos de cierre independiente y recordatorio de competencia legal para firma de proyectos reales.
- **Slide 8 — Presentación del caso `EnerLab 480`, defensas y cierre del programa:** Instrucciones finales de trabajo, criterios de la rúbrica y despedida técnica.

### Ficha de trabajo del alumnado

Cuaderno integrador de cierre con tres herramientas rápidas:
1. **Matriz de Madurez de Entregables (Actividad 1):** Checklist de los 8 entregables transversales con casillas de coherencia y anonimización.
2. **Hoja de Reconciliación Numérica `EnerLab 480` (Actividad 2):** Tabla preparada para recalcular balance `CGBT-01`, $I_b$ de `C-FZT-02`, potencias lumínicas y variaciones porcentuales.
3. **Guion de Defensa en 5 Minutos (Actividad 3):** Esquema en 4 bloques (`1 min Alcance y arquitectura · 1,5 min Flujo Cálculo/DIALux/Revit/PDF/Twinmotion · 1,5 min Fallos IA interceptados · 1 min Acta de Validación Humana`).

### Plantilla técnica práctica: Índice del Dossier Auditado de IA y Acta de Validación Técnica Humana

| Capítulo / Bloque | Contenido obligatorio y evidencia esperada | Verificación humana |
|---|---|---|
| **Cap. 1. Ficha y Gobernanza** | Alcance, uso, país/reglamento declarado `[A VERIFICAR EDICIÓN VIGENTE]`, política de anonimización (`PROY-XXX`). | `[ ] Confirmado` |
| **Cap. 2. Biblioteca de Prompts** | Fichas de *prompts* de 6 capas empleadas con versión (`v1.x`) y cláusulas de no invención. | `[ ] Confirmado` |
| **Cap. 3. Entradas y Salidas** | Extractos CSV anonimizados de Cálculo, DIALux y Revit junto con salidas depuradas de ChatGPT/Claude. | `[ ] Confirmado` |
| **Cap. 4. Registro de Fallos de IA** | Tabla `ID_Fallo | Qué dijo la IA | Evidencia independiente que refuta | Corrección aplicada`. | `[ ] Confirmado` |
| **Cap. 5. Matriz Cruzada 6-en-1** | Contraste `Cuadro ↔ Unifilar ↔ DIALux ↔ Revit ↔ PDF ↔ Twinmotion` con cero bloqueos críticos abiertos. | `[ ] Confirmado` |
| **Cap. 6. Anexos Técnicos** | Hojas de cálculo verificadas, informe DIALux, índice de láminas PDF (`Rev`) y guion visual Twinmotion. | `[ ] Confirmado` |
| **Cap. 7. Acta de Validación Humana** | Declaración de revisión independiente, fecha, identificador del técnico revisor y deslinde legal explícito. | `[ ] Firmado (Académico)` |

### Lecturas y recursos recomendados

> **Advertencia obligatoria de validación:** Todo proyecto eléctrico real destinado a licitación, ejecución o legalización exige comprobar la edición vigente de los reglamentos técnicos de la jurisdicción aplicable, consultar manuales actualizados de DIALux, Revit MEP y Twinmotion según licencia instalada, y contar con la intervención y firma de un profesional titulado y colegiado competente. Los recursos listados sirven exclusivamente de referencia formativa y deben validarse antes de su aplicación.

- **Síntesis de referencias normativas del programa (a validar según país y edición vigente):** Reglamentos nacionales de baja tensión (p. ej., REBT en España), normas internacionales IEC 60364 o NEC/NFPA 70 en jurisdicciones aplicables, normativa de iluminación interior UNE-EN 12464-1 y normativa de gestión de información BIM serie ISO 19650.
- **Documentación técnica oficial de herramientas del itinerario:**
  - *DIALux:* Guías oficiales sobre importación de planos 2D (DWG/DXF), gestión de archivos fotométricos Eulumdat (`.ldt`) e `.ies` e interpretación de informes de cálculo.
  - *Autodesk Revit MEP:* Guías de modelado eléctrico, conectores, circuitos, tablas de planificación (*Schedules*), plantillas de vista e impresión a PDF según versión.
  - *Epic Games Twinmotion:* Documentación oficial de *Direct Link* con Revit y guías de iluminación visual y exportación de presentaciones (vídeo, imágenes, panoramas 360°), sin atribuir cálculo fotométrico reglamentario.
- **Guías de uso responsable de IA en ingeniería:** Marcos de referencia sobre verificación humana (*Human-in-the-loop*), gestión de riesgos de IA (por ejemplo, principios del NIST *AI Risk Management Framework* a consultar en su versión vigente) y políticas corporativas de confidencialidad para modelos de lenguaje (OpenAI / Anthropic).

### Glosario de términos clave

| Término | Definición |
|---|---|
| **Dossier Auditado de IA** | Expediente integrador que reúne entradas anonimizadas, *prompts* versionados, salidas revisadas, errores de IA corregidos, matriz de coherencia y validación humana de un proyecto. |
| **Acta de Validación Técnica Humana** | Documento final de control donde el técnico responsable confirma la comprobación independiente de cálculos, normativa a verificar, planos PDF y alcance visual del modelo. |
| **Cadena de trazabilidad 6-en-1** | Vínculo documentado entre diseño eléctrico, estudio DIALux, modelo Revit MEP, planos PDF, visualización Twinmotion y auditoría con IA para propagar cambios sin pérdidas. |
| **Registro de fallos de IA** | Tabla histórica que documenta alucinaciones, omisiones o falsos positivos detectados en asistentes de IA junto con la evidencia técnica independiente que los corrigió. |
| **Línea base (*Baseline*)** | Conjunto cerrado y aprobado de datos técnicos y parámetros de proyecto utilizado como referencia oficial frente a cambios posteriores y auditorías finales. |
| **Interoperabilidad realista** | Comprensión rigurosa de qué datos pueden transferirse entre herramientas (`.ldt`/`.ies`, CSV, DWG/DXF, *Direct Link*) y qué validaciones requieren intervención manual independiente. |
| **Deslinde de responsabilidad técnica** | Distinción formal entre el apoyo instrumental de software o IA y la responsabilidad profesional y legal indelegable del ingeniero o proyectista habilitado según jurisdicción. |
| **Cierre integrador** | Fase final del programa donde se consolidan, auditan y defienden conjuntamente los entregables técnicos y documentales desarrollados a lo largo de los seis módulos. |

---

## 9. Adaptaciones

### Sesión presencial

- **Dinámica de taller final:** Las mesas funcionan como estudios de ingeniería; cada grupo dispone de zona de trabajo física para desplegar planos PDF impresos junto al ordenador con el Dossier de IA y realizar una revisión cruzada entre pares antes de las defensas.
- **Defensas técnicas:** Presentaciones de 5 minutos en pizarra/proyector con turno de 2 minutos de preguntas rápidas por parte del tribunal formado por el formador y dos alumnos revisores.

### Sesión online síncrona

- **Gestión de entregas:** Carpeta compartida en la plataforma del campus con subcarpetas por equipo (`Equipo_01` a `Equipo_N`) donde depositan el paquete del Dossier antes del bloque de defensas.
- **Defensas en directo:** Uso de pantalla compartida controlada por tiempo (5 min exactos) mostrando la tabla de reconciliación verificada de `EnerLab 480` y el Acta de Validación Humana, mientras el resto del grupo evalúa un criterio de la rúbrica mediante formulario rápido.

### Sesión asíncrona

- **Guía paso a paso:** Vídeo integrador de 25 minutos donde el formador recorre completo el caso `EnerLab 480`, demostrando la actualización en cascada y la estructura final del Dossier Auditado de IA.
- **Entregable individual de cierre:** El alumno sube su Dossier Auditado de IA completo junto con un **vídeo breve grabado de defensa (máximo 5 minutos)** explicando su matriz de trazabilidad, 2 errores de IA interceptados y su Acta de Validación Técnica Humana.
- **Evaluación final:** Revisión individual detallada por parte del tutor docente utilizando la rúbrica integradora de 4 niveles y emisión de informe final de competencias alcanzadas en el programa.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Integra de manera transversal la totalidad del programa: cálculo de cargas, conductores, protecciones, puesta a tierra y unifilares (**Módulo 1 · Temas 1–11**), iluminación en **DIALux (Módulo 2 · Temas 12–16)**, modelado 3D en **Revit MEP (Módulo 3 · Temas 17–21)**, documentación técnica e impresión a **PDF (Módulo 4 · Temas 22–29)**, presentación en **Twinmotion (Módulo 5 · Temas 30–39)** y la secuencia completa de asistencia, *prompting*, estandarización BIM, automatización segura y auditoría QA/QC del **Bloque 6 (Temas 1–10 / Temas 40–49)**.
- **Competencias que desarrolla:** Visión sistémica de proyectos eléctricos BIM de principio a fin, integración interdisciplinar controlada, auditoría crítica de inteligencia artificial, gobernanza de datos y responsabilidad profesional en ingeniería asistida por tecnología.
- **Conexión con el tema anterior y posterior en el programa (6 módulos / 50 temas):**
  - *Tema anterior — Bloque 6, Tema 10 de 11 (Tema 49 de 50): IA como apoyo en detección de inconsistencias y revisión del proyecto.* El Tema 10 proporcionó los *checklists* QA/QC, la auditoría tabular cruzada y la matriz de severidad que aquí se aplican integralmente sobre los 8 entregables del cierre final.
  - *Tema posterior — Cierre del programa (Tema 50 de 50): Transferencia profesional supervisada.* Al no haber tema posterior en el itinerario formativo, el Tema 11 culmina el programa de 6 módulos / 50 temas y conecta con la aplicación en entorno laboral real bajo normativa vigente y supervisión o firma de técnico titulado y colegiado competente según cada país.
- **Evidencia de aprendizaje generada:** **Expediente Integrador Final del proyecto eléctrico modelado en Revit (`EnerLab 480` o proyecto propio equivalente)**, respaldado por el **Dossier Auditado de IA (7 capítulos)**, el **Acta de Validación Técnica Humana** y la **defensa técnica oral**.

---

## Siguientes pasos para el formador

1. Facilitar con al menos 48 horas de antelación la plantilla del **Dossier Auditado de IA** y los archivos anonimizados de `EnerLab 480` para quienes no dispongan de todos los archivos propios completos de los Módulos 1 a 5.
2. Comprobar manualmente antes de la sesión todos los valores de control de `EnerLab 480` ($54,296\text{ kW}$ totales, $20,38\text{ A}$ en `C-FZT-02`, $608\text{ W}$ y $7,60\text{ W/m}^2$ en Aula P01) para evaluar con agilidad durante las defensas.
3. Velar durante las presentaciones finales por que ningún participante presente la visualización en Twinmotion como comprobación lumínica ni la IA como autoridad normativa, manteniendo el rigor técnico y de seguridad de todo el programa.
4. Emitir el informe individual de cierre basado en la rúbrica integradora de 4 niveles y recordar explícitamente el alcance formativo de la especialización técnica (sin equivalencia con titulación MBA ni habilitación legal automática de firma de proyectos).
5. Recopilar comentarios finales del alumnado sobre la biblioteca de *prompts* y *checklists* QA/QC para retroalimentar futuras ediciones del programa.
