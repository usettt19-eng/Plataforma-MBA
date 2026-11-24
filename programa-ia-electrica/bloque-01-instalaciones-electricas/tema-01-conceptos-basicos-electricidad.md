# Tema 1. Conceptos básicos de electricidad

> **Aviso técnico, normativo y de alcance profesional:** Este programa forma parte de una **especialización técnica en diseño de instalaciones eléctricas, iluminación (DIALux), modelado BIM (Revit MEP), visualización (Twinmotion) e IA aplicada**. No constituye un MBA ni habilita legalmente por sí solo para firmar proyectos, certificados o dictámenes eléctricos oficiales; la competencia legal depende en cada caso de la titulación, colegiación y normativa del país correspondiente. Asimismo, los ejemplos normativos citados son ilustrativos y **deben verificarse siempre frente al reglamento, autoridad competente y edición vigente** aplicables al proyecto.

---

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Conceptos básicos de electricidad |
| **Bloque y posición dentro del programa** | Bloque 1: Instalaciones eléctricas — Tema 1 de 11 (Tema 1 de 50 del programa; sesión inaugural) |
| **Programa formativo** | IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas (6 módulos / 50 temas) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Modalidad** | Online / Híbrida interactiva |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Conocimientos básicos de matemáticas aplicadas (álgebra elemental, trigonometría básica y notación científica), lectura inicial de planos y manejo básico de hoja de cálculo |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado calculará y documentará de forma trazable magnitudes eléctricas fundamentales (tensión, corriente, impedancia, potencias $P$, $Q$, $S$, factor de potencia y energía) en unidades del Sistema Internacional (SI), aplicando la ley de Ohm y las leyes de Kirchhoff para fundamentar memorias de cálculo y evitar errores conceptuales en BIM o con asistentes de IA. |

---

## 2. Objetivos de aprendizaje

Al concluir esta sesión de 4 horas, el alumnado será capaz de:

1. **Identificar** las magnitudes eléctricas básicas (tensión, intensidad de corriente, resistencia, reactancia, impedancia, potencia activa, reactiva y aparente, factor de potencia y energía), sus símbolos normalizados y sus unidades en el Sistema Internacional (SI). *(Nivel de Bloom: Recordar)*
2. **Diferenciar** los planos técnicos del programa —cálculo eléctrico normativo, cálculo fotométrico en DIALux, modelado geométrico en Revit MEP y visualización en Twinmotion— explicando por qué un modelo 3D o un render no validan el cálculo eléctrico. *(Nivel de Bloom: Comprender)*
3. **Aplicar** la ley de Ohm, las leyes de Kirchhoff (nodos y mallas) y el triángulo de potencias para determinar intensidades reales, caídas de tensión elementales y consumos energéticos en circuitos de baja tensión. *(Nivel de Bloom: Aplicar)*
4. **Analizar** memorias preliminares o fichas de carga con errores de unidades, confusión entre potencia activa ($W$) y aparente ($VA$) o ausencia de factor de potencia, cuantificando el impacto en la corriente de diseño. *(Nivel de Bloom: Analizar)*
5. **Evaluar** respuestas generadas por asistentes de IA (ChatGPT o Claude) sobre cálculos eléctricos elementales mediante verificación independiente paso a paso y protección de datos confidenciales del proyecto. *(Nivel de Bloom: Evaluar)*

---

## 3. Contenidos esenciales

### 3.1. Magnitudes eléctricas fundamentales y Sistema Internacional (SI)

#### Explicación breve y clara
Toda instalación eléctrica comienza por describir con precisión qué ocurre físicamente en sus conductores y equipos. Para que un proyectista eléctrico, un modelador BIM en Revit MEP y un instalador en obra hablen exactamente el mismo idioma sin ambigüedades, es obligatorio expresar cada magnitud con su **símbolo técnico correcto**, su **unidad del Sistema Internacional (SI)** y el **prefijo adecuado** ($\text{m}$, $\text{k}$, $\text{M}$).

En proyectos reales, gran parte de los fallos tempranos no provienen de matemáticas complejas, sino de **mezclar unidades** (por ejemplo, introducir vatios en campos configurados en kilovoltiamperios en Revit MEP, o confundir resistencia en corriente continua con impedancia en corriente alterna). Establecer una disciplina estricta de magnitudes desde el Tema 1 garantiza la coherencia entre la futura memoria de cálculo, el cuadro de cargas y los parámetros eléctricos del modelo tridimensional.

#### Conceptos clave
- **Tensión eléctrica ($U$ o $V$, voltio [V]):** diferencia de potencial eléctrico entre dos puntos que impulsa el flujo de carga eléctrica.
- **Intensidad de corriente ($I$, amperio [A]):** cantidad de carga eléctrica que atraviesa la sección de un conductor por unidad de tiempo; determina el calentamiento de cables y el calibre de protecciones.
- **Resistencia ($R$), reactancia ($X$) e impedancia ($Z$, ohmio [$\Omega$]):** oposición al paso de la corriente; en alterna coexisten la componente resistiva ($R$) y la reactiva inductiva o capacitiva ($X$), combinadas vectorialmente como $Z = \sqrt{R^2 + X^2}$.
- **Frecuencia ($f$, hercio [Hz]):** número de ciclos completos por segundo en corriente alterna (habitualmente $50\ \text{Hz}$ en Europa o $60\ \text{Hz}$ en gran parte de América; verificar siempre el país de diseño).

#### Definiciones necesarias
- **Sistema Internacional de Unidades (SI):** sistema metrológico normalizado que define las unidades base y derivadas ($\text{V}$, $\text{A}$, $\Omega$, $\text{W}$, $\text{J}$, $\text{Hz}$) junto con sus múltiplos decimales ($\text{k} = 10^3$, $\text{M} = 10^6$, $\text{m} = 10^{-3}$) para evitar errores de escala.
- **Impedancia ($Z$):** oposición total de un circuito al paso de una corriente alterna sinusoidal, expresada en ohmios ($\Omega$) y formada por una parte real ($R$) y una parte imaginaria ($X = X_L - X_C$).
- **Valor eficaz (*RMS*):** valor equivalente en corriente continua que produciría el mismo efecto térmico (potencia disipada en una resistencia) que una corriente o tensión alterna periódica; los valores nominales de red (como $230\ \text{V}$ o $400\ \text{V}$) son valores eficaces.

#### Ejemplo práctico realista
En un laboratorio de ensayos eléctricos situado en una nave industrial, una línea dedicada a $U = 230\ \text{V}$ eficaces ($50\ \text{Hz}$) alimenta un banco de resistencias calefactoras puras ($\cos\varphi = 1{,}00$) con una resistencia equivalente medida de $R = 11{,}5\ \Omega$ y resistencia de línea despreciable en primera aproximación.
- La corriente absorbida es $I = \frac{U}{R} = \frac{230\ \text{V}}{11{,}5\ \Omega} = 20{,}0\ \text{A}$.
- Si un técnico anota por error la potencia en la hoja de datos como $4{,}6\ \text{W}$ en lugar de $4{,}6\ \text{kW}$ ($4\,600\ \text{W}$), el parámetro de carga en Revit MEP quedará reducido por un factor de $1\,000$, distorsionando toda la previsión de demanda del cuadro.
*(Nota: los niveles de tensión nominales y tolerancias de suministro deben verificarse en el reglamento vigente y ante la distribuidora del país correspondiente).*

