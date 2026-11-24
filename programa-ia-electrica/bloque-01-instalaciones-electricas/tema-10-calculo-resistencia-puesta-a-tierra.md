# Tema 10. Cálculo de resistencia de puesta a tierra

> **Aviso técnico y normativo:** Esta guía forma parte del programa especializado **IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas** (no constituye un MBA ni habilita legalmente por sí sola para firmar proyectos o dictámenes oficiales). Las fórmulas orientativas de cálculo de electrodos, los factores de acoplamiento y los umbrales máximos de resistencia aquí presentados tienen fines formativos e ilustrativos y **deben verificarse siempre frente a las normas técnicas, reglamentos nacionales vigentes (p. ej., REBT, IEC, IEEE 80/81 o normativa local) y requisitos de la autoridad competente o compañía eléctrica aplicable**.

---

## 1. Ficha del tema

| Campo | Detalle |
| :--- | :--- |
| **Título del tema** | Tema 10. Cálculo de resistencia de puesta a tierra |
| **Bloque y posición dentro del programa** | Bloque 1: Instalaciones eléctricas — Tema 10 de 11 (Tema 10 de 50 del programa) |
| **Programa formativo** | IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas (6 módulos / 50 temas) |
| **Modalidad** | Online / Híbrida interactiva |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Haber completado los Temas 1 a 9 del Bloque 1 (especialmente protecciones diferenciales del Tema 6 y arquitectura, componentes y materiales de puesta a tierra del Tema 9). |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado interpretará mediciones de resistividad del terreno por el método de Wenner, calculará de forma preliminar la resistencia de puesta a tierra para electrodos simples, arreglos en paralelo y mallas básicas considerando el acoplamiento, y diferenciará rigurosamente el cálculo teórico de diseño respecto a la comprobación instrumental obligatoria en obra con telurómetro (método de caída de potencial / 62 %). |

---

## 2. Objetivos de aprendizaje

Al completar esta sesión de 4 horas, el alumnado será capaz de:

1. **Explicar** los factores físicos y estacionales que gobiernan la resistividad eléctrica del terreno ($\rho$) e interpretar perfiles estratificados obtenidos mediante el método de los cuatro electrodos de Wenner. *(Nivel de Bloom: Comprender)*
2. **Calcular** la resistencia de difusión teórica orientativa de una pica vertical simple, valorando matemáticamente por qué la profundidad del electrodo influye mucho más que su diámetro. *(Nivel de Bloom: Aplicar)*
3. **Analizar** la reducción real de resistencia al disponer múltiples electrodos en paralelo o mallas preliminares, incorporando el efecto de acoplamiento mutuo entre zonas de influencia y la distancia mínima recomendada. *(Nivel de Bloom: Analizar)*
4. **Diferenciar** de manera crítica el cálculo teórico de gabinete frente a la verificación real en campo con telurómetro mediante el método de caída de potencial (regla del 62 %) y las limitaciones de las pinzas de tierra. *(Nivel de Bloom: Evaluar)*
5. **Formular** una propuesta de redimensionamiento de toma de tierra y un procedimiento de comprobación en obra —auditando cálculos asistidos por IA— ante un terreno desfavorable o discrepancias de medida. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Resistividad eléctrica del terreno ($\rho$): factores físicos, variabilidad estacional y medición por método Wenner

#### Explicación breve y clara
El parámetro que domina cualquier cálculo de puesta a tierra es la **resistividad aparente del terreno ($\rho$)**, medida en ohmio-metro ($\Omega\cdot\text{m}$). A diferencia de un cable de cobre de resistividad constante, el suelo es un medio heterogéneo cuya conductividad depende principalmente de la **humedad**, las **sales ionizadas disueltas**, la **temperatura** (por debajo de $0\,^\circ\text{C}$ el agua se congela y $\rho$ se dispara drásticamente), la **compactación** y el **tipo geológico** (desde $10\text{–}50\text{ }\Omega\cdot\text{m}$ en arcillas húmedas hasta $> 1\,000\text{ }\Omega\cdot\text{m}$ en roca caliza o grava seca). Por ello, la resistencia medida en invierno lluvioso puede multiplicarse por 2 o 4 en verano seco.

En ingeniería seria no se «adivina» $\rho$ de memoria: se mide en campo mediante el **método de los 4 electrodos de Wenner** (con referencia orientativa en normas tipo **IEEE 81**). Se clavan cuatro picas auxiliares en línea recta equidistantes una separación $a$ (a profundidad pequeña $b \ll a$), se inyecta corriente entre las exteriores ($C_1, C_2$) y se mide la caída de potencial entre las interiores ($P_1, P_2$). Si $b \ll a$ (típicamente $b \le a/10$), la resistividad aparente promedio hasta una profundidad aproximada de orden $a$ viene dada por:
$$\rho_a \approx 2\pi \cdot a \cdot R_{\text{medida}}$$
Variando el espaciamiento $a$ (por ejemplo, $1\text{ m}, 2\text{ m}, 4\text{ m}, 8\text{ m}, 16\text{ m}$) se detecta si el terreno tiene varias capas (por ejemplo, corteza superficial seca muy resistiva sobre un estrato arcilloso húmedo conductor en profundidad).

#### Conceptos clave
- **Resistividad aparente ($\rho_a$):** valor equivalente en $\Omega\cdot\text{m}$ medido para un espaciamiento concreto $a$ que refleja el comportamiento integrado del suelo hasta una profundidad aproximada equivalente a $a$.
- **Variabilidad estacional:** oscilación anual de $\rho$ por lluvias, sequía estival o heladas; el diseño debe considerar la condición desfavorable previsible.
- **Suelo estratificado (bicapa/multicapa):** presencia de capas horizontales de distinta resistividad (p. ej. relleno pedregoso superficial sobre arcilla natural profunda) que decide si conviene pica profunda o malla superficial.
- **Regla geométrica de Wenner:** cuatro picas alineadas y equidistantes a distancia $a$; cuando la profundidad de hincado $b$ no es despreciable frente a $a$, debe usarse la fórmula exacta completa con $b$ (referenciada en IEEE 81).

#### Definiciones necesarias
- **Resistividad eléctrica ($\rho$):** resistencia eléctrica que ofrece un cubo de terreno de $1\text{ m}$ de arista entre dos caras opuestas, expresada en $\Omega\cdot\text{m}$.
- **Método de Wenner:** ensayo geoeléctrico normalizado de cuatro picas equidistantes que permite perfilar la resistividad aparente del subsuelo a distintas profundidades sin excavar.
- **Capa superficial vs. capa profunda:** estratificación del terreno que determina si una pica corta queda atrapada en suelo seco o si una pica acoplada profunda alcanza estratos húmedos de baja resistividad.

#### Ejemplo práctico realista
Antes de construir un edificio técnico, un técnico realiza dos medidas Wenner con un telurómetro de 4 bornes usando picas hincadas $b = 0{,}15\text{ m}$ ($b \ll a$):
- Con separación $a = 2\text{ m}$, el equipo lee $R = 28{,}0\text{ }\Omega \Rightarrow \rho_a(2\text{ m}) = 2\pi \cdot 2 \cdot 28{,}0 = 351{,}9\text{ }\Omega\cdot\text{m}$.
- Con separación $a = 6\text{ m}$, el equipo lee $R = 2{,}52\text{ }\Omega \Rightarrow \rho_a(6\text{ m}) = 2\pi \cdot 6 \cdot 2{,}52 = 95{,}0\text{ }\Omega\cdot\text{m}$.
**Interpretación técnica:** los primeros $2\text{ m}$ son un relleno muy seco/pedregoso ($\sim 352\text{ }\Omega\cdot\text{m}$), pero a $5\text{–}6\text{ m}$ existe un estrato arcilloso mucho más conductor ($\sim 95\text{ }\Omega\cdot\text{m}$). Si se proyectaran picas cortas de $1{,}5\text{ m}$ quedarían en el estrato malo; si se hincan picas acopladas de $6\text{ m}$, se reduce drásticamente la resistencia final. *(Nota: verificar el procedimiento exacto de ensayo de campo y factores estacionales en normas tipo IEEE 81 y reglamentos nacionales vigentes).*

