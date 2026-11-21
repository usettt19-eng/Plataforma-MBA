# Tema 5. Big data y business intelligence (BI)

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Tema 5. Big data y business intelligence (BI) |
| **Bloque y posición dentro del programa** | Bloque 7: Transformación digital — Posición 5 de 8 |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Mandos intermedios y emprendedores |
| **Nivel de dificultad** | Intermedio |
| **Prerrequisitos** | Conocimientos sobre digitalización de procesos, fuentes de datos digitales e IoT (Bloque 7, Temas 1 a 4) |
| **Resultado general de aprendizaje** | Estructurar una estrategia de analítica y *Business Intelligence* (BI) orientada a la decisión directiva en pymes, integrando fuentes heterogéneas, definiendo KPIs accionables y diseñando cuadros de mando útiles sin caer en la parálisis por exceso de datos |

---

## 2. Objetivos de aprendizaje

Al finalizar este tema, el alumnado será capaz de:

1. **Diferenciar** entre *Small/Smart Data*, *Big Data* (las 5 V) y *Business Intelligence* (BI), identificando qué nivel de madurez analítica necesita realmente una pyme. *(Nivel de Bloom: Comprender)*
2. **Distinguir** entre los cuatro niveles de analítica empresarial (descriptiva, diagnóstica, predictiva y prescriptiva) y asociar cada uno a preguntas concretas de dirección. *(Nivel de Bloom: Analizar)*
3. **Formular** indicadores clave de desempeño (KPIs) accionables frente a métricas vanidosas, vinculándolos a responsables, umbrales de alerta y decisiones concretas. *(Nivel de Bloom: Aplicar)*
4. **Evaluar** la calidad y coherencia de un cuadro de mando (*dashboard*) detectando errores de diseño visual, sesgos de interpretación y problemas de gobierno del dato. *(Nivel de Bloom: Evaluar)*
5. **Diseñar** la arquitectura funcional y el prototipo en borrador (*wireframe*) de un cuadro de mando directivo u operativo conectado a las fuentes de datos reales de su negocio. *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Big Data frente a Smart Data y Business Intelligence en la pyme

- **Explicación breve y clara:** La mayoría de las pymes no tienen un problema de *Big Data* (petabytes de datos en tiempo real), sino un problema de **datos dispersos, sucios y sin explotar**. Comprender las características del *Big Data* (las 5 V: Volumen, Velocidad, Variedad, Veracidad y Valor) sirve sobre todo para valorar la **Variedad** (cruzar ERP, ecommerce, CRM, redes sociales y sensores) y la **Veracidad** (calidad) como base de un *Business Intelligence* (BI) eficaz que convierta datos en decisiones.
- **Conceptos clave:** Las 5 V del *Big Data*, *Smart Data*, *Business Intelligence (BI)*, almacén de datos (*Data Warehouse*), lago de datos (*Data Lake*), proceso ETL/ELT (Extraer, Transformar, Cargar).
- **Definiciones necesarias:**
  - *Business Intelligence (BI):* Conjunto de metodologías, procesos y herramientas (por ejemplo, Power BI, Looker Studio, Tableau, Metabase) que integran datos de diversas fuentes para analizarlos y visualizarlos como apoyo directo a la toma de decisiones empresariales.
  - *ETL / ELT:* Flujo automatizado que extrae datos de sistemas origen (ERP, TPV, CRM, tienda online, anuncios), los limpia y transforma bajo reglas comunes, y los carga en un repositorio analítico listo para consultar.
  - *Smart Data:* Enfoque que prioriza datos limpios, relevantes y directamente accionables sobre la acumulación masiva de información sin propósito.
- **Ejemplo práctico realista:** Una cadena de 6 restaurantes de comida saludable acumulaba datos de TPV, plataformas de reparto (Glovo/Uber Eats), reseñas de Google y compras a proveedores en archivos separados. No necesitaba infraestructura compleja de *Big Data*; implantó un proceso automatizado diario (ELT ligero) hacia una base analítica central y un cuadro de BI en la nube. Al cruzar comisiones de reparto, mermas por plato y clima del día, descubrió que dos platos «estrella en ventas» generaban margen negativo en canal *delivery* y rediseñó la carta recuperando rentabilidad en 6 semanas.
- **Errores frecuentes:**
  - Invertir en arquitecturas costosas de *Big Data* cuando el volumen total de la empresa cabe perfectamente en una base de datos relacional moderna en la nube.
  - Dejar que cada departamento construya su propio Excel de resultados con definiciones distintas de «venta neta» o «margen», generando discusiones estériles en el comité mensual.
  - Confundir comprar licencias de una herramienta de BI con tener una cultura basada en datos (*data-driven*).
- **Preguntas que el alumnado debería poder responder:**
  - ¿Cuál de las 5 V del *Big Data* suele ser el verdadero cuello de botella en una pyme y por qué?
  - ¿Qué problema resuelve un repositorio analítico centralizado frente a cruzar manualmente cinco hojas de cálculo cada mes?
  - ¿Por qué conviene unificar la definición de negocio de cada métrica («diccionario de KPIs») antes de construir gráficos?

### 3.2. La escalera analítica: de mirar el retrovisor a anticipar decisiones

