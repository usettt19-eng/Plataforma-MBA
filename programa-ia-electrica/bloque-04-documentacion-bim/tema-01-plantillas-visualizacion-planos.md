# Tema 1. Plantillas de visualización para diversos tipos de planos

> **Aviso de alcance técnico y normativo:** Esta guía forma parte de la especialización técnica **IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas** (6 módulos / 50 temas). **No constituye un programa MBA** ni otorga por sí misma habilitación legal para firmar proyectos, dictámenes o certificados eléctricos oficiales. Cualquier ejemplo de normativa o criterio reglamentario citado (como REBT en España, IEC 60364, NEC/NFPA 70 o ISO 19650) tiene carácter **ilustrativo**: debe verificarse siempre el país, la autoridad competente, el reglamento y la edición vigente aplicables. Un modelo BIM visualmente limpio o un plano bien maquetado **no equivalen** al cálculo eléctrico normativo ni al cálculo fotométrico en DIALux.

---

## 1. Ficha del tema

| Campo | Detalle |
|---|---|
| **Título del tema** | Tema 1. Plantillas de visualización para diversos tipos de planos |
| **Bloque y posición dentro del programa** | Bloque 4: Documentación BIM — Tema 1 de 8 (Tema 22 de 50 del programa) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Profesionales y estudiantes de ingeniería eléctrica, proyectistas, coordinadores BIM e instaladores cualificados |
| **Nivel de dificultad** | Intermedio / Técnico profesional |
| **Prerrequisitos** | Conocimientos previos de modelado 3D en Revit MEP eléctrico (Bloque 3: aparatos eléctricos, luminarias, tubos, uniones y accesorios), lectura básica de planos de planta y nociones de coordinación multidisciplinar |
| **Resultado general de aprendizaje** | Al finalizar la sesión, el alumnado configurará, aplicará y auditará plantillas de vista (*View Templates*) en Revit MEP para separar con coherencia gráfica y gobernanza multiusuario los planos de fuerza/tomacorrientes, alumbrado, canalizaciones de techo/montantes y acometidas sin duplicar geometría 3D ni comprometer la legibilidad técnica. |

---

## 2. Objetivos de aprendizaje

Al concluir las 4 horas de formación, el alumnado será capaz de:

1. **Identificar** los parámetros que gobiernan la visibilidad gráfica en una vista de Revit MEP —disciplina, visibilidad/gráficos (`VG`), vínculos RVT, subyacente (*Underlay*) y rango de vista (*View Range*)— diferenciando qué propiedades conviene bloquear dentro de una plantilla de vista (*View Template*). *(Nivel de Bloom: Recordar)*
2. **Diferenciar** el uso de vistas de trabajo frente a vistas de documentación oficial, así como la separación entre representación gráfica BIM, cálculo eléctrico normativo y estudio fotométrico en DIALux. *(Nivel de Bloom: Comprender)*
3. **Aplicar** configuraciones específicas de plantilla de vista para producir de forma repetible cuatro familias de planos eléctricos —fuerza/tomacorrientes, alumbrado, canalizaciones/bandejas de techo y acometidas/cuartos técnicos— a partir de un único modelo 3D federado. *(Nivel de Bloom: Aplicar)*
4. **Analizar** incidencias habituales de visibilidad en proyectos multiusuario (elementos ocultos por rango de vista erróneo, subyacentes impresos por error o sobreescrituras manuales por elemento) para diagnosticar su causa raíz en el navegador y las propiedades de vista. *(Nivel de Bloom: Analizar)*
5. **Evaluar** y estandarizar una matriz de gobernanza de plantillas de vista para un equipo BIM eléctrico, apoyándose opcionalmente en asistentes de IA sobre datos anonimizados con verificación técnica humana obligatoria. *(Nivel de Bloom: Evaluar)*

---

## 3. Contenidos esenciales

### 3.1. Gobernanza visual en Revit MEP: plantillas de vista (*View Templates*) frente a cambios manuales

#### Explicación breve y clara
En un proyecto eléctrico modelado en Revit MEP, el modelo 3D es único, pero las vistas documentales deben mostrar realidades distintas: un instalador que replantea tomas de corriente a `+0,30 m` no necesita ver las luminarias empotradas en falso techo a `+2,85 m`, mientras que quien monta bandejas portacables en techo necesita ver vigas y conductos de climatización en medio tono (*halftone*) para evitar interferencias.

Si cada proyectista modifica la visibilidad manualmente vista por vista mediante `VV`/`VG` (*Visibility/Graphics Overrides*) o mediante *Ocultar elemento en vista* (`EH`), en pocas semanas el proyecto se vuelve ingobernable: dos plantas del mismo edificio muestran grosores, vínculos arquitectónicos y categorías distintas. La solución profesional son las **plantillas de vista (*View Templates*)**: conjuntos reutilizables y centralizados de reglas de visualización que se **asignan** (*Assign*) a todas las vistas de una misma tipología para garantizar consistencia automática ante cambios o entregas multiusuario.

#### Conceptos clave
- **Plantilla de vista asignada (*Assigned View Template*):** Vínculo permanente entre una vista y una plantilla; bloquea en gris las propiedades marcadas con la casilla `Incluir` (*Include*) para que ningún miembro del equipo las altere localmente por descuido.
- **Aplicación puntual (*Apply Template Properties*):** Copia única de propiedades desde una plantilla sin mantener vínculo; útil solo para inicializar vistas de trabajo, nunca recomendable en planos de entrega porque rompe la estandarización futura.
- **Casilla `Incluir` (*Include*):** Control granular que decide qué atributos domina la plantilla (p. ej., categorías de modelo, filtros, disciplina, rango de vista) y cuáles quedan libres por vista (p. ej., *Caja de referencia / Scope Box* o escala en detalles puntuales).
- **Gestión de vínculos RVT (*RVT Links Display Settings*):** Configuración dentro de la plantilla para mostrar la arquitectura y la estructura en modo *Por vista anfitriona* (*By Host View*), *Por vista vinculada* (*By Linked View*) o *Personalizado* (*Custom*), manteniendo el fondo en medio tono (*Halftone*) para que destaque la instalación eléctrica.

#### Definiciones necesarias
- **Plantilla de vista (*View Template*):** Objeto de configuración de Revit que encapsula parámetros gráficos y de vista (escala, nivel de detalle, disciplina, rango de vista, visibilidad de categorías, filtros y subyacente) para replicarlos con uniformidad en múltiples vistas del proyecto.
- **Sobreescritura por elemento (*Override Graphics in View -> By Element*):** Modificación gráfica manual aplicada sobre un único ejemplar dentro de una vista concreta; constituye una mala práctica de documentación cuando sustituye reglas sistematizadas mediante plantillas o filtros.
- **Disciplina de vista (*View Discipline*):** Parámetro de vista que regula cómo Revit procesa líneas ocultas, medios tonos automáticos del vínculo arquitectónico y visibilidad entre categorías (`Electricidad` frente a `Coordinación`, `Arquitectura` o `Mecánica`).

#### Ejemplo práctico realista
Un estudio de ingeniería eléctrica coordina un edificio terciario de **4 plantas (3.600 m² totales)** con tres modeladores trabajando en un modelo central compartido (*Worksharing*). En vez de configurar a mano 16 planos de planta, el coordinador BIM crea **4 plantillas maestras** (`E_DOC_Fuerza`, `E_DOC_Alumbrado`, `E_DOC_Bandejas`, `E_DOC_Acometida`). Al detectar en la revisión previa a entrega que los pilares estructurales están distrayendo la lectura en los planos de fuerza, el coordinador activa `Halftone` en la categoría `Structural Columns` dentro del apartado `RVT Links` de `E_DOC_Fuerza`: en **10 segundos**, las 4 plantas de fuerza actualizan su jerarquía gráfica al unísono antes de exportar a PDF. *(Nota de verificación: las convenciones de nombres y jerarquía gráfica de planos deben ajustarse al BEP del proyecto y a la normativa de representación gráfica aplicable en la jurisdicción correspondiente).*

