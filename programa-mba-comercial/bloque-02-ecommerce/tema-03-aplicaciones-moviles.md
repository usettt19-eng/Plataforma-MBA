# Tema 3. Aplicaciones móviles

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Tema 3. Aplicaciones móviles |
| **Bloque y posición dentro del programa** | Bloque 2: E-commerce — Tema 3 de 9 (Global MBA en Dirección Comercial y Ventas, 90 ECTS · 14 meses) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Directores comerciales, gerentes de ventas, emprendedores y profesionales de marketing y negocio |
| **Nivel de dificultad** | Intermedio |
| **Prerrequisitos** | Haber cursado los Temas 1 (*Venta online*) y 2 (*Tienda web*) o contar con experiencia práctica en gestión de canales digitales |
| **Resultado general de aprendizaje** | Evaluar la viabilidad comercial de soluciones de *mobile commerce* —web móvil, PWA o aplicación nativa— y diseñar una estrategia de experiencia móvil, notificaciones *push*, personalización y fidelización medida mediante métricas de uso y retención. |

---

## 2. Objetivos de aprendizaje

Al finalizar este tema, el alumnado será capaz de:

1. **Comparar** las alternativas tecnológicas de presencia móvil (web *responsive*, PWA, app híbrida y app nativa) según la frecuencia de compra, el presupuesto y el retorno esperado de una pyme *(Nivel de Bloom: Evaluar)*.
2. **Analizar** los principios de experiencia móvil (*thumb zone*, velocidad, flujos simplificados y compra en un toque) que reducen la brecha de conversión entre móvil y escritorio *(Nivel de Bloom: Analizar)*.
3. **Diseñar** un calendario segmentado de notificaciones *push* y mensajes *in-app* que reactive compras y recupere carritos sin provocar saturación ni desinstalaciones *(Nivel de Bloom: Crear)*.
4. **Estructurar** mecánicas de personalización y programas de fidelización móvil orientados a incrementar la frecuencia de compra y el valor del cliente (*LTV*) *(Nivel de Bloom: Aplicar)*.
5. **Interpretar** las métricas esenciales de aplicaciones de compra (instalaciones, activación, DAU/MAU, retención por cohortes, *churn* y ARPU) para orientar decisiones comerciales y de producto *(Nivel de Bloom: Evaluar)*.

---

## 3. Contenidos esenciales

### 3.1 Mobile commerce y decisión estratégica: ¿web móvil, PWA o app nativa?

#### Explicación breve y clara
Hoy la mayor parte del tráfico de comercio electrónico llega desde el teléfono móvil, pero muchas pymes siguen diseñando primero para ordenador y, en el extremo opuesto, otras gastan decenas de miles de euros en desarrollar una app nativa que nadie descarga ni vuelve a abrir. La clave directiva es decidir con rigor cuándo basta una web móvil impecable, cuándo encaja una *Progressive Web App* (PWA) y cuándo la recurrencia del negocio justifica invertir en una aplicación de compra descargable.

#### Conceptos clave
- Realidad del *m-commerce*: alto peso del tráfico móvil frente a una tasa de conversión tradicionalmente inferior al escritorio cuando la experiencia no es *mobile-first* *(nota: verificar datos actualizados del peso del tráfico y ventas móviles en España en los informes vigentes de IAB Spain / CNMC antes de citar cifras concretas en clase)*.
- Matriz de decisión tecnológica:
  - **Web móvil (*mobile-first*):** ideal para captación, descubrimiento y compras esporádicas.
  - **PWA (*Progressive Web App*):** experiencia rápida similar a app desde el navegador, icono en pantalla de inicio y menor coste de desarrollo/mantenimiento.
  - **App nativa / híbrida (iOS y Android):** justificada cuando existe alta frecuencia de compra (alimentación, moda recurrente, cosmética, restauración, fidelización B2B), necesidad de uso recurrente, geolocalización o notificaciones *push* avanzadas.
- Costes ocultos de una app: adquisición de descargas (CPI), mantenimiento ante actualizaciones de iOS/Android, comisiones de tiendas de aplicaciones cuando aplican y reactivación de usuarios inactivos.

#### Definiciones necesarias
- **Mobile commerce (m-commerce):** Compra y venta de productos o servicios realizada a través de dispositivos móviles (teléfonos inteligentes y tabletas), ya sea mediante navegador móvil o aplicación dedicada.
- **PWA (*Progressive Web App*):** Aplicación web que utiliza estándares modernos de navegador para ofrecer carga ultrarrápida, navegación fluida, acceso directo desde la pantalla del móvil y funciones cercanas a una app nativa sin pasar obligatoriamente por las tiendas de aplicaciones.
- **Frecuencia de compra:** Número promedio de pedidos que realiza un mismo cliente en un periodo determinado (mes, trimestre o año); es la variable decisiva para justificar una app propia.

#### Ejemplo práctico realista
Una pyme española de colchones (compra cada 8-10 años) recibió una propuesta de 40.000 € para lanzar su propia app nativa. La dirección comercial frenó el proyecto al comprobar que ningún cliente instalaría una app para comprar un colchón una vez por década. En su lugar, invirtió 9.000 € en rediseñar su web con enfoque *mobile-first*, añadiendo probador guiado en 3 clics y pago rápido móvil, incrementando su conversión móvil sin asumir costes permanentes de mantenimiento de app.

#### Errores frecuentes
- Lanzar una app nativa por "imagen de marca" en negocios de compra esporádica o sin base de clientes recurrentes.
- Presupuestar solo el desarrollo inicial de la app y olvidar el presupuesto de marketing para conseguir instalaciones y el mantenimiento anual (habitualmente significativo).
- Crear una app que simplemente replica la web lenta dentro de un contenedor (*webview*) sin aportar ventajas exclusivas al usuario.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué tres preguntas debe responder un director comercial antes de aprobar la inversión en una aplicación móvil propia?
2. ¿En qué casos concretos una PWA supera en retorno de la inversión (ROI) a una app nativa para una pyme?
3. ¿Por qué el coste de captación de una descarga no garantiza por sí solo ventas recurrentes?

