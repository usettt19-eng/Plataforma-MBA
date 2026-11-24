# Tema 5. Asistencia con cálculos, fórmulas y procedimientos de diseño

> **Aviso técnico, normativo y de responsabilidad profesional:** Este módulo pertenece al programa de especialización técnica *IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas* (no es un MBA ni habilita legalmente para firmar cálculos o proyectos eléctricos oficiales). **Ningún resultado numérico o aritmético generado directamente en texto por un modelo de lenguaje (ChatGPT, Claude u otro) constituye un cálculo válido ni una comprobación reglamentaria.** El proyectista debe verificar siempre de forma independiente las fórmulas, unidades del Sistema Internacional (SI), factores de corrección, tablas normativas aplicables según país y edición vigente, y validar los resultados en hoja de cálculo auditada o software técnico homologado, así como simular la fotometría completa en DIALux.

---

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Tema 5. Asistencia con cálculos, fórmulas y procedimientos de diseño |
| **Bloque y posición dentro del programa** | Bloque 6: Inteligencia artificial aplicada a instalaciones eléctricas — Tema 5 de 11 (Tema 44 de 50 del programa) |
| **Programa formativo** | IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas (Especialización Técnica en Ingeniería Eléctrica, BIM, Iluminación, Renderizado e IA Asistida — 6 módulos / 50 temas) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Haber completado los Temas 1 a 4 del Bloque 6; conocimientos previos de cálculo de cargas, conductores, caídas de tensión y protecciones (Bloque 1), método de los lúmenes y fotometría en DIALux (Bloque 2), y manejo intermedio de hojas de cálculo (Excel / LibreOffice Calc) |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado utilizará ChatGPT y Claude como apoyo explicativo para desglosar paso a paso procedimientos y plantillas de fórmulas eléctricas y lumínicas (potencia, corriente $I_b$, caída de tensión y método de los lúmenes), transfiriendo siempre la ejecución matemática a hojas de cálculo auditables o software especializado, verificando unidades SI, redondeos y criterios reglamentarios vigentes de forma independiente. |

---

## 2. Objetivos de aprendizaje

Al finalizar esta sesión de 4 horas, el alumnado será capaz de:

1. **Identificar** las variables físicas, unidades SI y condiciones de contorno necesarias antes de solicitar a un LLM la formulación simbólica de un cálculo eléctrico o fotométrico preliminar. *(Nivel de Bloom: Recordar)*
2. **Explicar** por qué los modelos de lenguaje fallan con frecuencia al ejecutar aritmética multi-paso directamente en texto predictivo (omisión de $\sqrt{3}$, factor $2$, rendimiento $\eta$, unidades mixtas o inversiones algebraicas) y por qué debe delegarse el cómputo exacto en herramientas deterministas. *(Nivel de Bloom: Comprender)*
3. **Aplicar** un flujo estructurado en ChatGPT o Claude para generar explicaciones paso a paso y sintaxis de fórmulas auditables en Excel/LibreOffice Calc (corriente $I_b$, caída de tensión $\Delta U$ y método de los lúmenes) sin aceptar cálculos hechos «de palabra» por el chat. *(Nivel de Bloom: Aplicar)*
4. **Analizar** memorias de cálculo preliminares generadas por IA para localizar errores silenciosos de unidades ($\text{W}$ vs. $\text{kW}$, $\text{m}\Omega/\text{m}$, temperatura de servicio), redondeos prematuros o suposiciones ocultas de $\cos\varphi$ y conductividad. *(Nivel de Bloom: Analizar)*
5. **Validar** mediante cálculo independiente en hoja auditable y contraste con software especializado (calculador eléctrico homologado y DIALux) cualquier procedimiento de predimensionado antes de incorporarlo a un proyecto. *(Nivel de Bloom: Evaluar)*

---

## 3. Contenidos esenciales

### 3.1. Uso explicativo de la IA: pedir procedimientos y ecuaciones simbólicas, nunca resultados finales en texto

#### Explicación breve y clara
La regla de oro del diseño asistido por IA en cálculo de ingeniería es sencilla: **utiliza el LLM como profesor particular o estructurador de procedimientos, jamás como calculadora**. Cuando un proyectista pide a ChatGPT o Claude «dame la sección del cable y la caída de tensión de este motor», le está pidiendo al modelo que ejecute dos cosas distintas a la vez: recordar una metodología y hacer aritmética encadenada sobre tokens de texto. En cambio, cuando le pide **desglosar el procedimiento paso a paso en formato simbólico**, definir cada variable con su unidad SI y listar qué parámetros reglamentarios faltan por consultar, el rendimiento del asistente se multiplica y el riesgo de error silencioso cae en picado.

En este enfoque explicativo, las fórmulas clave del predimensionado se solicitan siempre en forma algebraica explícita antes de sustituir un solo número:
- **Potencia e intensidad de diseño ($I_b$):**
  - Circuito monofásico: $I_b = \frac{P}{U \cdot \cos\varphi}$ (si es motor con potencia mecánica útil $P_{mec}$ en eje, debe dividirse antes por el rendimiento $\eta$: $P_{elec} = \frac{P_{mec}}{\eta}$).
  - Circuito trifásico equilibrado: $I_b = \frac{P}{\sqrt{3} \cdot U_L \cdot \cos\varphi}$.
- **Caída de tensión resistiva orientativa ($\Delta U$)** *(para secciones pequeñas donde la reactancia $X$ es despreciable; en secciones medias/altas debe aplicarse la expresión completa con impedancia $R\cos\varphi + X\sin\varphi$ y verificar la fórmula admitida por el reglamento aplicable)*:
  - Monofásica: $\Delta U = \frac{2 \cdot L \cdot I_b \cdot \cos\varphi}{\gamma \cdot S} = \frac{2 \cdot L \cdot P}{\gamma \cdot S \cdot U}$ (V), $\quad \Delta U\% = \frac{\Delta U}{U} \times 100$.
  - Trifásica: $\Delta U = \frac{\sqrt{3} \cdot L \cdot I_b \cdot \cos\varphi}{\gamma \cdot S} = \frac{L \cdot P}{\gamma \cdot S \cdot U_L}$ (V), $\quad \Delta U\% = \frac{\Delta U}{U_L} \times 100$.
- **Método de los lúmenes (solo predimensionado manual previo a DIALux):**
  $$\Phi_{total} = \frac{E_m \cdot A}{CU \cdot MF}, \qquad N = \frac{\Phi_{total}}{n \cdot \Phi_L}$$

#### Conceptos clave
- **Separación entre planteamiento simbólico y cómputo numérico:** pedir al LLM las ecuaciones, el significado de cada símbolo y el árbol de decisión, ejecutando después las operaciones en Excel/Calc o software validado.
- **Trazabilidad de hipótesis de partida:** exigir al asistente que liste explícitamente qué valores supone ($\cos\varphi$, rendimiento $\eta$, temperatura del conductor $70\,^\circ\text{C}$ PVC vs. $90\,^\circ\text{C}$ XLPE, altura útil de cálculo).
- **Límite del predimensionado manual en iluminación:** el método de los lúmenes estima un número inicial $N$ de luminarias, pero **no** sustituye la simulación en DIALux ni comprueba uniformidad $U_0$, deslumbramiento $UGR$ ni densidad de potencia/eficiencia energética ($VEEI$).
- **Diferencia entre $I_b$, $I_n$ e $I_z$:** recordar que calcular $I_b$ es solo el primer paso; la elección final de protección ($I_n$) y cable ($I_z$) exige consultar tablas reglamentarias de instalación, agrupamiento, temperatura y comprobar cortocircuito en herramienta validada.

#### Definiciones necesarias
- **Formulación simbólica auditada:** representación algebraica explícita de un procedimiento de cálculo en la que todas las magnitudes aparecen con sus símbolos, definiciones y unidades SI antes de introducir datos numéricos.
- **Corriente de diseño ($I_b$):** intensidad de corriente prevista que circulará en servicio normal por un circuito a plena carga simultánea, calculada a partir de la potencia eléctrica absorbida, tensión nominal y factor de potencia.

