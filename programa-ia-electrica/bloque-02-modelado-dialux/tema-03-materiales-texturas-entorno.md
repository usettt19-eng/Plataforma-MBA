# Tema 3. Definición de materiales y texturas en el entorno

## 1. Ficha del tema

| Campo | Detalle |
| :--- | :--- |
| **Título del tema** | Definición de materiales y texturas en el entorno |
| **Bloque y posición dentro del programa** | Bloque 2: Modelado en DIALux — Posición 3 de 5 (Tema 14 de 50 del programa) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Haber completado los Temas 1 y 2 del Bloque 2 (configuración métrica SI, importación 2D y modelado geométrico de locales con alturas de falso techo y vanos). |
| **Resultado general de aprendizaje** | Al finalizar la sesión, el alumnado será capaz de asignar y calibrar propiedades ópticas realistas de reflectancia ($\rho$), reflexión especular y transmisión ($\tau$) a las superficies interiores, distinguirlas de meras texturas estéticas de visualización, y modelar mobiliario y obstáculos que proyecten sombras reales dentro de DIALux. |

---

## 2. Objetivos de aprendizaje

Al completar esta sesión de 4 horas, el alumnado será capaz de:

1. **Identificar** los parámetros ópticos principales que gobiernan el comportamiento fotométrico de las superficies en DIALux: factor de reflexión ($\rho$), grado de reflexión especular, rugosidad y factor de transmisión ($\tau$) *(Nivel de Bloom: Recordar)*.
2. **Explicar** cómo varían la iluminancia media ($E_m$), la uniformidad ($U_0$) y la luminancia de pared o techo al modificar las reflectancias reales de suelos, paramentos y techos frente a los valores por defecto del software *(Nivel de Bloom: Comprender)*.
3. **Configurar** materiales calibrados fotométricamente para envolventes y acristalamientos en DIALux, diferenciando su validez física de la apariencia puramente estética destinada al renderizado posterior en Twinmotion *(Nivel de Bloom: Aplicar)*.
4. **Modelar** elementos de mobiliario, estanterías, mamparas y obstáculos estructurales reales para analizar el impacto cuantitativo de las sombras proyectadas sobre planos de trabajo y pasillos *(Nivel de Bloom: Analizar)*.
5. **Evaluar** un modelo lumínico entregado por terceros para detectar materiales con reflectancias irreales, vidrios configurados erróneamente como opacos o ausencia crítica de obstáculos físicos *(Nivel de Bloom: Evaluar)*.

---

## 3. Contenidos esenciales

### 3.1. Propiedades ópticas de superficies: reflectancia (ρ), reflexión especular y rugosidad

#### Explicación breve y clara
En un espacio interior cerrado, la luz que llega al plano de trabajo es la suma de dos componentes: la **componente directa** (procedente en línea recta de las luminarias) y la **componente indirecta o reflejada** (procedente de múltiples rebotes sobre techos, paredes, suelos y mobiliario). En locales con geometría favorable y acabados claros, los rebotes pueden aportar entre un $20\ \%$ y más de un $45\ \%$ de la iluminancia total. Por tanto, un cambio realista en el **factor de reflexión o reflectancia ($\rho$)** altera drásticamente los resultados del cálculo fotométrico. Además, no basta el valor de $\rho$: superficies pulidas como mármol abrillantado, mesas lacadas o acero inoxidable presentan una elevada **reflexión especular** (baja rugosidad), capaz de provocar deslumbramiento indirecto molesto sobre pantallas aunque la iluminancia media sea correcta.

#### Conceptos clave
- **Factor de reflexión o reflectancia ($\rho$):** Fracción del flujo luminoso incidente que una superficie devuelve al espacio (expresada de $0,00$ a $1,00$ o en $\%$); depende del color y acabado superficial real.
- **Rangos orientativos de reflectancia en interiores:** Valores recomendados en guías técnicas y normas de referencia (p. ej., techos claros $0,70\text{–}0,90$, paredes $0,50\text{–}0,80$, suelos $0,20\text{–}0,40$ como referencia ilustrativa tipo UNE-EN 12464-1, **sujeto a verificación según normativa vigente y acabado real especificado por arquitectura**).
- **Reflexión difusa vs. reflexión especular:** Una pared mate dispersa la luz en todas direcciones (ley de Lambert), mientras una pizarra brillante o suelo pulido refleja la imagen de la luminaria en un ángulo definido (*coating* / brillo).
- **Índice del local ($K$) y sensibilidad a $\rho$:** En pasillos estrechos o habitaciones pequeñas y altas, el peso de las reflexiones de pared es enorme; en grandes naves abiertas y muy bajas, domina el flujo directo, aunque un techo oscuro visto reduce igualmente el aporte indirecto.

#### Definiciones necesarias
- **Reflectancia ($\rho$):** Cociente adimensional entre el flujo luminoso reflejado ($\Phi_r$) y el flujo luminoso incidente ($\Phi_i$) sobre una superficie ($\rho = \Phi_r / \Phi_i$).
- **Grado de reflexión especular:** Proporción de luz reflejada siguiendo la ley de reflexión especular (ángulo de incidencia igual al de reflexión) frente a la difusión uniforme, determinante para evaluar brillos parásitos.
- **Interreflexión múltiple:** Fenómeno físico mediante el cual la luz emitida por una fuente rebota repetidamente entre las superficies del local hasta ser absorbida o salir por aberturas; DIALux la calcula iterativamente mediante motores de radiosidad/trazado.

#### Ejemplo práctico realista
Considérese una oficina técnica de $10,00\ \text{m} \times 8,00\ \text{m}$ ($80\ \text{m}^2$) y $2,80\ \text{m}$ de altura libre equipada con 12 paneles LED empotrados de $36\ \text{W}$ y $3\,600\ \text{lm}$ cada uno. Con los acabados claros estándar (techo acústico blanco $\rho = 0,80$, paredes crema $\rho = 0,60$, moqueta gris medio $\rho = 0,30$), el cálculo arroja aproximadamente $E_m \approx 515\ \text{lx}$ a cota $0,75\ \text{m}$. Si la propiedad decide finalmente dejar las instalaciones vistas con el forjado de hormigón pintado en gris antracita ($\rho_{\text{techo}} = 0,18$), paredes de ladrillo visto oscuro ($\rho_{\text{pared}} = 0,25$) y pavimento industrial continuo oscuro ($\rho_{\text{suelo}} = 0,15$), la componente indirecta se desploma y la iluminancia cae en torno a $385\text{–}410\ \text{lx}$ (un descenso superior al $20\ \%$ con idénticas luminarias). *(Nota: los valores objetivo mínimos deben contrastarse siempre con la normativa nacional y edición vigente aplicables al centro de trabajo).*

#### Errores frecuentes
- Calcular todo el edificio con los materiales predeterminados por defecto de DIALux sin consultar la memoria de calidades y acabados de arquitectura.
- Asignar reflectancias altas a techos técnicos con instalaciones vistas oscuras o a pavimentos de hormigón pulido oscuro/epoxi negro.
- Ignorar la reflexión especular en mesas de vidrio, suelos de terrazo pulido o mamparas satinadas en salas con pantallas de visualización.
- Pensar que ajustar $\rho$ compensa problemas eléctricos o sirve para «forzar» artificialmente un resultado favorable sin correspondencia con la obra real.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué modificar únicamente el color/reflectancia del techo de $\rho = 0,80$ a $\rho = 0,20$ cambia de forma apreciable la iluminancia sobre las mesas aunque las luminarias apunten hacia abajo?
2. ¿Qué diferencia visual y fotométrica existe entre un material con $\rho = 0,70$ mate (difuso) y otro con $\rho = 0,70$ y alta componente especular?
3. ¿En qué tipo de recintos (grandes naves cuadradas vs. despachos altos y estrechos) es más sensible el cálculo fotométrico a la reflectancia de las paredes?

