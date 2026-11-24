# Tema 5. Luminarias importadas desde DIALux

## 1. Ficha del tema

| Campo | Detalle |
| :--- | :--- |
| **Título del tema** | Tema 5. Luminarias importadas desde DIALux |
| **Bloque y posición dentro del programa** | Bloque 5: Visualización y renderizado con Twinmotion · Tema 5 de 10 (Tema 34 de 50 del programa de 6 módulos) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Haber completado los Temas 1 a 4 del Bloque 5 (integración Revit–Datasmith, calibración PBR y motores de iluminación/exposición en Twinmotion); manejo de catálogos `.ldt`/`.ies` y exportación básica del Módulo 2 (DIALux) |
| **Resultado general de aprendizaje** | Al finalizar el tema, el alumnado será capaz de analizar con criterio realista las posibilidades y limitaciones de interoperabilidad entre DIALux, Revit MEP y Twinmotion, transferir geometrías y posiciones coordinadas mediante el flujo BIM o formatos de malla (IFC/3DS/DXF según versión), convertir o gestionar archivos fotométricos `.ldt`/`.ies` para asignarlos correctamente a luces en Twinmotion, y documentar una matriz de trazabilidad luminotécnica sin falsas promesas de sincronización automática. |

---

## 2. Objetivos de aprendizaje

Al concluir esta unidad didáctica, el alumnado será capaz de:

1. **Analizar** con realismo técnico qué datos viajan realmente entre DIALux, Revit MEP y Twinmotion (geometría, coordenadas y archivos fotométricos `.ies`/`.ldt`) frente a qué metadatos se pierden durante el intercambio entre aplicaciones *(Nivel de Bloom: Analizar)*
2. **Comparar** el flujo BIM-céntrico coordinado (`DIALux → Revit MEP → Datasmith Direct Link`) frente a la exportación directa de mallas desde DIALux (`IFC / 3DS / DXF` según versión y alcance disponible), evaluando estabilidad, escala y mantenimiento ante revisiones *(Nivel de Bloom: Evaluar)*
3. **Aplicar** archivos fotométricos `.ies` a luces de Twinmotion acopladas a luminarias importadas o sincronizadas, gestionando la obtención o conversión previa desde Eulumdat (`.ldt`), la orientación del eje asimétrico ($C_0$) y la prevención de oclusión por la propia carcasa *(Nivel de Bloom: Aplicar)*
4. **Diagnosticar** errores típicos de importación de luminarias desde software de cálculo (escalado milímetros/metros, normales invertidas, luminarias mudas sin fuente de luz y desplazamiento de orientación) proponiendo correcciones verificables *(Nivel de Bloom: Analizar)*
5. **Crear** una matriz de trazabilidad luminotécnica y una biblioteca de usuario (*User Library*) en Twinmotion que mantenga correspondencia estricta entre el catálogo validado en DIALux, las familias de Revit MEP y la escena visual *(Nivel de Bloom: Crear)*

---

## 3. Contenidos esenciales

### 3.1. Realidad técnica de la interoperabilidad DIALux – Revit – Twinmotion

#### Explicación breve y clara
Una expectativa habitual —y fuente constante de frustración en estudios de ingeniería— es imaginar que existe un botón mágico en DIALux para exportar el proyecto entero a Twinmotion conservando simultáneamente geometría 3D limpia, materiales PBR y haces luminosos vivos perfectamente calibrados. **Esa sincronización directa integral no existe de forma nativa universal.** DIALux (evo o versiones anteriores) es una herramienta especializada de cálculo fotométrico que trabaja con curvas de distribución de intensidad luminosa (`.ldt` o `.ies`), mientras que Twinmotion es un motor visual en tiempo real que consume geometría 3D y asigna archivos fotométricos `.ies` a sus propios objetos de luz (*IES Light*). Comprender qué formato transporta geometría y qué formato transporta fotometría evita perder días buscando funciones inexistentes.

#### Conceptos clave
- **Separación entre geometría y fotometría:** un archivo de intercambio 3D (`IFC`, `3DS`, `OBJ`, `FBX` o `DWG/DXF`) transporta únicamente formas poligonales y eventualmente capas/colores básicos, **nunca** el motor fotométrico activo ni los cálculos de lux de DIALux.
- **Limitaciones dependientes de versión y edición:** las opciones exactas de exportación de DIALux evo (p. ej., IFC, DWG/DXF o formatos de malla disponibles según licencia/módulos y versión vigente) varían entre compilaciones y deben comprobarse antes de prometer un flujo concreto en proyecto.
- **Ausencia de *Direct Link* nativo desde DIALux a Twinmotion:** a diferencia de Autodesk Revit (que dispone de *Datasmith Direct Link*), DIALux no mantiene una actualización viva bidireccional con Twinmotion; cualquier cambio posterior en cálculo requiere re-exportar manualmente o canalizar el ajuste vía Revit MEP.
- **Principio de flujo realista:** DIALux valida la luminotecnia; Revit coordina posiciones geométricas y circuitos; Twinmotion recibe la geometría (preferiblemente vía Revit Direct Link) y reproduce visualmente el haz mediante luces `.ies` asignadas por el proyectista.

#### Definiciones necesarias
- **Interoperabilidad por capas (Geometría vs. Fotometría):** estrategia profesional que separa el intercambio de modelos físicos 3D (`RVT/Datasmith`, `IFC`, `3DS`) del intercambio de datos de distribución luminosa (`.ies` / `.ldt`), integrándolos de forma controlada dentro del entorno de visualización.
- **Eulumdat (`.ldt`) frente a `.ies` (IESNA LM-63):** dos formatos estándar de texto plano que describen la distribución espacial de intensidad luminosa ($\text{cd/klm}$) de una luminaria; `.ldt` predomina en fabricantes europeos y en DIALux, mientras que Twinmotion y gran parte de motores gráficos exigen formato `.ies` en sus luces fotométricas.

#### Ejemplo práctico realista
Un estudio recibe un estudio lumínico terminado en DIALux para una nave comercial con `64` campanas LED de `120 W` (`16.800 lm`, óptica de `90°`, archivo `Campana_90deg.ldt`). Un técnico intenta «importar el archivo `.evo` en Twinmotion» y descubre que Twinmotion no reconoce proyectos nativos de DIALux. Al replantear el proceso con rigor: (1) extrae la tabla de coordenadas $(X, Y, Z)$ y orientaciones desde el informe/CAD de DIALux; (2) comprueba que esas `64` luminarias están colocadas en sus cotas exactas en Revit MEP (`Z = +6,50 m`); (3) sincroniza la geometría limpia vía Datasmith Direct Link desde Revit; y (4) sustituye o acopla en Twinmotion un bloque compuesto formado por la geometría de la campana más una luz *IES Light* cargada con `Campana_90deg.ies` descargada del catálogo oficial del fabricante.

#### Errores frecuentes
- Prometer al cliente o a dirección de obra que «Twinmotion importa el cálculo completo de DIALux con sus lux en un clic».
- Exportar el edificio entero desde DIALux en `.3ds` o `.ifc` para renderizarlo directamente en Twinmotion olvidando que se duplican muros con el modelo de Revit y se pierde toda la calidad constructiva y jerarquía MEP.
- Intentar arrastrar un archivo Eulumdat `.ldt` directamente a una luz fotométrica de Twinmotion sin convertirlo ni descargar su homólogo `.ies` del fabricante.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué al exportar una geometría 3D desde DIALux en formato `.ifc`, `.3ds` o `.dxf` las luminarias llegan a Twinmotion «apagadas» y sin distribución luminosa?
2. ¿Qué diferencia técnica y geográfica existe entre un archivo fotométrico `.ldt` y un archivo `.ies`, y cuál solicita Twinmotion para sus luces fotométricas?
3. ¿Por qué conviene comprobar qué exportadores exactos habilita la versión de DIALux instalada en el estudio antes de diseñar un procedimiento interno?

---

