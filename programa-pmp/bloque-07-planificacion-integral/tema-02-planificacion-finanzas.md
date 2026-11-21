# Tema 2. Planificación financiera, estimación de costes y presupuesto

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Tema 2. Planificación financiera, estimación de costes y presupuesto |
| **Bloque y posición dentro del programa** | Bloque 7: Planificación de cronograma, finanzas, personas y riesgos · Tema 2 de 4 (Tema 17 de 27 del programa) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Project Managers, mandos intermedios, consultores, ingenieros y aspirantes a la certificación PMP® |
| **Nivel de dificultad** | Intermedio / Avanzado |
| **Prerrequisitos** | Haber completado el Bloque 6 (alcance y EDT/WBS) y el Bloque 7, Tema 1 (cronograma, hitos y optimización) |
| **Resultado general de aprendizaje** | Elaborar estimaciones de costes fundamentadas (incorporando el Coste de Calidad y la Base de Estimaciones), estructurar el presupuesto separando con rigor las reservas de contingencia y de gestión, y conciliar el flujo financiero del proyecto con los límites de tesorería de la organización |

---

## 2. Objetivos de aprendizaje

Al finalizar este tema, el alumnado será capaz de:

1. **Formular** las reglas de gobierno económico de un proyecto en un Plan de Gestión Financiera (precisión, rangos de exactitud, umbrales de control y reglas de imputación contable). *(Nivel de Bloom: Crear)*
2. **Clasificar** los distintos tipos de costes (directos, indirectos, fijos, variables, hundidos y de oportunidad) y los componentes del Coste de Calidad (CoQ) para sustentar decisiones financieras racionales. *(Nivel de Bloom: Analizar)*
3. **Calcular** estimaciones de costes mediante técnicas análoga, paramétrica, ascendente y PERT, documentando los supuestos críticos en una Base de Estimaciones (*Basis of Estimates*). *(Nivel de Bloom: Aplicar)*
4. **Estructurar** la Línea Base de Costes (*Cost Baseline*) y el Presupuesto Total del Proyecto diferenciando con exactitud el papel, el control y la ubicación contable de la reserva de contingencia y la reserva de gestión. *(Nivel de Bloom: Aplicar)*
5. **Evaluar** desfases entre el gasto planificado (curva S) y los techos periódicos de tesorería para proponer ajustes viables mediante la conciliación del límite de financiación. *(Nivel de Bloom: Evaluar)*

---

## 3. Contenidos esenciales

### 3.1 Planificación de la gestión financiera y tipos de costes del proyecto

#### Explicación breve y clara
Antes de estimar un solo euro, el director del proyecto establece el marco de gobernanza económica en el **Plan de Gestión de los Costes (o Plan de Gestión Financiera)**. Este plan define cómo se estimarán, presupuestarán, financiarán, controlarán y reportarán los recursos monetarios del proyecto a lo largo de su ciclo de vida. Comprender la naturaleza económica de cada partida —y qué partidas **no** deben distorsionar las decisiones futuras, como los costes hundidos— permite al director del proyecto hablar el mismo idioma que la dirección financiera y adaptar la financiación a enfoques predictivos, ágiles o híbridos.

#### Conceptos clave
- **Plan de Gestión de los Costes**: define unidades de medida (euros, horas-persona), nivel de precisión (redondeo a centenas o miles), nivel de exactitud (rango de tolerancia por fase), enlaces con cuentas de control del ERP contable, umbrales de variación (p. ej., ±5 % o ±10 % para escalado) y reglas de medición del desempeño (Valor Ganado — EVM).
- **Exactitud progresiva (rangos orientativos)**:
  - Estimación de Orden de Magnitud Aproximada (*ROM — Rough Order of Magnitude*, fase de inicio): habitualmente **-25 % a +75 %**.
  - Estimación Presupuestaria (*Budget Estimate*): habitualmente **-10 % a +25 %**.
  - Estimación Definitiva (*Definitive Estimate*, planificación detallada): habitualmente **-5 % a +10 %**.
  *(Nota: verificar las convenciones exactas de porcentajes en la edición vigente de la Guía del PMBOK® antes de impartir).*
- **Financiación en entornos ágiles e híbridos**: frente al presupuesto cerrado por alcance fijo de los proyectos predictivos, los entornos ágiles suelen financiar **equipos estables o flujos de valor (*value streams*)** mediante una tasa de consumo predecible (*burn rate* por sprint), ajustando el alcance priorizado en el backlog según el valor entregado.

#### Definiciones necesarias
- **Costes directos**: atribuibles exclusivamente al proyecto (salarios del equipo dedicado, licencias específicas, subcontrataciones, desplazamientos del proyecto).
- **Costes indirectos (gastos generales)**: compartidos por varios proyectos u operaciones de la empresa (alquiler de oficina, suministros, estructura de administración, dirección general).
- **Costes fijos vs. variables**: los fijos no varían con el volumen de producción/uso (alquiler de una sala, licencia anual plana); los variables cambian proporcionalmente al volumen (consumo cloud por transacción, horas de consultoría bajo demanda, materiales por unidad).
- **Coste hundido (*Sunk Cost*)**: gasto ya incurrido e irrecuperable en el pasado. **Regla financiera y de examen PMP**: los costes hundidos **nunca** deben influir en la decisión de continuar, pivotar o cancelar un proyecto ni sumarse indebidamente al presupuesto prospectivo de una nueva iniciativa.
- **Coste de oportunidad**: valor de la mejor alternativa rentable a la que se renuncia al asignar recursos limitados al proyecto actual.

#### Ejemplo práctico realista
Una pyme editorial en Barcelona invirtió 25.000 € el año pasado en un prototipo de aplicación móvil que fracasó por falta de adopción. Este año lanza un nuevo proyecto de plataforma web de suscripción. Durante la reunión presupuestaria, un socio insiste en "recuperar" esos 25.000 € incluyéndolos como partida obligatoria del nuevo presupuesto y rechazando una arquitectura más barata para "justificar lo ya gastado". El director del proyecto explica que los 25.000 € constituyen un **coste hundido** ya amortizado en la cuenta de resultados anterior y que las decisiones del nuevo proyecto deben basarse exclusivamente en los flujos futuros de coste y valor.

#### Errores frecuentes
- Confundir **precisión** (grado de redondeo: 12.437,25 € vs. 12.400 €) con **exactitud** (qué tan cerca está la estimación del coste real final).
- Caer en la **falacia del coste hundido**, manteniendo vivo un proyecto inviable solo porque "ya llevamos mucho gastado".
- Omitir costes indirectos, impuestos no deducibles, licencias recurrentes de infraestructura o costes del ciclo de vida operativo (mantenimiento post-lanzamiento).

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué una estimación con dos decimales puede ser muy precisa pero muy poco exacta?
2. Si un proyecto está en fase de inicio y arroja un coste estimado de 100.000 € con rango ROM (-25 % / +75 %), ¿cuál es el intervalo esperado que debes comunicar al patrocinador?
3. ¿Cómo se calcula el *burn rate* de un equipo ágil estable y qué ventaja ofrece frente al presupuesto tradicional en entornos de alta incertidumbre?

---

### 3.2 Técnicas de estimación de costes, Coste de Calidad (CoQ) y Base de Estimaciones

#### Explicación breve y clara
Estimar costes con credibilidad requiere seleccionar la técnica adecuada al nivel de definición del alcance, incluir de forma consciente la inversión necesaria en calidad para evitar sobrecostes mucho mayores por fallos, y dejar constancia transparente de **cómo se ha calculado cada cifra**. En dirección profesional de proyectos, un número sin su **Base de Estimaciones** no es una estimación: es una conjetura indefendible ante el comité financiero o el cliente.

