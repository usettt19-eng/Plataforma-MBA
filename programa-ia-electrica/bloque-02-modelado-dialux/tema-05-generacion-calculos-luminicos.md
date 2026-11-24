# Tema 5. Generación de cálculos lumínicos

## 1. Ficha del tema

| Campo | Detalle |
| :--- | :--- |
| **Título del tema** | Generación de cálculos lumínicos |
| **Bloque y posición dentro del programa** | Bloque 2: Modelado en DIALux — Posición 5 de 5 (Tema 16 de 50 del programa — Cierre del Bloque 2 y puente al Bloque 3) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Haber completado los Temas 1 a 4 del Bloque 2 (proyecto en unidades SI con planos 2D, materiales calibrados y luminarias reales `.ldt`/`.ies` implantadas) y cálculo de cargas eléctricas básicas del Bloque 1. |
| **Resultado general de aprendizaje** | Al finalizar la sesión, el alumnado será capaz de configurar factores de mantenimiento realistas y rejillas de cálculo en DIALux, ejecutar e interpretar cuantitativa y gráficamente resultados ($E_m$, $U_0$, $UGR$, aislíneas, colores falsos, $LPD$ / $VEEI$), exportar memorias lumínicas completas y distinguir estrictamente el alcance del estudio fotométrico frente al cálculo eléctrico reglamentario y al modelado BIM posterior en Revit MEP. |

---

## 2. Objetivos de aprendizaje

Al completar esta sesión de 4 horas, el alumnado será capaz de:

1. **Calcular** y justificar el Factor de Mantenimiento ($MF$) realista de un proyecto considerando la depreciación de la fuente, probabilidad de fallo y ensuciamiento de luminarias y superficies del recinto *(Nivel de Bloom: Aplicar)*.
2. **Configurar** rejillas de cálculo, superficies verticales/cilíndricas y puntos de observación UGR garantizando una resolución espacial estadísticamente válida en DIALux *(Nivel de Bloom: Aplicar)*.
3. **Analizar** mapas de aislíneas, gráficos de colores falsos y tablas numéricas de resultados ($E_m$, $U_0$, $UGR$, $LPD$/$VEEI$) para detectar puntos calientes, zonas oscuras, problemas de deslumbramiento o sobreconsumo eléctrico *(Nivel de Bloom: Analizar)*.
4. **Evaluar** una memoria lumínica completa detectando manipulaciones frecuentes (MF irreal, rejillas sesgadas, exclusión injustificada de puntos) y delimitando estrictamente qué valida el estudio fotométrico frente al cálculo eléctrico reglamentario y la visualización en Twinmotion *(Nivel de Bloom: Evaluar)*.
5. **Generar** una memoria lumínica estructurada y el paquete de datos geométricos/eléctricos verificados ($X, Y, Z$, potencia unitaria y total por zona) listo para coordinar el modelado 3D en Revit MEP (Bloque 3) *(Nivel de Bloom: Crear)*.

---

## 3. Contenidos esenciales

### 3.1. Factores de mantenimiento (MF), rejillas y superficies de cálculo

#### Explicación breve y clara
Ninguna instalación luminosa conserva el $100\ \%$ de su flujo inicial indefinidamente: los LED deprecian su emisión con las horas de funcionamiento ($L_x$), el polvo se acumula sobre difusores y reflectores, y las pinturas de paredes y techos pierden reflectancia con el uso. El **Factor de Mantenimiento ($MF$, *Maintenance Factor*)** corrige el cálculo inicial para asegurar que la instalación siga cumpliendo el nivel mínimo exigido ($E_m$) al final del ciclo de mantenimiento previsto. Dejar $MF = 1,00$ en DIALux es un error grave que infradimensiona la instalación desde el primer año. Paralelamente, la validez numérica de los resultados depende de configurar adecuadamente la **rejilla de puntos de cálculo** (ni excesivamente gruesa, que oculte sombras puntuales, ni absurdamente fina) y añadir superficies verticales (pizarras, estanterías) o puntos de cálculo UGR en la orientación real de las personas usuarias.

#### Conceptos clave
- **Factor de Mantenimiento ($MF$):** Producto de cuatro factores orientativos habituales (ej. metodología tipo CIE 97, a verificar según guía aplicable): mantenimiento de flujo luminoso ($LLMF$), factor de supervivencia ($LSF$), ensuciamiento de luminaria ($LMF$) y ensuciamiento de superficies ($RSMF$).
- **Valores típicos de referencia:** Entorno limpio de oficinas con mantenimiento regular ($MF \approx 0,80$); ambiente normal/comercial ($MF \approx 0,70\text{–}0,75$); nave industrial sucia o con polvo/humos sin limpieza frecuente ($MF \approx 0,60\text{–}0,67$), siempre justificados con ficha L80/B10 del fabricante y plan de limpieza.
- **Resolución de rejilla de cálculo:** Separación máxima entre nodos de evaluación en planos de utilidad y tareas (DIALux propone por defecto pasos acordes a la norma seleccionada, p. ej. relación máxima ancho/largo y número mínimo de puntos; conviene comprobar que la rejilla capture obstáculos y pasillos estrechos).
- **Superficies auxiliares y observadores UGR:** Además del plano horizontal de utilidad, inclusión de planos verticales (rostros, estanterías, cuadros eléctricos), áreas cilíndricas y puntos de observador UGR orientados hacia los puestos de trabajo reales.

#### Definiciones necesarias
- **Factor de Mantenimiento ($MF$):** Relación entre la iluminancia media de la instalación al cabo de un periodo determinado (antes de realizar mantenimiento) y la iluminancia media inicial cuando la instalación es completamente nueva ($MF = LLMF \times LSF \times LMF \times RSMF$).
- **Rejilla de cálculo (*Calculation Grid*):** Matriz discreta de puntos bidimensional o tridimensional distribuida sobre una superficie donde DIALux evalúa iluminancias ($E_h$, $E_v$), uniformidades y gradientes.
- **Punto / superficie UGR:** Posición y dirección de mirada definidas dentro del local para evaluar el índice de deslumbramiento unificado percibido por un observador sentado o de pie.

#### Ejemplo práctico realista
En el diseño de un taller de carpintería metálica con presencia moderada de polvo seco y limpieza programada de luminarias cada 24 meses, el proyectista evalúa luminarias LED con dato fotométrico $L_{80}B_{10}$ a $50\,000\ \text{h}$. Consultando una metodología orientativa de cálculo de mantenimiento (p. ej., criterios tipo CIE 97 / guías técnicas aplicables, a verificar): $LLMF = 0,85$, $LSF = 0,98$, $LMF = 0,84$ (ambiente sucio/IP65) y $RSMF = 0,90$, lo que resulta en $MF = 0,85 \times 0,98 \times 0,84 \times 0,90 \approx 0,63$. Si alguien hubiera calculado con el $0,80$ automático por defecto (pensado para oficina limpia) o con $1,00$ (sin depreciación), al cabo de dos años la iluminancia mantenida caería un $21\ \%\text{–}37\ \%$ por debajo del proyecto. *(Nota: documente siempre las hipótesis de horas anuales de uso y frecuencia de limpieza en la memoria y verifique requisitos normativos vigentes en su país).*

#### Errores frecuentes
- Dejar $MF = 1,00$ en proyectos reales (equivalente a asumir cero envejecimiento LED y cero polvo para siempre) para conseguir aprobar justo por el límite de lux o de potencia.
- Usar el $MF = 0,80$ estándar de oficina limpia en cocinas industriales, aparcamientos o naves siderúrgicas.
- Definir una rejilla con solo 4 o 6 puntos en un pasillo largo o sala irregular, perdiendo las zonas oscuras entre luminarias o detrás de pilares.
- Evaluar un único punto UGR mirando hacia una pared ciega favorable en lugar de orientar las direcciones de vista hacia los puestos reales con pantallas y dirección de circulación.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué cuatro componentes físicos integran habitualmente el Factor de Mantenimiento ($MF$) y por qué $MF = 1,00$ resulta técnicamente inválido en edificación?
2. ¿Cómo afecta reducir el paso de la rejilla de cálculo (por ejemplo, de $2,00\ \text{m}$ a $0,50\ \text{m}$) en una sala con pilares o estanterías?
3. ¿En qué situaciones es obligatorio añadir superficies de cálculo verticales además del plano horizontal de utilidad?

