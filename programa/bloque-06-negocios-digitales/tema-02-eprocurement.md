# Tema 2. Eprocurement

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Eprocurement |
| **Bloque y posición dentro del programa** | Bloque 6: Negocios digitales — Tema 2 de 7 |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Mandos intermedios y emprendedores |
| **Nivel de dificultad** | Intermedio |
| **Prerrequisitos** | Conocimientos básicos de procesos administrativos, cuentas a pagar y operaciones digitales (Bloque 6, Tema 1) |
| **Resultado general de aprendizaje** | Diseñar y implantar flujos digitales de aprovisionamiento (*Procure-to-Pay*) que integren catálogos homologados, solicitudes, órdenes de compra, facturación electrónica y control de gasto en pymes. |

---

## 2. Objetivos de aprendizaje

Al finalizar este tema, el alumnado será capaz de:

1. **Describir** las fases del ciclo completo de compra electrónica (*Procure-to-Pay*, P2P) y el papel de cada actor interno y externo en la trazabilidad del gasto. *(Nivel de Bloom: Recordar / Comprender)*
2. **Clasificar** las categorías de gasto empresarial (directo, indirecto y compras fuera de contrato o *maverick spend*) para priorizar su digitalización mediante catálogos electrónicos. *(Nivel de Bloom: Analizar)*
3. **Aplicar** reglas de aprobación, circuitos de solicitudes y órdenes de compra digitales, así como la conciliación a tres vías (*three-way matching*) para eliminar errores de facturación. *(Nivel de Bloom: Aplicar)*
4. **Evaluar** proveedores digitales y soluciones de *eprocurement* y facturación electrónica según criterios de coste total de propiedad (TCO), integración con ERP y requisitos normativos vigentes que deben validarse. *(Nivel de Bloom: Evaluar)*
5. **Diseñar** un protocolo piloto de implantación de *eprocurement* con indicadores de control de gasto y plan de adopción para una pyme industrial o de servicios. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Del aprovisionamiento manual al ciclo digital *Procure-to-Pay* (P2P)

#### Explicación breve y clara
En muchas pymes, comprar sigue siendo un proceso fragmentado: correos sueltos, llamadas telefónicas, albaranes en papel y facturas que llegan a administración sin que nadie confirme quién autorizó el gasto. El *eprocurement* (aprovisionamiento electrónico) digitaliza de principio a fin el ciclo *Procure-to-Pay* (P2P): desde la detección de la necesidad y la solicitud interna hasta la emisión de la orden de compra, la recepción conforme y el pago automatizado.

#### Conceptos clave
- Ciclo *Source-to-Pay* (S2P) vs. *Procure-to-Pay* (P2P).
- Compras directas (vinculadas a producción/venta) vs. compras indirectas (MRO, servicios, oficina, TI).
- Trazabilidad documental y segregación de funciones.
- Eficiencia administrativa y reducción del tiempo de ciclo de pedido.

#### Definiciones necesarias
- **Eprocurement:** Uso de plataformas y flujos digitales para gestionar la solicitud, aprobación, pedido, recepción y facturación de bienes y servicios empresariales.
- **Procure-to-Pay (P2P):** Proceso operativo transaccional que abarca desde la requisición de compra hasta la contabilización y pago al proveedor.
- **Maverick Spend (compra salvaje o fuera de contrato):** Gasto realizado por empleados fuera de los proveedores homologados, tarifas negociadas o circuitos de aprobación establecidos.

#### Ejemplo práctico realista
Una empresa de instalaciones eléctricas con 35 técnicos en movilidad permitía que cada jefe de obra comprase material en el almacén local más cercano y entregase el ticket a fin de mes. Al implantar un portal sencillo de *eprocurement* móvil con 3 distribuidores homologados y aprobación automática por debajo de 300 €, reduce en un solo trimestre las compras fuera de tarifa y elimina decenas de horas mensuales de administración persiguiendo albaranes.

#### Errores frecuentes
- Digitalizar un proceso burocrático e ineficiente sin simplificar primero los niveles de aprobación.
- Centrar el *eprocurement* únicamente en negociar un 2 % menos de precio y olvidar los costes ocultos de gestión administrativa por pedido.
- Excluir a los usuarios solicitantes (taller, obra, oficinas) del diseño del flujo, lo que les empuja a saltarse el sistema.

#### Preguntas que el alumnado debería poder responder
- ¿Qué diferencia existe entre *Source-to-Pay* y *Procure-to-Pay* y por qué suele empezar una pyme por el P2P?
- ¿Cómo impacta el *maverick spend* tanto en el margen financiero como en el riesgo operativo?

---

### 3.2. Catálogos electrónicos y gestión digital de proveedores

#### Explicación breve y clara
El corazón operativo del *eprocurement* son los catálogos electrónicos con precios y condiciones prenegociadas. Cuando el empleado selecciona un artículo dentro de un catálogo curado, el sistema garantiza cumplimiento de tarifa, referencia técnica correcta y proveedor homologado, liberando al departamento de compras de tareas repetitivas para centrarse en categorías estratégicas.

