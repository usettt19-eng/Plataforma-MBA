# Tema 3. Business Analytics

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Tema 3. Business Analytics |
| **Bloque y posición dentro del programa** | Bloque 2: Economía, analítica cuantitativa y decisiones — Tema 3 de 3 (Tema 6 de 26 del Executive MBA) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Directivos con experiencia, gerentes, mandos intermedios y emprendedores |
| **Nivel de dificultad** | Avanzado / Directivo (con base intermedia en analítica cuantitativa y gestión) |
| **Prerrequisitos** | Haber completado los Temas 1 y 2 del Bloque 2 (*Microeconomics for Managers* y *Regression Analysis for Business*) y manejo operativo de hojas de cálculo |
| **Resultado general de aprendizaje** | Integrar la analítica descriptiva, predictiva y prescriptiva —incluyendo modelos de optimización con restricciones y simulación de escenarios/Monte Carlo— para diseñar decisiones óptimas de asignación de recursos bajo incertidumbre y gobernar los sesgos y límites de los modelos en entornos empresariales. |

---

## 2. Objetivos de aprendizaje

Al finalizar este tema, el alumnado será capaz de:

1. **Clasificar** los problemas de gestión de una empresa según la madurez analítica requerida (descriptiva, diagnóstica, predictiva y prescriptiva) para priorizar iniciativas de datos con retorno real sobre la inversión. *(Nivel de Bloom: Analizar)*
2. **Formular** modelos de optimización lineal (función objetivo, variables de decisión y restricciones) y utilizar sus resultados y precios sombra para asignar recursos escasos con máxima rentabilidad. *(Nivel de Bloom: Aplicar)*
3. **Evaluar** el riesgo operativo y financiero de una decisión mediante análisis de sensibilidad, escenarios y simulación de Monte Carlo conceptual, superando la "falacia del promedio". *(Nivel de Bloom: Evaluar)*
4. **Traducir** resultados técnicos generados en herramientas de software (Excel Solver, BI, Python/R o plataformas analíticas) en recomendaciones claras, gobernables y accionables para un comité de dirección. *(Nivel de Bloom: Crear)*
5. **Detectar** sesgos de datos, supuestos frágiles, ley de Goodhart y límites éticos o algorítmicos en sistemas de analítica aplicada para establecer salvaguardas de gobierno corporativo. *(Nivel de Bloom: Evaluar)*

---

## 3. Contenidos esenciales

### 3.1 Del cuadro de mando a la acción: analítica descriptiva, predictiva y prescriptiva

#### Explicación breve y clara
Muchas pymes en proceso de transformación digital invierten en cuadros de mando vistosos (*Business Intelligence*) que les muestran con gran detalle qué pasó el mes anterior, pero siguen decidiendo qué producir, dónde asignar presupuesto o cuánto stock comprar "a ojo". La **analítica de negocio (*Business Analytics*)** despliega una escalera de creación de valor en cuatro peldaños: **descriptiva** (*¿qué ha ocurrido?*), **diagnóstica** (*¿por qué ha ocurrido?*), **predictiva** (*¿qué es probable que ocurra?*) y **prescriptiva** (*¿qué acción óptima debemos ejecutar dadas nuestras restricciones?*). El papel del directivo no es programar algoritmos, sino elegir el nivel analítico adecuado al problema y conectar cada modelo con una decisión recurrente de alto impacto.

#### Conceptos clave
- Continuo analítico: descriptiva, diagnóstica, predictiva y prescriptiva.
- Cadena *Datos $\rightarrow$ Información $\rightarrow$ Modelo $\rightarrow$ Decisión $\rightarrow$ Valor económico*.
- Matriz de priorización de casos de uso analíticos (impacto en P&L frente a viabilidad de datos y adopción organizativa).
- Diferencia entre *reporting* estático (retrovisor) y analítica embebida en procesos operativos (volante).

#### Definiciones necesarias
- **Analítica descriptiva:** Recopilación, agregación y visualización de datos históricos (KPIs, cuadros de mando, segmentación básica) para monitorizar el desempeño pasado y presente.
- **Analítica predictiva:** Uso de modelos estadísticos y de aprendizaje automático (como la regresión vista en el Tema 2, series temporales o árboles de decisión) para estimar resultados o probabilidades futuras.
- **Analítica prescriptiva:** Aplicación de técnicas matemáticas de optimización y simulación para recomendar directamente el mejor curso de acción posible bajo restricciones reales de capacidad, presupuesto, servicio o riesgo.

#### Ejemplo práctico realista
Una distribuidora española de suministros de hostelería implantó Power BI para ver diariamente sus roturas de stock por almacén (**descriptiva**). Sin embargo, el coste logístico seguía creciendo. En una segunda fase incorporó un modelo de previsión semanal por familia y zona (**predictiva**) y, finalmente, un motor de reposición automática que optimiza la cantidad a pedir a cada proveedor considerando descuentos por volumen, caducidad y capacidad de muelle (**prescriptiva**). Solo al pasar al peldaño prescriptivo logró reducir el capital circulante inmovilizado en un 16 % manteniendo el nivel de servicio.

#### Errores frecuentes
- Comprar licencias costosas de software analítico o "proyectos de IA" cuando la pyme aún carece de datos maestros limpios (códigos duplicados de clientes/productos o costes sin imputar).
- Confundir un proyecto de analítica con un proyecto puramente de TI, sin dueño de negocio (*business owner*) que cambie el proceso de decisión.
- Construir modelos complejos para decisiones esporádicas de bajo impacto mientras decisiones repetitivas de gran volumen (precios, turnos, rutas, compras) siguen sin modelizar.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué diferencia práctica existe entre un modelo predictivo y un modelo prescriptivo en la gestión de inventario o marketing?
2. ¿Por qué muchas iniciativas de *Business Intelligence* en pymes generan gráficos atractivos pero escaso retorno financiero?
3. ¿Qué dos criterios deben guiar la priorización de los primeros casos de uso de *Business Analytics* en una empresa mediana?

---

### 3.2 Modelos de optimización: asignación óptima de recursos con restricciones

#### Explicación breve y clara
En toda empresa los recursos son finitos: horas de máquina, capital circulante, plantilla cualificada, flota de reparto o presupuesto comercial. Cuando existen múltiples productos o proyectos compitiendo por varios recursos escasos a la vez, las reglas intuitivas (como "priorizar el producto con mayor margen unitario") suelen conducir a decisiones subóptimas. La **optimización matemática** (especialmente la programación lineal y entera, resoluble incluso en Excel Solver) estructura el problema en tres piezas exactas —**variables de decisión**, **función objetivo** y **restricciones**— para hallar la combinación numéricamente óptima y cuantificar cuánto vale relajar cada cuello de botella (**precio sombra**).

#### Conceptos clave
- Anatomía de un modelo de optimización: variables de decisión (qué controlamos), función objetivo (qué maximizamos o minimizamos) y restricciones (límites físicos, financieros o contractuales).
- Región factible, soluciones de esquina y solución óptima global.
- Restricciones activas (cuellos de botella reales) frente a restricciones con holgura (*slack*).
- Análisis de sensibilidad y **precio sombra** (*shadow price*) para decisiones de inversión y subcontratación.
- Optimización continua (mezcla de producción, presupuestos) frente a optimización entera/binaria (abrir o no un almacén, asignar turnos o rutas).

