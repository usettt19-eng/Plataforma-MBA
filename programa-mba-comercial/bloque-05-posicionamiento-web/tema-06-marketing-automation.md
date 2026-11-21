# Tema 6. Marketing automation

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Programa** | Global MBA en Dirección Comercial y Ventas (90 ECTS · 14 meses) |
| **Título del tema** | Tema 6. Marketing automation |
| **Bloque y posición dentro del programa** | Bloque 5: Posicionamiento web · Tema 6 de 7 |
| **Modalidad** | 100 % online (sesiones síncronas y trabajo asíncrono en campus virtual, adaptable a formato presencial/híbrido *in-company*) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Directores comerciales, gerentes de ventas, emprendedores y profesionales de marketing y desarrollo de negocio |
| **Nivel de dificultad** | Intermedio |
| **Prerrequisitos** | Haber completado los Temas 1 a 5 del Bloque 5 (especialmente *Automatizar ventas / CRM* y *Growth Hacking*) y comprender la diferencia entre canales propios y pagados |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado será capaz de diseñar, segmentar, personalizar y medir un ecosistema de *marketing automation* y *lead nurturing* orientado a conversión, fidelización y recompra —garantizando la entregabilidad técnica y el estricto cumplimiento de la normativa vigente de protección de datos y comunicaciones comerciales (RGPD/LOPDGDD/LSSI-CE)—. |

---

## 2. Objetivos de aprendizaje

Al completar esta unidad formativa, el alumnado será capaz de:

1. **Diferenciar** el envío masivo tradicional de boletines (*batch and blast*) frente al *marketing automation* basado en comportamiento, eventos disparadores (*triggers*) y segmentación dinámica. *(Nivel de Bloom: Comprender)*
2. **Clasificar** una base de datos comercial mediante criterios de segmentación dinámica (perfil, comportamiento digital, fase del ciclo de vida y modelo RFM) para entregar mensajes pertinentes en el momento oportuno. *(Nivel de Bloom: Comprender / Aplicar)*
3. **Diseñar** flujos automatizados de *lead nurturing*, bienvenida (*onboarding*), recuperación de carritos/oportunidades y fidelización integrando lógica condicional (*si/entonces*), personalización y *scoring* de marketing. *(Nivel de Bloom: Aplicar / Crear)*
4. **Analizar** el rendimiento y la salud técnica de campañas automatizadas (entregabilidad, autenticación del dominio, tasa de apertura con cautela por privacidad, CTR, tasa de conversión, bajas y retorno atribuido). *(Nivel de Bloom: Analizar)*
5. **Evaluar** el cumplimiento normativo y los riesgos legales en automatización de marketing y *email marketing* en España y la UE (consentimiento informado, doble *opt-in*, derecho de oposición/baja y trazabilidad RGPD/LSSI-CE). *(Nivel de Bloom: Evaluar)*
6. **Construir** un mapa completo de automatizaciones de ciclo de vida y un cuadro de mando de medición para una pyme en transformación digital, maximizando los ingresos procedentes de la base de datos propia. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1 Fundamentos del *marketing automation*, disparadores y marco legal (RGPD/LSSI-CE)

#### Explicación breve y clara
La mayoría de los visitantes y contactos que captan nuestras campañas de SEO y SEM no están listos para comprar hoy, pero muchos sí lo estarán dentro de 30, 90 o 180 días. El **marketing automation** permite mantener viva, útil y personalizada la relación con miles de contactos a la vez, reaccionando automáticamente a su comportamiento real (descargar una guía, visitar precios, comprar un producto, dejar de abrir correos durante 90 días). Sin embargo, en España y la Unión Europea, automatizar comunicaciones sin base legal sólida es un riesgo financiero y reputacional grave: la excelencia técnica y el cumplimiento jurídico van siempre de la mano.

#### Conceptos clave
- **De envíos masivos a automatización orientada a eventos:** sustituir el mismo correo igual para todos los martes por flujos activados por **disparadores (*triggers*)** del usuario (suscripción, descarga, compra, abandono, aniversario, inactividad).
- **Arquitectura de un flujo (*workflow*):** `Disparador (Trigger)` → `Filtro / Segmento` → `Espera inteligente (Delay)` → `Bifurcación condicional (If/Else)` → `Acción (Email, SMS/WhatsApp consentido, actualización de scoring, aviso al CRM)` → `Objetivo de salida (Goal)`.
- **Marketing Automation vs. Sales Automation (Tema 4):** marketing automation educa, madura y reactiva a escala en TOFU/MOFU y posventa; la automatización de ventas gestiona el cierre consultivo 1 a 1 en BOFU. Ambos deben sincronizarse en el CRM.
- **Pilares de cumplimiento normativo en España/UE:** base jurídica válida (consentimiento expreso, libre, específico, informado e inequívoco, o excepción estricta de relación contractual previa para productos similares conforme a la normativa aplicable), doble *opt-in* recomendado como prueba de consentimiento, identificación clara del remitente y enlace de baja en un clic visible y operativo en todo envío.

#### Definiciones necesarias
- ***Marketing Automation*:** uso de plataformas y reglas lógicas para ejecutar, personalizar y medir acciones de comunicación y maduración de contactos de forma automática en función de su perfil y comportamiento.
- **Disparador (*Trigger*):** evento específico (enviar un formulario, visitar una página clave, abandonar un carrito, completar un pedido) que inicia automáticamente un flujo de trabajo.
- **Doble *opt-in*:** procedimiento de confirmación en dos pasos en el que, tras rellenar un formulario, el usuario recibe un correo para confirmar explícitamente su dirección y consentimiento antes de incorporarse a la lista activa.

> **Advertencia obligatoria de verificación normativa (RGPD / LOPDGDD / LSSI-CE):** Toda estrategia de *marketing automation*, captación de bases de datos, segmentación conductual, *lead scoring*, uso de píxeles de seguimiento en correos y comunicaciones comerciales electrónicas (email, SMS, mensajería) en España y la UE está estrictamente regulada por el **Reglamento General de Protección de Datos (RGPD)**, la **Ley Orgánica de Protección de Datos y Garantía de los Derechos Digitales (LOPDGDD)**, la **Ley de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE)** y las resoluciones y guías actualizadas de la **Agencia Española de Protección de Datos (AEPD)**. **Antes de impartir este tema o activar flujos en una empresa real, es imprescindible verificar la vigencia de la normativa y validar las cláusulas, bases legales y procesos con un Delegado de Protección de Datos (DPD) o asesoría jurídica especializada.**

#### Ejemplo práctico realista
Una bodega familiar de Ribera del Duero en transformación digital dispone de 18.500 contactos acumulados durante años (compradores online, visitantes de enoturismo, tarjetas de ferias y suscriptores antiguos) a los que solo envía un correo masivo idéntico en Navidad. Antes de automatizar nada, audita legalmente su base de datos con apoyo jurídico para separar contactos con consentimiento verificable o relación contractual reciente de contactos antiguos sin base válida (que excluye o regulariza conforme a ley), implanta doble *opt-in* en su web y crea 4 flujos disparados por eventos reales (bienvenida, abandono de carrito, poscompra/recompra y posvisita de enoturismo).