#### Ejemplo práctico realista
Un técnico necesita documentar paso a paso en una memoria de cálculo el dimensionamiento preliminar de un motor ventilador trifásico de **$11\text{ kW}$ mecánicos** en eje ($\eta = 0,90$, $\cos\varphi = 0,85$, $U_L = 400\text{ V}$). En lugar de pedir «dime los amperios», solicita a Claude: *«Desglosa en forma simbólica paso a paso cómo obtener la potencia eléctrica absorbida $P_{elec}$ y la intensidad de diseño $I_b$, indicando unidades SI y dónde suelen equivocarse los proyectistas; NO inventes el calibre del cable»*. El asistente entrega limpiamente los pasos: (1) $P_{elec} = P_{mec} / \eta$, (2) $I_b = P_{elec} / (\sqrt{3} \cdot U_L \cdot \cos\varphi)$, y advierte consultar el reglamento vigente por posibles factores de arranque/sobreintensidad de motores. El técnico ejecuta la aritmética en su calculadora/Excel: $P_{elec} = 11.000 / 0,90 = 12.222,22\text{ W}$ e $I_b = 12.222,22 / (\sqrt{3} \times 400 \times 0,85) \approx 20,75\text{ A}$.

#### Errores frecuentes
- Preguntar «¿qué cable pongo?» esperando que el LLM aplique a la vez potencia, rendimiento, $\sqrt{3}$, factor de agrupamiento, caída de tensión y protección magnetotérmica en un solo párrafo de texto.
- Tomar la potencia nominal mecánica de la placa de un motor ($11\text{ kW}$) como si fuera la potencia eléctrica absorbida, olvidando dividir por el rendimiento $\eta$.
- Creer que el método de los lúmenes calculado con ayuda de IA valida un proyecto de alumbrado sin simular después con archivos `.ldt`/`.ies` en DIALux.
- Confundir la tensión de línea ($400\text{ V}$) con la tensión fase-neutro ($230\text{ V}$) al transcribir fórmulas entre circuitos trifásicos y monofásicos.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué conviene solicitar a ChatGPT o Claude la estructura simbólica de un procedimiento de cálculo antes de introducir valores numéricos?
2. ¿Qué error se comete al introducir directamente la potencia mecánica de un motor en la fórmula de corriente $I_b$ sin aplicar su rendimiento $\eta$?
3. ¿Por qué el método de los lúmenes sirve únicamente como estimación inicial orientativa y no sustituye al estudio fotométrico en DIALux?

---

### 3.2. Riesgos aritméticos en LLMs: unidades SI, redondeos y errores silenciosos

#### Explicación breve y clara
Incluso modelos muy avanzados cometen fallos sistemáticos cuando operan cifras directamente en texto conversacional (sin ejecutar un intérprete de código o sin trasladar las fórmulas a una hoja de cálculo). En ingeniería eléctrica e iluminación, los cuatro fallos aritméticos más peligrosos detectados en respuestas de LLMs son:

1. **Errores de escala y prefijos de unidades SI:** mezclar $\text{kW}$ con $\text{W}$ (factor $1.000$), $\text{kVA}$ con $\text{VA}$, resistividad $\Omega\cdot\text{mm}^2/\text{m}$ con $\Omega\cdot\text{m}$, o longitud en $\text{cm}$ frente a $\text{m}$.
2. **Omisión o duplicación de factores topológicos ($\sqrt{3}$ y $2$):** olvidar el factor $2$ (ida y vuelta) en caída de tensión monofásica —subestimando la caída de tensión exactamente a la mitad— o aplicar $\sqrt{3}$ con tensión de fase $230\text{ V}$.
3. **Inversiones algebraicas en cocientes:** colocar el factor de mantenimiento ($MF$) o el coeficiente de utilización ($CU$) multiplicando en el numerador en lugar de dividir en el denominador en el método de los lúmenes, o multiplicar por el rendimiento $\eta$ en lugar de dividir.
4. **Redondeos silenciosos o a la baja:** redondear el número de luminarias $N = 12,3$ hacia abajo a $12$ sin advertir que incumple el $E_m$ mínimo, o truncar $I_b = 15,8\text{ A}$ a $15\text{ A}$ encubriendo la superación de un calibre comercial de $16\text{ A}$ tras factores de corrección.

#### Conceptos clave
- **Análisis dimensional obligatorio:** verificar en cada ecuación que las unidades de entrada se cancelan correctamente para producir la unidad esperada ($\text{W} / \text{V} = \text{A}$; $\text{lx} \cdot \text{m}^2 = \text{lm}$).
- **Redondeo conservador de ingeniería:** en seguridad eléctrica y niveles mínimos de iluminancia, los redondeos intermedios no deben truncar valores al alza de intensidad ni a la baja de flujo luminoso; los redondeos se aplican con criterio técnico al final.
- **Sensibilidad a la temperatura del conductor ($\gamma_{20}$ vs. $\gamma_{70}$ / $\gamma_{90}$):** tomar la conductividad del cobre a $20\,^\circ\text{C}$ ($\approx 56\text{ m}/(\Omega\cdot\text{mm}^2)$) en vez de la conductividad a temperatura máxima de servicio ($70\,^\circ\text{C} \approx 44$ o $90\,^\circ\text{C} \approx 41$ según tabla/reglamento vigente a comprobar) subestima la caída de tensión en torno a un $20\text{–}27\,\%$.
- **Detección por estimación de orden de magnitud:** entrenar el «ojo de ingeniero» (p. ej. a $230\text{ V}$ monofásico, $1\text{ kW}$ con $\cos\varphi \approx 1$ son $\approx 4,35\text{ A}$; a $400\text{ V}$ trifásico, $1\text{ kW}$ con $\cos\varphi \approx 0,85$ son $\approx 1,7\text{ A}$) para detectar absurdos del chat en dos segundos.

#### Definiciones necesarias
- **Análisis dimensional:** comprobación sistemática de la coherencia de las unidades físicas (Sistema Internacional) en ambos miembros de una ecuación antes de dar por válido su resultado numérico.
- **Redondeo prematuro:** aproximación numérica aplicada a resultados intermedios dentro de una cadena de cálculo que amplifica el error acumulado o oculta el incumplimiento ajustado de un límite reglamentario.

#### Ejemplo práctico realista
Un asistente de IA calcula textualmente la caída de tensión de una línea monofásica de aluminio o cobre: *«Circuito monofásico $230\text{ V}$, $P = 2.760\text{ W}$, $\cos\varphi = 1,0$, longitud $L = 40\text{ m}$, sección cobre $S = 2,5\text{ mm}^2$»*. El LLM responde: *«$I = 12\text{ A}$, $\Delta U = (40 \times 12)/(44 \times 2,5) = 4,36\text{ V} = 1,90\,\%$, cumple de sobra un límite típico del $3\,\%$»*. Al hacer el **análisis manual de verificación**, el ingeniero detecta que falta el factor $2$ (conductor de fase + neutro):
$$\Delta U_{real} = \frac{2 \times 40 \times 12}{44 \times 2,5} = \frac{960}{110} = 8,73\text{ V} \rightarrow \frac{8,73}{230} \times 100 = \mathbf{3,80\,\%}$$
La caída de tensión real ($3,80\,\%$) supera ese límite ilustrativo del $3\,\%$ (quedando además por comprobar la caída acumulada aguas arriba y la normativa exacta aplicable). Con sección $S = 4\text{ mm}^2$, resulta $\Delta U = \frac{960}{44 \times 4} = 5,45\text{ V} \rightarrow \mathbf{2,37\,\%}$. El error aritmético silencioso del LLM habría provocado un incumplimiento real en obra.

#### Errores frecuentes
- Leer únicamente el porcentaje final que escribe el chat (`1,90 % — CUMPLE`) sin revisar cada factor multiplicado en el numerador y denominador.
- Usar en el cálculo valores de conductividad a $20\,^\circ\text{C}$ sugeridos por el LLM cuando la norma aplicable exige calcular a temperatura máxima de servicio del aislamiento ($70\,^\circ\text{C}$ o $90\,^\circ\text{C}$).
- Confundir reactancia inductiva unitaria $X$ ($\Omega/\text{km}$ vs. $\text{m}\Omega/\text{m}$) en alimentadores de gran sección ($> 35\text{ mm}^2$) donde ya no basta despreciar la componente inductiva.
- Dejar que la IA convierta $\text{kVA}$ a $\text{kW}$ suponiendo $\cos\varphi = 1$ sin advertir al técnico.

#### Preguntas que el alumnado debería poder responder
1. ¿Cuál es la regla rápida de orden de magnitud en amperios por cada $\text{kW}$ en monofásica ($230\text{ V}$) y en trifásica ($400\text{ V}$) para detectar disparates numéricos de un LLM al instante?
2. ¿Por qué omitir el factor $2$ en caída de tensión monofásica o usar conductividad a $20\,^\circ\text{C}$ falsea por defecto el cumplimiento reglamentario?
3. ¿Qué diferencia hay entre redondeo conservador al final del cálculo y redondeo prematuro en pasos intermedios?

