# Modelos logísticos

## 1. Ficha del tema

| Campo | Detalle |
| --- | --- |
| **Título del tema** | Modelos logísticos |
| **Bloque y posición dentro del programa** | Bloque 8: Cadena de suministro — Tema 5 de 8 |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Mandos intermedios y emprendedores |
| **Nivel de dificultad** | Intermedio |
| **Prerrequisitos** | Haber completado los Temas 1 a 4 del Bloque 8 (Supply chain, Compras, Aprovisionamiento y Almacenes) y manejar nociones básicas de costes fijos/variables y márgenes comerciales. |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado será capaz de seleccionar y diseñar el modelo de distribución y transporte más rentable para una pyme o negocio digital —evaluando red centralizada frente a descentralizada, *cross-docking*, externalización (*3PL*) y optimización de rutas— equilibrando costes logísticos y niveles de servicio. |

---

## 2. Objetivos de aprendizaje

1. **Comparar** distintas arquitecturas de red logística (entrega directa, almacén centralizado, plataformas regionales, *hub-and-spoke* y *cross-docking*) evaluando sus compensaciones entre coste, inventario y plazo. *(Nivel de Bloom: Analizar)*
2. **Seleccionar** la modalidad de transporte, nivel de carga (*FTL*, *LTL*, paquetería, última milla) y grado de externalización (*in-house*, *3PL*, *4PL*, *dropshipping*) más adecuados al perfil de producto y cliente de una pyme. *(Nivel de Bloom: Evaluar)*
3. **Aplicar** criterios de consolidación de cargas, cálculo de peso volumétrico y planificación de rutas (*TMS* y ventanas horarias) para reducir el coste por envío y las entregas fallidas. *(Nivel de Bloom: Aplicar)*
4. **Analizar** la estructura de costes logísticos totales (*cost-to-serve*) frente a la promesa de nivel de servicio para proteger el margen en canales B2B y e-commerce. *(Nivel de Bloom: Analizar)*
5. **Diseñar** una red y política de distribución omnicanal viable (incluyendo *Click & Collect* y puntos de conveniencia) adaptada a un caso empresarial real. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Arquitecturas de distribución: red centralizada, descentralizada y *cross-docking*

**Explicación breve y clara**
Diseñar un modelo logístico consiste en decidir **dónde situar los puntos de inventario y cómo fluye la mercancía** hasta el cliente. No existe una arquitectura universalmente superior: centralizar todo en un único almacén minimiza el stock de seguridad total y los costes fijos, pero encarece el transporte capilar y alarga plazos a zonas lejanas; descentralizar acerca el producto al cliente y acorta entregas, pero multiplica el stock y la complejidad operativa. El **cross-docking** y las redes **hub-and-spoke** permiten capturar eficiencia de transporte sin acumular inventario en nodos intermedios.

**Conceptos clave**
- Distribución directa (fábrica/almacén -> cliente) frente a distribución escalonada con centros logísticos regionales.
- Modelo *hub-and-spoke* (concentración de envíos en un centro distribuidor principal y reparto radial).
- *Cross-docking* (pre-distribuido y consolidado): tránsito sin almacenaje intermedio (<24 horas).
- *Dropshipping* (envío directo del proveedor al cliente final sin tocar nuestro almacén).
- Compensación estratégica (*trade-off*): a más centros logísticos -> menor coste de última milla y menor plazo, pero mayor coste de inventario, transporte primario e instalaciones.

**Definiciones necesarias**
- ***Cross-docking*:** Técnica logística en la que la mercancía recibida en una plataforma se clasifica, consolida y transfiere directamente a los vehículos de salida sin pasar por almacenamiento en estanterías, reduciendo espacio, manipulación y tiempos de tránsito.
- **Red *hub-and-spoke*:** Arquitectura de distribución en la que un nodo central (*hub*) consolida flujos procedentes de distintos orígenes y los redistribuye hacia múltiples destinos periféricos (*spokes*) optimizando la ocupación de vehículos.

**Ejemplo práctico realista**
Una empresa de equipamiento de oficina con almacén único en Guadalajara atiende a toda España en 24-48 h usando transporte urgente centralizado. Al intentar abrir un almacén propio en Barcelona y otro en Málaga para entregar el mismo día, comprueba que tendría que duplicar el inventario (+280.000 €) y pagar tres alquileres. Opta por mantener su almacén central en Guadalajara y utilizar un operador con red *hub-and-spoke* y *cross-docking* nocturno en Barcelona y Sevilla: logra entregas antes de las 14:00 h sin duplicar stock.

**Errores frecuentes**
- Abrir delegaciones o micro-almacenes por intuición comercial sin cuantificar el aumento de stock de seguridad y duplicidad de costes fijos.
- Adoptar *dropshipping* con proveedores sin *SLA* claros, perdiendo control sobre plazos, embalaje y experiencia de marca.
- Confundir *cross-docking* con almacenaje temporal: si no hay sincronización horaria e información previa (EDI/etiquetas), el muelle se colapsa.

**Preguntas que el alumnado debería poder responder**
- ¿Por qué pasar de un almacén central a tres almacenes regionales aumenta el inventario total necesario para mantener el mismo nivel de servicio?
- ¿Qué requisitos de información y sincronización son imprescindibles para que funcione el *cross-docking*?
- ¿En qué tipo de productos tiene sentido el *dropshipping* y en cuáles resulta peligroso?

---

### 3.2. Modalidades de transporte, externalización (*3PL/4PL*) y optimización de rutas

**Explicación breve y clara**
Elegir cómo se mueve la mercancía implica combinar adecuadamente **transporte de larga distancia / arrastre** (camión completo *FTL*, grupaje *LTL*, ferrocarril, marítimo o aéreo) y **distribución capilar / última milla** (paquetería urgente, reparto refrigerado, puntos de conveniencia o taquillas *lockers*). Para la mayoría de pymes, la decisión crítica es **hacerlo con flota propia o externalizarlo** mediante operadores especializados (*3PL*), integrando herramientas de planificación de rutas (*TMS*) que reduzcan kilómetros en vacío y entregas fallidas.

