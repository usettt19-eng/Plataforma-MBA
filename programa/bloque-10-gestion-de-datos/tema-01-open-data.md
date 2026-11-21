# Tema 1. Open data

## 1. Ficha del tema

| Campo | Detalle |
| --- | --- |
| **Título del tema** | Open data: datos públicos, licencias abiertas y oportunidades de análisis |
| **Bloque y posición dentro del programa** | Bloque 10: Gestión de datos — Tema 1 de 5 (Programa de Dirección, Innovación y Negocios Digitales) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Mandos intermedios y emprendedores |
| **Nivel de dificultad** | Intermedio |
| **Prerrequisitos** | Manejo básico de hojas de cálculo (filtros, tablas dinámicas) y comprensión general de modelos de negocio digitales e iniciativas de automatización e IA vistas en el Bloque 9. |
| **Resultado general de aprendizaje** | Identificar, evaluar legal y técnicamente e integrar fuentes de datos abiertos (*open data*) para enriquecer decisiones comerciales, operativas o de diseño de producto en una pyme o negocio digital. |

---

## 2. Objetivos de aprendizaje

Al finalizar este tema, el alumnado será capaz de:

1. **Diferenciar** (Comprender) las características técnicas y jurídicas que distinguen un conjunto de datos verdaderamente abierto (*open data*) de datos públicos de acceso restringido, datos propietarios y datos personales.
2. **Clasificar** (Analizar) conjuntos de datos de portales oficiales según el modelo de 5 estrellas de Tim Berners-Lee y su compatibilidad de licencia para uso comercial en una pyme.
3. **Localizar y extraer** (Aplicar) conjuntos de datos relevantes en portales de datos abiertos españoles y europeos (como datos.gob.es, INE o data.europa.eu) utilizando filtros, formatos reutilizables y endpoints básicos.
4. **Evaluar** (Evaluar) la viabilidad operativa, la frescura, la calidad mínima y los riesgos legales (atribución, *copyleft* o reidentificación) de incorporar un *dataset* abierto a un proceso empresarial o producto digital.
5. **Diseñar** (Crear) una propuesta de caso de uso de enriquecimiento de datos internos con datos abiertos orientada a resolver una decisión concreta de expansión, fijación de precios, demanda o eficiencia operativa.

---

## 3. Contenidos esenciales

### 3.1. Qué es el Open Data y por qué genera valor en pymes

**Explicación breve y clara**
El *open data* o datos abiertos son datos que cualquier persona u organización puede acceder, utilizar, modificar y compartir libremente para cualquier propósito —incluido el comercial—, sujetos como máximo a medidas que preserven su autoría y su carácter abierto. Para una pyme o un emprendedor con presupuestos limitados, los datos abiertos actúan como una fuente de inteligencia de mercado de coste cercano a cero que permite contrastar hipótesis, dimensionar mercados locales y anticipar tendencias sin depender en exclusiva de informes privados costosos.

**Conceptos clave**
- Datos abiertos (*open data*) frente a datos públicos no reutilizables.
- Reutilización de la información del sector público (RISP).
- Enriquecimiento de datos (*data enrichment*).
- Datos de alto valor (*High-Value Datasets*, HVD).

**Definiciones necesarias**
- **Open Data (Datos abiertos):** Información estructurada publicada bajo licencias abiertas y en formatos legibles por máquina, accesible sin barreras económicas ni discriminatorias.
- **Formato legible por máquina:** Estructura de archivo (como CSV, JSON, XML o Parquet) que un software puede procesar automáticamente sin intervención humana manual, a diferencia de un PDF escaneado o una imagen.
- **Datos de alto valor (HVD):** Categorías prioritarias de datos públicos (geoespaciales, observación de la Tierra, meteorología, estadística, sociedades y movilidad) con gran potencial socioeconómico (*nota: verificar el listado actualizado de categorías y su transposición vigente en la normativa europea y española antes de impartir*).

**Ejemplo práctico realista**
Una pyme madrileña dedicada a instalar puntos de recarga para vehículos eléctricos cruza su histórico interno de instalaciones con datos abiertos del parque móvil por código postal, licencias municipales de obra y mapas catastrales de garajes comunitarios. Con ese cruce prioriza tres distritos con alta densidad de vehículos híbridos y baja cobertura actual, reduciendo su coste de captación comercial.

**Errores frecuentes**
- Confundir "visible en internet" con "dato abierto reutilizable" (hacer *scraping* sin permiso de portales privados no es *open data*).
- Descargar informes en PDF y asumir que sirven para análisis automatizado.
- Suponer que los datos abiertos sustituyen por completo a los datos internos del negocio, cuando su mayor valor nace al cruzarlos con datos propios.

**Preguntas que el alumnado debería poder responder**
- ¿Qué diferencia existe entre que un dato sea público en una web y que sea reutilizable como *open data*?
- ¿En qué tres decisiones concretas de vuestra empresa podrían aportar valor inmediato los datos abiertos?

---

### 3.2. Estándares técnicos, formatos y el modelo de 5 estrellas

**Explicación breve y clara**
No todos los datos abiertos son igual de útiles en el día a día empresarial. Publicar una tabla en un PDF obliga a copiar datos manualmente y multiplica los errores; publicar un CSV o una API REST permite actualizar cuadros de mando automáticamente. El modelo de 5 estrellas propuesto por Tim Berners-Lee ayuda a diagnosticar rápidamente el nivel de madurez técnica y el esfuerzo de integración de cualquier fuente abierta.

