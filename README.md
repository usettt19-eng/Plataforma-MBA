# Portal de Certificaciones Ejecutivas Online (`Plataforma-MBA`)

Plataforma educativa **Multi-Programa** con **Campus de Certificación Online interactivo**, diseñada para mandos intermedios, directores comerciales, *project managers*, emprendedores y altos directivos en transformación digital.

Reúne **5 programas completos (44 bloques · 230 temas · 920 horas de guías didácticas)** accesibles desde un selector unificado con clases tipo presentación interactiva, narrador de audio en español, acumulador inteligente de tiempo de estudio, **13 calculadoras en vivo**, **44 exámenes autoevaluables (220 preguntas)**, esquemas técnicos SVG y diplomas digitales verificables por QR.

---

## Programas incluidos

| Programa | Índice del temario | Bloques | Temas | Carga | Certificado |
|---|---|---:|---:|---|---|
| **🚀 Dirección, Innovación y Negocios Digitales** | [programa/README.md](programa/README.md) | 10 | 57 | 228 h · Híbrida | `CERT-DIND-2026-XXXXXX` |
| **💼 Global MBA en Dirección Comercial y Ventas** | [programa-mba-comercial/README.md](programa-mba-comercial/README.md) | 11 | 70 | 280 h · 90 ECTS · Online | `CERT-GMBA-2026-XXXXXX` |
| **📐 Preparación PMP y Dirección de Proyectos** | [programa-pmp/README.md](programa-pmp/README.md) | 9 | 27 | 108 h · Online | `CERT-PMP-2026-XXXXXX` |
| **🏛️ Executive MBA (EMBA)** | [programa-emba/README.md](programa-emba/README.md) | 8 | 26 | 104 h · 19 Créditos | `CERT-EMBA-2026-XXXXXX` |
| **⚡ IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas** | [programa-ia-electrica/README.md](programa-ia-electrica/README.md) | 6 | 50 | 200 h · Técnica BIM + IA | `CERT-IAEL-2026-XXXXXX` |
| **Total plataforma** | [README_PROYECTO.md](README_PROYECTO.md) | **44** | **230** | **920 h** | **5 diplomas independientes** |

> **Notas de acreditación y alcance:**
> - El diploma de *Preparación PMP y Dirección de Proyectos* acredita la formación interna completada y no equivale a la certificación oficial PMP® de PMI (verificar requisitos, PDUs y ECO vigente en PMI.org).
> - El *Executive MBA (EMBA)* es una adaptación didáctica independiente de la estructura modular de 19 créditos; requisitos y costes oficiales deben consultarse en cada institución.
> - *IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas* es una especialización técnica en diseño eléctrico, DIALux, Revit MEP, Twinmotion e IA responsable; no constituye un título MBA ni habilita legalmente para firmar proyectos o instalaciones sin la titulación y verificación normativa aplicable en cada país.

---

## Funcionalidades principales del Campus (`campus-certificacion/`)

- **Página principal de selección de programas (`🏛️ Programas`):** progreso, talleres, notas, tiempo y diplomas aislados por programa, con **carga bajo demanda** (`data/catalog-meta.js` ~20 KB al inicio; cada `program-*.js` se descarga solo al abrirlo).
- **Cuentas en la nube con Supabase (Auth + PostgreSQL + RLS):** registro/gestión por administración con PostgreSQL RLS, migración no destructiva y sincronización automática de temas, notas, talleres, exámenes, historial de estudio y diplomas (con respaldo offline en `localStorage` si navegas sin sesión).
- **Presentaciones interactivas en Modo Alumno (`🎓`):** 8 diapositivas por tema (Portada + Objetivos Bloom + láminas técnicas SVG en `iael`, 4 Claves con pestañas de *Definiciones / Ejemplo Real / Errores / Autochequeo*, Caso Práctico interactivo, Flashcards 3D del glosario y Resumen Ejecutivo).
- **Guía docente completa en Modo Formador (`👩‍🏫`):** las 10 secciones del diseño instruccional (secuencia de 240 min, actividades, rúbrica de 4 niveles, guion de diapositivas y adaptaciones) descargables en `.md`.
- **Narrador de audio en español + Auto-clase (`🔊`):** lectura limpia de diapositivas (Web Speech API), control de velocidad (`0.85x`–`1.5x`), selección de voz y avance automático.
- **Acumulador inteligente de tiempo de estudio (`⏱`):** conteo activo en clases, talleres y exámenes con pausa automática anti-inactividad (3 min o cambio de pestaña) e historial de sesiones.
- **44 Talleres prácticos con 13 calculadoras en tiempo real:** Matriz de Decisión Ponderada, Priorizador RICE + MVP, Unit Economics E-commerce, Embudo CRO, Calculadora SEM/ROAS, Simulador P&G/EBITDA, PERT + EMV de Riesgos, Valor Ganado (EVM), Elasticidad Precio–Demanda, Valoración DCF/WACC/VAN, Valoración M&A (EV/EBITDA), **Carga Eléctrica / Corriente `Ib` / Caída de Tensión `ΔV`** y **Método de los Lúmenes / VEEI**.
- **44 Exámenes autoevaluables (220 preguntas situacionales)**, **Diploma PDF A4 horizontal con código QR real (`?verify=CERT-...`)**, **Verificador Público conectado por RPC (`verify_certificate`)** y **Portafolio `.md` exportable**.

