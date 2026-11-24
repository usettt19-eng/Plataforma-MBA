# Tema 4. Cálculo de cargas eléctricas según normativa actual

> **Aviso técnico, normativo y de alcance profesional:** Este contenido pertenece a una **especialización técnica en diseño eléctrico, iluminación (DIALux), modelado BIM (Revit MEP), visualización (Twinmotion) e IA aplicada**. No constituye un MBA ni habilita legalmente para firmar proyectos ni dictámenes oficiales sin la titulación y colegiación competentes. Todos los factores de demanda, simultaneidad y reserva utilizados en los ejemplos numéricos son **referencias ilustrativas**; en todo proyecto real es obligatorio verificar el país, el reglamento vigente, la autoridad competente y el cálculo independiente realizado por un técnico competente.

---

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Cálculo de cargas eléctricas según normativa actual |
| **Bloque y posición dentro del programa** | Bloque 1: Instalaciones eléctricas — Tema 4 de 11 (Tema 4 de 50 del programa) |
| **Programa formativo** | IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas (6 módulos / 50 temas) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Modalidad** | Online / Híbrida interactiva |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Temas 1, 2 y 3 (magnitudes SI, triángulo de potencias $P, Q, S$, sistemas $1\text{F}/3\text{F}$ e identificación de normativa vigente) |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado estructurará un inventario completo de cargas eléctricas, distinguirá potencia instalada frente a potencia demandada aplicando factores de demanda, simultaneidad y reserva verificables, equilibrará fases en cuadros trifásicos y elaborará un cuadro de cargas y memoria de cálculo trazables sin delegar la validación reglamentaria en Revit MEP ni en asistentes de IA. |

---

## 2. Objetivos de aprendizaje

Al concluir esta sesión de 4 horas, el alumnado será capaz de:

1. **Clasificar** las cargas eléctricas de un edificio por tipología de uso (alumbrado normal y de emergencia, tomas de corriente, fuerza motriz/climatización y cargas especiales) y régimen de funcionamiento. *(Nivel de Bloom: Recordar)*
2. **Diferenciar** potencia instalada frente a potencia demandada, explicando la función técnica y normativa de los factores de utilización, demanda, simultaneidad y reserva futura. *(Nivel de Bloom: Comprender)*
3. **Aplicar** coeficientes justificados de demanda y simultaneidad, factores de potencia ($\cos\varphi$) y rendimientos ($\eta$) para calcular la potencia prevista e intensidad de diseño ($I_B$) de circuitos, subcuadros y acometida. *(Nivel de Bloom: Aplicar)*
4. **Analizar** cuadros de cargas trifásicos para detectar desequilibrios entre fases ($L_1, L_2, L_3$), corrientes excesivas en el conductor neutro y errores de modelado o parámetros de carga en Revit MEP. *(Nivel de Bloom: Analizar)*
5. **Crear** una plantilla trazable de cuadro de cargas y memoria de cálculo con hipótesis explícitas, referencias normativas a verificar y revisión crítica de las sumas o tablas sugeridas por IA. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Inventario y clasificación de cargas eléctricas del edificio

#### Explicación breve y clara
El punto de partida de toda memoria de cálculo eléctrica es el **inventario sistemático de cargas**. Agrupar equipos de distinta naturaleza bajo una única cifra estimada por metro cuadrado suele producir errores graves en cuadros, secciones y contratación de potencia. Un inventario profesional desglosa el edificio por subcuadros y categorías funcionales homogéneas:
- **Alumbrado normal y alumbrado de emergencia:** cuyas potencias reales procederán posteriormente del estudio lumínico en DIALux (incluyendo las pérdidas de los equipos auxiliares o *drivers*, no solo la potencia nominal del chip LED).
- **Tomas de corriente de uso general y tomas dedicadas:** separando circuitos de puestos informáticos de tomas de limpieza o maquinaria puntual.
- **Climatización y fuerza motriz (HVAC, bombas, ascensores, ventilación):** donde conviene distinguir potencia mecánica en el eje frente a potencia eléctrica absorbida de la red ($P_{\text{abs}} = P_{\text{útil}} / \eta$).
- **Cargas especiales:** recarga de vehículos eléctricos (VE), centros de datos/SAI, cocinas industriales o equipos médicos, que presentan perfiles de uso continuo o armónicos específicos.

#### Conceptos clave
- **Carga continua vs. no continua:** distinción relevante en diversos códigos (p. ej., NEC o criterios de diseño térmico) para cargas que operan durante periodos prolongados (alumbrado comercial, climatización, VE) frente a cargas intermitentes.
- **Potencia nominal de placa vs. potencia eléctrica absorbida:** en motores, la placa suele indicar potencia mecánica útil en eje ($\text{kW}$ o $\text{HP}$); la red entrega mayor potencia activa debido al rendimiento ($\eta < 1$).
- **Pérdidas de auxiliares en alumbrado:** un proyector LED de $40\ \text{W}$ nominales puede absorber $44\ \text{W}$ de red por eficiencia del *driver*, dato que debe reflejarse al pasar resultados de DIALux al cuadro de cargas.
- **Sectorización de servicios:** separación entre cargas normales, cargas esenciales/emergencia y cargas no prioritarias susceptibles de gestión energética.

#### Definiciones necesarias
- **Inventario de cargas:** listado estructurado y codificado de todos los receptores y circuitos previstos en una instalación, indicando ubicación, sistema ($1\text{F}/3\text{F}$), tensión, potencia unitaria, factor de potencia y régimen de operación.
- **Rendimiento electromecánico ($\eta$):** relación adimensional entre la potencia útil entregada por un equipo (p. ej. mecánica en el eje de una bomba) y la potencia eléctrica activa absorbida de la red ($\eta = P_{\text{útil}} / P_{\text{abs}}$).
- **Carga especial:** receptor o grupo de receptores que por su magnitud, continuidad, sensibilidad o distorsión armónica requiere circuito dedicado y tratamiento normativo específico (p. ej. recarga VE o SAI).

#### Ejemplo práctico realista
En una planta de oficinas de $600\ \text{m}^2$, la ficha del proveedor de climatización indica una bomba de agua enfriada con motor de potencia útil nominal en eje $P_{\text{eje}} = 5{,}50\ \text{kW}$, rendimiento $\eta = 0{,}88$ y factor de potencia $\cos\varphi = 0{,}85$ a $400\ \text{V}$ trifásico.
- **Potencia eléctrica activa absorbida:** $P_{\text{abs}} = \frac{5{,}50\ \text{kW}}{0{,}88} = 6{,}25\ \text{kW}$.
- **Potencia aparente de diseño del motor:** $S = \frac{6{,}25\ \text{kW}}{0{,}85} = 7{,}35\ \text{kVA}$.
- **Intensidad absorbida en carga nominal:** $I_B = \frac{7\,353\ \text{VA}}{\sqrt{3} \times 400\ \text{V}} \approx 10{,}61\ \text{A}$.
Si un proyectista hubiera utilizado directamente $5{,}50\ \text{kW}$ sin dividir por $\eta$ ni por $\cos\varphi$, habría calculado $7{,}94\ \text{A}$, subestimando la corriente real del motor en un $25\ \%$.
*(Nota: los requisitos reglamentarios específicos de cálculo para motores —como multiplicar la corriente del motor de mayor potencia por un coeficiente adicional en ciertos códigos— deben comprobarse en la normativa vigente del país).*

#### Errores frecuentes
- Tomar la potencia mecánica en eje ($\text{kW}$ o $\text{CV}/\text{HP}$) como si fuera potencia eléctrica activa absorbida, olvidando el rendimiento $\eta$.
- Sumar únicamente la potencia nominal de las lámparas ignorando el consumo real del *driver* o equipo auxiliar.
- Omitir la reserva para cargas futuras de climatización o recarga de vehículos eléctricos ya exigida por reglamentos recientes.
- Dejar en Revit MEP los valores de carga por defecto de familias descargadas de internet sin actualizar sus parámetros según las fichas reales del proyecto.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué la potencia eléctrica que absorbe un motor de una bomba es siempre mayor que la potencia mecánica útil grabada en su placa?
2. ¿Cómo se conectará en el flujo del programa el futuro estudio fotométrico de DIALux con el inventario de cargas de alumbrado?
3. ¿Qué categorías mínimas conviene separar en el inventario antes de aplicar factores de demanda y simultaneidad?