---

### 3.2. Interpretación cuantitativa: Em, U0, UGR y eficiencia energética (VEEI / LPD)

#### Explicación breve y clara
Una vez ejecutado el cálculo, DIALux entrega una tabla de resultados numéricos que el proyectista debe saber interpretar conjuntamente, porque optimizar un indicador puede empeorar otro. La **iluminancia media mantenida ($E_m$)** expresa la cantidad promedio de luz sobre la superficie (recordando que suele calcularse multiplicada por $MF$, aunque también conviene revisar el valor inicial al encenderse el primer día para evitar sobreiluminación molesta). La **uniformidad global ($U_0 = E_{\min}/E_m$)** detecta zonas oscuras inaceptables aunque la media sea alta. El **UGR** mide la incomodidad visual por deslumbramiento directo de las luminarias. Finalmente, indicadores como la **densidad de potencia instalada ($LPD$, en $\text{W/m}^2$)** o el **Valor de Eficiencia Energética de la Instalación ($VEEI$, en $\text{W/m}^2$ por cada $100\ \text{lx}$)** miden si se cumple la exigencia energética sin derrochar energía.

#### Conceptos clave
- **Iluminancia media ($E_m$) vs. mínima ($E_{\min}$) y máxima ($E_{\max}$):** Un espacio con $E_{\max} = 1\,200\ \text{lx}$ bajo el foco y $E_{\min} = 120\ \text{lx}$ entre focos puede dar $E_m = 500\ \text{lx}$, pero es visualmente pésimo por su baja uniformidad ($U_0 = 0,24$).
- **Uniformidad global ($U_0$) y relación de diversidad:** Criterio clave de confort y seguridad; típicamente en áreas de tarea visual se buscan valores altos (ej. orientativo $U_0 \ge 0,60$, sujeto a verificación normativa de la tarea exacta).
- **Índice de Deslumbramiento Unificado ($UGR$):** Escala psicofísica habitual de $10$ a $31$ (valores típicos límite orientativos: $16$, $19$, $22$, $25$ según actividad); bajar el $UGR$ exige reducir luminancia lateral de las luminarias o evitar ángulos rasantes en la línea de visión.
- **Eficiencia energética ($LPD$ y $VEEI$):** $LPD = P_{\text{total}} / S_{\text{útil}}$ ($\text{W/m}^2$) y $VEEI = (P_{\text{total}} \times 100) / (S_{\text{útil}} \times E_m)$ ($\text{W/m}^2 \cdot 100\ \text{lx}$, ejemplo regulatorio español tipo CTE DB-HE3, **a verificar obligatoriamente por país, tipología de local y edición vigente**).

#### Definiciones necesarias
- **Uniformidad global ($U_0$):** Cociente entre la iluminancia mínima ($E_{\min}$) y la iluminancia media ($E_m$) medidas sobre una misma superficie de cálculo ($U_0 = E_{\min} / E_m$).
- **UGR (*Unified Glare Rating*):** Índice que cuantifica la probabilidad y magnitud de deslumbramiento molesto provocado por las luminarias de una instalación interior respecto al fondo luminoso del entorno y la posición del observador.
- **VEEI (Valor de Eficiencia Energética de la Instalación):** Indicador específico (empleado en normativa española de ahorro energético en edificación, como ejemplo ilustrativo a verificar) que relaciona la potencia total instalada de alumbrado ($P$, incluidas pérdidas de equipos auxiliares), la superficie iluminada ($S$) y la iluminancia media horizontal mantenida ($E_m$).

#### Ejemplo práctico realista
En una oficina de ingeniería de $100\ \text{m}^2$ ($10,00\ \text{m} \times 10,00\ \text{m}$) se comparan dos soluciones que logran $E_m = 520\ \text{lx}$ (con $MF = 0,80$):
- **Solución A (16 paneles básicos de $40\ \text{W}$):** Potencia total instalada $P = 16 \times 40 = 640\ \text{W}$.
  - $LPD = 640 / 100 = 6,40\ \text{W/m}^2$.
  - $VEEI = (640 \times 100) / (100 \times 520) \approx 1,23\ \text{W/m}^2 \cdot 100\ \text{lx}$.
  - Resultados DIALux: $U_0 = 0,64$, pero $UGR = 21,4$ (supera el límite ilustrativo habitual de $19$ para oficinas).
- **Solución B (14 paneles microprismáticos eficientes de $29\ \text{W}$):** Potencia total instalada $P = 14 \times 29 = 406\ \text{W}$.
  - $LPD = 406 / 100 = 4,06\ \text{W/m}^2$ ($36,6\ \%$ menos carga eléctrica).
  - $VEEI = (406 \times 100) / (100 \times 520) \approx 0,78\ \text{W/m}^2 \cdot 100\ \text{lx}$.
  - Resultados DIALux: $U_0 = 0,68$ y $UGR = 17,6$ ($\le 19$).
*(Nota: verifique siempre si el reglamento vigente aplicable en su jurisdicción exige incluir o excluir ciertos equipos o usar límites máximos de $VEEI$/$LPD$ específicos por uso).*

#### Errores frecuentes
- Mirar únicamente si $E_m$ supera el objetivo e ignorar una uniformidad $U_0$ deficiente o un $UGR$ excesivo.
- Calcular el $VEEI$ o $LPD$ usando solo los vatios del LED sin sumar las pérdidas de los *drivers* o fuentes de alimentación.
- Sobredimensionar intencionadamente $E_m$ a $900\ \text{lx}$ en oficinas donde se requerían $500\ \text{lx}$ para «maquillar» un $VEEI$ bajo (a costa de disparar el consumo real en $\text{kWh}$ y generar fatiga visual).
- Comparar el $UGR$ calculado sobre una rejilla de posición fija sin verificar si gira o cambia al girar los escritorios $90^\circ$.

#### Preguntas que el alumnado debería poder responder
1. ¿Cómo es posible obtener simultáneamente $E_m = 520\ \text{lx}$ y una pésima uniformidad $U_0 = 0,25$ en una misma sala?
2. ¿Qué fórmula relaciona $LPD$ ($\text{W/m}^2$) y $VEEI$ ($\text{W/m}^2 \cdot 100\ \text{lx}$), y qué variables deben comprobarse con rigor antes de dar por bueno el indicador?
3. Si un cálculo da $UGR = 22$ en un aula de ordenadores donde el objetivo orientativo es $\le 19$, ¿qué tres palancas de diseño (óptica, disposición o entorno) permiten corregirlo?

---

### 3.3. Lectura de aislíneas, colores falsos y exportación de memorias lumínicas

#### Explicación breve y clara
Los números globales en una tabla resumen no muestran *dónde* exactamente sobra o falta luz dentro del espacio. Para diagnosticar el comportamiento espacial del recinto, DIALux ofrece dos representaciones gráficas complementarias: las **aislíneas (curvas isolux)**, que trazan contornos de igual iluminancia (similares a las curvas de nivel de un mapa topográfico), y la vista de **colores falsos (*false color rendering*)**, que tiñe el modelo 3D y las superficies de cálculo según una escala graduada de color asociable a lux ($\text{lx}$) o luminancias ($\text{cd/m}^2$). Finalmente, la pestaña **Documentación** permite compilar una **memoria lumínica exportable a PDF** y extraer listados tabulares (ubicaciones $(X, Y, Z)$, recuento de luminarias y potencias) depurados para entregar al cliente y alimentar la fase BIM siguiente.

#### Conceptos clave
- **Curvas aislíneas (isolux):** Líneas continuas etiquetadas con valores concretos en lux (p. ej., $100, 200, 300, 500\ \text{lx}$) que permiten leer gradientes suaves frente a caídas bruscas junto a obstáculos o paredes.
- **Renderizado en colores falsos:** Mapa térmico cromático (en $\text{lx}$ o $\text{cd/m}^2$) aplicado sobre el espacio 3D; permite detectar de un vistazo focos quemados (zonas blancas/rojas de exceso), esquinas muertas (violetas/azules oscuros) y contraste de luminancias en paredes/techos.
- **Configuración de escala cromática:** Obligación de fijar una escala manual coherente (p. ej., $0\text{–}1\,000\ \text{lx}$) al comparar dos soluciones o estancias, porque la escala automática puede engañar visualmente al reajustar sus extremos.
- **Estructura limpia de la memoria PDF:** Portada con alcance y advertencias de verificación, plano de implantación de luminarias acotado, fichas fotométricas `.ldt`/`.ies` usadas, tablas resumen por local, gráficos de colores falsos/isolux y tabla de coordenadas/potencias.

