# Portal de Certificaciones Ejecutivas Online — Documentación del Proyecto

Plataforma educativa **Multi-Programa** con **Campus de Certificación Online interactivo**, diseñada para mandos intermedios, directores comerciales, project managers, emprendedores y altos directivos en transformación digital. Ensambla **4 programas completos (38 bloques · 180 temas · 720 horas de guías didácticas)** accesibles desde una **página principal de selección de programas**, con clases tipo presentación interactiva, narrador de audio en español, acumulador inteligente de tiempo de estudio, **11 calculadoras ejecutivas en vivo**, **38 exámenes autoevaluables (190 preguntas)** y diplomas digitales verificables por QR.

---

## 1. Catálogo de los 4 programas ensamblados

| Programa | Código Certificado | Bloques | Temas | Carga académica | Modalidad |
|---|---|---:|---:|---|---|
| **🚀 Dirección, Innovación y Negocios Digitales** | `CERT-DIND-2026-XXXXXX` | 10 | 57 | 228 horas | Híbrida |
| **💼 Global MBA en Dirección Comercial y Ventas** | `CERT-GMBA-2026-XXXXXX` | 11 | 70 | 280 h · 90 ECTS · 14 meses | 100 % Online |
| **📐 Preparación PMP y Dirección de Proyectos** | `CERT-PMP-2026-XXXXXX` | 9 | 27 *(27 bloques editoriales)* | 108 h *(37 h base + prácticas)* | 100 % Online |
| **🏛️ Executive MBA (EMBA) — Dirección General, Finanzas y Estrategia Global** | `CERT-EMBA-2026-XXXXXX` | 8 | 26 *(Núcleo + Global + Electivas + IA/ESG)* | 104 h · 19 Créditos | Híbrida / Online Ejecutiva |
| **Total plataforma** | **4 certificados independientes** | **38** | **180** | **720 h de unidades didácticas** | **Interactiva + Audio** |

> **Avisos de acreditación:**
> - El diploma de *Preparación PMP y Dirección de Proyectos* acredita la formación interna completada y no equivale a la certificación oficial PMP® de PMI (verificar requisitos, PDUs/horas y ECO vigente en PMI.org).
> - El currículo del *Executive MBA* es una adaptación didáctica independiente basada en el análisis de estructura modular EMBA (19 créditos); los requisitos, electivas y costes oficiales deben verificarse en cada institución.

---

## 2. Arquitectura y estructura del repositorio

```text
Project Management/
├── plan_de_estudios_desarrollo.md                   # Plan base Programa 1 (10 bloques)
├── global_mba_direccion_comercial_ventas_plan.md    # Plan base Programa 2 (11 bloques)
├── curso_pmp_plan_de_estudios_desarrollado.md       # Plan base Programa 3 (27 bloques editoriales)
├── executive_mba_analisis_curriculo.md              # Plan base Programa 4 (EMBA 19 créditos)
├── prompt_programa_instruccion.md                   # Prompt Maestro de diseño instruccional (10 secciones)
├── README_PROYECTO.md                               # Este documento: memoria global de los 4 programas
│
├── programa/                                        # Programa 1: Dirección, Innovación y Negocios Digitales (57 temas)
├── programa-mba-comercial/                          # Programa 2: Global MBA en Dirección Comercial y Ventas (70 temas)
├── programa-pmp/                                    # Programa 3: Preparación PMP y Dirección de Proyectos (27 temas)
├── programa-emba/                                   # Programa 4: Executive MBA (26 temas)
├── supabase/
│   ├── schema.sql                                   # Esquema PostgreSQL + RLS + RPC pública verify_certificate
│   └── functions/admin-users/index.ts               # Edge Function segura para alta/gestión de usuarios (solo rol admin)
│
└── campus-certificacion/                            # Campus Web Interactivo Multi-Programa (4 certificados)
    ├── index.html                                   # Portal multi-programa, login privado, modales Admin/Perfil y QA admin
    ├── styles.css                                   # Diseño claro/oscuro, puerta de acceso, panel admin y diploma A4
    ├── supabase-config.js                           # URL, clave pública (publishable/anon), publicBaseUrl y closedAccess
    ├── supabase-client.js                           # Cliente Supabase Auth + sincronización + adminCall + verificación QR
    ├── app.js                                       # Motor multi-programa: lazy-loading, Admin, Gate privado, slides, audio, QR
    └── data/
        ├── catalog-meta.js                          # Catálogo ligero (~17 KB) para arranque instantáneo bajo demanda
        ├── program-dind.js                          # 57 temas + diapositivas compiladas (Programa 1)
        ├── program-gmba.js                          # 70 temas + diapositivas compiladas (Programa 2)
        ├── program-pmp.js                           # 27 temas + diapositivas compiladas (Programa 3)
        ├── program-emba.js                          # 26 temas + diapositivas compiladas (Programa 4)
        ├── assessments-data.js                      # 10 exámenes (50 preguntas) + 10 talleres (Programa 1)
        ├── assessments-mba.js                       # 11 exámenes (55 preguntas) + 11 talleres (Programa 2)
        ├── assessments-pmp.js                       # 9 exámenes situacionales (45 preguntas) + 9 talleres (Programa 3)
        └── assessments-emba.js                      # 8 exámenes ejecutivos (40 preguntas) + 8 talleres (Programa 4)
```