#### Conceptos clave
- Catálogos internos alojados (*hosted catalogs*) frente a catálogos *punch-out*.
- Portal de proveedores (*Supplier Portal*) y homologación digital.
- Petición de información/presupuesto electrónica (e-RFI, e-RFQ, e-RFP) y subastas inversas.
- Evaluación continua del desempeño del proveedor (OTIF, calidad, incidencias de facturación).

#### Definiciones necesarias
- **Catálogo *Punch-out*:** Conexión directa desde el software de compras de la empresa cliente hacia el catálogo online del proveedor (con precios pactados), devolviendo el carrito seleccionado como solicitud de compra para su aprobación interna.
- **e-RFQ (*Electronic Request for Quotation*):** Solicitud digital estructurada de presupuestos a varios proveedores homologados bajo criterios comparables.
- **OTIF (*On Time In Full*):** Indicador que mide el porcentaje de entregas del proveedor realizadas en la fecha acordada y con la cantidad completa y conforme.

#### Ejemplo práctico realista
Una cadena regional de clínicas dentales gestiona 600 referencias de consumibles. En lugar de actualizar hojas Excel cada mes, integra un catálogo *punch-out* con su proveedor principal de material sanitario y un catálogo alojado para papelería y limpieza. Las recepcionistas de cada clínica piden en 3 minutos los artículos aprobados, respetando el presupuesto mensual de su centro y sin duplicar referencias.

#### Errores frecuentes
- Mantener catálogos alojados desactualizados, lo que provoca rechazos de pedidos y pérdida de credibilidad en la herramienta.
- Aplicar subastas electrónicas inversas a servicios complejos o componentes críticos donde la calidad y continuidad pesan más que el precio mínimo.
- No revisar anualmente la base de proveedores activos (acumulación de cientos de proveedores esporádicos con bajo volumen y alto coste de gestión).

#### Preguntas que el alumnado debería poder responder
- ¿Cuándo conviene implantar un catálogo *punch-out* frente a un catálogo interno alojado?
- ¿Qué indicadores mínimos debería incorporar un cuadro de evaluación digital de proveedores?

---

### 3.3. Solicitudes, órdenes de compra y facturación electrónica

#### Explicación breve y clara
La disciplina del gasto se sostiene en un principio simple: *«Sin orden de compra aprobada no hay pago»* (*No PO, No Pay*), adaptado con sensatez a los importes y naturaleza de cada gasto. El cierre del ciclo se produce mediante la recepción digital de mercancía o servicio y la facturación electrónica estructurada, que habilita la conciliación automática a tres vías (*three-way matching*).

#### Conceptos clave
- Matriz de aprobaciones por importe, categoría y centro de coste.
- Emisión automatizada de órdenes de compra (PO, *Purchase Order*).
- Recepción conforme (albarán digital / hoja de entrada de servicio).
- Conciliación a tres vías (*three-way matching*) y facturación electrónica estructurada (Facturae, UBL, EDI, según alcance; *verificar marco normativo español de facturación electrónica B2B y B2G antes de impartir*).

#### Definiciones necesarias
- **Orden de compra (PO):** Documento formal y vinculante que el comprador emite al proveedor especificando artículos, cantidades, precios acordados, plazo de entrega y condiciones de pago.
- **Conciliación a tres vías (*Three-Way Matching*):** Validación automática que comprueba la coincidencia entre (1) la Orden de Compra, (2) el Albarán de Recepción y (3) la Factura del proveedor antes de autorizar el pago.
- **Factura electrónica estructurada:** Documento fiscal en formato de datos estructurado (por ejemplo, XML/UBL/Facturae) que permite su emisión, transmisión y procesamiento automático entre sistemas, distinto de un simple PDF enviado por correo *(nota: verificar plazos reglamentarios y requisitos técnicos de la Ley Crea y Crece / normativa de facturación electrónica en España antes de impartir)*.

#### Ejemplo práctico realista
Una distribuidora de repuestos de automoción procesaba 900 facturas mensuales en papel y PDF tecleándolas manualmente en el ERP, con un 11 % de discrepancias de precio o cantidad. Al exigir número de orden de compra en cada factura, activar la recepción digital en almacén mediante código de barras y conectar un módulo de facturación electrónica con tolerancia automática del ±1 % en importes menores, el 78 % de las facturas pasan a contabilizarse sin intervención manual (*touchless invoicing*).

#### Errores frecuentes
- Confundir enviar un PDF por correo electrónico con tener implantada la facturación electrónica estructurada.
- Establecer tolerancias cero en la conciliación automática que bloquean pagos por diferencias de céntimos o redondeos.
- Crear órdenes de compra *a posteriori* (cuando la factura ya llegó) solo para cumplir formalmente el trámite, anulando el control preventivo del gasto.

#### Preguntas que el alumnado debería poder responder
- ¿Qué verifica exactamente el *three-way matching* y qué tipos de fraude o error previene?
- ¿Por qué generar órdenes de compra después de recibir la factura destruye el propósito del *eprocurement*?

---

### 3.4. Control de gasto, analítica de compras y gestión del cambio con proveedores

#### Explicación breve y clara
Digitalizar compras sin explotar los datos generados desaprovecha la mitad del valor. La analítica de gasto (*spend analysis*) permite visualizar cuánto se compra, a quién, en qué condiciones y qué centros de coste se desvían del presupuesto. Para que el proyecto triunfe en una pyme, la implantación debe ser gradual, empezando por categorías de alto volumen de transacciones y acompañando a empleados y proveedores en la adopción.

