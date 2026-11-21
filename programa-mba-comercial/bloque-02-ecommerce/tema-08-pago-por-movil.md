# Tema 8. Pago por móvil

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Tema 8. Pago por móvil |
| **Bloque y posición dentro del programa** | Bloque 2: E-commerce — Tema 8 de 9 (Global MBA en Dirección Comercial y Ventas, 90 ECTS · 14 meses) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Directores comerciales, gerentes de ventas, emprendedores y profesionales de marketing y negocio |
| **Nivel de dificultad** | Intermedio |
| **Prerrequisitos** | Haber completado los Temas 1 (*Venta online*), 3 (*Aplicaciones móviles*) y 6 (*Experiencia de usuario*) o disponer de experiencia previa en gestión de canales digitales y *checkout* |
| **Resultado general de aprendizaje** | Diseñar y auditar una estrategia integral de pagos móviles y alternativos —combinando *wallets*, pagos *contactless*, seguridad antifraude, cumplimiento de autenticación reforzada (PSD2/SCA) y optimización del *checkout*— para maximizar la tasa de aprobación y conversión en dispositivos móviles. |

---

## 2. Objetivos de aprendizaje

Al finalizar este tema, el alumnado será capaz de:

1. **Comparar** el funcionamiento comercial, la estructura de costes y el impacto en conversión de los principales métodos de pago móvil (*wallets* digitales, Bizum, tarjeta tokenizada, pagos *contactless* y métodos alternativos como BNPL) *(Nivel de Bloom: Evaluar)*.
2. **Analizar** el equilibrio entre seguridad, prevención de fraude (contracargos y suplantación) y fricción en la experiencia de pago móvil bajo el marco europeo de autenticación reforzada *(Nivel de Bloom: Analizar)*.
3. **Diagnosticar** las causas técnicas y de experiencia de usuario que provocan rechazos bancarios (*false declines*) y abandonos en el último paso del *checkout* móvil *(Nivel de Bloom: Analizar)*.
4. **Diseñar** una arquitectura de pagos optimizada para móvil (compra exprés, ordenación de métodos, reintentos inteligentes y omnicanalidad *contactless*/QR) adaptada al perfil de cliente y ticket medio de una pyme *(Nivel de Bloom: Crear)*.
5. **Evaluar** el rendimiento económico de la pasarela y el mix de pagos mediante métricas clave (tasa de autorización, coste efectivo por transacción, tasa de fraude/contracargos y conversión de pago móvil) *(Nivel de Bloom: Evaluar)*.

---

## 3. Contenidos esenciales

### 3.1 Ecosistema de pagos móviles, *wallets* y pagos *contactless*

#### Explicación breve y clara
Cada segundo extra y cada dato que un comprador tiene que teclear en la pantalla de su teléfono —como los 16 dígitos de la tarjeta, la fecha de caducidad, el CVV y la dirección— dispara el abandono. Los pagos móviles resuelven esa fricción integrando identidad, datos de envío y autenticación biométrica en uno o dos toques. Para la dirección comercial de una pyme, ofrecer los métodos de pago que el cliente ya usa a diario no es un detalle técnico: es una palanca directa de conversión tanto en e-commerce como en el punto de venta físico omnicanal.

#### Conceptos clave
- **Carteras digitales (*Wallets*):** Apple Pay, Google Pay, Samsung Wallet y PayPal. Permiten pago exprés (*express checkout*) con huella o reconocimiento facial (Face ID), autocompletando dirección de envío y evitando teclear la tarjeta.
- **Pagos instantáneos cuenta-a-cuenta (*Account-to-Account* / A2A) en España:** Bizum e-commerce (altísima penetración en consumidores españoles; *nota: verificar estadísticas actuales de adopción y comercios activos en los reportes oficiales de Bizum / Banco de España antes de citar cifras exactas en clase*).
- **Pagos *contactless* y omnicanalidad móvil:** Tecnología NFC en tienda física (*tap-to-pay* desde el móvil del cliente o incluso usando el móvil del vendedor como datáfono —*SoftPOS*—), enlaces de pago (*Pay by Link*) enviados por WhatsApp/email y códigos QR dinámicos para ventas híbridas o en eventos.
- **Tokenización de tarjetas:** Sustitución de los datos reales de la tarjeta por un identificador cifrado (*token*) que habilita compras en un clic y suscripciones recurrentes sin almacenar datos bancarios sensibles en los servidores de la pyme.

#### Definiciones necesarias
- **Digital Wallet (Cartera digital):** Aplicación o servicio seguro almacenado en el dispositivo móvil o en la nube que guarda de forma tokenizada tarjetas o cuentas del usuario para autorizar pagos online y presenciales con biometría.
- **Pago *contactless* (NFC):** Transacción de proximidad sin contacto físico que transmite los datos de pago cifrados entre un smartphone, reloj inteligente o tarjeta y un terminal receptor en pocos segundos.
- **Express Checkout:** Botón de pago acelerado (p. ej., Apple Pay, Google Pay o PayPal Express) colocado en la ficha de producto o carrito que permite completar envío y cobro en segundos sin rellenar formularios manuales.

#### Ejemplo práctico realista
Una pyme española de entradas y experiencias gastronómicas (ticket medio 65 €, 86 % tráfico móvil) solo ofrecía pago clásico con tarjeta bancaria tecleada y transferencia. Muchos usuarios compraban en el metro o desde el sofá y abandonaban por no levantarse a buscar la cartera. Al activar Apple Pay, Google Pay y Bizum en posición destacada del *checkout*, el tiempo medio de pago cayó de 115 segundos a 22 segundos y el porcentaje de usuarios que completaba el pago tras llegar a la pasarela creció en 14 puntos porcentuales.

#### Errores frecuentes
- Ofrecer únicamente tarjeta bancaria manual en una tienda B2C española, ignorando Bizum y *wallets* biométricos.
- Colocar 12 logotipos de métodos de pago desordenados que confunden al comprador en móvil, en vez de mostrar dinámicamente los 3-4 más relevantes según el dispositivo (ej. Apple Pay en iOS, Google Pay en Android).
- Desaprovechar el *Pay by Link* (enlaces de pago seguros) en ventas cerradas por teléfono o WhatsApp, pidiendo en su lugar transferencias lentas que enfrían la compra.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué Apple Pay y Google Pay suelen ofrecer mayor conversión en móvil que introducir manualmente los datos de la tarjeta?
2. ¿Cómo puede una pyme omnicanal utilizar *Pay by Link*, QR o *SoftPOS* para cerrar ventas móviles fuera de la tienda web tradicional?
3. ¿Qué ventaja de seguridad y recurrencia aporta la tokenización frente al almacenamiento tradicional de tarjetas?