---

### 3.2. Potencia instalada frente a potencia demandada: factores de demanda, simultaneidad y reserva

#### Explicación breve y clara
La suma aritmética simple de todas las placas o tomas de corriente de un edificio —la **potencia instalada**— casi nunca coincide con la potencia máxima real que solicitará la instalación a la red en un instante dado. Por ejemplo, en una oficina con 80 tomas de corriente dobles protegidas por circuitos de $16\ \text{A}$, es físicamente imposible y operativamente irreal que todas las tomas entreguen simultáneamente su capacidad máxima nominal.

Para dimensionar alimentadores, cuadros y acometida con seguridad y viabilidad económica se aplican coeficientes reductores justificados (de **utilización** o **demanda**, y de **simultaneidad**) para obtener la **potencia demandada** o **prevista**, añadiendo finalmente un **factor de reserva** controlado para ampliaciones futuras. Es imprescindible recordar que muchos reglamentos nacionales fijan valores mínimos prescriptivos (por ejemplo, cargas mínimas por $\text{m}^2$ o coeficientes mínimos en viviendas y locales) que **no pueden rebajarse arbitrariamente** y deben verificarse en el código vigente aplicable.

#### Conceptos clave
- **Potencia instalada ($P_{\text{inst}}$):** suma directa de las potencias nominales de todos los receptores o tomas declarados en el inventario, antes de aplicar coeficientes reductores.
- **Factor de demanda ($F_d$) y de utilización ($K_u$):** coeficiente ($\le 1$) que refleja la fracción de potencia nominal que un equipo o grupo de receptores consume realmente en condiciones normales de servicio.
- **Factor de simultaneidad ($F_s$ o $K_s$):** coeficiente ($\le 1$) que pondera la probabilidad de que varios circuitos o subcuadros funcionen al mismo tiempo a su demanda máxima.
- **Factor de reserva / ampliación futura ($K_{\text{res}}$):** margen de capacidad adicional ($\ge 1$, p. ej. $1{,}15$ a $1{,}25$ según criterio de proyecto) previsto en cuadros generales y alimentadores para futuras incorporaciones sin rehacer la acometida.

#### Definiciones necesarias
- **Potencia demandada (o prevista) ($P_{\text{dem}}$):** potencia máxima probable que absorberá un circuito, subcuadro o instalación en régimen normal de explotación tras aplicar los factores de utilización, demanda y simultaneidad aplicables.
- **Factor de demanda ($F_d$):** cociente entre la demanda máxima de una instalación o parte de ella y la carga total instalada conectada a la misma.
- **Factor de simultaneidad ($F_s$):** relación entre la demanda máxima simultánea de un conjunto de circuitos o cargas y la suma de las demandas máximas individuales de cada uno de ellos.

#### Ejemplo práctico realista
Un subcuadro de planta (`SC-P2`) alimenta 12 circuitos derivados de tomas de corriente de uso general en oficinas. Cada circuito tiene asignada una potencia instalada de cálculo de $3{,}45\ \text{kW}$ ($15\ \text{A}$ a $230\ \text{V}$, supuesto $\cos\varphi \approx 1{,}00$ para este ejemplo simplificado), sumando una **potencia instalada** total de $P_{\text{inst}} = 12 \times 3{,}45 = 41{,}40\ \text{kW}$.
- Aplicando como criterio de diseño ilustrativo un **factor de demanda/utilización** por circuito de $F_d = 0{,}60$ (los puestos de trabajo no operan al máximo continuo) y un **factor de simultaneidad** entre los 12 circuitos de $F_s = 0{,}70$:
  $P_{\text{dem}} = 41{,}40\ \text{kW} \times 0{,}60 \times 0{,}70 = 17{,}39\ \text{kW}$.
- Si además se define un **margen de reserva del $20\ \%$** ($K_{\text{res}} = 1{,}20$) para crecimiento de la oficina:
  $P_{\text{diseño}} = 17{,}39\ \text{kW} \times 1{,}20 = 20{,}87\ \text{kW}$.
La diferencia entre proyectar el alimentador del subcuadro para $41{,}40\ \text{kW}$ y hacerlo para $20{,}87\ \text{kW}$ supone prácticamente reducir a la mitad la sección de cobre y el calibre de cabecera, siempre que se justifique normativamente.
*(Nota obligatoria: los coeficientes mínimos admisibles según uso del edificio y la existencia de mínimos por $\text{m}^2$ —como los $100\ \text{W/m}^2$ mínimos para edificios comerciales/oficinas en el REBT español o las tablas del Art. 220 del NEC como ejemplos ilustrativos— deben verificarse siempre frente al reglamento vigente en el país del proyecto).*

#### Errores frecuentes
- Aplicar un factor de simultaneidad $F_s < 1$ a cargas continuas simultáneas inevitables (por ejemplo, todo el alumbrado de una nave en turno nocturno o enfriadoras operando a plena carga en ola de calor).
- Reducir la potencia de diseño por debajo del mínimo reglamentario por superficie ($\text{W/m}^2$ o $\text{VA/m}^2$) exigido en el código local.
- Multiplicar factores de demanda de forma acumulativa en varios niveles (circuito $\times$ subcuadro $\times$ cuadro general $\times$ acometida) hasta obtener potencias irreales e insuficientes.
- No dejar documentado en la memoria qué criterio técnico o artículo normativo respalda cada coeficiente $F_d$ y $F_s$ elegido.

#### Preguntas que el alumnado debería poder responder
1. ¿En qué se diferencia el factor de demanda ($F_d$) del factor de simultaneidad ($F_s$), y por qué no deben aplicarse sin criterio a cargas continuas?
2. ¿Qué ocurre técnicamente y económicamente cuando un proyecto se dimensiona con la potencia instalada bruta sin simultaneidad, y qué ocurre si se abusa de coeficientes reductores?
3. ¿Cómo se relaciona la estimación de carga por demanda real con los mínimos legales por metro cuadrado exigidos en ciertos reglamentos?

---

### 3.3. Balanceo de cargas por fases en cuadros trifásicos y cálculo de corriente de diseño

#### Explicación breve y clara
En un cuadro trifásico con neutro ($3\text{F}+\text{N}+\text{PE}$), las cargas trifásicas equilibradas toman exactamente la misma corriente de cada una de las tres fases ($L_1, L_2, L_3$). Sin embargo, la mayoría de los circuitos finales de alumbrado y tomas de corriente de un edificio son **monofásicos** ($1\text{F}+\text{N}$). Si los circuitos monofásicos se concentran mayoritariamente en una sola fase (por ejemplo, en $L_1$), aparecen tres problemas serios:
1. La fase sobrecargada alcanza el límite térmico de cable e interruptor antes que las demás, obligando a sobredimensionar el alimentador completo y contratar más potencia.
2. Circula una **corriente elevada de retorno por el conductor neutro** (que en sistema equilibrado sin armónicos sería cero).
3. Se producen caídas de tensión asimétricas que alteran la tensión disponible en las fases más cargadas.

Por ello, al diseñar el cuadro de cargas se debe repartir la potencia demandada de los circuitos monofásicos entre $L_1$, $L_2$ y $L_3$ buscando mantener el **desequilibrio por debajo de un umbral práctico razonable** (habitualmente $\le 10\text{–}15\ \%$ respecto a la media, verificando siempre exigencias de distribuidora o reglamento). Una vez equilibradas las fases, la corriente de cálculo del alimentador trifásico se determina a partir de la potencia aparente total (o conservadoramente a partir de la fase más cargada multiplicada por 3 si existe asimetría apreciable).

