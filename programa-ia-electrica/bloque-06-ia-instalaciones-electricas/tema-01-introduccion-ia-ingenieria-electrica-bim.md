# Tema 1. Introducción a la IA aplicada a la ingeniería eléctrica y BIM

> **Aviso técnico, normativo y de responsabilidad profesional:** Este módulo pertenece al programa de especialización técnica *IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas* (no es un MBA ni sustituye una titulación universitaria o habilitación profesional oficial). Completar esta formación no otorga competencias legales para firmar proyectos, dictámenes o certificados de instalación eléctrica. Toda referencia normativa citada en esta guía (como el REBT español, la serie IEC 60364, el NEC/NFPA 70 o la UNE-EN 12464-1) se incluye exclusivamente como **ejemplo ilustrativo**: el técnico competente debe verificar siempre el país, la jurisdicción, el reglamento, la autoridad competente y la edición vigente aplicables. Asimismo, ninguna salida de un modelo de lenguaje (ChatGPT, Claude u otro) constituye validación técnica definitiva ni exime de comprobación independiente.

---

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Tema 1. Introducción a la IA aplicada a la ingeniería eléctrica y BIM |
| **Bloque y posición dentro del programa** | Bloque 6: Inteligencia artificial aplicada a instalaciones eléctricas — Tema 1 de 11 (Tema 40 de 50 del programa) |
| **Programa formativo** | IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas (Especialización Técnica en Ingeniería Eléctrica, BIM, Iluminación, Renderizado e IA Asistida — 6 módulos / 50 temas) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Conocimientos previos de diseño eléctrico básico (Bloque 1), cálculo lumínico en DIALux (Bloque 2), modelado y documentación en Revit MEP (Bloques 3 y 4) y visualización en Twinmotion (Bloque 5); manejo básico de hojas de cálculo |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado evaluará casos reales de asistencia mediante modelos de lenguaje (LLMs) en proyectos eléctricos y BIM, diferenciando sus capacidades reales de sus límites normativos y aritméticos, aplicando reglas previas de anonimización de planos y estableciendo un protocolo de responsabilidad técnica humana intransferible antes de utilizar cualquier salida generada por IA. |

---

## 2. Objetivos de aprendizaje

Al finalizar esta sesión de 4 horas, el alumnado será capaz de:

1. **Identificar** los dominios diferenciados de un proyecto eléctrico moderno (cálculo eléctrico normativo, estudio fotométrico en DIALux, modelado geométrico-paramétrico en Revit MEP, visualización en Twinmotion y asistencia textual con LLMs), evitando atribuir funciones de cálculo certificado o cumplimiento legal a herramientas de apoyo o renderizado. *(Nivel de Bloom: Recordar)*
2. **Explicar** el funcionamiento probabilístico de los modelos de lenguaje (LLMs) y su relación directa con las alucinaciones normativas, las citas legales inventadas y los errores en operaciones aritméticas encadenadas. *(Nivel de Bloom: Comprender)*
3. **Aplicar** un protocolo previo de anonimización y saneamiento documental sobre cuadros de cargas, listados de circuitos y extractos de planos antes de consultar asistentes de IA externos. *(Nivel de Bloom: Aplicar)*
4. **Analizar** respuestas técnicas generadas por ChatGPT o Claude frente a un encargo eléctrico y BIM concreto, detectando errores de unidades SI, fórmulas incompletas, mezcla de reglamentos entre países o suposiciones no declaradas. *(Nivel de Bloom: Analizar)*
5. **Evaluar** la viabilidad y el riesgo profesional de incorporar asistencia con IA en el flujo de oficina técnica mediante una lista de control de trazabilidad y responsabilidad humana intransferible. *(Nivel de Bloom: Evaluar)*

---

## 3. Contenidos esenciales

### 3.1. Qué aporta y qué NO aporta la IA generativa en ingeniería eléctrica y BIM

#### Explicación breve y clara
Los modelos de lenguaje de gran tamaño (**LLMs**, como ChatGPT o Claude) no son motores de cálculo eléctrico ni compiladores geométricos BIM ni simuladores fotométricos. Son sistemas probabilísticos entrenados para predecir secuencias coherentes de texto y código a partir de patrones lingüísticos. En un despacho de ingeniería eléctrica o en un equipo de coordinación BIM, esa naturaleza supone una ventaja enorme para tareas lingüísticas y estructurales (resumir pliegos, redactar listas de comprobación, convertir datos tabulares, comparar criterios o detectar lagunas en memorias), pero resulta inadecuada para sustituir motores deterministas especializados.

Resulta imprescindible trazar una frontera nítida entre cuatro planos de trabajo del proyecto que el alumno ya ha recorrido en los bloques 1 a 5:
1. **Cálculo eléctrico normativo**: dimensionamiento de conductores, caídas de tensión, protecciones, cortocircuito y puesta a tierra según el reglamento vigente en la jurisdicción del proyecto.
2. **Cálculo fotométrico (DIALux)**: simulación de iluminancia media ($E_m$), uniformidad ($U_0$), deslumbramiento ($UGR$) y eficiencia energética mediante archivos fotométricos `.ldt` (Eulumdat) o `.ies`.
3. **Modelado geométrico y de datos BIM (Revit MEP)**: representación 3D coordinada de equipos, canalizaciones, circuitos y parámetros de planificación (*panel schedules*).
4. **Visualización arquitectónica (Twinmotion)**: comunicación fotorrealista mediante *Direct Link* desde Revit; un render impecable o un modelo 3D sin colisiones **no prueban cumplimiento eléctrico ni validez lumínica**.

La IA entra en el Bloque 6 como **copiloto cognitivo y documental**, nunca como autoridad técnica ni como sustituto de ninguno de esos cuatro entornos.

#### Conceptos clave
- **Naturaleza probabilística vs. cálculo determinista:** un LLM genera la respuesta estadísticamente más verosímil, mientras que una hoja de cálculo validada, un motor eléctrico o DIALux ejecutan ecuaciones matemáticas fijas sobre entradas definidas.
- **Separación de dominios técnicos:** distinguir qué valida el reglamento eléctrico, qué calcula DIALux, qué coordina Revit MEP y qué comunica Twinmotion evita confundir apariencia visual o fluidez textual con seguridad de la instalación.
- **Asistencia de alto valor:** estructuración de memorias, síntesis de requisitos del cliente, diseño de plantillas de revisión, transformación de tablas CSV/Markdown y formulación de hipótesis de diseño.
- **Ausencia de percepción física y geométrica nativa:** un asistente textual no «ve» el modelo `.rvt` ni verifica automáticamente distancias de seguridad, radios de curvatura ni interferencias salvo que el técnico le proporcione datos tabulares limpios y los contraste después en Revit.

#### Definiciones necesarias
- **Modelo de lenguaje de gran tamaño (LLM):** sistema de inteligencia artificial basado en redes neuronales entrenado sobre grandes volúmenes de texto que genera respuestas mediante predicción probabilística de tokens, sin comprensión física ni responsabilidad jurídica propia.
- **Copiloto documental técnico:** uso controlado de un asistente de IA para preparar borradores, estructurar datos o proponer revisiones que requieren siempre verificación humana independiente antes de incorporarse a un entregable oficial.
- **Falsa sensación de validación:** sesgo cognitivo que lleva al proyectista a asumir que un resultado es correcto porque está redactado con tono técnico seguro, formato limpio o acompañado de un modelo 3D o render visualmente atractivo.

