# Tema 5. Analítica web

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Tema 5. Analítica web |
| **Bloque y posición dentro del programa** | Bloque 2: E-commerce — Tema 5 de 9 (Global MBA en Dirección Comercial y Ventas, 90 ECTS · 14 meses) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Directores comerciales, gerentes de ventas, emprendedores y profesionales de marketing y negocio |
| **Nivel de dificultad** | Intermedio |
| **Prerrequisitos** | Haber completado los Temas 1 a 4 del Bloque 2 o contar con nociones básicas de comercio electrónico y gestión de KPIs comerciales |
| **Resultado general de aprendizaje** | Interpretar datos de tráfico, comportamiento, embudos de conversión, abandono de carrito y atribución multicanal mediante herramientas de analítica web para diagnosticar fugas de ingresos y fundamentar decisiones comerciales y de inversión digital. |

---

## 2. Objetivos de aprendizaje

Al finalizar este tema, el alumnado será capaz de:

1. **Diferenciar** las métricas fundamentales de adquisición y comportamiento digital (usuarios, sesiones, fuentes de tráfico, tasa de interacción y eventos de conversión) evitando errores habituales de interpretación *(Nivel de Bloom: Comprender)*.
2. **Construir** un plan de medición comercial estructurado (objetivos de negocio, KPIs, eventos clave y parámetros UTM) para una tienda online o negocio digital *(Nivel de Bloom: Aplicar)*.
3. **Analizar** embudos de conversión y tasas de abandono de carrito segmentados por dispositivo y canal para cuantificar el impacto económico de cada punto de fuga *(Nivel de Bloom: Analizar)*.
4. **Comparar** los distintos modelos de atribución multicanal (último clic, primer clic, lineal y basado en datos) para reasignar presupuestos comerciales con mayor precisión *(Nivel de Bloom: Evaluar)*.
5. **Formular** recomendaciones accionables de mejora comercial a partir de un cuadro de mando de analítica web y mapas de comportamiento *(Nivel de Bloom: Crear)*.

---

## 3. Contenidos esenciales

### 3.1 Fuentes de tráfico, usuarios, sesiones y plan de medición

#### Explicación breve y clara
Medir sin un plan previo genera "parálisis por análisis": paneles llenos de gráficos vistosos que no ayudan a vender más. La analítica web orientada a dirección comercial empieza definiendo qué preguntas de negocio necesitamos responder, etiquetando correctamente de dónde viene cada visita (parámetros UTM) y comprendiendo con rigor qué miden realmente las métricas básicas (usuarios, sesiones, interacción y eventos) en un entorno actual marcado por el consentimiento de cookies y las restricciones de privacidad.

#### Conceptos clave
- Clasificación de fuentes de tráfico:
  - **Orgánico (SEO):** búsquedas no pagadas en buscadores.
  - **De pago (*Paid Search* / *Paid Social* / Display):** campañas CPC/CPM en Google Ads, Meta, TikTok, LinkedIn, etc.
  - **Directo:** escritura directa de URL, favoritos o tráfico mal etiquetado (*dark social* sin UTM).
  - **Referido (*Referral*):** enlaces desde otros sitios web, prensa o afiliados.
  - **Email / CRM y Social Orgánico:** tráfico propio de base de datos y redes.
