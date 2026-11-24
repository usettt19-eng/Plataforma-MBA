(function () {
  const CFG = window.LANDING_CONFIG || {};
  const CATALOG = window.PROGRAM_CATALOG || {};
  const ORDER = ["dind", "gmba", "pmp", "emba", "iael"].filter((id) => CATALOG[id]);
  const THEME_KEY = "academia_landing_theme_v1";

  const CALCS_BY_PROGRAM = {
    dind: "Incluye 3 simuladores en vivo: Matriz de Decisión Ponderada, Priorizador RICE + MVP Lean y Unit Economics E-commerce.",
    gmba: "Incluye 4 simuladores en vivo: Embudo CRO E-commerce, Calculadora SEM/ROAS/CPA, Matriz Comercial y Simulador P&G / EBITDA.",
    pmp: "Incluye 2 simuladores en vivo: Estimación PERT (3 valores + σ) + EMV Riesgos y Calculadora Completa de Valor Ganado (EVM).",
    emba: "Incluye 3 simuladores en vivo: Elasticidad Precio–Demanda, Valoración DCF / WACC / VAN y Valoración M&A (EV/EBITDA y Sinergias).",
    iael: "Incluye 2 simuladores en vivo: Carga Eléctrica / Corriente Ib / Caída ΔV y Método de los Lúmenes + 6 esquemas técnicos BIM/IA."
  };

  // Apply theme
  if (localStorage.getItem(THEME_KEY) === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }
  document.getElementById("themeToggleBtn").onclick = () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem(THEME_KEY, "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem(THEME_KEY, "dark");
    }
  };

  // Mobile Menu
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navMenu = document.getElementById("navMenu");
  mobileBtn.onclick = () => {
    const open = navMenu.classList.toggle("open");
    mobileBtn.setAttribute("aria-expanded", open ? "true" : "false");
  };
  navMenu.querySelectorAll("a").forEach((a) => {
    a.onclick = () => { navMenu.classList.remove("open"); mobileBtn.setAttribute("aria-expanded", "false"); };
  });

  // Hydrate brand & links from config
  const campusBase = String(CFG.campusUrl || "https://campus.useservices.company").replace(/\/+$/, "");
  const contactEmail = String(CFG.contactEmail || "info@useservices.company").trim();
  const cleanWa = String(CFG.whatsappNumber || "").replace(/[^\d]/g, "");
  function buildWaLink(text) {
    return cleanWa ? `https://wa.me/${cleanWa}?text=${encodeURIComponent(text)}` : "";
  }

  document.getElementById("brandNameText").textContent = CFG.brandName || "USE Services Business School";
  document.getElementById("footerBrandName").textContent = CFG.brandName || "USE Services Business School";
  document.getElementById("footerBrandCopy").textContent = CFG.brandName || "USE Services Business School";
  document.getElementById("navCampusBtn").href = `${campusBase}/`;
  document.getElementById("enrollCampusLoginBtn").href = `${campusBase}/`;
  document.getElementById("footerCampusLink").href = `${campusBase}/`;
  document.getElementById("footerVerifyLink").href = `${campusBase}/?verify=`;

  const enrollEmailEl = document.getElementById("enrollEmailDirectBtn");
  if (enrollEmailEl && contactEmail) {
    enrollEmailEl.href = `mailto:${contactEmail}`;
    enrollEmailEl.textContent = `✉️ ${contactEmail}`;
  }
  const footerEmailEl = document.getElementById("footerEmailLink");
  if (footerEmailEl && contactEmail) {
    footerEmailEl.href = `mailto:${contactEmail}`;
    footerEmailEl.textContent = contactEmail;
  }

  if (cleanWa) {
    const floatEl = document.getElementById("waFloatBtn");
    const directEl = document.getElementById("enrollWaDirectBtn");
    const footerWaEl = document.getElementById("footerWaLink");
    const waUrl = buildWaLink("Hola, me gustaría recibir información para matricularme en la Academia Ejecutiva Online.");
    floatEl.href = waUrl;
    floatEl.style.display = "inline-flex";
    directEl.href = waUrl;
    directEl.style.display = "inline-flex";
    if (footerWaEl) footerWaEl.href = waUrl;
  }

  // Hero Preview Interactive Card
  const previewBody = document.getElementById("heroPreviewBody");
  const PREVIEW_CONTENT = {
    slides: `
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
        <span class="pill">Diapositiva 3 / 8 · Modo Alumno</span>
        <span class="prev-audio-chip">🔊 Narrador ES · 1.15x</span>
      </div>
      <h4 style="margin:12px 0 6px; font-size:16.5px;">02. Valoración Corporativa: WACC, Flujo de Caja Libre y VAN</h4>
      <div class="prev-highlight">
        <strong>💡 Idea clave:</strong> Todo proyecto o adquisición crea valor económico únicamente cuando la rentabilidad del capital supera su coste medio ponderado (ROIC &gt; WACC).
      </div>
      <div style="display:flex; flex-wrap:wrap; gap:6px; font-size:12px;">
        <span class="pill">📌 Definiciones (4)</span>
        <span class="pill">🏢 Ejemplo en Pyme</span>
        <span class="pill">⚠️ Errores típicos</span>
        <span class="pill">🃏 Flashcards 3D</span>
      </div>
    `,
    calcs: `
      <span class="pill">Taller Interactivo · En directo</span>
      <h4 style="margin:12px 0 8px; font-size:16.5px;">Simuladores reales incluidos dentro de cada bloque</h4>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; font-size:12.8px;">
        <div style="padding:10px; background:var(--surface-2); border-radius:10px;"><strong>📊 Finanzas &amp; M&amp;A</strong><br/>DCF, WACC, VAN y Prima + Sinergias</div>
        <div style="padding:10px; background:var(--surface-2); border-radius:10px;"><strong>🛒 E-commerce &amp; Growth</strong><br/>Margen neto, CRO y ROAS/CPA</div>
        <div style="padding:10px; background:var(--surface-2); border-radius:10px;"><strong>📐 PMO &amp; Riesgos</strong><br/>PERT Beta + EMV y Valor Ganado EVM</div>
        <div style="padding:10px; background:var(--surface-2); border-radius:10px;"><strong>⚖️ Estrategia</strong><br/>Elasticidad Precio y Matriz Ponderada</div>
        <div style="padding:10px; background:var(--surface-2); border-radius:10px; grid-column:1 / -1;"><strong>⚡ Ingeniería Eléctrica &amp; BIM</strong><br/>Carga / Caída Tensión ΔV (1F/3F) + Método de Lúmenes / VEEI</div>
      </div>
    `,
    qr: `
      <span class="pill success">✅ Credencial Digital Verificable</span>
      <h4 style="margin:12px 0 6px; font-size:16.5px;">Diploma PDF A4 + Verificador Público QR</h4>
      <p style="margin:0 0 12px; font-size:13.3px; color:var(--text-muted);">
        Al superar todos los bloques (≥ 70 %), el alumno descarga su diploma con identificador único (<code>CERT-GMBA-2026-XXXXXX</code>) y QR escaneable.
      </p>
      <div style="padding:11px 14px; border-radius:11px; background:var(--success-soft); border:1px solid var(--success-border); font-size:12.8px; color:var(--success);">
        <strong>Verificación pública 24/7:</strong> cualquier empresa valida el código al instante sin necesidad de registro.
      </div>
    `
  };
  function setPreviewTab(tab) {
    document.querySelectorAll("[data-preview-tab]").forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-preview-tab") === tab);
    });
    previewBody.innerHTML = PREVIEW_CONTENT[tab] || PREVIEW_CONTENT.slides;
  }
  document.querySelectorAll("[data-preview-tab]").forEach((btn) => {
    btn.onclick = () => setPreviewTab(btn.getAttribute("data-preview-tab"));
  });
  setPreviewTab("slides");

  // Syllabus Explorer (38 real blocks from curriculum-data.js)
  let activeSylProg = ORDER[0] || "dind";
  const sylTabsEl = document.getElementById("syllabusTabs");
  const sylMetaEl = document.getElementById("syllabusMeta");
  const sylGridEl = document.getElementById("syllabusBlocksGrid");
  const sylNoteEl = document.getElementById("syllabusNote");

  function renderSyllabus(pid) {
    activeSylProg = pid;
    const pr = CATALOG[pid];
    if (!pr) return;

    sylTabsEl.innerHTML = ORDER.map((id) => {
      const p = CATALOG[id];
      return `<button type="button" class="syl-tab ${id === pid ? "active" : ""}" data-syl-prog="${id}">${p.icon} ${esc(p.shortName)}</button>`;
    }).join("");
    sylTabsEl.querySelectorAll("[data-syl-prog]").forEach((b) => {
      b.onclick = () => renderSyllabus(b.getAttribute("data-syl-prog"));
    });

    sylMetaEl.innerHTML = `
      <div>
        <strong style="font-size:17px;">${pr.icon} ${esc(pr.programName)}</strong>
        <div style="font-size:13px; color:var(--text-muted); margin-top:2px;">${esc(CALCS_BY_PROGRAM[pid] || "")}</div>
      </div>
      <div style="display:flex; gap:8px; flex-wrap:wrap;">
        <span class="pill">${esc(pr.creditsLabel)}</span>
        <span class="pill">⏱ ${esc(pr.durationLabel)}</span>
        <button type="button" class="btn btn-primary" id="sylEnrollThisBtn">Solicitar este programa →</button>
      </div>
    `;
    document.getElementById("sylEnrollThisBtn").onclick = () => jumpToForm(pid, pid === "all" ? "allAccess" : "individual");

    sylGridEl.innerHTML = (pr.blocks || []).map((b) => `
      <article class="syl-card">
        <div class="syl-card-top">
          <span>${b.icon} ${esc(b.code)}</span>
          <span>${(b.topicIds || []).length} temas · ${b.hours} h</span>
        </div>
        <h4>${esc(b.name)}</h4>
        <p>${esc(b.desc)}</p>
      </article>
    `).join("");

    if (pid === "pmp") {
      sylNoteEl.textContent = "Nota de acreditación: el certificado final acredita las 108 h de formación interna y preparación PMP; no equivale a la certificación oficial otorgada por PMI.";
    } else if (pid === "emba") {
      sylNoteEl.textContent = "Nota curricular: adaptación didáctica independiente inspirada en estructura Executive MBA modular de 19 unidades de crédito.";
    } else if (pid === "iael") {
      sylNoteEl.textContent = "Nota técnica y de alcance: formación especializada de 200 h en diseño eléctrico, DIALux, Revit MEP, Twinmotion e IA; no constituye un título MBA ni sustituye la verificación reglamentaria ni la firma profesional competente en cada país.";
    } else {
      sylNoteEl.textContent = "Todos los bloques incluyen guías interactivas de 8 diapositivas, narrador de audio en español, caso práctico resuelto, taller aplicable y examen situacional.";
    }
  }
  renderSyllabus(activeSylProg);

  function jumpToForm(programVal, planVal) {
    const selPlan = document.getElementById("leadPlan");
    if (selPlan && planVal) selPlan.value = planVal;
    const pickedProg = programVal && programVal !== "all" ? programVal : null;
    syncProgramPicker(selPlan ? selPlan.value : "allAccess", pickedProg, "", !pickedProg);
    document.getElementById("inscripcion").scrollIntoView({ behavior: "smooth" });
    setTimeout(() => { document.getElementById("leadName")?.focus(); }, 450);
  }

  document.querySelectorAll("[data-inspect-prog]").forEach((btn) => {
    btn.onclick = () => {
      renderSyllabus(btn.getAttribute("data-inspect-prog"));
      document.getElementById("temario").scrollIntoView({ behavior: "smooth" });
    };
  });
  document.querySelectorAll("[data-enroll-prog]").forEach((btn) => {
    btn.onclick = () => jumpToForm(btn.getAttribute("data-enroll-prog"), "individual");
  });

  // Live Interactive Calculators in Demo Section
  function updateEcomDemo() {
    const aov = Number(document.getElementById("deAov").value) || 0;
    const cogs = Number(document.getElementById("deCogs").value) || 0;
    const cac = Number(document.getElementById("deCac").value) || 0;
    const ship = Number(document.getElementById("deShip").value) || 0;
    const ret = Number(document.getElementById("deRet").value) || 0;
    const payFee = aov * 0.02;
    const retLoss = (ret / 100) * (ship * 0.75 + 4);
    const net = aov - cogs - cac - ship - payFee - retLoss;
    const pct = aov ? (net / aov) * 100 : 0;
    const ok = net > 0;
    document.getElementById("demoEcomOut").innerHTML = `
      <div class="demo-out-grid">
        <div><small>Beneficio neto por pedido</small><strong style="color:${ok ? "var(--success)" : "var(--danger)"};">$${net.toFixed(2)} (${pct.toFixed(1)} %)</strong></div>
        <div><small>Impacto pasarela + devoluciones</small><strong>-$${(payFee + retLoss).toFixed(2)}</strong></div>
        <div><small>Diagnóstico operativo</small><div style="margin-top:6px;"><span class="pill ${ok ? "success" : "danger"}">${ok ? "✅ 1.er pedido rentable" : "⚠️ Pierdes dinero sin recompra"}</span></div></div>
      </div>
    `;
  }
  function updateEvmDemo() {
    const bac = Math.max(1, Number(document.getElementById("dvBac").value) || 0);
    const pv = Math.max(1, Number(document.getElementById("dvPv").value) || 0);
    const ev = Number(document.getElementById("dvEv").value) || 0;
    const ac = Math.max(1, Number(document.getElementById("dvAc").value) || 0);
    const cpi = ev / ac;
    const spi = ev / pv;
    const eac = cpi > 0 ? bac / cpi : bac;
    document.getElementById("demoEvmOut").innerHTML = `
      <div class="demo-out-grid">
        <div><small>CPI (Eficiencia de coste)</small><strong style="color:${cpi >= 1 ? "var(--success)" : "var(--danger)"};">${cpi.toFixed(2)}</strong></div>
        <div><small>SPI (Eficiencia de plazo)</small><strong style="color:${spi >= 1 ? "var(--success)" : "var(--danger)"};">${spi.toFixed(2)}</strong></div>
        <div><small>Estimación al concluir (EAC)</small><strong>$${Math.round(eac).toLocaleString("en-US")}</strong></div>
        <div><small>Estado del proyecto</small><div style="margin-top:6px;"><span class="pill ${cpi >= 1 && spi >= 1 ? "success" : "danger"}">${cpi >= 1 && spi >= 1 ? "✅ En control" : "⚠️ Acción correctiva"}</span></div></div>
      </div>
    `;
  }
  ["deAov", "deCogs", "deCac", "deShip", "deRet"].forEach((id) => document.getElementById(id).addEventListener("input", updateEcomDemo));
  ["dvBac", "dvPv", "dvEv", "dvAc"].forEach((id) => document.getElementById(id).addEventListener("input", updateEvmDemo));
  updateEcomDemo();
  updateEvmDemo();

  document.querySelectorAll("[data-demo-tab]").forEach((btn) => {
    btn.onclick = () => {
      const target = btn.getAttribute("data-demo-tab");
      document.querySelectorAll("[data-demo-tab]").forEach((b) => b.classList.toggle("active", b === btn));
      document.getElementById("demoPanelEcommerce").classList.toggle("active", target === "ecommerce");
      document.getElementById("demoPanelEvm").classList.toggle("active", target === "evm");
      document.getElementById("demoPanelVerify").classList.toggle("active", target === "verify");
    };
  });

  document.getElementById("demoVerifyGoBtn").onclick = () => {
    const code = document.getElementById("demoVerifyInput").value.trim().toUpperCase();
    window.open(`${campusBase}/?verify=${encodeURIComponent(code)}`, "_blank", "noopener");
  };

  // Pricing Cards (4 package cards in USD) + Corporate B2B Horizontal Banner
  const plans = CFG.plans || {};
  const showPrices = CFG.showPrices !== false;
  const pricingDefs = [
    {
      key: "individual",
      featured: false,
      features: [
        "✓ Acceso completo al programa que elijas",
        "✓ Clases visuales + narrador de audio en español",
        "✓ Calculadoras ejecutivas o técnicas en vivo",
        "✓ Exámenes de bloque + diploma oficial con QR"
      ]
    },
    {
      key: "pack3",
      featured: false,
      features: [
        "✓ Combina 3 programas completos a tu elección",
        "✓ Simuladores en vivo incluidos en tus 3 áreas",
        "✓ Hasta 3 diplomas independientes con QR",
        "✓ Portafolio descargable .md y seguimiento nube"
      ]
    },
    {
      key: "pack4",
      featured: false,
      features: [
        "✓ Combina 4 programas completos a tu elección",
        "✓ Acceso simultáneo 24/7 desde cualquier equipo",
        "✓ Hasta 4 diplomas independientes con QR",
        showPrices ? "✓ Ahorra $1,110 USD frente a programas sueltos" : "✓ Máxima flexibilidad para combinar especialidades"
      ]
    },
    {
      key: "allAccess",
      featured: true,
      features: [
        "✓ Los 5 programas (44 bloques · 230 temas · 920 h)",
        "✓ Las 13 calculadoras y 220 casos de examen",
        "✓ 5 diplomas independientes verificables por QR",
        "✓ Incluye esquemas BIM/IA + portafolio .md"
      ]
    }
  ];

  document.getElementById("pricingGrid").innerHTML = pricingDefs.map((def) => {
    const p = plans[def.key] || {};
    const priceDisplay = showPrices ? (p.price || "Consultar") : "Consultar inversión";
    const badgeText = showPrices ? (p.badge || "") : (def.featured ? "Más Elegido · Acceso Total" : "Plan Flexible");
    const ctaHref = p.ctaUrl ? `href="${esc(p.ctaUrl)}" target="_blank" rel="noopener"` : "";
    return `
      <article class="price-card ${def.featured ? "featured" : ""}">
        <span class="price-badge">${esc(badgeText)}</span>
        <h3>${esc(p.name || def.key)}</h3>
        <p class="price-sub">${esc(p.subtitle || "")}</p>
        <div class="price-val">${esc(priceDisplay)}</div>
        <div class="price-period">${esc(p.period || "")}</div>
        <ul class="price-list">${def.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
        ${p.ctaUrl
          ? `<a class="btn ${def.featured ? "btn-gold" : "btn-primary"}" ${ctaHref}>${esc(p.ctaLabel || "Contratar ahora →")}</a>`
          : `<button type="button" class="btn ${def.featured ? "btn-gold" : "btn-primary"}" data-pick-plan="${def.key}">${esc(p.ctaLabel || "Solicitar acceso →")}</button>`
        }
      </article>
    `;
  }).join("");

  const corp = plans.corporate || {};
  const corpBannerEl = document.getElementById("corporateBanner");
  if (corpBannerEl) {
    const corpPrice = showPrices ? (corp.price || "A medida") : "Consultar inversión";
    const corpHref = corp.ctaUrl ? `href="${esc(corp.ctaUrl)}" target="_blank" rel="noopener"` : "";
    corpBannerEl.innerHTML = `
      <div class="corp-banner-info">
        <span class="price-badge" style="display:inline-block; margin-bottom:10px;">${esc(corp.badge || "Para Empresas y Equipos")}</span>
        <h3>${esc(corp.name || "Plan Corporativo B2B")}</h3>
        <p>${esc(corp.subtitle || "Desde 5 licencias nominales para equipos con facturación oficial en USD y seguimiento de progreso.")}</p>
        <div class="corp-banner-pills">
          <span class="pill">✓ Desde 5 licencias nominales</span>
          <span class="pill">✓ Facturación oficial en USD</span>
          <span class="pill">✓ Seguimiento de horas y diplomas</span>
          <span class="pill">✓ Alta centralizada</span>
        </div>
      </div>
      <div class="corp-banner-cta">
        <div class="price-val">${esc(corpPrice)}</div>
        <div class="price-period">${esc(corp.period || "USD · facturación empresa · alta gestionada")}</div>
        ${corp.ctaUrl
          ? `<a class="btn btn-primary" ${corpHref}>${esc(corp.ctaLabel || "Solicitar propuesta empresa →")}</a>`
          : `<button type="button" class="btn btn-primary" data-pick-plan="corporate">${esc(corp.ctaLabel || "Solicitar propuesta empresa →")}</button>`
        }
      </div>
    `;
  }

  document.querySelectorAll("[data-pick-plan]").forEach((btn) => {
    btn.onclick = () => jumpToForm(null, btn.getAttribute("data-pick-plan"));
  });

  // Interactive Program Picker in Lead Form (1, 3, 4 or 5 programs)
  const PLAN_LIMITS = { individual: 1, pack3: 3, pack4: 4, allAccess: 5, corporate: 5 };
  const leadPlanEl = document.getElementById("leadPlan");
  const pickerEl = document.getElementById("leadProgramPicker");
  const pickerCountEl = document.getElementById("leadProgramCount");
  const pickerHintEl = document.getElementById("leadProgramHint");
  const programCheckboxes = [...document.querySelectorAll('input[name="leadPrograms"]')];

  if (leadPlanEl && plans) {
    leadPlanEl.querySelectorAll("option").forEach((opt) => {
      const p = plans[opt.value];
      if (!p) return;
      if (opt.value === "corporate") {
        opt.textContent = `${p.name || "Plan Corporativo B2B"} (Empresas)`;
      } else if (showPrices && p.price && p.price !== "A medida") {
        opt.textContent = `${p.name} — ${p.price} USD`;
      } else {
        opt.textContent = p.name;
      }
    });
  }

  function getSelectedPrograms() {
    return programCheckboxes.filter((cb) => cb.checked).map((cb) => cb.value);
  }

  function refreshPickerUi(planVal, warnMsg = "") {
    const limit = PLAN_LIMITS[planVal] ?? 5;
    const isAll = planVal === "allAccess";
    const isCorp = planVal === "corporate";
    const selected = getSelectedPrograms();
    programCheckboxes.forEach((cb) => {
      cb.disabled = isAll;
      const item = cb.closest(".prog-pick-item");
      if (item) {
        item.classList.toggle("checked", cb.checked);
        item.classList.toggle("locked", isAll);
      }
    });
    if (pickerCountEl) {
      if (isAll) {
        pickerCountEl.textContent = "✅ 5 / 5 incluidos";
        pickerCountEl.className = "pill success";
      } else if (isCorp) {
        pickerCountEl.textContent = `${selected.length} / 5 programas`;
        pickerCountEl.className = selected.length > 0 ? "pill success" : "pill";
      } else {
        pickerCountEl.textContent = selected.length === limit
          ? `✅ ${selected.length} / ${limit} seleccionados`
          : `${selected.length} / ${limit} seleccionados`;
        pickerCountEl.className = selected.length === limit ? "pill success" : "pill";
      }
    }
    if (pickerHintEl) {
      if (warnMsg) {
        pickerHintEl.textContent = warnMsg;
        pickerHintEl.className = "prog-picker-hint warn";
      } else if (isAll) {
        pickerHintEl.textContent = "Incluye los 5 programas completos. Para elegir un subconjunto, cambia al paquete de 1, 3 o 4 programas.";
        pickerHintEl.className = "prog-picker-hint";
      } else if (isCorp) {
        pickerHintEl.textContent = "Marca los programas que necesita tu equipo (de 1 a 5).";
        pickerHintEl.className = "prog-picker-hint";
      } else {
        const falta = limit - selected.length;
        pickerHintEl.textContent = falta > 0
          ? `Marca ${falta === 1 ? "1 programa" : `exactamente ${falta} programas`} para completar tu paquete.`
          : "✅ Selección completa para este paquete.";
        pickerHintEl.className = "prog-picker-hint";
      }
    }
  }

  function syncProgramPicker(planVal, preselectProg = null, warnMsg = "", clearWhenAmbiguous = false) {
    const limit = PLAN_LIMITS[planVal] ?? 5;
    if (planVal === "allAccess") {
      programCheckboxes.forEach((cb) => { cb.checked = true; });
    } else if (preselectProg && ORDER.includes(preselectProg)) {
      programCheckboxes.forEach((cb) => { cb.checked = cb.value === preselectProg; });
    } else if (planVal === "corporate") {
      const sel = getSelectedPrograms();
      if (sel.length === 0 || clearWhenAmbiguous) {
        programCheckboxes.forEach((cb) => { cb.checked = true; });
      }
    } else {
      const sel = getSelectedPrograms();
      if (clearWhenAmbiguous || sel.length > limit || sel.length === ORDER.length) {
        programCheckboxes.forEach((cb) => { cb.checked = false; });
      }
    }
    refreshPickerUi(planVal, warnMsg);
  }

  if (leadPlanEl) {
    let prevPlan = leadPlanEl.value;
    leadPlanEl.addEventListener("change", () => {
      const nextPlan = leadPlanEl.value;
      const resetSubset = prevPlan === "allAccess" && nextPlan !== "corporate" && nextPlan !== "allAccess";
      prevPlan = nextPlan;
      syncProgramPicker(nextPlan, null, "", resetSubset);
    });
  }

  programCheckboxes.forEach((cb) => {
    cb.addEventListener("change", () => {
      const planVal = leadPlanEl ? leadPlanEl.value : "allAccess";
      const limit = PLAN_LIMITS[planVal] ?? 5;
      let warn = "";
      if (planVal === "individual") {
        if (cb.checked) {
          programCheckboxes.forEach((other) => { if (other !== cb) other.checked = false; });
        }
      } else if (planVal === "pack3" || planVal === "pack4") {
        const checked = getSelectedPrograms();
        if (checked.length > limit) {
          cb.checked = false;
          warn = `Tu paquete incluye ${limit} programas. Desmarca uno o selecciona un paquete superior.`;
        }
      }
      refreshPickerUi(planVal, warn);
    });
  });

  if (pickerEl) {
    syncProgramPicker(leadPlanEl ? leadPlanEl.value : "allAccess");
  }

  // FAQ Accordion
  document.querySelectorAll(".faq-q").forEach((btn) => {
    btn.onclick = () => {
      const item = btn.closest(".faq-item");
      const willOpen = !item.classList.contains("open");
      item.classList.toggle("open", willOpen);
      btn.setAttribute("aria-expanded", willOpen ? "true" : "false");
    };
  });
  document.querySelector(".faq-item")?.classList.add("open");

  // Lead Capture Form -> Supabase POST /rest/v1/leads
  const sp = new URLSearchParams(window.location.search);
  const utm = {
    source: sp.get("utm_source") || "",
    medium: sp.get("utm_medium") || "",
    campaign: sp.get("utm_campaign") || ""
  };

  const leadForm = document.getElementById("leadForm");
  const leadMsg = document.getElementById("leadStatusMsg");
  const leadBtn = document.getElementById("leadSubmitBtn");

  function showLeadMsg(kind, html) {
    leadMsg.className = `lead-msg ${kind}`;
    leadMsg.innerHTML = html;
    leadMsg.style.display = "block";
  }

  leadForm.onsubmit = async (e) => {
    e.preventDefault();
    const planVal = leadPlanEl ? leadPlanEl.value : "allAccess";
    const selectedProgs = getSelectedPrograms();
    const limit = PLAN_LIMITS[planVal] ?? 5;

    if (planVal !== "corporate" && selectedProgs.length !== limit) {
      const msg = `Por favor, marca exactamente ${limit === 1 ? "1 programa" : `${limit} programas`} para el paquete seleccionado (llevas ${selectedProgs.length}).`;
      showLeadMsg("err", `<strong>⚠️ Selección incompleta:</strong> ${esc(msg)}`);
      refreshPickerUi(planVal, msg);
      pickerEl?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    if (planVal === "corporate" && selectedProgs.length < 1) {
      const msg = "Marca al menos 1 programa para tu equipo antes de enviar la solicitud.";
      showLeadMsg("err", `<strong>⚠️ Selección incompleta:</strong> ${esc(msg)}`);
      refreshPickerUi(planVal, msg);
      pickerEl?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const programInterest = selectedProgs.length === ORDER.length ? "all" : selectedProgs.join(",");
    const payload = {
      full_name: document.getElementById("leadName").value.trim(),
      email: document.getElementById("leadEmail").value.trim(),
      phone: document.getElementById("leadPhone").value.trim(),
      company: document.getElementById("leadCompany").value.trim(),
      program_interest: programInterest,
      plan_interest: planVal,
      message: document.getElementById("leadMessage").value.trim(),
      source_url: window.location.href,
      utm_source: utm.source,
      utm_medium: utm.medium,
      utm_campaign: utm.campaign
    };

    leadBtn.disabled = true;
    leadMsg.style.display = "none";

    let savedInSupabase = false;
    const sbUrl = String(CFG.supabaseUrl || "").replace(/\/+$/, "");
    const sbKey = String(CFG.supabasePublishableKey || "").trim();

    if (sbUrl && sbKey) {
      try {
        const headers = {
          "Content-Type": "application/json",
          "apikey": sbKey,
          "Prefer": "return=minimal"
        };
        if (sbKey.split(".").length === 3) {
          headers["Authorization"] = `Bearer ${sbKey}`;
        }
        const res = await fetch(`${sbUrl}/rest/v1/leads`, {
          method: "POST",
          headers,
          body: JSON.stringify(payload)
        });
        savedInSupabase = res.ok;
      } catch {
        savedInSupabase = false;
      }
    }

    leadBtn.disabled = false;

    const planCfg = plans[planVal] || {};
    const planLabel = (showPrices && planCfg.price && planCfg.price !== "A medida")
      ? `${planCfg.name || planVal} (${planCfg.price} USD)`
      : (planCfg.name || planVal);
    const progNames = selectedProgs.map((id) => CATALOG[id]?.shortName || id).join(", ");
    const waSummary = `Hola, soy ${payload.full_name} (${payload.email}). Estoy interesado/a en "${planLabel}" con: ${progNames}.`;
    const waHref = buildWaLink(waSummary);
    const mailHref = `mailto:${encodeURIComponent(contactEmail || "info@useservices.company")}?subject=${encodeURIComponent("Solicitud de plaza — Academia Ejecutiva")}&body=${encodeURIComponent(waSummary + (payload.message ? "\n\n" + payload.message : ""))}`;

    if (savedInSupabase) {
      leadForm.reset();
      if (leadPlanEl) leadPlanEl.value = "allAccess";
      syncProgramPicker("allAccess");
      showLeadMsg(
        "ok",
        `<strong>✅ ¡Solicitud recibida!</strong> Hemos registrado tu interés para <strong>${esc(payload.full_name)}</strong> (${esc(planLabel)}). Nos pondremos en contacto contigo muy pronto para activar tu acceso.` +
        (waHref ? `<div style="margin-top:8px;"><a class="btn btn-primary" href="${esc(waHref)}" target="_blank" rel="noopener">💬 Acelerar atención por WhatsApp</a></div>` : "")
      );
    } else {
      showLeadMsg(
        "ok",
        `<strong>📩 Solicitud lista para enviar:</strong> si aún no está activa la tabla comercial de admisiones, envíanos tu mensaje directo ahora mismo:<div style="margin-top:8px; display:flex; gap:8px; flex-wrap:wrap;">` +
        (waHref ? `<a class="btn btn-primary" href="${esc(waHref)}" target="_blank" rel="noopener">💬 Enviar por WhatsApp</a>` : "") +
        `<a class="btn btn-outline" href="${esc(mailHref)}">✉️ Enviar por correo</a></div>`
      );
    }
  };

  function esc(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
})();