#### Errores frecuentes
- Usar `Aplicar propiedades de plantilla` en lugar de **asignar** la plantilla en el parámetro *View Template* de la vista, perdiendo el control centralizado tras la primera edición.
- Ocultar elementos puntuales con `Ocultar en vista -> Elementos` (`EH`) para «limpiar» un plano rápido, provocando que meses después falten cajas o equipos críticos en los planos de obra sin dejar rastro obvio.
- Mantener la casilla `Incluir` desmarcada en `VG Overrides Model` o `VG Overrides RVT Links`, dejando abierta la puerta a cambios manuales inconsistentes entre plantas.
- Confiar en que la disciplina `Electricidad` oculta automáticamente todo lo ajeno al proyecto sin revisar las categorías de mobiliario, aparatos sanitarios o carpinterías que sí conviene ver en gris claro para ubicar tomacorrientes e interruptores.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué diferencia operativa existe entre *asignar* una plantilla de vista y *aplicar sus propiedades* de forma puntual?
2. ¿Por qué conviene dejar ciertas propiedades sin marcar en la columna `Incluir` (por ejemplo, *Scope Box*) dentro de una plantilla pensada para varias zonas o alas de un edificio?
3. ¿Qué riesgos introduce en un equipo multiusuario el uso habitual de `Ocultar elemento en vista` (`EH`) frente al gobierno mediante plantillas?

---

### 3.2. Separación de planos eléctricos: fuerza, alumbrado, canalizaciones y acometidas

#### Explicación breve y clara
En edificación e industria resulta inviable documentar toda la instalación eléctrica sobre una única planta superpuesta: las luminarias, los detectores de presencia, las bases de enchufe (tomacorrientes), las bandejas de techo y los cuadros/acometidas colisionarían gráficamente y harían ilegible la ejecución en obra. La estrategia BIM profesional separa la documentación en **tipos de planos especializados**, cada uno gobernado por su propia plantilla de vista sobre un mismo modelo 3D único.

Conviene recordar un principio técnico esencial: separar bien los planos en Revit **mejora la coordinación constructiva**, pero **no verifica** el dimensionamiento de conductores, la selectividad de protecciones ni los niveles de iluminancia en lux ($lx$) obtenidos en DIALux. La plantilla visual ordena lo ya calculado y modelado; la validación reglamentaria sigue exigiendo cálculo independiente por técnico competente.

#### Conceptos clave
- **Plano de fuerza y tomacorrientes (*Power Plan*):** Vista de planta (*Floor Plan*) enfocada en bases de enchufe (`Electrical Fixtures`), tomas industriales, cajas de suelo, cuadros secundarios (`Electrical Equipment`) y sus recorridos de tubo asociados en planta baja o tabiquería.
- **Plano de alumbrado (*Lighting Plan*):** Vista configurada habitualmente como **plano de techo reflejado (*RCP*)** o planta con rango ajustado al plénum/techo para mostrar luminarias (`Lighting Fixtures`), interruptores/pulsadores/sensores (`Lighting Devices`) y líneas simbólicas de encendido/circuitado.
- **Plano de canalizaciones de techo y montantes (*Containment / Cable Tray Plan*):** Vista orientada a bandejas portacables (`Cable Trays`), escalerillas, canalizaciones principales (`Conduits`), uniones y soportes en el plénum, mostrando conductos HVAC y tuberías de fontanería/PCI en medio tono para coordinación espacial.
- **Plano de acometidas y distribución general (*Main Feeders & Earthing*):** Vista de planta general o cimentación/sótano centrada en centros de transformación, cuadros generales de baja tensión (CGBT), redes de tierras (`Earthing`) y trazados de alimentadores principales entre cuartos eléctricos.

#### Definiciones necesarias
- **Categorías eléctricas principales en Revit MEP:** Agrupaciones nativas que permiten activar o apagar familias por tipo de plano: `Electrical Equipment` (cuadros y transformadores), `Electrical Fixtures` (tomacorrientes y tomas de fuerza), `Lighting Fixtures` (luminarias), `Lighting Devices` (mecanismos de mando y sensores), `Conduits` (tubos), `Cable Trays` (bandejas) y `Wires` (cableado 2D simbólico).
- **Vista de plano de planta (*Floor Plan*) frente a Plano de techo reflejado (*Reflected Ceiling Plan - RCP*):** En una planta convencional se mira hacia abajo desde el plano de corte; en un RCP se mira hacia arriba hacia el falso techo, permitiendo visualizar con claridad rejillas modulares (`600 × 600 mm`), luminarias empotradas y bandejas suspendidas.
- **Coherencia inter-herramienta (Revit vs. DIALux vs. Cálculo):** Capacidad de asegurar que la posición y tipo de luminaria visualizada en el plano de alumbrado de Revit coincide con la memoria fotométrica (`.ldt`/`.ies`) verificada en DIALux y con los circuitos del cuadro de cargas.

#### Ejemplo práctico realista
En una oficina técnica de **850 m²** con falso techo registrable a **`+2,80 m`** y forjado estructural a **`+3,45 m`**:
- La plantilla **`E_PL_FUERZA`** se aplica a una vista *Floor Plan*, mantiene encendidos `Electrical Fixtures` (tomas `16 A 2P+T` a `+0,30 m` y puestos de trabajo a `+0,75 m`), `Electrical Equipment` (subcuadro `CS-OFI-1`) y apaga `Lighting Fixtures` y `Cable Trays` del plénum.
- La plantilla **`E_PL_ALUMBRADO`** se aplica a una vista *RCP*, enciende `Lighting Fixtures` (paneles LED `600 × 600 mm`, `34 W`, `4.000 K` a `+2,80 m`), `Lighting Devices` (pulsadores/detectores) y el patrón de rejilla de `Ceilings` del vínculo arquitectónico, apagando `Electrical Fixtures`.
- La plantilla **`E_PL_CANALIZACIONES`** muestra `Cable Trays` de `200 × 60 mm` y `300 × 60 mm` a `+3,15 m` junto con `Conduits` rígidos hacia bajantes, dejando `Mechanical Equipment` y `Ducts` del vínculo MEP en medio tono gris (`Halftone`).
*(Nota de verificación: las alturas libres, compartimentación cortafuegos y separación mínima entre bandejas de fuerza y telecomunicaciones deben comprobarse según la normativa vigente del país, p. ej., REBT e ICT en España o código aplicable en destino).*

#### Errores frecuentes
- Intentar sacar fuerza, alumbrado y bandejas de techo en una sola plantilla «para ahorrar láminas», generando solapes ilegibles entre enchufes de pared y luminarias en proyección.
- Apagar la categoría `Electrical Equipment` en el plano de alumbrado o fuerza cuando sí debe verse el cuadro de distribución desde el cual parten los circuitos de esa planta.
- Dejar encendidas las categorías de fontanería o mobiliario decorativo con el mismo grosor de línea que los símbolos eléctricos, restando protagonismo a la instalación.
- Creer que ocultar una bandeja en una plantilla equivale a resolver una colisión real en 3D con un conducto de extracción.

#### Preguntas que el alumnado debería poder responder
1. ¿Por qué los planos de alumbrado suelen construirse a partir de un plano de techo reflejado (*RCP*) en lugar de una planta convencional?
2. ¿Qué categorías de Revit MEP deben permanecer visibles y cuáles apagadas en una plantilla de fuerza/tomacorrientes frente a una de canalizaciones de techo?
3. Si el cálculo en DIALux modifica una luminaria de `600 × 600 mm` a carril suspendido, ¿qué comprobaciones adicionales al cambio visual en Revit exige el proyecto?

---

### 3.3. Control de rango de vista (*View Range*), subyacente (*Underlay*) y disciplina eléctrica

#### Explicación breve y clara
Incluso cuando las categorías correctas están activadas en `VG`, el error más frecuente de visibilidad en Revit MEP eléctrico proviene de dos parámetros mal comprendidos: el **rango de vista (*View Range*)** y el **subyacente (*Underlay*)**.

El rango de vista define una «caja horizontal» verticalmente acotada respecto al nivel de la vista mediante cuatro planos: **Parte superior (*Top*)**, **Plano de corte (*Cut Plane*)**, **Parte inferior (*Bottom*)** y **Profundidad de vista (*View Depth*)**. En electricidad, los elementos habitan cotas muy dispersas: tomas a `+0,30 m`, interruptores a `+1,10 m`, cuadros hasta `+2,00 m`, luminarias en falso techo a `+2,85 m` y bandejas principales a `+3,25 m`. Si el plano `Top` se deja por defecto en `+2,30 m`, las luminarias y bandejas desaparecen silenciosamente aunque su categoría esté encendida. Por otro lado, un **Underlay** olvidado en una plantilla de impresión introduce geometría fantasma de la planta inferior o superior en los PDF de obra, provocando errores de replanteo graves.

