# Tema 6. Intensidad, color y temperatura de luz

## 1. Ficha del tema

| Campo | Detalle |
| :--- | :--- |
| **Título del tema** | Intensidad, color y temperatura de luz |
| **Programa** | IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas |
| **Bloque y posición dentro del programa** | Bloque 5: Visualización y renderizado con Twinmotion · Tema 6 de 10 |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Modalidad** | Online / Híbrida interactiva |
| **Idioma** | Español de España |
| **Prerrequisitos** | Conocimientos previos de Revit MEP, lectura de cuadros de luminarias y resultados básicos de DIALux (flujo luminoso en lm, iluminancia en lx y archivos fotométricos `.ies`/`.ldt`), así como manejo básico de navegación, importación mediante Datasmith/Direct Link e inserción de luces artificiales y naturales en Twinmotion (Temas 1 a 5 del Bloque 5). |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado será capaz de calibrar la intensidad visual, la temperatura de color correlacionada (2700 K a 6500 K), la geometría del haz, la atenuación y la niebla volumétrica sutil en escenas de Twinmotion manteniendo trazabilidad verificable respecto a los parámetros fotométricos del proyecto lumínico aprobado y documentando explícitamente mediante checklists revisados con IA las diferencias entre visualización arquitectónica y cálculo normativo. |

---

## 2. Objetivos de aprendizaje

1. **Diferenciar** las magnitudes fotométricas calculadas en motores normativos como DIALux (flujo en lm, iluminancia en lx, luminancia en $\text{cd/m}^2$) de los controles perceptuales y de exposición en Twinmotion, justificando por qué un render equilibrado no acredita cumplimiento reglamentario. *(Nivel de Bloom: Analizar)*
2. **Calibrar** fuentes de luz artificial en Twinmotion ajustando intensidad luminosa, temperatura de color correlacionada entre $2700\text{ K}$ y $6500\text{ K}$ y balance de blancos de cámara en coherencia con el cuadro de luminarias aprobado en el proyecto. *(Nivel de Bloom: Aplicar)*
3. **Configurar** el ángulo de apertura del haz (*cone angle*), la transición de borde, el radio de atenuación y el tamaño del emisor para reproducir con fidelidad visual luminarias técnicas, proyectores de fachada y alumbrado general sin artefactos ni sobreexposiciones. *(Nivel de Bloom: Aplicar)*
4. **Evaluar** el impacto de la niebla volumétrica sutil, la iluminación global y el control manual de exposición (EV) sobre la legibilidad de cuadros eléctricos, señalización de emergencia y acabados interiores, evitando efectos teatrales que distorsionen la realidad constructiva. *(Nivel de Bloom: Evaluar)*
5. **Diseñar** un protocolo de auditoría asistido por Inteligencia Artificial (sobre tablas de parámetros anonimizadas) para cruzar los datos de luminarias del proyecto lumínico frente a la escena de Twinmotion y redactar notas de descargo técnico para el dossier visual. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Calibración visual de intensidad luminosa frente a exposición de cámara

#### Explicación breve y clara
En un proyecto eléctrico y de alumbrado profesional, el cumplimiento de niveles de iluminancia media ($E_m$ en lux), uniformidad ($U_0$) y deslumbramiento (UGR) se calcula y justifica en software fotométrico especializado (como DIALux o Relux) o mediante métodos analíticos validados. Twinmotion, en cambio, es un motor de visualización en tiempo real (con modos rasterizado/Lumen y *Path Tracer*) diseñado para comunicar el aspecto espacial y atmosférico de la obra.

El error habitual al trasladar un proyecto a Twinmotion consiste en dejar activa la exposición automática (*Auto-Exposure*) y subir arbitrariamente los lúmenes de las luminarias hasta que «la imagen se ve clara». La exposición automática compensa la falta o el exceso de luz modificando la sensibilidad virtual de la cámara, de modo que una sala con $100\text{ lx}$ reales puede parecer igual de luminosa en pantalla que un quirófano con $1000\text{ lx}$. Para conservar rigor visual, debemos fijar los valores nominales de flujo luminoso en lúmenes ($\text{lm}$) a partir de la ficha técnica real de cada luminaria, cargar su archivo fotométrico `.ies` cuando proceda y ajustar manualmente el valor de exposición (**EV**) y la compensación de luces/sombras en cámara según la hora del día representada.

#### Conceptos clave
- **Flujo luminoso nominal ($\text{lm}$):** Cantidad total de luz visible emitida por una fuente en todas las direcciones; en Twinmotion sirve como punto de partida realista, aunque su traducción en pantalla depende del tono mapeado (*tone mapping*) y de la exposición de cámara.
- **Valor de Exposición (EV):** Parámetro fotográfico de cámara que controla cuánta luz global capta la toma; bloquear el EV manual permite comparar de forma honesta dos escenas o dos variantes de luminarias.
- **Auto-Exposure (Exposición automática):** Ajuste dinámico de brillo que simula la adaptación del ojo humano, útil para navegar en tiempo real pero peligroso al validar proporciones de iluminación entre estancias técnicas y zonas de acento.
- **Motor Lumen frente a Path Tracer:** Modos de cálculo de iluminación global en Twinmotion; Lumen aproxima rebotes en tiempo real con límites de distancia y atenuación, mientras que Path Tracer traza trayectorias físicas más fieles a costa de mayor tiempo de cómputo y ruido en escenas cerradas.

#### Definiciones necesarias
- **Iluminancia ($E$):** Densidad de flujo luminoso que incide sobre una superficie por unidad de área, medida en lux ($\text{lx} = \text{lm}/\text{m}^2$). Su verificación reglamentaria corresponde al proyecto lumínico y nunca a una captura renderizada.
- **Mapeo tonal (*Tone Mapping*):** Proceso matemático mediante el cual el motor gráfico comprime el alto rango dinámico físico (HDR) de las fuentes luminosas para mostrarlo en un monitor estándar sin quemar completamente las zonas brillantes ni empastar las sombras.
- **Perfil fotométrico `.ies`:** Archivo estandarizado (Illuminating Engineering Society) que describe la distribución espacial de la intensidad luminosa en candelas ($\text{cd}$) según ángulos verticales y horizontales de una luminaria comercial.

#### Ejemplo práctico realista
En una sala de cuadros eléctricos de baja tensión de $40\text{ m}^2$ ($8\text{ m} \times 5\text{ m}$, altura $3{,}2\text{ m}$), el proyecto lumínico aprobado en DIALux prescribe 6 pantallas estancas LED lineales de $4000\text{ lm}$ cada una ($36\text{ W}$), distribución simétrica amplia y montaje adosado en techo para alcanzar más de $300\text{ lx}$ en el plano frontal de los armarios. Al importar el modelo desde Revit a Twinmotion, la escena parece oscura porque el entorno mantiene un sol exterior potente y el EV por defecto está calibrado para exteriores diurnos ($\text{EV} \approx 11\text{–}13$).

En lugar de elevar las pantallas a $25\,000\text{ lm}$ (lo que quemaría el techo y ocultaría las etiquetas de los interruptores), el proyectista asigna exactamente $4000\text{ lm}$ por luminaria con su perfil `.ies`, desactiva *Auto-Exposure*, reduce el parámetro de exposición de la cámara interior a un rango típico de interior técnico ($\text{EV} \approx 3\text{–}5$ según reflectancia de paredes) y comprueba la legibilidad del frente de cuadros. *Nota normativa:* los niveles mínimos de iluminancia en salas técnicas o puestos de trabajo deben verificarse siempre según la normativa vigente del país (por ejemplo, UNE-EN 12464-1 o requisitos de alumbrado de locales técnicos del REBT en España, u OSHA/IES en otros ámbitos), nunca por inspección visual del render.

