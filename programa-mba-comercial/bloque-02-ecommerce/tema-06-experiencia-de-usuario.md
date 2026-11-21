# Tema 6. Experiencia de usuario

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Tema 6. Experiencia de usuario |
| **Bloque y posición dentro del programa** | Bloque 2: E-commerce — Tema 6 de 9 (Global MBA en Dirección Comercial y Ventas, 90 ECTS · 14 meses) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Directores comerciales, gerentes de ventas, emprendedores y profesionales de marketing y negocio |
| **Nivel de dificultad** | Intermedio |
| **Prerrequisitos** | Haber completado los Temas 2 (*Tienda web*) y 5 (*Analítica web*) o disponer de conocimientos equivalentes sobre tiendas online y embudos de conversión |
| **Resultado general de aprendizaje** | Auditar y optimizar la experiencia de usuario (UX) de un negocio digital —integrando usabilidad, arquitectura de información, diseño centrado en el usuario, accesibilidad, velocidad de carga, test de usabilidad y metodología CRO— para incrementar la conversión y la satisfacción del cliente. |

---

## 2. Objetivos de aprendizaje

Al finalizar este tema, el alumnado será capaz de:

1. **Evaluar** la usabilidad y la arquitectura de información de un sitio web o e-commerce aplicando principios heurísticos de diseño centrado en el usuario *(Nivel de Bloom: Evaluar)*.
2. **Diagnosticar** barreras de accesibilidad digital y problemas de velocidad de carga (*Core Web Vitals*) que penalizan la experiencia de compra, el alcance comercial y el cumplimiento legal *(Nivel de Bloom: Analizar)*.
3. **Planificar** y ejecutar un test de usabilidad ágil (*guerrilla testing* / prueba con 5 usuarios) para detectar fricciones reales invisibles para el equipo interno *(Nivel de Bloom: Aplicar)*.
4. **Formular** hipótesis estructuradas de optimización de la conversión (CRO) priorizadas por impacto, confianza y esfuerzo *(Nivel de Bloom: Crear)*.
5. **Diseñar** una hoja de ruta trimestral de mejora UX/CRO vinculada a indicadores medibles de conversión, ticket medio y reducción de soporte *(Nivel de Bloom: Crear)*.

---

## 3. Contenidos esenciales

### 3.1 Diseño centrado en el usuario, usabilidad y arquitectura de información

#### Explicación breve y clara
La experiencia de usuario (UX) no es "hacer una web bonita", sino diseñar un entorno digital en el que el cliente cumpla su objetivo (encontrar, comparar, confiar y comprar) con el mínimo esfuerzo cognitivo posible. En muchas pymes el diseño se aprueba según el gusto personal de la dirección ("me gusta este color y este vídeo de fondo"), olvidando al comprador real. El diseño centrado en el usuario (DCU), la usabilidad y una arquitectura de información clara eliminan dudas, reducen abandonos y aumentan directamente la rentabilidad de cada euro invertido en tráfico.

#### Conceptos clave
- **Diseño Centrado en el Usuario (DCU):** Proceso iterativo que parte de investigar necesidades, contexto y tareas reales del comprador antes de diseñar pantallas.
- **Usabilidad (principios heurísticos aplicados a e-commerce):** visibilidad del estado del sistema (¿se añadió al carrito?), lenguaje del usuario (no jerga interna), consistencia, prevención de errores en formularios, claridad visual y facilidad para deshacer acciones.
- **Arquitectura de Información (AI):** Cómo se estructuran, etiquetan y conectan los contenidos (menús, migas de pan / *breadcrumbs*, jerarquía visual y flujos de tareas) para que el usuario sepa siempre dónde está, de dónde viene y adónde puede ir.
- **Carga cognitiva y Ley de Hick:** Cuantas más opciones irrelevantes, banners parpadeantes y botones competidores hay en una pantalla, más tarda el cliente en decidir y mayor es la probabilidad de abandono.

#### Definiciones necesarias
- **Experiencia de usuario (UX):** Percepción y respuesta global de una persona derivada del uso —o uso anticipado— de un producto, sistema o servicio digital, abarcando utilidad, facilidad de uso, eficiencia, confianza y satisfacción.
- **Usabilidad:** Grado en que un sitio web o aplicación puede ser utilizado por usuarios específicos para alcanzar objetivos concretos con eficacia, eficiencia y satisfacción en un contexto determinado.
- **Arquitectura de información (AI):** Disciplina encargada de organizar, estructurar y etiquetar el contenido y los flujos de un entorno digital para facilitar la comprensión y la localización rápida de la información.

#### Ejemplo práctico realista
Una pyme de seguros médicos y de viaje online tenía una página de contratación con 14 campos simultáneos, textos legales en gris claro y 3 botones del mismo color ("Calcular", "Guardar", "Ver condiciones"). Al rediseñar el flujo bajo principios de DCU —dividiéndolo en 3 pasos breves con barra de progreso, un único botón principal destacado y explicación clara de qué cubre cada modalidad en lenguaje llano—, las cotizaciones completadas crecieron un 41 % sin cambiar tarifas ni campañas.

#### Errores frecuentes
- Confundir diseño estético (UI llamativa con animaciones pesadas) con buena UX orientada a ventas.
- Usar etiquetas creativas o internas en el menú ("Universo", "Soluciones 360") en lugar de términos claros que el comprador reconoce al instante.
- Validar la web únicamente entre empleados de la propia empresa, quienes padecen la "maldición del conocimiento" y ya saben cómo funciona todo.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué diferencia práctica existe entre la interfaz visual (UI) y la experiencia de usuario (UX) en un negocio digital?
2. ¿Cómo afecta la carga cognitiva excesiva en una ficha de producto o formulario a la tasa de conversión?
3. ¿Qué técnicas sencillas (como el *card sorting* o el árbol de categorías) ayudan a validar la arquitectura de información con clientes reales?

---

### 3.2 Accesibilidad digital y velocidad de carga (*Web Performance*)

