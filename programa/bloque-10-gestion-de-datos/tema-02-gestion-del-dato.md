# Tema 2. Gestión del dato

## 1. Ficha del tema

| Campo | Detalle |
| --- | --- |
| **Título del tema** | Gestión del dato: calidad, catalogación, propietarios, integración, limpieza, metadatos y gobernanza |
| **Bloque y posición dentro del programa** | Bloque 10: Gestión de datos — Tema 2 de 5 (Programa de Dirección, Innovación y Negocios Digitales) |
| **Duración recomendada** | 4 horas (240 minutos) |
| **Público objetivo** | Mandos intermedios y emprendedores |
| **Nivel de dificultad** | Intermedio |
| **Prerrequisitos** | Haber cursado el Tema 1 (Open Data) y tener experiencia básica con herramientas corporativas de gestión (ERP, CRM, e-commerce u hojas de cálculo compartidas). |
| **Resultado general de aprendizaje** | Diagnosticar problemas de calidad e integración de datos en una pyme y diseñar un modelo práctico de gobernanza ligera (propietarios, reglas de limpieza, catálogo y metadatos) que asegure datos fiables para la toma de decisiones. |

---

## 2. Objetivos de aprendizaje

Al finalizar este tema, el alumnado será capaz de:

1. **Diagnosticar** (Analizar) las causas raíz y el coste operativo de la mala calidad de datos en una pyme mediante las seis dimensiones estándar de calidad del dato.
2. **Aplicar** (Aplicar) técnicas prácticas de limpieza, normalización y validación en origen para eliminar duplicidades, valores nulos críticos e inconsistencias entre sistemas (ERP, CRM y canales digitales).
3. **Diferenciar** (Comprender) las responsabilidades operativas entre propietario del dato (*Data Owner*), custodio del dato (*Data Steward*) y área tecnológica en un esquema de gobernanza adaptado a pymes.
4. **Diseñar** (Crear) un diccionario de datos y un catálogo mínimo viable con metadatos esenciales que permita definir una "única fuente de la verdad" (*Single Source of Truth*) para entidades críticas (clientes, productos, pedidos).
5. **Evaluar** (Evaluar) distintas opciones de integración de datos (manual, ETL/ELT, conectores *no-code* o APIs) en función de volumen, criticidad, presupuesto y mantenimiento en una empresa en transformación digital.

---

## 3. Contenidos esenciales

### 3.1. Calidad del dato: dimensiones y coste oculto en la pyme

**Explicación breve y clara**
En muchas empresas en transformación digital el problema no es la falta de datos, sino la desconfianza hacia ellos: Ventas reporta una cifra de facturación distinta a Finanzas, el almacén muestra stock disponible que no existe y las campañas de correo rebotan por direcciones erróneas. La calidad del dato no es un asunto puramente informático; es un requisito de negocio que se mide con dimensiones concretas y que impacta directamente en margen, productividad y experiencia de cliente.

| Dimensión de calidad | Qué evalúa | Ejemplo típico de fallo en pyme |
| --- | --- | --- |
| **Exactitud** | Correspondencia con la realidad | Un teléfono o CIF mal tecleado en el alta de cliente |
| **Completitud** | Presencia de campos obligatorios | Pedidos sin código postal o sin comercial asignado |
| **Consistencia** | Coherencia entre distintos sistemas | El mismo cliente figura como "Activo" en CRM y "Bloqueado" en ERP |
| **Unicidad** | Ausencia de duplicados | "Suministros López S.L." y "Lopez Suministros SL" creados dos veces |
| **Oportunidad / Frescura** | Disponibilidad a tiempo para decidir | El inventario online se actualiza cada 24 h provocando roturas de stock |
| **Validez** | Cumplimiento de formatos y reglas de negocio | Descuentos del 120 % o fechas de entrega anteriores a la fecha de pedido |

**Conceptos clave**
- Las 6 dimensiones de la calidad del dato.
- Principio *Garbage In, Garbage Out* (GIGO).
- Regla del 1-10-100 en calidad de datos (concepto divulgativo: prevenir un error en origen cuesta una fracción mínima frente a corregirlo después o asumir sus consecuencias en cliente; *nota: utilizar como metáfora orientativa de gestión, no como estadística empírica exacta*).
- Deuda de datos (*data debt*).

**Definiciones necesarias**
- **Dato maestro (*Master Data*):** Entidades centrales y relativamente estables compartidas por toda la empresa (clientes, proveedores, productos, empleados, ubicaciones).
- **Dato transaccional:** Eventos operativos que ocurren sobre los datos maestros (facturas, pedidos, envíos, tickets de soporte).
- **Regla de validación en origen:** Control automático en el formulario o sistema de entrada que impide guardar registros incompletos o con formato incorrecto.

**Ejemplo práctico realista**
Una empresa distribuidora de cosmética profesional en Sevilla pierde un promedio de 6 horas semanales por comercial reconciliando pedidos porque el catálogo de productos tiene referencias distintas en la web B2B y en el ERP. Al exigir validación automática del SKU maestro y bloquear campos obligatorios en el alta, reducen drásticamente las incidencias de facturación en dos meses.

**Errores frecuentes**
- Tratar de "limpiar" los datos una vez al trimestre en Excel sin corregir el formulario o proceso que genera la suciedad cada día.
- Delegar el 100 % de la calidad del dato en el departamento de IT o en el proveedor informático, cuando solo negocio sabe qué valor es correcto.
- Intentar alcanzar el 100 % de perfección en todos los campos de la empresa en lugar de priorizar los datos críticos (enfoque 80/20).

