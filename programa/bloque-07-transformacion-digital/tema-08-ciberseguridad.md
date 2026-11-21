# Tema 8. Ciberseguridad

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Tema 8. Ciberseguridad |
| **Bloque y posición dentro del programa** | Bloque 7: Transformación digital — Posición 8 de 8 (Cierre del bloque) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Mandos intermedios y emprendedores |
| **Nivel de dificultad** | Intermedio |
| **Prerrequisitos** | Conocimientos de todo el Bloque 7: digitalización, IA, IoT, blockchain, BI, cloud y automatización (Temas 1 a 7) |
| **Resultado general de aprendizaje** | Evaluar los principales ciberriesgos de una pyme digitalizada, implantar controles esenciales de prevención y acceso, garantizar la continuidad de negocio y coordinar una respuesta ordenada ante incidentes conforme al marco regulatorio aplicable |

---

## 2. Objetivos de aprendizaje

Al finalizar este tema, el alumnado será capaz de:

1. **Identificar** las principales amenazas cibernéticas que afectan a pymes —especialmente *phishing*, fraude del CEO/suplantación de proveedor (*BEC*) y *ransomware*— y sus vías habituales de entrada humana y técnica. *(Nivel de Bloom: Comprender)*
2. **Analizar** la superficie de exposición y las vulnerabilidades críticas de una pyme en transformación digital (accesos, dispositivos, nube, OT/IoT y proveedores) evaluando impacto económico y operativo. *(Nivel de Bloom: Analizar)*
3. **Aplicar** controles esenciales de ciberhigiene, control de accesos (*mínimo privilegio*, MFA, gestión de bajas) y estrategia de copias de seguridad (regla 3-2-1-1-0) con bajo coste y alto impacto preventivo. *(Nivel de Bloom: Aplicar)*
4. **Evaluar** los requisitos básicos de continuidad de negocio (BIA, RTO/RPO) y obligaciones de notificación y cumplimiento normativo ante una brecha de seguridad. *(Nivel de Bloom: Evaluar)*
5. **Diseñar** un Plan Básico de Ciberresiliencia y Protocolo de Respuesta a Incidentes («Primeras 24 horas») ejecutable por el equipo directivo y mandos intermedios de su pyme. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Panorama real de ciberriesgos en pymes: *phishing*, fraude financiero y *ransomware*

