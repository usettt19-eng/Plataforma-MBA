# Tema 4. Planificación, análisis y respuesta a riesgos

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Tema 4. Planificación, análisis y respuesta a riesgos |
| **Bloque y posición dentro del programa** | Bloque 7: Planificación de cronograma, finanzas, personas y riesgos · Tema 4 de 4 (Tema 19 de 27 del programa) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Project Managers, mandos intermedios, consultores, ingenieros y aspirantes a la certificación PMP® |
| **Nivel de dificultad** | Intermedio / Avanzado |
| **Prerrequisitos** | Haber completado el Bloque 6 (alcance y supuestos) y los Temas 1, 2 y 3 del Bloque 7 (cronograma, presupuesto/reservas de contingencia, interesados y recursos) |
| **Resultado general de aprendizaje** | Diseñar e implementar un sistema integral de gestión de riesgos del proyecto que abarque la planificación (RBS y umbrales), identificación estructurada (causa-evento-efecto), análisis cualitativo y cuantitativo (PxI, EMV, árboles de decisión, sensibilidad y Monte Carlo conceptual) y planificación de respuestas frente a amenazas, oportunidades, riesgos secundarios y residuales |

---

## 2. Objetivos de aprendizaje

Al finalizar este tema, el alumnado será capaz de:

1. **Diseñar** la arquitectura de gobierno del riesgo en un Plan de Gestión de Riesgos definiendo la Estructura de Desglose de Riesgos (RBS), las escalas de probabilidad e impacto y los límites de apetito, tolerancia y umbral de riesgo. *(Nivel de Bloom: Crear)*
2. **Formular** enunciados precisos de riesgos individuales aplicando el metalenguaje *causa → evento → efecto* y diferenciando claramente riesgos futuros de problemas actuales (*issues*). *(Nivel de Bloom: Aplicar)*
3. **Priorizar** riesgos mediante análisis cualitativo (matriz Probabilidad × Impacto y parámetros como urgencia y proximidad) y **calcular** exposiciones financieras mediante análisis cuantitativo (Valor Monetario Esperado — EMV y árboles de decisión). *(Nivel de Bloom: Analizar)*
4. **Interpretar** conceptualmente resultados de análisis de sensibilidad (diagrama de tornado) y simulación de Monte Carlo (curvas de probabilidad acumulada) para respaldar decisiones ejecutivas bajo incertidumbre. *(Nivel de Bloom: Evaluar)*
5. **Seleccionar** y **justificar** estrategias óptimas de respuesta a amenazas (*escalar, evitar, transferir, mitigar, aceptar*) y oportunidades (*escalar, explotar, compartir, mejorar, aceptar*), anticipando riesgos secundarios, riesgos residuales y planes de reserva. *(Nivel de Bloom: Evaluar)*

---

## 3. Contenidos esenciales

### 3.1 Planificación de la gestión de riesgos: RBS, apetito y umbrales

#### Explicación breve y clara
Un **riesgo** es un evento o condición incierta que, si se produce, tiene un efecto negativo (**amenaza**) o positivo (**oportunidad**) en uno o más objetivos del proyecto (alcance, cronograma, coste, calidad o entrega de valor). Gestionar riesgos no significa intentar eliminar toda incertidumbre —lo cual es imposible—, sino **decidir de antemano cuánta incertidumbre está dispuesta a asumir la organización** y cómo la identificará, medirá y responderá a ella. Todo ello se formaliza en el **Plan de Gestión de los Riesgos**, el documento maestro que evita improvisar cuando surge una crisis.

#### Conceptos clave
- **Riesgo individual vs. Riesgo general del proyecto (*Overall Project Risk*)**: el riesgo individual afecta a una actividad o entregable concreto; el riesgo general representa el efecto combinado de toda la incertidumbre (incluida la variabilidad y ambigüedad del entorno) sobre el proyecto en su conjunto.
- **Plan de Gestión de los Riesgos**: define metodología, roles, presupuesto, calendario de revisiones, categorías de riesgo (**RBS**), definiciones de probabilidad e impacto, matriz PxI y umbrales de escalado.
- **RBS (*Risk Breakdown Structure*)**: clasificación jerárquica de las fuentes de riesgo (habitualmente: *Técnico*, *Externo*, *Organizacional* y *Dirección de Proyectos*). *(Recordatorio: no confundir con la Resource Breakdown Structure del Tema 3).*
- **Apetito, tolerancia y umbral de riesgo**: los tres niveles que regulan el comportamiento de la organización ante la incertidumbre.

#### Definiciones necesarias
- **Apetito de riesgo (*Risk Appetite*)**: grado general de incertidumbre que una organización o persona está dispuesta a aceptar a cambio de una recompensa esperada (p. ej., "la dirección acepta cierto riesgo tecnológico para llegar primera al mercado, pero tiene apetito cero ante incumplimientos legales").
- **Tolerancia al riesgo (*Risk Tolerance*)**: margen o rango de variación aceptable alrededor de un objetivo del proyecto (p. ej., desviación de presupuesto de hasta ±8 %).
- **Umbral de riesgo (*Risk Threshold*)**: nivel específico y cuantificable de exposición a partir del cual el riesgo resulta inaceptable y dispara una acción obligatoria o un escalado (p. ej., cualquier riesgo con impacto superior a 25.000 € o retraso >10 días requiere respuesta activa y aprobación del patrocinador).

#### Ejemplo práctico realista
Una pyme fintech en Madrid que lanza una pasarela de pagos B2B fija en su Plan de Gestión de Riesgos una **RBS de 4 ramas** (Técnico/Ciberseguridad, Regulatorio/Externo, Organizacional/Talento, Gestión/Proveedores). Define un **apetito de riesgo moderado** en experiencia de usuario, pero un **umbral estricto de tolerancia cero** en vulnerabilidades de datos bancarios: cualquier amenaza con puntuación $P \times I \ge 0,18$ o cualquier fallo de cumplimiento normativo exige escalado inmediato al Comité de Riesgos en menos de 24 horas.

#### Errores frecuentes
- Considerar el riesgo únicamente como algo negativo (olvidando identificar y gestionar **oportunidades** que pueden ahorrar dinero, acortar plazos o aumentar el valor del proyecto).
- No definir escalas objetivas de probabilidad e impacto (decir "impacto alto" sin especificar si "alto" significa >15.000 € o >150.000 € genera discusiones estériles).
- Confundir el Plan de Gestión de Riesgos (el "cómo" se gestionarán los riesgos) con el Registro de Riesgos (el "qué", es decir, el listado concreto de riesgos identificados).

#### Preguntas que el alumnado debería poder responder
1. ¿Qué diferencia práctica existe entre apetito de riesgo y umbral de riesgo al tomar una decisión en el proyecto?
2. ¿Cómo ayuda una RBS (*Risk Breakdown Structure*) a detectar puntos ciegos durante las sesiones de identificación de riesgos?
3. ¿Por qué un proyecto con riesgos individuales moderados puede tener un riesgo general del proyecto elevado?

---

### 3.2 Identificación de riesgos y estructuración del Registro de Riesgos

#### Explicación breve y clara
La identificación de riesgos es un **proceso iterativo y participativo** en el que intervienen el equipo, los interesados clave, expertos técnicos e incluso clientes y proveedores, y que continúa durante todo el ciclo de vida del proyecto. Su mayor trampa profesional es redactar riesgos vagos ("riesgo de retraso" o "riesgo de proveedor") o mezclarlos con problemas que ya han ocurrido. Para que un riesgo sea gestionable debe formularse con precisión causal (**Causa → Evento → Efecto**) y documentarse en el **Registro de Riesgos**, asignando un propietario claro desde el primer momento.

#### Conceptos clave
- **Técnicas de identificación**: tormenta de ideas (*brainstorming*), listas de verificación basadas en lecciones aprendidas, listas rápidas (*prompt lists* como **PESTLE** —Político, Económico, Social, Tecnológico, Legal, Ambiental— o **TECOP**), entrevistas a expertos, análisis de causa raíz, análisis de supuestos y restricciones, y análisis DAFO/SWOT.
- **Metalenguaje de riesgos (Causa → Evento → Efecto)**: estructura estandarizada que separa el hecho actual (causa), la incertidumbre futura (evento) y la consecuencia sobre los objetivos (efecto).
- **Riesgo vs. Problema (*Issue*)**: un riesgo tiene probabilidad $< 100\,\%$ (todavía no ha ocurrido); un problema ya se ha materializado ($P = 100\,\%$) y pasa al **Registro de Incidentes/Problemas (*Issue Log*)**.
- **Registro de Riesgos (*Risk Register*)**: repositorio vivo que reúne todos los riesgos individuales identificados, su categoría RBS, propietario (*Risk Owner*), disparadores (*triggers*), evaluación y respuestas.
- **Informe de Riesgos (*Risk Report*)**: visión agregada dirigida a dirección sobre las fuentes de riesgo general del proyecto y la exposición acumulada.

