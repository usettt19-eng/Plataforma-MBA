# Tema 2. Importación de planos en 2D

## 1. Ficha del tema

| Campo | Detalle |
| :--- | :--- |
| **Título del tema** | Importación de planos en 2D |
| **Bloque y posición dentro del programa** | Bloque 2: Modelado en DIALux — Posición 2 de 5 (Tema 13 de 50 del programa) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Haber completado el Tema 1 (Configuración de DIALux en SI y jerarquía de espacios) y contar con nociones básicas de lectura de planos CAD (DWG/DXF) y escalas arquitectónicas. |
| **Resultado general de aprendizaje** | Al finalizar la sesión, el alumnado será capaz de depurar planos 2D arquitectónicos (DWG, DXF y PDF), importarlos en DIALux con escala exacta y origen de coordenadas común para coordinación BIM posterior, y levantar fielmente los contornos exteriores, locales interiores, alturas reales de planta y falso techo y vanos del edificio. |

---

## 2. Objetivos de aprendizaje

Al completar esta sesión de 4 horas, el alumnado será capaz de:

1. **Identificar** los elementos geométricos y capas redundantes de un plano DWG/DXF/PDF que deben depurarse antes de importarlo en DIALux para evitar lentitud gráfica o errores de referencia *(Nivel de Bloom: Recordar)*.
2. **Diferenciar** el comportamiento técnico de archivos CAD vectoriales (DWG/DXF), PDF vectoriales y PDF ráster (escaneados) respecto a precisión de captura de vértices y control de escala *(Nivel de Bloom: Comprender)*.
3. **Aplicar** procedimientos de verificación métrica en dos ejes y alineación al origen común `(0, 0, 0)` al importar planos arquitectónicos 2D en la plantilla métrica de DIALux *(Nivel de Bloom: Aplicar)*.
4. **Modelar** con exactitud el contorno exterior del edificio, los locales interiores, las cotas diferenciadas de forjado/falso techo/plenum y la ubicación real de ventanas, puertas y lucernarios *(Nivel de Bloom: Aplicar)*.
5. **Auditar** un levantamiento geométrico importado en DIALux para detectar desviaciones de escala, desplazamientos respecto al origen BIM o incoherencias entre altura bruta y altura libre bajo falso techo *(Nivel de Bloom: Evaluar)*.

---

## 3. Contenidos esenciales

### 3.1. Limpieza previa de archivos DWG, DXF y PDF de arquitectura

#### Explicación breve y clara
Los planos arquitectónicos de origen rara vez llegan listos para simulación luminotécnica: suelen contener decenas de capas de mobiliario detallado, sombreados densos (*hatches*), bloques anidados, referencias externas (*xrefs*), textos de cotas, cajetines y capas antiguas de otras disciplinas. Importar un archivo DWG «sucio» de $25\ \text{MB}$ dentro de DIALux multiplica los tiempos de regeneración en pantalla, dificulta el enganche preciso a vértices (*snap*) y oculta los muros estructurales bajo tramas innecesarias. Antes de importar, conviene generar una copia específica para luminotecnia (limpia y purgada en el editor CAD disponible), dejando únicamente muros, tabiques, carpinterías, pilares y ejes de referencia. Si solo se dispone de un PDF, debe comprobarse si es vectorial (permite detectar líneas o medir con precisión) o ráster (imagen escaneada propensa a distorsiones).

#### Conceptos clave
- **Copia depurada de referencia (*Clean Base*):** Duplicado del archivo DWG/DXF original (nunca modificar el archivo maestro del arquitecto) donde se eliminan sombreados, anotaciones y capas ajenas al contorno físico.
- **Descomposición y purga CAD:** Eliminación de bloques no usados, referencias externas no enlazadas, objetos proxy o entidades situadas en cota $Z \neq 0$ (*aplanado 2D*) que causan fallos de importación.
- **PDF vectorial frente a PDF ráster:** Distinción entre un PDF exportado directamente desde CAD/BIM (mantiene trazos matemáticos nítidos) y un plano impreso y escaneado (mapa de píxeles con posible deformación de escala).
- **Seguridad y confidencialidad de planos:** Nunca subir planos arquitectónicos reales (DWG/PDF con ubicación, accesos, cámaras, datos de cliente o información crítica) a herramientas web o asistentes de IA externos sin autorización expresa.

#### Definiciones necesarias
- **Archivo DWG / DXF:** Formatos estándar de intercambio de dibujo CAD 2D/3D (DWG nativo de AutoCAD; DXF formato de intercambio textual/binario compatible con múltiples aplicaciones); su versión de guardado puede requerir guardar en versión compatible (p. ej. DXF/DWG 2013 o 2018) según la versión de DIALux instalada.
- **Aplanado de dibujo (Z=0):** Proceso de llevar todas las entidades del plano CAD 2D a elevación $Z = 0,00\ \text{m}$ para evitar líneas inclinadas o fuera de plano al calcar contornos en DIALux.
- **Calco de referencia (*Underlay*):** Plano 2D importado en DIALux como capa guía visual no computable fotométricamente, sobre el que se dibujan los sólidos constructivos reales del edificio.

#### Ejemplo práctico realista
Una ingeniería recibe un plano DWG de $18,4\ \text{MB}$ correspondiente a una planta comercial de $420\ \text{m}^2$ en Bilbao. El archivo incluye 142 capas (fontanería, PCI, saneamiento, vegetación ornamental y tramas de pavimento de gres). Al intentar importarlo directamente en DIALux, el visor tarda más de 40 segundos en cada zoom y el cursor se engancha continuamente a líneas de baldosas en lugar de a las aristas de los muros. Aplicando limpieza previa sobre una copia (`BASE_ARQ_LIMPIA.dwg`): se desactivan y borran las capas de instalaciones y tramas, se purgan bloques y se aplana a $Z=0$. El archivo resultante pesa $680\ \text{KB}$ y permite trazar todos los locales en menos de 12 minutos. *(Nota: conserve siempre el plano original intacto en carpeta de solo lectura y evite cargarlo en plataformas IA públicas).*

#### Errores frecuentes
- Trabajar directamente sobre el archivo original recibido de arquitectura sin guardar una copia depurada específica para DIALux.
- Importar planos con cientos de sombreados sólidos o tramas de vegetación, bloqueando la tarjeta gráfica durante el trazado de habitaciones.
- Asumir que un PDF escaneado tiene exactamente la misma escala horizontal y vertical sin comprobar ambas direcciones tras importarlo.
- Olvidar apagar las capas de mobiliario auxiliar del DWG al calcar tabiques, trazando paredes por el contorno de mesas o mostradores por error.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué categorías de entidades y capas deben eliminarse o congelarse en una copia DWG antes de importarla a DIALux?
2. ¿Qué diferencia operativa existe entre usar un PDF vectorial y un PDF escaneado como base para levantar un modelo en DIALux?
3. ¿Qué riesgo de seguridad y confidencialidad supone cargar planos DWG/PDF de clientes en servicios web externos o chats de IA sin permiso?

---

### 3.2. Control estricto de escala y unidades en la importación

