# Logística inversa

## 1. Ficha del tema

| Campo | Detalle |
| --- | --- |
| **Título del tema** | Logística inversa |
| **Bloque y posición dentro del programa** | Bloque 8: Cadena de suministro — Tema 6 de 8 |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Mandos intermedios y emprendedores |
| **Nivel de dificultad** | Intermedio |
| **Prerrequisitos** | Haber completado los Temas 1 a 5 del Bloque 8 (especialmente Almacenes y Modelos logísticos) y conocer la estructura básica de márgenes en comercio físico y e-commerce. |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado será capaz de diseñar y gestionar un sistema rentable y sostenible de logística inversa en una pyme o negocio digital, reduciendo las tasas de devolución prevenibles, agilizando el triaje y la recuperación de valor de productos devueltos e integrando prácticas de economía circular. |

---

## 2. Objetivos de aprendizaje

1. **Describir** los tipos de flujos de logística inversa (devoluciones comerciales, garantías/reparaciones, envases retornables, retirada de lotes y fin de vida) y sus diferencias operativas frente a la logística directa. *(Nivel de Bloom: Comprender)*
2. **Analizar** el coste real de las devoluciones y sus causas raíz prevenibles en canales B2B y e-commerce para priorizar palancas de reducción en origen. *(Nivel de Bloom: Analizar)*
3. **Aplicar** un árbol de decisión de triaje y disposición (reventa directa, reacondicionamiento/reparación, mercado secundario, despiece, reciclaje o eliminación) para maximizar la recuperación de valor y velocidad de retorno al stock. *(Nivel de Bloom: Aplicar)*
4. **Evaluar** políticas de devolución (gratuita, de pago, cambios instantáneos, crédito en tienda, *PUDO* y *returnless refunds*) sopesando su impacto en conversión, fidelización, fraude y rentabilidad. *(Nivel de Bloom: Evaluar)*
5. **Diseñar** un proceso operativo completo de gestión de devoluciones (*RMA*) y modelo de economía circular adaptado a una pyme en transformación digital. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Qué es la logística inversa y por qué resulta más compleja que la directa

**Explicación breve y clara**
La **logística inversa** planifica, ejecuta y controla el flujo de productos, componentes, embalajes e información desde el punto de consumo o cliente hacia el origen (almacén, fábrica, centro de reparación o gestor de reciclaje) con el objetivo de **recuperar valor económico** o garantizar una **gestión ambiental adecuada**. A diferencia de la logística directa —estandarizada, predecible y consolidada—, la logística inversa es **asimétrica e incierta**: los productos llegan de uno en uno, en horarios imprevisibles, con embalajes dañados, sin homogeneidad de estado y perdiendo valor con cada día que pasan sin procesarse.

**Conceptos clave**
- Tipos de flujos inversos:
  1. Devoluciones comerciales / desistimiento e-commerce (talla, expectativas, arrepentimiento).
  2. Garantías, averías y reparaciones (posventa técnica).
  3. Devoluciones por error propio (daño en transporte, error de *picking*, defecto de fábrica).
  4. Retorno de activos reutilizables (palets Europalet/CHEP, cajas plásticas plegables, contenedores isotérmicos).
  5. Retiradas de mercado (*recalls*) y fin de vida útil (RAEE, residuos de envases).
- Coste oculto de una devolución: transporte de vuelta + recepción/inspección manual + limpieza/reembalaje + depreciación por estacionalidad + coste financiero del reembolso + atención al cliente.
- Velocidad de retorno al stock (*time-to-restock*): en moda, tecnología o temporada, cada semana de retraso en revisar una caja destruye valor comercial.

**Definiciones necesarias**
- **Logística inversa:** Conjunto de procesos que gestionan el retorno de mercancías, envases o residuos desde el cliente o punto de venta hacia puntos de recuperación de valor, reparación, reutilización o reciclaje responsable.
- **Autorización de Devolución de Mercancía (*RMA*, *Return Merchandise Authorization*):** Procedimiento y código digital previo que registra qué producto vuelve, de qué pedido procede, el motivo estructurado de devolución y el destino físico asignado antes de que el paquete llegue al almacén.

**Ejemplo práctico realista**
Una pyme de accesorios de ciclismo en Girona recibía unas 90 devoluciones semanales en su muelle principal sin aviso previo (*RMA*). Como el equipo priorizaba expedir pedidos nuevos, las cajas devueltas se acumulaban en un rincón durante 3 semanas. Al auditarlas, descubrieron que el 70 % eran prendas en perfecto estado que perdieron la ventana de temporada de verano mientras esperaban revisión, obligando a liquidarlas al 50 % en otoño.

**Errores frecuentes**
- Tratar las devoluciones como un "estorbo secundario" sin espacio dedicado, personal asignado ni plazo objetivo de revisión (*SLA* interno <= 48 horas).
- Medir solo el coste de la etiqueta de transporte de vuelta olvidando la mano de obra de inspección, la pérdida de margen y la depreciación del producto.
- Permitir devoluciones "a ciegas" sin portal *RMA* ni registro estructurado de motivos, impidiendo saber qué SKU tiene un problema real de calidad o tallaje.

**Preguntas que el alumnado debería poder responder**
- ¿Por qué el coste operativo por unidad suele ser mayor en la logística inversa que en la logística directa?
- ¿Qué consecuencias económicas genera un *time-to-restock* lento en productos estacionales o tecnológicos?
- ¿Qué información mínima debe capturar un sistema *RMA* antes de autorizar una devolución?

---

### 3.2. Prevención en origen y diseño estratégico de políticas de devolución

**Explicación breve y clara**
La devolución más barata y sostenible es la que **nunca llega a producirse**. Una gran parte de las devoluciones en e-commerce y B2B son **prevenibles**: descripciones imprecisas, guías de tallas confusas, fotos poco realistas, embalajes que no protegen en tránsito o errores de *picking*. Paralelamente, la **política de devoluciones** es una palanca comercial y financiera: ofrecer devoluciones totalmente gratuitas a domicilio dispara la conversión, pero también incentiva comportamientos abusivos (*bracketing*: comprar 3 tallas sabiendo que se devolverán 2) si no se diseña con inteligencia.

