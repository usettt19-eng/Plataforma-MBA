# Tema 4. Corporate Finance

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Tema 4. Corporate Finance (Finanzas Corporativas) |
| **Bloque y posición dentro del programa** | Bloque 3: Operaciones, contabilidad, finanzas corporativas y macroeconomía — Tema 4 de 5 (Tema 10 de 26 del Executive MBA) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Directivos con experiencia, gerentes, mandos intermedios y emprendedores que evalúan proyectos de inversión y decisiones de financiación corporativa |
| **Nivel de dificultad** | Avanzado / Directivo (base previa intermedia en contabilidad financiera y matemáticas financieras básicas) |
| **Prerrequisitos** | Lectura de estados financieros y Estado de Flujos de Efectivo (Bloque 3, Tema 3) y nociones básicas de riesgo y rentabilidad |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado será capaz de valorar proyectos de inversión y empresas mediante Flujo de Caja Descontado (DCF), calcular el Coste Medio Ponderado de Capital (WACC/CAPM), aplicar con rigor los criterios de VAN y TIR en el presupuesto de capital y diseñar una política óptima de estructura de capital y retribución al accionista orientada a la creación de valor sostenible. |

---

## 2. Objetivos de aprendizaje

Al concluir esta unidad didáctica, el alumnado será capaz de:

1. **Aplicar** los principios del valor temporal del dinero y del Flujo de Caja Descontado (DCF) para proyectar y actualizar Flujos de Caja Libres (FCF) en decisiones de inversión empresarial *(Nivel de Bloom: Aplicar)*.
2. **Calcular** el Coste Medio Ponderado de Capital (WACC) integrando el coste de los fondos propios mediante el modelo CAPM y el coste de la deuda después de impuestos *(Nivel de Bloom: Aplicar)*.
3. **Evaluar** proyectos de presupuesto de capital utilizando VAN (NPV), TIR (IRR), Índice de Rentabilidad y periodo de recuperación descontado, identificando las limitaciones de la TIR en proyectos mutuamente excluyentes *(Nivel de Bloom: Evaluar)*.
4. **Analizar** el equilibrio entre deuda y capital propio (*equity*) aplicando los fundamentos de Modigliani-Miller, escudo fiscal, costes de insolvencia financiera (*financial distress*) y teoría del orden jerárquico (*pecking order*) *(Nivel de Bloom: Analizar)*.
5. **Formular** una recomendación directiva coherente sobre estructura de financiación y política de dividendos o recompra de acciones alineada con la creación de valor y los *covenants* financieros *(Nivel de Bloom: Crear)*.

---

## 3. Contenidos esenciales

### 3.1. Valor temporal del dinero, Flujo de Caja Descontado (DCF) y presupuesto de capital (VAN y TIR)

#### Explicación breve y clara
El principio central de las finanzas corporativas es el **valor temporal del dinero**: un euro hoy vale más que un euro mañana porque puede invertirse para obtener una rentabilidad y porque todo flujo futuro conlleva incertidumbre e inflación. Para decidir si una inversión (una planta, un software ERP, una adquisición o una expansión internacional) **crea o destruye valor**, la dirección proyecta sus **Flujos de Caja Libres incrementales (FCF)** —no el beneficio contable— y los descuenta al presente a una tasa que refleja el riesgo del proyecto ($r$ o WACC):

$$\text{VAN (NPV)} = -I_0 + \sum_{t=1}^{n} \frac{FCF_t}{(1 + r)^t}$$

El **VAN (Valor Actual Neto)** mide exactamente cuántos euros de riqueza adicional aporta el proyecto hoy por encima del rendimiento mínimo exigido por los financiadores: se acepta si $\text{VAN} > 0$. La **TIR (Tasa Interna de Retorno)** es la tasa de descuento que hace $\text{VAN} = 0$: se acepta en proyectos convencionales si $\text{TIR} > \text{WACC}$. Ante conflictos entre proyectos mutuamente excluyentes de distinta escala o duración, el **VAN prevalece siempre sobre la TIR**, porque la TIR asume implícitamente la reinversión de flujos intermedios a la propia TIR (supuesto a menudo irreal) y no captura el tamaño absoluto de valor creado.

#### Conceptos clave
- Flujo de Caja Libre operativo ($\text{FCF} = \text{EBIT}(1-T) + \text{D\&A} - \text{CapEx} - \Delta\text{NOF}$).
- Flujos incrementales: exclusión de costes hundidos, inclusión de costes de oportunidad y efectos de canibalización.
- Valor Actual Neto (VAN / NPV), Tasa Interna de Retorno (TIR / IRR), Índice de Rentabilidad (PI) y Payback descontado.
- Valor Terminal (perpetuidad creciente de Gordon-Shapiro o múltiplo de salida) y análisis de sensibilidad.

#### Definiciones necesarias
- **Flujo de Caja Libre (FCF):** Efectivo generado por las operaciones de un proyecto o empresa que queda disponible para retribuir a todos los proveedores de capital (acreedores financieros y accionistas) tras cubrir impuestos operativos, inversiones en inmovilizado (CapEx) y variaciones de circulante (NOF).
- **Valor Actual Neto (VAN):** Diferencia entre el valor actual de los flujos de caja futuros descontados a la tasa de coste de oportunidad del capital y la inversión inicial requerida.
- **Tasa Interna de Retorno (TIR):** Rentabilidad porcentual anual compuesta implícita de una inversión, equivalente a la tasa de descuento que iguala el valor presente de las entradas y salidas de caja ($\text{VAN} = 0$).

#### Ejemplo práctico realista (pyme en transformación digital)
Una distribuidora farmacéutica mediana en Valencia comparaba dos proyectos mutuamente excluyentes: Proyecto Alfa (pequeña mejora de almacén: inversión 200 k€, TIR = 38 %, VAN = +110 k€) frente a Proyecto Beta (automatización robótica integral: inversión 1,5 M€, TIR = 21 %, VAN = +640 k€), ambos evaluados a un WACC del 9 %. Un directivo novato eligió Alfa "porque tiene casi el doble de TIR". El director financiero demostró que, si la empresa tiene acceso a financiación, elegir Beta crea **530 k€ más de valor absoluto** para los accionistas.

#### Errores frecuentes
- Descontar el **beneficio neto** en lugar del Flujo de Caja Libre (olvidando añadir amortizaciones y restar CapEx y aumento de NOF).
- Incluir los **intereses de la deuda** dentro del FCF cuando ya se está descontando al WACC (doble contabilización del coste financiero).
- Utilizar únicamente el *Payback* simple (ignora el valor temporal del dinero y todos los flujos posteriores a la recuperación, penalizando proyectos estratégicos de maduración media).

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué el cálculo del FCF operativo parte de $\text{EBIT}(1-T)$ en lugar del Resultado Neto?
2. ¿En qué dos situaciones prácticas puede fallar la TIR como criterio de decisión frente al VAN?
3. ¿Cómo se trata la inversión inicial en capital circulante (NOF) al principio y al final de la vida finita de un proyecto?

