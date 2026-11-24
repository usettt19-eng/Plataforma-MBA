# Glosario Técnico Consolidado — IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas

> Términos clave extraídos de los **6 bloques y 50 temas** del programa (*200 horas técnicas · DIALux, Revit MEP, Twinmotion e IA aplicada*). Toda referencia normativa debe validarse frente al reglamento vigente del país correspondiente.


## Bloque 1: Instalaciones eléctricas (86 términos únicos)

| Término | Definición |
|---|---|
| **Corriente eficaz (RMS)** | Valor de corriente continua que disipa la misma potencia térmica media en una resistencia que la corriente alterna considerada. |
| **Factor de potencia ($\text{FP}$)** | Cociente entre la potencia activa ($P$) y la potencia aparente ($S$); mide el grado de aprovechamiento energético de la potencia demandada a la red. |
| **Impedancia ($Z$)** | Oposición total de un circuito al paso de la corriente alterna, combinando vectorialmente resistencia ($R$) y reactancia ($X$), medida en ohmios ($\Omega$). |
| **Ley de Ohm** | Principio fundamental que relaciona la tensión aplicada, la intensidad circulante y la resistencia o impedancia ($U = I \cdot Z$). |
| **Leyes de Kirchhoff** | Dos principios de conservación (de carga en nodos, $\sum I = 0$; y de energía en mallas, $\sum V = 0$) que rigen la distribución de corrientes y tensiones. |
| **Potencia activa ($P$)** | Energía por unidad de tiempo convertida efectivamente en trabajo mecánico, luz o calor; se expresa en vatios ($\text{W}$) o kilovatios ($\text{kW}$). |
| **Potencia aparente ($S$)** | Producto de la tensión y la intensidad eficaces en CA ($S = \sqrt{P^2 + Q^2}$); se mide en voltamperios ($\text{VA}$) o kilovoltiamperios ($\text{kVA}$) y determina la corriente de línea. |
| **Potencia reactiva ($Q$)** | Componente de potencia que oscila entre la red y los campos magnéticos o eléctricos sin producir trabajo neto; se expresa en $\text{var}$ o $\text{kvar}$. |
| **Acometida** | Tramo de instalación que conecta la red de suministro eléctrico exterior con el punto de protección general y entrada al edificio. |
| **Conductor PEN** | Conductor único que reúne simultáneamente las funciones de conductor de protección (PE) y de conductor neutro (N) en sistemas TN-C. |
| **Esquema IT** | Configuración de conexión a tierra donde las partes activas de la alimentación están aisladas de tierra (o conectadas mediante alta impedancia) y las masas están puestas a tierra. |
| **Esquema TN-S** | Sistema donde el neutro de la fuente está conectado a tierra y el conductor de protección (PE) discurre separado del conductor neutro (N) en toda la instalación. |
| **Esquema TT** | Configuración en la que el neutro de la fuente está conectado a tierra y las masas metálicas de la instalación receptora se conectan a una toma de tierra independiente. |
| **Sistema split-phase** | Suministro monofásico de tres hilos con toma central puesta a tierra que ofrece dos tensiones simétricas respecto al neutro y el doble de tensión entre extremos (p. ej., $120/240\ \text{V}$). |
| **Tensión de fase ($U_F$)** | Diferencia de potencial medida entre un conductor de fase y el conductor neutro en un sistema polifásico en estrella. |
| **Tensión de línea ($U_L$)** | Diferencia de potencial medida entre dos conductores de fase cualesquiera de un sistema polifásico ($U_L = \sqrt{3} \cdot U_F$ en estrella equilibrada). |
| **Alucinación normativa** | Error mediante el cual un modelo de IA inventa, mezcla o cita como vigentes artículos, tablas o ediciones de reglamentos eléctricos incorrectos o derogados. |
| **Autoridad Competente (AHJ)** | Organismo público, entidad inspectora o funcionario legalmente facultado para aprobar, interpretar y hacer cumplir los códigos aplicables en un territorio. |
| **Código modelo** | Conjunto estructurado de requisitos técnicos publicado por una entidad normativa que adquiere obligatoriedad legal cuando es adoptado por una jurisdicción. |
| **Disposición transitoria** | Norma temporal que regula qué edición reglamentaria aplica a proyectos iniciados o en tramitación durante el cambio entre dos versiones legales. |
| **Fuente primaria oficial** | Publicación directa del boletín oficial estatal, comité oficial de normalización o pliego oficial de distribuidora que acredita la vigencia exacta de un requisito. |
| **Jerarquía normativa** | Principio jurídico que ordena leyes, reglamentos, normas técnicas y especificaciones particulares estableciendo qué disposición prevalece en caso de conflicto. |
| **Jurisdicción eléctrica** | Ámbito territorial y sectorial que determina qué reglamentos obligatorios y códigos complementarios rigen una instalación. |
| **Trazabilidad normativa** | Documentación explícita que vincula cada hipótesis o resultado de cálculo de un proyecto con el artículo, tabla y edición vigente de la norma aplicada. |
| **Balanceo de fases** | Distribución equilibrada de los circuitos monofásicos entre las tres fases ($L_1, L_2, L_3$) de un cuadro trifásico para minimizar la corriente por el neutro y evitar sobrecargas asimétricas. |
| **Carga continua** | Carga cuya corriente máxima prevista se mantiene de forma sostenida durante un periodo prolongado según el criterio del código eléctrico aplicable. |
| **Cuadro de cargas** | Tabla técnica verificable que organiza cada circuito de un tablero con su potencia instalada, coeficientes de demanda, reparto por fases e intensidad de diseño. |
| **Factor de demanda ($F_d$)** | Relación entre la demanda máxima real de un circuito o grupo de cargas y la potencia total instalada conectada a dicho circuito o grupo. |
| **Factor de reserva ($K_{\text{res}}$)** | Margen adicional aplicado sobre la potencia demandada calculada en cuadros generales y alimentadores para absorber ampliaciones futuras previstas. |
| **Factor de simultaneidad ($F_s$)** | Coeficiente menor o igual que $1$ que considera la probabilidad de que distintos circuitos o receptores operen simultáneamente en su demanda máxima. |
| **Intensidad de cálculo ($I_B$)** | Corriente de diseño en régimen normal resultante de la potencia aparente demandada y la tensión del circuito, base para dimensionar cables y protecciones. |
| **Potencia instalada ($P_{\text{inst}}$)** | Suma aritmética de las potencias nominales de todos los receptores o circuitos declarados en una instalación antes de aplicar factores de demanda o simultaneidad. |
| **Ampacidad ($I_z$)** | Intensidad máxima admisible que un conductor puede transportar en servicio permanente sin superar la temperatura límite de su aislamiento. |
| **Caída de tensión ($\Delta V$)** | Pérdida de potencial eléctrico a lo largo de un circuito entre el origen y la carga debida al paso de la corriente por la resistencia y reactancia del conductor. |
| **Esfuerzo térmico adiabático** | Calentamiento instantáneo de un conductor durante un cortocircuito breve ($I^2 t$) antes de que el dispositivo de protección interrumpa la corriente, limitado por $k^2 S^2$. |
| **Factor de agrupamiento ($k_g$)** | Coeficiente reductor aplicado a la intensidad admisible cuando varios circuitos discurren juntos compartiendo un mismo conducto o bandeja y dificultan la disipación de calor. |
| **Factor de corrección por temperatura ($k_T$)** | Coeficiente que ajusta la ampacidad base de tabla cuando la temperatura ambiente o del terreno difiere de la temperatura estándar de referencia. |
| **Método de instalación** | Forma física y entorno constructivo en que se aloja un conductor (empotrado, tubo en superficie, bandeja perforada, enterrado), determinante para evacuar calor. |
| **Sección comercial normalizada** | Tamaño estándar de conductor fabricado conforme a normas métricas ($\text{mm}^2$) o AWG/kcmil seleccionado finalmente por encima del mínimo calculado. |
| **XLPE (Polietileno reticulado)** | Material aislante termoestable de alta prestación térmica (habitualmente $90\ ^\circ\text{C}$ en servicio continuo y $250\ ^\circ\text{C}$ en cortocircuito), superior al PVC termoplástico. |
| **Curva de disparo (B, C, D)** | Banda característica de corriente magnética ($3\text{–}5\,I_n$, $5\text{–}10\,I_n$, $10\text{–}20\,I_n$) en la que un interruptor automático modular abre instantáneamente ante puntas de corriente o cortocircuitos. |
| **Diferencial Tipo B** | Interruptor diferencial capaz de detectar tanto fugas alternas y pulsantes como corrientes residuales de corriente continua lisa y alta frecuencia generadas por variadores trifásicos o cargadores VE. |
| **Filiación (Cascading)** | Coordinación ensayada por el fabricante entre un interruptor limitador aguas arriba y otro aguas abajo que permite a este último soportar cortocircuitos presuntos superiores a su poder de corte propio. |
| **MCCB (Molded Case Circuit Breaker)** | Interruptor automático de caja moldeada destinado a corrientes medias y altas, habitualmente con ajustes regulables de disparo térmico/magnético y elevado poder de corte. |
| **Poder de corte ($I_{cu}$ / $I_{cs}$)** | Corriente máxima de cortocircuito que un interruptor automático puede interrumpir de forma segura (último $I_{cu}$ o manteniendo operatividad posterior $I_{cs}$). |
| **RCD / GFCI** | Dispositivo de protección diferencial residual diseñado para desconectar automáticamente la alimentación cuando la corriente de fuga a tierra supera su sensibilidad asignada $I_{\Delta n}$. |
| **Selectividad** | Coordinación entre dos dispositivos de protección en serie para que, ante una sobrecarga, cortocircuito o defecto a tierra, actúe únicamente la protección más cercana al fallo. |
| **SPD (Surge Protective Device)** | Dispositivo protector contra sobretensiones transitorias (Tipos 1, 2 y 3) encargado de derivar a tierra impulsos de tensión elevados protegiendo la instalación y los equipos electrónicos. |
| **Centro de gravedad de cargas** | Punto geométrico ponderado por la potencia de los receptores que minimiza la longitud equivalente y las pérdidas de los alimentadores principales. |
| **Porcentaje de ocupación** | Relación entre la suma de las áreas transversales exteriores de todos los cables alojados y el área interior útil de un tubo o canaleta. |
| **Radio mínimo de curvatura ($R_{\min}$)** | Menor radio de giro admisible para un cable durante el tendido o en instalación fija sin dañar su aislamiento, cubierta o pantalla metálica. |
| **Compatibilidad electromagnética (EMC)** | Capacidad de coexistencia entre sistemas eléctricos y electrónicos sin que las interferencias electromagnéticas degraden su funcionamiento. |
| **Cruce ortogonal ($90^\circ$)** | Intersección perpendicular entre canalizaciones de potencia y telecomunicaciones destinada a minimizar la inducción magnética mutua. |
| **Interferencia dura (hard clash)** | Colisión geométrica física entre dos elementos constructivos (por ejemplo, una bandeja portacables atravesando una viga o conducto HVAC). |
| **Interferencia blanda (soft clash)** | Invasión del volumen libre requerido para montaje, apertura de puertas, mantenimiento o seguridad reglamentaria de un equipo o canalización. |
| **Pasamuros cortafuegos (firestop)** | Elemento de paso a través de muros o forjados sectorizados que se sella con material certificado para restituir la resistencia al fuego original. |
| **Factor de simultaneidad ($K_s$)** | Coeficiente aplicado a un conjunto de cargas para estimar la fracción de potencia instalada que demanda energía simultáneamente. |
| **Corriente de empleo ($I_b$)** | Intensidad máxima prevista en servicio normal para un circuito o alimentador a partir de su potencia demandada, tensión y factor de potencia. |
| **Intensidad admisible corregida ($I_z'$)** | Corriente máxima permanente que soporta un conductor en sus condiciones reales tras multiplicar $I_z$ por los factores de temperatura y agrupamiento. |
| **Caída de tensión acumulada** | Pérdida porcentual de tensión total obtenida al sumar en serie las caídas de cada tramo desde el origen hasta el punto de consumo más lejano. |
| **Selectividad de protecciones** | Coordinación entre interruptores en serie para que ante un fallo actúe únicamente la protección inmediatamente superior al punto de defecto. |
| **Poder de corte ($I_{cu}$)** | Intensidad máxima de cortocircuito expresada en kiloamperios ($\text{kA}$) que un interruptor automático es capaz de interrumpir con seguridad. |
| **Verificación independiente** | Comprobación sistemática de fórmulas, unidades, tablas normativas y resultados realizada al margen de borradores generados por IA o plantillas previas. |
| **Tierra de protección** | Puesta a tierra de las masas metálicas accesibles de equipos eléctricos para limitar tensiones de contacto y permitir la actuación de las protecciones. |
| **Tierra de servicio** | Conexión intencionada a tierra del punto neutro de un transformador o fuente para estabilizar tensiones y definir el esquema de conexión (TT, TN o IT). |
| **Barraje Equipotencial Principal (BEP)** | Barra colectora de tierra donde se interconectan la línea de enlace, los conductores PE principales y las canalizaciones o estructuras metálicas del edificio. |
| **Puente de comprobación** | Seccionador mecánico desmontable situado en el origen del sistema que permite aislar la toma de tierra para medir su resistencia real en obra. |
| **Soldadura exotérmica** | Unión aluminotérmica en molde de grafito que fusiona molecularmente los conductores formando un empalme permanente y altamente resistente a la corrosión. |
| **Corrosión galvánica** | Deterioro electroquímico acelerado del metal menos noble (ánodo) cuando está conectado eléctricamente a otro más noble en un suelo húmedo conductor. |
| **Longitud efectiva de DPS** | Longitud total de los conductores que enlazan la red y el descargador de sobretensión con el barraje de tierra, crítica por su caída inductiva $L\cdot di/dt$. |
| **Resistividad del terreno ($\rho$)** | Propiedad física del suelo que cuantifica su oposición al paso de corriente eléctrica, expresada en ohmio-metro ($\Omega\cdot\text{m}$). |
| **Método de Wenner** | Ensayo geoeléctrico con cuatro electrodos equidistantes en línea recta que permite determinar la resistividad aparente del subsuelo a distintas profundidades. |
| **Resistencia de difusión** | Resistencia eléctrica entre un electrodo enterrado y el terreno lejano de potencial nulo por donde se dispersa la corriente a tierra. |
| **Factor de acoplamiento / utilización ($\eta$)** | Coeficiente menor que la unidad que recoge la pérdida de eficiencia mutua cuando se disponen varios electrodos próximos en paralelo. |
| **Cono de potencial** | Región del suelo alrededor de un electrodo donde cae la mayor parte de la tensión al circular una corriente hacia tierra. |
| **Método de caída de potencial (62 %)** | Técnica de ensayo en obra de 3 polos ($E, P, C$) que sitúa la sonda de potencial $P$ al $62\,\%$ de la distancia $E\text{–}C$ en la meseta plana fuera de las zonas de influencia. |
| **Meseta de potencial** | Tramo horizontal en la curva de resistencia medida al desplazar la sonda $P$ (52 %, 62 %, 72 %) que confirma que $E$ y $C$ están suficientemente alejados. |
| **Pinza de medida de tierra** | Instrumento sin picas auxiliares que solo mide correctamente la resistencia cuando el electrodo forma parte de un lazo cerrado multiaterrado paralelo. |
| **Diagrama unifilar** | Esquema topológico que representa con un único trazo cada circuito, detallando la jerarquía de alimentación, protecciones, medida y puesta a tierra. |
| **Esquema multifilar** | Representación detallada hilo a hilo de cada conductor activo, neutro, protección y mando necesaria para el cableado físico en taller. |
| **IEC 60617 / ANSI-IEEE 315** | Normas de referencia para simbología eléctrica normalizada en Europa/internacional y Norteamérica respectivamente, que nunca deben mezclarse sin leyenda. |
| **Transformador de intensidad (TI)** | Equipo de medida que reduce proporcionalmente corrientes elevadas a valores normalizados secundarios ($5\text{ A}$ o $1\text{ A}$) para contadores y analizadores. |
| **Poder de corte ($I_{cu}/I_{cn}$)** | Corriente máxima de cortocircuito en kiloamperios ($\text{kA}$) que un interruptor automático puede despejar con seguridad sin destruirse. |
| **Clase de diferencial (`AC`, `A`, `F`, `B`)** | Categoría del dispositivo diferencial según su capacidad para detectar corrientes de defecto senoidales, pulsantes o continuas lisas. |
| **Circuito huérfano** | Circuito que figura en planos de planta pero falta en el diagrama unifilar o cuadro de cargas (o viceversa) por desincronización documental. |
| **Trazabilidad documental** | Correspondencia exacta y verificable de códigos, potencias, protecciones y conductores entre memoria, cuadro de cargas, unifilar y planos de planta. |

## Bloque 2: Modelado en DIALux (40 términos únicos)

| Término | Definición |
|---|---|
| **Área circundante** | Franja inmediata alrededor del área de tarea visual dentro de un mismo local cuya iluminancia mínima exigida suele ser proporcionalmente menor que la de la tarea principal según la norma aplicada. |
| **Área de tarea visual** | Zona delimitada específicamente donde se realiza una actividad visual concreta y sobre la cual se aplican los requisitos principales de iluminancia, uniformidad y control de deslumbramiento. |
| **Factor de reflectancia ($\rho$)** | Relación entre el flujo luminoso reflejado por una superficie y el flujo luminoso incidente sobre ella; su configuración realista resulta determinante en las interreflexiones del recinto. |
| **Foot-candle ($\text{fc}$)** | Unidad anglosajona de iluminancia equivalente a un lumen por pie cuadrado ($1\ \text{fc} \approx 10,764\ \text{lx}$), fuente habitual de errores graves si no se cambia al sistema métrico SI. |
| **Iluminancia media mantenida ($E_m$)** | Valor mínimo por debajo del cual no debe situarse la iluminancia media sobre la superficie de cálculo especificada al final del ciclo de mantenimiento previsto. |
| **Lux ($\text{lx}$)** | Unidad de iluminancia del Sistema Internacional equivalente a un lumen incidiendo uniformemente sobre una superficie de un metro cuadrado ($1\ \text{lm/m}^2$). |
| **Plano de utilidad** | Superficie horizontal de referencia dentro de un local en la que se evalúa por defecto la iluminancia cuando no se establecen áreas de tarea particulares (por ejemplo, $0,75\ \text{m}$–$0,85\ \text{m}$ en escritorios o bancos). |
| **Uniformidad global ($U_0$)** | Cociente entre la iluminancia mínima ($E_{\min}$) y la iluminancia media ($E_m$) sobre una superficie o área de cálculo determinada ($U_0 = E_{\min} / E_m$). |
| **Antepecho** | Altura medida desde el pavimento terminado del local hasta la parte inferior de una ventana o hueco acristalado en fachada. |
| **Aplanado CAD (Z=0)** | Procedimiento que sitúa todas las entidades de un dibujo 2D en elevación cero para evitar desfases tridimensionales al trazar recintos. |
| **Contorno interior neto** | Polígono cerrado que delimita la superficie útil interior de un local por las caras vistas de sus paredes, excluyendo el espesor constructivo de los muros. |
| **Escala anamórfica** | Deformación en la que el factor de escala horizontal (eje X) difiere del vertical (eje Y), habitual en planos escaneados o fotografías sin rectificación. |
| **Origen común de coordenadas** | Punto de referencia único `(0, 0, 0)` compartido entre disciplinas (arquitectura, DIALux y Revit MEP) para evitar desfases al intercambiar ubicaciones de luminarias. |
| **PDF ráster vs. vectorial** | Diferencia entre un PDF compuesto por píxeles (imagen escaneada propensa a imprecisión y deformación) y un PDF exportado desde CAD con líneas matemáticas exactas. |
| **Plenum técnico** | Cámara situada entre el falso techo registrable o continuo y el forjado estructural superior, destinada al paso de instalaciones y alojamiento de luminarias empotradas. |
| **Vano** | Abertura practicada en un cerramiento o muro (ventana, puerta, muro cortina o lucernario) que altera tanto la transmisión luminosa como las superficies reflectantes del recinto. |
| **Carga poligonal** | Cantidad de polígonos o caras triangulares que forman un objeto 3D; un valor excesivo en mobiliario decorativo ralentiza severamente el motor de cálculo de DIALux. |
| **Componente indirecta** | Fracción de la iluminancia que llega al plano de cálculo tras haber sufrido una o más reflexiones en techos, paredes, suelos o mobiliario del local. |
| **Factor de reflexión ($\rho$)** | Cociente entre el flujo luminoso reflejado por una superficie y el flujo incidente sobre ella; su valor oscila entre $0,00$ (absorción total) y $1,00$ (reflexión total ideal). |
| **Factor de transmisión ($\tau$)** | Proporción del flujo luminoso incidente que logra atravesar un material transparente o translúcido, como un vidrio de ventana o una mampara divisoria. |
| **Material calibrado fotométricamente** | Material definido en DIALux mediante parámetros ópticos verificados ($\rho$, especularidad, $\tau$) coherentes con el acabado real de obra, más allá de su apariencia visual. |
| **Reflexión difusa (lambertiana)** | Dispersión homogénea de la luz reflejada en múltiples direcciones sobre superficies mates, evitando reflejos especulares concentrados. |
| **Reflexión especular** | Reflejo direccional de la luz en superficies pulidas o brillantes donde el ángulo de salida coincide con el de incidencia, pudiendo originar deslumbramiento indirecto. |
| **Sombra proyectada** | Zona de reducción brusca de iluminancia directa producida cuando un cuerpo sólido (pilar, estantería, viga o máquina) intercepta los haces emitidos por las luminarias. |
| **Ángulo de apertura (FWHM)** | Ángulo total entre las dos direcciones de una curva fotométrica en las que la intensidad luminosa se reduce al $50\ \%$ de su valor máximo. |
| **Curva fotométrica polar** | Representación gráfica en coordenadas polares de la intensidad luminosa ($\text{cd}$ o $\text{cd/klm}$) emitida por una luminaria según el ángulo $\gamma$ en planos $C$ definidos. |
| **Eficacia luminosa ($\text{lm/W}$)** | Relación entre el flujo luminoso neto emitido por la luminaria completa y la potencia eléctrica total consumida de la red, incluyendo el equipo auxiliar. |
| **Eulumdat (`.ldt`)** | Formato estándar europeo de texto plano que almacena datos geométricos, eléctricos y tabla de intensidades en $\text{cd/klm}$ de una luminaria. |
| **Grado IK** | Índice normalizado (IK00 a IK10, según IEC 62262) que clasifica la resistencia de la envolvente de una luminaria frente a impactos mecánicos externos. |
| **Grado IP** | Índice normalizado (dos cifras según IEC 60529) que expresa el nivel de estanqueidad de un equipo eléctrico frente a sólidos/polvo y penetración de agua. |
| **IESNA LM-63 (`.ies`)** | Formato estándar norteamericano en texto plano que describe la distribución espacial de intensidades luminosas absolutas en candelas y las propiedades básicas de la luminaria. |
| **LOR (Light Output Ratio)** | Rendimiento óptico de la luminaria, definido como la relación entre el flujo luminoso emitido al exterior y el flujo nominal de la fuente luminosa interna. |
| **Aislínea (curva isolux)** | Línea trazada sobre una superficie de cálculo que une todos los puntos con exactamente el mismo valor de iluminancia en lux ($\text{lx}$). |
| **Colores falsos (False Color)** | Representación gráfica cromática que asigna una gama de colores a rangos calibrados de iluminancia ($\text{lx}$) o luminancia ($\text{cd/m}^2$) para visualizar gradientes y anomalías espaciales. |
| **Factor de Mantenimiento ($MF$)** | Coeficiente reductor aplicado al cálculo fotométrico que recoge la pérdida progresiva de flujo por envejecimiento de fuente, fallo y suciedad de luminarias y paredes/techos. |
| **LPD (Lighting Power Density)** | Densidad de potencia de iluminación, expresada en vatios por metro cuadrado ($\text{W/m}^2$), resultante de dividir la potencia eléctrica total instalada de alumbrado entre la superficie útil iluminada. |
| **Memoria lumínica** | Informe técnico formal exportado tras el cálculo fotométrico que documenta las hipótesis empleadas, luminarias, tablas de resultados y planos de distribución de luz. |
| **Rejilla de cálculo** | Matriz estructurada de puntos de evaluación dentro de un plano o volumen en la cual el motor de DIALux computa iluminancias y uniformidades. |
| **UGR (Unified Glare Rating)** | Índice unificado que mide el deslumbramiento psicológico molesto percibido por un observador desde una posición y dirección de mirada concretas respecto a las luminarias visibles. |
| **VEEI** | Valor de Eficiencia Energética de la Instalación ($\text{W/m}^2$ por cada $100\ \text{lx}$ de iluminancia media horizontal mantenida), usado como indicador normativo de eficiencia en edificación (ejemplo español a verificar según vigencia). |

## Bloque 3: Revit MEP eléctricas (3D) (40 términos únicos)

| Término | Definición |
|---|---|
| **Coordenadas compartidas (Shared Coordinates)** | Sistema de referencia espacial común entre archivos RVT vinculados que alinea ubicación en planta, rotación al Norte real y cota de elevación al federar disciplinas. |
| **Copiar/Supervisar (Copy/Monitor)** | Herramienta de Revit que copia niveles o ejes desde un vínculo externo hacia el modelo eléctrico y notifica automáticamente cambios de geometría del modelo anfitrión. |
| **Disciplina (Discipline)** | Parámetro de vista en Revit que regula el comportamiento gráfico y la atenuación (*halftone*) de vínculos externos para priorizar visualmente los elementos eléctricos. |
| **Sistema de distribución (Distribution System)** | Definición lógica en `Electrical Settings` que especifica número de fases, hilos y tensiones línea-línea/línea-neutro permitidas para conectar equipos y circuitos. |
| **Espacio MEP (MEP Space)** | Objeto volumétrico analítico del modelo de instalaciones delimitado por recintos arquitectónicos (*Room Bounding*) que almacena datos de uso, cargas o demanda lumínica. |
| **Rango de vista (View Range)** | Conjunto de planos horizontales (*Top*, *Cut Plane*, *Bottom*, *View Depth*) que define qué altura del modelo 3D se corta o se proyecta en cada plano o vista RCP. |
| **Vista de techo reflejado (RCP)** | Vista orientada hacia arriba empleada en diseño eléctrico de iluminación para visualizar falsos techos, luminarias empotradas, sensores y canalizaciones de plenum. |
| **Taxonomía de categorías MEP** | Clasificación estructural nativa de Revit (*Electrical Equipment*, *Electrical Fixtures*, *Lighting Fixtures*, *Lighting Devices*, *Conduits*, *Cable Trays*) necesaria para conectividad y cómputos. |
| **Anfitrión (Host)** | Elemento constructivo o plano de referencia al cual se vincula geométricamente una familia cargable (muro, falso techo, cara plana o plano de trabajo). |
| **Basada en cara (Face-based)** | Tipo de familia `.rfa` capaz de adherirse a cualquier superficie plana de un modelo propio o vinculado, evitando dependencias frágiles con muros o techos nativos. |
| **Componente de detalle (`Detail Item`)** | Familia exclusivamente 2D empleada para representar detalles constructivos en vistas de corte o planta sin generar geometría en el modelo 3D ni aparecer en detecciones de choques. |
| **Conector eléctrico (Electrical Connector)** | Objeto lógico incrustado en una familia MEP que almacena tensión, fases, sistema de distribución y potencia para habilitar la creación de circuitos y paneles. |
| **Conduit with Fittings** | Familia de sistema de tubos en Revit que inserta familias cargables independientes en cada codo, unión o transición para permitir mediciones reales y control constructivo. |
| **Elemento huérfano (Orphaned)** | Elemento hospedado cuya superficie o anfitrión de origen en un vínculo externo ha desaparecido o cambiado de identidad tras una actualización del modelo. |
| **Símbolo anotativo anidado (Generic Annotation)** | Familia 2D escalable automáticamente insertada dentro de un aparato eléctrico 3D para garantizar su lectura normalizada en planos de planta a cualquier escala. |
| **Volumen Clearance** | Geometría auxiliar parametrizada frente a cuadros eléctricos, transformadores o SAI que reserva el espacio libre mínimo exigido para apertura de puertas, maniobra y mantenimiento. |
| **Alimentador (Feeder)** | Canalización eléctrica principal que enlaza el cuadro general de distribución (CGBT) con subtableros secundarios o cargas de elevada potencia. |
| **Batería de tubos (Conduit Rack)** | Agrupación paralela y coplanaria de varios conductos que comparten trazado troncal y sistema de soportería común manteniendo separación regular. |
| **Generatriz inferior (Bottom Elevation / BOC)** | Cota vertical correspondiente al punto exterior más bajo de un tubo o bandeja, determinante para comprobar holguras sobre falsos techos, luminarias y vigas. |
| **Pasatubos (Sleeve)** | Manguito o reserva tubular coordinada con Estructura para permitir el paso seguro de canalizaciones eléctricas a través de vigas o losas de hormigón. |
| **Patinillo técnico (Riser / Shaft)** | Conducto constructivo vertical continuo a través de las plantas del edificio destinado a alojar montantes eléctricos accesibles y registrables. |
| **Plenum de instalaciones** | Cámara horizontal situada entre el falso techo y el forjado estructural superior donde se coordinan en altura conductos de aire, luminarias, rociadores y tubos eléctricos. |
| **Sectorización cortafuegos (Firestopping)** | Conjunto de soluciones de sellado intumescente en pasos de canalizaciones a través de muros o forjados resistentes al fuego para impedir la propagación de incendios. |
| **Tipo de servicio (`Service Type`)** | Parámetro nativo de sistema en conductos y bandejas de Revit utilizado para clasificar el uso eléctrico de cada tramo y controlar filtros visuales y tablas. |
| **Bayoneta (Offset Bend)** | Desvío geométrico en paralelo formado por dos curvas de igual ángulo (habitualmente $30^\circ$ o $45^\circ$) y un tramo inclinado intermedio para sortear obstáculos estructurales o MEP. |
| **Codos back-to-back** | Dos curvas consecutivas conectadas sin tramo recto intermedio suficiente ni registro, generando un cuello de botella mecánico que dificulta o impide el tendido de cables. |
| **Desconexión (Disconnect)** | Extremo abierto de un segmento de tubo o unión que no enlaza correctamente con un conector o accesorio vecino en el espacio 3D, interrumpiendo la continuidad del sistema. |
| **Longitud de avance (Take-off)** | Distancia lineal ocupada por la geometría de un codo desde el eje de giro hasta el punto de encaje; condiciona la separación mínima que Revit necesita para generar un enrutado automático. |
| **Preferencias de enrutamiento (Routing Preferences)** | Asignación en las propiedades de tipo del conducto (`Edit Type > Fittings`) de las familias `.rfa` de curva, te, cruz, transición y manguito que se insertan al modelar. |
| **Radio mínimo de curvatura** | Valor límite de curvatura en el eje del tubo o cara interior del cable que garantiza no deformar la canalización ni dañar el aislamiento del conductor al doblar o tirar del haz. |
| **Show Disconnects** | Herramienta de diagnóstico de Revit MEP que resalta con marcadores visuales todos los extremos de canalización o uniones sin conexión válida dentro del modelo 3D. |
| **Tabla de consulta (Lookup Table)** | Archivo CSV embebido en las familias `.rfa` de uniones que vincula cada diámetro nominal con sus dimensiones reales de fabricación, longitudes de encaje y radios de curvatura. |
| **Acoplamiento (Coupling)** | Accesorio de unión lineal roscada, por compresión o enchufable destinado a empalmar tramos consecutivos de tubo rígido o conectar adaptadores a tramo flexible. |
| **Clash Detection (Hard / Soft Clash)** | Análisis automatizado de interferencias en 3D que diferencia colisiones físicas entre sólidos (*Hard Clash*) e invasiones de zonas libres de acceso o mantenimiento (*Soft Clash*). |
| **Conduleta (`C`, `LB`, `LR`, `LL`, `T`)** | Cuerpo metálico o sintético con tapa registrable desmontable que permite cambios de dirección compactos y acceso para tirado de cables sin emplear codos curvos amplios ni tes ciegas. |
| **Cómputo métrico (Quantity Takeoff)** | Extracción ordenada desde tablas de planificación BIM de longitudes de canalización y unidades de accesorios, que requiere validación humana de mermas y partidas no modeladas. |
| **Prensaestopas (Cable Gland)** | Dispositivo roscado de entrada de cable en envolvente eléctrica que aporta estanqueidad (IP66/IP68), alivio de tracción mecánica y, en su caso, continuidad de pantalla o protección ATEX. |
| **Soporte en trapecio (Trapeze Hanger)** | Conjunto de suspensión compuesto por perfil horizontal tipo *Unistrut* y dos varillas roscadas ancladas al forjado estructural superior para sostener baterías de tubos o bandejas. |
| **Arriostramiento sísmico (Seismic Bracing)** | Sistema de tirantes o perfiles diagonales rígidos añadido a la soportería gravitatoria para impedir desplazamientos excesivos ante sismos o fuerzas dinámicas. |
| **Subcategoría de holgura (Access Clearance)** | Geometría auxiliar asignada a una subcategoría independiente dentro de cajas y conduletas para comprobar espacio de apertura de tapa en *clash detection* y ocultarla en planos constructivos. |

## Bloque 4: Documentación BIM (61 términos únicos)

| Término | Definición |
|---|---|
| **Plantilla de vista (View Template)** | Configuración centralizada de parámetros gráficos y de vista en Revit que se asigna de forma persistente a múltiples vistas para asegurar homogeneidad y control multiusuario. |
| **Plano de techo reflejado (RCP)** | Tipo de vista en planta orientada hacia arriba desde el plano de corte, empleada en instalaciones eléctricas para documentar luminarias, falsos techos y canalizaciones aéreas. |
| **Subyacente (Underlay)** | Referencia temporal en gris de otro nivel superior o inferior utilizada para alinear elementos durante el modelado; debe mantenerse desactivada (`None`) en plantillas de documentación. |
| **Región de plano (Plan Region)** | Contorno cerrado dentro de una vista en planta que aplica un *View Range* local independiente para resolver zonas con cambio de cota, como dobles alturas o altillos. |
| **Medio tono (Halftone)** | Ajuste gráfico que atenúa el contraste de categorías secundarias o modelos vinculados (arquitectura, estructura o climatización) para resaltar la instalación eléctrica. |
| **Disciplina de vista (View Discipline)** | Propiedad de vista (`Electrical`, `Coordination`, etc.) que regula cómo Revit gestiona líneas ocultas, atenuación automática del fondo y jerarquía visual entre especialidades. |
| **Lista de vistas (View List)** | Tabla de planificación nativa de Revit que recopila los parámetros de todas las vistas del proyecto para auditar la asignación de plantillas, escalas y subyacentes antes de imprimir. |
| **Parámetro compartido (Shared Parameter)** | Definición de parámetro almacenada en un archivo `.txt` externo mediante un identificador único (`GUID`), indispensable para leer y etiquetar el mismo atributo en múltiples familias, tablas y vistas. |
| **Parámetro de proyecto (Project Parameter)** | Atributo personalizado creado únicamente dentro de un archivo `.rvt`; sirve para filtrar y planificar en tablas, pero no puede vincularse dentro de etiquetas de anotación (`.rfa`). |
| **`Service Type`** | Parámetro nativo de texto disponible en tubos (`Conduits`) y bandejas (`Cable Trays`) en Revit MEP para clasificar su servicio ante la ausencia de sistemas eléctricos lógicos automáticos en esas categorías. |
| **Navegador de sistemas (System Browser)** | Ventana auxiliar de Revit (`F9`) que organiza jerárquicamente tableros, circuitos lógicos y elementos desconectados (`Unassigned`) de las categorías eléctricas conectables. |
| **Filtro de vista (View Filter)** | Regla lógica parametrizada dentro de una vista o plantilla que modifica automáticamente color, grosor, patrón de línea o visibilidad de los elementos que cumplen condiciones sobre sus parámetros. |
| **Organización del Navegador (Browser Organization)** | Regla de agrupación y ordenación del árbol de vistas y planos en Revit basada en parámetros nativos o compartidos como disciplina, uso de vista y subdisciplina. |
| **Tabla de auditoría (QA Schedule)** | Tabla de planificación diseñada para control de calidad interno que detecta parámetros vacíos, dispositivos sin circuito o incoherencias mediante filtros y formato condicional. |
| **Nivel de detalle (Detail Level)** | Parámetro de vista en Revit (`Coarse` / Bajo, `Medium` / Medio, `Fine` / Alto) que controla si las canalizaciones y familias se dibujan de modo simbólico simplificado o con geometría 3D real completa. |
| **Línea simple simbólica (1-Line)** | Representación axial unifilar utilizada en detalle Bajo (y Medio en tubos) que evita el solape gráfico en escalas generales como `1:100` o `1:200`. |
| **Doble línea real (2-Line)** | Representación geométrica a escala real del diámetro exterior de tubos (en detalle Alto) o anchura real de bandejas (en detalle Medio y Alto). |
| **Escalado anotativo** | Comportamiento por el cual textos, cotas, etiquetas y símbolos de anotación genérica mantienen tamaño constante en milímetros sobre papel al cambiar la escala de la vista. |
| **Vista de llamada (Callout)** | Vista ampliada vinculada a una zona acotada de una planta general, empleada para documentar áreas densas (`1:50`) o cuartos eléctricos (`1:20`) con referencia automática en lámina. |
| **Grosores de línea (Line Weights)** | Tabla de correspondencia entre números de pluma (`1–16`) y espesor real de impresión en milímetros según la escala de la vista, clave para evitar empastamientos en PDF. |
| **LOD (Level of Development)** | Referencia contractual orientativa que define la precisión geométrica, dimensional y de coordinación de un elemento BIM según la fase del proyecto; no equivale a *Detail Level* de Revit. |
| **LOI (Level of Information)** | Grado de profundidad y fiabilidad de los datos alfanuméricos no gráficos (parámetros eléctricos, identificadores, potencias, referencias) contenidos en los elementos del modelo. |
| **Etiqueta paramétrica (Tag)** | Familia de anotación 2D asociativa que lee y muestra dinámicamente parámetros reales de ejemplares o tipos del modelo BIM, actualizándose al instante ante cambios. |
| **Texto muerto (Dumb Text)** | Nota de texto estática (`TX`) sin vínculo con los parámetros del modelo; su uso para diámetros, circuitos o tableros genera discrepancias graves al modificarse el diseño. |
| **Texto de etiqueta (Label)** | Elemento dinámico dentro de una familia de etiqueta `.rfa` que combina uno o más parámetros integrados o compartidos con prefijos, sufijos y formato gráfico. |
| **Nota clave (Keynote)** | Código normalizado vinculado a una base de datos `.txt` tabulada que asocia prescripciones constructivas estandarizadas a elementos o puntos de plano sin saturar el dibujo con párrafos extensos. |
| **`Filter by Sheet`** | Opción de configuración en la *Keynote Legend* de Revit que filtra automáticamente la tabla de notas de la lámina para listar únicamente las notas clave presentes en sus vistas. |
| **Cota de elevación (Spot Elevation)** | Anotación paramétrica (`EL`) que consulta la altura real de fondo (`Bottom`), cara superior (`Top`) o eje (`Centerline`) de canalizaciones y equipos respecto al nivel de referencia (`NPT`). |
| **Recorte de anotación (Annotation Crop)** | Contorno externo respecto al *Model Crop* que delimita hasta dónde se imprimen etiquetas, cotas y textos; si es demasiado estrecho, amputa anotaciones junto a bordes o *Matchlines*. |
| **Carril de anotación (Annotation Lane)** | Franja espacial ordenada donde se alinean los bloques de texto de múltiples etiquetas con directrices ortogonales paralelas para evitar solapes en corredores o salas densas. |
| **Anotación genérica (Generic Annotation)** | Familia bidimensional de Revit cuyo tamaño escala automáticamente respecto al modelo para mantener unas dimensiones físicas constantes en el plano impreso. |
| **Desfase simbólico (Symbol Offset)** | Parámetro de instancia que permite desplazar gráficamente en planta un símbolo 2D anidado sin alterar la posición tridimensional real del componente eléctrico. |
| **Filtro basado en reglas (Rule-based Filter)** | Herramienta de visualización que aplica sobrescrituras automáticas de color, patrón, grosor o visibilidad a elementos que cumplen condiciones lógicas sobre sus parámetros. |
| **Leyenda (Legend View)** | Vista especial reutilizable en múltiples láminas de un proyecto BIM destinada a mostrar y describir los símbolos, tipos de línea y elementos gráficos normalizados. |
| **Maintain Annotation Orientation** | Propiedad de las familias de componentes 3D que mantiene el símbolo 2D anidado legible y orientado paralelamente al plano de vista aunque el componente se hospede en muros verticales. |
| **Prioridad de filtros** | Orden vertical en *Visibility/Graphics Overrides* que determina qué regla visual prevalece cuando un mismo elemento cumple simultáneamente varios filtros activos. |
| **Sobrescritura por elemento (By Element)** | Modificación gráfica manual y puntual aplicada sobre un único ejemplar en una vista; práctica desaconsejada por romper la coherencia frente a cambios del modelo. |
| **View Template (Plantilla de vista)** | Conjunto guardado de configuraciones gráficas (escala, nivel de detalle, visibilidad de categorías, filtros y subyacentes) que asegura uniformidad entre múltiples vistas del proyecto. |
| **Cartela paramétrica (Title Block)** | Familia 2D de lámina que incorpora marco, formato normalizado, etiquetas automáticas (*Labels*) y tabla de revisiones vinculadas al proyecto y plano. |
| **Componente de detalle (Detail Item)** | Familia bidimensional cargable empleada para representar con precisión accesorios constructivos o capas materiales dentro de secciones y *Drafting Views* sin recargar el 3D. |
| **Escala gráfica** | Barra métrica graduada incorporada al plano que escala solidariamente con el dibujo para comprobar en obra o en PDF si la impresión mantiene la proporción correcta. |
| **Floor Plan Callout** | Vista ampliada de planta generada desde un recorte de plano madre que conserva disciplina MEP y configuración propia de *View Range*. |
| **Issued (Revisión bloqueada)** | Estado en *Sheet Issues/Revisions* que cierra una revisión ya emitida impidiendo editar, mover o eliminar sus nubes asociadas en el modelo. |
| **Nube de revisión (Revision Cloud)** | Anotación gráfica que delimita visualmente la zona modificada de una vista o lámina y vincula automáticamente la entrada correspondiente en la tabla de revisiones. |
| **Numeración Per Project / Per Sheet** | Criterio de asignación del identificador de revisión, ya sea global para toda la entrega del proyecto o consecutivo e independiente por cada lámina modificada. |
| **Vista de diseño 2D (Drafting View)** | Vista bidimensional independiente de la geometría tridimensional del modelo destinada a detalles constructivos repetitivos y esquemas estándar. |
| **Conciliación documental** | Comprobación sistemática y cruzada que garantiza la coherencia exacta de códigos, magnitudes y requisitos entre modelo BIM, planos, cálculos, estudio DIALux y pliego. |
| **Especificación por prestaciones** | Prescripción técnica redactada en función de características medibles, ensayos y normas aplicables, evitando imponer marcas comerciales cerradas sin justificación. |
| **Key Schedule (Tabla de claves)** | Tabla especial de Revit que permite asignar automáticamente múltiples parámetros descriptivos y de especificación a elementos del modelo mediante un único código de clave. |
| **Pliego de prescripciones técnicas** | Documento contractual del proyecto que establece la calidad exigida de materiales, normas de ejecución, tolerancias, ensayos y condiciones de recepción de la instalación. |
| **Pruebas de recepción** | Conjunto de inspecciones visuales, ensayos eléctricos (aislamiento, continuidad, impedancia, diferenciales) y medidas lumínicas exigidos antes de aceptar una instalación terminada. |
| **Red-teaming documental** | Revisión crítica dirigida a encontrar contradicciones, ambigüedades, sesgos de marca u omisiones en un texto técnico antes de su emisión formal. |
| **Schedule (Tabla de planificación)** | Vista tabular paramétrica vinculada al modelo BIM que extrae listados, propiedades y recuentos de componentes eléctricos para auditoría, medición y especificaciones. |
| **Acta de emisión (Transmittal)** | Documento índice que acompaña formalmente un envío de archivos PDF detallando códigos de lámina, títulos, revisión vigente, formato y finalidad de la entrega. |
| **Calibración de escala en visor PDF** | Verificación dimensional realizada directamente sobre el PDF emitido midiendo su barra de escala gráfica para confirmar que equivale exactamente al 100 % nominal. |
| **Exportación nativa PDF** | Herramienta integrada en Revit (desde versión 2022) para generar archivos PDF directamente con detección automática de tamaño de lámina y reglas de nombrado paramétricas. |
| **Fit to Page (Ajustar a página)** | Opción de escalado automático que adapta el dibujo al área imprimible de una hoja cambiando arbitrariamente la escala nominal; prohibida en planos técnicos medibles. |
| **Halftone (Semitono)** | Propiedad gráfica de atenuación tonal empleada para dejar en segundo plano arquitectura o vínculos manteniendo el procesamiento vectorial sin usar transparencias. |
| **Print Set (Conjunto de impresión)** | Selección guardada de vistas o láminas dentro del proyecto Revit para automatizar la generación repetible de lotes de impresión o exportación PDF. |
| **Procesamiento ráster** | Conversión gráfica de una lámina en imagen de mapa de bits definida por puntos por pulgada (`dpi`), generando archivos pesados con pérdida de nitidez al ampliar. |
| **Procesamiento vectorial** | Generación de un documento PDF basado en entidades geométricas matemáticas y fuentes reales buscables, manteniendo nitidez infinita a cualquier nivel de zoom. |

## Bloque 5: Visualización Twinmotion (78 términos únicos)

| Término | Definición |
|---|---|
| **Datasmith** | Tecnología y conjunto de complementos de Epic Games que traduce escenas BIM y CAD (geometría, jerarquía y materiales básicos) desde software como Revit hacia Twinmotion o Unreal Engine. |
| **Direct Link** | Mecanismo de conexión viva dentro de Datasmith que permite re-sincronizar modificaciones del modelo origen en Revit directamente sobre una escena abierta en Twinmotion sin reimportar desde cero. |
| **Falsa sensación de validación** | Sesgo por el cual una imagen fotorrealista o recorrido fluido induce erróneamente a suponer que la instalación eléctrica o lumínica cumple la normativa técnica vigente. |
| **Lumen / Tiempo real** | Modo de iluminación global en tiempo real basado en GPU que equilibra fluidez interactiva y rebotes de luz para navegación ágil en pantalla (sujeto a versión y compatibilidad gráfica). |
| **Path Tracer** | Motor de renderizado físico por trazado de rayos progresivo integrado en Twinmotion que produce imágenes de alta fidelidad lumínica, exigiendo GPU compatible con Ray Tracing (DXR) y mayor tiempo de cálculo. |
| **Section Box** | Caja de recorte tridimensional en Revit que delimita exactamente qué porción volumétrica del edificio permanece visible en una vista 3D y se transfiere al exportar. |
| **VRAM** | Memoria dedicada de alta velocidad integrada en la tarjeta gráfica (GPU) donde se almacenan mallas 3D, texturas y búferes de renderizado durante la sesión de Twinmotion. |
| **`.udatasmith`** | Formato de archivo de intercambio estático generado por el exportador Datasmith que encapsula la geometría y activos en una carpeta transportable independiente del enlace vivo. |
| **Auto-sync** | Modo de sincronización continua en Datasmith que actualiza la escena en Twinmotion automáticamente tras cada edición en Revit; desaconsejado durante modelado intensivo MEP. |
| **Collapse All** | Opción de importación que fusiona todos los elementos de un enlace en una única malla sólida; inutilizable para elementos eléctricos que requieran edición o sustitución individual. |
| **Collapse by Material** | Modo de agrupación que combina geometrías que comparten un mismo material de Revit en mallas únicas por material, optimizando *draw calls* pero impidiendo editar ejemplares sueltos. |
| **Draw Call** | Petición enviada de la CPU a la tarjeta gráfica para dibujar una malla con un material asignado; su exceso degrada la fluidez en tiempo real. |
| **Keep Hierarchy** | Modo de importación que preserva el árbol jerárquico de familias y ejemplares de Revit dentro de Twinmotion, imprescindible para gestionar luminarias, cuadros y canalizaciones individuales. |
| **Material puente (semántico)** | Material definido con nombre estable e inequívoco en Revit cuya función principal es permitir la asignación selectiva y persistente de acabados PBR en Twinmotion entre sincronizaciones. |
| **Modelo federado** | Conjunto coordinado de archivos disciplinares separados (Arquitectura, Estructura, Eléctrica, Clima) enlazados mediante coordenadas comunes en un entorno BIM. |
| **Z-fighting** | Artefacto visual de parpadeo o manchas triangulares en superficies provocado por dos mallas coplanares superpuestas, típico cuando se exporta un mismo vínculo RVT duplicado. |
| **Albedo (Color base)** | Canal de un material PBR que define su color difuso puro sin iluminación ni sombras horneadas; debe mantenerse alejado de extremos puros `0` o `255`. |
| **Bloom (Halo luminoso)** | Efecto óptico de cámara/postprocesado que genera un resplandor difuso alrededor de zonas muy brillantes; su abuso en difusores emisivos borra detalles cercanos. |
| **Exposed MEP** | Enfoque de diseño donde tuberías, bandejas portacables y luminarias quedan visibles sin falso techo oculto, integrándose en la estética arquitectónica. |
| **Mapeado triplanar** | Método de proyección de texturas desde los tres ejes ortogonales que evita distorsiones y estiramientos en conductos y bandejas sin UV desplegadas. |
| **Metallic (Metalicidad)** | Parámetro PBR (habitualmente `0` o `1`) que indica si la superficie se comporta como dieléctrico (PVC, pintura RAL) o como metal conductor desnudo (galvanizado, aluminio). |
| **Normal Map** | Textura codificada en RGB que simula micro-relieves y variaciones de inclinación superficial ante la luz sin incrementar el número de polígonos de la malla. |
| **PBR (Physically Based Rendering)** | Modelo de sombreado basado en principios físicos reales de reflexión y conservación de la energía para lograr acabados coherentes bajo cualquier luz. |
| **Roughness (Rugosidad)** | Parámetro PBR (`0` a `1`) que controla la dispersión microscópica de los reflejos: valores bajos producen reflejos nítidos y valores altos generan acabados mate. |
| **Auto Exposure (Exposición automática)** | Ajuste dinámico automático del brillo de cámara según lo que aparece en pantalla; debe desactivarse en comparativas de iluminación para no distorsionar la realidad percibida. |
| **Denoiser** | Filtro matemático aplicado tras el trazado de rayos que elimina el grano residual de imagen manteniendo la geometría nítida con menor tiempo de cálculo. |
| **Exposición manual (EV)** | Parámetro fijo que controla la sensibilidad luminosa de la cámara virtual, indispensable para comparar con honestidad dos esquemas de alumbrado. |
| **Fireflies** | Puntos aislados excesivamente brillantes que aparecen como artefactos de ruido en renders con *Path Tracer* ante fuentes pequeñas intensas o materiales emisivos mal calibrados. |
| **HDRI (High Dynamic Range Image)** | Mapa ambiental esférico con rango dinámico real utilizado para iluminar y generar reflejos naturales consistentes de cielo o entorno en la escena 3D. |
| **Hora Azul (Blue Hour)** | Momento crepuscular de cielo azulado tenue ideal en visualización arquitectónica para equilibrar luz ambiental exterior y protagonismo de luminarias artificiales. |
| **Iluminación Global (GI)** | Simulación de rebotes indirectos de la luz entre todas las superficies de un recinto, esencial para lograr realismo volumétrico en interiores. |
| **Tone Mapping** | Transformación matemática que adapta el amplio rango de luminancias simuladas de una escena 3D al rango limitado de colores de un monitor o imagen digital. |
| **Archivo `.ies` (IESNA LM-63)** | Formato estándar de datos fotométricos que describe la distribución espacial de intensidad luminosa en candelas y es compatible con las luces fotométricas de Twinmotion. |
| **Auto-oclusión (Self-Shadowing)** | Bloqueo accidental de la emisión de una luz virtual en Twinmotion al quedar situada dentro de una carcasa o malla opaca cerrada. |
| **Bloque compuesto (User Library)** | Conjunto agrupado de malla geométrica, material difusor y luz `.ies` alineada que se guarda en Twinmotion para reutilizar o reemplazar instancias con rapidez. |
| **Flujo BIM-céntrico** | Estrategia de trabajo que centraliza cambios de posición y tipo en Revit MEP (validados en DIALux) y sincroniza hacia Twinmotion vía *Direct Link*, evitando importaciones aisladas inconexas. |
| **Luminaria huérfana** | Luminaria presente en la escena visual cuya geometría, potencia u óptica quedó desactualizada respecto a la última revisión del cálculo DIALux o planos Revit. |
| **Normales invertidas** | Defecto de orientación de polígonos en mallas exportadas (`3DS/OBJ/IFC`) que hace que las caras de una luminaria parezcan transparentes o desaparezcan vistas desde el exterior. |
| **Plano fotométrico $C_0$** | Plano angular de referencia a partir del cual se define la orientación de curvas luminosas asimétricas en ficheros `.ldt`/`.ies` (crítico en bañadores de pared y alumbrado vial). |
| **Flujo luminoso ($\text{lm}$)** | Cantidad total de energía radiante ponderada por la sensibilidad del ojo humano que emite una fuente de luz por unidad de tiempo, medida en lúmenes. |
| **Iluminancia ($\text{lx}$)** | Flujo luminoso incidente por unidad de superficie ($\text{lm}/\text{m}^2$), parámetro normativo verificado en software fotométrico (como DIALux) y nunca en un render. |
| **Temperatura de color correlacionada (CCT)** | Magnitud en kelvin ($\text{K}$) que describe la tonalidad aparente de una fuente de luz blanca desde cálida ($\approx 2700\text{ K}$) hasta luz día fría ($\approx 6500\text{ K}$). |
| **Valor de exposición (EV)** | Parámetro fotográfico de cámara que controla la luminosidad global captada en una escena; su bloqueo manual garantiza comparaciones honestas entre variantes. |
| **Balance de blancos (White Balance)** | Ajuste en kelvin de la cámara virtual que compensa la dominante cromática ambiental para definir qué tonalidad se representa como blanco neutro. |
| **Ángulo de haz (Cone Angle)** | Apertura angular del cono luminoso emitido por un foco o proyector, que determina si la distribución es intensiva, media o extensiva. |
| **Radio de atenuación (Attenuation)** | Distancia máxima configurada en motores en tiempo real hasta la cual una fuente artificial contribuye a iluminar superficies antes de recortarse por rendimiento. |
| **Perfil fotométrico `.ies`** | Archivo estandarizado que almacena la distribución espacial de intensidades en candelas ($\text{cd}$) de una luminaria real para reproducir con fidelidad su curva óptica. |
| **Scene Graph** | Árbol jerárquico de Twinmotion que organiza todos los objetos importados, luces, cámaras y elementos de biblioteca, permitiendo agruparlos y controlar su visibilidad. |
| **Atrezo digital (Entourage)** | Conjunto de objetos ilustrativos (mobiliario, vegetación, personas, vehículos) añadidos en visualización para dar escala y contexto sin pertenecer necesariamente al suministro contractual. |
| **Urban Context** | Herramienta de Twinmotion que genera volúmenes esquemáticos del entorno urbano a partir de cartografía abierta (OpenStreetMap) con fines de ambientación orientativa. |
| **HDRI Skydome** | Entorno panorámico esférico de alto rango dinámico que aporta cielo realista, iluminación ambiental y reflejos coherentes en superficies exteriores o acristaladas. |
| **Ocultación selectiva** | Técnica de apagado controlado de capas o carpetas (como falsos techos o mobiliario) para exponer instalaciones eléctricas ocultas sin modificar el modelo BIM de origen. |
| **Escala humana funcional** | Uso de figuras de personas acordes al recinto (p. ej., técnicos con EPI en salas eléctricas) para transmitir de manera inmediata dimensiones reales y ergonomía de operación. |
| **Interferencia arbórea** | Colisión o bloqueo visual provocado al insertar vegetación dentro del cono de iluminación de farolas, balizas o proyectores o delante de señalización eléctrica. |
| **Reflectancia inducida por humedad** | Incremento irreal de brillos especulares sobre pavimentos generado por efectos de lluvia en el motor gráfico que puede confundir la percepción de uniformidad lumínica. |
| **Storyboard técnico** | Guion visual y tabular previo a la animación que define planos, duraciones, movimientos de cámara, capas visibles y subtítulos de un recorrido. |
| **Keyframe (Fotograma clave)** | Registro guardado en la línea de tiempo que almacena posición de cámara, parámetros ópticos y condiciones ambientales como punto de interpolación. |
| **Video Part (Parte de vídeo)** | Subsecuencia independiente dentro de un proyecto de vídeo de Twinmotion que permite cortes limpios entre encuadres y configuraciones distintas. |
| **Distancia focal ($\text{mm}$)** | Medida óptica que controla la amplitud del ángulo de visión; entre $24\text{ mm}$ y $35\text{ mm}$ evita deformaciones perspectivas en armarios y salas eléctricas. |
| **Profundidad de campo (DoF)** | Zona de distancia que aparece nítida en imagen; conviene mantenerla amplia ($f/8\text{–}f/16$ o desactivada) en inspecciones técnicas para leer primer plano y fondo. |
| **Dwell Time (Tiempo de permanencia)** | Pausa intencionada de la cámara ($2\text{ a }4\text{ segundos}$) frente a un cuadro eléctrico, luminaria o detalle constructivo para facilitar la comprensión visual. |
| **Clipping de cámara** | Error de trayectoria en el que la cámara atraviesa físicamente muros, puertas, luminarias o bandejas durante la interpolación entre dos *keyframes*. |
| **Phasing (Fases constructivas)** | Herramienta temporal que muestra de forma escalonada la aparición de grupos del *Scene Graph* para ilustrar etapas de montaje o desmontaje MEP. |
| **Twinmotion Presentation** | Módulo para empaquetar vistas, panoramas, vídeos y fases en una experiencia interactiva limpia sin menús de edición. |
| **Local Presentation** | Archivo o paquete autónomo ejecutable localmente en equipo compatible para presentar proyectos sin conexión a nube externa. |
| **Twinmotion Cloud** | Plataforma en línea asociada a licencia para compartir presentaciones interactivas vía navegador, sujeta a autorización y confidencialidad del proyecto. |
| **View Set (Conjunto de vistas)** | Estado guardado de visibilidad y configuración de capas en el *Scene Graph* que permite conmutar variantes o fases en una misma cámara. |
| **Navegación Guided frente a Free** | Opciones de presentación que restringen al espectador a paradas preaprobadas (*Guided*) o permiten desplazamiento abierto por el modelo (*Free*). |
| **Paralelismo vertical (Parallelism)** | Ajuste de cámara virtual que mantiene rectas y paralelas las aristas verticales de muros, edificios y envolventes eléctricas. |
| **Par comparativo bloqueado** | Pareja de imágenes o estados con exactamente las mismas coordenadas y distancia focal para contrastar con honestidad dos situaciones técnicas. |
| **Guion de orador (Speaker Notes)** | Texto estructurado de apoyo por parada que sincroniza el discurso verbal del técnico con los elementos visuales y límites normativos del proyecto. |
| **Resolución 4K UHD** | Formato de imagen de $3840 \times 2160$ píxeles recomendado para preservar el detalle fino de aparamenta eléctrica, textos y bandejas en renders fijos. |
| **Samples y Denoiser** | Número de muestras de luz por píxel y filtro de suavizado de ruido en *Path Tracer*; equilibrarlos evita tanto grano residual como borrosidad en etiquetas. |
| **Fotogramas por segundo (FPS)** | Cantidad de imágenes individuales reproducidas por cada segundo de vídeo ($24\text{–}30\text{ FPS}$ es el rango óptimo en recorridos de instalaciones eléctricas). |
| **Códec H.264 / H.265** | Estándares de compresión para vídeo MP4; H.264 ofrece máxima compatibilidad entre equipos de clientes y H.265 reduce tamaño en 4K. |
| **Panorama equirectangular $360^\circ$** | Imagen panorámica única en proporción $2:1$ que envuelve una esfera visual completa para inspeccionar recintos eléctricos en visores interactivos. |
| **Carta de entrega (Transmittal)** | Documento índice que lista todos los entregables visuales y planos PDF de una remesa, su revisión y las condiciones o límites de uso. |
| **Control de versiones cruzado** | Verificación obligatoria de que la geometría e iluminación mostradas en los renders coinciden con la última revisión de los planos PDF adjuntos. |

## Bloque 6: IA aplicada a instalaciones (79 términos únicos)

| Término | Definición |
|---|---|
| **Anonimización previa** | Eliminación o sustitución por alias neutros de todo dato identificativo del cliente, emplazamiento, costes confidenciales o metadatos antes de consultar un asistente de IA externo. |
| **Bitácora de trazabilidad IA** | Registro estructurado que documenta qué consultas se realizaron a una IA, qué datos anonimizados se usaron, qué fallos se detectaron y qué método determinista validó la decisión final. |
| **Cálculo determinista** | Ejecución exacta y reproducible de ecuaciones matemáticas mediante software certificado, hoja de cálculo auditada o cálculo manual verificado, frente a la generación probabilística de texto. |
| **LLM (Large Language Model)** | Modelo de lenguaje basado en aprendizaje profundo que predice texto estadísticamente coherente; útil como copiloto documental y de revisión, pero carente de criterio legal o motor físico propio. |
| **Principio de minimización** | Práctica de seguridad que consiste en transferir únicamente los atributos técnicos mínimos indispensables (p. ej. columnas CSV concretas) en lugar de expedientes, PDFs o modelos completos. |
| **Responsabilidad técnica intransferible** | Principio profesional y jurídico por el que solo el técnico competente asume la validez reglamentaria y seguridad de un proyecto, sin posibilidad de delegarla en herramientas de software o IA. |
| **Validación independiente** | Comprobación de fórmulas, unidades SI, parámetros reglamentarios y resultados mediante herramientas de cálculo y fuentes oficiales ajenas al asistente de IA consultado. |
| **Anonimización estricta** | Eliminación completa de identificadores directos, pistas indirectas en observaciones, importes confidenciales y metadatos internos antes de subir un documento a un asistente externo. |
| **Archivo CSV normalizado** | Tabla de texto plano con encabezados únicos en la primera fila, unidades SI explícitas en cabecera, identificador por registro y ausencia de celdas combinadas o subtotales mezclados. |
| **Capa 1 (Fidelidad al origen)** | Comprobación de que los códigos, cantidades, recuento de filas y sumatorios devueltos por la IA coinciden exactamente con el archivo fuente suministrado. |
| **Capa 2 (Validación técnica/legal)** | Contraste independiente de resultados, fórmulas y criterios frente a herramientas de cálculo deterministas, simulaciones DIALux/Revit y la edición vigente de la norma aplicable. |
| **Contexto persistente (Proyecto IA)** | Espacio de trabajo dentro de ChatGPT o Claude que almacena instrucciones fijas y documentos base anonimizados para mantener criterios homogéneos en varias consultas. |
| **Degradación en contexto largo** | Pérdida de precisión u omisión silenciosa de registros intermedios cuando se procesan tablas o documentos extensos en una sola consulta sin fragmentación. |
| **Tabla local de alias** | Archivo guardado exclusivamente dentro de la red segura del técnico que vincula códigos neutros usados con la IA (`CLI-01`, `LOC-07`) con sus nombres reales de proyecto. |
| **Total de control (Checksum)** | Cifra agregada calculada previamente en hoja local (número de circuitos, potencia total o número total de luminarias) usada para detectar al instante omisiones en el resumen de la IA. |
| **Arquitectura radial** | Configuración de distribución eléctrica en árbol donde cada subcuadro o carga recibe energía por una única ruta desde un nivel superior de distribución. |
| **Arquitectura en anillo** | Topología que conecta los centros o subcuadros mediante un bucle cerrado físicamente (operado abierto o cerrado según protecciones) para ofrecer doble vía de suministro ante fallos. |
| **Condiciones de contorno** | Conjunto explícito de parámetros técnicos, operativos, espaciales y económicos del proyecto necesarios para que el análisis comparativo con IA tenga sentido técnico real. |
| **Factor de simultaneidad** | Coeficiente menor o igual que $1$ que ajusta la suma de potencias nominales conectadas a la potencia máxima probable que demandará simultáneamente una instalación o cuadro. |
| **Filtro normativo binario** | Validación eliminatoria (`CUMPLE / NO CUMPLE`) frente al reglamento aplicable antes de puntuar alternativas, impidiendo compensar ilegalidades técnicas con menor coste. |
| **Matriz de decisión ponderada** | Método cuantitativo de comparación multicriterio que multiplica la valoración de cada alternativa por pesos porcentuales normalizados al $100\,\%$ en hoja de cálculo auditable. |
| **Reserva física y eléctrica** | Margen planificado tanto en intensidad nominal de cabecera/embarrados como en espacio libre de módulos DIN y ocupación de canalizaciones para futuras ampliaciones. |
| **Sectorización de alumbrado** | División funcional y eléctrica de luminarias en circuitos independientes, líneas regulables por luz natural y zonas de emergencia para optimizar seguridad, mantenimiento y consumo. |
| **Alucinación de relleno** | Invención silenciosa de valores numéricos, materiales o requisitos técnicos por un LLM cuando la ficha de entrada omite algún dato del proyecto. |
| **Anclaje documental (Grounding)** | Técnica de consulta que obliga a la IA a redactar exclusivamente a partir de datos verificados suministrados por el técnico, prohibiendo suposiciones externas. |
| **Cláusula auditable** | Especificación técnica redactada con magnitudes físicas, ensayos y criterios de aceptación objetivos (`PASA / NO PASA`) comprobables durante la ejecución y recepción de obra. |
| **Contradicción interdocumental** | Discrepancia técnica o cuantitativa entre dos documentos del mismo proyecto (p. ej. potencia o tipo de cable distinto entre memoria, pliego, cálculos y planos Revit/DIALux). |
| **Control editorial técnico** | Auditoría humana sistemática previa a la emisión en PDF que verifica citas normativas, elimina ambigüedades lingüísticas, resuelve marcadores pendientes y confirma coherencia documental. |
| **Ficha Maestra de Proyecto** | Documento o tabla anonimizada de síntesis con todos los parámetros aprobados y verificados del encargo que actúa como fuente única para redactar borradores con IA. |
| **Lista blanca normativa** | Relación cerrada de reglamentos y normas vigentes comprobados por el proyectista para un país y edificio concretos, fuera de la cual el asistente tiene prohibido citar preceptos legales. |
| **Pliego de especificaciones técnicas** | Documento contractual-técnico que fija calidades mínimas medibles, normas de montaje, pruebas y criterios de recepción para materiales e instalaciones en obra. |
| **Análisis dimensional** | Comprobación sistemática de que las unidades físicas (SI) en todos los términos de una fórmula son coherentes y producen la magnitud resultante esperada. |
| **Caso de prueba (Benchmark Case)** | Ejercicio numérico simple resuelto y comprobado manualmente que se utiliza para verificar que todas las fórmulas programadas en una hoja de cálculo arrojan el resultado exacto. |
| **Constante enterrada** | Valor numérico introducido directamente dentro de una fórmula de hoja de cálculo sin referencia a una celda visible documentada, dificultando su auditoría y actualización normativa. |
| **Corriente de diseño ($I_b$)** | Intensidad eléctrica prevista en régimen normal de funcionamiento para la potencia eléctrica demandada de un circuito, base inicial antes de seleccionar protección ($I_n$) y cable ($I_z$). |
| **Formulación simbólica** | Expresión algebraica explícita de un procedimiento técnico con sus variables, definiciones y unidades SI previa a la sustitución de cifras numéricas. |
| **Método de los lúmenes** | Procedimiento manual simplificado de predimensionado de alumbrado interior general para estimar el número inicial de luminarias, que requiere siempre posterior simulación en DIALux. |
| **Redondeo conservador** | Criterio de aproximación numérica que evita subestimar exigencias de seguridad o niveles mínimos de servicio (p. ej. no truncar corrientes ni redondear a la baja el número mínimo de luminarias). |
| **Aplanado tabular** | Transformación de un cuadro o informe con encabezados combinados o bloques paralelos (como un *panel schedule* de Revit) en filas homogéneas con una columna por variable para su análisis fiable. |
| **Desequilibrio de fases** | Diferencia de carga eléctrica entre las fases L1, L2 y L3 de un sistema trifásico respecto a su valor medio, causante de pérdidas adicionales, caídas de tensión asimétricas y corriente por el neutro. |
| **Discrepancia Revit–DIALux** | Incoherencia en número de luminarias, código de tipo o potencia instalada entre la simulación fotométrica en DIALux y el modelo BIM eléctrico en Revit MEP. |
| **Local fuera de rango** | Recinto cuyo cálculo fotométrico incumple alguno de los parámetros objetivo asignados ($E_m$ mínimo, $U_0$, $UGR$ máximo o densidad de potencia/$VEEI$ aplicable). |
| **Panel Schedule** | Tabla de planificación de cuadro eléctrico generada en Revit MEP que muestra circuitos conectados, fases, cargas, protecciones asignadas y totales por tablero. |
| **Puerta QA/QC Pre-Emisión** | Control de calidad estructurado previo a la impresión de planos PDF que exige cerrar y verificar todas las anomalías de modelo, cálculo y documentación antes de entregar el proyecto. |
| **Uniformidad ($U_0$)** | Cociente entre la iluminancia mínima y la iluminancia media de un área de cálculo en DIALux ($E_{min}/E_m$), indicador clave de homogeneidad visual en el espacio. |
| **Prompt de seis capas** | Instrucción técnica estructurada en rol acotado, marco normativo a verificar, entradas con unidades SI, restricciones de no invención, formato controlado y protocolo de validación humana. |
| **Alucinación técnica** | Respuesta generada por un modelo de lenguaje que inventa o distorsiona cifras, secciones de cables, artículos reglamentarios o capacidades de interoperabilidad de software con apariencia verosímil. |
| **Regla de abstención** | Cláusula incluida en el *prompt* que obliga al modelo a declarar explícitamente `FALTANTE` o «no verificable» cuando carece de datos suficientes en lugar de asumir valores por defecto. |
| **Archivo Eulumdat (.ldt) / IES (.ies)** | Formato normalizado de datos fotométricos suministrado por fabricantes de luminarias para modelar con rigor la distribución luminosa en DIALux. |
| **Caso patrón (Golden Test)** | Conjunto controlado de datos de prueba con errores conocidos y resultado validado manualmente que permite comprobar si una plantilla de *prompt* sigue siendo fiable tras editarla. |
| **BEP (BIM Execution Plan)** | Documento rector que establece normas de nomenclatura, matriz de parámetros, niveles de desarrollo, flujos de coordinación y estándares de entrega de un proyecto BIM. |
| **Parámetro compartido** | Parámetro definido en un archivo externo único de Revit que permite reutilizar exactamente el mismo campo entre múltiples familias, etiquetas y tablas de planificación. |
| **Tabla de planificación (Schedule)** | Vista tabular vinculada al modelo BIM que lista y cuantifica propiedades de elementos eléctricos; su completitud es documental y no sustituye el cálculo reglamentario. |
| **Higiene documental** | Proceso sistemático de depuración de notas generales, leyendas y especificaciones heredadas para eliminar contradicciones, normas inaplicables o datos obsoletos. |
| **Matriz de impacto en cascada** | Tabla de seguimiento que identifica todos los entregables afectados (cálculo, unifilar, DIALux, Revit, láminas PDF y visualización) cuando se modifica un requisito del proyecto. |
| **Pre-flight PDF** | Lista de comprobación ejecutada inmediatamente antes de emitir planos en PDF para validar escalas, filtros, etiquetas, cajetines, índice de revisiones y legibilidad gráfica. |
| **Trazabilidad de revisión** | Registro ordenado mediante códigos (`Rev A`, `Rev B`, fecha, descripción del cambio y revisor) que permite auditar qué cambió entre entregas y por qué. |
| **Automatización determinista** | Proceso repetitivo gobernado por reglas exactas y verificables sin ambigüedad, apto para auditoría o ejecución asistida tras validación previa. |
| **Especificación funcional** | Documento previo a la programación que fija entradas, precondiciones, lógica paso a paso, excepciones y registro de salida de una rutina BIM. |
| **Pseudocódigo** | Representación estructurada en lenguaje claro de los pasos lógicos de una automatización, independiente de la sintaxis de Python o de nodos específicos de Dynamo. |
| **Entorno Sandbox (Copia de respaldo)** | Duplicado aislado y fechado del archivo del proyecto empleado exclusivamente para ensayar modificaciones automáticas sin exponer el modelo vivo de producción. |
| **Prueba piloto acotada** | Ejecución controlada de un flujo sobre una muestra pequeña (5–10 elementos o una planta) para verificar impacto en etiquetas, filtros, *Schedules* y PDFs. |
| **Auditoría Diff** | Comparación sistemática entre datos exportados antes y después de una operación masiva para confirmar que no hubo alteraciones no deseadas en cargas o identificadores. |
| **Plan de reversión (Rollback)** | Procedimiento documentado que permite restaurar de inmediato la última versión íntegra del modelo ante cualquier incidencia detectada durante el ensayo. |
| **Auditoría cruzada multifuente** | Revisión sistemática que contrasta datos equivalentes entre memoria de cálculo, unifilar, DIALux, Revit MEP y planos PDF para descubrir inconsistencias ocultas. |
| **Clave primaria de cruce** | Identificador único idéntico (`ID_Circuito`, `ID_Local`) empleado en todas las herramientas del proyecto para alinear elementos sin ambigüedad durante una comparación. |
| **Falso positivo** | Alerta generada por la IA que señala un error inexistente, habitualmente por falta de contexto sobre factores de potencia, simultaneidad o circuitos de reserva. |
| **Falso negativo** | Error real y potencialmente grave del proyecto que la IA omite detectar por limitaciones de contexto, falta de cálculo normativo o lectura gráfica incompleta. |
| **Matriz de severidad** | Escala de priorización (`Crítico`, `Mayor`, `Menor`) que clasifica cada inconsistencia según su impacto en seguridad eléctrica, cumplimiento o ejecución en obra. |
| **Brecha de trazabilidad gráfica** | Limitación de los asistentes textuales ante fallos exclusivamente visuales en planos o esquemas PDF que exigen inspección directa del técnico revisor. |
| **Dictamen de revisión humana** | Resolución formal emitida y asumida por un técnico competente que autoriza, condiciona o retiene la emisión documental tras comprobar todas las incidencias. |
| **Dossier Auditado de IA** | Expediente integrador que reúne entradas anonimizadas, *prompts* versionados, salidas revisadas, errores de IA corregidos, matriz de coherencia y validación humana de un proyecto. |
| **Acta de Validación Técnica Humana** | Documento final de control donde el técnico responsable confirma la comprobación independiente de cálculos, normativa a verificar, planos PDF y alcance visual del modelo. |
| **Cadena de trazabilidad 6-en-1** | Vínculo documentado entre diseño eléctrico, estudio DIALux, modelo Revit MEP, planos PDF, visualización Twinmotion y auditoría con IA para propagar cambios sin pérdidas. |
| **Registro de fallos de IA** | Tabla histórica que documenta alucinaciones, omisiones o falsos positivos detectados en asistentes de IA junto con la evidencia técnica independiente que los corrigió. |
| **Línea base (Baseline)** | Conjunto cerrado y aprobado de datos técnicos y parámetros de proyecto utilizado como referencia oficial frente a cambios posteriores y auditorías finales. |
| **Interoperabilidad realista** | Comprensión rigurosa de qué datos pueden transferirse entre herramientas (`.ldt`/`.ies`, CSV, DWG/DXF, *Direct Link*) y qué validaciones requieren intervención manual independiente. |
| **Deslinde de responsabilidad técnica** | Distinción formal entre el apoyo instrumental de software o IA y la responsabilidad profesional y legal indelegable del ingeniero o proyectista habilitado según jurisdicción. |
| **Cierre integrador** | Fase final del programa donde se consolidan, auditan y defienden conjuntamente los entregables técnicos y documentales desarrollados a lo largo de los seis módulos. |
