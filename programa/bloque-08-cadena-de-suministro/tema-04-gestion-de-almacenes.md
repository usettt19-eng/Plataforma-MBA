# Gestión de almacenes

## 1. Ficha del tema

| Campo | Detalle |
| --- | --- |
| **Título del tema** | Gestión de almacenes |
| **Bloque y posición dentro del programa** | Bloque 8: Cadena de suministro — Tema 4 de 8 |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Mandos intermedios y emprendedores |
| **Nivel de dificultad** | Intermedio |
| **Prerrequisitos** | Haber completado los Temas 1 a 3 del Bloque 8 (Supply chain, Compras y Aprovisionamiento) y conocer conceptos básicos de clasificación ABC e inventarios. |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado será capaz de diagnosticar el funcionamiento operativo de un almacén, optimizar su diseño (*layout*), flujos de recepción, ubicación, *picking*, *packing* y trazabilidad, y establecer controles de inventario y productividad que reduzcan errores y costes operativos. |

---

## 2. Objetivos de aprendizaje

1. **Describir** los procesos troncales de un almacén (recepción, control de calidad, ubicación, almacenaje, *picking*, *packing* y expedición) y sus puntos críticos de control. *(Nivel de Bloom: Comprender)*
2. **Aplicar** criterios de zonificación ABC (*slotting*) y diseño de *layout* para minimizar desplazamientos internos y cuellos de botella. *(Nivel de Bloom: Aplicar)*
3. **Comparar** distintas estrategias de preparación de pedidos (*picking* discreto, por lotes, por zonas y por oleadas) seleccionando la más eficiente según el perfil de pedidos B2B o e-commerce. *(Nivel de Bloom: Analizar)*
4. **Evaluar** la fiabilidad del inventario, la trazabilidad por lotes/números de serie y la productividad del almacén mediante indicadores clave (IRA, líneas/hora, tasa de errores y ocupación). *(Nivel de Bloom: Evaluar)*
5. **Diseñar** un plan de mejora operativa y digitalización progresiva (códigos de barras, RF y SGA/WMS) para reducir errores de preparación y elevar la productividad de una pyme. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Procesos operativos del almacén y diseño del *layout*

**Explicación breve y clara**
Un almacén moderno ya no es un simple trastero donde guardar mercancía: es un **centro de flujo y valor añadido** que absorbe variabilidad, consolida pedidos y garantiza la promesa de entrega del canal físico y digital. Sus operaciones siguen una secuencia encadenada —recepción, verificación, ubicación (*put-away*), almacenaje, preparación (*picking*), embalaje (*packing*) y expedición— cuyo rendimiento depende en gran medida del diseño físico (*layout*) y de evitar cruces de flujos.

**Conceptos clave**
- Secuencia de procesos internos (*inbound*, almacenaje, *outbound*).
- Tipos de flujo físico: flujo en **U** (muelles de entrada y salida en el mismo lado, ideal para pymes versátiles), flujo en **I / línea recta** (entrada y salida opuestas, alto volumen) y flujo en **L**.
- Zonificación operativa: muelles, zona de cuarentena/control, almacenamiento en altura/reserva, zona de *picking* en suelo, *packing*, devoluciones y expediciones.
- *Slotting* inteligente basado en rotación ABC, volumen, peso, afinidad de productos y ergonomía.

**Definiciones necesarias**
- ***Layout* de almacén:** Distribución física del espacio, pasillos, estanterías, muelles y zonas de trabajo diseñada para maximizar la eficiencia de recorridos, la capacidad útil y la seguridad laboral.
- ***Slotting*:** Asignación estratégica de la ubicación óptima de cada SKU dentro del almacén atendiendo a su frecuencia de salida (rotación ABC), características físicas y relación con otras referencias.

**Ejemplo práctico realista**
Una distribuidora de material dental en Sevilla almacenaba las referencias ordenadas alfabéticamente por fabricante. Los operarios recorrían 14 km diarios caminando de punta a punta para preparar pedidos. Al reordenar mediante *slotting* ABC (colocando el 20 % de consumibles de alta rotación cerca de las mesas de *packing* y a altura ergonómica de cintura), redujeron los desplazamientos un 42 % sin comprar estanterías nuevas.

**Errores frecuentes**
- Recepcionar mercancía sin verificar cantidades, estado ni lotes contra el pedido de compra, introduciendo errores desde el minuto uno.
- Organizar el almacén por proveedor o por orden alfabético en lugar de por rotación y ergonomía.
- Mantener pasillos obstruidos con palets temporales ("zonas de paso" permanentes) que generan accidentes y bloquean el *picking*.

**Preguntas que el alumnado debería poder responder**
- ¿Por qué un fallo en la recepción suele propagarse a todo el ciclo posterior del almacén?
- ¿Qué criterios determinan si una referencia debe ubicarse en zona caliente cerca de expediciones o en reserva de altura?
- ¿Qué ventajas aporta un *layout* en U para una pyme con recursos limitados?

---

### 3.2. *Picking*, *packing* y control de errores

**Explicación breve y clara**
El **picking** (recogida de artículos para componer un pedido) representa habitualmente la partida más costosa de mano de obra en un almacén (a menudo más de la mitad del coste operativo en negocios e-commerce o de distribución fraccionada, *referencia orientativa de sector a validar con datos propios de cada empresa*). Optimizar el método de *picking* y estandarizar el *packing* (verificación, embalaje protector, etiquetado y documentación) es clave para acelerar entregas y eliminar devoluciones por envíos equivocados.