---

### 3.2 Experiencia móvil y aplicaciones de compra de alto rendimiento

#### Explicación breve y clara
El usuario móvil compra en movimiento, con una sola mano, en pantallas pequeñas y con múltiples distracciones. Una experiencia de compra móvil ganadora reduce toques, adapta la interfaz a la zona natural del pulgar (*thumb zone*), guarda preferencias y dirección, facilita el acceso biométrico y aprovecha capacidades del dispositivo (cámara para escanear códigos de barras, geolocalización de tienda cercana o lectura de tarjeta).

#### Conceptos clave
- Diseño ergonómico móvil: navegación inferior (*bottom bar*), botones táctiles amplios, formularios con teclados contextuales (numérico para teléfono/CP) y mínimo desplazamiento innecesario.
- Velocidad y continuidad: inicio de sesión persistente (sin expulsar al usuario cada semana), biometría (Face ID / huella), carrito sincronizado entre móvil y ordenador.
- Funciones exclusivas de valor en apps de compra: escáner de código de barras para reposición B2B/B2C, listas de compra guardadas, pedidos en 1-2 toques y modo consulta rápida sin buena cobertura.

#### Definiciones necesarias
- **Zona del pulgar (*Thumb Zone*):** Área inferior y central de la pantalla del teléfono móvil que el usuario alcanza cómodamente sosteniendo el dispositivo con una mano, donde deben ubicarse las acciones primarias (navegación, añadir al carrito, finalizar compra).
- **Onboarding móvil:** Secuencia inicial de bienvenida en una aplicación diseñada para mostrar su valor rápidamente y solicitar permisos (notificaciones, ubicación) en el momento oportuno, evitando abandonos en el primer minuto.
- **Deep linking:** Enlaces inteligentes que llevan al usuario directamente a una ficha de producto, carrito o promoción concreta dentro de la app (en lugar de abrir simplemente la pantalla inicial).

#### Ejemplo práctico realista
Una distribuidora de suministros de peluquería y estética para salones (B2B) detectó que los dueños de peluquerías hacían pedidos al cerrar el local desde el móvil. Incorporó en su app un escáner de código de barras: el peluquero escanea los tintes que se están agotando en la estantería y se añaden automáticamente a su cesta con su tarifa profesional. El tiempo medio de reposición bajó de 25 minutos por teléfono a 4 minutos en la app.

#### Errores frecuentes
- Pedir permiso de notificaciones, geolocalización y registro completo nada más abrir la app por primera vez, antes de demostrar ningún valor.
- Incluir *pop-ups* intrusivos difíciles de cerrar en pantallas pequeñas o menús desplegables de tres niveles imposibles de pulsar con el pulgar.
- No utilizar *deep links* en correos o anuncios, haciendo que el cliente aterrice en la portada de la app y pierda el producto que le interesaba.

#### Preguntas que el alumnado debería poder responder
1. ¿Cómo influye la ergonomía de la *thumb zone* en la colocación del menú y del botón de compra en una app?
2. ¿Qué funcionalidades nativas del smartphone pueden aportar una ventaja real que la web de escritorio no ofrece?
3. ¿Cuál es el momento óptimo durante el *onboarding* para solicitar permiso de notificaciones *push*?

---

### 3.3 Notificaciones push, personalización y fidelización móvil

#### Explicación breve y clara
La mayor ventaja competitiva de una app frente a la web o el correo electrónico es el canal directo y gratuito (una vez instalado) de las notificaciones *push* y los mensajes *in-app*, combinado con la personalización basada en comportamiento. Sin embargo, es un arma de doble filo: un mensaje relevante y oportuno dispara la recompra; un bombardeo genérico provoca que el usuario silencie las notificaciones o desinstale la app en segundos.

#### Conceptos clave
- Tipos de notificaciones *push*:
  - **Transaccionales:** confirmación de pedido, paquete en reparto, producto disponible en stock (*back in stock*).
  - **Comportamentales / automatizadas:** carrito abandonado, recordatorio de reposición, aniversario o puntos próximos a caducar.
  - **Promocionales segmentadas:** acceso anticipado VIP, ofertas por categoría de interés o geolocalizadas cerca de tienda física.
- Personalización práctica para pymes: pantalla de inicio adaptada a la última categoría visitada, historial de tallas/preferencias, recomendaciones basadas en compras previas.
- Fidelización móvil (*loyalty*): tarjeta de puntos digital, niveles (Bronce/Plata/Oro), retos de compra, recompensas exclusivas solo en app y conexión con tienda física mediante QR.
- Consentimiento y privacidad: respeto estricto a las preferencias del usuario y a la normativa de protección de datos vigente *(verificar requisitos de consentimiento RGPD/LOPDGDD y políticas vigentes de Apple/Google antes de lanzar campañas)*.

#### Definiciones necesarias
- **Notificación *push*:** Mensaje breve enviado desde una aplicación (o navegador compatible) que aparece directamente en la pantalla bloqueada o barra de notificaciones del dispositivo móvil, incluso cuando el usuario no tiene abierta la app.
- **Mensaje *in-app*:** Comunicación contextual que se muestra mientras el usuario está navegando activamente dentro de la aplicación (por ejemplo, un aviso de cupón o encuesta rápida).
- **Opt-in de notificaciones:** Porcentaje de usuarios que conceden permiso expreso a la aplicación para recibir notificaciones *push*.