#### Explicación breve y clara
El error número uno al importar planos 2D en DIALux es el desajuste de escala por discrepancia entre las unidades reales en las que fue dibujado el DWG/DXF (milímetros, centímetros o metros) y la unidad que el asistente de importación asume por defecto. Un tabique de $15\ \text{cm}$ dibujado en milímetros ($150$ unidades CAD) puede aparecer como $150\ \text{m}$ si DIALux interpreta las unidades en metros, arruinando por completo el cálculo fotométrico (por la ley inversa del cuadrado de la distancia) y el número de luminarias. Por ello, **ninguna importación se da por válida sin medir manualmente al menos dos cotas conocidas independientes en ejes perpendiculares (X e Y)** justo después de insertar el plano.

#### Conceptos clave
- **Factor de escala fuente-destino:** Correspondencia exacta entre unidades del archivo CAD ($\text{mm}$, $\text{cm}$, $\text{m}$) y la unidad métrica de DIALux ($\text{m}$), aplicando factores como $0,001$ ($\text{mm} \to \text{m}$) o $0,01$ ($\text{cm} \to \text{m}$).
- **Calibración mediante cota de contraste:** Selección de una dimensión arquitectónica inequívoca y larga (p. ej., eje estructural de $12,00\ \text{m}$ mejor que el hueco de una puerta de $0,80\ \text{m}$) para minimizar el error relativo de puntería.
- **Verificación ortogonal X / Y:** Medición de dos segmentos largos en dirección horizontal y vertical del plano importado para confirmar que no existe escala anamórfica (deformación en un eje típica de PDF escaneados o fotografías).
- **Tolerancia constructiva admisible:** Margen máximo aceptable entre la cota impresa del plano y la medida en DIALux (habitualmente $< 1\ \%$ o pocos milímetros en elementos largos antes de empezar a levantar muros).

#### Definiciones necesarias
- **Unidad de dibujo CAD:** Magnitud lineal implícita asociada a cada unidad geométrica dentro de un DWG/DXF (comúnmente milímetros en arquitectura/BIM europeo, centímetros en ciertos estudios locales o metros en urbanismo).
- **Error de escala proporcional:** Desviación multiplicativa de todo el modelo importado (p. ej., factor $10\times$, $100\times$ o $1000\times$) que altera de forma exponencial el cálculo de iluminancias y potencias requeridas.
- **Escala anamórfica (no uniforme):** Distorsión en la que el factor de escala horizontal ($X$) difiere del vertical ($Y$), frecuente en documentos impresos, fotocopiados y escaneados sin calibración óptica.

#### Ejemplo práctico realista
Un técnico importa el DWG de un aula técnica dibujada en centímetros sin fijarse en el selector de unidades del asistente de importación de DIALux, que estaba en metros. Una pared acotada en el plano como $8,40\ \text{m}$ ($840$ unidades en el DWG) queda importada como $840,00\ \text{m}$ de longitud. Si por despiste no lo comprueba y usa la herramienta de inserción automática por rejilla, el software podría intentar poblar un local de $840\ \text{m} \times 600\ \text{m}$ con miles de luminarias o colgar el equipo. Al medir la cota de contraste entre pilares $P1$ y $P3$ (cota real $12,00\ \text{m}$) inmediatamente tras importar, detecta la lectura de $1200,00\ \text{m}$, corrige la unidad de importación a centímetros (factor $0,01$) y verifica $12,00\ \text{m}$ en eje X y $9,60\ \text{m}$ en eje Y (coincidente con la cota impresa de $9,60\ \text{m}$). *(Nota: si el plano corresponde a un proyecto real, verificar además si la normativa nacional vigente impone tolerancias específicas para levantamientos).*

#### Errores frecuentes
- Confiar en las unidades que figuran en los metadatos internos del DWG sin comprobar visualmente midiendo una cota conocida dentro de DIALux.
- Calibrar un PDF ráster usando una línea muy corta (como el grosor de un tabique de $0,10\ \text{m}$), amplificando cualquier error de clic de ratón al multiplicar por toda la planta.
- Verificar únicamente una medida horizontal y omitir la perpendicular en planos PDF o escaneados.
- Cambiar la escala del plano *después* de haber dibujado la mitad de los locales y ventanas, descuadrando el calco respecto a la geometría ya modelada.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué es mucho más fiable calibrar o comprobar la escala usando una luz entre pilares de $15,00\ \text{m}$ que usando el ancho de una puerta de $0,90\ \text{m}$?
2. ¿Qué ocurre exactamente si un DWG dibujado en milímetros se importa declarando que sus unidades son metros?
3. ¿Cómo se detecta una deformación de escala distinta en el eje X y en el eje Y cuando el único plano disponible es un PDF escaneado?

---

### 3.3. Definición de origen de coordenadas común para coordinación BIM posterior

#### Explicación breve y clara
En proyectos profesionales integrados, DIALux no trabaja aislado: los puntos de luz definidos en el estudio lumínico deben coordinarse posteriormente con las bandejas, tubos, cajas de derivación y techos arquitectónicos modelados en **Revit MEP (Bloque 3)**. Si cada disciplina importa los planos en un punto arbitrario de la pantalla —o si el DWG viene en coordenadas geográficas UTM a cientos de kilómetros del origen `(0, 0, 0)`—, las exportaciones en DWG o IFC aparecerán desplazadas o rotadas fuera del edificio real, dificultando la superposición y obligando a recolocar manualmente decenas de luminarias. Fijar desde la importación un **origen común de coordenadas** (por ejemplo, la intersección de ejes estructurales `A-1` o el punto base del proyecto acordado) y mantener la misma rotación garantiza trazabilidad geométrica realista entre disciplinas.

#### Conceptos clave
- **Origen común de proyecto `(0, 0, 0)`:** Punto geométrico único consensuado (habitualmente esquina inferior izquierda del edificio o cruce de ejes `A-1`) donde coinciden el `0,00` de arquitectura, DIALux y Revit MEP.
- **Coordenadas UTM lejanas vs. coordenadas locales:** Traslación controlada de planos topográficos con coordenadas de cientos de miles de metros a coordenadas locales cercanas al origen para evitar inestabilidad numérica y errores de precisión gráfica.
- **Alineación multi-planta:** Uso exactamente del mismo punto base de origen y ángulo de rotación al importar Planta Baja, Planta Primera y Cubierta para que escaleras, huecos de patinillo y pilares queden verticalmente alineados.
- **Realismo de interoperabilidad DIALux–Revit:** DIALux permite importar/exportar DWG y trabajar con IFC según configuración y versión, pero **no sincroniza nativamente circuitos eléctricos ni familias paramétricas de Revit**; mantener coordenadas comunes es el puente práctico fiable para exportar posiciones X-Y-Z exactas hacia el modelo BIM.

#### Definiciones necesarias
- **Punto Base de Proyecto (en contexto BIM):** Coordenada de referencia local acordada dentro del entorno de proyecto (o Plan de Ejecución BIM / BEP) que permite referenciar todos los modelos disciplinarios en el mismo sistema espacial.
- **Coordenadas locales de cálculo:** Sistema cartesiano $(X, Y, Z)$ próximo al cero absoluto $(0,0,0)$ que minimiza errores de coma flotante en motores gráficos 3D y facilita la lectura de tablas de coordenadas de luminarias.
- **Rotación de proyecto vs. Norte real:** Diferencia entre orientar los ejes principales del edificio paralelos a los ejes X/Y de dibujo para modelar con ortogonalidad, y declarar el ángulo del Norte geográfico si se simula luz solar.

