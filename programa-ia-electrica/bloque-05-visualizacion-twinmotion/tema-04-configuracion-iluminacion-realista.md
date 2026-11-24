# Tema 4. Configuración de iluminación realista

## 1. Ficha del tema

| Campo | Detalle |
| :--- | :--- |
| **Título del tema** | Tema 4. Configuración de iluminación realista |
| **Bloque y posición dentro del programa** | Bloque 5: Visualización y renderizado con Twinmotion · Tema 4 de 10 (Tema 33 de 50 del programa de 6 módulos) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Haber completado los Temas 1, 2 y 3 del Bloque 5 (escena sincronizada con materiales PBR calibrados); haber cursado el Módulo 2 (DIALux) para comprender magnitudes fotométricas ($E_m$, $U_0$, $UGR$) |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado será capaz de configurar esquemas de iluminación natural y artificial en Twinmotion empleando iluminación global en tiempo real (*Lumen* / estándar) o *Path Tracer* según capacidad disponible, ajustar cielos HDRI, orientación solar real y exposición fotográfica manual sin falsear contrastes, y justificar rigurosamente por qué ningún render fotorrealista sustituye las comprobaciones cuantitativas de lux, uniformidad o deslumbramiento de DIALux. |

---

## 2. Objetivos de aprendizaje

Al concluir esta unidad didáctica, el alumnado será capaz de:

1. **Comparar** el funcionamiento técnico y las exigencias de hardware de los motores de iluminación global disponibles en Twinmotion (*Standard/Lumen* frente a *Path Tracer*) para seleccionar el modo óptimo en cada fase de trabajo y entrega *(Nivel de Bloom: Analizar)*
2. **Configurar** el sistema de iluminación natural mediante geolocalización, orientación Norte real sincronizada con Revit, hora del día y mapas *Skydome / HDRI* para contrastar escenas diurnas con escenarios crepusculares o nocturnos de alumbrado artificial *(Nivel de Bloom: Aplicar)*
3. **Calibrar** los parámetros de cámara y postprocesado (exposición manual por *EV*, desactivación estratégica de *Auto Exposure*, balance de blancos en Kelvin y control de *Bloom*) evitando la distorsión perceptiva entre estancias muy iluminadas y zonas en penumbra *(Nivel de Bloom: Aplicar)*
4. **Evaluar** críticamente imágenes fotorrealistas para demostrar por qué los ajustes de exposición de cámara o intensidad en Twinmotion no constituyen medición de lux ni evaluación reglamentaria de deslumbramiento ($UGR$) *(Nivel de Bloom: Evaluar)*
5. **Diseñar** un protocolo comparativo de escenas Día / Hora Azul / Nocturna para presentaciones de ingeniería y arquitectura luminosa que integre resultados verificados de DIALux y notas explícitas de cumplimiento normativo vigente *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Motores de iluminación global en Twinmotion: *Standard*, *Lumen* y *Path Tracer*

#### Explicación breve y clara
La sensación de realismo de una instalación eléctrica no depende solo de la textura de las bandejas o de la potencia aparente de las lámparas, sino de cómo **rebota la luz indirecta** entre techos, paredes y suelos (**Iluminación Global, GI**). En Twinmotion conviven (según versión instalada y GPU) la rasterización estándar, la iluminación global dinámica en tiempo real (**Lumen**, que mejora drásticamente los rebotes difusos y reflejos en interiores sin esperar minutos por imagen) y el trazado de rayos físico progresivo (**Path Tracer**), que calcula trayectorias de fotones con alta fidelidad pero exige hardware DXR compatible, paciencia por fotograma y control de muestras (*Samples*) y rebotes (*Bounces*).

#### Conceptos clave
- **Iluminación Global (GI):** cálculo de la luz indirecta reflejada por las superficies; sin GI realista, los rincones de una sala técnica o falsos techos con foseados lucen planos o artificialmente negros.
- **Modo estándar / *Lumen* (Tiempo real):** ideal para recorrer el edificio en directo con el cliente o trabajar con equipos de gama media; *Lumen* ofrece rebotes y oclusión ambiental muy superiores al modo básico, aunque puede presentar ligeros retrasos o artefactos en reflejos muy pequeños según la GPU.
- ***Path Tracer* (Trazado de trayectorias):** motor físico de referencia para imágenes finales estáticas o vídeos pre-renderizados; requiere controlar `Samples per pixel` (p. ej. `64–256` en pruebas vs. `512+` en final según ruido), `Max Bounces` (mínimo `6–10` en interiores cerrados para que la luz rebote) y el activado del *Denoiser*.
- **Gestión de *Fireflies* y límites de hardware:** en equipos sin GPU compatible con DXR (DirectX Raytracing), *Path Tracer* aparece deshabilitado; el proyectista debe saber lograr iluminación convincente igualmente mediante *Standard / Lumen* y luces de apoyo suaves bien justificadas.

#### Definiciones necesarias
- ***Samples per pixel* (Muestras por píxel):** cantidad de rayos de luz trazados por cada píxel de la imagen final en *Path Tracer*; más muestras reducen el ruido granular (*grain*), aumentando proporcionalmente el tiempo de renderizado.
- ***Denoiser* (Reductor de ruido):** algoritmo de filtrado que suaviza el grano residual de imágenes calculadas con *Path Tracer* usando menos muestras, acelerando entregas sin sacrificar limpieza visual (conviene moderar su uso si borra micro-texturas finas).

#### Ejemplo práctico realista
En el vestíbulo de un edificio corporativo de `6 m` de altura iluminado por foseados lineales en techo y downlights empotrados, el equipo compara tres configuraciones sobre una GPU de `12 GB VRAM` compatible con DXR:
1. *Rasterizado básico sin GI avanzada:* las zonas bajo el voladizo de recepción quedan demasiado oscuras y se necesita rellenar artificialmente con luces falsas.
2. *Lumen en tiempo real:* permite navegar a `38 FPS` mostrando claramente el lavado de luz indirecta del foseado sobre el revestimiento de madera, perfecto para reunión interactiva en vivo.
3. *Path Tracer (`256 samples`, `8 bounces`, Denoiser ON):* tarda `35 segundos` por imagen en `4K` (`3840 × 2160 px`) y resuelve con gran sutileza los reflejos sobre el acero galvanizado de la carpintería y las sombras suaves bajo los mostradores. *(Nota: verificar siempre en la documentación oficial de la versión instalada de Twinmotion las opciones exactas y requisitos GPU de Lumen y Path Tracer).*

#### Errores frecuentes
- Dejar `Max Bounces` de *Path Tracer* en `1` o `2` dentro de un cuarto eléctrico interior sin ventanas, produciendo paredes artificialmente negras pese a tener luminarias encendidas.
- Trabajar toda la fase de ajuste con *Path Tracer* activado en calidad alta, bloqueando la fluidez al mover cámaras o materiales.
- Añadir «luces de relleno invisibles» arbitrarias en *Lumen* o modo estándar con sombras desactivadas para «aclarar la foto», sin advertir que alteran la lectura real del contraste luminoso diseñado.

#### Preguntas que el alumnado debería poder responder
1. ¿En qué fases del proyecto conviene trabajar con *Standard/Lumen* frente a activar *Path Tracer*?
2. ¿Qué papel desempeñan `Samples` y `Max Bounces` al renderizar interiores eléctricos cerrados con *Path Tracer*?
3. ¿Cómo se debe proceder profesionalmente si el equipo de trabajo carece de GPU con soporte DXR para *Path Tracer*?