#### Ejemplo práctico realista
Una cadena regional de 5 tiendas de mascotas con app de compra y club de socios segmenta sus notificaciones según la ficha de mascota registrada en el *onboarding* (perro/gato, edad y peso). En lugar de enviar un mensaje semanal genérico a todos, envía una *push* personalizada cada 35 días a dueños de perros medianos ("A Toby le queda poco pienso: repite tu saco de 12 kg en 2 clics con envío mañana"). La tasa de apertura triplica la de sus campañas genéricas y el porcentaje de desactivación de alertas se mantiene mínimo.

#### Errores frecuentes
- Enviar la misma notificación promocional masiva a toda la base de usuarios a horas intempestivas.
- Prometer "ventajas exclusivas en la app" y luego ofrecer exactamente lo mismo que en la web.
- No fijar límites de frecuencia (*frequency capping*), saturando al usuario con múltiples alertas en la misma semana.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué diferencia existe en eficacia y riesgo de baja entre una notificación transaccional/comportamental y una promocional masiva?
2. ¿Cómo se diseña un programa de fidelización móvil que realmente motive la descarga y el uso recurrente?
3. ¿Qué reglas de frecuencia (*frequency capping*) y segmentación debería establecer una pyme en su estrategia *push*?

---

### 3.4 Métricas de uso, retención y rentabilidad en aplicaciones de compra

#### Explicación breve y clara
El error más común al evaluar una aplicación móvil es obsesionarse con las "descargas totales", una métrica de vanidad que no refleja si el negocio gana dinero. Una dirección comercial rigurosa gestiona el embudo móvil completo: adquisición (CPI), activación (primera acción de valor), uso activo (DAU/MAU), retención por cohortes (Día 1, Día 7, Día 30), abandono (*churn*), ingresos medios por usuario (ARPU) y relación LTV/CAC frente a la web móvil.

#### Conceptos clave
- Embudo de métricas de app:
  1. **Adquisición:** Descargas, tasa de conversión en tienda (App Store / Google Play), CPI (*Cost Per Install*).
  2. **Activación:** % usuarios que completan registro/onboarding, % *opt-in* de *push*, % que realiza primera compra en 7 días.
  3. **Compromiso (*Engagement*):** DAU (*Daily Active Users*), MAU (*Monthly Active Users*), ratio de adherencia (*Stickiness* = DAU/MAU), sesiones por usuario y tiempo de sesión.
  4. **Retención y abandono:** Retención Día 1 / Día 7 / Día 30 / Día 90 por cohortes; tasa de desinstalación y *churn*.
  5. **Monetización comercial:** Tasa de conversión en app vs. web móvil, AOV, frecuencia de compra anual, ARPU y LTV.
- Análisis de cohortes: comparar grupos de usuarios adquiridos en el mismo mes o canal para detectar en qué momento exacto se enfrían y activar campañas de recuperación antes del abandono definitivo.

#### Definiciones necesarias
- **Retención por cohortes:** Medición del porcentaje de usuarios que siguen activos (o comprando) tras un periodo concreto (p. ej., 30, 60 o 90 días) desde su fecha de instalación o primera compra, agrupados por momento de entrada.
- **Stickiness (DAU/MAU):** Ratio entre usuarios activos diarios y usuarios activos mensuales que indica con qué regularidad recurre la audiencia a la aplicación.
- **ARPU (*Average Revenue Per User*):** Ingreso medio generado por cada usuario activo de la aplicación durante un periodo determinado (`Ingresos totales del periodo / Usuarios activos del periodo`).

#### Ejemplo práctico realista
Una marca de cosmética detecta que su app tiene 18.000 descargas gracias a campañas de pago (CPI = 2,80 €), pero los ingresos vía app son bajos. Al analizar el embudo, descubre que el 62 % de quienes instalan no pasan de la pantalla de registro obligatorio y la retención a Día 30 es solo del 8 %. Elimina el registro obligatorio inicial (permitiendo explorar productos antes de registrarse), ofrece un diagnóstico facial rápido de 4 preguntas y añade un incentivo de bienvenida al primer pedido en app. La activación sube al 58 % y la retención a Día 30 se duplica.

#### Errores frecuentes
- Reportar a dirección únicamente el número acumulado de descargas sin cruzarlo con usuarios activos y compras reales.
- No diferenciar el comportamiento de usuarios que llegan por campañas pagadas de instalación frente a clientes fieles invitados desde la web o tienda física.
- Evaluar la app con los mismos plazos cortos que una campaña de anuncios, sin medir el impacto incremental en el LTV a 6-12 meses.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué las descargas totales son una métrica insuficiente para evaluar el éxito comercial de una app de compras?
2. ¿Qué nos indica una caída brusca entre la retención de Día 1 y la de Día 7, frente a una caída entre Día 30 y Día 90?
3. ¿Cómo se comprueba si una app genera ventas realmente incrementales frente a clientes que habrían comprado igualmente en la web?

---

## 4. Metodología didáctica

Secuencia de 4 horas (240 minutos) diseñada para tomar decisiones estratégicas y métricas en torno al canal móvil.