#### Ejemplo práctico realista
Un edificio de oficinas de 3 plantas en Madrid tiene su DWG arquitectónico georreferenciado en coordenadas UTM ($X = 440\,512,35\ \text{m}$, $Y = 4\,474\,820,10\ \text{m}$). Si se importa así en DIALux, el edificio queda a más de $4\,400\ \text{km}$ del origen, dificultando el encuadre y provocando parpadeos gráficos (*z-fighting*) en las vistas 3D. Antes de importar (o usando la herramienta de reubicación de origen durante la importación en DIALux), el equipo traslada el cruce de ejes estructurales `A-01` al punto `(0, 0, 0)` y alinea Planta 0, Planta 1 y Planta 2 exactamente sobre ese vértice `A-01`. Más adelante, en el Bloque 3 (Revit MEP), las coordenadas exportadas de cada luminaria coinciden al milímetro con la modulación de placas de falso techo $600\ \text{mm} \times 600\ \text{mm}$ sin traslaciones improvisadas. *(Nota: documente siempre en una nota del proyecto el vector de desplazamiento aplicado respecto al sistema geográfico original).*

#### Errores frecuentes
- Colocar la Planta Baja cerca del origen por intuición con el ratón y luego alinear la Planta Primera «a ojo» sobre una pared parecida, creando descuadres entre plantas.
- Importar planos en coordenadas UTM sin trasladar al origen local y sufrir fallos visuales o incapacidad de encuadre en la vista 3D.
- Rotar un plano en DIALux para comodidad de pantalla sin registrar exactamente el ángulo aplicado, perdiendo la alineación con el modelo Revit MEP.
- Creer que importar un IFC o DWG en DIALux genera automáticamente la coordinación eléctrica de circuitos, bandejas o tuberías en Revit.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué criterio geométrico conviene elegir como origen común `(0, 0, 0)` en un edificio de varias plantas para coordinar DIALux con Revit MEP?
2. ¿Qué problemas numéricos y visuales produce importar un plano 2D situado en coordenadas UTM reales a cientos de kilómetros del origen?
3. ¿Por qué alinear Planta Baja y Planta Primera sobre el contorno exterior de fachada es menos preciso que alinearlas sobre un cruce de ejes estructurales?

---

### 3.4. Trazado de contornos de edificio, alturas de planta/falso techo y vanos

#### Explicación breve y clara
Con el plano 2D depurado, escalado y alineado al origen común, se levanta el cascarón geométrico 3D del edificio. Este paso consta de tres elementos críticos: (1) el **contorno exterior del edificio** y la definición de cada **contorno interior de local** (cerrando polígonos con precisión en la cara interior de los muros); (2) la definición exacta de la **altura bruta de planta** (de cara superior de forjado a cara superior del siguiente) frente a la **altura libre bajo falso techo** (donde realmente quedan empotradas o suspendidas las luminarias y que delimita el volumen fotométrico activo del local, reservando el *plenum* superior para conductos y bandejas en Revit MEP); y (3) la inserción de **vanos** (ventanas, puertas, muros cortina y lucernarios) con sus dimensiones reales de ancho, alto y antepecho.

#### Conceptos clave
- **Contorno exterior vs. contorno de local:** Distinción entre la envolvente gruesa que define espesores de fachada/cerramientos y los polígonos netos interiores que delimitan cada estancia habitable o de trabajo.
- **Altura bruta vs. altura libre bajo falso techo:** Diferenciación esencial entre altura estructural de planta (p. ej. $3,70\ \text{m}$) y cota visible del techo registrable (p. ej. $2,70\ \text{m}$), que deja un *plenum* técnico de $1,00\ \text{m}$ (clave al coordinar con bandejas en Bloque 3 y elegir luminarias empotrables con profundidad adecuada).
- **Vanos y su impacto fotométrico:** Puertas, ventanas y lucernarios que modifican la geometría de las paredes (no reflejan igual que un muro opaco pintado; un vidrio deja escapar luz artificial hacia el exterior y permite entrada de luz natural).
- **Elementos estructurales interiores:** Pilares, vigas descolgadas o cajas de escalera que ocupan volumen real e interrumpen el paso directo de luz o la colocación de luminarias.

#### Definiciones necesarias
- **Plenum técnico:** Espacio cerrado situado entre el forjado superior estructural y el falso techo suspendido, donde habitualmente discurren canalizaciones eléctricas, climatización y parte del cuerpo empotrado de las luminarias.
- **Antepecho (o cota de alféizar):** Altura medida desde el nivel de suelo terminado del local hasta la arista inferior del hueco de una ventana o abertura en fachada.
- **Contorno de local cerrado:** Polígono estanco sin huecos ni vértices cruzados que DIALux requiere para reconocer el volumen interior de una estancia y calcular sus superficies de paredes, suelo y techo.

#### Ejemplo práctico realista
En una oficina técnica ubicada en planta segunda, el plano de arquitectura indica una altura de suelo a forjado superior de $3,65\ \text{m}$, pero la sección constructiva especifica un falso techo acústico modular a $2,75\ \text{m}$ sobre suelo terminado (plenum de $0,90\ \text{m}$ menos el espesor de losa). Además, la fachada oeste cuenta con 4 ventanas corridas de $2,40\ \text{m}$ de ancho $\times 1,60\ \text{m}$ de alto con antepecho a $0,95\ \text{m}$ del suelo. Si el proyectista introduce la altura bruta de $3,65\ \text{m}$ en lugar de $2,75\ \text{m}$ para el local, el cálculo fotométrico alejará las luminarias $0,90\ \text{m}$ adicionales del plano de utilidad (a $0,75\ \text{m}$), subestimando severamente la iluminancia real y falseando el ángulo de deslumbramiento UGR. Al configurar correctamente el techo suspendido a $2,75\ \text{m}$ y colocar las 4 ventanas a $0,95\ \text{m}$ de antepecho, el recinto reproduce fielmente el espacio real de cálculo. *(Nota: verificar siempre en secciones arquitectónicas y detalles de instalaciones de cada proyecto la profundidad libre disponible en el falso techo para luminarias empotrables).*