**Conceptos clave**
- Carga completa (*FTL*, *Full Truck Load*), carga fraccionada/grupaje (*LTL*, *Less Than Truck Load*) y paquetería *parcel*.
- Niveles de externalización logística: *1PL* (propia), *2PL* (transporte contratado), *3PL* (operador integral: almacenaje + preparación + transporte), *4PL* (gestor/orquestador tecnológico de toda la red).
- Optimización de rutas (*routing*): ventanas horarias de entrega, capacidad vehicular, zonas de bajas emisiones (ZBE), entregas en primer intento (*First-Time Delivery Rate*) y *proof of delivery* (POD digital).
- Distribución omnicanal: envío a domicilio, *Click & Collect* (recogida en tienda), *Ship-from-Store* y redes de puntos de recogida (*PUDO* / *lockers*).

**Definiciones necesarias**
- **Operador *3PL* (*Third-Party Logistics*):** Proveedor externo especializado al que una empresa subcontrata total o parcialmente funciones de almacenaje, preparación de pedidos, gestión de devoluciones y transporte bajo acuerdos de nivel de servicio.
- ***TMS* (*Transportation Management System*):** Software que permite seleccionar transportistas óptimos por tarifa y zona, generar etiquetas, planificar rutas eficientes, consolidar envíos y monitorizar entregas en tiempo real.

**Ejemplo práctico realista**
Una distribuidora de bebidas artesanales en Madrid operaba con 4 furgonetas propias para repartir a bares y tiendas, con rutas fijas diseñadas "por costumbre" y un 22 % de kilómetros en vacío. Al implantar un software sencillo de optimización de rutas (que agrupa clientes por ventanas horarias de descarga y restringe accesos a ZBE) y externalizar los pedidos fuera de la Comunidad de Madrid mediante grupaje paletizado *LTL*, pasó a cubrir la misma cartera con 3 furgonetas y redujo un 18 % su coste total de reparto.

**Errores frecuentes**
- Mantener flota propia infrautilizada en pymes sin densidad de entregas suficiente por "sensación de control".
- Trabajar con un único transportista para todos los códigos postales y pesos en lugar de combinar 2-3 operadores según fortalezas (por ejemplo, uno para paquetería ligera y otro para bulto voluminoso o frío).
- Ignorar la tasa de entregas fallidas en el primer intento (*FTDR*) en e-commerce, que dispara costes de reexpedición y reclamaciones.

