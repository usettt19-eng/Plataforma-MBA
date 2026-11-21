# Gestión de compras y aprovisionamiento

## 1. Ficha del tema

| Campo | Detalle |
| --- | --- |
| **Título del tema** | Gestión de compras y aprovisionamiento |
| **Bloque y posición dentro del programa** | Bloque 8: Cadena de suministro — Tema 3 de 8 |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Mandos intermedios y emprendedores |
| **Nivel de dificultad** | Intermedio |
| **Prerrequisitos** | Haber completado los Temas 1 y 2 del Bloque 8 (Supply chain y Gestión de compras) y manejar operaciones básicas en hojas de cálculo. |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado será capaz de planificar las necesidades de aprovisionamiento de una pyme mediante segmentación ABC-XYZ, cálculo de niveles óptimos de stock, modelos de reposición y procedimientos de homologación coordinados con producción o ventas. |

---

## 2. Objetivos de aprendizaje

1. **Diferenciar** las funciones estratégicas de compras frente a la ejecución operativa del aprovisionamiento y su relación con la planificación de necesidades (*MRP*). *(Nivel de Bloom: Comprender)*
2. **Clasificar** un catálogo de referencias aplicando una matriz **ABC-XYZ** para asignar políticas de inventario diferenciadas según valor económico y variabilidad de la demanda. *(Nivel de Bloom: Analizar)*
3. **Calcular** parámetros operativos de reposición —punto de pedido (*ROP*), stock de seguridad, lote económico (*EOQ*) y cobertura— utilizando datos reales de demanda y *lead time*. *(Nivel de Bloom: Aplicar)*
4. **Evaluar** el grado de cumplimiento técnico y operativo de un proveedor diseñando un procedimiento de homologación y seguimiento coordinado con producción. *(Nivel de Bloom: Evaluar)*
5. **Diseñar** un plan de aprovisionamiento y reposición para una pyme que equilibre nivel de servicio, capital inmovilizado y prevención de obsolescencia. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Del contrato a la reposición: planificación de necesidades y *MRP*

**Explicación breve y clara**
Mientras **compras** define *a quién, bajo qué condiciones y a qué precio* adquirimos (Tema 2), el **aprovisionamiento** garantiza *qué cantidad exacta, en qué momento y en qué punto de entrega* llega el material para que ni producción ni el canal comercial se detengan, sin inflar innecesariamente el inventario. En entornos con fabricación, montaje o *kitting*, la planificación se articula mediante el **MRP (*Material Requirements Planning*)**, que traduce el plan maestro de producción o ventas en necesidades netas de componentes a partir de la lista de materiales (*BOM*) y el stock disponible.

**Conceptos clave**
- Diferencia entre demanda independiente (producto terminado vendido al cliente) y demanda dependiente (materias primas, envases y componentes derivados de un producto final).
- Lista de materiales (*BOM*, *Bill of Materials*).
- Plan Maestro de Producción (*MPS*) y explosión de necesidades (*MRP*).
- Stock físico, stock reservado/comprometido, stock en tránsito y stock disponible neto.

**Definiciones necesarias**
- **Necesidad neta de aprovisionamiento:** Cantidad real que debe pedirse a proveedor tras restar a la necesidad bruta el stock disponible no comprometido y los pedidos ya en curso, y sumar el stock de seguridad objetivo.
- **Lista de materiales (*BOM*):** Estructura jerarquizada que detalla todos los componentes, subconjuntos, envases y cantidades exactas necesarias para fabricar o preparar una unidad de producto terminado.

**Ejemplo práctico realista**
Una pyme que ensambla kits de café de especialidad (cafetera italiana + 2 paquetes de café molido + caja regalo) vende 500 kits al mes. Aunque el sistema indica 1.200 paquetes de café en almacén, 400 están reservados para pedidos B2B ya confirmados. Si aprovisionamiento solo mira el stock físico sin descontar compromisos ni revisar la *BOM* (2 paquetes por kit), se queda sin café a mitad de mes.

**Errores frecuentes**
- Lanzar pedidos basándose en el stock físico del almacén sin descontar pedidos pendientes de servir ni sumar compras ya en tránsito.
- Mantener listas de materiales (*BOM*) desactualizadas tras cambiar un proveedor de envases o una receta, provocando faltas de etiquetas o tapones.
- Utilizar intuición o "reglas de pulgar" iguales para todo el catálogo en lugar de vincular compras al calendario real de producción o campañas.

**Preguntas que el alumnado debería poder responder**
- ¿Cuál es la diferencia práctica entre demanda independiente y demanda dependiente?
- ¿Qué tres fuentes de datos deben estar impecables para que un cálculo *MRP* sea fiable?
- ¿Por qué el stock físico rara vez coincide con el stock realmente disponible para vender o fabricar?

---

### 3.2. Segmentación ABC-XYZ y política diferenciada de inventarios

**Explicación breve y clara**
No todas las referencias merecen el mismo capital inmovilizado ni el mismo esfuerzo de control. La **clasificación ABC** (basada en el principio de Pareto por consumo anual en euros) se combina con la **clasificación XYZ** (basada en la variabilidad o coeficiente de variación de la demanda) para crear una matriz de 9 celdas. Así, una referencia **AX** (alto valor y demanda muy estable) se gestiona con reposición frecuente *just-in-time* y bajo stock de seguridad, mientras que una **CZ** (bajo valor y demanda errática) puede comprarse solo bajo pedido o con lotes sencillos.