---

### 3.2. Luz natural (geolocalización, hora, HDRI) frente a alumbrado artificial

#### Explicación breve y clara
La percepción del alumbrado artificial cambia radicalmente según la luz exterior que penetra por lucernarios y fachadas acristaladas. Twinmotion permite simular el sol físico con fecha, hora y geolocalización exactas —respetando el **Norte real** configurado en Revit— o envolver la escena mediante cielos **HDRI / *Skydome*** que aportan iluminación ambiental realista multidireccional. Para presentar instalaciones eléctricas de interiores o fachadas, el error más común es renderizar siempre a mediodía de verano (`13:00`), cuando la radiación solar aplasta por completo el efecto de luminarias interiores, foseados y alumbrado exterior. El dominio técnico consiste en elegir el momento adecuado: escena diurna para estudiar aporte solar y deslumbramientos visuales en fachada, frente a **Hora Azul (*Blue Hour*)** o noche para mostrar el protagonismo de la iluminación artificial.

#### Conceptos clave
- **Geolocalización y Norte Real (*North Offset*):** ajuste exacto de latitud/longitud de la ciudad del proyecto y coincidencia angular del Norte entre Revit y Twinmotion para no simular sol entrando por una fachada norte imposible.
- ***Skydome* y mapas HDRI (*High Dynamic Range Image*):** cúpulas fotográficas de cielo de alto rango dinámico (cielo cubierto, atardecer, noche urbana) que generan reflejos naturales complejos sobre luminarias, cristales y metales MEP.
- **Contraste Día vs. Hora Azul vs. Nocturno:** a plena luz del día un sol directo aporta del orden de decenas de miles de lux exteriores frente a los `300–500 lx` de una oficina interior, por lo que en renders diurnos las luminarias interiores apenas «se notan»; en la hora azul (justo tras la puesta de sol), la luz exterior fría suave equilibra la calidez y protagonismo de la iluminación artificial sin caer en un fondo negro vacío.
- **Coherencia con sistemas de control:** mostrar en escenas diurnas soleadas la zona perimetral con luminarias atenuadas/apagadas si el proyecto contempla regulación por aporte de luz natural (*daylight harvesting*), remitiendo siempre su cálculo al estudio energético/lumínico correspondiente.

#### Definiciones necesarias
- **HDRI (*High Dynamic Range Image*):** imagen panorámica esférica con información extendida de luminancia capaz de iluminar una escena 3D respetando la dirección, intensidad y temperatura cromática real de un cielo capturado.
- **Hora Azul (*Blue Hour*):** franja crepuscular breve tras el ocaso o antes del amanecer donde el cielo conserva luminosidad azulada equilibrada, ideal en visualización arquitectónica para destacar simultáneamente la envolvente del edificio y la iluminación artificial interior y exterior.

#### Ejemplo práctico realista
En el estudio visual de un edificio de oficinas en Sevilla (latitud `~37,39° N`) con muro cortina orientado al oeste, el proyectista configura dos estados guardados en Twinmotion:
- **Estado 1 (Verano `17:30` con sol físico + cielo despejado):** permite visualizar la entrada intensa de sol bajo por el oeste sobre las mesas cercanas a fachada, justificando ante la propiedad el uso de estores y circuitos independientes de encendido por zonas junto a ventana vs. zona interior.
- **Estado 2 (*Hora Azul* `21:15` con HDRI crepuscular suave):** muestra claramente la uniformidad visual de las pantallas LED lineales (`4000 K`), la iluminación de acento en recepción (`3000 K`) y las balizas exteriores de acceso sin que el cielo parezca un vacío negro irreal.

#### Errores frecuentes
- Olvidar verificar la orientación del Norte al importar el modelo desde Revit, mostrando sol directo entrando por una fachada que en la parcela real da al norte.
- Usar un HDRI muy luminoso de cielo diurno y además dejar encendido el sol físico de Twinmotion sin coordinar su dirección ni intensidad, provocando doble sombra incompatible en exteriores.
- Intentar mostrar el diseño nocturno de iluminación de un local comercial manteniendo un cielo de mediodía encendido mientras se fuerza la potencia de los focos interiores a valores absurdos.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué la *Hora Azul* suele comunicar mejor una propuesta de iluminación interior y de fachada que una escena nocturna totalmente negra o una escena de mediodía?
2. ¿Qué comprobación previa de orientación debe hacerse entre Revit y Twinmotion antes de validar un estudio visual de soleamiento en fachada?
3. ¿Qué error produce superponer la dirección solar del cielo físico con un mapa HDRI cuyo sol apunta en sentido contrario?

---

### 3.3. Exposición manual, balance de blancos y postprocesado fotográfico

#### Explicación breve y clara
Por defecto, Twinmotion activa el ajuste automático de exposición (**Auto Exposure**), que funciona exactamente igual que la cámara automática de un teléfono móvil: si miras hacia un rincón oscuro, la cámara sube la sensibilidad artificialmente hasta que el rincón parece brillante; si miras hacia una ventana soleada, oscurece la sala. Este comportamiento automático resulta fatal en ingeniería de iluminación porque **destruye cualquier comparación visual honesta** entre dos soluciones lumínicas o entre día y noche. La regla profesional exige **bloquear la exposición manual (`EV`, *Exposure Value*)** para cada serie comparativa y calibrar con sobriedad el balance de blancos (Kelvin) y el postprocesado.

#### Conceptos clave
- ***Auto Exposure* OFF en comparativas:** desactivar la exposición automática y fijar un valor `EV` idéntico al comparar «Opción Lumínica A vs. Opción Lumínica B» o «Sin luces vs. Con luces»; de lo contrario, el algoritmo compensa el brillo de ambas imágenes haciéndolas parecer casi iguales.
- **Escala *EV* (*Exposure Value*):** parámetro fotográfico que regula cuánta luz admite la cámara virtual (valores habituales según escena: interiores oscuros o nocturnos con `EV` más bajos; exteriores soleados con `EV` más altos; comprobar el signo y escala exacta en la versión vigente de Twinmotion, ya que puede expresarse como compensación o valor absoluto de exposición).
- **Balance de blancos (*White Balance* en Kelvin):** ajuste de la cámara virtual para evitar que una sala entera iluminada a `3000 K` se vea excesivamente anaranjada o una nave a `5000 K` parezca azulada de forma irreal; conviene ajustarlo con criterio fotográfico respetando la sensación térmica relativa entre fuentes cálidas y frías.
- **Contención en postprocesado (*Bloom*, *Vignette*, *Aberration*):** mantener valores muy sutiles; abusar de *Bloom* o destellos (*Lens Flare*) oculta la arquitectura de la luminaria y transmite amateurismo visual.

#### Definiciones necesarias
- **Exposición manual (*Manual Exposure / EV*):** fijación explícita de la sensibilidad/apertura equivalente de la cámara virtual para que los cambios reales de intensidad luminosa en la escena se traduzcan fielmente en mayor o menor claridad en pantalla.
- **Balance de blancos (*White Balance*):** calibración cromática de la cámara virtual que define qué temperatura de color (en Kelvin) interpreta como blanco neutro, preservando la coherencia cromática de materiales blancos y grises.

