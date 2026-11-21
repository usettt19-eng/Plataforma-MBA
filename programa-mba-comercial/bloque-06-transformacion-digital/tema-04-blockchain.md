# Tema 4. Blockchain

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Tema 4. Blockchain |
| **Bloque y posición dentro del programa** | Bloque 7: Transformación digital — Posición 4 de 8 |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Mandos intermedios y emprendedores |
| **Nivel de dificultad** | Intermedio |
| **Prerrequisitos** | Comprensión de digitalización de procesos y captura de datos físicos mediante IoT (Bloque 7, Temas 1 a 3) |
| **Resultado general de aprendizaje** | Discernir con rigor empresarial cuándo un registro distribuido (*blockchain*) aporta ventaja real frente a una base de datos tradicional y diseñar casos de uso viables de trazabilidad, contratos inteligentes o tokenización para ecosistemas de pymes |

---

## 2. Objetivos de aprendizaje

Al finalizar este tema, el alumnado será capaz de:

1. **Explicar** los principios operativos de un registro distribuido (bloques encadenados, *hash*, consenso, inmutabilidad y redes públicas frente a permisionadas) sin depender de jerga informática compleja. *(Nivel de Bloom: Comprender)*
2. **Evaluar**, mediante un árbol de decisión objetivo, si un problema empresarial requiere realmente tecnología *blockchain* o se resuelve mejor y más barato con una base de datos centralizada tradicional. *(Nivel de Bloom: Evaluar)*
3. **Analizar** el funcionamiento y los límites de los contratos inteligentes (*smart contracts*) y los oráculos en la automatización de acuerdos, pagos y certificaciones entre varias organizaciones. *(Nivel de Bloom: Analizar)*
4. **Distinguir** entre los distintos tipos de criptoactivos y *tokens* empresariales (criptomonedas, *stablecoins*, *utility tokens*, activos tokenizados) junto con sus implicaciones básicas de riesgo y cumplimiento normativo. *(Nivel de Bloom: Comprender)*
5. **Diseñar** la propuesta conceptual y el modelo de gobernanza de un caso de uso *blockchain* de trazabilidad o certificación entre múltiples actores de una cadena de valor. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Qué es Blockchain y cuándo NO debemos usarla

- **Explicación breve y clara:** *Blockchain* es un tipo de registro distribuido (DLT) donde múltiples participantes mantienen una copia sincronizada e inmutable de transacciones agrupadas en bloques enlazados criptográficamente. Su valor empresarial no reside en almacenar datos rápido (una base de datos convencional es más rápida y barata), sino en **crear confianza compartida entre organizaciones independientes que necesitan verificar un historial común sin depender de un único intermediario central**.
- **Conceptos clave:** Registro distribuido (DLT), función *hash* (huella digital criptográfica), inmutabilidad, mecanismo de consenso, red pública vs. red privada/permisionada (*consortium blockchain*).
- **Definiciones necesarias:**
  - *Hash criptográfico:* Huella digital única de longitud fija generada a partir de un dato o documento; si cambia una sola coma del documento original, el *hash* cambia por completo, evidenciando cualquier manipulación.
  - *Red pública vs. red permisionada:* En una red pública cualquiera puede leer y participar (ej. Ethereum, Bitcoin); en una red permisionada o de consorcio solo escriben y validan nodos autorizados (proveedores, auditores, aduanas, bancos), lo que facilita privacidad, control y menor coste energético en entornos B2B.
- **Ejemplo práctico realista:** Una pyme de distribución quiere llevar el control interno de sus vacaciones de empleados y propone «hacerlo en *blockchain*». Tras aplicar el árbol de decisión, concluye que **no** tiene sentido: solo hay una empresa, existe confianza interna y basta un software de RR. HH. estándar. En cambio, cuando 14 bodegas, 3 laboratorios de certificación y 2 navieras quieren certificar de forma inalterable la denominación de origen y los traspasos de custodia de botellas exportadas, un registro distribuido permisionado sí aporta confianza verificable entre partes sin un dueño único.
- **Errores frecuentes:**
  - Aplicar *blockchain* por prestigio o moda tecnológica a problemas internos de una sola empresa donde un ERP o base de datos relacional es diez veces más simple.
  - Guardar archivos pesados o datos personales en claro directamente dentro de la cadena (*on-chain*), chocando con costes y con el derecho de supresión del RGPD (la buena práctica es guardar los datos fuera —*off-chain*— y anclar solo su *hash*).
  - Creer que *blockchain* garantiza automáticamente que un dato introducido es verdad: solo garantiza que no se ha modificado desde que se registró (el problema del «dato falso en origen»).
- **Preguntas que el alumnado debería poder responder:**
  - ¿Qué condiciones concretas deben darse simultáneamente para que *blockchain* sea mejor opción que una base de datos tradicional?
  - ¿Por qué las empresas suelen guardar solo el *hash* en la cadena (*on-chain*) y el documento completo fuera (*off-chain*)?
  - ¿Qué diferencia práctica hay entre una red pública y una red permisionada para un consorcio empresarial?

### 3.2. Trazabilidad verificable y el reto del mundo físico (IoT + Blockchain)