#### Errores frecuentes
- Escribir unidades en minúsculas o con notación incorrecta (`kw`, `Kva`, `amps`, `v`) rompiendo la legibilidad técnica y provocando fallos al importar tablas CSV/Excel.
- Tratar la impedancia ($Z$) como una suma aritmética simple $R + X$ en lugar de suma vectorial $\sqrt{R^2 + X^2}$.
- Asumir que los parámetros de potencia introducidos en un modelo geométrico Revit MEP validan automáticamente las magnitudes físicas sin revisar sus unidades de proyecto.
- Olvidar distinguir entre valores eficaces (*RMS*) y valores de pico ($\hat{U} = \sqrt{2} \cdot U_{\text{RMS}}$) al revisar documentación de equipos electrónicos o aislamientos.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué diferencia física y matemática existe entre resistencia ($R$), reactancia ($X$) e impedancia ($Z$) en un circuito de corriente alterna?
2. ¿Por qué los valores nominales habituales de diseño ($230\ \text{V}$ o $400\ \text{V}$) se expresan como valores eficaces (*RMS*) y no como valores máximos de pico?
3. ¿Qué riesgos de trazabilidad aparecen cuando en una memoria o modelo BIM se mezclan magnitudes en $\text{W}$, $\text{kW}$ y $\text{kVA}$ sin prefijos explícitos?

---

### 3.2. Ley de Ohm y leyes de Kirchhoff en circuitos de instalación

#### Explicación breve y clara
La **ley de Ohm** y las **leyes de Kirchhoff** constituyen el motor lógico que permite predecir cómo se reparten corrientes y tensiones en cualquier red de baja tensión, desde un simple circuito de alumbrado hasta un tablero general con múltiples derivaciones.

La ley de Ohm relaciona proporcionalmente tensión, corriente e impedancia ($U = I \cdot Z$). La **primera ley de Kirchhoff (ley de nodos)** garantiza la conservación de la carga: la suma de corrientes que entran en un embarrado o caja de derivación iguala a la suma de corrientes que salen. La **segunda ley de Kirchhoff (ley de mallas)** garantiza la conservación de la energía: la tensión en origen menos las caídas de tensión en los conductores debe igualar a la tensión disponible en bornes de la carga.

#### Conceptos clave
- **Ley de Ohm generalizada ($I = U / Z$):** permite calcular la corriente en régimen permanente o estimar corrientes de defecto cuando se conoce la impedancia del bucle.
- **Ley de nodos (1.ª Ley de Kirchhoff, $\sum I = 0$):** fundamento del equilibrio en embarrados de cuadros eléctricos, retorno por conductor neutro y detección de fugas en diferenciales.
- **Ley de mallas (2.ª Ley de Kirchhoff, $\sum V = 0$):** base física del cálculo de caídas de tensión tramo a tramo desde la acometida hasta el punto más desfavorable.
- **Circuito equivalente serie/paralelo:** abstracción utilizada para modelar tramos de cable en serie con receptores conectados en paralelo sobre una misma línea.

#### Definiciones necesarias
- **Ley de Ohm:** relación física que establece que la intensidad que circula por un elemento lineal es directamente proporcional a la diferencia de potencial aplicada e inversamente proporcional a su resistencia (en CC) o impedancia (en CA).
- **Nodo eléctrico:** punto de conexión común donde confluyen dos o más ramas de un circuito (por ejemplo, una borna de reparto o el embarrado de fases de un cuadro eléctrico).
- **Malla eléctrica:** todo recorrido cerrado dentro de un circuito eléctrico cuya suma algebraica de diferencias de potencial instantáneas (o fasoriales en CA) es igual a cero.

#### Ejemplo práctico realista
Un circuito monofásico a $U_{\text{origen}} = 230\ \text{V}$ en un local comercial alimenta un grupo de proyectores LED que absorben en conjunto $I = 12{,}0\ \text{A}$ (aproximación resistiva en este ejemplo). El cable de alimentación recorre $L = 35\ \text{m}$ (ida y vuelta suman $70\ \text{m}$ de conductor activo), con una resistencia total medida del bucle fase-neutro de $R_{\text{bucle}} = 0{,}45\ \Omega$.
- Por la ley de Ohm aplicada al conductor: $\Delta U_{\text{cable}} = I \cdot R_{\text{bucle}} = 12{,}0\ \text{A} \times 0{,}45\ \Omega = 5{,}4\ \text{V}$ (equivale al $2{,}35\ \%$ de $230\ \text{V}$).
- Por la 2.ª Ley de Kirchhoff en la malla: $U_{\text{carga}} = U_{\text{origen}} - \Delta U_{\text{cable}} = 230\ \text{V} - 5{,}4\ \text{V} = 224{,}6\ \text{V}$.
- Por la 1.ª Ley de Kirchhoff en el empalme de la primera luminaria ($I_{\text{lum1}} = 4{,}0\ \text{A}$), la corriente que continúa hacia el resto del ramal será $12{,}0\ \text{A} - 4{,}0\ \text{A} = 8{,}0\ \text{A}$.
*(Nota: los límites admisibles de caída de tensión y el efecto inductivo de la reactancia se comprobarán según el reglamento aplicable en cada país).*

#### Errores frecuentes
- Olvidar el trayecto de **ida y vuelta** ($2 \cdot L$) al calcular la resistencia de un circuito monofásico mediante la ley de Ohm.
- Sumar corrientes de ramas en corriente alterna sin tener en cuenta su ángulo de fase cuando existen cargas con distinto factor de potencia.
- Desconocer que la 1.ª Ley de Kirchhoff aplicada a fase y neutro es precisamente lo que mide un interruptor diferencial para detectar fugas a tierra.
- Confundir la tensión nominal de la fuente con la tensión real en bornes de una máquina distante tras descontar la caída de tensión.

#### Preguntas que el alumnado debería poder responder
1. ¿Cómo explica la 2.ª Ley de Kirchhoff la pérdida de tensión que experimenta un motor alejado del cuadro general?
2. Si en una caja de derivación monofásica entran $16\ \text{A}$ por la fase y salen $9\ \text{A}$ hacia tomas de corriente, ¿cuánta corriente circula hacia el circuito restante si no hay fugas?
3. ¿Por qué en corriente alterna no siempre basta con sumar aritméticamente las corrientes eficaces de dos cargas conectadas al mismo nodo?

---

### 3.3. Potencia activa ($P$), reactiva ($Q$), aparente ($S$), factor de potencia ($\cos\varphi$) y energía ($E$)

#### Explicación breve y clara
En corriente continua la potencia es simplemente el producto $P = U \cdot I$. Sin embargo, en las instalaciones de corriente alterna con motores, transformadores, equipos de climatización o electrónica de potencia, parte de la energía oscila entre la red y los campos magnéticos o eléctricos de las cargas sin convertirse en trabajo útil. De ahí nacen las tres potencias del **triángulo de potencias**: potencia activa ($P$, en vatios o kilovatios), potencia reactiva ($Q$, en voltamperios reactivos) y potencia aparente ($S$, en voltamperios o kilovoltiamperios).

Dominar esta distinción es crucial para todo proyectista eléctrico y coordinador BIM: los transformadores, conductores e interruptores soportan **corriente total**, la cual depende de la **potencia aparente ($S$)** y no solo de la potencia activa ($P$). Ignorar el factor de potencia ($\cos\varphi$) subestima sistemáticamente la corriente real de los circuitos.

