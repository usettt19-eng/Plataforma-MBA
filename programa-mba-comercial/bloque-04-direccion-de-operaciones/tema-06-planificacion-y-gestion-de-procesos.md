# Tema 6. Planificación y gestión de procesos

## 1. Ficha del tema

| Campo | Detalle |
| --- | --- |
| **Título del tema** | Tema 6. Planificación y gestión de procesos |
| **Bloque y posición dentro del programa** | Bloque 4: Dirección de operaciones (Tema 6 de 8) — Global MBA en Dirección Comercial y Ventas (90 ECTS · 14 meses) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Directores comerciales, gerentes de ventas, emprendedores y profesionales de marketing y negocio |
| **Nivel de dificultad** | Intermedio (posgrado MBA) |
| **Prerrequisitos** | Haber completado los Temas 1 a 5 del Bloque 4 (en especial *Dirección de operaciones* y *Sistemas de operaciones*) |
| **Resultado general de aprendizaje** | Mapear, medir, diagnosticar y rediseñar procesos empresariales clave —localizando cuellos de botella, eliminando desperdicios bajo principios Lean y aplicando herramientas de mejora continua y calidad— para acelerar entregas, reducir costes y elevar la satisfacción del cliente |

---

## 2. Objetivos de aprendizaje

Al finalizar este tema, el alumnado será capaz de:

1. **Clasificar** (Bloom: *Comprender*) los procesos de una organización en estratégicos, clave/operativos y de soporte, construyendo un mapa de procesos y diagramas de flujo (*SIPOC*, *swimlane* y *Value Stream Mapping* simplificado).
2. **Aplicar** (Bloom: *Aplicar*) métricas de rendimiento de procesos (tiempo de ciclo, *lead time*, tasa de salida o *throughput*, trabajo en curso —WIP— y ley de Little) para cuantificar dónde se acumulan esperas y costes ocultos.
3. **Analizar** (Bloom: *Analizar*) restricciones y cuellos de botella mediante la Teoría de las Restricciones (TOC) y herramientas de causa raíz (diagrama de Ishikawa, 5 Porqués y diagrama de Pareto) para concentrar la mejora donde realmente aumenta la capacidad total.
4. **Evaluar** (Bloom: *Evaluar*) la presencia de los desperdicios *Lean* (*muda*) en procesos físicos y administrativos/comerciales, distinguiendo cuándo aplicar mejora continua incremental (*Kaizen*) frente a rediseño radical de procesos (BPR).
5. **Diseñar** (Bloom: *Crear*) un plan de rediseño y mejora continua de un proceso extremo a extremo (*Order-to-Cash* o equivalente) con indicadores de control, estándares de calidad y métricas de impacto antes/después.

---

## 3. Contenidos esenciales

### 3.1 Gestión por procesos, mapa de procesos e indicadores de flujo

#### Explicación breve y clara
La mayoría de las pymes están organizadas en departamentos verticales (compras, ventas, administración, almacén, posventa), pero **el valor hacia el cliente siempre viaja de forma horizontal** a través de procesos transversales. Cuando nadie es dueño del proceso completo (por ejemplo, desde que el cliente pide un presupuesto hasta que recibe el pedido y paga la factura: *Order-to-Cash*), los problemas se esconden en las «zonas de nadie» entre departamentos. Gestionar por procesos significa visualizar el flujo real (no el teórico), asignar un propietario del proceso (*process owner*) y medir su velocidad, fiabilidad y carga acumulada.

#### Conceptos clave
- **Mapa de procesos**: arquitectura de procesos estratégicos, clave (que tocan al cliente y generan ingresos) y de soporte.
- **Herramientas de mapeo**: **SIPOC** (*Suppliers, Inputs, Process, Outputs, Customers*), diagrama de carriles (*Swimlane*, ideal para visibilizar traspasos entre áreas) y **VSM (*Value Stream Mapping*)** para separar tiempo de valor añadido y tiempo de espera.
- **Métricas esenciales de flujo**: *Throughput* (tasa de salida), Tiempo de Ciclo, *Lead Time*, Trabajo en Curso (**WIP**) y **Ley de Little** (*Lead Time = WIP / Throughput*).
- **Propietario del proceso (*Process Owner*)**: figura con responsabilidad horizontal sobre el desempeño extremo a extremo.

#### Definiciones necesarias
- **Proceso empresarial**: secuencia estructurada y repetible de actividades interrelacionadas que transforma entradas específicas en salidas con valor medible para un cliente interno o externo.
- **Ley de Little**: principio matemático de los sistemas de flujo que establece que el tiempo medio que tarda un pedido o tarea en atravesar un proceso es igual al trabajo acumulado en curso (WIP) dividido por la velocidad media de salida (*Throughput*).

#### Ejemplo práctico realista
Una empresa B2B de alquiler de maquinaria en Zaragoza tardaba 5 días en aprobar y entregar contratos a nuevos clientes, perdiendo operaciones urgentes frente a competidores más ágiles. Al dibujar un diagrama de carriles (*swimlane*) entre Comercial, Riesgos/Finanzas y Parque de Maquinaria, descubrieron que el tiempo real de trabajo efectivo era solo de 42 minutos; el resto eran esperas en bandejas de correo sin SLA ni validación previa de documentos. Al limitar el WIP y fijar un *scoring* automático para contratos inferiores a 3.000 €, el *lead time* bajó de 5 días a 6 horas.

#### Errores frecuentes
- Dibujar el diagrama de cómo «creemos o deseamos» que funciona el proceso en lugar de observar cómo ocurre realmente en el terreno (*Gemba*).
- Llenar el proceso de trabajo en curso (abrir demasiados pedidos o proyectos a la vez), creyendo que así se avanza más rápido cuando según la Ley de Little solo se alargan los plazos de todos los clientes.
- Medir eficiencia interna de cada departamento por separado sin medir el *lead time* total que percibe el cliente.

#### Preguntas que el alumnado debería poder responder
- Según la Ley de Little, ¿qué dos caminos existen para reducir a la mitad el *lead time* de entrega de un proceso?
- ¿Por qué un diagrama de carriles (*swimlane*) resulta tan útil en entornos donde comercial y operaciones se culpan mutuamente de los retrasos?

---

### 3.2 Cuellos de botella y Teoría de las Restricciones (TOC)

