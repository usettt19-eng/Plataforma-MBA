# Tema 8. Ejemplo práctico de diseño y cálculo

> **Aviso técnico y normativo:** Esta guía forma parte del programa especializado **IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas** (no es un MBA ni otorga habilitación legal para firmar proyectos o dictámenes eléctricos oficiales). Los coeficientes de demanda, tablas orientativas de intensidad admisible y límites de caída de tensión empleados en el ejemplo tienen carácter estrictamente didáctico e ilustrativo y **deben verificarse siempre frente al reglamento eléctrico vigente, normas de compañía suministradora y edición oficial aplicable en la jurisdicción del proyecto**.

---

## 1. Ficha del tema

| Campo | Detalle |
| :--- | :--- |
| **Título del tema** | Tema 8. Ejemplo práctico de diseño y cálculo |
| **Bloque y posición dentro del programa** | Bloque 1: Instalaciones eléctricas — Tema 8 de 11 (Tema 8 de 50 del programa) |
| **Programa formativo** | IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas (6 módulos / 50 temas) |
| **Modalidad** | Online / Híbrida interactiva |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Dominio operativo de los Temas 1 a 7 del Bloque 1: magnitudes en corriente alterna monofásica y trifásica, esquemas de suministro, cálculo de cargas, dimensionamiento de conductores por intensidad y caída de tensión, protecciones eléctricas y criterios de trazo y agrupamiento. |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado ejecutará y documentará el diseño eléctrico integral preliminar de un edificio comercial/oficina mediana —desde la ficha de requisitos y cuadro de cargas jerarquizado hasta la selección de acometida, subtableros, conductores, protecciones y verificación de caída de tensión—, dejando trazabilidad completa de hipótesis para su revisión independiente. |

---

## 2. Objetivos de aprendizaje

Al completar esta sesión de 4 horas, el alumnado será capaz de:

1. **Estructurar** la ficha técnica de requisitos de un edificio terciario mediano traduciendo sus usos y reservas en un cuadro de cargas jerarquizado por subtableros y circuitos. *(Nivel de Bloom: Aplicar)*
2. **Calcular** intensidades de empleo, factores de corrección por instalación, secciones mínimas de conductores y calibres de protección para acometida, subalimentadores y circuitos terminales. *(Nivel de Bloom: Aplicar)*
3. **Analizar** la caída de tensión parcial y acumulada ($\Delta U\,\%$) incluyendo componente resistiva y reactiva, así como la verificación básica frente a cortocircuito y selectividad entre cabecera y subtableros. *(Nivel de Bloom: Analizar)*
4. **Evaluar** una memoria de cálculo preliminar o borrador generado por IA para detectar errores dimensionales, omisiones de factores de corrección o inconsistencias entre cargas, conductores y protecciones. *(Nivel de Bloom: Evaluar)*
5. **Elaborar** un expediente técnico preliminar auditable con hipótesis explícitas, tabla resumen de resultados y checklist de verificación normativa independiente. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Del programa de necesidades y ficha de requisitos al cuadro de cargas jerarquizado

#### Explicación breve y clara
Todo diseño eléctrico sólido comienza **antes** de elegir la primera sección de cable: parte de una **ficha de requisitos del proyecto** donde se fijan el país y reglamento aplicable, la tensión y frecuencia nominales (por ejemplo, trifásica $400/230\text{ V}$, $50\text{ Hz}$), el esquema de conexión a tierra previsto (TT o TN-S, que se profundizará en el Tema 9), las zonas funcionales del edificio y el horizonte de ampliación. Con esos datos se construye el **cuadro de cargas jerarquizado**, agrupando receptores por subtablero (planta baja comercial, oficinas, climatización/CPD, servicios generales) y evitando sumar indiscriminadamente potencias instaladas sin criterio de simultaneidad.

En un edificio de oficinas/comercial es crítico distinguir entre **potencia instalada** ($P_{\text{inst}}$, suma nominal de todos los receptores conectados), **potencia demandada o prevista** ($P_{\text{dem}} = P_{\text{inst}} \cdot K_s$, aplicando coeficientes de simultaneidad/demanda $K_s$ justificados por grupo de carga) y **potencia aparente de diseño** ($S = P_{\text{dem}} / \cos\varphi$), incorporando finalmente una reserva de crecimiento explícita para no estrangular futuras ampliaciones.

#### Conceptos clave
- **Ficha de requisitos de diseño:** documento base con tensión nominal, esquema de tierras, condiciones ambientales (temperatura ambiente máxima de diseño) y normas aplicables a verificar.
- **Factor de simultaneidad ($K_s$):** coeficiente ($\le 1{,}00$) que estima la fracción de potencia instalada que coincide funcionando al mismo tiempo en un conjunto de circuitos o subtableros.
- **Equilibrio de fases:** reparto ordenado de los circuitos monofásicos entre L1, L2 y L3 para reducir la corriente por el conductor neutro y evitar desequilibrios de tensión.
- **Reserva de diseño:** margen cuantificado (habitualmente $15\,\%$–$25\,\%$ en cuadros y acometida) declarado como fila o coeficiente explícito y nunca oculto en estimaciones opacas.

#### Definiciones necesarias
- **Potencia instalada ($P_{\text{inst}}$):** suma aritmética de las potencias nominales activas ($\text{kW}$ o $\text{W}$) de todos los equipos y puntos previstos en un tablero o instalación.
- **Potencia demandada ($P_{\text{dem}}$):** potencia activa máxima esperada en régimen normal tras aplicar los factores de utilización y simultaneidad adecuados al uso del edificio.
- **Factor de potencia ($\cos\varphi$):** relación entre potencia activa ($P$ en $\text{kW}$) y potencia aparente ($S$ en $\text{kVA}$) que determina la corriente real $I_b$ que circula por los conductores.

#### Ejemplo práctico realista
Para el edificio comercial/oficina mediana **«Ágora Oficina»** ($950\text{ m}^2$, suministro $3\times 400/230\text{ V}$, $50\text{ Hz}$) se organiza la demanda en 3 subtableros más cargas generales desde el Cuadro General de Baja Tensión (CGBT):
- **ST-PB (Planta Baja comercial):** Alumbrado LED $3{,}6\text{ kW}$ ($K_s=1{,}00$) + Tomas generales $18{,}0\text{ kW}$ ($K_s=0{,}45$) + Varios $2{,}4\text{ kW}$ ($K_s=0{,}80$) $\rightarrow P_{\text{inst}}=24{,}0\text{ kW}$, $P_{\text{dem}}=13{,}62\text{ kW}$.
- **ST-P1 (Oficinas y CPD):** Alumbrado $4{,}8\text{ kW}$ ($K_s=1{,}00$) + Puestos ofimática $24{,}0\text{ kW}$ ($K_s=0{,}50$) + Sala CPD/rack $9{,}0\text{ kW}$ ($K_s=0{,}90$) $\rightarrow P_{\text{inst}}=37{,}8\text{ kW}$, $P_{\text{dem}}=24{,}90\text{ kW}$.
- **ST-CLIMA (Cubierta HVAC):** Enfriadora/VRV $28{,}0\text{ kW}$ ($K_s=0{,}85$, $\cos\varphi=0{,}85$) + Ventilación/extracción $6{,}0\text{ kW}$ ($K_s=0{,}85$, $\cos\varphi=0{,}85$) $\rightarrow P_{\text{inst}}=34{,}0\text{ kW}$, $P_{\text{dem}}=28{,}90\text{ kW}$.
- **Cargas directas en CGBT:** Ascensor $7{,}5\text{ kW}$ ($K_s=1{,}00$) + Emergencia $1{,}5\text{ kW}$ ($K_s=1{,}00$) + Punto recarga VE $11{,}0\text{ kW}$ ($K_s=1{,}00$) $\rightarrow P_{\text{dem}}=20{,}00\text{ kW}$.
- **Total bruto subtableros + generales:** $13{,}62 + 24{,}90 + 28{,}90 + 20{,}00 = 87{,}42\text{ kW}$. Aplicando un factor de simultaneidad global entre zonas $K_{s,\text{global}} = 0{,}85$: $74{,}31\text{ kW}$; y añadiendo un $15\,\%$ de reserva explícita para acometida/CGBT: $P_{\text{diseño}} = 74{,}31 \times 1{,}15 = 85{,}46\text{ kW}$. *(Nota: tanto los factores $K_s$ como el cálculo mínimo reglamentario por $\text{W}/\text{m}^2$ deben verificarse frente a la normativa local del país, p. ej., REBT ITC-BT-10 en España o NEC Art. 220 en EE. UU.).*

