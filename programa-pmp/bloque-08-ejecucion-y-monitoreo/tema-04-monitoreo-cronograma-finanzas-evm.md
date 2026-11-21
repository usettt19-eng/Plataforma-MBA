# Tema 4. Monitoreo de cronograma, finanzas y Valor Ganado (EVM)

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Monitoreo de cronograma, finanzas y Valor Ganado (EVM) |
| **Bloque y posición dentro del programa** | Bloque 8: Ejecución y monitoreo integral del proyecto — Tema 4 de 5 (Tema 24 de 27 del programa) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Project Managers, mandos intermedios, consultores, ingenieros y aspirantes a la certificación PMP® |
| **Nivel de dificultad** | Avanzado |
| **Prerrequisitos** | Haber completado el Bloque 5, Tema 1 (Medición ágil), el Bloque 7, Temas 1 y 2 (Planificación de cronograma, ruta crítica, costes y presupuesto) y el Bloque 8, Tema 3 (Monitoreo de desempeño, cambios y alcance). |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado será capaz de controlar el desempeño del cronograma y las finanzas en proyectos predictivos, ágiles e híbridos, calcular e interpretar con rigor todas las métricas de la Gestión del Valor Ganado (EVM) seleccionando el supuesto adecuado antes de aplicar cada fórmula de pronóstico, y formular planes de recuperación financieramente viables para la toma de decisiones ejecutivas. |

---

## 2. Objetivos de aprendizaje

Al completar esta unidad didáctica, el alumnado será capaz de:

1. **Analizar** desviaciones de cronograma y presupuesto integrando métricas predictivas (ruta crítica, holgura, curva S, financiación) y métricas ágiles de flujo (*burndown*, *burnup*, velocidad, *lead time*), seleccionando técnicas de compresión o ajuste según restricciones reales. *(Nivel de Bloom: Analizar)*
2. **Calcular** e interpretar los indicadores base y de varianza/eficiencia de la Gestión del Valor Ganado (PV, EV, AC, BAC, CV, SV, CPI y SPI) a partir de datos reales de avance físico y costes incurridos. *(Nivel de Bloom: Aplicar)*
3. **Evaluar** los supuestos operativos del proyecto (varianza típica, atípica, combinada por presión de plazo o reestimación ascendente) **antes** de elegir la fórmula de pronóstico financiero (EAC, ETC y VAC) adecuada a cada escenario. *(Nivel de Bloom: Evaluar)*
4. **Determinar** la viabilidad presupuestaria del trabajo restante calculando e interpretando el Índice de Desempeño del Trabajo por Completar (TCPI sobre BAC y sobre EAC) para fundamentar peticiones de re-línea base o rescate ante el patrocinador. *(Nivel de Bloom: Evaluar)*
5. **Diseñar** un cuadro de control EVM y un plan realista de recuperación de plazo y costes para una pyme en transformación digital, evitando medidas contraproducentes como el *crashing* indiscriminado. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1 Controlar el cronograma y las finanzas en entornos predictivos, ágiles e híbridos

**Explicación breve y clara**
Controlar el cronograma y controlar los costes no consiste en registrar fechas pasadas ni facturas ya pagadas, sino en **detectar tendencias a tiempo para intervenir antes de que la desviación sea irreversible**. En entornos predictivos, el control vigila la **ruta crítica**, el consumo de holgura (*float*), la **curva S** de presupuesto frente a gasto real y los límites de financiación periódica (*funding limit reconciliation*). En entornos ágiles e híbridos, este control se complementa con el seguimiento de **velocidad** (*velocity*), gráficos ***burnup* y *burndown* de entrega** (que visibilizan tanto el avance como los cambios de alcance) y el control de la tasa de consumo financiero (*burn rate*). Cuando aparece un retraso real, el Project Manager analiza opciones como **compresión del cronograma** (*crashing* —añadir recursos incrementando costes— o *fast tracking* —solapar actividades aumentando riesgo de retrabajo—), nivelación de recursos o renegociación de alcance con el negocio.

**Conceptos clave**
- Controlar el Cronograma (*Control Schedule*) y Controlar los Costes (*Control Costs*).
- Monitoreo de ruta crítica, holgura total, hitos y análisis de tendencias.
- Curva S de línea base de costos frente a flujo de caja y límites de financiación.
- Control ágil e híbrido: *release burnup*, velocidad, flujo acumulado y *burn rate* por sprint.
- Compresión del cronograma en control: *crashing* (impacto coste) vs. *fast tracking* (impacto riesgo/retrabajo), aplicables **únicamente a actividades de la ruta crítica**.

**Definiciones necesarias**
- **Línea base de desempeño (*Performance Measurement Baseline*, PMB):** Plan integrado de alcance, cronograma y costes aprobado contra el cual se compara la ejecución del proyecto para medir y gestionar el desempeño; **no incluye la reserva de gestión**.
- **Curva S:** Representación gráfica acumulada del presupuesto planificado (PV), el valor ganado (EV) y el coste real (AC) a lo largo del tiempo, llamada así porque el ritmo de gasto suele ser lento al inicio, acelerado en ejecución y suave al cierre.
- **Compresión por intensificación (*Crashing*):** Técnica de acortamiento del cronograma añadiendo recursos o tiempo extra a tareas de la ruta crítica con el menor coste incremental posible.
- **Ejecución rápida (*Fast Tracking*):** Técnica de compresión consistente en realizar en paralelo fases o actividades que normalmente se ejecutarían en secuencia, incrementando el riesgo de retrabajo.

**Ejemplo práctico realista (pyme en transformación digital)**
Una pyme de distribución farmacéutica en León ejecuta un proyecto híbrido de automatización de almacén (8 meses). En el mes 4, el informe financiero tradicional decía «vamos bien: hemos gastado 95.000 € de los 100.000 € presupuestados hasta hoy». Sin embargo, al cruzar esa cifra con el cronograma y el *release burnup*, descubren que solo han completado el 35 % de las historias críticas de integración (en vez del 50 % previsto). El análisis revela que gastar menos de lo presupuestado no significa ahorrar si no se ha producido el trabajo comprometido. Además, el jefe de proyecto descarta hacer *crashing* sobre tareas con 15 días de holgura (inútil para recuperar fecha) y concentra un refuerzo técnico exclusivamente en dos tareas de la ruta crítica.

**Errores frecuentes**
- Comparar únicamente el presupuesto planificado (PV) con el coste real (AC) sin incorporar el valor del trabajo realmente completado (EV), confundiendo «retraso en el avance» con «ahorro económico».
- Aplicar *crashing* a actividades que no están en la ruta crítica, gastando dinero sin reducir ni un solo día la fecha final.
- Usar *fast tracking* de forma descontrolada cuando el equipo ya arrastra alta tasa de defectos, disparando los retrabajos.
- Mezclar la **reserva de gestión** (*management reserve*, fuera de la línea base de costes y controlada por dirección) dentro del BAC al medir el desempeño diario.

**Preguntas que el alumnado debería poder responder**
1. ¿Por qué comparar solo lo gastado (AC) frente a lo presupuestado hasta la fecha (PV) puede llevar a conclusiones financieras totalmente falsas?
2. ¿Qué diferencia hay entre *crashing* y *fast tracking* en términos de impacto sobre coste y riesgo, y sobre qué actividades deben aplicarse?
3. ¿Qué ventaja ofrece un gráfico *release burnup* frente a un *burndown* en un proyecto híbrido donde el alcance evoluciona?

---

### 3.2 Fundamentos de la Gestión del Valor Ganado (EVM): PV, EV, AC, BAC, varianzas e índices

