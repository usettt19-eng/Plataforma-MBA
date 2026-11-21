# Tema 4. Almacenamiento de datos

## 1. Ficha del tema

| Campo | Detalle |
| --- | --- |
| **Título del tema** | Almacenamiento de datos: bases de datos, *data warehouse*, *data lake*, cloud, copias de seguridad y arquitecturas de datos |
| **Bloque y posición dentro del programa** | Bloque 10: Gestión de datos — Tema 4 de 5 (Programa de Dirección, Innovación y Negocios Digitales) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Mandos intermedios y emprendedores |
| **Nivel de dificultad** | Intermedio |
| **Prerrequisitos** | Haber cursado los Temas 2 (Gestión del dato) y 3 (Privacidad de datos), y manejar conceptos básicos de software empresarial (ERP, CRM, almacenamiento en la nube). |
| **Resultado general de aprendizaje** | Seleccionar y dimensionar arquitecturas de almacenamiento de datos, modelos cloud y planes de copias de seguridad proporcionales al volumen, tipo de dato, presupuesto y requisitos de continuidad de una pyme o negocio digital. |

---

## 2. Objetivos de aprendizaje

Al finalizar este tema, el alumnado será capaz de:

1. **Diferenciar** (Comprender) las características, ventajas y casos de uso apropiados de las bases de datos relacionales (SQL), bases de datos no relacionales (NoSQL), *data warehouses*, *data lakes* y arquitecturas *lakehouse*.
2. **Distinguir** (Analizar) las necesidades operativas diarias (cargas OLTP) de las necesidades de análisis e informes (cargas OLAP) para evitar bloqueos de rendimiento en los sistemas críticos de la pyme.
3. **Evaluar** (Evaluar) alternativas de infraestructura (*on-premise*, nube pública, nube híbrida y servicios gestionados) considerando coste total de propiedad (TCO), escalabilidad, dependencia de proveedor (*vendor lock-in*) y localización geográfica de datos (cumplimiento RGPD).
4. **Diseñar** (Crear) un plan de copias de seguridad y recuperación ante desastres aplicando la regla 3-2-1-1-0 y definiendo objetivos medibles de recuperación (RPO y RTO) para procesos críticos de negocio.
5. **Elaborar** (Crear) un diagrama conceptual de arquitectura de datos ligera (*Modern Data Stack* adaptado a pyme) que integre fuentes operativas, almacenamiento analítico y capa de explotación sin sobredimensionar costes.

---

## 3. Contenidos esenciales

### 3.1. Tipos de datos y bases de datos: SQL frente a NoSQL y OLTP frente a OLAP

**Explicación breve y clara**
Muchos mandos intermedios y emprendedores se bloquean ante la jerga técnica del almacenamiento ("SQL, NoSQL, data lake, cloud") y acaban delegando decisiones costosas sin criterios de negocio, o al revés, forzando hojas de Excel mucho más allá de sus límites. Comprender la diferencia entre guardar datos para operar cada segundo (OLTP) y guardar datos para analizar tendencias históricas (OLAP) permite dialogar con solvencia con proveedores tecnológicos y evitar arquitecturas innecesariamente caras o frágiles.

| Criterio | Base de datos Relacional (SQL) | Base de datos No Relacional (NoSQL) |
| --- | --- | --- |
| **Tipo de dato ideal** | Estructurado en tablas, filas y columnas con esquema rígido | Semiestructurado o flexible (JSON, documentos, eventos, grafos, series temporales) |
| **Fortaleza principal** | Integridad transaccional estricta (ACID), relaciones claras | Flexibilidad de esquema, gran velocidad con datos cambiantes o masivos |
| **Ejemplos habituales** | PostgreSQL, MySQL, SQL Server, Oracle | MongoDB, Firestore, Redis, DynamoDB, InfluxDB |
| **Uso típico en pyme** | Facturación, pedidos, contabilidad, inventario, reservas | Catálogos con atributos muy variables, sesiones web, registros de sensores IoT, chats |

**Conceptos clave**
- Datos estructurados, semiestructurados (JSON, XML) y no estructurados (PDF, audio, imagen, vídeo).
- Cargas **OLTP** (*Online Transaction Processing*: muchas operaciones cortas de lectura/escritura en tiempo real, como cobrar un pedido) frente a cargas **OLAP** (*Online Analytical Processing*: consultas masivas de históricos para cuadros de mando y previsiones).
- Límites prácticos de las hojas de cálculo como "base de datos improvisada".

**Definiciones necesarias**
- **Base de datos relacional (SQL):** Sistema que almacena información en tablas vinculadas mediante claves primarias y foráneas, garantizando consistencia estricta.
- **Base de datos NoSQL:** Familia de motores de almacenamiento diseñados para modelos de datos flexibles (documentos, clave-valor, columnas o grafos) donde un esquema tabular rígido resulta limitante.
- **Esquema (*Schema*):** Estructura formal que define qué campos, tipos de datos y relaciones admite una base de datos.

**Ejemplo práctico realista**
Una tienda online de recambios de bicicleta en Zaragoza lanzaba cada lunes a las 09:00 h sus informes de Power BI directamente contra la base de datos de producción de su tienda (OLTP). Cada vez que el equipo comercial abría el cuadro de mando, la web se ralentizaba durante 20 minutos y perdían ventas. Separaron el análisis creando una réplica nocturna/horaria dedicada a analítica (OLAP), eliminando el impacto en la tienda.

**Errores frecuentes**
- Utilizar hojas de Excel compartidas como base de datos operativa concurrente para 15 empleados (corrupción de archivos, falta de trazabilidad y límites de volumen).
- Ejecutar consultas analíticas pesadas directamente sobre la base de datos operativa del ERP o e-commerce en horas punta.
- Elegir una base de datos NoSQL "porque está de moda" para datos financieros o de inventario que requieren integridad relacional estricta.

**Preguntas que el alumnado debería poder responder**
- ¿Por qué conviene separar el entorno operativo (OLTP) del entorno analítico (OLAP) cuando crece el volumen de consultas?
- ¿Qué señales indican que una pyme ha superado el límite razonable de gestionar un proceso en hojas de cálculo?

---

### 3.2. Data Warehouse, Data Lake y Lakehouse: qué necesita realmente una pyme