---

### 3.2. Coste de capital: CAPM y Coste Medio Ponderado de Capital (WACC)

#### Explicación breve y clara
Para descontar flujos de caja futuros se necesita la tasa de rendimiento mínima exigida por quienes financian la empresa: el **WACC (*Weighted Average Cost of Capital*)**. El WACC pondera el coste de la deuda después de impuestos y el coste de los fondos propios según su peso **a valores de mercado** (nunca a valor contable histórico):

$$\text{WACC} = \frac{E}{E+D} \cdot k_e + \frac{D}{E+D} \cdot k_d \cdot (1 - T)$$

El coste de los fondos propios ($k_e$) no aparece en ninguna factura bancaria, pero es un coste de oportunidad real y superior al de la deuda porque el accionista asume el riesgo residual. Se estima habitualmente mediante el modelo **CAPM (*Capital Asset Pricing Model*)**:

$$k_e = R_f + \beta_L \cdot ERP$$

Donde $R_f$ es la tasa libre de riesgo (bono soberano a largo plazo), $ERP$ es la prima de riesgo de mercado de la renta variable y $\beta_L$ mide la sensibilidad del activo al riesgo sistemático (no diversificable) del mercado, incorporando tanto el riesgo operativo del sector como el apalancamiento financiero. En pymes no cotizadas, $\beta_L$ se estima a partir de empresas comparables cotizadas (desapalancando y reapalancando la beta) y se evalúa con prudencia si procede añadir una prima por iliquidez o riesgo específico del negocio.

#### Conceptos clave
- Riesgo sistemático (de mercado, remunerado por el CAPM) frente a riesgo específico (diversificable).
- Tasa libre de riesgo ($R_f$), Prima de Riesgo de Mercado ($ERP$) y Beta ($\beta_U$ desapalancada y $\beta_L$ apalancada).
- Escudo fiscal de la deuda: $k_d(1 - T)$.
- Ponderaciones objetivo a valores de mercado ($E/V$ y $D/V$).
- Tasa umbral específica del proyecto (*project-specific WACC*) frente al WACC corporativo medio.

#### Definiciones necesarias
- **WACC:** Tasa media ponderada del coste de todas las fuentes permanentes de financiación (capital propio y deuda financiera neta), ajustada por el ahorro fiscal de los intereses; representa el rendimiento mínimo que debe generar una inversión de riesgo similar al de la empresa para no destruir valor.
- **Beta ($\beta$):** Coeficiente estadístico que mide cuánto varía la rentabilidad de una acción o proyecto respecto a los movimientos del mercado general ($\beta > 1$ indica mayor volatilidad cíclica; $\beta < 1$ indica carácter defensivo).

#### Ejemplo práctico realista (pyme en transformación digital)
Una pyme española de instalaciones eléctricas tradicionales (negocio defensivo, WACC corporativo = 7,5 %) decide lanzar una división de desarrollo de software de inteligencia artificial para gestión energética (negocio mucho más cíclico y arriesgado, cuyo WACC sectorial de comparables es 12,5 %). Si la dirección evalúa la nueva división utilizando su WACC histórico del 7,5 %, aprobará inversiones de alto riesgo que destruyen valor y subestimará la rentabilidad real exigida por el mercado. Debe aplicar una tasa de descuento ajustada al riesgo específico del nuevo negocio.

#### Errores frecuentes
- Usar los pesos contables del Balance (patrimonio neto en libros) en lugar de los **valores de mercado** o estructura objetivo al calcular el WACC.
- Aplicar el mismo WACC corporativo a todos los proyectos independientemente de si se trata de sustituir una máquina madura o de entrar en un país emergente con una tecnología nueva.
- Aplicar el escudo fiscal $(1 - T)$ a empresas con pérdidas fiscales prolongadas que no generan cuota positiva en el Impuesto sobre Sociedades.

> **Nota de verificación normativa:** El aprovechamiento efectivo del escudo fiscal de los intereses está sujeto a los límites legales de deducibilidad de gastos financieros vigentes en cada jurisdicción (por ejemplo, límites ligados al beneficio operativo/EBITDA en la Ley del Impuesto sobre Sociedades española o directivas europeas ATAD). Antes de modelar ahorros fiscales en operaciones reales o apalancadas, debe verificarse la normativa fiscal vigente con asesoramiento especializado.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué el coste de la deuda se multiplica por $(1 - T)$ en la fórmula del WACC mientras que el coste del capital propio ($k_e$) no?
2. ¿Qué ocurre con el valor de una empresa (y con el VAN de sus proyectos) si los bancos centrales suben el tipo libre de riesgo ($R_f$) en 200 puntos básicos?
3. ¿Cómo se obtiene la beta adecuada para valorar una pyme industrial que no cotiza en bolsa?

---

### 3.3. Estructura de capital: deuda frente a *equity*

#### Explicación breve y clara
La decisión de estructura de capital determina qué proporción de la empresa se financia con **deuda** y qué proporción con **fondos propios (*equity*)**. El punto de partida teórico es el teorema de **Modigliani y Miller (1958)**: en un mercado perfecto sin impuestos ni fricciones, la estructura de capital es irrelevante porque endeudarse más hace que el capital propio restante sea más arriesgado (sube $k_e$), compensando exactamente el menor coste aparente de la deuda. Sin embargo, en el mundo real existen tres grandes fricciones que definen el **equilibrio (*Trade-Off Theory*)**:
1. **Ventajas de la deuda:** Escudo fiscal de los intereses (en la medida deducible), ausencia de dilución de la propiedad y disciplina directiva frente al despilfarro de caja.
2. **Costes de la deuda:** Riesgo de insolvencia financiera (*financial distress* —costes legales, pérdida de clientes, fuga de talento y subinversión—), restricciones contractuales (*covenants*) y pérdida de flexibilidad estratégica en recesiones.
3. **Teoría del orden jerárquico (*Pecking Order Theory*):** Por asimetría de información entre directivos e inversores externos, las empresas suelen preferir financiarse primero con **beneficios retenidos**, después con **deuda** y solo en último término con **ampliación de capital externa**.

#### Conceptos clave
- Proposiciones de Modigliani-Miller (sin impuestos y con impuestos).
- Teoría del *Trade-Off* (escudo fiscal vs. costes de insolvencia financiera).
- Teoría del *Pecking Order* (asimetría informativa y señales al mercado).
- Apalancamiento financiero, *covenants* bancarios (Deuda Neta / EBITDA, cobertura de intereses EBIT / Intereses) y capacidad de endeudamiento según perfil de flujo de caja.

#### Definiciones necesarias
- **Costes de insolvencia financiera (*financial distress*):** Pérdidas directas (honorarios concursales y legales) e indirectas (pérdida de clientes temerosos de perder garantía, endurecimiento de proveedores, salida de empleados clave y renuncia a proyectos rentables) cuando el endeudamiento compromete la solvencia.
- ***Covenant* financiero:** Cláusula vinculante incluida en contratos de préstamo o bonos que obliga a la empresa a mantener determinados ratios (por ejemplo, $\text{Deuda Neta}/\text{EBITDA} \le 2,5\times$), otorgando al acreedor derecho de vencimiento anticipado o recargo de tipo si se incumple.

