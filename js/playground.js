/* ==========================================================================
   INTERACTIVE TOGGLE STUDIO / GENERATOR ENGINE
   Real-time custom toggle builder with instant code generation
   ========================================================================== */

class ToggleStudio {
  constructor() {
    this.state = {
      width: 60,
      height: 32,
      thumbSize: 24,
      trackRadius: 9999,
      thumbRadius: 9999,
      padding: 4,
      speed: 300,
      activeColor: '#0b57d0',
      inactiveColor: '#e1e3e1',
      thumbColor: '#ffffff',
      glowBlur: 0,
      isChecked: true,
      activeTab: 'css'
    };

    this.initElements();
    this.attachListeners();
    this.update();
  }

  initElements() {
    this.previewStage = document.getElementById('studioPreviewStage');
    this.previewToggle = document.getElementById('studioCustomToggle');
    this.previewInput = document.getElementById('studioCustomInput');
    this.previewTrack = document.getElementById('studioCustomTrack');
    this.previewThumb = document.getElementById('studioCustomThumb');
    this.codeDisplay = document.getElementById('studioCodeDisplay');
    this.statusPill = document.getElementById('studioStatePill');

    // Controls
    this.ctrlWidth = document.getElementById('ctrlWidth');
    this.ctrlHeight = document.getElementById('ctrlHeight');
    this.ctrlTrackRadius = document.getElementById('ctrlTrackRadius');
    this.ctrlThumbRadius = document.getElementById('ctrlThumbRadius');
    this.ctrlSpeed = document.getElementById('ctrlSpeed');
    this.ctrlGlow = document.getElementById('ctrlGlow');

    // Colors
    this.ctrlActiveColor = document.getElementById('ctrlActiveColor');
    this.ctrlInactiveColor = document.getElementById('ctrlInactiveColor');
    this.ctrlThumbColor = document.getElementById('ctrlThumbColor');

    // Value Labels
    this.valWidth = document.getElementById('valWidth');
    this.valHeight = document.getElementById('valHeight');
    this.valTrackRadius = document.getElementById('valTrackRadius');
    this.valThumbRadius = document.getElementById('valThumbRadius');
    this.valSpeed = document.getElementById('valSpeed');
    this.valGlow = document.getElementById('valGlow');
  }

