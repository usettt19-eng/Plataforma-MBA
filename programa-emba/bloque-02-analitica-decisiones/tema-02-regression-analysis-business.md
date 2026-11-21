# Tema 2. Regression Analysis for Business

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Tema 2. Regression Analysis for Business |
| **Bloque y posición dentro del programa** | Bloque 2: Economía, analítica cuantitativa y decisiones — Tema 2 de 3 (Tema 5 de 26 del Executive MBA) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Directivos con experiencia, gerentes, mandos intermedios y emprendedores |
| **Nivel de dificultad** | Avanzado / Directivo (con base intermedia en hoja de cálculo y métricas de negocio) |
| **Prerrequisitos** | Manejo funcional de hojas de cálculo (Excel o Google Sheets) y haber completado el Tema 1 (*Microeconomics for Managers*) |
| **Resultado general de aprendizaje** | Auditar, interpretar y aplicar modelos de inferencia estadística y regresión lineal simple y múltiple para explicar impulsores de ventas y costes, distinguir correlación de causalidad y fundamentar decisiones presupuestarias y de previsión con rigor ejecutivo. |

---

## 2. Objetivos de aprendizaje

Al finalizar este tema, el alumnado será capaz de:

1. **Explorar** conjuntos de datos empresariales mediante estadísticos descriptivos y gráficos de dispersión para detectar valores atípicos (*outliers*), asimetrías y relaciones no lineales antes de modelizar. *(Nivel de Bloom: Analizar)*
2. **Interpretar** intervalos de confianza, errores estándar y p-valores en lenguaje de negocio para cuantificar la incertidumbre de una estimación y evitar decisiones basadas en ruido aleatorio. *(Nivel de Bloom: Evaluar)*
3. **Interpretar** los coeficientes, el $R^2$, el $R^2$ ajustado y el error estándar de una regresión lineal simple y múltiple aplicada a ventas, marketing y costes en pymes en transformación digital. *(Nivel de Bloom: Aplicar)*
4. **Diagnosticar** problemas críticos de modelización —multicolinealidad (VIF), sesgo de variable omitida, extrapolación fuera de rango y confusión entre correlación y causalidad— al revisar informes presentados por equipos analíticos o consultoras. *(Nivel de Bloom: Evaluar)*
5. **Construir** una previsión presupuestaria de ventas o costes con banda de incertidumbre mediante regresión múltiple, traduciendo los coeficientes en reglas de asignación de capital y control de margen. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1 Análisis exploratorio de datos (EDA): mirar los datos antes de modelizar

#### Explicación breve y clara
Un error habitual en la dirección moderna es lanzar directamente una regresión en Excel o confiar en un promedio mensual sin inspeccionar la distribución subyacente de los datos. El **Análisis Exploratorio de Datos (EDA)** es la auditoría visual y numérica previa que revela si los datos están limpios, si existen valores atípicos extremos (como un pedido excepcional o una caída de servidor), si hay estacionalidad marcada o si la relación entre dos variables es curva en lugar de lineal. Como ilustra el célebre *Cuarteto de Anscombe*, conjuntos de datos con idéntica media, varianza y regresión pueden esconder realidades de negocio completamente opuestas.

#### Conceptos clave
- Medidas de tendencia central (media frente a mediana) y de dispersión (desviación típica, rango intercuartílico).
- Asimetría (*skewness*) y valores atípicos (*outliers*): cuándo corregir un error de registro y cuándo representan una señal de negocio real.
- Visualización exploratoria: histogramas, diagramas de caja (*boxplots*), series temporales y gráficos de dispersión (*scatter plots*).
- Correlación lineal de Pearson ($r$) y sus límites ante relaciones no lineales (por ejemplo, rendimientos decrecientes en inversión publicitaria).

#### Definiciones necesarias
- **Análisis Exploratorio de Datos (EDA):** Proceso sistemático de resumir numérica y visualmente un conjunto de datos para descubrir patrones, anomalías y comprobar supuestos básicos antes de aplicar modelos estadísticos.
- **Valor atípico (*outlier*):** Observación que se desvía drásticamente del resto de la muestra; puede deberse a un fallo de captura (dato erróneo) o a un evento extraordinario (Black Friday, pérdida de un cliente clave) con gran influencia sobre una regresión.
- **Coeficiente de correlación ($r$):** Indicador acotado entre $-1$ y $+1$ que mide la fuerza y dirección de la asociación **lineal** entre dos variables; $r = 0$ indica ausencia de relación lineal, pero no necesariamente ausencia de relación curvilínea.

#### Ejemplo práctico realista
Una pyme española de comercio electrónico B2C observa que su "ticket medio" subió un 18 % en marzo y concluye que su nueva estrategia de *upselling* funciona. Al hacer un EDA básico con diagrama de caja, descubre que la mediana del ticket no cambió (48 € frente a 47,50 €), sino que hubo 4 pedidos atípicos corporativos de más de 6.000 € cada uno que sesgaron la media. Sin ese análisis exploratorio, la dirección habría escalado una inversión comercial sobre una premisa falsa.

#### Errores frecuentes
- Reportar únicamente la media aritmética en distribuciones muy asimétricas (salarios, ingresos por cliente, tiempos de entrega) en lugar de acompañarla de mediana y percentiles.
- Eliminar *outliers* automáticamente "para que el gráfico quede más bonito" sin investigar si corresponden a clientes de altísimo valor o a fallos operativos críticos.
- Calcular correlaciones sobre series con tendencia temporal compartida (dos variables que crecen con el tiempo correlacionan alto aunque no tengan relación real).

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué es imprescindible visualizar un gráfico de dispersión antes de interpretar un coeficiente de correlación o una recta de regresión?
2. ¿En qué situaciones de negocio la mediana informa mejor que la media aritmética?
3. ¿Cómo debe decidir un directivo si excluye o mantiene un valor atípico en un modelo de previsión de demanda?

---

### 3.2 Probabilidad e inferencia práctica: incertidumbre, intervalos de confianza y p-valor

#### Explicación breve y clara
Los directivos casi nunca disponen de todos los datos futuros ni de la población completa: deciden a partir de **muestras** (un mes de campañas, una prueba piloto en 5 tiendas, una encuesta a 250 clientes). La inferencia estadística responde a una pregunta extraordinariamente práctica: **¿la diferencia o el efecto que vemos en la muestra refleja un patrón real del negocio o podría ser simple azar?** Para gestionarlo sin tecnicismo vacío, bastan tres herramientas: el **error estándar** (precisión de la estimación), el **intervalo de confianza** (rango plausible de impacto en el negocio) y el **p-valor** (señal de si el efecto observado es distinguible del ruido).

#### Conceptos clave
- Muestra frente a población y error muestral.
- Hipótesis nula ($H_0$: "no hay efecto real / el coeficiente es cero") frente a hipótesis alternativa ($H_1$).
- Error estándar ($EE$) e intervalo de confianza al 95 % ($\approx \text{estimación} \pm 2 \times EE$).
- p-valor y significación estadística frente a **relevancia económica o de negocio**.
- Error de Tipo I (falso positivo: invertir en una palanca que no funciona) frente a Error de Tipo II (falso negativo: descartar una palanca rentable por muestra demasiado pequeña).

