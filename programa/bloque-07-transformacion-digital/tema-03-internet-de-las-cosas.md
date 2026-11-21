# Tema 3. Internet de las cosas (IoT)

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Tema 3. Internet de las cosas (IoT) |
| **Bloque y posición dentro del programa** | Bloque 7: Transformación digital — Posición 3 de 8 |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Mandos intermedios y emprendedores |
| **Nivel de dificultad** | Intermedio |
| **Prerrequisitos** | Conocimientos sobre digitalización de procesos y fundamentos de IA predictiva (Bloque 7, Temas 1 y 2) |
| **Resultado general de aprendizaje** | Evaluar la viabilidad operativa y económica de soluciones IoT para capturar datos en tiempo real, implantar trazabilidad física y evolucionar del mantenimiento correctivo al mantenimiento predictivo en pymes |

---

## 2. Objetivos de aprendizaje

Al finalizar este tema, el alumnado será capaz de:

1. **Describir** la arquitectura básica de una solución IoT empresarial (sensores, conectividad, procesamiento *edge/cloud*, plataforma de alertas y actuación) en lenguaje no técnico. *(Nivel de Bloom: Comprender)*
2. **Identificar** variables físicas medibles (temperatura, vibración, consumo energético, ubicación, humedad, ocupación) cuya monitorización en tiempo real genere impacto directo en costes, calidad o servicio. *(Nivel de Bloom: Analizar)*
3. **Comparar** el mantenimiento correctivo, preventivo y predictivo basado en sensores e IA para determinar qué activos críticos justifican la sensorización en una pyme. *(Nivel de Bloom: Evaluar)*
4. **Aplicar** criterios de selección de conectividad, seguridad básica de dispositivos y cálculo de retorno (ROI/payback) al diseño conceptual de un piloto IoT. *(Nivel de Bloom: Aplicar)*
5. **Diseñar** la arquitectura funcional y el protocolo de alertas accionables de un caso de uso IoT (trazabilidad, eficiencia energética o mantenimiento) adaptado a su realidad empresarial. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Qué es el IoT empresarial y cómo funciona su arquitectura

- **Explicación breve y clara:** El Internet de las Cosas (IoT) consiste en dotar a activos físicos (máquinas, vehículos, estanterías, cámaras frigoríficas, locales) de sensores conectados capaces de medir variables del mundo real y transmitir datos de forma continua o periódica para tomar decisiones automáticas o asistidas. Para un mando intermedio, lo importante no es la electrónica interna, sino entender las cuatro capas que determinan costes, fiabilidad y mantenimiento.
- **Conceptos clave:** Sensor y actuador, *gateway* (pasarela), conectividad (Wi-Fi, 4G/5G, NB-IoT, LoRaWAN, Bluetooth/RFID), *edge computing* frente a nube, plataforma IoT y reglas de alerta.
- **Definiciones necesarias:**
  - *Sensor vs. actuador:* Un sensor mide una magnitud física (por ejemplo, temperatura o corriente eléctrica) y la convierte en dato digital; un actuador ejecuta una acción física tras recibir una orden (por ejemplo, cerrar una válvula o encender un ventilador).
  - *Edge computing:* Procesamiento de datos cerca del propio dispositivo o planta (sin enviar todo continuamente a la nube) para reducir latencia, ahorrar ancho de banda y seguir operando ante cortes de internet.
  - *Protocolos LPWAN (como LoRaWAN o NB-IoT):* Redes diseñadas para enviar pequeños paquetes de datos a larga distancia con muy bajo consumo energético, ideales para sensores con batería de varios años.
- **Ejemplo práctico realista:** Una bodega pyme con 18 empleados instala 12 sensores inalámbricos de temperatura, humedad y CO₂ en su nave de crianza conectados vía LoRaWAN a un único *gateway* económico. Las baterías duran más de tres años y no requiere cablear paredes históricas; cuando la humedad cae por debajo del umbral definido, la plataforma avisa al enólogo al móvil y registra automáticamente la trazabilidad ambiental de cada lote de barricas.
- **Errores frecuentes:**
  - Sensorizar sin definir quién responderá a la alerta ni qué acción concreta desencadena cada umbral («fatiga de alertas»).
  - Elegir conectividad Wi-Fi doméstica en entornos industriales con interferencias metálicas o en vehículos en ruta.
  - Olvidar el coste recurrente de tarjetas SIM, baterías, calibración de sensores y suscripción a la plataforma en el cálculo económico.
- **Preguntas que el alumnado debería poder responder:**
  - ¿Cuáles son las cuatro capas mínimas de un sistema IoT y qué falla si descuidamos alguna?
  - ¿En qué situación conviene usar procesamiento *edge* en lugar de enviar todos los datos crudos a la nube?
  - ¿Qué diferencia hay entre recopilar datos de un sensor y construir un sistema de alertas accionables?

### 3.2. Monitorización en tiempo real, trazabilidad y eficiencia operativa

