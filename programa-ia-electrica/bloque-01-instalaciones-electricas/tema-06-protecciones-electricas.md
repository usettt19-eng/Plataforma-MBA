# Tema 6. Protecciones eléctricas

> **Aviso técnico, normativo y de alcance profesional:** Este contenido pertenece a una **especialización técnica en diseño eléctrico, iluminación (DIALux), modelado BIM (Revit MEP), visualización (Twinmotion) e IA aplicada**. No equivale a un MBA ni habilita legalmente para firmar proyectos, certificados o dictámenes eléctricos oficiales sin la titulación y colegiación competentes. Los valores de curvas de disparo, sensibilidades diferenciales, poderes de corte y criterios de coordinación citados son **referencias técnicas ilustrativas** que deben contrastarse siempre con el reglamento vigente del país aplicable, la autoridad competente y las curvas oficiales de ensayo de cada fabricante.

---

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Protecciones eléctricas |
| **Bloque y posición dentro del programa** | Bloque 1: Instalaciones eléctricas — Tema 6 de 11 (Tema 6 de 50 del programa) |
| **Programa formativo** | IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas (6 módulos / 50 temas) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Modalidad** | Online / Híbrida interactiva |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Temas 1 a 5 (ley de Ohm, sistemas TT/TN/IT, verificación normativa, intensidades de diseño $I_B$ y ampacidad corregida de conductores $I_z'$) |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado seleccionará y coordinará dispositivos de protección frente a sobrecorrientes (interruptores termomagnéticos curvas B/C/D, MCCB y fusibles), contactos indirectos y fugas (RCD/GFCI) y sobretensiones (SPD), justificando poder de corte ($I_{cu}/I_{cs}$), selectividad y filiación conforme a datos verificados del fabricante y al reglamento aplicable, sin aceptar parámetros inventados por asistentes de IA ni suponer validación automática en BIM. |

---

## 2. Objetivos de aprendizaje

Al concluir esta sesión de 4 horas, el alumnado será capaz de:

1. **Diferenciar** físicamente los fenómenos de sobrecarga frente a cortocircuito y clasificar los dispositivos principales de protección (MCB curvas B/C/D, MCCB, fusibles, RCD/GFCI y SPD). *(Nivel de Bloom: Comprender)*
2. **Aplicar** las condiciones fundamentales de coordinación entre conductor y dispositivo de protección contra sobrecorrientes ($I_B \le I_n \le I_z'$ e $I_2 \le 1{,}45\,I_z'$ como referencia IEC a verificar) así como la verificación del poder de corte ($I_{cu}/I_{cs}$) frente a la corriente de cortocircuito presunta. *(Nivel de Bloom: Aplicar)*
3. **Analizar** la selección de protecciones diferenciales (sensibilidad $I_{\Delta n}$, tipos AC, A, F y B, coordinación con la puesta a tierra) y de protectores contra sobretensiones (SPD Tipos 1, 2 y 3) para prevenir tanto riesgos eléctricos como disparos intempestivos. *(Nivel de Bloom: Analizar)*
4. **Evaluar** esquemas de coordinación vertical entre cabecera y subcuadros mediante criterios de selectividad (amperimétrica, cronométrica, energética y diferencial) y filiación respaldada por tablas oficiales de fabricante. *(Nivel de Bloom: Evaluar)*
5. **Diseñar** la especificación verificable de protecciones de un cuadro y sus subcuadros para integrarla con el cuadro de cargas y futuros diagramas unifilares, aplicando filtros estrictos contra valores fabricados por IA. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Sobrecorrientes (sobrecarga frente a cortocircuito) y coordinación con el conductor

#### Explicación breve y clara
Los dispositivos de protección contra sobrecorrientes existen para impedir que los conductores y equipos sufran daños térmicos, incendios o esfuerzos destructivos cuando la corriente excede su valor de diseño. Sin embargo, no todas las sobrecorrientes son iguales:
- **Sobrecarga:** exceso moderado de corriente (típicamente entre $1{,}1$ y $5$ veces $I_n$) que circula por un circuito sano debido a conectar demasiadas cargas o a un atasco mecánico de un motor. Su efecto es térmico y progresivo (minutos u horas), por lo que admite cierto retardo antes del disparo.
- **Cortocircuito:** unión accidental de impedancia casi nula entre fases, o entre fase y neutro/tierra. Genera corrientes muy elevadas (miles de amperios, $\text{kA}$) que exigen apertura instantánea en milisegundos para proteger cables y aparamenta.

Para que una protección contra sobrecargas proteja realmente al conductor elegido en el Tema 5, deben cumplirse dos desigualdades básicas de coordinación (criterio clásico de familia IEC 60364-4-43, a verificar siempre frente al código nacional aplicable):
1. $I_B \le I_n \le I_z'$ (el calibre nominal $I_n$ deja pasar la corriente de diseño $I_B$ y no supera la ampacidad corregida del cable $I_z'$).
2. $I_2 \le 1{,}45 \cdot I_z'$ (la corriente de funcionamiento convencional $I_2$ asegura que la protección abre antes de dañar el aislamiento del cable por sobrecarga sostenida).