**Conceptos clave**
- Palancas de prevención en origen: fichas de producto ricas (medidas reales, vídeos, reseñas con ajuste de talla), recomendadores de talla por datos, control de calidad en proveedor, embalaje resistente y *poka-yoke* en *picking*.
- Diseño de política de devoluciones equilibrada:
  - Diferenciar devolución por error propio/defecto (siempre gratuita e inmediata) frente a desistimiento voluntario.
  - Incentivar **cambio directo de talla/producto** o **crédito en tienda (vale con pequeño bono)** frente al reembolso en cuenta para retener ingresos.
  - Fomentar devolución en tienda física o red **PUDO / lockers** (menor coste consolidado y menor huella ambiental que recogida a domicilio).
  - Evaluar *returnless refunds* (reembolso sin retorno físico) únicamente para artículos de muy bajo valor cuyo coste de transporte y revisión supera el valor recuperable, con controles antifraude estrictos.
- Prevención del fraude habitual (uso y devolución o *wardrobing*, devolución de cajas vacías o artículos sustituidos).

**Definiciones necesarias**
- ***Bracketing*:** Hábito de compra online consistente en pedir deliberadamente múltiples variantes (tallas, colores o modelos) de un mismo artículo con la intención previa de quedarse con uno y devolver el resto.
- **Tasa de retención de devoluciones:** Porcentaje de solicitudes de devolución que la empresa consigue convertir en un cambio por otra talla/producto o en crédito de tienda en lugar de una salida de caja por reembolso.

**Ejemplo práctico realista**
Una marca española de ropa deportiva técnica sufría un 31 % de devoluciones en mallas y zapatillas. Al analizar los códigos *RMA*, detectó que dos modelos concretos tallaban pequeños y acumulaban el 40 % de las devoluciones. Añadió una alerta visible en ficha ("Este modelo talla ajustado; si dudas, elige una talla más"), implantó un portal digital que ofrece cambio de talla gratuito al instante o 5 % extra en vale de tienda, mientras cobra 2,95 € si el cliente elige reembolso a domicilio (gratis en punto *PUDO*). En 4 meses la tasa de devolución bajó al 21 % y el 36 % de las solicitudes se convirtieron en cambios.

**Errores frecuentes**
- Copiar la política de devolución gratuita ilimitada de gigantes de la moda sin tener su margen ni su volumen logístico.
- No revisar la normativa legal vigente sobre el derecho de desistimiento en comercio electrónico antes de redactar condiciones comerciales *(Nota: en España y la UE el derecho de desistimiento en venta a distancia y las garantías legales están regulados por la normativa de defensa de los consumidores; verificar plazos y excepciones legales vigentes con asesoría jurídica antes de implantar o impartir detalles regulatorios)*.
- Bloquear o dificultar tanto la devolución al cliente honesto que se destruye la confianza y la tasa de recompra.

**Preguntas que el alumnado debería poder responder**
- ¿Cómo distinguirías entre causas de devolución inevitables y causas prevenibles con datos del portal *RMA*?
- ¿Qué mecanismos permiten reducir el impacto financiero de las devoluciones sin perjudicar la experiencia del cliente?
- ¿Cuándo tiene sentido económico aplicar un *returnless refund* y qué riesgo conlleva?

---

### 3.3. Operativa en almacén, triaje y recuperación de valor (las *R* operativas)

**Explicación breve y clara**
Cuando el producto devuelto llega al almacén, el éxito financiero depende de contar con un **proceso de triaje rápido y estandarizado** que clasifique cada unidad en menos de 48 horas según su estado físico y le asigne la ruta de mayor recuperación económica neta. El objetivo es rescatar el máximo porcentaje posible para venta a precio completo (*Grado A*) y canalizar disciplinadamente los grados inferiores sin contaminar el inventario bueno.

**Conceptos clave**
- Flujo operativo inverso en 5 pasos: (1) Registro digital *RMA* -> (2) Recepción en zona aislada de devoluciones -> (3) Inspección y clasificación por grados (A, B, C, D) -> (4) Disposición / reacondicionamiento -> (5) Reembolso o cambio y análisis mensual de causas.
- **Matriz de grados y disposición:**
  - **Grado A (Impecable / nuevo):** Reetiquetado/reembalaje mínimo y retorno inmediato al stock vendible (*restock*).
  - **Grado B (Caja abierta o ligero defecto estético):** Reacondicionamiento ligero (*refurbishment*), limpieza/reembalaje y venta como *outlet*, *reacondicionado certificado* o *re-commerce* con descuento controlado.
  - **Grado C (Averiado o incompleto):** Reparación en taller propio/externo o despiece para recuperación de repuestos útiles.
  - **Grado D (Irrecuperable / caducado / higiénico):** Donación (si es apto), reciclaje de materiales con gestor autorizado o eliminación regulada minimizando residuo a vertedero.

**Definiciones necesarias**
- **Triaje inverso:** Inspección rápida bajo criterios visuales y funcionales estandarizados que asigna a cada artículo devuelto una categoría de estado y su ruta óptima de recuperación de valor.
- **Reacondicionamiento (*Refurbishment*):** Proceso técnico de revisión, limpieza, sustitución de piezas menores, prueba de funcionamiento y reembalaje que devuelve a un producto usado o devuelto unas condiciones garantizadas de venta.

**Ejemplo práctico realista**
Una pyme de pequeño electrodoméstico de cocina (batidoras y freidoras de aire) devolvía a chatarra o acumulaba en palets todos los aparatos con caja rota. Al habilitar un pequeño banco de pruebas técnico en el almacén (1 técnico a media jornada), comprobó que el 58 % funcionaba perfectamente (solo faltaba caja nueva y manual -> venta en sección "Reacondicionados con garantía" al 80 % de precio) y otro 24 % requería una pieza de 4 € para volver a venderse. Recuperó 74.000 € netos en el primer año.