---

## 3. Diseño instruccional unificado (180 guías didácticas)

Cada uno de los 180 temas sigue rigurosamente el **Prompt Maestro** con 10 secciones obligatorias + cierre docente:

1. **Ficha del tema** (posición, duración de 4 h / 240 min, prerrequisitos y resultado general de aprendizaje).
2. **Objetivos de aprendizaje** medibles con verbos observables de la **Taxonomía de Bloom**.
3. **Contenidos esenciales** en 4 bloques prácticos (`3.1` a `3.4`) con explicación clara, conceptos clave, definiciones, ejemplo realista, errores frecuentes y preguntas de comprobación.
4. **Metodología didáctica** cronometrada (240 minutos exactos) con rol del formador y del alumnado.
5. **Actividades prácticas** (activación, aplicación y transferencia laboral).
6. **Caso práctico original** distinto por tema con datos numéricos/estructurados, misión y criterios de solución.
7. **Evaluación completa** (diagnóstica, formativa, sumativa, **rúbrica de 4 niveles** y autoevaluación).
8. **Materiales y recursos** (guion slide por slide, ficha, plantilla replicable, recursos con aviso de validación previa y tabla de Glosario).
9. **Adaptaciones** (presencial, online síncrona y asíncrona).
10. **Conexión con el programa + Siguientes pasos para el formador**.

---

## 4. Funcionalidades del Campus Multi-Programa (`campus-certificacion/`)

### 4.1. Página Principal — Selector de Programas (`🏛️ Programas`)
- Muestra los **4 programas** en tarjetas ejecutivas comparativas con progreso independiente, exámenes aprobados, tiempo de estudio registrado y estado del diploma.
- Cambio de programa en 1 clic manteniendo progreso, talleres, notas, tiempos y diplomas aislados por programa.

### 4.2. Clases tipo Presentación Interactiva (🎓 Alumno) y Guía Docente (👩‍🏫 Formador)
- **Modo Alumno:** convierte automáticamente los **180 temas** en presentaciones interactivas de **8 diapositivas visuales** por clase (Portada degradada + Objetivos Bloom, 4 Claves con caja **«💡 Lo más importante»** y 4 pestañas interactivas [Definiciones / Ejemplo Real / Errores / Autochequeo], Caso práctico con botón **«👀 Revelar criterios del experto»**, **Flashcards 3D giratorias** del Glosario y Resumen Ejecutivo + navegación con teclado `←` `→` y pantalla completa).
- **Modo Formador:** muestra la guía didáctica completa de 10 secciones lista para impartir o descargar en `.md`.

### 4.3. Narrador de Audio en Español + Modo «Auto-clase»
- Lectura en voz alta limpia y natural adaptada a la diapositiva y pestaña activa (Web Speech API en español), con velocidad (`0.85x`–`1.5x`), selector de voz en español y avance automático de diapositivas (*Auto-clase*).

### 4.4. Acumulador Inteligente de Tiempo de Estudio
- Conteo en tiempo real con **control anti-inactividad** (pausa tras 3 min sin interacción o al cambiar de pestaña), tiempo global, por programa, por bloque, insignia en vivo por clase, estudiado hoy e historial de sesiones.