#### Definiciones necesarias
- **Plantilla de redacción Causa → Evento → Efecto**:
  > *"Debido a **[CAUSA actual o supuesto]**, existe la posibilidad de que **[EVENTO incierto]**, lo que provocaría **[EFECTO medible en alcance/plazo/coste/calidad]**."*
- **Propietario del riesgo (*Risk Owner*)**: persona designada (no un departamento genérico) responsable de monitorear el disparador y ejecutar o supervisar el plan de respuesta si el riesgo se activa.
- **Disparador (*Risk Trigger*)**: señal temprana o síntoma observable que indica que un riesgo está a punto de materializarse o ya se ha producido (p. ej., "el proveedor incumple dos entregas parciales seguidas").

#### Ejemplo práctico realista
En una pyme industrial de Navarra que migra su ERP:
- *Redacción deficiente*: "Riesgo de datos malos".
- *Redacción profesional (Causa → Evento → Efecto)*: "**Debido a** que el ERP antiguo contiene registros duplicados de clientes sin depurar desde 2018 (causa), **podría ocurrir** que falle la importación automática de facturas en la migración (evento), **lo que provocaría** un retraso de 6 días laborables y un coste adicional de 9.500 € en corrección manual (efecto)."
- *Propietario*: Responsable de Sistemas. *Disparador*: tasa de error superior al 3 % en el simulacro de migración de la semana 4.

#### Errores frecuentes
- Registrar **problemas que ya están ocurriendo** ("el programador renunció ayer") en el Registro de Riesgos en lugar del Registro de Problemas (*Issue Log*).
- Dejar al Director del Proyecto como único propietario de todos los riesgos (o asignar "Equipo IT" en lugar de una persona con nombre y apellidos).
- Identificar riesgos solo una vez en la semana 1 y guardar el Excel en una carpeta hasta el cierre del proyecto.

#### Preguntas que el alumnado debería poder responder
1. ¿Cómo transformarías el enunciado vago *"riesgo de ciberseguridad"* en un riesgo bien formulado con estructura Causa → Evento → Efecto?
2. ¿Cuál es la diferencia operativa entre un *Risk Trigger* (disparador) y el evento de riesgo en sí?
3. Si un riesgo del registro se materializa hoy, ¿qué dos documentos del proyecto deben actualizarse de inmediato?

---

### 3.3 Análisis cualitativo y cuantitativo de riesgos

#### Explicación breve y clara
Ningún equipo tiene tiempo ni presupuesto para diseñar respuestas complejas a 80 riesgos a la vez. Por eso el análisis se realiza en dos niveles complementarios: primero, el **análisis cualitativo** (obligatorio en todo proyecto) evalúa subjetivamente probabilidad, impacto y urgencia para separar los riesgos críticos de los menores (que pasan a una **lista de observación o *Watchlist***). Segundo, para los riesgos priorizados en proyectos de complejidad media/alta, el **análisis cuantitativo** traduce la incertidumbre a números y euros mediante **Valor Monetario Esperado (EMV)**, **árboles de decisión**, **análisis de sensibilidad (tornado)** y **simulación de Monte Carlo**, aportando base matemática a la **reserva de contingencia** (Tema 2).

#### Conceptos clave
- **Análisis cualitativo**: rápido y económico; utiliza la **Matriz de Probabilidad e Impacto ($P \times I$)**, evaluación de la calidad de los datos de riesgo y **otros parámetros de priorización** (urgencia, proximidad, latencia/inactividad, manejabilidad, controlabilidad, detectabilidad, conectividad e impacto estratégico).
- **Lista de observación (*Watchlist*)**: apartado del Registro de Riesgos para riesgos de baja prioridad que se revisan periódicamente sin invertir en planes complejos de respuesta.
- **Análisis cuantitativo**:
  - **EMV (*Expected Monetary Value*)**: valor esperado ponderado por probabilidad.
  - **Árboles de decisión**: comparan alternativas mutuamente excluyentes descontando costes de inversión y ponderando escenarios inciertos.
  - **Análisis de sensibilidad (Diagrama de Tornado)**: muestra gráficamente (barras horizontales ordenadas de mayor a menor amplitud) qué riesgos individuales generan mayor impacto potencial sobre el objetivo del proyecto.
  - **Simulación de Monte Carlo (enfoque conceptual)**: ejecuta miles de iteraciones aleatorias a partir de distribuciones (p. ej., PERT/triangular) para generar una curva de probabilidad acumulada (p. ej., "tenemos un 80 % de probabilidad —P80— de completar el proyecto por debajo de 265.000 € y 19 semanas").

#### Definiciones necesarias
- **Valor Monetario Esperado (EMV)**:
  $$EMV = \text{Probabilidad} \times \text{Impacto monetario}$$
  *(El impacto monetario se expresa con signo **negativo** para amenazas y **positivo** para oportunidades; la suma de las probabilidades de todas las ramas de un mismo nodo de azar en un árbol de decisión siempre debe ser exactamente **1,00 o 100 %**).*
- **Urgencia y Proximidad**:
  - *Urgencia*: rapidez con la que debe implementarse una respuesta para que sea eficaz.
  - *Proximidad*: periodo de tiempo antes de que el riesgo pueda afectar a los objetivos del proyecto.
- **Diagrama de burbujas**: gráfico tridimensional útil en análisis cualitativo para visualizar simultáneamente tres parámetros (p. ej., detectabilidad en eje X, proximidad en eje Y e impacto en tamaño de la burbuja).

#### Ejemplo práctico realista
Una empresa de desarrollo web en Valencia evalúa si comprar una licencia comercial de motor de búsqueda (coste 15.000 €, probabilidad del 10 % de requerir un ajuste de 10.000 €) o desarrollarlo internamente (coste 8.000 €, probabilidad del 50 % de sufrir un fallo de rendimiento con retrabajo de 24.000 €):
- *EMV coste Licencia comercial*: $15.000 + (0,10 \times 10.000) = \mathbf{16.000\text{ €}}$.
- *EMV coste Desarrollo interno*: $8.000 + (0,50 \times 24.000) = \mathbf{20.000\text{ €}}$.
Aunque la licencia cuesta 7.000 € más de entrada, su **coste esperado es 4.000 € menor** (16.000 € vs. 20.000 €) y evita el riesgo extremo de 32.000 €.

#### Errores frecuentes
- Aplicar análisis cuantitativo exhaustivo a todos los riesgos en lugar de filtrar primero mediante el análisis cualitativo.
- Creer que un riesgo con puntuación $P \times I$ moderada puede esperar siempre: si su **urgencia o proximidad** es inmediata (ocurre la semana que viene), requiere acción prioritaria antes que un riesgo alto que podría ocurrir dentro de 9 meses.
- Olvidar restar o sumar la inversión inicial al comparar ramas en un árbol de decisión, o usar probabilidades que no suman 100 %.
- Pensar que una simulación de Monte Carlo "predice la fecha exacta" en lugar de ofrecer **probabilidades acumuladas** (P50, P80, P90) para fijar reservas con criterio de confianza.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué dos riesgos con la misma puntuación $P \times I$ pueden recibir prioridades distintas al incorporar la urgencia y la proximidad?
2. ¿Para qué sirve un diagrama de tornado frente a una simulación de Monte Carlo?
3. Si una oportunidad tiene una probabilidad del 40 % de generar 30.000 € de ahorro y requiere una inversión segura de 5.000 € para activarla, ¿cuál es su EMV neto? *(Respuesta: $(0,40 \times 30.000) - 5.000 = +7.000\text{ €}$).*

---

### 3.4 Planificación de respuestas a amenazas y oportunidades, riesgos secundarios y residuales

#### Explicación breve y clara
Identificar y medir riesgos no protege el proyecto si no se diseñan y asignan **respuestas proporcionales a su impacto, coste-efectivas y acordadas con sus propietarios**. El estándar PMI organiza las respuestas en **5 estrategias para amenazas** y **5 estrategias para oportunidades**. Sin embargo, responder a un riesgo rara vez lo borra sin dejar huella: casi siempre permanece un **riesgo residual** y, en ocasiones, la propia respuesta crea un **riesgo secundario** que también debe evaluarse y registrarse. En entornos ágiles e híbridos, además, el riesgo se gestiona de forma nativa mediante un ***Risk-Adjusted Backlog*** (priorizando las historias más inciertas en los primeros sprints para "fallar rápido y barato").