- **Explicación breve y clara:** No toda la analítica responde a la misma pregunta. Las organizaciones maduran progresivamente desde saber qué pasó (descriptiva) y por qué pasó (diagnóstica), hasta anticipar qué ocurrirá (predictiva) y recomendar qué acción óptima ejecutar (prescriptiva). Saltar directamente a la analítica predictiva sin dominar una buena descriptiva y diagnóstica suele provocar modelos erróneos.
- **Conceptos clave:** Analítica descriptiva, analítica diagnóstica, analítica predictiva, analítica prescriptiva, análisis de cohortes, segmentación RFM (Recencia, Frecuencia, Valor Monetario), correlación frente a causalidad.
- **Definiciones necesarias:**
  - *Analítica descriptiva y diagnóstica:* La primera resume el estado actual e histórico («¿cuánto vendimos y qué margen tuvimos?»); la segunda profundiza en las causas mediante cruces y desgloses («¿por qué cayó el margen en la zona norte?»).
  - *Analítica predictiva y prescriptiva:* La predictiva estima escenarios futuros con probabilidad («qué clientes tienen mayor riesgo de baja el próximo trimestre»); la prescriptiva sugiere la mejor acción bajo restricciones («qué descuento máximo ofrecer a cada segmento para maximizar margen»).
  - *Correlación vs. causalidad:* Que dos variables se muevan juntas no implica que una cause la otra; confundir ambas lleva a decisiones comerciales o de inversión erróneas.
- **Ejemplo práctico realista:** Una empresa SaaS B2B de 25 empleados observa en su panel descriptivo que la cancelación mensual (*churn*) subió del 2 % al 4,2 %. Con analítica diagnóstica por cohortes descubre que el 75 % de las bajas ocurren en clientes que no completaron la configuración inicial en sus primeros 14 días. A partir de ahí, implementa una alerta predictiva sencilla: si un cliente nuevo lleva 7 días sin activar dos funciones clave, el equipo de *onboarding* interviene proactivamente.
- **Errores frecuentes:**
  - Quedarse atrapado eternamente en informes estáticos del pasado que llegan 20 días después de cerrar el mes, cuando ya no se puede corregir el rumbo.
  - Tomar decisiones basadas en promedios globales que ocultan extremos críticos (por ejemplo, una rentabilidad media del 12 % que esconde 3 líneas muy rentables y 2 líneas destruyendo caja).
  - Asumir causalidad sin contrastar con pruebas controladas o conocimiento operativo del negocio.
- **Preguntas que el alumnado debería poder responder:**
  - ¿En qué escalón analítico se encuentran hoy los informes de vuestra empresa y cuál sería el salto lógico siguiente?
  - ¿Por qué los promedios agregados pueden engañar a un mando intermedio?
  - ¿Cómo distinguirías en la práctica si un aumento de ventas se debe a una campaña digital o a un factor estacional?

### 3.3. Diseño de KPIs accionables y métricas que mueven el negocio

- **Explicación breve y clara:** Un buen KPI (*Key Performance Indicator*) no es cualquier número que podamos medir; es un indicador estrechamente vinculado a un objetivo estratégico, con propietario claro, frecuencia de revisión definida, umbral objetivo y **acción preacordada si se desvía**. Medir 40 métricas sin priorizar equivale a no medir ninguna.
- **Conceptos clave:** KPI vs. métrica operativa, métricas vanidosas (*vanity metrics*), indicadores adelantados (*leading*) vs. atrasados (*lagging*), árbol de KPIs (North Star + palancas), diccionario del dato.
- **Definiciones necesarias:**
  - *Métrica vanidosa (vanity metric):* Cifra que suele crecer y resulta atractiva en presentaciones (visitas web totales, seguidores, descargas acumuladas) pero que no correlaciona directamente con ingresos, margen ni retención ni orienta una decisión.
  - *Indicador adelantado (leading) vs. atrasado (lagging):* El indicador atrasado mide un resultado ya consumado (facturación mensual, beneficio, bajas); el adelantado mide una causa temprana sobre la que aún podemos actuar (tasa de entrega a tiempo, oportunidades cualificadas abiertas, días de rotación de stock).
- **Ejemplo práctico realista:** Un ecommerce de cosmética natural reportaba cada lunes «visitas web y seguidores en Instagram» (*vanity metrics*). El nuevo responsable de operaciones implantó un árbol de 6 KPIs reales: Margen de contribución neto tras envío y devoluciones (*lagging*), CAC vs. LTV, tasa de conversión cualificada, tasa de devolución por referencia (*leading*), días de inventario inmovilizado (*leading*) y tiempo medio de preparación de pedido. En dos meses detectó que una campaña con miles de visitas traía clientes con un 28 % de devoluciones que destruían el margen.
- **Errores frecuentes:**
  - Incluir más de 7-9 KPIs en un cuadro de mando ejecutivo, diluyendo el foco.
  - Medir solo resultados financieros pasados (*lagging*) sin indicadores operativos tempranos (*leading*).
  - Incentivar al equipo sobre un único KPI sin contrapeso (por ejemplo, premiar solo volumen de ventas sin margen ni morosidad, provocando descuentos agresivos y ventas incobrables).