**Preguntas que el alumnado debería poder responder**
- ¿Cuándo compensa a una pyme pasar de logística propia (*1PL/2PL*) a un operador *3PL*?
- ¿Qué diferencia práctica existe entre contratar carga completa (*FTL*), grupaje (*LTL*) y paquetería?
- ¿Cómo reducen los puntos de recogida (*PUDO*/*lockers*) el coste y las incidencias de la última milla?

---

### 3.3. Costes logísticos totales (*cost-to-serve*) y tarifas de transporte

**Explicación breve y clara**
El transporte suele esconder múltiples conceptos que erosionan el margen si no se auditan con lupa: recargos por combustible, peso volumétrico, entregas en zonas remotas, reexpediciones por ausencia, tiempos de espera en descarga o transporte en temperatura controlada. El enfoque ***cost-to-serve*** calcula cuánto cuesta realmente atender a cada cliente, canal o pedido (sumando preparación + embalaje + transporte + incidencias + devoluciones), revelando a menudo que pedidos pequeños con "envío gratis" destruyen margen.

**Conceptos clave**
- Desglose del coste logístico: almacenaje, manipulación (*picking/packing*), transporte primario (troncal), transporte secundario (última milla), seguros, recargos y logística inversa.
- **Peso real frente a peso volumétrico** (`Volumen en m³ × factor de conversión del transportista`, habitualmente entre 167 y 333 kg/m³ según modalidad; *verificar factor exacto en el contrato del operador*).
- Análisis *cost-to-serve* por canal (B2B vs. D2C), zona geográfica y tamaño de cesta.
- Política comercial de envíos en e-commerce: umbral de envío gratuito calculado sobre margen bruto, tarifas por tramos y recargos por envío exprés.

**Definiciones necesarias**
- **Peso volumétrico:** Peso teórico calculado a partir de las dimensiones exteriores del bulto; el transportista factura por el mayor entre el peso real en báscula y el peso volumétrico para compensar bultos ligeros que ocupan mucho espacio en el vehículo.
- ***Cost-to-serve* (Coste de servir):** Cálculo granular de todos los costes logísticos y comerciales directos e indirectos necesarios para atender un pedido, cliente o canal específico, que permite evaluar su rentabilidad neta real.

**Ejemplo práctico realista**
Una tienda online de almohadas ergonómicas ofrece "envío gratis a partir de 25 €". Cada almohada pesa 1,1 kg, pero en su caja rígida ocupa 0,048 m³; con el factor volumétrico de su agencia (250 kg/m³), se factura como un paquete de **12 kg** (9,80 € de porte en lugar de 4,50 €). Al cambiar a envasado al vacío enrollado (reduciendo el volumen a un tercio) y subir el umbral de envío gratis a 45 € (fomentando compra de 2 unidades o funda extra), el coste de transporte baja un 44 % y el pedido pasa de perder dinero a generar un 24 % de margen neto.

**Errores frecuentes**
- Ofrecer "envío gratis en 24 h sin mínimo" en e-commerce copiando a grandes plataformas sin calcular si el margen del carrito medio lo soporta.
- No auditar mensualmente las facturas de transporte contra los pesos reales y tarifas pactadas.
- Aplicar un porcentaje medio único de coste logístico a todos los clientes, ocultando que los clientes con pedidos muy pequeños y frecuentes generan pérdidas.

**Preguntas que el alumnado debería poder responder**
- ¿Cómo se calcula el peso volumétrico y qué dos acciones operativas permiten reducirlo?
- ¿Cómo debe calcular una pyme digital su umbral mínimo de envío gratuito?
- ¿Por qué dos clientes con igual facturación anual pueden tener rentabilidades radicalmente distintas según su *cost-to-serve*?

---

### 3.4. Niveles de servicio, promesa al cliente y gestión de transportistas

**Explicación breve y clara**
La velocidad máxima (entregar en 2 horas o en 24 horas) no siempre es lo que más valora el cliente: en la mayoría de casos, los compradores B2B y B2C valoran aún más la **fiabilidad de la promesa** (recibir exactamente en la ventana acordada), la **visibilidad proactiva** (enlaces de seguimiento y avisos antes de que surja un retraso) y la **flexibilidad** (elegir horario o punto de recogida). Gestionar bien los transportistas exige medir su desempeño por zona y diversificar opciones mediante integración multitransportista.

**Conceptos clave**
- Componentes del nivel de servicio logístico: plazo comprometido, puntualidad (*On-Time*), integridad de la mercancía (tasa de roturas/daños), entregas al primer intento (*FTDR*) y comunicación proactiva de incidencias.
- Promesa realista de entrega (*under-promise, over-deliver*): incorporar hora de corte (*cut-off time*) real del almacén.
- Gestión multitransportista (*multi-carrier*): asignar automáticamente cada pedido al operador con mejor relación coste/puntualidad por código postal, peso y tipo de servicio.
- Seguimiento post-compra (*branded tracking*) y gestión de incidencias antes de que el cliente reclame.

**Definiciones necesarias**
- **Hora de corte (*cut-off time*):** Hora límite diaria hasta la cual un pedido recibido se prepara y expide el mismo día para cumplir la promesa de entrega comprometida.
- **Tasa de entrega en primer intento (*FTDR*):** Porcentaje de envíos entregados satisfactoriamente la primera vez que el repartidor acude al destino, sin ausencias, direcciones erróneas ni reprogramaciones.

**Ejemplo práctico realista**
Una pyme de decoración de hogar en Valencia prometía "entrega en 24 h" en toda su web, pero su almacén cerraba a las 16:00 h y las ventas pico llegaban a las 21:00 h, generando frustración porque el pedido tardaba 48 h reales. Al ajustar el mensaje dinámico en ficha de producto ("Pide antes de las 15:00 h y recíbelo mañana; después, en 48 h") y activar avisos automáticos por SMS/WhatsApp con cambio de franja horaria, las reclamaciones a soporte cayeron un 62 % y la valoración logística subió de 3,6 a 4,7 sobre 5.

**Errores frecuentes**
- Prometer plazos irreales en el checkout por presión de marketing sin consultar las horas de corte del almacén ni los plazos de zonas no peninsulares (Baleares, Canarias, zonas rurales).
- Enterarse de que un envío lleva 3 días retenido en delegación solo cuando el cliente llama enfadado.
- Mantener al mismo transportista por inercia sin revisar mensualmente su *OTIF* por provincias ni renegociar tarifas anualmente.

**Preguntas que el alumnado debería poder responder**
- ¿Por qué suele ser más rentable ofrecer una promesa fiable de 48 h con ventana horaria que una promesa incumplida de 24 h?
- ¿Qué ventajas aporta una estrategia *multi-carrier* gestionada con reglas automáticas?
- ¿Cómo impacta la comunicación proactiva del estado del envío en el coste de atención al cliente?

---

## 4. Metodología didáctica

Sesión de 4 horas (240 minutos) altamente práctica, articulada en torno al análisis de redes de distribución, cálculo de peso volumétrico y *cost-to-serve*, y rediseño integral del modelo logístico de una empresa con cadena de frío.

| Fase | Tiempo | Duración | Qué hace el formador | Qué hace el alumnado |
| --- | --- | --- | --- | --- |
| **1. Apertura y activación** | 00:00 – 00:25 | 25 min | Conecta con el muelle de expedición del Tema 4, realiza diagnóstico rápido y dinamiza la Actividad 1 (*La trampa del envío gratis*). | Responde al sondeo inicial y calcula en parejas el umbral real de envío gratis de un e-commerce ficticio analizando margen y porte. |
| **2. Exposición breve / microlearning (Bloque A)** | 00:25 – 00:55 | 30 min | Expone apartados 3.1 y 3.2: redes centralizadas vs. descentralizadas, *cross-docking*, *hub-and-spoke*, *FTL/LTL/parcel*, *3PL/4PL* y optimización de rutas. | Contrasta esquemas de red, analiza ejemplos de *cross-docking* y debate ventajas/riesgos de externalizar a un *3PL*. |
| **3. Actividad práctica en equipo (Cost-to-serve y transporte)** | 00:55 – 01:35 | 40 min | Facilita la Actividad 2 (*Auditoría de peso volumétrico y matriz multi-carrier*), guiando los cálculos de tarifas y comparación de escenarios. | En equipos de 3-4 personas, calcula peso volumétrico, compara 3 tarifas de transporte por zonas/pesos y selecciona la regla *multi-carrier* óptima. |
| **4. Exposición breve / microlearning (Bloque B)** | 01:35 – 02:05 | 30 min | Desarrolla apartados 3.3 y 3.4: estructura completa de *cost-to-serve*, políticas de envío e-commerce, niveles de servicio, *cut-off*, *FTDR* y gestión proactiva de transportistas. | Identifica recargos ocultos en una factura modelo de transporte y diseña una promesa realista de entrega en tienda online. |
| **5. Análisis de caso práctico** | 02:05 – 02:55 | 50 min | Presenta el caso *HuertaDirecta Gourmet S.L.* (distribución refrigerada B2B + D2C desde Murcia) con datos de costes, mermas y entregas fallidas. | En equipo, evalúa 3 alternativas de modelo logístico (flota propia, *cross-docking* regional con *3PL* en frío y red *PUDO*/ventanas), cuantificando costes y servicio. |
| **6. Discusión guiada y transferencia** | 02:55 – 03:35 | 40 min | Modera la puesta en común de decisiones del caso y guía la Actividad 3 (*Rediseño del modelo logístico y política de envíos de mi empresa*). | Defiende sus cálculos ante la clase y elabora el lienzo de red logística, política de portes y cuadro de evaluación de transportistas de su negocio. |
| **7. Síntesis, evaluación y cierre** | 03:35 – 04:00 | 25 min | Sintetiza los 5 principios de diseño de red y transporte, aplica prueba sumativa breve (10 min), facilita autoevaluación y enlaza con el Tema 6 (Logística inversa). | Realiza el cuestionario final, completa su reflexión individual y plantea consultas sobre contratación *3PL* o paquetería. |