---

### 3.2 Seguridad, prevención de fraude y marco normativo PSD2 / SCA

#### Explicación breve y clara
Hacer el pago rápido nunca puede comprometer la seguridad. En comercio electrónico existen dos riesgos contrapuestos que la dirección comercial debe equilibrar: por un lado, el **fraude real y los contracargos (*chargebacks*)** que destruyen margen y pueden bloquear tu cuenta de comerciante; por otro, una **seguridad excesivamente rígida** que provoca rechazos falsos (*false declines*) de clientes legítimos o fricciones insoportables en la app del banco. Comprender cómo funciona la autenticación reforzada europea (PSD2/SCA) permite cumplir la ley minimizando la pérdida de ventas.

#### Conceptos clave
- **Marco normativo europeo PSD2 y SCA (Autenticación Reforzada de Clientes):**
  - Exige verificar al menos **2 de 3 factores independientes**: algo que sabes (contraseña/PIN), algo que tienes (móvil/dispositivo registrado) o algo que eres (biometría: huella o rostro).
  - Se implementa habitualmente mediante **3D Secure 2 (3DS2)**, diseñado para integrarse de forma fluida en móvil y evitar las antiguas pantallas emergentes rotas.
  - **Exenciones previstas en SCA** (que el procesador de pagos puede solicitar cuando el riesgo es bajo, como transacciones de bajo importe, análisis de riesgo de transacción —TRA—, pagos recurrentes iniciados por el comercio o beneficiarios de confianza), reduciendo fricción innecesaria.
  - **Advertencia normativa obligatoria:** *La regulación europea de servicios de pago evoluciona activamente (por ejemplo, el paquete legislativo PSD3 / PSR en tramitación o actualización en la UE y criterios de la Autoridad Bancaria Europea y Banco de España). El formador y la empresa deben verificar siempre la normativa vigente y los requisitos actuales con su proveedor de pagos antes de impartir o configurar reglas.*
- **Prevención de fraude y seguridad técnica:**
  - Cumplimiento **PCI-DSS** (estándar de seguridad de datos de tarjetas; en pymes se simplifica drásticamente usando campos alojados/iframes de pasarelas certificadas para no tocar nunca los datos brutos de la tarjeta).
  - Motores antifraude con reglas dinámicas (velocidad de intentos, discrepancia geolocalización IP vs. país de tarjeta, listas negras) y gestión ordenada de disputas/contracargos.

#### Definiciones necesarias
- **SCA (*Strong Customer Authentication*):** Requisito normativo europeo derivado de la directiva PSD2 que obliga a autenticar al comprador mediante al menos dos factores independientes en la mayoría de los pagos electrónicos, salvo exenciones reguladas.
- **Contracargo (*Chargeback*):** Devolución forzosa del importe de una transacción iniciada por el titular a través de su banco (por fraude, cargo no reconocido o producto no entregado), que conlleva pérdida de mercancía, comisión penalizadora y riesgo reputacional ante el procesador.
- **Rechazo falso (*False Decline*):** Transacción de un cliente real y legítimo que resulta denegada erróneamente por reglas antifraude demasiado estrictas o fallos técnicos en la autenticación 3DS2.

#### Ejemplo práctico realista
Una pyme de venta online de electrónica y drones sufría un 1,8 % de contracargos por tarjetas robadas y decidió endurecer manualmente sus reglas bloqueando todas las compras desde móvil superiores a 250 € si la dirección de envío difería de la facturación. El fraude bajó, pero también bloquearon a decenas de clientes legítimos que enviaban regalos o pedían a la oficina, perdiendo más de 18.000 € mensuales en ventas válidas. Al migrar a una pasarela moderna con 3DS2 bien integrado, biometría vía *wallets* (que ya cumple SCA de forma nativa sin redirigir a la app del banco) y motor antifraude por puntuación de riesgo, mantuvieron el fraude por debajo del 0,2 % y recuperaron una tasa de autorización superior al 92 %.

#### Errores frecuentes
- Creer que "el pago es cosa del banco" y no revisar nunca la tasa de transacciones rechazadas o abandonadas durante el reto 3DS2 en móvil.
- Usar integraciones antiguas de TPV con redirecciones lentas que fallan cuando el usuario cambia a la app de su banco en el móvil y vuelve al navegador (perdiendo la sesión del carrito).
- Ignorar que los pagos con Apple Pay / Google Pay ya incorporan autenticación biométrica y tokenización de dispositivo, cumpliendo SCA con muchísima menos fricción que un SMS o notificación bancaria lenta.

#### Preguntas que el alumnado debería poder responder
1. ¿Cuáles son los tres factores de autenticación de SCA y por qué los *wallets* biométricos reducen la fricción frente al 3DS tradicional?
2. ¿Qué cuesta más a menudo a una pyme en crecimiento: el fraude real o los rechazos falsos (*false declines*), y cómo se equilibran ambos?
3. ¿Qué precauciones debe verificar una empresa española respecto a PSD2/SCA y PCI-DSS al contratar una pasarela de pago?

---

### 3.3 Métodos de pago alternativos y estrategia según ticket medio y mercado

#### Explicación breve y clara
No todos los clientes ni todos los importes se pagan igual. Mientras un pedido de 29 € se cierra idealmente con un toque en Bizum o Apple Pay, una compra de 900 € (una bicicleta eléctrica, un curso profesional o un electrodoméstico) puede frenarse por liquidez inmediata aunque el cliente quiera comprar. Incorporar métodos de pago alternativos —especialmente el pago fraccionado o aplazado (**BNPL — *Buy Now, Pay Later***) y soluciones locales si se vende internacionalmente— permite desbloquear demanda y elevar el ticket medio, siempre vigilando las comisiones sobre el margen.