#### Ejemplo práctico realista
En una oficina técnica que proyecta una planta de oficinas de $1.200\text{ m}^2$, el responsable de diseño acaba de exportar desde Twinmotion (Bloque 5) unos renders nocturnos excelentes de la zona de recepción y pide a un LLM que redacte la justificación técnica del proyecto «confirmando que la iluminación y la distribución cumplen el reglamento». El coordinador BIM senior detiene el documento al recordar tres hechos: (1) el render de Twinmotion ajustó la exposición visual e intensidades artísticas de escena, pero la verificación reglamentaria de $E_m = 500\text{ lx}$, $U_0 \ge 0,60$ y $UGR \le 19$ (valores ilustrativos a confirmar según norma vigente, como UNE-EN 12464-1) solo consta en el informe de cálculo de DIALux; (2) la sección de cables y el poder de corte de los interruptores automáticos deben justificarse en memoria de cálculo verificada y no en texto libre del LLM; y (3) un modelo Revit MEP visualmente completo puede tener circuitos sin equilibrio de fases o parámetros incompletos.

#### Errores frecuentes
- Creer que si un LLM cita unidades SI y artículos legales con tono convincente, ha verificado realmente el diseño eléctrico.
- Pedir a un asistente conversacional que «revise un plano PDF complejo o un modelo BIM completo» y dar por válida la ausencia de alertas como certificado de conformidad.
- Confundir la calidad fotorrealista obtenida en Twinmotion con el cumplimiento fotométrico de DIALux o el cumplimiento eléctrico del cuadro general.
- Delegar en la IA la selección final de dispositivos de protección o calibres sin especificar sistema de suministro, tensión, temperatura ambiente ni método de instalación.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué un modelo de lenguaje con redacción impecable puede producir un criterio eléctrico peligroso si no se contrasta?
2. ¿Qué diferencia práctica existe entre validar el proyecto en cálculo eléctrico, DIALux, Revit MEP y Twinmotion frente a usar un LLM como asistente?
3. ¿En qué tareas concretas de una oficina técnica eléctrica aporta valor real inmediato un LLM sin comprometer la seguridad técnica?

---

### 3.2. Alucinaciones normativas y límites de cálculo aritmético puro

#### Explicación breve y clara
El principal riesgo técnico de usar LLMs sin control en ingeniería eléctrica es la combinación de dos debilidades estructurales: las **alucinaciones normativas** y los **errores de aritmética textual**. Una alucinación normativa ocurre cuando el modelo inventa un número de artículo, mezcla reglamentos de distintos países (por ejemplo, combina una instrucción del REBT español RD 842/2002 con una regla del NEC/NFPA 70 estadounidense o una edición antigua de IEC 60364) o cita un valor límite obsoleto tras una modificación reglamentaria. El modelo no consulta un repositorio legal certificado salvo que esté conectado explícitamente a documentos verificados y, aun así, puede malinterpretar condiciones de aplicación o notas al pie de tabla.

En paralelo, un LLM procesa los números como fragmentos de texto (*tokens*), no como registros en coma flotante de una CPU salvo cuando ejecuta herramientas externas de cálculo de código verificable. En consecuencia, cuando se le pide encadenar cálculo de corriente $I_b$, aplicación de factores de corrección por agrupamiento y temperatura, cálculo de caída de tensión $\Delta U$ y selección de sección comercial en $\text{mm}^2$, puede cometer redondeos silenciosos, omitir el factor $\sqrt{3}$ en sistemas trifásicos o mezclar tensiones de línea ($400\text{ V}$) y de fase ($230\text{ V}$).

#### Conceptos clave
- **Alucinación normativa:** invención o mezcla verosímil de cláusulas, tablas, ediciones o ámbitos de aplicación de reglamentos y normas técnicas.
- **Contaminación transjurisdiccional:** tendencia de los LLMs entrenados con bibliografía internacional a mezclar criterios de Europa (IEC / normas UNE-EN / REBT España como ejemplo ilustrativo), América (NEC/NFPA 70) o reglamentos locales sin advertir el cambio de país.
- **Fragilidad aritmética en texto:** pérdida de precisión o fallo algebraico cuando el LLM realiza cálculos multi-paso directamente en texto predictivo sin ejecutar un motor determinista.
- **Pérdida de hipótesis ocultas:** el asistente asume silenciosamente $\cos\varphi = 0,8$ o $0,9$, conductividad a $20\,^\circ\text{C}$ en lugar de temperatura de servicio ($70\,^\circ\text{C}$ o $90\,^\circ\text{C}$), o ignora la caída de tensión acumulada aguas arriba.

#### Definiciones necesarias
- **Citación verificable:** referencia normativa que identifica de forma inequívoca organismo emisor, código, edición/año vigente, apartado exacto y ámbito jurisdiccional comprobados directamente en fuente oficial por el técnico.
- **Error silencioso de cálculo:** equivocación numérica o de unidades dentro de una respuesta aparentemente coherente que no genera mensajes de advertencia ni errores de sintaxis, pasando inadvertida si no se recalcula de forma independiente.

#### Ejemplo práctico realista
Un proyectista consulta a un LLM: *«Calcula la corriente de diseño y sugiere calibre para una enfriadora trifásica de $22\text{ kW}$ a $400\text{ V}$, $\cos\varphi = 0,85$»*. El asistente responde textualmente aplicando por error la fórmula sin $\sqrt{3}$: $I_b = 22.000 / (400 \times 0,85) = 64,71\text{ A}$ y propone un cable de $16\text{ mm}^2$ y un automático de $80\text{ A}$, citando supuestamente «la tabla general de intensidades admisibles». Al realizar la comprobación independiente en hoja de cálculo validada:
$$I_b = \frac{P}{\sqrt{3} \cdot U \cdot \cos\varphi} = \frac{22.000}{1,73205 \times 400 \times 0,85} \approx 37,36\text{ A}$$
La respuesta del LLM sobredimensionaba la corriente en un $73\,\%$ (de $37,36\text{ A}$ a $64,71\text{ A}$), habría obligado a una protección de $80\text{ A}$ inadecuada para el equipo y no comprobaba caída de tensión, longitud ni método de instalación según el reglamento vigente del país correspondiente.

#### Errores frecuentes
- Copiar citas de reglamentos (p. ej. «según ITC-BT-XX» o «artículo XXX de IEC 60364») directamente de la IA a la memoria sin abrir el texto oficial vigente.
- Confiar en tablas de intensidades admisibles generadas de memoria por el LLM sin contrastar tipo de aislamiento (XLPE vs. PVC), número de conductores cargados, temperatura ambiente ni agrupamiento.
- Aceptar cálculos aritméticos hechos «de palabra» por el chat sin trasladarlos a Excel, software eléctrico validado o cálculo manual de contraste.
- No indicar al asistente el país, frecuencia ($50\text{ Hz}$ / $60\text{ Hz}$) y sistema de tensiones al formular la consulta.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué un LLM mezcla con frecuencia requisitos del REBT español, la serie IEC 60364 y el NEC estadounidense si no se acota el contexto?
2. ¿Qué error numérico típico se produce al pedirle un cálculo eléctrico completo directamente en texto y cómo se detecta en menos de un minuto?
3. ¿Qué datos mínimos debe confirmar el técnico en la fuente oficial antes de aceptar cualquier referencia normativa sugerida por IA?

---

### 3.3. Seguridad de la información, propiedad intelectual y confidencialidad de planos BIM

#### Explicación breve y clara
Cuando un ingeniero, proyectista o coordinador BIM sube un archivo PDF de planos, una memoria técnica, una exportación de *panel schedules* de Revit o un informe de DIALux a un asistente de IA en la nube, está transmitiendo información fuera del perímetro local de su estudio o empresa. Dependiendo de la cuenta, plan de suscripción y configuración activa, los datos introducidos pueden almacenarse temporalmente para revisión de abuso o utilizarse para mejorar/entrenar modelos futuros si no existe un acuerdo corporativo sin retención ni entrenamiento (*zero data retention* / entornos empresariales aprobados).