- **Preguntas que el alumnado debería poder responder:**
  - ¿Cómo diferenciamos una métrica vanidosa de un KPI verdaderamente accionable?
  - ¿Por qué todo KPI principal debería ir acompañado de un KPI de contrapeso (por ejemplo, velocidad frente a calidad o ventas frente a margen)?
  - ¿Qué elementos mínimos debe contener la ficha de un KPI en un diccionario del dato?

### 3.4. Diseño de cuadros de mando (*dashboards*), visualización y gobierno del dato

- **Explicación breve y clara:** Un cuadro de mando eficaz debe permitir entender el estado del negocio en menos de 30 segundos y profundizar en las causas con dos clics. Esto requiere diseñar según el perfil del usuario (dirección general, mando operativo o analista), elegir el gráfico correcto para cada relación de datos y establecer un gobierno mínimo del dato (quién es responsable de cada fuente, permisos de acceso y frecuencia de actualización).
- **Conceptos clave:** *Dashboard* estratégico vs. táctico vs. operativo, jerarquía visual, *data storytelling*, sesgos visuales (ejes truncados, exceso de gráficos circulares), gobierno del dato (*Data Governance*), *data steward*.
- **Definiciones necesarias:**
  - *Gobierno del dato (Data Governance):* Conjunto de normas, roles y controles que aseguran que los datos de la empresa son precisos, coherentes, seguros y accesibles únicamente a quien corresponde.
  - *Dashboard estratégico vs. operativo:* El estratégico resume salud global y tendencias mensuales/semanales para dirección; el operativo monitoriza actividad diaria o casi en tiempo real (pedidos pendientes, incidencias abiertas, stock crítico) para actuar el mismo día.
- **Ejemplo práctico realista:** Una empresa de logística de última milla tenía un panel saturado con 18 gráficos de tarta y tablas de 200 filas que nadie abría. Al rediseñarlo en dos vistas separadas —una vista ejecutiva semanal (4 tarjetas KPI con variación vs. objetivo, 2 gráficos de tendencia y 1 desglose de margen por cliente) y una vista operativa diaria (alertas de retrasos en curso y ocupación por ruta)—, los jefes de tráfico pasaron a consultarlo cada mañana en reuniones de pie de 10 minutos.
- **Errores frecuentes:**
  - Utilizar gráficos circulares (quesitos) con más de 4 categorías o gráficos 3D que distorsionan la percepción visual.
  - Presentar números aislados sin contexto de comparación (sin objetivo, sin periodo anterior ni tendencia).
  - Construir el *dashboard* sin validar el origen de datos: si un comercial cambia manualmente una hoja origen, el panel se rompe o muestra cifras falsas y la dirección pierde la confianza para siempre.
- **Preguntas que el alumnado debería poder responder:**
  - ¿Qué tres preguntas debe responder un cuadro de mando directivo en los primeros 30 segundos de lectura?
  - ¿Por qué un número sin referencia (objetivo o periodo comparable) no sirve para tomar decisiones?
  - ¿Qué roles mínimos de gobierno del dato necesita una pyme sin crear un departamento burocrático?

---

## 4. Metodología didáctica (Secuencia de 4 horas / 240 minutos)

| Fase | Duración | Qué hace el formador | Qué hace el alumnado |
|---|---:|---|---|
| **1. Apertura y activación** | 25 min | Muestra un «*dashboard* desastroso» lleno de errores (métricas vanidosas, ejes truncados, 15 gráficos sin contexto) y dirige la Actividad 1 («Autopsia de un mal cuadro de mando»). | Detecta en parejas al menos 5 errores de decisión, cálculo o visualización en el panel proyectado y los comparte en plenario. |
| **2. Exposición breve / Microlearning I** | 35 min | Explica las 5 V del *Big Data* vs. *Smart Data*, arquitectura sencilla de BI en pymes (fuentes → ELT → modelo → visualización) y los 4 escalones analíticos con ejemplos de negocio. | Clasifica preguntas empresariales en los 4 niveles analíticos e identifica qué fuentes de datos existen dispersas en su empresa. |
| **3. Análisis de caso práctico** | 45 min | Presenta el caso *ModaNorte Retail S.L.* (datos fragmentados entre 14 tiendas, ecommerce y marketing, caída de margen oculta por promedios). Organiza grupos de 3-4 personas. | Analiza la tabla de datos de canales, stock y devoluciones, descubre dónde se destruye el margen y formula las preguntas clave de negocio que hoy no pueden responderse. |
| **4. Exposición breve / Microlearning II** | 30 min | Expone el diseño de KPIs accionables (*leading/lagging*, contrapesos, diccionario del dato), principios de visualización clara y gobierno mínimo del dato para pymes. | Depura métricas vanidosas convirtiéndolas en KPIs accionables y aplica reglas visuales al diseño de paneles. |
| **5. Actividad práctica de aplicación y transferencia** | 60 min | Facilita la Actividad 2 (Diccionario de 6 KPIs + boceto de *dashboard* ejecutivo para *ModaNorte*, 30 min) y la Actividad 3 (Diseño del Árbol de KPIs y *Wireframe* de *Dashboard* para su propia área/empresa, 30 min). | Construye el boceto visual del cuadro de mando del caso y luego diseña el suyo propio conectado a sus fuentes de datos reales, responsables y acciones ante desvíos. |
| **6. Discusión guiada y puesta en común** | 25 min | Aplica la «prueba de los 30 segundos»: proyecta o muestra 3-4 bocetos de *dashboards* del alumnado y el resto responde qué decisión tomarían mirando solo el boceto. | Evalúa la claridad visual y utilidad directiva de los paneles de sus compañeros, proponiendo simplificaciones y mejores comparativas. |
| **7. Síntesis, evaluación sumativa y cierre** | 20 min | Consolida las claves del BI rentable en pyme, aplica la evaluación sumativa y enlaza con el Tema 6 (Cloud computing: dónde alojar y escalar de forma segura y económica los datos, aplicaciones y analítica). | Realiza la prueba aplicada de cierre y registra una mejora inmediata para su reporte semanal/mensual actual. |
| **TOTAL** | **240 min** | | |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «Autopsia de un *dashboard* inútil»