**Explicación breve y clara**
La **Gestión del Valor Ganado (*Earned Value Management*, EVM)** es la metodología más potente y objetiva para medir simultáneamente **alcance, cronograma y costes** en una misma unidad monetaria. Todo el sistema se apoya en cuatro magnitudes fundamentales —**BAC, PV, EV y AC**— a partir de las cuales se calculan dos varianzas (**CV y SV**, expresadas en euros) y dos índices de eficiencia (**CPI y SPI**, ratios adimensionales). La regla nemotécnica clave para no equivocarse nunca es recordar que **en las cuatro fórmulas de varianza e índice, EV siempre va primero**: si restamos obtenemos varianzas (`> 0` es favorable, `< 0` es desfavorable); si dividimos obtenemos índices (`> 1` es favorable, `< 1` es desfavorable).

**Conceptos clave**
- Cuatro pilares: **BAC** (*Budget at Completion*), **PV** (*Planned Value*), **EV** (*Earned Value*) y **AC** (*Actual Cost*).
- Varianzas: **CV** (*Cost Variance*) = `EV − AC`; **SV** (*Schedule Variance*) = `EV − PV`.
- Índices de desempeño: **CPI** (*Cost Performance Index*) = `EV / AC`; **SPI** (*Schedule Performance Index*) = `EV / PV`.
- Valor Ganado Ágil (*Agile EVM*) como adaptación ligera: `PV`, `EV` y `AC` medidos por puntos de historia o iteraciones completadas según la *Definition of Done*.
- Limitación conocida del SPI clásico cerca del final del proyecto (al completarse el 100 % del trabajo, EV iguala a PV y el SPI converge a 1,0 incluso si el proyecto terminó tarde; en control avanzado existe el *Earned Schedule* para medir retrasos en tiempo real).

**Definiciones necesarias**
- **BAC (Presupuesto hasta la Conclusión):** Presupuesto total autorizado asignado a la línea base de desempeño del trabajo del proyecto (incluye reserva de contingencia, excluye reserva de gestión).
- **PV (Valor Planificado):** Presupuesto autorizado asignado al trabajo que **debería haberse completado** hasta la fecha de corte (`% planificado × BAC`).
- **EV (Valor Ganado):** Valor presupuestado del trabajo **realmente completado** hasta la fecha de corte (`% físico realmente completado × BAC`).
- **AC (Coste Real):** Coste real total incurrido para llevar a cabo el trabajo medido por el EV hasta la fecha de corte.
- **CPI y SPI:** CPI indica cuánto valor ganado se obtiene por cada euro real gastado (`EV / AC`); SPI indica a qué ritmo avanza el proyecto respecto al ritmo planificado (`EV / PV`).

**Ejemplo práctico realista paso a paso (pyme en transformación digital)**
Una pyme distribuidora implanta un ERP en la nube en 4 meses con 4 módulos iguales de 25.000 € (**BAC = 100.000 €**). Al final del Mes 2 deberían haberse terminado 2 módulos (**PV = 50.000 €**), pero solo se ha completado el 40 % del trabajo total (**EV = 40.000 €**) con un gasto real acumulado de **AC = 50.000 €**.

| Métrica | Fórmula | Cálculo | Resultado | Interpretación ejecutiva |
|---|---|---|---|---|
| **CV** | `EV − AC` | `40.000 − 50.000` | **−10.000 €** | **Sobrecoste:** se han gastado 10.000 € más de lo que vale el trabajo producido. |
| **SV** | `EV − PV` | `40.000 − 50.000` | **−10.000 €** | **Retraso:** se ha entregado menos trabajo del planificado al Mes 2. |
| **CPI** | `EV / AC` | `40.000 / 50.000` | **0,80** | **Ineficiencia de coste:** por cada 1,00 € gastado solo se generan 0,80 € de valor. |
| **SPI** | `EV / PV` | `40.000 / 50.000` | **0,80** | **Ritmo lento:** se progresa al 80 % de la velocidad planificada. |

*(Obsérvese cómo sin EV parecería que «vamos clavados al presupuesto» porque AC = PV = 50.000 €, cuando en realidad el proyecto sufre simultáneamente un 20 % de sobrecoste y un 20 % de retraso).*

**Errores frecuentes**
- Invertir el orden de la resta (`AC − EV`) o de la división (`AC / EV`), invirtiendo por completo el diagnóstico del proyecto.
- Calcular el EV usando «porcentaje de horas consumidas» en vez de «avance físico real verificado del entregable» (reglas recomendadas: 0/100 para tareas cortas o 50/50 para evitar optimismo artificial).
- Interpretar SV = −10.000 € como «nos faltan 10.000 € de presupuesto» en vez de «vamos retrasados en cronograma por un volumen de trabajo valorado en 10.000 €».
- Creer que un SPI > 1,0 garantiza que no hay retraso en la fecha final: puede haberse adelantado trabajo **fuera de la ruta crítica** mientras una tarea crítica está bloqueada.

**Preguntas que el alumnado debería poder responder**
1. Si un proyecto presenta CPI = 1,12 y SPI = 0,84, ¿cómo resumirías en una frase su estado de costes y de cronograma?
2. ¿Por qué un proyecto con AC = PV puede estar en grave peligro financiero?
3. ¿Puede un proyecto tener SPI > 1,0 y aun así terminar más tarde de la fecha comprometida? Justifica la respuesta.

---

### 3.3 Pronósticos EVM (EAC, ETC y VAC): elegir el supuesto ANTES de aplicar la fórmula

**Explicación breve y clara**
El verdadero valor directivo del EVM no es mirar por el retrovisor, sino **pronosticar cuánto costará realmente el proyecto al terminar (EAC)**, cuánto dinero adicional hará falta desde hoy hasta el final (**ETC**) y cuál será el déficit o superávit final esperado (**VAC**). En el examen PMP y en los comités de dirección, el error más grave es memorizar una sola fórmula de EAC y aplicarla mecánicamente. **Antes de calcular, el Project Manager debe analizar la causa raíz de la varianza** y decidir cuál de los **cuatro supuestos operativos** describe mejor el futuro del proyecto:

| Supuesto de futuro (analizar ANTES de calcular) | Fórmula de EAC | Cuándo se aplica |
|---|---|---|
| **1. Varianza típica (tendencia estructural):** La eficiencia de costes actual (CPI) refleja el rendimiento real y continuará igual hasta el final. *(Fórmula por defecto si no se indica otra cosa).* | `EAC = BAC / CPI` | Productividad estructural inferior a la estimada, tarifas más altas o curva de aprendizaje persistente. |
| **2. Varianza atípica (incidente puntual):** La desviación ocurrida fue excepcional y no se repetirá; el trabajo restante se ejecutará al coste originalmente presupuestado. | `EAC = AC + (BAC − EV)` | Avería puntual, multa aislada, sobrecoste único de hardware ya resuelto o error ya corregido de raíz. |
| **3. Combinado (coste + presión de plazo):** Tanto la eficiencia de costes (CPI) como el retraso de cronograma (SPI) impactarán el coste restante (por ejemplo, fecha límite inamovible que obligará a acelerar). | `EAC = AC + [(BAC − EV) / (CPI × SPI)]` | Retraso y sobrecoste simultáneos bajo fecha contractual rígida que exige esfuerzo extra. |
| **4. Reestimación ascendente (*Bottom-up ETC*):** Las estimaciones iniciales son inválidas por cambio radical de arquitectura, mercado o alcance; hay que reestimar desde cero el trabajo restante. | `EAC = AC + Nuevo ETC ascendente` | Supuestos iniciales completamente obsoletos; método más preciso pero el que más tiempo consume. |

A partir de cualquier EAC elegido se obtienen siempre:
- **ETC (Estimación hasta la Conclusión):** `ETC = EAC − AC` (dinero que aún falta por gastar desde hoy hasta terminar).
- **VAC (Varianza a la Conclusión):** `VAC = BAC − EAC` (si es negativa, representa el sobrecoste final proyectado respecto al presupuesto aprobado).

