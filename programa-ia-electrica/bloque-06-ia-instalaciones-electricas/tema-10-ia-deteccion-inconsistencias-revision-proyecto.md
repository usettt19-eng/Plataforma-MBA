# Tema 10. IA como apoyo en detección de inconsistencias y revisión del proyecto

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | IA como apoyo en detección de inconsistencias y revisión del proyecto |
| **Programa** | IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas *(Especialización Técnica; no es un MBA ni otorga habilitación legal para firmar proyectos)* |
| **Bloque y posición dentro del programa** | Bloque 6: Inteligencia artificial aplicada a instalaciones eléctricas · Tema 10 de 11 (Tema 49 de 50 del programa) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Modalidad** | Online / Híbrida interactiva |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Avanzado |
| **Prerrequisitos** | Lectura de cuadros de cargas y unifilares (Módulo 1), interpretación de resultados DIALux (Módulo 2), manejo de tablas en Revit MEP y planos PDF (Módulos 3 y 4), gestión de *prompts* y organización de datos BIM (Temas 6 a 9 del Bloque 6). |
| **Resultado general de aprendizaje** | Diseñar y ejecutar auditorías documentales cruzadas asistidas por ChatGPT y Claude sobre datos anonimizados procedentes del diagrama unifilar, cuadro de cargas, memoria lumínica de DIALux y modelo Revit MEP para localizar discrepancias e incoherencias antes de emitir planos, discriminando falsos positivos y manteniendo el dictamen final bajo criterio técnico humano. |

---

## 2. Objetivos de aprendizaje

1. Identificar las principales fuentes de inconsistencia cruzada entre memoria de cálculo eléctrico, diagrama unifilar, estudio fotométrico en DIALux, modelo Revit MEP y planos PDF. *(Nivel de Bloom: Recordar)*
2. Explicar por qué la revisión asistida por IA funciona únicamente como segundo filtro documental preparatorio y jamás equivale a una validación automática integral ni sustituye al técnico revisor competente. *(Nivel de Bloom: Comprender)*
3. Aplicar listas de verificación cruzada (QA/QC) y *prompts* de contraste tabular sobre extractos anonimizados multifuente de un proyecto eléctrico para detectar omisiones y discrepancias numéricas. *(Nivel de Bloom: Aplicar)*
4. Analizar hallazgos devueltos por ChatGPT o Claude para separar discrepancias reales (potencias, calibres, secciones, longitudes o recuentos de luminarias) de falsos positivos provocados por contexto parcial. *(Nivel de Bloom: Analizar)*
5. Evaluar el grado de coherencia y madurez previa a emisión de un paquete de proyecto eléctrico mediante una matriz de severidad y un informe de cierre firmado por el revisor técnico. *(Nivel de Bloom: Evaluar)*

---

## 3. Contenidos esenciales

### 3.1. Anatomía de las inconsistencias cruzadas en proyectos eléctricos multiplataforma

#### Explicación breve y clara

En el flujo real de un proyecto de instalaciones eléctricas intervienen aplicaciones independientes que **no comparten una base de datos única ni transfieren automáticamente la validez técnica entre sí**. El cálculo eléctrico vive en hojas o software especializado y unifilares; la fotometría se resuelve en DIALux con archivos `.ldt`/`.ies`; la geometría y los circuitos se modelan en Revit MEP; los entregables se publican en planos PDF; y la comunicación al cliente se apoya en Twinmotion.

Cada cambio de última hora —añadir una toma trifásica en planta, sustituir una luminaria de $32\text{ W}$ por otra de $42\text{ W}$ en DIALux o alargar un recorrido en Revit para esquivar un conducto de climatización— abre una brecha de desincronización si no se propaga ordenadamente por todos los documentos. Un proyecto puede tener un modelo 3D sin colisiones y un render impecable en Twinmotion mientras arrastra incoherencias críticas entre la longitud calculada de un cable, su trayectoria real modelada y la protección dibujada en el unifilar.

#### Conceptos clave

- **Desincronización multifuente:** Divergencia progresiva de valores técnicos (potencias, longitudes, secciones, protecciones o cantidades) entre documentos elaborados en herramientas distintas sin vínculo dinámico automático.
- **Trazabilidad entre documentos maestros:** Cadena de correspondencia obligatoria que exige igualdad verificada entre Cuadro de Cargas, Diagrama Unifilar, Estudio DIALux, Modelo Revit MEP y Planos PDF.
- **Tolerancia cero vs. tolerancia acotada:** Criterio de revisión que exige coincidencia exacta (`0 %` de tolerancia) en identidades de circuitos, calibres de protección, secciones y recuentos de luminarias, frente a tolerancias explícitas y documentadas en longitudes estimadas frente a trazado BIM real (siempre que no empeore la caída de tensión).
- **Falsa sensación de coherencia visual:** Riesgo de asumir que un juego de planos PDF o una escena en Twinmotion refleja el proyecto calculado simplemente porque no muestra errores gráficos aparentes.

#### Definiciones necesarias

- **Inconsistencia cruzada:** Contradicción objetiva entre dos o más documentos o modelos del mismo proyecto respecto a un mismo circuito, equipo, recinto o parámetro técnico.
- **Revisión QA/QC (*Quality Assurance / Quality Control*):** Conjunto de comprobaciones sistemáticas planificadas (QA) y verificaciones puntuales sobre entregables concretos (QC) destinadas a detectar errores antes de la emisión formal del proyecto.

#### Ejemplo práctico realista

Durante la revisión previa a entrega de un local comercial (`PROY-COM-08`), el contraste entre las cuatro fuentes revela un problema encadenado en el circuito de alumbrado `C-AL2`:
- **Memoria de cálculo / Cuadro de cargas (v1):** `18 luminarias × 32 W = 576 W`, longitud estimada `L = 24 m`, conductor `3×1,5 mm²`, interruptor automático `10 A`.
- **Estudio DIALux (v2 actualizado):** Para alcanzar $E_m \ge 500\text{ lx}$, el especialista cambió el archivo `.ldt` a `20 luminarias × 38 W = 760 W` ($+31,9\text{ \%}$ de potencia).
- **Revit MEP (*Schedule* actual):** Muestra `20 ejemplares`, pero la familia conserva el parámetro antiguo de `32 W` ($640\text{ W}$) y la longitud del trazado real por bandeja mide `34 m` ($+41,7\text{ \%}$ sobre la longitud de cálculo).
- **Esquema Unifilar PDF (v1):** Sigue mostrando `C-AL2` con `576 W` y en el cajetín de planta aparece etiquetado como `16 A` por un error de edición manual.

Sin una auditoría cruzada, el proyecto saldría a licitación con cuatro cifras distintas para el mismo circuito (`576 W`, `640 W`, `760 W` y un calibre incongruente `10 A / 16 A`).

#### Errores frecuentes

- Revisar cada documento de forma aislada («el unifilar por un lado, el Excel por otro, el modelo Revit por otro») sin cruzar campos equivalentes por `ID_Circuito` o `ID_Local`.
- Suponer que porque DIALux o Revit MEP no arrojan advertencias internas, ambos coinciden con el cuadro de cargas y el esquema unifilar.
- Actualizar la potencia de luminarias en DIALux y el número de luminarias en Twinmotion para mejorar una vista, olvidando recalcular la caída de tensión con la nueva longitud real del modelo Revit.
- Emitir planos PDF antes de cerrar una tabla de correspondencia entre la revisión del cálculo y la revisión del modelo.