**Errores frecuentes**
- Mezclar mercancía devuelta sin inspeccionar con stock nuevo, provocando que el siguiente cliente reciba un producto usado o incompleto.
- Emitir reembolsos automáticos sin criterio o, al contrario, tardar 15 días en devolver el dinero tras recibir el paquete, generando disputas bancarias (*chargebacks*) y reseñas negativas.
- No tener definido de antemano el canal de salida para los productos Grado B (acaban ocupando estanterías durante años hasta quedar obsoletos).

**Preguntas que el alumnado debería poder responder**
- ¿Qué criterios concretos separan un producto devuelto Grado A de uno Grado B o C?
- ¿Por qué el tiempo de triaje (*time-to-restock*) es uno de los indicadores más críticos de la logística inversa?
- ¿Qué canales comerciales puede usar una pyme para dar salida rentable al stock reacondicionado sin canibalizar su catálogo nuevo?

---

### 3.4. Economía circular, envases retornables y nuevos modelos de negocio inversos

**Explicación breve y clara**
La logística inversa deja de ser únicamente un centro de coste cuando se integra en la **economía circular**. En lugar del modelo lineal (*extraer -> fabricar -> usar -> tirar*), las empresas diseñan productos, envases y cadenas de retorno pensadas desde el principio para **reutilizar, reparar, remanufacturar y reciclar**. En pymes, esto se traduce en proyectos muy concretos y rentables: circuitos cerrados de envases retornables B2B, programas de recompra (*trade-in*), segunda mano oficial (*re-commerce*) y cumplimiento eficiente de la responsabilidad ampliada del productor.

**Conceptos clave**
- Jerarquía de la economía circular aplicada a *supply chain*: Reducir -> Reutilizar -> Reparar -> Reacondicionar/Remanufacturar -> Reciclar (última opción antes del residuo).
- Logística de circuito cerrado (*closed-loop supply chain*): gestión de *pools* de palets, cajas plegables, bidones o embalajes reutilizables e-commerce.
- Modelos de negocio circulares habilitados por logística inversa: *Re-commerce* de marca propia, *Trade-in* (entrega tu antiguo equipo por descuento), Producto como Servicio (*PaaS* / alquiler con mantenimiento) y venta de repuestos oficiales.
- Presión regulatoria y cumplimiento ambiental: Responsabilidad Ampliada del Productor (RAP) para envases, aparatos eléctricos/electrónicos (RAEE) y textil *(Nota: verificar la normativa española y europea vigente —como la Ley de Residuos y Suelos Contaminados y decretos de envases/RAEE— con fuentes oficiales antes de impartir obligaciones legales específicas)*.

**Definiciones necesarias**
- **Cadena de suministro de circuito cerrado (*Closed-Loop Supply Chain*):** Integración deliberada de la logística directa e inversa para recuperar productos, componentes o envases tras su uso y reintroducirlos en nuevos ciclos productivos o comerciales.
- ***Re-commerce*:** Canal comercial gestionado por la propia marca o un socio especializado para revender productos devueltos, reacondicionados o de segunda mano con garantía, captando nuevos segmentos de precio y mejorando sostenibilidad.

**Ejemplo práctico realista**
Una empresa de catering corporativo y distribución de bebidas en oficinas en Barcelona sustituyó las cajas de cartón de un solo uso por cajas plásticas isotérmicas reutilizables con código QR vinculadas a cada cliente B2B. En cada entrega semanal el repartidor recoge las cajas vacías de la semana anterior, aprovechando el viaje de retorno. Tras 6 meses, redujeron un 64 % su gasto en embalaje desechable y fidelizaron a los clientes corporativos con informes trimestrales de ahorro de residuos.

**Errores frecuentes**
- Lanzar sistemas de envases retornables sin trazabilidad ni incentivo/depósito de devolución, sufriendo pérdidas constantes del parque de cajas.
- Tratar la economía circular solo como una campaña de marketing superficial (*greenwashing*) sin cerrar los números reales de transporte de recogida, lavado y rotación mínima necesaria.
- Diseñar productos imposibles de reparar o desmontar (pegados o sin repuestos), encareciendo enormemente la posventa y las garantías.

**Preguntas que el alumnado debería poder responder**
- ¿Por qué un sistema de embalaje reutilizable funciona mucho mejor en rutas B2B recurrentes que en envíos B2C esporádicos a larga distancia?
- ¿Cómo transforma un programa de *re-commerce* o *trade-in* un coste de devolución en una fuente de ingresos y captación?
- ¿Qué variables económicas y ambientales hay que calcular para saber si compensa reparar frente a sustituir?

---

## 4. Metodología didáctica

Sesión de 4 horas (240 minutos) enfocada en diagnosticar la fuga real de rentabilidad por devoluciones, construir árboles de triaje y rediseñar el modelo de logística inversa de una marca nativa digital.