### 3.2. Transferencia geométrica y coordinación de posiciones: vía Revit MEP frente a malla 3D

#### Explicación breve y clara
Cuando necesitamos trasladar las luminarias estudiadas en DIALux hacia Twinmotion existen **dos caminos técnicos reales**, y elegir mal el camino multiplica las horas de retrabajo. El camino principal en proyectos BIM es la **vía coordinada por Revit MEP**: DIALux determina el tipo de luminaria, altura de montaje e interdistancia; esos datos se vuelcan o verifican en Revit (manualmente por coordenadas/rejilla DWG o mediante flujos de intercambio específicos si existen en la versión utilizada) y Revit sincroniza limpiamente hacia Twinmotion mediante *Direct Link*. El segundo camino —útil cuando solo recibimos un encargo puntual de luminotecnia sin modelo eléctrico en Revit— es importar **únicamente las luminarias o la malla exportada desde DIALux** (`IFC`, `3DS` o `DXF/DWG` según disponibilidad de versión) cuidando unidades, ejes y orientación.

#### Conceptos clave
- **Camino 1 — Flujo BIM-céntrico (`DIALux → Revit MEP → Twinmotion Direct Link`):** la solución más robusta para proyectos vivos; conserva familias, circuitos, etiquetas de plano, *Keep Hierarchy* y permite actualizar cambios desde Revit sin perder la escena Twinmotion.
- **Camino 2 — Transferencia directa de malla (`DIALux → IFC / 3DS / DXF → Twinmotion`):** alternativa puntual cuando se requiere visualizar una luminaria especial o distribución rápida sin pasar por Revit; exige aislar capas/objetos de luminaria y asumir que cada cambio en DIALux obliga a reimportar la malla manualmente.
- **Desajustes de escala y ejes al importar mallas externas:** muchos formatos como `.3ds` o `.dxf` carecen de unidad métrica robusta o exportan en milímetros/centímetros mientras Twinmotion trabaja en metros, provocando luminarias `1.000×` gigantes o minúsculas, o giradas `90°` respecto al eje `Z` vertical.
- **Calidad poligonal y normales de malla:** las luminarias exportadas desde software de cálculo suelen venir como cajas simplificadas o con caras invertidas (*flipped normals*) que se ven transparentes desde ciertos ángulos en tiempo real si no se activa renderizado a doble cara o no se corrigen en origen.

#### Definiciones necesarias
- **Coordenadas de montaje y orientación ($X, Y, Z$, rotación):** ubicación espacial exacta de cada luminaria y dirección angular de su eje principal respecto al edificio, que debe coincidir entre la memoria de DIALux, el plano de Revit y la escena de Twinmotion.
- **Normales invertidas (*Flipped Normals*):** defecto geométrico de mallas importadas (`3DS/OBJ/DXF`) donde el vector perpendicular de las caras apunta hacia el interior del objeto, haciendo que el cuerpo de la luminaria parezca hueco o invisible desde fuera en Twinmotion.

#### Ejemplo práctico realista
En una reforma de concesionario de vehículos de `780 m²`, el departamento de iluminación entrega una distribución optimizada en DIALux con `36` proyectores en carril electrificado y `14` luminarias suspendidas circulares de gran diámetro (`Ø 1.200 mm`).
- *Intento fallido por malla pura:* al exportar la escena completa de DIALux en formato de intercambio `.3ds` (disponible en versiones clásicas o según flujo configurado) e importarla en Twinmotion, los paramentos llegan con triángulos triangulados sucios, los proyectores escalados `100×` por confusión de centímetros a metros, y todos los carriles fusionados sin jerarquía.
- *Flujo profesional aplicado:* el equipo importa en Revit únicamente el plano DWG de replanteo exportado desde DIALux como referencia 2D temporal, inserta las `36 + 14` familias limpias de Revit MEP en esas coordenadas y alturas exactas (`Z = +3,80 m` y `+3,10 m`), verifica en Revit la carga del circuito y sincroniza por *Direct Link* hacia Twinmotion. Si se necesitara una luminaria de diseño muy específico que solo existe como malla en catálogo, se importa aislada como objeto único en Twinmotion corrigiendo escala (`1:1000` si viene en mm) y se guarda como activo compuesto reutilizable.

#### Errores frecuentes
- Exportar paredes, suelos y mobiliario desde DIALux para usarlos como arquitectura en Twinmotion cuando ya existe un modelo mucho más limpio y detallado en `ARQ.rvt`.
- Importar un archivo `.ifc` o `.3ds` de luminarias sin comprobar la casilla de unidades de origen (`mm` vs. `cm` vs. `m`), perdiendo el modelo o saturando la cámara con una luminaria gigante.
- Modificar posiciones de luminarias en Twinmotion sobre una malla exportada de DIALux sin actualizar el archivo de cálculo DIALux ni los planos de Revit.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué el flujo `DIALux → Revit MEP → Twinmotion Direct Link` es superior a importar toda la escena desde DIALux cuando el proyecto sigue vivo en fase de diseño?
2. ¿Qué tres comprobaciones técnicas inmediatas deben hacerse al importar una luminaria aislada en formato `.ifc`, `.3ds` o `.fbx` dentro de Twinmotion?
3. ¿Cómo se detecta visualmente que una malla importada presenta normales invertidas y qué repercusión tiene sobre la iluminación?

---

### 3.3. Asignación de archivos `.ies` en Twinmotion, conversión desde `.ldt` y orientación del haz

#### Explicación breve y clara
Una vez tenemos la geometría limpia de la luminaria en su posición coordinada dentro de Twinmotion, llega el paso clave para lograr fidelidad visual en el haz luminoso: **acoplar una luz fotométrica `.ies` (*IES Light*)** proporcionada por el fabricante. Los catálogos europeos utilizados en DIALux suelen suministrar por defecto archivos **Eulumdat (`.ldt`)**, que Twinmotion no carga directamente en su selector de perfil fotométrico; por ello resulta imprescindible descargar la versión `.ies` equivalente en la web del fabricante o convertir el `.ldt` mediante una herramienta fotométrica verificada (p. ej. utilidades oficiales de fabricantes o visores fotométricos reconocidos). Al colocar la luz `.ies` bajo la luminaria, el rigor geométrico es crítico: un milímetro dentro de la carcasa bloquea todo el haz, y un giro erróneo del eje $C_0$ apunta un bañador de pared hacia el pasillo en lugar de hacia el muro.

#### Conceptos clave
- **Obtención o conversión verificada de `.ldt` a `.ies`:** descargar prioritariamente el archivo `.ies` oficial del fabricante para ese mismo código exacto de luminaria; si solo existe `.ldt`, utilizar un conversor fotométrico contrastado y comprobar en un visor que la curva polar de intensidad ($\text{cd/klm}$) y el flujo total no se han deformado ni girado.
- **Prevención de oclusión por geometría (*Self-Shadowing / Light Blocker*):** si el punto de emisión de la luz `.ies` se inserta dentro de la malla sólida opaca de la luminaria (o tapado por un difusor no excluido de sombra), la carcasa bloquea la luz por completo; el emisor `.ies` debe posicionarse unos milímetros **por debajo o justo frente al plano óptico de salida**.
- **Orientación de ópticas asimétricas (plano $C_0-G_0$):** en bañadores de pared (*wallwashers*), luminarias viales o proyectores elípticos, la curva `.ies` no es simétrica en $360°$: un giro de `90°` o `180°` en el eje `Z` de la luz cambia radicalmente la zona iluminada y arruina el efecto arquitectónico.
- **Agrupación y sustitución masiva (*User Library / Replace Object*):** combinar la carcasa geométrica + difusor `Emissive` moderado + luz `.ies` alineada dentro de un grupo o activo reutilizable en Twinmotion (o sustituir instancias equivalentes manteniendo control de flujo).