#### Preguntas que el alumnado debería poder responder

1. ¿Por qué la ausencia de errores gráficos o de colisiones en Revit MEP y Twinmotion no garantiza la coherencia eléctrica ni lumínica del proyecto?
2. En el ejemplo de `C-AL2`, ¿qué tres documentos se contradicen respecto a la potencia y qué impacto tiene la diferencia de longitud entre $24\text{ m}$ y $34\text{ m}$?
3. ¿Qué datos técnicos admiten tolerancia cero en una revisión cruzada y qué parámetro suele presentar diferencias razonables que requieren revalidación?

---

### 3.2. Diseño de listas de verificación cruzada (Checklists QA/QC) asistidas por IA

#### Explicación breve y clara

La forma más eficaz de usar ChatGPT o Claude en control de calidad no es pedirles un genérico *«Revisa si este proyecto está bien»*, sino construir junto con el equipo técnico **listas de verificación cruzada (Checklists QA/QC) estructuradas por pares de documentos** y adaptadas a la tipología del edificio.

Cada punto del *checklist* debe especificar: (1) qué dos fuentes se comparan (`Cuadro ↔ Unifilar`, `DIALux ↔ Revit`, `Revit ↔ Planos PDF`, `Modelo técnico ↔ Twinmotion`), (2) qué campo exacto con unidades SI se comprueba, (3) qué criterio de aceptación se aplica (incluyendo referencias normativas marcadas como «a verificar según jurisdicción y edición vigente») y (4) qué evidencia concreta debe aportar el revisor humano para marcarlo como `CONFORME`.

#### Conceptos clave

- **Pares de contraste documental:** Agrupación lógica de revisiones por interfaces críticas (`Cálculo–Unifilar`, `DIALux–Revit`, `Revit–PDF`, `Cálculo–Memoria`) para evitar omisiones entre disciplinas.
- **Criterio de aceptación verificable:** Regla binaria o cuantitativa sin ambigüedad (`|P_DIALux - P_Revit| = 0 W`, `Calibre_Unifilar == Calibre_Cuadro`) que permite auditar objetivamente cada ítem.
- **Checklist vivo por tipología:** Adaptación de la lista de control según uso del edificio (oficina, nave industrial, docente, local de pública concurrencia o sanitario, verificando siempre los requisitos específicos reglamentarios aplicables en cada país).
- **Evidencia de comprobación:** Registro explícito de la fuente consultada, fecha y firma/iniciales del técnico que valida el ítem, rechazando el marcado automático sin contraste.

#### Definiciones necesarias

- **Matriz de contraste cruzado:** Tabla estructurada que alinea un mismo elemento o circuito a través de múltiples entregables para verificar su identidad cuantitativa y descriptiva.
- **Estado de verificación:** Etiqueta cerrada asignada a cada punto de control (`CONFORME`, `NO CONFORME`, `FALTANTE`, `NO APLICA`, `PENDIENTE DE VERIFICACIÓN NORMATIVA`) que impide cerrar un informe con ambigüedades.

#### Ejemplo práctico realista

Un estudio elabora con apoyo de Claude un **Checklist QA/QC de 4 bloques** adaptado a un edificio de oficinas (`PROY-OF-14`):
- **Bloque A (Cuadro de cargas ↔ Diagrama unifilar):** Verificar coincidencia al 100 % en `ID_Circuito`, tensión en `V`, potencia instalada/simultánea en `kW`, sección fase/neutro/protección en `mm²`, calibre magnetotérmico en `A`, poder de corte en `kA` y sensibilidad diferencial en `mA` (verificando criterios según reglamento local y edición vigente).
- **Bloque B (Estudio DIALux ↔ Revit MEP):** Verificar por recinto `Cantidad de luminarias`, `Potencia unitaria en W`, `Flujo luminoso en lm`, `Temperatura de color en K`, `Referencia .ldt/.ies` y `Altura de montaje en m`.
- **Bloque C (Revit MEP ↔ Planos PDF):** Comprobar que las etiquetas de planta muestran el mismo `ID_Circuito` que el unifilar, la leyenda coincide con los símbolos dibujados, la escala gráfica es correcta y los filtros de emergencia están activos.
- **Bloque D (Documentación técnica ↔ Twinmotion):** Confirmar que las escenas/recorridos reflejan la última geometría aprobada tras *Direct Link* y contienen nota expresa aclarando que las vistas 3D no sustituyen cálculo eléctrico ni fotométrico.

#### Errores frecuentes

- Usar listas de comprobación genéricas generadas por IA sin personalizar al tipo de edificio ni a los entregables reales del contrato.
- Redactar ítems vagos como *«Comprobar que la iluminación cumple»* en lugar de especificar métricas concretas ($E_m$ en lx, $U_0$, UGR y potencia en W frente a objetivo verificable).
- Permitir que la IA marque puntos como `CONFORME` sin haber recibido los dos documentos comparados completos.
- Olvidar incluir en el *checklist* el contraste entre la longitud estimada en la hoja de cálculo eléctrico y la longitud real medida en las canalizaciones de Revit MEP.

#### Preguntas que el alumnado debería poder responder

1. ¿Qué cuatro pares de documentos deben cubrirse como mínimo en un *checklist* QA/QC de instalaciones eléctricas BIM?
2. ¿Cómo transformas un punto vago de revisión («revisar unifilar») en tres criterios objetivos verificables por campo y unidad SI?
3. ¿Qué comprobación específica corresponde al contraste entre el modelo técnico y la presentación visual en Twinmotion?

---

### 3.3. Auditoría documental comparativa con ChatGPT y Claude sobre datos tabulares

#### Explicación breve y clara

Cuando disponéis de un cuadro de cargas con 30 o 60 circuitos, una tabla exportada de luminarias de DIALux y un *Schedule* de Revit MEP, detectar a simple vista una discrepancia de $2\text{ A}$ en un calibre o una diferencia de $12\text{ m}$ de longitud resulta agotador y propenso a error humano. Aquí es donde ChatGPT y Claude ofrecen una ayuda sobresaliente como **comparadores tabulares de alta atención**.

El procedimiento profesional exige **anonimizar primero todas las tablas**, convertirlas a formato CSV o tabla Markdown limpia con identificadores comunes (`ID_Circuito`, `ID_Local`), delimitar claramente las fuentes en el *prompt* (`<tabla_cuadro>`, `<tabla_unifilar_extraida>`, `<tabla_revit>`, `<tabla_dialux>`) e imponer una instrucción estricta: **comparar fila a fila, reportar únicamente diferencias objetivas citando exactamente fila y columna origen, y declarar `NO COMPROBABLE` cualquier elemento gráfico que no conste en las tablas aportadas** (por ejemplo, símbolos de un plano PDF no transcrito).

#### Conceptos clave

