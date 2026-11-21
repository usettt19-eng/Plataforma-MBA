# Tema 3. Efulfillment

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Efulfillment |
| **Bloque y posición dentro del programa** | Bloque 6: Negocios digitales — Tema 3 de 7 |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Mandos intermedios y emprendedores |
| **Nivel de dificultad** | Intermedio |
| **Prerrequisitos** | Conocimientos previos de operaciones e-commerce y aprovisionamiento digital (Bloque 6, Temas 1 y 2) |
| **Resultado general de aprendizaje** | Diseñar, dimensionar y optimizar la operativa completa posterior a la venta online (inventario, preparación de pedidos, empaquetado, expedición, seguimiento y logística inversa), evaluando la decisión entre operativa propia y externalización (3PL) en pymes. |

---

## 2. Objetivos de aprendizaje

Al finalizar este tema, el alumnado será capaz de:

1. **Describir** las etapas críticas del flujo de *efulfillment* (recepción, ubicación, control de inventario, *picking*, *packing*, expedición, trazabilidad y devoluciones) y su impacto directo en la promesa de entrega. *(Nivel de Bloom: Recordar / Comprender)*
2. **Aplicar** métodos de organización de inventario (clasificación ABC, *slotting*) y estrategias de preparación de pedidos (*picking* discreto, por lotes, por zonas u oleadas) para reducir errores y tiempos de ciclo. *(Nivel de Bloom: Aplicar)*
3. **Analizar** la estructura de costes por pedido, el peso volumétrico en el empaquetado y los cuellos de botella en picos de demanda (campañas, rebajas, estacionalidad). *(Nivel de Bloom: Analizar)*
4. **Evaluar** financieramente y operativamente si conviene mantener un almacén propio (*in-house*) o externalizar a un operador logístico (*3PL*) mediante indicadores SLA y coste total por pedido. *(Nivel de Bloom: Evaluar)*
5. **Diseñar** un protocolo integrado de *efulfillment*, seguimiento proactivo y logística inversa capaz de escalar el volumen de pedidos online sin degradar la calidad de entrega. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Fundamentos del *efulfillment* y control de inventario en tiempo real

#### Explicación breve y clara
El *efulfillment* comprende todas las operaciones físicas y digitales que ocurren desde que el cliente pulsa «pagar» hasta que recibe el paquete en perfectas condiciones —y, si procede, lo devuelve—. A diferencia de la logística tradicional B2B (palets completos, pocos destinos), el *efulfillment* gestiona cientos o miles de pedidos pequeños, unitarios y urgentes, donde la precisión del inventario es el cimiento de todo el sistema.

#### Conceptos clave
- Integración entre tienda online, ERP y sistema de gestión de almacén (SGA / WMS).
- Precisión de inventario (*Inventory Accuracy*) y recuentos cíclicos (*cycle counting*).
- Clasificación ABC de referencias y asignación inteligente de ubicaciones (*slotting*).
- Stock de seguridad, punto de reorden y gestión omnicanal (stock único vs. stock dedicado).

#### Definiciones necesarias
- **Efulfillment:** Conjunto de procesos logísticos posteriores a la venta electrónica: recepción, almacenaje, control de stock, preparación (*picking*), embalaje (*packing*), etiquetado, expedición, seguimiento y gestión de retornos.
- **WMS / SGA (Sistema de Gestión de Almacenes):** Software que controla ubicaciones, entradas, movimientos, lotes, caducidades y rutas de preparación mediante terminales de radiofrecuencia o lectores de códigos de barras.
- **Slotting:** Distribución física optimizada de los productos en el almacén según rotación (ABC), tamaño, peso o compra conjunta para minimizar desplazamientos del operario.

#### Ejemplo práctico realista
Una tienda online de suplementación deportiva en Málaga preparaba pedidos usando un listado en papel sin ubicaciones codificadas: cada operario perdía minutos buscando sabores y formatos, con un 4,5 % de errores de envío. Al numerar pasillos y baldas, agrupar las 40 referencias tipo A (que concentran el 75 % de los pedidos) junto a la mesa de empaquetado e implantar lectura de código de barras en móvil/PDA, duplica la productividad por hora y baja los errores por debajo del 0,4 %.

#### Errores frecuentes
- Confiar en un único inventario anual y operar el resto del año con desfases crónicos entre stock teórico y físico.
- Ordenar el almacén por orden alfabético o proveedor en lugar de por rotación (ABC) y afinidad de pedido.
- Comprometer ventas con el mismo stock en tienda física, web y marketplaces sin actualización frecuente ni margen de seguridad.

#### Preguntas que el alumnado debería poder responder
- ¿Por qué el *slotting* basado en rotación ABC reduce drásticamente el coste de mano de obra sin requerir grandes inversiones tecnológicas?
- ¿Qué diferencia operativa existe entre gestionar un almacén con un ERP básico frente a incorporar un WMS/SGA con escaneo de códigos?

---

### 3.2. Preparación de pedidos (*picking*), empaquetado (*packing*) y expedición

#### Explicación breve y clara
El *picking* suele representar la mayor partida de tiempo y coste operativo dentro del almacén e-commerce, seguido del *packing* y la tarifa de transporte. Elegir el método de preparación adecuado al volumen de pedidos y diseñar un embalaje eficiente (que proteja el producto, optimice el peso volumétrico y cuide el *unboxing*) marca la diferencia entre escalar con margen o colapsar en campañas pico.