| Nivel | Descripción | Formato habitual | Esfuerzo de integración para una pyme |
| --- | --- | --- | --- |
| ★ | Disponible en la web con licencia abierta | PDF, JPG | Muy alto (requiere extracción manual u OCR) |
| ★★ | Estructurado y legible por máquina en formato propietario | XLS, XLSX | Medio-bajo (requiere software específico o conversión) |
| ★★★ | Estructurado en formato abierto no propietario | CSV, JSON, XML | Bajo (directo a BI, Excel, Python o no-code) |
| ★★★★ | Uso de identificadores únicos (URI) estándar | RDF | Medio (requiere perfil técnico) |
| ★★★★★ | Datos enlazados con otros conjuntos (*Linked Open Data*) | RDF + enlaces | Medio-alto, pero máxima interoperabilidad |

**Conceptos clave**
- Modelo de 5 estrellas de datos abiertos.
- Interoperabilidad sintáctica y semántica.
- APIs abiertas (REST, GeoJSON, WFS/WMS).
- Frecuencia de actualización y series históricas.

**Definiciones necesarias**
- **CSV (Comma-Separated Values):** Archivo de texto plano que almacena datos tabulares separados por delimitadores (coma o punto y coma), universalmente compatible.
- **API (Application Programming Interface):** Interfaz que permite a una aplicación solicitar datos actualizados a un servidor de forma automática y programada.
- **Codificación de caracteres (UTF-8):** Estándar que garantiza que tildes, eñes y símbolos se lean correctamente al importar datos en español.

**Ejemplo práctico realista**
Una cadena regional de cafeterías en Bilbao quiere ajustar turnos y compras de bollería según la previsión meteorológica y los eventos culturales. En lugar de consultar páginas web manualmente cada lunes, conecta la API abierta de AEMET (formato JSON, 3 estrellas) y el calendario abierto del ayuntamiento (CSV/ICS) con su hoja de planificación en Google Sheets.

**Errores frecuentes**
- Ignorar la frecuencia de actualización del *dataset* y diseñar un cuadro de mando diario sobre datos que solo se publican una vez al año.
- No revisar la codificación (UTF-8 frente a ISO-8859-1) ni el separador decimal (punto frente a coma), corrompiendo importes y nombres de municipios.
- Confiar en una API pública sin contemplar límites de peticiones (*rate limits*) ni cambios de estructura.

**Preguntas que el alumnado debería poder responder**
- ¿Por qué el nivel 3 estrellas (CSV/JSON) suele ser el umbral práctico mínimo recomendable para proyectos ágiles en pymes?
- ¿Qué verificaciones técnicas mínimas hay que realizar antes de conectar un *dataset* abierto a un proceso operativo?

---

### 3.3. Licencias abiertas, atribución y límites legales de reutilización

**Explicación breve y clara**
Que un conjunto de datos sea gratuito no implica que carezca de reglas de uso. Las licencias abiertas determinan si podéis utilizar los datos con fines comerciales, si debéis citar al organismo emisor y si las obras derivadas deben compartirse bajo la misma licencia. Además, los datos abiertos nunca deben contener datos personales identificables sin base legal, y el cruce de varios *datasets* abiertos puede generar riesgos de reidentificación indirecta.

**Conceptos clave**
- Licencias Creative Commons (CC0, CC BY, CC BY-SA, CC BY-NC).
- Licencias específicas de bases de datos (ODbL, ODC-By).
- Condiciones de reutilización del sector público español (*nota: verificar vigencia de la Ley 37/2007 sobre reutilización de la información del sector público y sus modificaciones derivadas de la Directiva (UE) 2019/1024 antes de impartir*).
- Riesgo de reidentificación y exención de responsabilidad del organismo editor.

**Definiciones necesarias**
- **CC0 (Dominio Público):** Renuncia a derechos de autor en la medida permitida por la ley; reutilización libre sin obligación legal de cita (aunque citar siga siendo buena práctica).
- **CC BY (Reconocimiento):** Permite uso comercial y modificación, exigiendo mencionar claramente la fuente y la fecha de última actualización.
- **Cláusula NC (No Comercial):** Restringe el uso con fines comerciales; bloquea su incorporación directa a productos de pago o servicios empresariales.
- **Cláusula SA (*ShareAlike* / Compartir Igual):** Obliga a distribuir las obras o bases de datos derivadas bajo la misma licencia abierta, lo cual puede comprometer la propiedad intelectual de un producto SaaS.

**Ejemplo práctico realista**
Una *startup* de turismo rural quiere crear una app de pago con rutas senderistas y alojamientos. Encuentra un mapa colaborativo bajo licencia ODbL (que exige compartir las mejoras en la base de datos geográfica) y capas oficiales del Instituto Geográfico Nacional bajo CC BY 4.0. Decide separar técnicamente su base de datos propietaria de valoraciones de clientes de la capa cartográfica abierta, cumpliendo la atribución sin obligarse a abrir su activo comercial.

**Errores frecuentes**
- Utilizar datos con licencia CC BY-NC en un producto de suscripción o en informes vendidos a clientes.
- Omitir la mención obligatoria de la fuente y la fecha de extracción en cuadros de mando o informes públicos.
- Asumir que el organismo público garantiza la exactitud del dato y responde por decisiones empresariales erróneas basadas en él.

**Preguntas que el alumnado debería poder responder**
- ¿Qué diferencia práctica existe para una empresa entre una licencia CC BY, una CC BY-NC y una CC BY-SA?
- ¿Cómo debe documentar una pyme el cumplimiento de licencia al incorporar un *dataset* abierto?

---