#### Definiciones necesarias
- **Aislínea (curva isolux):** Lugar geométrico de los puntos sobre una superficie de cálculo que reciben exactamente el mismo valor de iluminancia ($\text{lx}$).
- **Vista de colores falsos (*False Color*):** Representación gráfica técnica que sustituye las texturas y colores reales de una escena 3D por un código cromático calibrado correspondiente a valores numéricos de iluminancia ($\text{lx}$) o luminancia ($\text{cd/m}^2$).
- **Memoria lumínica:** Documento técnico formal generado tras el cálculo fotométrico que recoge hipótesis ($MF$, reflectancias), catálogos empleados, resultados cuantitativos/gráficos y cumplimiento respecto al perfil de uso analizado.

#### Ejemplo práctico realista
En una clínica dental, el plano resumen numérico indica $E_m = 510\ \text{lx}$ y $U_0 = 0,61$ en la sala de espera y recepción. Sin embargo, al activar la vista de **colores falsos** con escala fijada entre $0$ y $1\,000\ \text{lx}$, el proyectista detecta al instante una mancha azul oscura ($140\ \text{lx}$) detrás de un pilar estructural junto al mostrador de atención al paciente, compensada numéricamente por una zona sobreiluminada rojo-naranja ($920\ \text{lx}$) bajo dos proyectores mal orientados. Corrigiendo el ángulo de esos proyectores y desplazando $0,60\ \text{m}$ un *downlight* respecto al pilar, elimina el punto oscuro y logra una distribución cromática homogénea en verde-amarillo ($450\text{–}550\ \text{lx}$) con el mismo número de luminarias. Al exportar la memoria PDF, activa únicamente las páginas técnicas clave (reduciendo un informe caótico de 95 páginas a un dosier claro de 18 páginas). *(Nota: recuerde anotar el alcance fotométrico en el pie de memoria).*

#### Errores frecuentes
- Exportar el informe completo automático de DIALux sin filtrar («imprimir todo»), generando PDFs ilegibles de más de 100 páginas llenos de tablas repetitivas y rejillas vacías.
- Comparar gráficos de colores falsos de dos locales distintos usando «escala automática» en vez de fijar los mismos valores mínimo y máximo en la leyenda.
- Presentar un render realista iluminado con luz cálida decorativa como si fuera una prueba técnica en vez de acompañar los planos de isolux y colores falsos calibrados.
- Olvidar ocultar o desactivar datos confidenciales del cliente antes de compartir extractos o consultar a una IA sobre tablas exportadas.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué es imprescindible bloquear manualmente los límites mínimo y máximo de la escala de colores falsos al comparar dos alternativas de diseño?
2. ¿Qué información crítica aportan las curvas aislíneas y los mapas de colores falsos que queda oculta en un simple promedio numérico ($E_m$)?
3. ¿Qué apartados mínimos debe incluir una memoria lumínica profesional bien depurada para que sea útil en oficina técnica y obra?

---

### 3.4. Distinción estricta: estudio fotométrico vs. cálculo eléctrico normativo vs. BIM/render (Puente a Revit MEP)

#### Explicación breve y clara
Al cerrar el Bloque 2 es absolutamente vital trazar las fronteras profesionales entre las cuatro disciplinas que intervienen en el programa. **DIALux realiza el cálculo fotométrico y estima la potencia total instalada de alumbrado por zona**, pero **NO sustituye el cálculo eléctrico reglamentario** (Bloque 1: factor de simultaneidad, intensidad de diseño con armónicos/factor de potencia, caída de tensión por longitud de circuito, secciones de cable, selectividad de interruptores magnetotérmicos, diferenciales ni puesta a tierra conforme al REBT, IEC 60364 o NEC vigente). Tampoco reemplaza al **modelado constructivo MEP en Revit** (Bloque 3: canalizaciones, bandejas, tubos, cajas de registro y coordinación de interferencias), ni sus gráficos equivalen a la **visualización arquitectónica en Twinmotion** (Bloque 5). Comprender qué entrega DIALux exactamente al equipo BIM y eléctrico garantiza continuidad real sin inventar integraciones automáticas inexistentes.

#### Conceptos clave
- **Frontera fotométrica vs. eléctrica:** DIALux valida lux, uniformidad, UGR y $\text{W/m}^2$, pero desconoce longitud real de circuitos, agrupamiento en bandejas, caída de tensión ($\Delta U\ \%$), poder de corte ni calibrado de protecciones; esos cálculos son obligatorios en la memoria eléctrica normativa por técnico competente.
- **Frontera DIALux vs. Revit MEP (Bloque 3):** El cálculo lumínico define *qué* luminaria va, *dónde* se sitúa $(X, Y, Z)$ y *cuánta* potencia absorbe; en Revit MEP se modelan las familias eléctricas conectadas a circuitos, tableros, tubos y uniones con coordinación 3D frente a climatización y estructura.
- **Interoperabilidad realista (sin magia):** DIALux puede exportar DWG con bloques de posición, listados CSV/PDF de luminarias con coordenadas $(X, Y, Z)$ e IFC según versión/configuración, pero no transfiere automáticamente circuitos ni parámetros eléctricos completos listos para firmar en Revit, y cualquier flujo hacia Twinmotion (Bloque 5) tiene límites reales que requieren revisión manual de materiales, luces y escena.
- **Asistencia verificada con IA (anticipo Bloque 6):** Herramientas como ChatGPT o Claude pueden ayudar a redactar resúmenes comparativos o revisar consistencia de tablas de luminarias ya exportadas (sin planos ni datos confidenciales), pero **nunca** validan cálculos eléctricos ni fotométricos ni sustituyen la firma/revisión técnica competente.

#### Definiciones necesarias
- **Cumplimiento eléctrico reglamentario:** Verificación formal de que una instalación cumple las prescripciones de seguridad, dimensionamiento de conductores, caída de tensión, protecciones contra sobreintensidades/contactos y puesta a tierra establecidas por el reglamento eléctrico vigente del país aplicable (p. ej. REBT en España, NEC/NFPA 70 en EE. UU., u otro reglamento nacional).
- **Paquete de transferencia DIALux → Revit MEP:** Conjunto estructurado de entregables verificados (plano DWG exportado referido al origen común `(0, 0, 0)`, tabla de coordenadas $(X, Y, Z)$ y rotación, listado de referencias `.ldt`/`.ies` con potencia total y $\cos\varphi$, y cota de montaje/plenum requerido) para alimentar el modelado 3D eléctrico.
- **Validación independiente:** Comprobación realizada por un profesional cualificado mediante herramientas o cálculos paralelos contrastados antes de dar por definitivos cualquier resultado de software de simulación o de asistente IA.

#### Ejemplo práctico realista
Tras cerrar el estudio lumínico de un edificio administrativo en DIALux ($42$ luminarias tipo `LUM-01` de $30\ \text{W}$ y $18$ tipo `LUM-02` de $44\ \text{W}$, potencia activa total de alumbrado $= 2\,052\ \text{W}$), el técnico prepara la transición al **Bloque 3 (Revit MEP)** y la verificación con el **Bloque 1**:
1. Exporta desde DIALux el plano DWG de planta con bloques alineados al origen común `A-1` `(0, 0, 0)` y el listado CSV/PDF de coordenadas $(X, Y, Z)$ y potencias unitarias.
2. Verifica en su hoja eléctrica (Bloque 1) que, considerando factor de potencia $\cos\varphi = 0,92$ y coeficiente de carga aplicable según reglamento nacional (p. ej. factor de mayoración si aplica en lámparas de descarga/LED según normativa vigente a verificar), reparte las $60$ luminarias en 3 circuitos independientes C1, C2 y C3 de alumbrado, calcula intensidad de diseño, caída de tensión máxima admisible en el tramo más lejano ($\Delta U\ \%$) y selecciona conductores y magnetotérmicos/diferenciales conformes a norma.
3. Entrega en Revit MEP las cotas exactas para alojar luminarias y rutear tubos desde el cuadro general de planta sin colisiones. *(Nota: el programa formativo no habilita legalmente por sí solo para firmar proyectos oficiales sin la titulación y colegiación exigidas en cada país).*