**Conceptos clave**
- Clasificación **ABC** por consumo valorizado (A: ~70-80 % del valor con ~10-20 % de SKU; B: ~15-20 %; C: ~5-10 %).
- Clasificación **XYZ** por previsibilidad de demanda (X: estable; Y: estacional/tendencia; Z: irregular/esporádica).
- Costes de inventario: coste de posesión/mantenimiento (*holding cost*: capital, espacio, seguros, mermas, obsolescencia) frente a coste de emisión de pedido y coste de rotura de stock.
- Gestión de referencias perecederas (FEFO) y stock obsoleto (*dead stock*).

**Definiciones necesarias**
- **Matriz ABC-XYZ:** Herramienta de segmentación de inventarios que cruza la importancia económica de cada referencia (ABC) con la estabilidad de su demanda (XYZ) para fijar niveles de servicio y métodos de reposición específicos.
- **Coste de posesión de inventario:** Porcentaje anual que cuesta mantener stock en almacén (capital inmovilizado, alquiler, manipulación, seguro, deterioro y obsolescencia; habitualmente entre el 15 % y el 30 % del valor del inventario según sector, *cifra orientativa a validar con la contabilidad interna de cada pyme*).

**Ejemplo práctico realista**
Una tienda online de recambios para patinetes eléctricos analiza sus 600 referencias: 45 referencias (baterías, neumáticos estándar y controladoras) generan el 76 % de la facturación y rotan cada semana (clase AX/AY), mientras que 220 piezas estéticas de modelos antiguos apenas se venden dos veces al año (clase CZ) y ocupan el 35 % del almacén. Al pasar las CZ a compra contra pedido y reforzar el seguimiento semanal de las AX, libera 42.000 € de caja en 4 meses.

**Errores frecuentes**
- Clasificar ABC únicamente por unidades vendidas en lugar de por consumo valorizado (unidades × coste) o margen aportado.
- Fijar un objetivo único de nivel de servicio del 99 % para todo el catálogo, disparando el stock de seguridad en referencias de bajísima rotación.
- No revisar periódicamente la clasificación ABC-XYZ cuando cambian las temporadas o el ciclo de vida del producto.

**Preguntas que el alumnado debería poder responder**
- ¿Qué estrategia de stock aplicarías a un artículo **AX** frente a uno **AZ** y uno **CZ**?
- ¿Qué partidas componen el coste real de mantener inventario en una pyme?
- ¿Cómo impacta el stock obsoleto en la tesorería y en la capacidad operativa del almacén?

---

### 3.3. Modelos de reposición: punto de pedido, stock de seguridad y lote óptimo

**Explicación breve y clara**
Para evitar tanto las roturas de stock como la sobrecompra, el aprovisionamiento utiliza modelos cuantitativos sencillos pero rigurosos. Los dos grandes sistemas son la **revisión continua** (se pide una cantidad fija cuando el stock baja del punto de pedido, *ROP*) y la **revisión periódica** (se revisa cada intervalo fijo —por ejemplo, cada lunes— y se pide hasta completar un nivel objetivo máximo). Ambos descansan en un cálculo realista del **stock de seguridad**, que protege contra la variabilidad tanto de la demanda como del plazo de entrega del proveedor.

**Conceptos clave**
- **Punto de pedido (*ROP*):** `ROP = (Demanda media diaria × Lead time medio en días) + Stock de seguridad`.
- **Stock de seguridad (*SS*):** Colchón frente a picos de demanda y retrasos de proveedor. Fórmula práctica sencilla para pymes: `SS = Z × σ_d × √LT` (cuando el *lead time* es estable) o versión ampliada con variabilidad de *lead time*, o método de cobertura máxima simplificada en pymes sin histórico estadístico robusto.
- **Lote económico de compra (*EOQ*):** `EOQ = √((2 × D × S) / H)`, donde *D* es demanda anual, *S* coste de emitir/gestionar pedido y *H* coste anual de mantener una unidad.
- **Revisión periódica (*Min-Max* / *Order-up-to*)** y consolidación de pedidos por proveedor para optimizar portes y MOQ.

**Definiciones necesarias**
- **Punto de pedido (*Re-Order Point*, ROP):** Nivel de stock disponible (físico + en tránsito - comprometido) que dispara automáticamente la emisión de una nueva orden de compra para recibir la reposición antes de agotar existencias.
- **Stock de seguridad:** Inventario adicional mantenido por encima de la demanda esperada durante el plazo de reposición para absorber incertidumbres de demanda o retrasos del proveedor según el nivel de servicio deseado.

**Ejemplo práctico realista**
Una pyme vende 20 unidades diarias de un cargador rápido (demanda estable, desviación típica diaria = 4 uds.) con un proveedor que tarda 10 días en entregar. Si busca un nivel de servicio del 95 % (`Z = 1,65`), calcula:
- Demanda durante *lead time* = `20 × 10 = 200 uds.`
- Stock de seguridad = `1,65 × 4 × √10 ≈ 21 uds.`
- Punto de pedido (`ROP`) = `200 + 21 = 221 uds.`
Cuando el stock disponible baje de 221 unidades, el ERP avisa automáticamente al comprador.

**Errores frecuentes**
- Calcular el *ROP* usando el plazo prometido en el catálogo del proveedor (por ejemplo, 7 días) en lugar del plazo real histórico medido (14 días).
- Aplicar el *EOQ* rígidamente ignorando restricciones reales como caducidades, lote mínimo del proveedor (*MOQ*), capacidad del almacén o paletización completa.
- Olvidar sumar el stock ya pedido en tránsito al comprobar si se ha cruzado el punto de pedido, generando pedidos duplicados.

