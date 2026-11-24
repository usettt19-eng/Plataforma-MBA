# Tema 3. Generación y optimización de criterios de diseño mediante IA

> **Aviso técnico, normativo y de responsabilidad profesional:** Este módulo forma parte del programa de especialización técnica *IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas* (no es un MBA ni otorga habilitación legal para firmar proyectos o dictámenes eléctricos sin titulación y colegiación competentes). Toda norma o criterio mencionado en los ejemplos (como el REBT español, la serie IEC 60364, el NEC/NFPA 70 o normas de eficiencia y locales de pública concurrencia/sanitarios) tiene valor meramente ilustrativo: **el proyectista debe verificar obligatoriamente el país, la jurisdicción, la compañía distribuidora, el reglamento y la edición vigente aplicables**, contrastando explícitamente cualquier criterio generado por IA antes de adoptarlo.

---

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Tema 3. Generación y optimización de criterios de diseño mediante IA |
| **Bloque y posición dentro del programa** | Bloque 6: Inteligencia artificial aplicada a instalaciones eléctricas — Tema 3 de 11 (Tema 42 de 50 del programa) |
| **Programa formativo** | IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas (Especialización Técnica en Ingeniería Eléctrica, BIM, Iluminación, Renderizado e IA Asistida — 6 módulos / 50 temas) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Haber completado los Temas 1 y 2 del Bloque 6 (flujos seguros con ChatGPT/Claude, anonimización y doble verificación); conocimientos de tipos de sistemas eléctricos, esquemas unifilares y criterios de trazo (Bloque 1), zonificación lumínica (Bloque 2) y canalizaciones en Revit MEP (Bloque 3) |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado formulará y comparará alternativas técnicas de diseño eléctrico y coordinación BIM —arquitecturas de distribución radial o en anillo, criterios de reserva en tableros, sectorización de alumbrado y estrategias de canalización— empleando IA para explorar opciones bajo restricciones explícitas y resolviendo la selección mediante una matriz de decisión ponderada con filtro obligatorio de conformidad normativa verificada. |

---

## 2. Objetivos de aprendizaje

Al finalizar esta sesión de 4 horas, el alumnado será capaz de:

1. **Identificar** los parámetros técnicos de entrada que condicionan los criterios preliminares de diseño de una instalación eléctrica (perfil de cargas, continuidad de servicio, previsión de ampliación, zonificación lumínica y rutas de canalización). *(Nivel de Bloom: Recordar)*
2. **Explicar** las ventajas, inconvenientes y condiciones de contorno de las arquitecturas de distribución radial simple, radial con redundancia/reserva y en anillo, evitando recomendaciones genéricas descontextualizadas generadas por IA. *(Nivel de Bloom: Comprender)*
3. **Aplicar** un guion estructurado de consulta en ChatGPT o Claude sobre datos anonimizados para generar alternativas comparativas de reserva en tableros/cuadros eléctricos, sectorización de alumbrado y trazado de bandejas o tubos. *(Nivel de Bloom: Aplicar)*
4. **Analizar** la coherencia constructiva y de coordinación BIM entre criterios eléctricos, necesidades lumínicas de DIALux y restricciones espaciales de canalizaciones en Revit MEP. *(Nivel de Bloom: Analizar)*
5. **Evaluar** y seleccionar la alternativa óptima mediante una matriz de decisión ponderada con filtro binario previo de cumplimiento reglamentario verificado directamente por el proyectista en la normativa aplicable. *(Nivel de Bloom: Evaluar)*

---

## 3. Contenidos esenciales

### 3.1. Exploración asistida de arquitecturas de distribución: radial, radial selectiva y en anillo

#### Explicación breve y clara
Antes de dibujar un solo conductor en un esquema unifilar o modelar cuadros en Revit MEP, el proyectista debe decidir la **arquitectura de distribución eléctrica**. Una arquitectura **radial simple** (árbol desde un cuadro general hacia subcuadros y receptores) destaca por sencillez, menor coste inicial y facilidad de protección selectiva, pero un fallo en un alimentador deja sin servicio toda la rama aguas abajo. Una **distribución radial con doble alimentación/reserva o barra partida** mejora la continuidad de cargas críticas. Una topología **en anillo** (abierto en operación normal o cerrado según nivel de tensión y protecciones direccionales) aporta rutas alternativas de suministro ante avería o mantenimiento de un tramo, a cambio de mayor complejidad de maniobra, enclavamientos, inversión y coordinación de protecciones.

Los LLMs son excelentes compañeros de análisis preliminar para desplegar en segundos una tabla comparativa entre estas arquitecturas **siempre que el técnico acote las condiciones de contorno**: criticidad del proceso, tipo de edificio, potencia demandada, longitudes de planta, exigencias de suministros de socorro o complementarios y facilidad de mantenimiento. Sin esas restricciones, la IA tiende a recomendar configuraciones en anillo caras e innecesarias para locales sencillos o arquitecturas radiales frágiles para instalaciones críticas.

#### Conceptos clave
- **Topología radial simple:** flujo unidireccional de energía desde la cabecera hacia cuadros secundarios; menor coste y coordinación de protecciones más directa.
- **Topología radial con respaldo/transferencia:** ramales independientes para cargas esenciales frente a cargas generales, habitual cuando el reglamento o el cliente exige continuidad parcial (grupos electrógenos, SAI, doble acometida).
- **Topología en anillo:** recorrido cerrado (normalmente operado en anillo abierto en media o baja tensión mediante seccionamiento) que permite aislar un tramo averiado manteniendo el servicio por el otro extremo.
- **Condiciones de contorno explícitas:** conjunto de datos físicos y operativos (criticidad de paradas, presupuesto orientativo, espacio en patinillos, selectividad) sin los cuales la IA genera respuestas abstractas inutilizables.

#### Definiciones necesarias
- **Continuidad de servicio:** capacidad de una instalación eléctrica para mantener alimentadas las cargas prioritarias ante el fallo de un elemento o durante tareas de mantenimiento programado.
- **Selectividad de protecciones:** coordinación entre dispositivos de protección en serie para que, ante una sobreintensidad o cortocircuito en un punto, actúe únicamente la protección inmediatamente aguas arriba del defecto, dejando operativas las demás ramas.

#### Ejemplo práctico realista
Un proyectista está definiendo la arquitectura preliminar de un edificio de oficinas y laboratorios ligeros de $2.400\text{ m}^2$ (`PROY_LAB_03`). Introduce en Claude los datos anonimizados: potencia simultánea estimada $140\text{ kW}$, 3 plantas, 1 sala técnica de servidores con SAI de $20\text{ kVA}$ y presupuesto ajustado. Solicita comparar radial simple con subcuadros por planta frente a anillo completo en baja tensión. La IA devuelve una comparativa donde señala acertadamente que el anillo completo en BT encarecería embarrados, enclavamientos mecánicos/eléctricos y seccionamiento sin aportar ventaja proporcional frente a una **arquitectura radial por planta con rama dedicada e independiente desde cabecera para el SAI y la sala técnica**. Sin embargo, el LLM añade sin base que «la ley prohíbe anillos en oficinas»: el proyectista marca esa frase como `[ALUCINACIÓN DESCARTADA]` y contrasta directamente las exigencias reales de suministro complementario en el reglamento vigente de su jurisdicción.