#### Explicación breve y clara
Dos pilares técnicos de la UX suelen quedar olvidados en las pymes hasta que dañan las ventas: la **velocidad de carga** y la **accesibilidad**. Una web lenta expulsa a usuarios móviles impacientes antes siquiera de ver tu oferta y empeora tu posicionamiento SEO y el coste por clic en anuncios. Por su parte, la accesibilidad garantiza que cualquier persona —incluyendo usuarios mayores, personas con baja visión, daltonismo, dificultades motoras o navegación con luz solar intensa— pueda comprar con facilidad, además de responder a exigencias normativas europeas crecientes.

#### Conceptos clave
- **Velocidad de carga y *Core Web Vitals* (Google):**
  - **LCP (*Largest Contentful Paint*):** tiempo que tarda en mostrarse el contenido principal visible (objetivo recomendado: ≤ 2,5 segundos; *verificar umbrales vigentes en documentación oficial de Google*).
  - **INP (*Interaction to Next Paint*):** rapidez con la que la página responde visualmente cuando el usuario pulsa un botón o menú (objetivo orientativo: ≤ 200 ms).
  - **CLS (*Cumulative Layout Shift*):** estabilidad visual (evitar que los botones "salten" mientras cargan imágenes o anuncios y el usuario pulse donde no quería).
- **Principales culpables de lentitud en pymes:** imágenes sin comprimir (archivos de 3-5 MB en vez de formatos modernos WebP/AVIF de < 150 KB), exceso de *plugins* y scripts de terceros, servidores compartidos saturados y fuentes tipográficas excesivas.
- **Accesibilidad digital (estándar WCAG — principios POUR: Perceptible, Operable, Comprensible, Robusto):** contraste suficiente entre texto y fondo, tipografía legible (≥ 16 px en cuerpo), etiquetas claras fuera de los campos de formulario, textos alternativos (`alt`) en imágenes, navegación por teclado y mensajes de error explicativos (no solo poner un borde rojo).
- **Marco normativo de accesibilidad:** La normativa europea sobre requisitos de accesibilidad para productos y servicios digitales (Directiva UE 2019/882 — *European Accessibility Act* y su transposición en España, Ley 11/2023) introduce obligaciones relevantes para el comercio electrónico *(nota: el formador debe verificar el estado exacto de vigencia, exenciones para microempresas y requisitos aplicables en España antes de impartir)*.

#### Definiciones necesarias
- **Core Web Vitals:** Conjunto de métricas estandarizadas por Google que evalúan la experiencia real de carga, capacidad de respuesta e estabilidad visual de una página web.
- **Accesibilidad web:** Práctica de diseñar y desarrollar sitios digitales de modo que todas las personas —con independencia de sus capacidades visuales, auditivas, motoras o cognitivas, o del dispositivo utilizado— puedan percibir, comprender, navegar y comprar sin barreras.
- **CLS (*Cumulative Layout Shift*):** Medida de los desplazamientos inesperados de elementos en pantalla durante la carga, una de las mayores fuentes de frustración en móvil.

#### Ejemplo práctico realista
Una tienda online de parafarmacia con público mayoritariamente mayor de 50 años tenía un contraste gris claro sobre blanco, tipografía de 12 px y un carrusel de portada con cinco fotografías sin comprimir que tardaba 6,8 segundos en cargar en conexión 4G móvil. Al sustituir el carrusel por una sola imagen optimizada en WebP, ampliar la tipografía a 16 px con alto contraste, eliminar 9 *plugins* inactivos y mejorar el contraste de botones, el LCP bajó a 2,1 segundos, la tasa de abandono antes de cargar cayó drásticamente y las llamadas telefónicas pidiendo ayuda para comprar se redujeron a la mitad.

#### Errores frecuentes
- Comprobar la velocidad de la web solo desde el ordenador de la oficina conectado por fibra óptica, ignorando cómo carga en un móvil de gama media con 4G.
- Usar textos de marcador (*placeholder*) dentro de los campos de formulario en lugar de etiquetas fijas visibles (al escribir desaparece qué dato pedía el campo).
- Considerar la accesibilidad únicamente como un trámite para una minoría, sin ver que mejora la usabilidad y conversión de toda la población (especialmente clientes sénior con alto poder adquisitivo).

#### Preguntas que el alumnado debería poder responder
1. ¿Qué miden exactamente LCP, INP y CLS y cómo los percibe un comprador real en su teléfono móvil?
2. ¿Cuáles son las tres optimizaciones más rápidas y económicas para acelerar una tienda online lenta?
3. ¿Por qué mejorar la accesibilidad digital (contraste, tamaño de letra, formularios claros) suele incrementar las ventas incluso entre usuarios sin discapacidad declarada?

---

### 3.3 Test de usabilidad ágiles para pymes

#### Explicación breve y clara
Muchos directivos creen que hacer un test de usabilidad requiere un laboratorio con espejos unidireccionales y miles de euros. En realidad, observar en directo durante 20 minutos a **5 personas representativas de tu público objetivo** intentando completar 3 tareas reales en tu web (en remoto por videollamada o presencialmente) descubre la inmensa mayoría de los fallos críticos de usabilidad con coste casi cero. El objetivo no es preguntar "¿te gusta la web?", sino observar **qué hace** el usuario sin ayudarlo.

#### Conceptos clave
- Tipos prácticos de test de usabilidad:
  - **Test moderado remoto o presencial (5 usuarios):** el estándar más rentable para pymes; permite ver pantalla, escuchar en voz alta (*think aloud*) y detectar dudas inmediatas.
  - **Test de pasillo / guerrilla:** pruebas rápidas de 10 minutos sobre prototipos antes de pagar el desarrollo técnico.
  - **Test no moderado:** mediante plataformas donde los participantes graban su pantalla completando tareas predefinidas.
- Protocolo en 5 pasos para un test riguroso:
  1. Definir 3-4 tareas realistas y con escenario (ej.: "Busca unas gafas graduadas para lectura de menos de 100 € y llega hasta el paso previo al pago").
  2. Reclutar 5 participantes que encajen con el cliente objetivo (no empleados ni diseñadores).
  3. Pedir que piensen en voz alta (*think aloud*) dejando claro que "se evalúa la web, no a ti".
  4. Observar en silencio sin dar pistas; anotar bloqueos, errores, tiempo y verbalizaciones.
  5. Priorizar los hallazgos por severidad (Crítico: impide comprar / Alto: genera gran fricción / Menor: cosmético).

