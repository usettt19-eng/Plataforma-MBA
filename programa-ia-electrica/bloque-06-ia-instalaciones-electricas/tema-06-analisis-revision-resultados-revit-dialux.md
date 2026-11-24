# Tema 6. Análisis y revisión de resultados obtenidos en Revit y DIALux

> **Aviso técnico, normativo y de responsabilidad profesional:** Este módulo pertenece al programa de especialización técnica *IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas* (no es un MBA ni habilita legalmente para firmar proyectos o certificados eléctricos oficiales). La exportación tabular de resultados desde Revit MEP y DIALux hacia asistentes de IA tiene finalidad exclusiva de apoyo al control de calidad (QA/QC): **ninguna revisión efectuada por ChatGPT o Claude sustituye la verificación reglamentaria de cálculo eléctrico, ni la validación fotométrica en DIALux, ni la comprobación geométrica y de circuitos dentro de Revit**. Toda referencia ilustrativa de valores límite ($E_m$, $U_0$, $UGR$, $VEEI$ o porcentaje de desequilibrio entre fases) debe contrastarse frente al reglamento, norma vigente (p. ej. UNE-EN 12464-1, CTE DB-HE 3, REBT, IEC 60364 o normativa local) y criterio técnico aplicable en el país del proyecto.

---

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Tema 6. Análisis y revisión de resultados obtenidos en Revit y DIALux |
| **Bloque y posición dentro del programa** | Bloque 6: Inteligencia artificial aplicada a instalaciones eléctricas — Tema 6 de 11 (Tema 45 de 50 del programa) |
| **Programa formativo** | IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas (Especialización Técnica en Ingeniería Eléctrica, BIM, Iluminación, Renderizado e IA Asistida — 6 módulos / 50 temas) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Haber completado los Temas 1 a 5 del Bloque 6 (anonimización, totales de control, doble verificación y hoja de cálculo auditable); dominio previo de cálculo y lectura de resultados en DIALux (Bloque 2), modelado eléctrico en Revit MEP (Bloque 3) y documentación de planos y tablas (Bloque 4) |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado preparará exportaciones tabulares limpias y anonimizadas desde DIALux (lux, $U_0$, $UGR$, densidad de potencia/$VEEI$) y Revit MEP (*panel schedules*, tablas de circuitos y canalizaciones/*conduits*) en formato CSV/Markdown para detectar de forma asistida por IA anomalías, desequilibrios de fases, inconsistencias entre modelos y locales fuera de rango antes de emitir los planos PDF definitivos, verificando siempre todos los hallazgos de forma determinista en origen. |

---

## 2. Objetivos de aprendizaje

Al finalizar esta sesión de 4 horas, el alumnado será capaz de:

1. **Identificar** las variables técnicas clave exportables desde DIALux ($E_m$, $U_0$, $UGR$, potencia instalada, $\text{W/m}^2$ y $VEEI$ cuando aplique) y Revit MEP (*panel schedules*, circuitos, fases L1–L3, longitudes y *conduits*) necesarias para una auditoría previa a emisión de planos. *(Nivel de Bloom: Recordar)*
2. **Explicar** los límites reales de interoperabilidad entre DIALux, Revit MEP y asistentes de IA (por qué se requiere exportación tabular CSV/Markdown limpia y anonimizada en lugar de subir modelos `.rvt` o proyectos de DIALux nativos). *(Nivel de Bloom: Comprender)*
3. **Aplicar** un procedimiento sistemático de extracción, limpieza, anonimización y definición de rangos objetivo para detectar con ChatGPT o Claude locales fuera de norma, circuitos huérfanos y errores de modelado. *(Nivel de Bloom: Aplicar)*
4. **Analizar** desequilibrios de fases en *panel schedules* de Revit MEP y discrepancias cuantitativas entre luminarias simuladas en DIALux y modeladas en Revit, comprobando numéricamente en hoja de cálculo cualquier propuesta de reequilibrio. *(Nivel de Bloom: Analizar)*
5. **Evaluar** la aptitud de un paquete BIM y lumínico para su paso a emisión de láminas PDF mediante una lista de control QA/QC asistida por IA con cierre de incidencias trazable en el modelo original. *(Nivel de Bloom: Evaluar)*

---

## 3. Contenidos esenciales

### 3.1. Exportación tabular limpia desde DIALux y Revit MEP hacia formato CSV/Markdown

#### Explicación breve y clara
Antes de pulsar el botón de impresión a PDF del juego definitivo de planos (Bloque 4), un proyecto suele acumular decenas de locales calculados en **DIALux** y decenas o cientos de circuitos repartidos en varios cuadros dentro de **Revit MEP**. Revisar manualmente celda a celda buscando un $UGR$ elevado, una uniformidad baja o un circuito sin asignar a tablero consume mucho tiempo y favorece despistes por fatiga visual.

Sin embargo, conviene mantener un **realismo estricto sobre la interoperabilidad**: ni DIALux ni Revit disponen de una conexión automática directa con ChatGPT o Claude lista para auditar nativamente modelos `.rvt` o `.evo` sin preparación previa (cualquier automatización futura de extracción en Revit depende de la versión instalada, Dynamo, API o complementos aprobados). El flujo universal, robusto y reproducible hoy en oficina técnica consiste en **exportar vistas tabulares limpias**, sanearlas y anonimizarlas en hoja de cálculo, y pasarlas como **CSV o tabla Markdown** con totales de control previos:
- **Desde DIALux:** tabla resumen por local/zona de cálculo (`ID_Local | Uso_Tipo | Area_m2 | Em_lx | U0 | UGR | P_Ilum_W | W_m2 | VEEI | N_Lum | Ref_Lum`).
- **Desde Revit MEP:**
  1. *Panel Schedules* exportados y normalizados en tabla plana (`Cuadro | Circuito | Descripcion_Anon | Fases | VA_L1 | VA_L2 | VA_L3 | Longitud_m | Calibre_mm2 | Proteccion_A`).
  2. Tablas de planificación (*Schedules*) de **luminarias** (`ID_Local | Familia_Lum | Cantidad_Revit | Potencia_W | Circuito`), **equipos eléctricos** y **tubos/bandejas (*Conduits / Cable Trays*)** (`ID_Tramo | Sistema | Diametro_Dimension | Longitud_m | Servicio`).

#### Conceptos clave
- **Paquete mínimo de auditoría QA/QC:** cuatro tablas planas anonimizadas (`DIALux_Locales`, `Revit_Circuitos`, `Revit_Luminarias`, `Revit_Conduits`) suficientes para detectar el grueso de anomalías previas a planos.
- **Aplanado de *Panel Schedules*:** los cuadros de Revit suelen exportarse con columnas L1/L2/L3 en bloque visual; deben convertirse en filas homogéneas por circuito con columnas separadas para cada fase antes de leerlos en IA.
- **Preservación de unidades SI:** incluir siempre la unidad en la cabecera (`Em_lx`, `VA_L1`, `Longitud_m`) y verificar decimales homogéneos.
- **Anonimización sistemática previa:** eliminar nombres de edificio/cliente, direcciones, marcas confidenciales y rutas de archivo antes de transferir el CSV/Markdown al asistente externo.

#### Definiciones necesarias
- **Tabla de planificación (*Schedule*) en Revit MEP:** vista tabular paramétrica vinculada dinámicamente a los elementos del modelo BIM (circuitos, luminarias, cuadros o tubos/*conduits*) que puede exportarse a texto delimitado (`.txt`/`.csv`) para análisis externo.
- **VEEI (Valor de Eficiencia Energética de la Instalación):** indicador específico de eficiencia energética de iluminación (habitual en normativas como el CTE DB-HE 3 español, expresado en $\text{W/m}^2$ por cada $100\text{ lx}$) cuya obligatoriedad, fórmula y valores límite deben verificarse siempre según el país y reglamento vigente del proyecto.

#### Ejemplo práctico realista
Una coordinadora BIM prepara la revisión previa a planos de un edificio docente (`EXP_DOC_03`, 16 locales y 2 subcuadros). En lugar de subir PDFs de 40 páginas de informes DIALux y capturas de los *panel schedules* de Revit, dedica 8 minutos a exportar las tablas desde Revit (`Archivo > Exportar > Informes > Tabla de planificación`) y extraer la tabla resumen de locales desde el informe de DIALux a hoja de cálculo. En Excel limpia las filas de encabezado decorativas, sustituye nombres de despachos reales por códigos `LOC-01..LOC-16`, calcula los totales de control (`Total iluminación DIALux = 14.200 W`, `Total potencia Revit = 68.400 VA`, `N.º circuitos = 34`, `N.º conduits = 128`) y exporta los CSV limpios listos para auditar.

#### Errores frecuentes
- Intentar subir un archivo binario `.rvt` o un informe PDF de DIALux de 80 páginas con gráficos fotométricos esperando que el chat extraiga bien todas las filas.
- Dejar en el CSV exportado de *conduits* unidades en milímetros mezcladas con pulgadas o longitudes con sufijo ` m` dentro de la celda numérica.
- Olvidar extraer la tabla de **luminarias modeladas por espacio en Revit**, impidiendo cruzar luego el recuento real frente a DIALux.
- Subir la exportación directa sin anonimizar cajetines ni descripciones de salas sensibles.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué cuatro tablas exportadas desde DIALux y Revit MEP permiten realizar una auditoría integral previa a la impresión de planos?
2. ¿Por qué un *panel schedule* exportado directamente de Revit necesita «aplanarse» en filas homogéneas antes de analizarlo con ChatGPT o Claude?
3. ¿Qué límites reales de interoperabilidad existen hoy entre DIALux, Revit MEP y los asistentes de IA?

---

### 3.2. Detección asistida de locales fuera de rango y anomalías en resultados de DIALux

#### Explicación breve y clara
Al revisar una tabla de resultados de DIALux con 15 a 50 locales, el ojo humano tiende a fijarse únicamente en la iluminancia media ($E_m$) y pasar por alto desviaciones críticas en uniformidad ($U_0$), deslumbramiento unificado ($UGR$), sobredimensionamiento excesivo ($E_m$ muy superior al objetivo disparando el consumo) o eficiencia energética ($VEEI$ / densidad de potencia en $\text{W/m}^2$).

ChatGPT y Claude resultan muy útiles cuando el proyectista aporta **dos tablas limpias en la misma consulta**:
1. **Tabla de Resultados Reales DIALux** (`ID_Local | Uso_Tipo | Em_lx | U0 | UGR | W_m2 | VEEI | N_Lum`).
2. **Tabla de Criterios Objetivo del Proyecto** definida previamente por el proyectista tras consultar la normativa aplicable de su jurisdicción (p. ej. tomando valores ilustrativos de referencia tipo UNE-EN 12464-1 para aulas, oficinas o pasillos, y límites locales de eficiencia energética).

El asistente compara cada fila de resultados contra su fila de uso tipo y genera una tabla de alertas señalando: **déficit lumínico** ($E_m < E_{obj}$), **sobreiluminación antieconómica** ($E_m > 1,40 \cdot E_{obj}$), **baja uniformidad** ($U_0 < U_{0,min}$), **deslumbramiento excesivo** ($UGR > UGR_{max}$) o **exceso de densidad energética**. El proyectista verifica después cada alerta directamente dentro de DIALux.

#### Conceptos clave
- **Tabla de criterios objetivo proporcionada por el técnico:** prohibido pedir a la IA «dime si cumple según la norma»; el proyectista entrega la tabla explícita de valores límite verificados para ese país y uso.
- **Auditoría multidimensional ($E_m$, $U_0$, $UGR$, $\text{W/m}^2$/$VEEI$):** una sala puede alcanzar $520\text{ lx}$ de media y aun así resultar incómoda o antirreglamentaria por $UGR = 23$ o $U_0 = 0,35$.
- **Detección de sobreiluminación oculta:** detectar locales con $E_m = 820\text{ lx}$ cuando el objetivo era $500\text{ lx}$ reduce potencia instalada, carga térmica en climatización y mejora el $VEEI$.
- **Verificación en motor fotométrico:** cualquier anomalía detectada en CSV se corrige modificando altura, interdistancia, potencia u óptica `.ldt`/`.ies` dentro de DIALux y recalculando, jamás ajustando números a mano en la tabla.

#### Definiciones necesarias
- **Local fuera de rango:** recinto cuya simulación fotométrica en DIALux incumple al menos uno de los umbrales objetivo definidos para su uso (iluminancia media mínima $E_m$, uniformidad mínima $U_0$, índice máximo de deslumbramiento $UGR$ o indicador energético aplicable).
- **Uniformidad general ($U_0$):** relación entre la iluminancia mínima ($E_{min}$) y la iluminancia media ($E_m$) sobre el plano de trabajo o área de cálculo ($U_0 = E_{min} / E_m$); valores demasiado bajos indican zonas oscuras o parches irregulares de luz.

#### Ejemplo práctico realista
Al cruzar en Claude la tabla anonimizada de 12 locales de un centro técnico frente a la tabla de criterios objetivo definida por el proyectista, el asistente detecta tres locales fuera de rango:
- `LOC-04` (*Aula CAD con pantallas*): $E_m = 480\text{ lx}$ frente a objetivo $500\text{ lx}$ (ligero déficit del $-4\,\%$), pero **$UGR = 22$** frente a un límite objetivo de $19$ (riesgo serio de deslumbramiento en monitores).
- `LOC-08` (*Pasillo de talleres*): $E_m = 145\text{ lx}$ (supera $100\text{ lx}$), pero **$U_0 = 0,25$** frente a objetivo $0,40$ (zonas en penumbra entre luminarias muy separadas).
- `LOC-11` (*Recepción*): $E_m = 210\text{ lx}$, pero **$VEEI = 4,8$** frente a objetivo local de $3,5$ (luminaria decorativa de baja eficacia lumínica).
El técnico abre DIALux, verifica exactamente esos tres locales, redistribuye los puntos del pasillo `LOC-08` y sustituye las ópticas en `LOC-04` y `LOC-11` con archivos `.ldt` reales antes de actualizar Revit MEP.

#### Errores frecuentes
- Pedir al LLM que evalúe el CSV de DIALux usando límites normativos «que recuerde de memoria» en lugar de facilitarle la tabla de objetivos verificada del país aplicable.
- Fijarse únicamente en el promedio global del edificio o en que $E_m$ sea alto, pasando por alto $U_0$ bajo en pasillos o $UGR > 19$ en puestos con ordenador.
- Olvidar que un valor correcto de luz normal en DIALux **no** implica que el local cumpla el alumbrado de emergencia/evacuación, que debe simularse aparte.
- Cambiar la posición o número de luminarias en DIALux para resolver un fallo y olvidar trasladar ese cambio al modelo Revit MEP.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué debe entregarse al asistente la tabla explícita de límites objetivo ($E_m$, $U_0$, $UGR$, eficiencia) junto al CSV de DIALux en lugar de dejar que la IA los suponga?
2. ¿Cómo puede un local tener $E_m = 550\text{ lx}$ y aun así resultar técnicamente inaceptable en la revisión de DIALux?
3. ¿Qué pasos reales debe ejecutar el técnico cuando la IA señala una anomalía en el CSV de DIALux?

---

### 3.3. Auditoría de *panel schedules*, desequilibrios de fases y anomalías en Revit MEP

#### Explicación breve y clara
En proyectos de baja tensión con alimentación trifásica ($400/230\text{ V}$ o equivalente según país), los modelos BIM de Revit MEP crecen de forma iterativa: se añaden tomas, se borran luminarias, se cambian locales o se reubican equipos. Si no se ejecuta una auditoría sistemática antes de emitir las láminas de cuadros y planos, aparecen cuatro anomalías clásicas en las tablas exportadas de Revit:
1. **Desequilibrio de fases (L1, L2, L3):** la suma de cargas monofásicas recae desproporcionadamente sobre una fase (p. ej. L1 al $43\,\%$ de la potencia total y L2 al $27\,\%$), provocando caída de tensión asimétrica, sobrecarga en esa fase o corrientes excesivas por el neutro.
2. **Circuitos huérfanos o incompletos:** elementos eléctricos modelados sin asignar a ningún cuadro (`Panel = <vacío>`), circuitos con carga conectada `0 VA` por error de familia, o descripciones genéricas (`Alumbrado` sin indicar zona).
3. **Longitudes de circuito anómalas:** longitudes estimadas en Revit iguales a `0 m` (circuito sin ruta calculada) o valores extremos irreales (`420 m` en una planta de $45\text{ m}$ por fallo de modo de recorrido).
4. **Anomalías en *conduits*/bandejas:** tramos sin parámetro de sistema asignado, diámetros vacíos o discrepancias evidentes entre el calibre de circuito modelado y su longitud real.

El LLM ayuda a **escanear rápidamente centenares de filas** para marcar candidatos sospechosos y proponer opciones preliminares de intercambio de circuitos entre L1, L2 y L3; sin embargo, **todos los cálculos de porcentaje de desequilibrio y la reasignación definitiva deben comprobarse en hoja de cálculo determinista y aplicarse directamente en Revit MEP**, recordando además que el *panel schedule* de Revit no sustituye el cálculo eléctrico reglamentario completo.

#### Conceptos clave
- **Métrica de desequilibrio entre fases:** porcentaje de desviación máxima de cualquier fase respecto a la media trifásica ($\frac{|S_{fase} - S_{media}|}{S_{media}} \times 100$) o diferencia entre fase máxima y mínima; el técnico define el umbral objetivo aceptable del proyecto (habitualmente $\le 10\text{–}15\,\%$ salvo justificación o criterio local).
- **Escaneo de integridad de datos BIM:** búsqueda de campos vacíos, ceros sospechosos, duplicados de nombre de circuito y valores atípicos (*outliers*) de longitud o potencia.
- **Separación de circuitos trifásicos vs. monofásicos:** al analizar equilibrio L1-L2-L3, recordar que una carga trifásica equilibrada aporta un tercio a cada fase, mientras que el desequilibrio nace de las cargas monofásicas mal repartidas.
- **Límite de Revit respecto a cálculo reglamentario:** corregir desequilibrios y longitudes en Revit mejora la calidad del modelo y de las láminas de cuadros, pero la sección final, selectividad, $I_z$ y cortocircuito siguen validándose en software/hoja de cálculo eléctrica.

#### Definiciones necesarias
- **Desequilibrio de fases:** desigualdad significativa entre las potencias o corrientes demandadas por cada una de las tres fases (L1, L2, L3) de un cuadro eléctrico trifásico, que degrada el aprovechamiento de la acometida y eleva la corriente de neutro y la caída de tensión en la fase más cargada.
- **Circuito huérfano en BIM:** aparato, luminaria o circuito eléctrico presente en el modelo Revit MEP que carece de asignación a un cuadro eléctrico (*Panel*), carece de carga definida o presenta desconexión lógica respecto al esquema unifilar del proyecto.

#### Ejemplo práctico realista
Al analizar el CSV aplanado del cuadro `CS-TALLER` (alimentación trifásica, suma total verificada $= 33.000\text{ VA}$, media por fase $= 11.000\text{ VA}$), los sumatorios en hoja de cálculo muestran: **$L_1 = 14.200\text{ VA}$**, **$L_2 = 9.100\text{ VA}$**, **$L_3 = 9.700\text{ VA}$**. El desequilibrio máximo respecto a la media en $L_1$ es $\frac{|14.200 - 11.000|}{11.000} = \mathbf{29,09\,\%}$. Al pedir al asistente sugerencias de reequilibrio moviendo únicamente circuitos monofásicos completos sin alterar protecciones ni usos críticos, propone desplazar dos circuitos desde $L_1$: `C-07` ($2.200\text{ VA}$) hacia $L_2$ y `C-09` ($1.200\text{ VA}$) hacia $L_3$. El técnico comprueba las sumas en Excel antes de tocar Revit:
$$L_1' = 14.200 - 2.200 - 1.200 = 10.800\text{ VA}, \quad L_2' = 9.100 + 2.200 = 11.300\text{ VA}, \quad L_3' = 9.700 + 1.200 = 10.900\text{ VA}$$
Suma total $= 33.000\text{ VA}$ (coincide), y la desviación máxima respecto a la media ($11.000\text{ VA}$) baja del **$29,09\,\%$** al **$2,73\,\%$**. El técnico aplica el cambio directamente en el *Panel Schedule* de Revit.

#### Errores frecuentes
- Confiar en las sumas de L1, L2 y L3 que calcula un LLM directamente en texto sin haberlas recalculado antes con `SUMAR.SI` en Excel/Calc.
- Equilibrar fases en un cuadro moviendo circuitos que deben permanecer en fases específicas por exigencia operativa o mezclando circuitos de alumbrado de emergencia con tomas generales sin criterio.
- Ignorar la columna `Longitud_m` exportada de Revit pensando que solo es decorativa, cuando un circuito marcado con `420 m` o `0 m` delata un error grave de trazado o conexión en el modelo 3D.
- Suponer que equilibrar el cuadro en Revit significa que la caída de tensión y la protección diferencial ya cumplen el reglamento.

#### Preguntas que el alumnado debería poder responder
1. ¿Cómo se calcula en hoja de cálculo el porcentaje de desequilibrio de fases de un cuadro trifásico a partir de las potencias por fase exportadas de Revit?
2. ¿Qué cuatro tipos de anomalías de modelado BIM pueden detectarse inspeccionando las columnas de circuitos y *conduits* en un CSV limpio?
3. ¿Por qué toda propuesta de intercambio de circuitos sugerida por ChatGPT o Claude debe validarse numérica y operativamente antes de editar el *Panel Schedule* en Revit?

---

### 3.4. Flujo QA/QC previo a emisión de planos (cruce Revit–DIALux y cierre de incidencias)

#### Explicación breve y clara
El mayor valor estratégico de combinar **DIALux + Revit MEP + IA** aparece en el **cruce final de coherencia antes de emitir planos PDF**. Un proyecto puede tener cálculos en DIALux impecables en una carpeta y cuadros equilibrados en Revit en otra, pero presentar incoherencias entre ambos: por ejemplo, DIALux calculó $18$ campanas LED en un taller y el modelador solo colocó $14$ en Revit (porque amplió el taller en la última revisión arquitectónica y olvidó reimportar/actualizar), o una familia en Revit tiene asignada una potencia nominal de `45 W` cuando la luminaria final elegida en DIALux consume `32 W`.

Integrar esta revisión en una **Puerta de Calidad Pre-Emisión (QA/QC Gate)** sigue una secuencia clara de 5 pasos:
1. **Exportar y anonimizar** las 4 tablas limpias (DIALux por local + Revit circuitos, luminarias y *conduits*) + totales de control previos en Excel.
2. **Ejecutar el cruce asistido en IA** comparando por `ID_Local`: cantidad y potencia total de luminarias en DIALux frente a Revit, más detección de locales DIALux fuera de rango y circuitos/longitudes anómalos en Revit.
3. **Verificar Capa 1 y Capa 2** sobre todas las alertas devueltas por el asistente (eliminando falsos positivos y confirmando hallazgos reales en hoja de cálculo).
4. **Corregir el origen real**: ajustar DIALux, actualizar familias/circuitos/fases en Revit MEP y realinear el cálculo eléctrico si varió la potencia.
5. **Registrar el cierre `CERRADA / VERIFICADA`** en la lista de control QA/QC antes de imprimir las láminas a PDF (Bloque 4).

#### Conceptos clave
- **Cruce cuantitativo por local (`N_Lum_DIALux` vs. `N_Lum_Revit`):** detección inmediata de luminarias olvidadas, duplicadas o mal etiquetadas entre el estudio lumínico y los planos BIM.
- **Coherencia de potencia conectada (`W_DIALux` vs. `VA_Revit_Alumbrado`):** aseguramiento de que los cambios tardíos de luminaria en DIALux se reflejan en el cuadro eléctrico de Revit y en la memoria de cálculo.
- **Puerta QA/QC Pre-PDF:** hito obligatorio donde no se imprime ningún plano definitivo mientras exista una anomalía crítica abierta sin justificación técnica firmada.
- **Trazabilidad en bitácora:** documentar qué incidencias detectó el análisis asistido y quién validó su corrección en el software nativo.

#### Definiciones necesarias
- **Puerta de Calidad Pre-Emisión (*QA/QC Pre-Issue Gate*):** punto de control formal previo a la generación de planos PDF y entrega al cliente en el que deben verificarse y cerrarse todas las discrepancias entre cálculos eléctricos, estudio DIALux, modelo BIM Revit y memoria técnica.
- **Discrepancia Revit–DIALux:** diferencia verificada en número de unidades, código de tipo/familia, potencia eléctrica o ubicación zonal entre las luminarias simuladas en DIALux y las modeladas e incorporadas a circuitos en Revit MEP.

#### Ejemplo práctico realista
En la puerta QA/QC de un edificio de aulas (`Campus TecnoFutura`), el cruce CSV asistido por ChatGPT señala que el taller `LOC-02` tiene **18 luminarias ($1.800\text{ W}$)** en DIALux y **14 luminarias ($1.400\text{ W}$)** en Revit, además de una diferencia de potencia unitaria en el pasillo `LOC-08` (`38 W` en DIALux vs. `45 W` en el tipo de familia Revit). El coordinador BIM abre la vista de techo reflejado en Revit, comprueba que efectivamente faltaba la última fila de 4 luminarias junto al portón tras mover un tabique, las coloca y conecta al circuito `C-14`, corrige el parámetro de potencia del tipo en Revit de `45 W` a `38 W`, vuelve a calcular sus totales de control y el equilibrio de fases en Excel y solo entonces imprime los planos PDF revisados.

#### Errores frecuentes
- Corregir un fallo detectado en el informe de Excel o en el borrador de la memoria «maquillando el número en el texto» sin entrar a modificar el modelo Revit MEP ni recalcular DIALux.
- Volver a imprimir los planos PDF después de equilibrar fases en Revit sin regenerar antes la tabla de *Panel Schedule* y el esquema unifilar vinculados.
- Dar por cerrado el QA/QC con una única pasada antes de cambios arquitectónicos tardíos en lugar de repetir la exportación y el cruce rápido tras el último cambio.
- Creer que una revisión asistida por IA que devuelve «0 errores» garantiza que el proyecto cumple normativa sin revisión humana de campo, protecciones y cálculo.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué comprueba exactamente el cruce por `ID_Local` entre la exportación de luminarias de DIALux y la tabla de luminarias/circuitos de Revit MEP?
2. ¿Por qué corregir una discrepancia únicamente en la memoria o en Excel sin actualizar Revit MEP y DIALux rompe la coherencia del proyecto BIM?
3. ¿Qué cinco pasos componen una Puerta de Calidad Pre-Emisión (QA/QC) asistida por IA antes de generar las láminas PDF?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** reproduce un ciclo completo de auditoría técnica previa a emisión de planos sobre exportaciones reales simuladas de DIALux y Revit MEP.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
|---|---|---|---|
| **1. Apertura y actividad de activación («El plano listo para imprimir… con 5 bombas ocultas»)** | 00:00 – 00:20 (20 min) | Presenta un paquete simulado «listo para PDF» (captura de tabla DIALux + *panel schedule* de Revit) y dinamiza la Actividad 1 de detección visual rápida. | Identifica en 8 minutos cuántas anomalías ocultas detecta a simple vista y experimenta la dificultad de auditar tablas densas sin flujo estructurado. |
| **2. Microexposición A: Exportación limpia desde DIALux/Revit y revisión fotométrica asistida** | 00:20 – 01:00 (40 min) | Explica cómo extraer y normalizar CSVs desde DIALux y Revit MEP (límites reales de interoperabilidad, aplanado de *panel schedules*, anonimización); muestra cómo cruzar resultados DIALux frente a tabla de objetivos verificados. | Diseña el esquema de columnas de sus cuatro tablas limpias de auditoría y practica la detección de locales fuera de rango ($E_m$, $U_0$, $UGR$, $VEEI$). |
| **3. Actividad 2: Auditoría tabular asistida de DIALux + Revit MEP** | 01:00 – 01:50 (50 min) | Entrega un juego de datos anonimizados (`Act2_Revit_DIALux_Pack.zip`); supervisa cálculo previo de totales de control en Excel, uso de IA para detectar anomalías y verificación Capa 1/Capa 2. | Prepara los CSV limpios, calcula totales de control en Excel, ejecuta la consulta de auditoría en ChatGPT/Claude y comprueba en hoja de cálculo qué alertas son reales y cuáles falsos positivos. |
| **Descanso activo** | 01:50 – 02:05 (15 min) | Pausa recomendada fuera de pantalla; verifica que los archivos del Caso práctico estén accesibles para todos los equipos. | Descansa y prepara su libro Excel de control para el Caso práctico. |
| **4. Microexposición B: Desequilibrios de fases, *conduits* y Puerta QA/QC Pre-PDF** | 02:05 – 02:35 (30 min) | Explica el cálculo determinista de desequilibrio L1–L2–L3, detección de circuitos huérfanos/longitudes atípicas y cierre obligatorio de incidencias en el modelo nativo antes de imprimir PDF. | Recalcula a mano/Excel un ejemplo de desequilibrio de fases del $29\,\%$ y verifica matemáticamente una propuesta de reequilibrio al $2,73\,\%$. |
| **5. Resolución del Caso práctico (*Campus TecnoFutura*)** | 02:35 – 03:20 (45 min) | Introduce el expediente `EXP_TEC_12` (12 locales DIALux + 3 cuadros Revit `CGMP`, `CS-AULA`, `CS-TALLER`); guía a los equipos en la auditoría integral y reequilibrio verificado. | Audita las exportaciones del caso mediante IA + Excel determinista, localiza todas las incidencias (desequilibrio `CS-TALLER`, circuitos huérfanos, discrepancia de luminarias y locales DIALux) y redacta el plan de corrección en Revit/DIALux. |
| **6. Actividad 3 y puesta en común (Transferencia a Checklist QA/QC propia)** | 03:20 – 03:45 (25 min) | Modera la exposición de hallazgos de dos equipos y orienta la adaptación de la Checklist QA/QC Pre-Emisión para su proyecto integrador del programa. | Construye su *Checklist QA/QC Pre-PDF Revit–DIALux–IA* personalizada con umbrales numéricos y protocolo de cierre de incidencias. |
| **7. Síntesis, evaluación sumativa y cierre** | 03:45 – 04:00 (15 min) | Resume las claves del control de calidad asistido por IA, aplica el cuestionario sumativo final y presenta el puente hacia el Tema 7 (*Generación de prompts especializados para instalaciones eléctricas*). | Completa el cuestionario sumativo (6 ítems), realiza su autoevaluación y archiva su checklist QA/QC. |

*Suma total cronometrada:* $20 + 40 + 50 + 15 + 30 + 45 + 25 + 15 = \mathbf{240\text{ minutos (4 horas)}}$.

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Cazadores visuales antes del PDF

- **Nombre:** Cazadores visuales antes del PDF
- **Objetivo:** Hacer evidente las limitaciones de la revisión «a ojo» sobre informes extensos de DIALux y cuadros de Revit MEP antes de introducir un flujo tabular estructurado con IA.
- **Instrucciones para el alumnado:**
  1. Observa durante 4 minutos cronometrados la tabla proyectada con 18 circuitos de un *panel schedule* y 12 locales de un informe DIALux.
  2. Sin utilizar Excel ni asistente de IA todavía, anota cuántas anomalías logras cazar en esos 4 minutos (p. ej. desequilibrio evidente de fases, local con $UGR$ o $U_0$ bajo, diferencia de potencia total o circuito con longitud `0 m`).
  3. Comparte tu recuento en el chat y compáralo con la lista completa real de 6 anomalías ocultas que revelará el formador.
- **Materiales necesarios:** Diapositiva densa simulando tablas reales previas a emisión, cronómetro y chat/pizarra.
- **Tiempo estimado:** 15 minutos (integrados en la Fase 1).
- **Rol del formador:** Cronometrar estrictamente 4 minutos para simular la presión real de entrega, mostrar luego las 6 anomalías ocultas y demostrar por qué combinar CSV limpio + Excel + IA evita pasar fallos a obra.
- **Producto o entregable esperado:** Anotación personal del número de hallazgos detectados manualmente vs. lista real.
- **Criterios de éxito:** El alumnado comprende la necesidad de automatizar la detección preliminar en tablas normalizadas sin renunciar al control determinista final.

### Actividad 2 (Aplicación técnica): Auditoría cruzada DIALux–Revit en CSV anonimizado

- **Nombre:** Auditoría cruzada DIALux–Revit en CSV anonimizado
- **Objetivo:** Preparar tablas limpias anonimizadas, calcular totales de control y utilizar ChatGPT o Claude junto a hoja de cálculo para localizar locales fuera de rango, anomalías de circuitos/*conduits* y discrepancias cuantitativas entre luminarias.
- **Instrucciones para el alumnado:**
  1. En parejas, descargad `Act2_Revit_DIALux_Pack.zip` (contiene datos brutos ficticios de 10 locales DIALux, 18 circuitos de Revit, listado de luminarias por espacio y listado de *conduits*, más una tabla de objetivos lumínicos).
  2. Limpiad y anonimizad las tablas eliminando dos identificadores de proyecto que aparecen en comentarios y aplanad los importes por fase (`VA_L1`, `VA_L2`, `VA_L3`). Calculad antes en Excel: suma total `VA`, reparto L1/L2/L3 y suma total de luminarias en DIALux y en Revit.
  3. Lanzad una consulta estructurada al asistente IA pidiendo: (a) tabla de locales fuera de rango comparando estrictamente frente a la tabla objetivo adjunta, (b) tabla de discrepancias `N_Lum` y potencia entre DIALux y Revit por `ID_Local`, y (c) alertas de circuitos huérfanos, longitudes atípicas y desequilibrio de fases.
  4. Verificad en Excel cada alerta generada por el asistente marcando `[CONFIRMADA]` o `[FALSO POSITIVO IA]`.
- **Materiales necesarios:** Paquete `Act2_Revit_DIALux_Pack.zip`, Excel/Calc y acceso a ChatGPT/Claude (o extractos simulados en entorno offline).
- **Tiempo estimado:** 50 minutos (Fase 3: 45 min de ejecución + 5 min de síntesis rápida).
- **Rol del formador:** Auditar que el alumnado calculó los totales de control antes de consultar al asistente y verificar si detectaron los posibles falsos positivos o errores de suma de la IA.
- **Producto o entregable esperado:** Paquete de CSVs limpios + Informe de Hallazgos Verificados en Excel (`[CONFIRMADA]` / `[FALSO POSITIVO IA]`).
- **Criterios de éxito:** Cero fugas de datos identificativos, totales de control exactos, detección mínima del 90 % de las anomalías reales sembradas y verificación independiente completa en hoja de cálculo.

### Actividad 3 (Transferencia a proyecto real): Puerta de Calidad Pre-PDF (Checklist QA/QC Revit–DIALux–IA)

- **Nombre:** Puerta de Calidad Pre-PDF (Checklist QA/QC Revit–DIALux–IA)
- **Objetivo:** Diseñar un procedimiento operativo estándar y lista de comprobación QA/QC reutilizable antes de imprimir láminas PDF en el proyecto integrador del curso o en la actividad profesional del alumno.
- **Instrucciones para el alumnado:**
  1. Abre la **Plantilla 6.6 — Checklist QA/QC Pre-Emisión PDF (DIALux + Revit MEP + IA)** (sección 8).
  2. Personalízala para tu flujo de trabajo real añadiendo: (a) nombres exactos de los *Schedules* que exportarás en tu plantilla de Revit, (b) columnas obligatorias de tu exportación DIALux según los criterios vigentes de tu país, (c) umbral máximo de desequilibrio de fases definido para tu proyecto y (d) columna de trazabilidad obligatoria de «Acción ejecutada en modelo nativo (Revit/DIALux)».
  3. Define quién firma internamente el visto bueno antes de pasar a impresión PDF (Bloque 4).
- **Materiales necesarios:** Plantilla editable de Checklist QA/QC (Excel/Markdown/Word).
- **Tiempo estimado:** 25 minutos (Fase 6).
- **Rol del formador:** Revisar dos checklists voluntarias proyectadas en pantalla verificando que contemplan la actualización bidireccional (corregir en DIALux y Revit antes de emitir PDF) y no dejan ninguna validación legal en manos del LLM.
- **Producto o entregable esperado:** Checklist QA/QC Pre-PDF personalizada de 1 página lista para utilizar en los Temas 7 a 11 y en oficina técnica.
- **Criterios de éxito:** Cubre exportación limpia, anonimización, contraste lumínico con objetivos verificados, equilibrio de fases/circuitos/*conduits* en Revit, cruce DIALux–Revit y cierre trazable en origen.

---

## 6. Caso práctico

### Caso práctico: Auditoría integral previa a emisión de planos en *Campus TecnoFutura*

#### Contexto empresarial
El departamento de ingeniería y coordinación BIM de **IngeLuz BIM Consultores S.L.** está a 48 horas de entregar los planos definitivos en PDF (Bloque 4) de la reforma de instalaciones eléctricas e iluminación del centro de formación técnica **Campus TecnoFutura** (nombre ficticio, código anonimizado `EXP_TEC_12`). El expediente consta de **12 locales simulados en DIALux** y **3 cuadros eléctricos modelados en Revit MEP** (`CGMP`, `CS-AULA` y `CS-TALLER`), además de la red principal de bandejas y *conduits* de planta.

#### Situación o problema
El coordinador BIM ha exportado y anonimizado correctamente las tablas de DIALux y Revit MEP en formato CSV plano. Se sospecha que las prisas de última hora por un cambio arquitectónico en el taller y el aula de informática dejaron inconsistencias entre ambos programas y un grave desequilibrio de cargas en uno de los subcuadros. El equipo debe emplear un flujo controlado (**Excel de totales de control + análisis con ChatGPT/Claude + validación determinista en Excel**) para localizar todas las anomalías de `EXP_TEC_12`, recalcular el reequilibrio de fases en `CS-TALLER` y emitir la orden exacta de correcciones dentro de DIALux y Revit antes de imprimir los planos.

#### Datos disponibles

**A. Extracto anonimizado de resultados DIALux frente a objetivos definidos por el proyectista** *(objetivos ilustrativos de proyecto a verificar según norma vigente aplicable)*:

| `ID_Local` | Uso tipo | $A$ ($\text{m}^2$) | $E_m$ real ($\text{lx}$) | $E_{obj}$ ($\text{lx}$) | $U_0$ real | $U_{0,obj}$ | $UGR$ real | $UGR_{max}$ | $VEEI$ / Dens. ($\text{W/m}^2$) | $N_{Lum}$ DIALux | $P_{total}$ DIALux ($\text{W}$) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `LOC-01` | Aula teórica 1 | $72$ | $340$ | $\ge 300$ | $0,65$ | $\ge 0,60$ | $18,2$ | $\le 19$ | $2,8$ / $9,5$ | $18$ | $684$ |
| `LOC-02` | Taller montaje | $140$ | $520$ | $\ge 500$ | $0,68$ | $\ge 0,60$ | $20,5$ | $\le 22$ | $2,6$ / $13,5$ | **$18$** | **$1.800$** |
| `LOC-04` | Aula CAD (pantallas) | $65$ | $480$ | $\ge 500$ | $0,62$ | $\ge 0,60$ | **$22,0$** | **$\le 19$** | $2,9$ / $13,9$ | $16$ | $904$ |
| `LOC-08` | Pasillo talleres | $55$ | $145$ | $\ge 100$ | **$0,25$** | **$\ge 0,40$** | — | — | $3,1$ / $4,5$ | $6$ | $248$ |
| `LOC-11` | Vestíbulo recepción | $48$ | $210$ | $\ge 200$ | $0,55$ | $\ge 0,40$ | $20,1$ | $\le 22$ | **$4,8$** *(obj. $\le 3,5$)* | $10$ | $480$ |
| *(Resto `LOC-03,05,06,07,09,10,12`)* | Varios conformes | $310$ | OK | OK | OK | OK | OK | OK | OK | $46$ | $1.724$ |

**B. Resumen de luminarias modeladas en Revit MEP y tablas de cuadros/*conduits*:**
- **Cruce Revit Luminarias:** en `LOC-02` (Taller montaje) solo hay **$14$ luminarias ($1.400\text{ W}$)** colocadas y conectadas en Revit (faltan $4$ frente a las $18$ de DIALux); en `LOC-08` (Pasillo), las $6$ luminarias tienen asignada una familia de **$45\text{ W}$** cada una ($270\text{ W}$ en Revit) frente a la luminaria definitiva de **$41,3\text{ W}$ ($248\text{ W}$)** simulada en DIALux (aprox. $38\text{–}41\text{ W}$ según equipo auxiliar; redondeo tabular en informe).
- **Cuadro `CS-TALLER` (Trifásico $400/230\text{ V}$, total conectado $= 33.000\text{ VA}$):**
  - Carga conectada actual por fase: **$L_1 = 14.200\text{ VA}$**, **$L_2 = 9.100\text{ VA}$**, **$L_3 = 9.700\text{ VA}$** *(nota: no incluye aún las 4 luminarias faltantes de `LOC-02`)*.
  - Circuitos monofásicos disponibles en $L_1$ candidatos a reasignación de fase sin afectar procesos críticos: `C-07` (*Tomas auxiliares banco norte*, **$2.200\text{ VA}$**, en $L_1$), `C-09` (*Prensa auxiliar ligera*, **$1.200\text{ VA}$**, en $L_1$).
- **Anomalías adicionales en exportación de Circuitos y *Conduits* de Revit:**
  - Circuitos `C-22` y `C-23` aparecen en la tabla de circuitos sin asignación de cuadro (`Panel = <vacío>`) y con `Longitud_m = 0`.
  - El tramo de tubo `CND-41` figura en la tabla de *conduits* con `Longitud_m = 420 m` (cuando el edificio mide $45\text{ m}$ de largo y ningún tramo interior excede $65\text{ m}$) y sin diámetro asignado.

#### Preguntas de análisis
1. Calcula manualmente o en hoja de cálculo el **desequilibrio porcentual actual** de `CS-TALLER` respecto a la media por fase ($11.000\text{ VA}$) y la diferencia porcentual entre fase máxima y mínima. ¿Por qué es inaceptable antes de emitir planos?
2. Aplicando el traslado de los circuitos `C-07` ($2.200\text{ VA}$) de $L_1 \rightarrow L_2$ y `C-09` ($1.200\text{ VA}$) de $L_1 \rightarrow L_3$, recalcula las nuevas cargas en $L_1', L_2', L_3'$ y el nuevo desequilibrio porcentual máximo respecto a la media. ¿Qué ocurre además cuando el proyectista conecte las 4 luminarias de `LOC-02` que faltaban en Revit?
3. Enumera los **4 locales con incidencias** en DIALux / cruce Revit y especifica la acción técnica exacta dentro de cada herramienta nativa (DIALux o Revit) para resolverlos sin maquillar datos.
4. ¿Qué riesgo de obra y de mediciones (*bill of quantities*) provocarían los circuitos huérfanos `C-22`/`C-23` y el tramo `CND-41` de `420 m` si no se detectaran antes de imprimir los planos?

#### Tarea a realizar
En equipos de 3 a 4 personas (30 minutos de cálculo y análisis + 15 minutos de exposición), elaborad el **Informe de Cierre QA/QC Pre-PDF de `EXP_TEC_12`** incluyendo:
1. **Matriz completa de anomalías detectadas** (clasificadas en: *DIALux fuera de rango*, *Discrepancia DIALux–Revit*, *Desequilibrio de fases Revit* y *Integridad de circuitos/conduits*).
2. **Hoja de cálculo verificada del reequilibrio de `CS-TALLER`** (estado inicial, propuesta `C-07`/`C-09` y nota explícita de incorporación posterior de los $400\text{ W}$/$400\text{ VA}$ de las 4 luminarias faltantes de `LOC-02`).
3. **Plan de órdenes de corrección en modelo nativo** (qué corrige el técnico en DIALux, qué actualiza en Revit MEP y qué vuelve a exportar antes de dar el visto bueno a impresión PDF del Bloque 4).

#### Posibles soluciones o criterios de análisis
Un informe técnico riguroso deberá contemplar:
- **Análisis numérico de `CS-TALLER`:**
  - *Estado inicial:* total $= 14.200 + 9.100 + 9.700 = 33.000\text{ VA}$; media por fase $= 11.000\text{ VA}$. Desviación máxima respecto a la media (en $L_1$): $\frac{|14.200 - 11.000|}{11.000} \times 100 = \mathbf{29,09\,\%}$ (y brecha máximo-mínimo $\frac{14.200 - 9.100}{14.200} = \mathbf{35,92\,\%}$). Muy por encima de un umbral objetivo típico del $10\text{–}15\,\%$.
  - *Tras reequilibrar `C-07` ($L_1 \rightarrow L_2$) y `C-09` ($L_1 \rightarrow L_3$):*
    - $L_1' = 14.200 - 2.200 - 1.200 = \mathbf{10.800\text{ VA}}$
    - $L_2' = 9.100 + 2.200 = \mathbf{11.300\text{ VA}}$
    - $L_3' = 9.700 + 1.200 = \mathbf{10.900\text{ VA}}$
    - Suma total $= 33.000\text{ VA}$ (comprobación exacta). Desviación máxima respecto a la media (en $L_2'$): $\frac{|11.300 - 11.000|}{11.000} \times 100 = \mathbf{2,73\,\%}$!
  - *Paso siguiente obligatorio en Revit:* al añadir en Revit las 4 luminarias faltantes de `LOC-02` ($400\text{ W}$, p. ej. $\approx 420\text{–}445\text{ VA}$ según factor de potencia del driver, asignándolas preferiblemente a $L_1'$ que quedó ligeramente más baja con $10.800\text{ VA}$), la carga de `CS-TALLER` sube a $\approx 33.420\text{ VA}$ y todas las fases permanecen dentro de un desequilibrio $< 3\,\%$ — recordando siempre recalcular protecciones y caída de tensión de ese circuito en software/hoja de cálculo eléctrica.
- **Correcciones en DIALux y cruce Revit–DIALux:**
  - `LOC-04` (*Aula CAD*): ajustar potencia/distribución o sustituir luminaria por óptica de bajo deslumbramiento (con archivo `.ldt` real en DIALux) hasta alcanzar $E_m \ge 500\text{ lx}$ y **$UGR \le 19$**.
  - `LOC-08` (*Pasillo*): redistribuir las 6 luminarias (o añadir punto intermedio) en DIALux para elevar la uniformidad de $0,25$ a $\ge 0,40$, y sincronizar la potencia exacta de la familia en Revit ($41,3\text{ W}$ frente a los $45\text{ W}$ erróneos del modelo).
  - `LOC-11` (*Recepción*): sustituir luminarias decorativas poco eficaces por modelos de mayor eficacia lumínica ($\text{lm/W}$) hasta cumplir el objetivo $VEEI \le 3,5$ (verificando siempre aplicabilidad y límite exacto en la normativa vigente del país).
  - `LOC-02` (*Taller*): añadir en Revit las 4 luminarias faltantes y asignarlas a circuito.
- **Integridad BIM:** localizar en el modelo Revit `C-22` y `C-23` (conectar al subcuadro real o purgar si eran restos de prueba) y revisar el trazado 3D de `CND-41` (`420 m` inflarían las mediciones de tubo y presupuesto de obra; asignar diámetro correcto y corregir su recorrido real).

#### Preguntas de reflexión final
- ¿Qué habría ocurrido en obra si el coordinador BIM hubiera impreso directamente los PDFs de `EXP_TEC_12` confiando en que «en Twinmotion los renders del taller y aulas se veían espectaculares y Revit no daba avisos rojos»?
- De todas las comprobaciones realizadas hoy entre CSV de DIALux, *Panel Schedules* de Revit e IA, ¿cuál incorporarás mañana mismo antes de entregar cualquier plano o trabajo?

---

## 7. Evaluación

### Evaluación diagnóstica
- **Instrumento:** Actividad 1 (*Cazadores visuales antes del PDF*) al comienzo de la sesión.
- **Finalidad:** Comprobar la percepción inicial del alumnado sobre la dificultad de detectar anomalías en tablas densas sin un protocolo estructurado de exportación limpia y control determinista.

### Evaluación formativa
- **Instrumento:** Seguimiento directo del formador durante la **Actividad 2** (auditoría de exportaciones CSV, limpieza de datos sensibles, totales de control y filtrado de falsos positivos de IA) y durante el **Caso práctico** (*Campus TecnoFutura*), revisando en pantalla el cálculo de desequilibrio de fases en Excel.
- **Retroalimentación:** Corrección inmediata de porcentajes mal planteados (p. ej. dividir por el total trifásico en lugar de la media por fase) y refuerzo del principio de actualización en software nativo (DIALux/Revit).

### Evaluación sumativa
Se compone de dos evidencias al cierre del tema:
1. **Cuestionario sumativo (6 ítems de análisis técnico sobre exportaciones DIALux/Revit, métricas fotométricas, desequilibrio de fases y QA/QC, 10 minutos, 40 % de la nota):** evalúa lectura crítica de $E_m$/$U_0$/$UGR$/$VEEI$, aplanado de *panel schedules*, cálculo de desequilibrio de fases, detección de anomalías BIM y límites de interoperabilidad.
2. **Dossier de auditoría QA/QC (60 % de la nota):** entrega de (a) CSVs anonimizados y tabla de verificación de la Actividad 2, (b) Informe completo de Cierre QA/QC y hoja Excel de reequilibrio del caso *Campus TecnoFutura* (`EXP_TEC_12`), y (c) Checklist QA/QC Pre-PDF personalizada (Actividad 3), evaluado conforme a la siguiente rúbrica.

### Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
|---|---|---|---|---|
| **1. Calidad y anonimización de exportaciones DIALux/Revit** | Sube archivos sin anonimizar, con celdas combinadas, unidades mixtas o sin aplanar columnas L1–L3 de *panel schedules*. | Limpia la mayor parte de columnas, pero omite unidades SI en cabeceras, deja algún identificador o no calcula totales de control previos. | Genera CSVs planos y anonimizados con unidades SI explícitas, totales de control en Excel y tabla objetivo de referencia adjunta. | Automatiza además el emparejamiento por `ID_Local` entre DIALux y Revit con trazabilidad de versión de exportación. |
| **2. Detección e interpretación de anomalías lumínicas (DIALux)** | Ignora desviaciones graves de $U_0$, $UGR$ o eficiencia energética fijándose solo en $E_m$, o acepta límites inventados por la IA. | Identifica algunos locales fuera de rango, pero no aporta tabla objetivo verificada o confunde iluminación normal con emergencia. | Detecta todas las desviaciones de $E_m$, $U_0$, $UGR$ y densidad/$VEEI$ frente a la tabla objetivo definida por el proyectista, señalando acciones reales en DIALux. | Relaciona además el impacto energético y visual de cada cambio fotométrico y exige recalcular potencia en Revit tras ajustar luminarias. |
| **3. Auditoría de *panel schedules*, equilibrio de fases y *conduits* (Revit)** | No calcula correctamente el desequilibrio de fases o no detecta circuitos huérfanos y longitudes atípicas en Revit. | Detecta el desequilibrio inicial, pero propone cambios que descuadran la suma total o pasa por alto errores de `Conduits` / circuitos vacíos. | Calcula con exactitud en Excel el desequilibrio inicial y reequilibrado, localiza circuitos huérfanos y corrige longitudes/diámetros anómalos. | Evalúa además el impacto de añadir cargas pendientes (luminarias faltantes) sobre el equilibrio final y distingue revisión BIM de cálculo eléctrico reglamentario. |
| **4. Flujo QA/QC integral y actualización en modelos nativos** | Corrige discrepancias solo en papel/Excel sin trasladar cambios a DIALux o Revit MEP, o da por validado el proyecto sin cerrar incidencias. | Señala acciones en software nativo, pero carece de secuencia de reexportación y verificación previa a impresión PDF. | Establece una Puerta QA/QC clara que exige corregir en DIALux/Revit, revalidar datos y cerrar todas las incidencias antes de imprimir PDF. | Diseña una Checklist QA/QC completa y auditable para equipo técnico integrando control de cambios, responsables y bitácora de uso de IA. |

### Actividad de autoevaluación
Cuestionario breve individual de cierre (3 minutos):
1. *En mis modelos de Revit MEP y proyectos de DIALux, ¿cuál de los 4 tipos de anomalías vistos hoy (locales fuera de rango, cruce de luminarias, desequilibrio de fases o longitudes/circuitos huérfanos) suele aparecer con más frecuencia?*
2. *¿Qué comprobación numérica haré siempre en Excel sobre los resultados de fases de Revit antes de aceptar cualquier reasignación sugerida por un asistente de IA?*
3. *¿Tengo ya definida mi Checklist QA/QC Pre-PDF para no volver a imprimir láminas con discrepancias respecto a DIALux?*

---

## 8. Materiales y recursos

### Guion de diapositivas

- **Slide 1 — Portada y encuadre del Tema 6:** Posición en el programa (Tema 45 de 50; Bloque 6, 6/11), enlace desde el Tema 5 (cálculos auditados) y aviso de límites de interoperabilidad y responsabilidad técnica.
- **Slide 2 — Activación: ¿cuántos errores cazas en 4 minutos antes de imprimir PDF?:** Muestra densa de tablas sin limpiar y reflexión sobre la necesidad de QA/QC tabular asistido.
- **Slide 3 — Interoperabilidad realista: DIALux + Revit MEP $\rightarrow$ CSV/Markdown:** Cómo exportar tablas de planificación (*Panel Schedules*, luminarias, *conduits*) y resúmenes DIALux, aplanar L1–L3, anonimizar y fijar totales de control.
- **Slide 4 — Auditoría de DIALux con tabla de objetivos verificados:** Lectura combinada de $E_m$, $U_0$, $UGR$, $\text{W/m}^2$ y $VEEI$ (cuando aplique por normativa vigente), diferenciando alumbrado normal de emergencia.
- **Slide 5 — Auditoría de Revit MEP: fases, circuitos huérfanos y *conduits*:** Fórmula de desequilibrio frente a media por fase, detección de `0 m` / `420 m`, circuitos sin cuadro y actualización en modelo nativo.
- **Slide 6 — El cruce clave `DIALux` vs. `Revit` por `ID_Local`:** Cómo detectar en segundos luminarias olvidadas tras cambios arquitectónicos o desajustes de potencia nominal entre familias y archivos `.ldt`.
- **Slide 7 — Caso práctico *Campus TecnoFutura* (`EXP_TEC_12`):** Datos completos de los 12 locales, los 3 cuadros (`CS-TALLER` al $29,09\,\%$), `C-22`/`C-23` y `CND-41`.
- **Slide 8 — Puerta QA/QC Pre-PDF y puente al Tema 7:** Flujo completo de cierre de incidencias y avance del Tema 7 (*Generación de prompts especializados para instalaciones eléctricas*).

### Ficha de trabajo
Documento de 2 páginas que incluye:
1. **Guía rápida de exportación de tablas** desde Revit MEP (aplanado de *panel schedules* y *schedules* de luminarias/*conduits*) y DIALux (resumen de zonas/locales).
2. **Hoja de cálculo de desequilibrio de fases L1–L2–L3** con fórmulas paso a paso para Excel/Calc.
3. **Estructura de prompt de auditoría cruzada QA/QC** con tabla explícita de objetivos lumínicos.

### Plantilla técnica práctica
**Plantilla 6.6 — Checklist QA/QC Pre-Emisión PDF (DIALux + Revit MEP + IA)**

| N.º | Punto de control QA/QC | Fuente verificada | Criterio de aceptación | Estado y Acción en Software Nativo |
|---|---|---|---|---|
| **1** | **Exportación y anonimización** | CSVs limpios + `Tabla_Alias_Local` | 0 identificadores cliente/edificio; unidades SI en cabeceras; totales de control calculados | `[CUMPLE / PENDIENTE]` |
| **2** | **Resultados DIALux ($E_m$, $U_0$, $UGR$)** | CSV DIALux vs. Tabla objetivos país vigente | Todos los locales dentro de $E_m$, $U_0$ y $UGR$ objetivo (emergencia simulada aparte) | `[CORREGIR EN DIALUX]` |
| **3** | **Eficiencia energética iluminación** | Densidad $\text{W/m}^2$ / $VEEI$ (si aplica norma) | Cumple límite energético vigente aplicable sin sobredimensionado excesivo ($> +40\,\%$) | `[CORREGIR EN DIALUX]` |
| **4** | **Cruce luminarias DIALux vs. Revit** | `ID_Local` (`N_Lum` y `Potencia_W`) | Diferencia $= 0$ unidades y $0\text{ W}$ entre luminarias simuladas y modeladas en BIM | `[ACTUALIZAR REVIT]` |
| **5** | **Integridad de circuitos y *conduits*** | Schedules Revit (`Circuitos` y `Conduits`) | 0 circuitos sin cuadro (`Panel` vacío); 0 longitudes `0 m` o atípicas; diámetros asignados | `[ACTUALIZAR REVIT]` |
| **6** | **Equilibrio de fases en cuadros 3F** | *Panel Schedules* en Excel determinista | Desequilibrio respecto a media $\le$ umbral proyecto (p. ej. $\le 10\,\%$); suma L1+L2+L3 = Total | `[REEQUILIBRAR EN REVIT]` |
| **7** | **Cálculo eléctrico y unifilar** | Software/hoja cálculo eléctrica validada | Recalculados circuitos modificados ($I_b, I_n, I_z, \Delta U$, cortocircuito) conforme a norma | `[VALIDADO TÉCNICO]` |
| **8** | **Reexportación e impresión PDF** | Láminas finales Revit MEP (Bloque 4) | Planos y tablas regenerados tras última edición; visto bueno responsable antes de PDF | `[APROBADO PARA PDF]` |

### Lecturas y recursos recomendados
> **Advertencia de validación obligatoria:** Antes de aplicar umbrales de iluminancia, uniformidad, deslumbramiento, $VEEI$ o límites de desequilibrio de fases en proyectos reales, el técnico y el formador deben verificar la **edición vigente de la normativa aplicable en su país**, las **normas particulares de la empresa distribuidora**, y las **versiones instaladas de Revit MEP y DIALux** (incluidos los métodos de exportación disponibles sin depender de complementos no verificados).

- **Documentación técnica de software:**
  - Documentación oficial de **Autodesk Revit MEP** sobre creación y exportación de *Schedules* y gestión de *Electrical Circuits / Panel Schedules* (según versión instalada; revisar también posibilidades/límites reales de Dynamo si se utiliza en cursos posteriores).
  - Manual oficial de **DIALux** sobre interpretación de resultados ($E_m$, $E_{min}$, $U_0$, $UGR$), exportación de datos de proyecto y gestión de archivos `.ldt`/`.ies`.
- **Normativa de referencia (ejemplos ilustrativos por verificar según país):**
  - Normas de iluminación interior y eficiencia energética aplicables (p. ej. *UNE-EN 12464-1* y *CTE DB-HE 3 / DB-SUA 4* cuando el proyecto se encuentre en España; verificar edición vigente).
  - Reglamento de Baja Tensión aplicable (p. ej. *REBT RD 842/2002* en España, serie *IEC 60364* o *NFPA 70 / NEC*) para criterios de equilibrado de fases, alumbrado de emergencia y verificación de instalaciones.

### Glosario de términos clave

| Término | Definición |
|---|---|
| **Aplanado tabular** | Transformación de un cuadro o informe con encabezados combinados o bloques paralelos (como un *panel schedule* de Revit) en filas homogéneas con una columna por variable para su análisis fiable. |
| **Circuito huérfano** | Circuito o equipo eléctrico modelado en Revit MEP sin asignación a cuadro eléctrico, sin potencia válida o desconectado lógicamente de la estructura de distribución del proyecto. |
| **Desequilibrio de fases** | Diferencia de carga eléctrica entre las fases L1, L2 y L3 de un sistema trifásico respecto a su valor medio, causante de pérdidas adicionales, caídas de tensión asimétricas y corriente por el neutro. |
| **Discrepancia Revit–DIALux** | Incoherencia en número de luminarias, código de tipo o potencia instalada entre la simulación fotométrica en DIALux y el modelo BIM eléctrico en Revit MEP. |
| **Local fuera de rango** | Recinto cuyo cálculo fotométrico incumple alguno de los parámetros objetivo asignados ($E_m$ mínimo, $U_0$, $UGR$ máximo o densidad de potencia/$VEEI$ aplicable). |
| ***Panel Schedule*** | Tabla de planificación de cuadro eléctrico generada en Revit MEP que muestra circuitos conectados, fases, cargas, protecciones asignadas y totales por tablero. |
| **Puerta QA/QC Pre-Emisión** | Control de calidad estructurado previo a la impresión de planos PDF que exige cerrar y verificar todas las anomalías de modelo, cálculo y documentación antes de entregar el proyecto. |
| **Uniformidad ($U_0$)** | Cociente entre la iluminancia mínima y la iluminancia media de un área de cálculo en DIALux ($E_{min}/E_m$), indicador clave de homogeneidad visual en el espacio. |

---

## 9. Adaptaciones

### Sesión presencial
- **Pizarra de reequilibrio interactivo:** Dibujar las tres columnas L1, L2 y L3 del cuadro `CS-TALLER` en pizarra y mover físicamente tarjetas adhesivas con los circuitos `C-07` y `C-09` para visualizar el salto del $29,09\,\%$ al $2,73\,\%$ antes de confirmarlo en Excel.
- **Demostración en aula informática:** Proyectar un modelo real de ejemplo en Revit MEP y otro en DIALux mostrando exactamente el menú de exportación tabular hacia `.txt`/`.csv` y su apertura limpia en hoja de cálculo.

### Sesión online síncrona
- **Trabajo en salas con hoja de cálculo compartida:** Cada equipo resuelve la matriz de anomalías y la pestaña de reequilibrio de `EXP_TEC_12` en un libro compartido para que el formador audite en directo las fórmulas de porcentaje de desequilibrio.
- **Dinámica ágil de falsos positivos:** En la Fase 3, pedir a los equipos que peguen en el chat al menos un falso positivo o error de lectura que haya cometido ChatGPT/Claude al procesar el paquete CSV.

### Sesión asíncrona
- **Videoguía de exportación y aplanado:** Grabar un tutorial práctico de 10 minutos mostrando paso a paso cómo exportar un *Panel Schedule* y una tabla de luminarias de Revit a `.txt`/`.csv`, abrirlos en Excel/Calc, limpiar encabezados y anonimizar antes de consultar a la IA.
- **Entrega evaluable en campus:** Subida del paquete de evidencias completo: CSVs anonimizados (Actividad 2), Informe de Cierre QA/QC y Excel de reequilibrio de *Campus TecnoFutura* (`EXP_TEC_12`), y Checklist QA/QC personalizada (Actividad 3).
- **Foro de auditoría cruzada:** Cada participante revisa el cálculo de reequilibrio de otro alumno comprobando que la suma total de VA antes y después de mover circuitos se conserva exactamente igual (`33.000 VA`).

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Integra de manera transversal el cálculo lumínico de **DIALux (Bloque 2)**, las entidades eléctricas y canalizaciones de **Revit MEP (Bloque 3)**, la preparación documental previa a impresión PDF (**Bloque 4**) y los protocolos de anonimización, doble verificación y cálculo auditado en Excel de los **Temas 1 a 5 del Bloque 6**.
- **Competencias que desarrolla:** Auditoría QA/QC de datos BIM y lumínicos, preparación y cruce inter-herramientas mediante CSV/Markdown, análisis determinista de equilibrio de fases e integridad de circuitos, y control documental previo a emisión de planos.
- **Conexión dentro del plan de 6 módulos / 50 temas:**
  - **Tema anterior:** **Tema 5 del Bloque 6: Asistencia con cálculos, fórmulas y procedimientos de diseño** (Tema 44 de 50), cuyas hojas de cálculo deterministas y disciplina de verificación numérica sirven aquí para auditar los porcentajes de desequilibrio y potencias exportadas desde Revit y DIALux.
  - **Tema posterior:** Abre el paso al **Tema 7 del Bloque 6: Generación de prompts especializados para instalaciones eléctricas** (Tema 46 de 50), donde el alumnado sistematizará y estandarizará toda esta práctica acumulada (criterios, memorias, fórmulas y auditoría Revit/DIALux) en una biblioteca profesional de prompts reutilizables con objetivo, contexto, restricciones, formato de salida y verificación obligatoria.
- **Evidencia de aprendizaje que dejará el alumnado:**
  1. Paquete CSV anonimizado e informe de verificación Capa 1/Capa 2 (Actividad 2).
  2. Informe completo de Cierre QA/QC y Excel de reequilibrio de *Campus TecnoFutura* (`EXP_TEC_12`).
  3. Checklist QA/QC Pre-PDF personalizada (Actividad 3).
  4. Cuestionario sumativo completado.

---

## Siguientes pasos para el formador

1. **Preparar los paquetes `Act2_Revit_DIALux_Pack.zip` y `EXP_TEC_12_Datos.xlsx`** confirmando que las exportaciones simuladas conservan el aspecto real de Revit/DIALux pero con datos 100 % ficticios y sumas exactas ($33.000\text{ VA}$ en `CS-TALLER`, $18$ vs. $14$ luminarias en `LOC-02`).
2. **Aclarar al alumnado las versiones de Revit y DIALux de referencia** y evitar mencionar complementos de conexión directa inexistentes, poniendo el foco en el flujo universal basado en exportación tabular limpia.
3. **Revisar en las entregas de `EXP_TEC_12`** que el alumnado conserva exactamente la potencia total ($33.000\text{ VA}$) tras reasignar fases y contempla la futura conexión de las 4 luminarias faltantes de `LOC-02`.
4. **Conectar el cierre con el Tema 7** recopilando los mejores prompts que el grupo redactó espontáneamente en los Temas 2 a 6 para analizarlos, depurarlos y convertirlos en plantillas especializadas de ingeniería eléctrica en la siguiente sesión.