**Conceptos clave**
- Métodos de *picking*:
  - *Picking* discreto (pedido a pedido): sencillo, ideal para pedidos grandes o pocos pedidos diarios.
  - *Batch picking* (por lotes): un operario recoge varios pedidos pequeños simultáneamente en un carro multicompartimento (ideal para e-commerce).
  - *Zone picking* (por zonas): cada operario atiende su zona y se consolidan las cajas al final.
  - *Wave picking* (por oleadas): agrupa pedidos según hora de corte del transportista o ruta.
- Estrategias "operario a producto" (*person-to-goods*) frente a "producto a operario" (*goods-to-person*).
- *Packing* profesional: selección de caja adecuada (evitar enviar aire), protección, inclusión de albarán/instrucciones y doble verificación (escaneo de SKU o control de peso).

**Definiciones necesarias**
- ***Picking*:** Proceso de localización, extracción y recopilación de las unidades exactas que componen uno o varios pedidos desde sus ubicaciones de almacenaje.
- ***Poka-yoke* logístico:** Mecanismo a prueba de errores (como lectura obligatoria de código de barras de ubicación y producto, o báscula de comprobación en *packing*) que impide avanzar al siguiente paso si existe una discrepancia.

**Ejemplo práctico realista**
Una tienda online de suplementos nutricionales preparaba sus 280 pedidos diarios en papel y de uno en uno (*picking* discreto), cometiendo un 3,2 % de errores de sabor o formato. Al pasar a *batch picking* en carros de 12 cubetas con terminales de código de barras (escaneando ubicación + código EAN del bote + cubeta destino), duplicaron las líneas preparadas por hora y redujeron los errores al 0,25 %.

**Errores frecuentes**
- Imprimir listas de *picking* en papel sin ruta optimizada de pasillos ni confirmación mediante escáner.
- Mezclar referencias visualmente muy parecidas (por ejemplo, tornillería métrica o cosméticos de distinto tono) en estanterías contiguas sin separación física ni control de código de barras.
- Improvisar el embalaje con cajas sobredimensionadas que encarecen el peso volumétrico del transporte y aumentan roturas.

**Preguntas que el alumnado debería poder responder**
- ¿En qué tipo de pedidos resulta mucho más eficiente el *batch picking* que el *picking* discreto?
- ¿Qué mecanismos sencillos (*poka-yoke*) puede implantar una pyme para reducir casi a cero los errores de preparación?
- ¿Cómo impacta la elección del embalaje en *packing* sobre el coste posterior de transporte?

---

### 3.3. Control de inventario, trazabilidad y fiabilidad del dato

**Explicación breve y clara**
Un almacén sin precisión de inventario paraliza compras, provoca promesas incumplidas en e-commerce y obliga a perder horas buscando mercancía "perdida". Mantener una alta **fiabilidad de inventario (*IRA*, Inventory Record Accuracy)** exige abandonar el inventario anual único (que detiene la empresa un fin de semana y no corrige causas raíz) y sustituirlo por **inventarios cíclicos** (*cycle counting*), junto con una **trazabilidad** rigurosa por lote, número de serie y criterio FIFO/FEFO.

**Conceptos clave**
- Fiabilidad del registro de inventario (*IRA*): porcentaje de ubicaciones o SKU donde el stock físico coincide con el sistema dentro de una tolerancia.
- Inventario cíclico basado en ABC (por ejemplo: artículos A contados mensualmente, B trimestralmente, C semestralmente).
- Flujos de rotación física: **FIFO** (*First In, First Out*), **FEFO** (*First Expired, First Out*) y **LIFO** (solo para materiales no perecederos a granel/apilados).
- Trazabilidad hacia atrás (proveedor/lote recibido), interna (transformación/ubicación) y hacia delante (cliente/pedido enviado).

**Definiciones necesarias**
- **Inventario cíclico (*Cycle Counting*):** Recuento periódico, continuo y programado de pequeñas muestras del inventario sin detener la operativa diaria, orientado a detectar y corregir las causas raíz de descuadres.
- **Trazabilidad:** Capacidad de reconstruir el historial, ubicación, lote de origen y destino exacto de un producto a lo largo de toda su permanencia y salida del almacén.

**Ejemplo práctico realista**
Una distribuidora de café y té gourmet detecta que su tienda online vende con frecuencia referencias agotadas en almacén. Al medir el *IRA*, descubre que solo el 81 % de las ubicaciones cuadra con el ERP debido a salidas sin registrar para muestras comerciales y devoluciones apiladas en una esquina. Al implantar un inventario cíclico semanal de 30 ubicaciones, registrar obligatoriamente las muestras y separar una ubicación virtual de "devoluciones en revisión", alcanza un *IRA* del 98,5 % en cuatro meses.

**Errores frecuentes**
- Ajustar sistemáticamente las diferencias de inventario en el ERP ("regularizar a cero") sin investigar nunca por qué faltan o sobran unidades.
- Permitir que personal ajeno al almacén (comerciales, técnicos) retire mercancía sin registrar el movimiento.
- Llevar el control de lotes en hojas de cálculo manuales desligadas de las expediciones, impidiendo retirar un lote defectuoso en caso de alerta de calidad.

**Preguntas que el alumnado debería poder responder**
- ¿Por qué el inventario cíclico supera al inventario anual tradicional para mejorar la precisión del stock?
- ¿Cuál es la diferencia operativa entre FIFO y FEFO y en qué sectores es imprescindible FEFO?
- ¿Qué tres causas humanas o de proceso suelen deteriorar el indicador *IRA* en una pyme?

---