#### Explicación breve y clara
En cualquier cadena de actividades encadenadas, la velocidad total de salida de toda la empresa no la marca el promedio de los puestos, sino el paso más lento: el **cuello de botella** o restricción del sistema. Como demostró Eliyahu Goldratt con la **Teoría de las Restricciones (TOC)**, una hora perdida en el cuello de botella es una hora perdida para toda la empresa, mientras que una hora ganada en un paso que no es cuello de botella es un espejismo que solo acumula colas delante del atasco. Identificar y gestionar disciplinadamente el cuello de botella permite aumentar facturación y entregas sin grandes inversiones.

#### Conceptos clave
- **Cuello de botella (*Bottleneck*)**: etapa con menor capacidad efectiva respecto a la demanda que limita el *throughput* global del proceso.
- **Los 5 pasos de enfoque de TOC**: (1) Identificar la restricción, (2) Explotar al máximo la restricción sin invertir dinero extra, (3) Subordinar el resto del proceso al ritmo de la restricción, (4) Elevar la restricción (si aún falta capacidad, invertir), y (5) Volver al paso 1 evitando la inercia (el cuello de botella se habrá movido).
- **Equilibrado de líneas y ritmo *Takt Time***: sincronizar el ritmo de ejecución interna con el ritmo real de demanda del cliente.
- **Cuellos de botella ocultos en oficina/ventas**: firmas de aprobación, validación de riesgos, presupuestos técnicos complejos o personal clave único.

#### Definiciones necesarias
- **Cuello de botella**: recurso, etapa o política operativa cuya capacidad disponible es igual o inferior a la carga de trabajo que recibe, determinando así la capacidad máxima de todo el sistema.
- ***Takt Time***: cadencia o ritmo máximo al que debe producirse una unidad o completarse un pedido para satisfacer exactamente la demanda del cliente dentro del tiempo operativo disponible (*Tiempo disponible / Demanda del cliente*).

#### Ejemplo práctico realista
Una agencia de ingeniería y licencias para locales comerciales tenía 6 delineantes y un solo ingeniero sénior facultado para revisar y firmar proyectos. Aunque contrataron dos delineantes más (no cuello de botella), la facturación mensual no creció: solo se multiplicó la pila de planos sin revisar sobre la mesa del ingeniero. Aplicando TOC, **explotaron** al ingeniero quitándole tareas administrativas y plantillas repetitivas (pasándolas a los delineantes con un *checklist* de calidad previa) y **subordinaron** la entrada de proyectos a su ritmo semanal. La capacidad de entrega subió un 38 % en un mes sin subir la nómina.

#### Errores frecuentes
- Invertir presupuesto y esfuerzo en acelerar etapas que no son cuello de botella, empeorando el inventario intermedio (WIP) y los tiempos de espera.
- Dejar que el recurso cuello de botella realice tareas auxiliares de bajo valor o corrija errores procedentes de pasos anteriores.
- No reevaluar el sistema tras resolver una restricción, ignorando que el cuello de botella simplemente se ha desplazado a otra etapa.

#### Preguntas que el alumnado debería poder responder
- ¿Por qué el paso 2 de TOC («explotar la restricción») debe ejecutarse siempre antes que el paso 4 («elevar/invertir»)?
- ¿Cuál es hoy el principal cuello de botella en el proceso de captación-entrega (*Order-to-Cash*) de tu empresa?

---

### 3.3 Filosofía Lean, eliminación de desperdicios y herramientas de calidad

#### Explicación breve y clara
La filosofía **Lean** busca maximizar el valor entregado al cliente eliminando sistemáticamente toda actividad que consume recursos pero no añade valor: el **desperdicio (*muda*)**. Nacida en la industria del automóvil (Toyota), hoy se aplica con enorme éxito en almacenes, e-commerce, oficinas comerciales, desarrollo de software y servicios. Identificar los **8 desperdicios clásicos** —defectos, sobreproducción, esperas, talento desaprovechado, transporte innecesario, exceso de inventario, movimientos inútiles y sobreprocesamiento— junto con herramientas prácticas de calidad (5S, Ishikawa, Pareto y 5 Porqués) permite transformar la rentabilidad operativa de una pyme en pocos meses.

#### Conceptos clave
- **Principios Lean**: definir valor desde el cliente, mapear la cadena de valor, crear flujo continuo, establecer sistema *Pull* (tirar según demanda real) y buscar la perfección.
- **Los 8 desperdicios (*DOWNTIME*)**: Defectos, Sobreproducción (*Overproduction*), Esperas (*Waiting*), Talento no utilizado (*Non-utilized talent*), Transporte, Inventario excesivo, Movimientos innecesarios (*Motion*) y Sobreprocesamiento (*Extra-processing*).
- **5S (orden y estandarización)**: Clasificar (*Seiri*), Ordenar (*Seiton*), Limpiar (*Seiso*), Estandarizar (*Seiketsu*) y Sostener (*Shitsuke*), aplicable tanto a almacenes físicos como a carpetas y CRM digitales.
- **Análisis de causa raíz**: diagrama de Pareto (regla 80/20 para priorizar defectos), diagrama de espina de pescado (Ishikawa) y técnica de los **5 Porqués**.

#### Definiciones necesarias
- **Desperdicio (*Muda*)**: cualquier actividad, recurso o tiempo consumido dentro de un proceso por el que el cliente no obtiene valor ni estaría dispuesto a pagar.
- **Sistema *Pull* (arrastre)**: lógica de control de flujo en la que cada etapa produce o repone únicamente cuando la etapa siguiente (o el cliente) emite una señal real de consumo (p. ej., tarjeta o tablero *Kanban*).

#### Ejemplo práctico realista
Un centro logístico de cosmética natural en Madrid perdía casi 2 horas diarias por operario buscando cajas mal ubicadas y verificando albaranes duplicados. Al aplicar **5S** en las estanterías de *picking* (ubicación fija por rotación ABC, señalización visual y limpieza diaria de 10 minutos) y un diagrama de **Pareto** sobre errores de envío (que reveló que el 74 % de los errores procedían de solo 3 referencias con envases casi idénticos), colocaron etiquetas de color diferencial y lectores de código de barras en esas líneas, recortando el tiempo de preparación en un 32 % y los errores en un 80 %.