**Preguntas que el alumnado debería poder responder**
- ¿Cuándo conviene usar revisión continua (*ROP*) y cuándo revisión periódica por calendario?
- ¿Qué dos factores disparan la necesidad de stock de seguridad y cuál suele ser más fácil reducir gestionando al proveedor?
- ¿Por qué el *EOQ* debe ajustarse a restricciones operativas como caducidad o palets completos?

---

### 3.4. Homologación de proveedores y coordinación con producción

**Explicación breve y clara**
Aprovisionar bien exige que el proveedor no solo sea competitivo en papel, sino **técnicamente apto y fiable en planta**. La **homologación de proveedores** valida de forma estructurada documentación legal, capacidad productiva, calidad de muestras y pruebas piloto antes de permitir pedidos recurrentes. Una vez homologado, el aprovisionamiento debe trabajar sincronizado con producción (y comercial) mediante ventanas congeladas de planificación, alertas tempranas de desviaciones y gestión de calidad en recepción.

**Conceptos clave**
- Proceso de homologación en fases: preselección documental -> auditoría/cuestionario técnico -> validación de muestras/lote piloto -> alta en ERP como proveedor homologado -> reevaluación periódica.
- Coordinación aprovisionamiento-producción: horizonte congelado (*frozen zone*), gestión de cambios de ingeniería o receta, secuenciación de órdenes y prevención de paradas de línea.
- Colaboración operativa avanzada: entregas *milk-run*, stock en consigna (*consignment*) e inventario gestionado por el proveedor (*VMI*).

**Definiciones necesarias**
- **Homologación de proveedores:** Procedimiento formal que verifica que un proveedor cumple los requisitos técnicos, sanitarios/regulatorios, de calidad, capacidad y solvencia necesarios para suministrar de manera estable un artículo específico.
- **Horizonte congelado (*frozen zone*):** Periodo más cercano del plan de producción o compras (por ejemplo, las próximas 2 semanas) en el que no se admiten cambios comerciales salvo autorización excepcional, para evitar roturas y sobrecostes de urgencia.

**Ejemplo práctico realista**
Un obrador industrial de panadería sin gluten incorpora un nuevo proveedor de harina de arroz más económico sin realizar prueba piloto en horno. Al llegar los primeros 2.000 kg, la granulometría distinta altera la fermentación y obliga a desechar 1.400 barras. Tras el incidente, implanta un protocolo de homologación en 3 pasos (ficha técnica + certificado de alérgenos + lote de prueba de 50 kg validado por Calidad y Producción) antes de dar de alta cualquier materia prima en el ERP.

**Errores frecuentes**
- Dar de alta proveedores de forma libre por cualquier departamento sin filtro técnico ni documental ("compras fantasma" o *maverick buying*).
- Cambiar el plan de producción cada dos días a petición comercial sin respetar los *lead times* de aprovisionamiento.
- No informar a producción sobre retrasos detectados en proveedores hasta el mismo día en que debía fabricarse el lote.

**Preguntas que el alumnado debería poder responder**
- ¿Qué riesgos evita un proceso formal de homologación frente a comprar directamente tras recibir un buen presupuesto?
- ¿Cómo ayuda definir un horizonte congelado a coordinar ventas, producción y aprovisionamiento?
- ¿Qué requisitos técnicos y operativos incluirías en una ficha de homologación para tu sector?

---

## 4. Metodología didáctica

Secuencia de 4 horas (240 minutos) combinando modelización cuantitativa práctica en hoja de cálculo, diagnóstico de políticas de stock y diseño de protocolos de coordinación.

| Fase | Tiempo | Duración | Qué hace el formador | Qué hace el alumnado |
| --- | --- | --- | --- | --- |
| **1. Apertura y activación** | 00:00 – 00:25 | 25 min | Conecta con el Tema 2, realiza diagnóstico inicial breve y guía la Actividad 1 (*El dilema del almacén lleno y sin stock*). | Responde al sondeo inicial y analiza en parejas por qué una pyme puede tener exceso de inventario y roturas de stock el mismo día. |
| **2. Exposición breve / microlearning (Bloque A)** | 00:25 – 00:55 | 30 min | Expone apartados 3.1 y 3.2: compras vs. aprovisionamiento, explosión *MRP* básica, matriz ABC-XYZ y coste real de posesión. | Sigue un ejemplo guiado de *MRP* simplificado y practica la lectura de una matriz ABC-XYZ con casos de pymes. |
| **3. Actividad práctica en equipo (Cálculo de reposición)** | 00:55 – 01:40 | 45 min | Explicación breve de fórmulas (apartado 3.3, 15 min) + facilitación de la Actividad 2 (*Calculadora de ROP, Stock de Seguridad y EOQ*, 30 min). | En grupos de 3 personas, calcula *ROP*, stock de seguridad, *EOQ* y cobertura para 4 referencias distintas y detecta restricciones de caducidad/MOQ. |
| **4. Exposición breve / microlearning (Bloque B)** | 01:40 – 02:05 | 25 min | Desarrolla el apartado 3.4: protocolo de homologación de proveedores, coordinación con producción, horizonte congelado y modelos colaborativos (*VMI*, consigna). | Identifica fallos de homologación en dos microhistorias reales y debate cómo evitar compras no autorizadas (*maverick buying*). |
| **5. Análisis de caso práctico** | 02:05 – 02:55 | 50 min | Presenta el caso *BioCosmética Atlántica S.L.* con su tabla de referencias y guía el análisis cuantitativo y organizativo de los equipos. | Segmenta las familias en ABC-XYZ, calcula parámetros de reposición, resuelve el problema de caducidades y diseña el protocolo de homologación y coordinación. |
| **6. Discusión guiada y transferencia** | 02:55 – 03:35 | 40 min | Modera la defensa de resultados del caso y conduce la Actividad 3 (*Política de aprovisionamiento y checklist de homologación para mi empresa*). | Compara sus cálculos con los de otros grupos y diseña la política de reposición y el flujo de homologación aplicable a su propio negocio. |
| **7. Síntesis, evaluación y cierre** | 03:35 – 04:00 | 25 min | Sintetiza los puntos críticos, aplica prueba práctica sumativa (10 min), facilita la autoevaluación y enlaza con el Tema 4 (Gestión de almacenes). | Resuelve el mini-test cuantitativo final, completa su hoja de reflexión y plantea dudas de implantación en su ERP/hoja de cálculo. |