#### Errores frecuentes
- Incrementar la intensidad en lúmenes en Twinmotion por encima de $3\times$ o $10\times$ el valor de catálogo para compensar una cámara mal expuesta en interiores.
- Mantener activada la exposición automática al comparar renders de encendido parcial frente a encendido total, neutralizando la diferencia real de flujo percibida.
- Afirmar ante la propiedad o dirección facultativa que una estancia «cumple con los $500\text{ lx}$» basándose únicamente en la claridad percibida de una imagen de Twinmotion.
- Emplear archivos `.ies` genéricos en luminarias críticas (como bañadores de fachada o campanas industriales) en lugar del archivo fotométrico real del fabricante elegido.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué mantener la exposición automática activa invalida la comparación visual entre dos propuestas con distinta potencia o número de luminarias?
2. ¿Qué diferencia técnica existe entre el flujo luminoso en lúmenes configurado en una luz de Twinmotion y la iluminancia en lux verificada en DIALux?
3. Si una sala técnica interior se ve subexpuesta en Twinmotion con sus luminarias configuradas al flujo exacto de catálogo, ¿qué parámetros deben revisarse antes de alterar los lúmenes reales?

---

### 3.2. Temperatura de color correlacionada (CCT) y equilibrio cromático

#### Explicación breve y clara
La **temperatura de color correlacionada (CCT)**, expresada en kelvin ($\text{K}$), describe la tonalidad cromática aparente de una fuente de luz blanca respecto a un radiador de cuerpo negro ideal. En el rango habitual de instalaciones de edificación e industria, abarca desde tonos muy cálidos ($2700\text{ K}$) hasta luz fría o luz día ($6500\text{ K}$).

Elegir y ajustar con rigor la CCT en Twinmotion no es un mero capricho estético: transmite al cliente el uso previsto del recinto, evita conflictos cromáticos entre luminarias adyacentes y permite detectar a tiempo inconsistencias heredadas del modelo BIM. Al mismo tiempo, resulta esencial controlar el **balance de blancos (*White Balance*)** de la cámara virtual: si una sala iluminada a $4000\text{ K}$ se fotografía con un balance de blancos fijo a $6500\text{ K}$, parecerá cálida; si se fija a $3000\text{ K}$, parecerá excesivamente azulada.

#### Conceptos clave
- **Espectro cálido ($2700\text{ K}\text{–}3000\text{ K}$):** Luz con mayor componente rojizo-ámbar asociada a descanso, hostelería, zonas residenciales y realce cálido de madera o piedra en fachadas y vestíbulos.
- **Espectro neutro técnico ($4000\text{ K}$):** Estándar extendido en oficinas, aulas, pasillos de servicio, laboratorios y cuartos eléctricos, donde prima la nitidez de lectura y el equilibrio entre confort y alerta visual.
- **Espectro frío / luz día ($5000\text{ K}\text{–}6500\text{ K}$):** Tonos blanco-azulados frecuentes en naves industriales de precisión, talleres de control cromático, áreas sanitarias específicas y luminarias exteriores de seguridad.
- **Balance de blancos de cámara (*White Balance*):** Ajuste cromático del sensor virtual que define qué temperatura en kelvin se interpreta como blanco neutro, afectando por igual a luz solar, cielo y luminarias artificiales.

#### Definiciones necesarias
- **Temperatura de color correlacionada (CCT):** Magnitud expresada en kelvin ($\text{K}$) que indica el tono de color de una lámpara blanca por comparación con la emisión térmica de un cuerpo negro teórico.
- **Índice de reproducción cromática (CRI / $R_a$):** Capacidad de una fuente luminosa para reproducir fielmente los colores de los objetos respecto a una fuente de referencia (escala hasta 100). Un motor de render RGB como Twinmotion aproxima tonos mediante triadas RGB y no simula espectros reales de CRI, por lo que el cumplimiento de CRI (p. ej., $R_a \ge 80$ en interiores generales) debe comprobarse en la hoja técnica del fabricante.
- **Contraste térmico intencionado:** Estrategia luminotécnica que combina dos temperaturas diferenciadas en un mismo espacio (p. ej., iluminación general a $4000\text{ K}$ y bañadores decorativos a $2700\text{ K}$ o $3000\text{ K}$) con un criterio arquitectónico definido y sin generar mezclas accidentales en una misma línea continua.

#### Ejemplo práctico realista
En la reforma eléctrica y lumínica de un edificio mixto de oficinas y hall representativo, el proyecto define:
- **Vestíbulo de acceso:** tira LED oculta en foseado a $2700\text{ K}$ combinada con focos empotrados de acento a $3000\text{ K}$.
- **Zona operativa de oficinas abiertas:** luminarias lineales suspendidas a $4000\text{ K}$ ($R_a \ge 80$).
- **Centro de transformación y sala de baja tensión:** pantallas estancas a $4000\text{ K}$ para lectura fiable del código de colores de conductores y señalética de seguridad.
- **Alumbrado exterior de muelle de carga:** proyectores LED a $5000\text{ K}$.

Al preparar la escena en Twinmotion, el técnico fija el balance de blancos en cámara diurna exterior en $6500\text{ K}$ para tomas con luz natural (haciendo legible la calidez de los $3000\text{ K}$ del vestíbulo al atardecer) y en $4500\text{ K}\text{–}5000\text{ K}$ en vistas nocturnas de oficina para evitar que los $4000\text{ K}$ parezcan excesivamente anaranjados o azulados. *Nota normativa:* la selección de CCT y CRI mínimo debe contrastarse con los requisitos normativos y sectoriales aplicables (p. ej., UNE-EN 12464-1 para lugares de trabajo interiores o normativa municipal de contaminación lumínica exterior respecto a límite de luz azul en fachadas).

#### Errores frecuentes
- Mezclar luminarias de $3000\text{ K}$ y $6000\text{ K}$ en un mismo techo modular por usar bloques genéricos de biblioteca sin unificar su temperatura en kelvin.
- Aplicar tintes RGB saturados (naranjas o cianes intensos) en lugar de introducir el valor exacto en kelvin de la lámpara blanca especificada.
- Corregir un aspecto amarillento en el render cambiando la CCT del proyecto de $3000\text{ K}$ a $6500\text{ K}$ en Twinmotion cuando el error estaba en un balance de blancos de cámara mal ajustado.
- Asumir que Twinmotion reproduce defectos de reproducción cromática (bajo $R_a$ o $R_9$) de luminarias económicas.

#### Preguntas que el alumnado debería poder responder
1. ¿Cómo afecta modificar el *White Balance* de la cámara en Twinmotion a una escena donde conviven luz exterior crepuscular y luminarias interiores de $3000\text{ K}$?
2. ¿Por qué no debe utilizarse un render en Twinmotion para garantizar que el índice de reproducción cromática ($R_a$) permite distinguir conductores eléctricos o señales cromáticas?
3. ¿En qué casos técnicos se justifica combinar $3000\text{ K}$ y $4000\text{ K}$ en una misma planta y cuándo supone un fallo de coordinación?

---

### 3.3. Geometría del haz (*cone angle*), atenuación, tamaño de fuente y niebla volumétrica

#### Explicación breve y clara
Dos luminarias con los mismos lúmenes y la misma temperatura en kelvin producen escenas completamente distintas si varían la apertura del haz, la suavidad de la penumbra o el tamaño físico del emisor. En Twinmotion, las luces de tipo *Spot* permiten ajustar el ángulo de haz (**Cone Angle**), mientras que las luces *Area* y el radio de fuente (**Shape / Radius**) definen la suavidad de las sombras y la forma de los reflejos especulares sobre suelos técnicos, envolventes metálicas y superficies acristaladas.

Además, los motores en tiempo real emplean un radio de atenuación (**Attenuation**) que recorta el cálculo de la luz más allá de cierta distancia por rendimiento gráfico. Si ese radio es demasiado corto, la luz desaparece de golpe antes de alcanzar el suelo o la pared; si es desmesurado en decenas de luces simultáneas, degrada el rendimiento y genera fugas indeseadas. Finalmente, la **niebla volumétrica (*Volumetric Fog*)** aporta lectura espacial del haz en fachadas o naves industriales, pero debe dosificarse con suma contención para no crear neblina artificial dentro de oficinas limpias ni velar señalización de seguridad.