#### Errores frecuentes
- Entregar la memoria PDF de DIALux al cliente o a obra afirmando que «el proyecto eléctrico de alumbrado ya está calculado y cumple el reglamento».
- Enviar el archivo `.evo` crudo al equipo de Revit MEP esperando que el modelador «lo abra directamente en Revit» sin exportar plano DWG coordinado al origen común ni listado de coordenadas/potencias.
- Confundir el render fotorrealista obtenido en Twinmotion (o las vistas 3D bonitas de DIALux) con una prueba de cumplimiento de $E_m$, $U_0$ o caída de tensión eléctrica.
- Pedir a ChatGPT o Claude que «calcule la sección del cable de alumbrado a partir del PDF de DIALux» y copiar el resultado sin verificación independiente de fórmulas, tablas de intensidad admisible ni normativa vigente.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué datos exactos puede entregar DIALux al equipo de diseño eléctrico (Bloque 1) y al modelado en Revit MEP (Bloque 3), y qué cálculos eléctricos quedan completamente fuera de su alcance?
2. ¿Por qué un render visualmente atractivo de un espacio iluminado en Twinmotion no demuestra ni cumplimiento fotométrico ni seguridad eléctrica?
3. ¿Cómo debe organizarse el paquete de exportación desde DIALux hacia Revit MEP cuando el proyecto comparte origen común `(0, 0, 0)`?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** cierra el Bloque 2 integrando cálculo completo sobre el archivo acumulado de los Temas 1–4, lectura diagnóstica de aislíneas y colores falsos, auditoría de un informe fraudulento/erróneo y preparación del paquete de salida hacia Revit MEP (Bloque 3).

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
| :--- | :--- | :--- | :--- |
| **1. Apertura y activación** | 00:00 – 00:25 (25 min) | Realiza la evaluación diagnóstica inicial y lanza la **Actividad 1 (Activación)**: muestra un resumen bonito de DIALux con «todo en verde» junto a un render atractivo, ocultando que el $MF = 1,00$ y faltan puntos de cálculo. | En parejas, audita los resultados mostrados buscando anomalías numéricas, sospechas energéticas y confusiones entre estética, fotometría y electricidad. |
| **2. Microexposición: MF, rejillas y parámetros (3.1 y 3.2)** | 00:25 – 00:55 (30 min) | Explica cálculo del Factor de Mantenimiento ($MF$), configuración de rejillas y puntos UGR, e interpretación conjunta de $E_m$, $U_0$, $UGR$, $LPD$ y $VEEI$ (aclarando verificación normativa por país/edición). | Calcula el $MF$ realista de dos recintos distintos en su ficha y contrasta con calculadora cómo varía el $VEEI$/$LPD$ al cambiar eficacia de luminaria. |
| **3. Microexposición: Gráficos, memorias y frontera BIM/Eléctrica (3.3 y 3.4)** | 00:55 – 01:25 (30 min) | Demuestra lectura de aislíneas, fijación de escala en colores falsos, depuración de memoria PDF y exportación de DWG/tablas hacia Revit MEP, delimitando claramente lo que DIALux NO calcula. | Observa la detección de un punto ciego tras un pilar mediante colores falsos y registra la lista de entregables reales que alimentarán el Bloque 3. |
| **4. Práctica guiada: Actividad 2 (Aplicación técnica)** | 01:25 – 02:15 (50 min) | Lanza la **Actividad 2** sobre el archivo `B2_T04_Luminarias.evo` del Tema 4, asiste en ajuste de $MF$, rejillas, observadores UGR, optimización de disposición de luminarias y exportación limpia. | Ajusta $MF$ y rejillas, ejecuta el cálculo completo, analiza aislíneas y colores falsos, corrige al menos un déficit de uniformidad o $UGR$, y exporta la memoria PDF depurada + DWG de posiciones. |
| *Descanso técnico* | 02:15 – 02:30 (15 min) | Pausa activa y verificación de tiempos de cálculo/exportación en los equipos. | Descanso y guardado de versión final `_T05.evo`. |
| **5. Resolución del caso práctico** | 02:30 – 03:10 (40 min) | Presenta el caso **Ingeniería Atlántica S.L. (A Coruña)** con un proyecto manipulado ($MF = 1,00$, puntos bajo muebles eliminados, render como prueba y ausencia de cálculo eléctrico). | En equipos de 3, recalcula con $MF$ realista y rejilla honesta, analiza las desviaciones en colores falsos y redacta el dictamen profesional separando fotometría, electricidad y visualización. |
| **6. Puesta en común y debate técnico** | 03:10 – 03:25 (15 min) | Modera la discusión sobre ética técnica, control de calidad en oficina técnica y coordinación exacta entre el cierre del Bloque 2 y el arranque de Revit MEP (Bloque 3). | Expone las no conformidades detectadas en el caso y presenta cómo conectan sus exportaciones de luminarias con el modelado de tuberías y circuitos. |
| **7. Transferencia a proyecto real (Actividad 3)** | 03:25 – 03:45 (20 min) | Guía la **Actividad 3**, facilitando el *Acta de Cierre Fotométrico y Transferencia a Revit MEP* para cerrar el entregable del Bloque 2 del proyecto integrador. | Compila el resumen de resultados verificados, coordenadas/potencias exportadas y requisitos eléctricos pendientes de cálculo para su proyecto integrador. |
| **8. Evaluación sumativa y cierre** | 03:45 – 04:00 (15 min) | Aplica el cuestionario sumativo final de cierre de bloque, recoge evidencias, guía la autoevaluación y presenta el puente hacia el **Bloque 3 (Modelado 3D – Revit MEP eléctricas)**. | Completa la prueba de cierre y autoevaluación; archiva su memoria lumínica PDF y su paquete de salida DWG/CSV para la primera sesión del Bloque 3. |

*Suma verificada: 25 + 30 + 30 + 50 + 15 + 40 + 15 + 20 + 15 = **240 minutos (4 horas)**.*

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «El informe perfecto que oculta tres trampas»
- **Nombre:** El informe perfecto: auditoría exprés de una memoria engañosa.
- **Objetivo:** Agudizar el espíritu crítico para detectar manipulaciones de cálculo habituales en estudios lumínicos entregados «con todo aprobado».
- **Instrucciones para el alumnado:**
  1. Examinad en parejas durante 6 minutos la hoja resumen y el render proyectado de una oficina técnica de $120\ \text{m}^2$ que presenta: $E_m = 502\ \text{lx}$ (objetivo $500\ \text{lx}$), $U_0 = 0,61$, $MF = 1,00$, rejilla limitada a una pequeña isla central de $4\ \text{m} \times 4\ \text{m}$, y una nota al pie que dice: *«Cumple REBT e iluminación según el render adjunto»*.
  2. Enumerad al menos 4 defectos metodológicos o legales graves presentes en ese entregable.
- **Materiales necesarios:** Diapositiva con la tabla resumen manipulada y el render decorativo.
- **Tiempo estimado:** 12 minutos (integrados en la Fase 1).
- **Rol del formador:** Recoger todas las observaciones del grupo y contrastar cómo $MF = 1,00$ o recortar la rejilla artificialmente falsean la realidad operativa en pocos meses.
- **Producto o entregable esperado:** Lista consensuada de «4 banderas rojas de auditoría en informes de DIALux».
- **Criterios de éxito:** El alumnado identifica el $MF = 1,00$, el recorte sesgado de rejilla y la confusión grave entre cálculo fotométrico/render y cumplimiento eléctrico reglamentario (REBT/norma local).