#### Definiciones necesarias
- **Función objetivo:** Expresión matemática que refleja la meta directiva que se desea maximizar (por ejemplo, margen de contribución total) o minimizar (por ejemplo, coste logístico total).
- **Restricción activa (*binding constraint*):** Límite de recurso que se consume al 100 % en la solución óptima y que, por tanto, impide seguir mejorando la función objetivo.
- **Precio sombra (*shadow price*):** Incremento exacto que experimentaría la función objetivo (en euros de margen o ahorro de coste) si dispusiéramos de **una unidad adicional** de un recurso con restricción activa, dentro de su rango de validez. Si una restricción tiene holgura, su precio sombra es cero.

#### Ejemplo práctico realista
Una empresa mediana de mecanizado CNC creía que debía priorizar sus piezas de aeronáutica (margen unitario de 180 €) frente a piezas industriales estándar (margen de 95 €). Al modelizar su planta en Excel Solver considerando horas de fresado de 5 ejes y horas de verificación de calidad, descubrió que las piezas aeronáuticas consumían 4 veces más tiempo de cuello de botella. Reoptimizar el mix respetando compromisos mínimos contractuales elevó el margen mensual en 14.500 € sin comprar ninguna máquina nueva y reveló que pagar horas extra de fresado hasta 52 €/h era altamente rentable (precio sombra = 68 €/h).

#### Errores frecuentes
- Priorizar productos por "margen por unidad" en lugar de "margen por unidad de recurso cuello de botella".
- Olvidar restricciones blandas pero reales de negocio (compromisos mínimos con clientes estratégicos, lotes mínimos de compra o normativa laboral), generando soluciones matemáticamente óptimas pero inaplicables en la práctica.
- Interpretar el precio sombra fuera de su rango de validez (creer que si 1 kg extra de materia prima vale 6 €, entonces 10.000 kg extra valdrán siempre 6 €/kg).

#### Preguntas que el alumnado debería poder responder
1. ¿Cuáles son los tres componentes obligatorios para plantear cualquier problema empresarial como un modelo de optimización?
2. ¿Por qué el precio sombra de un recurso con holgura es siempre igual a cero?
3. ¿Cómo utiliza un director de operaciones o finanzas el precio sombra para decidir si conviene subcontratar capacidad o pagar horas extra?

---

### 3.3 Simulación y análisis de incertidumbre: escenarios y Monte Carlo conceptual

#### Explicación breve y clara
La optimización determinista asume que conocemos con certeza el precio futuro de la materia prima, la demanda del trimestre o el plazo de entrega del proveedor. En la realidad, esas variables fluctúan y, además, suelen tener **riesgos asimétricos** (por ejemplo, un proveedor rara vez entrega 15 días antes, pero sí puede retrasarse 30 días). Sustituir variables inciertas por su valor promedio genera la **falacia del promedio (*flaw of averages*)**, que sistemáticamente subestima el riesgo de pérdidas o roturas. La **simulación de escenarios y el método de Monte Carlo** superan esta limitación evaluando miles de combinaciones plausibles de inputs inciertos para obtener no un único número, sino una **distribución completa de resultados** (percentiles P10, P50, P90 y probabilidad de pérdida o falta de caja).

#### Conceptos clave
- Análisis de sensibilidad univariante (gráficos *tornado* para detectar qué variable mueve más el resultado).
- Análisis de escenarios discretos (pesimista, base, optimista) y sus límites al ignorar probabilidades conjuntas.
- Falacia del promedio (*flaw of averages*): por qué el resultado evaluado en los promedios no coincide con el promedio de los resultados cuando existen restricciones, topes o asimetrías.
- Simulación de Monte Carlo conceptual: asignar distribuciones de probabilidad a inputs inciertos (triangular, normal, uniforme), correlacionarlos si procede y ejecutar miles de iteraciones.
- Métricas ejecutivas de salida: mediana (P50), riesgo a la baja (P10 / VaR operativo), potencial al alza (P90) y probabilidad de incumplir un umbral crítico ($P(\text{EBITDA} < 0)$ o $P(\text{Caja} < \text{mínimo})$).

#### Definiciones necesarias
- **Falacia del promedio:** Error analítico de evaluar planes empresariales utilizando únicamente valores esperados (promedios) para variables inciertas; por ejemplo, un estadístico que se ahoga al cruzar un río de "profundidad media de un metro".
- **Simulación de Monte Carlo:** Técnica computacional que genera miles de escenarios aleatorios coherentes con las distribuciones de probabilidad de las variables de entrada inciertas para estimar la distribución de probabilidad de un resultado de negocio (EBITDA, VAN, plazo de proyecto o nivel de inventario).
- **Percentil 10 (P10):** Valor por debajo del cual cae únicamente el 10 % de los escenarios simulados; muy útil en comités directivos como referencia de escenario adverso severo pero plausible.

#### Ejemplo práctico realista
Una pyme española de instalaciones fotovoltaicas industriales analiza un proyecto llave en mano cuyo presupuesto determinista (usando precios medios de paneles, horas medias de montaje y plazo medio de licencias) arroja un beneficio esperado de +95.000 €. Al correr una simulación Monte Carlo de 10.000 escenarios incorporando asimetría al alza en retrasos administrativos (con penalización contractual si supera 90 días) y volatilidad del precio del cobre, descubre que el beneficio medio real baja a +61.000 € y existe un **24 % de probabilidad de perder dinero**. Gracias a la simulación, renegocia el hito de penalización antes de firmar el contrato.

#### Errores frecuentes
- Asignar distribuciones arbitrarias sin contraste histórico ni criterio experto ("basura entra, basura sale" — *GIGO*).
- Tratar como independientes variables que en la realidad se mueven juntas (por ejemplo, simular de forma independiente demanda y precio de venta cuando en recesión caen ambos a la vez).
- Presentar al consejo de administración una tabla de 10.000 filas en lugar de resumir en 3 indicadores accionables: valor esperado, P10 y probabilidad de cruzar el umbral rojo de riesgo.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué el EBITDA calculado con los valores medios de demanda y costes suele sobreestimar la rentabilidad real cuando hay capacidad limitada o costes asimétricos?
2. ¿Qué aporta una simulación de Monte Carlo frente a una tabla clásica de tres escenarios (pesimista, base y optimista)?
3. ¿Cómo se interpreta en un comité directivo un resultado con P10 = -15.000 € y $P(\text{EBITDA} < 0) = 18\,\%$?

---

### 3.4 Software, traducción ejecutiva, límites y sesgos de la analítica

#### Explicación breve y clara
El mayor cuello de botella del *Business Analytics* en las empresas no es técnico, sino **directivo y cultural**: la brecha entre quienes construyen los modelos y quienes asumen la responsabilidad de la cuenta de resultados. Elegir el ecosistema de software proporcionado al tamaño de la pyme, traducir salidas matemáticas en decisiones comprensibles (*data storytelling* y reglas operativas) y vigilar los **sesgos y límites** de los modelos (sesgo histórico, deriva de datos, ley de Goodhart y cajas negras opacas) distingue a un directivo que usa la analítica con criterio de otro que abdica su juicio ante una hoja de cálculo o un algoritmo.