- **Clave primaria de cruce (`ID_Unico`):** Identificador idéntico (`C-FZ-01`, `L-PB-04`) compartido entre Excel, unifilar, DIALux y Revit que permite al asistente alinear exactamente cada fila sin confusiones.
- **Extracción tabular previa de unifilar y DIALux:** Paso operativo necesario para convertir información de planos o informes PDF a tablas estructuradas verificadas manualmente antes de pedir comparación a un modelo de texto.
- **Reglas de comparación explícitas:** Instrucciones numéricas dadas en el *prompt* (`Si |L_Revit - L_Calc| / L_Calc > 0,15 -> Alerta longitud; si Sección_Unifilar != Sección_Cuadro -> Alerta crítica`).
- **Trazabilidad de cita en auditoría:** Exigencia de que la IA muestre el valor exacto encontrado en la Fuente A frente al encontrado en la Fuente B para que el técnico verifique al instante sin rebuscar.

#### Definiciones necesarias

- **Auditoría tabular comparativa:** Proceso sistemático en el que se enfrentan exportaciones estructuradas de distintas herramientas del proyecto bajo reglas fijas de consistencia para aislar discrepancias antes de una verificación técnica detallada.
- **Brecha de trazabilidad gráfica:** Limitación inherente de los asistentes textuales cuando un esquema unifilar o plano PDF contiene errores puramente gráficos (cruces mal dibujados, falta de línea de tierra, etiquetas solapadas) que no quedan reflejados en una tabla CSV y requieren inspección visual directa del proyectista.

#### Ejemplo práctico realista

Un ingeniero extrae y anonimiza cuatro tablas reducidas (10 circuitos) de un taller y oficinas (`PROY-TAL-06`) y ejecuta un *prompt* auditor en ChatGPT y Claude con umbral de alerta de longitud $> 10\text{ \%}$ y tolerancia $0\text{ \%}$ en potencias, secciones y calibres:
- **Hallazgo 1 (`Crítico`):** Circuito `C-FZ-03` (toma trifásica maquinaria): Cuadro de cargas indica `11,0 kW`, `400 V`, `5G6 mm²`, `25 A`; tabla extraída del Unifilar PDF indica `5G4 mm²` y `20 A`. *(Posible actualización en cálculo no trasladada al plano unifilar).*
- **Hallazgo 2 (`Crítico`):** Circuito `C-AL-01`: Cuadro asume longitud de cálculo `L = 28 m`; el *Schedule* de circuitos de Revit MEP mide `44 m` ($+57,1\text{ \%}$). *(Requiere recalcular caída de tensión en el software de cálculo o hoja verificada antes de validar sección).*
- **Hallazgo 3 (`Mayor`):** En `LOCAL-TALLER`, DIALux reporta `16 campanas LED × 95 W = 1 520 W`, mientras Revit MEP contabiliza `15 ejemplares × 95 W = 1 425 W` (falta modelar 1 luminaria en modelo BIM).

Cada hallazgo sale presentado en tabla `ID | Fuentes comparadas | Valor A | Valor B | Desviación | Acción para revisor humano`, reduciendo de horas a minutos la localización de discrepancias, aunque la **decisión correctiva y la verificación reglamentaria** quedan íntegramente en manos del ingeniero.

#### Errores frecuentes

- Pegar tablas mal alineadas o sin encabezados claros con unidades SI, haciendo que la IA compare kilovatios con kilovoltiamperios o vatios.
- Confiar en que la IA «leyó» correctamente un plano PDF complejo o un esquema unifilar extenso mediante OCR/visión sin revisar manualmente si leyó mal un `16 A` como `10 A` o un `6 mm²` como `16 mm²`.
- Creer que porque el asistente devolvió «0 inconsistencias encontradas» en las tablas exportadas, el proyecto completo está libre de errores constructivos o normativos.
- Omitir la comprobación de longitudes reales del modelo BIM frente a las hipótesis iniciales de la memoria de cálculo.

#### Preguntas que el alumnado debería poder responder

1. ¿Por qué es imprescindible usar un identificador único homogéneo (`ID_Circuito`, `ID_Local`) entre cálculo, unifilar, DIALux y Revit MEP?
2. ¿Qué limitaciones reales tiene pedirle a una IA que revise un plano unifilar PDF en imagen frente a cruzar tablas verificadas manualmente?
3. Si Revit MEP reporta una longitud real de circuito un $40\text{ \%}$ superior a la usada inicialmente en el cuadro de cargas, ¿por qué debes remitir ese hallazgo al ingeniero de cálculo en lugar de cambiar solo el texto de la longitud?

---

### 3.4. Gestión de falsos positivos, matriz de severidad y dictamen de revisión humana

#### Explicación breve y clara

Ninguna herramienta de revisión automática —ni siquiera asistida por los mejores modelos de lenguaje— tiene precisión perfecta. Al auditar datos complejos, ChatGPT y Claude suelen generar **falsos positivos** (alertas que en realidad no son errores del proyecto) o, peor aún, **falsos negativos** (errores graves no detectados por falta de contexto). Por ejemplo, la IA puede alertar de un «desajuste de potencia» al comparar $10\text{ kW}$ del cuadro frente a $11,11\text{ kVA}$ de Revit si no se le explicó $\cos\varphi = 0,90$, o marcar como error un circuito `C-RES-01` con potencia conectada `0 W` cuando se trata de una reserva reglamentaria prevista en el tablero.

El revisor técnico debe filtrar cada hallazgo devuelto por la IA mediante una **matriz de severidad en tres niveles** (`Crítico`, `Mayor`, `Menor` + `Descartado / Falso Positivo`), verificar manualmente la causa raíz y cerrar la revisión emitiendo un **Dictamen de Revisión Técnica Humana** firmado con fecha, versión revisada y estado final (`Aprobado para emisión`, `Aprobado con comentarios menores` o `Rechazado / Retener emisión`).

#### Conceptos clave

- **Falso positivo documental:** Alerta emitida por la IA que señala una supuesta contradicción inexistente, causada normalmente por diferencias de magnitud ($\text{kW}$ vs. $\text{kVA}$), factores de demanda o reservas intencionadas de diseño.
- **Falso negativo crítico:** Error real grave del proyecto (como caída de tensión excesiva o falta de selectividad diferencial) que la IA pasa por alto porque no dispone del contexto completo, del cálculo normativo o de la lectura gráfica real.
- **Clasificación de severidad QA/QC:** Jerarquización de hallazgos en `Crítico` (seguridad, protecciones, sección, puesta a tierra, potencia errónea), `Mayor` (mediciones, recuentos, incoherencias de plano/modelo) y `Menor` (formato, ortografía, estilo de etiqueta).
- **Dictamen de revisión humana:** Acto formal e indelegable en el que un técnico competente certifica internamente qué hallazgos fueron resueltos, cuáles se descartaron y bajo qué normativa aplicable verificada se autoriza o retiene la entrega.

#### Definiciones necesarias

- **Matriz de severidad:** Tabla de priorización que asocia cada tipo de discrepancia detectada con su impacto potencial en seguridad eléctrica, cumplimiento reglamentario, obra o presupuesto, fijando si bloquea o no la emisión del proyecto.
- **Trazabilidad de cierre de hallazgo:** Evidencia registrada de qué acción correctiva se ejecutó en cálculo, DIALux, Revit MEP o PDF para cerrar una no conformidad abierta durante la auditoría.