#### Conceptos clave
- **Cone Angle (Ángulo de apertura):** Abertura angular total del cono luminoso en focos (*Spot*), equivalente conceptual al ángulo de haz de catálogos técnicos (p. ej., haz intensivo de $15^\circ\text{–}24^\circ$ frente a haz extensivo de $60^\circ\text{–}90^\circ$).
- **Inner Cone / Softness (Penumbra):** Transición progresiva entre el núcleo de máxima intensidad y el borde exterior del haz; evita círculos cortados a cuchillo irreales sobre paredes de ladrillo o pladur.
- **Attenuation Radius (Radio de atenuación):** Distancia máxima hasta la que el motor calcula la contribución directa de una luz puntual o focal; debe superar con holgura la distancia geométrica hasta la última superficie iluminada sin invadir recintos aislados sin necesidad.
- **Niebla volumétrica (*Volumetric Fog*):** Simulación de partículas en suspensión que dispersan la luz de focos y ventanas; útil en atmósferas exteriores húmedas o grandes naves, contraproducente si enturbia la lectura técnica de equipos eléctricos.

#### Definiciones necesarias
- **Ley del inverso del cuadrado:** Principio físico según el cual la iluminancia de una fuente puntual disminuye de forma inversamente proporcional al cuadrado de la distancia ($E = I / d^2$). En Twinmotion, aunque la caída luminosa sigue la atenuación física dentro del radio activo, el parámetro *Attenuation* actúa como un límite artificial de corte que debe dimensionarse con criterio.
- **Tamaño de emisor (*Source Length / Radius*):** Dimensiones geométricas virtuales del elemento que emite luz; un emisor puntual casi cero genera sombras de bordes muy duros y reflejos diminutos, mientras que un emisor lineal o rectangular produce sombras suaves y reflejos realistas coherentes con la pantalla LED.
- **Scattering anisotrópico:** Propiedad de la niebla volumétrica que concentra el halo luminoso hacia la dirección de visión de la cámara alrededor de luminarias exteriores o claraboyas.

#### Ejemplo práctico realista
En la fachada arquitectónica de un edificio corporativo de $14\text{ m}$ de altura se instalan bañadores empotrados en suelo (*wall-washers* / proyectores lineales asimétricos) cada $2{,}5\text{ m}$ con óptica elíptica estrecha ($15^\circ \times 45^\circ$), $3000\text{ K}$ y $2800\text{ lm}$. Al modelar primero sin perfil `.ies` usando un *Spot* estándar con `Cone Angle = 60°` y `Attenuation = 8 m`, el haz se corta bruscamente a media altura dejando la coronación del edificio negra y desbordando luz hacia las ventanas laterales.

Al sustituirlo por el archivo `.ies` del proyector real (o ajustar un *Spot* con `Cone Angle` acotado, suavizado de borde adecuado y `Attenuation = 18 m` con ángulo de apuntamiento verificado respecto a la carpintería), la luz baña el paramento vertical de manera continua hasta el remate de cubierta. Si el render es nocturno exterior, se activa una niebla atmosférica sutil (densidad baja para insinuar profundidad urbana sin halos excesivos ni velar las luminarias de señalización de salida). *Nota normativa:* en alumbrado de fachadas debe comprobarse siempre la normativa ambiental y de eficiencia energética aplicable (en España, por ejemplo, el Reglamento de Eficiencia Energética en Instalaciones de Alumbrado Exterior RD 1890/2008 y ordenanzas locales sobre flujo hemisférico superior, o estándares equivalentes según país) antes de aprobar proyectores orientados hacia arriba.

#### Errores frecuentes
- Dejar `Attenuation` por defecto demasiado corto en naves de $9\text{ m}$ de altura, provocando que las campanas industriales parezcan apagadas sobre el pavimento.
- Configurar `Source Radius` nulo en pantallas lineales de $1{,}20\text{ m}$, obteniendo sombras afiladas irreales debajo de bandejas portacables y luminarias.
- Abusar de la niebla volumétrica en interiores de oficinas o salas eléctricas, dando aspecto de incendio, vapor o ambiente contaminado y reduciendo el contraste de los cuadros eléctricos.
- Modificar el `Cone Angle` en Twinmotion después de aprobado el proyecto DIALux sin notificar al equipo de iluminación que esa óptica no coincide con la especificada en presupuesto.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué efecto visual indeseado aparece en una nave de gran altura cuando el radio de atenuación (*Attenuation*) de una campana LED es inferior a la altura de montaje?
2. ¿Por qué conviene ajustar el tamaño físico del emisor (*Source Size* / luz de área) acorde con la geometría real de una pantalla LED de $1200\text{ mm} \times 300\text{ mm}$?
3. ¿Qué criterios técnicos permiten decidir si una escena requiere niebla volumétrica sutil o debe mantenerse completamente limpia?

---

### 3.4. Trazabilidad entre proyecto lumínico, modelo BIM y verificación asistida por IA

#### Explicación breve y clara
Uno de los mayores riesgos en oficinas técnicas multidisciplinares es la **deriva de datos** entre documentos: el esquema unifilar y las mediciones BIM de Revit indican una referencia de luminaria, el cálculo de DIALux se ha recalculado con otra potencia o CCT, y el visualizador en Twinmotion ha variado manualmente lúmenes, ángulos y temperaturas hasta perder la relación con la ingeniería aprobada.

Para evitarlo, se implanta una **matriz de trazabilidad lumínica** vinculada al código de tipo BIM (p. ej., `LUM-OFI-01`). En esta fase, asistentes de Inteligencia Artificial como ChatGPT o Claude pueden ayudar de forma muy productiva a contrastar tablas CSV/Excel exportadas y **anonimizadas** (eliminando nombre de cliente, dirección exacta, datos personales o planos confidenciales), detectando discrepancias entre el cuadro de luminarias de Revit/DIALux y la hoja de configuración de Twinmotion, así como redactando avisos técnicos estandarizados para los planos y renders de presentación. Sin embargo, toda revisión numérica, equivalencia de unidades o verificación de cumplimiento normativo debe ser contrastada de forma independiente por un técnico competente; las salidas de la IA nunca constituyen validación profesional ni certificación.

#### Conceptos clave
- **Matriz de trazabilidad lumínica:** Tabla maestra que vincula cada código de tipo BIM con su referencia comercial, potencia ($\text{W}$), flujo ($\text{lm}$), CCT ($\text{K}$), archivo `.ies`/`.ldt`, modo de configuración en Twinmotion y estado de verificación.
- **Deriva visual frente a proyecto (*Visual Drift*):** Desviación acumulada entre las propiedades lumínicas reales del proyecto y los parámetros manipulados en el software de renderizado durante revisiones estéticas.
- **Anonimización previa a prompts de IA:** Práctica obligatoria de seguridad de la información consistente en sustituir datos identificativos del proyecto, coordenadas, nombres de clientes o planos completos por códigos neutros antes de consultar un LLM externo, salvo que la empresa cuente con entorno corporativo autorizado y contrato de confidencialidad.
- **Descargo técnico de visualización (*Visual Disclaimer*):** Nota explícita integrada en láminas y dossieres visuales que aclara que las imágenes muestran una aproximación artística de ambiente y no sustituyen el cálculo fotométrico ni el proyecto eléctrico visado.

#### Definiciones necesarias
- **Archivo Eulumdat (`.ldt`):** Formato europeo normalizado para describir la distribución fotométrica de luminarias (equivalente en propósito al `.ies` norteamericano); cuando Twinmotion no importa directamente `.ldt`, debe utilizarse la versión `.ies` oficial del fabricante o la exportación adecuada sin alterar la curva manualmente.
- **Alucinación paramétrica en IA:** Error por el cual un modelo de lenguaje inventa un flujo luminoso plausible, confunde $\text{lm/W}$ con $\text{lm}$ totales o asume equivalencias falsas entre parámetros de Twinmotion y normas eléctricas.

#### Ejemplo práctico realista
El equipo de ingeniería prepara una presentación de un edificio docente de 3 plantas con 12 tipos de luminarias. Al cruzar el cuadro exportado de Revit MEP (en CSV) con el resumen de luminarias de DIALux evo y la lista de luces configuradas en Twinmotion, se anonimizan los campos (`Proyecto_Centro_A` en lugar del nombre del cliente y ubicación) y se solicita a un asistente de IA que compare ambas tablas buscando incoherencias de flujo ($\text{lm}$), temperatura ($\text{K}$), código `.ies` asignado y coherencia de recintos.