#### Definiciones necesarias
- **Archivo `.ies` (IESNA LM-63):** formato fotométrico estándar que almacena en texto las intensidades luminosas en candelas según ángulos horizontales ($C$) y verticales ($\gamma$), permitiendo a Twinmotion proyectar el perfil exacto del haz luminoso en pantalla.
- **Oclusión por malla (*Geometry Occlusion*):** bloqueo físico accidental de una fuente de luz virtual al quedar envuelta por polígonos sólidos opacos que proyectan sombra sobre el propio punto emisor.

#### Ejemplo práctico realista
En una tienda de moda se proyectan `24` carriles con proyectores orientables y `12` bañadores de pared asimétricos de `22 W` (`2.150 lm`, `3000 K`). El fabricante español envía la carpeta de fotometrías únicamente en formato `.ldt` (`Banador_Asim_22W.ldt`). Al intentar cargarlo en una luz *IES Light* de Twinmotion, el selector ignora el archivo `.ldt`. El técnico descarga del portal web del fabricante el paquete equivalente `.ies` (`Banador_Asim_22W.ies`), comprueba en un visor fotométrico rápido la dirección del lóbulo asimétrico ($C_0$ apuntando hacia el muro de exposición), sitúa el objeto *IES Light* de Twinmotion `15 mm` por debajo de la lente de vidrio del bañador para evitar que la carcasa negra mate proyecte sombra sobre la propia luz, y gira la luz `.ies` alineando el lóbulo hacia la pared vertical. Al activar *Lumen/Path Tracer*, aparece el característico corte suave y uniforme sobre el muro expositor. *(Nota de control: aunque el perfil `.ies` reproduce fielmente la forma del haz visual, el cumplimiento cuantitativo en lux sobre el plano expositor sigue siendo competencia exclusiva de DIALux).*

#### Errores frecuentes
- Colocar el nodo de la luz `.ies` en el centro geométrico `(0,0,0)` de una luminaria de Revit cuya envolvente superior es un sólido cerrado, haciendo que no salga ni un rayo de luz hacia la sala.
- Descargar cualquier archivo `.ies` genérico de internet («un foco parecido») en lugar de la fotometría exacta del modelo calculado en DIALux, falseando ángulos de apertura (`15°` vs. `60°`) y provocando deslumbramientos o sombras irreales en la presentación.
- Orientar el objeto geométrico hacia la pared pero dejar la luz `.ies` sin rotar respecto a su plano asimétrico, iluminando el pasillo central en vez de los cuadros o escaparates.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué debe hacer el proyectista si el catálogo del fabricante para DIALux solo facilita inicialmente archivos `.ldt` y Twinmotion exige `.ies`?
2. ¿Por qué un proyector importado con su archivo `.ies` puede aparecer completamente apagado en el render aunque la luz esté encendida a `2.000 lm`?
3. ¿Cómo se comprueba y corrige la orientación del plano fotométrico en una luminaria asimétrica (bañador de pared o proyector vial) dentro de Twinmotion?

---

### 3.4. Matriz de trazabilidad luminotécnica, control de versiones y apoyo responsable de IA

#### Explicación breve y clara
En proyectos con `15` o `30` tipos distintos de luminarias, el riesgo mayor no es técnico de software, sino **organizativo**: cuando en DIALux cambia el código `L-04` de `18 W` a `24 W` o pasa de óptica extensiva a intensiva, alguien olvida actualizar la familia en Revit o deja el archivo `.ies` antiguo en Twinmotion. Para evitar inconsistencias graves entre lo calculado, lo dibujado y lo renderizado, el equipo necesita una **Matriz de Trazabilidad Luminotécnica** que vincule cada código de proyecto (`L-01`..`L-N`) entre DIALux, Revit y Twinmotion. En esta tarea repetitiva de auditoría de listados, los asistentes de IA (ChatGPT o Claude) pueden ayudar a cruzar tablas exportadas anonimizadas o redactar checklists de verificación de ejes `.ies`, siempre bajo estricta comprobación humana final.

#### Conceptos clave
- **Código único de luminaria (`ID_Proyecto`):** identificador maestro compartido (`L-01`, `L-02`, `EM-01`) que figura simultáneamente en el estudio DIALux, en el parámetro *Type Mark* de la familia Revit MEP, en la tabla de especificaciones PDF (Bloque 4) y en la carpeta de luminarias de la *User Library* de Twinmotion.
- **Control de revisiones cruzadas:** cada vez que DIALux modifica una luminaria (potencia, flujo, ángulo o ubicación), se dispara una actualización documentada hacia Revit MEP → Direct Link → reemplazo/ajuste del `.ies` en Twinmotion.
- **Uso práctico y acotado de IA en trazabilidad:** emplear ChatGPT o Claude para comparar dos listados CSV anonimizados (p. ej. tabla de planificación de luminarias de Revit vs. inventario de luminarias DIALux sin nombres de cliente) y detectar códigos huérfanos, tipos cambiados o inconsistencias de temperatura nominal; **nunca** delegar a la IA la verificación de cumplimiento normativo ni subir planos confidenciales sin permiso.
- **Nota de alcance en las imágenes finales:** mantener explícito que la integración del `.ies` en Twinmotion reproduce la geometría del haz con fines de comunicación visual, remitiendo siempre a los listados de DIALux y al cuadro eléctrico validado por técnico competente.

#### Definiciones necesarias
- **Matriz de trazabilidad luminotécnica:** tabla viva de control que relaciona unívocamente cada tipo de luminaria del proyecto con su archivo `.ldt`/`.ies` de cálculo, su familia/tipo Revit MEP, su circuito eléctrico y su bloque visual configurado en Twinmotion.
- **Luminaria huérfana (desincronizada):** luminaria presente en la escena visual de Twinmotion cuya potencia, óptica o posición dejó de corresponder con la última revisión validada en DIALux y en el modelo Revit MEP.

#### Ejemplo práctico realista
Durante la revisión `R03` de un edificio docente con `14` tipos de luminarias (`240` unidades totales), el ingeniero exporta sin datos confidenciales del cliente dos tablas CSV genéricas: una con los tipos y cantidades de DIALux (`L-01` a `L-14`) y otra de la tabla de planificación de Revit MEP. Al pedir a Claude que cruce ambas tablas manteniendo únicamente códigos genéricos y flujos nominales, la IA detecta rápidamente que el tipo `L-07` pasó de `16` a `22` unidades en DIALux mientras Revit aún conserva `16`, y que `L-11` cambió de óptica de `36°` a `60°`. El técnico **verifica manualmente** la discrepancia abriendo ambos programas, actualiza los `6` ejemplares y la óptica en Revit MEP, pulsa *Direct Link Synchronize* y sustituye el archivo `L-11_60deg.ies` en el bloque correspondiente de Twinmotion.

#### Errores frecuentes
- Mantener en Twinmotion nombres genéricos como `IES_Light_01`, `IES_Light_02` sin asociarlos al código `L-01` / `L-02` del cuadro de luminarias de proyecto, volviendo ingobernable cualquier cambio de catálogo en fase de obra.
- Subir el archivo completo de mediciones con datos reales del promotor, dirección del edificio o precios confidenciales a una IA externa para pedirle tablas comparativas sin autorización.
- Confiar ciegamente en una tabla comparativa generada por IA sin cotejar en el modelo Revit y en el informe PDF de DIALux que las cantidades y códigos coinciden realmente.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué campos mínimos debe contener una Matriz de Trazabilidad Luminotécnica para evitar «luminarias huérfanas» entre DIALux, Revit y Twinmotion?
2. ¿Cómo puede ayudar un asistente de IA (ChatGPT/Claude) en la auditoría de coherencia de luminarias y qué reglas de seguridad y verificación humana son obligatorias?
3. ¿Qué diferencia existe entre actualizar el archivo `.ies` en Twinmotion y actualizar la memoria fotométrica y el cuadro eléctrico del proyecto?

---

## 4. Metodología didáctica