#### Conceptos clave
- Mapa práctico de herramientas según madurez: hojas de cálculo avanzadas (Excel Solver / Power Query), plataformas BI (Power BI, Tableau, Looker Studio), lenguajes abiertos (Python, R, SQL) y motores de optimización/simulación empresariales.
- Traducción ejecutiva (*Last Mile of Analytics*): pasar del "qué dice el modelo" al "qué decisión tomamos hoy, con qué dueño, qué presupuesto y qué plan de contingencia".
- Límites y sesgos críticos: sesgo de selección/supervivencia, sesgo de confirmación, deriva de datos (*data drift*), **ley de Goodhart** ("cuando una métrica se convierte en objetivo, deja de ser una buena métrica") y sesgos algorítmicos discriminatorios.
- Gobierno del dato y responsabilidad humana (*human-in-the-loop*): trazabilidad, auditoría periódica de supuestos y privacidad/cumplimiento normativo.

#### Definiciones necesarias
- **Última milla de la analítica (*Last Mile of Analytics*):** Proceso de traducir resultados analíticos en decisiones adoptadas efectivamente por las personas y los procesos de la organización; donde fracasan la mayoría de los proyectos de datos.
- **Deriva de datos (*data drift*):** Pérdida progresiva de precisión de un modelo predictivo o prescriptivo porque la realidad del mercado, los precios o los hábitos de los clientes han cambiado respecto al periodo en que se calibró el modelo.
- **Ley de Goodhart:** Principio según el cual cuando un indicador cuantitativo se convierte en objetivo rígido incentivado, las personas tienden a optimizar la métrica en perjuicio del propósito real del negocio (por ejemplo, cerrar tickets de soporte prematuramente para mejorar el tiempo medio de respuesta).

#### Ejemplo práctico realista
Una fintech española de financiación a pymes entrenó un modelo predictivo de *scoring* crediticio usando exclusivamente datos de clientes aprobados en los cinco años previos (sesgo de selección y periodo de tipos de interés bajos). Al subir bruscamente los tipos de interés, el modelo sufrió deriva severa y siguió aprobando operaciones de alto riesgo en sectores muy endeudados, al tiempo que penalizaba sistemáticamente a emprendedores jóvenes sin historial bancario largo. La dirección introdujo revisión humana para operaciones límite (*human-in-the-loop*), recalibración trimestral con variables macroeconómicas y auditoría de sesgos.

> **Nota sobre marco regulatorio:** Cuando los modelos analíticos o algorítmicos afecten a datos personales, evaluación crediticia, precios personalizados o decisiones sobre empleados en España y la Unión Europea, debe verificarse el cumplimiento estricto de la normativa vigente en materia de protección de datos (RGPD / LOPDGDD) y del Reglamento Europeo de Inteligencia Artificial (AI Act) antes de su despliegue en producción.

#### Errores frecuentes
- Invertir en infraestructuras de *Big Data* sobredimensionadas cuando un modelo bien planteado en Excel Solver + SQL resolvería el 80 % del problema de una pyme en semanas.
- Aceptar sin cuestionar el resultado de un modelo ("lo dice el algoritmo") sin auditar qué supuestos, restricciones o datos excluidos hay detrás.
- Incentivar al equipo comercial u operativo por un único KPI aislado, desencadenando efectos perversos por la ley de Goodhart.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué criterios debe aplicar una pyme para decidir entre resolver un problema con Excel Solver/BI o invertir en desarrollo a medida en Python/plataformas avanzadas?
2. ¿Cómo puede manifestarse la ley de Goodhart en un cuadro de mando de ventas o atención al cliente y cómo se previene?
3. ¿Qué cuatro preguntas de auditoría sobre sesgos y deriva debería exigir un comité de dirección antes de automatizar una decisión operativa?

---

## 4. Metodología didáctica

Secuencia de aprendizaje de **4 horas (240 minutos)** orientada a la integración práctica del Bloque 2: pasar del diagnóstico descriptivo a la optimización con restricciones y la gestión probabilística del riesgo.

| Fase | Tiempo | Qué hace el formador | Qué hace el alumnado |
|---|---:|---|---|
| **1. Apertura y activación** | 25 min | Lanza el reto inicial (*La trampa del margen unitario y la falacia del promedio*), recoge respuestas diagnósticas y conecta el Tema 3 con los Temas 1 y 2. | Responde al diagnóstico inicial y ejecuta la Actividad 1 (*¿Qué producto fabricamos primero?*), descubriendo cómo la intuición sin optimización destruye margen. |
| **2. Microlearning I: Madurez analítica y optimización lineal** | 40 min | Explica los apartados 3.1 y 3.2: continuo analítico, formulación de función objetivo/restricciones, región factible, cuellos de botella y precio sombra (con demostración en vivo de Excel Solver). | Sigue la demostración visual, formula en papel un problema sencillo de 2 productos y verifica qué restricción es activa y cuánto vale su precio sombra. |
| **3. Aplicación guiada (Actividad 2)** | 35 min | Facilita la Actividad 2 (*Del tablero de costes al precio sombra*), asesora a los grupos en el planteamiento de restricciones y valida cálculos en plenario. | En equipos de 3 personas, modela una asignación de presupuesto comercial o capacidad de planta, calcula el óptimo y decide sobre una ampliación de recurso usando el precio sombra. |
| **4. Pausa ejecutiva** | 15 min | Descanso breve y preparación de hojas de trabajo del caso *BioPack Ibérica, S.L.*. *(Incluido en los 240 min).* | Descansa y lee el contexto empresarial y las tablas del caso práctico. |
| **5. Microlearning II: Simulación Monte Carlo, traducción ejecutiva y sesgos** | 35 min | Expone los apartados 3.3 y 3.4: falacia del promedio, lectura de histogramas/percentiles P10-P50-P90, mapa de herramientas, *Last Mile* y sesgos/ley de Goodhart. | Interpreta un gráfico de distribución simulada (EBITDA con cola de pérdidas), identifica un riesgo de sesgo en un ejemplo real y formula contramedidas. |
| **6. Análisis de caso práctico en equipos** | 50 min | Presenta el caso *BioPack Ibérica, S.L.*, supervisa la resolución exacta del mix óptimo de producción, el cálculo de precios sombra y la interpretación de la simulación Monte Carlo. | Resuelve los vértices óptimos de producción, compara frente a la regla intuitiva de dirección, decide sobre compra extra de bio-resina y horas extra, y diseña cobertura ante riesgo P10 negativo. |
| **7. Discusión guiada y Comité de Dirección** | 25 min | Modera la presentación de decisiones de los equipos, cuestiona supuestos del modelo (¿qué pasa si falla la demanda o cambian los contratos?) y aborda riesgos de adopción organizativa. | Defiende su plan trimestral en 3 minutos, justifica el uso de precios sombra y explica cómo comunicará el cambio de mix a Fábrica y Ventas sin generar rechazo. |
| **8. Síntesis, cierre del Bloque 2 y transferencia** | 15 min | Sintetiza el recorrido completo del Bloque 2 (Microeconomía $\rightarrow$ Regresión $\rightarrow$ Business Analytics), presenta la Actividad 3 y enlaza con el Bloque 3 (*Operations Strategy*). | Completa el test ejecutivo breve de cierre, realiza la autoevaluación y define el caso de uso analítico que diseñará para su empresa. |
| **TOTAL** | **240 min** | — | — |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): La trampa del margen unitario y la falacia del promedio
- **Objetivo:** Experimentar en primera persona dos sesgos directivos que justifican la analítica prescriptiva y la simulación: priorizar por margen unitario ignorando restricciones y planificar con promedios ignorando asimetrías.
- **Instrucciones para el alumnado:**
  1. *Reto A (4 min):* Un taller digital tiene 100 horas de impresora 3D industrial esta semana. Puede fabricar **Pieza X** (margen 60 €, consume 4 h) o **Pieza Y** (margen 40 €, consume 2 h), con demanda suficiente para ambas. ¿Cuál priorizarías intuitivamente y cuánto margen total obtienes eligiendo X frente a Y?
  2. *Reto B (4 min):* Tu proyecto consta de 3 tareas secuenciales independientes cuyo plazo estimado "medio" es de 10 días cada una, pero cada tarea tiene un 50 % de probabilidad de durar 8 días y un 50 % de durar 12 días (o bien un riesgo asimétrico de retraso a 16 días). ¿Cuál es la probabilidad aproximada de entregar a tiempo si comprometes una fecha basada solo en la suma de promedios?
  3. Contrastad las respuestas en plenario.