#### Errores frecuentes
- Tomar un valor genérico de tabla («ponemos $\rho = 100\text{ }\Omega\cdot\text{m}$») sin medición real en parcelas con rellenos heterogéneos, roca o suelo arenoso.
- Medir con Wenner paralelo y pegado a tuberías metálicas enterradas, vías férreas o cercas metálicas, falseando la lectura hacia valores artificialmente bajos.
- Olvidar corregir $\rho_a$ con la fórmula completa si se clavan picas de ensayo profundas ($b$ comparable a $a$, por ejemplo $b=0{,}5\text{ m}$ con $a=1\text{ m}$).
- Medir justo después de una tormenta fuerte sin aplicar ningún margen de seguridad para la época seca de verano.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué la resistividad de un mismo terreno varía a lo largo del año y qué papel juegan humedad, sales y temperatura?
2. ¿Cómo permite el método de Wenner descubrir si conviene usar picas profundas acopladas frente a una malla superficial?
3. ¿Qué interferencias enterradas próximas pueden invalidar una campaña de medición de resistividad?

---

### 3.2. Fórmulas orientativas de diseño para electrodo simple (pica vertical y conductor horizontal)

#### Explicación breve y clara
Conocida la resistividad representativa $\rho$ del suelo, el diseño preliminar estima la resistencia teórica de difusión de un electrodo elemental mediante fórmulas analíticas clásicas (habitualmente recogidas de forma orientativa en referencias como **Dwight, IEEE 80 o guías de aplicación de IEC/REBT**, cuya aplicabilidad exacta debe comprobarse en cada proyecto). Para una **pica o varilla vertical única** de longitud $L$ ($\text{m}$) y radio $r = d/2$ ($\text{m}$) en suelo homogéneo de resistividad $\rho$ ($\Omega\cdot\text{m}$):
$$R_1 = \frac{\rho}{2\pi L} \left( \ln\left(\frac{4L}{r}\right) - 1 \right)$$
*(Nota: según la formulación bibliográfica elegida —por ejemplo si la parte superior está a ras de superficie vs. enterrada a profundidad $h$—, pueden aparecer variantes como $\ln(2L/r)$ o términos adicionales; conviene siempre verificar la hipótesis de la fórmula).*

Esta expresión revela una ley física clave: la longitud $L$ aparece en el denominador **fuera del logaritmo**, mientras el diámetro ($2r$) solo aparece **dentro del logaritmo natural**. En consecuencia, **duplicar la longitud de una pica reduce la resistencia casi a la mitad ($\sim 44\,\%$), mientras que duplicar su grosor/diámetro apenas la reduce un $10\,\%$–$12\,\%$**. Para instalaciones con malla o anillo perimetral básico de área $A$ ($\text{m}^2$) y longitud total enterrada $L_T$ ($\text{m}$), una aproximación preliminar clásica (tipo Laurent-Niemann / IEEE 80 simplificada) es:
$$R_{\text{malla}} \approx \frac{\rho}{4 r_{\text{eq}}} + \frac{\rho}{L_T}, \quad \text{donde } r_{\text{eq}} = \sqrt{\frac{A}{\pi}}$$

#### Conceptos clave
- **Sensibilidad a la longitud ($L$):** aumentar la profundidad del electrodo es mucho más efectivo que engrosar el diámetro de la pica (salvo requisitos mecánicos de hinca o corrosión).
- **Resistencia de difusión ($R_1$):** resistencia eléctrica que opone el terreno circundante al paso de la corriente desde el electrodo hacia la «tierra lejana» (zona de potencial nulo).
- **Radio equivalente de malla ($r_{\text{eq}}$):** radio de un disco circular de área igual a la ocupada por un anillo o malla cuadrangular, utilizado para estimar su resistencia en fase preliminar.
- **Límites del modelo homogéneo:** las fórmulas cerradas asumen suelo uniforme e infinito; en suelos de dos capas deben emplearse métodos multicapa o software específico si se trata de media/alta tensión.

#### Definiciones necesarias
- **Electrodo vertical (pica/varilla):** elemento conductor rígido hincado verticalmente (simple o acoplado mediante manguitos roscados) para alcanzar estratos profundos húmedos.
- **Electrodo horizontal (pletina/conductor enterrado):** conductor desnudo enterrado en zanja (habitualmente a $0{,}5\text{–}0{,}8\text{ m}$ de profundidad o en fondo de cimentación) en anillo cerrado o radial.
- **Área de cobertura de malla ($A$):** superficie total delimitada por el perímetro del anillo o retícula de tierra, factor dominante en el primer término de la fórmula de malla.

#### Ejemplo práctico realista
Evaluemos el impacto de $L$ frente al diámetro $d$ en un terreno homogéneo de $\rho = 120\text{ }\Omega\cdot\text{m}$:
1. **Caso base:** Pica de $L = 2{,}5\text{ m}$ y diámetro $d = 16\text{ mm}$ ($r = 0{,}008\text{ m}$):
   $$\frac{4L}{r} = \frac{4 \cdot 2{,}5}{0{,}008} = 1\,250 \Rightarrow \ln(1\,250) - 1 = 7{,}131 - 1 = 6{,}131$$
   $$R_1 = \frac{120}{2\pi \cdot 2{,}5} \cdot 6{,}131 = 7{,}639 \cdot 6{,}131 = 46{,}8\text{ }\Omega$$
2. **Duplicando el diámetro** ($d = 32\text{ mm}$, $r = 0{,}016\text{ m}$, manteniendo $L = 2{,}5\text{ m}$):
   $$R_{1,\text{gruesa}} = 7{,}639 \cdot [\ln(625) - 1] = 7{,}639 \cdot 5{,}438 = 41{,}5\text{ }\Omega \quad (\text{baja solo un } 11{,}3\,\%)$$
3. **Duplicando la longitud** (2 picas acopladas en profundidad, $L = 5{,}0\text{ m}$, $d = 16\text{ mm}$):
   $$R_{1,\text{profunda}} = \frac{120}{2\pi \cdot 5{,}0} \cdot [\ln(2\,500) - 1] = 3{,}820 \cdot 6{,}824 = 26{,}1\text{ }\Omega \quad (\text{baja un } 44{,}2\,\%)$$
4. **Comparación con anillo + cruz de $10\text{ m}\times 10\text{ m}$** ($A = 100\text{ m}^2 \Rightarrow r_{\text{eq}} = \sqrt{100/\pi} = 5{,}64\text{ m}$, $L_T = 40 + 20 = 60\text{ m}$):
   $$R_{\text{malla}} \approx \frac{120}{4 \cdot 5{,}64} + \frac{120}{60} = 5{,}32 + 2{,}00 = 7{,}3\text{ }\Omega$$
*(Nota: estas fórmulas son orientativas de diseño preliminar; verificar normativa específica vigente para la instalación real).*

#### Errores frecuentes
- Introducir el diámetro en milímetros ($d = 16$) y la longitud en metros ($L = 2{,}5$) en la misma fórmula sin convertir $r$ a metros ($r = 0{,}008\text{ m}$), obteniendo valores absurdos o negativos del logaritmo.
- Confundir el diámetro $d$ con el radio $r$ dentro de $\ln(4L/r)$.
- Intentar bajar una resistencia de $50\text{ }\Omega$ a $10\text{ }\Omega$ comprando picas más gruesas en lugar de aumentar la longitud/profundidad o el área del anillo.
- Aplicar la fórmula simplificada de malla para afirmar que se cumplen tensiones de paso y contacto en un centro de transformación sin cálculo específico según IEEE 80 / reglamento local.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué duplicar la longitud de una pica vertical reduce la resistencia casi el cuádruple de lo que la reduce duplicar su diámetro?
2. ¿Qué error de unidades suele invalidar con más frecuencia el cálculo manual de la fórmula de Dwight?
3. ¿En qué se diferencia el efecto de aumentar el área $A$ de una malla frente a añadir más metros de conductor dentro de la misma área pequeña?