La sesión de **4 horas (240 minutos)** combina desmitificación crítica de interoperabilidad, demostración práctica de transferencia geométrica y asignación de archivos `.ies` desde catálogo `.ldt`, taller guiado de ensamblaje en *User Library* y resolución de un caso real museográfico de óptica asimétrica.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
|---|---:|---|---|
| **1. Apertura y activación («Cazadores de mitos»)** | 20 min | Conecta con `Practica_T4_v01.tm`; lanza la evaluación diagnóstica breve y dinamiza la **Actividad 1** con 5 afirmaciones frecuentes sobre importar DIALux en Twinmotion. | Analiza las 5 afirmaciones en parejas, distingue mitos comerciales de capacidades reales según formato y versión, y justifica su voto en plenario. |
| **2. Microlearning técnico I (Mapa real de interoperabilidad y transferencia 3D)** | 30 min | Expone apartados 3.1 y 3.2: qué transportan `IFC`, `3DS`, `DXF`, `.ldt`, `.ies` y `Direct Link`; compara flujo BIM-céntrico (`DIALux → Revit → TM`) vs. malla directa (`mm/m`, normales invertidas). | Registra en la tabla comparativa de su ficha qué datos pasan y qué datos se pierden en cada vía, identificando las ventajas del flujo vía Revit MEP. |
| **3. Microlearning técnico II (De `.ldt` a `.ies`, colocación física y trazabilidad)** | 30 min | Demuestra en directo cómo resolver la limitación `.ldt` → `.ies`, cómo posicionar la luz *IES Light* `10–20 mm` fuera de la carcasa para evitar oclusión, cómo alinear ejes asimétricos $C_0$ y cómo usar la Matriz de Trazabilidad (incluyendo contraste responsable con IA). | Observa el comportamiento real del haz `.ies` al desplazar el emisor dentro/fuera de la carcasa y al rotar una óptica asimétrica sobre un muro vertical. |
| **4. Actividad práctica de aplicación técnica** | 50 min | Guía la **Actividad 2** (ensamblaje completo de luminaria coordinada vía Revit Direct Link y vía malla externa con luz `.ies` acoplada y guardada en *User Library*); diagnostica errores de oclusión y ejes. | Importa y alinea la luminaria en Twinmotion, resuelve escala/normales si usa malla, acopla su archivo `.ies` orientado sin auto-oclusión y crea el bloque compuesto reutilizable en su biblioteca. |
| **5. Análisis de caso práctico** | 45 min | Presenta el caso **Galería de Arte Contemporáneo Azkuna Norte (Bilbao)** (`48` bañadores asimétricos, archivos `.ldt`, fallo de escala `1.000×` en `.3ds` y ejes girados); supervisa equipos de 3-4 técnicos. | En equipos, diagnostica todas las incidencias técnicas del intento fallido, diseña el flujo coordinado `DIALux → Revit → TM + .ies` y corrige la orientación de los bañadores asimétricos. |
| **6. Puesta en común y contraste técnico** | 25 min | Modera la exposición de 2-3 equipos, compara matrices de trazabilidad y verifica que ningún equipo confunde perfiles visuales `.ies` en Twinmotion con cálculos $UGR$ o lux de DIALux. | Expone su plan de rescate del caso museográfico y contrasta con el grupo buenas prácticas de nomenclatura y validación de cambios. |
| **7. Transferencia al proyecto real y cierre** | 40 min | Guía la **Actividad 3** (Matriz de Trazabilidad Luminotécnica del proyecto propio y chequeo responsable con IA anonimizada, 20 min); aplica evaluación sumativa breve, autoevaluación y puente hacia el **Tema 6 (Intensidad, color y temperatura de luz)** (20 min). | Construye la Matriz de Trazabilidad entre su estudio DIALux (Módulo 2), familias Revit (Módulo 3) y bloques Twinmotion, realiza test de cierre y deja listas las luminarias `.ies` para calibrar flujo y Kelvin en el Tema 6. |
| **TOTAL** | **240 min** | — | — |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): «Cazadores de mitos de interoperabilidad DIALux–Revit–Twinmotion»

- **Nombre:** Auditoría crítica de afirmaciones sobre intercambio luminotécnico
- **Objetivo:** Desmontar falsas promesas de sincronización automática y establecer expectativas técnicamente realistas desde el inicio de la sesión.
- **Instrucciones para el alumnado:**
  1. Leed en parejas durante 6 minutos las 5 frases habituales escuchadas en estudios y ferias comerciales:
     - *Frase 1:* «Si exporto en IFC desde DIALux hacia Twinmotion, las luminarias ya traen sus lúmenes, colores y curvas fotométricas activas».
     - *Frase 2:* «Twinmotion acepta directamente los archivos europeos Eulumdat `.ldt` sin necesidad de conversión ni archivo `.ies`».
     - *Frase 3:* «Si cambio la distribución de luminarias en DIALux evo, se actualiza automáticamente en tiempo real dentro de Twinmotion gracias a Direct Link».
     - *Frase 4:* «La vía más robusta para proyectos vivos es calcular en DIALux, coordinar las familias/posiciones en Revit MEP y sincronizar a Twinmotion con Direct Link + `.ies`».
     - *Frase 5:* «Un haz `.ies` bien colocado en Twinmotion reproduce la forma del cono de luz, pero no valida cumplimiento de lux ni $UGR$ frente a normativa».
  2. Clasificad cada frase como **Verdadera**, **Falsa** o **Condicionada a versión**, escribiendo en una línea la razón técnica exacta.
  3. Contrastad respuestas en plenario con el formador.
- **Materiales necesarios:** Diapositiva con las 5 afirmaciones, ficha de trabajo (Bloque A).
- **Tiempo estimado:** 15 minutos (integrado en la Fase 1).
- **Rol del formador:** Moderar las votaciones rápidas y reforzar con evidencias reales de formato qué contiene realmente un `.ifc`, un `.3ds`, un `.ldt` y un `.ies`.
- **Producto o entregable esperado:** Lista verificada de verdades y mitos de interoperabilidad con justificación técnica.
- **Criterios de éxito:** El 100 % del grupo identifica correctamente como falsas las afirmaciones 1, 2 y 3 y explica por qué las afirmaciones 4 y 5 definen el flujo profesional seguro.

---

### Actividad 2 (Aplicación técnica): «Ensamblaje de luminaria coordinada: Geometría limpia + `.ies` sin auto-oclusión»

- **Nombre:** Integración geométrica y fotométrica de luminarias en Twinmotion
- **Objetivo:** Dominar tanto la vía coordinada Revit Direct Link como la importación puntual de malla externa, acoplando correctamente un archivo fotométrico `.ies` asimétrico sin bloqueo geométrico.
- **Instrucciones para el alumnado:**
  1. **Parte A (Vía Revit Direct Link, 20 min):** En `Practica_T4_v01.tm`, localizad la familia de bañador de pared lineal y la de downlight procedentes del vínculo `DL_ELE` en modo *Keep Hierarchy*. Verificad que cada luminaria tiene asignado su material de carcasa + difusor `Emissive` moderado del Tema 3.
  2. **Parte B (Prueba de malla externa controlada, 10 min):** Importad el archivo de prueba `Luminaria_Especial_Malla.3ds` (o `.fbx`/`.ifc` suministrado) exportado en milímetros; corregid la escala (`0,001` si entró `1000×` gigante) y verificad que ninguna cara aparece invisible por normales invertidas.
  3. **Parte C (Acoplamiento `.ies` y orientación asimétrica, 20 min):**
     - Comprobad los archivos suministrados (`Banador_Asim.ldt` no seleccionable frente a `Banador_Asim.ies` compatible).
     - Insertad una luz fotométrica de Twinmotion (*IES Light*), cargad `Banador_Asim.ies`, situadla `15 mm` por delante/debajo del plano del difusor para evitar oclusión por la carcasa y alinead su eje de giro hasta proyectar claramente el lavado asimétrico sobre el muro vertical.
     - Agrupad Geometría + Difusor + Luz `.ies` y guardad el conjunto en vuestra *User Library* (`02_Luminarias_IES`).