- **Explicación breve y clara:** El valor inmediato del IoT en pymes suele llegar por dos vías muy tangibles: la **trazabilidad en tiempo real** (saber dónde está un activo o mercancía y en qué condiciones ha viajado o se ha almacenado) y el **control energético y de utilización** (detectar consumos anómalos, paradas ocultas o cuellos de botella en planta, almacén o comercio).
- **Conceptos clave:** Telemetría en tiempo real, trazabilidad física (*track & trace*), RFID/NFC, geofencing (geovallado), eficiencia energética, OEE (*Overall Equipment Effectiveness*).
- **Definiciones necesarias:**
  - *Telemetría:* Captura y transmisión automática y remota de mediciones desde activos distribuidos hacia un centro de monitorización.
  - *Geofencing:* Delimitación de un perímetro geográfico virtual que genera un evento o alerta automática cuando un vehículo o activo entra o sale de dicha zona.
  - *Trazabilidad física en tiempo real:* Capacidad de reconstruir en directo y de forma auditable el recorrido y las condiciones ambientales (temperatura, golpes, aperturas de puerta) de un lote o envío.
- **Ejemplo práctico realista:** Una lavandería industrial pyme que suministra ropa a 35 hoteles sufría pérdidas mensuales de toallas y sábanas sin saber si ocurrían en el transporte, en planta o en el hotel. Al coser etiquetas RFID lavables en las prendas y colocar arcos lectores en la salida y entrega, automatizó el conteo en segundos, redujo las disputas de facturación y disminuyó drásticamente la reposición por extravío.
- **Errores frecuentes:**
  - Instalar sensores de gran precisión pero no integrar sus datos con el ERP o el sistema de gestión de pedidos, creando otro silo aislado.
  - Confundir «tiempo real al segundo» con «frecuencia útil de negocio»: muchas decisiones solo requieren lecturas cada 5 o 15 minutos, abaratando conectividad y batería.
  - Subestimar las condiciones ambientales físicas (polvo, agua, frío extremo, vibraciones) al comprar sensores no preparados (grado de protección IP inadecuado).
- **Preguntas que el alumnado debería poder responder:**
  - ¿Qué procesos de trazabilidad o consumo energético en vuestro sector dependen hoy de registros manuales en papel?
  - ¿Cómo definimos la frecuencia de muestreo adecuada sin disparar el coste de datos ni agotar baterías?
  - ¿Qué ventaja competitiva aporta demostrar con datos objetivos las condiciones de transporte o producción ante un cliente exigente?

### 3.3. Del mantenimiento correctivo al mantenimiento predictivo (PdM)

- **Explicación breve y clara:** Una avería inesperada en una máquina cuello de botella cuesta mucho más que la pieza rota: implica horas paradas, horas extra, penalizaciones por retraso y pérdida de clientes. El IoT, combinado con algoritmos de detección de anomalías (Tema 2), permite pasar de «reparar cuando rompe» (correctivo) y «cambiar piezas por calendario aunque estén bien» (preventivo) a intervenir justo cuando el activo muestra signos tempranos de desgaste (predictivo).
- **Conceptos clave:** Mantenimiento correctivo, mantenimiento preventivo, mantenimiento basado en condición (CBM), mantenimiento predictivo (PdM), análisis de vibraciones, termografía/temperatura, consumo eléctrico anómalo, criticidad de activos.
- **Definiciones necesarias:**
  - *Mantenimiento basado en condición (CBM):* Intervención guiada por umbrales medidos en tiempo real (por ejemplo, si la temperatura de un rodamiento supera 75 °C, programar revisión).
  - *Mantenimiento predictivo (PdM):* Evolución del CBM que utiliza históricos de sensores y modelos estadísticos o de *machine learning* para estimar la vida útil restante y anticipar fallos antes de que se produzca la parada.
- **Ejemplo práctico realista:** Un taller de mecanizado CNC con 30 trabajadores instaló sensores de vibración y pinzas amperimétricas (consumo eléctrico) en sus 3 tornos críticos que producen el 70 % de la facturación. No necesitó cambiar máquinas antiguas (*retrofitting*): al detectar un patrón de microvibración anómala tres días antes del fallo de un husillo, programó el cambio de rodamiento en fin de semana por 450 €, evitando una parada no planificada de cuatro días valorada en más de 9.000 €.
- **Errores frecuentes:**
  - Intentar sensorizar toda la maquinaria de la fábrica el primer día en lugar de priorizar los 3-5 activos verdaderamente críticos.
  - Creer que hay que comprar maquinaria nueva para aplicar IoT, desconociendo el *retrofitting* (sensores externos no invasivos sobre máquinas antiguas).
  - Esperar predicciones de IA perfectas desde la semana 1 cuando aún no existen históricos de fallos; conviene empezar por reglas de condición (CBM) mientras se recopilan datos.
- **Preguntas que el alumnado debería poder responder:**
  - ¿Qué diferencia práctica existe entre mantenimiento basado en condición (CBM) y mantenimiento predictivo (PdM)?
  - ¿Qué es el *retrofitting* y por qué abre la puerta del IoT a pymes con maquinaria amortizada?
  - ¿Cómo decidimos qué máquinas o activos merecen inversión en sensores y cuáles deben seguir en mantenimiento preventivo o correctivo?