#### Errores frecuentes
- Modelar la altura entre forjados como altura neta del recinto olvidando introducir el falso techo real.
- Trazar el contorno de local por el eje central de los muros o por la cara exterior en lugar de la cara interior vista, alterando el área en $\text{m}^2$ y el cálculo de eficiencia energética ($\text{W/m}^2$).
- Omitir ventanas y grandes cristaleras en escenas nocturnas asumiendo paredes opacas blancas, lo que infla falsamente las reflexiones de pared dentro del local.
- Dejar vértices abiertos o solapados al cerrar polígonos complejos en L, provocando mensajes de error geométrico o superficies de cálculo desaparecidas.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué cambia drásticamente el resultado lumínico y el UGR si se modela la altura bruta de forjado ($3,65\ \text{m}$) en vez de la altura libre bajo falso techo ($2,75\ \text{m}$)?
2. ¿Qué papel juegan los vanos acristalados incluso cuando el cálculo de iluminación artificial se realiza en escenario nocturno sin sol?
3. ¿Qué diferencia hay entre el contorno exterior del edificio y el contorno interior de cada local respecto al cálculo de superficie neta ($\text{m}^2$) y densidad de potencia?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** combina diagnóstico práctico sobre planos reales, demostración de depuración CAD y flujo completo de importación y levantamiento 3D en DIALux.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
| :--- | :--- | :--- | :--- |
| **1. Apertura y activación** | 00:00 – 00:25 (25 min) | Conecta con el archivo plantilla del Tema 1, realiza el sondeo diagnóstico y lanza la **Actividad 1 (Activación)**: muestra un DWG sobrecargado vs. uno depurado y dos importaciones con fallo de escala/origen. | Evalúa ambos archivos en parejas, estima los tiempos de trabajo y detecta los fallos de escala, capas y coordenadas antes de levantar ningún muro. |
| **2. Microexposición: Limpieza CAD y escala/origen (3.1, 3.2 y 3.3)** | 00:25 – 01:00 (35 min) | Demuestra paso a paso cómo limpiar capas/bloques/Z=0 en una copia DWG, distinguir PDF vectorial de ráster, comprobar escala en X e Y y fijar el origen común `(0, 0, 0)` pensando en Revit MEP. | Sigue la demostración anotando la secuencia de verificación en su ficha técnica y comprueba en su equipo las unidades de un archivo DWG de muestra. |
| **3. Microexposición: Contornos, falso techo y vanos (3.4)** | 01:00 – 01:25 (25 min) | Modela en directo el contorno exterior de edificio, locales interiores, inserción de falso techo y colocación de puertas/ventanas con cotas de antepecho y dintel, señalando conflictos típicos de plenum. | Identifica en una sección arquitectónica de ejemplo la diferencia entre altura bruta, cota de falso techo y espacio libre de plenum. |
| **4. Práctica guiada: Actividad 2 (Aplicación técnica)** | 01:25 – 02:15 (50 min) | Lanza la **Actividad 2**, asiste individualmente en la calibración de un plano DWG y un PDF, valida la medición ortogonal en dos ejes y supervisa el levantamiento 3D de una planta piloto. | Importa el plano asignado en DIALux usando su plantilla del Tema 1, verifica escala X/Y, alinea al eje `A-1` `(0,0,0)`, traza edificio/locales y coloca falso techo y vanos. |
| *Descanso técnico* | 02:15 – 02:30 (15 min) | Pausa activa y resolución de incidencias gráficas o de importación CAD. | Descanso y guardado de versión intermedia `_v02.evo`. |
| **5. Resolución del caso práctico** | 02:30 – 03:10 (40 min) | Presenta el caso **Clínica Odontológica Mirador (Madrid)** con los archivos problemáticos (DWG en mm con UTM lejanas + PDF escaneado de ampliación + sección con falso techo). | En equipos de 3, audita las discrepancias métricas/coordenadas, corrige la importación del plano principal y resuelve la integración del anexo y cotas de falso techo. |
| **6. Puesta en común y control de calidad** | 03:10 – 03:25 (15 min) | Modera la revisión de los modelos levantados en 3D, contrasta coordenadas exportables y refuerza la distinción entre geometría validada y cálculo eléctrico/fotométrico. | Presenta sus mediciones de verificación (X, Y, superficie neta, cota de techo) y debate cómo prevenir desfases con Revit MEP. |
| **7. Transferencia a proyecto real (Actividad 3)** | 03:25 – 03:45 (20 min) | Guía la **Actividad 3**, facilitando el protocolo de preparación e importación 2D para aplicarlo al proyecto real o integrador de cada participante. | Ejecuta o planifica sobre el plano 2D de su proyecto integrador la lista de limpieza, control de escala, definición de origen común BIM y tabla de alturas/vanos. |
| **8. Evaluación sumativa y cierre** | 03:45 – 04:00 (15 min) | Aplica el cuestionario breve de verificación geométrica, recoge entregables, dinamiza la autoevaluación y enlaza con el **Tema 3 (Materiales y texturas)**. | Completa el test de cierre y la autoevaluación; verifica y guarda su modelo geométrico base `.evo` listo para asignar reflectancias en el Tema 3. |

*Suma verificada: 25 + 35 + 25 + 50 + 15 + 40 + 15 + 20 + 15 = **240 minutos (4 horas)**.*

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «El plano imposible: ¿por qué falla esta importación?»
- **Nombre:** El plano imposible: diagnóstico visual de errores de importación 2D.
- **Objetivo:** Reconocer de forma intuitiva y rápida las consecuencias métricas, gráficas y de coordinación BIM derivadas de importar planos 2D sin depuración ni control de escala/origen.
- **Instrucciones para el alumnado:**
  1. Inspeccionad en parejas los dos archivos de vista previa mostrados en el proyector/pantalla compartida: Caso A (un aula de $8\ \text{m} \times 6\ \text{m}$ donde la puerta mide $800\ \text{m}$ tras importar) y Caso B (dos plantas importadas que en vista 3D aparecen desplazadas $45\ \text{m}$ lateralmente una respecto a la otra y con pilares fuera de plomo).
  2. Respondéis por escrito en 6 minutos: (a) qué error exacto ocurrió en cada importación; (b) qué comprobación de 30 segundos lo habría evitado; y (c) qué ocurriría si ese modelo pasara así a Twinmotion o a coordinación con Revit MEP.
- **Materiales necesarios:** Diapositiva comparativa con capturas reales 2D/3D de ambos fallos y hoja de notas rápidas.
- **Tiempo estimado:** 12 minutos (dentro de la Fase 1).
- **Rol del formador:** Recoger diagnósticos del grupo sin anticipar la solución técnica; subrayar la importancia de medir siempre antes de dibujar muros.
- **Producto o entregable esperado:** Diagnóstico escrito de ambos casos y regla nemotécnica grupal (*«Limpiar → Escalar X/Y → Fijar Origen → Trazar»*).
- **Criterios de éxito:** Identificación precisa del factor de error ($\text{mm}$ vs. $\text{m}$) en el Caso A y de la falta de origen común multi-planta en el Caso B.

### Actividad 2 (Aplicación técnica): «Del DWG sucio al cascarón 3D coordinado en DIALux»
- **Nombre:** Levantamiento 3D exacto desde plano DWG depurado y comprobación ortogonal.
- **Objetivo:** Ejecutar completo el flujo de importación de un plano 2D (escala verificada en X e Y, origen común en eje `A-1`), trazar contornos de edificio y locales, asignar falso techo y colocar puertas y ventanas reales.
- **Instrucciones para el alumnado:**
  1. Abrid vuestra plantilla métrica `.evo` del Tema 1 y guardadla como `B2_T02_Cascaron_NombreApellido.evo`.
  2. Importad el plano de práctica suministrado (`Planta_Oficina_Practica_Clean.dwg`), seleccionando la unidad CAD correcta y fijando el punto de inserción `(0, 0, 0)` exactamente en la intersección de ejes `A-1`.
  3. Usad la herramienta de cinta métrica de DIALux para verificar **dos cotas de contraste largas**: una horizontal (eje 1 a eje 4 = $14,40\ \text{m}$) y una vertical (eje A a eje C = $9,20\ \text{m}$), anotando el error porcentual observado ($< 0,5\ \%$).
  4. Trazad el contorno exterior del edificio (muro de $0,30\ \text{m}$) y al menos 3 locales interiores netos (`P00_E01_Recepcion`, `P00_E02_SalaReuniones`, `P00_E03_DespachoTecnico`).
  5. Configurad una altura estructural de planta de $3,60\ \text{m}$ e insertad un falso techo interior a $2,70\ \text{m}$ (dejando $0,90\ \text{m}$ de plenum disponible para futuras instalaciones).
  6. Insertad 2 puertas interiores ($0,90\ \text{m} \times 2,10\ \text{m}$) y 3 ventanas exteriores ($2,00\ \text{m} \times 1,50\ \text{m}$, antepecho $0,95\ \text{m}$), verificando el resultado en vista 3D.