**Preguntas que el alumnado debería poder responder**
- ¿Qué dos dimensiones de calidad están generando hoy más retrabajo en vuestra organización?
- ¿Por qué limpiar una tabla sin instalar reglas en origen acaba generando el mismo problema semanas después?

---

### 3.2. Limpieza, normalización e integración entre sistemas

**Explicación breve y clara**
A medida que una pyme adopta herramientas digitales (ERP, CRM, e-commerce, plataforma de email marketing, herramientas de soporte), nacen los "silos de datos": islas de información que no se hablan entre sí. La limpieza prepara los datos existentes y la integración establece puentes controlados para que la información fluya sin copiar y pegar hojas de cálculo manualmente cada semana.

**Conceptos clave**
- Perfilado de datos (*data profiling*) antes de limpiar.
- Normalización y deduplicación (*matching* y fusión de registros).
- Silos de datos y "única fuente de la verdad" (*Single Source of Truth*, SSOT).
- Integración mediante conectores *no-code* (Make, Zapier, n8n), APIs y flujos ETL/ELT.

**Definiciones necesarias**
- **Perfilado de datos:** Inspección inicial de una tabla para detectar porcentajes de nulos, valores atípicos, formatos mezclados y posibles duplicados.
- **ETL (Extract, Transform, Load):** Proceso que extrae datos de distintas fuentes, los limpia y transforma según reglas de negocio y los carga en un destino analítico u operativo.
- **Identificador único (ID / Clave primaria):** Código inequívoco (ej.: CIF normalizado o ID interno de cliente) que permite relacionar el mismo registro a través de varios programas sin ambigüedad.

**Ejemplo práctico realista**
Una academia de formación técnica con 30 empleados tenía alumnos duplicados entre su CRM comercial, su plataforma Moodle y su programa de facturación porque cada sistema usaba el nombre completo escrito a mano. Establecieron el correo electrónico normalizado en minúsculas más un ID interno único como clave de integración, conectando el CRM y Moodle con un flujo automatizado *no-code* y alertas de error.

**Errores frecuentes**
- Integrar dos sistemas sucios automáticamente: la automatización propaga errores diez veces más rápido si antes no se han deduplicado las bases.
- Fusionar duplicados sin conservar trazabilidad del historial de facturas o interacciones previas.
- Crear decenas de automatizaciones sin documentarlas ni asignar alertas cuando un conector falla silenciosamente.

**Preguntas que el alumnado debería poder responder**
- ¿Qué pasos deben ejecutarse *antes* de conectar automáticamente un CRM con un ERP?
- ¿Cuándo conviene a una pyme usar un conector *no-code* frente a un desarrollo a medida o un proceso ETL formal?

---

### 3.3. Catálogo de datos, diccionario y metadatos prácticos

**Explicación breve y clara**
Si preguntas en una reunión directiva "¿cuántos clientes activos tenemos?" y recibes tres respuestas distintas, el problema no suele ser matemático sino semántico: cada departamento usa una definición diferente de "cliente activo". Los metadatos, el glosario de negocio y el catálogo de datos resuelven esta ambigüedad documentando qué datos existen, dónde viven, qué significan y quién responde por ellos.

**Conceptos clave**
- Metadatos técnicos, de negocio y operativos.
- Glosario de negocio frente a diccionario de datos.
- Catálogo de datos ligero para pymes.
- Linaje del dato (*data lineage*): de dónde viene, cómo se transforma y dónde se consume.

**Definiciones necesarias**
- **Metadatos:** "Datos sobre los datos" que describen su estructura, origen, significado, formato, sensibilidad, frecuencia de actualización y propietario.
- **Diccionario de datos:** Inventario detallado a nivel de tabla y campo (nombre del campo, tipo de dato, valores permitidos, obligatoriedad y definición de negocio).
- **Linaje del dato:** Trazabilidad del recorrido de un dato desde su captura original hasta los informes o decisiones finales.

**Ejemplo práctico realista**
Una empresa de alquiler de maquinaria en Valencia mantenía un conflicto recurrente entre Operaciones y Finanzas sobre la "tasa de ocupación de flota". Crearon un glosario de negocio de una sola página en Notion/Confluence definiendo la fórmula exacta (días facturados / días disponibles excluyendo mantenimiento programado), la tabla origen del ERP y el responsable de su revisión mensual. Las discusiones sobre los números desaparecieron del comité semanal.

**Errores frecuentes**
- Comprar herramientas corporativas de catálogo de datos extremadamente complejas cuando la pyme aún no tiene documentados sus 15 indicadores y 5 tablas críticas en un documento vivo.
- Redactar diccionarios de datos demasiado técnicos que el equipo comercial o financiero no entiende ni consulta.
- Crear un catálogo una sola vez y dejarlo obsoleto al no integrarlo en los cambios de procesos o software.

**Preguntas que el alumnado debería poder responder**
- ¿Qué diferencia hay entre metadatos técnicos y metadatos de negocio?
- ¿Qué 6 columnas mínimas incluiríais en un catálogo de datos ligero para una empresa de 40 empleados?

---

### 3.4. Gobernanza del dato y roles: Data Owner y Data Steward en pymes

**Explicación breve y clara**
La gobernanza del dato (*data governance*) es el conjunto de decisiones, roles, políticas y controles que aseguran que los datos de la empresa son fiables, seguros y utilizables. En una gran corporación existe una oficina entera de gobierno del dato; en una pyme basta con una **gobernanza ligera (*lean data governance*)** basada en asignar responsables claros a los dominios críticos (Clientes, Productos, Finanzas, Operaciones) y fijar rituales sencillos de revisión.