#### Conceptos clave
- **Potencia activa ($P$, W / kW):** potencia real transformada en trabajo útil, luz o calor; en trifásico equilibrado, $P = \sqrt{3} \cdot U_L \cdot I_L \cdot \cos\varphi$.
- **Potencia reactiva ($Q$, var / kvar):** potencia intercambiada para crear campos magnéticos (inductiva, habitual en motores) o eléctricos (capacitiva); no realiza trabajo mecánico pero circula por los cables.
- **Potencia aparente ($S$, VA / kVA):** potencia total demandada a la red eléctrica ($S = \sqrt{P^2 + Q^2} = U \cdot I$ en monofásico; $\sqrt{3} \cdot U_L \cdot I_L$ en trifásico).
- **Factor de potencia ($\cos\varphi$ o FP) y energía ($E$, Wh / kWh):** relación entre potencia activa y aparente ($\cos\varphi = P/S$ en régimen sinusoidal); la energía es la potencia integrada en el tiempo ($E = P \cdot t$).

#### Definiciones necesarias
- **Triángulo de potencias:** representación geométrica rectangular donde el cateto adyacente es la potencia activa ($P$), el cateto opuesto es la potencia reactiva ($Q$), la hipotenusa es la potencia aparente ($S$) y el ángulo comprendido es $\varphi$.
- **Factor de potencia ($\text{FP}$):** cociente $P / S$ que mide qué fracción de la potencia aparente suministrada se convierte en potencia activa útil; toma valores entre $0$ y $1$ (en ausencia de armónicos coincide con $\cos\varphi$).
- **Energía eléctrica ($E$):** trabajo eléctrico realizado o consumido durante un intervalo temporal determinado, medido habitualmente en kilovatios-hora ($1\ \text{kWh} = 3{,}6 \times 10^6\ \text{J}$) a efectos de facturación y eficiencia energética.

#### Ejemplo práctico realista
Un extractor centrífugo de ventilación industrial conectado a una red trifásica equilibrada de $U_L = 400\ \text{V}$ ($50\ \text{Hz}$) demanda una potencia activa eléctrica de $P = 4{,}50\ \text{kW}$ con un factor de potencia inductivo $\cos\varphi = 0{,}80$.
1. **Potencia aparente:** $S = \frac{P}{\cos\varphi} = \frac{4{,}50\ \text{kW}}{0{,}80} = 5{,}625\ \text{kVA}$.
2. **Potencia reactiva:** $Q = \sqrt{S^2 - P^2} = \sqrt{5{,}625^2 - 4{,}50^2} = 3{,}375\ \text{kvar}$.
3. **Intensidad de línea:** $I_L = \frac{S}{\sqrt{3} \cdot U_L} = \frac{5\,625\ \text{VA}}{\sqrt{3} \cdot 400\ \text{V}} \approx 8{,}12\ \text{A}$ (si se hubiera omitido $\cos\varphi$, se habría calculado erróneamente $6{,}50\ \text{A}$).
4. **Energía activa en un mes laboral** ($8\ \text{h/día} \times 22\ \text{días} = 176\ \text{h}$): $E = 4{,}50\ \text{kW} \times 176\ \text{h} = 792\ \text{kWh}$.
*(Nota: cuando se parte de la potencia mecánica en eje en kW del motor, debe dividirse además por el rendimiento eléctrico $\eta$ para obtener $P_{\text{eléctrica}}$ antes de calcular $S$ e $I_L$).*

#### Errores frecuentes
- Dividir la potencia activa en kW directamente entre la tensión para obtener amperios, olvidando el factor de potencia ($\cos\varphi$) y el rendimiento del motor ($\eta$).
- Confundir potencia ($\text{kW}$, tasa instantánea) con energía ($\text{kWh}$, consumo acumulado en el tiempo) en memorias técnicas o auditorías.
- Sumar algebraicamente las potencias aparentes ($S_1 + S_2$) de cargas con distinto factor de potencia en lugar de sumar por separado $P_{\text{total}} = \sum P_i$ y $Q_{\text{total}} = \sum Q_i$.
- Confundir $\cos\varphi$ (desfase de la onda fundamental) con el factor de potencia total cuando existen cargas no lineales con alta distorsión armónica (THD).

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué un transformador o un grupo electrógeno se especifican en $\text{kVA}$ y no en $\text{kW}$?
2. ¿Cómo cambia la intensidad que circula por una línea trifásica de $400\ \text{V}$ si una carga de $10\ \text{kW}$ pasa de $\cos\varphi = 0{,}95$ a $\cos\varphi = 0{,}70$?
3. ¿Cuál es el procedimiento correcto para calcular la potencia aparente total de un cuadro que alimenta cargas con distintos factores de potencia?

---

### 3.4. Documentación trazable de magnitudes y uso responsable de IA como apoyo didáctico

#### Explicación breve y clara
A lo largo de los 6 módulos de este programa se integran herramientas especializadas con funciones claramente separadas que jamás deben confundirse:
- **Cálculo eléctrico normativo** (hojas de cálculo trazables, software electrotécnico verificado y memoria de cálculo): garantiza seguridad, ampacidad, caídas de tensión y protecciones según el reglamento vigente.
- **Cálculo fotométrico en DIALux:** evalúa iluminancias (lux), uniformidades y deslumbramiento (UGR) con archivos fotométricos (`.ldt`/`.ies`), no la protección eléctrica de los cables.
- **Modelado geométrico BIM en Revit MEP:** coordina recorridos 3D, familias, parámetros y documentación de planos, pero la geometría completa no certifica cumplimiento reglamentario.
- **Visualización fotorrealista en Twinmotion:** comunica espacialmente materiales e iluminación mediante imágenes o vídeos, sin validez de cálculo eléctrico ni fotométrico oficial.

La Inteligencia Artificial generativa (ChatGPT, Claude) puede acelerar la redacción de listas de comprobación, la conversión de unidades o la explicación paso a paso de ecuaciones eléctricas, **siempre que el técnico competente formule prompts estructurados con datos anonimizados y valide de manera independiente cada fórmula, unidad y resultado**.

#### Conceptos clave
- **Separación de competencias por herramienta:** distinguir explícitamente qué resuelve la ingeniería eléctrica normativa, DIALux, Revit MEP, Twinmotion y un asistente de IA.
- **Trazabilidad documental:** registrar hipótesis, datos de entrada, fórmulas aplicadas, unidades SI y fuente de verificación en cada hoja de cálculo.
- **Verificación independiente obligatoria:** recalcular manualmente o mediante hoja auditada cualquier cifra o fórmula generada por un modelo de lenguaje antes de incorporarla al proyecto.
- **Anonimización y confidencialidad:** eliminar nombres de clientes, direcciones reales, planos propietarios o datos sensibles antes de consultar asistentes de IA externos sin autorización expresa.

#### Definiciones necesarias
- **Alucinación técnica en IA:** respuesta plausible en apariencia y bien redactada generada por un modelo de lenguaje que contiene errores matemáticos, unidades inconsistentes o citas reglamentarias inexistentes o desactualizadas.
- **Hoja de cálculo trazable:** documento técnico estructurado donde cada celda calculada muestra su fórmula explícita, unidades SI de entrada y salida, hipótesis asumidas y casilla de verificación humana.