#### Errores frecuentes
- Pedir a la IA «¿qué es mejor, radial o anillo?» sin indicar potencia, superficie, presupuesto, número de plantas ni criticidad de las cargas.
- Aceptar una recomendación de anillo cerrado en baja tensión sin verificar el impacto en corrientes de cortocircuito, protecciones direccionales, riesgo de realimentación en mantenimiento y coste de aparamenta.
- Olvidar validar en el reglamento local y normas de compañía suministradora cuándo es obligatorio disponer de suministro de reserva o socorro (locales de pública concurrencia, uso sanitario, etc. según país).
- Confundir una barra partida o doble acometida en cuadro general con un anillo completo de distribución interior.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué cinco condiciones de contorno hay que proporcionar obligatoriamente a un LLM antes de comparar topologías radiales y en anillo?
2. ¿En qué escenarios reales justifica el sobrecoste de aparamenta una arquitectura con respaldo frente a una radial simple?
3. ¿Por qué la decisión sobre suministros complementarios o de socorro nunca puede dejarse a criterio de una sugerencia genérica de la IA?

---

### 3.2. Criterios de reserva en tableros/cuadros eléctricos y escalabilidad de cargas

#### Explicación breve y clara
Un proyecto técnicamente sólido no se diseña al $100\,\%$ exacto de su ocupación del día uno: las ampliaciones de clima, la incorporación futura de puntos de recarga de vehículo eléctrico (VE), la integración de autoconsumo fotovoltaico o los cambios de distribución interior suelen desbordar rápidamente los cuadros eléctricos rígidos. Por ello, los criterios de diseño definen **tres niveles de reserva**:
1. **Reserva de potencia eléctrica:** margen porcentual en transformador/acometida, interruptor general y embarrado (p. ej. $+20\,\%$ o $+25\,\%$ según criterio de proyecto o exigencia mínima normativa aplicable).
2. **Reserva física de envolvente:** espacio libre en módulos DIN o celdas de cuadro para alojar nuevos interruptores sin sustituir el armario.
3. **Reserva equipada vs. reserva cableada/hueco libre:** decidir si se dejan interruptores automáticos instalados listos para conectar o únicamente espacio en carril/embarrado con pletinas preparadas.

La IA resulta muy eficaz para simular escenarios comparativos de crecimiento (*Escenario Base* vs. *Escenario +20 % VE/Clima* vs. *Escenario +35 %*) y proponer una estructura modular ordenada de cuadros para Revit MEP, siempre bajo comprobación independiente del técnico sobre calibre de embarrado, disipación térmica del cuadro y exigencias reglamentarias de reserva mínima vigente.

#### Conceptos clave
- **Reserva eléctrica de cabecera:** holgura de intensidad nominal ($I_n$) en interruptor general, barras y acometida respecto a la demanda simultánea inicial prevista.
- **Reserva física en módulos / espacio:** porcentaje de huecos libres dentro del cuadro eléctrico (habitualmente entre el $15\,\%$ y el $30\,\%$ según criterio de proyecto o norma local a comprobar) para futuras salidas.
- **Escalabilidad por cargas emergentes:** previsión de futuros circuitos de alta simultaneidad como recarga VE, bombas de calor o inversores fotovoltaicos.
- **Impacto térmico en envolventes:** añadir futuras protecciones en cuadros sin espacio libre ni ventilación adecuada eleva la temperatura interna y reduce la capacidad real de los dispositivos de maniobra y cables.

#### Definiciones necesarias
- **Factor de simultaneidad ($K_s$):** coeficiente adimensional ($\le 1$) que relaciona la potencia máxima demandada simultáneamente por un conjunto de receptores con la suma aritmética de sus potencias nominales instaladas.
- **Cuadro secundario sectorizado:** tablero derivado del cuadro general que agrupa los circuitos de una planta, zona funcional o sistema específico para reducir longitudes de cable, limitar caídas de tensión y facilitar ampliaciones locales.

#### Ejemplo práctico realista
Para una nave comercial de $1.500\text{ m}^2$ con demanda inicial estimada de $96\text{ kW}$ ($\approx 106,7\text{ kVA}$ con $\cos\varphi = 0,90$), el proyectista solicita a ChatGPT construir tres escenarios de criterio de reserva para discutir con la propiedad:
- *Escenario 1 (Mínimo):* $10\,\%$ reserva eléctrica ($105,6\text{ kW}$), $15\,\%$ reserva física DIN.
- *Escenario 2 (Recomendado crecimiento medio + futuro VE):* $25\,\%$ reserva eléctrica ($120\text{ kW}$), $25\,\%$ reserva física DIN y canalización de reserva libre desde CGBT a aparcamiento.
- *Escenario 3 (Ampliación intensiva):* $40\,\%$ reserva eléctrica ($134,4\text{ kW}$), $30\,\%$ módulos libres y espacio reservado en cuarto eléctrico para segundo cuadro secundario.
El técnico verifica en hoja de cálculo independiente el salto de corriente en cabecera a $400\text{ V}$ trifásico (de $\approx 154\text{ A}$ en base a $\approx 192\text{ A}$ en Escenario 2), comprueba la disponibilidad de potencia contratada/acometida con la compañía distribuidora y el reglamento de recarga VE vigente aplicable, y presenta la tabla comparada de inversión frente a coste de reforma futura.

#### Errores frecuentes
- Dejar reserva en módulos DIN del cuadro pero dimensionar las barras principales y la acometida al límite exacto de la carga inicial, haciendo imposible aprovechar los huecos libres.
- Aplicar porcentajes de reserva sugeridos por la IA («siempre un 30 %») sin verificar si la normativa del país fija mínimos obligatorios específicos para cuadros o preinstalaciones (por ejemplo, recarga VE o viviendas/garajes).
- Sobredimensionar indiscriminadamente coeficientes de simultaneidad y reservas acumuladas aguas arriba hasta obligar a cambiar innecesariamente de escalón de centro de transformación o acometida.
- Olvidar dejar espacio físico y tubos/bandejas de reserva alrededor de la envolvente en el modelo Revit MEP.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué diferencia existe entre reserva de potencia eléctrica en cabecera, reserva física de espacio en cuadro y reserva de canalización?
2. ¿Por qué es incoherente prever un $25\,\%$ de huecos libres en un subcuadro si su línea alimentadora se ha dimensionado justa sin margen de ampliación?
3. ¿Cómo ayuda un LLM a presentar escenarios de escalabilidad comprensibles para el cliente sin comprometer el rigor técnico?

---

### 3.3. Sectorización de alumbrado y estrategias de canalización coordinada

#### Explicación breve y clara
Los criterios de diseño más rentables en obra nacen cuando **iluminación (DIALux)** y **trazado de canalizaciones (Revit MEP)** se planifican coordinadamente antes de modelar al detalle. Una mala **sectorización de alumbrado** agrupa en el mismo encendido o circuito zonas con distinta disponibilidad de luz natural, horarios diferentes o requisitos de seguridad dispares. Por su parte, una estrategia deficiente de **canalizaciones** mezcla potencia con comunicaciones sin separación electromagnética adecuada, satura bandejas por encima del factor de llenado aconsejable o bloquea el acceso a registros y techos registrables.

El técnico puede usar ChatGPT o Claude con una lista anonimizada de locales (uso, superficie, presencia de fachada acristalada, horario) y sistemas a tender para generar propuestas iniciales de **agrupación de circuitos de iluminación y familias de bandejas/tubos**, detectando conflictos lógicos antes de abrir Revit. Después, el proyectista contrasta la propuesta contra los resultados fotométricos reales en DIALux y las secciones/ocupaciones exigidas por reglamento en el modelo 3D.

#### Conceptos clave
- **Zonificación por luz natural (*Daylight Zoning*):** separación en encendidos o líneas regulables (p. ej. DALI) entre la banda perimetral próxima a ventanas y la zona interior profunda para ahorrar energía y cumplir requisitos normativos de aprovechamiento cuando apliquen.
- **Sectorización operativa y de emergencia:** distribución de luminarias normales en al menos dos circuitos alternos en grandes espacios (para no quedar a oscuras por disparo de un diferencial/automático) y separación estricta de alumbrado de emergencia/seguridad según norma vigente.
- **Separación de canalizaciones (Fuerza vs. Baja Señal/Datos):** distancia mínima o tabique separador entre bandejas de potencia eléctrica y cableado de comunicaciones/control para evitar interferencias electromagnéticas y cumplir reglamento.
- **Factor de ocupación y reserva en canalizaciones:** dejar espacio libre suficiente en tubos y bandejas para disipación térmica, tiro de cables y ampliaciones futuras, validando radios de curvatura y accesibilidad en Revit MEP.