| Fase | Tiempo | Qué hace el formador | Qué hace el alumnado |
|---|---:|---|---|
| **1. Apertura y activación** | 25 min | Conecta con el Tema 2 y lanza la Actividad 1 (*Inventario de apps en tu bolsillo*: cuáles usas para comprar y cuáles desinstalaste). | Analiza su propio teléfono móvil, identifica 2 apps que usa recurrentemente y 2 que borró, y comparte motivos en el mural grupal. |
| **2. Exposición breve / microlearning (Parte A)** | 40 min | Expone apartados 3.1 y 3.2 (matriz Web móvil vs. PWA vs. App nativa, costes reales, ergonomía móvil y *onboarding*). | Aplica la matriz de decisión a su propio sector y debate casos de éxito y fracaso en apps de pymes. |
| **3. Exposición breve / microlearning (Parte B)** | 35 min | Expone apartados 3.3 y 3.4 (estrategia *push*, personalización, fidelización y cuadro de mando de métricas móviles). | Interpreta un cuadro de cohortes de ejemplo e identifica en qué punto del ciclo de vida intervenir. |
| **4. Análisis de caso práctico** | 50 min | Presenta el caso *VeggieBox Market S.L.* Dinamiza el trabajo en grupos para decidir tecnología (PWA vs. App), estrategia *push* y modelo financiero/métrico. | En equipo, analiza los números de retención y conversión móvil del caso, toma una decisión justificada y diseña el plan de lanzamiento y fidelización. |
| **5. Actividad práctica de aplicación y transferencia** | 45 min | Facilita la Actividad 2 (diseño de 4 notificaciones *push* segmentadas) y la Actividad 3 (evaluación de viabilidad móvil y cuadro de KPIs para su empresa). | Redacta flujos *push* concretos con disparadores y reglas de frecuencia; completa la matriz de decisión móvil para su negocio. |
| **6. Discusión guiada** | 25 min | Modera el debate comparativo entre los equipos que defendieron PWA y los que defendieron App nativa en el caso práctico, y revisa ejemplos de *push*. | Defiende su propuesta con argumentos de frecuencia, coste y LTV; contrasta criterios con otros sectores. |
| **7. Síntesis y cierre** | 20 min | Resume las claves del *m-commerce* rentable, administra la prueba corta final y enlaza con el Tema 4 (*De interesado a comprador*). | Responde la evaluación breve y la ficha de autoevaluación; registra una mejora móvil prioritaria para su empresa. |
| **TOTAL** | **240 min** | | |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Auditoría del bolsillo — ¿Por qué se quedan o se borran las apps de compra?
- **Objetivo:** Descubrir desde la experiencia real del comprador los factores reales de retención y desinstalación en aplicaciones móviles.
- **Instrucciones para el alumnado:**
  1. Mira la pantalla de tu smartphone durante 3 minutos. Selecciona **1 app comercial/de compras** que utilices al menos una vez al mes y **1 app** que instalaste y acabaste borrando o silenciando.
  2. Publica en la pizarra colaborativa: a) qué beneficio único te hace mantener la primera, b) qué error exacto (notificaciones molestas, lentitud, poco uso, igual que la web) provocó el abandono de la segunda.
  3. En plenario, construimos entre todos las "5 leyes para sobrevivir en la pantalla del cliente".
- **Materiales necesarios:** Teléfono móvil propio del alumnado y pizarra digital compartida.
- **Tiempo estimado:** 20 minutos (en Fase 1).
- **Rol del formador:** Extraer patrones comunes (frecuencia, utilidad, respeto al usuario) y vincularlos a los bloques teóricos del tema.
- **Producto o entregable esperado:** Decálogo colaborativo de factores de retención frente a desinstalación móvil.
- **Criterios de éxito:** Aportación concreta basada en experiencia real y capacidad de generalizarla a criterios de negocio.

### Actividad 2 (Aplicación): Diseño de una arquitectura de notificaciones *push* sin spam
- **Objetivo:** Crear un flujo automatizado y segmentado de notificaciones *push* orientado a conversión y retención respetando la experiencia del usuario.
- **Instrucciones para el alumnado:**
  1. Tomando el caso *VeggieBox Market S.L.* (o tu propia empresa), diseña **4 notificaciones *push*** distintas:
     - 1 transaccional de valor añadido.
     - 1 de recuperación de carrito abandonado.
     - 1 de reposición o recompra personalizada.
     - 1 vinculada a programa de fidelización o ventaja exclusiva.
  2. Para cada notificación especifica: segmento destinatario, disparador (*trigger*), momento/hora de envío, texto exacto (título ≤ 40 caracteres + cuerpo ≤ 90 caracteres), destino (*deep link*) y KPI objetivo.
  3. Define además una política de *frequency capping* (máximo de alertas por semana y horario de silencio).
- **Materiales necesarios:** Plantilla de Diseño de Flujos *Push* (Sección 8).
- **Tiempo estimado:** 25 minutos (parte de Fase 5).
- **Rol del formador:** Revisar brevedad, claridad del beneficio para el cliente y coherencia de los límites de frecuencia.
- **Producto o entregable esperado:** Matriz completa de 4 notificaciones *push* listas para configurar en una herramienta de *mobile engagement*.
- **Criterios de éxito:** Mensajes breves, personalizados, con *deep link* específico, sin enfoque agresivo y con política clara de no saturación.

### Actividad 3 (Transferencia a la realidad laboral): Decisión estratégica *Mobile* y Cuadro de Mando de KPIs
- **Objetivo:** Evaluar con rigor si la empresa propia o proyecto necesita optimizar su web móvil, desarrollar una PWA o invertir en una app nativa, definiendo sus indicadores de control.
- **Instrucciones para el alumnado:**
  1. Completa la *Matriz de Decisión Web Móvil vs. PWA vs. App Nativa* (Sección 8) puntuando tu empresa en 6 criterios: frecuencia de compra anual, porcentaje de tráfico móvil, tamaño de base de clientes activos, necesidad de funciones nativas, presupuesto disponible y capacidad de mantenimiento.
  2. Redacta una recomendación ejecutiva de 1 párrafo justificando la opción elegida.
  3. Define los 6 KPIs móviles que revisarías mensualmente en tu comité comercial (con situación actual estimada y objetivo a 6 meses).
- **Materiales necesarios:** Plantilla *Matriz de Decisión Mobile* y hoja de KPIs.
- **Tiempo estimado:** 20 minutos en sesión + desarrollo final asíncrono para la entrega sumativa.
- **Rol del formador:** Desafiar decisiones basadas en "modas" y garantizar la alineación entre inversión tecnológica y frecuencia de compra real.
- **Producto o entregable esperado:** Informe ejecutivo de 1-2 páginas con recomendación tecnológica justificada y cuadro de mando móvil.
- **Criterios de éxito:** Decisión coherente con la puntuación y realidad del negocio, más selección precisa de métricas accionables (evitando métricas de vanidad).

