# Tema 3. Privacidad de datos

## 1. Ficha del tema

| Campo | Detalle |
| --- | --- |
| **Título del tema** | Privacidad de datos: RGPD, consentimiento, minimización, derechos, seguridad y transferencias internacionales |
| **Bloque y posición dentro del programa** | Bloque 10: Gestión de datos — Tema 3 de 5 (Programa de Dirección, Innovación y Negocios Digitales) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Mandos intermedios y emprendedores |
| **Nivel de dificultad** | Intermedio |
| **Prerrequisitos** | Haber cursado el Tema 2 (Gestión del dato) y gestionar habitualmente bases de datos de clientes, empleados, *leads* comerciales o analítica web en una pyme o proyecto digital. |
| **Resultado general de aprendizaje** | Aplicar los principios operativos de protección de datos y privacidad desde el diseño en los procesos digitales de una pyme, identificando bases legales, riesgos de incumplimiento, medidas de seguridad y controles sobre proveedores y transferencias internacionales. |

---

## 2. Objetivos de aprendizaje

Al finalizar este tema, el alumnado será capaz de:

1. **Identificar** (Comprender) las seis bases de legitimación, los principios clave del RGPD (especialmente minimización y limitación del plazo de conservación) y la distinción entre dato personal, dato anonimizado y categoría especial de dato.
2. **Diferenciar** (Analizar) las obligaciones jurídicas y operativas entre Responsable del Tratamiento (*Controller*), Encargado del Tratamiento (*Processor*) y Delegado de Protección de Datos (DPO) dentro del ecosistema de herramientas SaaS de una pyme.
3. **Diseñar** (Crear) un procedimiento operativo interno para atender en plazo los derechos de las personas interesadas (acceso, rectificación, supresión, oposición, limitación y portabilidad) y gestionar posibles brechas de seguridad.
4. **Evaluar** (Evaluar) el cumplimiento práctico de formularios web, campañas de marketing, *cookies* y contrataciones de proveedores cloud situados fuera del Espacio Económico Europeo (EEE).
5. **Aplicar** (Aplicar) criterios de privacidad desde el diseño (*Privacy by Design*) y por defecto (*Privacy by Default*) al lanzar una nueva herramienta digital, campaña comercial o proyecto analítico en la pyme.

---

## 3. Contenidos esenciales

> **Advertencia normativa obligatoria:** Este tema sintetiza los principios fundamentales del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), así como criterios de la Agencia Española de Protección de Datos (AEPD) y del Comité Europeo de Protección de Datos (CEPD/EDPB). Dado que las guías interpretativas, criterios sancionadores, normativa de *cookies* (LSSI-CE) y decisiones de adecuación sobre transferencias internacionales evolucionan periódicamente, **el formador debe verificar la normativa y las guías vigentes antes de impartir la sesión**, y el alumnado debe contrastar decisiones legales críticas con un profesional jurídico especializado.

### 3.1. Principios del RGPD, bases de legitimación y consentimiento válido

**Explicación breve y clara**
La protección de datos no consiste únicamente en pegar textos legales en el pie de página de una web. El RGPD exige responsabilidad proactiva (*accountability*): la empresa debe poder demostrar que trata los datos de forma lícita, leal, transparente y proporcional. Uno de los mitos más extendidos en pymes es creer que "todo requiere consentimiento", cuando en realidad existen seis bases legales (como la ejecución de un contrato o una obligación legal) y el consentimiento solo debe usarse cuando realmente existe libertad real de elección.

**Conceptos clave**
- Dato personal (identificable directa o indirectamente) frente a dato anónimo y seudonimizado.
- Categorías especiales de datos (salud, biometría, ideología, afiliación sindical, etc.) con protección reforzada.
- Principios del RGPD: licitud, limitación de la finalidad, **minimización de datos**, exactitud, limitación del plazo de conservación, integridad y confidencialidad, y responsabilidad proactiva.
- Consentimiento libre, específico, informado e inequívoco (prohibición de casillas premarcadas o consentimiento tácito).

**Definiciones necesarias**
- **Minimización de datos:** Obligación de recoger únicamente los datos adecuados, pertinentes y estrictamente necesarios para la finalidad concreta declarada (no "por si acaso en el futuro").
- **Seudonimización:** Sustitución de identificadores directos por un código o alias manteniendo la clave por separado; sigue siendo **dato personal** bajo el RGPD, aunque reduce riesgos de seguridad.
- **Anonimización irreversible:** Eliminación definitiva de cualquier vínculo razonable con una persona física; solo entonces deja de aplicarse el RGPD.
- **Registro de Actividades de Tratamiento (RAT):** Inventario interno que documenta qué tratamientos realiza la empresa, para qué finalidad, con qué base legal, a quién se comunican y cuánto tiempo se conservan.

**Ejemplo práctico realista**
Una tienda online de suplementación deportiva en Málaga solicitaba fecha de nacimiento completa, DNI, teléfono y profesión para suscribirse a su *newsletter*. Tras una revisión de minimización, redujo el formulario únicamente a correo electrónico y nombre opcional, separó en dos casillas desmarcadas la aceptación de comunicaciones comerciales y guardó evidencia técnica (fecha, hora, IP y texto mostrado) de cada consentimiento.

**Errores frecuentes**
- Pedir consentimiento para enviar una factura (la base correcta es ejecución de contrato / obligación legal, no consentimiento revocable).
- Incluir una única casilla "Acepto las condiciones de compra y el envío de publicidad" (consentimiento no específico ni libre).
- Conservar currículums y bases de datos de clientes antiguos "para siempre" sin plazos de bloqueo ni supresión.

**Preguntas que el alumnado debería poder responder**
- ¿Cuándo debe usarse la ejecución de contrato y cuándo el consentimiento expreso como base legal?
- ¿Qué diferencia práctica tiene para el cumplimiento del RGPD que un conjunto de datos esté seudonimizado frente a anonimizado de forma irreversible?

---

### 3.2. Derechos de las personas y ciclo de vida del dato personal

