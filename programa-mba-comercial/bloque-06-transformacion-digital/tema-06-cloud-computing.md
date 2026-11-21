# Tema 6. Cloud computing

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Tema 6. Cloud computing |
| **Bloque y posición dentro del programa** | Bloque 7: Transformación digital — Posición 6 de 8 |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Mandos intermedios y emprendedores |
| **Nivel de dificultad** | Intermedio |
| **Prerrequisitos** | Comprensión de herramientas digitales empresariales, gestión de datos y analítica BI (Bloque 7, Temas 1 a 5) |
| **Resultado general de aprendizaje** | Evaluar arquitecturas y modelos de servicio en la nube (IaaS, PaaS, SaaS) para planificar migraciones seguras, controlar costes variables (*FinOps* básico) y mejorar la escalabilidad y continuidad operativa de una pyme |

---

## 2. Objetivos de aprendizaje

Al finalizar este tema, el alumnado será capaz de:

1. **Diferenciar** los modelos de servicio en la nube (**IaaS, PaaS y SaaS**) y los modelos de despliegue (pública, privada e híbrida) identificando qué responsabilidades asume la empresa y cuáles el proveedor. *(Nivel de Bloom: Comprender)*
2. **Comparar** la estructura económica y operativa de la infraestructura local (*on-premise*, CAPEX) frente al pago por uso en la nube (OPEX), identificando riesgos de sobrecostes no controlados. *(Nivel de Bloom: Analizar)*
3. **Evaluar** los requisitos críticos de seguridad, cumplimiento (residencia de datos, copias de seguridad, SLA) y riesgo de dependencia del proveedor (*vendor lock-in*) antes de contratar o migrar servicios *cloud*. *(Nivel de Bloom: Evaluar)*
4. **Aplicar** las estrategias de migración a la nube (modelo de las 6 R simplificado: *Rehost, Replatform, Repurchase, Retire...*) a la cartera real de aplicaciones de una pyme. *(Nivel de Bloom: Aplicar)*
5. **Diseñar** un plan de migración *cloud* por fases con control presupuestario y plan de continuidad mínima para una pyme en crecimiento. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Modelos de servicio (IaaS, PaaS, SaaS) y modelos de despliegue

- **Explicación breve y clara:** El *cloud computing* (computación en la nube) permite consumir potencia de cálculo, almacenamiento, plataformas de desarrollo y software a través de internet bajo demanda, sin comprar ni mantener servidores físicos en la oficina. Para un mando intermedio, entender la diferencia entre **IaaS, PaaS y SaaS** equivale a decidir hasta qué capa técnica quiere gestionar su empresa (y pagar especialistas por ello) frente a delegarla en el proveedor.
- **Conceptos clave:** *On-premise*, IaaS (*Infrastructure as a Service*), PaaS (*Platform as a Service*), SaaS (*Software as a Service*), nube pública, nube privada, nube híbrida y *multicloud*.
- **Definiciones necesarias:**
  - *IaaS (Infraestructura como Servicio):* Alquiler de servidores virtuales, redes y almacenamiento (ej. máquinas virtuales en AWS, Azure o Google Cloud). La empresa gestiona el sistema operativo, las actualizaciones y sus aplicaciones.
  - *PaaS (Plataforma como Servicio):* Entorno gestionado para desplegar aplicaciones o bases de datos propias sin administrar el servidor ni el sistema operativo subyacente.
  - *SaaS (Software como Servicio):* Aplicación completa lista para usar mediante suscripción (correo corporativo, CRM, ERP en la nube, herramientas BI), donde el proveedor opera toda la infraestructura y actualizaciones.
  - *Nube híbrida:* Combinación coordinada de sistemas locales (*on-premise*) y servicios en la nube pública, muy habitual durante transiciones en pymes con maquinaria o software heredado.
- **Ejemplo práctico realista:** Una pyme de distribución comercial de 40 personas usa **SaaS** para correo, CRM y ofimática (cero mantenimiento de servidores), contrata **IaaS** temporalmente para alojar un antiguo ERP de escritorio al que todavía acceden los técnicos en remoto mientras planifican sustituirlo, y utiliza un servicio **PaaS** de base de datos gestionada para su nueva web de pedidos B2B desarrollada por una agencia externa.
- **Errores frecuentes:**
  - Tratar de gestionar infraestructura IaaS compleja sin contar con perfil técnico cualificado en sistemas y seguridad, cuando existía un SaaS maduro y más barato.
  - Pensar que «nube» significa solo «subir carpetas a Google Drive o OneDrive» sin revisar permisos, copias ni integración con el negocio.
  - Confundir «nube privada» con «tener un servidor viejo en el cuarto de la limpieza de la oficina».
- **Preguntas que el alumnado debería poder responder:**
  - ¿Qué capas gestiona el cliente y cuáles el proveedor en *on-premise*, IaaS, PaaS y SaaS?
  - ¿En qué casos una pyme debería elegir SaaS frente a IaaS o PaaS?
  - ¿Cuándo tiene sentido mantener temporalmente un modelo de nube híbrida?

### 3.2. Escalabilidad, agilidad operativa y economía del Cloud (CAPEX vs. OPEX y *FinOps*)