### Actividad 2 (Aplicación técnica): «Cálculo completo, análisis gráfico y memoria depurada en DIALux»
- **Nombre:** Ejecución de cálculo lumínico, lectura de aislíneas/colores falsos y exportación limpia.
- **Objetivo:** Completar el ciclo fotométrico completo sobre el archivo del Tema 4, ajustando $MF$, rejillas y observadores UGR, optimizando al menos un parámetro deficiente y generando un informe PDF profesional junto al DWG para Revit MEP.
- **Instrucciones para el alumnado:**
  1. Abrid vuestro archivo `B2_T04_Luminarias_NombreApellido.evo` y guardadlo como `B2_T05_CalculoFinal_NombreApellido.evo`.
  2. Configurad un Factor de Mantenimiento realista en cada estancia (por ejemplo, $MF = 0,80$ en oficinas limpias y $MF = 0,70$ en zona de recepción/paso con mayor suciedad o tránsito), documentando el criterio adoptado.
  3. Comprobad que existen rejillas de cálculo activas sobre planos de utilidad y áreas de tarea, e insertad al menos 2 observadores UGR orientados según los puestos de trabajo reales en `P00_E03_DespachoTecnico`.
  4. Ejecutad el cálculo completo. Activad las vistas de **aislíneas** y **colores falsos** fijando manualmente una escala común ($0\text{–}800\ \text{lx}$).
  5. Detectad al menos un defecto espacial (zona oscura tras el armario alto, esquina subiluminada o $UGR > 19$) y ajustad ubicación, orientación o cantidad de luminarias hasta lograr resultados equilibrados.
  6. Calculad manualmente el $LPD$ ($\text{W/m}^2$) y el $VEEI$ de una de las estancias para validar la cifra que reporta la tabla del programa.
  7. Configurad una memoria PDF depurada (entre 10 y 20 páginas útiles, sin tablas superfluas) y exportad el plano DWG de planta con luminarias manteniendo el origen común `A-1` `(0, 0, 0)`.
- **Materiales necesarios:** Archivo `.evo` del Tema 4, calculadora u hoja de cálculo y plantilla de verificación de salidas.
- **Tiempo estimado:** 50 minutos (Fase 4).
- **Rol del formador:** Supervisar en tiempo real la lectura de colores falsos, verificar la fijación manual de escala y comprobar que el DWG exportado conserva coordenadas coherentes en `(0, 0, 0)`.
- **Producto o entregable esperado:** Archivo `B2_T05_CalculoFinal_NombreApellido.evo`, memoria lumínica PDF depurada y DWG de planta exportado para Revit MEP.
- **Criterios de éxito:** $MF < 1,00$ justificado, resultados numéricos y colores falsos coherentes tras la optimización, cálculo manual verificado de $LPD$/$VEEI$, PDF limpio y exportación DWG alineada al origen común.

### Actividad 3 (Transferencia a proyecto real): «Paquete de cierre del Bloque 2 y puente al Bloque 3 (Revit MEP)»
- **Nombre:** Acta de Cierre Fotométrico y Paquete de Transferencia a Revit MEP.
- **Objetivo:** Consolidar la documentación final de iluminación del proyecto integrador dejando claramente definidas las fronteras técnicas y los datos de entrada reales para modelado BIM (Bloque 3) y cálculo eléctrico (Bloque 1).
- **Instrucciones para el alumnado:**
  1. Completad la plantilla *«Acta de Cierre Fotométrico y Transferencia a Revit MEP»* (sección 8.3) para las estancias principales de vuestro proyecto integrador.
  2. Registrad para cada zona: superficie ($\text{m}^2$), $MF$ aplicado, $E_m$, $U_0$, $UGR$, $LPD$/$VEEI$, potencia eléctrica total instalada ($\text{W}$ y $\text{VA}$ estimados con $\cos\varphi$), cota de montaje ($Z$), archivo DWG/CSV exportado y relación de cálculos eléctricos reglamentarios aún pendientes de verificar fuera de DIALux.
  3. **Uso opcional asistido con IA:** Si utilizáis ChatGPT o Claude para redactar un borrador de resumen ejecutivo de la memoria lumínica usando **únicamente** la tabla numérica anónima de resultados (nunca planos ni datos de cliente), revisad línea por línea que la IA no altere unidades ($\text{lx}$, $\text{W/m}^2$), no invente cumplimiento normativo ni mezcle cálculo fotométrico con seguridad eléctrica.
- **Materiales necesarios:** Plantilla de la sección 8.3, resultados exportados de DIALux del proyecto integrador y acceso opcional a asistente IA sobre datos anónimos.
- **Tiempo estimado:** 20 minutos (Fase 7).
- **Rol del formador:** Revisar una muestra de actas verificando el puente exacto hacia el Bloque 3 y asegurando que todo participante documenta la verificación independiente humana.
- **Producto o entregable esperado:** *Acta de Cierre Fotométrico y Transferencia a Revit MEP* completada para el proyecto integrador.
- **Criterios de éxito:** Trazabilidad íntegra desde las luminarias calculadas hasta los datos requeridos en Revit MEP y Bloque 1; diferenciación explícita de alcance fotométrico, eléctrico, BIM y visual; cero datos confidenciales expuestos.

---

## 6. Caso práctico

### Auditoría técnica en Ingeniería Atlántica S.L. (A Coruña)

#### Contexto empresarial
**Ingeniería Atlántica S.L.** dirige la reforma integral de una sede técnica de $420\ \text{m}^2$ en A Coruña que alberga una sala diáfana de proyectos ($260\ \text{m}^2$, techo modular a $2,75\ \text{m}$), una sala de control y supervisión operativa 24/7 ($90\ \text{m}^2$, techo acústico oscuro a $2,70\ \text{m}$) y un pasillo de distribución e instalaciones ($70\ \text{m}^2$). Un subcontratista externo de equipamiento comercial ha presentado una propuesta «llave en mano» adjuntando un breve PDF de DIALux y dos imágenes renderizadas de aspecto espectacular para solicitar la aprobación inmediata de la dirección facultativa.

#### Situación o problema
Al someter el archivo `.evo` del subcontratista a una auditoría antes de autorizar el pedido y pasar el diseño al equipo de Revit MEP y cálculo eléctrico, la dirección técnica detecta cinco irregularidades graves:
1. El subcontratista configuró **$MF = 1,00$** en todas las salas para que las luminarias económicas propuestas superaran por la mínima el umbral de $500\ \text{lx}$ ($E_m = 504\ \text{lx}$ en sala de proyectos).
2. En la sala de control 24/7 redujo manualmente la superficie de cálculo a un rectángulo central alejado de las consolas perimetrales y omitió colocar observadores $UGR$, logrando falsamente $U_0 = 0,72$ mientras las esquinas reales caían en penumbra.
3. En la memoria adjunta figuran dos renders fotorrealistas muy atractivos con luz cálida decorativa como «prueba visual de confort», pero el documento carece de mapas de aislíneas, escala fija en colores falsos y desglose de potencia total real con pérdidas del *driver*.
4. En el resumen comercial afirma textualmente: *«Con este estudio de DIALux queda justificado el alumbrado y garantizado el cumplimiento del REBT sin necesidad de modificar los circuitos existentes»*, asumiendo además que los cables actuales soportarán la nueva carga sin calcular caída de tensión ni protecciones.
5. Exportó un plano DWG sin origen común (desplazado y rotado aleatoriamente) que no encaja sobre las plantillas arquitectónicas de Revit MEP.

#### Datos disponibles
- **Sala de proyectos ($260\ \text{m}^2$):**
  - Dotación propuesta por subcontratista: $34$ luminarias empotrables tipo `P_ECO` ($4\,100\ \text{lm}$ netos, $38\ \text{W}$ totales de sistema, $\cos\varphi = 0,90$, óptica opal abierta).
  - Con $MF = 1,00$: $E_m = 504\ \text{lx}$, $U_0 = 0,58$, $UGR$ no evaluado (al activar observadores hacia pantallas sube a $22,8$).
  - Cálculo realista requerido de $MF$ (oficina técnica limpia, limpieza cada 2 años, LED $L_{80}B_{10}$): $MF = 0,80$.