---

### 3.3. Construcción asistida de plantillas verificables en hoja de cálculo

#### Explicación breve y clara
El uso más productivo y seguro de ChatGPT y Claude en cálculos eléctricos consiste en pedirles que **generen las fórmulas exactas listas para pegar en una hoja de cálculo** (Microsoft Excel o LibreOffice Calc), separando estrictamente la hoja en cuatro zonas auditables:
1. **Bloque de Entradas del Proyecto** (celdas editables con unidad SI en columna adyacente: `P_W`, `U_V`, `cos_phi`, `L_m`, `S_mm2`).
2. **Bloque de Constantes y Límites Normativos** (con columna obligatoria `Fuente / Norma verificada` donde el proyectista anota el artículo vigente comprobado, nunca dejado en blanco).
3. **Bloque de Cálculo Determinista Intermedio** (fórmulas de Excel limpias para $I_b$, $\Delta U$ en voltios, $\Delta U\%$ o $\Phi_{total}$ y $N_{calc}$).
4. **Bloque de Comprobación Automática (`SI(...)` / `IF(...)`)** que devuelva alertas visibles (`REVISAR` / `OK`) sin ocultar los márgenes reales.

De este modo, la IA ayuda a escribir sintaxis limpia (incluidas funciones condicionales o redondeo al alza `REDONDEAR.MAS` / `ROUNDUP`), mientras que **el motor aritmético exacto es Excel o Calc**, auditable celda por celda por cualquier revisor técnico.

#### Conceptos clave
- **Hoja auditable (*White-Box Spreadsheet*):** libro donde ninguna constante está oculta «a fuego» dentro de una fórmula (prohibido escribir `=B4*0,0227/D4` sin celda explícita de $\rho$ o $\gamma$ con su fuente).
- **Atención a la configuración regional:** comprobar separador de argumentos (`;` en configuración española frente a `,` en inglesa) y nombre de funciones (`RAIZ` vs. `SQRT`, `REDONDEAR.MAS` vs. `ROUNDUP`) al pedir fórmulas a un LLM.
- **Pruebas de frontera (*Unit Testing* manual de la hoja):** comprobar la plantilla recién generada con un caso calculado a mano conocido antes de aplicarla a 40 circuitos reales.
- **Control de cambios de versión:** bloquear o colorear celdas de fórmula frente a celdas de entrada para evitar sobrescrituras accidentales en proyectos en equipo.

#### Definiciones necesarias
- **Constante enterrada (*Hardcoded Constant*):** valor numérico escrito directamente dentro de una fórmula de hoja de cálculo sin referencia a una celda documentada, lo que impide auditar su origen normativo o térmico.
- **Caso de prueba de referencia (*Benchmark Case*):** ejemplo numérico sencillo resuelto manualmente y verificado que se introduce en una plantilla de cálculo nueva para comprobar que todas sus fórmulas devuelven exactamente el resultado esperado.

#### Ejemplo práctico realista
Un proyectista pide a ChatGPT: *«Genera una tabla de estructura para Excel en español (separador punto y coma `;`) que calcule corriente $I_b$, caída de tensión resistiva en V y en %, y un indicador de comprobación para circuitos trifásicos y monofásicos según una columna `Fases` (1 o 3). No calcules números: dame solo las etiquetas de columnas y la fórmula exacta usando referencias de fila 2»*. El asistente devuelve las fórmulas, y el técnico las copia en Calc/Excel separando constantes en la fila superior:
- Corriente $I_b$ (en `H2`): `=SI(B2=3; C2/(RAIZ(3)*D2*E2); C2/(D2*E2))` (donde `B2` = fases `1` o `3`, `C2` = potencia eléctrica en `W`, `D2` = tensión nominal en `V`, `E2` = $\cos\varphi$).
- Caída de tensión $\Delta U$ en V (en `I2`): `=SI(B2=3; (F2*C2)/($B$1*G2*D2); (2*F2*C2)/($B$1*G2*D2))` (donde `F2` = longitud en `m`, `G2` = sección en $\text{mm}^2$, y `$B$1` = conductividad $\gamma$ en $\text{m}/(\Omega\cdot\text{mm}^2)$ documentada con fuente normativa).
Antes de usarla en el proyecto, el técnico mete el caso conocido del compresor trifásico ($15.000\text{ W}, 400\text{ V}, 0,85, 55\text{ m}, 6\text{ mm}^2, \gamma=44$) y verifica que Excel arroja exactamente `25,47 A` y `7,81 V` (`1,95 %`), validando la fórmula determinista.

#### Errores frecuentes
- Copiar fórmulas generadas por el LLM en inglés (`=IF(B2=3, ...)`) en un Excel en español con punto y coma `;` y pensar que está roto en vez de ajustar idioma/delimitador.
- Dejar valores fijos como `44` o `56` escritos dentro de la fórmula sin celda dedicada de parámetro ni nota de temperatura de servicio.
- Usar la fórmula simplificada solo resistiva en líneas largas de gran sección (p. ej. $95\text{ mm}^2$ o $150\text{ mm}^2$) sin incluir el término inductivo $X\sin\varphi$ cuando el cálculo técnico riguroso lo exige.
- No validar la hoja con un caso de prueba manual antes de procesar todo el cuadro eléctrico.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué nunca debe «enterrarse» una constante como la conductividad $\gamma$ o el límite de caída de tensión dentro de una fórmula de Excel?
2. ¿Cómo se comprueba en menos de dos minutos que una fórmula de Excel sugerida por ChatGPT o Claude funciona correctamente en todas sus ramas condicionales?
3. ¿Qué ventaja tiene usar la IA para generar sintaxis de Excel/Calc frente a pedirle que calcule directamente los 25 circuitos de un cuadro en el chat?

---

### 3.4. Validación cruzada independiente en software especializado y normativa vigente

#### Explicación breve y clara
Contar con una hoja de cálculo propia verificada no significa que todo el diseño eléctrico o lumínico esté cerrado: la hoja cubre eficazmente comprobaciones preliminares, tabulaciones rápidas y verificación transparente de circuitos sencillos, pero un proyecto completo requiere **validación cruzada independiente** en el entorno especializado correspondiente y frente a la **normativa vigente de aplicación**:

1. **En cálculo eléctrico reglamentario:** la selección final de sección de conductor y dispositivo de protección exige comprobar simultáneamente criterio térmico ($I_b \le I_n \le I_z$ tras aplicar todos los factores de corrección por método de instalación, agrupamiento, temperatura ambiente o enterramiento), caída de tensión acumulada desde el origen de la instalación, intensidad de cortocircuito mínima/máxima, protección frente a contactos indirectos y poder de corte en software eléctrico homologado o memoria de cálculo completa conforme al reglamento del país.
2. **En iluminación (DIALux):** la estimación hecha por el método de los lúmenes solo sirve para elegir orden de magnitud de unidades; la validación real ocurre en DIALux cargando archivos fotométricos `.ldt`/`.ies` oficiales de fabricante, reflectancias reales y altura de plano útil, comprobando $E_m$, $U_0$, $UGR$ y eficiencia energética ($VEEI$ u otro índice aplicable).
3. **En modelado BIM (Revit MEP):** una vez validados los calibres, potencias y luminarias fuera de la IA, el técnico actualiza los parámetros de Revit (enlazando directamente con el Tema 6).

#### Conceptos clave
- **Regla de validación en cuatro criterios eléctricos:** capacidad térmica ($I_z$ corregida), caída de tensión acumulada ($\Delta U_{total}$), protección contra sobrecargas/cortocircuitos y protección contra contactos indirectos/choque eléctrico.
- **Contraste cruzado herramienta vs. hoja:** detectar divergencias entre la hoja preliminar y el software de cálculo homologado (por ejemplo, si el software reduce $I_z$ por un factor de agrupamiento de 4 circuitos juntos en bandeja que no se había puesto en la hoja simple).
- **Transferencia controlada a DIALux:** pasar del $N$ estimado por método de los lúmenes a la distribución real en DIALux verificando esquinas, puestos con pantallas ($UGR$) y mantenimiento.
- **Prohibición de «circularidad IA»:** validar siempre con fuente y motor externo a la IA; nunca confirmar un cálculo de ChatGPT preguntándole a Claude ni viceversa.

#### Definiciones necesarias
- **Caída de tensión acumulada:** suma de las caídas de tensión parciales desde el origen reglamentario de la instalación (acometida/derivación individual o salida de transformador, según norma aplicable) hasta el receptor más desfavorable aguas abajo de cada subcuadro.
- **Validación cruzada independiente:** confirmación de los resultados preliminares de diseño mediante la ejecución paralela en software técnico específico (calculador eléctrico normativo, DIALux) y comprobación directa sobre la edición oficial del reglamento vigente aplicable.