- **Explicación breve y clara:** La trazabilidad es uno de los casos de uso empresariales más maduros de *blockchain*, especialmente en agroalimentación, farmacia, lujo, logística internacional y cumplimiento ESG (sostenibilidad y huella de carbono). Sin embargo, *blockchain* por sí sola no puede saber qué ocurre en una finca o en un contenedor: necesita combinarse con identificadores únicos (QR dinámicos, NFC, RFID) y sensores IoT (Tema 3) más auditorías físicas para vincular el producto real con su registro digital.
- **Conceptos clave:** Cadena de custodia, pasaporte digital de producto, *oracle problem* (problema del oráculo), vínculo físico-digital (*phygital*), verificación por terceros, cumplimiento ESG.
- **Definiciones necesarias:**
  - *Problema del oráculo:* Brecha de confianza que existe entre un hecho del mundo físico y el dato digital que se introduce en la *blockchain*; si alguien introduce un dato fraudulento en origen, la cadena lo conservará inmutablemente falso.
  - *Pasaporte Digital de Producto (DPP):* Registro electrónico estructurado que acompaña a un producto a lo largo de su ciclo de vida con información verificable sobre origen, materiales, reparabilidad y sostenibilidad. *(Nota para el formador: verificar antes de impartir el calendario reglamentario vigente en la UE sobre Pasaporte Digital de Producto derivado del Reglamento de Ecodiseño).*
- **Ejemplo práctico realista:** Una pyme fabricante de calzado sostenible en Elche colabora con curtidurías certificadas, un taller de suelas recicladas y un auditor ambiental. Cada actor registra en una plataforma *blockchain* compartida (modelo SaaS de trazabilidad sin montar nodos propios) los certificados de lote y emisiones; el consumidor final escanea el código QR de la caja y verifica la trazabilidad real firmada por cada participante, justificando un posicionamiento de precio superior y preparándose para exigencias europeas de transparencia textil.
- **Errores frecuentes:**
  - Pensar que poner un QR con enlace a una web bonita equivale a trazabilidad verificada por terceros.
  - Ignorar la gobernanza del consorcio: si proveedores clave no quieren o no saben introducir datos en el sistema, la cadena de trazabilidad queda rota.
  - Montar una infraestructura *blockchain* propia desde cero en una pyme en lugar de usar soluciones *Blockchain-as-a-Service (BaaS)* o plataformas sectoriales ya existentes.
- **Preguntas que el alumnado debería poder responder:**
  - ¿Qué es el problema del oráculo y cómo se reduce combinando IoT, sellos físicos y auditorías?
  - ¿Qué valor aporta a una pyme exportadora un registro de trazabilidad verificable por terceros frente a una autodeclaración en PDF?
  - ¿Por qué el mayor reto de un proyecto de trazabilidad en *blockchain* suele ser la gobernanza entre socios y no el código?

### 3.3. Contratos inteligentes (*smart contracts*) y automatización interempresarial

- **Explicación breve y clara:** Un contrato inteligente no es necesariamente un contrato legal redactado en lenguaje jurídico ni tiene inteligencia artificial; es un **programa informático almacenado en una *blockchain* que ejecuta automáticamente una acción preacordada cuando se cumplen condiciones verificables** («si el sensor y la aduana confirman la entrega a tiempo y sin rotura de temperatura, liberar el 100 % del pago; si hubo retraso > 24 h, aplicar penalización pactada»).
- **Conceptos clave:** *Smart contract*, ejecución determinista, oráculos externos, liquidación automática (*escrow* programable), auditoría de código, validez legal.
- **Definiciones necesarias:**
  - *Contrato inteligente (smart contract):* Código autoejecutable desplegado en una red *blockchain* que garantiza a todas las partes que las reglas pactadas se cumplirán exactamente como fueron programadas, sin intervención unilateral.
  - *Oráculo:* Servicio o dispositivo (API bancaria, sensor IoT, registro aduanero) que suministra información del exterior a un contrato inteligente para disparar su ejecución.
- **Ejemplo práctico realista:** Una pyme de logística marítima y un grupo de proveedores textiles utilizan un acuerdo automatizado con *smart contract* conectado a los hitos del puerto y sensores de contenedor: cuando la mercancía pasa inspección de llegada conforme a las condiciones pactadas, se libera automáticamente la orden de pago al proveedor sin 45 días de papeleo, conciliaciones manuales ni disputas documentales.
- **Errores frecuentes:**
  - Creer que un *smart contract* sustituye al contrato mercantil legal escrito: en la práctica empresarial deben ir emparejados (acuerdo marco legal que reconoce la ejecución técnica del código y fija cómo resolver excepciones).
  - Desplegar código sin auditoría de seguridad: un error de programación en un *smart contract* inmutable puede bloquear fondos o ejecutar pagos indebidos.
  - Intentar codificar cláusulas subjetivas («entregar con calidad satisfactoria») que no pueden medirse con un criterio objetivo y binario.
- **Preguntas que el alumnado debería poder responder:**
  - ¿Qué tipo de cláusulas mercantiles se pueden automatizar mediante un *smart contract* y cuáles no?
  - ¿Qué ocurre si el oráculo que alimenta un contrato inteligente falla o es manipulado?
  - ¿Por qué un contrato inteligente requiere un acuerdo legal tradicional que lo respalde?

### 3.4. Criptoactivos, tokenización y marco regulatorio básico