---

### 3.3. Arreglos de múltiples electrodos en paralelo, factores de acoplamiento y límites en diseño

#### Explicación breve y clara
Cuando una sola pica no alcanza la resistencia objetivo, se instalan **$n$ picas en paralelo** (en línea, en cuadrado o en perímetro). Sin embargo, un error clásico consiste en suponer que 4 picas iguales darán exactamente $R_1 / 4$. Cada pica dispersa corriente en un hemisferio o cilindro de suelo a su alrededor; si dos picas están demasiado cerca, sus **zonas de influencia se solapan** (efecto de **acoplamiento mutuo** o apantallamiento), reduciendo la eficacia de cada pica adicional.

Para cuantificar este fenómeno en diseño preliminar se introduce el **factor de utilización o eficiencia del arreglo ($\eta \le 1$)** (equivalente a considerar los coeficientes de acoplamiento mutuo tipo Tagg / IEEE):
$$R_n = \frac{R_1}{n \cdot \eta}$$
Cuanto mayor es la distancia de separación $s$ entre picas respecto a su longitud $L$, mayor es $\eta$ (acercándose a $1$ cuando $s \gg L$). Como regla práctica de proyecto, las picas deben espaciarse **al menos $s \ge 1\text{ a }2\text{ veces } L$** (idealmente $s \ge 2L$ cuando el terreno disponible lo permite). Si el terreno es muy rocoso y no admite ni profundidad ni separación, se recurre a electrodos horizontales extensos, anillos en cimentación o rellenos mejoradores conductores certificados (bentonita sódica o hormigón/compuesto conductor homologado). Por último, el valor objetivo de $R_A$ depende del esquema y reglamento vigente: aunque teóricamente en un esquema TT con diferencial de $30\text{ mA}$ la fórmula $R_A \cdot I_{\Delta n} \le 50\text{ V}$ daría hasta $1\,666\text{ }\Omega$, las normativas nacionales fijan topes constructivos mucho menores (ilustrativamente entre $10\text{–}37\text{ }\Omega$ o $5\text{–}25\text{ }\Omega$ según uso, pararrayos o centro de transformación — **siempre debe comprobarse el valor máximo exigido en el reglamento aplicable**).

#### Conceptos clave
- **Efecto de acoplamiento mutuo:** interferencia entre los campos de corriente de electrodos próximos que impide obtener la división ideal $R_1 / n$.
- **Factor de utilización ($\eta$):** coeficiente reductor de eficiencia ($\sim 0{,}50\text{–}0{,}90$ según número $n$, geometría en línea/anillo y relación $s/L$, verificable en tablas de Tagg o software de cálculo).
- **Distancia mínima entre picas ($s \ge L$ a $2L$):** separación recomendada para evitar desperdiciar cobre y mano de obra hincando electrodos redundantes muy juntos.
- **Acondicionamiento químico certificado vs. prohibido:** uso de compuestos conductores estables y no corrosivos (bentonita, grafito/cemento conductor) frente a la prohibición de sales comunes corrosivas.

#### Definiciones necesarias
- **Zona de influencia (cono de potencial):** volumen de terreno en torno a un electrodo donde se produce la mayor parte de la caída de tensión cuando circula corriente hacia tierra.
- **Arreglo en paralelo en línea vs. anillo:** disposición geométrica de múltiples electrodos interconectados mediante conductor enterrado cuya eficiencia $\eta$ depende de la simetría y separación entre picas.
- **Resistencia objetivo de diseño ($R_{\text{obj}}$):** valor máximo aceptable de resistencia de puesta a tierra fijado por coordinación con protecciones ($U_L / I_{\Delta n}$), exigencias reglamentarias locales, protección contra el rayo o requisitos de equipos TIC/CT.

#### Ejemplo práctico realista
Partimos de nuestra pica base anterior ($L = 2{,}5\text{ m}$, $d = 16\text{ mm}$, $\rho = 120\text{ }\Omega\cdot\text{m}$, $R_1 = 46{,}8\text{ }\Omega$). El proyectista necesita bajar de $20\text{ }\Omega$ y propone 4 picas en línea:
- **Cálculo ingenuo erróneo:** $R_4 = 46{,}8 / 4 = 11{,}7\text{ }\Omega$.
- **Cálculo con acoplamiento (separación ajustada $s = L = 2{,}5\text{ m}$, factor orientativo de tabla $\eta \approx 0{,}68$ para 4 picas en línea a verificar en referencia Tagg/IEEE):**
  $$R_{4,\text{real}} = \frac{46{,}8}{4 \cdot 0{,}68} = 17{,}2\text{ }\Omega$$
- **Si las hubieran clavado pegadas a $s = 1{,}0\text{ m}$** ($\eta \approx 0{,}50$): $R_4 = \frac{46{,}8}{4 \cdot 0{,}50} = 23{,}4\text{ }\Omega$ (¡no cumple $< 20\text{ }\Omega$!).
- **Si se disponen en cuadrado o espaciadas a $s = 5{,}0\text{ m} = 2L$** ($\eta \approx 0{,}82$) **y unidas por cable desnudo en zanja**, la contribución combinada de las 4 picas más el anillo enterrado reduce aún más la resistencia total por debajo de $12\text{–}14\text{ }\Omega$.

#### Errores frecuentes
- Clavar 4 o 6 picas dentro de una única arqueta pequeña separadas apenas $0{,}5\text{ m}$ entre sí: el resultado apenas mejora respecto a una sola pica.
- Dividir $R_1$ entre $n$ sin aplicar ningún factor de acoplamiento o utilización.
- Asumir que en esquema TT «con que dé menos de $1\,666\text{ }\Omega$ para un diferencial de $30\text{ mA}$ ya es legal», ignorando los máximos reglamentarios locales, la selectividad de cabecera ($300\text{ mA}$), el envejecimiento estacional o la protección frente a rayos.
- Confiar en valores de factor $\eta$ inventados por un chatbot sin contrastarlos con fórmulas o tablas técnicas contrastadas.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué 4 picas en paralelo separadas $1\text{ m}$ no reducen la resistencia a la cuarta parte de una sola pica?
2. ¿Qué separación mínima respecto a la longitud $L$ conviene respetar entre picas verticales?
3. ¿Por qué no basta con calcular el límite teórico $50\text{ V}/I_{\Delta n}$ para fijar el objetivo de puesta a tierra de un edificio?

---

### 3.4. Distinción crítica: cálculo teórico de diseño vs. comprobación en obra con telurómetro (método caída de potencial / 62 %)

#### Explicación breve y clara
Esta es la regla de oro del Tema 10: **el cálculo teórico de resistencia de puesta a tierra es únicamente una estimación preliminar de proyecto, NUNCA una garantía ni una prueba de cumplimiento**. Las bolsas de aire en el relleno, piedras ocultas, variaciones reales de humedad, el contacto imperfecto del electrodo o tuberías enterradas alteran significativamente el valor final. Por ello, **siempre es obligatoria la comprobación física en obra** una vez ejecutado el electrodo y antes de la puesta en servicio (y periódicamente en mantenimiento) mediante un **telurómetro calibrado**.

El método de referencia para comprobar una toma aislada es el **método de caída de potencial de 3 polos (E, P, C)** aplicando la **regla del 62 %** (exactamente $61{,}8\,\%$ en terreno homogéneo para electrodo puntual/pequeño):
1. **Desconectar el puente de comprobación** en el borne principal para aislar la toma de tierra del edificio y evitar medir en paralelo tuberías metálicas, neutros o estructuras vecinas.
2. Clavar la pica auxiliar de corriente **$C$** suficientemente lejos del electrodo bajo prueba **$E$** (típicamente $D_{E-C} \ge 5\text{ a }10$ veces la mayor dimensión diagonal de la toma de tierra, p. ej., $25\text{–}50\text{ m}$ para tomas pequeñas/medianas) para evitar el solapamiento de las zonas de influencia.
3. Clavar la pica auxiliar de potencial **$P$** en línea recta entre $E$ y $C$ al **$62\,\%$ de la distancia $D_{E-C}$** y tomar la lectura.
4. **Verificar la meseta plana:** repetir la medida moviendo $P$ al **$52\,\%$** y al **$72\,\%$** de $D_{E-C}$. Si las tres lecturas coinciden dentro de un margen estrecho (p. ej. variación $< 5\,\%$), se ha alcanzado la zona de tierra lejana plana y la lectura es válida; si suben en pendiente continua, $C$ está demasiado cerca y debe alejarse más.