#### Ejemplo práctico realista (pyme en transformación digital)
Dos empresas comparables de software y servicios TI afrontan una desaceleración del mercado: la Empresa A tiene caja neta y deuda de 0,8× EBITDA; la Empresa B se apalancó hasta 4,2× EBITDA para crecer rápido. Al caer las ventas un 12 %, la Empresa B incumple sus *covenants*, se ve forzada a recortar I+D y pierde a sus mejores clientes corporativos por temor a discontinuidad, mientras la Empresa A aprovecha su flexibilidad financiera para adquirir a un competidor a múltiplos atractivos.

#### Errores frecuentes
- Creer que "la deuda siempre es más barata que el capital propio" sin incorporar el aumento simultáneo de $\beta_L$ y $k_e$ ni el riesgo de insolvencia en ciclos adversos.
- Calzar inversiones de largo plazo (planta industrial a 10 años) con deuda a corto plazo (pólizas renovables anualmente), generando riesgo agudo de refinanciación.
- Ignorar la interacción entre apalancamiento operativo (altos costes fijos) y apalancamiento financiero (alta deuda): combinar ambos multiplica el riesgo de quiebra.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué las empresas con activos tangibles y flujos estables (infraestructuras, energía regulada) soportan niveles de deuda mucho mayores que las empresas tecnológicas de I+D?
2. ¿Qué señal suele interpretar el mercado cuando una compañía cotizada anuncia una ampliación de capital ordinaria frente a una emisión de deuda?
3. ¿Cómo se relacionan el apalancamiento operativo y el apalancamiento financiero en la definición de la deuda máxima prudente?

---

### 3.4. Política de dividendos, recompra de acciones y asignación de capital (*Capital Allocation*)

#### Explicación breve y clara
Cuando una empresa genera Flujo de Caja Libre positivo, el Consejo de Administración enfrenta la decisión clave de **asignación de capital (*capital allocation*)**: (1) **reinvertir** en crecimiento orgánico (CapEx/I+D), (2) realizar **adquisiciones (M&A)**, (3) **reducir deuda** para reforzar balance, o (4) **devolver efectivo a los accionistas** mediante **dividendos** o **recompra de acciones (*share buybacks*)**. Según la **política residual de dividendos**, la empresa solo debe repartir efectivo después de haber financiado todos los proyectos con $\text{VAN} > 0$ (es decir, cuya rentabilidad supere el WACC) respetando su estructura objetivo de capital. En la práctica, las compañías evitan recortar dividendos de forma abrupta por el **efecto señal** (un recorte suele percibirse como deterioro estructural de beneficios futuros), por lo que muchas combinan un dividendo ordinario prudente y estable con recompras flexibles cuando disponen de exceso de caja y perciben infravaloración.

#### Conceptos clave
- Asignación estratégica de capital (*capital allocation*).
- Política residual de dividendos frente a estabilidad del dividendo (*dividend smoothing*).
- Dividendos en efectivo frente a recompra de acciones (*share buybacks*): flexibilidad, efecto sobre BPA (EPS) y fiscalidad diferencial.
- Efecto señal (*signaling*) y efecto clientela.

#### Definiciones necesarias
- **Tasa de reparto (*payout ratio*):** Porcentaje del beneficio neto (o del flujo de caja libre) distribuido a los accionistas en forma de dividendos.
- **Recompra de acciones (*share buyback*):** Adquisición por la propia sociedad de sus acciones (para amortizarlas o mantenerlas en autocartera), incrementando la participación proporcional de los accionistas que permanecen y ofreciendo mayor flexibilidad que un dividendo recurrente.

#### Ejemplo práctico realista (pyme en transformación digital)
Una pyme familiar tecnológica de software ERP en País Vasco generó 2,4 M€ de flujo de caja libre extraordinario tras un gran contrato. Parte de la familia accionista exigía multiplicar por tres el dividendo ordinario. El Consejo explicó que elevar el dividendo ordinario crearía una expectativa insostenible al año siguiente y limitaría el desarrollo de su versión *cloud* (proyecto con TIR estimada del 22 % frente a WACC del 9,5 %). Acordaron mantener el dividendo ordinario estable (400 k€), reinvertir 1,5 M€ en la migración *cloud* y destinar 500 k€ a un programa puntual de liquidez/recompra voluntaria para socios minoritarios que deseasen efectivo.

#### Errores frecuentes
- Repartir dividendos elevados financiándolos con nueva deuda mientras se pospone la renovación tecnológica imprescindible del negocio.
- Pensar que una recompra de acciones "siempre crea valor" por aumentar el Beneficio por Acción (BPA): si la empresa recompra acciones sobrevaloradas (por encima de su valor intrínseco), **destruye valor** para los accionistas que permanecen.
- Mantener caja ociosa improductiva durante años en el balance por aversión extrema al riesgo sin proyectos con $\text{VAN} > 0$, diluyendo el ROE y exponiendo a la empresa a inversores activistas o pérdida de competitividad.

> **Nota de verificación normativa:** El régimen mercantil de reparto de dividendos (dotación de reserva legal, patrimonio neto mínimo y límites a la autocartera según la Ley de Sociedades de Capital en España) y la tributación comparada entre dividendos y ganancias patrimoniales por recompra varían según normativa vigente y perfil fiscal del accionista (persona física vs. sociedad holding). Deben comprobarse siempre con asesoría legal y fiscal antes de su ejecución.

#### Preguntas que el alumnado debería poder responder
1. ¿Bajo qué condición económica exacta es preferible para el accionista que la empresa **no** reparta dividendo y retenga los beneficios?
2. ¿Por qué las empresas tecnológicas y cíclicas suelen preferir las recompras de acciones frente a compromisos rígidos de dividendos elevados?
3. ¿Cuándo una recompra de acciones crea valor real y cuándo lo destruye?

---

## 4. Metodología didáctica

Secuencia ejecutiva de **4 horas (240 minutos)** combinando rigor financiero, hoja de cálculo y debate de Consejo:

| Fase | Tiempo | Qué hace el formador | Qué hace el alumnado |
|---|---:|---|---|
| **1. Apertura y activación** | 25 min | Presenta objetivos, lanza diagnóstico rápido y dinamiza la Actividad 1 (decisión intuitiva entre dos proyectos de distinta escala y TIR para provocar el debate VAN vs. TIR). | Responde el cuestionario diagnóstico y vota justificadamente entre dos inversiones antes de conocer la regla matemática completa. |
| **2. Exposición breve / Microlearning I** | 35 min | Expone apartados 3.1 y 3.2 (valor temporal del dinero, FCF, DCF, VAN/TIR, CAPM y WACC) resolviendo un cálculo guiado paso a paso en pizarra/Excel. | Calcula manualmente un WACC de práctica y verifica cómo se construye el FCF a partir del EBIT sin doble contabilizar intereses. |
| **3. Análisis de caso (Parte I: WACC y valoración DCF)** | 30 min | Introduce el caso **Solares del Sur Energía, S.A. (Proyecto Helios-Tech)**, revisa hipótesis y lanza la primera fase de cálculo por equipos. | Calcula el coste de fondos propios (CAPM), coste de deuda neto de impuestos, WACC y descuento de los 5 flujos de caja libres del proyecto. |
| **4. Exposición breve / Microlearning II** | 35 min | Desarrolla apartados 3.3 y 3.4 (Modigliani-Miller, *Trade-Off*, *Pecking Order*, *covenants*, política de dividendos y recompras) con casos reales de pymes y cotizadas. | Contrasta el efecto de la deuda sobre el riesgo de insolvencia y analiza cómo estructurar decisiones de *capital allocation*. |
| **5. Actividad en equipo (Financiación, sensibilidad y dividendos)** | 55 min | Acompaña a los equipos en la Actividad 2 (cálculo de VAN, TIR, Payback descontado, escenario de estrés -20 % FCF, impacto en *covenant* bancario y propuesta de dividendos). | Completa el modelo DCF de Solares del Sur, evalúa alternativas de financiación (100 % deuda vs. 40 % deuda / 60 % equity) y redacta recomendación para el Consejo. |
| **6. Discusión guiada y simulación de Consejo** | 35 min | Modera la defensa de 3 equipos asumiendo el rol de accionista minoritario que exige dividendos y de comité bancario que vigila el *covenant* de 2,50×. | Defiende su estructura financiera y política de dividendos frente a las objeciones de socios minoritarios y banca, integrando creación de valor y solvencia. |
| **7. Síntesis, transferencia y cierre** | 25 min | Resume las 5 leyes ejecutivas de finanzas corporativas, explica la Actividad 3 (evaluación DCF de un proyecto propio y uso opcional de la calculadora del Campus Interactivo) y dirige la evaluación sumativa y autoevaluación. | Responde el test sumativo breve, define su proyecto real de inversión para la Actividad 3 y completa la autoevaluación. |
| **Total** | **240 min** | | |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): El dilema de los dos proyectos (Escala vs. Porcentaje)
- **Objetivo:** Activar la intuición directiva sobre creación absoluta de valor frente a rentabilidad porcentual y preparar la comprensión rigurosa de VAN frente a TIR.
- **Instrucciones para el alumnado:**
  1. Individualmente (6 min), imagina que tu empresa (WACC = 10 %) debe elegir entre dos plataformas tecnológicas excluyentes para el mismo departamento:
     - *Plataforma X:* Inversión 100 k€ hoy, genera 140 k€ dentro de 1 año (TIR = 40 %).
     - *Plataforma Y:* Inversión 1.000 k€ hoy, genera 1.250 k€ dentro de 1 año (TIR = 25 %).
  2. Calcula rápidamente el VAN de ambas opciones al 10 % y decide cuál recomendarías si dispones de financiación sin racionamiento estricto.
  3. Contrasta tu respuesta en parejas (7 min) analizando qué cambiaría si la empresa tuviera un tope estricto de caja de 1.000 k€ y 10 proyectos como X disponibles.
- **Materiales necesarios:** Enunciado proyectado y calculadora básica.
- **Tiempo estimado:** 15 minutos (integrados en la Fase 1).
- **Rol del formador:** Mostrar que con acceso a capital gana Y (VAN = +136,4 k€ vs. +27,3 k€ de X), pero bajo racionamiento estricto de capital el Índice de Rentabilidad ($PI$) cobra protagonismo.
- **Producto o entregable esperado:** Decisión argumentada con cálculo rápido de VAN de ambas alternativas.
- **Criterios de éxito:** Distingue correctamente entre rentabilidad porcentual (TIR), creación de riqueza absoluta (VAN) y racionamiento de capital (PI).

### Actividad 2 (Aplicación): Evaluación integral del Proyecto Helios-Tech (Solares del Sur Energía)
- **Objetivo:** Aplicar de manera integrada CAPM, WACC, DCF, VAN, TIR, análisis de sensibilidad, estructura de capital (*covenants*) y política de dividendos a una decisión real de expansión.
- **Instrucciones para el alumnado:**
  1. En equipos de 4-5 personas, revisad todos los datos de **Solares del Sur Energía, S.A.** (Sección 6).
  2. Calculad el coste del *equity* ($k_e$), coste de deuda tras impuestos y WACC objetivo.
  3. Evaluad el Proyecto Helios-Tech calculando: VAN al WACC, Índice de Rentabilidad, Payback simple, Payback descontado y TIR aproximada (por Excel o interpolación).
  4. Realizad la prueba de estrés ante una caída del 20 % en los FCF operativos de los años 1 a 5 (manteniendo la recuperación del capital circulante en el Año 5).
  5. Evaluad las dos estructuras de financiación propuestas frente al *covenant* de $\text{Deuda Neta}/\text{EBITDA} \le 2,50\times$ y definid la respuesta formal a los socios minoritarios que solicitan 1,8 M€ en dividendos.
- **Materiales necesarios:** Enunciado del caso, plantilla Excel DCF/WACC (también complementable con la calculadora interactiva de **Valoración DCF/VAN/WACC** del Campus EMBA).
- **Tiempo estimado:** 55 minutos + 35 minutos de simulación de Consejo.
- **Rol del formador:** Supervisar los cálculos (WACC = 9,00 %, VAN = +1.489,7 k€, TIR $\approx$ 18,56 %), velar por el tratamiento correcto de la recuperación de NOF en $t=5$ y moderar la negociación con accionistas minoritarios.
- **Producto o entregable esperado:** Modelo DCF completo en hoja de cálculo + recomendación ejecutiva en 3 diapositivas (Inversión, Financiación y Dividendos).
- **Criterios de éxito:** Exactitud en WACC y DCF, análisis de sensibilidad correcto, cumplimiento estricto de *covenants* y argumentación sólida de política de dividendos.

### Actividad 3 (Transferencia a la realidad laboral): *Business Case* DCF de una inversión real en tu empresa
- **Objetivo:** Evaluar con metodología corporativa (WACC, FCF, VAN, TIR y sensibilidad) una iniciativa estratégica real de la empresa del participante.
- **Instrucciones para el alumnado:**
  1. Selecciona un proyecto de inversión real o planificado en tu empresa (implantación tecnológica/IA, apertura de sede, nueva línea de negocio o maquinaria) con horizonte de 3 a 5 años.
  2. Estima una tasa WACC razonada para el riesgo del proyecto, proyecta sus flujos incrementales (CapEx, NOF y FCF operativos) y calcula VAN, TIR y dos escenarios de sensibilidad (pesimista y optimista).
  3. Añade una sección breve explicando cómo debería financiarse (caja retenida, deuda bancaria o ampliación de capital) y qué impacto tendría en el ratio Deuda Neta / EBITDA de la compañía.
  4. Entrega el *Business Case* (máximo 2 páginas + archivo Excel) en el campus virtual en 7 días.
