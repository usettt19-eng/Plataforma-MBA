# Tema 7. Planificación operativa

## 1. Ficha del tema

| Campo | Detalle |
| --- | --- |
| **Título del tema** | Tema 7. Planificación operativa |
| **Bloque y posición dentro del programa** | Bloque 4: Dirección de operaciones (Tema 7 de 8) — Global MBA en Dirección Comercial y Ventas (90 ECTS · 14 meses) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Directores comerciales, gerentes de ventas, emprendedores y profesionales de marketing y negocio |
| **Nivel de dificultad** | Intermedio (posgrado MBA) |
| **Prerrequisitos** | Haber cursado los Temas 1 a 6 del Bloque 4 (especialmente *La demanda*, *Sistemas de operaciones* y *Planificación y gestión de procesos*) |
| **Resultado general de aprendizaje** | Elaborar, coordinar y controlar planes operativos integrales de producción o prestación de servicios —sincronizando capacidad, compras, inventarios, turnos de personal, plazos de entrega y presupuestos operativos— para asegurar el cumplimiento comercial sin desviaciones de margen ni tensiones de caja |

---

## 2. Objetivos de aprendizaje

Al finalizar este tema, el alumnado será capaz de:

1. **Explicar** (Bloom: *Comprender*) la jerarquía de planificación operativa (planificación agregada, plan maestro de producción/servicio —MPS—, planificación de necesidades de materiales —MRP— y programación detallada a corto plazo) y su vínculo con el S&OP.
2. **Aplicar** (Bloom: *Aplicar*) técnicas básicas de planificación de compras, gestión de inventarios (lote económico / EOQ conceptual, punto de pedido y cobertura) y dimensionamiento de plantilla o turnos ante picos de demanda comercial.
3. **Analizar** (Bloom: *Analizar*) planes de capacidad y plazos de ejecución (reglas de secuenciación, holguras y rutas críticas operativas) para resolver conflictos de prioridades entre clientes clave, pedidos urgentes y costes de cambio.
4. **Evaluar** (Bloom: *Evaluar*) el presupuesto operativo y sus desviaciones de ejecución (desviación en volumen, eficiencia y precio/coste) junto con su impacto en el capital circulante y la tesorería de la pyme.
5. **Diseñar** (Bloom: *Crear*) un plan operativo trimestral integrado (capacidad, compras, personal, plazos, presupuesto y tablero de control de ejecución) para una campaña comercial de alta exigencia.

---

## 3. Contenidos esenciales

### 3.1 De la estrategia al día a día: jerarquía de planificación operativa

#### Explicación breve y clara
Una excelente previsión de ventas o un proceso Lean impecable fracasan si no se traducen en órdenes concretas de qué hacer, cuándo hacerlo, con qué materiales y con qué personas. La **planificación operativa** construye ese puente en cascada a través de tres horizontes coordinados: la **planificación agregada** (3 a 12 meses, a nivel de familias de producto/servicio y recursos globales), el **Plan Maestro (MPS)** (semanas/meses, concretando referencias y fechas comprometidas de entrega —ATP, *Available to Promise*—) y la **programación detallada a corto plazo** (días/turnos, asignando pedidos concretos a equipos, máquinas o cuadrillas).

#### Conceptos clave
- **Planificación agregada**: elección entre estrategia de seguimiento (*chase*, ajustando plantilla/turnos/subcontratación a la demanda), nivelación (*level*, produciendo estable y absorbiendo picos con inventario) o estrategia mixta.
- **Plan Maestro de Producción / Servicio (MPS)**: compromiso operativo realista sobre cantidades y fechas de entrega; base del dato **ATP (*Available to Promise*)** que ventas consulta antes de confirmar un plazo al cliente.
- **Horizonte congelado (*Time Fence*)**: ventana cercana en la que el plan solo puede modificarse con autorización directiva para evitar caos en planta/almacén.
- **Secuenciación y asignación a corto plazo**: reglas de prioridad (fecha de entrega más temprana —EDD—, tiempo de proceso más corto —SPT—, razón crítica o cliente estratégico con SLA).

#### Definiciones necesarias
- **Planificación agregada**: plan táctico a medio plazo (3–12 meses) que determina los niveles óptimos de producción o servicio, plantilla, horas extra, subcontratación e inventario necesarios para satisfacer la demanda prevista al mínimo coste viable.
- **ATP (*Available to Promise*)**: porción del inventario disponible y de la producción ya planificada que aún no está comprometida con pedidos en firme y que el equipo comercial puede prometer con seguridad a nuevos clientes.

#### Ejemplo práctico realista
Una imprenta industrial en Valencia aceptaba pedidos de catálogos y *packaging* prometiendo entregas a ojo sin consultar la carga real de las máquinas. Al implantar un Plan Maestro semanal en su ERP con un horizonte congelado de 72 horas y una vista compartida de ATP para los comerciales, ventas pasó a ofrecer fechas exactas en el acto (o proponer tarifa exprés usando un 10 % de capacidad reservada). El cumplimiento de plazos subió del 71 % al 96 % en un trimestre.

#### Errores frecuentes
- Cambiar el programa de fabricación o de prestación de servicios varias veces al día ante cualquier llamada comercial, disparando tiempos improductivos de preparación.
- Confirmar plazos al cliente sin consultar el ATP ni verificar si existe material en almacén.
- Usar exclusivamente la regla «primero en llegar, primero en salir» (FIFO) cuando coexisten pedidos urgentes de clientes estratégicos con pedidos de reposición flexible.

#### Preguntas que el alumnado debería poder responder
- ¿Qué diferencia práctica existe entre una estrategia agregada de seguimiento (*chase*) y una de nivelación (*level*), y por qué las empresas de servicios no pueden apoyarse en inventario terminado para nivelar?
- ¿Cómo cambiaría el día a día de tu equipo comercial si dispusiera en tiempo real del indicador ATP antes de cerrar cada pedido?

---

### 3.2 Planificación de compras, aprovisionamiento e inventarios (MRP y proveedores)

#### Explicación breve y clara
De poco sirve tener maquinaria y personal listos si falta un solo componente crítico o si el exceso de compras inmoviliza la caja de la empresa. La **planificación de necesidades de materiales (MRP)** traduce el Plan Maestro de productos finales en necesidades exactas de materias primas, componentes y envases mediante la **lista de materiales (BOM)**, descontando el inventario disponible y lanzando cada orden de compra con la antelación marcada por el *lead time* del proveedor. En pymes, una gestión profesional de compras combina disciplina MRP con evaluación de proveedores (plazo, calidad, fiabilidad y condiciones de pago), evitando dependencias peligrosas de un proveedor único.