- **Explicación breve y clara:** La nube transforma fuertes inversiones iniciales fijas en hardware (**CAPEX**, sobredimensionado para soportar el pico anual de demanda y ocioso el resto del año) en gasto operativo flexible ajustado al uso (**OPEX**). Aporta elasticidad (crecer en minutos en Black Friday o campañas y reducir al terminar), trabajo remoto seguro y despliegue rápido de nuevos servicios. Sin embargo, sin gobierno financiero (*FinOps* básico), la facilidad para encender recursos o acumular licencias dispara la factura mensual.
- **Conceptos clave:** Elasticidad y escalabilidad, CAPEX frente a OPEX, pago por uso, *FinOps* (gestión financiera del cloud), infrautilización (*overprovisioning*), licencias zombi, costes de salida de datos (*egress fees*).
- **Definiciones necesarias:**
  - *Elasticidad:* Capacidad automática o rápida de aumentar o reducir recursos informáticos (CPU, memoria, licencias) en función de la carga real de trabajo.
  - *FinOps básico para pymes:* Práctica continua de monitorizar el gasto en nube y suscripciones SaaS, asignar alertas presupuestarias, apagar entornos de prueba fuera de horario y revisar licencias inactivas cada trimestre.
- **Ejemplo práctico realista:** Una tienda online de juguetes y regalos realiza el 45 % de sus ventas entre noviembre y el 5 de enero. Antes, con servidor propio, sufría caídas en diciembre tras haber pagado un equipo sobredimensionado durante diez meses vacíos. Al migrar a una arquitectura *cloud* elástica, triplica automáticamente la capacidad durante 6 semanas de campaña y la vuelve a reducir el 7 de enero; además, configura alertas de gasto al 70 % y 90 % del presupuesto mensual y audita cada trimestre licencias SaaS de exempleados, ahorrando un 22 % en suscripciones desperdiciadas.
- **Errores frecuentes:**
  - Creer que «la nube siempre es más barata» de forma automática: trasladar un servidor ineficiente encendido 24/7 tal cual (*lift-and-shift* sin optimizar) puede salir más caro que *on-premise*.
  - Acumular docenas de suscripciones SaaS por departamento (*SaaS sprawl*) sin inventario central ni baja de usuarios al salir de la empresa.
  - Olvidar los costes variables de almacenamiento histórico innecesario, tráfico saliente (*egress*) o soporte técnico del proveedor.
- **Preguntas que el alumnado debería poder responder:**
  - ¿Por qué una pyme con fuerte estacionalidad se beneficia especialmente de la elasticidad *cloud*?
  - ¿Qué tres controles sencillos de *FinOps* evitan sorpresas en la factura mensual de la nube?
  - ¿Cuándo puede resultar más caro migrar a la nube sin optimizar que mantener un entorno local?

### 3.3. Seguridad en la nube, responsabilidad compartida, SLA y cumplimiento

- **Explicación breve y clara:** Uno de los mayores mitos en pymes es que «los datos están más seguros en el servidor de la oficina porque puedo verlo». En realidad, los grandes proveedores *cloud* invierten muchísimo más en seguridad física, redundancia y protección perimetral que cualquier pyme. No obstante, la nube funciona bajo el **Modelo de Responsabilidad Compartida**: el proveedor asegura *la nube* (centros de datos, hardware), pero la pyme sigue siendo responsable de la seguridad *en la nube* (contraseñas, doble factor, permisos, cifrado, configuración y copias de respaldo ante borrado o *ransomware*).
- **Conceptos clave:** Modelo de responsabilidad compartida, SLA (*Service Level Agreement*), disponibilidad (99,9 % vs. 99,99 %), residencia de datos (UE / RGPD), RPO y RTO, *backup* independiente, *vendor lock-in* y estrategia de salida.
- **Definiciones necesarias:**
  - *Modelo de responsabilidad compartida:* Reparto contractual y técnico de tareas de seguridad entre proveedor y cliente; incluso en SaaS, el cliente es responsable de gestionar usuarios, privilegios, autenticación multifactor (MFA) y sus datos.
  - *SLA (Acuerdo de Nivel de Servicio):* Compromiso contractual de disponibilidad y tiempos de respuesta del proveedor (por ejemplo, 99,9 % equivale a ~8,7 horas máximas de caída al año, mientras que 99,5 % equivale a ~43,8 horas).
  - *RPO y RTO:* RPO (*Recovery Point Objective*) es la pérdida máxima tolerable de datos recientes (p. ej., última hora); RTO (*Recovery Time Objective*) es el tiempo máximo tolerable hasta restaurar el servicio tras un incidente.
- **Ejemplo práctico realista:** Una ingeniería pyme migró sus planos a una suite SaaS en la nube asumiendo que «la nube hace copias de todo». Un empleado sufrió un borrado sincronizado malicioso y descubrieron que la papelera estándar del plan básico solo retenía 30 días y no tenían copia inmutable externa. Tras el susto, activaron MFA obligatorio, restringieron descargas externas, exigieron almacenamiento en centros de datos dentro del Espacio Económico Europeo (EEE) y contrataron una copia de seguridad automatizada e independiente de su proveedor principal. *(Nota para el formador: verificar antes de impartir las cláusulas vigentes de transferencias internacionales de datos bajo el RGPD y el marco UE-EE. UU. aplicable en la fecha de la sesión).*
- **Errores frecuentes:**
  - Confundir sincronización en la nube (OneDrive/Dropbox) con copia de seguridad inmutable (*backup*): si un *ransomware* cifra un archivo local sincronizado, también cifra la copia sincronizada.
  - No leer las cláusulas de exportación de datos antes de firmar un contrato SaaS, quedando atrapado (*vendor lock-in*) si el proveedor duplica precios al año siguiente.
  - Dejar carpetas públicas o cuentas de antiguos empleados activas por falta de control de accesos.