- **Sala de control 24/7 ($90\ \text{m}^2$, techo oscuro $\rho = 0,25$, 8 consolas en perímetro):**
  - Dotación propuesta: $10$ luminarias lineales de $48\ \text{W}$ ($4\,800\ \text{lm}$ netos cada una, $\cos\varphi = 0,92$).
  - Al restaurar la rejilla completa sobre todo el plano de utilidad (margen perimetral $0,50\ \text{m}$) con $MF = 0,78$ (funcionamiento continuo 24/7): $E_m$ baja de $490\ \text{lx}$ reportados a $335\ \text{lx}$ y $U_0$ cae a $0,38$.
- **Datos de verificación energética (ejemplo ilustrativo):**
  - Potencia activa total propuesta en las dos salas anteriores: $(34 \times 38) + (10 \times 48) = 1\,292 + 480 = 1\,772\ \text{W}$.
  - *(Nota: cualquier umbral normativo aplicable de $E_m$, $U_0$, $UGR$, $VEEI$/$LPD$ y exigencias de circuito eléctrico deberá verificarse siempre según la normativa vigente aplicable en España u otro país de implantación).*

#### Preguntas de análisis
1. ¿En qué porcentaje real caerá la iluminancia mantenida de la Sala de proyectos ($504\ \text{lx}$ con $MF=1,00$) al aplicar el $MF = 0,80$ realista sin cambiar luminarias? ¿Seguiría cumpliendo un objetivo ilustrativo de $500\ \text{lx}$?
2. Calcula el $LPD$ ($\text{W/m}^2$) y el $VEEI$ real de la Sala de proyectos cuando $MF = 0,80$ ($E_m \approx 403\ \text{lx}$), y explica por qué el subcontratista obtuvo una cifra aparentemente mejor manipulando el $MF$.
3. ¿Qué riesgos eléctricos e incompatibilidades legales conlleva aceptar la afirmación de que el PDF de DIALux «garantiza el cumplimiento del REBT sin revisar los circuitos existentes»?
4. ¿Por qué el uso de dos renders fotorrealistas atractivos no aporta evidencia fotométrica ni sustituye a los gráficos de aislíneas y colores falsos calibrados?

#### Tarea a realizar
En equipos de 3 personas (40 minutos), trabajando sobre el modelo auditado `Atlantica_Auditoria.evo`:
1. Restaurad los parámetros honestos de simulación ($MF = 0,80$ en Sala de proyectos y $MF = 0,78$ en Sala de control; rejillas completas con margen $0,50\ \text{m}$; observadores $UGR$ orientados hacia los puestos reales).
2. Ejecutad el recálculo, activad colores falsos con escala fija ($0\text{–}800\ \text{lx}$) y aislíneas, y proponed una solución técnica corregida (cambiando óptica a luminaria microprismática eficiente o ajustando distribución/cantidad donde sea necesario).
3. Emitid un **Informe de Auditoría y Puente BIM-Eléctrico** (máximo 1 página estructurada) que contenga:
   - Lista de las 5 no conformidades del subcontratista y cuantificación del error real.
   - Nuevos indicadores validados ($E_m$, $U_0$, $UGR$, $LPD$/$VEEI$, potencia total activa/aparente).
   - Declaración explícita de los cálculos eléctricos pendientes (Bloque 1) y los archivos coordinados exportados en origen común para Revit MEP (Bloque 3).

#### Posibles soluciones o criterios de análisis
- **Impacto numérico del MF:** Al pasar de $MF = 1,00$ a $MF = 0,80$, la iluminancia media mantenida disminuye exactamente un $20\ \%$: $504 \times 0,80 = 403,2\ \text{lx}$, incumpliendo gravemente un objetivo de $500\ \text{lx}$. Además, en Sala de proyectos: $LPD = 1\,292 / 260 = 4,97\ \text{W/m}^2$; con $E_m = 403,2\ \text{lx}$, el $VEEI$ real sube a $(4,97 \times 100) / 403,2 \approx 1,23\ \text{W/m}^2 \cdot 100\ \text{lx}$, y con $UGR = 22,8$ incumple el confort visual de puestos con pantallas.
- **Solución técnica recomendada en DIALux:** Sustituir los 34 paneles opales de $38\ \text{W}$ por paneles microprismáticos de alta eficacia (p. ej., $\ge 125\text{–}135\ \text{lm/W}$ reales, área emisora verificada, corte a $>65^\circ$) ajustando dotación/disposición hasta alcanzar $E_m \ge 500\ \text{lx}$ con $MF=0,80$, $U_0 \ge 0,60$ y $UGR \le 19$; en la Sala de control 24/7, redistribuir luminarias cubriendo las consolas perimetrales para eliminar la caída de uniformidad ($0,38 \to \ge 0,60$), evaluando además si la operación 24/7 requiere fuentes regulables y doble alimentación o alumbrado de emergencia específico (reglamento aparte).
- **Frontera eléctrica y BIM:** Rechazar categóricamente la validez reglamentaria eléctrica del informe de DIALux; entregar al proyectista eléctrico el desglose exacto de potencias reales ($\text{W}$ y $\text{VA}$ según $\cos\varphi$) para verificar secciones, caída de tensión y protecciones por circuito según REBT/normativa local vigente; y exportar el DWG alineado al punto base común del proyecto junto con las coordenadas $(X, Y, Z)$ y profundidades de empotramiento para iniciar el modelado 3D en Revit MEP (Bloque 3).

#### Preguntas de reflexión final
1. ¿Cómo actuarías profesionalmente si un superior o cliente te pidiera «subir un poco el MF o recortar la rejilla en los bordes» para que entre un presupuesto ajustado en DIALux?
2. Ahora que concluyes el Bloque 2, ¿qué aporta exactamente DIALux al proyecto integral de ingeniería eléctrica que ni Revit MEP ni Twinmotion ni un cálculo manual de circuitos pueden reemplazar?

---

## 7. Evaluación

### 7.1. Evaluación diagnóstica
Cuestionario inicial rápido de 5 preguntas (5 min):
1. ¿Qué representa un Factor de Mantenimiento $MF = 0,80$ en un cálculo fotométrico?
2. ¿Qué mide exactamente la uniformidad global $U_0$?
3. ¿En qué se diferencian las curvas aislíneas de la representación por colores falsos?
4. ¿Puede DIALux calcular la sección de un cable o el calibre de un magnetotérmico?
5. ¿Qué relación existe entre la potencia total instalada en DIALux y el diseño en Revit MEP?

### 7.2. Evaluación formativa
Observación estructurada y seguimiento en pantalla durante la Actividad 2 y el Caso *Ingeniería Atlántica S.L.*:
- Justifica el $MF$ aplicado según ambiente, vida útil LED y mantenimiento (rechaza $MF = 1,00$).
- Fija manualmente límites uniformes en la escala de colores falsos antes de comparar variantes.
- Detecta zonas problemáticas en planos de isolux/colores falsos y optimiza ópticas o posiciones.
- Exporta informes PDF depurados y DWG referenciado al origen común `(0, 0, 0)`.

### 7.3. Evaluación sumativa
Evaluación ponderada de cierre del Bloque 2:
1. **Archivo `B2_T05_CalculoFinal.evo`, memoria PDF depurada, DWG coordinado y dictamen del Caso *Ingeniería Atlántica S.L.* (65 %):** Valorados con la rúbrica de la sección 7.4.
2. **Acta de Cierre Fotométrico y Transferencia a Revit MEP (Actividad 3) + cuestionario sumativo integrador de 6 ítems (35 %):** Verifica interpretación de métricas ($E_m$, $U_0$, $UGR$, $LPD$/$VEEI$), cálculo manual de comprobación y delimitación estricta frente a cálculo eléctrico, BIM y render.

