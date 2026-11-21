# Tema 5. Estrategia y los datos

## 1. Ficha del tema

| Campo | Detalle |
| --- | --- |
| **Título del tema** | Estrategia y los datos: *data-driven decision making*, cultura de datos, KPIs, analítica avanzada y ventaja competitiva |
| **Bloque y posición dentro del programa** | Bloque 10: Gestión de datos — Tema 5 de 5 · **Cierre del Bloque 10 y del Programa de Dirección, Innovación y Negocios Digitales** |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Mandos intermedios y emprendedores |
| **Nivel de dificultad** | Intermedio |
| **Prerrequisitos** | Haber completado los Temas 1 a 4 del Bloque 10 (Open Data, Gestión del dato, Privacidad y Almacenamiento) y el recorrido previo del programa desde el Bloque 1 (*Business Plan*). |
| **Resultado general de aprendizaje** | Diseñar e implantar una estrategia de datos alineada con el *Business Plan* de una pyme o negocio digital, definiendo un sistema de KPIs accionables, una hoja de ruta de analítica y cultura de datos y mecanismos sostenibles de ventaja competitiva. |

---

## 2. Objetivos de aprendizaje

Al finalizar este tema, el alumnado será capaz de:

1. **Diferenciar** (Comprender) decisiones verdaderamente basadas en datos (*data-driven* y *data-informed*) de decisiones guiadas por intuición no contrastada, sesgos cognitivos o el efecto HiPPO (*Highest Paid Person's Opinion*).
2. **Diseñar** (Crear) un árbol de KPIs coherente con el *Business Plan* que conecte una métrica estrella (*North Star Metric*) con indicadores adelantados (*leading*) y retrasados (*lagging*), eliminando métricas vanidosas (*vanity metrics*).
3. **Clasificar y priorizar** (Analizar) iniciativas de analítica según los cuatro niveles de madurez (descriptiva, diagnóstica, predictiva y prescriptiva) en función de su retorno esperado, disponibilidad real de datos y capacidad operativa de una pyme.
4. **Evaluar** (Evaluar) el grado de madurez de la cultura de datos en una organización identificando barreras humanas, brechas de alfabetización en datos (*data literacy*) y rituales directivos necesarios para transformar información en acción.
5. **Elaborar** (Crear) una Estrategia de Datos de una página (*One-Page Data Strategy*) conectada con los objetivos estratégicos del *Business Plan* (Bloque 1) para generar ventaja competitiva defendible en el mercado.

---

## 3. Contenidos esenciales

### 3.1. Data-Driven Decision Making: rigor, sesgos y experimentación

**Explicación breve y clara**
Tener un buen *Data Warehouse* y cuadros de mando impecables no cambia los resultados de una pyme si el comité de dirección sigue decidiendo por intuición o buscando datos únicamente para justificar una decisión ya tomada. La toma de decisiones basada en datos (*Data-Driven Decision Making*, DDDM) —o informada por datos (*data-informed*), cuando se combina evidencia cuantitativa con criterio cualitativo y contexto del cliente— exige formular hipótesis claras, distinguir correlación de causalidad y experimentar antes de escalar inversiones.

**Conceptos clave**
- *Data-driven* frente a *data-informed* (cuando el dato manda frente a cuando el dato guía junto al juicio humano y la ética).
- Efecto **HiPPO** (*Highest Paid Person's Opinion*): prevalencia de la opinión del directivo mejor pagado frente a la evidencia.
- Sesgos frecuentes al analizar datos: sesgo de confirmación (*cherry-picking*), sesgo de supervivencia y confusión entre correlación y causalidad.
- Cultura de experimentación ligera en pymes: pruebas piloto controladas y tests A/B (precios, mensajes, envíos, ofertas).

**Definiciones necesarias**
- **Correlación frente a causalidad:** Dos variables pueden moverse juntas (correlación) sin que una cause la otra (causalidad); tomar decisiones sin comprobar la causa real provoca inversiones ineficaces.
- **Test A/B (experimento controlado):** Comparación simultánea de dos variantes (A = control, B = cambio) sobre grupos comparables para medir con evidencia real qué opción mejora una métrica objetivo.
- **Sesgo de confirmación:** Tendencia a buscar, recordar o interpretar únicamente los gráficos que confirman nuestra creencia previa e ignorar las señales contrarias.

**Ejemplo práctico realista**
Una empresa de software de gestión para clínicas veterinarias observó que los clientes que usaban un módulo de recordatorios por SMS renovaban mucho más y concluyó que "regalar SMS" dispararía la retención. Antes de invertir 40.000 €, hicieron un piloto controlado con 120 clínicas: descubrieron que la causa real de la retención no era el SMS aislado, sino haber completado la sesión inicial de *onboarding* en los primeros 15 días. Reasignaron el presupuesto a *onboarding* y mejoraron la retención sin disparar costes.

**Errores frecuentes**
- Caer en la "parálisis por análisis": esperar a tener el 100 % de los datos perfectos para tomar decisiones reversibles que requieren agilidad.
- Usar los datos como "arma arrojadiza" entre departamentos en lugar de como herramienta compartida de aprendizaje.
- Lanzar tests A/B sobre muestras diminutas y declarar ganadores por pura casualidad estadística.

**Preguntas que el alumnado debería poder responder**
- ¿En qué situación es preferible un enfoque *data-informed* frente a uno estrictamente *data-driven*?
- ¿Cómo podéis neutralizar el efecto HiPPO y el sesgo de confirmación en las reuniones mensuales de vuestra empresa?

---

### 3.2. Diseño de KPIs, árboles de métricas y cuadros de mando accionables

**Explicación breve y clara**
Muchos cuadros de mando en pymes fracasan porque están saturados de 40 gráficos vistosos que nadie sabe cómo accionar el lunes por la mañana. Un KPI (*Key Performance Indicator*) no es cualquier número que se pueda medir, sino una métrica vinculada directamente a un objetivo del *Business Plan*, con un umbral claro, un propietario responsable y una decisión asociada cuando se desvía.

| Tipo de indicador | Definición práctica | Ejemplo en pyme digital | Utilidad directiva |
| --- | --- | --- | --- |
| **Métrica vanidosa (*Vanity Metric*)** | Sube casi siempre y "queda bien", pero no guía decisiones ni refleja rentabilidad | Seguidores acumulados, visitas totales, usuarios registrados históricos | **Baja / peligrosa** (genera falsa sensación de éxito) |
| **Indicador retrasado (*Lagging*)** | Mide el resultado final una vez que ya ocurrió | Facturación mensual, EBITDA, tasa de abandono (*churn*) anual | **Alta para rendición de cuentas**, pero llega tarde para corregir el mes |
| **Indicador adelantado (*Leading*)** | Anticipa el resultado futuro y permite actuar a tiempo | Tasa de activación en 7 días, pedidos con retraso > 48 h, *pipeline* cualificado | **Crítica para gestión diaria** y corrección temprana |
| **Métrica de contrapeso (*Guardrail*)** | Evita que optimizar un KPI rompa otra parte del negocio | Margen bruto por pedido o tasa de devoluciones (al empujar ventas) | **Imprescindible** para crecer de forma rentable y sostenible |

**Conceptos clave**
- *North Star Metric* (métrica estrella que refleja valor real entregado al cliente y crecimiento sostenible).
- Árbol de métricas (*KPI Tree*): descomponer el resultado financiero en palancas operativas accionables por cada equipo.
- Indicadores *leading*, *lagging* y *guardrail* (contrapeso).
- Principio del cuadro de mando accionable: "Si este gráfico baja un 15 % mañana, ¿quién hace exactamente qué?".

**Definiciones necesarias**
- **KPI (Indicador Clave de Rendimiento):** Métrica cuantificable seleccionada para evaluar el progreso hacia un objetivo estratégico concreto, con meta, fuente oficial (Tema 2) y responsable.
- **Métrica de contrapeso (*Guardrail Metric*):** Límite de seguridad que impide mejoras artificiales (ej.: aumentar conversión a base de descuentos que destruyen margen o subir volumen de envíos deteriorando la calidad).
- **Análisis por cohortes:** Agrupación de clientes según la fecha o canal de adquisición para observar su comportamiento real de recompra y retención a lo largo del tiempo.

**Ejemplo práctico realista**
Un e-commerce de café de especialidad en Madrid celebraba cada mes un récord de "tráfico web" y "pedidos totales" (métricas vanidosas/incompletas) mientras su caja se tensaba. Al construir un árbol de KPIs vinculado a su *Business Plan*, incorporaron **margen de contribución neto tras coste de adquisición (CAC) y devoluciones** y **tasa de recompra a 60 días por cohorte**. Descubrieron que sus anuncios más virales atraían cazadores de descuentos no rentables y redirigieron la inversión hacia canales con mayor valor de vida del cliente (LTV).

**Errores frecuentes**
- Copiar plantillas genéricas de 35 KPIs de internet sin conectarlas con el modelo de negocio real de la empresa.
- Incentivar a un equipo por un único KPI sin métrica de contrapeso (ej.: bonificar solo ventas brutas provoca descuentos agresivos, morosidad o devoluciones).
- Presentar promedios globales que ocultan la realidad (un margen medio del 25 % puede esconder un canal al 45 % y otro perdiendo dinero al -5 %).

**Preguntas que el alumnado debería poder responder**
- ¿Cómo distinguir rápidamente una métrica vanidosa de un verdadero KPI accionable?
- ¿Qué combinación de indicadores *leading*, *lagging* y *guardrail* utilizaríais para vigilar la rentabilidad de vuestro departamento?

---

### 3.3. La escalera de la analítica avanzada: de describir el pasado a optimizar el futuro

**Explicación breve y clara**
No todas las empresas necesitan modelos complejos de *machine learning* desde el primer día. La analítica madura progresivamente por cuatro peldaños: **descriptiva** (qué pasó), **diagnóstica** (por qué pasó), **predictiva** (qué es probable que pase) y **prescriptiva** (qué acción óptima conviene tomar). El secreto en una pyme es exprimir primero valor rápido en los peldaños descriptivo y diagnóstico —con datos limpios del Tema 2 y arquitectura proporcional del Tema 4— y subir a analítica predictiva o prescriptiva solo en los 2 o 3 casos de uso con mayor impacto económico.

| Nivel de analítica | Pregunta que responde | Ejemplo práctico en pyme | Requisitos previos clave |
| --- | --- | --- | --- |
| **1. Descriptiva** | ¿Qué ha ocurrido? | Cuadro de mando semanal de ventas, margen, stock y rotación por tienda | Datos consolidados y glosario común (Tema 2) |
| **2. Diagnóstica** | ¿Por qué ocurrió? | Análisis de cohortes, segmentación RFM y causas de devolución por talla/proveedor | Cruce de fuentes (ERP + CRM + incidencias + *open data*) |
| **3. Predictiva** | ¿Qué es probable que ocurra? | Previsión de demanda por SKU/temporada; probabilidad de fuga (*churn*) de clientes B2B | Histórico limpio suficiente (≥ 18-24 meses) y variables explicativas |
| **4. Prescriptiva** | ¿Qué debemos hacer para optimizar? | Recomendación automática de reposición de stock, precios dinámicos o rutas de reparto | Modelos validados + integración en procesos operativos + supervisión humana |

**Conceptos clave**
- Escalera de valor analítico (descriptiva → diagnóstica → predictiva → prescriptiva).
- Segmentación accionable (ej.: modelo **RFM** — Recencia, Frecuencia y Valor Monetario — para priorizar acciones comerciales).
- *Machine Learning* e IA aplicada al negocio (conectando con el Bloque 9) con retorno medible (ROI).
- Regla de oro en pymes: "Un buen análisis diagnóstico ejecutado a tiempo vale más que un algoritmo predictivo perfecto que nadie usa".

**Definiciones necesarias**
- **Segmentación RFM:** Técnica analítica sencilla y muy potente para clasificar clientes según cuándo compraron por última vez (*Recency*), cuántas veces compran (*Frequency*) y cuánto gastan (*Monetary*).
- **Analítica predictiva:** Uso de técnicas estadísticas o modelos de aprendizaje automático sobre datos históricos para estimar probabilidades o valores futuros (demanda, impago, abandono).
- **Analítica prescriptiva:** Generación de recomendaciones concretas de decisión considerando restricciones operativas, costes y objetivos de negocio.

**Ejemplo práctico realista**
Una pyme distribuidora de recambios de climatización en Sevilla quería contratar un proyecto caro de IA prescriptiva para precios dinámicos. Al evaluar su madurez real, comprobaron que primero podían lograr una gran mejora con analítica diagnóstica (segmentación RFM de instaladores + análisis de artículos con stock muerto > 180 días) y luego pasar a un modelo sencillo de previsión de demanda estacional cruzado con temperaturas abiertas de AEMET (Tema 1).

**Errores frecuentes**
- Intentar saltar directamente al peldaño predictivo/IA sin tener resuelta la calidad básica del dato ni la analítica descriptiva fiable.
- Construir modelos predictivos técnicamente precisos que nunca se integran en la rutina de Compras, Ventas o Operaciones (se quedan en un PowerPoint).
- Ignorar los límites éticos y de privacidad (Tema 3) en decisiones automatizadas sobre personas (clientes o empleados).

**Preguntas que el alumnado debería poder responder**
- ¿En qué peldaño de la escalera analítica se encuentra hoy realmente vuestra empresa y cuál sería el salto de mayor retorno?
- ¿Por qué la segmentación RFM suele ser una de las iniciativas de analítica más rentables y rápidas para una pyme?

---

### 3.4. Cultura de datos y ventaja competitiva conectada al Business Plan

**Explicación breve y clara**
La tecnología se puede comprar en semanas; una **cultura de datos** y un **efecto volante de datos (*data flywheel*)** son mucho más difíciles de copiar por la competencia y constituyen una auténtica ventaja competitiva. Para cerrar el programa conectando con el **Bloque 1 (*Business Plan*)**, los datos deben dejar de verse como un coste de soporte informático para convertirse en un activo estratégico que mejora tres frentes del plan de negocio: **crecimiento de ingresos** (personalización, retención, nuevos servicios), **eficiencia y margen** (reducción de mermas, optimización de compras/CAC) y **diferenciación/monetización** (productos inteligentes o servicios de valor añadido basados en datos).

**Conceptos clave**
- Pilares de la cultura de datos: ejemplo visible de la dirección, alfabetización en datos (*data literacy*), acceso democratizado pero gobernado (self-service BI con seguridad) y seguridad psicológica para aprender de datos "incómodos".
- Estrategia de datos (*Data Strategy*): siempre subordinada a la estrategia de negocio (nunca un fin en sí misma).
- Efecto volante de datos (*Data Flywheel*): mejores datos → mejor producto/servicio → más clientes y uso → más y mejores datos.
- Matriz Valor frente a Esfuerzo para priorizar casos de uso de datos en el *Business Plan*.

**Definiciones necesarias**
- **Alfabetización en datos (*Data Literacy*):** Capacidad de las personas de toda la organización (no solo analistas) para leer, interpretar, cuestionar y comunicar decisiones utilizando datos.
- **Democratización gobernada del dato:** Facilitar que cada mando intermedio y equipo acceda de forma ágil a los datos e informes que necesita para decidir, respetando permisos, definiciones oficiales y privacidad.
- **Ventaja competitiva basada en datos:** Diferenciación sostenible obtenida cuando una empresa aprende más rápido que sus competidores gracias a sus datos propios combinados con datos del entorno, reduciendo costes, acertando más en producto o reteniendo mejor a sus clientes.

**Ejemplo práctico realista**
Una pyme navarra fabricante de maquinaria agrícola conectada empezó recogiendo datos de uso y averías para mejorar su propio servicio técnico (eficiencia interna). Dos años después, al consolidar históricos limpios y anónimos de miles de horas de operación, lanzó un servicio de suscripción de mantenimiento preventivo y asesoramiento de consumo para sus clientes (nueva línea de ingresos recurrentes incorporada directamente a su *Business Plan*), logrando retener cuentas frente a competidores asiáticos más baratos.

**Errores frecuentes**
- Redactar una "Estrategia de Datos" llena de tecnología y siglas, totalmente desconectada de los objetivos de facturación, margen y cliente del *Business Plan*.
- Castigar a los equipos cuando los datos muestran una mala noticia (provoca maquillaje de cifras y retorno a la opacidad).
- Capacitar solo a un perfil técnico aislado sin elevar el nivel mínimo de *data literacy* de mandos intermedios y dirección.

**Preguntas que el alumnado debería poder responder**
- ¿Cómo transforma una cultura de datos la forma de revisar y actualizar el *Business Plan* trimestralmente?
- ¿Qué tres barreras culturales concretas frenan hoy el uso efectivo de datos en vuestra pyme y qué ritual directivo podría desbloquearlas?

---

## 4. Metodología didáctica

Secuencia completa para una sesión de **4 horas (240 minutos exactos)** en modalidad híbrida, diseñada como cierre integrador del Bloque 10 y del programa completo.

| Fase | Tiempo | Qué hace el formador | Qué hace el alumnado |
| --- | --- | --- | --- |
| **1. Apertura y activación** | 25 min | Aplica diagnóstico rápido sobre madurez cultural y facilita la Actividad 1 (*Autopsia de un cuadro de mando inútil*). Enlaza los 4 temas previos del Bloque 10 con la estrategia. | Revisa un cuadro de mando saturado de métricas vanidosas, elimina el ruido y debate qué decisiones reales quedan sin responder. |
| **2. Exposición breve / microlearning (Parte I)** | 30 min | Expone *data-driven* frente a *data-informed*, efecto HiPPO, sesgos, experimentación (A/B) y diseño de árboles de KPIs (*North Star*, *leading*, *lagging*, *guardrail*). | Contrasta las métricas actuales de su área con la tabla vanidosas vs. accionables e identifica un sesgo recurrente en sus reuniones. |
| **3. Actividad práctica de diseño de KPIs** | 35 min | Dirige la Actividad 2 (*Del Business Plan al Árbol de KPIs*) guiando la traducción de un objetivo estratégico a palancas medibles con contrapeso. | En parejas, construye un árbol de métricas con 1 *North Star*, 2 *lagging*, 3 *leading* y 2 *guardrail*, definiendo el umbral de alerta y la acción asociada. |
| **4. Exposición breve / microlearning (Parte II)** | 25 min | Presenta la escalera analítica (descriptiva a prescriptiva), cultura de datos, *data literacy* y efecto volante de ventaja competitiva conectado al Bloque 1 (*Business Plan*). | Sitúa a su organización en la matriz de madurez analítica y anota 2 palancas de ventaja competitiva basadas en datos. |
| **Descanso estructurado** | 15 min | Pausa activa y preparación de salas y plantillas para el caso integrador final. | Descansa y comparte aprendizajes acumulados de todo el Bloque 10. |
| **5. Análisis de caso práctico integrador** | 50 min | Presenta el caso **ModaSostenible Mediterránea S.L.** (empresa con datos y cloud ya listos pero bloqueada por cultura HiPPO y métricas erróneas) y acompaña a los equipos. | En equipos de 3-4 personas, diagnostica la causa real de la caída de margen, rediseña el sistema de KPIs, prioriza iniciativas analíticas y diseña el plan cultural a 6 meses. |
| **6. Discusión guiada y puesta en común** | 25 min | Modera presentaciones ejecutivas (simulando Comité de Dirección), confronta priorización valor/esfuerzo y conecta explícitamente con todo el recorrido del programa (Bloques 1 a 10). | Presenta su estrategia de datos para ModaSostenible, defiende sus decisiones frente a preguntas del "fundador escéptico" y enriquece su enfoque. |
| **7. Actividad de transferencia final del programa** | 25 min | Facilita la Actividad 3 (*One-Page Data Strategy conectada a mi Business Plan*), que sintetiza los 5 temas del Bloque 10 y enlaza de vuelta con el Bloque 1. | Redacta su Estrategia de Datos de 1 página para su empresa/proyecto integrando objetivos de negocio, 5 KPIs clave, 2 casos de uso priorizados, gobierno/privacidad y ritual cultural. |
| **8. Síntesis final y cierre del programa** | 10 min | Realiza el cierre global del Bloque 10 y del Programa de Dirección, Innovación y Negocios Digitales; indica entregables finales y celebra hitos de aprendizaje. | Completa su autoevaluación de cierre y formula su compromiso ejecutivo de los próximos 90 días. |
| **TOTAL** | **240 min** | — | — |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Autopsia de un cuadro de mando inútil

- **Nombre:** Autopsia de un cuadro de mando lleno de ruido.
- **Objetivo:** Reconocer métricas vanidosas, ausencia de contexto y desconexión entre informes y decisiones reales en la dirección de pymes.
- **Instrucciones para el alumnado:**
  1. Observa el ejemplo de cuadro de mando mensual proyectado (que contiene 10 indicadores típicos como: *visitas web acumuladas, seguidores en Instagram, correos enviados, facturación bruta sin margen, número de reuniones comerciales, descargas de catálogo, nota media global sin desglose...*).
  2. Individualmente (6 minutos), tacha las 4 métricas más vanidosas y señala 3 preguntas directivas críticas que ese informe **es incapaz de responder**.
  3. En plenario (14 minutos), decidimos qué 3 indicadores nuevos sustituirían el ruido y qué decisión concreta activarían.
- **Materiales necesarios:** Diapositiva o ficha impresa con el cuadro de mando "defectuoso" y pizarra.
- **Tiempo estimado:** 20 minutos (dentro de los 25 min de apertura).
- **Rol del formador:** Destacar que "medir mucho" no es "dirigir con datos" y que el exceso de gráficos suele esconder falta de foco estratégico.
- **Producto o entregable esperado:** Lista consensuada de métricas descartadas y 3 preguntas de decisión de alto impacto.
- **Criterios de éxito:** El alumnado identifica claramente métricas vanidosas y exige contexto (márgenes, segmentación, evolución temporal o contrapesos).

### Actividad 2 (Aplicación): Del Business Plan al Árbol de KPIs accionable

- **Nombre:** Del *Business Plan* al Árbol de KPIs accionable.
- **Objetivo:** Traducir un objetivo estratégico de negocio en un sistema equilibrado de indicadores con metas, responsables y protocolo de reacción.
- **Instrucciones para el alumnado:**
  1. En parejas (25 minutos), elegid uno de los 3 retos de negocio incluidos en la **Ficha de trabajo 8.2** (A: Rentabilizar un e-commerce con alta tasa de devoluciones; B: Reducir la fuga de clientes en un SaaS B2B; C: Mejorar la rentabilidad por proyecto en una empresa de servicios técnicos).
  2. Construid su **Árbol de KPIs**:
     - 1 *North Star Metric* (o objetivo central de valor).
     - 2 indicadores *lagging* (resultado financiero/negocio).
     - 3 indicadores *leading* (palancas operativas semanales).
     - 2 indicadores *guardrail* (contrapesos para evitar efectos perversos).
  3. Para al menos 2 indicadores *leading*, rellenad la regla de acción: *"Si el indicador baja de [X], el responsable [Y] ejecuta [Z] en menos de [plazo]"*.
  4. Intercambio rápido de 2 ejemplos en plenario (10 minutos).
- **Materiales necesarios:** Ficha de trabajo 8.2 (pizarra colaborativa o papel A3).
- **Tiempo estimado:** 35 minutos.
- **Rol del formador:** Verificar que cada KPI *leading* es realmente influenciable por el equipo semanalmente y que existen contrapesos que protegen margen y experiencia de cliente.
- **Producto o entregable esperado:** Árbol de KPIs completo con reglas de decisión asociadas.
- **Criterios de éxito:** Cero métricas vanidosas, vínculo causal lógico entre palancas *leading* y resultado *lagging*, presencia de *guardrails* y acciones concretas ante desvíos.

### Actividad 3 (Transferencia integradora a la realidad laboral): One-Page Data Strategy conectada al Business Plan

- **Nombre:** Estrategia de Datos en una página (*One-Page Data Strategy*) para mi pyme o proyecto.
- **Objetivo:** Integrar todos los aprendizajes del Bloque 10 (Open Data, Gestión, Privacidad, Almacenamiento y Estrategia) al servicio del *Business Plan* trabajado desde el Bloque 1.
- **Instrucciones para el alumnado:**
  1. Toma como referencia tu empresa actual o el proyecto de emprendimiento desarrollado a lo largo del programa (Bloque 1).
  2. Completa la **Plantilla One-Page Data Strategy** (apartado 8.3) definiendo:
     - 2 objetivos prioritarios del *Business Plan* a 12 meses.
     - 5 KPIs clave (equilibrando *leading*, *lagging* y *guardrail*).
     - 2 casos de uso analíticos priorizados en matriz Valor/Esfuerzo (indicando nivel de la escalera analítica y si integran *open data*).
     - Requisitos mínimos de base: calidad/propietario (Tema 2), privacidad/RGPD (Tema 3) y almacenamiento (Tema 4).
     - 2 acciones concretas de cultura de datos y rituales de seguimiento en los próximos 90 días.
- **Materiales necesarios:** Plantilla del apartado 8.3 (editable digital o impresa).
- **Tiempo estimado:** 25 minutos en sesión (con pulido final asíncrono para entrega integradora del Bloque 10).
- **Rol del formador:** Garantizar que la estrategia nace de los objetivos del *Business Plan* (y no de modas tecnológicas) y que el plan a 90 días es realista para una pyme.
- **Producto o entregable esperado:** Documento ejecutivo *One-Page Data Strategy* listo para presentar a dirección o socios.
- **Criterios de éxito:** Alineación explícita con el *Business Plan*, coherencia transversal con los Temas 1-4, KPIs accionables y hoja de ruta realista a 90 días.

---

## 6. Caso práctico

### Contexto empresarial
**ModaSostenible Mediterránea S.L.** es una marca omnicanal catalana de calzado ecológico y accesorios con sede en Barcelona, 48 empleados, 3 tiendas físicas (Barcelona, Madrid y Valencia) y una tienda online que vende en España, Francia y Alemania (facturación anual: 7,8 millones de euros). A diferencia de muchas pymes, hace un año ya hicieron bien los deberes técnicos: limpiaron su CRM y ERP, cumplen el RGPD en región UE y centralizan sus datos en un *Data Warehouse* ligero en la nube conectado a cuadros de mando.

### Situación o problema
A pesar de tener "datos limpios y buena tecnología", la rentabilidad neta ha caído del 11 % al 4 % en los últimos 12 meses. En el comité de dirección nadie mira el cuadro de mando antes de decidir:
- El fundador y director general (efecto **HiPPO**) insiste en lanzar 14 modelos nuevos cada temporada "por olfato de tendencia", aunque 6 de ellos acaban liquidándose al 50 % de descuento.
- El equipo de Marketing tiene su bonus ligado únicamente a **facturación bruta online y visitas web**, por lo que abusa de códigos de descuento y anuncios agresivos que disparan las devoluciones.
- Las 3 tiendas físicas no comparten datos de probadores ni devoluciones con el equipo de producto y ven el cuadro de mando como una herramienta "para controlarles y regañarles".
- El recién contratado analista de datos pasa el 80 % de su tiempo atendiendo peticiones aisladas de última hora ("sácame un Excel para convencer a Dirección") y propone ahora comprar una costosa plataforma de "IA prescriptiva" de 45.000 €/año.

### Datos disponibles

**A. Extracto real de los últimos 12 meses (Data Warehouse corporativo)**

| Segmento / Canal | Facturación bruta | Descuento medio aplicado | Tasa de devolución | Coste adquisición (CAC) | Margen neto tras devoluciones y CAC | Recompra a 12 meses |
| --- | --- | --- | --- | --- | --- | --- |
| **Online — Clientes nuevos (campañas descuento)** | 2,9 M€ | 22 % | 38 % | 41 € | **-6 % (pérdidas)** | 11 % |
| **Online — Clientes recurrentes (CRM/Email)** | 1,8 M€ | 6 % | 14 % | 5 € | **+24 %** | 46 % |
| **Online — Alemania (envío y devolución gratis)** | 1,1 M€ | 12 % | 52 % | 48 € | **-14 % (pérdidas)** | 15 % |
| **Tiendas físicas (3 locales)** | 2,0 M€ | 8 % | 7 % | 14 € (atribuido) | **+19 %** | 34 % |

**B. Hallazgos adicionales ocultos en los datos que nadie había cruzado:**
- El 70 % de las devoluciones online se concentran en **3 modelos concretos con tallaje estrecho** (donde el cliente pide dos tallas y devuelve una) y en Alemania por la política de devolución gratuita sin umbral.
- El 20 % de los modelos del catálogo (clásicos atemporales) genera el **68 % del margen neto total**.
- Los clientes que compran en tienda física y luego se registran en el club de fidelización tienen un LTV 2,4 veces superior al comprador puramente promocional online.

### Preguntas de análisis
1. ¿Por qué tener un *Data Warehouse* limpio y cuadros de mando no ha impedido que ModaSostenible pierda rentabilidad? Identifica al menos **4 fallos estratégicos y culturales**.
2. ¿Qué métricas estaban deformando el comportamiento del equipo de Marketing y qué nuevo **Árbol de KPIs** (con *guardrails* claros) propondríais?
3. ¿Aprobaríais ahora la plataforma de "IA prescriptiva" de 45.000 €/año propuesta por el analista? Sitúa qué iniciativas de **analítica diagnóstica y predictiva ligera** generarían mucho más retorno en los próximos 6 meses.
4. ¿Cómo abordaríais la gestión del cambio con (a) el fundador (efecto HiPPO) y (b) los responsables de las 3 tiendas físicas para construir una verdadera cultura de datos sin generar rechazo?

### Tarea a realizar
En equipos de 3-4 personas (50 minutos), preparad una **Presentación Ejecutiva de Estrategia de Datos (6 meses) para el Comité de Dirección de ModaSostenible Mediterránea S.L.** que incluya:
1. **Diagnóstico de impacto inmediato:** 3 decisiones de negocio respaldadas por los datos de la tabla para recuperar el margen neto hacia el 10-12 % (catálogo, política de descuentos/Alemania y foco en recurrencia/omnicanalidad).
2. **Nuevo sistema de KPIs e incentivos:** 1 *North Star Metric*, 2 *lagging*, 3 *leading* y 2 *guardrails* (corrigiendo el incentivo perverso de Marketing).
3. **Hoja de ruta analítica (Matriz Valor/Esfuerzo):** Qué hacer antes de pensar en IA prescriptiva (ej.: segmentación RFM, análisis de causas de devolución, piloto A/B de guía de tallas y política de devoluciones en Alemania, previsión sencilla de reposición).
4. **Plan de cultura de datos y rituales directivos:** Cómo pasar de "datos para regañar o justificar" a "datos para experimentar y decidir".

### Posibles soluciones o criterios de análisis
- **Diagnóstico estratégico clave:** El problema de ModaSostenible no es tecnológico ni de falta de datos; es de **estrategia, incentivos mal diseñados y cultura HiPPO**. Están subvencionando ventas no rentables (descuentos online -6 % y Alemania -14 % con 52 % de devoluciones) mientras desatienden sus motores reales de margen (clientes recurrentes +24 %, tiendas físicas +19 % y modelos clásicos).
- **Decisiones inmediatas basadas en datos:**
  1. Reasignar parte del presupuesto de captación agresiva hacia retención/recompra (segmentación RFM y conversión omnicanal tienda-club) y diseñar un **test A/B** en Alemania (ej.: guía interactiva de tallas + coste parcial de devolución o envío gratis solo por encima de cierto ticket) antes de seguir perdiendo un 14 % por pedido.
  2. Reducir el lanzamiento "por olfato" de 14 modelos a un esquema mixto: proteger el núcleo rentable (clásicos) y validar nuevos diseños mediante preventas o tiradas piloto cortas medidas por tasa de venta a precio completo (*full-price sell-through*).
  3. Atajar el problema de tallaje de los 3 modelos problemáticos (causa raíz del 70 % de devoluciones).
- **Nuevo sistema de KPIs (corrigiendo incentivos):**
  - *North Star:* Clientes activos rentables con compra recurrente (o Margen de contribución neto por cliente activo).
  - *Lagging:* Margen neto tras devoluciones y CAC; LTV / CAC por canal y país.
  - *Leading:* % ventas a precio completo (*full-price*); tasa de devolución por SKU/talla; tasa de conversión a segunda compra en 90 días; captación de clientes de tienda en el club de fidelización.
  - *Guardrails:* Límite máximo de descuento medio (< 10 %) y tope de devoluciones (< 20 %); el bonus de Marketing pasa de "facturación bruta" a **margen de contribución neto generado**.
- **Decisión sobre la IA de 45.000 €:** **Rechazar/posponer**. Primero hay que explotar analítica diagnóstica ya disponible (RFM, rentabilidad por SKU, causa de devoluciones) y pequeños pilotos A/B de coste mínimo; más adelante, con cultura consolidada, abordar predicción de demanda y tallas por tienda.
- **Cambio cultural y rituales:**
  - Con el fundador: no enfrentarse frontalmente a su intuición creativa, sino canalizarla mediante la regla del "piloto con hipótesis" (cada apuesta de diseño se lanza con presupuesto acotado y criterios previos acordados de éxito/parada).
  - Con tiendas físicas: incluir a los encargados en el diseño de sus propios indicadores útiles (stock de tallas faltantes, fidelización), formar en *data literacy* básica (sesión de 2 h) y usar las reuniones quincenales para resolver obstáculos, nunca para señalar culpables.
  - Con el analista: proteger el 60 % de su tiempo en proyectos priorizados del *Business Plan* en lugar de atender peticiones reactivas de Excel.

### Preguntas de reflexión final
- ¿En qué medida se parece el incentivo de Marketing o la dinámica de decisiones de ModaSostenible a lo que ocurre hoy en vuestra empresa?
- ¿Qué diferencia habría supuesto para ModaSostenible haber definido esta estrategia de datos **desde el principio** al redactar su *Business Plan*?

---

## 7. Evaluación

### Evaluación diagnóstica breve (inicio de sesión, 5 min)
1. En las reuniones clave de vuestra empresa, cuando un dato contradice la opinión de la dirección, ¿qué suele pesar más al final? (El dato / La opinión / Depende de quién lo presente).
2. ¿Cuántos KPIs revisáis habitualmente en vuestro seguimiento mensual? (Ninguno / Entre 3 y 8 bien definidos / Más de 20 sin foco claro).
3. ¿En qué peldaño analítico situarías hoy a tu pyme? (1. Descriptiva / 2. Diagnóstica / 3. Predictiva / 4. Prescriptiva).
4. Verdadero o falso: "Para tomar decisiones basadas en datos, primero necesitamos implantar inteligencia artificial predictiva".

### Evaluación formativa durante la sesión
- Contrastar en la **Actividad 1** y la **Actividad 2** que el alumnado elimina métricas vanidosas, distingue claramente *leading* de *lagging* y añade *guardrails* realistas.
- Durante el caso **ModaSostenible Mediterránea S.L.**, verificar que los equipos detectan la trampa de incentivos, rechazan la inversión prematura en IA prescriptiva y proponen medidas concretas de cultura de datos y experimentación.

### Evaluación sumativa al final del tema (y cierre del Bloque 10)
1. **Cuestionario integrador de 8 preguntas situacionales** sobre estrategia de datos, KPIs, sesgos, escalera analítica y conexión con los Temas 1-4 (30 %).
2. **One-Page Data Strategy conectada al Business Plan (Actividad 3)** aplicada a la empresa o proyecto emprendedor del participante (70 %), actuando como entregable integrador del Bloque 10.

### Rúbrica de evaluación

| Criterio | Insuficiente (0-4) | En desarrollo (5-6) | Adecuado (7-8) | Destacado (9-10) |
| --- | --- | --- | --- | --- |
| **Alineación con el Business Plan y ventaja competitiva** | Propone iniciativas tecnológicas desconectadas de los objetivos de negocio o rentabilidad. | Conecta genéricamente con metas comerciales sin precisar cómo los datos generan ventaja competitiva. | Vincula claramente 2 objetivos del *Business Plan* con palancas concretas de ingresos, margen o diferenciación. | Articula una ventaja competitiva defendible (*data flywheel*) con impacto económico claro y métricas de retorno. |
| **Calidad del sistema de KPIs y toma de decisiones** | Incluye principalmente métricas vanidosas o listados extensos sin responsables ni umbrales. | Define algunos indicadores válidos pero confunde *leading*/*lagging* u omite métricas de contrapeso. | Diseña un árbol de 5-7 KPIs equilibrado (*leading*, *lagging* y *guardrail*) con umbrales y decisiones asociadas. | Construye un sistema de KPIs impecable que evita incentivos perversos e incorpora experimentación/tests A/B. |
| **Priorización analítica e integración del Bloque 10** | Propone soluciones predictivas/IA irreales ignorando calidad, privacidad o almacenamiento. | Selecciona casos de uso analíticos razonables pero sin conectar con gobierno, RGPD o arquitectura. | Prioriza casos de uso acordes a la madurez analítica integrando calidad/propietarios (T2), RGPD (T3) y arquitectura (T4). | Integra magistralmente *open data* (T1), gobernanza (T2), privacidad (T3), almacenamiento proporcional (T4) y analítica por fases. |
| **Cultura de datos y plan de acción a 90 días** | Omite el factor humano o plantea deseos genéricos ("fomentar cultura de datos"). | Menciona formación general sin rituales directivos ni responsables definidos. | Propone rituales concretos de revisión, acciones de *data literacy* y pasos viables a 90 días. | Anticipa resistencias culturales reales (HiPPO, silos) y define un plan de adopción medible y ejecutable desde el lunes. |

### Actividad de autoevaluación y reflexión final del programa
Como cierre reflexivo del Bloque 10 y del programa completo, cada participante responde:
- *¿Qué decisión estratégica de mi empresa o Business Plan ha cambiado tras completar el Bloque 10 de Gestión de Datos?*
- *¿Qué métrica vanidosa voy a eliminar y qué KPI adelantado (leading) con contrapeso voy a introducir en mi próxima reunión de seguimiento?*
- *Mirando todo el recorrido del Programa de Dirección, Innovación y Negocios Digitales (del Bloque 1 al Bloque 10), ¿cuáles son mis 3 compromisos ejecutivos innegociables para los próximos 90 días?*

---

## 8. Materiales y recursos

### 8.1. Guion de diapositivas (estructura slide por slide)

1. **Slide 1 — Portada:** Bloque 10 · Tema 5: Estrategia y los datos. Convertir información en ventaja competitiva sostenible (Cierre del programa).
2. **Slide 2 — El arco completo del Bloque 10:** Open Data (T1) → Gestión/Gobierno (T2) → Privacidad (T3) → Almacenamiento (T4) → **Estrategia y Valor (T5)**.
3. **Slide 3 — Actividad 1 (Autopsia de un cuadro de mando inútil):** Por qué tener muchos gráficos no equivale a decidir con datos.
4. **Slide 4 — Data-Driven vs. Data-Informed y sesgos directivos:** Efecto HiPPO, sesgo de confirmación, correlación vs. causalidad y tests A/B.
5. **Slide 5 — Arquitectura de KPIs:** *North Star Metric*, *leading*, *lagging*, *guardrails* y muerte a las métricas vanidosas.
6. **Slide 6 — Actividad 2 (instrucciones):** Del *Business Plan* al Árbol de KPIs accionable.
7. **Slide 7 — La escalera de madurez analítica:** Descriptiva, diagnóstica, predictiva y prescriptiva (y cuándo parar en cada peldaño en una pyme).
8. **Slide 8 — Segmentación accionable (RFM) y Matriz Valor vs. Esfuerzo:** Cómo elegir los 2 primeros casos de uso con mayor ROI.
9. **Slide 9 — Cultura de datos y Data Literacy:** Por qué la estrategia de datos suele fallar en las personas, no en el software.
10. **Slide 10 — Ventaja competitiva y efecto volante (*Data Flywheel*):** Conexión directa de vuelta con el *Business Plan* (Bloque 1).
11. **Slide 11 — Caso práctico integrador: ModaSostenible Mediterránea S.L.:** Datos limpios, cloud funcionando... y margen hundido.
12. **Slide 12 — Debriefing ModaSostenible:** Decisiones de margen, rediseño de incentivos/KPIs y plan cultural a 6 meses.
13. **Slide 13 — Actividad 3 (Entregable integrador):** *One-Page Data Strategy* conectada a vuestro *Business Plan*.
14. **Slide 14 — Cierre del Programa:** Síntesis de los 10 bloques, mapa de competencias adquiridas y compromiso a 90 días.

### 8.2. Ficha de trabajo: Del Business Plan al Árbol de KPIs (Actividad 2)

Elegid uno de los siguientes retos empresariales y construid su árbol de métricas:

- **Reto A (E-commerce de moda/hogar):** Facturación estancada en 2 M€, alto gasto en publicidad pagada y 28 % de devoluciones. Objetivo del *Business Plan*: aumentar el margen neto en 4 puntos porcentuales en 12 meses.
- **Reto B (Pyme SaaS B2B de suscripción):** 350 empresas clientes, buen ritmo de altas comerciales pero un 22 % de bajas durante los primeros 4 meses. Objetivo del *Business Plan*: duplicar la retención neta sin disparar el coste de soporte.
- **Reto C (Empresa de instalaciones/servicios técnicos B2B):** 40 técnicos, facturación creciente pero desviaciones constantes de horas y materiales respecto al presupuesto inicial. Objetivo del *Business Plan*: elevar la rentabilidad media por proyecto del 9 % al 16 %.

**Estructura a completar:**
- *North Star Metric:* ____________________________
- *2 KPIs Lagging:* ____________________________
- *3 KPIs Leading:* ____________________________
- *2 KPIs Guardrail (contrapeso):* ____________________________
- *2 Reglas de acción ("Si baja de X → Responsable Y hace Z en plazo P"):* ____________________________

### 8.3. Plantilla práctica replicable: One-Page Data Strategy (conectada al Business Plan)

```markdown
ONE-PAGE DATA STRATEGY — [NOMBRE DE LA EMPRESA / PROYECTO]
Fecha: ____________   Responsable: ________________________

1. OBJETIVOS DEL BUSINESS PLAN (BLOQUE 1) A 12 MESES
- Objetivo estratégico 1 (Ingresos / Crecimiento):
- Objetivo estratégico 2 (Margen / Eficiencia / Retención):

2. SISTEMA DE KPIS ACCIONABLES (MÁX. 5-6)
- North Star Metric:
- Lagging (resultados):
- Leading (palancas semanales):
- Guardrails (contrapesos de seguridad):

3. DOS CASOS DE USO ANALÍTICOS PRIORIZADOS (VALOR VS. ESFUERZO)
- Caso de uso 1 (Nivel: Descriptivo / Diagnóstico / Predictivo):
  * Decisión que mejora y retorno esperado:
  * Fuentes (internas + Open Data Tema 1):
- Caso de uso 2 (Nivel: Descriptivo / Diagnóstico / Predictivo):
  * Decisión que mejora y retorno esperado:
  * Fuentes (internas + Open Data Tema 1):

4. CIMIENTOS DEL BLOQUE 10 (REQUISITOS MÍNIMOS)
- Gestión y calidad (Tema 2): Data Owner asignado y 1 regla de calidad crítica.
- Privacidad y ética (Tema 3): Base legal, minimización y verificación de encargados.
- Almacenamiento (Tema 4): Arquitectura proporcional en región UE y copia 3-2-1-1-0.

5. CULTURA DE DATOS Y PLAN A 90 DÍAS
- Ritual de decisión (frecuencia, asistentes y orden del día basado en KPIs):
- Acción de Data Literacy para el equipo:
- Hito Día 30 / Día 60 / Día 90:
```

### 8.4. Lecturas y recursos recomendados
- **Lean Analytics (Alistair Croll y Benjamin Yoskovitz):** Referencia muy práctica para emprendedores y pymes sobre cómo elegir la métrica correcta en cada etapa del modelo de negocio y huir de las métricas vanidosas.
- **Data Strategy (Bernard Marr):** Guía directa y orientada a perfiles directivos sobre cómo alinear datos, analítica y resultados empresariales sin perderse en jerga técnica.
- **Competing on Analytics (Thomas H. Davenport y Jeanne G. Harris):** Clásico de referencia sobre cómo organizaciones de distintos sectores construyen ventajas competitivas sostenibles mediante analítica y cultura de datos.

### 8.5. Vídeos, artículos y fuentes adicionales *(Validar antes de utilizarse)*
> **Nota importante para el formador:** Validar la disponibilidad, vigencia de enlaces y contexto actualizado de los recursos externos antes de compartirlos con el alumnado.
- Artículos de *Harvard Business Review* / *MIT Sloan Management Review* sobre cultura *data-driven*, *data literacy* y errores frecuentes en estrategia de datos — *validar acceso abierto o licencia institucional antes de distribuir*.
- Guías divulgativas de `datos.gob.es` y la Oficina del Dato sobre estrategia y monetización de datos en pymes españolas — *validar enlaces activos*.
- Vídeos breves explicativos sobre *North Star Metric*, análisis RFM y tests A/B aplicados a pymes y comercio electrónico — *validar idioma, duración y calidad didáctica antes de la sesión*.

### 8.6. Glosario de términos clave

| Término | Definición operativa |
| --- | --- |
| **Data-Driven / Data-Informed** | Toma de decisiones guiada por evidencia empírica (*driven*) o combinando evidencia de datos con juicio estratégico y contexto cualitativo (*informed*). |
| **Efecto HiPPO** | Sesgo organizativo por el que prevalece la opinión de la persona mejor pagada o de mayor jerarquía sobre la evidencia objetiva. |
| **North Star Metric** | Métrica estrella que sintetiza el valor central entregado al cliente y alinea el crecimiento sostenible de toda la empresa. |
| **Métrica vanidosa** | Indicador llamativo que suele crecer con el tiempo pero no orienta decisiones ni refleja salud económica real. |
| **Leading / Lagging KPI** | Indicadores adelantados que permiten actuar a tiempo (*leading*) frente a indicadores retrasados que miden resultados ya cerrados (*lagging*). |
| **Guardrail Metric** | Métrica de contrapeso que protege la rentabilidad, calidad o experiencia de cliente al optimizar otro indicador. |
| **Análisis RFM** | Segmentación de clientes según Recencia, Frecuencia y Valor Monetario para personalizar acciones comerciales y de retención. |
| **Data Literacy** | Alfabetización en datos: competencia transversal para leer, cuestionar, interpretar y comunicar decisiones con datos. |
| **Data Flywheel** | Círculo virtuoso donde los datos mejoran el producto/servicio, atraen más uso y clientes y generan más datos que refuerzan la ventaja competitiva. |

---

## 9. Adaptaciones para modalidad híbrida

### Sesión presencial
- Realizar un breve juego de roles durante el debriefing del caso **ModaSostenible Mediterránea S.L.**: el formador interpreta al "fundador escéptico (HiPPO)" haciendo objeciones realistas ("en moda manda el instinto, no los números") para entrenar a los mandos intermedios en la defensa persuasiva y empática de decisiones basadas en datos.
- Cerrar los últimos 10 minutos con una ronda rápida de compromisos visibles ("Una métrica que elimino y una decisión basada en datos que implanto este mes") pegados en un mural final del programa.

### Sesión online síncrona
- Compartir la tabla de datos de **ModaSostenible** en una hoja de cálculo colaborativa por sala (*breakout room*) para que los equipos puedan calcular rápidamente el peso de cada canal en la pérdida de margen y simular el impacto de corregir Alemania o las devoluciones.
- Utilizar la función de pizarra compartida para construir visualmente los **Árboles de KPIs (Actividad 2)** con nodos diferenciados por color (*North Star*, *Lagging*, *Leading*, *Guardrail*).

### Sesión asíncrona
- Grabar un microvídeo de 12 minutos explicando cómo construir un **Árbol de KPIs con contrapesos** y otro de 10 minutos comentando paso a paso cómo rellenar la **One-Page Data Strategy** conectándola con el *Business Plan* del Bloque 1.
- Abrir un foro final de cierre del programa donde cada participante comparta un resumen ejecutivo de 10 líneas de su *One-Page Data Strategy* (anonimizando cifras sensibles si procede) y aporte una sugerencia constructiva de contrapeso (*guardrail*) o caso de uso a dos compañeros.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Integra y culmina **todo el recorrido del Bloque 10** (Open Data, Gestión y Gobierno, Privacidad y Almacenamiento) y recupera de forma explícita los contenidos de modelos de negocio, finanzas, marketing digital, operaciones, innovación, automatización e IA trabajados desde el **Bloque 1 hasta el Bloque 9**.
- **Competencias que desarrolla:** Pensamiento estratégico basado en evidencias, diseño de sistemas de control de gestión (*KPIs*), liderazgo del cambio hacia la cultura de datos, priorización de inversiones analíticas por ROI y comunicación ejecutiva.
- **Conexión con el tema anterior y cierre circular del plan de 10 bloques:**
  - *Tema anterior (Bloque 10, Tema 4 — Almacenamiento de datos):* Transforma la infraestructura ordenada, segura y proporcional del Tema 4 en decisiones rentables, experimentación y ventaja competitiva real.
  - *Cierre circular con el Bloque 1 (Business Plan):* El programa comenzó en el Bloque 1 formulando hipótesis de propuesta de valor, clientes, canales y rentabilidad en un *Business Plan*. Este último tema cierra el círculo demostrando que, en la economía digital, un *Business Plan* no es un documento estático: se mantiene vivo, se valida y se convierte en ventaja competitiva gracias a una estrategia de datos disciplinada.
- **Evidencia de aprendizaje que deja el alumnado:** Una **Estrategia de Datos de una página (*One-Page Data Strategy*)** conectada explícitamente con su *Business Plan* (Bloque 1), respaldada por un árbol de KPIs accionables, dos casos de uso priorizados y una hoja de ruta cultural y técnica a 90 días.

---

## Siguientes pasos para el formador

1. **Solicitar previamente que el alumnado traiga su Business Plan (Bloque 1):** Enviar un aviso 5 días antes de la sesión pidiendo que tengan a mano sus objetivos estratégicos del Bloque 1 (o los objetivos anuales de su empresa) para maximizar el aprovechamiento de la Actividad 3.
2. **Preparar el cuadro de mando "defectuoso" de la Actividad 1 y el Excel de ModaSostenible:** Tener lista la diapositiva de apertura y una hoja editable opcional con la tabla del caso práctico para quienes prefieran simular escenarios numéricos en directo.
3. **Validar lecturas y recursos complementarios:** Comprobar enlaces y accesibilidad de artículos o vídeos externos de `datos.gob.es` y fuentes de gestión antes de publicarlos en el campus.
4. **Preparar el cierre evaluativo del Bloque 10:** Activar en el campus virtual el cuestionario integrador de 8 preguntas, el espacio de entrega de la *One-Page Data Strategy* y la rúbrica visible para el alumnado.
5. **Ofrecer devolución ejecutiva personalizada:** Al evaluar la *One-Page Data Strategy* final, aportar a cada participante al menos 1 fortaleza destacable y 1 recomendación accionable concreta para sus próximos 90 días tras finalizar el programa.