Por ello, **nunca deben cargarse planos reales, datos personales, ubicaciones exactas, presupuestos confidenciales, contratos ni archivos técnicos de clientes sin autorización expresa** de la organización y del cliente. En proyectos reales (hospitales, centros de datos, industrias farmacéuticas, edificios públicos o infraestructuras estratégicas), la filtración involuntaria de esquemas unifilares, acometidas o salas técnicas críticas puede vulnerar acuerdos de confidencialidad (NDA), derechos de propiedad intelectual y normativa de protección de datos aplicable en la jurisdicción correspondiente (como el RGPD en la Unión Europea, a verificar según país y empresa).

#### Conceptos clave
- **Anonimización estructural:** sustitución sistemática de identificadores reales (razón social, dirección, carátula del plano, autores, marcas comerciales comprometidas) por códigos neutros antes de salir del entorno local.
- **Perímetro de datos autorizado:** conjunto de herramientas corporativas con contratos de confidencialidad y configuración de no entrenamiento aprobadas por la dirección técnica o departamento de TI.
- **Metadatos ocultos:** información incrustada en PDFs, archivos Excel, DWG o exportaciones de Revit (autor, ruta de servidor, nombre de proyecto, comentarios internos) que delata al cliente aunque se borre el título visible.
- **Principio de minimización:** enviar a la IA únicamente los campos tabulares estrictamente necesarios para la consulta (potencia, longitud, iluminancia, categoría de circuito), nunca el expediente completo.

#### Definiciones necesarias
- **Dato técnico anonimizado:** registro tabular o textual en el que se han eliminado todos los atributos capaces de identificar directa o indirectamente al cliente, emplazamiento, autores, costes confidenciales o secretos industriales, manteniendo intactas las magnitudes físicas necesarias para el análisis.
- **Acuerdo de confidencialidad (NDA) y secreto técnico:** obligación contractual y deontológica que prohíbe divulgar o transferir documentación de proyecto a terceros no autorizados, incluidos proveedores externos de IA sin habilitación contractual específica.

#### Ejemplo práctico realista
Un estudio redacta el proyecto eléctrico de ampliación de una planta agroalimentaria protegida por un NDA estricto. Antes de pedir a Claude o ChatGPT que revise inconsistencias en el listado de luminarias exportado desde DIALux y los circuitos de Revit, la coordinadora BIM aplica una regla de anonimización de 3 minutos: exporta solo a CSV las columnas `ID_Local`, `Superficie_m2`, `Em_lx`, `U0`, `UGR`, `Potencia_W` y `Circuito_Revit`; sustituye el nombre de la planta por `PROY_IND_04` y las zonas sensibles por `ZONA_A` a `ZONA_H`; elimina metadatos de archivo y evita incluir los precios unitarios del presupuesto ni el cajetín del plano. Si posteriormente detecta una anomalía en `ZONA_C`, la resuelve localmente en su modelo `.rvt` con la tabla de correspondencias guardada solo en su red interna.

#### Errores frecuentes
- Subir directamente el PDF completo de un juego de planos del Bloque 4 con cajetín, logotipo del cliente, dirección postal y firma del proyectista a una cuenta personal gratuita.
- Copiar y pegar actas de obra o correos electrónicos con nombres y teléfonos de contratistas para pedir un resumen ejecutivo.
- Pensar que borrar el título en la primera página de un PDF o Excel elimina las propiedades internas del documento o las referencias en encabezados y pies de página.
- Compartir coordenadas GPS, planos de seguridad física o esquemas de respaldo de centros críticos en chats sin autorización explícita de ciberseguridad.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué tipos de datos presentes en una exportación de Revit MEP, DIALux o un PDF de planos deben eliminarse obligatoriamente antes de consultar una IA externa?
2. ¿En qué consiste el principio de minimización y cómo se aplica mediante una tabla local de alias?
3. ¿Qué diferencia existe entre utilizar una cuenta gratuita personal frente a un entorno corporativo autorizado con políticas verificadas de no entrenamiento?

---

### 3.4. Principio de responsabilidad técnica humana intransferible y trazabilidad

#### Explicación breve y clara
En ingeniería eléctrica, la responsabilidad técnica, civil y administrativa ante un fallo de diseño, un incendio por sobrecarga, una caída de tensión inadmisible o un incumplimiento lumínico **recae íntegramente sobre el proyectista, el técnico competente firmante o la dirección facultativa según el marco legal del país**. Ninguna empresa proveedora de IA asume responsabilidad profesional por una sección infradimensionada o por una recomendación errónea de su modelo.

Por esa razón, toda oficina que incorpore IA en el Bloque 6 debe implantar el **Principio de responsabilidad técnica humana intransferible** apoyado en una **bitácora de trazabilidad**. Esta bitácora registra qué parte del trabajo se apoyó en un LLM (por ejemplo, estructurar el índice de la memoria o detectar desequilibrios preliminares en una tabla CSV), qué datos de entrada se suministraron, qué fallos o alucinaciones se detectaron en la respuesta y **qué método independiente validó finalmente la decisión** (software de cálculo, DIALux, revisión en Revit o comprobación normativa directa). Así, la IA acelera el trabajo intelectual repetitivo sin erosionar el rigor de ingeniería.

#### Conceptos clave
- **Responsabilidad humana intransferible:** regla ética y legal por la que solo una persona técnica competente y legalmente habilitada responde de la validez técnica y reglamentaria de un proyecto.
- **Bitácora de uso de IA (*AI Audit Log*):** registro interno sencillo (tabla de control) que vincula cada consulta asistida con su fuente de datos y su verificación independiente posterior.
- **Doble firma de verificación interna:** separar la fase de «generación/análisis asistido por IA» de la fase de «validación técnica independiente» realizada sobre herramientas deterministas y reglamento oficial.
- **Integración responsable en el itinerario BIM:** conectar el cierre visual del Bloque 5 (Twinmotion) con el Bloque 6 garantizando que la IA ordena y audita información técnica sin inventar ingeniería.

#### Definiciones necesarias
- **Validación independiente:** comprobación completa de fórmulas, magnitudes, parámetros normativos y resultados mediante una vía distinta e independiente del modelo de lenguaje (hoja de cálculo auditada, software técnico homologado, informe DIALux o lectura directa del reglamento aplicable).
- **Trazabilidad documental:** capacidad de reconstruir qué datos de partida, criterios, revisiones humanas y versiones normativas justifican cada decisión recogida en los planos y memorias del proyecto.

#### Ejemplo práctico realista
Tras concluir las láminas y el vídeo en Twinmotion del Bloque 5, un ingeniero eléctrico utiliza un LLM para redactar el borrador de la memoria de un local comercial y detectar posibles lagunas antes de su entrega. En su bitácora interna de proyecto anota: *«Uso IA: revisión cruzada de tabla CSV anonimizada de 18 circuitos (Revit) frente a índice de memoria; Alucinación detectada: la IA sugirió ITC inexistente para alumbrado exterior y asumió caída de tensión límite única del 3 % para toda la instalación sin distinguir alumbrado y fuerza; Acción correctora: verificados límites reales en el reglamento vigente aplicable y recalculadas líneas en hoja técnica validada v2.3»*. Con esta trazabilidad, el técnico conserva control absoluto del proyecto y demuestra diligencia profesional ante auditorías internas.