### 7.4. Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
| :--- | :--- | :--- | :--- | :--- |
| **Configuración de MF, rejillas y cálculo** | Mantiene $MF = 1,00$, recorta rejillas para ocultar sombras o ignora observadores $UGR$. | Aplica un $MF$ genérico sin justificar ni verificar cobertura completa de rejilla o direcciones reales de observadores $UGR$. | Configura un $MF$ realista justificado, rejillas completas acordes al uso y observadores $UGR$ bien orientados. | Calcula y documenta los subfactores del $MF$, valida sensibilidad de rejilla sobre obstáculos y combina planos horizontales, verticales y puntos $UGR$ con total rigor. |
| **Interpretación cuantitativa y gráfica** | Solo lee $E_m$ ignorando $U_0$, $UGR$ y eficiencia energética, o compara colores falsos con escalas automáticas cambiantes. | Identifica valores fuera de rango, pero interpreta de forma parcial aislíneas/colores falsos o no verifica cálculos manuales de $LPD$/$VEEI$. | Analiza conjuntamente $E_m$, $U_0$, $UGR$ y $LPD$/$VEEI$, fija escalas de colores falsos y corrige anomalías detectadas en aislíneas. | Optimiza con solvencia el equilibrio entre confort visual ($U_0$, $UGR$) y mínima potencia instalada, demostrando verificación aritmética independiente de los indicadores energéticos. |
| **Calidad de memoria PDF y exportación BIM** | Exporta un informe bruto ilegible (>80 páginas sin filtrar) y un DWG desplazado sin origen común. | Genera una memoria legible, pero incluye tablas redundantes o no valida coordenadas/potencias del paquete exportado. | Exporta una memoria PDF depurada, clara y trazable junto con DWG y listados de coordenadas/potencias alineados al origen común `(0, 0, 0)`. | Estructura un paquete documental impecable y accionable para obra y para Revit MEP (coordenadas X/Y/Z, cotas Z/plenum, potencias $\text{W}$/$\text{VA}$ y advertencias de versión/alcance). |
| **Frontera técnica y rigor ético/normativo** | Afirma que DIALux o un render validan el cumplimiento eléctrico reglamentario (REBT/IEC/NEC) o acepta salidas de IA sin revisar. | Reconoce que falta el diseño eléctrico, aunque no especifica qué cálculos quedan fuera ni aclara qué norma debe verificarse por país/edición. | Diferencia estrictamente cálculo fotométrico, cálculo eléctrico reglamentario, BIM y visualización; verifica manualmente cualquier apoyo externo. | Demuestra criterio profesional íntegro: audita fraudes técnicos en informes externos, exige verificación independiente y documenta la trazabilidad normativa jurisdiccional antes de transferir datos. |

### 7.5. Actividad de autoevaluación
Reflexión de cierre de tema y de Bloque 2 (5 min):
1. *Repasa todo tu recorrido del Bloque 2 (Temas 1 al 5): ¿cuál ha sido el aprendizaje técnico que mayor impacto tendrá en tu forma de proyectar iluminación?*
2. *Explica brevemente con tus palabras por qué un informe luminotécnico perfecto en DIALux y un render espectacular nunca eximen de realizar el cálculo eléctrico reglamentario ni la coordinación 3D en Revit MEP.*
3. *Valora del 1 al 5 tu nivel de preparación actual para iniciar el **Bloque 3 (Modelado 3D – Revit MEP eléctricas)** utilizando los entregables generados hoy.*

---

## 8. Materiales y recursos

### 8.1. Guion estructurado de diapositivas

| Diapositiva | Título | Contenido visual y mensajes clave |
| :--- | :--- | :--- |
| **Slide 1** | **Portada: Generación y auditoría de cálculos lumínicos** | Posición en el programa (Bloque 2, Tema 5/5 — cierre de bloque) y mapa de conexión hacia Bloque 3 (Revit MEP) y Bloque 5 (Twinmotion). |
| **Slide 2** | **Actividad 1: El informe «perfecto» bajo sospecha** | Captura de una memoria aparentemente aprobada ocultando $MF = 1,00$, rejilla sesgada, render decorativo y afirmación falsa de cumplimiento eléctrico. |
| **Slide 3** | **Factor de Mantenimiento ($MF$) y diseño de rejillas de cálculo** | Fórmula $MF = LLMF \times LSF \times LMF \times RSMF$, tabla orientativa por limpieza ambiental y ejemplo visual de rejilla gruesa frente a rejilla válida con observadores UGR. |
| **Slide 4** | **Lectura integral de resultados: $E_m$, $U_0$, $UGR$ y $LPD$/$VEEI$** | Cuadro comparativo entre dos soluciones con igual $E_m$ ($520\ \text{lx}$) pero distinta eficiencia ($6,40$ vs. $4,06\ \text{W/m}^2$) y confort ($UGR$ $21,4$ vs. $17,6$); aviso de verificación normativa vigente. |
| **Slide 5** | **Aislíneas y colores falsos: ver lo que la media oculta** | Comparativa visual entre escala automática engañosa y escala fija calibrada ($0\text{–}800\ \text{lx}$), localizando una zona oscura detrás de un pilar. |
| **Slide 6** | **Frontera estricta: Fotometría vs. Electricidad vs. BIM vs. Render** | Matriz comparativa de 4 columnas dejando claro qué resuelve y qué NO resuelve DIALux, REBT/IEC/NEC, Revit MEP y Twinmotion. |
| **Slide 7** | **Caso Ingeniería Atlántica S.L. y flujo de exportación a Revit MEP** | Esquema de las 5 irregularidades detectadas en la sede de $420\ \text{m}^2$ y lista exacta del paquete de salida (PDF depurado, DWG en `(0,0,0)` y tabla X-Y-Z/potencias). |
| **Slide 8** | **Cierre del Bloque 2 y despegue hacia el Bloque 3 (Revit MEP)** | Checklist final de calidad fotométrica, advertencia de validación humana sobre IA y adelanto de cómo estas luminarias cobrarán vida como familias eléctricas y circuitos en Revit MEP. |

### 8.2. Ficha de trabajo del alumnado
Documento de 2 páginas (PDF editable o impreso) que contiene:
- **Sección A:** Calculadora guiada paso a paso del Factor de Mantenimiento ($MF$) y del $VEEI$/$LPD$.
- **Sección B:** Guía visual rápida para configurar informes PDF depurados en la pestaña *Documentación* de DIALux (qué secciones activar y cuáles omitir).
- **Sección C:** Plantilla de diagnóstico y métricas corregidas del caso *Ingeniería Atlántica S.L.*.
- **Sección D:** Cuestionario de autoevaluación de cierre de bloque y checklist de archivos preparados para el Bloque 3.

### 8.3. Plantilla técnica práctica: «Acta de Cierre Fotométrico y Transferencia a Revit MEP»

```markdown
# ACTA DE CIERRE FOTOMÉTRICO Y TRANSFERENCIA A REVIT MEP (BLOQUE 2 → BLOQUE 3)
Código de proyecto: ________________________  Archivo .evo final: _______________________
Responsable: _______________________________  Fecha: ___________________________________

1. RESUMEN DE PARÁMETROS FOTOMÉTRICOS Y EFICIENCIA (POR LOCAL)
| Código Local | Área (m²) | MF aplicado | Em (lx) | U0 | UGR máx | Potencia total (W) | LPD (W/m²) | VEEI (si aplica) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| | | | | | | | | |
| | | | | | | | | |

2. INVENTARIO VERIFICADO DE CARGAS Y COORDENADAS PARA REVIT MEP / BLOQUE 1
- Archivo DWG de posiciones exportado (verificado origen común 0,0,0): ____________________
- Listado CSV/PDF de coordenadas (X, Y, Z) adjunto: [ ] Sí
- Total luminarias del bloque: ____ uds | Potencia activa total: _______ W | cos φ ref.: _____
- Cota de montaje predominante / profundidad de empotramiento crítica (mm): _________________

3. CONTROL DE FRONTERAS Y CUMPLIMIENTO (VERIFICACIÓN OBLIGATORIA)
- Normativa fotométrica/energética de referencia verificada (país y edición): _______________
- ¿Este estudio fotométrico valida circuitos, cables, ΔU % o protecciones? [ ] NO (pendiente Bloque 1/normativa eléctrica vigente).
- ¿Se usó IA externa para redactar resumen textual de tablas? [ ] No  [ ] Sí (sin planos/datos sensibles y cifras 100 % verificadas manualmente).
```