| Rol | Quién suele asumirlo en una pyme | Responsabilidades clave |
| --- | --- | --- |
| **Patrocinador ejecutivo** | Dirección General / Socio fundador | Prioriza dominios críticos, resuelve conflictos interdepartamentales y apoya el cambio cultural. |
| **Propietario del dato (*Data Owner*)** | Responsable de área (ej.: Dir. Comercial para Clientes; Dir. Operaciones para Productos/Stock) | Define reglas de negocio, aprueba accesos y responde por la calidad global de su dominio. |
| **Custodio del dato (*Data Steward*)** | Mando intermedio o perfil operativo referente (ej.: Administración de Ventas, Controller) | Supervisa la calidad diaria, ejecuta o coordina limpiezas, mantiene el diccionario y resuelve incidencias. |
| **Custodio técnico (IT / Proveedor)** | Responsable IT o partner tecnológico | Implementa validaciones técnicas, integraciones, permisos, copias y seguridad de sistemas. |

**Conceptos clave**
- Gobernanza ligera (*lean data governance*) orientada a valor.
- Matriz RACI aplicada al ciclo de vida del dato.
- Dominios de datos maestros (Cliente, Producto, Proveedor, Empleado).
- Rituales de gobierno: comité mensual breve de calidad del dato (30 minutos).

**Definiciones necesarias**
- **Data Owner (Propietario del dato):** Perfil de negocio con autoridad para decidir cómo se define, usa, comparte y protege un dominio de datos concreto.
- **Data Steward (Custodio del dato):** Perfil operativo encargado de velar en el día a día porque se cumplan los estándares de calidad, nomenclatura y documentación acordados.
- **Dominio de datos:** Agrupación lógica de información esencial para el negocio (por ejemplo, dominio "Cliente" o dominio "Catálogo de productos").

**Ejemplo práctico realista**
Una pyme de distribución alimentaria de 55 empleados nombró cuatro *Data Owners* (Dirección Comercial para Clientes, Compras para Proveedores y Productos, Operaciones para Inventario y Administración para Finanzas) y dedicó 30 minutos el primer martes de cada mes a revisar tres métricas de calidad (% de duplicados, % de fichas completas y número de descuadres ERP-web). En un trimestre lograron reducir a la mitad los errores en albaranes.

**Errores frecuentes**
- Confundir "propietario del dato" con "dueño exclusivo que bloquea el acceso al resto de departamentos".
- Asignar el rol de *Data Owner* al responsable informático en lugar de al responsable de negocio.
- Redactar un manual de 80 páginas de políticas de gobierno que nadie lee ni aplica.

**Preguntas que el alumnado debería poder responder**
- ¿Por qué el *Data Owner* del dominio "Clientes" debe pertenecer al área de negocio y no al departamento técnico?
- ¿Cómo implantaríais una gobernanza mínima viable en una empresa de menos de 50 personas sin crear burocracia innecesaria?

---

## 4. Metodología didáctica

Secuencia completa para una sesión de **4 horas (240 minutos exactos)** en modalidad híbrida.

| Fase | Tiempo | Qué hace el formador | Qué hace el alumnado |
| --- | --- | --- | --- |
| **1. Apertura y activación** | 25 min | Aplica evaluación diagnóstica rápida y facilita la Actividad 1 (*Autopsia de un error de datos*). Enlaza con los problemas detectados al cruzar datos abiertos en el Tema 1. | Relata un fallo real reciente causado por datos sucios o silos en su empresa y calcula de forma aproximada las horas o euros perdidos. |
| **2. Exposición breve / microlearning (Parte I)** | 30 min | Explica las 6 dimensiones de calidad del dato, diferencia entre datos maestros y transaccionales, y estrategias de limpieza, perfilado e integración. | Clasifica los fallos compartidos en la apertura dentro de las 6 dimensiones y anota controles preventivos en origen. |
| **3. Actividad práctica de limpieza y reglas** | 35 min | Dirige la Actividad 2 (*Clínica de datos sucios*) sobre un extracto real simulado de clientes y productos; guía criterios de normalización. | Inspecciona un conjunto de datos con errores deliberados, detecta fallos por dimensión, propone reglas de validación y diseña la normalización. |
| **4. Exposición breve / microlearning (Parte II)** | 25 min | Expone diccionario de datos, metadatos, linaje y esquema de gobernanza ligera (*Data Owner*, *Data Steward*, comité de calidad). | Compara el esquema de roles con el organigrama real de su pyme y plantea dudas sobre conflictos de responsabilidad. |
| **Descanso estructurado** | 15 min | Pausa activa y preparación de salas y materiales para el caso práctico. | Descansa y comenta posibles *Data Owners* de su propia organización. |
| **5. Análisis de caso práctico** | 50 min | Introduce el caso **Ferretería Industrial del Norte S.A. (FINSA)**, reparte los equipos y supervisa que aborden calidad, integración, catálogo y gobierno. | En equipos de 3-4 personas, analiza los síntomas de FINSA, asigna roles RACI/gobierno, define la fuente única de verdad y prioriza un plan de 90 días. |
| **6. Discusión guiada y contraste** | 25 min | Modera exposiciones breves por equipo, contrasta decisiones sobre cuál debe ser el sistema maestro y enfatiza la gestión del cambio con los usuarios. | Presenta su plan de gobierno para FINSA, debate qué dominio atacar primero y ajusta su propuesta tras el *feedback*. |
| **7. Actividad de transferencia laboral** | 25 min | Facilita la Actividad 3 (*Mapa de gobernanza ligera para mi pyme*) proporcionando la plantilla replicable. | Diseña individualmente el mapa de 3 dominios críticos, propietarios, metadatos básicos y 3 reglas de calidad para su empresa actual. |
| **8. Síntesis, evaluación y cierre** | 10 min | Resume los principios clave de gestión del dato, indica instrucciones de entrega/test y conecta con el Tema 3 (Privacidad de datos y RGPD). | Completa la autoevaluación rápida y selecciona una regla de validación en origen para proponer esta misma semana. |
| **TOTAL** | **240 min** | — | — |

