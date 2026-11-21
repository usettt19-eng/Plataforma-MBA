# Tema 4. Análisis

## 1. Ficha del tema

| Campo | Detalle |
| :--- | :--- |
| **Título del tema** | Tema 4. Análisis |
| **Bloque y posición dentro del programa** | Bloque 3: Toma de decisiones — Posición 4 de 7 |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Mandos intermedios y emprendedores |
| **Nivel de dificultad** | Intermedio |
| **Prerrequisitos** | Haber cursado los Temas 1, 2 y 3 del Bloque 3 y disponer de un marco de criterios ponderados (Tema 2) y un portafolio de 3 alternativas viables + *statu quo* (Tema 3). |
| **Resultado general de aprendizaje** | Comparar rigurosamente alternativas empresariales estimando costes totales, beneficios esperados, riesgos, impactos colaterales y comportamiento bajo escenarios de incertidumbre y análisis de sensibilidad, generando una base analítica sólida para decidir. |

---

## 2. Objetivos de aprendizaje

Al finalizar este tema, el alumnado será capaz de:

1. **Cuantificar** costes directos, indirectos y ocultos junto con beneficios monetarios y estratégicos de distintas alternativas en un horizonte temporal homogéneo *(Nivel de Bloom: Aplicar)*.
2. **Evaluar** comparativamente un portafolio de alternativas aplicando la técnica seleccionada (matriz ponderada, ACB o árbol de decisión) con escalas ancladas y evidencias verificables *(Nivel de Bloom: Evaluar)*.
3. **Analizar** riesgos operativos, financieros, tecnológicos y comerciales asociados a cada alternativa mediante matrices de probabilidad-impacto y planes preliminares de mitigación *(Nivel de Bloom: Analizar)*.
4. **Modelar** escenarios bajo incertidumbre (pesimista, base y optimista) y realizar pruebas de sensibilidad sobre supuestos críticos para comprobar la robustez de cada opción *(Nivel de Bloom: Analizar)*.
5. **Elaborar** un Informe Comparativo de Análisis de Alternativas (*Decision Analysis Sheet*) claro y defendible ante un comité de dirección para su propio reto empresarial *(Nivel de Bloom: Crear)*.

---

## 3. Contenidos esenciales

### 3.1. Estimación realista de costes, beneficios e impactos (visibles y ocultos)

**Explicación breve y clara**  
La causa número uno de decepción en proyectos de transformación digital en pymes es el optimismo asimétrico: se subestiman los costes de implantación y se sobreestiman la velocidad y magnitud de los beneficios. Analizar una alternativa con rigor implica construir una fotografía completa en un mismo horizonte temporal (por ejemplo, 24 o 36 meses), separando el desembolso inicial (*CAPEX*), los gastos recurrentes (*OPEX*), los costes ocultos de transición y los impactos cualitativos relevantes.