### 3.4. Productividad, digitalización progresiva (SGA/WMS) y cuadro de mando

**Explicación breve y clara**
Mejorar un almacén no significa comprar robots desde el primer día: la regla de oro es **ordenar, estandarizar y luego digitalizar**. Para una pyme, el salto de calidad más rentable consiste en pasar de gestión manual en papel a códigos de barras + terminales de radiofrecuencia (RF) integrados con un **SGA / WMS (*Sistema de Gestión de Almacenes*)** conectado en tiempo real al ERP y a la tienda online. Para gestionar el rendimiento diario se emplea un cuadro de mando conciso de productividad, calidad, espacio y coste.

**Conceptos clave**
- Escalera de madurez tecnológica en almacén: (1) Orden físico y codificación de ubicaciones (5S) -> (2) Códigos de barras (EAN/GS1-128) y lectores RF -> (3) SGA/WMS en la nube integrado con ERP/e-commerce -> (4) Automatización selectiva (*pick-to-light*, *voice picking*, RFID, almacenes automáticos cuando el volumen justifica el retorno).
- Indicadores clave de almacén:
  - Productividad: líneas preparadas por hora/operario, pedidos/hora, tiempo de ciclo interno (*dock-to-stock* y *order-to-ship*).
  - Calidad: tasa de errores de *picking* (% o PPM), *IRA* (%), tasa de daños internos.
  - Capacidad y coste: % de ocupación útil (óptimo operativo habitual ~80-85 % para no colapsar maniobras), coste por pedido preparado.
- Seguridad laboral y metodología **5S** (clasificar, ordenar, limpiar, estandarizar y mantener).

**Definiciones necesarias**
- **SGA / WMS (*Warehouse Management System*):** Software especializado que dirige y registra en tiempo real todos los movimientos físicos del almacén (recepciones, ubicaciones sugeridas, rutas de *picking*, lotes, inventarios y etiquetas de transporte).
- **Tiempo *dock-to-stock*:** Tiempo transcurrido desde que la mercancía descarga en el muelle de entrada hasta que queda verificada, ubicada y disponible para la venta o producción en el sistema.

**Ejemplo práctico realista**
Una pyme de repuestos de bicicleta con 6 operarios quiere instalar un almacén vertical automático de 250.000 €. Antes de invertir, realiza un diagnóstico: sus estanterías no tienen códigos de ubicación, el 20 % del espacio está ocupado por obsoletos y usan albaranes en papel. Decide invertir 18.000 € en codificar pasillos, limpiar obsoletos e implantar un SGA SaaS con 4 pistolas RF. En 6 meses eleva la productividad de 22 a 41 líneas/hora y descubre que ya no necesita ampliar la nave ni comprar maquinaria pesada.

**Errores frecuentes**
- Implantar un SGA sin haber etiquetado correctamente ubicaciones ni depurado el maestro de artículos (pesos, medidas, códigos de barras).
- Llenar el almacén al 98 % de capacidad pensando que es "eficiente", cuando en realidad colapsa los movimientos y hunde la productividad.
- Medir solo velocidad (líneas/hora) sin cruzarla con calidad (errores de *picking*), incentivando correr a costa de equivocarse.

**Preguntas que el alumnado debería poder responder**
- ¿Qué pasos previos son obligatorios antes de implantar un SGA o automatizar un almacén?
- ¿Por qué una ocupación del almacén superior al 90 % suele empeorar la productividad y los errores?
- ¿Qué 5 indicadores mínimos incluirías en el panel semanal del responsable de almacén?

---

## 4. Metodología didáctica

Secuencia práctica de 4 horas (240 minutos) orientada al rediseño visual de flujos, elección de estrategias de *picking* y resolución de un caso real de transformación de almacén B2B + e-commerce.

| Fase | Tiempo | Duración | Qué hace el formador | Qué hace el alumnado |
| --- | --- | --- | --- | --- |
| **1. Apertura y activación** | 00:00 – 00:25 | 25 min | Conecta con el Tema 3, aplica diagnóstico inicial rápido y facilita la Actividad 1 (*Autopsia de un error de envío*). | Responde al sondeo inicial y reconstruye en parejas cuánto cuesta realmente un pedido mal preparado (costes directos e intangibles). |
| **2. Exposición breve / microlearning (Bloque A)** | 00:25 – 00:55 | 30 min | Expone apartados 3.1 y 3.2: procesos de almacén, flujos U/I/L, *slotting* ABC, métodos de *picking* y *poka-yoke* en *packing*. | Analiza planos comparativos de *layout*, identifica desperdicios de recorrido y relaciona tipos de pedido con métodos de *picking*. |
| **3. Actividad práctica en equipo (Rediseño de *layout* y *picking*)** | 00:55 – 01:35 | 40 min | Dinamiza la Actividad 2 (*Rediseño del plano de almacén y ruta de picking*). Supervisa criterios de ergonomía, flujos y ubicación ABC. | En grupos de 3-4, rediseña un plano sencillo de almacén con flujos cruzados y selecciona el método de *picking* adecuado para 2 perfiles de pedidos. |
| **4. Exposición breve / microlearning (Bloque B)** | 01:35 – 02:05 | 30 min | Desarrolla apartados 3.3 y 3.4: *IRA*, inventario cíclico, trazabilidad FIFO/FEFO, escalera de digitalización (RF, SGA/WMS), 5S y cuadro de mando. | Calcula un índice *IRA* y el ahorro de tiempo al reducir errores y desplazamientos; contrasta cuándo compensa un SGA. |
| **5. Análisis de caso práctico** | 02:05 – 02:55 | 50 min | Presenta el caso *Ferretería Industrial Norte S.A. (FINSA)* con plano esquemático y tabla de *KPIs*, guiando el diagnóstico y plan de acción. | En equipo, cuantifica el coste de los errores actuales, redefine zonas B2B/e-commerce, propone *picking*, inventario cíclico y hoja de ruta SGA. |
| **6. Discusión guiada y transferencia** | 02:55 – 03:35 | 40 min | Modera el debate de soluciones del caso y lanza la Actividad 3 (*Auditoría 5S y hoja de ruta de mi almacén o centro operativo*). | Defiende su propuesta ante el aula y aplica la lista de auditoría de almacén y cuadro de mando a su realidad empresarial. |
| **7. Síntesis, evaluación y cierre** | 03:35 – 04:00 | 25 min | Sintetiza los pilares de un almacén eficiente, aplica la evaluación sumativa (10 min), guía la autoevaluación y conecta con el Tema 5 (Modelos logísticos). | Completa el test práctico final, redacta su compromiso de mejora rápida y aclara dudas sobre herramientas SGA para pymes. |