#### Ejemplo práctico realista
Para decidir entre instalar `12` proyectores o `18` proyectores en una nave taller, un colaborador deja activado *Auto Exposure* en Twinmotion y captura dos imágenes. Como *Auto Exposure* adapta la imagen al brillo medio del encuadre, la escena con `12` proyectores sube automáticamente la exposición y en pantalla luce prácticamente igual de clara que la de `18` proyectores, induciendo al cliente a pensar que sobran `6` luminarias. Al desactivar *Auto Exposure*, fijar manualmente el mismo parámetro de exposición en ambas vistas (p. ej., calibrado con la cámara de referencia en escena nocturna interior) y mantener idéntico balance de blancos (`4500 K`), se aprecian de inmediato las zonas en sombra entre pasillos en la versión reducida —y además se acompaña la comparativa de las curvas isolux de DIALux que cuantifican objetivamente los lux y la uniformidad ($U_0$).

#### Errores frecuentes
- Dejar *Auto Exposure* encendido al generar imágenes «Antes / Después» o «Encendido / Apagado», falseando por completo la percepción comparativa de iluminancia.
- Compensar una escena mal iluminada subiendo el parámetro de exposición al máximo o abusando de brillo/saturación en postprocesado en lugar de ajustar correctamente las fuentes de luz.
- Utilizar balance de blancos automático o desajustado a `2500 K` / `9000 K`, alterando el color real de los armarios RAL 7035 o acabados arquitectónicos del proyecto.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué dejar activado *Auto Exposure* invalida cualquier comparativa visual entre dos distribuciones de luminarias?
2. ¿Cómo interactúa el ajuste de *White Balance* de la cámara con la temperatura de color aparente de las luminarias de la escena?
3. ¿Qué efectos de postprocesado deben restringirse al mínimo para mantener rigor técnico en entregas de ingeniería?

---

### 3.4. Por qué el renderizado fotorrealista NO sustituye a DIALux ni al cumplimiento eléctrico

#### Explicación breve y clara
Esta es la frontera ética y técnica más importante de todo el Bloque 5: **Twinmotion no es un software de cálculo luminotécnico ni reglamentario**. Un motor de renderizado busca generar imágenes perceptualmente agradables mediante compresión tonal (*tone mapping*), ajuste de exposición, materiales aproximados y fuentes de luz optimizadas para GPU. En Twinmotion es trivial hacer que un almacén oscuro parezca perfectamente iluminado subiendo dos puntos la exposición (`EV`) o duplicando un multiplicador visual de luz; sin embargo, cuando se ejecuta el cálculo en **DIALux** con archivos fotométricos certificados (`.ldt`/`.ies`), factor de mantenimiento ($MF$) y reflectancias medidas de superficies, ese mismo almacén puede arrojar `110 lx` frente a los `200 lx` o `300 lx` mínimos exigibles, o un índice de deslumbramiento $UGR = 25$ inaceptable en oficinas.

#### Conceptos clave
- **Tone Mapping vs. Radiometría certificada:** Twinmotion comprime un rango dinámico amplio en una pantalla estándar (sRGB) para que «se vea bien» al ojo; DIALux calcula iluminancias ($E_m$, $E_{min}$, $E_{max}$ en lux), uniformidades ($U_0$) y deslumbramiento ($UGR$) en planos de cálculo discretizados conforme a norma.
- **Factor de mantenimiento ($MF$) y depreciación:** DIALux penaliza el flujo inicial considerando ensuciamiento de luminarias, envejecimiento de LED y suciedad del local; Twinmotion renderiza por defecto en condiciones ideales irreales si no se ajustan criterios, y carece de motor normativo de planos útiles.
- **Ausencia de validación eléctrica:** que una escena renderizada muestre `60` luminarias encendidas no verifica ni sección de cable, ni caída de tensión ($\Delta V\ \%$), ni selectividad de magnetotérmicos/diferenciales, ni reparto equilibrado entre fases.
- **Verificación normativa obligatoria por país y edición:** cualquier cita a normas de iluminación interior/deportiva (p. ej. UNE-EN 12464-1, UNE-EN 12193, CTE DB-HE3 en España) o reglamentos eléctricos (REBT en España, IEC 60364, NEC/NFPA 70) debe comprobarse siempre en su jurisdicción, autoridad competente y edición vigente actual por técnico cualificado.

#### Definiciones necesarias
- **Iluminancia media mantenida ($E_m$) y Uniformidad ($U_0$):** magnitudes fotométricas cuantitativas calculadas sobre una cuadrícula definida del plano de trabajo (en lux y adimensional $E_{min}/E_m$), comprobables en software fotométrico certificado (como DIALux) y mediante luxómetro calibrado en obra, nunca mediante inspección visual de un render.
- **Índice de deslumbramiento unificado ($UGR$):** parámetro calculado en posiciones normalizadas de observador en DIALux que evalúa la molestia visual directa de las luminarias; una cámara con *Bloom* en Twinmotion no mide $UGR$.

#### Ejemplo práctico realista
En una oficina técnica de Bilbao, una sala de diseño CAD requiere una iluminancia media de referencia de `500 lx` en plano de trabajo a `0,85 m`, uniformidad $U_0 \ge 0,60$ y $UGR \le 19$ (valores orientativos habituales de la norma UNE-EN 12464-1, cuya aplicabilidad y edición vigente debe verificarse siempre para el caso concreto). En Twinmotion, con `6` paneles LED encendidos y exposición elevada manualmente, la escena luce luminosa, nítida y confortable en pantalla. Al contrastar esa misma geometría en DIALux con el archivo `.ldt` oficial de la luminaria (`3.600 lm`, factor de mantenimiento `0,80`), DIALux reporta `E_m = 345 lx` y `U_0 = 0,48` (incumplimiento grave). Solo añadiendo `2` luminarias adicionales y ajustando la interdistancia en DIALux (y re-sincronizando después en Revit y Twinmotion) se cumple el criterio fotométrico real y la carga eléctrica verificada en circuito.