#### Errores frecuentes
- Calcular la acometida sumando el $100\,\%$ de la potencia instalada de todas las tomas de corriente, sobredimensionando el suministro y la aparamenta sin criterio económico ni técnico.
- Olvidar multiplicar por $\cos\varphi$ al pasar de potencia activa ($\text{kW}$) a corriente ($I_b$), subestimando la intensidad real especialmente en cargas inductivas de clima o motores.
- Aplicar factores de simultaneidad por debajo de $1{,}00$ a cargas continuas críticas (como CPD 24/7 o puntos de recarga VE cuando no existe gestión dinámica de carga).
- No dejar constancia escrita de las hipótesis de reserva y simultaneidad en la memoria, impidiendo auditar el cuadro meses después.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué diferencia existe entre potencia instalada, potencia demandada y potencia aparente de diseño?
2. ¿Por qué un cuadro de cargas debe documentar por separado el coeficiente de simultaneidad $K_s$ y el margen de reserva?
3. ¿Qué consecuencias técnicas provoca repartir mal los circuitos monofásicos entre las tres fases de un subtablero?

---

### 3.2. Cálculo integrado de acometida, derivación individual, subtableros y circuitos tipo

#### Explicación breve y clara
Una vez conocida la demanda en cada nodo de la jerarquía (acometida/LGA/derivación individual $\rightarrow$ CGBT $\rightarrow$ subtableros $\rightarrow$ circuitos terminales), se ejecuta el dimensionamiento térmico de conductores y protecciones de forma coherente con los Temas 5, 6 y 7. El encadenamiento técnico obligatorio para cada línea es:
1. Calcular la intensidad de empleo $I_b$: en trifásico $I_b = \frac{P}{\sqrt{3}\cdot U_L \cdot \cos\varphi}$; en monofásico $I_b = \frac{P}{U_F \cdot \cos\varphi}$.
2. Seleccionar el calibre nominal del dispositivo de protección contra sobrecargas $I_n \ge I_b$.
3. Consultar la intensidad admisible base $I_z$ del cable según aislamiento (p. ej. XLPE $90\,^\circ\text{C}$ vs. PVC $70\,^\circ\text{C}$) y método de instalación real decidido en el Tema 7 (bandeja perforada, tubo empotrado, enterrado), aplicando factores de corrección por temperatura ambiente ($f_T$) y agrupamiento ($f_a$): $I_z' = I_z \cdot f_T \cdot f_a$.
4. Verificar la coordinación protección-conductor ($I_b \le I_n \le I_z'$ y condición térmica de disparo convencional $I_2 \le 1{,}45\,I_z'$ como criterio ilustrativo tipo IEC 60364-4-43, a verificar en la norma vigente).

#### Conceptos clave
- **Corriente de empleo ($I_b$):** intensidad máxima prevista en servicio normal que fundamenta la selección de calibre y cable.
- **Intensidad admisible corregida ($I_z'$):** capacidad portadora real del conductor tras descontar pérdidas de disipación por temperatura ambiente elevada, agrupamiento en bandeja/tubo o resistividad del terreno.
- **Coordinación conductor–protección:** garantía de que el interruptor dispara antes de que el conductor alcance su temperatura límite de daño térmico por sobrecarga.
- **Mayoración en motores o cargas especiales:** reglas específicas según reglamento (p. ej. considerar arranque o $1{,}25 \cdot I_b$ en motores/recarga VE cuando aplique por norma).

#### Definiciones necesarias
- **Acometida / Derivación individual:** tramo de alimentación principal desde la red de distribución o centralización de contadores hasta el Cuadro General de Baja Tensión (CGBT), con requisitos propios de caída de tensión, material y sección mínima reglamentaria.
- **Subalimentador:** línea de enlace interna entre el CGBT y un subtablero secundario de planta o uso específico (como ST-P1 o ST-CLIMA).
- **Método de referencia de instalación:** codificación normalizada (p. ej., B1, B2, C, E, F en IEC 60364-5-52) que define cómo disipa calor el cable según vaya al aire en bandeja, en tubo empotrado o enterrado.

#### Ejemplo práctico realista
Calculemos dos tramos reales del edificio **«Ágora Oficina»** (usando valores ilustrativos de $I_z$ para cobre XLPE $0{,}6/1\text{ kV}$ en bandeja perforada a $30\,^\circ\text{C}$, sujetos a verificación en tabla oficial del país):
1. **Línea principal CGBT ($P_{\text{diseño}} = 85{,}46\text{ kW}$, $\cos\varphi_{\text{medio}} = 0{,}90$, $400\text{ V}$):**
   $$I_b = \frac{85\,460}{\sqrt{3} \cdot 400 \cdot 0{,}90} = 137{,}1\text{ A}$$
   Se elige interruptor general de caja moldeada (MCCB) $I_n = 160\text{ A}$ (con ajuste térmico a $145\text{–}160\text{ A}$). Para $T_{\text{amb}} = 35\,^\circ\text{C}$ ($f_T = 0{,}96$) y circuito único en bandeja ($f_a = 1{,}00$): si el cable $50\text{ mm}^2$ Cu XLPE tiene $I_z \approx 167\text{ A}$, resulta $I_z' = 167 \times 0{,}96 = 160{,}3\text{ A} \ge 160\text{ A}$; sin embargo, conviene evaluar **$70\text{ mm}^2$** ($I_z \approx 214\text{ A} \rightarrow I_z' = 205{,}4\text{ A}$) para disponer de holgura térmica real, menor calentamiento en el cuarto y margen de caída de tensión.
2. **Subalimentador a ST-CLIMA ($P_{\text{dem}} = 28{,}90\text{ kW}$, $\cos\varphi = 0{,}85$, $400\text{ V}$):**
   $$I_b = \frac{28\,900}{\sqrt{3} \cdot 400 \cdot 0{,}85} = 49{,}1\text{ A}$$
   Protección en cabecera de CGBT: $I_n = 63\text{ A}$. Discurre por bandeja junto a otro circuito tocándose en capa única ($f_a = 0{,}88$) en patinillo cálido a $40\,^\circ\text{C}$ ($f_T = 0{,}91 \rightarrow f_{\text{tot}} = 0{,}80$). Para cable $5\text{G}16\text{ mm}^2$ Cu XLPE ($I_z \approx 96\text{ A}$ orientativo): $I_z' = 96 \times 0{,}80 = 76{,}8\text{ A} \ge 63\text{ A} \ge 49{,}1\text{ A}$. Cumple por criterio térmico.

#### Errores frecuentes
- Elegir el cable mirando solo la tabla base a $30\,^\circ\text{C}$ sin aplicar $f_T$ (en cubiertas o patinillos calientes) ni $f_a$ por agrupamiento en el trazado real.
- Seleccionar la sección para $I_b$ en lugar de hacerlo para $I_n$ ($49{,}1\text{ A}$ frente a $63\text{ A}$), dejando el cable desprotegido entre $I_b$ e $I_n$.
- Olvidar las secciones mínimas constructivas o la sección de neutro/PE reglamentaria ante posibles armónicos de tercer orden (frecuentes en oficinas con gran carga informática/LED).
- Suponer que los valores orientativos de $I_z$ de un país o fabricante son intercambiables sin verificar la tabla de la norma aplicable.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué la condición de protección exige $I_b \le I_n \le I_z'$ y qué ocurre si $I_n > I_z'$?
2. ¿Cómo impacta la decisión de trazado en bandeja compartida o cubierta soleada (Tema 7) en el cálculo de sección del subalimentador?
3. ¿En qué casos de un edificio de oficinas conviene comprobar si el conductor neutro requiere igual sección o factor corrector por armónicos?

---

### 3.3. Comprobación simultánea de caída de tensión ($\Delta U$), cortocircuito térmico ($I^2t$) y selectividad de protecciones