#### Errores frecuentes
- Reducir Lean a «recortar plantilla o apretar horarios», destruyendo la implicación del equipo en lugar de eliminar fricciones y desperdicios reales.
- Tratar los síntomas superficiales de un problema («repetir la formación al operario») sin aplicar los 5 Porqués hasta hallar la causa sistémica (ej. pantalla del ERP confusa o referencia mal codificada).
- Confundir actividades necesarias sin valor añadido directo (p. ej., facturación legal obligatoria) con desperdicio puro: las primeras deben simplificarse/automatizarse, el desperdicio puro debe eliminarse.

#### Preguntas que el alumnado debería poder responder
- ¿Qué tres ejemplos concretos de los 8 desperdicios Lean ocurren cada semana en los procesos administrativos y comerciales de tu empresa?
- ¿Cómo utilizarías conjuntamente un diagrama de Pareto y los 5 Porqués para resolver un repunte de devoluciones de clientes?

---

### 3.4 Mejora continua (*Kaizen*) vs. rediseño radical de procesos (BPR)

#### Explicación breve y clara
No todos los procesos necesitan la misma medicina. Cuando un proceso es básicamente sano pero arrastra fricciones, variabilidad o pequeños desperdicios, la estrategia óptima es la **mejora continua (*Kaizen*)**: mejoras incrementales, frecuentes, de bajo riesgo e impulsadas por las personas que ejecutan el trabajo cada día (apoyadas en ciclos PDCA o eventos *Kaizen* de 3-5 días). En cambio, cuando un proceso quedó obsoleto por la digitalización del mercado o está fragmentado en demasiados pasos manuales heredados del pasado, parchearlo no basta: se requiere un **rediseño de procesos (BPR — *Business Process Reengineering*)** partiendo de una hoja en blanco enfocada en el cliente actual.

#### Conceptos clave
- **Mejora continua (*Kaizen*)**: cultura de pequeños avances sostenidos, bajo coste, alta participación del equipo y estandarización inmediata tras cada mejora.
- **Rediseño radical (BPR)**: replanteamiento profundo de un proceso clave apalancado en tecnología digital, eliminación de intermediarios internos y simplificación de reglas de negocio.
- **Enfoque Six Sigma / DMAIC (visión directiva)**: Definir, Medir, Analizar, Mejorar y Controlar para reducir variabilidad en procesos críticos de alto volumen.
- **Sostenibilidad del cambio**: estandarización (SOP), métricas visibles y auditorías periódicas para evitar el «efecto elástico» (volver a los hábitos antiguos a los dos meses).

#### Definiciones necesarias
- ***Kaizen***: enfoque de mejora continua basado en cambios incrementales constantes con participación activa de todo el personal operativo y directivo.
- **Rediseño / Reingeniería de procesos (BPR)**: revisión fundamental y rediseño integral de un proceso clave con el objetivo de lograr saltos drásticos en coste, calidad, velocidad y experiencia del cliente.

#### Ejemplo práctico realista
Una aseguradora regional de pymes intentó durante dos años aplicar pequeñas mejoras *Kaizen* a su proceso de emisión de pólizas en papel y correo electrónico (redujo el plazo de 9 a 7 días). Al observar que competidores digitales emitían en 15 minutos, aplicó un **rediseño radical (BPR)** en el segmento de pymes estándar: integró un tarificador web conectado a bases de datos públicas y firma electrónica, eliminando 6 aprobaciones manuales y pasando el plazo a menos de 1 hora, reservando el análisis manual únicamente para riesgos complejos.

#### Errores frecuentes
- Aplicar un rediseño radical costoso y traumático cuando un evento *Kaizen* de una semana y 5S habrían resuelto el 80 % del problema.
- Parchear indefinidamente con pequeñas mejoras un proceso manual obsoleto que requiere digitalización integral.
- Celebrar el lanzamiento de un proceso rediseñado sin definir la fase de **Control** (métricas semanales y formación), permitiendo que el equipo regrese a hojas de cálculo paralelas.

#### Preguntas que el alumnado debería poder responder
- ¿Qué señales indican que un proceso de tu empresa necesita un rediseño radical (BPR) en lugar de mejoras incrementales *Kaizen*?
- ¿Qué medidas pondrías en marcha durante los 60 días posteriores a un rediseño para evitar el «efecto elástico»?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** sigue un formato tipo taller práctico de excelencia operativa: mapeo real, diagnóstico de cuellos de botella, análisis Lean y rediseño de procesos extremo a extremo.

| Fase | Tiempo | Duración | Qué hace el formador | Qué hace el alumnado |
| --- | --- | --- | --- | --- |
| **1. Apertura y activación** | 00:00 – 00:25 | 25 min | Retoma el proceso «atascado» solicitado en el Tema 5 y dinamiza la Actividad 1 (caza rápida de los 8 desperdicios Lean en la empresa propia). | Identifica al menos 3 desperdicios reales (*muda*) en un proceso comercial-operativo de su organización y estima cuántas horas semanales consumen. |
| **2. Microlearning I: Mapa de procesos, flujo y cuellos de botella** | 00:25 – 01:00 | 35 min | Expone los apartados 3.1 y 3.2 (SIPOC, *swimlane*, Ley de Little, *Takt Time* y los 5 pasos de TOC) con un ejemplo numérico paso a paso. | Calcula *throughput*, WIP y *lead time* en un mini-ejercicio de 5 minutos e identifica qué etapa actúa como cuello de botella. |
| **3. Microlearning II: Lean, calidad causa raíz y *Kaizen* vs. BPR** | 01:00 – 01:30 | 30 min | Desarrolla los apartados 3.3 y 3.4 (8 desperdicios, 5S, *Pull/Kanban*, Pareto, 5 Porqués, DMAIC y criterio *Kaizen* vs. BPR). | Aplica en plenario una cadena rápida de «5 Porqués» sobre un error habitual de facturación o entrega. |
| **4. Descanso breve** | 01:30 – 01:45 | 15 min | Prepara salas y tableros para el caso *ElectroRecambios Express S.L.*. | Pausa activa y lectura exploratoria de la tabla de tiempos y errores del caso. |
| **5. Análisis de caso práctico** | 01:45 – 02:40 | 55 min | Introduce *ElectroRecambios Express S.L.*, organiza grupos de 4-5 personas y guía el cálculo de capacidad por etapa, *Takt Time*, localización del cuello de botella y análisis de causa raíz. | Mapea el proceso *Order-to-Ship* del caso, detecta el cuello de botella real (y el desperdicio oculto) y cuantifica la ganancia de capacidad tras explotar la restricción. |
| **6. Actividad de aplicación y transferencia** | 02:40 – 03:20 | 40 min | Facilita la Actividad 2 (rediseño Lean/TOC del flujo *ElectroRecambios*) y la Actividad 3 (SIPOC + 5 Porqués + plan *Kaizen*/BPR de un proceso propio). | Rediseña el flujo futuro del caso eliminando pasos sin valor y elabora el diagnóstico inicial y mapa de mejora de un proceso crítico de su propia empresa. |
| **7. Discusión guiada y contraste** | 03:20 – 03:45 | 25 min | Modera la puesta en común de 2-3 equipos, contrasta sus soluciones TOC/Lean y valida que el nuevo proceso evite desplazar un caos hacia expediciones. | Presenta el antes y después en métricas (*lead time*, capacidad, tasa de error) y recibe contraste constructivo de pares. |
| **8. Síntesis, evaluación y cierre** | 03:45 – 04:00 | 15 min | Resume las 5 reglas prácticas de gestión de procesos, explica el entregable sumativo y enlaza con el Tema 7 (*Planificación operativa*). | Completa la autoevaluación de cierre y registra un experimento *Kaizen* o 5S que lanzará en su equipo en los próximos 15 días. |

