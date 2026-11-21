# Tema 5. Casos de uso en la industria

## 1. Ficha del tema

| Campo | Detalle |
| --- | --- |
| **Título del tema** | Tema 5. Casos de uso en la industria |
| **Bloque y posición dentro del programa** | Bloque 9: Big data — Posición 5 de 5 (cierre de bloque) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Mandos intermedios y emprendedores |
| **Nivel de dificultad** | Intermedio |
| **Prerrequisitos** | Haber completado los Temas 1 a 4 del Bloque 9 (5 V y arquitecturas, KPIs y gobernanza, metodologías ágiles en datos e inteligencia artificial aplicada). |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado será capaz de evaluar, priorizar y estructurar un plan de negocio realista para los principales casos de uso industriales y sectoriales de big data e IA (mantenimiento predictivo, optimización logística, personalización, prevención de fraude, previsión de demanda y eficiencia energética), integrando impacto financiero, requisitos de datos, arquitectura, gestión del cambio y retorno de la inversión (ROI). |

---

## 2. Objetivos de aprendizaje

Al concluir esta sesión, el alumnado será capaz de:

1. **Analizar** la mecánica de datos, los indicadores de impacto y los requisitos mínimos de implantación de los seis grandes casos de uso de big data e IA en la industria y los negocios digitales. *(Nivel de Bloom: Analizar)*
2. **Comparar** el valor económico, la complejidad técnica y el horizonte de retorno (*payback*) entre casos de uso orientados a eficiencia operativa (mantenimiento, logística, energía) y casos orientados a ingresos o protección del margen (demanda, personalización, fraude). *(Nivel de Bloom: Evaluar)*
3. **Calcular** un caso de negocio (*business case*) simplificado para un caso de uso de big data industrial estimando beneficios esperados, costes totales de propiedad (TCO) y riesgos de adopción. *(Nivel de Bloom: Aplicar)*
4. **Identificar** qué fuentes de datos externas y datos abiertos pueden enriquecer los casos de uso industriales para preparar la transición hacia ecosistemas de datos compartidos. *(Nivel de Bloom: Analizar)*
5. **Diseñar** una hoja de ruta integradora de casos de uso de big data e IA (12 meses) priorizada para una pyme industrial o de servicios, conectando arquitectura, KPIs, gobernanza, MVPs ágiles y modelos de IA. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Operaciones inteligentes: mantenimiento predictivo y eficiencia energética

**Explicación breve y clara**  
En pymes industriales, talleres avanzados, logística de frío y servicios con activos físicos, dos de las partidas que más erosionan el margen son las **paradas no planificadas de maquinaria** y la **factura energética**. El big data industrial (apoyado en sensores IoT, sistemas SCADA/MES y contadores inteligentes) permite pasar de reaccionar cuando una máquina se rompe o cuando llega la factura de la luz, a anticipar fallos antes de que paren la línea y programar los procesos intensivos en las franjas de menor coste y menor intensidad de carbono.

**Conceptos clave**  
- Evolución del mantenimiento: correctivo (reparar cuando rompe) -> preventivo (por calendario fijo) -> basado en condición -> predictivo (estimación de fallo inminente).
- Datos clave en planta: vibración, temperatura, amperaje, horas de ciclo, partes históricos de averías y repuestos.
- Indicadores industriales clave: OEE (*Overall Equipment Effectiveness*), MTBF (tiempo medio entre fallos), MTTR (tiempo medio de reparación) y coste energético por unidad producida (kWh/ud).
- Gestión energética basada en datos: monitorización sub-horaria por línea, detección de consumos fantasma (*stand-by*), curvas de carga y optimización tarifaria/autoconsumo solar.

**Definiciones necesarias**  
- **Mantenimiento predictivo:** Uso de datos de sensores y registros históricos de averías para estimar la probabilidad de fallo o la vida útil restante (*RUL*) de un componente crítico, permitiendo intervenir justo antes de la rotura.
- **OEE (Eficiencia General de los Equipos):** Indicador compuesto que multiplica Disponibilidad × Rendimiento × Calidad para medir cuánto aprovecha realmente una planta su capacidad productiva.
- **Consumo base o fantasma:** Energía consumida por máquinas, compresores o climatización cuando la línea no está produciendo (fugas de aire comprimido, arranques innecesarios o equipos en espera).

**Ejemplo práctico realista (pyme en transformación digital)**  
Una pyme de inyección de piezas metálicas en Navarra (85 empleados) instaló medidores eléctricos por máquina (inversión modesta sin necesidad de cambiar maquinaria) y cruzó las lecturas cada 15 minutos con los turnos de producción del ERP y el precio horario de la electricidad. En dos meses descubrieron que el 18 % de su consumo eléctrico ocurría en arranques fuera de hora y compresores encendidos los fines de semana; reprogramando los hornos de mayor potencia hacia horas valle y eliminando fugas, redujeron notablemente su coste energético por tonelada antes siquiera de abordar un proyecto complejo de sensores de vibración.

**Errores frecuentes**  
- Intentar implantar mantenimiento predictivo con *machine learning* sobre maquinaria que ni siquiera tiene digitalizados los partes históricos de averías (sin etiquetas de fallos pasados no se puede entrenar un modelo supervisado).
- Sensorizar todas las máquinas de la fábrica en vez de empezar por los 2 o 3 "cuellos de botella" cuya parada paraliza toda la planta.
- Desplegar paneles de consumo energético que solo mira dirección financiera a fin de mes en lugar de enviar alertas operativas al jefe de turno.

**Preguntas que el alumnado debería poder responder**  
- ¿Por qué conviene empezar a menudo por eficiencia energética o mantenimiento basado en umbrales antes de abordar modelos predictivos complejos?
- ¿Qué diferencia hay entre mantenimiento preventivo por calendario y mantenimiento predictivo?
- ¿Qué datos mínimos de planta deben existir antes de lanzar un piloto de mantenimiento predictivo?

---

### 3.2. Cadena de suministro orientada al dato: previsión de demanda y optimización logística

**Explicación breve y clara**  
La tensión entre "no quedarse sin stock" (que hace perder ventas) y "no acumular exceso de inventario" (que inmoviliza caja y genera obsolescencia o mermas) es universal en pymes comerciales e industriales. La **previsión de demanda** moderna sustituye la simple "media del año pasado" por modelos que combinan histórico de ventas, estacionalidad, promociones, plazos de proveedor y variables externas (festivos, meteorología). A su vez, la **optimización logística** utiliza datos de pedidos, volúmenes, ventanas de entrega, tráfico y capacidad de flota para reducir kilómetros en vacío, mejorar la puntualidad (*OTIF*) y bajar el coste por entrega.