---

## 6. Caso práctico

### VeggieBox Market S.L.: ¿app nativa, PWA o rediseño móvil para frenar la fuga de clientes?

#### Contexto empresarial
**VeggieBox Market S.L.** es una pyme de Madrid y Barcelona con 16 empleados dedicada a la venta online de cestas semanales y productos ecológicos frescos (fruta, verdura, despensa saludable y platos preparados). Lleva tres años operando con una facturación de 1,8 millones de euros anuales y cuenta con 6.200 clientes activos. Su frecuencia de compra es elevada: los clientes fieles realizan entre 1,8 y 2,6 pedidos al mes, mayoritariamente los domingos por la tarde y lunes por la mañana desde el móvil.

#### Situación o problema
El 82 % del tráfico de VeggieBox proviene del teléfono móvil, pero la experiencia en su web actual (una plantilla estándar de escritorio adaptada de forma básica) es lenta y engorrosa: los clientes deben iniciar sesión casi cada semana, buscar uno a uno los productos habituales y reintroducir datos en formularios largos. Como consecuencia:
- La tasa de conversión móvil es del 1,4 % frente al 4,1 % en ordenador.
- Un 48 % de los clientes nuevos que hacen un primer pedido no llegan al tercer pedido en 90 días, en gran parte por olvido del día de corte de pedidos (lunes a las 12:00 h) y por la pereza de rehacer la cesta en el móvil.
- La dirección general duda entre tres propuestas recibidas de proveedores:
  - **Opción A:** Optimizar únicamente la web móvil actual (inversión inicial 8.000 €, mantenimiento 200 €/mes).
  - **Opción B:** Lanzar una PWA avanzada con acceso directo, inicio persistente, repetición de cesta en 1 clic y *push* web/WhatsApp (inversión inicial 18.000 €, mantenimiento 450 €/mes).
  - **Opción C:** Desarrollar una app nativa iOS y Android con escáner, notificaciones *push* nativas, gestión flexible de suscripción/pausas y club de puntos (inversión inicial 42.000 €, mantenimiento 1.100 €/mes + 8.000 € iniciales de promoción de descargas).

#### Datos disponibles

| Indicador actual de VeggieBox Market S.L. | Valor actual | Notas relevantes |
|---|---:|---|
| Facturación anual | 1.800.000 € | Margen bruto medio: 36 %; margen neto tras logística/CAC: 11 % |
| Clientes activos anuales | 6.200 | Base de datos con correo y móvil verificados |
| Peso del tráfico móvil | 82 % | Picos: domingo 19:00-22:00 h |
| Conversión móvil vs. escritorio | 1,4 % vs. 4,1 % | Fuerte brecha por fricción de login y carga lenta |
| Ticket medio (AOV) | 52 € | Envío gratis a partir de 45 € |
| Pedidos medios por cliente activo al año | 5,6 | Clientes del segmento top (20 %): 18 pedidos/año |
| Retención a Día 90 (clientes que compran ≥ 3 veces) | 52 % | Principal motivo de baja reportado: "me olvido o tardo mucho en hacer el pedido" |
| Presupuesto anual disponible para tecnología + retención móvil | 35.000 € en Año 1 | Posibilidad de escalar en Año 2 si hay ROI demostrado |

*(Nota metodológica: datos simulados con finalidad académica).*

#### Preguntas de análisis
1. Evalúa financieramente y estratégicamente las Opciones A, B y C en función del presupuesto del Año 1 (35.000 €) y de la frecuencia de compra de VeggieBox. ¿Qué opción recomendarías y por qué? ¿Cabría un enfoque por fases?
2. ¿Cómo resolverías el problema principal de retención ("olvido del corte de pedido" y "pereza de rehacer la cesta") mediante experiencia móvil, personalización y notificaciones?
3. Diseña las reglas básicas de un programa de fidelización móvil que incentive el salto de 5,6 a 8 pedidos anuales por cliente.
4. ¿Qué cuadro de 5 métricas móviles presentarías al consejo a los 3 y 6 meses para demostrar si la inversión ha sido rentable?

#### Tarea a realizar
En equipos de 4 personas, preparad una **Recomendación Ejecutiva de Estrategia Mobile** que contenga:
1. Selección justificada de la alternativa tecnológica (A, B, C o plan bifásico B → C) encajada en los 35.000 € del Año 1.
2. Diseño de la experiencia de pedido recurrente en menos de 60 segundos desde el móvil.
3. Esquema de 3 automatizaciones de notificaciones/recordatorios vinculadas al corte del lunes y a la cesta habitual.
4. Estimación básica de impacto económico (cuántos pedidos adicionales al año se necesitan para amortizar la inversión).