**Explicación breve y clara**
El RGPD otorga a las personas físicas control efectivo sobre su información. Para una pyme, el mayor riesgo no suele ser negarse deliberadamente a cumplir un derecho, sino carecer de un proceso interno claro para localizar el dato en todos sus sistemas (ERP, CRM, correo, WhatsApp corporativo, Excel) y responder dentro del plazo legal (con carácter general, un mes desde la recepción de la solicitud; *verificar plazos y prórrogas vigentes en RGPD/LOPDGDD*).

| Derecho | Qué puede solicitar la persona | Reto operativo habitual en una pyme |
| --- | --- | --- |
| **Acceso** | Saber qué datos tratamos, para qué, origen, cesiones y plazo | Tener datos dispersos en múltiples herramientas y hojas sueltas |
| **Rectificación** | Corregir datos inexactos o incompletos | Actualizar el CRM pero olvidar corregir el ERP o la herramienta de envíos |
| **Supresión ("olvido")** | Borrar sus datos cuando ya no son necesarios o retira el consentimiento | Confundir supresión con borrado fiscal ilegal (las facturas deben **bloquearse** durante el plazo legal tributario, no destruirse) |
| **Oposición** | Oponerse a ciertos tratamientos (ej.: marketing directo o interés legítimo) | Seguir enviando campañas por no mantener una "lista Robinson" interna |
| **Limitación** | Suspender temporalmente el tratamiento salvo conservación | Carecer de un estado "restringido/bloqueado" en el CRM |
| **Portabilidad** | Recibir sus datos en formato estructurado y legible por máquina | No poder exportar fácilmente el historial de un usuario |

**Conceptos clave**
- Derechos ARSULIPO (Acceso, Rectificación, Supresión, Limitación, Portabilidad y Oposición) y derecho a no ser objeto de decisiones únicamente automatizadas con efectos jurídicos significativos.
- Bloqueo del dato frente a borrado físico (compatibilidad con obligaciones fiscales, mercantiles y laborales; *verificar plazos vigentes de conservación fiscal/mercantil/sanitaria en España*).
- Protocolo de verificación de identidad antes de entregar datos en un derecho de acceso.

**Definiciones necesarias**
- **Bloqueo de datos:** Medida técnica y organizativa que impide el tratamiento ordinario de un dato (ej.: uso comercial), manteniéndolo aislado únicamente a disposición de jueces, tribunales o administraciones durante el plazo de prescripción de responsabilidades legales.
- **Lista de exclusión interna:** Registro mínimo de identificadores que evita volver a contactar por error a una persona que ya ejerció su oposición o supresión comercial.

**Ejemplo práctico realista**
Un cliente de una empresa de software SaaS en Madrid solicita la supresión completa de sus datos tras darse de baja. El equipo aplica un flujo de 3 pasos: (1) da de baja su cuenta y elimina sus datos de la plataforma de email marketing añadiendo su *hash* a la lista de exclusión; (2) comprueba que existen facturas emitidas ese año y **bloquea** los datos fiscales en el ERP durante el plazo tributario obligatorio; (3) responde por escrito al cliente en 5 días explicando exactamente qué se ha borrado y qué permanece bloqueado por obligación legal.

**Errores frecuentes**
- Ignorar una solicitud enviada al correo de soporte o por redes sociales porque "no la mandó al email legal".
- Borrar facturas de clientes que piden supresión, incumpliendo la normativa fiscal y mercantil.
- Entregar información sensible en una solicitud de acceso sin verificar previamente que quien la pide es realmente el titular.

**Preguntas que el alumnado debería poder responder**
- ¿Por qué el catálogo de datos y el SSOT vistos en el Tema 2 son esenciales para responder a un derecho de acceso o supresión en plazo?
- ¿Qué debe hacer una pyme cuando un cliente pide borrar todos sus datos pero le hemos facturado hace seis meses?

---

### 3.3. Seguridad, brechas de datos y privacidad desde el diseño

**Explicación breve y clara**
La seguridad de la información es la cara técnica y organizativa de la privacidad. El RGPD no impone una lista única de herramientas, sino medidas apropiadas al riesgo (enfoque basado en el riesgo): no requiere los mismos controles una lista de suscriptores de recetas que un historial clínico o nóminas con cuentas bancarias. Además, exige integrar la privacidad desde el momento en que se diseña un proceso o aplicación (*Privacy by Design*) y contar con un protocolo rápido ante incidentes o brechas de seguridad.

**Conceptos clave**
- Tríada de seguridad: confidencialidad, integridad y disponibilidad.
- Privacidad desde el diseño (*Privacy by Design*) y por defecto (*Privacy by Default*).
- Medidas técnicas y organizativas básicas en pymes: control de accesos por rol (mínimo privilegio), autenticación multifactor (MFA), cifrado, copias de seguridad y formación al personal.
- Gestión de brechas de seguridad (*data breaches*) y obligación de notificación (con carácter general, hasta 72 horas a la autoridad de control si existe riesgo para los derechos y libertades, y a los afectados si el riesgo es alto; *verificar criterios y umbrales vigentes de la AEPD*).
- Evaluación de Impacto en la Protección de Datos (EIPD / DPIA) para tratamientos de alto riesgo.

**Definiciones necesarias**
- **Brecha de seguridad de datos personales:** Incidente que ocasiona la destrucción, pérdida o alteración accidental o ilícita de datos personales, o la comunicación o acceso no autorizados (incluye desde un *ransomware* hasta enviar un correo masivo poniendo a 400 clientes en copia visible `CC` en lugar de `CCO`, o perder un portátil sin cifrar).
- **Principio de mínimo privilegio:** Cada empleado accede únicamente a los datos estrictamente necesarios para desempeñar su puesto.
- **EIPD (Evaluación de Impacto):** Análisis preventivo obligatorio antes de iniciar tratamientos que entrañen un alto riesgo (por ejemplo, datos de salud a gran escala, geolocalización continua o perfilado automatizado intensivo).