- **Preguntas que el alumnado debería poder responder:**
  - En el modelo de responsabilidad compartida de un SaaS, ¿qué riesgos siguen siendo culpa de la pyme?
  - ¿Por qué sincronizar archivos en la nube NO sustituye a un sistema de copias de seguridad?
  - ¿Qué tres cláusulas clave revisaríais en el contrato de un proveedor *cloud* (SLA, residencia de datos y salida)?

### 3.4. Estrategias de migración a la nube sin paralizar el negocio

- **Explicación breve y clara:** Migrar a la nube no consiste en «apagar todo el viernes y encenderlo el lunes». Requiere inventariar todas las aplicaciones actuales, evaluar dependencias y decidir una estrategia individual para cada sistema usando una versión práctica de las **6 R de migración**: *Retire* (jubilar lo innecesario), *Retain* (mantener en local temporalmente lo acoplado a maquinaria), *Repurchase* (sustituir software antiguo por un SaaS moderno), *Rehost* (mover tal cual / *lift-and-shift* rápido) o *Replatform/Refactor* (modernizar parcialmente o rediseñar para aprovechar la nube).
- **Conceptos clave:** Inventario de aplicaciones, estrategia de migración (6 R simplificadas), *lift-and-shift*, migración por oleadas, plan de vuelta atrás (*rollback*), prueba de carga y formación de usuarios.
- **Definiciones necesarias:**
  - *Rehost (lift-and-shift):* Trasladar un servidor o aplicación existente a infraestructura *cloud* (IaaS) con cambios mínimos para ganar rapidez, aunque sin optimizar aún costes ni elasticidad.
  - *Repurchase (drop-and-shop):* Abandonar una aplicación heredada local y sustituirla por una solución SaaS moderna migrando únicamente los datos limpios.
  - *Plan de rollback (vuelta atrás):* Procedimiento probado de antemano para regresar al sistema operativo anterior sin pérdida de datos si durante la ventana de migración ocurre un fallo crítico.
- **Ejemplo práctico realista:** Una distribuidora mayorista inventarió 11 sistemas locales antes de migrar. Jubiló 2 herramientas en desuso (*Retire*), cambió correo y nóminas a soluciones SaaS (*Repurchase*), movió temporalmente su viejo ERP en IaaS (*Rehost*) para poder jubilar el servidor averiado en 30 días mientras planificaba su sustitución al año siguiente, y mantuvo en local solo el controlador físico de una etiquetadora antigua de almacén (*Retain*). Así evitó paralizar expediciones ni un solo día.
- **Errores frecuentes:**
  - Intentar migrar todos los sistemas a la vez en un «big bang» en temporada alta.
  - Migrar basura histórica (15 años de archivos duplicados y clientes inactivos) pagando almacenamiento y complicando las pruebas.
  - No comprobar el ancho de banda ni la redundancia de conexión a internet de las sedes antes de pasar la operativa crítica a la nube (si se corta la fibra única de la nave y no hay respaldo 4G/5G, la empresa se detiene).
- **Preguntas que el alumnado debería poder responder:**
  - ¿Cómo decidimos qué aplicaciones de una pyme deben ir por *Repurchase* (SaaS), cuáles por *Rehost* (IaaS) y cuáles por *Retain*?
  - ¿Qué requisitos de conectividad en oficina/almacén hay que asegurar antes de pasar sistemas críticos a la nube?
  - ¿Por qué conviene empezar una migración *cloud* por un servicio no crítico antes de tocar el ERP central?

---

## 4. Metodología didáctica (Secuencia de 4 horas / 240 minutos)

| Fase | Duración | Qué hace el formador | Qué hace el alumnado |
|---|---:|---|---|
| **1. Apertura y activación** | 25 min | Lanza la Actividad 1 («Radiografía de nuestra mochila tecnológica y riesgos de parada»), recogiendo cuántas horas aguantaría cada empresa sin su servidor o sin internet. | Inventaría rápidamente las 5 herramientas críticas de su empresa, identifica dónde residen (*local/cloud*) y estima su RTO/RPO tolerable. |
| **2. Exposición breve / Microlearning I** | 35 min | Explica IaaS, PaaS y SaaS (analogía práctica + matriz de responsabilidades), modelos híbridos y economía CAPEX vs. OPEX con alertas de *FinOps*. | Clasifica servicios reales en IaaS/PaaS/SaaS y detecta posibles fuentes de sobrecoste (*SaaS sprawl*, máquinas sobredimensionadas). |
| **3. Análisis de caso práctico** | 45 min | Introduce el caso *Talleres Mecánicos y Recambios Levante S.L.* con sus 3 naves, servidores obsoletos y comparativa financiera a 3 años. Guía el trabajo en equipos de 3-4 personas. | Analiza costes reales a 3 años (*on-premise* vs. nube), asigna una estrategia de migración (6 R) a cada aplicación y diseña el plan sin detener entregas. |
| **4. Exposición breve / Microlearning II** | 30 min | Profundiza en el modelo de responsabilidad compartida, SLA, RPO/RTO, *backup* inmutable frente a sincronización, *vendor lock-in* y conectividad redundante en pymes. | Revisa las vulnerabilidades del caso práctico y elabora una checklist de cláusulas contractuales clave para proveedores *cloud*. |
| **5. Actividad práctica de aplicación y transferencia** | 60 min | Coordina la Actividad 2 (Mapa de migración 6 R + Checklist contractual para *Recambios Levante*, 25 min) y la Actividad 3 (Auditoría Cloud y Plan de Optimización/Migración para su propia empresa, 35 min). | Asigna oleadas de migración, plan de *rollback* y controles *FinOps* tanto al caso práctico como a la cartera real de sistemas de su propia organización. |
| **6. Discusión guiada y puesta en común** | 25 min | Modera una simulación de negociación: un equipo presenta su decisión *cloud* y otro actúa como «auditor de riesgos y costes» preguntando por caídas de fibra, subidas de precio y copias de seguridad. | Defiende su estrategia *cloud* (híbrida o 100 % SaaS/IaaS), responde a preguntas de continuidad y recoge mejoras de sus compañeros. |
| **7. Síntesis, evaluación sumativa y cierre** | 20 min | Consolida el decálogo de migración *cloud* segura y rentable en pyme, aplica la evaluación sumativa y conecta con el Tema 7 (Automatización y robótica industrial: del software conectado a la automatización física y de oficina). | Realiza el test sumativo breve y anota 2 acciones inmediatas de revisión de costes/copias en su empresa. |
| **TOTAL** | **240 min** | | |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «Test de estrés de infraestructura y continuidad»