### 8.4. Lecturas y recursos recomendados
*(Nota de validación para el formador y el alumnado: las guías técnicas, normas y manuales mencionados deben verificarse en su edición vigente y jurisdicción aplicable antes de utilizar cualquier límite reglamentario o parámetro de cálculo en un proyecto real).*
- **Manual oficial de DIALux evo — Módulos de Cálculo, Vistas de Resultados y Documentación/Exportación** (DIAL GmbH — verificar funcionalidades específicas de exportación DWG/IFC disponibles en la versión del aula).
- **Publicación técnica CIE 97 (*Guide on the Maintenance of Indoor Electric Lighting Systems*) o normativa nacional equivalente:** Referencia metodológica orientativa para el desglose y justificación del Factor de Mantenimiento ($MF$); comprobar vigencia actual.
- **Normas de referencia orientativas: UNE-EN 12464-1 (Iluminación lugares de trabajo interiores) y CTE DB-HE3 (Eficiencia energética en instalaciones de iluminación en España) o equivalentes nacionales (ASHRAE 90.1 / IES, etc.):** Validar siempre ámbito de aplicación, excepciones y edición vigente en el país del proyecto.

### Glosario de términos clave

| Término | Definición |
| :--- | :--- |
| **Aislínea (curva isolux)** | Línea trazada sobre una superficie de cálculo que une todos los puntos con exactamente el mismo valor de iluminancia en lux ($\text{lx}$). |
| **Colores falsos (*False Color*)** | Representación gráfica cromática que asigna una gama de colores a rangos calibrados de iluminancia ($\text{lx}$) o luminancia ($\text{cd/m}^2$) para visualizar gradientes y anomalías espaciales. |
| **Factor de Mantenimiento ($MF$)** | Coeficiente reductor aplicado al cálculo fotométrico que recoge la pérdida progresiva de flujo por envejecimiento de fuente, fallo y suciedad de luminarias y paredes/techos. |
| **LPD (*Lighting Power Density*)** | Densidad de potencia de iluminación, expresada en vatios por metro cuadrado ($\text{W/m}^2$), resultante de dividir la potencia eléctrica total instalada de alumbrado entre la superficie útil iluminada. |
| **Memoria lumínica** | Informe técnico formal exportado tras el cálculo fotométrico que documenta las hipótesis empleadas, luminarias, tablas de resultados y planos de distribución de luz. |
| **Rejilla de cálculo** | Matriz estructurada de puntos de evaluación dentro de un plano o volumen en la cual el motor de DIALux computa iluminancias y uniformidades. |
| **UGR (*Unified Glare Rating*)** | Índice unificado que mide el deslumbramiento psicológico molesto percibido por un observador desde una posición y dirección de mirada concretas respecto a las luminarias visibles. |
| **VEEI** | Valor de Eficiencia Energética de la Instalación ($\text{W/m}^2$ por cada $100\ \text{lx}$ de iluminancia media horizontal mantenida), usado como indicador normativo de eficiencia en edificación (ejemplo español a verificar según vigencia). |

---

## 9. Adaptaciones

### 9.1. Sesión presencial
- **Revisión en gran pantalla:** Proyectar al cierre de la Actividad 2 dos memorias PDF generadas por parejas de alumnos para comparar visualmente la limpieza de escalas de colores falsos y el número de páginas útiles frente a informes saturados.
- **Dinámica de auditoría física:** Entregar impreso en 1 hoja el informe manipulado del Caso *Ingeniería Atlántica S.L.* para que los equipos marquen con rotulador rojo cada inconsistencia antes de abrir el archivo `.evo`.

### 9.2. Sesión online síncrona
- **Control en salas:** Durante el caso práctico en *breakout rooms*, pedir a cada grupo que pegue en una pizarra compartida sus dos capturas de colores falsos (antes/después de corregir) fijando exactamente la misma escala ($0\text{–}800\ \text{lx}$) para validar visualmente el progreso en vivo.
- **Verificación de exportación:** Pedir al alumnado que comparta en el chat o carpeta compartida el peso y estructura de páginas de su PDF exportado y el DWG de posiciones para revisar que no supera límites absurdos ni pierde el origen.

### 9.3. Sesión asíncrona
- **Cápsulas explicativas:** Grabar dos vídeos breves: (1) «Cálculo del Factor de Mantenimiento y fijación de escala en colores falsos» (10 min) y (2) «Cómo filtrar la memoria PDF en DIALux y exportar el DWG limpio hacia Revit MEP» (10 min).
- **Entregable evaluable de cierre de bloque:** Subida al LMS en un plazo de 7 días de `B2_T05_CalculoFinal.evo`, memoria PDF depurada, plano DWG coordinado, dictamen del caso *Ingeniería Atlántica S.L.* y el *Acta de Cierre Fotométrico* del proyecto integrador.
- **Evaluación entre pares:** Cada alumno descarga la memoria PDF de un compañero y comprueba con una lista de 5 puntos si $MF < 1,00$, escala fija en colores falsos, cálculo de $LPD$ correcto y nota de alcance eléctrico explícita.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Culmina e integra todo el itinerario del **Bloque 2 (Modelado en DIALux)**: configuración SI y perfiles (Tema 1), planos 2D e origen común BIM (Tema 2), reflectancias/vidrios/sombras reales (Tema 3) y archivos fotométricos `.ldt`/`.ies` (Tema 4), conectando además los totales de potencia eléctrica activa y factor de potencia con las bases de diseño del **Bloque 1 (Instalaciones eléctricas)**.
- **Competencias técnicas que desarrolla:** Simulación y optimización lumínica integral, diagnóstico gráfico y numérico de confort y eficiencia energética, auditoría de integridad en estudios fotométricos y preparación estructurada de entregas interoperables para entornos BIM.
- **Conexión con el tema anterior y posterior del programa (6 módulos / 50 temas):**
  - *Tema anterior:* **Bloque 2, Tema 4 — Catálogo de luminarias (Eulumdat, IES)** (posición 4 de 5 del Bloque 2; tema 15 de 50), cuyas luminarias reales implantadas sobre el modelo calibrado sirven hoy para lanzar, depurar y validar el cálculo definitivo.
  - *Tema posterior:* **Bloque 3, Tema 1 — Componentes de modelado 3D MEP eléctricas** (posición 1 de 5 del Bloque 3: Modelado 3D – Revit MEP eléctricas; tema 17 de 50). El plano DWG coordinado en origen común `(0, 0, 0)`, la tabla de coordenadas $(X, Y, Z)$, las cotas de falso techo/plenum y las potencias reales por zona exportadas al cierre de este Tema 5 constituyen el punto de partida práctico para insertar familias de luminarias, conectar circuitos, trazar canalizaciones y coordinar instalaciones en **Revit MEP**, alimentando posteriormente el cálculo documental (**Bloque 4**), la comunicación visual en **Twinmotion (Bloque 5)** y la revisión asistida con **IA (Bloque 6)**.
- **Evidencia de aprendizaje que aporta el alumnado:** Archivo completo `B2_T05_CalculoFinal.evo`, memoria lumínica PDF depurada, plano DWG de implantación en origen común para Revit MEP, informe de auditoría del caso *Ingeniería Atlántica S.L.* y *Acta de Cierre Fotométrico y Transferencia* del proyecto integrador.

---

## Siguientes pasos para el formador

1. **Preparar el modelo auditado del caso práctico:** Comprobar previamente en el DIALux del aula el archivo `Atlantica_Auditoria.evo` confirmando que al cambiar de $MF = 1,00$ a $0,80$ y restaurar la rejilla completa de la sala 24/7 las caídas numéricas y visuales coinciden con los datos del enunciado.
2. **Definir plantilla estándar de páginas de informe:** Crear una lista recomendada de páginas de exportación en DIALux para enseñar al alumnado cómo evitar memorias innecesariamente voluminosas de 80–100 páginas.
3. **Coordinar el traspaso con el Bloque 3 (Revit MEP):** Verificar que los archivos DWG exportados por el alumnado al finalizar la sesión conserven el origen `(0, 0, 0)` y la nomenclatura de luminarias limpia para abrirlos directamente como calco/referencia en la primera clase del Bloque 3.
4. **Reforzar el examen o cierre del Bloque 2:** Recordar al grupo la realización de la evaluación final de bloque en el campus virtual y la entrega consolidada de evidencias dentro del plazo estipulado.
5. **Validar referencias normativas externas:** Revisar una última vez los enlaces y ediciones de CIE 97, UNE-EN 12464-1 y normativa energética nacional equivalente antes de compartir los recursos de la sección 8.4.