**Explicación breve y clara**
Cuando una empresa necesita cruzar históricos de ventas del ERP, campañas de Google/Meta Ads, tickets de soporte y datos externos (como los *open data* del Tema 1), un solo sistema operativo ya no basta. Aquí entran los repositorios analíticos: *Data Warehouse*, *Data Lake* y *Lakehouse*. El reto directivo es elegir el nivel proporcional a la madurez y volumen real de la pyme, sin caer en el "síndrome del sobre-diseño".

| Arquitectura | Qué almacena | Nivel de preparación del dato | Cuándo tiene sentido en una pyme |
| --- | --- | --- | --- |
| **Data Mart / BD analítica ligera** | Datos estructurados de 1 o 2 áreas (ej.: Ventas + Marketing) | Limpio y estructurado | Pymes que dan su primer paso en BI centralizado con bajo presupuesto |
| **Data Warehouse (DWH)** | Datos estructurados integrados de múltiples sistemas de la empresa | Estructurado y modelado (*schema-on-write*) | Pymes consolidadas con varios sistemas (ERP, CRM, e-commerce) que necesitan una capa única de reporting fiable |
| **Data Lake** | Todo tipo de datos en bruto (estructurados, JSON, logs, imágenes, IoT, audio) | En bruto (*schema-on-read*) | Empresas con alto volumen de datos no estructurados, sensores IoT o casos de analítica avanzada/IA |
| **Data Lakehouse** | Combina la flexibilidad/bajo coste del Lake con el gobierno y rendimiento SQL del Warehouse | Capas progresivas (Bronce: bruto → Plata: limpio → Oro: negocio) | Empresas digitales en crecimiento que unen BI tradicional + ciencia de datos/IA sobre una misma plataforma |

**Conceptos clave**
- *Schema-on-write* (estructurar al guardar) frente a *schema-on-read* (estructurar al consultar).
- Arquitectura Medallón (capas Bronce, Plata y Oro).
- Riesgo del *Data Swamp* (pantano de datos): un *Data Lake* sin catálogo ni gobernanza (Tema 2) se convierte en un vertedero inservible.
- *Modern Data Stack* ligero en la nube (pago por uso).

**Definiciones necesarias**
- **Data Warehouse (Almacén de datos):** Repositorio central optimizado para consultas analíticas rápidas sobre datos históricos integrados y estructurados (ej.: BigQuery, Snowflake, Azure Synapse, Amazon Redshift o PostgreSQL analítico en escalas pequeñas).
- **Data Lake (Lago de datos):** Repositorio de almacenamiento masivo de bajo coste capaz de guardar datos en su formato original (estructurados y no estructurados) para procesarlos posteriormente (ej.: Amazon S3, Azure Data Lake Storage, Google Cloud Storage).
- **Data Swamp (Pantano de datos):** Lago de datos carente de metadatos, calidad y gobierno en el que resulta imposible localizar o confiar en la información almacenada.

**Ejemplo práctico realista**
Una empresa de 45 empleados de venta directa de equipamiento deportivo en Alicante quería "montar un Data Lake para hacer Big Data" tras asistir a una feria. Al revisar sus datos reales (300.000 pedidos al año, ERP, Shopify y campañas digitales, todo tabular), el consultor demostró que un pequeño *Data Warehouse* cloud (pago por consulta, coste mensual inferior a 150 €) cubría el 100 % de sus necesidades analíticas en 4 semanas frente a un proyecto de *Data Lake* diez veces más caro y complejo.

**Errores frecuentes**
- Montar un *Data Lake* cuando todos los datos de la empresa son tabulares y caben sobradamente en un *Data Warehouse* ligero.
- Volcar archivos sin orden ni metadatos en almacenamiento en la nube pensando que eso ya es un *Data Lake* analítico.
- Olvidar el coste de mantenimiento del equipo o proveedor necesario para operar arquitecturas complejas.

**Preguntas que el alumnado debería poder responder**
- ¿En qué se diferencia un *Data Warehouse* de un *Data Lake* en cuanto al tipo de datos que guarda y al momento en que se estructuran?
- ¿Cómo evitar que un repositorio central de datos acabe convirtiéndose en un "pantano de datos"?

---

### 3.3. Modelos de despliegue: On-premise, Cloud y Nube Híbrida

**Explicación breve y clara**
Decidir *dónde* viven los datos (en un servidor físico en nuestra oficina o en centros de datos en la nube) es una decisión financiera, operativa y legal. La nube convierte inversión inicial fija (CAPEX) en gasto operativo variable (OPEX) y ofrece elasticidad, pero exige gobernar costes (*FinOps* básico), controlar la dependencia de proveedor (*vendor lock-in*) y garantizar la ubicación geográfica de los datos en la Unión Europea para cumplir con el Tema 3.

**Conceptos clave**
- Modelos de infraestructura: *On-premise* (servidores propios), Cloud pública (AWS, Azure, Google Cloud, proveedores europeos), Cloud privada y Nube Híbrida.
- Niveles de servicio: IaaS (Infraestructura), PaaS (Plataforma gestionada) y SaaS (Software como servicio).
- Coste total de propiedad (TCO) y control de costes cloud (*FinOps* para pymes: alertas de consumo, almacenamiento "frío" para históricos).
- Dependencia de proveedor (*vendor lock-in*) y soberanía/región de los datos (región UE).

**Definiciones necesarias**
- **Almacenamiento por niveles (*Storage Tiering*):** Clasificación de datos según frecuencia de acceso (caliente: uso diario; templado: consulta ocasional; frío/archivo: históricos legales o copias de largo plazo a coste muy reducido).
- **Vendor Lock-in:** Dificultad técnica o sobrecoste económico elevado para migrar datos y procesos de un proveedor tecnológico a otro.
- **FinOps (gestión financiera del cloud):** Práctica de monitorizar, presupuestar y optimizar el consumo de recursos en la nube para evitar sorpresas en la factura mensual.

**Ejemplo práctico realista**
Una empresa de ingeniería y arquitectura técnica de 35 personas en Bilbao guardaba 18 TB de planos CAD históricos de los últimos 12 años en discos caros de acceso rápido en la nube. Al aplicar una política de almacenamiento por niveles (proyectos activos de los últimos 18 meses en capa estándar y proyectos cerrados en capa de archivo frío en región UE), redujeron su factura anual de almacenamiento en más de la mitad sin perder ningún archivo.