#### Conceptos clave
- Análisis de gasto (*Spend Analysis*) y consolidación de proveedores (*tail spend*).
- Visibilidad de gasto comprometido en tiempo real (presupuesto vs. comprometido vs. facturado).
- Indicadores de desempeño de *eprocurement* (tasa de gasto bajo contrato, *touchless rate*, coste por orden de compra, tiempo de ciclo, ahorro capturado).
- Adopción interna y *onboarding* de proveedores.

#### Definiciones necesarias
- **Gasto comprometido:** Importe de órdenes de compra ya aprobadas y emitidas pero aún no facturadas, crucial para evitar sorpresas presupuestarias a final de mes.
- **Tail Spend (gasto de cola larga):** Conjunto de compras pequeñas y muy fragmentadas que representan un porcentaje reducido del importe total pero concentran una gran parte del número de proveedores y transacciones administrativas.
- **Touchless Invoice Rate:** Porcentaje de facturas procesadas, conciliadas y aprobadas para pago de forma totalmente automática sin intervención humana.

#### Ejemplo práctico realista
Una empresa de ingeniería y montajes descubre mediante un análisis de gasto de 12 meses que compra material de oficina, EPI y ferretería a 64 proveedores distintos con más de 1.100 facturas al año de menos de 120 € de media. Consolida ese *tail spend* en 3 acuerdos marco con catálogo digital y facturación mensual recapitulativa: ahorra un 9 % en precios unitarios y reduce en más de 800 las facturas procesadas al año.

#### Errores frecuentes
- Intentar migrar el 100 % de las categorías y proveedores el primer día, colapsando a compras y administración.
- No prever un flujo ágil para compras urgentes o imprevistas, generando bloqueos operativos en producción o servicio al cliente.
- Medir únicamente el ahorro teórico negociado sin comprobar si realmente se compra a la tarifa negociada (*savings leakage*).

#### Preguntas que el alumnado debería poder responder
- ¿Qué diferencia hay entre controlar el gasto al recibir la factura y controlarlo en el momento del compromiso de compra?
- ¿Cómo abordaríais la resistencia de un proveedor pyme tradicional al que pedís trabajar con órdenes de compra y factura electrónica?

---

## 4. Metodología didáctica

Secuencia completa de **4 horas (240 minutos)** en modalidad híbrida:

| Fase | Duración | Qué hace el formador | Qué hace el alumnado |
|---|---|---|---|
| **1. Apertura y activación** | 25 min | Conecta con el Tema 1 (del lado de la venta al lado de la compra digital), presenta los objetivos y dinamiza la Actividad 1 (mapeo de fugas y dolores del proceso actual de compras en sus empresas). | Responde a la diagnóstica inicial y reconstruye visualmente cómo se tramita hoy una compra típica de 400 € en su organización, señalando cuellos de botella y riesgos de error. |
| **2. Exposición breve / Microlearning 1** | 35 min | Explica el ciclo P2P, tipologías de gasto, *maverick spend*, catálogos alojados vs. *punch-out* y gestión digital de proveedores con ejemplos de pymes. | Toma notas en su ficha de trabajo, clasifica 6 compras reales de su área (directa, indirecta, *tail spend*) y consulta dudas prácticas. |
| **3. Actividad individual o en equipo (Aplicación)** | 45 min | Conduce la Actividad 2 (diseño de matriz de aprobaciones, reglas *No PO, No Pay* y ejercicio práctico de *three-way matching* con incidencias reales). Circula por mesas/salas corrigiendo criterios de control interno. | En equipos de 3-4 personas, diseña una política de aprobaciones escalonada y audita un lote de 5 operaciones simuladas (PO, albarán y factura) detectando discrepancias y decidiendo la acción correcta. |
| **4. Descanso activo** | 15 min | Pausa programada; resuelve consultas puntuales de integración ERP/facturación. | Descansa y comparte experiencias de proveedores con sus compañeros. |
| **5. Exposición breve / Microlearning 2** | 30 min | Desarrolla facturación electrónica estructurada (con aviso de verificación normativa vigente), analítica de gasto (*spend analysis*), gestión del *tail spend* y claves de adopción de *eprocurement* en pymes. | Identifica qué categorías de su empresa son candidatas a piloto de 90 días y registra los KPI clave de seguimiento. |
| **6. Análisis de caso práctico** | 45 min | Presenta el caso de **Talleres Hidromec Norte S.L.** y distribuye los datos de compras, proveedores y costes administrativos. Acompaña el diagnóstico y diseño del plan piloto por grupos. | Analiza los datos de gasto y errores de Hidromec Norte, cuantifica el coste oculto del proceso manual y formula un plan de implantación de *eprocurement* por fases. |
| **7. Discusión guiada y puesta en común** | 25 min | Modera la exposición de propuestas (3 min por equipo), contrasta umbrales de aprobación y estrategias de *onboarding* de proveedores, y sintetiza buenas prácticas directivas. | Defiende su propuesta, argumenta cómo evitar bloqueos en planta y compara alternativas de herramientas (módulo ERP vs. plataforma SaaS dedicada). |
| **8. Síntesis, evaluación sumativa y cierre** | 20 min | Resume los principios clave del P2P, aplica la evaluación sumativa breve, lanza la Actividad 3 de transferencia y enlaza con el Tema 3 (*Efulfillment*). | Completa la prueba final, realiza la autoevaluación y define el alcance de su diagnóstico de *tail spend* laboral. |
| **TOTAL** | **240 min** | | |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «Radiografía de una compra de 400 €»
- **Objetivo:** Hacer visible el coste oculto, el número de pasos manuales y los puntos de pérdida de control de un proceso tradicional de compra en una pyme.
- **Instrucciones para el alumnado:**
  1. Individualmente (5 min), dibujad en 6 casillas el recorrido real que sigue una compra habitual de 400 € en vuestra empresa (por ejemplo, consumibles, repuestos o material informático) desde que surge la necesidad hasta que se paga al proveedor.
  2. Señalad con rojo los puntos donde se pierde tiempo, se duplica información o no existe aprobación previa.
  3. En grupos de 3 (10 min), comparad vuestros diagramas y estimad cuántos minutos totales de distintos empleados consume hoy ese único pedido.