#### Definiciones necesarias
- **Sectorización de alumbrado:** organización lógica y eléctrica de los puntos de luz en circuitos, grupos de encendido y zonas de control (manual, horario, presencia o regulación por aporte natural) atendiendo al uso del edificio, la seguridad y la eficiencia energética.
- **Estrategia de canalización coordinada:** definición previa de tipologías (bandeja perforada, de rejilla, escalera, tubo rígido o flexible), niveles altimétricos en falso techo, separación de servicios y puntos de registro para evitar colisiones con climatización y fontanería en BIM.

#### Ejemplo práctico realista
En un edificio de oficinas con fachada sur totalmente acristalada (`EXP_OF_12`), la exportación resumida de 10 locales indica salas diáfanas de $180\text{ m}^2$ con $6\text{ m}$ de fondo desde ventana. Al pasar la tabla anonimizada a un LLM pidiendo criterios de sectorización y canalización para luego implementarlos en DIALux y Revit, el asistente propone: (1) dividir cada sala diáfana en dos líneas/grupos de control (primera línea a menos de $3\text{ m}$ de fachada con regulación por fotocélula y segunda línea interior), (2) alternar luminarias entre dos circuitos distintos en zonas de paso comunes, y (3) tender una bandeja principal de fuerza de $300 \times 60\text{ mm}$ por pasillo central paralela a bandeja de datos/DALI separada o con tabique metálico. El proyectista valida esa lógica, comprueba en el reglamento de eficiencia energética aplicable la obligatoriedad real de regulación por luz natural y ajusta las cotas reales en Revit para librar un conducto de impulsión de clima de $400\text{ mm}$ de canto.

#### Errores frecuentes
- Conectar toda la iluminación de una gran sala o pasillo largo a un único circuito o interruptor diferencial, dejando la zona completamente a oscuras ante una sola avería.
- Modelar bandejas en Revit MEP al $95\,\%$ de ocupación desde el inicio o sin respetar radios de curvatura ni espacio superior para tender cables en obra.
- Dejar en manos de la IA los porcentajes máximos de llenado de tubo o distancias entre fuerza y datos sin verificar la norma de aplicación local ni especificaciones de telecomunicaciones vigentes.
- Diseñar grupos de encendido en memoria sin reflejarlos después en las escenas/zonas de cálculo de DIALux ni en los circuitos de Revit.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué criterios técnicos justifican separar el alumbrado perimetral junto a fachada respecto al alumbrado interior de una oficina?
2. ¿Por qué es conveniente repartir la iluminación de grandes áreas de paso o trabajo entre más de un circuito eléctrico?
3. ¿Qué decisiones sobre bandejas y tubos conviene acordar antes de empezar a modelar tramos detallados en Revit MEP?

---

### 3.4. Matriz de decisión ponderada y contraste explícito frente al reglamento aplicable

#### Explicación breve y clara
Cuando un asistente de IA propone dos o tres alternativas de diseño (por ejemplo, *Opción A: Radial simple*, *Opción B: Radial con doble barra/reserva*, *Opción C: Anillo*), existe el riesgo de elegir por intuición o por el tono persuasivo del texto. En ingeniería profesional, la selección debe objetivarse mediante una **Matriz de Decisión Ponderada** estructurada en dos etapas estrictas:

1. **Etapa 1 — Filtro binario eliminatorio de cumplimiento normativo (NO ponderable):** antes de asignar un solo punto, el proyectista comprueba directamente contra la **normativa eléctrica y de edificación vigente en el país del proyecto** si cada alternativa cumple los requisitos legales obligatorios (suministros de seguridad/socorro, caída de tensión máxima, protección contra incendios/cables resistentes al fuego, envolventes o sistemas de puesta a tierra). **Una solución que no cumple el reglamento queda automáticamente eliminada (`NO CUMPLE`), aunque sea barata o obtenga alta puntuación en otros apartados.** El cumplimiento legal nunca se compensa con puntos de coste.
2. **Etapa 2 — Ponderación multicriterio entre alternativas conformes:** sobre las alternativas que superan el filtro normativo (`CUMPLE`), se ponderan criterios técnicos y de gestión (continuidad de servicio, escalabilidad/reserva, coordinabilidad BIM en Revit, mantenibilidad y coste de ciclo de vida) sumando exactamente $100\,\%$. La IA puede ayudar a estructurar la matriz y redactar la justificación comparativa, pero **los pesos, las puntuaciones y la verificación normativa corresponden exclusivamente al proyectista**.

#### Conceptos clave
- **Filtro normativo binario (*Pass/Fail Gate*):** validación obligatoria frente al reglamento aplicable por jurisdicción; nunca entra como un porcentaje más que pueda compensarse con ahorro económico.
- **Ponderación normalizada ($100\,\%$):** asignación transparente de pesos a criterios técnicos, constructivos y económicos según la naturaleza del edificio (industrial, sanitario, comercial, residencial).
- **Análisis de sensibilidad:** comprobar si cambiar ligeramente un peso (p. ej. subir continuidad del $30\,\%$ al $40\,\%$) altera la alternativa ganadora o confirma la robustez de la decisión.
- **Trazabilidad de criterio en memoria:** la matriz ponderada completada y revisada constituye una evidencia excelente para justificar en la memoria descriptiva (Tema 4) por qué se eligió una arquitectura frente a otra.

#### Definiciones necesarias
- **Matriz de decisión ponderada:** herramienta multicriterio que evalúa alternativas técnicas viables asignando puntuaciones en una escala definida (p. ej. 1 a 10) multiplicadas por pesos porcentuales previamente acordados que suman $100\,\%$, tras haber superado un filtro eliminatorio de conformidad legal.
- **Contraste reglamentario explícito:** verificación documental realizada por un técnico competente frente al texto oficial vigente del reglamento eléctrico y normas de aplicación del país correspondiente, dejando constancia escrita de qué requisitos exige la norma a la alternativa elegida.

#### Ejemplo práctico realista
Un ingeniero evalúa tres diseños para un edificio administrativo con sala crítica (`PROY_ADM_07`):
- **Alternativa 1 (Radial simple sin respaldo):** falla el filtro binario previo si la normativa local o el pliego obligatorio exige suministro complementario/socorro para determinados servicios de evacuación o cargas críticas $\rightarrow$ **`NO CUMPLE` (Descartada antes de puntuar)**.
- **Alternativa 2 (Radial sectorizada con cuadro de servicios críticos + $25\,\%$ reserva):** supera el filtro (`CUMPLE`). Ponderando Continuidad ($35\,\%$: nota $8$), Escalabilidad ($25\,\%$: nota $9$), Constructibilidad BIM ($20\,\%$: nota $8$) y Coste CAPEX/OPEX ($20\,\%$: nota $7$), obtiene:
  $$\text{Puntuación Alt. 2} = (8 \times 0,35) + (9 \times 0,25) + (8 \times 0,20) + (7 \times 0,20) = 2,80 + 2,25 + 1,60 + 1,40 = \mathbf{8,05}$$
- **Alternativa 3 (Anillo BT completo con doble seccionamiento en cada planta):** supera el filtro (`CUMPLE`). Puntuación: Continuidad ($9 \times 0,35 = 3,15$), Escalabilidad ($8 \times 0,25 = 2,00$), Constructibilidad BIM ($5 \times 0,20 = 1,00$), Coste ($4 \times 0,20 = 0,80$) $\rightarrow$ Total $= \mathbf{6,95}$.
El ingeniero selecciona la Alternativa 2 con respaldo numérico transparente y deja documentadas las comprobaciones legales pendientes en la normativa vigente.