---

## Ejecución en local

```bash
python -m http.server 8090 --directory "campus-certificacion"
```

Abrir en el navegador: `http://localhost:8090` (o abrir directamente `campus-certificacion/index.html`).

---

## Despliegue en servidor y activación de Supabase + Panel Admin

El frontend ya incluye integración con **Supabase** ([supabase/schema.sql](supabase/schema.sql), [supabase/functions/admin-users/index.ts](supabase/functions/admin-users/index.ts), [campus-certificacion/supabase-config.js](campus-certificacion/supabase-config.js) y [campus-certificacion/supabase-client.js](campus-certificacion/supabase-client.js)):

1. **Crear las tablas y políticas RLS:** abre **SQL Editor** en tu proyecto Supabase y ejecuta [supabase/schema.sql](supabase/schema.sql) (incluye 8 tablas con RLS estricto, triggers anti-escalado de rol y la función pública `verify_certificate`).
2. **Desplegar la Edge Function de administración:** sube [supabase/functions/admin-users/index.ts](supabase/functions/admin-users/index.ts) como función `admin-users` en Supabase para habilitar la creación/edición/suspensión de usuarios y revocación de diplomas desde la vista **🛡️ Admin** (sin exponer nunca `service_role` en el navegador).
3. **Acceso privado y primer administrador:** en **Authentication → Providers → Email / User Signups** desactiva el registro público libre y promueve tu cuenta administradora en SQL (`update public.profiles set role = 'admin' where lower(email) = lower('tu@correo');`). El botón **🧪 Pruebas** queda oculto automáticamente para el alumnado.
4. **Conectar clave pública y URL:** verifica `url`, `publishableKey`, `publicBaseUrl` y `closedAccess: true` en [campus-certificacion/supabase-config.js](campus-certificacion/supabase-config.js), y autoriza tu dominio en **Authentication → URL Configuration**.

### Landing Page Comercial y SEO (`landing/`)

La carpeta [landing/](landing/index.html) contiene la web pública de captación y ventas lista para `https://academia.useservices.company/`:
- SEO técnico completo (`canonical`, Open Graph con [og-cover.png](landing/og-cover.png), Twitter Cards, [robots.txt](landing/robots.txt), [sitemap.xml](landing/sitemap.xml) y 4 bloques JSON-LD `schema.org`).
- Explorador completo de los **44 bloques reales**, **2 simuladores interactivos en vivo**, comparativa, planes editables en [landing-config.js](landing/landing-config.js) y formulario conectado a `public.leads` en Supabase ([leads-migration.sql](supabase/leads-migration.sql)).
- Recuerda también ejecutar [supabase/iael-migration.sql](supabase/iael-migration.sql) en SQL Editor si actualizas una base ya existente antes de añadir el 5.º programa (`iael`).
- Configuración Nginx lista en [nginx-academia.conf](landing/nginx-academia.conf).

### Alojamiento estático preconfigurado

- **GitHub Pages (gratis desde este repo):** en GitHub ve a **Settings → Pages → Source: GitHub Actions**. El workflow [deploy-pages.yml](.github/workflows/deploy-pages.yml) publicará `campus-certificacion/` automáticamente en `https://usettt19-eng.github.io/Plataforma-MBA/`.
- **Netlify / Vercel:** importa este repositorio; ya incluye [netlify.toml](netlify.toml) y [vercel.json](vercel.json) apuntando a `campus-certificacion`.
- **VPS propio con Docker + Nginx:**
  ```bash
  docker build -t plataforma-mba .
  docker run -d -p 80:80 --name plataforma-mba plataforma-mba
  ```
  *(Incluye compresión gzip y caché para `/data/` en [nginx.conf](nginx.conf) y [Dockerfile](Dockerfile)).*