#### Errores frecuentes
- Cargar listas compradas, tarjetas de visita antiguas o contactos extraídos de Internet en una plataforma de automatización sin base jurídica válida (infracción grave de LSSI-CE/RGPD y destrucción inmediata de la reputación del dominio).
- Automatizar flujos que se solapan entre sí, bombardeando a un mismo cliente con cuatro correos en la misma semana (falta de reglas de frecuencia o *frequency capping*).
- Comprar una suite de *marketing automation* muy cara sin tener primero una estrategia de contenidos ni la base de datos mínimamente limpia.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué diferencia operativa y de resultados existe entre enviar una *newsletter* idéntica a toda la lista y activar flujos disparados por comportamiento?
2. ¿Qué requisitos mínimos de consentimiento y derecho de baja deben verificarse conforme al RGPD y la LSSI-CE antes de lanzar una automatización?
3. ¿Cómo se evita que un mismo contacto reciba simultáneamente correos de tres flujos automatizados distintos?

---

### 3.2 Segmentación dinámica, personalización y *scoring* de marketing

#### Explicación breve y clara
La relevancia es el motor económico del *marketing automation*: enviar el mensaje adecuado a la persona adecuada en el momento exacto multiplica los clics y reduce las bajas. Frente a las listas estáticas tradicionales (archivos CSV que caducan al día siguiente), la **segmentación dinámica** actualiza automáticamente los grupos en tiempo real según cambian los atributos y acciones de cada usuario. Combinada con contenido dinámico y *scoring* de marketing, permite tratar de manera distinta a un cliente VIP recurrente, a un curioso recién llegado y a un contacto B2B que acaba de visitar la página de tarifas.

#### Conceptos clave
- **Listas estáticas vs. segmentos dinámicos:** los segmentos dinámicos se recalculan solos mediante reglas (ej.: *«Ha comprado vino reserva al menos 2 veces en los últimos 12 meses Y no ha comprado en los últimos 90 días»*).
- **Segmentación RFM (Recencia, Frecuencia y Valor Monetario):** modelo clásico y sumamente eficaz en ecommerce y B2B recurrente para clasificar clientes en Campeones/VIP, Leales, Potenciales, En riesgo de fuga e Inactivos.
- **Personalización real más allá del «Hola [Nombre]»:** bloques de contenido dinámico según sector, categoría de producto vista, ubicación geográfica, etapa del embudo o historial de compra.
- **Marketing *Scoring* y sincronización con ventas:** sumar puntos por interacción sostenida con flujos de *nurturing* y enviar una alerta automática al CRM del equipo comercial únicamente cuando el contacto alcanza madurez comercial (umbral MQL → SQL).

#### Definiciones necesarias
- **Segmentación dinámica:** agrupación automatizada y viva de contactos que entran o salen de un segmento en tiempo real según cumplen o dejan de cumplir criterios de perfil y comportamiento.
- **Modelo RFM:** técnica de segmentación de clientes basada en tres variables históricas de compra: **Recencia** (cuándo compró por última vez), **Frecuencia** (cuántas veces ha comprado) y **Valor Monetario** (cuánto ha gastado).
- **Contenido dinámico (*Dynamic Content*):** módulos dentro de un correo o *landing page* que cambian automáticamente según el segmento o los datos conocidos del destinatario.

#### Ejemplo práctico realista
Una empresa de formación y suministro de equipamiento para clínicas veterinarias segmenta dinámicamente su base de 6.000 contactos en tres perfiles de negocio (clínicas pequeñas, hospitales 24 h y especialistas equinos) y cruza esa variable con su comportamiento RFM. En su campaña mensual, utiliza un único correo con bloques de contenido dinámico: las clínicas pequeñas ven consumibles y packs de ahorro; los hospitales 24 h ven equipamiento de diagnóstico y mantenimiento preventivo; y los clientes VIP (alta recencia y gasto) reciben acceso anticipado sin descuento agresivo, mientras que los clientes «en riesgo» (sin pedidos en 120 días) entran en un flujo de reactivación personalizado.

#### Errores frecuentes
- Crear 40 microsegmentos con 15 contactos cada uno que resultan imposibles de mantener y carecen de volumen para generar retorno.
- Personalizar usando campos mal depurados (mayúsculas aleatorias, nombres vacíos o intereses desactualizados), generando desconfianza inmediata.
- Aplicar descuentos generalizados a toda la base de datos (incluidos los clientes VIP que habrían comprado a precio completo), destruyendo margen innecesariamente.

#### Preguntas que el alumnado debería poder responder
1. ¿Cómo funciona la segmentación RFM y qué estrategia diferente conviene aplicar a un cliente «VIP» frente a un cliente «en riesgo»?
2. ¿Por qué la personalización basada en comportamiento reciente suele convertir mucho mejor que la basada solo en datos demográficos?
3. ¿Cómo se coordina el *scoring* de *marketing automation* con el *pipeline* comercial del CRM visto en el Tema 4?

---

### 3.3 Flujos esenciales de *lead nurturing* y ciclo de vida del cliente

#### Explicación breve y clara
En lugar de intentar automatizar toda la empresa el primer día, una pyme inteligente implanta primero los **5 o 6 flujos maestros (*evergreen workflows*)** que trabajan 24 horas al día generando ingresos recurrentes y madurando prospectos. El ***lead nurturing* (maduración de prospectos)** acompaña a los contactos que aún no están listos para comprar con educación útil, casos de prueba y resolución de objeciones, de modo que cuando surja la necesidad de compra nuestra marca sea la opción natural y de confianza.

#### Conceptos clave
- **Los 6 flujos prioritarios en pymes y negocios digitales:**
  1. **Serie de Bienvenida (*Welcome Series*):** 3–4 correos tras suscripción o descarga de *lead magnet*; establece expectativas, entrega valor inmediato, segmenta intereses mediante clics (*progressive profiling*) y presenta la primera oferta suave.
  2. ***Lead Nurturing* B2B / Alto Ticket:** secuencia educativa de 4–6 semanas (problema → solución → caso de éxito → resolución de objeciones → invitación a diagnóstico/demo) con ramificaciones según interacción.
  3. **Recuperación de carrito o formulario abandonado:** 2–3 impactos escalonados (1 h recordatorio útil, 24 h prueba social/garantías, 72 h incentivo condicional solo si procede por margen).
  4. **Poscompra y *Onboarding* de cliente:** instrucciones de uso, consejo para alcanzar el Momento Ajá, solicitud de reseña en el momento de satisfacción y venta cruzada lógica (*cross-sell*).
  5. **Reposición / Renovación predictiva:** recordatorio automático calculado según el ciclo medio de consumo del producto (ej. a los 45 días de comprar un lote de vino o consumible) o 60 días antes de vencer un contrato anual.
  6. **Reactivación (*Win-back*) y limpieza de lista (*Sunset Flow*):** intentar recuperar contactos inactivos tras 90–180 días sin interacción y, si no responden, suprimirlos de los envíos habituales para proteger la entregabilidad.

#### Definiciones necesarias
- ***Lead Nurturing*:** proceso automatizado y planificado de acompañamiento a prospectos mediante contenidos relevantes y personalizados para avanzar en su nivel de confianza y madurez hasta la compra.
- **Perfilado progresivo (*Progressive Profiling*):** técnica para recoger información adicional del contacto poco a poco (mediante clics en correos o formularios cortos sucesivos) en lugar de exigir muchos datos el primer día.
- **Flujo de despedida (*Sunset Policy / Sunset Flow*):** automatización que identifica contactos crónicamente inactivos, les ofrece una última oportunidad para confirmar si desean seguir suscritos y los da de baja de envíos comerciales si no interactúan.