- **Materiales necesarios:** Plantilla Excel "Evaluador DCF, WACC y Sensibilidad" (Sección 8), datos internos reales o estimados.
- **Tiempo estimado:** 10 minutos de encuadre en aula + 75 minutos de trabajo asíncrono.
- **Rol del formador:** Evaluar la coherencia de los supuestos operativos, la correcta exclusión de costes hundidos e intereses en el FCF y la idoneidad de la tasa de descuento elegida.
- **Producto o entregable esperado:** *Business Case* financiero listo para Comité de Inversiones.
- **Criterios de éxito:** Flujos incrementales bien construidos, WACC justificado, tabla de sensibilidad en dos variables y coherencia entre financiación y perfil de riesgo.

---

## 6. Caso práctico: Solares del Sur Energía, S.A. — El Proyecto Helios-Tech y el equilibrio financiero

### Contexto empresarial
**Solares del Sur Energía, S.A.** (Sevilla) es una empresa mediana en crecimiento dedicada a ingeniería e instalaciones fotovoltaicas industriales B2B y software de gestión energética. En el último ejercicio alcanzó una facturación de **32,0 M€**, un **EBITDA de 5,4 M€** y un Resultado Neto de 2,5 M€. Actualmente tiene una **Deuda Financiera Neta de 9,0 M€** (ratio actual Deuda Neta / EBITDA = **1,67×**), sujeta a un ***covenant* bancario estricto de máximo 2,50× Deuda Neta / EBITDA** medido semestralmente.

### Situación o problema
La dirección propone lanzar el **Proyecto Helios-Tech**: una nueva planta de ensamblaje inteligente de inversores solares híbridos integrados con plataforma IoT propia. Requiere una inversión inicial total en $t=0$ de **5.000 k€** (**4.500 k€** en CapEx de instalaciones/software + **500 k€** en inversión inicial de capital circulante/NOF) con un horizonte de evaluación prudente de **5 años**.
Al Consejo se le plantean tres decisiones encadenadas:
1. **Viabilidad económica:** ¿Crea valor el Proyecto Helios-Tech al coste de capital adecuado? ¿Resiste una caída del 20 % en la generación de caja operativa?
2. **Estructura de financiación:** El director comercial sugiere financiar los 5,0 M€ **100 % con un nuevo préstamo bancario** ("porque la deuda al 6 % es más barata que pedir dinero a los socios"). La directora financiera propone respetar la **estructura objetivo de capital a valores de mercado (40 % deuda nueva = 2,0 M€ y 60 % fondos propios/caja retenida = 3,0 M€)**.
3. **Política de dividendos:** Un grupo de socios minoritarios (25 % del capital) exige repartir **1,8 M€ en dividendos** con cargo a los resultados recientes en lugar de retener caja para Helios-Tech.

### Datos disponibles

#### A. Parámetros de mercado y coste de capital objetivo
- Tasa libre de riesgo ($R_f$, bono soberano a 10 años ilustrativo): **3,00 %**
- Prima de riesgo de mercado ($ERP$): **6,00 %**
- Beta apalancada estimada del negocio y estructura objetivo ($\beta_L$): **1,50**
- Coste de la deuda financiera antes de impuestos ($k_d$): **6,00 %**
- Tipo marginal del Impuesto sobre Sociedades ($T$, ilustrativo*): **25,0 %**
- Estructura objetivo de capital (a valores de mercado): **60 % Equity ($E/V$)** y **40 % Deuda ($D/V$)**.

*(Nota: Los parámetros $R_f$, $ERP$ y tipo fiscal del 25 % se fijan con carácter didáctico; en una valoración real deben verificarse los tipos soberanos de mercado vigentes, primas de riesgo actualizadas y límites legales de deducibilidad de intereses).*

#### B. Flujos de Caja Libres (FCF) proyectados del Proyecto Helios-Tech (en miles de euros, k€)

| Año ($t$) | Inversión inicial (CapEx + NOF) | FCF operativo proyectado | Recuperación de NOF | **Flujo de Caja Neto total ($FCF_t$)** |
|---:|---:|---:|---:|---:|
| **0** | -5.000 | — | — | **-5.000** |
| **1** | — | +1.100 | — | **+1.100** |
| **2** | — | +1.450 | — | **+1.450** |
| **3** | — | +1.750 | — | **+1.750** |
| **4** | — | +1.950 | — | **+1.950** |
| **5** | — | +1.850 | +500 | **+2.350** |

*(Criterio conservador del Consejo: no se asume valor residual adicional de maquinaria al final del Año 5, únicamente la recuperación íntegra de los 500 k€ de capital circulante).*

#### C. Datos de solvencia actual y alternativas de financiación (en millones de euros, M€)

| Indicador | Situación actual | Alternativa 1 (100 % Deuda nueva) | Alternativa 2 (40 % Deuda / 60 % Equity-Caja) |
|---|---:|---:|---:|
| **EBITDA actual de referencia** | 5,40 M€ | 5,40 M€ (en $t=0$) | 5,40 M€ (en $t=0$) |
| **Deuda Financiera Neta resultante en $t=0$** | 9,00 M€ | 14,00 M€ | 11,00 M€ |
| **Límite de *covenant* bancario** | $\le 2,50\times$ | $\le 2,50\times$ | $\le 2,50\times$ |

### Preguntas de análisis
1. Calcula el coste de los fondos propios ($k_e$) mediante CAPM, el coste de la deuda después de impuestos y el **WACC** objetivo de Solares del Sur Energía.
2. Calcula el valor actual de cada flujo al WACC obtenido, el **VAN (NPV)**, el **Índice de Rentabilidad (PI)**, el **Payback descontado** y la **TIR (IRR)** del Proyecto Helios-Tech. ¿Debe aprobarse?
3. Ejecuta el **escenario de estrés**: si los FCF operativos de los años 1 a 5 son un **20 % inferiores** a lo previsto (manteniendo intacta la recuperación de 500 k€ de NOF en el Año 5), ¿sigue creando valor el proyecto?
4. Evalúa el error conceptual del director comercial al proponer 100 % deuda y comprueba el impacto de ambas alternativas de financiación sobre el *covenant* bancario en $t=0$.
5. Formula una respuesta técnica y persuasiva a los socios minoritarios respecto a su petición de 1,8 M€ en dividendos.

### Tarea a realizar
En equipo, elaborad la resolución financiera completa y la presentación ejecutiva al Consejo de Administración cubriendo valoración, análisis de riesgo, financiación óptima y política de dividendos.

### Posibles soluciones o criterios de análisis
- **Cálculo del WACC:**
  - $k_e = R_f + \beta_L \cdot ERP = 3,00\ \% + 1,50 \times 6,00\ \% = \mathbf{12,00\ \%}$.
  - $k_d(1 - T) = 6,00\ \% \times (1 - 0,25) = \mathbf{4,50\ \%}$.
  - $\text{WACC} = 0,60 \times 12,00\ \% + 0,40 \times 4,50\ \% = 7,20\ \% + 1,80\ \% = \mathbf{9,00\ \%}$.