#### Conceptos clave
- **Técnicas de estimación de costes**: análoga (referencia histórica global), paramétrica (ratios unitarios como €/m² o €/hora-desarrollo), ascendente (*bottom-up*, suma detallada de cada actividad y recurso) y por tres valores (PERT coste: $E = \frac{O + 4M + P}{6}$ o triangular).
- **Análisis de ofertas de proveedores**: contraste de presupuestos externos (RFP/RFQ) para paquetes subcontratados.
- **Coste de la Calidad (CoQ — *Cost of Quality*)**: marco económico que equilibra el dinero invertido para prevenir y detectar errores frente al coste financiero de corregir fallos internos o externos.
- **Base de Estimaciones (*Basis of Estimates*)**: documento de soporte auditable que acompaña a las estimaciones de costes.

#### Definiciones necesarias
- **Coste de Conformidad (inversión preventiva en calidad)**:
  - *Costes de prevención*: construir un producto sin defectos (formación del equipo, estándares y procesos documentados, herramientas adecuadas, revisiones tempranas de arquitectura).
  - *Costes de evaluación*: comprobar que el producto cumple requisitos antes de salir al cliente (pruebas unitarias/integrales, testing automatizado, inspecciones, auditorías de seguridad).
- **Coste de No Conformidad (dinero perdido por mala calidad)**:
  - *Costes de fallo interno*: defectos detectados **por el propio equipo antes de la entrega** al cliente (retrabajo, horas extra de corrección, desperdicio de material).
  - *Costes de fallo externo*: defectos detectados **por el cliente o usuario final** (garantías, soporte de emergencia, devoluciones, penalizaciones contractuales, demandas, pérdida de clientes y daño reputacional).
- **Base de Estimaciones**: registro formal que documenta: (1) cómo se desarrolló la estimación, (2) supuestos realizados (tarifas, tipos de cambio, disponibilidad), (3) restricciones conocidas, (4) rango de posibles resultados (p. ej., ±10 %) y (5) nivel de confianza.

#### Ejemplo práctico realista
Una pyme tecnológica en Málaga desarrolla una app de pedidos para una cadena de restauración. Estima un coste de conformidad de **14.000 €** (6.000 € en formación de diseño seguro y revisión de código —prevención— + 8.000 € en pruebas automatizadas de carga y usabilidad —evaluación—). Cuando un directivo sugiere eliminar las pruebas de carga para "ahorrar 8.000 €", el director del proyecto presenta datos de un lanzamiento anterior: un fallo de rendimiento en viernes noche generó **38.000 € en costes de fallo externo** (soporte de urgencia, reembolsos a franquiciados y pérdida de comisiones). La Base de Estimaciones documenta explícitamente este ratio y protege la partida de calidad.

#### Errores frecuentes
- Recortar los costes de prevención o evaluación (conformidad) bajo presión presupuestaria, disparando exponencialmente los costes de fallo interno y externo.
- Entregar una hoja de cálculo con cifras finales sin explicar supuestos (p. ej., sin indicar si los precios incluyen IVA, soporte post-arranque o tarifas externas de 2026).
- Usar estimaciones puramente análogas para firmar contratos de precio fijo (*Fixed Price*) con clientes externos.

#### Preguntas que el alumnado debería poder responder
1. ¿En qué categoría del Coste de Calidad (prevención, evaluación, fallo interno o fallo externo) clasificarías una auditoría de ciberseguridad previa al lanzamiento y una multa por brecha de datos tras el lanzamiento?
2. ¿Qué cinco elementos mínimos debería contener una Base de Estimaciones profesional?
3. ¿Por qué suele ser mucho más barato corregir un error en la fase de diseño que tras la puesta en producción?

---

### 3.3 Determinación del presupuesto: agregación de costes y estructura de reservas

#### Explicación breve y clara
Determinar el presupuesto consiste en sumar de forma ascendente las estimaciones de costes de las actividades individuales hasta los paquetes de trabajo y cuentas de control, distribuirlas a lo largo del cronograma (creando una línea de gasto acumulado o **Curva S**) y añadir las **reservas** de manera estructurada y transparente. Uno de los conceptos más evaluados en el examen PMP y más críticos en la gobernanza empresarial es la frontera exacta entre la **Línea Base de Costes** y el **Presupuesto Total del Proyecto**, marcada por los dos tipos de reservas.

#### Conceptos clave
- **Agregación de costes**: actividades → paquetes de trabajo → cuentas de control → estimación base del proyecto.
- **Reserva de contingencia (*Contingency Reserve*)**: fondos asignados para riesgos identificados ("incógnitas conocidas" o *known-unknowns*), calculados mediante análisis de riesgos (p. ej., EMV o simulación) o porcentaje justificado.
- **Reserva de gestión (*Management Reserve*)**: fondos reservados para trabajo imprevisto dentro del alcance del proyecto ("incógnitas desconocidas" o *unknown-unknowns*).
- **Línea Base de Costes (*Cost Baseline*)**: versión aprobada del presupuesto distribuido en el tiempo que se usa como referencia para medir el desempeño (BAC — *Budget at Completion* en Valor Ganado).
- **Curva S (*S-Curve*)**: representación gráfica del gasto acumulado a lo largo del tiempo (pendiente suave al inicio, pronunciada en ejecución intensiva y suave en el cierre).

#### Definiciones necesarias
- **Fórmulas estructurales imprescindibles**:
  $$\text{Línea Base de Costes (Cost Baseline / BAC)} = \text{Estimaciones de cuentas de control} + \text{Reserva de contingencia}$$
  $$\text{Presupuesto Total del Proyecto} = \text{Línea Base de Costes} + \text{Reserva de gestión}$$
- **Gobernanza y autoridad sobre las reservas**:

| Característica | Reserva de Contingencia | Reserva de Gestión |
|---|---|---|
| **Tipo de riesgo cubierto** | Riesgos identificados (*known-unknowns*) | Riesgos no identificados dentro del alcance (*unknown-unknowns*) |
| **¿Forma parte de la Línea Base de Costes (BAC)?** | **SÍ** | **NO** |
| **¿Forma parte del Presupuesto Total?** | **SÍ** | **SÍ** |
| **Autoridad habitual de uso** | Director del Proyecto (según umbrales del plan) | Patrocinador / Comité de Dirección |
| **¿Requiere solicitud formal de cambio para usarse?** | No (si el riesgo estaba previsto y dentro de su autoridad) | **SÍ** (al aprobarse, los fondos se transfieren a la Línea Base de Costes) |

#### Ejemplo práctico realista
Una empresa de automoción auxiliar en Vigo presupuesta la digitalización de una línea de montaje:
- Suma de cuentas de control (ingeniería, hardware, software y formación): **150.000 €**.
- Reserva de contingencia (calculada sobre riesgos identificados en integración de sensores y entregas de proveedor): **20.000 €**.
- **Línea Base de Costes (BAC)** = $150.000 + 20.000 = \mathbf{170.000\text{ €}}$.
- Reserva de gestión aprobada por el comité (10 % de la línea base para imprevistos no anticipados): **17.000 €**.
- **Presupuesto Total del Proyecto** = $170.000 + 17.000 = \mathbf{187.000\text{ €}}$.
Si durante la ejecución ocurre un cambio normativo técnico imprevisto que cuesta 9.000 €, el director del proyecto presenta una **solicitud de cambio** para mover 9.000 € desde la reserva de gestión hacia la Línea Base de Costes (que pasará de 170.000 € a 179.000 €, mientras el Presupuesto Total permanece en 187.000 €).

#### Errores frecuentes
- Incluir la reserva de gestión dentro de la Línea Base de Costes (o excluir de ella la reserva de contingencia).
- Usar la reserva de gestión libremente sin aprobación formal del patrocinador ni control integrado de cambios.
- Tratar la reserva de contingencia como "dinero sobrante" para añadir funcionalidades no aprobadas (*gold plating*).
- Ignorar la distribución temporal (curva S) y aprobar únicamente una cifra global anual sin calendario de desembolsos.