**Total acumulado**: 25 + 35 + 30 + 15 + 55 + 40 + 25 + 15 = **240 minutos (4 horas)**.

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «Safari de los 8 desperdicios (*Muda*)»
- **Objetivo**: Entrenar el «ojo Lean» del alumnado para detectar desperdicios cotidianos tanto en operaciones físicas como en procesos comerciales y administrativos.
- **Instrucciones para el alumnado**:
  1. Individualmente (6 min), piensa en el proceso desde que un cliente pide una oferta/pedido hasta que lo recibe en tu empresa.
  2. Selecciona **3 desperdicios** de la lista *DOWNTIME* que ocurran cada semana y anota un ejemplo concreto con su coste estimado en tiempo o dinero (p. ej., «Espera: 48 h hasta que administración valida el riesgo de un cliente nuevo»; «Sobreprocesamiento: copiar los mismos datos en CRM, Excel y ERP»).
  3. En plenario (9 min), votamos los 3 desperdicios más frecuentes en las pymes del grupo y estimamos su impacto anual.
- **Materiales necesarios**: Pizarra digital con los 8 cuadrantes *DOWNTIME*.
- **Tiempo estimado**: 15 minutos (integrados en la fase 1).
- **Rol del formador**: Hacer visible que los desperdicios en oficina/preventa suelen ser igual o más costosos que los desperdicios en fábrica o almacén.
- **Producto o entregable esperado**: Mapa grupal de desperdicios reales priorizados por frecuencia e impacto.
- **Criterios de éxito**: Ejemplos concretos (no abstracciones) y correcta clasificación dentro de los 8 tipos de *muda*.

### Actividad 2 (Aplicación): «Cirugía TOC + Lean en *ElectroRecambios Express*»
- **Objetivo**: Aplicar conjuntamente la Teoría de las Restricciones (TOC), la Ley de Little y herramientas Lean para rediseñar un proceso con cuello de botella y altos errores de envío.
- **Instrucciones para el alumnado**:
  1. En equipos de 4-5 personas, sobre el caso *ElectroRecambios Express S.L.* (Sección 6), calculad el *Takt Time* requerido para atender 220 pedidos/día en una jornada de 8 horas (480 min) y la capacidad diaria de cada una de las 5 etapas actuales.
  2. Identificad el cuello de botella exacto y aplicad los pasos 2 y 3 de TOC (*Explotar* y *Subordinar*) + 2 herramientas Lean (5S, *poka-yoke* o eliminación de pasos sin valor) para diseñar el flujo futuro (*Future State Map*).
  3. Presentad una tabla comparativa «Antes vs. Después» en capacidad diaria, *lead time*, WIP y tasa de error de *picking*.
- **Materiales necesarios**: Datos del caso y plantilla de flujo *Value Stream* simplificado (Sección 8).
- **Tiempo estimado**: 20 minutos (primera mitad de la fase 6).
- **Rol del formador**: Verificar que los equipos no se salten «Explotar» para pedir contratar personal inmediatamente y que revisen qué ocurre con la siguiente etapa más justa tras liberar el cuello de botella.
- **Producto o entregable esperado**: Mapa de flujo futuro con tabla cuantitativa Antes/Después y plan de medidas a coste controlado.
- **Criterios de éxito**: Cálculos exactos de *Takt Time* y capacidad, localización correcta de la restricción y coherencia de las mejoras Lean.

### Actividad 3 (Transferencia laboral): «Ficha SIPOC, 5 Porqués y Plan de Mejora de un Proceso Propio»
- **Objetivo**: Aplicar las herramientas de mapeo, análisis de causa raíz y decisión *Kaizen*/BPR a un proceso real que impacte en el cliente dentro de la organización del alumno.
- **Instrucciones para el alumnado**:
  1. Individualmente (20 min en sesión + finalización asíncrona), elige un proceso transversal problemático de tu empresa (p. ej., presupuestación B2B, *onboarding* de clientes, tramitación de devoluciones o preparación de envíos).
  2. Construye su tabla **SIPOC**, marca dónde está el cuello de botella, ejecuta un árbol rápido de **5 Porqués** sobre su incidencia más frecuente y decide justificadamente si requiere *Kaizen* (mejora incremental) o BPR (rediseño radical), fijando 3 KPI de control.
- **Materiales necesarios**: Ficha de trabajo T6 (Sección 8).
- **Tiempo estimado**: 20 minutos en sesión + 30 minutos de trabajo asíncrono para el entregable sumativo.
- **Rol del formador**: Revisar que los 5 Porqués lleguen a causas de proceso/sistema (no a «culpar a una persona») y que el alcance del proceso sea abarcable.
- **Producto o entregable esperado**: Diagnóstico de proceso y hoja de ruta de mejora lista para ejecutar en 30-60 días.
- **Criterios de éxito**: SIPOC completo, causa raíz sistémica bien argumentada y KPI medibles de tiempo, flujo y calidad.