### 3.4. Retorno económico, escalabilidad y riesgos de seguridad en IoT

- **Explicación breve y clara:** Muchos pilotos IoT mueren en el «purgatorio de los pilotos»: funcionan en una prueba con 3 sensores, pero no escalan porque el coste por unidad, el mantenimiento de baterías/conectividad o los riesgos de seguridad no se calcularon antes. Además, cada dispositivo conectado es una puerta potencial de entrada a la red corporativa si no se segmenta y actualiza correctamente. *(Nota para el formador: verificar antes de impartir las obligaciones vigentes en la Unión Europea derivadas de la Cyber Resilience Act —CRA— y requisitos sectoriales de seguridad de dispositivos conectados).*
- **Conceptos clave:** *Pilot purgatory* (purgatorio de pilotos), TCO por dispositivo, ROI y plazo de recuperación (*payback*), segmentación de red (OT vs. IT), actualización de *firmware*, privacidad laboral (geolocalización de flotas/empleados).
- **Definiciones necesarias:**
  - *Red OT vs. red IT:* La red OT (*Operational Technology*) conecta sensores, PLC y maquinaria física; la red IT gestiona ordenadores, correo y ERP. Deben mantenerse segmentadas para que un sensor comprometido no permita acceder a datos corporativos.
  - *Retrofitting IoT:* Instalación de sensores externos modernos sobre activos o infraestructuras heredadas para extraer datos sin sustituir el equipo principal ni anular garantías cuando es no invasivo.
- **Ejemplo práctico realista:** Una empresa de reparto urbano instaló balizas GPS en sus 14 furgonetas. Antes de activarlas, consultó con asesoría laboral para informar de forma transparente a los conductores sobre horarios de geolocalización (desactivada fuera de jornada), segmentó la plataforma en una red separada de su servidor contable y validó que el ahorro de combustible, optimización de rutas y reducción de incidencias amortizaba la inversión en menos de 9 meses. *(Nota: verificar la normativa laboral y criterios vigentes de la AEPD sobre geolocalización de trabajadores en España antes de exponer detalles legales).*
- **Errores frecuentes:**
  - Dejar contraseñas de fábrica en sensores y *gateways* conectados a la misma red Wi-Fi que los ordenadores de administración.
  - Quedar atrapado en un proveedor propietario (*vendor lock-in*) que impide exportar los datos propios a nuestro ERP o herramienta de BI.
  - Instalar dispositivos de seguimiento en vehículos o puestos de trabajo sin transparencia laboral ni evaluación de impacto en privacidad.
- **Preguntas que el alumnado debería poder responder:**
  - ¿Qué partidas de coste debemos incluir para evaluar el *payback* real de un despliegue IoT a 3 años?
  - ¿Qué riesgos implica el *vendor lock-in* en plataformas IoT y qué cláusula contractual lo mitiga?
  - ¿Por qué la seguridad en IoT exige aislar la red de dispositivos de la red administrativa?

---

## 4. Metodología didáctica (Secuencia de 4 horas / 240 minutos)

| Fase | Duración | Qué hace el formador | Qué hace el alumnado |
|---|---:|---|---|
| **1. Apertura y activación** | 25 min | Plantea la pregunta detonadora: «¿Qué pasa en vuestra empresa que hoy solo descubrís cuando ya es demasiado tarde?» Dirige la Actividad 1 («Mapa de puntos ciegos físicos»). | Identifica 2 eventos físicos de su negocio que hoy se detectan tarde (averías, mermas, robos, desperdicio energético, retrasos) y estima su impacto. |
| **2. Exposición breve / Microlearning I** | 35 min | Explica la arquitectura IoT en 4 capas (sensor, conectividad, *edge/cloud*, acción), diferencias de conectividad y casos reales de trazabilidad y *retrofitting* en pymes. | Relaciona variables físicas con sensores y tipos de conectividad adecuados; resuelve 3 preguntas rápidas de elección de conectividad. |
| **3. Análisis de caso práctico** | 45 min | Introduce el caso *FríoLogística Ibérica S.L.* con sus cifras de mermas, averías y costes de sensores. Facilita el trabajo en equipos de 3-4 personas. | Analiza los datos de pérdidas de cadena de frío y compresores, calcula el ROI/payback de las opciones IoT y prioriza el despliegue por fases. |
| **4. Exposición breve / Microlearning II** | 30 min | Expone la escalera de mantenimiento (correctivo → preventivo → CBM → predictivo), riesgos de *pilot purgatory*, *vendor lock-in*, segmentación OT/IT y privacidad laboral. | Conecta los riesgos técnicos y económicos con el caso analizado y revisa qué cláusulas exigiría a un proveedor IoT. |
| **5. Actividad práctica de aplicación y transferencia** | 60 min | Coordina la Actividad 2 (diseño de matriz de alertas accionables para *FríoLogística*, 25 min) y la Actividad 3 (Lienzo de Piloto IoT y cálculo de *payback* para su propia empresa, 35 min). | Construye el protocolo de alertas sin «fatiga de alarmas» y diseña un piloto IoT viable (activos, sensores, conectividad, acción, coste y retorno) para su pyme. |
| **6. Discusión guiada y puesta en común** | 25 min | Modera una ronda crítica donde 3-4 participantes exponen su Lienzo de Piloto IoT y el resto actúa como «director financiero y responsable de planta» haciendo preguntas de choque. | Defiende la rentabilidad y operatividad de su piloto IoT; formula objeciones constructivas sobre mantenimiento, batería, red y adopción. |
| **7. Síntesis, evaluación sumativa y cierre** | 20 min | Resume los principios clave de IoT rentable en pyme, aplica la prueba sumativa breve y enlaza con el Tema 4 (Blockchain: cómo hacer inmutable y compartible entre empresas el dato captado por sensores). | Realiza la prueba corta de cierre y la autoevaluación de madurez para proyectos IoT. |
| **TOTAL** | **240 min** | | |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «El mapa de puntos ciegos físicos»