#### Definiciones necesarias
- **Intervalo de confianza al 95 % (IC 95 %):** Rango de valores alrededor de una estimación muestral que refleja su precisión. En términos gerenciales prácticos, marca el escenario conservador y el escenario optimista compatibles con los datos observados; si el intervalo de un efecto incluye el cero, no podemos afirmar que el efecto sea distinto de cero.
- **p-valor:** Probabilidad de observar un resultado al menos tan extremo como el obtenido en nuestra muestra si en realidad no existiera ningún efecto ($H_0$ cierta). Un p-valor bajo (convencionalmente $< 0,05$) sugiere que el patrón difícilmente se debe solo al azar.
- **Relevancia económica:** Magnitud práctica del efecto en euros, margen o cuota; con muestras enormes (millones de clics digitales), un efecto minúsculo e irrelevante puede tener $p < 0,001$.

#### Ejemplo práctico realista
Una cadena mediana de clínicas dentales en digitalización realiza un test A/B en su web para un nuevo botón de reserva rápida con 6.000 visitas por variante. La conversión sube de 3,2 % a 3,6 % (+0,4 puntos porcentuales, $p = 0,03$, IC 95 %: [+0,04 % ; +0,76 %]). Aunque es estadísticamente significativo ($p < 0,05$), el director financiero evalúa el extremo conservador del intervalo (+0,04 %): si implantar el cambio cuesta 45.000 € de desarrollo, el extremo inferior no recuperaría la inversión en 3 años; si cuesta 2.500 €, el riesgo/retorno es excelente. El IC 95 % convierte la estadística en decisión de inversión.

#### Errores frecuentes
- Interpretar $p = 0,04$ como "hay un 96 % de probabilidad de que la hipótesis sea cierta" (definición incorrecta; el p-valor no mide la probabilidad de la hipótesis, sino la compatibilidad de los datos con $H_0$).
- Confundir "no estadísticamente significativo" ($p = 0,18$) con "está demostrado que el efecto es cero": a menudo significa simplemente que la muestra era demasiado pequeña para detectar un efecto moderado.
- Decidir solo mirando el p-valor ("¿tiene asterisco?") e ignorar el tamaño del efecto en euros y la amplitud del intervalo de confianza.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué diferencia práctica existe entre significación estadística y relevancia económica en una campaña digital?
2. ¿Cómo ayuda el extremo inferior de un intervalo de confianza al 95 % a evaluar el riesgo de una inversión comercial?
3. En una pyme con presupuesto limitado, ¿qué resulta más costoso habitualmente: un error de Tipo I o un error de Tipo II?

---

### 3.3 Regresión lineal simple y múltiple: lectura ejecutiva de resultados

#### Explicación breve y clara
La **regresión lineal** traduce relaciones complejas de negocio en una ecuación manejable: $\hat{Y} = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + \dots + \beta_k X_k$. Mientras la regresión simple analiza la asociación de $Y$ con un único predictor (riesgosa porque mezcla factores), la **regresión múltiple** aísla el efecto marginal de cada palanca manteniendo constantes las demás (*ceteris paribus*). Un directivo no necesita derivar matrices de mínimos cuadrados ordinarios (MCO), pero sí dominar la lectura de una tabla de salida estándar (Excel, R, Python o BI): qué significa cada coeficiente $\beta_j$, cuánto explica el modelo ($R^2$ ajustado) y cuál es su margen típico de error ($SEE$ o $RMSE$).

#### Conceptos clave
- Variable dependiente ($Y$, objetivo a explicar o predecir) y variables independientes ($X_j$, palancas o factores de control).
- Interpretación *ceteris paribus* de los coeficientes $\beta_j$ y del intercepto $\beta_0$.
- Variables ficticias (*dummies*) para incorporar estacionalidad, canales, regiones o promociones (valor 0 o 1).
- Bondad de ajuste ($R^2$ y $R^2$ ajustado) y precisión predictiva (Error Estándar de la Estimación — $SEE$ / $RMSE$).
- Contraste global del modelo (estadístico $F$) y contrastes individuales ($t$ y $p$-valor por predictor).

#### Definiciones necesarias
- **Coeficiente de regresión parcial ($\beta_j$):** Cambio esperado en la variable dependiente $Y$ cuando la variable $X_j$ aumenta en una unidad, **manteniendo constantes todas las demás variables incluidas en el modelo**.
- **Coeficiente de determinación ($R^2$ y $R^2$ ajustado):** Proporción de la variación total de $Y$ explicada por el modelo (entre 0 y 1). El $R^2$ siempre sube al añadir variables, incluso irrelevantes; el **$R^2$ ajustado** penaliza la complejidad innecesaria y es la métrica adecuada para comparar modelos múltiples.
- **Error Estándar de la Estimación ($SEE$ o $RMSE$):** Desviación típica promedio de los residuos (diferencia entre ventas reales y predichas), expresada en las **mismas unidades que $Y$** (por ejemplo, miles de euros). Permite estimar rápidamente un intervalo de predicción aproximado al 95 % como $\hat{Y} \pm 2 \times SEE$.

#### Ejemplo práctico realista
Una empresa mediana de logística industrial analiza sus costes mensuales de distribución ($Y$, en miles de €) mediante una regresión múltiple sobre volumen de envíos ($X_1$, miles de bultos), kilómetros medios por ruta ($X_2$) y una *dummy* de meses pico ($X_3$). La salida muestra $\hat{Y} = 42 + 3,1 X_1 + 0,08 X_2 + 11,5 X_3$ con $R^2\text{ ajustado} = 0,89$ y $SEE = 4,2$ k€. Dirección obtiene dos hallazgos inmediatos: el coste fijo estructural implícito ronda los 42 k€/mes, el coste marginal por cada mil bultos es 3,1 k€ (3,10 €/bulto) y los picos estacionales disparan un sobrecoste fijo de 11,5 k€/mes por subcontratación urgente.

#### Errores frecuentes
- Comparar modelos con distinto número de variables usando $R^2$ bruto en vez de $R^2$ ajustado o validación fuera de muestra.
- Interpretar el intercepto $\beta_0$ de forma literal cuando $X = 0$ no tiene sentido de negocio (por ejemplo, tiendas con 0 m² de superficie).
- Creer que un $R^2$ bajo (por ejemplo, 0,25 en comportamiento individual de clientes) hace inútil un modelo: en finanzas o marketing individual, explicar un 25 % de la varianza con coeficientes precisos puede generar una gran ventaja competitiva.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué el $R^2$ ajustado es preferible al $R^2$ estándar al añadir nuevos predictores en una regresión múltiple?
2. ¿Qué información aporta el $SEE$ ($RMSE$) al director financiero que no ofrece el $R^2$?
3. ¿Cómo se interpreta el coeficiente de una variable *dummy* (0/1) de temporada alta dentro de una ecuación de ventas?

---

### 3.4 Diagnóstico de trampas estadísticas: multicolinealidad, causalidad y predicción aplicada