---

## 5. Actividades prácticas

### Actividad 1 (Activación): Autopsia de un error de datos

- **Nombre:** Autopsia de un error de datos en nuestra empresa.
- **Objetivo:** Tomar conciencia del impacto económico y operativo real de la baja calidad de datos en la rutina diaria de una pyme.
- **Instrucciones para el alumnado:**
  1. Piensa en un incidente real de los últimos 6 meses relacionado con datos erróneos, incompletos o duplicados (ej.: factura enviada a dirección antigua, stock equivocado en web, informe contradictorio en reunión, correo duplicado a un cliente).
  2. Completa en 5 minutos una tarjeta breve con: (a) Qué ocurrió, (b) Qué dimensión falló, (c) Cuánto tiempo/coste aproximado supuso resolverlo y (d) Dónde nació el error.
  3. En grupos de 3 (10 minutos), elegid el caso más ilustrativo y compartidlo en el muro común (5 minutos).
- **Materiales necesarios:** Plantilla digital en pizarra colaborativa o tarjetas impresas.
- **Tiempo estimado:** 20 minutos (dentro de los 25 min de apertura).
- **Rol del formador:** Reconducir hacia causas de proceso y gobierno (no culpar a personas concretas) y ayudar a cuantificar el "impuesto oculto" en horas de retrabajo.
- **Producto o entregable esperado:** Mapa colectivo de incidentes reales clasificados por impacto y origen.
- **Criterios de éxito:** El incidente describe un fallo concreto, identifica su punto de origen y estima su impacto operativo o comercial.

### Actividad 2 (Aplicación): Clínica de datos sucios

- **Nombre:** Clínica de datos sucios (perfilado y reglas de validación).
- **Objetivo:** Detectar sistemáticamente problemas de calidad en una tabla empresarial simulada y redactar reglas concretas de limpieza y prevención en origen.
- **Instrucciones para el alumnado:**
  1. Abre la tabla de trabajo **Extracto de clientes y pedidos** (incluida en la Ficha de trabajo 8.2, con 12 registros que contienen errores intencionados de formato, duplicidad, completitud, validez y consistencia).
  2. Identifica al menos **8 errores distintos** y clasifica cada uno según su dimensión de calidad (exactitud, completitud, consistencia, unicidad, validez u oportunidad).
  3. Redacta para cada tipo de error: (a) cómo lo limpiarías en la base actual y (b) qué regla de validación en origen pondrías en el CRM/ERP para evitar que vuelva a entrar.
  4. Define una clave única de identificación de cliente para evitar futuros duplicados.
- **Materiales necesarios:** Ficha de trabajo 8.2 (o archivo CSV equivalente en hoja de cálculo).
- **Tiempo estimado:** 35 minutos.
- **Rol del formador:** Verificar que el alumnado no se limita a "corregir a mano la celda", sino que formula reglas preventivas reproducibles (máscaras de entrada, listas desplegables, campos obligatorios, validación de NIF/CIF).
- **Producto o entregable esperado:** Informe de diagnóstico y tabla de reglas de limpieza + prevención.
- **Criterios de éxito:** Detecta al menos 8 incidencias reales, las clasifica correctamente por dimensión y propone reglas preventivas técnicamente viables.

### Actividad 3 (Transferencia a la realidad laboral): Mapa de gobernanza ligera para mi pyme

- **Nombre:** Mapa de gobernanza ligera y catálogo mínimo viable.
- **Objetivo:** Diseñar un primer esquema accionable de gobierno y catalogación para 3 dominios de datos críticos en la organización del participante.
- **Instrucciones para el alumnado:**
  1. Selecciona los 3 dominios de datos más problemáticos o estratégicos de tu empresa (ej.: Clientes, Catálogo de Productos, Pedidos, Proyectos o Lead Comerciales).
  2. Completa la **Plantilla de Gobernanza Ligera** (apartado 8.3): sistema maestro (SSOT), sistemas secundarios que consumen el dato, *Data Owner*, *Data Steward*, 2 indicadores de calidad a vigilar mensualmente y 1 definición crítica para el glosario de negocio.
  3. Define una acción de victoria rápida (*quick win*) ejecutable en 30 días sin necesidad de comprar software nuevo.
- **Materiales necesarios:** Plantilla de Gobernanza Ligera (apartado 8.3).
- **Tiempo estimado:** 25 minutos en sesión (con opción de completar y entregar en el campus en 48 horas).
- **Rol del formador:** Comprobar que los *Data Owners* propuestos tienen autoridad real de negocio y que el *quick win* es concreto y medible.
- **Producto o entregable esperado:** Documento de una página con el mapa de gobierno de 3 dominios y un *quick win* a 30 días.
- **Criterios de éxito:** Coherencia entre SSOT y sistemas consumidores, roles de negocio bien asignados, métricas de calidad medibles y definición de negocio libre de ambigüedades.

---

## 6. Caso práctico