**Total acumulado:** 25 + 30 + 40 + 30 + 50 + 40 + 25 = **240 minutos (4 horas exactas)**.

---

## 5. Actividades prácticas

### Actividad 1 (Activación): La trampa del "envío gratis en 24 horas"

- **Objetivo:** Evidenciar el impacto directo del coste de transporte y embalaje en la rentabilidad unitaria de un pedido digital y calcular un umbral sostenible de envío gratuito.
- **Instrucciones para el alumnado:**
  1. En parejas, analizad una tienda online de cosmética con ticket medio de 30 €, margen bruto del 45 % (13,50 €), coste de *picking/packing* + caja de 2,80 € y porte urgente 24 h de 5,90 € (más 0,60 € de coste medio por incidencias/reentregas).
  2. Calculad la contribución neta actual por pedido con "envío gratis sin mínimo" y qué ocurre si además hay un 15 % de descuento promocional.
  3. Proponed un umbral mínimo de envío gratis y una tarifa diferenciada (48 h estándar / 24 h exprés / punto de recogida) que eleve el margen sin hundir la conversión.
- **Materiales necesarios:** Calculadora y ficha de escenario rápido.
- **Tiempo estimado:** 15 minutos (dentro de la fase de Apertura).
- **Rol del formador:** Mostrar cómo pequeñas diferencias de 2-3 € en transporte o una promoción mal calculada borran todo el beneficio del pedido.
- **Producto o entregable esperado:** Escandallo unitario antes/después y propuesta de política comercial de envíos en 3 niveles.
- **Criterios de éxito:** Cálculo correcto del margen restante y coherencia comercial entre coste de envío, umbral mínimo y valor percibido por el cliente.

### Actividad 2 (Aplicación): Peso volumétrico y diseño de reglas *multi-carrier*

- **Objetivo:** Aplicar el cálculo de peso volumétrico y criterios de selección de transportistas para reducir la factura de envíos de una pyme omnicanal.
- **Instrucciones para el alumnado:**
  1. En equipos de 3-4 personas, revisad la tabla de 4 productos tipo (uno pesado/compacto, uno ligero/voluminoso, un pedido multipaquete B2B de 180 kg en medio palet y un envío a Baleares) junto con las tarifas simplificadas de 3 operadores (Paquetería Exprés, Agencia Industrial/Paletería y Operador *PUDO/Lockers*).
  2. Calculad el peso tasable (mayor entre real y volumétrico con factor 250 kg/m³) y el coste total de cada envío con cada operador.
  3. Definid 4 reglas automáticas de asignación (*routing* de transportistas en el ERP/e-commerce) y una recomendación de rediseño de embalaje para el producto ligero/voluminoso.
- **Materiales necesarios:** Hoja de tarifas simplificadas, ficha de productos y calculadora/hoja de cálculo.
- **Tiempo estimado:** 40 minutos.
- **Rol del formador:** Revisar la conversión correcta de centímetros a metros cúbicos (`L × A × H en cm / 1.000.000 × 250`, equivalente a dividir por `4.000`) y comprobar que no eligen paquetería para el medio palet industrial si la paletería *LTL* resulta más barata y segura.
- **Producto o entregable esperado:** Cuadro comparativo de costes por envío y tabla de 4 reglas *multi-carrier*.
- **Criterios de éxito:** Cálculos exactos de peso volumétrico y ahorro demostrado frente a utilizar un único operador para todos los perfiles.

### Actividad 3 (Transferencia a la realidad laboral): Lienzo de modelo logístico propio

- **Objetivo:** Diseñar o auditar la red de distribución, modalidad de transporte y *SLA* de transportistas aplicables al negocio actual o proyecto del participante.
- **Instrucciones para el alumnado:**
  1. Individualmente, cumplimenta la *Plantilla de Diseño de Modelo Logístico y Evaluación de Transportistas* (sección 8) para tu empresa o proyecto emprendedor.
  2. Define: arquitectura elegida (centralizada, *3PL*, *cross-docking*, omnicanal), matriz de modalidades por tipo de pedido/zona, política de portes/horarios de corte y los 4 *KPIs* que auditarás cada mes a tus transportistas.
  3. Identifica una fuga de coste de transporte actual (peso volumétrico, reexpediciones, urgencias evitables o rutas subóptimas) y fija un objetivo de ahorro porcentual a 6 meses.
- **Materiales necesarios:** Plantilla de Diseño de Modelo Logístico (sección 8).
- **Tiempo estimado:** 25 minutos (dentro de la fase 6).
- **Rol del formador:** Ayudar a emprendedores de servicios o productos digitales a adaptar el ejercicio a la distribución de valor/soportes físicos o analizar el caso de un cliente B2B relevante.
- **Producto o entregable esperado:** Lienzo logístico individual con política de envíos y tabla de auditoría mensual de transportistas.
- **Criterios de éxito:** Alineación coherente entre promesa comercial, margen del producto y arquitectura logística seleccionada.

---

## 6. Caso práctico