- **Materiales necesarios:** Escena `Practica_T4_v01.tm`, malla de prueba `Luminaria_Especial_Malla`, par `.ldt`/`.ies` oficial de muestra, Twinmotion y guía rápida de orientación $C_0$.
- **Tiempo estimado:** 50 minutos (Fase 4).
- **Rol del formador:** Supervisar en pantalla que el emisor `.ies` no queda atrapado dentro del sólido de la carcasa, comprobar la rotación correcta del haz asimétrico hacia la pared y orientar sobre escala de mallas externas.
- **Producto o entregable esperado:** Escena `Practica_T5_v01.tm` con la luminaria orientada iluminando limpiamente la pared + activo compuesto guardado en *User Library* + captura de control.
- **Criterios de éxito:** Luminaria a escala métrica exacta (`1:1`), cero caras invertidas visibles, haz `.ies` perfectamente proyectado sobre el muro sin sombra negra de la propia carcasa y objeto compuesto reutilizable guardado.

---

### Actividad 3 (Transferencia a proyecto real): «Matriz de trazabilidad luminotécnica entre DIALux, Revit y Twinmotion»

- **Nombre:** Inventario unificado de control de luminarias (`DIALux ↔ Revit ↔ Twinmotion`)
- **Objetivo:** Establecer un sistema documental de trazabilidad para el proyecto integrador o laboral que evite inconsistencias entre lo calculado, lo modelado y lo visualizado.
- **Instrucciones para el alumnado:**
  1. Tomad los tipos de luminarias reales o previstos de vuestro proyecto del Módulo 2 (DIALux) y Módulo 3 (Revit MEP) —mínimo 5 tipos distintos— y rellenad la **Plantilla de Matriz de Trazabilidad Luminotécnica** (Sección 8): código único (`L-01`..`L-05`), referencia/óptica DIALux, fuente fotométrica (`.ldt` usado en DIALux + `.ies` asignado en Twinmotion), familia/tipo en Revit MEP y estado de bloque en *User Library*.
  2. Documentad qué limitaciones concretas existen en vuestro flujo (por ejemplo, luminarias cuyo fabricante solo ofrece `.ldt` pendiente de conversión verificada o cambios aún abiertos en DIALux).
  3. *(Opcional asistido con IA)*: Generad con ChatGPT o Claude (introduciendo **exclusivamente** códigos ficticios o anónimos como `L-01`, potencias y ángulos, sin datos de cliente ni archivos confidenciales) una tabla comparativa o *checklist* de 5 pasos para auditar cambios entre dos revisiones de listado de luminarias, y **validad manualmente** cada fila y criterio técnico del resultado.
- **Materiales necesarios:** Plantilla de Matriz de Trazabilidad (Sección 8), listados previos del proyecto propio o del caso de estudio.
- **Tiempo estimado:** 20 minutos (integrado en la Fase 7).
- **Rol del formador:** Revisar que cada fila conecta código DIALux con familia Revit y archivo `.ies` real, y verificar que cualquier apoyo con IA respeta anonimización y revisión humana estricta.
- **Producto o entregable esperado:** Matriz de Trazabilidad Luminotécnica completa y verificada para incorporar al portafolio del proyecto integrador.
- **Criterios de éxito:** El 100 % de los tipos de luminaria tiene correspondencia explícita entre las tres herramientas, contempla la conversión/disponibilidad real `.ldt`/`.ies` y documenta las limitaciones del flujo sin prometer automatismos irreales.

---

## 6. Caso práctico

### Caso: Galería de Arte Contemporáneo y Sala Multiusos Azkuna Norte (Bilbao) — Bañadores perdidos, mallas gigantes y archivos `.ldt`

#### Contexto empresarial
**ArgiBIM Ingeniería e Iluminación, S.L.** diseña el alumbrado museográfico y técnico de una nueva galería de arte de `640 m²` en Bilbao (`4 salas expositivas de altura 4,20 m` + `vestíbulo multifunción`). El estudio lumínico en **DIALux** fue elaborado con gran rigor por una especialista externa y contempla:
- `48` bañadores de pared empotrados de óptica asimétrica elíptica (`18 W`, `1.950 lm`, `3000 K`) distanciados `1,10 m` respecto a los muros de exposición para lograr lavado vertical uniforme sobre obras pictóricas.
- `32` downlights antideslumbrantes (`14 W`, `1.450 lm`, `3000 K`, con valor calculado en DIALux $UGR < 16$ en posiciones de observador).
- `14` tramos de carril electrificado trifásico de superficie en zona polivalente.

El comisario de la galería ha pedido revisar en Twinmotion cómo incide exactamente la mancha de luz de los bañadores sobre las paredes y comprobar el impacto visual de los carriles negros en techo antes de aprobar la compra de luminarias (`46.200 €`).

#### Situación o problema
Para ahorrar tiempo, un colaborador junior ignoró el modelo Revit MEP del estudio y decidió «traer todo directo desde el proyecto de DIALux»:
1. Exportó el modelo completo desde DIALux a un formato de malla `.3ds` y lo importó en Twinmotion en una escena nueva: al cargar, toda la galería entró `1.000` veces mayor (las paredes de `4,20 m` medían `4.200 m` por conflicto de milímetros frente a metros) y sin división limpia de objetos de iluminación.
2. En un segundo intento corrigió la escala general, pero las luminarias importadas aparecieron como carcasas grises totalmente apagadas: **no contenían ninguna luz ni curva fotométrica**.
3. Al intentar cargar las fotometrías enviadas por el fabricante europeo (`L01_Banador_18W.ldt` y `L02_Downlight_UGR16.ldt`) dentro de Twinmotion, el software no le permitió seleccionar archivos `.ldt`.
4. Finalmente descargó un `.ies` genérico de internet para salir del paso, lo insertó en el centro de la carcasa del bañador (donde quedó tapado por la geometría sólida del foco, sin proyectar luz) y cuando logró sacarlo debajo del difusor, giró los bañadores `90°` por error de eje $C_0$, iluminando el centro del pasillo en lugar de los cuadros en la pared.

#### Datos disponibles

| Elemento / Incidencia | Estado en el intento fallido del colaborador | Recurso real disponible en el estudio | Requisito técnico objetivo |
|---|---|---|---|
| **Arquitectura y MEP (`ARQ` + `ELE`)** | Exportación directa sucia en `.3ds` desde DIALux (`escala 1.000×` errónea, muros sin detalle PBR) | Modelos `ARQ_Galeria.rvt` y `ELE_Galeria.rvt` ya creados en fase ejecutiva (carriles, cajas y downlights en Revit) | Flujo coordinado vía `Datasmith Direct Link` (`ARQ` *Collapse by Material*, `ELE` *Keep Hierarchy*) |
| **`48` bañadores asimétricos (`L-01`)** | Archivo `.ldt` rechazado por Twinmotion; `.ies` genérico encerrado dentro de carcasa sólida y girado `90°` | Posiciones exactas en tabla DIALux (`dist. a muro = 1,10 m`) + portal del fabricante con descarga oficial `.ies` equivalente o conversor fotométrico contrastado | Coincidencia milimétrica en Revit MEP + luz `.ies` real situada `15 mm` bajo plano óptico + eje $C_0$ orientado hacia el muro expositor |
| **`32` downlights (`L-02`)** | Sin fuente de luz real; intento de usar solo `Emissive = 100` | Memoria DIALux validada ($UGR < 16$, $E_m = 300\text{ lx}$ en tránsito, valores de referencia a verificar según norma aplicable) + `.ies` oficial `L-02` | Bloque compuesto (`Carcasa + Difusor suave + IES Light L-02`) en *User Library* sin confundir render con certificado $UGR$ |
| **`14` carriles electrificados (`L-03`)** | Fusionados con el falso techo en la malla `.3ds` | Familia Revit MEP en *Keep Hierarchy* | Material RAL 9005 calibrado (Tema 3) + trazabilidad de circuito |