**Errores frecuentes**
- Comparar solo el precio de compra de un servidor físico frente a la cuota cloud sin incluir en el *on-premise* electricidad, refrigeración, licencias, mantenimiento, fallos de hardware y horas de IT.
- Abrir servicios en la nube sin configurar alertas de presupuesto ni apagar entornos de pruebas olvidados.
- Desplegar bases de datos en regiones por defecto de EE. UU. cuando el proveedor ofrece regiones en Europa (ej.: Madrid, Fráncfort, Dublín o París) al mismo o similar coste.

**Preguntas que el alumnado debería poder responder**
- ¿Qué variables deben incluirse para comparar honestamente el coste total (TCO) entre un servidor propio y la nube?
- ¿Qué dos medidas simples permiten evitar facturas inesperadas y reducir el *vendor lock-in* al adoptar almacenamiento cloud?

---

### 3.4. Copias de seguridad, continuidad de negocio y seguridad del almacenamiento

**Explicación breve y clara**
Un ataque de *ransomware*, un fallo eléctrico, un incendio o el borrado accidental de una tabla crítica pueden paralizar una pyme durante días o provocar su cierre. Una copia de seguridad que nunca se ha probado restaurar no es una copia de seguridad: es un acto de fe. Todo mando intermedio debe conocer dos indicadores directivos clave —**RPO** y **RTO**— y exigir la regla estándar de resiliencia **3-2-1-1-0**.

**Conceptos clave**
- **RPO (*Recovery Point Objective*):** Cantidad máxima de datos que la empresa puede permitirse perder medida en tiempo (ej.: RPO de 4 horas significa que las copias deben ejecutarse al menos cada 4 horas).
- **RTO (*Recovery Time Objective*):** Tiempo máximo que un sistema puede estar caído antes de causar un daño inaceptable al negocio (ej.: RTO de 2 horas para la tienda online).
- **Regla 3-2-1-1-0 de copias de seguridad:**
  - **3** copias de los datos (1 original + 2 copias).
  - **2** tipos de soporte o ubicaciones lógicas distintas.
  - **1** copia fuera de las instalaciones (*off-site* / región distinta).
  - **1** copia **inmutable** o desconectada (*air-gapped*) que un *ransomware* no pueda cifrar ni borrar.
  - **0** errores verificados mediante **pruebas periódicas de restauración**.
- Cifrado en reposo (*at rest*) y en tránsito (*in transit*).

**Definiciones necesarias**
- **Copia inmutable:** Respaldo protegido mediante políticas de solo escritura (*WORM — Write Once, Read Many*) que impiden su modificación o borrado durante un periodo definido, incluso si un atacante obtiene credenciales de administrador.
- **Cifrado en reposo y en tránsito:** Protección criptográfica de los datos tanto mientras están almacenados en discos/servidores como mientras viajan por la red.
- **Sincronización ≠ Copia de seguridad:** Servicios como OneDrive o Google Drive sincronizan cambios al instante; si un virus cifra un archivo o un usuario borra una carpeta, el error se replica si no existe versionado protegido o copia independiente.

**Ejemplo práctico realista**
Una empresa de distribución textil en La Coruña sufrió un *ransomware* un viernes por la tarde que cifró su servidor de archivos y el disco NAS de copias conectado en la misma red local. Como seis meses antes habían implantado la regla 3-2-1-1-0 con una copia diaria inmutable en la nube europea y hacían simulacros trimestrales de restauración, recuperaron el ERP y los pedidos en 6 horas (cumpliendo su RTO de 8 h) sin pagar rescate.

**Errores frecuentes**
- Creer que tener "todo en Drive/OneDrive" o en un disco duro enchufado permanentemente al servidor equivale a una copia segura frente a *ransomware*.
- No realizar nunca pruebas reales de restauración (descubrir el día del desastre que la copia llevaba 4 meses fallando o corrupta).
- Exigir RPO = 0 y RTO = 5 minutos para todos los archivos de la empresa, disparando costes innecesariamente en lugar de clasificar sistemas por criticidad (Crítico / Importante / Secundario).

**Preguntas que el alumnado debería poder responder**
- ¿Qué diferencia hay entre RPO y RTO, y por qué deben definirlos los responsables de negocio y no solo el departamento de IT?
- ¿Por qué la sincronización en la nube no sustituye a una copia de seguridad inmutable (regla 3-2-1-1-0)?

---

## 4. Metodología didáctica

Secuencia completa para una sesión de **4 horas (240 minutos exactos)** en modalidad híbrida.