#### Errores frecuentes
- Incluir «Cumplimiento normativo» con un peso del $20\,\%$ dentro de la tabla ponderada, permitiendo en teoría que una opción ilegal gane si saca un $10$ en coste y rapidez.
- Pedir al LLM que «puntúe del 1 al 10 y elija la mejor opción» sin revisar ni justificar técnicamente cada nota en hoja de cálculo independiente.
- Asignar pesos que no suman exactamente $100\,\%$ o cambiar los criterios a mitad de evaluación para forzar la solución favorita.
- No contrastar finalmente la alternativa elegida frente a las exigencias exactas de la compañía suministradora y el reglamento del país del proyecto.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué el cumplimiento reglamentario debe actuar como un filtro binario eliminatorio previo y nunca como un criterio ponderado más con peso porcentual?
2. ¿Cómo se comprueba la robustez del resultado de una matriz de decisión ponderada?
3. ¿Qué papel legítimo puede asumir la IA al construir la matriz y qué parte corresponde indelegablemente al proyectista?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** combina análisis de decisiones de arquitectura eléctrica, diseño asistido de escenarios comparativos y resolución cuantitativa de una matriz multicriterio aplicada a un centro sanitario real simulado.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
|---|---|---|---|
| **1. Apertura y actividad de activación (el dilema radial vs. anillo)** | 00:00 – 00:25 (25 min) | Conecta la verificación tabular del Tema 2 con la fase previa de decisión de diseño; lanza la Actividad 1 sobre tres escenarios de edificios con distinto nivel de criticidad. | Toma postura en encuesta/debate sobre qué topología y nivel de reserva elegiría antes de consultar a la IA y qué datos echaría en falta. |
| **2. Microexposición A: Arquitecturas de distribución y criterios de reserva en cuadros** | 00:25 – 01:05 (40 min) | Explica topologías radial simple, radial con respaldo y en anillo; detalla la triple reserva (eléctrica, física DIN y canalización) y muestra cómo acotar condiciones de contorno en un prompt. | Identifica errores típicos en respuestas genéricas de IA sobre topologías y calcula en borrador el impacto en amperios de un $+25\,\%$ de reserva trifásica. |
| **3. Microexposición B: Sectorización de alumbrado, canalización BIM y matriz ponderada** | 01:05 – 01:40 (35 min) | Presenta criterios coordinados entre DIALux y Revit MEP (luz natural, circuitos alternos, separación fuerza-datos) y explica la estructura en 2 etapas de la Matriz de Decisión Ponderada (Filtro binario + Ponderación). | Analiza un ejemplo de matriz defectuosa donde el cumplimiento legal se había ponderado con un $15\,\%$ y corrige la metodología. |
| **Descanso activo** | 01:40 – 01:55 (15 min) | Pausa recomendada fuera de pantalla; prepara las fichas de datos anonimizadas de la Actividad 2 y del Caso práctico. | Descansa y revisa la plantilla de matriz ponderada en hoja de cálculo. |
| **4. Actividad 2: Generación y contraste normativo de criterios de diseño asistidos por IA** | 01:55 – 02:40 (45 min) | Entrega una ficha de edificio terciario anonimizada; guía la redacción de prompts con restricciones y audita el contraste explícito que realiza cada equipo frente a un extracto de requisitos reglamentarios de ejemplo. | Formula consultas estructuradas para comparar alternativas de reserva, sectorización y canalización; depura las propuestas de la IA marcando qué exige comprobación en normativa vigente. |
| **5. Análisis y resolución del Caso práctico (*Centro Clínico SaludNorte*)** | 02:40 – 03:25 (45 min) | Presenta el caso del centro ambulatorio de $1.800\text{ m}^2$; supervisa las salas mientras construyen y recalculan la matriz ponderada verificada en hoja de cálculo. | Evalúa las 3 alternativas del caso, aplica el filtro normativo binario, calcula la matriz ponderada en Excel/Calc sin confiar en aritmética textual del LLM y justifica la opción ganadora. |
| **6. Actividad 3 y puesta en común (Transferencia a proyecto real)** | 03:25 – 03:45 (20 min) | Modera la exposición breve de 2 matrices resueltas y consolida la plantilla de Criterios de Diseño para aplicarla a proyectos propios y al Tema 4 (memorias descriptivas). | Adapta la plantilla de Matriz de Decisión y Contraste Normativo a un proyecto real o caso integrador propio, definiendo pesos y criterios de sectorización. |
| **7. Síntesis, evaluación sumativa y cierre** | 03:45 – 04:00 (15 min) | Resume las reglas de oro de criterios de diseño asistidos por IA, lanza el cuestionario sumativo final y presenta el enlace directo con el Tema 4 (memorias y pliegos). | Completa el cuestionario sumativo (6 ítems), responde la autoevaluación y guarda su matriz verificada para reutilizarla en la redacción de memorias del Tema 4. |

*Suma total cronometrada:* $25 + 40 + 35 + 15 + 45 + 45 + 20 + 15 = \mathbf{240\text{ minutos (4 horas)}}$.

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Tres edificios, tres criterios iniciales

- **Nombre:** Tres edificios, tres criterios iniciales
- **Objetivo:** Activar criterios técnicos previos sobre arquitectura eléctrica, reserva y sectorización comprobando cómo cambian radicalmente según el uso del edificio.
- **Instrucciones para el alumnado:**
  1. Lee los tres miniperfiles mostrados en pantalla: (A) Local comercial de ropa de $280\text{ m}^2$ en una planta; (B) Nave industrial de mecanizado de $2.500\text{ m}^2$ con posible ampliación de maquinaria en 3 años; (C) Clínica dental y de diagnóstico ambulatorio de $900\text{ m}^2$.
  2. Durante 6 minutos, elige para cada caso de forma intuitiva: topología preliminar (radial simple / radial con respaldo crítico / anillo), porcentaje orientativo de reserva en cuadro general y principal criterio de sectorización de alumbrado.
  3. Responde a la pregunta clave en el chat/mesa: *¿Qué ocurriría si pidieras criterio a ChatGPT o Claude mencionando solo «edificio de $900\text{ m}^2$» sin explicar el uso ni el país?*
- **Materiales necesarios:** Diapositiva con los 3 perfiles, encuesta rápida online o pizarra y ficha de trabajo.
- **Tiempo estimado:** 15 minutos (integrados en la Fase 1).
- **Rol del formador:** Recoger la dispersión de respuestas iniciales, enfatizar por qué el contexto operativo determina toda la ingeniería y abrir el puente hacia la definición de condiciones de contorno.
- **Producto o entregable esperado:** Tabla breve de 3 filas con la apuesta inicial individual del alumnado.
- **Criterios de éxito:** El alumnado identifica al menos 4 variables de contorno imprescindibles (uso/criticidad, ampliación futura, normativa de país/local pública concurrencia y continuidad requerida) antes de consultar a la IA.

### Actividad 2 (Aplicación técnica): Prompt comparativo con contraste reglamentario explícito