- **Objetivo:** Hacer consciente al alumnado de su dependencia real de la infraestructura actual (local o nube) y de su nivel real de preparación ante caídas.
- **Instrucciones para el alumnado:**
  1. Individualmente (8 min), anotad los 5 sistemas o herramientas sin los cuales vuestra empresa no puede facturar ni entregar servicio.
  2. Marcad para cada uno: ¿Dónde está alojado? (*Servidor propio / PC local / Nube SaaS / No lo sé*), ¿Qué pasa si falla 4 horas? y ¿Cuándo fue la última vez que se probó restaurar una copia de seguridad?
  3. En grupos de 3 (12 min), comparad vuestro «punto único de fallo» más preocupante (servidor viejo, fibra única, falta de copia independiente o licencias sin dueño).
- **Materiales necesarios:** Ficha de test de estrés de infraestructura.
- **Tiempo estimado:** 20 minutos (en la fase de Apertura).
- **Rol del formador:** Señalar que «no saber dónde están alojados los datos críticos ni si la copia restaura» es el hallazgo más habitual y valioso de esta dinámica.
- **Producto o entregable esperado:** Mapa rápido de 5 sistemas críticos con identificación del mayor punto único de fallo.
- **Criterios de éxito:** Inventario concreto de sistemas reales y estimación honesta de tolerancia a parada (RTO) y pérdida de datos (RPO).

### Actividad 2 (Aplicación): «Matriz 6 R y cláusulas de blindaje para Recambios Levante»

- **Objetivo:** Aplicar las estrategias de migración (6 R simplificadas), la secuencia por oleadas y los requisitos contractuales/de seguridad al caso *Talleres Mecánicos y Recambios Levante S.L.*.
- **Instrucciones para el alumnado:**
  1. En equipos de 3-4 personas, tomad los 5 sistemas del caso (Correo/archivos, ERP heredado de almacén, Ecommerce B2B con picos, Control de turnos/presencia antiguo y Sistema de etiquetado físico en nave).
  2. Asignad a cada sistema una estrategia (**Retire, Retain, Repurchase, Rehost o Replatform**) y una oleada de migración (Meses 1-2, Meses 3-4 o Fase 2).
  3. Definid 4 requisitos obligatorios de seguridad, conectividad y contrato (SLA mínimo, residencia de datos, copia independiente y cláusula de salida anti *vendor lock-in*).
- **Materiales necesarios:** Plantilla de Matriz 6 R y datos del caso práctico.
- **Tiempo estimado:** 25 minutos.
- **Rol del formador:** Verificar que el equipo no migra el ERP crítico en el mes 1 sin haber asegurado antes conectividad redundante en las 3 naves y probado una oleada de bajo riesgo.
- **Producto o entregable esperado:** Matriz 6 R secuenciada por oleadas + checklist de 4 salvaguardas contractuales/técnicas.
- **Criterios de éxito:** Coherencia entre cada sistema y su estrategia R, minimización del riesgo de parada operativa y prevención explícita de *lock-in* y cortes de fibra.

### Actividad 3 (Transferencia a la realidad laboral): «Plan de Migración u Optimización Cloud (*FinOps* + Seguridad)»

- **Objetivo:** Construir un plan ejecutable para modernizar o depurar el entorno tecnológico de la propia empresa, combinando control de costes, seguridad compartida y continuidad.
- **Instrucciones para el alumnado:**
  1. Usando los 5 sistemas identificados en la Actividad 1, completad la **Plantilla de Auditoría y Hoja de Ruta Cloud** (sección 8).
  2. Para sistemas aún locales: decidid estrategia 6 R, modelo objetivo (SaaS/PaaS/IaaS o híbrido) y paso previo de limpieza.
  3. Para sistemas ya en la nube: definid 3 medidas inmediatas de **FinOps** (auditoría de licencias inactivas, alertas de consumo, ajuste de plan) y 3 medidas de **responsabilidad compartida** (MFA, *backup* independiente probado, control de bajas de usuarios).