**Conceptos clave**  
- Previsión de demanda (*demand forecasting*): series temporales, estacionalidad, efecto calendario/promociones y factores externos.
- Gestión de inventario: punto de pedido dinámico, stock de seguridad y clasificación ABC-XYZ (volumen de venta vs. variabilidad de la demanda).
- Optimización logística: enrutamiento dinámico de vehículos (*VRP*), consolidación de cargas, gestión de almacén (ubicación por rotación/*slotting*) y trazabilidad de última milla.
- Indicadores clave: error de previsión (MAPE/sesgo), rotación de stock, tasa de rotura, OTIF (*On-Time In-Full*) y coste logístico sobre ventas.

**Definiciones necesarias**  
- **MAPE (Error Porcentual Absoluto Medio):** Métrica habitual que mide en porcentaje cuánto se desvió la previsión de demanda respecto a la venta real (a menor porcentaje, mayor precisión).
- **OTIF (*On-Time In-Full*):** Porcentaje de pedidos entregados al cliente dentro del plazo acordado y con la cantidad/calidad completa sin incidencias.
- **Enrutamiento dinámico (*Vehicle Routing Problem*):** Cálculo automatizado de las rutas óptimas de reparto considerando capacidad de camiones, ventanas horarias de clientes, tráfico y costes de combustible/peajes.

**Ejemplo práctico realista (pyme en transformación digital)**  
Una distribuidora de bebidas y alimentación para hostelería en Málaga (105 empleados) planificaba las rutas de sus 22 camiones por zonas fijas históricas asignadas a cada chófer. Al integrar los pedidos del ERP con un optimizador SaaS de rutas basado en ventanas de entrega de bares y peso/volumen real de cada pedido, redujeron un 14 % los kilómetros recorridos y mejoraron su OTIF, mientras que al cruzar sus ventas históricas con la previsión de temperatura y puentes festivos ajustaron el stock de seguridad en bebidas frías antes de cada ola de calor (ejemplo ilustrativo de aplicación).

**Errores frecuentes**  
- Entrenar un modelo de previsión de demanda usando solo "unidades vendidas" sin corregir los periodos donde hubo rotura de stock (si no hubo producto en almacén, la venta fue cero, pero la demanda real no era cero).
- Optimizar rutas teóricamente perfectas ignorando restricciones reales de calle (zonas de carga y descarga, restricciones medioambientales de bajas emisiones o tiempos reales de espera en cada cliente).
- Querer predecir al detalle todas las referencias de baja rotación (clase C) en vez de concentrar el esfuerzo analítico en las referencias críticas de mayor impacto (clase A).

**Preguntas que el alumnado debería poder responder**  
- ¿Por qué las ventas pasadas durante una rotura de stock distorsionan la previsión futura de demanda?
- ¿Qué variables externas suelen mejorar de forma directa una previsión de demanda o una planificación logística?
- ¿Qué indicadores permiten comprobar si un proyecto de optimización logística realmente mejora el margen y el servicio al cliente?

---

### 3.3. Crecimiento y protección del margen: personalización comercial y prevención de fraude

**Explicación breve y clara**  
En el lado comercial y financiero del negocio digital, dos casos de uso destacan por su retorno directo sobre ingresos y pérdidas evitadas: la **personalización** y la **prevención de fraude/riesgo**. La personalización inteligente convierte los datos de interacción y compra en ofertas, contenidos, precios o momentos de contacto relevantes para cada segmento o cliente individual, aumentando conversión y valor de vida (*LTV*). La prevención de fraude y morosidad utiliza reglas dinámicas y detección de anomalías para identificar transacciones sospechosas, impagos B2B, suplantaciones o abusos internos antes de que el dinero salga de la empresa.

**Conceptos clave**  
- Personalización omnicanal: *Next Best Action* / *Next Best Offer*, precios y descuentos selectivos (*uplift modeling*), automatización de marketing basada en eventos reales.
- Métricas comerciales: tasa de conversión, valor de vida del cliente (LTV), retención, coste de adquisición (CAC) y margen incremental neto (no solo ingresos brutos).
- Prevención de fraude y riesgo crediticio: pagos online, fraude en devoluciones, facturación falsa de proveedores (fraude del CEO/facturas duplicadas), abuso promocional y *scoring* temprano de impago B2B.
- Equilibrio crítico entre experiencia de cliente (fricción mínima), privacidad y control del riesgo.

**Definiciones necesarias**  
- **Next Best Action (NBA):** Recomendación automatizada en tiempo real o periódico sobre cuál es el siguiente mensaje, canal u oferta más conveniente para un cliente concreto (que puede ser incluso *no* ofrecer descuento para no erosionar margen).
- **Uplift (impacto incremental):** Mejora real generada exclusivamente por la acción personalizada frente a un grupo de control que no recibió la acción (evita atribuir al algoritmo ventas que habrían ocurrido igualmente).
- **Fricción del cliente (*customer friction*):** Barreras añadidas en el proceso de compra o verificación (pasos extra, bloqueos preventivos) que reducen fraude pero, si son excesivas, ahuyentan a clientes legítimos.

**Ejemplo práctico realista (pyme en transformación digital)**  
Una pyme B2B de alquiler de maquinaria de obra en Valencia (70 empleados) sufría dos fugas de margen: descuentos comerciales concedidos de forma discrecional y un 2,4 % de impagos de pequeños contratistas nuevos. Implantaron dos casos de uso ligeros: (1) un sistema de alertas de riesgo crediticio que cruza el historial interno de pagos con ficheros externos de solvencia y señales tempranas (retraso >10 días en la primera factura), exigiendo fianza automática en perfiles de riesgo alto; y (2) personalización comercial en el CRM que sugiere a los vendedores ofertas combinadas (por ejemplo, alquiler de generador + mantenimiento in situ) según el tipo de obra del cliente, protegiendo el margen medio.

**Errores frecuentes**  
- Medir el éxito de la personalización por clics o ventas brutas regalando descuentos masivos que destruyen el margen neto (sin usar grupos de control para medir *uplift*).
- Cruzar la línea entre personalización útil y sensación de vigilancia invasiva o incumplimiento de consentimientos de privacidad *(nota para el formador: verificar siempre obligaciones vigentes bajo RGPD/LOPDGDD y normativa de comunicaciones comerciales —LSSI-CE en España— antes de impartir ejemplos de personalización)*.
- Implantar controles antifraude rígidos sin monitorizar la tasa de falsos positivos (clientes legítimos rechazados en el pago).

**Preguntas que el alumnado debería poder responder**  
- ¿Por qué es necesario un grupo de control (*uplift*) para saber si una campaña personalizada realmente genera dinero extra?
- ¿Qué tipos de fraude o fugas internas puede detectar una pyme B2B que no vende con tarjeta online?
- ¿Cómo equilibrar la eficacia antifraude con una buena experiencia de compra?

---

### 3.4. Del catálogo de casos de uso al *Business Case* y Roadmap integrador de 12 meses

**Explicación breve y clara**  
El mayor riesgo al cerrar un programa de big data no es la falta de ideas, sino querer lanzar cuatro casos de uso a la vez y no completar ninguno. Un mando intermedio o emprendedor necesita traducir cada oportunidad en un **Business Case sencillo pero riguroso** (beneficio conservador esperado vs. TCO completo y plazo de recuperación/*payback*) y ordenarlos en una **hoja de ruta de 12 meses** que encadene sinergias de datos: los mismos datos limpios de pedidos y planta que hoy sostienen un caso de uso rápido (*quick win*) preparan la base para casos más sofisticados en el semestre siguiente.

**Conceptos clave**  
- Estructura de un *Business Case* de datos: línea base, beneficio anual estimado (escenario conservador/realista), inversión inicial (CAPEX/implantación), coste recurrente (OPEX nube/licencias/mantenimiento), *payback* y ROI.
- Matriz de priorización multi-criterio (Impacto financiero × Probabilidad de éxito técnico/dato × Rapidez de adopción organizativa).
- Sinergias de datos (*data flywheel*): cómo un primer caso de uso financia y limpia el terreno para el siguiente.
- Gestión del cambio en planta y oficinas: implicación de mandos intermedios, incentivos alineados y formación práctica.

**Definiciones necesarias**  
- **Business Case (Caso de negocio):** Documento ejecutivo que justifica económicamente y operativamente una inversión en datos/IA comparando costes totales (TCO), beneficios medibles, riesgos y alternativas.
- **Payback (Plazo de recuperación):** Tiempo necesario para que los ahorros o ingresos incrementales netos generados por el caso de uso recuperen la inversión realizada.
- **Sinergia de datos (*Data Flywheel*):** Efecto acumulativo por el cual limpiar e integrar un dominio de datos para un primer caso de uso reduce drásticamente el coste y tiempo de implantar el segundo y tercero.

**Ejemplo práctico realista (pyme en transformación digital)**  
Al priorizar sus inversiones anuales, una cooperativa bodeguera de La Rioja (90 empleados) compara cuatro ideas: mantenimiento predictivo de embotelladoras (requiere 60.000 € en sensores y 12 meses de histórico nuevo), previsión de demanda por canal (datos ERP ya limpios, 18.000 € SaaS + configuración, *payback* estimado en 7 meses), monitorización energética de naves de frío (12.000 € en medidores, *payback* en 6 meses) y personalización del club de vinos online (datos CRM incompletos). Deciden ejecutar en **Ola 1** eficiencia energética + previsión de demanda, usar los ahorros generados en los primeros 6 meses para financiar sensores en embotellado y limpiar mientras tanto el CRM para la **Ola 2**.

**Errores frecuentes**  
- Presentar a dirección financiera solo el escenario "optimista de folleto de proveedor" en lugar de un cálculo conservador y verificable.
- Olvidar en el *Business Case* los costes recurrentes (suscripciones SaaS, consumo cloud, tiempo del *Data Steward* y mantenimiento de modelos) y el coste de gestión del cambio.
- Planificar proyectos aislados que no comparten infraestructura ni gobierno, multiplicando silos y proveedores.

**Preguntas que el alumnado debería poder responder**  
- ¿Qué partidas mínimas deben figurar en el cálculo de ROI y *payback* de un caso de uso industrial de big data?
- ¿Cómo aprovecha una hoja de ruta bien diseñada las sinergias de datos entre la Ola 1 y la Ola 2?
- ¿Por qué un caso de uso con menor potencial teórico pero mejor calidad de datos actual suele ser la mejor primera apuesta?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** actúa como cierre integrador de todo el Bloque 9, combinando análisis sectorial, cálculo de *business case* y resolución del caso industrial global.

| Fase | Tiempo | Duración | Qué hace el formador | Qué hace el alumnado |
| --- | --- | --- | --- | --- |
| **1. Apertura y activación** | 00:00 – 00:25 | **25 min** | Conecta con el Tema 4 (familias de IA), realiza el diagnóstico breve sobre casos de uso por sector y dinamiza la **Actividad 1 (Mapa de impacto en la cuenta de resultados)**. | Vincula los 6 casos de uso industriales con partidas reales de la cuenta de resultados (ingresos, costes directos, energía, mermas, riesgo) en su sector. |
| **2. Exposición breve / Microlearning I** | 00:25 – 00:55 | **30 min** | Expone los apartados 3.1 y 3.2 (Mantenimiento predictivo, eficiencia energética, previsión de demanda y optimización logística) con métricas reales (OEE, MAPE, OTIF, kWh/ud). | Toma notas, identifica qué datos internos y externos necesita cada caso y analiza errores frecuentes de implantación en planta y almacén. |
| **3. Actividad de aplicación (*Business Case* exprés)** | 00:55 – 01:25 | **30 min** | Facilita la **Actividad 2 (Calculadora de Business Case y ROI conservador)** en equipos, supervisando que incluyan costes ocultos (OPEX, calidad, cambio) y escenarios prudentes. | En grupos de 3-4 personas, calcula el *payback* y el ROI a 12 meses de 2 casos de uso con datos financieros dados y recomienda cuál aprobar primero. |
| **Pausa** | 01:25 – 01:40 | **15 min** | Descanso operativo. | Descanso y networking. |
| **4. Exposición breve / Microlearning II** | 01:40 – 02:10 | **30 min** | Explica los apartados 3.3 y 3.4 (Personalización con *uplift*, prevención de fraude/impago, sinergias de datos y diseño de Roadmaps a 12 meses). | Contrasta casos orientados a costes vs. ingresos, analiza grupos de control y prepara criterios para el caso integrador final. |
| **5. Análisis de caso práctico integrador** | 02:10 – 03:00 | **50 min** | Presenta el caso **Envases y Embalajes Levante S.L.**, actúa como Comité de Inversiones exigente y acompaña a los equipos en la integración de los 5 temas del bloque. | Analiza los 4 casos de uso industriales de la empresa, calcula prioridades y *payback*, diseña el Roadmap a 12 meses (Ola 1 y Ola 2) integrando arquitectura, KPIs, ágil e IA. |
| **6. Discusión guiada y puesta en común** | 03:00 – 03:25 | **25 min** | Modera el comité de inversiones (2-3 equipos defienden su roadmap en 4 min), desafía supuestos optimistas y cierra una síntesis integradora de todo el Bloque 9. | Presenta su plan de inversión, responde preguntas de dirección financiera/operaciones y compara qué datos externos podrían potenciar cada caso (puente a Open Data). |
| **7. Actividad de transferencia individual (Cierre Bloque 9)** | 03:25 – 03:45 | **20 min** | Guía la **Actividad 3 (Plan Maestro de Casos de Uso a 12 meses)** consolidando el recorrido de los Temas 1 a 5 en la empresa de cada alumno. | Redacta su ficha integradora de 2 casos de uso priorizados para su organización con estimación de *business case*, sinergias de datos y fuentes externas necesarias. |
| **8. Síntesis del Bloque 9, evaluación y cierre** | 03:45 – 04:00 | **15 min** | Recapitula el hilo conductor del Bloque 9 (de las 5 V a la rentabilidad industrial), recoge la evidencia final, dirige la autoevaluación y abre el puente al Bloque 10 (*Open data*). | Completa la autoevaluación integradora del bloque y entrega su Plan Maestro en el campus virtual. |

*Suma total verificada: 25 + 30 + 30 + 15 + 30 + 50 + 25 + 20 + 15 = **240 minutos (4 horas exactas)**.*

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Mapa de impacto en la cuenta de resultados

- **Nombre:** ¿Dónde duele más en tu cuenta de resultados?
- **Objetivo:** Conectar los seis grandes casos de uso del tema con palancas financieras concretas (ingresos, margen, costes operativos, capital circulante y riesgo) antes de entrar en detalles técnicos.
- **Instrucciones para el alumnado:**
  1. De forma individual (5 minutos), revisa los 6 casos de uso del tema: *(1) Mantenimiento predictivo, (2) Optimización logística, (3) Personalización, (4) Prevención de fraude/impago, (5) Previsión de demanda, (6) Eficiencia energética*.
  2. Elige los **2 casos de uso** que tendrían mayor impacto directo en la cuenta de resultados de tu empresa (o del sector en el que emprendes) y anota qué línea exacta moverían (p. ej., "bajar factura eléctrica un 10 %", "reducir stock inmovilizado", "subir recurrencia de compra").
  3. En parejas de sectores distintos (5 minutos), explicaos mutuamente vuestra elección y detectad qué caso de uso creéis que sería **más fácil de arrancar** en 90 días con los datos que ya tenéis hoy.
  4. Puesta en común rápida en plenario (5 minutos).
- **Materiales necesarios:** Pizarra con los 6 casos de uso y notas adhesivas (o encuesta rápida de ranking en Mentimeter).
- **Tiempo estimado:** 15 minutos (dentro de la fase de Apertura y activación).
- **Rol del formador:** Visibilizar cómo cambia la prioridad según el modelo de negocio (industrial vs. retail vs. servicios B2B) y subrayar que el caso más mediático no siempre es el de retorno más rápido.
- **Producto o entregable esperado:** Mapa colectivo de prioridades del grupo vinculado a palancas financieras.
- **Criterios de éxito:** Cada participante asocia correctamente al menos 2 casos de uso con una métrica financiera tangible de su contexto profesional.

---

### Actividad 2 (Aplicación): Calculadora de *Business Case* y ROI conservador

- **Nombre:** ¿Aprobarías esta inversión como director financiero?
- **Objetivo:** Practicar el cálculo realista de un *business case* de big data comparando dos propuestas con costes ocultos y diferentes perfiles de riesgo y *payback*.
- **Instrucciones para el alumnado:**
  1. En equipos de 3-4 personas, analizad dos propuestas para una pyme distribuidora con facturación de 12 M€ y presupuesto anual de innovación de datos de **35.000 €**:
     - **Propuesta A — Optimización de previsión de demanda y reposición (SaaS):** Coste implantación y limpieza inicial: 12.000 €; Licencia anual SaaS + soporte: 9.000 €/año; Tiempo interno equipo (valorado): 4.000 €/año. Beneficio estimado en escenario realista: reducción de roturas y mermas que genera **42.000 €/año** de margen adicional a partir del mes 4 (30 % de riesgo de retraso si no limpian códigos de producto).
     - **Propuesta B — Motor avanzado de personalización a medida en web:** Desarrollo a medida por agencia: 28.000 €; Mantenimiento y nube: 10.000 €/año; Tiempo interno marketing: 5.000 €/año. Beneficio estimado optimista según la agencia: +65.000 €/año en ventas brutas (margen neto real del 25 % = **16.250 €/año** de margen neto) a partir del mes 7.
  2. Calculad para ambas propuestas: (a) **TCO del Año 1**, (b) **Beneficio neto del Año 1** (considerando el mes de arranque real), (c) **Payback estimado en meses** y (d) **Decisión recomendada** ante el comité financiero.
- **Materiales necesarios:** Hoja de trabajo impresa o plantilla sencilla en hoja de cálculo con los datos de ambas propuestas.
- **Tiempo estimado:** 30 minutos (20 min cálculo y análisis + 10 min puesta en común).
- **Rol del formador:** Destacar la trampa clásica de la Propuesta B (la agencia vendió "65.000 € de ingresos brutos", pero el margen neto real es solo 16.250 €/año frente a un TCO Año 1 de 43.000 €, dando retorno negativo) frente a la Propuesta A (TCO Año 1 = 25.000 €, beneficio en 9 meses activos del Año 1 = 31.500 €, *payback* cercano a 9-10 meses).
- **Producto o entregable esperado:** Tabla comparativa de TCO, margen neto, *payback* y recomendación razonada al comité.
- **Criterios de éxito:** El equipo detecta la diferencia entre ingresos brutos y margen neto, incluye costes internos/recurrentes en el TCO y justifica la decisión con cifras consistentes.

---

### Actividad 3 (Transferencia a la realidad laboral): Plan Maestro Integrador de Casos de Uso (12 meses)

- **Nombre:** Hoja de ruta de big data e IA a 12 meses para tu organización.
- **Objetivo:** Consolidar todos los aprendizajes del Bloque 9 (arquitectura, KPIs/gobernanza, agilidad, IA y casos de uso) en un plan directivo ejecutable de 2 olas para la empresa o proyecto de cada participante.
- **Instrucciones para el alumnado:**
  1. De forma individual, diseña una hoja de ruta a 12 meses con **2 casos de uso concretos** para tu empresa o proyecto emprendedor (seleccionados entre los 6 vistos en el tema o adaptados a tu sector):
     - **Caso de uso Ola 1 (Meses 1-6 — Quick Win):** Debe apoyarse en datos ya disponibles o de captura rápida, detallando KPI + línea base, enfoque técnico/IA, TCO estimado, beneficio conservador, *payback* y MVP de 6 semanas.
     - **Caso de uso Ola 2 (Meses 7-12 — Escalado):** Debe explicar explícitamente qué **sinergia de datos** aprovecha de la Ola 1 y qué **fuentes externas o datos abiertos** necesitaría incorporar para multiplicar su valor.
  2. Añade 2 acciones concretas de gestión del cambio y gobernanza para asegurar que los equipos operativos lo adopten.
  3. Sube el Plan Maestro al campus virtual como entregable de cierre del Bloque 9.
- **Materiales necesarios:** Plantilla de Plan Maestro Integrador de Casos de Uso (incluida en la Sección 8).
- **Tiempo estimado:** 20 minutos.
- **Rol del formador:** Orientar a cada alumno para que integre lo construido en los Temas 1 a 4, logrando coherencia total entre arquitectura, KPIs, MVP y retorno financiero.
- **Producto o entregable esperado:** Plan Maestro de 1-2 páginas listo para presentar a dirección general o inversores.
- **Criterios de éxito:** Contiene un *business case* conservador (margen neto vs. TCO), demuestra sinergia de datos entre Ola 1 y Ola 2, contempla gestión del cambio e identifica fuentes externas relevantes.

---

## 6. Caso práctico

### Contexto empresarial
**Envases y Embalajes Levante S.L.** es una pyme industrial ubicada en Alicante, con 130 empleados y una facturación anual aproximada de 26 millones de euros *(caso ficticio con fines docentes)*. Fabrica cajas de cartón ondulado y bandejas de plástico reciclado para clientes de alimentación, agricultura y comercio electrónico en toda la península. Opera en 3 turnos (lunes a sábado) con 4 líneas principales (2 extrusoras de lámina reciclada y 2 líneas de troquelado/impresión) y distribuye mediante 10 camiones propios más operadores logísticos externos para rutas largas.

### Situación o problema
En los últimos dos años, la empresa ha sufrido una fuerte compresión de márgenes debido al encarecimiento de la energía, la volatilidad de pedidos de clientes hortofrutícolas (muy dependientes de la climatología y campañas) y el aumento de incidencias en planta y transporte. La dirección general dispone de un presupuesto anual de **85.000 €** para su programa "Fábrica y Cadena Conectada" (Año 1) y tiene sobre la mesa **cuatro propuestas de casos de uso** impulsadas por distintos jefes de departamento. Todos defienden que su proyecto es el más urgente, pero la empresa solo cuenta con 1 responsable de IT, 1 ingeniero de procesos (con 25 % de tiempo libre) y presupuesto para abordar como máximo **dos iniciativas en la Ola 1 (Meses 1-6)** y preparar una tercera para la **Ola 2 (Meses 7-12)**.

### Datos disponibles

| Caso de uso propuesto | Situación actual y dolor medido | Datos disponibles hoy | Inversión estimada Año 1 (CAPEX + OPEX) | Beneficio anual conservador estimado | Tiempo hasta primer valor / Riesgo principal |
| --- | --- | --- | --- | --- | --- |
| **1. Eficiencia energética en planta** | Factura eléctrica de 620.000 €/año. Se sospecha alto consumo en horas punta y compresores/extrusoras en *stand-by* los fines de semana. | Solo factura mensual global de la comercializadora; sin sub-contadores por línea todavía. | **22.000 €** (medidores IoT no invasivos en 4 líneas + cuadro de mando SaaS + formación a jefes de turno). | **48.000 – 65.000 €/año** (reducción conservadora del 8-10 % de factura por picos, *stand-by* y reprogramación horaria). | **3 meses.** Riesgo bajo; requiere disciplina de jefes de turno y cruce con precio horario de la electricidad (dato externo). |
| **2. Mantenimiento predictivo en extrusoras** | 2 extrusoras son cuello de botella; las paradas imprevistas cuestan ~110.000 €/año en horas paradas y material desechado. | Partes de mantenimiento en papel/Excel incompletos (sin fechas exactas de sustitución de rodamientos); máquinas sin sensores de vibración ni temperatura continua. | **58.000 €** (sensores IoT + plataforma predictiva + integración + consultoría). | **55.000 €/año** (estimación solo viable tras 9-12 meses de captación de histórico limpio de fallos). | **12-15 meses.** Riesgo alto: hoy no existe histórico etiquetado suficiente para modelos predictivos fiables. |
| **3. Previsión de demanda y planificación de compras/stock** | Exceso de stock de bobinas de papel y granza reciclada (1,4 M€ inmovilizados) combinado con un 9 % de pedidos urgentes con costes extra de fabricación. | 4 años de pedidos ERP limpios al 93 %, histórico de entregas y plazos de proveedores; faltan datos externos de campañas agrícolas/clima. | **28.000 €** (herramienta SaaS de previsión + conector ELT + configuración ágil + formación a Compras/Planificación). | **72.000 €/año** (ahorro en urgencias de producción, cambios de formato evitados y reducción financiera de stock). | **4-5 meses.** Riesgo medio-bajo; depende de integrar datos limpios del ERP y adoptar la previsión en la reunión semanal de ventas y operaciones (*S&OP*). |
| **4. Optimización logística de rutas y cargas** | Gasto de transporte de 1,15 M€/año; camiones propios salen con un 76 % de ocupación media y 11 % de entregas fuera de ventana (OTIF 89 %). | Pedidos con peso/volumen incompleto en el 35 % de fichas de producto; GPS básico en los 10 camiones propios; sin integración con transportistas externos. | **34.000 €** (software SaaS de rutas + limpieza maestro de pesos/volúmenes + app móvil para chóferes). | **68.000 €/año** (reducción de km en vacío, mejor consolidación de carga y menos penalizaciones). | **6-7 meses.** Riesgo medio: exige limpiar primero el peso/volumen del catálogo y vencer resistencia de chóferes/tráfico. |

### Preguntas de análisis
1. Evalúa los cuatro casos de uso usando tres criterios combinados: **retorno financiero (*payback* / ROI Año 1)**, **madurez y disponibilidad actual de los datos** y **viabilidad operativa/equipo** (recordando el tope presupuestario de **85.000 €**).
2. ¿Por qué el **mantenimiento predictivo** (pese a atacar un dolor de 110.000 €/año) NO debería ejecutarse como proyecto predictivo de IA en la Ola 1, y qué paso previo de bajo coste debería hacerse ya en los meses 1-6 para prepararlo?
3. Selecciona las **2 iniciativas para la Ola 1 (Meses 1-6)** y justifica qué iniciativa entraría en la **Ola 2 (Meses 7-12)** aprovechando presupuesto restante o sinergias de datos.
4. Para las iniciativas elegidas en Ola 1, especifica:
   - Arquitectura ligera y latencia (*batch* vs. *streaming*).
   - KPIs principales (*lagging* + *leading*), *Data Owner* y *Data Steward*.
   - Enfoque ágil (primer MVP en 6-8 semanas y *Data Spike* inicial).
   - Qué **datos externos o datos abiertos** (p. ej., precios horarios de energía, meteorología, calendarios de campañas agrícolas o tráfico) aportarían mayor valor añadido.

### Tarea a realizar
En equipos de 4 personas, actuad como **Comité de Transformación Digital de Envases y Embalajes Levante S.L.** y elaborad un **Plan Integrador a 12 meses** para presentar a gerencia que contenga:
1. Tabla comparativa de priorización con cálculo de **TCO, beneficio conservador y *payback*** de las 4 opciones.
2. Selección justificada de la **Ola 1 (Meses 1-6)** y **Ola 2 (Meses 7-12)** respetando el límite de 85.000 € (incluyendo una reserva de contingencia y gestión del cambio).
3. Ficha ejecutiva de arranque para la Ola 1 integrando los pilares del Bloque 9 (arquitectura, gobernanza/KPIs, MVP ágil, tipo de analítica/IA y plan de adopción con planta/oficina).
4. Recomendación específica para preparar el mantenimiento predictivo de forma gradual (sin malgastar 58.000 € prematuramente).

### Posibles soluciones o criterios de análisis
Una propuesta directiva excelente convergerá hacia las siguientes decisiones clave:
- **Priorización racional en Ola 1 (Meses 1-6) — Inversión combinada: 50.000 €** (dejando 35.000 € disponibles para preparar Ola 2, limpieza de maestros y contingencias):
  1. **Caso 1 — Eficiencia energética en planta (22.000 €):** *Payback* aproximado de **4-5 meses** (escenario conservador: 48.000 €/año). Instalación rápida no invasiva, riesgo técnico bajo, alta visibilidad de ahorro en caja rápida que genera credibilidad interna. Requiere ingesta casi continua (*near real-time* / intervalos de 15 min) + cruce con **datos externos abiertos** de tarifas eléctricas horarias (p. ej., precios del mercado/tarifas vigentes).
  2. **Caso 3 — Previsión de demanda y planificación (28.000 €):** *Payback* aproximado de **5-6 meses** (beneficio conservador: 72.000 €/año). Se apoya en el mejor activo actual de la empresa (4 años de ERP limpios al 93 %). Ingesta *batch* diaria/semanal, modelo SaaS de series temporales enriquecido con **datos externos** (meteorología y calendarios de cosecha/campañas hortofrutícolas).
- **Acción preparatoria inteligente para Mantenimiento (coste bajo ~5.000-8.000 € durante Ola 1):** Rechazar la inversión inmediata de 58.000 € en IA predictiva por falta de histórico etiquetado. En su lugar, digitalizar desde el mes 1 los **partes de mantenimiento en una app/tablet sencilla** (creando histórico limpio de averías y repuestos) y aplicar **mantenimiento basado en condición sencilla** aprovechando los picos anómalos de amperaje que ya detectarán los nuevos medidores eléctricos instalados en las extrusoras (¡sinergia directa con el Caso 1!).
- **Ola 2 (Meses 7-12) — Caso 4: Optimización logística de rutas (34.000 €):** Durante los meses 4-6 se realiza un *Data Spike* y proyecto de calidad del dato para completar el 35 % de pesos/volúmenes faltantes en el catálogo del ERP; a partir del mes 7, con el maestro limpio y la previsión de demanda ya mejorando la estabilidad de cargas, se despliega el optimizador SaaS de rutas.
- **Gobernanza y gestión del cambio:** Nombrar *Data Owners* de negocio (Jefe de Producción para energía/mantenimiento, Jefe de Compras/Planificación para demanda, Jefe de Logística para rutas); definir *Sprint Reviews* quincenales con jefes de turno y planificadores para validar adopción real; evitar que las métricas energéticas se perciban como vigilancia punitiva, vinculándolas a objetivos positivos de planta.

### Preguntas de reflexión final
- ¿Cómo ha permitido el cruce entre el Caso 1 (medidores eléctricos en extrusoras) y el Caso 2 (mantenimiento) crear una sinergia inteligente que evita gastar 58.000 € antes de tiempo?
- ¿Qué pasaría si la previsión de demanda tuviera una precisión excelente (bajo MAPE) pero el director comercial y el jefe de producción siguieran planificando sin mirar el sistema?
- ¿Qué papel juegan los datos externos (precios horarios de energía, meteorología, tráfico, campañas agrícolas) en este caso industrial y por qué será crucial saber encontrarlos y explotarlos en el próximo bloque (*Open data*)?

---

## 7. Evaluación

### Evaluación diagnóstica breve (al inicio de la sesión — 5 min)
Tres preguntas rápidas de aplicación industrial:
1. ¿Cuál de estos casos de uso suele requerir **mayor tiempo de preparación de datos históricos** en una fábrica tradicional antes de aplicar IA predictiva? *(a) Monitorización energética básica; (b) Mantenimiento predictivo sobre maquinaria antigua sin partes digitales; (c) Optimización básica de horarios de turno).*
2. En un proyecto de previsión de demanda, ¿qué dato debemos corregir antes de entrenar el modelo? *(a) Las ventas en días donde hubo rotura de stock; (b) El color del logotipo del cliente; (c) El orden alfabético del catálogo).*
3. Al calcular el ROI de un caso de uso comercial de personalización, ¿qué cifra debe usarse como beneficio? *(a) Clics en correos; (b) Ingresos brutos totales; (c) Margen neto incremental verificado frente a un grupo de control).*

### Evaluación formativa durante la sesión
- Verificación de rigor financiero durante la **Actividad 2** (comprobar que todos los equipos corrigen la confusión entre ingresos brutos y margen neto e incluyen costes internos y recurrentes en el TCO).
- Observación y preguntas desafiantes durante la defensa en comité del caso **Envases y Embalajes Levante S.L.**, comprobando la integración transversal de los 5 temas del bloque.

### Evaluación sumativa al final de la sesión (Evaluación de cierre de bloque)
Entrega individual del **Plan Maestro Integrador de Casos de Uso a 12 meses (Actividad 3)** aplicado a la organización o proyecto emprendedor del alumnado, evaluado con la rúbrica integradora siguiente.

### Rúbrica de evaluación

| Criterio | Insuficiente (1) | En desarrollo (2) | Adecuado (3) | Destacado (4) |
| --- | --- | --- | --- | --- |
| **1. Selección y priorización de casos de uso** | Elige casos por moda sin relación con la cuenta de resultados ni con la disponibilidad real de datos. | Selecciona casos relevantes pero no justifica el orden entre Ola 1 y Ola 2 ni considera sinergias. | Prioriza 2 casos coherentes (Ola 1 *quick win* + Ola 2 escalado) alineados con impacto financiero y madurez actual del dato. | Diseña una cartera con clara sinergia de datos (*data flywheel*), aprovechando datos y aprendizajes de la Ola 1 para abaratar y acelerar la Ola 2. |
| **2. Rigor del *Business Case* (TCO, margen y *payback*)** | Carece de estimación económica o confunde ingresos brutos con beneficio neto, omitiendo costes recurrentes. | Estima beneficios y costes iniciales, pero omite partidas clave de TCO (OPEX, tiempo interno o mantenimiento). | Calcula un *business case* realista con TCO completo, escenario conservador de margen/ahorro y *payback* coherente. | Presenta un análisis financiero sólido con línea base, escenarios prudentes, métricas de validación (*uplift*/MAPE/OEE/kWh) y gestión de riesgos. |
| **3. Integración del Bloque 9 (Arquitectura, KPIs, Ágil e IA)** | Trata el caso de uso de forma aislada sin especificar arquitectura, gobernanza, MVP ni técnica analítica. | Incluye parcialmente algunos elementos del bloque, pero con incoherencias (p. ej., pide *streaming* o IA compleja sin datos). | Integra de manera consistente arquitectura/latencia, KPIs y roles de gobierno, enfoque MVP ágil y técnica de IA/analítica adecuada. | Articula de forma sobresaliente los 5 temas del bloque en un plan ejecutable, equilibrando *Build vs. Buy*, *Data Spikes*, control humano y calidad en origen. |
| **4. Gestión del cambio y apertura a fuentes externas** | Ignora a los usuarios operativos y se limita únicamente a datos internos aislados. | Menciona genéricamente "formar al personal" sin acciones concretas ni identificación de fuentes externas útiles. | Define acciones claras de adopción operativa e identifica al menos 2 fuentes externas o datos abiertos que enriquecen los casos. | Propone un plan concreto de gestión del cambio (rituales, incentivos, formación por rol) y especifica cómo integrar datos externos/abiertos con rigor legal y operativo. |