**Total acumulado:** 25 + 30 + 45 + 25 + 50 + 40 + 25 = **240 minutos (4 horas exactas)**.

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Almacén lleno, clientes esperando

- **Objetivo:** Hacer visible la paradoja del inventario mal estructurado (sobrestock en referencias lentas y roturas en referencias estrella) y motivar el uso de métricas de reposición.
- **Instrucciones para el alumnado:**
  1. Se presenta un escenario relámpago: una pyme comercial tiene 320.000 € inmovilizados en almacén (un 40 % más que hace dos años) y, sin embargo, cancela el 11 % de los pedidos semanales por falta de stock.
  2. En parejas (8 min), enumerad al menos 5 causas operativas distintas que pueden explicar simultáneamente ambos fenómenos.
  3. Clasificad cada causa según dependa de: previsión, cálculo de pedidos, proveedor o falta de comunicación interna (4 min).
- **Materiales necesarios:** Pizarra física o tablero digital dividido en cuatro columnas.
- **Tiempo estimado:** 15 minutos (dentro de la fase de Apertura).
- **Rol del formador:** Recoger aportaciones y conectar cada causa con la herramienta exacta que se verá en la sesión (ABC-XYZ, *ROP*, *MRP* o homologación).
- **Producto o entregable esperado:** Mapa colectivo de causas de desequilibrio de inventarios.
- **Criterios de éxito:** El grupo diferencia causas ligadas a la demanda de causas ligadas al proveedor y al dato interno de stock.

### Actividad 2 (Aplicación): Laboratorio de parámetros de reposición (*ROP*, *SS* y *EOQ*)

- **Objetivo:** Calcular e interpretar correctamente parámetros cuantitativos de reposición ajustándolos a restricciones reales de pyme (MOQ, caducidad y variabilidad).
- **Instrucciones para el alumnado:**
  1. En equipos de 3 personas, abrid la hoja de cálculo facilitada con 4 referencias tipo: (1) Artículo AX estable, (2) Artículo AY estacional, (3) Artículo BX con proveedor poco fiable, (4) Artículo CZ de caducidad corta (60 días).
  2. Calculad para cada referencia: punto de pedido (*ROP*), stock de seguridad para el nivel de servicio indicado y *EOQ* teórico.
  3. Contrastad el *EOQ* teórico frente a las restricciones prácticas (caducidad, lote mínimo del proveedor y espacio) y proponed la cantidad final recomendada de pedido.
- **Materiales necesarios:** Hoja de cálculo (Excel/Google Sheets) o calculadora + ficha de datos de las 4 referencias.
- **Tiempo estimado:** 30 minutos (integrados en la fase 3).
- **Rol del formador:** Verificar que el alumnado respeta unidades coherentes (días con días, años con años) y resaltar por qué la fórmula matemática es un punto de partida que requiere criterio operativo.
- **Producto o entregable esperado:** Tabla numérica completada con política de pedido final justificada para cada referencia.
- **Criterios de éxito:** Cálculos sin errores de unidades y ajuste sensato del lote en el artículo perecedero (evitando pedir más stock del que se consume antes de caducar).

### Actividad 3 (Transferencia a la realidad laboral): Mi política ABC-XYZ y checklist de homologación

- **Objetivo:** Transferir los criterios de segmentación, reposición y homologación al entorno laboral real de cada alumno o proyecto emprendedor.
- **Instrucciones para el alumnado:**
  1. Selecciona 6 referencias (productos, materias primas o servicios recurrentes críticos) de tu empresa actual.
  2. Clasifícalas de forma estimada en la matriz ABC-XYZ y define para cada una el método de reposición más adecuado (revisión continua, revisión periódica, contra pedido o *VMI*).
  3. Completa un **Checklist de Homologación de Proveedores** adaptado a tu sector con al menos 6 requisitos obligatorios antes de cursar el primer pedido recurrente, indicando qué área valida cada punto.
- **Materiales necesarios:** Plantilla de Política de Aprovisionamiento y Homologación (sección 8).
- **Tiempo estimado:** 25 minutos (dentro de la fase 6).
- **Rol del formador:** Revisar ejemplos voluntarios y orientar sobre cómo implantar una versión sencilla en Excel o ERP básico sin burocracia excesiva.
- **Producto o entregable esperado:** Cuadro de política de inventarios propio + checklist de homologación listo para usar.
- **Criterios de éxito:** Coherencia entre clasificación ABC-XYZ y método de reposición, y reparto realista de responsabilidades en la homologación.

---

## 6. Caso práctico

