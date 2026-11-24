# Tema 3. Ajuste de materiales, texturas y acabados para elementos eléctricos

## 1. Ficha del tema

| Campo | Detalle |
| :--- | :--- |
| **Título del tema** | Tema 3. Ajuste de materiales, texturas y acabados para elementos eléctricos |
| **Bloque y posición dentro del programa** | Bloque 5: Visualización y renderizado con Twinmotion · Tema 3 de 10 (Tema 32 de 50 del programa de 6 módulos) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Haber completado los Temas 1 y 2 del Bloque 5 (escena sincronizada con *Keep Hierarchy* en MEP y catálogo de materiales puente en Revit); conocimientos básicos de tipologías de canalizaciones, cuadros y luminarias del Módulo 1 y Módulo 3 |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado será capaz de configurar y calibrar materiales PBR físicamente coherentes en Twinmotion para canalizaciones metálicas/PVC, envolventes de tableros, mecanismos, difusores emisores LED y redes vistas (*exposed MEP*), diferenciando el aspecto visual del material de las propiedades fotométricas certificadas en DIALux y del código reglamentario de identificación de obra. |

---

## 2. Objetivos de aprendizaje

Al concluir esta unidad didáctica, el alumnado será capaz de:

1. **Analizar** los parámetros del flujo PBR (*Albedo*, *Roughness*, *Metallic*, *Normal/Bump* y escala de mapeado UV) para diagnosticar por qué un material eléctrico luce artificial, quemado o distorsionado en una escena 3D *(Nivel de Bloom: Analizar)*
2. **Aplicar** acabados PBR calibrados en Twinmotion sobre acero galvanizado, tubería PVC, envolventes metálicas pintadas al horno (p. ej. RAL 7035), aluminio anodizado y policarbonato de mecanismos respetando la escala real de texturas *(Nivel de Bloom: Aplicar)*
3. **Diferenciar** la función visual de un material emisor (*Glow/Emissive*) en el difusor de una luminaria frente a la emisión fotométrica real proyectada por una fuente de luz en escena o calculada en DIALux *(Nivel de Bloom: Analizar)*
4. **Diseñar** sistemas de codificación cromática y acabados arquitectónicos para instalaciones eléctricas vistas (*exposed MEP*) que faciliten la lectura técnica y estética sin atribuir validez normativa automática al código de colores visual *(Nivel de Bloom: Crear)*
5. **Evaluar** el impacto de texturas de alta resolución y superficies emisivas complejas sobre la VRAM y el ruido de renderizado, equilibrando fidelidad visual y rendimiento en tiempo real *(Nivel de Bloom: Evaluar)*

---

## 3. Contenidos esenciales

### 3.1. Fundamentos PBR aplicados a materiales eléctricos y mapeado UV

#### Explicación breve y clara
El renderizado basado en física (**PBR**, *Physically Based Rendering*) simula cómo interactúa la luz con la materia real a partir de cuatro canales clave: el color base difuso (**Albedo**), el grado de rugosidad microscópica (**Roughness**), la naturaleza conductora o dieléctrica (**Metallic**) y el relieve superficial (**Normal/Bump**). En instalaciones eléctricas reales, los objetos suelen fallar visualmente por tres errores sencillos: usar blancos o negros puros imposibles en la naturaleza, asignar metalicidad errónea a plásticos o pinturas, o estirar texturas repetitivas a lo largo de bandejas de `30 metros` sin ajustar el tamaño UV en metros.

#### Conceptos clave
- **Albedo / Color base sin sombras ni quemados:** ningún material físico real refleja el `100 %` ni el `0 %` de la luz incidente; conviene mantener valores de albedos claros por debajo de `~220–230` (sobre `255` en sRGB) y oscuros por encima de `~20–30` para evitar perder textura y saturar el visor.
- **Metallic (0 frente a 1) y Roughness (Rugosidad):** los metales desnudos (acero galvanizado, cobre, aluminio cepillado) llevan `Metallic ≈ 1,0` y regulan su brillo mediante `Roughness` (`0,20` a `0,55`), mientras que PVC, policarbonatos y pinturas RAL opacas son dieléctricos (`Metallic = 0,0`).
- **Mapas de relieve (*Normal / Bump*) y perforación (*Opacity/Alpha*):** permiten simular chapas perforadas de bandejas, rejillas de ventilación de cuadros o estrías de placas sin modelar millones de polígonos geométricos adicionales.
- **Escala física del mapeado (*UV Scale / Triplanar*):** ajuste en centímetros o metros de la baldosa de textura; una textura de chapa galvanizada pensada para `1 m × 1 m` debe escalarse coherentemente para evitar cristales gigantes sobre una bandeja de `300 mm` de ancho.

#### Definiciones necesarias
- **PBR (*Physically Based Rendering*):** metodología de sombreado que calcula la reflexión especular y difusa respetando la conservación de la energía física de la luz sobre superficies metálicas y no metálicas.
- **Mapeado triplanar (*Triplanar / Box Mapping*):** técnica de proyección automática de texturas desde los tres ejes ortogonales `(X, Y, Z)` útil para bandejas y conductos exportados desde BIM que carecen de coordenadas UV desplegadas limpias.

#### Ejemplo práctico realista
En una sala de cuadros de `45 m²`, una bandeja perforada de acero galvanizado de `300 mm × 60 mm` (`L = 14 m`) importada desde Revit luce inicialmente como un espejo plástico blanco irreal porque trae `Albedo = RGB(255, 255, 255)`, `Metallic = 0,0` y `Roughness = 0,05`. Al recalibrarla en Twinmotion: se asigna `Metallic = 1,0`, un `Albedo` gris metálico neutro (`RGB 175, 180, 184`), `Roughness = 0,38` con mapa sutil de floreado de cinc (*spangle*) escalado a `0,35 m`, y mapa *Normal/Opacity* de chapa perforada (o relieve ligero si la malla ya es sólida). El resultado refleja suavemente las pantallas LED del techo sin cegar la cámara y mantiene `58 FPS` en visor. *(Nota: las reflectancias visuales aproximadas de Twinmotion sirven únicamente para apariencia; los factores de reflexión $\rho$ de cálculo lumínico deben verificarse en DIALux conforme a la normativa aplicable)*.

#### Errores frecuentes
- Asignar `Metallic = 0,8` o `1,0` a una carcasa de tubo PVC gris o a un armario eléctrico pintado al horno RAL 7035 (la pintura epoxi cubre el metal; su respuesta óptica superficial es dieléctrica con `Metallic = 0,0`).
- Utilizar blanco puro `RGB(255,255,255)` en mecanismos de pared o difusores, provocando pérdida de volumen en aristas y sobreexposición cuando incide luz directa.
- Dejar una textura `4K` u `8K` sin comprimir en docenas de elementos pequeños secundarios (abrazaderas, tapas ciegas), consumiendo cientos de megabytes de VRAM innecesarios.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué una pintura epoxi RAL 7035 sobre un armario metálico debe configurarse con `Metallic = 0,0` en un flujo PBR mientras que una bandeja galvanizada sin pintar usa `Metallic = 1,0`?
2. ¿Qué problema visual y fotográfico produce usar `Albedo = RGB(255,255,255)` en techos blancos o cajas de mecanismos?
3. ¿Qué ventaja aporta activar un mapeado cúbico o triplanar sobre tuberías y canalizaciones procedentes de Revit MEP?