---

### 3.2. Transmisión luminosa en acristalamientos y materiales translúcidos

#### Explicación breve y clara
Los cerramientos acristalados (ventanas exteriores, escaparates comerciales, lucernarios en cubierta, mamparas divisorias de oficina y vitrinas de policarbonato) presentan un comportamiento óptico completamente distinto al de un muro opaco. En DIALux, un vidrio no solo deja entrar la luz natural durante el cálculo diurno: **durante un cálculo artificial nocturno, toda luz que incide sobre una ventana o mampara transparente atraviesa el vidrio en proporción a su factor de transmisión ($\tau$)**, perdiéndose hacia el exterior o pasando al recinto contiguo. Si un alumno modela una fachada acristalada aplicando simplemente una textura azul celeste opaca con $\rho = 0,50$, el software creerá que la ventana refleja la mitad de la luz hacia dentro como una pared pintada de azul, sobreestimando los lux junto a la fachada.

#### Conceptos clave
- **Factor de transmisión ($\tau$):** Porcentaje o fracción de flujo luminoso incidente que atraviesa un material transparente o translúcido (p. ej., $\tau \approx 0,85\text{–}0,90$ en vidrio sencillo claro; $\tau \approx 0,65\text{–}0,78$ en doble acristalamiento estándar o con control solar).
- **Balance óptico de superficie ($\rho + \alpha + \tau = 1$):** Principio de conservación de la energía radiante donde la suma de fracción reflejada ($\rho$), absorbida ($\alpha$) y transmitida ($\tau$) es igual a la unidad.
- **Transparente vs. translúcido:** Un vidrio claro transparente transmite la luz conservando la dirección del rayo (se ve a través de él), mientras que un policarbonato celular o vidrio al ácido difunde la luz transmitida en múltiples direcciones.
- **Interacción entre locales contiguos con mampara:** Al separar dos despachos con una mampara acristalada, el encendido del despacho A aporta luz residual medible al despacho B y reduce la reflexión interna hacia el A.

#### Definiciones necesarias
- **Transmitancia luminosa ($\tau$):** Relación entre el flujo luminoso que atraviesa una superficie acristalada o translúcida y el flujo total incidente sobre ella.
- **Material transparente en DIALux:** Definición óptica que permite el paso directo de la luz según su grado de transmisión y su índice de refracción, dejando escapar flujo en cálculos nocturnos y permitiendo paso solar en cálculos diurnos.
- **Material de control solar / baja emisividad:** Acristalamiento arquitectónico con capas metálicas o tintadas que reducen $\tau$ (por ejemplo, a $0,40\text{–}0,55$) e incrementan ligeramente $\rho$ hacia el lado interior/exterior.

#### Ejemplo práctico realista
En una oficina de $6,00\ \text{m} \times 5,00\ \text{m}$ situada junto a una fachada con un gran ventanal suelo-techo de $6,00\ \text{m} \times 2,70\ \text{m}$ ($16,20\ \text{m}^2$ de vidrio con doble acristalamiento $\tau = 0,72$ y baja reflexión interna $\rho = 0,12$), se realiza el cálculo nocturno. Si por error se deja esa superficie como muro opaco claro ($\rho = 0,70$, $\tau = 0,00$), la banda de mesas a $1,00\ \text{m}$ de la ventana recibe un falso rebote de pared y marca $510\ \text{lx}$. Al asignar el material real de vidrio transparente ($\tau = 0,72$, $\rho = 0,12$), el flujo hacia la ventana escapa a la calle y esa banda desciende a $445\ \text{lx}$, revelando que falta reforzar la fila perimetral o utilizar luminarias asimétricas/cercanas a fachada. *(Nota: verificar siempre las propiedades reales en la ficha del fabricante del acristalamiento del proyecto y contrastar requisitos de iluminancia con la norma vigente).*

#### Errores frecuentes
- Pintar cristales exteriores o mamparas divisorias con un material azul sólido opaco (tipo textura estética) en lugar de un material transparente calibrado.
- Dejar un valor de transmisión irreal ($\tau = 1,00$ como vacío puro) ignorando la absorción real de dobles/triples vidrios con láminas de control solar o suciedad.
- Utilizar carpinterías de ventanas sin marco sólido ni diferencia óptica entre perfil opaco de aluminio oscuro y hoja acristalada.
- Extrapolar resultados de aporte diurno desde escenas nocturnas sin haber asignado la orientación solar y transmitancia correcta del hueco.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué en un cálculo exclusivamente nocturno sin luz solar sigue siendo fundamental asignar correctamente el factor de transmisión ($\tau$) a las ventanas?
2. Si un vidrio doble tiene $\tau = 0,70$ y una reflectancia $\rho = 0,14$, ¿qué porcentaje aproximado de luz queda absorbido por el propio acristalamiento?
3. ¿Qué diferencia existe en DIALux entre modelar una división interior con vidrio transparente frente a vidrio translúcido al ácido?

---

### 3.3. Textura puramente estética frente a calibración fotométrica real (DIALux vs. Twinmotion)

#### Explicación breve y clara
Uno de los mayores malentendidos al combinar software de cálculo con visualización arquitectónica consiste en creer que descargar una textura bonita de internet (una imagen `.jpg`/`.png` de parquet de roble, mármol negro o ladrillo caravista) configura automáticamente sus propiedades físicas en DIALux. Cuando se arrastra una imagen genérica como textura, el software puede asignar una reflectancia automática estimada a partir del brillo medio de los píxeles de la fotografía —que puede variar mucho según si la foto se tomó con flash o en sombra— o mantener un valor genérico incoherente. **En DIALux prima la precisión fotométrica ($\rho$, especularidad, $\tau$); el fotorrealismo estético de catálogo para presentaciones al cliente pertenece principalmente al entorno de Twinmotion (Bloque 5)**, y jamás una textura visual debe engañar el cálculo técnico.

#### Conceptos clave
- **Calibración manual de reflectancia en texturas:** Inspección y ajuste explícito del parámetro numérico de factor de reflexión ($\rho$) tras aplicar una imagen de textura superficial para que represente la muestra física real.
- **Discrepancia entre foto de catálogo y muestra real:** Una fotografía de madera de nogal iluminada artificialmente en estudio puede parecer clara en pantalla y llevar a DIALux a calcular $\rho = 0,55$ cuando la madera barnizada real apenas alcanza $\rho = 0,22$.
- **Catálogos de materiales técnicos vs. librerías estéticas:** Preferencia por materiales medidos o calibrados con valores conservadores documentados en lugar de texturas decorativas arbitrarias.
- **Frontera DIALux vs. Twinmotion:** DIALux calcula distribución energética y fotométrica en lux y candelas; Twinmotion interpreta materiales PBR (*Physically Based Rendering*) orientados a comunicación visual realista para cliente, sin validar normas de iluminación.