**Total acumulado:** 25 + 30 + 40 + 30 + 50 + 40 + 25 = **240 minutos (4 horas exactas)**.

---

## 5. Actividades prácticas

### Actividad 1 (Activación): ¿Cuánto cuesta realmente un error de *picking*?

- **Objetivo:** Cuantificar el impacto económico y reputacional oculto de un fallo de preparación para justificar inversiones en orden, control y tecnología.
- **Instrucciones para el alumnado:**
  1. En parejas, calculad el coste real de enviar por error un taladro equivocado de 65 € (margen 20 €) a un cliente e-commerce.
  2. Sumad todas las partidas que intervienen: coste de recogida del producto erróneo, envío urgente del correcto, horas de atención al cliente, tiempo de recepción y reacondicionamiento en almacén, embalaje perdido y riesgo de pérdida del cliente.
  3. Estimad cuántos pedidos correctos hay que vender para compensar un solo error de envío.
- **Materiales necesarios:** Ficha breve de cálculo y calculadora.
- **Tiempo estimado:** 15 minutos (dentro de la fase de Apertura).
- **Rol del formador:** Recoger cifras en pizarra (suele salir entre 25 € y 45 € por error) y multiplicar por un volumen típico de pyme para evidenciar el retorno rápido de implantar controles *poka-yoke*.
- **Producto o entregable esperado:** Escandallo rápido del coste de un error de envío y punto de equilibrio en pedidos nuevos.
- **Criterios de éxito:** El cálculo incluye al menos 5 partidas de coste directo/indirecto y relaciona el resultado con el margen unitario.

### Actividad 2 (Aplicación): Rediseño exprés de *layout* y estrategia de *picking*

- **Objetivo:** Aplicar principios de zonificación ABC (*slotting*), flujo en U y selección de método de *picking* sobre un plano problemático.
- **Instrucciones para el alumnado:**
  1. En equipos de 3-4 personas, analizad el plano simplificado de una nave de 800 m² con 2 muelles, donde las referencias A están al fondo, la zona de devoluciones bloquea el pasillo central y recepción y expedición se cruzan.
  2. Reubicad en la plantilla del plano: muelles (entrada/salida), zona de control de recepción, estanterías A/B/C, mesas de *packing*, zona de cuarentena/devoluciones y pasillos principales.
  3. Definid el método de *picking* óptimo para: (a) 15 pedidos B2B grandes de 25 líneas cada uno, y (b) 180 pedidos e-commerce de 1,8 líneas de media.
- **Materiales necesarios:** Plano impreso en A3 y rotuladores de colores (presencial) o lienzo Miro editable (online).
- **Tiempo estimado:** 40 minutos.
- **Rol del formador:** Comprobar que no existan cruces innecesarios de carretillas y peatones, validar la cercanía de los SKU clase A al *packing* y cuestionar cuellos de botella en expedición.
- **Producto o entregable esperado:** Plano rediseñado con flujos marcados por colores y justificación escrita de las dos estrategias de *picking*.
- **Criterios de éxito:** Flujo sin cruces críticos, ubicación lógica de zona A/B/C y diferenciación adecuada entre *picking* discreto/por zonas (B2B) y *batch picking* (e-commerce).

### Actividad 3 (Transferencia a la realidad laboral): Mini-auditoría de almacén y cuadro de mando

- **Objetivo:** Trasladar los criterios de eficiencia, fiabilidad de inventario y digitalización gradual al almacén propio (o al operador logístico subcontratado si la empresa trabaja con *3PL*).
- **Instrucciones para el alumnado:**
  1. De forma individual, puntúa del 1 al 5 las 8 dimensiones de la *Checklist de Auditoría de Almacén* (sección 8) aplicadas a tu empresa o a tu proveedor logístico.
  2. Identifica los 2 puntos con menor puntuación y define para cada uno una acción sin inversión tecnológica (orden/proceso/5S) y una acción digital (lectura de código, inventario cíclico o *KPI* semanal).
  3. Selecciona los 4 *KPIs* que exigirás en un informe semanal a partir del próximo mes.
- **Materiales necesarios:** Plantilla de Auditoría de Almacén (sección 8).
- **Tiempo estimado:** 25 minutos (dentro de la fase 6).
- **Rol del formador:** Guiar a quienes no tienen almacén propio (negocios digitales puros o servicios con *3PL*) para adaptar la auditoría a la supervisión de su operador logístico externo.
- **Producto o entregable esperado:** Ficha de auditoría completada con plan de 4 acciones concretas y 4 *KPIs* semanales.
- **Criterios de éxito:** Acciones realizables en 30-90 días que respetan la regla "primero ordenar y estandarizar, luego digitalizar".

