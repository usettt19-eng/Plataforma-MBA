# Portal de Certificaciones Ejecutivas Online (`Plataforma-MBA`)

Plataforma educativa **Multi-Programa** con **Campus de Certificación Online interactivo**, diseñada para mandos intermedios, directores comerciales, *project managers*, emprendedores y altos directivos en transformación digital.

Reúne **4 programas completos (38 bloques · 180 temas · 720 horas de guías didácticas)** accesibles desde un selector unificado con clases tipo presentación interactiva, narrador de audio en español, acumulador inteligente de tiempo de estudio, **11 calculadoras ejecutivas en vivo**, **38 exámenes autoevaluables (190 preguntas)** y diplomas digitales verificables por QR.

---

## Programas incluidos

| Programa | Índice del temario | Bloques | Temas | Carga | Certificado |
|---|---|---:|---:|---|---|
| **🚀 Dirección, Innovación y Negocios Digitales** | [programa/README.md](programa/README.md) | 10 | 57 | 228 h · Híbrida | `CERT-DIND-2026-XXXXXX` |
| **💼 Global MBA en Dirección Comercial y Ventas** | [programa-mba-comercial/README.md](programa-mba-comercial/README.md) | 11 | 70 | 280 h · 90 ECTS · Online | `CERT-GMBA-2026-XXXXXX` |
| **📐 Preparación PMP y Dirección de Proyectos** | [programa-pmp/README.md](programa-pmp/README.md) | 9 | 27 | 108 h · Online | `CERT-PMP-2026-XXXXXX` |
| **🏛️ Executive MBA (EMBA)** | [programa-emba/README.md](programa-emba/README.md) | 8 | 26 | 104 h · 19 Créditos | `CERT-EMBA-2026-XXXXXX` |
| **Total plataforma** | [README_PROYECTO.md](README_PROYECTO.md) | **38** | **180** | **720 h** | **4 diplomas independientes** |

> **Notas de acreditación:**
> - El diploma de *Preparación PMP y Dirección de Proyectos* acredita la formación interna completada y no equivale a la certificación oficial PMP® de PMI (verificar requisitos, PDUs y ECO vigente en PMI.org).
> - El *Executive MBA (EMBA)* es una adaptación didáctica independiente de la estructura modular de 19 créditos; requisitos y costes oficiales deben consultarse en cada institución.

---

## Funcionalidades principales del Campus (`campus-certificacion/`)

- **Página principal de selección de programas (`🏛️ Programas`):** progreso, talleres, notas, tiempo y diplomas aislados por programa.
- **Presentaciones interactivas en Modo Alumno (`🎓`):** 8 diapositivas por tema (Portada + Objetivos Bloom, 4 Claves con pestañas de *Definiciones / Ejemplo Real / Errores / Autochequeo*, Caso Práctico interactivo, Flashcards 3D del glosario y Resumen Ejecutivo).
- **Guía docente completa en Modo Formador (`👩‍🏫`):** las 10 secciones del diseño instruccional (secuencia de 240 min, actividades, rúbrica de 4 niveles, guion de diapositivas y adaptaciones) descargables en `.md`.
- **Narrador de audio en español + Auto-clase (`🔊`):** lectura limpia de diapositivas (Web Speech API), control de velocidad (`0.85x`–`1.5x`), selección de voz y avance automático.
- **Acumulador inteligente de tiempo de estudio (`⏱`):** conteo activo en clases, talleres y exámenes con pausa automática anti-inactividad (3 min o cambio de pestaña) e historial de sesiones.
- **38 Talleres prácticos con calculadoras en tiempo real:** Matriz de Decisión Ponderada, Priorizador RICE + MVP, Unit Economics E-commerce, Embudo CRO, Calculadora SEM/ROAS, Simulador P&G/EBITDA, PERT + EMV de Riesgos, Valor Ganado (EVM), Elasticidad Precio–Demanda, Valoración DCF/WACC/VAN y Valoración M&A (EV/EBITDA).
- **38 Exámenes autoevaluables (190 preguntas situacionales)**, **Diploma PDF A4 horizontal con código QR**, **Verificador Público Unificado** y **Portafolio `.md` exportable**.

---

## Ejecución en local

```bash
python -m http.server 8090 --directory "campus-certificacion"
```

Abrir en el navegador: `http://localhost:8090` (o abrir directamente `campus-certificacion/index.html`).

---

## Despliegue en servidor (ya preconfigurado)

- **GitHub Pages (gratis desde este repo):** en GitHub ve a **Settings → Pages → Source: GitHub Actions**. El workflow [deploy-pages.yml](.github/workflows/deploy-pages.yml) publicará `campus-certificacion/` automáticamente en `https://usettt19-eng.github.io/Plataforma-MBA/`.
- **Netlify / Vercel:** importa este repositorio; ya incluye [netlify.toml](netlify.toml) y [vercel.json](vercel.json) apuntando a `campus-certificacion`.
- **VPS propio con Docker + Nginx:**
  ```bash
  docker build -t plataforma-mba .
  docker run -d -p 80:80 --name plataforma-mba plataforma-mba
  ```
  *(Incluye compresión gzip y caché para `/data/` en [nginx.conf](nginx.conf) y [Dockerfile](Dockerfile)).*

---

## Siguiente paso recomendado (Base de datos en producción)

En esta fase demo el progreso del alumno se almacena localmente en `localStorage`. Para llevarlo a producción multiusuario con cuentas reales y verificación pública centralizada por QR, el siguiente paso es conectar **Supabase (Auth + PostgreSQL + RLS)** junto con carga bajo demanda (*lazy loading*) de los archivos `campus-certificacion/data/program-*.js` (detalles completos en [README_PROYECTO.md](README_PROYECTO.md)).