- **Explicación breve y clara:** Conviene separar con claridad la tecnología *blockchain* (infraestructura de registro) de la especulación con criptomonedas. En el entorno empresarial, los criptoactivos y la tokenización abren casos concretos como pagos internacionales ágiles con *stablecoins* reguladas, programas de fidelización interoperables (*utility tokens*), certificación de credenciales o fraccionamiento de activos reales (inmobiliario, facturas, derechos de autor). Al mismo tiempo, conllevan riesgos altos de volatilidad, custodia de claves, fiscalidad y cumplimiento normativo. *(Nota obligatoria para el formador: verificar antes de impartir la aplicación vigente del Reglamento Europeo MiCA —Markets in Crypto-Assets—, la normativa española de prevención de blanqueo de capitales y el tratamiento fiscal/contable actualizado por la Agencia Tributaria para empresas que operen con criptoactivos).*
- **Conceptos clave:** Criptomoneda nativa, *stablecoin* (moneda estable respaldada), *utility token*, *security token* / tokenización de activos reales (RWA), custodia (*wallet* propia vs. custodio regulado), reglamento MiCA.
- **Definiciones necesarias:**
  - *Tokenización:* Representación digital de un derecho, activo físico, contrato o crédito mediante un *token* registrado en una *blockchain*, facilitando su trazabilidad, verificación o transferencia.
  - *Stablecoin:* Criptoactivo diseñado para mantener un valor estable vinculado a un activo de referencia (habitualmente una moneda fiduciaria como el euro o el dólar), reduciendo la volatilidad en pagos y liquidaciones.
- **Ejemplo práctico realista:** Una pyme de desarrollo de software con clientes en Latinoamérica y Asia sufría comisiones del 4-6 % y demoras de 5 días en transferencias internacionales. Antes de aceptar pagos en criptoactivos, consultó a su asesor fiscal y descartó recibir criptomonedas volátiles en tesorería; evaluó en su lugar proveedores de pago regulados (con conversión inmediata a euros en cuenta bancaria y trazabilidad contable completa) cumpliendo estrictamente con las obligaciones fiscales y de prevención de blanqueo vigentes.
- **Errores frecuentes:**
  - Aceptar criptoactivos como medio de cobro en una pyme sin definir contabilidad, tipo de cambio de referencia, custodia segura de claves y obligaciones tributarias.
  - Confundir la emisión de un *utility token* con la captación de inversión financiera regulada (*security token*), incurriendo en infracciones graves ante supervisores financieros (CNMV u equivalentes).
  - Perder la clave privada de una *wallet* corporativa por no tener custodia institucional o gobierno multifirma.
- **Preguntas que el alumnado debería poder responder:**
  - ¿Por qué una pyme debe distinguir entre adoptar tecnología *blockchain* y exponerse a la volatilidad de las criptomonedas?
  - ¿Qué diferencias operativas y legales existen entre un *utility token*, una *stablecoin* y la tokenización de un activo financiero?
  - ¿Qué controles mínimos (custodia, fiscalidad, cumplimiento) exigiríais antes de aceptar pagos o emitir *tokens*?

---

## 4. Metodología didáctica (Secuencia de 4 horas / 240 minutos)

| Fase | Duración | Qué hace el formador | Qué hace el alumnado |
|---|---:|---|---|
| **1. Apertura y activación** | 25 min | Lanza el reto «¿Blockchain o simple base de datos?» (Actividad 1) con 5 propuestas reales y desmonta mitos frecuentes separando *blockchain* de especulación cripto. | Evalúa 5 escenarios empresariales decidiendo si necesitan *blockchain* o base de datos convencional y justifica su criterio. |
| **2. Exposición breve / Microlearning I** | 35 min | Explica el funcionamiento intuitivo de *blockchain* (*hash*, inmutabilidad, consenso, redes públicas vs. permisionadas, *on-chain* vs. *off-chain*) y presenta el Árbol de Decisión «¿Necesito Blockchain?». | Sigue el árbol de decisión con ejemplos concretos, verifica cómo funciona un *hash* (demo visual sencilla) y contrasta con sus respuestas iniciales. |
| **3. Análisis de caso práctico** | 45 min | Presenta el caso *Cooperativa Aceitera Sierra Alta* (trazabilidad AOVE ecológico, fraude en destino y pagos de exportación). Facilita el trabajo en equipos de 3-4 personas. | Aplica el árbol de decisión al caso, identifica actores y riesgos del problema del oráculo, y evalúa opciones técnicas (BaaS permisionada vs. desarrollo propio). |
| **4. Exposición breve / Microlearning II** | 30 min | Aborda *smart contracts*, oráculos, tokenización empresarial, *stablecoins* y riesgos de custodia, gobernanza y marco regulatorio (advirtiendo qué normativa verificar según fecha). | Relaciona *smart contracts* y acuerdos legales con las disputas de cobro y certificación del caso práctico. |
| **5. Actividad práctica de aplicación y transferencia** | 60 min | Dirige la Actividad 2 (diseño del flujo de trazabilidad + regla de *smart contract* para *Sierra Alta*, 25 min) y la Actividad 3 (Test de idoneidad y Ficha de Caso Blockchain/Alternativa para su propio sector, 35 min). | Dibuja qué dato registra cada actor, qué va *on-chain/off-chain* y diseña un diagnóstico honesto sobre si su empresa/sector necesita *blockchain* o una solución más sencilla. |
| **6. Discusión guiada y puesta en común** | 25 min | Modera un debate estructurado contrastando dos perfiles: casos donde *blockchain* SÍ aporta confianza diferencial frente a casos donde el alumnado concluyó honestamente que NO conviene usarla. | Expone su dictamen (Sí a *blockchain* con gobernanza / No, mejor alternativa clásica) y rebate o enriquece los diseños de gobernanza de otros grupos. |
| **7. Síntesis, evaluación sumativa y cierre** | 20 min | Consolida las 5 reglas de oro de *blockchain* empresarial, realiza la evaluación sumativa y conecta con el Tema 5 (Big Data y BI: convertir los grandes volúmenes de datos recogidos en decisiones estratégicas). | Completa la evaluación sumativa breve y su reflexión personal de criterio tecnológico. |
| **TOTAL** | **240 min** | | |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «¿Necesito Blockchain o me basta una base de datos?»