#### Conceptos clave
- **MRP (*Material Requirements Planning*)**: lógica de explosión de materiales (*Plan Maestro + BOM + Inventario + Lead Times = Órdenes planificadas de compra/fabricación*).
- **Lote de compra y coste total de inventario**: equilibrio entre coste de emitir/transportar pedidos (favorece lotes grandes), descuentos por volumen y coste de almacenamiento/financiación/obsolescencia (favorece lotes pequeños).
- **Gestión de riesgo de suministro**: doble homologación en materiales críticos (matriz de Kraljic: apalancados, estratégicos, cuello de botella y rutinarios), *lead times* reales y contratos marco con entregas parciales (*call-off*).
- **Exactitud del inventario (*Inventory Record Accuracy*)**: el MRP solo funciona si el stock que figura en el ERP coincide con el stock real físico (conteos cíclicos ABC).

#### Definiciones necesarias
- **Lista de materiales (BOM — *Bill of Materials*)**: estructura jerárquica que detalla todas las materias primas, subconjuntos, envases y cantidades exactas requeridas para fabricar una unidad de producto o prestar un servicio empaquetado.
- **Conteo cíclico (*Cycle Counting*)**: técnica de auditoría continua del inventario que recuenta con mayor frecuencia las referencias A (alta rotación/valor) sin necesidad de parar el almacén una vez al año.

#### Ejemplo práctico realista
Un fabricante aragonés de bicicletas eléctricas sufrió un parón de 3 semanas en plena campaña porque el ERP mostraba 120 baterías en stock, pero 45 estaban bloqueadas en garantía y otras 20 no aparecían físicamente. Al introducir conteos cíclicos semanales en sus 30 componentes críticos (clase A), acuerdos marco con dos proveedores para piezas cuello de botella y pedidos MRP semanales con entregas escalonadas, elevó la exactitud de inventario al 99,2 % y redujo el capital circulante en un 18 %.

#### Errores frecuentes
- Comprar grandes lotes atraídos por un «descuento del 5 % del proveedor» sin calcular que almacenar ese material 6 meses genera costes financieros, espacio y riesgo de obsolescencia superiores al ahorro.
- Confiar en los cálculos de un ERP cuando la exactitud del stock físico es inferior al 90 % («basura entra, basura sale»).
- Gestionar igual a un proveedor de material de oficina (rutinario) que al proveedor único de un componente técnico clave (cuello de botella).

#### Preguntas que el alumnado debería poder responder
- ¿Por qué un fallo de exactitud del inventario del 10 % destruye la utilidad de un sistema MRP?
- ¿Qué estrategia de compras y contratos aplicarías a un insumo clasificado como «cuello de botella» (bajo peso económico pero crítico para poder entregar al cliente)?

---

### 3.3 Planificación de capacidad, personal, turnos y plazos

#### Explicación breve y clara
En las pymes —tanto industriales como de servicios— el recurso más valioso y sensible en la planificación operativa es la **capacidad humana y técnica disponible**. Planificar personal y turnos implica alinear las horas disponibles y las competencias requeridas (*skill mix*) con la curva horaria, semanal o estacional de la demanda, respetando siempre los marcos legales laborales y convenios colectivos vigentes *(nota: cualquier diseño de turnos, horas extraordinarias, distribución irregular de jornada o contratación temporal debe verificarse siempre con la normativa laboral española y el convenio colectivo aplicable vigente antes de su implantación)*. Acompañar esta programación con controles realistas de plazos (hitos, holguras y gestión de carga por puesto) evita tanto la saturación crónica como los tiempos muertos.

#### Conceptos clave
- **Planificación de capacidad aproximada (RCCP) y carga finita**: comprobar que las horas requeridas por el Plan Maestro caben en los centros de trabajo y equipos reales antes de comprometer plazos.
- **Programación de turnos y flexibilidad laboral**: turnos rotativos, horarios escalonados en horas punta, personal polivalente (*cross-training*) y apoyo externo estacional para absorber picos.
- **Planificación de plazos en proyectos y servicios**: diagramas de Gantt, dependencias entre tareas, holguras y seguimiento de la ruta crítica.
- **Equilibrio entre carga comercial y capacidad de entrega**: gestión de *buffers* (colchones de capacidad o tiempo) para absorber imprevistos sin encadenar retrasos.

#### Definiciones necesarias
- **Capacidad finita**: enfoque de programación operativa que asigna tareas respetando estrictamente el límite real de horas disponibles de cada máquina o equipo, desplazando el exceso a fechas posteriores o activando medidas de capacidad extra.
- **Polivalencia operativa (*Cross-Training*)**: capacitación estructurada de los trabajadores para desempeñar con solvencia más de un puesto o tarea, aumentando la resiliencia del plan operativo frente a picos o ausencias.

#### Ejemplo práctico realista
Un *contact center* y equipo de soporte técnico de una empresa de telecomunicaciones para pymes en Sevilla trabajaba con un horario homogéneo de 9:00 a 18:00, generando colas de espera de 25 minutos entre las 9:30 y las 12:00 h y personal desocupado entre las 14:30 y las 16:30 h. Al analizar la curva horaria de entradas y rediseñar turnos solapados acordados con la plantilla junto con polivalencia entre soporte nivel 1 y *back-office* administrativo, redujeron el tiempo medio de espera a 3 minutos sin aumentar el total de horas pagadas.

#### Errores frecuentes
- Programar a capacidad infinita (cargar pedidos en una semana asumiendo que «ya veremos cómo sale»), convirtiendo las horas extra en norma permanente.
- No contemplar vacaciones, bajas previsibles, formación ni tiempos de mantenimiento al calcular las horas efectivas disponibles del equipo.
- Depender de una única persona clave para una tarea crítica sin nadie formado como respaldo (*back-up*).

#### Preguntas que el alumnado debería poder responder
- ¿Por qué la polivalencia del equipo reduce simultáneamente el coste de horas extra y el riesgo de incumplimiento de plazos?
- ¿Qué variables obligatorias hay que descontar de las horas contractuales para obtener la capacidad real planificable de un equipo?