#### Explicación breve y clara
Un conductor térmicamente válido puede resultar **inaceptable por caída de tensión** en tramos largos o **inseguro ante cortocircuito** si la protección no actúa a tiempo o si el poder de corte es insuficiente. Por eso todo diseño completo verifica en cadena tres comprobaciones adicionales:
1. **Caída de tensión acumulada ($\Delta U\,\%$):** en líneas de media o gran sección ($\ge 35\text{–}50\text{ mm}^2$) no basta la fórmula puramente resistiva; debe incluirse la **reactancia inductiva** $X$ ($\approx 0{,}08\text{ }\Omega/\text{km}$ en multipolares BT): $\Delta U_{\text{trif}} = \sqrt{3} \cdot I_b \cdot L \cdot (R\cos\varphi + X\sin\varphi)$ y $\Delta U_{\text{monof}} = 2 \cdot I_b \cdot L \cdot (R\cos\varphi + X\sin\varphi)$, sumando todos los tramos desde el origen hasta el receptor más desfavorable y comparando con los topes reglamentarios vigentes (p. ej., límites orientativos como $3\,\%$ alumbrado / $5\,\%$ fuerza total según REBT en España o $2\,\%+3\,\%=5\,\%$ orientativo en criterios tipo NEC, siempre a confirmar en el reglamento aplicable).
2. **Cortocircuito ($I_{cc}$):** comprobar que el poder de corte del interruptor ($I_{cu}$ en $\text{kA}$) supera $I_{cc,\max}$ en su punto de instalación, y que $I_{cc,\min}$ al final del tramo dispara la protección magnética (o limita la energía pasante $I^2t \le k^2 S^2$).
3. **Selectividad:** asegurar que un fallo en un circuito terminal o en ST-CLIMA dispare su propio interruptor antes de abrir el interruptor general de $160\text{ A}$ y dejar sin servicio todo el edificio.

#### Conceptos clave
- **Caída de tensión acumulada:** suma de las caídas porcentuales de todos los tramos en serie (acometida/DI + subalimentador + circuito terminal) hasta el punto de consumo.
- **Impedancia de línea ($R + jX$):** combinación de resistencia dependiente de la temperatura de servicio ($R$ a $70\,^\circ\text{C}$ o $90\,^\circ\text{C}$) y reactancia geométrica $X$, relevante en secciones gruesas.
- **Energía específica pasante ($I^2t \le k^2 S^2$):** criterio térmico adiabático que garantiza que el cable soporta un cortocircuito antes de que la protección despeje la falta.
- **Selectividad amperimétrica, cronométrica o energética:** coordinación de curvas entre interruptor aguas arriba y aguas abajo según tablas reales de fabricante.

#### Definiciones necesarias
- **Caída de tensión porcentual ($\Delta U\,\%$):** relación entre la pérdida de tensión $\Delta U$ ($\text{V}$) en un tramo y la tensión nominal del circuito ($400\text{ V}$ trifásica o $230\text{ V}$ monofásica), expresada en tanto por ciento.
- **Corriente de cortocircuito mínima al final de línea ($I_{cc,\min}$):** intensidad de defecto fase-neutro o fase-tierra (en TN) en el extremo más alejado del circuito con el conductor caliente, determinante para asegurar el disparo magnético instantáneo.
- **Selectividad total vs. parcial:** capacidad de un dispositivo aguas abajo de despejar cualquier sobrecorriente hasta la máxima de cortocircuito posible en ese punto (total) o solo hasta un umbral límite (parcial) sin hacer disparar la protección aguas arriba.

#### Ejemplo práctico realista
Comprobemos $\Delta U\,\%$ en la cadena de **«Ágora Oficina»** hasta cubierta (ST-CLIMA):
- **Tramo 1 — Línea principal CGBT ($L = 35\text{ m} = 0{,}035\text{ km}$, $I_b = 137{,}1\text{ A}$, $\cos\varphi = 0{,}90$, $\sin\varphi = 0{,}436$, cable Cu XLPE $50\text{ mm}^2$ a $90\,^\circ\text{C}$ con $R \approx 0{,}45\text{ }\Omega/\text{km}$, $X \approx 0{,}08\text{ }\Omega/\text{km}$):**
  $$\Delta U_1 = \sqrt{3} \cdot 137{,}1 \cdot 0{,}035 \cdot [0{,}45(0{,}90) + 0{,}08(0{,}436)] = 8{,}311 \cdot (0{,}405 + 0{,}0349) = 3{,}66\text{ V} \Rightarrow 0{,}91\,\%$$
  *(Si optáramos por $70\text{ mm}^2$, $R \approx 0{,}32\text{ }\Omega/\text{km}$, bajaría a $\Delta U_1 \approx 0{,}67\,\%$).*
- **Tramo 2 — Subalimentador a ST-CLIMA ($L = 42\text{ m} = 0{,}042\text{ km}$, $I_b = 49{,}1\text{ A}$, $\cos\varphi = 0{,}85$, $\sin\varphi = 0{,}527$, cable Cu XLPE $16\text{ mm}^2$ con $R \approx 1{,}41\text{ }\Omega/\text{km}$, $X \approx 0{,}08\text{ }\Omega/\text{km}$):**
  $$\Delta U_2 = \sqrt{3} \cdot 49{,}1 \cdot 0{,}042 \cdot [1{,}41(0{,}85) + 0{,}08(0{,}527)] = 3{,}572 \cdot (1{,}199 + 0{,}042) = 4{,}43\text{ V} \Rightarrow 1{,}11\,\%$$
- **Acumulada hasta barras de ST-CLIMA:** $\Delta U_{1+2} = 0{,}91\,\% + 1{,}11\,\% = 2{,}02\,\%$. Queda cerca de un $2{,}98\,\%$ de margen si el límite total de fuerza aplicable fuera $5\,\%$ (a verificar en norma), suficiente para los circuitos finales en cubierta de 10–15 m.
- Asimismo, si el transformador de compañía o centro de transformación entrega $I_{cc} = 18\text{ kA}$ en origen, el interruptor general de $160\text{ A}$ deberá tener poder de corte $\ge 25\text{ kA}$ (nunca un automático modular doméstico de $6\text{ kA}$) y coordinarse mediante tablas de selectividad/filiación del fabricante con los interruptores de $63\text{ A}$ ($10\text{–}15\text{ kA}$) aguas abajo.

#### Errores frecuentes
- Comprobar la caída de tensión de un circuito terminal por separado olvidando sumar la caída previa en la acometida y el subalimentador.
- Usar la conductividad del cobre a $20\,^\circ\text{C}$ ($\gamma = 56\text{ m}/(\Omega\cdot\text{mm}^2)$) en lugar de la temperatura máxima de servicio ($70\,^\circ\text{C}$ o $90\,^\circ\text{C}$), subestimando la caída de tensión real en más de un $20\,\%$.
- Omitir la reactancia $X$ en alimentadores de $70\text{–}240\text{ mm}^2$ con bajo $\cos\varphi$, infraestimando el resultado.
- Especificar magnetotérmicos de $6\text{ kA}$ en cabeceras industriales o comerciales próximas al transformador sin comprobar el nivel real de cortocircuito en $\text{kA}$.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué la caída de tensión debe calcularse de forma acumulada desde el origen reglamentario hasta el último receptor?
2. ¿Cuándo deja de ser despreciable la reactancia $X$ en el cálculo de caída de tensión en baja tensión?
3. ¿Qué dos comprobaciones requiere un cortocircuito en el proyecto: una en cabecera ($I_{cc,\max}$) y otra al final de línea ($I_{cc,\min}$)?

---

### 3.4. Memoria de cálculo verificable, auditoría de hipótesis y asistencia crítica con IA

#### Explicación breve y clara
Un cálculo eléctrico brillante carece de valor profesional si no es **auditable por un revisor independiente** (otro ingeniero, la oficina de control técnico o el organismo de inspección). La documentación mínima de una memoria de cálculo incluye: ficha de hipótesis (tensión, temperatura ambiente, conductividad de cálculo, esquema TT/TN), tabla completa de resultados con fórmulas explícitas y referencias normativas vigentes verificadas, y trazabilidad exacta entre códigos de circuito del cuadro de cargas y el diagrama unifilar (Tema 11).