### 3.4. Ecosistema de fuentes abiertas y casos de uso empresariales

**Explicación breve y clara**
El ecosistema de datos abiertos en España y Europa es amplio y cubre desde demografía y actividad económica hasta movilidad, medio ambiente, contratación pública y cartografía. La clave para un mando intermedio o emprendedor no es acumular portales, sino mapear qué fuentes responden a preguntas estratégicas concretas: dónde abrir, qué licitaciones vigilar, cómo evolucionan los precios o qué estacionalidad tiene la demanda.

| Ámbito de decisión | Fuentes abiertas de referencia (España / UE) | Ejemplo de aplicación en pyme |
| --- | --- | --- |
| **Expansión y geomarketing** | INE (censo, renta por sección censal), Catastro, CNIG/IGN | Seleccionar ubicación de nueva tienda o franquicia |
| **Desarrollo comercial B2B** | Plataforma de Contratación del Sector Público (PLACSP), BORME (*verificar condiciones de reutilización*) | Monitorizar licitaciones y alertas de adjudicaciones |
| **Operaciones y demanda** | AEMET, DGT, portales municipales (Madrid, Barcelona, Valencia, Bilbao, etc.) | Ajustar rutas logísticas, stock y turnos de personal |
| **Contexto macro y sectorial** | datos.gob.es, Eurostat, data.europa.eu, Banco de España | Benchmarking de precios, inflación sectorial y exportación |

**Conceptos clave**
- Portales federados y catálogos nacionales/europeos.
- Datos geoespaciales, censales y de contratación pública.
- Inteligencia competitiva y *radar* de licitaciones.
- Enriquecimiento interno + externo (*data mashup*).

**Definiciones necesarias**
- **Portal federado de datos:** Catálogo central (como datos.gob.es o data.europa.eu) que agrega metadatos de múltiples administraciones locales, autonómicas y estatales.
- **Sección censal:** División territorial inframunicipal utilizada en estadísticas oficiales para analizar renta, edad y población con gran detalle geográfico.
- **Data Mashup:** Combinación de dos o más conjuntos de datos de distinta procedencia mediante una clave común (código postal, CNAE, fecha o municipio) para generar nuevo conocimiento.

**Ejemplo práctico realista**
Una empresa de reformas energéticas en Zaragoza combina los datos abiertos de certificados de eficiencia energética autonómicos (etiquetas E, F y G por barrio), la antigüedad de edificios del Catastro y las convocatorias abiertas de subvenciones. Así diseña campañas geolocalizadas hacia comunidades de vecinos con mayor necesidad real de rehabilitación.

**Errores frecuentes**
- Buscar datos "a ver qué encuentro" en lugar de partir de una pregunta de negocio concreta.
- Intentar cruzar tablas sin comprobar que comparten una clave estandarizada (por ejemplo, códigos INE de municipio frente a nombres escritos con distintas grafías).
- Desestimar los portales autonómicos y municipales, que suelen tener mayor granularidad que los estatales.

**Preguntas que el alumnado debería poder responder**
- ¿Qué claves de cruce (territoriales, temporales o sectoriales) permiten unir datos abiertos con los datos internos de una pyme?
- ¿Qué fuentes abiertas consultaríais primero para validar la demanda de un nuevo servicio local?

---

## 4. Metodología didáctica

Secuencia completa para una sesión de **4 horas (240 minutos exactos)** en modalidad híbrida, combinando microlearning activo, exploración real de portales y resolución de caso.

| Fase | Tiempo | Qué hace el formador | Qué hace el alumnado |
| --- | --- | --- | --- |
| **1. Apertura y activación** | 25 min | Lanza encuesta diagnóstica inicial y dinamiza la Actividad 1 (*Radar de decisiones a ciegas*). Conecta el bloque con los casos de IA y automatización del Bloque 9. | Identifica 2 decisiones recientes tomadas "por intuición" en su empresa y contrasta qué dato público podría haber reducido la incertidumbre. |
| **2. Exposición breve / microlearning (Parte I)** | 30 min | Explica fundamentos de *open data*, valor en pymes, modelo de 5 estrellas y estándares de formato con ejemplos en pantalla en vivo. | Toma notas estructuradas, plantea dudas sobre formatos habituales en su sector y clasifica 3 ejemplos rápidos por estrellas. |
| **3. Actividad práctica de exploración** | 35 min | Guía la Actividad 2 (*Auditoría exprés de un dataset real*) en portales oficiales; resuelve bloqueos técnicos en salas o mesas. | Accede a datos.gob.es, INE o un portal municipal, localiza un *dataset* relevante, revisa formato, frecuencia y licencia, y rellena la ficha de auditoría. |
| **4. Exposición breve / microlearning (Parte II)** | 25 min | Presenta marco práctico de licencias (CC0, CC BY, SA, NC, ODbL), riesgos de reidentificación y claves de cruce con datos internos. | Contrasta las licencias encontradas en la actividad anterior con el semáforo de uso comercial y corrige su evaluación inicial. |
| **Descanso estructurado** | 15 min | Pausa activa (disponible para dudas informales; prepara salas para el caso práctico). | Descansa y comparte impresiones informales sobre fuentes útiles en su sector. |
| **5. Análisis de caso práctico** | 50 min | Presenta el caso **VeloUrbana Movilidad S.L.**, asigna roles de análisis por equipos y circula haciendo preguntas socráticas sobre viabilidad técnica y legal. | En equipos de 3-4 personas, analiza los datos disponibles del caso, descarta fuentes problemáticas y diseña la matriz de cruce y expansión. |
| **6. Discusión guiada y puesta en común** | 25 min | Modera presentaciones breves (3 min por equipo), destaca criterios de rigor (licencia, granularidad, clave de cruce) y confronta enfoques alternativos. | Expone su recomendación para VeloUrbana, cuestiona supuestos de otros equipos y defiende la selección de fuentes. |
| **7. Actividad de transferencia laboral** | 25 min | Facilita la Actividad 3 (*Lienzo de enriquecimiento Open Data*) aplicada a la propia empresa o proyecto de cada participante. | Diseña individualmente un caso de uso viable para su negocio indicando pregunta de decisión, fuente abierta, clave de cruce y plan piloto de 15 días. |
| **8. Síntesis, evaluación y cierre** | 10 min | Recapitula los 5 aprendizajes clave, explica el cuestionario sumativo/autoevaluación y enlaza con el Tema 2 (Gestión del dato). | Completa el ticket de salida y registra una acción inmediata a ejecutar la próxima semana. |
| **TOTAL** | **240 min** | — | — |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Radar de decisiones a ciegas