---

### 3.2. Acabados realistas de canalizaciones, envolventes y mecanismos

#### Explicación breve y clara
Cada componente de una instalación eléctrica posee una huella visual característica que el ojo humano reconoce al instante: no brilla igual una bandeja portacables galvanizada Sendzimir que un tubo rígido de acero inoxidable en una industria alimentaria, un tubo PVC gris rígido en garaje o la chapa texturizada de un Cuadro General de Baja Tensión (CGBT). Configurar seis o siete materiales patrón bien calibrados —y guardarlos en la biblioteca de usuario (*User Library*) de Twinmotion— permite vestir en pocos minutos cualquier proyecto nuevo con un acabado verosímil y coherente.

#### Conceptos clave
- **Bandejas galvanizadas y de rejilla:** acero con rugosidad media (`Roughness ~0,32–0,45`), variación sutil de tono metálico (*grunge/spangle* muy ligero) y detalle de perforación o alambre sin artefactos de moaré a distancia.
- **Tubería rígida PVC vs. EMT/acero:** el PVC técnico presenta color gris medio (`~RAL 7035`) mate-satinado (`Metallic = 0,0`, `Roughness ~0,42–0,55`), mientras el tubo de acero galvanizado EMT refleja anillos de luz longitudinales (`Metallic = 1,0`, `Roughness ~0,28–0,38`).
- **Envolventes metálicas de cuadros y CGBT:** chapa pintada en polvo texturizada (típico gris claro `RAL 7035` o `RAL 7032`), con `Metallic = 0,0`, micro-relieve fino (*Normal* de piel de naranja sutil a escala milimétrica) y juntas oscuras en puertas y cerraduras.
- **Mecanismos, placas y señalización:** diferenciación clara entre tecla/tapa termoplástica satinada (`Roughness ~0,35`), marco en aluminio anodizado o vidrio templado (con índice de refracción/reflexión controlado) y pictogramas nítidos en rótulos de riesgo eléctrico o emergencia.

#### Definiciones necesarias
- **Efecto moaré (*Moiré Pattern*):** patrón visual ondulado e indeseado que aparece cuando una textura repetitiva muy fina (como micro-perforaciones de una bandeja o rejilla de ventilación) se observa a distancia media sin filtrado adecuado o con geometría densa.
- **Biblioteca de usuario (*User Library*):** repositorio local personal dentro de Twinmotion donde el técnico guarda materiales PBR ya calibrados, luminarias compuestas y objetos listos para arrastrar a futuros proyectos.

#### Ejemplo práctico realista
En un garaje comunitario de `2.400 m²` con instalación vista bajo forjado de hormigón, se aplican tres acabados patrón desde la *User Library*: (1) `ELE_Tubo_PVC_RAL7035` con `Albedo` gris técnico, `Metallic = 0,0`, `Roughness = 0,48`; (2) `ELE_Bandeja_Galv_Sendzimir` con `Metallic = 1,0`, `Roughness = 0,36`, mapa *Normal* ligero a escala `0,25 m`; y (3) `ELE_Cuadro_EP_Poliester` para cajas estancas en rampas con `Metallic = 0,0`, `Roughness = 0,32`. Al contrastar el tubo PVC junto a la bandeja metálica bajo los focos, el cliente distingue inmediatamente qué tramos son PVC y cuáles canalización metálica, mejorando la comprensión constructiva de la partida presupuestaria.

#### Errores frecuentes
- Aplicar un material de «cromo espejo» (`Roughness = 0,02`) a bandejas y tubos metálicos, convirtiendo toda la instalación eléctrica en un espejo irreal que distrae la atención.
- Descuidar la escala del relieve (*Bump/Normal*) en chapa pintada RAL 7035, haciendo que un cuadro eléctrico parezca revocado con cemento grueso en planos cercanos.
- Pegar imágenes con logos, tensiones o texto con baja resolución en puertas de cuadros que salen invertidas en espejo por culpa de la orientación UV de la familia Revit.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué parámetros diferencian visualmente una bandeja de acero galvanizado de un armario eléctrico pintado en RAL 7035?
2. ¿Cómo se evita el efecto moaré o ruido visual al representar bandejas perforadas largas vistas desde media distancia?
3. ¿Qué ventajas operativas aporta construir una *User Library* propia con materiales eléctricos calibrados tras el primer proyecto?

---

### 3.3. Materiales emisores LED (*Emissive*) y ópticas de luminarias

#### Explicación breve y clara
Uno de los errores más extendidos al visualizar luminarias en Twinmotion es creer que basta con asignar un material **Emissive / Glow** al difusor de una pantalla LED para «iluminar» la habitación. Un material emisor hace que el plástico opal o tira LED aparezca encendida a ojos de la cámara (fundamental para que el aparato no parezca apagado), pero en renderizado en tiempo real estándar su aporte lumínico real sobre suelos y mesas es mínimo o nulo, y en *Path Tracer* las mallas emisivas pequeñas/complejas generan intenso ruido granular (*fireflies*) y tiempos de cálculo altos. La práctica profesional separa claramente **la apariencia del difusor encendido** (material *Emissive* calibrado con moderación) de **la proyección lumínica en el espacio** (fuente de luz puntual, lineal o fotométrica `.ies` que veremos a fondo en los Temas 4 y 5).

#### Conceptos clave
- **Difusor encendido vs. emisor de luz en escena:** el material emisivo da presencia visual a la superficie de la luminaria (tira LED en foseado, panel opal, piloto de emergencia), mientras que el objeto de luz (*Light*) aporta la distribución luminosa real en el local.
- **Control del valor emisivo y *Bloom*:** valores exagerados de brillo emisivo saturan el canal blanco, eliminan los detalles de la carcasa adyacente por efecto halo (*bloom*) y arruinan el contraste de la imagen.
- **Temperatura de color aparente en el difusor:** coherencia entre el tono del material emisivo (blanco cálido ~`2700–3000 K`, neutro ~`4000 K`, frío ~`5000–6500 K`) y la luz asociada en escena, evitando un difusor azulado proyectando luz cálida.
- **Ópticas microprismáticas, reflectores y vidrio:** combinación de cuerpo en aluminio anodizado/lacado, reflector especular controlado y vidrio o policarbonato translúcido delante de la fuente para mayor realismo en primeros planos.

#### Definiciones necesarias
- **Material *Emissive* (autoiluminado):** propiedad de sombreado que hace que una superficie emita brillo visual propio independientemente de la luz que recibe, configurable en intensidad aparente y temperatura cromática.
- **Ruido por malla emisiva (*Emissive Noise / Fireflies*):** artefactos luminosos en forma de puntos brillantes aleatorios que aparecen en motores por trazado de rayos (*Path Tracer*) cuando la luz indirecta proviene de múltiples triángulos pequeños con material emisivo en lugar de luces analíticas optimizadas.

#### Ejemplo práctico realista
En el pasillo de un hotel de `4 estrellas`, hay `32 m` de foseado lineal LED (`3000 K`) en el perímetro del falso techo y `16` downlights circulares empotrados. Si el técnico solo asigna `Emissive = 80` a los difusores sin colocar luces reales en Twinmotion, los focos brillan como discos blancos sobre un pasillo en penumbra. Si ajusta el difusor de los downlights a un `Emissive` moderado (`~3–8` según exposición de la escena, tono cálido `~3000 K`) y el foseado a un brillo suave que no queme la escayola adyacente, acoplando debajo fuentes de luz coherentes (ver Temas 4 y 5), el techo mantiene nitidez en el aro metálico del downlight y una gradación realista en las paredes. *(Recordatorio: el nivel visual de brillo del difusor en Twinmotion no guarda equivalencia certificada con luminancias en $\text{cd/m}^2$ ni con el índice $UGR$ calculado en DIALux).*