#### Definiciones necesarias
- **Test de usabilidad:** Técnica de investigación cualitativa en la que usuarios reales intentan realizar tareas concretas en un sitio web o prototipo mientras un observador registra dificultades, errores y comprensión.
- **Protocolo *Think Aloud* (pensar en voz alta):** Método por el cual el participante verbaliza continuamente lo que espera encontrar, lo que entiende y lo que le confunde mientras navega.
- **Sesgo de confirmación / pregunta inductiva:** Error del moderador al guiar la respuesta del participante (p. ej., preguntar "¿ves el botón verde arriba a la derecha?") invalidando la prueba.

#### Ejemplo práctico realista
Una pyme de reservas de casas rurales en Asturias observaba pocas reservas desde móvil. Realizó 5 videollamadas de 15 minutos con clientes potenciales (compensados con un vale de 25 € de descuento). En 4 de las 5 sesiones, los usuarios no lograban seleccionar fechas de entrada y salida en el calendario porque requería doble toque y el botón "Comprobar disponibilidad" quedaba fuera de pantalla. Ningún informe de analítica había explicado exactamente ese fallo; arreglar el selector de fechas costó 600 € y multiplicó las reservas móviles en el primer mes.

#### Errores frecuentes
- Preguntar "¿te gusta el diseño?" en lugar de observar si logra completar una tarea de compra.
- Interrumpir al usuario en cuanto duda ("pulsa ahí, en el icono de arriba"), impidiendo ver la gravedad real del problema.
- Hacer el test solo cuando el rediseño completo ya está programado y pagado, en lugar de probar prototipos sencillos antes de desarrollar.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué probar con 5 usuarios bien seleccionados suele ser suficiente para descubrir los mayores bloqueos de usabilidad en una pyme?
2. ¿Qué reglas debe cumplir el moderador durante un test de usabilidad para no contaminar los resultados?
3. ¿Cómo transformarías un listado de 15 problemas observados en un test en un plan de corrección priorizado?

---

### 3.4 Optimización de la conversión (CRO) y experimentación sistemática

#### Explicación breve y clara
La Optimización de la Tasa de Conversión (**CRO — *Conversion Rate Optimization***) es el puente metódico entre analítica web, experiencia de usuario y resultados financieros. En lugar de hacer cambios a ciegas ("probemos a poner el botón rojo"), el CRO sigue un ciclo científico: investigar (cuantitativo + cualitativo), formular una hipótesis clara, priorizar qué merece probarse primero (matriz ICE o PIE), ejecutar la mejora o test A/B y medir el impacto real sobre ventas y margen.

#### Conceptos clave
- El ciclo de 5 fases del CRO:
  1. **Investigar:** datos de embudo (GA4) + grabaciones/heatmaps + encuestas + test de usabilidad + feedback de atención al cliente.
  2. **Hipotetizar:** estructura formal: *"Dado que [evidencia observada], creemos que [cambio propuesto] para [segmento] producirá [resultado medible] porque [razón psicológica/UX]."*
  3. **Priorizar (Framework ICE / PXL):** puntuar **Impacto** (potencial en ingresos), **Confianza** (fuerza de la evidencia) y **Esfuerzo / Facilidad** (*Ease* — coste técnico y tiempo).
  4. **Implementar o Testar (Test A/B):** ejecutar test A/B cuando el volumen de tráfico y conversiones permite validez estadística, o desplegar cambios directos monitorizados ("antes vs. después" controlado) en pymes con menor tráfico *(advertencia metodológica: sin suficiente volumen mensual de conversiones, un test A/B puede arrojar falsos positivos; usar calculadoras de tamaño muestral antes de lanzar)*.
  5. **Aprender e iterar:** documentar ganadores y perdedores en un repositorio de aprendizaje.
- Palancas CRO de alto impacto en pymes: claridad de propuesta de valor *above the fold*, simplificación de formularios, transparencia de costes y plazos, pruebas sociales contextualizadas y optimización de la velocidad móvil.

#### Definiciones necesarias
- **CRO (*Conversion Rate Optimization*):** Proceso sistemático basado en datos e investigación de usuarios cuyo objetivo es aumentar el porcentaje de visitantes que completan una acción de valor (compra, registro, solicitud de contacto) y mejorar los ingresos por visitante.
- **Matriz ICE:** Herramienta sencilla de priorización que ordena ideas de optimización según su **Impacto**, **Confianza** y **Facilidad** (*Ease*) en escala de 1 a 10.
- **Validez estadística (en Test A/B):** Grado de certeza matemática de que la diferencia observada entre la variante A (control) y la variante B (tratamiento) se debe al cambio introducido y no al azar.

#### Ejemplo práctico realista
Una pyme de colchones y descanso online recibía 14.000 sesiones mensuales y 210 ventas (1,5 % conversión). En lugar de cambiar colores de botones al azar, aplicó CRO priorizado con ICE: detectó en encuestas de salida que el 46 % dudaba de si podría devolver un colchón ya desembalado. Formuló la hipótesis de destacar "100 noches de prueba con recogida gratuita a domicilio" justo debajo del botón de compra y en el checkout. En un test A/B de 4 semanas, la variante ganó claramente elevando la conversión del 1,5 % al 1,85 %, lo que supuso casi 50 ventas adicionales al mes (ticket medio 480 €).

#### Errores frecuentes
- Copiar "trucos CRO" de blogs (contadores falsos de urgencia, ventanas emergentes agresivas) que destruyen la confianza de marca y pueden vulnerar normativa de prácticas comerciales desleales *(verificar normativa de consumo sobre patrones oscuros / dark patterns)*.
- Detener un test A/B a los 3 días porque la variante B va ganando con apenas 15 conversiones.
- Optimizar solo tasa de conversión reduciendo el precio a costa de desplomar el margen o el ticket medio (mejor vigilar **ingresos/margen por visitante**).

