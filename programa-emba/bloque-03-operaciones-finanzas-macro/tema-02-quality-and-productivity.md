# Tema 2. Quality and Productivity

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Tema 2. Quality and Productivity (Calidad y Productividad) |
| **Bloque y posición dentro del programa** | Bloque 3: Operaciones, contabilidad, finanzas corporativas y macroeconomía — Tema 2 de 5 (Tema 8 de 26 del Executive MBA) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Directivos con experiencia, gerentes, mandos intermedios y emprendedores en organizaciones de productos o servicios en transformación digital |
| **Nivel de dificultad** | Avanzado / Directivo (base previa intermedia en gestión empresarial y estadística aplicada) |
| **Prerrequisitos** | Conceptos de capacidad y frontera eficiente (Bloque 3, Tema 1) y nociones básicas de varianza y distribución normal (Bloque 2, Temas 2 y 3) |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado será capaz de diagnosticar y rediseñar procesos productivos y de servicio para equilibrar oferta y demanda, elevar la productividad multifactorial, reducir los tiempos de espera gestionando la variabilidad y aplicar control estadístico de procesos y mejora continua orientada al cliente. |

---

## 2. Objetivos de aprendizaje

Al concluir esta unidad didáctica, el alumnado será capaz de:

1. **Analizar** el flujo de un proceso empresarial aplicando la Ley de Little y el análisis de cuellos de botella para alinear la capacidad de oferta con la demanda real *(Nivel de Bloom: Analizar)*.
2. **Calcular** e interpretar indicadores de productividad parcial y productividad multifactorial, evitando suboptimizaciones locales que deterioran la rentabilidad global *(Nivel de Bloom: Aplicar)*.
3. **Evaluar** el impacto no lineal de la utilización y la variabilidad sobre los tiempos de espera y congestión mediante principios de teoría de colas *(Nivel de Bloom: Evaluar)*.
4. **Aplicar** fundamentos conceptuales de Control Estadístico de Procesos (SPC) y capacidad de proceso ($C_p$, $C_{pk}$ y enfoque Six Sigma/DMAIC) para distinguir variación común de variación especial y reducir el coste de la no calidad *(Nivel de Bloom: Aplicar)*.
5. **Diseñar** un plan ejecutivo de mejora continua (Lean / Kaizen / DMAIC) que integre herramientas digitales para reducir simultáneamente variabilidad, desperdicios y tiempos de ciclo *(Nivel de Bloom: Crear)*.

---

## 3. Contenidos esenciales

### 3.1. Alineación entre oferta y demanda, análisis de flujos y productividad total

#### Explicación breve y clara
En operaciones, producir por encima de la demanda genera inventarios obsoletos o capacidad ociosa; producir por debajo destruye ingresos y fidelidad. Para alinear oferta y demanda en el corto plazo, la dirección necesita dominar el **análisis de flujo de procesos**: identificar el **cuello de botella** (el recurso con menor capacidad efectiva, que fija la tasa máxima de salida o *throughput* de todo el sistema) y aplicar la **Ley de Little** ($L = \lambda \cdot W$), que vincula el trabajo en curso o inventario ($L$), la tasa de flujo ($\lambda$) y el tiempo medio de permanencia en el sistema ($W$). Al mismo tiempo, la **productividad** debe medirse no solo de forma parcial (unidades por hora de mano de obra), sino como **productividad multifactorial o total** (valor producido dividido entre la suma de todos los insumos: trabajo, capital, energía, materiales y tecnología), evitando "falsas mejoras" que ahorran personal a costa de disparar el gasto tecnológico o los defectos.

#### Conceptos clave
- Tasa de flujo (*throughput*, $R$ o $\lambda$), inventario en curso (*WIP*, $L$) y tiempo de flujo (*flow time*, $W$).
- Ley de Little: $L = \lambda \cdot W$ (en estado estable).
- Cuello de botella (*bottleneck*) y Teoría de las Limitaciones (TOC).
- Productividad parcial frente a productividad multifactorial (TFP).
- Palancas de gestión de la demanda (precios dinámicos, citas previas, promociones valle) y de la oferta (turnos flexibles, polivalencia, subcontratación de picos).

#### Definiciones necesarias
- **Cuello de botella:** Etapa o recurso de un proceso cuya capacidad efectiva limita la capacidad máxima total del sistema completo.
- **Ley de Little:** Relación matemática universal para sistemas estables según la cual el inventario medio en el sistema ($L$) es igual a la tasa media de llegada o salida ($\lambda$) multiplicada por el tiempo medio de flujo ($W$).
- **Productividad multifactorial:** Cociente entre la producción válida generada (en unidades o valor monetario) y el coste agregado de todos los factores empleados para obtenerla.

#### Ejemplo práctico realista (pyme en transformación digital)
Una asesoría fiscal y contable digitalizada en Sevilla procesaba 1.200 declaraciones mensuales, pero sus clientes tardaban 14 días en recibir respuesta. El socio director pensaba contratar más administrativos de entrada de datos. Al mapear el flujo y aplicar la Ley de Little, descubrió que los administrativos tenían capacidad para 2.000 expedientes/mes, pero la revisión final de dos socios sénior (el cuello de botella) solo procesaba 1.200 expedientes/mes y acumulaba 560 expedientes en cola ($W = 560 / 40\text{ diarios} = 14\text{ días}$). Automatizando las validaciones rutinarias con reglas de software para los casos simples, liberó el cuello de botella, elevó el *throughput* un 35 % y bajó el tiempo de entrega a 4 días sin ampliar plantilla.

#### Errores frecuentes
- Invertir presupuesto en acelerar etapas que **no** son el cuello de botella (aumenta el coste y el trabajo en curso sin incrementar ni una sola unidad la salida total del negocio).
- Evaluar departamentos con métricas de productividad parcial que incentivan producir lotes grandes aunque nadie los demande o aunque generen reprocesos en el departamento siguiente.
- Ignorar los "tiempos de espera entre etapas", que suelen representar más del 80 % del tiempo total de ciclo en empresas de servicios y procesos administrativos.

#### Preguntas que el alumnado debería poder responder
1. Si una empresa reduce a la mitad el trabajo en curso (*WIP*) manteniendo constante la tasa de salida ($\lambda$), ¿qué ocurre exactamente con el tiempo medio de entrega ($W$) según la Ley de Little?
2. ¿Por qué mejorar la productividad laboral parcial puede reducir la productividad multifactorial de la empresa?
3. ¿Qué palancas digitales permiten suavizar los picos de demanda en empresas de servicios sin perder facturación?

---

### 3.2. Variabilidad, teoría de colas y gestión de tiempos de espera