#### Conceptos clave
- **Cuatro planos del *View Range*:** `Top` (límite superior del rango primario), `Cut Plane` (plano donde se seccionan muros/puertas), `Bottom` (límite inferior primario) y `View Depth` (extensión adicional bajo `Bottom`, o sobre `Top` en un RCP).
- **Regla específica de categorías MEP en corte:** En Revit, los aparatos eléctricos (`Electrical Fixtures`), luminarias (`Lighting Fixtures`) y equipos (`Electrical Equipment`) suelen ser **familias no cortables** (*non-cuttable*); basta con que estén dentro del rango entre `Bottom`/`View Depth` y `Top` para mostrarse completos en proyección o mediante su símbolo 2D anidado.
- **Región de plano (*Plan Region*):** Subárea poligonal dentro de una vista de planta o RCP que permite asignar un *View Range* local distinto —por ejemplo, en un vestíbulo a doble altura (`+6,50 m`) sin alterar el rango de las oficinas de `3,00 m`.
- **Subyacente (*Underlay*):** Herramienta de apoyo al modelado que proyecta otro rango de niveles en gris tenue mirando hacia abajo (*Look down*) o hacia arriba (*Look up*); **debe bloquearse en `Ninguno (None)` dentro de todas las plantillas de plano para impresión**.

#### Definiciones necesarias
- **Rango de vista (*View Range*):** Conjunto de cotas de recorte vertical asociadas a un nivel de referencia que determina qué objetos se seccionan, se proyectan o quedan excluidos de la vista en planta o RCP.
- **Plano de corte (*Cut Plane*):** Plano horizontal (habitualmente a `+1,20 m` en plantas de arquitectura/fuerza o `+2,30 m` en RCP) utilizado para cortar envolventes arquitectónicas y ubicar puertas, ventanas y tabiques.
- **Disciplina `Electricidad` frente a `Coordinación`:** Cuando la disciplina de la vista es `Electricidad`, Revit aplica automáticamente medio tono a arquitectura/estructura y controla la jerarquía visual de líneas ocultas MEP; en `Coordinación`, todas las disciplinas se imprimen con su peso real completo, útil para coordinación 3D pero excesivamente densa para planos eléctricos puros.

#### Ejemplo práctico realista
En una planta de oficinas con nivel de suelo `NPT = ±0,00 m`, falso techo a `+2,85 m`, forjado superior a `+3,60 m` y tabiques cortados correctamente a `+1,20 m`:
1. **Plantilla de Fuerza (`Floor Plan`):** `Top = +2,30 m`, `Cut Plane = +1,20 m`, `Bottom = 0,00 m`, `View Depth = -0,10 m` (para captar arquetas o cajas de suelo empotradas en solera), `Underlay = None`, `Discipline = Electrical`. Con esto se ven enchufes a `+0,30 m`, interruptores/tomas de encimera a `+1,10 m` y el cuadro eléctrico (`0,50 m–1,90 m`), sin ver las bandejas a `+3,20 m`.
2. **Plantilla de Bandejas de Techo (`Floor Plan` o `RCP`):** Si se usa *Floor Plan* para mantener la lectura de tabiquería inferior de referencia, se ajusta `Top = +3,55 m` (justo bajo el forjado superior), `Cut Plane = +3,00 m` (o `1,20 m` si interesa ver tabiques cortados con puertas, elevando `Top` a `+3,55 m`), `Bottom = +2,60 m` (evitando el ruido de los enchufes de zócalo) y `View Depth = +2,60 m`.
*(Nota técnica: la visibilidad real depende también de cómo esté construida cada familia —en particular, si incluye líneas invisibles verticales para forzar intersección con el Cut Plane— y de la configuración exacta de niveles del proyecto).*

#### Errores frecuentes
- Dejar `Underlay = Level Above (Look up)` activado en una plantilla de planos para obra y entregar un PDF donde el techo superior aparece superpuesto como líneas discontinuas confusas.
- Fijar `Bottom = 0,00 m` y `View Depth = 0,00 m` en planta baja con canalizaciones enterradas bajo losa (`-0,25 m`) o cajas de suelo empotradas (`-0,08 m`), haciendo desaparecer dichos elementos del plano.
- Subir `Cut Plane` a `+3,00 m` en una planta general donde los muros bajos (`h = 2,20 m`) o puertas (`h = 2,10 m`) dejan de cortarse, perdiendo el contexto arquitectónico necesario para orientarse en obra.
- Cambiar la disciplina de la vista a `Coordinación` para «ver mejor un muro» sin advertir que todos los elementos sanitarios, conductos y mobiliario recuperan grosor negro pleno, arruinando la lectura de los circuitos eléctricos.

#### Preguntas que el alumnado debería poder responder
1. Si las luminarias colgadas a `+2,90 m` no aparecen en un plano de planta cuya categoría `Lighting Fixtures` sí está activada, ¿qué parámetro debes inspeccionar primero y qué valores comprobarías?
2. ¿Por qué conviene bloquear `Underlay = None` en las plantillas de documentación y reservar el subyacente únicamente para las vistas de trabajo?
3. ¿Cómo resolverías en un mismo plano una nave de oficinas de `3,00 m` de altura junto con un atrio anexo de `7,20 m` donde hay luminarias suspendidas a `+6,40 m`?

---

### 3.4. Vistas de trabajo frente a vistas de plano, gobernanza multiusuario y asistencia responsable con IA

#### Explicación breve y clara
Un error organizativo muy habitual en estudios BIM consiste en modelar y acotar directamente sobre las mismas vistas colocadas en los planos de entrega. Cuando un proyectista enciende temporalmente el subyacente, activa la caja de sección o cambia la disciplina a `Coordinación` para trazar una montante, altera el plano maestro que otro compañero puede estar a punto de imprimir.

La solución estándar es implantar un **ecosistema dual de vistas** combinado con gobernanza multiusuario:
- **Vistas de trabajo (`W_` o `01_TRABAJO`):** Desligadas de láminas, con subyacentes flexibles, filtros de auditoría, disciplina `Coordinación` y plantilla opcional de trabajo.
- **Vistas de documentación (`D_` o `02_PLANOS`):** Colocadas en planos (*Sheets*), con su *View Template* asignada y bloqueada, escala fija y sin manipulaciones temporales.

En esta estructura, herramientas de IA conversacional (como ChatGPT o Claude) pueden acelerar la redacción de matrices de estandarización, nomenclaturas de plantillas y listas de verificación previas a emisión, siempre trabajando con **listados anonimizados** (sin planos `.dwg`, modelos `.rvt` ni datos sensibles del cliente) y validando cada regla directamente dentro de Revit antes de incorporarla al estándar del equipo.

#### Conceptos clave
- **Separación Trabajo vs. Documentación:** Principio operativo por el cual ninguna vista usada para modelar, comprobar choques o explorar soluciones se inserta jamás en una lámina de entrega.
- **Modos de propiedades temporales (*Temporary View Properties*):** Función de Revit que permite probar temporalmente cambios de visibilidad en una vista bloqueada por plantilla (borde azul/morado en el lienzo) sin corromper la plantilla ni afectar a la impresión definitiva.
- **Transferencia de normas de proyecto (*Transfer Project Standards*):** Mecanismo nativo de Revit para importar plantillas de vista, filtros y configuraciones desde una plantilla maestra corporativa (`.rte`) hacia un proyecto en curso, cuidando las colisiones de nombres (*Overwrite* vs. *New Only*).
- **Uso seguro de IA para gobernanza documental:** Empleo de asistentes LLM para generar tablas de especificaciones de plantillas y protocolos de auditoría QA sobre texto genérico, sin delegar decisiones técnicas ni subir archivos confidenciales.

#### Definiciones necesarias
- **Gobernanza de vistas (*View Governance*):** Conjunto de reglas de nombrado, propiedad de plantillas, permisos de edición y listas de comprobación que impiden la proliferación descontrolada de vistas duplicadas (`Copy of Level 1`) y garantizan planos reproducibles.
- **Archivo plantilla BIM (`.rte`):** Archivo base corporativo o de proyecto que almacena previamente las plantillas de vista, familias normalizadas, parámetros y grosores de línea aprobados antes de iniciar el modelado eléctrico.
- **Lista de verificación previa a emisión (*Pre-Issue QA Checklist*):** Revisión estructurada de vistas, plantillas asignadas, *Underlay = None*, vínculos actualizados y ausencia de elementos ocultos manualmente antes de generar PDF.