#### Definiciones necesarias
- **Textura estética (mapa difuso RGB):** Imagen bidimensional repetible (*seamless*) aplicada sobre una cara 3D para imitar visualmente la veta, junta o grano de un acabado constructivo.
- **Material fotométricamente calibrado:** Material cuya reflectancia, especularidad y transmisión han sido introducidas o verificadas con datos físicos reales (medidos o procedentes de ficha técnica/norma de referencia), independientemente de la nitidez de su textura en pantalla.
- **Valor conservador de cálculo:** Estimación prudente del factor de reflexión (habitualmente en el límite inferior razonable del rango esperado del acabado) para asegurar que el diseño cumpla incluso si el mobiliario o la pintura envejecen o son algo más oscuros que lo previsto.

#### Ejemplo práctico realista
Para una sala de juntas de dirección con panelado de madera decorativa en paredes, un proyectista descarga una textura JPG de «roble natural» encontrada en un repositorio web gratuito. Sin comprobar el panel de propiedades del material en DIALux, aplica la imagen y observa que la foto está sobreexpuesta, por lo que el software estima automáticamente $\rho = 0,64$, generando un cálculo de $E_m = 520\ \text{lx}$. Al contrastar con la muestra física real del interiorista (roble teñido medio-oscuro con acabado mate), el catálogo técnico indica una reflectancia real aproximada entre $0,20$ y $0,28$. Al fijar manualmente $\rho = 0,25$ manteniendo la textura solo como referencia visual, la iluminancia real baja a $428\ \text{lx}$, obligando a rediseñar la línea perimetral para cumplir el nivel requerido. *(Nota: verificar valores objetivo según reglamento y edición aplicable).*

#### Errores frecuentes
- Arrastrar imágenes descargadas de internet sobre paredes y techos sin verificar qué valor numérico de $\rho$ ha asignado DIALux en el panel de propiedades del material.
- Invertir horas ajustando relieves visuales, reflejos artísticos o texturas de alta resolución en DIALux ralentizando el cálculo, cuando esa labor visual pertenece a Twinmotion (Bloque 5).
- Utilizar colores blanco puro ($\rho = 0,95\text{–}1,00$) irreales en techos y paredes que nunca existen en edificios reales tras pintar y envejecer.
- Confiar en valores de reflectancia sugeridos por un asistente de IA sin contrastarlos con tablas técnicas fiables o fichas del fabricante de pintura/revestimiento.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué aplicar una fotografía JPG descargada sin editar su parámetro $\rho$ puede falsear gravemente los lux calculados en un local?
2. ¿Qué riesgo conlleva usar valores ideales tipo $\rho = 0,95$ en paredes recién pintadas al realizar un estudio de iluminación para un edificio con uso continuo?
3. ¿Cuál es la diferencia fundamental de propósito entre configurar materiales en DIALux y ajustar acabados PBR en Twinmotion?

---

### 3.4. Creación de mobiliario, cerramientos interiores y obstáculos que proyectan sombra real

#### Explicación breve y clara
Un edificio real nunca está completamente vacío durante su operación. Estanterías de almacén de $5,00\ \text{m}$, máquinas CNC, biombos separadores entre puestos de trabajo, pilares exentos, vigas descolgadas de canto y armarios altos interceptan la trayectoria directa de las luminarias y generan **sombras proyectadas reales** sobre planos de trabajo y recorridos peatonales. En DIALux, el usuario debe modelar los **volúmenes críticos que afectan a la distribución de luz** (objetos de escala estructural o mobiliario voluminoso con su reflectancia propia), evitando simultáneamente importar cientos de modelos 3D hiperdetallados (como teclados, tazas o sillas con miles de polígonos) que colapsan el cálculo sin aportar precisión fotométrica.

#### Conceptos clave
- **Obstáculos fotométricos críticos:** Elementos opacos de gran volumen o situados cerca de luminarias/tareas (racks de almacenaje, mamparas de $1,60\ \text{m}$, conductos vistos de gran sección, vigas de cuelgue, pilares).
- **Simplificación geométrica eficiente (*Low-Poly* funcional):** Sustitución de maquinaria compleja o mobiliario detallado por prismas o envolventes simples con dimensiones exactas y reflectancia calibrada.
- **Sombras duras vs. sombras suaves:** Relación entre la distancia luminaria-obstáculo, el tamaño de la superficie emisora de la luminaria y la degradación de la uniformidad $U_0$ bajo el obstáculo.
- **Objetos excluidos vs. objetos incluidos en cálculo:** Opción de determinar qué mobiliario interactúa con la luz y cuál actúa meramente como referencia visual o debe descontarse de la superficie de suelo sin bloquear el cálculo de forma absurda.

#### Definiciones necesarias
- **Sombra proyectada:** Región geométrica donde la radiación luminosa directa procedente de una o varias luminarias queda total o parcialmente interceptada por un cuerpo sólido opaco situado en la trayectoria óptica.
- **Carga poligonal (malla 3D):** Número total de triángulos o caras que componen los objetos importados (como archivos `.3ds`/`.sat`/`.obj` o mobiliario de catálogo); un exceso injustificado dispara exponencialmente el tiempo de simulación.
- **Viga de cuelgue / obstáculo aéreo:** Elemento estructural o de instalaciones situado por debajo de la cota del techo o entre luminarias que genera zonas de sombra en el pavimento y altera la distribución interreflejada.

#### Ejemplo práctico realista
En una nave logística de $24,00\ \text{m} \times 18,00\ \text{m}$ y altura bajo cercha de $8,00\ \text{m}$, un proyectista calcula el alumbrado con la nave completamente diáfana obteniendo $E_m = 210\ \text{lx}$ y una uniformidad $U_0 = 0,62$ con 16 campanas LED distribuidas en cuadrícula regular de $6,00\ \text{m} \times 4,50\ \text{m}$. Sin embargo, en la planta operarán 4 líneas dobles de estanterías de paletización de $5,50\ \text{m}$ de alto dejando pasillos de trabajo de $2,80\ \text{m}$ de ancho. Al modelar las estanterías como bloques simplificados (con $\rho = 0,30$) exactamente según el plano de implantación, 6 campanas quedan parcialmente encima de la parte superior de los palés en vez de centradas en el pasillo: la iluminancia vertical en las estanterías bajas cae por debajo de $50\ \text{lx}$ y la uniformidad del pasillo desciende a $U_0 = 0,19$. Reordenando las luminarias en pasillos con ópticas asimétricas/estrechas de pasillo (*aisle optics*), se corrige el problema antes de tender una sola bandeja eléctrica. *(Nota: verificar niveles mínimos horizontales y verticales en pasillos de almacén según norma aplicable vigente).*