#### Preguntas que el alumnado debería poder responder
1. ¿Qué elementos obligatorios debe contener una hipótesis CRO bien redactada?
2. ¿Cuándo conviene a una pyme realizar un test A/B y cuándo es más sensato implementar directamente la mejora UX (por ejemplo, corregir un fallo grave de usabilidad o cuando el tráfico es bajo)?
3. ¿Por qué "ingresos por visitante" o "margen por visitante" suele ser mejor métrica final de CRO que la simple tasa de conversión?

---

## 4. Metodología didáctica

Secuencia de 4 horas (240 minutos) práctica, centrada en auditar interfaces reales, diseñar test de usabilidad y construir un *backlog* CRO priorizado.

| Fase | Tiempo | Qué hace el formador | Qué hace el alumnado |
|---|---:|---|---|
| **1. Apertura y activación** | 25 min | Conecta con el Tema 5 y lanza la Actividad 1 (*Test de los 5 segundos + Diagnóstico de velocidad PageSpeed* sobre 2 webs reales). | Evalúa en 5 segundos qué vende cada web, mide su rendimiento móvil en PageSpeed Insights y detecta las primeras barreras UX. |
| **2. Exposición breve / microlearning (Parte A)** | 40 min | Expone apartados 3.1 y 3.2 (DCU, heurísticas de usabilidad, arquitectura de información, accesibilidad WCAG y *Core Web Vitals*). | Contrasta ejemplos reales visuales de buena/mala accesibilidad y velocidad; anota fallos replicables a su negocio. |
| **3. Exposición breve / microlearning (Parte B)** | 35 min | Expone apartados 3.3 y 3.4 (protocolo de test de usabilidad con 5 usuarios, ciclo CRO, redacción de hipótesis y matriz ICE). | Practica la redacción de 1 hipótesis CRO bien estructurada y analiza los límites estadísticos del test A/B en pymes. |
| **4. Análisis de caso práctico** | 50 min | Presenta el caso *Óptica Visión Clara S.L.* Dinamiza equipos para auditar sus problemas de UX, accesibilidad, velocidad y diseñar el plan de test y *backlog* CRO. | En equipo, evalúa las evidencias cuantitativas/cualitativas del caso, redacta un guion de test de usabilidad y prioriza 6 hipótesis con matriz ICE. |
| **5. Actividad práctica de aplicación y transferencia** | 45 min | Facilita la Actividad 2 (simulación exprés de test de usabilidad en parejas de 10 min) y la Actividad 3 (Auditoría Heurística y *Backlog* CRO para su empresa). | Ejecuta un micro-test de usabilidad real observando a un compañero sin ayudarlo y construye su hoja de ruta CRO trimestral. |
| **6. Discusión guiada** | 25 min | Modera el intercambio de aprendizajes del micro-test y debate las prioridades ICE del caso práctico. | Comparte lo que le sorprendió al observar a otro usuario real y defiende qué 3 acciones ejecutaría primero. |
| **7. Síntesis y cierre** | 20 min | Consolida las claves UX/CRO ético (sin *dark patterns*), administra la evaluación sumativa breve y enlaza con el Tema 7 (*Campañas digitales*). | Realiza la prueba corta final y la ficha de autoevaluación UX. |
| **TOTAL** | **240 min** | | |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Test de los 5 segundos y chequeo de velocidad móvil
- **Objetivo:** Experimentar de forma inmediata cómo la claridad de propuesta, la accesibilidad visual y la velocidad condicionan la primera impresión comercial.
- **Instrucciones para el alumnado:**
  1. El formador muestra durante exactamente **5 segundos** la pantalla inicial móvil de una tienda real y la oculta. Cada alumno escribe en el chat: a) qué vende la empresa, b) qué la diferencia y c) qué botón pulsaría primero.
  2. A continuación (8 min), cada participante introduce la URL de su propia empresa (o de una pyme elegida) en una herramienta gratuita de velocidad (como *Google PageSpeed Insights*) y revisa la puntuación móvil, el LCP y el principal aviso de mejora.
  3. Compartimos 3 hallazgos rápidos en plenario (7 min).
- **Materiales necesarios:** Navegador web y acceso a *PageSpeed Insights* (o captura preparada por el formador).
- **Tiempo estimado:** 20 minutos (en Fase 1).
- **Rol del formador:** Demostrar la distancia entre lo que creemos que "está clarísimo" en nuestra web y lo que realmente percibe un cliente en 5 segundos con conexión móvil.
- **Producto o entregable esperado:** Diagnóstico instantáneo de claridad (5 segundos) + lectura real de rendimiento móvil (LCP/CLS).
- **Criterios de éxito:** Identificación concreta de al menos un fallo de claridad visual y un freno técnico de velocidad móvil.

### Actividad 2 (Aplicación): Micro-test de usabilidad en parejas (*Think Aloud*)
- **Objetivo:** Practicar el rol de moderador de un test de usabilidad evitando sesgos y preguntas inductivas.
- **Instrucciones para el alumnado:**
  1. En parejas (en sala reducida o presencialmente), el Participante A actúa como moderador y el Participante B como usuario real sobre una web comercial asignada (o la web de la empresa de A).
  2. A entrega a B **1 tarea concreta** (p. ej.: "Encuentra un producto de regalo por menos de 60 €, comprueba cuándo llega y qué pasa si tienes que devolverlo").
  3. Durante 6 minutos, B navega compartiendo pantalla y pensando en voz alta mientras A **solo observa, toma notas y nunca da pistas**.
  4. Al terminar, 4 minutos de intercambio de roles o puesta en común de las 2 fricciones más llamativas detectadas.
- **Materiales necesarios:** Navegador con pantalla compartida y ficha de registro de severidad (Crítico / Alto / Menor).
- **Tiempo estimado:** 20 minutos (parte de Fase 5).
- **Rol del formador:** Supervisar que los moderadores no interrumpan ni defiendan su web ("es que eso está arriba a la izquierda") mientras el usuario prueba.
- **Producto o entregable esperado:** Lista de 3 hallazgos reales observados clasificados por severidad.
- **Criterios de éxito:** Moderación neutral sin preguntas inductivas y documentación precisa de comportamientos observados (no opiniones).