#### Conceptos clave
- **Sobrecarga vs. cortocircuito:** diferencia de magnitud (múltiplos de $I_n$ vs. $\text{kA}$), origen (exceso de carga en circuito sano vs. defecto franco entre conductores) y mecanismo de disparo (térmico inverso vs. magnético instantáneo).
- **Primera condición ($I_B \le I_n \le I_z'$):** evita tanto disparos molestos en uso normal como el deterioro permanente del conductor.
- **Segunda condición ($I_2 \le 1{,}45 \cdot I_z'$):** exige revisar el tipo de dispositivo: en interruptores automáticos domésticos/terciarios (norma IEC 60898 ilustrativa), $I_2 = 1{,}45 \cdot I_n$ (luego basta $I_n \le I_z'$); en ciertos fusibles gG donde $I_2 = 1{,}60 \cdot I_n$, $I_n = I_z'$ incumpliría la segunda condición.
- **Corriente de cortocircuito mínima al final de la línea ($I_{cc,\min}$):** todo cortocircuito en el punto más alejado del circuito debe alcanzar suficiente corriente como para hacer disparar el elemento magnético dentro del tiempo máximo exigido.

#### Definiciones necesarias
- **Intensidad nominal asignada ($I_n$):** valor de corriente de referencia para el que se diseña y clasifica un dispositivo de protección sin disparar en condiciones de servicio continuo normalizado.
- **Corriente convencional de funcionamiento ($I_2$):** valor especificado de corriente que provoca el disparo seguro de la protección térmica (o fusión del fusible) dentro de un tiempo convencional normalizado (habitualmente 1 hora para pequeños calibres).
- **Corriente de cortocircuito presunta ($I_{cp}$):** corriente eficaz simétrica que circularía por un punto determinado de la instalación si los conductores se cortocircuitaran por una unión de impedancia despreciable en dicho punto, sin el efecto limitador del dispositivo de protección.

#### Ejemplo práctico realista
Un circuito derivado calculado en el Tema 5 presenta $I_B = 27{,}5\ \text{A}$ y una sección de cable cuya ampacidad corregida es $I_z' = 36{,}0\ \text{A}$.
- **Opción A (Interruptor automático modular MCB de $I_n = 32\ \text{A}$):**
  1. $27{,}5\ \text{A} \le 32\ \text{A} \le 36{,}0\ \text{A}$ $\implies$ Cumple la 1.ª condición.
  2. Con $I_2 = 1{,}45 \times 32 = 46{,}4\ \text{A}$ y límite del cable $1{,}45 \times 36{,}0 = 52{,}2\ \text{A}$ $\implies$ $46{,}4\ \text{A} \le 52{,}2\ \text{A}$ $\implies$ Cumple la 2.ª condición.
- **Contraste con un caso límite con fusible gG ($I_2 = 1{,}60 \cdot I_n$ ilustrativo):** si un circuito distinto tuviera $I_z' = 34{,}0\ \text{A}$ y quisiéramos protegerlo con un fusible de $I_n = 32\ \text{A}$, se cumpliría $I_n \le I_z'$ ($32 \le 34$), pero $I_2 = 1{,}60 \times 32 = 51{,}2\ \text{A}$ superaría el límite $1{,}45 \times 34{,}0 = 49{,}3\ \text{A}$, dejando desprotegido el cable frente a sobrecargas lentas en la zona crítica.
*(Nota: el factor exacto de $I_2$ y las reglas específicas para circuitos con motores o protecciones únicamente contra cortocircuitos deben verificarse en el reglamento vigente y ficha del fabricante).*

#### Errores frecuentes
- Elegir el calibre del interruptor automático según $I_B$ ignorando que ha quedado por encima de la ampacidad corregida del cable ($I_n > I_z'$), permitiendo que el cable se queme antes de que salte el automático.
- Olvidar la comprobación de $I_2 \le 1{,}45\,I_z'$ al utilizar fusibles gG o interruptores regulables de caja moldeada.
- Subir arbitrariamente el calibre del interruptor automático (de $16\ \text{A}$ a $25\ \text{A}$) en obra porque «salta mucho», dejando el cable existente sin protección.
- No verificar la corriente de cortocircuito mínima al final de líneas largas de pequeña sección.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué diferencia física y de tiempo de actuación existe entre una sobrecarga sostenida y un cortocircuito?
2. ¿Por qué cumplir $I_B \le I_n \le I_z'$ no siempre garantiza por sí solo el cumplimiento de la segunda condición $I_2 \le 1{,}45\,I_z'$ cuando se emplean fusibles?
3. ¿Qué consecuencias de seguridad provoca sustituir un automático de $16\ \text{A}$ por otro de $25\ \text{A}$ sin cambiar la sección del cable de $2{,}5\ \text{mm}^2$?

---

### 3.2. Interruptores termomagnéticos (MCB curvas B/C/D y MCCB), fusibles y poder de corte ($I_{cu}/I_{cs}$)

#### Explicación breve y clara
El **interruptor automático magnetotérmico** combina dos mecanismos complementarios en un solo equipo: una **lámina bimetálica (disparo térmico)** para sobrecargas y una **bobina electromagnética (disparo magnético)** para cortocircuitos o picos instantáneos elevados. En los pequeños interruptores modulares (MCB), la banda de disparo magnético define la **curva característica**:
- **Curva B ($3\text{–}5 \cdot I_n$):** indicada para cargas resistivas, electrónica sensible o líneas muy largas donde el cortocircuito mínimo al final es bajo.
- **Curva C ($5\text{–}10 \cdot I_n$):** uso general estándar en alumbrado, tomas de corriente y pequeños cuadros terciarios.
- **Curva D ($10\text{–}20 \cdot I_n$):** cargas con fuertes puntas de corriente de arranque o conexión (motores, transformadores, grupos frigoríficos), exigiendo confirmar que el cortocircuito mínimo supera el umbral $20 \cdot I_n$.

Para calibres superiores (habitualmente $> 63\text{–}125\ \text{A}$) se emplean **interruptores de caja moldeada (MCCB)** con umbrales regulables, o **fusibles** (clase **gG** para uso general sobrecarga+cortocircuito; clase **aM** exclusiva para acompañar motores contra cortocircuitos). En **todos** los casos es obligatorio verificar que el **poder de corte ($I_{cu}$ / $I_{cs}$)** del dispositivo supera a la corriente de cortocircuito presunta ($I_{cp}$) en el punto exacto de instalación.

#### Conceptos clave
- **Curvas B, C y D (según familia IEC 60898-1):** bandas normalizadas de disparo instantáneo magnético ($3\text{–}5\,I_n$, $5\text{–}10\,I_n$ y $10\text{–}20\,I_n$ respectivamente) que evitan disparos durante puntas transitorias sin comprometer la apertura ante defecto.
- **MCCB (Caja Moldeada) y fusibles gG/aM:** aparamenta para corrientes elevadas, regulación fina de disparo térmico/magnético o alto poder limitador de energía pasante.
- **Poder de corte último ($I_{cu}$) vs. de servicio ($I_{cs}$):** $I_{cu}$ es la máxima corriente de cortocircuito que el interruptor puede cortar con seguridad en una secuencia de ensayo (pudiendo quedar inservible después); $I_{cs}$ (expresado en $\%$ de $I_{cu}$, p. ej. $75\ \%$ o $100\ \%$) garantiza que el equipo sigue operativo tras despejar la falta.
- **Verificación obligatoria $I_{cu} \ge I_{cp}$:** instalar un interruptor de $6\ \text{kA}$ donde la red puede aportar $12\ \text{kA}$ provoca fallo catastrófico, soldadura de contactos y riesgo de explosión del cuadro.

#### Definiciones necesarias
- **Curva de disparo tiempo-corriente:** gráfico característico publicado por el fabricante (en escala logarítmica) que representa el tiempo mínimo y máximo de actuación del dispositivo en función de la corriente expresada como múltiplo de $I_n$.
- **Poder de corte asignado ($I_{cn}$ en MCB / $I_{cu}$ e $I_{cs}$ en MCCB):** valor eficaz de la máxima corriente de cortocircuito presunta que un dispositivo de protección es capaz de interrumpir con seguridad bajo condiciones normalizadas de ensayo.

#### Ejemplo práctico realista
En una estación de bombeo conectada cerca del cuadro general, un motor trifásico ($I_B = 15\ \text{A}$) genera un pico de arranque directo de $120\ \text{A}$ durante $0{,}6\ \text{s}$. Además, la corriente presunta de cortocircuito trifásico en el cuadro donde se aloja la protección es de $I_{cp} = 11{,}5\ \text{kA}$, y el cortocircuito mínimo al final de la línea del motor se estima en $I_{cc,\min} = 480\ \text{A}$.
1. **Selección de calibre y curva ($I_n = 20\ \text{A}$):**
   - Con **curva B** ($3\text{–}5 \times 20 = 60\text{–}100\ \text{A}$): el pico de arranque ($120\ \text{A}$) provocará disparo magnético instantáneo en cada puesta en marcha.
   - Con **curva C** ($5\text{–}10 \times 20 = 100\text{–}200\ \text{A}$): como $120\ \text{A}$ cae dentro de la zona de incertidumbre ($100\text{–}200\ \text{A}$), puede disparar intempestivamente según tolerancia térmica o temperatura del cuadro.
   - Con **curva D** ($10\text{–}20 \times 20 = 200\text{–}400\ \text{A}$) o guardamotor específico de motor: soporta limpiamente el pico de $120\ \text{A}$ ($< 200\ \text{A}$) y dispara instantáneamente frente al cortocircuito mínimo al final de línea ($480\ \text{A} > 400\ \text{A}$).
2. **Poder de corte:** como $I_{cp} = 11{,}5\ \text{kA}$, un interruptor estándar de $6\ \text{kA}$ o $10\ \text{kA}$ es insuficiente; debe especificarse un dispositivo de al menos **$I_{cu} \ge 15\ \text{kA}$** (o justificar filiación certificada por el fabricante con una protección aguas arriba).
*(Nota: las normas concretas de ensayo —como IEC 60898 frente a IEC 60947-2 o UL 489— y los requisitos específicos de protección de motores dependen de la jurisdicción aplicable).*

#### Errores frecuentes
- Seleccionar automáticamente «curva C de $6\ \text{kA}$» para todo un edificio industrial sin calcular la corriente de cortocircuito en cabecera junto al centro de transformación.
- Cambiar a curva D en líneas muy largas sin comprobar si $I_{cc,\min}$ al final del cable supera el umbral $20 \cdot I_n$.
- Utilizar un fusible clase **aM** (acompañamiento de motor, que NO protege contra sobrecargas) como protección única de un cable sin relé térmico asociado.
- Ignorar la distinción entre poder de corte en entorno residencial/terciario ($I_{cn}$) y en entorno industrial ($I_{cu}/I_{cs}$).

#### Preguntas que el alumnado debería poder responder
1. ¿En qué situaciones concretas conviene elegir curva B, curva C o curva D en un interruptor modular?
2. ¿Por qué un interruptor con $I_{cu} = 6\ \text{kA}$ no puede instalarse sin respaldo aguas arriba en un cuadro general donde el cortocircuito presunto vale $11\ \text{kA}$?
3. ¿Qué diferencia práctica existe entre un fusible clase gG y un fusible clase aM en la protección de un motor y su cableado?

---

### 3.3. Protección diferencial (RCD/GFCI) y protección contra sobretensiones (SPD)

#### Explicación breve y clara
Los magnetotérmicos protegen frente a sobrecorrientes, pero no detectan pequeñas fugas a tierra que pueden electrocutar a una persona en un sistema TT o provocar un incendio eléctrico. Para ello se instala el **interruptor diferencial (RCD en terminología IEC / GFCI en entorno norteamericano)**, que compara continuamente mediante un toroide magnético la corriente que entra por las fases con la que retorna por el neutro: si la diferencia supera su sensibilidad nominal ($I_{\Delta n}$), dispara en milisegundos.

Además de la sensibilidad ($30\ \text{mA}$ para protección adicional de personas en circuitos finales; $100\text{–}300\ \text{mA}$ para protección contra incendios o cabeceras selectivas según código aplicable), hoy resulta crítico elegir correctamente la **clase de diferencial según la forma de onda** de las cargas electrónicas (**Tipo AC, A, F o B**). Por su parte, los **dispositivos de protección contra sobretensiones (SPD)** —Tipos 1, 2 y 3— desvían a tierra picos transitorios de origen atmosférico (rayos) o de maniobra en red, salvaguardando electrónica, variadores e inversores solares.

#### Conceptos clave
- **Sensibilidad ($I_{\Delta n}$) y coordinación con tierra ($R_a \cdot I_{\Delta n} \le U_L$):** en esquema TT, el producto de la resistencia de puesta a tierra de las masas por la sensibilidad del diferencial no debe superar la tensión límite de contacto ($50\ \text{V}$ en locales secos, $24\ \text{V}$ en húmedos como referencia habitual a verificar en normativa vigente).
- **Tipos de diferencial (AC, A, F, B):** el **Tipo AC** solo detecta fugas alternas sinusoidales puras; el **Tipo A** detecta además corrientes continuas pulsantes (electrodomésticos, LED, informática); el **Tipo F** añade frecuencias mixtas (variadores monofásicos); el **Tipo B** es necesario ante fugas en corriente continua lisa (variadores trifásicos, puntos de recarga VE sin detección CC integrada, inversores).
- **Sobretensiones transitorias (SPD Tipo 1, 2, 3) y permanentes:** Tipo 1 para impacto directo/pararrayos en cabecera; Tipo 2 en cuadro general/subcuadros contra maniobras e inducción de rayos; Tipo 3 protección fina junto a equipos sensibles; y protecciones contra sobretensión permanente a frecuencia industrial ($50/60\ \text{Hz}$, p. ej. por corte de neutro).
- **Diferenciales superinmunizados / selectivos:** diseños especiales para evitar disparos intempestivos causados por transitorios de encendido o armónicos en oficinas y naves con abundante electrónica.

#### Definiciones necesarias
- **Interruptor diferencial (RCD / GFCI):** dispositivo electromecánico (o electrónico según norma local) diseñado para abrir el circuito cuando la corriente diferencial residual a tierra alcanza un valor dado ($I_{\Delta n}$) en un tiempo determinado.
- **Descargador / Protector contra sobretensiones (SPD):** dispositivo que limita las sobretensiones transitorias y deriva las corrientes de impulso hacia la toma de tierra, protegiendo el aislamiento eléctrico y la electrónica conectada.

#### Ejemplo práctico realista
En una nave alimentaria con esquema TT ($R_a = 25\ \Omega$, $U_L = 50\ \text{V}$ ilustrativo), se instalan variadores de frecuencia trifásicos en una línea de envasado.
- **Comprobación de tensión de contacto en cabecera:** incluso con un diferencial selectivo de $300\ \text{mA}$ ($0{,}3\ \text{A}$) aguas arriba, $R_a \cdot I_{\Delta n} = 25\ \Omega \times 0{,}3\ \text{A} = 7{,}5\ \text{V} \ll 50\ \text{V}$, verificando la coordinación con la tierra.
- **Problema de tipo de RCD:** si el circuito de los variadores trifásicos se protege con un diferencial **Tipo AC** económico, la componente continua de fuga procedente del bus de continua del variador puede **saturar el núcleo magnético del toroide**, impidiendo que el diferencial dispare incluso ante un defecto real grave (*cegamiento del diferencial*). En consecuencia, tras verificar el manual del fabricante del variador y la norma vigente del país, se especifica un diferencial **Tipo B** (o la solución certificada equivalente). Asimismo, en cabecera del `CGMP` se instala un **SPD Tipo 2** (o Tipo 1+2 si existe pararrayos externo) coordinado con el sistema de tierra para proteger la electrónica de los variadores.

#### Errores frecuentes
- Instalar diferenciales **Tipo AC** en circuitos con cargadores de vehículos eléctricos, variadores de frecuencia o alumbrado LED masivo donde existen componentes de fuga continuas o de alta frecuencia (y además verificar si el código nacional ya prohíbe el Tipo AC en determinados usos).
- Colocar un único diferencial de $30\ \text{mA}$ para 20 circuitos electrónicos: las pequeñas fugas normales de los filtros EMC de ordenadores o luminarias suman más de $15\text{–}30\ \text{mA}$ y provocan disparos continuos sin existir avería.
- Instalar un SPD (protector de sobretensiones) olvidando colocar su fusible o interruptor previo de desconexión indicado por el fabricante, o dejando conductores de conexión a tierra largos y con bucles ($> 0{,}5\ \text{m}$) que anulan su eficacia.
- Confundir protección contra sobretensiones **transitorias** (microsegundos, SPD) con protección contra sobretensiones **permanentes** (pérdida de neutro en red trifásica, bobina de emisión/corte).

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué una fuga con componente de corriente continua lisa puede «cegar» a un interruptor diferencial Tipo AC y qué tipo de RCD resuelve este riesgo?
2. ¿Cómo se comprueba matemáticamente en un esquema TT que la sensibilidad $I_{\Delta n}$ del diferencial está coordinada con la resistencia de puesta a tierra $R_a$?
3. ¿Qué diferencia hay entre la función de un SPD Tipo 1, un Tipo 2 y una protección contra sobretensión permanente?

---

### 3.4. Selectividad, filiación (*cascading*) y documentación coordinada sin alucinaciones de IA

#### Explicación breve y clara
En una instalación jerarquizada (`CGMP` $\to$ Subcuadros $\to$ Circuitos finales), un fallo en una simple toma de corriente de planta 2 **no debe dejar sin servicio todo el edificio**. La **selectividad** garantiza que únicamente actúe el dispositivo inmediatamente situado aguas arriba del defecto, manteniendo alimentado el resto de la planta. Puede ser **total** (hasta el máximo cortocircuito posible) o **parcial**, lográndose mediante escalonamiento de corrientes (**selectividad amperimétrica**), tiempos (**cronométrica**), balance de energía (**energética**) o retardo diferencial (**diferencial Tipo S** + sensibilidad $\ge 3\times$, p. ej. $300\ \text{mA}$ selectivo en cabecera frente a $30\ \text{mA}$ instantáneo en circuitos finales).

Por otro lado, la **filiación (*cascading*)** aprovecha el efecto limitador de un interruptor de cabecera de gran poder de corte para proteger aguas abajo a interruptores modulares de menor poder de corte (p. ej. permitiendo instalar MCB de $6\ \text{kA}$ donde $I_{cp} = 15\ \text{kA}$). **Regla innegociable:** tanto la selectividad en zona de cortocircuito como la filiación solo son válidas cuando están respaldadas por **tablas oficiales de ensayo del fabricante** para esa pareja exacta de referencias. Pedir a ChatGPT o Claude «qué pareja de interruptores tiene filiación o selectividad» suele producir combinaciones inventadas sin respaldo legal ni físico.

#### Conceptos clave
- **Selectividad vertical (amperimétrica, cronométrica, energética):** coordinación de protecciones en serie para aislar exclusivamente el circuito averiado minimizando la pérdida de continuidad de servicio.
- **Selectividad diferencial:** requiere doble escalón: **amperimétrico** ($I_{\Delta n,\text{cabecera}} \ge 3 \cdot I_{\Delta n,\text{derivado}}$, p. ej. $300\ \text{mA}$ sobre $30\ \text{mA}$) y **cronométrico** (diferencial selectivo **Tipo S** o regulable con retardo mínimo superior al tiempo de apertura del instantáneo aguas abajo).
- **Filiación (*Back-up / Cascading*):** técnica económica certificada mediante ensayo de laboratorio por cada fabricante que eleva el poder de corte efectivo de los interruptores aguas abajo gracias a la limitación energética del interruptor de cabecera.
- **Verificación documental en unifilares, BIM e IA:** ni los conectores de Revit MEP verifican selectividad ni un modelo de IA conoce las matrices actualizadas de filiación entre gamas comerciales de un fabricante.

#### Definiciones necesarias
- **Selectividad de protecciones:** coordinación de las características de funcionamiento de dos o más dispositivos de protección contra sobrecorrientes (o diferenciales) conectados en serie de modo que, para sobreintensidades dentro de un rango especificado, actúe exclusivamente el dispositivo destinado a tal fin (el más próximo al defecto).
- **Filiación (*Cascading*):** asociación coordinada y ensayada de dos interruptores automáticos en serie donde el dispositivo aguas arriba limita la energía de cortocircuito permitiéndole al dispositivo aguas abajo soportar una corriente presunta superior a su poder de corte individual.

#### Ejemplo práctico realista
En una clínica u oficina, el `CGMP` dispone de un interruptor automático general de caja moldeada (MCCB) de $160\ \text{A}$ con poder de corte $I_{cu} = 36\ \text{kA}$, y alimenta un subcuadro donde hay circuitos derivados con MCB de $16\ \text{A}$ curva C e $I_{cn} = 6\ \text{kA}$, siendo la corriente de cortocircuito presunta en el subcuadro $I_{cp} = 11\ \text{kA}$.
- Sin filiación ensayada, los MCB de $6\ \text{kA}$ estarían fuera de norma frente a $11\ \text{kA}$.
- Consultando directamente la **tabla oficial de coordinación del fabricante** (y jamás un resumen de ChatGPT), se comprueba si esa referencia concreta de MCCB $160\ \text{A}$ otorga filiación de $15\ \text{kA}$ o $25\ \text{kA}$ a esa serie exacta de MCB de $6\ \text{kA}$ de la misma marca (verificando además si la normativa del país permite filiación en ese tipo de edificio).
- Paralelamente, para que un fallo a tierra en una toma no apague el subcuadro completo, se sustituye el diferencial instantáneo de $300\ \text{mA}$ del `CGMP` por un diferencial **Tipo S ($300\ \text{mA}$, retardado)** aguas arriba de los diferenciales de **$30\ \text{mA}$ instantáneos** del subcuadro.

#### Errores frecuentes
- Instalar dos diferenciales en serie ($300\ \text{mA}$ instantáneo arriba y $30\ \text{mA}$ instantáneo abajo) esperando que «dispare primero el pequeño» (ante un defecto franco a tierra ambos ven la falla en el mismo instante y suelen disparar los dos a la vez).
- Asumir que existe filiación entre un interruptor de una marca A en cabecera y otro de una marca B en el subcuadro sin certificado de ensayo conjunto.
- Preguntar a una IA «qué modelo de interruptor me da selectividad total hasta 20 kA» y transcribir la respuesta al presupuesto sin descargar las curvas y tablas oficiales del fabricante.
- Olvidar que un mismo proyecto puede necesitar tanto la tabla de coordinación como la indicación explícita de calibres, curvas, sensibilidad, tipo RCD y poder de corte en el diagrama unifilar (Tema 11).

#### Preguntas que el alumnado debería poder responder
1. ¿Qué dos requisitos simultáneos exige la selectividad diferencial vertical entre un cuadro general y un subcuadro?
2. ¿Por qué la filiación (*cascading*) y la selectividad energética solo pueden justificarse con tablas de ensayo oficiales del fabricante y nunca por cálculo intuitivo o respuesta de IA?
3. ¿Qué diferencia operativa existe entre la selectividad total y la selectividad parcial en una instalación terciaria o industrial?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** combina análisis forense de disparos reales en planta, exposición práctica de curvas y tablas de coordinación, verificación crítica de propuestas generadas con IA y resolución de un caso industrial de envasado con variadores.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
|---|---|---|---|
| **1. Activación: «¿Por qué se apagó toda la fábrica?»** | 00:00 – 00:25 (25 min) | Presenta un incidente real anonimizado de planta industrial donde un fallo menor en un enchufe dejó sin suministro toda la nave y lanza la **Actividad 1**. | Diagnostica intuitivamente por qué falló la cadena de protecciones (falta de selectividad, calibre o poder de corte). |
| **2. Microlearning A: Sobrecorrientes, curvas B/C/D e $I_{cu}/I_{cs}$** | 00:25 – 01:05 (40 min) | Expone los apartados 3.1 y 3.2; demuestra paso a paso la doble condición $I_B \le I_n \le I_z'$ e $I_2 \le 1{,}45\,I_z'$ (MCB vs. fusibles) y el cálculo de elección de curva y poder de corte. | Resuelve dos ejercicios breves de coordinación cable–automático y evalúa cuándo la curva B o C falla ante arranques de motores. |
| **3. Microlearning B: Diferenciales (AC/A/F/B), SPD, selectividad y filiación** | 01:05 – 01:45 (40 min) | Expone los apartados 3.3 y 3.4; explica el cegamiento de diferenciales Tipo AC, la selectividad Tipo S, los SPD y la prohibición de aceptar tablas de filiación inventadas por IA. | Completa en su ficha de trabajo la tabla de decisión de diferenciales según tipo de carga y analiza un esquema de selectividad vertical. |
| **4. Actividad práctica de aplicación técnica** | 01:45 – 02:15 (30 min) | Dirige la **Actividad 2** (auditoría de un listado de protecciones defectuoso y refutación de una consulta de filiación/curvas generada por ChatGPT). | Detecta 5 errores críticos de coordinación, poder de corte, RCD y alucinaciones de fabricante en la respuesta de IA. |
| **Descanso activo** | 02:15 – 02:30 (15 min) | Pausa de desconexión; prepara el esquema base del caso *Alimentaria Levante S.L.* | Descansa e hidrata; anota dudas sobre protecciones diferenciales Tipo B o coordinación de motores. |
| **5. Estudio del caso práctico** | 02:30 – 03:15 (45 min) | Presenta el caso *Planta de Envasado Alimentaria Levante S.L.*, organiza grupos de 3–4 personas y guía la resolución de las tres averías simultáneas. | En equipos, diagnostica y corrige la falta de selectividad diferencial/Tipo AC, el disparo en arranque de bomba y el insuficiente poder de corte en `CGMP`. |
| **6. Discusión guiada y transferencia a proyecto real** | 03:15 – 03:45 (30 min) | Modera la puesta en común de 2–3 equipos y guía la **Actividad 3** (ampliación final de la plantilla del Cuadro de Cargas y Conductores con la columna de protecciones coordinadas). | Presenta sus soluciones al caso y completa en su hoja de proyecto las especificaciones completas de protección ($I_n$, curva, $I_{cu}$, $I_{\Delta n}$, tipo RCD, SPD). |
| **7. Síntesis, evaluación sumativa y cierre** | 03:45 – 04:00 (15 min) | Sintetiza los 5 principios de protección segura, aplica el cuestionario sumativo y enlaza con el Tema 7 (Criterios de trazo de instalaciones eléctricas). | Completa el test sumativo (6 preguntas), realiza la autoevaluación y consolida su hoja maestra Carga–Cable–Protección. |

**Total exacto:** 25 + 40 + 40 + 30 + 15 + 45 + 30 + 15 = **240 minutos (4 horas)**.

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «Autopsia exprés de un apagón total»

- **Objetivo**: Comprender desde el primer minuto las consecuencias operativas y de seguridad de diseñar protecciones sin selectividad, poder de corte ni coordinación diferencial.
- **Instrucciones para el alumnado**:
  1. Lee el breve parte de incidencia proyectado: al enchufar una pulidora portátil averiada en un taller, saltan simultáneamente el diferencial de $30\ \text{mA}$ de la zona, el diferencial de $300\ \text{mA}$ del cuadro general y se queda bloqueado el automático de cabecera con signos de fogonazo.
  2. Durante 7 minutos, responde individualmente en la encuesta a tres preguntas: (a) ¿por qué saltaron dos diferenciales a la vez?, (b) ¿qué parámetro faltó comprobar en el automático dañado?, y (c) ¿por qué un render en Twinmotion o la geometría en Revit MEP no advierten este fallo?
  3. Debate en plenario (8 minutos) contrastando experiencias reales en obra o mantenimiento.
- **Materiales necesarios**: Diapositiva con el parte de incidencia y encuesta interactiva.
- **Tiempo estimado**: 15 minutos (integrados en la Fase 1).
- **Rol del formador**: Ordenar las respuestas del grupo introduciendo los conceptos de selectividad cronométrica Tipo S, poder de corte $I_{cu}$ y límites de la validación geométrica BIM.
- **Producto o entregable esperado**: Diagnóstico consensuado de las tres causas raíz del apagón.
- **Criterios de éxito**: Al menos el 90 % del alumnado diferencia entre fallo de selectividad diferencial y fallo por poder de corte insuficiente.

### Actividad 2 (Aplicación técnica): Auditoría de Protecciones y Alucinaciones de Fabricante en IA

- **Objetivo**: Aplicar las reglas de coordinación cable–protección, curvas B/C/D, tipos de diferencial y control crítico sobre respuestas de ChatGPT/Claude respecto a referencias comerciales.
- **Instrucciones para el alumnado**:
  1. En equipos de 3 personas (20 minutos), revisad la ficha de protecciones de un pequeño taller y una captura simulada de ChatGPT donde constan 5 errores: (a) automático de $32\ \text{A}$ protegiendo un cable de $I_z' = 28\ \text{A}$; (b) fusible gG de $32\ \text{A}$ ($I_2 = 1{,}60\,I_n$) en un cable con $I_z' = 34\ \text{A}$; (c) diferencial Tipo AC protegiendo un cargador trifásico VE; (d) automático de $4{,}5\ \text{kA}$ en cuadro con $I_{cp} = 9{,}8\ \text{kA}$; y (e) respuesta de IA que afirma «cualquier marca A de $25\ \text{kA}$ da filiación automática hasta $25\ \text{kA}$ a cualquier MCB de $6\ \text{kA}$ de marca B».
  2. Justificad matemáticamente o físicamente cada fallo y redactad la especificación corregida y qué catálogo oficial de fabricante o reglamento debe consultarse.
  3. Contrastad en plenario (10 minutos) la refutación a los errores 2 y 5.
- **Materiales necesarios**: Ficha técnica de la Actividad 2 y hoja de cálculo de comprobación.
- **Tiempo estimado**: 30 minutos (Fase 4).
- **Rol del formador**: Enfatizar especialmente el ejemplo numérico de $I_2 = 1{,}60\,I_n$ frente a $1{,}45\,I_z'$ y el rigor exigido para la filiación certificada por fabricante.
- **Producto o entregable esperado**: Tabla auditada con los 5 errores diagnosticados y sus correcciones verificables.
- **Criterios de éxito**: Detección exacta de los 5 fallos, demostración numérica de la condición de sobrecarga del fusible y exigencia explícita de tablas oficiales de fabricante.

### Actividad 3 (Transferencia a proyecto real): Tabla Maestra Carga–Conductor–Protección

- **Objetivo**: Completar la cadena trazable de diseño eléctrico del Bloque 1 integrando la especificación de protecciones en la hoja unificada construida en los Temas 4 y 5.
- **Instrucciones para el alumnado**:
  1. Abre tu hoja unificada de la Actividad 3 del Tema 5 y añade a la derecha las columnas de protección: `Calibre I_n [A]`, `Tipo/Curva (B/C/D/MCCB)`, `I_cu requerido [kA]`, `Verificación I_B<=I_n<=I_z'`, `Verificación I_2<=1,45*I_z'`, `Protección diferencial (I_Δn + Tipo AC/A/F/B + S/Inst)`, `SPD (Tipo 1/2/3)` y `Catálogo/Norma a verificar`.
  2. Durante 20 minutos, cumplimenta y formula las comprobaciones automáticas de coordinación para al menos 4 circuitos más la cabecera del subcuadro/cuadro de tu proyecto piloto.
  3. Verifica por parejas (5 minutos) que la cabecera cuenta con selectividad o nota de comprobación frente a los diferenciales de los circuitos finales.
- **Materiales necesarios**: Hoja unificada propia (Temas 4–5), ficha de fórmulas del Tema 6 y Matriz Normativa del Tema 3.
- **Tiempo estimado**: 25 minutos (integrados en la Fase 6).
- **Rol del formador**: Mostrar en pantalla la fórmula lógica `=SI(Y(I_n>=I_B; I_n<=I_z); "OK"; "ERROR")` y verificar el escalonamiento diferencial en 2–3 hojas compartidas.
- **Producto o entregable esperado**: Hoja Maestra Carga–Conductor–Protección formulada y verificada para el proyecto propio (base directa para el Diagrama Unifilar del Tema 11).
- **Criterios de éxito**: Cero incoherencias entre $I_B$, $I_z'$ e $I_n$, correcta asignación de curva y tipo de diferencial según carga, y casillas explícitas de validación con reglamento y fabricante.

---

## 6. Caso práctico

### Caso práctico: *Planta de Envasado Alimentaria Levante S.L.* — Paradas productivas y riesgos críticos en subcuadro nuevo

#### Contexto empresarial
**Alimentaria Levante S.L.** es una planta hortofrutícola de lavado y envasado situada en la provincia de Valencia (España), con un centro de transformación propio en parcela y suministro en baja tensión $400/230\ \text{V}$, $50\ \text{Hz}$ (esquema de tierra TT comprobado en proyecto tras verificación de continuidad y resistencia de tierra $R_a = 18\ \Omega$).

Hace tres semanas ampliaron la zona húmeda de lavado instalando un nuevo subcuadro (`SC-ENV`) a $45\ \text{m}$ del Cuadro General (`CGMP`), que alimenta dos líneas de envasado con variadores de frecuencia trifásicos, una bomba centrífuga de lavado a presión y alumbrado/tomas auxiliares.

#### Situación o problema
Desde el primer día de producción se producen tres graves incidencias operativas y de seguridad:
1. **Parada total de la planta:** cada cierto tiempo, cuando arrancan o cambian de velocidad los variadores de envasado, dispara el diferencial instantáneo de $300\ \text{mA}$ **Tipo AC** situado en la salida correspondiente del `CGMP` (o el propio general si estuviera afectado), dejando sin tensión líneas completas de la nave sin que llegue a disparar el de $30\ \text{mA}$ del subcuadro, o disparando ambos a la vez ante una pequeña fuga.
2. **Disparo en arranque de la bomba de lavado:** la bomba trifásica ($400\ \text{V}$, $I_B = 14{,}0\ \text{A}$, pico de arranque directo de $110\ \text{A}$ durante $0{,}7\ \text{s}$) dispara al instante de pulsar marcha porque instalaron un interruptor automático de $16\ \text{A}$ **curva B** (con cable de $2{,}5\ \text{mm}^2$ de $I_z' = 21{,}0\ \text{A}$).
3. **Riesgo de explosión de aparamenta en `CGMP` y daños electrónicos:** un técnico revisó el proyecto inicial y descubrió que junto al `CGMP` (cerca del transformador) la corriente de cortocircuito presunta es de $I_{cp} = 9{,}2\ \text{kA}$, pero se montaron interruptores modulares de $4{,}5\ \text{kA}$ sin filiación ensayada ni ningún protector contra sobretensiones (SPD), habiendo sufrido ya la avería de una tarjeta de variador tras una tormenta eléctrica.

#### Datos disponibles

| Elemento / Circuito | Parámetros técnicos conocidos | Datos adicionales para cálculo |
|---|---|---|
| **Puesta a tierra y esquema** | Esquema **TT** (verificar siempre conforme a proyecto), $R_a = 18\ \Omega$, $U_L = 24\ \text{V}$ en zona húmeda de lavado / $50\ \text{V}$ en zona seca | Comprobar $R_a \cdot I_{\Delta n} \le U_L$ |
| **Cortocircuito presunto en `CGMP` y `SC-ENV`** | En `CGMP`: $I_{cp,\text{CGMP}} = 9{,}2\ \text{kA}$. En `SC-ENV` (a $45\ \text{m}$): $I_{cp,\text{SC}} = 4{,}8\ \text{kA}$; $I_{cc,\min}$ en extremo bomba $= 380\ \text{A}$ | Tensión $400/230\ \text{V}$, $50\ \text{Hz}$ |
| **Línea alimentadora `CGMP` $\to$ `SC-ENV`** | Cable Cu XLPE $16\ \text{mm}^2$ con $I_z' = 58\ \text{A}$; carga prevista $I_B = 46\ \text{A}$ | Protegida actualmente en `CGMP` con MCB de $4{,}5\ \text{kA}$ y RCD $300\ \text{mA}$ Tipo AC instantáneo |
| **Líneas de envasado (2 variadores trifásicos)** | $I_B = 15\ \text{A}$ cada una, cables con $I_z' = 24\ \text{A}$; generan armónicos y componente continua de fuga | Protegidas en `SC-ENV` con RCD $30\ \text{mA}$ Tipo AC |
| **Bomba de lavado a presión** | Motor trifásico $400\ \text{V}$, $I_B = 14{,}0\ \text{A}$, pico arranque $I_{\text{arr}} = 110\ \text{A}$ ($0{,}7\ \text{s}$); cable $2{,}5\ \text{mm}^2$ con $I_z' = 21{,}0\ \text{A}$ | Protegida actualmente con MCB $16\ \text{A}$ **curva B** ($I_{cn} = 4{,}5\ \text{kA}$) y RCD $30\ \text{mA}$ |
| **Sobretensiones** | Sin SPD instalado ni en `CGMP` ni en `SC-ENV`; presencia de variadores sensibles y tormentas estacionales | Zona con alimentación subterránea/aérea industrial a verificar |

#### Preguntas de análisis
1. Explica las dos causas por las que el diferencial de $300\ \text{mA}$ Tipo AC del `CGMP` provoca paradas incontroladas ante los variadores de frecuencia y propón la solución diferencial completa (cabecera `CGMP` + derivados en `SC-ENV`), verificando $R_a \cdot I_{\Delta n} \le U_L$ incluso en zona húmeda ($24\ \text{V}$).
2. Evalúa por qué dispara la bomba de lavado con curva B de $16\ \text{A}$, comprueba si $16\ \text{A}$ **curva D** protege la sobrecarga del cable ($I_z' = 21{,}0\ \text{A}$) y dispara instantáneamente frente a $I_{cc,\min} = 380\ \text{A}$, y compara qué ocurriría si alguien propusiera subir a $20\ \text{A}$ curva D.
3. Justifica por qué el poder de corte de $4{,}5\ \text{kA}$ es inaceptable en el `CGMP` ($I_{cp} = 9{,}2\ \text{kA}$) e inapropiado frente a márgenes seguros en `SC-ENV`, indicando las dos vías reglamentarias para resolverlo (aparamenta con $I_{cu} \ge 10\text{–}15\ \text{kA}$ o filiación certificada por fabricante).
4. Propón la estrategia de protección contra sobretensiones (SPD) entre el `CGMP` y el subcuadro `SC-ENV` con sus requisitos de instalación.

#### Tarea a realizar
En equipos de 3–4 personas (30 minutos de trabajo + 15 minutos de puesta en común), elaborad el **Plan de Remediación de Protecciones de *Alimentaria Levante S.L.*** que incluya:
1. **Matriz de corrección circuito por circuito** (`Cabecera SC-ENV en CGMP`, `Variadores`, `Bomba de lavado` y `SPD`), indicando calibre $I_n$, curva/tipo, poder de corte $I_{cu}/I_{cn}$, diferencial ($I_{\Delta n}$, Tipo AC/A/F/B, instantáneo/selectivo S) y verificación matemática de $I_B \le I_n \le I_z'$ y $R_a \cdot I_{\Delta n} \le U_L$.
2. **Justificación matemática del problema de la bomba** comparando curva B, C y D en $16\ \text{A}$ frente a $20\ \text{A}$ con $I_{cc,\min} = 380\ \text{A}$.
3. **Criterio de selección de SPD** (Tipo 2 / coordinación Tipo 1+2 si hay riesgo directo a verificar) y protección previa.
4. **Lista de verificación frente a catálogos y código vigente** (qué documentos oficiales deben confirmarse antes de comprar material, prohibiendo delegarlo en IA).

#### Posibles soluciones o criterios de análisis
Un plan de remediación sólido debe alcanzar exactamente estas conclusiones técnicas:
1. **Diferenciales y selectividad:**
   - **Problema actual:** el Tipo AC se ciega o responde erráticamente frente a fugas con componente continua/alta frecuencia de variadores trifásicos, y un $300\ \text{mA}$ instantáneo aguas arriba carece de selectividad cronométrica frente a los de $30\ \text{mA}$ aguas abajo.
   - **Solución:** en la salida hacia `SC-ENV` del `CGMP`, instalar un diferencial **Tipo S (selectivo/retardado) de $300\ \text{mA}$** (preferiblemente Tipo B o A-S según ficha técnica y presencia de fugas CC en cabecera; verificar si existe un RCD Tipo B aguas abajo que pueda saturar un Tipo A aguas arriba!). Comprobación con tierra $R_a = 18\ \Omega$: $18 \times 0{,}300 = 5{,}4\ \text{V} \ll 24\ \text{V}$ (zona húmeda) $\implies$ cumple con holgura. En `SC-ENV`, proteger las líneas de variadores trifásicos con **diferenciales Tipo B de $30\ \text{mA}$** (o $300\ \text{mA}$ Tipo B si son máquinas fijas sin tomas de uso general y el código vigente lo autoriza — verificar siempre normativa de locales húmedos y máquinas) y la bomba/tomas húmedas con $30\ \text{mA}$ Tipo A/F superinmunizado según fabricante.
2. **Bomba de lavado ($I_B = 14{,}0\ \text{A}$, $I_z' = 21{,}0\ \text{A}$, $I_{\text{arr}} = 110\ \text{A}$, $I_{cc,\min} = 380\ \text{A}$):**
   - **Con $16\ \text{A}$ curva B ($48\text{–}80\ \text{A}$):** $110\ \text{A} > 80\ \text{A}$ $\implies$ disparo magnético seguro en cada arranque.
   - **Con $16\ \text{A}$ curva C ($80\text{–}160\ \text{A}$):** $110\ \text{A}$ cae dentro de la banda de disparo magnético $\implies$ riesgo alto de disparo intempestivo.
   - **Con $16\ \text{A}$ curva D ($160\text{–}320\ \text{A}$):**
     - Sobrecarga cable: $14{,}0 \le 16 \le 21{,}0\ \text{A}$ y $I_2 = 1{,}45 \times 16 = 23{,}2 \le 1{,}45 \times 21{,}0 = 30{,}45\ \text{A}$ $\implies$ **CUMPLE**.
     - Arranque: $110\ \text{A} < 160\ \text{A}$ $\implies$ **NO dispara en arranque**.
     - Cortocircuito mínimo en extremo: $I_{cc,\min} = 380\ \text{A} > 320\ \text{A}$ ($20 \times 16$) $\implies$ **GARANTIZA apertura magnética instantánea** (también puede evaluarse guardamotor magnetotérmico específico con relé térmico regulado a $14\ \text{A}$).
   - **Por qué NO subir a $20\ \text{A}$ curva D:** aunque $20 \le 21{,}0\ \text{A}$, el umbral magnético superior sería $20 \times 20 = 400\ \text{A} > I_{cc,\min} = 380\ \text{A}$, por lo que ante un cortocircuito al final del cable de $45\ \text{m}$ **podría no actuar el disparo magnético instantáneo**, poniendo en riesgo el aislamiento del cable.
3. **Poder de corte ($I_{cp,\text{CGMP}} = 9{,}2\ \text{kA}$, $I_{cp,\text{SC}} = 4{,}8\ \text{kA}$):**
   - El interruptor de cabecera hacia `SC-ENV` en el `CGMP` ($I_n = 50\ \text{A}$, ya que $46 \le 50 \le 58\ \text{A}$) debe tener **$I_{cu} \ge 10\ \text{kA}$ o $15\ \text{kA}$** (p. ej. gama industrial IEC 60947-2 de $15\ \text{kA}$ o MCCB regulado).
   - En `SC-ENV` ($I_{cp} = 4{,}8\ \text{kA}$), los MCB de $4{,}5\ \text{kA}$ están por debajo de $4{,}8\ \text{kA}$ ($\implies$ ¡prohibido!). Se deben sustituir por MCB de al menos **$6\ \text{kA}$ o $10\ \text{kA}$** (y verificar mediante **tabla oficial de filiación del fabricante** la coordinación con el interruptor de $50\ \text{A}$ del `CGMP`, así como la selectividad amperimétrica/energética entre $50\ \text{A}$ y $16\ \text{A}$).
4. **Sobretensiones (SPD):**
   - Instalar **SPD Tipo 2** en el `CGMP` (o Tipo 1+2 si la planta cuenta con pararrayos externo o acometida aérea expuesta — verificar estudio de riesgo de rayo) y valorar un segundo escalón **SPD Tipo 2/3** en `SC-ENV` dada la distancia de $45\ \text{m}$ y la alta sensibilidad de los variadores, con su dispositivo de desconexión previo recomendado por el fabricante y conexiones cortas ($< 0{,}5\ \text{m}$ totales) a tierra.
5. **Verificación obligatoria:** contrastar todas las reglas con el reglamento vigente en España (REBT, p. ej. ITC-BT-22, ITC-BT-24, ITC-BT-30 locales húmedos, ITC-BT-23 sobretensiones, ITC-BT-47 motores) y descargar las hojas de curvas y tablas de filiación/selectividad originales del fabricante elegido.

#### Preguntas de reflexión final
- ¿Qué hubiera sucedido en *Alimentaria Levante S.L.* si un operario hubiera pedido «subir el automático de la bomba a 25 A curva D» sin comprobar la ampacidad del cable ($21\ \text{A}$) ni el cortocircuito mínimo al final de línea ($380\ \text{A}$)?
- ¿Por qué el coste adicional de un diferencial Tipo B y un SPD Tipo 2 es mínimo frente al coste de una sola tarjeta de variador quemada o una parada de producción en campaña alimentaria?

---

## 7. Evaluación

### Evaluación diagnóstica
- **Instrumento:** Encuesta interactiva inicial en la Actividad 1 (3 preguntas rápidas sobre disparo simultáneo de diferenciales, fallo por poder de corte y límites de Revit MEP).
- **Propósito:** Identificar concepciones erróneas habituales sobre protecciones antes de iniciar el cálculo formal. No califica.

### Evaluación formativa
- **Observación y retroalimentación directa** durante la Actividad 2 (detección de 5 errores incluyendo $I_2 = 1{,}60\,I_n$ y alucinaciones de filiación en IA) y durante el análisis grupal del caso *Alimentaria Levante S.L.*
- **Revisión en directo** de las fórmulas de verificación automática en la Hoja Maestra Carga–Conductor–Protección (Actividad 3).

### Evaluación sumativa
Consta de dos evidencias obligatorias:
1. **Cuestionario breve online (6 preguntas de cálculo y criterio de protecciones, 10 minutos, 40 % del tema):** evalúa condiciones $I_B \le I_n \le I_z'$ e $I_2 \le 1{,}45\,I_z'$, curvas B/C/D, poder de corte $I_{cu}/I_{cs}$, tipos de diferencial AC/A/F/B, SPD y selectividad/filiación.
2. **Entregable combinado: Plan de Remediación de *Alimentaria Levante S.L.* + Hoja Maestra Carga–Conductor–Protección (Actividad 3) (60 % del tema)**, evaluado con la rúbrica siguiente.

### Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
|---|---|---|---|---|
| **1. Coordinación de sobrecorrientes y curvas B/C/D** | Propone calibres $I_n > I_z'$ o elige curva inadecuada ignorando puntas de arranque o cortocircuito mínimo. | Verifica $I_B \le I_n \le I_z'$, pero omite la condición $I_2 \le 1{,}45\,I_z'$ o no analiza $I_{cc,\min}$ frente a curva D. | Aplica correctamente ambas condiciones de coordinación, justifica curvas B/C/D según carga y comprueba $I_{cu} \ge I_{cp}$. | Compara soluciones alternativas (MCB curva D vs. guardamotor, fusible gG vs. aM) integrando análisis cuantitativo de $I_{cc,\min}$ y $I_{cs}/I_{cu}$. |
| **2. Protección diferencial (RCD/GFCI) y SPD** | Mantiene diferenciales Tipo AC ante variadores/VE, incumple $R_a \cdot I_{\Delta n} \le U_L$ u omite protección contra sobretensiones. | Selecciona sensibilidad adecuada ($30\ \text{mA}$), pero olvida evaluar el tipo por forma de onda (A/F/B) o la coordinación del SPD. | Elige correctamente sensibilidad y tipo (AC/A/F/B), verifica la coordinación con puesta a tierra y especifica SPD por escalones. | Incluye análisis de fugas acumuladas en electrónica, prevención de cegamiento de diferenciales aguas arriba y reglas de cableado corto del SPD. |
| **3. Selectividad vertical y filiación** | Deja diferenciales instantáneos en serie sin selectividad o inventa filiaciones sin respaldo de fabricante. | Identifica la necesidad de selectividad, pero olvida combinar escalón amperimétrico y retardo Tipo S o confunde selectividad con filiación. | Diseña selectividad diferencial ($3\times I_{\Delta n}$ + Tipo S) y distingue claramente selectividad de filiación certificada por tablas del fabricante. | Documenta la coordinación completa cabecera–subcuadro–circuito final lista para trasladar al diagrama unifilar (Tema 11) con referencias por confirmar. |
| **4. Rigor normativo y control crítico de IA/BIM** | Acepta referencias de catálogos, curvas o parejas de filiación sugeridas por ChatGPT/Claude o asume validación automática en BIM. | Advierte que hay que consultar catálogos, pero deja criterios sin referencia verificable o no detecta errores sutiles de IA. | Rechaza parámetros no verificados por IA, exige curvas y tablas oficiales de fabricante y especifica el marco reglamentario aplicable. | Entrega una Hoja Maestra Carga–Conductor–Protección auditable con alertas automáticas y trazabilidad completa hasta fuente oficial. |

### Actividad de autoevaluación
Al cierre de la sesión, el alumnado responde por escrito en el aula virtual:
1. *¿Qué diferencia entre selectividad diferencial, selectividad de sobrecorriente y filiación (*cascading*) sé explicar ahora con claridad sin confundirlas?*
2. *Al especificar protecciones para cargas modernas (variadores, LED, cargadores VE), ¿qué dos comprobaciones adicionales al calibre $I_n$ haré siempre?*
3. *¿Qué documento oficial del fabricante debo descargar obligatoriamente antes de validar una pareja de interruptores en filiación o selectividad?*

---

## 8. Materiales y recursos

### Guion de diapositivas

| Diapositiva | Título y objetivo visual | Contenido clave y notas del formador |
|---|---|---|
| **Slide 1** | **Portada y objetivos del Tema 6** | Posición (Bloque 1 · 6/11), enlace con el $I_z'$ del Tema 5, aviso de verificación normativa y de fabricantes, y 5 objetivos Bloom. |
| **Slide 2** | **Actividad 1: Autopsia de un apagón total** | Esquema del accidente en taller con doble disparo diferencial y fallo de automático para activar el debate inicial. |
| **Slide 3** | **Sobrecarga vs. cortocircuito y doble condición cable–protección** | Gráfico de zonas térmica y magnética + verificación paso a paso de $I_B \le I_n \le I_z'$ e $I_2 \le 1{,}45\,I_z'$ (MCB vs. fusibles). |
| **Slide 4** | **Curvas B, C, D, MCCB y poder de corte ($I_{cu}/I_{cs}$)** | Curvas superpuestas mostrando zonas de tolerancia ($3\text{–}5$, $5\text{–}10$, $10\text{–}20\ I_n$) y criterio $I_{cu} \ge I_{cp}$. |
| **Slide 5** | **Diferenciales (AC/A/F/B) y sobretensiones (SPD)** | Tabla visual de formas de onda detectadas por cada tipo de RCD, fórmula $R_a \cdot I_{\Delta n} \le U_L$ y cascada SPD Tipo 1–2–3. |
| **Slide 6** | **Selectividad vs. filiación y control frente a IA** | Diagrama comparativo de selectividad vertical (Tipo S) y matriz conceptual de filiación certificada por fabricante (prohibido delegar en IA). |
| **Slide 7** | **Caso práctico: *Alimentaria Levante S.L.*** | Esquema unifilar preliminar del `CGMP` y `SC-ENV` con las 3 incidencias reales (variadores, bomba $110\ \text{A}$ y $I_{cp} = 9{,}2\ \text{kA}$). |
| **Slide 8** | **Síntesis, Hoja Maestra y puente al Tema 7** | 5 reglas clave de protecciones, cierre de la Hoja Maestra Carga–Cable–Protección y adelanto del Tema 7 (Criterios de trazo de instalaciones). |

### Ficha de trabajo
Documento descargable (2 páginas) con:
1. **Tabla de decisión de curvas y diferenciales:** matriz rápida de selección de curva (B/C/D) y tipo de RCD (AC/A/F/B) según naturaleza de carga.
2. **Guía de auditoría de la Actividad 2:** espacio para demostrar matemáticamente los 5 fallos y anotar las fuentes oficiales requeridas.
3. **Plantilla de resolución del caso *Alimentaria Levante S.L.***: tabla de especificación completa de los circuitos afectados.

### Plantilla técnica práctica
Bloque de extensión para la **Hoja Maestra Carga–Conductor–Protección (v1.0)**:

| ID Circ. | $I_B$ [A] | $I_z'$ [A] | $I_n$ [A] | Curva / Tipo | $I_{cp}$ [kA] | $I_{cu}$ eleg. [kA] | Check $I_B \le I_n \le I_z'$ | Check $I_2 \le 1{,}45 I_z'$ | RCD ($I_{\Delta n}$ / Tipo / S) | SPD | Fuente / Catálogo a verificar |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `CAB-ENV` | 46,0 | 58,0 | 50 | MCCB / C | 9,2 | 15 | `=SI(Y(D2>=B2;D2<=C2);"OK";"REV")` | `=SI((1,45*D2)<=(1,45*C2);"OK";"REV")` | 300 mA / B o A-S *(verif.)* / Tipo S | Tipo 2 en CGMP | Tablas fabricante + REBT/IEC |
| `BOMBA-1` | 14,0 | 21,0 | 16 | MCB Curva D | 4,8 | 10 *(o fil.)* | `=SI(Y(D3>=B3;D3<=C3);"OK";"REV")` | `=SI((1,45*D3)<=(1,45*C3);"OK";"REV")` | 30 mA / Tipo A superinm. / Inst. | Coord. SC-ENV | Curva D + $I_{cc,\min}=380\text{ A}$ |

### Lecturas y recursos recomendados
> **Advertencia obligatoria de validación:** Todas las normas, guías y catálogos mencionados son referencias orientativas. Antes de emplearlos en aula o en un proyecto real, el técnico debe verificar la edición vigente del reglamento eléctrico de su país y consultar exclusivamente las curvas y tablas de coordinación oficiales vigentes publicadas por el fabricante de los equipos seleccionados.

- **Serie IEC 60364-4-41 e IEC 60364-4-43** (Protección contra choques eléctricos y protección contra sobreintensidades) — Referencia internacional base (*verificar edición vigente*).
- **Normas de producto IEC 60898-1 (MCB), IEC 60947-2 (MCCB), IEC 61008/61009/62423 (RCD tipos AC/A/F/B) e IEC 61643-11 (SPD)** — Para comprender ensayos, poderes de corte y definiciones oficiales (*validar vigencia*).
- **REBT (España — RD 842/2002), especialmente ITC-BT-22, ITC-BT-23, ITC-BT-24 e ITC-BT-47, o NFPA 70 / NEC Art. 240 y 210.8 (GFCI)** — Ejemplos ilustrativos de trasposición reglamentaria (*comprobar siempre jurisdicción y edición vigente*).
- **Guías técnicas de coordinación eléctrica de fabricantes reconocidos (p. ej., Schneider Electric *Electrical Installation Guide*, ABB *Technical Application Papers*, Siemens)** — Útiles para comprender tablas reales de selectividad y filiación (*verificar fecha de publicación y compatibilidad con aparamenta vigente*).

### Glosario de términos clave

| Término | Definición |
|---|---|
| **Curva de disparo (B, C, D)** | Banda característica de corriente magnética ($3\text{–}5\,I_n$, $5\text{–}10\,I_n$, $10\text{–}20\,I_n$) en la que un interruptor automático modular abre instantáneamente ante puntas de corriente o cortocircuitos. |
| **Diferencial Tipo B** | Interruptor diferencial capaz de detectar tanto fugas alternas y pulsantes como corrientes residuales de corriente continua lisa y alta frecuencia generadas por variadores trifásicos o cargadores VE. |
| **Filiación (*Cascading*)** | Coordinación ensayada por el fabricante entre un interruptor limitador aguas arriba y otro aguas abajo que permite a este último soportar cortocircuitos presuntos superiores a su poder de corte propio. |
| **MCCB (*Molded Case Circuit Breaker*)** | Interruptor automático de caja moldeada destinado a corrientes medias y altas, habitualmente con ajustes regulables de disparo térmico/magnético y elevado poder de corte. |
| **Poder de corte ($I_{cu}$ / $I_{cs}$)** | Corriente máxima de cortocircuito que un interruptor automático puede interrumpir de forma segura (último $I_{cu}$ o manteniendo operatividad posterior $I_{cs}$). |
| **RCD / GFCI** | Dispositivo de protección diferencial residual diseñado para desconectar automáticamente la alimentación cuando la corriente de fuga a tierra supera su sensibilidad asignada $I_{\Delta n}$. |
| **Selectividad** | Coordinación entre dos dispositivos de protección en serie para que, ante una sobrecarga, cortocircuito o defecto a tierra, actúe únicamente la protección más cercana al fallo. |
| **SPD (*Surge Protective Device*)** | Dispositivo protector contra sobretensiones transitorias (Tipos 1, 2 y 3) encargado de derivar a tierra impulsos de tensión elevados protegiendo la instalación y los equipos electrónicos. |

---

## 9. Adaptaciones

### Sesión presencial
- **Muestrario real de aparamenta:** llevar al aula un MCB curva C, un fusible cilíndrico/cuchilla NH, un diferencial (mostrando el símbolo sinusoidal/pulsante en el frontal), un bloque de descarga SPD y una hoja impresa real de curvas tiempo-corriente para leerlas con regla en grupo.
- **Análisis gráfico en pizarra:** dibujar en eje logarítmico cómo se solapan o separan las curvas térmicas y magnéticas entre cabecera y subcuadro para visualizar la selectividad parcial frente a la total.
- **Debate activo del caso:** dividir la pizarra en las tres averías de *Alimentaria Levante S.L.* para que cada grupo complete y defienda una parte.

### Sesión online síncrona
- **Lectura compartida de curvas en pantalla:** proyectar un PDF oficial de curva tiempo-corriente y usar herramientas de anotación para trazar juntos los puntos de $I_{\text{arr}} = 110\ \text{A}$ y $I_{cc,\min} = 380\ \text{A}$ del caso práctico.
- **Salas virtuales (*breakout rooms*):** equipos de 3–4 personas completan la Matriz de Remediación de *Alimentaria Levante S.L.* en documento colaborativo.
- **Pausa de descanso:** mantener estrictamente la pausa de 15 minutos antes de iniciar el caso industrial.

### Sesión asíncrona
- **Vídeos modulares:** cuatro píldoras de 10–12 minutos correspondientes a los apartados 3.1 a 3.4 más un vídeo corto de 8 minutos explicando cómo interpretar una curva tiempo-corriente real y una tabla de filiación de fabricante.
- **Entregable evaluable:** el alumnado sube su Plan de Remediación de *Alimentaria Levante S.L.* y su Hoja Maestra Carga–Conductor–Protección (Actividad 3) al buzón del LMS, validando con un compañero la coherencia $I_B \le I_n \le I_z'$ y el escalonamiento diferencial.
- **Autoevaluación en plataforma:** test interactivo previo al examen sumativo centrado en identificar combinaciones erróneas entre curvas, tipos de RCD y poderes de corte.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** cierra el núcleo duro de cálculo eléctrico del Bloque 1 uniendo las magnitudes y potencias (Tema 1), esquemas de tierra TT/TN/IT (Tema 2), requisitos normativos (Tema 3), intensidades de diseño $I_B$ (Tema 4) y ampacidad de conductores $I_z'$ (Tema 5) en una cadena coordinada completa.
- **Competencias que desarrolla:** coordinación eléctrica de sobreintensidades y contactos indirectos, lectura de curvas de fabricante, prevención de fallos en electrónica de potencia, diseño de selectividad y criterio crítico frente a datos de IA y modelos BIM.
- **Conexión dentro del plan de 6 módulos / 50 temas:**
  - **Tema anterior:** **Tema 5. Dimensionamiento de conductores** (Bloque 1, Tema 5 de 11), que determina las secciones y ampacidades corregidas $I_z'$ que las protecciones de hoy deben salvaguardar.
  - **Tema posterior:** **Tema 7. Criterios de trazo de instalaciones eléctricas** (Bloque 1, Tema 7 de 11), donde una vez definidas cargas, cables y protecciones, el alumnado diseñará los recorridos físicos, bandejas, tubos, registros y coordinación arquitectónica/estructural preparatoria para el modelado 3D en Revit MEP.
- **Evidencia de aprendizaje:**
  1. **Plan de Remediación de *Alimentaria Levante S.L.*** con selección justificada de MCB, MCCB, RCD Tipo B/S y SPD.
  2. **Hoja Maestra Carga–Conductor–Protección (Actividad 3)** verificada y formulada para el proyecto piloto propio.
  3. **Cuestionario sumativo final completado** (6 preguntas).

---

## Siguientes pasos para el formador

1. **Preparar curvas oficiales reales de fabricante:** tener abierto o descargado (respetando autoría y citando fuente) un ejemplo real de curva B/C/D y una tabla real de filiación/selectividad para enseñar dónde y cómo se contrastan los datos en la práctica profesional.
2. **Comprobar que las hojas maestras del alumnado avanzan desde el Tema 4:** asegurarse de que todo el grupo cierra el Tema 6 con su archivo unificado Carga–Conductor–Protección operativo, pues alimentará el caso integrado del Tema 8 y el unifilar del Tema 11.
3. **Destacar el riesgo real del Tipo AC en cargas actuales:** enfatizar durante el cierre la importancia de consultar siempre la ficha técnica de variadores, inversores FV y cargadores VE para seleccionar RCD Tipo A, F o B conforme al código vigente.
4. **Verificar enlaces y ediciones normativas:** confirmar que cualquier referencia a artículos de IEC, REBT o NEC proyectada en diapositivas incorpora explícitamente la advertencia de comprobación vigente.
5. **Conectar con el Tema 7:** invitar al alumnado a traer planos 2D sencillos o referencias de espacios de su proyecto para empezar a definir criterios de trazo físico, canalizaciones y accesibilidad en la siguiente sesión.