---

## 6. Caso práctico

### Contexto empresarial
**ElectroRecambios Express S.L.** es una distribuidora B2B de repuestos industriales y automatismos eléctricos ubicada en Álava, con 48 empleados y 11,5 millones de euros de facturación anual. Atiende a 1.400 talleres de mantenimiento industrial y fábricas medianas en España y Portugal, prometiendo **envío el mismo día** para todos los pedidos recibidos antes de las 16:00 h. Hace un año estrenó un portal e-commerce B2B que ya capta el 55 % de los pedidos (el 45 % restante sigue llegando por teléfono y correo electrónico).

### Situación o problema
La demanda diaria ha crecido de 155 a **220 pedidos/día** (en un turno de 8 horas = 480 minutos útiles/día), y el compromiso de envío en el mismo día se está incumpliendo en el **38 % de los pedidos**. La dirección de almacén pide contratar a 3 mozos de *picking* adicionales (coste: ~96.000 €/año) y comprar una nueva embaladora automática. Sin embargo, al medir cronometradamente las 5 etapas del proceso *Order-to-Ship*, se observa una gran cola de pedidos atascados antes del mediodía, constantes interrupciones y un **6,8 % de pedidos enviados con errores de referencia o cantidad** (coste medio de devolución y reenvío urgente: 65 €/incidencia).

### Datos disponibles

**Tabla del proceso actual (*Order-to-Ship*, jornada de 480 min/día, demanda objetivo = 220 pedidos/día)**:

| Etapa del proceso | Personal asignado | Tiempo medio de proceso por pedido | Capacidad teórica total de la etapa (pedidos/día) | Observaciones de observación en terreno (*Gemba*) |
| --- | --- | --- | --- | --- |
| **1. Entrada y registro de pedido** (e-commerce / correo / teléfono) | 3 administrativos comerciales | 4,0 min/pedido (promedio entre web automática y 45 % manual) | 360 pedidos/día | Los pedidos por correo/teléfono llegan sin código exacto de referencia y generan llamadas de aclaración. |
| **2. Validación de crédito, precios especiales y stock en ERP** | 2 personas de Administración | **5,2 min/pedido** *(todas las órdenes pasan revisión manual)* | **184 pedidos/día** | **Cola media acumulada (WIP): 75 pedidos esperando validación.** El 82 % de los pedidos son de clientes habituales sin incidencias de impago ni descuentos fuera de tarifa. |
| **3. *Picking* en almacén** (recogida de piezas en papel) | 6 operarios | 12,0 min/pedido (3,5 min de búsqueda/desplazamiento inútil) | 240 pedidos/día | Albarán en papel sin lector de códigos; estanterías ordenadas por fabricante y no por rotación ABC; 6,8 % de errores de referencia. |
| **4. Verificación y embalaje** | 3 operarios | 5,5 min/pedido | 261 pedidos/día | Trabajan ociosos de 8:00 a 10:30 esperando que bajen pedidos validados, y colapsan de 15:00 a 17:30 acumulando horas extra. |
| **5. Etiquetado y expedición transporte** | 2 operarios | 3,0 min/pedido | 320 pedidos/día | Salida de camiones a las 17:30 h en punto; los pedidos tardíos se quedan para el día siguiente. |

**Datos adicionales de calidad y desperdicio**:
- Coste de errores de *picking* actuales: 220 pedidos/día × 6,8 % × 220 días laborables/año ≈ **3.291 incidencias/año × 65 € = 213.915 €/año** en costes directos de no calidad (sin contar pérdida de clientes).
- El ERP actual ya dispone de un módulo activable (coste de configuración: 9.500 €) para aprobar automáticamente pedidos de clientes con crédito vigente y sin descuentos atípicos, así como para emitir órdenes de *picking* en terminales de radiofrecuencia con escaneo obligatorio de código de barras (inversión en 6 terminales + software: 18.000 €).
- Reorganizar las estanterías por rotación ABC y aplicar 5S durante dos fines de semana cuesta aproximadamente 6.500 € (estanterías auxiliares, señalización y dietas).

### Preguntas de análisis
1. Calcula el ***Takt Time*** necesario para atender 220 pedidos/día en 480 minutos y señala cuál es el **cuello de botella real** del proceso. ¿Por qué contratar 3 mozos de *picking* adicionales no resolvería el incumplimiento del 38 % de envíos?
2. Aplica la **Ley de Little** a la cola de 75 pedidos acumulados ante la etapa 2 (con su *throughput* actual de 184 pedidos/día ≈ 23 pedidos/hora): ¿cuántas horas de espera pura añade solo esa cola?
3. Aplica los pasos de la **Teoría de las Restricciones (TOC)** sobre la etapa 2 (validación) y verifica qué ocurre después con la etapa 3 (*picking*): ¿se desplaza el cuello de botella o queda margen suficiente?
4. Diseña una combinación de **BPR digital** (validación automática + radiofrecuencia) y **Lean/5S** (reordenación ABC de estanterías) calculando la inversión total y el ahorro anual estimado en costes de no calidad y horas extra.

### Tarea a realizar
Como equipo de mejora de procesos de **ElectroRecambios Express S.L.**, elaborad un **Plan de Rediseño *Order-to-Ship* en 60 días** que contenga:
1. Diagnóstico cuantitativo: *Takt Time*, capacidad por etapa, cuello de botella primario y cálculo de espera (Ley de Little).
2. Plan de actuación en 3 bloques: (a) Explotación y rediseño de la Etapa 2; (b) Lean 5S + *poka-yoke* de escaneo en la Etapa 3; y (c) Estabilización del flujo continuo hacia embalaje (Etapa 4) para eliminar el pico de las 15:00–17:30 h.
3. Presupuesto total de la transformación frente a los 96.000 €/año de contratación solicitados inicialmente y estimación de *payback*.
4. Cuadro de 5 KPI de control diario/semanal para sostener el nuevo estándar.