#### Conceptos clave
- **Cinco estrategias para Amenazas**:
  1. **Escalar (*Escalate*)**: la amenaza excede el alcance del proyecto o la autoridad del PM (se transfiere formalmente al patrocinador o nivel de programa/portafolio; el PM deja de monitorearla activamente).
  2. **Evitar (*Avoid*)**: eliminar la amenaza cambiando el plan (quitar la causa, cambiar tecnología, extender plazo o excluir un componente conflictivo; busca probabilidad o impacto = 0).
  3. **Transferir (*Transfer*)**: trasladar el impacto financiero y la responsabilidad de gestión a un tercero (seguros, garantías, fianzas, contratos de precio fijo — *Fixed Price*). Suele implicar el pago de una prima; **el riesgo no desaparece, cambia de dueño**.
  4. **Mitigar (*Mitigate*)**: actuar proactivamente para **reducir la probabilidad de ocurrencia y/o el impacto** por debajo del umbral aceptable (prototipos, pruebas anticipadas, formación, proveedores redundantes).
  5. **Aceptar (*Accept*)**: reconocer la amenaza sin cambiar el plan del proyecto. Puede ser **aceptación activa** (establecer reserva de contingencia y plan de contingencia/reserva) o **aceptación pasiva** (no hacer nada proactivo, documentar en *watchlist* y actuar solo si ocurre).
- **Cinco estrategias para Oportunidades**:
  1. **Escalar (*Escalate*)**: fuera del alcance/autoridad del PM.
  2. **Explotar (*Exploit*)**: eliminar la incertidumbre asegurando que la oportunidad ocurra (llevar la probabilidad hacia el 100 %, p. ej., asignando los mejores recursos o tecnología de vanguardia).
  3. **Compartir (*Share*)**: asociarse con un tercero mejor capacitado para capturar la oportunidad (*joint venture*, consorcio, acuerdos de reparto de beneficios/riesgos).
  4. **Mejorar (*Enhance*)**: actuar para **aumentar la probabilidad y/o el impacto positivo** de la oportunidad (p. ej., añadir recursos para terminar antes y cobrar un bono).
  5. **Aceptar (*Accept*)**: aprovechar la oportunidad si llega a ocurrir sin invertir recursos proactivos.

#### Definiciones necesarias
- **Riesgo residual (*Residual Risk*)**: riesgo que **permanece después** de haber implementado la respuesta planificada (p. ej., tras contratar un segundo enlace de fibra —mitigación—, sigue existiendo un 2 % de probabilidad de corte eléctrico general).
- **Riesgo secundario (*Secondary Risk*)**: **nuevo riesgo creado directamente** por la implementación de una respuesta a otro riesgo (p. ej., transferir el desarrollo a un proveedor de precio fijo evita el sobrecoste interno, pero crea el riesgo secundario de menor calidad o pérdida de conocimiento interno).
- **Plan de contingencia vs. Plan de reserva (*Fallback Plan*) vs. Solución alternativa (*Workaround*)**:
  - *Plan de contingencia*: respuesta planificada que solo se ejecuta si ocurre un disparador específico (aceptación activa).
  - *Plan de reserva (Fallback Plan)*: plan B preparado por si la respuesta principal falla o no resulta suficientemente eficaz.
  - *Solución alternativa (Workaround)*: respuesta **NO planificada** que se improvisa en ejecución ante un riesgo no identificado previamente o aceptado de forma pasiva.
- ***Risk-Adjusted Backlog* y *Risk Burndown Chart***: prácticas ágiles/híbridas que priorizan elementos del backlog por su combinación de **valor de negocio + reducción de riesgo** y grafican la disminución de la exposición total al riesgo sprint a sprint.

#### Ejemplo práctico realista
Una pyme logística en Tarragona afronta la amenaza de que la caída de su servidor local paralice los envíos durante la campaña de Navidad:
- Aplica **Mitigación** contratando replicación automática en la nube (reduce la probabilidad de parada del 35 % al 5 % y el impacto de 40.000 € a 4.000 €).
- **Riesgo residual**: ese 5 % restante (corte simultáneo de conectividad local) se gestiona con **aceptación activa** mediante un **plan de contingencia** (módems 5G de respaldo y 4.000 € de reserva).
- **Riesgo secundario**: la replicación continua en la nube introduce un nuevo riesgo de sobrecoste variable por tráfico de datos o configuración incorrecta de permisos; se añade al Registro de Riesgos con una alerta de consumo y auditoría de accesos.

#### Errores frecuentes
- Confundir **evitar** (eliminar completamente la causa o la exposición) con **mitigar** (reducir probabilidad o impacto).
- Creer que **transferir** mediante un seguro o contrato de precio fijo elimina el riesgo del proyecto (el riesgo de retraso o fallo reputacional ante el cliente final sigue afectando a la empresa; solo se traslada el impacto económico/contractual).
- Confundir una **solución alternativa (*workaround*)** (no planificada) con un **plan de contingencia** (planificado de antemano).
- Olvidar evaluar el **riesgo secundario** antes de aprobar una estrategia de respuesta.

#### Preguntas que el alumnado debería poder responder
1. ¿Cuál es la pareja simétrica en oportunidades de *Evitar*, *Transferir* y *Mitigar* en amenazas? *(Respuesta: Explotar, Compartir y Mejorar).*
2. Si contratas un seguro contra daños climáticos en una obra exterior, ¿qué estrategia de respuesta estás aplicando y qué riesgo residual o secundario podría quedar?
3. ¿Cómo combina un equipo híbrido o Scrum la gestión de riesgos con la priorización del *Product Backlog*?

---

## 4. Metodología didáctica

La sesión tiene una duración total de **4 horas (240 minutos)** en formato online interactivo (adaptable a presencial o asíncrono según la sección 9).

| Fase | Duración | Actividad principal | Qué hace el formador | Qué hace el alumnado |
|---|---:|---|---|---|
| **1. Apertura y activación** | 25 min | Diagnóstico exprés + Actividad 1: *"¿Riesgo, problema o oportunidad? Redacción Causa→Evento→Efecto"* | Lanza 5 frases reales del día a día empresarial para clasificar, desmonta el sesgo de ver solo amenazas y enlaza con las reservas de contingencia del Tema 2. | Clasifica los 5 enunciados (riesgo amenaza, riesgo oportunidad o problema actual) y reescribe 2 enunciados vagos en formato Causa→Evento→Efecto. |
| **2. Exposición breve / Microlearning (Bloque A)** | 35 min | Plan de Gestión de Riesgos (RBS, apetito/tolerancia/umbral), Registro de Riesgos, Análisis Cualitativo (PxI, urgencia, *watchlist*) y Cuantitativo (EMV, árboles, tornado, Monte Carlo) | Explica con diagramas visuales la RBS, la matriz PxI, un ejemplo guiado de árbol de decisión y cómo leer un diagrama de tornado y una curva P80 de Monte Carlo. | Toma notas en su ficha, comprueba en calculadora un cálculo rápido de EMV y formula dudas sobre sensibilidad y Monte Carlo. |
| **3. Actividad guiada (Aplicación)** | 35 min | Actividad 2: *Clasificador de las 10 estrategias de respuesta + detección de riesgos secundarios y residuales* | Organiza salas de 3-4 personas con 8 mini-escenarios empresariales reales para emparejar estrategia exacta (5 amenazas / 5 oportunidades) y detectar 1 riesgo secundario por caso. | Clasifica los 8 escenarios en la matriz de respuestas, diferencia *evitar vs. mitigar* y *contingencia vs. workaround*, y propone riesgos secundarios/residuales. |
| **4. Exposición breve / Microlearning (Bloque B)** | 25 min | Estrategias de respuesta en profundidad, planes de contingencia/*fallback*/*workaround* y gestión de riesgos en entornos ágiles/híbridos (*Risk-Adjusted Backlog*) | Refuerza los matices más preguntados en el examen PMP (transferir vs. compartir, aceptar activa vs. pasiva, escalar) y muestra cómo evoluciona un *Risk Burndown Chart*. | Resuelve en vivo 3 preguntas rápidas de diferenciación (aceptación activa vs. pasiva, riesgo secundario vs. residual, *fallback* vs. *workaround*). |
| **5. Análisis de caso práctico** | 50 min | Resolución en equipo del caso **SolarGrid Andalucía S.L.** (EMV para reserva de contingencia + Árbol de decisión IoT + respuestas, riesgo secundario y residual) | Presenta el caso, acompaña a las salas y verifica que calculen exactamente -39.000 € (amenazas) / -25.000 € (neto) y comparen bien 121.000 € vs. 114.500 € en el árbol de decisión. | Calcula los 5 EMV, resuelve el árbol de decisión de las 2 arquitecturas IoT, diseña respuestas para R-01 a R-05 e identifica riesgos secundarios y residuales. |
| **6. Discusión guiada y transferencia** | 45 min | Puesta en común del caso + Actividad 3: *Mini-Registro de Riesgos cuantificado (Top 4 amenazas + 1 oportunidad) de tu proyecto real* | Modera la defensa de 2 equipos, contrasta el criterio prudente de no restar oportunidades inciertas de la reserva de contingencia y asesora la transferencia laboral. | Defiende su elección de arquitectura SaaS (Opción B), debate el riesgo secundario de *vendor lock-in* y crea su propio mini-Registro de Riesgos aplicable mañana. |
| **7. Síntesis y cierre** | 25 min | Mini-test sumativo tipo PMP (5 preguntas), cierre integrador del Bloque 7 y autoevaluación | Aplica el mini-test cronometrado, recapitula el engranaje completo del Bloque 7 (Cronograma + Finanzas + Personas + Riesgos) y abre paso al Bloque 8 (Ejecución). | Completa el test individual, realiza su autoevaluación de bloque y define una rutina semanal de revisión de riesgos para su equipo. |
| **TOTAL** | **240 min** | **Secuencia completa (4 horas)** | | |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Detector de problemas vs. riesgos y cirugía de enunciados
- **Nombre**: *Limpia tu Registro de Riesgos en 15 minutos*
- **Objetivo**: Distinguir con exactitud entre riesgos (amenazas y oportunidades) y problemas actuales (*issues*), y redactar riesgos accionables con estructura Causa → Evento → Efecto.
- **Instrucciones para el alumnado**:
  1. Individualmente (5 min), clasifica estos 5 registros tomados de proyectos reales como **Amenaza**, **Oportunidad** o **Problema (*Issue*)**:
     - (1) *"El servidor de correo se cayó esta mañana y bloquea los envíos a clientes."*
     - (2) *"Si cerramos la fase 1 dos semanas antes, podríamos presentar la demo en la feria sectorial y captar nuevos clientes."*
     - (3) *"El proveedor de microchips podría retrasar la entrega 3 semanas por congestión portuaria."*
     - (4) *"Falta claridad en el alcance."* *(demasiado vago — detectar también por qué falla)*
     - (5) *"El cliente ha rechazado la factura del hito 2 por un error en el NIF."*
  2. Reescribe en el chat el registro (4) (*"Falta claridad en el alcance"*) usando la estructura **Debido a [causa], podría ocurrir [evento], lo que provocaría [efecto medible]** para un proyecto de tu sector (5 min).
  3. Revisión en plenario de 3 ejemplos (5 min).