#### Errores frecuentes
- Incluir en la memoria técnica la frase «calculado/validado mediante Inteligencia Artificial» como si aportara respaldo técnico o jurídico.
- No dejar constancia interna de qué secciones o tablas pasaron por revisión con IA, impidiendo detectar patrones repetitivos de error en el equipo.
- Validar una respuesta del LLM pidiéndole al mismo chat «¿estás seguro de que cumple la norma?» en lugar de contrastar fuera del chat.
- Asumir que este programa formativo u otros cursos especializados otorgan atribuciones legales de firma profesional al margen de la titulación y colegiación exigidas en cada país.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué preguntar al propio chat de IA «¿estás seguro?» no constituye una validación independiente?
2. ¿Qué cuatro campos mínimos debe contener una bitácora de trazabilidad de uso de IA en un proyecto eléctrico?
3. ¿Cómo se articula el principio de responsabilidad técnica humana intransferible entre los entregables de DIALux, Revit MEP, Twinmotion y la asistencia con LLMs?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** combina microexposición técnica con demostración real de fallos en LLMs, laboratorio de anonimización y auditoría crítica de un caso realista de ingeniería eléctrica y BIM.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
|---|---|---|---|
| **1. Apertura, encuadre Bloque 5–6 y activación diagnóstica** | 00:00 – 00:25 (25 min) | Conecta el cierre del Bloque 5 (visualización en Twinmotion) con el Bloque 6; expone las reglas de seguridad, límites normativos y no habilitación legal del curso; dinamiza la Actividad 1 (encuesta de detección rápida de errores IA). | Participa en el diagnóstico inicial evaluando 4 afirmaciones técnicas sobre IA, BIM y normativa; comparte su experiencia previa o dudas usando ChatGPT/Claude en oficina técnica. |
| **2. Microexposición A: Naturaleza de los LLMs, alucinaciones y separación de dominios** | 00:25 – 01:05 (40 min) | Explica con ejemplos reales en pantalla el contraste entre cálculo eléctrico, DIALux, Revit MEP, Twinmotion y LLM; muestra en directo una alucinación normativa y un fallo aritmético sin $\sqrt{3}$. | Toma notas en su ficha técnica; identifica en directo qué variables faltaban en la consulta mostrada y formula preguntas de contraste. |
| **3. Actividad 2: Auditoría de respuesta alucinada y anonimización de tabla Revit/DIALux** | 01:05 – 01:50 (45 min) | Entrega un extracto real simulado (respuesta de LLM con errores + exportación CSV con datos sensibles de cliente); orienta el trabajo en grupos o parejas y supervisa la limpieza de datos. | Detecta al menos 4 fallos técnicos/normativos en la respuesta del LLM y ejecuta la anonimización completa del CSV usando la tabla local de alias antes de formular una consulta segura. |
| **Descanso activo** | 01:50 – 02:05 (15 min) | Pausa recomendada fuera de pantalla; deja disponible un mural de dudas para el segundo bloque. | Descansa y registra en el mural dudas sobre políticas de privacidad o flujos con su software habitual. |
| **4. Microexposición B: Seguridad IP, responsabilidad intransferible y bitácora de trazabilidad** | 02:05 – 02:35 (30 min) | Explica riesgos de NDA/propiedad intelectual, metadatos ocultos en PDF/Excel/BIM, y presenta la plantilla de Bitácora de Control IA y Verificación Independiente. | Contrasta las políticas habituales de su empresa u organización con la matriz de riesgo de datos y analiza la estructura de la bitácora. |
| **5. Análisis y resolución del Caso práctico (*ElectroSur Ingeniería S.L.*)** | 02:35 – 03:20 (45 min) | Introduce el caso práctico de la nave logística farmacéutica; supervisa las salas/equipos guiando el diagnóstico de incidente de seguridad y errores técnicos. | Analiza el caso en equipos, reconstruye los cálculos erróneos de forma independiente, redacta medidas de contención de confidencialidad y completa la bitácora del incidente. |
| **6. Actividad 3 y discusión guiada (Transferencia a flujo propio)** | 03:20 – 03:45 (25 min) | Modera la puesta en común de conclusiones del caso y guía la redacción del protocolo personal/de equipo de uso seguro de IA aplicable desde el lunes siguiente. | Redacta su Protocolo de 6 Reglas de Uso Seguro de IA para su entorno laboral/académico y contrasta dos propuestas con el grupo. |
| **7. Síntesis, evaluación sumativa y cierre** | 03:45 – 04:00 (15 min) | Resume los 5 mensajes críticos del tema, lanza el cuestionario sumativo final de verificación y presenta el puente hacia el Tema 2 (ChatGPT vs. Claude en proyectos). | Responde el cuestionario sumativo de cierre (6 ítems), completa su autoevaluación y descarga la plantilla de bitácora para todo el Bloque 6. |

*Suma total cronometrada:* $25 + 40 + 45 + 15 + 30 + 45 + 25 + 15 = \mathbf{240\text{ minutos (4 horas)}}$.

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Semáforo técnico «¿Qué valida realmente cada herramienta?»

- **Nombre:** Semáforo técnico «¿Qué valida realmente cada herramienta?»
- **Objetivo:** Activar los conocimientos previos de los Bloques 1 a 5 y desmontar falsas creencias sobre lo que valida un render de Twinmotion, un modelo 3D de Revit MEP, un informe de DIALux y una respuesta de ChatGPT/Claude.
- **Instrucciones para el alumnado:**
  1. Lee individualmente durante 5 minutos las 5 afirmaciones mostradas en pantalla (p. ej.: *«1. Si Twinmotion muestra un local bien iluminado y sin sombras oscuras, queda justificado el nivel de lux reglamentario»; «2. Si Revit MEP no marca interferencias 3D en conductos, la sección del cable es válida»; «3. Si un LLM cita un número de artículo del REBT o NEC, ese artículo existe en la edición vigente»; «4. Un LLM puede resumir requisitos de un pliego anonimizado en segundos»; «5. Un LLM puede sustituir la comprobación de cortocircuito en software validado»*).
  2. Clasifica cada afirmación en Verde (cierto), Ámbar (cierto solo con verificación humana y datos limpios) o Rojo (falso/riesgo profesional grave).
  3. Comparte tu clasificación en la encuesta en vivo y justifica en una frase la afirmación que consideres más engañosa en el día a día de un estudio.
- **Materiales necesarios:** Encuesta interactiva digital (Mentimeter, Slido o formulario del campus) o tarjetas físicas Verde/Ámbar/Rojo; diapositiva con las 5 afirmaciones.
- **Tiempo estimado:** 15 minutos (integrados en la Fase 1).
- **Rol del formador:** Lanzar la votación, visibilizar el porcentaje de discrepancia en el grupo y reforzar la frontera entre estética visual, geometría BIM, cálculo fotométrico, cálculo eléctrico normativo y asistencia textual.
- **Producto o entregable esperado:** Mapa colectivo de respuestas con breve síntesis escrita de cada participante en su ficha de trabajo.
- **Criterios de éxito:** El 100 % del grupo diferencia antes de pasar a la Fase 2 que ni Twinmotion ni un modelo BIM completo ni un texto de IA implican cumplimiento reglamentario eléctrico o lumínico.

### Actividad 2 (Aplicación técnica): Cazadores de alucinaciones y protocolo de anonimización

- **Nombre:** Cazadores de alucinaciones y protocolo de anonimización
- **Objetivo:** Detectar fallos aritméticos, suposiciones ocultas y alucinaciones normativas en una respuesta generada por IA, y sanear una tabla CSV exportada de Revit/DIALux antes de procesarla en un asistente externo.
- **Instrucciones para el alumnado:**
  1. En parejas o tríos, descargad el paquete de práctica `Act2_Pack_Datos.zip` que contiene: (a) una respuesta simulada de LLM proponiendo sección de cable y protecciones para dos circuitos (uno trifásico de $18\text{ kW}$ a $400\text{ V}$ y otro monofásico de $4\text{ kW}$ a $230\text{ V}$), y (b) una tabla `export_revit_dialux_bruto.csv` con 10 filas que incluye razón social real ficticia del cliente, NIF, dirección de la nave, nombre del ingeniero, precios de luminarias y magnitudes eléctricas/lumínicas.
  2. Durante 20 minutos, auditad la respuesta del LLM usando calculadora o hoja de cálculo: localizad al menos 4 errores (fórmula sin $\sqrt{3}$, mezcla de tensión, omisión del país/reglamento vigente y ausencia de condiciones de instalación/agrupamiento).
  3. Durante otros 20 minutos, generad dos archivos locales: `Tabla_Alias_Local.csv` (que NO sale del ordenador) y `export_revit_dialux_ANONIMIZADO.csv` listo para consultar en un LLM, comprobando que no quede ningún dato identificativo ni metadato comprometedor.