#### Conceptos clave
- **Equilibrado de fases ($L_1, L_2, L_3$):** asignación ordenada de circuitos monofásicos de modo que las potencias activas, reactivas y corrientes totales por fase resulten lo más próximas posible entre sí.
- **Porcentaje de desequilibrio:** métrica que compara la desviación máxima de una fase respecto al promedio trifásico ($\text{Desequilibrio} = \frac{\max |P_i - P_{\text{media}}|}{P_{\text{media}}} \times 100\ \%$) o respecto a la fase más cargada.
- **Corriente de cálculo o diseño ($I_B$):** intensidad máxima prevista en servicio normal que sirve de base para seleccionar la sección del conductor y el calibre nominal del interruptor de protección.
- **Dimensionamiento por fase más desfavorable:** criterio conservador necesario cuando un tablero trifásico presenta desequilibrio significativo: la sección común de las tres fases debe soportar al menos la corriente de la fase más cargada.

#### Definiciones necesarias
- **Intensidad de cálculo ($I_B$):** corriente eléctrica prevista que transportará un circuito o línea alimentadora en condiciones normales de funcionamiento teniendo en cuenta tensión, número de fases, potencia demandada, factor de potencia y rendimiento.
- **Desequilibrio de cargas trifásico:** desigualdad entre las potencias o intensidades demandadas en las tres fases de un suministro polifásico, causante de corriente homopolar de retorno por el neutro y caídas de tensión desiguales.

#### Ejemplo práctico realista
Un subcuadro alimentado en trifásico $400/230\ \text{V}$ ($50\ \text{Hz}$) contiene seis circuitos monofásicos a $230\ \text{V}$ ($\cos\varphi = 1{,}00$ simplificado) cuyas potencias demandadas son: `C1 = 3,6 kW`, `C2 = 2,4 kW`, `C3 = 1,8 kW`, `C4 = 2,2 kW`, `C5 = 1,5 kW` y `C6 = 2,9 kW` (total $P_{\text{tot}} = 14{,}4\ \text{kW}$; promedio ideal por fase = $4{,}80\ \text{kW}$).
- **Asignación inicial defectuosa:** $L_1 = C1 + C2 + C3 = 7{,}8\ \text{kW}$ ($33{,}91\ \text{A}$); $L_2 = C4 + C5 = 3{,}7\ \text{kW}$ ($16{,}09\ \text{A}$); $L_3 = C6 = 2{,}9\ \text{kW}$ ($12{,}61\ \text{A}$). Desviación máxima sobre la media: $\frac{7{,}8 - 4{,}8}{4{,}8} \times 100 = 62{,}5\ \%$ (¡inaceptable!). Además, la fase $L_1$ demandaría casi $34\ \text{A}$ frente a $20{,}87\ \text{A}$ que corresponderían al sistema equilibrado.
- **Rebalanceo correcto:**
  - $L_1 = C1 + C5 = 3{,}6 + 1{,}5 = 5{,}1\ \text{kW}$ ($22{,}17\ \text{A}$).
  - $L_2 = C2 + C4 = 2{,}4 + 2{,}2 = 4{,}6\ \text{kW}$ ($20{,}00\ \text{A}$).
  - $L_3 = C6 + C3 = 2{,}9 + 1{,}8 = 4{,}7\ \text{kW}$ ($20{,}43\ \text{A}$).
  Desviación máxima sobre la media: $\frac{5{,}1 - 4{,}8}{4{,}8} \times 100 = 6{,}25\ \%$. El alimentador se dimensionará comprobando la fase más cargada ($22{,}17\ \text{A}$), reduciendo en un $34{,}6\ \%$ la exigencia máxima frente al reparto inicial desordenado.

#### Errores frecuentes
- Calcular el alimentador trifásico dividiendo la potencia total por $\sqrt{3} \cdot U_L$ cuando una de las tres fases soporta el doble de carga que las otras dos.
- Conectar todos los circuitos de la misma categoría (por ejemplo, toda la iluminación de una planta o todos los cargadores monofásicos) a la fase $L_1$ por inercia de dibujo o tabla.
- Olvidar que un equilibrio perfecto «en plano» solo se cumple si las cargas equilibradas tienen probabilidad real de uso coincidente (equilibrar un proyector de escenario con una bomba de incendios no es equilibrio real).
- Aceptar los cálculos de *Panel Schedule* de Revit MEP sin verificar que las reglas de *Demand Factor* de la plantilla coinciden con el reglamento del proyecto.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué consecuencias técnicas sobre el neutro, las caídas de tensión y el calibre del interruptor general provoca un cuadro trifásico muy desequilibrado?
2. ¿Por qué no basta con que la suma total de potencias por fase dé un buen porcentaje en el papel si los horarios de uso real de las cargas repartidas no coinciden?
3. Si un subcuadro trifásico tiene $5{,}1\ \text{kW}$ en $L_1$, $4{,}6\ \text{kW}$ en $L_2$ y $4{,}7\ \text{kW}$ en $L_3$, ¿cuál es su desequilibrio porcentual respecto a la media y sobre qué intensidad conviene verificar la protección general?

---

### 3.4. Estructura trazable de la memoria de cálculo y cuadro de cargas verificable

#### Explicación breve y clara
El **cuadro de cargas** y la **memoria de cálculo** son la columna vertebral documental de la ingeniería eléctrica: conectan la demanda real del edificio con el dimensionamiento de conductores (Tema 5), las protecciones (Tema 6) y el diagrama unifilar (Tema 11). Para que cualquier revisor externo, entidad de inspección o coordinador BIM pueda auditarlo en minutos, el cuadro de cargas debe ser **trazable**: cada fila corresponde a un circuito codificado, cada celda calculada contiene fórmulas explícitas y cada factor de demanda muestra su hipótesis o referencia normativa.

Aunque Revit MEP dispone de *Panel Schedules* (tablas de planificación de paneles) y los asistentes de IA (ChatGPT/Claude) pueden redactar rápidamente plantillas de memoria o revisar fórmulas en hoja de cálculo, **ni el modelo BIM ni la IA sustituyen la verificación del ingeniero competente**. Una tabla bonita exportada desde Revit con factores de demanda estadounidenses por defecto o una memoria redactada por ChatGPT con sumas incorrectas carecen de validez técnica.

#### Conceptos clave
- **Cuadro de cargas trazable:** hoja de cálculo estructurada con entradas editables (potencia instalada, $\cos\varphi$, $\eta$, $F_d$, $F_s$) separadas visualmente de las celdas con fórmula automática ($P_{\text{dem}}, Q_{\text{dem}}, S_{\text{dem}}, I_B$, reparto $L_1/L_2/L_3$).
- **Memoria descriptiva y de cálculo:** documento narrativo-técnico que explica las hipótesis, criterios normativos verificados, alcance, excepciones y resultados resumidos del cuadro de cargas.
- **Coherencia con *Panel Schedules* de Revit MEP:** correspondencia controlada entre los totales calculados en la memoria oficial y los parámetros asignados a equipos/tableros en BIM.
- **Control humano sobre asistencia IA:** uso de ChatGPT/Claude para estructurar plantillas, explicar fórmulas o redactar borradores descriptivos con datos anonimizados, comprobando siempre aritmética y normas aplicadas.

#### Definiciones necesarias
- **Cuadro de cargas:** documento técnico tabular que recopila los circuitos de cada tablero eléctrico con sus potencias instaladas, coeficientes de simultaneidad/demanda, reparto por fases, tensiones, factores de potencia e intensidades de diseño.
- **Hipótesis de cálculo:** suposición explícita documentada en memoria (por ejemplo, factor de demanda asignado a un bloque de tomas, reserva del $15\ \%$ o $\cos\varphi$ estimado según catálogo) junto con su justificación técnica o normativa.

#### Ejemplo práctico realista
Un ingeniero prepara la memoria preliminar de un pequeño gimnasio y pide a Claude que genere «una tabla de cuadro de cargas en formato CSV para copiar en Excel y una breve memoria justificativa». La IA entrega una tabla limpia, pero al auditarla el ingeniero detecta dos trampas ocultas: (1) aplicó un factor de demanda del $40\ \%$ a las saunas y resistencias térmicas del spa (cuando son cargas térmicas continuas simultáneas que requieren $100\ \%$ o criterio específico), y (2) sumó aritméticamente los $\text{kVA}$ de motores e iluminación sin separar $P$ y $Q$. Aplicando el protocolo del curso, el ingeniero corrige los factores frente al reglamento vigente del país, introduce fórmulas auditables en Excel para sumar $\sum P$ y $\sum Q$ y deja registrada en la columna de observaciones la referencia justificativa de cada línea.