#### Errores frecuentes
- Calcular naves industriales, almacenes, archivos o bibliotecas como espacios totalmente vacíos omitiendo estanterías y máquinas altas.
- Importar objetos 3D descargados con cientos de miles de polígonos (por ejemplo, una carretilla elevadora o sillón hiperdetallado) bloqueando el cálculo de radiosidad durante horas.
- Colocar conductos de climatización o luminarias suspendidas sin comprobar que las vigas descolgadas de hormigón interceptan el haz luminoso.
- Olvidar asignar reflectancias realistas también al mobiliario (una mesa negra mate $\rho = 0,08$ frente a una mesa blanca $\rho = 0,75$ cambia radicalmente el confort visual y el contraste).

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué un modelo de almacén calculado «en vacío» suele fallar estrepitosamente en obra cuando se instalan las estanterías?
2. ¿Qué criterio técnico permite decidir qué mobiliario o equipo debe modelarse con prismas simples y qué detalles deben omitirse en DIALux?
3. ¿Cómo influye la colocación de un conducto de ventilación rectangular de $0,80\ \text{m}$ de ancho suspendido justo debajo de una fila de luminarias?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** combina experimentación comparativa en tiempo real (viendo el salto cuantitativo de lux al cambiar $\rho$, $\tau$ y obstáculos), modelado guiado sobre el archivo del Tema 2 y resolución de un caso técnico realista.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
| :--- | :--- | :--- | :--- |
| **1. Apertura y activación** | 00:00 – 00:25 (25 min) | Realiza la evaluación diagnóstica inicial y lanza la **Actividad 1 (Activación)**: proyecta dos escenas visualmente parecidas en pantalla 3D pero con diferencias de más de $150\ \text{lx}$ por materiales y sombras ocultas. | Compara ambas escenas en parejas y formula hipótesis sobre qué propiedades invisibles a simple vista explican la caída de iluminancia y uniformidad. |
| **2. Microexposición: Óptica de superficies y vidrios (3.1 y 3.2)** | 00:25 – 00:55 (30 min) | Explica reflectancia ($\rho$), componente especular, balance $\rho+\alpha+\tau=1$ y comportamiento nocturno/diurno de ventanas y mamparas con ejemplos numéricos directos. | Registra los rangos orientativos de reflectancia en su ficha de trabajo y calcula qué fracción de flujo escapa o se absorbe en distintos tipos de vidrio. |
| **3. Microexposición: Texturas vs. calibración y obstáculos (3.3 y 3.4)** | 00:55 – 01:25 (30 min) | Demuestra cómo importar o editar una textura calibrando manualmente $\rho$ (diferenciándolo de Twinmotion) y cómo modelar mobiliario/estanterías *low-poly* para simular sombras reales. | Observa el impacto de introducir una estantería o mampara sobre una rejilla de ensayo y distingue objetos críticos de detalles superfluos. |
| **4. Práctica guiada: Actividad 2 (Aplicación técnica)** | 01:25 – 02:15 (50 min) | Lanza la **Actividad 2** sobre el archivo `B2_T02_Cascaron.evo` del Tema 2, supervisa la asignación de materiales calibrados, vidrios y mobiliario clave, y contrasta las mediciones en vivo. | Asigna reflectancias reales a suelos, paredes y falsos techos, configura vidrios transparentes con $\tau$ real, añade mesas/armarios/pilares y registra la variación de luz de una luminaria de prueba. |
| *Descanso técnico* | 02:15 – 02:30 (15 min) | Pausa activa y verificación de dudas sobre la biblioteca de materiales de DIALux. | Descanso y guardado incremental de versión `_T03.evo`. |
| **5. Resolución del caso práctico** | 02:30 – 03:10 (40 min) | Presenta el caso **LogiTech Navarra (Pamplona)** con los planos de racks, acabados industriales oscuros y un cálculo previo erróneo realizado en nave vacía y suelo blanco. | En equipos de 3, audita el modelo defectuoso, reemplaza texturas irreales por acabados calibrados, modela las estanterías y cuantifica el déficit lumínico en los pasillos de *picking*. |
| **6. Puesta en común y debate técnico** | 03:10 – 03:25 (15 min) | Modera la exposición de resultados comparados (antes/después de reflectancias y sombras) y consolida la regla de oro entre DIALux y Twinmotion. | Expone las caídas de $E_m$ y $U_0$ registradas y propone ajustes de acabados o reubicación de puntos de luz antes de pasar a la selección avanzada de luminarias (Tema 4). |
| **7. Transferencia a proyecto real (Actividad 3)** | 03:25 – 03:45 (20 min) | Guía la **Actividad 3**, entregando la plantilla de *Matriz de Materiales y Obstáculos Críticos* para el proyecto integrador de cada alumno. | Define la tabla de acabados constructivos (techos, paredes, suelos, vidrios) y obstáculos físicos reales de su proyecto integrador, documentando las fuentes de datos. |
| **8. Evaluación sumativa y cierre** | 03:45 – 04:00 (15 min) | Aplica el cuestionario sumativo final, recoge los entregables en el campus, dinamiza la autoevaluación y enlaza con el **Tema 4 (Catálogo de luminarias .ldt/.ies)**. | Responde el test de cierre y la autoevaluación; guarda su modelo `.evo` con materiales y obstáculos calibrados para introducir luminarias reales en el Tema 4. |

*Suma verificada: 25 + 30 + 30 + 50 + 15 + 40 + 15 + 20 + 15 = **240 minutos (4 horas)**.*

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «La sala camaleónica: ¿por qué desapareció la luz?»
- **Nombre:** La sala camaleónica: detección visual de fallos ópticos ocultos.
- **Objetivo:** Comprobar de forma intuitiva que dos salas con idéntica geometría y las mismas luminarias pueden ofrecer resultados fotométricos opuestos si cambian sus materiales y obstáculos.
- **Instrucciones para el alumnado:**
  1. Observad las dos vistas de resultados proyectadas de una misma oficina de $60\ \text{m}^2$ equipada con 8 luminarias idénticas: en la Escena 1 la mesa central recibe $510\ \text{lx}$ ($U_0 = 0,68$); en la Escena 2, manteniendo las 8 luminarias, el valor cae a $335\ \text{lx}$ ($U_0 = 0,29$).
  2. Enumerad en parejas durante 6 minutos al menos 3 causas físicas posibles dentro del modelado del entorno (sin cambiar potencia ni posición de luminarias) que justifiquen esa caída simultánea de iluminancia media y uniformidad.
- **Materiales necesarios:** Diapositiva comparativa de ambas escenas (capturas 3D y tabla resumen de valores) y ficha de registro.
- **Tiempo estimado:** 12 minutos (en la Fase 1).
- **Rol del formador:** Recoger todas las hipótesis en pizarra y revelar progresivamente la causa real (techo pintado oscuro $\rho = 0,18$, muro cortina configurado con transmisión real $\tau = 0,75$ y mampara divisoria alta de $1,80\ \text{m}$ entre puestos).
- **Producto o entregable esperado:** Lista clasificada de los 3 factores del entorno que alteran directamente un estudio lumínico ($\rho$, $\tau$ y sombras de obstáculos).
- **Criterios de éxito:** El alumnado identifica al menos dos variaciones ópticas de superficies y una obstrucción física como causantes reales de la pérdida.