#### Ejemplo práctico realista
En **Bodegas Valdeluz & Club Enológico**, cuando un visitante realiza una cata de enoturismo en la bodega y escanea un QR para recibir la guía de maridaje (con consentimiento expreso verificado), se activa un flujo de 4 correos en 45 días: Día 0 (guía de maridaje + foto de la experiencia), Día 7 (historia del viñedo y ficha de los vinos que probó), Día 21 (invitación exclusiva a probar el estuche degustación online con envío gratuito en primer pedido) y Día 42 (si compró, entra en el flujo del Club de Suscripción trimestral; si no compró, recibe una recomendación estacional suave).

#### Errores frecuentes
- Diseñar flujos de *nurturing* en los que todos los correos son «Compra ahora / Última oportunidad» sin aportar educación, confianza ni entretenimiento.
- No configurar metas de salida (*Goals*): seguir enviando correos de «Completa tu compra» a un cliente que ya pagó hace tres horas.
- Conservar indefinidamente a miles de suscriptores que llevan dos años sin abrir un solo correo, provocando que Gmail y Outlook envíen todos los correos de la empresa a la carpeta de *spam*.

#### Preguntas que el alumnado debería poder responder
1. ¿Cuáles son los 3 primeros flujos automatizados que priorizarías al arrancar *marketing automation* en una pyme con recursos limitados?
2. ¿Cómo funciona el perfilado progresivo para enriquecer la segmentación sin aumentar la fricción en el formulario inicial?
3. ¿Por qué eliminar o pausar contactos crónicamente inactivos (*Sunset Flow*) suele aumentar las ventas totales del *email marketing*?

---

### 3.4 Entregabilidad técnica y medición real de campañas automatizadas

#### Explicación breve y clara
El mejor diseño de *nurturing* fracasa si los correos acaban en la bandeja de correo no deseado (*spam*) o en pestañas invisibles. La **entregabilidad** depende hoy tanto de la higiene de la base de datos como de requisitos técnicos obligatorios de autenticación de dominio exigidos por los grandes proveedores de correo (Gmail, Yahoo, Microsoft). En cuanto a la medición, un director comercial actualizado debe saber que la **tasa de apertura** ya no es una métrica fiable por sí sola (debido a mecanismos automáticos de protección de privacidad de los clientes de correo, como *Apple Mail Privacy Protection*), por lo que el control real debe centrarse en **clics reales (CTR/CTOR), conversiones, ingresos por destinatario, bajas y quejas de *spam***.

#### Conceptos clave
- **Autenticación técnica del dominio (imprescindible):** registros DNS **SPF**, **DKIM** y **DMARC**, además de cabecera de baja en un clic (*one-click unsubscribe*) y vigilancia de la tasa de quejas de *spam* (los grandes proveedores exigen mantenerla muy baja; verificar umbrales vigentes en sus políticas oficiales).
- **Calentamiento de dominio/IP (*Warm-up*):** aumentar progresivamente el volumen de envíos al estrenar plataforma o dominio, empezando por los contactos más comprometidos.
- **Métricas fiables de rendimiento en *marketing automation*:**
  - *Tasa de entrega* y *rebotes duros/blandos* (salud técnica de la lista).
  - *CTR (Click-Through Rate)* sobre entregados (más fiable hoy que la tasa de apertura).
  - *Tasa de conversión del flujo* e *Ingresos por correo enviado (RPE)* o *MQL/SQL generados*.
  - *Tasa de bajas (Unsubscribe)* y *tasa de quejas de spam* (métricas de alerta de saturación o mala segmentación).
  - *Porcentaje de facturación atribuida a flujos automatizados frente a campañas puntuales.*
- **Atribución prudente en email:** distinguir entre conversión tras clic real y atribución laxa por «apertura» (que suele inflar artificialmente los ingresos que se atribuyen las herramientas de email).

#### Definiciones necesarias
- **Entregabilidad (*Deliverability*):** capacidad real de que un correo electrónico llegue a la bandeja de entrada principal del destinatario en lugar de ser rechazado o filtrado como *spam*.
- **SPF, DKIM y DMARC:** protocolos estándar de autenticación DNS que verifican la identidad del remitente y protegen el dominio corporativo frente a suplantaciones (*spoofing*), siendo esenciales para llegar a bandeja de entrada.
- **RPE (*Revenue Per Email*):** ingresos medios generados por cada correo entregado en una campaña o flujo automatizado (`Ingresos atribuidos / Correos entregados`).

#### Ejemplo práctico realista
Una tienda online de cosmética natural observa que su tasa de apertura marca un aparente 46 %, pero las ventas por correo han caído a la mitad en tres meses. Una auditoría descubre dos problemas: (1) el 46 % de aperturas está inflado por sistemas automáticos de privacidad de correo, mientras el CTR real cayó del 2,4 % al 0,6 %; y (2) la empresa no tenía configurado el registro DMARC y seguía enviando promociones diarias a 9.000 contactos inactivos, provocando que gran parte de sus envíos en Gmail cayeran en *spam*. Tras autenticar SPF/DKIM/DMARC, depurar contactos inactivos con un *Sunset Flow* y reducir la frecuencia a envíos segmentados por tipo de piel y recencia, el CTR sube al 2,9 % y los ingresos por correo se triplican.

#### Errores frecuentes
- Juzgar el éxito de un flujo automatizado únicamente por la «tasa de apertura» sin vigilar CTR, conversiones reales ni ingresos atribuidos por clic.
- Cambiar de proveedor de correo y enviar el primer día a toda la base histórica de 20.000 contactos sin calentamiento previo ni autenticación DNS.
- Aceptar sin cuestionar los ingresos atribuidos por «ventana de apertura de 5 días» de la herramienta de email marketing, duplicando atribución con Google Ads o tráfico directo.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué la tasa de apertura ha perdido fiabilidad como indicador principal y qué métricas deben sustituirla en el cuadro de mando directivo?
2. ¿Qué papel desempeñan los protocolos SPF, DKIM y DMARC en la entregabilidad comercial?
3. ¿Cómo se distingue una atribución rigurosa (por clic) de una atribución inflada (por apertura) al evaluar el ROI del *marketing automation*?

---

## 4. Metodología didáctica

Secuencia formativa de **4 horas (240 minutos)** diseñada para que directivos y emprendedores dominen el diseño estratégico, operativo y legal de flujos automatizados orientados a ingresos.