- **Materiales necesarios:** Ordenador con DIALux, archivo `Planta_Oficina_Practica_Clean.dwg` (o DXF equivalente) y hoja de cotas y secciones de referencia.
- **Tiempo estimado:** 50 minutos (Fase 4).
- **Rol del formador:** Demostrar los primeros 5 minutos la alineación del eje `A-1` al `(0,0,0)` y luego asistir en vivo verificando que las cotas X e Y y las alturas libres bajo falso techo sean correctas en todos los equipos.
- **Producto o entregable esperado:** Archivo `B2_T02_Cascaron_NombreApellido.evo` con modelo geométrico cerrado en 3D + captura de pantalla de la medición en X e Y y vista seccionada con el falso techo.
- **Criterios de éxito:** Desviación dimensional $\le 0,5\ \%$ frente a las cotas del plano, origen coincidente en `A-1`, polígono de locales sin errores de cierre, altura bajo falso techo exacta a $2,70\ \text{m}$ y vanos con antepecho correcto.

### Actividad 3 (Transferencia a proyecto real): «Protocolo de entrada 2D y puente BIM del proyecto propio»
- **Nombre:** Ficha de control de importación 2D y coordinación de origen para el proyecto integrador.
- **Objetivo:** Documentar y aplicar los criterios de depuración, escala, origen común BIM y geometría de falso techo sobre los planos arquitectónicos reales (anonimizados) del proyecto integrador del alumno.
- **Instrucciones para el alumnado:**
  1. Tomad el plano arquitectónico base de vuestro proyecto integrador (o caso facilitado, siempre con datos de cliente anonimizados).
  2. Completad la plantilla *«Acta de Importación 2D y Definición Geométrica»* (sección 8.3) indicando: formato fuente, capas conservadas vs. eliminadas, unidad detectada, cota de verificación en X e Y, punto base común `(0, 0, 0)` acordado con Revit MEP, alturas brutas vs. falsos techos por recinto y listado de vanos.
  3. Opcionalmente, redactad una consulta a ChatGPT/Claude (usando **únicamente** una tabla de texto anónima de nombres de capas exportada, nunca el archivo DWG ni el PDF del plano) para clasificar qué capas de arquitectura son relevantes para geometría lumínica y revisad manualmente si la IA propuso borrar alguna capa crítica (como pilares o muros cortina).
- **Materiales necesarios:** Plano 2D del proyecto integrador, plantilla de la sección 8.3 y acceso opcional a asistente IA solo para listado textual anónimo de capas.
- **Tiempo estimado:** 20 minutos (Fase 7).
- **Rol del formador:** Revisar que ningún participante comparta planos confidenciales con IA y validar los puntos de origen BIM definidos por el grupo.
- **Producto o entregable esperado:** *Acta de Importación 2D y Definición Geométrica* cumplimentada e incorporada al dosier del proyecto integrador.
- **Criterios de éxito:** Definición inequívoca del origen `(0, 0, 0)`, verificación métrica ortogonal registrada, diferenciación de cotas brutas/falso techo y protección estricta de datos del plano.

---

## 6. Caso práctico

### Levantamiento geométrico de la Clínica Odontológica Mirador (Madrid)

#### Contexto empresarial
**Ingeniería & Luz Ibérica S.L.** ha recibido el encargo de proyectar la iluminación y las instalaciones eléctricas de la ampliación y reforma de la **Clínica Odontológica Mirador** (local de $310\ \text{m}^2$ en planta baja en Madrid, con recepción, 4 gabinetes odontológicos, sala de rayos X, esterilización y despacho). La empresa colabora con un estudio de arquitectura externo que ya está modelando en Revit y entregará posteriormente la coordinación MEP al equipo eléctrico (Bloque 3).

#### Situación o problema
El estudio de arquitectura envía por correo dos ficheros con bastante urgencia:
1. `Clinica_Base_UTM.dwg`: plano principal del local existente ($230\ \text{m}^2$), guardado en milímetros, pero referenciado a coordenadas topográficas UTM de Madrid, con 95 capas activas (mobiliario médico, tuberías de aspiración dental, tramas de cerámica, textos de licencia) y líneas en distintas cotas $Z$.
2. `Anexo_Ampliacion_Escaneado.pdf`: un plano de reforma del nuevo almacén y 2 gabinetes anexos ($80\ \text{m}^2$) que fue impreso en A3, anotado a mano por la propiedad y escaneado con ligero giro e inclinación; al medirlo en pantalla, el ancho de puerta en horizontal parece tener una relación ligeramente distinta al ancho del pasillo vertical.

Un técnico comenzó a calcar directamente sin limpiar ni verificar: el edificio apareció a cientos de kilómetros del origen `(0, 0, 0)`, un gabinete de $3,20\ \text{m} \times 4,00\ \text{m}$ quedó modelado como $3\,200\ \text{m} \times 4\,000\ \text{m}$ al confundir milímetros con metros, y definió la altura libre de todo el local como $3,60\ \text{m}$ (altura entre forjados) ignorando que los gabinetes llevan un falso techo técnico registrable a $2,65\ \text{m}$ para alojar luminarias LED empotrables $600\ \text{mm} \times 600\ \text{mm}$ y conductos de climatización.

#### Datos disponibles
- **Cotas verificadas en obra y memoria arquitectónica (SI):**
  - Eje estructural `E1` a `E4` (horizontal X): $18,00\ \text{m}$.
  - Eje estructural `EA` a `EC` (vertical Y): $12,60\ \text{m}$.
  - Puerta estándar de acceso a gabinete: $0,90\ \text{m}$ de paso libre $\times 2,10\ \text{m}$ de alto.
  - Ventanales de fachada principal en Recepción y Gabinetes 1 y 2: $2,40\ \text{m}$ de ancho $\times 1,65\ \text{m}$ de alto, antepecho a $0,90\ \text{m}$.
  - Cota de forjado superior: $+3,60\ \text{m}$ respecto a suelo terminado ($0,00\ \text{m}$).
  - Cota inferior de falso techo en gabinetes y recepción: $+2,65\ \text{m}$ (plenum libre bruto $\approx 0,95\ \text{m}$).
  - Cota inferior de falso techo en pasillo de instalaciones y esterilización: $+2,45\ \text{m}$.
  - Punto Base BIM acordado con el estudio de arquitectura para Revit MEP: intersección del pilar en ejes `E1-EA`.