### Actividad 2 (Aplicación técnica): «Calibración óptica y prueba de sombras sobre el cascarón del Tema 2»
- **Nombre:** Calibración óptica de materiales, acristalamientos y mobiliario en DIALux.
- **Objetivo:** Aplicar reflectancias calibradas, vidrios transparentes y mobiliario simplificado sobre el modelo del Tema 2, midiendo cuantitativamente su efecto con una luminaria genérica de ensayo.
- **Instrucciones para el alumnado:**
  1. Abrid vuestro archivo `B2_T02_Cascaron_NombreApellido.evo` y guardadlo como `B2_T03_Materiales_NombreApellido.evo`.
  2. Aplicad en `P00_E03_DespachoTecnico` los siguientes materiales de ensayo **calibrando numéricamente sus propiedades** en el panel de material:
     - Falso techo acústico blanco mate: $\rho = 0,80$, reflexión especular baja ($0\text{–}5\ \%$).
     - Paredes pintadas gris claro satinado: $\rho = 0,58$, reflexión especular baja.
     - Suelo técnico vinílico gris oscuro: $\rho = 0,22$.
     - Ventanas exteriores: material vidrio claro transparente con transmisión $\tau = 0,75$ y $\rho = 0,12$ (comprobad que en 3D se ve a través del cristal).
  3. Insertad 1 luminaria genérica de prueba (suministrada en la carpeta de práctica) centrada en el techo y anotad la iluminancia media obtenida en el plano de utilidad.
  4. Ahora modelad mediante cubos/mobiliario básico: 2 mesas de trabajo ($1,60\ \text{m} \times 0,80\ \text{m} \times 0,75\ \text{m}$, $\rho = 0,45$), 1 armario archivador alto ($2,00\ \text{m} \times 0,50\ \text{m} \times 2,10\ \text{m}$, $\rho = 0,35$) y 1 viga descolgada junto a la ventana ($0,40\ \text{m}$ de descuelgue); volved a simular y cambiad finalmente techo y paredes a hormigón oscuro ($\rho = 0,20$) en una variante comparativa rápida.
  5. Registrad en una mini-tabla comparativa los valores de $E_m$ y $U_0$ en las 3 pruebas: (A) acabado claro sin obstáculos, (B) acabado claro con obstáculos, (C) acabado oscuro con obstáculos.
- **Materiales necesarios:** Archivo `.evo` del Tema 2, luminaria de ensayo facilitada en clase y ficha comparativa.
- **Tiempo estimado:** 50 minutos (Fase 4).
- **Rol del formador:** Guiar los primeros 5 minutos la edición manual de $\rho$ y $\tau$ en una textura, recordar no usar modelos 3D hiperpesados y comprobar que el alumnado compara resultados numéricos reales.
- **Producto o entregable esperado:** Archivo `B2_T03_Materiales_NombreApellido.evo` + tabla con los resultados comparativos de los escenarios A, B y C y captura de la sombra proyectada por el armario alto.
- **Criterios de éxito:** Materiales calibrados fielmente (no valores por defecto sin revisar), ventanas transparentes reales, mobiliario modelado sin sobrecarga poligonal y análisis numérico coherente de la variación entre escenarios.

### Actividad 3 (Transferencia a proyecto real): «Matriz de Materiales y Obstáculos Críticos del Proyecto Integrador»
- **Nombre:** Especificación fotométrica de superficies y obstáculos para el proyecto real.
- **Objetivo:** Elaborar la hoja de especificaciones ópticas de acabados y obstáculos del edificio del proyecto integrador, evitando depender de texturas estéticas no calibradas.
- **Instrucciones para el alumnado:**
  1. Revisad la memoria de calidades o los acabados propuestos para cada local de vuestro proyecto integrador (edificio anonimizado).
  2. Completad la plantilla *«Matriz de Especificación Óptica de Entorno y Obstáculos»* (sección 8.3) indicando: material previsto por arquitectura, reflectancia ($\rho$) conservadora asignada, grado de brillo/especularidad, transmitancia ($\tau$) en vidrios y lista de obstáculos altos a modelar.
  3. Si consultáis a ChatGPT o Claude para buscar rangos orientativos de reflectancia de materiales constructivos comunes (p. ej., microcemento gris o chapa lacada), anotad en la plantilla la fuente real consultada posteriormente para verificar ese rango antes de usarlo en cálculo.
- **Materiales necesarios:** Plantilla técnica de la sección 8.3 y datos arquitectónicos del proyecto integrador.
- **Tiempo estimado:** 20 minutos (Fase 7).
- **Rol del formador:** Revisar que no se asignen reflectancias optimistas irreales ($\rho > 0,85$ generalizadas) y verificar la distinción entre acabados de cálculo en DIALux y futuros ajustes visuales en Twinmotion.
- **Producto o entregable esperado:** Matriz completa de especificaciones ópticas y obstáculos del proyecto integrador.
- **Criterios de éxito:** Todos los acabados clave (techo, paredes, suelo, vidrios, mobiliario) cuentan con $\rho$ o $\tau$ realista, justificación conservadora y lista priorizada de obstáculos que proyectan sombra.

---

## 6. Caso práctico

### Rediseño lumínico en LogiTech Navarra (Pamplona)

#### Contexto empresarial
**LogiTech Navarra S.A.** dispone de una nave de $1\,200\ \text{m}^2$ en un polígono industrial de Pamplona que combina una zona de almacenamiento con estanterías de gran altura ($900\ \text{m}^2$) y un área anexa de *showroom* y laboratorio técnico de demostraciones ($300\ \text{m}^2$). Un instalador anterior entregó un anteproyecto lumínico en DIALux asegurando que toda la nave cumplía sin problemas con 20 luminarias industriales estándar y 8 paneles decorativos, por lo que estaba a punto de cerrar la compra de material y comenzar la instalación eléctrica.

#### Situación o problema
Durante una auditoría previa a obra, la nueva ingeniera responsable detecta que el archivo `.evo` entregado presenta resultados sospechosamente optimistas:
1. Toda la nave fue simulada **completamente vacía**, sin modelar las 6 alineaciones de estanterías metálicas de $4,80\ \text{m}$ de alto ni el puente grúa de viga doble que cruza la zona técnica.
2. El técnico anterior dejó la textura blanca por defecto ($\rho \approx 0,75$) en el suelo de la nave cuando en realidad el pavimento es de **resina epoxi gris pizarra satinado** ($\rho \approx 0,18$, con reflexión especular notable) y el techo es chapa metálica vista gris oscuro ($\rho \approx 0,25$) en lugar de techo blanco.
3. El *showroom* de $300\ \text{m}^2$ tiene un escaparate exterior acristalado de $14,00\ \text{m} \times 3,20\ \text{m}$ hacia el aparcamiento, pero en DIALux fue revestido con una imagen estética de «cristal azul espejo» de tipo opaco ($\tau = 0,00$, $\rho = 0,55$), impidiendo que la luz escape hacia fuera en el cálculo nocturno.
4. En el laboratorio técnico anexo se importó un modelo 3D hiperdetallado de dos robots industriales de $450\,000$ polígonos que hace que cada recálculo tarde 25 minutos, mientras no se modelaron las mesas metálicas de trabajo ni las mamparas divisorias de $1,90\ \text{m}$.

#### Datos disponibles
- **Dimensiones de nave de almacén:** $30,00\ \text{m} \times 30,00\ \text{m}$, altura libre bajo cerchas $6,50\ \text{m}$.
- **Estanterías reales:** 6 módulos lineales de $22,00\ \text{m}$ de largo $\times 1,20\ \text{m}$ de fondo $\times 4,80\ \text{m}$ de alto, dejando 5 pasillos de *picking* de $2,60\ \text{m}$ de ancho cada uno (reflectancia media de cajas/estructura $\rho \approx 0,30$).
- **Acabados reales confirmados en memoria de obra:**
  - Techo chapa perfilada gris oscuro: $\rho = 0,25$.
  - Paredes hormigón prefabricado gris medio: $\rho = 0,40$.
  - Pavimento epoxi gris pizarra satinado: $\rho = 0,18$, reflexión especular alta.
  - Escaparate exterior *showroom* (vidrio laminado con control solar suave): $\tau = 0,68$, $\rho = 0,14$.