La IA detecta rápidamente tres posibles discrepancias:
1. El tipo `LUM-AUL-02` figura a $4000\text{ K}$ en DIALux pero fue importado como $3000\text{ K}$ en la plantilla previa de Twinmotion.
2. El tipo `LUM-PAS-04` aparece con $1800\text{ lm}$ en Revit y $2400\text{ lm}$ en la actualización final de DIALux.
3. Un proyector exterior `LUM-EXT-01` lleva asignado un archivo `.ies` simétrico en lugar de asimétrico.

A continuación, el técnico responsable abre el informe oficial de DIALux y las fichas del fabricante para comprobar manualmente cada uno de los tres puntos —rechazando además una sugerencia errónea de la IA que recomendaba igualar el alumbrado de emergencia a $500\text{ lm}$ continuos en escena normal— y actualiza el modelo y el dossier incluyendo el aviso de alcance visual. *Nota normativa:* los criterios de alumbrado normal y de emergencia deben verificarse conforme al reglamento aplicable en cada país (p. ej., UNE-EN 1838, CTE DB-SUA4 y REBT ITC-BT-28 en España, o NFPA 101 / NEC en otras jurisdicciones).

#### Errores frecuentes
- Subir el plano completo en PDF/DWG o la memoria confidencial del cliente con direcciones, datos personales o infraestructura crítica a un chat de IA público sin autorización expresa.
- Copiar directamente un cuadro de equivalencias de lúmenes o ángulos generado por IA sin cotejarlo con las fichas `.ies`/`.ldt` del fabricante.
- Olvidar actualizar la escena de Twinmotion tras un recálculo final en DIALux que cambió la potencia o la óptica de las luminarias.
- Omitir en los renders presentados al cliente la nota aclaratoria de que la visualización no equivale a una medición ni a una verificación normativa de luxes.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué datos deben eliminarse o sustituirse obligatoriamente antes de pegar una tabla de luminarias en un asistente de IA externo?
2. ¿Qué campos mínimos debe contener una matriz de trazabilidad entre DIALux, Revit MEP y Twinmotion para evitar la deriva visual?
3. ¿Por qué es imprescindible revisar manualmente cualquier cálculo de conversión de unidades o recomendación normativa propuesta por ChatGPT o Claude?

---

## 4. Metodología didáctica

La sesión combina demostración guiada en directo sobre escena de Twinmotion, análisis comparativo frente a informes de DIALux y práctica iterativa con apoyo crítico de IA, sumando exactamente **240 minutos**.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
| :--- | :---: | :--- | :--- |
| **1. Encuadre y activación diagnóstica** | 25 min | Presenta dos renders aparentemente iguales de un mismo recinto eléctrico y plantea el reto de identificar cuál respeta las magnitudes del proyecto lumínico y cuál manipula la exposición y el color. Introduce los objetivos y límites legales/técnicos del renderizado. | Analiza las imágenes comparadas, identifica señales de sobreexposición, mezcla de CCT y errores de haz en parejas, y responde a un cuestionario diagnóstico inicial en el aula virtual. |
| **2. Exposición técnica demostrativa I (Intensidad, EV y CCT)** | 40 min | Demuestra en tiempo real sobre una escena Revit-Twinmotion cómo fijar flujo nominal en $\text{lm}$, cargar perfiles `.ies`, desactivar *Auto-Exposure*, ajustar EV y configurar temperaturas entre $2700\text{ K}$ y $6500\text{ K}$ junto con el balance de blancos. | Replica el procedimiento paso a paso en su escena base de trabajo, calibrando tres zonas diferenciadas (sala técnica, oficina y vestíbulo) y registrando el EV de cada cámara. |
| **3. Exposición técnica demostrativa II (Haz, atenuación y niebla)** | 35 min | Explica y muestra el ajuste de `Cone Angle`, penumbra, `Attenuation Radius`, tamaño de emisor y niebla volumétrica sutil en nave industrial y fachada, señalando errores de contraste y ocultación de señalización. | Ajusta en su proyecto los parámetros geométricos del haz en luminarias lineales y proyectores exteriores, comparando sombras y alcance con un parámetro de referencia. |
| **4. Práctica guiada de trazabilidad y auditoría con IA** | 45 min | Facilita una tabla anonimizada de luminarias (CSV de Revit/DIALux) y guía el diseño de prompts de verificación cruzada, mostrando cómo detectar errores o alucinaciones de la IA en unidades y normativa. | Ejecuta el prompt de auditoría sobre datos anonimizados, verifica manualmente las discrepancias detectadas contra la ficha técnica y corrige los parámetros en su escena de Twinmotion. |
| **5. Pausa activa e intercambio técnico** | 15 min | Modera descanso breve y resuelve dudas individuales sobre tarjetas gráficas, modos Lumen/Path Tracer o formatos `.ies`/`.ldt`. | Descansa y contrasta brevemente configuraciones de cámara o problemas técnicos de importación con compañeros. |
| **6. Taller aplicado: Caso práctico integral y entregable** | 55 min | Supervisa el desarrollo autónomo del caso práctico en salas de trabajo o estaciones individuales, actuando como revisor técnico (cliente/dirección facultativa). | Resuelve el caso práctico calibrando una escena mixta completa, generando dos vistas comparativas calibradas, la matriz de trazabilidad y la nota de descargo técnico. |
| **7. Puesta en común, evaluación y cierre** | 25 min | Dirige la revisión cruzada de resultados con la rúbrica, sintetiza buenas prácticas de fidelidad visual y enlaza con la ambientación de escenarios del Tema 7. | Presenta brevemente sus renders comparativos y la discrepancia crítica detectada, completa la autoevaluación y realiza el test sumativo de cierre. |

**Total cronometrado:** $25 + 40 + 35 + 45 + 15 + 55 + 25 = \mathbf{240\text{ minutos}}$.

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «El detector de engaños lumínicos»
- **Objetivo:** Reconocer visualmente manipulaciones frecuentes de intensidad, exposición automática, temperatura de color y atenuación en renders arquitectónicos y técnicos, diferenciando calidad visual de rigor de proyecto.
- **Instrucciones para el alumnado:**
  1. Observa las 4 capturas numeradas proyectadas o subidas al campus (una sala de cuadros BT, una oficina diáfana, una nave industrial y una fachada comercial).
  2. Para cada captura, compara la imagen con los datos resumidos del proyecto DIALux adjuntos (lúmenes, CCT y montaje).
  3. Anota en la ficha rápida al menos 2 anomalías técnicas por imagen (por ejemplo: mezcla de $3000\text{ K}$ y $6500\text{ K}$, corte abrupto por atenuación, autoexposición engañosa o niebla que tapa pictogramas) e indica si el error proviene del motor de visualización o de una contradicción de proyecto.
  4. Comparte tus conclusiones en grupo reducido durante 5 minutos.
- **Materiales necesarios:** Paquete de 4 imágenes de referencia y tabla resumen de proyecto lumínico (PDF/CSV en el campus); ficha de diagnóstico rápido.
- **Tiempo estimado:** 25 minutos (integrado en la Fase 1).
- **Rol del formador:** Dinamiza el debate evitando juicios puramente estéticos, formula preguntas guía sobre exposición y CCT y revela los parámetros reales ocultos detrás de cada imagen.
- **Producto o entregable esperado:** Ficha de diagnóstico cumplimentada con al menos 6 anomalías correctamente clasificadas (visualización vs. proyecto).
- **Criterios de éxito:** El alumno identifica con precisión cuándo un problema aparente de potencia lumínica corresponde en realidad a EV o atenuación, y justifica por qué ninguna de las imágenes sirve por sí sola para certificar luxes.