#### Preguntas de análisis
1. ¿Qué protocolo exacto de limpieza y transformación previa requiere `Clinica_Base_UTM.dwg` antes de abrir el asistente de importación de DIALux?
2. ¿Cómo debe procederse con `Anexo_Ampliacion_Escaneado.pdf` para evitar que una distorsión anamórfica (diferente escala en X e Y o ligera rotación del escáner) contamine el modelo geométrico? ¿Es recomendable usarlo como plano maestro definitivo sin verificar cotas reales?
3. ¿Qué errores concretos causaría mantener la altura de $3,60\ \text{m}$ en lugar de los falsos techos a $2,65\ \text{m}$ y $2,45\ \text{m}$, tanto en el futuro cálculo lumínico como en la posterior coordinación de canalizaciones en Revit MEP?
4. Si en la sala de rayos X las paredes llevan blindaje opaco y no hay ventanas, pero en recepción existe un gran escaparate acristalado de suelo casi a techo, ¿por qué deben modelarse exactamente esos vanos desde esta fase?

#### Tarea a realizar
En equipos de 3 personas (40 minutos):
1. Redactad el **Protocolo paso a paso de saneamiento e importación** para ambos archivos (DWG y PDF escaneado), justificando qué hacer con el origen UTM, la escala en milímetros y el riesgo de deformación del PDF.
2. Levantad en DIALux (a partir del archivo `Clinica_Saneada_Practica.dwg` facilitado para el aula) el contorno exterior del edificio alineado al cruce `E1-EA` en `(0, 0, 0)`, al menos 3 recintos interiores diferenciados (Recepción, Gabinete 1 a $2,65\ \text{m}$ y Pasillo técnico a $2,45\ \text{m}$) y sus ventanales/puertas reales.
3. Entregad una **Tabla de verificación de control geométrico** comparando las medidas reales del proyecto con las leídas en DIALux en X, Y y Z, y documentando el desplazamiento aplicado respecto a las coordenadas UTM originales.

#### Posibles soluciones o criterios de análisis
- **Saneamiento del DWG:** Duplicar archivo; eliminar capas de fontanería, aspiración, mobiliario detallado y tramas; purgar bloques y aplanar a $Z=0$; trasladar el cruce `E1-EA` al origen `(0, 0, 0)` anotando exactamente el vector $\Delta X, \Delta Y$ eliminado para mantener trazabilidad con topografía/Revit; importar indicando milímetros ($\text{mm} \to \text{m}$, escala $0,001$) y verificar que `E1-E4` mide $18,00\ \text{m}$ y `EA-EC` mide $12,60\ \text{m}$.
- **Tratamiento del PDF escaneado:** Al ser un documento ráster escaneado sujeto a giro y posible distorsión no uniforme en los dos ejes, debe calibrarse usando las cotas largas conocidas y verificarse en ejes X e Y; si la discrepancia en el eje perpendicular supera el margen aceptable (p. ej. $>1\text{–}2\ \%$), **no** se debe confiar en el calco automático del PDF: conviene solicitar el DWG/IFC actualizado al arquitecto o redibujar ortogonalmente los tabiques del anexo usando estrictamente las cotas numéricas escritas/medidas en obra.
- **Falsos techos y vanos:** Modelar $3,60\ \text{m}$ como altura de planta y situar techos suspendidos a $2,65\ \text{m}$ en gabinetes/recepción y $2,45\ \text{m}$ en pasillo. Esto preserva el espacio real de $0,95\text{–}1,15\ \text{m}$ de plenum para verificar que las luminarias empotrables y bandejas de Revit MEP caben bajo los conductos, y evita distanciar artificialmente las fuentes de luz de la boca del paciente o plano de trabajo. Los escaparates y ventanas deben abrirse con sus dimensiones y antepechos reales ($0,90\ \text{m}$) para no inventar reflexiones opacas en el cálculo nocturno ni bloquear la simulación diurna.

#### Preguntas de reflexión final
1. ¿Qué coste de retrabajo supone detectar una escala equivocada ($1000\times$ o $100\times$) cuando ya se han insertado 80 luminarias y exportado posiciones hacia Revit MEP frente a detectarlo en los 60 segundos posteriores a la importación 2D?
2. ¿Por qué es fundamental establecer por escrito en la reunión inicial con arquitectura el «Punto Base Común» y las unidades del DWG antes de empezar el diseño en DIALux?

---

## 7. Evaluación

### 7.1. Evaluación diagnóstica
Sondeo práctico rápido de 5 ítems al inicio de la sesión (5 min):
1. Si un plano DWG dibujado en milímetros se importa en DIALux asumiendo unidades en metros, ¿qué tamaño aparente tendrá un pasillo de $2\ \text{m}$ de ancho?
2. ¿Por qué conviene evitar importar sombreados (*hatches*) y mobiliario detallado desde el DWG arquitectónico?
3. ¿Qué diferencia hay entre la altura bruta entre forjados y la altura libre del local?
4. ¿Qué ocurre si importas Planta 0 en $(0,0)$ y Planta 1 desplazada $20\ \text{m}$ en DIALux y luego quieres exportar coordenadas hacia Revit MEP?
5. ¿Es igual de preciso un PDF escaneado que un DWG limpio para tomar cotas de referencia?

### 7.2. Evaluación formativa
Observación directa durante la Actividad 2 y el Caso práctico mediante lista de verificación:
- El alumno trabaja siempre sobre una copia depurada (nunca sobre el archivo maestro ni sube planos reales a IA).
- Realiza la comprobación métrica en **ambos ejes ortogonales (X e Y)** tras cada importación.
- Alinea correctamente el punto base común en `(0, 0, 0)`.
- Modela los cerramientos por su cara interior neta, diferenciando altura estructural y cota de falso techo.

### 7.3. Evaluación sumativa
Ponderación de cierre de la sesión:
1. **Archivo `.evo` de la Actividad 2 + modelo levantado y tabla de control del Caso práctico (65 %):** Valorados con la rúbrica de la sección 7.4.
2. **Acta de Importación 2D del proyecto propio (Actividad 3) + cuestionario técnico de 5 preguntas (35 %):** Comprueba dominio de escala, coordenadas BIM, cotas de plenum/vanos y confidencialidad de archivos.