| Fase | Tiempo | Duración | Qué hace el formador | Qué hace el alumnado |
| --- | --- | --- | --- | --- |
| **1. Apertura y activación** | 00:00 – 00:25 | 25 min | Conecta con el Tema 5 (última milla), aplica diagnóstico breve y conduce la Actividad 1 (*El viaje de regreso que nadie presupuestó*). | Responde al sondeo inicial y mapea en parejas todas las actividades y costes que ocurren desde que un cliente pulsa "Quiero devolverlo". |
| **2. Exposición breve / microlearning (Bloque A)** | 00:25 – 00:55 | 30 min | Expone apartados 3.1 y 3.2: tipos de flujos inversos, anatomía del coste de devolución, prevención en origen, *RMA*, *bracketing* y diseño de políticas equilibradas. | Identifica qué porcentaje de las devoluciones de su sector son prevenibles y debate cómo equilibrar experiencia de cliente y control de abusos. |
| **3. Actividad práctica en equipo (Árbol de triaje y recuperación)** | 00:55 – 01:35 | 40 min | Explicación ágil del apartado 3.3 (10 min) + facilitación de la Actividad 2 (*Diseño de flujo RMA y árbol de triaje A/B/C/D*, 30 min). | En equipos de 3-4, clasifica 6 escenarios reales de devoluciones, asigna grado, calcula valor recuperado neto y define el *SLA* de almacén. |
| **4. Exposición breve / microlearning (Bloque B)** | 01:35 – 02:05 | 30 min | Desarrolla el apartado 3.4: economía circular, circuitos cerrados de envases, *re-commerce*, *trade-in*, *PaaS* y marco general de cumplimiento ambiental. | Analiza un cálculo simplificado de punto de equilibrio de cajas retornables y explora oportunidades de *re-commerce* en distintos sectores. |
| **5. Análisis de caso práctico** | 02:05 – 02:55 | 50 min | Presenta el caso *Calzado Ruta Urbana S.L.* (marca digital alicantina con 29 % de devoluciones) con escandallo detallado y guía el trabajo de los equipos. | Diagnostica causas raíz, cuantifica el coste anual oculto de las devoluciones, rediseña política y flujo *RMA* y plantea una línea de *re-commerce*. |
| **6. Discusión guiada y transferencia** | 02:55 – 03:35 | 40 min | Modera la exposición comparada de soluciones del caso y facilita la Actividad 3 (*Protocolo RMA y plan de reducción de devoluciones para mi empresa*). | Contrasta enfoques (por ejemplo, cobrar o no devoluciones a domicilio) y crea el protocolo inverso y cuadro de *KPIs* para su negocio. |
| **7. Síntesis, evaluación y cierre** | 03:35 – 04:00 | 25 min | Sintetiza los 5 principios de una logística inversa rentable, aplica test sumativo final (10 min), facilita autoevaluación y enlaza con el Tema 7 (Modelo de Amazon). | Completa la prueba práctica final, registra su plan de acción personal y aclara dudas finales. |

**Total acumulado:** 25 + 30 + 40 + 30 + 50 + 40 + 25 = **240 minutos (4 horas exactas)**.

---

## 5. Actividades prácticas

### Actividad 1 (Activación): El iceberg de una devolución e-commerce

- **Objetivo:** Hacer visible la magnitud real del coste completo de una devolución frente a la percepción habitual de que "solo cuesta la etiqueta de vuelta".
- **Instrucciones para el alumnado:**
  1. En parejas, elegid un producto e-commerce típico de 60 € (por ejemplo, una chaqueta, una cafetera o unas zapatillas).
  2. Enumerad en orden cronológico cada paso operativo desde que el cliente solicita la devolución hasta que el dinero o el producto quedan cerrados (atención al cliente, recogida, recepción, apertura, inspección, planchado/limpieza, nueva caja, entrada en sistema, depreciación si perdió temporada).
  3. Asignad un coste orientativo realista a cada paso y comparad el total con el margen bruto del producto.
- **Materiales necesarios:** Pizarra física o tablero digital compartido.
- **Tiempo estimado:** 15 minutos (dentro de la fase de Apertura).
- **Rol del formador:** Contrastar las estimaciones de varias parejas y evidenciar cómo una devolución suele costar entre 2 y 3 veces más que el envío directo inicial.
- **Producto o entregable esperado:** Desglose cronológico y coste estimado total de 1 devolución.
- **Criterios de éxito:** El desglose incluye al menos 6 partidas reales (no solo transporte) y contempla la pérdida de valor por tiempo o deterioro del embalaje.

### Actividad 2 (Aplicación): Laboratorio de triaje inverso y recuperación de valor

- **Objetivo:** Aplicar un árbol de decisión objetivo por grados (A, B, C, D) para maximizar la recuperación económica neta y estandarizar el criterio del equipo de almacén.
- **Instrucciones para el alumnado:**
  1. En equipos de 3-4 personas, analizad 6 artículos devueltos reales de una tienda multicanal de equipamiento outdoor/hogar (con su PVP, coste de adquisición, estado físico descrito, coste de reparación/reembalaje y valor de reventa estimado por canal).
  2. Para cada artículo, determinad: (a) Grado asignado (A/B/C/D), (b) Decisión óptima (restock, reacondicionado *outlet*, reparación, despiece, donación/reciclaje o *returnless refund* en origen) y (c) Margen neto recuperado.
  3. Redactad 4 reglas visuales sencillas para que un operario de almacén pueda hacer este triaje en menos de 3 minutos por unidad.
- **Materiales necesarios:** Ficha con los 6 escenarios de devoluciones y calculadora.
- **Tiempo estimado:** 30 minutos (integrados en la fase 3).
- **Rol del formador:** Señalar casos trampa (por ejemplo, gastar 18 € en transportar y reparar un accesorio cuyo valor de reventa es 14 €) y reforzar la necesidad de criterios objetivos sin ambigüedades.
- **Producto o entregable esperado:** Tabla de clasificación y valor recuperado de los 6 artículos + protocolo visual de 4 reglas de triaje.
- **Criterios de éxito:** Decisiones económicamente racionales en todos los casos y criterios de triaje observables y medibles (no subjetivos).

### Actividad 3 (Transferencia a la realidad laboral): Protocolo *RMA* y palancas de circularidad en mi empresa

- **Objetivo:** Trasladar las herramientas de prevención, triaje y economía circular a la operativa actual o proyecto de negocio de cada participante.
- **Instrucciones para el alumnado:**
  1. De forma individual, completa la *Plantilla de Rediseño de Logística Inversa* (sección 8) aplicada a tu empresa (o a un proceso equivalente de devoluciones/garantías/envases de tu sector).
  2. Define: (a) las 2 causas principales de retorno actuales y 2 acciones de prevención en origen, (b) el diseño de tu política de devoluciones y portal *RMA*, (c) tu árbol de disposición A/B/C/D con *SLA* de revisión en horas, y (d) 1 iniciativa realista de reutilización de envases o *re-commerce*.
  3. Comparte tu iniciativa de mayor impacto en parejas (5 min) para validar viabilidad económica.