- **Objetivo:** Reconocer en la operativa cotidiana qué variables físicas no medidas generan costes evitables o pérdida de calidad.
- **Instrucciones para el alumnado:**
  1. De forma individual (8 min), pensad en los activos físicos, instalaciones, stock o flotas de vuestra empresa (o de una pyme cliente si sois de servicios).
  2. Completad 2 filas: *Evento indeseado que se descubre tarde* | *Variable física que avisaría antes* (temperatura, vibración, consumo, apertura, ubicación, nivel de llenado) | *Coste estimado cada vez que ocurre*.
  3. En grupos de 3 (12 min), elegid el punto ciego con mayor impacto anual y presentad en 1 minuto qué señal física permitiría anticiparlo.
- **Materiales necesarios:** Tarjetas de puntos ciegos (impresas o en tablero digital).
- **Tiempo estimado:** 20 minutos (en fase de Apertura).
- **Rol del formador:** Ayudar a perfiles de empresas de servicios (oficinas, retail, clínicas) a detectar puntos ciegos físicos relevantes (climatización/consumo energético, aforo, cadena de frío de reactivos, estado de equipos).
- **Producto o entregable esperado:** Lista priorizada de 2 puntos ciegos físicos con su variable medible asociada.
- **Criterios de éxito:** Conexión clara entre un problema de negocio real y una magnitud física medible objetivamente.

### Actividad 2 (Aplicación): «Protocolo de alertas accionables sin fatiga de alarmas»

- **Objetivo:** Diseñar reglas de alerta útiles y responsabilidades operativas para el caso *FríoLogística Ibérica S.L.* asegurando que cada dato IoT derive en una acción concreta.
- **Instrucciones para el alumnado:**
  1. En equipos de 3-4 personas, tomad dos activos del caso: (a) camiones frigoríficos en ruta y (b) compresores de las 2 cámaras de frío.
  2. Definid para cada activo 3 niveles de estado: **Normal**, **Aviso preventivo (Ámbar)** y **Alerta crítica (Rojo)** con umbrales lógicos (por ejemplo, desviación sostenida > 10 min para evitar falsas alarmas al abrir puertas en descarga).
  3. Especificad para Ámbar y Rojo: canal de aviso, responsable exacto (rol), acción obligatoria en menos de X minutos y escalado si nadie responde.
- **Materiales necesarios:** Plantilla de Matriz de Alertas Accionables y datos del caso práctico.
- **Tiempo estimado:** 25 minutos.
- **Rol del formador:** Cuestionar falsos positivos («¿qué pasa cada vez que el conductor abre la puerta 4 minutos para descargar?»), exigiendo filtros temporales o sensores de puerta combinados.
- **Producto o entregable esperado:** Tabla de protocolo de alertas con umbrales, lógica anti-ruido, responsables y tiempos de respuesta.
- **Criterios de éxito:** El protocolo distingue aviso preventivo de emergencia real, reduce falsas alarmas y asigna acciones verificables sin saturar al equipo.

### Actividad 3 (Transferencia a la realidad laboral): «Lienzo de Piloto IoT y estimación de *payback*»

- **Objetivo:** Diseñar un piloto IoT realista de alcance controlado para la empresa o proyecto del participante, verificando su viabilidad económica, operativa y de seguridad.
- **Instrucciones para el alumnado:**
  1. Elegid un caso de uso concreto de vuestra empresa (eficiencia energética, mantenimiento basado en condición, trazabilidad de stock/envíos o control ambiental).
  2. Completad la **Plantilla de Lienzo de Piloto IoT** (sección 8): activos críticos seleccionados (máximo 5 en el piloto), variables y tipo de sensores (*retrofitting*), conectividad recomendada, integración con software existente, requisitos mínimos de ciberseguridad/privacidad y estimación básica de inversión vs. ahorro anual (*payback*).
  3. Evaluad si el *payback* es inferior a 18 meses; si no lo es, ajustad el alcance del piloto.