#### Explicación breve y clara
Incluso cuando la capacidad media supera a la demanda media ($\lambda < \mu$), aparecen colas, retrasos y saturación siempre que existe **variabilidad** en las llegadas de clientes o en la duración del servicio. La **fórmula de aproximación de Kingman** ilustra de forma ejecutiva esta realidad para un servidor ($G/G/1$):

$$W_q \approx \left(\frac{CV_a^2 + CV_s^2}{2}\right) \cdot \left(\frac{\rho}{1 - \rho}\right) \cdot t_s$$

Donde $W_q$ es el tiempo medio de espera en cola, $CV_a$ y $CV_s$ son los coeficientes de variación ($\sigma / \text{media}$) de llegadas y tiempos de servicio, $\rho = \lambda/\mu$ es la utilización y $t_s$ es el tiempo medio de servicio. La lección directiva es crítica: el factor $\frac{\rho}{1-\rho}$ crece de forma **explosiva y no lineal** al acercarse la utilización al 100 % (pasar de 80 % a 95 % de utilización multiplica casi por 5 el tiempo de espera). Además, combinar recursos en una cola única (*pooling*) reduce drásticamente las esperas siempre que los servidores sean polivalentes y las tareas homogéneas.

#### Conceptos clave
- Variabilidad en llegadas ($CV_a$) y en tiempos de servicio ($CV_s$).
- Explosión exponencial de colas con utilización alta ($\rho \to 1$).
- Efecto de consolidación de recursos (*resource pooling*) y colas únicas frente a colas dedicadas.
- Triaje y segmentación de colas (*fast track* para tareas cortas y homogéneas).
- Psicología de la espera (esperas inciertas se perciben más largas que las informadas).

#### Definiciones necesarias
- **Coeficiente de variación ($CV$):** Medida adimensional de variabilidad relativa calculada como la desviación típica dividida entre la media ($\sigma / \mu$).
- **Utilización ($\rho$):** Proporción del tiempo disponible en que un recurso se encuentra ocupado procesando trabajo ($\lambda / \mu$ para un servidor; $\lambda / (c \cdot \mu)$ para $c$ servidores).
- ***Resource pooling*:** Integración de varios servidores y flujos de demanda en una cola común compartida para evitar que un servidor esté ocioso mientras otro acumula cola.

#### Ejemplo práctico realista (pyme en transformación digital)
Un *contact center* de soporte técnico SaaS en Madrid asignaba un agente dedicado a cada cartera de clientes. Algunos agentes estaban saturados ($\rho = 96\ \%$) con esperas de 35 minutos mientras otros estaban libres. Al implantar un sistema de enrutamiento omnicanal en cola única (*pooling*) con triaje previo mediante *chatbot* para separar consultas rápidas de contraseña (2 min) de incidencias técnicas complejas (25 min), redujo tanto $CV_s$ como la saturación desequilibrada, recortando el tiempo medio de espera de 24 a 3,5 minutos con el mismo equipo humano.

#### Errores frecuentes
- Exigir "ocupación del 95 %-100 %" a equipos de atención al cliente, cirugía, desarrollo TI o mantenimiento reactivo y sorprenderse luego por el colapso de los plazos.
- Aplicar *pooling* mezclando tareas extremadamente cortas y extremadamente largas sin triaje, lo cual dispara $CV_s$ y perjudica a todos los clientes.
- Intentar resolver un problema de variabilidad únicamente comprando más capacidad (costoso) en lugar de estandarizar procesos, programar citas o segmentar demandas.

#### Preguntas que el alumnado debería poder responder
1. Según la aproximación de Kingman, ¿cuáles son las tres únicas palancas matemáticas para reducir un tiempo de espera en cola?
2. ¿Por qué pasar de una utilización del 85 % al 95 % deteriora el servicio mucho más que pasar del 65 % al 75 %?
3. ¿En qué situaciones es preferible crear colas separadas (triaje) en lugar de una sola cola compartida (*pooling*)?

---

### 3.3. Control estadístico de calidad (SPC) y enfoque Six Sigma conceptual

#### Explicación breve y clara
La calidad moderna no consiste en inspeccionar defectos al final de la línea, sino en diseñar procesos estables y capaces de cumplir consistentemente las especificaciones del cliente. El **Control Estadístico de Procesos (SPC)** monitoriza métricas clave mediante gráficos de control con límites naturales situados habitualmente a $\pm 3\sigma$ respecto a la media histórica. Ello permite distinguir entre **variación por causa común** (ruido inherente al diseño del proceso, que solo mejora rediseñando el sistema) y **variación por causa especial** (evento anómalo o desajuste puntual, que exige intervención inmediata). Por su parte, la **capacidad de proceso** ($C_p$ y $C_{pk}$) compara la variabilidad natural del proceso (la "voz del proceso") con las tolerancias exigidas por el cliente (la "voz del cliente"). El enfoque **Six Sigma** persigue reducir la dispersión y centrar el proceso hasta alcanzar niveles de excelencia cercanos a 3,4 defectos por millón de oportunidades (DPMO), reduciendo drásticamente el **Coste de la Mala Calidad (COPQ)**.

#### Conceptos clave
- Voz del Cliente (VOC / límites de especificación LIE y LSE) frente a Voz del Proceso (límites de control LIC y LSC).
- Causas comunes frente a causas especiales de variación.
- Índices de capacidad de proceso: $C_p = \frac{\text{LSE} - \text{LIE}}{6\sigma}$ y $C_{pk} = \min\left(\frac{\text{LSE} - \mu}{3\sigma}, \frac{\mu - \text{LIE}}{3\sigma}\right)$.
- Defectos por Millón de Oportunidades (DPMO) y nivel Sigma.
- Costes de la calidad: prevención, evaluación, fallos internos y fallos externos (COPQ).

#### Definiciones necesarias
- **Control Estadístico de Procesos (SPC):** Conjunto de técnicas estadísticas y gráficos de control utilizados para vigilar la estabilidad de un proceso en tiempo real y detectar desviaciones antes de que generen defectos.
- **Índice $C_{pk}$:** Medida que evalúa simultáneamente la dispersión y el centrado de un proceso frente a los límites de especificación del cliente; en gestión industrial y de servicios avanzados suele tomarse $C_{pk} \ge 1,33$ como umbral mínimo de capacidad adecuada.
- **Coste de la Mala Calidad (COPQ):** Suma de los costes de fallos internos (mermas, reprocesos, repeticiones) y fallos externos (garantías, devoluciones, penalizaciones y pérdida de clientes) derivados de no hacer las cosas bien a la primera.