**Ejemplo práctico realista**
Una gestoría laboral en Valencia sufre el robo de un portátil de un técnico en un tren. Como la pyme había activado cifrado de disco completo (BitLocker/FileVault), MFA y política de no guardar nóminas en local (sino en la nube cifrada con revocación remota de sesión), documenta el incidente en su registro interno de brechas y confirma que la probabilidad de acceso no autorizado es prácticamente nula, evitando una crisis reputacional y sancionadora grave.

**Errores frecuentes**
- Pensar que una brecha solo ocurre cuando entra un *hacker*, olvidando errores humanos cotidianos (correos en `CC`, adjuntos equivocados, WhatsApp personal de empleados).
- Compartir una única contraseña genérica de CRM o correo entre cinco empleados (impide trazabilidad y revocación cuando alguien sale de la empresa).
- No formar a mandos intermedios ni empleados sobre a quién avisar inmediatamente cuando ocurre un incidente (las 72 horas corren desde que la organización tiene constancia).

**Preguntas que el alumnado debería poder responder**
- ¿Cuáles son las 4 medidas técnicas y organizativas de menor coste y mayor impacto que debería implantar cualquier pyme mañana mismo?
- ¿Qué pasos inmediatos deben seguirse en las primeras 24-72 horas tras detectar un envío erróneo masivo de datos confidenciales?

---

### 3.4. Proveedores (encargados del tratamiento) y transferencias internacionales

**Explicación breve y clara**
Hoy prácticamente ninguna pyme gestiona sus datos únicamente en servidores propios: utiliza CRM, email marketing, pasarelas de pago, almacenamiento cloud, herramientas de IA generativa y asesorías externas. Cada vez que un tercero trata datos personales por cuenta de nuestra empresa, actúa como **Encargado del Tratamiento** y debemos regular la relación mediante un contrato específico (DPA). Además, si ese proveedor almacena o accede a los datos desde fuera del Espacio Económico Europeo (EEE), existe una **transferencia internacional de datos** que exige garantías legales válidas.

**Conceptos clave**
- Responsable del Tratamiento frente a Encargado del Tratamiento (y subencargados).
- Contrato de Encargo de Tratamiento (*Data Processing Agreement*, DPA — art. 28 RGPD).
- Transferencias internacionales fuera del EEE: decisiones de adecuación (ej.: Reino Unido, Suiza, Japón, o entidades estadounidenses adheridas al *EU-US Data Privacy Framework*, *verificar siempre el listado actualizado de decisiones de adecuación de la Comisión Europea y su estado jurídico vigente*), Cláusulas Contractuales Tipo (SCC) y evaluación complementaria de riesgos.
- Riesgos de *Shadow IT* y uso no regulado de herramientas de IA generativa con datos personales de clientes o empleados.

**Definiciones necesarias**
- **Responsable del Tratamiento:** La empresa que decide los fines y medios del tratamiento (normalmente nuestra pyme respecto a sus clientes y empleados).
- **Encargado del Tratamiento:** Proveedor externo (gestoría, CRM cloud, agencia de marketing, hosting) que trata datos siguiendo las instrucciones del responsable.
- **Transferencia internacional de datos:** Flujo o acceso remoto a datos personales desde un país situado fuera del EEE (UE + Islandia, Liechtenstein y Noruega).

**Ejemplo práctico realista**
Una agencia digital de 18 empleados en Barcelona quiere contratar una nueva plataforma estadounidense de soporte al cliente con IA. Antes de cargar tickets con datos personales, la directora de operaciones comprueba tres puntos: (1) que existe opción de alojamiento de datos en región UE y firma de DPA (art. 28); (2) que el proveedor cuenta con mecanismo válido de transferencia internacional y prohíbe usar los datos de clientes para entrenar sus modelos públicos; y (3) que su lista de subencargados está documentada y revisada.

**Errores frecuentes**
- Contratar herramientas SaaS o pasar bases de clientes a una agencia de marketing o a un *freelance* sin firmar un Contrato de Encargo de Tratamiento (DPA).
- Subir hojas de Excel con datos de clientes, DNI o salud a cuentas gratuitas de herramientas de IA sin revisar sus términos de privacidad ni ubicación de servidores.
- Asumir que porque una empresa tecnológica "es muy famosa" ya cumple automáticamente nuestras obligaciones como Responsables del Tratamiento.

**Preguntas que el alumnado debería poder responder**
- ¿Qué comprobaciones mínimas debe hacer un mando intermedio antes de contratar un nuevo SaaS que alojará datos de clientes?
- ¿Qué diferencia existe entre una decisión de adecuación y unas Cláusulas Contractuales Tipo (SCC) en una transferencia internacional?

---

## 4. Metodología didáctica

Secuencia completa para una sesión de **4 horas (240 minutos exactos)** en modalidad híbrida.