#### Errores frecuentes
- Escribir valores fijos «a mano» en las columnas de potencia demandada o intensidad dentro de Excel rompiendo el recálculo automático ante cambios de proyecto.
- Delegar en los *Load Classifications* y *Demand Factors* por defecto de Revit MEP el cálculo reglamentario de cargas sin adaptarlos a la normativa nacional.
- Copiar párrafos justificativos generados por ChatGPT o Claude que citan coeficientes normativos que no coinciden con los valores realmente usados en la tabla de cálculo.
- Omitir la fila de **total instalado**, **total demandado**, **reserva** y **desequilibrio entre fases** al pie de cada tablero.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué columnas mínimas debe incluir un cuadro de cargas para permitir su auditoría técnica rápida y su futura vinculación con Revit MEP?
2. ¿Por qué no deben tomarse los *Panel Schedules* por defecto de Revit MEP como cálculo reglamentario definitivo sin reconfiguración?
3. ¿Qué controles debe aplicar un técnico antes de aceptar un borrador de memoria de cálculo o una tabla generada por ChatGPT o Claude?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** combina diagnóstico de plantillas defectuosas, microlearning práctico de factores de carga y balanceo trifásico, resolución de un edificio terciario mixto y construcción de una plantilla real de cuadro de cargas en hoja de cálculo.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
|---|---|---|---|
| **1. Activación: ¿Cuánto consume realmente este edificio?** | 00:00 – 00:25 (25 min) | Lanza la **Actividad 1** («El misterio de la acometida sobredimensionada») comparando la suma bruta de placas de un edificio real frente a su curva de demanda medida. | Estima intuitivamente la demanda real y debate por qué la suma aritmética de circuitos multiplica el coste de inversión eléctrica. |
| **2. Microlearning A: Inventario, rendimiento y factores ($F_d, F_s, K_{\text{res}}$)** | 00:25 – 01:05 (40 min) | Expone los apartados 3.1 y 3.2; resuelve en directo el cálculo de potencia eléctrica absorbida desde potencia mecánica en eje y explica el uso riguroso de factores sujetos a código vigente. | Toma notas en su ficha de trabajo, calcula el consumo eléctrico de dos equipos motrices y clasifica cargas continuas frente a intermitentes. |
| **3. Microlearning B: Balanceo de fases y cuadro de cargas trazable** | 01:05 – 01:45 (40 min) | Expone los apartados 3.3 y 3.4 mostrando cómo medir el desequilibrio en cuadros trifásicos, por qué fallan los valores por defecto en BIM y cómo estructurar memorias auditables. | Realiza en directo el rebalanceo de un subcuadro de 6 circuitos monofásicos reduciendo el desequilibrio por debajo del $10\ \%$. |
| **4. Actividad práctica de aplicación técnica** | 01:45 – 02:15 (30 min) | Dirige la **Actividad 2** (auditoría de un cuadro de cargas en hoja de cálculo y revisión crítica de un resumen de memoria redactado por IA). | Detecta fórmulas rotas, errores de $\eta/\cos\varphi$, desequilibrios ocultos y factores de demanda inadecuados sugeridos por la IA. |
| **Descanso activo** | 02:15 – 02:30 (15 min) | Pausa de desconexión; prepara los archivos del caso práctico *Edificio TecnoValle*. | Descansa e hidrata; anota dudas sobre coeficientes aplicables en su país o sector. |
| **5. Estudio del caso práctico** | 02:30 – 03:15 (45 min) | Presenta el caso *Edificio de Oficinas y Showroom TecnoValle*, organiza grupos de 3–4 personas y supervisa los cálculos de potencia demandada, reserva y rebalanceo VE. | En equipos, recalcula la potencia demandada real, corrige el desequilibrio severo provocado por los cargadores VE y define la potencia de diseño total. |
| **6. Discusión guiada y transferencia a plantilla real** | 03:15 – 03:45 (30 min) | Modera la puesta en común de 2–3 equipos y guía la **Actividad 3** (montaje de la plantilla editable de Cuadro de Cargas propio con fórmulas activas). | Contrasta sus cifras del caso práctico y construye una hoja funcional de cuadro de cargas para su proyecto piloto, con columna de hipótesis y verificación. |
| **7. Síntesis, evaluación sumativa y cierre** | 03:45 – 04:00 (15 min) | Resume las 5 reglas de oro del cálculo de cargas, lanza el cuestionario sumativo final y conecta con el Tema 5 (Dimensionamiento de conductores). | Completa el test sumativo (6 preguntas), responde a la autoevaluación y guarda su cuadro de cargas como dato de entrada para el Tema 5. |

**Total exacto:** 25 + 40 + 40 + 30 + 15 + 45 + 30 + 15 = **240 minutos (4 horas)**.

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «El misterio de la acometida sobredimensionada»

- **Objetivo**: Comprender intuitivamente la brecha entre potencia instalada y demanda real simultánea y activar la reflexión sobre el impacto económico y técnico de los factores de demanda y simultaneidad.
- **Instrucciones para el alumnado**:
  1. Observa el listado resumido de una planta de oficinas con 60 luminarias, 90 tomas de corriente de $16\ \text{A}$, 2 unidades de climatización y un pequeño office (suma de placas e interruptores = $215\ \text{kW}$).
  2. Durante 7 minutos, estima individualmente qué potencia máxima real crees que registrará el analizador de redes a las 12:00 de un día laborable de julio, y vota en el rango propuesto en la encuesta.
  3. Contrasta (8 minutos) tu intuición con la curva real de carga mostrada por el formador, identificando qué cargas son continuas y cuáles presentan muy baja simultaneidad.
- **Materiales necesarios**: Diapositiva con listado de cargas + curva real de demanda diaria anonimizada y encuesta interactiva.
- **Tiempo estimado**: 15 minutos (integrados en la Fase 1).
- **Rol del formador**: Dinamizar la votación, revelar la demanda real registrada y conectar la brecha observada con los requisitos mínimos legales que tampoco deben vulnerarse por defecto.
- **Producto o entregable esperado**: Respuesta razonada de los 3 factores principales que explican la diferencia entre $P_{\text{inst}}$ y $P_{\text{dem}}$.
- **Criterios de éxito**: Al menos el 90 % del alumnado justifica correctamente por qué no se suman aritméticamente los calibres de todas las tomas de corriente para dimensionar la acometida.

### Actividad 2 (Aplicación técnica): Auditoría de Cuadro de Cargas y Revisión de Memoria IA

- **Objetivo**: Aplicar los criterios de rendimiento, triángulo de potencias, simultaneidad y balanceo trifásico para depurar errores numéricos y conceptuales en una tabla asistida por IA.
- **Instrucciones para el alumnado**:
  1. En parejas o tríos (20 minutos), abrid la hoja de cálculo de la Actividad 2 que simula un cuadro de cargas de un pequeño restaurante + borrador de memoria de ChatGPT con 5 fallos ocultos: (a) motor de campana extractora introducido con potencia en eje sin dividir por $\eta = 0{,}84$; (b) aplicación de $F_d = 0{,}35$ a freidoras y hornos eléctricos en hora punta de cocina; (c) suma directa de $\text{kVA}$ sin separar $P$ y $Q$; (d) todas las luminarias y cámaras monofásicas asignadas a la fase $L_1$ ($48\ \%$ de desequilibrio); y (e) ausencia de nota de verificación normativa.
  2. Corregid las fórmulas en la hoja de cálculo, rebalancead los circuitos monofásicos entre $L_1, L_2$ y $L_3$ por debajo del $10\ \%$ de desviación y anotad las correcciones al texto de la IA.
  3. Dedicad 10 minutos finales a verificar vuestro nuevo total de $I_B$ con la pareja vecina.