#### Ejemplo práctico realista (pyme en transformación digital)
Una pyme logística e-commerce en Toledo prometía entregas en $\le 48\ h$ (LSE = 48 h). Su plazo medio era de 36 horas, pero con una desviación típica de 9 horas ($C_{pu} = (48-36)/(3 \times 9) = 0,44$). Aunque la media parecía "excelente", casi un 9 % de los pedidos llegaban tarde, disparando llamadas a soporte y devoluciones. Al implantar sensores de lectura de código de barras en cada fase y gráficos de control diarios por ruta, detectaron causas especiales (dos delegaciones locales que acumulaban paquetes los jueves) y redujeron $\sigma$ de 9 h a 3 h ($C_{pu} = 1,33$), reduciendo las incidencias de entrega en más de un 80 %.

#### Errores frecuentes
- Gestionar exclusivamente por promedios ("nuestra media cumple el objetivo") ignorando la desviación típica que sufren los clientes reales.
- Reaccionar ante ruido aleatorio de causa común ajustando constantemente parámetros (*tampering* o sobreajuste), lo que en realidad aumenta la variabilidad del sistema.
- Confundir límites de control estadístico (comportamiento histórico del proceso) con límites de especificación (lo que el cliente exige).

> **Nota de verificación normativa:** Cuando la empresa opere en sectores regulados (sanidad, alimentación, automoción, aeroespacial o dispositivos médicos), los umbrales de calidad, trazabilidad, auditoría y certificaciones (por ejemplo, ISO 9001, ISO 13485, IATF 16949 o normativa sanitaria/APPCC) deben verificarse siempre conforme a la versión vigente de las normas y legislación sectorial aplicable antes de su implantación.

#### Preguntas que el alumnado debería poder responder
1. ¿Puede un proceso estar "estadísticamente bajo control" y, al mismo tiempo, ser "incapaz" de satisfacer al cliente? Explica por qué.
2. ¿Cuál es la diferencia práctica entre $C_p$ y $C_{pk}$, y qué decisión directiva orienta cada uno?
3. ¿Por qué invertir en prevención suele reducir el coste total de la calidad mucho más que reforzar las inspecciones finales?

---

### 3.4. Mejora continua: Lean, DMAIC y transformación digital operativa

#### Explicación breve y clara
La mejora continua convierte la calidad y la productividad en una capacidad organizativa permanente. Dos metodologías se complementan en la dirección de operaciones moderna: **Lean Management** (focalizado en eliminar los 7+1 desperdicios —sobreproducción, esperas, transporte, sobreprocesamiento, inventario, movimientos, defectos y talento desaprovechado— para acelerar el flujo) y **Six Sigma / DMAIC** (Definir, Medir, Analizar, Mejorar y Controlar, focalizado en reducir la variabilidad y los defectos con rigor estadístico). Hoy ambas se potencian mediante la **transformación digital**: minería de procesos (*process mining*), analítica en tiempo real, automatización robótica de procesos (RPA) e inteligencia artificial para mantenimiento predictivo o inspección visual automática. Sin embargo, la regla de oro ejecutiva permanece intacta: **digitalizar un proceso lleno de desperdicios solo produce desperdicios más rápido**.

#### Conceptos clave
- Ciclo **DMAIC** (Definir, Medir, Analizar, Mejorar, Controlar) y ciclo **PDCA** (Plan-Do-Check-Act).
- Principios Lean: valor desde el cliente, mapa de flujo de valor (VSM), flujo continuo, sistema *pull*, *poka-yoke* (a prueba de errores) y *SMED* (cambio rápido).
- *Kaizen* (mejora incremental diaria) frente a *Kaikaku* (rediseño radical).
- Sinergia Lean + Digitalización (*process mining*, RPA, IoT industrial, cuadros de mando en vivo).

#### Definiciones necesarias
- **DMAIC:** Metodología estructurada en cinco fases (Definir, Medir, Analizar, Mejorar y Controlar) empleada en proyectos de mejora de calidad y productividad basados en datos.
- ***Poka-yoke*:** Mecanismo físico o digital diseñado en un proceso para impedir que un error humano llegue a producirse o detectarlo de forma inmediata (por ejemplo, campos obligatorios validados automáticamente en un ERP).
- **Mapa de Flujo de Valor (VSM):** Representación visual del recorrido de materiales e información de extremo a extremo que separa actividades que añaden valor para el cliente de actividades sin valor añadido.

#### Ejemplo práctico realista (pyme en transformación digital)
Una empresa de instalación y mantenimiento de climatización industrial en Bilbao sufría un 18 % de segundas visitas porque los técnicos llegaban sin el repuesto adecuado o con datos incompletos del equipo. Antes de comprar un costoso software de IA, ejecutó un proyecto DMAIC de 8 semanas: mapeó el flujo de partes de trabajo (VSM), diseñó un formulario móvil con *poka-yoke* obligatorio (foto de placa del equipo + código de error antes de asignar visita) y estandarizó kits de furgoneta según el Pareto de averías. El porcentaje de resolución en primera visita (*First-Time Fix*) subió del 82 % al 94 %, elevando la productividad técnica y liberando capacidad para nuevos contratos.

#### Errores frecuentes
- Comprar tecnología de automatización o RPA antes de simplificar, estandarizar y depurar el proceso subyacente.
- Abandonar la fase **Controlar** del DMAIC: tras 3 meses de mejora brillante, el equipo vuelve a sus hábitos anteriores por falta de indicadores visibles, responsables claros y auditorías periódicas.
- Tratar la mejora continua como una iniciativa aislada del departamento de Calidad en lugar de implicar a mandos intermedios y personal de primera línea.

#### Preguntas que el alumnado debería poder responder
1. ¿Cómo se complementan Lean y Six Sigma frente a los problemas de velocidad y variabilidad?
2. ¿Por qué suele fallar la fase de "Controlar" en los proyectos de mejora operativa y qué mecanismos digitales o de gestión aseguran su sostenibilidad?
3. ¿Qué ejemplo concreto de *poka-yoke* digital podrías implantar esta semana en un proceso administrativo o comercial de tu empresa?

---

## 4. Metodología didáctica

Secuencia de aprendizaje de **4 horas (240 minutos)** en formato de taller ejecutivo aplicado:

| Fase | Tiempo | Qué hace el formador | Qué hace el alumnado |
|---|---:|---|---|
| **1. Apertura y activación** | 25 min | Presenta objetivos, lanza la evaluación diagnóstica rápida y facilita la Actividad 1 (detección de colas, cuellos de botella y desperdicios invisibles en sus empresas). | Responde el diagnóstico inicial y mapea en 5 minutos un proceso real saturado de su empresa identificando síntomas de espera y reprocesos. |
| **2. Exposición breve / Microlearning I** | 35 min | Explica los apartados 3.1 y 3.2 (Ley de Little, cuellos de botella, productividad multifactorial y fórmula de Kingman) con simulación en hoja de cálculo en vivo del salto de colas entre $\rho=75\ \%$ y $\rho=95\ \%$. | Observa el comportamiento no lineal de las colas, resuelve un microcálculo guiado de Ley de Little y contrasta su intuición con la matemática de procesos. |
| **3. Análisis de caso (Parte I: diagnóstico cuantitativo)** | 30 min | Introduce el caso **CliniDiag Digital, S.A.**, revisa los parámetros operativos y orienta el diagnóstico inicial de colas y calidad. | Analiza los datos de la unidad de Resonancia Magnética y Radiología de Barcelona, calculando utilización, espera actual ($W_q$) y capacidad de proceso ($C_{pu}$). |
| **4. Exposición breve / Microlearning II** | 35 min | Desarrolla los apartados 3.3 y 3.4 (SPC, causas comunes vs. especiales, $C_p/C_{pk}$, coste de la no calidad, Lean y DMAIC digital) con ejemplos visuales de gráficos de control. | Interpreta gráficos de control de ejemplo, identifica señales fuera de control y distingue cuándo ajustar vs. rediseñar un proceso. |
| **5. Actividad en equipo (Rediseño operativo del caso)** | 55 min | Acompaña a los equipos en la Actividad 2, valida cálculos de Kingman, $C_{pu}$ y productividad multifactorial, y cuestiona si realmente hace falta invertir 1,4 M€ en una segunda máquina. | Rediseña el flujo de CliniDiag Digital, recalcula esperas, capacidad de proceso, productividad multifactorial e impacto en margen, y prepara un plan DMAIC de 90 días. |
| **6. Discusión guiada y defensa ejecutiva** | 35 min | Modera la exposición de 3 equipos, compara decisiones (CapEx vs. Lean/Six Sigma digital) y profundiza en palancas de gestión del cambio con profesionales sanitarios/técnicos. | Defiende su propuesta ante el comité, debate alternativas de programación de citas y triaje, y extrae aprendizajes transferibles a servicios y manufactura. |
| **7. Síntesis, transferencia y cierre** | 25 min | Sintetiza los 5 principios clave de calidad y productividad, presenta la Actividad 3 (mini-proyecto DMAIC en la empresa propia) y coordina la evaluación sumativa y autoevaluación. | Completa el test rápido final, define el proceso candidato de su empresa para la Actividad 3 y rellena su ficha de reflexión. |
| **Total** | **240 min** | | |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Radiografía exprés de cuellos de botella y colas en tu negocio
- **Objetivo:** Reconocer en la práctica cotidiana la relación entre WIP, tiempos de espera, utilización y defectos en procesos propios.
- **Instrucciones para el alumnado:**
  1. Individualmente (7 min), elige un proceso recurrente de tu empresa con quejas de lentitud (facturación, soporte técnico, aprobación de ofertas, expedición logística o prestación de servicio).
  2. Estima aproximadamente: tasa de entrada semanal ($\lambda$), expedientes o pedidos abiertos en paralelo ($L$) y porcentaje estimado de tareas que requieren retrabajo por datos incompletos o errores.
  3. Aplica la Ley de Little ($W = L/\lambda$) para estimar el tiempo real de espera/flujo y compáralo con el tiempo real de "trabajo efectivo".
  4. Comparte el hallazgo en tríos (8 min) y elige el ejemplo más ilustrativo para compartir en abierto.
- **Materiales necesarios:** Ficha de radiografía de flujo (papel o formulario digital), calculadora de móvil.
- **Tiempo estimado:** 15 minutos (dentro de la Fase 1).
- **Rol del formador:** Recoger en pizarra 3 ejemplos reales mostrando la enorme brecha habitual entre tiempo de proceso (minutos/horas) y tiempo total de flujo (días/semanas).
- **Producto o entregable esperado:** Estimación cuantitativa básica de $\lambda$, $L$, $W$ y tasa de retrabajo de un proceso real.
- **Criterios de éxito:** Consistencia en las unidades de tiempo de la Ley de Little y correcta identificación del cuello de botella probable.

### Actividad 2 (Aplicación): Plan de choque de colas, calidad y productividad en CliniDiag Digital
- **Objetivo:** Aplicar fórmulas de colas (Kingman), capacidad de proceso ($C_{pu}$), productividad multifactorial y marco DMAIC para resolver una crisis de servicio evitando CapEx innecesario.
- **Instrucciones para el alumnado:**
  1. En equipos de 4-5 personas, analizad los datos del caso **CliniDiag Digital, S.A.** (Sección 6).
  2. Calculad la situación actual: utilización ($\rho$), tiempo medio de espera ($W_q$), capacidad de entrega de informes ($C_{pu}$), tasa DPMO y productividad multifactorial.
  3. Evaluad las dos propuestas de la dirección (A: comprar un segundo equipo de Resonancia Magnética por 1,4 M€ vs. B: rediseño operativo Lean + cita inteligente + plantilla digital de informes por 120 k€ de inversión única + 45 k€/año).
  4. Recalculad $W_q$, $C_{pu}$, productividad multifactorial y margen operativo bajo la Propuesta B y estructurad un plan de implantación en las 5 fases DMAIC.
- **Materiales necesarios:** Caso impreso/PDF, plantilla Excel de colas (Kingman), SPC y TFP.
- **Tiempo estimado:** 55 minutos + 35 minutos de debate plenario.
- **Rol del formador:** Guiar el cálculo sin resolverlo por ellos, verificar la interpretación correcta de $CV_a$, $CV_s$ y $C_{pu}$, y retar a los equipos sobre cómo evitar recaídas en la fase Controlar.
- **Producto o entregable esperado:** Cuadro comparativo cuantificado (Situación actual vs. Propuesta A vs. Propuesta B) y hoja de ruta DMAIC de 1 página.
- **Criterios de éxito:** Precisión matemática, argumentación financiera sólida del ahorro de CapEx, plan DMAIC con responsables y gráficos SPC de seguimiento definidos.

### Actividad 3 (Transferencia a la realidad laboral): Carta de Proyecto (*Project Charter*) DMAIC en tu organización
- **Objetivo:** Diseñar un proyecto real de mejora de calidad o productividad ejecutable en 60-90 días en la empresa del participante.
- **Instrucciones para el alumnado:**
  1. Selecciona un proceso de tu área donde la variabilidad, las colas o el coste de la no calidad (COPQ) erosionen el margen o la satisfacción del cliente.
  2. Cumplimenta la plantilla *Project Charter DMAIC Ejecutivo* (Sección 8): definición del problema cuantificado, métrica primaria (CTQ — *Critical to Quality*), hipótesis de causa raíz, plan de medición SPC, mejora propuesta (incluyendo al menos un *poka-yoke* digital) y mecanismo de control.
  3. Sube el documento (máximo 2 páginas) al campus virtual en un plazo de 7 días para revisión cruzada y *feedback* docente.