| Fase | Tiempo | Qué hace el formador | Qué hace el alumnado |
| --- | --- | --- | --- |
| **1. Apertura y activación** | 25 min | Lanza diagnóstico breve y dirige la Actividad 1 (*Simulacro de apagón de datos*). Conecta con la ubicación y seguridad de datos tratada en el Tema 3. | Evalúa cuánto tiempo podría operar su empresa si hoy desapareciera su servidor principal, ERP o carpetas compartidas, y estima su RPO/RTO intuitivo. |
| **2. Exposición breve / microlearning (Parte I)** | 30 min | Explica tipos de datos, SQL frente a NoSQL, separación OLTP/OLAP y cuándo elegir Data Mart, Data Warehouse, Data Lake o Lakehouse en una pyme. | Clasifica ejemplos reales de su negocio según tipo de dato y necesidad operativa frente a analítica. |
| **3. Actividad práctica de selección de arquitectura** | 35 min | Facilita la Actividad 2 (*El arquitecto prudente*) con 4 escenarios de pymes de distinto tamaño y presupuesto; evita el sobrediseño. | En parejas, elige la tecnología/arquitectura adecuada para cada escenario justificando tipo de dato, escala, coste y mantenimiento. |
| **4. Exposición breve / microlearning (Parte II)** | 25 min | Presenta *on-premise* frente a cloud/híbrida, TCO, *FinOps* básico, almacenamiento por niveles, cifrado y regla 3-2-1-1-0 con RPO/RTO. | Revisa con una lista rápida las vulnerabilidades actuales de las copias de seguridad de su empresa o proyecto. |
| **Descanso estructurado** | 15 min | Pausa activa y preparación de salas y plantillas para el caso práctico. | Descansa e intercambia experiencias sobre incidencias reales de servidores o *backups*. |
| **5. Análisis de caso práctico** | 50 min | Presenta el caso **AgroFresco Directo S.L.** (ERP, e-commerce, sensores IoT de cámaras frigoríficas, hojas Excel y copias deficientes) y acompaña a los equipos. | En equipos de 3-4 personas, diseña la arquitectura de almacenamiento recomendada, clasifica RPO/RTO por sistema, aplica 3-2-1-1-0 y controla el presupuesto cloud. |
| **6. Discusión guiada y contraste** | 25 min | Modera presentaciones breves de los diagramas de arquitectura, confronta costes innecesarios y destaca la separación entre datos tabulares e IoT. | Expone su diseño para AgroFresco, cuestiona decisiones de otros equipos (ej.: costes cloud o falta de inmutabilidad) y ajusta su esquema. |
| **7. Actividad de transferencia laboral** | 25 min | Guía la Actividad 3 (*Mapa de almacenamiento y matriz RPO/RTO de mi pyme*) sobre la plantilla replicable. | Elabora su mapa actual frente a futuro de almacenamiento, clasifica 4 activos críticos con RPO/RTO y evalúa brechas respecto a 3-2-1-1-0. |
| **8. Síntesis, evaluación y cierre** | 10 min | Recapitula los criterios clave de almacenamiento sostenible y seguro, explica la entrega sumativa y enlaza con el Tema 5 (Estrategia y los datos). | Completa la autoevaluación y define una pregunta concreta de verificación para su responsable de IT o proveedor cloud. |
| **TOTAL** | **240 min** | — | — |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Simulacro de apagón de datos

- **Nombre:** Simulacro de lunes negro: "¿Cuánto aguanta nuestra empresa sin datos?".
- **Objetivo:** Sensibilizar sobre la dependencia crítica del almacenamiento y traducir el impacto de negocio en objetivos concretos de RPO y RTO.
- **Instrucciones para el alumnado:**
  1. Imagina que el lunes a las 08:30 h un ataque de *ransomware* bloquea el servidor central o la cuenta principal donde viven los datos de tu departamento.
  2. Individualmente (6 minutos), responde en 3 líneas: (a) ¿Qué 2 procesos se detienen de inmediato?; (b) ¿Cuántas horas de trabajo perdidas serían asumibles como máximo (tu RPO)?; (c) ¿Cuánto tiempo máximo puede estar parado el servicio sin pérdidas graves o fuga de clientes (tu RTO)?
  3. En grupos de 3 (10 minutos), comparad si sabéis con certeza dónde está la copia de seguridad actual y cuándo se probó por última vez una restauración real. Puesta en común rápida (4 minutos).
- **Materiales necesarios:** Pizarra colaborativa o plantilla rápida impresa.
- **Tiempo estimado:** 20 minutos (dentro de los 25 min de apertura).
- **Rol del formador:** Evidenciar la brecha habitual entre el RPO/RTO que negocio *cree* tener y el que realmente ofrece el sistema actual de copias.
- **Producto o entregable esperado:** Estimación inicial de criticidad, RPO y RTO por participante.
- **Criterios de éxito:** El alumno diferencia correctamente pérdida máxima de datos (RPO) de tiempo máximo de parada (RTO) y detecta al menos un punto ciego de su empresa.

### Actividad 2 (Aplicación): El arquitecto prudente

- **Nombre:** El arquitecto prudente (elección proporcional de almacenamiento).
- **Objetivo:** Seleccionar la solución de almacenamiento adecuada a cuatro realidades empresariales distintas evitando tanto quedarse corto como sobredimensionar costes.
- **Instrucciones para el alumnado:**
  1. En parejas (25 minutos), analizad los 4 perfiles de pymes de la **Ficha de trabajo 8.2** (una consultora de 12 personas, un e-commerce de 40 empleados con 3 sistemas, una industria con sensores IoT + vídeo de control de calidad y una app de reservas con alta concurrencia).
  2. Para cada perfil decidid: (a) tipo de base de datos operativa (SQL / NoSQL / mixta), (b) repositorio analítico recomendado (BI directo sobre réplica / Data Warehouse ligero / Lakehouse) y (c) modelo de despliegue (*on-premise*, cloud UE o híbrido).
  3. Justificad cada elección en 3 líneas incluyendo un riesgo a vigilar (coste, rendimiento, *lock-in* o RGPD). Puesta en común (10 minutos).
- **Materiales necesarios:** Ficha de trabajo 8.2.
- **Tiempo estimado:** 35 minutos.
- **Rol del formador:** Cuestionar cualquier propuesta desproporcionada (ej.: proponer un *Data Lake* complejo a una consultora de 12 empleados) y verificar criterios de región UE y separación OLTP/OLAP.
- **Producto o entregable esperado:** Matriz comparativa de 4 decisiones arquitectónicas justificadas.
- **Criterios de éxito:** Adecuación proporcional al volumen/tipo de dato, correcta separación operativa vs. analítica y coherencia presupuestaria.

### Actividad 3 (Transferencia a la realidad laboral): Mapa de almacenamiento y matriz RPO/RTO de mi pyme

- **Nombre:** Auditoría rápida de almacenamiento y continuidad de mi organización.
- **Objetivo:** Evaluar la situación actual de almacenamiento, costes y copias de seguridad de 4 sistemas críticos de la empresa del participante y definir un plan de mejora realista.
- **Instrucciones para el alumnado:**
  1. Selecciona 4 repositorios o sistemas críticos de tu pyme o proyecto (ej.: ERP, CRM, tienda online, carpeta de contratos/proyectos, base de clientes).
  2. Cumplimenta la **Plantilla de Matriz de Almacenamiento y Continuidad** (apartado 8.3): tipo de datos, ubicación actual (local / cloud UE / cloud fuera EEE), si sufre mezcla OLTP/OLAP, RPO objetivo, RTO objetivo y chequeo de los 5 elementos de la regla **3-2-1-1-0**.
  3. Redacta 3 preguntas técnicas concretas que trasladarás esta semana a tu responsable de IT o proveedor tecnológico para verificar brechas reales.