#### Ejemplo práctico realista

Tras auditar un proyecto de oficinas (`PROY-OF-14`), Claude reporta **8 alertas**. El ingeniero eléctrico senior revisa una por una en 20 minutos:
- **4 hallazgos confirmados como `Críticos`:**
  1. Discrepancia de calibre en `C-CLIMA-01` (`32 A` en cuadro vs. `25 A` en unifilar).
  2. Longitud real en Revit de `C-AL-03` ($52\text{ m}$) muy superior a cálculo ($30\text{ m}$), requiriendo recalcular sección para verificar caída de tensión.
  3. Desajuste de potencia en DIALux vs. Revit en sala de juntas (`+160 W`).
  4. Ausencia de confirmación del poder de corte en interruptor general frente al cálculo de $I_{cc}$.
- **2 hallazgos confirmados como `Menores`:** Etiquetas con unidad `watts` en vez de `W` y falta de revisión `Rev B` en cajetín de detalle.
- **2 hallazgos descartados como `Falsos Positivos`:**
  1. La IA alertó «discrepancia entre $18,0\text{ kW}$ y $20,0\text{ kVA}$» en `C-SAI-01` (ambos valores son equivalentes con $\cos\varphi = 0,90$).
  2. La IA marcó `C-RES-02` como «circuito sin carga erróneo» (es una reserva de futuro intencionada según criterio de proyecto).

El técnico bloquea la emisión del PDF (`Estado: RETENIDO hasta corregir 4 hallazgos críticos`) y registra el cierre en el acta de revisión.

#### Errores frecuentes

- Enviar directamente el informe crudo generado por ChatGPT o Claude al cliente o al equipo de obra sin filtrar falsos positivos ni verificar los cálculos.
- Tratar todas las alertas por igual, dedicando tiempo a corregir una errata tipográfica mientras sigue abierta una discrepancia crítica en el calibre de un interruptor.
- Descartar una alerta crítica de la IA sin comprobar físicamente la fuente porque «seguro que es un fallo de la IA».
- Firmar o aprobar una entrega basándose en «la IA revisó el proyecto y dio el visto bueno», olvidando que los modelos de lenguaje no detectan falsos negativos normativos fuera de los datos suministrados.

#### Preguntas que el alumnado debería poder responder

1. ¿Cuál es la diferencia entre un falso positivo y un falso negativo en una auditoría eléctrica asistida por IA, y cuál entraña mayor peligro técnico?
2. Explica dos ejemplos realistas en los que ChatGPT o Claude pueden generar falsos positivos al cruzar un cuadro de cargas con Revit MEP.
3. ¿Qué criterios distinguen un hallazgo `Crítico` que bloquea la emisión a PDF de un hallazgo `Menor` que permite emisión condicionada o corrección rápida?

---

## 4. Metodología didáctica

Duración total de la secuencia didáctica: **240 minutos (4 horas)**.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
|---|---|---|---|
| **1. Apertura y diagnóstico sobre errores ocultos** | 15 min | Presenta el Tema 10, expone casos reales de entregas bloqueadas por desincronización documental y aplica el diagnóstico inicial. | Responde el test diagnóstico inicial e identifica dónde suelen aparecer discrepancias en sus proyectos. |
| **2. Microexposición: inconsistencias multifuente y checklists QA/QC** | 25 min | Explica las interfaces críticas (`Cálculo–Unifilar–DIALux–Revit–PDF–Twinmotion`) y cómo construir listas de verificación trazables asistidas por IA. | Analiza la matriz de pares de contraste y define tolerancias (`0 %` vs. longitudes acotadas) en su ficha de trabajo. |
| **3. Actividad 1 (Activación): encuentra los 7 fallos ocultos** | 20 min | Entrega 4 mini-extractos impresos o digitales (cuadro, unifilar textual, DIALux, Revit) con 7 fallos sembrados y cronometra 15 min de búsqueda manual. | Detecta manualmente las 7 incoherencias en parejas y compara la dificultad de revisión visual frente a un checklist estructurado. |
| **4. Demostración guiada: auditoría tabular y falsos positivos** | 25 min | Ejecuta en vivo un *prompt* auditor sobre CSVs anonimizados en ChatGPT y Claude, mostrando cómo detectar discrepancias reales y filtrar falsos positivos ($\text{kW}/\text{kVA}$, reservas). | Observa el diseño de reglas numéricas en el *prompt*, revisa citas fila a fila y anota estrategias contra falsos negativos. |
| **5. Actividad 2 (Aplicación técnica): auditoría cruzada con IA** | 50 min | Facilita el paquete tabular anonimizado (`PROY-TAL-06`) y supervisa que cada equipo compruebe manualmente todas las alertas antes de clasificarlas. | Ejecuta auditoría cruzada entre las 4 fuentes usando IA, calcula desviaciones en hoja independiente y filtra falsos positivos en matriz de severidad. |
| **6. Pausa activa y debate sobre criterio del revisor** | 15 min | Modera discusión crítica sobre errores que la IA NO ve (fallos gráficos en PDF, criterios normativos locales) y límites de responsabilidad técnica. | Debate qué errores de `PROY-TAL-06` habrían pasado inadvertidos sin revisión humana gráfica/normativa. |
| **7. Actividad 3 (Transferencia): matriz QA/QC del proyecto del curso** | 50 min | Proporciona plantilla de Checklist QA/QC e Informe de Revisión y asesora la pre-auditoría de los datos del proyecto integrador de cada participante. | Construye su matriz QA/QC adaptada y ejecuta una pre-auditoría cruzada sobre los datos anonimizados de su proyecto de curso. |
| **8. Caso práctico de licitación, evaluación y cierre** | 40 min | Presenta el caso `Clínica Ambulatoria Sur`, evalúa las decisiones de retención/emisión con la rúbrica de 4 niveles y cierra con autoevaluación. | Resuelve el caso práctico en equipo emitiendo el informe de auditoría y dictamen técnico humano, y completa la evaluación final. |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Encuentra los 7 fallos ocultos en 15 minutos

- **Nombre:** Reto contrarreloj de detección manual de inconsistencias multifuente.
- **Objetivo:** Experimentar la vulnerabilidad de la revisión «a simple vista» y justificar la necesidad de matrices cruzadas ordenadas por clave única.
- **Instrucciones para el alumnado:**
  1. Recibid la hoja comparativa `Reto_T10_LocalComercial` (contiene extractos de 6 circuitos en Cuadro de cargas, texto de Unifilar, resumen de DIALux y *Schedule* de Revit MEP).
  2. En parejas, disponéis de **15 minutos** sin ayuda de IA para localizar **7 inconsistencias ocultas** (mezclas de potencia entre DIALux y Revit, calibre distinto en unifilar, longitud divergente, luminaria faltante en una zona, unidad errónea y grado IP omitido).
  3. Completad la puesta en común de 5 minutos anotando qué tipo de discrepancia resultó más difícil de ver sin tabla cruzada.