**Conceptos clave**
- Diagnóstico previo de causa raíz: típico vs. atípico vs. combinado vs. *bottom-up*.
- **EAC** (*Estimate at Completion*), **ETC** (*Estimate to Complete*) y **VAC** (*Variance at Completion*).
- Consistencia entre pronóstico financiero, reservas de contingencia y comunicación temprana al patrocinador.

**Definiciones necesarias**
- **EAC (Estimación a la Conclusión):** Coste total esperado para completar todo el trabajo del proyecto, expresado como la suma del coste real incurrido (AC) más la estimación hasta la conclusión (ETC).
- **ETC (Estimación hasta la Conclusión):** Coste previsto necesario para finalizar el trabajo restante del proyecto desde la fecha de corte hasta el cierre.
- **VAC (Varianza a la Conclusión):** Proyección del monto de déficit o superávit presupuestario al finalizar el proyecto (`BAC − EAC`).

**Ejemplo práctico realista paso a paso (continuación del proyecto ERP, BAC = 100.000 €, PV = 50.000 €, EV = 40.000 €, AC = 50.000 €, CPI = 0,80, SPI = 0,80)**

| Escenario / Supuesto | Fórmula y cálculo de EAC | ETC (`EAC − AC`) | VAC (`BAC − EAC`) | Lectura directiva |
|---|---|---|---|---|
| **A) Varianza típica** *(fórmula base)* | `100.000 / 0,80` = **125.000 €** | **75.000 €** | **−25.000 €** | Si seguimos igual, cerraremos 25.000 € por encima del presupuesto. |
| **B) Varianza atípica** *(fallo puntual ya cerrado)* | `50.000 + (100.000 − 40.000)` = **110.000 €** | **60.000 €** | **−10.000 €** | El sobrecoste se limita a los 10.000 € ya sufridos; el resto irá a presupuesto. |
| **C) Combinado CPI × SPI** *(plazo inamovible)* | `50.000 + [60.000 / (0,80 × 0,80)]` = `50.000 + 93.750` = **143.750 €** | **93.750 €** | **−43.750 €** | Peor escenario realista si debemos recuperar el 20 % de retraso manteniendo ineficiencia. |

**Errores frecuentes**
- Aplicar automáticamente `EAC = BAC / CPI` cuando el enunciado o la realidad indica claramente que el sobrecoste fue un fallo puntual ya resuelto (atípico) o que el plan original está totalmente obsoleto (*bottom-up*).
- Confundir **EAC** (coste total de principio a fin) con **ETC** (solo lo que falta por gastar desde hoy), duplicando al presentar la solicitud de fondos al director financiero.
- Restar `EAC − BAC` en vez de `BAC − EAC` al calcular VAC, haciendo parecer positivo un déficit grave.

**Preguntas que el alumnado debería poder responder**
1. ¿Qué pregunta clave sobre la causa raíz debes responder antes de elegir entre la fórmula de EAC típico, atípico o combinado?
2. En el ejemplo del ERP (BAC = 100.000 €), ¿por qué el EAC combinado (143.750 €) es significativamente mayor que el EAC típico (125.000 €)?
3. ¿En qué situación la única opción rigurosa es calcular un *Bottom-up ETC* en lugar de extrapolar con CPI?

---

### 3.4 Índice de Desempeño del Trabajo por Completar (TCPI) y decisiones de recuperación

**Explicación breve y clara**
Mientras que el CPI mira el rendimiento pasado y el EAC estima el coste final, el **TCPI (*To-Complete Performance Index*)** responde a la pregunta que todo director financiero y patrocinador formula: **«¿Qué eficiencia de costes exacta tenemos que lograr en el trabajo que queda para no pasarnos del presupuesto?»**. Su lógica es intuitiva: divide el **trabajo restante** (`BAC − EV`) entre los **fondos restantes** (`BAC − AC`, o bien `EAC − AC` si la dirección ya ha aprobado un nuevo EAC objetivo).

- **Para cumplir el BAC original:** `TCPI (BAC) = (BAC − EV) / (BAC − AC)`
- **Para cumplir un nuevo EAC aprobado:** `TCPI (EAC) = (BAC − EV) / (EAC − AC)`

**Regla de interpretación inversa respecto al CPI:**
- Un **TCPI > 1,00** es **más difícil** de lograr (exige rendir por encima de lo presupuestado originalmente). Si supera sensiblemente el CPI histórico (por ejemplo, CPI actual = 0,80 y TCPI necesario = 1,20), mantener el BAC original es **estadística y operativamente poco realista** sin recortar alcance, cambiar la estrategia o aprobar una nueva línea base.
- Un **TCPI < 1,00** es **más fácil** de cumplir (hay margen financiero favorable).

**Conceptos clave**
- Fórmula de `TCPI (BAC)` vs. `TCPI (EAC)`.
- Contraste obligatorio entre **CPI actual** y **TCPI requerido** para juzgar realismo del plan de recuperación.
- Palancas directivas ante un TCPI inalcanzable: optimización de alcance (*de-scoping* controlado), mejora de procesos/productividad, renegociación con proveedores o solicitud formal de cambio de línea base de costes (aprobada por CCB/patrocinador).

**Definiciones necesarias**
- **TCPI (Índice de Desempeño del Trabajo por Completar):** Proyección calculada de la eficiencia de costes que **debe alcanzarse** en el trabajo restante para cumplir un objetivo de gestión específico (el BAC original o un EAC revisado).
- **Re-línea base (*Re-baselining*):** Actualización formal y aprobada mediante Control Integrado de Cambios de las líneas base de alcance, cronograma o coste cuando las originales dejan de ser realistas como referencia de control.

**Ejemplo práctico realista (continuación del proyecto ERP: BAC = 100.000 €, EV = 40.000 €, AC = 50.000 €, CPI = 0,80)**
- **TCPI para cumplir el BAC original (100.000 €):**
  `TCPI = (100.000 − 40.000) / (100.000 − 50.000) = 60.000 / 50.000 = 1,20`.
  *Lectura:* El equipo ha estado generando 0,80 € de valor por cada euro gastado y ahora tendría que pasar bruscamente a generar **1,20 € por cada euro** (+50 % de mejora inmediata de eficiencia) durante toda la segunda mitad. En lugar de prometer un milagro, el Project Manager presenta al patrocinador el dato objetivo y propone ajustar alcance secundario o aprobar el nuevo EAC de 125.000 €.
- **TCPI para cumplir el EAC típico aprobado (125.000 €):**
  `TCPI = (100.000 − 40.000) / (125.000 − 50.000) = 60.000 / 75.000 = 0,80`.
  *Lectura:* Objetivo completamente realista porque coincide con el rendimiento real demostrado (CPI = 0,80).

**Errores frecuentes**
- Interpretar un TCPI = 1,25 como «algo bueno porque es mayor que 1» (confundiéndolo con el CPI): **en TCPI, cuanto mayor que 1, más difícil es lograr el objetivo**.
- Seguir calculando `TCPI sobre BAC` cuando el enunciado ya indica que el BAC es inalcanzable y la dirección ha autorizado un nuevo EAC.
- Prometer al comité que se recuperará un TCPI de 1,30 «trabajando más duro y sin tocar alcance ni presupuesto», posponiendo inevitablemente una crisis mayor.

**Preguntas que el alumnado debería poder responder**
1. ¿Por qué un TCPI = 1,25 representa una señal de alerta grave, al contrario que un CPI = 1,25?
2. ¿Cuándo debe utilizarse la fórmula de TCPI basada en EAC en lugar de la fórmula basada en BAC?
3. ¿Qué tres opciones directivas éticas y profesionales debe presentar un Project Manager al patrocinador cuando el TCPI sobre BAC resulta inviable?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** está diseñada como un **taller intensivo de cálculo interpretado y toma de decisiones financieras**, alternando explicaciones guiadas paso a paso con práctica numérica real sobre *SolViento Renovables S.L.*