- Métricas esenciales de tráfico y calidad: Usuarios totales vs. nuevos vs. recurrentes; Sesiones; Sesiones con interacción (*Engaged Sessions*) y Tasa de interacción (sustituyendo al antiguo concepto rígido de "tasa de rebote"); Eventos clave / Conversiones.
- Etiquetado de campañas mediante parámetros **UTM** (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`) para evitar que la inversión aparezca atribuida a "Directo" o "Sin asignar".
- Impacto de la privacidad y el consentimiento (*Consent Mode*): por qué las cifras de analítica web nunca coinciden al 100 % con los pedidos reales del ERP/CRM *(nota: verificar requisitos vigentes de la AEPD y configuración actualizada de Consent Mode antes de impartir)*.

#### Definiciones necesarias
- **Sesión:** Conjunto de interacciones (vistas de página, clics, búsquedas, compras) que realiza un usuario en el sitio web dentro de un intervalo de actividad determinado.
- **Parámetros UTM (*Urchin Tracking Module*):** Etiquetas añadidas al final de una URL que permiten identificar con exactitud la fuente, el medio y la campaña específica que trajo a cada visitante.
- **Plan de medición (*Measurement Plan*):** Documento previo a la configuración técnica que traduce los objetivos comerciales de la empresa en KPIs, segmentos y eventos concretos que deben registrarse.

#### Ejemplo práctico realista
Una pyme de formación online invertía 4.000 €/mes en newsletters patrocinadas, colaboraciones con *influencers* y campañas de Meta Ads, pero en su panel de analítica el 54 % de las ventas aparecía como tráfico "Directo", impidiendo saber qué acción funcionaba. Al implantar una nomenclatura estandarizada de parámetros UTM en todos los enlaces y cruzar los datos con el CRM, descubrió que las newsletters patrocinadas generaban el 38 % de los ingresos a un coste mínimo, mientras que dos campañas de anuncios sociales no eran rentables.

#### Errores frecuentes
- Confiar ciegamente en las plataformas publicitarias sin contrastar con analítica web y con la facturación real del ERP.
- No etiquetar enlaces de correo electrónico, WhatsApp, códigos QR o biografías sociales, inflando artificialmente el canal "Directo".
- Mezclar mayúsculas y minúsculas en las UTM (`Facebook` vs. `facebook` vs. `fb`), fragmentando los informes en múltiples filas.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué suele existir una discrepancia entre las ventas que reporta Google Analytics, las que reporta Meta Ads y las que figuran en el ERP?
2. ¿Qué ocurre en tus informes de fuentes de tráfico si lanzas campañas de email o colaboraciones sin parámetros UTM normalizados?
3. ¿Qué diferencia hay entre mirar "sesiones totales" y analizar "sesiones con interacción por canal"?

---

### 3.2 Embudos, tasas de conversión y análisis del abandono de carrito

#### Explicación breve y clara
La tasa de conversión global de una tienda (por ejemplo, 1,8 %) es un promedio engañoso: oculta si el problema está en tráfico irrelevante, en fichas de producto que no convencen o en un checkout roto en móvil. Descomponer el viaje del comprador en un embudo de micro-conversiones permite localizar el paso exacto donde se escapa más dinero y priorizar la corrección con mayor retorno inmediato.

#### Conceptos clave
- Embudo estándar de e-commerce (eventos clave):
  1. `view_item_list` (vista de categoría / búsqueda).
  2. `view_item` (vista de ficha de producto — PDP).
  3. `add_to_cart` (añadir al carrito).
  4. `begin_checkout` (inicio de pago).
  5. `add_shipping_info` / `add_payment_info` (envío y pago).
  6. `purchase` (compra completada).
- Segmentación obligatoria del embudo: siempre cruzar por **dispositivo (móvil vs. escritorio)**, **canal de origen**, **tipo de usuario (nuevo vs. recurrente)** y **categoría de producto**.
- Análisis del abandono de carrito y checkout: distinguir abandono "exploratorio" (comparar precios, guardar para luego) frente a abandono "por fricción evitable" (coste de envío inesperado, error en código postal, fallo en pasarela o formulario excesivo).
- Valor económico de la fuga: estimar cuántos euros adicionales genera mejorar en 5 o 10 puntos porcentuales un paso concreto del embudo.

#### Definiciones necesarias
- **Tasa de conversión (*Conversion Rate — CR*):** Porcentaje de sesiones o usuarios que completan una acción objetivo (compra, envío de formulario o registro) sobre el total (`Conversiones / Sesiones × 100`).
- **Tasa de abandono de carrito (*Cart Abandonment Rate*):** Porcentaje de usuarios que añaden al menos un producto al carrito pero abandonan el sitio sin completar la transacción (`1 - [Compras completadas / Carritos iniciados]`).
- **Micro-conversión:** Acción intermedia medible que demuestra avance en la intención de compra (ver una ficha, usar filtros, añadir al carrito, iniciar checkout o suscribirse).

#### Ejemplo práctico realista
Una tienda online de equipamiento de pádel mostraba una conversión global del 1,5 % que parecía "normal". Al segmentar el embudo por dispositivo, la dirección comprobó que en escritorio la conversión era del 3,1 %, pero en móvil caía al 0,8 %. El salto `begin_checkout` → `purchase` perdía al 81 % de los usuarios móviles porque el botón de aceptar condiciones quedaba tapado por el teclado virtual en pantallas pequeñas. Corregir ese único fallo en 48 horas elevó la conversión móvil al 1,7 % y añadió más de 14.000 € mensuales en ventas.

#### Errores frecuentes
- Analizar únicamente la tasa de conversión agregada sin desglosar por dispositivo ni por paso del embudo.
- Comparar la tasa de conversión propia con "medias de internet" sin tener en cuenta sector, ticket medio ni peso del tráfico de marca *(nota: cualquier benchmark sectorial de conversión o abandono debe tomarse solo como referencia orientativa y validarse en estudios recientes)*.
- Invertir más dinero en captar tráfico cuando el paso de carrito a compra presenta una fuga técnica o comercial grave.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué revela una caída fuerte entre `view_item` y `add_to_cart` frente a una caída entre `begin_checkout` y `purchase`?
2. ¿Por qué es imprescindible segmentar siempre el embudo de conversión por dispositivo (móvil vs. escritorio)?
3. ¿Cómo se calcula el impacto en facturación mensual de reducir la tasa de abandono del checkout en 10 puntos porcentuales?

---

### 3.3 Modelos de atribución y rentabilidad por canal

#### Explicación breve y clara
Un cliente rara vez hace clic en un anuncio y compra en la misma visita: puede descubrir tu marca en Instagram, buscar reseñas en Google tres días después, recibir un correo de carrito abandonado y terminar comprando desde un anuncio de búsqueda de marca. El modelo de atribución decide qué canal "se lleva el mérito" de esa venta. Elegir mal el modelo lleva a apagar canales que realmente generan demanda nueva y a sobreinvertir en canales que solo recogen ventas ya decididas.

#### Conceptos clave
- Principales modelos de atribución:
  - **Último clic (*Last Click*):** 100 % del crédito al último punto de contacto antes de la compra (suele sobrevalorar búsqueda de marca, retargeting y email).
  - **Primer clic (*First Click*):** 100 % al primer punto que trajo al usuario (favorece canales de descubrimiento como redes sociales o contenidos).
  - **Lineal / Declive en el tiempo (*Time Decay*):** reparte el crédito entre todos los puntos de contacto del recorrido.
  - **Atribución basada en datos (*Data-Driven Attribution*):** algoritmo que estima el peso incremental de cada interacción según patrones reales de conversión y no conversión.
- Límites de la atribución digital actual: navegación multidispositivo (descubre en móvil, compra en portátil), compras offline influidas por online (*ROPO*), bloqueadores de anuncios y rechazo de cookies.
- Métricas complementarias para dirección comercial: **ROAS** (*Return on Ad Spend*) por canal frente a **MER** (*Marketing Efficiency Ratio* = Facturación total / Inversión total de marketing) y encuestas poscompra ("¿Cómo nos conociste?").

#### Definiciones necesarias
- **Modelo de atribución:** Conjunto de reglas o algoritmos que determinan cómo se asigna el crédito económico de una conversión entre los distintos canales e interacciones previas del comprador.
- **ROAS (*Return on Ad Spend*):** Ingresos atribuidos directamente a una campaña publicitaria divididos por la inversión realizada en dicha campaña (`Ingresos campaña / Coste campaña`).
- **MER (*Marketing Efficiency Ratio*):** Relación agregada entre los ingresos totales del negocio (o del canal online) y la inversión total en marketing en un periodo, útil para evaluar eficiencia global sin sesgos de atribución plataforma por plataforma.

#### Ejemplo práctico realista
Una marca española de mochilas urbanas analizaba sus campañas solo con atribución de *último clic*. Google Search (búsqueda por el nombre de la marca) mostraba un ROAS de 9x, mientras que Meta Ads (vídeos de descubrimiento) mostraba un ROAS de 1,4x. Decidieron apagar Meta Ads para "ahorrar". Al mes siguiente, las búsquedas de marca en Google y las ventas totales cayeron un 36 %. Al revisar rutas de conversión asistida y encuestas poscompra, comprobaron que Meta generaba el descubrimiento inicial que luego cerraba en Google. Reequilibraron la inversión midiendo MER global y conversiones asistidas.

#### Errores frecuentes
- Apagar canales de parte alta del embudo (descubrimiento) porque no rentabilizan bajo atribución de último clic.
- Sumar las ventas atribuidas dentro de Meta Ads + Google Ads + TikTok Ads por separado (doble contabilización de la misma venta).
- Mirar únicamente el ROAS bruto sin considerar el margen bruto del producto (un ROAS de 3x puede ser muy rentable con 70 % de margen y ruinoso con 25 % de margen).

#### Preguntas que el alumnado debería poder responder
1. ¿Qué sesgo comercial produce tomar decisiones presupuestarias usando únicamente el modelo de *último clic*?
2. ¿Cuál es la diferencia entre ROAS por campaña y MER global, y por qué un director comercial debe vigilar ambos?
3. ¿Cómo se calcula el *ROAS de equilibrio* (*break-even ROAS*) de una pyme a partir de su margen bruto?

---

### 3.4 Herramientas de analítica cuantitativa, cualitativa y gobierno del dato

#### Explicación breve y clara
Los números te dicen **qué** pasa y **dónde** pasa ("el 76 % abandona el checkout en móvil"), pero las herramientas cualitativas te explican **por qué** pasa ("los usuarios pulsan tres veces en un texto que parece un botón y se atascan en el campo de NIF"). Combinar analítica cuantitativa, mapas de calor/grabaciones de sesiones y cuadros de mando ejecutivos sencillos permite a cualquier pyme pasar de acumular datos a tomar decisiones semanales rápidas.

#### Conceptos clave
- Ecosistema práctico de herramientas para pymes:
  - **Analítica cuantitativa web/app:** Google Analytics 4 (GA4), alternativas enfocadas en privacidad (Matomo, Plausible, Piwik PRO) y gestión de etiquetas mediante Google Tag Manager (GTM).
  - **Analítica cualitativa de comportamiento:** mapas de calor (*heatmaps*), mapas de *scroll* y grabaciones anonimizadas de sesiones (Microsoft Clarity, Hotjar, Contentsquare).
  - **Visualización y cuadros de mando:** Looker Studio, Power BI o paneles integrados de comercio electrónico conectando analítica web + inversión publicitaria + datos reales de ERP/CRM.
- Ritmo de gobierno del dato en dirección comercial:
  - Revisión semanal (15 min): ventas reales, MER, conversión por dispositivo, incidencias de embudo y campañas activas.
  - Revisión mensual (60 min): atribución, cohortes de recompra, margen por categoría y plan de experimentos del mes siguiente.
- Privacidad y calidad del dato: anonimización de datos personales en grabaciones de sesión, validación periódica de etiquetas (evitar eventos duplicados) y cumplimiento RGPD *(verificar configuración legal con delegado/asesor de privacidad antes de activar cualquier herramienta)*.

#### Definiciones necesarias
- **Mapa de calor (*Heatmap*):** Representación visual agregada sobre una página web que muestra con intensidad cromática dónde hacen clic, mueven el cursor o hasta dónde hacen *scroll* los visitantes.
- **Gestor de etiquetas (*Tag Manager*):** Herramienta (como GTM) que centraliza la instalación y activación de códigos de medición y seguimiento sin modificar continuamente el código fuente de la web.
- **Cuadro de mando ejecutivo (*Dashboard*):** Panel visual sintetizado que reúne en una sola pantalla los 8-12 KPIs críticos para tomar decisiones comerciales sin navegar por decenas de informes técnicos.

#### Ejemplo práctico realista
Una tienda online de suplementación veterinaria instaló Microsoft Clarity (gratuito) junto a GA4 tras ver que su ficha de producto tenía muchas visitas y pocos añadidos al carrito. Al revisar 30 grabaciones anonimizadas y el mapa de *scroll*, detectó que el 68 % de los usuarios móviles hacía clic compulsivamente en la tabla de dosificación (creyendo que era un selector desplegable) y abandonaba sin bajar hasta las opiniones verificadas. Reordenaron los bloques en la ficha y activaron una calculadora sencilla de dosis por peso; la tasa de `add_to_cart` creció del 5,2 % al 8,9 %.

#### Errores frecuentes
- Instalar GA4 por defecto sin configurar los eventos de comercio electrónico (`view_item`, `add_to_cart`, `begin_checkout`, `purchase`) ni verificar que las transacciones no se duplican.
- Construir *dashboards* de 15 páginas con 80 métricas que ningún directivo lee pasadas dos semanas.
- Grabar sesiones en páginas de pago o formularios sin enmascarar campos sensibles de datos personales.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué aporta la analítica cualitativa (mapas de calor y grabaciones) que la analítica cuantitativa (GA4) no puede mostrar por sí sola?
2. ¿Qué 8-10 indicadores incluirías en el cuadro de mando semanal de un director comercial de e-commerce?
3. ¿Qué comprobaciones básicas de calidad de datos (*data QA*) deben hacerse antes de fiarse de un informe de analítica web?

---

## 4. Metodología didáctica

Secuencia de 4 horas (240 minutos) basada en la lectura real de datos, detección de fugas y toma de decisiones presupuestarias.

| Fase | Tiempo | Qué hace el formador | Qué hace el alumnado |
|---|---:|---|---|
| **1. Apertura y activación** | 25 min | Conecta con el Tema 4 y dinamiza la Actividad 1 (*El dato engañoso*: 3 gráficos reales simplificados con trampas de interpretación). | Analiza los 3 minigráficos en parejas, detecta errores de lectura (promedio engañoso, doble atribución, falta de margen) y debate en plenario. |
| **2. Exposición breve / microlearning (Parte A)** | 40 min | Expone apartados 3.1 y 3.2 (fuentes de tráfico, UTM, métricas clave, embudos segmentados y cálculo del valor de la fuga). | Revisa ejemplos de URLs con UTM y realiza un cálculo guiado rápido de impacto de mejora en embudo. |
| **3. Exposición breve / microlearning (Parte B)** | 35 min | Expone apartados 3.3 y 3.4 (modelos de atribución, ROAS vs. MER, *break-even ROAS*, analítica cualitativa y *dashboards*). | Calcula un *break-even ROAS* rápido y contrasta cómo cambia una decisión presupuestaria según el modelo de atribución. |
| **4. Análisis de caso práctico** | 50 min | Presenta el caso *Calzado Artesanal Levante S.L.* Supervisa a los equipos en el análisis del embudo por dispositivo y la reasignación de inversión por atribución. | En equipo, diagnostica las fugas del embudo de checkout (78 % abandono), detecta errores de atribución y elabora una propuesta cuantificada de acción. |
| **5. Actividad práctica de aplicación y transferencia** | 45 min | Facilita la Actividad 2 (construcción de tabla de nomenclatura UTM y lectura de embudo en hoja de cálculo) y lanza la Actividad 3 (*Plan de Medición* de su empresa). | Crea un esquema estandarizado de UTM, identifica cuellos de botella numéricos y diseña el cuadro de mando de 1 página para su negocio. |
| **6. Discusión guiada** | 25 min | Modera la exposición de diagnósticos del caso y contrasta decisiones de presupuesto (¿qué canal recortar, mantener o escalar?). | Presenta conclusiones basadas en datos, defiende su cálculo de impacto económico y contrasta criterios con otros equipos. |
| **7. Síntesis y cierre** | 20 min | Sintetiza el método "Medir → Diagnosticar → Hipotetizar → Actuar", aplica evaluación sumativa breve y conecta con el Tema 6 (*Experiencia de usuario*). | Completa la prueba de cierre y la autoevaluación de madurez analítica. |
| **TOTAL** | **240 min** | | |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Detectives del dato engañoso
- **Objetivo:** Desarrollar pensamiento crítico frente a informes de marketing y analítica que inducen a malas decisiones comerciales.
- **Instrucciones para el alumnado:**
  1. Recibe 3 minicasos de 4 líneas presentados en pantalla:
     - *Caso A:* "Las visitas crecieron un 60 % este mes, pero las ventas bajaron un 10 %."
     - *Caso B:* "Google Ads reporta 40.000 € de ventas y Meta Ads 35.000 €, pero en el banco solo entraron 52.000 €."
     - *Caso C:* "La campaña X tiene un ROAS de 3,2x y queremos triplicar el presupuesto (nuestro margen bruto es del 28 %)."
  2. En parejas (8 min), identificad qué está pasando realmente en cada caso y qué dato adicional exigiríais antes de decidir.
  3. Puesta en común guiada (10 min).
- **Materiales necesarios:** Diapositiva/ficha con los 3 minicasos y chat/pizarra colaborativa.
- **Tiempo estimado:** 20 minutos (en Fase 1).
- **Rol del formador:** Guiar el descubrimiento de conceptos clave (calidad de tráfico, doble atribución y *break-even ROAS*) sin adelantar la teoría antes de escuchar al grupo.
- **Producto o entregable esperado:** Diagnóstico escrito de los 3 errores clásicos de lectura de datos.
- **Criterios de éxito:** Detección correcta de la trampa analítica en al menos 2 de los 3 minicasos y cálculo o razonamiento correcto del margen en el Caso C (con 28 % de margen bruto, el *break-even ROAS* es ≈ 3,57x, por lo que 3,2x pierde dinero).

### Actividad 2 (Aplicación): Auditoría de embudo y protocolo UTM en hoja de cálculo
- **Objetivo:** Aplicar cálculos de conversión por fase, cuantificación económica de fugas y estandarización de parámetros UTM.
- **Instrucciones para el alumnado:**
  1. Abre la hoja de cálculo *Práctica Embudo y UTM*.
  2. En la pestaña 1, calcula las tasas de paso entre `view_item` → `add_to_cart` → `begin_checkout` → `purchase` separando móvil y escritorio, y determina cuántos euros adicionales se generarían al elevar la fase más débil en 8 puntos porcentuales.
  3. En la pestaña 2, genera 4 URLs correctamente etiquetadas con UTM consistentes para: una campaña de Google Search, un anuncio de carrusel en Instagram, una newsletter semanal de rebajas y un código QR en escaparate físico.
- **Materiales necesarios:** Hoja de cálculo compartida (Excel/Google Sheets).
- **Tiempo estimado:** 25 minutos (en Fase 5).
- **Rol del formador:** Comprobar consistencia de nomenclatura UTM (minúsculas, sin acentos ni espacios) y exactitud en el cálculo de impacto económico.
- **Producto o entregable esperado:** Hoja de cálculo resuelta con diagnóstico del mayor cuello de botella y 4 URLs UTM estandarizadas.
- **Criterios de éxito:** Cero errores de cálculo en tasas de paso e impacto en euros; nomenclatura UTM limpia y replicable.

### Actividad 3 (Transferencia a la realidad laboral): Plan de Medición y Cuadro de Mando Comercial de 1 página
- **Objetivo:** Diseñar un plan de medición ejecutable para la empresa real o proyecto del alumno que conecte analítica web con resultados de negocio.
- **Instrucciones para el alumnado:**
  1. Utiliza la *Plantilla de Plan de Medición* (Sección 8) aplicada a tu empresa o proyecto emprendedor.
  2. Define: a) 2 objetivos comerciales prioritarios, b) los 6 eventos clave a rastrear en tu web/tienda, c) la arquitectura de 8-10 KPIs para tu cuadro de mando semanal (combinando adquisición, conversión, ticket medio, retención y rentabilidad MER/ROAS), y d) 2 preguntas que resolverías con herramientas cualitativas (mapas de calor/grabaciones).
  3. Anota qué discrepancia o punto ciego de medición existe hoy en tu empresa y cómo lo resolverás en 30 días.
- **Materiales necesarios:** Plantilla *Plan de Medición y Cuadro de Mando*.
- **Tiempo estimado:** 20 minutos en sesión + cierre asíncrono para entrega sumativa.
- **Rol del formador:** Asegurar foco ejecutivo (pocas métricas, pero todas vinculadas a una decisión concreta).
- **Producto o entregable esperado:** Plan de Medición y diseño de Cuadro de Mando de 1-2 páginas listo para presentar a dirección o agencia.
- **Criterios de éxito:** Coherencia entre objetivos de negocio, eventos técnicos, KPIs financieros y uso práctico de analítica cualitativa.

---

## 6. Caso práctico

### Calzado Artesanal Levante S.L.: 78 % de abandono en checkout y confusión en la inversión digital

#### Contexto empresarial
**Calzado Artesanal Levante S.L.** es una pyme alicantina con 24 trabajadores que fabrica calzado de piel de gama media-alta (ticket medio 115 €, margen bruto 58 %). Vende el 60 % en tiendas multimarca y el 40 % a través de su e-commerce propio (facturación online actual: 780.000 €/año). Invierte 12.000 €/mes en marketing digital repartidos entre Google Ads (búsqueda de marca + búsqueda genérica + Shopping), Meta Ads (prospección y retargeting) y email marketing.

#### Situación o problema
En el último trimestre, las ventas online se han estancado pese a subir la inversión publicitaria un 20 %. El gerente comercial revisa los datos y se encuentra ante tres dilemas urgentes:
1. La agencia propone **recortar un 70 % la inversión en Meta Ads Prospección** porque en atribución de último clic su ROAS es de 1,3x, y mover todo ese dinero a Google Búsqueda de Marca (ROAS 11,5x) y Email.
2. En el embudo global, la tienda logra un excelente 11 % de usuarios que añaden al carrito, pero **el 78 % de quienes inician el checkout abandonan antes de completar el pago**, con especial gravedad en móvil.
3. Un 29 % de las sesiones y ventas aparece bajo el canal "Directo / Sin asignar", y las grabaciones de sesiones nunca se han activado ni auditado.

#### Datos disponibles

**Tabla A: Rendimiento mensual por canal (modelo Último Clic vs. Asistido)**

| Canal | Inversión mensual | Sesiones | Ventas Último Clic | ROAS Último Clic | Conversiones Asistidas (ruta previa) | Encuesta poscompra ("¿Cómo nos conociste?") |
|---|---:|---:|---:|---:|---:|---:|
| Google Ads — Marca | 1.500 € | 4.800 | 17.250 € | 11,5x | 28 | 9 % |
| Google Ads — Shopping/Genérico | 4.000 € | 14.500 | 16.000 € | 4,0x | 95 | 26 % |
| Meta Ads — Prospección | 4.500 € | 26.000 | 5.850 € | 1,3x | 210 | 41 % |
| Meta Ads — Retargeting | 1.200 € | 3.200 | 7.200 € | 6,0x | 64 | 6 % |
| Email Marketing (sin UTM parciales) | 800 € | 3.500 | 5.600 € | 7,0x | 42 | 5 % |
| Orgánico SEO | 0 € | 11.000 | 9.200 € | — | 88 | 13 % |
| Directo / Sin asignar | 0 € | 19.000 | 13.900 € | — | — | — |
| **TOTAL MENSUAL** | **12.000 €** | **82.000** | **75.000 €** | **MER: 6,25x** | — | **100 %** |

**Tabla B: Embudo mensual segmentado por dispositivo**

| Paso del embudo | Móvil (72 % sesiones) | Escritorio (28 % sesiones) |
|---|---:|---:|
| Sesiones totales | 59.040 | 22.960 |
| Vista de ficha (`view_item`) | 31.880 (54 %) | 14.235 (62 %) |
| Añadir al carrito (`add_to_cart`) | 3.347 (10,5 % de PDP) | 1.637 (11,5 % de PDP) |
| Inicio de checkout (`begin_checkout`) | 2.175 (65 % de carrito) | 1.228 (75 % de carrito) |
| Compra completada (`purchase`) | 348 (16 % de checkout → **84 % abandono**) | 405 (33 % de checkout → **67 % abandono**) |
| Tasa de conversión final (`purchase / sesiones`) | **0,59 %** | **1,76 %** |

*(Nota metodológica: caso y tablas elaborados con fines estrictamente didácticos; en datos reales los totales pueden diferir ligeramente por redondeos o tasas de consentimiento).*

#### Preguntas de análisis
1. ¿Aprobarías la recomendación de la agencia de recortar un 70 % Meta Ads Prospección y pasarlo a Google Marca? Justifica tu decisión usando el MER, el margen bruto (58 %), las conversiones asistidas y la encuesta poscompra.
2. Analizando la Tabla B, ¿dónde está la mayor oportunidad de crecimiento inmediato de facturación? Calcula cuántos euros mensuales adicionales facturaría la empresa si el paso `begin_checkout` → `purchase` en móvil pasase del 16 % actual al 28 % (sin gastar un euro más en anuncios).
3. ¿Qué hipótesis concretas plantearías para explicar el 84 % de abandono en checkout móvil y qué herramientas cualitativas/cuantitativas activarías esta semana para confirmarlas?
4. ¿Cómo corregirías el problema del 29 % de tráfico "Directo / Sin asignar" y qué cuadro de mando implantarías para la reunión semanal con la agencia?

#### Tarea a realizar
En equipos de 4 personas, redactad un **Informe de Diagnóstico Analítico y Plan de Acción a 60 días** que responda a los 4 bloques:
1. Decisión razonada de presupuesto por canal (qué mantener, ajustar o auditar) y cálculo del *break-even ROAS* real de la empresa.
2. Cálculo exacto del potencial de facturación al corregir el checkout móvil.
3. Plan de investigación cualitativa y cuantitativa del checkout (eventos de paso envío/pago + mapas de calor/grabaciones).
4. Protocolo de gobierno del dato (UTM, atribución basada en datos + MER y KPIs semanales).

#### Posibles soluciones o criterios de análisis
- **Decisión de atribución y presupuesto:** Recortar Meta Ads Prospección sería un **grave error estratégico**. Aunque su ROAS de último clic es 1,3x, genera 210 conversiones asistidas y el **41 % de los compradores declara en encuesta poscompra haber conocido la marca ahí** (alimentando luego las búsquedas de marca en Google y el retargeting). Además, Google Marca suele tener demanda limitada (inyectar más presupuesto en tu propio nombre solo encarece el CPC sin crear clientes nuevos). Con un margen bruto del 58 % (o ~45 % tras logística/pasarela), el *break-even ROAS* directo está en torno a 1,7x-2,2x, y el MER global actual es muy sano (6,25x). La acción correcta es **mantener la prospección optimizando creatividades/audiencias**, auditar qué parte del presupuesto de Marca es realmente incremental y medir por MER + atribución basada en datos + encuesta poscompra.
- **Impacto numérico del checkout móvil:** Actualmente `2.175` inicios de checkout móvil × `16 %` = `348` compras. Si sube al `28 %`: `2.175 × 28 % = 609` compras → **+261 pedidos adicionales al mes**. A un ticket medio de 115 €, supone **+30.015 €/mes** (+360.180 €/año) con exactamente los mismos 12.000 €/mes de inversión en tráfico.
- **Investigación del abandono en checkout móvil:** Activar en GA4 los pasos intermedios exactos (`add_shipping_info` y `add_payment_info`) para ver si el desplome ocurre al mostrar gastos de envío, al rellenar dirección o al fallar la pasarela 3DS/tarjeta. Activar simultáneamente Microsoft Clarity/Hotjar (con campos sensibles enmascarados) para revisar 50 grabaciones de sesiones móviles abandonadas en checkout y detectar *rage clicks*, errores de validación o falta de Bizum/Apple Pay.
- **Calidad del dato:** Estandarizar UTM en todos los envíos de email, redes sociales y anuncios (reduciendo el "Directo / Sin asignar"), configurar *Consent Mode* verificado con asesoría legal y cruzar semanalmente las ventas del panel con los pedidos reales facturados en ERP.

#### Preguntas de reflexión final
1. ¿Cuántas veces una agencia externa optimiza hacia "el indicador que luce mejor en su informe" (ROAS de último clic en marca) en lugar de hacia el crecimiento rentable real de la empresa?
2. ¿Qué pregunta semanal debería hacer siempre un director comercial cuando le presentan un informe de tráfico y campañas?

---

## 7. Evaluación

### Evaluación diagnóstica breve (inicio de sesión, 5 min)
3 preguntas rápidas en encuesta online:
1. ¿Con qué frecuencia revisas personalmente los datos de analítica web de tu empresa? (Semanal / Mensual / Ocasionalmente / Nunca).
2. ¿Sabes calcular cuál es el ROAS mínimo a partir del cual tus campañas empiezan a ganar dinero? (Sí / Aproximado / No).
3. Si hoy tuvieras que elegir entre aumentar un 20 % el tráfico o reducir un 20 % el abandono del checkout, ¿qué suele ser más rentable y rápido?

### Evaluación formativa durante la sesión
- Resolución guiada de los 3 minicasos de la Actividad 1 (*Detectives del dato engañoso*).
- Revisión directa de las fórmulas de embudo y URLs UTM en la Actividad 2.
- Calidad del razonamiento numérico y de atribución durante el debate del caso *Calzado Artesanal Levante S.L.*

### Evaluación sumativa al final del tema
1. **Prueba objetiva breve (30 %):** 10 preguntas sobre fuentes de tráfico, UTM, eventos de embudo, cálculo de tasas de paso, *break-even ROAS*, modelos de atribución y uso de mapas de calor.
2. **Entregable práctico (70 %):** *Plan de Medición y Cuadro de Mando Comercial de 1 página* (Actividad 3) acompañado de la tabla UTM y cálculo de impacto de embudo (Actividad 2).

### Rúbrica de evaluación del entregable práctico

| Criterio | Insuficiente (0 - 4,9) | En desarrollo (5 - 6,9) | Adecuado (7 - 8,9) | Destacado (9 - 10) |
|---|---|---|---|---|
| **1. Plan de medición y eventos clave (25 %)** | Lista genérica de métricas sin conexión con objetivos de negocio ni eventos de embudo. | Define objetivos básicos y algunos eventos, pero faltan micro-conversiones clave o protocolo UTM. | Traduce objetivos comerciales a eventos rastreables completos y protocolo UTM consistente y limpio. | Diseña una arquitectura de medición profesional lista para implementar en GA4/GTM, contemplando calidad del dato y consentimiento. |
| **2. Análisis de embudo y cuantificación económica (25 %)** | No segmenta por dispositivo ni calcula el impacto económico de corregir fugas. | Calcula tasas básicas del embudo, pero sin segmentación o con errores en el cálculo de ingresos potenciales. | Segmenta correctamente el embudo, localiza la fuga prioritaria y cuantifica con precisión el impacto en facturación. | Prioriza oportunidades de conversión combinando análisis cuantitativo y cualitativo con proyecciones realistas de margen neto. |
| **3. Atribución y rentabilidad (ROAS/MER) (25 %)** | Aplica criterio rígido de último clic sin considerar margen ni rutas asistidas. | Reconoce límites del último clic, pero no integra margen ni MER en la decisión de presupuesto. | Evalúa canales combinando atribución, conversiones asistidas, margen (*break-even ROAS*) y MER global. | Demuestra criterio directivo sobresaliente para reasignar presupuesto evitando doble conteo y protegiendo la generación de demanda nueva. |
| **4. Diseño del Cuadro de Mando ejecutivo (25 %)** | Panel saturado de métricas de vanidad sin periodicidad ni criterio de decisión. | Incluye métricas útiles, pero desordenadas o sin objetivos/umbrales de alerta. | Diseña un cuadro de mando limpio (8-12 KPIs), accionable y estructurado por adquisición, conversión y rentabilidad. | Crea un cuadro de mando de nivel comité comercial con cadencia semanal/mensual, responsables y disparadores claros de acción. |

### Actividad de autoevaluación y reflexión
Autochequeo individual (3 minutos):
- *Hoy sé distinguir claramente entre ROAS de plataforma y MER real de negocio:* [Sí / Parcialmente / Necesito repasar]
- *La primera fuga del embudo que voy a revisar esta semana en mi empresa (desglosada en móvil vs. escritorio) es:* ______________________
- *Una regla de etiquetado UTM que implantaré desde hoy con mi equipo o agencia:* ______________________

---

## 8. Materiales y recursos

### Guion de diapositivas estructurado (slide por slide)

| Slide | Título | Contenido clave y recurso visual | Tiempo aprox. |
|---:|---|---|---:|
| 1 | Portada: Tema 5. Analítica web | Título, Bloque 2 (5/9), Global MBA en Dirección Comercial y Ventas. | 2 min |
| 2 | Objetivos del tema | 5 objetivos Bloom: convertir datos dispersos en decisiones comerciales rentables. | 3 min |
| 3 | Activación: Detectives del dato engañoso | Los 3 minicasos trampa de tráfico, doble atribución y ROAS sin margen. | 5 min |
| 4 | Del objetivo comercial al Plan de Medición | Pirámide: Objetivo negocio → KPIs → Segmentos → Eventos → Etiquetas. | 9 min |
| 5 | Fuentes de tráfico y disciplina UTM | Mapa de canales y regla de oro para eliminar el "Directo / Sin asignar". | 10 min |
| 6 | Métricas esenciales y privacidad actual | Usuarios, sesiones, tasa de interacción, eventos clave y efecto del consentimiento de cookies. | 9 min |
| 7 | Embudo de e-commerce y abandono de carrito | Diagrama de los 6 eventos (`view_item_list` a `purchase`) segmentado móvil vs. escritorio. | 12 min |
| 8 | Cuantificar fugas: el dinero escondido en el embudo | Ejemplo paso a paso: impacto en euros de mejorar +8 pp una fase crítica. | 10 min |
| 9 | Modelos de atribución multicanal | Comparativa visual: Último clic vs. Primer clic vs. Lineal vs. Basado en datos. | 10 min |
| 10 | ROAS de equilibrio (*break-even*) y MER global | Fórmula visual `1 / % Margen bruto` y por qué no sumar ventas de plataformas. | 8 min |
| 11 | Analítica cualitativa y Cuadro de Mando | Qué responden GA4 vs. Heatmaps/Grabaciones (Clarity/Hotjar) y modelo de dashboard de 1 página. | 7 min |
| 12 | Caso práctico: Calzado Artesanal Levante S.L. | Tablas A y B (atribución y embudo móvil/escritorio) y 4 preguntas clave. | 5 min |
| 13 | Talleres prácticos (Act. 2 y Act. 3) | Plantilla de embudo/UTM y Plan de Medición comercial. | 5 min |
| 14 | Cierre y puente al Tema 6 | De "detectar dónde se rompen las ventas" a "rediseñar la experiencia" (*Tema 6. Experiencia de usuario*). | 5 min |

### Ficha de trabajo: Generador y reglas de nomenclatura UTM
Reglas obligatorias: todo en minúsculas, sin tildes ni espacios (usar guion medio `-`), diccionario único compartido por todo el equipo y agencia.
- `utm_source`: plataforma o proveedor exacto (`google`, `meta`, `linkedin`, `newsletter`, `qr-tienda`).
- `utm_medium`: tipo de canal (`cpc`, `paid-social`, `email`, `affiliate`, `offline`).
- `utm_campaign`: nombre estructurado de campaña (`2026-q4-blackfriday`, `lanzamiento-nueva-coleccion`).
- `utm_content`: variante creativa o enlace (`video-testimonio-a`, `boton-superior`).

### Plantilla o herramienta práctica replicable: Plan de Medición y Cuadro de Mando Semanal

| Área | KPI principal | Fuente del dato | Frecuencia revisión | Umbral de alerta | Acción si cae por debajo |
|---|---|---|---|---|---|
| **Negocio real** | Facturación neta y pedidos | ERP / Tienda | Semanal | < -10 % vs. objetivo | Revisar stock, precios y campañas |
| **Eficiencia global** | MER (`Ingresos / Inversión mkt`) | ERP + Plataformas | Semanal | < objetivo rentable | Auditar canales y creativos |
| **Adquisición** | Sesiones cualificadas por canal | GA4 (con UTM) | Semanal | Caída > 15 % canal top | Revisar CPC, SEO o etiquetas |
| **Conversión móvil** | CR Móvil vs. CR Escritorio | GA4 (segmentado) | Semanal | Brecha > 2x | Revisar grabaciones Clarity/UX |
| **Embudo PDP** | Tasa `view_item` → `add_to_cart` | GA4 | Quincenal | < estándar histórico | Auditar precio, stock y ficha |
| **Embudo Checkout** | Tasa `begin_checkout` → `purchase` | GA4 | Semanal | Abandono > umbral | Comprobar pasarela, envíos y errores |
| **Valor cliente** | Ticket medio (AOV) y % recompra | ERP / CRM | Mensual | Caída AOV > 8 % | Revisar *bundles* y envío gratis |

### Lecturas y recursos recomendados
- Kaushik, A. *Analítica Web 2.0: El arte de analizar resultados y la ciencia de centrarse en el cliente*. Gestión 2000 (referencia conceptual imprescindible sobre cultura de medición orientada a negocio).
- Documentación oficial de **Google Analytics 4 (Skillshop / Ayuda de GA4)** sobre configuración de eventos recomendados de comercio electrónico y atribución basada en datos.
- Guías prácticas de **Microsoft Clarity** y **Hotjar** sobre interpretación ética de mapas de calor y grabaciones de sesiones.

### Vídeos, artículos y fuentes adicionales *(requieren validación previa)*
> **Nota importante para el formador:** Dado que las interfaces de GA4, las políticas de cookies de terceros en navegadores y los requisitos legales de consentimiento cambian con rapidez, **verifique todas las guías técnicas y criterios de privacidad vigentes** antes de compartirlas en clase.
- **Google Analytics Demo Account (Google Merchandise Store):** recurso práctico excelente para navegar en directo en clase por datos reales de e-commerce en GA4 (verificar acceso activo antes de la sesión).
- **Guía vigente de Cookies y Consentimiento — AEPD:** revisar criterios aplicables a analítica web y exenciones vigentes en España.
- **Baymard Institute — Cart & Checkout Abandonment Rate Statistics:** verificar última actualización antes de citar porcentajes medios internacionales de abandono.

### Glosario de términos clave

| Término | Definición operativa |
|---|---|
| **Atribución basada en datos** | Modelo algorítmico que asigna crédito proporcional a cada punto de contacto según su contribución real a la conversión. |
| **Break-even ROAS** | Retorno mínimo sobre la inversión publicitaria necesario para cubrir el coste del producto y no perder dinero (`1 / Margen bruto %`). |
| **Conversiones asistidas** | Conversiones en las que un canal participó previamente en la ruta del comprador aunque no fuera el último clic. |
| **Evento clave (Conversión)** | Interacción de alto valor registrada en analítica (compra, envío de formulario, inicio de pago) alineada con objetivos comerciales. |
| **GA4 (Google Analytics 4)** | Plataforma de analítica web y app basada en un modelo de eventos y usuarios. |
| **Heatmap (Mapa de calor)** | Visualización gráfica agregada de clics, atención o profundidad de *scroll* en una página web. |
| **MER (*Marketing Efficiency Ratio*)** | Ingresos totales divididos por la inversión total en marketing en un periodo; mide la eficiencia agregada real. |
| **Parámetros UTM** | Etiquetas estándar añadidas a las URLs para identificar fuente, medio y campaña de cada visita. |
| **ROAS (*Return on Ad Spend*)** | Ingresos atribuidos a una campaña publicitaria divididos por su coste directo. |
| **ROPO (*Research Online, Purchase Offline*)** | Comportamiento por el cual el cliente investiga en canales digitales y culmina la compra en tienda física o por teléfono. |
| **Tasa de abandono de carrito** | Porcentaje de carritos iniciados que no finalizan en pedido completado. |
| **Tasa de interacción (*Engagement Rate*)** | Porcentaje de sesiones en las que el usuario interactúa de forma significativa (duración mínima, varias páginas o evento clave). |

---

## 9. Adaptaciones

### Sesión presencial (formato híbrido o in-company)
- Repartir las tablas impresas del caso *Calzado Artesanal Levante S.L.* junto con calculadoras o portátiles en grupos de 4 y proyectar un marcador en vivo comparando el cálculo de impacto económico de cada equipo.
- Mostrar en pantalla grande un recorrido real de 5 minutos por la cuenta demo de GA4 y un mapa de calor real de ejemplo.

### Sesión online síncrona (formato principal en directo del Global MBA)
- Compartir pantalla en vivo navegando por una cuenta demo de GA4 (informes de Adquisición de tráfico y Exploración de embudo) y por un ejemplo de mapa de calor en Clarity.
- Realizar la Actividad 2 en una hoja de Google Sheets con una pestaña por alumno o equipo para dar corrección inmediata sobre las fórmulas y las UTM.

### Sesión asíncrona (trabajo autónomo en campus virtual)
- Grabar 4 píldoras de vídeo (10-12 min) incluyendo un tutorial guiado de lectura de embudos en GA4 y creación de URLs UTM con Google Campaign URL Builder.
- Proponer un foro práctico sobre los 3 minicasos de la Actividad 1 donde cada alumno argumente su respuesta antes de ver la solución comentada en vídeo.
- Evaluar mediante entrega del *Plan de Medición y Cuadro de Mando* (Actividad 3) más el test objetivo con microejercicios de cálculo de embudo y *break-even ROAS*.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Proporciona el sistema de medición riguroso necesario para gobernar la rentabilidad por pedido (**Tema 1**), el rendimiento de la tienda web (**Tema 2**), las métricas móviles (**Tema 3**) y las tasas de paso del embudo comercial (**Tema 4**).
- **Competencias que desarrolla:** Pensamiento analítico orientado a negocio, auditoría de embudos digitales, asignación eficiente de presupuesto por atribución y dirección comercial basada en evidencias (*data-driven*).
- **Conexión con el tema anterior y posterior:**
  - *Tema anterior (Bloque 2, Tema 4 — De interesado a comprador):* Toma el embudo comercial definido en el Tema 4 y enseña a medirlo, atribuirlo y auditarlo cuantitativa y cualitativamente.
  - *Tema posterior (Bloque 2, Tema 6 — Experiencia de usuario):* Una vez que la analítica web señala exactamente en qué página, paso o dispositivo se pierden las ventas, el Tema 6 aporta la metodología de UX, usabilidad, accesibilidad, velocidad y CRO para corregir esas fugas.
- **Evidencia de aprendizaje que dejará el alumnado:** Un **Plan de Medición, Protocolo UTM y Cuadro de Mando Comercial de 1 página** listo para implantar y supervisar tanto internamente como con agencias externas.

---

## Siguientes pasos para el formador

1. **Comprobar acceso a la cuenta demo de GA4** (Google Merchandise Store) 24 horas antes de la sesión para realizar la demostración en vivo sin imprevistos.
2. **Verificar criterios vigentes de privacidad y cookies** (guía actual de la AEPD y Google Consent Mode) antes de comentar las discrepancias de medición.
3. **Subir al aula virtual** la hoja de cálculo *Práctica Embudo y UTM*, la plantilla *Plan de Medición* y el caso *Calzado Artesanal Levante S.L.*
4. **Preparar 2 capturas anonimizadas reales** de un mapa de calor de clics y un mapa de *scroll* para mostrar visualmente el valor de la analítica cualitativa.
5. **Anticipar el Tema 6:** Invitar al alumnado a traer para la próxima sesión la URL de una página clave de su negocio (o de un competidor) para evaluar su usabilidad, velocidad y conversión.