- **Materiales necesarios:** Plantilla de Auditoría y Hoja de Ruta Cloud (sección 8).
- **Tiempo estimado:** 35 minutos + 25 minutos de defensa ante «auditor de riesgos y costes» en la fase 6.
- **Rol del formador:** Ayudar a distinguir qué tareas puede liderar el mando intermedio con sentido de negocio (inventario, licencias, SLA, prioridades) y qué tareas debe delegar en un socio IT certificado.
- **Producto o entregable esperado:** Hoja de ruta *cloud* y plan de control *FinOps*/seguridad personalizado de 1 página.
- **Criterios de éxito:** Equilibrio entre ambición y prudencia operativa, inclusión concreta de controles de gasto y claridad en la responsabilidad compartida.

---

## 6. Caso práctico: Talleres Mecánicos y Recambios Levante S.L.

### Contexto empresarial
**Talleres Mecánicos y Recambios Levante S.L.** (Alicante) es una distribuidora pyme de recambios industriales y automoción con **45 empleados** repartidos en **3 naves** (central y dos delegaciones comarcales) y una facturación de 6,4 millones de euros. Abastece diariamente a más de 380 talleres profesionales que realizan pedidos urgentes por teléfono y a través de un portal B2B.

### Situación o problema
Los dos servidores físicos instalados en la nave central tienen 7 años de antigüedad y están al límite de su vida útil. En el último año sufrieron **dos caídas graves** (14 horas sin poder facturar ni consultar stock en las 3 naves, costando ~22.000 € en pedidos perdidos y horas improductivas). Además, el portal B2B se bloquea cada lunes a las 9:00 h (pico semanal de pedidos de talleres). El proveedor histórico de hardware propone comprar nuevos servidores locales por **46.000 €** (+ mantenimiento anual), mientras un partner tecnológico propone migrar progresivamente a la nube. El gerente duda por tres miedos: «¿y si la nube nos sale más cara a 3 años?», «¿qué pasa si se cae internet en las naves?» y «¿perderemos el control de nuestros datos?».

### Datos disponibles

| Concepto / Sistema | Situación actual (*On-premise*) | Escenario Nube propuesto (híbrido/progresivo a 3 años) |
|---|---|---|
| **Hardware y mantenimiento local** | Renovación servidores + SAI + licencias sistema: **46.000 €** Año 1 + **6.500 €/año** soporte, electricidad y refrigeración = **65.500 € en 3 años** (sin elasticidad ni redundancia entre sedes) | Eliminación de servidores centrales tras migración. Inversión inicial de migración y puesta en marcha: **14.000 €** (Año 1) |
| **1. Correo, ofimática y archivos (45 usuarios)** | Servidor local saturado + carpetas sin copias fuera de la nave | **SaaS** estándar corporativo: ~550 €/mes (**6.600 €/año**) con MFA y *backup* externo incluido (+90 €/mes = **1.080 €/año**) |
| **2. Portal ecommerce B2B (picos lunes y campañas)** | Alojado en servidor local; se cae con > 60 usuarios simultáneos | **PaaS/SaaS** elástico con autoescalado en picos: ~380 €/mes de media (**4.560 €/año**) |
| **3. ERP de gestión y almacén (software antiguo de escritorio)** | Crítico; sustituirlo llevaría 9 meses y alta curva de aprendizaje; funciona bien funcionalmente | Fase 1 (Año 1): **Rehost (IaaS)** optimizado con apagado nocturno de entornos de prueba (~490 €/mes = **5.880 €/año**). Evaluar paso a ERP SaaS en Año 2-3 |
| **4. Herramienta antigua de control de presencia (obsoleta)** | Apenas se usa (sustituible); da errores cada mes | **Retire / Repurchase** por app SaaS simple (~75 €/mes = **900 €/año**) |
| **5. Software propietario de etiquetadora física en nave 1** | Solo corre en un PC industrial conectado por cable serie a la máquina | **Retain** en local (aislado y con imagen de respaldo) hasta renovar la máquina |
| **Conectividad actual de las 3 naves** | Una sola línea de fibra por nave, sin línea de respaldo | Añadiendo respaldo 4G/5G profesional en las 3 naves: **120 €/mes** (**1.440 €/año**) |

### Preguntas de análisis
1. Comparad el coste total a 3 años del escenario *On-premise* (65.500 € + riesgo recurrente de caídas de 22.000 €/año) frente al escenario Nube propuesto (14.000 € inicial + costes anuales recurrentes × 3). ¿Qué conclusión financiera y de riesgo sacáis?
2. ¿Por qué tiene sentido aplicar estrategias distintas a cada uno de los 5 sistemas en lugar de «migrar todo igual a IaaS» o «cambiar el ERP el primer mes»?
3. ¿Cómo responderíais con hechos a los tres miedos concretos del gerente (coste a 3 años, caídas de internet y control/propiedad de datos)?
4. Diseñad el orden de las 3 oleadas de migración en 6 meses indicando qué se migra primero para ganar confianza y qué plan de *rollback* requiere el ERP.

### Tarea a realizar
En equipos de 3-4 personas, elaborad el informe de recomendación para el gerente de Recambios Levante S.L. que incluya:
1. Cuadro comparativo de TCO a 3 años (*On-premise* vs. Nube), incorporando tanto costes directos como el coste del riesgo de inactividad.
2. Tabla de decisión 6 R y calendario en 3 oleadas (Meses 1-2, 3-4 y 5-6) con mitigación de cortes de fibra.
3. Medidas concretas de *FinOps* (para que el gasto mensual no se dispare) y de responsabilidad compartida (MFA, *backup* independiente, exportación de datos).