#### Posibles soluciones o criterios de análisis
- **Decisión tecnológica razonada:** La Opción C supera el presupuesto del Año 1 (42.000 € + 13.200 € mantenimiento + 8.000 € promoción = 63.200 €), asumiendo demasiado riesgo antes de validar la adopción. La Opción A corrige velocidad, pero no aporta las capacidades de recordatorio directo, personalización ni fidelización que el negocio necesita por su altísima recurrencia potencial. La alternativa más sólida es elegir la **Opción B (PWA avanzada + optimización móvil)** en el Año 1 (18.000 € + 5.400 € mantenimiento = 23.400 €), reservando los 11.600 € restantes para diseñar el club de fidelización, automatización de recordatorios (push web + WhatsApp/SMS opt-in) y campañas de activación sobre los 6.200 clientes actuales. Si en 9-12 meses la PWA demuestra una subida clara en retención y frecuencia, se justifica con datos dar el salto a app nativa en el Año 2 (o validar un desarrollo híbrido acotado).
- **Experiencia de compra < 60 segundos:** Sesión persistente, botón destacado "Repetir mi cesta habitual" con sustitución rápida en 1 toque de artículos fuera de temporada, y pago exprés (Apple Pay / Google Pay / Bizum).
- **Notificaciones y fidelización:** Recordatorio inteligente el domingo a las 19:30 h solo para clientes que aún no hayan confirmado cesta esa semana ("Tu cesta de temporada te espera: confirma antes de mañana a las 12:00 h"), aviso de reparto en tiempo real y programa de niveles (p. ej., "5 pedidos seguidos = producto ecológico sorpresa o envío prioritario gratis").
- **Punto de equilibrio:** Con un AOV de 52 € y margen de contribución aproximado del 20-25 % en pedidos recurrentes sin CAC de captación (≈ 10-13 € netos por pedido repetido), bastan en torno a 2.000-2.500 pedidos recurrentes adicionales en el año (menos de 0,4 pedidos extra por cliente activo) para recuperar la inversión de la Opción B.

#### Preguntas de reflexión final
1. ¿Qué riesgos asume una pyme cuando compromete todo su presupuesto anual en una app nativa sin haber validado antes la adopción de la compra recurrente móvil?
2. ¿Cómo se coordina el canal móvil propio con canales de mensajería que el cliente ya usa a diario (como WhatsApp Business) sin generar redundancia?

---

## 7. Evaluación

### Evaluación diagnóstica breve (inicio de sesión, 5 min)
3 preguntas rápidas al grupo:
1. ¿Qué porcentaje aproximado de tu tráfico web llega desde el móvil? (< 40 % / 40-70 % / > 70 % / No lo sé).
2. ¿Crees que una pyme de tu sector necesita una app descargable en App Store y Google Play? (Sí / No / Depende).
3. ¿Cuál es la primera métrica que mirarías para saber si una app de compras funciona bien?

### Evaluación formativa durante la sesión
- Contrastación en vivo de las *5 leyes de retención* derivadas de la Actividad 1.
- Revisión directa por el formador de los textos, disparadores y límites de frecuencia elaborados en la Actividad 2.
- Observación de argumentos financieros y operativos durante el debate del caso *VeggieBox Market S.L.*

### Evaluación sumativa al final del tema
1. **Test de comprobación (30 %):** 10 preguntas sobre tipos de soluciones móviles, experiencia *mobile-first*, *deep linking*, notificaciones *push* y cálculo/interpretación de DAU/MAU, retención por cohortes y ARPU.
2. **Entregable aplicado (70 %):** Documento integrado de *Decisión Estratégica Mobile + Flujo de 4 Notificaciones Push + Cuadro de Mando de KPIs* (Actividades 2 y 3 aplicadas a la empresa real o proyecto del alumno).

### Rúbrica de evaluación del entregable aplicado

| Criterio | Insuficiente (0 - 4,9) | En desarrollo (5 - 6,9) | Adecuado (7 - 8,9) | Destacado (9 - 10) |
|---|---|---|---|---|
| **1. Decisión tecnológica (Web/PWA/App) (25 %)** | Elige una opción sin justificación ni análisis de frecuencia de compra ni costes. | Justifica parcialmente la opción, pero omite costes de mantenimiento o adquisición de usuarios. | Aplica la matriz de decisión con rigor, ponderando recurrencia, presupuesto y experiencia del cliente. | Presenta análisis coste-beneficio sólido, contempla despliegue por fases y calcula umbral de rentabilidad de la inversión móvil. |
| **2. Diseño de experiencia móvil y fidelización (25 %)** | Propuestas genéricas que no aprovechan el contexto móvil ni incentivan la recurrencia. | Menciona mejoras básicas de interfaz o descuentos puntuales sin mecánica de fidelización sostenida. | Propone mejoras concretas de ergonomía móvil, compra rápida y un programa de fidelización coherente. | Diseña una experiencia diferencial centrada en el hábito del cliente, integrando personalización práctica y ventaja real frente a la web. |
| **3. Estrategia de notificaciones *push* (25 %)** | Mensajes genéricos promocionales sin segmentación, *deep link* ni control de frecuencia. | Redacta mensajes aceptables, pero con disparadores poco precisos o sin política de *frequency capping*. | Diseña 4 *push* bien segmentadas, con disparador claro, copy conciso, *deep link* y límites de envío. | Articula un sistema completo de *mobile engagement* orientado al ciclo de vida del cliente, equilibrando conversión y protección del *opt-in*. |
| **4. Cuadro de mando y métricas móviles (25 %)** | Se limita a métricas de vanidad (descargas o visitas) sin objetivos ni interpretación. | Incluye alguna métrica útil (conversión o retención), pero desvinculada de objetivos comerciales. | Define 6 KPIs equilibrados (activación, uso, retención y monetización) con metas realistas. | Construye un cuadro de mando con análisis por cohortes y vinculación directa entre uso móvil, incremento de LTV y retorno de inversión. |

### Actividad de autoevaluación y reflexión
Cuestionario breve de cierre (3 preguntas de reflexión individual):
1. ¿En qué fase de madurez móvil está hoy mi empresa (1: web adaptada con fricción → 4: experiencia móvil personalizada con recurrencia medida)?
2. ¿Qué fricción concreta de compra en móvil puedo comprobar esta misma semana realizando un pedido de prueba desde mi propio teléfono?
3. ¿Qué métrica móvil voy a incorporar a mi informe comercial mensual?

---

## 8. Materiales y recursos

### Guion de diapositivas estructurado (slide por slide)