- **Nombre:** Radar de decisiones a ciegas.
- **Objetivo:** Reconocer decisiones empresariales cotidianas que actualmente se toman sin datos externos y formular preguntas de negocio traducibles a fuentes abiertas.
- **Instrucciones para el alumnado:**
  1. De forma individual (5 minutos), escribe en un *post-it* físico o pizarra digital dos decisiones tomadas en los últimos 6 meses en tu empresa o proyecto que requirieron "olfato" por falta de datos del entorno (ej.: precio, zona de apertura, previsión de picos, búsqueda de clientes B2B).
  2. En parejas (8 minutos), reformulad una de esas decisiones como una pregunta medible (ej.: "¿Qué barrios tienen mayor densidad de viviendas anteriores a 1980 y renta media superior a X?").
  3. Compartid en plenario (7 minutos) las 4 preguntas más representativas.
- **Materiales necesarios:** Pizarra colaborativa (Miro/Mural/Padlet) o *post-its* y rotuladores.
- **Tiempo estimado:** 20 minutos (dentro de los 25 min de apertura).
- **Rol del formador:** Evitar preguntas demasiado genéricas ("saber cómo va el mercado") y ayudar a concretar variables medibles y geográficas/temporales.
- **Producto o entregable esperado:** Una pregunta de negocio específica y accionable por pareja publicada en el mural común.
- **Criterios de éxito:** La pregunta identifica claramente la decisión a tomar, la variable externa necesaria y el ámbito geográfico o sectorial.

### Actividad 2 (Aplicación): Auditoría exprés de un dataset real

- **Nombre:** Auditoría exprés de un *dataset* abierto.
- **Objetivo:** Evaluar la calidad técnica, la actualización y la compatibilidad comercial de un conjunto de datos reales descargado de un portal oficial.
- **Instrucciones para el alumnado:**
  1. Accede a `datos.gob.es`, al portal del INE o al portal de datos abiertos de tu municipio/comunidad autónoma.
  2. Busca un *dataset* relacionado con tu sector o con la pregunta formulada en la Actividad 1.
  3. Descarga el archivo o inspecciona su ficha de metadatos y completa la **Ficha de auditoría rápida** (apartado 8.2): organismo emisor, fecha de última actualización, frecuencia, nivel de estrellas (1 a 5), licencia exacta, uso comercial permitido (sí/no/condicionado) y clave de cruce potencial.
  4. Abre el archivo en una hoja de cálculo y detecta al menos un posible problema práctico (ej.: codificación de caracteres, fechas mal formateadas, valores vacíos o granularidad insuficiente).
- **Materiales necesarios:** Ordenador con conexión a internet, navegador web, Excel/Google Sheets/LibreOffice Calc y Ficha de auditoría.
- **Tiempo estimado:** 35 minutos.
- **Rol del formador:** Acompañar la búsqueda en portales, ayudar a localizar la sección de licencia y señalar diferencias entre metadatos declarados y archivo real.
- **Producto o entregable esperado:** Ficha de auditoría cumplimentada con dictamen final ("Apto", "Apto con transformación" o "Descartado").
- **Criterios de éxito:** El dictamen coincide coherentemente con la licencia real, el formato del archivo descargado y la detección de al menos una incidencia técnica real.

### Actividad 3 (Transferencia a la realidad laboral): Lienzo de enriquecimiento Open Data

- **Nombre:** Lienzo de enriquecimiento Open Data para mi pyme.
- **Objetivo:** Diseñar un piloto realista de 15 días que combine un conjunto de datos interno de la organización del alumno con al menos una fuente de datos abiertos.
- **Instrucciones para el alumnado:**
  1. Selecciona un proceso real de tu departamento o emprendimiento (captación comercial, fijación de precios, logística, producto o gestión de demanda).
  2. Cumplimenta la **Plantilla de Lienzo Open Data** (apartado 8.3) indicando: decisión de negocio, datos internos existentes, 1-2 fuentes abiertas concretas, clave común de cruce, requisitos legales de atribución, responsable del piloto y métrica de impacto esperada.
  3. Define los 3 pasos concretos que ejecutarás en las próximas dos semanas sin requerir gran inversión tecnológica.
- **Materiales necesarios:** Plantilla de Lienzo Open Data (digital o impresa).
- **Tiempo estimado:** 25 minutos en sesión (más refinamiento opcional asíncrono de 20 minutos para entrega en el campus).
- **Rol del formador:** Revisar que el alcance sea realista para una pyme (evitar "proyectos faraónicos") y asegurar que el cruce entre dato interno y externo es técnicamente factible.
- **Producto o entregable esperado:** Lienzo individual cumplimentado con plan piloto de 15 días.
- **Criterios de éxito:** Incluye fuente verificable, clave de cruce concreta, verificación de licencia y un indicador medible para saber si el piloto aportó valor.