#### Errores frecuentes
- Subir la intensidad del material emisivo a valores desorbitados para intentar iluminar una nave entera sin colocar fuentes de luz reales.
- Usar el mismo material emisor en las pantallas de techo y en los rótulos de salida de emergencia sin variar color ni intensidad, logrando que el pictograma verde pierda legibilidad bajo un halo blanco quemado.
- Dejar encendido el material emisivo en luminarias de una escena diurna donde el circuito debería mostrarse apagado o de reserva, confundiendo al cliente sobre el funcionamiento de la escena.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué un material *Emissive* en el difusor de un panel LED no sustituye a la fuente de luz proyectada en Twinmotion ni mucho menos al cálculo en DIALux?
2. ¿Qué ocurre en *Path Tracer* si intentamos iluminar una oficina compleja únicamente mediante cientos de triángulos pequeños con material emisivo?
3. ¿Cómo se coordina el color del material emisivo del difusor con el tipo de luminaria (ambiente cálido vs. zona técnica neutra/fría)?

---

### 3.4. Codificación cromática visual para instalaciones vistas (*Exposed MEP*)

#### Explicación breve y clara
En proyectos de arquitectura contemporánea —oficinas creativas, locales comerciales, restaurantes o naves de diseño—, las instalaciones eléctricas quedan frecuentemente vistas (*exposed MEP*). En Twinmotion se presentan dos necesidades comunicativas distintas: por un lado, la **presentación estética final** (bandejas y conductos integrados en negro mate RAL 9005, blanco del techo o acabado galvanizado limpio); por otro, la **presentación técnica didáctica** para clientes, mantenedores o equipos de coordinación, donde resulta muy eficaz aplicar una **codificación cromática visual** por sistemas (Fuerza Normal, Alumbrado, Emergencia/PCI, SAI/Datos) alineada con las plantillas de filtros de Revit del Bloque 4. Conviene subrayar siempre que la codificación visual del render es un recurso explicativo y que cualquier código de colores exigido físicamente en obra (conductores, envolventes o señalización de seguridad) debe comprobarse según la normativa vigente del país aplicable.

#### Conceptos clave
- **Doble paleta (*Estética* vs. *Didáctica por sistemas*):** capacidad de guardar dos estados de escena o conjuntos de materiales sobre la misma geometría MEP (uno realista para dirección/interiorismo y otro codificado por colores para mantenimiento/propiedad).
- **Acabados arquitectónicos *Exposed MEP*:** negro mate (`RAL 9005`, `Roughness ~0,55–0,65`), blanco mimetizado con el forjado, acero galvanizado visto o acentos metálicos cobrizos coherentes con luminarias suspendidas.
- **Coherencia con planos del Bloque 4:** utilizar en la versión didáctica de Twinmotion una leyenda de colores análoga a la de los filtros de vista de Revit (p. ej. azul Fuerza, amarillo/naranja Alumbrado, rojo Emergencia/PCI, cian Datos) para que cliente y obra lean ambos soportes sin confusión.
- **Separación de requisitos de obra:** distinguir con claridad la pintura estética o filtro visual 3D frente a la identificación reglamentaria de conductores (fase, neutro, PE) y canalizaciones de seguridad exigida en montaje real según normativa vigente.

#### Definiciones necesarias
- ***Exposed MEP* (Instalación vista):** criterio proyectual donde canalizaciones, bandejas, cajas de derivación y luminarias permanecen sin falso techo oculto, integrándose como elemento arquitectónico visible y registrable.
- **Vista esquemática codificada (*Color-Coded System View*):** estado visual en Twinmotion que tiñe selectivamente bandejas o tubos por sistema eléctrico manteniendo el contexto arquitectónico neutro para explicar trazados y mantenimiento.

#### Ejemplo práctico realista
En una oficina de arquitectura e ingeniería de `900 m²` con losa de hormigón vista, el promotor quiere ver dos propuestas: (1) cómo quedarán visualmente las bandejas y tubos pintados en negro mate `RAL 9005` (`Albedo RGB 28,29,31`, `Metallic = 0,0`, `Roughness = 0,58`) suspendidos a `3,20 m` junto con luminarias lineales negras; y (2) entender dónde discurre la red de alimentación normal frente al circuito respaldado por SAI y la línea de alumbrado de emergencia para planificar futuras ampliaciones de puestos de trabajo. Gracias a que en el Tema 2 se asignaron materiales puente distintos por sistema en Revit (`ELE_Bandeja_Normal`, `ELE_Bandeja_SAI`, `ELE_Tubo_Emergencia`), el equipo genera en 10 minutos ambos pares de imágenes sin duplicar archivos `.rvt`. *(Nota de verificación normativa: las características físicas reales de resistencia al fuego, libre de halógenos o señalización reglamentaria en obra de los circuitos de emergencia y SAI se verifican en especificaciones técnicas y reglamento vigente aplicable, p. ej., REBT en España o norma nacional equivalente).*

#### Errores frecuentes
- Colocar colores saturados chillones (`RGB 255,0,0` o `0,255,0` puros) en la vista didáctica, creando escenas agresivas que impiden distinguir el volumen y las sombras de la bandeja.
- Presentar una escena codificada por colores sin incluir una leyenda explícita en pantalla, o confundir al instalador haciéndole creer que las bandejas de obra deben pintarse de azul o amarillo si no está especificado en el proyecto.
- Unificar en Revit todas las bandejas bajo un solo material puente genérico, impidiendo después aplicar diferenciación cromática en Twinmotion sin reasignar familias.