---

### 3.4 Presupuestos operativos, tesorería y control de ejecución

#### Explicación breve y clara
El **presupuesto operativo** es la expresión financiera del plan de ventas, producción/servicio, compras y personal. Su función directiva no es quedarse archivado en diciembre, sino servir como referencia viva para el **control de ejecución** mes a mes y semana a semana. Cuando los resultados reales se desvían del plan, un presupuesto estático resulta engañoso: si vendemos un 15 % más, es lógico gastar más en materiales y transporte. Por eso la dirección de operaciones utiliza el **presupuesto flexible** y el **análisis de desviaciones** (separando efecto volumen, efecto precio/tarifa y efecto eficiencia/consumo) junto con la previsión de tesorería operativa (ciclo de conversión de efectivo: plazo de cobro, días de inventario y plazo de pago a proveedores).

#### Conceptos clave
- **Presupuesto operativo integrado**: presupuesto de ventas → producción/capacidad → compras/consumos → mano de obra directa → gastos generales de operaciones (*overheads*) → margen operativo.
- **Presupuesto estático vs. presupuesto flexible**: ajustar los costes variables previstos al volumen real ejecutado para evaluar con justicia la eficiencia operativa.
- **Análisis de desviaciones (varianzas)**:
  - *Desviación en precio/tarifa*: pagar el material o la hora más caro/barato de lo presupuestado.
  - *Desviación en eficiencia/cantidad*: consumir más/menos material, mermas o horas de trabajo por unidad de lo estándar.
- **Impacto en caja (Ciclo de Conversión de Efectivo — CCE)**: cómo adelantar compras o alargar plazos de entrega/cobro puede ahogar la tesorería aunque la empresa tenga beneficios contables.

#### Definiciones necesarias
- **Presupuesto flexible**: presupuesto recalculado en función del nivel real de actividad alcanzado en el periodo, permitiendo aislar si un sobrecoste se debe a mayor volumen de ventas o a ineficiencia operativa/encarecimiento de precios.
- **Ciclo de Conversión de Efectivo (CCE)**: días que transcurren desde que la empresa paga a sus proveedores de materiales/servicios hasta que cobra efectivamente la venta de sus clientes (*Días de Inventario + Días de Cobro − Días de Pago*).

#### Ejemplo práctico realista
Una empresa de catering corporativo en Barcelona superó su presupuesto mensual de compras en 14.000 €. A primera vista parecía una mala gestión de cocina; sin embargo, al aplicar un presupuesto flexible comprobaron que habían servido un 20 % más de eventos (efecto volumen favorable), que el precio del salmón y aceite subió un 7 % (desviación de precio) y que la eficiencia real de mermas en cocina había mejorado en 3.200 €. Gracias a ese desglose, ajustaron las tarifas de menús futuros con comercial en lugar de recortar erróneamente personal de cocina.

#### Errores frecuentes
- Comparar gastos reales contra un presupuesto estático anual cuando el volumen de actividad ha cambiado sustancialmente, castigando a operaciones por crecer.
- Aprobar grandes campañas comerciales que exigen pagar materiales al contado a 15 días mientras se cobra a los clientes B2B a 90 días, provocando una crisis de liquidez (*morir de éxito*).
- Revisar las desviaciones presupuestarias a mediados del mes siguiente, cuando ya es demasiado tarde para corregir el rumbo operativo del trimestre.

#### Preguntas que el alumnado debería poder responder
- ¿Por qué una pyme rentable puede quedarse sin efectivo en mitad de su mejor campaña comercial de ventas?
- Si tus costes reales de mano de obra operativa son un 12 % superiores al presupuesto, ¿cómo averiguarías qué parte corresponde a mayor volumen, qué parte a horas extra caras (tarifa) y qué parte a menor productividad (eficiencia)?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** lleva al alumnado desde la comprensión de la cascada de planificación hasta la construcción cuantitativa y control presupuestario de un plan operativo real bajo restricciones de capacidad, compras y caja.

| Fase | Tiempo | Duración | Qué hace el formador | Qué hace el alumnado |
| --- | --- | --- | --- | --- |
| **1. Apertura y activación** | 00:00 – 00:25 | 25 min | Retoma la consulta del Tema 6 sobre horizontes de planificación y dinamiza la Actividad 1 (mapeo de tensiones entre campaña comercial, compras, personal y caja). | Identifica en su negocio qué cuello de planificación (materiales, turnos, plazos o tesorería) suele fallar primero en campañas pico. |
| **2. Microlearning I: Cascada de planificación, MPS y MRP** | 00:25 – 01:00 | 35 min | Expone los apartados 3.1 y 3.2 (planificación agregada *chase/level/mixta*, MPS/ATP, lógica MRP, matriz de Kraljic y exactitud de inventario). | Resuelve un mini-ejercicio guiado de explosión MRP básica y cálculo de fecha de lanzamiento de pedido según *lead time*. |
| **3. Microlearning II: Capacidad, personal, presupuesto flexible y caja** | 01:00 – 01:35 | 35 min | Desarrolla los apartados 3.3 y 3.4 (capacidad finita, turnos/polivalencia, presupuesto flexible, desviaciones precio/eficiencia y Ciclo de Conversión de Efectivo). | Realiza un cálculo rápido de desviación en presupuesto flexible y analiza el impacto en caja de alargar 15 días el stock. |
| **4. Descanso breve** | 01:35 – 01:50 | 15 min | Prepara las salas y verifica acceso a la hoja de cálculo del caso *Textil Técnica Mediterránea S.L.*. | Pausa activa y lectura exploratoria del contexto y cifras del caso práctico. |
| **5. Análisis de caso práctico** | 01:50 – 02:45 | 55 min | Presenta *Textil Técnica Mediterránea S.L.*, organiza grupos de 4-5 personas y guía la elaboración del plan operativo de campaña primavera-verano (capacidad, tejido técnico, turnos y caja). | Calcula déficit de horas de confección, necesidades de tejido importado, costes de opciones (horas extra, subcontratación, adelanto de producción) y tensión de tesorería. |
| **6. Actividad de aplicación y transferencia** | 02:45 – 03:20 | 35 min | Facilita la Actividad 2 (plan operativo trimestral y presupuesto de control del caso) y la Actividad 3 (ficha de planificación operativa y control de ejecución para su empresa). | Cierra la tabla del plan operativo integrado de *Textil Técnica* y diseña un calendario operativo + control de varianzas aplicable a su negocio. |
| **7. Discusión guiada y contraste** | 03:20 – 03:45 | 25 min | Modera la defensa de 2-3 planes operativos, compara rentabilidad, riesgo de rotura de tejido y necesidades máximas de tesorería entre equipos. | Defiende su estrategia agregada mixta con cifras, rebate riesgos de caja y ajusta decisiones tras escuchar otras alternativas. |
| **8. Síntesis, evaluación y cierre** | 03:45 – 04:00 | 15 min | Resume las 5 claves de la planificación operativa rentable, detalla la entrega sumativa y enlaza con el Tema 8 (*El factor humano en la dirección de operaciones*). | Completa la autoevaluación de cierre y señala una mejora de control de ejecución (ATP, conteo cíclico o presupuesto flexible) a implantar en 30 días. |