- **Materiales necesarios:** Plantilla impresa o lienzo digital de flujo en 6 pasos.
- **Tiempo estimado:** 15 minutos (dentro de la fase de Apertura).
- **Rol del formador:** Traducir los minutos estimados a coste administrativo aproximado por pedido para evidenciar que «tramitar una compra barata sale caro».
- **Producto o entregable esperado:** Diagrama «Así compramos hoy» (*As-Is*) con 3 ineficiencias priorizadas.
- **Criterios de éxito:** Identificación concreta de al menos 3 rupturas de trazabilidad (ej. pedido por WhatsApp, albarán perdido, factura tecleada a mano).

### Actividad 2 (Aplicación): «Diseño de circuito P2P y auditoría *Three-Way Matching*»
- **Objetivo:** Aplicar criterios de control interno mediante una matriz de aprobaciones realista y resolver discrepancias en la conciliación a tres vías.
- **Instrucciones para el alumnado:**
  1. **Parte A (20 min):** Diseñad una matriz de aprobaciones para una pyme de 45 personas (compras indirectas y repuestos) definiendo 4 tramos de importe, quién aprueba, plazo máximo de aprobación (SLA interno), excepciones permitidas (urgencias) y umbral de tolerancia en facturas.
  2. **Parte B (25 min):** Recibís un dossier con 5 expedientes de compra (cada uno contiene Orden de Compra, Albarán de Recepción y Factura del proveedor) con anomalías reales: precio unitario superior al pactado, entrega parcial facturada al 100 %, factura sin PO previa, diferencia de 0,40 € por redondeo y cargo de portes no acordado. Decidid para cada expediente: *Aprobar automáticamente*, *Bloquear y reclamar nota de abono*, *Regularizar con incidencia* o *Rechazar*, justificando el procedimiento.
- **Materiales necesarios:** Dossier de 5 expedientes P2P y plantilla de matriz de aprobaciones.
- **Tiempo estimado:** 45 minutos.
- **Rol del formador:** Velar por el equilibrio entre control y agilidad (evitar que el director general tenga que aprobar compras de 50 €) y corregir las respuestas de los 5 expedientes.
- **Producto o entregable esperado:** Matriz de aprobaciones lista para política interna + tabla de resolución argumentada de los 5 expedientes.
- **Criterios de éxito:** 100 % de las anomalías materiales detectadas; segregación adecuada de funciones; protocolo ágil y realista para urgencias operativas.

### Actividad 3 (Transferencia a la realidad laboral): «Mapa de gasto y propuesta de piloto P2P»
- **Objetivo:** Elaborar un diagnóstico inicial de gasto indirecto o *tail spend* de la propia empresa (o proyecto) y definir un piloto viable de digitalización de compras.
- **Instrucciones para el alumnado:**
  1. Recopilad datos anonimizados o agregados de los últimos 6-12 meses de 1 o 2 categorías de compra de vuestro departamento/empresa (número de proveedores, número de facturas, importe aproximado y forma actual de pedido).
  2. Identificad qué porcentaje corresponde a compras repetitivas candidatas a catálogo electrónico y estimad el tiempo administrativo mensual dedicado a tramitar y conciliar esas facturas.
  3. Redactad una propuesta ejecutiva de 2 páginas para dirección detallando: alcance del piloto (categorías y 3-5 proveedores), circuito propuesto (solicitud–PO–recepción–factura), requisitos de integración y 4 KPI para evaluar el éxito a 90 días.
- **Materiales necesarios:** Plantilla de propuesta ejecutiva de piloto P2P y datos agregados de la propia empresa (o set de datos alternativos facilitado por el formador para emprendedores en fase inicial).
- **Tiempo estimado:** 10 minutos de preparación en sesión + 60 minutos de trabajo asíncrono.
- **Rol del formador:** Revisar la coherencia entre el tamaño de la empresa y el alcance del piloto, proporcionando feedback individualizado en el campus virtual.
- **Producto o entregable esperado:** Documento de propuesta ejecutiva «Piloto Eprocurement 90 días».
- **Criterios de éxito:** Diagnóstico cuantificado (aunque sea por estimación documentada), alcance acotado y realista, y métricas claras de ahorro de tiempo y control del gasto.