### Contexto empresarial
**BioCosmética Atlántica S.L.** es un laboratorio pyme ubicado en Vigo (28 empleados, 4,1 millones de euros de facturación anual) que formula, envasa y comercializa cosmética natural certificada a través de farmacias especializadas (60 %) y e-commerce propio (40 %). Gestiona 140 referencias de materias primas y envases para producir 35 productos finales.

### Situación o problema
La directora financiera ha dado la voz de alarma: el inventario total ha alcanzado 690.000 € (equivalente a 125 días de consumo), pero el laboratorio sufrió **14 paradas parciales de envasado** el último semestre por falta de principios activos o dosificadores. En paralelo, el mes pasado tuvieron que destruir 28.000 € en extractos vegetales caducados y acumulan 45.000 € en frascos serigrafiados de una línea cuya etiqueta cambió de diseño sin agotar stock previo.
Además, ante una rotura urgente de un emulsionante natural, compras dio de alta en 48 horas a un nuevo distribuidor sin prueba de laboratorio; el lote generó separación de fases en 3.200 cremas que tuvieron que retirarse antes de salir al mercado. Aprovisionamiento trabaja con hojas de cálculo aisladas y no recibe el plan de fabricación semanal hasta el mismo lunes por la mañana.

### Datos disponibles

A continuación se muestran 4 insumos representativos del laboratorio (sobre 250 días laborables/año; nivel de servicio objetivo: A = 98 % [`Z = 2,05`], B = 95 % [`Z = 1,65`], C = 90 % [`Z = 1,28`]):

| Referencia | Categoría | Consumo anual (€) | Demanda media diaria | Desv. típica diaria (σ) | *Lead time* real (días) | MOQ proveedor | Vida útil / Caducidad | Situación actual |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Extracto de alga orgánica (kg)** | Principio activo clave | 185.000 € (Alto) | 8 kg/día | 1,2 kg (Estable) | 15 días | 50 kg | 90 días | Se compran lotes de 400 kg por "descuento", provocando caducidades. |
| **Frasco airless 50 ml (uds.)** | Envase principal | 140.000 € (Alto) | 400 uds./día | 140 uds. (Estacional) | 30 días | 10.000 uds. | Sin caducidad | Frecuentes roturas en picos de primavera y Navidad. |
| **Aceite esencial exótico (L)** | Activo edición limitada | 38.000 € (Medio) | 2 L/día | 1,3 L (Irregular) | 25 días | 25 L | 180 días | Pedidos reactivos solo cuando producción avisa que queda 1 bidón. |
| **Estuche cartón línea secundaria (uds.)** | Embalaje secundario | 11.500 € (Bajo) | 120 uds./día | 20 uds. (Estable) | 10 días | 3.000 uds. | Sin caducidad | Cambio frecuente de diseño sin avisar a compras; sobrestock obsoleto. |

Datos adicionales:
- Coste estimado de emitir y recepcionar un pedido administrativo/calidad: `S = 90 €`.
- Coste anual de posesión estimado del laboratorio: `22 %` del valor medio del stock (en el extracto de alga a 92,50 €/kg, `H ≈ 20,35 €/kg·año`).

### Preguntas de análisis
1. Clasifica las 4 referencias en la **matriz ABC-XYZ** y explica qué política de inventario corresponde a cada una.
2. Calcula el **stock de seguridad** y el **punto de pedido (*ROP*)** para el *Extracto de alga orgánica* y para el *Frasco airless 50 ml*.
3. En el *Extracto de alga orgánica*, si aplicas el *EOQ* teórico (`D = 2.000 kg/año`, `S = 90 €`, `H = 20,35 €`), ¿cuántos kilos resulta y cuántos días de consumo cubre? ¿Respeta la caducidad de 90 días? ¿Por qué comprar 400 kg era un error grave?
4. ¿Qué protocolo de **homologación** y qué mecanismo de **coordinación producción-marketing-aprovisionamiento** evitarían la retirada de cremas y la obsolescencia de estuches?

### Tarea a realizar
En equipos de 3-4 personas, elaborad un **Plan de Choque de Aprovisionamiento** para BioCosmética Atlántica S.L. que incluya:
1. Tabla con clasificación ABC-XYZ, *SS*, *ROP* y política de lote para las 4 referencias.
2. Reglas de gobierno para cambios de diseño/etiquetado y caducidades (FEFO + alertas tempranas).
3. Flujo de homologación en 4 etapas con veto de Calidad/Producción antes del alta en ERP.
4. Calendario semanal de coordinación *MRP* / Producción con horizonte congelado.

### Posibles soluciones o criterios de análisis
- **Clasificación ABC-XYZ:**
  - *Extracto de alga:* **AX** (alto valor, demanda estable -> pedidos frecuentes y control estricto FEFO).
  - *Frasco airless 50 ml:* **AY** (alto valor, estacional -> previsión por campaña, *ROP* ajustado estacionalmente o stock regulador pactado con proveedor).
  - *Aceite esencial exótico:* **BZ** (valor medio, demanda errática -> planificación vinculada a órdenes cerradas de edición limitada, no por reposición automática ciega).
  - *Estuche cartón secundario:* **CX** (bajo valor, estable -> reposición periódica sencilla, pero bloqueada a revisión de cambios de diseño de Marketing).