#### Ejemplo práctico realista
Una ingeniería de **12 proyectistas** utiliza una plantilla maestra `.rte` con **6 plantillas de vista bloqueadas** para documentación (`E_DOC_FUE_100`, `E_DOC_ALU_100`, `E_DOC_BAN_050`, `E_DOC_ACO_100`, `E_DOC_CUA_020`, `E_DOC_3D_COORD`) y **2 plantillas flexibles de trabajo** (`E_TRAB_PLANTA`, `E_TRAB_3D`). Antes de emitir el paquete de planos de un centro comercial de **14.000 m²**, el coordinador BIM abre una tabla de planificación de vistas (*View List*) filtrada por vistas en lámina (`Sheet Number != ""`) y verifica que el campo `View Template` no tiene ningún valor `<None>` y que `Underlay` es `None` en el **100 %** de las 32 vistas de entrega. Como apoyo previo, utilizó Claude para redactar la tabla guía de nomenclatura y checklist de revisión a partir de un esquema anónimo de niveles, revisando después manualmente cada categoría en Revit 2024. *(Nota: el flujo de auditoría debe adaptarse a la versión de Revit instalada y al Plan de Ejecución BIM —BEP— del cliente).*

#### Errores frecuentes
- Modelar encima de la vista colocada en el plano y olvidar desactivar el *Temporary Hide/Isolate* o el subyacente antes de cerrar sesión.
- Permitir que cada modelador cree plantillas personales (`Plantilla_Juan_Fuerza_v2`), duplicando reglas contradictorias en el archivo central.
- Ejecutar `Transfer Project Standards -> Overwrite` a ciegas sobre un proyecto avanzado, sobrescribiendo filtros o plantillas adaptadas específicamente al proyecto sin copia previa.
- Subir capturas con carátulas de clientes, direcciones reales o listados internos confidenciales a un asistente de IA externo sin permiso expreso, o copiar nombres de parámetros sugeridos por la IA que no coinciden con la versión e idioma de Revit utilizados en el estudio.

#### Preguntas que el alumnado debería poder responder
1. ¿Qué función cumple una tabla de planificación de vistas (*View List*) para auditar plantillas de visualización antes de publicar planos en PDF?
2. ¿Cuándo resulta legítimo usar *Temporary View Properties* sobre una vista documental y qué garantía aporta frente a modificar la plantilla?
3. ¿Qué datos nunca deben enviarse a un asistente de IA al diseñar una matriz de gobernanza de plantillas de vista y qué verificación posterior sigue siendo obligatoria?

---

## 4. Metodología didáctica

La sesión combina microexposición técnica con demostración en vivo sobre un modelo Revit MEP eléctrico de referencia, análisis guiado de incidencias reales y configuración autónoma de un paquete estandarizado de plantillas de vista.

| Fase | Tiempo | Rol del formador | Actividad del alumnado |
|---|---|---|---|
| **1. Apertura y activación de conocimientos** | 00:00 – 00:25 (25 min) | Presenta el alcance del Bloque 4 (Documentación BIM), aclara la frontera entre visibilidad gráfica BIM y verificación normativa/fotométrica, y lanza la Actividad 1 (diagnóstico visual de planos defectuosos). | Observa 4 capturas reales de planos eléctricos con fallos de visibilidad, diagnostica síntomas iniciales y comparte experiencias previas sobre descontrol de vistas en Revit. |
| **2. Microexposición y demo guiada: View Templates y separación por planos** | 00:25 – 01:05 (40 min) | Demuestra en Revit MEP la creación, asignación, bloqueo mediante casillas `Incluir` y configuración de vínculos RVT para Fuerza, Alumbrado, Canalizaciones y Acometidas. | Toma notas en la ficha técnica, identifica qué categorías deben mostrarse u ocultarse en cada plano y formula dudas sobre casos de solape entre disciplinas. |
| **3. Microexposición y demo: View Range, Underlay y Disciplina** | 01:05 – 01:40 (35 min) | Explica geométricamente los 4 planos del *View Range*, RCP frente a *Floor Plan*, *Plan Regions*, trampas de *Underlay* y efectos de `Electrical` frente a `Coordination`. | Resuelve sobre esquema gráfico cotas de `Top`, `Cut Plane`, `Bottom` y `View Depth` para distintos montajes eléctricos (tomas, bandejas, luminarias de techo y atrios). |
| **Descanso activo** | 01:40 – 01:55 (15 min) | Mantiene abierto el entorno de práctica y recoge dudas técnicas en el chat o pizarra. | Descansa de pantalla y revisa la descarga del modelo base de práctica para la fase aplicada. |
| **4. Actividad 2: Aplicación técnica en laboratorio Revit MEP** | 01:55 – 02:35 (40 min) | Supervisa el trabajo práctico en el modelo proporcionado, asiste bloqueos técnicos puntuales y verifica que se utilice asignación de plantilla (y no cambios locales `VG`). | Configura desde cero 4 View Templates (`Fuerza`, `Alumbrado RCP`, `Canalizaciones`, `Acometidas`), las asigna a sus vistas y corrige un rango de vista defectuoso. |
| **5. Estudio de caso y transferencia (Actividad 3): Clínica Valdeluz** | 02:35 – 03:20 (45 min) | Presenta el caso *Clínica Ambulatoria Valdeluz*, dinamiza equipos o parejas, valida el uso opcional de IA anonimizada para redactar la matriz de gobernanza y supervisa el análisis. | Audita las vistas defectuosas del caso, redacta la Matriz de Plantillas de Vista + reglas de *View Range* y aplica la auditoría mediante *View List* en Revit. |
| **6. Discusión guiada y contraste técnico** | 03:20 – 03:45 (25 min) | Modera la puesta en común de matrices de 2–3 equipos, contrasta diferencias de criterio (p. ej., bandejas en planta vs. RCP) y subraya buenas prácticas multiusuario. | Defiende sus decisiones de rango de vista y disciplina, contrasta soluciones con otros participantes y corrige su matriz de trabajo. |
| **7. Síntesis, evaluación sumativa y cierre** | 03:45 – 04:00 (15 min) | Resume los 5 principios de oro de documentación mediante View Templates, aplica el test rápido de salida y presenta el enlace hacia el Tema 2. | Completa el cuestionario sumativo breve (6 ítems), registra su autoevaluación y sube su entregable al aula virtual. |

**Total cronometrado:** 25 + 40 + 35 + 15 + 40 + 45 + 25 + 15 = **240 minutos (4 horas)**.

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Diagnóstico forense de 4 planos eléctricos «rotos»

- **Nombre:** Diagnóstico forense de 4 planos eléctricos «rotos»
- **Objetivo:** Activar los conocimientos previos de Revit MEP del alumnado identificando síntomas habituales causados por errores de visibilidad, rango de vista, subyacente y disciplina.
- **Instrucciones para el alumnado:**
  1. Observa las 4 capturas de plano proyectadas (A: plano de alumbrado sin luminarias visibles; B: plano de fuerza con conductos de climatización negros al 100 % y bandejas del techo superior impresas en gris; C: planta donde faltan cajas de suelo a `-0,08 m`; D: planta 1 con mobiliario apagado y planta 2 con mobiliario encendido).
  2. En 8 minutos, escribe individualmente en la ficha o encuesta digital cuál es la causa técnica más probable de cada fallo (categorías `VG`, *View Range*, *Underlay*, *Discipline* o falta de plantilla asignada).
  3. Contrasta tus respuestas en plenario durante 7 minutos.
- **Materiales necesarios:** Presentación con 4 capturas anonimizadas reales de planos defectuosos y encuesta interactiva (Slido, Mentimeter o formulario del campus).
- **Tiempo estimado:** 15 minutos (integrados en la Fase 1).
- **Rol del formador:** Proyectar los casos, evitar revelar la solución antes de la votación y conectar cada error diagnosticado con el apartado correspondiente de los contenidos esenciales.
- **Producto o entregable esperado:** Matriz grupal de diagnóstico inicial con los 4 fallos asociados a su parámetro causante en Revit.
- **Criterios de éxito:** El alumnado acierta al menos 3 de 4 causas raíz y justifica la distinción entre un fallo de categoría apagada y un fallo de rango de vista o subyacente.