- **Objetivo:** Desarrollar criterio crítico temprano para distinguir casos donde un registro distribuido aporta valor real frente a casos donde genera sobrecoste innecesario.
- **Instrucciones para el alumnado:**
  1. Individualmente (8 min), analizad 5 propuestas tecnológicas:
     - (A) Control interno de stock en los 3 almacenes propios de una ferretería.
     - (B) Certificación de autenticidad y trazabilidad de piezas de recambio aeronáutico entre 12 fabricantes, talleres y aseguradoras.
     - (C) Envío de facturas electrónicas entre una consultora y sus clientes locales.
     - (D) Registro compartido de certificados de formación y prevención de riesgos laborales de subcontratas que rotan entre 20 constructoras.
     - (E) Gestión de reservas de citas de una peluquería.
  2. Marcado rápido: «SÍ *blockchain*», «NO (base de datos/SaaS clásico)» o «Depende».
  3. Puesta en común rápida (12 min) identificando qué tienen en común los casos «SÍ».
- **Materiales necesarios:** Hoja de escenarios (o encuesta interactiva) y esquema del Árbol de Decisión (proyectado al cierre de la actividad).
- **Tiempo estimado:** 20 minutos (en fase de Apertura).
- **Rol del formador:** Enfatizar que responder «NO necesita *blockchain*» es una decisión directiva excelente que ahorra decenas de miles de euros a la pyme.
- **Producto o entregable esperado:** Clasificación razonada de los 5 escenarios identificando los 3 requisitos clave (múltiples actores que escriben, baja confianza mutua / sin intermediario único aceptado, necesidad de historial inmutable).
- **Criterios de éxito:** El alumnado descarta correctamente los casos internos (A, C, E) y reconoce la lógica multiactor en los casos complejos (B y D).

### Actividad 2 (Aplicación): «Arquitectura funcional y regla *smart contract* para Sierra Alta»

- **Objetivo:** Diseñar cómo interactúan actores, sensores/identificadores, almacenamiento *on-chain/off-chain* y reglas de *smart contract* en un caso realista de exportación agroalimentaria.
- **Instrucciones para el alumnado:**
  1. En equipos de 3-4 personas, tomad el caso *Cooperativa Aceitera Sierra Alta*.
  2. Construid una tabla con las 5 etapas del lote (Olivar/cosecha → Almazara/prensado → Laboratorio certificador ecológico → Envasado/precinto → Transporte/recepción en importador).
  3. Para cada etapa indicad: *Quién firma el registro*, *Qué dato se guarda off-chain y qué hash va on-chain*, y *Qué medida física reduce el problema del oráculo*.
  4. Redactad en lenguaje estructurado («SI se cumple X y Y → ENTONCES ejecutar Z») una regla de *smart contract* para liberar el pago escalonado con el importador, indicando qué cláusula debe quedar en el contrato legal escrito.
- **Materiales necesarios:** Plantilla de cadena de custodia *on-chain/off-chain* y datos del caso práctico.
- **Tiempo estimado:** 25 minutos.
- **Rol del formador:** Verificar que no pongan documentos pesados ni datos personales *on-chain* y que resuelvan cómo evitar que alguien rellene una botella con aceite falso aunque el QR sea auténtico (precinto inviolable/NFC destructible).
- **Producto o entregable esperado:** Mapa de trazabilidad multiactor + especificación de regla *smart contract* y salvaguarda legal.
- **Criterios de éxito:** Distinción clara *on-chain/off-chain*, mitigación realista del problema del oráculo y condición objetiva medible en el *smart contract*.

### Actividad 3 (Transferencia a la realidad laboral): «Dictamen de idoneidad y diseño de caso de confianza compartida»

- **Objetivo:** Evaluar con rigor un proceso multiactor del sector del participante utilizando el Árbol de Decisión *Blockchain* y proponer la arquitectura más adecuada (sea *blockchain* BaaS o alternativa clásica).
- **Instrucciones para el alumnado:**
  1. Seleccionad un proceso de vuestro sector que involucre al menos a 3 organizaciones distintas (proveedores, clientes, certificadores, bancos, aseguradoras, distribuidores).
  2. Aplicad los 6 filtros de la **Plantilla de Dictamen Blockchain** (sección 8).
  3. Si el resultado es **NO *blockchain***: proponed la alternativa digital óptima (API compartida, portal SaaS, ERP integrado) y justificad el ahorro frente a *blockchain*.
  4. Si el resultado es **SÍ *blockchain***: definid tipo de red (permisionada/pública), enfoque BaaS vs. propio, gobernanza del consorcio, datos *on-chain/off-chain* y KPIs de piloto a 90 días.