#### Preguntas que el alumnado debería poder responder
1. ¿Cómo se prepara el modelo en Revit (conectando con el Tema 2) para poder alternar fácilmente entre una visualización *Exposed MEP* realista y una codificación por sistemas en Twinmotion?
2. ¿Por qué conviene evitar colores RGB puros saturados incluso en vistas didácticas codificadas por sistema eléctrico?
3. ¿Qué advertencia técnica debe acompañar a una visualización codificada por colores para evitar malentendidos con el instalador o con requisitos reglamentarios de obra?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** alterna diagnóstico visual de defectos PBR, microcápsulas técnicas con demostración en vivo, laboratorio práctico de calibración de biblioteca eléctrica y resolución de un caso real de oficina en formato *exposed MEP*.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
|---|---:|---|---|
| **1. Apertura y activación visual** | 20 min | Conecta con `Practica_T2_v02.tm`; lanza evaluación diagnóstica breve y dirige la **Actividad 1** mostrando 5 fallos clásicos de materiales eléctricos en una sala técnica. | Inspecciona la escena proyectada, detecta los 5 errores PBR (metalicidad, albedo puro, UV estirada, emisor sin luz, escala de relieve) y propone correcciones. |
| **2. Microlearning técnico I (Fundamentos PBR y canalizaciones/tableros)** | 30 min | Expone apartados 3.1 y 3.2: parámetros *Albedo*, *Metallic*, *Roughness*, *Normal* y mapeado triplanar; calibra en directo galvanizado, PVC, RAL 7035 y mecanismos en Twinmotion. | Sigue la demostración calibrando sus parámetros de referencia en la ficha de trabajo y anotando rangos recomendados para metales frente a dieléctricos. |
| **3. Actividad práctica de aplicación técnica** | 50 min | Dinamiza la **Actividad 2** (creación de biblioteca de 6 materiales patrón eléctricos y aplicación sobre la escena del Tema 2); revisa en pantallas reales que no existan albedos quemados ni escalas UV rotas. | Configura en Twinmotion los 6 materiales eléctricos PBR calibrados, los guarda en su *User Library* y los aplica a la escena sincronizada de la nave/oficina. |
| **4. Microlearning técnico II (Emisores LED y codificación *Exposed MEP*)** | 25 min | Expone apartados 3.3 y 3.4: separación entre difusor *Emissive* y proyección lumínica, prevención de *fireflies* y doble paleta realista vs. codificada por sistemas. | Comprueba el efecto de bajar el *Bloom* y calibrar tonos de emisores LED; planifica los materiales diferenciados por sistema para *exposed MEP*. |
| **5. Análisis de caso práctico** | 45 min | Presenta el caso **Oficinas y Showroom Distrito 22@ (Barcelona)** con requisitos estéticos *exposed MEP* y necesidades técnicas de cliente y VRAM; acompaña a los equipos de 3-4 personas. | En equipos, diseña la matriz de materiales realista vs. didáctica, resuelve problemas de texturas 4K/VRAM y define la validación independiente respecto a DIALux y normativa vigente. |
| **6. Puesta en común y crítica visual** | 25 min | Modera la revisión de propuestas de 2-3 equipos, proyecta contrastes de *exposed MEP* y refuerza la distinción entre acabado estético, código visual y normativa en obra. | Presenta sus criterios de selección PBR y debate soluciones ante los requisitos contrapuestos de arquitectura, propiedad e ingeniería. |
| **7. Transferencia al proyecto real y cierre** | 45 min | Guía la **Actividad 3** (paleta de materiales del proyecto propio y ficha comparativa, 25 min); realiza la evaluación sumativa breve, autoevaluación y puente hacia el **Tema 4 (Iluminación realista)** (20 min). | Aplica su paleta calibrada al proyecto integrador/real, completa la prueba de cierre y deja los materiales listos para configurar la iluminación global en el Tema 4. |
| **TOTAL** | **240 min** | — | — |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «Laboratorio forense: 5 fallos PBR en un cuarto eléctrico»

- **Nombre:** Diagnóstico rápido de errores de sombreado y texturizado eléctrico
- **Objetivo:** Entrenar el ojo técnico del alumnado para detectar de inmediato por qué una escena eléctrica en Twinmotion parece de «plástico barato» o «videojuego antiguo».
- **Instrucciones para el alumnado:**
  1. Observad las 5 capturas de detalle proyectadas de una sala de cuadros y pasillo técnico:
     - *Imagen A:* tubo PVC gris que refleja el paisaje como si fuera acero cromado.
     - *Imagen B:* bandeja galvanizada de `15 m` donde el patrón metálico se ve estirado en rayas gigantes.
     - *Imagen C:* armario CGBT blanco plano donde desaparecen las aristas de las puertas bajo un foco.
     - *Imagen D:* pantalla lineal LED con difusor amarillo neón quemado que proyecta cero luz sobre la mesa de trabajo inferior.
     - *Imagen E:* chapa de cuadro eléctrico con textura *Normal* de gotelé grueso irreal.
  2. En grupos de 3 personas (8 minutos), indicad para cada imagen qué parámetro PBR está mal ajustado (*Albedo*, *Metallic*, *Roughness*, *Normal/Scale*, *Emissive*) y qué valor orientativo aplicaríais para corregirlo.
  3. Poned en común vuestras conclusiones en plenario.
- **Materiales necesarios:** Diapositiva o galería con las 5 imágenes de fallo preparadas y tabla de diagnóstico en la ficha de trabajo.
- **Tiempo estimado:** 15 minutos (integrado en la Fase 1).
- **Rol del formador:** Recoger diagnósticos en pantalla revelando los valores erróneos reales de cada imagen para fijar intuición física desde el minuto uno.
- **Producto o entregable esperado:** Tabla de diagnóstico con las 5 correcciones PBR consensuadas.
- **Criterios de éxito:** El 100 % del grupo identifica correctamente el error de metalicidad en PVC, el blanco saturado `RGB 255` en el armario, el problema UV en bandeja y la diferencia entre material emisor y fuente de luz.

---

### Actividad 2 (Aplicación técnica): «Biblioteca PBR eléctrica de 6 materiales patrón»

- **Nombre:** Calibración y guardado en *User Library* de materiales eléctricos realistas
- **Objetivo:** Construir una librería reutilizable de materiales eléctricos físicamente coherentes en Twinmotion sobre la escena sincronizada del Tema 2.
- **Instrucciones para el alumnado:**
  1. Abrid vuestra escena `Practica_T2_v02.tm` (o la escena base suministrada del Tema 3 con los materiales puente ya separados).
  2. Configurad los **6 materiales patrón** respetando los criterios físicos trabajados:
     - **Mat 1 (`ELE_Bandeja_Galv`):** `Metallic = 1,0`, `Albedo` gris acero medio (`~175`), `Roughness = 0,35–0,42`, mapeado cúbico/triplanar escalado a proporción real (`0,30–0,50 m`).
     - **Mat 2 (`ELE_Tubo_PVC`):** `Metallic = 0,0`, `Albedo` gris RAL 7035 (`~195–205`), `Roughness = 0,48–0,55`.
     - **Mat 3 (`ELE_Cuadro_RAL7035`):** `Metallic = 0,0`, `Albedo` gris claro seguro (`≤ 215`), micro-relieve sutil (`Bump` muy bajo) y `Roughness = 0,35–0,45`.
     - **Mat 4 (`ELE_Mecanismo_Satinado`):** cuerpo policarbonato mate-satinado (`Metallic = 0,0`, `Roughness = 0,38`) y detalle de marco en aluminio cepillado (`Metallic = 1,0`, `Roughness = 0,28`).
     - **Mat 5 (`ELE_Lum_NegroMate`):** carcasa arquitectónica negra mate (`Albedo RGB ~28,28,30`, `Metallic = 0,0`, `Roughness = 0,55–0,65`) o aluminio anodizado.
     - **Mat 6 (`ELE_Lum_Difusor_LED`):** material *Emissive* suave con tono coherente (`~4000 K` neutro o `~3000 K` cálido) calibrado para mostrar encendido limpio sin efecto halo descontrolado.
  3. Guardad los 6 materiales dentro de una carpeta `01_MEP_Electrica` en vuestra **User Library** de Twinmotion y exportad una captura comparativa del cuadro eléctrico y las bandejas.
- **Materiales necesarios:** Twinmotion con escena sincronizada de práctica, texturas metálicas/plásticas incluidas o librería nativa de Twinmotion, ficha de trabajo.
- **Tiempo estimado:** 50 minutos (Fase 3).
- **Rol del formador:** Recorrer puestos/pantallas verificando valores reales de *Albedo*, *Metallic* y escala de textura, evitando acabados espejo irreales o blancos quemados.
- **Producto o entregable esperado:** Carpeta de 6 materiales en *User Library* + archivo `Practica_T3_v01.tm` + captura técnica de detalle.
- **Criterios de éxito:** Los 6 materiales muestran diferenciación clara entre dieléctricos y metales desnudos, escalado sin estiramientos en tramos largos, difusores legibles sin halo excesivo y respuesta visual limpia en tiempo real.

