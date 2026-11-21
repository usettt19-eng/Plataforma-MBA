# Tema 2. Big data en proyectos

## 1. Ficha del tema

| Campo | Detalle |
| --- | --- |
| **Título del tema** | Tema 2. Big data en proyectos |
| **Bloque y posición dentro del programa** | Bloque 9: Big data — Posición 2 de 5 |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Mandos intermedios y emprendedores |
| **Nivel de dificultad** | Intermedio |
| **Prerrequisitos** | Haber completado el Tema 1 (Introducción al big data: las 5 V, fuentes y arquitecturas básicas) y poseer experiencia básica en seguimiento de proyectos o gestión por objetivos. |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado será capaz de integrar los datos en la toma de decisiones de un proyecto o área de negocio mediante el diseño de KPIs accionables, controles operativos de calidad del dato y un modelo ligero de gobernanza adaptado a la realidad de una pyme. |

---

## 2. Objetivos de aprendizaje

Al concluir esta sesión, el alumnado será capaz de:

1. **Formular** preguntas de decisión empresarial y traducirlas en indicadores clave de rendimiento (KPIs) medibles, accionables y libres de métricas vanidosas. *(Nivel de Bloom: Crear)*
2. **Diferenciar** entre métricas operativas, indicadores adelantados (*leading*) e indicadores rezagados (*lagging*) para anticipar desviaciones en proyectos y operaciones. *(Nivel de Bloom: Analizar)*
3. **Diagnosticar** fallos de calidad del dato aplicando sus seis dimensiones fundamentales (exactitud, completitud, consistencia, puntualidad, validez y unicidad) sobre un conjunto de información empresarial. *(Nivel de Bloom: Evaluar)*
4. **Diseñar** un marco ligero de gobernanza del dato para una pyme asignando roles claros (*Data Owner*, *Data Steward* y usuarios consumidores), definiciones únicas y reglas de acceso. *(Nivel de Bloom: Crear)*
5. **Aplicar** un protocolo estructurado de toma de decisiones basada en datos que reduzca sesgos cognitivos y conflictos entre departamentos. *(Nivel de Bloom: Aplicar)*

---

## 3. Contenidos esenciales

### 3.1. Incorporación de datos a la toma de decisiones en proyectos y operaciones

**Explicación breve y clara**  
Disponer de cuadros de mando no garantiza mejores decisiones si el equipo sigue decidiendo por intuición, jerarquía (el efecto *HiPPO*: la opinión de la persona mejor pagada) o buscando datos únicamente para confirmar una idea previa. Incorporar datos en un proyecto implica seguir una disciplina clara: definir primero la **decisión** que debe tomarse, formular hipótesis contrastables, acordar qué evidencia hará cambiar el rumbo del proyecto y establecer una cadencia de revisión donde cada desviación dispare una acción concreta.