#### Errores frecuentes
- Responder a un cliente que pide reducir el número de luminarias diciendo «vamos a probarlo en Twinmotion a ver si se ve suficientemente claro».
- Ajustar la intensidad de las luces en Twinmotion a ojo hasta que la foto guste al arquitecto y olvidar que los lúmenes reales de catálogo en DIALux o la potencia instalada en Revit no han cambiado.
- Citar en memorias o presentaciones resultados visuales como si fueran mediciones fotométricas, o apoyarse en IA generativa para justificar normativas sin verificar ni edición vigente ni cálculos reales.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué tres mecanismos propios de un renderizado fotográfico en Twinmotion (exposición, *tone mapping*, ausencia de factor de mantenimiento) pueden engañar al ojo respecto a los lux reales del espacio?
2. ¿Qué herramientas deben utilizarse para comprobar objetivamente $E_m$, $U_0$, $UGR$, eficiencia energética (VEEI/similares según normativa aplicable) y caída de tensión?
3. Si tras presentar en Twinmotion el cliente pide modificar la cantidad o ubicación de luminarias, ¿qué secuencia técnica obligatoria debe ejecutarse antes de dar el cambio por válido?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** combina experimentación visual sobre el engaño perceptivo de la exposición, demostración en directo de motores GI, HDRI y cámaras, taller práctico de doble escena Día/Hora Azul y análisis de un caso real deportivo con alto aporte solar.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
|---|---:|---|---|
| **1. Apertura y activación perceptiva** | 20 min | Retoma `Practica_T3_v01.tm`; lanza evaluación diagnóstica breve y ejecuta la **Actividad 1 («La trampa del *Auto Exposure*»)** proyectando dos renders engañosos del mismo pasillo técnico. | Observa y vota cuál de los dos renders tiene mayor iluminancia real, descubre el truco de exposición y deduce por qué la vista humana y la cámara engañan. |
| **2. Microlearning técnico I (Motores GI, Geolocalización y HDRI)** | 30 min | Expone apartados 3.1 y 3.2: diferencias operativas entre *Standard*, *Lumen* y *Path Tracer* (`Samples`/`Bounces`/`Denoiser`), Norte real de Revit, horario solar y *Skydome/HDRI*. | Registra en su ficha los parámetros recomendados de *Path Tracer* vs. *Lumen* para su GPU y comprueba cómo cambia el protagonismo del alumbrado entre mediodía y *Hora Azul*. |
| **3. Microlearning técnico II (Exposición manual y frontera con DIALux)** | 30 min | Expone apartados 3.3 y 3.4: bloqueo de exposición `EV`, balance de blancos en Kelvin, contención de *Bloom* y contraste técnico directo entre una imagen Twinmotion y una tabla de resultados DIALux. | Analiza un caso real donde un render brillante oculta incumplimiento de `500 lx` y `UGR`, identificando el flujo seguro DIALux → Revit → Twinmotion. |
| **4. Actividad práctica de aplicación técnica** | 50 min | Dinamiza la **Actividad 2** (configuración de escena dual Día / Hora Azul con exposición manual bloqueada en Twinmotion); revisa que *Auto Exposure* esté desactivado en comparativas y que no haya doble sol HDRI+físico. | Configura dos cámaras/estados sobre la escena de práctica (`Estado_Dia` con sol orientado y `Estado_HoraAzul` con HDRI y luminarias encendidas), ajusta exposición manual y *White Balance*, y exporta dos vistas comparativas. |
| **5. Análisis de caso práctico** | 45 min | Presenta el caso **Pabellón Polideportivo Municipal de Alcobendas (Madrid)** con muros cortina oeste, sol invernal a las `17:00` y duda del promotor sobre apagar el `50 %` de los proyectores; guía el análisis en equipos de 3-4 personas. | En equipos, diagnostica por qué el render previo indujo al error de apagar luminarias, diseña la comparativa honesta con exposición bloqueada y formula la comprobación obligatoria en DIALux y cálculo eléctrico. |
| **6. Puesta en común y debate técnico** | 25 min | Modera exposiciones de 2-3 equipos, desafía criterios ambiguos y fija los estándares de presentación ética ante promotores públicos o privados. | Presenta sus conclusiones del caso y contrasta criterios de exposición, HDRI y verificación normativa vigente. |
| **7. Transferencia al proyecto real y cierre** | 40 min | Guía la **Actividad 3** (aplicación de iluminación dual y nota de alcance fotométrico al proyecto propio, 20 min); aplica evaluación sumativa breve, autoevaluación y puente hacia el **Tema 5 (Luminarias desde DIALux)** (20 min). | Aplica el esquema dual en su proyecto integrador/real, redacta su nota de alcance técnico, completa test y autoevaluación, y prepara la escena para integrar archivos `.ies` en el Tema 5. |
| **TOTAL** | **240 min** | — | — |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «La trampa del *Auto Exposure*»

- **Nombre:** Experimento visual de engaño perceptivo en renderizado
- **Objetivo:** Comprobar de forma empírica que la apariencia de luminosidad en una imagen de Twinmotion puede invertirse manipulando la exposición de cámara, invalidando el juicio visual como sustituto de DIALux.
- **Instrucciones para el alumnado:**
  1. Observad dos renders proyectados del mismo pasillo de oficinas (`Render Alpha` y `Render Beta`) exactamente desde el mismo punto de vista.
  2. Responded individualmente en 3 minutos: (a) ¿Qué pasillo recibe mayor flujo luminoso instalado?; (b) ¿Cuál cumple mejor unos supuestos `150–200 lx` de zona de circulación?; (c) ¿Qué parámetro de cámara sospecháis que cambió entre ambos?
  3. Tras revelar el formador los datos reales (`Render Alpha` tenía `3` luminarias de `1.800 lm` con `Auto Exposure ON` / `EV` alto; `Render Beta` tenía `6` luminarias idénticas con exposición manual reducida), anotad en parejas dos reglas obligatorias para presentar comparativas luminosas honestas.
- **Materiales necesarios:** Par de imágenes comparativas preparadas (`Render Alpha` y `Render Beta`), sondeo rápido o tarjetas de votación.
- **Tiempo estimado:** 15 minutos (integrado en la Fase 1).
- **Rol del formador:** Provocar la votación antes de revelar los datos reales para evidenciar el sesgo perceptivo incluso entre técnicos experimentados.
- **Producto o entregable esperado:** Dos reglas escritas de calibración honesta de cámara para presentaciones lumínicas.
- **Criterios de éxito:** El 100 % del grupo identifica el efecto de la exposición sobre la percepción de iluminancia y justifica por qué solo DIALux mide lux y uniformidad.

---

### Actividad 2 (Aplicación técnica): «Escena dual Día / Hora Azul con exposición manual bloqueada»

- **Nombre:** Calibración comparativa de iluminación natural vs. artificial en Twinmotion
- **Objetivo:** Configurar dos estados de iluminación coherentes (diurno geolocalizado y crepuscular/nocturno) utilizando *Lumen* o *Path Tracer* según GPU y controlando manualmente la exposición y el balance de blancos.
- **Instrucciones para el alumnado:**
  1. Abrid `Practica_T3_v01.tm` y configurad primero la ubicación geográfica real (ciudad del proyecto) y el ángulo de **Norte** coherente con el modelo Revit.
  2. Activad el motor de iluminación global compatible con vuestro hardware (*Lumen* en tiempo real o modo estándar; si disponéis de GPU DXR, preparad además un ajuste de prueba en *Path Tracer* con `Samples ≥ 128`, `Max Bounces ≥ 6`, `Denoiser ON`).
  3. **Estado 1 (`01_Diurno_11h30`):** Cielo físico diurno o HDRI soleado coherente, luminarias interiores apagadas o en nivel bajo según zona, **Auto Exposure DESACTIVADO** y exposición manual ajustada para conservar detalle exterior sin quemar el suelo junto a la ventana; *White Balance* equilibrado (`~5500–6500 K`). Guardad vista de cámara `Cam_01_Dia`.
  4. **Estado 2 (`02_HoraAzul_21h`):** Cambiad a horario crepuscular / HDRI de hora azul (desactivando el sol directo si el HDRI aporta la luz ambiental suave para evitar sombras dobles incompatibles), encended las luces interiores provisionales coherentes con el proyecto y bloquead la exposición manual (`EV` de interior nocturno) + *White Balance* (`~4200–4800 K`). Guardad vista `Cam_02_HoraAzul`.
  5. Para demostrar el control comparativo, capturad una tercera variante (`Cam_02_MediaLuz`) manteniendo **exactamente el mismo `EV` fijo de `Cam_02_HoraAzul`** pero apagando el `50 %` de las luces de escena; verificad que la reducción visual real es perceptible y coherente.