- **Materiales necesarios:** Diapositiva del reto, calculadora y herramienta de sondeo rápido.
- **Tiempo estimado:** 15 minutos (8 min resolución, 7 min debate guiado).
- **Rol del formador:** Destacar que en el Reto A, elegir Pieza Y genera **2.000 €** ($50 \times 40$ €) frente a **1.500 €** ($25 \times 60$ €) de la Pieza X (+33 % más margen), y explicar por qué en el Reto B las asimetrías convierten el "promedio" en una promesa casi segura de retraso.
- **Producto o entregable esperado:** Resolución numérica anotada en la ficha y regla personal de decisión ante cuellos de botella.
- **Criterios de éxito:** El alumnado calcula el margen por hora de cuello de botella (20 €/h vs. 15 €/h) y explica con sus palabras por qué la falacia del promedio subestima el riesgo operativo.

### Actividad 2 (Aplicación): Formulación de optimización y decisión mediante precio sombra
- **Objetivo:** Formular matemáticamente un problema de asignación de presupuesto/capacidad con dos restricciones, hallar su solución óptima e interpretar el precio sombra de cada recurso.
- **Instrucciones para el alumnado:**
  1. En equipos de 3 personas, recibid la Ficha T3-01 con el caso breve de una agencia de marketing digital que asigna horas de *Consultoría SEO* ($X$) y *Campañas Paid Media* ($Y$) con dos restricciones: horas de analistas sénior disponibles y presupuesto de herramientas/cuentas.
  2. Formulad explícitamente: (a) variables de decisión, (b) función objetivo de margen total, y (c) sistema de inecuaciones de restricciones.
  3. Resolved el óptimo (gráficamente en cuadrícula o usando Excel Solver) y determinad: qué recurso es cuello de botella, qué recurso tiene holgura y cuál es el salario máximo por hora que compensaría pagar por un analista *freelance* adicional (precio sombra).
- **Materiales necesarios:** Ficha de Trabajo T3-01, papel cuadriculado o Microsoft Excel con complemento Solver activado.
- **Tiempo estimado:** 35 minutos (25 min en grupo, 10 min verificación conjunta).
- **Rol del formador:** Revisar que todos los grupos plantean las unidades homogéneamente y ayudar a interpretar el informe de sensibilidad de Solver sin jerga innecesaria.
- **Producto o entregable esperado:** Planteamiento matemático completo, solución óptima verificada y decisión fundamentada de contratación *freelance*.
- **Criterios de éxito:** Planteamiento sin errores de signo ni unidades, identificación exacta del punto óptimo y decisión correcta comparando el coste del recurso extra frente a su precio sombra.

### Actividad 3 (Transferencia a la realidad laboral): Hoja de ruta de caso de uso analítico y auditoría de sesgos en mi empresa
- **Objetivo:** Diseñar una propuesta realista de iniciativa de *Business Analytics* (predictiva, prescriptiva o de simulación) para la organización del participante, incorporando gobierno, adopción y mitigación de sesgos.
- **Instrucciones para el alumnado:**
  1. Identifica una decisión recurrente y de impacto económico relevante en tu empresa (asignación de turnos, mix de cartera, stock de seguridad, presupuestos de canales o evaluación de proyectos con incertidumbre).
  2. Completa la plantilla *Lienzo de Decisión Analítica y Gobierno del Modelo* (Sección 8): define el peldaño analítico objetivo, los datos necesarios y su calidad actual, las variables/restricciones clave (o variables inciertas si es simulación), la herramienta proporcionada al tamaño de tu pyme y el impacto esperado en P&L.
  3. Incluye una sección específica de **Auditoría de Sesgos y Última Milla**: identifica 2 sesgos o riesgos de ley de Goodhart posibles y 2 acciones concretas para asegurar que el equipo operativo adopte la herramienta.
- **Materiales necesarios:** Plantilla *Lienzo de Decisión Analítica y Gobierno del Modelo*.
- **Tiempo estimado:** 15 minutos de arranque en aula + 60 minutos de elaboración asíncrona (entrega en 7 días).
- **Rol del formador:** Evaluar la proporcionalidad tecnológica (evitar "matar moscas a cañonazos"), la claridad del vínculo con la cuenta de resultados y la solidez del plan de mitigación de sesgos.
- **Producto o entregable esperado:** Propuesta ejecutiva de 2 páginas lista para presentar en comité de dirección.
- **Criterios de éxito:** Problema bien delimitado, elección justificada entre optimización/simulación/predicción, métricas de éxito realistas y salvaguardas explícitas frente a sesgos y resistencia al cambio.

---

## 6. Caso práctico

### Caso: BioPack Ibérica, S.L. — Optimización del mix productivo y gestión probabilística del riesgo

#### Contexto empresarial
**BioPack Ibérica, S.L.** es una pyme industrial española en proceso de transformación digital que fabrica envases compostables de última generación para alimentación y comercio electrónico. Cuenta con cuadros de mando descriptivos en Power BI, pero sufre un problema crónico cada trimestre: sus líneas de termoformado trabajan al límite de capacidad, la fábrica prioriza los productos de "mayor margen por lote" y, aun así, el EBITDA trimestral es inferior al presupuestado y sufre fuertes sobresaltos cuando sube el precio internacional de la bio-resina PLA.

#### Situación o problema
Para el próximo trimestre, el comité de dirección debe decidir cuántos lotes producir de sus dos familias principales —**`EcoTray Pro` (Producto A)** y **`SmartBox E-com` (Producto B)**— respetando dos restricciones críticas (horas de máquina termoformadora y suministro asignado de bio-resina PLA) y los compromisos mínimos firmados con clientes clave. Además, el director de operaciones tiene dos ofertas sobre la mesa para ampliar recursos:
- **Oferta 1 (Proveedor alternativo de PLA):** Suministrar hasta **500 kg adicionales** de bio-resina PLA con un sobrecoste de **+4,50 €/kg** respecto al coste estándar.
- **Oferta 2 (Turno extra de fin de semana en termoformado):** Añadir hasta **300 horas adicionales** de máquina con un sobrecoste laboral y energético de **+14,00 €/hora**.

Por último, el director financiero advierte que el coste real de la bio-resina PLA y la tasa de merma son inciertos, por lo que ha ejecutado una **simulación de Monte Carlo de 10.000 escenarios** (considerando costes fijos trimestrales de **62.000 €**) para medir el riesgo real de entrar en pérdidas.