### Posibles soluciones o criterios de análisis
- **Comparativa financiera orientativa a 3 años:**
  - *Escenario Nube:* Cuotas anuales = 6.600 (correo/ofimática) + 1.080 (*backup*) + 4.560 (B2B) + 5.880 (IaaS ERP) + 900 (presencia) + 1.440 (respaldo 4G/5G) = **20.460 €/año**. En 3 años: 14.000 + (20.460 × 3) = **75.380 €**.
  - *Comparación rigurosa:* Directamente, el escenario *cloud* cuesta ~9.880 € más en 3 años que renovar hardware local (75.380 € vs. 65.500 €), **pero** evita el desembolso inicial de 46.000 € (protege caja/CAPEX), elimina caídas estimadas en ~22.000 €/año (66.000 € potenciales en 3 años), resuelve el bloqueo de los lunes en el portal B2B (recupera ventas), incluye respaldo de conectividad y copias externas, y mejora disponibilidad multi-nave. Resultado neto: claramente favorable al escenario nube bien gobernado.
- **Secuencia recomendada por oleadas (riesgo creciente):**
  - *Meses 1-2 (Cimientos + bajo riesgo):* Instalar respaldo 4G/5G en las 3 naves; migrar correo/archivos a SaaS con limpieza previa, MFA y *backup* independiente; retirar app vieja de presencia (*Repurchase*).
  - *Meses 3-4 (Impacto comercial):* Migrar el portal B2B a PaaS/SaaS elástico resolviendo los bloqueos de los lunes.
  - *Meses 5-6 (Núcleo operativo):* Ejecutar *Rehost* (IaaS) del ERP en un fin de semana con prueba previa en entorno espejo y plan de *rollback* probado; dejar etiquetadora en *Retain* local aislado.
- **Respuestas a los miedos del gerente:** Coste controlado mediante presupuestos/alertas *FinOps* y revisión trimestral de licencias; internet mitigado con doble línea (fibra + 4G/5G automático); control de datos garantizado mediante almacenamiento en UE, contrato de propiedad/exportación estándar y *backup* independiente.

### Preguntas de reflexión final
- ¿Qué habría ocurrido si alguien hubiera vendido la nube al gerente diciendo falsamente «siempre sale más barata en factura directa» en lugar de mostrar el TCO completo incluyendo riesgo de parada y elasticidad?
- ¿Qué sistema de vuestra empresa requeriría hoy una estrategia *Retain* o *Rehost* temporal antes de pasar a un SaaS moderno?

---

## 7. Evaluación

### Evaluación diagnóstica breve (al inicio)
Cuestionario rápido de 3 preguntas:
1. Empareja correctamente: (a) Alquilar servidores virtuales, (b) Usar un CRM listo por suscripción, (c) Usar una base de datos gestionada para desplegar tu app → con IaaS / PaaS / SaaS.
2. Verdadero/Falso: «Si guardo mis archivos en una carpeta sincronizada en la nube, ya no necesito copias de seguridad adicionales».
3. ¿Qué ventaja te parece más relevante hoy para tu negocio: ahorrar inversión inicial (CAPEX), escalar en picos, teletrabajar seguro o mejorar continuidad ante fallos?

### Evaluación formativa durante la sesión
- Diagnóstico compartido en el «Test de estrés de infraestructura» (Actividad 1).
- Validación por el formador de los cálculos a 3 años y la secuencia por oleadas en *Recambios Levante* (Actividad 2).
- Simulación de auditoría de riesgos y costes en parejas/grupos durante la fase 6.

### Evaluación sumativa al final
1. Entrega individual del **Plan de Migración u Optimización Cloud (*FinOps* + Seguridad)** (Actividad 3).
2. Test aplicado de 5 ítems (identificación IaaS/PaaS/SaaS, responsabilidad compartida, diferencia entre sincronización y *backup*, cálculo conceptual de disponibilidad SLA y estrategia 6 R adecuada).

### Rúbrica de evaluación (para el Plan de Migración u Optimización Cloud)

| Criterio | Insuficiente (1) | En desarrollo (2) | Adecuado (3) | Destacado (4) |
|---|---|---|---|---|
| **Criterio arquitectónico (IaaS/PaaS/SaaS y 6 R)** | Propone migrar todo igual sin analizar cada aplicación ni diferenciar modelos de servicio. | Clasifica parcialmente sus aplicaciones pero elige modelos sobredimensionados o sin secuencia lógica. | Asigna estrategias 6 R y modelos IaaS/PaaS/SaaS coherentes con la realidad de una pyme y secuencia en oleadas. | Justifica un enfoque híbrido/progresivo óptimo, incluye limpieza previa y contempla *rollback* y redundancia de conectividad. |
| **Control económico y *FinOps*** | Asume que la nube siempre abarata costes sin análisis económico ni control de gasto. | Menciona cuotas mensuales pero omite costes de migración, respaldo o crecimiento de licencias. | Compara TCO de forma realista (CAPEX vs. OPEX) e incluye al menos 3 controles concretos de *FinOps*. | Incorpora el coste del riesgo de inactividad, fija alertas presupuestarias, revisión trimestral de licencias y prevención de *lock-in*. |
| **Seguridad y responsabilidad compartida** | Delega toda la seguridad al proveedor *cloud* o confunde sincronización con copia de seguridad. | Nombra medidas genéricas («poner contraseñas») sin abordar copias independientes ni contratos. | Aplica correctamente el modelo de responsabilidad compartida: MFA, permisos, *backup* independiente y residencia de datos. | Define requisitos concretos de SLA, RPO/RTO, pruebas periódicas de restauración y cláusulas contractuales de exportación. |
| **Viabilidad operativa y continuidad** | Plan de migración «big bang» con alto riesgo de paralizar la actividad diaria. | Secuencia general sin responsables ni consideración de ventanas de baja actividad o formación. | Plantea oleadas graduales desde servicios de bajo riesgo hacia críticos, cuidando formación y operación continua. | Plan ejecutable de inmediato con hitos claros, interlocución definida entre negocio e IT y métricas de éxito tras migración. |