- **Materiales necesarios:** Hoja impresa o PDF `Reto_T10_LocalComercial` y rotulador o editor de notas.
- **Tiempo estimado:** 20 minutos.
- **Rol del formador:** Cronometrar el reto, revelar los 7 fallos al finalizar y conectar la experiencia con el diseño de *checklists* QA/QC sistemáticos.
- **Producto o entregable esperado:** Lista numerada con los 7 fallos localizados y clasificación breve del par de documentos en conflicto.
- **Criterios de éxito:** Identifica al menos 6 de los 7 fallos sembrados y distingue exactamente qué par de documentos presenta contradicción.

### Actividad 2 (Aplicación técnica): Auditoría tabular asistida por IA y depuración de falsos positivos

- **Nombre:** Contraste cruzado multifuente con ChatGPT/Claude y filtrado mediante matriz de severidad.
- **Objetivo:** Ejecutar una auditoría comparativa fiable sobre tablas anonimizadas de cuatro orígenes, comprobando manualmente cada alerta para descartar falsos positivos.
- **Instrucciones para el alumnado:**
  1. Descargad las 4 tablas CSV anonimizadas del proyecto `PROY-TAL-06` (`Cuadro_Cargas.csv`, `Unifilar_Extraido.csv`, `DIALux_Locales.csv` y `Revit_Schedule.csv`, 10 circuitos y 4 locales, conteniendo **5 inconsistencias reales sembradas** y **2 trampas diseñadas para provocar falsos positivos** en la IA: conversión $\text{kW}/\text{kVA}$ con $\cos\varphi = 0,88$ y un circuito `C-RES-01` de reserva futura).
  2. Redactad un *prompt* de auditoría cruzada con reglas explícitas (`tolerancia 0 %` en calibres/secciones/potencia nominal; umbral `> 10 %` en longitudes; prohibición de emitir aprobación normativa).
  3. Ejecutad el *prompt* en ChatGPT o Claude, verificad manualmente cada fila señalada en hoja de cálculo independiente y clasificad todos los hallazgos en la matriz (`Crítico`, `Mayor`, `Menor`, `Falso Positivo`).
- **Materiales necesarios:** Paquete `PROY-TAL-06_CSVs`, acceso a ChatGPT/Claude, hoja de cálculo y plantilla de matriz de severidad.
- **Tiempo estimado:** 50 minutos.
- **Rol del formador:** Vigilar que ningún grupo acepte las 2 trampas como errores reales y verificar que detectan cualquier falso negativo si el asistente pasó por alto alguna inconsistencia sembrada.
- **Producto o entregable esperado:** Informe breve con el *prompt* utilizado, tabla de auditoría con los 5 errores reales confirmados, explicación técnica de los 2 falsos positivos descartados y acciones correctivas propuestas.
- **Criterios de éxito:** Localiza el 100 % de los 5 errores reales (verificados manualmente en unidades SI) y descarta correctamente ambos falsos positivos explicando su causa técnica.

### Actividad 3 (Transferencia a proyecto real): Matriz QA/QC y pre-auditoría del proyecto del curso

- **Nombre:** Construcción de matriz QA/QC personalizada y pre-auditoría de cierre del proyecto integrador.
- **Objetivo:** Dotar a cada equipo o participante de una lista de comprobación cruzada y un procedimiento de revisión humana aplicables directamente al proyecto final del Tema 11.
- **Instrucciones para el alumnado:**
  1. Adaptad la plantilla de Checklist QA/QC del Tema 10 a vuestro proyecto del curso (cubriendo los 4 pares: `Cálculo–Unifilar`, `DIALux–Revit`, `Revit–PDF`, `Técnico–Twinmotion`).
  2. Reunid los datos anonimizados disponibles hasta el momento de vuestro proyecto de curso (cuadro preliminar, resumen DIALux y *Schedule* Revit o tabla equivalente) y aplicad una pre-auditoría cruzada con apoyo de ChatGPT o Claude.
  3. Redactad una **Lista Priorizada de Correcciones Pendientes** antes de la integración final del Tema 11, dejando constancia explícita de qué verificaciones gráficas y normativas realizaréis manualmente fuera de la IA.
- **Materiales necesarios:** Plantilla Checklist QA/QC del Tema 10, tablas anonimizadas propias del proyecto del programa y acceso a asistentes de IA.
- **Tiempo estimado:** 50 minutos.
- **Rol del formador:** Revisar que la lista incluye verificaciones gráficas que la IA no puede hacer sobre tablas (legibilidad PDF, simbología de puesta a tierra, coherencia real del unifilar) y confirmar referencias normativas marcadas «a verificar».
- **Producto o entregable esperado:** Checklist QA/QC personalizado (mínimo 16 puntos de control) y pre-informe de incidencias abiertas para resolver rumbo al Tema 11.
- **Criterios de éxito:** El *checklist* cubre los 4 pares documentales con criterios cuantitativos claros; la pre-auditoría identifica brechas reales del proyecto propio y define acciones concretas con responsable humano.

---

## 6. Caso práctico

### Auditoría previa a licitación en Clínica Ambulatoria Sur: cuatro documentos desincronizados a 48 horas de entrega

#### Contexto empresarial

Un equipo consultor prepara la entrega para licitación de las instalaciones eléctricas de un centro médico ambulatorio de pequeña escala (`PROY-SAN-02`, $620\text{ m}^2$ en planta baja con recepción, pasillo, 4 consultas médicas, sala de curas y cuarto de instalaciones). *(Nota técnica obligatoria: tratándose de un uso sanitario, los requisitos eléctricos de seguridad, alumbrado de emergencia o circuitos específicos dependen estrictamente del país, reglamento vigente, autoridad sanitaria/eléctrica competente y edición aplicable, lo cual debe verificarse íntegramente por técnico habilitado fuera de la IA).*

#### Situación o problema

A **48 horas** de cerrar el expediente en PDF para el promotor, la sala de curas y dos consultas sufrieron una revisión arquitectónica y de equipamiento médico. El especialista de iluminación ajustó DIALux para asegurar niveles elevados en la sala de curas, y Climatización añadió un equipo adicional de extracción. El coordinador BIM actualizó parte de Revit MEP y resincronizó las escenas visuales en Twinmotion para la reunión con propiedad, pero nadie realizó una revisión integral entre las cuatro fuentes documentales. La dirección técnica solicita una **auditoría urgente asistida por IA con dictamen humano vinculante** antes de autorizar la impresión definitiva de planos PDF.

#### Datos disponibles

Extracto anonimizado consolidado de las cuatro fuentes para los elementos críticos afectados (`PROY-SAN-02`):

1. **Cuadro de Cargas (versión Excel v3 — hace 5 días):**
   - `C-AL-CONS`: Alumbrado 4 consultas (`16 luminarias × 34 W = 544 W`, $L = 26\text{ m}$, sección `3×1,5 mm²`, protección `10 A`).
   - `C-AL-CURAS`: Alumbrado sala de curas (`6 luminarias × 38 W = 228 W`, $L = 18\text{ m}$, sección `3×1,5 mm²`, protección `10 A`).
   - `C-CLIMA-EXT`: Equipo ventilación (`P = 3,2 kW`, $\cos\varphi = 0,85$, monofásico $230\text{ V}$, $L = 30\text{ m}$, `3×4 mm²`, `20 A`).
   - `C-RES-01`: Circuito reserva futura (`0 W`, indicado explícitamente como reserva en cuadro).