- **Objetivo:** Reconocer errores frecuentes de métricas vanidosas, visualización engañosa y falta de contexto en los informes empresariales.
- **Instrucciones para el alumnado:**
  1. Observad durante 5 minutos el cuadro de mando ficticio proyectado («Informe Mensual Comercial» con 12 gráficos, quesito de 11 colores, eje Y cortado en 95 % para exagerar un crecimiento del 1 %, métrica de «impresiones totales» sin ventas, y sin objetivos ni periodo anterior).
  2. En parejas (7 min), listad todos los defectos que impiden tomar una decisión directiva fiable.
  3. En plenario (8 min), reconstruid verbalmente qué 4 indicadores únicos conservaríais si fuerais el director general.
- **Materiales necesarios:** Diapositiva o hoja impresa del «*Dashboard* desastroso».
- **Tiempo estimado:** 20 minutos (en la fase de Apertura).
- **Rol del formador:** Evidenciar que un panel visualmente «bonito» o complejo puede ser peligroso si induce a conclusiones falsas o no conecta con acciones.
- **Producto o entregable esperado:** Lista de al menos 5 defectos críticos detectados + propuesta de 4 KPIs sustitutivos.
- **Criterios de éxito:** Detección correcta de métricas vanidosas, ausencia de comparativa/objetivo y distorsiones gráficas.

### Actividad 2 (Aplicación): «Del caos de datos al cuadro de mando de ModaNorte Retail»

- **Objetivo:** Traducir un problema real de rentabilidad omnicanal en un diccionario de KPIs coherente y un prototipo visual de cuadro de mando de BI.
- **Instrucciones para el alumnado:**
  1. En equipos de 3-4 personas, revisad los datos de *ModaNorte Retail S.L.*.
  2. Seleccionad **6 KPIs imprescindibles** (combinando al menos 2 *lagging* y 2 *leading* + 1 KPI de contrapeso) y completad para cada uno: fórmula exacta, fuente de datos, propietario y umbral de alerta.
  3. Dibujad en una sola hoja (o lienzo digital) el **wireframe** del cuadro de mando semanal de dirección respetando la regla de los 30 segundos: máximo 4 tarjetas KPI superiores con variación vs. objetivo + 3 visualizaciones claras (sin tablas infinitas ni quesitos de más de 4 porciones).
- **Materiales necesarios:** Hoja de *wireframe* de *dashboard*, diccionario de KPIs y datos del caso práctico.
- **Tiempo estimado:** 30 minutos.
- **Rol del formador:** Exigir fórmulas precisas (por ejemplo, margen neto *después* de costes de envío, devoluciones y descuentos, no solo margen bruto sobre PVP) y corregir tipos de gráficos inadecuados.
- **Producto o entregable esperado:** Diccionario de 6 KPIs + boceto visual de 1 página de *dashboard* ejecutivo.
- **Criterios de éxito:** Coherencia con el problema de margen y stock del caso, ausencia de métricas vanidosas, claridad visual y vínculo directo con fuentes de datos.

### Actividad 3 (Transferencia a la realidad laboral): «Mi cuadro de mando accionable y mapa de fuentes»

- **Objetivo:** Diseñar un cuadro de mando propio (estratégico u operativo) listo para implantar en la empresa o emprendimiento del participante en herramientas accesibles de BI.
- **Instrucciones para el alumnado:**
  1. Definid el usuario principal de vuestro panel (vosotros como mando intermedio, dirección o equipo operativo) y la cadencia de reunión donde se usará (diaria/semanal/mensual).
  2. Completad la **Plantilla de Diseño de BI y Diccionario de KPIs** (sección 8): 5 KPIs clave (con fórmula, fuente actual, calidad del dato de 1 a 5, objetivo y acción automática si cae en rojo) + boceto visual del panel.
  3. Identificad qué 2 integraciones o limpiezas de datos hay que hacer primero para que el panel se actualice sin copiar y pegar manualmente en Excel cada semana.