#### Preguntas de análisis
1. ¿Cuáles fueron los **cuatro errores encadenados** del colaborador al intentar «saltarse Revit y exportar directo de DIALux a Twinmotion»?
2. ¿Por qué sustituir el `.ldt` del bañador por un «`.ies` genérico cualquiera de internet» resulta inaceptable cuando el comisario quiere evaluar precisamente la mancha de luz vertical sobre sus cuadros?
3. ¿Cómo debe reorganizarse el flujo de trabajo para que las `48` ubicaciones validadas en DIALux lleguen limpias a Twinmotion conservando futura capacidad de actualización?
4. Si durante la reunión el comisario pide acercar los bañadores de `1,10 m` a `0,85 m` respecto a la pared porque le gusta más la sombra del marco, ¿qué cadena técnica obligatoria debe ejecutarse antes de aprobar el cambio en obra?

#### Tarea a realizar
En equipos de 3-4 personas actuando como dirección técnica BIM y lumínica de **ArgiBIM Ingeniería e Iluminación**, elaborad un **Protocolo de Rescate y Flujo Realista DIALux–Revit–Twinmotion** que incluya:
1. **Diagnóstico técnico de los 4 fallos** (escala `mm/m`, pérdida de fotometría en malla `.3ds`, incompatibilidad directa `.ldt` y auto-oclusión + error de eje $C_0$).
2. **Arquitectura definitiva de intercambio paso a paso**, detallando cómo coordinar las `48 + 32` luminarias entre el cálculo DIALux, el modelo `ELE_Galeria.rvt` (Direct Link) y la inserción de los `.ies` oficiales en Twinmotion.
3. **Regla de montaje del bloque compuesto `L-01` (Bañador asimétrico)** especificando distancia del emisor respecto al difusor, orientación del plano asimétrico hacia el muro de obra de arte y control de parámetros para evitar ruido o halo excesivo.
4. **Matriz de trazabilidad inicial (`L-01`, `L-02`, `L-03`)** y procedimiento de respuesta ante cambios solicitados en sala (incluyendo advertencia expresa sobre validez del $UGR < 16$ en DIALux frente a la visualización en Twinmotion).

#### Posibles soluciones o criterios de análisis
- **Abandono del `.3ds` integral de DIALux:** Descartar la exportación completa de la galería desde DIALux; utilizar `ARQ_Galeria.rvt` (*Collapse by Material*) y `ELE_Galeria.rvt` (*Keep Hierarchy*) mediante *Datasmith Direct Link* para garantizar escala `1:1` en metros, geometría limpia de salas y carriles editables individualmente.
- **Coordinación exacta desde DIALux a Revit MEP:** Verificar en `ELE_Galeria.rvt` que los `48` bañadores `L-01` están insertados exactamente a `1,10 m` de los muros expositores y a cota de falso techo `Z = +4,20 m` según el replanteo DWG/tabular de DIALux, y que los `32` downlights `L-02` coinciden con las posiciones calculadas.
- **Resolución `.ldt` → `.ies` y montaje de bloque:** Descargar del fabricante (o convertir con herramienta fotométrica verificada revisando curva polar) `L01_Banador_18W.ies` y `L02_Downlight_UGR16.ies`. En Twinmotion, crear el bloque compuesto situando la luz *IES Light* `10–20 mm` **por debajo** de la lente del bañador (evitando auto-oclusión), girar la luz `.ies` comprobando en vista en alzado/planta con *Path Tracer* o *Lumen* que el haz elíptico asimétrico baña limpiamente la pared vertical y guardar ambos tipos en la *User Library*.
- **Control de cambios y rigor fotométrico:** Si el comisario solicita acercar los bañadores a `0,85 m`, **nunca** moverlos solo en Twinmotion: primero comprobar en **DIALux** si `0,85 m` mantiene uniformidad vertical adecuada sin reflejos molestos sobre barnices ni afecta al $UGR$ de sala; después mover la familia en `ELE_Galeria.rvt`, verificar interferencias con estructura de falso techo y re-sincronizar vía *Direct Link* hacia Twinmotion.

#### Preguntas de reflexión final
1. ¿En qué casos excepcionales sí tendría sentido importar una geometría de luminaria puntual en `.3ds`/`.fbx`/`.ifc` desde DIALux o del fabricante en lugar de modelar una familia pesada en Revit?
2. ¿Cómo explicaríais al cliente de la galería por qué el cálculo de deslumbramiento $UGR < 16$ solo puede certificarse con la memoria de DIALux y nunca mirando la cámara de Twinmotion?

---

## 7. Evaluación

### Evaluación diagnóstica breve (5 minutos, inicio de sesión)
Cuestionario rápido individual (3 preguntas):
1. Cuando exportamos una escena desde DIALux en formato `.ifc` o `.3ds` hacia Twinmotion, ¿qué ocurre con los haces de luz de las luminarias?
   - a) Viajan incrustados con sus candelas exactas listas para renderizar.
   - b) Se transfieren solo mallas geométricas; hay que asignar luces `.ies` manualmente en Twinmotion. *(Correcta)*
   - c) Se convierten automáticamente en luces *Lumen* conectadas a Revit.
2. Si un fabricante europeo nos entrega únicamente el archivo fotométrico `Panel_LED.ldt` (Eulumdat) y queremos usar su distribución de luz en una luz fotométrica de Twinmotion:
   - a) Twinmotion lo lee de forma nativa directamente como `.ldt`.
   - b) Necesitamos obtener la versión `.ies` del fabricante o convertirlo de forma verificada a `.ies`. *(Correcta)*
   - c) Basta con cambiar manualmente la extensión del archivo de `.ldt` a `.ies` en Windows. *(Trampa clásica)*
3. ¿Cuál es la causa más probable si colocas una luz `.ies` dentro de una luminaria importada y no ilumina el suelo al renderizar? *(Respuesta corta abierta)*.

### Evaluación formativa durante la sesión
- Supervisión del formador durante las Actividades 1, 2 y el Caso práctico mediante lista de cotejo:
  - Rechaza mitos de sincronización mágica directa entre DIALux y Twinmotion y distingue límites según versión/formato.
  - Corrige escalas (`mm` vs. `m`) y detecta normales invertidas si importa mallas externas.
  - Extrae/convierte a formato `.ies` válido (jamás renombrando la extensión a mano) y coloca la luz fuera de la malla opaca de la carcasa.
  - Orienta correctamente ópticas asimétricas según plano $C_0$.
  - Mantiene trazabilidad entre código DIALux, familia Revit y bloque Twinmotion.

### Evaluación sumativa al final
Dos evidencias evaluables:
1. **Evidencia técnica práctica (60 %):** Escena `Practica_T5_v01.tm` + activo compuesto guardado en `02_Luminarias_IES` (*User Library*) con `.ies` asimétrico correctamente orientado sin oclusión + Protocolo del caso *Galería Azkuna Norte*.
2. **Evidencia documental de trazabilidad (40 %):** Matriz de Trazabilidad Luminotécnica completa del proyecto propio (Actividad 3) + test de cierre de 4 ítems sobre interoperabilidad y fotometría.

### Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
| :--- | :--- | :--- | :--- | :--- |
| **Comprensión realista de interoperabilidad** | Afirma que DIALux exporta luces vivas o cálculos en un clic hacia Twinmotion, o intenta usar directamente `.ldt` sin conversión ni `.ies`. | Distingue geometría de fotometría, pero no justifica cuándo preferir flujo vía Revit Direct Link frente a malla externa. | Explica con precisión qué transfieren `IFC/3DS/DXF` vs. `.ies`/`.ldt` y Revit *Direct Link*, documentando límites de versión sin falsas promesas. | Diseña flujos híbridos realistas (`DIALux → Revit → TM + .ies`) evaluando tradeoffs de mantenimiento, escala, jerarquía y coste de actualización. |
| **Manejo de mallas importadas y geometría coordinada** | Importa geometrías con escala errónea (`1.000×`), normales invertidas visibles o duplica muros de DIALux sobre Revit. | Corrige parcialmente la escala o importa la luminaria aislada, pero pierde coordinación de coordenadas con Revit MEP. | Importa/coordina luminarias en escala `1:1` sin normales rotas ni duplicidades, manteniendo coordinación espacial exacta con Revit MEP. | Integra luminarias coordinadas vía Revit Direct Link y activos externos optimizados con jerarquía limpia y control riguroso de coordenadas. |
| **Asignación y orientación de luces `.ies`** | Deja luminarias mudas solo con *Emissive*, encierra la luz `.ies` dentro de la carcasa provocando auto-oclusión o orienta mal el eje asimétrico. | Acopla un archivo `.ies` genérico o deja leve oclusión/desalineación angular del haz respecto a la arquitectura. | Asigna el `.ies` correspondiente al modelo calculado, lo posiciona libre de oclusión y orienta fielmente ejes simétricos o asimétricos ($C_0$). | Crea bloques compuestos reutilizables en *User Library* (carcasa + difusor suave + `.ies` calibrado y orientado) con verificación visual precisa. |
| **Trazabilidad y uso seguro de IA** | No vincula códigos de luminarias entre herramientas, cambia ubicaciones sin recalcular en DIALux o sube datos confidenciales sin permiso a IA. | Elabora un listado parcial de luminarias, pero omite el procedimiento de control ante cambios de revisión o verificación manual. | Completa una Matriz de Trazabilidad `DIALux ↔ Revit ↔ Twinmotion`, respeta confidencialidad y valida manualmente cualquier apoyo de IA. | Establece un gobierno completo de control de revisiones cruzadas que integra trazabilidad, auditoría segura con IA anonimizada y delimitación normativa clara. |

### Actividad de autoevaluación (5 minutos al cierre)
Cada participante responde por escrito:
1. *¿Qué mito sobre la conexión entre DIALux y Twinmotion he eliminado hoy de mi flujo de trabajo?*
2. *Enumera los 4 pasos obligatorios en orden para trasladar correctamente un bañador de pared asimétrico desde un catálogo `.ldt` en DIALux hasta una escena limpia en Twinmotion.*
3. *Valora del 1 al 5 tu capacidad para detectar y resolver en menos de 5 minutos por qué una luminaria importada no proyecta luz o ilumina en dirección contraria.*

---

## 8. Materiales y recursos

### Guion estructurado de diapositivas (Slide 1 a Slide 8)

| Diapositiva | Título | Contenido clave y mensaje visual |
|---|---|---|
| **Slide 1** | Portada: El puente real DIALux – Revit – Twinmotion | Título del tema, Bloque 5 (5/10), puente desde el Tema 4, objetivos Bloom y agenda de 240 minutos. |
| **Slide 2** | Cazadores de mitos (Actividad 1) | 5 afirmaciones de mercado vs. realidad técnica: por qué no existe «botón mágico» de cálculo vivo DIALux → Twinmotion. |
| **Slide 3** | Anatomía de formatos: Geometría vs. Fotometría | Tabla clara de lo que transporta cada extensión (`IFC`, `3DS`, `FBX`, `DXF/DWG`, `.udatasmith`, `.ldt`, `.ies`) y su dependencia de versión. |
| **Slide 4** | Dos caminos de transferencia geométrica | Esquema comparativo: Vía 1 recomendada (`DIALux → Revit MEP → Direct Link`) vs. Vía 2 puntual (malla directa + control de escala `mm/m` y normales). |
| **Slide 5** | De `.ldt` (Eulumdat) a `.ies` en Twinmotion | Explicación práctica de conversión/descarga verificada (por qué jamás basta renombrar extensión) y lectura rápida de simetría/asimetría ($C_0$). |
| **Slide 6** | Montaje del bloque luminaria sin auto-oclusión | Corte esquemático mostrando dónde situar la luz *IES Light* (`10–20 mm` fuera de la carcasa/difusor), rotación del haz asimétrico y guardado en *User Library*. |
| **Slide 7** | Caso práctico: Galería de Arte Azkuna Norte (Bilbao) | Análisis del desastre `.3ds` (`1.000×`), `.ldt` rechazado, `.ies` dentro de carcasa y giro `90°` de bañadores; reto en equipos. |
| **Slide 8** | Matriz de trazabilidad y puente al Tema 6 | Plantilla de trazabilidad con apoyo seguro de IA anonimizada y adelanto del **Tema 6**: calibración visual de intensidad en lúmenes, color y temperatura Kelvin (CCT). |

### Ficha de trabajo del alumnado
Documento de 2 páginas en 4 bloques:
1. **Bloque A (Mitos vs. Realidad):** Tabla de clasificación de las 5 afirmaciones y cuadro resumen de formatos (`IFC`, `3DS`, `DXF`, `.ldt`, `.ies`).
2. **Bloque B (Checklist de montaje `.ies`):** Pasos de verificación de escala, normales, obtención de `.ies`, distancia anti-oclusión (`10–20 mm`) y orientación $C_0$.
3. **Bloque C (Caso Azkuna Norte):** Esquema de rescate y regla ante peticiones de cambio del comisario.
4. **Bloque D (Transferencia):** Matriz de trazabilidad del proyecto propio.

### Plantilla técnica práctica: Matriz de Trazabilidad Luminotécnica (`DIALux ↔ Revit ↔ Twinmotion`)

```markdown
# MATRIZ DE TRAZABILIDAD LUMINOTÉCNICA
Proyecto (código): _____________________  Revisión DIALux: ______  Revisión Revit: ______

1. CORRESPONDENCIA DE LUMINARIAS (1 código = coherencia en las 3 plataformas)
| Cód. | Descripción y óptica | Archivo cálculo (DIALux) | Familia / Tipo (Revit MEP) | Archivo .ies (Twinmotion) | Bloque User Library | Uds. |
| :--- | :--- | :--- | :--- | :--- | :--- | :---: |
| L-01 | Bañador asim. 18W 3000K | L01_B_18W.ldt | ELE_Lum_Banador_L01 | L01_B_18W.ies (conv/fabr) | 02_Lum/L01_Banador | 48 |
| L-02 | Downlight UGR<16 14W | L02_DL_14W.ldt | ELE_Lum_Downlight_L02 | L02_DL_14W.ies | 02_Lum/L02_Downlight | 32 |
| L-03 | Proyector carril 24° | L03_Proy_24d.ldt | ELE_Lum_Carril_L03 | L03_Proy_24d.ies | 02_Lum/L03_Proyector | 14 |

2. CHECKLIST DE CONTROL ANTES DE RENDERIZAR EN TWINMOTION
[ ] Conversión o descarga .ies verificada (NUNCA renombrar extensión .ldt -> .ies manualmente)
[ ] Escala de malla comprobada en metros (1:1 respecto a Revit; corregir 0,001 si viene en mm)
[ ] Nodo IES Light colocado 10-20 mm fuera de malla sólida opaca (cero auto-oclusión)
[ ] Eje C0 de ópticas asimétricas alineado visualmente en planta y alzado con el objeto iluminado
[ ] Cambios solicitados en revisión visual recalculados primero en DIALux y circuitos Revit MEP
```

### Lecturas y recursos recomendados
*(Nota de validación previa: antes de recomendar o utilizar herramientas conversoras de `.ldt` a `.ies` o exportadores específicos de DIALux, el formador y el alumnado deben verificar la versión exacta vigente del software, la compatibilidad de licencia y la fiabilidad de las utilidades en los sitios oficiales de DIAL, Autodesk y Epic Games).*
- **Documentación oficial de Twinmotion (Epic Games):** apartados *IES Lights*, *Importing 3D geometry (FBX, OBJ, IFC, 3DS)*, *Mesh scale & Two-sided materials* y *User Library* (validar versión actual instalada).
- **Documentación oficial y notas de versión de DIALux (DIAL GmbH):** opciones de importación/exportación de planos/modelos (`DWG/DXF`, `IFC` según versión) y gestión de catálogos fotométricos `.ldt`/`.ies`.
- **Especificación técnica estándar IES LM-63 y Eulumdat (LDT):** documentos técnicos descriptivos de la estructura angular de ficheros fotométricos (para comprender por qué cambiar la extensión a mano corrompe la lectura).
- **Portales oficiales de fabricantes de iluminación profesional (catálogos BIM/DIALux):** para descargar conjuntamente familias `.rfa` simplificadas y ficheros `.ies` + `.ldt` originales del mismo código exacto de luminaria.