- **Materiales necesarios:** Plantilla *Project Charter DMAIC*, datos operativos reales (anonimizados si procede).
- **Tiempo estimado:** 10 minutos de arranque en aula + 60 minutos de trabajo asíncrono.
- **Rol del formador:** Evaluar el rigor de la métrica CTQ, la proporcionalidad entre inversión y retorno estimado y la claridad del mecanismo de control.
- **Producto o entregable esperado:** *Project Charter* DMAIC de 2 páginas listo para presentar a dirección general o comité operativo.
- **Criterios de éxito:** Problema medido con línea base numérica, diferenciación entre síntoma y causa raíz, cálculo realista del ahorro/beneficio y métricas de control sostenibles.

---

## 6. Caso práctico: CliniDiag Digital, S.A. — Saturación, variabilidad y coste de la no calidad

### Contexto empresarial
**CliniDiag Digital, S.A.** gestiona una red de 6 centros privados de diagnóstico médico por imagen y telemedicina en Madrid y Cataluña (190 empleados, facturación anual de 19,5 M€). Su centro insignia de Barcelona concentra la unidad de **Resonancia Magnética (RM) de alta resolución** y el servicio de informes radiológicos rápidos (promesa comercial a mutuas y pacientes privados: informe entregado en un máximo de **24 horas**).

### Situación o problema
En los últimos nueve meses, el centro de Barcelona sufre una grave crisis de servicio y rentabilidad:
- Los pacientes esperan retrasos acumulados enormes y la lista de espera se desborda al final de la jornada, provocando cancelaciones y caída del NPS de 68 a 34.
- Un **4,8 %** de las pruebas tienen que repetirse o generan incidencia grave (imágenes borrosas por preparación deficiente del paciente, datos clínicos incompletos o informes entregados fuera del plazo de 24 horas).
- El director médico solicita urgentemente comprar una **segunda máquina de Resonancia Magnética** (inversión de **1,4 M€**, más 260 k€/año en personal, amortización y mantenimiento). Antes de aprobar el CapEx, la directora general y el responsable de operaciones encargan una auditoría de procesos, colas y calidad.

### Datos disponibles

#### A. Parámetros actuales de la Unidad de RM Avanzada (Barcelona — 1 equipo, 10 h/día = 600 min/día, 250 días/año)

| Variable operativa | Situación actual | Con rediseño Lean + Digital (Propuesta B) |
|---|---:|---:|
| **Tasa de llegada media ($\lambda$)** | 18,8 pacientes/día (4.700 pruebas/año) | 20,8 pacientes/día (5.200 pruebas/año al captar demanda perdida) |
| **Tiempo medio en sala ($t_s$)** | 30 minutos/paciente | 25 minutos/paciente (preparación previa en cabina anexa + *checklist* digital) |
| **Capacidad diaria ($\mu = 600 / t_s$)** | 20,0 pacientes/día | 24,0 pacientes/día |
| **Coeficiente de variación llegadas ($CV_a$)** | 0,80 (retrasos, huecos y urgencias sin filtro) | 0,40 (cita inteligente con recordatorio SMS y bloques por protocolo) |
| **Coeficiente de variación servicio ($CV_s$)** | 0,60 (preparación irregular y repeticiones) | 0,30 (protocolos estandarizados y *poka-yoke* previo) |
| **Tasa de pruebas defectuosas / repetidas** | 4,8 % (48.000 DPMO) | 1,0 % (10.000 DPMO) |

#### B. Control estadístico de entrega de informes radiológicos (Promesa comercial: $\text{LSE} = 24\text{ horas}$)

| Parámetro del proceso de informes | Situación actual | Con Propuesta B (Triaje digital + plantilla estructurada) |
|---|---:|---:|
| **Tiempo medio de entrega ($\mu$)** | 19,5 horas | 12,0 horas |
| **Desviación típica ($\sigma$)** | 3,0 horas | 2,0 horas |
| **Límite Superior de Especificación (LSE)** | 24,0 horas | 24,0 horas |

#### C. Estructura económica anual de la Unidad de RM (para Productividad Multifactorial)

| Partida económica anual | Situación actual | Propuesta B (Rediseño Lean + Digital) |
|---|---:|---:|
| **Ingreso medio por diagnóstico válido facturable** | 180 €/diagnóstico | 180 €/diagnóstico |
| **Coste anual personal técnico y radiólogos** | 420.000 € | 420.000 € |
| **Amortización y mantenimiento equipo RM** | 240.000 € | 240.000 € |
| **Energía y consumibles clínicos** | 90.000 € | 105.000 € (+15 k€ por mayor volumen) |
| **Licencia software cita inteligente, triaje y plantillas** | 0 € | 30.000 €/año (más 120.000 € implantación única + obra cabina anexa) |
| **Coste total anual de insumos** | **750.000 €** | **795.000 €** |

*(Nota: Propuesta A —segunda máquina RM— requiere 1.400.000 € de CapEx inicial y 260.000 €/año adicionales de costes operativos y amortización, elevando el coste anual a 1.010.000 € sin resolver la variabilidad ni la calidad de los informes).*

### Preguntas de análisis
1. Calcula la utilización actual ($\rho$) y el tiempo medio de espera en cola ($W_q$) de la unidad de RM mediante la aproximación de Kingman. ¿Por qué el sistema está colapsado aunque $\lambda < \mu$?
2. Calcula el índice unilateral de capacidad del proceso de informes ($C_{pu} = (\text{LSE}-\mu)/(3\sigma)$) en la situación actual y en la Propuesta B. ¿Por qué el directivo que solo miraba la media de 19,5 horas creía erróneamente que cumplían la promesa de 24 horas?
3. Calcula la productividad multifactorial (en diagnósticos válidos por cada 1.000 € de insumo y en euros de ingreso válido por euro de insumo) y el margen operativo de la unidad en la situación actual frente a la Propuesta B.
4. Compara financieramente y estratégicamente la Propuesta A (comprar segunda máquina por 1,4 M€) frente a la Propuesta B (rediseño Lean + digitalización por 120 k€). ¿Cuándo tendría sentido plantear una segunda máquina?
5. Diseña la secuencia de las 5 fases DMAIC y define qué dos gráficos de control SPC monitorizarías semanalmente para evitar recaídas.

### Tarea a realizar
Como Comité de Operaciones y Calidad de CliniDiag Digital, elaborad un informe cuantitativo y una recomendación formal a la Dirección General sobre la aprobación o rechazo de la inversión de 1,4 M€, acompañados de un plan DMAIC a 90 días.