### Actividad 3 (Transferencia a la realidad laboral): Auditoría UX y *Backlog* CRO Priorizado (ICE)
- **Objetivo:** Crear un plan de mejora UX/CRO trimestral directamente aplicable a la web o tienda online de la empresa del alumno.
- **Instrucciones para el alumnado:**
  1. Audita 3 pantallas clave de tu negocio (Home o Landing, Ficha/Servicio y Formulario/Checkout) en móvil usando la *Checklist Heurística y de Accesibilidad* (Sección 8).
  2. Formula **5 hipótesis CRO estructuradas** (Evidencia → Cambio → Segmento → Resultado medible → Porqué).
  3. Priorízalas en la *Matriz ICE* (Impacto, Confianza, Facilidad del 1 al 10) e indica cuáles se implementarán directamente (correcciones obvias UX/velocidad) y cuáles se validarán mediante test A/B.
- **Materiales necesarios:** *Checklist Heurística UX* y *Plantilla Backlog CRO (ICE)*.
- **Tiempo estimado:** 25 minutos en sesión + finalización asíncrona para la entrega sumativa.
- **Rol del formador:** Revisar la calidad de las hipótesis (que partan de evidencia, no de ocurrencias) y el realismo de la puntuación de esfuerzo técnico.
- **Producto o entregable esperado:** Documento de Auditoría UX + *Backlog* CRO de 5 hipótesis priorizadas con calendario a 90 días.
- **Criterios de éxito:** Hipótesis completas y medibles, puntuación ICE justificada y diferenciación correcta entre corrección directa UX y experimento A/B.

---

## 6. Caso práctico

### Óptica Visión Clara S.L.: lentitud móvil, accesibilidad deficiente y un configurador de graduación que ahuyenta clientes

#### Contexto empresarial
**Óptica Visión Clara S.L.** es una cadena regional de 6 ópticas en Andalucía con 26 empleados y una facturación anual de 2,9 millones de euros. Hace 18 meses lanzó su tienda online para vender gafas graduadas (ticket medio 138 €), gafas de sol y lentillas de reposición, buscando ampliar ventas en toda España y captar clientes locales con cita en tienda.

#### Situación o problema
El e-commerce recibe 34.000 visitas mensuales (76 % desde móvil), pero su tasa de conversión es solo del **0,65 %** en gafas graduadas (frente al 2,4 % en lentillas de reposición). Una auditoría preliminar combinando GA4, *PageSpeed Insights* y 40 comentarios recogidos por el equipo de atención al cliente revela cuatro bloqueos críticos:
1. **Velocidad y estabilidad móvil:** La portada y las fichas cargan un probador virtual pesado automáticamente en todas las páginas, disparando el LCP móvil a **6,4 segundos** y un CLS de **0,38** (los botones saltan mientras carga el probador).
2. **Accesibilidad deficiente para su público clave:** El 55 % de los compradores de gafas graduadas tiene más de 45 años (presbicia / vista cansada), pero la web usa tipografía fina de 13 px en color gris medio sobre fondo crema y formularios sin etiquetas externas visibles.
3. **Configurador de graduación abrumador:** Para elegir cristales, la web despliega una sola pantalla con 12 términos técnicos oftalmológicos ("esfera OD/OI", "cilindro", "eje", "distancia interpupilar", "índice 1.67 asférico") sin explicaciones visuales ni opción de "Enviar foto de mi receta después". El **79 % de los usuarios que entran al configurador abandona ahí**.
4. **Propuestas internas sin método:** La dirección de diseño quiere gastar 15.000 € en un rediseño estético completo de la marca y cambiar los colores corporativos, sin haber hecho ni un solo test de usabilidad ni plan CRO.

#### Datos disponibles

| Indicador UX / Negocio de Óptica Visión Clara S.L. | Situación actual | Estándar / Objetivo a 6 meses |
|---|---:|---:|
| Visitas mensuales (móvil / escritorio) | 34.000 (76 % móvil) | 36.000 |
| LCP móvil (carga principal) | 6,4 segundos | ≤ 2,5 segundos |
| CLS móvil (estabilidad visual) | 0,38 (malo) | ≤ 0,10 |
| Contraste y tamaño de letra móvil | 13 px, bajo contraste | ≥ 16 px, contraste WCAG AA |
| Abandono en paso de configurador de graduación | 79 % | ≤ 45 % |
| Tasa de conversión gafas graduadas | 0,65 % (~130 pedidos/mes) | ≥ 1,35 % (~270 pedidos/mes) |
| Consultas telefónicas/WhatsApp pidiendo ayuda con la receta | 420 / mes | Reducir fricción o convertirlas en soporte asistido |
| Presupuesto disponible para UX/CRO (6 meses) | 12.000 € | Priorizar mayor retorno comercial |

*(Nota metodológica: datos simulados con finalidad exclusivamente docente).*

#### Preguntas de análisis
1. ¿Por qué gastar 15.000 € en un "rediseño estético completo" sería una mala decisión frente a un plan iterativo de UX y CRO con el presupuesto de 12.000 €?
2. ¿Cómo rediseñarías el flujo del configurador de graduación para reducir drásticamente la carga cognitiva y bajar el abandono del 79 % al 45 %?
3. Diseña un protocolo ágil de **test de usabilidad con 5 usuarios** (perfil de participantes, 3 tareas concretas y criterios de observación) para validar el nuevo configurador antes de programarlo.
4. Elabora una **Matriz ICE** con 5 acciones/hipótesis prioritarias (combinando velocidad, accesibilidad, configurador y prueba social/soporte), señalando cuáles son arreglos directos de UX y cuáles se validarán mediante test A/B.

#### Tarea a realizar
En equipos de 4 personas, asumid el rol de Responsables de Transformación Digital y UX y preparad un **Plan de Choque UX/CRO a 6 meses** que incluya:
1. Diagnóstico priorizado de problemas críticos (velocidad, accesibilidad y arquitectura del configurador).
2. Nuevo flujo paso a paso del configurador de gafas graduadas (máximo 4 pasos simples).
3. Guion resumido del test de usabilidad con 5 personas mayores de 45 años.
4. *Backlog* CRO de 5 hipótesis puntuadas con ICE y estimación de ingresos adicionales si se cumple el objetivo de conversión.