- **Materiales necesarios**: Encuesta interactiva / chat de la plataforma.
- **Tiempo estimado**: 15 minutos (integrados en la Fase 1).
- **Rol del formador**: Editor crítico; verifica que el alumnado no mezcle problemas pasados en el Registro de Riesgos y que el efecto incluya una magnitud observable.
- **Producto o entregable esperado**: Clasificación correcta (1=Problema, 2=Oportunidad, 3=Amenaza, 4=Amenaza mal redactada/vaga, 5=Problema) y un enunciado profesional Causa→Evento→Efecto.
- **Criterios de éxito**: 5/5 clasificaciones correctas y redacción que diferencie claramente causa actual, evento incierto y efecto cuantificado.

### Actividad 2 (Aplicación): Gimnasio de las 10 estrategias de respuesta y efectos colaterales
- **Nombre**: *Elige la respuesta exacta y anticipa el efecto rebote*
- **Objetivo**: Emparejar con precisión las 5 estrategias de amenazas y 5 estrategias de oportunidades ante escenarios reales, diferenciando riesgos secundarios y residuales.
- **Instrucciones para el alumnado**:
  1. En grupos de 3-4 personas en salas, analizad los **8 escenarios** de la Ficha de Trabajo (Sección 8).
  2. Para cada escenario, indicad: (a) si es Amenaza u Oportunidad, (b) la **estrategia exacta** elegida de las 10 del estándar PMI (*escalar, evitar, transferir, mitigar, aceptar activa/pasiva, explotar, compartir, mejorar*), y (c) para los escenarios 2, 4 y 6, proponed **un riesgo secundario o residual** plausible.
  3. Resolved la pregunta relámpago final: *"Ocurre un corte eléctrico no previsto en el Registro de Riesgos y el equipo alquila de urgencia un generador esa misma tarde. ¿Es un plan de contingencia, un plan de reserva o un workaround?"*
- **Materiales necesarios**: Ficha de trabajo (Sección 8) y tabla colaborativa online.
- **Tiempo estimado**: 35 minutos (Fase 3).
- **Rol del formador**: Mentor en salas; insiste en la distinción sutil entre *evitar* (probabilidad/impacto → 0) y *mitigar* (reducir), y entre *explotar* (asegurar) y *mejorar* (aumentar probabilidad/impacto).
- **Producto o entregable esperado**: Tabla de 8 escenarios clasificados + 3 riesgos secundarios/residuales + respuesta a la pregunta relámpago (*Workaround* o solución alternativa, porque no estaba planificada de antemano).
- **Criterios de éxito**: Al menos 7/8 estrategias exactas, identificación realista de riesgos secundarios/residuales y distinción correcta de *workaround*.

### Actividad 3 (Transferencia a la realidad laboral): Mini-Registro de Riesgos cuantificado de tu proyecto
- **Nombre**: *Mapa de riesgos y contingencia real en 1 página*
- **Objetivo**: Aplicar el proceso completo de gestión de riesgos (causa-evento-efecto, RBS, PxI, EMV y respuesta) a un proyecto real del alumnado.
- **Instrucciones para el alumnado**:
  1. Selecciona un proyecto real de tu empresa o emprendimiento.
  2. Cumplimenta la **Plantilla de Registro de Riesgos Cuantificado** (Sección 8) con **3 amenazas y 1 oportunidad**, incluyendo para cada una: categoría RBS, enunciado Causa→Evento→Efecto, Probabilidad (%), Impacto (€), cálculo de **EMV**, propietario asignado, disparador (*trigger*), estrategia de respuesta y riesgo secundario o residual.
  3. Calcula la **reserva de contingencia recomendada** sumando el EMV de tus 3 amenazas.
  4. Publica tu mini-registro en el foro del campus y aporta un riesgo ciego (no contemplado) o mejora de respuesta al registro de un compañero/a.
- **Materiales necesarios**: Plantilla de Registro de Riesgos Cuantificado (Sección 8).
- **Tiempo estimado**: 20 minutos de borrador en sesión + entrega ampliada en el campus.
- **Rol del formador**: Consultor de riesgos; verifica que los propietarios sean personas concretas, que los cálculos EMV sean coherentes y que se incluya al menos una oportunidad real.
- **Producto o entregable esperado**: Mini-Registro de Riesgos completo con cálculo de reserva de contingencia y revisión cruzada.
- **Criterios de éxito**: Enunciados en formato Causa→Evento→Efecto, cálculos EMV sin errores, estrategias coherentes con la clasificación PMI y cuantificación justificada de la reserva de contingencia.

---

## 6. Caso práctico

### Contexto empresarial
**SolarGrid Andalucía S.L.** es una ingeniería pyme especializada en energías renovables con sede en Sevilla (60 empleados). Ha sido contratada para ejecutar un proyecto estratégico de **Despliegue de una Plataforma IoT de Monitorización y Mantenimiento Predictivo** en **12 parques fotovoltaicos** repartidos por Andalucía y Extremadura.

### Situación o problema
Antes de aprobar la Línea Base de Costes y el arranque de la ejecución, el Consejo de Dirección te pide dos análisis cuantitativos rigurosos como Director/a del Proyecto:
1. **Cuantificar la exposición económica del Registro de Riesgos priorizados** mediante Valor Monetario Esperado (EMV) para fundamentar la **reserva de contingencia** y diseñar las respuestas óptimas (incluyendo riesgos secundarios y residuales).
2. **Resolver mediante un árbol de decisión la elección de arquitectura tecnológica** para la pasarela IoT entre dos alternativas mutuamente excluyentes:
   - **Opción A (Desarrollo a medida)**: menor desembolso inicial (**95.000 €**), pero mayor incertidumbre de escalabilidad al desplegar en los 12 parques simultáneamente.
   - **Opción B (Plataforma SaaS comercial certificada)**: mayor desembolso inicial incluyendo 2 años de licencias (**110.000 €**), pero arquitectura probada con mucha menor probabilidad de incidentes de integración.

### Datos disponibles

#### Tabla 1: Registro de riesgos priorizados (antes de aplicar respuestas)