---

## 6. Caso práctico: «Talleres Hidromec Norte S.L.: el caos invisible de las compras»

### Contexto empresarial
**Talleres Hidromec Norte S.L.** es una pyme industrial de Bilbao con 52 empleados dedicada al mecanizado de precisión y fabricación de bloques y componentes hidráulicos para maquinaria agrícola y naval. Factura 7,8 millones de euros anuales y utiliza un ERP tradicional principalmente para contabilidad, nóminas y facturación a clientes, pero apenas usa el módulo de compras.

### Situación o problema
El director financiero detecta una caída de 3,2 puntos en el margen operativo durante el último año pese a mantener estable la cartera de pedidos. Al investigar las desviaciones de costes de taller y mantenimiento, descubre que los encargados de turno, mantenimiento y oficina técnica piden herramientas de corte, tornillería, lubricantes, embalajes y servicios directamente por teléfono, correo o mostrador a más de 180 proveedores. Las facturas llegan a administración al mes siguiente en papel o PDF, sin referencia de pedido ni albarán firmado, provocando pagos duplicados, pérdida de descuentos por volumen y tensiones constantes entre taller y contabilidad.

### Datos disponibles

| Parámetro operativo (último ejercicio) | Situación actual Hidromec Norte |
|---|---|
| Volumen anual de compras totales | 3,9 M € (2,6 M € materia prima directa / 1,3 M € indirectas, MRO y utillaje) |
| Número total de proveedores activos en compras indirectas y MRO | 184 proveedores |
| Concentración del gasto indirecto | 22 proveedores concentran el 70 % del gasto; 162 proveedores se reparten el 30 % restante (*tail spend*) |
| Número de facturas de compras indirectas al año | 3.400 facturas (importe medio: 382 €) |
| Porcentaje de compras con Orden de Compra previa | 18 % |
| Estimación de *maverick spend* en utillaje y MRO | 34 % del gasto indirecto |
| Tasa de incidencias en facturas (precio distinto, cantidad errónea, falta de albarán) | 16 % de las facturas recibidas |
| Tiempo medio administrativo para tramitar, verificar y contabilizar una factura | 28 minutos (coste hora administrativa estimado: 24 €/h) |
| Descuentos por pronto pago perdidos por demora en validación de facturas | 14.500 €/año |
| Roturas de stock de utillaje crítico por compras descoordinadas | 9 paradas parciales de máquina en el año |
| Estado de facturación electrónica con proveedores | 95 % en PDF por email o papel; 5 % EDI con un gran proveedor |

### Preguntas de análisis
1. ¿Cuál es el coste administrativo anual visible de procesar las 3.400 facturas indirectas y qué otros costes ocultos están erosionando el margen?
2. ¿Por qué sería un error intentar digitalizar de golpe los 184 proveedores y qué criterios usaríais para segmentar el gasto?
3. ¿Cómo diseñaríais el circuito P2P para que los encargados de taller no perciban el sistema como un freno burocrático ante una avería urgente?
4. ¿Qué papel juegan los catálogos electrónicos, la consolidación del *tail spend* y la facturación electrónica estructurada en la solución?

### Tarea a realizar
Como equipo responsable de transformación de operaciones, elaborad un **Plan de Implantación de Eprocurement a 6 meses** para Talleres Hidromec Norte S.L. que contenga:
1. Cuantificación de las palancas de ahorro (administrativo, reducción de *maverick spend*, consolidación y descuentos por pronto pago).
2. Estrategia de racionalización de proveedores y selección de categorías para la Fase 1 (primeros 90 días).
3. Diseño del nuevo flujo P2P (solicitud, matriz de aprobación, catálogo *hosted/punch-out*, recepción en almacén, *three-way matching* y excepción para urgencias).
4. Plan de gestión del cambio interno (taller y administración) y *onboarding* de los proveedores clave.

### Posibles soluciones o criterios de análisis
Un planteamiento de calidad debería contemplar:
- **Cuantificación del problema:** 3.400 facturas × 28 min = ~1.587 horas administrativas/año (~38.080 € solo en carga administrativa directa), a lo que se suman 14.500 € de descuentos perdidos, sobrecostes de *maverick spend* (un ahorro conservador del 5-8 % sobre el gasto indirecto sin contrato supone decenas de miles de euros) y costes de paradas de máquina.
- **Segmentación pragmática:** No empezar por los 162 pequeños proveedores. En Fase 1, consolidar las categorías repetitivas de alto número de facturas (herramientas de corte, tornillería, EPI, lubricantes y embalaje) reduciendo el *tail spend* mediante 4-6 acuerdos marco con catálogos electrónicos (*punch-out* con grandes distribuidores industriales y catálogos alojados con proveedores locales clave) y facturación mensual agrupada donde proceda.
- **Flujo ágil con control:** Implantar regla *No PO, No Pay* con aprobación automática hasta 250 € si el artículo pertenece al catálogo homologado y está dentro del presupuesto mensual de mantenimiento; aprobación del jefe de planta hasta 2.500 €; dirección por encima. Establecer un «carril rápido de emergencia» (código de avería con regularización obligatoria en 24 h) para no parar nunca una máquina.
- **Tecnología y facturación electrónica:** Evaluar primero activar el módulo de compras de su ERP actual conectado a un portal P2P ligero frente a cambiar todo el ERP; preparar la recepción de factura electrónica estructurada cumpliendo la normativa española vigente *(verificar calendario reglamentario aplicable)*.
- **Adopción:** Formar en planta con tabletas en el punto de consumo, implicar al jefe de mantenimiento como patrocinador del piloto y celebrar sesiones de 30 minutos con los 20 proveedores principales explicándoles la ventaja directa: cobros puntuales y sin bloqueos si incluyen el número de PO.