- **Materiales necesarios:** Plantilla de Rediseño de Logística Inversa (sección 8).
- **Tiempo estimado:** 25 minutos (dentro de la fase 6).
- **Rol del formador:** Orientar a empresas B2B industriales hacia retorno de envases/garantías/reparaciones y a marcas D2C hacia prevención de tallaje, cambios instantáneos y *PUDO*.
- **Producto o entregable esperado:** Hoja de protocolo *RMA*, política de devoluciones y 1 proyecto piloto circular definido.
- **Criterios de éxito:** Incluye acciones preventivas antes de la venta, *SLA* de revisión <= 48-72 h y al menos 3 *KPIs* específicos de logística inversa.

---

## 6. Caso práctico

### Contexto empresarial
**Calzado Ruta Urbana S.L.** es una marca nativa digital de calzado ergonómico y sostenible diseñada y fabricada en Elche (Alicante), con 19 empleados y 4,6 millones de euros de facturación anual (85 % e-commerce propio en España y Europa; 15 % tiendas multimarca). Vende aproximadamente **44.000 pares/año** en e-commerce con un PVP medio de **89 €** (coste de fabricación + caja: **31 €**; margen bruto comercial antes de logística: **58 €**).

### Situación o problema
Su crecimiento online se ha visto lastrado por una **tasa de devoluciones del 29 %** (12.760 pares devueltos/año). Para impulsar las ventas, mantienen una política de "envío y devolución gratuitos a domicilio en 30 días sin preguntas" gestionada por correo electrónico manual (sin portal *RMA* automatizado).
Las consecuencias operativas y financieras son críticas:
- El 64 % de las devoluciones se debe a **problemas de talla** (incluyendo un 22 % estimado de clientes que practican *bracketing* pidiendo 2 tallas a la vez).
- El almacén tarda una media de **14 días laborables** en revisar, limpiar y volver a subir al stock cada par devuelto; en campañas de primavera/verano y rebajas, el 35 % de esos pares pierde la ventana de demanda y acaba liquidado al 50 %.
- Alrededor de **1.900 pares/año** regresan con rozaduras leves en la suela o caja destrozada (no vendibles como nuevos) y se amontonan en un rincón del almacén sin salida comercial definida.
- Actualmente, el 82 % de los clientes que inician una devolución pide **reembolso en cuenta** (solo un 18 % cambia de talla porque el proceso manual por correo es lento y confuso).

### Datos disponibles

| Concepto / Indicador | Valor actual |
| --- | --- |
| Pedidos e-commerce vendidos/año (1 par/pedido equivalente) | 44.000 pares (PVP medio: 89 €; coste producto: 31 €) |
| Tasa actual de devoluciones | 29 % (**12.760 pares/año**) |
| Motivos registrados (muestra interna) | 64 % Talla/ajuste · 16 % No era como en foto · 11 % Defecto/daño caja · 9 % Otros |
| Coste directo de logística directa perdida + logística inversa por devolución | Envío ida perdido (5,40 €) + Recogida domicilio vuelta (6,20 €) + Manipulación/revisión/atención cliente (5,80 €) + Caja nueva en 40 % casos (0,80 € media) = **18,20 € por devolución** |
| Distribución de estado al llegar al almacén (sobre 12.760 pares) | **85 % Grado A** (10.846 pares vendibles nuevos; pero 35 % sufre depreciación media de 25 €/par por retraso de *restock*) · **15 % Grado B** (1.914 pares con uso leve/suela marcada, actualmente sin vender -> pérdida total del coste de 31 €/par) |
| Conversión actual a cambio de talla / vale | 18 % cambios · 82 % reembolsos |
| Coste estimado de implantar portal *RMA* + recomendador de talla + integración *PUDO* | **14.000 €** primer año (SaaS + configuración) |
| Alternativa de devolución vía red *PUDO* / puntos de conveniencia | **3,40 €** por devolución (frente a 6,20 € de recogida a domicilio) |

### Preguntas de análisis
1. Calcula el **coste económico anual total actual** de las devoluciones para Calzado Ruta Urbana S.L., sumando: (a) costes logísticos y operativos directos (`12.760 × 18,20 €`), (b) depreciación por lentitud de *restock* en Grado A, y (c) pérdida de inventario de los 1.914 pares Grado B inmovilizados.
2. ¿Qué palancas concretas en la web y ficha de producto atacarían el 80 % de las causas prevenibles (talla + expectativas visuales)?
3. Diseña una nueva **política de devoluciones y portal *RMA*** que reduzca el *bracketing*, eleve los cambios de talla del 18 % al >= 45 % y migre la mayoría de devoluciones de domicilio a puntos *PUDO* sin hundir la conversión.
4. ¿Cómo transformarías los 1.914 pares Grado B en una línea de negocio rentable y alineada con la identidad sostenible de la marca (*Ruta Urbana Re-Wear*)?

### Tarea a realizar
En equipos de 4 personas, elaborad un **Plan de Transformación de Logística Inversa a 6 meses** para Calzado Ruta Urbana S.L. que contenga:
1. Cuantificación exacta del agujero económico actual y estimación conservadora del ahorro anual esperado con vuestras medidas.
2. 4 acciones de prevención en origen (antes de la compra y en embalaje).
3. Nueva arquitectura de política de devoluciones (diferenciando cambio de talla, vale con incentivo, devolución *PUDO* y recogida a domicilio) + flujo *RMA* con *SLA* de *time-to-restock* <= 48 h.
4. Plan de negocio básico para la línea de reacondicionados Grado B y 5 *KPIs* de seguimiento mensual.

### Posibles soluciones o criterios de análisis
- **Cuantificación del impacto anual actual:**
  - *Coste operativo/logístico directo:* `12.760 × 18,20 € = 232.232 €/año`.
  - *Depreciación por lentitud en Grado A:* `10.846 × 35 % = 3.796 pares × 25 € = 94.900 €/año`.
  - *Pérdida de coste de stock en Grado B sin salida:* `1.914 × 31 € = 59.334 €/año` (además del lucro cesante).
  - **Impacto directo total actual: ~386.466 €/año** (~8,4 % de la facturación total de la empresa, sin contar los ingresos perdidos por reembolsos).