- **Materiales necesarios:** Archivo de respuesta simulada del LLM, archivo CSV bruto de ejemplo, hoja de cálculo (Excel/Calc) y lista de comprobación de anonimización.
- **Tiempo estimado:** 45 minutos (Fase 3: 40 min de ejecución + 5 min de contraste rápido).
- **Rol del formador:** Circular por las salas/mesas verificando que ningún equipo deje columnas ocultas con nombres de proyecto o precios, y mostrar las ecuaciones corregidas al cerrar la actividad.
- **Producto o entregable esperado:** Informe breve de 4 hallazgos técnicos corregidos + archivo `export_revit_dialux_ANONIMIZADO.csv` validado.
- **Criterios de éxito:** Detección correcta de los errores numéricos de corriente $I_b$ y de las referencias normativas no verificadas, junto con una tasa de fuga de identificadores igual a $0$ en el CSV anonimizado.

### Actividad 3 (Transferencia a proyecto real): Diseño del protocolo de uso seguro y Bitácora IA del estudio

- **Nombre:** Diseño del protocolo de uso seguro y Bitácora IA del estudio
- **Objetivo:** Trasladar los criterios de privacidad, doble verificación y responsabilidad técnica intransferible a un protocolo operativo propio aplicable a proyectos reales de instalaciones eléctricas y BIM.
- **Instrucciones para el alumnado:**
  1. Abre la plantilla **Protocolo y Bitácora de Control IA** (incluida en la sección 8).
  2. Adapta sus reglas a tu entorno real (estudio propio, consultora MEP, departamento de ingeniería o trabajo académico): define qué archivos están terminantemente prohibidos en chats públicos (`.rvt`, `.dwg`, PDFs con cajetín, presupuestos), qué herramientas corporativas están autorizadas, qué nivel de anonimización se exige y qué software/hoja determinista valida obligatoriamente cada cálculo eléctrico o lumínico.
  3. Completa una fila piloto de la Bitácora de Trazabilidad IA vinculada al caso de estudio o a un proyecto propio anonimizado.
  4. Intercambia tu protocolo con un compañero/a durante 5 minutos para comprobar que cualquier técnico nuevo del equipo lo entendería sin ambigüedades.
- **Materiales necesarios:** Plantilla editable de Protocolo y Bitácora IA (Word/Markdown/Excel).
- **Tiempo estimado:** 25 minutos (Fase 6).
- **Rol del formador:** Proyectar un protocolo modelo de referencia de 6 reglas, resolver dudas sobre proyectos reales del alumnado (p. ej. uso de NDA con clientes industriales) y recoger dos ejemplos para comentarlos en plenario.
- **Producto o entregable esperado:** Documento de 1 página *Protocolo Interno de Uso Seguro de IA y Bitácora Inicial* listo para aplicarse en los temas 2 a 11 del Bloque 6.
- **Criterios de éxito:** El protocolo delimita claramente qué datos no salen del estudio, prohíbe usar texto del LLM como cálculo definitivo, nombra los métodos de verificación independiente aplicables y asigna responsabilidad humana explícita.

---

## 6. Caso práctico

### Caso práctico: Incidente de alucinación técnica y fuga documental en *ElectroSur Ingeniería S.L.*

#### Contexto empresarial
**ElectroSur Ingeniería S.L.** es una consultora técnica de 18 profesionales especializada en proyectos de instalaciones eléctricas en BT/MT, estudio lumínico en DIALux y coordinación BIM en Revit MEP para naves logísticas y edificios terciarios. Actualmente desarrolla el proyecto de electrificación e iluminación de una **nave logística farmacéutica refrigerada de $3.200\text{ m}^2$** para un cliente estratégico (*FarmaLogística Ibérica S.A.*, nombre ficticio a efectos formativos), sujeto a un estricto acuerdo de confidencialidad (NDA) que prohíbe compartir planos, datos de procesos de frío industrial y presupuestos con terceros sin autorización escrita.

#### Situación o problema
Para adelantar trabajo un viernes por la tarde, un proyectista junior de incorporación reciente abre una cuenta personal gratuita de un asistente de IA en su navegador y realiza dos acciones sin supervisión:
1. Carga el archivo PDF sin anonimizar de la planta general de fuerza y la hoja Excel original del cuadro general de baja tensión (`CGBT_FarmaLogistica_Sevilla_v3.xlsx`), que incluye cajetín con dirección exacta, NIF del cliente, planos de cámaras de seguridad/refrigeración crítica y precios unitarios de aparamenta.
2. Pide al asistente: *«Calcúlame directamente las corrientes, caídas de tensión y calibres de los 5 alimentadores principales del CGBT según la normativa vigente y dime las luminarias mínimas para la zona de picking de $800\text{ m}^2$ a $300\text{ lx}$»*.

El asistente devuelve una tabla muy bien maquetada donde comete fallos graves, entre ellos calcular una línea trifásica de clima industrial de $30\text{ kW}$ a $400\text{ V}$ ($\cos\varphi = 0,85$) sin el factor $\sqrt{3}$, afirmar que un cable cumple caída de tensión sin indicar la longitud ni la temperatura de trabajo, citar una supuesta «ITC-BT-54 de alumbrado frigorífico» inexistente (recordando verificar siempre el REBT real vigente si aplica en España) y estimar por exceso o defecto la iluminación sin consultar archivo fotométrico `.ldt`/`.ies` en DIALux. El lunes por la mañana, el coordinador BIM detecta la tabla pegada en el borrador de la memoria antes de la revisión con el cliente.

#### Datos disponibles

| Elemento / Circuito | Datos reales del proyecto (anonimizados tras revisión) | Respuesta generada por el LLM sin verificar |
|---|---|---|
| **Identificación del expediente** | `PROY-LOG-2026-B` (uso interno restringido bajo NDA) | Se cargó nombre real del cliente, dirección GPS, NIF y presupuesto en cuenta gratuita |
| **Alimentador A1 — Enfriadora trifásica** | $P = 30\text{ kW}$, $U = 400\text{ V}$ (3F+N+PE), $\cos\varphi = 0,85$, $L = 48\text{ m}$, bandeja perforada | LLM calculó $I_b = 30.000 / (400 \times 0,85) = 88,24\text{ A}$; propuso $25\text{ mm}^2$ citando artículo inventado |
| **Alimentador A2 — Línea monofásica oficinas** | $P = 4,6\text{ kW}$, $U = 230\text{ V}$, $\cos\varphi = 1,0$, $L = 42\text{ m}$ | LLM afirmó $\Delta U = 1,8\,\%$ sin mostrar fórmula ni indicar si aplicó factor $2$ (ida y vuelta) |
| **Zona de picking ($800\text{ m}^2$)** | Objetivo ilustrativo $E_m \ge 300\text{ lx}$, altura montaje $7,5\text{ m}$, temperatura cámara $+4\,^\circ\text{C}$ | LLM recomendó «12 campanas de $150\text{ W}$» sin archivo fotométrico, sin $CU$, sin $MF$ ni cálculo $UGR$/$U_0$ |
| **Estado del modelo BIM / Visual** | Modelo Revit en fase LOD 300 sin validar *panel schedules*; 2 renders previos en Twinmotion | El junior argumentó: «En el render de Twinmotion se ve muy luminoso y el Excel del chat cuadra» |