| ID | Tipo y categoría RBS | Descripción resumida del evento de riesgo | Probabilidad ($P$) | Impacto monetario ($I$) | Proximidad |
|---|---|---|---:|---:|---|
| **R-01** | Amenaza (Técnico / Regulatorio) | Retraso en homologación de sensores IoT por requisitos de normativa eléctrica | 30 % | -50.000 € | Alta (mes 2) |
| **R-02** | Amenaza (Externo) | Caída de conectividad 4G/5G en 3 parques rurales durante pruebas y operación | 40 % | -20.000 € | Media (mes 4) |
| **R-03** | Amenaza (Técnico / Ciber) | Vulnerabilidad crítica detectada en auditoría de ciberseguridad previa al arranque | 20 % | -60.000 € | Media (mes 5) |
| **R-04** | Oportunidad (Externo / Financ.) | Obtención de subvención autonómica de digitalización verde si se despliega antes del 31/12 | 35 % | +40.000 € | Alta (plazo fijo) |
| **R-05** | Amenaza (Organizacional / Prov.) | Rotación o baja del ingeniero clave del proveedor de firmware durante la integración | 25 % | -16.000 € | Media (mes 3) |

#### Tabla 2: Datos para el Árbol de Decisión (Arquitectura de pasarela IoT)

| Alternativa | Coste inicial seguro (€) | Escenario 1 (Probabilidad y coste adicional) | Escenario 2 (Probabilidad y coste adicional) |
|---|---:|---|---|
| **Opción A: Desarrollo a medida** | 95.000 € | **60 %**: Integración estable (+0 € adicionales) | **40 %**: Fallos de escalabilidad en los 12 parques (+65.000 € de retrabajo y penalización) |
| **Opción B: Plataforma SaaS comercial** | 110.000 € | **85 %**: Despliegue sin incidencias mayores (+0 € adicionales) | **15 %**: Necesidad de conectores personalizados (+30.000 € adicionales) |

### Preguntas de análisis
1. Calcula el **EMV individual** de los riesgos R-01 a R-05, la **exposición total a amenazas** y el **EMV neto global**. ¿Qué cifra recomendarías como base prudente para la reserva de contingencia (antes de mitigaciones) y por qué no deberías descontar R-04 de esa reserva?
2. Construye y calcula el **Árbol de Decisión** de la Tabla 2 (EMV de coste total esperado para Opción A y Opción B). ¿Qué arquitectura resulta económicamente más favorable y por cuántos euros de diferencia esperada?
3. Si seleccionas la opción óptima del árbol de decisión, identifica al menos **un riesgo secundario** relevante que introduce esa decisión y cómo lo gestionarías.
4. Diseña una **estrategia de respuesta PMI específica** para cada riesgo de la Tabla 1 (R-01 a R-05), especificando su propietario sugerido y disparador (*trigger*).
5. Supón que para **R-02** aplicas una mitigación (tarjetas SIM multi-operador y búfer local de almacenamiento en los 3 parques rurales) que reduce su probabilidad del 40 % al 10 % y su impacto de -20.000 € a -5.000 €. ¿Cuál es el **riesgo residual (EMV)** y con qué estrategia gestionarías ese remanente?

### Tarea a realizar
En equipos de 3-4 personas, preparad un **Informe Ejecutivo de Análisis Cuantitativo y Plan de Respuesta a Riesgos** para el Consejo de Dirección de SolarGrid Andalucía S.L. que contenga:
1. Tabla completada de EMV (R-01 a R-05) con recomendación argumentada de reserva de contingencia.
2. Diagrama/tabla resuelta del Árbol de Decisión (Opción A vs. Opción B) con recomendación de arquitectura y riesgo secundario asociado.
3. Matriz de respuestas para los 5 riesgos (estrategia PMI, acción concreta, disparador y cálculo del riesgo residual de R-02).

### Posibles soluciones o criterios de análisis

#### 1. Cálculo de EMV del Registro de Riesgos y Reserva de Contingencia

| ID | Tipo | Probabilidad ($P$) | Impacto ($I$) | $EMV = P \times I$ |
|---|---|---:|---:|---:|
| **R-01** | Amenaza | 0,30 | -50.000 € | **-15.000 €** |
| **R-02** | Amenaza | 0,40 | -20.000 € | **-8.000 €** |
| **R-03** | Amenaza | 0,20 | -60.000 € | **-12.000 €** |
| **R-05** | Amenaza | 0,25 | -16.000 € | **-4.000 €** |
| **Subtotal Amenazas** | — | — | — | **-39.000 €** |
| **R-04** | Oportunidad | 0,35 | +40.000 € | **+14.000 €** |
| **EMV Neto Global** | — | — | — | **-25.000 €** |

- **Recomendación de reserva de contingencia**: antes de recalcular las exposiciones post-mitigación, la base prudente de reserva de contingencia frente a amenazas es de **39.000 €**. En gestión financiera prudente de proyectos **no se recomienda rebajar la reserva de contingencia a 25.000 € descontando la oportunidad R-04 (+14.000 €)**, ya que la subvención es incierta (65 % de probabilidad de no obtenerse) y además suele cobrarse con posterioridad al despliegue, por lo que no cubriría pagos inmediatos si se materializan R-01 o R-03.
- **Priorización por sensibilidad/proximidad**: **R-01** combina el mayor EMV negativo (-15.000 €) con proximidad inmediata (mes 2), por lo que es la prioridad absoluta #1 (encabezaría el diagrama de tornado junto a R-03 por su alto impacto extremo de -60.000 €).

#### 2. Resolución del Árbol de Decisión (Minimización de coste esperado)

| Rama / Alternativa | Coste total de la rama (€) | Probabilidad | Valor ponderado (€) | EMV Coste Total Esperado |
|---|---:|---:|---:|---:|
| **Opción A — Escenario 1 (Estable)** | 95.000 + 0 = 95.000 € | 60 % (0,60) | 57.000 € | |
| **Opción A — Escenario 2 (Fallos escalab.)** | 95.000 + 65.000 = 160.000 € | 40 % (0,40) | 64.000 € | **121.000 €** *(95k + 26k)* |
| **Opción B — Escenario 1 (Sin incidencias)** | 110.000 + 0 = 110.000 € | 85 % (0,85) | 93.500 € | |
| **Opción B — Escenario 2 (Conectores)** | 110.000 + 30.000 = 140.000 € | 15 % (0,15) | 21.000 € | **114.500 €** *(110k + 4,5k)* |

- **Decisión óptima por EMV**: elegir la **Opción B (Plataforma SaaS comercial certificada)**. Aunque exige 15.000 € más de inversión inicial (110.000 € vs. 95.000 €), ofrece un **coste total esperado inferior en 6.500 €** (114.500 € vs. 121.000 €) y acota el peor escenario posible a 140.000 € frente a los 160.000 € de la Opción A.
- **Riesgo secundario de la Opción B**: dependencia tecnológica del proveedor SaaS (*vendor lock-in*) y posibles subidas abusivas de tarifas al renovar las licencias en el año 3. *Respuesta*: incluir en el contrato cláusulas de propiedad y exportación estándar de datos (API abierta) y un techo contractual de incremento anual ligado al IPC.

#### 3. Plan de respuestas a R-01 a R-05 y cálculo de riesgo residual
- **R-01 (Amenaza - Homologación sensores)**: **Evitar** seleccionando sensores ya pre-homologados bajo la normativa eléctrica española vigente *(verificar normativa industrial vigente)* o **Mitigar** realizando una pre-validación con laboratorio acreditado en el mes 1. *Disparador*: retraso >5 días en emisión de ficha técnica.
- **R-02 (Amenaza - Conectividad rural)**: **Mitigar** instalando tarjetas SIM multi-operador + búfer local con sincronización diferida en los 3 parques rurales.
  - **Cálculo del riesgo residual**: $EMV_{\text{residual}} = 0,10 \times (-5.000\text{ €}) = \mathbf{-500\text{ €}}$. Se gestiona mediante **Aceptación activa** (manteniendo 500 €–1.000 € en contingencia o protocolo de descarga manual en mantenimiento preventivo).
- **R-03 (Amenaza - Ciberseguridad)**: **Mitigar** integrando pruebas de seguridad desde el Sprint 1 (*DevSecOps* / *Risk-Adjusted Backlog*) y contratando una pre-auditoría temprana en el mes 3 (antes de cerrar el despliegue). *(Opcionalmente complementar con **Transferir** parcial del riesgo financiero mediante póliza de ciberseguro).*
- **R-04 (Oportunidad - Subvención verde)**: **Mejorar** (o **Explotar**) adelantando el hito de entrega mínima certificable antes del 15/12 y contratando un especialista en tramitación de subvenciones (o **Compartir** con consultora a éxito con comisión solo si se concede la ayuda).
- **R-05 (Amenaza - Rotación ingeniero clave proveedor)**: **Transferir / Mitigar** exigiendo en el contrato cláusula de respaldo (*shadowing* de un segundo técnico + documentación continua en repositorio compartido + penalización por sustitución sin preaviso de 15 días).