| Fase | Tiempo exacto | Acumulado | Qué hace el formador | Qué hace el alumnado |
|---|---:|---:|---|---|
| **1. Apertura y activación** | 20 min | 20 min | Conecta con el Tema 3 (Control de cambios y alcance), lanza la evaluación diagnóstica breve y facilita la Actividad 1 (*La trampa del presupuesto gastado vs. trabajo hecho*). | Responde a la diagnóstica (5 min) y vota en vivo qué proyecto va mejor a partir de un gráfico trampa sin EV, descubriendo por qué PV y AC solos engañan. |
| **2. Exposición breve / microlearning (Bloque A: Control de cronograma/finanzas y EVM base)** | 40 min | 60 min | Explica ruta crítica en control, *crashing* vs. *fast tracking*, *burnup* híbrido y demuestra paso a paso PV, EV, AC, BAC, CV, SV, CPI y SPI sobre el ejemplo numérico del ERP (100.000 €). | Replica los cálculos en su Ficha de Trabajo / calculadora del Campus, interpreta signos y ratios, y resuelve 2 ejercicios relámpago de verificación. |
| **3. Exposición breve / microlearning (Bloque B: Pronósticos EAC/ETC/VAC y TCPI)** | 40 min | 100 min | Enseña la matriz de supuestos de EAC (típico, atípico, combinado, *bottom-up*), ETC, VAC y TCPI (sobre BAC y sobre EAC), insistiendo en la lectura ejecutiva y la trampa de signo del TCPI. | Calcula los 3 escenarios EAC y los 2 TCPI del ejemplo guiado, contrastando cuál defendería ante un director financiero y por qué. |
| **Descanso activo / pausa de pantalla** | 15 min | 115 min | Gestiona la pausa obligatoria de 15 minutos con temporizador en pantalla. | Descansa de pantalla y deja lista su hoja de cálculo o calculadora para el taller EVM. |
| **4. Análisis de caso práctico (*SolViento Renovables S.L.*)** | 40 min | 155 min | Presenta el caso *SolViento Renovables S.L.* (BAC = 480.000 €), organiza grupos reducidos y circula por las salas supervisando que identifiquen bien las causas típicas vs. atípicas antes de calcular. | Analiza el caso en equipo, calcula PV, EV, AC, CV, SV, CPI, SPI, los 3 EAC, ETC, VAC y TCPI, y debate qué supuesto refleja mejor la realidad de las 12 plantas fotovoltaicas. |
| **5. Actividad práctica en equipo y transferencia (Actividades 2 y 3)** | 50 min | 205 min | Facilita la Actividad 2 (25 min: *Comité Financiero y Plan de Recuperación de SolViento Renovables*) y la Actividad 3 (25 min: *Tablero EVM / Agile EVM simplificado para mi proyecto real*). | Redacta la recomendación ejecutiva de EAC + plan de recuperación realista sin *crashing* ciego; construye su propia hoja EVM/híbrida adaptada a su empresa. |
| **6. Discusión guiada y entrenamiento situacional PMP** | 20 min | 225 min | Valida en pizarra compartida cada cifra del caso *SolViento Renovables*, resuelve dudas de redondeo/supuestos y trabaja 3 preguntas situacionales tipo examen PMP (con y sin cálculo). | Compara sus resultados con la solución validada y practica el descarte rápido de distractores en preguntas EVM del examen PMP. |
| **7. Síntesis, evaluación sumativa y cierre** | 15 min | 240 min | Resume el «mapa de fórmulas en 1 minuto», lanza el mini-test sumativo EVM y la autoevaluación, y presenta el puente hacia el Tema 5 (Monitoreo de interesados, comunicaciones, recursos y riesgos). | Completa el mini-test cuantitativo/situacional de cierre y registra qué fórmula necesita reforzar antes del simulacro global. |

**Total exacto:** 20 + 40 + 40 + 15 + 40 + 50 + 20 + 15 = **240 minutos (4 horas)**.

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «La trampa de los 50.000 € gastados»

- **Objetivo:** Desmontar la ilusión de control financiero tradicional (comparar solo presupuesto contra gasto) y generar la necesidad intuitiva del concepto de Valor Ganado (EV).
- **Instrucciones para el alumnado:**
  1. Observa en pantalla dos proyectos idénticos de 100.000 € a mitad de plazo (PV = 50.000 €):
     - *Proyecto Alfa:* ha gastado 42.000 € hasta hoy.
     - *Proyecto Beta:* ha gastado 54.000 € hasta hoy.
  2. Vota en el sondeo rápido (2 min): *¿Qué proyecto va financieramente mejor: Alfa, Beta o faltan datos?*
  3. Tras revelar el avance real (Alfa completó solo el 30 % → EV = 30.000 €; Beta completó el 60 % → EV = 60.000 €), discutimos en plenario (8 min) cuál es realmente rentable y cuál está en crisis.
- **Materiales necesarios:** Diapositiva comparativa de 2 pasos y sondeo interactivo.
- **Tiempo estimado:** 15 minutos (integrados en la Fase 1).
- **Rol del formador:** Crear el efecto sorpresa pedagógico al revelar el EV de ambos proyectos (Alfa tiene CPI = 0,71 en crisis; Beta tiene CPI = 1,11 con superávit y adelanto) y fijar la regla de oro del tema: *sin Valor Ganado no existe control real*.
- **Producto o entregable esperado:** Comprensión compartida verificada en votación y explicación breve del papel insustituible del EV.
- **Criterios de éxito:** El 100 % del grupo identifica tras la revelación por qué Beta está rindiendo mejor que Alfa pese a haber gastado más dinero absoluto.

---

### Actividad 2 (Aplicación en equipo): «Comité Financiero y Plan de Recuperación en *SolViento Renovables S.L.*»

- **Objetivo:** Calcular el cuadro completo EVM del caso *SolViento Renovables S.L.*, justificar el supuesto de EAC más realista a partir de causas mixtas y presentar un plan de recuperación ejecutivo ante el patrocinador.
- **Instrucciones para el alumnado:**
  1. En salas de 4-5 personas, completad la **Hoja EVM de *SolViento Renovables S.L.*** (Sección 6):
     - Calculad CV, SV, CPI y SPI al cierre del Mes 6.
     - Calculad los tres pronósticos de **EAC** (típico, atípico y combinado CPI×SPI) con sus correspondientes **ETC** y **VAC**.
     - Calculad **TCPI (sobre BAC)** y **TCPI (sobre EAC recomendado)**.
  2. Con base en las causas de desviación explicadas en el caso (arancel puntual resuelto vs. pérdida estructural de productividad), elegid **qué pronóstico financiero (o enfoque *bottom-up*) defenderéis ante el Comité de Dirección** y justificadlo en 4 líneas.
  3. Proponed **3 medidas concretas de recuperación** (distinguiendo si implican *crashing* focalizado en ruta crítica, mejora de productividad o solicitud formal de cambio de línea base/alcance) que respeten las restricciones reales del caso.
- **Materiales necesarios:** Caso *SolViento Renovables S.L.*, Plantilla de Hoja EVM (Sección 8) y calculadora o calculadora EVM del Campus Interactivo.
- **Tiempo estimado:** 25 minutos (precedidos por 40 min de análisis estructurado del caso en la Fase 4).
- **Rol del formador:** Auditar los cálculos intermedios en las salas (especialmente `CPI × SPI` y la fórmula correcta de `TCPI`) y retar a los equipos que propongan «recuperar el BAC original trabajando horas extras gratis» cuando el TCPI es 1,26.
- **Producto o entregable esperado:** Informe ejecutivo de 1 página con tabla EVM verificada, justificación del supuesto EAC elegido y plan de recuperación de 3 acciones.
- **Criterios de éxito:** Cero errores de cálculo en CV, SV, CPI, SPI, los 3 EAC y TCPI; interpretación exacta de la inviabilidad del TCPI sobre BAC (1,26 vs. CPI 0,80); recomendación directiva coherente con el análisis de causas.