Finalmente, conviene recordar una limitación clave de la **pinza de tierra (sin picas)**: la pinza induce una tensión y mide la resistencia de un **lazo cerrado**; funciona únicamente en sistemas con múltiples picas conectadas a un retorno común en paralelo (por ejemplo, redes TN multiaterradas o subestaciones con varios bajantes), pero **NUNCA mide correctamente una toma de tierra única o desconectada** (dará circuito abierto o un valor falso del lazo paralelo de edificio). Y respecto a la IA (ChatGPT/Claude): puede asistir en verificar pasos algebraicos de Wenner/Dwight o redactar protocolos de ensayo, pero **jamás puede validar medidas de seguridad ni sustituir al ensayo instrumental en campo**.

#### Conceptos clave
- **Estimación de diseño vs. medida en obra:** el proyecto estima para dimensionar el presupuesto y la geometría; solo el telurómetro calibrado certifica la resistencia real alcanzada en terreno.
- **Regla del 62 % y comprobación de meseta (52 % / 62 % / 72 %):** método que garantiza situar la sonda de potencial $P$ fuera tanto del cono de potencial de $E$ como del cono de $C$.
- **Aislamiento del puente de comprobación:** requisito imprescindible para no medir falsamente la impedancia paralela de la red de agua o del neutro exterior.
- **Limitación física de la pinza de tierra:** instrumento válido solo cuando existe un bucle paralelo cerrado de retorno de muy baja impedancia aguas arriba, jamás sobre electrodos aislados con el puente abierto.

#### Definiciones necesarias
- **Telurómetro:** instrumento específico calibrado para medir resistencias de puesta a tierra (y resistividad Wenner en modelos de 4 terminales) mediante inyección de corriente alterna o conmutada libre de corrientes parásitas industriales.
- **Método de caída de potencial (3 polos):** técnica de medida de resistencia de tierra que inyecta corriente entre el electrodo bajo prueba ($E$) y una pica auxiliar lejana ($C$), midiendo el potencial intermedio en la sonda ($P$).
- **Meseta de potencial (zona de tierra lejana):** región plana en la curva $R(x)$ entre $E$ y $C$ donde las zonas de influencia de ambos electrodos no se solapan y la lectura converge a la resistencia real de $E$.

#### Ejemplo práctico realista
En la recepción de una nave con toma de tierra de 2 picas conectadas en línea ($L_{\text{máx}} = 6\text{ m}$), el instalador entrega una medición de **$1{,}8\text{ }\Omega$** realizada con pinza de tierra sin abrir el puente de comprobación. Al llegar la inspección independiente con telurómetro de 3 polos:
1. Se abre el **puente de comprobación** (el $1{,}8\text{ }\Omega$ desaparece: ¡estaba midiendo un lazo metálico a través de la red de tuberías de agua del polígono!).
2. Se extiende el cable de corriente $C$ a $D_{E-C} = 40\text{ m}$ (más de 6 veces la diagonal de la toma de $6\text{ m}$) y se ensaya la sonda de potencial $P$ en tres puntos:
   - $P$ al $52\,\%$ ($20{,}8\text{ m}$): $R = 14{,}2\text{ }\Omega$.
   - $P$ al $62\,\%$ ($24{,}8\text{ m}$): $R = 14{,}5\text{ }\Omega$.
   - $P$ al $72\,\%$ ($28{,}8\text{ m}$): $R = 14{,}8\text{ }\Omega$.
Como la variación entre $52\,\%$, $62\,\%$ y $72\,\%$ es inferior al $5\,\%$, la meseta es válida y la resistencia real verificada en obra es **$14{,}5\text{ }\Omega$** (no $1{,}8\text{ }\Omega$). *(Nota: en épocas húmedas debe valorarse el coeficiente estacional antes de dar por holgada una medida próxima al límite reglamentario vigente).*

#### Errores frecuentes
- Dar por certificado un sistema de puesta a tierra exclusivamente porque «el cálculo teórico del proyecto salió en $12\text{ }\Omega$» sin realizar ensayo con telurómetro en obra.
- Medir con el puente de comprobación cerrado, registrando la baja resistencia de las tuberías públicas o del neutro de red en lugar de la toma propia.
- Colocar la pica $C$ a solo $5\text{ m}$ de la toma y la pica $P$ a $3\text{ m}$ dentro de una jardinera: los conos de potencial se solapan y la lectura es falsamente baja.
- Utilizar una pinza de tierra sobre un único bajante desconectado o sin bucle de retorno real.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué es obligatorio abrir el puente de comprobación antes de medir con telurómetro de 3 polos una toma de tierra de edificio?
2. ¿Cómo demuestra la triple lectura al $52\,\%$, $62\,\%$ y $72\,\%$ que no hay solapamiento entre los electrodos $E$ y $C$?
3. ¿En qué situaciones una pinza de tierra arroja lecturas completamente erróneas o imposibles?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** alterna análisis físico de suelos, cálculo secuencial en hoja de cálculo, interpretación crítica de curvas de caída de potencial y resolución de un caso real con discrepancia severa entre diseño y obra.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
| :--- | :---: | :--- | :--- |
| **1. Apertura y activación** | 00:00 – 00:25 (25 min) | Conecta con el Tema 9, lanza el diagnóstico inicial y dirige la **Actividad 1** contrastando un cálculo de oficina optimista ($12\text{ }\Omega$) frente a una obra que mide $95\text{ }\Omega$. | Formula hipótesis sobre por qué discrepó tanto la medida real respecto al papel y completa el sondeo diagnóstico. |
| **2. Microexposición Bloque A (Wenner y electrodo simple)** | 00:25 – 01:00 (35 min) | Explica los apartados 3.1 y 3.2: factores de $\rho$, método Wenner ($\rho_a = 2\pi a R$), fórmula de Dwight para pica simple y fórmula preliminar de malla. | Procesa dos lecturas de Wenner en vivo para identificar suelo estratificado y calcula la sensibilidad de $R_1$ al diámetro frente a $L$. |
| **3. Actividad práctica de aplicación técnica** | 01:00 – 01:40 (40 min) | Supervisa la **Actividad 2**: diseño de arreglo en paralelo con factor de acoplamiento $\eta$ y comparación con malla perimetral básica. | En parejas, calcula $R_1$, $R_n$ para 2, 4 y 6 picas con distintas separaciones $s/L$ y compara la eficiencia técnica de picas cortas vs. profundas. |
| **Descanso breve** | 01:40 – 01:55 (15 min) | Pausa activa y verificación de carga de la gráfica de caída de potencial del caso. | Descanso fuera de pantalla. |
| **4. Microexposición Bloque B (Acoplamiento y telurómetro 62 %)** | 01:55 – 02:25 (30 min) | Expone los apartados 3.3 y 3.4: efecto de acoplamiento, límites de cálculo, montaje del ensayo de 3 polos ($52\,\%/62\,\%/72\,\%$), errores con pinza y rol seguro de la IA. | Analiza tres curvas reales de caída de potencial (una plana válida y dos ascendentes inválidas) y detecta cuándo hay que alejar la pica $C$. |
| **5. Caso práctico integrado** | 02:25 – 03:15 (50 min) | Presenta el caso **«Industrias del Segura, S.L.»**, organiza equipos de 3–4 personas y guía el rediseño ante terreno bicapa y auditoría de medidas falsas. | En equipos, interpreta el perfil Wenner, recalcula picas profundas acopladas vs. malla, corrige el error de medición cerrada y redacta el protocolo de ensayo. |
| **6. Puesta en común y transferencia a proyecto** | 03:15 – 03:45 (30 min) | Contrasta soluciones del caso y dinamiza la **Actividad 3** (plantilla de cálculo + protocolo de ensayo verificable con revisión crítica de errores de IA). | Expone su diseño del caso, verifica con hoja de cálculo un borrador de IA con error de unidades/acoplamiento y documenta la corrección. |
| **7. Síntesis, evaluación sumativa y cierre** | 03:45 – 04:00 (15 min) | Sintetiza la frontera innegociable entre cálculo teórico y comprobación instrumental, aplica el test de cierre y enlaza con el **Tema 11 (Diagramas unifilares)**. | Completa la prueba sumativa breve y su ficha de autoevaluación. |