### Actividad de autoevaluación o reflexión (Balance del Bloque 9 — 5 min)
Cada participante responde individualmente a tres preguntas de cierre del bloque:
1. *Antes de empezar el Bloque 9, ¿cómo veía el big data y la IA en mi empresa? ¿Qué ha cambiado en mi criterio directivo tras estos 5 temas?*
2. *De los 6 casos de uso industriales estudiados, ¿cuál tiene el mejor equilibrio entre impacto rápido y baja fricción en mi negocio?*
3. *¿Qué dato externo o abierto (meteorología, demografía, precios energéticos, movilidad, licitaciones...) me gustaría cruzar con mis datos internos para tomar mejores decisiones?*

---

## 8. Materiales y recursos

### Guion de diapositivas (slide por slide)

1. **Slide 1 — Portada:** Título del tema, Bloque 9 (5/5 — Cierre del bloque), objetivo integrador y agenda de 4 horas.
2. **Slide 2 — Mapa de los 6 casos de uso industriales:** Eficiencia operativa (Mantenimiento, Logística, Energía) vs. Crecimiento y protección del margen (Demanda, Personalización, Fraude).
3. **Slide 3 — Activación (Actividad 1):** ¿Dónde duele más en tu cuenta de resultados?
4. **Slide 4 — Caso de uso 1: Mantenimiento predictivo:** Escalera correctivo -> preventivo -> condición -> predictivo; OEE y requisitos previos en planta.
5. **Slide 5 — Caso de uso 2: Eficiencia energética:** Sub-medición, consumos fantasma, kWh/ud y cruce con tarifas horarias.
6. **Slide 6 — Caso de uso 3: Previsión de demanda:** Más allá de la media histórica; efecto rotura de stock, MAPE y variables externas.
7. **Slide 7 — Caso de uso 4: Optimización logística:** Enrutamiento dinámico, consolidación de carga, OTIF y restricciones reales de reparto.
8. **Slide 8 — Cómo defender un proyecto ante Finanzas:** Anatomía de un *Business Case* conservador (TCO completo, margen neto incremental y *payback*).
9. **Slide 9 — Taller práctico (Actividad 2):** Calculadora de *Business Case* (Propuesta A vs. Propuesta B).
10. **Slide 10 — Caso de uso 5: Personalización comercial:** *Next Best Action*, grupos de control (*uplift*) y equilibrio entre relevancia y privacidad.
11. **Slide 11 — Caso de uso 6: Prevención de fraude y riesgo:** Pagos, devoluciones, facturas falsas e impago B2B; gestión de la fricción.
12. **Slide 12 — Sinergias de datos (*Data Flywheel*):** Cómo encadenar Ola 1 y Ola 2 para que el primer caso financie y limpie el terreno del siguiente.
13. **Slide 13 — Gestión del cambio en planta y oficinas:** Por qué fallan proyectos técnicamente perfectos cuando no se implica a operarios, chóferes o comerciales.
14. **Slide 14 — El salto hacia fuera:** Por qué los mejores casos de uso industriales combinan datos internos con datos externos y *Open Data*.
15. **Slide 15 — Caso práctico integrador:** Comité de Inversiones de **Envases y Embalajes Levante S.L.**
16. **Slide 16 — Claves del caso práctico:** Priorización en 2 olas, sinergia energía-mantenimiento y roadmap integrador de 12 meses.
17. **Slide 17 — Transferencia individual (Actividad 3):** Plan Maestro Integrador de Casos de Uso para tu empresa.
18. **Slide 18 — Cierre del Bloque 9 y puente al Bloque 10:** Síntesis de los 5 temas, balance personal y transición hacia *Bloque 10, Tema 1: Open data*.