### 7.4. Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
| :--- | :--- | :--- | :--- | :--- |
| **Depuración previa de planos 2D** | Importa DWG pesado sin limpiar tramas, bloques ni capas ajenas, o compromete confidencialidad subiendo planos a herramientas públicas. | Desactiva algunas capas visuales dentro de DIALux, pero mantiene entidades en $Z \neq 0$, sombreados pesados o información innecesaria. | Depura correctamente una copia del archivo DWG/DXF dejando geometría esencial limpia y protege los datos del proyecto. | Estandariza un flujo impecable de depuración CAD (capas esenciales, purga, $Z=0$, peso optimizado) y aplica protocolos estrictos de seguridad documental. |
| **Control de escala, unidades y verificación ortogonal** | Importa con factor de escala erróneo ($\text{mm}/\text{cm}/\text{m}$) sin medir cotas de contraste; modelo fuera de escala real. | Comprueba una única cota corta o solo en un eje, dejando pequeñas desviaciones o ignorando distorsiones de PDF escaneados. | Verifica la escala tras importar midiendo cotas largas en ambos ejes X e Y con error mínimo aceptable ($\le 0,5\ \%$). | Valida escala X/Y con doble contraste, detecta e informa deformaciones anamórficas en PDF ráster y documenta tolerancias por escrito. |
| **Origen común y coordinación BIM** | Inserta los planos en coordenadas arbitrarias o UTM lejanas sin alinear plantas ni registrar el desplazamiento. | Traslada el plano cerca del origen de forma aproximada («a ojo»), causando ligeros descuadres entre plantas o respecto a Revit MEP. | Define e implanta un origen común `(0, 0, 0)` coincidente en intersección de ejes estructurales para todas las plantas. | Documenta vector de traslación UTM-local, rotación y punto base BIM común garantizando interoperabilidad geométrica fiable hacia Revit MEP (sin asumir automatismos irreales). |
| **Contornos, alturas de falso techo y vanos** | Trazados abiertos o por eje exterior de muro; ignora falsos techos o no inserta ventanas/puertas reales. | Cierra los contornos básicos pero confunde altura bruta con altura libre o introduce vanos con cotas genéricas sin respetar antepechos. | Modela contornos interiores netos, diferencia planta/falso techo/plenum y coloca puertas y ventanas con dimensiones y antepechos reales. | Levanta un cascarón 3D exacto y limpio (contornos estancos, falsos techos diferenciados por zona, plenum libre comprobado y carpinterías precisas) listo para asignar materiales en el Tema 3. |

### 7.5. Actividad de autoevaluación
Cuestionario reflexivo individual de cierre (5 min):
1. *¿Qué comprobación de 1 minuto acabas de incorporar a tu rutina profesional cada vez que importas un plano DWG o PDF en DIALux?*
2. *Explica con tus palabras por qué alinear el cruce de ejes `A-1` al `(0,0,0)` en DIALux te ahorrará horas de ajustes cuando modeles en Revit MEP en el Bloque 3.*
3. *Evalúa del 1 al 5 tu dominio actual para detectar distorsiones de escala en un PDF escaneado y para distinguir altura estructural de altura bajo falso techo.*

---

## 8. Materiales y recursos

### 8.1. Guion estructurado de diapositivas

| Diapositiva | Título | Contenido visual y mensajes clave |
| :--- | :--- | :--- |
| **Slide 1** | **Portada: Importación de planos 2D en DIALux** | Ubicación en el Bloque 2 (Tema 2/5), recordatorio de la plantilla `.evo` del Tema 1 y objetivo del día: geometría exacta antes de luz y materiales. |
| **Slide 2** | **Actividad 1: El museo de los horrores 2D** | Capturas de un gabinete de $3\,200\ \text{m}$ por error $\text{mm} \to \text{m}$ y de dos plantas desfasadas $45\ \text{m}$ en 3D; reto diagnóstico inicial. |
| **Slide 3** | **Anatomía de un DWG limpio vs. DWG sobrecargado** | Comparativa antes/después ($18,4\ \text{MB}$ y 142 capas frente a $680\ \text{KB}$ y 6 capas esenciales), aplanado $Z=0$ y diferencia PDF vectorial vs. ráster. |
| **Slide 4** | **Escala estricta y verificación en dos ejes (X e Y)** | Tabla de factores de conversión ($\text{mm} \to 0,001$, $\text{cm} \to 0,01$, $\text{m} \to 1$), regla de cota larga entre ejes estructurales y detección de PDF deformados. |
| **Slide 5** | **Origen común `(0, 0, 0)` y puente hacia Revit MEP** | Esquema del cruce de ejes `A-1` alineando Planta 0, Planta 1 y el futuro modelo BIM en Bloque 3; advertencia realista sobre UTM y límites de intercambio IFC/DWG. |
| **Slide 6** | **Contornos, alturas brutas, falso techo y vanos** | Sección constructiva acotada mostrando cota de forjado ($3,60\ \text{m}$), falso techo ($2,70\ \text{m}$), plenum técnico ($0,90\ \text{m}$), antepecho y dintel de ventanas. |
| **Slide 7** | **Práctica guiada y Caso Clínica Odontológica Mirador** | Esquema de la clínica de $310\ \text{m}^2$, resumen del conflicto entre el DWG UTM y el PDF escaneado del anexo, y criterios de resolución en equipo. |
| **Slide 8** | **Transferencia, Acta de Importación y puente al Tema 3** | Checklist de 5 comprobaciones antes de aceptar cualquier plano importado y enlace al Tema 3: cómo las superficies de este cascarón recibirán reflectancias y texturas reales. |

### 8.2. Ficha de trabajo del alumnado
Hoja técnica imprimible/editable en 2 páginas que incluye:
- **Bloque A:** Tabla de conversión rápida de unidades CAD ($\text{mm}$, $\text{cm}$, $\text{m}$, pulgadas) a DIALux y procedimiento de verificación X/Y.
- **Bloque B:** Checklist de limpieza CAD previo a importación y reglas de seguridad documental (prohibición de subir planos reales a IA).
- **Bloque C:** Ficha de registro geométrico para el caso *Clínica Odontológica Mirador* (espacios, cotas de falso techo, plenum y vanos).
- **Bloque D:** Registro de evidencias guardadas y autoevaluación de cierre.

### 8.3. Plantilla técnica práctica: «Acta de Importación 2D y Definición Geométrica»

```markdown
# ACTA DE IMPORTACIÓN 2D Y DEFINICIÓN GEOMÉTRICA (DIALUX)
Código de proyecto: ________________________  Archivo .evo: ___________________________
Responsable: _______________________________  Fecha: _________________________________

1. AUDITORÍA DEL PLANO FUENTE
- Archivo original (copia de solo lectura): ___________________________________________
- Formato: [ ] DWG   [ ] DXF   [ ] PDF vectorial   [ ] PDF ráster (escaneado)
- Limpieza previa ejecutada: [ ] Capas depuradas  [ ] Tramas eliminadas  [ ] Z=0  [ ] Purga
- Confidencialidad verificada (sin datos sensibles expuestos en herramientas externas): [ ] Sí

2. CONTROL DE ESCALA Y ORIGEN COMÚN BIM
- Unidad origen detectada en CAD: [ ] mm (x0,001)  [ ] cm (x0,01)  [ ] m (x1)  [ ] Calibrado PDF
- Medida de contraste Eje X (cota plano vs. DIALux): _______ m vs. _______ m (Error: _____ %)
- Medida de contraste Eje Y (cota plano vs. DIALux): _______ m vs. _______ m (Error: _____ %)
- Punto Base Común fijado en (0, 0, 0): _______________________________________________
- Desplazamiento UTM trasladado (si aplica): ΔX = _____________ m | ΔY = _____________ m

3. TABLA DE CONTORNOS, FALSOS TECHOS Y VANOS POR LOCAL
| Código Local | Cota forjado (m) | Cota falso techo (m) | Plenum libre (m) | Vanos (Ancho x Alto / Antepecho) |
| :--- | :--- | :--- | :--- | :--- |
| P00_E01_... | | | | |
| P00_E02_... | | | | |
```