2. **Estudio Lumínico DIALux (versión v4 — ayer):**
   - `4 Consultas`: `16 luminarias × 34 W` ($E_m = 518\text{ lx}$, $U_0 = 0,64$, UGR = 17, $4\,000\text{ K}$).
   - `Sala de Curas` ($28\text{ m}^2$): Aumentado a **`8 luminarias × 45 W = 360 W`** para alcanzar $E_m = 1\,020\text{ lx}$ en zona de trabajo ($U_0 = 0,71$, UGR = 16, archivo `.ldt` actualizado).
3. **Revit MEP (*Schedule* exportado hoy):**
   - `C-AL-CONS`: `16 luminarias × 34 W = 544 W`, longitud BIM medida `29 m`.
   - `C-AL-CURAS`: **`8 ejemplares`**, pero familia sin actualizar manteniendo **`38 W` ($304\text{ W}$)**, longitud BIM medida `25 m` ($+38,9\text{ \%}$ sobre cálculo v3).
   - `C-CLIMA-EXT`: Potencia registrada `4,8 kW` (el equipo de Clima subió potencia ayer y la actualizó en modelo mecánico/eléctrico Revit), longitud BIM `36 m`.
4. **Esquema Unifilar y Planos PDF borrador (versión v2):**
   - `C-AL-CURAS` figura aún como `228 W` y `10 A`.
   - `C-CLIMA-EXT` figura como `3,2 kW`, `3×4 mm²`, **`25 A`** en unifilar (no coincide ni con v3 ni con la nueva carga `4,8 kW`).
   - En los planos PDF falta comprobar manualmente la simbología de puesta a tierra equipotencial específica de local sanitario y en Twinmotion se ven ya 8 luminarias en sala de curas (lo que llevó erróneamente a un técnico junior a pensar que el proyecto estaba actualizado).

#### Preguntas de análisis

1. ¿Qué inconsistencias críticas existen hoy entre Cuadro de cargas, DIALux, Revit MEP y Unifilar en `PROY-SAN-02`, y por qué ver las 8 luminarias en Twinmotion generó una falsa sensación de seguridad?
2. ¿Cuál es el incremento real de intensidad de empleo $I_b$ en `C-CLIMA-EXT` al pasar de $3,2\text{ kW}$ a $4,8\text{ kW}$ en $230\text{ V}$ con $\cos\varphi = 0,85$? ¿Qué riesgo entraña mantener un cable de $4\text{ mm}^2$ y un calibre sin recalcular junto a un desajuste entre $20\text{ A}$ y $25\text{ A}$?
3. ¿Qué falso positivo podría disparar la IA al revisar `C-RES-01` o las diferencias entre $26\text{ m}$ y $29\text{ m}$ en `C-AL-CONS`?
4. ¿Puede autorizarse la impresión definitiva a PDF con los datos actuales o debe emitirse dictamen `RETENIDO`?

#### Tarea a realizar

En equipos de 3 personas, actuad como equipo auditor QA/QC externo y elaborad el **Informe de Pre-Auditoría y Dictamen Técnico de `PROY-SAN-02`**:
1. Diseñad el *prompt* de auditoría cruzada adaptado al caso con reglas de tolerancia y marcadores normativos («uso sanitario: verificar reglamento y edición vigente aplicable»).
2. Ejecutad la comprobación asistida por IA sobre el extracto anonimizado y verificad manualmente todas las cifras ($W$, $kW$, longitudes y cálculo de $I_b$ de `C-CLIMA-EXT` y `C-AL-CURAS`).
3. Clasificad todos los hallazgos en la **Matriz de Severidad (`Crítico`, `Mayor`, `Menor`, `Falso Positivo`)**, indicando explícitamente qué comprobaciones gráficas/normativas en PDF NO puede hacer la IA (p. ej., verificación de circuitos específicos de uso sanitario, equipotencialidad y selectividad según reglamento vigente).
4. Redactad el **Dictamen Final de Revisión Técnica Humana** y el plan de acción priorizado para resolver los bloqueos en menos de 24 horas antes de imprimir los PDFs finales.

#### Posibles soluciones o criterios de análisis

- **Análisis cuantitativo verificado manualmente:**
  - **`C-AL-CURAS`:** Cuadro v3 (`228 W`, `18 m`) vs. Revit (`304 W`, `25 m`) vs. DIALux v4 (`360 W`, `+57,9 %` respecto al cuadro inicial). Hay que unificar potencia a **$360\text{ W}$** en familia Revit, cuadro y unifilar, y recalcular caída de tensión con $L = 25\text{ m}$ ($+38,9\text{ \%}$ de longitud).
  - **`C-CLIMA-EXT`:** A $230\text{ V}$ y $\cos\varphi = 0,85$: para $3,2\text{ kW}$, $I_b = \frac{3\,200}{230 \cdot 0,85} \approx 16,37\text{ A}$; al aumentar a $4,8\text{ kW}$ ($+50\text{ \%}$), $I_b = \frac{4\,800}{230 \cdot 0,85} \approx \mathbf{24,55\text{ A}}$, y con longitud real $L = 36\text{ m}$. Esto invalida la protección de $20\text{ A}$ del cuadro v3 (dispararía por sobrecarga) y probablemente exige revisar la sección de $4\text{ mm}^2$ y el calibre de $25\text{ A}$ según método de instalación, agrupamiento, temperatura y caída de tensión admisible en el reglamento vigente. Además el unifilar mostraba $25\text{ A}$ con carga vieja de $3,2\text{ kW}$, incoherente con el propio cuadro v3 (`20 A`).
  - **`C-AL-CONS`:** Coincide en potencia ($544\text{ W}$ en las 3 fuentes); diferencia de longitud de `26 m` vs `29 m` ($+11,5\text{ \%}$) requiere verificación rápida en cálculo sin ser tan severa, mientras **`C-RES-01`** es un falso positivo esperado si la IA lo marca como «sin carga».
- **Dictamen técnico obligado:** **`EMISIÓN RETENIDA (NO APTO PARA LICITACIÓN)`** hasta: (1) recalcular `C-CLIMA-EXT` y `C-AL-CURAS` bajo normativa eléctrica y de locales sanitarios vigente aplicable al país, (2) actualizar familia `.ldt` de `45 W` en Revit, (3) sincronizar cuadro v4, unifilar v3 y planos PDF, y (4) realizar inspección gráfica humana de esquema de tierras/protecciones especiales que la IA no puede auditar.

#### Preguntas de reflexión final

1. ¿Por qué un local de uso especial (sanitario, pública concurrencia o industrial) exige extremar las cautelas frente a cualquier revisión documental automatizada con IA?
2. ¿Qué protocolo sencillo entre el especialista de DIALux, el ingeniero eléctrico y el modelador Revit MEP habría evitado llegar a las últimas 48 horas con cuatro versiones desincronizadas?

---

## 7. Evaluación

### Evaluación diagnóstica (inicio de sesión, 10 minutos)

Test breve de 4 cuestiones:
1. Identificar qué errores típicos NO puede detectar un modelo de lenguaje leyendo únicamente archivos CSV.
2. Explicar por qué una discrepancia entre `18,0 kW` y `20,0 kVA` puede no ser un error.
3. Señalar qué documentos intervienen en una auditoría cruzada eléctrica completa.
4. Indicar qué significa clasificar un hallazgo como `Crítico` frente a `Menor`.