### Preguntas de reflexión final
- ¿Qué argumento resulta más persuasivo para convencer a un proveedor local de que adopte vuestro circuito de órdenes de compra y facturación electrónica?
- ¿Cómo evitar que una excesiva rigidez en compras genere stock innecesario «por si acaso» en el taller?

---

## 7. Evaluación

### Evaluación diagnóstica breve (Inicio de sesión — 5 min)
Sondeo inicial de 4 ítems:
1. En vuestra empresa, ¿qué porcentaje aproximado de facturas llegan con una orden de compra aprobada previamente? (<25 %, 25-50 %, 50-80 %, >80 %).
2. ¿Sabéis cuánto cuesta administrativamente tramitar una factura de proveedor desde el pedido hasta el pago?
3. ¿Qué diferencia hay entre recibir un PDF por correo y recibir una factura electrónica estructurada?
4. ¿Cuál es el mayor problema actual con vuestros proveedores: precio, plazos, errores de factura o falta de visibilidad del gasto?

### Evaluación formativa durante la sesión
- Revisión guiada del diagrama *As-Is* (Actividad 1).
- Corrección colaborativa de los 5 expedientes de *three-way matching* (Actividad 2) comprobando el dominio técnico del control interno.
- Valoración cualitativa de las propuestas presentadas en el caso **Talleres Hidromec Norte S.L.**

### Evaluación sumativa al final
- **Cuestionario aplicado (10 min):** 5 preguntas sobre conceptos P2P, diferencia *hosted* vs. *punch-out*, cálculo de coste administrativo, *three-way matching* y gestión de *tail spend*.
- **Entregable individual de transferencia (Actividad 3):** Propuesta ejecutiva «Piloto Eprocurement 90 días», evaluada con la siguiente rúbrica.

### Rúbrica de evaluación

| Criterio (Peso) | Insuficiente (1) | En desarrollo (2) | Adecuado (3) | Destacado (4) |
|---|---|---|---|---|
| **Diagnóstico de gasto y *tail spend* (25 %)** | Describe impresiones generales sin datos ni clasificación de categorías. | Clasifica parcialmente el gasto pero no identifica ineficiencias cuantificables ni *maverick spend*. | Segmenta categorías, estima volumen transaccional y detecta fugas claras de coste y tiempo. | Presenta un análisis estructurado del gasto y del coste administrativo por pedido que justifica con rigor la selección del piloto. |
| **Diseño del flujo P2P y control interno (30 %)** | No define roles, aprobaciones ni conciliación documental. | Propone un flujo incompleto o excesivamente burocrático que dificulta la operativa diaria. | Diseña un circuito P2P completo (solicitud, matriz de aprobación, PO, recepción y *three-way matching*) equilibrando control y agilidad. | Incorpora además reglas claras de catálogos, tolerancias de conciliación, carril de urgencias y preparación para facturación electrónica estructurada. |
| **Estrategia de proveedores y gestión del cambio (20 %)** | Ignora la adopción de usuarios internos y proveedores. | Menciona la formación de forma genérica sin acciones específicas de *onboarding*. | Propone acciones concretas de comunicación, formación interna y adhesión de proveedores clave. | Diseña un plan realista de incentivos y acompañamiento (internos y externos) anticipando resistencias típicas de pyme. |
| **KPIs y viabilidad financiera (25 %)** | Sin indicadores de éxito ni estimación de impacto. | Define métricas vagas o desconectadas de los problemas detectados. | Incluye 4 o más KPI medibles (ahorro, ciclo, *maverick spend*, incidencias) y cronograma viable a 90 días. | Vincula cada KPI a una línea base y objetivo cuantificado, con evaluación de retorno esperado frente al esfuerzo de implantación. |

### Actividad de autoevaluación o reflexión
Escala rápida de autodiagnóstico (1 a 5) sobre la madurez de compras digitales en su organización en cinco dimensiones: *Visibilidad del gasto*, *Uso de órdenes de compra*, *Catálogos homologados*, *Conciliación de facturas* y *Relación digital con proveedores*. Cada alumno redacta una frase de compromiso: *«La primera fuga de gasto o tiempo que voy a medir esta semana es...»*.

---

## 8. Materiales y recursos