- **Materiales necesarios:** Plantilla del apartado 8.3.
- **Tiempo estimado:** 25 minutos en sesión (con refinamiento opcional en campus).
- **Rol del formador:** Ayudar a priorizar sistemas críticos (Tier 1) frente a secundarios (Tier 3) para que las exigencias de continuidad sean económicamente viables.
- **Producto o entregable esperado:** Matriz cumplimentada de 4 sistemas + lista de 3 preguntas de verificación técnica.
- **Criterios de éxito:** RPO/RTO coherentes con el negocio, aplicación correcta de 3-2-1-1-0 y preguntas verificables (ej.: "¿Cuándo fue la última prueba documentada de restauración y es inmutable nuestra copia?").

---

## 6. Caso práctico

### Contexto empresarial
**AgroFresco Directo S.L.** es una pyme hortofrutícola con sede en Murcia, 52 empleados y 9 millones de euros de facturación que opera en dos canales: distribución mayorista a fruterías y restaurantes (65 % de ingresos) y una línea creciente de cajas de suscripción de fruta y verdura fresca a domicilio (35 % de ingresos, 6.200 suscriptores activos).

### Situación o problema
En los últimos 18 meses la empresa ha crecido rápido y ha instalado sensores IoT de temperatura y humedad en sus 6 cámaras frigoríficas y 8 furgonetas refrigeradas para cumplir trazabilidad alimentaria. Sin embargo, su infraestructura de datos está al borde del colapso:
- El ERP vive en un servidor físico de 7 años dentro de la oficina sin sistema de alimentación ininterrumpida (SAI) fiable; la copia de seguridad se hace cada noche en un disco duro USB que el administrativo se lleva a casa... cuando se acuerda.
- Cada lunes por la mañana, el equipo financiero y de compras descarga manualmente 4 archivos CSV (ERP, tienda online, CRM y plataforma de reparto) para cruzarlos en un macro-Excel de 180 MB que se bloquea continuamente.
- Los sensores IoT generan 1,2 millones de lecturas mensuales en formato JSON que actualmente se guardan en una carpeta sin estructurar y nadie cruza con las mermas ni devoluciones de clientes.
- Un proveedor externo les acaba de presupuestar un proyecto *on-premise* de "Big Data Hadoop" de 95.000 € de implantación más 24.000 €/año de mantenimiento, lo que la dirección considera inasumible.

### Datos disponibles

| Sistema / Fuente | Tipo de dato y volumen | Modelo actual | Criticidad de negocio | Incidencias recientes |
| --- | --- | --- | --- | --- |
| **ERP (pedidos B2B, facturación, stock)** | Estructurado (SQL), ~40 GB | Servidor físico local (7 años) | **Muy alta** (paraliza almacén y envíos) | 2 caídas en 6 meses; copia en USB manual no probada |
| **Tienda suscripción (Shopify/WooCommerce)** | Estructurado + JSON, ~15 GB | SaaS Cloud (región UE) | **Muy alta** (ventas y suscripciones 24/7) | Consultas directas de reporting ralentizan el *checkout* |
| **Sensores IoT (cámaras y furgonetas)** | Semiestructurado (JSON / series temporales), 1,2 M lecturas/mes (~8 GB/año) | Almacenamiento de archivos sueltos en la nube | **Alta** (trazabilidad alimentaria y control de mermas) | Sin histórico estructurado ni alertas cruzadas con devoluciones |
| **Albaranes firmados y fotos de incidencias** | No estructurado (PDF, JPG), ~600 GB acumulados (crece 15 GB/mes) | Carpeta compartida local sincronizada en OneDrive | **Media** (soporte a reclamaciones y auditorías) | Todo en capa de almacenamiento caro; riesgo de borrado sincronizado |
| **Reporting semanal (Excel 180 MB)** | Tabular consolidado | Archivo local en PC del controller | **Media-alta** (compras semanales de producto perecedero) | 7 horas/semana de carga manual y errores de fórmulas |

### Preguntas de análisis
1. ¿Por qué el presupuesto de 95.000 € de un clúster "Big Data Hadoop *on-premise*" está **totalmente sobredimensionado** para AgroFresco Directo S.L.?
2. ¿Qué arquitectura de almacenamiento ligera en la nube (región UE) propondríais para integrar los datos tabulares (ERP, e-commerce), las lecturas JSON de IoT y los 600 GB de PDFs/fotos sin arruinar el presupuesto?
3. Define los objetivos realistas de **RPO y RTO** para cada uno de los cuatro bloques críticos (ERP, e-commerce, IoT y albaranes/fotos) y diseña una estrategia de copias conforme a la **regla 3-2-1-1-0**.
4. ¿Cómo optimizaríais los costes cloud (*FinOps*) para los 600 GB de fotos y albaranes históricos sin perder acceso en caso de inspección alimentaria o fiscal?

### Tarea a realizar
En equipos de 3-4 personas (50 minutos), elaborad una **Propuesta de Arquitectura de Datos y Plan de Continuidad para AgroFresco Directo S.L.** que incluya:
1. **Diagrama conceptual simple (bloques y flechas):** Fuentes → Ingesta/Integración → Almacenamiento (operativo, analítico y archivo de objetos) → Capa de explotación/BI (separando claramente OLTP de OLAP).
2. **Matriz de continuidad y copias (RPO, RTO y 3-2-1-1-0):** Eliminando el disco USB manual y el riesgo del servidor de 7 años.
3. **Presupuesto orientativo y criterios de control de costes (*FinOps*) + cumplimiento RGPD** (región UE, cifrado en tránsito y en reposo).