#### Preguntas que el alumnado debería poder responder
1. Si un riesgo identificado y presupuestado en el registro de riesgos se materializa, ¿de qué reserva se financian las acciones de respuesta y se modifica el Presupuesto Total?
2. ¿Qué ocurre con la Línea Base de Costes y con el Presupuesto Total cuando el Comité de Control de Cambios aprueba transferir 10.000 € de la reserva de gestión a una cuenta de control?
3. ¿Por qué el gasto acumulado de la mayoría de proyectos adopta forma de "S"?

---

### 3.4 Conciliación del límite de financiación y requisitos de tesorería

#### Explicación breve y clara
Que un proyecto tenga un presupuesto total aprobado **no significa que todo el dinero esté disponible el día 1**. Las pymes y grandes empresas operan con restricciones de tesorería, cierres trimestrales, líneas de crédito o desembolsos de subvenciones ligados a hitos. La **conciliación del límite de financiación (*Funding Limit Reconciliation*)** contrasta la curva de gasto planificado con los techos de financiación periódicos establecidos por la organización. Cuando el gasto previsto en un mes o trimestre supera la caja disponible, el director del proyecto debe reajustar el cronograma, reprogramar entregas o renegociar plazos de pago con proveedores antes de comprometer la liquidez de la empresa.

#### Conceptos clave
- **Conciliación del límite de financiación**: proceso de alinear los desembolsos planificados del proyecto con los límites de fondos disponibles por periodo.
- **Requisitos de financiación del proyecto (*Project Funding Requirements*)**: salida formal que define la financiación total y periódica (escalonada en bloques trimestrales o por hitos), incorporando la reserva de gestión como margen superior sobre la curva S.
- **Restricciones de fechas impuestas**: consecuencia habitual de conciliar financiación (mover paquetes de trabajo a trimestres posteriores para evitar tensiones de caja).
- **Sinergia con enfoque híbrido/incremental**: priorizar entregas de mayor retorno temprano (MVP) permite financiar fases posteriores con los ingresos o ahorros generados por la primera liberación.

#### Definiciones necesarias
- **Curva escalonada de financiación (*Funding Step Function*)**: gráfico que muestra los aportes periódicos de fondos (en escalones) situados siempre por encima o al nivel de la curva S de costes acumulados; la diferencia al final del proyecto entre la financiación total y la línea base corresponde a la **reserva de gestión**.
- **Desfase de tesorería (*Funding Gap*)**: diferencia negativa entre los fondos disponibles en un periodo determinado y los compromisos de gasto planificados en ese mismo periodo.

#### Ejemplo práctico realista
Una pyme agroalimentaria en Murcia lanza una planta de envasado inteligente con un presupuesto base de 300.000 € en 3 trimestres, pero su dirección financiera fija un techo de caja de **90.000 € en T1** (hasta cobrar la campaña de exportación). La curva S inicial exigía 115.000 € en T1 por la compra anticipada de dos máquinas etiquetadoras. Mediante la conciliación del límite de financiación, el director del proyecto negocia con el fabricante un anticipo del 30 % en T1 y el 70 % restante contra entrega en T2, y desplaza la compra de licencias de analítica avanzada al T2. El presupuesto total sigue siendo 300.000 €, pero el proyecto se ejecuta sin quebrar la tesorería de la pyme.

#### Errores frecuentes
- Planificar el cronograma y el presupuesto de forma aislada sin consultar el calendario de liquidez de Dirección Financiera.
- Recortar alcance crítico o partidas de calidad para cuadrar un límite trimestral en lugar de reprogramar fechas no críticas o negociar condiciones de pago.
- Olvidar que el devengo contable (cuándo se realiza el trabajo) y el flujo de caja (cuándo se paga la factura) pueden diferir en 30, 60 o 90 días.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué diferencia visual existe en un gráfico financiero entre la Curva S (Línea Base de Costes) y la línea escalonada de Requisitos de Financiación?
2. ¿Qué tres palancas tiene un director de proyecto para resolver un déficit de financiación en el primer trimestre sin sacrificar la calidad del entregable?
3. ¿Cómo afecta la conciliación del límite de financiación al cronograma del proyecto?

---

## 4. Metodología didáctica

La sesión tiene una duración total de **4 horas (240 minutos)** en formato online interactivo (adaptable a presencial o asíncrono según la sección 9).

| Fase | Duración | Actividad principal | Qué hace el formador | Qué hace el alumnado |
|---|---:|---|---|---|
| **1. Apertura y activación** | 25 min | Diagnóstico exprés + Actividad 1: *"Auditoría de errores financieros: costes hundidos y CoQ"* | Conecta con el Tema 1 (coste de *crashing* en LogiVía), lanza encuesta sobre decisiones con costes hundidos y modera un debate breve de 2 dilemas financieros reales. | Vota en los dilemas financieros, clasifica 6 partidas reales en categorías CoQ y comparte un ejemplo de sobrecoste vivido en su empresa. |
| **2. Exposición breve / Microlearning (Bloque A)** | 35 min | Plan de Gestión Financiera, precisión vs. exactitud (ROM/Presupuestaria/Definitiva), técnicas de estimación, CoQ y Base de Estimaciones | Explica los conceptos clave con esquemas comparativos y muestra un ejemplo real de Base de Estimaciones auditable y cálculo PERT de coste. | Toma notas en su ficha de trabajo, calcula el intervalo ROM y definitivo de un ejemplo rápido y valida dudas en directo. |
| **3. Actividad guiada (Aplicación)** | 35 min | Actividad 2: *Construcción del castillo presupuestario (Línea Base, Reservas y solicitudes de cambio)* | Organiza grupos en salas online con una tabla desordenada de 10 partidas económicas para ensamblar la Línea Base y el Presupuesto Total y simular 2 eventos de cambio. | Clasifica cada partida (cuenta de control, contingencia, reserva de gestión o coste hundido excluido), calcula BAC y Presupuesto Total y resuelve los 2 eventos. |
| **4. Exposición breve / Microlearning (Bloque B)** | 25 min | Curva S, Requisitos de Financiación, Conciliación del límite de financiación y presupuesto en entornos ágiles/híbridos (*burn rate*) | Muestra visualmente el solapamiento entre la curva S y los escalones de tesorería, y explica las palancas de conciliación y el enfoque financiero ágil. | Interpreta un gráfico de curva S con déficit en T2 y propone en el chat qué palanca de conciliación aplicaría. |
| **5. Análisis de caso práctico** | 50 min | Resolución en equipo del caso **Clínicas SaludNorte S.A.** (agregación presupuestaria, reservas, conciliación T1 y defensa del CoQ) | Presenta el caso y verifica en salas que los equipos detecten el coste hundido (18.000 €), calculen exactamente 212.000 € / 233.200 € y resuelvan el exceso de 12.000 € en T1 sin destruir CC-3. | Calcula Línea Base, Presupuesto Total y flujo trimestral; diseña la propuesta de conciliación de tesorería y prepara el argumentario financiero frente al director financiero. |
| **6. Discusión guiada y transferencia** | 45 min | Defensa ejecutiva del caso (role-play frente al CFO) + Actividad 3: *Base de Estimaciones y mapa de reservas de tu proyecto real* | Actúa como Director Financiero exigente en la defensa de 2 equipos, aporta la solución estructurada y orienta la transferencia al proyecto real de cada participante. | Defiende su presupuesto ante objeciones financieras, contrasta soluciones y redacta la Base de Estimaciones y estructura de reservas para un proyecto propio. |
| **7. Síntesis y cierre** | 25 min | Mini-test sumativo tipo PMP (5 preguntas), síntesis visual de fórmulas financieras y autoevaluación | Administra el test cronometrado, desgrana las trampas de cada pregunta PMP y conecta con el Tema 3 (Interesados, comunicaciones y recursos). | Responde el test individual, completa su autoevaluación y define una mejora inmediata de control presupuestario para su equipo. |
| **TOTAL** | **240 min** | **Secuencia completa (4 horas)** | | |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): El dilema del Coste de Calidad y la trampa del coste hundido
- **Nombre**: *¿Dónde ahorras hoy para no pagar el triple mañana?*
- **Objetivo**: Clasificar partidas presupuestarias reales en las 4 categorías del Coste de Calidad (CoQ) e identificar correctamente costes hundidos en decisiones de dirección.
- **Instrucciones para el alumnado**:
  1. De manera individual (6 min), clasifica estas 6 partidas en *Prevención*, *Evaluación*, *Fallo Interno*, *Fallo Externo* o *Coste Hundido*:
     - (a) Curso de formación en código seguro para desarrolladores.
     - (b) Reprocesado de 200 piezas defectuosas detectadas en control de calidad antes del envío.
     - (c) Pago de 15.000 € realizado hace un año por una consultoría de marca ya descartada.
     - (d) Auditoría de pruebas de penetración (*pentesting*) previa al lanzamiento web.
     - (e) Indemnización y soporte 24/7 por caída del portal de clientes en Black Friday.
     - (f) Implementación de plantillas y estándares de documentación de requisitos.
  2. En plenario (9 min), debatid un dilema real: *"Si ya hemos gastado 80.000 € de un presupuesto de 100.000 € en un módulo que el mercado ya no demanda, ¿debemos invertir los últimos 20.000 € para terminarlo?"*