- **Materiales necesarios:** Plantilla de Diseño de BI y Diccionario de KPIs (sección 8).
- **Tiempo estimado:** 30 minutos + 25 minutos de «prueba de los 30 segundos» en la fase 6.
- **Rol del formador:** Confrontar cada KPI con la pregunta: «Si este número baja un 15 % el próximo martes, ¿qué decisión exacta tomarías?». Si no hay respuesta concreta, el KPI sobra.
- **Producto o entregable esperado:** Especificación funcional + boceto de cuadro de mando propio listo para pasar a un consultor BI o construir en Power BI / Looker Studio.
- **Criterios de éxito:** KPIs con fórmulas inequívocas, realismo respecto a las fuentes de datos actuales, existencia de acciones asociadas a desvíos y claridad visual demostrada en la prueba de 30 segundos.

---

## 6. Caso práctico: ModaNorte Retail S.L.

### Contexto empresarial
**ModaNorte Retail S.L.** es una cadena pyme de moda urbana con sede en Bilbao, **68 empleados**, **14 tiendas físicas** en el norte de España y una tienda online (*ecommerce*) lanzada hace tres años. Factura 7,8 millones de euros anuales y sus ventas totales han crecido un 14 % respecto al año pasado, pero la tesorería y el beneficio neto han caído inesperadamente.

### Situación o problema
La dirección sospecha que el crecimiento del canal online y las promociones agresivas están ocultando fugas de rentabilidad, pero **tarda 18 días tras el cierre de cada mes** en recibir un informe manual en Excel. Además, marketing reporta «ROAS excelente» desde la plataforma publicitaria, logística se queja de avalancha de devoluciones, compras acumula stock parado en ciertas tallas mientras faltan tallas clave en las tiendas de mayor venta, y cada área maneja definiciones distintas de «venta neta» (con o sin devoluciones e IVA).

### Datos disponibles

| Área / Canal | Datos actuales fragmentados (últimos 12 meses) | Sistemas donde residen los datos |
|---|---|---|
| **Tiendas físicas (14 locales)** | Facturación bruta: 5,4 M€ (+3 %). Devoluciones: 6 %. Margen bruto medio: 58 %. Rotación de stock muy desigual entre tiendas (3 tiendas con roturas frecuentes de tallas M/L; 4 tiendas con exceso de inventario > 120 días). | Software TPV en tiendas + ERP central (sincronización nocturna con errores frecuentes de stock) |
| **Canal Ecommerce** | Facturación bruta: 2,4 M€ (+48 %). Tasa de devolución: **31 %** (especialmente en calzado y abrigos). Envío y devolución gratuitos asumidos por la empresa: coste logístico medio de 9,80 € por pedido devuelto. | Plataforma ecommerce (Shopify/PrestaShop) + Excel manual de operador logístico |
| **Marketing digital** | Inversión en anuncios: 340.000 €/año. La agencia reporta ROAS de 7x sobre **ventas brutas antes de devoluciones y descuentos**. | Paneles de Meta Ads, Google Ads y Google Analytics (sin cruzar con devoluciones del ERP) |
| **Trabajo manual de reporting** | 2 personas de administración dedican 36 horas cada mes a descargar 9 archivos CSV y cruzarlos manualmente en hojas de cálculo; errores frecuentes de fórmulas. | Carpetas locales y correos electrónicos |
| **Presupuesto disponible para proyecto BI** | 12.000 € de implantación inicial + hasta 450 €/mes en licencias/conectores en la nube. | Sin equipo interno de programación (1 perfil financiero hábil con datos) |

### Preguntas de análisis
1. ¿Por qué el crecimiento del 48 % en ecommerce y el ROAS de 7x reportado por la agencia están engañando a la dirección?
2. Calculad de forma aproximada el impacto de las devoluciones en la venta neta online y en el coste logístico (asumiendo un ticket medio orientativo de 80 € por pedido para ver la magnitud, o expresándolo porcentualmente sobre ventas brutas).
3. ¿Qué arquitectura sencilla de BI (fuentes → integración ELT → diccionario único → cuadros de mando) propondríais dentro del presupuesto de 12.000 € + 450 €/mes?
4. ¿Qué dos cuadros de mando diferenciados diseñaríais (uno semanal para dirección y otro operativo para tiendas/compras/marketing) y qué 6 KPIs clave incluiríais para frenar la fuga de margen?

### Tarea a realizar
En equipos de 3-4 personas, preparad una propuesta ejecutiva para la dirección de ModaNorte Retail S.L. que incluya:
1. Diagnóstico del problema de datos, definiciones contradictorias y fuga de rentabilidad.
2. Diccionario de 6 KPIs unificados (con definición única para toda la empresa) que corrijan los incentivos perversos entre marketing, ecommerce y tiendas.
3. Propuesta de arquitectura BI pragmática para pyme (sin sobreingeniería *Big Data*) y plan de implantación en 90 días dentro del presupuesto.

### Posibles soluciones o criterios de análisis
- **Diagnóstico financiero y analítico clave:**
  - Sobre 2,4 M€ de ventas brutas online, una tasa de devolución del 31 % implica ~744.000 € devueltos; las ventas netas reales bajan a ~1,656 M€. El ROAS real sobre venta neta cae de 7x a **~4,87x** (y mucho peor si se mide sobre margen de contribución tras logística de envío/devolución).
  - Con un ticket orientativo de 80 € (30.000 pedidos brutos), 9.300 devoluciones a 9,80 € suponen ~91.000 € directos en logística inversa (más coste de envío inicial no recuperado y deterioro/reacondicionamiento de prendas), erosionando severamente el margen neto.
  - Además, la falta de visibilidad unificada de inventario impide traspasar tallas sobrantes de tiendas lentas a tiendas con rotura de stock.