---

### Actividad 3 (Transferencia a la realidad laboral): «Mi tablero mínimo viable de control de plazo y costes (EVM / Agile EVM)»

- **Objetivo:** Adaptar la lógica del Valor Ganado a la realidad cotidiana de cada participante (ya trabaje con proyectos predictivos en euros o con proyectos ágiles/híbridos por sprints y horas).
- **Instrucciones para el alumnado:**
  1. Selecciona un proyecto real de tu empresa (15 min) y cumplimenta la **Ficha de Transferencia EVM**:
     - Define cómo establecerás tu **BAC** (en euros o en horas presupuestadas) y cómo medirás el **EV** sin subjetividad (ej. hitos verificados 0/100 o historias que cumplen DoD).
     - Introduce datos reales o aproximados de un corte reciente (PV, EV, AC) y calcula tu CPI, SPI, EAC típico y TCPI actual.
     - Define **2 umbrales de alerta** (ámbar y rojo para CPI/SPI) que disparen obligatoriamente un análisis de causa raíz y una propuesta de acción correctiva.
  2. En parejas (10 min), explicad vuestro tablero como si el compañero fuera el Director Financiero (en 3 minutos sin jerga innecesaria) y recibid *feedback* sobre claridad ejecutiva.
- **Materiales necesarios:** Plantilla editable de Tablero EVM / Agile EVM (descargable en el campus).
- **Tiempo estimado:** 25 minutos.
- **Rol del formador:** Ayudar a perfiles ágiles o de servicios a traducir el EV a puntos de historia completados o paquetes de trabajo cerrados, evitando que abandonen EVM por creer que «solo sirve para obra civil».
- **Producto o entregable esperado:** Tablero EVM / Agile EVM individual configurado con métricas, umbrales y protocolo de actuación, subido al buzón del campus.
- **Criterios de éxito:** Define una regla objetiva para medir EV (no «sensación de avance»), calcula correctamente índices con datos reales/simulados de su entorno y comunica el pronóstico en lenguaje ejecutivo claro.

---

## 6. Caso práctico

### Caso: *SolViento Renovables S.L.* — Desviación de costes, retraso en campo y decisión de pronóstico EVM en un proyecto IoT

**Contexto empresarial**
*SolViento Renovables S.L.* es una ingeniería pyme ubicada en Zaragoza (95 empleados) especializada en operación y mantenimiento de parques solares. Hace 6 meses ganó un contrato híbrido con un fondo de inversión energética para desplegar una plataforma de **sensorización IoT y gemelo digital** en **12 plantas fotovoltaicas** repartidas por Aragón y Castilla-La Mancha.

La línea base aprobada del proyecto establece:
- **Presupuesto hasta la Conclusión (BAC):** **480.000 €** (valor de referencia de 40.000 € por planta completamente sensorizada, integrada y validada). *(La dirección mantiene además una reserva de gestión externa de 40.000 €, fuera de la línea base PMB).*
- **Duración planificada:** **12 meses** (cadencia lineal planificada de 1 planta completada por mes → 40.000 €/mes de PV).
- **Penalización contractual:** Existe una cláusula de penalización de 15.000 € por cada mes de retraso más allá del Mes 12.

**Situación o problema**
Al cierre del **Mes 6**, el Director Financiero alarma a la Dirección General porque el gasto acumulado ya ha alcanzado **270.000 €** (30.000 € por encima de lo previsto hasta el mes 6). El Project Manager, Javier, recopila el avance físico real verificado (siguiendo estrictamente entregas que superan pruebas de telemetría): solo se ha completado el **45 % del alcance total** (equivalente a 5,4 plantas frente a las 6 previstas).

Al investigar las causas raíz de la desviación acumulada de costes (−54.000 €) y plazo (−24.000 € de trabajo pendiente respecto al plan), el equipo descubre **dos factores distintos**:
1. **Causa puntual atípica (22.000 €):** En el Mes 3, un problema aduanero y de rotura de stock obligó a comprar un lote urgente de *gateways* industriales con un sobrecoste excepcional de 22.000 €. Ese problema **ya está resuelto**: el nuevo acuerdo marco con un fabricante europeo garantiza el precio original para las 6 plantas restantes.
2. **Causa estructural típica (32.000 € y retraso acumulado):** Los inversores antiguos de las plantas requieren mucha más adaptación de protocolos y depuración de datos de lo estimado inicialmente, consumiendo un 20 % más de horas de ingeniería por planta y retrasando la puesta en marcha de la ruta crítica. Sin rediseño técnico o ajuste de alcance/proceso, esta ineficiencia continuará en las plantas restantes.

**Datos disponibles (Corte Mes 6)**

| Parámetro / Concepto | Valor a cierre del Mes 6 | Observaciones |
|---|---:|---|
| **BAC** (Presupuesto total línea base) | **480.000 €** | 12 plantas × 40.000 €/planta (excluye 40.000 € de reserva de gestión) |
| **PV** (Valor Planificado al Mes 6) | **240.000 €** | 50 % planificado (6 plantas previstas) |
| **EV** (Valor Ganado al Mes 6) | **216.000 €** | 45 % realmente completado y verificado (5,4 plantas equivalentes) |
| **AC** (Coste Real acumulado al Mes 6) | **270.000 €** | Gasto real devengado (incluye 22.000 € puntuales + 32.000 € estructurales) |
| **Trabajo restante a valor base (`BAC − EV`)** | **264.000 €** | 55 % del proyecto aún pendiente de completar |
| **Presupuesto restante del BAC (`BAC − AC`)** | **210.000 €** | Fondos remanentes dentro de la línea base original |

**Preguntas de análisis**
1. Calcula **CV, SV, CPI y SPI** al Mes 6 y tradúcelos a un diagnóstico ejecutivo de dos líneas comprensible para la Dirección General.
2. Calcula **EAC, ETC y VAC** bajo los tres supuestos analíticos: (a) **Típico**, (b) **Atípico** y (c) **Combinado (CPI × SPI)** considerando la presión de penalización del Mes 12.
3. Calcula **TCPI sobre el BAC original (480.000 €)**, sobre el **EAC atípico (534.000 €)** y sobre el **EAC típico (600.000 €)**. ¿Es realista intentar cerrar dentro de los 480.000 € originales?
4. Dado que el caso combina una causa puntual ya resuelta (22.000 €) y una causa estructural vigente (32.000 € + retraso), ¿por qué ninguna fórmula estándar por sí sola cuenta toda la verdad y cómo justificarías el pronóstico más riguroso ante el comité?

**Tarea a realizar**
Como equipo de dirección de proyecto que asesora a Javier, preparad el **Informe Ejecutivo EVM del Mes 6** para el Comité de Dirección:
1. Tabla completa y verificada con todos los indicadores (CV, SV, CPI, SPI, EAC en 3 supuestos, ETC, VAC y TCPI).
2. Selección justificada del escenario de pronóstico financiero (incluyendo si conviene realizar un *Bottom-up ETC* refinado para aislar los 22.000 € atípicos y proyectar la ineficiencia real sobre las plantas restantes).
3. Plan de recuperación con 3 acciones concretas (evaluando el coste-beneficio de *crashing* focalizado en la ruta crítica frente a la penalización de 15.000 €/mes, estandarización de conectores para inversores antiguos y posible solicitud formal al CCB/patrocinador para liberar reserva de gestión o re-alinear línea base).