**Suma total verificada:** 25 + 35 + 40 + 15 + 30 + 50 + 30 + 15 = **240 minutos (4 horas)**.

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «¿Por qué falló el papel? Autopsia de una tierra de $95\text{ }\Omega$»
- **Nombre:** ¿Por qué falló el papel? Autopsia de una tierra de $95\text{ }\Omega$.
- **Objetivo:** Reconocer que un cálculo teórico basado en resistividades supuestas puede fracasar estrepitosamente en obra si no existe caracterización del terreno ni medición instrumental correcta.
- **Instrucciones para el alumnado:**
  1. Observad los dos documentos proyectados: una memoria breve que calculó $R = 14\text{ }\Omega$ usando «terreno estándar $\rho = 50\text{ }\Omega\cdot\text{m}$» y el acta de obra donde el telurómetro marcó $95\text{ }\Omega$ en verano.
  2. En 6 minutos de forma individual, listad al menos 3 causas físicas o de proyecto que explican esa desviación de casi $7\times$.
  3. Compartid en plenario qué dato tendría que haberse exigido antes de comprar materiales.
- **Materiales necesarios:** Diapositiva comparativa proyecto vs. obra y hoja de notas.
- **Tiempo estimado:** 15 minutos (integrados en la Fase 1).
- **Rol del formador:** Recoger todas las hipótesis (humedad estacional, terreno calizo/relleno, longitud insuficiente, acoplamiento) y vincularlas con la necesidad de Wenner previo y medición de obra posterior.
- **Producto o entregable esperado:** Lista priorizada de causas de discrepancia cálculo–obra.
- **Criterios de éxito:** El grupo identifica al menos 3 causas reales (asunción falsa de $\rho$, variación estacional, estratificación del suelo o defecto de ejecución).

### Actividad 2 (Aplicación técnica): «Laboratorio numérico de pica simple, acoplamiento y malla»
- **Nombre:** Laboratorio numérico de pica simple, acoplamiento y malla.
- **Objetivo:** Aplicar las fórmulas orientativas de Wenner, pica vertical, factor de acoplamiento en paralelo y anillo perimetral evaluando la sensibilidad de cada parámetro.
- **Instrucciones para el alumnado:**
  1. En parejas, abrid la hoja de cálculo base con un terreno donde Wenner dio $R = 15{,}9\text{ }\Omega$ a separación $a = 3\text{ m}$ ($b = 0{,}15\text{ m}$).
  2. Calculad $\rho_a$ en $\Omega\cdot\text{m}$.
  3. Calculad la resistencia teórica de 1 pica ($L = 2{,}0\text{ m}$, $d = 16\text{ mm}$), compárala con 1 pica profunda de $L = 4{,}0\text{ m}$ y con un arreglo de 4 picas de $2{,}0\text{ m}$ en línea separadas $s = 2{,}0\text{ m}$ ($\eta = 0{,}66$) frente a $s = 4{,}0\text{ m}$ ($\eta = 0{,}80$).
  4. Calculad finalmente una malla/anillo de $12\text{ m}\times 8\text{ m}$ ($A = 96\text{ m}^2$, $L_T = 40\text{ m}$) y anotad qué opción consigue la menor resistencia con menor incertidumbre.
- **Materiales necesarios:** Hoja de cálculo con casillas guiadas, fórmulas orientativas impresas y calculadora.
- **Tiempo estimado:** 40 minutos (Fase 3).
- **Rol del formador:** Vigilar la conversión de diámetro a radio en metros ($r = 0{,}008\text{ m}$), verificar el uso de logaritmo natural ($\ln$, no $\log_{10}$) y evitar errores al dividir por $(n\cdot \eta)$.
- **Producto o entregable esperado:** Tabla comparativa resuelta en hoja de cálculo con recomendación técnica razonada.
- **Criterios de éxito:** Cálculo exacto ($\rho_a \approx 300\text{ }\Omega\cdot\text{m}$; 1 pica $2\text{ m} \approx 141{,}0\text{ }\Omega$; 1 pica $4\text{ m} \approx 82{,}5\text{ }\Omega$; 4 picas $s=4\text{ m} \approx 44{,}1\text{ }\Omega$; anillo $12\times 8\text{ m} \approx 13{,}6 + 7{,}5 = 21{,}1\text{ }\Omega$) con unidades SI y advertencia de comprobación en obra.

### Actividad 3 (Transferencia a proyecto real): «Auditoría de cálculo asistido por IA y acta de ensayo 62 %»
- **Nombre:** Auditoría de cálculo asistido por IA y acta de ensayo 62 %.
- **Objetivo:** Utilizar asistentes de IA con seguridad para revisar fórmulas o redactar procedimientos de campo sin confiar en cifras inventadas, produciendo un acta lista para comprobación en obra.
- **Instrucciones para el alumnado:**
  1. Revisad un extracto anonimizado donde un asistente de IA calculó 4 picas de $2{,}5\text{ m}$ en $\rho = 120\text{ }\Omega\cdot\text{m}$ dividiendo directamente $R_1 / 4$ y afirmó que «si el cálculo sale menor a $15\text{ }\Omega$ no hace falta medir con telurómetro si se usa pinza de tierra».
  2. Identificad y corregid por escrito los 3 errores conceptuales/matemáticos de la IA en vuestra plantilla técnica.
  3. Completad la sección de **Protocolo de Comprobación en Obra (Caída de Potencial 52 %–62 %–72 %)** de la plantilla de la Sección 8 adaptada a un proyecto real propio (definiendo distancia mínima $D_{E-C}$ según diagonal de la toma).
- **Materiales necesarios:** Plantilla técnica práctica (Sección 8) y extracto impreso/digital de la salida defectuosa de IA.
- **Tiempo estimado:** 25 minutos (integrados en la Fase 6).
- **Rol del formador:** Reforzar que el cálculo teórico nunca sustituye al acta instrumental, comprobar que exigen puente abierto y validar el criterio de meseta plana.
- **Producto o entregable esperado:** Registro de auditoría a la IA + Acta modelo de comprobación de resistencia de tierra lista para obra.
- **Criterios de éxito:** Corrección explícita del acoplamiento mutuo, rechazo fundado de la pinza en toma aislada y especificación completa del ensayo al $52\,\%/62\,\%/72\,\%$.

---

## 6. Caso práctico

### Caso: Industrias del Segura, S.L. — «Una corteza de grava seca y una lectura demasiado buena para ser cierta»

#### Contexto empresarial
**Industrias del Segura, S.L.** construye una nave de mecanizado y montaje ($900\text{ m}^2$) con instalación fotovoltaica en cubierta en Murcia, bajo esquema de conexión **TT** y con un objetivo de resistencia de puesta a tierra constructiva en proyecto de **$R_{\text{obj}} \le 15\text{ }\Omega$** (sujeto a verificación reglamentaria vigente y coordinación de diferenciales). Durante la obra civil aparecieron problemas en la ejecución y validación de la toma de tierra.