### Contexto empresarial
**HuertaDirecta Gourmet S.L.** es una pyme agroalimentaria con sede en Murcia (24 empleados, 3,8 millones de euros de facturación anual) que prepara y comercializa cajas de frutas y verduras ecológicas recién recolectadas y platos refrigerados de quinta gama (temperatura controlada 2 °C – 8 °C). Vende a través de dos canales:
- **Canal B2B (55 % ventas):** Tiendas ecológicas y restaurantes en Madrid, Barcelona, Valencia y Sevilla (entregas 2 veces por semana en cajas isotérmicas/palets).
- **Canal D2C e-commerce (45 % ventas):** Suscripciones semanales y pedidos sueltos a particulares en toda la España peninsular (media de 420 pedidos/semana; ticket medio 46 €, margen bruto antes de logística del 44 % = 20,24 €/pedido).

### Situación o problema
El coste logístico total ha escalado hasta el **24,5 % de las ventas**, hundiendo la rentabilidad del canal D2C. Actualmente, HuertaDirecta despacha todos los pedidos D2C individualmente desde Murcia mediante transporte urgente refrigerado nacional puerta a puerta (11,90 €/envío + 2,60 € de caja isotérmica y gel frío = 14,50 €/pedido antes de *picking*).
Además, en Madrid y Barcelona (que concentran el **62 % de sus clientes D2C**), la tasa de entregas fallidas en el primer intento (*FTDR*) es solo del **76 %**: al no estar el cliente en casa durante el horario laboral, el paquete vuelve a plataforma y se reintenta al día siguiente, perdiendo frescura y generando un **7,5 % de reclamaciones/mermas por rotura de cadena de frío** (coste medio de reposición: 34 € por incidencia).
Por otro lado, en el canal B2B utilizan dos furgonetas refrigeradas propias que viajan dos veces por semana a Valencia y Madrid con una ocupación media del 58 % y regresan vacías.

### Datos disponibles

| Concepto / Alternativa analizada | Situación actual | Alternativa A: *Cross-docking* nocturno *3PL* frío (Madrid y Barcelona) + última milla con ventana horaria | Alternativa B: Almacén satélite propio refrigerado en Madrid + paquetería resto |
| --- | --- | --- | --- |
| Modelo D2C (420 pedidos/semana; 21.840/año) | Envío individual directo desde Murcia (paquetería frío nacional) | Arrastre consolidado refrigerado *LTL/FTL* a *hubs* 3PL de Madrid y BCN (62 % pedidos) + *cross-docking* y reparto en franja vespertina (18-21 h) o *Click & Collect* en tiendas B2B asociadas | Alquiler cámara refrigerada + 2 operarios en Madrid + envío directo desde Madrid a mitad norte |
| Coste transporte + embalaje frío D2C (zona Madrid/BCN — 13.540 pedidos/año) | 14,50 €/pedido | 8,90 €/pedido (arrastre consolidado 2,40 € + *cross-docking*/última milla vespertina 5,10 € + caja reutilizable/ligera 1,40 €) | 9,80 €/pedido + **68.000 €/año** de costes fijos extra (alquiler cámara, energía, 2 salarios) |
| Coste transporte + embalaje D2C (resto Península — 8.300 pedidos/año) | 14,50 €/pedido | 13,20 €/pedido (negociando volumen y entrega en 2 días fijos: martes y jueves) | 13,50 €/pedido |
| Tasa entregas en 1.er intento (*FTDR*) Madrid/BCN | 76 % | 95 % (elección de franja 18-21 h + avisos SMS + opción recogida en tienda asociada) | 84 % |
| Incidencias/mermas por frío (sobre 21.840 pedidos/año; 34 €/incidencia) | 7,5 % (~1.638 incidencias = 55.692 €/año) | 1,8 % (~393 incidencias = 13.362 €/año) | 3,5 % (~764 incidencias = 25.976 €/año) |
| Impacto en canal B2B | 2 furgonetas propias con 58 % ocupación y retorno en vacío | Aprovecha mismo camión troncal *3PL* refrigerado a Madrid/BCN consolidando carga B2B + D2C; elimina 1 furgoneta propia (-38.000 €/año) | Mantiene costes fijos elevados y duplica stock perecedero (riesgo merma) |
| Inversión inicial de integración (*TMS*/avisos/TI) | 0 € | 12.000 € (integración *TMS* + avisos SMS + red de 15 tiendas B2B *Click & Collect*) | 42.000 € (adecuación cámara, frío y equipamiento) |

### Preguntas de análisis
1. Calcula el **coste anual total del canal D2C** (transporte + embalaje + mermas por incidencias + costes fijos adicionales) para la Situación actual, la Alternativa A y la Alternativa B.
2. ¿Por qué abrir un almacén propio refrigerado en Madrid (Alternativa B) es especialmente arriesgado tratándose de producto fresco perecedero?
3. ¿Cómo genera sinergias entre el canal B2B y el canal D2C la Alternativa A (consolidación de arrastre + *Click & Collect* en tiendas ecológicas clientes)?
4. ¿Qué política de días de entrega y umbral mínimo de pedido recomendarías para el 38 % de pedidos D2C del resto de la Península?

### Tarea a realizar
En equipos de 4 personas, preparad una recomendación ejecutiva para la dirección de HuertaDirecta Gourmet S.L. que incluya:
1. Cuadro comparativo cuantificado de costes y ahorro anual neto entre las tres opciones (incluyendo el ahorro en B2B y plazo de retorno de la inversión de 12.000 €).
2. Diseño del modelo logístico recomendado (flujos B2B y D2C, consolidación, *cross-docking* y última milla).
3. Propuesta comercial de política de envíos (días de expedición fijos, franjas horarias, incentivo a recogida en tiendas ecológicas asociadas y umbral de envío gratis).
4. Cuadro de 5 *SLA* exigibles al operador *3PL* refrigerado (temperatura, puntualidad, *FTDR* y gestión de incidencias).