| Fase | Tiempo exacto | Qué hace el formador | Qué hace el alumnado |
|---|---:|---|---|
| **1. Apertura y activación** | 20 min | Conecta los experimentos validados del Tema 5 con su escalado automatizado y lanza la Actividad 1 («Auditoría exprés de mi base de datos y últimos 3 correos recibidos»). | Evalúa el estado actual de su base de datos propia (tamaño, segmentación, consentimiento y uso real) y analiza un correo promocional reciente desde la óptica del comprador. |
| **2. Exposición breve / microlearning (Bloque A: Fundamentos, cumplimiento RGPD/LSSI y segmentación RFM)** | 35 min | Explica (diapositivas 3–8) arquitectura de *workflows*, requisitos clave de RGPD/LOPDGDD/LSSI-CE (con advertencia expresa de validación jurídica), segmentación dinámica, modelo RFM y personalización. | Clasifica 4 perfiles de clientes en una matriz RFM rápida y verifica en una *checklist* qué prácticas de captación de correos son válidas o riesgosas. |
| **3. Exposición breve / microlearning (Bloque B: 6 flujos clave, entregabilidad y medición real)** | 35 min | Expone (diapositivas 9–13) los 6 flujos *evergreen* (bienvenida, *nurturing*, carrito/abandono, poscompra, reposición, *sunset*), autenticación SPF/DKIM/DMARC y lectura crítica de métricas (CTR, RPE, atribución por clic). | Identifica en un informe real simulado los síntomas de un problema de entregabilidad y detecta una trampa de atribución por apertura. |
| **4. Análisis de caso práctico** | 45 min | Presenta el caso **Bodegas Valdeluz & Club Enológico** (sección 6), reparte los grupos en salas reducidas y orienta la auditoría legal, de entregabilidad, segmentación RFM y potencial de ingresos. | Analiza la base de 18.500 contactos del caso en equipo, depura legal y técnicamente los segmentos utilizables y estima el potencial económico de implantar flujos automatizados. |
| **5. Actividad práctica de aplicación y transferencia** | 55 min | Modera la Actividad 2 (Diseño de arquitectura de 3 flujos + RFM para *Bodegas Valdeluz*, 25 min) y la Actividad 3 (Mapa de ciclo de vida y diagrama de 1 flujo completo para su propia empresa, 30 min). | Primero dibuja el árbol lógico (*trigger → condición → acción → meta*) de los flujos del caso; después diseña el mapa de automatización y un flujo completo aplicable a su negocio. |
| **6. Discusión guiada y revisión de flujos** | 30 min | Revisa en plenario 3 diagramas de flujo voluntarios, comprobando metas de salida, control de frecuencia (*frequency capping*), cumplimiento RGPD/LSSI y coherencia con ventas. | Presenta su flujo automatizado, detecta posibles bucles infinitos o solapamientos en los diseños de sus compañeros y afina sus KPI de medición. |
| **7. Síntesis, evaluación sumativa y cierre** | 20 min | Resume las 5 reglas de oro del *marketing automation* rentable y legal, aplica la prueba sumativa en campus, guía la autoevaluación y conecta con el Tema 7 (Psicología en marketing). | Completa el test situacional, realiza su autoevaluación y define el primer flujo *evergreen* que implementará en su empresa. |
| **TOTAL** | **240 min** | **4 horas exactas** | **Diseño práctico con rigor técnico y legal** |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Radiografía de tu base de datos y experiencia como suscriptor

- **Nombre:** ¿Activo dormido o máquina de ingresos?
- **Objetivo:** Tomar consciencia del valor infrautilizado de la base de datos propia y detectar los errores más frecuentes en correos automatizados reales.
- **Instrucciones para el alumnado:**
  1. Abre tu bandeja de entrada personal y localiza el último correo comercial o automatizado que hayas recibido de una marca.
  2. Responde en 3 líneas en el tablero colaborativo: (a) ¿te resultó relevante o genérico?, (b) ¿estaba claramente personalizado según tu comportamiento reciente?, (c) ¿te invitaba a un siguiente paso útil o a darte de baja?
  3. Evalúa con semáforo la base de datos de tu empresa: *tamaño aproximado*, *¿está segmentada dinámicamente?*, *¿tienes prueba verificable de consentimiento RGPD/LSSI?*, *¿qué % de facturación genera hoy?*
- **Materiales necesarios:** Acceso al propio correo y pizarra digital colaborativa.
- **Tiempo estimado:** 15 minutos (Fase 1).
- **Rol del formador:** Contrastar las malas prácticas que detestamos como consumidores con las que muchas empresas replican por inercia al automatizar.
- **Producto o entregable esperado:** Diagnóstico breve de la base de datos propia y valoración crítica de un correo real.
- **Criterios de éxito:** El alumno identifica con claridad al menos una oportunidad de monetización dormida en su base de datos y un riesgo técnico o legal a revisar.

---

### Actividad 2 (Aplicación): Arquitectura de automatización y limpieza legal de Bodegas Valdeluz

- **Nombre:** Despertar los 18.500 contactos de Bodegas Valdeluz sin caer en *spam* ni sanciones.
- **Objetivo:** Aplicar criterios de auditoría legal (RGPD/LSSI), higiene de entregabilidad, segmentación RFM y diseño de flujos condicionales sobre una pyme en transformación digital.
- **Instrucciones para el alumnado:**
  1. En equipos de 4–5 personas, revisad la tabla de la base de datos y métricas del caso **Bodegas Valdeluz & Club Enológico** (sección 6).
  2. Clasificad los 5 grupos de contactos existentes según su viabilidad legal y técnica (cuáles se pueden activar de inmediato, cuáles requieren validación jurídica/reactivación cuidadosa y cuáles deben excluirse).
  3. Diseñad la lógica detallada (*Trigger → Espera → Bifurcación If/Else → Contenido → Meta de salida*) de **2 flujos prioritarios** (por ejemplo: *Posvisita de Enoturismo → 1.ª compra online* y *Reposición predictiva / Club Enológico según RFM*).
  4. Definid las 3 medidas técnicas de entregabilidad y 4 KPI de seguimiento directivo.
- **Materiales necesarios:** Datos del caso práctico y plantilla de diagrama de flujo (*workflow*).
- **Tiempo estimado:** 25 minutos (Fase 5).
- **Rol del formador:** Garantizar que ningún equipo proponga enviar correos masivos a contactos antiguos sin consentimiento verificable (ej. tarjetas de ferias de hace 5 años) y comprobar la existencia de metas de salida.
- **Producto o entregable esperado:** Plan de depuración de base de datos + diagrama lógico de 2 flujos automatizados + cuadro KPI.
- **Criterios de éxito:** Decisión jurídicamente prudente (con verificación RGPD/LSSI), correcta segmentación RFM, lógica condicional sin solapamientos y métricas orientadas a ingresos reales por clic.

---

### Actividad 3 (Transferencia a la realidad laboral): Mapa de automatizaciones de ciclo de vida y diagrama de tu flujo #1

- **Nombre:** Mi ecosistema de *Marketing Automation* mínimo viable.
- **Objetivo:** Diseñar un mapa de automatizaciones priorizado y el guion técnico-comercial completo de 1 flujo *evergreen* listo para implementar en la empresa o proyecto del alumno.
- **Instrucciones para el alumnado:**
  1. Cumplimenta la **Plantilla de Arquitectura de Marketing Automation** (sección 8) adaptada a tu negocio:
     - Define tus **3 segmentos dinámicos prioritarios** (usando perfil + comportamiento o RFM).
     - Selecciona los **3 flujos *evergreen*** de mayor impacto para tu empresa en los próximos 90 días y ordénalos por prioridad.
     - Desarrolla paso a paso el **Flujo #1** (mínimo 4 correos/acciones en 15–30 días): disparador exacto, tiempos de espera, 1 bifurcación condicional (*If/Else*), asunto y propuesta de valor de cada correo, regla de *scoring* o aviso a CRM y meta de salida (*Goal*).
     - Incluye tu *checklist* de **entregabilidad (SPF/DKIM/DMARC)** y **verificación normativa (RGPD/LSSI-CE/baja en 1 clic)**.
  2. Prepárate para presentar el diagrama de tu Flujo #1 en 3 minutos en la revisión entre pares.