### Actividad 2 (Aplicación técnica): «Calibración fiel por zonas e importación `.ies`»
- **Objetivo:** Configurar correctamente en Twinmotion el flujo en lúmenes, la temperatura en Kelvin ($2700\text{ K}\text{–}6500\text{ K}$), la geometría del haz, el tamaño del emisor y el balance de blancos manual en una escena multiuso.
- **Instrucciones para el alumnado:**
  1. Abre la escena base `Bloque5_T6_Base.tm` (edificio con hall de acceso, oficina operativa y cuarto eléctrico anexo).
  2. Elimina las luces genéricas descalibradas existentes y sustitúyelas por las configuraciones indicadas en el cuadro técnico suministrado:
     - Hall: tiras lineales a $2700\text{ K}$ ($1200\text{ lm/m}$) y focos de acento con archivo `.ies` a $3000\text{ K}$ ($1800\text{ lm}$, `Cone Angle` ajustado a la óptica).
     - Oficina: pantallas empotradas con luz de área acorde al tamaño físico ($1200\text{ mm} \times 300\text{ mm}$), $4000\text{ K}$, $3600\text{ lm}$.
     - Cuarto eléctrico: luminarias estancas a $4000\text{ K}$, $4000\text{ lm}$, verificando legibilidad de envolventes y rotulación sin reflejos quemados.
  3. Desactiva *Auto-Exposure* en todas las cámaras guardadas, define un EV coherente por escena y ajusta el balance de blancos para evitar desviaciones cromáticas artificiales.
  4. Configura una toma exterior nocturna con niebla volumétrica muy sutil en el acceso sin enturbiar los rótulos luminosos.
- **Materiales necesarios:** Archivo base de Twinmotion, carpeta con 3 archivos `.ies` de muestra de fabricante y cuadro de especificaciones lumínicas.
- **Tiempo estimado:** 60 minutos (distribuido en bloques prácticos durante las Fases 2 y 3).
- **Rol del formador:** Recorre las pantallas/estaciones comprobando que no se alteren los lúmenes de catálogo para compensar cámaras oscuras y que el `Attenuation Radius` cubra toda la altura del local.
- **Producto o entregable esperado:** Archivo Twinmotion guardado y 3 capturas rápidas en PNG (Hall, Oficina y Cuarto eléctrico) con anotación del EV y White Balance empleados en cada cámara.
- **Criterios de éxito:** Correspondencia exacta entre lúmenes/CCT de tabla y escena; ausencia de cortes bruscos por atenuación; legibilidad nítida del cuarto eléctrico sin sobreexposición.

### Actividad 3 (Transferencia a proyecto real): «Auditoría cruzada DIALux–Twinmotion asistida por IA y dossier con descargo técnico»
- **Objetivo:** Implementar un flujo de control de calidad asistido por IA sobre datos anonimizados para asegurar trazabilidad entre el proyecto lumínico y la visualización entregada al cliente.
- **Instrucciones para el alumnado:**
  1. Toma el archivo CSV exportado del modelo técnico y anonimiza los metadatos de proyecto, cliente y ubicación antes de abrir el asistente de IA (ChatGPT/Claude).
  2. Redacta un prompt estructurado solicitando a la IA que compare la tabla `Proyecto_Lum_Aprobado.csv` frente a `Escena_Twinmotion_Actual.csv` (que incluye 4 errores introducidos deliberadamente: una CCT cambiada, una unidad confundida entre lux y lúmenes, un archivo `.ies` faltante y un radio de atenuación insuficiente).
  3. Revisa críticamente la respuesta de la IA: comprueba de forma independiente qué errores ha detectado bien, si ha omitido alguno o si ha sugerido alguna corrección incorrecta.
  4. Corrige tu escena de Twinmotion según la verificación humana definitiva y redacta un bloque de texto de «Alcance técnico y notas lumínicas» (máximo 120 palabras) para acompañar tus renders.
- **Materiales necesarios:** Dos archivos CSV anonimizados de comparación, plantilla de matriz de trazabilidad y acceso a asistente de IA (o guion equivalente offline si se trabaja sin red).
- **Tiempo estimado:** 45 minutos (Fase 4).
- **Rol del formador:** Modera la puesta en común de los prompts, enfatiza la prohibición de subir planos o datos reales del cliente y señala deliberadamente errores plausibles generados por la IA.
- **Producto o entregable esperado:** Prompt utilizado, matriz de trazabilidad corregida (XLSX/CSV o Markdown) con verificación humana firmada simbólicamente por el alumno como «revisado» y texto de descargo técnico.
- **Criterios de éxito:** Detección del 100 % de las 4 discrepancias tras la verificación humana; anonimización íntegra de datos; redacción precisa del descargo diferenciando visualización frente a cálculo normativo.

---

## 6. Caso práctico

### Rediseño visual y control lumínico de un centro logístico farmacéutico con oficinas y zona de muelles

#### Contexto empresarial
La ingeniería **ElectroBIM Proyectos S.L.** (empresa ficticia de consultoría e instalaciones) ha recibido el encargo de presentar ante la dirección de operaciones de un operador logístico farmacéutico la visualización previa de la reforma de alumbrado y cuadros principales de una plataforma existente. La presentación pretende obtener la aprobación estética y funcional de dirección antes de iniciar el montaje nocturno por fases, sin paralizar la actividad de la planta.

#### Situación o problema
El equipo junior ha preparado una primera tanda de renders en Twinmotion exportada desde el modelo Revit MEP, pero la dirección técnica detecta graves problemas de credibilidad antes de la reunión con el cliente:
1. En la **nave de almacenamiento** ($9{,}5\text{ m}$ de altura libre), las campanas LED de $18\,000\text{ lm}$ y $4000\text{ K}$ dejan el suelo prácticamente a oscuras porque el `Attenuation Radius` se quedó en $5\text{ m}$; para «arreglarlo», el autor subió la intensidad de las campanas en Twinmotion a $95\,000\text{ lm}$, quemando las cerchas metálicas de cubierta.
2. En la **sala técnica del Cuadro General de Baja Tensión (CGBT)**, el técnico usó por error luminarias de biblioteca a $2700\text{ K}$ y dejó activa la exposición automática, haciendo que los embarrados, el alumbrado de emergencia y la cartelería de seguridad parezcan tenues y amarillentos.
3. En la **fachada y muelles exteriores**, se añadió una niebla volumétrica densa junto a proyectores configurados con `Cone Angle` abierto a $110^\circ$ y $6500\text{ K}$ que deslumbran las cámaras de vigilancia y contradicen la óptica asimétrica aprobada en DIALux ($4000\text{ K}$ para limitar dispersión y cumplir criterio ambiental del polígono).
4. Además, el borrador de presentación incluye el título «Simulación certificada de cumplimiento lumínico del almacén», lo cual es técnicamente falso y legalmente improcedente.

#### Datos disponibles
- **Modelo Twinmotion de partida** vinculado a la geometría BIM del almacén, sala CGBT, oficina de control y fachada de muelles.
- **Extracto anonimizado del proyecto lumínico aprobado (DIALux):**
  - **Zona A – Almacén principal ($h = 9{,}5\text{ m}$):** 24 campanas LED industriales, $18\,000\text{ lm}$ nominales, $4000\text{ K}$, $R_a \ge 80$, haz medio $60^\circ$ (`.ies` adjunto). Objetivo de cálculo en proyecto: $E_m \ge 200\text{ lx}$ en pasillos (dato verificado únicamente en DIALux).
  - **Zona B – Sala CGBT ($h = 3{,}0\text{ m}$):** 4 pantallas estancas LED $2\times 18\text{ W}$ eq., $4200\text{ lm}$, $4000\text{ K}$, montaje adosado.
  - **Zona C – Oficina de expediciones ($h = 2{,}8\text{ m}$):** 8 paneles LED empotrados $600\times 600\text{ mm}$, $3600\text{ lm}$, $4000\text{ K}$, óptica microprismática UGR $< 19$. Además, tira decorativa en recepción de transportistas a $3000\text{ K}$ ($1000\text{ lm/m}$).
  - **Zona D – Muelles exteriores ($h = 6{,}5\text{ m}$):** 6 proyectores asimétricos exteriores, $12\,500\text{ lm}$, $4000\text{ K}$, orientados hacia pavimento de carga sin flujo hacia el cielo.
- **Archivos `.ies`** correspondientes a campanas y proyectores exteriores.