  attachListeners() {
    if (!this.ctrlWidth) return;

    const bindSlider = (elem, key, valElem, unit = 'px') => {
      elem.addEventListener('input', (e) => {
        this.state[key] = Number(e.target.value);
        if (valElem) valElem.textContent = `${this.state[key]}${unit}`;
        this.update();
      });
    };

    bindSlider(this.ctrlWidth, 'width', this.valWidth, 'px');
    bindSlider(this.ctrlHeight, 'height', this.valHeight, 'px');
    bindSlider(this.ctrlTrackRadius, 'trackRadius', this.valTrackRadius, 'px');
    bindSlider(this.ctrlThumbRadius, 'thumbRadius', this.valThumbRadius, 'px');
    bindSlider(this.ctrlSpeed, 'speed', this.valSpeed, 'ms');
    bindSlider(this.ctrlGlow, 'glowBlur', this.valGlow, 'px');

    const bindColor = (elem, key) => {
      elem.addEventListener('input', (e) => {
        this.state[key] = e.target.value;
        this.update();
      });
    };

    bindColor(this.ctrlActiveColor, 'activeColor');
    bindColor(this.ctrlInactiveColor, 'inactiveColor');
    bindColor(this.ctrlThumbColor, 'thumbColor');

    if (this.previewInput) {
      this.previewInput.addEventListener('change', (e) => {
        this.state.isChecked = e.target.checked;
        if (window.soundEngine) {
          window.soundEngine.playToggle(this.state.isChecked);
        }
        this.updateVisualState();
      });
    }

    // Backdrop controls
    document.querySelectorAll('.backdrop-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        const bg = dot.dataset.bg;
        if (this.previewStage) {
          this.previewStage.style.background = bg;
        }
      });
    });

    // Tab buttons
    document.querySelectorAll('.studio-tab-btn').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.studio-tab-btn').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.state.activeTab = tab.dataset.tab;
        this.updateCode();
      });
    });

    // Copy Button
    const copyBtn = document.getElementById('studioCopyBtn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const code = this.generateCode(this.state.activeTab);
        navigator.clipboard.writeText(code).then(() => {
          if (window.showSnackbar) {
            window.showSnackbar(`Custom ${this.state.activeTab.toUpperCase()} copied to clipboard!`);
          }
        });
      });
    }
  }

  update() {
    // Recalculate thumb size based on height
    const calculatedThumbSize = Math.max(12, this.state.height - (this.state.padding * 2));
    this.state.thumbSize = calculatedThumbSize;
    this.state.travelDistance = this.state.width - calculatedThumbSize - (this.state.padding * 2);

    // Apply inline style variables to the custom preview toggle
    if (this.previewToggle) {
      this.previewToggle.style.width = `${this.state.width}px`;
      this.previewToggle.style.height = `${this.state.height}px`;

      this.previewTrack.style.borderRadius = `${this.state.trackRadius}px`;
      this.previewTrack.style.transition = `all ${this.state.speed}ms cubic-bezier(0.34, 1.56, 0.64, 1)`;

      this.previewThumb.style.width = `${calculatedThumbSize}px`;
      this.previewThumb.style.height = `${calculatedThumbSize}px`;
      this.previewThumb.style.top = `${this.state.padding}px`;
      this.previewThumb.style.left = `${this.state.padding}px`;
      this.previewThumb.style.borderRadius = `${this.state.thumbRadius}px`;
      this.previewThumb.style.backgroundColor = this.state.thumbColor;
      this.previewThumb.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
      this.previewThumb.style.transition = `transform ${this.state.speed}ms cubic-bezier(0.34, 1.56, 0.64, 1), background-color ${this.state.speed}ms ease`;
    }

    this.updateVisualState();
    this.updateCode();
  }

  updateVisualState() {
    if (!this.previewTrack || !this.previewThumb) return;

    if (this.state.isChecked) {
      this.previewTrack.style.backgroundColor = this.state.activeColor;
      this.previewThumb.style.transform = `translateX(${this.state.travelDistance}px)`;
      if (this.state.glowBlur > 0) {
        this.previewTrack.style.boxShadow = `0 0 ${this.state.glowBlur}px ${this.state.activeColor}`;
      } else {
        this.previewTrack.style.boxShadow = 'none';
      }
      if (this.statusPill) {
        this.statusPill.textContent = 'ACTIVE';
        this.statusPill.classList.add('active');
      }
    } else {
      this.previewTrack.style.backgroundColor = this.state.inactiveColor;
      this.previewThumb.style.transform = 'translateX(0px)';
      this.previewTrack.style.boxShadow = 'none';
      if (this.statusPill) {
        this.statusPill.textContent = 'INACTIVE';
        this.statusPill.classList.remove('active');
      }
    }
  }

  generateCode(type) {
    if (type === 'html') {
      return `<!-- Custom Generated Toggle -->
<label class="custom-switch" aria-label="Custom Switch">
  <input type="checkbox" ${this.state.isChecked ? 'checked' : ''} />
  <span class="custom-track">
    <span class="custom-thumb"></span>
  </span>
</label>`;
    }

    if (type === 'react') {
      return `import React, { useState } from 'react';
import './custom-switch.css';

export function CustomSwitch({ defaultChecked = ${this.state.isChecked}, onChange }) {
  const [checked, setChecked] = useState(defaultChecked);

  const handleToggle = (e) => {
    setChecked(e.target.checked);
    if (onChange) onChange(e.target.checked);
  };

  return (
    <label className="custom-switch">
      <input type="checkbox" checked={checked} onChange={handleToggle} />
      <span className="custom-track">
        <span className="custom-thumb" />
      </span>
    </label>
  );
}`;
    }

    // Default: CSS
    const glowCss = this.state.glowBlur > 0 
      ? `\n  box-shadow: 0 0 ${this.state.glowBlur}px ${this.state.activeColor};` 
      : '';

    return `/* Custom Generated Toggle CSS */
.custom-switch {
  position: relative;
  display: inline-flex;
  width: ${this.state.width}px;
  height: ${this.state.height}px;
  cursor: pointer;
  user-select: none;
}

.custom-switch input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.custom-switch .custom-track {
  position: absolute;
  inset: 0;
  border-radius: ${this.state.trackRadius}px;
  background-color: ${this.state.inactiveColor};
  transition: all ${this.state.speed}ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.custom-switch .custom-thumb {
  position: absolute;
  top: ${this.state.padding}px;
  left: ${this.state.padding}px;
  width: ${this.state.thumbSize}px;
  height: ${this.state.thumbSize}px;
  border-radius: ${this.state.thumbRadius}px;
  background-color: ${this.state.thumbColor};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform ${this.state.speed}ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.custom-switch input:checked + .custom-track {
  background-color: ${this.state.activeColor};${glowCss}
}

.custom-switch input:checked + .custom-track .custom-thumb {
  transform: translateX(${this.state.travelDistance}px);
}`;
  }

  updateCode() {
    if (this.codeDisplay) {
      this.codeDisplay.textContent = this.generateCode(this.state.activeTab);
    }
  }
}

window.ToggleStudio = ToggleStudio;