#### Situación o problema
El anteproyecto original calculó una única pica vertical de $2{,}0\text{ m}$ asumiendo sin medición previa una resistividad «media» de $\rho = 50\text{ }\Omega\cdot\text{m}$. Cuando el subcontratista hincó la pica en una zanja periférica de relleno calizo-pedregoso y midió, ocurrieron dos hechos contradictorios:
1. Al medir con una **pinza de tierra** antes de abrir el puente de comprobación (cuando el cuadro ya estaba conectado a la tubería metálica de agua del polígono), obtuvo **$1{,}8\text{ }\Omega$** y dio la instalación por terminada.
2. El ingeniero supervisor exigió abrir el puente de comprobación y repetir el ensayo con un **telurómetro de 3 polos**: la resistencia real de la pica resultó ser de **$112\text{ }\Omega$**, completamente fuera del objetivo de $15\text{ }\Omega$ y muy riesgosa ante una avería o cambio de diferencial en cabecera de $300\text{ mA}$.
3. Ante el bloqueo de la puesta en marcha, la propiedad encargó finalmente un **ensayo Wenner de 4 electrodos**, obteniendo los datos que figuran en la tabla siguiente.

#### Datos disponibles

| Parámetro / Ensayo | Datos medidos reales | Observaciones técnicas |
| :--- | :--- | :--- |
| **Campaña Wenner 1 ($a = 2{,}0\text{ m}$)** | $R_{\text{Wenner}} = 27{,}85\text{ }\Omega$ ($b = 0{,}15\text{ m}$) | Capa superficial de relleno calizo seco y grava |
| **Campaña Wenner 2 ($a = 6{,}0\text{ m}$)** | $R_{\text{Wenner}} = 2{,}52\text{ }\Omega$ ($b = 0{,}15\text{ m}$) | Estrato arcilloso profundo húmedo más conductor |
| **Pica inicial instalada** | 1 pica acero cobrizado $L = 2{,}0\text{ m}$, $d = 16\text{ mm}$ ($r = 0{,}008\text{ m}$) | Medida real con puente abierto: $112\text{ }\Omega$ |
| **Propuesta A de mejora** | Instalar 3 picas cortas ($L = 2{,}0\text{ m}$) en línea dentro de un patio de $6\text{ m}$ ($s = 2{,}0\text{ m}$, $\eta \approx 0{,}72$) | Quedan atrapadas en la capa superficial de $\sim 350\text{ }\Omega\cdot\text{m}$ |
| **Propuesta B de mejora** | Picas profundas acopladas $L = 6{,}0\text{ m}$, $d = 16\text{ mm}$ ($r = 0{,}008\text{ m}$), alcanzando estrato profundo ($\rho_{\text{ef}} \approx 110\text{ }\Omega\cdot\text{m}$) | Disponibilidad de 2 puntos separados $s = 8{,}0\text{ m}$ ($\eta \approx 0{,}82$) + cable unión $35\text{ mm}^2$ Cu desnudo |
| **Espacio para ensayo 3 polos** | Pasillo libre exterior de $45\text{ m}$ en línea recta | Permite alejar pica $C$ hasta $40\text{ m}$ |

*(Nota: el valor $\rho_{\text{ef}} \approx 110\text{ }\Omega\cdot\text{m}$ representa una resistividad equivalente ponderada ilustrativa para el diseño preliminar en terreno bicapa; los valores exactos y topes reglamentarios deben verificarse según norma aplicable).*

#### Preguntas de análisis
1. Calculad $\rho_a(2\text{ m})$ y $\rho_a(6\text{ m})$ a partir de los datos de Wenner y explicad por qué el proyectista inicial se equivocó al suponer $\rho = 50\text{ }\Omega\cdot\text{m}$.
2. ¿Por qué la pinza de tierra marcó **$1{,}8\text{ }\Omega$** mientras el telurómetro con puente abierto midió **$112\text{ }\Omega$**? ¿Cuál es la única lectura técnicamente válida?
3. Comparad cuantitativamente la **Propuesta A** (3 picas cortas de $2\text{ m}$ en capa mala, tomando base $R_1 \approx 112\text{ }\Omega$ real medido o teórico en $\sim 350\text{ }\Omega\cdot\text{m}$) frente a la **Propuesta B** (2 picas profundas acopladas de $6\text{ m}$ separadas $8\text{ m}$ en $\rho_{\text{ef}} = 110\text{ }\Omega\cdot\text{m}$). ¿Cuál logra el objetivo $\le 15\text{ }\Omega$?
4. Si tras ejecutar la Propuesta B se quiere certificar la obra en campo con el telurómetro en el pasillo de $45\text{ m}$, ¿a qué distancias exactas desde el electrodo $E$ deben clavarse $C$ y $P$ (52 %, 62 %, 72 %) y qué criterio determina la validez del ensayo?

#### Tarea a realizar
En equipos de 3–4 personas (50 minutos), elaborad un **Dictamen Técnico de Rediseño y Validación en Campo** que incluya:
1. **Cálculo Wenner** de ambas capas ($\rho_a$ a $2\text{ m}$ y $6\text{ m}$) y diagnóstico del suelo.
2. **Comparativa numérica Propuesta A vs. Propuesta B** mediante la fórmula de Dwight y el factor de acoplamiento $\eta$, justificando la solución elegida (y cómo contribuye además el cable horizontal de enlace si va desnudo enterrado).
3. **Explicación técnica del error de los $1{,}8\text{ }\Omega$** con pinza de tierra.
4. **Plan de ensayo de recepción en obra** (puente abierto, $D_{E-C} = 40\text{ m}$, posiciones $52\,\% / 62\,\% / 72\,\%$, criterio de meseta plana $\le 5\,\%$ y recordatorio de verificación estacional y reglamentaria vigente).

#### Posibles soluciones o criterios de análisis
- **Perfil Wenner:**
  - A $a = 2\text{ m}$: $\rho_a = 2\pi \cdot 2 \cdot 27{,}85 = 350{,}0\text{ }\Omega\cdot\text{m}$ (corteza muy resistiva).
  - A $a = 6\text{ m}$: $\rho_a = 2\pi \cdot 6 \cdot 2{,}52 = 95{,}0\text{ }\Omega\cdot\text{m}$ (capa profunda conductora).
- **Explicación de la lectura falsa ($1{,}8\text{ }\Omega$):** con el puente de comprobación cerrado, la pinza cerró un bucle a través de la red equipotencial y tuberías metálicas de agua conectadas al polígono exterior, midiendo un retorno ajeno y no la toma propia de la nave (que en realidad estaba en $112\text{ }\Omega$).
- **Comparativa Propuesta A vs. Propuesta B:**
  - *Propuesta A (3 picas cortas de $2\text{ m}$ en superficie):* incluso partiendo del valor real medido de una pica ($R_1 = 112\text{ }\Omega$) con $\eta \approx 0{,}72$, $R_3 \approx \frac{112}{3 \cdot 0{,}72} \approx 51{,}9\text{ }\Omega$ (y teóricamente con $\rho=350\text{ }\Omega\cdot\text{m}$ sería aún mayor: $R_1 = \frac{350}{2\pi\cdot 2}(\ln(8/0{,}008)-1) \approx 164{,}5\text{ }\Omega \Rightarrow R_3 \approx 76{,}2\text{ }\Omega$). **NO cumple** $\le 15\text{ }\Omega$.
  - *Propuesta B (2 picas profundas acopladas $L = 6{,}0\text{ m}$, $r = 0{,}008\text{ m}$, $\rho_{\text{ef}} = 110\text{ }\Omega\cdot\text{m}$):*
    $$R_1(6\text{ m}) = \frac{110}{2\pi \cdot 6} \left(\ln\left(\frac{24}{0{,}008}\right) - 1\right) = 2{,}918 \cdot (8{,}006 - 1) = 20{,}4\text{ }\Omega$$
    Con 2 picas separadas $s = 8\text{ m}$ ($\eta \approx 0{,}82$):
    $$R_2 = \frac{20{,}4}{2 \cdot 0{,}82} \approx 12{,}4\text{ }\Omega \le 15\text{ }\Omega$$
    Además, el cable desnudo de $8\text{ m}$ entre ambas aporta una ligera reducción adicional en paralelo, dejando holgura respecto al límite constructivo de $15\text{ }\Omega$ (que deberá comprobarse finalmente en obra en condiciones secas y frente a normativa vigente).