### Preguntas de reflexión final
1. Si la dirección de SolarGrid Andalucía tuviera un apetito de riesgo muy alto y escasez extrema de tesorería en el mes 1, ¿qué otros factores además del EMV (como la conciliación de financiación del Tema 2 o la curva P80 de Monte Carlo) deberían revisarse antes de decidir entre A y B?
2. ¿Cómo cambiaría la reserva de contingencia total (39.000 € iniciales) una vez aprobadas e implementadas las acciones de mitigación sobre R-01, R-02 y R-03?

---

## 7. Evaluación

### Evaluación diagnóstica breve (inicio de sesión, 5 min)
Tres preguntas rápidas en encuesta online:
1. ¿Un riesgo de proyecto puede tener un impacto positivo? *(A: No, solo negativo / B: Sí, se denomina oportunidad)* → Respuesta: **B**.
2. Contratar una póliza de seguro para cubrir daños en el transporte de equipamiento es una estrategia de: *(A: Evitar / B: Mitigar / C: Transferir / D: Aceptar)* → Respuesta: **C**.
3. ¿Cuál es la fórmula del Valor Monetario Esperado (EMV)? → Respuesta: **$\text{Probabilidad} \times \text{Impacto}$**.

### Evaluación formativa durante la sesión
- Corrección en directo de los enunciados Causa→Evento→Efecto de la Actividad 1.
- Verificación en salas de las 8 estrategias de respuesta y la distinción *contingencia vs. workaround* en la Actividad 2.
- Supervisión guiada de los cálculos EMV y del árbol de decisión del caso **SolarGrid Andalucía S.L.** antes de la defensa en plenario.

### Evaluación sumativa al final (mini-test tipo PMP, 15 min)
Cinco preguntas situacionales/numéricas (superación mínima: 4/5):

1. **(Cálculo de Árbol de Decisión / EMV)** Tu empresa debe decidir entre dos estrategias de migración de servidores:
   - *Opción X*: coste inicial 40.000 €; 70 % de probabilidad de éxito sin coste extra y 30 % de probabilidad de fallo con coste adicional de 50.000 €.
   - *Opción Y*: coste inicial 50.000 €; 90 % de probabilidad de éxito sin coste extra y 10 % de probabilidad de fallo con coste adicional de 20.000 €.
   Según el criterio de mínimo coste esperado (EMV), ¿qué opción debes elegir y por cuánta diferencia?
   - A) Opción X, ahorra 3.000 € esperados.
   - B) Opción Y, ahorra 3.000 € esperados. *(Correcta: EMV X = $40.000 + 0,30 \times 50.000 = 55.000\text{ €}$; EMV Y = $50.000 + 0,10 \times 20.000 = 52.000\text{ €}$; Y ahorra 3.000 €)*
   - C) Ambas tienen el mismo EMV de 52.000 €.
   - D) Opción X, ahorra 10.000 € esperados.
2. **(Estrategias de oportunidades)** Durante un proyecto de digitalización, el equipo detecta una oportunidad (probabilidad 40 %) de integrar una nueva API abierta que reduciría los tiempos de operación en un 30 %. Para **asegurar** que esta oportunidad se materialice, el Director del Proyecto asigna a sus dos mejores ingenieros senior y prioriza la integración en el próximo sprint. ¿Qué estrategia está aplicando?
   - A) Compartir (*Share*)
   - B) Aceptar activamente (*Accept*)
   - C) Explotar (*Exploit*) *(Correcta)*
   - D) Mejorar (*Enhance*)
3. **(Riesgo secundario vs. residual)** Para mitigar el riesgo de que un único proveedor de componentes falle en la entrega, decides contratar un segundo proveedor alternativo en otro país. Sin embargo, esto introduce el nuevo riesgo de retrasos aduaneros y diferencias de calidad entre lotes. ¿Cómo se clasifica este nuevo riesgo?
   - A) Riesgo residual
   - B) Riesgo secundario *(Correcta)*
   - C) Problema (*Issue*)
   - D) Riesgo general del proyecto
4. **(Respuesta no planificada)** Durante la ejecución se produce una huelga inesperada de transportes que **no había sido identificada** en el Registro de Riesgos. El Director del Proyecto improvisa rápidamente un envío urgente por courier alternativo para salvar el hito. ¿Cómo denomina PMI esta acción?
   - A) Plan de contingencia (*Contingency Plan*)
   - B) Plan de reserva (*Fallback Plan*)
   - C) Solución alternativa (*Workaround*) *(Correcta)*
   - D) Transferencia de riesgo (*Transfer*)
5. **(Análisis cuantitativo)** Un patrocinador pregunta qué herramienta de análisis cuantitativo muestra de forma más visual y ordenada qué riesgos individuales concretos tienen mayor influencia potencial sobre el coste total del proyecto. ¿Qué herramienta debes presentar?
   - A) Matriz de Evaluación del Involucramiento
   - B) Análisis de sensibilidad mediante Diagrama de Tornado *(Correcta)*
   - C) Lista de observación (*Watchlist*)
   - D) Estructura de Desglose de Recursos (RBS)

### Rúbrica de evaluación (Actividad práctica + Caso SolarGrid Andalucía S.L.)

| Criterio | Insuficiente (0–4,9) | En desarrollo (5,0–6,9) | Adecuado (7,0–8,9) | Destacado (9,0–10) |
|---|---|---|---|---|
| **1. Cálculo EMV y reserva de contingencia (25 %)** | Comete errores graves en las fórmulas EMV o ignora los signos de amenazas y oportunidades. | Calcula bien los EMV individuales, pero propone descontar la oportunidad incierta de la reserva sin justificar el riesgo financiero. | Calcula con exactitud los 5 EMV (-39.000 € amenazas, +14.000 € oportunidad, -25.000 € neto) y fundamenta prudentemente la reserva de contingencia. | Ejecuta todos los cálculos con precisión absoluta, explica la prudencia financiera ante oportunidades inciertas y vincula el análisis EMV con la proximidad y el diagrama de tornado. |
| **2. Árbol de decisión y elección estratégica (25 %)** | No suma el coste inicial a las ramas o selecciona la Opción A guiándose solo por el menor coste inicial. | Calcula bien una de las dos opciones o presenta el resultado correcto sin estructurar las ramas de probabilidad. | Resuelve correctamente ambas opciones (121.000 € vs. 114.500 €) y recomienda la Opción B justificando el ahorro esperado de 6.500 €. | Además de la resolución matemática perfecta, evalúa la dispersión del peor escenario (140k vs. 160k) e integra el riesgo secundario de *vendor lock-in* con medidas contractuales concretas. |
| **3. Estrategias PMI, riesgo secundario y residual (30 %)** | Confunde *evitar/mitigar*, *transferir/compartir* o no logra calcular el riesgo residual de R-02. | Selecciona respuestas adecuadas para la mayoría de los riesgos, pero sin disparadores (*triggers*) claros o con errores en el cálculo residual. | Asigna estrategias PMI exactas para R-01 a R-05 (amenazas y oportunidad), define disparadores y calcula correctamente el riesgo residual de R-02 (-500 €). | Diseña un plan integral de alto nivel ejecutivo diferenciando estrategias activas, contingencias, riesgos secundarios y residuales, e integrando prácticas ágiles (*Risk-Adjusted Backlog*) para R-03. |
| **4. Transferencia laboral (Mini-Registro propio) (20 %)** | Entrega incompleta o con riesgos vagos mezclados con problemas actuales (*issues*). | Incluye riesgos propios en formato correcto, pero sin cuantificación EMV o sin propietario individual asignado. | Entrega un Mini-Registro de Riesgos completo (3 amenazas + 1 oportunidad) en formato Causa→Evento→Efecto con EMV y reserva de contingencia calculada. | Aporta un registro profesional listo para usar con dirección, con disparadores verificables, análisis de riesgos secundarios y retroalimentación de valor a un compañero/a. |

### Actividad de autoevaluación o reflexión
Al finalizar la sesión y el Bloque 7 completo, cada participante responde en su diario del campus (5 min):
1. ¿Cuál de las 10 estrategias de respuesta a riesgos (especialmente en oportunidades) utilizo menos hoy en mi empresa y dónde podría aplicarla este trimestre?
2. En mi proyecto actual, ¿tengo algún "riesgo" en mi seguimiento que en realidad ya es un **problema (*issue*)** requiriendo acción inmediata?
3. Tras completar los 4 temas del **Bloque 7** (Cronograma, Finanzas, Personas/Comunicaciones y Riesgos), ¿cuál de estas cuatro áreas representa hoy mi mayor fortaleza y cuál requiere más práctica de cara a mi desempeño o al examen PMP?