#### Posibles soluciones o criterios de análisis
- **Freno al rediseño estético total:** Un rediseño completo desde cero suele consumir todo el presupuesto, introduce nuevos errores desconocidos y no resuelve la causa raíz (velocidad, accesibilidad y complejidad del configurador). Un enfoque iterativo UX/CRO sobre los cuellos de botella medidos recupera la inversión en pocas semanas.
- **Arreglos directos inmediatos (sin necesidad de test A/B):**
  - Cargar el probador virtual solo bajo demanda (al pulsar "Probar en mi rostro") y comprimir imágenes a WebP para bajar LCP de 6,4 s a < 2,5 s y estabilizar CLS < 0,10.
  - Subir tipografía base a 16-17 px, alto contraste WCAG AA (negro/gris oscuro sobre blanco) y etiquetas claras en formularios (cumpliendo además criterios de accesibilidad digital vigentes —verificar obligaciones aplicables según tamaño de empresa en España—).
- **Rediseño del configurador de graduación (en 4 pasos sencillos):** Paso 1: ¿Para qué las usas? (Lejos / Lectura / Progresivas / Sin graduación). Paso 2: Tipo de cristal explicado en beneficios cotidianos (Estándar / Finos ligeros / Filtro luz azul o sol) recomendando una opción destacada. Paso 3: Introduce tu receta con **3 vías sin fricción**: a) subir foto de la receta del óptico, b) escribirla con guía visual de ayuda, o c) "Te ayudamos gratis tras el pedido por WhatsApp o en óptica". Paso 4: Resumen claro con garantía de adaptación de 30 días.
- **Test de usabilidad:** Reclutar 5 personas de entre 45 y 65 años que usen gafas (con móvil propio y su receta real en papel) para probar un prototipo clicable (Figma o maqueta simple) antes de programar.
- **Impacto económico:** Pasar de 130 a 270 pedidos/mes de gafas graduadas (+140 pedidos × 138 € AOV) representa **+19.320 €/mes** (+231.840 €/año en ventas brutas), amortizando los 12.000 € de inversión en menos de 2 meses de margen bruto.

#### Preguntas de reflexión final
1. ¿En qué situaciones una pyme debería decir "no" a un rediseño web total y apostar por mejoras quirúrgicas de UX basadas en datos?
2. ¿Cómo convencerías a un director general acostumbrado a juzgar la web por "si le parece bonita" para que pruebe la web con 5 clientes reales?

---

## 7. Evaluación

### Evaluación diagnóstica breve (inicio de sesión, 5 min)
3 preguntas rápidas:
1. ¿Has observado alguna vez en directo (sin intervenir) a un cliente real intentando comprar en tu web desde el móvil? (Sí / No).
2. ¿Conoces cuánto tarda en cargar tu página principal en un teléfono móvil con datos 4G? (< 2,5 s / 2,5-5 s / > 5 s / No lo sé).
3. ¿Crees que tu web cumple hoy criterios básicos de contraste, legibilidad y facilidad de uso para clientes mayores de 50 años? (Sí / Parcial / No).

### Evaluación formativa durante la sesión
- Diagnóstico en vivo del *Test de los 5 segundos* y *PageSpeed Insights* (Actividad 1).
- Observación directa de la neutralidad y calidad de registro durante el micro-test en parejas (Actividad 2).
- Revisión del flujo del configurador y de la matriz ICE en el caso *Óptica Visión Clara S.L.*

### Evaluación sumativa al final del tema
1. **Prueba objetiva breve (30 %):** 10 preguntas sobre principios de usabilidad, arquitectura de información, *Core Web Vitals* (LCP/INP/CLS), accesibilidad WCAG, protocolo de test de usabilidad y metodología CRO (hipótesis e ICE).
2. **Entregable práctico (70 %):** *Auditoría UX/Accesibilidad + Backlog CRO de 5 Hipótesis Priorizadas (ICE)* aplicado a la web/tienda real del alumnado (Actividad 3).

### Rúbrica de evaluación del entregable práctico

| Criterio | Insuficiente (0 - 4,9) | En desarrollo (5 - 6,9) | Adecuado (7 - 8,9) | Destacado (9 - 10) |
|---|---|---|---|---|
| **1. Auditoría de usabilidad y arquitectura (25 %)** | Opiniones estéticas subjetivas ("no me gusta el color") sin criterio heurístico ni evidencia. | Identifica algunos fallos visibles, pero sin analizar arquitectura de información ni flujos móviles. | Aplica con rigor la checklist heurística en móvil, detectando fricciones claras de navegación y carga cognitiva. | Presenta diagnóstico UX profundo apoyado en capturas, evidencia de comportamiento y visión centrada en el buyer persona. |
| **2. Diagnóstico de velocidad y accesibilidad (25 %)** | Omite el rendimiento web y la accesibilidad o cita conceptos incorrectos. | Mide velocidad básica o menciona accesibilidad de forma general sin soluciones concretas. | Analiza *Core Web Vitals* reales y barreras concretas de accesibilidad (contraste, formularios, legibilidad) proponiendo correcciones viables. | Combina diagnóstico técnico-comercial impecable con soluciones de alto impacto y atención al marco normativo vigente de accesibilidad. |
| **3. Calidad de las hipótesis CRO y test de usabilidad (25 %)** | Ideas sueltas sin estructura de hipótesis ni validación con usuarios. | Redacta hipótesis incompletas (sin métrica o sin evidencia previa) o propone tests mal planteados. | Formula 5 hipótesis CRO completas (Evidencia-Cambio-Segmento-Métrica-Razón) e integra validación con usuarios reales. | Formula hipótesis sobresalientes enfocadas en ingresos/margen por visitante y distingue rigurosamente cuándo testar A/B y cuándo corregir directamente. |
| **4. Priorización ICE y hoja de ruta (25 %)** | Lista plana sin priorización, plazos ni criterio de recursos. | Aplica puntuación ICE de forma arbitraria sin justificación ni calendario. | Prioriza coherentemente con ICE y diseña una hoja de ruta trimestral viable para una pyme. | Entrega un plan UX/CRO ejecutivo listo para alinear negocio, diseño y desarrollo, con estimación de retorno y cultura de aprendizaje continuo. |