#### Conceptos clave
- **Pago aplazado / fraccionado (BNPL):** Servicios como Sequra, Klarna, Alma, Aplazame o financiación integrada (3 cuotas sin intereses, "paga en 30 días" o financiación a 6-12 meses). El comercio cobra normalmente al contado (menos una comisión superior a la tarjeta) y el proveedor asume el riesgo de impago según contrato.
- **Impacto comercial del BNPL:** Suele elevar la tasa de conversión y el ticket medio (AOV) en tickets medios-altos (> 100 €), especialmente si se muestra la cuota mensual desde la ficha de producto ("o desde 39 €/mes") y no solo al final del checkout.
- **Pagos alternativos en ventas internacionales y B2B:** Si la pyme exporta online en Europa, debe adaptar el *checkout* a métodos locales dominantes (p. ej., iDEAL en Países Bajos, MB WAY en Portugal, Bancontact en Bélgica, SEPA/Sofort en Alemania). En B2B digital, cobra protagonismo el pago diferido B2B con verificación instantánea de crédito o domiciliación SEPA.
- **Control financiero de comisiones:** Comparar el coste porcentual del método alternativo (p. ej., 3-5 % en BNPL frente a ~0,8-1,8 % en tarjeta/Bizum) con el incremento real en margen de contribución por mayor conversión o AOV.
- **Nota normativa:** *La financiación al consumo y los servicios BNPL están sujetos a normativa europea y española de crédito al consumo y transparencia publicitaria (incluyendo la transposición de la nueva Directiva de Crédito al Consumo UE 2023/2225); verificar requisitos de información y advertencias legales vigentes antes de publicitar cuotas.*

#### Definiciones necesarias
- **BNPL (*Buy Now, Pay Later*):** Solución de pago integrada en el *checkout* que permite al comprador aplazar o fraccionar el pago de su compra en varias cuotas con aprobación instantánea online.
- **Mix de pagos (*Payment Mix*):** Distribución porcentual de las transacciones de una tienda entre los distintos métodos de cobro disponibles (tarjeta, Bizum, wallets, PayPal, BNPL, transferencia).
- **Orquestación / Enrutamiento de pagos:** Capacidad técnica de gestionar varias pasarelas o métodos desde una misma arquitectura para optimizar costes, disponibilidad (respaldo ante caídas) y tasas de aceptación.

#### Ejemplo práctico realista
Una tienda online de instrumentos musicales (ticket medio 340 €, margen bruto 40 %) dudaba en activar un proveedor BNPL por su comisión del 3,9 %. Hizo una prueba controlada de 60 días mostrando la opción "Divide en 3 cuotas sin intereses" directamente en la ficha de producto para artículos > 120 €. El 24 % de los pedidos eligió pago fraccionado, el ticket medio en esos pedidos subió a 445 € (los clientes se animaban a añadir funda y amplificador) y la conversión global en móviles creció un 19 %, compensando con creces la comisión adicional.

#### Errores frecuentes
- Activar BNPL sin mostrar la simulación de cuota en la ficha de producto (si el cliente solo lo descubre en el último paso, se pierde el efecto impulsor de conversión y AOV).
- Permitir pago aplazado con comisiones altas en productos de margen bruto muy estrecho (< 15 %), erosionando la rentabilidad.
- Ofrecer contra reembolso sin filtro ni recargo en productos de alto coste logístico, disparando los paquetes rechazados en entrega.

#### Preguntas que el alumnado debería poder responder
1. ¿A partir de qué rango de ticket medio y margen bruto suele resultar rentable integrar una solución BNPL?
2. ¿Por qué es clave anunciar la posibilidad de pago fraccionado o Bizum ya desde la ficha de producto y el carrito?
3. ¿Qué papel juegan los métodos de pago locales cuando una pyme española decide internacionalizar su tienda online en Europa?

---

### 3.4 Experiencia de pago móvil y optimización de la conversión en el *checkout*

#### Explicación breve y clara
La experiencia de pago móvil (*Payment UX*) es el punto exacto donde se materializa —o se pierde— todo el trabajo de marketing, catálogo y UX de los temas anteriores. Optimizar el *checkout* móvil implica reducir campos al mínimo imprescindible, adaptar los teclados del teléfono, mostrar señales de seguridad discretas pero claras, gestionar con elegancia los fallos de pago (ofreciendo un método alternativo al instante sin vaciar el carrito) y medir continuamente la tasa de aprobación paso a paso.

#### Conceptos clave
- **Buenas prácticas de *Checkout* móvil de alta conversión:**
  - *Express checkout* (Apple Pay / Google Pay) en la parte superior del carrito/checkout para saltarse formularios.
  - Diseño de una sola columna, barra de progreso clara (máximo 2-3 pasos o *one-page checkout* limpio), autocompletado de direcciones y teclados numéricos automáticos para tarjeta/CP/teléfono.
  - Resumen del pedido plegable con total transparente (impuestos y envío ya visibles) y microcopys de confianza (pago cifrado, política de devolución, soporte inmediato).
  - Validación de errores en tiempo real en cada campo (evitando esperar al pulsar "Pagar" para borrar todo el formulario).
- **Recuperación inteligente de pagos fallidos:** Si falla la tarjeta (por saldo, límite online o timeout de 3DS2), mantener todos los datos intactos, explicar el motivo en lenguaje claro y proponer en un clic *"Prueba ahora con Bizum o Apple Pay"*, complementado con enlace automático de recuperación por email/SMS si abandona.
- **Métricas esenciales de gestión de pagos:**
  - **Tasa de conversión del paso de pago (`purchase / add_payment_info`).**
  - **Tasa de autorización / aprobación bancaria** (desglosada por método y dispositivo).
  - **Tasa de abandono en reto 3DS2 / SCA.**
  - **Coste efectivo total de pagos (% sobre facturación)** y **tasa de contracargos (< 0,5 % recomendable; verificar umbrales de marcas de tarjeta)**.

#### Definiciones necesarias
- **Tasa de autorización (*Authorization Rate*):** Porcentaje de transacciones enviadas a la pasarela que reciben aprobación del banco emisor frente al total de intentos procesados.
- **One-Page Checkout:** Formato de finalización de compra que concentra envío, método de pago y resumen en una única pantalla estructurada para minimizar cargas de página en móvil.
- **Soft Decline:** Rechazo temporal de un pago que puede recuperarse automáticamente mediante reintento, solicitud de autenticación 3DS o cambio rápido a otro método de pago.

#### Ejemplo práctico realista
Una marca de moda deportiva detectó en sus registros de pasarela que el 21 % de los intentos de pago con tarjeta en móvil fallaban durante el paso de confirmación bancaria y el usuario era devuelto a un carrito vacío con un mensaje técnico ("Error 9130 — Operación denegada"). Al mejorar el flujo: a) activó *wallets* biométricos, b) conservó el carrito y la dirección intactos ante cualquier error, y c) sustituyó el código técnico por *"Tu banco no ha podido confirmar la tarjeta. Puedes completar tu pedido ahora mismo con Bizum o Google Pay"*. Recuperó casi la mitad de esos pagos fallidos en el acto.