- **Materiales necesarios:** Plantilla editable de *Arquitectura de Marketing Automation* (sección 8).
- **Tiempo estimado:** 30 minutos en sesión (con cierre para entrega evaluable en campus).
- **Rol del formador:** Revisar que el flujo tenga foco en un único objetivo comercial, evite fatiga por frecuencia y conecte limpiamente con el equipo de ventas si es B2B.
- **Producto o entregable esperado:** Documento ejecutable con segmentación dinámica, mapa de 3 flujos, diagrama completo del Flujo #1 y *checklist* legal/técnico.
- **Criterios de éxito:** Segmentación accionable, bifurcación lógica coherente, valor real en cada envío, verificación explícita RGPD/LSSI y KPI orientados a conversión real.

---

## 6. Caso práctico

### Contexto empresarial
**Bodegas Valdeluz & Club Enológico** es una bodega familiar de Ribera del Duero (32 empleados, facturación anual 4,6 M€). Aunque el 78 % de su negocio proviene aún de distribución tradicional y hostelería, en los últimos tres años ha impulsado su canal directo al consumidor (**D2C**): tienda online (ticket medio **88 €**, margen bruto directo del **58 %**, es decir, **51 € de margen bruto por pedido**) y experiencias presenciales de **enoturismo** (visitas y catas en bodega, 6.200 visitantes al año).

La nueva dirección comercial digital quiere que el canal D2C y el futuro **Club Enológico por suscripción trimestral** (110 €/trimestre) crezcan reduciendo la dependencia de la publicidad pagada, aprovechando la base de datos acumulada de **18.500 contactos**.

### Situación o problema
Hasta hoy, la bodega solo envía 4 campañas masivas al año (Navidad, Día del Padre, verano y Black Friday) con el mismo correo genérico de «15 % de descuento en toda la tienda» para los 18.500 contactos a la vez. Los resultados han empeorado drásticamente: la última campaña navideña registró un **8,4 % de rebotes**, **0,7 % de quejas de *spam*** (un nivel alarmante para los proveedores de correo), un CTR de apenas **0,55 %** y más de 400 bajas en un solo día. Además, nadie recuerda de dónde salió gran parte de esos 18.500 correos ni si tienen consentimiento válido, el dominio no tiene configurado **DMARC** y no existe ningún flujo automático tras visitar la bodega o abandonar un carrito en la web.

### Datos disponibles (radiografía de la base de datos de 18.500 contactos)

| Segmento actual en la base de datos | N.º contactos | Origen y estado legal/técnico detectado | Comportamiento reciente |
|---|---:|---|---|
| **G1. Compradores tienda online últimos 18 meses** | 3.200 | Compras verificadas en ecommerce con política de privacidad y casilla informada | 420 han comprado ≥ 3 veces (VIP); 1.980 compraron solo 1 vez; 800 sin compra en > 9 meses |
| **G2. Visitantes de enoturismo últimos 12 meses** | 2.600 | Registrados al reservar cata online; 2.100 marcaron casilla de consentimiento comercial expreso; 500 NO la marcaron | Nunca recibieron correo posterior a la visita; solo un 4 % ha comprado después online |
| **G3. Suscriptores web (guía de maridaje / *newsletter*)** | 2.900 | Captados por formulario web con consentimiento, pero sin doble *opt-in* | 1.300 interactuaron en los últimos 6 meses; 1.600 no hacen clic hace > 12 meses |
| **G4. Contactos antiguos de ferias y tarjetas (2018–2021)** | 6.400 | Introducidos manualmente en Excel hace años sin registro verificable de consentimiento RGPD/LSSI | Altísima tasa de rebotes y quejas de *spam* en el último envío |
| **G5. Correos de concursos antiguos y listas mixtas B2B/B2C** | 3.400 | Mezcla de sorteos en redes sin prueba clara de consentimiento y correos genéricos `info@` | Casi nula conversión y principal fuente de bajas |

**Datos adicionales del ecommerce:**
- **Abandonos de carrito online:** 340 carritos abandonados al mes (valor medio 92 €); actualmente no se envía ningún recordatorio.
- **Ciclo medio de recompra** de clientes habituales: cada **75 días**.
- **Infraestructura técnica:** SPF básico configurado, sin DKIM personalizado ni registro DMARC; herramientas de ecommerce y correo no están sincronizadas.

### Preguntas de análisis
1. ¿Por qué los envíos masivos actuales están destruyendo la reputación del dominio y generando un riesgo legal grave bajo RGPD/LSSI-CE?
2. De los 18.500 contactos, ¿cuántos contactos aproximadamente constituyen hoy la **base limpia y legalmente activable** (tras consulta/validación jurídica) y qué debe hacerse con G4, G5 y los 500 no consentidos de G2?
3. ¿Cómo aplicarías el modelo **RFM** sobre G1 para dejar de regalar un 15 % de descuento indiscriminado a clientes VIP que comprarían a precio completo?
4. ¿Qué 4 flujos automatizados generarían mayor impacto económico en los próximos 90 días y cuánto margen adicional podrían aportar solo recuperando un 10 % de carritos abandonados y convirtiendo un 12 % de visitantes de enoturismo consentidos?

### Tarea a realizar
Elaborad en equipo un **Plan de Rescate y Automatización D2C (90 días)** para Bodegas Valdeluz que contenga:
1. **Plan de saneamiento legal y técnico (Mes 1):** decisión sobre cada segmento (G1–G5), cumplimiento RGPD/LSSI-CE (sujeto a revisión jurídica), configuración SPF/DKIM/DMARC y calentamiento progresivo del dominio.
2. **Estrategia de segmentación dinámica y RFM:** definición de 4 segmentos vivos con propuestas diferenciadas (protegiendo el margen).
3. **Diseño detallado de 2 flujos *evergreen* prioritarios** (diagrama con disparador, esperas, bifurcación condicional, personalización y meta de salida).
4. **Proyección económica conservadora y cuadro de mando de 5 KPI** (sin depender de la tasa de apertura).

### Posibles soluciones o criterios de análisis
*(Guía orientativa para el formador)*
- **Saneamiento legal y técnico (prioridad absoluta Mes 1):**
  - **Excluir inmediatamente de envíos comerciales a G4 (6.400), G5 (3.400) y los 500 contactos de G2 que NO dieron consentimiento** (9.800 + 500 = 10.300 contactos fuera de envíos comerciales masivos para frenar riesgo sancionador RGPD/LSSI y salvar la reputación del dominio; cualquier intento de reconfirmación debe validarse antes con asesoría legal especializada).
  - **Base activa inicial saneada:** G1 (3.200 clientes con relación contractual/consentimiento verificado según límites legales aplicables) + 2.100 de G2 con consentimiento expreso + 1.300 activos de G3 (**6.600 contactos de calidad**), pasando los 1.600 inactivos de G3 por un breve *Sunset Flow* respetuoso para depurar.
  - **Infraestructura:** configurar SPF, DKIM y DMARC, activar doble *opt-in* en nuevos registros, conectar ecommerce con plataforma de automatización e iniciar calentamiento progresivo comenzando por los 1.500 contactos más comprometidos.