#### Preguntas de análisis
1. ¿Qué vulneraciones de confidencialidad, propiedad intelectual y gobernanza de datos se han producido al cargar el PDF y la hoja Excel originales en una cuenta gratuita?
2. ¿Cuál es la corriente de diseño real $I_b$ del Alimentador A1 frente a la calculada por el LLM, y qué riesgo eléctrico o económico provocaría aceptar el error del asistente?
3. ¿Por qué es inaceptable validar la zona de picking con la estimación de «12 campanas» del LLM o con la apariencia luminosa del render de Twinmotion?
4. En el Alimentador A2 ($4,6\text{ kW}$, $230\text{ V}$, $42\text{ m}$), ¿qué ocurriría con la caída de tensión si el proyectista hubiera elegido cobre de $4\text{ mm}^2$ con $\gamma_{70} \approx 44\text{ m}/(\Omega\cdot\text{mm}^2)$? Comprueba numéricamente por qué el porcentaje afirmado por el LLM ($1,8\,\%$) es sospechoso.

#### Tarea a realizar
En equipos de 3 a 4 personas (30 minutos de trabajo + 15 minutos de exposición), elaborad un **Informe de Contención Técnica y Gobernanza IA** para la dirección de *ElectroSur Ingeniería S.L.* que contenga:
1. **Plan inmediato de contención de privacidad y NDA** (acciones técnicas y organizativas para anular la exposición de datos, revisión de política de retención de la cuenta usada y protocolo obligatorio de anonimización previa).
2. **Recálculo independiente de verificación** de A1 ($I_b$ real) y A2 ($I_b$ y $\Delta U$ con $4\text{ mm}^2$ y $6\text{ mm}^2$ como contraste aritmético ilustrativo, señalando qué parámetros normativos del país vigente faltan por confirmar para emitir sección definitiva).
3. **Ruta técnica correcta de validación** para la zona de picking (DIALux con `.ldt`/`.ies` + verificación térmica/IP de luminarias en ambiente $+4\,^\circ\text{C}$ + sincronización BIM en Revit + papel meramente comunicativo de Twinmotion).
4. **Registro en Bitácora de Trazabilidad IA** con los errores detectados y medidas correctoras firmadas por técnico responsable.

#### Posibles soluciones o criterios de análisis
Un análisis técnico sólido deberá contemplar:
- **Confidencialidad y NDA:** suspender la carga de archivos sin redactar, revisar inmediatamente los ajustes de privacidad/entrenamiento de la cuenta empleada, notificar al responsable de cumplimiento/dirección según procedimiento interno del NDA, e implantar la regla de extraer únicamente CSV anonimizados sin cajetines, NIF, ubicaciones ni presupuestos.
- **Comprobación numérica independiente de A1:**
  $$I_b = \frac{30.000}{\sqrt{3} \times 400 \times 0,85} = \frac{30.000}{588,897} \approx 50,94\text{ A}$$
  El LLM erró al omitir $\sqrt{3}$ ($88,24\text{ A}$). A partir de $50,94\text{ A}$, el proyectista debe verificar en el reglamento vigente aplicable las tablas de intensidad admisible (tipo de aislamiento, temperatura ambiente en zona refrigerada o sala técnica, factor de agrupamiento en bandeja, caída de tensión y poder de corte), sin fiarse nunca de artículos inventados como una supuesta «ITC-BT-54 de alumbrado frigorífico».
- **Comprobación numérica independiente de A2:**
  $$I_b = \frac{4.600}{230 \times 1,0} = 20,0\text{ A}$$
  Con cobre de $S = 4\text{ mm}^2$ y $\gamma_{70} \approx 44\text{ m}/(\Omega\cdot\text{mm}^2)$:
  $$\Delta U = \frac{2 \times 42 \times 20}{44 \times 4} = \frac{1.680}{176} \approx 9,55\text{ V} \rightarrow \frac{9,55}{230} \times 100 \approx 4,15\,\%$$
  Si el LLM olvidó el factor $2$ (ida y vuelta), obtuvo la mitad ($2,08\,\% \approx 1,8\text{–}2,1\,\%$ según conductividad asumida), ocultando un posible exceso de caída de tensión (con $S = 6\text{ mm}^2$, $\Delta U = \frac{1.680}{44 \times 6} \approx 6,36\text{ V} \rightarrow 2,77\,\%$; el límite reglamentario aplicable depende del tipo de circuito y país y debe verificarse siempre en la norma vigente).
- **Iluminación y BIM:** 12 campanas sin fotometría no garantizan uniformidad $U_0$, ni deslumbramiento $UGR$, ni compensan el factor de mantenimiento; es obligatorio simular en DIALux con archivos `.ldt`/`.ies` aptos para baja temperatura y comprobar que Twinmotion solo comunica visualmente el espacio sin demostrar cumplimiento.

#### Preguntas de reflexión final
- ¿Qué señal de alarma en la respuesta del LLM debería haber hecho desconfiar al proyectista junior en los primeros 10 segundos?
- En tu propia forma de trabajar actual con BIM, DIALux o memorias, ¿qué documento o tabla estuviste más tentado/a de pegar directamente en un chat sin anonimizar?

---

## 7. Evaluación

### Evaluación diagnóstica
- **Instrumento:** Actividad 1 (*Semáforo técnico* de 5 afirmaciones sobre validación en Twinmotion, Revit MEP, DIALux y LLMs) al inicio de la sesión.
- **Finalidad:** Identificar ideas previas erróneas sobre supuestas capacidades «automáticas» de la IA o de los entornos 3D, sin calificación numérica.

### Evaluación formativa
- **Instrumento:** Seguimiento directo del formador durante la **Actividad 2** (revisión de errores detectados en la respuesta de IA y auditoría de cero fugas identificativas en el CSV anonimizado) y durante el **Caso práctico** (*ElectroSur Ingeniería S.L.*), verificando el recálculo independiente con calculadora u hoja de cálculo.
- **Retroalimentación:** Corrección en vivo de errores algebraicos (omisión de $\sqrt{3}$ o factor $2$) y revisión inmediata de metadatos ocultos en archivos exportados.

### Evaluación sumativa
Consta de dos evidencias evaluables al cierre del tema:
1. **Cuestionario sumativo breve (6 preguntas de respuesta múltiple y análisis corto, 10 minutos, 40 % de la nota del tema):** evalúa distinción entre dominios (cálculo eléctrico vs. DIALux vs. Revit vs. Twinmotion vs. LLM), alucinaciones normativas, fallos aritméticos típicos, anonimización y principio de responsabilidad técnica humana.
2. **Entregable práctico integrado (60 % de la nota del tema):** entrega del paquete compuesto por: (a) `export_revit_dialux_ANONIMIZADO.csv` limpio, (b) hoja breve de recálculo independiente del caso práctico y (c) **Protocolo de Uso Seguro de IA + Bitácora Inicial** (Actividad 3), evaluado con la siguiente rúbrica.

### Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
|---|---|---|---|---|
| **1. Diferenciación de dominios técnicos (Cálculo / DIALux / Revit / Twinmotion / IA)** | Atribuye validación reglamentaria o fotométrica a renders de Twinmotion, modelos 3D o texto generado por un LLM. | Diferencia parcialmente los entornos, pero confunde algún criterio de cálculo eléctrico con capacidades del modelo BIM o de la IA. | Separa con precisión cálculo eléctrico normativo, simulación DIALux, modelado Revit MEP, visualización Twinmotion y apoyo documental con IA. | Justifica además qué entregable oficial acredita cada verificación y diseña controles para evitar confusiones en equipo. |
| **2. Detección de alucinaciones normativas y fallos aritméticos** | Acepta sin verificar los artículos normativos citados o los resultados numéricos de corriente/caída de tensión del LLM. | Detecta errores evidentes en texto, pero omite comprobar fórmulas ($\sqrt{3}$, factor $2$), unidades SI o país/edición reglamentaria. | Identifica los fallos aritméticos y normativos de la salida del LLM, recalcula de forma independiente y señala la norma a verificar por jurisdicción. | Documenta paso a paso las hipótesis omitidas por la IA, formula ecuaciones en hoja auditable y explicita criterios de contraste oficial. |
| **3. Anonimización, privacidad y propiedad intelectual** | Sube o conserva datos identificativos del cliente (nombre, NIF, dirección, precios o planos completos con cajetín) en el archivo preparado para la IA. | Elimina el nombre visible del cliente, pero deja metadatos, referencias de obra o columnas presupuestarias sensibles sin limpiar. | Sanea completamente los datos en CSV/Markdown mediante códigos neutros y mantiene la tabla de equivalencias en local. | Aplica minimización estricta de columnas, verifica ausencia de metadatos y establece reglas de cumplimiento NDA adaptadas a su organización. |
| **4. Responsabilidad humana intransferible y trazabilidad** | Delega decisiones de diseño en la IA o no incluye registro de revisión técnica humana. | Menciona la necesidad de revisar las respuestas, pero no aporta bitácora estructurada ni método independiente de comprobación. | Incorpora un protocolo claro de uso seguro y una bitácora con datos de entrada, fallos detectados, corrección y responsable técnico. | Integra la bitácora de trazabilidad IA directamente en el flujo de control de calidad (QA/QC) previo a emisión de proyecto y planos. |

### Actividad de autoevaluación
Al terminar la sesión, cada participante completa una lista de verificación personal (3 minutos):
1. *¿Soy capaz de explicar con mis propias palabras por qué un cálculo generado en texto por ChatGPT o Claude nunca es validación profesional?* (Sí / Necesito repaso)
2. *¿He comprobado en mis exportaciones recientes de Revit o DIALux qué campos confidenciales tendría que anonimizar antes de consultar un LLM?* (Sí / Pendiente de aplicar)
3. *¿Cuál será la primera regla de seguridad técnica que implantaré esta semana en mi flujo de trabajo con IA?* (Respuesta abierta en 2 líneas).

---

## 8. Materiales y recursos

### Guion de diapositivas

- **Slide 1 — Portada y encuadre del Bloque 6:** Título del tema, ubicación en el itinerario (Tema 40 de 50; conexión directa tras Twinmotion en Bloque 5), objetivos medibles y aviso explícito de alcance técnico (no MBA / no habilitación legal de firma).
- **Slide 2 — Mapa de fronteras técnicas (los 5 entornos):** Esquema comparativo entre Cálculo Eléctrico Normativo, DIALux (`.ldt`/`.ies`), Revit MEP (geometría/parámetros), Twinmotion (*Direct Link*/visual) y LLMs (asistencia textual). Regla visual destacada: *«Render atractivo o modelo 3D completo $\ne$ proyecto seguro ni conforme a reglamento»*.
- **Slide 3 — Cómo funciona un LLM por dentro (sin mitos):** Predicción probabilística de tokens frente a ejecución determinista; por qué el tono seguro del modelo engaña al técnico cuando falta base de verificación.
- **Slide 4 — Anatomía de una alucinación normativa:** Ejemplos reales de mezcla entre REBT español, IEC 60364 y NEC/NFPA 70, invención de artículos y desactualización de ediciones; regla obligatoria de verificación por país y autoridad competente.
- **Slide 5 — Fallos aritméticos silenciosos en ingeniería eléctrica:** Demostración paso a paso de un fallo sin $\sqrt{3}$ en trifásica y omisión del factor $2$ en caída de tensión monofásica; contraste inmediato frente a cálculo independiente.
- **Slide 6 — Privacidad, NDA y anonimización de BIM/DIALux:** Flujo visual en 4 pasos (Exportación mínima CSV $\rightarrow$ Tabla local de alias $\rightarrow$ Limpieza de metadatos/cajetines $\rightarrow$ Consulta segura en entorno autorizado).
- **Slide 7 — Responsabilidad técnica humana intransferible y Bitácora IA:** Principio ético-legal de autoría y muestra en pantalla de una fila completa de la Bitácora de Trazabilidad IA.
- **Slide 8 — Síntesis del caso práctico y puente al Tema 2:** Lecciones clave de *ElectroSur Ingeniería S.L.*, checklist de 6 reglas y avance del Tema 2 (*Uso de ChatGPT y Claude como asistentes para proyectos eléctricos*).

### Ficha de trabajo
Documento descargable (2 páginas) para seguimiento en aula que contiene:
1. **Tabla comparativa de validación** (5 filas: Cálculo eléctrico, DIALux, Revit MEP, Twinmotion, LLM — columnas: *Qué produce*, *Qué NO valida*, *Documento de prueba*).
2. **Checklist de 8 puntos de anonimización previa** (razón social, NIF/CIF, direcciones/GPS, nombres de equipo, cajetines DWG/PDF, precios unitarios, rutas de servidor en metadatos, instalaciones críticas).
3. **Espacio guiado para el recálculo independiente** de las líneas A1 y A2 del caso práctico.

### Plantilla técnica práctica
**Plantilla 6.1 — Bitácora de Trazabilidad y Control de Uso de IA en Proyectos Eléctricos**

| ID Consulta | Fecha y Técnico | Entregable / Fase | Herramienta IA (Versión/Plan) | Datos introducidos (Anonimizados SÍ/NO) | Hallazgos o alucinaciones detectadas | Método de validación independiente | Estado final y Firma interna |
|---|---|---|---|---|---|---|---|
| `IA-01` | *dd/mm — J.M.* | *Revisión alimentadores CGBT* | *Claude / ChatGPT (entorno autorizado)* | *CSV anonimizado `PROY_04` (SÍ)* | *Omitió factor 2 en circuito monofásico y citó tabla genérica sin país* | *Hoja cálculo validada v2.3 + contraste texto oficial vigente* | *Corregido y validado — J.M.* |
| `IA-02` | *dd/mm — A.R.* | *Chequeo luminarias picking* | *ChatGPT / Claude* | *Resumen locales `ZONA_A..H` (SÍ)* | *Propuesta sin archivo `.ldt`, sin $U_0$ ni $UGR$* | *Simulación completa en DIALux con fotometría fabricante* | *Descartada cifra IA; validado DIALux — A.R.* |

### Lecturas y recursos recomendados
> **Advertencia de validación obligatoria:** Antes de utilizar cualquier documento normativo, guía técnica o política de software en un proyecto real o impartición docente, el formador y el alumnado deben verificar la **edición vigente**, el **país y reglamento aplicable** y las **condiciones de privacidad actualizadas** del proveedor de IA.

- **Documentación normativa de referencia (ejemplos ilustrativos a verificar según país):**
  - *Reglamento Electrotécnico para Baja Tensión (REBT — RD 842/2002 e ITC-BT)* y guías técnicas oficiales de aplicación en España (cuando el proyecto se ubique en España; comprobar actualizaciones y normativa autonómica/particular de compañía).
  - Serie normativa internacional *IEC 60364* (*Low-voltage electrical installations*) o código aplicable en cada país (p. ej. *NFPA 70 / NEC* en jurisdicciones que lo adopten).
  - Normativa de iluminación aplicable (como *UNE-EN 12464-1* para lugares de trabajo interiores en ámbito europeo, verificando última edición vigente).