---

## 6. Caso práctico

### Contexto empresarial
**VeloUrbana Movilidad S.L.** es una pyme valenciana de 22 empleados que combina dos líneas de negocio: alquiler de flotas de bicicletas eléctricas de carga (*cargobikes*) para comercios locales y servicio de reparto urbano sostenible de última milla. Tras consolidar su operación en Valencia con 85 vehículos activos, la dirección quiere abrir en los próximos 9 meses una nueva base operativa en otra ciudad española (preselección: **Sevilla, Zaragoza o Málaga**), pero dispone de un presupuesto muy ajustado para consultoría de mercado (máximo 3.000 €).

### Situación o problema
El director comercial defiende elegir Málaga por el tirón turístico; la responsable de operaciones prefiere Zaragoza por su orografía plana y menor congestión; y el socio financiero duda de la rentabilidad en cualquiera de las tres sin datos objetivos de densidad comercial, carriles bici, climatología y restricciones de tráfico (Zonas de Bajas Emisiones). El equipo directivo decide basar la decisión en un análisis comparativo que combine su histórico interno de rentabilidad por barrio en Valencia con **datos abiertos**.

### Datos disponibles

**A. Datos internos de VeloUrbana (Valencia)**
- Rentabilidad media por pedido según distancia (< 3 km es rentable; > 5 km entra en pérdidas).
- Tasa de adopción más alta en códigos postales con > 180 comercios minoristas por km², pendiente media < 3 % y acceso a carril bici a menos de 300 m.
- Caída del 28 % en demanda en días con lluvia intensa (> 15 l/m²) o temperaturas superiores a 38 °C.

**B. Inventario preliminar de fuentes externas encontradas por el equipo junior**

| ID | Fuente localizada | Contenido | Formato | Actualización | Licencia / Condición |
| --- | --- | --- | --- | --- | --- |
| F1 | Portal Open Data Municipal (las 3 ciudades) | Red de carriles bici y estaciones de aparcamiento | GeoJSON / CSV | Trimestral | CC BY 4.0 |
| F2 | AEMET OpenData | Series climáticas históricas diarias (lluvia, temperatura) | API JSON | Diaria | Uso libre con cita obligatoria de fuente (verificar condiciones vigentes AEMET) |
| F3 | Web privada de un directorio comercial | Listado de 40.000 comercios con teléfono y correo | HTML (sin API) | Desconocida | Copyright propietario — "Prohibida la extracción automatizada" |
| F4 | INE + Catastro / Portales autonómicos | Población por sección censal y usos de locales comerciales | CSV / XML | Anual | Reutilización permitida con atribución |
| F5 | Informe PDF de una asociación ciclista | Mapa visual de tráfico en bicicleta y estimaciones | PDF escaneado | 2021 | CC BY-NC 4.0 |
| F6 | Portal de Zonas de Bajas Emisiones (ZBE) municipales | Delimitación de áreas restringidas a vehículos contaminantes | Shapefile / GeoJSON | Según ordenanza | CC BY 4.0 |

### Preguntas de análisis
1. ¿Qué fuentes del inventario preliminar deben **descartarse inmediatamente** y por qué motivos legales o técnicos?
2. ¿Qué nivel de estrellas tiene cada fuente viable y qué **clave de cruce** utilizaríais para integrarlas con los umbrales de rentabilidad de VeloUrbana?
3. ¿Qué datos relevantes siguen faltando en el inventario (por ejemplo, pendientes/topografía, coste de alquiler de naves o normativa laboral) y dónde podrían buscarse?
4. Si VeloUrbana quisiera comercializar posteriormente un "Índice de Ciclologística Urbana" para otras empresas de reparto, ¿qué precauciones de licencia debería mantener?

### Tarea a realizar
En equipos de 3-4 personas (50 minutos), elaborad una **Recomendación metodológica para el Comité de Dirección de VeloUrbana** que incluya:
1. Semáforo de validación de las 6 fuentes (Apta / Apta con adaptación / Descartada) con justificación.
2. Diseño del modelo de puntuación (*scoring*) de barrios/ciudades indicando qué variables internas y abiertas se cruzan y con qué peso.
3. Plan de trabajo de 4 semanas para ejecutar el análisis con recursos internos (sin superar los 3.000 €).

### Posibles soluciones o criterios de análisis
- **Descarte obligatorio de F3:** No es *open data*, tiene derechos propietarios, prohíbe el *scraping* y además incluye datos de contacto potencialmente personales (riesgo RGPD, anticipando el Tema 3).
- **Descarte obligatorio de F5:** Licencia **CC BY-NC** (no permite uso comercial), formato 1 estrella (PDF escaneado) y datos desactualizados (2021).
- **Fuentes válidas (F1, F2, F4, F6):** Son legibles por máquina (3 estrellas), permiten uso comercial con atribución obligatoria y responden directamente a las variables de rentabilidad de VeloUrbana (infraestructura ciclista, clima extremo, densidad comercial/poblacional y presión regulatoria ZBE).
- **Brechas a cubrir:** Añadir modelos digitales de elevación del CNIG/IGN (abiertos, CC BY 4.0) para medir la pendiente real de las calles y cruzarlos mediante coordenadas geográficas o sección censal/código postal.
- **Claves de cruce recomendadas:** Código de municipio INE + código postal / sección censal (para datos tabulares) y capas espaciales WGS84/ETRS89 (para GeoJSON/Shapefile).
- **Comercialización futura:** Mantener registro documental de atribuciones (organismo, licencia, fecha de descarga) y verificar compatibilidad de cualquier capa cartográfica adicional antes de monetizar el índice.