---

### Actividad 2 (Aplicación técnica): Construcción de la batería de 4 View Templates eléctricas

- **Nombre:** Construcción de la batería de 4 View Templates eléctricas
- **Objetivo:** Aplicar la configuración de plantillas de vista en Revit MEP para generar planos diferenciados de fuerza, alumbrado, canalizaciones de techo y acometidas a partir de un único modelo 3D.
- **Instrucciones para el alumnado:**
  1. Abre el archivo de práctica proporcionado (`Modelo_Base_Bloque4_T1.rvt`, planta de oficinas de una planta + altillo técnico, con arquitectura vinculada).
  2. Duplica y organiza 4 vistas de documentación (`02_PLANOS`) y crea 4 plantillas de vista asignadas:
     - `E_DOC_Fuerza_100` (Floor Plan: `Electrical Fixtures` y `Electrical Equipment` activos; `Lighting Fixtures` oculto; arquitectura en `Halftone`; `Underlay = None`).
     - `E_DOC_Alumbrado_100` (RCP: `Lighting Fixtures`, `Lighting Devices` y patrón de falso techo visibles; `Electrical Fixtures` oculto; `Top = +4,00 m`, `Cut Plane = +2,30 m`).
     - `E_DOC_Canalizaciones_050` (Floor Plan o RCP según criterio indicado: `Cable Trays` y `Conduits` destacados; vínculos mecánicos HVAC en `Halftone`; rango ajustado al plénum `+2,60 m` a `+3,55 m`).
     - `E_DOC_Acometidas_100` (`Electrical Equipment`, cuadros generales, bandejas troncales y bajantes principales; `View Depth = -0,40 m` para captar canalización enterrada bajo losa).
  3. Incluye una *Plan Region* en el vestíbulo de doble altura (`+5,80 m`) de la vista de alumbrado para mostrar la lámpara suspendida a `+5,10 m`.
  4. Verifica que en todas las vistas documentales la propiedad `View Template` aparece asignada y que los campos controlados quedan bloqueados.
- **Materiales necesarios:** Archivo Revit `.rvt` de práctica con vínculo arquitectónico y mecánico ligero, y ficha guía con cotas de niveles del edificio.
- **Tiempo estimado:** 40 minutos (Fase 4).
- **Rol del formador:** Circular por las estaciones o salas, compartir pantalla para desbloquear problemas con `RVT Links` o *Plan Regions*, y verificar que nadie haya usado `Ocultar en vista` (`EH`) como atajo.
- **Producto o entregable esperado:** Archivo `.rvt` guardado con las 4 vistas gobernadas por las 4 plantillas asignadas y capturas comparativas de las 4 vistas resultantes.
- **Criterios de éxito:** Las 4 vistas muestran exactamente los elementos de su especialidad sin interferencia visual de las otras especialidades, mantienen `Underlay = None`, reflejan correctamente la luminaria en el vestíbulo mediante *Plan Region* y tienen sus plantillas bloqueadas.

---

### Actividad 3 (Transferencia a proyecto real): Auditoría y estandarización de vistas mediante *View List* (con apoyo opcional de IA anonimizada)

- **Nombre:** Auditoría y estandarización de vistas mediante *View List*
- **Objetivo:** Transferir los principios de gobernanza visual a un flujo de control de calidad (*QA*) real aplicable a proyectos multiusuario mediante tablas de auditoría de vistas y plantillas reutilizables.
- **Instrucciones para el alumnado:**
  1. Trabajando en parejas sobre el modelo del caso práctico (*Clínica Valdeluz*), crea una **Lista de vistas (`View List`)** en Revit que incluya los campos: `View Name`, `Discipline`, `View Template`, `View Scale`, `Detail Level`, `Underlay: Range Base Level` y `Sheet Number`.
  2. Filtra o ordena la tabla para identificar todas las vistas colocadas en planos que carecen de plantilla (`<None>`), tienen `Underlay` activo o usan `Coordination` por error.
  3. Corrige las vistas asignando las plantillas normalizadas del equipo y mueve o renombra las vistas de modelado bajo el prefijo `W_TRAB_` fuera de láminas.
  4. *(Opcional / transferencia con IA)*: Redacta un prompt anónimo en ChatGPT o Claude (sin nombres reales de clínica ni datos confidenciales) solicitando una **lista de comprobación de 10 puntos** para auditar plantillas eléctricas antes de emitir PDF; revisa críticamente la salida eliminando cualquier parámetro inventado por la IA y valida los ítems reales en tu `View List`.
- **Materiales necesarios:** Modelo de práctica del caso, plantilla de Matriz de Gobernanza (Sección 8) y acceso opcional a asistente LLM en navegador.
- **Tiempo estimado:** 45 minutos (Fase 5, integrado con la resolución del caso práctico).
- **Rol del formador:** Guiar la configuración de campos en `View List`, revisar la calidad de las correcciones y recalcar que ninguna salida de IA puede aplicarse sin contrastar los nombres reales de parámetros de Revit.
- **Producto o entregable esperado:** `View List` auditada al 100 % sin incidencias de `<None>` ni `Underlay` en vistas en lámina, más Matriz de Plantillas de Vista cumplimentada (y registro del prompt/validación si se empleó IA).
- **Criterios de éxito:** El 100 % de las vistas en plano quedan vinculadas a su `View Template` correspondiente, con `Underlay = None` y separación explícita frente a vistas `W_TRAB_`.

---

## 6. Caso práctico

### Caso práctico: Crisis de coordinación y planos inconsistentes en la Clínica Ambulatoria Valdeluz

#### Contexto empresarial
**IngeVolt Proyectos BIM S.L.** es una ingeniería eléctrica de tamaño medio (18 personas) contratada para desarrollar la documentación ejecutiva BIM de la **Clínica Ambulatoria Valdeluz**, un edificio sanitario ambulatorio de **3 plantas sobre rasante y 1 sótano técnico** (**2.400 m² construidos**). Tres proyectistas modelan simultáneamente en Revit MEP sobre un archivo central compartido (*Worksharing*) vinculado a los modelos de Arquitectura (`ARQ_Valdeluz.rvt`) y Climatización/Fontanería (`MEP_HidroClima.rvt`). Quedan **48 horas** para entregar el paquete de planos de planta en PDF para revisión de obra.

#### Situación o problema
Al revisar un borrador de exportación en PDF, la dirección técnica detecta cuatro incidencias graves:
1. En el **Plano de Alumbrado de Planta 1 (`E-102`)**, las luminarias lineales empotradas en el falso techo del pasillo (`+2,90 m`) y las cajas de emergencia suspendidas en el hall de entrada a doble altura (`+5,40 m`) **no aparecen impresas**, aunque el modelador asegura que están modeladas en 3D y las ve en su vista 3D de trabajo.
2. En el **Plano de Fuerza y Tomacorrientes de Planta 2 (`E-201`)**, aparecen superpuestas en gris tenue las mesas quirúrgicas y las bandejas eléctricas de la Planta 1, mientras que varias tomas de encimera situadas a `+1,15 m` en salas de curas están visibles, pero dos arquetas de suelo técnico en el sótano (`-0,25 m`) han desaparecido del plano de planta sótano (`E-001`).
3. En el **Plano de Canalizaciones de Techo de Planta 1 (`E-103`)**, los conductos de impulsión de aire acondicionado del modelo vinculado salen con líneas negras gruesas idénticas a las bandejas eléctricas, imposibilitando distinguir qué corresponde al instalador electricista y qué corresponde al instalador de climatización.
4. Cada proyectista modificó a mano las opciones `VG` de su planta asignada sin usar plantillas de vista vinculadas; incluso uno de ellos usó `Ocultar en vista -> Elementos` (`EH`) para esconder un cuadro secundario provisional que luego olvidó reactivar tras confirmarse su ubicación definitiva.

#### Datos disponibles