---

### Actividad 3 (Transferencia a proyecto real): «Doble paleta para proyecto propio: Acabado arquitectónico vs. Codificación de sistemas»

- **Nombre:** Paleta maestra *Exposed MEP* y codificación didáctica por sistemas eléctricos
- **Objetivo:** Trasladar la calibración PBR al proyecto integrador o real del participante creando dos lecturas visuales coherentes: una estética para arquitectura/propiedad y otra codificada por circuitos/sistemas.
- **Instrucciones para el alumnado:**
  1. Completad la **Ficha de Especificación de Materiales Visuales** (Plantilla de la Sección 8) para vuestro proyecto real o integrador, listando cada material puente de Revit junto con sus parámetros PBR previstos (*Albedo*, *Metallic*, *Roughness*, *Scale*) en la **Versión A (Estética Realista)**.
  2. Diseñad en la misma tabla la **Versión B (Codificación Didáctica por Sistemas)** aplicando tonos desaturados equilibrados (p. ej. Fuerza normal, Alumbrado, Emergencia/PCI, SAI/Datos) alineados con la leyenda de los planos PDF de Revit del Bloque 4.
  3. Redactad la nota obligatoria que aclare que la versión codificada en Twinmotion es una ayuda visual de comprensión espacial y no sustituye las especificaciones de cables, envolventes ni códigos de colores normativos en obra (a comprobar según normativa aplicable vigente).
  4. *(Opcional)*: si empleáis ChatGPT o Claude para generar la tabla resumen de leyenda visual para la presentación al cliente usando códigos genéricos anonimizados, revisad manualmente que los tonos, siglas y advertencias técnicas coinciden con vuestro proyecto.
- **Materiales necesarios:** Plantilla técnica práctica (Sección 8), escena del proyecto propio o base del curso.
- **Tiempo estimado:** 25 minutos (integrado en la Fase 7).
- **Rol del formador:** Revisar que la codificación visual no recurra a colores neón ni mezcle requisitos estéticos con exigencias normativas de señalización física sin advertencia.
- **Producto o entregable esperado:** Tabla dual de acabados PBR (Versión A + Versión B) y leyenda técnica verificada para el proyecto integrador.
- **Criterios de éxito:** Coherencia total con los materiales puente del Tema 2, parámetros PBR físicamente válidos en todas las filas y delimitación expresa respecto a cálculo DIALux y normativa vigente en obra.

---

## 6. Caso práctico

### Caso: Oficinas Corporativas y Showroom Tecnológico Distrito 22@ (Barcelona) — Cuando el techo visto choca con la realidad visual

#### Contexto empresarial
**Lumia & Volt Arquitectos Técnicos, S.L.P.** rehabilita una antigua nave textil de `1.600 m²` en Barcelona para convertirla en sede corporativa y *showroom* de una firma tecnológica. El diseño interior deja todas las instalaciones vistas bajo una estructura de bóveda catalana y cerchas de hierro (*exposed MEP*). El proyecto eléctrico incluye `280 m` de bandejas de rejilla y chapa perforada, `340 m` de tubo metálico visto EMT con cajas estancas de aluminio, `42` luminarias lineales suspendidas (`3000 K` en *showroom*, `4000 K` en zona operativa), un centro de proceso de datos (CPD) acristalado alimentado por SAI y un CGBT visto tras mampara acústica.

#### Situación o problema
El cliente final solicita dos entregas visuales antes de aprobar la partida de acabados eléctricos y pintura de techos (valorada en `38.500 €` adicionales respecto a bandeja estándar sin lacar):
1. **Propuesta estética realista:** comprobar si las bandejas y tubos lucen mejor lacados en negro mate (`RAL 9005`) integrándose con las cerchas oscuras, o en acero galvanizado natural visto combinando con las luminarias anodizadas. El arquitecto interiorista se quejó de un primer borrador enviado por un colaborador porque «las bandejas negras parecían barras planas sin volumen, los tubos parecían espejos cromados y los difusores de las luminarias lineales quemaban las fotos».
2. **Versión didáctica de explotación:** el director de mantenimiento del cliente pide una vista explicativa donde pueda distinguir visualmente qué bandejas corresponden a **Fuerza Normal**, **Alumbrado**, **Alimentación crítica SAI/CPD** y **Alumbrado de Emergencia / Detección**, pero el equipo teme saturar la escena y consumir toda la VRAM (`8 GB`) del portátil de reuniones al usar texturas descargadas en `4K` y `8K` de portales externos.

#### Datos disponibles

| Elemento / Material en escena | Error detectado en el borrador 1 | Requisito objetivo en el encargo | Limitación / Dato técnico |
|---|---|---|---|
| **Bandejas vistas (`280 m`)** | Negro puro `RGB(0,0,0)` con `Roughness = 0,95` (sin reflejo ni aristas visibles) | Comparar acabado **RAL 9005 mate** vs. **Galvanizado Sendzimir** | En Revit todas comparten inicialmente `ELE_Bandeja_Gen` sin separar Fuerza / SAI / Emergencia |
| **Tubo metálico EMT (`340 m`)** | `Metallic = 1,0` con `Roughness = 0,04` (aspecto espejo cromado irreal) | Tubo acero galvanizado mate-satinado natural o lacado según opción | Mapeado UV estirado en tramos verticales de `4,5 m` |
| **Difusores lineales LED (`42 uds`)** | Material `Emissive = 120` en color blanco puro; sin fuentes de luz reales abajo | Aspecto de tira LED uniforme legible (`3000 K` / `4000 K`) con brillo contenido | El cálculo de `500 lx` en mesas operativas y `UGR < 19` consta en memoria DIALux aparte |
| **Cuadro CGBT y racks CPD** | Texturas de chapa descargadas a `8192 × 8192 px` (`8K`) por cada elemento | Lectura nítida de chapa RAL 7035 y puerta acristalada | Portátil de presentación con `8 GB VRAM` saturado al `98 %` (`11 FPS`) |
| **Red de Emergencia / SAI** | Sin diferenciación visual respecto a fuerza normal | Vista didáctica clara alineada con leyenda de planos PDF | Prohibido inducir al instalador a pintar físicamente todas las bandejas de colores no especificados en proyecto |

#### Preguntas de análisis
1. ¿Por qué el negro `RGB(0,0,0)` con `Roughness = 0,95` hacía desaparecer el volumen de las bandejas vistas en el borrador 1 y qué valores PBR devuelven legibilidad geométrica al RAL 9005?
2. ¿Qué dos ajustes concretos resuelven el exceso de VRAM (`8 GB` saturados) sin perder calidad perceptible en los planos de cámara de la reunión?
3. ¿Qué cambio previo exige Revit MEP (conectando con el Tema 2) para poder generar la versión didáctica que distingue Fuerza Normal, SAI, Alumbrado y Emergencia?
4. ¿Cómo garantizar que la estética de materiales elegida en Twinmotion no invalida ni sustituye las reflectancias ni la comprobación lumínica ya calculada en DIALux?