### 8.4. Lecturas y recursos recomendados
*(Nota importante de validación: el formador y el alumnado deben comprobar la vigencia, versión exacta del software, compatibilidad de formatos DWG/DXF y políticas de privacidad corporativas antes de utilizar estas guías o herramientas en proyectos reales).*
- **Manual oficial de DIALux evo — Módulo de Construcción e Importación DWG/DXF/IFC** (DIAL GmbH — verificar la versión soportada de archivos DWG/DXF por la edición instalada en el aula).
- **Documentación sobre estándares de capas y coordenadas en flujos BIM (p. ej., guías prácticas de buildingSMART o protocolos BEP orientativos):** Consultar guías actualizadas para definir puntos base compartidos entre herramientas de cálculo y Revit MEP.
- **Guía de buenas prácticas en preparación de planos CAD para simulación energética/lumínica:** Revisar comandos estándar de limpieza (`LIMPIA`/`PURGE`, `OVERKILL`, `FLATTEN` o equivalentes según el software CAD empleado).

### Glosario de términos clave

| Término | Definición |
| :--- | :--- |
| **Antepecho** | Altura medida desde el pavimento terminado del local hasta la parte inferior de una ventana o hueco acristalado en fachada. |
| **Aplanado CAD (Z=0)** | Procedimiento que sitúa todas las entidades de un dibujo 2D en elevación cero para evitar desfases tridimensionales al trazar recintos. |
| **Contorno interior neto** | Polígono cerrado que delimita la superficie útil interior de un local por las caras vistas de sus paredes, excluyendo el espesor constructivo de los muros. |
| **Escala anamórfica** | Deformación en la que el factor de escala horizontal (eje X) difiere del vertical (eje Y), habitual en planos escaneados o fotografías sin rectificación. |
| **Origen común de coordenadas** | Punto de referencia único `(0, 0, 0)` compartido entre disciplinas (arquitectura, DIALux y Revit MEP) para evitar desfases al intercambiar ubicaciones de luminarias. |
| **PDF ráster vs. vectorial** | Diferencia entre un PDF compuesto por píxeles (imagen escaneada propensa a imprecisión y deformación) y un PDF exportado desde CAD con líneas matemáticas exactas. |
| **Plenum técnico** | Cámara situada entre el falso techo registrable o continuo y el forjado estructural superior, destinada al paso de instalaciones y alojamiento de luminarias empotradas. |
| **Vano** | Abertura practicada en un cerramiento o muro (ventana, puerta, muro cortina o lucernario) que altera tanto la transmisión luminosa como las superficies reflectantes del recinto. |

---

## 9. Adaptaciones

### 9.1. Sesión presencial
- **Recursos en aula:** Entregar los planos de práctica en carpeta local compartida en dos versiones (`_sucio.dwg` y `_clean.dwg`) junto con un visor/editor CAD ligero para que puedan practicar la limpieza y comprobar el cambio de tamaño de archivo en directo.
- **Verificación rápida en grupo:** En la Actividad 2, cada pareja proyecta o enseña al formador la lectura de la cinta métrica en X e Y antes de pasar a trazar los tabiques interiores, evitando que nadie modele sobre un plano mal escalado.

### 9.2. Sesión online síncrona
- **Distribución previa:** Enviar el paquete ZIP con los archivos DWG, PDF escaneado y secciones constructivas 24 horas antes de la sesión para evitar pérdidas de tiempo de descarga al inicio.
- **Control en salas:** En el caso práctico *Clínica Odontológica Mirador*, compartir una hoja de cálculo colaborativa donde cada sala introduce sus cotas verificadas X/Y/Z y el vector UTM detectado, permitiendo al formador auditar desvíos al instante.

### 9.3. Sesión asíncrona
- **Material multimedia:** Grabar dos píldoras breves: (1) limpieza DWG y traslado al origen `(0,0,0)` en 8 minutos; (2) trazado de contornos, inserción de falso techo y ventanas en DIALux en 10 minutos.
- **Entrega evaluable:** Subir al campus el archivo `B2_T02_Cascaron.evo`, el modelo corregido de la Clínica Odontológica Mirador y el *Acta de Importación 2D* de su proyecto integrador en un plazo de 7 días.
- **Revisión entre pares:** Cada alumno descarga la captura 3D seccionada y la tabla de cotas de un compañero y verifica si existen inconsistencias entre la cota de falso techo y la altura de los vanos declarados.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Aprovecha directamente la plantilla métrica SI y la jerarquía de edificio/plantas/locales creada en el **Tema 1 (Configuración de DIALux)**, así como las nociones de lectura de planos arquitectónicos e implantación eléctrica introducidas en el **Bloque 1 (Criterios de trazo de instalaciones eléctricas)**.
- **Competencias técnicas que desarrolla:** Saneamiento de archivos CAD para simulación, control metrológico de importaciones 2D, gestión de coordenadas BIM compartidas y modelado tridimensional preciso de envolventes arquitectónicas con falsos techos y vanos.
- **Conexión con el tema anterior y posterior del programa (6 módulos / 50 temas):**
  - *Tema anterior:* **Bloque 2, Tema 1 — Configuración de DIALux** (posición 1 de 5 del Bloque 2; tema 12 de 50), sin cuya configuración correcta de unidades SI y planos de utilidad la importación 2D induciría errores de escala o perfil de cálculo.
  - *Tema posterior:* **Bloque 2, Tema 3 — Definición de materiales y texturas en el entorno** (posición 3 de 5 del Bloque 2; tema 14 de 50). El cascarón geométrico 3D cerrado que el alumnado construye hoy (muros, techos suspendidos, suelos y vidrios de ventanas) será la base física sobre la que asignaremos propiedades ópticas reales (reflectancias $\rho$ y transmisiones $\tau$) en el siguiente tema, y cuya cota de origen `(0,0,0)` y plenum servirán posteriormente de enlace geométrico en el **Bloque 3 (Revit MEP)**.
- **Evidencia de aprendizaje que aporta el alumnado:** Archivo `.evo` con geometría 3D limpia y verificada en ejes X/Y/Z (Actividad 2), informe de saneamiento y modelo de la *Clínica Odontológica Mirador*, y *Acta de Importación 2D* aplicada al proyecto integrador.

---

## Siguientes pasos para el formador

1. **Preparar el paquete de archivos de práctica:** Crear y comprobar en el DIALux del centro tanto el `Planta_Oficina_Practica_Clean.dwg` (y su homólogo sucio con capas y tramas) como el archivo `Clinica_Base_UTM.dwg` y el `Anexo_Ampliacion_Escaneado.pdf` con deformación controlada para el caso práctico.
2. **Probar compatibilidad de versión DWG/DXF:** Confirmar con qué versión máxima de formato DWG es compatible la versión de DIALux instalada en los equipos del aula (p. ej., guardando los DWG de práctica en versión 2013/2018 para evitar errores de lectura).
3. **Preparar secciones constructivas legibles:** Asegurar que los datos de cota de forjado, falso techo y antepechos del ejercicio y del caso práctico estén claramente acotados en una lámina PDF auxiliar sin ambigüedades.
4. **Reforzar la cultura de confidencialidad:** Recordar explícitamente durante la Actividad 3 la prohibición de subir planos DWG/PDF de empresas reales a herramientas de IA en la nube sin permiso expreso.
5. **Enlazar el entregable con el Tema 3:** Indicar al alumnado que conserve su archivo `B2_T02_Cascaron.evo` verificado porque se abrirá directamente al comienzo del **Tema 3** para asignar reflectancias reales, mobiliario y obstáculos.