---

## 8. Materiales y recursos

### Guion de diapositivas (slide por slide)

| Slide | Título | Contenido clave y recurso visual | Tiempo aprox. |
|---:|---|---|---:|
| **1** | Portada y cierre del Bloque 7 | Título, Bloque 7 (4/4), 5 objetivos Bloom e integración de riesgos con cronograma, presupuesto y personas. | 3 min |
| **2** | Activación: ¿Riesgo, oportunidad o problema? | 5 registros reales para clasificar + regla de separación Registro de Riesgos vs. Registro de Problemas (*Issue Log*). | 12 min |
| **3** | Plan de Gestión de Riesgos y RBS | Componentes del plan + árbol visual de la *Risk Breakdown Structure (RBS)* (Técnico, Externo, Organizacional, Dirección). | 8 min |
| **4** | Apetito, tolerancia y umbral de riesgo | Termómetro visual comparativo con ejemplos numéricos de presupuesto, plazo y ciberseguridad. | 7 min |
| **5** | Identificación de riesgos: Causa → Evento → Efecto | Técnicas (PESTLE, supuestos, entrevistas, causa raíz) + transformación en directo de enunciados vagos a profesionales. | 8 min |
| **6** | Análisis cualitativo: Matriz PxI y urgencia | Matriz de calor 5×5 (amenazas y oportunidades en espejo), urgencia/proximidad y *Watchlist*. | 7 min |
| **7** | Análisis cuantitativo (Parte 1): EMV y Árboles de Decisión | Fórmula EMV + árbol resuelto paso a paso comparando dos alternativas tecnológicas. | 8 min |
| **8** | Análisis cuantitativo (Parte 2): Tornado y Monte Carlo | Gráfico de diagrama de tornado (sensibilidad) + curva S acumulada de Monte Carlo (lectura de P50 y P80). | 7 min |
| **9** | Taller guiado: las 10 estrategias de respuesta (Actividad 2) | Tabla simétrica de 5 estrategias para amenazas y 5 para oportunidades + reglas del ejercicio en salas. | 5 min (+30 taller) |
| **10** | Matices PMP: Evitar/Mitigar, Transferir/Compartir y Aceptar | Cuadro de contraste de trampas de examen (aceptación activa vs. pasiva, cuándo escalar, prima de transferencia). | 8 min |
| **11** | Riesgos secundarios, residuales y planes de respaldo | Diagrama de flujo: Riesgo inicial → Respuesta → Riesgo residual + Riesgo secundario; Contingencia vs. *Fallback* vs. *Workaround*. | 9 min |
| **12** | Gestión de riesgos en entornos ágiles e híbridos | *Risk-Adjusted Backlog* (priorización Valor + Riesgo en primeros sprints) y *Risk Burndown Chart*. | 8 min |
| **13** | Caso práctico: SolarGrid Andalucía S.L. | Contexto de los 12 parques fotovoltaicos, Tabla 1 (EMV R-01 a R-05) y Tabla 2 (Árbol de decisión IoT A vs. B). | 5 min (+45 taller) |
| **14** | Solución comentada del caso SolarGrid | EMV (-39k amenazas / -25k neto), Árbol de decisión (121k vs. 114,5k → Opción B), *vendor lock-in* y residual de R-02 (-500 €). | 15 min |
| **15** | Transferencia laboral (Actividad 3) | Plantilla del Mini-Registro de Riesgos cuantificado y guía de revisión entre pares. | 15 min |
| **16** | Síntesis del Bloque 7, mini-test PMP y puente al Bloque 8 | 5 preguntas sumativas tipo PMP, mapa integrador del Bloque 7 y transición hacia la Ejecución (Bloque 8, Tema 1). | 25 min |

### Ficha de trabajo (para Actividad 2 — Gimnasio de las 10 estrategias)

> **Instrucciones**: Clasifica cada escenario indicando **Tipo** (Amenaza/Oportunidad), **Estrategia PMI exacta** y, en los marcados con `*`, propone un **riesgo secundario o residual**.

| # | Escenario real de proyecto | Amenaza / Oportunidad | Estrategia PMI exacta | Riesgo secundario / residual (`*`) |
|---:|---|---|---|---|
| **1** | Un cambio regulatorio nacional amenaza todo el modelo de negocio de la empresa más allá del alcance de tu proyecto. | | *(Escalar)* | — |
| **2*** | Contratas una póliza de seguro de responsabilidad y un contrato de precio fijo con penalizaciones para una obra crítica. | | *(Transferir)* | |
| **3** | Eliminas una librería experimental inestable del alcance técnico y la sustituyes por un estándar consolidado para suprimir el riesgo de caída. | | *(Evitar)* | — |
| **4*** | Realizas pruebas de carga y un piloto en 1 sola tienda antes de desplegar el nuevo TPV en 50 tiendas. | | *(Mitigar)* | |
| **5** | Para conseguir una bonificación de 20.000 € por entrega anticipada, asignas a los dos especialistas senior más rápidos para asegurar el hito. | | *(Explotar)* | — |
| **6*** | Te asocias en consorcio con una consultora especializada en IA para optar juntos a un contrato público que solos no podríais ganar. | | *(Compartir)* | |
| **7** | Documentas un riesgo menor de lluvia leve en la *watchlist* y reservas 2.000 € de contingencia por si hay que alquilar una carpa ese día. | | *(Aceptar — activa)* | — |
| **8** | Añades formación comercial extra para incrementar la probabilidad de que los clientes adopten un nuevo módulo de pago adicional. | | *(Mejorar)* | — |

### Plantilla o herramienta práctica replicable

**Plantilla de Registro de Riesgos Cuantificado y Plan de Respuesta (copiable a Excel / Google Sheets / Jira / Notion):**

```markdown
## Registro de Riesgos Cuantificado — [Nombre del Proyecto]
- **Umbral de escalado definido:** [Ej. Impacto > 20.000 € o Retraso > 10 días]
- **Fecha última revisión:** [DD/MM/AAAA]

| ID | Tipo (Am./Op.) | Cat. RBS | Enunciado (Causa → Evento → Efecto) | P (%) | Impacto (€) | EMV (€) | Proximidad | Estrategia PMI | Acción de respuesta y disparador | Propietario | Riesgo secundario / residual |
|---|---|---|---|---:|---:|---:|---|---|---|---|---|
| R-01 | Amenaza | Técnico | Debido a [...], podría [...], provocando [...] | | - | =P*I | Alta/Med/Baja | | Acción: [...] / Trigger: [...] | [Nombre] | |
| R-02 | Amenaza | Externo | | | - | =P*I | | | | | |
| R-03 | Amenaza | Org. | | | - | =P*I | | | | | |
| R-04 | Oportun. | Comerc. | | | + | =P*I | | | | | |

- **Exposición total a Amenazas (Base Reserva de Contingencia):** `=SUMA(EMV amenazas)` €
- **EMV Neto Global (informativo):** `=SUMA(todos los EMV)` €
```

### Lecturas o recursos recomendados
- **Project Management Institute (PMI)**: *Guía de los Fundamentos para la Dirección de Proyectos (Guía del PMBOK®)* — Dominio de Desempeño de la Incertidumbre y principios de optimización de respuestas al riesgo *(verificar numeración y epígrafes exactos en la edición PMBOK 8 vigente antes de impartir)*.
- **Project Management Institute (PMI)**: *The Standard for Risk Management in Portfolios, Programs, and Projects* (estándar específico de referencia para RBS, análisis cuantitativo y gobernanza de riesgos).
- **Herramienta del Campus**: Calculadora interactiva de **EMV y PERT** integrada en el Campus de Certificación del programa.

### Vídeos, artículos y fuentes adicionales *(validar enlaces y vigencia antes de utilizarse)*
- **Recurso audiovisual sugerido**: Vídeos didácticos de resolución de árboles de decisión EMV y explicación conceptual de simulación de Monte Carlo (curvas P50/P80) para aspirantes PMP (*validar disponibilidad, exactitud matemática y subtítulos antes de compartir*).
- **Artículo técnico sugerido**: Artículos sobre *Risk-Adjusted Product Backlog* y cómo combinar gestión de riesgos tradicional con ciclos iterativos Scrum/Kanban en *ProjectManagement.com* (*validar vigencia y acceso abierto antes de utilizarse en clase*).
- **Nota técnica/normativa**: Si en el debate del caso SolarGrid Andalucía se mencionan requisitos reales de homologación eléctrica o convocatorias concretas de subvenciones de digitalización autonómicas/europeas, **verificar las bases y normativa vigentes antes de impartir**.