#### Ejemplo práctico realista
Un proyectista consulta a ChatGPT para comprobar la corriente de una carga trifásica de $15\ \text{kW}$ a $400\ \text{V}$ con $\cos\varphi = 0{,}85$, pero en su prompt olvida indicar si es monofásica o trifásica y pega datos reales de un cliente confidencial. La IA asume monofásico y devuelve $I = 15\,000 / (400 \times 0{,}85) = 44{,}12\ \text{A}$ (cuando en trifásico correcto es $15\,000 / (\sqrt{3} \times 400 \times 0{,}85) = 25{,}47\ \text{A}$). El proyectista aplica el protocolo del curso: (1) anonimiza cualquier dato del proyecto antes de consultar, (2) especifica explícitamente sistema, tensión de línea, unidades SI y fórmula esperada, y (3) realiza la comprobación independiente en su hoja de cálculo antes de trasladar el dato a Revit MEP.

#### Errores frecuentes
- Confiar en cálculos numéricos de ChatGPT o Claude sin reescribir y verificar la fórmula en calculadora o hoja de cálculo independiente.
- Subir planos DWG/PDF reales o especificaciones confidenciales de clientes a herramientas de IA públicas sin permiso contractual.
- Asumir que un modelo en Revit MEP con conectores eléctricos rellenos o un render en Twinmotion prueban que las magnitudes eléctricas son correctas.
- Omitir la fila de «Unidades» e «Hipótesis» en las tablas de cálculo compartidas entre ingeniería eléctrica y coordinación BIM.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué completar un modelo 3D en Revit MEP y renderizarlo en Twinmotion no demuestra que el diseño eléctrico cumpla la normativa?
2. ¿Qué cuatro elementos mínimos debe comprobar un técnico al revisar una operación matemática entregada por ChatGPT o Claude?
3. ¿Qué precauciones de confidencialidad deben aplicarse antes de pegar tablas de cargas o memorias de proyecto en un asistente de IA?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** combina microaprendizaje conceptual, resolución guiada paso a paso, análisis de un caso industrial real, contraste crítico de salidas de IA y transferencia directa a una plantilla de cálculo verificable.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
|---|---|---|---|
| **1. Apertura, encuadre del programa y activación** | 00:00 – 00:30 (30 min) | Presenta el mapa de los 6 módulos / 50 temas, aclara el alcance técnico-legal (no MBA, sin habilitación automática de firma), delimita herramientas (cálculo vs. DIALux vs. Revit MEP vs. Twinmotion) y lanza la **Actividad 1** de diagnóstico visual. | Responde al sondeo diagnóstico inicial de magnitudes SI y participa en la Actividad 1 identificando errores de unidades y confusión entre potencia, energía y modelado 3D. |
| **2. Microlearning A: Magnitudes SI, Ohm y Kirchhoff** | 00:30 – 01:05 (35 min) | Expone los apartados 3.1 y 3.2 mediante diagramas de nodos y mallas aplicados a líneas reales de baja tensión; resuelve en directo un cálculo de caída de tensión elemental paso a paso. | Toma notas en su ficha de trabajo, plantea dudas sobre impedancia vs. resistencia y verifica en pareja la resolución de un bucle monofásico sencillo. |
| **3. Microlearning B: Triángulo de potencias ($P, Q, S$) y energía** | 01:05 – 01:40 (35 min) | Explica el apartado 3.3 diferenciando potencia activa, reactiva y aparente en motores y cargas mixtas; muestra el impacto real de $\cos\varphi$ sobre la corriente en conductores. | Completa ejercicios guiados de cálculo de $P, Q, S, \cos\varphi, I$ y $\text{kWh}$ en su hoja de cálculo personal y contrasta resultados numéricos en plenario. |
| **4. Actividad práctica de aplicación técnica** | 01:40 – 02:15 (35 min) | Lanza la **Actividad 2** (auditoría de ficha técnica y revisión crítica de cálculo generado por IA); circula por salas/mesas validando que el alumnado recalcule de forma independiente. | Audita 4 fichas con fallos de magnitudes, recalcula las intensidades reales y detecta alucinaciones numéricas en dos respuestas simuladas de IA. |
| **Descanso activo** | 02:15 – 02:30 (15 min) | Propone pausa de desconexión y habilita buzón de dudas técnicas para la segunda mitad de la sesión. | Descansa fuera de pantalla y registra dudas puntuales sobre unidades o uso de IA. |
| **5. Estudio del caso práctico** | 02:30 – 03:15 (45 min) | Introduce el caso de *Taller Mecánico IberMotor S.L.*, organiza grupos de 3–4 personas, aclara los datos disponibles y supervisa el uso correcto del triángulo de potencias. | Analiza el caso en equipo, calcula $P_{\text{tot}}, Q_{\text{tot}}, S_{\text{tot}}$ e $I_{\text{real}}$, identifica por qué disparaba la protección y redacta las acciones correctivas. |
| **6. Discusión guiada y transferencia a plantilla real** | 03:15 – 03:45 (30 min) | Modera la puesta en común de 2–3 equipos sobre el caso y guía la **Actividad 3** (adaptación de la plantilla de hoja de datos eléctricos SI para proyecto real). | Contrasta sus resultados del caso práctico y construye su propia hoja base de documentación de cargas con campos SI verificables y control de revisión. |
| **7. Síntesis, evaluación sumativa y cierre** | 03:45 – 04:00 (15 min) | Sintetiza los 5 principios clave de rigor eléctrico y uso seguro de IA, aplica el cuestionario sumativo final y enlaza con el Tema 2 (Tipos de sistemas eléctricos). | Completa el test sumativo breve (6 preguntas), realiza la autoevaluación de cierre y guarda su plantilla para usarla en las sesiones siguientes. |

**Total exacto:** 30 + 35 + 35 + 35 + 15 + 45 + 30 + 15 = **240 minutos (4 horas)**.

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «Cazadores de unidades rotas»

- **Objetivo**: Activar conocimientos previos sobre magnitudes eléctricas, unidades SI y diferenciación entre cálculo eléctrico, fotométrico, BIM y renderizado mediante la detección rápida de errores reales de documentación.
- **Instrucciones para el alumnado**:
  1. Observa las 6 tarjetas proyectadas con extractos de correos de obra, parámetros de Revit MEP y notas de taller (por ejemplo: «Luminaria de 45 kW en oficina», «Cuadro alimentado a 230 V con consumo de 400 kWh instantáneos», «El render en Twinmotion se ve uniforme, así que la línea cumple normativa»).
  2. Durante 7 minutos, marca individualmente qué magnitud o unidad está mal empleada y qué herramienta debería validar realmente cada afirmación.
  3. Comparte en plenario (8 minutos) cuál es la confusión más frecuente en tu entorno laboral y cómo afectaría a un presupuesto o montaje.
- **Materiales necesarios**: Presentación con 6 tarjetas de error y herramienta de encuesta interactiva (Mentimeter/Slido o tarjetas impresas).
- **Tiempo estimado**: 15 minutos (integrados en la Fase 1).
- **Rol del formador**: Dinamizar la votación sin juzgar fallos iniciales, aclarar inmediatamente la diferencia entre $\text{kW}$ y $\text{kWh}$ y recalcar los límites de DIALux, Revit MEP y Twinmotion.
- **Producto o entregable esperado**: Lista grupal validada de los 6 errores identificados con su unidad SI o disciplina correcta.
- **Criterios de éxito**: Al menos el 90 % del alumnado distingue potencia ($\text{W}/\text{kW}/\text{kVA}$) de energía ($\text{kWh}$) y separa cálculo eléctrico normativo de modelado BIM y renderizado visual.