**Total acumulado**: 25 + 35 + 35 + 15 + 55 + 35 + 25 + 15 = **240 minutos (4 horas)**.

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «El rompecabezas de la campaña pico»
- **Objetivo**: Visualizar las interdependencias entre ventas, compras, capacidad de personal y tesorería cuando la demanda crece bruscamente en un trimestre.
- **Instrucciones para el alumnado**:
  1. Individualmente (5 min), imagina que tu equipo comercial cierra mañana un aumento inesperado del +40 % en ventas para dentro de 6 semanas.
  2. Puntúa del 1 (sin problema) al 5 (colapso total) qué tensión sufrirían cuatro frentes en tu empresa: *A) Aprovisionamiento/proveedores*, *B) Capacidad/personal*, *C) Cumplimiento de plazos* y *D) Tesorería/circulante*.
  3. En plenario (10 min), comparamos los promedios del grupo y analizamos qué frente suele olvidarse hasta que ya es tarde (habitualmente tesorería y *lead time* de insumos).
- **Materiales necesarios**: Encuesta interactiva en vivo (Mentimeter/Slido) o pizarra con 4 barras.
- **Tiempo estimado**: 15 minutos (integrados en la fase 1).
- **Rol del formador**: Enlazar las cuatro tensiones con las cuatro piezas que la planificación operativa integra: MPS/plazos, MRP/compras, capacidad/personal y presupuesto/caja.
- **Producto o entregable esperado**: Termómetro grupal de vulnerabilidades operativas ante picos de crecimiento.
- **Criterios de éxito**: Reflexión realista basada en restricciones reales de cada negocio, incluyendo la dimensión financiera de circulante.

### Actividad 2 (Aplicación): «Plan Operativo Integrado de Campaña — *Textil Técnica Mediterránea*»
- **Objetivo**: Elaborar un plan operativo trimestral viable (estrategia agregada, compras, capacidad y caja) minimizando el coste total sin incumplir plazos ni quebrar el límite de tesorería.
- **Instrucciones para el alumnado**:
  1. En equipos de 4-5 personas trabajando sobre *Textil Técnica Mediterránea S.L.* (Sección 6), calculad para los meses de marzo, abril, mayo y junio: demanda en prendas, horas requeridas de confección frente a horas ordinarias disponibles y metros de tejido técnico necesarios.
  2. Diseñad una **estrategia agregada mixta** combinando adelanto de producción en marzo, horas extra acotadas o subcontratación local, y condiciones comerciales/anticipos para respetar la línea de crédito disponible (180.000 €).
  3. Cumplimentad la plantilla de Plan Operativo Trimestral con costes totales, calendario de compras y 4 reglas de control semanal.
- **Materiales necesarios**: Hoja de cálculo del caso y plantilla «Plan Operativo Trimestral» (Sección 8).
- **Tiempo estimado**: 20 minutos (primera parte de la fase 6).
- **Rol del formador**: Comprobar que los equipos respeten el *lead time* del tejido importado (45 días), el tope de capacidad subcontratable y el techo de tesorería de 180.000 €.
- **Producto o entregable esperado**: Plan operativo numérico de 4 meses viable en capacidad, compras y tesorería.
- **Criterios de éxito**: Cero roturas de plazo en eventos con fecha fija, coste unitario optimizado y cobertura financiera positiva en los cuatro meses.

### Actividad 3 (Transferencia laboral): «Tablero de Planificación y Control Presupuestario Flexible»
- **Objetivo**: Trasladar las herramientas de planificación operativa, compras/capacidad y control de desviaciones a un trimestre real de la empresa del alumno.
- **Instrucciones para el alumnado**:
  1. Individualmente (15 min en sesión + desarrollo asíncrono), selecciona un trimestre clave de tu negocio (o campaña próxima).
  2. Define en la ficha de trabajo: (a) tu estrategia agregada (seguimiento, nivelación o mixta) y regla de horizonte congelado/ATP; (b) tus 2 recursos o insumos cuello de botella con su plan de cobertura/proveedores; (c) el cálculo aproximado de tu Ciclo de Conversión de Efectivo (CCE); y (d) una tabla de presupuesto flexible simplificado con 3 alertas de desviación (volumen, precio, eficiencia).
- **Materiales necesarios**: Ficha de trabajo T7 (Sección 8).
- **Tiempo estimado**: 15 minutos en sesión + 30 minutos de trabajo asíncrono para el entregable sumativo.
- **Rol del formador**: Apoyar a empresas de servicios para traducir MRP/materiales en planificación de horas de especialistas, licencias o subcontratistas externos.
- **Producto o entregable esperado**: Plan operativo trimestral simplificado y protocolo de control de desviaciones aplicable en el trabajo real.
- **Criterios de éxito**: Coherencia entre horizonte de compras/personal y plazos comerciales, más distinción clara entre desviación de volumen y de eficiencia.

---

## 6. Caso práctico

### Contexto empresarial
**Textil Técnica Mediterránea S.L.** es una pyme alicantina de 60 empleados (42 en corte, sublimación y confección; 8 en comercial/diseño gráfico; 10 en logística, compras y administración) y 5,6 millones de euros de facturación anual. Fabrica equipaciones deportivas técnicas personalizadas (ciclismo, *running* y triatlón) para clubes deportivos, marcas propias y organizadores de carreras populares, vendiendo a través de comerciales B2B y un configurador web para clubes.