#### Explicación breve y clara
Un modelo de regresión con $R^2 = 0,90$ puede provocar decisiones desastrosas si viola principios clave de diagnóstico. Los cuatro riesgos más frecuentes en el análisis empresarial son: (1) **sesgo de variable omitida** (atribuir ventas al descuento cuando en realidad coinciden con Navidad), (2) **multicolinealidad** (incluir dos variables casi idénticas, como "inversión en Google Ads" y "clics de Google Ads", lo que vuelve inestables los coeficientes), (3) **confundir correlación con causalidad** (causalidad inversa o factores ocultos) y (4) **extrapolación fuera del rango histórico** (asumir que triplicar la inversión publicitaria triplicará linealmente las ventas).

#### Conceptos clave
- Correlación frente a causalidad: variables confusoras, causalidad inversa y cómo acercarse a causalidad (experimentos controlados / tests A/B, diferencias en diferencias).
- Sesgo de variable omitida (*Omitted Variable Bias*).
- Multicolinealidad y Factor de Inflación de la Varianza (**VIF**).
- Validación de supuestos clave de los residuos (linealidad, homocedasticidad, independencia/autocorrelación temporal).
- Sobreajuste (*overfitting*) y predicción fuera de muestra (*train/test split* o validación temporal).

#### Definiciones necesarias
- **Multicolinealidad:** Situación en la que dos o más variables independientes están fuertemente correlacionadas entre sí. No suele arruinar la predicción global si la correlación se mantiene, pero impide aislar el efecto individual de cada variable, inflando los errores estándar y generando signos incoherentes. Se diagnostica con el **VIF** (regla orientativa: VIF > 5 alerta, VIF > 10 problema severo).
- **Sesgo de variable omitida:** Distorsión que sufre el coeficiente de un predictor cuando se excluye del modelo una variable relevante que influye sobre $Y$ y además está correlacionada con dicho predictor.
- **Sobreajuste (*overfitting*):** Fenómeno por el cual un modelo excesivamente complejo memoriza el ruido del histórico (gran ajuste pasado), pero fracasa al predecir meses futuros nuevos.

#### Ejemplo práctico realista
En una empresa SaaS B2B, el equipo de marketing descubre una correlación positiva muy fuerte entre "número de llamadas de soporte técnico recibidas por un cliente" y "renovación anual del contrato", y propone fomentar llamadas de soporte. Al investigar la causalidad, se comprueba que los clientes más activos (que usan intensivamente la plataforma) llaman más a soporte **y** renuevan más: el "uso de la plataforma" era la variable confusora omitida. Al controlar por uso en una regresión múltiple, el efecto de las incidencias de soporte se vuelve negativo (los tickets no resueltos aumentan el *churn*).

#### Errores frecuentes
- Incluir simultáneamente predictores redundantes (por ejemplo, gasto en SEM, impresiones SEM y clics SEM) y concluir erróneamente que "el SEM no es significativo" porque la multicolinealidad disparó los p-valores.
- Extrapolar linealmente una ecuación calibrada con descuentos del 0 % al 15 % para predecir qué pasaría con un descuento del 45 %.
- Ignorar la transformación logarítmica ($\ln Y = \beta_0 + \beta_1 \ln P$) que permite estimar directamente elasticidades constantes cuando la relación real es multiplicativa o no lineal.

#### Preguntas que el alumnado debería poder responder
1. ¿Cómo afecta la multicolinealidad a los coeficientes individuales frente a la capacidad predictiva global del modelo?
2. ¿Qué preguntas críticas debe formular un directivo antes de aceptar una recomendación basada en una regresión observacional?
3. ¿Cómo se evita el sobreajuste al evaluar si un modelo de previsión de ventas es fiable para el próximo ejercicio?

---

## 4. Metodología didáctica

Secuencia de aprendizaje de **4 horas (240 minutos)** orientada a directivos: cero derivaciones algebraicas innecesarias, máximo foco en interpretación de tablas reales, detección de trampas y decisión sobre cuenta de resultados.

| Fase | Tiempo | Qué hace el formador | Qué hace el alumnado |
|---|---:|---|---|
| **1. Apertura y activación** | 25 min | Muestra dos gráficos de correlación engañosa (caso real estilizado de promociones y ventas), realiza el sondeo diagnóstico y presenta los objetivos del tema. | Responde el diagnóstico breve y ejecuta la Actividad 1 (*El espejismo del descuento*), detectando por qué una correlación alta puede inducir a un error presupuestario. |
| **2. Microlearning I: EDA e inferencia sin tecnicismo vacío** | 40 min | Explica los apartados 3.1 y 3.2 con visualizaciones de *outliers*, media vs. mediana, intervalos de confianza y p-valor traducidos a decisiones de inversión. | Analiza un set breve de datos en pantalla, identifica valores atípicos y evalúa el riesgo financiero de un piloto comercial leyendo su IC 95 %. |
| **3. Aplicación guiada (Actividad 2)** | 35 min | Dirige la Actividad 2 (*Auditoría rápida de tablas de regresión*), circula por los grupos revisando lectura de $\beta$, $p$-valor, $R^2$ ajustado y VIF. | En equipos de 3 personas, audita dos salidas de regresión (una válida y otra con multicolinealidad y variable omitida) y redacta un veredicto ejecutivo. |
| **4. Pausa ejecutiva** | 15 min | Gestiona descanso y prepara el entorno del caso práctico (*NorteHogar Omnicanal, S.A.*). *(Incluido en los 240 min).* | Descansa y revisa las tablas de datos de los Modelos 1, 2 y 3 del caso práctico. |
| **5. Microlearning II: Regresión múltiple, causalidad y predicción** | 35 min | Desarrolla los apartados 3.3 y 3.4: lectura *ceteris paribus*, variables *dummy*, $SEE$, VIF, correlación vs. causalidad y límites de extrapolación. | Traduce coeficientes de una ecuación de ventas a ROAS marginal, calcula una predicción puntual con banda del 95 % y plantea dudas de su empresa. |
| **6. Análisis de caso práctico en equipos** | 50 min | Presenta el caso *NorteHogar Omnicanal, S.A.*, organiza equipos como Comité Financiero-Comercial y guía el contraste entre el Modelo 1 ingenuo, el Modelo 2 múltiple y el Modelo 3 con VIF alto. | Calcula el impacto neto en margen bruto de SEM, Redes y Descuentos, estima la previsión de ventas para enero con banda de riesgo y elabora la recomendación presupuestaria. |
| **7. Discusión guiada y contraste ejecutivo** | 25 min | Modera debate entre equipos sobre qué hacer con la inversión en Redes Sociales ($p = 0,21$) y cómo diseñar un experimento causal para despejar dudas. | Expone su dictamen en 3 minutos, defiende la reasignación de presupuesto y diseña un test controlado para validar canales inciertos. |
| **8. Síntesis, transferencia y cierre** | 15 min | Resume el *Checklist del Directivo ante cualquier modelo de regresión*, explica la Actividad 3 de transferencia y aplica la evaluación de cierre. | Realiza el test individual breve, completa su autoevaluación y define el conjunto de datos de su empresa que auditará en la Actividad 3. |
| **TOTAL** | **240 min** | — | — |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): El espejismo del descuento y las correlaciones espurias
- **Objetivo:** Despertar pensamiento crítico frente a correlaciones simples y activar la necesidad de controlar variables confusoras mediante regresión múltiple.
- **Instrucciones para el alumnado:**
  1. Observa dos gráficos proyectados de una cadena retail española durante 24 meses:
     - *Gráfico A:* Fuerte correlación positiva ($r = +0,78$) entre "Porcentaje de descuento aplicado" y "Ventas mensuales".
     - *Gráfico B:* Fuerte correlación positiva ($r = +0,82$) entre "Gasto en calefacción de las tiendas" y "Ventas mensuales".
  2. En parejas (6 minutos), responded: (a) ¿por qué ambos gráficos muestran correlaciones tan altas?; (b) ¿qué ocurriría si Dirección aprobase encender más la calefacción o subir descuentos en julio basándose en esos datos?; (c) ¿qué tercera variable falta en el análisis?
  3. Compartid una situación similar que hayáis visto en vuestra experiencia profesional.