- **Segmentación RFM sobre G1 (protegiendo margen):**
  - *VIP (420):* acceso anticipado a añadas limitadas, invitaciones exclusivas a catas privadas y propuesta del **Club Enológico** (cero descuentos agresivos que erosionen marca y margen).
  - *Compradores únicos (1.980):* flujo educativo + recomendación de segundo pedido basada en la gama comprada (crianza/reserva/blanco).
  - *En riesgo (800):* secuencia *win-back* con historia de la nueva añada y beneficio controlado (p. ej. envío gratuito o botella de obsequio sobre pedido mínimo en lugar de descuento porcentual plano).
- **Cálculo conservador de potencial económico inmediato:**
  - *Recuperación de carritos:* 340 carritos/mes × 10 % recuperación = **34 pedidos/mes** × 92 € = 3.128 €/mes de ventas (~1.814 €/mes de margen bruto extra).
  - *Flujo posvisita de enoturismo:* 2.100 visitantes consentidos/año (~175/mes) × 12 % conversión (frente al 4 % actual) = **21 pedidos/mes** (+14 pedidos incrementales/mes × 88 € ≈ 1.232 €/mes de ventas adicionales, más captación directa al Club de Suscripción).
  - *Reposición a los 65–75 días:* incremento sostenido de frecuencia en G1 sin gasto publicitario.
- **KPI de dirección:** (1) tasa de quejas de *spam* (< umbral estricto de proveedores) y rebotes (< 1–2 %), (2) CTR real sobre correos entregados, (3) % de ingresos D2C atribuido a flujos automatizados por clic, (4) RPE (ingresos por correo entregado) y (5) tasa de conversión al Club Enológico y retención trimestral.

### Preguntas de reflexión final
1. ¿Por qué reducir una base de datos de 18.500 contactos sucios a 6.600 contactos limpios y consentidos suele generar **más facturación** y menos riesgos que seguir enviando a todos?
2. ¿Cómo cambia la percepción de marca de una pyme cuando pasa de enviar «15 % de descuento a todo el mundo» a enviar recomendaciones relevantes según la experiencia previa del cliente?
3. ¿Qué comprobación técnica o jurídica harías mañana mismo antes de enviar la próxima campaña de correo en tu empresa?

---

## 7. Evaluación

### Evaluación diagnóstica breve (Inicio de sesión · 5 min)
Cuestionario rápido de 4 ítems:
1. ¿Qué diferencia existe entre una lista estática y un segmento dinámico?
2. ¿Por qué ya no es fiable tomar decisiones comerciales basándose únicamente en la «tasa de apertura» de un correo?
3. ¿Qué protocolos técnicos de dominio ayudan a evitar que tus correos legítimos acaben en la carpeta de *spam*?
4. Verdadero o falso: «Si un cliente nos entregó su tarjeta de visita en una feria hace tres años, podemos añadirlo automáticamente a nuestra *newsletter* comercial semanal sin más trámites».

### Evaluación formativa durante la sesión
- **Revisión rápida de la matriz RFM y *checklist* legal (Fase 2):** validación de que el alumnado comprende los límites normativos RGPD/LSSI y la diferenciación de ofertas por valor del cliente.
- **Supervisión en *breakout rooms* sobre *Bodegas Valdeluz*:** comprobación de que los equipos excluyen correctamente contactos sin base legal y diseñan bifurcaciones *If/Else* con metas de salida.
- **Revisión cruzada en plenario:** detección entre pares de solapamientos de flujos y errores de frecuencia.

### Evaluación sumativa al final (15 min + entrega de evidencia)
1. **Test práctico situacional (5 preguntas en campus virtual · 30 %):** identificación de una infracción RGPD/LSSI, diagnóstico de caída de entregabilidad (DMARC/inactivos), interpretación de métricas sin sesgo de apertura, aplicación de lógica condicional/meta de salida y segmentación RFM.
2. **Entregable práctico individual (70 %):** entrega de la **Arquitectura de *Marketing Automation* y Diagrama del Flujo #1** (Actividad 3 refinada) aplicada a la empresa o proyecto del alumno, evaluada según la siguiente rúbrica.

### Rúbrica de evaluación

| Criterio (Peso) | Insuficiente (0–4,9) | En desarrollo (5,0–6,9) | Adecuado (7,0–8,9) | Destacado (9,0–10) |
|---|---|---|---|---|
| **1. Segmentación dinámica y personalización (25 %)** | Plantea envíos masivos sin segmentación real o usa criterios estáticos irrelevantes. | Define segmentos básicos por perfil, pero no aprovecha comportamiento ni personalización relevante. | Diseña 3 segmentos dinámicos sólidos (perfil + comportamiento/RFM) con propuestas diferenciadas que protegen el margen. | Construye una estrategia sobresaliente de segmentación viva, perfilado progresivo y contenido dinámico adaptado al ciclo de vida del cliente. |
| **2. Diseño lógico del flujo *evergreen* (25 %)** | El flujo carece de disparador claro, lógica condicional o meta de salida, o solo envía promociones agresivas. | Define una secuencia lineal de varios correos, pero sin bifurcaciones *If/Else*, control de frecuencia ni conexión con ventas/CRM. | Diseña un flujo completo (disparador, esperas, bifurcación condicional, valor progresivo, meta de salida y regla de *scoring*). | Elabora un diagrama impecable y listo para configurar en plataforma, con control de frecuencia (*frequency capping*), tono excelente y sincronización CRM. |
| **3. Cumplimiento normativo (RGPD/LSSI) y entregabilidad (25 %)** | Omite el marco legal o propone prácticas contrarias al consentimiento informado y a la salud del dominio. | Menciona el RGPD o la baja de forma genérica sin concretar base legal, doble *opt-in* ni autenticación técnica. | Incorpora *checklist* completo de base legal/consentimiento, baja en 1 clic, verificación jurídica y requisitos SPF/DKIM/DMARC + higiene de lista. | Integra privacidad desde el diseño (*privacy by design*), flujo *Sunset* para entregabilidad, calentamiento de dominio y verificación explícita RGPD/LOPDGDD/LSSI-CE. |
| **4. Medición y orientación a ingresos (25 %)** | Se basa en métricas de vanidad (aperturas brutas o tamaño total de lista) sin vincular a negocio. | Incluye CTR y bajas, pero no define atribución prudente ni relación con ingresos o MQL/SQL. | Establece KPI fiables (CTR, conversiones por clic, RPE/MQL, bajas y quejas de *spam*) con metas realistas. | Diseña un cuadro de mando directivo completo con atribución conservadora por clic, alertas de salud técnica y estimación económica del retorno del flujo. |

### Actividad de autoevaluación y reflexión
Cada alumno responde en su diario del campus virtual:
1. ¿Cuál es el mayor riesgo técnico (entregabilidad) o jurídico (RGPD/LSSI) que debería auditar hoy mismo en las comunicaciones de mi empresa?
2. De los 6 flujos *evergreen* trabajados hoy, ¿cuál puede generar más ingresos o citas cualificadas en los próximos 60 días con el menor esfuerzo de implantación?
3. ¿Qué regla de oro aplicaré para que nuestra automatización se perciba siempre como un servicio útil y nunca como *spam*?

---

## 8. Materiales y recursos

### Guion de diapositivas estructurado (16 diapositivas)