#### Preguntas de análisis
1. ¿Qué parámetro geométrico de iluminación originó originalmente que las campanas de $18\,000\text{ lm}$ no llegaran al pavimento a $9{,}5\text{ m}$ de altura, y por qué subirlas a $95\,000\text{ lm}$ agrava el problema visual y técnico?
2. ¿Cómo debe ajustarse la relación entre la sala CGBT ($4000\text{ K}$) y la recepción adyacente ($3000\text{ K}$) en cuanto a balance de blancos para que ambas zonas muestren fielmente su temperatura diferencial sin parecer irreales?
3. ¿Por qué es improcedente rotular el dossier de Twinmotion como «simulación certificada de cumplimiento lumínico» y qué documentación sí respalda el cumplimiento reglamentario?
4. ¿Qué riesgos de confidencialidad existirían si el ingeniero junior subiera los planos completos del centro logístico farmacéutico a un chat público de IA para pedir ayuda?

#### Tarea a realizar
Por equipos o de forma individual, deberéis:
1. **Corregir la escena de Twinmotion** en las cuatro zonas aplicando los valores exactos de flujo ($\text{lm}$), CCT ($\text{K}$), archivos `.ies`, tamaños reales de emisor y radios de atenuación adecuados (p. ej., $\ge 12\text{–}14\text{ m}$ en nave de $9{,}5\text{ m}$), desactivando *Auto-Exposure* y calibrando EV y *White Balance* de forma coherente.
2. **Depurar la atmósfera exterior** reduciendo la niebla volumétrica a un nivel sutil realista o anulándola si resta nitidez a la señalética de muelle y accesos.
3. **Elaborar una tabla de auditoría** (con ayuda de un prompt seguro sobre datos anonimizados) contrastando la configuración corregida frente al extracto de DIALux y verificando manualmente todos los valores.
4. **Redactar el bloque de presentación y descargo técnico** que sustituirá al título erróneo del borrador, dejando clara la distinción entre visualización Twinmotion, modelado Revit MEP y cálculo fotométrico/eléctrico reglamentario.

#### Posibles soluciones o criterios de análisis
- **Nave ($9{,}5\text{ m}$):** Restablecer flujo a $18\,000\text{ lm}$, cargar el `.ies` de $60^\circ$, elevar `Attenuation` a $14\text{–}16\text{ m}$, fijar EV de cámara interior en torno a $3{,}5\text{–}5{,}0$ (ajustado según reflectancia real de pavimento epoxi y estanterías) y activar rebotes de iluminación global adecuados.
- **Sala CGBT:** Corregir CCT a $4000\text{ K}$, usar luces de área dimensionadas a la pantalla real para evitar reflejos puntuales molestos en puertas metálicas de armarios y comprobar que las etiquetas de circuitos y alumbrado de emergencia sean legibles.
- **Oficina + Recepción:** Mantener $4000\text{ K}$ en área operativa y $3000\text{ K}$ en la tira de recepción con balance de blancos neutro ($\approx 4500\text{–}5000\text{ K}$ en escena interior mixta o $6500\text{ K}$ si predomina luz día por ventanales), evidenciando la transición intencionada sin mezclas accidentales en la misma retícula.
- **Muelles exteriores:** Cambiar proyectores a $4000\text{ K}$ con `.ies` asimétrico inclinado hacia el muelle, eliminar exceso de niebla volumétrica y validar que no haya derrame luminoso hacia arriba ni deslumbramiento directo hacia las cámaras perimetrales.
- **Trazabilidad y descargo:** Dejar constancia explícita de que la normativa aplicable (p. ej., UNE-EN 12464-1 para lugares de trabajo, RD 1890/2008 para alumbrado exterior o REBT en España, según jurisdicción y edición vigentes) se verifica exclusivamente en el proyecto técnico visado y las memorias de DIALux, no en las imágenes de Twinmotion.

#### Preguntas de reflexión final
1. Si la propiedad pide «subir un poco la luz de la oficina en el render para que se vea más alegre», ¿cómo respondes técnicamente usando exposición/posproducción sin falsear los lúmenes del proyecto?
2. ¿Hasta qué punto puede el cliente interpretar erróneamente el ángulo de haz o el confort visual (UGR) en un render de Twinmotion, y cómo lo previenes durante la exposición oral?
3. ¿Qué protocolo mínimo implantarías en tu estudio antes de permitir el uso de IA generativa en la revisión de proyectos industriales sensibles?

---

## 7. Evaluación

### Evaluación diagnóstica
- **Cuándo:** Primeros 25 minutos (Fase 1 / Actividad 1).
- **Instrumento:** Cuestionario corto de 5 ítems + ficha de análisis comparativo de 4 capturas lumínicas con anomalías ocultas.
- **Propósito:** Detectar confusiones previas entre lúmenes, luxes y exposición EV, así como hábitos poco rigurosos de uso de la escala Kelvin o la autoexposición.

### Evaluación formativa
- **Cuándo:** Durante las Fases 2, 3 y 4 (Actividades 2 y 3).
- **Instrumento:** Observación estructurada con lista de cotejo técnica (*checklist* en vivo) sobre el archivo Twinmotion del alumnado y revisión del prompt anonimizado de auditoría.
- **Criterios de seguimiento:** Uso de `.ies`, mantenimiento de lúmenes de proyecto, desactivación de *Auto-Exposure*, dimensionamiento de `Attenuation`, control de niebla y verificación manual de la respuesta de IA.

### Evaluación sumativa
- **Cuándo:** Fases 6 y 7 (Caso práctico + prueba objetiva breve de 10 preguntas al cierre).
- **Composición de la calificación:**
  - **60 %** Entregable del Caso práctico (escena calibrada en Twinmotion / capturas con parámetros visibles + matriz de trazabilidad + nota de descargo técnico).
  - **25 %** Ejecución de la Actividad 3 (auditoría anonimizada con IA y detección crítica de errores).
  - **15 %** Cuestionario objetivo final sobre magnitudes fotométricas, CCT, haces, exposición y límites normativos.

### Rúbrica de evaluación

| Criterio | Insuficiente (0–4,9) | En desarrollo (5,0–6,9) | Adecuado (7,0–8,9) | Destacado (9,0–10) |
| :--- | :--- | :--- | :--- | :--- |
| **Fidelidad de flujo ($\text{lm}$) y control de exposición (EV)** | Manipula lúmenes arbitrariamente para iluminar la escena; mantiene *Auto-Exposure* activado y confunde claridad visual con cumplimiento en lux. | Mantiene algunos lúmenes de proyecto, pero compensa zonas oscuras duplicando valores o dejando variaciones inconsistentes de EV entre cámaras. | Fija los lúmenes según tabla técnica, desactiva *Auto-Exposure* y calibra EV manualmente obteniendo vistas coherentes por recinto. | Calibra con precisión lúmenes, perfiles `.ies` y EV manual manteniendo absoluta homogeneidad comparativa y documentando límites frente al cálculo en DIALux. |
| **Temperatura de color (CCT) y balance de blancos** | Mezcla temperaturas aleatorias ($2700\text{ K}$–$6500\text{ K}$) sin criterio o usa tintes RGB saturados; no controla el *White Balance*. | Aplica CCT aproximadas por zona, pero mantiene desajustes de *White Balance* que distorsionan la percepción del color real. | Configura con exactitud las CCT ($2700\text{ K}$–$6500\text{ K}$) por uso técnico y ajusta un balance de blancos coherente en cada cámara. | Logra coherencia cromática impecable entre luz natural, zonas técnicas ($4000\text{ K}$) y acento cálido ($2700\text{–}3000\text{ K}$), justificando perceptual y técnicamente el *White Balance*. |
| **Ángulo de haz, atenuación y niebla volumétrica** | Corta el alcance lumínico por atenuación insuficiente, usa sombras puntuales irreales o abusa de niebla velando equipos eléctricos. | Ajusta ángulo o atenuación en algunas luminarias, pero mantiene fugas de luz o excesos leves de niebla en interiores. | Dimensiona `Cone Angle`, tamaño de emisor y `Attenuation` acordes al recinto; dosifica o suprime la niebla preservando legibilidad técnica. | Reproduce fielmente ópticas `.ies`/asimétricas, transiciones de penumbra, reflejos lineales reales y atmósfera limpia sin interferir con envolventes ni señalización. |
| **Trazabilidad, uso seguro de IA y descargo normativo** | Sube información sensible sin anonimizar, acepta sin verificar datos erróneos de IA o presenta el render como cálculo normativo válido. | Anonimiza parcialmente los datos y detecta errores básicos, pero redacta un descargo genérico o no contrasta todas las unidades. | Anonimiza íntegramente el CSV, audita la respuesta de IA frente al proyecto y redacta un descargo técnico correcto diferenciando herramientas. | Diseña matriz completa DIALux–Revit–Twinmotion libre de deriva visual, corrige alucinaciones de IA con criterio normativo y entrega dossier con descargo profesional riguroso. |