#### Errores frecuentes
- Mostrar códigos técnicos indescifrables ("Error 402 / Gateway Timeout") y vaciar el formulario cuando falla un intento de pago.
- Ocultar el botón de pago final debajo de textos legales interminables o banners promocionales en móvil.
- Elegir proveedor de pagos fijándose solo en "ahorrar un 0,15 % de comisión" si su tasa de aprobación es 4 puntos inferior (perder un 4 % de ventas cuesta infinitamente más que un 0,15 % de comisión).

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué una pasarela ligeramente más cara en comisión puede ser mucho más rentable para una pyme que una pasarela barata?
2. ¿Cómo debe reaccionar la interfaz móvil cuando un pago con tarjeta es rechazado para no perder al cliente?
3. ¿Qué cuatro métricas de pagos debería revisar trimestralmente la dirección comercial junto al departamento financiero?

---

## 4. Metodología didáctica

Secuencia de 4 horas (240 minutos) práctica, centrada en auditar el *checkout* móvil real, equilibrar seguridad/conversión y modelar el mix óptimo de pagos.

| Fase | Tiempo | Qué hace el formador | Qué hace el alumnado |
|---|---:|---|---|
| **1. Apertura y activación** | 25 min | Enlaza con el Tema 7 y lanza la Actividad 1 (*Carrera de obstáculos del pago móvil*: cronometraje real de un checkout desde el smartphone). | Simula una compra real desde su teléfono hasta el paso previo al cobro, cronometra segundos/toques y registra fricciones de pago. |
| **2. Exposición breve / microlearning (Parte A)** | 40 min | Expone apartados 3.1 y 3.2 (*wallets*, Bizum, *contactless*, tokenización, fraude, contracargos y marco PSD2/SCA con advertencia de verificación normativa). | Contrasta cómo operan los distintos métodos de pago en móvil y analiza el impacto real del 3DS2 frente a la biometría. |
| **3. Exposición breve / microlearning (Parte B)** | 35 min | Expone apartados 3.3 y 3.4 (BNPL, métodos locales, *Payment UX*, recuperación de fallos y KPIs de autorización y coste efectivo). | Evalúa numéricamente cuándo compensa asumir una mayor comisión (p. ej., BNPL o mejor pasarela) a cambio de mayor aprobación/AOV. |
| **4. Análisis de caso práctico** | 50 min | Presenta el caso *UrbanBike Mobility S.L.* Supervisa a los equipos en el diagnóstico de caídas en pago móvil, rediseño del mix de pagos y cálculo financiero. | En equipo, analiza las pérdidas por abandono en 3DS2 y falta de wallets/BNPL, diseña la nueva arquitectura de pagos y calcula su ROI. |
| **5. Actividad práctica de aplicación y transferencia** | 45 min | Facilita la Actividad 2 (simulación coste vs. conversión del mix de pagos en hoja de cálculo) y arranca la Actividad 3 (*Auditoría y Plan de Pagos Móviles* para su empresa). | Calcula el impacto neto de distintas combinaciones de pasarela/métodos y diseña el plan de mejora de *checkout* móvil para su negocio. |
| **6. Discusión guiada** | 25 min | Modera la puesta en común de soluciones del caso *UrbanBike* y debate el dilema "comisión baja vs. tasa de aceptación alta" y "antifraude vs. fricción". | Defiende su propuesta de mix de pagos y recuperación de pagos fallidos; contrasta enfoques B2C y B2B con el grupo. |
| **7. Síntesis y cierre** | 20 min | Consolida la checklist de pago móvil impecable, aplica la evaluación sumativa breve y conecta con el Tema 9 (*Landing page*, cierre del Bloque 2). | Realiza el test breve de cierre y la autoevaluación de madurez en pagos móviles. |
| **TOTAL** | **240 min** | | |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Carrera de obstáculos del pago móvil
- **Objetivo:** Experimentar en primera persona la fricción real de completar un pago desde el teléfono móvil y cuantificar su duración.
- **Instrucciones para el alumnado:**
  1. Con tu propio smartphone, entra en la tienda web de tu empresa (o en una de las 2 tiendas propuestas por el formador), añade un producto al carrito y cronometra cuántos **segundos** y **campos manuales** te cuesta llegar hasta el botón final de pagar (sin completar el cargo).
  2. Anota en el tablero colaborativo: a) tiempo total en segundos, b) qué métodos de pago móvil aparecieron (Apple Pay/Google Pay, Bizum, BNPL, solo tarjeta), c) si el teclado cambió a numérico en los campos de números y d) si hubo redirecciones lentas o campos innecesarios.
  3. Comparamos los tiempos más rápidos (< 30 s) frente a los más lentos (> 120 s) en plenario.
- **Materiales necesarios:** Smartphone personal, cronómetro y tablero colaborativo.
- **Tiempo estimado:** 20 minutos (en Fase 1).
- **Rol del formador:** Visibilizar cómo un mal *checkout* móvil desperdicia el tráfico caro captado en las campañas del Tema 7.
- **Producto o entregable esperado:** Comparativa grupal de tiempos reales y fricciones de pago móvil.
- **Criterios de éxito:** Medición real cronometrada e identificación precisa de al menos 2 fricciones técnicas o de UX en el flujo de pago.

### Actividad 2 (Aplicación): Simulador financiero — Comisión de pasarela vs. Tasa de aprobación y BNPL
- **Objetivo:** Demostrar cuantitativamente por qué las decisiones de pagos deben tomarse por margen neto incremental y no únicamente por la comisión porcentual más baja.
- **Instrucciones para el alumnado:**
  1. Abre la hoja de cálculo *Simulador Mix de Pagos*.
  2. Compara dos escenarios para una tienda con 2.000 intentos mensuales de pago, ticket medio 140 € y margen bruto 45 %:
     - *Escenario A (Pasarela básica solo tarjeta):* comisión 0,9 %, tasa de aprobación final 78 %, sin BNPL.
     - *Escenario B (Pasarela moderna con Wallets + Bizum + BNPL):* comisión media ponderada 1,9 %, tasa de aprobación final 89 %, y un 20 % de los pedidos usa BNPL subiendo su AOV a 175 €.
  3. Calcula en ambos escenarios: pedidos aprobados, facturación neta, comisiones de pago totales y **margen bruto restante tras comisiones**.
- **Materiales necesarios:** Hoja de cálculo compartida (Excel/Google Sheets).
- **Tiempo estimado:** 20 minutos (en Fase 5).
- **Rol del formador:** Confirmar los cálculos y subrayar la lectura ejecutiva: pagar más comisión puede generar decenas de miles de euros extra de margen neto si sube la aprobación y el ticket medio.
- **Producto o entregable esperado:** Hoja de cálculo resuelta con recomendación financiera razonada.
- **Criterios de éxito:** Cálculos exactos en ambos escenarios y conclusión clara basada en margen neto total (y no en % de comisión aislado).