#### Ejemplo práctico realista
Tras predimensionar en su hoja auditada un taller mecánico ($240\text{ m}^2$, método de los lúmenes con $N = 12,1 \rightarrow 15$ luminarias en cuadrícula $3 \times 5$ de $12.000\text{ lm}$ cada una), el proyectista introduce esa misma cuadrícula y el archivo fotométrico real `.ldt` en **DIALux**. Aunque la iluminancia media calculada en DIALux es de $365\text{ lx}$ (por encima del objetivo ilustrativo de $300\text{ lx}$), el software revela que en una zona de banco de precisión junto a la pared lateral la uniformidad cae a $U_0 = 0,41$ (por debajo de un objetivo de $0,60$) y un puesto de inspección sufre $UGR = 23$. La hoja de cálculo del método de los lúmenes jamás habría visto esa sombra lateral ni el deslumbramiento: gracias a la validación en DIALux, el proyectista desplaza ligeramente las filas laterales y cambia la óptica antes de cerrar el modelo en Revit MEP.

#### Errores frecuentes
- Quedarse únicamente con el cálculo preliminar del método de los lúmenes en Excel y no comprobar uniformidad $U_0$ ni $UGR$ en DIALux antes de emitir planos.
- Comprobar la caída de tensión parcial de un circuito secundario olvidando sumarle la caída de tensión de la línea general o subalimentador desde el cuadro principal.
- Seleccionar un cable únicamente porque «cumple caída de tensión» sin verificar su intensidad admisible corregida $I_z$ ni el disparo magnético en cortocircuito mínimo al final de línea.
- Asumir que una hoja de cálculo creada con ayuda de IA sustituye el cumplimiento íntegro de todas las comprobaciones exigidas por la normativa nacional vigente.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué un circuito que cumple sobradamente la caída de tensión ($\Delta U \le 1,5\,\%$) puede seguir siendo reglamentariamente inválido tras verificar $I_z$ o cortocircuito?
2. ¿Qué magnitudes críticas comprueba DIALux con un archivo `.ldt`/`.ies` que el método de los lúmenes en hoja de cálculo no puede evaluar?
3. ¿Cómo se integran correctamente ChatGPT/Claude, la hoja de cálculo auditable y el software técnico especializado en un mismo expediente eléctrico?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** combina desglose de ecuaciones eléctricas y lumínicas con detección activa de trampas aritméticas de los LLMs, programación segura de fórmulas en hoja de cálculo y auditoría numérica completa de un caso industrial.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
|---|---|---|---|
| **1. Apertura y actividad de activación («Cálculo rápido de ojo de ingeniero»)** | 00:00 – 00:20 (20 min) | Proyecta 4 resultados numéricos generados por IA (dos absurdos y dos plausibles pero tramposos) y lanza la Actividad 1 para activar el sentido de orden de magnitud. | Estima mentalmente sin calculadora qué resultados de corriente, caída de tensión y lúmenes son imposibles en menos de 4 minutos y debate por qué. |
| **2. Microexposición A: Uso explicativo de IA y anatomía de los fallos aritméticos** | 00:20 – 01:00 (40 min) | Demuestra cómo pedir procedimientos simbólicos en vez de cifras cerradas; explica con cálculo en vivo los 4 errores típicos (prefijos SI, $\sqrt{3}$/factor $2$, inversión $CU\cdot MF$ / $\eta$, redondeos y temperatura $\gamma$). | Toma notas en ficha de ecuaciones y verifica paso a paso en calculadora el contraste entre caída de tensión con y sin factor $2$ ($3,80\,\%$ vs. $1,90\,\%$). |
| **3. Actividad 2: De procedimiento simbólico en IA a hoja auditable Excel/Calc** | 01:00 – 01:50 (50 min) | Guía la formulación asistida de sintaxis Excel/Calc en español con celdas de constantes documentadas; audita que todos ejecuten un *Benchmark Case* manual. | Usa ChatGPT/Claude para estructurar la tabla simbólica y fórmulas Excel (potencia/corriente $I_b$, $\Delta U$, método de los lúmenes), construye la hoja limpia y la verifica con casos de prueba manuales. |
| **Descanso activo** | 01:50 – 02:05 (15 min) | Pausa recomendada fuera de pantalla; comprueba que las hojas de cálculo base de la Actividad 2 estén funcionando sin errores de sintaxis. | Descansa y prepara su hoja auditable para depurar el Caso práctico. |
| **4. Microexposición B: Validación cruzada en software homologado, DIALux y normativa** | 02:05 – 02:35 (30 min) | Explica los límites de la hoja simple frente a factores de agrupamiento, caída acumulada, cortocircuito y simulación fotométrica real en DIALux (`.ldt`/`.ies`). | Identifica qué parámetros de la hoja preliminar deben contrastarse obligatoriamente en software reglamentario y DIALux antes de modificar Revit MEP. |
| **5. Resolución del Caso práctico (*Talleres Ibérica S.A.*)** | 02:35 – 03:20 (45 min) | Introduce la memoria preliminar defectuosa de *Talleres Ibérica S.A.* con 4 errores ocultos de IA; acompaña a los equipos mientras recalculan en su hoja auditada. | Audita el documento del caso, detecta los 4 fallos matemáticos/de unidades, reconstruye los valores exactos en su hoja de cálculo y define las verificaciones pendientes en normativa y DIALux. |
| **6. Actividad 3 y puesta en común (Transferencia a proyecto propio)** | 03:20 – 03:45 (25 min) | Modera la revisión de dos hojas auditadas del grupo y orienta la adaptación de la plantilla para el cálculo preliminar de circuitos y locales reales propios. | Amplía su libro Excel/Calc incorporando la pestaña *Método de los Lúmenes + Control Caída Acumulada* y valida al menos 3 circuitos propios o del caso integrador. |
| **7. Síntesis, evaluación sumativa y cierre** | 03:45 – 04:00 (15 min) | Resume los mandamientos del cálculo asistido seguro, lanza el cuestionario sumativo final y presenta el puente hacia el Tema 6 (análisis de exportaciones completas de Revit y DIALux). | Completa el cuestionario sumativo (6 ítems), realiza su autoevaluación y guarda su libro maestro de cálculo verificado. |

*Suma total cronometrada:* $20 + 40 + 50 + 15 + 30 + 45 + 25 + 15 = \mathbf{240\text{ minutos (4 horas)}}$.

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Detector humano de disparates aritméticos de IA

- **Nombre:** Detector humano de disparates aritméticos de IA
- **Objetivo:** Activar la intuición física y de órdenes de magnitud del alumnado para detectar de inmediato respuestas numéricamente absurdas o sospechosas emitidas por un LLM.
- **Instrucciones para el alumnado:**
  1. Observa durante 5 minutos las 4 tarjetas proyectadas con cálculos generados por un chat de IA:
     - *Tarjeta A:* Motor trifásico $400\text{ V}$, $P_{elec} = 15\text{ kW}$, $\cos\varphi = 0,85 \rightarrow$ «Corriente aproximada $I_b = 44,1\text{ A}$».
     - *Tarjeta B:* Toma monofásica $230\text{ V}$, $2.300\text{ W}$, $L = 50\text{ m}$, $2,5\text{ mm}^2$ cobre $\rightarrow$ «Caída de tensión $< 0,5\,\%$».
     - *Tarjeta C:* Local oficina $100\text{ m}^2$, $E_m = 500\text{ lx}$, $CU = 0,60$, $MF = 0,80$, paneles de $4.000\text{ lm} \rightarrow$ «Flujo total $24.000\text{ lm}$, hacen falta 6 paneles».
     - *Tarjeta D:* Línea trifásica $400\text{ V}$, $20\text{ kW}$, $\cos\varphi = 0,90 \rightarrow$ «Corriente $I_b \approx 32,1\text{ A}$».
  2. Sin abrir Excel todavía (solo papel/calculadora mental de orden de magnitud), clasifica cada tarjeta como `[PLAUSIBLE]` o `[ERROR GRAVE]` e indica en una frase qué factor olvidó o invirtió la IA.
  3. Comparte tus respuestas en el chat o pizarra.