### Guion de diapositivas (estructura slide por slide)
1. **Portada:** Bloque 6 · Tema 2. Eprocurement. Objetivos y resultados esperados.
2. **El espejo del Tema 1:** De vender online (e-commerce) a comprar digitalmente (e-procurement).
3. **El coste oculto de comprar mal:** Qué pasa cuando una pyme compra por WhatsApp, correo y papel.
4. **Anatomía del ciclo P2P vs. S2P:** Fases, documentos y responsables.
5. **Clasificación estratégica del gasto:** Compras directas, indirectas, *tail spend* y *maverick spend*.
6. **Catálogos electrónicos:** Diferencias prácticas entre catálogos alojados (*hosted*) y catálogos *punch-out*.
7. **Portal de proveedores y negociación digital:** Homologación, e-RFQ y evaluación de desempeño (OTIF).
8. **Reglas de oro del control interno:** Matriz de aprobaciones, *No PO, No Pay* y excepciones de urgencia.
9. **Conciliación a tres vías (*Three-Way Matching*):** Esquema visual y reglas de tolerancia.
10. **Actividad 2 en pantalla:** Reto de diseño de matriz y auditoría de 5 expedientes P2P.
11. **Facturación electrónica estructurada:** PDF vs. formato estructurado (XML/UBL/Facturae) y beneficios de automatización *(aviso: verificar calendario legal español vigente)*.
12. **Analítica de gasto (*Spend Analysis*):** Gasto comprometido vs. facturado y 6 KPI esenciales de compras digitales.
13. **Cómo implantar *eprocurement* en una pyme sin morir en el intento:** Selección tecnológica (ERP vs. SaaS P2P) y enfoque por fases.
14. **Caso práctico: Talleres Hidromec Norte S.L.:** Datos, retos y estructura del plan a 6 meses.
15. **Síntesis, entregable de transferencia y puente al Tema 3 (Efulfillment).**

### Ficha de trabajo
**Cuaderno de trabajo P2P:** Incluye plantilla de diagrama *As-Is* en 6 pasos, tabla clasificadora de categorías de gasto, matriz de aprobaciones en blanco y hoja de resolución de los 5 expedientes de *three-way matching*.

### Plantilla o herramienta práctica replicable
**Plantilla de Matriz de Aprobaciones y Política P2P para Pymes:**

| Tramo de importe (sin IVA) | Tipo de compra | Catálogo obligatorio | Aprobador nivel 1 | Aprobador nivel 2 | SLA aprobación | Tipo de recepción | Regla de facturación |
|---|---|---|---|---|---|---|---|
| Hasta 250 € | Indirecta / MRO en catálogo | Sí | Automática (si hay presupuesto) | No requiere | Inmediata | Confirmación simple | PO obligatoria / tolerancia ±2 % |
| 251 € – 1.500 € | Indirecta / Repuestos | Preferente (si no, 2 presupuestos) | Responsable de área | No requiere | 24 h laborables | Albarán digital | Three-way matching (tolerancia ±1 %) |
| 1.501 € – 5.000 € | Servicios / Equipos / Directa | e-RFQ mínimo 3 proveedores | Responsable de área | Dirección Financiera / Operaciones | 48 h laborables | Albarán o Hoja de Entrada de Servicio | Three-way matching estricto |
| Más de 5.000 € | Estratégica / Inversión | Licitación / e-RFP formal | Dirección Operaciones | Dirección General | 72 h laborables | Acta de conformidad | Contrato + PO + Factura estructurada |
| Urgencia operativa | Avería crítica de producción | Excepción documentada | Jefe de planta (código urgencia) | Validación posterior en 24 h | Inmediata | Albarán en entrega | Regularización PO en 24 h |

### Lecturas o recursos recomendados
- Guías prácticas de **AERCE** (Asociación Española de Profesionales de Compras, Contratación y Aprovisionamientos) sobre transformación digital de la función de compras.
- Documentación institucional sobre **Facturae** y portales públicos de facturación electrónica (FACe) en España.
- Guías de **Acelera Pyme / Kit Digital** sobre soluciones de factura electrónica y gestión de procesos internos.

### Vídeos, artículos o fuentes adicionales *(requieren validación previa)*
> **Nota para el formador:** Antes de emplear o recomendar estos materiales en la formación, **valida que los enlaces estén activos y que los plazos legales citados correspondan a la normativa vigente**:
- Texto oficial y desarrollo reglamentario de la **Ley 18/2022 (Ley Crea y Crece)** sobre obligatoriedad de factura electrónica entre empresarios y profesionales en España *(verificar fechas exactas de entrada en vigor según volumen de facturación en el BOE antes de impartir)*.
- Informes periódicos sobre madurez digital en compras de consultoras especializadas o asociaciones como **AERCE / CIPS** *(verificar edición más reciente y disponibilidad abierta)*.
- Demostraciones breves en vídeo de funcionamiento de catálogos *punch-out* y flujos P2P en plataformas SaaS para pymes (ej. Odoo, Coupa, SAP Ariba, Holded o módulos ERP equivalentes) *(validar neutralidad comercial y enlaces vigentes)*.

### Glosario de términos clave

