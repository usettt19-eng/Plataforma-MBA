window.ASSESSMENTS_IAEL = {
  passingScore: 70,
  blocks: {
    b01: {
      examTitle: "Examen Técnico — Bloque 1: Instalaciones Eléctricas y Cálculo",
      workshop: {
        title: "Taller Práctico 1: Calculadora de Carga Eléctrica, Corriente Ib y Caída de Tensión ΔV",
        subtitle: "Dimensiona una línea monofásica o trifásica comprobando potencia demandada, intensidad de diseño (Ib) y caída de tensión orientativa en cobre.",
        calculator: "electric_load_drop"
      },
      questions: [
        {
          q: "En un cuadro trifásico equilibrado de 400 V entre fases con una potencia demandada de 24 kW y factor de potencia cos φ = 0,85, ¿por qué dividir simplemente 24 000 W entre 400 V infraestimaría o distorsionaría la corriente de diseño Ib?",
          options: [
            "Porque en sistemas trifásicos debe aplicarse el factor √3 además del factor de potencia (Ib = P / (√3 · V_L · cos φ)), resultando aproximadamente 40,8 A por fase.",
            "Porque en trifásica siempre se multiplica la tensión por 2 independientemente de cos φ.",
            "Porque la potencia activa en kW coincide exactamente con la corriente en amperios.",
            "Porque los circuitos trifásicos no presentan caída de tensión ni reactancia."
          ],
          correct: 0,
          explanation: "En trifásica equilibrada P = √3 · V_L · I · cos φ. Usar fórmulas monofásicas o ignorar cos φ produce errores graves al seleccionar calibres de protección y secciones de conductor."
        },
        {
          q: "Al identificar la normativa aplicable para proyectar una clínica privada en un país determinado, un asistente de IA sugiere aplicar automáticamente coeficientes de otro país que recuerda de su entrenamiento. ¿Qué debe hacer el técnico responsable?",
          options: [
            "Aceptar la propuesta si el formato del texto parece profesional.",
            "Verificar obligatoriamente la jurisdicción, reglamento vigente, edición aplicable y criterios de la autoridad competente del país de la obra antes de calcular.",
            "Promediar valores de dos normas distintas para mayor seguridad.",
            "Omitir cualquier referencia normativa en la memoria de cálculo."
          ],
          correct: 1,
          explanation: "Cada país y tipología de local (sanitario, pública concurrencia, industrial) tiene reglamentos y ediciones obligatorias específicas que la IA no puede validar por sí sola."
        },
        {
          q: "Un circuito alimentador largo cumple holgadamente por intensidad máxima admisible (ampacidad) con un conductor de 6 mm², pero el cálculo muestra una caída de tensión del 4,8 % frente a un límite máximo fijado de 3 %. ¿Qué decisión técnica corresponde?",
          options: [
            "Mantener 6 mm² porque la ampacidad térmica es suficiente.",
            "Aumentar la sección comercial del conductor (verificando también el poder de corte y disparo magnético en el extremo de la línea) hasta cumplir simultáneamente ambos criterios.",
            "Cambiar el interruptor diferencial por uno de mayor sensibilidad.",
            "Reducir artificialmente el factor de potencia en el cuadro."
          ],
          correct: 1,
          explanation: "El dimensionamiento correcto exige cumplir al mismo tiempo ampacidad (corregida por agrupamiento/temperatura), caída de tensión máxima y verificación térmica/disparo en cortocircuito."
        },
        {
          q: "Respecto al cálculo teórico de resistencia de puesta a tierra (R_PAT) frente a su verificación en obra, ¿cuál es la práctica profesional correcta?",
          options: [
            "Si el cálculo teórico con una fórmula de manual da < 5 Ω, ya no hace falta medir en terreno.",
            "Estimar en diseño usando resistividad medida en capas (p. ej. método Wenner) y comprobar obligatoriamente tras la ejecución mediante medición directa en campo con telurómetro calibrado.",
            "Calcular solo con el valor de humedad atmosférica del proyecto.",
            "Sustituir la medición física por una captura del modelo 3D en Revit."
          ],
          correct: 1,
          explanation: "La heterogeneidad del subsuelo y la ejecución real obligan a distinguir claramente entre estimación teórica de diseño y comprobación instrumental mediante telurómetro."
        },
        {
          q: "¿Qué condición es imprescindible entre el diagrama unifilar, el cuadro de cargas y los planos de planta de un proyecto eléctrico?",
          options: [
            "Solo deben coincidir los colores de las capas CAD.",
            "Coherencia estricta uno a uno en identificación de tableros, circuitos, calibres, poderes de corte, secciones, puesta a tierra y reservas.",
            "El unifilar solo incluye acometida y omite circuitos derivados.",
            "Basta con que el cuadro de cargas sume igual que la factura eléctrica estimada."
          ],
          correct: 1,
          explanation: "Cualquier discrepancia entre unifilar, cuadro de cargas y planos genera errores de montaje en obra y rechazos en revisión técnica o inspección."
        }
      ]
    },
    b02: {
      examTitle: "Examen Técnico — Bloque 2: Iluminación y Modelado en DIALux",
      workshop: {
        title: "Taller Práctico 2: Calculadora Preliminar de Iluminación (Método de los Lúmenes + VEEI)",
        subtitle: "Estima el número mínimo de luminarias y la eficiencia energética orientativa de un espacio antes de simular la distribución exacta y UGR en DIALux.",
        calculator: "lighting_lumen"
      },
      questions: [
        {
          q: "Al importar un plano arquitectónico DWG en DIALux, observas que una oficina de 10 m × 8 m aparece midiendo 10 000 m × 8 000 m. ¿Qué consecuencias tendría continuar sin corregir la escala y unidad?",
          options: [
            "Ninguna, porque DIALux reescala automáticamente las luminarias al renderizar.",
            "Invalidaría por completo las alturas de montaje, distancia entre luminarias, niveles de lux calculados y consumo energético.",
            "Solo cambiaría el grosor visual de las paredes en planta.",
            "Afectaría únicamente al color de las texturas del suelo."
          ],
          correct: 1,
          explanation: "La iluminancia sigue leyes geométricas de distancia al cuadrado y sólidos fotométricos reales; importar planos sin verificar unidades (mm/cm/m) destruye la validez del cálculo."
        },
        {
          q: "¿Por qué definir una pared de oficina oscura (reflectancia ρ = 15 %) frente a una pared clara estándar (ρ = 50 %–60 %) altera los resultados lumínicos en DIALux aunque no cambies la luminaria?",
          options: [
            "Porque las paredes oscuras reducen la componente reflejada indirecta de la luz, disminuyendo la iluminancia media y pudiendo empeorar uniformidad y deslumbramiento.",
            "Porque la reflectancia modifica la potencia eléctrica absorbida por el driver LED.",
            "Porque DIALux solo asigna reflectancias en exteriores.",
            "Solo afecta si se exporta después a Twinmotion."
          ],
          correct: 0,
          explanation: "En recintos cerrados, las interreflexiones en techo, paredes y suelo aportan una fracción sustancial de la iluminancia sobre el plano útil y condicionan el contraste visual."
        },
        {
          q: "¿Qué aportan los archivos fotométricos reales Eulumdat (.ldt) o IES (.ies) del fabricante frente a fuentes de luz genéricas?",
          options: [
            "Garantizan el cumplimiento automático de la instalación contra cortocircuitos.",
            "Contienen la distribución tridimensional real de intensidades luminosas (cd/klm), flujo real de luminaria, geometría emisora y potencia para simular Em, U0 y UGR con rigor.",
            "Sirven exclusivamente para texturizar conductos en Revit MEP.",
            "Incluyen la memoria descriptiva legal firmada del edificio."
          ],
          correct: 1,
          explanation: "Los ficheros .ldt y .ies describen el sólido fotométrico medido en laboratorio de la luminaria real; sin ellos una simulación carece de valor técnico."
        },
        {
          q: "En un estudio interior de puestos con pantallas en DIALux obtienes Em = 520 lux y uniformidad U0 = 0,68, pero el índice UGR resulta 24 frente a un umbral objetivo orientativo de 19. ¿Cómo debes interpretar el resultado?",
          options: [
            "Aprobar la solución porque la iluminancia media supera los 500 lux.",
            "Rechazar o revisar la solución seleccionando ópticas de menor deslumbramiento, reubicando luminarias o ajustando orientación respecto al observador.",
            "Bajar el factor de mantenimiento a 0,40 para ocultarlo.",
            "Aumentar la temperatura de color a 6500 K manteniendo la misma óptica."
          ],
          correct: 1,
          explanation: "Cumplir lux no basta si existe deslumbramiento molesto (UGR elevado). Hay que satisfacer simultáneamente todos los criterios fotométricos del uso previsto."
        },
        {
          q: "Una vez aprobado el cálculo lumínico en DIALux, ¿significa que la instalación eléctrica de alumbrado ya está reglamentariamente dimensionada?",
          options: [
            "Sí, porque DIALux calcula la sección de cable y la selectividad de los interruptores automáticos.",
            "No: el estudio lumínico valida prestaciones fotométricas (lux, U0, UGR, VEEI), mientras que el cálculo de circuitos, protecciones, caída de tensión y puesta a tierra pertenece al proyecto eléctrico.",
            "Sí, siempre que las luminarias usen archivos .ies.",
            "Solo falta generar un panorama 360° en Twinmotion."
          ],
          correct: 1,
          explanation: "Diferenciar cálculo fotométrico de dimensionamiento y cumplimiento eléctrico es una regla esencial de seguridad profesional."
        }
      ]
    },
    b03: {
      examTitle: "Examen Técnico — Bloque 3: Modelado 3D BIM en Revit MEP Eléctricas",
      workshop: {
        title: "Taller Práctico 3: Protocolo de Modelado 3D y Coordinación MEP en Revit",
        subtitle: "Define el estándar de vinculación, familias, enrutamiento de canalizaciones y accesorios para entregar un modelo eléctrico sin colisiones críticas.",
        fields: [
          { id: "vinculos", label: "Coordinación inicial: ¿cómo vinculas Arquitectura/Estructura y qué verificas en niveles y coordenadas?", type: "textarea", placeholder: "Origen a origen compartido, copiar/supervisar niveles, configurar tensiones y sistemas..." },
          { id: "familias", label: "Clasificación de equipos y aparatos eléctricos (tableros, luminarias anfitrión/cara, tomas y componentes 2D)", type: "textarea", placeholder: "Luminarias basadas en plano/cara del falso techo vinculable; tableros MDP con parámetros de carga..." },
          { id: "rutas", label: "Criterio de alturas y enrutamiento de tubos para alumbrado, tomacorrientes y acometidas (evitando HVAC y vigas)", type: "textarea", placeholder: "Bandeja alimentadores +3,05 m; derivados alumbrado +2,85 m sobre falso techo; bajar por tabiques a +0,30 m..." },
          { id: "accesorios", label: "Uniones, cajas de paso, conduletas (LB/LR) y accesorios clave para mediciones y clash detection", type: "textarea", placeholder: "Preferencias de enrutamiento con radios de curvatura reales, soportes cada 1,5 m y cajas registrables..." }
        ]
      },
      questions: [
        {
          q: "Al iniciar un modelo eléctrico en Revit MEP sobre un proyecto multidisciplinar que ya cuenta con modelos de Arquitectura y Estructura, ¿qué paso garantiza una coordinación espacial sin desfases?",
          options: [
            "Modelar sin vincular la arquitectura para trabajar más rápido.",
            "Vincular los modelos mediante coordenadas compartidas (u origen común acordado en el BEP) y supervisar niveles/rejillas antes de colocar aparatos y canalizaciones.",
            "Dibujar líneas de detalle 2D encima de una imagen JPG.",
            "Colocar todas las luminarias en cota 0,00 m."
          ],
          correct: 1,
          explanation: "La coordinación BIM real exige compartir sistema de coordenadas y niveles supervisados para detectar interferencias reales entre disciplinas."
        },
        {
          q: "¿Qué ventaja operativa ofrecen las preferencias de enrutamiento (*Routing Preferences*) correctamente configuradas al modelar tubos (*conduits*)?",
          options: [
            "Permiten insertar automáticamente los accesorios y uniones compatibles (codos, tes, acoples) al trazar tramos 3D continuos y obtener cuantificaciones coherentes.",
            "Calculan automáticamente la resistencia de puesta a tierra del terreno.",
            "Generan la firma legal del ingeniero proyectista.",
            "Eliminan la necesidad de dejar pasos bajo vigas estructurales."
          ],
          correct: 0,
          explanation: "Configurar las preferencias de enrutamiento ahorra tiempo, previene errores de continuidad («No auto-route solution») y mejora la medición de materiales."
        },
        {
          q: "¿Por qué conviene diferenciar explícitamente los sistemas y tipos de tubo para acometidas principales, tomacorrientes y alumbrado durante el modelado 3D?",
          options: [
            "Únicamente para cambiar la textura en el render final.",
            "Para controlar filtros de vista, mantener separación reglamentaria respecto a otros servicios, generar planos independientes y extraer mediciones filtradas por sistema.",
            "Porque Revit impide modelar más de 10 m si no se cambia el nombre.",
            "Para reducir automáticamente la caída de tensión del cobre."
          ],
          correct: 1,
          explanation: "La clasificación limpia de sistemas habilita automatización de plantillas de vista, filtros gráficos, coordinación constructiva y tablas de cantidades precisas."
        },
        {
          q: "Al modelar tubos eléctricos rígidos con giros bruscos o radios imposibles de curvar en obra, Revit puede arrojar «No auto-route solution» o generar piezas no fabricables. ¿Cómo debe actuarse?",
          options: [
            "Desconectar los tramos dejándolos flotando visualmente en 3D.",
            "Respetar ángulos normalizados, radios mínimos de curvatura e insertar cajas de paso / conduletas (LB, LR, LL, T) accesibles para el cableado.",
            "Ocultar el aviso de error sin revisar la intersección.",
            "Cambiar la disciplina de Vista a Arquitectura."
          ],
          correct: 1,
          explanation: "Un modelo MEP construible incorpora conduletas, cajas de registro y radios ejecutables para permitir el tendido y mantenimiento real de conductores."
        },
        {
          q: "Tu modelo eléctrico en Revit MEP no presenta colisiones en Navisworks/Revit y todas las familias están en 3D con uniones correctas. ¿Garantiza eso cumplimiento técnico eléctrico?",
          options: [
            "Sí, un modelo BIM sin colisiones implica automáticamente cumplimiento normativo completo.",
            "No: un modelo geométricamente completo y coordinado no valida por sí solo ampacidades, cortocircuitos, protecciones ni reglamentación vigente.",
            "Sí, siempre que los tubos tengan nivel de detalle Alto.",
            "Solo si las familias fueron descargadas de Internet."
          ],
          correct: 1,
          explanation: "Nunca debe confundirse completitud geométrica BIM con validación eléctrica profesional."
        }
      ]
    },
    b04: {
      examTitle: "Examen Técnico — Bloque 4: Documentación BIM y Entrega PDF",
      workshop: {
        title: "Taller Práctico 4: Matriz de Planos, Plantillas de Vista y Control QA de Entrega PDF",
        subtitle: "Estructura la arquitectura documental del proyecto en Revit (plantas por sistema, detalles, especificaciones y validación previa a emisión).",
        fields: [
          { id: "plantillas", label: "Plantillas de vista (*View Templates*) definidas (p. ej. E-ALUMBRADO, E-TOMAS, E-ACOMETIDAS) y parámetros clave bloqueados", type: "textarea", placeholder: "Rango de vista techo reflejado para alumbrado; disciplina Eléctrica; filtro por sistema de emergencia..." },
          { id: "escalas_etq", label: "Estrategia de escalas (1:100 / 1:50 / 1:20 cuartos técnicos), niveles de detalle y etiquetas paramétricas", type: "textarea", placeholder: "1:50 plantas nivel medio con símbolos; 1:20 detalles nivel alto doble línea..." },
          { id: "especif", label: "Conciliación entre tablas de planificación (*schedules*), especificaciones técnicas y cuadro de cargas / unifilar", type: "textarea", placeholder: "Verificación cruzada de IDs de tablero, longitud estimada, calibres y notas clave sin marcas arbitrarias..." },
          { id: "qa_pdf", label: "Lista de control antes de imprimir a PDF (vectorial vs. ráster, grosores de línea, cartela, revisiones)", type: "textarea", placeholder: "Procesamiento vectorial 100 %, sin solape de textos, leyendas completas y firma/fecha de revisión..." }
        ]
      },
      questions: [
        {
          q: "En una oficina técnica BIM trabajan tres proyectistas sobre un mismo edificio y cada plano de alumbrado sale con grosores, símbolos y colores distintos. ¿Qué herramienta de Revit resuelve este problema de raíz?",
          options: [
            "Pintar manualmente las líneas con regiones rellenas sobre cada lámina.",
            "Crear y asignar Plantillas de Vista (*View Templates*) estandarizadas por tipo de plano (Alumbrado, Tomacorrientes, Acometidas/Montantes).",
            "Exportar las vistas a JPG y editarlas en un editor de imágenes.",
            "Ocultar todos los filtros de visualización."
          ],
          correct: 1,
          explanation: "Las Plantillas de Vista bloquean visibilidad, rango de vista, escala, nivel de detalle y filtros de forma repetible y auditable."
        },
        {
          q: "¿Cuál es el riesgo crítico de usar «textos muertos» escritos manualmente junto a equipos y circuitos en lugar de etiquetas paramétricas enlazadas al modelo?",
          options: [
            "Ninguno, porque los textos muertos ocupan menos memoria.",
            "Si cambian el nombre del tablero, cota, potencia o identificación del circuito en el modelo o cuadro de cargas, las anotaciones quedan desactualizadas y contradictorias en obra.",
            "Impiden imprimir el plano en formato PDF.",
            "Obligan a volver a calcular el proyecto en DIALux."
          ],
          correct: 1,
          explanation: "En BIM la fuente única de verdad son los parámetros del modelo: etiquetar parámetros vivos elimina incoherencias tras revisiones."
        },
        {
          q: "¿Por qué en planos generales 1:100 suele emplearse nivel de detalle Bajo o Medio (representación simbólica) mientras que en detalles de cuarto eléctrico 1:20 se usa nivel Alto?",
          options: [
            "Para equilibrar legibilidad gráfica y densidad de lectura en obra: 1:100 prioriza símbolos claros y 1:20 exige geometría real 3D, envolventes y distancias de mantenimiento.",
            "Porque en 1:20 desaparecen las cotas.",
            "Porque Revit prohíbe mostrar tubos en 1:50.",
            "Solo por motivos estéticos sin impacto en interpretación."
          ],
          correct: 0,
          explanation: "Cada escala responde a una finalidad constructiva distinta; mezclar nivel Alto en escalas pequeñas empasta los planos y oculta información clave."
        },
        {
          q: "Al configurar reglas de filtros de visualización en planos eléctricos, ¿qué caso de uso aporta mayor valor de seguridad y control?",
          options: [
            "Colorear aleatoriamente cada habitación.",
            "Resaltar automáticamente circuitos de alumbrado de emergencia, alimentación crítica (SAI) o circuitos sin asignar a tablero antes de emitir documentación.",
            "Cambiar el tamaño de la cartela automáticamente según el día.",
            "Eliminar las dimensiones de replanteo."
          ],
          correct: 1,
          explanation: "Los filtros basados en reglas convierten la gráfica del plano en un control visual inmediato de seguridad y completitud del proyecto."
        },
        {
          q: "Al exportar un juego de planos eléctricos a PDF, notas que los textos de etiquetas salen pixelados y las líneas se engrosan sin nitidez al hacer zoom. ¿Qué parámetro conviene revisar primero?",
          options: [
            "El modo de impresión: asegurar procesamiento vectorial (salvo vistas con sombras/transparencia complejas que fuercen ráster) y verificar escala de impresión al 100 % sin ajustar a página.",
            "El tipo de letra de la ficha de cálculo de puesta a tierra.",
            "La resolución de pantalla del monitor del proyector.",
            "La versión de Twinmotion instalada."
          ],
          correct: 0,
          explanation: "El procesamiento vectorial mantiene líneas y cotas nítidas a cualquier zoom, y la escala 100 % preserva mediciones fiables en plano."
        }
      ]
    },
    b05: {
      examTitle: "Examen Técnico — Bloque 5: Visualización y Renderizado con Twinmotion",
      workshop: {
        title: "Taller Práctico 5: Flujo Direct Link Revit–Twinmotion y Guion de Presentación 360°",
        subtitle: "Planifica la sincronización del modelo eléctrico MEP, materiales PBR, temperaturas Kelvin coherentes y entregables visuales sin confundir estética con cálculo.",
        fields: [
          { id: "direct_link", label: "Preparación de vista 3D Revit + configuración de Datasmith Direct Link (agrupación y qué ocurre al re-sincronizar)", type: "textarea", placeholder: "Vista 3D depurada sin capas ocultas innecesarias; agrupación por material o jerarquía según detalle..." },
          { id: "dialux_bridge", label: "Transferencia realista desde DIALux hacia Twinmotion (archivo .ies / geometría vs. límites de cálculo)", type: "textarea", placeholder: "Asignar ficheros .ies del fabricante en puntos de luz colocados según modelo Revit; no importar esperando lux exactos..." },
          { id: "materiales_luz", label: "Materiales PBR de elementos eléctricos y temperaturas de color (Kelvin) por zona (p. ej. 3000K vs 4000K)", type: "textarea", placeholder: "Bandejas galvanizadas metálicas, tableros gris RAL, luces 4000K en zona operativa y 3000K en recepción..." },
          { id: "entregables", label: "Paquete de presentación (stills 4K, vídeo MP4, panorama 360°) y nota obligatoria junto a planos PDF", type: "textarea", placeholder: "Recorrido cuarto eléctrico + vista plénum transparente; nota visible: material visual complementario, no válido para obra..." }
        ]
      },
      questions: [
        {
          q: "¿Qué permite realmente la sincronización mediante Direct Link (Datasmith) entre Revit MEP y Twinmotion cuando cambia el trazado de una bandeja o luminaria?",
          options: [
            "Recalcula automáticamente la caída de tensión y la sección de cobre en Revit.",
            "Actualiza en Twinmotion la geometría modificada desde Revit conservando en lo posible los materiales, cámaras y ambientación asignados sin rehacer toda la escena.",
            "Genera automáticamente los planos PDF acotados y firmados.",
            "Importa las memorias de cálculo de puesta a tierra dentro de los shaders PBR."
          ],
          correct: 1,
          explanation: "Direct Link mantiene vivo el vínculo geométrico entre diseño BIM y visualización para agilizar iteraciones con arquitectura y cliente."
        },
        {
          q: "Sobre «luminarias importadas desde DIALux» hacia Twinmotion, ¿cuál es la postura técnica honesta y realista?",
          options: [
            "Ambos programas comparten un enlace en tiempo real que transfiere automáticamente la malla UGR y los cálculos normativos exactos.",
            "No existe una transferencia automática universal lista para usar de resultados lumínicos: se coordina la posición/geometría (p. ej. Revit o exportación compatible con límites por versión) y se cargan archivos .ies en luces de Twinmotion para fidelidad visual aproximada.",
            "Twinmotion certifica automáticamente la UNE-EN 12464-1.",
            "Solo hace falta cambiar la textura de las paredes en DIALux."
          ],
          correct: 1,
          explanation: "Ser transparente con los límites reales de interoperabilidad evita promesas falsas y garantiza flujos reproducibles (.ies + posición BIM)."
        },
        {
          q: "En un render interior de Twinmotion la sala se ve perfectamente clara e iluminada tras subir la exposición automática de cámara, aunque el proyecto solo tiene dos puntos de luz insuficientes en DIALux. ¿Qué conclusión es correcta?",
          options: [
            "La sala cumple normativa porque en el vídeo MP4 se ve brillante y sin sombras.",
            "La exposición de cámara y tonemapping pueden compensar visualmente poca luz; la validez cuantitativa (Em, U0, UGR) depende exclusivamente del cálculo fotométrico en DIALux.",
            "Hay que bajar el factor de potencia del tablero.",
            "Twinmotion tiene prioridad reglamentaria sobre el cálculo lumínico."
          ],
          correct: 1,
          explanation: "Un render fotorrealista es una herramienta de comunicación visual, nunca un instrumento de medición fotométrica ni eléctrica."
        },
        {
          q: "Al configurar propiedades físicas de materiales (PBR) en Twinmotion para tableros eléctricos, conductos EMT galvanizados y difusores LED, ¿qué ajuste logra un acabado creíble?",
          options: [
            "Poner metalicidad al 100 % en paredes de yeso mate.",
            "Ajustar metalicidad alta y rugosidad moderada en acero galvanizado, tono mate sin brillo plástico en envolventes pintadas y material emisivo controlado en difusores sin quemar blancos.",
            "Usar la misma textura emissive en todos los cables para simular tensión.",
            "Eliminar toda luz artificial para usar únicamente sol de mediodía en sótano cerrado."
          ],
          correct: 1,
          explanation: "El equilibrio correcto entre metalicidad (*metalness*), rugosidad (*roughness*) y emisión evita escenas artificiales o sobreexpuestas."
        },
        {
          q: "¿Cómo debe entregarse profesionalmente una presentación visual o panorama 360° generada en Twinmotion ante un cliente o comité de obra?",
          options: [
            "En reemplazo total de los planos de planta, unifilares y especificaciones.",
            "Como complemento visual de los planos PDF, unifilar y memoria de cálculo, dejando constancia expresa de que la ejecución en obra se rige por la documentación técnica validada.",
            "Sin indicar qué luminarias ni temperaturas de color corresponden al proyecto real.",
            "Eliminando la visualización de cuartos técnicos y bandejas."
          ],
          correct: 1,
          explanation: "El material visual alinea expectativas con la propiedad sin sustituir nunca los documentos técnicos contractuales ni las comprobaciones reglamentarias."
        }
      ]
    },
    b06: {
      examTitle: "Examen Técnico — Bloque 6: IA Aplicada a Instalaciones Eléctricas y BIM",
      workshop: {
        title: "Taller Práctico 6: Dossier de Prompts Especializados y Trazabilidad de Revisión Humana",
        subtitle: "Diseña prompts reutilizables para memorias, revisión de tablas Revit/DIALux y listas de coherencia, documentando errores detectados y validación técnica final.",
        fields: [
          { id: "prompt_struct", label: "Prompt especializado (Rol + Jurisdicción a verificar + Entradas SI + Restricciones de no invención + Formato salida)", type: "textarea", placeholder: "Actúa como ingeniero revisor BIM. Jurisdicción: [País/Reglamento a verificar]... No inventes artículos..." },
          { id: "seguridad", label: "Protocolo de anonimización y protección de datos aplicado antes de consultar ChatGPT o Claude", type: "textarea", placeholder: "Eliminar razón social del cliente, coordenadas exactas, planos completos confidenciales; enviar tablas CSV anónimas..." },
          { id: "control_calc", label: "Error típico detectado al pedir cálculos o normativa a la IA y cómo se comprobó independientemente", type: "textarea", placeholder: "IA aplicó fórmula monofásica en tablero 400V o citó artículo de otro país -> corregido en hoja de cálculo..." },
          { id: "cierre_integrado", label: "Auditoría cruzada final del proyecto (Unifilar ↔ Cuadro cargas ↔ DIALux ↔ Revit MEP ↔ PDF ↔ Validación humana)", type: "textarea", placeholder: "Checklist verificada: 100 % coincidencia IDs tableros MDP/SD1, notas en PDF, dossier con firma técnica pendiente..." }
        ]
      },
      questions: [
        {
          q: "Necesitas usar Claude o ChatGPT para revisar inconsistencias en una tabla de circuitos exportada desde Revit MEP de un proyecto hospitalario confidencial bajo acuerdo NDA. ¿Cuál es la primera obligación antes de copiar datos?",
          options: [
            "Subir el archivo RVT completo y todos los planos PDF con datos del cliente para darle mejor contexto.",
            "Anonimizar estrictamente nombres de cliente, proyecto, direcciones e información sensible (o evitar herramientas externas no autorizadas), enviando únicamente datos técnicos genéricos autorizados.",
            "Pegar únicamente la contraseña del servidor BIM.",
            "Pedir a la IA que prometa no recordar los datos."
          ],
          correct: 1,
          explanation: "La confidencialidad contractual y protección de datos exigen no exponer planos ni datos sensibles en asistentes externos sin autorización expresa y anonimización."
        },
        {
          q: "Pides a un LLM que genere una memoria descriptiva rápida y en el borrador cita un supuesto artículo exacto de reglamento eléctrico y una caída de tensión del 1,8 % calculada mentalmente. ¿Cómo debe proceder el técnico?",
          options: [
            "Insertar el texto directamente en el pliego porque la IA redacta con seguridad.",
            "Tratarlo como borrador no validado: comprobar en el texto reglamentario vigente del país si ese artículo existe y recalcular todas las fórmulas en hoja o software técnico independiente.",
            "Pedirle al mismo chat que jure que el cálculo es exacto.",
            "Redondear los resultados al alza un 10 % sin revisar las unidades."
          ],
          correct: 1,
          explanation: "Los modelos de lenguaje pueden inventar citas normativas («alucinaciones») y cometer errores aritméticos; toda fórmula, unidad y artículo exige verificación independiente."
        },
        {
          q: "¿Qué elementos mínimos hacen que un prompt técnico de ingeniería eléctrica sea realmente útil y seguro en lugar de producir respuestas genéricas?",
          options: [
            "Escribir solo dos palabras como «hazme cálculo tablero».",
            "Definir rol, contexto y normativa/país declarados para verificar, entradas numéricas exactas con unidades SI, restricción explícita de no inventar datos ni normas, y formato estructurado de salida con supuestos listados.",
            "Pedir que conteste en menos de tres líneas sin mostrar fórmulas.",
            "Omitir tensión nominal, cos φ y longitudes."
          ],
          correct: 1,
          explanation: "Los prompts estructurados con datos con unidades, restricciones explícitas y trazabilidad de hipótesis reducen ambigüedades y facilitan la auditoría posterior."
        },
        {
          q: "Al plantear automatizar tareas repetitivas en Revit (como renombrar láminas, comprobar parámetros vacíos o cruzar tablas) apoyándote en IA, ¿qué criterio técnico debes recordar?",
          options: [
            "La IA ejecuta directamente cambios sobre Revit sin necesidad de versiones, API ni copias de seguridad.",
            "Cualquier script o flujo (p. ej. Dynamo, Python/API o complementos) depende de versión, licencias y entorno; debe probarse primero en una copia de respaldo controlada verificando cada cambio.",
            "Automatizar elimina la necesidad de revisar los planos antes de entregar.",
            "Todos los scripts de Internet funcionan igual en Revit 2020 y Revit 2026."
          ],
          correct: 1,
          explanation: "Probar automatizaciones en copia de respaldo y validar versiones de API/Dynamo protege la integridad del modelo BIM de producción."
        },
        {
          q: "¿Cuál es la afirmación correcta respecto a la certificación de este programa técnico y la responsabilidad profesional?",
          options: [
            "Este curso equivale a un título universitario MBA y habilita automáticamente para firmar proyectos eléctricos oficiales en cualquier país.",
            "Acredita formación técnica especializada en diseño, iluminación, modelado BIM, visualización y uso responsable de IA; todo trabajo aplicado a una instalación real requiere revisión y firma por profesional competente según la normativa vigente.",
            "Sustituye todas las inspecciones de obra y mediciones con telurómetro.",
            "Autoriza a firmar en nombre del modelo de IA utilizado."
          ],
          correct: 1,
          explanation: "La capacitación técnica aporta criterio y dominio de herramientas modernas, manteniendo siempre la responsabilidad legal y validación técnica bajo el profesional competente."
        }
      ]
    }
  }
};