En este flujo, herramientas como **ChatGPT o Claude** son excelentes asistentes para redactar la estructura de la memoria, comprobar coherencia de unidades, generar tablas comparativas de hipótesis o revisar si falta algún parámetro en una hoja exportada. Sin embargo, **los modelos de lenguaje cometen errores aritméticos, mezclan reglamentos de distintos países (p. ej. calibres NEC con secciones IEC) e inventan valores de tablas**. Por ello, toda salida generada por IA debe ser recalculada de forma independiente en hoja técnica o software de cálculo homologado, con datos de proyecto anonimizados y bajo responsabilidad final de un técnico competente.

#### Conceptos clave
- **Trazabilidad de hipótesis:** vínculo explícito entre cada resultado numérico y los parámetros de partida asumidos (longitud, potencia, $\cos\varphi$, método de instalación, temperatura).
- **Verificación independiente:** comprobación por un segundo procedimiento (hoja de cálculo determinista, cálculo manual de control o software técnico certificado) de las fórmulas y resultados críticos.
- **Riesgo de mezcla jurisdiccional por IA:** tendencia de los asistentes LLM a mezclar artículos del NEC estadounidense, el REBT español o normas IEC/NOM sin advertirlo si no se acota el *prompt*.
- **Anonimización documental:** supresión de nombres de clientes, direcciones exactas, precios confidenciales o planos propietarios antes de consultar asistentes externos.

#### Definiciones necesarias
- **Memoria de cálculo preliminar:** documento técnico estructurado que justifica las secciones, caídas de tensión, protecciones y demandas del proyecto, sujeto a validación definitiva conforme al reglamento aplicable.
- **Alucinación técnica en IA:** generación de cifras verosímiles pero falsas (por ejemplo, una intensidad admisible inexistente para $16\text{ mm}^2$ o un poder de corte ficticio) presentada con tono seguro por un modelo generativo.
- **Control de calidad por orden de magnitud:** estimación rápida manual (p. ej., regla aproximada de $\approx 1{,}5\text{ A}/\text{kW}$ en trifásica $400\text{ V}$ o $\approx 4{,}5\text{ A}/\text{kW}$ en monofásica $230\text{ V}$) para detectar errores de factor $\sqrt{3}$ o de coma decimal al instante.

#### Ejemplo práctico realista
Un proyectista junior introduce el resumen anonimizado de cargas de *Ágora Oficina* en un asistente de IA para acelerar la memoria preliminar. La IA calcula para el subtablero ST-CLIMA ($28{,}90\text{ kW}$, $400\text{ V}$, $\cos\varphi = 0{,}85$) una intensidad $I_b = \frac{28\,900}{400 \cdot 0{,}85} = 85{,}0\text{ A}$ (olvidó el factor $\sqrt{3}$ en trifásica!) y recomienda un cable «#4 AWG XLPE de 16 mm² según REBT para 100 A» (mezcla nomenclatura AWG norteamericana con REBT español e inventa una $I_z$ sin aplicar corrección de temperatura $40\,^\circ\text{C}$ ni agrupamiento!). Aplicando el control por orden de magnitud ($\approx 28{,}9 \times 1{,}7 \approx 49\text{ A}$) y la verificación independiente en hoja de cálculo, el revisor detecta en 30 segundos el fallo de $\sqrt{3}$ y corrige tanto la intensidad ($49{,}1\text{ A}$) como la referencia normativa aplicable.

#### Errores frecuentes
- Copiar y pegar tablas de intensidades admisibles o secciones generadas por ChatGPT/Claude en una memoria técnica sin contrastarlas con la norma oficial vigente.
- Subir un PDF o Excel real con datos identificativos del cliente, ubicación y presupuestos sin anonimizar.
- Entregar un cuadro de cargas en PDF con valores «escritos a mano» sin fórmulas verificables, impidiendo detectar errores de arrastre al cambiar una longitud o potencia.
- No incluir una casilla explícita con el país, reglamento y edición utilizada como base del cálculo.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué cuatro elementos mínimos debe incluir una memoria de cálculo para que otro técnico pueda auditarla sin adivinar supuestos?
2. ¿Cómo puedes detectar en menos de 10 segundos si una IA ha olvidado el factor $\sqrt{3}$ o $\cos\varphi$ en un cálculo de corriente?
3. ¿Qué precauciones de confidencialidad y de verificación normativa son obligatorias al trabajar con LLM en cálculos eléctricos?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** funciona como un taller práctico integrador de proyecto real, combinando análisis de requisitos, cálculo en hoja técnica en vivo, auditoría crítica de errores de IA y cierre documental.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
| :--- | :---: | :--- | :--- |
| **1. Apertura y activación** | 00:00 – 00:25 (25 min) | Presenta el hilo conductor del Tema 8 (cierre del diseño numérico del Bloque 1) y lanza la **Actividad 1** con un borrador de memoria lleno de errores deliberados. | Realiza la evaluación diagnóstica rápida y detecta los primeros fallos obvios de unidades, $\sqrt{3}$ y simultaneidad en el borrador mostrado. |
| **2. Microexposición Bloque A (Cuadro de cargas y cálculo térmico)** | 00:25 – 01:00 (35 min) | Modela paso a paso el apartado 3.1 y 3.2 sobre el caso base *Ágora Oficina*: estructura jerárquica, $K_s$, $I_b$, $I_n$ e $I_z'$. | Completa en paralelo en su plantilla de hoja de cálculo las filas de un subtablero y valida resultados en voz alta. |
| **3. Actividad práctica de aplicación técnica** | 01:00 – 01:40 (40 min) | Dinamiza la **Actividad 2**: dimensionamiento completo de 3 circuitos (acometida, subalimentador largo y circuito terminal de alumbrado/tomas) con $\Delta U\,\%$ acumulada y kA. | En parejas, calcula secciones, aplica $f_T$ y $f_a$, comprueba $\Delta U = \sqrt{3} I L (R\cos\varphi+X\sin\varphi)$ y selecciona calibres de protección. |
| **Descanso breve** | 01:40 – 01:55 (15 min) | Pausa y preparación del paquete de datos del caso integrador. | Descanso fuera de pantalla. |
| **4. Microexposición Bloque B ($\Delta U$, $I_{cc}$, memoria auditable e IA)** | 01:55 – 02:25 (30 min) | Expone los apartados 3.3 y 3.4: reactancia en líneas gruesas, selectividad, verificación $I^2t$, estructura de memoria auditable y auditoría de salidas LLM. | Practica controles rápidos por orden de magnitud y contrasta cómo acotar un *prompt* técnico sin exponer datos confidenciales. |
| **5. Caso práctico integrado** | 02:25 – 03:15 (50 min) | Presenta el caso **«Oficinas Ebro Norte»**, asigna equipos de 3–4 personas y supervisa la resolución completa y auditoría del borrador defectuoso de IA. | En equipos, cierra el cuadro de cargas completo, recalcula los 4 tramos críticos, corrige 5 errores del borrador IA y redacta la nota de hipótesis. |
| **6. Puesta en común y transferencia a proyecto** | 03:15 – 03:45 (30 min) | Contrasta las soluciones de los equipos y lanza la **Actividad 3** (adaptación de la plantilla de memoria auditable al proyecto propio del alumno). | Revisa los criterios de selectividad/caída de tensión del caso y configura su plantilla replicable con tabla de hipótesis verificable. |
| **7. Síntesis, evaluación sumativa y cierre** | 03:45 – 04:00 (15 min) | Sintetiza el protocolo de revisión independiente, aplica el test sumativo y conecta con el **Tema 9 (Sistema de puesta a tierra)**. | Completa la prueba breve de cierre y la ficha de autoevaluación. |

**Suma total verificada:** 25 + 35 + 40 + 15 + 30 + 50 + 30 + 15 = **240 minutos (4 horas)**.

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «Auditoría exprés al borrador de IA»
- **Nombre:** Auditoría exprés al borrador de IA.
- **Objetivo:** Despertar la actitud crítica frente a cálculos aparentemente bien redactados, detectando errores típicos de magnitud, simultaneidad y mezcla normativa.
- **Instrucciones para el alumnado:**
  1. Leed la memoria breve de 1 página generada por un asistente de IA para un local de oficinas ($45\text{ kW}$ trifásicos, $400\text{ V}$).
  2. En 8 minutos de forma individual, rodead/marcad al menos 4 errores técnicos escondidos (p. ej., omisión de $\sqrt{3}$, uso de conductividad a $20\,^\circ\text{C}$, $I_n$ menor que $I_b$ o mezcla de secciones $\text{mm}^2$ con normativa NEC sin conversión).
  3. Anotad en el chat o pizarra el error más grave encontrado y su impacto real en obra.