- **Materiales necesarios:** Diapositiva con las 4 tarjetas, encuesta rápida o pizarra y ficha de trabajo.
- **Tiempo estimado:** 15 minutos (integrados en la Fase 1).
- **Rol del formador:** Destacar las reglas rápidas ($1\text{ kW}$ a $400\text{ V}$ $\approx 1,7\text{ A}$; $1\text{ kW}$ a $230\text{ V}$ $\approx 4,35\text{ A}$; comprobar si $CU\cdot MF$ divide o multiplica) y revelar dónde fallaron las Tarjetas A, B y C (solo D es correcta en orden de magnitud: $20.000 / (\sqrt{3}\times 400\times 0,9) \approx 32,08\text{ A}$).
- **Producto o entregable esperado:** Lista individual con las 4 tarjetas diagnosticadas y explicación de cada trampa.
- **Criterios de éxito:** Al menos el 85 % del grupo identifica los errores de $\sqrt{3}$ (Tarjeta A), factor de longitud/sección (Tarjeta B) e inversión de $CU \cdot MF$ (Tarjeta C: $500 \times 100 / (0,60 \times 0,80) = 104.166,7\text{ lm} \rightarrow 26,04$ paneles, no 6).

### Actividad 2 (Aplicación técnica): Fábrica de fórmulas auditables en Excel/Calc asistida por IA

- **Nombre:** Fábrica de fórmulas auditables en Excel/Calc asistida por IA
- **Objetivo:** Usar ChatGPT o Claude únicamente para generar el esquema simbólico y las fórmulas de hoja de cálculo (en español y sin constantes enterradas), validándolas mediante casos de prueba manuales (*Benchmark Cases*).
- **Instrucciones para el alumnado:**
  1. Redacta un prompt dirigido a ChatGPT/Claude pidiendo la estructura de columnas y fórmulas para Excel/LibreOffice Calc (separador `;` y nombres de funciones en español) que calcule automáticamente:
     - Pestaña 1 (`Electrico`): `P_elec_W` (si viene dada `P_mec_W` y `eta`), `I_b_A` (admite `1` o `3` fases), `dU_V`, `dU_pct`, y columna estado `SI(dU_pct<=Limite_pct; "OK"; "EXCEDE LIMITE")`, referenciando siempre una celda superior documentada para conductividad $\gamma$.
     - Pestaña 2 (`Lumenes_Predim`): `Area_m2`, `Flujo_Total_lm = (Em_lx * Area_m2) / (CU * MF)`, `N_exacto = Flujo_Total_lm / (n_lamp * Flujo_Lum_lm)` y `N_redondeado = REDONDEAR.MAS(N_exacto; 0)`.
  2. Construye la hoja real en Excel/Calc pegando las fórmulas propuestas, corrigiendo cualquier error de idioma o referencia absoluta (`$`).
  3. Introduce 2 *Benchmark Cases* calculados previamente a mano con el formador (p. ej. el motor de $11\text{ kW}$ y el local de oficina de $100\text{ m}^2$) y confirma coincidencia hasta la segunda cifra decimal.
- **Materiales necesarios:** Excel o LibreOffice Calc, acceso a ChatGPT/Claude (o plantilla base de sintaxis), ficha de *Benchmark Cases*.
- **Tiempo estimado:** 50 minutos (Fase 3).
- **Rol del formador:** Revisar que no queden constantes numéricas «enterradas» dentro de las fórmulas, comprobar las referencias absolutas (`$`) y confirmar la coincidencia exacta con los casos de prueba.
- **Producto o entregable esperado:** Libro `Calculadora_Auditada_B6T5.xlsx` (o `.ods`) con pestañas `Electrico` y `Lumenes_Predim` validadas con casos de prueba.
- **Criterios de éxito:** Cero errores `#¡VALOR!` o `#NOMBRE?`, cero constantes ocultas en fórmulas, uso correcto de `REDONDEAR.MAS` y coincidencia del 100 % frente a los cálculos manuales de referencia.

### Actividad 3 (Transferencia a proyecto real): Extensión para caída acumulada y comprobación de circuitos propios

- **Nombre:** Extensión para caída acumulada y comprobación de circuitos propios
- **Objetivo:** Transferir la plantilla auditada a un entorno de proyecto real incorporando suma de caídas parciales (subalimentador + circuito final) y etiquetado claro de lo que exige validación en software homologado y DIALux.
- **Instrucciones para el alumnado:**
  1. Toma tu libro `Calculadora_Auditada_B6T5.xlsx` de la Actividad 2.
  2. Añade dos columnas de control a la pestaña `Electrico`: `dU_AguasArriba_pct` (caída previa del alimentador del cuadro) y `dU_Total_Acum_pct = dU_AguasArriba_pct + dU_pct`, con su alerta vinculada al límite normativo aplicable según el país del alumno (anotando fuente en columna de notas).
  3. Introduce al menos 3 circuitos y 1 local real (anonimizado) de tu proyecto integrador o actividad profesional; incluye una fila final de resumen que indique explícitamente: `[VALIDACIÓN PENDIENTE EN SOFTWARE ELÉCTRICO HOMOLOGADO: Iz corregida / Cortocircuito / Selectividad]` y `[VALIDACIÓN PENDIENTE EN DIALUX: U0 / UGR / VEEI]`.
- **Materiales necesarios:** Hoja `Calculadora_Auditada_B6T5.xlsx` y datos anonimizados del proyecto propio o del caso integrador.
- **Tiempo estimado:** 25 minutos (Fase 6).
- **Rol del formador:** Verificar la suma de caída acumulada (aguas arriba + circuito terminal) y reforzar la conciencia de qué comprobaciones siguen fuera del alcance de una hoja simple.
- **Producto o entregable esperado:** Hoja extendida v2 con al menos 3 circuitos + 1 local calculados y notas explícitas de validación externa pendiente.
- **Criterios de éxito:** Cálculo exacto de caída de tensión acumulada, unidades SI consistentes y advertencias explícitas de contraste en software reglamentario y DIALux.

---

## 6. Caso práctico

### Caso práctico: Auditoría de cálculo preliminar en *Talleres Ibérica S.A.*

#### Contexto empresarial
**Talleres Ibérica S.A.** (nombre ficticio a efectos formativos, código de expediente anonimizado `EXP_IND_11`) está reformando su nave de mecanizado y zona de exposición de **$240\text{ m}^2$** ($20\text{ m} \times 12\text{ m}$, altura de montaje de luminarias $5,5\text{ m}$). Un proyectista con prisa utilizó un chat de IA en modo textual para sacar rápidamente los números preliminares de dos líneas eléctricas críticas y la estimación de luminarias del taller antes de llevarlos a su memoria técnica y al modelo Revit MEP.

#### Situación o problema
Al revisar el documento preliminar titulado *«Anexo de cálculo borrador — EXP_IND_11»*, el responsable técnico sospecha que el asistente de IA cometió varios errores aritméticos silenciosos al operar directamente en texto, pero la hoja parece muy coherente porque todas las cifras están redondeadas y acompañadas de texto persuasivo («cumple sobradamente»). Se pide al equipo auditar los cálculos en hoja determinista independiente, localizar los 4 errores ocultos y emitir los datos corregidos listos para contrastar en software reglamentario y DIALux.

#### Datos disponibles

| Concepto del proyecto (`EXP_IND_11`) | Datos reales verificados de entrada | Resultado erróneo escrito en texto por el LLM |
|---|---|---|
| **Circuito 1: Compresor trifásico** | $P_{elec} = 15\text{ kW}$, $U_L = 400\text{ V}$ (3F+N+PE), $\cos\varphi = 0,85$, $L = 55\text{ m}$, cobre PVC ($\gamma_{70} \approx 44\text{ m}/(\Omega\cdot\text{mm}^2)$ valor ilustrativo a verificar), sección tentativa $S = 6\text{ mm}^2$ | LLM escribió: *$I_b = 15.000 / (400 \times 0,85) = \mathbf{44,12\text{ A}}$* y *$\Delta U = \mathbf{3,38\,\%}$* (omitió $\sqrt{3}$ en $I_b$ y aplicó fórmula mezclada) |
| **Circuito 2: Banco de pruebas monofásico** | $P = 2.760\text{ W}$, $U = 230\text{ V}$, $\cos\varphi = 1,0$, $L = 40\text{ m}$, cobre PVC ($\gamma_{70} \approx 44\text{ m}/(\Omega\cdot\text{mm}^2)$), sección tentativa $S = 2,5\text{ mm}^2$, límite ilustrativo de prueba $3,0\,\%$ | LLM escribió: *$I_b = 12,0\text{ A}$; $\Delta U = (40 \times 12) / (44 \times 2,5) = 4,36\text{ V} = \mathbf{1,90\,\%}$ $\rightarrow$ **CUMPLE** con $2,5\text{ mm}^2$* |
| **Circuito 3: Motor extractor trifásico** | Potencia mecánica útil en eje $P_{mec} = 11\text{ kW}$, rendimiento $\eta = 0,90$, $\cos\varphi = 0,85$, $U_L = 400\text{ V}$ | LLM escribió: *$P_{elec} = 11.000 \times 0,90 = 9.900\text{ W} \rightarrow I_b = \mathbf{16,81\text{ A}}$* |
| **Iluminación nave taller (Predimensionado método de los lúmenes)** | Dimensiones $20\text{ m} \times 12\text{ m}$ ($A = 240\text{ m}^2$), objetivo ilustrativo $E_m = 300\text{ lx}$, $CU = 0,62$, $MF = 0,80$, campana LED $\Phi_L = 12.000\text{ lm}$ ($96\text{ W}$), distribución buscada en cuadrícula regular | LLM escribió: *$\Phi_{total} = 300 \times 240 \times 0,62 \times 0,80 = \mathbf{35.712\text{ lm}}$ $\rightarrow$ $N = 35.712 / 12.000 = 2,98 \rightarrow$ instalar **3 campanas de $96\text{ W}$** (y dio por validado $UGR$ y $U_0$)* |