### Posibles soluciones o criterios de análisis
- **Descarte del proyecto "Big Data" de 95.000 €:** AgroFresco maneja decenas de gigabytes al año, no petabytes. Un clúster *on-premise* de Big Data requiere ingenieros dedicados y costes fijos desproporcionados.
- **Arquitectura proporcional recomendada (nube híbrida o 100 % cloud gestionada en región UE):**
  - *Capa operativa (OLTP):* Migrar o modernizar el ERP a un servidor cloud gestionado (PaaS/SaaS en UE) o servidor virtual con alta disponibilidad, manteniendo la tienda online separada de las consultas analíticas.
  - *Capa de almacenamiento de objetos (Object Storage en UE, ej. S3/Blob/GCS):* Para guardar los **600 GB de PDFs y fotos** y los archivos JSON crudos de IoT (zona de aterrizaje / capa Bronce) aplicando **almacenamiento por niveles (*tiering*)**: fotos y albaranes > 6 meses pasan automáticamente a capa fría/archivo, reduciendo el coste drásticamente.
  - *Capa analítica (Data Warehouse ligero en pago por uso o BD analítica gestionada, ej.: BigQuery / PostgreSQL analítico / Snowflake básico):* Recibe mediante conectores automáticos (ETL/ELT programado) los datos de ERP, e-commerce y resúmenes agregados de temperatura IoT por cámara/ruta. Desde aquí bebe Power BI/Looker Studio, eliminando el Excel de 180 MB y las 7 h/semana manuales.
- **Matriz RPO / RTO y 3-2-1-1-0 coherente:**
  - *ERP y Tienda online (Tier 1):* RPO ≤ 1 hora (copias incrementales/replicación), RTO ≤ 4 horas. Copias automatizadas en la nube + copia inmutable en segunda región europea + pruebas trimestrales documentadas de restauración.
  - *Sensores IoT (Tier 2):* RPO ≤ 4 horas, RTO ≤ 12 horas (alertas locales en cámara independientes del análisis histórico).
  - *Albaranes/fotos históricos (Tier 3):* RPO 24 horas, RTO 24-48 horas, con inmutabilidad/versionado protegido (no depender solo de sincronización OneDrive).
- **Seguridad y *FinOps*:** Región exclusiva UE, cifrado en reposo y tránsito, presupuestos y alertas de consumo cloud mensuales, y política de ciclo de vida (*lifecycle policy*) para pasar históricos a almacenamiento frío.

### Preguntas de reflexión final
- ¿Qué preguntas concretas debería hacer la dirección de AgroFresco a cualquier proveedor tecnológico cuando le presenten términos como "Big Data" o "Data Lake"?
- ¿Cómo impacta pasar de 7 horas semanales construyendo un Excel frágil a tener datos automatizados en la capacidad de reducir mermas de fruta fresca?

---

## 7. Evaluación

### Evaluación diagnóstica breve (inicio de sesión, 5 min)
1. Verdadero o falso: "Tener nuestros archivos sincronizados en Google Drive o OneDrive nos protege automáticamente frente a un ataque de *ransomware*".
2. ¿Cuál es la diferencia principal entre un *Data Warehouse* y un *Data Lake*? (Marca la opción correcta entre 3 alternativas breves).
3. ¿Qué mide el indicador RTO en un plan de copias de seguridad? (Tiempo máximo de parada / Cantidad máxima de datos perdidos / Coste mensual del servidor).
4. En vuestra empresa, ¿se ha hecho alguna prueba real de restauración de copias de seguridad en los últimos 12 meses? (Sí / No / Lo desconozco).

### Evaluación formativa durante la sesión
- Contrastar en la **Actividad 2 (El arquitecto prudente)** que ningún equipo sobredimensiona soluciones complejas para pymes pequeñas ni mezcla cargas OLAP sobre la base operativa OLTP.
- Revisión en directo de los diagramas del caso **AgroFresco Directo S.L.** comprobando manejo adecuado de datos estructurados, semiestructurados (IoT) y no estructurados (PDF/fotos), región UE y regla 3-2-1-1-0.

### Evaluación sumativa al final del tema
1. **Cuestionario práctico de 6 preguntas** sobre SQL/NoSQL, OLTP/OLAP, Warehouse/Lake, modelos cloud, RPO/RTO y regla 3-2-1-1-0 (30 %).
2. **Matriz de Almacenamiento, Continuidad (RPO/RTO) y Checklist 3-2-1-1-0 (Actividad 3)** aplicada a 4 sistemas críticos de la empresa del participante, junto a un esquema simple de arquitectura objetivo (70 %).

### Rúbrica de evaluación

| Criterio | Insuficiente (0-4) | En desarrollo (5-6) | Adecuado (7-8) | Destacado (9-10) |
| --- | --- | --- | --- | --- |
| **Criterio de selección tecnológica (BD y analítica)** | Confunde SQL/NoSQL o Warehouse/Lake, o propone soluciones totalmente desproporcionadas. | Selecciona tecnologías parcialmente válidas pero sin separar OLTP de OLAP ni justificar tipo de dato. | Elige correctamente BD operativa y capa analítica proporcionales al volumen y tipo de dato. | Justifica con precisión tipo de dato, separación OLTP/OLAP, escalabilidad y coste de mantenimiento en pyme. |
| **Despliegue cloud, costes (FinOps) y cumplimiento** | Ignora costes recurrentes, ubicación geográfica de servidores o riesgos de *vendor lock-in*. | Menciona cloud de forma genérica sin detallar control de costes ni región de datos. | Selecciona modelo cloud/híbrido coherente en región UE e incorpora criterios básicos de TCO y cifrado. | Aplica *storage tiering*, alertas *FinOps*, mitigación de *lock-in* y alineación total con privacidad (Tema 3). |
| **Continuidad de negocio (RPO/RTO y 3-2-1-1-0)** | Confunde RPO con RTO o equipara sincronización cloud con copia de seguridad segura. | Define copias periódicas pero omite inmutabilidad, copia externa o pruebas de restauración. | Establece RPO y RTO diferenciados por criticidad y aplica los 5 pilares de la regla 3-2-1-1-0. | Diseña una estrategia de continuidad realista, auditable y con calendario concreto de simulacros de restauración. |
| **Transferencia a la realidad empresarial** | Entrega genérica desconectada de los sistemas reales de su empresa o proyecto. | Inventaría sistemas actuales pero sin diagnosticar brechas concretas ni próximos pasos. | Mapea 4 sistemas reales, detecta brechas de arquitectura/copias y formula 3 preguntas técnicas clave. | Propone una hoja de ruta clara, priorizada por riesgo y lista para consensuar con Dirección e IT. |