- **Explicación breve y clara:** El error más caro de una pyme es pensar «somos demasiado pequeños para que nos ataquen». Los ciberdelincuentes atacan masivamente y de forma automatizada a pymes precisamente porque tienen dinero, clientes más grandes (ataque a la cadena de suministro) y defensas más débiles. La mayoría de los incidentes graves no empiezan con un «hacker de película», sino con un correo engañoso (*phishing*), una contraseña reutilizada o un servicio remoto sin doble factor.
- **Conceptos clave:** Ingeniería social, *phishing* y *spear phishing*, *BEC* (*Business Email Compromise* — fraude del CEO / cambio fraudulento de IBAN de proveedor), *ransomware* (con doble extorsión: cifrado + amenaza de publicación de datos), superficie de ataque.
- **Definiciones necesarias:**
  - *Phishing / BEC:* Engaño basado en suplantación de identidad (correo, SMS/*smishing*, llamada/*vishing* o audio clonado con IA) para robar credenciales o inducir transferencias bancarias fraudulentas modificando cuentas de proveedores.
  - *Ransomware:* Software malicioso que cifra los archivos y sistemas de una organización paralizando su actividad para exigir un rescate, a menudo acompañado del robo previo de información confidencial (doble extorsión).
- **Ejemplo práctico realista:** Una pyme constructora recibió un correo desde una dirección casi idéntica a la de su proveedor habitual de acero (cambiaba una letra en el dominio) adjuntando una factura real interceptada y un «nuevo certificado de cuenta bancaria». Sin protocolo de verificación por canal alternativo, administración transfirió 42.000 € a los atacantes. Con una regla simple de coste cero —«todo cambio de IBAN requiere verificación telefónica llamando al número guardado en el ERP, nunca al del correo»— el fraude se habría bloqueado al instante.
- **Errores frecuentes:**
  - Creer que instalar un antivirus básico resuelve la ciberseguridad de la empresa.
  - Pagar el rescate de un *ransomware* creyendo que garantiza la recuperación limpia y la confidencialidad: no asegura recuperar los datos, financia redes criminales y marca a la empresa como objetivo repetible.
  - No formar periódicamente al equipo con ejemplos reales ni practicar simulacros constructivos (sin señalar ni humillar a quien cae).
- **Preguntas que el alumnado debería poder responder:**
  - ¿Por qué las pymes son un blanco prioritario para *ransomware* y fraude de suplantación de proveedor (*BEC*)?
  - ¿En qué consiste la doble extorsión en un ataque *ransomware*?
  - ¿Qué regla operativa de coste cero bloquea casi el 100 % de los fraudes por cambio de cuenta bancaria?

### 3.2. Control de accesos, principio de mínimo privilegio y ciberhigiene esencial

- **Explicación breve y clara:** La ciberseguridad eficaz para una pyme sigue la regla de Pareto: un conjunto pequeño de medidas disciplinadas neutraliza la gran mayoría de los incidentes. El eje central es la **identidad y el control de accesos**: si un atacante obtiene una contraseña, la autenticación multifactor (MFA) lo frena; si entra en un equipo, el principio de mínimo privilegio y la segmentación impiden que cifre toda la empresa.
- **Conceptos clave:** Autenticación multifactor (**MFA**), principio de mínimo privilegio, gestión de identidades y bajas (*onboarding/offboarding*), gestor de contraseñas corporativo, actualizaciones y parches (*patching*), enfoque *Zero Trust* (Confianza Cero), seguridad en teletrabajo y dispositivos móviles.
- **Definiciones necesarias:**
  - *Principio de mínimo privilegio:* Conceder a cada usuario, cuenta de servicio o *bot* únicamente los permisos estrictamente necesarios para desempeñar su trabajo (ningún usuario administrativo diario debería trabajar con permisos de administrador de sistema).
  - *Zero Trust (Confianza Cero):* Modelo de seguridad que asume que ninguna conexión ni dispositivo es confiable por estar dentro de la red de la oficina; toda solicitud se verifica explícitamente (identidad, dispositivo y permiso mínimo).
- **Ejemplo práctico realista:** En una asesoría de 24 empleados, todos compartían un mismo usuario administrador para el software de gestión y la contraseña estaba en un post-it. Al implantar cuentas nominales individuales, un gestor de contraseñas corporativo, MFA obligatorio en correo/VPN/ERP y un checklist de baja inmediata de accesos el mismo día que alguien abandona la empresa, eliminaron el riesgo de acceso indebido en remoto y lograron trazabilidad real de quién modifica cada archivo.
- **Errores frecuentes:**
  - Usar cuentas compartidas («admin@empresa.es» o «contabilidad@empresa.es») que impiden auditar quién hizo qué y complican revocar accesos tras una salida conflictiva.
  - Dejar abiertos puertos de escritorio remoto (RDP) directamente a internet sin VPN ni MFA (una de las puertas de entrada más explotadas por *ransomware*).
  - Permitir que los empleados trabajen con permisos de administrador local en sus portátiles, facilitando que cualquier archivo malicioso se instale y propague.
- **Preguntas que el alumnado debería poder responder:**
  - ¿Qué cinco controles básicos de ciberhigiene implantaríais en los primeros 30 días en una pyme con presupuesto ajustado?
  - ¿Por qué las cuentas compartidas y los permisos de administrador diario multiplican el daño de un incidente?
  - ¿Qué pasos exactos debe incluir un protocolo de baja de empleado (*offboarding*) en relación con los accesos digitales?

### 3.3. Copias de seguridad resilientes y continuidad de negocio (BCP)

- **Explicación breve y clara:** La pregunta correcta en ciberseguridad no es «¿nos atacarán alguna vez?», sino «**cuando ocurra un incidente, ¿cuánto tardaremos en volver a operar y cuántos datos perderemos?**». La ciberresiliencia descansa en dos pilares: una estrategia de copias de seguridad inmutables y probadas (**regla 3-2-1-1-0**) y un **Plan de Continuidad de Negocio (BCP)** sencillo que defina qué procesos críticos deben levantarse primero, en qué plazo (RTO/RPO) y cómo operar en modo degradado mientras se restauran los sistemas.
- **Conceptos clave:** Regla **3-2-1-1-0** de *backups*, copia inmutable / desconectada (*air-gapped*), Análisis de Impacto al Negocio (BIA), RTO y RPO, Plan de Continuidad de Negocio (BCP) y Plan de Recuperación ante Desastres (DRP), pruebas de restauración, ciberseguro.
- **Definiciones necesarias:**
  - *Regla 3-2-1-1-0 de copias de seguridad:* Mantener al menos **3** copias de los datos, en **2** soportes distintos, con **1** copia fuera de las instalaciones, **1** copia inmutable o desconectada (*offline/air-gapped* que un *ransomware* no pueda borrar ni cifrar) y **0** errores verificados mediante pruebas periódicas de restauración.
  - *Análisis de Impacto al Negocio (BIA):* Evaluación que clasifica los procesos de la empresa por criticidad (cuánto dinero y reputación se pierde cada hora de parada) para fijar el orden exacto de recuperación.
- **Ejemplo práctico realista:** Una empresa de distribución farmacéutica sufrió un *ransomware* un domingo por la noche. Gracias a que disponía de copias inmutables desconectadas probadas cada trimestre y un plan de continuidad en papel (con teléfonos de emergencia de IT, clientes clave y procedimiento temporal de albaranes), aisló los equipos infectados en 40 minutos, restauró el ERP en servidores limpios en 14 horas (dentro de su RTO de 24 h) y no pagó un solo euro de rescate.
- **Errores frecuentes:**
  - Tener copias de seguridad en un disco NAS conectado permanentemente a la misma red con credenciales accesibles: el *ransomware* cifra los servidores **y también el disco de copias**.
  - No haber probado nunca una restauración completa: descubrir el día del desastre que la copia lleva 4 meses fallando o que tarda 9 días en descargarse.
  - Guardar el Plan de Continuidad y los teléfonos de emergencia exclusivamente dentro del servidor corporativo que acaba de quedar cifrado.
- **Preguntas que el alumnado debería poder responder:**
  - ¿Qué significa cada dígito de la regla **3-2-1-1-0** y por qué el cuarto dígito (copia inmutable/desconectada) es vital frente al *ransomware*?
  - ¿Por qué el Plan de Continuidad de Negocio debe existir también en formato impreso o externo fuera de la red corporativa?
  - ¿Qué suele exigir una aseguradora antes de suscribir y pagar una póliza de ciberseguro (MFA, copias inmutables, parches)?

### 3.4. Respuesta a incidentes y marco de cumplimiento normativo

- **Explicación breve y clara:** Cuando ocurre un ciberincidente, la improvisación destruye evidencias, extiende el contagio y multiplica las sanciones legales. Toda pyme necesita un **Protocolo de Respuesta a Incidentes** claro en 6 fases (Preparación → Detección → Contención → Erradicación → Recuperación → Lecciones aprendidas) con roles claros (dirección, IT, legal, comunicación) y conocimiento de sus obligaciones legales de notificación. *(Nota obligatoria para el formador: verificar antes de impartir los plazos, umbrales y transposición vigente en España de la normativa aplicable: RGPD —plazo de notificación a la AEPD de 72 horas para brechas de datos personales—, Directiva NIS2 y su ley española de transposición para entidades esenciales/importantes y su efecto cascada sobre pymes proveedoras, Esquema Nacional de Seguridad —ENS— para contratistas públicos, y DORA en sector financiero).*
- **Conceptos clave:** Ciclo de respuesta a incidentes (NIST), contención inmediata (aislar sin apagar a ciegas si se necesitan evidencias), comité de crisis, comunicación a clientes/empleados, notificación legal (AEPD / INCIBE-CERT / Fuerzas y Cuerpos de Seguridad), cadena de suministro segura (NIS2/ENS).
- **Definiciones necesarias:**
  - *Brecha de seguridad de datos personales:* Incidente que ocasiona la destrucción, pérdida, alteración accidental o ilícita, o comunicación/acceso no autorizado a datos personales, pudiendo requerir notificación a la autoridad de control (AEPD) y, en casos de alto riesgo, a los propios afectados.
  - *Efecto cascada normativo:* Incluso si una pyme no queda obligada directamente por tamaño bajo directivas como NIS2 o ENS, sus clientes grandes o administraciones públicas le exigirán por contrato cumplir requisitos equivalentes de ciberseguridad y notificación rápida.
- **Ejemplo práctico realista:** Una pyme de desarrollo web descubrió un acceso no autorizado a la base de datos de un cliente europeo. En lugar de ocultarlo, activó su protocolo: aisló el servidor, preservó registros (*logs*), avisó a su soporte forense y asesoría legal en las primeras 4 horas, notificó al cliente (responsable del tratamiento) con transparencia y documentó la mitigación antes de las 24 horas. La transparencia profesional evitó una demanda por ocultación y reforzó la confianza comercial tras la auditoría posterior.
- **Errores frecuentes:**
  - Formatear equipos afectados de inmediato por pánico antes de conservar evidencias necesarias para investigar cómo entraron, interponer denuncia o reclamar al ciberseguro.
  - Ocultar una brecha de datos personales esperando «que nadie se entere», agravando drásticamente las sanciones y el daño reputacional cuando los datos aparecen filtrados.
  - Carecer de un listado preacordado de contactos externos de emergencia (soporte IT/respuesta forense, asesoría RGPD, INCIBE 017, seguro, banca).
- **Preguntas que el alumnado debería poder responder:**
  - ¿Qué tres acciones inmediatas debe ejecutar un mando intermedio en la primera hora tras sospechar un ataque *ransomware* o fraude financiero?
  - ¿Por qué una pyme proveedora de grandes empresas o administraciones públicas debe cuidar normas como NIS2 o ENS aunque tenga menos de 50 empleados?
  - ¿Qué consecuencias tiene ocultar una brecha de datos personales frente a gestionarla con un protocolo de notificación transparente?

---

## 4. Metodología didáctica (Secuencia de 4 horas / 240 minutos)

| Fase | Duración | Qué hace el formador | Qué hace el alumnado |
|---|---:|---|---|
| **1. Apertura y activación** | 25 min | Lanza la Actividad 1 («Detector exprés de *phishing* y fraude BEC» + termómetro de preparación) mostrando 4 mensajes realistas (correo, SMS, factura modificada y enlace urgente). | Examina los 4 mensajes en parejas, identifica señales de fraude y evalúa con sinceridad la vulnerabilidad actual de su empresa. |
| **2. Exposición breve / Microlearning I** | 35 min | Explica la anatomía de los 3 ataques que paralizan pymes (*phishing*, *BEC* y *ransomware* con doble extorsión) y los 6 controles esenciales de alto impacto (MFA, mínimo privilegio, parches, cuentas nominales, *offboarding* y verificación de IBAN). | Relaciona vulnerabilidades reales con controles de bajo coste y contrasta los hábitos actuales de su equipo. |
| **3. Análisis de caso práctico (Simulación de crisis)** | 45 min | Presenta el caso *Ingeniería y Montajes Eléctricos Atlántico S.L.* en formato «mesa de crisis» en tiempo acelerado (t=0 h, t=2 h, t=6 h). Organiza equipos de 3-4 personas. | Toma decisiones urgentes ante un ataque real combinado (*BEC* + *ransomware* en plena licitación pública), evalúa qué hacer y qué NO hacer, y diagnostica fallos previos. |
| **4. Exposición breve / Microlearning II** | 30 min | Expone la regla **3-2-1-1-0**, continuidad de negocio (BIA, RTO/RPO, plan en papel), ciclo de respuesta a incidentes y marco normativo de notificación (advirtiendo qué normativa y plazos verificar). | Contrasta sus decisiones de la simulación de crisis con el protocolo formal de respuesta y obligaciones legales/contractuales. |
| **5. Actividad práctica de aplicación y transferencia** | 60 min | Coordina la Actividad 2 (reconstrucción del Plan de Remediación a 30 días para *Montajes Atlántico*, 25 min) y la Actividad 3 (Plan Básico de Ciberresiliencia y Protocolo «Primeras 24 horas» para su propia empresa, 35 min). | Prioriza medidas correctoras del caso y redacta su propio protocolo accionable de prevención, *backup* y respuesta ante crisis para su pyme. |
| **6. Discusión guiada y puesta en común** | 25 min | Realiza un simulacro oral rápido («¿Qué pasa si mañana a las 8:30 h el servidor de facturación aparece cifrado?») sobre 3 protocolos del alumnado, evaluando claridad de roles y contactos. | Pone a prueba su protocolo «Primeras 24 horas» ante imprevistos realistas y detecta vacíos (contactos guardados solo en la nube, dudas de comunicación). |
| **7. Síntesis, evaluación sumativa y cierre del Bloque 7** | 20 min | Integra los 8 temas del Bloque 7 en una visión sistémica de transformación digital segura, aplica la evaluación sumativa y abre la puerta al **Bloque 8, Tema 1 (Supply chain)**. | Realiza la prueba final del tema y completa su compromiso de ciberhigiene ejecutable en 7 días. |
| **TOTAL** | **240 min** | | |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «El detector de ingeniería social y fraude BEC»

- **Objetivo:** Entrenar la detección crítica de intentos realistas de *phishing*, *smishing* y suplantación de proveedor (*BEC*) antes de abordar los controles organizativos.
- **Instrucciones para el alumnado:**
  1. Individualmente (7 min), revisad 4 comunicaciones simuladas realistas (un aviso urgente de «bloqueo de buzón Microsoft/Google», una factura de proveedor con nota de «cambio de cuenta bancaria por auditoría», un SMS de paquetería/Hacienda y un correo legítimo de banco sin enlace).
  2. Marcado rápido: ¿Legítimo o Fraude? Señalad al menos 2 pistas concretas en cada caso (dominio sutilmente alterado, urgencia artificial, solicitud de credenciales, incoherencia de canal).
  3. En plenario (13 min), comparad aciertos y debatid: «Si incluso mandos formados dudamos 10 segundos, ¿qué ocurre un viernes a las 14:30 h con 40 correos pendientes?».
- **Materiales necesarios:** Hoja o diapositivas con los 4 mensajes simulados.
- **Tiempo estimado:** 20 minutos (en fase de Apertura).
- **Rol del formador:** Desmontar la falsa confianza («a mí nunca me engañan») y mostrar por qué se necesitan **procesos y barreras técnicas** (MFA, verificación de IBAN por doble canal), no solo buena voluntad.
- **Producto o entregable esperado:** Diagnóstico de los 4 mensajes con pistas de detección identificadas.
- **Criterios de éxito:** Identificación precisa de señales técnicas (dominio/remitente/URL) y psicológicas (urgencia, autoridad, miedo).

### Actividad 2 (Aplicación): «Gabinete de crisis y plan de choque para Montajes Eléctricos Atlántico»

- **Objetivo:** Aplicar el protocolo de respuesta a incidentes (contención, decisión sobre rescate, notificación legal y recuperación) y diseñar un plan de remediación priorizado a 30 días.
- **Instrucciones para el alumnado:**
  1. En equipos de 3-4 personas, leed la cronología del incidente en *Ingeniería y Montajes Eléctricos Atlántico S.L.*.
  2. **Parte A — Decisiones de las primeras 6 horas (12 min):** Ordenad exactamente las 6 acciones inmediatas (qué desconectar y cómo, qué decidir respecto al pago del rescate, a quién avisar —IT/forense, banco por la transferencia BEC, administración licitadora, AEPD/INCIBE, policía— y cómo salvar la entrega de la licitación).
  3. **Parte B — Plan de choque a 30 días (13 min):** Listad los 5 controles prioritarios (por orden de impacto/coste) para que este incidente no vuelva a ocurrir.
- **Materiales necesarios:** Ficha del caso práctico y plantilla de cronología de crisis.
- **Tiempo estimado:** 25 minutos.
- **Rol del formador:** Introducir presión realista recordando el reloj de la licitación y los riesgos de borrar pruebas o pagar el rescate; corregir errores graves (como apagar y formatear sin conservar evidencias o no avisar al banco de inmediato por la transferencia BEC).
- **Producto o entregable esperado:** Secuencia priorizada de respuesta en las primeras 6 horas + plan de choque de 5 controles a 30 días.
- **Criterios de éxito:** Contención adecuada sin destruir evidencias, rechazo fundamentado al pago del rescate, activación correcta de avisos bancarios/legales y controles preventivos proporcionados.

### Actividad 3 (Transferencia a la realidad laboral): «Plan Básico de Ciberresiliencia y Tarjeta de Emergencia (Primeras 24 h)»

- **Objetivo:** Dotar a cada participante de una herramienta real e imprimible para elevar la seguridad de su empresa y saber exactamente cómo actuar en caso de ciberataque.
- **Instrucciones para el alumnado:**
  1. Completad la **Plantilla de Plan de Ciberresiliencia y Tarjeta de Emergencia** (sección 8) adaptada a vuestra empresa o emprendimiento:
     - **Bloque 1 (Auditoría rápida de 6 controles):** estado actual (Sí / Parcial / No) de MFA, mínimo privilegio, gestión de bajas, verificación doble de IBAN, parches y regla 3-2-1-1-0 de *backups*, con responsable y fecha objetivo en los próximos 30 días.
     - **Bloque 2 (Continuidad mínima):** los 3 procesos más críticos, su RTO/RPO máximo tolerable y cómo operar 24 h en modo manual/alternativo.
     - **Bloque 3 (Tarjeta de Emergencia «Primeras 24 h»):** roles internos (líder de crisis, IT, comunicación/legal), contactos externos críticos (a completar con teléfonos reales en la oficina y guardar impresa) y árbol de decisiones de las primeras 2 horas.
- **Materiales necesarios:** Plantilla de Plan de Ciberresiliencia y Tarjeta de Emergencia (sección 8).
- **Tiempo estimado:** 35 minutos + 25 minutos de simulacro oral en la fase 6.
- **Rol del formador:** Verificar que el plan sea realista para el tamaño de cada pyme y que el alumnado identifique dónde guardará la copia impresa fuera de la red informática.
- **Producto o entregable esperado:** Plan de mejora de 30 días + Tarjeta de Emergencia «Primeras 24 h» lista para completar con teléfonos reales e imprimir en la empresa.
- **Criterios de éxito:** Diagnóstico honesto de brechas actuales, definición clara de los 3 procesos críticos con RTO/RPO coherente y protocolo claro sin dependencias de sistemas caídos.

---

## 6. Caso práctico: Ingeniería y Montajes Eléctricos Atlántico S.L.

### Contexto empresarial
**Ingeniería y Montajes Eléctricos Atlántico S.L.** (A Coruña) es una pyme de instalaciones eléctricas industriales y mantenimiento de cuadros de media tensión con **52 empleados** (34 técnicos de campo, 8 ingenieros de proyectos, 6 administrativos/compras y 4 directivos/comerciales). Factura 6,9 millones de euros anuales y el 40 % de sus ingresos procede de contratos con grandes fábricas y licitaciones públicas de organismos autonómicos.

### Situación o problema
Un jueves a las **09:15 h**, exactamente **28 horas antes del cierre de plazo** para presentar una licitación pública clave valorada en 1,8 millones de euros, se desencadena una doble crisis:
1. Dos días antes, una administrativa cayó en un correo de *phishing* aparentemente enviado por su proveedor de cableado habitual (con el dominio ligeramente alterado), introdujo sus credenciales de correo sin MFA y, siguiendo un PDF adjunto que avisaba de «cambio de cuenta bancaria», cursó una transferencia de **36.500 €** ayer miércoles a las 13:40 h.
2. Con esas mismas credenciales robadas (que además tenían permisos de acceso amplio en la red y acceso remoto sin MFA), los atacantes desplegaron esta mañana un ***ransomware*** que ha cifrado el servidor local de proyectos (donde estaba la memoria técnica de la licitación y datos personales/nóminas de los 52 empleados) y el disco NAS de copias de seguridad conectado en la misma red.
3. En las pantallas aparece una nota exigiendo **28.000 € en criptomonedas en menos de 24 horas** bajo amenaza de destruir la clave de descifrado y publicar los planos confidenciales de clientes industriales y las nóminas de la plantilla.

### Datos disponibles

| Área / Elemento | Estado en el momento del incidente (jueves 09:15 h) |
|---|---|
| **Ordenadores y servidor central** | Servidor de proyectos/ERP y 14 PCs de oficina cifrados; 6 portátiles de ingenieros que estaban fuera de oficina (apagados o sin conectar aún a la VPN) siguen limpios. |
| **Copias de seguridad** | El NAS local en red fue cifrado. Existe una copia antigua en disco duro externo guardado en caja fuerte de gerencia de **hace 11 días** (sin probar nunca su restauración) y correos recientes en la nube corporativa (cuya cuenta de administración aún no se ha bloqueado). |
| **Memoria de la licitación pública** | El borrador al 90 % se envió por correo el martes por la tarde al ingeniero jefe, que lo tiene en local en su portátil todavía desconectado de la red. |
| **Transferencia fraudulenta BEC (36.500 €)** | Realizada hace menos de 20 horas hacia una cuenta extranjera; aún no se ha llamado al banco ni puesto denuncia. |
| **Contratos y cumplimiento** | Varios clientes industriales son operadores críticos (sujetos a exigencias tipo NIS2) y la empresa maneja datos personales de empleados (nóminas, DNI, cuentas) y contratos públicos (exigencias de seguridad/ENS). |
| **Soporte y póliza** | Tienen un proveedor IT local pequeño (mantenimiento básico, sin experiencia forense) y NO tienen contratado ciberseguro. Desconocen el teléfono de apoyo de INCIBE (017 en España —verificar servicio vigente—). |

### Preguntas de análisis
1. ¿Qué cadena de fallos preventivos permitió que un único correo de *phishing* desencadenara tanto el fraude financiero de 36.500 € como el secuestro completo del servidor y del *backup*?
2. En la **primera hora (09:15–10:15 h)**, ¿qué acciones técnicas, bancarias y organizativas son prioritarias y qué errores fatales debemos evitar (como conectar los 6 portátiles limpios a la red o apagar/formatear sin preservar evidencias)?
3. ¿Debe la dirección pagar los 28.000 € de rescate para intentar salvar la licitación y evitar la filtración? Argumentad operativa, económica y legalmente.
4. ¿Cómo puede la empresa presentar la licitación a tiempo operando en modo contingencia, y qué obligaciones de notificación externa (banco, policía, AEPD por nóminas/datos personales, clientes industriales afectados) deben activarse?

### Tarea a realizar
En equipos de 3-4 personas, actuad como Comité de Crisis externo de *Montajes Atlántico S.L.* y redactad:
1. **Protocolo de acción inmediata (Horas 0 a 24):** lista ordenada de decisiones (contención, recuperación de transferencia BEC, decisión sobre rescate, plan alternativo para presentar la licitación y notificaciones legales/comerciales).
2. **Plan de Remediación a 30 días:** los 6 controles imprescindibles (con coste asumible para una pyme de 52 empleados) ordenados por prioridad para reconstruir de forma segura.

### Posibles soluciones o criterios de análisis
- **Acciones inmediatas (Horas 0-2):**
  1. **Contención sin destruir evidencias:** Desconectar de la red (cable/Wi-Fi) los equipos afectados y bloquear inmediatamente accesos VPN y la cuenta de correo comprometida (cambiando contraseñas de administración desde un equipo limpio); **prohibir estrictamente conectar los 6 portátiles limpios** a la red de la oficina hasta limpiar la infraestructura.
  2. **Acción urgente contra el fraude BEC (cada minuto cuenta):** Llamar de inmediato al banco solicitando bloqueo/retrocesión urgente (*recall*) de la transferencia de 36.500 € e interponer denuncia policial inmediata (requisito bancario).
  3. **Apoyo especializado:** Contactar con un equipo profesional de respuesta a incidentes / soporte institucional (p. ej., canal de ayuda a empresas de INCIBE en España —verificar servicio vigente—) para análisis forense y verificación antes de restaurar la copia de hace 11 días en hardware limpio.
  4. **Decisión sobre rescate:** **NO pagar los 28.000 €** (no garantiza recuperación ni borrado real de datos exfiltrados, no elimina la obligación legal de notificar la brecha de datos personales y fomenta nuevos ataques).
  5. **Continuidad para la licitación:** Utilizar el portátil limpio del ingeniero jefe (operando fuera de la red infectada, desde conexión móvil segura y cuentas revisadas con nueva contraseña + MFA) para terminar el 10 % restante de la memoria y presentar la licitación en plazo.
  6. **Cumplimiento y comunicación transparente:** Evaluar inmediatamente con asesoría jurídica la **notificación de brecha de datos personales ante la AEPD** (por exfiltración potencial de nóminas/DNI; verificar plazo legal vigente de 72 h bajo RGPD) e informar con transparencia y hechos verificados a empleados y clientes industriales cuyos planos hayan podido quedar expuestos.
- **Plan de remediación prioritario a 30 días:** (1) MFA obligatorio en 100 % de cuentas (correo, VPN, ERP, banca), (2) regla de doble canal para cambios de IBAN/pagos, (3) arquitectura de *backups* 3-2-1-1-0 con copia inmutable/desconectada y prueba trimestral de restauración, (4) eliminación de permisos de administrador local y segmentación de red, (5) formación práctica anti-*phishing* a toda la plantilla y (6) Plan de Continuidad + Tarjeta de Emergencia impresa y evaluación de ciberseguro/requisitos ENS-NIS2.

### Preguntas de reflexión final
- ¿Cuánto habría costado implantar MFA, verificación telefónica de IBAN y una copia inmutable externa antes del ataque frente a los más de 36.500 € + horas de parada + impacto reputacional sufridos?
- Si este ataque ocurriera mañana a las 9:15 h en vuestra empresa, ¿sabríais exactamente a qué teléfono llamar primero sin encender vuestro ordenador?

---

## 7. Evaluación

### Evaluación diagnóstica breve (al inicio)
Sondeo anónimo de 4 preguntas (Sí / No / No lo sé):
1. ¿Tiene tu empresa activado el doble factor de autenticación (MFA) en el correo corporativo y acceso remoto?
2. ¿Existe una regla obligatoria de verificación telefónica (a un número ya registrado) ante cualquier cambio de IBAN de un proveedor?
3. ¿Se ha probado alguna vez en los últimos 6 meses restaurar realmente una copia de seguridad completa?
4. ¿Sabrías a quién llamar y qué hacer en los primeros 30 minutos si hoy aparece un aviso de *ransomware*?

### Evaluación formativa durante la sesión
- Puesta en común de pistas técnicas y psicológicas en la Actividad 1 («Detector de ingeniería social»).
- Revisión crítica de las decisiones de crisis tomadas en el caso *Montajes Atlántico* (Actividad 2), corrigiendo en tiempo real impulsos peligrosos (pagar rescate, conectar equipos limpios, no avisar al banco de inmediato).
- Simulacro oral de estrés en la fase 6 sobre las Tarjetas de Emergencia creadas por el alumnado.

### Evaluación sumativa al final
1. Entrega individual del **Plan Básico de Ciberresiliencia y Tarjeta de Emergencia (Primeras 24 h)** (Actividad 3).
2. Cuestionario sumativo de 6 preguntas prácticas (identificación de *BEC* y doble extorsión, principio de mínimo privilegio, regla 3-2-1-1-0, orden de respuesta a incidentes, RTO/RPO y obligaciones básicas de notificación de brechas).

### Rúbrica de evaluación (para el Plan de Ciberresiliencia y Tarjeta de Emergencia)

| Criterio | Insuficiente (1) | En desarrollo (2) | Adecuado (3) | Destacado (4) |
|---|---|---|---|---|
| **Diagnóstico de riesgos y controles preventivos** | Plantea medidas vagas («tener cuidado con virus») sin diagnosticar su empresa. | Identifica algunas brechas, pero omite controles críticos como MFA, mínimo privilegio o verificación de IBAN. | Evalúa honestamente los 6 controles clave en su pyme y asigna acciones priorizadas a 30 días con responsables. | Prioriza controles por riesgo/coste incluyendo gestión de bajas, segmentación IT/OT o proveedores y formación anti-*phishing* realista. |
| **Estrategia de *backups* y continuidad (BCP)** | Confunde sincronización con copia segura o no define procesos críticos ni tiempos de recuperación. | Identifica procesos importantes pero sin RTO/RPO claros ni pruebas de restauración. | Aplica la regla 3-2-1-1-0 (incluyendo copia inmutable), define 3 procesos críticos con RTO/RPO y operativa alternativa 24 h. | Diseña continuidad ejecutable con pruebas periódicas programadas, copias externas validadas y plan accesible fuera de la red corporativa. |
| **Protocolo de respuesta «Primeras 24 horas»** | Carece de secuencia lógica, no distingue contención de recuperación o propone acciones contraproducentes. | Secuencia parcial sin roles claros ni distinción entre emergencias financieras, técnicas y legales. | Define secuencia clara (contención, preservación de evidencias, roles, contactos externos y criterios de comunicación). | Supera el simulacro de estrés con tarjeta operativa imprimible, árbol de escalado claro y respuesta diferenciada ante *ransomware* y *BEC*. |
| **Cumplimiento y gestión de terceros** | Ignora obligaciones legales de notificación o impacto sobre clientes/empleados. | Menciona «avisar a la ley» de forma imprecisa sin roles ni consideración de clientes/proveedores. | Contempla evaluación legal de brechas de datos personales, comunicación transparente y prevención del efecto cascada en clientes. | Integra cumplimiento (RGPD y requisitos de clientes/cadena de suministro) en el protocolo de crisis de forma pragmática y auditable. |

### Actividad de autoevaluación o reflexión
«Compromiso de los 7 días de ciberhigiene» (5 min): el alumnado selecciona **3 acciones concretas sin apenas coste** que ejecutará en los próximos 7 días (por ejemplo: activar MFA en su cuenta y dirección, instaurar la regla de verificación de IBAN en administración, preguntar a IT si la copia es inmutable y cuándo se probó por última vez, e imprimir su Tarjeta de Emergencia con teléfonos reales).

---

## 8. Materiales y recursos

### Guion de diapositivas (estructura slide por slide)

1. **Portada:** Bloque 7 · Tema 8. Ciberseguridad: proteger la transformación digital de la pyme.
2. **Activación:** Detector de ingeniería social — 4 mensajes reales en la bandeja de entrada de un viernes.
3. **El mito del tamaño:** Por qué las pymes sufren ataques automatizados de *phishing*, *BEC* y *ransomware* con doble extorsión.
4. **Pareto de la ciberseguridad (80/20):** Los 6 controles de alto impacto y bajo coste (MFA, mínimo privilegio, cuentas nominales, *offboarding*, parches y verificación de IBAN).
5. **De la oficina a la nube y la planta:** Asegurar teletrabajo, accesos remotos (VPN, nunca RDP abierto) y segmentación IT/OT.
6. **Caso práctico (Mesa de Crisis):** *Ingeniería y Montajes Eléctricos Atlántico S.L.* — jueves 09:15 h, doble ataque y 28 h para una licitación clave.
7. **Copias de seguridad que de verdad salvan:** La regla **3-2-1-1-0** y por qué un NAS conectado no te protege del *ransomware*.
8. **Continuidad de negocio (BCP) para pymes:** BIA sencillo, RTO/RPO y operar en modo degradado.
9. **Protocolo de Respuesta a Incidentes:** Las 6 fases y los 4 errores que nunca deben cometerse en la primera hora.
10. **¿Pagar o no pagar el rescate?** Análisis frío de riesgos operativos, financieros y reputacionales.
11. **Cumplimiento normativo y efecto cascada:** RGPD (brechas de datos), NIS2, ENS y exigencias de clientes grandes *(con aviso de verificación obligatoria)*.
12. **Taller práctico:** Plan de Ciberresiliencia a 30 días + Tarjeta de Emergencia «Primeras 24 horas».
13. **Simulacro oral de crisis:** Probando nuestras tarjetas de emergencia bajo presión.
14. **Cierre del Bloque 7 y puente al Bloque 8:** Transformación digital completa y resiliente → cómo aplicarla ahora a la cadena de suministro (*Supply Chain*, Bloque 8, Tema 1).

### Ficha de trabajo
Documento de 2 páginas con:
- Los 4 mensajes simulados de *phishing/BEC* con guía de corrección (Actividad 1).
- Checklist de cronología de crisis de *Montajes Atlántico S.L.* (Actividad 2).

### Plantilla práctica replicable: Plan de Ciberresiliencia y Tarjeta de Emergencia (1 página imprimible)

**Parte A — Diagnóstico exprés y Plan de Choque a 30 días**

| Control esencial | Estado actual (Sí / Parcial / No) | Acción concreta en 30 días | Responsable |
|---|---|---|---|
| 1. MFA obligatorio (correo, ERP, VPN, banca) | | | |
| 2. Cuentas nominales + principio mínimo privilegio (sin admin diario) | | | |
| 3. Protocolo de altas y bajas inmediatas (*offboarding*) | | | |
| 4. Verificación telefónica por canal previo ante cambios de IBAN | | | |
| 5. Actualizaciones automáticas + sin escritorios remotos abiertos | | | |
| 6. Copias de seguridad 3-2-1-1-0 (inmutable/desconectada + prueba) | | | |

**Parte B — Continuidad mínima (Top 3 procesos críticos)**
- Proceso 1: __________ | RTO máximo: ____ h | RPO máximo: ____ h | Operativa alternativa 24 h: __________
- Proceso 2: __________ | RTO máximo: ____ h | RPO máximo: ____ h | Operativa alternativa 24 h: __________
- Proceso 3: __________ | RTO máximo: ____ h | RPO máximo: ____ h | Operativa alternativa 24 h: __________

**Parte C — Tarjeta de Emergencia «Primeras 24 horas» (Guardar impresa fuera de la red)**
- **Paso 1 (0-30 min — Contención):** Aislar equipos sospechosos de la red sin formatear; bloquear cuentas comprometidas; avisar al equipo de NO conectar dispositivos limpios.
- **Paso 2 (Si hay fraude bancario):** Llamada inmediata al banco (solicitud *recall*) + denuncia policial inmediata.
- **Paso 3 (0-4 h — Escalado):** Activar soporte IT/forense + asesoría legal RGPD + dirección.
- **Directorio de emergencia (completar e imprimir):** Líder interno de crisis | Soporte IT / Forense | Asesoría Legal/DPO | Banco (teléfono bloqueos) | Ciberseguro (póliza/tel.) | Canal oficial de ayuda ciberseguridad (p. ej. INCIBE 017 — verificar vigencia) | Policía/Guardia Civil.

### Lecturas o recursos recomendados
- Guías prácticas y políticas de seguridad tipo para pymes de **INCIBE** (Instituto Nacional de Ciberseguridad de España — programa Protege tu Empresa).
- Marco divulgativo de ciberseguridad del **NIST** (*NIST Cybersecurity Framework — CSF 2.0*: Gobernar, Identificar, Proteger, Detectar, Responder, Recuperar).
- Documentación orientativa sobre gestión de brechas de datos personales de la **AEPD**.

### Vídeos, artículos y fuentes adicionales *(Validación previa obligatoria)*
> **Nota importante para el formador:** Validar antes de impartir todas las referencias normativas, teléfonos de asistencia y guías oficiales, ya que el marco legal de ciberseguridad evoluciona rápidamente.
- Verificar el estado vigente en España de la **transposición de la Directiva (UE) 2022/2555 (NIS2)**, los sectores y umbrales incluidos y su impacto indirecto sobre pymes proveedoras.
- Confirmar los procedimientos y plazos vigentes de notificación de brechas de datos personales de la **AEPD** (art. 33 y 34 del RGPD) y requisitos vigentes del **Esquema Nacional de Seguridad (ENS)** para pymes que licitan con administraciones públicas.
- Verificar los servicios vigentes y números de atención gratuita para empresas de **INCIBE** (servicio Tu Ayuda en Ciberseguridad / 017) y herramientas gratuitas de autodiagnóstico de ciberseguridad para pymes.

### Glosario de términos clave

| Término | Definición operativa |
|---|---|
| ***BEC (Business Email Compromise)*** | Fraude basado en suplantación o compromiso de correo corporativo para desviar transferencias bancarias (fraude del CEO o de proveedor). |
| **BIA (*Business Impact Analysis*)** | Análisis que cuantifica el daño de paralizar cada proceso crítico para priorizar el orden de recuperación. |
| **Copia inmutable (*air-gapped*)** | Copia de seguridad protegida contra modificación o borrado —o aislada de la red— para sobrevivir a un ataque *ransomware*. |
| **Doble extorsión** | Táctica de *ransomware* que combina cifrar los sistemas con amenazar con publicar los datos robados si no se paga. |
| **MFA (Autenticación Multifactor)** | Verificación de identidad que exige al menos dos factores distintos (contraseña + código en móvil o llave física) para acceder. |
| ***Phishing / Spear phishing*** | Engaño digital para robar credenciales o instalar *malware*; el *spear phishing* está altamente personalizado hacia una empresa o directivo concreto. |
| **Principio de mínimo privilegio** | Regla de otorgar a cada cuenta únicamente los accesos estrictamente necesarios para su función. |
| ***Ransomware*** | Código malicioso que secuestra archivos y sistemas mediante cifrado exigiendo un pago para su supuesta liberación. |
| **Regla 3-2-1-1-0** | Estándar de resiliencia en copias de seguridad: 3 copias, 2 medios, 1 externa, 1 inmutable/desconectada y 0 errores tras probar la restauración. |
| ***Zero Trust*** | Filosofía de seguridad basada en «nunca confiar, siempre verificar» cada acceso independientemente de si proviene de dentro o fuera de la oficina. |

---

## 9. Adaptaciones para modalidad híbrida

### Sesión presencial
- Entregar físicamente los 4 correos/mensajes de la Actividad 1 en tarjetas impresas para subrayar en rojo las pistas de fraude.
- Imprimir la «Tarjeta de Emergencia» en cartulina tamaño media cuartilla (A5) para que cada participante se la lleve en su carpeta y la coloque junto a su mesa tras rellenar los teléfonos reales de su empresa.

### Sesión online síncrona
- Realizar la simulación de mesa de crisis de *Montajes Atlántico* lanzando dos «actualizaciones en tiempo real» en el chat de las *breakout rooms* (por ejemplo, a los 10 minutos: «el banco informa de que quedan 2 horas antes de que los fondos salgan definitivamente de la cuenta destino» y «un cliente industrial llama preguntando por un rumor en el sector») para entrenar la toma de decisiones serena bajo presión.
- Utilizar encuestas anónimas para la evaluación diagnóstica inicial, favoreciendo total honestidad sobre carencias de MFA o *backups*.

### Sesión asíncrona (trabajo previo y posterior en plataforma LMS)
- **Pre-trabajo (20 min):** Completar de forma confidencial el autodiagnóstico inicial de 4 preguntas en el LMS y leer una ficha de 1 página sobre los 5 tipos de ingeniería social más frecuentes en pymes.
- **Post-trabajo (35 min):** Subir al LMS el Plan de Ciberresiliencia a 30 días + Tarjeta de Emergencia (anonimizando teléfonos personales/privados si se desea) y completar el cuestionario integrador de cierre del Bloque 7.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Actúa como capa transversal y cierre integrador de todo el **Bloque 7 (Transformación digital)**: protege los documentos y procesos digitalizados (T1), los datos y entornos de IA (T2), los sensores y redes OT de IoT (T3), la custodia de claves e integridad en *blockchain* (T4), los repositorios de BI (T5), la responsabilidad compartida en *cloud* (T6) y los *bots* RPA y robots conectados (T7).
- **Competencias que desarrolla:** Gestión directiva del ciberriesgo, pensamiento de continuidad de negocio, liderazgo sereno en gestión de crisis y cultura de cumplimiento normativo en entornos digitales.
- **Conexión dentro del plan de 10 bloques:**
  - *Tema anterior (Bloque 7, Tema 7 — Automatización y robótica industrial):* La automatización intensiva en oficina y planta incrementa la dependencia tecnológica y la superficie conectada, haciendo indispensable la ciberresiliencia.
  - *Tema posterior (Bloque 8, Tema 1 — Supply chain):* Cierra el Bloque 7 conectando directamente con el **Bloque 8 (Operaciones, logística y cadena de suministro)**, donde todas estas tecnologías digitales —junto con la ciberseguridad de proveedores y trazabilidad— se aplican al gobierno integral de la *supply chain*.
- **Evidencia de aprendizaje que dejará el alumnado:** Un **Plan Básico de Ciberresiliencia a 30 días y una Tarjeta de Emergencia «Primeras 24 horas»** aplicada a su empresa, validada en simulacro de crisis y evaluada mediante rúbrica.

---

## Siguientes pasos para el formador

1. **Verificar normativa y recursos públicos vigentes:** Comprobar antes de impartir la transposición española vigente de NIS2, los plazos/procedimientos de la AEPD ante brechas de datos y los canales activos de ayuda a empresas de INCIBE (017).
2. **Preparar las 4 piezas realistas de *phishing/BEC*:** Redactar los 4 ejemplos (con datos y dominios 100 % ficticios) cuidando detalles creíbles como dominios con una letra cambiada o facturas urgentes antes de un puente.
3. **Conducir la simulación con enfoque constructivo:** Evitar el alarmismo paralizante o el tono culpabilizador; reforzar que la ciberseguridad en pymes es un proceso gestionable paso a paso empezando por 6 hábitos sencillos.
4. **Cerrar el Bloque 7 conectando con el Bloque 8:** Hacer un breve mapa integrador de los 8 temas recorridos (de digitalización a ciberseguridad) y presentar cómo esas capacidades habilitan cadenas de suministro resilientes y competitivas en el Bloque 8, Tema 1 (*Supply chain*).