- **Materiales necesarios:** Plantilla de Dictamen de Idoneidad Blockchain (sección 8).
- **Tiempo estimado:** 35 minutos + 25 minutos de debate en la fase 6.
- **Rol del formador:** Valorar con idéntico rigor un «NO» bien argumentado y un «SÍ» bien diseñado; desafiar los supuestos de gobernanza («¿por qué querría tu proveedor subir sus datos a tu red?»).
- **Producto o entregable esperado:** Dictamen ejecutivo de 1 página listo para comité de dirección o consorcio sectorial.
- **Criterios de éxito:** Aplicación rigurosa del árbol de decisión, análisis realista de incentivos entre actores y coherencia técnica/económica para una pyme.

---

## 6. Caso práctico: Cooperativa Aceitera Sierra Alta

### Contexto empresarial
**Cooperativa Aceitera Sierra Alta** (Jaén) agrupa a **180 socios agricultores** y cuenta con **32 empleados** en almazara, envasado y comercialización. Produce 1,4 millones de litros anuales de Aceite de Oliva Virgen Extra (AOVE) ecológico *premium*, exportando el **65 % de su producción** a importadores y cadenas gourmet de Alemania, Países Bajos y Japón (facturación anual: 9,2 millones de euros).

### Situación o problema
La cooperativa afronta tres retos críticos:
1. **Fraude y desconfianza en destino:** Un importador japonés detectó botellas falsificadas con etiquetas copiadas de Sierra Alta y exige trazabilidad inmutable verificable por terceros (del olivar certificado ecológico al precinto de botella) para renovar un contrato de 1,1 millones de euros/año.
2. **Conciliación lenta y cobros retrasados:** Las exportaciones a Asia implican múltiples actores (cooperativa, laboratorio de análisis químico/ecológico, transitario, naviera, aduanas e importador). Las discrepancias en certificados en PDF retrasan el cobro entre 35 y 60 días, tensando la tesorería para pagar a los socios agricultores.
3. **Propuestas confusas:** Una consultora le ha ofrecido desarrollar una «blockchain propia desde cero y lanzar una criptomoneda del aceite» por 95.000 €, mientras una plataforma sectorial agroalimentaria *Blockchain-as-a-Service (BaaS)* ofrece trazabilidad permisionada con QR/NFC y registro de certificados por 14.000 €/año + 0,04 €/botella en etiquetas inteligentes para la línea *premium*.

### Datos disponibles

| Dato operativo / económico | Valor |
|---|---|
| Volumen línea *premium* de exportación (objetivo del piloto) | 250.000 botellas/año (PVP exportación medio: 14 €/botella) |
| Coste opción A (Desarrollo *blockchain* propia + criptomoneda) | 95.000 € desarrollo + ~24.000 €/año mantenimiento y auditoría + alto riesgo regulatorio |
| Coste opción B (Plataforma BaaS agroalimentaria permisionada + tapón/precinto NFC inviolable para línea *premium*) | 14.000 €/año plataforma + 10.000 €/año etiquetas NFC (250.000 × 0,04 €) + 4.000 € integración inicial con ERP = **28.000 € Año 1** |
| Valor del contrato en riesgo con el importador japonés | 1.100.000 €/año (margen neto estimado ~14 % = 154.000 €/año) |
| Actores que deben aportar/verificar datos | Agricultores/cooperativa, certificadora ecológica independiente, laboratorio de acidez/calidad, operador logístico (sensores Tª de contenedor) e importador |
| Brecha digital interna | La almazara dispone de ERP de lotes, pero los 180 agricultores entregan aceituna con albaranes en papel en báscula |

### Preguntas de análisis
1. ¿Cumple el caso de Sierra Alta los criterios para utilizar tecnología *blockchain*? Justificadlo paso a paso.
2. ¿Por qué la Opción A («blockchain propia + criptomoneda») es un error estratégico, financiero y regulatorio para esta cooperativa?
3. ¿Cómo resuelve la Opción B el «problema del oráculo» tanto en origen (báscula/laboratorio) como en destino (falsificación de botellas)?
4. ¿Cómo podrían introducirse acuerdos automatizados (*smart contracts*) en una fase 2 para agilizar los cobros con el importador y qué requisitos legales/bancarios harían falta?

### Tarea a realizar
En equipos de 3-4 personas, elaborad el plan de decisión para el Consejo Rector de la Cooperativa que incluya:
1. Elección justificada entre Opción A, Opción B o alternativa sin *blockchain*, con análisis coste-beneficio frente al contrato en riesgo.
2. Diseño del flujo de trazabilidad indicando qué firma cada actor (cooperativa, certificadora, laboratorio, logística), qué va *on-chain* vs. *off-chain* y cómo integrar a los agricultores sin exigirles habilidades digitales complejas.
3. Hoja de ruta en 2 fases: Fase 1 (trazabilidad verificable + precinto antifraude en línea *premium*) y Fase 2 (automatización de hitos documentales y pagos).