### Situación o problema
Se aproxima la campaña alta de primavera-verano (**marzo a junio**), que concentra casi la mitad de la facturación anual. Los pedidos de carreras populares tienen **fechas de entrega inamovibles** (entregar un día después del evento supone penalización del 100 % y pérdida del cliente). El departamento comercial ha cerrado previsiones sólidas que desbordan la capacidad ordinaria de confección en mayo y junio. Además, el tejido técnico transpirable principal se importa de un proveedor en Portugal/Italia con un ***lead time* de 45 días** (pedido mínimo 4.000 metros; pago al 50 % al pedir y 50 % a 30 días), mientras que los clubes y organizadores suelen exigir pago a 60 días tras la entrega (sin anticipo por política comercial antigua). La empresa dispone de una **línea de crédito máxima de 180.000 €** para financiar el circulante de la campaña y ya sufrió el año pasado una crisis de liquidez y un 12 % de sobrecoste por pagar portes aéreos urgentes y subcontratar talleres a última hora sin control de calidad.

### Datos disponibles

**Demanda prevista y capacidad ordinaria (marzo–junio)**:

| Variable | Marzo | Abril | Mayo | Junio | Total 4 meses |
| --- | --- | --- | --- | --- | --- |
| **Demanda prevista (prendas)** | 9.000 uds | 13.000 uds | 18.000 uds | 16.000 uds | **56.000 uds** |
| **Horas de confección requeridas** *(0,50 h/prenda)* | 4.500 h | 6.500 h | 9.000 h | 8.000 h | **28.000 h** |
| **Capacidad ordinaria taller propio** *(42 personas × 150 h útiles/mes)* | 6.300 h | 6.300 h | 6.300 h | 6.300 h | **25.200 h** |
| **Balance de horas (Capac. − Req.)** | **+1.800 h** *(sobra)* | **−200 h** *(déficit)* | **−2.700 h** *(déficit)* | **−1.700 h** *(déficit)* | **−2.800 h neto** |
| **Consumo tejido técnico** *(1,2 m/prenda)* | 10.800 m | 15.600 m | 21.600 m | 19.200 m | **67.200 m** |

**Costes, opciones de capacidad y condiciones financieras**:
- **Precio medio de venta**: 28,00 €/prenda. **Coste tejido técnico estándar**: 4,50 €/metro (5,40 €/prenda) + otros insumos/sublimación: 3,60 €/prenda = 9,00 €/prenda de materiales directos.
- **Coste hora ordinaria confección**: 16,00 €/h (8,00 €/prenda).
- **Opciones para cubrir el déficit de horas**:
  1. **Adelanto de producción de patrones/prendas base semielaboradas en marzo** (*postponement* / nivelación parcial): aprovecha hasta las **1.800 h sobrantes de marzo** (equivalente a 3.600 prendas semielaboradas listas para sublimar/personalizar cuando lleguen los diseños finales); coste financiero y almacenamiento de stock intermedio: 0,80 €/prenda.
  2. **Horas extraordinarias internas** *(respetando siempre límites legales y convenio vigente)*: hasta un máximo de **600 h/mes** en abril, mayo y junio a **24,00 €/h** (+50 % sobre hora ordinaria).
  3. **Subcontratación planificada con 2 talleres locales auditados** (si se reserva con ≥ 30 días de antelación): hasta **1.500 h/mes** a **21,50 €/h** (si se contrata de urgencia sin reserva sube a 28,00 €/h y sube la tasa de defectos).
- **Stock inicial de tejido técnico al 1 de marzo**: 14.000 metros (sin pedidos en tránsito aún).
- **Propuesta comercial sobre tesorería**: Dirección comercial propone implantar un **anticipo del 40 % al confirmar pedido** para eventos y clubes (a cambio de garantizar fecha de entrega en contrato y un 3 % de descuento pronto pago opcional) y negociar con el proveedor textil pago 30 % al pedido y 70 % a 45 días.

### Preguntas de análisis
1. Calcula el balance de horas y compara el **coste total** de cubrir el déficit de 4.600 horas brutas de abril-junio (o 2.800 h netas tras nivelar marzo) combinando adelanto de semielaborados en marzo, subcontratación planificada (21,50 €/h) y horas extra (24,00 €/h).
2. Aplicando lógica **MRP** (con *lead time* de 45 días y stock inicial de 14.000 m), ¿cuándo y cuántos metros de tejido técnico deben pedirse para no paralizar mayo y junio?
3. Analiza el **riesgo de tesorería** (Ciclo de Conversión de Efectivo) de comprar ~53.200 metros adicionales de tejido (239.400 €) pagando el 50 % por adelantado si se mantiene el cobro a clientes a 60 días sin anticipos frente a la propuesta de anticipo del 40 %.
4. ¿Qué reglas de **control de ejecución semanal** (presupuesto flexible, ATP y control de calidad en talleres subcontratados) implantarías entre marzo y junio?

### Tarea a realizar
Como equipo de Dirección de Operaciones y Finanzas de **Textil Técnica Mediterránea S.L.**, elaborad el **Plan Operativo de Campaña Primavera-Verano** que incluya:
1. Tabla mensual (marzo–junio) de capacidad: horas ordinarias, adelanto de semielaborados en marzo, subcontratación reservada y horas extra mínimas necesarias, con cálculo del sobrecoste total evitado.
2. Calendario MRP de pedidos de tejido técnico respetando el *lead time* de 45 días y un stock de seguridad mínimo del 10 %.
3. Decisión sobre política de cobros/pagos y tesorería para mantenerse holgadamente dentro de los 180.000 € de línea de crédito.
4. Protocolo de control semanal de ejecución (4 indicadores de varianza de plazo, eficiencia, calidad externa y caja).

### Posibles soluciones o criterios de análisis
- **Estrategia agregada mixta óptima en capacidad**:
  - **Paso 1 (Nivelación + *postponement* en marzo)**: Utilizar las **1.800 h ociosas de marzo** para confeccionar semielaborados/patrones neutros o pedidos tempranos (3.600 prendas), reduciendo el déficit neto de abril-junio de 4.600 h a **2.800 h**. Coste adicional de almacenaje: 3.600 × 0,80 € = **2.880 €** (muy inferior a pagar horas extra o subcontratación por esas horas).
  - **Paso 2 (Subcontratación planificada reservada con antelación)**: Reservar **2.800 h** en los 2 talleres auditados (p. ej., 200 h en abril, 1.400 h en mayo y 1.200 h en junio) a **21,50 €/h** (sobrecoste frente a hora ordinaria: 5,50 €/h × 2.800 h = **15.400 €**), dejando las horas extra internas (24,00 €/h) exclusivamente como *buffer* de contingencia para imprevistos o urgencias de última hora.
  - *Ahorro frente a gestión reactiva*: Sin nivelar marzo y subcontratando de urgencia (28 €/h), el sobrecoste habría superado los **55.000 €** además de disparar los fallos de calidad.