- **Materiales necesarios**: Encuesta interactiva en plataforma / pizarra colaborativa con 5 columnas.
- **Tiempo estimado**: 15 minutos (integrados en la Fase 1).
- **Rol del formador**: Dinamizador; refuerza la diferencia entre prevención y evaluación, y desmonta el sesgo emocional del coste hundido.
- **Producto o entregable esperado**: Mapa clasificado de las 6 partidas (respuestas: a=Prevención, b=Fallo Interno, c=Coste Hundido, d=Evaluación, e=Fallo Externo, f=Prevención) y regla de decisión escrita contra la falacia del coste hundido.
- **Criterios de éxito**: Mínimo 5/6 clasificaciones exactas y argumentación basada en valor futuro (no en gasto pasado).

### Actividad 2 (Aplicación): Ensamblaje del castillo presupuestario y gestión de reservas
- **Nombre**: *De los paquetes de trabajo a la Línea Base y el Presupuesto Total*
- **Objetivo**: Construir con exactitud la jerarquía presupuestaria de un proyecto y aplicar las reglas de gobernanza sobre reserva de contingencia y reserva de gestión.
- **Instrucciones para el alumnado**:
  1. En grupos de 3-4 personas, revisad los 7 conceptos económicos de la Ficha de Trabajo (Sección 8) del proyecto *"Portal de Proveedores"* (incluye 3 cuentas de control, 2 reservas de contingencia específicas, 1 reserva de gestión y 1 estudio previo descartado).
  2. Calculad: (a) Estimación base sin reservas, (b) Total reserva de contingencia, (c) **Línea Base de Costes (BAC)**, y (d) **Presupuesto Total del Proyecto**.
  3. Resolved 2 eventos en ejecución:
     - *Evento 1*: Se materializa un riesgo identificado (retraso de licencia) con impacto de 6.000 € cubierto en la reserva de contingencia. ¿Cómo cambian BAC y Presupuesto Total? ¿Requiere solicitud formal de cambio?
     - *Evento 2*: Aparece un requisito regulatorio imprevisto (dentro del alcance del proyecto) con coste de 12.000 € que requiere usar la reserva de gestión. ¿Qué procedimiento debe seguir el PM y cómo quedan la Línea Base de Costes y el Presupuesto Total tras aprobarse?
- **Materiales necesarios**: Ficha de trabajo (Sección 8) y hoja de cálculo compartida.
- **Tiempo estimado**: 35 minutos (Fase 3).
- **Rol del formador**: Supervisor técnico en salas; confirma que el estudio previo descartado (coste hundido) queda fuera y valida el movimiento contable de los dos eventos.
- **Producto o entregable esperado**: Tabla presupuestaria validada (solución de referencia: Base = 140.000 €; Contingencia = 18.000 €; **Línea Base / BAC = 158.000 €**; Reserva de gestión = 15.800 €; **Presupuesto Total = 173.800 €**; estudio previo de 9.000 € excluido. En Evento 1: se usa contingencia dentro de la autoridad del PM, BAC sigue en 158.000 € y Presupuesto Total en 173.800 €. En Evento 2: requiere solicitud formal de cambio aprobada; se transfieren 12.000 € de reserva de gestión a la Línea Base, por lo que la nueva Línea Base pasa a **170.000 €**, la reserva de gestión remanente baja a 3.800 € y el Presupuesto Total sigue siendo **173.800 €**).
- **Criterios de éxito**: 100 % de exactitud aritmética y aplicación rigurosa del flujo de control de cambios en ambos eventos.

### Actividad 3 (Transferencia a la realidad laboral): Base de Estimaciones y mapa financiero de tu proyecto
- **Nombre**: *Presupuesto a prueba de auditoría financiera*
- **Objetivo**: Elaborar una Base de Estimaciones profesional y una separación explícita de reservas para un proyecto real del entorno laboral del alumnado.
- **Instrucciones para el alumnado**:
  1. Elige una iniciativa o proyecto real de tu empresa (o emprendimiento) con al menos 3 partidas principales de gasto (p. ej., personal interno/externo, tecnología/licencias y calidad/formación).
  2. Cumplimenta la **Plantilla de Base de Estimaciones y Presupuesto** (Sección 8) especificando: técnica de estimación empleada, rango de exactitud según la fase, supuestos clave, partidas de Coste de Conformidad (CoQ), reserva de contingencia y reserva de gestión recomendada.
  3. Identifica una posible restricción de tesorería (límite mensual/trimestral) y define una palanca concreta de conciliación.
  4. Comparte el documento en el foro de transferencia del campus y aporta una sugerencia de mejora constructiva al presupuesto de otro compañero/a.
- **Materiales necesarios**: Plantilla de Base de Estimaciones y Presupuesto (Sección 8).
- **Tiempo estimado**: 20 minutos de borrador en sesión + entrega final asíncrona en el campus.
- **Rol del formador**: Asesor financiero de proyectos; revisa que las reservas no sean porcentajes arbitrarios sin justificación y que se incluyan partidas de calidad (CoQ).
- **Producto o entregable esperado**: Base de Estimaciones y cuadro presupuestario con reservas y plan de tesorería para un proyecto real.
- **Criterios de éxito**: Inclusión explícita de supuestos, técnica de estimación, rango de exactitud, distinción entre contingencia y gestión, y coherencia de la palanca de tesorería.

---

## 6. Caso práctico

### Contexto empresarial
**Clínicas SaludNorte S.A.** es una red privada de 6 clínicas médicas y dentales en Bilbao y Santander (110 empleados) que necesita modernizar sus sistemas para cumplir con la interoperabilidad sanitaria y reducir tiempos administrativos. Para ello aprueba el proyecto **Migración a Historia Clínica Digital (HCD) y Portal del Paciente**, con una duración prevista de **3 trimestres (9 meses)** y enfoque híbrido (infraestructura y cumplimiento predictivos; módulos del Portal del Paciente incrementales).

### Situación o problema
El Consejo de Administración ha fijado un **techo presupuestario total máximo de 240.000 €** (incluyendo reserva de gestión) y, debido a compromisos de inversión inmobiliaria en una clínica nueva, la Dirección Financiera impone **límites estrictos de tesorería (financiación) por trimestre**:
- **Trimestre 1 (T1)**: máximo **85.000 €**
- **Trimestre 2 (T2)**: máximo **90.000 €**
- **Trimestre 3 (T3)**: máximo **65.000 €**
- *(Total financiación disponible = 240.000 €)*