- **Plan de ensayo de recepción en obra:** con $D_{\max}$ entre extremos de la toma $= 8\text{ m}$, situar la pica de corriente $C$ a $D_{E-C} = 40\text{ m}$ ($5 \times D_{\max}$), abrir el puente de comprobación y medir en $P$ a **$20{,}8\text{ m}$ (52 %)**, **$24{,}8\text{ m}$ (62 %)** y **$28{,}8\text{ m}$ (72 %)**. Si las tres lecturas difieren menos de un $5\,\%$, la meseta de potencial es válida y se registra la lectura del $62\,\%$ junto con el estado de humedad del suelo y certificado de calibración del telurómetro.

#### Preguntas de reflexión final
- ¿Qué habría ocurrido si la propiedad hubiera aceptado el primer informe con pinza de tierra de $1{,}8\text{ }\Omega$ y años después se cortara o sustituyera la tubería metálica de agua por polietileno?
- ¿Cuándo compensa invertir en un ensayo Wenner previo frente a añadir picas a ciegas durante la obra?

---

## 7. Evaluación

### Evaluación diagnóstica
- **Instrumento (inicio de sesión, 5 min):** Breve encuesta diagnóstica de 3 preguntas tras presentar la Actividad 1: (1) qué magnitud mide Wenner ($\Omega\cdot\text{m}$ vs. $\Omega$); (2) qué pasa si duplicamos el diámetro de una pica frente a su longitud; y (3) si un cálculo de diseño de $10\text{ }\Omega$ exime o no de medir en obra.

### Evaluación formativa
- Seguimiento continuo en las **Actividades 2 y 3** y en el caso **«Industrias del Segura, S.L.»** mediante lista de comprobación:
  - Aplica correctamente $\rho_a = 2\pi a R$ y distingue $\Omega\cdot\text{m}$ de $\Omega$.
  - Convierte correctamente milímetros a metros en $r$ dentro de $\ln(4L/r)$ y utiliza logaritmo neperiano.
  - Aplica el factor de utilización $\eta$ sin dividir ingenuamente $R_1 / n$.
  - Explica sin ambigüedad por qué el cálculo teórico NO sustituye al telurómetro ni sirve la pinza en toma aislada.

### Evaluación sumativa
1. **Dictamen Técnico del Caso «Industrias del Segura, S.L.»** por equipos (**60 %** del peso).
2. **Hoja de cálculo de la Actividad 2 + Auditoría IA y Protocolo 62 % (Actividad 3) + mini-test de 4 ítems** (**40 %** del peso).

### Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
| :--- | :--- | :--- | :--- | :--- |
| **1. Interpretación de resistividad y método Wenner** | Confunde $\rho$ ($\Omega\cdot\text{m}$) con resistencia $R$ ($\Omega$) o no identifica las dos capas del terreno. | Calcula $\rho_a$ con errores menores o ignora la influencia de la estacionalidad y las capas. | Calcula exactamente $\rho_a$ a $2\text{ m}$ y $6\text{ m}$, diagnostica el terreno bicapa y justifica el cambio de profundidad. | Evalúa además interferencias enterradas, variación estacional y criterio de cuándo profundizar frente a extender en superficie. |
| **2. Cálculo de electrodo simple, paralelo y malla** | Comete errores graves de unidades ($r$ en mm), omite $\ln$ o divide $R_1/n$ sin acoplamiento. | Calcula bien pica simple, pero aplica mal el factor de utilización $\eta$ o no compara alternativas. | Resuelve correctamente pica simple, profunda, paralelo con $\eta$ y malla preliminar demostrando por qué cumple la Propuesta B. | Analiza sensibilidad geométrica completa, cuantifica la ventaja de $L$ frente a $d$ y documenta el carácter orientativo de las fórmulas. |
| **3. Distinción cálculo vs. medición en obra (62 %)** | Acepta el cálculo teórico como definitivo o valida la lectura de $1{,}8\text{ }\Omega$ con pinza y puente cerrado. | Reconoce que hay que medir con telurómetro, pero no explica la regla del $52/62/72\,\%$ ni el fallo de la pinza. | Diferencia con precisión diseño teórico vs. medida real, exige puente abierto y diseña el ensayo a $40\text{ m}$ ($52/62/72\,\%$). | Explica físicamente la meseta de potencial, el efecto de conos solapados, las condiciones válidas de uso de pinza y la trazabilidad del equipo calibrado. |
| **4. Calidad documental y control crítico de IA** | Copia cifras generadas por IA sin comprobar fórmulas, logaritmos ni acoplamiento. | Corrige la aritmética de la IA, pero deja imprecisa la verificación normativa o de campo. | Audita y corrige los 3 fallos del borrador IA y completa el protocolo de ensayo listo para obra. | Presenta hoja verificable con fórmulas abiertas, advertencias normativas vigentes y protocolo completo de recepción e inspección periódica. |

### Actividad de autoevaluación
Al cerrar la sesión, cada participante contesta brevemente en su ficha:
1. *¿Qué diferencia fundamental hay entre calcular una puesta a tierra en proyecto y certificarla en obra con telurómetro?*
2. *Si al medir con telurómetro la lectura sube al pasar la pica $P$ del $52\,\%$ al $62\,\%$ y al $72\,\%$, ¿qué acción inmediata debo tomar en campo?*
3. *¿Qué error de diseño o de cálculo con IA me siento ahora capaz de detectar en menos de un minuto?*

---

## 8. Materiales y recursos

### Guion de diapositivas
- **Slide 1 — Portada y objetivo crítico del Tema 10:** De la arquitectura física (T9) al cálculo de difusión y a la distinción entre papel y medición en obra.
- **Slide 2 — Activación (Actividad 1):** Cálculo optimista ($14\text{ }\Omega$) vs. medida real en verano ($95\text{ }\Omega$): por qué el terreno manda.
- **Slide 3 — Resistividad del suelo ($\rho$) y ensayo Wenner:** Factores de humedad, sales y temperatura; perfil multicapa y fórmula $\rho_a = 2\pi a R$.
- **Slide 4 — Electrodos simples y mallas:** Fórmula de Dwight (sensibilidad a $L$ frente a diámetro $d$) y fórmula preliminar de anillo/malla (Actividad 2).
- **Slide 5 — Electrodos en paralelo y acoplamiento mutuo:** Por qué $n$ picas no dividen por $n$; factor $\eta$, separación mínima $s \ge 1\text{–}2L$ y compuestos conductores frente a prohibición de sal.
- **Slide 6 — Cálculo teórico vs. Telurómetro en obra:** Puente abierto, regla del 62 % con verificación en 52 % y 72 %, meseta plana y límites de la pinza de tierra.
- **Slide 7 — Caso práctico «Industrias del Segura, S.L.»:** Datos Wenner, lectura falsa de $1{,}8\text{ }\Omega$ vs. $112\text{ }\Omega$ reales y comparación Propuesta A vs. Propuesta B (50 min).
- **Slide 8 — Auditoría de IA, evaluación y puente al Tema 11:** Corrección de sesgos en fórmulas por IA (Actividad 3), cierre sumativo y conexión con los diagramas unifilares (Tema 11).

### Ficha de trabajo
Documento de 2 páginas con: (1) plantilla para registrar hipótesis de la Actividad 1; (2) tabla de laboratorio numérico de la Actividad 2; (3) gráfica muda de curva de caída de potencial para identificar la meseta en el caso *Industrias del Segura, S.L.*; y (4) cuestionario final de autoevaluación.