### Actividad de autoevaluación
Antes de entregar su dossier final del caso práctico, cada participante debe completar individualmente el siguiente bloque de autocomprobación (Sí / No / Acción correctora):
1. ¿Todas las luminarias de mi escena tienen asignados exactamente los lúmenes y la temperatura en kelvin del cuadro técnico aprobado, sin haberlos inflado artificialmente?
2. ¿He desactivado *Auto-Exposure* en todas las vistas exportables y registrado el valor EV y *White Balance* utilizado?
3. ¿He comprobado que el `Attenuation Radius` supera la distancia máxima hasta suelo/paredes y que el `Source Size` corresponde al formato físico de cada luminaria?
4. ¿Pueden leerse sin brillos quemados ni velos de niebla los cuadros eléctricos, etiquetas de seguridad y salidas en mis capturas?
5. ¿He anonimizado todos los datos antes de consultar la IA, verificado manualmente sus respuestas y añadido una nota explícita indicando que el render no sustituye el cálculo lumínico ni la certificación reglamentaria?

---

## 8. Materiales y recursos

### Guion estructurado de diapositivas (Slides 1 a 8)

- **Slide 1: Portada e hipótesis de partida**
  - Título: *Intensidad, color y temperatura de luz en Twinmotion: estética fiel frente a ingeniería verificada*.
  - Contenido visual: Comparativa lado a lado de una misma sala eléctrica bien expuesta a $4000\text{ K}$ frente a otra manipulada con $2700\text{ K}$ y sobreexposición.
  - Mensaje clave: Twinmotion comunica arquitectura y ambiente; el cumplimiento reglamentario reside exclusivamente en el cálculo fotométrico y eléctrico visado.

- **Slide 2: Lúmenes, candelas, lux y exposición (EV)**
  - Diagrama conceptual diferenciando fuente ($\text{lm}$), intensidad direccional ($\text{cd}$ / `.ies`), plano de trabajo ($\text{lx}$ en DIALux) y cámara virtual (EV + *Tone Mapping* en Twinmotion).
  - Advertencia visual sobre el engaño perceptivo de *Auto-Exposure*.

- **Slide 3: Mapa térmico de la CCT ($2700\text{ K}$ a $6500\text{ K}$)**
  - Barra cromática práctica por aplicación: $2700\text{ K}$ (hostelería/acento cálido), $3000\text{ K}$ (comercio/recepción), $4000\text{ K}$ (oficinas, aulas, salas técnicas BT/MT), $5000\text{–}6500\text{ K}$ (industria de precisión, exterior seguridad).
  - Miniatura comparativa del efecto del *White Balance* de cámara sobre una misma fuente de $3000\text{ K}$.

- **Slide 4: Ópticas, `.ies`, `Cone Angle` y tamaño de emisor**
  - Esquema comparativo: proyector intensivo ($15^\circ$), extensivo ($60^\circ$), bañador asimétrico de fachada y luz de área lineal ($1200 \times 300\text{ mm}$).
  - Impacto de `Source Radius` en dureza de sombras y reflejos sobre envolventes metálicas.

- **Slide 5: Atenuación, iluminación global y niebla volumétrica**
  - Corte esquemático de nave de $9{,}5\text{ m}$ mostrando fallo por `Attenuation = 5 m` frente a ajuste correcto $\ge 14\text{ m}$.
  - Regla de oro sobre niebla volumétrica: sutil en atmósfera exterior/industrial grande; desactivada o mínima en salas limpias y cuartos eléctricos.

- **Slide 6: Flujo de trazabilidad BIM–DIALux–Twinmotion**
  - Flujo de datos unidireccional controlado mediante código de tipo (`LUM-XXX`): Revit MEP (geometría y cuadro) + DIALux (cálculo `.ies`/`.ldt` y cumplimiento) $\rightarrow$ Twinmotion (calibración visual fiel).
  - Precaución sobre formatos `.ldt` y `.ies` y alcance del Direct Link.

- **Slide 7: Auditoría con IA segura y verificación humana**
  - Checklist de anonimización previa antes de consultar ChatGPT o Claude.
  - Ejemplo real de prompt de cruce de tablas CSV y muestra de alucinación típica de IA detectada por el técnico.

- **Slide 8: Caso práctico y criterios de entrega profesional**
  - Resumen visual de las 4 zonas del centro logístico farmacéutico, entregables exigidos y plantilla del *Visual Disclaimer* obligatorio.

### Ficha de trabajo (Actividad 1 y control de cámara)
- **Documento:** `Ficha_T6_Control_Luminico_Twinmotion.md` / hoja impresa o editable con tabla de registro por cámara:
  - ID de vista / Recinto
  - Código de luminaria BIM
  - Flujo nominal proyecto ($\text{lm}$) vs. Flujo aplicado en Twinmotion ($\text{lm}$)
  - CCT proyecto ($\text{K}$) vs. CCT en escena ($\text{K}$)
  - Archivo `.ies` asignado (Sí/No + nombre)
  - `Cone Angle` / `Source Size` / `Attenuation (m)`
  - `Auto-Exposure` (OFF) + EV manual + `White Balance (K)`
  - Observaciones de legibilidad eléctrica (cuadros, señalética, emergencias).

### Plantilla técnica práctica (Matriz de auditoría + Prompt seguro)
```text
ROL: Actúas como auditor técnico de consistencia de datos lumínicos entre proyecto fotométrico y modelo de visualización.
RESTRICCIONES DE SEGURIDAD: Todos los datos han sido anonimizados. No inferir cumplimiento legal ni sustituir cálculos normativos. Si falta un dato o hay ambigüedad de unidades, indícalo explícitamente sin inventar valores.

TAREA:
Compara las dos tablas CSV adjuntas correspondientes al proyecto anonimizado "PROYECTO_A":
- Tabla 1: Cuadro aprobado del cálculo lumínico (campos: Codigo_Tipo, Flujo_lm, Potencia_W, CCT_K, Optica_IES, Zona).
- Tabla 2: Parámetros exportados/registrados de la escena Twinmotion (campos: Codigo_Tipo, Valor_Intensidad, Unidad_TM, CCT_K, IES_Asignado, Atenuacion_m, Altura_Montaje_m).

DEVUELVE UNA TABLA MARKDOWN CON:
1. Codigo_Tipo
2. Discrepancia detectada (flujo, unidades confundidas, CCT, ausencia de .ies o atenuacion <= altura de montaje)
3. Riesgo visual o de fidelidad técnica
4. Accion de verificacion recomendada para el ingeniero responsable (sin dar por validada ninguna norma)
```

### Lecturas y recursos recomendados
- Documentación oficial de iluminación, cámaras, exposición y *Path Tracer* en **Twinmotion Documentation (Epic Games)**: consultar siempre la versión exacta instalada en el estudio, ya que nombres de controles entre Lumen, Standard y Path Tracer varían entre versiones.
- Guías técnicas sobre formatos fotométricos **IES TM-33 / ANSI/IES LM-63** (`.ies`) y **Eulumdat** (`.ldt`) en fabricantes de iluminación técnica profesional (p. ej., catálogos abiertos de luminarias industriales y terciarias).
- Normativa de referencia ilustrativa (de verificación obligatoria según país, jurisdicción y edición vigente):
  - **UNE-EN 12464-1** (Iluminación de los lugares de trabajo — Parte 1: Lugares de trabajo en interiores).
  - **Reglamento Electrotécnico para Baja Tensión (REBT, RD 842/2002 en España)** e ITC aplicables (p. ej., alumbrado de emergencia y locales técnicos) o códigos nacionales equivalentes (**IEC 60364**, **NFPA 70 / NEC**).
  - **CTE DB-HE3 / DB-SUA4** (España) o **RD 1890/2008** (eficiencia energética en alumbrado exterior) cuando proceda.