### Actividad 3 (Transferencia a la realidad laboral): Auditoría de *Payment UX* y Plan de Optimización de Pagos
- **Objetivo:** Diseñar un plan accionable para mejorar el mix de pagos, la seguridad SCA y la experiencia de cobro móvil en la empresa real o proyecto del alumno.
- **Instrucciones para el alumnado:**
  1. Audita el flujo de pago actual de tu empresa (online y, si aplica, presencial/telefónico) usando la *Checklist de Pago Móvil y Seguridad* (Sección 8).
  2. Define tu **Mix de Pagos objetivo** (máximo 4-5 métodos ordenados por prioridad en móvil), especificando si incorporas *wallets*, Bizum, BNPL o *Pay by Link* y justificando el encaje con tu ticket medio y margen.
  3. Diseña el protocolo ante pagos rechazados (mensaje exacto en pantalla + método alternativo sugerido) y define los 4 KPIs de pago que auditarás con finanzas/IT cada mes.
- **Materiales necesarios:** *Checklist de Pago Móvil* y plantilla de *Plan de Pagos*.
- **Tiempo estimado:** 25 minutos en sesión + finalización asíncrona para la entrega sumativa.
- **Rol del formador:** Comprobar la coherencia con el modelo de negocio (B2C/B2B, ticket medio y mercados geográficos) y recordar la verificación normativa con proveedor de pagos/asesoría.
- **Producto o entregable esperado:** Plan ejecutivo de Optimización de Pagos Móviles (1-2 páginas).
- **Criterios de éxito:** Diagnóstico basado en pruebas reales en móvil, mix de pagos justificado financieramente y protocolo concreto de recuperación de fallos.

---

## 6. Caso práctico

### UrbanBike Mobility S.L.: 31 % de caídas en el pago móvil y un checkout atrapado en 2018

#### Contexto empresarial
**UrbanBike Mobility S.L.** es una pyme madrileña con 19 empleados y dos tiendas-taller físicas que vende bicicletas eléctricas urbanas (PVP entre 950 € y 2.200 €), cascos, candados y accesorios (PVP 25 €–140 €), además de ofrecer alquiler mensual por suscripción. El 74 % de su tráfico web proviene del teléfono móvil (especialmente desde campañas de Instagram y Google Shopping). Factura 2,4 millones de euros anuales, de los cuales 920.000 € son online.

#### Situación o problema
La dirección comercial está preocupada porque, aunque las campañas digitales atraen tráfico de gran calidad y muchos usuarios añaden productos al carrito desde el móvil, la conversión final en el último paso del pago es alarmantemente baja:
1. La tienda solo admite **tarjeta bancaria manual** (a través de un TPV virtual antiguo con redirección a una pantalla externa no adaptada a móvil) y transferencia bancaria manual.
2. En el móvil, un **31 % de los usuarios que intentan pagar con tarjeta abandona o falla durante la verificación 3DS/SCA** (muchos cambian a la app del banco para aprobar la operación y al volver al navegador la sesión ha caducado o muestra "Error de autenticación").
3. Para bicicletas eléctricas (> 1.000 €), el 64 % de las consultas en el chat pregunta *"¿Se puede pagar a plazos?"*, pero la web no ofrece pago fraccionado BNPL ni financiación online instantánea (solo un PDF manual para rellenar en tienda física).
4. En sus dos tiendas físicas, los clientes quieren pagar reparaciones rápidas o accesorios con móvil *contactless* y algunos compradores telefónicos piden pagar la reserva de una bici a distancia, pero el equipo solo les envía un número IBAN por correo, perdiendo la mitad de las reservas antes de que hagan la transferencia.
5. Además, hace 3 meses sufrieron 4 pedidos fraudulentos de bicicletas enviadas a direcciones temporales por valor de 5.600 € que acabaron en contracargo porque no tenían motor antifraude actualizado.

#### Datos disponibles

| Indicador de pagos de UrbanBike Mobility S.L. | Situación actual | Referencia / Objetivo a 6 meses |
|---|---:|---:|
| Intentos mensuales de pago online (74 % en móvil) | 620 intentos | 700 intentos |
| Tasa de aprobación final en móvil | 69 % (31 % fallos/abandonos 3DS) | ≥ 88 % |
| Tasa de aprobación final en escritorio | 87 % | ≥ 92 % |
| Mix de pagos actual | 92 % tarjeta manual / 8 % transferencia | Tarjeta 3DS2 + Wallets + Bizum + BNPL |
| Ticket medio accesorios / bicicletas | 68 € (accesorios) / 1.320 € (bicis) | Elevar conversión en bicis un +35 % |
| Margen bruto medio | 48 % accesorios / 31 % bicicletas | Proteger margen neto tras comisiones |
| Tasa actual de contracargos (últimos 6 meses) | 1,2 % (en zona de alerta) | ≤ 0,3 % |
| Pérdida estimada por reservas telefónicas vía IBAN no pagadas | ~48 % no completan la transferencia | < 15 % usando *Pay by Link* |

*(Nota metodológica: caso y cifras creados con fines exclusivamente didácticos; en una implantación real deben verificarse comisiones contractuales, requisitos vigentes PSD2/SCA y normativa de crédito al consumo aplicables en España).*

#### Preguntas de análisis
1. ¿Cómo explicas el 31 % de fallos/abandonos en el pago móvil de UrbanBike y qué cambios técnicos y de UX eliminarán de raíz esa fuga cumpliendo la normativa europea PSD2/SCA?
2. Diseña una **estrategia diferenciada de métodos de pago** según el importe del carrito (accesorios < 150 € vs. bicicletas eléctricas > 900 € vs. alquiler por suscripción mensual) vigilando que la comisión no destruya el margen del 31 % en bicicletas.
3. ¿Cómo frenarías los contracargos (del 1,2 % al ≤ 0,3 %) sin bloquear a clientes legítimos?
4. ¿Qué solución omnicanal de cobro móvil implantarías para sus dos tiendas físicas y las reservas telefónicas?

#### Tarea a realizar
En equipos de 4 personas, elaborad el **Plan de Modernización de Pagos Móviles y Antifraude de UrbanBike Mobility S.L.** en 4 apartados:
1. Arquitectura de pasarela y mix de pagos priorizado por importe y dispositivo (con visibilidad desde ficha de producto).
2. Protocolo de cumplimiento SCA/3DS2 fluido, prevención de contracargos y recuperación de pagos rechazados.
3. Soluciones omnicanal (*contactless*/SoftPOS en tienda y *Pay by Link* para reservas telefónicas/WhatsApp).
4. Estimación de impacto económico mensual (ventas recuperadas por subir la aprobación móvil del 69 % al 88 % + incremento en bicicletas financiadas).

