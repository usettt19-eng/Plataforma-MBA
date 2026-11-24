# Tema 2. Tipos de sistemas eléctricos

> **Aviso técnico, normativo y de alcance profesional:** Este contenido pertenece a una **especialización técnica en diseño de instalaciones eléctricas, iluminación (DIALux), modelado BIM (Revit MEP), visualización (Twinmotion) e IA aplicada**. No constituye un MBA ni habilita legalmente para firmar proyectos o dictámenes oficiales sin la titulación y colegiación competentes en el país correspondiente. Los sistemas de tensión, frecuencias y esquemas de conexión a tierra expuestos son **referencias ilustrativas** que deben contrastarse siempre con el reglamento vigente, la compañía distribuidora y la autoridad competente de cada proyecto.

---

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Tipos de sistemas eléctricos |
| **Bloque y posición dentro del programa** | Bloque 1: Instalaciones eléctricas — Tema 2 de 11 (Tema 2 de 50 del programa) |
| **Programa formativo** | IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas (6 módulos / 50 temas) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Modalidad** | Online / Híbrida interactiva |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Tema 1 (magnitudes eléctricas en SI, ley de Ohm, leyes de Kirchhoff y triángulo de potencias $P, Q, S$) |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado diferenciará las configuraciones de suministro en corriente continua y alterna (monofásica, bifásica/*split-phase* y trifásica estrella/triángulo), interpretará la lógica física de los esquemas de conexión a tierra (TT, TN-S, TN-C-S, IT) como referencias generales y estructurará la arquitectura jerárquica desde la acometida hasta los circuitos derivados para su correcta representación técnica y BIM. |

---

## 2. Objetivos de aprendizaje

Al concluir esta sesión de 4 horas, el alumnado será capaz de:

1. **Identificar** las características eléctricas y aplicaciones habituales de la corriente continua (CC) y de los sistemas de corriente alterna monofásicos, bifásicos (*split-phase*) y trifásicos en estrella ($Y$) y triángulo ($\Delta$). *(Nivel de Bloom: Recordar)*
2. **Diferenciar** tensión de línea ($U_L$) frente a tensión de fase ($U_F$) y explicar los esquemas normalizados de conexión a tierra (TT, TN-S, TN-C-S e IT) como referencias generales sujetas a comprobación en la normativa del país. *(Nivel de Bloom: Comprender)*
3. **Aplicar** las relaciones de tensión y corriente en sistemas monofásicos y trifásicos equilibrados para comparar intensidades de línea y seleccionar la topología adecuada en un edificio. *(Nivel de Bloom: Aplicar)*
4. **Analizar** la arquitectura de distribución eléctrica (acometida, cuadro general, subcuadros y circuitos derivados) para detectar incoherencias de sistema o tensión entre el esquema eléctrico y los conectores de Revit MEP. *(Nivel de Bloom: Analizar)*
5. **Diseñar** la estructura jerárquica de tableros y sistemas de distribución de un proyecto piloto verificando que los datos asignados en BIM y las consultas a asistentes de IA respeten las reglas reales de suministro y puesta a tierra. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Corriente continua (CC) frente a corriente alterna (CA): coexistencia en edificios modernos

#### Explicación breve y clara
Aunque las redes públicas de distribución y la mayoría de los cuadros interiores de edificios operan en **corriente alterna (CA)** sinusoidal (a $50\ \text{Hz}$ o $60\ \text{Hz}$ según la región geográfica), la **corriente continua (CC)** ha recuperado un protagonismo decisivo dentro de las instalaciones actuales: generación fotovoltaica en cubierta, bancos de baterías (BESS), puntos de recarga rápida para vehículos eléctricos, sistemas de alimentación ininterrumpida (SAI/UPS) y alumbrado LED con *drivers* electrónicos.

Para el proyectista y el coordinador BIM, esto implica diseñar **instalaciones híbridas CA/CC** donde no pueden mezclarse protecciones, canalizaciones ni parámetros de sistema. Una corriente continua no pasa de forma natural por cero cada semiciclo como la alterna, por lo que extinguir un arco eléctrico en CC exige aparamenta específica certificada para la tensión continua de servicio.

#### Conceptos clave
- **Corriente alterna (CA):** magnitud y polaridad periódicas a $50\ \text{Hz}$ o $60\ \text{Hz}$, fácilmente transformable entre niveles de tensión mediante transformadores.
- **Corriente continua (CC):** flujo unidireccional de polaridad fija ($+$ y $-$), presente en *strings* fotovoltaicos, baterías y buses internos de electrónica de potencia.
- **Conversión CA/CC y CC/CA:** rectificadores (*drivers*, cargadores) e inversores fotovoltaicos que acoplan ambos dominios manteniendo aislamiento o referencias definidas.
- **Extinción de arco eléctrico:** diferencia física crítica por la cual los interruptores de CA no deben utilizarse arbitrariamente en circuitos de CC sin ensayo y aprobación del fabricante.

#### Definiciones necesarias
- **Sistema de corriente alterna (CA):** sistema eléctrico cuya tensión e intensidad varían periódicamente en el tiempo cambiando de sentido (habitualmente de forma sinusoidal a $50\ \text{Hz}$ o $60\ \text{Hz}$).
- **Sistema de corriente continua (CC):** sistema eléctrico de polaridad constante donde la frecuencia nominal es $0\ \text{Hz}$ y los conductores activos se identifican como positivo ($+$), negativo ($-$) y, en configuraciones bipolares, punto medio.
- **Tensión nominal de *string* fotovoltaico:** suma de tensiones en serie de módulos solares en CC (habitualmente entre $300\ \text{V}_{\text{CC}}$ y $1\,000\ \text{V}_{\text{CC}}$ o $1\,500\ \text{V}_{\text{CC}}$ en grandes plantas), cuyo límite máximo en circuito abierto a baja temperatura debe comprobarse según normativa vigente.

#### Ejemplo práctico realista
En una nave logística dotada de autoconsumo fotovoltaico, los paneles de cubierta generan en CC con una tensión en circuito abierto máxima calculada de $U_{oc,\text{máx}} = 780\ \text{V}_{\text{CC}}$ y entregan $18\ \text{A}_{\text{CC}}$ por *string* hacia el inversor. A la salida del inversor, la energía se inyecta al cuadro general en corriente alterna trifásica a $400\ \text{V}_{\text{CA}}$, $50\ \text{Hz}$.
- En el lado CC: deben emplearse cables solares específicos (doble aislamiento, resistencia UV), fusibles gPV e interruptores-seccionadores en carga certificados para $1\,000\ \text{V}_{\text{CC}}$.
- En el lado CA: rigen las tensiones eficaces de $400/230\ \text{V}$ y las protecciones estándar de baja tensión alterna.
*(Nota: los requisitos exactos de seccionamiento, puesta a tierra de estructuras e inversores deben comprobarse en el código vigente del país donde se construya la planta).*

#### Errores frecuentes
- Modelar circuitos fotovoltaicos CC en Revit MEP asignándoles el sistema de distribución CA de $230/400\ \text{V}$ por pereza de configuración de familias.
- Especificar magnetotérmicos o seccionadores diseñados exclusivamente para CA en líneas de baterías o paneles solares en CC.
- Asumir que una frecuencia de $50\ \text{Hz}$ es universal en todos los proyectos internacionales sin comprobar si la jurisdicción trabaja a $60\ \text{Hz}$.
- Confundir la potencia pico instalada de paneles en $\text{kWp}$ (CC) con la potencia nominal de salida del inversor en $\text{kVA}$ (CA).

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué razones físicas resulta más exigente interrumpir una corriente de defecto en CC que en CA para el mismo nivel de tensión?
2. ¿Qué dos dominios eléctricos coexisten en una instalación con cubierta fotovoltaica o sistema SAI, y qué datos mínimos hay que separar en la documentación?
3. ¿Qué error típico ocurre en un modelo BIM cuando no se crea un tipo de sistema específico para las líneas en CC?

---

### 3.2. Sistemas monofásicos, bifásicos (*split-phase*) y trifásicos (estrella $Y$ / triángulo $\Delta$)

#### Explicación breve y clara
Según la potencia demandada y la red del país, los edificios se alimentan mediante distintas configuraciones de alterna:
- **Monofásico (2 hilos: Fase + Neutro, más tierra PE):** habitual en viviendas pequeñas o circuitos finales de alumbrado y tomas (por ejemplo, $230\ \text{V}$ en Europa/IEC o $120\ \text{V}$ en entornos NEC como referencias ilustrativas).
- **Bifásico de fase partida (*split-phase*, 3 hilos: 2 fases a $180^\circ$ + Neutro, más PE):** típico en redes residenciales y pequeños comercios de Norteamérica y diversos países latinoamericanos (por ejemplo, $120/240\ \text{V}$ a $60\ \text{Hz}$, obteniendo $120\ \text{V}$ entre cada fase y neutro, y $240\ \text{V}$ entre ambas fases).
- **Trifásico (3 o 4 conductores activos, fases desfasadas $120^\circ$):** imprescindible en edificios terciarios, industrias, climatización central y ascensores. En conexión **estrella ($Y$)** con neutro se dispone de dos tensiones simultáneas relacionadas por $\sqrt{3} \approx 1{,}732$: tensión de línea $U_L$ (entre fases) y tensión de fase $U_F$ (entre fase y neutro), cumpliéndose $U_L = \sqrt{3} \cdot U_F$ (por ejemplo, $400\ \text{V} / 230\ \text{V}$ o $208\ \text{V} / 120\ \text{V}$). En conexión **triángulo ($\Delta$)** sin neutro, todas las cargas ven directamente la tensión entre líneas ($U_L$).

#### Conceptos clave
- **Tensión de línea ($U_L$) vs. tensión de fase ($U_F$):** diferencia entre medir entre dos conductores de fase ($L_1-L_2$) o entre una fase y el neutro ($L_1-N$); en estrella equilibrada $U_L = \sqrt{3} \cdot U_F$.
- **Sistema trifásico en estrella ($Y$):** permite alimentar cargas trifásicas a $U_L$ y repartir cargas monofásicas a $U_F$ desde un mismo cuadro eléctrico.
- **Sistema en triángulo ($\Delta$):** configuración cerrada de tres bobinados/cargas entre líneas sin punto neutro accesible, habitual en motores trifásicos de media-alta potencia y primarios de transformadores.
- **Sistema *split-phase* ($180^\circ$):** devanado secundario con toma central puesta a tierra que entrega dos tensiones iguales opuestas en fase respecto al neutro (p. ej., $120/240\ \text{V}$, verificable según país).

#### Definiciones necesarias
- **Sistema trifásico equilibrado:** sistema de tres tensiones alternas sinusoidales de igual amplitud y frecuencia desfasadas exactamente $120^\circ$ eléctricos entre sí, con impedancias idénticas conectadas a las tres fases (donde la corriente por el neutro ideal es nula).
- **Conductor neutro ($N$):** conductor conectado al punto neutro de la red (centro de la estrella) capaz de transportar la corriente de retorno en circuitos monofásicos y la corriente resultante de desequilibrio o armónicos homopolares en redes trifásicas.

#### Ejemplo práctico realista
Comparemos la intensidad necesaria para alimentar una máquina térmica de $P = 13{,}8\ \text{kW}$ con $\cos\varphi = 0{,}90$ en un edificio en España ($400/230\ \text{V}$, $50\ \text{Hz}$):
- **Si se alimenta en monofásico ($230\ \text{V}$):**
  $I_{1\text{F}} = \frac{P}{U_F \cdot \cos\varphi} = \frac{13\,800\ \text{W}}{230\ \text{V} \times 0{,}90} \approx 66{,}67\ \text{A}$.
- **Si se alimenta en trifásico equilibrado ($400\ \text{V}$ entre fases):**
  $I_{3\text{F}} = \frac{P}{\sqrt{3} \cdot U_L \cdot \cos\varphi} = \frac{13\,800\ \text{W}}{1{,}73205 \times 400\ \text{V} \times 0{,}90} \approx 22{,}13\ \text{A}$.
El sistema trifásico reduce la corriente por conductor a exactamente la tercera parte ($66{,}67 / 3 \approx 22{,}2\ \text{A}$), permitiendo secciones de cable mucho menores y reduciendo drásticamente las pérdidas por efecto Joule ($I^2 R$) en líneas largas.
*(Nota: el nivel de tensión concreto —$230/400\ \text{V}$, $120/208\ \text{V}$, $120/240\ \text{V}$, $220/380\ \text{V}$— debe comprobarse siempre frente al país y la distribuidora del proyecto).*

#### Errores frecuentes
- Dividir entre $\sqrt{3}$ en lugar de multiplicar, o aplicar el factor $\sqrt{3}$ a sistemas bifásicos *split-phase* de $120/240\ \text{V}$ (donde $240 = 2 \times 120$, no $\sqrt{3} \times 120$).
- Conectar un motor diseñado para $230/400\ \text{V}$ en triángulo ($\Delta$) sobre una red de $400\ \text{V}$ entre líneas, quemando sus devanados por sobretensión.
- Configurar erróneamente los sistemas de distribución en Revit MEP (por ejemplo, asignando `208/120 V` de plantilla estadounidense por defecto a un proyecto europeo de `400/230 V`).
- Asumir que en un sistema trifásico con cargas electrónicas (LED, ordenadores) la corriente por el neutro siempre es cero aunque las fases estén equilibradas (los terceros armónicos se suman en el neutro).

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué en una red trifásica en estrella la tensión de línea es $\sqrt{3}$ veces la tensión de fase mientras que en un sistema *split-phase* es el doble ($2\times$)?
2. ¿Qué ventaja física y económica ofrece transportar $20\ \text{kW}$ en trifásico $400\ \text{V}$ frente a monofásico $230\ \text{V}$?
3. ¿Qué comprobación básica debe hacerse en la plantilla de Revit MEP antes de crear el primer panel eléctrico de un proyecto?

---

### 3.3. Esquemas de conexión a tierra (TT, TN-S, TN-C-S, IT) como referencias generales

#### Explicación breve y clara
Los **esquemas de conexión a tierra** (normalizados internacionalmente en la familia IEC 60364, y con denominaciones o prácticas equivalentes que deben verificarse en códigos nacionales) definen cómo se conectan a tierra tanto el neutro del transformador de alimentación como las envolventes metálicas (masas) de los equipos del edificio. Esta decisión determina la seguridad de las personas frente a contactos indirectos y el tipo de protección obligatoria.

La codificación clásica de dos letras es clara:
- **Primera letra** (relación de la alimentación/neutro con tierra): **T** = conectado directamente a tierra; **I** = aislado de tierra o conectado a través de una impedancia elevada.
- **Segunda letra** (relación de las masas de la instalación con tierra): **T** = conectadas directamente a una toma de tierra propia independiente de la de alimentación; **N** = conectadas directamente al punto puesto a tierra de la alimentación (neutro).
- **Subdivisiones en TN:** **TN-S** (neutro N y protección PE separados en toda la instalación) y **TN-C-S** (neutro y protección combinados PEN en un tramo inicial y separados posteriormente).

#### Conceptos clave
- **Esquema TT:** neutro del centro de transformación a tierra y masas del edificio a tierra local independiente; corrientes de defecto a tierra limitadas por las resistencias de tierra, exigiendo interruptores diferenciales (RCD) como protección esencial.
- **Esquema TN-S:** neutro N y conductor de protección PE separados desde el origen; un fallo fase-masa genera un cortocircuito fase-neutro/PE de alta intensidad que disparará magnetotérmicos o fusibles con rapidez (verificando impedancia de bucle).
- **Esquema TN-C-S:** combina PEN aguas arriba y separa PE y N aguas abajo del origen de la instalación; prohíbe reconectar N y PE tras separarlos y suele restringirse en determinados tramos o secciones mínimas según reglamento.
- **Esquema IT:** alimentación aislada de tierra; ante un **primer defecto** de aislamiento la corriente de falta es mínima y no interrumpe el suministro (requiere controlador permanente de aislamiento y actuación al segundo defecto), habitual en quirófanos o procesos críticos.

#### Definiciones necesarias
- **Masa eléctrica:** parte conductora accesible de un equipo eléctrico que no está normalmente en tensión, pero que puede quedar energizada en caso de fallo del aislamiento principal (por ejemplo, la carcasa metálica de un cuadro o motor).
- **Conductor de protección (PE):** conductor destinado a conectar las masas eléctricas, elementos conductores y bornes de tierra con el sistema de puesta a tierra para fines de seguridad.
- **Conductor PEN:** conductor único que combina simultáneamente las funciones de conductor de protección (PE) y conductor neutro (N) en sistemas TN-C (su uso y sección mínima están estrictamente regulados por normativa).

#### Ejemplo práctico realista
En España, la gran mayoría de edificios alimentados directamente desde la red pública de distribución en baja tensión emplean el **esquema TT** conforme al criterio general del REBT (ejemplo ilustrativo): la compañía distribuidora pone a tierra el neutro de su centro de transformación, mientras el edificio cuenta con su propia red de tierra (picas/anillo de cobre en cimentación). Si se produce un fallo de aislamiento en una lavadora industrial de una lavandería, la resistencia conjunta de las tierras limita la corriente de defecto (por ejemplo, a unos pocos amperios, insuficientes para disparar un magnetotérmico de $32\ \text{A}$), por lo que la presencia de un interruptor diferencial de $30\ \text{mA}$ resulta vital para desconectar el circuito antes de que aparezca una tensión de contacto peligrosa. Por el contrario, si esa misma lavandería formara parte de una gran fábrica con centro de transformación propio en el recinto, podría proyectarse un esquema **TN-S** si la normativa y el cálculo de impedancias de bucle lo autorizan y justifican.
*(Nota: la elección y admisibilidad de TT, TN o IT depende obligatoriamente del país, reglamento vigente y autorización de la empresa distribuidora).*

#### Errores frecuentes
- Asumir que todas las instalaciones del mundo usan el esquema TT o todas usan TN-S sin consultar la normativa nacional ni a la empresa distribuidora.
- Unir el conductor neutro (N) con el conductor de protección (PE) aguas abajo del cuadro general en un sistema TT o TN-S, provocando disparos falsos de diferenciales y retornos peligrosos por tierra.
- Creer que en un sistema IT «no hace falta puesta a tierra de masas» (las masas siguen puestas a tierra; lo aislado de tierra es el neutro de la fuente).
- Desconocer que en sistemas TN-C no pueden instalarse interruptores diferenciales sobre el conductor PEN combinado.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué significan exactamente las letras del código TT, TN-S, TN-C-S e IT en la clasificación internacional de esquemas de tierra?
2. ¿Por qué en un esquema TT no suele bastar con el interruptor magnetotérmico para proteger frente a contactos indirectos en masas metálicas?
3. ¿En qué tipo de edificios o áreas críticas suele justificarse el uso de un esquema IT y qué requisito de vigilancia exige?

---

### 3.4. Arquitectura de distribución: acometida, cuadro general, subcuadros y circuitos derivados

#### Explicación breve y clara
Una instalación eléctrica bien proyectada se organiza como un **árbol jerárquico radial** (o con redundancias específicas en edificios críticos) que distribuye la energía de forma ordenada, segura y mantenible desde el punto de suministro hasta cada receptor final:
1. **Acometida y origen de la instalación:** conexión desde la red de distribución o centro de transformación hasta la Caja General de Protección (CGP), equipo de medida/contadores y línea general/derivación individual (nomenclatura a adaptar según código local).
2. **Cuadro General de Mando y Protección (CGMP / Tablero General):** corazón de la instalación interior; aloja el interruptor general, protecciones contra sobretensiones (SPD), embarrados principales y salidas hacia alimentadores o grandes cargas.
3. **Líneas alimentadoras / subalimentadores:** cables troncales que conectan el cuadro general con los subcuadros secundarios.
4. **Subcuadros (tableros secundarios de planta o proceso):** acercan la protección y maniobra a zonas concretas (planta 2, climatización, garaje, cocina) reduciendo longitudes de circuitos finales y caídas de tensión.
5. **Circuitos derivados (circuitos finales):** ramas individuales protegidas que alimentan luminarias, tomas de corriente o equipos específicos.

Esta misma jerarquía es la que debemos reflejar de manera coherente en el diagrama unifilar, en el cuadro de cargas y en el **Navegador de sistemas de Revit MEP** (sin olvidar que Revit organiza conectividad geométrica y de circuitos, pero no valida la selectividad ni la normativa eléctrica por sí solo).

#### Conceptos clave
- **Jerarquía de distribución:** estructura escalonada Origen → Cuadro General → Subcuadros → Circuitos finales que ordena cargas, caídas de tensión y protecciones.
- **Línea alimentadora (*feeder*) vs. circuito derivado (*branch circuit*):** distinción funcional entre tramos troncales entre cuadros y circuitos terminales que alimentan receptores.
- **Sectorización por usos:** separación física y funcional en tableros para alumbrado, tomas de uso general, fuerza/HVAC, emergencia y servicios críticos.
- **Coherencia Unifilar–BIM:** correspondencia biunívoca entre códigos de tableros/circuitos en el esquema unifilar y en los paneles del modelo Revit MEP.

#### Definiciones necesarias
- **Acometida:** parte de la instalación que enlaza la red de distribución eléctrica pública (o punto de suministro) con la caja o punto de protección y entrada general del edificio.
- **Cuadro General de Mando y Protección (CGMP) / Tablero General:** envolvente normalizada donde convergen la alimentación principal de la instalación interior y los dispositivos de corte, maniobra, medida y protección de las salidas principales.
- **Subcuadro o tablero secundario:** cuadro eléctrico alimentado desde el cuadro general (o desde otro subcuadro superior) destinado a distribuir y proteger los circuitos finales de un sector, planta o proceso determinado.

#### Ejemplo práctico realista
En un edificio de oficinas de 3 plantas ($1\,800\ \text{m}^2$ totales), concentrar los 65 circuitos finales en un único cuadro general en planta baja obligaría a tender 65 cables paralelos por patinillos verticales hasta la planta 3, multiplicando costes de canalización y caídas de tensión. En su lugar, se diseña una arquitectura jerárquica limpia:
- **Acometida trifásica $400/230\ \text{V}$** al **CGMP** en cuarto eléctrico de planta baja.
- Desde el CGMP parten **5 líneas alimentadoras trifásicas**: una a cada subcuadro de planta (`SC-P1`, `SC-P2`, `SC-P3`), una al subcuadro de climatización en cubierta (`SC-CLI`) y una al subcuadro de garaje/recarga VE (`SC-GAR`).
- Desde cada subcuadro nacen únicamente los circuitos derivados locales (alumbrado a $230\ \text{V}$ y tomas a $230\ \text{V}$ repartidas por fases, más fuerza local).
- Esta arquitectura facilita en Revit MEP la vinculación ordenada de paneles (`CGMP` $\to$ `SC-P1..P3` $\to$ circuitos) y en Twinmotion solo se reflejará visualmente la envolvente de luminarias o equipos, sin intervenir en la lógica eléctrica.

#### Errores frecuentes
- Alimentar decenas de receptores lejanos directamente desde el cuadro general sin crear subcuadros de sector, generando madejas de tubos saturadas y caídas de tensión excesivas.
- Mezclar alumbrado, climatización y tomas informáticas en un mismo circuito sin sectorización operativa ni respaldo.
- Mantener nomenclaturas distintas en el cuadro de cargas Excel (`TD-01`), el esquema unifilar (`C.SEC-P1`) y Revit MEP (`Panel A`).
- Suponer que al enlazar eléctricamente un subcuadro en Revit MEP el programa ha comprobado automáticamente el esquema de tierra o la sección del alimentador.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué criterios técnicos y de mantenimiento justifican instalar subcuadros secundarios en lugar de llevar todos los circuitos finales hasta el cuadro general?
2. ¿Cuál es la diferencia estructural y normativa entre una línea alimentadora y un circuito derivado?
3. ¿Cómo debe trasladarse la nomenclatura de la arquitectura de distribución desde el esquema eléctrico hasta Revit MEP para mantener la trazabilidad?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** alterna exposición técnica ilustrada con comparativas numéricas en directo, auditoría de topologías en proyectos mixtos, estudio de un caso clínico real y diseño de una arquitectura jerárquica de tableros aplicable a proyectos propios.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
|---|---|---|---|
| **1. Activación y encuadre de sistemas** | 00:00 – 00:25 (25 min) | Conecta con el Tema 1 y lanza la **Actividad 1** («Radiografía de suministros») mostrando fotografías de placas de equipos, redes CA/CC y tableros para activar conocimientos previos. | Clasifica 6 escenarios rápidos (CC, monofásico, *split-phase*, trifásico $Y/\Delta$) y detecta incompatibilidades básicas de tensión y frecuencia. |
| **2. Microlearning A: CC vs. CA, monofásico, *split-phase* y trifásico** | 00:25 – 01:05 (40 min) | Explica los apartados 3.1 y 3.2 con diagramas fasoriales de estrella/triángulo; demuestra en vivo el cálculo comparativo de corriente entre $1\text{F}$ y $3\text{F}$ y advierte sobre configuraciones por defecto en Revit MEP. | Toma notas en su ficha de trabajo, calcula las intensidades comparadas en un ejercicio breve y revisa qué tensión/frecuencia aplica en su región. |
| **3. Microlearning B: Esquemas de conexión a tierra y arquitectura radial** | 01:05 – 01:45 (40 min) | Expone los apartados 3.3 y 3.4 comparando la respuesta física ante un defecto en TT, TN-S, TN-C-S e IT (como referencias generales) y presenta buenas prácticas de jerarquía de cuadros. | Analiza esquemas simplificados de defecto a tierra e identifica dónde se conectan N, PE y masas en cada configuración. |
| **4. Actividad práctica de aplicación técnica** | 01:45 – 02:15 (30 min) | Dirige la **Actividad 2** (auditoría de errores de sistema en modelo/planos y verificación crítica de consulta sobre esquemas de tierra en IA). | Audita un listado de 5 errores de sistema/tierra en un proyecto mixto y redacta correcciones verificadas frente a una respuesta ambigua de IA. |
| **Descanso activo** | 02:15 – 02:30 (15 min) | Pausa fuera de pantalla y recopilación de preguntas sobre esquemas TT/TN/IT o sistemas internacionales. | Descansa e hidrata; anota dudas sobre casos de su experiencia laboral. |
| **5. Estudio del caso práctico** | 02:30 – 03:15 (45 min) | Presenta el caso *Clínica Dental y Centro Médico SaludSur S.L.*, organiza grupos de 3–4 personas y guía la verificación de sistemas CA/CC, $1\text{F}/3\text{F}$ y puesta a tierra. | En equipos, define la arquitectura de cuadros, separa sistemas CA/CC, justifica el sistema de tierra a verificar con reglamento/distribuidora y corrige errores BIM. |
| **6. Discusión guiada y transferencia a proyecto propio** | 03:15 – 03:45 (30 min) | Modera el contraste de propuestas entre 2–3 equipos y lanza la **Actividad 3** (árbol jerárquico y codificación de cuadros en plantilla). | Presenta su solución del caso y elabora el diagrama jerárquico de cuadros y sistemas de distribución de su propio proyecto piloto. |
| **7. Síntesis, evaluación sumativa y cierre** | 03:45 – 04:00 (15 min) | Resume las claves del Tema 2, aplica el cuestionario sumativo final y presenta el puente hacia el Tema 3 (Normas y reglamentos aplicables). | Completa el test breve de cierre (6 preguntas), realiza su autoevaluación y archiva su mapa de arquitectura de tableros. |

**Total exacto:** 25 + 40 + 40 + 30 + 15 + 45 + 30 + 15 = **240 minutos (4 horas)**.

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «Radiografía de placas y suministros»

- **Objetivo**: Reconocer en pocos minutos distintos tipos de suministro (CC, monofásico, *split-phase*, trifásico $Y/\Delta$) y prevenir incompatibilidades fatales al conectar equipos o configurar software.
- **Instrucciones para el alumnado**:
  1. Revisa las 6 tarjetas proyectadas con placas de características reales/adaptadas (por ejemplo: *string* solar $720\ \text{V}_{\text{CC}}$, motor trifásico $230/400\ \text{V}\ 50\ \text{Hz}$, equipo de cocina norteamericano $120/240\ \text{V}\ 60\ \text{Hz}$, luminaria LED $230\ \text{V}$, compresor trifásico $400\ \text{V}\ \Delta$).
  2. Durante 7 minutos, asocia cada equipo a su tipo de suministro, número de conductores activos y tensión entre fases o fase-neutro.
  3. Responde en la encuesta en vivo a la pregunta trampa sobre qué ocurre si conectas un motor de $230/400\ \text{V}$ en triángulo sobre una red de $400\ \text{V}$ entre líneas.
- **Materiales necesarios**: Diapositiva con 6 extractos de placa de características y herramienta de encuesta interactiva.
- **Tiempo estimado**: 15 minutos (integrados en la Fase 1).
- **Rol del formador**: Comentar las respuestas erróneas en tiempo real y destacar por qué la comprobación de frecuencia ($50/60\ \text{Hz}$) y conexión ($Y/\Delta$) precede a cualquier cálculo.
- **Producto o entregable esperado**: Tabla rápida cumplimentada con los 6 equipos clasificados por sistema de suministro.
- **Criterios de éxito**: Identificación correcta de al menos 5 de 6 configuraciones y explicación acertada del riesgo de sobretensión en conexión triángulo inadecuada.

### Actividad 2 (Aplicación técnica): Auditoría de topología eléctrica y control de alucinaciones en IA

- **Objetivo**: Detectar fallos frecuentes de tensión de línea/fase, esquemas de tierra y configuración de sistemas en BIM, contrastándolos con una respuesta imprecisa generada por IA.
- **Instrucciones para el alumnado**:
  1. Trabajando en grupos de 3 personas (20 minutos), analizad la ficha de un proyecto donde aparecen 5 incidencias reales: (a) unión N-PE en un subcuadro TT; (b) carga fotovoltaica CC introducida como panel `230/400 V` en Revit MEP; (c) uso de fórmula trifásica $\sqrt{3}$ sobre un sistema *split-phase* $120/240\ \text{V}$; (d) motor trifásico calculado con $230\ \text{V}$ en lugar de $400\ \text{V}$ en la fórmula $\sqrt{3}\cdot U_L$; y (e) respuesta de IA que afirma «el esquema TN-C es el estándar universal en viviendas europeas y admite diferenciales sobre el PEN».
  2. Para cada incidencia, anotad: qué falla físicamente, qué consecuencia provoca y cuál es la corrección técnica (señalando siempre qué norma o distribuidora hay que verificar).
  3. En 10 minutos de puesta en común, contrastad la refutación a la respuesta errónea de la IA.
- **Materiales necesarios**: Ficha de incidencias de la Actividad 2 y hoja de cálculo de comprobación.
- **Tiempo estimado**: 30 minutos (Fase 4).
- **Rol del formador**: Guiar las discusiones por salas/mesas, evitando simplificaciones erróneas sobre los esquemas TN y subrayando que las reglas exactas de puesta a tierra dependen de la legislación local.
- **Producto o entregable esperado**: Matriz de auditoría con los 5 errores diagnosticados y su corrección técnica trazable.
- **Criterios de éxito**: Detección correcta de los 5 fallos, especialmente la prohibición conceptual de diferenciales sobre PEN en TN-C y el cálculo correcto de la fórmula trifásica con tensión de línea.

### Actividad 3 (Transferencia a proyecto real): Árbol Jerárquico de Cuadros y Sistemas de Distribución

- **Objetivo**: Estructurar de forma coherente y normalizada la jerarquía eléctrica de un edificio real o proyecto piloto, preparándola para memorias, esquemas unifilares y futuros modelos Revit MEP.
- **Instrucciones para el alumnado**:
  1. Utilizando la plantilla técnica práctica de la Sección 8 (*Matriz de Arquitectura y Sistemas de Distribución*), define un edificio real o caso propio (por ejemplo: nave con oficinas, local comercial de dos plantas o pequeño centro sanitario).
  2. Durante 20 minutos, diseña la jerarquía completa: Punto de acometida $\to$ Cuadro General (`CGMP`) $\to$ al menos 3 Subcuadros (`SC-...`) $\to$ tipos de circuitos derivados, especificando en cada nivel: sistema (`CC`, `1F`, `3F+N`, `3F`), tensiones nominales ($U_L / U_F$), esquema de conexión a tierra previsto (indicando qué autoridad o código debe validarlo) y código único trazable.
  3. Verifica por parejas (5 minutos) que ningún circuito monofásico quede sin neutro declarado ni exista salto incompatible de tensión entre cuadro padre y subcuadro hijo.
- **Materiales necesarios**: Plantilla editable de Arquitectura y Sistemas de Distribución y guía rápida de codificación.
- **Tiempo estimado**: 25 minutos (integrados en la Fase 6).
- **Rol del formador**: Mostrar un árbol jerárquico modelo de 3 niveles antes de empezar y validar la coherencia de tensiones padre-hijo en 2–3 ejemplos voluntarios.
- **Producto o entregable esperado**: Matriz y esquema jerárquico codificado del edificio elegido, listo para servir de base en el Tema 4 (Cuadro de cargas) y en el Bloque 3 (Revit MEP).
- **Criterios de éxito**: Jerarquía radial lógica sin bucles ni saltos incompatibles de tensión, separación explícita entre circuitos CA y CC (si aplica) y verificación normativa anotada.

---

## 6. Caso práctico

### Caso práctico: *Clínica Dental y Centro Médico SaludSur S.L.* — Rediseño de arquitectura en edificio sanitario mixto

#### Contexto empresarial
**SaludSur S.L.** es un centro médico-dental privado en fase de reforma integral en Sevilla (España), distribuido en planta baja (recepción, 4 gabinetes odontológicos, sala de rayos X y cuarto técnico), planta primera (consultas médicas y pequeña sala de cirugía ambulatoria) y cubierta (equipos de climatización VRF y una instalación fotovoltaica de autoconsumo de $12\ \text{kWn}$).

El estudio encargado del modelado BIM inició el archivo en Revit MEP con una plantilla genérica en inglés sin coordinación eléctrica previa y entregó un primer borrador de arquitectura eléctrica lleno de inconsistencias que bloquean el avance del proyecto.

#### Situación o problema
Durante la reunión de coordinación técnica, la dirección facultativa identifica cinco problemas críticos en la propuesta preliminar:
1. La plantilla BIM asignó por defecto un sistema de distribución `208/120 V` ($60\ \text{Hz}$) cuando el suministro real en España es trifásico $400/230\ \text{V}$ ($50\ \text{Hz}$).
2. Todos los circuitos de planta baja, planta primera, climatización e inversores solares salen directamente de un único cuadro saturado en recepción sin subcuadros de sector ni jerarquía de mantenimiento.
3. Los compresores de aire dental y bombas de aspiración del cuarto técnico (motores trifásicos de $400\ \text{V}$) fueron conectados en el modelo sobre circuitos monofásicos de $230\ \text{V}$.
4. No se ha diferenciado el tramo en corriente continua ($650\ \text{V}_{\text{CC}}$) entre los módulos solares de cubierta y el inversor, ni se ha previsto qué esquema de puesta a tierra corresponde al edificio general frente a la sala de cirugía ambulatoria.
5. Un colaborador preguntó a Claude qué esquema de tierra usar en el edificio completo y recibió una respuesta genérica recomendando «usar esquema TN-C-S o IT indistintamente en toda la clínica», sin comprobar la normativa nacional ni la compañía eléctrica.

#### Datos disponibles

| Área / Elemento del proyecto | Parámetros técnicos disponibles | Observación para el diseño |
|---|---|---|
| **Suministro de red previsto** | Red pública de baja tensión, trifásica $400/230\ \text{V}$, $50\ \text{Hz}$ | Acometida desde red pública (verificar esquema exigido por reglamento/distribuidora; p. ej. TT en España como referencia ilustrativa) |
| **Planta baja: 4 gabinetes + Rayos X** | Sillones dentales ($230\ \text{V}$), equipo Rx intraoral/panorámico ($230\ \text{V}$), iluminación y tomas | Alta densidad de equipos médicos y exigencia de orden y mantenimiento rápido |
| **Cuarto técnico (Planta baja)** | 2 compresores de aire seco + bomba de aspiración: motores trifásicos $400\ \text{V}$ (placa $230/400\ \text{V}$), $P_{\text{conjunta}} = 9{,}0\ \text{kW}$, $\cos\varphi = 0{,}84$ | Carga motriz trifásica continua; requiere arranque seguro |
| **Planta 1: Sala cirugía ambulatoria** | Luminaria quirúrgica, monitorización vital y tomas asistenciales críticas ($230\ \text{V}$) | Requiere evaluar continuidad de servicio y verificar si la normativa sanitaria exige esquema **IT médico** con transformador de aislamiento y vigilancia de aislamiento |
| **Cubierta: Climatización VRF** | Unidad exterior VRF trifásica $400\ \text{V}$ ($3\text{F}+\text{N}+\text{PE}$), $P = 18{,}0\ \text{kW}$, $\cos\varphi = 0{,}90$ | Ubicada en intemperie/cubierta técnica |
| **Cubierta: Fotovoltaica** | 2 *strings* en CC ($U_{\text{máx}} = 650\ \text{V}_{\text{CC}}$) + Inversor trifásico $12\ \text{kVA}$ a $400\ \text{V}_{\text{CA}}$ | Dos dominios eléctricos: CC (paneles $\to$ inversor) y CA (inversor $\to$ cuadro) |

#### Preguntas de análisis
1. ¿Qué configuraciones eléctricas exactas ($U_L / U_F$, $f$, conductores activos) corresponden a cada área y cómo corregir el fallo de la plantilla `208/120 V` antes de seguir modelando?
2. Calcula la intensidad de línea trifásica de los equipos del cuarto técnico ($9{,}0\ \text{kW}$, $\cos\varphi = 0{,}84$) y de la unidad VRF de cubierta ($18{,}0\ \text{kW}$, $\cos\varphi = 0{,}90$) a $400\ \text{V}$.
3. ¿Cómo se debe reestructurar la arquitectura de cuadros (`CGMP` y subcuadros) para eliminar la saturación del cuadro único en recepción y mejorar la operatividad clínica?
4. ¿Por qué es peligrosa la recomendación genérica de la IA sobre el esquema de tierra, y qué diferencia técnica debe existir entre el edificio general (TT habitual en red pública española, a confirmar) y una sala quirúrgica con posible exigencia de esquema IT?

#### Tarea a realizar
En equipos de 3–4 personas (30 minutos de trabajo + 15 minutos de puesta en común), elaborad la **Propuesta de Arquitectura Eléctrica de *SaludSur S.L.*** que contenga:
1. **Árbol jerárquico de distribución:** desde la acometida hasta el `CGMP` y un mínimo de 4 subcuadros sectorizados (por ejemplo, Planta Baja/Gabinetes, Cuarto Técnico, Planta 1/Cirugía y Cubierta VRF+FV), especificando sistema y tensiones de cada rama.
2. **Separación explícita CA/CC y cálculos verificados** de intensidad trifásica para el cuarto técnico y la unidad VRF.
3. **Estrategia de esquemas de puesta a tierra a validar normativamente** (distinguiendo el esquema general del edificio frente a la posible zona médica crítica con transformador de aislamiento IT, indicando qué reglamentos/ITC o códigos equivalentes deben consultarse).
4. **Regla de control BIM–IA:** 3 instrucciones concretas para el equipo de modelado Revit MEP y para evitar aceptar respuestas genéricas de IA en decisiones de seguridad eléctrica.

#### Posibles soluciones o criterios de análisis
Una propuesta sólida de los equipos debe contemplar:
- **Corrección de sistema y cálculos:** sustitución inmediata del sistema `208/120 V 60 Hz` por `400/230 V 50 Hz` (`3F+N+PE`) tras verificar el suministro con la distribuidora.
  - Cuarto técnico: $I_{3\text{F}} = \frac{9\,000}{\sqrt{3} \times 400 \times 0{,}84} \approx 15{,}46\ \text{A}$ por fase (motores conectados en estrella $\text{Y}$ sobre red $400\ \text{V}$ entre líneas, dado que su placa es $230/400\ \text{V}$).
  - Climatización VRF cubierta: $I_{3\text{F}} = \frac{18\,000}{\sqrt{3} \times 400 \times 0{,}90} \approx 28{,}87\ \text{A}$ por fase.
- **Arquitectura recomendada de cuadros:**
  - `CGMP` (ubicado en cuarto técnico/armario de entrada accesible, no en medio de recepción): acometida trifásica $400/230\ \text{V}$, protección general, SPD e interconexión controlada del inversor FV (`400 V CA`).
  - Subcuadros propuestos: `SC-PB` (gabinetes, rayos X, recepción, alumbrado y tomas $230\ \text{V}$ repartidos en 3 fases), `SC-TEC` (compresores/aspiración $400\ \text{V}$), `SC-P1-CIR` (consultas P1 y subcuadro/panel de aislamiento para cirugía si aplica por uso sanitario) y `SC-CUB` (VRF cubierta; el lado CC de los *strings* hasta $650\ \text{V}_{\text{CC}}$ va en caja de protecciones CC independiente hasta el inversor, nunca dentro del cuadro de distribución CA estándar).
- **Esquemas de puesta a tierra (verificación obligatoria):** en España (REBT, ejemplo ilustrativo), la alimentación desde red pública empleará típicamente **TT** para el edificio general; sin embargo, si la sala de cirugía ambulatoria entra dentro del ámbito de quirófanos o salas de intervención según normativa sanitaria/eléctrica vigente (p. ej., ITC-BT-38 en España o código equivalente en otro país), se requerirá un **esquema IT médico** alimentado mediante transformador de aislamiento y monitor de aislamiento para evitar que un primer defecto corte el suministro vital. En ningún caso se mezclan TN-C-S e IT «indistintamente» como sugirió la IA.
- **Control BIM–IA:** configurar los *Electrical Settings* y sistemas de distribución de Revit MEP antes de cablear; separar familias de CC fotovoltaica de los circuitos CA; exigir que cualquier consulta a IA cite el alcance, país y reciba verificación frente al reglamento vigente antes de aprobar el esquema.

#### Preguntas de reflexión final
- ¿Qué consecuencias tendría en obra descubrir que los compresores trifásicos de $400\ \text{V}$ quedaron modelados y presupuestados con líneas monofásicas de $230\ \text{V}$?
- ¿Por qué un modelo BIM visualmente impecable en Revit o Twinmotion puede ocultar fallos graves de puesta a tierra o mezcla de dominios CA/CC?

---

## 7. Evaluación

### Evaluación diagnóstica
- **Instrumento:** Encuesta interactiva inicial de 5 preguntas (Actividad 1) sobre reconocimiento de CC, monofásico, *split-phase*, trifásico estrella/triángulo y conexión de placas nominales.
- **Propósito:** Detectar confusiones previas sobre tensiones de línea/fase y frecuencias internacionales sin calificación numérica.

### Evaluación formativa
- **Observación directa** en la Actividad 2 (corrección de errores de topología, TN-C y respuesta de IA) y durante el desarrollo grupal del caso *SaludSur S.L.*
- **Revisión rápida por parejas** en la Actividad 3 verificando compatibilidad de tensiones entre cuadro general, subcuadros y circuitos finales.

### Evaluación sumativa
Se apoya en dos evidencias complementarias:
1. **Cuestionario breve online (6 preguntas técnicas y situacionales, 10 minutos, 40 % del tema):** evalúa relaciones $U_L / U_F$, diferencias CC/CA, lógica física de TT/TN-S/TN-C-S/IT y jerarquía de distribución.
2. **Entregable combinado: Propuesta de Arquitectura de *SaludSur S.L.* + Árbol Jerárquico de Proyecto Propio (Actividad 3) (60 % del tema)**, evaluado mediante la rúbrica inferior.

### Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
|---|---|---|---|---|
| **1. Dominio de sistemas CC, $1\text{F}$, *split-phase* y $3\text{F}$** | Confunde tensión de línea con tensión de fase o mezcla sistemas CC y CA en un mismo circuito/panel. | Diferencia $1\text{F}$ y $3\text{F}$, pero comete errores con $\sqrt{3}$, *split-phase* o conexión estrella/triángulo de motores. | Calcula y clasifica correctamente sistemas CC, $1\text{F}$, *split-phase* y $3\text{F}$ ($Y/\Delta$) con sus tensiones e intensidades reales. | Justifica técnicamente la selección de sistema, detecta incompatibilidades de placa/plantilla BIM y optimiza el reparto de cargas. |
| **2. Comprensión de esquemas de tierra (TT, TN, IT)** | Confunde las letras del código o propone mezclas inseguras (p. ej., unir N y PE aguas abajo o diferenciales sobre PEN). | Identifica el significado básico de TT, TN e IT, aunque omite explicar la respuesta ante un defecto o la necesidad de verificación normativa. | Explica con claridad el funcionamiento físico de TT, TN-S, TN-C-S e IT e indica explícitamente la verificación en reglamento y distribuidora. | Analiza casos mixtos (edificio general + área crítica/sanitaria) justificando con rigor dónde aplicar cada esquema tras confirmar código vigente. |
| **3. Arquitectura de distribución y trazabilidad BIM** | Concentra circuitos sin jerarquía ni subcuadros, o mantiene nombres y tensiones incoherentes entre tablas y modelo. | Crea subcuadros básicos, pero mantiene saltos de tensión sin justificar o mezcla usos críticos con generales. | Diseña una arquitectura radial ordenada (acometida $\to$ CGMP $\to$ subcuadros $\to$ circuitos) con codificación única y coherencia para Revit MEP. | Integra sectorización operativa, separación estricta CA/CC, criterios de mantenimiento y reglas concretas para la configuración eléctrica de Revit MEP. |
| **4. Control crítico frente a la IA** | Acepta la respuesta ambigua de la IA sobre esquemas de tierra sin cuestionar normativa ni jurisdicción. | Señala que la IA puede equivocarse, pero no especifica qué debe verificarse ni aporta corrección técnica sólida. | Refuta errores concretos de IA contrastando con principios físicos y recuerda la verificación obligatoria del país y reglamento vigente. | Establece controles preventivos en el equipo (anonimización, verificación normativa y validación por técnico competente) antes de aceptar propuestas de IA. |

### Actividad de autoevaluación
Al cerrar la sesión, el alumnado responde en el aula virtual a tres cuestiones breves:
1. *¿Qué diferencia entre los esquemas TT, TN-S e IT comprendo ahora con claridad desde el punto de vista de la seguridad ante un defecto?*
2. *Al abrir un proyecto nuevo en Revit MEP, ¿qué tres ajustes de sistema eléctrico revisaré antes de colocar el primer cuadro o circuito?*
3. *¿Qué elemento de la arquitectura jerárquica de mi propio proyecto ha mejorado tras realizar la Actividad 3?*

---

## 8. Materiales y recursos

### Guion de diapositivas

| Diapositiva | Título y objetivo visual | Contenido clave y notas del formador |
|---|---|---|
| **Slide 1** | **Portada y objetivos del Tema 2** | Posición (Bloque 1 · Tema 2/11), enlace con magnitudes del Tema 1, aviso de verificación normativa por país y 5 objetivos Bloom. |
| **Slide 2** | **Coexistencia CC y CA en edificios** | Esquema de instalación moderna con fotovoltaica CC, baterías, SAI, cargadores VE y distribución general en CA; riesgos de arco eléctrico en CC. |
| **Slide 3** | **Sistemas $1\text{F}$, *split-phase* y $3\text{F}$ ($Y/\Delta$)** | Diagramas vectoriales y tensiones ilustrativas ($230/400\ \text{V}$, $120/240\ \text{V}$, $120/208\ \text{V}$); cálculo comparativo de corriente $1\text{F}$ vs. $3\text{F}$. |
| **Slide 4** | **Lectura de placas y ajustes en Revit MEP** | Comparativa de placa de motor $230/400\ \text{V}$ ($Y/\Delta$) y captura conceptual de *Electrical Settings / Distribution Systems* en Revit MEP. |
| **Slide 5** | **Esquemas de conexión a tierra: TT, TN-S, TN-C-S, IT** | Cuatro diagramas simplificados mostrando punto de neutro, conductor PE/PEN, masas, puestas a tierra y trayectoria de corriente de defecto. |
| **Slide 6** | **Arquitectura jerárquica de distribución** | Árbol completo: Acometida $\to$ CGP/Medida $\to$ CGMP $\to$ Alimentadores $\to$ Subcuadros $\to$ Circuitos derivados + nomenclatura trazable. |
| **Slide 7** | **Caso práctico: *Clínica SaludSur S.L.*** | Plano esquemático por plantas (PB, Cuarto Técnico, P1 Cirugía, Cubierta VRF + FV CC) e incidencias BIM/IA a resolver en grupo. |
| **Slide 8** | **Síntesis, evaluación y puente al Tema 3** | 5 reglas clave sobre sistemas y puesta a tierra, test sumativo final y avance hacia el Tema 3 (Normas y reglamentos aplicables). |

### Ficha de trabajo
Documento descargable (2 páginas) con:
1. **Tabla comparativa de sistemas:** columnas para CC, $1\text{F}$, *split-phase*, $3\text{F}\ Y$ y $3\text{F}\ \Delta$ con fórmulas de potencia y corriente.
2. **Esquemas mudos de puesta a tierra:** 4 plantillas TT, TN-S, TN-C-S e IT para que el alumnado dibuje la trayectoria de un primer defecto a masa durante la explicación.
3. **Espacio de resolución del caso *SaludSur S.L.*:** lienzo para dibujar el árbol de cuadros y calcular las intensidades trifásicas.

### Plantilla técnica práctica
**Matriz de Arquitectura y Sistemas de Distribución (v1.0)** para documentar la jerarquía antes de modelar en Revit MEP:

| Nivel | Código Único | Alimentado desde | Tipo de Sistema | Tensión $U_L / U_F$ [V] | Frecuencia [Hz] | Esquema Tierra (A verificar) | Uso / Sector |
|---|---|---|---|---|---|---|---|
| 1. Origen | `CGMP-01` | Acometida Red | 3F + N + PE | 400 / 230 | 50 | TT *(Verificar reglamento/distribuidora)* | Cuadro General |
| 2. Subcuadro | `SC-TEC` | `CGMP-01` | 3F + N + PE | 400 / 230 | 50 | TT | Cuarto técnico / Motores |
| 2. Subcuadro | `SC-P1-CIR` | `CGMP-01` | 3F + N + PE $\to$ IT | 400/230 $\to$ 230 IT | 50 | TT / IT médico *(Verificar código)* | Planta 1 y Cirugía |
| 2. Generación CC | `CAJA-FV-CC` | Strings Cubierta | CC Bipolar | Máx. 650 CC | 0 (DC) | Según fabricante/norma FV | Lado CC hasta Inversor |

### Lecturas y recursos recomendados
> **Advertencia obligatoria de validación:** Los reglamentos nacionales, normas técnicas y documentos de fabricantes citados son referencias orientativas. El formador y el alumnado deben comprobar siempre la vigencia, edición exacta, autoridad competente y aplicabilidad en el país del proyecto antes de utilizarlos en diseño real.

- **Serie internacional IEC 60364** (especialmente partes de principios fundamentales y esquemas de conexión a tierra TT, TN e IT — *verificar edición vigente en catálogo IEC o comité nacional equivalente*).
- **Reglamento Electrotécnico para Baja Tensión (REBT, España — RD 842/2002)** y sus Instrucciones Técnicas Complementarias (p. ej., ITC-BT-08 sobre sistemas de conexión del neutro y masas, ITC-BT-38 sobre locales médicos, como ejemplos ilustrativos — *verificar guías y modificaciones vigentes*).
- **NFPA 70 / National Electrical Code (NEC)** — Ejemplos ilustrativos de sistemas *split-phase* $120/240\ \text{V}$ y $208\text{Y}/120\ \text{V}$ (*verificar edición adoptada por la jurisdicción local*).
- **Documentación oficial de Autodesk Revit MEP sobre sistemas de distribución eléctrica (*Distribution Systems* y *Voltage Definitions*)** — Para comprender la parametrización geométrica-lógica en BIM sin confundirla con validación normativa (*verificar versión del software utilizada*).

### Glosario de términos clave

| Término | Definición |
|---|---|
| **Acometida** | Tramo de instalación que conecta la red de suministro eléctrico exterior con el punto de protección general y entrada al edificio. |
| **Conductor PEN** | Conductor único que reúne simultáneamente las funciones de conductor de protección (PE) y de conductor neutro (N) en sistemas TN-C. |
| **Esquema IT** | Configuración de conexión a tierra donde las partes activas de la alimentación están aisladas de tierra (o conectadas mediante alta impedancia) y las masas están puestas a tierra. |
| **Esquema TN-S** | Sistema donde el neutro de la fuente está conectado a tierra y el conductor de protección (PE) discurre separado del conductor neutro (N) en toda la instalación. |
| **Esquema TT** | Configuración en la que el neutro de la fuente está conectado a tierra y las masas metálicas de la instalación receptora se conectan a una toma de tierra independiente. |
| **Sistema *split-phase*** | Suministro monofásico de tres hilos con toma central puesta a tierra que ofrece dos tensiones simétricas respecto al neutro y el doble de tensión entre extremos (p. ej., $120/240\ \text{V}$). |
| **Tensión de fase ($U_F$)** | Diferencia de potencial medida entre un conductor de fase y el conductor neutro en un sistema polifásico en estrella. |
| **Tensión de línea ($U_L$)** | Diferencia de potencial medida entre dos conductores de fase cualesquiera de un sistema polifásico ($U_L = \sqrt{3} \cdot U_F$ en estrella equilibrada). |

---

## 9. Adaptaciones

### Sesión presencial
- **Actividad 1 manipulativa:** entregar tarjetas impresas con placas reales de motores, inversores y cuadros para clasificarlas físicamente en mesas por tipo de sistema ($CC, 1F, \text{split-phase}, 3F\ Y/\Delta$).
- **Esquemas de tierra en pizarra:** dibujar los cuatro esquemas TT, TN-S, TN-C-S e IT con rotuladores de distinto color (fases negro/marrón/gris, neutro azul, tierra verde-amarillo, recordando que los códigos de color también varían por país y deben verificarse).
- **Revisión rápida de árboles:** exponer en pared o proyector 3 matrices de arquitectura de la Actividad 3 para debate técnico en sala.

### Sesión online síncrona
- **Encuestas y salas virtuales:** usar votación instantánea para la Actividad 1 y *breakout rooms* de 3–4 personas para el caso *SaludSur S.L.* con una pizarra colaborativa precargada con las plantas del edificio.
- **Demostración en vivo:** mostrar brevemente en pantalla cómo la configuración errónea de *Distribution Systems* en Revit MEP impide conectar correctamente un equipo si no coincide con el sistema del panel (sin profundizar aún en el modelado del Bloque 3).
- **Gestión de ritmos:** mantener microbloques de 15–20 minutos y respetar la pausa de 15 minutos a mitad de sesión.

### Sesión asíncrona
- **Cápsulas grabadas:** cuatro vídeos cortos correspondientes a los apartados 3.1 a 3.4, incluyendo un vídeo demostrativo de 6 minutos sobre el trazado de defecto a tierra en TT frente a TN-S e IT.
- **Foro de diseño de arquitectura:** el alumnado sube su árbol jerárquico de la Actividad 3 y la propuesta de *SaludSur S.L.* en PDF, recibiendo y aportando comentarios técnicos a un compañero mediante una lista de chequeo de 3 puntos.
- **Retroalimentación docente:** revisión de los casos subidos en el LMS con énfasis en separación CA/CC y verificación normativa de puesta a tierra.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** consolida el cálculo de magnitudes SI, potencias $P, Q, S$ e intensidades del Tema 1, extendiéndolos desde el circuito aislado hacia redes completas de corriente continua, monofásicas y trifásicas.
- **Competencias que desarrolla:** selección y verificación de topologías de suministro, comprensión física de la protección contra contactos indirectos según esquemas TT/TN/IT, organización jerárquica de cuadros y coherencia preliminar con sistemas eléctricos en BIM.
- **Conexión dentro del plan de 6 módulos / 50 temas:**
  - **Tema anterior:** **Tema 1. Conceptos básicos de electricidad** (Bloque 1, Tema 1 de 11), cuyas unidades SI, ley de Ohm y triángulo de potencias son indispensables para comparar corrientes en $1\text{F}$ y $3\text{F}$.
  - **Tema posterior:** **Tema 3. Normas y reglamentos aplicables** (Bloque 1, Tema 3 de 11), donde el alumnado aprenderá exactamente cómo identificar el país, código eléctrico vigente, autoridad competente y edición oficial que determinan qué tensiones, frecuencias, colores y esquemas de puesta a tierra son obligatorios en cada proyecto.
- **Evidencia de aprendizaje:**
  1. **Propuesta de Arquitectura Eléctrica de *SaludSur S.L.*** con cálculos trifásicos verificados y estrategia de tierra a confirmar normativamente.
  2. **Matriz de Arquitectura y Sistemas de Distribución (Actividad 3)** aplicada a un proyecto propio.
  3. **Cuestionario sumativo final completado** (6 preguntas).

---

## Siguientes pasos para el formador

1. **Adaptar ejemplos de tensión al perfil geográfico del grupo:** si hay alumnado de España y Latinoamérica o Norteamérica en la misma cohorte, mantener ambos ejemplos ilustrativos ($400/230\ \text{V}\ 50\ \text{Hz}$ y $120/240\ \text{V}$ / $120/208\ \text{V}\ 60\ \text{Hz}$) insistiendo siempre en la verificación local.
2. **Preparar los 4 esquemas mudos TT/TN/IT:** verificar que las animaciones o tarjetas muestran claramente qué conductor es N, PE o PEN antes de iniciar el Microlearning B.
3. **Revisar la respuesta simulada de IA de la Actividad 2:** asegurarse de que el alumnado refuta técnicamente los errores usando leyes físicas y criterios normativos y no solo intuición.
4. **Guardar las matrices de la Actividad 3:** se reutilizarán en el Tema 4 (Cuadro de cargas) y servirán de guía cuando en el Bloque 3 el grupo configure paneles y circuitos en Revit MEP.
5. **Anticipar el Tema 3:** recordar al alumnado que cualquier duda sobre «qué esquema de tierra es obligatorio en mi ciudad» será la puerta de entrada exacta de la próxima sesión sobre jerarquía normativa y códigos vigentes.