- **Materiales necesarios:** Escena `Practica_T3_v01.tm`, Twinmotion instalado, Ficha de registro de parámetros (Sección 8).
- **Tiempo estimado:** 50 minutos (Fase 4).
- **Rol del formador:** Revisar que el *Auto Exposure* quede efectivamente desactivado en la comparación `Cam_02` vs. `Cam_02_MediaLuz`, vigilar ángulos de Norte y ayudar a usuarios sin DXR a exprimir la calidad en *Standard/Lumen*.
- **Producto o entregable esperado:** Escena `Practica_T4_v01.tm` con las tres imágenes exportadas (`1920 × 1080 px` o superior) y tabla de parámetros de cámara/GI.
- **Criterios de éxito:** Diferencia clara y realista entre escena diurna y hora azul, ausencia de sombras solares dobles por conflicto HDRI+sol, exposición manual bloqueada en la comparativa de apagado parcial y cero afirmaciones de cumplimiento de lux sin DIALux.

---

### Actividad 3 (Transferencia a proyecto real): «Protocolo de iluminación visual y cláusula fotométrica del proyecto»

- **Nombre:** Ficha de iluminación escénica y protocolo de coherencia con DIALux
- **Objetivo:** Aplicar las configuraciones de motor GI, orientación, HDRI y exposición al proyecto integrador o laboral del alumno, formalizando la vinculación obligatoria con el estudio DIALux.
- **Instrucciones para el alumnado:**
  1. Completad la **Plantilla técnica de configuración lumínica** (Sección 8) adaptada a vuestro proyecto: definid coordenadas/orientación, motor elegido (*Lumen* / *Path Tracer* / *Standard*), ajustes previstos de escena Día y Escena Nocturna/Hora Azul y parámetros bloqueados de cámara.
  2. Redactad el **Protocolo de sincronización de cambios entre DIALux y Twinmotion** en 4 pasos concretos (qué hacer si el cliente pide más o menos luz durante la revisión visual).
  3. *(Opcional asistido con IA)*: emplead ChatGPT o Claude (sin datos confidenciales del cliente real) para redactar un resumen divulgativo claro para propiedad explicando qué muestra una comparativa en *Hora Azul* frente a qué certifica una tabla de curvas isolux de DIALux; verificad manualmente cada magnitud y cita normativa del borrador generado.
- **Materiales necesarios:** Plantilla técnica práctica (Sección 8), datos anonimizados del proyecto propio.
- **Tiempo estimado:** 20 minutos (integrado en la Fase 7).
- **Rol del formador:** Verificar que el protocolo impide recalibrar lúmenes «a ojo» en Twinmotion sin validar antes el cálculo fotométrico y eléctrico correspondiente.
- **Producto o entregable esperado:** Ficha lumínica cumplimentada del proyecto propio + protocolo de 4 pasos revisado.
- **Criterios de éxito:** Parámetros de motor/exposición viables para el hardware propio, orientación y escenarios justificados y frontera técnica frente a DIALux y normativa vigente claramente establecida.

---

## 6. Caso práctico

### Caso: Pabellón Polideportivo Municipal y Piscina Cubierta de Alcobendas (Madrid) — La falsa suficiencia lumínica de invierno

#### Contexto empresarial
**Estudio Lumínico IberVolt, S.L.** redacta el proyecto de renovación LED y control DALI del alumbrado de un pabellón polideportivo municipal (`pista polideportiva de 44 m × 24 m`, altura libre `9,2 m`) equipado con un gran muro cortina longitudinal orientado al **Oeste (`265°`)** y lucernarios cenitales en cubierta. La instalación proyectada contempla `32` proyectores LED asimétricos de `240 W` (`~33.600 lm` cada uno, `4000 K`), organizados en cuatro encendidos por filas y regulación por aporte natural.

#### Situación o problema
En una reunión de seguimiento con la concejalía de deportes y el arquitecto municipal, el promotor cuestiona el coste del encendido completo para entrenamientos vespertinos y sugiere: *«En los renders que nos enseñó la constructora el martes, a las 17:00 de invierno la pista parece sobradamente iluminada incluso con la mitad de los focos apagados; eliminemos la mitad de la potencia o reduzcamos 12 proyectores de la oferta»*.

Al auditar la escena de Twinmotion de la constructora que originó el malentendido, vuestro equipo descubre cuatro fallos graves:
1. La escena simulaba las **`17:00` en latitud estándar sin fecha de invierno** (el sistema usaba julio por defecto, cuando en Madrid a las 17:00 el sol aún está alto, frente a diciembre cuando a las `17:45` ya es de noche cerrada).
2. La orientación del Norte en Twinmotion estaba rotada `90°`, proyectando sol directo irreal hacia la pista.
3. Tenía activado un **HDRI diurno despejado** de altísima luminancia junto con ***Auto Exposure* encendido**, de modo que al apagar la mitad de los proyectores el algoritmo de cámara compensó el brillo haciendo parecer la pista casi igual de luminosa.
4. No existía ningún contraste con el cálculo real en **DIALux** para la clase deportiva prevista (como referencia ilustrativa habitual, UNE-EN 12193 contempla niveles orientativos del orden de `200–300 lx` en entrenamiento según disciplina y categoría, aunque su exigencia exacta y edición vigente deben verificarse en el pliego y normativa aplicable).

#### Datos disponibles

| Variable del caso | Configuración errónea de la constructora | Condición física / técnica real del proyecto | Impacto técnico observado |
|---|---|---|---|
| **Ubicación y fecha crítica** | Mes de verano (`julio`, `17:00 h`), sol aún alto | Madrid (`~40,5° N`), **diciembre `17:30–18:30 h`** (crepúsculo / noche en entrenamientos escolares) | La luz natural es prácticamente nula a partir de las `18:00 h` en invierno |
| **Orientación del muro cortina** | Norte de Twinmotion sin ajustar (`+90°` de error) | Muro cortina real orientado al **Oeste (`265°`)** | Deslumbramiento solar bajo a última hora de tarde de primavera/verano, pero sin aporte a las `18:30` de invierno |
| **Motor y cámara en render** | *Auto Exposure ON* + HDRI cielo despejado muy brillante | Exposición manual fija (`EV` calibrado) + escena real de diciembre noche / hora azul | *Auto Exposure* ocultó la caída de luminancia al apagar el `50 %` de los proyectores |
| **Cálculo DIALux paralelo (100 % vs. 50 %)** | No aportado por la constructora en su reunión | Con `32` proyectores (`100 %`): $E_m \approx 340\text{ lx}$, $U_0 \approx 0,72$. Con `16` proyectores (`50 %`): $E_m \approx 168\text{ lx}$, $U_0 \approx 0,41$ (zonas de `85 lx` bajo bandas) | Con `16` proyectores cae drásticamente por debajo de uniformidad y niveles orientativos de referencia de pista multiusos |

#### Preguntas de análisis
1. ¿Qué tres errores específicos en Twinmotion (calendario/hora, orientación + HDRI y cámara) produjeron la falsa sensación de pista suficientemente iluminada al `50 %`?
2. ¿Por qué incluso corrigiendo fecha, orientación y *EV* manual en Twinmotion no se puede decidir únicamente «a ojo» si `16` o `24` proyectores cumplen los requisitos deportivos de la pista?
3. Si en verano a las `17:00` entra sol intenso por el muro cortina Oeste (`265°`), ¿qué valor técnico sí aporta una simulación bien calibrada en Twinmotion para el arquitecto y la instalación eléctrica?
4. ¿Cómo presentaríais ante la concejalía y la constructora una comparativa visual honesta que demuestre el problema sin desacreditar innecesariamente herramientas sino el mal uso de configuración?