- **Valoración DCF al WACC = 9,00 %:**
  - $t=1$: $1.100 / 1,09^1 = \mathbf{1.009,17\ k€}$
  - $t=2$: $1.450 / 1,09^2 = 1.450 / 1,1881 = \mathbf{1.220,44\ k€}$
  - $t=3$: $1.750 / 1,09^3 = 1.750 / 1,2950 = \mathbf{1.351,32\ k€}$
  - $t=4$: $1.950 / 1,09^4 = 1.950 / 1,4116 = \mathbf{1.381,43\ k€}$
  - $t=5$: $2.350 / 1,09^5 = 2.350 / 1,5386 = \mathbf{1.527,34\ k€}$
  - Suma de flujos actualizados: **6.489,70 k€**.
  - **VAN (NPV):** $-5.000,00 + 6.489,70 = \mathbf{+1.489,70\ k€}$ (~**+1,49 M€** de riqueza neta creada hoy).
  - **Índice de Rentabilidad (PI):** $6.489,70 / 5.000 = \mathbf{1,30\times}$.
  - **Payback simple:** **3,36 años**; **Payback descontado (al 9 %):** acumulado en $t=4$ es 4.962,36 k€, faltan 37,64 k€ sobre 1.527,34 k€ del año 5 → **4,02 años**.
  - **TIR (IRR):** **18,56 %** (verificable: al 18 % el VAN es +71,67 k€; al 19 % el VAN es -56,04 k€). Presenta un amplio *spread* de **+9,56 puntos porcentuales** sobre el WACC (9,00 %). **Conclusión: APROBAR el proyecto.**
- **Escenario de estrés (-20 % en FCF operativos):**
  - Valor actual de la recuperación de NOF en $t=5$: $500 / 1,5386 = 324,97\ k€$.
  - Valor actual de los FCF operativos base: $6.489,70 - 324,97 = 6.164,73\ k€$.
  - Con caída del 20 %: $6.164,73 \times 0,80 = 4.931,78\ k€$. Sumando la recuperación de NOF (324,97 k€): Valor actual total = **5.256,75 k€** → **$\text{VAN}_{\text{estrés}} = +256,75\ k€$**. El proyecto sigue siendo robusto incluso ante un desvío severo del -20 % en caja operativa.
- **Estructura de financiación y *covenant*:**
  - *Alternativa 1 (100 % deuda):* Deuda Neta / EBITDA en $t=0$ = $14,00 / 5,40 = \mathbf{2,59\times}$ → **INCUMPLE el *covenant* de 2,50×**, activando riesgo de penalización bancaria, encarecimiento de tipos y pérdida de flexibilidad ante cualquier imprevisto en obra. Además, contradice el principio financiero de que aumentar apalancamiento eleva el riesgo y el $k_e$ del accionista.
  - *Alternativa 2 (40 % deuda / 60 % equity-caja):* Deuda Neta / EBITDA en $t=0$ = $11,00 / 5,40 = \mathbf{2,04\times}$ → **CUMPLE holgadamente el *covenant*** (colchón de 0,46× EBITDA), mantiene el WACC en su zona óptima y preserva calificación crediticia. **Recomendación: Alternativa 2.**
- **Política de dividendos:**
  - Bajo el principio de **dividendo residual**, retener beneficios para invertir en Helios-Tech genera un retorno del **18,56 %** frente a un coste de oportunidad del accionista del **12,00 %**, creando **+1,49 M€ de valor patrimonial neto** (de los cuales un 25 %, unos +372 k€, corresponden directamente a los socios minoritarios). Repartir 1,8 M€ ahora obligaría a incumplir el *covenant* o a realizar una ampliación de capital externa dilutiva y costosa. Recomendación: explicar con transparencia la creación de valor por acción, suspender el dividendo extraordinario durante los 12-18 meses de despliegue (o pactar un dividendo ordinario mínimo compatible con los 3,0 M€ de fondos propios requeridos) y comprometer un marco claro de *payout* creciente a partir del Año 3 cuando el FCF consolidado se dispare.

### Preguntas de reflexión final
1. ¿Qué pasaría con la recomendación si el proyecto no tuviera una vida limitada a 5 años y generase flujos recurrentes a perpetuidad? ¿Qué cautelas exige calcular un Valor Terminal?
2. ¿Cómo reaccionaríais si los socios minoritarios insistieran en que necesitan liquidez personal inmediata pese a reconocer que el proyecto tiene una TIR del 18,56 %? (Por ejemplo, venta secundaria pactada o recompra escalonada futura).
3. ¿Por qué los directivos cometen con frecuencia el error de evaluar un proyecto con el tipo de interés del préstamo específico que lo financia (6 %) en lugar del WACC (9 %)?

---

## 7. Evaluación

### Evaluación diagnóstica breve (al inicio — 5 min)
1. Si un proyecto se financia íntegramente con un préstamo bancario al 5 %, ¿debemos descontar sus flujos al 5 %? ¿Por qué?
2. ¿Qué diferencia principal existe entre el EBITDA y el Flujo de Caja Libre (FCF)?
3. Si el VAN de un proyecto al 10 % es igual a cero ($\text{VAN} = 0$), ¿significa que la empresa no gana nada o que gana exactamente el rendimiento exigido por sus financiadores?
4. Verdadero/Falso: "Aumentar la deuda reduce siempre el WACC de la empresa indefinidamente".

### Evaluación formativa durante la sesión
- Validación inmediata de la Actividad 1 (comprensión de VAN vs. TIR).
- Revisión en vivo del cálculo de WACC (9,00 %) y de los factores de descuento durante el trabajo por equipos en Solares del Sur antes de pasar a la fase de financiación y dividendos.

### Evaluación sumativa al final de la sesión
1. **Valoración y recomendación ejecutiva de Solares del Sur (45 %):** Modelo DCF y defensa en equipo.
2. ***Business Case* DCF individual de transferencia (40 %):** Actividad 3 aplicada a un proyecto real del participante.
3. **Test ejecutivo de cierre (15 %):** 5 preguntas aplicadas sobre CAPM/WACC, FCF, conflictos VAN/TIR, *Trade-Off* de deuda y política de dividendos.

### Rúbrica de evaluación

