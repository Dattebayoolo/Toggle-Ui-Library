/* ==========================================================================
   APP CONTROLLER - TOGGLE UI LIBRARY
   State management, search, filtering, modal inspector, dynamic themes
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme and Accent Color System
  initThemeSystem();

  // 2. Audio System Setup
  initAudioSystem();

  // 3. Grid Rendering & Cards
  initComponentGrid();

  // 4. Search and Category Filter
  initFilterAndSearch();

  // 5. Code Inspector Modal
  initModalInspector();

  // 6. Global Actions (Toggle All, Feeling Lucky, Shortcuts)
  initGlobalActions();

  // 7. Interactive Studio Initialization
  if (window.ToggleStudio) {
    window.studioInstance = new window.ToggleStudio();
  }
});

/* --------------------------------------------------------------------------
   1. Theme and Accent Color System
   -------------------------------------------------------------------------- */
function initThemeSystem() {
  const html = document.documentElement;
  const themeBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');

  // Load saved theme or system preference
  const savedTheme = localStorage.getItem('toggle_theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  applyTheme(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      showSnackbar(`Switched to ${newTheme === 'dark' ? 'Dark Mode' : 'Light Mode'}`);
    });
  }

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('toggle_theme', theme);
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
    }
  }

  // Accent Color Palette
  const paletteBtn = document.getElementById('paletteBtn');
  const paletteMenu = document.getElementById('paletteMenu');

  if (paletteBtn && paletteMenu) {
    paletteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      paletteMenu.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      paletteMenu.classList.remove('show');
    });

    paletteMenu.querySelectorAll('.color-swatch').forEach(swatch => {
      swatch.addEventListener('click', (e) => {
        e.stopPropagation();
        const h = swatch.dataset.h;
        const s = swatch.dataset.s;
        const l = swatch.dataset.l;
        const name = swatch.dataset.name;

        document.documentElement.style.setProperty('--md-primary-h', h);
        document.documentElement.style.setProperty('--md-primary-s', s);
        document.documentElement.style.setProperty('--md-primary-l', l);

        paletteMenu.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
        paletteMenu.classList.remove('show');

        showSnackbar(`Accent color changed to ${name}`);
      });
    });
  }
}

/* --------------------------------------------------------------------------
   2. Tactile Audio Feedback
   -------------------------------------------------------------------------- */
function initAudioSystem() {
  const soundBtn = document.getElementById('soundToggleBtn');
  const soundIcon = document.getElementById('soundIcon');

  if (soundBtn && soundIcon && window.soundEngine) {
    const updateIcon = () => {
      soundIcon.textContent = window.soundEngine.enabled ? 'volume_up' : 'volume_off';
      soundBtn.classList.toggle('active', window.soundEngine.enabled);
    };

    updateIcon();

    soundBtn.addEventListener('click', () => {
      const isEnabled = window.soundEngine.toggleSound();
      updateIcon();
      showSnackbar(isEnabled ? 'Sound effects enabled' : 'Sound effects muted');
    });
  }
}

/* --------------------------------------------------------------------------
   3. Component Grid Rendering
   -------------------------------------------------------------------------- */