- **Nombre:** Prompt comparativo con contraste reglamentario explícito
- **Objetivo:** Utilizar un LLM de forma estructurada para generar alternativas comparativas de reserva en cuadros, sectorización de alumbrado y canalizaciones sobre datos anonimizados, contrastando cada propuesta frente a requisitos normativos verificables.
- **Instrucciones para el alumnado:**
  1. Recibe la ficha anonimizada `Ficha_Edificio_Comercial_1400m2.md` (superficie $1.400\text{ m}^2$, dos plantas, fachada acristalada oeste, carga base $110\text{ kW}$, previsión futura de climatización adicional $+20\,\%$ y 4 puntos de recarga VE).
  2. Redacta un prompt estructurado (siguiendo el formato seguro del Tema 2) solicitando a ChatGPT/Claude comparar dos estrategias: (a) de reserva en cuadros (`CGBT` y subcuadros), (b) de sectorización lumínica para estudiar luego en DIALux, y (c) de separación y trazado de bandejas para modelar en Revit MEP. Exige explícitamente una columna `Requisito normativo a verificar por el proyectista [PAÍS/NORMA]`.
  3. Revisa críticamente la tabla devuelta: subraya en rojo cualquier cifra o exigencia legal que el asistente haya dado por sentada sin fuente y anota en la columna de contraste qué documento reglamentario real abrirías en tu jurisdicción para validarla (p. ej. reglamento BT, normativa de eficiencia lumínica o infraestructura de recarga VE aplicable según país).
- **Materiales necesarios:** Ficha anonimizada del edificio, acceso a asistente IA o paquete de respuestas de referencia y guía de contraste normativo ilustrativo.
- **Tiempo estimado:** 45 minutos (Fase 4: 30 min de diseño y contraste + 15 min de puesta en común por grupos).
- **Rol del formador:** Comprobar que los equipos no copian reglas legales no verificadas y ayudarles a distinguir entre «buena práctica de ingeniería» (p. ej. reserva del $25\,\%$) y «obligación legal mínima exigible en un país concreto».
- **Producto o entregable esperado:** Tabla comparativa anotada con al menos 5 puntos marcados para comprobación normativa directa por el proyectista.
- **Criterios de éxito:** Ninguna afirmación normativa de la IA queda sin etiqueta de verificación; la sectorización lumínica considera luz natural/circuitos alternos y la canalización contempla separación fuerza-datos y reserva de ocupación.

### Actividad 3 (Transferencia a proyecto real): Plantilla de Matriz Ponderada lista para memoria técnica

- **Nombre:** Plantilla de Matriz Ponderada lista para memoria técnica
- **Objetivo:** Construir una hoja de cálculo auditable de Matriz de Decisión Ponderada aplicable a un proyecto real propio (o al proyecto integrador del curso) que conecte directamente las decisiones de diseño con la memoria descriptiva del Tema 4.
- **Instrucciones para el alumnado:**
  1. Abre la **Plantilla 6.3 — Matriz de Decisión Ponderada con Filtro Normativo** (sección 8) en Excel o LibreOffice Calc.
  2. Define un proyecto objetivo anonimizado (p. ej. local terciario, taller, clínica o ampliación industrial) y establece 4 o 5 criterios ponderados que sumen exactamente el $100\,\%$, además del filtro binario previo de cumplimiento reglamentario (`CUMPLE / NO CUMPLE`).
  3. Formula en la hoja de cálculo la multiplicación automática `=SUMAPRODUCTO(...)` (para que la aritmética sea 100 % determinista y nunca dependa del chat de IA) y prepara un cuadro resumen de 6 líneas listo para justificar la solución adoptada en una memoria técnica.
- **Materiales necesarios:** Hoja de cálculo (Excel/Calc) y Plantilla 6.3 editable.
- **Tiempo estimado:** 20 minutos (Fase 6).
- **Rol del formador:** Verificar que el cumplimiento normativo esté fuera de los pesos porcentuales (en el filtro binario inicial), comprobar que los pesos suman $100\,\%$ y revisar las fórmulas de la hoja de cálculo.
- **Producto o entregable esperado:** Archivo de hoja de cálculo `.xlsx`/`.ods` con filtro binario y matriz ponderada automatizada.
- **Criterios de éxito:** Cero cálculos hechos a mano en texto sin fórmula Excel, suma de pesos exacta igual a $100\,\%$ y separación explícita entre cumplimiento reglamentario obligatorio y optimización multicriterio.

---

## 6. Caso práctico

### Caso práctico: Definición de arquitectura eléctrica, reserva y canalización en el *Centro Clínico Ambulatorio SaludNorte*

#### Contexto empresarial
El estudio de ingeniería **ArcoVolt MEP S.L.** ha recibido el encargo de proyectar la instalación eléctrica completa, estudio de iluminación en DIALux y modelado BIM en Revit MEP del **Centro Clínico Ambulatorio SaludNorte** (nombre ficticio a efectos formativos, código anonimizado `EXP_SALUD_08`). Se trata de un edificio de dos plantas con **$1.800\text{ m}^2$** totales que alberga: zona de recepción y administración, 12 consultas médicas, área de diagnóstico por imagen (sala de rayos X y ecografía), una pequeña zona de curas/cirugía menor ambulatoria, pasillos de espera y sala técnica en planta baja.

#### Situación o problema
El cliente solicita «una instalación moderna, ampliable para instalar en 3 años un segundo equipo de diagnóstico y 4 cargadores de vehículo eléctrico en el aparcamiento exterior, con iluminación confortable y fácil mantenimiento, pero sin disparar el presupuesto». Un proyectista consulta a un asistente de IA y recibe tres propuestas de diseño redactadas de forma atractiva, aunque sin cálculos reales verificados ni contraste reglamentario claro:
- **Propuesta 1 (Radial simple estándar):** un único cuadro general y un cuadro secundario por planta sin rama independiente de servicios críticos ni grupo/SAI dedicado, con $+10\,\%$ de reserva en cuadros y todas las luminarias de cada planta en un solo circuito.
- **Propuesta 2 (Radial sectorizada con cuadro de cargas críticas y reserva ampliada):** acometida y CGBT con $+25\,\%$ de reserva de potencia ($\approx 156,25\text{ kW}$ sobre una demanda simultánea inicial de $125\text{ kW}$), subcuadros por planta + cuadro específico de cargas críticas/diagnóstico respaldado por SAI (y previsión de suministro complementario según exija la normativa aplicable), reserva física del $25\,\%$ en módulos DIN, alumbrado sectorizado por uso/fachada con circuitos alternos y doble bandeja separada (fuerza vs. datos/control DALI).
- **Propuesta 3 (Anillo completo BT en planta baja y primera):** distribución en anillo cerrado/seccionable con doble alimentación a cada cuadro de consulta y doble anillo de bandejas perimetrales, $+30\,\%$ de reserva y mayor complejidad de protecciones e inversión.

La dirección técnica pide al equipo validar en hoja de cálculo independiente qué alternativas superan el filtro reglamentario aplicable en el país del proyecto y resolver cuál es la óptima mediante matriz ponderada verificada.

#### Datos disponibles

| Parámetro del proyecto (`EXP_SALUD_08`) | Valor técnico de partida |
|---|---|
| **Superficie y distribución** | $1.800\text{ m}^2$ en 2 plantas (PB: recepción, curas, diagnóstico imagen, sala técnica; P1: administración y 12 consultas) |
| **Demanda simultánea base estimada** | $125\text{ kW}$ ($\approx 139\text{ kVA}$ con $\cos\varphi = 0,90$, $I_b \approx 200,6\text{ A}$ a $400\text{ V}$ trifásico): alumbrado $18\text{ kW}$ + fuerza/clima $72\text{ kW}$ + diagnóstico/equipos críticos $35\text{ kW}$ |
| **Escenario con reserva $+25\,\%$ (Propuesta 2)** | $156,25\text{ kW}$ ($\approx 173,6\text{ kVA}$, $I_b \approx 250,6\text{ A}$ a $400\text{ V}$ trifásico) + espacio físico DIN $+25\,\%$ y previsión de canalización hacia futuros cargadores VE |
| **Exigencia normativa a contrastar (ilustrativa)** | En la jurisdicción de ejemplo, un centro sanitario/pública concurrencia exige verificar suministro de socorro/complementario, circuitos de alumbrado subdivididos, posibles esquemas IT médicos en salas especiales si aplican, y cables de seguridad frente al fuego según edición vigente del reglamento nacional |
| **Restricción BIM y obra** | Falso techo limitado en P1 ($350\text{ mm}$ de pleno libre compartido con conductos de climatización) |
| **Criterios y pesos acordados para la matriz** | Continuidad de servicio y seguridad clínica: **$35\,\%$** · Escalabilidad y reserva en tableros: **$25\,\%$** · Constructibilidad BIM y canalizaciones: **$20\,\%$** · Coste CAPEX/OPEX: **$20\,\%$** *(Total $= 100\,\%$)* |
| **Puntuaciones técnicas revisadas por equipo (escala 1–10)** | **Prop. 1:** $(3;\, 4;\, 8;\, 9)$ · **Prop. 2:** $(8;\, 9;\, 8;\, 7)$ · **Prop. 3:** $(9;\, 8;\, 5;\, 4)$ *(en orden: Continuidad, Escalabilidad, BIM, Coste)* |