- **Materiales necesarios:** Diapositiva con ambos gráficos de dispersión, pizarra o chat interactivo.
- **Tiempo estimado:** 15 minutos (6 min análisis en pareja, 9 min puesta en común).
- **Rol del formador:** Evidenciar la variable omitida (estacionalidad invernal / campaña de Navidad) y enlazar directamente con la función de la regresión múltiple (*aislar el efecto neto controlando factores externos*).
- **Producto o entregable esperado:** Diagnóstico verbal o escrito en 3 líneas identificando la variable confusora y el riesgo de extrapolación causal.
- **Criterios de éxito:** El alumnado identifica la variable omitida común, diferencia asociación de causalidad y formula al menos un ejemplo real de correlación engañosa en gestión.

### Actividad 2 (Aplicación): Auditoría rápida de dos salidas de regresión
- **Objetivo:** Desarrollar soltura leyendo tablas reales de regresión (coeficientes, EE, p-valor, IC 95 %, $R^2$ ajustado, VIF) para detectar errores metodológicos antes de aprobar un presupuesto.
- **Instrucciones para el alumnado:**
  1. En equipos de 3 personas, recibid en la Ficha T2-01 dos salidas abreviadas de regresión sobre costes de atención al cliente en una pyme SaaS:
     - *Informe A:* Incluye `Usuarios_Activos` y `Licencias_Facturadas` (correlación entre ambas = 0,97; VIF = 19,2). Ninguna sale significativa por separado ($p > 0,30$), aunque el $R^2 = 0,91$ y $F$ es altamente significativo ($p < 0,001$).
     - *Informe B:* Elimina la redundancia (`Licencias_Facturadas`), añade `Dummy_Lanzamiento_Version` y muestra $R^2\text{ ajustado} = 0,89$, $SEE = 1,8$ k€, VIF máximo = 1,3 y todos los predictores significativos ($p < 0,01$).
  2. Responded en la ficha: (a) ¿por qué fallaban los p-valores en el Informe A?; (b) ¿cuál es el coste marginal por usuario activo según el Informe B?; (c) calculad una predicción puntual y su banda aproximada al 95 % para el próximo mes.
- **Materiales necesarios:** Ficha de Trabajo T2-01, calculadora u hoja de cálculo.
- **Tiempo estimado:** 35 minutos (22 min resolución en grupo, 13 min corrección guiada).
- **Rol del formador:** Mostrar cómo el síntoma clásico de multicolinealidad ("$R^2$ muy alto y $F$ significativo, pero $t$ individuales no significativos") puede engañar a un directivo si no mira el VIF.
- **Producto o entregable esperado:** Ficha T2-01 cumplimentada con diagnóstico técnico y predicción con banda al 95 %.
- **Criterios de éxito:** Identificación exacta de la multicolinealidad en el Informe A, cálculo correcto de $\hat{Y}$ y de la banda $\hat{Y} \pm 2 \times SEE$ en el Informe B.

### Actividad 3 (Transferencia a la realidad laboral): Diseño de un modelo de regresión para mi unidad de negocio
- **Objetivo:** Formular y, si dispone de datos, ejecutar un primer modelo de regresión lineal múltiple aplicado a una decisión real de ventas, costes, rotación o productividad en la empresa del participante.
- **Instrucciones para el alumnado:**
  1. Define una decisión gerencial real de tu empresa que requiera explicar o prever una variable clave $Y$ (por ejemplo: ventas mensuales por tienda, coste de envío, tasa de conversión o tiempo de entrega).
  2. Completa la plantilla *Protocolo de Especificación y Auditoría de Regresión* (Sección 8): especifica la variable $Y$, entre 3 y 5 predictores $X_j$ (incluyendo al menos una *dummy*), el signo esperado de cada $\beta_j$ y las posibles variables confusoras o de multicolinealidad que vigilarás.
  3. Opcionalmente (recomendado si dispones de un histórico anónimo de al menos 24 observaciones), ejecuta la regresión en Excel (*Análisis de Datos $\rightarrow$ Regresión*) o en la calculadora del Campus Interactivo y adjunta tu interpretación ejecutiva de los coeficientes y del intervalo de predicción.
- **Materiales necesarios:** Plantilla *Protocolo de Especificación y Auditoría de Regresión*, Excel (complemento *Herramientas para análisis*) o Google Sheets.
- **Tiempo estimado:** 15 minutos de planteamiento en sesión + 60 minutos de elaboración asíncrona para entrega en 7 días.
- **Rol del formador:** Revisar la lógica económica de los predictores propuestos, señalar riesgos de causalidad inversa y retroalimentar la interpretación de negocio.
- **Producto o entregable esperado:** Documento ejecutivo de 1–2 páginas con especificación del modelo (y salida interpretada si se usaron datos reales o simulados).
- **Criterios de éxito:** Coherencia entre problema de negocio y variable $Y$, inclusión de controles relevantes (estacionalidad/tamaño), anticipación explícita de al menos dos riesgos estadísticos y traducción de resultados en una decisión concreta.

---

## 6. Caso práctico

### Caso: NorteHogar Omnicanal, S.A. — Presupuesto de marketing, descuentos y previsión de ventas

#### Contexto empresarial
**NorteHogar Omnicanal, S.A.** es una pyme en proceso de transformación digital especializada en equipamiento del hogar y domótica doméstica, con 18 tiendas físicas en el norte de España y un canal e-commerce que ya representa el 38 % de sus ingresos. Su **margen bruto medio antes de promociones es del 35 %** sobre ventas, y su facturación mensual media en los últimos cuatro años ($n = 48$ meses) ha sido de **420 k€**.

#### Situación o problema
Para preparar el presupuesto del próximo ejercicio, la dirección comercial propone **recortar un 40 % la inversión en buscadores (SEM)** y **aumentar el descuento promocional medio en 4 puntos porcentuales**. Su argumento se apoya en un análisis rápido de regresión simple realizado con el histórico de 48 meses (**Modelo 1**), que sugiere que cada punto porcentual de descuento genera **+14,5 k€** de ventas mensuales ($p = 0,0002$).