function initComponentGrid() {
  const grid = document.getElementById('togglesGrid');
  const counter = document.getElementById('sectionCounter');
  if (!grid || !window.TOGGLE_CATALOG) return;

  const favorites = JSON.parse(localStorage.getItem('toggle_favorites') || '[]');

  grid.innerHTML = '';
  if (counter) counter.textContent = `${window.TOGGLE_CATALOG.length} Components`;

  window.TOGGLE_CATALOG.forEach(toggle => {
    const card = document.createElement('div');
    card.className = 'toggle-card';
    card.dataset.id = toggle.id;
    card.dataset.category = toggle.category;
    card.dataset.name = toggle.name.toLowerCase();
    card.dataset.tags = toggle.tags.join(' ').toLowerCase();

    const isFav = favorites.includes(toggle.id);

    card.innerHTML = `
      <div class="card-top">
        <div class="card-meta">
          <span class="card-name">${toggle.name}</span>
          <span class="card-category">${toggle.category}</span>
        </div>
        <div class="card-actions">
          <button class="card-btn fav-btn ${isFav ? 'favorited' : ''}" title="Favorite" aria-label="Favorite">
            <span class="material-symbols-rounded ${isFav ? 'filled' : ''}">${isFav ? 'favorite' : 'favorite'}</span>
          </button>
          <button class="card-btn quick-copy-btn" title="Quick Copy CSS" aria-label="Copy CSS">
            <span class="material-symbols-rounded">content_copy</span>
          </button>
        </div>
      </div>

      <div class="card-stage">
        <div class="toggle-render-box">
          ${toggle.html}
        </div>
        <span class="card-state-indicator">INACTIVE</span>
      </div>

      <div class="card-bottom">
        <div class="card-tags">
          ${toggle.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}
        </div>
        <button class="card-code-btn inspect-btn" data-id="${toggle.id}">
          <span class="material-symbols-rounded">code</span>
          <span>Code</span>
        </button>
      </div>
    `;

    // Interactive switch behavior inside the card
    const input = card.querySelector('input[type="checkbox"]');
    const radioInputs = card.querySelectorAll('input[type="radio"]');
    const indicator = card.querySelector('.card-state-indicator');

    if (input) {
      input.addEventListener('change', (e) => {
        const isChecked = e.target.checked;
        if (window.soundEngine) {
          window.soundEngine.playToggle(isChecked);
        }
        if (indicator) {
          indicator.textContent = isChecked ? 'ACTIVE' : 'INACTIVE';
          indicator.classList.toggle('active', isChecked);
        }
      });
    } else if (radioInputs.length > 0) {
      radioInputs.forEach(radio => {
        radio.addEventListener('change', (e) => {
          if (window.soundEngine) window.soundEngine.playToggle(true);
          if (indicator) {
            indicator.textContent = e.target.value.toUpperCase();
            indicator.classList.add('active');
          }
        });
      });
    }

    // Quick Copy button on card top
    const quickCopy = card.querySelector('.quick-copy-btn');
    if (quickCopy) {
      quickCopy.addEventListener('click', (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(toggle.css).then(() => {
          showSnackbar(`Copied CSS for ${toggle.name}!`);
        });
      });
    }

    // Favorite button
    const favBtn = card.querySelector('.fav-btn');
    if (favBtn) {
      favBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        let favs = JSON.parse(localStorage.getItem('toggle_favorites') || '[]');
        const icon = favBtn.querySelector('.material-symbols-rounded');

        if (favs.includes(toggle.id)) {
          favs = favs.filter(id => id !== toggle.id);
          favBtn.classList.remove('favorited');
          icon.classList.remove('filled');
          showSnackbar(`Removed from favorites`);
        } else {
          favs.push(toggle.id);
          favBtn.classList.add('favorited');
          icon.classList.add('filled');
          showSnackbar(`Added to favorites!`);
        }
        localStorage.setItem('toggle_favorites', JSON.stringify(favs));
      });
    }

    grid.appendChild(card);
  });

  // Hero toggle interactivity
  const heroInput = document.getElementById('heroToggleInput');
  const heroStatus = document.getElementById('heroStatusPill');
  if (heroInput && heroStatus) {
    heroInput.addEventListener('change', (e) => {
      const isChecked = e.target.checked;
      if (window.soundEngine) window.soundEngine.playToggle(isChecked);
      heroStatus.textContent = isChecked ? 'Status: Active' : 'Status: Inactive';
      heroStatus.classList.toggle('active', isChecked);
    });
  }
}

/* --------------------------------------------------------------------------
   4. Search & Category Filter
   -------------------------------------------------------------------------- */
function initFilterAndSearch() {
  const searchInput = document.getElementById('searchInput');
  const filterChips = document.querySelectorAll('.filter-chip');
  const cards = document.querySelectorAll('.toggle-card');
  const counter = document.getElementById('sectionCounter');

  let currentCategory = 'all';
  let searchQuery = '';

  const applyFilters = () => {
    let visibleCount = 0;

    cards.forEach(card => {
      const category = card.dataset.category;
      const name = card.dataset.name;
      const tags = card.dataset.tags;
      const id = card.dataset.id;

      const matchesCat = (currentCategory === 'all') || (category === currentCategory);
      const matchesSearch = !searchQuery || 
        name.includes(searchQuery) || 
        tags.includes(searchQuery) || 
        category.includes(searchQuery);

      if (matchesCat && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (counter) {
      counter.textContent = `${visibleCount} Components`;
    }
  };

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentCategory = chip.dataset.category;
      applyFilters();
    });
  });
}

/* --------------------------------------------------------------------------
   5. Code Inspector Modal / Drawer
   -------------------------------------------------------------------------- */