### 4.5. 38 Talleres Prácticos Interactivos (con 11 Calculadoras en Tiempo Real)
- **Programa 1 (DIND):** Matriz de Decisión Ponderada (B3), Priorizador RICE + MVP Lean (B4), Unit Economics E-commerce y Última Milla (B6).
- **Programa 2 (Global MBA):** Simulador de Embudo CRO E-commerce (B2), Calculadora SEM / Growth — ROAS y CPA (B5), Matriz de Decisión Comercial (B9), Simulador PyG — EBITDA y Punto de Equilibrio (B11).
- **Programa 3 (PMP):** Calculadora PERT (3 Valores + σ) y EMV de Riesgos (B7), Calculadora Completa de Valor Ganado — EVM (`CV/SV/CPI/SPI/EAC/ETC/VAC/TCPI`, B8).
- **Programa 4 (EMBA):** **Simulador de Elasticidad Precio–Demanda e Impacto en Margen (B2)**, **Calculadora de Valoración DCF / WACC / VAN / Valor Terminal (B3)** y **Simulador de Valoración M&A — EV/EBITDA, Deuda Neta, Prima y Sinergias (B6)**.

### 4.6. 38 Exámenes (190 Preguntas), Diplomas con QR y Verificador Unificado
- **190 preguntas situacionales** (5 por bloque) con corrección inmediata, retroalimentación razonada y nota mínima del **70 %**.
- **Diploma Oficial Digital independiente por programa** (PDF A4 horizontal, personalizable en institución y firmante, sello propio, QR SVG, botón LinkedIn e IDs `CERT-DIND-2026-...`, `CERT-GMBA-2026-...`, `CERT-PMP-2026-...` y `CERT-EMBA-2026-...`).
- **Verificador Público Unificado:** valida códigos emitidos de **cualquiera de los 4 programas** mostrando expediente completo, notas y tiempo registrado.
- **Portafolio `.md` exportable** por programa y panel **🧪 Pruebas (QA)** para simular avance, probar el último examen o emitir cualquier diploma al instante.

---

## 5. Cómo ejecutar el proyecto en local

1. **Servidor local (recomendado):**
   ```powershell
   python -m http.server 8090 --directory "d:\app\Project Management\campus-certificacion"
   ```
   Abrir en el navegador: `http://localhost:8090`
2. **Apertura directa desde disco:** doble clic en `campus-certificacion/index.html`.

---

## 6. Arquitectura Cloud con Supabase y Seguridad

El campus combina **carga estática rápida + base de datos PostgreSQL multiusuario en Supabase**:

1. **Carga bajo demanda (*lazy loading*):** [catalog-meta.js](campus-certificacion/data/catalog-meta.js) (~17 KB) carga instantáneamente el catálogo de los 4 programas en la portada; los módulos `program-*.js` y `assessments-*.js` se inyectan bajo demanda solo al entrar en cada programa.
2. **Esquema PostgreSQL con RLS estricto ([supabase/schema.sql](supabase/schema.sql)):** 8 tablas (`profiles`, `enrollments`, `topic_progress`, `workshop_submissions`, `exam_attempts`, `program_study_time`, `study_sessions`, `certificates`) con `ENABLE ROW LEVEL SECURITY` y políticas basadas en `(select auth.uid()) = user_id`, además de triggers contra escalado de rol y manipulación de estado de revocación.
3. **Verificación pública real por QR (`?verify=CERT-...`):** los códigos QR generados en los diplomas apuntan a la URL pública verificable y consultan la función RPC `public.verify_certificate(p_cert_id)` (`SECURITY DEFINER`, habilitada para `anon` y `authenticated` sin exponer la tabla completa de certificados ni correos privados).
4. **Acceso cerrado y Panel de Administración (`🛡️ Admin`):** con `closedAccess: true` en [supabase-config.js](campus-certificacion/supabase-config.js), el portal exige iniciar sesión (ocultando el autoregistro público) y solo quienes tienen `role = 'admin'` ven **🛡️ Admin** y **🧪 Pruebas**. La Edge Function [admin-users](supabase/functions/admin-users/index.ts) valida el JWT y el rol `admin` en servidor antes de crear, editar, suspender o eliminar usuarios o revocar certificados QR.
5. **Activación:** ejecutar [supabase/schema.sql](supabase/schema.sql) en Supabase SQL Editor, desplegar `admin-users` en Edge Functions, promover al primer administrador vía SQL y desactivar los *User Signups* públicos en Authentication.