| Fase | Tiempo | Qué hace el formador | Qué hace el alumnado |
| --- | --- | --- | --- |
| **1. Apertura y activación** | 25 min | Lanza diagnóstico inicial sobre mitos del RGPD y facilita la Actividad 1 (*Termómetro de riesgos de privacidad cotidianos*). Conecta con el catálogo de datos del Tema 2. | Vota y debate 6 situaciones reales frecuentes en pymes (WhatsApp comercial, Excel de nóminas, *cookies*, IA gratuita) identificando riesgos ocultos. |
| **2. Exposición breve / microlearning (Parte I)** | 30 min | Explica principios del RGPD, minimización, bases legales, consentimiento válido y categorías especiales de datos con ejemplos de formularios reales. | Analiza en pantalla dos formularios web contrastando errores típicos de consentimiento y minimización. |
| **3. Actividad práctica de auditoría rápida** | 35 min | Facilita la Actividad 2 (*Inspección de privacidad en 3 procesos digitales*): formulario de captación, campaña de email y solicitud de supresión. | En parejas, audita 3 mini-escenarios realistas usando una lista de chequeo y redacta las correcciones operativas necesarias. |
| **4. Exposición breve / microlearning (Parte II)** | 25 min | Expone derechos de las personas, bloqueo frente a borrado, brechas de seguridad (72 h), rol de Encargados (DPA) y transferencias internacionales (EEE, adecuación, SCC). | Mapea mentalmente qué herramientas SaaS de su empresa actúan como encargados y plantea dudas sobre proveedores fuera de la UE. |
| **Descanso estructurado** | 15 min | Pausa activa y preparación de grupos para el caso práctico. | Descansa y comparte dudas sectoriales con el formador. |
| **5. Análisis de caso práctico** | 50 min | Presenta el caso **Clínica Dental SonrisaActiva S.L.** (con datos de salud, marketing, proveedores y brecha potencial) y guía el trabajo por equipos. | En equipos de 3-4 personas, identifica infracciones críticas, clasifica prioridades por riesgo y diseña un plan de regularización operativa. |
| **6. Discusión guiada y puesta en común** | 25 min | Modera exposiciones de los equipos, aclara matices críticos (datos de salud, bloqueo sanitario/fiscal, WhatsApp y transferencia fuera del EEE) y refuerza la advertencia de validación jurídica. | Presenta su plan de choque para SonrisaActiva y contrasta medidas técnicas frente a medidas organizativas. |
| **7. Actividad de transferencia laboral** | 25 min | Dirige la Actividad 3 (*Mapa rápido de tratamientos y proveedores SaaS*) aplicado a la empresa o proyecto de cada participante. | Inventaría 3 tratamientos clave de su área (finalidad, base legal, plazo, encargados, ubicación de datos y 2 riesgos prioritarios). |
| **8. Síntesis, evaluación y cierre** | 10 min | Sintetiza las 7 reglas de oro de la privacidad práctica en pymes, explica la evaluación sumativa y conecta con el Tema 4 (Almacenamiento y arquitectura de datos). | Completa el compromiso de acción inmediata y la autoevaluación breve. |
| **TOTAL** | **240 min** | — | — |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Termómetro de riesgos de privacidad cotidianos

- **Nombre:** Termómetro de riesgos: "¿Cumple o nos exponemos?".
- **Objetivo:** Desmontar mitos frecuentes sobre protección de datos en pymes y sensibilizar sobre riesgos cotidianos en ventas, marketing y operaciones.
- **Instrucciones para el alumnado:**
  1. El formador proyecta 6 prácticas habituales en pymes (ej.: 1. Añadir a un cliente a una *newsletter* porque dio su tarjeta en una feria; 2. Guardar currículums en una carpeta compartida abierta a toda la oficina desde 2020; 3. Enviar un correo promocional con 150 destinatarios en `CC`; 4. Pegar reclamaciones de clientes con nombre y DNI en una cuenta gratuita de IA; 5. Pedir el estado civil para comprar un curso online; 6. Subir una foto de empleados a LinkedIn sin autorización previa).
  2. Individualmente (5 minutos), votad el nivel de riesgo (Verde = Correcto / Ámbar = Mejorable / Rojo = Riesgo alto).
  3. En plenario (15 minutos), justificad vuestra votación e identificad qué principio concreto del RGPD está en juego en cada caso.
- **Materiales necesarios:** Herramienta de votación rápida (Mentimeter/Slido/tarjetas de colores verde-ámbar-rojo).
- **Tiempo estimado:** 20 minutos (dentro de los 25 min de apertura).
- **Rol del formador:** Revelar los matices prácticos (por ejemplo, cuándo aplica interés legítimo limitado para clientes previos frente a contactos fríos, o por qué `CC` constituye una brecha de seguridad).
- **Producto o entregable esperado:** Semáforo colectivo comentado con los 6 principios vulnerados.
- **Criterios de éxito:** El grupo identifica correctamente al menos 5 de los 6 principios implicados (minimización, licitud/consentimiento, plazo de conservación, confidencialidad/brecha y control de encargados).

### Actividad 2 (Aplicación): Inspección de privacidad en 3 procesos digitales

- **Nombre:** Inspección exprés de privacidad (*Privacy Health Check*).
- **Objetivo:** Aplicar los requisitos de minimización, consentimiento, derechos y seguridad a tres situaciones operativas habituales de una pyme digital.
- **Instrucciones para el alumnado:**
  1. En parejas (25 minutos), analizad los 3 micro-escenarios recogidos en la **Ficha de trabajo 8.2**:
     - *Escenario A:* Formulario de descarga de un ebook B2B que pide 11 campos y tiene casilla premarcada de cesión a socios comerciales.
     - *Escenario B:* Respuesta a un excliente que pide por Instagram borrar todos sus datos tras comprar hace 4 meses.
     - *Escenario C:* Uso de una herramienta externa estadounidense gratuita para transcribir videollamadas comerciales con clientes.
  2. Para cada escenario, indicad: (a) fallos detectados, (b) principio o derecho afectado y (c) rediseño operativo concreto.
  3. Puesta en común rápida de las 3 soluciones clave (10 minutos).
- **Materiales necesarios:** Ficha de trabajo 8.2.
- **Tiempo estimado:** 35 minutos.
- **Rol del formador:** Asegurar que el alumnado propone soluciones realistas (ej.: primera capa informativa clara + casillas separadas, bloqueo fiscal en vez de borrado ilegal, revisión de DPA y ubicación/adecuación de servidores).
- **Producto o entregable esperado:** Ficha de inspección cumplimentada con los tres rediseños operativos.
- **Criterios de éxito:** Las propuestas eliminan los campos innecesarios, distinguen bloqueo de supresión y exigen garantías contractuales e internacionales para el proveedor SaaS.

### Actividad 3 (Transferencia a la realidad laboral): Mapa rápido de tratamientos y proveedores SaaS

- **Nombre:** Mapa de tratamientos, bases legales y encargados de mi departamento.
- **Objetivo:** Crear un inventario inicial práctico (pre-RAT) de los tratamientos de datos personales y proveedores externos bajo responsabilidad del participante.
- **Instrucciones para el alumnado:**
  1. Selecciona 3 tratamientos reales de datos personales que gestione tu área o proyecto (ej.: Captación de *leads* web, Gestión de clientes y facturación, Selección de personal, Videovigilancia o Soporte postventa).
  2. Rellena la **Plantilla de Mapa de Tratamientos y Proveedores** (apartado 8.3): datos recogidos, finalidad, base legal adecuada, plazo de conservación/bloqueo, herramientas SaaS/encargados implicados, si existe transferencia fuera del EEE y si hay DPA firmado.
  3. Marca los 2 puntos rojos más urgentes que trasladarás a Dirección, IT o vuestro asesor jurídico/DPO en las próximas dos semanas.