| Criterio | Insuficiente (0–4,9) | En desarrollo (5,0–6,9) | Adecuado (7,0–8,9) | Destacado (9,0–10) |
|---|---|---|---|---|
| **Cálculo de WACC y tasa de descuento (25 %)** | Errores graves en CAPM, omite escudo fiscal $(1-T)$ o usa pesos erróneos. | Calcula CAPM o coste de deuda con imprecisiones menores o sin justificar su adecuación al riesgo del proyecto. | Calcula con exactitud $k_e$, $k_d(1-T)$ y WACC utilizando ponderaciones objetivo a valor de mercado. | Domina el cálculo de WACC y discute con criterio ejecutivo ajustes por riesgo específico del proyecto, iliquidez y límites de deducibilidad fiscal. |
| **Modelado DCF, VAN, TIR y sensibilidad (25 %)** | Errores en proyección de FCF (mezcla intereses/beneficio) o en la actualización financiera. | Calcula VAN y TIR básicos correctamente, pero omite la recuperación de NOF o el análisis de sensibilidad. | Modela correctamente FCF, VAN, TIR, PI, Payback descontado y escenario de estrés con precisión matemática. | Construye análisis de sensibilidad rigurosos, interpreta correctamente el *spread* TIR–WACC y resuelve conflictos de escala o racionamiento de capital. |
| **Estructura de capital y política de dividendos (25 %)** | Recomienda deuda ilimitada sin evaluar insolvencia ni *covenants*, o desconecta dividendos de creación de valor. | Evalúa parcialmente el ratio de deuda o los dividendos, pero sin integrar *Trade-Off* ni gestión de socios minoritarios. | Aplica *Trade-Off*, respeta *covenants* y argumenta la retención de caja frente a dividendos según creación de valor. | Integra solvencia, señalización al mercado, gobernanza con minoritarios y estrategia de *capital allocation* a medio plazo. |
| **Transferencia ejecutiva y claridad (25 %)** | Informe confuso, desestructurado o no aplicable al proyecto real del participante. | *Business case* comprensible pero con supuestos poco realistas o sin plan de financiación coherente. | Presentación clara, cuantificada y directamente utilizable ante un Comité de Inversiones. | Nivel CFO/Dirección General: persuasiva, impecable en forma y fondo, con mitigación explícita de riesgos financieros y operativos. |

### Actividad de autoevaluación o reflexión
- *¿Qué inversiones recientes de mi empresa se aprobaron basándose en intuición o en un payback simple sin contrastar si su rentabilidad superaba realmente nuestro WACC?*
- *¿Cuál es hoy el nivel de Deuda Neta / EBITDA de mi organización y cuánto margen de maniobra real tendría ante una caída del 20 % en la facturación?*
- *¿Cómo puedo introducir una plantilla estándar de valoración DCF y sensibilidad antes de aprobar presupuestos de CapEx el próximo ejercicio?*

---

## 8. Materiales y recursos

### Guion de diapositivas estructurado (slide por slide)
1. **Slide 1 — Portada:** *Corporate Finance*: Invertir, financiar y retribuir capital para maximizar el valor sostenible.
2. **Slide 2 — Agenda y objetivos:** Hoja de ruta de las 4 horas.
3. **Slide 3 — Actividad 1:** El dilema de los dos proyectos (TIR 40 % vs. TIR 25 %).
4. **Slide 4 — Valor temporal del dinero y Flujo de Caja Libre (FCF):** De EBIT a FCF sin errores de doble contabilización.
5. **Slide 5 — Presupuesto de capital:** VAN (NPV), TIR (IRR), Índice de Rentabilidad y Payback descontado.
6. **Slide 6 — Trampas clásicas del DCF:** Costes hundidos, canibalización, NOF y conflictos VAN vs. TIR.
7. **Slide 7 — Coste de capital (CAPM y WACC):** Riesgo sistemático, beta, escudo fiscal y pesos a valor de mercado.
8. **Slide 8 — Presentación del caso Solares del Sur Energía (Proyecto Helios-Tech):** Cifras de inversión, flujos y WACC.
9. **Slide 9 — Estructura de capital I (Modigliani-Miller y *Trade-Off*):** Escudo fiscal frente a costes de insolvencia financiera.
10. **Slide 10 — Estructura de capital II (*Pecking Order* y *Covenants*):** Asimetría informativa, apalancamiento y límites bancarios.
11. **Slide 11 — Asignación de capital (*Capital Allocation*):** Crecimiento orgánico, M&A, desapalancamiento y retorno al accionista.
12. **Slide 12 — Política de dividendos y recompras (*Buybacks*):** Dividendo residual, efecto señal y cuándo una recompra destruye valor.
13. **Slide 13 — Taller en equipo (Actividad 2):** Valoración completa, prueba de estrés y financiación de Helios-Tech.
14. **Slide 14 — Debriefing cuantitativo:** Solución DCF (WACC 9 %, VAN +1,49 M€, TIR 18,56 %) y defensa del *covenant*.
15. **Slide 15 — Debate de Consejo:** Negociación con socios minoritarios y buen gobierno financiero.
16. **Slide 16 — Síntesis ejecutiva y Actividad 3:** *Business Case* DCF propio y recurso del Campus Interactivo.

### Ficha de trabajo
Documento *Ficha_T4_Corporate_Finance.pdf/docx* que incluye:
- Formulario ejecutivo de bolsillo: FCF, VAN, TIR, CAPM, WACC, fórmula de desapalancamiento/reapalancamiento de beta (Hamada) y ratio Deuda Neta / EBITDA.
- Tabla de trabajo para el descuento anual de los flujos de Helios-Tech (escenario base y escenario estrés -20 %).
- Lista de verificación de 7 errores fatales al presentar un proyecto de inversión al Comité Financiero.

### Plantilla o herramienta práctica replicable
1. **Plantilla Excel / Google Sheets: "Modelo Ejecutivo WACC, DCF (VAN/TIR) y Matriz de Sensibilidad 2D"** (automatiza el cálculo de WACC, tablas de flujo a 5-10 años, funciones `VNA`/`NPV` y `TIR`/`IRR`, y tabla de sensibilidad cruzando WACC vs. crecimiento de FCF).
2. **Herramienta interactiva del programa:** Calculadora integrada de **Valoración DCF / VAN / WACC** disponible en el Campus Interactivo del Executive MBA para validar escenarios en tiempo real.

### Lecturas o recursos recomendados
- Brealey, R. A., Myers, S. C., & Allen, F. (2020). *Principios de finanzas corporativas* (13.ª ed.). McGraw-Hill.
- Berk, J., & DeMarzo, P. (2020). *Corporate Finance* (5.ª ed.). Pearson.
- Damodaran, A. (2012). *Investment Valuation: Tools and Techniques for Determining the Value of Any Asset* (3.ª ed.). Wiley.
- Mauboussin, M. J., & Callahan, D. (2015). *Capital Allocation: Evidence, Analytical Methods, and Assessment Guidance* (referencia práctica sobre asignación de capital).

### Vídeos, artículos y fuentes adicionales *(Validar enlaces y vigencia antes de utilizarse en clase)*
> **Aviso de validación:** Los datos de mercado (tipos soberanos $R_f$, primas de riesgo país/mercado, betas sectoriales y normativa fiscal sobre deducibilidad de intereses o tributación de dividendos) cambian periódicamente; el formador debe verificar las fuentes actualizadas antes de impartir la sesión.
- Bases de datos públicas de betas sectoriales y primas de riesgo por país (por ejemplo, páginas académicas de Aswath Damodaran — NYU Stern) *(validar actualización anual vigente)*.
- Boletín estadístico del Banco de España / BCE sobre rendimientos de deuda soberana a 10 años y tipos medios de préstamos a sociedades no financieras *(validar cifras vigentes)*.
- Normativa vigente sobre limitación de deducibilidad de gastos financieros (Ley del Impuesto sobre Sociedades en España) y reparto de dividendos/autocartera (Ley de Sociedades de Capital) *(validar texto consolidado vigente)*.