### Plantilla técnica práctica
```text
=== HOJA DE CÁLCULO PRELIMINAR Y ACTA DE COMPROBACIÓN EN OBRA (TIERRAS) ===
Proyecto (anonimizado): ____________________   Norma / Reglamento aplicable a verificar: ____________________

1. CARACTERIZACIÓN DEL TERRENO (MÉTODO WENNER)
- Separación a1 = ___ m -> R = ___ Ω -> ρa1 = ___ Ω·m  |  Separación a2 = ___ m -> R = ___ Ω -> ρa2 = ___ Ω·m
- Resistividad de diseño adoptada (condición desfavorable): ρ = ___ Ω·m  |  Objetivo proyecto R_obj <= ___ Ω

2. ESTIMACIÓN DE DISEÑO PRELIMINAR (SUJETA A COMPROBACIÓN EN OBRA)
- Electrodo base: L = ___ m, r = ___ m -> R1 teórica = ___ Ω
- Configuración elegida: n = ___ electrodos, separación s = ___ m, factor η = ___ -> Rn estimada = ___ Ω
- Verificación de fórmula en hoja técnica independiente (si se usó IA): [ ] Sí

3. ACTA DE COMPROBACIÓN OBLIGATORIA EN OBRA (TELURÓMETRO CALIBRADO)
- Puente de comprobación ABIERTO antes de medir: [ ] Sí   - Instrumento y n.º calibración: ___________________
- Método empleado: [ ] 3 polos caída de potencial (Distancia E-C = ___ m)  [ ] Otro justificado: _____________
- Lecturas sonda P:  52 % (___ m) = ___ Ω  |  62 % (___ m) = ___ Ω  |  72 % (___ m) = ___ Ω
- Variación entre lecturas <= 5 % (meseta válida): [ ] Sí  [ ] No (repetir alejando C)
- Resistencia medida validada en campo (62 %): ___ Ω  (Estado del suelo: [ ] Seco  [ ] Húmedo)
```

### Lecturas y recursos recomendados
*(Nota importante: el formador y el alumnado deben validar siempre la edición vigente, el país de aplicación, los criterios de la compañía distribuidora y los enlaces antes de utilizar cualquiera de estas referencias).*
- **IEEE Std 81** (*IEEE Guide for Measuring Earth Resistivity, Ground Impedance, and Earth Surface Potentials of a Grounding System*) *(referencia fundamental para Wenner y caída de potencial; comprobar edición vigente)*.
- **IEEE Std 80** (*IEEE Guide for Safety in AC Substation Grounding*) *(referencia clásica para diseño de mallas, tensiones de paso y contacto en MT/AT; verificar alcance y edición vigente)*.
- **REBT (España) — ITC-BT-18 y Guía Técnica de Aplicación** *(incluye orientaciones sobre picas, placas, anillos y medición de puesta a tierra en BT en España; verificar versión oficial vigente)*.
- **IEC 60364-6** (*Verification*) sobre ensayos e inspección inicial y periódica de instalaciones eléctricas y resistencia de puesta a tierra *(verificar edición vigente)*.

### Glosario de términos clave

| Término | Definición |
| :--- | :--- |
| **Resistividad del terreno ($\rho$)** | Propiedad física del suelo que cuantifica su oposición al paso de corriente eléctrica, expresada en ohmio-metro ($\Omega\cdot\text{m}$). |
| **Método de Wenner** | Ensayo geoeléctrico con cuatro electrodos equidistantes en línea recta que permite determinar la resistividad aparente del subsuelo a distintas profundidades. |
| **Resistencia de difusión** | Resistencia eléctrica entre un electrodo enterrado y el terreno lejano de potencial nulo por donde se dispersa la corriente a tierra. |
| **Factor de acoplamiento / utilización ($\eta$)** | Coeficiente menor que la unidad que recoge la pérdida de eficiencia mutua cuando se disponen varios electrodos próximos en paralelo. |
| **Cono de potencial** | Región del suelo alrededor de un electrodo donde cae la mayor parte de la tensión al circular una corriente hacia tierra. |
| **Método de caída de potencial (62 %)** | Técnica de ensayo en obra de 3 polos ($E, P, C$) que sitúa la sonda de potencial $P$ al $62\,\%$ de la distancia $E\text{–}C$ en la meseta plana fuera de las zonas de influencia. |
| **Meseta de potencial** | Tramo horizontal en la curva de resistencia medida al desplazar la sonda $P$ (52 %, 62 %, 72 %) que confirma que $E$ y $C$ están suficientemente alejados. |
| **Pinza de medida de tierra** | Instrumento sin picas auxiliares que solo mide correctamente la resistencia cuando el electrodo forma parte de un lazo cerrado multiaterrado paralelo. |

---

## 9. Adaptaciones

### Sesión presencial
- **Simulación práctica con equipos reales:** Si el centro formativo dispone de un telurómetro de 3/4 bornes y una pinza de tierra, montar en patio o sobre caja pedagógica de resistencias una demostración real de conexión $E, P, C$, apertura del puente de comprobación y error típico de la pinza en circuito abierto.
- **Gráficas en papel:** Hacer que cada pareja trace manualmente la curva $R(x)$ al 20 %, 40 %, 52 %, 62 %, 72 % y 85 % para visualizar la forma en «S» de la meseta de potencial.

### Sesión online síncrona
- **Simulador tabular en la nube:** Entregar una hoja de cálculo interactiva donde el alumnado modifique $L$, $d$, $\rho$ y $\eta$ viendo en directo cómo cambia la gráfica de resistencia de pica simple frente a picas en paralelo.
- **Pizarra compartida para el caso:** Mostrar el perfil geológico bicapa y los $45\text{ m}$ de pasillo de *Industrias del Segura, S.L.* para que los equipos coloquen las picas virtuales $E, P, C$ con sus cotas exactas.

### Sesión asíncrona
- **Vídeo demostrativo de campo:** Incorporar un vídeo técnico breve previamente validado por el formador que muestre el conexionado real de Wenner (4 polos) y caída de potencial (3 polos) en campo.
- **Entrega evaluable:** Subida al campus virtual de la hoja de cálculo de la Actividad 2, el dictamen del caso *Industrias del Segura, S.L.* y el acta de comprobación auditada de la Actividad 3.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Convierte en cálculos cuantitativos y protocolos de verificación los componentes físicos y materiales seleccionados en el **Tema 9 (Sistema de puesta a tierra)** y confirma los parámetros necesarios para coordinar los diferenciales del **Tema 6 (Protecciones eléctricas)**.
- **Competencias que desarrolla:** Interpretación de ensayos de campo, cálculo de difusión de electrodos y mallas preliminares, auditoría instrumental de obra y validación crítica de cálculos matemáticos con IA.
- **Conexión con el tema anterior y posterior:**
  - *Tema anterior:* **Tema 9. Sistema de puesta a tierra** (Bloque 1, 9/11), donde se definieron las funciones de seguridad, tipos de electrodos, BEP y prevención de corrosión; aquí se cuantifica el comportamiento del terreno y la verificación instrumental.
  - *Tema posterior:* **Tema 11. Diagramas unifilares** (Bloque 1, 11/11), donde toda la ingeniería eléctrica del Bloque 1 —cargas, conductores, protecciones, esquema de tierras y valores de diseño de puesta a tierra— se sintetiza en el documento maestro gráfico del proyecto que conectará con el Bloque 2 (DIALux).
- **Evidencia de aprendizaje que dejará el alumnado:** Dos entregables en su portafolio técnico: (1) el Dictamen Técnico de Rediseño y Validación en Campo del caso *Industrias del Segura, S.L.*, y (2) el Acta Modelo de Comprobación de Tierra (62 %) junto con la hoja de cálculo auditada frente a errores de IA.

---

## Siguientes pasos para el formador

1. **Comprobar todas las fórmulas en la hoja Excel/Sheets** que se entregará al alumnado (especialmente uso de `LN()` y conversión de `d` mm a `r` m) antes de la clase.
2. **Preparar las 3 curvas ejemplo de caída de potencial** (una plana válida y dos sin meseta por distancia $E\text{–}C$ insuficiente) para proyectarlas en el Bloque B.
3. **Validar si el aula presencial dispone de telurómetro** o preparar un vídeo técnico contrastado de ensayo Wenner y 3 polos en campo (verificando enlace y vigencia antes de clase).
4. **Hacer hincapié reiterado durante el cierre** en que ningún cálculo teórico ni salida de ChatGPT/Claude sustituye al certificado calibrado de medición en obra con el puente abierto.
5. **Solicitar al alumnado que traiga al Tema 11** los datos definitivos de cuadros, líneas, protecciones y puesta a tierra calculados entre los Temas 8, 9 y 10 para integrarlos en el diagrama unifilar completo.