- **Materiales necesarios:** Plantilla del apartado 8.3 (digital o impresa).
- **Tiempo estimado:** 25 minutos en sesión (con entrega refinada en el campus).
- **Rol del formador:** Ayudar a diferenciar base legal real (evitando poner "consentimiento" a todo) y detectar herramientas en la sombra (*Shadow IT*) con servidores fuera del EEE.
- **Producto o entregable esperado:** Mapa individual de 3 tratamientos con 2 acciones prioritarias de mitigación de riesgos.
- **Criterios de éxito:** Bases legales correctas, identificación real de proveedores/encargados, detección de posibles transferencias internacionales y acciones de mejora concretas.

---

## 6. Caso práctico

### Contexto empresarial
**Clínica Dental SonrisaActiva S.L.** es una pyme andaluza en plena expansión con 4 clínicas (Sevilla, Málaga y Córdoba), 34 profesionales y unos 11.500 pacientes registrados. En el último año han digitalizado su captación y relación con el paciente: lanzaron una web con cita online, campañas de anuncios en redes sociales, recordatorios por WhatsApp y un software de gestión clínica en la nube.

### Situación o problema
Una paciente recibe un mensaje de WhatsApp promocional sobre "blanqueamiento dental" acompañado por error de un PDF adjunto con el presupuesto y diagnóstico periodontal de **otra paciente distinta**. Al reclamar enfadada, exige la eliminación inmediata de todo su historial y amenaza con denunciar ante la AEPD. Al revisar internamente lo sucedido, la gerente descubre una serie de prácticas acumuladas sin supervisión de privacidad.

### Datos disponibles

| Área / Proceso | Práctica actual detectada en SonrisaActiva S.L. |
| --- | --- |
| **Captación web y cookies** | El formulario de "Primera visita gratuita" pide nombre, teléfono, email, fecha de nacimiento, DNI y "motivo clínico detallado" antes de ser paciente, con una sola casilla premarcada: *"Acepto política de privacidad y promociones"*. El banner de cookies instala píxeles publicitarios antes de que el usuario acepte. |
| **Marketing y WhatsApp** | Las recepcionistas envían recordatorios y promociones comerciales desde teléfonos móviles personales con WhatsApp normal usando listas de difusión creadas desde exportaciones en Excel sin cifrar. |
| **Software clínico y proveedores** | La plataforma de encuestas de satisfacción y email marketing pertenece a una empresa de EE. UU. sin DPA firmado ni verificación de mecanismo de transferencia internacional. En esa herramienta se subieron nombre, email y **tipo de tratamiento dental realizado** (ej.: implante, ortodoncia). |
| **Acceso interno y seguridad** | Las 4 clínicas comparten una única cuenta de usuario "recepcion@sonrisaactiva" con la misma contraseña desde hace 3 años, incluso después de marcharse 4 empleadas. |
| **Conservación y derechos** | No existe procedimiento para derechos ARSULIPO ni para brechas. La recepcionista que cometió el error está a punto de borrar todo el historial clínico de la paciente reclamante para "calmarla". |

### Preguntas de análisis
1. ¿Por qué el incidente del PDF adjunto constituye una **brecha de seguridad de alto impacto** (qué tipo de dato se ha expuesto) y qué pasos inmediatos deben ejecutarse en las próximas 72 horas?
2. ¿Debe la clínica borrar el historial clínico completo de la paciente como ella exige? ¿Cómo compatibilizar el derecho de supresión/oposición comercial con la normativa sanitaria de conservación de historias clínicas (*verificar plazo mínimo legal aplicable en España y comunidad autónoma*)?
3. Enumera al menos **6 incumplimientos distintos** presentes en la tabla de datos disponibles, relacionándolos con principios del RGPD, seguridad, encargados y transferencias internacionales.
4. ¿Necesita SonrisaActiva evaluar la designación de un **Delegado de Protección de Datos (DPO)** o asesoramiento especializado dado que trata datos de salud? (*Nota: verificar criterios de obligatoriedad del art. 34 LOPDGDD para centros sanitarios obligados al mantenimiento de historias clínicas*).

### Tarea a realizar
En equipos de 3-4 personas (50 minutos), preparad un **Plan de Respuesta Inmediata y Regularización de Privacidad para la Gerencia de SonrisaActiva S.L.** estructurado en:
1. **Protocolo de crisis (0 a 72 horas):** Acciones de contención, evaluación del riesgo de la brecha, comunicación a las pacientes afectadas, valoración de notificación a la AEPD y respuesta formal a la solicitud de derechos (sin destruir ilegalmente la historia clínica).
2. **Mapa de incumplimientos priorizados (Crítico / Alto / Medio):** Justificando cada punto.
3. **Plan de regularización a 60 días:** Rediseño del formulario/cookies, medidas técnicas de acceso (usuarios nominales, MFA, fin del WhatsApp personal), regularización de encargados/transferencias internacionales y protocolo de formación al equipo.

### Posibles soluciones o criterios de análisis
- **Crisis 0-72 h (prioridad absoluta):**
  - Contener la brecha: solicitar confirmación de borrado a la destinataria errónea, registrar el incidente, identificar el alcance exacto (¿solo 1 PDF o varios?).
  - Al tratarse de **datos de categoría especial (salud)** expuestos a un tercero no autorizado, existe riesgo alto para los derechos y libertades de la otra paciente: valorar notificación a la AEPD dentro de las 72 h y comunicación transparente a la paciente titular del diagnóstico filtrado (con apoyo jurídico/DPO).
  - **Frenar de inmediato el borrado de la historia clínica:** Explicar por escrito a la paciente que se atiende de inmediato su **oposición/supresión para fines comerciales**, pero que la historia clínica y facturas deben conservarse bloqueadas por obligación legal sanitaria y fiscal.