- **Prevención en origen:** Implantar recomendador inteligente de talla (basado en longitud en cm del pie + equivalencias con otras marcas + avisos de horma), vídeos reales caminando en 360° con luz natural, caja autoarmable de doble uso (envío + devolución sin destrozar el estuche interior) y auditoría de control de calidad sobre ese 11 % de defectos/daños.
- **Rediseño de política y portal *RMA*:**
  - **Cambio de talla o modelo:** 100 % gratuito e instantáneo (al escanear la etiqueta en el punto *PUDO*, el sistema dispara el envío de la nueva talla sin esperar 14 días).
  - **Crédito en tienda:** Gratuito + bono de 5 € en próxima compra.
  - **Reembolso económico:** Gratuito si se entrega en punto *PUDO* (ahorra 2,80 €/paquete) o con tarifa reducida (por ejemplo, 3,90 €) si se solicita recogida a domicilio; devolución siempre gratuita si hay defecto o error de envío.
  - **Almacén:** Zona dedicada de devoluciones con objetivo de ***time-to-restock* <= 48 horas**, eliminando la depreciación de temporada (~95.000 €/año recuperables).
- **Economía circular (*Ruta Urbana Re-Wear*):** Limpieza higiénica de suelas/plantillas nuevas (coste ~8 €/par) y venta en sección exclusiva de la web ("Segunda Vida Certificada") a 54 €/par con garantía limitada. Sobre 1.914 pares, incluso vendiendo el 85 % (~1.627 pares), genera `~87.858 €` de ingresos brutos (~74.800 € descontando reacondicionamiento), pasando de una pérdida de 59.334 € a recuperar totalmente el coste y generar margen positivo y refuerzo de marca sostenible.
- **Retorno:** Incluso reduciendo la tasa de devolución de forma prudente del 29 % al 22 %, acelerando *restock* y activando *Re-Wear* + *PUDO*, el ahorro/recuperación anual supera fácilmente los **180.000 – 220.000 €/año** frente a una inversión de 14.000 €.

### Preguntas de reflexión final
- ¿Qué posibles reacciones negativas de clientes podrían surgir al empezar a cobrar la recogida a domicilio en reembolsos y cómo lo comunicarías transparentemente?
- ¿Cómo evitarías que la sección *Ruta Urbana Re-Wear* (54 €) canibalice las ventas del calzado nuevo (89 €)?

---

## 7. Evaluación

### Evaluación diagnóstica breve (inicio de sesión — 5 minutos)
1. En una tienda online, ¿qué suele costar más por unidad gestionada: preparar y enviar un pedido nuevo o recibir, revisar y procesar una devolución? (Envío nuevo / Iguales / Devolución).
2. En tu empresa actual, ¿cuál es el tiempo medio desde que llega un producto devuelto hasta que vuelve a estar disponible para la venta o resuelto? (<48 h / 3-7 días / >1 semana / No lo medimos).
3. ¿Qué porcentaje de vuestras devoluciones actuales se convierte en un cambio de producto o crédito en tienda frente a reembolso?

### Evaluación formativa durante la sesión
- Verificación en tiempo real durante la Actividad 2 de que los equipos priorizan la recuperación neta (no reparar productos cuya reparación supera su valor residual) y redactan reglas de triaje claras.
- Contraste crítico durante la defensa de *Calzado Ruta Urbana S.L.* sobre el equilibrio entre experiencia de cliente, prevención y control de costes.

### Evaluación sumativa al final de la sesión
1. **Mini-prueba práctica (10 min):** 4 preguntas aplicadas (identificar 3 costes ocultos de la logística inversa, elegir la disposición correcta A/B/C/D en dos ejemplos numéricos, proponer dos medidas contra el *bracketing* y explicar cómo se calcula la tasa de retención de devoluciones).
2. **Entregable individual (Actividad 3):** Protocolo *RMA*, política de devoluciones y piloto circular propio evaluados mediante la rúbrica.

### Rúbrica de evaluación

| Criterio | Insuficiente (1) | En desarrollo (2) | Adecuado (3) | Destacado (4) |
| --- | --- | --- | --- | --- |
| **Diagnóstico económico y causas raíz** | Subestima el coste real (solo cuenta portes) o no distingue causas prevenibles. | Identifica varios costes y motivos pero sin cuantificación ni priorización. | Cuantifica costes directos e indirectos (depreciación, mano de obra) y prioriza causas prevenibles. | Conecta datos *RMA* con cuenta de resultados, identificando fugas por SKU, *time-to-restock* y palancas de prevención en origen. |
| **Política de devoluciones y flujo *RMA*** | Propone políticas extremas (todo gratis sin control o barreras excesivas sin soporte legal). | Mejora parcialmente el proceso pero mantiene gestión manual o sin incentivo a cambios. | Diseña un portal/flujo *RMA* claro con incentivos a cambio/vale, uso de *PUDO* y *SLA* de revisión <= 48-72 h. | Equilibra conversión, retención de ingresos, control de *bracketing*/fraude y cumplimiento normativo con comunicación orientada al cliente. |
| **Triaje y recuperación de valor (Grados A/B/C/D)** | No define criterios de inspección ni salidas para productos no vendibles como nuevos. | Clasifica productos de forma genérica sin criterios claros de rentabilidad. | Establece un árbol de triaje objetivo por grados y asigna destinos rentables a cada categoría. | Maximiza el valor residual neto mediante criterios medibles en almacén y diseña canales concretos de reacondicionamiento o despiece. |
| **Integración de economía circular** | Se limita a mencionar "reciclar más" sin plan operativo. | Propone una idea sostenible pero sin evaluar viabilidad económica ni logística. | Plantea una iniciativa realista de reutilización de envases o *re-commerce* con lógica operativa clara. | Integra economía circular como ventaja competitiva rentable (circuito cerrado o *re-commerce*), cuantificando impacto económico y ambiental. |