### Preguntas de reflexión final
- ¿Cuánto dinero y tiempo habría malgastado VeloUrbana si hubiera tomado la decisión solo por la intuición de cada departamento?
- ¿Qué riesgos tendría basar el 100 % de la expansión en datos abiertos sin realizar una validación de campo posterior?

---

## 7. Evaluación

### Evaluación diagnóstica breve (inicio de sesión, 5 min)
Cuestionario rápido de 4 preguntas (Mentimeter / Forms / mano alzada):
1. ¿Habéis descargado alguna vez un conjunto de datos de un portal público para tomar una decisión empresarial? (Sí / No / No sabía que existían).
2. Verdadero o falso: "Si un dato está publicado en una web sin contraseña, puedo extraerlo y usarlo en mi negocio sin restricciones".
3. ¿Cuál de estos formatos facilita mejor la automatización: PDF, CSV o imagen PNG?
4. ¿Qué significa la sigla "NC" en una licencia Creative Commons?

### Evaluación formativa durante la sesión
- Observación estructurada durante la **Actividad 2** comprobando si el alumnado verifica licencia y formato real (y no solo el título del *dataset*).
- Preguntas de contraste durante la resolución del caso **VeloUrbana**, verificando que ningún equipo incluye las fuentes F3 o F5 en su propuesta comercial.
- Revisión rápida entre pares (3 minutos) de la clave de cruce en la **Actividad 3**.

### Evaluación sumativa al final del tema
Entrega en la plataforma virtual (o cierre presencial) de dos evidencias:
1. **Test breve de 6 preguntas situacionales** sobre modelo de 5 estrellas, licencias abiertas y riesgos de reutilización (30 % de la valoración).
2. **Lienzo de enriquecimiento Open Data (Actividad 3)** aplicado a la empresa o proyecto del participante, acompañado de la ficha de auditoría real de al menos una fuente abierta (70 % de la valoración).

### Rúbrica de evaluación

| Criterio | Insuficiente (0-4) | En desarrollo (5-6) | Adecuado (7-8) | Destacado (9-10) |
| --- | --- | --- | --- | --- |
| **Definición del problema y valor de negocio** | Propone usar datos abiertos sin vincularlos a una decisión empresarial concreta. | Plantea una decisión genérica con poca concreción sobre el impacto esperado. | Vincula el caso de uso a una decisión medible y realista de su pyme o proyecto. | Define una decisión prioritaria con impacto cuantificable y métrica clara de éxito del piloto. |
| **Selección y calidad técnica de las fuentes** | Selecciona fuentes privadas, PDFs no reutilizables o enlaces rotos sin revisión. | Elige fuentes públicas válidas pero no evalúa formato, granularidad ni frescura. | Selecciona fuentes reales de nivel ≥ 3 estrellas y analiza actualización y posibles incidencias. | Selecciona fuentes óptimas (≥ 3 estrellas o API), documenta su calidad real y anticipa transformaciones necesarias. |
| **Rigor legal y gestión de licencias** | Ignora la licencia o propone usos comerciales sobre datos NC o protegidos por copyright. | Menciona la licencia de forma general sin especificar obligaciones de atribución. | Identifica correctamente la licencia, confirma viabilidad comercial y detalla la atribución exigida. | Audita licencia, atribución, compatibilidad *ShareAlike* y posibles riesgos de reidentificación al cruzar datos. |
| **Diseño del cruce (interno + externo) y plan piloto** | No explica cómo integrar los datos abiertos con los datos internos ni propone pasos claros. | Indica integración general pero sin clave común ni responsables definidos. | Especifica clave de cruce viable (CP, fecha, municipio, CNAE) y plan piloto realizable en 15 días. | Diseña un cruce técnico sólido, realista en costes y con hoja de ruta replicable y escalable para el negocio. |

### Actividad de autoevaluación y reflexión
Al concluir el tema, cada participante responde en su cuaderno o foro del campus:
- *¿Qué decisión de mi área estaba tomando a ciegas que ahora puedo contrastar con datos abiertos?*
- *¿Qué comprobación legal o técnica que antes pasaba por alto voy a convertir en hábito obligatorio?*
- *Del 1 al 5, ¿cuál es mi nivel de confianza para auditar un dataset abierto mañana mismo? ¿Qué me falta para llegar a 5?*

---

## 8. Materiales y recursos

### 8.1. Guion de diapositivas (estructura slide por slide)