### Ficha de trabajo (para el alumnado — Actividad 2: Comparativa de *Business Case*)

| Concepto financiero / operativo | Propuesta A (Previsión demanda SaaS) | Propuesta B (Personalización a medida) |
| --- | --- | --- |
| **Inversión inicial (CAPEX / Implantación)** | 12.000 € | 28.000 € |
| **Coste anual recurrente (Licencias/Nube + Tiempo interno)** | 9.000 € + 4.000 € = 13.000 € | 10.000 € + 5.000 € = 15.000 € |
| **TCO Año 1 (Total costes Año 1)** | | |
| **Margen neto anualizado (escenario realista)** | | |
| **Meses operativos efectivos en Año 1** | 9 meses (arranca en mes 4) | 6 meses (arranca en mes 7) |
| **Beneficio neto real generado en Año 1** | | |
| **Balance neto Año 1 (Beneficio - TCO)** | | |
| **Payback aproximado (en meses)** | | |
| **Decisión recomendada y justificación** | | |

### Plantilla práctica replicable: Plan Maestro Integrador de Casos de Uso (12 meses — Actividad 3)

| Elemento del Plan | Caso de Uso — Ola 1 (Meses 1-6: *Quick Win*) | Caso de Uso — Ola 2 (Meses 7-12: Escalado) |
| --- | --- | --- |
| **1. Nombre del caso y palanca financiera** | | |
| **2. KPI principal, línea base y objetivo** | | |
| **3. Fuentes internas y externas/abiertas** | | |
| **4. Arquitectura, latencia y *Build vs. Buy*** | | |
| **5. Técnica analítica / de IA adecuada** | | |
| **6. Primer MVP (6 semanas) y *Data Spike*** | | |
| **7. Business Case (TCO Año 1 / Beneficio / *Payback*)** | | |
| **8. Gobernanza (*Owner/Steward*) y gestión del cambio** | | |
| **9. Sinergia de datos entre Ola 1 y Ola 2** | *(Qué datos deja limpios para la Ola 2)* | *(Cómo aprovecha lo construido en Ola 1)* |