### Actividad de autoevaluación y reflexión
Reflexión escrita breve (3 minutos):
- *El mayor hallazgo al observar a otra persona navegar sin darle pistas ha sido:* ______________________
- *Una mejora rápida de velocidad o accesibilidad que podemos implementar este mes:* ______________________
- *Una decisión de diseño en mi empresa que dejaremos de tomar "por gusto personal" para validarla con datos o usuarios:* ______________________

---

## 8. Materiales y recursos

### Guion de diapositivas estructurado (slide por slide)

| Slide | Título | Contenido clave y recurso visual | Tiempo aprox. |
|---:|---|---|---:|
| 1 | Portada: Tema 6. Experiencia de usuario | Título, Bloque 2 (6/9), Global MBA en Dirección Comercial y Ventas. | 2 min |
| 2 | Objetivos del tema | 5 objetivos Bloom: de una web "bonita" a una experiencia rentable y sin barreras. | 3 min |
| 3 | Activación: Test de los 5 segundos + PageSpeed | Ejercicio en vivo sobre claridad inicial y velocidad móvil real. | 5 min |
| 4 | UX vs. UI y Diseño Centrado en el Usuario | Diferencia práctica y coste comercial de diseñar desde el gusto interno. | 10 min |
| 5 | Usabilidad y Arquitectura de Información | Heurísticas aplicadas a e-commerce, carga cognitiva, Ley de Hick y claridad de menús. | 10 min |
| 6 | Velocidad de carga (*Core Web Vitals*) | Esquema visual de LCP, INP y CLS y top 5 de frenos técnicos en pymes. | 10 min |
| 7 | Accesibilidad digital como palanca comercial y legal | Principios POUR (WCAG), mejoras de alto impacto y referencia normativa europea *(verificar vigencia)*. | 10 min |
| 8 | Test de usabilidad ágil con 5 usuarios | Protocolo en 5 pasos, *Think Aloud*, cómo evitar sesgos y clasificación de severidad. | 12 min |
| 9 | Metodología CRO paso a paso | Ciclo Investigar → Hipotetizar → Priorizar (ICE) → Testar/Implementar → Aprender. | 12 min |
| 10 | Redacción de hipótesis, Test A/B y ética CRO | Plantilla de hipótesis, cuándo no usar test A/B en pymes y rechazo a *dark patterns*. | 11 min |
| 11 | Caso práctico: Óptica Visión Clara S.L. | Datos de lentitud, accesibilidad y abandono del 79 % en el configurador. | 5 min |
| 12 | Talleres aplicados (Act. 2 y Act. 3) | Micro-test en parejas y construcción del *Backlog* CRO con Matriz ICE. | 5 min |
| 13 | Síntesis y puente al Tema 7 | Por qué optimizar la UX multiplica el retorno de cualquier campaña (*Tema 7. Campañas digitales*). | 5 min |

### Ficha de trabajo: Checklist Heurística y de Accesibilidad Rápida (Móvil)
Marca **Sí / Parcial / No** revisando tu web desde un smartphone:
1. En 5 segundos queda claro qué vendes y por qué elegirte. [ ]
2. El menú y el buscador son accesibles con el pulgar y usan el vocabulario del cliente. [ ]
3. El texto principal tiene tamaño ≥ 16 px y contraste cómodo al sol. [ ]
4. Las páginas clave cargan rápido (LCP ≤ 2,5 s) y los botones no saltan al cargar (CLS ≤ 0,10). [ ]
5. Los formularios tienen etiquetas visibles fuera de la caja, pocos campos y mensajes de error claros. [ ]
6. Todos los costes, plazos y políticas clave se entienden antes de iniciar el pago. [ ]
7. Existen ayudas claras en pasos complejos (tallas, compatibilidad, graduación, medidas). [ ]

### Plantilla o herramienta práctica replicable: Matriz de Priorización CRO (ICE)

| ID | Hipótesis CRO (Evidencia + Cambio + Métrica esperada) | Tipo (Arreglo UX / Test A/B) | Impacto (1-10) | Confianza (1-10) | Facilidad (1-10) | Media ICE | Prioridad |
|---|---|---|---:|---:|---:|---:|---:|
| H1 | Dado que el LCP móvil es 6,4 s por el probador automático, cargarlo bajo demanda bajará el rebote y elevará conversión | Arreglo UX directo | 9 | 9 | 8 | **8,7** | 1 |
| H2 | Dado que el 79 % abandona el configurador técnico, añadir la opción "Subir foto de receta" elevará los pedidos completados | Test A/B / Piloto | 10 | 8 | 7 | **8,3** | 2 |
| H3 | Dado el bajo contraste (13 px), pasar a 16 px WCAG AA reducirá errores de formulario en > 45 años | Arreglo UX directo | 7 | 9 | 9 | **8,3** | 3 |
| H4 | ... | ... | __ | __ | __ | __ | __ |

### Lecturas y recursos recomendados
- Krug, S. *Hazlo fácil (Rocket Surgery Made Easy): Guía práctica para hacer test de usabilidad sin complicaciones*. Anaya Multimedia.
- Norman, D. *El diseño de los objetos cotidianos* (*The Design of Everyday Things*). Capitán Swing (obra fundacional sobre usabilidad y diseño centrado en el usuario).
- Goward, C. *You Should Test That! Conversion Optimization for More Leads, Sales and Profit or The Art and Science of Optimized Marketing*. Sybex.

### Vídeos, artículos y fuentes adicionales *(requieren validación previa)*
> **Nota importante para el formador:** Compruebe la vigencia técnica de los umbrales de *Core Web Vitals* y la normativa europea/española de accesibilidad digital antes de impartir la sesión.
- **Google PageSpeed Insights y web.dev (Core Web Vitals):** consultar umbrales vigentes de LCP, INP y CLS en `web.dev/vitals`.
- **W3C — Web Content Accessibility Guidelines (WCAG 2.1 / 2.2):** verificar versión estándar vigente y herramientas gratuitas de comprobación de contraste (p. ej., WebAIM Contrast Checker).
- **Ley 11/2023 (transposición de la Directiva UE 2019/882 de accesibilidad):** verificar plazos de aplicación, obligaciones y exenciones vigentes para pymes/microempresas de comercio electrónico en España antes de exponer implicaciones legales.
- **Calculadora de tamaño muestral para Test A/B (p. ej., Evan Miller / CXL):** validar enlace operativo para demostrar por qué las pymes necesitan tráfico suficiente antes de testar cambios menores.