#### Preguntas de análisis
1. Al pasar las tres propuestas por el **Filtro Binario de Cumplimiento Normativo**, ¿qué ocurre inmediatamente con la Propuesta 1 antes siquiera de calcular pesos porcentuales?
2. Aplicando cálculo determinista independiente en hoja de cálculo, ¿qué puntuación final obtiene cada una de las alternativas válidas (`CUMPLE`) y cuál resulta seleccionada?
3. Si el cliente decidiera aumentar el peso de *Coste CAPEX/OPEX* al $35\,\%$ reduciendo *Continuidad de servicio* al $25\,\%$ y *Escalabilidad* al $20\,\%$ (manteniendo BIM en $20\,\%$), ¿cambiaría la alternativa ganadora entre Propuesta 2 y Propuesta 3? Compruébalo numéricamente.
4. ¿Qué ajustes concretos de **sectorización de alumbrado** (para llevar a DIALux) y de **canalización coordinada** (para modelar en Revit MEP dentro del pleno de $350\text{ mm}$) deben quedar fijados antes de pasar a la redacción de la memoria descriptiva?

#### Tarea a realizar
En equipos de 3 a 4 personas (30 minutos de cálculo y análisis + 15 minutos de exposición):
1. **Ejecutad el filtro binario normativo** señalando al menos 4 comprobaciones legales obligatorias que el proyectista debe verificar en el reglamento vigente de su país para un edificio sanitario/pública concurrencia (suministro complementario/socorro, salas médicas especiales, alumbrado de emergencia y subdivisión, reacción al fuego de cables y separación de canalizaciones).
2. **Calculad en hoja de cálculo** la Matriz de Decisión Ponderada de las alternativas que superan el filtro, junto con el análisis de sensibilidad propuesto en la Pregunta 3.
3. **Redactad el Cuadro de Criterios de Diseño Aprobados** para `EXP_SALUD_08` (topología, reserva de potencia en kW/kVA y módulos DIN, sectorización lumínica para DIALux y estrategia de bandejas en pleno de $350\text{ mm}$ para Revit MEP).
4. **Definid qué parte de este cuadro** entregará el equipo como entrada verificada al LLM en el Tema 4 para redactar la memoria descriptiva sin inventar datos.

#### Posibles soluciones o criterios de análisis
Una resolución técnica correcta debe recoger:
- **Filtro binario eliminatorio:** la **Propuesta 1 queda eliminada (`NO CUMPLE`)** antes de puntuar, porque carece de subdivisión de circuitos de alumbrado, no contempla respaldo para cargas sanitarias/de evacuación y omite requisitos básicos de seguridad/continuidad propios de uso sanitario y pública concurrencia (a confirmar según el reglamento vigente del país correspondiente). Su puntuación aparente en coste ($9$) es irrelevante al no cumplir requisitos mínimos.
- **Puntuación ponderada determinista (Propuestas válidas):**
  - **Propuesta 2:** $(8 \times 0,35) + (9 \times 0,25) + (8 \times 0,20) + (7 \times 0,20) = 2,80 + 2,25 + 1,60 + 1,40 = \mathbf{8,05}$.
  - **Propuesta 3:** $(9 \times 0,35) + (8 \times 0,25) + (5 \times 0,20) + (4 \times 0,20) = 3,15 + 2,00 + 1,00 + 0,80 = \mathbf{6,95}$.
  - *Nota:* incluso si se calculara la Propuesta 1 de referencia ($3\times 0,35 + 4\times 0,25 + 8\times 0,20 + 9\times 0,20 = 5,45$), pierde tanto en filtro legal como en puntuación.
- **Análisis de sensibilidad (Coste $35\,\%$, Continuidad $25\,\%$, Escalabilidad $20\,\%$, BIM $20\,\%$):**
  - **Propuesta 2:** $(8 \times 0,25) + (9 \times 0,20) + (8 \times 0,20) + (7 \times 0,35) = 2,00 + 1,80 + 1,60 + 2,45 = \mathbf{7,85}$.
  - **Propuesta 3:** $(9 \times 0,25) + (8 \times 0,20) + (5 \times 0,20) + (4 \times 0,35) = 2,25 + 1,60 + 1,00 + 1,40 = \mathbf{6,25}$.
  - La **Propuesta 2** sigue ganando con claridad ($7,85$ frente a $6,25$), demostrando alta robustez técnica y económica.
- **Criterios de coordinación DIALux y Revit:** dividir alumbrado de pasillos/recepción en mínimo dos circuitos alternos normales + alumbrado de emergencia independiente + encendido regulado junto a fachada en consultas/administración; proyectar bandejas de bajo perfil ($50\text{–}60\text{ mm}$ de alto con tapa o tabique separador para fuerza y control/datos) coordinadas en cota fija dentro del pleno de $350\text{ mm}$ dejando margen libre bajo los conductos de clima y reservando un conducto vacío desde `CGBT` hacia exterior para futuros VE.

#### Preguntas de reflexión final
- ¿Qué habría sucedido en el caso de *SaludNorte* si hubiéramos pedido directamente a ChatGPT «elige la mejor opción» sin construir el filtro binario previo ni comprobar las sumas en Excel?
- ¿Qué criterio de tu propio entorno profesional sueles infraestimar o sobreestimar cuando decides una topología eléctrica al inicio de un proyecto?

---

## 7. Evaluación

### Evaluación diagnóstica
- **Instrumento:** Actividad 1 (*Tres edificios, tres criterios iniciales*) durante los primeros 25 minutos.
- **Finalidad:** Comprobar el dominio previo sobre selección de topologías eléctricas y reservas, detectando si el alumnado formula hipótesis acordes al uso del edificio antes de usar IA.

### Evaluación formativa
- **Instrumento:** Supervisión del formador durante la **Actividad 2** (revisión de prompts restrictivos y detección de afirmaciones reglamentarias sin fuente) y durante el **Caso práctico** (*SaludNorte*), verificando fórmulas `SUMAPRODUCTO` en Excel/Calc y correcta aplicación del filtro binario eliminatorio.
- **Retroalimentación:** Corrección en directo de matrices que incluyan el cumplimiento normativo como un peso negociable y revisión de cálculos de potencia y corriente de reserva.

### Evaluación sumativa
Consta de dos componentes evaluables al cierre del tema:
1. **Cuestionario sumativo (6 ítems conceptuales y de análisis de criterios, 10 minutos, 40 % de la nota):** evalúa diferenciación entre arquitecturas radial/anillo, tipos de reserva en tableros, sectorización alumbrado/canalización, uso correcto del filtro normativo binario y verificación de matrices ponderadas.
2. **Entregable práctico del tema (60 % de la nota):** entrega de (a) tabla comparativa con contraste reglamentario (Actividad 2), (b) resolución en hoja de cálculo de la Matriz Ponderada y Cuadro de Criterios del caso *SaludNorte*, y (c) plantilla propia de Matriz Ponderada lista para proyecto real (Actividad 3), evaluado con la siguiente rúbrica.

### Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
|---|---|---|---|---|
| **1. Criterios de distribución y reserva en tableros** | Propone topologías genéricas o porcentajes arbitrarios sin relacionarlos con la demanda, continuidad o escalabilidad física/eléctrica. | Describe diferencias entre radial y anillo, pero omite alinear la reserva de potencia en cabecera con los huecos DIN o futuras cargas. | Define con coherencia topología, reserva eléctrica en kW/kVA/A, reserva física en cuadros y previsión de canalización futura. | Integra además análisis numérico de salto de corriente/aparamenta y prevé reservas espaciales reales en cuarto eléctrico y patinillos BIM. |
| **2. Sectorización de alumbrado y estrategia de canalización** | Agrupa luminarias sin criterio operativo/lumínico o plantea trazados sin separar potencia de datos ni considerar altura de falso techo. | Contempla algunos grupos de encendido o tipos de bandeja, pero sin coordinar criterios entre DIALux y Revit MEP. | Define sectorización por uso, luz natural, circuitos alternos y emergencia, junto con separación y ocupación de bandejas coordinadas en BIM. | Alinea explícitamente la sectorización con escenas de cálculo DIALux, cotas reales de pleno en Revit y facilidad de mantenimiento. |
| **3. Contraste explícito frente al reglamento aplicable** | Da por válidas las citas o reglas de la IA sobre suministros de socorro, cables o reservas sin marcar qué debe comprobarse en norma oficial. | Indica de forma general que «hay que cumplir normativa», pero sin identificar qué exigencias concretas requieren verificación en el país vigente. | Incorpora un filtro binario previo de cumplimiento y enumera los puntos reglamentarios concretos a verificar en la edición aplicable. | Documenta con precisión cada parámetro regulatorio a comprobar (suministro complementario, locales especiales, cables, VE) sin mezclar jurisdicciones. |
| **4. Rigor de la matriz de decisión ponderada** | Pondera el cumplimiento legal como porcentaje compensable, usa pesos que no suman $100\,\%$ o confía los cálculos al texto del chat IA. | Construye una tabla ponderada básica, pero sin filtro eliminatorio separado o sin comprobar sensibilidad de los resultados en hoja de cálculo. | Ejecuta filtro binario previo + matriz con pesos $=100\,\%$ calculada de forma determinista en hoja de cálculo. | Realiza además análisis de sensibilidad, justifica cada puntuación con datos objetivos y vincula el cuadro final como entrada verificada para la memoria. |

### Actividad de autoevaluación
Al cerrar la sesión, cada participante completa una reflexión breve de 3 puntos:
1. *¿He comprobado en mi plantilla de matriz ponderada que ninguna alternativa que incumpla el reglamento pueda resultar ganadora por ser más barata?* (Sí / Revisar)
2. *¿Qué criterio técnico de sectorización lumínica o canalización BIM he incorporado hoy que normalmente dejaba para demasiado tarde en Revit?*
3. *¿Qué datos de mi proyecto integrador debo definir primero antes de pedir a la IA que me ayude a comparar alternativas de diseño?*

---

## 8. Materiales y recursos

### Guion de diapositivas

- **Slide 1 — Portada y posición en el programa:** Tema 3 de 11 del Bloque 6 (Tema 42 de 50), objetivos de aprendizaje y aviso técnico-normativo de verificación por jurisdicción.
- **Slide 2 — Activación: tres edificios, tres criterios iniciales:** Perfiles comparativos (comercio $280\text{ m}^2$, nave $2.500\text{ m}^2$, clínica $900\text{ m}^2$) y preguntas detonadoras sobre condiciones de contorno.
- **Slide 3 — Arquitecturas de distribución (Radial vs. Radial con respaldo vs. Anillo):** Esquemas conceptuales comparativos de continuidad, selectividad, complejidad de protecciones y cuándo aportar restricciones reales al LLM.
- **Slide 4 — Triple reserva en tableros y escalabilidad:** Reserva de potencia en cabecera (kVA/A), reserva física en módulos DIN, reserva de canalización y ejemplo numérico de impacto por futuras cargas (clima/VE/FV).
- **Slide 5 — Sectorización de alumbrado y canalizaciones BIM coordinadas:** Relación directa entre DIALux (*daylight zoning*, circuitos alternos, emergencia) y Revit MEP (altura de pleno, separación fuerza-datos, llenado de bandejas).
- **Slide 6 — Matriz de Decisión Ponderada en 2 etapas:** Regla de oro visual: Etapa 1 Filtro binario (`CUMPLE / NO CUMPLE` normativa vigente) $\rightarrow$ Etapa 2 Ponderación multicriterio ($100\,\%$) calculada en hoja de cálculo determinista.
- **Slide 7 — Caso práctico *Centro Clínico SaludNorte* (`EXP_SALUD_08`):** Datos de partida ($1.800\text{ m}^2$, $125\text{ kW}$, pleno $350\text{ mm}$), las 3 propuestas a auditar y criterios ponderados.
- **Slide 8 — Síntesis y puente al Tema 4:** Cuadro resumen de Criterios de Diseño Verificados y cómo alimentará directamente la redacción controlada de memorias descriptivas y especificaciones técnicas en el Tema 4.

### Ficha de trabajo
Ficha práctica de 2 páginas que recoge:
1. **Formulario de condiciones de contorno de proyecto** (uso, superficie, demanda estimada, criticidad, ampliación prevista a 5 años, restricciones de pleno/patinillos, país/normativa a verificar).
2. **Lista de chequeo de contraste normativo ilustrativo** para distribución, cuadros, alumbrado y canalizaciones.
3. **Guion de prompt comparativo restringido** listo para copiar y adaptar.

### Plantilla técnica práctica
**Plantilla 6.3 — Matriz de Decisión Ponderada con Filtro Normativo Previo (`EXP_SALUD_08` modelo)**

| Criterio / Etapa | Peso / Regla | Alternativa 1 (Radial simple) | Alternativa 2 (Radial sectorizada + respaldo +25 %) | Alternativa 3 (Anillo BT completo) |
|---|---|---|---|---|
| **ETAPA 1 — Filtro Normativo (Verificación en reglamento vigente del país)** | **Binario eliminatorio** (`CUMPLE` / `NO CUMPLE`) | **`NO CUMPLE`** *(sin subdivisión/respaldo sanitario a confirmar)* | **`CUMPLE`** *(sujeto a verificación detalle en proyecto)* | **`CUMPLE`** *(sujeto a verificación protecciones/corte)* |
| **1. Continuidad de servicio y criticidad** | $35\,\%$ | *Eliminada en Etapa 1* | $8$ ($2,80$) | $9$ ($3,15$) |
| **2. Escalabilidad y reserva en tableros** | $25\,\%$ | *Eliminada en Etapa 1* | $9$ ($2,25$) | $8$ ($2,00$) |
| **3. Constructibilidad BIM y canalizaciones** | $20\,\%$ | *Eliminada en Etapa 1* | $8$ ($1,60$) | $5$ ($1,00$) |
| **4. Coste de ciclo de vida (CAPEX / OPEX)** | $20\,\%$ | *Eliminada en Etapa 1* | $7$ ($1,40$) | $4$ ($0,80$) |
| **TOTAL PONDERADO (Fórmula Excel)** | **$100\,\%$** | **NO ELEGIBLE** | **`8,05` (SELECCIONADA)** | **`6,95`** |