1. **Slide 1 — Portada:** Bloque 10 · Tema 1: Open Data. Datos públicos para decisiones más inteligentes en pymes.
2. **Slide 2 — Hoja de ruta y objetivos:** Qué lograremos en 4 horas y cómo conectamos con el Bloque 9 (IA/automatización) y el resto del Bloque 10.
3. **Slide 3 — Diagnóstico rápido:** Resultados en vivo de la encuesta inicial y mito "público = reutilizable".
4. **Slide 4 — ¿Qué es Open Data?:** Definición operativa, pilares (acceso, reutilización, redistribución) y valor específico para pymes.
5. **Slide 5 — Ecosistema de formatos y modelo de 5 estrellas:** Tabla visual de 1 a 5 estrellas con ejemplos reales de archivos.
6. **Slide 6 — Errores técnicos al abrir un dataset:** Codificación UTF-8, separadores decimales, fechas y granularidad.
7. **Slide 7 — Actividad 2 (instrucciones):** Auditoría exprés en portales reales (tiempo, pasos y entregable).
8. **Slide 8 — Semáforo de licencias abiertas:** CC0, CC BY, CC BY-SA, CC BY-NC, ODbL y riesgos de *scraping* no autorizado.
9. **Slide 9 — Mapa de portales clave en España y Europa:** datos.gob.es, INE, Catastro, CNIG, AEMET, PLACSP, portales municipales y data.europa.eu.
10. **Slide 10 — El verdadero multiplicador: Data Mashup:** Cómo cruzar datos internos con datos abiertos mediante claves comunes (código INE, CP, fecha, CNAE).
11. **Slide 11 — Caso práctico: VeloUrbana Movilidad S.L.:** Contexto, dilema de expansión y tabla de 6 fuentes candidatas.
12. **Slide 12 — Debriefing del caso:** Solución de referencia, descarte legal/técnico y lecciones clave.
13. **Slide 13 — Actividad 3 (transferencia):** Instrucciones para completar el Lienzo de enriquecimiento Open Data.
14. **Slide 14 — Cierre y puente al Tema 2:** Por qué sin calidad y gobierno interno (Tema 2) los datos abiertos pierden valor.

### 8.2. Ficha de trabajo: Auditoría rápida de un dataset abierto

```markdown
FICHA DE AUDITORÍA DE DATASET ABIERTO
------------------------------------------------------------
Nombre del dataset:
Organismo publicador:
URL exacta:
Fecha de consulta:

1. EVALUACIÓN TÉCNICA
- Formato disponible (PDF / XLS / CSV / JSON / GeoJSON / API):
- Nivel en el modelo de 5 estrellas (1-5):
- Fecha de última actualización y frecuencia declarada:
- Granularidad (nacional / autonómica / municipal / CP / sección censal):
- Incidencias detectadas al abrir el archivo (UTF-8, nulos, fechas, cabeceras):

2. EVALUACIÓN LEGAL
- Licencia exacta publicada:
- ¿Permite uso comercial? [ ] Sí  [ ] No  [ ] Con condiciones
- ¿Exige atribución? [ ] Sí (redactar texto de cita)  [ ] No
- ¿Incluye cláusula ShareAlike / copyleft? [ ] Sí  [ ] No
- ¿Existe riesgo de datos personales o reidentificación? [ ] Sí  [ ] No

3. INTEGRACIÓN Y DICTAMEN
- Clave de cruce con datos internos:
- Dictamen final: [ ] APTO  [ ] APTO CON LIMPIEZA  [ ] DESCARTADO
- Motivo principal del dictamen:
```

### 8.3. Plantilla práctica replicable: Lienzo de enriquecimiento Open Data

| Bloque del lienzo | Contenido a completar por la empresa |
| --- | --- |
| **1. Decisión de negocio** | ¿Qué decisión concreta queremos mejorar y con qué frecuencia se toma? |
| **2. Datos internos disponibles** | ¿Qué tabla o registro propio tenemos ya (ventas, clientes, rutas, tickets)? |
| **3. Fuentes Open Data seleccionadas** | Nombre del *dataset*, portal, formato y licencia verificada. |
| **4. Clave común de cruce** | Campo exacto que une ambos mundos (ej.: código postal, código municipio INE, fecha, CNAE). |
| **5. Cumplimiento y atribución** | Texto exacto de atribución y responsable de comprobar cambios de licencia/API. |
| **6. Piloto de 15 días (3 pasos)** | Paso 1 (descarga y limpieza), Paso 2 (cruce prototipo), Paso 3 (validación con negocio). |
| **7. Métrica de éxito** | ¿Cómo sabremos si este cruce mejora la decisión (tiempo ahorrado, conversión, margen)? |

### 8.4. Lecturas y recursos recomendados
- **Guía de reutilización de datos abiertos de la Iniciativa Aporta (datos.gob.es):** Referencia práctica en español sobre publicación, formatos y casos de uso empresariales.
- **Open Data Handbook (Open Knowledge Foundation):** Manual introductorio sobre definiciones, licencias abiertas y buenas prácticas técnicas.
- **Documentación oficial de licencias Creative Commons (creativecommons.org):** Guía rápida para distinguir CC0, CC BY, BY-SA y BY-NC.

### 8.5. Vídeos, artículos y fuentes adicionales *(Validar antes de utilizarse)*
> **Nota importante para el formador:** Todos los enlaces, vídeos, normativas y condiciones específicas de uso de portales listados a continuación deben **verificarse y validarse** antes de impartir la sesión, ya que las URLs, licencias de API y regulaciones pueden actualizarse.
- Portal nacional de datos abiertos de España (`datos.gob.es`) y catálogo europeo (`data.europa.eu`) — *validar disponibilidad de datasets de ejemplo antes de la clase*.
- Portal INEbase (`ine.es`) y AEMET OpenData (`opendata.aemet.es`) — *validar requisitos vigentes de registro de API key y condiciones de cita*.
- Directiva (UE) 2019/1024 relativa a los datos abiertos y Reglamento de Ejecución sobre conjuntos de datos de alto valor (HVD) — *verificar normativa consolidada y transposición española vigente*.
- Artículos o vídeos divulgativos del portal `datos.gob.es` sobre casos reales de pymes infomediarias en España — *validar enlaces activos y fecha de publicación*.

### 8.6. Glosario de términos clave