- **Materiales necesarios:** Ficha con extracto de borrador erróneo de IA y calculadora básica.
- **Tiempo estimado:** 15 minutos (integrados en la Fase 1).
- **Rol del formador:** Mostrar cómo el tono seguro de la IA disimula errores elementales de ingeniería y guiar la corrección por orden de magnitud.
- **Producto o entregable esperado:** Lista anotada de los 4 errores corregidos con orden de magnitud correcto.
- **Criterios de éxito:** El alumnado localiza al menos 3 de los 4 errores y justifica por qué no se puede firmar ni modelar con ese borrador.

### Actividad 2 (Aplicación técnica): «Cadena de cálculo de 3 tramos: térmico, protección y $\Delta U$ acumulada»
- **Nombre:** Cadena de cálculo de 3 tramos: térmico, protección y $\Delta U$ acumulada.
- **Objetivo:** Ejecutar con rigor el cálculo completo desde el cuadro general hasta un circuito terminal crítico comprobando intensidad admisible corregida, protección y caída de tensión acumulada.
- **Instrucciones para el alumnado:**
  1. En parejas, descargad la hoja de cálculo base con los datos de partida del subtablero **ST-P1** de *Ágora Oficina* ($P_{\text{dem}} = 24{,}90\text{ kW}$, $\cos\varphi = 0{,}92$, $L = 28\text{ m}$) y un circuito terminal largo de tomas monofásico ($P = 3{,}4\text{ kW}$, $230\text{ V}$, $\cos\varphi = 0{,}90$, $L = 32\text{ m}$).
  2. Calculad $I_b$, seleccionad $I_n$, aplicad los factores de corrección del enunciado ($T_{\text{amb}} = 35\,^\circ\text{C}$, 3 circuitos agrupados en bandeja) y verificad $I_b \le I_n \le I_z'$.
  3. Calculad $\Delta U_1$ (acometida $0{,}91\,\%$), $\Delta U_2$ (subalimentador a ST-P1) y $\Delta U_3$ (circuito terminal de $32\text{ m}$ con $2{,}5\text{ mm}^2$ vs. $4\text{ mm}^2$) verificando cuál cumple el límite acumulado ilustrativo elegido.
- **Materiales necesarios:** Plantilla de hoja de cálculo, tabla orientativa de parámetros de conductores ($R$ a $70/90\,^\circ\text{C}$, $X$, $I_z$ ilustrativa) y calculadora.
- **Tiempo estimado:** 40 minutos (Fase 3).
- **Rol del formador:** Supervisar fórmulas en celdas (evitando valores fijos tecleados a mano), recordar la diferencia de factor $2$ en monofásico frente a $\sqrt{3}$ en trifásico y verificar que suman la caída acumulada.
- **Producto o entregable esperado:** Hoja de cálculo cumplimentada con los 3 tramos verificados y decisión justificada entre $2{,}5\text{ mm}^2$ y $4\text{ mm}^2$ en el circuito largo.
- **Criterios de éxito:** Fórmulas correctas sin errores de unidad, verificación simultánea térmica + $\Delta U$ acumulada y selección coherente del calibre de protección.