- **Solución técnica y de gobierno pragmática:**
  - No requiere plataforma *Big Data* compleja: basta un conector ELT ligero en la nube que integre automáticamente ERP, TPV, ecommerce, operador logístico y plataformas Ads en una base de datos analítica central, conectada a una herramienta de BI estándar (Power BI / Looker Studio / Tableau) —totalmente viable dentro de 12.000 € de implantación inicial + < 450 €/mes.
  - Designar al perfil financiero analítico como *data steward* interno y aprobar un **Diccionario Único de KPIs** (la venta neta siempre descuenta IVA y devoluciones; marketing se mide por **POAS — Profit on Ad Spend** o margen neto tras devoluciones, no por ROAS bruto).
- **KPIs imprescindibles propuestos:** (1) Margen de contribución neto por canal y familia tras logística/devoluciones, (2) Tasa de devolución por referencia/talla/campaña (*leading*), (3) POAS / Margen neto publicitario, (4) Días de inventario y % de stock inmovilizado > 90 días por tienda, (5) Tasa de rotura de tallas clave en tiendas *top*, (6) Plazo de disponibilidad del dato (pasar de 18 días a actualización diaria automática).

### Preguntas de reflexión final
- ¿Qué pasará cuando la agencia de marketing descubra que ya no se la evalúa por ventas brutas sino por margen neto tras devoluciones?
- ¿Qué incentivos perversos similares existen hoy en vuestra organización por medir departamentos en silos?

---

## 7. Evaluación

### Evaluación diagnóstica breve (al inicio)
Sondeo de 3 preguntas:
1. ¿Cuántos días tarda tu empresa en conocer con fiabilidad el margen real del mes cerrado? (< 3 días / 4-10 días / > 10 días / No se calcula con precisión por línea).
2. Cuando dos áreas presentan cifras distintas de ventas o costes en una reunión, ¿por qué suele ocurrir? (Respuesta breve).
3. ¿Cuál de estos es un KPI accionable y cuál una métrica vanidosa? («Descargas totales de la app» vs. «Tasa de retención activa a 30 días»).

### Evaluación formativa durante la sesión
- Análisis colectivo en la Actividad 1 («Autopsia de un *dashboard* inútil»).
- Revisión directa de fórmulas y contrapesos en el diccionario de KPIs de *ModaNorte* (Actividad 2).
- «Prueba de los 30 segundos» con retroalimentación entre compañeros sobre los bocetos de cuadros de mando propios (fase 6).

### Evaluación sumativa al final
1. Entrega del **Diseño de Cuadro de Mando Accionable y Diccionario de 5 KPIs** (Actividad 3) aplicado a la empresa o proyecto propio.
2. Cuestionario de 5 ítems prácticos (5 V del Big Data en pymes, niveles analíticos, distinción *leading/lagging*, detección de métrica vanidosa y elección del gráfico adecuado).

### Rúbrica de evaluación (para el Diseño de Cuadro de Mando y Diccionario de KPIs)

| Criterio | Insuficiente (1) | En desarrollo (2) | Adecuado (3) | Destacado (4) |
|---|---|---|---|---|
| **Selección y formulación de KPIs** | Incluye métricas vanidosas o fórmulas ambiguas sin relación clara con objetivos. | Mezcla métricas útiles con secundarias; faltan fórmulas exactas o equilibrio *leading/lagging*. | Selecciona 5 KPIs accionables con fórmulas inequívocas, combinando indicadores *leading*, *lagging* y contrapesos. | Construye un árbol de KPIs coherente con objetivos estratégicos, umbrales realistas y acciones concretas predefinidas ante desvíos. |
| **Viabilidad de fuentes y calidad del dato** | No identifica de dónde salen los datos ni cómo se actualizan. | Nombra sistemas de origen pero omite problemas de limpieza, integración o refresco manual. | Identifica fuentes reales, evalúa calidad actual del dato y propone automatización realista (ELT ligero / conectores). | Define responsabilidades de gobierno del dato (*data steward*), frecuencia de actualización óptima y plan para eliminar Excels paralelos. |
| **Claridad visual y usabilidad (*wireframe*)** | Panel saturado, gráficos inadecuados o números sin contexto comparable. | Diseño comprensible pero sobrecargado o sin objetivos/variaciones claros. | Aplica jerarquía visual limpia, tipos de gráficos adecuados y comparativas claras (supera la prueba de 30 segundos). | *Dashboard* ejemplar adaptado al rol del usuario y cadencia de reunión, facilitando pasar de la visión global al diagnóstico en 2 clics. |
| **Orientación a la decisión de negocio** | El panel solo informa del pasado sin conectar con acciones operativas. | Sugiere acciones genéricas ante desviaciones («revisar ventas»). | Vincula cada alerta roja del panel con un responsable y una decisión operativa específica. | Demuestra cómo el cuadro de mando transforma rutinas de dirección y evita incentivos perversos entre departamentos. |