#### Datos disponibles

**Tabla 1. Parámetros técnicos, comerciales y restricciones trimestrales**

| Parámetro | Producto A (`EcoTray Pro`) | Producto B (`SmartBox E-com`) | Disponibilidad / Límite trimestral |
|---|---:|---:|---:|
| **Margen de contribución unitario (base)** | 45,00 €/lote | 60,00 €/lote | Maximizar $Z = 45A + 60B$ |
| **Consumo de máquina termoformadora** | 2 horas/lote | 4 horas/lote | Máximo **4.000 horas** |
| **Consumo de bio-resina PLA** | 4 kg/lote | 3 kg/lote | Máximo **6.000 kg** |
| **Compromiso mínimo contractual** | 400 lotes | 200 lotes | $A \ge 400$; $B \ge 200$ |
| **Demanda máxima estimada trimestral** | 1.600 lotes | 900 lotes | $A \le 1.600$; $B \le 900$ |
| **Costes fijos trimestrales de planta y estructura** | — | — | **62.000 €** |

*(Regla intuitiva habitual de dirección hasta hoy: fabricar primero el mínimo contractual de A = 400 lotes y dedicar el resto de horas de máquina al Producto B, por tener mayor margen unitario de 60 €/lote frente a 45 €/lote.)*

**Tabla 2. Resultados de la simulación de Monte Carlo (10.000 iteraciones sobre el mix óptimo; costes fijos = 62.000 €)**

*Variables inciertas modelizadas:* variación del coste del PLA (distribución triangular: mín. -5 %, más probable 0 %, máx. +22 % por riesgo de tensión en materias primas) y tasa de merma en termoformado (normal media 4 %, DT 1,5 %).

| Métrica de EBITDA trimestral | Modelo determinista (mix óptimo, valores base) | Simulación Monte Carlo — Sin mitigación | Simulación Monte Carlo — Con indexación parcial PLA + 500 kg contrato marco |
|---|---:|---:|---:|
| **EBITDA esperado / medio** | +16.000 € | +11.800 € | +14.600 € |
| **Mediana (P50)** | +16.000 € | +12.400 € | +14.900 € |
| **Escenario adverso (Percentil 10 — P10)** | — | **-4.200 €** | **+2.100 €** |
| **Escenario favorable (Percentil 90 — P90)** | — | +23.500 € | +24.800 € |
| **Probabilidad de EBITDA negativo ($P(\text{EBITDA} < 0)$)** | 0 % *(ilusorio)* | **18,5 %** | **4,2 %** |

#### Preguntas de análisis
1. Formula el modelo completo de optimización lineal (variables de decisión, función objetivo y todas las restricciones).
2. Compara el margen de contribución y el EBITDA de la **regla intuitiva actual de dirección** (priorizar Producto B) frente a la **solución óptima matemática** evaluando los vértices factibles del sistema. ¿Cuánto dinero está dejando BioPack sobre la mesa cada trimestre sin invertir en maquinaria?
3. Calcula los **precios sombra** exactos de 1 hora adicional de máquina termoformadora ($\lambda_1$) y de 1 kg adicional de bio-resina PLA ($\lambda_2$) en el óptimo. Con esos valores, decide justificadamente si conviene aceptar la **Oferta 1** (PLA extra a +4,50 €/kg) y/o la **Oferta 2** (horas extra de máquina a +14,00 €/hora).
4. Analiza la Tabla 2 de simulación de Monte Carlo: ¿por qué el EBITDA medio simulado sin mitigación (+11.800 €) es significativamente inferior al resultado determinista base (+16.000 €)? ¿Cómo justifica la tabla la negociación de cláusulas de indexación y cobertura de PLA?
5. ¿Qué límites del modelo y posibles sesgos o riesgos organizativos (por ejemplo, resistencia del equipo comercial acostumbrado a vender `SmartBox E-com` o ley de Goodhart si se les incentiva por facturación bruta) debe gestionar el director general al implantar el nuevo plan?

#### Tarea a realizar
Como Comité de Dirección de BioPack Ibérica, S.L., redactad un **Plan Operativo y Financiero Trimestral (1 página + tabla de decisiones)** que recoja:
1. Mix óptimo de producción ($A^*, B^*$), uso de recursos y mejora de EBITDA frente a la gestión intuitiva.
2. Decisión argumentada ("Aceptar / Rechazar") sobre las Ofertas 1 y 2 basada en precios sombra.
3. Estrategia de gestión de riesgo probabilístico (a partir de P10 y $P(\text{EBITDA} < 0)$) y dos medidas de gobernanza e incentivos para asegurar la ejecución en la *última milla*.

#### Posibles soluciones o criterios de análisis
- **1. Formulación del modelo lineal:**
  - Variables: $A =$ lotes de `EcoTray Pro`; $B =$ lotes de `SmartBox E-com`.
  - Función objetivo: Maximizar $Z = 45A + 60B$.
  - Restricciones:
    - Máquina: $2A + 4B \le 4.000$
    - Bio-resina PLA: $4A + 3B \le 6.000$
    - Contratos y demanda: $400 \le A \le 1.600$; $200 \le B \le 900$.
- **2. Comparativa regla intuitiva vs. solución óptima:**
  - *Regla intuitiva (priorizar B):* Con el mínimo de $A = 400$ lotes (consumen 800 h), quedan 3.200 h de máquina $\Rightarrow B = 3.200 / 4 = 800$ lotes (consumo de PLA = $4(400)+3(800) = 4.000 \le 6.000$ kg; sobran 2.000 kg). Margen total: $Z_{\text{intuitivo}} = 45(400) + 60(800) = 18.000 + 48.000 = \mathbf{66.000\text{ €}}$ (EBITDA = $66.000 - 62.000 = \mathbf{+4.000\text{ €}}$).
  - *Vértice de intersección (Máquina y PLA activas simultáneamente):*
    - De $2A + 4B = 4.000 \Rightarrow A = 2.000 - 2B$.
    - Sustituyendo en $4A + 3B = 6.000 \Rightarrow 4(2.000 - 2B) + 3B = 6.000 \Rightarrow 8.000 - 5B = 6.000 \Rightarrow \mathbf{B^* = 400\text{ lotes}}$, $\mathbf{A^* = 1.200\text{ lotes}}$.
    - Cumple límites ($400 \le 1.200 \le 1.600$ y $200 \le 400 \le 900$).
    - Margen total óptimo: $Z^* = 45(1.200) + 60(400) = 54.000 + 24.000 = \mathbf{78.000\text{ €}}$ (EBITDA base = $78.000 - 62.000 = \mathbf{+16.000\text{ €}}$).
  - *(Verificación del vértice alternativo $B = 200$ y PLA a tope: $4A + 600 = 6.000 \Rightarrow A = 1.350$, máquina = $3.500 \le 4.000$, $Z = 45(1.350)+60(200) = 72.750$ € $< 78.000$ €).*
  - *Hallazgo clave:* La optimización añade **+12.000 €/trimestre (+48.000 €/año)** de margen puro —multiplicando por 4 el EBITDA trimestral (de 4.000 € a 16.000 €)— sin gastar un euro en CAPEX, porque el Producto A genera **22,50 €/hora-máquina** ($45/2$) frente a **15,00 €/hora-máquina** ($60/4$) del Producto B.