### Lecturas y recursos recomendados
- **Lectura recomendada 1:** Marr, B. *Data Strategy: How to Profit from a World of Big Data, Analytics and Artificial Intelligence* (capítulos sobre selección y priorización de casos de uso con retorno medible).
- **Lectura recomendada 2:** Siegel, E. *The AI Playbook* (guía orientada a negocio sobre cómo llevar casos de uso predictivos desde el concepto hasta la adopción operativa real).
- **Lectura recomendada 3:** Recursos y casos de industria conectada y transformación digital de pymes industriales (p. ej., iniciativas públicas de industria conectada en España y centros tecnológicos sectoriales).

### Vídeos, artículos y fuentes adicionales *(Nota obligatoria: validar enlaces, vigencia y disponibilidad antes de utilizarlos en clase)*
- Casos documentados de eficiencia energética industrial, logística predictiva y mantenimiento predictivo en pymes españolas (p. ej., publicaciones de **Industria Conectada 4.0** / Ministerio de Industria o **Red.es** — **verificar enlaces y vigencia de programas/cifras antes de compartir en clase**).
- Portales de referencia de datos externos útiles en casos industriales en España como **datos.gob.es**, **AEMET OpenData** o **ESIOS (Red Eléctrica)** para ilustrar el enlace con el Bloque 10 — **comprobar disponibilidad y condiciones de acceso antes de mostrarlos en directo**.
- Guías de cumplimiento aplicables a personalización comercial y protección de datos (AEPD / LSSI-CE / RGPD) — **verificar normativa vigente antes de impartir**.