### Actividad de autoevaluación o reflexión
«Audita tu próximo informe» (5 min): el alumnado revisa mentalmente el último informe o Excel que presentó a su jefe o equipo y escribe: (a) qué 2 datos eliminaría porque nadie decide nada con ellos, (b) qué 1 indicador *leading* o de margen neto añadiría y (c) qué fuente de datos necesita unificar para dejar de copiar y pegar manualmente.

---

## 8. Materiales y recursos

### Guion de diapositivas (estructura slide por slide)

1. **Portada:** Bloque 7 · Tema 5. Big Data y Business Intelligence (BI) para decidir con rigor.
2. **Activación:** Autopsia de un *dashboard* inútil — 10 formas de mentir (sin querer) con gráficos.
3. **¿Big Data o Smart Data?** Las 5 V explicadas para pymes: por qué Variedad y Veracidad importan más que el Volumen.
4. **Arquitectura BI sin complicaciones:** Sistemas origen (ERP/CRM/TPV) → ELT automatizado → Base analítica → Cuadro de mando.
5. **La escalera analítica:** Descriptiva → Diagnóstica → Predictiva → Prescriptiva (qué pregunta responde cada nivel).
6. **La trampa de los promedios y de la correlación:** Ejemplos reales donde el promedio oculta pérdidas.
7. **Caso práctico:** *ModaNorte Retail S.L.* — +14 % ventas, menos caja y un ROAS engañoso.
8. **KPIs frente a métricas vanidosas:** Indicadores *leading*, *lagging* y KPIs de contrapeso.
9. **El Diccionario Único del Dato:** Cómo acabar con las guerras de Excels en el comité de dirección.
10. **Visualización que guía decisiones:** La regla de los 30 segundos y guía rápida de qué gráfico usar según el mensaje (tendencia, comparación, composición, distribución).
11. **Gobierno mínimo del dato en pyme:** Propietarios, permisos, calidad y cadencia de reuniones basadas en datos.
12. **Taller práctico:** Diccionario de KPIs y *wireframe* de cuadro de mando propio.
13. **Prueba de los 30 segundos:** Crítica constructiva de prototipos en plenario.
14. **Síntesis y puente al Tema 6:** Para almacenar datos, ejecutar procesos ELT y compartir BI sin servidores lentos ni costes fijos rígidos, necesitamos comprender el Cloud Computing.

### Ficha de trabajo
Documento de 2 páginas con:
- Imagen del «*Dashboard* desastroso» para auditar (Actividad 1).
- Guía de bolsillo de selección visual (Línea = tendencia temporal; Barras horizontales = ranking/comparación; Dispersión = relación entre 2 variables; Tarjeta KPI = valor actual + % vs. objetivo + tendencia; Evitar = tartas > 4 segmentos, 3D, ejes truncados).

### Plantilla práctica replicable: Diccionario de KPIs y *Wireframe* de Cuadro de Mando

**Parte A — Diccionario de KPIs (5-6 indicadores clave)**

| KPI | Tipo (*Leading / Lagging*) | Fórmula exacta | Fuente de datos y calidad (1-5) | Frecuencia | Meta / Umbral rojo | Propietario y acción si entra en rojo |
|---|---|---|---|---|---|---|
| Ej. Margen neto tras devoluciones | *Lagging* | (Ventas netas - COGS - Logística ida/vuelta - Ads) / Ventas netas | ERP + Logística + Ads (Calidad: 3/5) | Semanal | Meta ≥ 24 % / Rojo < 19 % | Dir. Ecommerce: pausar SKUs con devolución > 25 % |
| 1. | | | | | | |
| 2. | | | | | | |
| 3. | | | | | | |
| 4. | | | | | | |
| 5. | | | | | | |

**Parte B — Esquema de *Wireframe* (1 pantalla / 30 segundos)**
- **Franja superior (Vista rápida):** 4 tarjetas KPI (Cifra actual + Δ vs. Objetivo + Δ vs. año anterior).
- **Franja central (Tendencia y diagnóstico):** 2 gráficos principales (evolución temporal + desglose por canal/producto/tienda).
- **Franja inferior (Acción operativa):** 1 tabla corta de «Top 5 alertas/excepciones que requieren actuación esta semana» + filtros clave (fecha, canal, categoría).

### Lecturas o recursos recomendados
- Nussbaumer Knaflic, C. *Storytelling with Data: A Data Visualization Guide for Business Professionals*. Wiley (referencia práctica imprescindible sobre visualización clara).
- Few, S. *Information Dashboard Design*. Analytics Press (principios de ergonomía visual en cuadros de mando).
- Marr, B. *Key Performance Indicators (KPI): The 75 Measures Every Manager Needs to Know*. Pearson.

### Vídeos, artículos y fuentes adicionales *(Validación previa obligatoria)*
> **Nota importante para el formador:** Validar precios de licencias, interfaces vigentes y enlaces antes de impartir la sesión.
- Comparar antes de clase las tarifas y capacidades vigentes para pymes de herramientas habituales de BI (Microsoft Power BI, Google Looker Studio, Tableau, Metabase) y conectores ELT ligeros, para ofrecer referencias realistas de coste.
- Validar 2 ejemplos visuales reales de cuadros de mando (uno sobrecargado y otro limpio y bien diseñado) procedentes de galerías públicas actualizadas.
- Revisar requisitos vigentes de protección de datos (RGPD) aplicables al cruce de datos de clientes y segmentación analítica en entornos de BI.