### Contexto empresarial
**Ferretería Industrial del Norte S.A. (FINSA)** es una distribuidora B2B con sede en Vitoria-Gasteiz, 65 empleados y 14 millones de euros de facturación anual en suministros industriales (herramienta profesional, EPIs y tornillería técnica). Durante 20 años operó con un ERP clásico de escritorio; hace 18 meses implantó un CRM en la nube para sus 12 comerciales y hace 8 meses lanzó un portal de pedidos e-commerce B2B.

### Situación o problema
En lugar de acelerar el negocio, la digitalización ha multiplicado las tensiones internas:
- El portal B2B muestra artículos "En stock" que en realidad se agotaron horas antes por ventas telefónicas, generando reclamaciones y envíos parciales urgentes.
- En el comité mensual, Dirección Comercial reporta **1.420 clientes activos** (según el CRM) mientras Administración reporta **1.090** (según el ERP).
- Existen más de 300 clientes duplicados porque los comerciales crean cuentas nuevas en el CRM sin comprobar el CIF ni el código de cliente del ERP.
- Nadie sabe quién puede modificar tarifas, dar de baja productos descatalogados o corregir descripciones técnicas en la web: IT dice que "solo mantiene servidores", Compras culpa a Marketing y Ventas trabaja en hojas de Excel paralelas.

### Datos disponibles

| Sistema / Fuente | Datos que gestiona | Problemas detectados en auditoría preliminar | Actualización actual |
| --- | --- | --- | --- |
| **ERP clásico (on-premise)** | Facturación, stock de almacén, clientes facturados, catálogo base | 18 % de referencias sin peso ni categoría; 110 clientes sin CIF validado; maestro de artículos con códigos antiguos | Tiempo real en almacén |
| **CRM en la nube** | Oportunidades, contactos, clientes potenciales y activos | 24 % de cuentas duplicadas; campos "Sector" y "Tamaño" en texto libre; 35 % de contactos sin email válido | Tiempo real por comerciales |
| **Portal e-commerce B2B** | Catálogo enriquecido (fotos, fichas), pedidos online, tarifas web | Sincroniza stock desde el ERP solo una vez al día a las 02:00 h; descripciones editadas a mano por Marketing sin reflejarse en ERP | Batch nocturno (cada 24 h) |
| **Hojas Excel locales** | Descuentos especiales por cliente y previsiones comerciales | 9 versiones distintas circulando por correo electrónico | Manual, sin control de versiones |

**Indicadores de dolor operativo del último trimestre:**
- 14 % de pedidos online sufrieron rotura de stock o modificación posterior.
- 32 horas/semana acumuladas entre Administración y Comercial resolviendo descuadres de clientes y precios.
- 450 referencias descatalogadas siguen visibles en el portal B2B.

### Preguntas de análisis
1. ¿Cuál debería ser la **única fuente de la verdad (SSOT)** para cada uno de los tres dominios críticos de FINSA (Clientes, Catálogo de Productos/Stock y Tarifas/Descuentos)?
2. ¿Qué **roles de gobernanza** (*Data Owner*, *Data Steward* y soporte técnico) asignaríais en el organigrama de FINSA y cómo evitaríais que IT acabe asumiendo decisiones de negocio?
3. ¿Por qué no conviene sincronizar automáticamente el CRM y el ERP mañana mismo antes de realizar un proyecto previo de limpieza y definición de reglas?
4. ¿Qué **reglas de validación en origen** y qué **definición común de "cliente activo"** propondríais para cerrar el conflicto entre Ventas y Administración?

### Tarea a realizar
En equipos de 3-4 personas (50 minutos), elaborad una **Hoja de ruta de gestión del dato a 90 días para FINSA** que contenga:
1. **Arquitectura funcional de SSOT:** Tabla indicando, para cada dominio (Clientes, Productos, Stock, Tarifas), qué sistema es el maestro, cuáles son consumidores y con qué frecuencia mínima debe sincronizarse.
2. **Estructura de gobierno:** Asignación de *Data Owner*, *Data Steward* y ritual mensual de seguimiento (con 4 KPIs de calidad del dato).
3. **Plan priorizado en 3 fases (días 1-30, 31-60 y 61-90):** Qué limpiar primero, qué controles activar en origen y cómo retirar las hojas de Excel paralelas de descuentos.

### Posibles soluciones o criterios de análisis
- **Definición de SSOT recomendada:**
  - *Clientes facturables:* ERP como maestro fiscal (clave única = CIF normalizado + ID cliente); CRM como maestro de *leads* y actividad comercial, pasando a cliente oficial solo tras validación de CIF y creación sincronizada.
  - *Stock y precios/tarifas oficiales:* ERP como maestro único; el portal B2B y el CRM deben consultar o recibir actualizaciones frecuentes (ej.: cada 10-15 minutos o mediante *webhooks* en cada movimiento de stock) para eliminar el desfase de 24 h.
  - *Catálogo de productos:* ERP maestro para código SKU, estado (activo/descatalogado) y coste; capa PIM o ficha web controlada para textos comerciales y fotos, siempre vinculada al SKU maestro para que un producto descatalogado desaparezca automáticamente de la web.
- **Definición consensuada en glosario:** Por ejemplo, "Cliente activo = NIF/CIF único con al menos una factura emitida en los últimos 12 meses" (separándolo de "Cuenta en seguimiento comercial" en el CRM).
- **Roles coherentes:**
  - Dominio Clientes: *Data Owner* = Dirección Comercial (en coordinación con Administración para alta fiscal); *Data Steward* = Responsable de Administración de Ventas.
  - Dominio Productos/Catálogo: *Data Owner* = Dirección de Compras; *Data Steward* = Técnico de Producto/Catálogo.
  - Dominio Stock: *Data Owner* = Jefe de Almacén/Operaciones.
  - Dominio Tarifas: *Data Owner* = Dirección Financiera/Comercial (política única que erradique los Excel locales).