- **Materiales necesarios**: Hoja de cálculo con errores sembrados (`actividad-02-cuadro-errores.xlsx` / equivalente) y borrador de memoria IA.
- **Tiempo estimado**: 30 minutos (Fase 4).
- **Rol del formador**: Revisar en directo cómo el alumnado formula $\sum P$, $\sum Q$, $S_{\text{tot}}$ y el porcentaje de desequilibrio, evitando valores introducidos manualmente.
- **Producto o entregable esperado**: Hoja de cálculo auditada y corregida con desequilibrio $< 10\ \%$ e intensidad de cabecera recalculada.
- **Criterios de éxito**: Corrección exacta del motor ($\eta$), eliminación de simultaneidad abusiva en cocina térmica, suma vectorial correcta de $P$ y $Q$, y desequilibrio entre fases inferior al $10\ \%$.

### Actividad 3 (Transferencia a proyecto real): Construcción de tu Cuadro de Cargas Trazable

- **Objetivo**: Implementar una plantilla profesional reutilizable de Cuadro de Cargas con fórmulas automáticas, balanceo trifásico en tiempo real e hipótesis trazables para el proyecto propio del alumno.
- **Instrucciones para el alumnado**:
  1. Toma la estructura de la **Plantilla técnica práctica** (Sección 8) y configúrala en tu hoja de cálculo incluyendo como mínimo 8 circuitos representativos de tu proyecto piloto (alumbrado, tomas, fuerza/HVAC y al menos 1 carga especial), apoyándote en la jerarquía de cuadros diseñada en el Tema 2.
  2. Durante 20 minutos, programa las fórmulas automáticas para calcular: $P_{\text{abs}}$, $P_{\text{dem}}$, $Q_{\text{dem}}$, $S_{\text{dem}}$, $I_B$, asignación condicional por fases ($L_1, L_2, L_3$) y porcentaje máximo de desequilibrio del tablero.
  3. Añade en la parte inferior una sección de «Hipótesis y Verificación Normativa» vinculando cada coeficiente aplicado a la Matriz Normativa del Tema 3.
- **Materiales necesarios**: Plantilla base de Cuadro de Cargas (Sección 8), Matriz Normativa del Tema 3 y software de hoja de cálculo.
- **Tiempo estimado**: 25 minutos (integrados en la Fase 6).
- **Rol del formador**: Proyectar las fórmulas recomendadas (p. ej. `SUMAR.SI` / `SUMIF` para totalizar potencias por fase $L_1, L_2, L_3$) y revisar en directo 2–3 hojas del alumnado.
- **Producto o entregable esperado**: Archivo de hoja de cálculo funcional con 8+ circuitos, totales dinámicos por fase, reserva y notas normativas de verificación.
- **Criterios de éxito**: Ninguna celda de resultado está escrita «a mano», el desequilibrio del tablero es $\le 10\ \%$ y todos los factores de demanda incluyen justificación o referencia por confirmar.

---

## 6. Caso práctico

### Caso práctico: *Edificio de Oficinas y Showroom TecnoValle* — El cuadro general saturado y desequilibrado

#### Contexto empresarial
**TecnoValle Sistemas S.L.** rehabilita un edificio corporativo de 3 plantas más sótano de aparcamiento en un parque tecnológico, combinando zona de exposición comercial (*showroom*) en planta baja, oficinas técnicas en plantas 1 y 2, climatización central en cubierta y 4 plazas electrificadas de recarga para vehículos eléctricos (VE) en garaje.

El promotor exige optimizar la potencia a contratar y evitar sobredimensionamientos innecesarios, manteniendo un $15\ \%$ de reserva en el cuadro general para futuras ampliaciones de laboratorio.

#### Situación o problema
El primer borrador de cuadro de cargas remitido por un colaborador externo presenta cuatro anomalías serias que disparan el presupuesto de acometida y comprometen la estabilidad del suministro:
1. Para calcular la cabecera del Cuadro General (`CGMP` a $400/230\ \text{V}$, $50\ \text{Hz}$), sumó las potencias instaladas brutas de todos los subcuadros ($150{,}0\ \text{kW}$) y añadió encima un $20\ \%$ de reserva ($180{,}0\ \text{kW}$), sin aplicar ningún criterio de demanda ni simultaneidad justificado.
2. En el subcuadro de climatización ignoró el rendimiento del motor de bombeo secundario y tomó valores erróneos de $\cos\varphi$.
3. Conectó **3 de los 4 puntos de recarga monofásicos de VE** ($7{,}4\ \text{kW}$ cada uno a $230\ \text{V}$) sobre la **fase $L_1$** y el cuarto sobre $L_2$, dejando $L_3$ sin carga VE, provocando un desequilibrio masivo en garaje que se propaga al `CGMP`.
4. No especificó ninguna referencia normativa de apoyo ni distinguió las hipótesis de cálculo frente a las cifras importadas desde los parámetros preliminares de Revit MEP.

#### Datos disponibles

| Bloque / Subcuadro | Sistema y Tensión | Potencia Instalada ($P_{\text{inst}}$) | $\cos\varphi$ | Criterio ilustrativo ($F_d \times F_s$ a verificar en código local) | Observación actual en borrador |
|---|---|---:|---:|---|---|
| **1. `SC-ALUM`: Alumbrado LED (Showroom + Oficinas)** | $3\text{F}+\text{N}$ (circuitos $1\text{F}\ 230\ \text{V}$ repartidos) | $18{,}00\ \text{kW}$ | $0{,}95$ | $F_d = 1{,}00 \cdot F_s = 0{,}95 \implies 0{,}95$ | Carga continua en horario comercial (incluye pérdidas de *drivers*); bien repartido ($6{,}0\ \text{kW}$ por fase) |
| **2. `SC-TOM`: Tomas de corriente oficinas** | $3\text{F}+\text{N}$ (circuitos $1\text{F}\ 230\ \text{V}$ repartidos) | $48{,}00\ \text{kW}$ | $0{,}90$ | $F_d = 0{,}50 \cdot F_s = 0{,}70 \implies 0{,}35$ | Circuitos repartidos equilibradamente ($16{,}0\ \text{kW}$ inst. / fase $\to$ $5{,}60\ \text{kW}$ dem. / fase) |
| **3. `SC-HVAC`: Climatización central VRF + bombas** | Trifásico equilibrado $400\ \text{V}$ | $42{,}00\ \text{kW}$ abs. | $0{,}88$ | $F_d = 0{,}90 \cdot F_s = 0{,}90 \implies 0{,}81$ | Potencia eléctrica ya corregida por rendimiento; equilibrada en las 3 fases |
| **4. `SC-GAR-VE`: 4 puntos de recarga VE ($4 \times 7{,}4\ \text{kW}$)** | $4 \times$ monofásicos $230\ \text{V}$ | $29{,}60\ \text{kW}$ | $0{,}98$ | Sin gestión dinámica de carga (SPL): $F_d \cdot F_s = 1{,}00$ *(verificar normativa VE vigente)* | **Error crítico:** 3 cargadores ($22{,}2\ \text{kW}$) en $L_1$, 1 ($7{,}4\ \text{kW}$) en $L_2$ y $0\ \text{kW}$ en $L_3$ |
| **5. `SC-ESP`: Rack servidores (SAI) + Ascensor** | Mixto ($4{,}4\ \text{kW}$ SAI equilibrado + $8{,}0\ \text{kW}$ ascensor $3\text{F}$) | $12{,}40\ \text{kW}$ | $0{,}85$ | Coeficiente combinado ilustrativo $0{,}85$ | Carga equilibrada entre $L_1, L_2$ y $L_3$ |

#### Preguntas de análisis
1. Calcula la potencia activa demandada ($P_{\text{dem}}$), potencia reactiva demandada ($Q_{\text{dem}}$) y potencia aparente total ($S_{\text{dem}}$) del edificio antes y después de aplicar el **$15\ \%$ de reserva futura** sobre la demanda total. Compara el resultado frente a los $180\ \text{kW}$ del borrador inicial.
2. Cuantifica el reparto real de potencia activa demandada por fases ($L_1, L_2, L_3$) en la situación actual con los cargadores VE mal conectados y calcula el porcentaje de desequilibrio máximo respecto a la media de fase.
3. Propón dos soluciones técnicas para corregir el desequilibrio de los puntos de recarga VE (manteniendo cargadores monofásicos vs. reconversión a puntos trifásicos / gestión dinámica de carga SPL) y calcula el nuevo porcentaje de desequilibrio.
4. Determina la intensidad de cálculo en cabecera ($I_B$) con la solución equilibrada incluyendo el $15\ \%$ de reserva, e indica qué comprobaciones reglamentarias obligatorias deben validarse antes de cerrar el cuadro de cargas.