### Posibles soluciones o criterios de análisis
- **Encaje de *blockchain*:** Sí se justifica por existir múltiples actores independientes (cooperativa, certificadora, laboratorio, logística, importador extranjero), necesidad de prueba inmutable ante terceros y riesgo real de fraude de marca con impacto económico elevado.
- **Elección técnica y financiera:** Descartar rotundamente la Opción A (desarrollo propio innecesario, costes desproporcionados y emisión de criptomoneda sin caso de negocio que genera graves riesgos normativos). Aprobar la **Opción B (BaaS permisionada + NFC inviolable)**: 28.000 € el Año 1 frente a 154.000 €/año de margen en riesgo (más potencial de sobreprecio y captación de otros clientes *premium* europeos).
- **Mitigación del problema del oráculo y adopción:** Digitalizar la entrada en báscula mediante la cooperativa (el agricultor no necesita usar *blockchain*; su entrega ya pesada y vinculada a parcela registrada en SIGPAC/ERP genera el evento inicial); exigir que el laboratorio y la certificadora ecológica firmen directamente sus propios *hashes* de análisis (evitando que sea solo «autodeclaración» de la cooperativa); usar tapón/precinto NFC con rotura física al abrir la botella para impedir reutilización fraudulenta.
- **Fase 2 (*smart contracts* y cobros):** Empezar primero validando el intercambio digital inmutable de certificados de calidad y temperatura de contenedor (eliminando errores documentales que bloquean el cobro), y solo en fase 2 explorar cartas de crédito digitales o acuerdos programables con entidades financieras/plataformas reguladas.

### Preguntas de reflexión final
- ¿Qué pasaría si la cooperativa registrara todos los datos en *blockchain* pero el laboratorio certificador y el transportista se negaran a firmar en la red?
- ¿En qué medida el cliente final compra «tecnología *blockchain*» o compra simplemente «certeza sencilla y rápida al escanear una botella»?

---

## 7. Evaluación

### Evaluación diagnóstica breve (al inicio)
Sondeo de 3 preguntas:
1. ¿Con qué asocias principalmente la palabra *blockchain*? (Criptomonedas / Trazabilidad / Contratos automáticos / No lo tengo claro).
2. Verdadero/Falso: «Guardar un dato en una *blockchain* garantiza automáticamente que ese dato es verdadero en el mundo real».
3. ¿Crees que una pyme necesita programar su propia red *blockchain* para usar esta tecnología? (Sí / No / Depende).

### Evaluación formativa durante la sesión
- Contrastación de las respuestas de la Actividad 1 frente al Árbol de Decisión.
- Revisión directa por el formador de la separación *on-chain / off-chain* y controles del problema del oráculo en la Actividad 2.
- Análisis crítico en grupo durante la puesta en común de la fase 6.

### Evaluación sumativa al final
1. Entrega del **Dictamen de idoneidad y diseño de caso de confianza compartida** (Actividad 3).
2. Cuestionario de 5 ítems prácticos (árbol de decisión, *hash* y privacidad RGPD, problema del oráculo, límites de los *smart contracts* y diferencia entre criptoactivos/tokenización).

### Rúbrica de evaluación (para el Dictamen de idoneidad Blockchain)

| Criterio | Insuficiente (1) | En desarrollo (2) | Adecuado (3) | Destacado (4) |
|---|---|---|---|---|
| **Criterio de idoneidad (Árbol de Decisión)** | Propone *blockchain* sin justificar por qué no sirve una base de datos clásica (o la descarta sin análisis). | Aplica parcialmente el árbol de decisión, confundiendo problemas internos con multiactor. | Aplica con rigor los criterios multiactor, confianza e inmutabilidad llegando a un SÍ o NO bien fundamentado. | Contrasta explícitamente *blockchain* frente a alternativas tradicionales (API/SaaS/ERP) en coste, velocidad y gobernanza. |
| **Diseño técnico-funcional (si SÍ) o Alternativa (si NO)** | Diseño inviable para una pyme (p. ej. crear red propia o guardar datos personales en claro *on-chain*). | Propone un enfoque general pero omite separación *on-chain/off-chain* o detalles operativos. | Define arquitectura pragmática (BaaS permisionada o alternativa clásica), separación *on-chain/off-chain* y mitigación del oráculo. | Integra vínculo físico-digital (IoT/NFC/firma de terceros), privacidad por diseño y escalabilidad sin *vendor lock-in*. |
| **Gobernanza e incentivos entre actores** | Ignora cómo participarán socios, proveedores o clientes en la solución. | Nombra a los actores implicados pero asume que colaborarán sin explicar sus incentivos. | Identifica roles, permisos de lectura/escritura e incentivos claros para que cada actor participe. | Propone un modelo realista de gobernanza, reparto de costes y gestión de excepciones con soporte legal adecuado. |
| **Evaluación de riesgos y viabilidad económica** | Omite costes, riesgos normativos o métricas de éxito. | Menciona costes aproximados sin vinculación al retorno o sin contemplar riesgos regulatorios/técnicos. | Estima coste de piloto acotado, identifica riesgos clave (oráculo, legalidad, adopción) y define métricas de éxito. | Presenta caso de negocio sólido con horizonte de retorno, plan por fases y salvaguardas legales/regulatorias verificables. |