| Término | Definición operativa |
| --- | --- |
| **Open Data** | Datos publicados en formatos abiertos y bajo licencias que permiten su acceso, uso, modificación y redistribución libre. |
| **Modelo de 5 estrellas** | Escala creada por Tim Berners-Lee para medir el grado de apertura técnica e interoperabilidad de un conjunto de datos. |
| **API abierta** | Interfaz web que permite consultar y actualizar conjuntos de datos abiertos de forma automatizada desde aplicaciones externas. |
| **Licencia CC BY** | Licencia Creative Commons que permite uso comercial y transformación exigiendo reconocer la autoría/fuente original. |
| **Cláusula NC / SA** | Restricciones de licencia que impiden uso comercial (NC) o exigen compartir las obras derivadas bajo igual licencia (SA). |
| **Data Mashup** | Integración de datos propios con datos externos mediante una clave compartida para generar conocimiento adicional. |
| **Datos de alto valor (HVD)** | Conjuntos de datos públicos priorizados por la UE por su alto impacto económico, social y medioambiental. |
| **Reidentificación** | Proceso por el cual datos aparentemente anónimos permiten identificar a personas concretas al cruzarse con otras fuentes. |

---

## 9. Adaptaciones para modalidad híbrida

### Sesión presencial
- Realizar la **Actividad 1** con *post-its* físicos agrupados por áreas funcionales (Ventas, Operaciones, Finanzas, Producto) en la pared del aula.
- En la **Actividad 2**, organizar mesas de 3-4 personas donde al menos dos participantes tengan portátil para proyectar en la pantalla principal dos hallazgos reales (un *dataset* excelente y uno defectuoso).
- Imprimir las fichas de auditoría y las tablas del caso **VeloUrbana** para facilitar el trabajo simultáneo sin fatiga de pantalla.

### Sesión online síncrona
- Dividir los bloques expositivos en píldoras de máximo 15-20 minutos intercaladas con sondeos rápidos en chat o Mentimeter.
- Utilizar **salas de grupos pequeños (*breakout rooms*)** de 3-4 personas para el caso **VeloUrbana**, compartiendo una pizarra colaborativa (Miro/Google Slides) con una pestaña preconfigurada por equipo.
- Pedir a los participantes que compartan pantalla durante 2 minutos al mostrar incidencias reales encontradas en los CSV descargados en la Actividad 2.

### Sesión asíncrona
- Grabar dos microvídeos de 10 minutos: (1) demostración paso a paso de búsqueda y descarga en `datos.gob.es` y (2) guía práctica del semáforo de licencias.
- Habilitar un **foro de intercambio de fuentes sectoriales** donde cada alumno publique 1 *dataset* auditado de su sector y comente críticamente el de un compañero (verificando si detectó bien la licencia y la clave de cruce).
- Sustituir la discusión del caso en directo por una entrega escrita breve (máximo 2 páginas) o un vídeo corto de 3 minutos tipo *pitch* al Comité de Dirección de VeloUrbana, con *feedback* en vídeo del formador.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Aprovecha las nociones de analítica comercial, transformación digital y automatización/IA trabajadas en los bloques anteriores —especialmente el **Bloque 9 (Tema 5: Casos de uso en la industria)**—, recordando que cualquier solución de IA o analítica necesita datos externos fiables además de datos propios.
- **Competencias que desarrolla:** Pensamiento analítico basado en evidencias, alfabetización en datos (*data literacy*), criterio jurídico básico en reutilización de información e identificación de oportunidades de negocio con recursos limitados.
- **Conexión con el tema anterior y posterior:**
  - *Tema anterior (Bloque 9, Tema 5 — Casos de uso en la industria):* Tras observar cómo distintas industrias aplican tecnologías digitales avanzadas, este tema muestra cómo alimentar esas iniciativas con datos públicos de bajo coste.
  - *Tema posterior (Bloque 10, Tema 2 — Gestión del dato):* Incorporar datos abiertos a una pyme revela de inmediato los problemas internos de limpieza, estandarización, duplicidad y gobierno. El Tema 2 proporciona las reglas para ordenar y gobernar tanto los datos propios como los externos.
- **Evidencia de aprendizaje que deja el alumnado:** Una **Ficha de auditoría de un *dataset* abierto real** y un **Lienzo de enriquecimiento Open Data** con un plan piloto de 15 días aplicable a su propia empresa o proyecto emprendedor.

---

## Siguientes pasos para el formador

1. **Verificar enlaces y portales 48 horas antes:** Comprobar que `datos.gob.es`, INEbase y los portales municipales elegidos como demostración funcionan sin incidencias y que los archivos CSV de ejemplo no han cambiado de ruta ni licencia.
2. **Validar normativa y licencias vigentes:** Confirmar la redacción actualizada de la normativa española y europea de reutilización de datos del sector público (Directiva Open Data / HVD) y las condiciones vigentes de AEMET OpenData antes de proyectarlas.
3. **Preparar 2 archivos CSV de respaldo (*backup*):** Tener descargados en local un CSV limpio (3 estrellas, UTF-8) y un CSV problemático (separadores inconsistentes o codificación rota) por si falla la conexión a internet en el aula.
4. **Configurar la plantilla digital compartida:** Preparar en el campus virtual o herramienta colaborativa la Ficha de auditoría, el Lienzo Open Data y las salas para el caso **VeloUrbana Movilidad S.L.**.
5. **Recoger el banco de fuentes del grupo:** Al finalizar la sesión, compilar los mejores *datasets* descubiertos por el alumnado y compartir el directorio en el campus como recurso vivo para el Tema 2.