### Evaluación formativa (durante la sesión)

Seguimiento durante las Actividades 1, 2 y 3 verificando:
- Uso estricto de datos anonimizados e identificadores clave homogéneos.
- Comprobación manual con calculadora/hoja de cálculo de toda desviación de W, kW, A, m o % antes de aceptar la conclusión de la IA.
- Detección activa de falsos positivos y declaración explícita de límites gráficos/normativos.

### Evaluación sumativa (cierre de sesión)

Entrega del **Expediente de Auditoría QA/QC Asistida por IA** compuesto por:
1. Reporte de la Actividad 2 sobre `PROY-TAL-06` (5 errores reales verificados + 2 falsos positivos descartados).
2. Checklist QA/QC personalizado y pre-auditoría del proyecto del curso (Actividad 3).
3. Informe completo y Dictamen Técnico Humano del caso `Clínica Ambulatoria Sur (PROY-SAN-02)`.

### Rúbrica de evaluación

| Criterio | Insuficiente (0–4,9) | En desarrollo (5,0–6,9) | Adecuado (7,0–8,9) | Destacado (9,0–10) |
|---|---|---|---|---|
| **Diseño de checklists QA/QC multifuente** | Lista genérica sin pares documentales claros ni criterios medibles en unidades SI. | Cubre los documentos básicos, pero omite tolerancias o verificaciones entre DIALux y Revit. | Diseña *checklist* estructurado por pares (`Cálculo–Unifilar–DIALux–Revit–PDF–Twinmotion`) con métricas claras. | Elabora matriz QA/QC exhaustiva con evidencias exigibles, límites gráficos explícitos y advertencias normativas precisas. |
| **Auditoría tabular con IA y verificación manual** | Acepta la respuesta de la IA sin comprobar sumas ni detectar errores sembrados omitidos. | Encuentra la mayoría de discrepancias, pero comete algún error aritmético al verificar $I_b$ o porcentajes. | Ejecuta *prompt* de contraste eficaz, comprueba manualmente magnitudes SI y confirma el 100 % de errores reales. | Combina reglas de tolerancia precisas, citas exactas fila/columna y validación matemática impecable. |
| **Gestión de falsos positivos y severidad** | Confunde falsos positivos con errores graves o no prioriza riesgos de seguridad eléctrica. | Descarta algún falso positivo, pero clasifica de forma imprecisa hallazgos críticos frente a menores. | Clasifica con acierto en `Crítico / Mayor / Menor / Falso Positivo` priorizando seguridad, protecciones y cálculo. | Filtra con rigor falsos positivos y falsos negativos, explicando causa física/eléctrica y bloqueos de emisión exactos. |
| **Criterio técnico y dictamen humano final** | Presenta el informe de la IA como aprobación definitiva del proyecto o ignora particularidades reglamentarias. | Recuerda la revisión humana de forma genérica, sin detallar qué comprobaciones gráficas o normativas faltan. | Emite dictamen técnico fundamentado reteniendo emisión cuando hay bloqueos críticos y señalando normativa a verificar. | Redacta un dictamen profesional riguroso con plan de cierre en cascada, delimitación absoluta de responsabilidades y verificación independiente. |

### Actividad de autoevaluación

Cuestionario breve individual al término de la clase:
- ¿He verificado manualmente con calculadora u hoja de cálculo todas las intensidades, potencias y variaciones porcentuales señaladas en el caso práctico? *(Sí / No)*
- ¿He identificado claramente qué partes de la revisión técnica (esquemas gráficos PDF, selectividad de protecciones, normativa específica de locales especiales) quedan fuera de lo que la IA puede auditar? *(Sí / No)*
- ¿Qué fallo recurrente entre mis herramientas (DIALux, Revit, Cuadro de cargas o PDF) vigilaré primero al preparar la entrega final del Tema 11? *(Respuesta en 3 líneas)*

---

## 8. Materiales y recursos

### Guion estructurado de diapositivas (8 diapositivas)

- **Slide 1 — Portada y alcance del Tema 10:** Posición en el Bloque 6 (Tema 49 de 50), por qué la IA asiste la auditoría documental pero nunca certifica proyectos.
- **Slide 2 — Por qué se desincronizan Cálculo, DIALux, Revit, PDF y Twinmotion:** Anatomía de un cambio de última hora y mapa de brechas habituales.
- **Slide 3 — Diseño de Checklists QA/QC por pares de documentos:** Criterios de tolerancia `0 %` vs. tolerancias acotadas y evidencias requeridas.
- **Slide 4 — Preparación de datos tabulares y clave primaria única:** Exportación limpia anonimizada y extracción verificada de unifilar y DIALux.
- **Slide 5 — Prompting comparativo de auditoría fila a fila:** Uso de delimitadores, reglas de alerta cuantitativas y citas exactas de origen.
- **Slide 6 — Falsos positivos y falsos negativos de la IA:** Ejemplos reales ($\text{kW}$ vs. $\text{kVA}$, circuitos reserva, lectura OCR defectuosa de PDFs) y cómo filtrarlos.
- **Slide 7 — Matriz de severidad y Dictamen Técnico Humano:** Criterios para aprobar, condicionar o retener una emisión de planos PDF.
- **Slide 8 — Caso práctico `PROY-SAN-02` y paso al proyecto integrador final:** Presentación del reto de la clínica ambulatoria y conexión con el Tema 11.

### Ficha de trabajo del alumnado

Cuaderno operativo dividido en tres partes:
1. **Registro de detección rápida (Actividad 1):** Tabla para anotar los 7 fallos encontrados en 15 minutos (`Circuito/Zona | Documento A | Documento B | Discrepancia exacta`).
2. **Mesa de depuración de auditoría (Actividad 2):** Tabla de clasificación con columnas `ID_Alerta | Origen IA | Comprobación Manual SI | Veredicto (Crítico / Mayor / Menor / Falso Positivo)`.
3. **Plantilla de Dictamen Humano (Caso Práctico):** Formato resumido de informe previo a emisión con bloque de firmas y lista de comprobaciones fuera del alcance de la IA.

### Plantilla técnica práctica: Matriz de Auditoría Cruzada QA/QC y Dictamen de Emisión

| ID Hallazgo | Par contrastado | Elemento / Circuito | Valor Fuente A (SI) | Valor Fuente B (SI) | Severidad | Veredicto humano | Acción correctiva y responsable |
|---|---|---|---|---|---|---|---|
| `[AUD-01]` | `[Cuadro ↔ Unifilar]` | `[C-CLIMA-01]` | `[3,2 kW / 20 A]` | `[4,8 kW / 25 A]` | `[Crítico]` | `[Confirmado]` | `[Recalcular cable y protección bajo norma vigente · ING-ELEC]` |

### Lecturas y recursos recomendados

> **Advertencia obligatoria de validación:** Las listas de comprobación, criterios de tolerancia y referencias normativas citadas en estos materiales tienen carácter exclusivamente formativo. Debéis confirmar siempre el país, reglamento eléctrico vigente (incluyendo requisitos especiales para locales de pública concurrencia, sanitarios o industriales), edición actual y normativa fotométrica aplicable antes de auditar o emitir cualquier proyecto real.