### Posibles soluciones o criterios de análisis
- **Análisis de colas (Kingman):**
  - *Situación actual:* $\rho = 18,8 / 20,0 = \mathbf{94,0\ \%}$. Factor utilización: $0,94 / (1 - 0,94) = \mathbf{15,67}$. Factor variabilidad: $(0,80^2 + 0,60^2)/2 = (0,64 + 0,36)/2 = \mathbf{0,50}$. Tiempo de espera en cola: $W_q \approx 0,50 \times 15,67 \times 30 = \mathbf{235,0\text{ minutos}}$ (~3,9 horas de congestión acumulada).
  - *Propuesta B (con demanda crecida a 20,8 pac/día):* $\rho = 20,8 / 24,0 = \mathbf{86,7\ \%}$ (o si se evalúa primero al volumen actual de 18,8 pac/día: $\rho = 78,3\ \%$ y $W_q \approx 11,3\text{ min}$). Incluso tras absorber +500 pruebas anuales adicionales (20,8 pac/día): Factor utilización = $0,867 / 0,133 = 6,50$; Factor variabilidad = $(0,40^2 + 0,30^2)/2 = (0,16 + 0,09)/2 = 0,125$; $W_q \approx 0,125 \times 6,50 \times 25 = \mathbf{20,3\text{ minutos}}$ (una reducción de más del **91 %** del tiempo de espera, absorbiendo más pacientes).
- **Capacidad del proceso de informes ($C_{pu}$):**
  - *Actual:* $C_{pu} = (24,0 - 19,5) / (3 \times 3,0) = 4,5 / 9,0 = \mathbf{0,50}$ (proceso severamente incapaz: 1,5 desviaciones típicas hasta el límite implica ~6,7 % de informes fuera de plazo solo por distribución normal).
  - *Propuesta B:* $C_{pu} = (24,0 - 12,0) / (3 \times 2,0) = 12,0 / 6,0 = \mathbf{2,00}$ (excelencia Six Sigma respecto al límite superior de 24 h).
- **Productividad multifactorial y margen operativo:**
  - *Actual:* Diagnósticos válidos = $4.700 \times (1 - 0,048) = \mathbf{4.474}$; Ingresos válidos = $4.474 \times 180\text{ €} = \mathbf{805.320\text{ €}}$; Costes = 750.000 € → Margen operativo = **55.320 €**. Productividad multifactorial = $4.474 / 750 = \mathbf{5,97}$ diag./k€ (o **1,074 €** de valor por € de insumo).
  - *Propuesta B:* Diagnósticos válidos = $5.200 \times (1 - 0,010) = \mathbf{5.148}$; Ingresos válidos = $5.148 \times 180\text{ €} = \mathbf{926.640\text{ €}}$; Costes = 795.000 € → Margen operativo = **131.640 €** (+76.320 €/año de incremento anual recurrente). Productividad multifactorial = $5.148 / 795 = \mathbf{6,48}$ diag./k€ (+8,5 %) o **1,166 €** de valor por € de insumo.
- **Decisión financiera y estratégica:** **Rechazar por ahora la Propuesta A (1,4 M€)** y **aprobar la Propuesta B (120 k€)**. La inversión única de 120 k€ se recupera en menos de 19 meses ($120.000 / 76.320 \approx 1,57\text{ años}$) gracias al incremento del margen operativo anual, libera un 13,3 % de colchón de capacidad y resuelve simultáneamente esperas y calidad. Solo cuando la demanda supere de forma sostenida los 21–22 pacientes/día (utilización >88 % tras depurar el proceso) tendrá sentido económico invertir en un segundo equipo.
- **Controles SPC clave:** (1) Gráfico de control $\bar{X}$-$R$ semanal de tiempos de entrega de informes (con límites a $\pm 3\sigma$) y (2) Gráfico $p$ (proporción de defectos) semanal de tasa de repetición de pruebas por técnico y turno.

### Preguntas de reflexión final
1. ¿Qué ocurre en muchas empresas cuando se aprueba gran CapEx (Propuesta A) antes de eliminar la variabilidad y los desperdicios internos?
2. ¿Cómo presentaríais los resultados de este análisis al director médico para lograr su adhesión en lugar de generar una postura defensiva?
3. ¿Cómo escalaríais estas mejoras de Barcelona al resto de los 5 centros de CliniDiag Digital sin perder estandarización?

---

## 7. Evaluación

### Evaluación diagnóstica breve (al inicio — 5 min)
1. En un proceso con 3 fases cuyas capacidades son 20, 12 y 25 unidades/hora, ¿cuál es el impacto de aumentar la fase 1 de 20 a 30 unidades/hora?
2. Si la utilización de un centro de atención sube del 80 % al 90 %, ¿el tiempo medio de espera sube un 10 %, se duplica o más que se duplica?
3. ¿Cuál es la diferencia entre un límite de control estadístico y un límite de especificación del cliente?
4. En tu empresa, ¿se mide explícitamente el Coste de la Mala Calidad (reprocesos, devoluciones, segundas visitas)?

### Evaluación formativa durante la sesión
- Verificación en vivo de la Actividad 1 (consistencia de unidades en la Ley de Little).
- Seguimiento por mesas/salas en la Actividad 2 comprobando la correcta aplicación de la fórmula de Kingman, el cálculo de $C_{pu}$ y el contraste entre productividad parcial y multifactorial.

### Evaluación sumativa al final de la sesión
1. **Resolución cuantitativa y plan DMAIC del caso CliniDiag Digital (45 %):** Evaluación en equipo según rúbrica.
2. **Project Charter DMAIC individual (40 %):** Actividad 3 aplicada a la empresa del participante.
3. **Cuestionario ejecutivo de cierre (15 %):** 5 preguntas aplicadas sobre Ley de Little, colas, SPC ($C_{pk}$) y desperdicios Lean.

### Rúbrica de evaluación