#### Tarea a realizar
En equipos de 3-4 técnicos de **Estudio Lumínico IberVolt**, redactad un **Informe Técnico-Visual de Respuesta al Ayuntamiento** que contenga:
1. **Diagnóstico técnico de la escena errónea** explicando claramente por qué verano + Norte erróneo + HDRI brillante + *Auto Exposure* invalidaron la imagen de la constructora.
2. **Parámetros exactos para reconfigurar la visualización en Twinmotion** en dos escenarios honestos:
   - *Escenario A (Invierno `18:15 h` — Uso real de entrenamiento):* geolocalización Madrid, fecha diciembre, HDRI nocturno/hora azul tenue, exposición manual **bloqueada idéntica** para mostrar `100 %` (`32` uds) frente a `50 %` (`16` uds).
   - *Escenario B (Primavera/Verano `18:00 h` — Análisis solar Oeste):* Norte real corregido a `265°` en muro cortina, demostrando necesidad de control solar y circuitos de regulación DALI por líneas paralelas a fachada (justificando inversión en regulación frente a recortar proyectores).
3. **Justificación de la frontera DIALux y normativa vigente:** tabla comparativa entre lo que muestra la escena corregida en Twinmotion y lo que exige la comprobación en DIALux ($E_m$, $U_0$, $UGR$/$GR$) y el proyecto eléctrico (protecciones, circuitos y eficiencia conforme a reglamento eléctrico y deportivo vigente aplicable en la jurisdicción).

#### Posibles soluciones o criterios de análisis
- **Corrección geométrica y temporal:** Ajustar latitud/longitud de Alcobendas/Madrid (`~40,5° N, -3,6° O`), alinear el Norte real de Twinmotion con el de Revit para situar el muro cortina exactamente a `265°` (Oeste) y fijar `21 de diciembre` a las `18:15 h` para simular el horario real de entrenamiento vespertino invernal.
- **Exposición bloqueada en comparativa `100 %` vs. `50 %`:** Desactivar *Auto Exposure*, seleccionar modo *Lumen* o *Path Tracer* (con `Max Bounces ≥ 6`), cargar un HDRI nocturno suave y capturar primero `32` proyectores ajustando manualmente `EV` y *White Balance* (`4200 K`); sin tocar ni un parámetro de cámara, apagar la mitad alterna de proyectores (`16` uds) y renderizar la segunda imagen. El contraste de zonas oscuras y pérdida de uniformidad en las bandas de la pista resulta evidente para el ojo no técnico.
- **Lectura conjunta con DIALux:** Presentar la comparativa visual lado a lado con los mapas de falsa color y la tabla numérica de DIALux ($340\text{ lx} / U_0 = 0,72$ frente a $168\text{ lx} / U_0 = 0,41$), aclarando que los criterios finales de seguridad y uso deportivo deben verificarse según la edición vigente de la norma aplicable (p. ej., UNE-EN 12193 / CTE / REBT en España) por el técnico competente.
- **Solución técnica inteligente para ahorro energético:** En vez de eliminar `12–16` proyectores (lo que dejaría la pista ilegal/inutilizable en invierno y noche), conservar los `32` proyectores con **regulación DALI y sondas de luz natural** que atenúan progresivamente las filas próximas al muro cortina Oeste durante horas diurnas de verano, logrando ahorro real sin sacrificar seguridad ni uniformidad nocturna.

#### Preguntas de reflexión final
1. ¿Cuántos errores de inversión en obra pueden nacer si se toman decisiones de recorte de luminarias basándose únicamente en renders sin exposición bloqueada ni memoria DIALux?
2. ¿Cómo explicaríais en menos de 60 segundos a un concejal o promotor no técnico qué significa «exposición manual bloqueada» usando una analogía sencilla de fotografía?

---

## 7. Evaluación

### Evaluación diagnóstica breve (5 minutos, inicio de sesión)
Cuestionario rápido individual (3 ítems):
1. ¿Qué ocurre al comparar dos escenas de iluminación en Twinmotion si dejamos activado *Auto Exposure*?
   - a) Mide exactamente los lux en el suelo de ambas escenas.
   - b) La cámara compensa automáticamente el brillo, haciendo que una escena oscura parezca similar a una bien iluminada. *(Correcta)*
   - c) Desactiva los reflejos metálicos de la escena.
2. Para mostrar en un mismo encuadre la presencia del edificio exterior y el efecto de la iluminación interior y de fachada de forma equilibrada, la condición ambiental más eficaz suele ser:
   - a) Mediodía soleado de julio con sol en cenit.
   - b) La *Hora Azul* (crepúsculo suave) con exposición manual ajustada. *(Correcta)*
   - c) Cielo totalmente negro sin mapa ambiental ni luz de rebote.
3. Señala qué magnitud NO puede verificarse nunca mediante una inspección visual en Twinmotion (puedes marcar varias): $E_m$ en lux / $UGR$ / Uniformidad $U_0$ / Estética de la luminaria en el espacio. *(Todas excepto la estética)*.

### Evaluación formativa durante la sesión
- Revisión guiada durante la Actividad 2 y el Caso práctico mediante lista de cotejo:
  - Configura correctamente ubicación y Norte real antes de simular luz solar.
  - Selecciona el motor GI más adecuado (*Standard/Lumen* o *Path Tracer* con suficientes rebotes) según su equipo.
  - Desactiva *Auto Exposure* y fija un `EV` manual coherente y constante en comparativas de iluminación.
  - Evita conflictos entre sol físico y dirección solar de mapas HDRI.
  - Subordina cualquier decisión cuantitativa de iluminación a DIALux y normativa vigente.

### Evaluación sumativa al final
Dos evidencias evaluables:
1. **Entregable técnico visual (60 %):** Escena `Practica_T4_v01.tm` + las 3 imágenes exportadas (`Día`, `Hora Azul` y `Comparativa 50 % con EV bloqueado`) + Informe Técnico-Visual del caso *Polideportivo de Alcobendas*.
2. **Entregable de transferencia (40 %):** Plantilla lumínica y protocolo DIALux–Twinmotion de la Actividad 3 + cuestionario de 4 preguntas conceptuales de cierre.

### Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
| :--- | :--- | :--- | :--- | :--- |
| **Uso de motores GI (*Lumen / Path Tracer*)** | Usa configuración por defecto sin GI adecuada, dejando interiores negros o bloqueando el equipo con parámetros inviables. | Selecciona motor apropiado, pero mantiene rebotes insuficientes o deja ruido/grano severo sin *Denoiser* ni ajuste. | Configura adecuadamente *Lumen* o *Path Tracer* (`Samples`/`Bounces`/`Denoiser`) acorde al hardware logrando escenas limpias. | Optimiza con precisión calidad física vs. tiempo de renderizado según fase del proyecto, dominando alternativas cuando falta hardware DXR. |
| **Iluminación natural (Norte, fecha, HDRI) vs. artificial** | Ignora orientación Norte y calendario, mezcla sol y HDRI conflictivos o intenta mostrar alumbrado artificial bajo sol cenital. | Ajusta hora o HDRI parcialmente, pero comete incoherencias menores de dirección solar o equilibrio interior/exterior. | Alinea Norte real y geolocalización; contrasta coherentemente escena diurna frente a *Hora Azul* o nocturna con equilibrio cromático. | Diseña escenarios temporales precisos (p. ej. solsticio/invierno/hora azul) con HDRI integrado que comunican intención técnica y regulación horaria. |
| **Control de exposición manual y postprocesado** | Mantiene *Auto Exposure ON* en comparativas o abusa de *Bloom*/saturación para enmascarar mala iluminación. | Desactiva *Auto Exposure*, pero varía exposición entre imágenes comparadas o descalibra el balance de blancos. | Bloquea exposición manual (`EV` constante en comparativas), ajusta *White Balance* realista y mantiene postprocesado sobrio. | Ejecuta comparativas visualmente rigurosas y fotográficamente equilibradas que reflejan fielmente el impacto de cambios en la instalación. |
| **Frontera técnica frente a DIALux y normativa** | Presenta imágenes de Twinmotion como prueba de cumplimiento de lux, uniformidad o deslumbramiento. | Menciona que DIALux es necesario, pero omite explicar cómo la exposición o falta de $MF$ distorsionan el render. | Diferencia inequívocamente visualización Twinmotion de cálculo DIALux y proyecto eléctrico, citando verificación normativa vigente aplicable. | Establece un protocolo trazable completo que integra comparativas honestas de Twinmotion junto a mapas/tablas DIALux y normativa por técnico competente. |