### Glosario de términos clave

| Término | Definición ejecutiva |
|---|---|
| **Beta ($\beta$)** | Medida de sensibilidad del rendimiento de un activo frente al riesgo sistemático del mercado. |
| **CAPM** | *Capital Asset Pricing Model*: modelo que estima el coste de los fondos propios como $k_e = R_f + \beta \cdot ERP$. |
| ***Covenant* financiero** | Compromiso contractual de ratios de solvencia o liquidez exigido por acreedores financieros cuyo incumplimiento puede detonar vencimiento anticipado. |
| **DCF (Flujo de Caja Descontado)** | Método de valoración intrínseca que actualiza al presente los Flujos de Caja Libres futuros al WACC. |
| **Escudo fiscal (*Tax Shield*)** | Ahorro impositivo generado por la deducibilidad fiscal de los intereses de la deuda financiera. |
| **FCF (Flujo de Caja Libre)** | Efectivo operativo disponible tras impuestos operativos, CapEx y variación de NOF para remunerar a deuda y accionistas. |
| ***Pecking Order Theory*** | Teoría según la cual las empresas priorizan financiación interna, luego deuda y finalmente emisión de acciones por asimetría informativa. |
| **TIR (IRR)** | Tasa Interna de Retorno: tasa de descuento a la cual el VAN de un proyecto es exactamente cero. |
| **VAN (NPV)** | Valor Actual Neto: riqueza absoluta neta (en euros de hoy) creada por un proyecto por encima del coste de capital. |
| **WACC** | Coste Medio Ponderado de Capital: rendimiento mínimo exigido ponderando deuda neta de impuestos y capital propio a valores de mercado. |

---

## 9. Adaptaciones para modalidad híbrida

### Sesión presencial
- Proyectar la hoja de cálculo de Solares del Sur durante el *debriefing* modificando en vivo la beta, el tipo de interés de deuda y el % de caída de FCF para mostrar la sensibilidad del VAN.
- Organizar la Fase 6 como una junta de accionistas simulada: un equipo actúa como Dirección Financiera, otro como minoritarios reclamando dividendo y otro como comité de riesgos bancario.
- Entregar fichas físicas con los factores de descuento al 9 % para que nadie se bloquee con el teclado de la calculadora durante el análisis inicial.

### Sesión online síncrona (Zoom / Teams + Excel Online + Campus Interactivo)
- Invitar al alumnado a abrir simultáneamente la calculadora de **Valoración DCF / VAN / WACC** del Campus Interactivo del EMBA junto con la plantilla Excel compartida en *breakout rooms*.
- Utilizar encuestas en directo en tres hitos clave: voto inicial de la Actividad 1 (X vs. Y), aprobación del Proyecto Helios-Tech tras ver el escenario de estrés y elección de financiación (100 % deuda vs. 40/60).
- Reservar los 5 minutos posteriores a Microlearning I para resolver en vivo un error típico en Excel (recordar que la función `VNA`/`NPV` en Excel descuenta el primer argumento al periodo 1, por lo que $I_0$ debe sumarse fuera de la función).

### Sesión asíncrona (Campus Virtual)
- Publicar dos vídeos grabados de 15 minutos (*Del FCF al VAN y la TIR* y *WACC, Estructura de Capital y Dividendos*) junto con un videotutorial corto de 5 minutos sobre el uso correcto de `VNA()` y `TIR()` en Excel.
- Habilitar un laboratorio autoevaluable en el campus donde el alumnado introduce sus resultados de Solares del Sur (WACC, VAN, VAN estrés, ratio Deuda/EBITDA) recibiendo retroalimentación automática inmediata.
- Gestionar el debate sobre política de dividendos mediante un foro estructurado donde cada estudiante redacta la carta formal de respuesta del Consejo a los socios minoritarios (máximo 250 palabras).

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Utiliza el Estado de Flujos de Efectivo, las NOF y la estructura patrimonial aprendidos en **Bloque 3, Tema 3 (*Financial and Managerial Accounting*)** y la modelización cuantitativa de escenarios de **Bloque 2, Temas 2 y 3**.
- **Competencias que desarrolla:** Valoración financiera rigurosa de inversiones, diseño de estructura de capital prudente, gestión de relaciones con banca e inversores, disciplina en la asignación de capital (*capital allocation*) y pensamiento financiero estratégico.
- **Conexión con el tema anterior y posterior (plan de 8 bloques / 26 temas):**
  - *Tema anterior:* **Bloque 3, Tema 3 (*Financial and Managerial Accounting*)** explicó cómo medir el desempeño histórico y la caja generada; este tema proyecta esa caja hacia el futuro para decidir dónde invertir y cómo financiarse.
  - *Tema posterior:* **Bloque 3, Tema 5 (*Macroeconomics and the Global Economic Environment*)** analiza las fuerzas macroeconómicas (inflación, tipos de interés de bancos centrales, ciclo del PIB y tipos de cambio) que determinan precisamente la tasa libre de riesgo ($R_f$), el coste de la deuda ($k_d$), la demanda y la estabilidad de los flujos de caja modelados en este tema. Asimismo, sienta las bases directas del **Bloque 6** (Finanzas Avanzadas, M&A, Private Equity y Venture Capital).
- **Evidencia de aprendizaje que dejará el alumnado:** (1) Modelo DCF, análisis de estrés y estrategia financiera del caso Solares del Sur Energía y (2) *Business Case* DCF completo de un proyecto real de su organización.

---

## Siguientes pasos para el formador

1. **Probar las fórmulas de Excel y el Campus Interactivo:** Confirmar que la plantilla Excel funciona sin errores de configuración regional (punto vs. coma decimal; `VNA` vs. `NPV`) y validar el acceso de prueba a la calculadora **DCF/VAN/WACC** del Campus EMBA.
2. **Actualizar referencias de mercado antes de clase:** Consultar el rendimiento vigente del bono español/alemán a 10 años y el Euríbor actual para contextualizar de forma realista $R_f$ y $k_d$ durante la explicación.
3. **Revisar la advertencia de la función `VNA`/`NPV` en Excel:** Preparar una diapositiva o demostración de 1 minuto advirtiendo sobre el error más frecuente de los directivos en Excel (incluir $I_0$ dentro del rango de `VNA()`).
4. **Verificar normativa fiscal aplicable:** Confirmar los límites vigentes en España/UE de deducibilidad de gastos financieros y la regulación mercantil sobre dividendos por si surgen preguntas avanzadas de socios propietarios.
5. **Conectar el cierre con el entorno macro:** Señalar al despedir la sesión que una subida de 200 puntos básicos en los tipos del BCE eleva tanto $R_f$ como $k_d$, reduciendo el VAN de casi todos los proyectos empresariales —puente perfecto hacia el Tema 5.