- **Calendario MRP de tejido técnico**:
  - Necesidad total marzo–junio: 67.200 m + stock seguridad recomendado (~10 % consumo pico ≈ 2.200 m) − stock inicial 14.000 m = **~55.400 m a comprar** (en lotes múltiplos de 4.000 m, p. ej., 56.000 m totales).
  - Con *lead time* de 45 días, para cubrir abril (15.600 m, tras consumir 10.800 m en marzo quedando solo 3.200 m) urge haber lanzado el primer lote (mínimo 16.000–20.000 m) **a mediados de febrero**; el lote para mayo (20.000 m) debe lanzarse **a mediados de marzo**; y el lote de junio (16.000–20.000 m) **a mediados de abril**.
- **Tesorería y gobernanza comercial-operativa**:
  - Aprobar la política comercial de **anticipo del 40 % al confirmar pedido** (habitual y muy justificable en producto personalizado con fecha garantizada), inyectando más de 600.000 € de liquidez escalonada durante la campaña y eliminando el riesgo de superar la línea de crédito de 180.000 €, además de negociar 30 %/70 % a 45 días con el proveedor textil.
  - Implantar control semanal de desviaciones mediante presupuesto flexible (revisando eficiencia real en h/prenda, mermas de tejido, cumplimiento de entregas de talleres externos y posición de caja semanal).

### Preguntas de reflexión final
- ¿Qué ocurre cuando el área comercial cierra ventas con pagos a 60-90 días sin anticipos en productos personalizados que exigen compras por adelantado?
- ¿Cómo cambiaría el resultado de tu empresa si revisaras semanalmente un presupuesto flexible sencillo en lugar de esperar al cierre contable trimestral?

---

## 7. Evaluación

### Evaluación diagnóstica breve (inicio de sesión, 5 min)
Cuestionario de 4 ítems:
1. Ordenar correctamente de mayor a menor horizonte temporal: programación detallada, planificación agregada y Plan Maestro (MPS).
2. Identificar qué dato necesita el MRP además del Plan Maestro y el stock actual (BOM y *lead times*).
3. Distinguir presupuesto estático de presupuesto flexible.
4. Indicar si la empresa del alumno calcula y revisa habitualmente su Ciclo de Conversión de Efectivo (CCE).

### Evaluación formativa durante la sesión
- Resolución en vivo del mini-ejercicio de MRP (fase 2) y de desviación de presupuesto flexible (fase 3).
- Revisión en salas reducidas de los cálculos de capacidad, compras y caja del caso *Textil Técnica Mediterránea S.L.* (Actividad 2).
- Contraste de soluciones y supuestos de tesorería durante la discusión guiada (fase 7).

### Evaluación sumativa al final del tema
Entrega individual en campus virtual (plazo: 7 días) de un **Plan Operativo Trimestral y Panel de Control de Ejecución** (máximo 3 páginas + hoja de cálculo adjunta) aplicado a su empresa o proyecto, que incluya: estrategia agregada justificada, plan de capacidad/personal y compras críticas (MRP o recursos clave), cálculo estimado del Ciclo de Conversión de Efectivo, modelo de presupuesto flexible con análisis de 3 desviaciones clave y protocolo semanal de control de ejecución (peso sugerido: 70 % trabajo aplicado, 30 % test de 10 preguntas con ejercicios de capacidad, MRP y varianzas).

### Rúbrica de evaluación

| Criterio | Insuficiente (0–4,9) | En desarrollo (5,0–6,9) | Adecuado (7,0–8,9) | Destacado (9,0–10) |
| --- | --- | --- | --- | --- |
| **1. Coherencia de la cascada de planificación y capacidad (25 %)** | No vincula demanda prevista con horas/recursos reales ni define estrategia agregada clara. | Presenta una estimación general de capacidad pero ignora restricciones de capacidad finita o polivalencia/turnos. | Diseña una estrategia agregada coherente (plan maestro, capacidad finita y regla ATP) alineada con la demanda. | Optimiza costes y servicio mediante estrategia mixta (*postponement*, reservas de capacidad, *buffers* y horizonte congelado) rigurosamente cuantificada. |
| **2. Planificación de compras, materiales e inventarios (25 %)** | Omite *lead times*, exactitud de inventario o criterios de aprovisionamiento críticos. | Describe necesidades de compra de forma aproximada sin lógica MRP ni diferenciación de proveedores. | Aplica lógica MRP/necesidades respetando *lead times*, exactitud de stock y gestión de insumos cuello de botella. | Integra calendario MRP exacto, conteo cíclico ABC, estrategia de proveedores (Kraljic) y mitigación proactiva de riesgos de suministro. |
| **3. Presupuesto operativo, desviaciones y tesorería (30 %)** | No cuantifica presupuesto ni contempla el impacto del plan operativo sobre la liquidez. | Incluye un presupuesto estático básico pero no diferencia desviaciones de volumen, precio y eficiencia ni estima caja. | Construye presupuesto flexible claro, define control de varianzas y calcula el impacto en el Ciclo de Conversión de Efectivo. | Integra presupuesto flexible, análisis financiero de escenarios y palancas comerciales-operativas de circulante (anticipos, rotación, pagos) con gran rigor. |
| **4. Control de ejecución y aplicabilidad directiva (20 %)** | Carece de rutinas de seguimiento, responsables o viabilidad práctica en el día a día. | Define indicadores de control generales pero tardíos o desconectados de decisiones correctoras. | Establece rutinas semanales de control, KPI adelantados y responsables claros para corregir desviaciones a tiempo. | Presenta un sistema de ejecución de nivel ejecutivo listo para desplegar en la pyme, claro, persuasivo y con protocolos de contingencia definidos. |