#### Tarea a realizar
En equipos de 3-4 personas como equipo técnico de **Lumia & Volt Arquitectos Técnicos**, elaborad una **Propuesta Técnica de Acabados PBR y Optimización de Escena** que incluya:
1. **Tabla de calibración PBR** para las dos opciones estéticas solicitadas (*Opción 1: RAL 9005 Negro Mate arquitectónico*; *Opción 2: Galvanizado Industrial Visto*) detallando rangos de *Albedo*, *Metallic*, *Roughness*, *Normal* y escala de mapeado UV para bandejas, tubos EMT, CGBT y difusores LED.
2. **Plan de optimización de texturas y memoria VRAM** para bajar de `98 %` a un rango fluido en `8 GB VRAM` (resolución adecuada de texturas `1K/2K` vs. `8K`, mapas compartidos y ajuste de emisores).
3. **Estrategia de doble vista (Estética vs. Didáctica por sistemas)** especificando la subdivisión previa de materiales puente en Revit, la paleta cromática equilibrada (evitando RGB puros saturados) y la nota aclaratoria sobre alcance estético frente a especificaciones de obra y cálculo en DIALux conforme a la normativa vigente aplicable.

#### Posibles soluciones o criterios de análisis
- **Corrección del RAL 9005 negro mate:** Sustituir `RGB(0,0,0)` por gris antracita muy oscuro (`~RGB 25,26,28` o `~30,31,34`), `Metallic = 0,0` (es pintura epoxi, no metal desnudo) y `Roughness = 0,52–0,62`, añadiendo sutil variación en *Roughness* para que las aristas superiores capturen reflejos suaves del lucernario y dibujen perfectamente el volumen de la bandeja.
- **Corrección de tubo EMT y galvanizado:** Configurar `Metallic = 1,0`, `Albedo` gris acero claro (`~170–185`), `Roughness = 0,32–0,40` y activar proyección **Triplanar/Box Mapping** a escala `0,30–0,50 m` para eliminar estiramientos en bajantes de `4,5 m`.
- **Optimización de VRAM:** Redimensionar o reemplazar las texturas descargadas en `8K` por texturas `1K` o `2K` (`1024` / `2048 px`, que ocupan entre 16 y 64 veces menos memoria de vídeo que una textura `8K` sin pérdida apreciable en planos arquitectónicos), reutilizar instancias de material y limitar mapas *Normal* complejos únicamente a primeros planos del CGBT y *showroom*.
- **Doble vista y rigor técnico:** Separar en Revit los materiales puente (`ELE_Bandeja_Normal`, `ELE_Bandeja_SAI`, `ELE_Bandeja_Alum`, `ELE_Tubo_Emergencia`) y generar dos estados o variantes de presentación en Twinmotion: la variante *Exposed MEP* realista y la variante *Esquema Técnico por Sistemas* con tonos satinados equilibrados + leyenda idéntica al plano PDF. Aclarar expresamente al cliente y a la constructora que: (a) las reflectancias reales de paramentos y el cumplimiento de `500 lx` / `UGR` se justifican exclusivamente en DIALux según normativa vigente aplicable (p. ej., UNE-EN 12464-1 como referencia ilustrativa a verificar); y (b) los colores de la vista didáctica representan únicamente una codificación visual de presentación, remitiendo a los pliegos de prescripciones técnicas y reglamento eléctrico vigente aplicable (p. ej., REBT en España) para el marcado e identificación real en obra.

#### Preguntas de reflexión final
1. ¿Qué diferencia de coste real y de mantenimiento en obra puede implicar aprobar en Twinmotion unas bandejas lacadas en negro RAL 9005 frente a galvanizado estándar?
2. Si el arquitecto cambia los tonos de las paredes del *showroom* de ladrillo claro a hormigón oscuro durante la fase de visualización en Twinmotion, ¿qué revisión técnica en DIALux habría que volver a ejecutar obligatoriamente?

---

## 7. Evaluación

### Evaluación diagnóstica breve (5 minutos, inicio de sesión)
Cuestionario rápido de 3 preguntas:
1. Un tubo rígido de PVC gris instalado en superficie debe configurarse en un flujo PBR con parámetro `Metallic` cercano a:
   - a) `1,0` porque es una canalización técnica industrial.
   - b) `0,0` porque el PVC es un material dieléctrico (no metálico). *(Correcta)*
   - c) `0,5` para que brille moderadamente.
2. ¿Cuál es la función principal de asignar un material *Emissive* al difusor de una pantalla LED en Twinmotion?
   - a) Garantizar que el local alcanza los lux mínimos reglamentarios.
   - b) Hacer visualmente perceptible que la luminaria está encendida, complementando a la fuente de luz proyectada. *(Correcta)*
   - c) Calcular el índice de deslumbramiento $UGR$ del espacio.
3. ¿Qué sucede en el visor y en las sombras si pintamos un techo técnico con blanco puro `RGB(255, 255, 255)`? *(Respuesta breve)*.

### Evaluación formativa durante la sesión
- Verificación continua del formador sobre las escenas de los participantes durante las Actividades 1 y 2 mediante lista de cotejo:
  - Mantiene todos los albedos dentro de rango físico (`~25` a `~225` en sRGB).
  - Diferencia correctamente `Metallic = 1,0` (galvanizado, cobre, aluminio desnudo) frente a `Metallic = 0,0` (PVC, policarbonatos, chapa lacada RAL).
  - Corrige escalado UV / triplanar en tramos largos de bandejas y conductos.
  - Modera la intensidad de difusores emisivos evitando quemados (*bloom*) y ruido.

### Evaluación sumativa al final
Dos evidencias evaluables combinadas:
1. **Evidencia práctica en escena (60 %):** Carpeta `01_MEP_Electrica` en *User Library* con los 6 materiales calibrados + escena `Practica_T3_v01.tm` + propuesta técnica del caso *Oficinas Distrito 22@*.
2. **Evidencia de transferencia (40 %):** Tabla dual de acabados PBR (Versión Estética + Versión Codificada por Sistemas) de la Actividad 3 + cuestionario de 4 preguntas sobre PBR, texturas VRAM y límites técnicos.

### Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
| :--- | :--- | :--- | :--- | :--- |
| **Calibración PBR de materiales eléctricos** | Asigna metalicidad errónea a plásticos/pinturas, usa blanco o negro puros (`255` o `0`) o deja acabados espejo irreales. | Ajusta algunos materiales correctamente, pero mantiene escalado UV estirado en bandejas o *Roughness* incoherente. | Configura correctamente *Albedo*, *Metallic*, *Roughness*, *Normal* y escala real para galvanizado, PVC, RAL 7035 y mecanismos. | Crea una librería PBR realista y equilibrada (variación sutil de rugosidad, aristas legibles, relieve calibrado y uso eficiente de texturas). |
| **Emisores LED y coherencia visual** | Confunde material emisivo con iluminación real de escena o quema el difusor con halo excesivo y color incongruente. | Separa emisor y luz, pero el tono cromático o intensidad visual no guardan proporción con la escena. | Calibra el material *Emissive* de difusores con brillo controlado y temperatura visual coherente sin atribuirle validez fotométrica. | Integra difusor, óptica, carcasa y fuente lumínica de manera limpia, previniendo ruido en *Path Tracer* y respetando la frontera con DIALux. |
| **Codificación cromática *Exposed MEP*** | Aplica colores puros chillones sin criterio ni leyenda, o confunde el color visual con la normativa real de identificación de conductores/equipos. | Propone codificación por sistemas, pero omite la conexión con materiales puente de Revit o la nota de alcance. | Diseña doble paleta (estética vs. didáctica por sistemas) equilibrada, coherente con planos del Bloque 4 y con advertencia técnica clara. | Sistematiza un estándar dual completo que permite alternar entre presentación arquitectónica y didáctica sin duplicar modelos ni inducir errores en obra. |
| **Optimización de VRAM y rigor profesional** | Introduce texturas `4K/8K` sin control saturando la GPU o afirma que los materiales de Twinmotion certifican reflectancias DIALux. | Reduce parcialmente peso de texturas, pero sin justificar impacto en memoria o sin distinguir visualización de cálculo normativo. | Gestiona adecuadamente resolución de texturas (`1K/2K`), evita cargas innecesarias y aclara verificación independiente en DIALux y reglamento vigente. | Optimiza con precisión rendimiento (VRAM/FPS) y fidelidad visual en primeros planos, manteniendo trazabilidad rigurosa entre render, BIM y normativa. |