### Posibles soluciones o criterios de análisis
- **Cálculos clave**:
  - ***Takt Time***: 480 min / 220 pedidos = **2,18 minutos/pedido** (el sistema completo debe entregar al menos 1 pedido cada 2,18 min).
  - **Cuello de botella real**: **Etapa 2 (Validación)**, con solo **184 pedidos/día** frente a 220 pedidos demandados (un déficit de 36 pedidos diarios, casi coincidente con el retraso diario crónico). Contratar 3 personas más en *picking* (Etapa 3, que ya tiene capacidad de 240 pedidos/día) habría sido un gasto inútil de 96.000 €/año que no aumentaría ni un solo envío diario.
  - **Ley de Little en la cola de Etapa 2**: 75 pedidos / 23 pedidos/hora = **3,26 horas de espera pura** antes siquiera de empezar a preparar el pedido, lo que explica por qué embalaje está ocioso por la mañana y colapsa por la tarde.
- **Solución TOC + Lean + BPR (Inversión total: 34.000 €)**:
  1. **Rediseño de Etapa 2 (9.500 €)**: Automatizar en el ERP la validación del 82 % de pedidos de clientes con crédito al día y precios de tarifa; las 2 personas de Administración solo revisan por excepción el 18 % restante (~40 pedidos/día × 5,2 min = 208 min totales, es decir, menos de media jornada de 1 persona). La capacidad de Etapa 2 se dispara y el flujo hacia almacén se vuelve continuo desde las 8:00 h.
  2. **5S + reordenación ABC + *poka-yoke* radiofrecuencia en Etapa 3 (24.500 €)**: Reducir los 3,5 min de desplazamientos inútiles a ~1 min baja el tiempo de *picking* de 12,0 a 9,5 min/pedido, elevando la capacidad de los mismos 6 operarios de 240 a **303 pedidos/día** (margen de crecimiento > 35 % sin contratar) y desplomando el error de *picking* del 6,8 % por debajo del 1 %.
  3. **Retorno financiero**: Solo reduciendo los errores de *picking* del 6,8 % al 1 % se ahorran aproximadamente **182.000 €/año** en devoluciones y reenvíos, recuperando los 34.000 € de inversión en **menos de 3 meses**, además de ahorrar los 96.000 €/año de contrataciones innecesarias y las horas extra de embalaje.

### Preguntas de reflexión final
- ¿Cuántas solicitudes de ampliación de plantilla en las empresas esconden en realidad una regla administrativa obsoleta que actúa como cuello de botella?
- ¿Qué pasaría si tras eliminar la restricción de la Etapa 2 las ventas crecieran a 270 pedidos/día? ¿Cuál pasaría a ser el nuevo cuello de botella? *(Respuesta esperada: Etapa 4, Verificación y embalaje, con 261 pedidos/día — Paso 5 de TOC).*

---

## 7. Evaluación

### Evaluación diagnóstica breve (inicio de sesión, 5 min)
Sondeo de 4 ítems:
1. Diferenciar procesos clave de procesos de soporte.
2. Identificar intuitivamente qué es un cuello de botella y cómo afecta al flujo total.
3. Reconocer al menos 3 de los 8 desperdicios Lean.
4. Distinguir cuándo aplicar *Kaizen* y cuándo BPR.

### Evaluación formativa durante la sesión
- Mini-cálculo de Ley de Little y cuello de botella en la fase 2.
- Revisión en vivo de los 5 Porqués en la fase 3.
- Evaluación del cálculo de *Takt Time*, restricción real y plan TOC/Lean en *ElectroRecambios Express S.L.* (Actividad 2 y fase 7).

### Evaluación sumativa al final del tema
Entrega individual (plazo: 7 días) de un **Expediente de Análisis y Rediseño de Proceso** (máximo 3 páginas + diagrama adjunto) aplicado a un proceso real de la empresa del alumno, incluyendo: tabla SIPOC y diagrama de flujo (*swimlane* o VSM simplificado), cuantificación de *lead time*, WIP y cuello de botella, inventario de desperdicios Lean, análisis de causa raíz (Pareto o 5 Porqués), propuesta justificada (*Kaizen* o BPR) y cuadro de 4-5 KPI de control (peso sugerido: 70 % trabajo aplicado, 30 % test de 10 preguntas con ejercicios de *Takt Time*, Ley de Little y TOC).

### Rúbrica de evaluación