### Actividad de autoevaluación o reflexión
Cierre reflexivo individual de 5 minutos (*De centro de coste a fuente de valor*):
- ¿Qué porcentaje de las devoluciones o garantías de mi empresa podríamos evitar atacando información, embalaje o calidad antes del envío?
- ¿Cuántos días tarda hoy un producto devuelto en nuestra empresa en convertirse otra vez en valor (o en caja)?
- ¿Qué único cambio en nuestra política o proceso de devoluciones propondré implantar en el próximo trimestre?

---

## 8. Materiales y recursos

### Guion de diapositivas (estructura slide por slide)

| Slide | Título | Contenido clave y recurso visual |
| --- | --- | --- |
| **1** | Portada: Logística inversa | Título, Bloque 8 (6/8), puente desde Modelos logísticos (Tema 5) y objetivos del día. |
| **2** | El iceberg de las devoluciones | Resultados de la Actividad 1: comparativa de costes de un envío directo vs. un flujo inverso completo. |
| **3** | Los 5 flujos de la logística inversa | Mapa visual: desistimiento, garantías/reparación, errores propios, envases retornables y fin de vida. |
| **4** | Por qué la inversa rompe los almacenes | Tabla comparativa de complejidad: logística directa (predecible) vs. inversa (asimétrica y urgente). |
| **5** | Prevención en origen | Las 5 palancas de mayor retorno antes de la compra (tallas, contenido real, embalaje, calidad, *picking*). |
| **6** | Política de devoluciones estratégica | Matriz comparativa: gratis a domicilio vs. *PUDO* vs. cambio instantáneo vs. vale vs. *returnless refund*. |
| **7** | Anatomía de un proceso *RMA* ágil | Flujograma en 5 pasos con objetivo *time-to-restock* <= 48 horas y captura de motivos estructurados. |
| **8** | Árbol de triaje A / B / C / D | Diagrama de decisión para maximizar recuperación de valor (restock, *refurbish*, reparar, reciclar). |
| **9** | Instrucciones Actividad 2 | Consigna del laboratorio de triaje sobre 6 devoluciones reales y reglas de 3 minutos por unidad. |
| **10** | De la logística inversa a la economía circular | Jerarquía circular y modelos *Closed-Loop*, envases retornables, *re-commerce*, *trade-in* y *PaaS*. |
| **11** | Cuadro de mando de logística inversa | 6 *KPIs* clave: tasa devolución por SKU, tasa de retención (cambios), *time-to-restock*, % recuperación valor, coste/devolución. |
| **12** | Caso práctico: Calzado Ruta Urbana S.L. | Resumen de datos financieros, motivos de devolución y el reto del 29 %. |
| **13** | Solución comentada y *Re-Wear* | Escandallo del ahorro anual, política híbrida *PUDO*/cambios y negocio circular Grado B. |
| **14** | Síntesis y puente al Tema 7 | Los 5 principios clave y transición hacia *Modelo de Amazon* (donde devoluciones y *fulfillment* marcan el estándar del mercado). |

### Ficha de trabajo del alumnado
Documento práctico de 2 páginas con:
- Escandallo del coste completo de 1 devolución (Actividad 1).
- Árbol visual de triaje A/B/C/D en blanco para completar criterios.
- Tabla de resolución numérica y palancas del caso *Calzado Ruta Urbana S.L.*

### Plantilla o herramienta práctica replicable
**Plantilla: Diseño de Proceso *RMA*, Triaje y Cuadro de Mando de Logística Inversa**

*Parte A — Árbol de triaje y destino:*

| Grado | Criterio objetivo de inspección (<3 min) | Acción operativa | Canal de salida | Objetivo *time-to-restock* | % Valor recuperado objetivo |
| --- | --- | --- | --- | --- | --- |
| **A (Nuevo)** | | | | <= 48 h | 100 % |
| **B (Leve/Caja)** | | | | <= 5 días | 60-80 % |
| **C (Averiado)** | | | | <= 10 días | 30-50 % |
| **D (Irrecuperable)** | | | | Mensual | Coste mínimo / Reciclaje |

*Parte B — Cuadro de mando mensual:*
- Tasa global de devoluciones (%) y Top 5 SKU más devueltos.
- % de devoluciones prevenibles (error propio / daño transporte / talla).
- Tasa de retención (% cambios + vales sobre total devoluciones).
- *Time-to-restock* medio (horas/días).
- Coste medio integral por devolución (€) y valor neto recuperado (€).

### Lecturas o recursos recomendados
- Rogers, D. S., & Tibben-Lembke, R. (1998). *Going Backwards: Reverse Logistics Trends and Practices*. Reverse Logistics Executive Council. (Obra fundacional muy clara).
- Ellen MacArthur Foundation. Guías conceptuales sobre diseño de modelos de negocio en economía circular y circuitos cerrados.
- Dekker, R., Fleischmann, M., Inderfurth, K., & Van Wassenhove, L. N. (eds.). *Reverse Logistics: Quantitative Models for Closed-Loop Supply Chains*. Springer.

### Vídeos, artículos y fuentes adicionales *(requieren validación previa)*
> **Nota para el formador:** Comprobar vigencia legal, enlaces y actualidad de estudios antes de compartir con el alumnado.
- Normativa española y europea de defensa de los consumidores y usuarios (derecho de desistimiento de 14 días naturales en comercio electrónico, excepciones y garantías legales) *(verificar redacción vigente en el BOE / EUR-Lex antes de citar plazos o excepciones específicas en clase)*.
- Normativa de Responsabilidad Ampliada del Productor (RAP), envases comerciales/domésticos y residuos RAEE en España *(verificar decretos vigentes antes de abordar obligaciones legales concretas)*.
- Estudios recientes sobre tasas de devolución en e-commerce en España y Europa (por ejemplo, informes de plataformas *RMA* especializadas, IAB Spain o asociaciones logísticas) *(comprobar año de publicación y metodología antes de citar estadísticas)*.