| Diapositiva | Título | Contenido visual y mensaje clave |
|---|---|---|
| **Slide 1** | Portada: Tema 6. Marketing automation | Título, Bloque 5 (6/7), Global MBA en Dirección Comercial y Ventas. |
| **Slide 2** | Objetivos y hoja de ruta (240 min) | Resultados de aprendizaje y secuencia de trabajo de las 4 horas. |
| **Slide 3** | Actividad 1: Tu bandeja de entrada no miente | Contraste entre *batch and blast* y comunicación relevante disparada por comportamiento. |
| **Slide 4** | Anatomía de un flujo automatizado (*Workflow*) | Esquema visual `Trigger → Filtro → Delay → If/Else → Acción → Goal`. |
| **Slide 5** | Marco legal imprescindible (RGPD, LOPDGDD y LSSI-CE) | Base jurídica, consentimiento verificable, doble *opt-in*, baja en 1 clic y advertencia obligatoria de validación jurídica. |
| **Slide 6** | Segmentación dinámica y modelo RFM | Matriz Recencia × Frecuencia × Valor Monetario con estrategias diferenciadas por cuadrante. |
| **Slide 7** | Personalización inteligente y perfilado progresivo | Cómo pasar del «Hola [Nombre]» a bloques dinámicos y *lead scoring* sincronizado con el CRM. |
| **Slide 8** | Los 6 flujos *evergreen* de mayor retorno en pymes | Mapa visual: Bienvenida, *Nurturing*, Abandono, Poscompra, Reposición/Renovación y *Sunset*. |
| **Slide 9** | Anatomía de una serie de *Lead Nurturing* que convierte | Equilibrio 80/20 entre educación/prueba social y propuesta comercial, con control de frecuencia. |
| **Slide 10** | Entregabilidad técnica sin jerga innecesaria | Qué son SPF, DKIM y DMARC, calentamiento de dominio y por qué limpiar contactos inactivos. |
| **Slide 11** | Por qué la tasa de apertura ya no basta | Impacto de los filtros de privacidad de correo y nuevo cuadro de mando (CTR, RPE, bajas, *spam*). |
| **Slide 12** | Atribución prudente y ROI del *Marketing Automation* | Atribución por clic frente a atribución inflada por apertura; cómo reportar valor real a dirección. |
| **Slide 13** | Errores frecuentes que queman tu base de datos | Top 5 errores (comprar listas, solapar flujos, descontar a VIPs, no poner metas de salida, ignorar móvil). |
| **Slide 14** | Caso práctico: Bodegas Valdeluz & Club Enológico | Tabla de los 18.500 contactos (G1–G5), datos ecommerce y reto de saneamiento + automatización. |
| **Slide 15** | Taller individual: Arquitectura y Flujo #1 | Instrucciones de Actividad 3 y repaso de los 4 criterios de la rúbrica. |
| **Slide 16** | Cierre, evaluación y puente hacia el Tema 7 | 5 claves directivas, enlace al test sumativo y anticipo de *Psicología en marketing*. |

### Ficha de trabajo del alumnado
Documento descargable con 4 bloques:
1. **Checklist de auditoría legal y de entregabilidad:** 10 puntos de verificación rápida (consentimiento, baja, SPF/DKIM/DMARC, higiene de lista).
2. **Matriz de saneamiento de *Bodegas Valdeluz*:** tabla G1–G5 para clasificar decisión legal/operativa y estrategia RFM.
3. **Plantilla de diagrama de flujo (*Workflow Canvas*):** cajas conectadas para diseñar `Trigger`, `Delays`, `If/Else`, `Correos/Acciones` y `Goal`.
4. **Hoja de KPI del *Marketing Automation*:** fórmulas de CTR, tasa de conversión por clic, RPE, bajas y quejas.

### Plantilla práctica replicable: Arquitectura de *Marketing Automation* y Flujo #1

| Bloque | Especificación operativa para tu empresa |
|---|---|
| **1. Segmentos dinámicos (3)** | S1 (ej. Nuevos prospectos ICP): `regla` · S2 (ej. Clientes VIP/RFM): `regla` · S3 (ej. Inactivos/en riesgo): `regla` |
| **2. Mapa de 3 flujos prioritarios** | #1 (Mes 1): `________` · #2 (Mes 2): `________` · #3 (Mes 3): `________` |
| **3. Flujo #1 – Disparador y Meta** | *Trigger* de entrada: `________` · Meta de salida (*Goal*): `________` · Regla *frequency capping*: máx. `___` correos/semana |
| **4. Secuencia detallada (4 pasos)** | Paso 1 (Día 0): asunto + valor · Paso 2 (Día `__`): condición *If/Else* (¿hizo clic / visitó precios?) → Rama Sí / Rama No · Paso 3 (Día `__`) · Paso 4 (Día `__`) + acción *scoring*/CRM |
| **5. Entregabilidad y RGPD/LSSI** | Estado SPF/DKIM/DMARC · Doble *opt-in* · Base jurídica verificada con asesoría/DPD · Baja en 1 clic operativa · Política *Sunset* (`___` días sin actividad) |
| **6. Cuadro de mando (5 KPI)** | CTR objetivo (`___ %`) · Conversión por clic (`___ %`) · RPE o MQL/mes (`___`) · Bajas (< `___ %`) · Quejas *spam* (umbral mínimo vigente) |

### Lecturas y recursos recomendados
- **Documentación oficial y normativa (verificar siempre última edición vigente):**
  - **Agencia Española de Protección de Datos (AEPD):** guías sobre protección de datos en relaciones comerciales, consentimiento y comunicaciones electrónicas.
  - **Reglamento (UE) 2016/679 (RGPD)**, **Ley Orgánica 3/2018 (LOPDGDD)** y **Ley 34/2002 (LSSI-CE)** en España.
  - Políticas oficiales de requisitos para remitentes de correo electrónico de Google (Gmail) y Yahoo (SPF, DKIM, DMARC, *one-click unsubscribe* y umbrales de *spam*).
- **Obras de referencia práctica:**
  - Chaffey, D. y Ellis-Chadwick, F. *Digital Marketing: Strategy, Implementation and Practice* (capítulos sobre CRM digital, *email marketing* y automatización del ciclo de vida).
  - White, C. S. *Email Marketing Rules* (principios duraderos de entregabilidad, permisos, segmentación y medición).

### Vídeos, artículos y fuentes adicionales
> **Aviso importante para el formador:** Tanto la normativa y criterios sancionadores de la AEPD como los requisitos antispam de Gmail/Yahoo/Microsoft y las funcionalidades de plataformas de automatización (Brevo, ActiveCampaign, HubSpot, Klaviyo, Mailchimp, etc.) evolucionan con rapidez. **Todos los artículos, vídeos, requisitos técnicos de entregabilidad y criterios jurídicos deben validarse antes de cada impartición.**

- *Recurso sugerido a validar:* Herramientas gratuitas de diagnóstico DNS (comprobadores de registros SPF, DKIM y DMARC) para mostrar en 2 minutos cómo auditar un dominio corporativo.
- *Recurso sugerido a validar:* Tutoriales en vídeo (5–8 min) sobre construcción visual de un flujo con bifurcaciones *If/Else* y configuración de metas de salida (*Goals*).
- *Recurso sugerido a validar:* Artículos actualizados sobre cómo medir el impacto real del *email marketing* tras las actualizaciones de privacidad de clientes de correo.

### Glosario de términos clave