**Conceptos clave**  
- Decisión basada en datos (*data-driven*) vs. informada por datos (*data-informed*).
- Sesgos frecuentes en proyectos: sesgo de confirmación, sesgo de supervivencia y efecto *HiPPO* (*Highest Paid Person's Opinion*).
- Árbol de decisiones y umbrales de actuación (*triggers*).
- Diferencia entre correlación y causalidad.

**Definiciones necesarias**  
- **Toma de decisiones informada por datos (*data-informed*):** Enfoque práctico que combina evidencia cuantitativa rigurosa con el contexto de negocio, la experiencia cualitativa y el criterio ético/estratégico.
- **Umbral de actuación (*trigger*):** Valor límite preacordado de un indicador que, al cruzarse, obliga automáticamente a investigar o ejecutar una acción correctiva.
- **Sesgo de confirmación:** Tendencia a buscar, filtrar o interpretar únicamente los datos que respaldan la hipótesis que ya teníamos antes de analizar.
- **Correlación vs. causalidad:** La correlación indica que dos variables se mueven juntas; la causalidad demuestra que un cambio en una provoca directamente el cambio en la otra.

**Ejemplo práctico realista (pyme en transformación digital)**  
Una pyme madrileña de software SaaS para gestorías (45 empleados) lanza un proyecto de rediseño de su proceso de *onboarding* porque la dirección comercial "cree que el formulario es demasiado largo". En lugar de rediseñar a ciegas, el jefe de proyecto analiza el embudo de activación y descubre que el 82 % completa el formulario sin problemas, pero abandona al tercer día cuando debe importar su histórico contable. Basándose en ese dato, reorientan el presupuesto del proyecto a crear un asistente guiado de importación y fijan un umbral de éxito: elevar la activación a 7 días por encima del 60 %.

**Errores frecuentes**  
- Construir informes con 40 gráficos antes de acordar qué decisiones concretas tomará cada responsable con ellos.
- Confundir correlación con causalidad (por ejemplo, asumir que un aumento de llamadas comerciales causó la subida de ventas cuando coincidió con una campaña estacional).
- Utilizar los datos como arma arrojadiza para buscar culpables entre departamentos, lo que incentiva la manipulación o el ocultamiento de cifras.

**Preguntas que el alumnado debería poder responder**  
- ¿En qué se diferencia una cultura *data-driven* rígida de un enfoque *data-informed* en la dirección de proyectos?
- ¿Cómo puede neutralizar un mando intermedio el efecto *HiPPO* en una reunión de seguimiento?
- ¿Por qué todo indicador crítico de un proyecto debería llevar asociado un umbral de actuación previo?

---

### 3.2. Definición y diseño de KPIs accionables

**Explicación breve y clara**  
No toda métrica es un KPI (*Key Performance Indicator*). Un error muy común en pymes que se digitalizan es llenar sus cuadros de mando de métricas informativas o "vanidosas" (visitas totales, seguidores, descargas acumuladas) que suben siempre y producen sensación de éxito, pero no ayudan a dirigir el proyecto ni a corregir desviaciones. Un buen KPI está alineado con un objetivo estratégico, es inequívoco en su fórmula, tiene un responsable único y combina resultados finales (*lagging*) con señales tempranas (*leading*).

**Conceptos clave**  
- Métrica vs. KPI vs. OKR (Objetivo y Resultado Clave).
- Métricas vanidosas (*vanity metrics*) vs. métricas accionables.
- Indicadores rezagados (*lagging indicators*) e indicadores adelantados (*leading indicators*).
- Ficha técnica de KPI (definición, fórmula, fuente, periodicidad, propietario y umbral).
- Efecto Cobra / Ley de Goodhart ("cuando una medida se convierte en objetivo, deja de ser una buena medida").

**Definiciones necesarias**  
- **KPI (Indicador Clave de Rendimiento):** Métrica cuantificable directamente vinculada a un objetivo crítico de negocio o proyecto que permite evaluar el progreso y activar decisiones.
- **Indicador rezagado (*lagging*):** Mide un resultado ya ocurrido (facturación mensual, tasa de abandono anual, margen final del proyecto). Es fácil de medir pero llega tarde para corregir.
- **Indicador adelantado (*leading*):** Mide una causa o actividad temprana que anticipa el resultado futuro (tasa de uso semanal del producto, retraso en hitos críticos, tiempo medio de respuesta a incidencias).
- **Métrica vanidosa:** Cifra que aparenta éxito pero no se correlaciona con resultados sostenibles ni orienta qué acción tomar si cambia.

**Ejemplo práctico realista (pyme en transformación digital)**  
Una academia online de formación técnica para instaladores (30 empleados) medía únicamente "alumnos inscritos al mes" (métrica incompleta) y "facturación total" (*lagging*). Aunque las inscripciones crecían, la renovación anual se desplomó. Al rediseñar su cuadro de mando del proyecto académico, introdujeron dos indicadores *leading*: "% de alumnado que completa el módulo 1 en los primeros 10 días" y "tiempo medio de respuesta del tutor". Al actuar sobre esos dos indicadores semanales, lograron anticipar el abandono y mejorar la tasa de finalización antes de que impactara en las renovaciones.

**Errores frecuentes**  
- Definir demasiados KPIs en un mismo proyecto (más de 5-7 KPIs principales diluyen el foco directivo).
- No documentar la fórmula exacta del KPI, provocando que Finanzas y Ventas reporten cifras distintas para "margen" o "cliente activo".
- Incentivar un KPI aislado sin un indicador de contrapeso (por ejemplo, premiar velocidad de cierre de tickets de soporte sin medir la satisfacción o la tasa de reapertura).

**Preguntas que el alumnado debería poder responder**  
- ¿Por qué conviene emparejar siempre un indicador *lagging* con al menos un indicador *leading*?
- ¿Qué ocurre cuando se fija un KPI sin un indicador de equilibrio o contrapeso (Ley de Goodhart)?
- ¿Qué elementos mínimos debe incluir la ficha técnica de un KPI para evitar disputas en las reuniones de dirección?

---

### 3.3. Calidad del dato: dimensiones, diagnóstico y prevención

**Explicación breve y clara**  
La calidad del dato determina si un proyecto analítico genera confianza o descrédito. En el momento en que un director detecta dos cifras incoherentes en un cuadro de mando, la confianza en todo el sistema se desploma y el equipo vuelve a sus hojas de Excel paralelas. Gestionar la calidad del dato no es solo "limpiar ficheros al final", sino medir seis dimensiones objetivas y atacar la causa raíz en el punto de captura (formularios, integraciones y procedimientos de trabajo).

**Conceptos clave**  
- Las 6 dimensiones de la calidad del dato: Exactitud, Completitud, Consistencia, Puntualidad, Validez y Unicidad.
- Coste de la mala calidad del dato (retrabajo, decisiones erróneas, pérdida de clientes, sanciones).
- Regla 1-10-100 (prevenir en origen cuesta 1, corregir después cuesta 10, sufrir el fallo en el cliente cuesta 100 — regla heurística de gestión de calidad).
- Perfilado de datos (*data profiling*) y controles automatizados en origen.

**Definiciones necesarias**  
- **Exactitud:** El dato refleja fielmente la realidad del mundo físico o transaccional (el precio facturado coincide con el contrato firmado).
- **Completitud:** Ausencia de campos obligatorios vacíos o nulos para el propósito requerido (teléfono o CIF informado en cada cliente B2B).
- **Consistencia:** El mismo hecho presenta el mismo valor en todos los sistemas donde aparece (un pedido cancelado figura cancelado tanto en el CRM como en el ERP).
- **Puntualidad (Oportunidad):** El dato está disponible dentro de la ventana temporal necesaria para tomar la decisión.
- **Validez:** El dato cumple el formato, dominio o rango esperado (fechas válidas, códigos postales de 5 dígitos, valores positivos en unidades).
- **Unicidad:** No existen registros duplicados que representen a la misma entidad (un mismo paciente o cliente dado de alta tres veces).

**Ejemplo práctico realista (pyme en transformación digital)**  
Una empresa de reformas y eficiencia energética para viviendas en Zaragoza (55 empleados) detecta que sus campañas de seguimiento comercial fallan porque el 28 % de los presupuestos del CRM no tiene código postal (**completitud**), el 14 % de clientes aparece duplicado por haber sido introducido con y sin acentos (**unicidad**) y los importes del CRM no coinciden con las facturas finales del programa contable (**consistencia**). En lugar de contratar a un becario cada trimestre para limpiar la base, configuran validaciones obligatorias en el formulario del CRM, búsqueda automática por DNI/teléfono antes de crear un cliente nuevo y una sincronización nocturna desde el ERP.

**Errores frecuentes**  
- Tratar la calidad del dato como un proyecto puntual de "limpieza de verano" en vez de un proceso continuo con controles en origen.
- Culpar únicamente al departamento de IT cuando el origen del error está en procesos administrativos mal diseñados o incentivos mal alineados en recepción/ventas.
- Buscar una perfección del 100 % en todos los campos de la empresa en lugar de priorizar los **elementos críticos de datos (CDE)** que alimentan los KPIs clave.

**Preguntas que el alumnado debería poder responder**  
- ¿Cuál es la diferencia entre **validez** y **exactitud** de un dato? Pon un ejemplo empresarial.
- ¿Por qué resulta mucho más rentable prevenir errores en el punto de captura que depurar datos en la fase de informes?
- ¿Qué son los elementos críticos de datos (CDE) y por qué ayudan a priorizar esfuerzos en una pyme?

---

### 3.4. Gobernanza del dato ligera y práctica para pymes

**Explicación breve y clara**  
La gobernanza del dato (*data governance*) suele percibirse en pymes como burocracia reservada a bancos o grandes corporaciones. Sin embargo, en esencia consiste en responder de forma sencilla a cinco preguntas: **qué significa cada dato, quién responde de él, quién puede verlo o modificarlo, dónde reside la fuente oficial y qué normativa debe cumplirse**. Una gobernanza ligera ("mínima viable") aporta orden sin frenar la agilidad de los proyectos.

**Conceptos clave**  
- Fuente única de verdad (*Single Source of Truth*, SSOT).
- Glosario de negocio y diccionario de datos.
- Roles de gobernanza: *Data Owner* (propietario de negocio), *Data Steward* (custodio operativo) y *Data Custodian* (responsable técnico/IT).
- Seguridad, control de accesos por rol y cumplimiento normativo (privacidad y protección de datos).
- Ciclo de vida del dato (captura, almacenamiento, uso, archivado y eliminación).

**Definiciones necesarias**  
- **Data Owner (Propietario del dato):** Directivo o mando intermedio de negocio con autoridad para definir las reglas de un dominio de datos (p. ej., directora comercial sobre el dominio "Clientes") y aprobar accesos.
- **Data Steward (Administrador funcional del dato):** Persona del área operativa que vela en el día a día por la calidad, actualización y correcta documentación de los datos de su dominio.
- **Data Custodian (Custodio técnico):** Perfil de IT o proveedor tecnológico encargado de la infraestructura, copias de seguridad, seguridad técnica y aplicación de permisos.
- **Single Source of Truth (SSOT):** Principio organizativo según el cual cada entidad o métrica clave tiene un repositorio maestro autorizado al que todos los informes deben referirse.

**Ejemplo práctico realista (pyme en transformación digital)**  
Una distribuidora alimentaria gallega con 120 empleados designa, sin crear ningún departamento nuevo, un Comité de Datos mensual de 45 minutos formado por 4 mandos intermedios (*Data Owners* de Ventas, Compras, Logística y Finanzas) más el responsable de IT (*Custodian*). En tres meses publican en la intranet un Glosario de Negocio con los 25 KPIs corporativos oficiales, nombran a un administrativo referente por área como *Data Steward* (dedicando 2 horas semanales a revisar alertas de duplicados) y definen permisos por rol para evitar que cualquier empleado descargue la base completa de clientes *(nota para el formador: recordar al alumnado la obligación de validar los requisitos legales vigentes de protección de datos —RGPD y LOPDGDD en España— con su asesoría o delegado de protección de datos)*.

**Errores frecuentes**  
- Delegar la gobernanza del dato exclusivamente al departamento de informática (IT gestiona la herramienta, pero negocio debe definir el significado y las reglas).
- Redactar manuales extensos de 80 páginas que nadie lee en lugar de implantar 3 artefactos vivos (glosario de KPIs, matriz de roles y control de accesos).
- Olvidar el final del ciclo de vida del dato (retención indefinida de datos obsoletos o personales sin base legal).

**Preguntas que el alumnado debería poder responder**  
- ¿Por qué el *Data Owner* debe pertenecer al área de negocio y no al departamento de IT?
- ¿Qué tres artefactos mínimos recomendarías implantar en los primeros 90 días de gobernanza en una pyme?
- ¿Cómo ayuda una *Single Source of Truth* a acortar las reuniones de comité de dirección?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** combina diagnóstico vivencial, diseño técnico-funcional de KPIs y resolución de un conflicto realista de gobernanza y calidad del dato.

| Fase | Tiempo | Duración | Qué hace el formador | Qué hace el alumnado |
| --- | --- | --- | --- | --- |
| **1. Apertura y activación** | 00:00 – 00:25 | **25 min** | Conecta con los lienzos del Tema 1, realiza el diagnóstico breve sobre conflictos de cifras y facilita la **Actividad 1 (Autopsia de una métrica vanidosa)**. | Comparte situaciones reales donde dos departamentos presentaron cifras distintas y transforma en parejas una métrica vanidosa en un KPI accionable. |
| **2. Exposición breve / Microlearning I** | 00:25 – 00:55 | **30 min** | Explica los apartados 3.1 y 3.2 (Decisiones *data-informed*, sesgos, diseño de KPIs, *leading vs. lagging* y ficha técnica de KPI). | Toma notas, contrasta ejemplos de métricas con y sin contrapeso y formula dudas aplicadas a sus proyectos. |
| **3. Actividad de aplicación (Diseño de KPIs)** | 00:55 – 01:25 | **30 min** | Dirige la **Actividad 2 (Clínica de KPIs y umbrales)** en grupos, revisando que cada fórmula sea inequívoca y tenga indicador *leading* y contrapeso. | En grupos de 3-4 personas, construye la ficha técnica completa de 3 KPIs (1 *lagging*, 1 *leading*, 1 contrapeso) para un proyecto digital dado. |
| **Pausa** | 01:25 – 01:40 | **15 min** | Descanso operativo. | Descanso y networking. |
| **4. Exposición breve / Microlearning II** | 01:40 – 02:10 | **30 min** | Expone los apartados 3.3 y 3.4 (Las 6 dimensiones de calidad del dato, regla 1-10-100 y gobernanza ligera con roles *Owner/Steward/Custodian*). | Identifica ejemplos de fallos en las 6 dimensiones y analiza cómo repartir roles de gobernanza sin añadir estructura pesada. |
| **5. Análisis de caso práctico** | 02:10 – 03:00 | **50 min** | Presenta el caso **Clínicas Dentales Sonrisa Sur S.L.**, asigna roles directivos dentro de los equipos y supervisa el diagnóstico de calidad y plan de gobierno. | Analiza las discrepancias de datos del caso, diagnostica las 6 dimensiones de calidad, unifica KPIs y diseña una matriz RACI / gobernanza mínima viable. |
| **6. Discusión guiada y puesta en común** | 03:00 – 03:25 | **25 min** | Modera el debate entre equipos sobre cómo resolver las tensiones entre recepción, dirección médica y administración, y consolida los criterios clave. | Expone su propuesta de gobernanza y controles en origen, debatiendo la viabilidad cultural y operativa de cada medida. |
| **7. Actividad de transferencia individual** | 03:25 – 03:45 | **20 min** | Facilita la **Actividad 3 (Ficha de KPI y Mini-Plan de Gobernanza propio)** retomando el proceso elegido en el Tema 1. | Redacta la ficha técnica de 2 KPIs reales de su proyecto/área, define 2 controles de calidad en origen y asigna *Owner/Steward/Custodian*. |
| **8. Síntesis, evaluación y cierre** | 03:45 – 04:00 | **15 min** | Sintetiza los aprendizajes críticos, recoge la evidencia sumativa, realiza la autoevaluación de cierre y enlaza con el Tema 3 (Metodologías ágiles en big data). | Completa el cuestionario de autoevaluación y sube su Ficha de KPI y Gobernanza al campus virtual. |

*Suma total verificada: 25 + 30 + 30 + 15 + 30 + 50 + 25 + 20 + 15 = **240 minutos (4 horas exactas)**.*

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Autopsia de una métrica vanidosa

- **Nombre:** De métrica vanidosa a KPI accionable.
- **Objetivo:** Reconocer en la práctica por qué las cifras agregadas sin contexto no permiten gestionar un proyecto y ejercitar su reformulación orientada a decisión.
- **Instrucciones para el alumnado:**
  1. El formador proyecta 4 afirmaciones habituales en comités de empresa: (a) *"Hemos alcanzado 50.000 seguidores en redes"*, (b) *"La app lleva 12.000 descargas acumuladas"*, (c) *"El equipo ha cerrado 900 tickets de soporte este mes"*, (d) *"Hemos enviado 200 presupuestos"*.
  2. En parejas (8 minutos), elegid dos afirmaciones y responded: ¿por qué pueden ser engañosas? ¿Qué indicador *accionable* las sustituiría y qué decisión permitiría tomar si cae un 15 %?
  3. Puesta en común rápida en plenario (7 minutos).
- **Materiales necesarios:** Diapositiva con las 4 frases y notas adhesivas o chat grupal.
- **Tiempo estimado:** 15 minutos (dentro de la fase de Apertura y activación).
- **Rol del formador:** Provocar el pensamiento crítico preguntando *"¿y qué haces el lunes por la mañana si ese número baja?"* hasta lograr formulaciones realmente accionables.
- **Producto o entregable esperado:** Reformulación consensuada de las 4 métricas vanidosas en KPIs orientados a acción.
- **Criterios de éxito:** Las nuevas métricas incluyen un denominador o ratio claro (tasa, porcentaje, tiempo medio, conversión) y una decisión asociada.

---

### Actividad 2 (Aplicación): Clínica de KPIs y umbrales de proyecto

- **Nombre:** Diseño del cuadro de mando mínimo para un proyecto de digitalización.
- **Objetivo:** Construir un conjunto equilibrado de KPIs con fórmula inequívoca, indicadores *leading/lagging*, contrapeso y umbrales de actuación.
- **Instrucciones para el alumnado:**
  1. En equipos de 3-4 personas, seleccionad uno de estos dos proyectos: **Opción A:** Lanzamiento de un portal de autogestión de pedidos B2B para clientes de una distribuidora; **Opción B:** Implantación de un nuevo sistema de atención posventa omnicanal en un comercio electrónico.
  2. Definid exactamente **3 KPIs** usando la Ficha Técnica de KPI:
     - 1 indicador **rezagado (*lagging*)** vinculado al objetivo final del proyecto.
     - 1 indicador **adelantado (*leading*)** que permita detectar riesgos semanas antes.
     - 1 indicador de **contrapeso** para evitar efectos secundarios perversos (Ley de Goodhart).
  3. Para cada KPI especificad: fórmula matemática exacta, fuente oficial (SSOT), frecuencia de revisión, umbral rojo/amarillo/verde y acción concreta si entra en rojo.
- **Materiales necesarios:** Plantilla de Ficha Técnica de KPI (impresa o en hoja compartida).
- **Tiempo estimado:** 30 minutos (22 min trabajo grupal + 8 min revisión cruzada entre equipos).
- **Rol del formador:** Actuar como "auditor quisquilloso" señalando ambigüedades en las fórmulas (por ejemplo, si el denominador incluye o no pedidos cancelados).
- **Producto o entregable esperado:** Trío de fichas técnicas de KPIs completas y auditadas por otro equipo.
- **Criterios de éxito:** Dos personas distintas aplicando la fórmula sobre los mismos datos obtendrían exactamente el mismo número; existe coherencia causal entre el indicador *leading* y el *lagging*, y el umbral rojo dispara una acción específica y responsable.

---

### Actividad 3 (Transferencia a la realidad laboral): Ficha de KPI y Mini-Plan de Gobernanza propio

- **Nombre:** Gobernanza mínima viable para tu proceso clave.
- **Objetivo:** Aplicar el diseño de KPIs, los controles de calidad del dato y la asignación de roles de gobernanza al proceso real elegido por cada participante (retomando el lienzo del Tema 1 o eligiendo un proyecto actual).
- **Instrucciones para el alumnado:**
  1. De forma individual, selecciona el proceso o proyecto real de tu empresa sobre el que trabajaste en el Tema 1 (u otro prioritario en tu puesto).
  2. Completa la plantilla de transferencia definiendo:
     - **2 KPIs clave** (1 *lagging* y 1 *leading*) con su fórmula exacta y umbral de actuación.
     - **2 problemas reales de calidad del dato** que afectan a esos KPIs (clasificados según las 6 dimensiones) y **2 controles preventivos en origen**.
     - **Mapa de roles de gobernanza** con cargos reales de tu organización: *Data Owner*, *Data Steward*, *Data Custodian* y fuente única de verdad (SSOT).
  3. Sube la ficha al campus virtual al finalizar la sesión.
- **Materiales necesarios:** Plantilla editable o impresa de Mini-Plan de Gobernanza y KPIs.
- **Tiempo estimado:** 20 minutos.
- **Rol del formador:** Asesorar individualmente a emprendedores con equipos pequeños (donde una misma persona puede acumular roles de forma explícita y documentada) y a mandos intermedios que deban negociar con otros departamentos.
- **Producto o entregable esperado:** Documento operativo de 1 página listo para proponer en la empresa del participante.
- **Criterios de éxito:** Fórmulas sin ambigüedad, controles de calidad situados en el origen del dato (no solo limpieza manual posterior) y asignación realista de roles según el tamaño de la empresa.

---

## 6. Caso práctico

### Contexto empresarial
**Clínicas Dentales Sonrisa Sur S.L.** es una red pyme de 9 clínicas odontológicas repartidas entre Sevilla, Málaga y Córdoba, con 85 empleados (odontólogos, higienistas, personal de recepción y equipo central de administración y marketing) y una facturación anual aproximada de 6,8 millones de euros *(caso ficticio con fines docentes)*. Hace 10 meses invirtieron en un nuevo software clínico-ERP en la nube y en un CRM de captación para gestionar citas procedentes de campañas digitales y teléfono.

### Situación o problema
En el comité mensual de dirección se ha desatado una fuerte tensión: cada área llega con un informe diferente y nadie confía en el nuevo cuadro de mando.
- **Marketing** asegura que ha generado 640 nuevos pacientes el último mes y reclama más presupuesto.
- **Dirección de Operaciones** afirma que las clínicas solo han atendido a 410 pacientes nuevos y que la tasa de huecos vacíos en sillón (*no-shows*) ha subido al 22 %.
- **Dirección Médica** denuncia que la rentabilidad por tratamiento de ortodoncia aparece desplomada en el informe financiero, pero sospecha que las prótesis y costes de laboratorio están mal imputados.
- **Administración** se queja de que dedica 3 días completos cada mes a cruzar hojas de Excel exportadas desde las 9 clínicas porque el sistema no cuadra.

### Datos disponibles

**Muestra de incidencias detectadas tras una auditoría rápida de 1 semana:**

| Área / Dato afectado | Evidencia encontrada en la auditoría | Impacto observado |
| --- | --- | --- |
| **Definición de "Paciente nuevo"** | Marketing cuenta cada formulario rellenado en web; Recepción cuenta cada ficha creada; Finanzas solo cuenta pacientes con al menos una factura pagada. | Diferencia del 56 % en el principal KPI comercial. |
| **Registro de pacientes en clínica** | El 19 % de los pacientes aparece duplicado (por ejemplo: "María López" y "M.ª López García", o dado de alta distinto en dos clínicas de la misma ciudad). | Duplicación de recordatorios SMS e historial clínico fragmentado. |
| **Estado de citas (*no-shows*)** | En 4 clínicas, cuando un paciente avisa 1 hora antes para cambiar la cita, recepción borra la cita original en lugar de marcarla como "Cancelada tardía". | El indicador de *no-show* real está infravalorado en unas clínicas y sobrevalorado en otras. |
| **Costes de laboratorio y tratamientos** | El 16 % de las facturas de laboratorio no tiene asignado el código de tratamiento ni el centro de coste obligatorio; se cargan por defecto a "Ortodoncia general". | Distorsión grave del margen por especialidad médica. |
| **Accesos y exportación de datos** | Cualquier recepcionista o comercial puede exportar a Excel el listado completo de pacientes de las 9 clínicas con datos de contacto e historial básico. | Riesgo crítico de fuga de información y posible incumplimiento en protección de datos *(verificar obligaciones legales aplicables bajo RGPD/LOPDGDD y datos de salud)*. |
| **Actualización de informes** | El informe de rentabilidad se consolida manualmente el día 18 del mes siguiente. | Dirección toma decisiones sobre campañas y turnos con casi 7 semanas de retraso. |

### Preguntas de análisis
1. Clasifica cada una de las incidencias detectadas en la tabla según las **6 dimensiones de la calidad del dato** (exactitud, completitud, consistencia, puntualidad, validez y unicidad).
2. ¿Qué fallos de **definición de KPIs** están provocando el conflicto entre Marketing, Operaciones y Finanzas?
3. Propón una redefinición inequívoca (fórmula y fuente oficial) para **3 KPIs corporativos**: *Paciente nuevo activado*, *Tasa de no-show / cancelación tardía* y *Margen neto por especialidad*, añadiendo un indicador *leading* para reducir los huecos en sillón.
4. Diseña un **modelo ligero de gobernanza del dato** para Sonrisa Sur S.L. indicando: quién debe ser *Data Owner*, *Data Steward* y *Data Custodian* para los dominios *Pacientes/Citas* y *Costes/Facturación*, qué controles deben implantarse en origen y qué medida urgente de seguridad/acceso debe ejecutarse esta misma semana.

### Tarea a realizar
En equipos de 4 personas, elaborad un **Plan de Choque de Calidad y Gobernanza a 90 días** para presentar a la gerencia de Clínicas Dentales Sonrisa Sur S.L., estructurado en:
1. Mapa diagnóstico de calidad del dato (asociando cada fallo a su dimensión).
2. Glosario unificado de los 3 KPIs + 1 indicador *leading* con sus umbrales de actuación.
3. Propuesta de controles preventivos en software/procesos (regla 1-10-100).
4. Organigrama ligero de gobernanza (roles asignados a puestos ya existentes, sin nuevas contrataciones) y medidas inmediatas de control de accesos.

### Posibles soluciones o criterios de análisis
Los equipos deberían converger en soluciones que incluyan los siguientes elementos:
- **Diagnóstico de calidad:** Duplicados de pacientes (**Unicidad**); discrepancia entre CRM, recepción y finanzas (**Consistencia**); falta de código de tratamiento/centro de coste en facturas de laboratorio (**Completitud** y **Validez**); imputación errónea por defecto a ortodoncia y borrado de citas (**Exactitud**); informes disponibles el día 18 del mes siguiente (**Puntualidad**).
- **Unificación de KPIs (SSOT):** Separar claramente el embudo en tres definiciones oficiales: *Lead cualificado* (CRM), *Primera visita realizada* (Software clínico) y *Paciente nuevo facturado* (ERP). Impedir el borrado de citas en el software clínico: solo permitir cambio de estado (*Confirmada*, *Reprogramada >24h*, *Cancelada <24h*, *No presentado*). Como indicador *leading* de *no-show*, medir el "% de citas confirmadas vía WhatsApp/SMS 48 horas antes".
- **Controles en origen:** Validación obligatoria por DNI/NIE o teléfono único antes de crear ficha de paciente; campos obligatorios de clínica y especialidad antes de aprobar una factura de laboratorio; automatización semanal del informe de márgenes eliminando los Excel manuales.
- **Gobernanza ligera y privacidad:**
  - Dominio *Pacientes y Agenda*: *Data Owner* = Dirección de Operaciones; *Data Stewards* = coordinadora de recepción en cada clínica (revisión semanal de agenda y duplicados); *Data Custodian* = responsable de IT / proveedor del ERP.
  - Dominio *Facturación y Costes*: *Data Owner* = Dirección Financiera; *Data Steward* = responsable administrativo central.
  - Acción urgente de seguridad: revocar inmediatamente permisos de exportación masiva y restringir el acceso por clínica y rol estrictamente necesario (principio de mínimo privilegio), revisando el cumplimiento legal específico de datos de salud con el delegado de protección de datos o asesoría jurídica.

### Preguntas de reflexión final
- ¿Qué resistencia al cambio cabe esperar por parte de recepción o marketing al imponer definiciones únicas y prohibir el borrado de citas, y cómo la gestionaríais?
- ¿Por qué el problema de Sonrisa Sur S.L. no se resolvería comprando una herramienta de cuadros de mando más cara?
- ¿Cuál de los problemas de este caso reconoces en tu propia empresa o proyecto?

---

## 7. Evaluación

### Evaluación diagnóstica breve (al inicio de la sesión — 5 min)
Tres preguntas rápidas interactivas:
1. En las reuniones de seguimiento de tu empresa, ¿ocurre que dos áreas traigan números distintos para el mismo concepto? *(Nunca / A veces / Casi siempre)*.
2. ¿Cuál de estos es un indicador adelantado (*leading*) para evitar retrasos en un proyecto de software? *(a) Retraso final en días al entregar; (b) % de hitos semanales bloqueados más de 48h; (c) Coste final total del proyecto*.
3. ¿Quién debería ser el responsable máximo (*Data Owner*) de definir qué es un "cliente activo"? *(a) Informática; (b) Dirección Comercial/Negocio; (c) El proveedor del software*.

### Evaluación formativa durante la sesión
- Revisión entre pares de las fichas de KPI en la **Actividad 2** (comprobación de fórmulas ambiguas y ausencia de contrapesos).
- Verificación oral durante el caso práctico de que el alumnado distingue correctamente las 6 dimensiones de calidad del dato y separa roles funcionales (*Owner/Steward*) de técnicos (*Custodian*).

### Evaluación sumativa al final de la sesión
Entrega individual de la **Ficha de KPI y Mini-Plan de Gobernanza propio (Actividad 3)** aplicada a un proyecto o proceso real del alumnado, evaluada según la rúbrica siguiente.

### Rúbrica de evaluación

| Criterio | Insuficiente (1) | En desarrollo (2) | Adecuado (3) | Destacado (4) |
| --- | --- | --- | --- | --- |
| **1. Rigor en el diseño de KPIs** | Propone métricas vanidosas o ambiguas sin fórmula ni vínculo claro con una decisión. | Define métricas relevantes, pero carecen de fórmula inequívoca o no distingue *leading/lagging*. | Formula 1 KPI *lagging* y 1 *leading* precisos, con fórmula verificable, fuente y frecuencia. | Diseña KPIs plenamente accionables con fórmula inequívoca, umbrales de actuación concretos y mecanismo de equilibrio frente a efectos no deseados. |
| **2. Diagnóstico de calidad del dato** | No identifica problemas reales de calidad o los describe de forma superficial sin usar las dimensiones. | Nombra alguna dimensión de calidad pero confunde conceptos (p. ej., exactitud vs. validez). | Diagnostica correctamente 2 fallos reales usando las dimensiones adecuadas y explica su impacto en los KPIs. | Diagnostica con precisión causa raíz e impacto económico/operativo, priorizando los elementos críticos de datos (CDE). |
| **3. Controles preventivos en origen** | Propone solo limpiezas manuales posteriores o no incluye medidas correctivas. | Plantea medidas genéricas ("formar al equipo") sin controles concretos en procesos o sistemas. | Define controles claros en el punto de captura (validaciones, campos obligatorios, reglas de negocio). | Combina controles técnicos en origen, simplificación operativa y seguimiento periódico (regla 1-10-100) con mínimo coste operativo. |
| **4. Modelo ligero de gobernanza** | Delega toda la responsabilidad en IT o diseña una estructura burocrática irreal para una pyme. | Asigna algunos nombres/roles, pero sin diferenciar responsabilidades ni definir fuente oficial (SSOT). | Asigna de forma coherente *Data Owner*, *Data Steward*, *Data Custodian* y SSOT adaptados a su empresa. | Diseña una gobernanza mínima viable ejecutable desde el día 1, integrando control de accesos, glosario compartido y gestión del cambio. |

### Actividad de autoevaluación o reflexión (Checklist personal — 5 min)
El alumnado responde individualmente (Sí / Parcialmente / No) y redacta un compromiso de 2 líneas:
- *¿Tengo claro qué decisión concreta debe activar cada métrica que presento en mis reuniones?*
- *¿Sabría explicar a mi equipo la diferencia entre limpiar datos al final y prevenir errores en origen?*
- *¿Tengo identificado quién debe actuar como Data Owner de los datos críticos de mi área?*
- **Compromiso de aplicación esta semana:** *"En los próximos 7 días voy a eliminar/redefinir el indicador ___ y proponer la regla de calidad ___."*

---

## 8. Materiales y recursos

### Guion de diapositivas (slide por slide)

1. **Slide 1 — Portada:** Título del tema, Bloque 9 (2/5), objetivo de aprendizaje y agenda de 4 horas.
2. **Slide 2 — Puente desde el Tema 1:** De tener arquitectura y fuentes a gobernar los datos para decidir mejor.
3. **Slide 3 — Diagnóstico y activación:** El coste de las "dos versiones de la verdad" + Actividad 1 (Autopsia de métricas vanidosas).
4. **Slide 4 — Decidir con datos sin autoengañarnos:** *Data-driven* vs. *Data-informed*; efecto *HiPPO*, sesgo de confirmación y correlación vs. causalidad.
5. **Slide 5 — Anatomía de un buen KPI:** Diferencia entre métrica, KPI y OKR; métricas vanidosas vs. accionables.
6. **Slide 6 — Conducir mirando adelante, no solo por el retrovisor:** Indicadores *lagging*, *leading* y contrapesos (Ley de Goodhart).
7. **Slide 7 — La Ficha Técnica de KPI:** Los 7 campos obligatorios para eliminar disputas entre departamentos.
8. **Slide 8 — Taller práctico (Actividad 2):** Instrucciones de la Clínica de KPIs y umbrales.
9. **Slide 9 — Por qué mueren los cuadros de mando:** La crisis de confianza y la regla 1-10-100 de la calidad del dato.
10. **Slide 10 — Las 6 dimensiones de la calidad del dato:** Definición visual y ejemplos cotidianos (Exactitud, Completitud, Consistencia, Puntualidad, Validez, Unicidad).
11. **Slide 11 — De limpiar a prevenir:** Controles en origen, elementos críticos de datos (CDE) y simplificación de procesos.
12. **Slide 12 — Gobernanza del dato sin burocracia:** Qué es la gobernanza mínima viable para una pyme y concepto de SSOT.
13. **Slide 13 — Quién hace qué:** Matriz clara de roles (*Data Owner*, *Data Steward*, *Data Custodian* y consumidores).
14. **Slide 14 — Seguridad, accesos y ciclo de vida:** Principio de mínimo privilegio, glosario vivo y atención al cumplimiento normativo.
15. **Slide 15 — Caso práctico:** Contexto, conflicto y tabla de incidencias de **Clínicas Dentales Sonrisa Sur S.L.**
16. **Slide 16 — Claves de resolución del caso:** Criterios de calidad, unificación de KPIs y plan de choque a 90 días.
17. **Slide 17 — Transferencia individual (Actividad 3):** Guía para completar la Ficha de KPI y Mini-Plan de Gobernanza propio.
18. **Slide 18 — Cierre y conexión con el Tema 3:** Ideas clave, autoevaluación y puente hacia *Metodologías ágiles en proyectos de big data*.

### Ficha de trabajo (para el alumnado — Actividad 2: Ficha Técnica de KPI)

| Campo de la ficha | KPI 1 (*Lagging*) | KPI 2 (*Leading*) | KPI 3 (Contrapeso) |
| --- | --- | --- | --- |
| **Nombre oficial del KPI** | | | |
| **Objetivo / Decisión que respalda** | | | |
| **Fórmula matemática exacta** | | | |
| **Fuente única de verdad (SSOT)** | | | |
| **Frecuencia de actualización** | | | |
| **Responsable (*Data Owner*)** | | | |
| **Umbrales (Verde / Amarillo / Rojo)** | | | |
| **Acción obligatoria si entra en Rojo** | | | |

### Plantilla práctica replicable: Mini-Plan de Gobernanza y Calidad para Pymes (Actividad 3)

| Bloque | Elementos a definir | Aplicación a tu proyecto / área |
| --- | --- | --- |
| **1. Dominio y proceso** | Nombre del proceso o proyecto y objetivo de negocio. | |
| **2. KPIs oficiales (2)** | 1 *Lagging* + 1 *Leading* (fórmula + umbral de acción). | |
| **3. Fuente única (SSOT)** | Sistema maestro donde reside el dato oficial. | |
| **4. Riesgos de calidad (2)** | Fallo detectado + dimensión afectada (de las 6). | |
| **5. Controles en origen (2)** | Validación técnica o cambio de procedimiento preventivo. | |
| **6. Roles de gobernanza** | *Data Owner* (negocio), *Data Steward* (operativo), *Data Custodian* (IT). | |
| **7. Acceso y seguridad** | Quién puede leer/editar/exportar y regla de privacidad básica. | |

### Lecturas y recursos recomendados
- **Lectura recomendada 1:** Parmenter, D. *Key Performance Indicators: Developing, Implementing, and Using Winning KPIs* (enfoque práctico para distinguir KPIs reales de métricas operativas).
- **Lectura recomendada 2:** DAMA International. *DAMA-DMBOK* (visión de referencia sobre gobierno y calidad del dato; se recomienda usar resúmenes ejecutivos adaptados a pymes).
- **Lectura recomendada 3:** Ladley, J. *Data Governance: How to Design, Deploy, and Sustain an Effective Data Governance Program* (capítulos sobre roles *Owner/Steward* y gestión del cambio).

### Vídeos, artículos y fuentes adicionales *(Nota obligatoria: validar enlaces, vigencia y disponibilidad antes de utilizarlos en clase)*
- Artículo o guía práctica sobre la Ley de Goodhart y cómo evitar KPIs contraproducentes (p. ej., publicaciones de Harvard Business Review en español — **validar acceso y vigencia antes de compartir**).
- Vídeo explicativo (6-10 min) sobre las 6 dimensiones de la calidad del dato y el rol del *Data Steward* (**validar calidad técnica y subtítulos antes de impartir**).
- Guías de la Agencia Española de Protección de Datos (AEPD) sobre principio de minimización, control de accesos y datos de categoría especial (salud) — **verificar normativa y guías vigentes antes de citarlas en clase**.

### Glosario de términos clave

| Término | Definición operativa |
| --- | --- |
| **CDE (Critical Data Element)** | Campo o dato crítico imprescindible para calcular KPIs estratégicos o cumplir obligaciones legales. |
| **Data Custodian** | Rol técnico (IT/proveedor) responsable de la infraestructura, copias de seguridad y aplicación técnica de permisos. |
| **Data Owner** | Directivo o mando de negocio responsable de las definiciones, reglas y autorización de acceso de un dominio de datos. |
| **Data Steward** | Responsable funcional que supervisa la calidad diaria, documentación y resolución de incidencias de datos en su área. |
| **Efecto HiPPO** | Tendencia a tomar decisiones según la opinión de la persona mejor pagada (*Highest Paid Person's Opinion*) en lugar de la evidencia. |
| **Indicador *Lagging*** | Indicador rezagado que refleja el resultado final ya consolidado de un proceso o proyecto. |
| **Indicador *Leading*** | Indicador adelantado que mide señales tempranas capaces de predecir o influir en el resultado futuro. |
| **KPI** | Indicador Clave de Rendimiento directamente ligado a un objetivo prioritario y a una toma de decisiones concreta. |
| **Ley de Goodhart** | Principio según el cual cuando una métrica se convierte en un objetivo rígido incentivado sin contrapesos, deja de ser una buena medida. |
| **Métrica vanidosa** | Dato llamativo o creciente en apariencia que no orienta acciones ni refleja salud real del negocio. |
| **SSOT (Single Source of Truth)** | Fuente única de verdad consensuada por la organización como referencia oficial para una entidad o indicador. |

---

## 9. Adaptaciones para modalidad híbrida

### Sesión presencial
- **Actividad 2 (Clínica de KPIs):** Realizar una dinámica de "auditoría cruzada": cada equipo deja su hoja de KPIs sobre la mesa y rota hacia la mesa vecina con un rotulador rojo durante 5 minutos para detectar ambigüedades en las fórmulas o posibles trampas (Ley de Goodhart).
- **Caso práctico:** Asignar físicamente tarjetas de rol a los 4 miembros de cada equipo (*Marketing*, *Operaciones*, *Dirección Médica* y *Administración/Finanzas*) para simular durante 10 minutos el comité conflictivo antes de construir el plan de choque consensuado.
- **Pizarra:** Mantener visible en una esquina del aula la lista de las 6 dimensiones de calidad del dato durante todo el bloque práctico.

### Sesión online síncrona
- **Activación:** Usar votación interactiva y chat estructurado para la Actividad 1 (cada pareja escribe su KPI reformulado en un documento colaborativo común de Google Docs o Miro, lo que agiliza la comparación en directo).
- **Salas reducidas (*breakout rooms*):** Configurar una hoja de cálculo compartida con una pestaña por equipo para la Actividad 2 y el Caso Práctico; esto permite al formador supervisar en tiempo real el avance de todos los grupos sin interrumpir constantemente las salas.
- **Debate guiado:** Usar encuestas rápidas de 30 segundos en Zoom/Teams para someter a votación decisiones polémicas del caso (por ejemplo: *"¿Debería Marketing perder el control sobre la definición de paciente nuevo?"*) y disparar el debate verbal.

### Sesión asíncrona (trabajo previo y posterior en campus virtual)
- **Trabajo previo (15-20 min):** Lectura breve de 1 página con un ejemplo de ficha de KPI y solicitud al alumnado de traer a clase 2 indicadores que utilicen habitualmente en su trabajo actual.
- **Versión 100 % asíncrona / recuperación:** Dos vídeos microlearning (15-20 min cada uno), cuestionario interactivo de clasificación de las 6 dimensiones de calidad del dato con retroalimentación automática y foro estructurado sobre el caso *Clínicas Dentales Sonrisa Sur S.L.* (cada participante propone su matriz de roles y comenta la propuesta de un compañero señalando un riesgo no contemplado).
- **Seguimiento:** Entrega de la Actividad 3 en el campus virtual en 72 horas y publicación por parte del formador de un vídeo-resumen de 5 minutos con los 3 aciertos y 3 errores más frecuentes observados en los mini-planes de gobernanza del grupo.

---

## 10. Conexión con el programa

- **Qué conocimientos previos refuerza:** Consolida la comprensión de fuentes, veracidad y arquitectura básica del Tema 1, así como las bases de dirección de proyectos, estrategia y gestión por objetivos abordadas en bloques previos del programa.
- **Qué competencias desarrolla:** Diseño de cuadros de mando accionables, pensamiento crítico frente a sesgos y métricas engañosas, diagnóstico estructurado de calidad del dato y liderazgo transversal para implantar gobernanza ligera.
- **Conexión con el tema anterior (Bloque 9, Tema 1 — Introducción al big data):** En el Tema 1 el alumnado identificó qué datos tenía y diseñó una arquitectura mínima viable; en este Tema 2 dota de sentido de negocio y disciplina a esa arquitectura definiendo exactamente qué medir (KPIs), cómo asegurar la fiabilidad del dato (calidad) y quién responde de él (gobernanza).
- **Conexión con el tema posterior (Bloque 9, Tema 3 — Metodologías ágiles en proyectos de big data):** Una vez claros los KPIs objetivo y las reglas de gobierno, el Tema 3 mostrará cómo ejecutar proyectos analíticos y de datos sin caer en desarrollos interminables en cascada, aplicando iteraciones cortas, MVPs analíticos y validación continua.
- **Evidencia de aprendizaje que dejará el alumnado:** La **Ficha de KPI y Mini-Plan de Gobernanza propio** (aplicada sobre el mismo proceso real iniciado en el Tema 1), que servirá de base para estructurar su backlog y MVP analítico en el Tema 3.

---

## Siguientes pasos para el formador

1. **Enlace con entregables previos:** Revisar los lienzos del Tema 1 entregados por el alumnado para recordarles que en la Actividad 3 construirán los KPIs y la gobernanza sobre ese mismo caso real.
2. **Preparación de plantillas:** Verificar que la Ficha Técnica de KPI y el Mini-Plan de Gobernanza estén disponibles tanto en formato editable (Docs/Sheets/Notion) como imprimible según la modalidad de la sesión.
3. **Actualización legal y de fuentes:** Comprobar la vigencia de las guías de la AEPD sobre control de accesos y datos de salud antes de abordar el caso de *Clínicas Dentales Sonrisa Sur S.L.*
4. **Dinamización del caso práctico:** Tener preparadas 2 preguntas de presión directiva para la fase de debate (*"¿Y si los recepcionistas tardan 2 minutos más por paciente y se forma cola?"*) para que el alumnado equilibre rigor de gobernanza con agilidad operativa.
5. **Puente hacia el Tema 3:** Al cerrar, pedir al alumnado que piense cuánto tiempo suele tardar un proyecto de datos o informes en su empresa desde que se solicita hasta que se usa, como detonante de apertura para las metodologías ágiles en big data.