#### Tarea a realizar
En equipos de 3–4 personas (30 minutos de trabajo + 15 minutos de puesta en común), elaborad el **Cuadro de Cargas Corregido y Nota Técnica de *TecnoValle*** que incluya:
1. Tabla verificada con $P_{\text{inst}}$, $P_{\text{dem}}$, $Q_{\text{dem}}$, $S_{\text{dem}}$ y $\cos\varphi_{\text{global}}$ del `CGMP` (con y sin reserva del $15\ \%$).
2. Diagnóstico numérico del desequilibrio actual en $L_1, L_2, L_3$ y propuesta cuantificada de rebalanceo (desglosando kW por fase).
3. Intensidad de diseño de cabecera ($I_B$) antes y después de la corrección, explicando el impacto en la selección del interruptor general y la acometida.
4. Lista de 4 verificaciones normativas y de BIM obligatorias (p. ej., mínimos por $\text{m}^2$ de oficinas/garaje, instrucción de recarga VE vigente en el país y sincronización con *Panel Schedules* de Revit MEP).

#### Posibles soluciones o criterios de análisis
Un análisis completo debe verificar exactamente los siguientes cálculos:
- **Potencias demandadas por bloque (sin reserva):**
  1. `SC-ALUM`: $P_1 = 18{,}00 \times 0{,}95 = 17{,}10\ \text{kW}$; $\cos\varphi_1 = 0{,}95 \implies Q_1 = 17{,}10 \cdot \tan(\arccos 0{,}95) \approx 5{,}62\ \text{kvar}$.
  2. `SC-TOM`: $P_2 = 48{,}00 \times 0{,}35 = 16{,}80\ \text{kW}$; $\cos\varphi_2 = 0{,}90 \implies Q_2 = 16{,}80 \cdot \tan(\arccos 0{,}90) \approx 8{,}14\ \text{kvar}$.
  3. `SC-HVAC`: $P_3 = 42{,}00 \times 0{,}81 = 34{,}02\ \text{kW}$; $\cos\varphi_3 = 0{,}88 \implies Q_3 = 34{,}02 \cdot \tan(\arccos 0{,}88) \approx 18{,}36\ \text{kvar}$.
  4. `SC-GAR-VE`: $P_4 = 29{,}60 \times 1{,}00 = 29{,}60\ \text{kW}$; $\cos\varphi_4 = 0{,}98 \implies Q_4 = 29{,}60 \cdot \tan(\arccos 0{,}98) \approx 6{,}01\ \text{kvar}$.
  5. `SC-ESP`: $P_5 = 12{,}40 \times 0{,}85 = 10{,}54\ \text{kW}$; $\cos\varphi_5 = 0{,}85 \implies Q_5 = 10{,}54 \cdot \tan(\arccos 0{,}85) \approx 6{,}53\ \text{kvar}$.
- **Totales del `CGMP`:**
  - $P_{\text{dem,tot}} = 17{,}10 + 16{,}80 + 34{,}02 + 29{,}60 + 10{,}54 = 108{,}06\ \text{kW}$ (frente a $150{,}00\ \text{kW}$ instalados).
  - $Q_{\text{dem,tot}} = 5{,}62 + 8{,}14 + 18{,}36 + 6{,}01 + 6{,}53 = 44{,}66\ \text{kvar}$.
  - $S_{\text{dem,tot}} = \sqrt{108{,}06^2 + 44{,}66^2} \approx 116{,}92\ \text{kVA}$ ($\cos\varphi_{\text{global}} \approx 0{,}924$).
  - **Con $15\ \%$ de reserva futura ($\times 1{,}15$):** $P_{\text{diseño}} = 124{,}27\ \text{kW}$, $Q_{\text{diseño}} = 51{,}36\ \text{kvar}$, $S_{\text{diseño}} = 134{,}46\ \text{kVA}$ (muy por debajo de los $180\ \text{kW}$ del borrador erróneo, reduciendo significativamente el coste de acometida e interruptor general, siempre que se confirme frente a los mínimos por $\text{m}^2$ del código local).
- **Diagnóstico de desequilibrio VE (sin reserva, repartiendo bloques equilibrados en $3$ partes):**
  - Bloques 1, 2, 3 y 5 equilibrados suman $17{,}10 + 16{,}80 + 34{,}02 + 10{,}54 = 78{,}46\ \text{kW}$, es decir, $26{,}15\ \text{kW}$ por fase.
  - Con la conexión inicial errónea de VE: $L_1 = 26{,}15 + 22{,}20 = 48{,}35\ \text{kW}$ ($210{,}2\ \text{A}$ activos a $230\ \text{V}$ en $L_1$); $L_2 = 26{,}15 + 7{,}40 = 33{,}55\ \text{kW}$; $L_3 = 26{,}15 + 0 = 26{,}15\ \text{kW}$.
  - Promedio por fase = $108{,}06 / 3 = 36{,}02\ \text{kW}$. Desviación máxima = $\frac{48{,}35 - 36{,}02}{36{,}02} \times 100 = 34{,}23\ \%$ (obligaría a dimensionar toda la cabecera para la fase $L_1$ como si consumiera $3 \times 48{,}35 = 145\ \text{kW}$!).
- **Soluciones de rebalanceo VE:**
  - *Opción A (reparto monofásico optimizado):* 2 cargadores en $L_1$? No, con 4 cargadores monofásicos idénticos ($7{,}4\ \text{kW}$) el reparto más parejo es $2$ en $L_1$ ($14{,}8\ \text{kW}$), $1$ en $L_2$ ($7{,}4\ \text{kW}$) y $1$ en $L_3$ ($7{,}4\ \text{kW}$): $L_1 = 40{,}95\ \text{kW}$, $L_2 = 33{,}55\ \text{kW}$, $L_3 = 33{,}55\ \text{kW}$ $\implies$ desviación del $13{,}7\ \%$ (mejor, aunque sigue habiendo asimetría).
  - *Opción B (recomendada — cargadores trifásicos de $7{,}4\text{–}11\ \text{kW}$ o sistema de gestión dinámica de carga SPL):* si los 4 puntos se alimentan en trifásico equilibrado ($29{,}60\ \text{kW} / 3 = 9{,}87\ \text{kW}$ por fase), cada fase queda exactamente en $36{,}02\ \text{kW}$ ($0\ \%$ desequilibrio) y, además, si la normativa de recarga VE del país admite un **sistema de protección de línea (SPL)** con gestión dinámica de carga, puede reducirse aún más la simultaneidad previa verificación legal.
- **Intensidad de diseño en cabecera equilibrada (con $15\ \%$ reserva):**
  - $I_{B,\text{diseño}} = \frac{134\,460\ \text{VA}}{\sqrt{3} \times 400\ \text{V}} \approx 194{,}08\ \text{A}$ (frente a los más de $260\text{–}280\ \text{A}$ que exigirían el borrador bruto o la fase $L_1$ desequilibrada).
- **Verificaciones obligatorias:** comprobar mínimos por $\text{m}^2$ de oficinas/local comercial y dotación obligatoria de VE en la legislación del país (p. ej. ITC-BT-10 e ITC-BT-52 en España o Art. 220/625 en NEC como referentes ilustrativos), validar con la distribuidora la potencia máxima en baja tensión y sincronizar manualmente o mediante parámetros verificados los *Panel Schedules* en Revit MEP.

#### Preguntas de reflexión final
- ¿Qué impacto económico y técnico tiene detectar en la fase de diseño de cuadro de cargas que unos cargadores monofásicos estaban desequilibrando un edificio completo en $L_1$?
- ¿Qué riesgo existe al dejar que un modelo Revit MEP calcule el alimentador del `CGMP` sin haber revisado antes los *Demand Factors* de la plantilla y los rendimientos de motores?

---

## 7. Evaluación