### Actividad 2 (Aplicación técnica): Auditoría de cálculos eléctricos y revisión crítica de salidas de IA

- **Objetivo**: Aplicar la ley de Ohm, el triángulo de potencias y la comprobación independiente para corregir errores de diseño elemental y detectar fallos en respuestas generadas por IA.
- **Instrucciones para el alumnado**:
  1. En parejas o tríos, descargad la hoja de trabajo con 3 ejercicios numéricos de baja tensión (un circuito de resistencias a $230\ \text{V}$, una línea monofásica de $40\ \text{m}$ con cálculo de $\Delta U$ y un motor trifásico a $400\ \text{V}$ con $\cos\varphi = 0{,}82$) más 2 capturas simuladas de respuestas de un asistente de IA con errores sutiles (confusión entre $P$ y $S$, olvido del factor $\sqrt{3}$ o datos no anonimizados).
  2. Durante 25 minutos, resolved los 3 ejercicios manualmente/en hoja de cálculo paso a paso con unidades SI explícitas y auditad las 2 salidas de IA marcando en rojo cada fallo técnico o de confidencialidad.
  3. Durante 10 minutos, contrastad vuestras cifras con la pareja vecina y verificad las diferencias.
- **Materiales necesarios**: Ficha de ejercicios de la Actividad 2, calculadora científica o hoja de cálculo (Excel/LibreOffice Calc) y lista de comprobación de revisión de IA.
- **Tiempo estimado**: 35 minutos (Fase 4).
- **Rol del formador**: Supervisar el trabajo por salas/mesas, orientar en la suma vectorial de potencias $P$ y $Q$, y reforzar el hábito de verificar siempre las salidas de ChatGPT/Claude.
- **Producto o entregable esperado**: Hoja de resolución verificada con cálculos intermedios, unidades SI y anotación crítica de los errores detectados en las respuestas de IA.
- **Criterios de éxito**: Resolución numérica exacta en al menos 2 de los 3 circuitos (tolerancia $\pm 1\ \%$ por redondeo) e identificación completa de las alucinaciones de cálculo y fallos de privacidad en la IA.

### Actividad 3 (Transferencia a proyecto real): Construcción de una Ficha Trazable de Cargas y Prompts Seguros

- **Objetivo**: Transferir los fundamentos de magnitudes SI, triángulo de potencias y control documental a una plantilla operativa utilizable desde hoy en proyectos propios o en la preparación de modelos BIM.
- **Instrucciones para el alumnado**:
  1. Toma la plantilla técnica práctica de la Sección 8 (*Ficha Trazable de Magnitudes y Cargas Eléctricas*) y selecciona 4 equipos reales o representativos de un proyecto propio (por ejemplo, alumbrado de zona, bomba de presión, unidad climatizadora y toma de taller), anonimizando cualquier nombre o ubicación real del cliente.
  2. Durante 20 minutos, rellena para cada carga: tensión nominal, sistema, $P$ ($\text{kW}$), $\cos\varphi$, calcula mediante fórmulas explícitas $Q$ ($\text{kvar}$), $S$ ($\text{kVA}$) e $I$ ($\text{A}$), y añade la columna de «Fuente de dato» y «Revisión independiente».
  3. Redacta un prompt estructurado y anonimizado de 5 líneas para pedir a una IA una verificación conceptual de unidades o explicación de fórmula, incluyendo la instrucción de no inventar normativas.
- **Materiales necesarios**: Plantilla técnica práctica en hoja de cálculo y ficha de trabajo de la sesión.
- **Tiempo estimado**: 20 minutos (integrados en la Fase 6).
- **Rol del formador**: Mostrar un ejemplo completo de 2 filas en pantalla durante 3 minutos y revisar aleatoriamente 3 plantillas comprobando fórmulas activas (sin valores introducidos «a mano» en celdas calculadas).
- **Producto o entregable esperado**: Hoja de cálculo funcional con 4 cargas parametrizadas en unidades SI y un prompt seguro anonimizado listo para auditar.
- **Criterios de éxito**: Todas las celdas calculadas ($Q, S, I$) emplean fórmulas explícitas correctas, las unidades SI son coherentes en toda la tabla y el prompt carece de datos confidenciales.

---

## 6. Caso práctico

### Caso práctico: *Taller Mecánico IberMotor S.L.* — Disparo misterioso en la línea de ampliación

#### Contexto empresarial
**Taller Mecánico IberMotor S.L.** es una pyme de automoción y reparación de vehículos industriales ubicada en Guadalajara (España), con una plantilla de 14 personas. Hace seis meses ampliaron una zona anexa del taller para instalar un compresor auxiliar de aire y un puesto móvil de soldadura inverter, contratando a un proyectista junior externo que modeló el espacio en un visor 3D preliminar y entregó una hoja de cálculo resumida sin memoria de verificación detallada.

#### Situación o problema
Desde la puesta en marcha simultánea del compresor y el equipo de soldadura, el interruptor automático general de esa línea derivada (de $25\ \text{A}$ nominales en un circuito monofásico de $230\ \text{V}$, $50\ \text{Hz}$) dispara por sobrecarga térmica tras 12 a 15 minutos de trabajo continuo.

Al revisar la documentación entregada por el proyectista junior, el responsable técnico detecta cuatro problemas graves:
1. Para dimensionar la línea, el proyectista sumó únicamente las potencias activas ($P_1 + P_2$) y dividió entre $230\ \text{V}$, ignorando por completo el factor de potencia ($\cos\varphi$) de ambos equipos.
2. En una nota al pie justificó que «consultó la fórmula a ChatGPT pegando la factura y los planos con los datos reales del cliente, y la IA confirmó que $25\ \text{A}$ bastaban».
3. En la ficha de parámetros exportada para el modelo Revit MEP anotó $5{,}4\ \text{kVA}$ en el campo de potencia aparente, cuando ese número correspondía a los $\text{kW}$ activos.
4. No verificó la caída de tensión acumulada en los $30\ \text{m}$ de línea ni comprobó qué reglamento nacional y condiciones de instalación aplicaban exactamente en ese local.

#### Datos disponibles

| Parámetro / Carga | Valor nominal documentado | Observación técnica |
|---|---|---|
| **Suministro del circuito derivado** | Monofásico $U = 230\ \text{V}$ eficaces, $f = 50\ \text{Hz}$ | Longitud de línea desde cuadro: $L = 30\ \text{m}$ ($60\ \text{m}$ ida + vuelta) |
| **Carga 1: Compresor auxiliar** | $P_1 = 2{,}20\ \text{kW}$ (potencia eléctrica absorbida), $\cos\varphi_1 = 0{,}75$ inductivo | Régimen continuo durante ciclos de llenado |
| **Carga 2: Soldadora inverter** | $P_2 = 3{,}20\ \text{kW}$ (potencia eléctrica absorbida), $\cos\varphi_2 = 0{,}80$ inductivo | Uso simultáneo en horas punta del taller |
| **Impedancia aproximada del cable** | Resistencia de bucle medida $R_{\text{bucle}} \approx 0{,}36\ \Omega$ | Efecto reactivo del cable despreciado en esta comprobación inicial |
| **Protección instalada actualmente** | Interruptor automático de $I_n = 25\ \text{A}$ | Dispara repetidamente a los 12–15 min de uso simultáneo |
| **Cálculo erróneo del proyectista** | $I_{\text{calc}} = \frac{5\,400\ \text{W}}{230\ \text{V}} = 23{,}48\ \text{A} < 25\ \text{A}$ | Ignoró $\cos\varphi$, confundió $\text{kW}$ con $\text{kVA}$ y usó IA sin verificar ni anonimizar |