#### Conceptos clave
- Estrategias de *picking*: discreto (pedido a pedido), por lotes (*batch*), por zonas y por oleadas (*wave*).
- Verificación de precisión (*pick-to-scan* / control por peso).
- Optimización de embalaje, peso volumétrico (*dim weight*) y sostenibilidad.
- Hora de corte (*cut-off time*), integración multitransportista y generación automática de etiquetas.

#### Definiciones necesarias
- **Picking:** Proceso de localización y recogida física de los artículos que componen uno o varios pedidos desde sus ubicaciones de almacenaje.
- **Peso volumétrico:** Peso calculado en función de las dimensiones externas del paquete (largo × ancho × alto / factor de conversión del transportista); si supera el peso real, el porte se factura sobre el volumétrico.
- **Cut-off time (hora de corte):** Hora límite diaria hasta la cual los pedidos recibidos se preparan y entregan al transportista ese mismo día.

#### Ejemplo práctico realista
Una pyme de artículos de regalo y papelería enviaba todos sus pedidos en solo dos tamaños de caja estándar. Al analizar sus facturas de mensajería, descubre que el 62 % de sus envíos pagaban por peso volumétrico «transportando aire». Introduce sobres acolchados reciclados para artículos planos y 4 formatos de caja ajustados, además de cambiar de *picking* pedido a pedido a *batch picking* en campañas de Navidad: ahorra un 18 % en coste medio de envío y despacha el doble de pedidos antes de la hora de corte de las 17:00 h.

#### Errores frecuentes
- Enviar artículos pequeños en cajas sobredimensionadas con exceso de relleno, encareciendo el porte por peso volumétrico y dañando la percepción medioambiental del cliente.
- No establecer una hora de corte realista y prometer «entrega en 24 h» para pedidos que entran a las 20:00 h.
- Imprimir manualmente direcciones y etiquetas una a una en la web del transportista, multiplicando errores de código postal y retrasos.

#### Preguntas que el alumnado debería poder responder
- ¿Cuándo conviene pasar de *picking* discreto a *batch picking* (por lotes)?
- ¿Cómo impacta el peso volumétrico en la cuenta de resultados de un e-commerce y qué medidas prácticas permiten reducirlo?

---

### 3.3. Seguimiento postventa, logística inversa y gestión de picos

#### Explicación breve y clara
Una vez que el paquete sale del muelle, la ansiedad del cliente crece si no recibe información clara (*tracking* proactivo). Al mismo tiempo, las devoluciones son parte estructural del comercio electrónico: si no se diseñan procesos rápidos de recepción, inspección, reacondicionamiento (*refurbishing*) y reincorporación al stock vendible, el almacén se convierte en un cementerio de mercancía inmovilizada que destruye tesorería.

#### Conceptos clave
- Seguimiento proactivo de envíos y gestión de incidencias de transporte (ausencias, dirección errónea, rotura).
- Flujo físico de logística inversa: recepción RMA, inspección de calidad (grado A/B/C), reacondicionamiento y reubicación (*put-away*).
- Planificación de capacidad para picos de demanda (Black Friday, rebajas, Navidad, lanzamientos).
- Indicadores de *efulfillment*: *Order Accuracy*, *Dock-to-Stock*, *Order Cycle Time*, coste por pedido y *Return Processing Time*.

#### Definiciones necesarias
- **Order Accuracy (precisión de pedido):** Porcentaje de pedidos entregados sin errores de artículo, cantidad, documentación ni daños atribuibles a la preparación/embalaje.
- **Dock-to-Stock:** Tiempo medio transcurrido desde que una mercancía (compra o devolución) llega al muelle de entrada hasta que queda registrada y disponible para vender en el sistema.
- **Logística inversa:** Conjunto de operaciones para retornar productos desde el cliente hacia el almacén, evaluar su estado y recuperar el máximo valor económico (reventa, outlet, reparación o reciclaje).

#### Ejemplo práctico realista
Una marca española de ropa técnica de montaña sufría un cuello de botella en enero: acumulaba 700 devoluciones en cajas sin abrir durante 3 semanas mientras los mismos productos figuraban «agotados» en la web. Implementa una mesa dedicada de inspección de retornos con clasificación en 3 grados (A: reventa inmediata; B: planchado/reembolsado; C: tara para outlet) y objetivo de *Dock-to-Stock* de 48 horas. Recupera ventas perdidas de temporada y reduce el tiempo de reembolso a la mitad.

#### Errores frecuentes
- Dejar las devoluciones «para cuando haya un hueco», perdiendo la ventana comercial de venta de productos estacionales.
- Depender de que el cliente llame para enterarse de que su paquete lleva 4 días retenido en una delegación del transportista.
- Improvisar refuerzos de personal temporal en picos sin procesos estandarizados ni formación exprés, disparando la tasa de errores.

#### Preguntas que el alumnado debería poder responder
- ¿Qué relación existe entre el indicador *Dock-to-Stock* de devoluciones y la tesorería de una pyme con catálogo estacional?
- ¿Qué notificaciones automáticas clave deben enviarse entre el pago y la entrega para minimizar consultas de soporte?

---

### 3.4. Almacén propio (*in-house*) frente a externalización logística (*3PL*)

#### Explicación breve y clara
Uno de los dilemas estratégicos más frecuentes en pymes digitales en crecimiento es decidir si continuar preparando pedidos con recursos propios (*in-house*) o delegar almacenaje, *picking*, *packing* y envíos en un operador logístico especializado (*3PL — Third-Party Logistics*). No existe una respuesta universal: depende del volumen y variabilidad de pedidos, complejidad del producto, grado de personalización y comparación rigurosa de costes fijos frente a variables.