### Actividad de autoevaluación y reflexión
Ficha breve de cierre en plataforma:
1. *¿Qué pieza de la planificación operativa (ATP, MRP/conteo cíclico, capacidad finita o presupuesto flexible) aportaría mayor orden inmediato en mi empresa?*
2. *¿Qué riesgo de «morir de éxito» por tensión de tesorería podría surgir si crecemos un 30 % el próximo semestre?*
3. *¿Qué cambio concreto en condiciones comerciales (anticipos, fechas de corte o horizonte congelado) propondría para facilitar la ejecución operativa?*

---

## 8. Materiales y recursos

### Guion de diapositivas (slide por slide)

| Slide | Título | Contenido clave y propósito |
| --- | --- | --- |
| **1** | Portada: Planificación operativa | Título del tema, Bloque 4 y lema práctico: *«Una estrategia brillante sin un plan operativo de capacidad, compras y caja es solo un deseo caro»*. |
| **2** | Objetivos y secuencia de las 4 horas | Los 5 objetivos de aprendizaje y tiempos de la sesión. |
| **3** | Actividad 1: El rompecabezas de la campaña pico | Encuesta sobre las 4 tensiones (compras, personal, plazos, caja) ante un +40 % de ventas. |
| **4** | Cascada de planificación operativa | Esquema visual: S&OP → Planificación agregada → Plan Maestro (MPS/ATP) → MRP → Programación diaria. |
| **5** | Estrategias agregadas y regla ATP | Comparativa *Chase*, *Level* y Mixta; cómo el ATP y el horizonte congelado eliminan promesas imposibles. |
| **6** | Compras e inventarios con lógica MRP | Explosión de la BOM, *lead times*, conteo cíclico ABC y matriz de Kraljic para insumos críticos. |
| **7** | Mini-ejercicio guiado de MRP | Cálculo rápido de necesidades netas y fecha exacta de lanzamiento de pedido. |
| **8** | Capacidad finita, turnos y programación de plazos | Carga finita, polivalencia (*cross-training*), reglas de secuenciación (EDD/SPT) y respeto a normativa laboral vigente. |
| **9** | Presupuesto flexible y análisis de desviaciones | Diferencia entre efecto volumen, efecto precio y efecto eficiencia con un ejemplo numérico de 3 minutos. |
| **10** | El peligro de «morir de éxito»: Ciclo de Conversión de Efectivo | Fórmula visual del CCE (*Inventarios + Cobros − Pagos*) y palancas comerciales-operativas para proteger la caja. |
| **11** | Caso práctico: Textil Técnica Mediterránea S.L. | Reto de la campaña marzo–junio, tabla de déficit de horas, *lead time* de 45 días y tope de crédito de 180.000 €. |
| **12** | Actividades 2 y 3: Plan trimestral y transferencia | Estructura de la hoja de cálculo del caso y ficha de traslado a la empresa del alumno. |
| **13** | Síntesis y puente al Tema 8 | 5 reglas de oro de la ejecución operativa y conexión con *El factor humano en la dirección de operaciones*. |

### Ficha de trabajo (para el alumnado)
**Ficha T7 — Resumen Ejecutivo de Planificación Operativa Trimestral**
1. Trimestre/campaña planificada y estrategia agregada elegida (`[ ] Chase` `[ ] Level` `[ ] Mixta`): `___________________________`
2. Regla de horizonte congelado y consulta ATP acordada con comercial: `______________________________________`
3. Dos insumos o recursos cuello de botella, su *lead time* y plan de respaldo:
   - Recurso 1: `_______________________` (*Lead time*: `___ días`) → Plan B: `_______________________`
   - Recurso 2: `_______________________` (*Lead time*: `___ días`) → Plan B: `_______________________`
4. Estimación de Ciclo de Conversión de Efectivo (CCE): Días inventario (`___`) + Días cobro (`___`) − Días pago (`___`) = **`___ días`**
5. Tres alertas semanales del presupuesto flexible (volumen, precio, eficiencia) y quién actúa: `______________________________________`

### Plantilla o herramienta práctica replicable
**Plantilla: Plan Operativo Integrado Trimestral (Capacidad, Compras y Control)**

| Bloque operativo | Mes 1 | Mes 2 | Mes 3 | Total Trimestre | Responsable | Alerta de control |
| --- | --- | --- | --- | --- | --- | --- |
| **Demanda comprometida (uds/proyectos)** | | | | | Comercial | Desviación > ±10 % |
| **Capacidad ordinaria disponible (h)** | | | | | Operaciones | Utilización > 90 % |
| **Capacidad flexible (nivelación / subcontrata / extra)** | | | | | Operaciones | Coste/h > presupuesto |
| **Órdenes de compra MRP a lanzar (fecha y €)** | | | | | Compras | Stock seguridad < mínimo |
| **Presupuesto operativo flexible (€)** | | | | | Finanzas/Ops | Varianza eficiencia > 5 % |
| **Flujo de caja operativo estimado (€)** | | | | | Finanzas | Saldo < colchón mínimo |

### Lecturas y recursos recomendados
- Vollmann, T. E., Berry, W. L., Whybark, D. C., & Jacobs, F. R. (2005). *Manufacturing Planning and Control for Supply Chain Management*. McGraw-Hill. (Manual de referencia en MPS, ATP, MRP y planificación de capacidad).
- Chapman, S. N. (2006). *Planificación y control de la producción*. Pearson. (Texto muy didáctico y aplicado para mandos intermedios y pymes).
- Horngren, C. T., Datar, S. M., & Rajan, M. V. (2012). *Contabilidad de costos: Un enfoque gerencial*. Pearson. (Capítulos sobre presupuesto flexible y análisis de desviaciones operativas).

### Vídeos, artículos y fuentes adicionales
> **Nota importante para el formador**: Comprobar siempre la vigencia de enlaces, recursos abiertos y la legislación laboral/mercantil aplicable (turnos, horas extra, plazos legales de pago entre empresas en España) antes de citarlos o recomendarlos en clase.

- Guías didácticas y hojas de cálculo modelo sobre MRP, planificación agregada y presupuesto flexible disponibles en repositorios abiertos de escuelas de negocio (verificar vigencia y funcionamiento antes de enlazar).
- Referencias informativas sobre normativa laboral española vigente en materia de jornada, horas extraordinarias y distribución irregular (Estatuto de los Trabajadores y convenios sectoriales; **advertir siempre al alumnado la obligación de validar su aplicación exacta con asesoría laboral**).

### Glosario de términos clave