- **Materiales necesarios:** Plantilla de Lienzo de Piloto IoT (digital o impresa) y calculadora.
- **Tiempo estimado:** 35 minutos + 25 minutos de defensa crítica en la fase 6.
- **Rol del formador:** Verificar que el cálculo de costes incluya instalación, conectividad/cuota plataforma y mantenimiento, no solo el precio unitario del sensor.
- **Producto o entregable esperado:** Lienzo completo de piloto IoT con cálculo de *payback* orientativo y requisitos contractuales mínimos.
- **Criterios de éxito:** Alcance acotado a activos críticos, elección lógica de conectividad/frecuencia, TCO completo y retorno justificado.

---

## 6. Caso práctico: FríoLogística Ibérica S.L.

### Contexto empresarial
**FríoLogística Ibérica S.L.** es una pyme de distribución agroalimentaria y productos refrigerados con sede en Zaragoza, **55 empleados**, **2 cámaras frigoríficas industriales** en plataforma central y una flota de **22 camiones refrigerados** que reparten diariamente a supermercados y restauración en Aragón, Navarra, La Rioja y Cataluña.

### Situación o problema
Durante el último ejercicio, dos grandes cadenas de distribución han impuesto penalizaciones contractuales por incidencias en la cadena de frío y han amenazado con retirar el contrato si no disponen de trazabilidad digital auditable por envío. Al mismo tiempo, una avería imprevista de un compresor en la cámara principal en pleno mes de julio provocó la pérdida de producto valorado en 38.000 €. La dirección quiere implantar IoT, pero el jefe de tráfico teme «llenar los camiones de aparatos caros que nadie mire» y los conductores recelan de sentirse espiados.

### Datos disponibles

| Concepto / Indicador | Cifra anual / Estado actual |
|---|---|
| Rechazos de mercancía y penalizaciones por rotura de cadena de frío en ruta | 64.000 €/año (19 incidentes graves registrados, muchos detectados solo al descargar) |
| Coste de mantenimiento de las 2 cámaras (correctivo + 1 avería crítica de compresor) | 52.000 €/año (incluye mermas por parada no planificada) |
| Consumo eléctrico de cámaras frigoríficas | 118.000 €/año (sin monitorización por circuito ni detección de puertas mal cerradas) |
| Registro actual de temperaturas | Termógrafo manual con descarga USB semanal en oficina; los datos llegan con hasta 7 días de retraso |
| **Opción IoT 1 — Flota (22 camiones):** sondas de temperatura + sensor magnético de puerta + telemetría celular 4G/NB-IoT + portal cliente | Inversión inicial: 17.600 € (800 €/camión instalado) + cuota conectividad/plataforma: 420 €/mes (5.040 €/año) |
| **Opción IoT 2 — Cámaras (2 naves):** sensores de temperatura/humedad, sensores de puerta, vibración y consumo en 4 compresores críticos (*retrofitting*) + *gateway* local | Inversión inicial: 9.800 € + cuota plataforma/mantenimiento: 180 €/mes (2.160 €/año) |
| Ahorro conservador estimado con alertas tempranas | Reducción del 65 % en mermas/penalizaciones de flota; reducción del 70 % en averías críticas de compresores y 8 % en factura eléctrica por detección de ineficiencias/puertas abiertas |
| Presupuesto de inversión aprobado para el año 1 | 30.000 € totales (inversión inicial + primer año de cuotas) |

### Preguntas de análisis
1. Calculad el coste total del Año 1 para la Opción 1, la Opción 2 y ambas combinadas frente al presupuesto de 30.000 €. ¿Cuál presenta un *payback* más rápido y menor complejidad organizativa?
2. ¿Cómo diseñaríais un despliegue por fases dentro del presupuesto para generar resultados rápidos sin saturar al jefe de tráfico?
3. ¿Qué combinación de sensores evita falsas alarmas en ruta (por ejemplo, subidas breves de temperatura durante una descarga normal)?
4. ¿Cómo abordaríais las objeciones de los conductores, la seguridad de los dispositivos y el requisito de propiedad/exportación de datos para las cadenas clientes?

### Tarea a realizar
En equipos de 3-4 personas, elaborad una recomendación directiva para FríoLogística Ibérica S.L. que contenga:
1. Análisis financiero comparativo (inversión + cuota año 1 vs. ahorro conservador esperado y meses de *payback*).
2. Secuencia de implantación recomendada en 2 fases (meses 1-3 y meses 4-6) ajustada al presupuesto de 30.000 €.
3. Protocolo resumido de alertas y medidas de gestión del cambio con conductores y mantenimiento.

### Posibles soluciones o criterios de análisis
- **Análisis económico orientativo:**
  - *Opción 2 (Cámaras):* Coste año 1 = 9.800 + 2.160 = **11.960 €**. Ahorro conservador estimado ≈ (70 % de ~38.000 € de avería crítica o ~52.000 € total según supuesto razonado: ~26.600-36.400 €) + 8 % de 118.000 € (9.440 € de energía) = **~36.000-45.800 €/año**. *Payback* aproximado: **3 a 4 meses**. Muy bajo riesgo cultural (solo implica equipo interno de planta/mantenimiento).
  - *Opción 1 (Flota completa 22 camiones):* Coste año 1 = 17.600 + 5.040 = **22.640 €**. Ahorro conservador ≈ 65 % de 64.000 € = **41.600 €/año** (más retención de los 2 grandes clientes estratégicos). *Payback* aproximado: **6 a 7 meses**.
  - *Ambas completas el año 1:* 11.960 + 22.640 = **34.600 €** (supera en 4.600 € el presupuesto de 30.000 €).