| Parámetro / Elemento del proyecto | Valor / Estado actual observado |
|---|---|
| **Cotas de niveles (NPT)** | Sótano: `-3,20 m` · Planta Baja: `±0,00 m` · Planta 1: `+3,80 m` · Planta 2: `+7,60 m` |
| **Alturas en Planta 1 (respecto a nivel de planta)** | Toma general: `+0,30 m` · Toma sala de curas: `+1,15 m` · Falso techo pasillo: `+2,90 m` · Bandejas eléctricas: `+3,25 m` · Losa superior: `+3,80 m` |
| **Zona especial (Hall PB–P1)** | Doble altura entre Planta Baja y Planta 1; luminarias suspendidas a `+5,40 m` sobre PB |
| **Sótano técnico (respecto a nivel Sótano)** | Sub-losa / arqueta alimentación cuadro general: `-0,25 m` debajo de `NPT Sótano` |
| **Configuración actual `E-102` (Alumbrado P1)** | Vista *Floor Plan* con `Top = +2,30 m`, `Cut Plane = +1,20 m`, `Bottom = 0,00 m`, `View Template = <None>` |
| **Configuración actual `E-201` (Fuerza P2)** | Vista *Floor Plan* con `Underlay: Range Base Level = Planta 1`, `Orientation = Look down`, `View Template = <None>` |
| **Configuración actual `E-001` (Fuerza Sótano)** | Vista *Floor Plan* con `Bottom = 0,00 m`, `View Depth = 0,00 m` |
| **Configuración actual `E-103` (Canalizaciones P1)** | `Discipline = Coordination`; vínculo `MEP_HidroClima.rvt` sin `Halftone` ni sobreescritura |

#### Preguntas de análisis
1. ¿Por qué desaparecen en `E-102` las luminarias de pasillo a `+2,90 m` y qué ajuste de tipo de vista, *View Range* y *Plan Region* resuelve tanto el pasillo como el hall a `+5,40 m`?
2. ¿Qué dos fallos independientes provocan los problemas descritos en `E-201` (elementos ajenos en gris) y en `E-001` (arquetas enterradas invisibles)?
3. ¿Qué impacto tiene mantener `Discipline = Coordination` sin `Halftone` en el vínculo `MEP_HidroClima.rvt` en el plano `E-103` y cómo debe reconfigurarse la plantilla?
4. ¿Cómo recuperará y blindará el equipo el cuadro ocultado manualmente con `EH` y cómo evitará que vuelva a suceder en las 48 horas previas a la entrega?

#### Tarea a realizar
En equipos de 3–4 personas (o parejas en sesión síncrona), elaborad el **Plan de Normalización Visual de la Clínica Valdeluz** y ejecutadlo sobre el modelo de prácticas:
1. Diseñad la **Tabla Maestra de 4 Plantillas de Vista** (`E_DOC_Fuerza`, `E_DOC_Alumbrado_RCP`, `E_DOC_Canalizaciones`, `E_DOC_Acometida_Sotano`), indicando para cada una: tipo de vista, *Discipline*, `Top / Cut Plane / Bottom / View Depth`, estado de *Underlay*, categorías activas/apagadas y tratamiento de vínculos `ARQ` y `MEP_HidroClima`.
2. Detallad la solución concreta de la *Plan Region* para el hall a doble altura (`+5,40 m`).
3. Ejecutad la auditoría en Revit mediante *Reveal Hidden Elements* (bombilla inferior) y *View List* para eliminar el uso de `EH` y asegurar el bloqueo del `100 %` de vistas en lámina.

#### Posibles soluciones o criterios de análisis
Una resolución técnicamente sólida contemplará los siguientes criterios:
- **Resolución de `E-102` (Alumbrado):** Cambiar la vista de documentación de alumbrado a un **Plano de techo reflejado (*RCP*)** gobernado por `E_DOC_Alumbrado_RCP` (`Discipline = Electrical`, `Cut Plane = +2,30 m`, `Top = +3,75 m`, `View Depth = +3,75 m`, `Lighting Fixtures` y `Lighting Devices` activos, `Electrical Fixtures` apagado). En la vista de Planta Baja o Planta 1 (según la lámina donde se documente el atrio), insertar una **Plan Region** sobre el contorno del hall con `Top = +6,20 m` y `View Depth = +6,20 m` para capturar las luminarias a `+5,40 m`.
- **Resolución de `E-201` (Fuerza) y `E-001` (Sótano):** En la plantilla `E_DOC_Fuerza`, marcar la casilla `Incluir` en `Underlay` fijándola estrictamente en **`None`** (eliminando el subyacente de Planta 1 en `E-201`). En la plantilla `E_DOC_Acometida_Sotano` (o ajustando `E_DOC_Fuerza` en el caso de sótanos), bajar `View Depth` a **`-0,40 m`** (manteniendo `Bottom = 0,00 m` o `-0,40 m`) para hacer visibles las arquetas y canalizaciones enterradas a `-0,25 m`.
- **Resolución de `E-103` (Canalizaciones):** Asignar la plantilla `E_DOC_Canalizaciones` con `Discipline = Electrical` (o `Coordination` únicamente si se necesita ver líneas ocultas específicas, aplicando obligatoriamente en `VG -> RVT Links -> MEP_HidroClima.rvt -> Custom` la opción `Halftone` en categorías mecánicas/fontanería y en `ARQ_Valdeluz.rvt` el fondo arquitectónico en `Halftone`), elevando `Bottom = +2,60 m` y `Top = +3,70 m` para aislar el plénum técnico.
- **Saneamiento multiusuario:** Activar *Reveal Hidden Elements* en las vistas afectadas para *Unhide Elements* sobre el cuadro ocultado con `EH`, trasladar las vistas de modelado a la rama `W_TRAB_` sin asignar a láminas y auditar con *View List* que ninguna vista impresa quede con `View Template = <None>`.
- **Recordatorio normativo:** La correcta visibilidad de las salas de curas o del sótano en el plano BIM **no valida** el cumplimiento de requisitos especiales hospitalarios (como redes IT médicas, transformadores de aislamiento o tiempos de conmutación), que deben ser calculados y verificados conforme a la reglamentación vigente aplicable (p. ej. ITC-BT-38 del REBT en España u otra norma local aplicable).

#### Preguntas de reflexión final
- ¿Qué coste de obra o retraso habría supuesto entregar el plano `E-201` con el subyacente de la planta inferior activo o el plano `E-102` sin las luminarias del hall?
- ¿Qué regla interna implantarías desde el día 1 en tu estudio para impedir que un modelador cree un plano sin asignar su *View Template* correspondiente?

---

## 7. Evaluación

### Evaluación diagnóstica
- **Instrumento:** Actividad 1 (*Diagnóstico forense de 4 planos defectuosos*) mediante encuesta interactiva de 4 ítems al inicio de la sesión.
- **Propósito:** Identificar el dominio previo del alumnado respecto a *View Range*, *Underlay*, categorías MEP y conflictos de `RVT Links` sin ponderación en la nota final.

### Evaluación formativa
- **Observación directa y revisión continua** durante la Actividad 2 (construcción de las 4 View Templates en el modelo de laboratorio) y el desarrollo del caso *Clínica Valdeluz* (Actividad 3), comprobando en pantalla la ausencia de sobreescrituras manuales por elemento (`EH`), la asignación persistente de plantillas y la correcta configuración de los 4 planos de *View Range*.

### Evaluación sumativa
Consta de dos evidencias al cierre del tema:
1. **Prueba objetiva corta (6 preguntas situacionales y técnicas, 10 minutos, 30 % de la calificación):** Evalúa el comportamiento de *View Range* en Plantas vs. RCP, el uso de `Incluir` en View Templates, las implicaciones de `Electrical` vs. `Coordination` y los límites de responsabilidad entre visibilidad BIM y validación normativa.
2. **Entregable práctico del Caso Valdeluz + Batería de 4 View Templates (70 % de la calificación):** Archivo `.rvt` o paquete de capturas verificadas junto con la Matriz de Gobernanza de Plantillas y `View List` auditada, evaluados conforme a la rúbrica siguiente.

### Rúbrica de evaluación