- **3. Precios sombra y evaluación de Ofertas 1 y 2:**
  - En el óptimo, ambas restricciones físicas son activas:
    $$2\lambda_1 + 4\lambda_2 = 45 \quad \text{y} \quad 4\lambda_1 + 3\lambda_2 = 60$$
  - Multiplicando la primera por 2 ($4\lambda_1 + 8\lambda_2 = 90$) y restando la segunda: $5\lambda_2 = 30 \Rightarrow \mathbf{\lambda_2 = 6,00\text{ €/kg de PLA}}$.
  - Sustituyendo: $2\lambda_1 + 24 = 45 \Rightarrow \mathbf{\lambda_1 = 10,50\text{ €/hora de máquina}}$.
  - *(Comprobación de dualidad: $4.000 \times 10,50 + 6.000 \times 6,00 = 42.000 + 36.000 = 78.000$ €.)*
  - **Oferta 1 (500 kg extra de PLA a +4,50 €/kg):** **ACEPTAR** (verificando en Solver que los 500 kg están dentro del rango de validez del precio sombra; de hecho, con 6.500 kg de PLA y 4.000 h, el nuevo óptimo pasa a $A=1.400, B=300$ —ambos dentro de límites contractuales—, subiendo el margen bruto a $45(1.400)+60(300) = 81.000$ €, es decir $+3.000$ € exactos $= 500 \times 6,00$ €; tras pagar el sobrecoste de $500 \times 4,50 = 2.250$ €, aporta **+750 € de ganancia neta incremental**!).
  - **Oferta 2 (horas extra de máquina a +14,00 €/h):** **RECHAZAR**, porque el sobrecoste (+14,00 €/h) supera al precio sombra (10,50 €/h), destruyendo **-3,50 €** por cada hora extra contratada.
- **4. Lectura de la simulación de Monte Carlo:**
  - La brecha entre el determinista (+16.000 €) y la media simulada (+11.800 €) evidencia la **falacia del promedio**: la distribución del precio del PLA es fuertemente asimétrica al alza (puede subir hasta +22 % pero bajar solo -5 %), desplazando toda la cola izquierda hacia pérdidas ($P(\text{EBITDA} < 0) = 18,5\,\%$ y P10 = -4.200 €).
  - La política de indexación parcial + contrato marco de 500 kg reduce la probabilidad de pérdidas en más de cuatro veces (del 18,5 % al 4,2 %) y convierte el escenario adverso P10 en terreno positivo (+2.100 €), protegiendo la tesorería y la solvencia de la pyme.
- **5. Gobernanza y última milla:**
  - Alinear incentivos comerciales sobre **margen de contribución ajustado por uso de cuello de botella** en lugar de comisión por facturación o volumen de `SmartBox E-com` (evitando la ley de Goodhart).
  - Recalibrar el modelo mensualmente (evitar deriva ante cambios de precios de resina o demanda) y verificar que reducir `SmartBox E-com` de 800 a 400 lotes no daña relaciones estratégicas con grandes cuentas que compran ambos productos en paquete (riesgo de omitir restricciones comerciales blandas).

#### Preguntas de reflexión final
1. ¿Qué pasaría en BioPack si el cliente que compra `SmartBox E-com` exige comprar el doble de volumen como condición para seguir comprando `EcoTray Pro`? ¿Cómo se incorporaría esa realidad al modelo?
2. ¿Por qué muchos comités de dirección se resisten inicialmente a usar distribuciones probabilísticas (P10/P90) y prefieren una "cifra única" en Excel, y cómo puede un directivo vencer esa resistencia?
3. Si BioPack quisiera escalar esta optimización a 120 referencias y 6 líneas de planta, ¿qué salto de herramienta y gobierno del dato necesitaría?

---

## 7. Evaluación

### Evaluación diagnóstica breve (inicio de sesión, 5 min)
Cuatro preguntas cortas en sondeo digital o tarjeta:
1. Ordena de menor a mayor valor para la decisión: analítica prescriptiva, descriptiva y predictiva.
2. Si un producto deja 60 € de margen por unidad y otro 45 €, ¿es siempre mejor fabricar el de 60 € cuando la fábrica está al 100 %?
3. ¿Qué significa que el escenario P10 de un proyecto sea -10.000 €?
4. Cita un indicador (KPI) de tu empresa que alguna vez haya provocado comportamientos contraproducentes al convertirse en objetivo rígido.

### Evaluación formativa durante la sesión
- Verificación de resultados en la **Actividad 1** (cálculo del margen por hora de cuello de botella) y en la **Actividad 2** (formulación correcta del sistema lineal y uso del precio sombra).
- Revisión activa por parte del formador del planteamiento matemático y del análisis probabilístico durante el caso *BioPack Ibérica, S.L.*, asegurando que ningún equipo confunde el precio sombra con el coste total ni omite verificar el rango de validez.

### Evaluación sumativa al final
1. **Plan Operativo y Financiero del caso *BioPack Ibérica, S.L.* (50 %):** Exactitud en optimización ($A^*=1.200, B^*=400, Z^*=78.000$ €), precios sombra ($\lambda_1=10,50$ €, $\lambda_2=6,00$ €), decisiones sobre Ofertas 1 y 2 e interpretación estratégica de la simulación Monte Carlo.
2. **Test ejecutivo integrador de Bloque 2 (20 %):** 6 preguntas breves (10 min) sobre madurez analítica, optimización, precios sombra, falacia del promedio y sesgos/ley de Goodhart.
3. **Transferencia aplicada — Actividad 3 (30 %):** *Lienzo de Decisión Analítica y Gobierno del Modelo* aplicado a la empresa del participante (entrega asíncrona en 7 días).

### Rúbrica de evaluación

| Criterio | Insuficiente (1) | En desarrollo (2) | Adecuado (3) | Destacado (4) |
|---|---|---|---|---|
| **1. Formulación y resolución de optimización** | No identifica correctamente función objetivo o restricciones, o mantiene heurísticas intuitivas erróneas. | Plantea el modelo con imprecisiones menores en restricciones o calcula un vértice subóptimo. | Formula y resuelve correctamente el mix óptimo verificando todas las restricciones contractuales y de capacidad. | Resuelve con rigor exacto el óptimo y cuantifica con precisión el valor económico creado frente a la gestión intuitiva. |
| **2. Uso gerencial de precios sombra y sensibilidad** | Ignora el precio sombra o decide incorrectamente sobre la ampliación de recursos escasos. | Calcula el precio sombra pero comete errores al compararlo con el sobrecoste de las ofertas. | Calcula e interpreta correctamente los precios sombra para aceptar/rechazar ampliaciones de recursos. | Comprueba explícitamente el rango de validez del precio sombra y traduce el análisis dual en criterios claros de inversión y compras. |
| **3. Análisis de incertidumbre y simulación** | Confía únicamente en el escenario determinista base e ignora la volatilidad de las variables. | Reconoce que existe riesgo en la simulación, pero interpreta de forma imprecisa P10 o probabilidad de pérdida. | Explica la falacia del promedio e interpreta con acierto P10, P50, P90 y $P(\text{EBITDA} < 0)$ para recomendar cobertura. | Integra optimización y simulación en una política coherente de gestión del riesgo financiero, cláusulas contractuales y protección de caja. |
| **4. Traducción ejecutiva, límites y sesgos** | Presenta cifras técnicas aisladas sin plan de adopción ni análisis de sesgos o incentivos. | Menciona algún riesgo general de adopción o datos pero sin medidas concretas de mitigación. | Traduce los resultados a decisiones claras por área e identifica riesgos reales de datos, sesgos o ley de Goodhart. | Diseña un plan completo de *última milla* (incentivos alineados, revisión humana, recalibración y salvaguardas ético-legales). |