function initModalInspector() {
  const backdrop = document.getElementById('codeModalBackdrop');
  const modalTitle = document.getElementById('modalTitle');
  const modalBadge = document.getElementById('modalBadge');
  const modalPreview = document.getElementById('modalPreviewStage');
  const modalCodeDisplay = document.getElementById('modalCodeDisplay');
  const closeBtn = document.getElementById('modalCloseBtn');
  const copyBtn = document.getElementById('modalCopyBtn');
  const codeTabs = document.querySelectorAll('.modal-code-tab');

  if (!backdrop) return;

  let activeToggle = null;
  let activeTab = 'html';

  const updateModalCode = () => {
    if (!activeToggle) return;
    if (activeTab === 'html') {
      modalCodeDisplay.textContent = activeToggle.html;
    } else if (activeTab === 'css') {
      modalCodeDisplay.textContent = activeToggle.css;
    } else if (activeTab === 'react') {
      modalCodeDisplay.textContent = activeToggle.react;
    }
  };

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.inspect-btn');
    if (!btn) return;

    const toggleId = btn.dataset.id;
    activeToggle = window.TOGGLE_CATALOG.find(t => t.id === toggleId);
    if (!activeToggle) return;

    modalTitle.textContent = activeToggle.name;
    modalBadge.textContent = activeToggle.category.toUpperCase();

    // Render interactive copy in modal preview
    modalPreview.innerHTML = `
      <div class="modal-interactive-switch">
        ${activeToggle.html}
      </div>
      <p style="font-size: 0.85rem; color: var(--md-sys-color-outline); margin-top: 8px;">
        ${activeToggle.description}
      </p>
    `;

    // Hook up sound in modal preview
    const modalInput = modalPreview.querySelector('input[type="checkbox"]');
    if (modalInput) {
      modalInput.addEventListener('change', (ev) => {
        if (window.soundEngine) window.soundEngine.playToggle(ev.target.checked);
      });
    }

    updateModalCode();
    backdrop.classList.add('show');
  });

  const closeModal = () => {
    backdrop.classList.remove('show');
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  codeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      codeTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeTab = tab.dataset.tab;
      updateModalCode();
    });
  });

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      if (!activeToggle) return;
      const textToCopy = activeTab === 'html' ? activeToggle.html : 
                         activeTab === 'css' ? activeToggle.css : activeToggle.react;
      navigator.clipboard.writeText(textToCopy).then(() => {
        showSnackbar(`Copied ${activeTab.toUpperCase()} for ${activeToggle.name}!`);
      });
    });
  }
}

/* --------------------------------------------------------------------------
   6. Global Actions & Shortcuts
   -------------------------------------------------------------------------- */
function initGlobalActions() {
  // Toggle All (Staggered Wave)
  const toggleAllBtn = document.getElementById('toggleAllBtn');
  if (toggleAllBtn) {
    let globalState = false;
    toggleAllBtn.addEventListener('click', () => {
      globalState = !globalState;
      const checkboxes = document.querySelectorAll('.toggles-grid input[type="checkbox"]');
      
      checkboxes.forEach((cb, index) => {
        setTimeout(() => {
          cb.checked = globalState;
          cb.dispatchEvent(new Event('change'));
        }, index * 40); // 40ms stagger wave
      });

      showSnackbar(globalState ? 'Toggled all components ON' : 'Toggled all components OFF');
    });
  }

  // Google "I'm Feeling Lucky" Randomizer
  const luckyBtn = document.getElementById('luckyBtn');
  if (luckyBtn) {
    luckyBtn.addEventListener('click', () => {
      const cards = Array.from(document.querySelectorAll('.toggle-card:not([style*="display: none"])'));
      if (cards.length === 0) return;

      const randomCard = cards[Math.floor(Math.random() * cards.length)];
      randomCard.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Visual flash highlight
      randomCard.style.outline = '3px solid var(--md-sys-color-primary)';
      randomCard.style.boxShadow = 'var(--elevation-5)';

      const input = randomCard.querySelector('input[type="checkbox"]');
      if (input) {
        input.checked = !input.checked;
        input.dispatchEvent(new Event('change'));
      }

      setTimeout(() => {
        randomCard.style.outline = 'none';
        randomCard.style.boxShadow = '';
      }, 1800);

      const name = randomCard.querySelector('.card-name')?.textContent || 'Component';
      showSnackbar(`Feeling Lucky: Activated ${name}!`);
    });
  }

  // Keyboard Shortcuts
  document.addEventListener('keydown', (e) => {
    // Focus search on '/' or 'Ctrl+K'
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
      e.preventDefault();
      const searchInput = document.getElementById('searchInput');
      if (searchInput) searchInput.focus();
    }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      const searchInput = document.getElementById('searchInput');
      if (searchInput) searchInput.focus();
    }
    // Close modal on Escape
    if (e.key === 'Escape') {
      const backdrop = document.getElementById('codeModalBackdrop');
      if (backdrop && backdrop.classList.contains('show')) {
        backdrop.classList.remove('show');
      }
    }
  });
}

/* --------------------------------------------------------------------------
   Google-Style Snackbar / Toast
   -------------------------------------------------------------------------- */
window.showSnackbar = function(message, duration = 3000) {
  let container = document.getElementById('snackbarContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'snackbarContainer';
    container.className = 'snackbar-container';
    document.body.appendChild(container);
  }

  const snackbar = document.createElement('div');
  snackbar.className = 'snackbar';
  snackbar.innerHTML = `
    <span class="material-symbols-rounded snackbar-icon">check_circle</span>
    <span>${message}</span>
  `;

  container.appendChild(snackbar);

  setTimeout(() => {
    snackbar.classList.add('hide');
    setTimeout(() => snackbar.remove(), 250);
  }, duration);
};