#### Preguntas de análisis
1. Identifica y nombra exactamente el fallo matemático o físico presente en cada uno de los cuatro apartados generados por el LLM (Circuito 1, Circuito 2, Circuito 3 e Iluminación).
2. Recalcula de forma determinista en tu hoja de cálculo auditada (`Calculadora_Auditada_B6T5.xlsx`) los valores exactos de $I_b$, $\Delta U$ (V y %), $P_{elec}$ y $\Phi_{total} / N$ para los cuatro casos.
3. En el **Circuito 2** ($2.760\text{ W}$, $40\text{ m}$), ¿qué ocurre si aumentamos la sección a $4\text{ mm}^2$ frente a $2,5\text{ mm}^2$, y qué factores adicionales sigue siendo obligatorio verificar en el reglamento vigente antes de aprobar ese calibre?
4. En **Iluminación**, tras obtener el $N$ matemático exacto con el método de los lúmenes, ¿qué cuadrícula simétrica práctica propondrías probar en **DIALux** y por qué los 3 focos propuestos por el LLM habrían dejado la nave casi a oscuras?

#### Tarea a realizar
En equipos de 3 a 4 personas (30 minutos de trabajo en hoja de cálculo + 15 minutos de exposición):
1. **Auditad y corregid los 4 cálculos** en la hoja de cálculo `Calculadora_Auditada_B6T5.xlsx`, generando una tabla comparativa `Cálculo erróneo LLM vs. Cálculo auditado Excel vs. Diferencia/Impacto`.
2. **Redactad la nota de alcance normativo y validación externa** indicando qué verificaciones faltan por completar en software eléctrico homologado ($I_z$ según método de instalación y agrupamiento, caída acumulada desde acometida, cortocircuito, arranque de motor) y qué debe comprobarse en DIALux con archivo `.ldt`/`.ies` ($E_m$, $U_0$, $UGR$, $VEEI$).
3. **Formulad un prompt mejorado** que sí habría sido seguro utilizar en este encargo (pidiendo estructura simbólica y fórmula Excel en lugar de números calculados de palabra).

#### Posibles soluciones o criterios de análisis
Una resolución matemática y técnica exacta debe obtener:
- **Circuito 1 (Compresor trifásico):**
  - *Error LLM:* omitió $\sqrt{3}$ en $I_b$ ($44,12\text{ A}$ frente a $25,47\text{ A}$).
  - *Recálculo exacto:*
    $$I_b = \frac{15.000}{\sqrt{3} \times 400 \times 0,85} = \frac{15.000}{588,897} \approx \mathbf{25,47\text{ A}}$$
    $$\Delta U = \frac{55 \times 15.000}{44 \times 6 \times 400} = \frac{825.000}{105.600} \approx \mathbf{7,81\text{ V}} \rightarrow \mathbf{1,95\,\%}$$
    *(Comprobar además en normativa vigente caída acumulada desde origen, $I_z$ corregida para $6\text{ mm}^2$, corriente de arranque y protecciones de motor).*
- **Circuito 2 (Banco de pruebas monofásico):**
  - *Error LLM:* omitió el factor $2$ (ida y vuelta) en caída monofásica ($1,90\,\%$ falso frente a $3,80\,\%$ real).
  - *Recálculo exacto:* $I_b = 12,0\text{ A}$. Con $S = 2,5\text{ mm}^2$:
    $$\Delta U = \frac{2 \times 40 \times 12}{44 \times 2,5} = \frac{960}{110} \approx \mathbf{8,73\text{ V}} \rightarrow \mathbf{3,80\,\%} \quad (\text{supera el límite ilustrativo del } 3\,\%)$$
    Con $S = 4\text{ mm}^2$:
    $$\Delta U = \frac{2 \times 40 \times 12}{44 \times 4} = \frac{960}{176} \approx \mathbf{5,45\text{ V}} \rightarrow \mathbf{2,37\,\%}$$
    *(Siempre verificar caída acumulada aguas arriba y límite exacto del circuito en el reglamento vigente del país).*
- **Circuito 3 (Motor extractor trifásico):**
  - *Error LLM:* multiplicó por el rendimiento $\eta$ ($11.000 \times 0,90$) en lugar de dividir, subestimando potencia y corriente.
  - *Recálculo exacto:*
    $$P_{elec} = \frac{11.000}{0,90} = \mathbf{12.222,22\text{ W}}, \qquad I_b = \frac{12.222,22}{\sqrt{3} \times 400 \times 0,85} \approx \mathbf{20,75\text{ A}}$$
    *(El error del LLM habría dado $16,81\text{ A}$, un $19\,\%$ por debajo de la corriente real, con riesgo grave de disparo intempestivo de protección o subdimensionado).*
- **Iluminación nave taller (Método de los lúmenes):**
  - *Error LLM:* multiplicó $CU \cdot MF$ en el numerador en lugar de dividir, proponiendo $3$ luminarias en vez de $\approx 12\text{–}15$ (daría $\sim 74\text{ lx}$ en vez de $300\text{ lx}$!), además de afirmar sin cálculo DIALux que cumple $UGR$ y $U_0$.
  - *Recálculo exacto:*
    $$\Phi_{total} = \frac{300 \times 240}{0,62 \times 0,80} = \frac{72.000}{0,496} = \mathbf{145.161,29\text{ lm}}, \qquad N = \frac{145.161,29}{12.000} = \mathbf{12,10\text{ luminarias}}$$
    Para una cuadrícula regular simétrica en $20\text{ m} \times 12\text{ m}$ que asegure margen suficiente, el técnico prueba en **DIALux** una disposición **$3 \times 5 = 15$ luminarias** (o $3 \times 4 = 12$ ajustando flujo por unidad) con archivo fotométrico `.ldt`/`.ies` real para comprobar $E_m \ge 300\text{ lx}$, $U_0$, $UGR$ y eficiencia energética conforme a la norma vigente aplicable.

#### Preguntas de reflexión final
- De los 4 errores que cometió el LLM en el caso *Talleres Ibérica S.A.*, ¿cuál te habría costado más detectar si solo hubieras leído la respuesta de pasada?
- ¿Por qué pasar 10 minutos construyendo una plantilla Excel con fórmulas sugeridas por IA es mucho más rápido y seguro que revisar 20 cálculos aritméticos hechos de palabra en un chat?

---

## 7. Evaluación

### Evaluación diagnóstica
- **Instrumento:** Actividad 1 (*Detector humano de disparates aritméticos de IA*) con 4 tarjetas de estimación física al inicio de la sesión.
- **Finalidad:** Calibrar la capacidad inicial del alumnado para detectar magnitudes eléctricas y lumínicas incoherentes antes de abrir herramientas de cálculo.

### Evaluación formativa
- **Instrumento:** Revisión en directo durante la **Actividad 2** (comprobación de sintaxis de fórmulas Excel/Calc, eliminación de constantes enterradas y ajuste frente a *Benchmark Cases*) y acompañamiento durante la resolución numérica del **Caso práctico** (*Talleres Ibérica S.A.*).
- **Retroalimentación:** Corrección inmediata de delimitadores regionales (`;` vs. `,`), direcciones relativas/absolutas (`$`), redondeos conservadores y olvido de $\eta$ o factor $2$.