### Glosario de términos clave

| Término | Definición |
|---|---|
| **Archivo `.ies` (IESNA LM-63)** | Formato estándar de datos fotométricos que describe la distribución espacial de intensidad luminosa en candelas y es compatible con las luces fotométricas de Twinmotion. |
| **Auto-oclusión (*Self-Shadowing*)** | Bloqueo accidental de la emisión de una luz virtual en Twinmotion al quedar situada dentro de una carcasa o malla opaca cerrada. |
| **Bloque compuesto (*User Library*)** | Conjunto agrupado de malla geométrica, material difusor y luz `.ies` alineada que se guarda en Twinmotion para reutilizar o reemplazar instancias con rapidez. |
| **Eulumdat (`.ldt`)** | Formato europeo estándar de archivo fotométrico muy utilizado en DIALux, que no es leído de forma directa por las luces fotométricas de Twinmotion sin conversión o archivo `.ies` equivalente. |
| **Flujo BIM-céntrico** | Estrategia de trabajo que centraliza cambios de posición y tipo en Revit MEP (validados en DIALux) y sincroniza hacia Twinmotion vía *Direct Link*, evitando importaciones aisladas inconexas. |
| **Luminaria huérfana** | Luminaria presente en la escena visual cuya geometría, potencia u óptica quedó desactualizada respecto a la última revisión del cálculo DIALux o planos Revit. |
| **Normales invertidas** | Defecto de orientación de polígonos en mallas exportadas (`3DS/OBJ/IFC`) que hace que las caras de una luminaria parezcan transparentes o desaparezcan vistas desde el exterior. |
| **Plano fotométrico $C_0$** | Plano angular de referencia a partir del cual se define la orientación de curvas luminosas asimétricas en ficheros `.ldt`/`.ies` (crítico en bañadores de pared y alumbrado vial). |

---

## 9. Adaptaciones

### Sesión presencial
- **Laboratorio guiado paso a paso:** Proyectar en pantalla grande el interior de una luminaria importada en vista alámbrica/sólida para mostrar visualmente cómo `15 mm` de desplazamiento del punto *IES Light* hacen aparecer o desaparecer por completo el haz luminoso en la pared.
- **Inspección rápida de archivos reales:** Abrir con un editor de texto plano (Bloc de notas / VS Code) un fichero `.ldt` y un `.ies` durante 2 minutos para demostrar visualmente que su sintaxis interna es completamente distinta y desterrar para siempre el mito de «renombrar `.ldt` a `.ies`».

### Sesión online síncrona
- **Kit de archivos listo para descargar (`Kit_T5_Luminarias.zip`):** Incluir la malla de práctica en milímetros (`Luminaria_Especial_Malla.3ds`), el par oficial `.ldt` y `.ies` del bañador asimétrico, y la escena `Practica_T4_v01.tm` de partida, asegurando descarga previa antes de iniciar la clase.
- **Depuración compartida en vivo:** En la Actividad 2, pedir a dos alumnos que compartan su encuadre del muro iluminado con el bañador asimétrico para comprobar en directo la dirección del eje $C_0$ y corregir errores de auto-oclusión en grupo.

### Sesión asíncrona
- **Secuencia autoguiada en campus virtual:**
  1. Vídeocápsulas prácticas: (a) Diagnóstico real de formatos DIALux ↔ Revit ↔ Twinmotion; (b) Resolución de escala `mm/m`, normales y `.ldt` → `.ies`; (c) Montaje de bloque compuesto asimétrico sin auto-oclusión.
  2. Entrega de la Actividad 2: escena o capturas demostrando escala `1:1` de la malla importada y proyección limpia del haz asimétrico `.ies` sobre muro vertical + captura del activo guardado en *User Library*.
  3. Participación en el foro del caso *Galería Azkuna Norte*, subiendo la Matriz de Trazabilidad cumplimentada y auditando el flujo de cambios propuesto por un compañero.

---

## 10. Conexión con el programa

- **Qué conocimientos previos refuerza:** Conecta directamente el catálogo de luminarias Eulumdat/IES y criterios de cálculo del **Módulo 2 (Modelado en DIALux)** con el modelado de aparatos de alumbrado en **Módulo 3 (Revit MEP)**, y aplica las herramientas de sincronización (*Tema 2*), texturizado de difusores (*Tema 3*) y exposición manual (*Tema 4*) del **Bloque 5**.
- **Qué competencias desarrolla:** Evaluación crítica de interoperabilidad BIM–Fotométrica–Visual, manipulación segura de mallas 3D y ficheros `.ies`/`.ldt`, control angular de ópticas asimétricas, trazabilidad documental multi-herramienta y uso controlado de asistentes de IA para auditoría de listados.
- **Cómo se conecta con el tema anterior y posterior en el programa (6 módulos / 50 temas):**
  - *Tema anterior:* Se apoya en la configuración de iluminación global y exposición manual bloqueada del **Bloque 5, Tema 4 (Configuración de iluminación realista)**; sin exposición fija ni GI adecuada resulta imposible juzgar la forma real de un haz `.ies` asimétrico sobre un muro.
  - *Tema posterior:* Prepara directamente el **Bloque 5, Tema 6 (Intensidad, color y temperatura de luz)**. Una vez acoplados los perfiles fotométricos `.ies` reales a la geometría correcta de cada luminaria en el Tema 5, el Tema 6 enseñará a calibrar visualmente su flujo luminoso relativo (lúmenes), equilibrio cromático, temperaturas Kelvin (`2700 K` a `6500 K`) y coherencia de escenas interiores y exteriores.
- **Evidencia de aprendizaje que dejará el alumnado:** (1) Escena `Practica_T5_v01.tm` y bloque compuesto de luminaria asimétrica `.ies` sin auto-oclusión en *User Library*, y (2) Matriz de Trazabilidad Luminotécnica (`DIALux ↔ Revit ↔ Twinmotion`) verificada del proyecto integrador.

---

## Siguientes pasos para el formador

1. **Preparar el par demostrativo `.ldt` / `.ies` en texto plano y en Twinmotion:** Seleccionar un archivo oficial real de bañador asimétrico (de fabricante público verificable) para mostrar tanto la diferencia sintáctica entre `.ldt` y `.ies` como el efecto espectacular de rotar `90°` el eje $C_0$ frente a un muro.
2. **Validar los formatos de exportación disponibles en la versión de DIALux del curso:** Confirmar exactamente qué exportadores 3D (`IFC`, `DWG/DXF`, etc.) figuran activos en la compilación instalada en las aulas para no citar menús obsoletos ni inexistentes.
3. **Comprobar la malla de prueba de la Actividad 2 (`Luminaria_Especial_Malla`):** Verificar que importa limpiamente con el factor de escala previsto y que permite observar el contraste entre escala errónea y corregida.
4. **Insistir en la regla de confidencialidad con IA:** Recordar al alumnado antes de la Actividad 3 que cualquier prueba de cruce de tablas CSV con ChatGPT o Claude debe realizarse con códigos genéricos anonimizados y posterior verificación manual fila a fila.
5. **Conservar el archivo `Practica_T5_v01.tm` y la *User Library*:** Indicar al grupo que mantenga guardados ambos recursos para calibrar en el **Tema 6** las intensidades, temperaturas Kelvin (`CCT`) y mezclas cromáticas entre luminarias.