**Posibles soluciones o criterios de análisis**
- **Indicadores base verificados (Mes 6):**
  - `CV = 216.000 − 270.000` = **−54.000 €** (sobrecoste).
  - `SV = 216.000 − 240.000` = **−24.000 €** (retraso de cronograma).
  - `CPI = 216.000 / 270.000` = **0,80** (0,80 € de valor ganado por cada euro gastado).
  - `SPI = 216.000 / 240.000` = **0,90** (ritmo del 90 % respecto al plan).
- **Pronósticos EAC / ETC / VAC verificados:**
  - *Supuesto 1 — Típico (`BAC / CPI`):* `EAC = 480.000 / 0,80` = **600.000 €** | `ETC = 330.000 €` | `VAC = −120.000 €`.
  - *Supuesto 2 — Atípico (`AC + BAC − EV`):* `EAC = 270.000 + 264.000` = **534.000 €** | `ETC = 264.000 €` | `VAC = −54.000 €`.
  - *Supuesto 3 — Combinado (`AC + [(BAC − EV) / (CPI × SPI)]`):* `CPI × SPI = 0,80 × 0,90 = 0,72` → `264.000 / 0,72 = 366.667 €` → `EAC = 270.000 + 366.667` = **636.667 €** | `ETC = 366.667 €` | `VAC = −156.667 €`.
- **Viabilidad con TCPI verificada:**
  - `TCPI (BAC 480.000 €) = 264.000 / 210.000` = **1,26** (prácticamente inalcanzable viniendo de un CPI de 0,80; exige mejorar la productividad en más de un 57 % sostenidamente).
  - `TCPI (EAC atípico 534.000 €) = 264.000 / 264.000` = **1,00** (solo viable si se elimina también la ineficiencia estructural de ingeniería).
  - `TCPI (EAC típico 600.000 €) = 264.000 / 330.000` = **0,80**.
- **Juicio experto sobre el escenario mixto (clave de excelencia):**
  - El EAC atípico (534.000 €) es **demasiado optimista** porque ignora el problema estructural en inversores antiguos; el EAC típico (600.000 €) y el combinado (636.667 €) **castigan en exceso** el futuro porque proyectan como permanente el sobrecoste aduanero puntual de 22.000 € que ya se cerró.
  - Por tanto, la recomendación directiva más sólida es realizar un **Bottom-up ETC** (como referencia analítica rápida, aislando los 22.000 € puntuales, el CPI estructural de ejecución sería `216.000 / (270.000 − 22.000) = 216.000 / 248.000 ≈ 0,871`, que situaría el EAC en torno a `270.000 + (264.000 / 0,871) ≈ 573.100 €` si no se mejora la integración), presentar el rango transparente al patrocinador, activar la estandarización técnica de adaptadores de inversores para elevar el CPI futuro hacia ~0,95, evaluar *crashing* selectivo solo si cuesta menos que la penalización de 15.000 €/mes y tramitar formalmente por CCB la autorización de uso de la reserva de gestión (40.000 €) o un ajuste de línea base.

**Preguntas de reflexión final**
- ¿Por qué un Project Manager que solo entrega un número de EAC sin explicar los supuestos que lo sustentan pierde credibilidad frente a la dirección financiera?
- ¿Qué riesgos éticos y de negocio conlleva maquillar el % de avance físico (inflar artificialmente el EV) para evitar mostrar un CPI < 0,85?

---

## 7. Evaluación

### Evaluación diagnóstica breve (inicio de sesión — 5 min)
4 preguntas rápidas de calibración:
1. Un proyecto tiene CPI = 0,85 y SPI = 1,10. ¿Cuál es su situación? *(Por debajo del presupuesto y retrasado / Por encima del presupuesto y adelantado / Por encima del presupuesto y retrasado).*
2. Si necesitas saber cuánto dinero **adicional** hace falta gastar desde hoy hasta completar el proyecto, ¿qué métrica buscas? *(BAC / EAC / ETC / VAC).*
3. ¿Cuál de estas afirmaciones sobre la reserva de gestión es correcta? *(Forma parte del BAC / Se excluye de la línea base de costes PMB y requiere aprobación formal para usarse).*
4. Si el retraso ocurre en una actividad con 12 días de holgura total, ¿tiene sentido aplicar *crashing* en esa actividad para recuperar la fecha final? *(Sí / No).*

### Evaluación formativa durante la sesión
- Verificación guiada de los cálculos intermedios del ejemplo ERP (100.000 €) en los Bloques A y B.
- Auditoría en tiempo real por salas durante los cálculos de *SolViento Renovables S.L.* (Actividad 2), corrigiendo errores de orden de variables o elección mecánica de fórmula.
- Revisión entre pares de la explicación ejecutiva del tablero EVM/Agile EVM (Actividad 3).

### Evaluación sumativa al final de la sesión (10 min)
1. **Mini-test EVM + situacional PMP (6 preguntas):** Combina 3 problemas cortos de cálculo (identificación de CPI/SPI, selección de fórmula EAC según supuesto atípico/típico/combinado y cálculo/interpretación de TCPI) con 3 preguntas situacionales sobre compresión de cronograma, reserva de gestión y comunicación de desvíos al patrocinador. *(Umbral de superación recomendado: ≥ 70 %).*
2. **Entregable práctico evaluable:** Informe Ejecutivo EVM de *SolViento Renovables S.L.* (equipo) + Tablero EVM/Agile EVM individual (Actividad 3), evaluados con la rúbrica siguiente.

### Rúbrica de evaluación

| Criterio | Insuficiente (1) | En desarrollo (2) | Adecuado (3) | Destacado (4) |
|---|---|---|---|---|
| **Exactitud en métricas base (CV, SV, CPI, SPI)** | Invierte fórmulas o confunde PV, EV y AC, generando diagnósticos erróneos de coste o plazo. | Calcula correctamente la mayoría de indicadores, pero comete errores puntuales de interpretación (ej. signo o significado de SV). | Calcula con precisión CV, SV, CPI y SPI e interpreta correctamente el estado simultáneo de costes y cronograma. | Integra métricas EVM con análisis de ruta crítica/flujo ágil, detectando matices como adelanto fuera de ruta crítica o falsos ahorros. |
| **Selección justificada de supuestos y pronósticos (EAC, ETC, VAC)** | Aplica una fórmula de memoria sin analizar el supuesto o confunde EAC con ETC. | Calcula correctamente los números, pero no justifica qué supuesto (típico, atípico, combinado) aplica al escenario. | Analiza las causas raíz antes de calcular, ejecuta bien los 3 EAC, ETC y VAC y justifica su elección con coherencia. | Diagnostica con criterio directivo causas mixtas, propone *Bottom-up ETC* cuando procede y presenta rangos de sensibilidad claros a dirección. |
| **Cálculo e interpretación de TCPI** | Confunde la interpretación de TCPI > 1 como favorable o usa mal numerador/denominador. | Calcula el TCPI sobre BAC, pero no lo contrasta con el CPI histórico ni evalúa su realismo. | Calcula e interpreta correctamente TCPI sobre BAC y sobre EAC, evaluando la viabilidad real del presupuesto restante. | Emplea el TCPI como palanca de gobernanza ética para proponer re-línea base, optimización de alcance o liberación controlada de reservas. |
| **Plan de recuperación y comunicación ejecutiva** | Propone medidas genéricas («trabajar más horas») o aplica *crashing* fuera de ruta crítica. | Plantea acciones coherentes pero sin cuantificar trade-offs entre coste, plazo y riesgo. | Diseña un plan realista focalizado en ruta crítica, mejora de productividad y control formal de cambios/reservas. | Presenta una recomendación ejecutiva clara, sin jerga innecesaria, comparando el coste de recuperación frente a penalizaciones contractuales. |