- **Estrategia recomendada por fases dentro de 30.000 €:**
  - *Fase 1 (Meses 1-3):* Implantar **100 % de Opción 2 (Cámaras, 11.960 €)** + **piloto en los 10-12 camiones asignados a las 2 cadenas críticas** (~9.600 € instalación + ~2.750 € cuota proporcional ≈ 12.350 €). Total fase 1 ≈ 24.300 € (deja margen de contingencia dentro de 30.000 €).
  - *Fase 2 (Meses 5-6):* Con el ahorro real validado en energía y mermas de los primeros meses, extender al resto de la flota (10-12 camiones restantes).
- **Claves operativas y culturales:** Cruzar temperatura + sensor de puerta + temporizador (solo salta alarma si la temperatura supera el límite con puerta cerrada o abierta > X minutos); explicar a conductores que la telemetría de frío les protege frente a reclamaciones injustas del cliente en destino y acordar transparencia sobre datos de ubicación; exigir API abierta y exportación de certificados PDF/CSV para clientes (evitar *vendor lock-in*).

### Preguntas de reflexión final
- ¿Qué habría pasado si la empresa hubiera comprado primero los sensores de los 22 camiones sin revisar el presupuesto ni la gestión de alertas?
- ¿De qué forma los datos fiables captados por estos sensores podrían convertirse en una ventaja comercial para captar nuevos clientes del sector farmacéutico o gourmet?

---

## 7. Evaluación

### Evaluación diagnóstica breve (al inicio)
Cuestionario rápido de 3 preguntas:
1. Nombra dos variables físicas de tu empresa o sector que hoy se controlan a ojo o en papel.
2. ¿Cuál es la diferencia principal entre mantenimiento preventivo y mantenimiento predictivo?
3. Verdadero/Falso: «Para aplicar IoT en una fábrica hay que sustituir las máquinas antiguas por máquinas nuevas conectadas».

### Evaluación formativa durante la sesión
- Validación rápida de la elección de conectividad en el microlearning I (3 escenarios breves: almacén subterráneo sin cobertura móvil, camión en carretera nacional, cámara frigorífica en nave industrial).
- Revisión por el formador de la lógica anti-falsas alarmas en la Actividad 2.
- Preguntas cruzadas entre pares durante la defensa de los Lienzos de Piloto IoT (fase 6).

### Evaluación sumativa al final
1. Entrega del **Lienzo de Piloto IoT y estimación de *payback*** (Actividad 3).
2. Test aplicado de 5 preguntas (arquitectura IoT, *retrofitting*, CBM vs. PdM, cálculo básico de TCO/payback y segmentación OT/IT).

### Rúbrica de evaluación (para el Lienzo de Piloto IoT)

| Criterio | Insuficiente (1) | En desarrollo (2) | Adecuado (3) | Destacado (4) |
|---|---|---|---|---|
| **Selección de caso y activos críticos** | Elige sensorizar activos irrelevantes sin vínculo con un problema de negocio medible. | Identifica un problema real, pero el alcance es excesivo (quiere sensorizar todo a la vez). | Acota el piloto a 1-5 activos críticos con impacto claro en costes, calidad o servicio. | Prioriza activos cuello de botella con cuantificación sólida del coste actual del fallo o ineficiencia. |
| **Coherencia técnica (arquitectura y alertas)** | Confunde sensores, conectividad o propone alertas genéricas sin responsables. | Propone arquitectura viable pero con conectividad sobredimensionada o riesgo de fatiga de alertas. | Define sensores (*retrofitting* si aplica), conectividad adecuada, integración básica y alertas accionables con responsables. | Diseña arquitectura limpia con lógica anti-falsas alarmas, frecuencia optimizada, *edge/cloud* coherente y política anti *vendor lock-in*. |
| **Viabilidad económica (TCO y *payback*)** | No calcula costes ni ahorros esperados. | Solo contempla el precio de compra del sensor omitiendo cuotas, instalación o mantenimiento. | Calcula TCO del año 1 (hardware + instalación + cuotas) y estima un *payback* conservador razonado. | Presenta escenario conservador con *payback* validado, secuencia en fases autofinanciables y criterios de escalado. |
| **Seguridad, privacidad y adopción** | Omite ciberseguridad IoT y gestión de personas. | Menciona la seguridad o formación de forma superficial. | Incluye segmentación básica OT/IT, gestión de credenciales y comunicación transparente al equipo implicado. | Integra seguridad por diseño (red aislada, *firmware*, API segura), cumplimiento de privacidad laboral y plan de adopción operativa. |

### Actividad de autoevaluación o reflexión
«Semáforo de preparación IoT» (5 min): el alumnado responde tres preguntas breves: (1) ¿Cuál es el activo o proceso físico de mayor impacto en mi empresa? (2) ¿Qué dato económico necesito comprobar esta semana para validar si un piloto IoT se paga solo? (3) ¿Qué duda técnica debo consultar con mi proveedor o responsable de sistemas?