- **Resultados del modelo erróneo previo (nave vacía, acabados blancos por defecto, cristal opaco):**
  - Almacén: $E_m = 215\ \text{lx}$, $U_0 = 0,65$.
  - *Showroom*: $E_m = 340\ \text{lx}$, $U_0 = 0,60$.
- *(Nota normativa: los niveles de referencia exigibles en almacén, pasillos y zonas de exposición deberán verificarse siempre según la normativa vigente aplicable en España, p. ej., referencia orientativa UNE-EN 12464-1 y normativa de seguridad en lugares de trabajo, o país del proyecto).*

#### Preguntas de análisis
1. ¿Cuál de los tres fallos (omisión de estanterías, pavimento/techo oscuros o vidrio opaco) penaliza en mayor medida la uniformidad $U_0$ de los pasillos de *picking*, y cuál reduce de forma global las interreflexiones del recinto?
2. ¿Qué problema práctico adicional introduce la resina epoxi gris pizarra satinada en el confort visual de los operarios de carretilla y en la lectura de códigos de barras?
3. ¿Qué decisión técnica de modelado debe tomarse con los dos robots de $450\,000$ polígonos en el laboratorio anexo?
4. ¿Por qué una fotografía bonita renderizada del *showroom* (o una escena vista en Twinmotion) jamás podría haber alertado sobre estos cuatro fallos de cálculo?

#### Tarea a realizar
En equipos de 3 personas (40 minutos), usando el archivo base facilitado `LogiTech_Auditoria_Base.evo`:
1. Corregid todos los materiales de envolvente según los datos reales confirmados (techo, paredes, pavimento epoxi con su especularidad y vidrio transparente del *showroom* con $\tau = 0,68$).
2. Sustituid los objetos complejos superfluos por volúmenes simples realistas: modelad las 6 líneas de estanterías de $4,80\ \text{m}$, las mesas y mamparas del laboratorio, y envolventes prismáticas simples para los robots.
3. Ejecutad la simulación comparativa manteniendo las luminarias actuales, registrad los nuevos valores de $E_m$ y $U_0$ en los pasillos de *picking* y en el *showroom*, y redactad un **Dictamen técnico de no conformidad del anteproyecto previo** con recomendaciones constructivas o de redistribución de puntos de luz (sin recalcular aún catálogos nuevos, que se abordarán en el Tema 4).

#### Posibles soluciones o criterios de análisis
- **Impacto cuantificado al corregir entorno:** Al sustituir el suelo blanco por epoxi $\rho = 0,18$ y el techo a $\rho = 0,25$, la componente indirecta cae bruscamente, reduciendo la iluminancia global en torno a un $20\text{–}30\ \%$. Pero el colapso crítico ocurre al insertar las estanterías de $4,80\ \text{m}$: las luminarias colocadas en cuadrícula indiferenciada sobre el almacén quedan interceptadas en varios pasillos, haciendo caer $E_{\min}$ y desplomando la uniformidad $U_0$ por debajo de $0,25$ en zonas de sombra profunda entre racks.
- **Escaparate del *showroom*:** Al pasar de textura opaca a vidrio transparente ($\tau = 0,68$, $\rho = 0,14$), la franja cercana al ventanal pierde el falso rebote de pared, bajando la iluminancia de la zona perimetral en aproximadamente un $15\text{–}20\ \%$.
- **Optimización geométrica:** Reemplazar los modelos de $450\,000$ polígonos por prismas simples con las dimensiones de gálibo reales de cada célula robotizada ($\rho = 0,35$) reduce el tiempo de simulación de 25 minutos a menos de 20 segundos manteniendo la fidelidad de proyección de sombra.
- **Recomendación hacia la siguiente fase (Tema 4):** Antes de comprar material ni dimensionar circuitos en Revit MEP, se recomienda aclarar si puede pintarse el techo de chapa en color claro (elevando $\rho$ de $0,25$ a $0,70$ para ganar eficiencia energética sin aumentar consumo eléctrico) y sustituir la cuadrícula genérica de campanas por luminarias con óptica específica de pasillo centradas exclusivamente sobre los 5 corredores de $2,60\ \text{m}$.

#### Preguntas de reflexión final
1. ¿Cuánta potencia eléctrica innecesaria (o cuántas quejas operativas tras la puesta en marcha) se evita si el proyectista propone a la propiedad pintar el techo industrial de blanco antes que compensar un techo oscuro instalando un $25\ \%$ más de luminarias?
2. ¿Cómo justificarías ante un cliente que un modelo 3D fotorrealista puede ocultarle deficiencias graves de sombra y deslumbramiento especular que solo revela el cálculo calibrado en DIALux?

---

## 7. Evaluación

### 7.1. Evaluación diagnóstica
Cuestionario breve inicial de 5 preguntas (5 min):
1. ¿Qué magnitud óptica mide el porcentaje de luz que devuelve una superficie al incidir sobre ella?
2. Entre un techo pintado de blanco mate y un techo de hormigón visto oscuro, ¿cuál aporta mayor componente luminosa indirecta al plano de trabajo?
3. Si asignas una fotografía JPG de madera oscura sin revisar propiedades en DIALux, ¿puedes confiar automáticamente en su resultado de iluminancia?
4. En un cálculo nocturno sin luz solar, ¿tiene algún impacto que una ventana sea transparente o sea un muro opaco azul?
5. ¿Qué le ocurre a la uniformidad $U_0$ en un almacén si las estanterías bloquean la trayectoria directa de las luminarias?

### 7.2. Evaluación formativa
Observación directa y revisión en vivo durante las Actividades 1 y 2 y el Caso práctico:
- Verifica manualmente los valores numéricos de $\rho$, especularidad y $\tau$ en el panel de materiales tras aplicar cualquier color o textura.
- Configura los vanos de vidrio con transmisión realista en lugar de texturas opacas.
- Simplifica obstáculos complejos a envolventes geométricas ligeras sin sacrificar su volumen de sombra real.

### 7.3. Evaluación sumativa
Evaluación ponderada de evidencias al finalizar la sesión:
1. **Archivo `.evo` de la Actividad 2 + resolución técnica y dictamen del Caso *LogiTech Navarra* (65 %):** Valorado con la rúbrica de la sección 7.4.
2. **Matriz de Especificación Óptica del proyecto propio (Actividad 3) + test final de 5 preguntas (35 %):** Evalúa dominio de propiedades ópticas, criterio de simplificación de obstáculos y separación de DIALux frente a Twinmotion.