### Actividad de autoevaluación o reflexión
Reflexión escrita de cierre de tema y de bloque (4 minutos — *Brújula del Directivo Analítico*):
- **Norte (propósito):** ¿Qué decisión crítica de mi empresa debería pasar este año de "intuitiva/descriptiva" a "predictiva o prescriptiva"?
- **Oeste (cuello de botella):** ¿Qué recurso escaso real limita hoy el crecimiento de mi negocio y cuánto pagaríamos por ampliarlo?
- **Este (riesgo oculto):** ¿En qué presupuesto o proyecto estamos aplicando la falacia del promedio?
- **Sur (ancla ética y cultural):** ¿Qué sesgo o efecto de la ley de Goodhart vigilaré activamente en nuestros KPIs?

---

## 8. Materiales y recursos

### Guion de diapositivas estructurado (slide por slide)

| N.º | Título de la diapositiva | Contenido visual y mensaje clave | Tiempo estimado |
|---:|---|---|---:|
| 1 | Portada — Business Analytics | Título, Bloque 2 (Tema 3/3), cierre del bloque cuantitativo y pregunta disparadora: *¿Por qué tener mejores gráficos no garantiza tomar mejores decisiones?* | 3 min |
| 2 | Diagnóstico inicial y Actividad 1 | Reto A (*Pieza X vs. Pieza Y*) y Reto B (*Plazos secuenciales*): demostración inmediata de cuello de botella y falacia del promedio. | 12 min |
| 3 | La escalera de madurez analítica | Gráfico de 4 peldaños (Descriptiva $\rightarrow$ Diagnóstica $\rightarrow$ Predictiva $\rightarrow$ Prescriptiva) con ejemplos concretos en pymes. | 10 min |
| 4 | Anatomía de un modelo de optimización | Esquema visual: Variables de decisión + Función objetivo + Restricciones $\rightarrow$ Región factible y vértice óptimo. | 12 min |
| 5 | Cuellos de botella y precio sombra | Gráfico de dos restricciones en plano cartesiano, holgura vs. restricción activa e interpretación en euros del *shadow price*. | 10 min |
| 6 | Demo rápida en Excel Solver | Captura paso a paso de configuración de Solver y lectura del *Informe de Sensibilidad* (sin código). | 8 min |
| 7 | Actividad 2: Formulación y precio sombra | Enunciado visual de la agencia digital y temporizador para trabajo en equipos. | 5 min |
| 8 | La falacia del promedio (*Flaw of Averages*) | Ilustración intuitiva del río de profundidad media y por qué las asimetrías sesgan el presupuesto determinista. | 8 min |
| 9 | Simulación de Monte Carlo para directivos | Diagrama *Inputs probabilísticos $\rightarrow$ 10.000 escenarios $\rightarrow$ Histograma con P10, P50, P90 y umbral rojo de pérdidas*. | 12 min |
| 10 | Mapa de software y la *Última Milla* | Tabla de herramientas según madurez de pyme (Excel Solver, BI, Python/R) + claves de *data storytelling* ejecutivo. | 8 min |
| 11 | Límites, deriva y sesgos de la analítica | Cuatro alertas críticas: sesgo de selección, *data drift*, ley de Goodhart y necesidad de *human-in-the-loop* y cumplimiento legal. | 10 min |
| 12 | Caso práctico: BioPack Ibérica, S.L. | Tablas de parámetros productivos, ofertas de recursos extra y resultados de simulación Monte Carlo. | 7 min |
| 13 | Cierre del Bloque 2 y puente al Bloque 3 | Mapa integrador *Microeconomía $\rightarrow$ Regresión $\rightarrow$ Business Analytics $\rightarrow$ Operations Strategy* + instrucciones de Actividad 3. | 5 min |

### Ficha de trabajo
**Ficha T3-01: Taller de optimización y precio sombra (Agencia Digital)**
- Enunciado numérico con 2 servicios ($X, Y$), 2 restricciones (horas de analistas sénior y presupuesto de licencias/cuentas), cuadrícula para representación gráfica, guía rápida de celdas para Excel Solver y 3 preguntas de decisión sobre contratación *freelance* a tarifa horaria.

### Plantilla o herramienta práctica replicable
**Plantilla: Lienzo de Decisión Analítica y Gobierno del Modelo (1 página)**

| Dimensión | Definición aplicada a tu empresa |
|---|---|
| **1. Decisión recurrente y dueño de negocio** | Qué decisión se toma, con qué frecuencia y quién responde de su P&L |
| **2. Peldaño analítico objetivo** | [ ] Descriptiva · [ ] Predictiva · [ ] Optimización · [ ] Simulación Monte Carlo |
| **3. Formulación esencial** | Función objetivo y restricciones clave *(o variables inciertas y umbral crítico de riesgo)* |
| **4. Datos y ecosistema de software** | Fuentes de datos disponibles, brechas de calidad y herramienta elegida (Excel Solver / BI / Python) |
| **5. Valor económico estimado** | Impacto esperado en margen, caja, capital circulante o reducción de riesgo (P10) |
| **6. Auditoría de sesgos y deriva** | Posibles sesgos de datos, riesgo de ley de Goodhart y frecuencia de recalibración |
| **7. Plan de *Última Milla* (adopción)** | Cambios en incentivos, formación del equipo y punto de control humano (*human-in-the-loop*) |

### Lecturas o recursos recomendados
- Albright, S. C., & Winston, W. L. — *Business Analytics: Data Analysis and Decision Making* (capítulos de programación lineal, análisis de sensibilidad y simulación de Monte Carlo en hojas de cálculo).
- Savage, S. L. — *The Flaw of Averages: Why We Underestimate Risk in the Face of Uncertainty* (lectura ejecutiva de referencia sobre simulación y falacia del promedio).
- Davenport, T. H., & Harris, J. G. — *Competing on Analytics* (enfoque estratégico sobre cómo construir capacidades analíticas y cultura de decisión basada en datos).

### Vídeos, artículos y fuentes adicionales *(validar antes de utilizar en sesión)*
> **Nota de validación docente:** Todos los artículos, herramientas externas, guías de software y referencias normativas indicados a continuación deben revisarse y verificarse en cuanto a vigencia, accesibilidad y licencias antes de impartirse.
- Artículos de *Harvard Business Review* y *MIT Sloan Management Review* sobre *The Last Mile Problem in Analytics* y gestión de sesgos algorítmicos *(verificar acceso y edición vigente)*.
- Guías oficiales de Microsoft sobre activación y uso del complemento gratuito *Solver* en Excel y ejemplos de simulación en hojas de cálculo *(verificar versión de Office del alumnado)*.
- Textos y resúmenes oficiales sobre el Reglamento Europeo de Inteligencia Artificial (*EU AI Act*) y guías de la Agencia Española de Protección de Datos (AEPD) sobre tratamientos automatizados *(verificar estado de aplicación vigente en la fecha de impartición)*.

### Glosario de términos clave