### Actividad de autoevaluación y reflexión
- *¿Qué mito técnico sobre "la nube" o "las copias de seguridad" acabo de corregir en esta sesión?*
- *Si mañana un proveedor me propone una arquitectura de datos costosa, ¿qué 3 preguntas críticas haré para verificar si es proporcional a mi negocio?*
- *¿Cuál es el punto más vulnerable actual en el almacenamiento de mi empresa (un Excel crítico, un servidor antiguo, falta de copia inmutable)?*

---

## 8. Materiales y recursos

### 8.1. Guion de diapositivas (estructura slide por slide)

1. **Slide 1 — Portada:** Bloque 10 · Tema 4: Almacenamiento de datos. Arquitecturas proporcionales, cloud y continuidad en pymes.
2. **Slide 2 — Objetivos y conexión:** De la privacidad y gobierno (Temas 2 y 3) a la infraestructura que los hace posibles.
3. **Slide 3 — Actividad 1 (Simulacro de lunes negro):** ¿Cuánto aguanta tu empresa sin sus datos? Introducción a RPO y RTO.
4. **Slide 4 — Tipos de datos y bases de datos:** Estructurados, semiestructurados y no estructurados; SQL frente a NoSQL.
5. **Slide 5 — OLTP frente a OLAP:** Por qué los informes nunca deberían tumbar tu tienda online ni tu ERP.
6. **Slide 6 — Data Warehouse, Data Lake y Lakehouse:** Tabla comparativa y cómo evitar el *Data Swamp* y el sobrediseño.
7. **Slide 7 — Actividad 2 (instrucciones):** El arquitecto prudente (4 perfiles de pyme).
8. **Slide 8 — On-premise, Cloud y Nube Híbrida:** IaaS/PaaS/SaaS, TCO real, región UE, *vendor lock-in* y *FinOps* básico.
9. **Slide 9 — Almacenamiento por niveles (*Storage Tiering*):** Cómo ahorrar guardando históricos en capas frías.
10. **Slide 10 — Copias de seguridad y resiliencia:** Regla 3-2-1-1-0, inmutabilidad, cifrado y por qué sincronizar no es respaldar.
11. **Slide 11 — Caso práctico: AgroFresco Directo S.L.:** Sus 5 fuentes de datos, la oferta de 95.000 € y el reto de arquitectura.
12. **Slide 12 — Debriefing AgroFresco:** Diagrama de referencia ligero en UE, matriz RPO/RTO y control de costes.
13. **Slide 13 — Actividad 3 (transferencia):** Mapa de almacenamiento y continuidad para vuestra pyme.
14. **Slide 14 — Cierre y puente al Tema 5:** Ya tenemos datos abiertos, gobernados, seguros y bien almacenados; ahora toca convertirlos en ventaja competitiva.

### 8.2. Ficha de trabajo: El arquitecto prudente (Actividad 2)

Analiza estos 4 casos y propone (1) base de datos operativa, (2) repositorio analítico y (3) modelo de despliegue + riesgo clave a vigilar:

1. **Estudio de arquitectura y reformas (12 empleados):** Gestiona proyectos, facturas en SaaS (Holded/Odoo) y 2 TB de planos PDF/CAD. Quiere controlar rentabilidad por proyecto cada mes.
2. **E-commerce de decoración (40 empleados, 45.000 pedidos/año):** Tiene Shopify, ERP, CRM HubSpot, Google Ads y Meta Ads. Los informes actuales ralentizan procesos y tardan horas en cruzarse en Excel.
3. **Fabricante industrial de componentes (85 empleados):** Tiene ERP, 40 máquinas con sensores IoT que envían datos cada 10 segundos y cámaras que guardan miles de fotos diarias de control de calidad visual para entrenar futura IA.
4. **Startup de reservas de pistas deportivas (18 empleados, app móvil):** Alta concurrencia los viernes por la tarde, catálogo flexible de clubes con atributos muy cambiantes y pagos online críticos.

### 8.3. Plantilla práctica replicable: Matriz de Almacenamiento y Continuidad (RPO/RTO y 3-2-1-1-0)

| Sistema / Activo de datos | Tipo de dato y volumen aprox. | Ubicación actual (Local / Cloud UE / Fuera EEE) | Nivel de criticidad (Tier 1-3) | RPO objetivo | RTO objetivo | Check 3-2-1-1-0 (¿3 copias? ¿2 medios? ¿1 externa? ¿1 inmutable? ¿0 errores probados?) | Brecha detectada y acción prioritaria |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Ej.: ERP Facturación** | SQL, 25 GB | Servidor local oficina | Tier 1 (Crítico) | ≤ 2 h | ≤ 4 h | Fallo: copia en NAS local, no inmutable, nunca probada | Activar copia diaria inmutable en cloud UE y prueba trimestral |
| **Sistema 1:** | | | | | | | |
| **Sistema 2:** | | | | | | | |
| **Sistema 3:** | | | | | | | |
| **Sistema 4:** | | | | | | | |

**3 preguntas clave para mi equipo IT / proveedor cloud esta semana:**
1. ____________________________________________________________
2. ____________________________________________________________
3. ____________________________________________________________

### 8.4. Lecturas y recursos recomendados
- **Guía de copias de seguridad para pymes (INCIBE):** Manual práctico gratuito en español sobre planificación de respaldos, pruebas de restauración y protección frente a *ransomware*.
- **Fundamentos de Ingeniería de Datos (*Fundamentals of Data Engineering*, Joe Reis & Matt Housley):** Capítulos introductorios sobre arquitecturas de datos modernas, almacenamiento y ciclo de vida (útil para mandos técnicos o emprendedores digitales).
- **Documentación conceptual de arquitecturas de referencia en nube (AWS / Azure / Google Cloud — *Well-Architected Framework*):** En especial los pilares de fiabilidad, seguridad y optimización de costes (*FinOps*).

### 8.5. Vídeos, artículos y fuentes adicionales *(Validar antes de utilizarse)*
> **Nota importante para el formador:** Validar enlaces, precios vigentes de servicios cloud y disponibilidad de recursos audiovisuales antes de impartir la sesión.
- Guías y vídeos prácticos de INCIBE sobre *ransomware* y regla 3-2-1-1-0 (`incibe.es`) — *validar enlaces activos*.
- Calculadoras oficiales de precios de almacenamiento cloud (AWS Pricing Calculator, Azure Pricing Calculator, Google Cloud Pricing Calculator) — *validar interfaz y tarifas actualizadas para demostración en vivo*.
- Artículos divulgativos comparativos sobre *Data Warehouse vs. Data Lake vs. Lakehouse* para perfiles no técnicos — *validar fuente y fecha antes de compartir*.