### Actividad de autoevaluación (5 minutos al cierre)
Cada participante responde por escrito:
1. *¿Qué ajuste de PBR ha producido el mayor salto de realismo en los elementos eléctricos de mi escena hoy?*
2. *Si al abrir mi escena en el portátil de un cliente noto que los FPS caen tras aplicar nuevas texturas, ¿qué tres elementos revisaré primero?*
3. *Valora del 1 al 5 tu capacidad para explicar al cliente la diferencia entre una bandeja visualizada en negro mate RAL 9005 en Twinmotion y los requisitos constructivos y fotométricos reales del proyecto.*

---

## 8. Materiales y recursos

### Guion estructurado de diapositivas (Slide 1 a Slide 8)

| Diapositiva | Título | Contenido clave y mensaje visual |
|---|---|---|
| **Slide 1** | Portada: Materiales PBR para instalaciones eléctricas | Título del tema, Bloque 5 (3/10), puente desde el Tema 2, objetivos de aprendizaje y agenda de 240 minutos. |
| **Slide 2** | Cómo lee la luz un material: los 4 canales PBR | Esquema gráfico de *Albedo* (sin blancos `255` ni negros `0`), *Metallic* (conductores vs. dieléctricos), *Roughness* y *Normal/Bump*. |
| **Slide 3** | Errores forenses en escenas MEP (Actividad 1) | Galería visual con los 5 fallos típicos: PVC cromado, UV estirado en bandeja, RAL quemado, emisor neón sin luz y gotelé exagerado. |
| **Slide 4** | Biblioteca eléctrica patrón: del galvanizado al RAL 7035 | Ficha visual con parámetros orientativos para bandejas galvanizadas, PVC gris, acero EMT, chapa texturizada de CGBT y mecanismos. |
| **Slide 5** | El mito del difusor *Emissive* y el ruido en *Path Tracer* | Comparativa entre un difusor autoiluminado y una luminaria con fuente lumínica asociada; impacto del *Bloom* y prevención de *fireflies*. |
| **Slide 6** | *Exposed MEP*: estética arquitectónica vs. codificación didáctica | Comparativa lado a lado del mismo techo técnico: acabado negro mate RAL 9005 / galvanizado frente a codificación visual por sistemas (Fuerza, Alumbrado, SAI, Emergencia). |
| **Slide 7** | Caso práctico: Oficinas y Showroom Distrito 22@ | Cuadro de incidencias (`8 GB VRAM` saturados por texturas `8K`, negro `0,0,0` plano y requerimiento dual del cliente) y reto en equipos. |
| **Slide 8** | Cierre, *User Library* y salto al Tema 4 | Resumen de calibración PBR y anticipo del **Tema 4**: motores de iluminación global (*Lumen* / *Path Tracer*), HDRI, exposición manual y contraste frente a DIALux. |

### Ficha de trabajo del alumnado
Documento de 2 páginas dividido en 4 bloques:
1. **Bloque A (Diagnóstico PBR):** Hoja de registro de los 5 fallos de la Actividad 1.
2. **Bloque B (Recetario de calibración):** Tabla guía con rangos seguros de *Albedo*, *Metallic*, *Roughness* y *Scale* para materiales eléctricos.
3. **Bloque C (Caso Distrito 22@):** Matriz de resolución estética/didáctica y estrategia de reducción de VRAM.
4. **Bloque D (Transferencia):** Plantilla de paleta dual para el proyecto integrador.

### Plantilla técnica práctica: Ficha de Especificación PBR y Doble Paleta MEP

```markdown
# FICHA DE MATERIALES PBR Y CODIFICACIÓN VISUAL MEP
Proyecto: ___________________________  Escena TM: ___________________  VRAM Equipo: ______ GB

1. PALETA A (ESTÉTICA REALISTA — USO CLIENTE / ARQUITECTURA)
| Material puente Revit | Tipo físico | Albedo (sRGB aprox.) | Metallic | Roughness | Relieve / Escala UV |
| :--- | :--- | :--- | :---: | :---: | :--- |
| ELE_MAT_Bandeja_Galv | Metal desnudo | Gris acero (170-185) | 1,0 | 0,35 - 0,42 | Spangle / Triplanar 0,4 m |
| ELE_MAT_Tubo_PVC | Dieléctrico | Gris RAL 7035 (195) | 0,0 | 0,48 - 0,55 | Liso o microtextura 0,2 m |
| ELE_MAT_Cuadro_RAL7035 | Pintura epoxi | Gris claro (200-210) | 0,0 | 0,36 - 0,44 | Micro-relieve muy bajo |
| ELE_MAT_Exposed_RAL9005 | Pintura mate | Antracita (28-34) | 0,0 | 0,52 - 0,62 | Micro-relieve sutil |
| ELE_MAT_Lum_Difusor | Emisor LED | Tono 3000K / 4000K | 0,0 | 0,25 - 0,35 | Emissive moderado (sin halo) |

2. PALETA B (CODIFICACIÓN DIDÁCTICA — REVISIÓN TÉCNICA / MANTENIMIENTO)
- Fuerza Normal: ___________ (ej. Azul acero desaturado)   | Alumbrado Normal: ___________
- Red SAI / Crítica: _________ (ej. Ámbar suave)             | Emergencia / PCI: ___________
- Datos / Telecom: ___________

3. CONTROL DE RENDIMIENTO Y LÍMITE NORMATIVO
[ ] Texturas limitadas a 1K-2K salvo primeros planos críticos (sin 8K masivos)
[ ] Nota incluida: "Los colores de la vista didáctica representan únicamente una codificación visual
    de presentación; las características de materiales, identificación de circuitos y reflectancias de
    cálculo se rigen por la memoria DIALux, el proyecto eléctrico y la normativa vigente aplicable."
```