### Lecturas y recursos recomendados
> **Advertencia de validación obligatoria:** Toda normativa, guía técnica o referencia bibliográfica debe comprobarse en su **edición vigente**, verificando la jurisdicción aplicable, las instrucciones técnicas particulares de la empresa suministradora y las ordenanzas locales antes de tomar decisiones de diseño definitivo.

- **Normativa técnica de referencia (ejemplos ilustrativos por verificar según país):**
  - *Reglamento Electrotécnico para Baja Tensión (REBT — RD 842/2002 e ITC-BT aplicables, p. ej. locales de pública concurrencia, infraestructura VE, instalaciones interiores)* cuando el proyecto radique en España.
  - Serie *IEC 60364* (criterios de arquitectura, selección e instalación de canalizaciones y locales especiales) o *NFPA 70 / NEC* cuando aplique según jurisdicción.
  - Normativa de iluminación aplicable (p. ej. *UNE-EN 12464-1* y documento de eficiencia energética en edificación vigente en el país del proyecto).
- **Guías técnicas de diseño y BIM:**
  - Guías técnicas de fabricantes reconocidos sobre selectividad de protecciones, diseño de envolventes/reserva térmica en cuadros y bandejas portacables (*validar edición y catálogos vigentes*).
  - Documentación sobre coordinación interdisciplinar MEP en **Autodesk Revit** (gestión de plenos y detección básica de interferencias según versión instalada).

### Glosario de términos clave

| Término | Definición |
|---|---|
| **Arquitectura radial** | Configuración de distribución eléctrica en árbol donde cada subcuadro o carga recibe energía por una única ruta desde un nivel superior de distribución. |
| **Arquitectura en anillo** | Topología que conecta los centros o subcuadros mediante un bucle cerrado físicamente (operado abierto o cerrado según protecciones) para ofrecer doble vía de suministro ante fallos. |
| **Condiciones de contorno** | Conjunto explícito de parámetros técnicos, operativos, espaciales y económicos del proyecto necesarios para que el análisis comparativo con IA tenga sentido técnico real. |
| **Factor de simultaneidad** | Coeficiente menor o igual que $1$ que ajusta la suma de potencias nominales conectadas a la potencia máxima probable que demandará simultáneamente una instalación o cuadro. |
| **Filtro normativo binario** | Validación eliminatoria (`CUMPLE / NO CUMPLE`) frente al reglamento aplicable antes de puntuar alternativas, impidiendo compensar ilegalidades técnicas con menor coste. |
| **Matriz de decisión ponderada** | Método cuantitativo de comparación multicriterio que multiplica la valoración de cada alternativa por pesos porcentuales normalizados al $100\,\%$ en hoja de cálculo auditable. |
| **Reserva física y eléctrica** | Margen planificado tanto en intensidad nominal de cabecera/embarrados como en espacio libre de módulos DIN y ocupación de canalizaciones para futuras ampliaciones. |
| **Sectorización de alumbrado** | División funcional y eléctrica de luminarias en circuitos independientes, líneas regulables por luz natural y zonas de emergencia para optimizar seguridad, mantenimiento y consumo. |

---

## 9. Adaptaciones

### Sesión presencial
- **Debate espacial con plano impreso:** Entregar en la Actividad 2 y en el Caso práctico una planta simplificada impresa del edificio (`EXP_SALUD_08`) para que cada equipo marque con rotuladores de colores las zonas de alumbrado por fachada, la sala crítica y el corredor principal de bandejas antes de construir su matriz.
- **Puesta en común en hoja proyectada:** Construir en directo en el ordenador del aula la fórmula `SUMAPRODUCTO` y cambiar los pesos en tiempo real para visualizar el análisis de sensibilidad ante todo el grupo.

### Sesión online síncrona
- **Salas de trabajo con Excel compartido:** Cada equipo recibe su pestaña asignada dentro de un libro compartido online de la Plantilla 6.3, lo que permite al formador detectar en segundos si algún equipo incluyó el cumplimiento legal dentro de los porcentajes ponderados.
- **Votación inicial y contraste rápido:** Utilizar encuestas de la plataforma de videoconferencia en la Actividad 1 para mostrar las apuestas de topología antes y después de añadir las condiciones de contorno.

### Sesión asíncrona
- **Videocápsula de resolución de matriz:** Incluir un vídeo demostrativo de 10 minutos mostrando paso a paso cómo pasar del prompt comparativo en ChatGPT/Claude a la Matriz de Decisión Ponderada en Excel con filtro binario previo.
- **Entrega del paquete del tema:** Subida al campus virtual de: (1) prompt y tabla comparativa anotada con verificaciones normativas (Actividad 2), (2) hoja de cálculo resuelta del caso *SaludNorte* con análisis de sensibilidad, y (3) plantilla de matriz adaptada al proyecto propio (Actividad 3).
- **Revisión cruzada en foro:** Cada alumno revisa la matriz de un compañero comprobando específicamente si los pesos suman $100\,\%$ y si el filtro reglamentario está correctamente aislado fuera de la puntuación.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Recupera los fundamentos de tipos de sistemas eléctricos, esquemas unifilares y criterios de trazo del **Bloque 1**, la planificación de zonas lumínicas de **DIALux (Bloque 2)**, las restricciones físicas de bandejas/tubos de **Revit MEP (Bloque 3)** y la disciplina de anonimización y doble verificación de los **Temas 1 y 2 del Bloque 6**.
- **Competencias que desarrolla:** Formulación estructurada de alternativas de diseño eléctrico con IA, pensamiento sistémico entre cálculo eléctrico-iluminación-BIM, análisis multicriterio auditable y contraste reglamentario riguroso.
- **Conexión dentro del plan de 6 módulos / 50 temas:**
  - **Tema anterior:** **Tema 2 del Bloque 6: Uso de ChatGPT y Claude como asistentes para proyectos eléctricos** (Tema 41 de 50), cuyos flujos seguros y protocolos de doble verificación se aplican aquí a la toma de decisiones de ingeniería previa.
  - **Tema posterior:** Alimenta directamente el **Tema 4 del Bloque 6: Elaboración y revisión de memorias descriptivas y especificaciones técnicas** (Tema 43 de 50), ya que el **Cuadro de Criterios de Diseño Aprobados** y la **Matriz de Decisión Ponderada** obtenidos en este tema sirven como datos verificados de entrada para redactar sin alucinaciones la justificación técnica de la memoria.
- **Evidencia de aprendizaje que dejará el alumnado:**
  1. Tabla comparativa con contraste reglamentario explícito (Actividad 2).
  2. Hoja de cálculo auditable con Matriz Ponderada, filtro binario y análisis de sensibilidad del caso *SaludNorte*.
  3. Plantilla propia de Matriz Ponderada lista para proyecto real (Actividad 3).
  4. Cuestionario sumativo completado.

---

## Siguientes pasos para el formador

1. **Preparar las fichas anonimizadas y la plantilla Excel `Plantilla_6_3_Matriz.xlsx`** verificando que las fórmulas `SUMAPRODUCTO` y validación condicional (`CUMPLE / NO CUMPLE`) funcionan tanto en Microsoft Excel como en LibreOffice Calc.
2. **Adaptar los ejemplos de contraste normativo ilustrativo** al país de residencia mayoritario del grupo (REBT España, IEC 60364, NEC/NFPA u otra norma local), manteniendo visible la regla de comprobación obligatoria de la edición vigente.
3. **Revisar en las entregas de la Actividad 3** que ningún alumno haya dejado el cumplimiento legal dentro de los pesos porcentuales ponderados ni haya confiado el cálculo de la matriz al texto del LLM.
4. **Conectar el cierre de este tema con el Tema 4** pidiendo al alumnado que conserve su Cuadro de Criterios Aprobados de *SaludNorte* (o su proyecto propio), pues será la materia prima verificada para generar la memoria descriptiva en la próxima sesión.