### Actividad de autoevaluación o reflexión
Al cierre, el alumnado completa en el campus (3-5 minutos):
1. *Sin mirar tus apuntes, escribe de memoria el significado de cada sigla (PV, EV, AC, BAC, CPI, SPI, EAC, ETC, VAC, TCPI) y señala en cuál dudas más.*
2. *¿Qué supuesto de EAC te costó más identificar antes de calcular, y qué pista clave del enunciado te ayudará a reconocerlo en el examen PMP?*
3. *¿Cómo podrías introducir al menos una medición objetiva de EV (o burnup verificado) en el próximo informe de tu proyecto real?*

---

## 8. Materiales y recursos

### Guion de diapositivas estructurado (slide por slide)

| N.º | Título de la diapositiva | Contenido clave y recurso visual sugerido |
|---:|---|---|
| 1 | **Portada: Monitoreo de cronograma, finanzas y Valor Ganado (EVM)** | Título, Bloque 8 (4/5), objetivos y enlace con la calculadora EVM del Campus. |
| 2 | **Activación: La trampa de los 50.000 € gastados** | Comparativa visual Proyecto Alfa vs. Proyecto Beta antes y después de revelar EV. |
| 3 | **Control de cronograma y finanzas en entornos híbridos** | Ruta crítica, Curva S, *release burnup*, velocidad y límites de financiación. |
| 4 | **Recuperación de plazo: *Crashing* vs. *Fast Tracking*** | Cuadro comparativo de impacto en coste/riesgo + recordatorio visual de la ruta crítica. |
| 5 | **Los 4 pilares del EVM: BAC, PV, EV y AC** | Curva S anotada mostrando en un punto de corte exacto PV, EV, AC, CV y SV. |
| 6 | **Regla de oro de varianzas e índices (EV siempre primero)** | Tabla limpia de CV, SV, CPI y SPI + semáforo de interpretación (`< 0` / `< 1` vs. `> 0` / `> 1`). |
| 7 | **Ejemplo numérico guiado (Parte 1): Proyecto ERP 100.000 €** | Resolución paso a paso de CV = −10.000 €, SV = −10.000 €, CPI = 0,80 y SPI = 0,80. |
| 8 | **Antes de calcular EAC: elige el supuesto correcto** | Árbol de decisión visual de los 4 supuestos (Típico, Atípico, Combinado, *Bottom-up*). |
| 9 | **Ejemplo numérico guiado (Parte 2): 3 EAC, ETC y VAC** | Tabla comparativa de los tres pronósticos del proyecto ERP (125k €, 110k €, 143,75k €). |
| 10 | **TCPI: ¿es realista llegar al presupuesto?** | Fórmulas sobre BAC y sobre EAC + advertencia visual de lectura inversa (`TCPI > 1` = más difícil). |
| 11 | **Pausa activa (15 min)** | Temporizador y recordatorio para abrir hoja EVM / calculadora del Campus. |
| 12 | **Caso práctico: *SolViento Renovables S.L.*** | Contexto de las 12 plantas fotovoltaicas, tabla de datos del Mes 6 y las dos causas (22k € puntual vs. 32k € estructural). |
| 13 | **Taller aplicado: Comité Financiero (Actividad 2)** | Instrucciones paso a paso, entregable de 1 página y criterios de éxito. |
| 14 | **EVM en proyectos ágiles y pymes: Agile EVM** | Cómo traducir puntos de historia y sprints completados a PV, EV, AC, CPI y SPI. |
| 15 | **Transferencia laboral: Mi tablero mínimo viable (Actividad 3)** | Plantilla de configuración de umbrales ámbar/rojo y práctica de explicación al Director Financiero. |
| 16 | **Validación en pizarra + Reto situacional PMP (3 preguntas)** | Solución oficial verificada de *SolViento Renovables* + 3 preguntas tipo ECO PMP. |
| 17 | **Mapa de fórmulas en 1 minuto, evaluación y puente al Tema 5** | Chuleta visual consolidada, acceso al mini-test y anticipo del Tema 5 (Monitoreo de personas, comunicaciones, recursos y riesgos). |

### Ficha de trabajo (para el alumnado)
Documento práctico descargable de 2 páginas que incluye:
- **Hoja 1 — Hoja de referencia rápida EVM:** Cuadro resumen con las 4 variables base, varianzas, índices, los 4 supuestos de EAC con sus palabras clave de detección y las 2 fórmulas de TCPI.
- **Hoja 2 — Cuaderno de cálculo:** Espacios estructurados paso a paso para resolver el ejemplo ERP (100.000 €), el caso *SolViento Renovables S.L.* (480.000 €) y el tablero individual de la Actividad 3.

### Plantilla práctica replicable: Tablero de Control EVM y Pronóstico (Excel / Google Sheets)

| Bloque | Métrica | Fórmula replicable | Resultado Corte Actual | Umbral / Estado |
|---|---|---|---|---|
| **Entradas** | BAC (Línea base total) | Dato aprobado | *480.000 €* | *Excluye reserva gestión* |
| **Entradas** | PV (Valor Planificado a corte) | `% Planificado × BAC` | *240.000 €* | *Corte Mes 6* |
| **Entradas** | EV (Valor Ganado verificado) | `% Físico Real × BAC` | *216.000 €* | *Solo entregables verificados* |
| **Entradas** | AC (Coste Real acumulado) | Dato contable real | *270.000 €* | *Devengado a Mes 6* |
| **Desempeño** | CV (Varianza de Coste) | `= EV - AC` | *−54.000 €* | *Rojo (< 0)* |
| **Desempeño** | SV (Varianza de Cronograma) | `= EV - PV` | *−24.000 €* | *Ámbar (< 0)* |
| **Eficiencia** | CPI (Índice de Coste) | `= EV / AC` | *0,80* | *Rojo (< 0,90)* |
| **Eficiencia** | SPI (Índice de Cronograma) | `= EV / PV` | *0,90* | *Ámbar (< 0,95)* |
| **Pronóstico** | EAC Típico | `= BAC / CPI` | *600.000 €* | *VAC = −120.000 €* |
| **Pronóstico** | EAC Atípico | `= AC + (BAC - EV)` | *534.000 €* | *VAC = −54.000 €* |
| **Pronóstico** | EAC Combinado | `= AC + ((BAC - EV) / (CPI * SPI))` | *636.667 €* | *VAC = −156.667 €* |
| **Pronóstico** | ETC (según EAC elegido) | `= EAC_elegido - AC` | *Según escenario* | *Flujo de caja pendiente* |
| **Viabilidad** | TCPI (sobre BAC) | `= (BAC - EV) / (BAC - AC)` | *1,26* | *Inviable (> 1,10 vs CPI 0,80)* |
| **Viabilidad** | TCPI (sobre EAC aprobado) | `= (BAC - EV) / (EAC - AC)` | *Según EAC* | *Validar realismo vs CPI* |

### Lecturas o recursos recomendados
- Project Management Institute (PMI): *The Standard for Earned Value Management* (referencia técnica integral de PMI sobre EVM, pronósticos y *Earned Schedule*) *(verificar edición vigente en PMI)*.
- Project Management Institute (PMI): *A Guide to the Project Management Body of Knowledge (PMBOK® Guide)* — Dominio de Desempeño de Medición y sección de Modelos, Métodos y Artefactos (métricas de Valor Ganado y gráficos *burnup/burndown*) *(verificar edición vigente —7.ª / 8.ª— antes de impartir)*.
- Fleming, Q. W. y Koppelman, J. M.: *Earned Value Project Management* (manual clásico de aplicación práctica en industria y tecnología).