---

## 6. Caso práctico

### Contexto empresarial
**Ferretería Industrial Norte S.A. (FINSA)** es una distribuidora B2B ubicada en las afueras de Bilbao (38 empleados, 11,5 millones de euros de facturación) que suministra herramientas, tornillería técnica, EPIs y consumibles industriales a talleres y constructoras. Opera desde un almacén propio de **2.400 m²** con **12.000 SKU activos** y 10 operarios de almacén. Hace un año lanzó un portal e-commerce B2B/B2C para captar pequeños instaladores y autónomos.

### Situación o problema
El portal online ha sido un éxito comercial (+140 pedidos diarios adicionales de media, con 2,4 líneas por pedido), pero ha desbordado al almacén, diseñado históricamente para pedidos grandes B2B de palets y cajas completas.
Los operarios preparan tanto pedidos B2B como online con listas impresas en papel desde el ERP, sin ubicaciones codificadas en la zona de estanterías ligeras (solo por "pasillo de Bosch" o "estante de tornillos") y sin pistolas de código de barras. La tasa de errores de *picking* en pedidos online ha subido al **4,8 %**, el tiempo medio *dock-to-stock* es de **54 horas** (provocando que material ya recibido figure "sin stock" en la web durante dos días) y el último inventario anual arrojó descuadres en el **19 %** de las referencias. El responsable de almacén pide contratar 4 operarios más y alquilar una nave anexa, pero Dirección exige primero exprimir y modernizar la operativa actual.

### Datos disponibles

| Indicador / Dato operativo | Situación actual FINSA | Referencia objetivo propuesta |
| --- | --- | --- |
| Superficie almacén y ocupación | 2.400 m² — Ocupación del 94 % (incluye ~18 % stock sin movimiento >18 meses) | Ocupación útil <= 82 % |
| Referencias activas (SKU) | 12.000 (1.800 SKU generan el 78 % de las líneas de pedido) | *Slotting* ABC estricto |
| Pedidos diarios | 65 B2B (media 14 líneas) + 140 e-commerce (media 2,4 líneas) = 1.246 líneas/día | Mismo volumen con +30 % capacidad |
| Plantilla operativa almacén | 10 operarios × 7,5 h útiles = 75 h/día (productividad actual: ~16,6 líneas/hora) | >= 28 líneas/hora sin ampliar plantilla |
| Tasa de errores de *picking* (e-commerce) | 4,8 % (~6,7 pedidos erróneos/día; coste estimado por error: 32 €) | <= 0,5 % |
| Tiempo *dock-to-stock* | 54 horas | <= 8 horas |
| Fiabilidad de inventario (*IRA*) | 81 % (inventario único anual) | >= 97 % (inventario cíclico) |
| Tecnología actual | ERP contable-comercial sin SGA; listas en papel; sin lectores RF | SGA modular + 6 terminales RF + báscula *packing* |
| Presupuesto disponible para mejora (Capex año 1) | Hasta 45.000 € | Retorno esperado < 12 meses |

### Preguntas de análisis
1. Calcula el **coste anual aproximado de los errores de *picking* e-commerce** (sobre 250 días laborables/año) y el espacio real que se liberaría al liquidar el stock sin movimiento (>18 meses).
2. ¿Es necesario realmente contratar 4 operarios y alquilar otra nave? Justifícalo con datos de productividad y ocupación.
3. ¿Cómo reorganizarías el *layout* y los métodos de *picking* para convivir eficientemente con pedidos B2B grandes y pedidos e-commerce pequeños?
4. Diseña una hoja de ruta en 3 fases (Mes 1-2: orden físico; Mes 3-4: digitalización SGA/RF; Mes 5-6: consolidación y control) respetando el presupuesto de 45.000 €.

### Tarea a realizar
En equipos de 4 personas, actuad como consultores logísticos externos para la Gerencia de FINSA y presentad un plan ejecutivo con:
1. Cuantificación del ahorro económico anual al bajar los errores del 4,8 % al 0,5 % y justificación de no alquilar nave nueva.
2. Propuesta de zonificación (*slotting* de los 1.800 SKU clase A) y separación de estrategias de *picking* (B2B vs. e-commerce).
3. Plan de implantación de inventario cíclico y reducción del *dock-to-stock* de 54 h a <8 h.
4. Hoja de ruta en 3 fases con asignación orientativa del presupuesto y 5 *KPIs* de control semanal.

### Posibles soluciones o criterios de análisis
- **Impacto económico de errores:** `6,7 pedidos erróneos/día × 32 € × 250 días ≈ 53.600 €/año`. Al reducir la tasa al 0,5 % (~0,7 pedidos/día ≈ 5.600 €/año), el ahorro directo supera los **48.000 €/año**, amortizando en menos de 1 año la inversión en SGA y terminales RF (sin contar mejora en retención de clientes).
- **Ocupación sin alquilar nave:** Liberando el 18 % de stock obsoleto/muerto (liquidación, devolución a proveedor o desguace), la ocupación baja del 94 % a aproximadamente **76 %**, recuperando holgura para muelles, mesas de *packing* y pasillos despejados.
- **Operativa dual B2B + e-commerce:**
  - Crear una **zona caliente de *picking* ágil** junto a *packing* para los 1.800 SKU clase A (que cubren el 78 % de las líneas) con ubicaciones codificadas alfanuméricamente (`Pasillo-Estantería-Nivel-Hueco`).
  - Aplicar ***batch picking* con carro de 12-16 cubetas** para los 140 pedidos e-commerce en 2 oleadas diarias (mañana y tarde, alineadas al corte de mensajería) y ***picking* discreto o por zonas** para los 65 pedidos B2B voluminosos.
  - Incorporar verificación por escáner de código de barras en *picking* y control de peso/escaneo en mesa de *packing* (*poka-yoke*).