| Criterio | Insuficiente | En desarrollo | Adecuado | Destacado |
|---|---|---|---|---|
| **1. Gobernanza mediante *View Templates*** | Modifica la visibilidad manualmente vista por vista o usa `Apply Template Properties` sin vincular la plantilla. | Crea plantillas pero deja desmarcadas casillas `Incluir` críticas (`VG`, `Underlay`, `View Range`), permitiendo desviaciones. | Crea y asigna las 4 plantillas (`Fuerza`, `Alumbrado`, `Canalizaciones`, `Acometidas`) con propiedades clave bloqueadas de forma coherente. | Estandariza además nomenclatura clara, separación estricta `W_TRAB_` vs. `D_PLANOS_` y verifica al 100 % la asignación mediante `View List`. |
| **2. Separación funcional de planos y vínculos RVT** | Mezcla tomacorrientes, luminarias y conductos HVAC al mismo peso gráfico haciendo ilegible el plano. | Separa las categorías eléctricas básicas pero deja vínculos `ARQ` o `MEP` sin medio tono (`Halftone`) o con elementos confusos. | Diferencia con claridad las 4 tipologías de plano y aplica jerarquía visual limpia sobre arquitectura y climatización vinculadas. | Optimiza además filtros de líneas de corte/ocultas y documenta criterios de lectura para instaladores sin pérdida de contexto espacial. |
| **3. Precisión en *View Range*, RCP y *Underlay*** | Pierde luminarias o arquetas por cotas incorrectas de `Top`/`Bottom`/`View Depth`, o deja `Underlay` activo en vistas de impresión. | Ajusta el rango general en plantas simples, pero falla en la doble altura (*Plan Region*) o en el planteamiento correcto de RCP. | Configura con exactitud *Floor Plans*, *RCP*, *View Depth* bajo solera y *Plan Regions*, manteniendo `Underlay = None` en láminas. | Justifica numéricamente cada cota de corte respecto a `NPT`, falsos techos y losa superior, previniendo falsos negativos en obra. |
| **4. Control de calidad, ética y límites técnicos** | Mantiene elementos ocultados manualmente (`EH`) o confunde planos limpios con validación eléctrica/fotométrica. | Detecta algunos errores en el caso práctico, pero omite pasos de auditoría o no explicita la separación frente al cálculo normativo. | Elimina ocultaciones manuales, aplica checklist QA de entrega y distingue claramente visibilidad BIM de cálculo eléctrico/DIALux. | Si usa IA para generar checklists/tablas, anonimiza completamente el proyecto, corrige imprecisiones de nomenclatura y documenta la verificación humana. |

### Actividad de autoevaluación
Al concluir la sesión, cada participante completa una breve lista de chequeo reflexiva en el campus:
1. *¿En cuántas vistas de mi último proyecto real en Revit modifiqué `VG` a mano o usé `EH` en vez de crear una View Template o filtro?*
2. *Si mañana otro compañero abre mis planos de alumbrado y canalizaciones de techo, ¿sabrá distinguir al instante qué pertenece a la plantilla y qué responde al View Range?*
3. *¿Qué hábito de control previo a PDF voy a incorporar desde esta semana para evitar errores de Underlay o rangos cortados?*

---

## 8. Materiales y recursos

### Guion estructurado de diapositivas (Slide 1 a Slide 8)

| Diapositiva | Título | Contenido clave y visual | Notas para el formador |
|---|---|---|---|
| **Slide 1** | Portada: Tema 1. Plantillas de visualización para diversos tipos de planos | Título, ubicación en Bloque 4 (Tema 1/8 · 22/50), objetivos de aprendizaje y aviso de alcance técnico/no-MBA. | Aclarar desde el inicio que la documentación BIM ordena el proyecto pero no sustituye cálculos eléctricos ni DIALux. |
| **Slide 2** | Activación: 4 planos «rotos» en obra | Cuatro capturas reales con fallos de visibilidad (luminarias desaparecidas, subyacente impreso, HVAC negro pleno, arquetas invisibles). | Conducir Actividad 1 con votación rápida antes de dar la explicación técnica. |
| **Slide 3** | *View Templates*: asignar frente a aplicar | Comparativa visual entre menú `Properties -> View Template` (bloqueo con `Include`) vs. sobreescrituras manuales `VV`/`EH`. | Insistir en el riesgo multiusuario del atajo `EH` (*Hide in View -> Element*). |
| **Slide 4** | Arquitectura de los 4 planos eléctricos base | Tabla visual de categorías activas/ocultas y tratamiento de vínculos `ARQ`/`MEP` para Fuerza, Alumbrado, Canalizaciones y Acometidas. | Subrayar que un único modelo 3D alimenta todas las vistas sin duplicar familias. |
| **Slide 5** | Anatomía del *View Range* en Floor Plan vs. RCP | Esquema en sección vertical mostrando `Top`, `Cut Plane`, `Bottom`, `View Depth`, ubicación de enchufes, luminarias y `Plan Region`. | Dibujar o señalar con claridad la dirección de mirada (abajo en planta, arriba en RCP). |
| **Slide 6** | La trampa del *Underlay* y la Disciplina `Electrical` vs. `Coordination` | Comparativa lado a lado de una misma planta con `Electrical` + `Underlay = None` frente a `Coordination` + `Underlay` olvidado. | Enfatizar el bloqueo obligatorio de `Underlay = None` en plantillas de entrega. |
| **Slide 7** | Gobernanza multiusuario: `W_TRAB_` vs. `D_PLANOS_` y auditoría *View List* | Diagrama del Navegador de Proyectos separado en vistas de trabajo y lámina + captura de tabla `View List` auditando plantillas. | Mostrar cómo se usa IA con datos anónimos para redactar el checklist QA y por qué se verifica en Revit. |
| **Slide 8** | Caso Valdeluz, síntesis y puente al Tema 2 | Resumen del caso práctico *Clínica Valdeluz*, criterios de evaluación y adelanto del Tema 2 (Clasificación de sistemas y parámetros). | Lanzar el cuestionario de salida y recordar entregar la batería de plantillas. |

### Ficha de trabajo del alumnado
Documento descargable (2 páginas) que contiene:
1. **Esquema en sección para anotar cotas de *View Range*** (espacios en blanco para rellenar `Top`, `Cut Plane`, `Bottom` y `View Depth` en Fuerza, Alumbrado RCP, Canalizaciones de techo y Sótano).
2. **Lista de verificación de categorías por tipo de plano** (`Electrical Equipment`, `Electrical Fixtures`, `Lighting Fixtures`, `Lighting Devices`, `Conduits`, `Cable Trays`, `Wires`, `RVT Links`).
3. **Espacio de notas de auditoría** para registrar los hallazgos de `View List` y `Reveal Hidden Elements`.

### Plantilla técnica práctica: Matriz de Gobernanza de Plantillas de Vista Eléctricas

*(Plantilla editable en hoja de cálculo o Markdown para adaptar al BEP de cada proyecto)*:

| Código de Plantilla | Tipo de Vista | Uso | Disciplina | Escala bloqueada | `Top` / `Cut` / `Bottom` / `View Depth` (orientativo) | `Underlay` | Categorías eléctricas visibles | Vínculos `ARQ` / `MEP` |
|---|---|---|---|---|---|---|---|---|
| `E_DOC_FUE_100` | Floor Plan | Plano de Fuerza / Tomacorrientes | `Electrical` | `Sí (1:100)` | `+2,30` / `+1,20` / `0,00` / `-0,10 m` | `None` (Bloq.) | `Elec. Fixtures`, `Elec. Equip.`, `Wires` | `ARQ`: Halftone · `MEP`: Off |
| `E_DOC_ALU_100` | RCP | Plano de Alumbrado | `Electrical` | `Sí (1:100)` | `+3,75` / `+2,30` / `+2,30` / `+3,75 m` | `None` (Bloq.) | `Light. Fixtures`, `Light. Devices`, `Elec. Equip.` | `ARQ` (Techos): Halftone · `MEP`: Off |
| `E_DOC_BAN_050` | Floor Plan / RCP | Canalizaciones / Bandejas techo | `Electrical` | `Sí (1:50)` | `+3,70` / `+3,00` / `+2,60` / `+2,60 m` | `None` (Bloq.) | `Cable Trays`, `Conduits`, `Elec. Equip.` | `ARQ`: Halftone · `MEP`: Halftone |
| `E_DOC_ACO_100` | Floor Plan | Acometidas y Puesta a Tierra | `Electrical` | `Sí (1:100)` | `+2,30` / `+1,20` / `0,00` / `-0,50 m` | `None` (Bloq.) | `Elec. Equip.`, `Conduits` troncales, `PAT` | `ARQ`: Halftone · `Estruc.`: Halftone |
| `E_TRAB_GEN` | Floor Plan / 3D | Vista de trabajo (no imprimir) | `Coordination` | `No` | Libre según necesidad | `Permitido` | Todas / según auditoría | Completo según necesidad |