### Vídeos, artículos y fuentes adicionales *(validar disponibilidad y vigencia antes de utilizarse)*
- *Nota para el formador: validar el funcionamiento y vigencia de herramientas y fuentes externas antes de cada convocatoria.*
- **Calculadora interactiva de Valor Ganado (EVM) del Campus Interactivo** (`campus-certificacion/index.html`) para práctica autónoma del alumnado con variación en vivo de supuestos.
- Artículos de *ProjectManagement.com* / PMI sobre *Agile EVM* y aplicación práctica de *Earned Schedule* en proyectos digitales *(validar disponibilidad de enlace)*.
- Vídeo breve explicativo (6-8 min) sobre lectura intuitiva de la Curva S y diferencia visual entre EAC típico, atípico y combinado *(seleccionar y validar URL antes de la sesión)*.

### Glosario de términos clave

| Término | Definición operativa |
|---|---|
| **AC (*Actual Cost* — Coste Real)** | Coste real total incurrido para ejecutar el trabajo medido por el EV hasta una fecha de corte determinada. |
| **BAC (*Budget at Completion*)** | Presupuesto total autorizado de la línea base de desempeño (PMB) para completar todo el proyecto; excluye la reserva de gestión. |
| **CPI (*Cost Performance Index*)** | Índice de eficiencia de costes (`EV / AC`); valores `< 1` indican sobrecoste y valores `> 1` indican eficiencia favorable. |
| **CV (*Cost Variance*)** | Varianza de costes (`EV − AC`); valores negativos indican sobrecoste y positivos ahorro presupuestario. |
| **EAC (*Estimate at Completion*)** | Coste total pronosticado del proyecto al finalizar, calculado según el supuesto operativo aplicable (típico, atípico, combinado o *bottom-up*). |
| **ETC (*Estimate to Complete*)** | Coste estimado necesario para completar el trabajo pendiente desde la fecha de corte hasta el cierre (`EAC − AC`). |
| **EV (*Earned Value* — Valor Ganado)** | Valor presupuestado del trabajo realmente completado y verificado hasta la fecha de corte (`% físico completado × BAC`). |
| **PV (*Planned Value* — Valor Planificado)** | Presupuesto autorizado asignado al trabajo que debería haberse completado hasta la fecha de corte según el cronograma base. |
| **SPI (*Schedule Performance Index*)** | Índice de eficiencia del cronograma (`EV / PV`); valores `< 1` indican retraso respecto al ritmo previsto y `> 1` adelanto. |
| **SV (*Schedule Variance*)** | Varianza de cronograma expresada en valor presupuestado (`EV − PV`); negativa indica retraso, positiva adelanto. |
| **TCPI (*To-Complete Performance Index*)** | Eficiencia de costes requerida en el trabajo restante para alcanzar el BAC o un EAC aprobado; valores `> 1` indican mayor dificultad. |
| **VAC (*Variance at Completion*)** | Superávit o déficit presupuestario proyectado al término del proyecto (`BAC − EAC`). |

---

## 9. Adaptaciones

### Sesión online síncrona (formato principal del programa)
- Compartir una **hoja de cálculo en vivo** durante los Bloques A y B para que el alumnado vea cómo cambian los pronósticos EAC y el TCPI en tiempo real al variar EV o AC, reforzando la intuición más allá de la memoria mecánica.
- Utilizar la **Calculadora EVM del Campus Interactivo** como verificación cruzada durante la Actividad 2 en salas de grupos reducidos.
- Dar especial margen de verificación numérica mediante encuestas de respuesta múltiple antes de avanzar al siguiente bloque, evitando que parte del grupo arrastre dudas de cálculo desde el primer bloque.

### Sesión online asíncrona (autoaprendizaje guiado en el Campus)
- Proporcionar **4 microvídeos con pizarra digital paso a paso** (máximo 10-12 min cada uno: `1. Control híbrido y curva S`, `2. CV/SV/CPI/SPI`, `3. Los 4 supuestos de EAC/ETC/VAC`, `4. TCPI y decisiones directivas`).
- Incorporar un **cuestionario interactivo autocorregible con generación de pistas** sobre el caso *SolViento Renovables S.L.*: el alumno introduce sus cálculos numéricos y solo tras comprobar exactitud se desbloquea el espacio de redacción del plan de recuperación.
- Proponer en el foro el reto «Explica un CPI = 0,80 y TCPI = 1,26 a tu director general en 4 líneas sin usar siglas» con revisión mutua.

### Sesión presencial (adaptación para formato híbrido o formación corporativa in-company)
- Entregar impresas la Hoja de Referencia Rápida EVM y los datos de *SolViento Renovables S.L.*, proyectando la Curva S en grande para dibujar físicamente sobre pizarra las distancias visuales correspondientes a CV, SV, ETC y VAC.
- Organizar la Actividad 2 como una «Defensa ante el Comité Financiero» donde el formador asume el rol exigente de Director Financiero haciendo preguntas de estrés a cada equipo durante 3 minutos.
- En formato híbrido simultáneo, trabajar todos los cálculos sobre la misma plantilla cloud y alternar las preguntas de validación entre alumnado en sala y alumnado remoto.

---

## 10. Conexión con el programa

- **Qué conocimientos previos refuerza:** Conecta directamente con la planificación de ruta crítica, holgura y compresión del **Bloque 7, Tema 1**, con la estimación de costes, línea base PMB y reservas del **Bloque 7, Tema 2**, y con las métricas de entrega ágil del **Bloque 5, Tema 1**.
- **Qué competencias desarrolla:** Control cuantitativo de cronograma y presupuesto, dominio riguroso de la Gestión del Valor Ganado (EVM), juicio analítico sobre supuestos de pronóstico, comunicación financiera transparente ante dirección y resolución ágil de problemas cuantitativos y situacionales del ECO PMP.
- **Conexión con el tema anterior:** Continúa el **Bloque 8, Tema 3 (Monitoreo y control: desempeño, cambios y alcance)**, dotando de rigor numérico y financiero a la transformación de WPD en WPI/WPR y al análisis de impacto que alimenta las decisiones del CCB.
- **Conexión con el tema posterior:** Prepara la pieza final del monitoreo en el **Bloque 8, Tema 5 (Monitoreo de interesados, comunicaciones, recursos y riesgos)**, donde los desvíos financieros y de plazo detectados por EVM exigirán recalibrar expectativas de interesados, eficacia comunicativa, cuellos de botella de recursos y análisis de reserva frente a riesgos emergentes.
- **Evidencia de aprendizaje que dejará el alumnado:** (1) Informe Ejecutivo EVM verificado y Plan de Recuperación para *SolViento Renovables S.L.*; (2) Tablero EVM / Agile EVM personalizado con umbrales de alerta para su proyecto real; y (3) calificación del mini-test cuantitativo y situacional PMP.

---

## Siguientes pasos para el formador

1. **Comprobar la Calculadora EVM del Campus:** Verificar antes de la sesión que la calculadora del Campus Interactivo funciona correctamente y enviar un recordatorio previo al alumnado para tener calculadora o Excel a mano.
2. **Desmitificar las matemáticas en el minuto 1:** Explicar desde el inicio que en el examen PMP moderno suele pesar más **interpretar qué decisión directiva tomar con un CPI/SPI/TCPI dado** que memorizar fórmulas aisladas, aunque dominar el cálculo exacto garantiza seguridad total.
3. **Resaltar la secuencia pedagógica de EAC:** Insistir reiteradamente en el hábito profesional de preguntar *«¿la varianza es típica, atípica, afectada por plazo o requiere reestimación bottom-up?»* antes de tocar la calculadora.
4. **Preparar un ejemplo extra de Agile EVM:** Tener a mano un caso breve de 3 sprints con puntos de historia para participantes que solo gestionan equipos Scrum y quieran ver la equivalencia directa con EV y CPI.
5. **Anticipar el cierre del Bloque 8:** Anunciar que el **Tema 5** cerrará el monitoreo integral centrándose en los cuatro radares no financieros que suelen provocar sorpresas al final del proyecto: interesados, comunicaciones, recursos físicos y riesgos/reservas.