Antes de la reunión de aprobación final surgen **tres conflictos críticos** que debes resolver como Director/a del Proyecto:
1. El **desembolso planificado inicial** supera el límite de tesorería del Trimestre 1.
2. El **Director Financiero** propone recortar **15.000 € de la Cuenta de Control CC-3** (pruebas de migración, calidad y auditoría de ciberseguridad) para reducir el gasto en T1 y T2. Sin embargo, el equipo técnico advierte de que omitir esas pruebas generaría fallos graves de migración de historiales y vulnerabilidades sanitarias con un **coste estimado de no conformidad (fallo externo) de 48.000 €** (reprocesos manuales, paradas clínicas y eventuales sanciones/daño reputacional).
3. Un **directivo de operaciones** exige sumar al presupuesto del proyecto **18.000 € que la empresa pagó el año pasado** por un estudio de viabilidad de un software que finalmente se descartó, alegando que "hay que imputar todo lo que ha costado la digitalización".

### Datos disponibles

| Cuenta de Control (CC) | Coste base estimado (€) | Reserva de contingencia (€) | Total CC en Línea Base (€) | Planificación T1 (€) | Planificación T2 (€) | Planificación T3 (€) |
|---|---:|---:|---:|---:|---:|---:|
| **CC-1** Análisis, cumplimiento RGPD y diseño UX | 36.000 € | 4.000 € | 40.000 € | 40.000 € (100 %) | 0 € | 0 € |
| **CC-2** Desarrollo e integración HCD + Portal del Paciente | 90.000 € | 14.000 € | 104.000 € | 52.000 € (50 %) | 52.000 € (50 %) | 0 € |
| **CC-3** Calidad, ciberseguridad y pruebas (CoQ conformidad) | 22.000 € | 3.000 € | 25.000 € | 5.000 € (20 %) | 15.000 € (60 %) | 5.000 € (20 %) |
| **CC-4** Despliegue, migración de datos y formación clínica | 38.000 € | 5.000 € | 43.000 € | 0 € | 12.900 € (30 %) | 30.100 € (70 %) |

**Condiciones adicionales:**
- La política de la organización exige una **reserva de gestión del 10 % sobre la Línea Base de Costes**.
- Dentro de **CC-2**, existen funcionalidades no críticas del Portal del Paciente (módulo de recordatorios avanzados y pasarela de valoraciones de usuarios) valoradas en **12.000 €** que pueden planificarse como **entrega incremental posterior** sin retrasar el arranque del núcleo clínico HCD.

### Preguntas de análisis
1. ¿Cuál es la suma de costes base, el total de reserva de contingencia, la **Línea Base de Costes (BAC)**, la **reserva de gestión (10 %)** y el **Presupuesto Total del Proyecto**? ¿Cumple el techo global de 240.000 €?
2. ¿Cómo debe tratarse contable y estratégicamente la partida de **18.000 €** del estudio descartado del año anterior?
3. Al comparar la curva S inicial con los techos trimestrales de financiación (85.000 € / 90.000 € / 65.000 €), ¿en qué trimestre existe un desfase de tesorería y de cuánto dinero exacto es?
4. ¿Cómo fundamentas financieramente el rechazo al recorte de 15.000 € en **CC-3** utilizando el concepto de Coste de Calidad (CoQ)?
5. ¿Qué plan concreto de **conciliación del límite de financiación** resuelve el desfase de T1 respetando los techos de T1, T2 y T3 sin comprometer la calidad clínica?

### Tarea a realizar
En equipos de 3-4 personas, preparad una **Propuesta Presupuestaria Conciliada** para presentar al Comité de Dirección (máximo 1 página o 3 diapositivas) con:
1. Cuadro de agregación presupuestaria completa (Costes base, Contingencia, Línea Base/BAC, Reserva de Gestión y Presupuesto Total).
2. Comparativa trimestral **Antes vs. Después** de la conciliación del límite de financiación (verificando cumplimiento de los 3 techos trimestrales).
3. Argumentario ejecutivo breve (3 puntos) dirigido al Director Financiero sobre el **CoQ de CC-3** y al directivo de operaciones sobre los **18.000 € del estudio descartado**.

### Posibles soluciones o criterios de análisis

#### 1. Agregación presupuestaria y reservas
- **Suma de costes base estimados**: $36.000 + 90.000 + 22.000 + 38.000 = \mathbf{186.000\text{ €}}$.
- **Suma de reservas de contingencia**: $4.000 + 14.000 + 3.000 + 5.000 = \mathbf{26.000\text{ €}}$.
- **Línea Base de Costes (Cost Baseline / BAC)**: $186.000 + 26.000 = \mathbf{212.000\text{ €}}$.
- **Reserva de gestión (10 % sobre la Línea Base)**: $0,10 \times 212.000 = \mathbf{21.200\text{ €}}$ *(queda fuera de la Línea Base de Costes, controlada por el Consejo/Patrocinador)*.
- **Presupuesto Total del Proyecto**: $212.000 + 21.200 = \mathbf{233.200\text{ €}}$.
  - **Validación del techo global**: 233.200 € $\le$ 240.000 € (cumple el techo con un margen de seguridad adicional de 6.800 €).
- **Tratamiento de los 18.000 € del año pasado**: es un **coste hundido (*sunk cost*)** ya incurrido e irrecuperable; **NO** debe incluirse en la Línea Base de Costes ni en el Presupuesto Total del nuevo proyecto (hacerlo distorsionaría artificialmente el BAC, las futuras métricas de Valor Ganado y el análisis de rentabilidad).

#### 2. Diagnóstico trimestral inicial vs. Conciliación del límite de financiación

| Trimestre | Límite de financiación | Gasto inicial Línea Base | Estado inicial | Ajuste propuesto (CC-2 incremental) | Gasto conciliado Línea Base | Acumulado Curva S | Margen disponible vs. techo |
|---|---:|---:|---|---:|---:|---:|---:|
| **T1** | 85.000 € | **97.000 €** | **Exceso: +12.000 €** | -12.000 € | **85.000 €** | 85.000 € | 0 € (cumple) |
| **T2** | 90.000 € | 79.900 € | Margen: +10.100 € | +10.000 € | **89.900 €** | 174.900 € | +100 € (cumple) |
| **T3** | 65.000 € | 35.100 € | Margen: +29.900 € | +2.000 € | **37.100 €** | **212.000 €** | +27.900 € (cumple) |
| **Total** | **240.000 €** | **212.000 €** | *(+21.200 € Res. Gestión)* | **0 €** | **212.000 €** | **212.000 €** | **+28.000 €** *(cubre los 21.200 € de Res. Gestión)* |

- **Detalle de la solución óptima**:
  - Reprogramar **12.000 € de funcionalidades secundarias del Portal del Paciente (CC-2)** desde T1 hacia T2 (10.000 €, aprovechando casi todo el margen libre de 10.100 € en T2) y T3 (2.000 €). *(Alternativa igualmente válida: mover los 12.000 € íntegros a T3 dejando T2 en 79.900 € y T3 en 47.100 €, lo que ofrece mayor holgura de tesorería en T2; o renegociar hitos de facturación a 60 días con el proveedor de desarrollo).*
  - Obsérvese que la suma de márgenes trimestrales libres en T2 y T3 (28.000 €) cubre holgadamente los **21.200 € de reserva de gestión** en caso de que surgiera un imprevisto en la fase de ejecución/despliegue.
- **Defensa del Coste de Calidad (CC-3)**: recortar 15.000 € de conformidad (pruebas y ciberseguridad en datos médicos sensibles) expone a Clínicas SaludNorte a **48.000 € en costes de fallo externo** (un impacto neto negativo de **-33.000 €**, es decir, un ratio de 3,2 € perdidos por cada 1 € "ahorrado", además del riesgo normativo RGPD en datos de salud — *verificar régimen sancionador vigente de la AEPD/RGPD antes de citar cifras legales concretas*).

### Preguntas de reflexión final
1. Si durante el Trimestre 2 surge una necesidad imprevista de 15.000 € que requiere activar la reserva de gestión, ¿qué problema de tesorería inmediata aparecería en T2 y cómo habría que gestionarlo con Dirección Financiera?
2. ¿Qué ventajas ofreció el enfoque híbrido (desplazar entregas incrementales del Portal) frente a un enfoque 100 % rígido para resolver la conciliación del límite de financiación?

---