- **Marcos de referencia y documentación técnica de herramientas:**
  - Documentación oficial sobre uso empresarial, retención de datos y privacidad de **OpenAI (ChatGPT)** y **Anthropic (Claude)** *(comprobar siempre la versión y configuración vigente de la cuenta utilizada)*.
  - Guías de buenas prácticas BIM y estándares de gestión de la información (serie *ISO 19650* como marco orientativo de organización documental, sin implicar certificación automática).
  - Marcos de gestión de riesgos de IA (p. ej. *NIST AI Risk Management Framework* y documentación divulgativa sobre el Reglamento Europeo de IA aplicable según ámbito).

### Glosario de términos clave

| Término | Definición |
|---|---|
| **Alucinación normativa** | Generación por parte de un modelo de lenguaje de artículos, tablas, límites o citas reglamentarias inexistentes, obsoletas o mezcladas entre jurisdicciones distintas. |
| **Anonimización previa** | Eliminación o sustitución por alias neutros de todo dato identificativo del cliente, emplazamiento, costes confidenciales o metadatos antes de consultar un asistente de IA externo. |
| **Bitácora de trazabilidad IA** | Registro estructurado que documenta qué consultas se realizaron a una IA, qué datos anonimizados se usaron, qué fallos se detectaron y qué método determinista validó la decisión final. |
| **Cálculo determinista** | Ejecución exacta y reproducible de ecuaciones matemáticas mediante software certificado, hoja de cálculo auditada o cálculo manual verificado, frente a la generación probabilística de texto. |
| **LLM (*Large Language Model*)** | Modelo de lenguaje basado en aprendizaje profundo que predice texto estadísticamente coherente; útil como copiloto documental y de revisión, pero carente de criterio legal o motor físico propio. |
| **Principio de minimización** | Práctica de seguridad que consiste en transferir únicamente los atributos técnicos mínimos indispensables (p. ej. columnas CSV concretas) en lugar de expedientes, PDFs o modelos completos. |
| **Responsabilidad técnica intransferible** | Principio profesional y jurídico por el que solo el técnico competente asume la validez reglamentaria y seguridad de un proyecto, sin posibilidad de delegarla en herramientas de software o IA. |
| **Validación independiente** | Comprobación de fórmulas, unidades SI, parámetros reglamentarios y resultados mediante herramientas de cálculo y fuentes oficiales ajenas al asistente de IA consultado. |

---

## 9. Adaptaciones

### Sesión presencial
- **Dinámica de activación física:** En la Actividad 1, proyectar las 5 afirmaciones y pedir al alumnado que levante tarjetas de colores (Verde/Ámbar/Rojo) antes de debatir en voz alta los motivos de cada error.
- **Trabajo en mesa por parejas (Actividad 2 y Caso):** Entregar impresas la tabla de alucinaciones y la ficha de recálculo independiente junto con acceso en portátil al CSV bruto; cerrar con puesta en común en pizarra mostrando paso a paso la ecuación trifásica y monofásica verificadas.
- **Simulación de revisión en vivo:** Conectar el proyector a una sesión de demostración del formador mostrando en pantalla grande las propiedades ocultas/metadatos de un archivo Excel/PDF antes y después de limpiarlo.

### Sesión online síncrona
- **Interacción continua:** Usar encuesta en vivo (Mentimeter/Slido o votación de plataforma) en la Fase 1 y chat estructurado para que el alumnado pegue las fórmulas corregidas durante la Microexposición A.
- **Salas pequeñas (*breakout rooms*):** Dividir al grupo en equipos de 3–4 personas con temporizador visible (20 min + 20 min en Actividad 2; 30 min en Caso práctico), compartiendo un tablero o documento colaborativo por sala para revisar en tiempo real la Bitácora de Trazabilidad.
- **Pausa obligatoria:** Respetar estrictamente el descanso de 15 minutos a mitad de sesión fuera de pantalla para mantener la atención crítica en el análisis numérico posterior.

### Sesión asíncrona
- **Píldoras de microaprendizaje:** Fragmentar las exposiciones teóricas en 4 vídeos breves de 10–12 minutos (correspondientes a 3.1, 3.2, 3.3 y 3.4) con un test autocomprobable de 2 preguntas tras cada bloque.
- **Entrega práctica auditada:** El alumnado descarga `Act2_Pack_Datos.zip` y el caso *ElectroSur Ingeniería S.L.*, sube al campus virtual su archivo `export_revit_dialux_ANONIMIZADO.csv`, su hoja de recálculo y su Protocolo/Bitácora inicial en plazo definido.
- **Foro de revisión cruzada:** Cada participante comenta la propuesta de protocolo de seguridad de al menos un compañero/a verificando si contempla anonimización, contraste normativo por país y método de validación independiente; el formador aporta retroalimentación escrita en máximo 48 horas laborables.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Integra el rigor de cálculo eléctrico del **Bloque 1** (intensidad $I_b$, caída de tensión, protecciones), el criterio fotométrico de DIALux del **Bloque 2** ($E_m$, $U_0$, $UGR$, archivos `.ldt`/`.ies`), la estructura de datos de Revit MEP del **Bloque 3**, la coherencia documental de planos/especificaciones del **Bloque 4** y la diferenciación entre comunicación visual y cálculo técnico tras Twinmotion (**Bloque 5**).
- **Competencias que desarrolla:** Alfabetización crítica en inteligencia artificial aplicada a ingeniería, auditoría de errores numéricos y alucinaciones normativas, gobernanza y confidencialidad de datos técnicos BIM, y trazabilidad de decisiones bajo responsabilidad profesional.
- **Conexión dentro del plan de 6 módulos / 50 temas:**
  - **Tema anterior:** Conecta directamente con el **Tema 10 del Bloque 5: Exportación en imágenes, vídeos y panoramas 360°** (Tema 39 de 50), estableciendo el límite exacto entre comunicar visualmente una instalación con Twinmotion y someter la documentación técnica a asistencia con IA sin confundir realismo visual con conformidad reglamentaria.
  - **Tema posterior:** Prepara la base de seguridad, privacidad y doble verificación necesaria para el **Tema 2 del Bloque 6: Uso de ChatGPT y Claude como asistentes para proyectos eléctricos** (Tema 41 de 50), donde el alumnado comparará flujos de trabajo reales entre ambas plataformas usando tablas limpias exportadas de Revit y DIALux.
- **Evidencia de aprendizaje que dejará el alumnado:**
  1. Archivo `export_revit_dialux_ANONIMIZADO.csv` sin fuga de identificadores ni metadatos.
  2. Hoja breve de recálculo independiente del caso *ElectroSur Ingeniería S.L.*.
  3. Protocolo interno de Uso Seguro de IA + primera fila de Bitácora de Trazabilidad IA.
  4. Cuestionario sumativo final completado.

---

## Siguientes pasos para el formador

1. **Preparar el paquete `Act2_Pack_Datos.zip` 48 horas antes:** confirmar que los archivos de ejemplo (`export_revit_dialux_bruto.csv` y la respuesta simulada con alucinaciones) usan nombres ficticios explícitos y que la cuenta de demostración del formador tiene desactivado el entrenamiento con historial si muestra ejemplos en vivo.
2. **Verificar normativa ilustrativa local:** adaptar los ejemplos de referencia normativa al país principal del grupo de alumnos, manteniendo siempre la advertencia explícita de comprobar edición y jurisdicción vigentes.
3. **Configurar la encuesta de la Actividad 1 y el cuestionario sumativo final** en la plataforma del aula virtual antes de iniciar la sesión.
4. **Revisar las bitácoras y protocolos entregados en la Actividad 3** durante los 3 días posteriores, asegurando que todo el alumnado comprende la prohibición de cargar expedientes reales sin anonimizar antes de pasar a las prácticas con ChatGPT y Claude del Tema 2.
5. **Abrir el Tema 2** retomando en 5 minutos una de las mejores bitácoras de seguridad presentadas por el grupo como estándar común para el resto del Bloque 6.