- **Cálculos orientativos clave:**
  - *Extracto de alga (A -> Z=2,05):* `SS = 2,05 × 1,2 × √15 ≈ 9,5 ≈ 10 kg`. Demanda en *LT* = `8 × 15 = 120 kg`. `ROP = 120 + 10 = 130 kg`.
  - *EOQ Extracto de alga:* `√((2 × 2.000 × 90) / 20,35) = √17.690 ≈ 133 kg`. Equivale a `133 / 8 ≈ 16,6 días` de consumo (perfectamente seguro frente a 90 días de caducidad y superior al MOQ de 50 kg). Comprar 400 kg cubría 50 días laborables (más de 70 días naturales) más el tiempo en fábrica y almacén de producto terminado, provocando vencimientos sistemáticos.
  - *Frasco airless 50 ml (A -> Z=2,05):* `SS = 2,05 × 140 × √30 ≈ 1.572 uds.` Demanda en *LT* = `400 × 30 = 12.000 uds.` `ROP = 13.572 uds.` (revisable al alza antes de primavera/Navidad; conveniente negociar entregas parciales del MOQ de 10.000 uds. o segundo proveedor).
- **Gobierno y coordinación:**
  - Bloqueo en ERP de alta de proveedores sin 3 validaciones (Documentación/Certificado ecológico + Ficha técnica/Calidad + Lote piloto aprobado por Producción). *(Nota: en cosmética natural/certificada debe verificarse la normativa europea de productos cosméticos y requisitos de certificación aplicables antes de fijar criterios oficiales).*
  - Regla *Run-out* con Marketing: ningún cambio gráfico de envase se lanza hasta planificar el agotamiento del stock existente o asumir formalmente el coste en presupuesto de marketing.
  - Reunión semanal de planificación (jueves) fijando un **horizonte congelado de producción de 2 semanas** y visibilidad rodante a 8 semanas para aprovisionamiento.

### Preguntas de reflexión final
- ¿Qué descuento por volumen tendría que ofrecer el proveedor de extracto de alga para compensar el riesgo real de caducidad y capital inmovilizado?
- ¿Cómo implantarías estas mejoras en una pyme de 28 personas sin añadir carga burocrática que ralentice las operaciones?

---

## 7. Evaluación

### Evaluación diagnóstica breve (inicio de sesión — 5 minutos)
1. ¿Qué diferencia principal existe entre *gestión de compras* y *gestión de aprovisionamiento*? (Opción múltiple).
2. En tu empresa, ¿cómo se decide hoy cuándo y cuánto volver a pedir de un producto? (Cuando se ve vacío el estante / Por calendario fijo / Con punto de pedido en ERP / Según previsión).
3. ¿Qué indicador te preocupa más ahora mismo en tu negocio: roturas de stock, exceso de inventario o caducidad/obsolescencia?

### Evaluación formativa durante la sesión
- Comprobación en aula de los cálculos de la Actividad 2 (*ROP*, *SS*, *EOQ*), verificando consistencia de unidades y sentido operativo.
- Retroalimentación grupal durante la exposición del caso *BioCosmética Atlántica S.L.* poniendo foco en la conexión entre datos cuantitativos y coordinación organizativa.

### Evaluación sumativa al final de la sesión
1. **Prueba práctica individual (10 min):** 4 ejercicios breves (clasificar 3 SKU en ABC-XYZ, calcular un *ROP* con datos dados, detectar un error de cálculo de necesidad neta *MRP* y seleccionar 3 pasos obligatorios de homologación).
2. **Entregable de transferencia (Actividad 3):** Política ABC-XYZ y checklist de homologación propios evaluados con la rúbrica.

### Rúbrica de evaluación

| Criterio | Insuficiente (1) | En desarrollo (2) | Adecuado (3) | Destacado (4) |
| --- | --- | --- | --- | --- |
| **Segmentación ABC-XYZ y política de stock** | Aplica la misma política a todas las referencias o confunde los criterios ABC y XYZ. | Clasifica parcialmente bien pero las políticas sugeridas contradicen el cuadrante. | Clasifica adecuadamente las referencias y asigna políticas diferenciadas coherentes de stock y servicio. | Justifica la segmentación con valor y variabilidad, incorporando gestión de estacionalidad, caducidades (FEFO) y prevención de obsoletos. |
| **Cálculo de *ROP*, *SS*, *EOQ* y *MRP*** | Comete errores graves de fórmulas o mezcla unidades (días/meses/años). | Aplica fórmulas básicas con errores menores o ignora stock comprometido/en tránsito. | Calcula correctamente necesidades netas, *SS*, *ROP* y *EOQ* con unidades coherentes. | Calcula con precisión y ajusta los resultados teóricos a restricciones reales (MOQ, caducidad, paletización y capital circulante). |
| **Homologación de proveedores** | Propone una validación informal basada únicamente en precio o urgencia. | Incluye requisitos básicos pero sin fases claras ni validación técnica/calidad. | Diseña un procedimiento estructurado en fases con requisitos técnicos, documentales y prueba piloto. | Define un flujo completo de homologación con responsables, criterios de bloqueo en ERP y reevaluación periódica vinculada a calidad. |
| **Coordinación aprovisionamiento-producción/ventas** | Trata aprovisionamiento como función aislada sin mecanismos de comunicación. | Propone reuniones genéricas sin horizonte, datos ni responsables concretos. | Establece mecanismos claros de coordinación (calendario, alertas de cambios y *frozen zone*). | Integra *MRP*, horizonte congelado y reglas interdepartamentales (por ejemplo, gestión de cambios de diseño/campañas) adaptadas a una pyme. |

### Actividad de autoevaluación o reflexión
Autochequeo individual rápido (*Del cálculo a la acción*, 5 min):
- ¿Tengo hoy datos fiables de stock disponible, stock comprometido y *lead time* real de mis 10 referencias más importantes? (Sí / Parcial / No).
- ¿Qué referencia de mi empresa está generando hoy mayor sobrestock oculto y cuál sufre más roturas evitables?
- ¿Qué único paso daré en los próximos 15 días para profesionalizar nuestra reposición u homologación?