#### Conceptos clave
- Modelo *in-house* (control total, costes fijos) vs. modelo *3PL* (variabilización de costes, escalabilidad, tarifas de transporte agregadas).
- Estructura tarifaria típica de un 3PL: recepción (*inbound*), almacenaje (por palet/balda/m³), *pick & pack* (por pedido + línea adicional), embalaje, envío y gestión de devoluciones.
- Modelo híbrido y *dropshipping* (cuándo encaja y qué riesgos entraña).
- Contrato 3PL: SLA exigibles, integraciones API y cláusulas de salida.

#### Definiciones necesarias
- **3PL (*Third-Party Logistics*):** Proveedor externo especializado que gestiona la recepción, almacenaje, preparación, expedición y devoluciones de los pedidos de una empresa mediante acuerdos de nivel de servicio.
- **Dropshipping:** Modelo en el que el vendedor online no mantiene inventario propio, sino que transfiere cada pedido directamente al fabricante o mayorista para que lo envíe al cliente final.
- **Coste total por pedido (*Cost per Order*):** Suma de todos los costes fijos y variables de almacén, mano de obra, consumibles, software, mermas y transporte divididos entre los pedidos expedidos.

#### Ejemplo práctico realista
Una pyme de menaje de cocina en Madrid gestionaba 900 pedidos al mes en su propio almacén, con fuertes picos en noviembre y diciembre (3.200 pedidos/mes) que obligaban a todo el equipo comercial a bajar a hacer cajas. Al comparar su coste real *in-house* (alquiler, personal fijo + refuerzos, software, tarifas propias de envío y errores) frente a un operador 3PL con tarifas negociadas de mensajería, descubre que el 3PL le cuesta 0,35 € más en meses valle, pero le ahorra un 22 % en meses pico, elimina inversiones en nave y libera al equipo para vender.

#### Errores frecuentes
- Comparar la tarifa «todo incluido» de un 3PL únicamente contra el salario de un mozo de almacén, olvidando alquiler, suministros, seguros, amortización, horas de dirección y errores propios.
- Externalizar a un 3PL sin definir SLA contractuales ni penalizaciones (precisión de picking, *cut-off time*, tiempo de entrada de devoluciones) ni verificar la calidad de su integración tecnológica.
- Utilizar *dropshipping* en productos diferenciales sin auditar plazos reales ni embalaje del proveedor, destruyendo la reputación de la marca propia.

#### Preguntas que el alumnado debería poder responder
- ¿Qué partidas ocultas suelen omitirse al calcular el coste real del *efulfillment* propio?
- ¿Qué 5 cláusulas o SLA son imprescindibles antes de firmar un contrato con un operador 3PL?

---

## 4. Metodología didáctica

Secuencia completa de **4 horas (240 minutos)** en modalidad híbrida:

| Fase | Duración | Qué hace el formador | Qué hace el alumnado |
|---|---|---|---|
| **1. Apertura y activación** | 25 min | Enlaza con el Tema 2 (del aprovisionamiento a la salida hacia el cliente), presenta objetivos y dinamiza la Actividad 1 (simulación rápida de errores en cadena del almacén e-commerce). | Responde a la diagnóstica inicial y analiza en parejas el impacto económico y reputacional de un pedido mal preparado o retrasado en su propia experiencia. |
| **2. Exposición breve / Microlearning 1** | 35 min | Explica flujo completo de *efulfillment*, control de inventario, clasificación ABC/*slotting*, métodos de *picking* y cálculo de peso volumétrico con ejemplos visuales. | Completa en la ficha de trabajo un ejercicio rápido de clasificación ABC y cálculo de peso volumétrico de dos formatos de caja. |
| **3. Actividad individual o en equipo (Aplicación)** | 45 min | Dirige la Actividad 2 (comparativa financiera y operativa *In-house vs. 3PL* + diseño de SLA). Asiste a los equipos verificando costes fijos, variables, líneas por pedido y estacionalidad. | En grupos de 3-4 personas, modela en hoja de cálculo el coste anual *in-house* frente a 3PL para un negocio estacional, decide la estrategia óptima y redacta 5 SLA contractuales clave. |
| **4. Descanso activo** | 15 min | Pausa programada; atiende consultas individuales sobre almacenes reales del alumnado. | Descansa e intercambia referencias de operadores y herramientas logísticas. |
| **5. Exposición breve / Microlearning 2** | 30 min | Desarrolla gestión de horas de corte, integración multitransportista, seguimiento proactivo, logística inversa (clasificación A/B/C y *Dock-to-Stock*) y preparación para picos de demanda. | Diseña en su ficha el flujo de notificaciones post-compra y el circuito de inspección rápida de devoluciones. |
| **6. Análisis de caso práctico** | 45 min | Presenta el caso de **VeloRuta Equipamiento S.L.** Entrega el plano esquemático de operativa y la tabla de datos tras la crisis del Black Friday. Guía el análisis grupal. | Diagnostica las causas del colapso de VeloRuta, rediseña el flujo de almacén/picking/embalaje y decide si conviene reorganizar *in-house*, externalizar a 3PL o adoptar un esquema híbrido. |
| **7. Discusión guiada y puesta en común** | 25 min | Modera la exposición de cada equipo (3 min), contrasta argumentos *in-house* vs. *3PL* y cierra con criterios ejecutivos para escalar operaciones en pymes. | Presenta su plan de transformación logística, defiende sus cálculos y debate con otros grupos los riesgos de transición. |
| **8. Síntesis, evaluación sumativa y cierre** | 20 min | Resume los 5 pilares del *efulfillment* rentable, aplica la evaluación sumativa breve, explica la Actividad 3 de transferencia y tiende el puente hacia el Tema 4 (*Marketplaces*). | Realiza la prueba final, completa la autoevaluación y selecciona los datos reales que recogerá en su empresa para su diagnóstico operativo. |
| **TOTAL** | **240 min** | | |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «El coste real de un error de *picking*»
- **Objetivo:** Dimensionar el impacto económico, operativo y de reputación que genera un único error de preparación de pedido en comercio electrónico.
- **Instrucciones para el alumnado:**
  1. En parejas (8 min), calculad el coste total real de un fallo aparentemente menor: un cliente compra un artículo de 45 € (margen bruto 20 €) y el almacén envía la talla equivocada. Listad y estimad cada coste derivado: segundo envío, recogida de retorno, horas de soporte, manipulación extra, reacondicionamiento y riesgo de pérdida de cliente.
  2. Compartid vuestra cifra en el tablero grupal (7 min) y comparadla con el margen de un pedido normal.
- **Materiales necesarios:** Pizarra física/digital y ficha breve de desglose de costes de no calidad.
- **Tiempo estimado:** 15 minutos (dentro de la fase de Apertura).
- **Rol del formador:** Mostrar cuántos pedidos «perfectos» necesita vender la pyme solo para compensar un único pedido mal enviado.
- **Producto o entregable esperado:** Desglose cuantificado del coste de no calidad de un error de *picking*.
- **Criterios de éxito:** Inclusión de costes directos (portes dobles, manipulación) e indirectos (atención al cliente, merma, pérdida de CLV).

### Actividad 2 (Aplicación): «Decisión *In-house* vs. *3PL* y matriz de SLA»
- **Objetivo:** Evaluar cuantitativa y cualitativamente la viabilidad de externalizar el *efulfillment* en una pyme con fuerte estacionalidad y definir los acuerdos de nivel de servicio mínimos.
- **Instrucciones para el alumnado:**
  1. En equipos de 3-4 personas, analizáis una pyme con 14.400 pedidos/año (800 pedidos/mes en 9 meses valle y 2.400 pedidos/mes en 3 meses pico; media de 2,2 artículos por pedido).
  2. Comparad en la hoja de cálculo facilitada:
     - **Escenario A (*In-house*):** alquiler y suministros (1.800 €/mes), 2 operarios fijos (4.200 €/mes totales coste empresa), refuerzos en 3 meses pico (3.600 €/mes), software + consumibles (0,85 €/pedido), envío propio medio (5,40 €/pedido) y coste estimado de errores/mermas (2 % pedidos × 12 €).
     - **Escenario B (*3PL*):** recepción entrada (0,12 €/unidad), almacenaje (450 €/mes), *pick & pack* (1,65 €/pedido + 0,35 € por artículo adicional), embalaje (0,55 €/pedido), tarifa de envío negociada del 3PL (4,35 €/pedido) y cuota integración software (150 €/mes).
  3. Calculad el coste total anual y coste medio por pedido de ambos escenarios, identificando el punto de sensibilidad ante un crecimiento del +40 % en ventas.
  4. Redactad una tabla con 5 SLA críticos (con meta medible y penalización/remedio) que exigiríais al 3PL antes de firmar.
- **Materiales necesarios:** Hoja de cálculo con plantilla *In-house vs. 3PL* y ficha de criterios SLA.
- **Tiempo estimado:** 45 minutos.
- **Rol del formador:** Revisar que no se omita el coste de artículos adicionales en el 3PL ni los costes fijos/errores en *in-house*, e introducir variables cualitativas (personalización del *unboxing*, control de stock compartido con tiendas físicas).
- **Producto o entregable esperado:** Cuadro comparativo financiero (escenario base y escenario +40 %) + tabla de 5 SLA contractuales.
- **Criterios de éxito:** Cálculos rigurosos, recomendación argumentada (no solo por el céntimo más barato, sino por riesgo y escalabilidad) y SLA concretos y auditables.

### Actividad 3 (Transferencia a la realidad laboral): «Mapa de flujo *efulfillment* y optimización de 3 palancas»
- **Objetivo:** Aplicar los conceptos de inventario, *picking/packing*, seguimiento y devoluciones a la operación real de la empresa del participante (o a un proyecto emprendedor propio).
- **Instrucciones para el alumnado:**
  1. Documentad el flujo actual de cumplimiento de pedido desde el pago hasta la entrega y devolución (si trabajáis en una empresa de servicios sin producto físico, aplicadlo a la «entrega del servicio / *onboarding*» o seleccionad una pyme con producto físico cercana).
  2. Medid o estimad 4 indicadores de partida: *Order Cycle Time*, tasa de error/incidencia, coste medio de envío + embalaje y plazo de gestión de devoluciones.
  3. Diseñad 3 intervenciones concretas (por ejemplo: reorganización ABC/*slotting*, rediseño de formatos de caja por peso volumétrico, implantación de escaneo o protocolo de retornos en 48 h) especificando inversión estimada, responsable y ahorro o mejora esperada en 90 días.
- **Materiales necesarios:** Plantilla de diagnóstico *efulfillment* en el campus virtual.
- **Tiempo estimado:** 10 minutos de planificación en clase + 60 minutos de trabajo asíncrono.
- **Rol del formador:** Revisar viabilidad práctica de las 3 palancas propuestas y aportar sugerencias técnicas adaptadas al sector del participante.
- **Producto o entregable esperado:** Informe aplicado de 2 páginas con flujo mejorado y ficha de 3 palancas de optimización.
- **Criterios de éxito:** Basado en datos o mediciones reales/razonadas, foco en cuellos de botella de alto retorno y coherencia con la capacidad de una pyme.

---

## 6. Caso práctico: «VeloRuta Equipamiento S.L.: el éxito comercial que colapsó el almacén»

### Contexto empresarial
**VeloRuta Equipamiento S.L.** es una pyme valenciana fundada por dos emprendedores que comercializa accesorios, cascos, luces, alforjas, ropa técnica y repuestos para ciclismo urbano y *gravel* (620 referencias activas). Vende principalmente a través de su tienda online D2C (75 % de las ventas) y abastece también a 18 tiendas ciclistas locales en modalidad B2B (25 %). Opera desde una nave alquilada de 450 m² en un polígono de Paterna con 3 operarios fijos de almacén y un responsable de operaciones.

### Situación o problema
Durante la última campaña de Black Friday y Navidad, las ventas crecieron un 115 % respecto al año anterior. Aunque el resultado comercial fue celebrado, el almacén colapsó: se acumularon 4 días de retraso en salidas, la precisión de envíos cayó drásticamente, las devoluciones de tallas de ropa en enero bloquearon los pasillos y el coste de transporte se disparó por usar cajas sobredimensionadas para accesorios pequeños. Además, la valoración media de la tienda cayó de 4,7 a 3,8 estrellas por retrasos y falta de comunicación sobre el estado del envío.

### Datos disponibles

| Indicador operativo | Periodo normal (ene-oct) | Periodo pico (nov-dic) | Referencia objetivo |
|---|---|---|---|
| Pedidos D2C mensuales | 1.350 pedidos/mes | 3.100 pedidos/mes | Capacidad escalable hasta 4.500 |
| Líneas (artículos) medias por pedido D2C | 2,4 artículos | 2,8 artículos | — |
| Distribución ABC del catálogo (620 SKU) | 85 SKU = 72 % de salidas | 85 SKU = 78 % de salidas | Reubicación *slotting* |
| Método actual de organización y *picking* | Estanterías por marca; albarán en papel; *picking* 1 a 1 sin lector de códigos | Igual + 3 eventuales sin formación estándar | *Batch picking* + escaneo |
| Precisión de inventario teórico vs. físico | 91 % | 84 % (provocando 6 % de pedidos cancelados por falta de stock) | ≥ 99 % |
| Precisión de pedido (*Order Accuracy*) | 96,8 % | 91,5 % (263 pedidos con error/mes en pico) | ≥ 99,3 % |
| Tiempo medio *Order Cycle Time* (pago a salida) | 22 horas | 94 horas | < 24 horas (cut-off 16:00 h) |
| Embalaje utilizado | 2 tamaños de caja grande para todo (hasta 50×40×30 cm) | Igual | 5 formatos optimizados |
| Porcentaje de envíos tarificados por peso volumétrico | 54 % | 61 % | < 15 % |
| Coste medio real de envío + embalaje por pedido | 6,35 € | 7,10 € | ≤ 4,90 € |
| Tiempo *Dock-to-Stock* de devoluciones (13 % en ropa) | 9 días | 24 días | ≤ 48 horas |
| Propuesta recibida de un operador 3PL cercano | Coste todo incluido estimado: 6,60 €/pedido (incl. almacenaje, *pick&pack*, embalaje estándar y porte) | Sin recargo de pico; SLA 99,5 % precisión y *cut-off* 17:00 h | Evaluar vs. mejora *in-house* |
| Coste actual estimado *in-house* (incl. nave, personal, errores y portes) | 8,15 €/pedido | 9,40 €/pedido (con refuerzos y errores) | Reducir a ≤ 6,80 € o externalizar |

### Preguntas de análisis
1. ¿Cuáles son las 4 causas operativas raíz que provocaron el colapso en campaña pico y el desplome de la valoración de clientes?
2. ¿Qué impacto financiero aproximado tiene la combinación de errores de *picking*, peso volumétrico excesivo y retraso de 24 días en devoluciones?
3. Si VeloRuta decide profesionalizar su almacén *in-house* (SGA ligero, *slotting* ABC, *batch picking*, nuevas cajas), ¿puede competir en coste y agilidad contra la oferta del 3PL a 6,60 €/pedido?
4. ¿Qué riesgos tendría externalizar el 100 % al 3PL teniendo también 18 clientes B2B y un *unboxing* cuidado de marca, y qué alternativa híbrida podría plantearse?

### Tarea a realizar
Como comité de operaciones de **VeloRuta Equipamiento S.L.**, diseñad un **Plan de Transformación de Efulfillment antes de la próxima campaña de verano/Black Friday** que incluya:
1. Decisión razonada entre tres opciones: (A) Transformación *in-house* completa, (B) Externalización total a 3PL o (C) Modelo híbrido (ej. B2B/devoluciones/referencias especiales *in-house* + D2C alta rotación en 3PL, o transición gradual).
2. Rediseño operativo inmediato (5 medidas prioritarias en inventario, *picking*, embalaje, *tracking* y logística inversa).
3. Cuadro de mando operativo de *efulfillment* con 6 KPI y alertas tempranas para picos de demanda.
4. Plan de preparación para la siguiente campaña pico (capacidad, *cut-off*, comunicación proactiva).

### Posibles soluciones o criterios de análisis
Un análisis bien fundamentado debe considerar:
- **Diagnóstico económico:** El coste actual *in-house* (8,15 € normal / 9,40 € pico) es muy superior a la oferta del 3PL (6,60 €), lo que en ~19.700 pedidos/año supone una brecha anual superior a 35.000-45.000 €, además de pérdida de ventas por roturas de stock (6 % en pico) y devoluciones congeladas 24 días.
- **Comparativa estratégica:**
  - *Opción 3PL (total o D2C):* Variabiliza costes, absorbe picos de 3.100-4.500 pedidos sin alquilar mayor nave, aprovecha tarifas de transporte agregadas y eleva la precisión al 99,5 %. Exige auditar la integración API con la tienda online, comprobar si el 3PL soporta pedidos B2B paletizados y pactar embalaje de marca + SLA de devoluciones en 48 h.
  - *Opción mejora in-house:* Viable solo si se implanta un SGA ligero con escaneo, *slotting* ABC (los 85 SKU tipo A junto a *packing*), *batch picking* y 5 formatos de embalaje para eliminar el peso volumétrico; aun así, el espacio de 450 m² y la rigidez laboral en picos seguirán limitando la escalabilidad más allá de 3.000 pedidos/mes.
  - *Opción híbrida:* Trasladar el grueso del D2C de alta rotación al 3PL y mantener temporalmente en sede (o con un módulo específico del 3PL) devoluciones técnicas/reparaciones y el B2B si exige preparación especial, evaluando consolidación total tras 6 meses.
- **Acciones rápidas obligatorias (en cualquier modelo):** Sincronización automática de inventario, recuento cíclico de referencias A, notificaciones proactivas de seguimiento con enlace de incidencia, clasificación A/B/C de devoluciones en ≤48 h y definición clara de *cut-off time* visible en web.

### Preguntas de reflexión final
- ¿Qué señal interna indica a una pyme que ha llegado el momento de dejar de «apañar» su almacén propio y dar el salto a un WMS o a un 3PL?
- ¿Cómo gestionaríais la comunicación interna con los 3 operarios actuales de VeloRuta si la empresa decide externalizar el almacén?

---

## 7. Evaluación

### Evaluación diagnóstica breve (Inicio de sesión — 5 min)
Cuestionario rápido de 4 preguntas:
1. ¿Qué es el *slotting* en un almacén de comercio electrónico?
2. ¿Cómo se factura un envío cuando el peso volumétrico supera al peso real?
3. ¿Qué mide exactamente el indicador *Dock-to-Stock*?
4. ¿En qué situación suele ser más rentable un operador 3PL que un almacén propio?

### Evaluación formativa durante la sesión
- Validación colectiva del cálculo del coste de no calidad en la Actividad 1.
- Revisión técnica de las hojas de cálculo *In-house vs. 3PL* y de la precisión de los SLA redactados en la Actividad 2.
- Retroalimentación directa en la defensa del caso **VeloRuta Equipamiento S.L.**

### Evaluación sumativa al final
- **Prueba práctica breve (10 min):** 5 preguntas aplicadas (cálculo de peso volumétrico, selección de método de *picking*, interpretación de KPI *Order Accuracy* / *Dock-to-Stock* y evaluación de una cláusula 3PL).
- **Entregable individual (Actividad 3):** Informe de diagnóstico *efulfillment* y 3 palancas de optimización aplicado a una empresa o proyecto real.

### Rúbrica de evaluación

| Criterio (Peso) | Insuficiente (1) | En desarrollo (2) | Adecuado (3) | Destacado (4) |
|---|---|---|---|---|
| **Dominio del flujo operativo (25 %)** | Describe etapas de forma desordenada o incompleta, omitiendo inventario o devoluciones. | Recoge las fases básicas pero sin vincularlas con precisión de inventario, *picking* ni tiempos de ciclo. | Mapea de forma clara todo el ciclo de *efulfillment* incluyendo inventario, *picking/packing*, expedición y logística inversa. | Integra flujo físico e informacional (tienda–ERP–WMS–transportista), detectando con precisión los cuellos de botella críticos. |
| **Rigor económico y dimensionamiento (25 %)** | No cuantifica costes ni distingue costes fijos de variables. | Estima algunos costes pero omite partidas clave (peso volumétrico, errores, picos o líneas extra). | Calcula correctamente el coste total por pedido y justifica financieramente las decisiones de optimización o 3PL. | Incluye análisis de sensibilidad ante picos de demanda y cuantifica ahorros esperados e impacto en margen y tesorería. |
| **Calidad de las palancas de mejora y SLA (25 %)** | Propone medidas genéricas («ser más rápidos», «comprar mejor software»). | Sugiere mejoras útiles pero sin metodología operativa ni metas medibles. | Define 3 palancas técnicas concretas (*slotting* ABC, formatos de caja, escaneo, clasificación A/B/C de retornos, SLA). | Prioriza medidas de alto retorno y rápida implantación, detallando procedimientos estándar, responsables y umbrales de alerta. |
| **Orientación a experiencia de cliente (25 %)** | Trata la logística de forma aislada sin considerar promesa de entrega ni seguimiento. | Menciona el seguimiento o el embalaje sin integrarlos en la experiencia postventa. | Conecta *cut-off time*, *tracking* proactivo, calidad del paquete y rapidez de reembolso con la satisfacción del cliente. | Convierte la operativa post-compra en ventaja competitiva medible (CSAT/NPS, recompra y reducción de tickets de soporte). |

### Actividad de autoevaluación o reflexión
El alumnado completa un semáforo operativo (Verde / Ámbar / Rojo) en 6 áreas de su negocio o proyecto: *Precisión de stock*, *Velocidad de picking*, *Eficiencia de embalaje*, *Seguimiento proactivo*, *Rapidez de devoluciones* y *Capacidad ante picos*, redactando la primera acción que ejecutará sobre su área en rojo.

---

## 8. Materiales y recursos

### Guion de diapositivas (estructura slide por slide)
1. **Portada:** Bloque 6 · Tema 3. Efulfillment. Del clic de compra a la entrega impecable.
2. **Puente con Temas 1 y 2:** Venta online + aprovisionamiento digital + cumplimiento físico.
3. **El mapa completo del *efulfillment*:** 7 etapas desde la recepción hasta la logística inversa.
4. **Precisión de inventario:** Stock teórico vs. físico, recuentos cíclicos y arquitectura ERP–WMS.
5. **Almacén inteligente para pymes:** Clasificación ABC y *slotting* de alta rotación.
6. **Métodos de *picking*:** Discreto, *batch*, zonas y oleadas (cuándo usar cada uno).
7. **Packing y economía del aire:** Peso volumétrico, protección, *unboxing* y embalaje sostenible.
8. **Expedición y *cut-off time*:** Integración multitransportista, etiquetado automático y gestión de promesas.
9. **Tracking proactivo y logística inversa:** Clasificación A/B/C de devoluciones y métrica *Dock-to-Stock*.
10. **El gran dilema: ¿*In-house*, *3PL* o híbrido?:** Costes ocultos, variabilización y desglose tarifario 3PL.
11. **Actividad 2 en pantalla:** Taller comparativo financiero *In-house vs. 3PL* y contrato de SLA.
12. **Cuadro de mando de *efulfillment*:** Los 6 KPI que todo mando intermedio debe monitorizar.
13. **Gestión de picos de demanda:** Preparación antes de Black Friday, rebajas y temporadas altas.
14. **Caso práctico: VeloRuta Equipamiento S.L.:** Datos, crisis de campaña y decisión estratégica.
15. **Síntesis, entregable de transferencia y enlace al Tema 4 (Marketplaces).**

### Ficha de trabajo
**Hoja de trabajo operativa de Efulfillment:** Contiene esquema del flujo de almacén para anotaciones, ejercicio guiado de clasificación ABC y peso volumétrico, checklist de 8 requisitos para evaluar un 3PL y matriz de trabajo del caso VeloRuta.

### Plantilla o herramienta práctica replicable
**Plantilla de Evaluación de Operadores 3PL y Acuerdo de Nivel de Servicio (SLA):**

| Área del SLA | Indicador concreto | Objetivo recomendado pyme | Frecuencia de medición | Acción correctiva / Penalización acordada |
|---|---|---|---|---|
| **Recepción (*Inbound*)** | Tiempo *Dock-to-Stock* de nueva mercancía | ≤ 24–48 h laborables desde descarga | Semanal | Priorización sin coste extra / descuento en cuota de recepción |
| **Inventario** | Precisión de stock físico vs. WMS | ≥ 99,5 % (tolerancia merma ≤ 0,3 %) | Recuento cíclico mensual | Asunción del coste de reposición por merma superior al umbral |
| **Preparación** | Cumplimiento de *cut-off time* diario | ≥ 98,5 % de pedidos antes de las 16:00 h saliendo el mismo día | Diaria / Mensual | Descuento sobre tarifa *pick & pack* del mes si baja del umbral |
| **Calidad** | Precisión de pedido (*Order Accuracy*) | ≥ 99,5 % sin errores de referencia ni cantidad | Mensual | El 3PL asume costes de reenvío, recogida y manipulación del error |
| **Devoluciones** | Procesamiento e inspección RMA (*Dock-to-Stock*) | ≤ 48 h desde recepción en almacén | Semanal | Plan de refuerzo dedicado sin recargo adicional |
| **Tecnología** | Disponibilidad API y sincronización de stock/tracking | ≥ 99,5 % *uptime* y actualización cada ≤ 15 min | Continua | Soporte prioritario en < 2 h en incidencias críticas |

### Lecturas o recursos recomendados
- Guías sectoriales y cuadernos técnicos de **UNO Logística** (Organización Empresarial de Logística y Transporte de España) sobre logística para comercio electrónico.
- Informes y recursos divulgativos del **Centro Español de Logística (CEL)** sobre gestión de almacenes, WMS y logística inversa.
- Documentación de buenas prácticas de embalaje y optimización volumétrica de operadores logísticos y asociaciones de envase (como **ITENE**).

### Vídeos, artículos o fuentes adicionales *(requieren validación previa)*
> **Nota para el formador:** Antes de proyectar o distribuir cualquiera de las siguientes fuentes, **verifica enlaces vigentes, datos actualizados y ausencia de sesgo comercial**:
- Informes anuales recientes sobre tendencias de logística e-commerce en España publicados por **UNO Logística / CEL / Packlink** *(verificar última edición y metodología antes de citar cifras)*.
- Vídeos demostrativos breves (3-5 min) sobre operativa de *batch picking* con lector PDA y mesas de *packing* en almacenes pyme *(verificar disponibilidad en YouTube/Vimeo)*.
- Normativa vigente en España y la UE sobre envases, residuos de envases y etiquetado ambiental en comercio electrónico *(verificar el Real Decreto de envases y residuos de envases aplicable antes de impartir)*.

### Glosario de términos clave

| Término | Definición operativa |
|---|---|
| **3PL (*Third-Party Logistics*)** | Proveedor externo que asume almacenaje, preparación, envío y gestión de devoluciones. |
| **Batch Picking** | Recogida simultánea de artículos correspondientes a varios pedidos agrupados en un único recorrido de almacén. |
| **Clasificación ABC** | Segmentación de referencias según su volumen de salidas o rotación (A: alta, B: media, C: baja). |
| **Cut-off Time** | Hora límite diaria para garantizar que un pedido se prepare y expida el mismo día. |
| **Dock-to-Stock** | Tiempo transcurrido desde la llegada física de mercancía o devolución hasta su disponibilidad en stock vendible. |
| **Dropshipping** | Modelo sin stock propio donde el proveedor envía el pedido directamente al cliente final. |
| **Logística inversa** | Gestión física y administrativa del retorno, inspección, reacondicionamiento y reingreso de productos devueltos. |
| **Order Accuracy** | Porcentaje de pedidos expedidos sin errores de artículo, cantidad ni embalaje. |
| **Order Cycle Time** | Tiempo total desde que el cliente confirma el pedido hasta que sale del almacén (o llega al cliente). |
| **Peso volumétrico** | Peso tarificable calculado a partir de las dimensiones exteriores del paquete. |
| **Slotting** | Ubicación estratégica de productos en el almacén para minimizar distancias y tiempos de *picking*. |
| **WMS / SGA** | Sistema informático especializado en gestionar ubicaciones, movimientos, *picking* e inventario de un almacén. |

---

## 9. Adaptaciones para modalidad híbrida

### Sesión presencial
- Realizar un ejercicio kinestésico rápido de 5 minutos con 6 tarjetas de «ubicaciones» en el aula para demostrar visualmente cómo el *slotting* ABC acorta el recorrido del *picking*.
- Traer físicamente 2 cajas de distinto volumen para demostrar el cálculo real de peso volumétrico con una cinta métrica.

### Sesión online síncrona
- Compartir la hoja de cálculo interactiva *In-house vs. 3PL* (Actividad 2) en Google Sheets con pestañas por equipo para que el formador revise fórmulas en directo desde la sala principal.
- Utilizar un vídeo corto de 2 minutos (previamente validado) que muestre un almacén real operando con PDA y *batch picking* para sustituir la demostración física en aula.
- Dinamizar la defensa del caso **VeloRuta** con votación anónima final (*In-house*, *3PL* o *Híbrido*) antes y después del debate para medir cómo evolucionan los criterios del grupo.

### Sesión asíncrona
- Poner a disposición un microvídeo preparatorio (8 min) con la explicación básica de peso volumétrico y clasificación ABC para llegar a la sesión síncrona listos para aplicar.
- Publicar un foro técnico de intercambio donde el alumnado comparta (de forma anonimizada si prefiere) sus 3 palancas de mejora de la Actividad 3 y reciba una sugerencia de un compañero enfocada a reducir errores o costes de devolución.
- Activar un test autocorregible de 6 preguntas de cálculo y diagnóstico rápido en el LMS.

---

## 10. Conexión con el programa

- **Qué conocimientos previos refuerza:** Conecta la promesa comercial, los costes unitarios y la postventa del Tema 1 (*Comercio electrónico*) con el control de aprovisionamiento y recepción de mercancía del Tema 2 (*Eprocurement*).
- **Qué competencias desarrolla:** Gestión de operaciones logísticas digitales, análisis financiero de decisiones *make-or-buy* (propio vs. 3PL), optimización de procesos físicos-digitales y control de calidad mediante SLA.
- **Conexión con el tema anterior y posterior:**
  - *Tema anterior (Bloque 6, Tema 2 — Eprocurement):* La precisión del almacén y la ausencia de roturas de stock dependen directamente de un abastecimiento bien trazado y de recepciones digitales fiables.
  - *Tema posterior (Bloque 6, Tema 4 — Marketplaces):* Muchos marketplaces (como Amazon con FBA o Miravia/El Corte Inglés) imponen métricas estrictas de cumplimiento y ofrecen servicios integrados de *efulfillment*; dominar esta operativa es imprescindible antes de decidir cómo vender en marketplaces.
- **Evidencia de aprendizaje que dejará el alumnado:** (1) Modelo financiero comparativo *In-house vs. 3PL* y tabla de 5 SLA resueltos en equipo, y (2) Informe aplicado de diagnóstico *efulfillment* y 3 palancas de optimización a 90 días.

---

## Siguientes pasos para el formador

1. **Comprobar la plantilla de cálculo de la Actividad 2:** Revisar todas las fórmulas del Excel/Google Sheets *In-house vs. 3PL* (incluyendo líneas extra por pedido y el escenario de crecimiento +40 %) antes de compartirla.
2. **Validar normativa de envases y embalajes:** Comprobar las obligaciones vigentes sobre residuos de envases, ecoetiquetado y responsabilidad ampliada del productor en España/UE antes de mencionar requisitos ambientales.
3. **Preparar ejemplos adaptados a servicios o B2B:** Si hay participantes sin almacén físico, ofrecerles un set de datos breve de una pyme de distribución o adaptar la Actividad 3 al cumplimiento de pedidos físicos de un proyecto elegido.
4. **Recoger ejemplos reales de tarifas de transporte:** Tener a mano un ejemplo orientativo de cómo calcula un transportista el factor de conversión volumétrico (por ejemplo, 167 kg/m³ o 200 kg/m³ según servicio, indicando siempre que varía por contrato y operador).
5. **Anticipar el Tema 4 (*Marketplaces*):** Invitar al alumnado a revisar antes de la próxima sesión si los productos de su sector se venden en Amazon, Etsy, Leroy Merlin, PcComponentes o marketplaces B2B, observando quién gana la *Buy Box* y quién gestiona el envío.