### Glosario de términos clave

| Término | Definición operativa |
|---|---|
| **Análisis de sensibilidad (Diagrama de Tornado)** | Técnica cuantitativa que determina qué riesgos individuales tienen mayor impacto potencial en el proyecto, representados en barras horizontales ordenadas de mayor a menor amplitud. |
| **Apetito de riesgo** | Grado general de incertidumbre que una organización está dispuesta a aceptar a cambio de una recompensa esperada. |
| **Árbol de decisión** | Técnica cuantitativa gráfica que evalúa alternativas estratégicas mutuamente excluyentes calculando el valor monetario esperado (EMV) neto de cada rama. |
| **Disparador (*Risk Trigger*)** | Señal temprana o condición observable que indica que un riesgo está a punto de materializarse o ha ocurrido. |
| **EMV (Valor Monetario Esperado)** | Resultado promedio ponderado de escenarios inciertos, calculado como $EMV = \text{Probabilidad} \times \text{Impacto monetario}$. |
| **Lista de observación (*Watchlist*)** | Sección del Registro de Riesgos dedicada a riesgos de baja prioridad que requieren monitoreo periódico pero no respuestas complejas inmediatas. |
| **Plan de reserva (*Fallback Plan*)** | Plan alternativo predeterminado que se activa si la estrategia de respuesta principal al riesgo no resulta eficaz. |
| **RBS (*Risk Breakdown Structure*)** | Representación jerárquica de las posibles fuentes o categorías de riesgo de un proyecto (técnico, externo, organizacional, dirección de proyectos). |
| **Registro de Riesgos (*Risk Register*)** | Documento dinámico donde se registran los riesgos individuales identificados, su evaluación, propietario, disparadores y planes de respuesta. |
| **Riesgo residual** | Riesgo que permanece después de haber implementado las estrategias de respuesta planificadas. |
| **Riesgo secundario** | Nuevo riesgo que surge como consecuencia directa de implementar una respuesta a otro riesgo. |
| **Simulación de Monte Carlo** | Técnica cuantitativa que ejecuta miles de simulaciones aleatorias para estimar la probabilidad acumulada de cumplir objetivos de coste o cronograma. |
| **Solución alternativa (*Workaround*)** | Respuesta no planificada que se improvisa ante un riesgo no identificado o aceptado pasivamente cuando se materializa. |
| **Umbral de riesgo** | Nivel específico y medible de exposición a partir del cual la organización no acepta el riesgo y exige una respuesta o escalado obligatorio. |

---

## 9. Adaptaciones

Dado que la modalidad nativa del programa es **100 % online interactiva**, a continuación se detallan las adaptaciones operativas para los tres formatos:

- **Sesión online síncrona (formato estándar del programa)**:
  - Facilitar una hoja de cálculo colaborativa por sala para el caso **SolarGrid Andalucía S.L.** con dos pestañas (Pestaña 1: EMV de R-01 a R-05; Pestaña 2: Árbol de decisión A vs. B) para que el alumnado valide fórmulas en tiempo real y visualice inmediatamente el impacto de variar probabilidades.
  - Utilizar sondeos rápidos en pantalla durante la Actividad 1 y el bloque de matices PMP (diferenciando *evitar/mitigar* y *contingencia/workaround*).
  - Incluir pausa activa de 10 minutos tras la Fase 4 manteniendo 240 minutos efectivos de sesión.
- **Sesión presencial (talleres *in-company* o formato aula)**:
  - Entregar a cada grupo un juego de 10 tarjetas físicas (5 azules de amenazas y 5 verdes de oportunidades) para la Actividad 2; al leer cada escenario, los grupos levantan la tarjeta elegida simultáneamente, dinamizando el debate sobre diferencias sutiles (*explotar vs. mejorar*, *evitar vs. mitigar*).
  - Dibujar el Árbol de Decisión de SolarGrid en gran formato sobre pizarra blanca usando cuadrados (nodos de decisión) y círculos (nodos de azar/probabilidad) para fijar la convención gráfica estándar.
- **Sesión asíncrona (estudio autónomo en el Campus)**:
  - Dividir el contenido en 4 cápsulas audiovisuales de 10–12 minutos (RBS y umbrales; Identificación Causa-Evento-Efecto; Análisis cualitativo y cuantitativo; Las 10 estrategias, secundarios y residuales) con preguntas embebidas.
  - Habilitar la calculadora interactiva de EMV del Campus para practicar SolarGrid Andalucía, exigir la publicación del **Mini-Registro de Riesgos propio** (Actividad 3) con revisión cruzada obligatoria y activar el test sumativo autocorregido de 5 preguntas tipo PMP (más el examen integrador del Bloque 7).

---

## 10. Conexión con el programa

- **Qué conocimientos previos refuerza**: Integra y protege todas las líneas base construidas durante el **Bloque 6** (alcance) y el **Bloque 7**: los riesgos de plazo conectan con la incertidumbre PERT y rutas subcríticas del **Tema 1**, el cálculo de EMV proporciona la base matemática de la **reserva de contingencia** del **Tema 2**, y los riesgos de resistencia de interesados, canales y cuellos de botella de recursos del **Tema 3** alimentan directamente el Registro de Riesgos.
- **Qué competencias desarrolla**: Pensamiento probabilístico, toma de decisiones bajo incertidumbre (EMV, árboles de decisión, sensibilidad), diseño preventivo de respuestas y dominio transversal de los dominios **Procesos**, **Entorno Empresarial** y **Personas** del ECO PMP (junto con el Dominio de Desempeño de la Incertidumbre de PMBOK 8).
- **Conexión con el tema anterior y posterior**:
  - *Tema anterior*: **Bloque 7, Tema 3 — Planificación de interesados, comunicaciones y recursos** (las brechas de involucramiento y tensiones de capacidad humana/física identificadas allí se convierten en entradas críticas para el Registro de Riesgos).
  - *Tema posterior*: **Bloque 8, Tema 1 — Ejecución: gobernanza, calidad y gestión del conocimiento** (marca el salto de la planificación a la **ejecución** del Plan para la Dirección del Proyecto aprobado en los Bloques 6 y 7; además, las respuestas planificadas en este tema se implementarán activamente en el **Bloque 8, Tema 2** y se monitorearán junto a riesgos emergentes en el **Bloque 8, Tema 5**).
- **Evidencia de aprendizaje que dejará el alumnado**:
  1. Clasificación de 8 escenarios en las 10 estrategias PMI con identificación de riesgos secundarios y residuales (Actividad 2).
  2. Informe Ejecutivo de EMV, Árbol de Decisión y Plan de Respuesta del caso **SolarGrid Andalucía S.L.**
  3. Mini-Registro de Riesgos cuantificado aplicado a su proyecto real (Actividad 3) + resultado del mini-test sumativo tipo PMP.

---

## Siguientes pasos para el formador

1. **Comprobar la terminología vigente de PMBOK 8 y ECO PMP**: Confirmar antes de la sesión que las denominaciones de las 10 estrategias de respuesta y los conceptos del Dominio de Incertidumbre mantienen su formulación vigente en la documentación de PMI.
2. **Preparar las hojas dinámicas de EMV y Árbol de Decisión**: Configurar una plantilla compartida por sala para **SolarGrid Andalucía S.L.** que permita hacer una prueba en vivo de sensibilidad al cierre (p. ej., preguntar: *"¿a partir de qué probabilidad de fallo de la Opción A cambiaría nuestra decisión?"* — respuesta: cuando el coste esperado de fallo iguale los 19.500 €, es decir, $p = 19.500 / 65.000 = 30\,\%$).
3. **Recalcar la diferencia entre Reserva de Contingencia y EMV neto**: En la puesta en común de SolarGrid, asegurarse de que todo el alumnado comprende por qué descontar una subvención incierta (+14.000 €) de la reserva para amenazas (-39.000 €) crea un peligro real de liquidez y control presupuestario.
4. **Validar fuentes y normativa local antes de impartir**: Revisar los enlaces externos de la Sección 8 y no citar requisitos reales de homologación eléctrica o subvenciones concretas sin confirmar su vigencia.
5. **Cerrar el Bloque 7 con visión integradora hacia el Bloque 8**: Dedicar 3 minutos finales a mostrar cómo el Plan de Cronograma (Tema 1), la Línea Base de Costes (Tema 2), los Planes de Interesados/Comunicaciones/Recursos (Tema 3) y el Registro de Riesgos (Tema 4) conforman el **Plan para la Dirección del Proyecto** listo para entrar en **Ejecución (Bloque 8, Tema 1)**.