- **Mejora de *dock-to-stock* e *IRA*:** Establecer cita previa de descargas de proveedores principales, recepción ciega con pistolas RF (el stock queda disponible en web en cuanto se escanea en muelle) e implantar **inventario cíclico** diario de 40 ubicaciones priorizando SKU clase A y ubicaciones que llegan a stock cero.
- **Hoja de ruta en 3 fases (45.000 € orientativos):**
  - *Fase 1 (Meses 1-2):* Purga de obsoletos, 5S, codificación física de ubicaciones, *slotting* de los 1.800 SKU A y carros de *batch picking* (~8.000 €).
  - *Fase 2 (Meses 3-4):* Despliegue de SGA SaaS conectado al ERP/web, 6 terminales RF, impresoras de etiquetas, 2 básculas de *packing* y formación al equipo (~28.000 €).
  - *Fase 3 (Meses 5-6):* Inventario cíclico sistemático, ajuste de oleadas e indicadores semanales + margen de contingencia (~9.000 €).

### Preguntas de reflexión final
- ¿Qué resistencias del equipo de almacén (operarios veteranos acostumbrados a "conocer de memoria" dónde está todo) anticipas al introducir ubicaciones codificadas y pistolas RF, y cómo las gestionarías?
- ¿Por qué el tiempo *dock-to-stock* de 54 horas estaba frenando las ventas online aunque el almacén estuviera lleno?

---

## 7. Evaluación

### Evaluación diagnóstica breve (inicio de sesión — 5 minutos)
1. ¿Cuál suele ser el proceso que consume mayor porcentaje de horas de trabajo en un almacén con preparación de pedidos fraccionados? (Recepción / Almacenaje / *Picking* / Expedición).
2. Si un almacén tiene una ocupación del 97 %, ¿está funcionando de forma óptima? (Sí / No — justificación breve).
3. En tu empresa (o en un almacén que conozcas), ¿qué porcentaje aproximado de referencias coincide exactamente entre el sistema informático y la estantería física?

### Evaluación formativa durante la sesión
- Revisión guiada de los planos rediseñados en la Actividad 2 (verificación de flujos sin cruces, ubicación de zona A y coherencia del método de *picking*).
- Seguimiento cuantitativo durante el caso *FINSA* comprobando el cálculo del ahorro por reducción de errores y el orden correcto de la hoja de ruta (orden físico antes de software).

### Evaluación sumativa al final de la sesión
1. **Prueba práctica final (10 min):** 4 preguntas aplicadas (elegir el método de *picking* más adecuado para 2 perfiles de pedidos, interpretar un *IRA* del 84 % proponiendo causas raíz, ordenar correctamente las fases de implantación de un SGA y diferenciar FIFO de FEFO).
2. **Entregable individual (Actividad 3):** Mini-auditoría de almacén / *3PL* y cuadro de mando semanal evaluados mediante la rúbrica.

### Rúbrica de evaluación

| Criterio | Insuficiente (1) | En desarrollo (2) | Adecuado (3) | Destacado (4) |
| --- | --- | --- | --- | --- |
| **Diseño de *layout* y *slotting*** | Mantiene flujos cruzados o distribuye referencias sin criterio de rotación. | Mejora parcialmente el orden físico pero deja cuellos de botella en recepción o *packing*. | Diseña un flujo coherente (U/I/L) y aplica *slotting* ABC minimizando recorridos. | Optimiza *layout*, ergonomía, zonas de cuarentena/devoluciones y separación B2B/e-commerce justificando ganancia de espacio y tiempo. |
| **Estrategias de *picking*, *packing* y control de errores** | Propone un único método genérico sin controles de verificación. | Diferencia métodos de *picking* pero omite controles *poka-yoke* en *packing*. | Selecciona métodos de *picking* acordes al perfil de pedidos e incorpora controles de error eficaces. | Combina oleadas, *batch picking* y verificación RF/peso cuantificando el impacto económico en errores y líneas/hora. |
| **Precisión de inventario y trazabilidad** | Propone seguir con inventario anual o ignora lotes/caducidades. | Menciona inventario cíclico o FIFO/FEFO sin definir frecuencia ni operativa. | Diseña un esquema de inventario cíclico ABC y controles de trazabilidad coherentes con el producto. | Establece metas claras de *IRA*, protocolo de investigación de causas raíz de descuadres y trazabilidad completa de entrada a salida. |
| **Digitalización gradual y cuadro de mando** | Recomienda inversiones tecnológicas desproporcionadas sin ordenar procesos previos. | Propone implantar SGA o RF sin plan de transición ni métricas claras. | Secuencia orden físico (5S), codificación y SGA/RF con 4-5 *KPIs* equilibrados. | Presenta una hoja de ruta realista con retorno económico estimado, gestión del cambio del equipo y cuadro de mando semanal accionable. |