- **Incumplimientos críticos detectados:**
  1. *Categoría especial (salud) sin garantías y falta de minimización* en formulario web previo y en la plataforma de marketing estadounidense (no se deben subir diagnósticos/tratamientos sanitarios a herramientas de marketing sin base jurídica reforzada ni necesidad).
  2. *Consentimiento inválido:* casilla premarcada, consentimiento empaquetado y carga de cookies publicitarias sin consentimiento previo (*verificar Guía de Cookies vigente de la AEPD*).
  3. *Transferencia internacional irregular y falta de DPA:* herramienta estadounidense sin contrato de encargo ni mecanismo válido (adecuación DPF o SCC + evaluación).
  4. *Seguridad deficiente:* cuentas compartidas sin trazabilidad, ex-empleadas con acceso potencial, exportaciones Excel sin cifrar en móviles personales.
  5. *Falta de gobernanza/DPO:* los centros sanitarios obligados legalmente al mantenimiento de historias clínicas en España requieren verificar obligación de DPO (art. 34.1.l LOPDGDD; *confirmar vigencia y alcance profesional*).
- **Regularización a 60 días:** Usuarios nominales + MFA + revocación de bajas en semana 1; prohibición de móviles personales y canal oficial corporativo; limpieza de la plataforma de marketing (solo nombre/email con consentimiento válido, cero datos clínicos); firma de DPAs y verificación de transferencias internacionales; rediseño del formulario (sin DNI ni diagnóstico clínico inicial) y banner de cookies conforme; formación práctica de 1 hora a todo el personal de clínica.

### Preguntas de reflexión final
- ¿Cuánto puede costar a una clínica reputacional y económicamente ahorrar unos pocos euros al mes usando WhatsApp personal y contraseñas compartidas?
- ¿Cómo puede SonrisaActiva convertir una privacidad rigurosa en un **argumento de confianza y diferenciación** frente a competidores?

---

## 7. Evaluación

### Evaluación diagnóstica breve (inicio de sesión, 5 min)
1. Verdadero o falso: "Para poder enviar una factura o gestionar una garantía a un cliente, necesito pedirle su consentimiento expreso".
2. Si un cliente pide ejercer su derecho de supresión, ¿debemos borrar también las facturas del año pasado? (Sí / No, deben bloquearse durante el plazo legal / Depende del importe).
3. Si enviamos un correo comercial a 200 clientes poniendo sus emails en copia visible (`CC`), ¿es eso una brecha de seguridad bajo el RGPD? (Sí / No).
4. ¿Sabéis en qué país están alojados los datos de vuestro CRM o plataforma de email marketing? (Sí / No estoy seguro / Nunca lo he mirado).

### Evaluación formativa durante la sesión
- Verificación en la **Actividad 1** de la capacidad del grupo para reconocer errores cotidianos más allá del ámbito estrictamente informático.
- Corrección guiada de los 3 micro-escenarios de la **Actividad 2**, asegurando comprensión de minimización, bloqueo frente a borrado y control de proveedores.
- Seguimiento de los equipos en el caso **SonrisaActiva**, comprobando que detienen el borrado ilegal del historial médico y detectan el riesgo de datos de salud en EE. UU.

### Evaluación sumativa al final del tema
1. **Test situacional de 6 preguntas** sobre bases legales, minimización, derechos ARSULIPO, brechas (72 h), DPA y transferencias internacionales (30 %).
2. **Mapa de tratamientos y proveedores SaaS (Actividad 3)** aplicado al departamento o proyecto del participante, incluyendo 2 riesgos prioritarios y medidas concretas de mitigación (70 %).

### Rúbrica de evaluación

| Criterio | Insuficiente (0-4) | En desarrollo (5-6) | Adecuado (7-8) | Destacado (9-10) |
| --- | --- | --- | --- | --- |
| **Bases legales y principios (minimización/conservación)** | Asigna "consentimiento" a todos los tratamientos o ignora plazos de conservación y minimización. | Identifica algunas bases legales correctamente pero omite plazos o mantiene campos innecesarios. | Asigna bases legales correctas, aplica minimización y define criterios coherentes de conservación y bloqueo. | Diferencia con precisión categorías especiales, bases legales, bloqueo frente a supresión y evidencia de consentimiento. |
| **Gestión de derechos y brechas de seguridad** | No distingue derechos ni reconoce incidentes humanos como brechas de seguridad. | Conoce los derechos básicos pero carece de procedimiento operativo o plazos realistas. | Diseña respuestas operativas correctas para derechos y protocolo básico de actuación ante brechas. | Integra trazabilidad en sistemas, verificación de identidad, bloqueo legal y escalado de brechas en menos de 72 h. |
| **Control de encargados y transferencias internacionales** | Ignora qué proveedores externos acceden a los datos o desconoce el concepto de DPA y EEE. | Lista algunos proveedores pero no comprueba ubicación de servidores ni contratos de encargo. | Identifica encargados, verifica necesidad de DPA y señala si existen transferencias fuera del EEE. | Evalúa DPA, subencargados, ubicación de servidores, garantías internacionales y riesgos de *Shadow IT*/IA. |
| **Aplicabilidad práctica (Privacy by Design)** | Plantea medidas genéricas e impracticables en el día a día de una pyme. | Propone mejoras parciales centradas solo en textos legales web. | Propone acciones técnicas y organizativas realistas (accesos, formación, formularios) adaptadas a su empresa. | Prioriza riesgos por impacto y diseña un plan accionable que integra privacidad en procesos sin frenar el negocio. |

### Actividad de autoevaluación y reflexión
- *¿Qué herramienta SaaS o práctica diaria de mi equipo (Excel, WhatsApp, IA, formularios) supone hoy nuestro mayor riesgo silencioso de privacidad?*
- *Si mañana recibiéramos una solicitud de supresión o sufriéramos una fuga por error humano, ¿sabríamos exactamente quién actúa y qué hacer en la primera hora?*
- *¿Qué cambio concreto de "privacidad desde el diseño" voy a proponer antes de lanzar nuestra próxima campaña o proyecto digital?*