#### Posibles soluciones o criterios de análisis
- **Actualización de pasarela y pago exprés móvil:** Sustituir el TPV con redirección obsoleta por una pasarela moderna embebida con **3DS2 nativo móvil** y activar **Apple Pay, Google Pay y Bizum**. Al autenticarse por huella/Face ID en el dispositivo, los *wallets* cumplen SCA nativamente sin expulsar al cliente fuera del navegador, eliminando el groso del 31 % de abandonos.
- **Estrategia inteligente por importe y margen:**
  - *Accesorios (< 150 €, margen 48 %):* prioridad visual a Apple Pay / Google Pay / Bizum + tarjeta tokenizada.
  - *Bicicletas (> 900 €, margen 31 %):* activar financiación instantánea / BNPL (p. ej., 3-12 meses) mostrando la cuota mensual desde la ficha de producto ("desde 110 €/mes"), negociando reparto de coste financiero o modalidades donde el cliente asume un TAE transparente en plazos largos para no comer el 31 % de margen *(verificar normativa vigente de crédito al consumo e información precontractual antes de publicar cuotas)*.
  - *Alquiler por suscripción:* tarjeta tokenizada (MIT — transacciones iniciadas por el comercio tras consentimiento inicial SCA) o domiciliación SEPA para cobros recurrentes automáticos.
- **Control de fraude sin falsos rechazos:** Activar motor antifraude con reglas de puntuación (revisión manual o validación extra solo en bicicletas > 800 € con señales de riesgo como discrepancia de país/IP o entregas en direcciones temporales no verificadas), entrega con código PIN/DNI al mensajero en bicis de alto valor y cobertura de responsabilidad (*liability shift*) mediante 3DS2 correctamente aplicado.
- **Omnicanalidad:** TPV *contactless* NFC en taller/tienda y envío inmediato de **Pay by Link** (compatible con Bizum/Apple Pay/tarjeta) por WhatsApp o email para cerrar reservas telefónicas en 2 minutos en lugar de esperar transferencias IBAN.
- **Impacto económico:** Sobre ~459 intentos móviles al mes (`620 × 74 %`), pasar del 69 % al 88 % de aprobación supone **+87 transacciones recuperadas al mes** sin gastar un euro adicional en publicidad, más las ventas incrementales de bicicletas financiadas y reservas telefónicas recuperadas.

#### Preguntas de reflexión final
1. ¿Cuántas pymes revisan cada semana sus campañas de anuncios pero llevan años sin hacer una compra de prueba real desde el móvil en su propia pasarela de pago?
2. ¿Cómo alinearías a Dirección Financiera (preocupada por las comisiones y el fraude) con Dirección Comercial (enfocada en conversión y AOV) al elegir un nuevo proveedor de pagos?

---

## 7. Evaluación

### Evaluación diagnóstica breve (inicio de sesión, 5 min)
3 preguntas rápidas:
1. ¿Cuál es tu método preferido cuando compras desde tu propio teléfono móvil? (Apple/Google Pay / Bizum / PayPal / Tarjeta manual / BNPL).
2. ¿Sabes actualmente cuál es la tasa exacta de pagos rechazados o abandonados en la pasarela de tu empresa? (Sí / Aproximada / No).
3. ¿Crees que la normativa europea SCA obliga siempre a enviar un SMS o abrir la app del banco en cada compra online? (Sí / No / No estoy seguro).

### Evaluación formativa durante la sesión
- Resultados cronometrados y hallazgos críticos de la *Carrera de obstáculos* (Actividad 1).
- Verificación de cálculos de margen neto en el *Simulador Mix de Pagos* (Actividad 2).
- Calidad del equilibrio comercial, técnico y antifraude en el caso *UrbanBike Mobility S.L.*

### Evaluación sumativa al final del tema
1. **Prueba objetiva breve (30 %):** 10 preguntas sobre *wallets*, tokenización, pagos *contactless*/*Pay by Link*, principios PSD2/SCA y 3DS2, contracargos vs. *false declines*, BNPL y métricas de autorización.
2. **Entregable práctico (70 %):** *Auditoría de Payment UX y Plan de Optimización de Pagos Móviles* aplicado a la empresa real o proyecto del alumnado (Actividad 3), acompañado del cálculo financiero comparativo (Actividad 2).

### Rúbrica de evaluación del entregable práctico

| Criterio | Insuficiente (0 - 4,9) | En desarrollo (5 - 6,9) | Adecuado (7 - 8,9) | Destacado (9 - 10) |
|---|---|---|---|---|
| **1. Auditoría de *Payment UX* móvil (25 %)** | Descripción genérica sin prueba real en smartphone ni detección de fricciones concretas. | Detecta algunos problemas superficiales en el pago, pero omite experiencia móvil o fallos 3DS. | Documenta con rigor tiempos, pasos y fricciones reales en móvil, proponiendo mejoras claras de interfaz y recuperación de fallos. | Presenta auditoría exhaustiva con diseño óptimo de *checkout* móvil, mensajes claros ante rechazos y visión omnicanal (*Pay by Link*/QR). |
| **2. Estrategia de mix de pagos y análisis económico (30 %)** | Selecciona métodos por moda sin analizar ticket medio, margen ni comisiones. | Propone un mix razonable, pero sin cálculo comparativo de margen neto frente a comisiones. | Justifica el mix de pagos según perfil, ticket medio y margen, demostrando viabilidad económica en hoja de cálculo. | Modela impacto neto en aprobación, AOV y margen por segmentos (incluyendo BNPL o pagos locales si aplica) con criterio financiero sobresaliente. |
| **3. Seguridad, fraude y cumplimiento PSD2/SCA (25 %)** | Ignora la seguridad, los contracargos o la normativa SCA/PCI-DSS. | Menciona aspectos generales de seguridad sin conectar con *false declines* ni fricción móvil. | Equilibra correctamente prevención de contracargos, uso de 3DS2/biometría y cumplimiento normativo con verificación actualizada. | Diseña un enfoque integral basado en riesgo que minimiza simultáneamente fraude real y rechazos falsos, cumpliendo estándares vigentes. |
| **4. Cuadro de KPIs de pagos y plan de implantación (20 %)** | No define indicadores ni pasos claros de implantación con IT/finanzas. | Incluye métricas básicas (p. ej., ventas) sin tasa de autorización ni contracargos. | Define 4+ KPIs específicos de pagos y un plan realista de implementación y seguimiento. | Propone un cuadro de mando de pagos nivel dirección (autorización, abandono 3DS, coste efectivo y contracargos) con gobierno continuo. |