- **Estándares de gestión de calidad y revisión técnica (referencia orientativa a verificar):** ISO 9001 (principios de control documental y revisión de diseño) y serie ISO 19650 sobre control de estados de información en entornos BIM (*Trabajo en curso / Compartido / Publicado*).
- **Marcos normativos eléctricos según jurisdicción (a validar en edición vigente):** REBT en España (p. ej. instrucciones generales y específicas de locales especiales si aplican), IEC 60364 o NFPA 70 / NEC en las jurisdicciones que correspondan, verificando siempre textos oficiales publicados.
- **Normas de iluminación de referencia (a validar según jurisdicción):** UNE-EN 12464-1 para iluminación interior de lugares de trabajo y criterios aplicables de alumbrado de emergencia.
- **Guías técnicas de evaluación crítica de LLM:** Documentación oficial de OpenAI y Anthropic sobre limitaciones de modelos de lenguaje en cálculo aritmético complejo, lectura visual de planos densos y verificación humana (*Human-in-the-loop*).

### Glosario de términos clave

| Término | Definición |
|---|---|
| **Auditoría cruzada multifuente** | Revisión sistemática que contrasta datos equivalentes entre memoria de cálculo, unifilar, DIALux, Revit MEP y planos PDF para descubrir inconsistencias ocultas. |
| **Clave primaria de cruce** | Identificador único idéntico (`ID_Circuito`, `ID_Local`) empleado en todas las herramientas del proyecto para alinear elementos sin ambigüedad durante una comparación. |
| **Falso positivo** | Alerta generada por la IA que señala un error inexistente, habitualmente por falta de contexto sobre factores de potencia, simultaneidad o circuitos de reserva. |
| **Falso negativo** | Error real y potencialmente grave del proyecto que la IA omite detectar por limitaciones de contexto, falta de cálculo normativo o lectura gráfica incompleta. |
| **Matriz de severidad** | Escala de priorización (`Crítico`, `Mayor`, `Menor`) que clasifica cada inconsistencia según su impacto en seguridad eléctrica, cumplimiento o ejecución en obra. |
| **Brecha de trazabilidad gráfica** | Limitación de los asistentes textuales ante fallos exclusivamente visuales en planos o esquemas PDF que exigen inspección directa del técnico revisor. |
| **Dictamen de revisión humana** | Resolución formal emitida y asumida por un técnico competente que autoriza, condiciona o retiene la emisión documental tras comprobar todas las incidencias. |

---

## 9. Adaptaciones

### Sesión presencial

- **Dinámica de aula:** Actividad 1 en papel impreso A4 con cronómetro visible en proyector para generar tensión realista previa a entrega; Actividades 2 y 3 en equipos con ordenador proyectando resultados comparativos de severidad.
- **Debate activo:** Juego de roles breve donde una mitad del grupo actúa como «Auditor QA/QC» y la otra defiende la entrega antes de analizar el dictamen final de `PROY-SAN-02`.

### Sesión online síncrona

- **Gestión de archivos:** Paquetes CSV (`Reto_T10`, `PROY-TAL-06`, `PROY-SAN-02`) distribuidos al inicio en enlace del campus virtual para evitar problemas de formato al copiar desde pantalla.
- **Trabajo en salas:** Salas pequeñas de 3 participantes; el formador supervisa que todos completen la verificación numérica en hoja de cálculo independiente antes de clasificar hallazgos.
- **Votación en directo:** Sondeo instantáneo durante el caso práctico para decidir `APROBAR vs. RETENER EMISIÓN` y analizar argumentos antes de mostrar el cálculo verificado de $24,55\text{ A}$.

### Sesión asíncrona

- **Contenidos en vídeo:** Dos vídeos grabados (18 min cada uno): demostración de auditoría comparativa con 4 CSVs en ChatGPT/Claude y análisis comentado de los errores de `PROY-TAL-06` enfatizando falsos positivos y falsos negativos.
- **Entregable autónomo:** El alumnado realiza las Actividades 1, 2 y 3 y el caso `PROY-SAN-02`, entregando un informe único PDF/Markdown con sus tablas de severidad, capturas de comprobación en hoja de cálculo y dictamen redactado.
- **Interacción:** Foro técnico donde cada participante publica un ejemplo real o simulado de falso positivo encontrado en su prueba y revisa el *checklist* QA/QC de un compañero; devolución individual del formador con rúbrica.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Integra la lectura de cuadros de cargas y unifilares (**Módulo 1**), métricas fotométricas de **DIALux (Módulo 2)**, tablas de planificación y circuitos de **Revit MEP (Módulo 3)**, entregables PDF (**Módulo 4**), diferenciación visual de **Twinmotion (Módulo 5)**, y los flujos de revisión de resultados, *prompts* de 6 capas, estandarización documental y control de datos aprendidos en los **Temas 6, 7, 8 y 9 del Bloque 6**.
- **Competencias que desarrolla:** Auditoría de calidad multifuente en ingeniería eléctrica BIM, pensamiento crítico frente a resultados automatizados, priorización técnica de riesgos y toma de decisiones de control documental bajo responsabilidad profesional.
- **Conexión con el tema anterior y posterior en el programa (6 módulos / 50 temas):**
  - *Tema anterior — Bloque 6, Tema 9 de 11 (Tema 48 de 50): Automatización de tareas repetitivas y organización de información del modelo.* El Tema 9 garantizó modelos limpios y exportaciones seguras; el Tema 10 utiliza esas salidas ordenadas para cruzar y auditar todo el proyecto antes de emitirlo.
  - *Tema posterior — Bloque 6, Tema 11 de 11 (Tema 50 de 50): Caso práctico: aplicación de IA en un proyecto de instalaciones eléctricas modelado en Revit.* El Tema 10 aporta la metodología exacta de auditoría cruzada, matriz de severidad y dictamen humano que cerrará el Dossier Auditado de IA del proyecto integrador final.
- **Evidencia de aprendizaje generada:** **Matriz QA/QC personalizada, registro depurado de falsos positivos y Dictamen de Auditoría del caso `PROY-SAN-02`**, base metodológica inmediata para el proyecto de cierre del Tema 11.

---

## Siguientes pasos para el formador

1. Verificar con antelación todos los números de control de `Reto_T10_LocalComercial`, `PROY-TAL-06` y `PROY-SAN-02` ($24,55\text{ A}$ en `C-CLIMA-EXT`, $360\text{ W}$ en `C-AL-CURAS`) para conducir la puesta en común sin vacilaciones.
2. Enfatizar durante toda la clase que un visto bueno de IA no tiene valor técnico ni legal, y que los esquemas gráficos complejos y normativas de locales especiales exigen inspección directa por técnico competente bajo la edición vigente del país aplicable.
3. Revisar las matrices QA/QC elaboradas en la Actividad 3 para confirmar que el alumnado está preparado para integrar todas las evidencias de los 6 módulos en la sesión final.
4. Recordar a los participantes traer al **Tema 11** todos sus materiales del proyecto de curso (ficha, cuadro de cargas, unifilar, informe DIALux, tablas Revit, juego PDF, capturas Twinmotion y biblioteca de *prompts*) debidamente anonimizados.