### 7.4. Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
| :--- | :--- | :--- | :--- | :--- |
| **Calibración de reflectancias ($\rho$) y especularidad** | Mantiene valores por defecto del software o usa texturas descargadas sin verificar ni editar parámetros ópticos. | Ajusta manualmente el valor de $\rho$ en techos o suelos, pero omite paredes/mobiliario o ignora la reflexión especular en superficies brillantes. | Calibra con criterio realista $\rho$ y grado de especularidad en techo, paredes, suelos y mobiliario basándose en acabados reales. | Aplica calibración conservadora documentada, cuantifica la sensibilidad del aporte indirecto y propone mejoras pasivas de acabados para reducir potencia instalada. |
| **Configuración óptica de acristalamientos ($\tau$)** | Modela ventanas y mamparas usando colores opacos azules/grises ($\tau = 0$). | Configura materiales transparentes básicos, pero con transmisión irreal ($100\ \%$ o sin distinguir vidrios dobles/control solar). | Configura correctamente vidrios transparentes/translúcidos con $\tau$ y $\rho$ realistas diferenciando marcos opacos y hojas. | Evalúa con rigor la pérdida de flujo nocturna en grandes fachadas y la transferencia lumínica entre locales con mampara divisoria. |
| **Modelado de mobiliario y obstáculos reales** | Simula locales completamente vacíos o importa objetos hiperdetallados que bloquean el cálculo. | Añade algunos muebles básicos pero omite obstáculos críticos (estanterías altas, pilares, vigas o maquinaria). | Modela fielmente obstáculos críticos y mobiliario relevante mediante geometría simplificada ligera y con $\rho$ calibrada. | Optimiza el equilibrio precisión/rendimiento: representa cada elemento generador de sombra en posición exacta manteniendo tiempos de cálculo ágiles. |
| **Rigor metodológico (fotométrico vs. estético)** | Confunde acabado estético en pantalla o render con validez técnica de los resultados lumínicos. | Reconoce diferencias entre textura y cálculo, aunque justifica decisiones basándose principalmente en la apariencia visual del 3D. | Diferencia con claridad la calibración fotométrica de DIALux frente al renderizado estético (Twinmotion) y señala la necesidad de verificar normativa. | Demuestra criterio integral de ingeniería: justifica el impacto cuantitativo de materiales y sombras, verifica las fuentes de datos y protege la integridad del cálculo frente a suposiciones no validadas. |

### 7.5. Actividad de autoevaluación
Reflexión escrita de cierre (5 min):
1. *¿Qué diferencia de lux y uniformidad te sorprendió más al comparar la sala vacía y clara frente a la sala con acabados reales y obstáculos en la Actividad 2?*
2. *Si mañana recibes un estudio lumínico externo para revisar, ¿qué tres propiedades de materiales inspeccionarías primero para saber si los resultados son fiables o están «maquillados»?*
3. *Valora del 1 al 5 tu capacidad actual para modelar obstáculos reales sin sobrecargar la malla 3D de DIALux y señala qué tipo de elemento constructivo te genera más dudas.*

---

## 8. Materiales y recursos

### 8.1. Guion estructurado de diapositivas

| Diapositiva | Título | Contenido visual y mensajes clave |
| :--- | :--- | :--- |
| **Slide 1** | **Portada: Materiales, texturas y sombras en DIALux** | Posición en el programa (Bloque 2, Tema 3/5), enlace con el cascarón del Tema 2 y meta del día: precisión física óptica por encima del adorno visual. |
| **Slide 2** | **Actividad 1: La sala camaleónica** | Comparativa lado a lado de dos vistas 3D similares con caída superior a $150\ \text{lx}$ por variación de reflectancia, vidrio y sombra de mampara. |
| **Slide 3** | **Física de la luz en interiores: flujo directo vs. reflejado** | Esquema de interreflexiones entre techo ($\rho$), paredes ($\rho$) y suelo ($\rho$), junto a tabla orientativa de rangos de referencia (con aviso de verificación normativa vigente). |
| **Slide 4** | **Reflexión difusa vs. especular y riesgos en pantallas** | Diagrama vectorial comparando superficie mate (lambertiana) frente a suelo/mesa brillante, explicando brillos parásitos y deslumbramiento indirecto. |
| **Slide 5** | **Acristalamientos y balance $\rho + \alpha + \tau = 1$** | Comparativa en escena nocturna: muro azul opaco ($\tau=0$) vs. doble acristalamiento real ($\tau=0,70$); pérdida de flujo hacia exterior e intercambio entre salas con mampara. |
| **Slide 6** | **Textura estética vs. calibración fotométrica (DIALux vs. Twinmotion)** | Ejemplo visual de fotografía sobreexpuesta que engaña al lector automático de reflectancia, y tabla separando calibración técnica (DIALux) de renderizado PBR (Twinmotion). |
| **Slide 7** | **Obstáculos reales, sombras y eficiencia poligonal** | Comparativa nave vacía vs. nave con estanterías de $4,80\ \text{m}$, y prisma *low-poly* vs. objeto de $450\,000$ polígonos en el Caso *LogiTech Navarra*. |
| **Slide 8** | **Transferencia, matriz óptica y puente al Tema 4** | Reglas de auditoría de materiales, presentación de la *Matriz de Especificación Óptica* y anticipo del Tema 4: inserción de luminarias reales `.ldt`/`.ies` en este entorno calibrado. |

### 8.2. Ficha de trabajo del alumnado
Documento de 2 páginas (PDF editable/impreso) con:
- **Sección A:** Tabla de hipótesis de la Actividad 1 y fórmula de balance óptico $\rho + \alpha + \tau = 1$.
- **Sección B:** Cuadro de registro experimental de los escenarios A, B y C de la Actividad 2 ($\Delta E_m$ y $\Delta U_0$).
- **Sección C:** Hoja de auditoría técnica del caso *LogiTech Navarra* (listado de no conformidades y métricas antes/después).
- **Sección D:** Autoevaluación de cierre.

### 8.3. Plantilla técnica práctica: «Matriz de Especificación Óptica de Entorno y Obstáculos»

```markdown
# MATRIZ DE ESPECIFICACIÓN ÓPTICA DE ENTORNO Y OBSTÁCULOS (DIALUX)
Código de proyecto: ________________________  Archivo .evo: ___________________________
Responsable: _______________________________  Fecha: _________________________________

1. ENVOLVENTES Y ACABADOS POR LOCAL (VALORES CALIBRADOS Y CONSERVADORES)
| Código Local | Superficie | Acabado arquitectónico real | ρ asignada (0-1) | Reflexión especular | Fuente / Muestra verificada |
| :--- | :--- | :--- | :--- | :--- | :--- |
| P00_E01_... | Techo | | | [ ] Baja [ ] Media [ ] Alta | |
| P00_E01_... | Paredes | | | [ ] Baja [ ] Media [ ] Alta | |
| P00_E01_... | Suelo | | | [ ] Baja [ ] Media [ ] Alta | |

2. ACRISTALAMIENTOS Y SUPERFICIES TRANSLÚCIDAS
| Elemento (Ventana / Mampara / Lucernario) | Tipo constructivo | Transmitancia τ | Reflectancia ρ | Tipo difusión |
| :--- | :--- | :--- | :--- | :--- |
| | | | | [ ] Transparente [ ] Translúcido |

3. OBSTÁCULOS Y MOBILIARIO CON PROYECCIÓN DE SOMBRA
| Elemento / Obstáculo | Dimensiones (L x A x H m) | ρ asignada | Geometría usada | Motivo de inclusión en cálculo |
| :--- | :--- | :--- | :--- | :--- |
| | | | [ ] Prisma simple [ ] Objeto librería | |
```