### Evaluación diagnóstica
- **Instrumento:** Sondeo de estimación de demanda de la Actividad 1 (comparando intuición frente a curva de carga medida) y 3 preguntas rápidas de repaso de cálculo de $I_B$ desde $P, \cos\varphi, \eta$.
- **Propósito:** Identificar concepciones erróneas sobre simultaneidad antes de abordar las fórmulas de cuadro de cargas. Sin nota numérica.

### Evaluación formativa
- **Seguimiento en vivo** de las correcciones de fórmulas en la Actividad 2 (detección de errores de $\eta$, simultaneidad inadecuada y suma $P/Q$) y de los cálculos grupales del caso *TecnoValle*.
- **Lista de verificación de plantilla** durante la Actividad 3 comprobando el uso de fórmulas dinámicas y columnas de hipótesis.

### Evaluación sumativa
Se integra mediante dos evidencias:
1. **Cuestionario breve online (6 preguntas de cálculo y criterio de cargas, 10 minutos, 40 % del tema):** evalúa potencia instalada vs. demandada, factores $F_d/F_s/K_{\text{res}}$, cálculo con $\eta$, balanceo de fases y límites de Revit MEP/IA.
2. **Entregable combinado: Nota Técnica y Cuadro de Cargas de *TecnoValle* + Plantilla propia de Cuadro de Cargas (Actividad 3) (60 % del tema)**, evaluado con la rúbrica siguiente.

### Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
|---|---|---|---|---|
| **1. Inventario y cálculo de potencias ($P, Q, S, \eta$)** | Suma potencias nominales omitiendo $\eta$ y $\cos\varphi$, o suma $\text{kVA}$ sin descomponer en $P$ y $Q$. | Aplica $\cos\varphi$ correctamente, pero comete fallos puntuales con $\eta$ de motores o pérdidas de equipos auxiliares. | Calcula con exactitud $P_{\text{abs}}, P_{\text{dem}}, Q_{\text{dem}}, S_{\text{dem}}$ e $I_B$ en monofásico y trifásico usando unidades SI coherentes. | Justifica cada hipótesis física (motores, luminarias DIALux, cargas continuas) e integra el efecto de la reserva sin errores matemáticos. |
| **2. Aplicación de demanda, simultaneidad y reserva** | Suma cargas brutas al $100\ \%$ o aplica coeficientes reductores arbitrarios sin justificación técnica ni normativa. | Diferencia $F_d$ y $F_s$, pero olvida la reserva de ampliación o aplica simultaneidad incorrecta a cargas continuas. | Aplica coherentemente $F_d$, $F_s$ y reserva, señalando explícitamente qué mínimos reglamentarios deben comprobarse en el código vigente. | Compara escenarios con y sin gestión dinámica/simultaneidad documentando impacto técnico y económico con trazabilidad normativa completa. |
| **3. Balanceo de fases en cuadros trifásicos** | Deja cargas monofásicas concentradas en una sola fase o calcula $I_B$ ignorando un desequilibrio severo. | Detecta el desequilibrio, pero comete errores al cuantificar la desviación porcentual o no propone una solución práctica viable. | Calcula el porcentaje de desequilibrio y rebalancea los circuitos monofásicos reduciendo la desviación dentro de límites operativos razonables ($\le 10\text{–}15\ \%$). | Evalúa soluciones alternativas (reparto monofásico vs. cargas trifásicas/SPL) calculando con rigor el impacto en neutro y calibre de cabecera. |
| **4. Trazabilidad de plantilla, BIM e IA** | Entrega cifras escritas a mano sin fórmulas ni hipótesis, o acepta cálculos/tablas de IA y Revit sin verificación. | Incluye algunas fórmulas en Excel, pero faltan referencias normativas o la justificación de las columnas calculadas es incompleta. | Construye una plantilla auditable con fórmulas automáticas, hipótesis documentadas y control explícito de valores BIM e IA. | Presenta una hoja profesional escalable al Tema 5 (conductores) y Bloque 3 (Revit MEP), con validación cruzada frente a posibles alucinaciones de IA. |

### Actividad de autoevaluación
Al cierre de la sesión, el alumnado responde brevemente por escrito en su aula virtual:
1. *¿Qué diferencia entre potencia instalada, potencia demandada y potencia de diseño con reserva puedo justificar ahora ante un cliente o promotor?*
2. *Al revisar un cuadro trifásico en Excel o en un Panel Schedule de Revit MEP, ¿qué indicador numérico revisaré primero para comprobar que las fases están equilibradas?*
3. *¿Qué ajuste técnico necesito verificar en el reglamento de mi país antes de dar por definitivos los factores de demanda de mi plantilla de la Actividad 3?*

---

## 8. Materiales y recursos

### Guion de diapositivas

| Diapositiva | Título y objetivo visual | Contenido clave y notas del formador |
|---|---|---|
| **Slide 1** | **Portada y conexión con el Bloque 1** | Tema 4 (Bloque 1 · 4/11), enlace con magnitudes (T1), sistemas (T2) y matriz normativa (T3); 5 objetivos Bloom y aviso de verificación legal vigente. |
| **Slide 2** | **Actividad 1: Potencia instalada vs. curva real** | Comparativa gráfica entre potencia de placas ($215\ \text{kW}$) y demanda medida en un edificio de oficinas real. |
| **Slide 3** | **Anatomía del inventario de cargas** | Categorización en 4 bloques (alumbrado/DIALux, tomas, HVAC/motores con $\eta$, cargas especiales) y diferencia carga continua vs. intermitente. |
| **Slide 4** | **Factores $F_d$, $F_s$ y reserva futura** | Esquema multiplicativo controlado + ejemplo numérico `SC-P2` ($41{,}40\ \text{kW} \to 20{,}87\ \text{kW}$) y advertencia sobre mínimos legales por $\text{m}^2$. |
| **Slide 5** | **Equilibrado de fases en cuadros trifásicos** | Gráfico de barras $L_1, L_2, L_3$ antes y después del rebalanceo; impacto en corriente de neutro e intensidad de cabecera. |
| **Slide 6** | **Anatomía de un cuadro de cargas trazable + Revit MEP / IA** | Estructura de columnas auditables en hoja de cálculo, riesgos de *Demand Factors* por defecto en Revit MEP y control de errores en tablas generadas por IA. |
| **Slide 7** | **Caso práctico: *Edificio TecnoValle*** | Tabla resumen de los 5 subcuadros ($150\ \text{kW}$ instalados), esquema del desequilibrio VE en $L_1$ y tareas del equipo. |
| **Slide 8** | **Síntesis y puente al Tema 5** | 5 reglas clave de cálculo de cargas, acceso al test sumativo y adelanto de cómo las intensidades $I_B$ obtenidas hoy dimensionarán los cables en el Tema 5. |

### Ficha de trabajo
Documento descargable (2 páginas) con:
1. **Formulario de carga y balanceo:** ecuaciones de potencia absorbida con rendimiento $\eta$, suma vectorial de $P$ y $Q$, fórmula de porcentaje de desequilibrio e intensidad $I_B$.
2. **Hoja guía de la Actividad 2:** tabla de comprobación para depurar el cuadro de cargas contaminado con errores de IA.
3. **Espacio de cálculo del caso *TecnoValle*:** plantilla estructurada para desglosar los 5 subcuadros por fases $L_1, L_2, L_3$.

### Plantilla técnica práctica
**Cuadro de Cargas Trazable y Balanceado (v1.0)** en hoja de cálculo:

| ID Circ. | Descripción | Subcuadro | Sist. | $U$ [V] | $P_{\text{inst}}$ [kW] | $\eta$ | $\cos\varphi$ | $F_d \cdot F_s$ | $P_{\text{dem}}$ [kW] | $Q_{\text{dem}}$ [kvar] | $S_{\text{dem}}$ [kVA] | Fase ($L_1/L_2/L_3/3\text{F}$) | $I_B$ [A] | Hipótesis / Norma a verificar |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| C-01 | Alumbrado Zona A | `SC-PB` | 1F | 230 | 1,80 | 1,00 | 0,95 | 0,95 | `=(F2/G2)*I2` | `=J2*TAN(ACOS(H2))` | `=SQRT(J2^2+K2^2)` | L1 | `=(L2*1000)/E2` | DIALux + drivers; carga continua |
| C-02 | Bomba HVAC | `SC-HVAC` | 3F | 400 | 5,50 *(eje)* | 0,88 | 0,85 | 1,00 | `=(F3/G3)*I3` | `=J3*TAN(ACOS(H3))` | `=SQRT(J3^2+K3^2)` | 3F | `=(L3*1000)/(SQRT(3)*E3)` | Motor continuo; verificar coef. arranque |