### Glosario de términos clave

| Término | Definición operativa |
|---|---|
| **Above the fold** | Parte inicial de la pantalla que ve el usuario inmediatamente al cargar una página sin necesidad de hacer *scroll*. |
| **Accesibilidad web (WCAG)** | Conjunto de pautas internacionales para garantizar que los sitios digitales sean perceptibles, operables, comprensibles y robustos para todas las personas. |
| **Arquitectura de información** | Organización estructural, jerarquía y etiquetado de contenidos y navegación en un entorno digital. |
| **CLS (*Cumulative Layout Shift*)** | Métrica de estabilidad visual que mide desplazamientos inesperados de elementos durante la carga. |
| **CRO (*Conversion Rate Optimization*)** | Metodología sistemática basada en investigación y experimentación para incrementar el porcentaje de visitantes que convierten. |
| **Dark Patterns (Patrones oscuros)** | Prácticas de diseño engañosas o manipuladoras (urgencia falsa, costes ocultos, cancelación difícil) que perjudican al usuario y conllevan riesgos reputacionales y legales. |
| **DCU (Diseño Centrado en el Usuario)** | Enfoque de diseño iterativo basado en las necesidades, tareas y comportamientos reales del comprador. |
| **INP (*Interaction to Next Paint*)** | Métrica de *Core Web Vitals* que mide la latencia de respuesta visual tras una interacción del usuario. |
| **LCP (*Largest Contentful Paint*)** | Métrica que mide el tiempo hasta que se renderiza el elemento visual principal de la página. |
| **Matriz ICE** | Sistema de priorización de iniciativas CRO según Impacto, Confianza y Facilidad (*Ease*). |
| **Test de usabilidad** | Evaluación observacional con usuarios reales realizando tareas concretas para detectar barreras de uso. |
| **Think Aloud** | Técnica de test de usabilidad en la que el participante expresa en voz alta sus pensamientos mientras interactúa con la interfaz. |

---

## 9. Adaptaciones

### Sesión presencial (formato híbrido o in-company)
- Realizar la Actividad 2 sentado físicamente al lado del compañero observando cómo navega en su smartphone real (lo que permite ver incluso los gestos con el pulgar y expresiones de confusión).
- Usar post-its físicos de tres colores (Crítico / Alto / Menor) para construir en la pared el mapa de hallazgos del caso *Óptica Visión Clara S.L.*

### Sesión online síncrona (formato principal en directo del Global MBA)
- En la Actividad 1, usar temporizador visible en pantalla para el *Test de los 5 segundos* y recoger respuestas simultáneas en el chat con la técnica *chat waterfall* (todos escriben y pulsan enviar a la vez).
- En la Actividad 2, emparejar al alumnado en *breakout rooms* de 2 personas con compartición de pantalla obligatoria y 1 aviso de tiempo al minuto 6 para cambiar de rol.

### Sesión asíncrona (trabajo autónomo en campus virtual)
- Grabar 4 microvídeos (10-12 min) incluyendo una demostración real en pantalla analizando una web en *PageSpeed Insights*, comprobando contraste WCAG y rellenando una Matriz ICE.
- Para la Actividad 2 asíncrona, pedir al alumno que realice un micro-test de 10 minutos con un familiar, amigo o cliente que encaje en su público objetivo y suba un resumen de 3 hallazgos al foro.
- Evaluar mediante la entrega de la *Auditoría UX + Backlog CRO (ICE)* y el cuestionario objetivo en la plataforma.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Convierte los diagnósticos numéricos de embudo y mapas de calor del **Tema 5 (*Analítica web*)** y los requisitos funcionales del **Tema 2 (*Tienda web*)** y **Tema 3 (*Aplicaciones móviles*)** en mejoras tangibles de diseño, accesibilidad, velocidad y conversión.
- **Competencias que desarrolla:** Pensamiento centrado en el cliente, auditoría de experiencias digitales, dirección de proyectos UX/CRO basados en evidencias y priorización eficiente de recursos técnicos limitados.
- **Conexión con el tema anterior y posterior:**
  - *Tema anterior (Bloque 2, Tema 5 — Analítica web):* La analítica indica *dónde* cae la conversión; este Tema 6 aporta el método para descubrir *por qué* cae y cómo rediseñar la experiencia para resolverlo.
  - *Tema posterior (Bloque 2, Tema 7 — Campañas digitales):* Una vez optimizada la experiencia de usuario para maximizar la tasa de conversión, el negocio está preparado para escalar inversión publicitaria de forma rentable en el Tema 7 sin desperdiciar presupuesto en una web con fugas.
- **Evidencia de aprendizaje que dejará el alumnado:** Una **Auditoría Heurística/Accesibilidad Móvil y un *Backlog* CRO Priorizado con Matriz ICE** listo para ejecutar junto al equipo de diseño o desarrollo.

---

## Siguientes pasos para el formador

1. **Seleccionar 2 webs reales actuales** para el *Test de los 5 segundos* (una de propuesta cristalina y otra confusa/lenta) y comprobar su rendimiento en *PageSpeed Insights* antes de clase.
2. **Verificar la versión vigente de las obligaciones de accesibilidad digital en España/UE** (Ley 11/2023 y normativa complementaria sobre comercio electrónico) para dar contexto preciso sin caer en desactualizaciones.
3. **Subir al aula virtual** la *Checklist Heurística UX*, la *Plantilla de Matriz ICE* y el caso *Óptica Visión Clara S.L.*
4. **Preparar un ejemplo visual de prototipo de baja fidelidad** (wireframe simple) para demostrar al alumnado que se puede testar una solución con 5 usuarios antes de gastar dinero en programación.
5. **Conectar con el Tema 7:** Recordar al alumnado que, con la tienda preparada para convertir mejor, la siguiente sesión se centrará en planificar, presupuestar y optimizar campañas digitales rentables.