### Actividad de autoevaluación o reflexión
Checklist «Higiene Cloud en 10 minutos» (5 min): el alumnado marca qué tres comprobaciones hará la próxima semana en su empresa: (1) revisar el listado de suscripciones SaaS activas y dar de baja cuentas de exempleados, (2) comprobar si existe MFA en correo y ERP, (3) verificar si las copias de seguridad son independientes de la nube principal y cuándo se probó su restauración.

---

## 8. Materiales y recursos

### Guion de diapositivas (estructura slide por slide)

1. **Portada:** Bloque 7 · Tema 6. Cloud computing: infraestructura ágil, segura y controlada para pymes.
2. **Activación:** Test de estrés — ¿cuántas horas aguanta tu empresa parada sin servidor o sin internet?
3. **IaaS, PaaS y SaaS explicados en 1 minuto:** Qué gestionas tú y qué gestiona el proveedor (matriz visual).
4. **Nube pública, privada e híbrida:** Por qué la mayoría de las pymes en transición operan en híbrido.
5. **CAPEX vs. OPEX y elasticidad:** Dejar de pagar servidores sobredimensionados por un pico anual.
6. ***FinOps* para no especialistas:** Cómo evitar la factura sorpresa (licencias zombi, recursos encendidos 24/7 y alertas de gasto).
7. **Caso práctico:** *Talleres Mecánicos y Recambios Levante S.L.* — 46.000 € en hardware vs. migración progresiva.
8. **El Modelo de Responsabilidad Compartida:** Lo que el proveedor NO hará por ti (usuarios, MFA, permisos, datos).
9. **Sincronización ≠ *Backup*:** RPO, RTO y por qué necesitas copias inmutables independientes.
10. **Leer la letra pequeña del Cloud:** SLA (el coste oculto de los «nueves»), residencia de datos UE y cláusula de salida anti *vendor lock-in*.
11. **Migrar sin parar la empresa:** Las 6 R prácticas (*Retire, Retain, Repurchase, Rehost, Replatform, Refactor*) y oleadas con *rollback*.
12. **El eslabón olvidado:** Redundancia de conectividad (fibra + respaldo 4G/5G) antes de llevar sistemas críticos a la nube.
13. **Taller práctico:** Matriz 6 R del caso + Plan de Migración/Optimización *Cloud* propio.
14. **Síntesis y puente al Tema 7:** Sobre una base *cloud* estable y conectada, podemos automatizar tareas repetitivas en oficina (RPA) y en planta (robótica industrial).

### Ficha de trabajo
Documento de 2 páginas con:
- Ficha del «Test de estrés de infraestructura» (Actividad 1).
- Tabla de referencia rápida de las 6 R simplificadas + tabla de equivalencias de SLA (99 % = ~3,65 días/año de caída; 99,5 % = ~43,8 h; 99,9 % = ~8,76 h; 99,99 % = ~52,6 min).

### Plantilla práctica replicable: Auditoría y Hoja de Ruta Cloud (Pyme)

| Sistema / Aplicación | Ubicación actual | Estrategia (6 R / Optimizar) | Modelo objetivo (SaaS/PaaS/IaaS/Local) | Oleada | Control *FinOps* | Salvaguarda de seguridad y continuidad |
|---|---|---|---|---|---|---|
| Ej. Correo y archivos | Servidor local | *Repurchase* | SaaS | Mes 1-2 | Revisión trimestral licencias | MFA + *backup* externo + región UE |
| 1. | | | | | | |
| 2. | | | | | | |
| 3. | | | | | | |
| 4. | | | | | | |
| 5. | | | | | | |

### Lecturas o recursos recomendados
- Storment, J. R., & Fuller, M. *Cloud FinOps: Collaborative, Real-Time Cloud Financial Management*. O'Reilly Media (selección de principios clave de control de costes).
- Guías divulgativas de arquitectura *cloud* y seguridad en la nube de INCIBE para pymes y autónomos.
- Documentación conceptual sobre el marco de migración 6 R (publicaciones técnicas divulgativas de AWS / Microsoft Cloud Adoption Framework adaptadas a pyme).

### Vídeos, artículos y fuentes adicionales *(Validación previa obligatoria)*
> **Nota importante para el formador:** Validar precios de licencias, normativas vigentes y enlaces antes de impartir el tema.
- Verificar el marco legal vigente sobre **transferencias internacionales de datos (RGPD y decisiones de adecuación vigentes UE-EE. UU.)** y las recomendaciones actuales de la **AEPD** sobre contratación de servicios *cloud computing*.
- Comprobar antes de clase la normativa europea vigente sobre portabilidad y cambio de proveedor *cloud* (**Reglamento Europeo de Datos — Data Act**, verificando su calendario de aplicación efectiva sobre eliminación de barreras/comisiones de salida).
- Validar tarifas actualizadas de suites SaaS corporativas y soluciones de *backup cloud* independiente para pymes para mantener realistas los ejemplos de clase.