### Glosario de términos clave

| Término | Definición operativa |
| --- | --- |
| **Business Case** | Análisis estructurado que evalúa la viabilidad económica (costes TCO, beneficios conservadores, *payback* y riesgos) de un proyecto antes de aprobarlo. |
| **Data Flywheel (Sinergia de datos)** | Efecto virtuoso en el que la limpieza e integración de datos realizada para un primer caso de uso reduce el coste y acelera los casos siguientes. |
| **MAPE** | Error Porcentual Absoluto Medio; indicador estándar para medir la precisión de una previsión de demanda. |
| **Mantenimiento predictivo** | Anticipación de fallos en maquinaria mediante datos de sensores e históricos para intervenir antes de que ocurra una parada imprevista. |
| **Next Best Action (NBA)** | Decisión personalizada que determina la mejor acción comercial o de servicio para cada cliente en un momento dado. |
| **OEE** | Eficiencia General de los Equipos (*Overall Equipment Effectiveness*): producto de Disponibilidad × Rendimiento × Calidad en planta. |
| **OTIF** | *On-Time In-Full*: porcentaje de entregas realizadas puntualmente y con el pedido completo sin incidencias. |
| **Payback** | Plazo necesario para recuperar la inversión inicial y operativa de un proyecto mediante los beneficios netos generados. |
| **S&OP (*Sales & Operations Planning*)** | Proceso periódico de alineación entre previsiones de ventas, compras, producción e inventario. |
| **Uplift** | Impacto neto incremental atribuible exclusivamente a una intervención personalizada frente a un grupo de control sin intervención. |