## 7. Evaluación

### Evaluación diagnóstica breve (inicio de sesión, 5 min)
Tres preguntas rápidas en encuesta online:
1. ¿Cuál de las siguientes reservas forma parte de la **Línea Base de Costes**? *(A: Reserva de gestión / B: Reserva de contingencia / C: Ambas / D: Ninguna)* → Respuesta: **B**.
2. Una empresa gastó 40.000 € en un proveedor que quebró; al presupuestar la continuación del proyecto con un nuevo proveedor, esos 40.000 € son: *(A: Coste variable / B: Coste de oportunidad / C: Coste hundido)* → Respuesta: **C**.
3. ¿Qué rango de exactitud suele asociarse a una estimación temprana de Orden de Magnitud Aproximada (ROM)? → Respuesta orientativa: **-25 % a +75 %**.

### Evaluación formativa durante la sesión
- Validación guiada de la clasificación CoQ en la Actividad 1.
- Verificación paso a paso en salas de los cálculos y eventos de cambio de la Actividad 2 (distinción entre reserva de contingencia y gestión).
- Revisión crítica durante el *role-play* de defensa presupuestaria del caso **Clínicas SaludNorte S.A.** ante objeciones del formador (rol de Director Financiero).

### Evaluación sumativa al final (mini-test tipo PMP, 15 min)
Cinco preguntas situacionales/numéricas (superación mínima: 4/5):

1. **(Cálculo presupuestario)** Un proyecto tiene costes estimados de cuentas de control por 320.000 €, reservas de contingencia por 30.000 € y una reserva de gestión de 35.000 €. ¿Cuál es su Línea Base de Costes (BAC) y su Presupuesto Total?
   - A) BAC = 320.000 €; Presupuesto Total = 385.000 €
   - B) BAC = 350.000 €; Presupuesto Total = 385.000 € *(Correcta: 320.000 + 30.000 = 350.000 €; + 35.000 = 385.000 €)*
   - C) BAC = 355.000 €; Presupuesto Total = 385.000 €
   - D) BAC = 385.000 €; Presupuesto Total = 385.000 €
2. **(Gobernanza de reservas)** Durante la ejecución ocurre un evento climático totalmente imprevisto que daña equipamiento del proyecto y cuesta 18.000 € repararlo. Este riesgo no estaba identificado en el Registro de Riesgos. ¿Qué debe hacer el Director del Proyecto?
   - A) Utilizar directamente la reserva de contingencia sin avisar al patrocinador.
   - B) Presentar una solicitud formal de cambio para transferir 18.000 € de la reserva de gestión a la Línea Base de Costes. *(Correcta)*
   - C) Absorber el coste eliminando las pruebas de calidad del siguiente hito.
   - D) Registrar los 18.000 € como coste hundido y mantener intacta la Línea Base.
3. **(Coste de Calidad - CoQ)** Para mejorar la fiabilidad de una plataforma de comercio electrónico antes del lanzamiento, el equipo añade pruebas automatizadas de regresión y una auditoría externa de rendimiento. ¿Cómo se clasifican estos costes en el modelo CoQ?
   - A) Costes de no conformidad — fallo interno.
   - B) Costes de conformidad — evaluación. *(Correcta)*
   - C) Costes de conformidad — prevención.
   - D) Costes de no conformidad — fallo externo.
4. **(Conciliación de financiación)** Al consolidar la curva S de tu proyecto, observas que el gasto planificado en el mes 4 es de 60.000 €, pero el departamento financiero te comunica un límite estricto de tesorería de 45.000 € para ese mes. ¿Cuál es la mejor acción inicial?
   - A) Reducir la reserva de contingencia en 15.000 € para que el gráfico cuadre.
   - B) Realizar una conciliación del límite de financiación reprogramando paquetes de trabajo con holgura o renegociando hitos de pago con proveedores. *(Correcta)*
   - C) Solicitar inmediatamente la cancelación del proyecto por falta de presupuesto.
   - D) Facturar al cliente por adelantado sin aprobación contractual.
5. **(Base de Estimaciones)** Un patrocinador cuestiona por qué la estimación de un paquete de software es de 48.000 € con un rango de -5 % a +10 %. ¿Qué documento del proyecto debe consultar el Director del Proyecto para mostrar los supuestos, la técnica utilizada y el nivel de confianza?
   - A) El Acta de Constitución del Proyecto (*Project Charter*).
   - B) La Base de Estimaciones (*Basis of Estimates*). *(Correcta)*
   - C) El Registro de Lecciones Aprendidas.
   - D) La Matriz RACI.

### Rúbrica de evaluación (Actividad práctica + Caso Clínicas SaludNorte S.A.)

| Criterio | Insuficiente (0–4,9) | En desarrollo (5,0–6,9) | Adecuado (7,0–8,9) | Destacado (9,0–10) |
|---|---|---|---|---|
| **1. Estructura presupuestaria y reservas (30 %)** | Mezcla reserva de gestión en la Línea Base o suma incorrectamente cuentas de control y contingencia. | Calcula correctamente la Línea Base (212.000 €), pero confunde la autoridad de uso o el cálculo de la reserva de gestión. | Calcula con exactitud Base (186.000 €), Contingencia (26.000 €), Línea Base (212.000 €), Gestión (21.200 €) y Total (233.200 €), excluyendo el coste hundido. | Domina al 100 % los cálculos, explica con claridad el flujo formal de cambios sobre la reserva de gestión y verifica el margen disponible respecto al techo global (6.800 €). |
| **2. Conciliación del límite de financiación (30 %)** | No detecta el exceso de 12.000 € en T1 o propone una solución que vulnera el límite de T2 o T3. | Detecta el déficit de 12.000 € en T1, pero propone recortes arbitrarios sin verificar el nuevo flujo trimestral. | Resuelve el exceso de T1 reprogramando 12.000 € de CC-2 hacia T2/T3 respetando todos los techos trimestrales y manteniendo el total en 212.000 €. | Presenta la tabla Antes/Después impecable, aprovecha el enfoque híbrido incremental para no retrasar el núcleo HCD y analiza el margen para cubrir eventuales usos de reserva de gestión. |
| **3. Defensa económica del CoQ y criterios financieros (20 %)** | Acepta recortar CC-3 para cuadrar la caja o incluye los 18.000 € de coste hundido en el presupuesto. | Rechaza el recorte de CC-3 y excluye el coste hundido, pero con argumentos genéricos sin respaldo cuantitativo. | Demuestra numéricamente el perjuicio del recorte (15.000 € vs. 48.000 € de fallo externo) y argumenta correctamente la exclusión del coste hundido. | Construye un argumentario de nivel comité de dirección integrando ratio CoQ (1:3,2), riesgo regulatorio/reputacional y claridad conceptual sobre costes hundidos. |
| **4. Transferencia: Base de Estimaciones propia (20 %)** | No entrega la plantilla o incluye cifras sin técnica de estimación ni supuestos. | Entrega la plantilla con cifras y técnica, pero omite supuestos, rango de exactitud o partidas de CoQ. | Entrega una Base de Estimaciones completa y coherente para un proyecto real con reservas diferenciadas y análisis de tesorería. | Elabora un documento profesional listo para presentar a un patrocinador o CFO, integrando supuestos auditables, rangos de confianza, CoQ y palancas de flujo de caja. |

### Actividad de autoevaluación o reflexión
Al finalizar la sesión, el alumnado responde brevemente (5 min) en el diario del campus:
1. En tus proyectos actuales, ¿cómo sueles calcular las reservas: como un porcentaje genérico a ojo o vinculadas a riesgos identificados y separadas de la reserva de gestión?
2. ¿En qué presupuesto reciente de tu empresa se confundió un ahorro aparente en pruebas/prevención con un ahorro real (generando después costes de no conformidad)?
3. ¿Qué elemento concreto de la **Base de Estimaciones** vas a incorporar desde tu próxima propuesta económica?

---

## 8. Materiales y recursos

### Guion de diapositivas (slide por slide)