### Actividad de autoevaluación y reflexión
Chequeo personal de transferencia (3 minutos):
- *Hoy he comprobado que el mayor punto de fricción en el cobro móvil de mi negocio (o sector) es:* ______________________
- *Una acción de pago móvil (wallet, Bizum, Pay by Link o mejora de mensajes de error) que puedo activar en los próximos 30 días:* ______________________
- *Una métrica de pasarela que pediré esta semana a nuestro banco o proveedor de pagos:* ______________________

---

## 8. Materiales y recursos

### Guion de diapositivas estructurado (slide por slide)

| Slide | Título | Contenido clave y recurso visual | Tiempo aprox. |
|---:|---|---|---:|
| 1 | Portada: Tema 8. Pago por móvil | Título, Bloque 2 (8/9), Global MBA en Dirección Comercial y Ventas. | 2 min |
| 2 | Objetivos del tema | 5 objetivos Bloom: convertir el último clic móvil en una ventaja competitiva segura. | 3 min |
| 3 | Activación: Carrera de obstáculos móvil | Instrucciones para cronometrar un checkout real en smartphone y comparar resultados. | 5 min |
| 4 | El ecosistema de pagos móviles hoy | Mapa visual: Wallets biométricos (Apple/Google Pay), Bizum, tarjeta tokenizada y *contactless* NFC. | 10 min |
| 5 | Omnicanalidad móvil: *Pay by Link*, QR y *SoftPOS* | Cómo cobrar rápido en tienda física, eventos, teléfono y WhatsApp sin perder ventas. | 10 min |
| 6 | Seguridad, PCI-DSS y marco PSD2 / SCA | Los 3 factores de autenticación, 3DS2, exenciones y **aviso obligatorio de verificación normativa vigente**. | 10 min |
| 7 | El dilema: fraude/contracargos vs. *false declines* | Balanza visual entre fraude real y clientes legítimos bloqueados por exceso de rigidez. | 10 min |
| 8 | Métodos alternativos: BNPL y pagos locales | Cuándo compensa el pago fraccionado por ticket/margen y adaptación al exportar en Europa. | 12 min |
| 9 | *Payment UX*: checkout móvil sin fricciones | Diseño en una columna, *express checkout*, teclados numéricos y recuperación elegante de rechazos. | 12 min |
| 10 | Matemáticas y KPIs de la pasarela | Por qué una comisión 0,5 % mayor puede ser mucho más rentable si sube la tasa de aprobación. | 11 min |
| 11 | Caso práctico: UrbanBike Mobility S.L. | Datos del 31 % de caída móvil, contracargos del 1,2 % y falta de financiación/wallets. | 5 min |
| 12 | Talleres aplicados (Act. 2 y Act. 3) | *Simulador Mix de Pagos* y *Plan de Optimización de Pagos Móviles*. | 5 min |
| 13 | Cierre y puente al Tema 9 | Del pago sin fricción a las páginas específicas de alta conversión (*Tema 9. Landing page*). | 5 min |

### Ficha de trabajo: Checklist de Pago Móvil y Seguridad (10 puntos)
Marca **Sí / No / En curso** tras probar tu propia web en un teléfono iOS y un Android:
1. Existen botones de *Express Checkout* (Apple Pay en iOS / Google Pay en Android) o Bizum visibles. [ ]
2. El formulario de pago está embebido sin redirecciones externas lentas o rotas en móvil. [ ]
3. Los campos numéricos (tarjeta, CP, teléfono) despliegan automáticamente teclado numérico. [ ]
4. El proceso 3DS2 funciona correctamente al cambiar a la app del banco y volver al navegador sin vaciar el carrito. [ ]
5. Los métodos de pago alternativos (p. ej., BNPL en tickets > 100 €) se comunican desde la ficha de producto. [ ]
6. Ante un error de pago, el mensaje es claro en español y sugiere un método alternativo en un clic. [ ]
7. La empresa no almacena datos brutos de tarjetas (cumplimiento PCI-DSS vía pasarela certificada). [ ]
8. Existen reglas antifraude proporcionadas que controlan contracargos (< 0,5 %) sin bloquear clientes válidos. [ ]
9. Se monitoriza mensualmente la tasa de autorización desglosada por método y dispositivo. [ ]
10. Se dispone de *Pay by Link* para cobros rápidos por teléfono/WhatsApp cuando aplica. [ ]

### Plantilla o herramienta práctica replicable: Matriz de Diseño del Mix de Pagos

| Segmento / Rango de Ticket | Métodos prioritarios (en orden visual móvil) | Comisión estimada | Objetivo principal | Regla de seguridad / Antifraude |
|---|---|---:|---|---|
| **Ticket bajo (< 60 €)** | 1. Apple/Google Pay · 2. Bizum · 3. Tarjeta | ~0,8 % - 1,6 % | Velocidad (< 20 s) y mínima fricción | Biometría nativa / exención TRA cuando aplique |
| **Ticket medio (60 € - 250 €)** | 1. Wallets / Bizum · 2. Tarjeta 3DS2 · 3. PayPal / BNPL 3x | ~1,2 % - 2,8 % | Equilibrio conversión y AOV | 3DS2 fluido + puntuación de riesgo |
| **Ticket alto (> 250 €)** | 1. Financiación/BNPL · 2. Tarjeta 3DS2 · 3. Wallets / Bizum | ~1,5 % - 4,0 %* | Desbloquear liquidez y elevar cierre | 3DS2 obligatorio + validación en entregas de riesgo |
| **Recurrente / B2B** | 1. Tarjeta tokenizada (MIT) · 2. Domiciliación SEPA · 3. Transferencia/Crédito | Variable | Continuidad sin impagos involuntarios | Mandato inicial SCA + reintentos inteligentes |

*\*Las comisiones mostradas son meramente ilustrativas y deben negociarse y verificarse con proveedores reales.*

### Lecturas y recursos recomendados
- Guías técnicas y comerciales abiertas de **Stripe**, **Adyen** y **Checkout.com** sobre optimización de *checkout*, tasas de autorización, 3DS2 y tokenización.
- Informes del **Banco de España** sobre sistemas de pago minoristas y medios de pago en España.
- Documentación práctica de **PCI Security Standards Council** (resumen para pequeños comercios sobre cumplimiento PCI-DSS SAQ A).