### Evaluación sumativa
Consta de dos evidencias complementarias al finalizar el tema:
1. **Cuestionario sumativo (6 ítems de análisis matemático de errores IA y procedimiento de cálculo, 10 minutos, 40 % de la nota):** evalúa detección de omisión de $\sqrt{3}$ / factor $2$, errores con $\eta$, método de los lúmenes, análisis dimensional SI y límites entre hoja de cálculo, DIALux y software homologado.
2. **Entregable técnico determinista (60 % de la nota):** entrega de (a) libro `Calculadora_Auditada_B6T5.xlsx` con pestañas `Electrico` (incluyendo caída acumulada de Actividad 3) y `Lumenes_Predim` validadas con *Benchmark Cases*, y (b) tabla de auditoría y recálculo del caso *Talleres Ibérica S.A.*, evaluado con la siguiente rúbrica.

### Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
|---|---|---|---|---|
| **1. Uso explicativo de IA (simbólico vs. aritmético)** | Pide directamente resultados numéricos al chat y los copia sin comprobar en memoria o hoja de cálculo. | Pide pasos explicativos, pero acepta redondeos o supuestos ocultos ($\cos\varphi$, $\gamma$) sin cuestionarlos. | Solicita formulación simbólica y sintaxis Excel/Calc sin delegar aritmética en texto predictivo, documentando hipótesis. | Integra además restricciones de unidades SI, alertas de hipótesis omitidas y preguntas de verificación normativa en el prompt. |
| **2. Auditoría de unidades SI, factores y errores silenciosos** | No detecta omisiones de $\sqrt{3}$, factor $2$, rendimiento $\eta$ o inversión de $CU \cdot MF$ en el caso práctico. | Detecta 2 de los 4 errores del caso práctico, pero comete algún fallo de conversión de unidades o redondeo al recalcular. | Identifica y corrige los 4 errores del caso práctico con análisis dimensional limpio y exactitud matemática verificada. | Explica además el impacto técnico/reglamentario de cada error en obra y formula reglas rápidas de control de orden de magnitud. |
| **3. Calidad y auditabilidad de la hoja de cálculo** | Contiene errores de fórmula, constantes numéricas enterradas sin origen o cálculos manuales escritos como texto fijo. | Las fórmulas funcionan parcialmente, pero mezclan constantes fijas o carecen de *Benchmark Case* o caída acumulada. | Hoja limpia y determinista sin constantes enterradas, separando entradas, parámetros normativos con fuente y comprobación por *Benchmark Case*. | Añade validación visual condicional, caída acumulada aguas arriba, formato protegido para equipo y trazabilidad completa de versiones. |
| **4. Validación cruzada externa (Software / DIALux / Norma)** | Da por cerrado el diseño completo con el predimensionado de la hoja de cálculo sin mencionar software eléctrico ni DIALux. | Menciona genéricamente revisar después en otro programa, pero no identifica qué verificaciones concretas faltan. | Explicita qué comprobaciones faltan en software homologado ($I_z$, cortocircuito, selectividad) y en DIALux ($U_0$, $UGR$, $VEEI$) según norma vigente. | Conecta claramente la salida validada de la hoja y software como entrada técnica segura para actualizar parámetros en Revit MEP. |

### Actividad de autoevaluación
Autocomprobación reflexiva breve de cierre (3 minutos):
1. *Si mañana un compañero me pasa una memoria de cálculo donde dice «calculado con ChatGPT», ¿qué tres comprobaciones numéricas haré en los primeros 60 segundos?*
2. *En mi hoja de cálculo habitual, ¿tengo alguna constante importante enterrada dentro de una fórmula sin indicar la norma y temperatura de donde salió?*
3. *¿Qué diferencia operativa tengo clara ahora entre usar el método de los lúmenes como predimensionado y validar la iluminación en DIALux?*

---

## 8. Materiales y recursos

### Guion de diapositivas

- **Slide 1 — Portada y advertencia crítica del Tema 5:** Posición (Tema 44 de 50; Bloque 6, 5/11), objetivos medibles y advertencia destacada: *«LLM = copiloto simbólico y generador de plantillas; NUNCA calculadora técnica ni sustituto de DIALux o software homologado»*.
- **Slide 2 — Activación: Detector humano de disparates (4 tarjetas):** Ejercicios rápidos de orden de magnitud en amperios por kW ($230\text{ V}$ vs. $400\text{ V}$) y coherencia física en lúmenes.
- **Slide 3 — Los 4 errores aritméticos silenciosos más comunes en LLMs:** Prefijos SI ($\text{W}/\text{kW}$), omisión de $\sqrt{3}$ / factor $2$, división vs. multiplicación de $\eta$ o $CU \cdot MF$, y conductividad $\gamma_{20}$ vs. $\gamma_{70}/\gamma_{90}$.
- **Slide 4 — Cómo pedir procedimientos y ecuaciones simbólicas:** Comparativa lado a lado entre «prompt peligroso» (pide número final) y «prompt ingeniero» (pide derivación simbólica, unidades SI y lista de parámetros normativos pendientes).
- **Slide 5 — Arquitectura de una hoja de cálculo auditable (*White-Box*):** 4 zonas claras (Entradas $\rightarrow$ Constantes con fuente normativa $\rightarrow$ Fórmulas Excel limpias $\rightarrow$ Comprobación `SI(...)` + *Benchmark Case*).
- **Slide 6 — Del predimensionado manual a la validación cruzada real:** Por qué el método de los lúmenes solo da $N$ inicial y exige comprobación en DIALux (`.ldt`/`.ies`, $U_0$, $UGR$, $VEEI$), y por qué $\Delta U$ parcial exige $I_z$ corregida, caída acumulada y cortocircuito en software homologado.
- **Slide 7 — Caso práctico *Talleres Ibérica S.A.* (`EXP_IND_11`):** Datos de los 3 circuitos y la nave de $240\text{ m}^2$ con las 4 trampas del LLM listas para auditar en hoja de cálculo.
- **Slide 8 — Solución auditada y puente al Tema 6:** Resumen de los valores corregidos y conexión directa con el Tema 6 (*Análisis y revisión de resultados obtenidos en Revit y DIALux*).

### Ficha de trabajo
Ficha técnica descargable (2 páginas) que contiene:
1. **Formulario resumen de referencia rápida** (potencia, $I_b$ monofásica/trifásica con $\eta$, $\Delta U$ resistiva e inductiva general, y método de los lúmenes) con unidades SI explícitas.
2. **Guía de reglas rápidas de orden de magnitud** (A/kW a $230\text{ V}$ y $400\text{ V}$; $\text{lm}/\text{m}^2 = \text{lx}$).
3. **Tabla de comprobación de *Benchmark Cases*** para verificar cualquier hoja recién creada.

### Plantilla técnica práctica
**Plantilla 6.5 — Esquema de Hoja Auditada (`Calculadora_Auditada_B6T5`) para Excel/Calc en español**

| Columna / Campo | Tipo de dato | Fórmula o contenido modelo (Fila 2) | Unidad SI | Verificación requerida |
|---|---|---|---|---|
| **A: `ID_Circuito`** | Entrada texto | `C-01 (Compresor 3F)` | — | Identificador único anonimizado |
| **B: `Fases`** | Entrada (`1` o `3`) | `3` | — | Validar sistema del cuadro |
| **C: `P_mec_W` / `P_elec_W`** | Entrada / Fórmula | Si motor: `=P_mec_W/eta`; si carga directa: valor en W | $\text{W}$ | No confundir $P_{mec}$ con $P_{elec}$ |
| **D: `U_nominal_V`** | Entrada número | `400` (o `230` si `B2=1`) | $\text{V}$ | Coherente con `Fases` |
| **E: `cos_phi`** | Entrada número | `0,85` | — | Dato real fabricante o supuesto marcado |
| **F: `L_m`** | Entrada número | `55` | $\text{m}$ | Medida real trazado BIM (Revit) |
| **G: `S_mm2`** | Entrada número | `6` | $\text{mm}^2$ | Sección tentativa a validar por $I_z$ y $\Delta U$ |
| **H: `I_b_A`** | **Fórmula Excel** | `=SI(B2=3; C2/(RAIZ(3)*D2*E2); C2/(D2*E2))` | $\text{A}$ | Contraste manual en *Benchmark Case* |
| **I: `dU_V`** | **Fórmula Excel** | `=SI(B2=3; (F2*C2)/($B$1*G2*D2); (2*F2*C2)/($B$1*G2*D2))` | $\text{V}$ | `$B$1` = $\gamma$ documentada (ej. $44$ a $70\,^\circ\text{C}$ PVC, verificar norma vigente; añadir $X\sin\varphi$ si aplica) |
| **J: `dU_Total_Acum_pct`** | **Fórmula Excel** | `=K2 + (I2/D2)*100` *(si `K2` es `dU_AguasArriba_pct`)* | $\%$ | Comparar frente a límite reglamentario vigente |