### Glosario de términos clave

| Término | Definición operativa |
|---|---|
| **Analítica predictiva** | Uso de modelos estadísticos o de *machine learning* sobre históricos para estimar resultados o riesgos futuros. |
| ***Business Intelligence (BI)*** | Disciplina y herramientas que transforman datos empresariales en información visual para apoyar decisiones. |
| ***Data steward*** | Responsable funcional encargado de velar por la calidad, definición coherente y buen uso de los datos de un dominio. |
| ***Data Warehouse*** | Repositorio centralizado y estructurado de datos históricos integrado desde varias fuentes para su análisis. |
| **Diccionario del dato** | Documento maestro que fija la definición, fórmula exacta y fuente oficial de cada indicador de la empresa. |
| ***ETL / ELT*** | Procesos automatizados de extracción, transformación y carga de datos desde los sistemas operativos al entorno analítico. |
| **Indicador *leading / lagging*** | *Leading* anticipa resultados futuros y permite corregir a tiempo; *lagging* mide resultados pasados ya cerrados. |
| **Métrica vanidosa** | Dato vistoso en apariencia que no ayuda a tomar decisiones ni refleja la salud económica real del negocio. |
| ***POAS (Profit on Ad Spend)*** | Beneficio bruto o de contribución generado por cada euro invertido en publicidad, más riguroso que el ROAS bruto. |

---

## 9. Adaptaciones para modalidad híbrida

### Sesión presencial
- Entregar el *wireframe* en formato A3 para los equipos en la Actividad 2 y colgar los bocetos en la pared durante la «prueba de los 30 segundos», cronometrando exactamente medio minuto con un temporizador visible.
- Usar tarjetas físicas de colores para clasificar ejemplos de métricas en «*Leading*», «*Lagging*» o «Vanidosa».

### Sesión online síncrona
- Diseñar el *wireframe* del cuadro de mando directamente en Miro/FigJam o diapositiva compartida usando bloques arrastrables preparados (tarjetas KPI, gráficos de línea, barras y tabla de alertas).
- Si hay conexión y tiempo en el microlearning I, mostrar durante 3 minutos un panel interactivo real de demostración (con datos ficticios en Power BI o Looker Studio) haciendo 2 clics de filtrado para ilustrar el paso de analítica descriptiva a diagnóstica.

### Sesión asíncrona (trabajo previo y posterior en plataforma LMS)
- **Pre-trabajo (20 min):** Cada participante trae anotados 3 indicadores que actualmente sigue en su puesto y cuánto tiempo dedica al mes a preparar o recopilar reportes.
- **Post-trabajo (30 min):** Subida al LMS del Diccionario de 5 KPIs + *wireframe* refinado tras la prueba de 30 segundos + ejercicio breve de detección de errores sobre 3 gráficos en el cuestionario del LMS.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Da salida ejecutiva a los datos generados en los **Temas 1 a 4** (procesos digitalizados con SSOT, modelos predictivos de IA, telemetría de sensores IoT y registros confiables), conectándolos además con indicadores financieros y comerciales de bloques anteriores.
- **Competencias que desarrolla:** Alfabetización en datos (*data literacy*), pensamiento analítico causal, diseño de sistemas de control de gestión mediante KPIs y comunicación visual efectiva para la toma de decisiones.
- **Conexión dentro del plan de 10 bloques:**
  - *Tema anterior (Bloque 7, Tema 4 — Blockchain):* Tras abordar cómo asegurar la integridad y confianza de datos compartidos entre actores, ahora se aborda cómo consolidarlos y explotarlos para gobernar el negocio con visibilidad.
  - *Tema posterior (Bloque 7, Tema 6 — Cloud computing):* Las herramientas modernas de BI, los repositorios de datos, la IA y las aplicaciones SaaS operan mayoritariamente sobre infraestructura en la nube; comprender IaaS, PaaS, SaaS, costes y migración es el paso lógico inmediato.
- **Evidencia de aprendizaje que dejará el alumnado:** Un **Diccionario de 5 KPIs accionables y el *wireframe* de un cuadro de mando propio** (validado en la prueba de 30 segundos) junto con su mapa de fuentes de datos.

---

## Siguientes pasos para el formador

1. **Preparar el «*Dashboard* desastroso»:** Diseñar una diapositiva de alto impacto visual con al menos 6 errores clásicos deliberados (quesito de 11 porciones, eje Y truncado, métrica vanidosa, sin comparativa, escala confusa, exceso de texto) para abrir la sesión con humor y agudeza.
2. **Validar referencias actuales de herramientas BI:** Comprobar precios vigentes y opciones gratuitas/pyme de Power BI, Looker Studio y conectores ELT antes de clase.
3. **Tener resuelta la cuenta numérica de ModaNorte:** Revisar los cálculos del ROAS bruto vs. neto y el coste logístico de devoluciones para guiar con soltura a los grupos menos financieros.
4. **Tender el puente al Tema 6:** Cerrar preguntando: «Si queremos conectar tiendas, ecommerce, analítica e IA sin comprar servidores propios que se queden pequeños en rebajas o caigan en un pico de demanda, ¿cómo diseñamos la infraestructura? Bienvenidos al Cloud Computing».