| Slide | Título | Contenido clave y recurso visual | Tiempo aprox. |
|---:|---|---|---:|
| **1** | Portada y hoja de ruta | Título, Bloque 7 (2/4), 5 objetivos Bloom y enlace con el cronograma del Tema 1. | 3 min |
| **2** | Activación: dilemas financieros reales | Encuesta interactiva de coste hundido + clasificación de 6 partidas CoQ. | 12 min |
| **3** | Plan de Gestión Financiera | Contenido del plan: unidades, precisión vs. exactitud (diana visual), enlaces contables y umbrales de control. | 8 min |
| **4** | Rangos de exactitud y tipos de costes | Escalera ROM (-25/+75 %), Presupuestaria (-10/+25 %), Definitiva (-5/+10 %) + tabla de costes (directos, indirectos, fijos, variables, hundidos, oportunidad). | 9 min |
| **5** | Técnicas de estimación de costes | Cuadro práctico: análoga, paramétrica, ascendente, PERT coste y análisis de ofertas de proveedores. | 8 min |
| **6** | Coste de la Calidad (CoQ) | Balanza visual: Costes de Conformidad (prevención + evaluación) vs. Costes de No Conformidad (fallo interno + fallo externo). | 8 min |
| **7** | Base de Estimaciones (*Basis of Estimates*) | Anatomía visual de un documento auditable: método, supuestos, restricciones, rango y nivel de confianza. | 6 min |
| **8** | Agregación del presupuesto y el "Castillo de Reservas" | Diagrama apilado: Actividades → Paquetes → Cuentas de Control + Contingencia = **Línea Base (BAC)** + Reserva de Gestión = **Presupuesto Total**. | 10 min |
| **9** | Reserva de Contingencia vs. Reserva de Gestión | Tabla comparativa de autoridad, ubicación en BAC, tipo de riesgo y necesidad de solicitud de cambio. | 8 min |
| **10** | Taller guiado: Castillo Presupuestario (Actividad 2) | Datos del proyecto *"Portal de Proveedores"* y los 2 eventos de ejecución a resolver en salas. | 5 min (+30 taller) |
| **11** | Curva S y Requisitos de Financiación | Gráfico de Curva S acumulada bajo la curva escalonada de desembolsos periódicos (resaltando el margen de reserva de gestión). | 8 min |
| **12** | Conciliación del límite de financiación | Ejemplo visual de desfase de tesorería y 3 palancas de resolución (reprogramación con holgura, entregas incrementales, negociación de pagos). | 9 min |
| **13** | Finanzas en entornos ágiles e híbridos | Presupuesto por capacidad/equipos estables, *burn rate* por sprint y financiación por liberaciones de valor. | 8 min |
| **14** | Caso práctico: Clínicas SaludNorte S.A. | Contexto, tabla de 4 cuentas de control, techos trimestrales (85k/90k/65k) y los 3 conflictos financieros. | 5 min (+45 taller) |
| **15** | Solución comentada y defensa ante el CFO | Cálculos exactos (212.000 € / 233.200 €), tabla trimestral conciliada, ratio CoQ 1:3,2 y exclusión de los 18.000 €. | 15 min |
| **16** | Síntesis, mini-test PMP y conexión con Tema 3 | Resumen de fórmulas clave, 5 preguntas tipo PMP y puente hacia interesados, comunicaciones y recursos. | 20 min |

### Ficha de trabajo (para Actividad 2 — Castillo Presupuestario)

> **Proyecto**: *Portal de Proveedores (6 meses)*. Clasifica las partidas, calcula los totales y resuelve los 2 eventos.

| Partida económica | Importe (€) | Clasificación (Cuenta de Control / Contingencia / Gestión / Excluida) |
|---|---:|---|
| 1. CC-A Análisis y arquitectura del portal | 35.000 € | |
| 2. CC-B Desarrollo web e integración ERP | 75.000 € | |
| 3. CC-C Pruebas, seguridad y formación (CoQ) | 30.000 € | |
| 4. Reserva para riesgo identificado de retraso de API | 10.000 € | |
| 5. Reserva para riesgo identificado de licencias externas | 8.000 € | |
| 6. Reserva para imprevistos no identificados (10 % de Línea Base) | 15.800 € | |
| 7. Estudio preliminar de software descartado hace 10 meses | 9.000 € | |

- **Coste base sin reservas**: `__________ €`
- **Total reserva de contingencia**: `__________ €`
- **Línea Base de Costes (BAC)**: `__________ €`
- **Presupuesto Total del Proyecto**: `__________ €`
- **Evento 1** (uso de 6.000 € por riesgo de licencias identificado): Nuevo BAC = `________ €` | ¿Requiere solicitud formal de cambio? `Sí / No`
- **Evento 2** (uso de 12.000 € de reserva de gestión por norma imprevista): Nuevo BAC = `________ €` | Nuevo Presupuesto Total = `________ €` | ¿Requiere solicitud formal de cambio? `Sí / No`

### Plantilla o herramienta práctica replicable

**Plantilla de Base de Estimaciones y Conciliación Financiera (copiable a Excel / Google Sheets / Notion):**

```markdown
## Base de Estimaciones y Presupuesto — [Nombre del Proyecto]
- **Fase actual y rango de exactitud:** [Inicio ROM -25/+75 % | Presupuestaria -10/+25 % | Definitiva -5/+10 %]
- **Moneda y precisión:** [EUR, redondeo a centenas] | **Enfoque:** [Predictivo / Híbrido / Ágil por burn rate]

### 1. Cuadro presupuestario y supuestos
| Cuenta de Control | Técnica estimación | Coste base (€) | Contingencia (€) | Total Línea Base (€) | Supuestos clave / Nivel de confianza |
|---|---|---:|---:|---:|---|
| [CC-1 ...] | [Ascendente / Paramétrica / PERT] | | | =Base+Cont | [Tarifas, licencias, confianza 80 %] |
| [CC-2 Calidad CoQ] | | | | | [Prevención + evaluación explícitas] |
| **TOTAL LÍNEA BASE (BAC)** | | | | **=SUMA** | |
| **Reserva de Gestión ([%])** | [Política empresa] | — | — | **=BAC*%]** | *Fuera de BAC; requiere CCB* |
| **PRESUPUESTO TOTAL** | | | | **=BAC+Gest** | |

### 2. Conciliación del límite de financiación (Tesorería)
| Periodo | Límite disponible (€) | Gasto planificado (€) | Desfase (€) | Palanca de conciliación aplicada |
|---|---:|---:|---:|---|
| Trimestre 1 | | | =Límite-Gasto | [Reprogramar holgura / MVP / Pago 60d] |
| Trimestre 2 | | | | |
| Trimestre 3 | | | | |
```

### Lecturas o recursos recomendados
- **Project Management Institute (PMI)**: *Guía de los Fundamentos para la Dirección de Proyectos (Guía del PMBOK®)* — Dominio de Planificación (Presupuesto y Costes) y principios de administración responsable (*Stewardship*) *(verificar sección exacta en la edición PMBOK 8 vigente antes de impartir)*.
- **Project Management Institute (PMI)**: *The Standard for Earned Value Management* (referencia clave para enlazar la Línea Base de Costes / BAC con el monitoreo financiero del Bloque 8).
- **Philip B. Crosby / Joseph M. Juran**: fundamentos clásicos del modelo *Cost of Quality (CoQ)* aplicados a proyectos tecnológicos y de servicios.

### Vídeos, artículos y fuentes adicionales *(validar enlaces y vigencia antes de utilizarse)*
- **Recurso audiovisual sugerido**: Vídeos explicativos de la diferencia entre *Contingency Reserve* y *Management Reserve* y cómo impactan en el BAC para el examen PMP (*validar vigencia, idioma/subtítulos y coherencia terminológica antes de enlazar*).
- **Artículo técnico sugerido**: Artículos sobre *Lean-Agile Budgeting* y financiación por *Value Streams* frente a presupuestos anuales rígidos en *ProjectManagement.com* o publicaciones especializadas de PMI (*validar acceso y fecha de publicación antes de compartir*).
- **Nota normativa**: Si en clase se mencionan sanciones económicas por incumplimiento de protección de datos sanitarios (RGPD/LOPDGDD) o criterios fiscales de amortización de software en España, **verificar la normativa y cuantías vigentes antes de impartir**.