| Criterio | Insuficiente (0–4,9) | En desarrollo (5,0–6,9) | Adecuado (7,0–8,9) | Destacado (9,0–10) |
| --- | --- | --- | --- | --- |
| **1. Mapeo del proceso y métricas de flujo (25 %)** | Describe tareas de manera narrativa sin mapa claro ni métricas de tiempo o WIP. | Incluye SIPOC o flujo básico pero con mediciones vagas o sin reflejar esperas reales entre áreas. | Construye SIPOC y diagrama claro con tiempos de ciclo, esperas, *lead time* y WIP correctamente interpretados. | Mapea el flujo real extremo a extremo (*Gemba*), aplica Ley de Little/*Takt Time* con rigor y separa valor añadido de esperas. |
| **2. Diagnóstico de cuello de botella y causa raíz (25 %)** | Confunde síntomas con causas raíz o propone mejoras fuera de la restricción principal. | Identifica problemas reales pero aplica de forma incompleta TOC, Pareto o 5 Porqués. | Localiza con precisión el cuello de botella y profundiza en causas sistémicas mediante 5 Porqués/Pareto/Ishikawa. | Aplica los 5 pasos de TOC de forma impecable, anticipa el desplazamiento futuro de la restricción y cuantifica el coste del desperdicio. |
| **3. Calidad de la propuesta Lean / *Kaizen* / BPR (30 %)** | Plantea medidas genéricas o solicita recursos extra sin explotar primero el proceso actual. | Propone mejoras útiles pero parcialmente desconectadas del diagnóstico o sin justificar *Kaizen* vs. BPR. | Diseña un rediseño coherente (Lean, 5S, *poka-yoke* o automatización) claramente vinculado al diagnóstico y a bajo coste. | Presenta un plan transformador Antes/Después con impacto cuantificado en *lead time*, capacidad y errores, evitando el «efecto elástico». |
| **4. Control, gobernanza y aplicabilidad (20 %)** | Sin propietario del proceso, sin KPI de seguimiento ni plan de implantación realista. | Define algún indicador general sin línea base ni rutina de revisión continua. | Asigna *process owner*, define 4-5 KPI medibles y propone un plan de despliegue ejecutable en 30-60 días. | Incluye gobernanza completa (estándar SOP, tablero visual, auditoría 5S/control y plan de gestión del cambio) lista para implantar. |

### Actividad de autoevaluación y reflexión
Tres preguntas de cierre en campus virtual:
1. *¿Qué cuello de botella «administrativo» o de aprobación podría estar frenando hoy la capacidad real de entrega de mi empresa?*
2. *¿Qué herramienta vista hoy (SIPOC, swimlane, Ley de Little, TOC, 5S o 5 Porqués) puedo aplicar de forma más inmediata con mi equipo?*
3. *¿Cómo garantizaremos que las mejoras que implantemos no se diluyan al cabo de dos meses?*

---

## 8. Materiales y recursos

### Guion de diapositivas (slide por slide)

| Slide | Título | Contenido clave y propósito |
| --- | --- | --- |
| **1** | Portada: Planificación y gestión de procesos | Título del tema, Bloque 4 y frase clave: *«Un buen equipo dentro de un mal proceso siempre acaba vencido por el proceso»*. |
| **2** | Objetivos y secuencia de las 4 horas | Los 5 objetivos de aprendizaje y cronograma práctico. |
| **3** | Actividad 1: Safari de los 8 desperdicios (*DOWNTIME*) | Definición visual de los 8 tipos de *muda* para la dinámica inicial. |
| **4** | De silos verticales a gestión horizontal por procesos | Mapa de procesos (estratégicos, clave, soporte), figura del *Process Owner* y SIPOC. |
| **5** | Visualizar el flujo: *Swimlane* y VSM simplificado | Cómo descubrir que el 80-90 % del *lead time* suelen ser esperas y traspasos entre áreas. |
| **6** | Matemáticas prácticas del flujo: Ley de Little y *Takt Time* | Fórmulas sencillas con mini-ejercicio resuelto de WIP, *throughput* y plazo de entrega. |
| **7** | Teoría de las Restricciones (TOC) en 5 pasos | Identificar, explotar, subordinar, elevar y evitar la inercia; el error de optimizar no-cuellos de botella. |
| **8** | Principios Lean, 5S y flujo *Pull* (*Kanban*) | Cómo organizar el trabajo físico y digital para eliminar búsquedas, acumulaciones y retrabajos. |
| **9** | Calidad y causa raíz: Pareto, Ishikawa y 5 Porqués | Demostración rápida de cómo pasar de un síntoma a una causa sistémica solucionable. |
| **10** | *Kaizen* vs. Rediseño radical (BPR) y ciclo DMAIC | Matriz de decisión para elegir mejora incremental o transformación profunda + antídotos contra el efecto elástico. |
| **11** | Caso práctico: ElectroRecambios Express S.L. | Tabla de las 5 etapas *Order-to-Ship*, datos de cola WIP, costes de errores y solicitud de 3 mozos. |
| **12** | Actividades 2 y 3: Cirugía TOC/Lean y transferencia | Plantillas de flujo futuro y ficha SIPOC + 5 Porqués para la empresa propia. |
| **13** | Cierre y puente al Tema 7 | 5 aprendizajes clave, pautas sumativas y enlace hacia *Planificación operativa*. |

### Ficha de trabajo (para el alumnado)
**Ficha T6 — Diagnóstico rápido de proceso (SIPOC + Cuello de botella + 5 Porqués)**
1. Nombre del proceso y *Process Owner*: `______________________________________`
2. **SIPOC**: Proveedores (`S`): `_______` | Entradas (`I`): `_______` | 4-5 Pasos (`P`): `_______` | Salidas (`O`): `_______` | Clientes (`C`): `_______`
3. *Lead Time* actual estimado: `_______` | Tiempo de trabajo real efectivo: `_______` | Etapa cuello de botella: `_______`
4. **5 Porqués** sobre el fallo o retraso principal:
   - Porqué 1 → `___________________` → Porqué 2 → `___________________` → Porqué 3 → `___________________` → Porqué 4 → `___________________` → **Causa raíz (Porqué 5)**: `___________________`
5. Enfoque elegido (`[ ] Kaizen` / `[ ] BPR`) y 2 acciones concretas de alto impacto: `______________________________________`

### Plantilla o herramienta práctica replicable
**Plantilla: Tabla Comparativa de Rediseño de Proceso (Antes vs. Después)**

| Etapa / Indicador | Situación actual (*As-Is*) | Desperdicio / Restricción detectada | Acción Lean / TOC / BPR | Situación objetivo (*To-Be*) | Inversión / Esfuerzo | Responsable y plazo |
| --- | --- | --- | --- | --- | --- | --- |
| **Etapa 1** | | | | | | |
| **Etapa 2 (Cuello botella)** | | | | | | |
| **Etapa 3** | | | | | | |
| **Etapa 4** | | | | | | |
| ***Lead Time* total** | | | | | | |
| **Tasa de error / WIP** | | | | | | |

### Lecturas y recursos recomendados
- Goldratt, E. M., & Cox, J. (2014). *La Meta: Un proceso de mejora continua* (ed. revisada). Ediciones Díaz de Santos. (Novela empresarial clásica imprescindible para dominar TOC y cuellos de botella).
- Womack, J. P., & Jones, D. T. (2005). *Lean Thinking: Cómo utilizar el pensamiento Lean para eliminar los despilfarros y crear valor en la empresa*. Gestión 2000.
- Rother, M., & Shook, J. (2003). *Learning to See: Value Stream Mapping to Add Value and Eliminate MUDA*. Lean Enterprise Institute.

### Vídeos, artículos y fuentes adicionales
> **Nota importante para el formador**: Validar siempre el acceso, vigencia de enlaces y rigor técnico de recursos audiovisuales o plantillas externas antes de integrarlos en el campus virtual.

- Cápsulas breves de formación sobre *Value Stream Mapping*, 5S en oficina y Teoría de las Restricciones publicadas por institutos de referencia como *Lean Enterprise Institute* o la Asociación Española para la Calidad (verificar enlaces activos y subtítulos antes de compartir).
- Guías divulgativas de introducción a metodologías *Lean Six Sigma* y tableros *Kanban* aplicados a pymes de servicios (comprobar vigencia antes de recomendar).

### Glosario de términos clave

| Término | Definición operativa |
| --- | --- |
| **5S** | Metodología Lean de organización, orden, limpieza, estandarización y disciplina aplicable a talleres, almacenes y entornos digitales. |
| **5 Porqués** | Técnica iterativa de análisis de causa raíz consistente en preguntar sucesivamente «por qué» ocurre un fallo hasta identificar la causa sistémica subyacente. |
| **BPR (*Business Process Reengineering*)** | Rediseño radical de procesos clave desde cero para conseguir saltos drásticos en velocidad, coste, calidad y experiencia de cliente. |
| **Cuello de botella** | Etapa o recurso de menor capacidad efectiva que limita el ritmo máximo de salida (*throughput*) de todo el proceso. |
| ***Kaizen*** | Enfoque de mejora continua basada en cambios pequeños, frecuentes y sostenidos con participación de todo el equipo. |
| **Ley de Little** | Relación fundamental de flujo: *Lead Time = WIP / Throughput*. Reducir el trabajo acumulado en curso acorta directamente el plazo de entrega. |
| ***Muda* (Desperdicio)** | Cualquier consumo de tiempo, esfuerzo o material dentro de un proceso que no aporta valor percibido al cliente. |
| **SIPOC** | Herramienta de mapeo de alto nivel que define Proveedores, Entradas, Proceso, Salidas y Clientes de un flujo de trabajo. |
| ***Takt Time*** | Ritmo de tiempo disponible por unidad demandada que marca la cadencia a la que debe entregar el proceso para cumplir con el mercado. |
| **TOC (Teoría de las Restricciones)** | Metodología de gestión en 5 pasos orientada a identificar, explotar, subordinar y elevar el cuello de botella que limita el resultado global del sistema. |

---

## 9. Adaptaciones

### Sesión presencial (seminarios o talleres ejecutivos)
- Utilizar una dinámica breve con pelotas o sobres (5 min) pasando por 4 personas con distinta velocidad para demostrar visualmente cómo el WIP crece delante del cuello de botella y cómo mejora el flujo al subordinar el ritmo.
- Dibujar en papel continuo el mapa *As-Is* y *To-Be* de *ElectroRecambios Express S.L.* marcando en rojo los desperdicios *muda* y en verde las medidas TOC/Lean.

### Sesión online síncrona (formato principal del MBA en directo)
- Facilitar en Miro/Google Slides un diagrama de bloques interactivo de las 5 etapas de *ElectroRecambios Express S.L.* junto con una hoja de cálculo donde los equipos calculan el *Takt Time*, la Ley de Little y el *payback* en tiempo real en *breakout rooms*.
- Utilizar la herramienta de anotación en pantalla durante la fase 3 para construir colectivamente un árbol de 5 Porqués en 5 minutos.
- Pedir a cada grupo que resuma su propuesta en una sola diapositiva «Antes vs. Después» para agilizar la fase 7 de contraste directivo.

### Sesión asíncrona (estudio autónomo y foro en campus virtual)
- Grabar 4 píldoras conceptuales (10-12 min) y un tutorial de 7 minutos mostrando cómo construir un diagrama *swimlane* sencillo y calcular *Takt Time* y Ley de Little en hoja de cálculo.
- Incluir un cuestionario autoevaluable intermedio donde el alumno calcula el cuello de botella y el *Takt Time* de *ElectroRecambios Express S.L.* antes de acceder al foro de rediseño.
- En el foro, cada participante publica su propuesta de rediseño (máximo 350 palabras + tabla Antes/Después) y responde a un compañero evaluando cuál sería el siguiente cuello de botella si las ventas suben un 25 %.

---

## 10. Conexión con el programa

- **Qué conocimientos previos refuerza**: Aplica el análisis de productividad y costes de no calidad del Tema 2, la gestión de flujos de demanda del Tema 3 y la configuración tecnológica y de calidad (*poka-yoke*) del **Tema 5 del Bloque 4**, llevándolos al nivel táctico de cada proceso interno.
- **Qué competencias desarrolla**: Pensamiento analítico orientado a flujos horizontales, diagnóstico de cuellos de botella y causas raíz, aplicación práctica de herramientas Lean y de calidad, liderazgo de mejora continua y criterio directivo para decidir entre *Kaizen* y BPR.
- **Conexión con el tema anterior y posterior**:
  - *Tema anterior (Bloque 4, Tema 5 — Sistemas de operaciones)*: Desciende desde la arquitectura macro del sistema de operaciones (tipología, tecnología, OEE) al diseño y optimización detallada de los procesos concretos que circulan por su interior.
  - *Tema posterior (Bloque 4, Tema 7 — Planificación operativa)*: Una vez que los procesos están mapeados, equilibrados y libres de cuellos de botella crónicos en el Tema 6, el Tema 7 explica cómo programar y coordinar día a día y mes a mes la ejecución real: planes de producción/servicio, compras, inventarios, personal, plazos y presupuestos operativos.
- **Evidencia de aprendizaje que dejará el alumnado**: El **Expediente de Análisis y Rediseño de Proceso** (SIPOC, flujo, diagnóstico TOC/causa raíz y propuesta *Kaizen*/BPR con KPI) aplicado a un proceso real de su organización.

---

## Siguientes pasos para el formador

1. **Preparar el simulador de etapas de *ElectroRecambios***: Dejar lista la hoja de cálculo con las 5 etapas y sus tiempos para que los equipos comprueben de inmediato cómo cambia la capacidad al automatizar el 82 % de las validaciones y reducir el *picking* con 5S.
2. **Tener preparado un ejemplo comercial de 5 Porqués**: Preparar un microejemplo cercano a ventas (p. ej., demora en entrega de propuestas comerciales o errores en facturas) para la demostración en vivo de la fase 3.
3. **Conectar con los procesos traídos por el grupo**: Recoger al inicio 2-3 procesos «atascados» propuestos por el alumnado y usarlos como ejemplos vivos durante la explicación de SIPOC y TOC.
4. **Publicar entregables en plataforma**: Habilitar la Ficha T6, la plantilla Antes/Después, el cuestionario numérico y la rúbrica con plazo de 7 días.
5. **Anticipar el Tema 7**: Pedir al alumnado que revise qué horizonte de programación usa su empresa actualmente para coordinar compras, turnos de personal y presupuesto operativo en campañas pico.