| Término | Definición operativa |
|---|---|
| **Bifurcación condicional (*If/Else*)** | Regla lógica dentro de un flujo que divide a los contactos en caminos distintos según cumplan o no una condición o comportamiento. |
| **CTR (*Click-Through Rate*)** | Porcentaje de destinatarios que hacen clic en al menos un enlace del correo respecto al total de correos entregados. |
| **DMARC / DKIM / SPF** | Protocolos DNS de autenticación de correo electrónico que acreditan la legitimidad del remitente y protegen la entregabilidad. |
| **Doble *opt-in*** | Verificación en dos pasos donde el usuario confirma su suscripción mediante un enlace enviado a su correo electrónico. |
| **Entregabilidad** | Capacidad técnica y reputacional de que los correos lleguen a la bandeja de entrada principal sin filtrarse como *spam*. |
| ***Frequency Capping*** | Límite máximo de comunicaciones que puede recibir un contacto en un periodo para evitar saturación y bajas. |
| ***Lead Nurturing*** | Acompañamiento automatizado mediante contenidos relevantes para madurar prospectos hasta que estén listos para comprar. |
| **LSSI-CE** | Ley de Servicios de la Sociedad de la Información y de Comercio Electrónico en España, que regula entre otros aspectos las comunicaciones comerciales electrónicas. |
| **Meta de salida (*Goal*)** | Objetivo comercial que, al cumplirse (ej. compra o reserva), saca automáticamente al contacto de un flujo automatizado. |
| **Perfilado progresivo** | Captura gradual de datos e intereses del contacto a través de interacciones sucesivas sin saturar los formularios iniciales. |
| **RFM** | Modelo de segmentación basado en Recencia, Frecuencia y Valor Monetario de las compras de cada cliente. |
| **RGPD / LOPDGDD** | Marco normativo europeo y español de protección de datos personales que regula bases jurídicas, consentimiento y derechos de los interesados. |
| **RPE (*Revenue Per Email*)** | Ingresos medios generados por cada correo electrónico entregado en una campaña o flujo. |
| ***Sunset Flow*** | Flujo automatizado de reactivación y depuración que da de baja de envíos comerciales a contactos crónicamente inactivos para proteger la entregabilidad. |
| ***Trigger* (Disparador)** | Evento concreto del usuario o del sistema que pone en marcha un flujo automatizado. |

---

## 9. Adaptaciones

### Sesión presencial *(talleres in-company o seminarios intensivos)*
- **Construcción física del *workflow*:** entregar tarjetas de colores (azul = *Trigger*, amarillo = *Delay*, naranja = *If/Else*, verde = *Email/Acción*, rojo = *Goal*) para que los equipos ensamblen sobre la mesa el diagrama de flujo de *Bodegas Valdeluz* antes de exponerlo.
- **Comprobación técnica en vivo:** proyectar una herramienta pública de verificación SPF/DKIM/DMARC con el dominio voluntario de 1–2 asistentes para comprobar al instante la salud técnica de su correo corporativo.
- **Pausa:** descanso de 15 minutos entre el análisis del caso y el taller de transferencia individual.

### Sesión online síncrona *(modalidad en directo del Global MBA)*
- **Pizarra de diagramas de flujo (*Miro/Whimsical/Mural*):** proporcionar bloques arrastrables precargados para que cada equipo construya en *breakout rooms* el árbol condicional del caso *Bodegas Valdeluz* de manera rápida y visual.
- **Demo breve en pantalla compartida:** mostrar durante 6 minutos cómo luce un *workflow* real con bifurcaciones, *frequency capping* y una regla de actualización de *scoring* hacia el CRM.
- **Encuestas legales exprés:** lanzar 3 casos límite de RGPD/LSSI por votación rápida en directo para fijar criterios de prudencia normativa.

### Sesión asíncrona *(campus virtual y estudio autónomo)*
- **Microvídeos y recorridos guiados:** 4 píldoras de 12–15 minutos (`3.1` a `3.4`) más un vídeo práctico de 8 minutos explicando cómo comprobar SPF/DKIM/DMARC y leer un informe de campaña automatizada sin caer en la trampa de la tasa de apertura.
- **Foro estructurado del caso:** el alumno sube su tabla de decisión legal G1–G5 y su estrategia RFM de *Bodegas Valdeluz*, revisa los puntos ciegos de dos compañeros y accede después a la resolución comentada.
- **Entrega evaluable:** subida de la *Plantilla de Arquitectura de Marketing Automation y Flujo #1* (puede entregarse como documento + captura de diagrama) para corrección con rúbrica.

---

## 10. Conexión con el programa

- **Qué conocimientos previos refuerza:** conecta la generación de *leads* (Temas 1–3), el *lead scoring* y el CRM (Tema 4) y los experimentos validados de activación y retención del embudo AARRR (Tema 5) en un sistema continuo de comunicación automatizada que convierte bases de datos propias en activos rentables.
- **Qué competencias desarrolla:** arquitectura de sistemas de relación con el cliente a escala, segmentación analítica (RFM y conductual), criterio de cumplimiento normativo (RGPD/LOPDGDD/LSSI-CE), lectura crítica de métricas de atribución y gestión del ciclo de vida del cliente.
- **Conexión con el tema anterior y el posterior:**
  - *Tema anterior (Bloque 5, Tema 5 – Growth Hacking):* operacionaliza y escala automáticamente los aprendizajes de activación, retención y recomendación descubiertos mediante experimentación rápida.
  - *Tema posterior (Bloque 5, Tema 7 – Psicología en marketing):* una vez dominada toda la maquinaria técnica y automatizada del Bloque 5 (tráfico, SEO, SEM, CRM, *growth* y *automation*), el Tema 7 profundiza en el factor que decide realmente si un ser humano abre, lee, confía y compra: los principios psicológicos de persuasión ética y toma de decisiones del consumidor.
- **Evidencia de aprendizaje que dejará el alumnado:** una **Arquitectura de *Marketing Automation* con segmentación dinámica, mapa de 3 flujos *evergreen*, diagrama completo del Flujo #1 y *checklist* de entregabilidad y cumplimiento RGPD/LSSI**, directamente aplicable a su empresa y al TFM.

---

## Siguientes pasos para el formador

1. **Verificar normativa y políticas antispam vigentes:** comprueba antes de cada edición si la AEPD ha publicado nuevas resoluciones o guías sobre comunicaciones comerciales electrónicas y verifica los requisitos vigentes de Google/Yahoo/Microsoft sobre DMARC y umbrales de quejas de *spam*.
2. **Preparar comprobador DNS y pizarra de *workflows*:** ten listo el enlace del comprobador público de SPF/DKIM/DMARC y el tablero colaborativo con bloques de flujo precargados para evitar perder minutos en formato.
3. **Subir la plantilla editable y la rúbrica al campus:** pon ambos documentos a disposición del alumnado antes de la sesión para que puedan trabajar en tiempo real durante la Actividad 3.
4. **Reforzar el mensaje de «calidad sobre volumen»:** insiste a lo largo de la sesión en que una base pequeña, consentida y segmentada supera siempre en facturación y seguridad legal a una lista gigante sin depurar.
5. **Tender el puente hacia el Tema 7 (*Psicología en marketing*):** al cerrar, plantea al grupo por qué dos correos técnicamente idénticos y bien entregados pueden tener tasas de conversión radicalmente distintas según cómo activan la confianza, la prueba social o la aversión a la pérdida; esa pregunta abrirá el Tema 7.