### Actividad de autoevaluación (5 minutos al cierre)
Cada participante responde por escrito:
1. *¿Qué ajuste de iluminación o cámara en Twinmotion evitó hoy que mis comparativas visuales engañaran sobre el nivel real de luz?*
2. *Si al activar Path Tracer en una sala cerrada la imagen sale oscura o llena de puntos brillantes, ¿qué tres parámetros revisaré inmediatamente?*
3. *Valora del 1 al 5 tu capacidad para argumentar ante un promotor por qué el renderizado fotorrealista complementa —y nunca reemplaza— al estudio en DIALux.*

---

## 8. Materiales y recursos

### Guion estructurado de diapositivas (Slide 1 a Slide 8)

| Diapositiva | Título | Contenido clave y mensaje visual |
|---|---|---|
| **Slide 1** | Portada: Iluminación realista y rigor fotométrico | Título del tema, Bloque 5 (4/10), puente desde el Tema 3, objetivos Bloom y agenda de 240 minutos. |
| **Slide 2** | Actividad 1: La trampa del *Auto Exposure* | Dos capturas idénticas en apariencia con distinta dotación real de luminarias; revelación del truco de cámara y primera regla de honestidad visual. |
| **Slide 3** | Motores GI en Twinmotion: *Standard*, *Lumen* y *Path Tracer* | Cuadro comparativo de fidelidad de rebotes, consumo GPU/DXR, parámetros clave (`Samples`, `Max Bounces`, `Denoiser`) y cuándo usar cada uno. |
| **Slide 4** | Luz natural: Norte real de Revit, calendario y *Skydome HDRI* | Esquema de geolocalización, latitud, orientación angular y regla para evitar conflictos entre sol físico y mapas HDRI. |
| **Slide 5** | El ciclo del día: Mediodía vs. *Hora Azul* vs. Noche | Tres capturas del mismo edificio mostrando cómo la *Hora Azul* equilibra envolvente arquitectónica e iluminación interior/exterior. |
| **Slide 6** | Exposición manual (`EV`), *White Balance* y postprocesado sobrio | Panel de cámara comentado: cómo bloquear `EV`, ajustar Kelvin y contener el *Bloom* para comparativas técnicas veraces. |
| **Slide 7** | Caso práctico: Polideportivo Municipal de Alcobendas | Análisis de los 4 fallos del render de la constructora (verano, Norte erróneo, HDRI brillante, *Auto Exposure*) frente a la tabla real de DIALux. |
| **Slide 8** | La línea roja: Render ≠ DIALux y puente al Tema 5 | Resumen comparativo Twinmotion vs. DIALux ($E_m$, $U_0$, $UGR$, $MF$) y adelanto del **Tema 5**: cómo traer geometría y archivos fotométricos `.ies` desde DIALux sin falsas promesas. |

### Ficha de trabajo del alumnado
Documento de 2 páginas en 4 bloques:
1. **Bloque A (Experimento perceptivo):** Registro de hipótesis y conclusiones de *La trampa del Auto Exposure*.
2. **Bloque B (Guía rápida GI y cámara):** Cuadro de ajustes *Lumen* vs. *Path Tracer*, *EV*, Kelvin y *HDRI*.
3. **Bloque C (Caso Alcobendas):** Diagnóstico de fallos de escena y respuesta integrada Twinmotion + DIALux.
4. **Bloque D (Transferencia):** Ficha lumínica del proyecto integrador y protocolo de cambios.

### Plantilla técnica práctica: Ficha de Iluminación Escénica y Coherencia DIALux

```markdown
# PROTOCOLO DE ILUMINACIÓN REALISTA Y COHERENCIA FOTOMÉTRICA
Proyecto: ___________________________  Ubicación (Lat/Lon): _______________  Norte Revit: ____°

1. CONFIGURACIÓN DEL MOTOR GRÁFICO (según hardware disponible)
- Modo elegido en trabajo / cliente en directo:  [ ] Standard   [ ] Lumen
- Modo elegido en imágenes finales estáticas:    [ ] Lumen      [ ] Path Tracer (DXR: Sí/No)
- Parámetros Path Tracer (si aplica): Samples: ____ | Max Bounces (min. 6 interior): ____ | Denoiser: ON

2. ESCENARIOS DE ILUMINACIÓN Y CÁMARA BLOQUEADA (Auto Exposure = OFF en comparativas)
| Escenario | Fecha / Hora | Tipo cielo (Sol / HDRI) | Luces artificiales | EV manual fijo | White Balance (K) |
| :--- | :--- | :--- | :--- | :---: | :---: |
| Esc_01_Diurno | Ej. 21/06 12:00 | Sol físico + cielo claro | Atenuadas / Apagadas | ______ | ______ K |
| Esc_02_HoraAzul | Ej. 21/12 18:15 | HDRI crepuscular (sin doble sol) | 100 % encendidas | ______ | ______ K |
| Esc_03_Comparativa | Idéntica a Esc_02 | Idéntico a Esc_02 | Opción reducida / alterna | IDÉNTICO | IDÉNTICO |

3. TRAZABILIDAD OBLIGATORIA CON DIALUX Y CÁLCULO ELÉCTRICO
- Archivo de cálculo DIALux asociado: _________________________ (Fecha / Versión: __________)
- Comprobación en DIALux realizada (Em, U0, UGR y MF verificados según norma aplicable): [ ] SÍ
- Regla de control de cambios: Cualquier ajuste de luminarias pedido tras revisar Twinmotion se
  calcula primero en DIALux y cuadro de cargas eléctrico -> se actualiza Revit -> se re-sincroniza TM.
```

### Lecturas y recursos recomendados
*(Nota de validación previa: antes de usar en clase o estudio, validar la documentación oficial correspondiente a la versión exacta de Twinmotion instalada, así como las ediciones y ámbitos nacionales vigentes de las normas lumínicas citadas como referencia).*
- **Documentación oficial de Twinmotion (Epic Games):** secciones *Lumen Global Illumination*, *Path Tracer settings*, *Lighting, Time of Day & Skydome/HDRI* y *Camera Exposure & Post-processing* (verificar versión actual).
- **Normas de referencia técnica en iluminación (ejemplos ilustrativos a verificar según país y edición vigente):** UNE-EN 12464-1 (*Iluminación de los lugares de trabajo en interiores*), UNE-EN 12193 (*Iluminación de instalaciones deportivas*), Documento Básico CTE DB-HE3 en España o estándares locales equivalentes (CIE / IES / normas nacionales aplicables).
- **Materiales previos del Módulo 2 (DIALux) del programa:** repasar los criterios de interpretación de $E_m$, $U_0$, $UGR$ y factor de mantenimiento para conectarlos con las escenas visuales.
- **Vídeos formativos oficiales de Epic Games sobre iluminación interior en Twinmotion y uso correcto de *Manual Exposure* / *HDRI*:** revisar fecha de publicación y compatibilidad con la versión vigente antes de compartir con el alumnado.