### Lecturas y recursos recomendados
> **Advertencia de validación obligatoria:** Todas las fórmulas simplificadas, valores orientativos de conductividad eléctrica ($\gamma$), factores de mantenimiento o límites de caída de tensión e iluminancia utilizados como ejemplos didácticos deben contrastarse siempre frente a la **edición oficial vigente del reglamento eléctrico y normas técnicas aplicables en el país y tipo de instalación del proyecto**, y validarse en software técnico especializado y DIALux.

- **Referencias técnicas y normativas (ejemplos ilustrativos por verificar según jurisdicción):**
  - *Reglamento Electrotécnico para Baja Tensión (REBT — RD 842/2002, ITC-BT-19 / guías técnicas oficiales de aplicación)* cuando el proyecto se ejecute en España, o normas nacionales equivalentes (*IEC 60364-5-52*, *NFPA 70 / NEC*) comprobando edición y criterios de temperatura de conductor vigentes.
  - Documentación técnica sobre caída de tensión incluyendo término inductivo en secciones medias/altas y cálculo de cortocircuito (*IEC 60909* / guías técnicas de fabricantes eléctricos — *verificar edición*).
  - Manuales de cálculo fotométrico y documentación oficial de **DIALux** sobre relación entre método manual de los lúmenes, coeficiente de utilización, factor de mantenimiento ($MF$, *ISO/CIE*) y cálculo punto a punto ($E_m$, $U_0$, $UGR$).
- **Documentación de hojas de cálculo auditable:**
  - Documentación oficial de funciones matemáticas y lógicas de **Microsoft Excel** / **LibreOffice Calc** (comprobación de sintaxis localizada y manejo de precisión numérica).

### Glosario de términos clave

| Término | Definición |
|---|---|
| **Análisis dimensional** | Comprobación sistemática de que las unidades físicas (SI) en todos los términos de una fórmula son coherentes y producen la magnitud resultante esperada. |
| **Caída de tensión acumulada** | Pérdida porcentual o en voltios sumada desde el origen reglamentario de la instalación hasta el punto de consumo más lejano tras recorrer derivaciones y circuitos finales. |
| **Caso de prueba (*Benchmark Case*)** | Ejercicio numérico simple resuelto y comprobado manualmente que se utiliza para verificar que todas las fórmulas programadas en una hoja de cálculo arrojan el resultado exacto. |
| **Constante enterrada** | Valor numérico introducido directamente dentro de una fórmula de hoja de cálculo sin referencia a una celda visible documentada, dificultando su auditoría y actualización normativa. |
| **Corriente de diseño ($I_b$)** | Intensidad eléctrica prevista en régimen normal de funcionamiento para la potencia eléctrica demandada de un circuito, base inicial antes de seleccionar protección ($I_n$) y cable ($I_z$). |
| **Formulación simbólica** | Expresión algebraica explícita de un procedimiento técnico con sus variables, definiciones y unidades SI previa a la sustitución de cifras numéricas. |
| **Método de los lúmenes** | Procedimiento manual simplificado de predimensionado de alumbrado interior general para estimar el número inicial de luminarias, que requiere siempre posterior simulación en DIALux. |
| **Redondeo conservador** | Criterio de aproximación numérica que evita subestimar exigencias de seguridad o niveles mínimos de servicio (p. ej. no truncar corrientes ni redondear a la baja el número mínimo de luminarias). |

---

## 9. Adaptaciones

### Sesión presencial
- **Pizarra de derivación paso a paso:** Antes de abrir Excel en la Actividad 2, resolver a tiza/rotulador en pizarra un cálculo completo de motor trifásico y el ejemplo del taller con el método de los lúmenes para fijar el *Benchmark Case* común de toda la clase.
- **Revisión rápida por parejas de pantalla:** Cada estudiante intercambia su hoja de cálculo con el compañero de al lado para intentar «romperla» introduciendo $1$ fase frente a $3$ fases y comprobando si las unidades y etiquetas responden bien.

### Sesión online síncrona
- **Votación rápida en Actividad 1:** Lanzar 4 encuestas seguidas de 30 segundos (Tarjetas A, B, C y D) para mostrar el porcentaje inmediato de acierto antes de revelar la trampa matemática de cada tarjeta.
- **Soporte compartido de depuración de fórmulas:** Si algún participante obtiene error `#NOMBRE?` o `#¡VALOR!` en Excel/Calc por idioma o delimitador `;`, compartir pantalla brevemente en la Fase 3 para depurar en directo ante el grupo.

### Sesión asíncrona
- **Videotutorial de auditoría de fórmulas:** Incluir un vídeo de 12 minutos construyendo desde cero las dos pestañas de `Calculadora_Auditada_B6T5` y probando en vivo los *Benchmark Cases* en Excel y LibreOffice Calc.
- **Entrega evaluable en campus:** Subida del archivo `Calculadora_Auditada_B6T5.xlsx` con la Actividad 3 incorporada (caída acumulada) más la tabla comparativa resuelta del caso *Talleres Ibérica S.A.*.
- **Foro de retos numéricos:** Cada participante publica un ejemplo anónimo de error aritmético encontrado al probar una fórmula eléctrica con ChatGPT o Claude y explica qué regla rápida lo delató.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Recupera y formaliza de manera computacionalmente segura las bases de cálculo de cargas, conductores y caída de tensión del **Bloque 1**, el predimensionado lumínico frente a simulación en **DIALux (Bloque 2)** y las reglas de no delegación aritmética y verificación independiente de los **Temas 1 y 2 del Bloque 6**.
- **Competencias que desarrolla:** Pensamiento cuantitativo y análisis dimensional SI, auditoría de errores matemáticos silenciosos en LLMs, diseño de hojas de cálculo auditables asistidas por IA y validación cruzada en herramientas especializadas.
- **Conexión dentro del plan de 6 módulos / 50 temas:**
  - **Tema anterior:** **Tema 4 del Bloque 6: Elaboración y revisión de memorias descriptivas y especificaciones técnicas** (Tema 43 de 50), asegurando que las cifras reflejadas en memorias descriptivas proceden siempre de hojas de cálculo y software verificados, jamás de aritmética textual de IA.
  - **Tema posterior:** Prepara directamente el **Tema 6 del Bloque 6: Análisis y revisión de resultados obtenidos en Revit y DIALux** (Tema 45 de 50), donde los resultados validados (potencias, corrientes, iluminancias $E_m$, $U_0$, $UGR$ y $VEEI$) se exportarán masivamente desde Revit MEP y DIALux en formato CSV limpio para detectar anomalías, desequilibrios de fases y locales fuera de rango antes de emitir planos.
- **Evidencia de aprendizaje que dejará el alumnado:**
  1. Libro `Calculadora_Auditada_B6T5.xlsx`/`.ods` validado con *Benchmark Cases* y caída de tensión acumulada (Actividades 2 y 3).
  2. Tabla de auditoría y recálculo corregido del caso *Talleres Ibérica S.A.* (`EXP_IND_11`).
  3. Cuestionario sumativo completado.

---

## Siguientes pasos para el formador

1. **Preparar las 4 tarjetas de la Actividad 1 y el archivo base `Talleres_Iberica_Borrador.pdf/.md`** verificando que los cálculos de referencia ($25,47\text{ A}$, $7,81\text{ V}$, $3,80\,\%$ vs. $2,37\,\%$, $20,75\text{ A}$ y $12,10 \rightarrow 15$ luminarias) coinciden con la plantilla docente.
2. **Comprobar compatibilidad Excel / LibreOffice Calc** de las fórmulas sugeridas (idioma español `;` frente a configuraciones en inglés `,`) antes de iniciar la sesión para agilizar la Actividad 2.
3. **Subrayar reiteradamente en clase** que calcular $I_b$ y caída de tensión resistiva en una hoja es solo un apoyo de predimensionado que no exime de comprobar $I_z$, factores de agrupamiento, reactancia inductiva en secciones grandes, cortocircuito y fotometría completa en DIALux conforme al reglamento vigente aplicable.
4. **Conectar el cierre con el Tema 6** pidiendo al alumnado traer o descargar las tablas exportadas simuladas de *panel schedules* de Revit MEP y resultados por local de DIALux para realizar la auditoría integral previa a emisión de planos.