### Lecturas y recursos recomendados
> **Advertencia de validación obligatoria:** Antes de utilizar o recomendar en clase manuales, guías externas, complementos o referencias normativas, el formador y el alumnado deben **validar la versión exacta de Revit MEP utilizada, los enlaces oficiales vigentes y la edición normativa aplicable en su país**.
- Documentación oficial de **Autodesk Revit — View Templates & View Range** (Ayuda oficial de Autodesk correspondiente a la versión instalada en el aula, p. ej., Revit 2023/2024/2025; *validar interfaz y menú exactos por versión*).
- Estándar internacional **ISO 19650 (Partes 1 y 2)** sobre gestión y nomenclatura de contenedores de información en entornos BIM *(ejemplo de referencia organizativa; validar su aplicación según requisitos del cliente o licitación)*.
- **Reglamento Electrotécnico para Baja Tensión (REBT — España, RD 842/2002)** o reglamento equivalente en la jurisdicción del proyecto *(únicamente como marco de verificación técnica independiente para distinguir representación gráfica de requisitos de seguridad)*.
- Vídeos demostrativos técnicos sobre configuración de *View Range* en MEP y gestión de `RVT Links` en canales oficiales de formación BIM acreditada *(validar enlace, audio y compatibilidad con la versión actual de Revit antes de compartir)*.

### Glosario de términos clave

| Término | Definición |
|---|---|
| **Plantilla de vista (*View Template*)** | Configuración centralizada de parámetros gráficos y de vista en Revit que se asigna de forma persistente a múltiples vistas para asegurar homogeneidad y control multiusuario. |
| **Rango de vista (*View Range*)** | Conjunto de cuatro planos horizontales (`Top`, `Cut Plane`, `Bottom` y `View Depth`) que acotan verticalmente qué elementos del modelo 3D se cortan o proyectan en una vista en planta o RCP. |
| **Plano de techo reflejado (*RCP*)** | Tipo de vista en planta orientada hacia arriba desde el plano de corte, empleada en instalaciones eléctricas para documentar luminarias, falsos techos y canalizaciones aéreas. |
| **Subyacente (*Underlay*)** | Referencia temporal en gris de otro nivel superior o inferior utilizada para alinear elementos durante el modelado; debe mantenerse desactivada (`None`) en plantillas de documentación. |
| **Región de plano (*Plan Region*)** | Contorno cerrado dentro de una vista en planta que aplica un *View Range* local independiente para resolver zonas con cambio de cota, como dobles alturas o altillos. |
| **Medio tono (*Halftone*)** | Ajuste gráfico que atenúa el contraste de categorías secundarias o modelos vinculados (arquitectura, estructura o climatización) para resaltar la instalación eléctrica. |
| **Disciplina de vista (*View Discipline*)** | Propiedad de vista (`Electrical`, `Coordination`, etc.) que regula cómo Revit gestiona líneas ocultas, atenuación automática del fondo y jerarquía visual entre especialidades. |
| **Lista de vistas (*View List*)** | Tabla de planificación nativa de Revit que recopila los parámetros de todas las vistas del proyecto para auditar la asignación de plantillas, escalas y subyacentes antes de imprimir. |

---

## 9. Adaptaciones

### Sesión presencial
- Proyectar en pantalla grande las 4 capturas de la Actividad 1 y entregar tarjetas o fichas impresas para el diagnóstico rápido por parejas antes de abrir Revit en los ordenadores del aula.
- Realizar las demostraciones en vivo con proyector doble (en uno el modelo 3D / sección mostrando físicamente dónde quedan los planos `Top`/`Cut`/`Bottom`, y en otro la vista en planta resultante).
- Circular físicamente por los puestos durante la Actividad 2 y el Caso Valdeluz, revisando directamente las pantallas para interceptar usos ocultos de `EH` o sobreescrituras `VG` locales.

### Sesión online síncrona
- Sustituir la puesta en común oral de la Actividad 1 por una encuesta interactiva inmediata (Slido/Mentimeter/Zoom Polls) seguida de análisis en plenario de los fallos más votados.
- Utilizar el modo compartir pantalla guiado en bloques cortos de 15–20 minutos alternando con trabajo autónomo y salas pequeñas (*breakout rooms*) de 3–4 personas para el Caso Valdeluz.
- Solicitar al alumnado compartir pantalla de su `View List` y propiedades de plantilla durante la fase de contraste técnico (Fase 6) para corregir errores reales en directo.

### Sesión asíncrona
- Fragmentar la explicación en 4 píldoras grabadas de 10–12 minutos (una por cada subapartado `3.1` a `3.4`) acompañadas de un test breve de comprobación automática tras cada píldora.
- Entregar el archivo `.rvt` del laboratorio y del caso *Clínica Valdeluz* junto con un guion paso a paso y un archivo solución de contraste (`Solucion_Referencia_Bloque4_T1.rvt`) que el alumno descargará únicamente tras subir su propio entregable.
- Habilitar un foro técnico estructurado donde cada estudiante sube su Matriz de Plantillas de Vista y comenta críticamente la propuesta de *View Range* de al menos un compañero dentro de las 72 horas siguientes.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Retoma el modelado tridimensional de aparatos eléctricos, luminarias, tubos, uniones y accesorios trabajado en el **Bloque 3 (Modelado 3D – Revit MEP eléctricas)** y lo transforma de geometría 3D pura en vistas técnicas preparadas para documentación profesional.
- **Competencias que desarrolla:** Gobernanza gráfica BIM en entornos multiusuario, configuración precisa de visibilidad por especialidad eléctrica, control de rangos de corte y vínculos multidisciplinares, auditoría de calidad mediante tablas de vistas y criterio de uso seguro de IA para documentación técnica.
- **Conexión dentro del programa (6 módulos / 50 temas):**
  - **Tema anterior:** Conecta directamente con el **Tema 5 del Bloque 3: Accesorios de tubos** (Tema 21 de 50, cierre del Bloque 3), donde se completó el modelado físico de canalizaciones y accesorios que ahora deben filtrarse y representarse selectivamente en planos.
  - **Tema posterior:** Prepara la base visual sobre la que se apoyará el **Tema 2 del Bloque 4: Clasificación de sistemas: tomacorrientes, alumbrado y modelado 3D de tubos** (Tema 23 de 50), donde el alumnado aprenderá a estructurar parámetros compartidos, filtros de color por sistema y organización del Navegador de Proyectos que alimentan a estas mismas plantillas de vista.
- **Evidencia de aprendizaje:**
  1. Archivo Revit `.rvt` de práctica con las **4 plantillas de vista eléctricas** (`Fuerza`, `Alumbrado RCP`, `Canalizaciones`, `Acometidas`) asignadas correctamente y una `View List` auditada.
  2. **Matriz de Gobernanza de Plantillas de Vista** del caso *Clínica Valdeluz* completada y validada.
  3. Cuestionario sumativo breve de cierre y ficha de autoevaluación registrados en la plataforma.

---

## Siguientes pasos para el formador

1. **Verificar los archivos de práctica 48 horas antes:** Comprobar que `Modelo_Base_Bloque4_T1.rvt` y sus vínculos (`ARQ` y `MEP`) abren limpiamente en la versión de Revit MEP instalada en el aula/alumnado y revisar las rutas relativas de los vínculos.
2. **Preparar las 4 capturas de la Actividad 1:** Confirmar que todas las capturas proyectadas están completamente anonimizadas (sin logos de clientes ni carátulas reales).
3. **Validar recursos externos:** Revisar enlaces a la ayuda oficial de Autodesk Revit y verificar que cualquier referencia de normativa mencionada lleva explícita la indicación de país y edición vigente.
4. **Probar el flujo de *View List*:** Tener preparada una vista previa de la tabla de auditoría para mostrar en 2 minutos cómo detectar vistas `<None>` o con `Underlay` activo antes de imprimir.
5. **Conectar con el Tema 2:** Al finalizar la sesión, anticipar al alumnado que en la próxima clase resolverán un reto clave complementario: cómo distinguir gráficamente tubos de alumbrado normal, alumbrado de emergencia y fuerza cuando Revit MEP no asigna sistemas nativos automáticos a los conductos rígidos.