### Glosario de términos clave

| Término | Definición |
|---|---|
| ***Auto Exposure* (Exposición automática)** | Ajuste dinámico automático del brillo de cámara según lo que aparece en pantalla; debe desactivarse en comparativas de iluminación para no distorsionar la realidad percibida. |
| ***Denoiser*** | Filtro matemático aplicado tras el trazado de rayos que elimina el grano residual de imagen manteniendo la geometría nítida con menor tiempo de cálculo. |
| **Exposición manual (*EV*)** | Parámetro fijo que controla la sensibilidad luminosa de la cámara virtual, indispensable para comparar con honestidad dos esquemas de alumbrado. |
| ***Fireflies*** | Puntos aislados excesivamente brillantes que aparecen como artefactos de ruido en renders con *Path Tracer* ante fuentes pequeñas intensas o materiales emisivos mal calibrados. |
| **HDRI (*High Dynamic Range Image*)** | Mapa ambiental esférico con rango dinámico real utilizado para iluminar y generar reflejos naturales consistentes de cielo o entorno en la escena 3D. |
| **Hora Azul (*Blue Hour*)** | Momento crepuscular de cielo azulado tenue ideal en visualización arquitectónica para equilibrar luz ambiental exterior y protagonismo de luminarias artificiales. |
| **Iluminación Global (GI)** | Simulación de rebotes indirectos de la luz entre todas las superficies de un recinto, esencial para lograr realismo volumétrico en interiores. |
| ***Tone Mapping*** | Transformación matemática que adapta el amplio rango de luminancias simuladas de una escena 3D al rango limitado de colores de un monitor o imagen digital. |

---

## 9. Adaptaciones

### Sesión presencial
- **Calibración en aula oscurecida parcialmente:** Al comparar escenas en *Hora Azul* y niveles de exposición manual, atenuar brevemente las luces frontales cercanas a la pantalla de proyección del aula para apreciar correctamente los detalles en sombras y los gradientes suaves de luz indirecta.
- **Demostración en vivo con equipo de referencia DXR:** Si algunos alumnos trabajan en portátiles sin soporte de *Path Tracer*, proyectar desde el equipo del formador la comparación en directo entre *Standard*, *Lumen* y *Path Tracer* sobre la misma cámara y archivo para observar diferencias de rebotes y tiempos de cálculo.

### Sesión online síncrona
- **Prueba comparativa previa de hardware:** Pedir a los participantes al arrancar la Actividad 2 que indiquen por chat si su visor activa *Lumen / Path Tracer* o trabaja en modo estándar, ofreciendo rutas equivalentes de ajuste (`Standard` + `Ambient/Fill` calibrado con rigor cuando no haya soporte DXR).
- **Revisión ciega en encuesta:** Realizar la Actividad 1 mediante encuesta anónima en Zoom/Teams o Mentimeter antes de revelar los datos de exposición de `Render Alpha` y `Render Beta` para maximizar el impacto didáctico.

### Sesión asíncrona
- **Secuencia autoguiada en el campus virtual:**
  1. Vídeocápsulas prácticas: (a) *Lumen vs. Path Tracer* y gestión de rebotes (`Max Bounces`); (b) geolocalización, Norte real y HDRI; (c) bloqueo de *EV* y por qué el render no mide lux.
  2. Realización individual de la Actividad 2 entregando las tres imágenes comparativas (`Día`, `Hora Azul` y `50 % con EV idéntico`) junto con la captura de ajustes de cámara que pruebe *Auto Exposure = OFF*.
  3. Foro técnico del caso *Polideportivo de Alcobendas*, proponiendo una respuesta argumentada que conecte escena invernal real, regulación DALI y memoria DIALux.

---

## 10. Conexión con el programa

- **Qué conocimientos previos refuerza:** Rescata directamente los criterios fotométricos ($E_m$, $U_0$, $UGR$, factor de mantenimiento y horario de uso) aprendidos en el **Módulo 2 (Modelado en DIALux)** y los cruza con las texturas y difusores emisivos calibrados en el **Bloque 5, Tema 3**.
- **Qué competencias desarrolla:** Control de motores de iluminación global en tiempo real y trazado de rayos, dirección lumínica diurna y nocturna con geolocalización real, calibración fotográfica manual de cámara y criterio ético-técnico para separar apariencia visual de validación normativa.
- **Cómo se conecta con el tema anterior y posterior en el programa (6 módulos / 50 temas):**
  - *Tema anterior:* Requiere los materiales PBR equilibrados (especialmente *Albedos* no saturados y difusores LED suaves) configurados en el **Bloque 5, Tema 3 (Ajuste de materiales, texturas y acabados para elementos eléctricos)** para que la luz rebote naturalmente sin quemar superficies.
  - *Tema posterior:* Abre directamente el **Bloque 5, Tema 5 (Luminarias importadas desde DIALux)**; una vez comprendido cómo calcula Twinmotion la luz ambiental y la cámara manual, en el Tema 5 el alumnado abordará el puente técnico real entre geometría, familias Revit y archivos fotométricos `.ies` / `.ldt` procedentes del catálogo de cálculo.
- **Evidencia de aprendizaje que dejará el alumnado:** (1) Serie comparativa de tres imágenes exportadas desde `Practica_T4_v01.tm` con exposición manual bloqueada y registro de parámetros GI, y (2) Protocolo individual de coherencia entre visualizaciones Twinmotion y memorias DIALux para el proyecto integrador.

---

## Siguientes pasos para el formador

1. **Preparar las dos imágenes de la Actividad 1 (*La trampa del Auto Exposure*):** Verificar que ambas muestran exactamente el mismo encuadre y que el cambio percibido demuestra con claridad el engaño de la exposición automática.
2. **Comprobar soporte *Lumen* y *Path Tracer* en los equipos del curso:** Tener anotados los requisitos exactos de la versión instalada de Twinmotion para orientar rápidamente a quienes trabajen en modo estándar sin GPU DXR.
3. **Suministrar 2-3 mapas HDRI de ejemplo ligeros (Día nublado, Atardecer/Hora Azul, Noche urbana):** Facilitar archivos `.hdr`/`.exr` de resolución manejable (`2K`–`4K`) o validar los integrados en la librería de Twinmotion para evitar descargas lentas en clase.
4. **Reforzar la trazabilidad normativa:** Recordar en el caso de Alcobendas que cualquier valor de lux o $UGR$ citado en el curso es meramente orientativo hasta verificar la edición y norma aplicable en el país del proyecto.
5. **Preparar los archivos puente para el Tema 5:** Tener listos un archivo `.ldt` de fabricante europeo, su equivalente `.ies`, una familia de luminaria en Revit y una exportación geométrica de ejemplo desde DIALux para desmontar mitos de interoperabilidad en la próxima sesión.