### 8.4. Lecturas y recursos recomendados
*(Nota de validación: el formador y el alumnado deben verificar la vigencia normativa, edición oficial aplicable en su país y versión de software antes de aplicar rangos de referencia o procedimientos concretos en proyectos reales).*
- **Manual oficial de DIALux evo — Herramientas de Materiales, Colores, Texturas y Mobiliario** (DIAL GmbH — verificar la versión exacta instalada en el centro).
- **Norma UNE-EN 12464-1 (ejemplo ilustrativo de referencia para interiores):** Apartados relativos a reflectancias recomendadas de las superficies interiores principales (techo, paredes, plano de trabajo y suelo) y control de brillos; verificar edición vigente aplicable.
- **Publicaciones técnicas de fabricantes de vidrio y revestimientos arquitectónicos (vidrios de control solar, techos acústicos registrables):** Consultar fichas oficiales para extraer valores reales de transmitancia luminosa ($\tau$ o $L_T$) y reflectancia luminosa ($\rho$ o $LR$).

### Glosario de términos clave

| Término | Definición |
| :--- | :--- |
| **Carga poligonal** | Cantidad de polígonos o caras triangulares que forman un objeto 3D; un valor excesivo en mobiliario decorativo ralentiza severamente el motor de cálculo de DIALux. |
| **Componente indirecta** | Fracción de la iluminancia que llega al plano de cálculo tras haber sufrido una o más reflexiones en techos, paredes, suelos o mobiliario del local. |
| **Factor de reflexión ($\rho$)** | Cociente entre el flujo luminoso reflejado por una superficie y el flujo incidente sobre ella; su valor oscila entre $0,00$ (absorción total) y $1,00$ (reflexión total ideal). |
| **Factor de transmisión ($\tau$)** | Proporción del flujo luminoso incidente que logra atravesar un material transparente o translúcido, como un vidrio de ventana o una mampara divisoria. |
| **Material calibrado fotométricamente** | Material definido en DIALux mediante parámetros ópticos verificados ($\rho$, especularidad, $\tau$) coherentes con el acabado real de obra, más allá de su apariencia visual. |
| **Reflexión difusa (lambertiana)** | Dispersión homogénea de la luz reflejada en múltiples direcciones sobre superficies mates, evitando reflejos especulares concentrados. |
| **Reflexión especular** | Reflejo direccional de la luz en superficies pulidas o brillantes donde el ángulo de salida coincide con el de incidencia, pudiendo originar deslumbramiento indirecto. |
| **Sombra proyectada** | Zona de reducción brusca de iluminancia directa producida cuando un cuerpo sólido (pilar, estantería, viga o máquina) intercepta los haces emitidos por las luminarias. |

---

## 9. Adaptaciones

### 9.1. Sesión presencial
- **Recursos tangibles en aula:** Llevar muestras físicas reales de acabados constructivos (una loseta de moqueta oscura, una placa de falso techo acústico blanco perforado, una muestra de hormigón gris y un fragmento de vidrio laminado) para que el alumnado compare visualmente cómo se corresponde el tacto/brillo físico con $\rho$, especularidad y $\tau$ en pantalla.
- **Comparativa en vivo:** Proyectar un gráfico comparativo con los resultados de los escenarios A, B y C de toda la clase para evidenciar la dispersión cuando alguien deja una reflectancia mal calibrada.

### 9.2. Sesión online síncrona
- **Entorno de archivos:** Facilitar por descarga previa el archivo `LogiTech_Auditoria_Base.evo` y la luminaria de prueba de la Actividad 2 para evitar bloqueos de red durante la clase.
- **Trabajo en salas:** En el caso *LogiTech Navarra*, asignar a cada miembro de la sala un rol técnico (1: envolvente y vidrios; 2: modelado simplificado de estanterías y robots; 3: análisis comparativo y dictamen) compartiendo pantalla en turno rotativo.

### 9.3. Sesión asíncrona
- **Píldora demostrativa:** Vídeo corto (10 min) explicando cómo evitar que una imagen JPG altere la reflectancia en DIALux y cómo sustituir un objeto 3D pesado por un volumen simplificado con el mismo gálibo.
- **Entregable asíncrono:** Subida al LMS del archivo `B2_T03_Materiales.evo` con tabla comparativa A/B/C, el modelo corregido de *LogiTech Navarra* y la *Matriz de Especificación Óptica* del proyecto integrador.
- **Debate en foro:** Cada participante analiza qué medida pasiva (color de techo, cambio de pavimento mate, ajuste de mamparas) propondría en el proyecto de un compañero para mejorar $U_0$ sin añadir luminarias.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Da continuidad física al cascarón geométrico levantado en el **Tema 2 (Importación de planos en 2D)** —explicando ahora por qué importaban tanto las cotas de falso techo y los huecos de ventanas— y conecta con el impacto energético de los consumos de alumbrado vistos en el **Bloque 1 (Cálculo de cargas eléctricas)**.
- **Competencias técnicas que desarrolla:** Calibración óptica de modelos fotométricos, modelado tridimensional optimizado de obstáculos reales, diagnóstico crítico de errores ocultos en simulaciones lumínicas y diferenciación profesional entre cálculo fotométrico y renderizado estético.
- **Conexión con el tema anterior y posterior del programa (6 módulos / 50 temas):**
  - *Tema anterior:* **Bloque 2, Tema 2 — Importación de planos en 2D** (posición 2 de 5 del Bloque 2; tema 13 de 50), que suministró los contornos estancos, falsos techos y vanos sobre los que hoy se asignan propiedades físicas reales.
  - *Tema posterior:* **Bloque 2, Tema 4 — Catálogo de luminarias (Eulumdat, IES)** (posición 4 de 5 del Bloque 2; tema 15 de 50). Una vez calibrado el entorno físico con sus reflectancias, vidrios y sombras reales, el siguiente tema introducirá luminarias reales basadas en fotometrías `.ldt` e `.ies` para iluminar eficazmente estos espacios (y posteriormente, en el **Bloque 5**, Twinmotion trabajará la capa visual/estética de estos mismos materiales sin alterar este cálculo técnico).
- **Evidencia de aprendizaje que aporta el alumnado:** Archivo `B2_T03_Materiales.evo` con registro comparativo A/B/C, archivo y dictamen del caso *LogiTech Navarra*, y *Matriz de Especificación Óptica* del proyecto integrador.

---

## Siguientes pasos para el formador

1. **Preparar los archivos de aula:** Generar la luminaria de prueba genérica (`.ldt` de muestra) para la Actividad 2 y comprobar que el archivo `LogiTech_Auditoria_Base.evo` reproduce fielmente los tiempos y resultados contrastados del caso práctico.
2. **Seleccionar 2 texturas «trampa»:** Tener listas dos imágenes JPG de muestra (por ejemplo, una madera clara sobreexpuesta y un cristal azul opaco) para demostrar en directo en la Fase 3 cómo engañan el cálculo si no se calibra manualmente $\rho$ y $\tau$.
3. **Preparar muestras físicas (presencial):** Reunir si es posible 3 o 4 muestras reales de techo acústico, pintura mate/satinada y vidrio para enriquecer la explicación de reflexión difusa vs. especular.
4. **Validar referencias:** Comprobar la accesibilidad de manuales y normativas referenciadas en la sección 8.4 antes de publicarlos en el campus.
5. **Garantizar continuidad hacia el Tema 4:** Confirmar que todo el alumnado guarda correctamente su entorno calibrado `.evo` sin errores geométricos ni sobrecargas poligonales, pues en el Tema 4 se insertará la dotación real de luminarias sobre ese mismo modelo.