---

## 9. Adaptaciones para modalidad híbrida

### Sesión presencial
- **Actividad 1 (Mapa en cuenta de resultados):** Colocar 6 carteles en el aula (uno por cada caso de uso) y pedir al alumnado que se desplace físicamente al caso que mayor impacto tendría en su empresa; formar parejas de discusión mezclando personas de carteles distintos para enriquecer la visión intersectorial.
- **Caso práctico (Comité de Inversiones):** Entregar a cada equipo un "presupuesto visual" de 85.000 € y pedir que presenten su hoja de ruta de 12 meses en un rotafolio dividido en 4 trimestres (Q1-Q4), destacando con flechas de color las sinergias de datos entre casos.
- **Cierre de bloque:** Realizar una ronda breve de cierre presencial donde cada participante comparta en 20 segundos el aprendizaje más accionable de todo el Bloque 9.

### Sesión online síncrona
- **Actividad 2 (Calculadora de Business Case):** Compartir una hoja de cálculo de Google Sheets preconfigurada con pestañas por equipo para que introduzcan sus cálculos en paralelo y comparar instantáneamente resultados al volver a sala principal.
- **Debate en Comité de Inversiones:** Utilizar salas reducidas (*breakout rooms*) de 4 personas durante 45 minutos con avisos automáticos de hitos (min 15: tabla *payback* cerrada; min 35: Ola 1 y Ola 2 definidas; min 45: pitch de 4 minutos listo). Al volver, emplear una encuesta en vivo para votar qué equipo presentó el plan más convincente como comité financiero.
- **Interacción continua:** Pedir al alumnado que aporte en el chat ejemplos de datos externos que enriquecerían su caso de uso en el minuto 180 como preparación directa para el Bloque 10.