#### Preguntas de análisis
1. Calcula paso a paso la potencia aparente ($S_1$, $S_2$), la potencia reactiva ($Q_1$, $Q_2$), la potencia aparente total ($S_{\text{tot}}$), el factor de potencia global ($\cos\varphi_{\text{global}}$) y la intensidad real ($I_{\text{real}}$) cuando ambos equipos operan a la vez.
2. Explica físicamente por qué el interruptor de $25\ \text{A}$ dispara a los pocos minutos aunque la potencia activa total sea «solo» $5{,}40\ \text{kW}$.
3. Aplicando la ley de Ohm y la 2.ª Ley de Kirchhoff, calcula la caída de tensión aproximada ($\Delta U$) en el tramo de $30\ \text{m}$ con la corriente real y la tensión que llega a los equipos.
4. Identifica los errores de método respecto al uso de Revit MEP, ChatGPT y la trazabilidad normativa del proyecto.

#### Tarea a realizar
En equipos de 3–4 personas (30 minutos de trabajo + 15 minutos de puesta en común), elaborad un **Informe Técnico de Diagnóstico y Corrección** (1 página) que incluya:
1. Tabla verificada con las magnitudes eléctricas reales en unidades SI ($P$, $Q$, $S$, $\cos\varphi$, $I_{\text{real}}$, $\Delta U$ y $\Delta U\ \%$).
2. Explicación clara de por qué la suma directa de $S_1 + S_2$ difiere ligeramente del cálculo vectorial $\sqrt{P_{\text{tot}}^2 + Q_{\text{tot}}^2}$.
3. Tres recomendaciones técnicas inmediatas (separar circuitos o recalcular alimentación/protección tras verificar normativa vigente, corregir parámetros en Revit MEP y valorar compensación o redistribución).
4. Protocolo de 4 reglas para volver a utilizar IA de apoyo en la oficina sin comprometer seguridad técnica ni privacidad de clientes.

#### Posibles soluciones o criterios de análisis
Un análisis riguroso del caso debe alcanzar los siguientes resultados y conclusiones:
- **Cálculo por carga:**
  - Compresor: $S_1 = \frac{2{,}20}{0{,}75} = 2{,}933\ \text{kVA}$; $Q_1 = \sqrt{2{,}933^2 - 2{,}20^2} \approx 1{,}940\ \text{kvar}$.
  - Soldadora: $S_2 = \frac{3{,}20}{0{,}80} = 4{,}000\ \text{kVA}$; $Q_2 = \sqrt{4{,}000^2 - 3{,}20^2} = 2{,}400\ \text{kvar}$.
- **Total del circuito (suma de $P$ y suma de $Q$):**
  - $P_{\text{tot}} = 2{,}20 + 3{,}20 = 5{,}40\ \text{kW}$.
  - $Q_{\text{tot}} = 1{,}940 + 2{,}400 = 4{,}340\ \text{kvar}$.
  - $S_{\text{tot}} = \sqrt{5{,}40^2 + 4{,}340^2} = \sqrt{29{,}16 + 18{,}836} \approx 6{,}928\ \text{kVA}$ (nota: sumar $S_1 + S_2$ daría $6{,}933\ \text{kVA}$, muy cercano aquí porque $\cos\varphi$ es parecido, pero conceptualmente solo es exacto sumar $P$ y $Q$ por separado).
  - $\cos\varphi_{\text{global}} = \frac{5{,}40}{6{,}928} \approx 0{,}779$.
- **Intensidad real y causa del disparo:**
  - $I_{\text{real}} = \frac{6\,928\ \text{VA}}{230\ \text{V}} \approx 30{,}12\ \text{A}$. Al superar los $25\ \text{A}$ ($I_{\text{real}} / I_n \approx 1{,}20$), la lámina bimetálica térmica del interruptor automático actúa a los pocos minutos por sobrecarga sostenida.
- **Caída de tensión estimada:**
  - $\Delta U = I_{\text{real}} \cdot R_{\text{bucle}} = 30{,}12\ \text{A} \times 0{,}36\ \Omega \approx 10{,}84\ \text{V}$ ($\approx 4{,}71\ \%$ respecto a $230\ \text{V}$); tensión en bornes $U_{\text{carga}} \approx 219{,}16\ \text{V}$ (a contrastar con los límites del reglamento aplicable y verificando la sección real del cable, tema que se ampliará en los Temas 3 y 5).
- **Corrección BIM, normativa e IA:** corregir el parámetro de potencia aparente en Revit MEP ($6{,}93\ \text{kVA}$, no $5{,}4\ \text{kVA}$), desdoblar en dos circuitos independientes o redimensionar completamente línea y protección conforme al reglamento vigente (REBT en España en este ejemplo ilustrativo, a verificar por técnico competente), no subir nunca planos/facturas de clientes a ChatGPT y comprobar manualmente cada cifra generada por IA.

#### Preguntas de reflexión final
- ¿Qué impacto económico, de seguridad y de reputación tiene un error aparentemente pequeño como omitir $\cos\varphi$ al pasar de la memoria de cálculo al modelo BIM?
- En tu práctica actual, ¿qué dato o fórmula sueles dar por sentado sin verificar sus unidades SI ni su fuente normativa?

---

## 7. Evaluación

### Evaluación diagnóstica
- **Instrumento:** Sondeo interactivo inicial de 5 preguntas rápidas (respuesta múltiple) al comienzo de la Fase 1 sobre equivalencia entre $\text{kW}$, $\text{kVA}$ y $\text{kWh}$, relación de Ohm, leyes de Kirchhoff y alcance de DIALux/Revit/Twinmotion frente al cálculo eléctrico.
- **Propósito:** Detectar confusiones previas de unidades o conceptos básicos antes de iniciar los ejercicios de cálculo. No computa para calificación.

### Evaluación formativa
- **Observación directa y retroalimentación inmediata** durante la Actividad 2 (auditoría de 3 circuitos y detección de fallos en IA) y durante el desarrollo del caso *Taller Mecánico IberMotor S.L.*
- **Lista de cotejo en proceso:** comprobación de que el alumnado emplea unidades SI consistentes, calcula $P$ y $Q$ antes de obtener $S$, evita fórmulas ocultas sin respaldo y anonimiza datos en sus prompts.

### Evaluación sumativa
Consta de dos evidencias obligatorias:
1. **Cuestionario técnico breve (6 preguntas de cálculo y criterio, 10 minutos, 40 % de la nota del tema):** evalúa ley de Ohm, nodos/mallas, triángulo de potencias, conversión de unidades SI, diferenciación de herramientas y límites de la IA.
2. **Entregable combinado: Informe del caso *IberMotor S.L.* + Ficha Trazable de Cargas en unidades SI (Actividad 3) (60 % de la nota del tema)**, evaluado con la rúbrica siguiente.

### Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
|---|---|---|---|---|
| **1. Precisión en magnitudes y unidades SI** | Mezcla unidades ($\text{W}$, $\text{kW}$, $\text{kVA}$, $\text{kWh}$) o emplea notación incorrecta provocando errores de escala. | Emplea la mayoría de unidades correctamente, pero omite prefijos o comete errores puntuales entre potencia y energía. | Utiliza con rigor símbolos y unidades SI ($\text{V}$, $\text{A}$, $\Omega$, $\text{W}$, $\text{var}$, $\text{VA}$, $\text{kWh}$) en todo el entregable. | Mantiene coherencia metrológica absoluta entre memoria, hoja de cálculo y campos equivalentes para BIM, añadiendo conversiones claras. |
| **2. Aplicación de Ohm, Kirchhoff y triángulo de potencias** | No logra plantear el cálculo de corriente o ignora el factor de potencia al calcular intensidades en CA. | Aplica la ley de Ohm en cargas resistivas, pero suma $S_1 + S_2$ directamente o comete fallos al despejar $Q$ y $\cos\varphi$. | Calcula correctamente $P, Q, S, \cos\varphi$, intensidades reales y caídas de tensión elementales mediante Ohm y Kirchhoff. | Resuelve con exactitud todos los cálculos, justifica el impacto físico del desfase y anticipa efectos sobre protecciones y caídas de tensión. |
| **3. Trazabilidad y diferenciación de herramientas** | Confunde el modelado 3D en Revit o el render en Twinmotion con validación eléctrica, o entrega cifras sin fórmulas visibles. | Distingue las herramientas parcialmente, pero deja celdas de cálculo con valores fijos sin trazabilidad ni hipótesis. | Separa claramente cálculo eléctrico, DIALux, Revit MEP y Twinmotion; entrega hoja con fórmulas visibles y notas de verificación normativa. | Estructura una plantilla auditable profesional lista para escalar a cuadros de cargas, con supuestos explícitos y trazabilidad completa. |
| **4. Uso crítico y seguro de la IA** | Acepta cálculos erróneos de IA sin comprobar o introduce datos sensibles reales de clientes en prompts abiertos. | Detecta errores evidentes en salidas de IA, pero no plantea verificación matemática completa ni reglas claras de privacidad. | Verifica independientemente todas las fórmulas/resultados de la IA y aplica anonimización sistemática de datos de proyecto. | Diseña prompts técnicos acotados, documenta el contraste independiente y señala explícitamente la necesidad de verificación normativa por técnico competente. |

### Actividad de autoevaluación
Al finalizar la sesión, cada participante responde brevemente por escrito en su ficha o campus virtual:
1. *¿Qué diferencia entre potencia activa ($P$), aparente ($S$) y energía ($E$) puedo explicar ahora con un ejemplo numérico sin dudar?*
2. *Si mañana recibo un cálculo eléctrico generado por un compañero con ayuda de ChatGPT, ¿qué tres comprobaciones rápidas haré antes de aceptarlo?*
3. *¿Cuál es mi principal área de refuerzo antes del Tema 2 (por ejemplo, trigonometría del factor de potencia, Kirchhoff o uso de fórmulas en hoja de cálculo)?*

---

## 8. Materiales y recursos

### Guion de diapositivas

| Diapositiva | Título y objetivo visual | Contenido clave y notas del formador |
|---|---|---|
| **Slide 1** | **Portada y encuadre del programa** | Título del Tema 1, mapa de los 6 módulos (50 temas), aviso técnico-legal (formación especializada, no MBA, sin habilitación automática de firma) y 5 objetivos Bloom. |
| **Slide 2** | **Mapa de herramientas y fronteras técnicas** | Diagrama comparativo de 4 columnas: Cálculo eléctrico normativo vs. DIALux (fotometría) vs. Revit MEP (geometría BIM) vs. Twinmotion (render). |
| **Slide 3** | **Magnitudes fundamentales y rigor SI** | Tabla visual de $U, I, R, X, Z, f$ con símbolos, unidades SI y prefijos habituales; errores típicos de importación en tablas BIM. |
| **Slide 4** | **Ohm y Kirchhoff en instalaciones reales** | Esquema de un circuito de taller mostrando caída de tensión en línea ($\Delta U$ por 2.ª Ley) y reparto de corrientes en derivación (1.ª Ley). |
| **Slide 5** | **El triángulo de potencias ($P, Q, S$)** | Gráfico vectorial del triángulo rectángulo, fórmulas monofásicas y trifásicas, diferencia entre $\text{kW}$, $\text{kVA}$ y $\text{kWh}$ con ejemplo del extractor. |
| **Slide 6** | **IA como copiloto bajo control humano** | Infografía del flujo seguro: Anonimizar → Prompt estructurado → Contraste matemático independiente → Validación normativa por técnico competente. |
| **Slide 7** | **Caso práctico: *Taller IberMotor S.L.*** | Esquema del circuito de $230\ \text{V}$, tabla de datos de compresor y soldadora, e incógnita del disparo del automático de $25\ \text{A}$. |
| **Slide 8** | **Síntesis y puente al Tema 2** | 5 ideas fuerza del tema, enlace al cuestionario final, entrega de la Actividad 3 y adelanto del Tema 2 (Tipos de sistemas eléctricos). |

### Ficha de trabajo
Documento editable (2 páginas) estructurado en cuatro bloques:
1. **Formulario de referencia rápida SI:** tabla de magnitudes, símbolos, unidades y ecuaciones de Ohm, Kirchhoff y potencias en CC, CA monofásica y CA trifásica.
2. **Registro de auditoría de la Actividad 1 y Actividad 2:** espacio para anotar errores de unidades y contraste de las respuestas de IA.
3. **Espacio de cálculo del caso *IberMotor S.L.*:** plantilla guiada para desglosar $P, Q, S, \cos\varphi, I$ y $\Delta U$.
4. **Checklist de seguridad e IA:** lista de verificación antes de usar ChatGPT o Claude en oficina técnica.

### Plantilla técnica práctica
Estructura de la **Ficha Trazable de Magnitudes y Cargas (v1.0)** en hoja de cálculo:

| ID Carga | Equipo (Anonimizado) | Sistema ($1\text{F}/3\text{F}$) | $U$ [V] | $P$ [kW] | $\cos\varphi$ | $Q = P\cdot\tan\varphi$ [kvar] | $S = P/\cos\varphi$ [kVA] | $I$ [A] | Fuente / Hipótesis | Verificado por |
|---|---|---|---|---|---|---|---|---|---|---|
| C-01 | *(Ej. Compresor)* | 1F | 230 | 2,20 | 0,75 | `=E2*TAN(ACOS(F2))` | `=E2/F2` | `=(H2*1000)/D2` | Placa fabricante | *(Iniciales + fecha)* |

### Lecturas y recursos recomendados
> **Advertencia obligatoria de validación:** Todas las referencias bibliográficas, normas técnicas y recursos web citados a continuación deben comprobarse directamente en las fuentes oficiales vigentes (organismos de normalización, ministerios o editoriales) antes de aplicarlos en clase o en proyectos reales, verificando país, edición y posibles erratas o actualizaciones.