### Posibles soluciones o criterios de análisis
- **Comparativa cuantitativa aproximada (canal D2C anual):**
  - *Situación actual:* Transporte/embalaje `21.840 × 14,50 = 316.680 €` + Mermas `55.692 €` = **372.372 €/año**.
  - *Alternativa A (Cross-docking 3PL frío):* Madrid/BCN `13.540 × 8,90 = 120.506 €` + Resto `8.300 × 13,20 = 109.560 €` + Mermas `13.362 €` = **243.428 €/año** (ahorro D2C: **~128.944 €/año**). Si además suma el ahorro B2B por consolidar el arrastre y retirar 1 furgoneta propia (**+38.000 €/año**), el beneficio operativo anual supera los **166.900 €/año**, amortizando los 12.000 € de TI en menos de 1 mes.
  - *Alternativa B (Almacén propio Madrid):* Madrid/BCN `13.540 × 9,80 = 132.692 €` + Resto `8.300 × 13,50 = 112.050 €` + Fijos `68.000 €` + Mermas `25.976 €` = **338.718 €/año** (muy inferior a A, mayor inversión inicial de 42.000 € y alto riesgo de merma al fragmentar stock fresco en dos cámaras).
- **Decisión recomendada:** **Alternativa A** (*hub-and-spoke* con *cross-docking* nocturno en frío a través de *3PL*, sin almacenar stock en Madrid ni Barcelona para preservar frescura de cosecha).
- **Sinergias omnicanal y política de envíos:**
  - Consolidar pedidos B2B y D2C en el mismo camión troncal nocturno hacia Madrid y Barcelona elevando ocupación por encima del 85 %.
  - Activar **Click & Collect** en las 15 tiendas ecológicas B2B más céntricas (ofreciendo envío gratis al cliente D2C que recoja en tienda y pagando 1,20 € por paquete o generando tráfico cruzado a la tienda asociada).
  - Concentrar expediciones D2C de resto de Península en **dos días fijos de salida** (lunes y miércoles para entregas martes y jueves) y fijar envío gratis a partir de 55 € (o 35 € en *Click & Collect*).
- ***SLA* clave para el *3PL* frío:** Registro continuo de temperatura (2-8 °C) con trazabilidad digital *(validar requisitos técnicos de normativa sanitaria y transporte de mercancías perecederas ATP antes de redactar contrato real)*, *OTIF* >= 97 %, *FTDR* >= 94 %, roturas <1 % y alerta automática ante retraso superior a 2 horas.

### Preguntas de reflexión final
- ¿Qué pasaría si el *3PL* contratado fallara en plena campaña de verano y qué plan de contingencia debería dejar previsto HuertaDirecta?
- ¿Cómo convencerías a las tiendas ecológicas B2B de que actúen como puntos *Click & Collect* de pedidos online sin percibir al canal D2C como competencia desleal?

---

## 7. Evaluación

### Evaluación diagnóstica breve (inicio de sesión — 5 minutos)
1. ¿Qué suele ocurrir con el inventario total de una empresa cuando pasa de 1 almacén central a 4 almacenes regionales? (Disminuye / Se mantiene igual / Aumenta).
2. Si envías una caja que pesa 2 kg en báscula pero mide 60×40×40 cm, ¿qué peso te facturará probablemente la agencia de paquetería? (2 kg / Peso volumétrico superior / Tarifa fija por unidad).
3. En tu empresa actual, ¿sabes exactamente qué porcentaje sobre la facturación representa el coste logístico total? (Sí, con precisión / Aproximado / No).

### Evaluación formativa durante la sesión
- Verificación rápida en aula de los cálculos de peso volumétrico y reglas *multi-carrier* (Actividad 2).
- Evaluación oral durante la defensa del caso *HuertaDirecta Gourmet S.L.*, comprobando si los grupos detectan tanto el ahorro directo en D2C como las sinergias B2B y el riesgo de fragmentar stock perecedero.

### Evaluación sumativa al final de la sesión
1. **Mini-prueba práctica (10 min):** 4 preguntas aplicadas (comparar red centralizada vs. *cross-docking*, calcular un peso volumétrico concreto, diagnosticar un problema de *FTDR* bajo y elegir modalidad óptima *FTL/LTL/parcel/3PL* para dos escenarios).
2. **Entregable individual (Actividad 3):** Lienzo de modelo logístico propio y tabla de evaluación de transportistas valorados según la rúbrica.

### Rúbrica de evaluación

| Criterio | Insuficiente (1) | En desarrollo (2) | Adecuado (3) | Destacado (4) |
| --- | --- | --- | --- | --- |
| **Diseño de red y modelo de distribución** | Elige una arquitectura sin justificar costes fijos, inventario ni plazos. | Identifica ventajas básicas de un modelo pero omite sus compensaciones (*trade-offs*). | Selecciona una arquitectura coherente (centralizada, *cross-docking*, *3PL*, omnicanal) equilibrando servicio y costes. | Integra sinergias multicanal (B2B + D2C, *Click & Collect*, consolidación) y justifica con datos por qué descarta alternativas. |
| **Selección de transporte y cálculo de costes** | Comete errores en peso volumétrico o ignora costes ocultos de última milla. | Calcula tarifas básicas pero omite incidencias, reentregas o costes fijos. | Calcula correctamente peso volumétrico, *cost-to-serve* y reglas *multi-carrier* por perfil de envío. | Optimiza costes totales cuantificando impacto en margen neto, embalaje, ocupación de cargas y retorno de inversión. |
| **Nivel de servicio y política comercial de envíos** | Fija promesas irreales ("envío gratis 24 h") desconectadas del margen y la operativa. | Ajusta tarifas o plazos de forma parcial sin considerar *cut-off* ni *FTDR*. | Diseña una política de envíos realista (umbrales, ventanas, *cut-off*) que protege margen y satisfacción. | Alinea propuesta de valor, experiencia post-compra proactiva, opciones *PUDO* y *SLA* exigibles a operadores. |
| **Aplicabilidad profesional** | Entrega una propuesta genérica difícil de trasladar a su pyme. | Propone mejoras útiles pero sin métricas de seguimiento ni responsables. | Presenta un plan realista para su negocio con *KPIs* claros de control de transportistas. | Define un plan ejecutable a 6 meses con fuga de coste identificada, objetivo cuantificado y gobernanza *multi-carrier*. |