### Sesión asíncrona (trabajo previo y posterior en campus virtual)
- **Trabajo previo (20 min):** Lectura del dossier de **Envases y Embalajes Levante S.L.** y repaso de los entregables propios de los Temas 1 a 4 para llevarlos integrados a la Actividad 3.
- **Modalidad 100 % asíncrona:** Dos microcápsulas grabadas (20 min cada una), ejercicio autocorregible de cálculo de *business case* (Actividad 2) con plantilla descargable y resolución del caso industrial mediante entrega de un informe ejecutivo de 2 páginas o vídeo-presentación grabada de 4 minutos (*pitch* al comité de inversiones) en el campus virtual.
- **Evaluación de cierre de bloque:** Entrega del **Plan Maestro Integrador de Casos de Uso (12 meses)** en un plazo de 5 días tras la sesión, recibiendo evaluación detallada por rúbrica del formador como hito de superación del Bloque 9.

---

## 10. Conexión con el programa

- **Qué conocimientos previos refuerza:** Integra en un nivel directivo completo los cuatro temas anteriores del Bloque 9 (arquitecturas y 5 V, KPIs y gobernanza, MVPs ágiles y familias de IA), junto con las bases financieras, operativas y de sostenibilidad trabajadas a lo largo de todo el programa.
- **Qué competencias desarrolla:** Visión empresarial integral de la analítica avanzada, elaboración de *business cases* realistas con criterio financiero, priorización estratégica de carteras de proyectos de datos y liderazgo de la gestión del cambio en entornos industriales y digitales.
- **Conexión con el tema anterior (Bloque 9, Tema 4 — Inteligencia artificial en big data):** Mientras el Tema 4 dotó al alumnado de criterio para seleccionar familias de modelos de IA, evaluar errores y controlar riesgos éticos, este Tema 5 materializa esas capacidades en los seis casos de uso industriales con mayor retorno demostrable y enseña a justificarlos financieramente ante un comité de dirección.
- **Conexión con el tema posterior (Bloque 10, Tema 1 — Open data):** En todos los casos industriales analizados (precios horarios eléctricos para eficiencia energética, meteorología y campañas para previsión de demanda, tráfico y zonas reguladas para logística, datos socioeconómicos para personalización) ha quedado evidente que los datos internos de una pyme multiplican su valor al cruzarse con fuentes externas públicas; esto abre directamente el **Bloque 10** comenzando por el **Tema 1: Open data** (qué son los datos abiertos, portales, licencias y modelos de negocio basados en su reutilización).
- **Evidencia de aprendizaje que dejará el alumnado:** El **Plan Maestro Integrador de Casos de Uso a 12 meses**, documento capstone del Bloque 9 que consolida la transformación basada en datos de la organización o proyecto emprendedor del participante y deja identificadas las necesidades de datos externos para trabajar en el Bloque 10.

---

## Siguientes pasos para el formador

1. **Integración del portafolio del Bloque 9:** Recordar al alumnado 48 horas antes que tenga a mano sus entregables de los Temas 1 a 4 (Lienzo de Arquitectura, Mini-Plan de Gobernanza/KPIs, Hoja de Ruta MVP y Canvas de IA) para ensamblarlos en el Plan Maestro de cierre.
2. **Comprobación de números del taller financiero:** Revisar previamente la hoja de cálculo de la Actividad 2 y los rangos del caso de *Envases y Embalajes Levante S.L.* para conducir con agilidad el debate sobre margen neto vs. ingresos brutos y *payback*.
3. **Validación de portales y normativa:** Comprobar la accesibilidad de los portales públicos citados como ejemplos de datos externos (datos.gob.es, AEMET, ESIOS) y la vigencia de la normativa aplicable a personalización comercial (RGPD/LSSI-CE) antes de la sesión.
4. **Cierre evaluativo del Bloque 9:** Corregir con la rúbrica integradora los Planes Maestros entregados y emitir una devolución personalizada destacando fortalezas directivas y 1 mejora prioritaria de viabilidad.
5. **Traspaso hacia el Bloque 10:** Recopilar la lista de "datos externos deseados" que haya propuesto el alumnado en la autoevaluación de cierre para utilizarla como materia prima real al inaugurar el **Bloque 10, Tema 1: Open data**.