La dirección financiera desconfía del resultado, ya que los mayores descuentos siempre se aplicaron en noviembre y diciembre (Black Friday y Navidad), coincidiendo además con campañas fuertes de SEM. Para resolver el conflicto con rigor, el área de analítica ha estimado una regresión múltiple completa (**Modelo 2**) y también probó una versión con número de clics incluidos (**Modelo 3**, descartada por multicolinealidad severa).

#### Datos disponibles

**Tabla 1. Comparativa de modelos estimados sobre $n = 48$ meses (Variable dependiente $Y$: Ventas mensuales en miles de euros, k€)**

| Indicador / Predictor | Modelo 1 (Simple) | Modelo 2 (Múltiple depurado) | Modelo 3 (Con clics SEM) |
|---|---:|---:|---:|
| **$R^2$** | 0,410 | 0,840 | 0,843 |
| **$R^2$ ajustado** | 0,397 | 0,825 | 0,824 |
| **Error estándar ($SEE / RMSE$)** | 39,8 k€ | 21,5 k€ | 21,6 k€ |
| **Estadístico $F$ global ($p$-valor)** | 32,0 ($< 0,001$) | 56,4 ($< 0,001$) | 44,9 ($< 0,001$) |
| **VIF máximo entre predictores** | 1,0 | 2,1 | 14,8 (`Inversion_SEM` y `Clics_SEM`) |

**Tabla 2. Detalle de coeficientes del Modelo 2 (Regresión múltiple depurada, $n = 48$ meses)**

| Variable (unidades y rango histórico) | Coeficiente ($\beta$) | Error Estándar (EE) | Estadístico $t$ | $p$-valor | IC 95 % | VIF |
|---|---:|---:|---:|---:|---:|---:|
| **Intercepto ($\beta_0$)** | 185,00 | 24,50 | 7,55 | $< 0,001$ | [135,6 ; 234,4] | — |
| **`Inversion_SEM` ($X_1$, k€/mes; rango 10–35 k€)** | 4,80 | 0,95 | 5,05 | $< 0,001$ | [2,88 ; 6,72] | 1,6 |
| **`Inversion_Redes` ($X_2$, k€/mes; rango 5–18 k€)** | 1,40 | 1,10 | 1,27 | 0,210 | [-0,82 ; 3,62] | 1,9 |
| **`Descuento_Medio` ($X_3$, puntos %; rango 2–15 %)** | 5,20 | 1,80 | 2,89 | 0,006 | [1,57 ; 8,83] | 2,1 |
| **`Dummy_TemporadaAlta` ($X_4$, 1 = nov-dic; 0 = resto)** | 96,00 | 14,20 | 6,76 | $< 0,001$ | [67,4 ; 124,6] | 1,4 |

#### Preguntas de análisis
1. ¿Por qué el coeficiente de `Descuento_Medio` cae drásticamente de **14,5 k€** (Modelo 1) a **5,20 k€** (Modelo 2)? ¿Qué error estadístico cometía la dirección comercial?
2. Evalúa la rentabilidad real en margen bruto de las dos palancas clave del Modelo 2 (sabiendo que el margen bruto base es del **35 %** sobre ventas y la facturación base media es de **420 k€**):
   - (a) ¿Genera beneficio neto cada 1 k€ adicional invertido en `Inversion_SEM`, tanto en la estimación central como en el extremo inferior conservador del IC 95 %?
   - (b) ¿Genera o destruye margen bruto subir 1 punto porcentual el `Descuento_Medio` aplicado sobre toda la facturación base?
3. ¿Cómo debe interpretar el comité el resultado de `Inversion_Redes` ($\beta_2 = 1,40$; $p = 0,210$; IC 95 %: $[-0,82 ; 3,62]$)? ¿Significa que hay que apagar por completo las redes sociales mañana mismo?
4. ¿Por qué se descartó el Modelo 3 a pesar de tener un $R^2$ ligeramente superior (0,843 frente a 0,840)?
5. Calcula la **previsión de ventas para el próximo enero** ($X_4 = 0$) bajo el plan operativo propuesto ($X_1 = 30$ k€, $X_2 = 12$ k€, $X_3 = 8\,\%$) junto con su **intervalo aproximado de predicción al 95 %** ($\hat{Y} \pm 2 \times SEE$). ¿Sería fiable usar este mismo modelo para simular una inversión en SEM de 55 k€/mes?

#### Tarea a realizar
Como Comité Financiero y de Analítica de NorteHogar Omnicanal, preparad una **Nota Ejecutiva de Decisión (1 página)** que incluya:
1. Evaluación cuantitativa de la propuesta comercial (aceptar, rechazar o modificar).
2. Previsión de ventas y banda de planificación de tesorería/inventario para enero.
3. Un plan de acción en 3 pasos: reasignación de presupuesto entre SEM y descuentos, tratamiento prudente de Redes Sociales (incluyendo diseño de prueba controlada para medir causalidad real) y mejora del modelo para el próximo trimestre.

#### Posibles soluciones o criterios de análisis
- **1. Sesgo de variable omitida:** En el Modelo 1, los descuentos estaban positivamente correlacionados con la temporada alta navideña (`Dummy_TemporadaAlta`, que por sí sola añade +96 k€) y con mayor gasto en SEM. Al omitir esas variables, el Modelo 1 atribuía erróneamente al descuento un volumen de ventas que en realidad provenía de la estacionalidad y del tráfico SEM (sesgo de variable omitida). Controlando *ceteris paribus* en el Modelo 2, el efecto real baja a 5,20 k€ por punto porcentual.
- **2. Rentabilidad en margen bruto (margen base = 35 %):**
  - *`Inversion_SEM` ($X_1$):* Cada 1 k€ invertido en SEM aporta **+4,80 k€** de ventas esperadas $\Rightarrow$ margen bruto incremental = $4,80 \times 0,35 = \mathbf{1,68\text{ k€}}$. Tras restar el 1,00 k€ de gasto SEM, genera una contribución neta de **+0,68 k€** por cada 1 k€ invertido (ROAS de equilibrio = $1 / 0,35 = 2,86\text{x}$). Incluso en el límite inferior conservador del IC 95 % (**2,88 k€** de ventas), el margen generado ($2,88 \times 0,35 = 1,008$ k€) sigue cubriendo el coste publicitario. **Recortar SEM un 40 % sería un error destructivo de valor.**
  - *`Descuento_Medio` ($X_3$):* Subir 1 punto porcentual el descuento genera +5,20 k€ de ventas adicionales, que al 35 % aportan solo $5,20 \times 0,35 = \mathbf{+1,82\text{ k€}}$ de margen bruto nuevo. Sin embargo, conceder un 1 % extra de descuento sobre la base existente de 420 k€ sacrifica directamente $420 \times 0,01 = \mathbf{-4,20\text{ k€}}$ de margen. Saldo neto: $+1,82 - 4,20 = \mathbf{-2,38\text{ k€/mes}}$ de destrucción de margen por cada punto de descuento lineal (subir 4 puntos destruiría aprox. 9,5 k€/mes de EBITDA). **Rechazar la subida generalizada de descuentos** y sustituirla, en su caso, por descuentos segmentados a clientes nuevos o productos con sobrestock.