---

## 8. Materiales y recursos

### Guion de diapositivas (estructura slide por slide)

| Slide | Título | Contenido clave y recurso visual |
| --- | --- | --- |
| **1** | Portada: Compras y aprovisionamiento | Título, Bloque 8 (3/8), vínculo con Tema 2 y objetivos del día. |
| **2** | Compras vs. Aprovisionamiento | Tabla comparativa de foco, horizonte temporal, decisiones y métricas de cada rol. |
| **3** | Demanda independiente, *BOM* y *MRP* | Diagrama visual de explosión de una *BOM* y fórmula de necesidad neta de aprovisionamiento. |
| **4** | El coste real de tener stock (y de no tenerlo) | Balanza visual: costes de posesión (*holding cost*) vs. costes de rotura y urgencias. |
| **5** | Matriz ABC-XYZ en la práctica | Cuadrícula 3x3 con colores y política de reposición recomendada para cada celda clave. |
| **6** | Modelos de reposición: continua vs. periódica | Gráficas de dientes de sierra comparando sistema *ROP* y sistema *Min-Max* por calendario. |
| **7** | Fórmulas prácticas: *SS*, *ROP* y *EOQ* | Cuadro resumen limpio con variables, tabla de valores *Z* habituales (90 %, 95 %, 98 %, 99 %) y ejemplo resuelto. |
| **8** | Instrucciones Actividad 2 | Consigna del laboratorio en hoja de cálculo con las 4 referencias y sus restricciones. |
| **9** | Del teórico al real: MOQ, caducidad y FEFO | Ejemplos visuales de cómo corregir el *EOQ* ante lotes mínimos, envases y fechas de vencimiento. |
| **10** | Homologación de proveedores en 4 pasos | Flujograma con compuertas de aprobación (Documental -> Técnico -> Lote piloto -> Alta ERP). |
| **11** | Coordinación con producción y ventas | Esquema del horizonte congelado (*frozen zone*), gestión de cambios y colaboración *VMI*/consigna. |
| **12** | Caso práctico: BioCosmética Atlántica S.L. | Resumen de la problemática y tabla de datos de las 4 materias primas/envases. |
| **13** | Solución comentada y buenas prácticas | Cálculos clave del caso y errores típicos a evitar en pymes en crecimiento. |
| **14** | Síntesis y puente al Tema 4 | Resumen de las 5 reglas de oro del aprovisionamiento y transición a *Gestión de almacenes*. |

### Ficha de trabajo del alumnado
Documento de 2 páginas con:
- Chuleta visual de fórmulas (*Necesidad neta*, *SS*, *ROP*, *EOQ*, días de cobertura) y tabla de factor *Z*.
- Matriz ABC-XYZ en blanco para anotar políticas por cuadrante.
- Espacio de resolución paso a paso del caso *BioCosmética Atlántica S.L.*

### Plantilla o herramienta práctica replicable
**Plantilla: Matriz de Reposición y Checklist de Homologación para Pymes**

*Parte A — Política de reposición por referencia:*

| SKU / Artículo | Clase ABC-XYZ | Nivel servicio (%) | *Lead time* real (días) | *SS* | *ROP* | Lote pedido (ajustado MOQ/caducidad) | Método (Continuo / Periódico / Pedido) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| | | | | | | | |

*Parte B — Checklist rápido de homologación antes del alta en ERP:*
- [ ] Documentación legal, fiscal y solvencia verificada (Administración/Compras).
- [ ] Certificaciones sectoriales o de calidad obligatorias vigentes (Calidad).
- [ ] Ficha técnica y especificaciones firmadas conforme a *BOM* (Técnico/Producción).
- [ ] Prueba de muestra / lote piloto superada sin incidencias (Producción/Calidad).
- [ ] Condiciones logísticas (*MOQ*, paletización, etiquetado, *lead time*, *SLA*) cargadas en ERP (Aprovisionamiento).

### Lecturas o recursos recomendados
- Nahmias, S., & Olsen, T. L. (última edición). *Production and Operations Analysis*. Waveland Press. (Referencia clásica de modelos de inventario y *MRP*).
- Silver, E. A., Pyke, D. F., & Thomas, D. J. (última edición). *Inventory and Production Management in Supply Chains*. CRC Press.
- Mauleón Torres, M. (2013). *Gestión de stock: Excel como herramienta de análisis*. Ediciones Díaz de Santos. (Muy práctico para pymes en español).

### Vídeos, artículos y fuentes adicionales *(requieren validación previa)*
> **Nota para el formador:** Comprobar vigencia de enlaces, estándares y requisitos regulatorios antes de su uso en clase.
- Documentación y plantillas prácticas de planificación de inventarios ABC-XYZ y cálculo de *ROP* en blogs especializados de *supply chain* (por ejemplo, *Mecalux News* o *ICIL*) *(verificar actualidad y ausencia de sesgo puramente comercial antes de compartir)*.
- Normativa de homologación y trazabilidad aplicable a sectores regulados (por ejemplo, *ISO 9001* apartado 8.4 sobre control de procesos y proveedores externos, o normativa cosmética/alimentaria UE) *(verificar edición vigente de la norma antes de referenciar artículos específicos)*.

### Glosario de términos clave