---

## 8. Materiales y recursos

### Guion de diapositivas (estructura slide por slide)

1. **Portada:** Bloque 7 · Tema 3. Internet de las cosas (IoT) aplicado a la pyme.
2. **Activación:** Mapa de puntos ciegos físicos — el coste oculto de enterarse tarde.
3. **Arquitectura IoT sin jerga:** Las 4 capas (Captar → Conectar → Procesar *Edge/Cloud* → Actuar).
4. **Elegir la conectividad correcta:** Comparativa práctica (Wi-Fi, 4G/5G, NB-IoT, LoRaWAN, RFID/BLE) según distancia, energía y coste.
5. **Trazabilidad y control en tiempo real:** Casos reales de pyme (cadena de frío, RFID textil/almacén, consumo energético).
6. **El poder del *retrofitting*:** Cómo conectar máquinas amortizadas de 15 años sin comprar maquinaria nueva.
7. **La escalera del mantenimiento:** Correctivo → Preventivo → Basado en condición (CBM) → Predictivo (PdM con IA).
8. **Caso práctico:** *FríoLogística Ibérica S.L.* — cifras de mermas, averías y decisión de inversión en 30.000 €.
9. **El arte de las alertas accionables:** Cómo evitar la fatiga de alarmas (umbrales combinados, tiempos de espera y escalado).
10. **Economía del IoT:** TCO real (hardware + instalación + SIM/plataforma + baterías) y cómo evitar el «purgatorio de los pilotos».
11. **Seguridad y privacidad en IoT:** Segmentación OT/IT, contraseñas, propiedad del dato (*vendor lock-in*) y transparencia laboral.
12. **Taller práctico:** Matriz de alertas y Lienzo de Piloto IoT con cálculo de *payback*.
13. **Defensa ante comité:** Criterios que pregunta un director financiero antes de firmar un piloto IoT.
14. **Síntesis y puente al Tema 4:** Cuando el dato del sensor debe ser creíble para clientes, bancos o aduanas externas, entra en juego Blockchain.

### Ficha de trabajo
Hoja doble con:
- Plantilla de «Puntos ciegos físicos» (Actividad 1).
- Matriz de Protocolo de Alertas Accionables (Activo | Estado Ámbar/Rojo | Condición anti-ruido | Canal | Responsable | Acción en < X min | Escalado).

### Plantilla práctica replicable: Lienzo de Piloto IoT (Pyme)

| Bloque del Lienzo | Detalle a completar |
|---|---|
| **1. Problema físico y coste anual actual** | ¿Qué avería, merma, retraso o desperdicio queremos evitar? ¿Cuánto cuesta hoy al año? |
| **2. Activos seleccionados para piloto (1-5)** | Equipos, vehículos, espacios o lotes concretos. ¿Requiere *retrofitting*? |
| **3. Sensores y frecuencia de lectura** | Variables medidas (Tª, vibración, consumo, GPS, puerta, RFID) y cada cuántos minutos se leen. |
| **4. Conectividad y arquitectura** | Red elegida (LoRaWAN, NB-IoT, 4G, Wi-Fi industrial), ¿procesamiento *edge* o *cloud*? |
| **5. Integración y protocolo de acción** | ¿Con qué sistema se conecta (ERP, mantenimiento, app)? ¿Quién actúa ante cada alerta? |
| **6. TCO Año 1 y *payback* conservador** | Hardware + instalación + cuotas plataforma/SIM vs. ahorro conservador anual = meses de retorno. |
| **7. Seguridad, datos y personas** | Segmentación OT/IT, propiedad/exportación de datos, privacidad laboral y formación del equipo. |

### Lecturas o recursos recomendados
- Porter, M. E., & Heppelmann, J. E. *How Smart, Connected Products Are Transforming Competition* y *Transforming Companies* (artículos de referencia de Harvard Business Review).
- Kranz, M. *Building the Internet of Things: Implement New Business Models, Disrupt Competitors, Transform Your Industry*. Wiley.
- Guías divulgativas de Industria Conectada 4.0 e INCIBE sobre seguridad básica en dispositivos IoT para pymes.

### Vídeos, artículos y fuentes adicionales *(Validación previa obligatoria)*
> **Nota importante para el formador:** Validar antes de la impartición los enlaces, normativa y precios orientativos de hardware/conectividad, ya que evolucionan rápidamente.
- Verificar antes de clase la normativa europea aplicable a seguridad de dispositivos conectados (**Cyber Resilience Act — CRA**) y directrices vigentes de **INCIBE** sobre ciberseguridad en entornos IoT/OT para pymes.
- Confirmar los criterios jurídicos vigentes en España (Estatuto de los Trabajadores, LOPDGDD y guías de la **AEPD**) sobre geolocalización de flotas y control mediante dispositivos conectados.
- Seleccionar y comprobar un vídeo corto (4-6 min) de demostración real de *retrofitting* de sensores de vibración o trazabilidad RFID en una pyme española.