| Criterio | Insuficiente (0–4,9) | En desarrollo (5,0–6,9) | Adecuado (7,0–8,9) | Destacado (9,0–10) |
|---|---|---|---|---|
| **Análisis de flujo y teoría de colas (25 %)** | Errores conceptuales o de cálculo en Ley de Little, cuello de botella o fórmula de Kingman. | Calcula la utilización correctamente, pero interpreta parcialmente el efecto de la variabilidad ($CV_a$, $CV_s$). | Modela con precisión utilización, espera en cola y capacidad de flujo, explicando el impacto no lineal de $\rho$ y variabilidad. | Simula escenarios de volumen/variabilidad, propone palancas precisas de *pooling* o triaje y traduce el análisis en ahorro de CapEx. |
| **Control estadístico de calidad y SPC (25 %)** | Confunde media con capacidad de proceso o mezcla límites de control con especificaciones. | Calcula $C_p/C_{pk}$ o DPMO con algún fallo menor, pero no define medidas claras frente a causas comunes/especiales. | Calcula correctamente $C_{pu}/C_{pk}$ y DPMO, diferenciando causas comunes y especiales con controles SPC adecuados. | Integra VOC, COPQ y SPC en un sistema preventivo completo con gráficos específicos ($\bar{X}$-$R$, $p$) y *poka-yoke* digital. |
| **Productividad multifactorial e impacto económico (25 %)** | Evalúa solo métricas parciales o desconecta las mejoras operativas del impacto en resultados financieros. | Calcula parcialmente el cambio en costes o volumen, pero omite defectos o costes de implantación. | Calcula con rigor la productividad multifactorial y el impacto neto en margen y recuperación de la inversión. | Demuestra visión financiera completa relacionando productividad total, liberación de capacidad y retorno sobre capital (ROIC). |
| **Diseño DMAIC y transferencia práctica (25 %)** | Plan genérico sin métricas ni responsables; escasa aplicabilidad real. | Incluye fases DMAIC de forma descriptiva, pero con débil fase de Medir o Controlar. | Estructura un plan DMAIC ejecutable con línea base, acciones claras, KPI y mecanismos de control. | Presenta una hoja de ruta ejecutiva de implantación a 90 días con gestión del cambio y transferencia inmediata a su organización. |

### Actividad de autoevaluación o reflexión
- *¿Qué proceso de mi empresa opera hoy por encima del 90 % de utilización generando retrasos ocultos?*
- *¿Estamos gestionando la calidad mirando solo promedios mensuales o controlando la dispersión real que percibe el cliente?*
- *¿Qué cambio sin gran CapEx (estandarización, triaje, cita inteligente o poka-yoke digital) puede generar mayor retorno en mi departamento en los próximos 60 días?*

---

## 8. Materiales y recursos

### Guion de diapositivas estructurado (slide por slide)
1. **Slide 1 — Portada:** *Quality and Productivity*: Cómo eliminar fricción, colas y defectos para expandir márgenes.
2. **Slide 2 — Hoja de ruta de la sesión:** Objetivos de aprendizaje y agenda de 240 minutos.
3. **Slide 3 — Diagnóstico inicial:** Mitologías habituales sobre ocupación al 100 % y calidad por inspección.
4. **Slide 4 — Análisis de flujo y Ley de Little:** $L = \lambda \cdot W$ y gestión del cuello de botella.
5. **Slide 5 — Actividad 1:** Radiografía exprés de un proceso saturado en tu organización.
6. **Slide 6 — Productividad parcial vs. multifactorial:** Por qué las métricas departamentales aisladas destruyen valor.
7. **Slide 7 — La física de las colas (Fórmula de Kingman):** Por qué la utilización >85 % y la variabilidad colapsan el servicio.
8. **Slide 8 — Palancas contra las colas:** *Resource pooling*, triaje, programación inteligente y reducción de $CV_s$.
9. **Slide 9 — Presentación del caso CliniDiag Digital:** Datos de la unidad de Resonancia Magnética y dilema de 1,4 M€.
10. **Slide 10 — Control Estadístico de Procesos (SPC):** Causas comunes vs. causas especiales y el error del sobreajuste.
11. **Slide 11 — Capacidad de proceso ($C_p$, $C_{pk}$) y Six Sigma conceptual:** De la media engañosa al DPMO y COPQ.
12. **Slide 12 — Lean + Six Sigma + Digitalización:** Los 8 desperdicios, *poka-yoke*, SMED y ciclo DMAIC.
13. **Slide 13 — Regla de oro digital:** Simplificar antes de automatizar (casos breves de éxito y fracaso).
14. **Slide 14 — Taller en equipo (Actividad 2):** Reto cuantitativo y hoja de ruta DMAIC para CliniDiag Digital.
15. **Slide 15 — Debriefing del caso:** Comparativa CapEx (1,4 M€) vs. Mejora de procesos (120 k€) y palancas de cambio.
16. **Slide 16 — Síntesis y Actividad 3:** Instrucciones para el *Project Charter* DMAIC individual y autoevaluación.

### Ficha de trabajo
Documento *Ficha_T2_Quality_Productivity.pdf/docx* con:
- Esquema de cálculo rápido de Ley de Little y cuello de botella (Actividad 1).
- Formulario de referencia rápida: Ley de Little, Kingman ($G/G/1$), $C_p$, $C_{pk}$, DPMO y Productividad Multifactorial.
- Plantilla visual de las 5 fases DMAIC para el caso CliniDiag Digital.

### Plantilla o herramienta práctica replicable
**Plantilla Excel / Google Sheets: "Simulador Ejecutivo de Colas (Kingman), SPC ($C_{pk}$) y Productividad Total"** + **Plantilla Word "Project Charter DMAIC Ejecutivo (2 páginas)"**:
- Permite introducir $\lambda$, $t_s$, $CV_a$, $CV_s$ y visualizar automáticamente la curva exponencial de espera $W_q$.
- Calcula $C_p$, $C_{pk}$, tasa estimada fuera de especificación y productividad multifactorial antes/después de una iniciativa de mejora.

### Lecturas o recursos recomendados
- Goldratt, E. M., & Cox, J. (2014). *La Meta: Un proceso de mejora continua* (ed. revisada). Ediciones Díaz de Santos.
- Womack, J. P., & Jones, D. T. (2005). *Lean Thinking: Cómo utilizar el pensamiento Lean para eliminar los despilfarros y crear valor en la empresa*. Gestión 2000.
- George, M. L., Rowlands, D., Price, M., & Maxey, J. (2005). *The Lean Six Sigma Pocket Toolbook*. McGraw-Hill.
- Frei, F. X. (2006). *Breaking the Trade-Off Between Efficiency and Service*. Harvard Business Review (referencia clásica sobre variabilidad introducida por clientes en servicios).

### Vídeos, artículos y fuentes adicionales *(Validar enlaces y vigencia antes de utilizarse en clase)*
> **Aviso de validación:** Todos los recursos audiovisuales, artículos recientes y simuladores web listados a continuación deben ser verificados y validados por el formador (vigencia de enlaces, idioma y actualización de datos) antes de su uso en el aula.
- Simuladores interactivos gratuitos de colas y variabilidad (simuladores académicos $M/M/1$ y $G/G/c$ en web universitaria) *(validar enlace operativo antes de clase)*.
- Artículos recientes de *MIT Sloan Management Review* o *McKinsey Operations* sobre *Process Mining*, mantenimiento predictivo y Lean Digital en pymes *(validar edición vigente)*.
- Vídeos breves (5–8 min) demostrativos del cambio rápido SMED y del experimento del "embudo de Deming" sobre causas comunes vs. especiales *(validar disponibilidad)*.