---

## 8. Materiales y recursos

### 8.1. Guion de diapositivas (estructura slide por slide)

1. **Slide 1 — Portada:** Bloque 10 · Tema 3: Privacidad de datos. Cumplimiento práctico y confianza en la pyme digital.
2. **Slide 2 — Advertencia normativa y objetivos:** Enfoque operativo para mandos intermedios (y cuándo escalar a asesoría jurídica/DPO).
3. **Slide 3 — Actividad 1 (Termómetro de riesgos):** 6 situaciones cotidianas que generan sanciones evitables en pymes.
4. **Slide 4 — Principios del RGPD en lenguaje de negocio:** Minimización, finalidad, plazo de conservación y responsabilidad proactiva.
5. **Slide 5 — Las 6 bases legales y el mito del consentimiento:** Cuándo pedir permiso y cuándo NO hacerlo; requisitos del consentimiento válido.
6. **Slide 6 — Datos personales, categorías especiales, seudonimización y anonimización:** Qué entra y qué sale del ámbito del RGPD.
7. **Slide 7 — Actividad 2 (instrucciones):** Inspección de privacidad en 3 procesos digitales.
8. **Slide 8 — Derechos ARSULIPO y el concepto clave de bloqueo:** Cómo cumplir en plazo sin destruir obligaciones fiscales o sanitarias.
9. **Slide 9 — Seguridad aplicada y brechas de datos (regla de las 72 horas):** Medidas de alto impacto en pymes (MFA, mínimo privilegio, cifrado, formación).
10. **Slide 10 — Responsable, Encargado (DPA) y Transferencias Internacionales:** Checklist antes de contratar un SaaS o usar herramientas de IA.
11. **Slide 11 — Caso práctico: Clínica Dental SonrisaActiva S.L.:** Contexto, detonante del PDF filtrado y tabla de riesgos.
12. **Slide 12 — Debriefing SonrisaActiva:** Protocolo 0-72 h y plan de regularización a 60 días.
13. **Slide 13 — Actividad 3 (transferencia):** Mapa rápido de tratamientos y proveedores SaaS de vuestra empresa.
14. **Slide 14 — Cierre y puente al Tema 4:** Dónde y cómo almacenar, cifrar y respaldar los datos de forma segura y escalable.

### 8.2. Ficha de trabajo: Inspección de privacidad en 3 procesos digitales (Actividad 2)

- **Escenario A (Formulario de captación B2B):** Una consultora ofrece un PDF gratuito y pide: nombre, apellidos, email, móvil, empresa, cargo, facturación exacta, DNI y dirección postal. Al final figura una casilla **premarcada**: *"Acepto recibir ofertas de la consultora y de empresas colaboradoras del sector"*.
  - *Preguntas:* ¿Qué campos sobran por minimización? ¿Qué falla en el consentimiento? Redacta el pie de formulario correcto (1.ª capa informativa + casillas).
- **Escenario B (Derecho de supresión):** Un excliente que compró hace 4 meses escribe por mensaje directo de Instagram: *"Quiero que borréis todos mis datos de vuestra empresa hoy mismo"*.
  - *Preguntas:* ¿Es válida la petición por Instagram? ¿Qué datos se borran, cuáles se bloquean y cómo verificarías su identidad?
- **Escenario C (IA y transferencia internacional):** El equipo comercial empieza a conectar una app gratuita estadounidense a sus videollamadas con clientes para grabar y transcribir reuniones, cuyos términos indican que "los audios podrán utilizarse para mejorar nuestros modelos".
  - *Preguntas:* ¿Qué 4 riesgos críticos aparecen aquí (información al afectado, base legal, DPA/entrenamiento y transferencia internacional)? ¿Qué alternativas seguras propones?

### 8.3. Plantilla práctica replicable: Mapa de Tratamientos y Proveedores SaaS (Pre-RAT)

| Tratamiento / Proceso | Categoría de datos (¿incluye salud/especiales?) | Finalidad principal | Base legal adecuada | Plazo de conservación / bloqueo | Proveedores / Encargados (SaaS, asesoría) | ¿DPA firmado? (Sí/No/Revisar) | ¿Transferencia fuera EEE? (Garantía) | Riesgo prioritario y acción de mejora |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Ej.: Clientes y facturación** | Identificativos, bancarios (No especiales) | Prestación del servicio y facturación | Ejecución de contrato + Obligación legal | Vigencia contrato + bloqueo plazo fiscal | ERP cloud + Gestoría fiscal | ERP: Sí / Gestoría: Revisar | No (servidores UE) | Firmar DPA con gestoría y activar MFA en ERP |
| **Tratamiento 1:** | | | | | | | | |
| **Tratamiento 2:** | | | | | | | | |
| **Tratamiento 3:** | | | | | | | | |

### 8.4. Lecturas y recursos recomendados
- **Guía de Protección de Datos y Relaciones Laborales / Guía del Reglamento para Responsables de Tratamiento (AEPD):** Referencias prácticas oficiales en español.
- **Herramienta Facilita RGPD y Facilita Emprende (AEPD):** Recursos gratuitos de apoyo orientados a pymes con tratamientos de bajo riesgo (*nota: no sustituyen asesoramiento jurídico en tratamientos de alto riesgo como salud*).
- **Guía sobre el uso de las Cookies (AEPD):** Referencia directa para auditar banners de cookies y analítica web.

### 8.5. Vídeos, artículos y fuentes adicionales *(Validar antes de utilizarse)*
> **Nota importante para el formador:** La normativa y guías de privacidad cambian con frecuencia. **Verificar obligatoriamente la vigencia y versión más reciente** de todos los enlaces y textos legales antes de cada edición del curso.
- Portal oficial de la Agencia Española de Protección de Datos (`aepd.es`) — *verificar última versión de la Guía de Cookies, Guía de Brechas de Seguridad y criterios sobre IA y WhatsApp empresarial*.
- Texto consolidado del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD) en el BOE/EUR-Lex — *validar modificaciones recientes*.
- Listado oficial de decisiones de adecuación de la Comisión Europea (incluyendo el estado vigente del *EU-US Data Privacy Framework*) — *validar antes de clase*.
- Recursos y píldoras formativas de INCIBE sobre seguridad de datos en pymes (`incibe.es`) — *validar enlaces activos*.