| Slide | Título | Contenido clave y recurso visual | Tiempo aprox. |
|---:|---|---|---:|
| 1 | Portada: Tema 3. Aplicaciones móviles | Título, Bloque 2 (3/9), Global MBA en Dirección Comercial y Ventas. | 2 min |
| 2 | Objetivos del tema | 5 objetivos Bloom y reto central: transformar tráfico móvil en retención rentable. | 3 min |
| 3 | Activación: Auditoría del bolsillo | Dinámica de 10 minutos sobre apps que se quedan vs. apps que se desinstalan. | 5 min |
| 4 | La brecha del *m-commerce* | Por qué el tráfico es móvil pero muchas pymes siguen convirtiendo en escritorio. | 8 min |
| 5 | Web móvil vs. PWA vs. App nativa | Tabla comparativa de coste, velocidad, notificaciones, presencia en stores y frecuencia requerida. | 12 min |
| 6 | Ergonomía y experiencia móvil | Diagrama de la *thumb zone*, navegación inferior, biometría, *onboarding* y *deep linking*. | 10 min |
| 7 | Funciones exclusivas de apps de compra | Escáner de reposición, listas rápidas, compra en 1 toque y omnicanalidad QR en tienda. | 10 min |
| 8 | Estrategia de notificaciones *push* e *in-app* | Tipología (transaccional, comportamental, promocional), segmentación y *frequency capping*. | 12 min |
| 9 | Personalización y programas de fidelización | De descuentos indiscriminados a niveles, reposición predictiva y beneficios exclusivos. | 10 min |
| 10 | Métricas móviles que importan al comité comercial | Embudo completo: CPI → Activación → DAU/MAU → Retención D1/D7/D30 → ARPU/LTV. | 13 min |
| 11 | Lectura práctica de una tabla de cohortes | Ejemplo visual de cómo detectar dónde se apaga la retención de los usuarios. | 5 min |
| 12 | Caso práctico: VeggieBox Market S.L. | Contexto, comparativa Opciones A/B/C y reto presupuestario. | 5 min |
| 13 | Talleres aplicados (Act. 2 y Act. 3) | Plantilla de flujos *push* y Matriz de decisión tecnológica móvil. | 5 min |
| 14 | Síntesis y puente al Tema 4 | 5 reglas de oro del *m-commerce* y conexión con *Tema 4. De interesado a comprador*. | 5 min |

### Ficha de trabajo: Matriz de Decisión *Web Móvil vs. PWA vs. App Nativa*
Puntúa de 1 (bajo) a 5 (alto) cada criterio para tu empresa:
1. **Frecuencia de compra del cliente al año** (1 = ≤ 1 vez/año; 3 = 3-4 veces/año; 5 = mensual o superior): [ ]
2. **Peso del tráfico móvil actual o esperado** (1 = < 30 %; 5 = > 75 %): [ ]
3. **Tamaño de base de clientes activos recurrentes** (1 = < 500; 5 = > 5.000): [ ]
4. **Necesidad de capacidades nativas (cámara/escáner, GPS, *push* crítico, offline):** [ ]
5. **Presupuesto y capacidad de mantenimiento técnico continuo (24 meses):** [ ]
6. **Capacidad de ofrecer valor exclusivo real frente a la web:** [ ]

*Guía orientativa de lectura:*
- **6 a 14 puntos:** Prioriza una **Web móvil *mobile-first*** impecable antes de plantearte una app.
- **15 a 22 puntos:** Evalúa una **PWA avanzada** o estrategia combinada con mensajería (WhatsApp/CRM) para validar recurrencia.
- **23 a 30 puntos:** Existe base sólida para un **caso de negocio de App nativa/híbrida** con plan de adopción y retención.

### Plantilla o herramienta práctica replicable: Planificador de Flujos *Push*

| Tipo de Push | Segmento | Disparador (*Trigger*) | Timing / Hora | Copy (Título + Cuerpo) | *Deep Link* destino | KPI objetivo |
|---|---|---|---|---|---|---|
| Transaccional | Compradores con pedido activo | Cambio estado a "En reparto" | Inmediato (08:00-20:00) | "Tu pedido llega hoy" / "Sigue la entrega en vivo..." | Pantalla seguimiento | ↓ Consultas soporte |
| Carrito abandonado | Usuarios con ítem sin pagar | +2 h tras abandono sin compra | Dentro horario activo | "¿Se te quedó algo?" / "Tu cesta sigue lista..." | Carrito pre-cargado | % recuperación carrito |
| Reposición | Clientes de producto consumible | X días según ciclo consumo | Día habitual compra | "Hora de reponer" / "Repite tu último pedido en 2 clics" | Re-order 1 clic | Tasa recompra |
| Fidelización | Socios nivel Plata/Oro | Acumulación puntos o acceso VIP | Tarde/fin de semana | "Acceso anticipado VIP" / "24 h antes que en web..." | Colección exclusiva | AOV / Retención D90 |

### Lecturas y recursos recomendados
- Hoober, S., & Berkman, E. *Designing Mobile Interfaces*. O'Reilly Media (referencia sobre ergonomía y *thumb zone*).
- Nir Eyal. *Enganchado (Hooked): Cómo construir productos y servicios exitosos que formen hábitos*. Gestión 2000 (aplicado de forma ética a hábitos de recurrencia y fidelización).
- Documentación de Google sobre **Progressive Web Apps (web.dev/explore/progressive-web-apps)** para comprender capacidades y límites actuales de las PWA en Android e iOS.

### Vídeos, artículos y fuentes adicionales *(requieren validación previa)*
> **Nota importante para el formador:** Verificar siempre la última edición de los estudios de mercado móvil y las políticas vigentes de Apple App Store y Google Play antes de citar datos o capacidades técnicas (por ejemplo, soporte de notificaciones *push* en PWA sobre iOS).
- **Informe Ditrendia — Mobile en España y en el Mundo** (evolución de uso móvil, apps y *m-commerce*; validar última edición publicada).
- **Data.ai / Sensor Tower — State of Mobile Report** (tendencias globales de aplicaciones de compras y retención; advertir sesgo global frente a pyme española).
- **Apple Human Interface Guidelines / Material Design (Google):** consultar versiones vigentes sobre solicitud de permisos, privacidad y diseño móvil.