### Actividad de autoevaluación o reflexión
Reflexión escrita de 5 minutos (*Auditoría de mi última milla*):
- ¿Cuál es hoy la mayor fuga de dinero en nuestro transporte o distribución (volumen, urgencias, entregas fallidas, flota infrautilizada o envíos gratis mal tarificados)?
- ¿Qué dato concreto pediré esta semana a contabilidad o a nuestra agencia de transporte para conocer nuestro *cost-to-serve* real?
- ¿Qué ajuste en nuestra promesa de entrega mejoraría la percepción del cliente sin aumentar costes?

---

## 8. Materiales y recursos

### Guion de diapositivas (estructura slide por slide)

| Slide | Título | Contenido clave y recurso visual |
| --- | --- | --- |
| **1** | Portada: Modelos logísticos | Título, Bloque 8 (5/8), conexión con almacenes (Tema 4) y objetivos de la sesión. |
| **2** | La paradoja del envío gratis | Resultados de la Actividad 1: escandallo visual de un pedido e-commerce rentable vs. deficitario. |
| **3** | Arquitecturas de red logística | Esquemas visuales comparativos: directa, centralizada, descentralizada, *hub-and-spoke* y *cross-docking*. |
| **4** | La curva de compensación (*trade-off*) | Gráfica clásica: número de almacenes frente a costes de inventario, instalaciones y transporte. |
| **5** | *Cross-docking* paso a paso | Diagrama temporal (<24 h) de descarga, clasificación y expedición sin almacenaje. |
| **6** | Modalidades de carga y externalización | Comparativa *FTL / LTL / Parcel* y escalera *1PL -> 2PL -> 3PL -> 4PL* + *dropshipping*. |
| **7** | Optimización de rutas y omnicanalidad | Mapa conceptual de *TMS*, ventanas horarias, ZBE, *Click & Collect*, *Ship-from-Store* y *PUDO*. |
| **8** | El peso volumétrico y costes ocultos | Infografía visual de "enviar aire", fórmula del peso volumétrico y recargos frecuentes de factura. |
| **9** | Instrucciones Actividad 2 | Tabla de productos/tarifas y reglas para diseñar el *routing multi-carrier*. |
| **10** | Análisis *cost-to-serve* | Matriz clientes/canales (rentables vs. destructores de margen) y palancas de corrección. |
| **11** | Nivel de servicio, *cut-off* y *FTDR* | Indicadores de promesa fiable, comunicación proactiva (*branded tracking*) y gestión de incidencias. |
| **12** | Cuadro de mando de transportistas | 6 *KPIs* para auditar operadores cada mes (*OTIF*, *FTDR*, roturas, coste/kg, resolución de reclamaciones). |
| **13** | Caso práctico: HuertaDirecta Gourmet S.L. | Mapa de flujos Murcia -> Península, datos de Alternativa A vs. B y consigna del reto. |
| **14** | Síntesis y puente al Tema 6 | Las 5 claves de un modelo logístico rentable y transición hacia *Logística inversa*. |

### Ficha de trabajo del alumnado
Documento de 2 páginas que incluye:
- Fórmula de peso volumétrico y checklist de recargos a revisar en facturas de transporte.
- Tabla de trabajo para la Actividad 2 (4 envíos × 3 operadores).
- Espacio guiado de cálculo comparativo para el caso *HuertaDirecta Gourmet S.L.*

### Plantilla o herramienta práctica replicable
**Plantilla: Diseño de Modelo Logístico y Matriz de Evaluación Mensual de Transportistas**

*Parte A — Arquitectura y reglas de envío:*

| Segmento / Canal / Zona | Modalidad (*FTL/LTL/Parcel/PUDO*) | Operador principal + Plan B | Hora *cut-off* | Plazo prometido | Umbral envío gratis / Tarifa cliente |
| --- | --- | --- | --- | --- | --- |
| | | | | | |

*Parte B — Cuadro de mando mensual por transportista:*

| Operador | Envíos/mes | *OTIF* (%) | *FTDR* 1.er intento (%) | Roturas / Extravíos (%) | Coste medio/envío (€) | Tiempo resolución incidencias (h) | Acción / Revisión |
| --- | --- | --- | --- | --- | --- | --- | --- |
| | | | | | | | |

### Lecturas o recursos recomendados
- Ballou, R. H. (2004). *Logística: Administración de la cadena de suministro*. Pearson Educación. (Capítulos sobre diseño de red y decisiones de transporte).
- Rodrigue, J.-P. (última edición). *The Geography of Transport Systems*. Routledge. (Excelente recurso conceptual sobre redes *hub-and-spoke* y última milla).
- Rushton, A., Croucher, P., & Baker, P. (última edición). *The Handbook of Logistics and Distribution Management*. Kogan Page / CILT.

### Vídeos, artículos y fuentes adicionales *(requieren validación previa)*
> **Nota para el formador:** Validar disponibilidad, edición actualizada y normativa vigente antes de utilizar en el aula.
- Informes de **CNMC (Comisión Nacional de los Mercados y la Competencia)** y **UNO Logística** sobre el sector de paquetería y comercio electrónico en España *(verificar último informe publicado antes de citar cifras)*.
- Normativa vigente sobre transporte de mercancías perecederas (**Acuerdo ATP**) y regulaciones municipales de **Zonas de Bajas Emisiones (ZBE)** en España *(validar requisitos actualizados en fuentes oficiales antes de impartir detalles legales)*.
- Demos o documentación comparativa de plataformas *multi-carrier* y *TMS* orientadas a pymes e-commerce (por ejemplo, gestores de envíos integrados con Shopify/WooCommerce/PrestaShop) *(revisar condiciones y mantener enfoque neutral no publicitario)*.