### Actividad de autoevaluación o reflexión
«Prueba del detector de humo» (5 min): el alumnado responde por escrito a la pregunta: *«Si mañana un proveedor me propone un proyecto con blockchain o tokens para mi empresa, ¿cuáles son las 4 preguntas incómodas que le haré antes de pedir presupuesto?»*.

---

## 8. Materiales y recursos

### Guion de diapositivas (estructura slide por slide)

1. **Portada:** Bloque 7 · Tema 4. Blockchain: más allá de las criptomonedas.
2. **Activación:** 5 escenarios — ¿*Blockchain* o simple base de datos?
3. **Cómo funciona sin fórmulas:** Bloques, *hash* (huella digital), consenso e inmutabilidad en 3 minutos.
4. **Redes públicas vs. permisionadas:** Por qué las empresas B2B suelen elegir consorcios y BaaS.
5. **El Árbol de Decisión directivo:** Las 5 preguntas que evitan tirar el dinero en proyectos *blockchain*.
6. **Privacidad y RGPD en *blockchain*:** La regla de oro *off-chain* (documento) vs. *on-chain* (*hash*).
7. **Trazabilidad y el problema del oráculo:** Cómo unir IoT, NFC/QR y firmas de terceros para conectar mundo físico y digital.
8. **Caso práctico:** *Cooperativa Aceitera Sierra Alta* — fraude en exportación, 2 opciones y decisión del Consejo Rector.
9. **Contratos inteligentes (*smart contracts*):** Qué automatizan bien, qué papel juegan los oráculos y por qué requieren contrato legal.
10. **Criptoactivos y tokenización en empresa:** Diferencias entre criptomonedas, *stablecoins*, *utility tokens* y activos tokenizados (RWA).
11. **Riesgos y cumplimiento regulatorio:** Volatilidad, custodia, fiscalidad y marco europeo MiCA *(con nota de verificación obligatoria)*.
12. **Taller práctico:** Cadena de custodia *Sierra Alta* y Dictamen de Idoneidad para vuestro sector.
13. **Debate:** Mejores «SÍ» y mejores «NO» del grupo.
14. **Síntesis y puente al Tema 5:** Ya digitalizamos procesos, aplicamos IA, captamos sensores IoT y aseguramos registros confiables: ahora toca explotar grandes volúmenes de datos con Big Data y BI.

### Ficha de trabajo
Hoja práctica con:
- Los 5 escenarios de la Actividad 1 + esquema visual del Árbol de Decisión (¿Varios actores escriben datos? → ¿Desconfían entre sí o carecen de intermediario común fiable? → ¿Necesitan historial inmutable auditable por terceros? → ¿Aporta retorno superior al coste de gobernanza?).
- Tabla de diseño de cadena de custodia y especificación de *smart contract* (Actividad 2).

### Plantilla práctica replicable: Dictamen de Idoneidad Blockchain (1 página)

| Filtro / Bloque | Pregunta clave | Evaluación (Sí/No + Justificación) |
|---|---|---|
| **1. Ecosistema multiactor** | ¿Intervienen ≥ 3 organizaciones independientes que deben escribir/validar eventos? | |
| **2. Brecha de confianza** | ¿Existen disputas, riesgo de fraude o falta de un intermediario único aceptado y económico? | |
| **3. Necesidad de inmutabilidad** | ¿Se requiere una prueba histórica inalterable auditable por clientes, reguladores o bancos? | |
| **4. Veredicto del dictamen** | **Aprobar piloto Blockchain (BaaS)** vs. **Descartar (usar ERP/API/SaaS estándar)** | |
| **5. Arquitectura y datos** | Si SÍ: red permisionada/pública, qué va *on-chain* (*hash*) y qué *off-chain*, cómo se mitiga el oráculo. Si NO: alternativa concreta. | |
| **6. Gobernanza, legalidad y ROI** | Incentivo de cada actor, coste año 1 estimado, salvaguarda legal/RGPD y KPI de piloto a 90 días. | |

### Lecturas o recursos recomendados
- Tapscott, D., & Tapscott, A. *Blockchain Revolution* (introducción conceptual de negocio).
- Iansiti, M., & Lakhani, K. R. *The Truth About Blockchain* (artículo clásico de Harvard Business Review sobre adopción por fases).
- Documentación divulgativa sobre redes permisionadas europeas (p. ej., iniciativas públicas europeas de infraestructura blockchain como EBSI —verificar estado actual—).

### Vídeos, artículos y fuentes adicionales *(Validación previa obligatoria)*
> **Nota importante para el formador:** Validar la vigencia regulatoria y técnica de todas las fuentes antes de impartir el tema.
- Verificar el estado vigente de aplicación del **Reglamento Europeo MiCA (Reglamento UE 2023/1114)** y los criterios actualizados de la **CNMV**, el **Banco de España** y la **Agencia Tributaria (AEAT)** sobre custodia, pagos y fiscalidad de criptoactivos para empresas en España.
- Verificar los plazos actualizados del **Pasaporte Digital de Producto (DPP)** de la Unión Europea por sectores (baterías, textil, electrónica, etc.).
- Comprobar antes de clase una herramienta interactiva gratuita de demostración visual de *hash* y bloques (tipo *Blockchain Demo* educativa) para mostrar en 2 minutos cómo alterar un carácter rompe la cadena.