### 8.6. Glosario de términos clave

| Término | Definición operativa |
| --- | --- |
| **SQL / Relacional** | Base de datos estructurada en tablas relacionadas que prioriza la integridad transaccional estricta. |
| **NoSQL** | Familia de bases de datos flexibles diseñadas para datos semiestructurados, documentos, eventos o alta escalabilidad horizontal. |
| **OLTP / OLAP** | Cargas operativas transaccionales en tiempo real (OLTP) frente a cargas analíticas sobre históricos (OLAP). |
| **Data Warehouse** | Almacén central optimizado para consultas analíticas y BI sobre datos estructurados integrados de múltiples fuentes. |
| **Data Lake** | Repositorio de bajo coste que almacena grandes volúmenes de datos en bruto (estructurados y no estructurados). |
| **Data Lakehouse** | Arquitectura híbrida que combina almacenamiento flexible de bajo coste con gobierno y rendimiento analítico SQL. |
| **RPO** | *Recovery Point Objective*: pérdida máxima tolerable de datos medida en tiempo desde la última copia válida. |
| **RTO** | *Recovery Time Objective*: tiempo máximo tolerable para restablecer un sistema crítico tras una caída. |
| **Regla 3-2-1-1-0** | Estándar de copias: 3 copias, 2 medios, 1 externa, 1 inmutable/aislada y 0 errores tras pruebas de restauración. |
| **FinOps** | Disciplina de seguimiento y optimización financiera del gasto variable en servicios cloud. |

---

## 9. Adaptaciones para modalidad híbrida

### Sesión presencial
- Entregar bloques físicos (tarjetas o *post-its* grandes etiquetados como *ERP*, *E-commerce*, *IoT*, *Object Storage*, *Data Warehouse*, *BI*, *Backup inmutable*) para que en el caso **AgroFresco** los equipos ensamblen su diagrama de arquitectura sobre la mesa antes de fotografiarlo y explicarlo.
- Proyectar durante 5 minutos una calculadora pública de costes cloud real para comparar en vivo cuánto cuesta guardar 600 GB en almacenamiento estándar frente a almacenamiento frío en región europea.

### Sesión online síncrona
- Usar una plantilla preconstruida en Miro/Lucidchart/Excalidraw con cajas ya preparadas para que cada sala de grupos (*breakout room*) arrastre y conecte el diagrama de **AgroFresco Directo S.L.** sin perder tiempo dibujando desde cero.
- Hacer una encuesta en directo sobre el "Check 3-2-1-1-0" de las empresas del grupo para visualizar de forma anónima qué porcentaje cumple actualmente los 5 requisitos.

### Sesión asíncrona
- Publicar un vídeo explicativo de 12 minutos dibujando paso a paso la diferencia entre **OLTP, Data Warehouse, Data Lake y Lakehouse** con una metáfora logística (mostrador de tienda vs. almacén ordenado vs. nave de materias primas).
- Pedir la entrega de la **Matriz de Almacenamiento y Continuidad (Actividad 3)** junto con un diagrama conceptual sencillo (en PowerPoint, Draw.io o a mano escaneado) de la arquitectura deseada para su negocio, acompañado de *feedback* concreto del formador sobre posibles sobrecostes o vulnerabilidades.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Materializa técnicamente el principio de SSOT e integración del **Tema 2 (Gestión del dato)** y da soporte de infraestructura a los requisitos de cifrado, región europea, retención/bloqueo y disponibilidad del **Tema 3 (Privacidad de datos)**.
- **Competencias que desarrolla:** Criterio tecnológico para perfiles directivos no programadores, gestión de proveedores y presupuestos IT (*FinOps*), planificación de continuidad de negocio y diseño de arquitecturas escalables proporcionales.
- **Conexión con el tema anterior y posterior:**
  - *Tema anterior (Bloque 10, Tema 3 — Privacidad de datos):* Las exigencias legales de seguridad, localización UE y resiliencia se concretan aquí en cifrado, control de accesos, región cloud y copias inmutables 3-2-1-1-0.
  - *Tema posterior (Bloque 10, Tema 5 — Estrategia y los datos):* Almacenar datos de forma ordenada, económica y segura no genera ventaja competitiva por sí mismo si nadie los convierte en decisiones. El Tema 5 cierra el programa enseñando a explotar esa infraestructura mediante cultura analítica, KPIs y estrategia *data-driven*.
- **Evidencia de aprendizaje que deja el alumnado:** Una **Matriz de Almacenamiento y Continuidad (RPO/RTO y chequeo 3-2-1-1-0)** sobre 4 sistemas reales de su empresa y una **lista de verificación técnica** lista para abordar con IT o proveedores cloud.

---

## Siguientes pasos para el formador

1. **Preparar el lienzo visual del caso AgroFresco:** Crear las plantillas de bloques arrastrables (Miro/Slides) o tarjetas impresas para que el diseño de la arquitectura sea ágil y comprensible para perfiles no técnicos.
2. **Revisar tarifas y regiones europeas de referencia:** Comprobar previamente en una calculadora cloud oficial el coste orientativo de almacenamiento estándar frente a archivo frío en Europa para mostrar cifras realistas (aclarando que son estimaciones orientativas sujetas a cambios de tarifa).
3. **Evitar exceso de tecnicismos innecesarios:** Mantener el foco en criterios de decisión directiva (coste, riesgo, rendimiento, escalabilidad, cumplimiento) y traducir cada sigla técnica (SQL, OLAP, RPO, RTO, PaaS) a su impacto en euros y continuidad.
4. **Recoger preguntas reales para IT:** Invitar al alumnado a compartir en el campus qué respuestas obtuvieron de sus proveedores tras formular las 3 preguntas de la Actividad 3.
5. **Preparar el cierre integrador del Tema 5:** Recordar al grupo que en la próxima y última sesión del Bloque 10 (y del programa) se conectará toda la gestión de datos con la estrategia competitiva y el *Business Plan* del Bloque 1.