### Vídeos, artículos y fuentes adicionales *(requieren validación previa)*
> **Nota importante para el formador:** Tanto la regulación europea de pagos (PSD2/SCA y evolución hacia PSD3/PSR, además de la Directiva UE 2023/2225 de Crédito al Consumo para BNPL) como las cuotas de mercado de Bizum y *wallets* cambian rápidamente. **Verifique siempre fuentes oficiales vigentes antes de impartir.**
- **Autoridad Bancaria Europea (EBA) y Banco de España:** verificar directrices vigentes sobre autenticación reforzada (SCA), exenciones y evolución regulatoria PSD2 → PSD3/PSR.
- **Informe de Sistemas de Pago / Encuesta sobre uso de efectivo y medios de pago — Banco de España:** consultar última edición publicada para estadísticas de pagos móviles y *contactless* en España.
- **Datos públicos de Bizum (`bizum.es`) e Informe Minsait sobre Tendencias en Medios de Pago:** revisar última edición antes de citar porcentajes de adopción en España.

### Glosario de términos clave

| Término | Definición operativa |
|---|---|
| **3D Secure 2 (3DS2)** | Protocolo de seguridad de pagos con tarjeta que permite intercambio enriquecido de datos y autenticación fluida en móvil conforme a SCA. |
| **BNPL (*Buy Now, Pay Later*)** | Pago fraccionado o aplazado integrado en el proceso de compra online. |
| **Chargeback (Contracargo)** | Reversión forzosa de un cobro tramitada a través del banco del titular por fraude o disputa comercial. |
| **Contactless (NFC)** | Tecnología de pago inalámbrico de corto alcance mediante móvil, reloj inteligente o tarjeta física. |
| **Express Checkout** | Flujo de pago acelerado mediante *wallets* que autocompleta datos y autentica con biometría en segundos. |
| **False Decline (Rechazo falso)** | Denegación errónea de un intento de pago realizado por un cliente legítimo. |
| **Pay by Link** | Enlace único y seguro generado por la pasarela de pago que permite cobrar a un cliente por WhatsApp, correo o SMS. |
| **PCI-DSS** | Estándar internacional de seguridad de datos de la industria de tarjetas de pago. |
| **PSD2 / SCA** | Directiva europea de servicios de pago y requisito de Autenticación Reforzada de Clientes mediante al menos dos factores independientes *(verificar evolución regulatoria vigente)*. |
| **SoftPOS** | Tecnología que convierte un smartphone o tableta estándar con NFC en un terminal de cobro *contactless* sin datáfono adicional. |
| **Tasa de autorización** | Porcentaje de intentos de pago aprobados exitosamente frente al total de intentos procesados. |
| **Tokenización** | Sustitución segura de los datos reales de una tarjeta por un código cifrado reutilizable sin exponer información sensible. |

---

## 9. Adaptaciones

### Sesión presencial (formato híbrido o in-company)
- Durante la Actividad 1, proyectar un cronómetro gigante y registrar en pizarra los tiempos reales obtenidos por el grupo al intentar pagar en sus propios móviles para generar impacto inmediato.
- Simular en vivo un cobro omnicanal mostrando cómo se genera y abre un enlace *Pay by Link* de prueba (en entorno *sandbox* de una pasarela) en menos de 20 segundos.

### Sesión online síncrona (formato principal en directo del Global MBA)
- En la Actividad 1, pedir al alumnado que haga la prueba en su smartphone real mientras está conectado en el ordenador y reporte su tiempo y método más cómodo en el chat simultáneo.
- En el caso *UrbanBike Mobility S.L.*, trabajar en *breakout rooms* de 4 personas utilizando una hoja compartida con el simulador de ingresos recuperados al subir la aprobación móvil del 69 % al 88 %.

### Sesión asíncrona (trabajo autónomo en campus virtual)
- Grabar 4 microvídeos (10-12 min) incluyendo una demostración grabada desde pantalla de móvil comparando un *checkout* lento con redirección 3DS frente a un *express checkout* biométrico.
- Solicitar en el foro de la Actividad 1 que cada participante comparta los segundos cronometrados y la principal fricción detectada en el pago móvil de su empresa (o de una tienda conocida).
- Evaluar mediante la entrega del *Plan de Optimización de Pagos Móviles* + *Simulador Mix de Pagos* y el test objetivo en la plataforma.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Integra la operativa de checkout del **Tema 1**, la pasarela del **Tema 2**, el entorno *mobile-first* del **Tema 3**, la analítica de abandono del **Tema 5**, la UX del **Tema 6** y protege la inversión publicitaria captada en el **Tema 7**.
- **Competencias que desarrolla:** Gestión comercial y financiera de medios de pago, optimización de conversión en el último tramo del embudo, gestión del riesgo de fraude/cumplimiento normativo y diseño de cobros omnicanal.
- **Conexión con el tema anterior y posterior:**
  - *Tema anterior (Bloque 2, Tema 7 — Campañas digitales):* Garantiza que el tráfico móvil captado con presupuesto publicitario en el Tema 7 no se pierda por rechazos técnicos ni falta de métodos móviles en el momento de pagar.
  - *Tema posterior (Bloque 2, Tema 9 — Landing page):* Para completar el ciclo del Bloque 2, el Tema 9 se enfoca en el primer punto de contacto tras el clic de campaña: diseñar páginas de aterrizaje de altísima conversión que conecten el anuncio con el formulario o la compra.
- **Evidencia de aprendizaje que dejará el alumnado:** Una **Auditoría de *Payment UX*, Simulación Financiera del Mix de Pagos y Plan de Optimización de Pagos Móviles** listo para negociar con proveedores de pasarela y alinear dirección comercial, financiera e IT.

---

## Siguientes pasos para el formador

1. **Verificar actualización normativa antes de clase:** Comprobar el estado vigente de PSD2/SCA, el avance del paquete europeo PSD3/PSR y la transposición española de la Directiva UE 2023/2225 de Crédito al Consumo aplicable a servicios BNPL.
2. **Actualizar cifras de adopción de pagos en España:** Revisar las últimas notas públicas del Banco de España y de Bizum para contextualizar el peso real de los pagos móviles y *contactless*.
3. **Preparar 2 tiendas reales de ejemplo** (una con *express checkout* impecable y otra con fricción en móvil) para la Actividad 1, comprobando el día anterior que siguen operando igual.
4. **Subir al aula virtual** el *Simulador Mix de Pagos* (hoja de cálculo), la *Checklist de Pago Móvil* y el caso *UrbanBike Mobility S.L.*
5. **Anticipar el cierre del Bloque 2 (Tema 9):** Pedir al alumnado que traiga para la última sesión del bloque un anuncio y la página de aterrizaje (*landing page*) actual a la que dirige su empresa (o un competidor).
