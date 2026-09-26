/* ==========================================================================
   DOCUMENTATION ENGINE - TOGGLE DESIGN SYSTEM
   Sidebar routing, component rendering, code tabs, and command palette
   ========================================================================== */

class DocsEngine {
  constructor() {
    this.activeComponentId = 'toggles'; // Start with the flagship toggles showcase or hash
    this.init();
  }

  init() {
    // Check initial hash
    if (window.location.hash) {
      const hashId = window.location.hash.replace('#', '');
      if (window.DOCS_DATA && window.DOCS_DATA[hashId]) {
        this.activeComponentId = hashId;
      }
    }

    this.attachSidebarEvents();
    this.attachCommandPalette();
    this.attachMobileDrawer();
    this.attachRippleEffect();
    this.attachSizeSwitcher();
    this.renderCurrentDoc();

    // Listen to hash changes
    window.addEventListener('hashchange', () => {
      const hashId = window.location.hash.replace('#', '');
      if (window.DOCS_DATA && window.DOCS_DATA[hashId]) {
        this.activeComponentId = hashId;
        this.renderCurrentDoc();
      }
    });
  }

  attachRippleEffect() {
    document.addEventListener('click', (e) => {
      const target = e.target.closest('.toggle-btn, .toggle-fab, .toggle-chip, .sidebar-nav-link, .btn');
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const circle = document.createElement('span');
      const diameter = Math.max(rect.width, rect.height);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - rect.left - radius}px`;
      circle.style.top = `${e.clientY - rect.top - radius}px`;
      circle.classList.add('md-ripple-wave');

      if (getComputedStyle(target).position === 'static') {
        target.style.position = 'relative';
      }
      target.style.overflow = 'hidden';

      const existingRipple = target.querySelector('.md-ripple-wave');
      if (existingRipple) existingRipple.remove();

      target.appendChild(circle);

      setTimeout(() => circle.remove(), 600);
    });
  }

  attachSizeSwitcher() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.demo-size-btn');
      if (!btn) return;

      const container = btn.closest('.toggle-segmented-btn-group');
      if (container) {
        container.querySelectorAll('.demo-size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }

      const scale = btn.dataset.scale || '1';
      const stage = document.getElementById('activeDemoStage');
      if (stage) {
        stage.style.transition = 'transform 250ms cubic-bezier(0.34, 1.56, 0.64, 1)';
        stage.style.transform = `scale(${scale})`;
      }
      if (window.soundEngine) {
        window.soundEngine.playToggle(true);
      }
    });
  }

  attachSidebarEvents() {
    document.querySelectorAll('.sidebar-nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        const id = link.dataset.id;
        if (!id) return;
        e.preventDefault();
        window.location.hash = id;
        this.activeComponentId = id;
        this.renderCurrentDoc();

        // Close mobile drawer if open
        const sidebar = document.getElementById('docsSidebar');
        if (sidebar) sidebar.classList.remove('open');
      });
    });

    // Sidebar search filter
    const searchInput = document.getElementById('sidebarSearch');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const q = e.target.value.toLowerCase().trim();
        document.querySelectorAll('.sidebar-nav-link').forEach(link => {
          const text = link.textContent.toLowerCase();
          const match = text.includes(q);
          link.style.display = match ? 'flex' : 'none';
        });
      });
    }
  }

  renderCurrentDoc() {
    const data = window.DOCS_DATA ? window.DOCS_DATA[this.activeComponentId] : null;
    if (!data) return;

    // Update active state in sidebar
    document.querySelectorAll('.sidebar-nav-link').forEach(link => {
      link.classList.toggle('active', link.dataset.id === this.activeComponentId);
    });

    const canvas = document.getElementById('docCanvas');
    if (!canvas) return;

    // Scroll to top of content
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Handle special pages
    if (data.isTogglesShowcase) {
      this.renderTogglesShowcase(canvas, data);
    } else if (data.isOverview) {
      this.renderOverviewPage(canvas, data);
    } else if (data.isTokensPage) {
      this.renderTokensPage(canvas, data);
    } else if (data.isStudioPage) {
      this.renderStudioPage(canvas, data);
    } else {
      this.renderStandardComponentDoc(canvas, data);
    }

    this.updateTOC();
  }

  renderStandardComponentDoc(canvas, data) {
    canvas.innerHTML = `
      <!-- Breadcrumbs -->
      <div class="docs-breadcrumbs">
        <a href="#overview">Docs</a>
        <span>/</span>
        <a href="#">Components</a>
        <span>/</span>
        <span style="color:var(--md-sys-color-on-surface); font-weight:600;">${data.name}</span>
      </div>

      <!-- Page Header -->
      <div class="doc-page-header">
        <div class="doc-header-top">
          <h1 class="doc-title">${data.name}</h1>
          <div class="doc-badges">
            <span class="doc-badge">
              <span class="material-symbols-rounded">verified</span>
              ${data.badge || 'M3 Component'}
            </span>
            <span class="doc-badge">
              <span class="material-symbols-rounded">devices</span>
              Universal Web
            </span>
          </div>
        </div>
        <p class="doc-description">${data.description}</p>
      </div>

      <!-- Section: Interactive Demo -->
      <section class="doc-section" id="demo">
        <h2 class="doc-section-title">
          <span class="material-symbols-rounded">play_circle</span>
          Interactive Preview
        </h2>
        <div class="doc-demo-container">
          <div class="doc-demo-toolbar">
            <span style="font-size:0.8rem; font-weight:700; text-transform:uppercase; color:var(--md-sys-color-outline); letter-spacing:0.04em;">
              Live Component Sandbox
            </span>
            <div class="doc-demo-tools">
              <!-- Scale Size Switcher -->
              <div class="toggle-segmented-btn-group" style="transform:scale(0.85); transform-origin:right center;">
                <button class="toggle-seg-btn demo-size-btn" data-scale="0.85">Compact</button>
                <button class="toggle-seg-btn demo-size-btn active" data-scale="1">Regular</button>
                <button class="toggle-seg-btn demo-size-btn" data-scale="1.2">Large</button>
              </div>
              <button class="btn btn-secondary" style="padding:6px 14px; font-size:0.8rem;" onclick="showSnackbar('Reset preview state')">
                <span class="material-symbols-rounded" style="font-size:16px;">refresh</span>
                <span>Reset</span>
              </button>
            </div>
          </div>
          <div class="doc-demo-stage" id="activeDemoStage">
            ${data.interactiveHtml}
          </div>

          <!-- Code Tabs -->
          <div class="doc-code-box">
            <div class="doc-code-tabs">
              <div class="doc-tab-group">
                <button class="doc-code-tab active" data-tab="html">HTML</button>
                <button class="doc-code-tab" data-tab="css">CSS</button>
                <button class="doc-code-tab" data-tab="react">React</button>
              </div>
              <button class="btn btn-secondary doc-copy-btn" style="padding:6px 14px; font-size:0.8rem;">
                <span class="material-symbols-rounded" style="font-size:16px;">content_copy</span>
                <span>Copy Code</span>
              </button>
            </div>
            <pre class="doc-code-pre">${data.html}</pre>
          </div>
        </div>
      </section>

      <!-- Section: Variations -->
      <section class="doc-section" id="variations">
        <h2 class="doc-section-title">
          <span class="material-symbols-rounded">widgets</span>
          Variations & Emphasis
        </h2>
        <p class="doc-section-desc">Different emphasis levels and styling variants available for this component.</p>
        <div class="variations-grid">
          ${(data.variations || []).map(v => `
            <div class="variation-card">
              <div class="variation-stage">${v.html}</div>
              <h3 class="variation-card-title">${v.name}</h3>
              <p class="variation-card-desc">${v.desc}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Section: CSS Tokens & API -->
      <section class="doc-section" id="tokens">
        <h2 class="doc-section-title">
          <span class="material-symbols-rounded">palette</span>
          Design Tokens & Variables
        </h2>
        <div class="doc-table-wrap">
          <table class="doc-table">
            <thead>
              <tr>
                <th>Design Token</th>
                <th>Default Value</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              ${(data.tokens || []).map(t => `
                <tr>
                  <td><code class="doc-token-code">${t.token}</code></td>
                  <td>${t.default}</td>
                  <td>${t.desc}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </section>

      <!-- Section: Accessibility -->
      <section class="doc-section" id="accessibility">
        <h2 class="doc-section-title">
          <span class="material-symbols-rounded">accessibility_new</span>
          Accessibility & Standards (WCAG)
        </h2>
        <div class="m3-card m3-card-outlined">
          <p style="font-size:0.95rem; line-height:1.6; color:var(--md-sys-color-on-surface-variant);">
            ${data.wcag || 'Fully compliant with WCAG 2.1 AA standards. Supports keyboard focus, High Contrast mode, and screen readers.'}
          </p>
        </div>
      </section>
    `;

    this.attachCodeTabs(canvas, data);
  }

  renderTogglesShowcase(canvas, data) {
    canvas.innerHTML = `
      <div class="docs-breadcrumbs">
        <a href="#overview">Docs</a>
        <span>/</span>
        <a href="#">Components</a>
        <span>/</span>
        <span style="color:var(--md-sys-color-on-surface); font-weight:600;">Toggles & Switches</span>
      </div>

      <div class="doc-page-header">
        <div class="doc-header-top">
          <h1 class="doc-title">Toggles & Switches</h1>
          <div class="doc-badges">
            <span class="doc-badge"><span class="material-symbols-rounded">auto_awesome</span>24+ Handcrafted</span>
            <span class="doc-badge"><span class="material-symbols-rounded">code_blocks</span>Pure CSS</span>
          </div>
        </div>
        <p class="doc-description">${data.description}</p>
      </div>

      <!-- Quick Action Toolbar -->
      <div style="display:flex; gap:12px; margin-bottom:24px; flex-wrap:wrap;">
        <button id="toggleAllBtn" class="btn btn-primary">
          <span class="material-symbols-rounded">all_inclusive</span>
          <span>Toggle Wave</span>
        </button>
        <button id="luckyBtn" class="btn btn-secondary">
          <span class="material-symbols-rounded">casino</span>
          <span>I'm Feeling Lucky</span>
        </button>
      </div>

      <!-- Category Filter Pills -->
      <div class="filter-bar" style="margin-bottom:24px;">
        <div class="chip-scroll-container">
          <button class="filter-chip active" data-category="all">
            <span class="material-symbols-rounded">apps</span><span>All (24)</span>
          </button>
          <button class="filter-chip" data-category="material">
            <span class="material-symbols-rounded">motion_mode</span><span>Material 3</span>
          </button>
          <button class="filter-chip" data-category="ios">
            <span class="material-symbols-rounded">phone_iphone</span><span>iOS Fluid</span>
          </button>
          <button class="filter-chip" data-category="physics">
            <span class="material-symbols-rounded">waves</span><span>Physics & Elastic</span>
          </button>
          <button class="filter-chip" data-category="glow">
            <span class="material-symbols-rounded">electric_bolt</span><span>Cyber & Glow</span>
          </button>
          <button class="filter-chip" data-category="celestial">
            <span class="material-symbols-rounded">wb_sunny</span><span>Celestial</span>
          </button>
          <button class="filter-chip" data-category="micro">
            <span class="material-symbols-rounded">touch_app</span><span>Micro-interactions</span>
          </button>
        </div>
      </div>

      <!-- Toggles Grid Container -->
      <div id="togglesGrid" class="toggles-grid"></div>
    `;

    // Initialize toggle cards
    if (window.initComponentGrid) {
      window.initComponentGrid();
    }
    if (window.initFilterAndSearch) {
      window.initFilterAndSearch();
    }
    if (window.initGlobalActions) {
      window.initGlobalActions();
    }
  }

  renderOverviewPage(canvas, data) {
    canvas.innerHTML = `
      <div class="docs-breadcrumbs">
        <a href="#overview">Docs</a>
        <span>/</span>
        <span style="color:var(--md-sys-color-on-surface); font-weight:600;">Getting Started</span>
      </div>

      <div class="doc-page-header">
        <h1 class="doc-title">Toggle Design System</h1>
        <p class="doc-description">${data.description}</p>
      </div>

      <div class="doc-section">
        <div class="m3-card m3-card-elevated" style="padding:36px; margin-bottom:32px; background:linear-gradient(135deg, var(--md-sys-color-surface-container-low), var(--md-sys-color-surface-container));">
          <h2 style="font-size:1.8rem; font-weight:800; margin-bottom:12px;">Premium Component Architecture</h2>
          <p style="font-size:1.05rem; line-height:1.6; color:var(--md-sys-color-on-surface-variant); max-width:720px; margin-bottom:24px;">
            The Toggle Design System is built from the ground up with Material Design 3 principles: adaptive dynamic tonal palettes, tactile audio feedback, rounded geometric icons, and lightweight zero-dependency web components.
          </p>
          <div style="display:flex; gap:12px; flex-wrap:wrap;">
            <a href="#toggles" class="btn btn-primary">
              <span class="material-symbols-rounded">toggle_on</span>
              <span>Explore Toggles (24+)</span>
            </a>
            <a href="#buttons" class="btn btn-secondary">
              <span class="material-symbols-rounded">smart_button</span>
              <span>Explore Buttons</span>
            </a>
          </div>
        </div>

        <h3 style="font-size:1.4rem; font-weight:700; margin-bottom:16px;">Core Design Principles</h3>
        <div class="variations-grid" style="margin-bottom:40px;">
          <div class="variation-card">
            <span class="material-symbols-rounded" style="font-size:32px; color:var(--google-blue);">palette</span>
            <h4 class="variation-card-title">Dynamic Material You</h4>
            <p class="variation-card-desc">Tonal palettes generated algorithmically to ensure accessible contrast in both light and dark themes.</p>
          </div>
          <div class="variation-card">
            <span class="material-symbols-rounded" style="font-size:32px; color:var(--google-green);">volume_up</span>
            <h4 class="variation-card-title">Tactile Audio Feedback</h4>
            <p class="variation-card-desc">Synthesized subtle Web Audio API clicks that provide physical satisfaction without downloading any audio files.</p>
          </div>
          <div class="variation-card">
            <span class="material-symbols-rounded" style="font-size:32px; color:var(--google-red);">radio_button_checked</span>
            <h4 class="variation-card-title">Rounded Geometry</h4>
            <p class="variation-card-desc">Material Symbols Rounded with harmonious pill-shaped containers and smooth spring transitions.</p>
          </div>
        </div>
      </div>
    `;
  }

  renderTokensPage(canvas, data) {
    canvas.innerHTML = `
      <div class="docs-breadcrumbs">
        <a href="#overview">Docs</a>
        <span>/</span>
        <span style="color:var(--md-sys-color-on-surface); font-weight:600;">Foundations & Tokens</span>
      </div>

      <div class="doc-page-header">
        <h1 class="doc-title">Design Tokens & Colors</h1>
        <p class="doc-description">${data.description}</p>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">Brand Color Foundation</h2>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:16px; margin-bottom:36px;">
          <div style="background:#4285f4; color:#fff; padding:20px; border-radius:16px; font-weight:700;">Blue<br><span style="font-size:0.8rem;opacity:0.85;">#4285f4</span></div>
          <div style="background:#ea4335; color:#fff; padding:20px; border-radius:16px; font-weight:700;">Red<br><span style="font-size:0.8rem;opacity:0.85;">#ea4335</span></div>
          <div style="background:#fbbc05; color:#000; padding:20px; border-radius:16px; font-weight:700;">Yellow<br><span style="font-size:0.8rem;opacity:0.85;">#fbbc05</span></div>
          <div style="background:#34a853; color:#fff; padding:20px; border-radius:16px; font-weight:700;">Green<br><span style="font-size:0.8rem;opacity:0.85;">#34a853</span></div>
        </div>

        <h2 class="doc-section-title">Surface Elevation Tokens</h2>
        <div class="doc-table-wrap">
          <table class="doc-table">
            <thead>
              <tr><th>Token</th><th>Elevation</th><th>Usage</th></tr>
            </thead>
            <tbody>
              <tr><td><code>--elevation-1</code></td><td>1dp / 2px</td><td>Default cards, buttons</td></tr>
              <tr><td><code>--elevation-2</code></td><td>3dp / 6px</td><td>Hover states, chips</td></tr>
              <tr><td><code>--elevation-3</code></td><td>6dp / 12px</td><td>FABs, menus, navigation rails</td></tr>
              <tr><td><code>--elevation-4</code></td><td>8dp / 24px</td><td>Dialogs, snackbars, modals</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  renderStudioPage(canvas, data) {
    canvas.innerHTML = `
      <div class="docs-breadcrumbs">
        <a href="#overview">Docs</a>
        <span>/</span>
        <span style="color:var(--md-sys-color-on-surface); font-weight:600;">Custom Studio</span>
      </div>

      <div class="doc-page-header">
        <div class="doc-header-top">
          <h1 class="doc-title">Custom Switch Studio</h1>
          <div class="doc-badges">
            <span class="doc-badge"><span class="material-symbols-rounded">tune</span>Interactive Generator</span>
            <span class="doc-badge"><span class="material-symbols-rounded">code</span>Instant Export</span>
          </div>
        </div>
        <p class="doc-description">${data.description}</p>
      </div>

      <div class="studio-card" style="box-shadow:none; border:1px solid var(--md-sys-color-card-border);">
        <div class="studio-grid">
          <!-- Left: Preview Canvas -->
          <div>
            <div id="studioPreviewStage" class="studio-preview-box">
              <div class="studio-canvas-backdrop">
                <div class="backdrop-dot" data-bg="var(--md-sys-color-surface-container-low)" style="background:#f1f5f9;" title="Light Canvas"></div>
                <div class="backdrop-dot" data-bg="#0f172a" style="background:#0f172a;" title="Dark Canvas"></div>
                <div class="backdrop-dot" data-bg="linear-gradient(135deg, #e0e7ff, #ede9fe)" style="background:#e0e7ff;" title="Pastel Gradient"></div>
              </div>

              <!-- Real-time generated toggle -->
              <label id="studioCustomToggle" class="custom-generated-toggle">
                <input type="checkbox" id="studioCustomInput" checked />
                <span id="studioCustomTrack" class="custom-track">
                  <span id="studioCustomThumb" class="custom-thumb"></span>
                </span>
              </label>

              <span id="studioStatePill" class="hero-status-pill active">ACTIVE</span>
            </div>

            <!-- Code Output Display -->
            <div class="studio-code-box">
              <div class="code-box-header">
                <div class="code-tabs">
                  <button class="code-tab studio-tab-btn active" data-tab="css">CSS</button>
                  <button class="code-tab studio-tab-btn" data-tab="html">HTML</button>
                  <button class="code-tab studio-tab-btn" data-tab="react">React</button>
                </div>
                <button id="studioCopyBtn" class="btn btn-secondary" style="padding: 6px 14px; font-size: 0.8rem;">
                  <span class="material-symbols-rounded" style="font-size: 16px;">content_copy</span>
                  <span>Copy Code</span>
                </button>
              </div>
              <pre id="studioCodeDisplay" class="code-pre"></pre>
            </div>
          </div>

          <!-- Right: Interactive Controls -->
          <div class="studio-controls">
            <!-- Width -->
            <div class="control-group">
              <div class="control-label-row">
                <span>Track Width</span>
                <span id="valWidth" class="control-value">60px</span>
              </div>
              <input type="range" id="ctrlWidth" class="control-slider" min="40" max="100" value="60" />
            </div>

            <!-- Height -->
            <div class="control-group">
              <div class="control-label-row">
                <span>Track Height</span>
                <span id="valHeight" class="control-value">32px</span>
              </div>
              <input type="range" id="ctrlHeight" class="control-slider" min="20" max="52" value="32" />
            </div>

            <!-- Track Border Radius -->
            <div class="control-group">
              <div class="control-label-row">
                <span>Track Border Radius</span>
                <span id="valTrackRadius" class="control-value">50px</span>
              </div>
              <input type="range" id="ctrlTrackRadius" class="control-slider" min="0" max="50" value="50" />
            </div>

            <!-- Thumb Border Radius -->
            <div class="control-group">
              <div class="control-label-row">
                <span>Thumb Border Radius</span>
                <span id="valThumbRadius" class="control-value">50px</span>
              </div>
              <input type="range" id="ctrlThumbRadius" class="control-slider" min="0" max="50" value="50" />
            </div>

            <!-- Speed -->
            <div class="control-group">
              <div class="control-label-row">
                <span>Transition Duration</span>
                <span id="valSpeed" class="control-value">300ms</span>
              </div>
              <input type="range" id="ctrlSpeed" class="control-slider" min="100" max="700" step="50" value="300" />
            </div>

            <!-- Glow Blur -->
            <div class="control-group">
              <div class="control-label-row">
                <span>Aura Glow Blur</span>
                <span id="valGlow" class="control-value">0px</span>
              </div>
              <input type="range" id="ctrlGlow" class="control-slider" min="0" max="24" value="0" />
            </div>

            <!-- Color Palette Row -->
            <div class="studio-color-row">
              <div class="color-picker-wrap">
                <label>Active Track</label>
                <input type="color" id="ctrlActiveColor" value="#0b57d0" />
              </div>
              <div class="color-picker-wrap">
                <label>Inactive Track</label>
                <input type="color" id="ctrlInactiveColor" value="#e1e3e1" />
              </div>
              <div class="color-picker-wrap">
                <label>Thumb Color</label>
                <input type="color" id="ctrlThumbColor" value="#ffffff" />
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    if (window.ToggleStudio) {
      new window.ToggleStudio();
    }
  }

  attachCodeTabs(canvas, data) {
    const tabs = canvas.querySelectorAll('.doc-code-tab');
    const pre = canvas.querySelector('.doc-code-pre');
    const copyBtn = canvas.querySelector('.doc-copy-btn');

    let currentTab = 'html';

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentTab = tab.dataset.tab;
        if (pre) {
          pre.textContent = currentTab === 'html' ? data.html : 
                            currentTab === 'css' ? data.css : data.react;
        }
      });
    });

    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const text = currentTab === 'html' ? data.html : 
                     currentTab === 'css' ? data.css : data.react;
        navigator.clipboard.writeText(text).then(() => {
          showSnackbar(`Copied ${currentTab.toUpperCase()} to clipboard!`);
        });
      });
    }
  }

  updateTOC() {
    const tocList = document.getElementById('tocList');
    if (!tocList) return;

    const headings = document.querySelectorAll('.docs-content .doc-section');
    if (headings.length === 0) {
      tocList.innerHTML = `<li><a href="#" class="toc-link active">Overview</a></li>`;
      return;
    }

    tocList.innerHTML = Array.from(headings).map(sec => {
      const id = sec.id;
      const title = sec.querySelector('.doc-section-title')?.textContent.trim() || id;
      return `<li><a href="#${id}" class="toc-link">${title}</a></li>`;
    }).join('');

    // Smooth scroll for TOC links
    tocList.querySelectorAll('.toc-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').replace('#', '');
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  attachCommandPalette() {
    const backdrop = document.getElementById('commandPaletteBackdrop');
    const input = document.getElementById('commandSearchInput');
    const results = document.getElementById('commandResultsList');

    if (!backdrop || !input || !results) return;

    const openPalette = () => {
      backdrop.classList.add('show');
      input.value = '';
      input.focus();
      renderResults('');
    };

    const closePalette = () => {
      backdrop.classList.remove('show');
    };

    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closePalette();
    });

    const renderResults = (query) => {
      const q = query.toLowerCase().trim();
      const keys = Object.keys(window.DOCS_DATA || {});
      const matched = keys.filter(k => {
        const d = window.DOCS_DATA[k];
        return d.name.toLowerCase().includes(q) || d.description.toLowerCase().includes(q);
      });

      results.innerHTML = matched.map(k => {
        const d = window.DOCS_DATA[k];
        return `
          <li class="command-result-item" data-id="${d.id}">
            <span class="material-symbols-rounded" style="color:var(--md-sys-color-primary)">${d.icon || 'widgets'}</span>
            <div>
              <div style="font-weight:700; font-size:0.95rem;">${d.name}</div>
              <div style="font-size:0.78rem; color:var(--md-sys-color-outline);">${d.description.slice(0, 60)}...</div>
            </div>
          </li>
        `;
      }).join('');

      results.querySelectorAll('.command-result-item').forEach(item => {
        item.addEventListener('click', () => {
          const id = item.dataset.id;
          window.location.hash = id;
          this.activeComponentId = id;
          this.renderCurrentDoc();
          closePalette();
        });
      });
    };

    input.addEventListener('input', (e) => renderResults(e.target.value));

    // Global Keybindings: Ctrl+K or /
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openPalette();
      }
      if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
        e.preventDefault();
        openPalette();
      }
      if (e.key === 'Escape' && backdrop.classList.contains('show')) {
        closePalette();
      }
    });

    const headerSearch = document.getElementById('searchInput');
    if (headerSearch) {
      headerSearch.addEventListener('click', openPalette);
    }
  }

  attachMobileDrawer() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.getElementById('docsSidebar');

    if (menuBtn && sidebar) {
      menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
      });
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.docsEngine = new DocsEngine();
});