- *Advertencia expresa:* Toda referencia normativa, ficha técnica o versión de software citada debe validarse antes de su uso profesional frente al boletín oficial vigente, la autoridad competente local y el manual oficial de la versión de software empleada.

### Glosario de términos clave

| Término | Definición |
| :--- | :--- |
| **Flujo luminoso ($\text{lm}$)** | Cantidad total de energía radiante ponderada por la sensibilidad del ojo humano que emite una fuente de luz por unidad de tiempo, medida en lúmenes. |
| **Iluminancia ($\text{lx}$)** | Flujo luminoso incidente por unidad de superficie ($\text{lm}/\text{m}^2$), parámetro normativo verificado en software fotométrico (como DIALux) y nunca en un render. |
| **Temperatura de color correlacionada (CCT)** | Magnitud en kelvin ($\text{K}$) que describe la tonalidad aparente de una fuente de luz blanca desde cálida ($\approx 2700\text{ K}$) hasta luz día fría ($\approx 6500\text{ K}$). |
| **Valor de exposición (EV)** | Parámetro fotográfico de cámara que controla la luminosidad global captada en una escena; su bloqueo manual garantiza comparaciones honestas entre variantes. |
| **Balance de blancos (*White Balance*)** | Ajuste en kelvin de la cámara virtual que compensa la dominante cromática ambiental para definir qué tonalidad se representa como blanco neutro. |
| **Ángulo de haz (*Cone Angle*)** | Apertura angular del cono luminoso emitido por un foco o proyector, que determina si la distribución es intensiva, media o extensiva. |
| **Radio de atenuación (*Attenuation*)** | Distancia máxima configurada en motores en tiempo real hasta la cual una fuente artificial contribuye a iluminar superficies antes de recortarse por rendimiento. |
| **Perfil fotométrico `.ies`** | Archivo estandarizado que almacena la distribución espacial de intensidades en candelas ($\text{cd}$) de una luminaria real para reproducir con fidelidad su curva óptica. |

---

## 9. Adaptaciones

### Sesión presencial
- **Organización del aula:** Trabajo por estaciones individuales o parejas con monitores calibrados de forma similar para evitar que el brillo dispar de portátiles engañe en la evaluación de EV y temperatura de color.
- **Dinámica recomendada:** Proyección comparativa en pantalla grande de los dos modos (Lumen vs. Path Tracer) en la Actividad 2; puesta en común caminando por mesas (*gallery walk*) durante 10 minutos al cierre del caso práctico para comparar contrastes en la sala CGBT.
- **Contingencia hardware:** Si algún equipo carece de GPU compatible con *Path Tracer* o Lumen avanzado, trabaja en modo estándar/tiempo real optimizado manteniendo activos los controles de EV, Kelvin, `.ies` y atenuación, y ejecuta un render puntual en el equipo del formador.

### Sesión online síncrona
- **Organización de salas:** Uso de salas pequeñas (*breakout rooms*) de 3–4 participantes para la Actividad 1 (análisis de 4 capturas) y el caso práctico; el formador rota por las salas solicitando compartir pantalla de las propiedades de cámara y luz de Twinmotion.
- **Gestión de ancho de banda y render:** Indicar al alumnado que comparta capturas PNG ligeras ($1920 \times 1080$) en el tablero colaborativo (Miro/Padlet/Teams) en lugar de enviar archivos `.tm` pesados durante la clase en vivo.
- **Control de tiempos:** Utilizar temporizador visible en pantalla para las fases prácticas (p. ej., 20 min calibración interior + 15 min exteriores) y recoger la tabla CSV de la Actividad 3 por formulario antes de la pausa.

### Sesión asíncrona
- **Material autónomo guiado:** Proporcionar 3 microvídeos pregrabados de 8–12 minutos demostrando: (1) flujo nominal y bloqueo de EV, (2) ajuste de CCT y *White Balance*, y (3) `.ies`, `Cone Angle`, `Attenuation` y niebla sutil.
- **Hitos de entrega escalonados:**
  1. Subida al foro técnico de la Actividad 1 con captura anotada y respuesta obligatoria constructiva a un compañero.
  2. Entrega del paquete del caso práctico (3 capturas calibradas + ficha CSV con parámetros + auditoría con prompt anonimizado + nota de descargo).
- **Retroalimentación del formador:** Revisión asíncrona mediante vídeo-feedback breve (3–5 minutos por entrega) señalando directamente sobre las capturas cualquier indicio de autoexposición activa, deriva de Kelvin o niebla excesiva, acompañado de la rúbrica cumplimentada.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Consolida la importación de geometría MEP y familias de luminarias desde Revit (Bloque 3, Bloque 4 y Temas 1–2 del Bloque 5), el ajuste de materiales y reflectancias (Tema 3), la configuración base de iluminación realista (Tema 4), la correcta interpretación e importación de luminarias desde DIALux mediante formatos `.ies`/`.ldt` (Tema 5) y los criterios fotométricos trabajados previamente en el Bloque 2 (Modelado en DIALux).
- **Competencias técnicas que desarrolla:**
  - Calibración perceptual honesta de escenas arquitectónicas y cuartos técnicos en tiempo real.
  - Coordinación cromática y óptica coherente entre especificaciones de catálogo (`.ies`, lm, K) y visualización digital.
  - Control de calidad asistido por IA bajo principios de privacidad de datos y responsabilidad técnica humana.
- **Ubicación en la secuencia del programa (6 bloques / 50 temas):**
  - **Tema anterior (Bloque 5 · Tema 5 — Luminarias importadas desde DIALux):** Abordó qué geometría y archivos fotométricos pueden transferirse de forma realista desde el estudio lumínico hasta Twinmotion; este Tema 6 profundiza en la calibración precisa de lúmenes, Kelvin ($\text{K}$), ángulos de haz, atenuación y exposición de esas luminarias dentro de la escena.
  - **Tema posterior (Bloque 5 · Tema 7 — Inserción de escenarios, fondos y ambientes dinámicos):** Una vez dominados intensidad, color y haces lumínicos sobre la envolvente constructiva, el siguiente paso consiste en contextualizar la escena con mobiliario, vegetación, personas y capas selectivas sin ocultar luminarias, bandejas ni cuadros eléctricos calibrados.
- **Evidencia de aprendizaje:** Dossier digital compuesto por las capturas comparativas calibradas del caso práctico (almacén, sala CGBT, oficina/recepción y muelles), la matriz de trazabilidad verificada manualmente tras consulta segura a IA y el bloque de descargo técnico que delimita visualización frente a cálculo normativo.

---

## Siguientes pasos para el formador

1. **Verificar compatibilidad de escena base:** Abrir `Bloque5_T6_Base.tm` en la versión exacta de Twinmotion instalada en el aula/campus y comprobar que los 3 archivos `.ies` de muestra cargan correctamente sin rutas absolutas rotas.
2. **Preparar los 4 renders trampa de la Actividad 1:** Confirmar que las capturas reflejan de forma nítida los fallos previstos (autoexposición, mezcla $3000\text{ K}$/$6500\text{ K}$, corte por atenuación y niebla excesiva) e incluir el extracto PDF/CSV real de DIALux para contraste.
3. **Revisar los CSV anonimizados de la Actividad 3:** Asegurarse de que no contienen nombres reales de empresas, ubicaciones ni metadatos de autor antes de distribuirlos al alumnado para sus pruebas en asistentes de IA.
4. **Probar el prompt de auditoría antes de clase:** Ejecutar la plantilla en ChatGPT o Claude para observar qué discrepancias detecta con facilidad y qué posibles confusiones (p. ej., sobre luminarias de emergencia o unidades $\text{lm/lx}$) conviene mostrar en directo como ejemplo pedagógico de verificación crítica.
5. **Validar normativa de referencia local:** Adaptar las menciones ilustrativas de reglamentos (REBT, CTE DB-HE3/SUA4, RD 1890/2008, UNE-EN 12464-1 o equivalentes nacionales según ubicación de los alumnos) recordando al inicio y cierre de la sesión que ninguna visualización reemplaza al proyecto eléctrico o fotométrico oficial.