### Glosario de términos clave

| Término | Definición operativa |
|---|---|
| **Actuador** | Dispositivo que ejecuta una acción física (abrir, cerrar, regular, detener) a partir de una señal digital. |
| ***Edge computing*** | Procesamiento local de datos junto al dispositivo o planta para reducir latencia, tráfico y dependencia de internet. |
| ***Geofencing*** | Perímetro virtual geográfico que dispara notificaciones automáticas al entrar o salir un activo monitorizado. |
| ***LPWAN (LoRaWAN / NB-IoT)*** | Tecnologías de comunicación inalámbrica de largo alcance y muy bajo consumo energético para sensores IoT. |
| **Mantenimiento basado en condición (CBM)** | Mantenimiento disparado cuando una variable medida supera un umbral preestablecido de desgaste o anomalía. |
| **Mantenimiento predictivo (PdM)** | Uso de datos históricos de sensores y modelos analíticos para anticipar el momento probable de un fallo. |
| **OT (*Operational Technology*)** | Hardware y software que monitoriza y controla equipos físicos e industriales, diferenciado de la red informática (IT). |
| ***Retrofitting*** | Incorporación de sensores y conectividad moderna a maquinaria o instalaciones antiguas sin reemplazarlas. |
| ***Vendor lock-in*** | Dependencia técnica o contractual hacia un proveedor que dificulta migrar los datos o cambiar de plataforma. |

---

## 9. Adaptaciones para modalidad híbrida

### Sesión presencial
- Si es posible, llevar a clase 2-3 dispositivos físicos de bajo coste a modo de muestra táctil (por ejemplo, una etiqueta RFID, una pinza amperimétrica o un sensor de temperatura/puerta con pila) para desmitificar el hardware IoT.
- Trabajar los cálculos financieros del caso *FríoLogística* en papelógrafo por equipos para comparar públicamente las decisiones de despliegue por fases.

### Sesión online síncrona
- Incorporar una hoja de cálculo compartida preprogramada (Excel Online / Google Sheets) con los datos del caso *FríoLogística* para que cada sala de trabajo pruebe escenarios de número de camiones y vea al instante el impacto en presupuesto y *payback*.
- Usar encuestas rápidas para los 3 retos de selección de conectividad durante el microlearning I.

### Sesión asíncrona (trabajo previo y posterior en plataforma LMS)
- **Pre-trabajo (20 min):** Visionado de un vídeo introductorio validado sobre arquitectura IoT y recogida de un dato real de su empresa (por ejemplo, coste de la factura eléctrica mensual, coste de una parada de máquina o número de incidencias de entrega al trimestre).
- **Post-trabajo (30 min):** Subida al LMS del Lienzo de Piloto IoT ajustado tras el debate en clase + revisión de 1 caso breve de dilema sobre segmentación OT/IT y *vendor lock-in*.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Aprovecha la base de rediseño de procesos del **Tema 1** (evitar alertas que nadie gestiona) y la lógica de modelos predictivos del **Tema 2 (IA)** aplicada ahora al mantenimiento predictivo y detección de anomalías con datos físicos reales.
- **Competencias que desarrolla:** Capacidad de traducción entre negocio y tecnología física, evaluación financiera de pilotos tecnológicos (TCO/*payback*), diseño operativo de sistemas de alertas y gestión de riesgos OT/IT.
- **Conexión dentro del plan de 10 bloques:**
  - *Tema anterior (Bloque 7, Tema 2 — Inteligencia artificial):* La IA necesita datos fiables y continuos; el IoT automatiza la captura de esos datos directamente desde activos físicos.
  - *Tema posterior (Bloque 7, Tema 4 — Blockchain):* Cuando los datos captados por sensores (por ejemplo, cadena de frío o trazabilidad de origen) deben compartirse entre múltiples empresas que no confían ciegamente entre sí, Blockchain aporta registro compartido, verificable e inmutable.
- **Evidencia de aprendizaje que dejará el alumnado:** Un **Lienzo de Piloto IoT con protocolo de alertas accionables y estimación de *payback*** aplicado a un activo o flujo real de su empresa.

---

## Siguientes pasos para el formador

1. **Preparar la plantilla de cálculo del caso:** Tener lista la hoja sencilla de escenarios para *FríoLogística Ibérica S.L.* (tanto soluciones numéricas de referencia como versión editable online).
2. **Validar normativa de seguridad y privacidad laboral:** Comprobar antes de la sesión el estado de la *Cyber Resilience Act* europea y las guías vigentes de AEPD sobre geolocalización de flotas.
3. **Conseguir hardware demostrativo (si es presencial):** Disponer de 2 o 3 sensores reales sencillos (sensor de puerta/temperatura, tag NFC/RFID) para que los mandos intermedios comprueben su tamaño, autonomía y sencillez de *retrofitting*.
4. **Preparar la transición al Tema 4:** Dejar planteada la pregunta de cierre: «Si FríoLogística entrega un certificado de temperatura generado en su propia base de datos, ¿qué impide que un cliente desconfíe de que haya sido editado tras una avería?».