**Conceptos clave**
- Costes directos, costes indirectos y costes ocultos (formación, curva de aprendizaje, caída temporal de productividad, migración de datos, coste de salida/*lock-in*).
- Coste de oportunidad (qué deja de hacer el equipo por ejecutar esta opción).
- Beneficios tangibles (ahorro de horas, aumento de margen, reducción de mermas/errores) vs. beneficios intangibles (posicionamiento, retención de talento, agilidad futura).
- Comparación siempre frente al escenario *statu quo* (beneficio incremental neto).

**Definiciones necesarias**
- **Coste oculto**: Gasto o consumo de recursos que no figura en el presupuesto del proveedor, pero que la empresa asume inevitablemente durante la adopción (horas del equipo interno, incidencias iniciales, adaptaciones de procesos).
- **Coste de oportunidad**: Valor de la mejor alternativa sacrificada o del ingreso/mejora que se deja de obtener al comprometer dinero y tiempo directivo en una opción concreta.
- **Horizonte de comparación homogéneo**: Periodo idéntico (p. ej., 3 años) sobre el que se evalúan todas las alternativas para evitar comparar erróneamente una suscripción mensual con una compra en propiedad.

**Ejemplo práctico realista**  
Una pyme distribuidora compara un ERP en la nube (suscripción de 600 €/mes + 4.000 € de puesta en marcha) frente a actualizar su servidor propio (16.000 € de licencia + 2.500 €/año de mantenimiento). A un año, la nube parece mucho más barata (11.200 € vs. 18.500 €). Sin embargo, al analizar el horizonte homogéneo de 3 años e incluir costes ocultos (migración interna, formación de 12 empleados y horas de soporte externo para incidencias del servidor local), el TCO a 3 años resulta muy parecido (28.600 € nube vs. 31.200 € servidor), pero la nube libera 180 horas/año de incidencias técnicas y permite teletrabajo inmediato.

**Errores frecuentes**
- Valorar "ahorro de horas del equipo" como dinero líquido en caja cuando la empresa no va a reducir plantilla ni tiene claro en qué actividad rentable reinvertirá esas horas.
- Comparar alternativas en horizontes distintos (coste del año 1 de una opción frente al coste a 3 años de otra).
- Ignorar el coste de no hacer nada (*statu quo*), asumiendo erróneamente que la situación actual es "gratis" aunque se estén perdiendo clientes cada mes.

**Preguntas que el alumnado debería poder responder**
- ¿Qué cuatro costes ocultos suelen olvidarse al evaluar proyectos de digitalización en pymes?
- ¿Cuándo un "ahorro de tiempo interno" se traduce realmente en beneficio económico neto y cuándo no?
- ¿Por qué es imprescindible usar el mismo horizonte temporal para todas las alternativas comparadas?

---

### 3.2. Evaluación comparativa estructurada y control de compensaciones (*trade-offs*)

**Explicación breve y clara**  
Ninguna alternativa empresarial gana en todos los criterios a la vez: la opción más rápida suele ser más cara o menos personalizable; la opción de mayor potencial comercial suele conllevar mayor riesgo de ejecución. El corazón del análisis consiste en cruzar sistemáticamente las alternativas del Tema 3 con los criterios y técnicas del Tema 2, haciendo visibles las **compensaciones (*trade-offs*)** para saber exactamente qué estamos ganando y qué estamos sacrificando en cada elección.

**Conceptos clave**
- Puntuación basada en evidencias (citando fuente, dato o piloto en cada celda de la matriz).
- Dominancia pura vs. fronteras de compensación (*trade-offs*).
- Comparación cruzada por pares de alternativas finalistas (*Even Swaps* simplificado: "¿Compensa pagar X € extra para ahorrar Y meses de plazo?").
- Visualización ejecutiva de resultados (tablas resumen, gráficos de barras ponderadas o radar de criterios).

**Definiciones necesarias**
- **Alternativa dominada**: Opción que resulta igual o peor que otra alternativa en todos los criterios relevantes; puede descartarse de inmediato con seguridad lógica.
- **Compensación (*trade-off*)**: Relación explícita entre lo que mejora en un criterio y lo que empeora en otro al pasar de una alternativa a otra (p. ej., aceptar un 12 % más de coste para reducir el riesgo operativo a la mitad).
- **Evidencia de puntuación**: Dato contrastado (presupuesto vinculante, prueba demo, referencia de otro cliente, histórico interno) que respalda la nota asignada en una matriz.

**Ejemplo práctico realista**  
Una academia de idiomas con 3 centros evalúa dos opciones finalistas para digitalizar sus clases corporativas: la **Opción A** (plataforma propia sobre LMS abierto) puntúa 3,85/5 y la **Opción B** (plataforma SaaS llave en mano) puntúa 3,95/5. En lugar de quedarse solo con el decimal "3,95 > 3,85", el equipo analiza el *trade-off* clave: la Opción B cuesta 6.500 € más en 2 años, pero reduce el plazo de lanzamiento de 5 meses a 3 semanas y elimina la dependencia de un programador freelance. La pregunta directiva queda cristalina: *¿Vale 6.500 € ganar 4 meses de ventas corporativas y eliminar el riesgo técnico?*

**Errores frecuentes**
- Tratar una diferencia mínima en la matriz (p. ej., 3,72 vs. 3,68) como ganadora incuestionable sin analizar el *trade-off* real que hay detrás.
- Puntuar celdas basándose en adjetivos vagos sin registrar la evidencia detrás de cada número.
- Ocultar los puntos débiles de la opción mejor puntuada en lugar de documentarlos para mitigación.

**Preguntas que el alumnado debería poder responder**
- ¿Cómo identifico si una alternativa está "dominada" por otra en una tabla comparativa?
- ¿Por qué el análisis de *trade-offs* es más valioso para un comité de dirección que mirar únicamente la puntuación total final?
- ¿Qué debe hacerse cuando dos alternativas empatan técnicamente en puntuación ponderada?

---

### 3.3. Análisis de riesgos e impactos colaterales por alternativa

**Explicación breve y clara**  
Dos alternativas con el mismo beneficio esperado pueden tener perfiles de riesgo completamente opuestos: una puede causar un pequeño retraso recuperable si falla, mientras otra puede comprometer la tesorería o la continuidad operativa de la pyme. Analizar cada opción exige identificar sus riesgos específicos (financieros, operativos, tecnológicos, legales, comerciales y de adopción humana), estimar su probabilidad e impacto, y comprobar si el riesgo residual sigue siendo aceptable tras aplicar mitigaciones realistas.

**Conceptos clave**
- Mapa de riesgos por alternativa (Probabilidad × Impacto).
- Riesgo inherente vs. riesgo residual (tras mitigación).
- Riesgos de segundo orden o impactos colaterales (efecto en clientes actuales, sobrecarga del equipo, dependencia de proveedor único/*vendor lock-in*).
- Estrategias de respuesta al riesgo: evitar, mitigar, transferir (seguro/contrato con SLA) o aceptar.

**Definiciones necesarias**
- **Riesgo inherente**: Nivel de exposición a un evento adverso antes de implantar medidas de control o mitigación.
- **Riesgo residual**: Nivel de riesgo que permanece tras aplicar las medidas preventivas o de contingencia previstas, cuyo coste debe sumarse al análisis de la alternativa.
- **Impacto de segundo orden**: Consecuencia indirecta pero relevante provocada por una decisión en otra área del negocio (p. ej., automatizar facturación sin avisar a clientes antiguos y aumentar impagos por confusión).

**Ejemplo práctico realista**  
Una pyme de distribución farmacéutica veterinaria analiza externalizar su almacén logístico frente a ampliar el propio. En papel, externalizar ahorra 28.000 €/año. Sin embargo, el análisis de riesgos revela dos riesgos críticos: (1) pérdida de control de cadena de frío en picos de verano (impacto muy alto) y (2) alta penalización contractual si desean revertir la operación en 2 años. Al incluir el coste de auditorías de temperatura y cláusulas SLA negociadas como mitigación (6.000 €/año), el ahorro real baja a 22.000 €/año, pero el riesgo residual pasa a nivel aceptable.

**Errores frecuentes**
- Listar riesgos genéricos ("que no salga bien", "que haya retrasos") en lugar de enunciados concretos causa → evento → impacto.
- Olvidar sumar el coste económico y de tiempo de las medidas de mitigación al coste total de la alternativa.
- Confundir riesgo de "baja probabilidad pero quiebra de la empresa" con riesgo tolerable solo porque su valor esperado matemático parezca pequeño.

**Preguntas que el alumnado debería poder responder**
- ¿Cuál es la diferencia entre riesgo inherente y riesgo residual, y por qué el segundo determina si una alternativa es viable?
- ¿Qué cuatro respuestas básicas existen ante un riesgo relevante identificado en una alternativa?
- ¿Por qué los riesgos catastróficos (de supervivencia de caja) deben tratarse aparte aunque tengan baja probabilidad?

---

### 3.4. Análisis bajo incertidumbre: escenarios, sensibilidad y punto de equilibrio

**Explicación breve y clara**  
En el mundo real, las variables clave de una pyme —demanda, coste energético, tasa de conversión, precio de materias primas o plazo de adopción— no son fijas. Trabajar con una única cifra ("creceremos un 15 %") es una ilusión de certeza. El análisis profesional incorpora tres herramientas ágiles al alcance de cualquier hoja de cálculo: **análisis de escenarios** (pesimista, base y optimista), **análisis de sensibilidad** (qué pasa si falla la variable más crítica) y **punto de equilibrio (*break-even*)** de la decisión.

**Conceptos clave**
- Modelado de 3 escenarios coherentes: Pesimista (estrés), Base (más probable) y Optimista.
- Análisis de sensibilidad univariante ("¿A partir de qué caída de ventas o subida de costes cambia la opción ganadora?").
- Punto de equilibrio (*break-even*) y margen de seguridad.
- Valor de la información y pruebas piloto para reducir incertidumbre antes del compromiso total.

**Definiciones necesarias**
- **Análisis de escenarios**: Evaluación del resultado de cada alternativa bajo distintos futuros plausibles (al menos Pesimista, Base y Optimista) en los que varias variables clave cambian conjuntamente.
- **Análisis de sensibilidad**: Prueba que varía un supuesto crítico a la vez (p. ej., ±20 % en demanda o +3 meses de retraso) para medir cuánto cambia el resultado y detectar el punto de inflexión donde cambia la mejor alternativa.
- **Robustez de una alternativa**: Capacidad de una opción para ofrecer resultados aceptables (o evitar pérdidas críticas) en la mayoría de los escenarios plausibles, incluso si no es la máxima ganadora en el escenario más optimista.

**Ejemplo práctico realista**  
Un restaurante con servicio *delivery* evalúa abrir una cocina fantasma (*dark kitchen*) alquilada (inversión fija alta, margen alto si supera 90 pedidos/día) frente a ampliar turnos en su cocina actual (inversión baja, techo máximo de 70 pedidos/día). En el escenario Optimista (110 pedidos/día), la cocina fantasma gana holgadamente. En el escenario Base (75 pedidos/día), empatan. En el escenario Pesimista (50 pedidos/día), la cocina fantasma pierde 4.500 €/mes y compromete la caja, mientras ampliar turnos sigue siendo rentable (+1.800 €/mes). El análisis de sensibilidad demuestra que ampliar turnos es la opción más robusta para validar demanda durante 6 meses antes de alquilar local.

**Errores frecuentes**
- Crear un escenario "pesimista" cosmético (-5 % de ventas) que no pone a prueba realmente la resistencia de la empresa.
- Cambiar solo los ingresos en los escenarios pero dejar los costes fijos o la necesidad de circulante congelados.
- Paralizarse intentando predecir el futuro exacto en lugar de identificar qué piloto barato reduce la incertidumbre principal.

**Preguntas que el alumnado debería poder responder**
- ¿En qué se diferencia la alternativa "óptima en escenario base" de la alternativa "más robusta ante incertidumbre"?
- ¿Qué nos indica el punto de inflexión en un análisis de sensibilidad?
- ¿Cuándo conviene pagar o esperar por más información (piloto, encuesta, prueba técnica) antes de decidir?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** es intensivamente analítica y práctica, apoyada en tablas comparativas, cálculo ágil de escenarios y evaluación crítica de riesgos.

| Fase | Tiempo | Qué hace el formador | Qué hace el alumnado |
| :--- | :---: | :--- | :--- |
| **1. Apertura y activación** | 20 min | Lanza la actividad *"Cazadores de costes ocultos y riesgos ciegos"* sobre una propuesta tecnológica aparentemente muy rentable. Visibiliza cómo cambia la decisión al destapar lo oculto. | Revisa una propuesta breve de 1 párrafo y detecta en parejas al menos 4 costes ocultos o riesgos no contemplados. |
| **2. Exposición breve / microlearning (Parte 1)** | 30 min | Expone los apartados 3.1 y 3.2: costes totales/ocultos, beneficio incremental frente al *statu quo*, evaluación con evidencias y análisis de *trade-offs*. | Revisa un ejemplo en hoja de cálculo proyectada, detecta una alternativa dominada y verbaliza el *trade-off* entre dos opciones finalistas. |
| **3. Exposición breve / microlearning (Parte 2)** | 30 min | Explica riesgos inherentes vs. residuales, análisis de escenarios (Pesimista/Base/Optimista), sensibilidad y concepto de robustez (apartados 3.3 y 3.4). | Calcula en grupo un punto de equilibrio rápido y analiza un ejemplo de sensibilidad donde un cambio de +20 % en costes invierte el ranking. |
| **4. Análisis de caso práctico** | 60 min | Presenta el caso *LogiFresco Sur*, entrega la tabla numérica y de riesgos, y guía a los equipos para puntuar alternativas, calcular escenarios y detectar la opción más robusta. | En equipos de 3-4 personas, calcula el resultado financiero en 3 escenarios, evalúa riesgos residuales, aplica la matriz ponderada y redacta el veredicto analítico de *trade-offs*. |
| **5. Actividad de transferencia laboral** | 50 min | Acompaña individualmente a cada participante mientras construye la Hoja de Análisis Comparativo de sus 3 alternativas + *statu quo* (Tema 3) usando sus criterios del Tema 2. | Puntuación basada en evidencias de su caso real, mapa de 3 riesgos críticos por opción, prueba de estrés (escenario pesimista) y detección del supuesto más sensible. |
| **6. Discusión guiada** | 25 min | Modera el debate sobre *LogiFresco Sur* (¿elegir máximo beneficio esperado o máxima robustez ante normativa/demanda?) y contrasta 2 análisis reales de alumnos. | Defiende su lectura de los escenarios, cuestiona supuestos optimistas de otros equipos y ajusta su propia hoja de análisis. |
| **7. Síntesis, evaluación y cierre** | 25 min | Sintetiza los 5 errores fatales del análisis empresarial, aplica la evaluación sumativa rápida y conecta con el Tema 5 (*Decisión*), donde afrontarán los sesgos y la elección final. | Completa el ejercicio evaluativo de sensibilidad/escenarios, realiza su autoevaluación y guarda su Hoja de Análisis para el Tema 5. |
| **TOTAL** | **240 min** | | |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Cazadores de costes ocultos y riesgos ciegos

- **Objetivo**: Entrenar el ojo crítico para detectar costes ocultos, beneficios inflados e impactos colaterales antes de dar por bueno un presupuesto o caso de negocio.
- **Instrucciones para el alumnado**:
  1. Leed el siguiente caso exprés: *"Una pyme comercial de 20 personas recibe una oferta para sustituir su CRM actual por otro más moderno que cuesta 120 €/mes menos. El comercial del proveedor asegura que ahorrará 1 hora diaria a cada vendedor (valorado en 40.000 €/año) y se instala en una semana."*
  2. En parejas (7 min), listad al menos **3 costes ocultos**, **2 riesgos operativos o humanos** y **1 pregunta crítica sobre el supuesto de los 40.000 €/año**.
  3. Puesta en común rápida en pizarra (8 min).
- **Materiales necesarios**: Diapositiva del caso exprés y pizarra/documento compartido.
- **Tiempo estimado**: 15 minutos (dentro de la fase de Apertura).
- **Rol del formador**: Agrupar las aportaciones en Costes ocultos (migración de datos históricos, formación, curva de aprendizaje, integraciones), Riesgos (pérdida de seguimiento de clientes en transición, resistencia del equipo) y Falacia del ahorro teórico de tiempo.
- **Producto o entregable esperado**: Checklist colectivo de verificación crítica de ofertas y presupuestos.
- **Criterios de éxito**: Cada pareja identifica correctamente al menos 4 elementos críticos omitidos en la oferta comercial.

### Actividad 2 (Aplicación): Análisis integral bajo incertidumbre de *LogiFresco Sur*

- **Objetivo**: Integrar evaluación financiera por escenarios, matriz multicriterio ponderada, análisis de riesgos residuales y prueba de sensibilidad sobre un caso realista con incertidumbre regulatoria y de demanda.
- **Instrucciones para el alumnado**:
  1. En equipos de 3-4 personas, analizad el caso práctico de *LogiFresco Sur* (Sección 6).
  2. Calculad el **margen neto anual estimado (en €)** y el **Valor Monetario Esperado (VME)** a 3 años para las 3 alternativas + *statu quo* usando los escenarios Pesimista, Base y Optimista proporcionados.
  3. Identificad los **2 riesgos principales** de cada alternativa y proponed una medida de mitigación realista.
  4. Completad la matriz ponderada acordada por la dirección de *LogiFresco Sur* (Rentabilidad esperada 35 %, Robustez en escenario pesimista 25 %, Cumplimiento normativo ZBE/riesgo regulatorio 20 %, Viabilidad operativa y plazo 20 %).
  5. Redactad un resumen ejecutivo de 8 líneas exponiendo el principal ***trade-off*** entre las dos mejores opciones y cuál es el supuesto más sensible que podría cambiar el ranking.
- **Materiales necesarios**: Dossier del caso *LogiFresco Sur*, calculadora u hoja de cálculo preconfigurada.
- **Tiempo estimado**: 60 minutos.
- **Rol del formador**: Verificar que los equipos calculan correctamente el VME ponderando por probabilidades, evitan errores aritméticos básicos y no confunden análisis con decisión emocional.
- **Producto o entregable esperado**: Cuadro comparativo financiero por escenarios + Matriz ponderada + Mapa de riesgos + Síntesis de *trade-offs*.
- **Criterios de éxito**: Cálculos coherentes de los 3 escenarios y VME; identificación explícita del riesgo de caja en escenario pesimista; explicación clara del *trade-off* entre la opción de mayor VME y la opción más robusta.

### Actividad 3 (Transferencia a la realidad laboral): Hoja de Análisis Comparativo de mi caso real

- **Objetivo**: Evaluar rigurosamente las 3 alternativas + *statu quo* del proyecto propio (Tema 3) usando el marco de criterios del Tema 2 y sometiéndolas a una prueba de estrés.
- **Instrucciones para el alumnado**:
  1. Abrid la plantilla **Decision Analysis Sheet** (Sección 8) y trasladad vuestros criterios ponderados (Tema 2) y vuestras 4 opciones (Tema 3).
  2. Estimad costes totales (incluyendo al menos 2 costes ocultos) y beneficios incrementales en un horizonte homogéneo para cada alternativa.
  3. Puntuad cada alternativa del 1 al 5 usando vuestras escalas ancladas, anotando en cada celda qué evidencia o supuesto sustenta la nota (marcad con `[?]` los supuestos que debáis verificar esta semana).
  4. Realizad una **prueba de estrés (escenario pesimista)**: si la variable clave (demanda, adopción o coste) empeora un 25 %, ¿qué opción resiste mejor?
  5. Identificad los 2 mayores riesgos de vuestra alternativa mejor situada y su mitigación.
- **Materiales necesarios**: Entregables propios de Temas 2 y 3 + Plantilla *Decision Analysis Sheet* (hoja de cálculo o ficha).
- **Tiempo estimado**: 50 minutos.
- **Rol del formador**: Revisar individualmente los supuestos marcados con `[?]`, retar estimaciones demasiado optimistas y ayudar a simplificar el cálculo en proyectos con poca información contable.
- **Producto o entregable esperado**: *Decision Analysis Sheet* individual completa, con puntuación justificada, prueba de estrés y mapa de riesgos.
- **Criterios de éxito**: Todas las alternativas evaluadas con el mismo horizonte temporal; presencia explícita de costes ocultos; registro de evidencias/supuestos a verificar; análisis claro de escenario pesimista y *trade-offs*.

---

## 6. Caso práctico

### Contexto empresarial
**LogiFresco Sur S.L.** es un operador logístico de última milla refrigerada con sede en Sevilla y delegaciones en Málaga y Córdoba. Cuenta con 55 empleados, una flota propia de 22 furgonetas frigoríficas diésel (edad media: 6,5 años) y una facturación anual de 4,2 millones de euros (margen operativo actual del 7,5 %, unos 315.000 €/año). Sirve diariamente a tiendas gourmet, restauración y comercios de alimentación fresca situados en centros urbanos.

### Situación o problema
La empresa afronta dos presiones simultáneas en los próximos 36 meses:
1. Las restricciones progresivas de acceso a **Zonas de Bajas Emisiones (ZBE)** en los centros urbanos andaluces *(nota para el formador: recordar al alumnado que la normativa municipal específica de ZBE y posibles subvenciones vigentes de movilidad deben verificarse en las ordenanzas y convocatorias actuales antes de extrapolar este caso a la realidad)*.
2. El crecimiento de clientes de comercio electrónico fresco que exigen ventanas horarias más estrictas y trazabilidad de temperatura en tiempo real, mientras las rutas actuales se planifican manualmente con un 18 % de kilómetros en vacío.

Tras definir el problema, fijar criterios y generar opciones, la dirección analiza **cuatro alternativas** a un horizonte de **3 años** bajo incertidumbre en demanda urbana y coste energético:
- **Opción 0 (*Statu quo*)**: Mantener la flota diésel actual sin software avanzado, asumiendo multas/restricciones progresivas o pérdida de clientes en centros urbanos.
- **Opción 1 (Optimización digital + Subcontratación ZBE)**: Implantar un software SaaS de optimización de rutas y telemetría de frío (inversión y licencias 3 años: 48.000 €) + subcontratar entregas en centros ZBE a microoperadores eléctricos locales (coste variable por reparto).
- **Opción 2 (Renovación agresiva a flota eléctrica propia + Software)**: Comprar/financiar 10 furgonetas eléctricas refrigeradas con puntos de carga en naves + software de rutas (compromiso financiero total a 3 años: 460.000 €, con alto apalancamiento; ahorro fuerte en combustible y mantenimiento si hay alto volumen).
- **Opción 3 (Híbrida escalonada — Renting flexible + Software)**: Implantar el software de rutas y telemetría desde el mes 1 + contratar **renting flexible a 24-36 meses** de 5 furgonetas eléctricas para los centros urbanos de mayor densidad, reservando opción de ampliar a 10 en el año 2 si la demanda confirma el crecimiento (compromiso base a 3 años: 215.000 €).

### Datos disponibles

**1. Escenarios de entorno a 3 años (probabilidades estimadas por el comité):**
- **Escenario Pesimista (Probabilidad: 25 %)**: Estancamiento de demanda (-10 %), encarecimiento eléctrico/financiación y retrasos en implantación ZBE.
- **Escenario Base (Probabilidad: 50 %)**: Crecimiento moderado (+8 % anual) y aplicación gradual prevista de ZBE.
- **Escenario Optimista (Probabilidad: 25 %)**: Fuerte auge del reparto fresco urbano (+20 % anual), ZBE estrictas que expulsan a competidores lentos y costes eléctricos contenidos.

**2. Beneficio neto incremental acumulado a 3 años frente a la situación inicial (en miles de euros, después de inversión/cuotas y costes ocultos estimados):**

| Alternativa | Escenario Pesimista (25 %) | Escenario Base (50 %) | Escenario Optimista (25 %) | Desembolso / Compromiso inicial crítico | Plazo operativo | Riesgo principal identificado |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **Opción 0 (*Statu quo*)** | -140 k€ | -95 k€ | -180 k€ | 0 k€ | Inmediato | Pérdida de 25-35 % de clientes en centros urbanos por restricciones ZBE y menor eficiencia |
| **Opción 1 (Software + Subcontratación ZBE)** | +45 k€ | +135 k€ | +170 k€ | 18 k€ iniciales | 3 meses | Dependencia de microoperadores externos, menor control de marca/temperatura y subida de tarifas en picos |
| **Opción 2 (Compra 10 eléctricas + Software)** | -165 k€ | +210 k€ | +440 k€ | 460 k€ comprometidos (deuda alta) | 9-12 meses | Riesgo grave de tesorería en escenario pesimista, retrasos de entrega de vehículos e infraestructura eléctrica |
| **Opción 3 (Híbrida: Software + Renting 5 eléctricas ampliable)** | +20 k€ | +195 k€ | +310 k€ | 55 k€ iniciales / cuota flexible | 4-5 meses | Coste unitario ligeramente superior a la compra en escenario optimista; necesidad de coordinar flota mixta |

**3. Criterios ponderados de *LogiFresco Sur* (del Tema 2):**
- Rentabilidad esperada (VME a 3 años): **35 %**
- Robustez financiera en escenario pesimista (protección de caja): **25 %**
- Control operativo / cumplimiento ZBE y calidad de frío: **20 %**
- Rapidez y sencillez de implantación: **20 %**

### Preguntas de análisis
1. Calculad el **Valor Monetario Esperado (VME)** a 3 años de cada una de las cuatro alternativas. ¿Cuál obtiene el VME más alto y por cuánto margen?
2. ¿Qué revela el análisis del **escenario pesimista** sobre la Opción 2 frente a las Opciones 1 y 3? ¿Puede una pyme con 315 k€/año de margen operativo asumir una pérdida acumulada de -165 k€ con alto endeudamiento?
3. ¿Queda alguna alternativa **dominada** o claramente descartable al observar la tabla completa? (Analizad especialmente la Opción 0).
4. Al aplicar la matriz ponderada con los 4 criterios de *LogiFresco Sur*, ¿cuál es el ***trade-off*** real entre la **Opción 1** y la **Opción 3**?
5. Realizad una prueba de sensibilidad rápida: ¿qué pasaría con el VME de la Opción 2 y la Opción 3 si la probabilidad del escenario Pesimista subiera del 25 % al 45 % (y el Optimista bajara al 5 %)?

### Tarea a realizar
En equipo, entregad el **Informe de Análisis Comparativo** de *LogiFresco Sur* compuesto por:
1. Tabla de cálculo del VME actual y del VME bajo sensibilidad (escenario pesimista al 45 %).
2. Matriz de decisión ponderada completa (escala 1-5 justificada en cada celda).
3. Cuadro de 2 riesgos prioritarios y mitigaciones para las dos opciones mejor valoradas.
4. Conclusión analítica objetiva (sin entrar aún en el plan de ejecución): opción recomendada desde el análisis, principal *trade-off* y qué dato clave conviene confirmar antes de firmar.

### Posibles soluciones o criterios de análisis (guía para el formador)
- **Cálculo de VME (probabilidades base 25 % / 50 % / 25 %)**:
  - **Opción 0 (*Statu quo*)**: `0,25×(-140) + 0,50×(-95) + 0,25×(-180) = -35 - 47,5 - 45 = -127,5 k€`. *(Completamente dominada: no actuar destruye valor en todos los escenarios).*
  - **Opción 1 (Software + Subcontratación)**: `0,25×(45) + 0,50×(135) + 0,25×(170) = 11,25 + 67,5 + 42,5 = +121,25 k€`.
  - **Opción 2 (Compra 10 eléctricas)**: `0,25×(-165) + 0,50×(210) + 0,25×(440) = -41,25 + 105 + 110 = +173,75 k€`.
  - **Opción 3 (Híbrida: Software + Renting 5 ampliable)**: `0,25×(20) + 0,50×(195) + 0,25×(310) = 5 + 97,5 + 77,5 = +180,00 k€`.
- **Hallazgo clave de análisis**: Incluso antes de ponderar riesgos, la **Opción 3** logra el mayor VME (+180 k€) gracias a su asimetría favorable: evita el desastre en escenario pesimista (+20 k€ frente a -165 k€ de la Opción 2) mientras conserva la opción de escalar si crece la demanda.
- **Prueba de sensibilidad (Pesimista 45 %, Base 50 %, Optimista 5 %)**:
  - **Opción 1**: `0,45×(45) + 0,50×(135) + 0,05×(170) = 20,25 + 67,5 + 8,5 = +96,25 k€`.
  - **Opción 2**: `0,45×(-165) + 0,50×(210) + 0,05×(440) = -74,25 + 105 + 22 = +52,75 k€` *(se desploma más de 120 k€).*
  - **Opción 3**: `0,45×(20) + 0,50×(195) + 0,05×(310) = 9 + 97,5 + 15,5 = +122,00 k€` *(sigue liderando con holgura).*
- ***Trade-off* principal (Opción 1 vs. Opción 3)**: La Opción 1 exige menos compromiso inicial (18 k€ vs. 55 k€) y protege algo más en el escenario pesimista (+45 k€ vs. +20 k€), pero sacrifica control directo de la cadena de frío/marca y limita el techo de rentabilidad (+170 k€ vs. +310 k€). La Opción 3 ofrece el mejor equilibrio entre rentabilidad, control operativo y protección ante incertidumbre mediante opcionalidad real.

### Preguntas de reflexión final
- ¿Qué habría ocurrido si la dirección de *LogiFresco Sur* hubiera decidido mirando únicamente el escenario Optimista (+440 k€ de la Opción 2) o solo el coste inicial más bajo (Opción 1)?
- ¿Cómo aporta valor económico la "opcionalidad" (poder empezar con 5 vehículos en renting y ampliar después si la demanda responde)?
- ¿Qué variables de vuestro propio proyecto empresarial merecen pasar hoy mismo por una prueba de estrés del -25 %?

---

## 7. Evaluación

### Evaluación diagnóstica breve (al inicio de la sesión)
- **Instrumento**: Sondeo breve (3 preguntas) sobre identificación de costes ocultos, diferencia entre escenario base y sensibilidad, e interpretación de una tabla de VME.
- **Propósito**: Calibrar el nivel numérico del grupo y decidir cuánta guía práctica dar en los cálculos del caso *LogiFresco Sur*.

### Evaluación formativa (durante la sesión)
- **Instrumento**: Revisión en directo de los cálculos de VME y sensibilidad de *LogiFresco Sur* por equipo y chequeo individual de evidencias `[?]` durante la Actividad 3.
- **Propósito**: Detectar errores metodológicos (p. ej., olvidar el horizonte homogéneo o puntuar sin respaldo) antes de cerrar el análisis.

### Evaluación sumativa (al cierre de la sesión)
- **Instrumento**: Entrega individual de la **Hoja de Análisis Comparativo (*Decision Analysis Sheet*)** de su reto real (75 %) + ejercicio práctico de cálculo de sensibilidad e identificación de *trade-offs* sobre un minicuadro numérico inédito (25 %).

### Rúbrica de evaluación de la Hoja de Análisis Comparativo

| Criterio | Insuficiente (1) | En desarrollo (2) | Adecuado (3) | Destacado (4) |
| :--- | :--- | :--- | :--- | :--- |
| **Rigor en costes y beneficios** | Omite costes ocultos, mezcla horizontes temporales o presenta beneficios infundados. | Incluye costes directos y algunos beneficios, pero ignora costes ocultos o el valor incremental frente al *statu quo*. | Estima costes totales (con costes ocultos) y beneficios incrementales en un horizonte homogéneo realista. | Análisis económico-estratégico completo, trazable, conservador en beneficios y con claras marcas `[?]` de datos por verificar. |
| **Evaluación comparativa y *trade-offs*** | Puntuaciones arbitrarias sin evidencias y sin explicación de compensaciones. | Aplica la matriz o técnica elegida, pero solo declara un número ganador sin analizar *trade-offs*. | Puntuaciones justificadas por evidencias y explicación clara de las compensaciones entre las finalistas. | Evaluación impecablemente documentada que identifica alternativas dominadas y articula con precisión el *trade-off* decisivo para dirección. |
| **Análisis de riesgos y mitigaciones** | No identifica riesgos o escribe frases genéricas sin impacto ni mitigación. | Lista riesgos básicos sin diferenciar probabilidad/impacto ni contemplar el coste de mitigarlos. | Evalúa riesgos específicos por opción (probabilidad × impacto) con medidas concretas de mitigación. | Distingue riesgo inherente vs. residual, incorpora impactos de segundo orden y refleja el coste de mitigación en el análisis. |
| **Escenarios y sensibilidad bajo incertidumbre** | Trabaja con un único escenario determinista sin prueba de estrés. | Plantea escenarios cosméticos sin evaluar cómo cambia el ranking si fallan supuestos clave. | Modela al menos escenario Pesimista/Base/Optimista o prueba de estrés e identifica el supuesto más crítico. | Realiza análisis de sensibilidad riguroso, identifica puntos de inflexión y valora explícitamente la robustez de cada alternativa. |

### Actividad de autoevaluación o reflexión
Reflexión escrita final (5 minutos):
1. *¿Qué supuesto de mi análisis actual tiene más poder para hacer fracasar la decisión si resulta equivocado?*
2. *¿Qué coste oculto o impacto de segundo orden descubrí hoy al analizar mis alternativas que antes había pasado por alto?*
3. *¿Qué verificación rápida (llamada a proveedor, consulta contable, microprueba) puedo hacer en las próximas 48 horas para reemplazar una suposición `[?]` por un dato real?*

---

## 8. Materiales y recursos

### Guion de diapositivas (slide por slide)

| Slide | Título | Contenido clave y propósito visual |
| :---: | :--- | :--- |
| **1** | Portada: Bloque 3 · Tema 4. Análisis | Mapa del proceso de decisión (paso 4 activo) y objetivo: convertir opciones en evidencias comparables bajo incertidumbre. |
| **2** | Activación: Cazadores de costes ocultos y riesgos ciegos | Oferta comercial de CRM "demasiado bonita" y dinámica en parejas. |
| **3** | El iceberg de los costes y beneficios | Esquema visual: CAPEX + OPEX + Costes ocultos + Coste de oportunidad vs. Beneficio incremental sobre el *statu quo*. |
| **4** | Horizontes homogéneos y falacia del tiempo ahorrado | Ejemplo comparativo Nube vs. Servidor local a 1 año y a 3 años. |
| **5** | Comparar para comprender: dominancia y *trade-offs* | Tabla resuelta mostrando una alternativa dominada y cómo formular la pregunta clave de *trade-off*. |
| **6** | Evidencias frente a intuiciones | Uso de etiquetas de fiabilidad (Dato contrastado / Estimación razonada / Supuesto `[?]` a validar). |
| **7** | Riesgos inherentes, residuales e impactos de segundo orden | Matriz Probabilidad × Impacto + las 4 respuestas al riesgo (evitar, mitigar, transferir, aceptar). |
| **8** | Analizar bajo incertidumbre: 3 escenarios y VME | Esquema Pesimista / Base / Optimista y recordatorio visual de la fórmula del Valor Monetario Esperado. |
| **9** | Análisis de sensibilidad y robustez | Gráfico sencillo mostrando cómo una opción "campeona en optimista" se hunde en pesimista frente a una opción robusta. |
| **10** | Caso práctico: *LogiFresco Sur* | Contexto ZBE/última milla, tabla de las 4 opciones, escenarios y criterios ponderados. |
| **11** | Análisis de sensibilidad en directo (*LogiFresco Sur*) | Revelación de resultados base vs. pesimista al 45 % y debate sobre opcionalidad real. |
| **12** | Actividad de transferencia: Mi *Decision Analysis Sheet* | Instrucciones paso a paso para puntuar, estresar y mapear riesgos del caso real propio. |
| **13** | Síntesis y puente al Tema 5 | Resumen del tema y aviso clave: un buen análisis no decide solo; en el Tema 5 veremos cómo evitar sesgos cognitivos al elegir y cómo comunicar la decisión. |

### Ficha de trabajo (Checklist de costes ocultos y riesgos en transformación digital de pymes)
- **Costes ocultos frecuentes**: Migración y limpieza de datos antiguos; horas internas de dirección y equipo clave; formación inicial y de nuevas incorporaciones; caída temporal de productividad durante los primeros 30-60 días; integraciones con ERP/contabilidad/web; costes de cancelación o migración futura (*vendor lock-in*).
- **Riesgos críticos frecuentes**: Rechazo o uso paralelo de hojas de cálculo por el equipo; incumplimiento de plazos del proveedor; dependencia de una sola persona técnica; pérdida de calidad de servicio a clientes actuales durante la transición; tensión de tesorería si los beneficios tardan 3 meses más de lo previsto.

### Plantilla práctica replicable: *Decision Analysis Sheet* (Hoja de Análisis Comparativo)

```markdown
# DECISION ANALYSIS SHEET — ANÁLISIS COMPARATIVO
- **Problema (Tema 1):** [...] | **Horizonte homogéneo:** [24 / 36 meses]

## 1. Resumen económico y de escenarios (frente al Statu quo)
| Alternativa | Inversión / Compromiso inicial | Costes ocultos estimados | Escenario Pesimista ([%] ) | Escenario Base ([%]) | Escenario Optimista ([%]) | Valor Esperado (VME) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Opción 0 (*Statu quo*) | | | | | | |
| Opción 1 | | | | | | |
| Opción 2 | | | | | | |
| Opción 3 | | | | | | |

## 2. Matriz ponderada basada en evidencias (Escala 1-5)
| Criterio (Peso %) | Opción 0 | Opción 1 | Opción 2 | Opción 3 | Evidencia / Supuesto `[?]` |
| :--- | :---: | :---: | :---: | :---: | :--- |
| Criterio 1 ([%]) | | | | | |
| Criterio 2 ([%]) | | | | | |
| Criterio 3 ([%]) | | | | | |
| Criterio 4 ([%]) | | | | | |
| **PUNTUACIÓN PONDERADA TOTAL** | | | | | |

## 3. Riesgos críticos, mitigación y sensibilidad
- **Principal *trade-off* entre las 2 mejores opciones:** [...]
- **Supuesto más sensible (qué haría cambiar el ranking):** [...]
- **Riesgos clave de la opción líder y su mitigación (con coste estimado):** [...]
- **Datos `[?]` a confirmar antes de la decisión definitiva:** [...]
```

### Lecturas y recursos recomendados
- Hubbard, D. W. (2014). *How to Measure Anything: Finding the Value of Intangibles in Business*. Wiley. *(Referencia práctica sobre reducción de incertidumbre y estimación realista en empresas).*
- Taleb, N. N. (2012). *Antifrágil* / referencias sobre robustez y asimetría de riesgos *(útil para explicar por qué evitar riesgos de ruina pesa más que optimizar la media en pymes)*.
- Hammond, J. S., Keeney, R. L., & Raiffa, H. (1999). *Decisiones inteligentes*. Gestión 2000. *(Capítulos sobre consecuencias, incertidumbre y tolerancia al riesgo).*

### Vídeos, artículos y fuentes adicionales
> **Nota importante para el formador**: Validar acceso, idioma y vigencia de cualquier enlace externo antes de compartirlo con el alumnado.

- Tutorial práctico (8-10 min) sobre tablas de sensibilidad y análisis de escenarios en Excel / Google Sheets (*What-If Analysis / Tabla de datos*) *(verificar versión vigente antes de enlazar)*.
- Artículo de divulgación empresarial sobre *Scenario Planning* para pymes en portales de gestión (p. ej., Harvard Business Review o McKinsey Insights) *(verificar acceso/paywall antes de asignar)*.

### Glosario de términos clave

| Término | Definición operativa |
| :--- | :--- |
| **Alternativa dominada** | Opción que queda igual o por debajo de otra en todos los criterios relevantes y debe descartarse. |
| **Análisis de escenarios** | Simulación estructurada del desempeño de cada alternativa en futuros distintos plausibles (Pesimista, Base, Optimista). |
| **Análisis de sensibilidad** | Evaluación de cuánto cambia el resultado o el ranking cuando varía un supuesto clave (demanda, coste, plazo o probabilidad). |
| **Compensación (*trade-off*)** | Equilibrio explícito entre lo que se gana en un criterio y lo que se cede en otro al comparar dos opciones. |
| **Coste de oportunidad** | Valor de la mejor alternativa que se deja de aprovechar al asignar recursos a una opción determinada. |
| **Coste oculto** | Gasto o esfuerzo real no incluido en el precio nominal (formación, horas internas, transición, curva de aprendizaje). |
| **Opcionalidad real** | Capacidad diseñada dentro de una alternativa para ampliar, adaptar o cancelar una inversión según evolucione la información real. |
| **Riesgo inherente / residual** | Exposición adversa antes (inherente) y después (residual) de aplicar medidas de prevención o mitigación. |
| **Robustez** | Propiedad de una alternativa que mantiene resultados aceptables y protege la viabilidad en escenarios adversos. |

---

## 9. Adaptaciones para modalidad híbrida

### Sesión presencial
- Proyectar en pantalla grande una hoja de cálculo viva del caso *LogiFresco Sur* durante la discusión guiada para modificar en tiempo real las probabilidades del escenario pesimista (del 25 % al 45 % o al 60 %) y mostrar visualmente el cambio en los gráficos.
- Entregar calculadoras simples o fomentar que al menos una persona por equipo trabaje con portátil/hoja de cálculo para agilizar los cálculos y dejar más tiempo a la interpretación directiva.

### Sesión online síncrona
- Compartir una copia editable de Google Sheets de *LogiFresco Sur* por cada sala reducida (*breakout room*) con celdas protegidas para los datos base y celdas abiertas para que el alumnado introduzca sus fórmulas de VME, sensibilidad y puntuaciones.
- Usar el chat para verificar resultados intermedios ("Escribid el VME de la Opción 2 antes de pasar a la sensibilidad") asegurando que ningún equipo arrastra errores aritméticos.
- Destinar los últimos 10 minutos de la Actividad 3 a consultas 1 a 1 en sala principal o salas rápidas mientras el resto completa su *Decision Analysis Sheet*.

### Sesión asíncrona
- **Prework (25 min)**: Lectura del caso *LogiFresco Sur* y vídeo tutorial de 7 minutos del formador sobre cómo montar un cuadro de 3 escenarios y sensibilidad en Excel/Google Sheets.
- **Postwork (45 min)**: Investigar al menos dos datos reales marcados con `[?]` en la *Decision Analysis Sheet* propia (por ejemplo, pidiendo una estimación a finanzas o un presupuesto orientativo a un proveedor) y actualizar la hoja en el LMS antes del Tema 5.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza**: Aplica directamente las técnicas y criterios ponderados diseñados en el **Tema 2 (*Selección de criterios y técnicas*)** sobre el portafolio de alternativas construido en el **Tema 3 (*Desarrollo de alternativas*)**, reforzando también la gestión de riesgos vista en el **Bloque 2, Tema 4 (*Gestión de proyectos*)**.
- **Competencias que desarrolla**: Pensamiento financiero aplicado, gestión del riesgo empresarial, modelado ágil bajo incertidumbre, pensamiento crítico ante ofertas/presupuestos y síntesis ejecutiva de *trade-offs*.
- **Conexión con el tema anterior y posterior**:
  - *Tema anterior (Bloque 3, Tema 3: Desarrollo de alternativas)*: Toma las fichas simétricas de las 3 alternativas + *statu quo* y las somete a escrutinio numérico, de riesgos y de incertidumbre.
  - *Tema posterior (Bloque 3, Tema 5: Decisión)*: La **Hoja de Análisis Comparativo** elaborada hoy proporciona la evidencia objetiva necesaria para tomar la decisión final en el Tema 5, donde trabajaremos cómo neutralizar los sesgos cognitivos que sabotean incluso los mejores análisis y cómo justificar y comunicar la elección a los *stakeholders*.
- **Evidencia de aprendizaje que dejará el alumnado**: Una **Decision Analysis Sheet** completa (tabla de escenarios/sensibilidad, matriz ponderada con evidencias, mapa de riesgos residuales y síntesis de *trade-offs*) aplicada a su problema laboral real.

---

## Siguientes pasos para el formador

1. **Preparar el archivo de cálculo de *LogiFresco Sur***: Tener lista una versión para el alumnado (solo datos y estructura) y una versión resuelta para el formador con gráfico dinámico de sensibilidad.
2. **Verificar notas normativas del caso**: Antes de impartir, comprobar la situación actual de las ordenanzas de ZBE en ciudades españolas y posibles ayudas públicas vigentes para que los comentarios en clase reflejen la realidad actualizada.
3. **Acompañar la diversidad numérica del aula**: Emparejar en los equipos del caso perfiles con mayor soltura financiera junto a perfiles más operativos o comerciales para potenciar el aprendizaje entre iguales.
4. **Supervisar las entregas en el LMS**: Revisar que las *Decision Analysis Sheets* del alumnado identifican claramente los supuestos `[?]` y no presentan un único escenario optimista sin prueba de estrés.
5. **Conectar con el Tema 5**: Pedir al alumnado que acuda a la siguiente sesión con su hoja de análisis cerrada y reflexionando sobre qué resistencias emocionales, políticas o sesgos anticipan en su empresa al presentar la opción ganadora.