- **3. Interpretación de `Inversion_Redes` ($X_2$):** Con $p = 0,210$ y un IC 95 % de $[-0,82 ; 3,62]$ (que incluye el 0), no hay evidencia estadística suficiente de retorno directo a corto plazo (y su estimación puntual de 1,40x está por debajo del ROAS de equilibrio de 2,86x). No obstante, "ausencia de evidencia no es evidencia absoluta de cero": Redes puede tener efecto diferido (*brand awareness* o asistencia a conversión SEM). La decisión ejecutiva óptima no es necesariamente eliminar el 100 % sin analizar, sino reducir el gasto a un mínimo controlado y ejecutar un **experimento geográfico (*geo-lift test*)** durante 6–8 semanas (apagar en 6 regiones y mantener en 6 comparables) para medir su efecto causal real.
- **4. Descarte del Modelo 3:** Aunque $R^2$ sube marginalmente de 0,840 a 0,843, el **$R^2$ ajustado empeora** (de 0,825 a 0,824) y el $SEE$ sube a 21,6 k€. Además, `Inversion_SEM` y `Clics_SEM` son casi redundantes (VIF = 14,8), lo que introduce multicolinealidad severa e invalida la interpretación gerencial de cuánto rinde cada euro invertido en SEM.
- **5. Previsión de enero y límite de extrapolación:**
  - Sustituyendo $X_1=30$, $X_2=12$, $X_3=8$, $X_4=0$:
    $$\hat{Y} = 185,00 + 4,80(30) + 1,40(12) + 5,20(8) + 96,00(0) = 185 + 144 + 16,8 + 41,6 = \mathbf{387,4\text{ k€}}$$
  - Banda aproximada de predicción al 95 % ($\hat{Y} \pm 2 \times SEE = 387,4 \pm 43,0$): **$[344,4\text{ k€} ; 430,4\text{ k€}]$**. (Para tesorería conservadora conviene planificar liquidez sobre el suelo de ~344 k€, y para inventario crítico cubrir hasta ~430 k€).
  - *Extrapolación a 55 k€ en SEM:* **No es fiable**, porque el rango histórico observado de `Inversion_SEM` fue de 10 a 35 k€/mes. Proyectar a 55 k€ supone extrapolar muy fuera de muestra e ignorar los rendimientos decrecientes inevitables de los buscadores (saturación de búsquedas de alta intención).

#### Preguntas de reflexión final
1. ¿Qué riesgos de causalidad inversa podrían existir todavía en el Modelo 2 (por ejemplo, si el equipo sube el SEM precisamente cuando percibe que hay mucha demanda)?
2. ¿Cómo cambiaría la conversación entre Dirección Comercial y Finanzas en tu empresa si las propuestas de descuento exigieran siempre un análisis previo como el de NorteHogar?
3. ¿Qué variable adicional (competencia, meteorología, apertura de tiendas, coste por clic) añadirías en una segunda iteración del modelo y cómo comprobarías que no introduce sobreajuste?

---

## 7. Evaluación

### Evaluación diagnóstica breve (inicio de sesión, 5 min)
Cuatro afirmaciones de verdadero/falso (con justificación en una línea) para calibrar el nivel previo:
1. "Si dos variables tienen una correlación de $r = 0,85$, aumentar una provocará necesariamente un aumento en la otra." *(Falso)*
2. "Un $R^2$ más alto siempre indica un modelo mejor para tomar decisiones." *(Falso)*
3. "Si un coeficiente tiene un $p$-valor de 0,35, está demostrado científicamente que su efecto real en el negocio es exactamente cero." *(Falso)*
4. "En una distribución con pocos clientes gigantes y muchos clientes pequeños, la mediana describe mejor al cliente típico que la media." *(Verdadero)*

### Evaluación formativa durante la sesión
- Revisión en directo de la **Actividad 1** (detección de variable confusora) y de la **Actividad 2** (identificación del síntoma de multicolinealidad en el Informe A y cálculo de intervalo con $SEE$ en el Informe B).
- Preguntas socráticas del formador durante el análisis del caso *NorteHogar* para comprobar que los equipos traducen los coeficientes $\beta$ a margen bruto en euros y no se quedan en la lectura puramente estadística.

### Evaluación sumativa al final
1. **Nota Ejecutiva del caso *NorteHogar Omnicanal, S.A.* (50 %):** Corrección de cálculos (margen de SEM vs. descuentos, previsión de enero e intervalo 95 %) y solidez del plan de acción.
2. **Test ejecutivo individual de interpretación (20 %):** 6 preguntas breves (10 min) sobre una tabla de salida de regresión nueva (lectura de $\beta$, IC 95 %, VIF, $R^2$ ajustado y extrapolación).
3. **Transferencia aplicada — Actividad 3 (30 %):** *Protocolo de Especificación y Auditoría de Regresión* aplicado a un reto real de la organización del alumno (entrega a 7 días).

### Rúbrica de evaluación

| Criterio | Insuficiente (1) | En desarrollo (2) | Adecuado (3) | Destacado (4) |
|---|---|---|---|---|
| **1. Lectura de inferencia (EE, IC 95 %, p-valor)** | Malinterpreta el p-valor o ignora completamente la incertidumbre al recomendar decisiones. | Reconoce si $p < 0,05$, pero no interpreta el intervalo de confianza ni la relevancia económica. | Interpreta correctamente p-valor e IC 95 %, distinguiendo significación estadística de impacto económico. | Usa los límites del IC 95 % para evaluar asimetría riesgo/retorno en euros y proponer decisiones graduales o experimentos. |
| **2. Interpretación gerencial de regresión múltiple** | Lee coeficientes sin criterio *ceteris paribus* o comete errores graves al calcular predicciones. | Interpreta la mayoría de los coeficientes correctamente pero presenta errores en *dummies* o banda de error ($SEE$). | Interpreta con precisión $\beta_j$, $R^2$ ajustado y $SEE$, calculando predicciones puntuales e intervalos correctamente. | Traduce de forma impecable la ecuación de regresión a P&L (margen, ROAS de equilibrio, planificación de caja e inventario). |
| **3. Diagnóstico de sesgos y multicolinealidad** | No detecta sesgo de variable omitida, multicolinealidad (VIF) ni riesgos de extrapolación. | Identifica uno de los problemas estadísticos pero sin explicar su impacto práctico en la decisión. | Diagnostica correctamente variable omitida, multicolinealidad (VIF) y límites del rango histórico de datos. | Identifica todos los sesgos estadísticos, cuestiona causalidad inversa y propone diseños cuasiexperimentales o tests A/B para resolverlos. |
| **4. Calidad de la recomendación ejecutiva** | Recomendación desconectada de los datos o basada en la intuición inicial no validada. | Recomendación parcialmente respaldada por cifras, pero genérica o poco accionable. | Recomendación clara, cuantificada y viable con acciones concretas a corto plazo. | Recomendación de nivel Comité de Dirección: rigurosa, equilibrada entre corto/medio plazo y con plan de medición y gobierno del modelo. |