### Glosario de términos clave

| Término | Definición práctica |
| --- | --- |
| ***3PL / 4PL*** | Operador externo que ejecuta almacenaje/transporte (*3PL*) o consultor/integrador que gestiona toda la red (*4PL*). |
| ***Cost-to-serve*** | Coste logístico y comercial total real necesario para servir a un cliente, canal o pedido concreto. |
| ***Cross-docking*** | Tránsito rápido en plataforma de distribución sin almacenamiento intermedio. |
| ***Cut-off time*** | Hora límite diaria para expedir pedidos recibidos en el mismo día. |
| ***FTDR*** | Porcentaje de entregas completadas con éxito en el primer intento. |
| ***FTL / LTL*** | Carga completa de camión (*Full Truck Load*) frente a grupaje o carga fraccionada (*Less Than Truck Load*). |
| **Peso volumétrico** | Peso calculado en función del volumen del bulto que utilizan las agencias para tarificar envíos ligeros y grandes. |
| ***PUDO*** | *Pick-Up Drop-Off*: red de comercios de proximidad o taquillas inteligentes para recoger y devolver paquetes. |
| ***TMS*** | Sistema de Gestión del Transporte para tarificar, planificar rutas, etiquetar y rastrear envíos. |

---

## 9. Adaptaciones

### Sesión presencial
- Proyectar un mapa físico de la Península Ibérica al presentar el caso *HuertaDirecta Gourmet S.L.* para visualizar gráficamente el flujo troncal desde Murcia hacia los nodos de Madrid y Barcelona y el reparto radial.
- Llevar dos cajas vacías de distinto tamaño con el mismo peso real (por ejemplo, 1 kg) para demostrar físicamente cómo el volumen multiplica el coste facturado en transporte.
- Organizar un breve debate estructurado (10 min) "Flota propia vs. *3PL*" dividiendo el aula en dos bancadas con argumentos financieros y de servicio.

### Sesión online síncrona
- Facilitar la tabla de la Actividad 2 y del caso *HuertaDirecta* en hoja de cálculo compartida con pestañas por equipo para revisar en directo las fórmulas de peso volumétrico y ahorro anual.
- Utilizar votación en directo antes de revelar los cálculos del caso (*¿Qué alternativa elegirías intuitivamente: Actual, A o B?*) y volver a votar tras el cálculo numérico para visibilizar el valor de decidir con datos.
- Incluir una pausa de 8 minutos tras la Actividad 2 ajustando 4 minutos en las transiciones de microlearning para mantener alta la participación en pantalla.

### Sesión asíncrona
- Dividir la sesión en 4 cápsulas grabadas de 12-15 minutos acompañadas de una calculadora descargable en Excel de peso volumétrico y umbral de envío gratis.
- Proponer el análisis del caso *HuertaDirecta Gourmet S.L.* como entrega individual estructurada (tabla de costes + decisión razonada de 1 página) y un foro de debate sobre cómo monetizar o incentivar el *Click & Collect* en pymes.
- Evaluar la Actividad 3 mediante subida de la *Plantilla de Modelo Logístico* al LMS con retroalimentación personalizada según rúbrica.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Integra la eficiencia del almacén del Tema 4 (*packing*, horarios de oleadas y *dock-to-stock*) con el análisis de costes y contratos *SLA* de los Temas 1 y 2.
- **Competencias que desarrolla:** Diseño estratégico de redes de distribución, análisis financiero granular (*cost-to-serve*), negociación/auditoría de operadores logísticos y alineación entre marketing (promesa de envío) y operaciones.
- **Conexión con el tema anterior:** Da salida física a todo el trabajo del **Tema 4 (Gestión de almacenes)**: un *picking* perfecto y un embalaje optimizado en *packing* se materializan en ahorro de peso volumétrico, cumplimiento de horas de corte y puntualidad en el transporte.
- **Conexión con el tema posterior:** Prepara directamente el **Tema 6 (Logística inversa)**: la misma red de transporte, puntos *PUDO* y canales omnicanal que llevan el producto al cliente tendrán que gestionar eficientemente el flujo de vuelta (devoluciones, reparaciones, reacondicionamiento y economía circular) sin destruir el margen del negocio.
- **Evidencia de aprendizaje del alumnado:** Matriz *multi-carrier* con cálculos de peso volumétrico, análisis financiero-operativo del caso *HuertaDirecta Gourmet S.L.* y lienzo propio de modelo logístico y evaluación mensual de transportistas.

---

## Siguientes pasos para el formador

1. **Preparar las tablas de tarifas de la Actividad 2:** Crear una hoja limpia y verificada con 3 tarifas realistas (Paquetería, Paletería *LTL* y *PUDO*) y asegurarse de que el factor volumétrico utilizado (250 kg/m³) aparezca claramente explicado.
2. **Revisar los números de *HuertaDirecta*:** Comprobar todas las sumas del caso en hoja de cálculo antes de clase para proyectar el comparativo final con claridad.
3. **Validar normativa de transporte:** Comprobar novedades vigentes sobre Zonas de Bajas Emisiones (ZBE) en principales ciudades españolas y requisitos generales del transporte refrigerado (ATP) antes de mencionarlos como contexto.
4. **Adaptar ejemplos al público:** Si hay muchos emprendedores B2B industriales, reforzar ejemplos de grupaje *LTL* y carga completa *FTL*; si predominan perfiles e-commerce D2C, enfatizar *PUDO*, umbrales de envío gratis y *branded tracking*.
5. **Conectar con el Tema 6:** Cerrar planteando una pregunta puente: *Si entregar bien ya nos cuesta entre un 8 % y un 15 % del pedido, ¿qué ocurre con nuestra cuenta de resultados cuando el 25 % de esos pedidos vuelve de regreso?*