### Lecturas y recursos recomendados
> **Advertencia obligatoria de validación:** Las referencias normativas y guías técnicas mencionadas son ilustrativas. Antes de aplicarlas en un proyecto real o actividad docente, debe comprobarse su vigencia exacta, país aplicable, posibles modificaciones y edición oficial en las fuentes competentes.

- **Reglamentos de previsión de cargas ilustrativos** — Por ejemplo, **ITC-BT-10 / ITC-BT-52 del REBT (España)** para previsión de cargas y recarga VE, o **Artículo 220 de NFPA 70 (NEC)** para cálculo de circuitos derivados y alimentadores (*verificar siempre código, jurisdicción y edición vigente*).
- **Norma internacional IEC 60364-1 / IEC 60364-3** — Criterios generales de evaluación de las características generales, factor de demanda y potencia máxima demandada (*validar edición vigente*).
- **Documentación oficial de Autodesk Revit MEP sobre *Electrical Load Calculations* y *Panel Schedules*** — Para distinguir qué calcula internamente el software mediante clasificaciones de carga y qué exige validación externa por el proyectista (*verificar versión utilizada*).
- **Guías técnicas de eficiencia energética y factor de potencia** publicadas por agencias nacionales de energía o fabricantes de aparamenta eléctrica (*validar fecha y vigencia*).

### Glosario de términos clave

| Término | Definición |
|---|---|
| **Balanceo de fases** | Distribución equilibrada de los circuitos monofásicos entre las tres fases ($L_1, L_2, L_3$) de un cuadro trifásico para minimizar la corriente por el neutro y evitar sobrecargas asimétricas. |
| **Carga continua** | Carga cuya corriente máxima prevista se mantiene de forma sostenida durante un periodo prolongado según el criterio del código eléctrico aplicable. |
| **Cuadro de cargas** | Tabla técnica verificable que organiza cada circuito de un tablero con su potencia instalada, coeficientes de demanda, reparto por fases e intensidad de diseño. |
| **Factor de demanda ($F_d$)** | Relación entre la demanda máxima real de un circuito o grupo de cargas y la potencia total instalada conectada a dicho circuito o grupo. |
| **Factor de reserva ($K_{\text{res}}$)** | Margen adicional aplicado sobre la potencia demandada calculada en cuadros generales y alimentadores para absorber ampliaciones futuras previstas. |
| **Factor de simultaneidad ($F_s$)** | Coeficiente menor o igual que $1$ que considera la probabilidad de que distintos circuitos o receptores operen simultáneamente en su demanda máxima. |
| **Intensidad de cálculo ($I_B$)** | Corriente de diseño en régimen normal resultante de la potencia aparente demandada y la tensión del circuito, base para dimensionar cables y protecciones. |
| **Potencia instalada ($P_{\text{inst}}$)** | Suma aritmética de las potencias nominales de todos los receptores o circuitos declarados en una instalación antes de aplicar factores de demanda o simultaneidad. |

---

## 9. Adaptaciones

### Sesión presencial
- **Actividad 1 visual:** proyectar la curva de carga real de un edificio anonimizado y recoger en tarjetas rápidas las estimaciones individuales antes de desvelar el pico real medido.
- **Taller de hoja de cálculo en sala:** disponer equipos informáticos o portátiles en mesas de 2–3 personas para programar juntos las fórmulas `SUMAR.SI` y validar al instante las sumas vectoriales $P$ y $Q$.
- **Revisión en pizarra:** resolver en pizarra el rebalanceo de fases de *TecnoValle* probando visualmente cómo cambia la corriente en $L_1$ al pasar de 3 cargadores en una fase a carga trifásica equilibrada.

### Sesión online síncrona
- **Compartición de pantalla paso a paso:** mostrar durante 5 minutos cómo construir la plantilla Excel/Google Sheets bloqueando las celdas de entrada frente a las celdas formuladas para evitar errores accidentales.
- **Salas virtuales (*breakout rooms*):** equipos de 3–4 personas trabajan sobre una hoja de cálculo compartida del caso *TecnoValle*, permitiendo al formador auditar en tiempo real las fórmulas de cada sala sin interrumpir el debate.
- **Pausa obligatoria:** respetar el descanso de 15 minutos antes de iniciar el análisis completo del caso práctico.

### Sesión asíncrona
- **Vídeos paso a paso:** 4 píldoras teóricas de 10–12 minutos más un tutorial grabado de 12 minutos mostrando la construcción íntegra de las fórmulas de la Plantilla de Cuadro de Cargas.
- **Entrega verificable:** cada estudiante descarga el libro del caso *TecnoValle* con fórmulas rotas, lo repara y sube el archivo `.xlsx` funcional al aula virtual junto con su propia plantilla de la Actividad 3.
- **Revisión cruzada:** mediante rúbrica simplificada, cada alumno comprueba que la hoja subida por un compañero no contiene cifras «escritas a mano» en las columnas de $I_B$ o desequilibrio.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** integra directamente las magnitudes SI y el triángulo de potencias (Tema 1), la jerarquía de cuadros $1\text{F}/3\text{F}$ (Tema 2) y las exigencias de jurisdicción y edición vigente (Tema 3) en un único documento operativo auditable.
- **Competencias que desarrolla:** inventario eléctrico riguroso, estimación realista y normativamente verificable de demanda energética, equilibrio de sistemas trifásicos, construcción de hojas de cálculo trazables y auditoría crítica de cálculos en BIM o IA.
- **Conexión dentro del plan de 6 módulos / 50 temas:**
  - **Tema anterior:** **Tema 3. Normas y reglamentos aplicables** (Bloque 1, Tema 3 de 11), cuya Matriz de Cumplimiento Normativo define los códigos y mínimos aplicables a los factores de demanda de hoy.
  - **Tema posterior:** **Tema 5. Dimensionamiento de conductores** (Bloque 1, Tema 5 de 11), donde las intensidades de diseño ($I_B$) y longitudes de cada circuito calculadas en el cuadro de cargas se convertirán en el dato de entrada imprescindible para elegir material, aislamiento, método de tendido y sección comercial de cable.
- **Evidencia de aprendizaje:**
  1. **Nota Técnica y Cuadro de Cargas corregido de *TecnoValle*** con balanceo de fases e intensidad de cabecera recalculada.
  2. **Plantilla propia de Cuadro de Cargas Trazable (Actividad 3)** en hoja de cálculo con fórmulas activas y notas de verificación normativa.
  3. **Cuestionario sumativo final completado** (6 preguntas).

---

## Siguientes pasos para el formador

1. **Verificar archivos editables antes de clase:** comprobar que la hoja de cálculo con errores sembrados de la Actividad 2 (`actividad-02-cuadro-errores.xlsx`) y la plantilla limpia de la Actividad 3 funcionan sin errores de idioma en funciones (`SUMAR.SI` / `SUMIF`, separador decimal coma vs. punto).
2. **Preparar ejemplos de coeficientes según la cohorte:** si el grupo trabaja mayoritariamente en un país concreto, tener localizada la referencia oficial donde el alumnado debe contrastar los coeficientes mínimos por $\text{m}^2$ y recarga VE.
3. **Revisar la conexión con el Tema 5:** anunciar al alumnado que guarde su Cuadro de Cargas completo porque en la próxima sesión calcularán la sección de los cables de cada uno de esos circuitos.
4. **Insistir en la disciplina de fórmulas vivas:** verificar en las entregas de la Actividad 3 que nadie introduce valores fijos manuales en las columnas de potencia aparente o intensidad.
5. **Reforzar los límites de Revit MEP e IA:** recordar al cierre que ni los *Panel Schedules* automáticos de BIM ni las tablas generadas por ChatGPT/Claude constituyen justificación normativa sin revisión de un técnico competente.