- **Secuencia lógica (90 días):** Días 1-30 (perfilado, glosario mínimo, asignación de *owners*, bloqueo de duplicados por CIF y depuración de 450 descatalogados); Días 31-60 (deduplicación supervisada CRM-ERP, sustitución de texto libre por desplegables, centralización de tarifas en ERP); Días 61-90 (sincronización frecuente de stock ERP-B2B, comité mensual de calidad con KPIs: tasa de duplicados < 1 %, roturas por desfase < 2 %, fichas completas > 95 %).

### Preguntas de reflexión final
- ¿Qué resistencia cultural esperaríais del equipo comercial al eliminar sus Excel locales de descuentos y cómo la gestionaríais desde un mando intermedio?
- ¿Qué pasaría si FINSA intentara implantar inteligencia artificial para predecir demanda antes de resolver estos problemas de gestión del dato?

---

## 7. Evaluación

### Evaluación diagnóstica breve (inicio de sesión, 5 min)
1. En vuestra empresa, cuando dos departamentos presentan cifras distintas de ventas o clientes, ¿existe una definición oficial escrita que resuelva el empate? (Sí / A veces / No).
2. ¿Cuál es el mayor problema actual con los datos en tu área? (Duplicados / Datos incompletos / Sistemas desconectados / Falta de responsable claro).
3. Verdadero o falso: "La calidad del dato es responsabilidad exclusiva del departamento informático".
4. ¿Sabrías nombrar hoy al propietario de negocio (*Data Owner*) de la base de datos de clientes en tu organización?

### Evaluación formativa durante la sesión
- Revisión en directo de la **Actividad 2 (Clínica de datos sucios)** contrastando los errores encontrados y la solidez de las reglas de validación en origen propuestas.
- Preguntas dirigidas durante el caso **FINSA** para comprobar si el alumnado distingue correctamente *Data Owner*, *Data Steward* e IT, y si evita automatizar datos aún sucios.
- Comprobación en sala de la claridad de los *quick wins* definidos en la Actividad 3.

### Evaluación sumativa al final del tema
1. **Cuestionario práctico de 6 preguntas de escenario** sobre dimensiones de calidad, metadatos, SSOT y gobernanza (30 %).
2. **Mapa de gobernanza ligera y catálogo mínimo viable (Actividad 3)** aplicado a la empresa del participante, incluyendo al menos 3 dominios, roles, glosario y 3 reglas de validación en origen (70 %).

### Rúbrica de evaluación

| Criterio | Insuficiente (0-4) | En desarrollo (5-6) | Adecuado (7-8) | Destacado (9-10) |
| --- | --- | --- | --- | --- |
| **Diagnóstico de calidad y reglas preventivas** | Confunde dimensiones o solo propone limpiezas manuales puntuales. | Identifica problemas de calidad pero propone controles vagos o poco aplicables. | Clasifica correctamente las incidencias por dimensión y define reglas claras de validación en origen. | Prioriza incidencias por impacto económico y diseña controles preventivos, alertas y métricas de calidad precisas. |
| **Diseño de SSOT e integración** | Mantiene sistemas duplicados sin definir cuál es el maestro ni cómo se relacionan. | Propone un sistema maestro pero omite clave única o frecuencia de sincronización. | Define claramente SSOT, sistemas consumidores, clave única e integración acorde al tamaño de la pyme. | Propone una arquitectura funcional limpia, escalable y realista en coste, evitando propagar errores entre sistemas. |
| **Catálogo, diccionario y metadatos** | No aporta definiciones de negocio ni metadatos operativos básicos. | Incluye descripciones generales pero persisten ambigüedades en definiciones clave. | Redacta un catálogo ligero y definiciones de negocio sin ambigüedad comprensibles para cualquier área. | Incorpora metadatos técnicos, de negocio y de sensibilidad/linaje listos para usarse y mantenerse en el tiempo. |
| **Gobernanza ligera y viabilidad del cambio** | Asigna toda la responsabilidad a IT o plantea una burocracia inviable para una pyme. | Asigna roles generales sin especificar responsabilidades ni cadencia de seguimiento. | Asigna *Data Owners* y *Data Stewards* realistas de negocio y propone un *quick win* a 30 días. | Integra roles, ritual mensual breve, indicadores de calidad y medidas concretas de gestión del cambio cultural. |

### Actividad de autoevaluación y reflexión
- *¿Qué "fuga silenciosa" de tiempo o dinero por mala calidad de datos acabo de identificar en mi equipo?*
- *¿Qué definición ambigua de negocio (ej.: cliente activo, margen, stock disponible) necesitamos acordar por escrito cuanto antes?*
- *¿Qué barrera organizativa anticipo al proponer figuras de Data Owner en mi empresa y cómo voy a abordarla?*

---

## 8. Materiales y recursos

### 8.1. Guion de diapositivas (estructura slide por slide)