### Actividad 3 (Transferencia a proyecto real): «Plantilla de memoria auditable y protocolo de validación independiente»
- **Nombre:** Plantilla de memoria auditable y protocolo de validación independiente.
- **Objetivo:** Construir una plantilla propia de ficha de requisitos y verificación cruzada lista para usar en proyectos reales, integrando asistencia segura con IA únicamente para revisión de completitud.
- **Instrucciones para el alumnado:**
  1. Tomad la plantilla técnica de la Sección 8 y personalizadla para vuestro entorno normativo real (indicando país, reglamento vigente a consultar, tensión nominal y esquema de tierras habitual).
  2. Diseñad un *prompt* de auditoría para Claude/ChatGPT que reciba una tabla anonimizada en CSV/Markdown de un cuadro de cargas y devuelva **preguntas de control** (faltas de $\cos\varphi$, desequilibrio entre fases $> 15\,\%$, incoherencia $I_n > I_z'$) sin pedirle que invente secciones reglamentarias.
  3. Probad el *prompt* con el cuadro del caso práctico o un ejemplo ficticio y documentad qué verificasteis manualmente después.
- **Materiales necesarios:** Plantilla técnica práctica (Sección 8) y datos anonimizados en texto plano/CSV.
- **Tiempo estimado:** 25 minutos (integrados en la Fase 6).
- **Rol del formador:** Insistir en la anonimización y validar que la plantilla obligue a registrar quién realizó la verificación independiente y bajo qué norma oficial.
- **Producto o entregable esperado:** Plantilla de memoria auditable adaptada + *prompt* de auditoría de coherencia probado y documentado.
- **Criterios de éxito:** El flujo separa claramente la asistencia de texto/consistencia por IA de la validación matemática y normativa independiente.

---

## 6. Caso práctico

### Caso: Edificio «Oficinas Ebro Norte» — «Diseño integral y rescate de una memoria defectuosa»

#### Contexto empresarial
**Ebro Norte Consultores** ha adquirido un edificio exento de 3 plantas en Zaragoza ($1\,200\text{ m}^2$ totales) para alojar su sede corporativa y área de atención a clientes en planta baja. La dirección técnica interna elaboró un primer anteproyecto apoyándose parcialmente en una hoja heredada y un resumen de IA, pero antes de pasarlo a la ingeniería visadora y al modelo BIM solicita una revisión técnica independiente completa.

#### Situación o problema
El anteproyecto presenta un cuadro de cargas incompleto y varias decisiones de cálculo dudosas:
1. No se ha aplicado simultaneidad realista a las tomas de corriente de oficinas, inflando la acometida, mientras que para el CPD (servidor continuo 24/7) se aplicó erróneamente un $K_s = 0{,}50$.
2. Para el subtablero **ST-CLIMA** en cubierta ($L = 48\text{ m}$), el anteproyecto calculó $I_b$ olvidando $\cos\varphi = 0{,}84$, eligió protección de $40\text{ A}$ cuando la corriente real es mayor, y tendió cable de $10\text{ mm}^2$ junto a otros 3 circuitos a $40\,^\circ\text{C}$ de ambiente bajo cubierta sin aplicar factores de corrección.
3. En planta 2 existe un circuito largo de alumbrado LED de $52\text{ m}$ ($P = 2{,}1\text{ kW}$, $230\text{ V}$, $\cos\varphi = 0{,}95$) calculado con $1{,}5\text{ mm}^2$ sin sumar la caída previa del alimentador principal ($0{,}85\,\%$) ni la del subalimentador ($1{,}05\,\%$).
4. El interruptor general de cabecera figura especificado con poder de corte $I_{cu} = 6\text{ kA}$ pese a estar a $18\text{ m}$ de un centro de transformación de compañía ($I_{cc,\text{origen}} = 16\text{ kA}$).

#### Datos disponibles

| Nodo / Circuito | Parámetros reales del proyecto | Condiciones de trazado e hipótesis |
| :--- | :--- | :--- |
| **Suministro general** | Trifásico $400/230\text{ V}$, $50\text{ Hz}$, esquema TT | $I_{cc,\text{cabecera}} = 16\text{ kA}$; longitud acometida/DI = $24\text{ m}$ ($\Delta U_1 = 0{,}85\,\%$) |
| **ST-PB (Planta Baja)** | Alumbrado $4{,}2\text{ kW}$ ($K_s=1{,}0$); Tomas $20\text{ kW}$ ($K_s=0{,}45$); Escaparate/varios $3{,}0\text{ kW}$ ($K_s=0{,}85$) | $\cos\varphi_{\text{medio}} = 0{,}92$; $L = 16\text{ m}$ desde CGBT |
| **ST-P1 y P2 (Oficinas + CPD)** | Alumbrado $8{,}4\text{ kW}$ ($K_s=1{,}0$); Ofimática $36\text{ kW}$ ($K_s=0{,}50$); CPD $10\text{ kW}$ ($K_s=1{,}0$ continuo) | Subtablero P2: $L = 26\text{ m}$ ($\Delta U_2 = 1{,}05\,\%$); circuito terminal alumbrado P2: $2{,}1\text{ kW}$, $230\text{ V}$, $\cos\varphi = 0{,}95$, $L = 52\text{ m}$ |
| **ST-CLIMA (Cubierta)** | Enfriadora $26\text{ kW}$ + Unidades aire $7\text{ kW}$ ($K_s=0{,}85$, $\cos\varphi=0{,}84$) | $L = 48\text{ m}$ en bandeja compartida (4 circuitos tocándose, $f_a=0{,}77$) bajo temperatura $40\,^\circ\text{C}$ ($f_T=0{,}91 \rightarrow f_{\text{tot}}=0{,}70$) |
| **Cargas directas CGBT** | Ascensor $8{,}0\text{ kW}$ ($K_s=1{,}0$, $\cos\varphi=0{,}85$) + 2 Puntos VE $22\text{ kW}$ ($K_s=1{,}0$, $\cos\varphi=0{,}98$) | Simultaneidad global entre grupos $K_{s,\text{global}} = 0{,}85$ + Reserva de diseño $15\,\%$ sobre total |
| **Tablas orientativas Cu XLPE** | $I_z$ ref. $30\,^\circ\text{C}$ bandeja: $10\text{ mm}^2 \rightarrow 71\text{ A}$; $16\text{ mm}^2 \rightarrow 96\text{ A}$; $25\text{ mm}^2 \rightarrow 127\text{ A}$ | Resistencias Cu orientativas ($90\,^\circ\text{C}$): $1{,}5\text{ mm}^2 \rightarrow 15{,}3\text{ }\Omega/\text{km}$; $2{,}5\text{ mm}^2 \rightarrow 9{,}18\text{ }\Omega/\text{km}$; $16\text{ mm}^2 \rightarrow 1{,}41\text{ }\Omega/\text{km}$; $25\text{ mm}^2 \rightarrow 0{,}90\text{ }\Omega/\text{km}$ ($X \approx 0{,}08\text{ }\Omega/\text{km}$) |

*(Nota: los valores de $I_z$, factores de corrección y resistencias son orientativos para este ejercicio y deben comprobarse en la norma vigente del país del proyecto).*

#### Preguntas de análisis
1. ¿Cuál es la potencia demandada total corregida del edificio (con $K_{s,\text{global}} = 0{,}85$ y reserva del $15\,\%$) y qué intensidad de diseño resulta en la cabecera del CGBT?
2. Para el subalimentador a **ST-CLIMA** ($P_{\text{dem}} = 28{,}05\text{ kW}$, $\cos\varphi = 0{,}84$, $400\text{ V}$), ¿cuál es su $I_b$ real, su calibre de protección $I_n$ y qué sección mínima cumple simultáneamente con $f_{\text{tot}} = 0{,}70$ y con la caída de tensión?
3. Para el circuito largo de alumbrado en Planta 2 ($52\text{ m}$, $2{,}1\text{ kW}$, $230\text{ V}$), ¿cumple $1{,}5\text{ mm}^2$ si el límite ilustrativo acumulado en alumbrado es $3{,}0\,\%$ (sumando $\Delta U_1 + \Delta U_2 = 1{,}90\,\%$)? ¿Qué sección es necesaria?
4. ¿Por qué es peligroso mantener el interruptor general con $I_{cu} = 6\text{ kA}$ y qué especificación mínima debe corregirse?

#### Tarea a realizar
En equipos de 3–4 personas (50 minutos), redactad un **Informe Técnico de Corrección y Diseño Preliminar** que incluya:
1. **Cuadro de cargas corregido** (subtableros, generales, $K_{s,\text{global}}$, reserva $15\,\%$ e $I_b$ de cabecera).
2. **Dimensionamiento recalculado de ST-CLIMA** ($I_b$, $I_n$, $I_z'$, selección entre $16\text{ mm}^2$ y $25\text{ mm}^2$, y $\Delta U\,\%$).
3. **Verificación del circuito de alumbrado P2 ($52\text{ m}$)** calculando $\Delta U_3$ para $1{,}5\text{ mm}^2$ frente a $2{,}5\text{ mm}^2$ (o $4\text{ mm}^2$) y caída acumulada total.
4. **Corrección de poder de corte ($I_{cu}$), selectividad básica y tabla de hipótesis documentada** indicando qué apartados del reglamento oficial del país (p. ej. REBT en España) deben verificarse antes del visado.

#### Posibles soluciones o criterios de análisis
- **Demanda y cabecera CGBT:**
  - ST-PB: $4{,}2 + 20(0{,}45) + 3(0{,}85) = 4{,}2 + 9{,}0 + 2{,}55 = 15{,}75\text{ kW}$.
  - ST-P1+P2: $8{,}4 + 36(0{,}50) + 10(1{,}0) = 8{,}4 + 18{,}0 + 10{,}0 = 36{,}40\text{ kW}$.
  - ST-CLIMA: $(26 + 7) \times 0{,}85 = 28{,}05\text{ kW}$.
  - Directas CGBT: $8{,}0 + 22{,}0 = 30{,}00\text{ kW}$.
  - Suma bruta $= 15{,}75 + 36{,}40 + 28{,}05 + 30{,}00 = 110{,}20\text{ kW}$. Con $K_{s,\text{global}} = 0{,}85$: $93{,}67\text{ kW}$. Con reserva $+15\,\%$: $P_{\text{diseño}} = 107{,}72\text{ kW}$. Con $\cos\varphi_{\text{medio}} \approx 0{,}90$: $I_b = \frac{107\,720}{\sqrt{3}\cdot 400 \cdot 0{,}90} \approx 172{,}8\text{ A}$ (interruptor general $I_n = 200\text{ A}$ MCCB regulable).
- **Subalimentador ST-CLIMA:**
  - $I_b = \frac{28\,050}{\sqrt{3}\cdot 400 \cdot 0{,}84} = \frac{28\,050}{581{,}97} \approx 48{,}2\text{ A} \Rightarrow$ protección $I_n = 63\text{ A}$ (40 A dispararía por sobrecarga!).
  - Para $10\text{ mm}^2$: $I_z' = 71 \times 0{,}70 = 49{,}7\text{ A} < 63\text{ A}$ (INADMISIBLE!).
  - Para $16\text{ mm}^2$: $I_z' = 96 \times 0{,}70 = 67{,}2\text{ A} \ge 63\text{ A} \ge 48{,}2\text{ A}$ (VÁLIDO térmicamente).
  - $\Delta U_{\text{CLIMA}}$ con $16\text{ mm}^2$ ($L = 48\text{ m}$, $\sin\varphi = 0{,}543$): $\Delta U = \sqrt{3}\cdot 48{,}2 \cdot 0{,}048 \cdot [1{,}41(0{,}84) + 0{,}08(0{,}543)] = 4{,}007 \cdot (1{,}184 + 0{,}043) = 4{,}92\text{ V} \Rightarrow 1{,}23\,\%$ (acumulada hasta ST-CLIMA: $0{,}85\,\% + 1{,}23\,\% = 2{,}08\,\%$).
- **Circuito largo alumbrado P2 (monofásico $230\text{ V}$, $L = 52\text{ m} = 0{,}052\text{ km}$):**
  - $I_b = \frac{2\,100}{230 \cdot 0{,}95} = 9{,}61\text{ A} \Rightarrow I_n = 10\text{ A}$ (o $16\text{ A}$ si $2{,}5\text{ mm}^2$).
  - Con $1{,}5\text{ mm}^2$ ($R \approx 15{,}3\text{ }\Omega/\text{km}$): $\Delta U_3 \approx 2 \cdot 9{,}61 \cdot 0{,}052 \cdot 15{,}3 \cdot 0{,}95 = 14{,}53\text{ V} \Rightarrow 6{,}32\,\%$! Sumado a $1{,}90\,\%$ previo da **$8{,}22\,\%$** (fuera de cualquier límite aceptable!).
  - Con $2{,}5\text{ mm}^2$ ($R \approx 9{,}18\text{ }\Omega/\text{km}$): $\Delta U_3 \approx 8{,}72\text{ V} \Rightarrow 3{,}79\,\%$ (acumulada $5{,}69\,\%$, sigue por encima del $3\,\%$!).
  - Con $4\text{ mm}^2$ ($R \approx 5{,}74\text{ }\Omega/\text{km}$): $\Delta U_3 \approx 5{,}45\text{ V} \Rightarrow 2{,}37\,\%$ (acumulada $4{,}27\,\%$, aún supera el $3\,\%$ salvo que se divida la carga en 2 circuitos de $1{,}05\text{ kW}$ con $2{,}5\text{ mm}^2$ o $4\text{ mm}^2$: con 2 circuitos en $4\text{ mm}^2$, $\Delta U_3 = 1{,}18\,\%$ y acumulada $= 3{,}08\,\%$; o en $6\text{ mm}^2$ baja a $0{,}79\,\%$ $\rightarrow$ acumulada **$2{,}69\,\% \le 3{,}0\,\%$**, o se reduce la caída previa del subtablero P2 aumentando sección del subalimentador!). ¡Esta es la verdadera toma de decisiones de ingeniería!
- **Cabecera $I_{cu}$:** debe sustituirse $6\text{ kA}$ por un interruptor de $I_{cu} \ge 20\text{–}25\text{ kA}$ acorde con el $I_{cc} = 16\text{ kA}$ en origen, asegurando además selectividad con los subtableros.

#### Preguntas de reflexión final
- ¿Por qué dividir un circuito terminal largo en dos líneas o reforzar el subalimentador suele ser más eficiente que subir indefinidamente la sección en el último tramo?
- ¿Qué habría pasado si el ingeniero hubiera aceptado el anteproyecto basándose únicamente en que «los cálculos ya estaban hechos»?

---

## 7. Evaluación

### Evaluación diagnóstica
- **Instrumento (inicio de sesión, 5 min):** Breve test de 3 cuestiones prácticas: (1) cálculo rápido de $I_b$ para $15\text{ kW}$ trifásicos a $400\text{ V}$, $\cos\varphi = 0{,}85$; (2) relación lógica entre $I_b$, $I_n$ e $I_z'$; y (3) diferencia entre potencia instalada y demandada.
- **Propósito:** Ajustar el nivel de repaso aritmético antes de entrar en el ejemplo integrado.

### Evaluación formativa
- Seguimiento continuo en la **Actividad 2** y el caso **«Oficinas Ebro Norte»** verificando que el alumnado:
  - Utiliza fórmulas explícitas en hojas de cálculo y no valores copiados sin trazabilidad.
  - Aplica correctamente el factor $\sqrt{3}$ en trifásico frente al factor $2$ en monofásico.
  - Suma la caída de tensión acumulada en serie y detecta el impacto del factor de agrupamiento y temperatura.
  - Desconfía de cifras generadas por IA y las comprueba con órdenes de magnitud e iteración independiente.

### Evaluación sumativa
1. **Informe Técnico del Caso «Oficinas Ebro Norte»** en equipo (**60 %** del peso del tema).
2. **Hoja de cálculo individual de la Actividad 2 + Plantilla de memoria auditable (Actividad 3) + mini-test de 4 ítems** (**40 %** del peso del tema).

### Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
| :--- | :--- | :--- | :--- | :--- |
| **1. Cuadro de cargas y simultaneidad** | Suma potencias sin distinguir instalada vs. demandada, omite $\cos\varphi$ o aplica simultaneidad errónea al CPD. | Calcula $P_{\text{dem}}$ por subtablero, pero omite reserva explícita o comete errores menores en $\cos\varphi$. | Estructura subtableros, simultaneidad y reserva con claridad, obteniendo $I_b$ exacta en cabecera. | Documenta cada coeficiente con criterio operativo de uso, equilibra fases y deja trazabilidad total de hipótesis. |
| **2. Dimensionamiento térmico y protecciones** | Selecciona $I_n < I_b$ o no aplica factores de corrección $f_T$ y $f_a$ dejando cables sobrecargados. | Aplica $I_b \le I_n \le I_z$ pero omite corregir $I_z$ por agrupamiento/temperatura o descuida $I_{cu}$ en cabecera. | Verifica $I_b \le I_n \le I_z'$, corrige el calibre erróneo de ST-CLIMA y exige $I_{cu} \ge I_{cc,\max}$ ($25\text{ kA}$). | Integra además coordinación de selectividad aguas arriba/abajo, criterio $I^2t$ y notas explícitas de verificación reglamentaria. |
| **3. Caída de tensión ($\Delta U$) acumulada** | Calcula caídas aisladas sin acumular tramos o confunde fórmula monofásica y trifásica. | Acumula tramos pero omite el término reactivo $X$ en alimentadores o usa conductividad a $20\,^\circ\text{C}$. | Calcula con precisión $\Delta U$ parcial y acumulada e identifica el fallo del circuito de alumbrado de $52\text{ m}$. | Propone soluciones óptimas de ingeniería (desdoblar circuito o reforzar subalimentador) evaluando coste/sección frente al límite $\le 3\,\%$. |
| **4. Documentación auditable e IA responsable** | Entrega cifras sueltas sin fórmulas ni referencias normativas o acepta errores de IA sin corrección. | Incluye tabla ordenada, pero faltan hipótesis ambientales, referencias de norma por verificar o control de la IA. | Presenta memoria auditable con tabla de hipótesis, advertencia normativa y corrección de los errores del borrador de IA. | Diseña una plantilla automatizada con alertas de coherencia, validación por orden de magnitud y uso seguro/anonimizado de la IA. |

### Actividad de autoevaluación
Al cerrar la clase, cada participante responde en su ficha:
1. *¿En qué paso de la cadena de cálculo ($K_s \rightarrow I_b \rightarrow I_n \rightarrow I_z' \rightarrow \Delta U \rightarrow I_{cc}$) tiendo a cometer errores por prisa?*
2. *¿Qué regla de estimación mental (orden de magnitud) me llevo para auditar cálculos propios o de una IA en segundos?*
3. *¿Qué dato normativo debo comprobar obligatoriamente en el reglamento de mi país antes de dar por definitiva mi memoria?*

---

## 8. Materiales y recursos

### Guion de diapositivas
- **Slide 1 — Portada y alcance integrador:** Tema 8 (8/11), transición de cálculos aislados a expediente completo de proyecto y límite de responsabilidad profesional.
- **Slide 2 — Activación (Actividad 1):** Borrador real de memoria con 4 errores ocultos de IA para detectar en 8 minutos.
- **Slide 3 — Ficha de requisitos y cuadro de cargas:** De la necesidad del edificio a $P_{\text{inst}}$, $K_s$, $P_{\text{dem}}$, $\cos\varphi$, equilibrio de fases y reserva explícita.
- **Slide 4 — Ejemplo paso a paso «Ágora Oficina»:** Jerarquía CGBT $\rightarrow$ ST-PB / ST-P1 / ST-CLIMA, cálculo de $I_b = 137{,}1\text{ A}$ en cabecera y $49{,}1\text{ A}$ en clima.
- **Slide 5 — Cadena térmica, $\Delta U$ acumulada y cortocircuito:** Fórmula completa con $R$ y $X$, verificación $I_b \le I_n \le I_z'$, $I_{cu}$ en cabecera y selectividad (Actividad 2).
- **Slide 6 — Memoria auditable y límites de la IA:** Qué hace bien un LLM (estructurar, detectar campos faltantes) vs. qué hace mal (aritmética, mezclar NEC/REBT, alucinar tablas).
- **Slide 7 — Caso práctico «Oficinas Ebro Norte»:** Tabla de datos del edificio de 3 plantas y tareas del informe técnico de corrección (50 min).
- **Slide 8 — Transferencia, evaluación y puente al Tema 9:** Adaptación de plantilla propia (Actividad 3), cierre sumativo y avance al Tema 9 (Sistema de puesta a tierra).

### Ficha de trabajo
Dossier descargable de 3 páginas con: (1) borrador de IA con errores para la Actividad 1; (2) ficha de requisitos y cuadro de cargas de *Ágora Oficina*; (3) tabla guía para resolver el caso *Oficinas Ebro Norte*; y (4) cuestionario de autoevaluación.

### Plantilla técnica práctica
```text
=== MEMORIA DE CÁLCULO ELÉCTRICO PRELIMINAR — HOJA DE HIPÓTESIS Y AUDITORÍA ===
Proyecto (anonimizado): __________________________   País / Reglamento a verificar: __________________________
Tensión / Frecuencia: 3x400/230 V - 50 Hz (u otra: _____)   Esquema de conexión a tierra: [ ] TT  [ ] TN-S  [ ] IT

1. HIPÓTESIS GENERALES VERIFICABLES
- Temperatura ambiente diseño (interior / cubierta / enterrado): ____ °C / ____ °C / ____ °C
- Temperatura conductor para cálculo de R: ____ °C (70 °C PVC / 90 °C XLPE)
- Criterios de caída de tensión límite verificados en norma: Alumbrado ____ % | Fuerza ____ % | Origen: ____________
- Poder de corte presunto en origen (Icc_max): ____ kA

2. RESUMEN DE LÍNEAS CRÍTICAS
| Cód. Circuito | P_dem (kW) | cos φ | L (m) | Ib (A) | In (A) | Iz' (A) | Sección / Material | ΔU parcial (%) | ΔU acum. (%) | Icu (kA) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| | | | | | | | | | | |

3. REGISTRO DE VERIFICACIÓN INDEPENDIENTE Y USO DE IA
- ¿Se usó IA en redacción o revisión? [ ] No [ ] Sí (Datos anonimizados: [ ] Sí)
- Cálculos recalculados independientemente en Excel / software técnico: [ ] Sí
- Técnico revisor responsable de comprobación: _________________________   Fecha: ____________
```

### Lecturas y recursos recomendados
*(Nota importante: el formador y el alumnado deben validar siempre la edición vigente, el país de aplicación, la normativa de compañía eléctrica y los enlaces antes de utilizar cualquier referencia).*
- **REBT (España) — ITC-BT-10, ITC-BT-19, ITC-BT-25 y Guía Técnica de Aplicación** *(ejemplo ilustrativo de marco español para previsión de cargas y caídas de tensión; verificar versión vigente)*.
- **IEC 60364-4-43 e IEC 60364-5-52** (*Protection against overcurrent* / *Wiring systems*) *(verificar edición vigente)*.
- **NFPA 70 (NEC) — Artículos 215, 220 y 240** *(referencia ilustrativa si se diseña bajo código tipo NEC; validar edición local adoptada)*.
- **Catálogos técnicos de fabricantes de aparamenta BT (curvas $I^2t$, tablas de selectividad y filiación)** *(comprobar versiones vigentes del fabricante elegido antes de proyectar)*.

### Glosario de términos clave

| Término | Definición |
| :--- | :--- |
| **Cuadro de cargas** | Tabla técnica jerarquizada que agrupa receptores por circuitos y tableros, detallando potencias, factores de demanda, fases e intensidades de diseño. |
| **Factor de simultaneidad ($K_s$)** | Coeficiente aplicado a un conjunto de cargas para estimar la fracción de potencia instalada que demanda energía simultáneamente. |
| **Corriente de empleo ($I_b$)** | Intensidad máxima prevista en servicio normal para un circuito o alimentador a partir de su potencia demandada, tensión y factor de potencia. |
| **Intensidad admisible corregida ($I_z'$)** | Corriente máxima permanente que soporta un conductor en sus condiciones reales tras multiplicar $I_z$ por los factores de temperatura y agrupamiento. |
| **Caída de tensión acumulada** | Pérdida porcentual de tensión total obtenida al sumar en serie las caídas de cada tramo desde el origen hasta el punto de consumo más lejano. |
| **Selectividad de protecciones** | Coordinación entre interruptores en serie para que ante un fallo actúe únicamente la protección inmediatamente superior al punto de defecto. |
| **Poder de corte ($I_{cu}$)** | Intensidad máxima de cortocircuito expresada en kiloamperios ($\text{kA}$) que un interruptor automático es capaz de interrumpir con seguridad. |
| **Verificación independiente** | Comprobación sistemática de fórmulas, unidades, tablas normativas y resultados realizada al margen de borradores generados por IA o plantillas previas. |

---

## 9. Adaptaciones

### Sesión presencial
- **Trabajo con calculadora y pizarra:** Resolver paso a paso en la pizarra la primera línea de *Ágora Oficina* antes de pasar a la hoja de cálculo en portátiles, asegurando que todos dominan los términos $\sqrt{3}$, $R\cos\varphi$ y $X\sin\varphi$.
- **Revisión en parejas:** Cada equipo intercambia durante 5 minutos su hoja resuelta del caso *Oficinas Ebro Norte* con el equipo vecino para ejecutar una «auditoría de revisor independiente».

### Sesión online síncrona
- **Hoja de cálculo compartida en la nube:** Proporcionar un archivo de Google Sheets o Excel Online duplicable por equipo con pestañas preestructuradas pero **sin las fórmulas en las celdas clave**, permitiendo al formador inspeccionar el avance de todas las salas simultáneamente.
- **Sondeos de control rápido:** Lanzar microvotaciones entre fases para comprobar órdenes de magnitud (p. ej. «¿qué calibre te sale para $48{,}2\text{ A}$?»).

### Sesión asíncrona
- **Tutorial guiado en vídeo:** Grabar la resolución completa de *Ágora Oficina* en pantalla compartida (18 minutos) mostrando cómo enlazar celdas sin errores de referencia.
- **Entrega evaluable:** El alumnado entrega su hoja de cálculo resuelta del caso *Oficinas Ebro Norte* (con fórmulas activas, no valores pegados) y un archivo de texto breve con el análisis de los errores del borrador IA de la Actividad 1.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Integra de forma operativa en un único caso las magnitudes eléctricas (Tema 1), tipos de sistemas (Tema 2), marco normativo (Tema 3), cálculo de cargas (Tema 4), secciones de conductores (Tema 5), protecciones (Tema 6) y longitudes/agrupamientos derivados del trazado real (Tema 7).
- **Competencias que desarrolla:** Cálculo eléctrico integrado de principio a fin, análisis de sensibilidad ante caídas de tensión acumuladas, documentación auditable y supervisión crítica de herramientas de IA.
- **Conexión con el tema anterior y posterior:**
  - *Tema anterior:* **Tema 7. Criterios de trazo de instalaciones eléctricas** (Bloque 1, 7/11), que suministra las longitudes reales, métodos de instalación y factores de agrupamiento introducidos aquí en el cálculo.
  - *Tema posterior:* **Tema 9. Sistema de puesta a tierra** (Bloque 1, 9/11), que completará el diseño eléctrico del edificio protegiendo las envolventes, masas y neutros frente a defectos de aislamiento y sobretensiones antes de calcular su resistencia (Tema 10) y volcar todo al esquema unifilar final (Tema 11).
- **Evidencia de aprendizaje que dejará el alumnado:** Dos piezas clave para su portafolio: (1) la hoja de cálculo auditable y el informe técnico del caso *Oficinas Ebro Norte*, y (2) su plantilla personal de memoria preliminar con protocolo de verificación independiente.

---

## Siguientes pasos para el formador

1. **Comprobar que la plantilla Excel/Sheets base** de la Actividad 2 y del caso *Oficinas Ebro Norte* está libre de fórmulas ocultas y tiene las unidades claramente etiquetadas.
2. **Preparar el borrador erróneo de IA (Actividad 1)** imprimiéndolo o subiéndolo al aula virtual con formato realista de salida de chatbot.
3. **Recordar al alumnado el marco normativo orientativo** antes de comenzar, aclarando qué tablas ilustrativas se usan en clase y cuáles deben consultarse en el reglamento oficial del país de cada alumno.
4. **Revisar las hojas entregadas del caso** comprobando que el alumnado calculó la caída acumulada y resolvió el problema del circuito de alumbrado de $52\text{ m}$ con criterio de ingeniería y no solo subiendo secciones sin límite.
5. **Anticipar la conexión con el Tema 9** pidiendo que conserven los valores de intensidad de defecto/cabecera y el esquema TT/TN-S elegido para diseñar la puesta a tierra del edificio.