### Glosario de términos clave

| Término | Definición operativa |
|---|---|
| **CAPEX / OPEX** | CAPEX es inversión de capital inicial en activos (comprar servidores); OPEX es gasto operativo recurrente (suscripción/uso). |
| ***FinOps*** | Disciplina de gestión financiera y operativa orientada a controlar y optimizar el gasto variable en la nube. |
| **IaaS / PaaS / SaaS** | Niveles de servicio en la nube: Infraestructura virtual (IaaS), Plataforma gestionada (PaaS) y Software listo para usar (SaaS). |
| **Modelo de responsabilidad compartida** | División de obligaciones de seguridad entre proveedor *cloud* (seguridad de la nube) y cliente (seguridad en la nube). |
| ***Rehost (lift-and-shift)*** | Migración rápida de una aplicación existente a servidores en la nube sin rediseñar su arquitectura interna. |
| ***Repurchase*** | Sustitución de software antiguo local por una aplicación SaaS estándar migrando los datos limpios. |
| **RPO / RTO** | RPO: pérdida máxima aceptable de datos recientes; RTO: tiempo máximo aceptable para restaurar un servicio caído. |
| ***SaaS sprawl*** | Proliferación descontrolada de suscripciones SaaS contratadas por distintos equipos sin inventario ni control de costes. |
| ***SLA (Service Level Agreement)*** | Compromiso contractual de disponibilidad mínima y nivel de soporte de un servicio tecnológico. |

---

## 9. Adaptaciones para modalidad híbrida

### Sesión presencial
- Realizar la comparación visual de IaaS/PaaS/SaaS mediante tarjetas imantadas o adhesivas sobre una tabla de responsabilidades («Lo gestiona mi empresa» vs. «Lo gestiona el proveedor») para que el alumnado construya el esquema activamente.
- En la fase 6, organizar mesas enfrentadas («Equipo Directivo de Migración» vs. «Equipo Auditor de Riesgos y Costes») con 3 minutos de exposición y 3 minutos de preguntas incisivas.

### Sesión online síncrona
- Compartir una hoja de cálculo interactiva con los datos del caso *Recambios Levante* para que cada *breakout room* compruebe el TCO a 3 años variando el escenario de caídas evitadas y el número de licencias.
- Utilizar la pizarra colaborativa con etiquetas precreadas de las 6 R (*Retire, Retain, Repurchase, Rehost, Replatform, Refactor*) para arrastrarlas sobre los 5 sistemas del caso.

### Sesión asíncrona (trabajo previo y posterior en plataforma LMS)
- **Pre-trabajo (20 min):** Rellenar el mini-inventario del «Test de estrés» con 5 herramientas de su empresa (preguntando si hace falta a administración o IT cuánto se paga en suscripciones SaaS al mes).
- **Post-trabajo (30 min):** Subir al LMS la Hoja de Ruta Cloud completada + resolver un minicaso autoevaluable sobre responsabilidad compartida y cálculo de SLA.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Proporciona la base de infraestructura moderna necesaria para sostener la gestión documental del **Tema 1**, los entornos corporativos de IA del **Tema 2**, las plataformas IoT del **Tema 3**, los servicios BaaS del **Tema 4** y los repositorios/dashboards de BI del **Tema 5**.
- **Competencias que desarrolla:** Criterio de arquitectura tecnológica a nivel directivo, análisis financiero TCO (CAPEX vs. OPEX y *FinOps*), gestión de proveedores tecnológicos (SLA y prevención de *lock-in*) y planificación de continuidad operativa.
- **Conexión dentro del plan de 10 bloques:**
  - *Tema anterior (Bloque 7, Tema 5 — Big data y business intelligence, BI):* Las analíticas modernas y cuadros de mando en tiempo real se apoyan en bases de datos y herramientas *cloud* escalables y accesibles desde múltiples sedes.
  - *Tema posterior (Bloque 7, Tema 7 — Automatización y robótica industrial):* Con datos estructurados, analítica y servicios conectados en la nube, el siguiente paso es automatizar la ejecución tanto de tareas administrativas repetitivas (RPA) como de operaciones físicas en fábrica y almacén (robótica colaborativa, visión artificial e Industria 4.0).
- **Evidencia de aprendizaje que dejará el alumnado:** Una **Auditoría y Hoja de Ruta Cloud (6 R + controles *FinOps* + seguridad compartida)** aplicada a la cartera real de sistemas de su organización.

---

## Siguientes pasos para el formador

1. **Validar normativa de nube y portabilidad:** Comprobar antes de impartir el estado vigente de transferencias internacionales de datos bajo RGPD y las disposiciones aplicables del *Data Act* europeo sobre cambio de proveedor *cloud*.
2. **Preparar la hoja comparativa del caso:** Tener lista la tabla numérica resuelta de *Recambios Levante S.L.* para mostrar con claridad por qué la decisión no depende solo de la cuota mensual sino del riesgo de parada y la elasticidad.
3. **Ajustar el lenguaje al perfil no técnico:** Evitar entrar en configuración de servidores, VPC o contenedores; mantener el foco en decisiones de negocio (coste total, continuidad, contratos, riesgos y fases).
4. **Preparar el puente al Tema 7:** Concluir invitando al alumnado a pensar: «Ahora que nuestros sistemas están en la nube y nuestros datos fluyen, ¿qué tareas manuales repetitivas en oficina o en planta siguen consumiendo horas humanas de bajo valor y causando errores o fatiga?».