1. **Slide 1 — Portada:** Bloque 10 · Tema 2: Gestión del dato. De los datos caóticos a activos fiables.
2. **Slide 2 — Conexión y objetivos:** De abrir datos externos (Tema 1) a gobernar los datos propios y externos con rigor.
3. **Slide 3 — El coste oculto del dato sucio:** Dinámica de apertura y principio GIGO (*Garbage In, Garbage Out*).
4. **Slide 4 — Las 6 dimensiones de calidad del dato:** Tabla práctica con ejemplos reales de pymes.
5. **Slide 5 — Datos maestros frente a datos transaccionales:** Por qué los errores en maestros se multiplican en cada transacción.
6. **Slide 6 — Perfilado, limpieza y validación en origen:** Limpiar el río frente a cerrar el grifo de la suciedad.
7. **Slide 7 — Actividad 2 (instrucciones):** Clínica de datos sucios sobre extracto de clientes y pedidos.
8. **Slide 8 — Silos de datos e integración:** SSOT, claves únicas y criterios para elegir entre conectores *no-code*, APIs o ETL.
9. **Slide 9 — Metadatos, diccionario y glosario de negocio:** Cómo acabar con las discusiones de "¿de dónde sale ese número?".
10. **Slide 10 — Gobernanza ligera (*Lean Data Governance*):** Roles de *Data Owner*, *Data Steward* e IT adaptados a pymes.
11. **Slide 11 — Caso práctico: FINSA S.A.:** Contexto, síntomas de sus 4 fuentes y dilema de transformación digital.
12. **Slide 12 — Debriefing FINSA:** Solución de SSOT, roles y hoja de ruta de 90 días.
13. **Slide 13 — Actividad 3 (transferencia):** Mapa de gobernanza ligera para vuestra empresa.
14. **Slide 14 — Cierre y puente al Tema 3:** Gobernar el dato también exige proteger a las personas (Privacidad y RGPD).

### 8.2. Ficha de trabajo: Clínica de datos sucios (Actividad 2)

Inspecciona el siguiente extracto simulado de clientes y pedidos e identifica errores por dimensión, corrección y regla preventiva en origen:

| ID_Cli | Razon_Social | CIF | Email | Ciudad | Fecha_Pedido | Importe_EUR | Descuento_% | Estado_ERP | Estado_CRM |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| C001 | Talleres Gomez S.L. | B12345678 | info@talleresgomez.es | Bilbao | 2025-03-14 | 1.250,00 | 10 | Activo | Activo |
| C002 | TALLERES GÓMEZ SL | B-12345678 | info@talleresgomez.es | bilbao | 14/03/2025 | 1250.00 | 10 | Activo | Inactivo |
| C003 | Construcciones Norte | *(vacío)* | ventas@cnorte | Vitoria | 2025-02-30 | -450,00 | 15 | Activo | Activo |
| C004 | Metalúrgica Sur S.A. | A87654321 | pedidos@metsur.es | Sevilla | 2025-04-02 | 3.800,00 | 120 | Bloqueado | Activo |
| C005 | Electricidad Ruiz | B99887766 | *(vacío)* | *(vacío)* | 2026-11-25 | 0,00 | 0 | Activo | *(vacío)* |

*Guía rápida para el alumnado:* Localiza al menos 8 errores (duplicado C001/C002, formato inconsistente de CIF y fecha, separador decimal mezclado, contradicción Activo/Inactivo y Bloqueado/Activo, CIF faltante, email inválido, fecha imposible 30 de febrero, importe negativo sin tipo "abono", descuento > 100 %, fecha futura errónea y campos obligatorios vacíos).

### 8.3. Plantilla práctica replicable: Mapa de Gobernanza Ligera y Catálogo Mínimo

| Dominio de datos | Sistema Maestro (SSOT) | Sistemas secundarios | Data Owner (Negocio) | Data Steward (Operativo) | Clave única | 2 KPIs de calidad | Regla clave de validación en origen |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Ej.: Clientes** | ERP | CRM, E-commerce | Dir. Comercial | Adm. Ventas | CIF normalizado (sin guiones) + ID interno | % duplicados (<1 %); % fichas con email válido (>98 %) | Bloquear alta si el CIF ya existe o no supera dígito de control |
| **Dominio 1:** | | | | | | | |
| **Dominio 2:** | | | | | | | |
| **Dominio 3:** | | | | | | | |

**Glosario de negocio (definición sin ambigüedad de 1 indicador crítico):**
- *Indicador:* ____________________________
- *Fórmula / criterio exacto:* ____________________________
- *Fuente oficial y fecha de revisión:* ____________________________

### 8.4. Lecturas y recursos recomendados
- **DAMA-DMBOK2 (Data Management Body of Knowledge — Guía de fundamentos para la gestión de datos):** Marco de referencia internacional sobre áreas de conocimiento en gestión y gobierno del dato (especialmente capítulos de Calidad, Metadatos y Gobernanza).
- **Normas de la familia UNE 0077 / 0078 / 0079 / 0080 (Especificaciones UNE sobre Gobierno, Gestión y Calidad del Dato en España):** Referencia práctica orientada también a organizaciones medianas y pymes (*nota: verificar vigencia y ediciones actualizadas en UNE antes de citar números concretos en clase*).
- **Guías de Oficina del Dato (Gobierno de España / datos.gob.es):** Recursos divulgativos gratuitos en español sobre gobierno y compartición de datos.

### 8.5. Vídeos, artículos y fuentes adicionales *(Validar antes de utilizarse)*
> **Nota importante para el formador:** Validar la vigencia, disponibilidad de enlaces y contexto actualizado de los recursos externos antes de incorporarlos al aula virtual.
- Artículos prácticos de `datos.gob.es` sobre Gobierno del Dato y calidad de datos en pymes — *validar enlaces activos*.
- Vídeos divulgativos introductorios sobre *Data Governance* y *Data Quality* de DAMA España — *validar disponibilidad y duración*.
- Tutoriales de herramientas de perfilado y limpieza accesibles para pymes (Power Query en Excel, OpenRefine) — *validar versión de interfaz antes de recomendar*.