| Término | Definición práctica |
| --- | --- |
| **ABC-XYZ** | Segmentación de inventarios que combina importancia económica (ABC) y estabilidad de la demanda (XYZ). |
| ***BOM* (*Bill of Materials*)** | Lista detallada de componentes y cantidades necesarias para fabricar o ensamblar un producto. |
| ***EOQ*** | Lote económico de pedido que equilibra el coste de emitir pedidos con el coste de almacenar inventario. |
| **FEFO** | *First Expired, First Out*: criterio de salida prioritaria para los lotes con fecha de caducidad más próxima. |
| **Horizonte congelado** | Tramo inmediato del plan de producción/compras protegido frente a cambios imprevistos. |
| ***MOQ*** | Cantidad mínima de pedido (*Minimum Order Quantity*) exigida por el proveedor. |
| ***MRP*** | Planificación de necesidades de materiales a partir del plan maestro, *BOM* e inventarios disponibles. |
| ***ROP* (Punto de pedido)** | Nivel de inventario disponible que activa el lanzamiento de una nueva orden de reposición. |
| ***VMI*** | Inventario gestionado por el proveedor en base a datos de consumo y stock compartidos por el cliente. |

---

## 9. Adaptaciones

### Sesión presencial
- Pedir al alumnado que traiga portátil (o al menos un portátil por equipo de 3) para ejecutar la Actividad 2 y el caso práctico directamente en hoja de cálculo con fórmulas vivas.
- Proyectar la hoja de cálculo maestra en pantalla y modificar en vivo el *lead time* o la variabilidad de demanda para que vean instantáneamente cómo se dispara el stock de seguridad y el capital inmovilizado.
- Realizar una dinámica física breve con tarjetas de colores para ubicar las 4 referencias de *BioCosmética Atlántica* en una matriz ABC-XYZ gigante en la pared.

### Sesión online síncrona
- Compartir un libro de Google Sheets o Excel Online preconfigurado con pestañas individuales por equipo (Actividad 2 y Caso práctico) y una pestaña oculta con la solución que se desbloquea en la puesta en común.
- Utilizar encuestas rápidas tras explicar cada fórmula para verificar resultados numéricos antes de avanzar al siguiente bloque.
- Programar una pausa activa de 10 minutos justo en el ecuador (al acabar la Actividad 2, reajustando 5 minutos de transiciones entre bloques) para mantener la concentración durante el trabajo cuantitativo.

### Sesión asíncrona
- Dividir el contenido en 4 cápsulas grabadas (incluyendo un screencast práctico de 12 minutos construyendo en Excel una tabla ABC-XYZ y calculando *SS*, *ROP* y *EOQ*).
- Entregar el archivo Excel de *BioCosmética Atlántica S.L.* como tarea práctica calificable con una plantilla semiestructurada donde el alumnado introduce fórmulas (no solo resultados estáticos) y redacta un informe breve de 1 página.
- Abrir un hilo de consultas técnicas en el foro del LMS para resolver dudas de fórmulas y publicación de una solución comentada en vídeo tras el cierre del plazo.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Construye sobre el flujo financiero (*DIO* y liquidez) del Tema 1 y la selección/contratación de proveedores del Tema 2, además de reforzar competencias cuantitativas y de gestión de operaciones.
- **Competencias que desarrolla:** Planificación cuantitativa de inventarios, gestión basada en datos, estandarización de procesos de calidad y coordinación transversal entre compras, producción y comercial.
- **Conexión con el tema anterior:** Da continuidad operativa directa al **Tema 2 (Gestión de compras)**: una vez elegidos los mejores proveedores por *TCO* y firmados los contratos marco, este tema resuelve cómo homologarlos técnicamente y determinar exactamente cuánto y cuándo pedirles.
- **Conexión con el tema posterior:** Enlaza de forma natural con el **Tema 4 (Gestión de almacenes)**; todo lo que aprovisionamiento planifica y pide llega físicamente al muelle de entrada, donde la correcta recepción, ubicación, control de inventario, FEFO y trazabilidad determinarán que los datos de stock vuelvan a ser fiables para el siguiente ciclo de reposición.
- **Evidencia de aprendizaje del alumnado:** Hoja de cálculo con modelización de *ROP*, *SS* y *EOQ* del caso *BioCosmética Atlántica S.L.*, más la política ABC-XYZ y checklist de homologación propios listos para implantar.

---

## Siguientes pasos para el formador

1. **Preparar el archivo de hoja de cálculo:** Crear y testear antes de clase el fichero `laboratorio_aprovisionamiento.xlsx` con la pestaña de la Actividad 2, la pestaña de datos de *BioCosmética Atlántica S.L.* y las soluciones verificadas.
2. **Revisar la calculadora de nivel de servicio:** Tener a mano una mini-tabla impresa o proyectable con los valores *Z* habituales (90 %=1,28; 95 %=1,65; 98 %=2,05; 99 %=2,33) para no perder tiempo buscándolos en clase.
3. **Ajustar la profundidad matemática al grupo:** Si el grupo tiene perfil muy operativo/comercial, priorizar la interpretación de negocio de las fórmulas y cómo parametrizarlas en el ERP en lugar de deducciones estadísticas complejas.
4. **Validar requisitos regulatorios sectoriales:** Comprobar si hay participantes de sectores fuertemente regulados (alimentación, farmacia, cosmética, automoción) y validar las referencias normativas vigentes si se abordan requisitos concretos de homologación.
5. **Preparar el puente hacia almacenes:** Cerrar recordando que el mejor modelo de *ROP* fracasa si el stock físico en el almacén no coincide con el dato del sistema, abriendo así el apetito por el Tema 4.