### Lecturas y recursos recomendados
*(Nota de validación previa: antes de emplear estos materiales en aula o proyecto, conviene verificar la vigencia de las guías, licencias de descarga de texturas y compatibilidad exacta con la versión de Twinmotion instalada).*
- **Documentación oficial de Twinmotion (Epic Games):** apartados *Materials overview*, *PBR Material properties*, *Emissive materials* y *User Library management* (comprobar versión vigente).
- **Guías técnicas de física PBR (*PBR Guide* de Adobe/Substance o documentación de Unreal Engine sobre *Physically Based Materials*):** útiles para comprender rangos de reflectancia en metales y dieléctricos (*validar acceso y vigencia*).
- **Cartas de colores industriales RAL (especialmente serie RAL Classic para envolventes eléctricas como RAL 7035, 7032, 9005):** referencia aproximada de color visual (*recordar que en pantalla la calibración depende del monitor y de la iluminación de la escena*).
- **Bancos de texturas PBR compatibles (p. ej., Quixel Megascans integrado en ecosistema Epic o bibliotecas abiertas CC0 verificadas):** comprobar siempre licencia comercial y resolución (`1K`/`2K`) antes de incorporar en entregas profesionales.

### Glosario de términos clave

| Término | Definición |
|---|---|
| ***Albedo* (Color base)** | Canal de un material PBR que define su color difuso puro sin iluminación ni sombras horneadas; debe mantenerse alejado de extremos puros `0` o `255`. |
| ***Bloom* (Halo luminoso)** | Efecto óptico de cámara/postprocesado que genera un resplandor difuso alrededor de zonas muy brillantes; su abuso en difusores emisivos borra detalles cercanos. |
| ***Exposed MEP*** | Enfoque de diseño donde tuberías, bandejas portacables y luminarias quedan visibles sin falso techo oculto, integrándose en la estética arquitectónica. |
| **Mapeado triplanar** | Método de proyección de texturas desde los tres ejes ortogonales que evita distorsiones y estiramientos en conductos y bandejas sin UV desplegadas. |
| ***Metallic* (Metalicidad)** | Parámetro PBR (habitualmente `0` o `1`) que indica si la superficie se comporta como dieléctrico (PVC, pintura RAL) o como metal conductor desnudo (galvanizado, aluminio). |
| ***Normal Map*** | Textura codificada en RGB que simula micro-relieves y variaciones de inclinación superficial ante la luz sin incrementar el número de polígonos de la malla. |
| **PBR (*Physically Based Rendering*)** | Modelo de sombreado basado en principios físicos reales de reflexión y conservación de la energía para lograr acabados coherentes bajo cualquier luz. |
| ***Roughness* (Rugosidad)** | Parámetro PBR (`0` a `1`) que controla la dispersión microscópica de los reflejos: valores bajos producen reflejos nítidos y valores altos generan acabados mate. |

---

## 9. Adaptaciones

### Sesión presencial
- **Calibración en proyector y monitores:** Recordar al aula que la percepción de blancos quemados o antracitas RAL 9005 cambia entre un proyector de aula y un monitor calibrado; validar siempre usando los valores numéricos RGB/lineales de los deslizadores además de la inspección visual.
- **Demostración comparativa tangible:** Si es posible, mostrar en mesa muestras físicas reales de un trozo de bandeja galvanizada Sendzimir, un tramo de tubo PVC gris, una placa de mecanismo satinada y una tapa metálica lacada RAL 7035 para observar cómo refleja cada una la luz del techo del aula antes de modelar su *Roughness* en Twinmotion.

### Sesión online síncrona
- **Paquete ligero de texturas:** Proporcionar con antelación una carpeta comprimida (`Texturas_MEP_T3.zip`, máx. `80 MB` en resolución `1K–2K`) con mapas de chapa galvanizada, perforación y micro-relieve RAL para que todo el grupo trabaje con los mismos activos sin saturar sus conexiones.
- **Revisión en galería virtual:** Al término de la Actividad 2, pedir a los alumnos que suban una captura de su cuadro eléctrico y bandeja calibrada a un tablero colaborativo (Padlet/Miro) para realizar corrección rápida entre pares sobre metalicidad y escala UV.

### Sesión asíncrona
- **Secuencia autoguiada en campus virtual:**
  1. Tres microvídeos prácticos (7-9 min cada uno): (a) *Albedo/Metallic/Roughness* en metales y plásticos eléctricos; (b) calibración de chapa perforada y RAL 7035 con mapeado triplanar; (c) emisores LED vs. luces reales y doble paleta *Exposed MEP*.
  2. Descarga de la escena base `Practica_T3_Inicio.tm` y entrega obligatoria de las capturas de los 6 materiales patrón + archivo `.tm` o capturas de parámetros.
  3. Foro técnico del caso *Oficinas Distrito 22@*, debatiendo cómo calibrar el RAL 9005 sin perder volumen y qué criterios seguir al pasar a `8 GB VRAM`.

---

## 10. Conexión con el programa

- **Qué conocimientos previos refuerza:** Conecta el reconocimiento físico de materiales constructivos de obra (**Módulo 1 y Módulo 3**) y la convención gráfica de sistemas por colores (**Módulo 4**) con los nombres estables de materiales puente definidos en el **Bloque 5, Tema 2**.
- **Qué competencias desarrolla:** Sombreado físicamente basado (PBR) aplicado a ingeniería eléctrica, control de recursos de memoria gráfica (VRAM), diseño visual para arquitectura *exposed MEP* y comunicación técnica multi-audiencia (estética frente a mantenimiento).
- **Cómo se conecta con el tema anterior y posterior en el programa (6 módulos / 50 temas):**
  - *Tema anterior:* Aprovecha directamente la separación jerárquica (*Keep Hierarchy*) y el catálogo estable de materiales puente construidos en el **Bloque 5, Tema 2 (Sincronización del modelo eléctrico MEP mediante Direct Link)** para texturizar sin miedo a perder el trabajo al re-sincronizar.
  - *Tema posterior:* Sienta las bases ópticas indispensables para el **Bloque 5, Tema 4 (Configuración de iluminación realista)**. Sin materiales PBR físicamente calibrados —especialmente sin albedos controlados y difusores LED bien regulados—, cualquier configuración de *Lumen*, *Path Tracer* o exposición fotográfica en el Tema 4 producirá superficies quemadas o reflejos erráticos.
- **Evidencia de aprendizaje que dejará el alumnado:** (1) Biblioteca personal en Twinmotion (*User Library*) con 6 materiales eléctricos PBR calibrados y escena aplicada `Practica_T3_v01.tm`, y (2) Ficha dual de acabados (Paleta Estética + Paleta Didáctica por Sistemas) para su proyecto integrador.

---

## Siguientes pasos para el formador

1. **Preparar la galería forense de la Actividad 1:** Renderizar o capturar con antelación las 5 imágenes de fallo PBR típicas sobre un mismo rincón técnico para que el contraste sea inequívoco.
2. **Validar la carpeta de texturas de práctica (`1K–2K`):** Verificar que todas las texturas incluidas para la Actividad 2 cuentan con licencia educativa o libre (CC0) y tamaño ligero para descarga rápida.
3. **Comprobar el comportamiento del modo *Emissive* en la versión instalada:** Revisar en la versión exacta de Twinmotion del aula la escala numérica de *Glow/Emissive* (que varía entre versiones según *Auto Exposure* o escala física en *nits*) para orientar con precisión durante la demostración.
4. **Insistir en la separación visual vs. cálculo DIALux:** Recordar al cierre que ajustar colores o reflectancias visuales en Twinmotion no actualiza los cálculos luminotécnicos del Módulo 2.
5. **Enlazar con el Tema 4:** Pedir al alumnado conservar la escena `Practica_T3_v01.tm` lista y con materiales aplicados, pues en la siguiente sesión se configurará el entorno solar, el cielo HDRI, los motores de iluminación global y la exposición manual.