### Glosario de términos clave

| Término | Definición operativa |
|---|---|
| ***BaaS (Blockchain-as-a-Service)*** | Servicio en la nube que permite a una empresa usar redes *blockchain* sin construir ni mantener infraestructura propia. |
| **Consenso** | Mecanismo mediante el cual los nodos de la red acuerdan qué transacciones son válidas antes de incorporarlas a la cadena. |
| ***Hash*** | Huella criptográfica única de un archivo o transacción que detecta instantáneamente cualquier alteración posterior. |
| ***On-chain / Off-chain*** | Distinción entre la información registrada dentro de la *blockchain* (normalmente *hashes* y metadatos mínimos) y los archivos almacenados fuera. |
| **Oráculo** | Puente técnico (sensor, API, tercero verificador) que introduce datos del mundo real en un contrato inteligente. |
| **Red permisionada** | *Blockchain* restringida a participantes autorizados e identificados, habitual en consorcios empresariales. |
| ***Smart contract*** | Programa autoejecutable desplegado en *blockchain* que dispara acciones automáticas al cumplirse condiciones objetivas. |
| ***Stablecoin*** | Criptoactivo vinculado a un activo estable (como el euro o el dólar) para minimizar la volatilidad de precio. |
| **Tokenización** | Conversión digital de un activo físico, derecho o certificado en una unidad verificable y transferible sobre *blockchain*. |

---

## 9. Adaptaciones para modalidad híbrida

### Sesión presencial
- Realizar en directo una demostración táctil de 3 minutos en pantalla con un generador visual de *hash* cambiando una sola letra de una factura ficticia para que el grupo comprenda la inmutabilidad sin matemática compleja.
- En la fase 6, dividir la pizarra en dos columnas («SÍ Blockchain justificado» vs. «NO, mejor alternativa clásica») para que el alumnado pegue sus dictámenes y observe la proporción realista en el mundo pyme.

### Sesión online síncrona
- Usar una herramienta de votación rápida para los 5 escenarios de la Actividad 1 y proyectar en pantalla el Árbol de Decisión interactivo.
- En la Actividad 2, cada *breakout room* completa su fila de la cadena de custodia de *Sierra Alta* en una hoja compartida y después se comparan en plenario las medidas antifraude propuestas.

### Sesión asíncrona (trabajo previo y posterior en plataforma LMS)
- **Pre-trabajo (20 min):** Lectura breve de una guía de 2 páginas sobre «*Hash*, bloques y redes permisionadas» + encuesta diagnóstica inicial en el LMS.
- **Post-trabajo (30 min):** Subida al LMS del Dictamen de Idoneidad Blockchain aplicado a su sector + respuesta razonada en el foro a un caso de *smart contract* planteado por el formador.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Integra la visión de redes de valor del **Bloque 6** y se conecta directamente con el **Tema 3 (IoT)** al mostrar cómo los datos captados por sensores (temperaturas, entregas, geolocalización) pueden certificarse entre organizaciones mediante registros distribuidos y oráculos.
- **Competencias que desarrolla:** Pensamiento crítico frente a modas tecnológicas (*hype*), análisis arquitectónico de confianza interempresarial, diseño de modelos de gobernanza en ecosistemas y evaluación de riesgos regulatorios y de custodia.
- **Conexión dentro del plan de 10 bloques:**
  - *Tema anterior (Bloque 7, Tema 3 — Internet de las cosas, IoT):* El IoT captura datos objetivos del mundo físico; *blockchain* permite que esos datos sean verificables e inmutables cuando circulan entre múltiples empresas.
  - *Tema posterior (Bloque 7, Tema 5 — Big data y business intelligence, BI):* Una vez digitalizados procesos (T1), sensores (T3) y registros compartidos (T4), la empresa acumula grandes volúmenes de datos heterogéneos que deben estructurarse, analizarse y visualizarse en cuadros de mando (BI) para decidir con rigor.
- **Evidencia de aprendizaje que dejará el alumnado:** Un **Dictamen ejecutivo de idoneidad Blockchain** (con aplicación del árbol de decisión, diseño *on-chain/off-chain* o alternativa tecnológica óptima y análisis de gobernanza).

---

## Siguientes pasos para el formador

1. **Verificar marco regulatorio vigente:** Comprobar antes de impartir las novedades de MiCA, AEAT/CNMV sobre criptoactivos empresariales y calendario del Pasaporte Digital de Producto europeo.
2. **Preparar demo visual de *hash*:** Dejar abierta y probada (con capturas de respaldo sin conexión) una herramienta visual simple de generación de *hash* SHA-256 para explicar inmutabilidad en menos de 3 minutos.
3. **Evitar polarización ideológica:** Mantener un tono estrictamente pragmático de dirección empresarial: ni entusiasmo acrítico («todo va en *blockchain*») ni rechazo ciego («no sirve para nada»).
4. **Conectar con el Tema 5:** Cerrar subrayando que digitalización, IA, IoT y *blockchain* generan ríos de datos, pero los datos no crean valor hasta que se transforman en indicadores claros para dirigir el negocio (Big Data y BI).