### Actividad de autoevaluación o reflexión
Reflexión escrita en 5 minutos (*Tres ajustes de impacto inmediato*):
- **1 desperdicio físico** (recorridos, espacio ocupado por obsoletos, desorden) que puedo eliminar en mi empresa o supervisar con mi *3PL* este mes.
- **1 punto ciego de información** (*dock-to-stock*, descuadre de stock o falta de trazabilidad) que urge medir.
- **1 regla de oro** que aplicaré antes de comprar cualquier herramienta tecnológica para operaciones.

---

## 8. Materiales y recursos

### Guion de diapositivas (estructura slide por slide)

| Slide | Título | Contenido clave y recurso visual |
| --- | --- | --- |
| **1** | Portada: Gestión de almacenes | Título, Bloque 8 (4/8), enlace con el Tema 3 y objetivos de aprendizaje. |
| **2** | El coste oculto de los errores | Resultados de la Actividad 1: desglose visual del coste real de un envío equivocado. |
| **3** | Mapa de procesos del almacén | Flujograma de 7 pasos: recepción -> calidad -> ubicación -> almacenaje -> *picking* -> *packing* -> expedición. |
| **4** | Diseño del *layout* y flujos físicos | Planos comparativos de flujo en U, flujo en I y flujo en L con pros y contras para pymes. |
| **5** | *Slotting* inteligente y ergonomía | Mapa de calor ABC de un almacén y regla de altura ergonómica ("zona de oro"). |
| **6** | Estrategias de *picking* | Matriz visual comparativa: discreto, *batch*, *zone* y *wave picking* según tamaño y volumen de pedidos. |
| **7** | *Packing* y controles *poka-yoke* | Ejemplos visuales de estación de *packing*, escaneo de verificación y control de peso. |
| **8** | Instrucciones Actividad 2 | Plano inicial problemático de 800 m², consigna y tiempos de rediseño en equipo. |
| **9** | Precisión de inventario (*IRA*) e inventario cíclico | Comparativa visual inventario anual vs. cíclico ABC + causas típicas de descuadres. |
| **10** | Trazabilidad, FIFO y FEFO | Esquema de trazabilidad hacia atrás, interna y hacia delante + etiquetas GS1-128. |
| **11** | Escalera de digitalización y SGA/WMS | 4 peldaños: 5S/codificación -> RF/código de barras -> SGA SaaS -> Automatización selectiva. |
| **12** | Cuadro de mando del almacén | 6 *KPIs* clave con fórmulas y umbrales de referencia (*IRA*, líneas/h, errores, *dock-to-stock*, ocupación, coste/pedido). |
| **13** | Caso práctico: FINSA | Datos clave del almacén de Bilbao, conflicto B2B/e-commerce y reto presupuestario. |
| **14** | Síntesis y puente al Tema 5 | Resumen de las claves de intralogística y transición hacia *Modelos logísticos y distribución*. |

### Ficha de trabajo del alumnado
Documento práctico de 2 páginas que incluye:
- Escandallo rápido del coste de un error de envío (Actividad 1).
- Plano base cuadriculado para rediseño de *layout* (Actividad 2).
- Tabla de fórmulas de *KPIs* de almacén y guía de notas del caso *FINSA*.

### Plantilla o herramienta práctica replicable
**Plantilla: Checklist de Auditoría Rápida de Almacén (o *3PL*) y Cuadro de Mando**

| Dimensión operativa | Qué comprobar in situ | Puntuación (1-5) | Mejora de proceso (sin Capex) | Mejora digital / control |
| --- | --- | --- | --- | --- |
| 1. Recepción y *dock-to-stock* | Verificación contra pedido y alta rápida (<24 h) | | | |
| 2. Codificación y *slotting* ABC | Todas las ubicaciones etiquetadas; SKU A cerca de *packing* | | | |
| 3. Orden, limpieza y seguridad (5S) | Pasillos libres, zonas delimitadas, sin obsoletos estorbando | | | |
| 4. Método de *picking* | Adaptado al perfil de pedidos sin recorridos repetitivos | | | |
| 5. *Packing* y control de errores | Verificación de SKU/peso y embalaje ajustado | | | |
| 6. Precisión de inventario (*IRA*) | Inventario cíclico activo y análisis de causas de descuadre | | | |
| 7. Trazabilidad y FIFO/FEFO | Control de lotes/caducidades desde recepción hasta cliente | | | |
| 8. Cuadro de mando semanal | Se miden líneas/h, errores, *IRA* y coste por pedido | | | |

### Lecturas o recursos recomendados
- Richards, G. (última edición). *Warehouse Management: The Definitive Guide to Improving Efficiency and Minimizing Costs in the Modern Warehouse*. Kogan Page.
- Frazelle, E. (2016). *World-Class Warehousing and Material Handling*. McGraw-Hill.
- Mauleón Torres, M. (2013). *Sistemas de almacenaje y picking*. Ediciones Díaz de Santos.

### Vídeos, artículos y fuentes adicionales *(requieren validación previa)*
> **Nota para el formador:** Validar acceso, actualidad y aplicabilidad técnica/legal antes de compartir en el aula.
- Estándares de codificación logística y etiquetas **GS1 España / AECOC** (código de barras EAN-13, GS1-128 y SSCC) *(verificar guías públicas vigentes de AECOC antes de impartir)*.
- Vídeos demostrativos de flujos de *batch picking*, *pick-to-light* y operativas con SGA en canales técnicos de intralogística (por ejemplo, Mecalux, SSI Schäfer o demostraciones de SGA SaaS para pymes) *(validar duración, idioma y tono didáctico no comercial antes de proyectar)*.
- Normativa española de prevención de riesgos laborales en almacenes y uso de equipos de manutención (INSST) *(verificar notas técnicas de prevención vigentes antes de citar requisitos concretos de seguridad)*.