| Término | Definición ejecutiva |
|---|---|
| **Analítica descriptiva** | Conjunto de técnicas e indicadores que resumen y visualizan el comportamiento histórico y actual del negocio. |
| **Analítica predictiva** | Uso de modelos estadísticos o algorítmicos para estimar valores o probabilidades de eventos futuros. |
| **Analítica prescriptiva** | Modelización matemática (optimización y simulación) orientada a recomendar directamente la mejor decisión posible bajo restricciones. |
| **Deriva de datos (*data drift*)** | Deterioro gradual de la fiabilidad de un modelo cuando las condiciones reales del mercado cambian respecto a los datos con los que fue calibrado. |
| **Falacia del promedio** | Sesgo que ocurre al evaluar planes inciertos usando únicamente valores medios, subestimando riesgos asimétricos y cuellos de botella. |
| **Función objetivo** | Expresión cuantitativa del resultado que la dirección busca maximizar (beneficio, margen) o minimizar (coste, tiempo, riesgo) en un modelo de optimización. |
| **Holgura (*slack*)** | Cantidad no utilizada de un recurso o restricción en la solución óptima; implica un precio sombra igual a cero. |
| **Ley de Goodhart** | Fenómeno por el cual una métrica pierde su utilidad diagnóstica en cuanto se convierte en objetivo rígido de incentivos. |
| **Precio sombra (*shadow price*)** | Mejora marginal en la función objetivo obtenida al disponer de una unidad adicional de un recurso que actúa como cuello de botella, dentro de su rango de validez. |
| **Simulación de Monte Carlo** | Método que ejecuta miles de escenarios aleatorios a partir de distribuciones de probabilidad para cuantificar el rango completo de resultados y probabilidades de riesgo (P10, P50, P90). |

---

## 9. Adaptaciones

### Sesión presencial
- Realizar el trazado gráfico del problema de la Actividad 2 y del caso *BioPack Ibérica* sobre rotafolios con cuadrícula antes de proyectar la verificación en Excel Solver, para que el alumnado visualice físicamente la región factible y los vértices óptimos.
- Ejecutar una micro-simulación en vivo en Excel (usando fórmulas sencillas `ALEATORIO()` y tabla de datos de 1.000 filas) proyectada en pantalla grande para desmitificar Monte Carlo en menos de 4 minutos.
- En el debate del caso, pedir a un equipo que asuma el rol de *Director Comercial incentivado por volumen* y a otro el de *Director de Operaciones/CFO*, evidenciando en vivo la tensión organizativa de la *última milla*.

### Sesión online síncrona
- Entregar una plantilla de Excel/Google Sheets preconfigurada para el caso *BioPack Ibérica* (con una pestaña de cálculo manual de vértices y una pestaña opcional lista para *Solver* / extensión *OpenSolver*) para que todos los participantes puedan experimentar incluso si no tienen permisos de instalación en sus portátiles corporativos.
- Utilizar pizarras colaborativas (Miro/Mural) durante los *breakout rooms* para completar el cuadro de decisiones del caso (Mix óptimo, Ofertas 1 y 2, Gestión del P10 y Plan de adopción).
- Intercalar sondeos rápidos sobre precios sombra y ley de Goodhart cada 15–20 minutos para mantener ritmo ejecutivo y participación activa.

### Sesión asíncrona
- Dividir la exposición en 4 píldoras de vídeo de 10–12 minutos (Madurez analítica, Optimización y precio sombra, Simulación Monte Carlo, Software y sesgos) más un videotutorial práctico de 7 minutos mostrando la resolución de *BioPack Ibérica* en Excel Solver.
- Configurar una actividad autoevaluable secuencial para el caso *BioPack*: el alumnado introduce primero su cálculo de $A^*$, $B^*$, $Z^*$, $\lambda_1$ y $\lambda_2$, recibe retroalimentación automática inmediata y luego redacta su nota ejecutiva sobre la simulación y la última milla.
- Habilitar una revisión entre pares en el foro de la Actividad 3, donde cada participante evalúa el *Lienzo de Decisión Analítica* de un compañero identificando un sesgo potencial o una mejora de adopción organizativa.

---

## 10. Conexión con el programa

- **Qué conocimientos previos refuerza:** Cierra e integra todo el **Bloque 2 (*Economía, analítica cuantitativa y decisiones*)**: toma los conceptos de margen de contribución, capacidad y coste marginal del **Tema 1 (*Microeconomics for Managers*)** y los modelos predictivos e inferencia bajo incertidumbre del **Tema 2 (*Regression Analysis for Business*)**, combinándolos en motores prescriptivos de optimización y simulación.
- **Qué competencias desarrolla:** Pensamiento sistémico bajo restricciones, asignación óptima de recursos, gestión cuantitativa del riesgo probabilístico, gobierno de iniciativas de datos y espíritu crítico frente a sesgos algorítmicos y métricas perversas.
- **Conexión con el tema anterior y posterior del EMBA:**
  - *Tema anterior:* **Bloque 2, Tema 2 (*Regression Analysis for Business*)** enseña a predecir demanda y costes con intervalos de confianza; este tema transforma esas previsiones e incertidumbres en planes óptimos de producción, presupuesto y cobertura.
  - *Tema posterior:* **Bloque 3, Tema 1 (*Operations Strategy*)** aplica directamente los principios de cuellos de botella, capacidad, asignación de recursos y trade-offs operativos aquí modelizados al diseño estratégico de la cadena de valor, procesos, inventarios y competitividad operacional. Asimismo, los límites, la deriva y los sesgos analizados en el apartado 3.4 preparan el terreno directo para el **Bloque 8, Tema 1 (*Artificial Intelligence for Business y Responsabilidad Algorítmica*)**.
- **Evidencia de aprendizaje que dejará el alumnado:** (1) Plan Operativo y Financiero cuantificado del caso *BioPack Ibérica, S.L.*, (2) resultado del test ejecutivo integrador del Bloque 2 y (3) *Lienzo de Decisión Analítica y Gobierno del Modelo* diseñado para su propia organización.

---

## Siguientes pasos para el formador

1. **Verificar compatibilidad de Solver:** Enviar 72 horas antes una breve guía de 3 pasos para activar el complemento gratuito *Solver* en Excel (o la extensión *OpenSolver* en Google Sheets) y preparar una hoja de respaldo con resolución por vértices para alumnos sin acceso a complementos.
2. **Preparar el archivo demostrativo de Monte Carlo:** Tener listo un libro sencillo de Excel que muestre en directo cómo cambia el histograma de EBITDA y el P10 de *BioPack Ibérica* al introducir la asimetría del precio del PLA.
3. **Validar referencias legales y técnicas:** Comprobar el estado vigente del Reglamento Europeo de IA (*AI Act*) y las fuentes recomendadas de la Sección 8 antes de compartir la presentación.
4. **Conectar explícitamente el cierre del Bloque 2 con el Bloque 3:** Destacar al final del debate cómo el precio sombra de la máquina termoformadora en *BioPack* anticipa el análisis de capacidad y cuellos de botella que el alumnado profundizará en **Bloque 3, Tema 1 (*Operations Strategy*)**.
5. **Revisar y consolidar las entregas de la Actividad 3:** Proporcionar retroalimentación específica sobre la proporcionalidad de herramientas y los riesgos de ley de Goodhart en los proyectos reales del alumnado, guardando los mejores casos como insumos para el proyecto integrador del programa (*Bloque 8, Tema 3*).