- **Bureau International des Poids et Mesures (BIPM)** — *El Sistema Internacional de Unidades (SI)* (guía metrológica oficial para símbolos, prefijos y reglas de escritura; verificar edición vigente).
- **IEC 60050 (Electropedia — Vocabulario Electrotécnico Internacional)** — Referencia terminológica oficial en línea para definiciones de tensión, corriente, impedancia y potencias eléctricas (validar entrada actualizada en `electropedia.org`).
- **Guías técnicas y reglamentos nacionales de baja tensión** (por ejemplo, REBT en España o normas de la familia IEC 60364, citados solo como referencia contextual para verificar el marco aplicable en el país del proyecto).
- **Textos universitarios de fundamentos de electrotecnia y circuitos eléctricos** (por ejemplo, Alexander & Sadiku, *Fundamentos de circuitos eléctricos*, o Fraile Mora, *Circuitos eléctricos*, validando edición disponible en la biblioteca o programa).

### Glosario de términos clave

| Término | Definición |
|---|---|
| **Corriente eficaz (*RMS*)** | Valor de corriente continua que disipa la misma potencia térmica media en una resistencia que la corriente alterna considerada. |
| **Factor de potencia ($\text{FP}$)** | Cociente entre la potencia activa ($P$) y la potencia aparente ($S$); mide el grado de aprovechamiento energético de la potencia demandada a la red. |
| **Impedancia ($Z$)** | Oposición total de un circuito al paso de la corriente alterna, combinando vectorialmente resistencia ($R$) y reactancia ($X$), medida en ohmios ($\Omega$). |
| **Ley de Ohm** | Principio fundamental que relaciona la tensión aplicada, la intensidad circulante y la resistencia o impedancia ($U = I \cdot Z$). |
| **Leyes de Kirchhoff** | Dos principios de conservación (de carga en nodos, $\sum I = 0$; y de energía en mallas, $\sum V = 0$) que rigen la distribución de corrientes y tensiones. |
| **Potencia activa ($P$)** | Energía por unidad de tiempo convertida efectivamente en trabajo mecánico, luz o calor; se expresa en vatios ($\text{W}$) o kilovatios ($\text{kW}$). |
| **Potencia aparente ($S$)** | Producto de la tensión y la intensidad eficaces en CA ($S = \sqrt{P^2 + Q^2}$); se mide en voltamperios ($\text{VA}$) o kilovoltiamperios ($\text{kVA}$) y determina la corriente de línea. |
| **Potencia reactiva ($Q$)** | Componente de potencia que oscila entre la red y los campos magnéticos o eléctricos sin producir trabajo neto; se expresa en $\text{var}$ o $\text{kvar}$. |

---

## 9. Adaptaciones

### Sesión presencial
- **Activación física:** proyectar las 6 tarjetas de la Actividad 1 y votar mediante tarjetas de colores o levantando la mano antes de debatir en el aula.
- **Trabajo en mesas:** formar grupos de 3–4 personas con calculadoras científicas u ordenadores portátiles para resolver el caso *IberMotor S.L.* sobre papel de gran formato (A3) y cruzar soluciones entre mesas en 5 minutos.
- **Control visual:** proyectar en pantalla las fórmulas exactas en hoja de cálculo para corregir paso a paso los errores de $\sqrt{3}$ o $\cos\varphi$.

### Sesión online síncrona
- **Dinamización interactiva:** emplear encuestas en vivo (Mentimeter, Slido o sondeos nativos de videoconferencia) en la Fase 1 y salas reducidas (*breakout rooms*) de 3–4 personas con temporizador visible para la Actividad 2 y el caso práctico.
- **Plantillas compartidas:** distribuir la hoja de cálculo de la Actividad 3 como archivo duplicable en la nube para revisar en vivo cómo formulan $Q$, $S$ e $I$ los distintos participantes.
- **Prevención de fatiga digital:** respetar estrictamente el descanso de 15 minutos a mitad de sesión y alternar microbloques teóricos de máximo 20 minutos con ejercicios numéricos breves en chat.

### Sesión asíncrona
- **Píldoras de estudio:** fragmentar la explicación de los apartados 3.1 a 3.4 en cuatro vídeos grabados de 12–15 minutos, cada uno acompañado de 2 ejercicios cortos de autoverificación en el campus virtual.
- **Entrega del caso en foro:** el alumnado publica su diagnóstico numérico de *IberMotor S.L.* en formato PDF o tabla y revisa el cálculo de un compañero verificando unidades SI y caída de tensión.
- **Tutoría y seguimiento:** habilitar un hilo de dudas técnicas respondido en un plazo máximo de 48 horas laborables antes de desbloquear el cuestionario sumativo final.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** ordena y formaliza nociones previas de física eléctrica y cálculo elemental bajo un lenguaje metrológico único (SI) compatible con memorias técnicas, estudios lumínicos y parámetros eléctricos BIM.
- **Competencias que desarrolla:** cálculo electrotécnico fundamental, control de unidades y escalas, lectura crítica de parámetros de carga, diferenciación clara de herramientas digitales (cálculo, DIALux, Revit MEP, Twinmotion) y verificación independiente de asistentes de IA.
- **Conexión dentro del plan de 6 módulos / 50 temas:**
  - **Tema anterior:** No aplica (es el **Tema 1 de 50**, sesión inaugural del Bloque 1: Instalaciones eléctricas y del programa completo).
  - **Tema posterior:** Conecta directamente con el **Tema 2. Tipos de sistemas eléctricos** (Bloque 1, Tema 2 de 11), donde las magnitudes y relaciones aprendidas hoy se aplicarán a sistemas de corriente continua, monofásicos, *split-phase* y trifásicos (estrella/triángulo), esquemas de puesta a tierra y arquitectura de tableros.
- **Evidencia de aprendizaje:**
  1. **Informe de diagnóstico del caso *IberMotor S.L.*** con tabla de potencias $P, Q, S$ e intensidad real verificada.
  2. **Ficha Trazable de Magnitudes y Cargas (Actividad 3)** con fórmulas activas en unidades SI y prompt anonimizado.
  3. **Cuestionario sumativo final completado** (6 preguntas técnicas).

---

## Siguientes pasos para el formador

1. **Preparar las tarjetas y hojas de cálculo 48 horas antes:** comprobar que las 6 tarjetas de la Actividad 1, las 2 respuestas simuladas de IA de la Actividad 2 y la plantilla editable de la Actividad 3 están cargadas y probadas en la plataforma.
2. **Dejar explícito el encuadre profesional desde el minuto 1:** recordar al grupo que el programa aporta especialización técnica aplicada, no titulación MBA ni habilitación legal automática de firma.
3. **Identificar brechas matemáticas tempranas:** detectar durante la Fase 3 qué participantes tienen dificultades con trigonometría básica ($\cos\varphi$, $\tan\varphi$) o despejes en trifásico para ofrecerles una hoja de apoyo antes del Tema 2.
4. **Verificar enlaces y referencias:** confirmar antes de la sesión que las referencias metrológicas (BIPM, Electropedia) enlazadas en el aula virtual están operativas y vigentes.
5. **Conectar el cierre con el Tema 2:** pedir al alumnado que conserve su Ficha Trazable de Cargas porque en la siguiente sesión se clasificará cada circuito por tipo de sistema ($1\text{F}$ vs. $3\text{F}$ estrella/triángulo) y arquitectura de tablero.