| Término | Definición operativa |
|---|---|
| **Catálogo *Hosted*** | Catálogo de productos y precios de proveedores almacenado y mantenido dentro del sistema de compras de la empresa compradora. |
| **Catálogo *Punch-out*** | Integración en tiempo real que conecta la plataforma de compras con la tienda B2B del proveedor y devuelve el carrito para su aprobación interna. |
| **e-RFQ** | Petición electrónica y estandarizada de presupuestos a varios proveedores. |
| **Factura electrónica estructurada** | Factura emitida y recibida en formato electrónico estructurado de datos que permite su procesamiento automático. |
| **Gasto comprometido** | Importe de pedidos ya aprobados y emitidos que aún no han sido facturados ni pagados. |
| **Maverick Spend** | Compras realizadas fuera de los contratos, catálogos o flujos de aprobación autorizados. |
| **MRO (*Maintenance, Repair and Operations*)** | Materiales y suministros necesarios para el mantenimiento y operación diaria que no forman parte directa del producto final. |
| **OTIF (*On Time In Full*)** | Porcentaje de entregas recibidas en plazo y con cantidades completas y conformes. |
| **PO (*Purchase Order*)** | Orden de compra oficial emitida al proveedor con condiciones vinculantes. |
| **Procure-to-Pay (P2P)** | Ciclo operativo completo desde la solicitud de compra hasta el pago de la factura. |
| **Tail Spend** | Gasto altamente fragmentado en numerosas compras de bajo importe y muchos proveedores esporádicos. |
| **Three-Way Matching** | Conciliación automática entre orden de compra, albarán de recepción y factura del proveedor. |

---

## 9. Adaptaciones para modalidad híbrida

### Sesión presencial
- Entregar los 5 expedientes de *three-way matching* (Actividad 2) en carpetas físicas impresas con sellos de colores (*Aprobado*, *Bloqueado*, *Reclamar*) para simular dinámicamente un departamento de cuentas a pagar.
- Trabajar el diagrama *As-Is* en papel continuo por mesas para visualizar de forma tangible la longitud real de un proceso manual.

### Sesión online síncrona
- Distribuir los 5 expedientes de la Actividad 2 en un documento PDF interactivo o pestañas de Google Sheets por sala privada (*breakout room*).
- Utilizar encuestas en directo durante los bloques de microlearning para contrastar cómo gestionan las compras las distintas empresas participantes y fomentar el aprendizaje entre pares.
- Compartir pantalla mostrando un ejemplo real (o demo anonimizada) de estructura de archivo XML de factura electrónica frente a un PDF para fijar la diferencia visualmente.

### Sesión asíncrona
- Subir previamente un microvídeo de 8 minutos explicando las siglas básicas del aprovisionamiento (P2P, S2P, PO, MRO, OTIF) y el enunciado del caso **Talleres Hidromec Norte S.L.**
- Habilitar en el LMS un simulador o cuestionario autocorregible con 6 casos breves de conciliación a tres vías para practicar antes o después de la sesión.
- Crear un hilo de debate asíncrono donde cada participante comparta una objeción real de su equipo o proveedor ante la compra digital y el resto proponga argumentos de respuesta.

---

## 10. Conexión con el programa

- **Qué conocimientos previos refuerza:** Aprovecha la comprensión de catálogos, plataformas y métricas operativas del Tema 1 (*Comercio electrónico*) y los principios de gestión de procesos, finanzas operativas y gestión del cambio de bloques anteriores.
- **Qué competencias desarrolla:** Control financiero operativo, diseño de procesos digitales eficientes, gestión y evaluación de proveedores, control interno y analítica de gasto.
- **Conexión con el tema anterior y posterior:**
  - *Tema anterior (Bloque 6, Tema 1 — Comercio electrónico y sus operaciones):* El e-commerce optimiza el frente comercial (*Order-to-Cash*); el *eprocurement* aplica una lógica digital espejo al abastecimiento (*Procure-to-Pay*), cerrando la pinza de rentabilidad de la pyme.
  - *Tema posterior (Bloque 6, Tema 3 — Efulfillment):* Una vez que la empresa domina tanto la entrada de pedidos online (Tema 1) como el abastecimiento digital y controlado de mercancía y embalajes (Tema 2), el Tema 3 aborda el eslabón físico-digital clave: cómo preparar, empaquetar, almacenar, expedir y gestionar devoluciones de pedidos online con precisión.
- **Evidencia de aprendizaje que dejará el alumnado:** (1) Matriz de aprobaciones y resolución documentada de 5 casos de *three-way matching* en clase, y (2) Propuesta ejecutiva individual de «Piloto Eprocurement 90 días» basada en datos de su organización o proyecto.

---

## Siguientes pasos para el formador

1. **Verificar la normativa de facturación electrónica:** Consultar el BOE y portales oficiales (Ministerio de Economía / AEAT) antes de la sesión para confirmar los plazos vigentes exactos de obligatoriedad de la factura electrónica B2B en España y sus requisitos técnicos.
2. **Preparar el kit de los 5 expedientes P2P:** Imprimir (para presencial) y cargar en carpeta compartida (para online) los expedientes de la Actividad 2 junto con la hoja de soluciones comentadas para el docente.
3. **Ajustar ejemplos al perfil de la cohorte:** Si predominan empresas de servicios o agencias, añadir un ejemplo de *Hoja de Entrada de Servicio (HES)* para conciliación de intangibles (horas de consultoría, licencias SaaS, subcontratas).
4. **Activar la entrega asíncrona en el LMS:** Publicar la plantilla del «Piloto Eprocurement 90 días» y un conjunto de datos alternativos anonimizados para emprendedores que aún no dispongan de histórico de compras.
5. **Introducir el puente al Tema 3:** Pedir al alumnado que, para la próxima sesión, identifique cuál es el mayor cuello de botella físico de su empresa (o de una tienda online que conozca) desde que entra un pedido hasta que sale del almacén.