### Glosario de términos clave

| Término | Definición práctica |
| --- | --- |
| ***Bracketing*** | Compra intencionada de varias tallas o variantes para probar en casa y devolver el resto. |
| ***Closed-loop supply chain*** | Cadena diseñada para recuperar productos o envases usados y reintroducirlos en nuevos ciclos. |
| ***Re-commerce*** | Venta organizada de productos devueltos, reacondicionados o de segunda mano con garantía. |
| ***Refurbishment*** | Reacondicionamiento técnico y estético de un producto devuelto para devolverlo a estado vendible. |
| ***Returnless refund*** | Reembolso económico al cliente sin exigir el retorno físico de un artículo de bajo valor cuyo coste inverso supera su valor residual. |
| ***RMA*** | Autorización digital previa de devolución que captura motivo, pedido y destino antes de recibir el paquete. |
| **Tasa de retención** | Porcentaje de devoluciones convertidas en cambio de producto o crédito en tienda en lugar de reembolso. |
| ***Time-to-restock*** | Tiempo transcurrido desde la llegada física de una devolución hasta su reincorporación al stock disponible. |

---

## 9. Adaptaciones

### Sesión presencial
- Llevar 3 cajas físicas de e-commerce de muestra (por ejemplo: caja estándar normal, caja con doble tira adhesiva lista para devolución y caja dañada/sin protección) para debatir en vivo cómo el *packaging* facilita o destruye la logística inversa.
- Organizar un breve taller de 5 minutos con tarjetas donde cada equipo clasifica rápidamente devoluciones en 4 cestas etiquetadas `A`, `B`, `C`, `D` simulando la mesa de triaje de un almacén.
- Realizar una votación a mano alzada sobre cobrar o no devoluciones a domicilio antes y después de calcular los 386.466 € del caso *Calzado Ruta Urbana S.L.*

### Sesión online síncrona
- Usar una encuesta interactiva al abrir el caso (*¿Cuánto crees que pierde al año una marca de 4,6 M€ con un 29 % de devoluciones?*) para contrastar la intuición frente al dato real calculado.
- Facilitar los 6 artículos de la Actividad 2 en un tablero Miro/FigJam con cuatro columnas `Grado A / B / C / D` donde los equipos arrastran tarjetas y anotan el margen recuperado.
- Mostrar capturas de pantalla (anonimizadas o públicas) de un flujo real de portal *RMA* moderno (selección de motivo -> propuesta automática de cambio de talla gratuito -> QR para punto *PUDO*) para tangibilizar la experiencia de usuario.

### Sesión asíncrona
- Dividir el tema en 4 cápsulas grabadas de 12-15 minutos acompañadas de una hoja de cálculo plantilla para calcular el coste unitario de una devolución en cualquier pyme.
- Solicitar como tarea evaluable el análisis del caso *Calzado Ruta Urbana S.L.* (hoja de cálculo + propuesta de política *RMA* y *Re-Wear* en máximo 2 páginas) más un comentario crítico en foro sobre un ejemplo real de *re-commerce* que haya probado el alumno como consumidor.
- Entregar la Actividad 3 (*Plantilla de Logística Inversa*) en el LMS con evaluación mediante rúbrica.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Aprovecha la operativa de almacén (zonas de cuarentena, *IRA* y *dock-to-stock* del Tema 4) y la red de transporte/*PUDO* y análisis *cost-to-serve* del Tema 5.
- **Competencias que desarrolla:** Diagnóstico financiero de procesos ocultos, diseño de experiencias de cliente rentables, estandarización de operaciones de triaje y pensamiento de economía circular aplicado al negocio.
- **Conexión con el tema anterior:** Completa la otra mitad del **Tema 5 (Modelos logísticos)**: diseña el viaje de vuelta aprovechando las mismas redes de transporte y puntos *PUDO* para evitar que las devoluciones destruyan el margen ganado en la venta.
- **Conexión con el tema posterior:** Enlaza directamente con el **Tema 7 (Modelo de Amazon)**, empresa que ha redefinido las expectativas globales del cliente tanto en entregas ultrarrápidas como en devoluciones sin fricción y mercados de productos reacondicionados (*Amazon Renewed* / *Warehouse*), planteando a las pymes el reto de competir o integrarse en su ecosistema.
- **Evidencia de aprendizaje del alumnado:** Protocolo de triaje A/B/C/D (Actividad 2), plan cuantificado de transformación inversa y *Re-Wear* de *Calzado Ruta Urbana S.L.*, y diseño de proceso *RMA* y piloto circular aplicado a su propia empresa.

---

## Siguientes pasos para el formador

1. **Preparar las tarjetas de la Actividad 2:** Redactar la ficha con los 6 casos de devoluciones variados (electrónica pequeña, prenda impecable, artículo barato con envío caro, pieza con caja rota, producto higiénico abierto y equipo reparable) con sus números cerrados.
2. **Verificar el cuadro numérico de *Calzado Ruta Urbana*:** Comprobar las cifras de coste directo (232.232 €), depreciación Grado A (94.900 €), pérdida Grado B (59.334 €) y proyección de *Re-Wear* para una puesta en común ágil y precisa.
3. **Validar normativa de consumo y residuos:** Revisar el marco legal vigente en España/UE sobre derecho de desistimiento en e-commerce y obligaciones de envases/RAEE antes de responder dudas legales en clase.
4. **Preparar ejemplos B2B además de moda e-commerce:** Tener a mano 2 ejemplos breves de logística inversa B2B (gestión de garantías de maquinaria y *pool* de cajas/palets retornables) para participantes que no vendan al consumidor final.
5. **Lanzar el puente al Tema 7:** Cerrar la sesión preguntando al grupo: *¿Por qué los clientes exigen hoy entrega al día siguiente y devolución sin esfuerzo? ¿Qué maquinaria logística y de datos construyó Amazon para cambiar las reglas del juego, y qué puede copiar (o evitar) una pyme?*