### 8.6. Glosario de términos clave

| Término | Definición operativa |
| --- | --- |
| **Calidad del dato** | Grado en que un conjunto de datos cumple requisitos de exactitud, completitud, consistencia, unicidad, validez y oportunidad para su uso previsto. |
| **Dato maestro** | Información central sobre entidades clave del negocio (clientes, productos, proveedores) compartida entre múltiples procesos y sistemas. |
| **SSOT (Single Source of Truth)** | Principio por el cual cada dominio de datos tiene un único sistema de referencia autorizado del que beben los demás. |
| **Metadatos** | Información descriptiva que documenta el origen, significado, formato, propiedad y reglas de uso de los datos. |
| **Diccionario de datos** | Documento o repositorio estructurado que detalla los campos, formatos y reglas de cada tabla o entidad crítica. |
| **Linaje del dato** | Trazabilidad completa del recorrido y las transformaciones que sufre un dato desde su entrada hasta su consumo analítico. |
| **Data Owner** | Directivo o responsable de área de negocio que rinde cuentas por la definición, calidad y acceso a un dominio de datos. |
| **Data Steward** | Persona con responsabilidad operativa diaria de vigilar calidad, resolver incidencias y mantener actualizado el catálogo de un dominio. |
| **ETL / ELT** | Procesos automatizados para extraer datos de varias fuentes, transformarlos/limpiarlos y cargarlos en un destino común. |

---

## 9. Adaptaciones para modalidad híbrida

### Sesión presencial
- Entregar la tabla de la **Actividad 2 (Clínica de datos sucios)** impresa en formato A3 por mesas con rotuladores de colores (un color por cada dimensión de calidad) para que la detección sea visual y colaborativa.
- En el caso **FINSA**, usar tarjetas de roles (ERP, CRM, B2B, Excel, *Data Owner*, *Data Steward*, IT) sobre la mesa para construir físicamente el mapa de flujos antes de presentarlo.

### Sesión online síncrona
- Subir previamente el extracto de la **Actividad 2** como archivo Excel/Google Sheets editable en salas de grupos (*breakout rooms*) para que el alumnado practique filtros y formato condicional en directo.
- Realizar un sondeo interactivo a mitad del caso **FINSA** sobre "¿Cuál debe ser el maestro de clientes: ERP o CRM?" para provocar debate argumentado antes de abrir la puesta en común.

### Sesión asíncrona
- Proporcionar un vídeo demostrativo de 12 minutos usando **Power Query o OpenRefine** para limpiar la tabla de la Actividad 2 paso a paso, permitiendo al alumnado replicarlo a su ritmo.
- Sustituir el debate en sala del caso **FINSA** por un documento estructurado compartido en el campus más una dinámica de revisión cruzada (*peer review*) donde cada participante evalúe el Mapa de Gobernanza Ligera de un compañero aplicando la rúbrica del apartado 7.

---

## 10. Conexión con el programa

- **Conocimientos previos que refuerza:** Da soporte estructural a los procesos comerciales, operativos y financieros trabajados en bloques anteriores, y resuelve el cuello de botella técnico detectado en el **Tema 1 (Open Data)** al integrar datos externos con bases internas desordenadas.
- **Competencias que desarrolla:** Gestión rigurosa de procesos transversales, diagnóstico analítico, diseño de políticas de gobernanza ligera, coordinación entre negocio y tecnología y liderazgo del cambio operativo.
- **Conexión con el tema anterior y posterior:**
  - *Tema anterior (Bloque 10, Tema 1 — Open Data):* Si el Tema 1 mostró cómo incorporar fuentes abiertas de valor, el Tema 2 asegura que la "casa interna" esté ordenada para cruzar, mantener y confiar en esos datos.
  - *Tema posterior (Bloque 10, Tema 3 — Privacidad de datos):* No es posible cumplir el RGPD (responder a derechos de supresión, rectificación o minimización) si la empresa no sabe dónde están sus datos, qué duplicados existen ni quién es su propietario. El catálogo y la gobernanza del Tema 2 son la base imprescindible del Tema 3.
- **Evidencia de aprendizaje que deja el alumnado:** El **Informe de diagnóstico y reglas de limpieza (Actividad 2)** y el **Mapa de gobernanza ligera y catálogo mínimo viable (Actividad 3)** listo para implantar en su pyme.

---

## Siguientes pasos para el formador

1. **Preparar el archivo editable de la Clínica de datos sucios:** Convertir la tabla del apartado 8.2 en un archivo `.xlsx` y `.csv` descargable desde el campus virtual (con una hoja adicional de soluciones comentadas para uso exclusivo docente).
2. **Verificar referencias de estándares UNE / DAMA:** Comprobar la vigencia exacta de las especificaciones UNE de gestión y gobierno del dato antes de proyectarlas.
3. **Adaptar el vocabulario al perfil de la cohorte:** Preguntar previamente en el campus qué ERP/CRM utilizan las empresas del grupo (Holded, Odoo, SAP Business One, HubSpot, Salesforce, etc.) para personalizar los ejemplos de integración.
4. **Habilitar la plantilla del Mapa de Gobernanza Ligera:** Subirla en formato editable (Google Docs/Word/Notion) para que el alumnado pueda completarla durante los últimos 25 minutos y conservarla como entregable vivo.
5. **Preparar el puente hacia Privacidad (Tema 3):** Señalar al cierre cuántos de los datos problemáticos vistos en FINSA y en la Clínica contienen datos personales, anticipando el impacto normativo del siguiente tema.