### Glosario de términos clave

| Término | Definición operativa |
|---|---|
| **Base de Estimaciones (*Basis of Estimates*)** | Documentación de respaldo que explica cómo se calcularon las estimaciones, sus supuestos, restricciones, rango de variación y nivel de confianza. |
| **Burn Rate (Tasa de consumo)** | Ritmo al que un proyecto o equipo ágil consume fondos por unidad de tiempo (p. ej., €/mes o €/sprint). |
| **Conciliación del límite de financiación** | Proceso de ajustar el calendario de desembolsos del proyecto para cumplir los límites periódicos de tesorería impuestos por la organización. |
| **Coste de Calidad (CoQ)** | Suma de los costes de conformidad (prevención y evaluación) y los costes de no conformidad (fallos internos y externos). |
| **Coste de oportunidad** | Beneficio perdido de la mejor alternativa rechazada al asignar recursos a un proyecto concreto. |
| **Coste hundido (*Sunk Cost*)** | Gasto ya realizado e irrecuperable que no debe influir en las decisiones económicas futuras del proyecto. |
| **Cuenta de control (*Control Account*)** | Punto de control de gestión en la EDT/WBS donde se integran alcance, presupuesto y cronograma para medir el desempeño. |
| **Curva S (*S-Curve*)** | Gráfico del coste acumulado planificado (o real) a lo largo del tiempo, que suele adoptar forma de "S". |
| **Línea Base de Costes (*Cost Baseline* / BAC)** | Presupuesto aprobado y distribuido en el tiempo que incluye las cuentas de control más las reservas de contingencia, y excluye la reserva de gestión. |
| **Presupuesto Total del Proyecto** | Suma de la Línea Base de Costes más la Reserva de Gestión. |
| **Reserva de contingencia** | Fondos dentro de la Línea Base de Costes destinados a riesgos identificados (*known-unknowns*), gestionados por el director del proyecto. |
| **Reserva de gestión** | Fondos fuera de la Línea Base de Costes (pero dentro del Presupuesto Total) para trabajo imprevisto dentro del alcance (*unknown-unknowns*), controlados por el patrocinador/comité. |
| **ROM (*Rough Order of Magnitude*)** | Estimación muy temprana de orden de magnitud aproximada con amplio rango de exactitud (habitualmente -25 % a +75 %). |

---

## 9. Adaptaciones

Dado que el programa se imparte de forma nativa en modalidad **100 % online interactiva**, se detallan a continuación las adaptaciones para cada entorno formativo:

- **Sesión online síncrona (formato estándar del programa)**:
  - Utilizar hojas de cálculo compartidas en la nube (Google Sheets / Excel Online) con pestañas separadas por sala para que los grupos resuelvan la Actividad 2 y el Caso **Clínicas SaludNorte S.A.** viendo actualizarse automáticamente el gráfico de la Curva S frente a los techos trimestrales.
  - Hacer el *role-play* de defensa presupuestaria activando cámaras y micrófonos (un equipo presenta pantalla en 4 minutos y el formador interviene 2 minutos en papel de Director Financiero).
  - Insertar pausa activa de 10 minutos entre la Fase 4 y la Fase 5 manteniendo 240 minutos lectivos netos.
- **Sesión presencial (talleres *in-company* o formato aula)**:
  - Entregar tarjetas físicas con las partidas de la Actividad 2 y construir sobre la mesa el "Castillo Presupuestario" por bloques físicos (Base + Contingencia = Línea Base; encima separado con línea roja, Reserva de Gestión; aparte en "papelera", Coste Hundido).
  - Realizar la defensa del caso Clínicas SaludNorte de pie ante una pizarra física donde los equipos dibujen los escalones trimestrales de tesorería.
- **Sesión asíncrona (estudio autónomo en el Campus)**:
  - Dividir la teoría en 4 vídeos breves (Plan financiero y costes; Estimación y CoQ; Reservas y Línea Base; Conciliación y finanzas ágiles) de 10–12 minutos con micro-retos interactivos.
  - Ofrecer una plantilla descargable autoevaluable para la Actividad 2 y el Caso Clínicas SaludNorte, y habilitar la entrega en el campus de la **Base de Estimaciones del proyecto real** (Actividad 3) junto al test sumativo autocorregido de 5 preguntas tipo PMP.

---

## 10. Conexión con el programa

- **Qué conocimientos previos refuerza**: Toma la EDT/WBS del **Bloque 6, Tema 3** (cuentas de control y paquetes de trabajo) y el cronograma optimizado del **Bloque 7, Tema 1** (duraciones, hitos y costes marginales de *crashing*) para traducir el trabajo planificado en un presupuesto financiable y medible en el tiempo.
- **Qué competencias desarrolla**: Gobernanza económica, defensa ejecutiva basada en datos financieros (CoQ, costes hundidos), control de reservas, conciliación de tesorería y competencias centrales de los dominios **Procesos** y **Entorno Empresarial** del ECO PMP.
- **Conexión con el tema anterior y posterior**:
  - *Tema anterior*: **Bloque 7, Tema 1 — Planificación del cronograma, ruta crítica y optimización** (sin un cronograma secuenciado no es posible construir la curva S ni conciliar los límites de financiación por trimestre).
  - *Tema posterior*: **Bloque 7, Tema 3 — Planificación de interesados, comunicaciones y recursos** (los recursos humanos y físicos estimados en el Tema 3 validan las tarifas y capacidades del presupuesto, mientras el plan de interesados y comunicaciones permite negociar con éxito ante el CFO, patrocinadores y proveedores). Asimismo, la Línea Base de Costes (BAC) diseñada aquí será la base directa de los cálculos de Valor Ganado (EVM: PV, EV, AC, CPI, EAC) en el **Bloque 8, Tema 4**.
- **Evidencia de aprendizaje que dejará el alumnado**:
  1. Tabla presupuestaria y resolución de eventos de reservas de la Actividad 2.
  2. Propuesta Presupuestaria Conciliada del caso **Clínicas SaludNorte S.A.** (con tabla trimestral y argumentario CoQ/coste hundido).
  3. Base de Estimaciones y conciliación financiera aplicada a un proyecto real propio (Actividad 3) + calificación del mini-test sumativo tipo PMP.

---

## Siguientes pasos para el formador

1. **Verificar convenciones vigentes del PMI**: Comprobar antes de la sesión si existe alguna actualización reciente en los rangos orientativos ROM/definitivos o en la terminología de planificación financiera de PMBOK 8 y ECO PMP.
2. **Preparar la plantilla dinámica de Curva S**: Configurar previamente una hoja de cálculo con gráfico combinado (línea de gasto acumulado + barras de techo trimestral) para que en la puesta en común de **Clínicas SaludNorte S.A.** el alumnado visualice en directo cómo desaparece el exceso de 12.000 € en T1.
3. **Preparar las objeciones del *role-play* de CFO**: Llevar anotadas 3 preguntas incisivas de negocio (*"¿Por qué no usamos la reserva de gestión desde el día 1?"*, *"¿Por qué no cortamos pruebas si nunca ha pasado nada?"*, *"¿Y los 18.000 € del año pasado?"*) para entrenar la templanza ejecutiva del alumnado.
4. **Validar referencias normativas y enlaces externos**: Revisar la disponibilidad de recursos adicionales de la Sección 8 y evitar citar sanciones RGPD exactas sin confirmar el marco legal vigente.
5. **Anticipar el puente con el Tema 3**: Destacar al cierre que la mejor estimación financiera fracasa si no se acuerdan claramente los recursos humanos/físicos ni se gestiona la comunicación con los interesados críticos que aprueban el presupuesto.