| Término | Definición operativa |
| --- | --- |
| **ATP (*Available to Promise*)** | Cantidad de producto o capacidad ya planificada y aún no asignada que ventas puede comprometer en firme con clientes nuevos. |
| **BOM (*Bill of Materials*)** | Lista estructurada de materiales, componentes y cantidades exactas necesarias para fabricar un producto o ensamblar un servicio. |
| **Capacidad finita** | Programación realista que respeta los límites máximos de horas disponibles de cada recurso sin asumir sobrecargas infinitas. |
| **Ciclo de Conversión de Efectivo (CCE)** | Número de días que transcurren desde el desembolso a proveedores hasta el cobro al cliente (*Días inventario + Días cobro − Días pago*). |
| **Conteo cíclico** | Recuento periódico y rotativo de inventario (priorizando referencias A) para mantener exactitud de registros sin detener operaciones. |
| **Horizonte congelado (*Time Fence*)** | Periodo más cercano del Plan Maestro en el que no se admiten cambios sin aprobación directiva para preservar la estabilidad operativa. |
| **MPS (Plan Maestro de Producción/Servicio)** | Programa detallado que especifica qué referencias/servicios y en qué cantidades y fechas exactas se entregarán a corto y medio plazo. |
| **MRP (*Material Requirements Planning*)** | Sistema de cálculo que traduce el Plan Maestro en calendario exacto de órdenes de compra y fabricación considerando BOM, stock y *lead times*. |
| **Planificación agregada** | Plan táctico a 3–12 meses que equilibra demanda prevista y recursos globales mediante estrategias de seguimiento, nivelación o mixtas. |
| **Presupuesto flexible** | Presupuesto recalculado según el volumen real ejecutado para aislar con precisión desviaciones de precio y de eficiencia operativa. |

---

## 9. Adaptaciones

### Sesión presencial (seminarios o talleres ejecutivos)
- Entregar una hoja de trabajo impresa con el calendario visual de marzo–junio de *Textil Técnica Mediterránea S.L.* y fichas de colores que representen bloques de 500 horas (ordinarias, nivelación marzo, subcontratación y horas extra) para construir físicamente el plan agregado sobre la mesa.
- Proyectar en directo una tabla comparativa de costes y necesidades de tesorería de cada mesa para enriquecer el debate final.

### Sesión online síncrona (formato principal del MBA en directo)
- Facilitar un libro compartido de Excel/Google Sheets con la tabla de demanda/capacidad de *Textil Técnica Mediterránea S.L.* ya montada y pestañas por equipo, permitiendo que los participantes prueben distintas combinaciones de nivelación, subcontratación y anticipos comerciales en *breakout rooms*.
- Utilizar sondeos en vivo tras los mini-ejercicios de MRP y presupuesto flexible para confirmar comprensión antes de pasar al caso práctico.
- Realizar una comprobación rápida de 2 minutos al inicio de la fase 7 proyectando las dos soluciones más contrastadas (la más barata en coste vs. la más segura en caja y plazo).

### Sesión asíncrona (estudio autónomo y foro en campus virtual)
- Fragmentar el contenido en 4 cápsulas audiovisuales de 10-12 minutos más dos videotutoriales breves en hoja de cálculo (explosión MRP de 5 min y presupuesto flexible + CCE de 6 min).
- Proponer un cuestionario autoevaluable con 4 problemas numéricos breves de balance de horas, fechas MRP y varianzas antes de desbloquear el debate del caso.
- En el foro del caso *Textil Técnica Mediterránea S.L.*, cada alumno sube su tabla numérica marzo–junio (máximo 1 página/captura) y debate con un compañero cómo negociar el anticipo del 40 % con clientes B2B sin perder conversión comercial.

---

## 10. Conexión con el programa

- **Qué conocimientos previos refuerza**: Integra la gestión financiera de circulante, costes y presupuestos del Bloque 2, las previsiones de demanda y S&OP del Tema 3, y el mapeo y eliminación de cuellos de botella del **Tema 6 del Bloque 4**, aterrizándolos en un plan ejecutable semana a semana.
- **Qué competencias desarrolla**: Planificación táctica y programación bajo restricciones, coordinación compras-operaciones-finanzas, gestión del capital circulante, análisis financiero de desviaciones y control riguroso de la ejecución.
- **Conexión con el tema anterior y posterior**:
  - *Tema anterior (Bloque 4, Tema 6 — Planificación y gestión de procesos)*: Toma procesos ya mapeados, depurados de desperdicios y con sus cuellos de botella controlados, y los carga con planes concretos de producción, compras, turnos, plazos y presupuesto.
  - *Tema posterior (Bloque 4, Tema 8 — El factor humano en la dirección de operaciones)*: Un plan operativo matemáticamente perfecto fracasa si las personas no están motivadas, formadas, seguras y alineadas con el cambio. El Tema 8 cierra el Bloque 4 poniendo el foco en el liderazgo operativo, la comunicación, la seguridad laboral, la formación y la gestión del cambio que hacen posible ejecutar el plan.
- **Evidencia de aprendizaje que dejará el alumnado**: El **Plan Operativo Trimestral y Panel de Control de Ejecución** con hoja de cálculo de capacidad, compras/MRP, CCE y presupuesto flexible aplicado a su propia empresa.

---

## Siguientes pasos para el formador

1. **Preparar la plantilla Excel de *Textil Técnica***: Verificar todas las fórmulas de horas, metros de tejido y flujo de caja en el libro compartido antes de la clase, manteniendo una pestaña de referencia resuelta solo para el docente.
2. **Incluir nota laboral explícita**: Recordar brevemente durante el bloque de turnos y horas extra que toda medida de flexibilidad horaria debe ajustarse a la normativa laboral y convenio sectorial vigentes.
3. **Conectar con perfiles de servicios**: Preparar un ejemplo rápido de planificación de capacidad por horas facturables (consultoría/agencia/soporte) para asegurar que todo el alumnado vea la aplicabilidad del tema más allá de la industria textil.
4. **Activar entrega sumativa en campus**: Publicar la Ficha T7, la plantilla del Plan Operativo Trimestral, el test de 10 preguntas y la rúbrica con plazo de 7 días.
5. **Anticipar el cierre del Bloque 4 (Tema 8)**: Invitar al alumnado a reflexionar antes de la última sesión del bloque sobre qué cambio tecnológico u operativo reciente generó mayor resistencia humana en su empresa y cómo se gestionó.