### 8.6. Glosario de términos clave

| Término | Definición operativa |
| --- | --- |
| **RGPD / LOPDGDD** | Reglamento General de Protección de Datos de la UE y Ley Orgánica española que lo desarrolla y adapta. |
| **Responsable del Tratamiento** | Organización que determina los fines y medios del tratamiento de datos personales. |
| **Encargado del Tratamiento** | Tercero (proveedor SaaS, gestoría, agencia) que trata datos por cuenta del responsable bajo contrato (DPA). |
| **Minimización de datos** | Principio que exige recopilar y tratar solo los datos estrictamente necesarios para la finalidad prevista. |
| **DPA (Data Processing Agreement)** | Contrato obligatorio (art. 28 RGPD) que regula instrucciones, seguridad y devolución/borrado de datos con un encargado. |
| **Brecha de seguridad** | Incidente que provoca pérdida, alteración, destrucción o acceso/divulgación no autorizada de datos personales. |
| **Transferencia internacional** | Envío o acceso a datos personales desde fuera del Espacio Económico Europeo, sujeto a adecuación o garantías (SCC). |
| **Bloqueo de datos** | Restricción del tratamiento ordinario de datos conservados únicamente para atender obligaciones legales vigentes. |
| **Privacy by Design** | Enfoque que incorpora medidas de privacidad y minimización desde la concepción inicial de un proceso o producto digital. |

---

## 9. Adaptaciones para modalidad híbrida

### Sesión presencial
- Entregar tarjetas físicas de color verde, ámbar y rojo para la **Actividad 1** con el fin de visualizar de golpe el grado de acuerdo o desacuerdo del aula ante cada mito de privacidad.
- En el caso **SonrisaActiva**, dividir la pizarra en tres columnas (*Crisis 0-72 h*, *Incumplimientos críticos*, *Plan 60 días*) y asignar a cada equipo la defensa principal de una columna mientras los demás actúan como comité auditor.

### Sesión online síncrona
- Realizar una demostración en vivo (compartiendo pantalla) revisando en 3 minutos el banner de cookies y la política de privacidad de un sitio web público real (con fines estrictamente educativos, sin señalar pymes locales) para enseñar a detectar casillas, cookies previas y cláusulas de transferencias.
- Usar documentos colaborativos en *breakout rooms* para la **Actividad 2** y el caso **SonrisaActiva**, fijando un temporizador visible para la fase de crisis (0-72 h).

### Sesión asíncrona
- Publicar un microvídeo de 12 minutos explicando la diferencia práctica entre **consentimiento, contrato, obligación legal e interés legítimo**, y otro de 8 minutos con el *checklist* para revisar un proveedor SaaS antes de contratarlo.
- Sustituir la Actividad 1 por un cuestionario interactivo autocorregible con *feedback* inmediato sobre los 6 mitos cotidianos.
- Recoger el **Mapa de Tratamientos y Proveedores SaaS (Actividad 3)** anonimizando datos confidenciales de la empresa y ofreciendo retroalimentación individual por escrito o audio breve del formador.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Se apoya directamente en el inventario, catálogo y roles de *Data Owner* del **Tema 2 (Gestión del dato)**, así como en los proyectos de marketing digital, comercio electrónico e IA vistos en bloques anteriores del programa.
- **Competencias que desarrolla:** Gestión de riesgos regulatorios y reputacionales, diseño responsable de procesos digitales (*Privacy by Design*), evaluación crítica de proveedores tecnológicos y toma de decisiones bajo presión ante incidentes.
- **Conexión con el tema anterior y posterior:**
  - *Tema anterior (Bloque 10, Tema 2 — Gestión del dato):* Sin saber dónde están los datos, quién los gestiona ni eliminar copias descontroladas en hojas Excel, cumplir el RGPD es casi imposible. La gestión del dato hace viable la privacidad.
  - *Tema posterior (Bloque 10, Tema 4 — Almacenamiento de datos):* Las exigencias de cifrado, segregación de accesos, localización geográfica de servidores (UE frente a terceros países), retención/bloqueo y copias de seguridad vistas en este tema condicionan directamente las decisiones de arquitectura y almacenamiento del Tema 4.
- **Evidencia de aprendizaje que deja el alumnado:** Una **Ficha de inspección de privacidad sobre 3 procesos digitales (Actividad 2)** y un **Mapa de tratamientos y proveedores SaaS (Pre-RAT, Actividad 3)** aplicable de inmediato en su departamento.

---

## Siguientes pasos para el formador

1. **Verificar normativa y criterios AEPD vigentes (obligatorio):** Antes de impartir, comprobar la última versión de la Guía de Cookies de la AEPD, la vigencia del marco de transferencias UE-EE. UU. (*Data Privacy Framework*) y las novedades recientes de la AEPD en relación con IA generativa y mensajería instantánea.
2. **Aclarar el alcance pedagógico al inicio:** Dejar explícito que la sesión capacita a mandos intermedios y emprendedores para gestionar riesgos operativos y dialogar con solvencia con asesores jurídicos o DPO, pero no sustituye asesoramiento legal formal en casos complejos.
3. **Preparar los 3 micro-escenarios y la plantilla Pre-RAT en editable:** Compartir ambos documentos en el campus antes de la sesión para agilizar el trabajo en clase.
4. **Cuidar la confidencialidad en clase:** Recordar al alumnado que, al compartir incidencias reales de sus empresas en la Actividad 1 o en la Actividad 3, deben omitir nombres de clientes reales o detalles sensibles no públicos.
5. **Conectar con el Tema 4 al cerrar:** Pedir al alumnado que anote dónde se almacenan actualmente los archivos y copias de seguridad de los 3 tratamientos mapeados en la Actividad 3, como insumo directo para la siguiente sesión.