### Glosario de términos clave

| Término | Definición ejecutiva |
|---|---|
| **Capacidad de proceso ($C_p$ / $C_{pk}$)** | Índices estadísticos que miden si la dispersión natural de un proceso ($6\sigma$) y su centrado cumplen las tolerancias exigidas por el cliente. |
| **Causa común / Causa especial** | Variabilidad inherente al diseño estable del sistema (común) frente a perturbaciones anómalas puntuales identificables (especial). |
| **COPQ (Coste de la Mala Calidad)** | Coste total de fallos internos (reprocesos, mermas) y externos (devoluciones, garantías, fuga de clientes) originados por defectos. |
| **Cuello de botella** | Recurso o fase de menor capacidad efectiva que determina el *throughput* máximo de todo el proceso. |
| **DMAIC** | Ciclo estructurado de mejora Six Sigma en cinco pasos: Definir, Medir, Analizar, Mejorar y Controlar. |
| **DPMO** | Defectos por Millón de Oportunidades; métrica estandarizada que permite comparar la calidad de procesos distintos. |
| **Fórmula de Kingman** | Aproximación matemática que relaciona el tiempo de espera en cola con la variabilidad ($CV_a$, $CV_s$), la utilización ($\rho$) y el tiempo de servicio ($t_s$). |
| **Ley de Little** | Ecuación fundamental de flujos en estado estable: $L = \lambda \cdot W$ (WIP = Tasa de flujo × Tiempo de flujo). |
| ***Poka-yoke*** | Dispositivo físico o validación digital "a prueba de errores" que evita o detecta fallos en el mismo instante en que ocurren. |
| **Productividad multifactorial (TFP)** | Relación entre el output válido obtenido y el conjunto agregado de todos los insumos consumidos (trabajo, capital, energía, materiales y tecnología). |

---

## 9. Adaptaciones para modalidad híbrida

### Sesión presencial
- Realizar en vivo una breve demostración física o visual con hoja de cálculo proyectada modificando $\rho$ del 70 % al 95 % para provocar el "momento revelación" sobre colas.
- Imprimir los gráficos de control SPC a gran formato para que cada equipo marque causas especiales y límites de especificación con rotuladores de colores.
- Organizar las defensas del caso CliniDiag como una reunión formal de Comité de Inversiones donde un equipo representa a Dirección Médica (favor del CapEx) y otro a Operaciones (favor del rediseño Lean/Digital).

### Sesión online síncrona (Zoom / Teams + Miro/Excel compartido)
- Compartir el simulador Excel en nube (Google Sheets/Excel Online) para que cada grupo manipule en paralelo su propia pestaña durante el taller de CliniDiag Digital.
- Utilizar la función de anotación en pantalla durante la exposición de gráficos SPC para que el alumnado marque directamente puntos fuera de control y tendencias.
- Estructurar pausas activas de 5 minutos cada 55 minutos y recoger votaciones rápidas mediante encuestas integradas (Propuesta A vs. Propuesta B antes y después del cálculo).

### Sesión asíncrona (Campus Virtual)
- Publicar dos píldoras en vídeo (15 min cada una): *Física de procesos: Ley de Little y Kingman* y *Calidad ejecutiva: SPC, $C_{pk}$ y DMAIC*.
- Incluir un ejercicio interactivo autoevaluable en el campus donde el alumno deba introducir $W_q$, $C_{pu}$ y productividad multifactorial de CliniDiag Digital para desbloquear la nota de solución comentada.
- Utilizar revisión por pares (*peer review*) en el foro para el *Project Charter* DMAIC (Actividad 3): cada participante revisa un proyecto de un compañero utilizando la rúbrica oficial.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Aprovecha la estadística aplicada y comprensión de varianza de **Bloque 2, Temas 2 y 3 (*Regression Analysis for Business* y *Business Analytics*)** y aterriza en la ejecución operativa cotidiana las decisiones estructurales de capacidad y foco de **Bloque 3, Tema 1 (*Operations Strategy*)**.
- **Competencias que desarrolla:** Diagnóstico basado en datos, mejora continua Lean Six Sigma, gestión de la variabilidad en servicios e industria, priorización disciplinada de CapEx frente a excelencia operativa y control de gestión de procesos.
- **Conexión con el tema anterior y posterior (plan de 8 bloques / 26 temas):**
  - *Tema anterior:* **Bloque 3, Tema 1 (*Operations Strategy*)** definió la arquitectura de capacidad, localización e integración vertical; este tema demuestra cómo exprimir y estabilizar dicha arquitectura antes de acometer nuevas inversiones.
  - *Tema posterior:* **Bloque 3, Tema 3 (*Financial and Managerial Accounting*)** traduce directamente las mejoras de productividad, reducción de inventario en curso (WIP) y disminución del coste de la no calidad en sus impactos exactos sobre la Cuenta de Resultados (PyG), el Balance (circulante/NOF) y el Estado de Flujos de Efectivo.
- **Evidencia de aprendizaje que dejará el alumnado:** (1) Diagnóstico cuantitativo de colas, calidad y productividad del caso CliniDiag Digital y (2) *Project Charter* DMAIC individual de mejora aplicable a su empresa.

---

## Siguientes pasos para el formador

1. **Comprobar el simulador Excel:** Verificar que las fórmulas de Kingman, $C_{pu}$ y productividad multifactorial funcionen correctamente tanto en Excel local como en Google Sheets y preparar una versión "solución del formador" oculta.
2. **Preparar ejemplos visuales de gráficos SPC:** Seleccionar 2 gráficos reales o didácticos claros (uno estable pero incapaz y otro inestable con causa especial) para el ejercicio rápido de Microlearning II.
3. **Validar enlaces y referencias sectoriales:** Revisar cualquier normativa de calidad sectorial (ISO 9001, normativa sanitaria) o simulador web que vaya a mostrarse en clase antes de la sesión.
4. **Adaptar el lenguaje al perfil del aula:** Si el grupo es mayoritariamente de servicios profesionales o tecnología, enfatizar ejemplos de tickets TI, expedientes y tiempos de aprobación; si es industrial, enfatizar SMED, lotes y scrap.
5. **Coordinar transición al Tema 3:** Cerrar la sesión destacando cuánto capital circulante y margen operativo libera reducir el WIP y los defectos, enlazando directamente con el análisis de Balance, PyG y flujos de caja del siguiente tema.