### Actividad de autoevaluación o reflexión
Cierre individual de 3 minutos (*Semáforo Analítico*):
- **Rojo (dejar de hacer):** ¿Qué atajo estadístico o gráfico engañoso voy a dejar de aceptar sin cuestionar en los informes de mi empresa?
- **Ámbar (revisar con lupa):** ¿Qué correlación o KPI clave de mi departamento podría estar ocultando una variable confusora o estacionalidad?
- **Verde (empezar a aplicar):** ¿Qué relación de ventas o costes voy a contrastar con una regresión múltiple o un piloto controlado en el próximo trimestre?

---

## 8. Materiales y recursos

### Guion de diapositivas estructurado (slide por slide)

| N.º | Título de la diapositiva | Contenido visual y mensaje clave | Tiempo estimado |
|---:|---|---|---:|
| 1 | Portada — Regression Analysis for Business | Título, Bloque 2 (Tema 2/3), objetivos de aprendizaje y pregunta clave: *¿Cuánto vale realmente cada euro que inviertes en crecer?* | 3 min |
| 2 | Diagnóstico inicial y Actividad 1 | Gráficos A y B (*Descuento vs. Ventas* y *Calefacción vs. Ventas*) para destapar correlaciones espurias y sesgo de variable omitida. | 12 min |
| 3 | EDA: mirar los datos antes de modelizar | Ilustración visual del *Cuarteto de Anscombe*, media vs. mediana y detección de *outliers* con *boxplots*. | 10 min |
| 4 | Incertidumbre e inferencia para directivos | Esquema visual: Muestra $\rightarrow$ Error estándar $\rightarrow$ Intervalo de confianza 95 % como rango de decisión financiera. | 10 min |
| 5 | p-valor frente a relevancia económica | Matriz 2x2: *Significación estadística (sí/no)* $\times$ *Impacto económico relevante (sí/no)* y riesgos de Error Tipo I y II. | 10 min |
| 6 | Anatomía de una regresión lineal múltiple | Captura real de una tabla de salida estándar señalando con flechas: $\beta_j$, $EE$, $t$, $p$-valor, IC 95 %, $R^2$ ajustado y $SEE$. | 12 min |
| 7 | Lectura *ceteris paribus* y variables *dummy* | Ejemplo paso a paso de ecuación de costes/ventas con estacionalidad y cómo calcular una banda de predicción ($\hat{Y} \pm 2 \cdot SEE$). | 10 min |
| 8 | Actividad 2: Auditoría de dos salidas | Instrucciones del reto con Informes A y B y temporizador de trabajo en equipo. | 5 min |
| 9 | Las 4 trampas mortales de la regresión | Mapa visual: (1) Variable omitida, (2) Multicolinealidad (VIF), (3) Causalidad inversa y (4) Extrapolación fuera de rango. | 12 min |
| 10 | De correlación a causalidad en la empresa | Escalera de evidencia práctica: correlación observacional $\rightarrow$ regresión múltiple con controles $\rightarrow$ experimento A/B o *geo-lift*. | 8 min |
| 11 | Caso práctico: NorteHogar Omnicanal, S.A. | Contexto, conflicto Comercial vs. Finanzas y tablas de los Modelos 1, 2 y 3. | 8 min |
| 12 | Cierre y puente al Tema 3 (*Business Analytics*) | *Checklist de 7 preguntas para auditar cualquier modelo*, instrucciones de Actividad 3 y transición hacia optimización y simulación. | 5 min |

### Ficha de trabajo
**Ficha T2-01: Auditoría de salidas de regresión (Informes A y B)**
- Incluye dos tablas de salida en formato Excel/estadístico realistas (Informe A con `Usuarios_Activos` y `Licencias_Facturadas`, VIF = 19,2; Informe B depurado con `Usuarios_Activos` y `Dummy_Lanzamiento_Version`, VIF = 1,3, $SEE = 1,8$ k€).
- Espacio guiado para responder 4 preguntas técnicas y 1 recomendación de presupuesto.

### Plantilla o herramienta práctica replicable
**Plantilla: Protocolo de Especificación y Auditoría de Regresión (1 página)**

| Sección | Campo a completar por el directivo / equipo |
|---|---|
| **1. Decisión de negocio** | ¿Qué decisión concreta cambiará según el resultado del modelo? |
| **2. Variable objetivo ($Y$)** | Definición exacta, unidad de medida, periodicidad y tamaño muestral ($n$) |
| **3. Predictores ($X_1 \dots X_k$)** | Listado de variables, unidades, rango histórico válido y signo esperado de $\beta_j$ |
| **4. Controles y *dummies*** | Estacionalidad, calendario, tamaño, región o eventos extraordinarios a controlar |
| **5. Auditoría de calidad (checklist)** | [ ] EDA realizado y *outliers* revisados · [ ] VIF < 5 · [ ] $R^2$ ajustado y $SEE$ revisados · [ ] Validación fuera de muestra |
| **6. Riesgo causal y experimento** | ¿Existe posible causalidad inversa o variable omitida? ¿Cómo validarlo con un piloto? |
| **7. Traducción a P&L** | Fórmula de margen incremental / punto de equilibrio y banda de predicción al 95 % |

*(Complemento: Calculadora interactiva de Regresión y Elasticidad disponible en el Campus Interactivo del programa y complemento gratuito "Herramientas para análisis" de Microsoft Excel.)*

### Lecturas o recursos recomendados
- Albright, S. C., & Winston, W. L. — *Business Analytics: Data Analysis and Decision Making* (capítulos sobre regresión lineal simple, múltiple e inferencia aplicada a empresa).
- Spiegelhalter, D. — *The Art of Statistics: How to Learn from Data* (explicación lúcida, moderna y sin jerga innecesaria sobre incertidumbre, p-valores y causalidad).
- Wheelan, C. — *Naked Statistics* (referencia divulgativa ejecutiva excelente para afianzar intuición sobre regresión y sesgos).

### Vídeos, artículos y fuentes adicionales *(validar antes de utilizar en sesión)*
> **Nota de validación docente:** Todos los artículos, vídeos y ejemplos externos indicados a continuación deben revisarse y verificarse en cuanto a disponibilidad, vigencia y licencia antes de su uso en el aula.
- Artículos de *Harvard Business Review* sobre *A Refresher on Regression Analysis* y toma de decisiones basada en experimentos A/B *(verificar acceso y edición vigente)*.
- Tutoriales breves de activación y lectura del complemento *Analysis ToolPak* (Regresión) en Microsoft Excel / Google Sheets *(verificar correspondencia con la versión de Office utilizada por el alumnado)*.
- Vídeos introductorios sobre *Anscombe's Quartet* y correlación frente a causalidad en canales académicos abiertos *(verificar subtítulos en español y enlaces activos)*.

### Glosario de términos clave