### Glosario de términos clave

| Término | Definición práctica |
| --- | --- |
| ***Batch picking*** | Preparación simultánea de varios pedidos pequeños en un solo recorrido para reducir desplazamientos. |
| ***Dock-to-stock*** | Tiempo desde que llega la mercancía al muelle hasta que queda ubicada y disponible en el sistema. |
| **FIFO / FEFO** | Criterios de salida: primero en entrar, primero en salir (FIFO) o primero en caducar, primero en salir (FEFO). |
| ***IRA*** | *Inventory Record Accuracy*: grado de coincidencia real entre el stock físico y el registrado en el sistema. |
| ***Layout*** | Distribución física de áreas, pasillos, estanterías y muelles dentro del almacén. |
| ***Poka-yoke*** | Mecanismo o verificación sencilla diseñada para prevenir errores humanos antes de que ocurran. |
| **SGA / WMS** | Software de Gestión de Almacenes que controla ubicaciones, tareas, lotes y movimientos en tiempo real. |
| ***Slotting*** | Asignación estratégica de ubicaciones según rotación ABC, dimensiones, afinidad y ergonomía. |

---

## 9. Adaptaciones

### Sesión presencial
- Entregar el plano de la Actividad 2 en formato A3 sobre las mesas junto con rotuladores de 3 colores (rojo: flujo entrada, azul: flujo salida, verde: zona A caliente) para facilitar la discusión visual alrededor de la mesa.
- Llevar si es posible 2-3 muestras físicas de etiquetas logísticas (EAN-13, etiqueta de ubicación de estantería, etiqueta GS1-128) para hacer tangibles los conceptos de codificación y trazabilidad.
- Realizar una exposición rápida de planos pegándolos en la pared para comparar en 5 minutos las distintas soluciones de *layout* de los equipos.

### Sesión online síncrona
- Preparar en Miro/FigJam un tablero con elementos arrastrables (estanterías A/B/C, mesas de *packing*, muelles, zona de devoluciones) para que cada equipo construya el plano de la Actividad 2 de forma ágil y visual.
- Mostrar capturas reales (anonimizadas) o un vídeo corto de 2 minutos previamente validado de una operativa de *batch picking* con pistola RF para compensar la falta de visita física.
- En el caso *FINSA*, compartir una plantilla estructurada de 1 diapositiva por equipo en Google Slides para que presenten sus cálculos y hoja de ruta en 3 minutos cada uno.

### Sesión asíncrona
- Estructurar 4 microvídeos (12-15 min cada uno) acompañados de infografías descargables sobre *layout*, métodos de *picking*, *IRA* y selección de un SGA para pymes.
- Proponer como actividad práctica un recorrido fotográfico o auditoría descriptiva de un almacén propio (o de una trastienda/centro operativo real, anonimizado) aplicando la Checklist de 8 dimensiones y proponiendo 3 mejoras justificadas.
- Evaluar el caso *FINSA* mediante entrega individual escrita (máximo 2 páginas) + cuestionario de autoevaluación autocorregible en el LMS.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Aprovecha directamente la segmentación ABC y los conceptos de inventario, FEFO y stock disponible trabajados en el Tema 3, además de las bases de transformación digital y gestión de procesos de bloques anteriores.
- **Competencias que desarrolla:** Optimización de procesos intralogísticos, gestión operativa basada en métricas de productividad y calidad, diseño de flujos físicos y criterio inversor en digitalización operativa (SGA/RF).
- **Conexión con el tema anterior:** Recibe el testigo directo del **Tema 3 (Gestión de compras y aprovisionamiento)**: garantiza que las mercancías pedidas se recepcionen, ubiquen y cuenten con fiabilidad (*IRA*), devolviendo datos veraces que permiten que los puntos de pedido y el *MRP* funcionen sin errores.
- **Conexión con el tema posterior:** Prepara la salida hacia el **Tema 5 (Modelos logísticos)**: una vez que el pedido está preparado y verificado en el muelle de expedición, el siguiente desafío consiste en elegir la red de distribución, transporte, *cross-docking*, optimización de rutas y niveles de servicio hasta el cliente final.
- **Evidencia de aprendizaje del alumnado:** Plano rediseñado de almacén y estrategia de *picking*, plan de transformación con retorno económico del caso *FINSA* y auditoría propia de almacén/*3PL* con cuadro de mando semanal.

---

## Siguientes pasos para el formador

1. **Preparar el plano editable de la Actividad 2:** Imprimir copias en A3 (presencial) o duplicar los marcos de trabajo por equipo en Miro/FigJam (online) con las piezas listas para mover.
2. **Verificar cálculos de *FINSA*:** Tener la tabla resuelta de ahorros por errores, reducción de ocupación y reparto presupuestario de 45.000 € lista para proyectar en la puesta en común.
3. **Recopilar ejemplos de SGA para pymes:** Preparar una lista equilibrada y neutral de 3-4 tipologías de herramientas (módulo SGA integrado en ERP, SGA SaaS nativo e-commerce, solución *3PL*) sin sesgo comercial para responder preguntas prácticas del alumnado.
4. **Validar vídeos y normativa externa:** Comprobar cualquier vídeo demostrativo de *picking* y las guías públicas de codificación GS1/AECOC antes de mostrarlos en clase.
5. **Cerrar abriendo la puerta al transporte:** Preguntar al grupo qué ocurre a partir del momento en que la caja sale del muelle de expedición y conectar directamente con los *Modelos logísticos* del Tema 5.