### Glosario de términos clave

| Término | Definición operativa |
|---|---|
| **ARPU (*Average Revenue Per User*)** | Ingreso promedio generado por cada usuario activo en un periodo determinado. |
| **Churn** | Tasa de abandono o pérdida de usuarios/clientes que dejan de usar la app o de comprar en un periodo dado. |
| **CPI (*Cost Per Install*)** | Coste publicitario medio para conseguir una instalación de la aplicación móvil. |
| **DAU / MAU** | Usuarios activos diarios (*Daily Active Users*) y usuarios activos mensuales (*Monthly Active Users*). |
| **Deep Linking** | Enlace que dirige al usuario a una pantalla o contenido específico dentro de una aplicación móvil. |
| **Frequency Capping** | Límite máximo de notificaciones o impactos publicitarios que un usuario puede recibir en un intervalo de tiempo para evitar saturación. |
| **M-commerce** | Comercio electrónico realizado a través de teléfonos móviles o tabletas. |
| **Onboarding** | Proceso inicial guiado cuando un usuario abre la app por primera vez para mostrarle su valor y configurar preferencias. |
| **Opt-in** | Consentimiento expreso del usuario para recibir notificaciones *push* o comunicaciones comerciales. |
| **PWA (*Progressive Web App*)** | Aplicación web avanzada que ofrece experiencia, rapidez y acceso directo similares a una app desde el navegador móvil. |
| **Retención por cohortes** | Porcentaje de usuarios de un mismo grupo temporal que continúan activos tras N días desde su alta o primera compra. |
| **Thumb Zone** | Zona ergonómica de la pantalla del smartphone accesible cómodamente con el pulgar usando una sola mano. |

---

## 9. Adaptaciones

### Sesión presencial (formato híbrido o in-company)
- Realizar la Actividad 1 formando un círculo rápido o grupos de 3 personas enseñando directamente sus pantallas de móvil para comparar ejemplos reales de UX y *push*.
- Usar un tablero físico de cuatro cuadrantes para clasificar las propuestas de notificaciones de los equipos según "Utilidad para el cliente" vs. "Riesgo de desinstalación".

### Sesión online síncrona (formato principal en directo del Global MBA)
- Mostrar en directo, compartiendo pantalla de un móvil (o emulador responsive del navegador), la diferencia real entre una web lenta, una PWA fluida y una app nativa de compra.
- Dividir el caso *VeggieBox Market S.L.* en salas asignando a algunos equipos el análisis profundo de la Opción B y a otros la Opción C para enriquecer el contraste financiero en la discusión guiada.

### Sesión asíncrona (trabajo autónomo en campus virtual)
- Publicar 4 microlecciones en vídeo (10-12 min) incluyendo una demostración paso a paso de cómo leer una tabla real de retención por cohortes en hoja de cálculo.
- Abrir un foro práctico para la Actividad 1 donde cada estudiante suba una captura (sin datos personales) de la mejor notificación *push* recibida recientemente y explique por qué funcionó.
- Recoger el entregable integrado (Matriz de decisión móvil + 4 flujos *push* + Cuadro de KPIs) a través de la herramienta de tareas del campus con feedback asíncrono individualizado.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Extiende los fundamentos de tienda web, fichas de producto y posventa del **Tema 2** al dispositivo prioritario del comprador actual, conectándolos con la rentabilidad por pedido del **Tema 1**.
- **Competencias que desarrolla:** Evaluación de inversiones tecnológicas móviles (ROI/TCO), diseño de experiencias *mobile-first*, gestión de retención y fidelización digital, y toma de decisiones basada en métricas de cohortes y LTV.
- **Conexión con el tema anterior y posterior:**
  - *Tema anterior (Bloque 2, Tema 2 — Tienda web):* Tras estructurar la tienda web base, este tema resuelve cómo capitalizar el tráfico móvil y construir recurrencia mediante PWA, apps y notificaciones.
  - *Tema posterior (Bloque 2, Tema 4 — De interesado a comprador):* Una vez disponibles los canales de venta (web y móvil), el Tema 4 aborda cómo convertir el interés inicial (leads y visitantes indecisos) en clientes reales mediante embudos, cualificación, *lead nurturing* y cierre comercial.
- **Evidencia de aprendizaje que dejará el alumnado:** Una **Evaluación de Viabilidad Mobile (Web/PWA/App), Arquitectura de Notificaciones *Push* y Cuadro de Mando de Retención**, útil como documento de decisión real para dirección general o inversores.

---

## Siguientes pasos para el formador

1. **Verificar soporte técnico vigente de PWA en iOS y Android** (especialmente notificaciones web *push* en Safari/iOS) antes de exponer la comparativa del apartado 3.1.
2. **Actualizar las cifras del mercado móvil en España** consultando las últimas ediciones publicadas de los informes de IAB Spain, CNMC o Ditrendia.
3. **Preparar 2 capturas reales recientes** (una excelente y otra invasiva) de pantallas de *onboarding* y notificaciones *push* para ilustrar la exposición sin recurrir a ejemplos desactualizados.
4. **Habilitar las plantillas descargables** en el aula virtual: *Matriz de Decisión Mobile*, *Planificador de Flujos Push* y el enunciado de *VeggieBox Market S.L.*
5. **Anticipar la conexión con el Tema 4:** Pedir al alumnado que identifique qué porcentaje de sus visitantes o contactos digitales muestran interés pero no compran en la primera visita.