| Término | Definición ejecutiva |
|---|---|
| **Ceteris paribus** | Expresión latina ("manteniendo todo lo demás constante") que describe cómo se interpreta cada coeficiente en una regresión múltiple al aislar su efecto neto. |
| **Coeficiente ($\beta_j$)** | Variación media esperada en $Y$ ante un aumento de una unidad en $X_j$, manteniendo fijas las restantes variables del modelo. |
| **Error estándar de la estimación ($SEE$ / $RMSE$)** | Magnitud típica del error de predicción del modelo en las mismas unidades que la variable objetivo $Y$. |
| **Intervalo de confianza (IC 95 %)** | Rango de valores plausibles para un efecto o coeficiente que refleja la incertidumbre muestral; clave para evaluar escenarios conservadores. |
| **Multicolinealidad** | Alta correlación entre dos o más variables predictoras que distorsiona sus errores estándar e impide aislar efectos individuales. |
| **p-valor** | Indicador de compatibilidad de los datos observados con la hipótesis de "efecto nulo"; valores bajos ($< 0,05$) sugieren señal distinguible del azar, aunque no miden por sí solos relevancia económica. |
| **$R^2$ ajustado** | Proporción de variabilidad de $Y$ explicada por el modelo, ajustada para penalizar la inclusión de variables que no aportan valor explicativo real. |
| **Sesgo de variable omitida** | Distorsión de un coeficiente causada por excluir del modelo un factor relevante correlacionado tanto con $Y$ como con el predictor analizado. |
| **Variable *dummy* (ficticia)** | Variable binaria (0 o 1) utilizada para incorporar atributos cualitativos o temporales (temporada alta, canal online, región) en una regresión lineal. |
| **VIF (Factor de Inflación de la Varianza)** | Métrica de diagnóstico de multicolinealidad para cada predictor; valores por encima de 5 alertan de redundancia y por encima de 10 exigen depurar el modelo. |

---

## 9. Adaptaciones

### Sesión presencial
- Entregar impresas las tablas del caso *NorteHogar* y la Ficha T2-01 para que el alumnado marque con rotulador coeficientes no significativos, VIF críticos y rangos históricos antes de calcular en su portátil.
- Proyectar en directo una hoja de Excel ejecutando *Análisis de Datos $\rightarrow$ Regresión* en 2 minutos sobre una serie simulada, demostrando cómo aparecen el $R^2$ ajustado, el $SEE$ y los p-valores sin necesidad de programar.
- Organizar un juego de roles en el debate final: mitad del aula defiende la postura de Dirección Comercial y la otra mitad la de Dirección Financiera/Analítica, obligando a refutar argumentos únicamente con evidencia cuantitativa del Modelo 2.

### Sesión online síncrona
- Compartir un archivo maestro en Google Sheets o Excel Online con pestañas por equipo donde los alumnos introducen sus cálculos de margen incremental (SEM vs. Descuento) y la fórmula de predicción para enero, facilitando el seguimiento visual en directo por parte del formador.
- Usar votaciones interactivas rápidas (Zoom/Teams Polls) tras cada bloque de 15 minutos con preguntas trampa sobre p-valor y multicolinealidad para mantener alta atención y detectar lagunas conceptuales al instante.
- En *breakout rooms*, asignar explícitamente los roles de *Analista de datos*, *Controller financiero* y *Portavoz ejecutivo* para que los 50 minutos del caso sean altamente productivos.

### Sesión asíncrona
- Estructurar el tema en 4 cápsulas grabadas de 10–12 minutos (EDA, Inferencia práctica, Lectura de regresión múltiple, Trampas y causalidad) acompañadas de un screencast paso a paso de 8 minutos ejecutando una regresión en Excel.
- Entregar el dataset del caso *NorteHogar* junto con un cuestionario autocorregible en dos etapas: primero se envían los cálculos de previsión y margen, y solo tras validarlos se accede a la nota comentada del formador.
- Sustituir el debate en plenario por un hilo asíncrono en el campus donde cada participante sube su *Protocolo de Especificación de Regresión* (Actividad 3) y actúa como "auditor estadístico" de un compañero detectando posibles variables omitidas o riesgos de causalidad inversa.

---

## 10. Conexión con el programa

- **Qué conocimientos previos refuerza:** Conecta de manera directa con el **Bloque 2, Tema 1 (*Microeconomics for Managers*)**: mientras en el Tema 1 se utilizaron elasticidades y funciones de costes marginales para tomar decisiones de precios y capacidad, este tema enseña **cómo estimar empíricamente esos parámetros a partir de datos reales** de ventas, promociones y operaciones.
- **Qué competencias desarrolla:** Alfabetización estadística ejecutiva, lectura crítica de modelos cuantitativos, pensamiento causal frente a correlacional, planificación presupuestaria bajo incertidumbre y comunicación eficaz con equipos de ciencia de datos.
- **Conexión con el tema anterior y posterior del EMBA:**
  - *Tema anterior:* **Bloque 2, Tema 1 (*Microeconomics for Managers*)** aporta la teoría económica que define *qué* relaciones tienen sentido (demanda, elasticidad, coste marginal); este tema aporta la metodología inferencial para *medirlas y contrastarlas*.
  - *Tema posterior:* **Bloque 2, Tema 3 (*Business Analytics*)** eleva estos modelos predictivos hacia la **analítica prescriptiva (optimización con restricciones) y la simulación de escenarios/Monte Carlo**, convirtiendo predicciones en planes óptimos de asignación de recursos. También sirve de cimiento cuantitativo para el **Bloque 3, Tema 4 (*Corporate Finance*)** (estimación de betas y proyecciones) y el **Bloque 8, Tema 1 (*Artificial Intelligence for Business*)**.
- **Evidencia de aprendizaje que dejará el alumnado:** (1) Nota Ejecutiva cuantificada del caso *NorteHogar Omnicanal, S.A.*, (2) resultado del test individual de interpretación de salidas de regresión y (3) *Protocolo de Especificación y Auditoría de Regresión* aplicado a su propia unidad de negocio.

---

## Siguientes pasos para el formador

1. **Comprobar herramientas de cálculo:** Confirmar 48 horas antes que el alumnado tiene disponible Excel (con el complemento *Herramientas para análisis* o guía de activación rápida) o acceso a Google Sheets y a la calculadora de regresión del Campus Interactivo.
2. **Preparar el archivo demostrativo de Excel:** Tener listo un libro limpio con 3 pestañas (*EDA/Anscombe*, *Salida Regresión en vivo* y *Solucionario NorteHogar*) para agilizar la explicación visual sin perder ritmo.
3. **Validar referencias y capturas:** Revisar los artículos externos y la correspondencia de menús de Excel/Sheets mencionados en la Sección 8 antes de compartir el dossier del alumno.
4. **Anticipar dudas habituales de perfiles no técnicos:** Preparar analogías claras de negocio para el p-valor, el IC 95 % y el VIF, evitando fórmulas matriciales que desvíen el foco de la decisión gerencial.
5. **Conectar el cierre con el Tema 3:** Al revisar las entregas de la Actividad 3, identificar qué predicciones del alumnado alimentarán decisiones con restricciones de capacidad o incertidumbre multivariable, sirviendo de gancho inmediato para iniciar **Tema 3 (*Business Analytics*)**.
