/* ==========================================================================
   TOGGLE DESIGN SYSTEM - COMPLETE DOCUMENTATION DATA
   Comprehensive specification for Google Material You UI components
   ========================================================================== */

const DOCS_DATA = {
  // ------------------------------------------------------------------------
  // 1. OVERVIEW & GETTING STARTED
  // ------------------------------------------------------------------------
  "overview": {
    id: "overview",
    name: "Design System Overview",
    category: "getting-started",
    icon: "dashboard_customize",
    badge: "v3.2 Official",
    description: "Toggle is a next-generation, global design system inspired by Google Material You. Crafted with adaptive color theming, tactile audio feedback, rounded geometric iconography, and zero-dependency vanilla web components.",
    isOverview: true
  },

  // ------------------------------------------------------------------------
  // 2. BUTTONS & FABS
  // ------------------------------------------------------------------------
  "buttons": {
    id: "buttons",
    name: "Buttons & FABs",
    category: "actions",
    icon: "smart_button",
    badge: "M3 Core",
    description: "Buttons communicate actions that users can take. Toggle provides 5 emphasis levels plus Floating Action Buttons (FABs) and segmented controls.",
    interactiveHtml: `
      <div style="display:flex; gap:16px; flex-wrap:wrap; align-items:center; justify-content:center;">
        <button class="toggle-btn toggle-btn-filled">
          <span class="material-symbols-rounded">add</span>
          <span>Filled Button</span>
        </button>
        <button class="toggle-btn toggle-btn-tonal">
          <span class="material-symbols-rounded">favorite</span>
          <span>Tonal Button</span>
        </button>
        <button class="toggle-btn toggle-btn-outlined">
          <span class="material-symbols-rounded">bookmark</span>
          <span>Outlined</span>
        </button>
        <button class="toggle-btn toggle-btn-text">
          <span>Text Button</span>
        </button>
        <button class="toggle-fab" title="Floating Action Button" aria-label="Add item">
          <span class="material-symbols-rounded">edit</span>
        </button>
        <button class="toggle-fab-extended" title="Extended FAB" aria-label="Compose email">
          <span class="material-symbols-rounded">draw</span>
          <span>Compose</span>
        </button>
      </div>
    `,
    html: `<!-- Filled Button -->
<button class="toggle-btn toggle-btn-filled">
  <span class="material-symbols-rounded">add</span>
  <span>Filled Button</span>
</button>

<!-- Tonal Button -->
<button class="toggle-btn toggle-btn-tonal">
  <span class="material-symbols-rounded">favorite</span>
  <span>Tonal Button</span>
</button>

<!-- Outlined Button -->
<button class="toggle-btn toggle-btn-outlined">
  <span>Outlined Button</span>
</button>

<!-- Floating Action Button (FAB) -->
<button class="toggle-fab" aria-label="Edit">
  <span class="material-symbols-rounded">edit</span>
</button>`,
    css: `/* Filled Button */
.toggle-btn-filled {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 24px;
  border-radius: 9999px;
  background-color: var(--md-sys-color-primary, #0b57d0);
  color: #ffffff;
  border: none;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  transition: all 150ms ease;
}
.toggle-btn-filled:hover {
  filter: brightness(0.92);
  transform: translateY(-1px);
}

/* Floating Action Button (FAB) */
.toggle-fab {
  width: 56px;
  height: 56px;
  border-radius: 18px;
  background-color: var(--md-sys-color-primary-container, #d3e3fd);
  color: var(--md-sys-color-on-primary-container, #041e49);
  border: none;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
.toggle-fab:hover {
  transform: scale(1.05);
}`,
    react: `export function Button({ variant = 'filled', icon, children, onClick }) {
  return (
    <button className={\`toggle-btn toggle-btn-\${variant}\`} onClick={onClick}>
      {icon && <span className="material-symbols-rounded">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}`,
    variations: [
      { name: "Filled (High Emphasis)", desc: "For primary screen actions", html: `<button class="toggle-btn toggle-btn-filled"><span class="material-symbols-rounded">check</span><span>Save</span></button>` },
      { name: "Tonal (Medium Emphasis)", desc: "Alternative high-priority actions", html: `<button class="toggle-btn toggle-btn-tonal"><span class="material-symbols-rounded">star</span><span>Starred</span></button>` },
      { name: "Outlined (Medium-Low)", desc: "Secondary screen actions", html: `<button class="toggle-btn toggle-btn-outlined"><span>Cancel</span></button>` },
      { name: "Segmented Button Group", desc: "Select between related modes", html: `<div class="toggle-segmented-btn-group"><button class="toggle-seg-btn active">Day</button><button class="toggle-seg-btn">Week</button><button class="toggle-seg-btn">Month</button></div>` }
    ],
    tokens: [
      { token: "--toggle-btn-height", default: "40px", desc: "Standard container height" },
      { token: "--toggle-btn-radius", default: "9999px", desc: "Full rounded pill corner radius" },
      { token: "--toggle-fab-radius", default: "18px", desc: "M3 Squircle shape for FAB" }
    ],
    wcag: "Supports keyboard focus ring with visible 2px offset outline. Meets contrast ratio of 4.5:1 against surfaces."
  },

  // ------------------------------------------------------------------------
  // 3. TOGGLES & SWITCHES
  // ------------------------------------------------------------------------
  "toggles": {
    id: "toggles",
    name: "Toggles & Switches",
    category: "actions",
    icon: "toggle_on",
    badge: "24+ Styles",
    description: "Switches toggle the state of a single item on or off. The Toggle Design System features 24+ distinct switch designs including Material 3, celestial themes, elastic springs, and retro models.",
    isTogglesShowcase: true
  },

  // ------------------------------------------------------------------------
  // 4. CHECKBOXES & RADIOS
  // ------------------------------------------------------------------------
  "checkboxes": {
    id: "checkboxes",
    name: "Checkboxes & Radios",
    category: "actions",
    icon: "check_box",
    badge: "Selection",
    description: "Selection controls let users select options from a set. Checkboxes allow multiple selections, while radio buttons allow a single option.",
    interactiveHtml: `
      <div style="display:flex; gap:36px; flex-wrap:wrap; align-items:center; justify-content:center;">
        <label class="toggle-checkbox-label">
          <input type="checkbox" checked />
          <span class="toggle-checkbox-box">
            <span class="material-symbols-rounded">check</span>
          </span>
          <span>Notifications</span>
        </label>
        <label class="toggle-checkbox-label">
          <input type="checkbox" />
          <span class="toggle-checkbox-box">
            <span class="material-symbols-rounded">check</span>
          </span>
          <span>Auto-sync Cloud</span>
        </label>
        <div style="display:flex; gap:16px;">
          <label class="toggle-radio-label">
            <input type="radio" name="demo-radio" value="1" checked />
            <span class="toggle-radio-circle"><span class="toggle-radio-inner"></span></span>
            <span>Cloud Drive</span>
          </label>
          <label class="toggle-radio-label">
            <input type="radio" name="demo-radio" value="2" />
            <span class="toggle-radio-circle"><span class="toggle-radio-inner"></span></span>
            <span>Local Storage</span>
          </label>
        </div>
      </div>
    `,
    html: `<!-- Custom Accessible Checkbox -->
<label class="toggle-checkbox-label">
  <input type="checkbox" checked />
  <span class="toggle-checkbox-box">
    <span class="material-symbols-rounded">check</span>
  </span>
  <span>Allow Camera Access</span>
</label>

<!-- Radio Option -->
<label class="toggle-radio-label">
  <input type="radio" name="storage" value="cloud" checked />
  <span class="toggle-radio-circle">
    <span class="toggle-radio-inner"></span>
  </span>
  <span>Cloud Sync</span>
</label>`,
    css: `.toggle-checkbox-box {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 2px solid var(--md-sys-color-outline);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 150ms ease;
}
input:checked + .toggle-checkbox-box {
  background-color: var(--md-sys-color-primary);
  border-color: var(--md-sys-color-primary);
}
.toggle-radio-circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid var(--md-sys-color-outline);
  display: flex;
  align-items: center;
  justify-content: center;
}
input:checked + .toggle-radio-circle .toggle-radio-inner {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--md-sys-color-primary);
}`,
    react: `export function Checkbox({ checked, onChange, label }) {
  return (
    <label className="toggle-checkbox-label">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="toggle-checkbox-box">
        <span className="material-symbols-rounded">check</span>
      </span>
      <span>{label}</span>
    </label>
  );
}`,
    variations: [
      { name: "Checked State", desc: "Solid primary background with check", html: `<span class="toggle-checkbox-box" style="background:var(--md-sys-color-primary); border-color:var(--md-sys-color-primary);"><span class="material-symbols-rounded" style="color:#fff;opacity:1;transform:scale(1);">check</span></span>` },
      { name: "Unchecked State", desc: "Neutral outline contour", html: `<span class="toggle-checkbox-box"></span>` },
      { name: "Radio Active", desc: "Concentric circle indicator", html: `<span class="toggle-radio-circle" style="border-color:var(--md-sys-color-primary);"><span class="toggle-radio-inner" style="transform:scale(1)"></span></span>` }
    ],
    tokens: [
      { token: "--toggle-check-size", default: "20px", desc: "Size of checkbox box" },
      { token: "--toggle-check-radius", default: "4px", desc: "Corner rounding of checkbox" }
    ],
    wcag: "Uses native hidden input element to preserve full keyboard tab sequence and ARIA status."
  },

  // ------------------------------------------------------------------------
  // 5. SLIDERS & RANGE
  // ------------------------------------------------------------------------
  "sliders": {
    id: "sliders",
    name: "Sliders & Range",
    category: "actions",
    icon: "linear_scale",
    badge: "Continuous",
    description: "Sliders let users make selections from a range of values, such as volume, brightness, or applying image filters.",
    interactiveHtml: `
      <div style="width:100%; max-width:440px; display:flex; flex-direction:column; gap:24px;">
        <div class="toggle-slider-wrap">
          <div style="display:flex; justify-content:space-between; font-size:0.88rem; font-weight:600;">
            <span style="display:flex; align-items:center; gap:6px;">
              <span class="material-symbols-rounded" style="font-size:18px;">volume_up</span>
              Master Volume
            </span>
            <span id="sliderVal1" style="font-family:var(--font-mono);">75%</span>
          </div>
          <input type="range" class="toggle-slider" min="0" max="100" value="75" oninput="document.getElementById('sliderVal1').textContent = this.value + '%'" />
        </div>

        <div class="toggle-slider-wrap">
          <div style="display:flex; justify-content:space-between; font-size:0.88rem; font-weight:600;">
            <span style="display:flex; align-items:center; gap:6px;">
              <span class="material-symbols-rounded" style="font-size:18px;">light_mode</span>
              Display Brightness
            </span>
            <span id="sliderVal2" style="font-family:var(--font-mono);">40%</span>
          </div>
          <input type="range" class="toggle-slider" min="0" max="100" value="40" oninput="document.getElementById('sliderVal2').textContent = this.value + '%'" />
        </div>
      </div>
    `,
    html: `<div class="toggle-slider-wrap">
  <label for="vol">Volume</label>
  <input type="range" id="vol" class="toggle-slider" min="0" max="100" value="75" />
</div>`,
    css: `.toggle-slider {
  -webkit-appearance: none;
  width: 100%;
  height: 16px;
  border-radius: 9999px;
  background: var(--md-sys-color-surface-container-highest);
  outline: none;
}
.toggle-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  background-color: var(--md-sys-color-primary);
  border: 4px solid var(--md-sys-color-surface);
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  cursor: pointer;
  transition: transform 150ms ease;
}
.toggle-slider::-webkit-slider-thumb:hover {
  transform: scale(1.15);
}`,
    react: `export function Slider({ value, onChange, min = 0, max = 100, label }) {
  return (
    <div className="toggle-slider-wrap">
      {label && <label>{label}</label>}
      <input 
        type="range" 
        className="toggle-slider" 
        min={min} 
        max={max} 
        value={value} 
        onChange={(e) => onChange(Number(e.target.value))} 
      />
    </div>
  );
}`,
    variations: [
      { name: "Continuous Slider", desc: "Smooth unquantized value adjustment", html: `<input type="range" class="toggle-slider" value="60" style="width:200px" />` },
      { name: "Icon Integrated", desc: "Leading & trailing icons", html: `<div style="display:flex;align-items:center;gap:8px;"><span class="material-symbols-rounded">brightness_low</span><input type="range" class="toggle-slider" style="width:140px"/><span class="material-symbols-rounded">brightness_high</span></div>` }
    ],
    tokens: [
      { token: "--toggle-slider-track-height", default: "16px", desc: "Pill track thickness" },
      { token: "--toggle-slider-thumb-size", default: "24px", desc: "Draggable handle diameter" }
    ],
    wcag: "Arrow keys (Left/Right/Up/Down) step through values with appropriate ARIA aria-valuenow attributes."
  },

  // ------------------------------------------------------------------------
  // 6. INPUTS & TEXT FIELDS
  // ------------------------------------------------------------------------
  "inputs": {
    id: "inputs",
    name: "Inputs & Text Fields",
    category: "forms",
    icon: "edit_note",
    badge: "Forms",
    description: "Text fields let users enter and edit text. Toggle implements the Material You floating label architecture.",
    interactiveHtml: `
      <div style="display:flex; gap:24px; flex-wrap:wrap; justify-content:center; width:100%; max-width:600px;">
        <div class="toggle-textfield">
          <input type="text" id="demoInput1" placeholder=" " value="Alex Morgan" />
          <label for="demoInput1">Full Name</label>
          <span class="toggle-textfield-hint">Enter your official name</span>
        </div>
        <div class="toggle-textfield">
          <input type="email" id="demoInput2" placeholder=" " value="alex@example.com" />
          <label for="demoInput2">Email Address</label>
          <span class="toggle-textfield-hint">Work email for account notifications</span>
        </div>
      </div>
    `,
    html: `<div class="toggle-textfield">
  <input type="text" id="username" placeholder=" " />
  <label for="username">Username</label>
  <span class="toggle-textfield-hint">Must be 4-16 characters</span>
</div>`,
    css: `.toggle-textfield {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 380px;
}
.toggle-textfield input {
  height: 54px;
  padding: 16px 16px 0;
  border-radius: 8px;
  border: 1px solid var(--md-sys-color-outline);
  background: transparent;
  outline: none;
  font-size: 0.95rem;
  transition: all 150ms ease;
}
.toggle-textfield input:focus {
  border-color: var(--md-sys-color-primary);
  border-width: 2px;
}
.toggle-textfield label {
  position: absolute;
  left: 16px;
  top: 16px;
  color: var(--md-sys-color-outline);
  pointer-events: none;
  transition: all 150ms ease;
}
.toggle-textfield input:focus ~ label,
.toggle-textfield input:not(:placeholder-shown) ~ label {
  top: 6px;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--md-sys-color-primary);
}`,
    react: `export function TextField({ label, hint, value, onChange, type = 'text' }) {
  return (
    <div className="toggle-textfield">
      <input type={type} placeholder=" " value={value} onChange={onChange} />
      <label>{label}</label>
      {hint && <span className="toggle-textfield-hint">{hint}</span>}
    </div>
  );
}`,
    variations: [
      { name: "Outlined Floating Label", desc: "Default clean border", html: `<div class="toggle-textfield" style="max-width:220px"><input type="text" placeholder=" " value="Search"/><label>Query</label></div>` }
    ],
    tokens: [
      { token: "--toggle-input-height", default: "54px", desc: "Standard text field height" },
      { token: "--toggle-input-radius", default: "8px", desc: "M3 corner rounding" }
    ],
    wcag: "Floating label ensures accessible field naming without displacing placeholder values."
  },

  // ------------------------------------------------------------------------
  // 7. CHIPS & BADGES
  // ------------------------------------------------------------------------
  "chips": {
    id: "chips",
    name: "Chips & Badges",
    category: "data",
    icon: "label",
    badge: "Tags",
    description: "Chips help people enter information, make selections, filter content, or trigger actions. Badges provide visual cues for notifications or counts.",
    interactiveHtml: `
      <div style="display:flex; flex-direction:column; gap:20px; align-items:center;">
        <div class="toggle-chip-group">
          <button class="toggle-chip active">
            <span class="material-symbols-rounded">check</span>
            <span>All Updates</span>
          </button>
          <button class="toggle-chip">
            <span class="material-symbols-rounded">schedule</span>
            <span>Recent</span>
          </button>
          <button class="toggle-chip">
            <span class="material-symbols-rounded">star</span>
            <span>Starred</span>
          </button>
          <button class="toggle-chip">
            <span class="material-symbols-rounded">person</span>
            <span>Assigned to me</span>
          </button>
        </div>
        <div style="display:flex; gap:12px; align-items:center;">
          <span class="toggle-badge toggle-badge-primary">NEW FEATURE</span>
          <span class="toggle-badge toggle-badge-success">OPERATIONAL</span>
          <span class="toggle-badge toggle-badge-warning">MAINTENANCE</span>
          <span class="toggle-badge toggle-badge-error">DEPRECATED</span>
        </div>
      </div>
    `,
    html: `<!-- Filter Chip -->
<button class="toggle-chip active">
  <span class="material-symbols-rounded">check</span>
  <span>Active Filter</span>
</button>

<!-- Status Badge -->
<span class="toggle-badge toggle-badge-success">ACTIVE</span>`,
    css: `.toggle-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 0 14px;
  border-radius: 8px;
  border: 1px solid var(--md-sys-color-outline-variant);
  background-color: var(--md-sys-color-surface);
  color: var(--md-sys-color-on-surface-variant);
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 150ms ease;
}
.toggle-chip.active {
  background-color: var(--md-sys-color-primary-container);
  color: var(--md-sys-color-on-primary-container);
  border-color: transparent;
}`,
    react: `export function Chip({ label, icon, active, onClick }) {
  return (
    <button className={\`toggle-chip \${active ? 'active' : ''}\`} onClick={onClick}>
      {icon && <span className="material-symbols-rounded">{icon}</span>}
      <span>{label}</span>
    </button>
  );
}`,
    variations: [
      { name: "Filter Chip", desc: "Toggles filter criteria", html: `<button class="toggle-chip active"><span class="material-symbols-rounded">done</span><span>Filter</span></button>` },
      { name: "Assist Chip", desc: "Triggers immediate smart actions", html: `<button class="toggle-chip"><span class="material-symbols-rounded">event</span><span>Add to Calendar</span></button>` }
    ],
    tokens: [
      { token: "--toggle-chip-height", default: "32px", desc: "Chip vertical size" },
      { token: "--toggle-chip-radius", default: "8px", desc: "M3 chip corner roundness" }
    ],
    wcag: "Chip buttons support keyboard Space/Enter selection and aria-pressed states."
  },

  // ------------------------------------------------------------------------
  // 8. PROGRESS INDICATORS
  // ------------------------------------------------------------------------
  "progress": {
    id: "progress",
    name: "Progress Indicators",
    category: "feedback",
    icon: "progress_activity",
    badge: "Animated",
    description: "Progress indicators express an unspecified wait time or display the length of a process. Features a 4-color morphing circular spinner.",
    interactiveHtml: `
      <div style="display:flex; flex-direction:column; gap:36px; align-items:center; width:100%; max-width:480px;">
        <div style="width:100%;">
          <p style="font-size:0.85rem; font-weight:600; margin-bottom:8px;">Linear Indeterminate Progress</p>
          <div class="toggle-linear-progress indeterminate">
            <div class="toggle-linear-progress-bar"></div>
          </div>
        </div>

        <div style="display:flex; align-items:center; gap:32px;">
          <div style="text-align:center;">
            <svg class="toggle-google-spinner" viewBox="0 0 50 50">
              <circle cx="25" cy="25" r="20"></circle>
            </svg>
            <p style="font-size:0.75rem; color:var(--md-sys-color-outline); margin-top:8px;">4-Color Morph Spinner</p>
          </div>

          <div style="text-align:center;">
            <div class="toggle-linear-progress" style="width:160px; height:8px; border-radius:4px;">
              <div class="toggle-linear-progress-bar" style="width:68%; background:var(--google-green);"></div>
            </div>
            <p style="font-size:0.75rem; color:var(--md-sys-color-outline); margin-top:8px;">Determinate (68%)</p>
          </div>
        </div>
      </div>
    `,
    html: `<!-- Linear Indeterminate -->
<div class="toggle-linear-progress indeterminate">
  <div class="toggle-linear-progress-bar"></div>
</div>

<!-- 4-Color Circular Spinner -->
<svg class="toggle-google-spinner" viewBox="0 0 50 50">
  <circle cx="25" cy="25" r="20"></circle>
</svg>`,
    css: `.toggle-google-spinner {
  width: 40px;
  height: 40px;
  animation: spinnerRotate 2s linear infinite;
}
.toggle-google-spinner circle {
  fill: none;
  stroke-width: 4;
  stroke-linecap: round;
  animation: spinnerDash 1.5s ease-in-out infinite, spinnerColor 6s ease-in-out infinite;
}
@keyframes spinnerRotate { 100% { transform: rotate(360deg); } }
@keyframes spinnerColor {
  0%, 100% { stroke: #4285f4; }
  25% { stroke: #ea4335; }
  50% { stroke: #fbbc05; }
  75% { stroke: #34a853; }
}`,
    react: `export function ColorSpinner({ size = 40 }) {
  return (
    <svg className="toggle-google-spinner" style={{ width: size, height: size }} viewBox="0 0 50 50">
      <circle cx="25" cy="25" r="20" />
    </svg>
  );
}`,
    variations: [
      { name: "Circular Color Morph", desc: "Rotates through blue, red, yellow, green", html: `<svg class="toggle-google-spinner" viewBox="0 0 50 50" style="width:32px;height:32px"><circle cx="25" cy="25" r="20"></circle></svg>` },
      { name: "Linear Determinate", desc: "Fixed percentage completion", html: `<div class="toggle-linear-progress" style="width:120px"><div class="toggle-linear-progress-bar" style="width:80%"></div></div>` }
    ],
    tokens: [
      { token: "--toggle-progress-height", default: "4px", desc: "Linear bar height" },
      { token: "--toggle-spinner-stroke", default: "4px", desc: "Circular spinner stroke width" }
    ],
    wcag: "Includes role='progressbar' and appropriate aria-valuenow/aria-valuemin/aria-valuemax attributes."
  },

  // ------------------------------------------------------------------------
  // 9. CARDS & BENTO SURFACES
  // ------------------------------------------------------------------------
  "cards": {
    id: "cards",
    name: "Cards & Bento Surfaces",
    category: "data",
    icon: "dashboard",
    badge: "Surfaces",
    description: "Cards contain content and actions about a single subject. Styled with Material 3 elevation and rounded corners.",
    interactiveHtml: `
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:20px; width:100%; max-width:760px;">
        <div class="m3-card m3-card-elevated">
          <span class="material-symbols-rounded" style="color:var(--google-blue); font-size:28px; margin-bottom:12px;">cloud_sync</span>
          <h4 style="font-weight:700; margin-bottom:6px;">Elevated Card</h4>
          <p style="font-size:0.85rem; color:var(--md-sys-color-outline);">Soft shadow elevation with smooth lift on hover.</p>
        </div>
        <div class="m3-card m3-card-filled">
          <span class="material-symbols-rounded" style="color:var(--google-green); font-size:28px; margin-bottom:12px;">security</span>
          <h4 style="font-weight:700; margin-bottom:6px;">Filled Card</h4>
          <p style="font-size:0.85rem; color:var(--md-sys-color-outline);">Higher contrast surface container fill.</p>
        </div>
        <div class="m3-card m3-card-outlined">
          <span class="material-symbols-rounded" style="color:var(--google-yellow); font-size:28px; margin-bottom:12px;">offline_bolt</span>
          <h4 style="font-weight:700; margin-bottom:6px;">Outlined Card</h4>
          <p style="font-size:0.85rem; color:var(--md-sys-color-outline);">Clean structural hairline outline border.</p>
        </div>
      </div>
    `,
    html: `<div class="m3-card m3-card-elevated">
  <h3>Card Title</h3>
  <p>Supporting descriptive content goes here.</p>
</div>`,
    css: `.m3-card {
  border-radius: 24px;
  padding: 24px;
  transition: all 250ms ease;
}
.m3-card-elevated {
  background-color: var(--md-sys-color-surface-container-low);
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border: 1px solid rgba(0,0,0,0.06);
}
.m3-card-elevated:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
}`,
    react: `export function Card({ variant = 'elevated', children }) {
  return <div className={\`m3-card m3-card-\${variant}\`}>{children}</div>;
}`,
    variations: [
      { name: "Elevated", desc: "Default shadow card", html: `<div class="m3-card m3-card-elevated" style="padding:14px">Elevated</div>` },
      { name: "Filled", desc: "Tonal surface container", html: `<div class="m3-card m3-card-filled" style="padding:14px">Filled</div>` },
      { name: "Outlined", desc: "Subtle boundary stroke", html: `<div class="m3-card m3-card-outlined" style="padding:14px">Outlined</div>` }
    ],
    tokens: [
      { token: "--toggle-card-radius", default: "24px", desc: "M3 card corner curvature" },
      { token: "--toggle-card-padding", default: "24px", desc: "Internal surface breathing room" }
    ],
    wcag: "Interactive cards provide focused ring indicator on tab navigation."
  },

  // ------------------------------------------------------------------------
  // 10. NAVIGATION & RAILS
  // ------------------------------------------------------------------------
  "navigation": {
    id: "navigation",
    name: "Navigation & Rails",
    category: "nav",
    icon: "navigation",
    badge: "Navigation",
    description: "Navigation components guide users through application destinations. Includes Navigation Rails, Top Bars, and sliding indicator tabs.",
    interactiveHtml: `
      <div style="display:flex; flex-direction:column; gap:28px; width:100%; max-width:680px; align-items:center;">
        <div class="toggle-tabs">
          <button class="toggle-tab-item active">
            <span class="material-symbols-rounded">home</span>
            <span>Home</span>
          </button>
          <button class="toggle-tab-item">
            <span class="material-symbols-rounded">explore</span>
            <span>Explore</span>
          </button>
          <button class="toggle-tab-item">
            <span class="material-symbols-rounded">chat</span>
            <span>Messages</span>
          </button>
          <button class="toggle-tab-item">
            <span class="material-symbols-rounded">settings</span>
            <span>Settings</span>
          </button>
        </div>

        <div style="display:flex; gap:24px; background:var(--md-sys-color-surface-container); padding:12px 24px; border-radius:var(--radius-xl);">
          <div class="toggle-rail-item active">
            <div class="toggle-rail-indicator"><span class="material-symbols-rounded">mail</span></div>
            <span>Mail</span>
          </div>
          <div class="toggle-rail-item">
            <div class="toggle-rail-indicator"><span class="material-symbols-rounded">chat_bubble</span></div>
            <span>Chat</span>
          </div>
          <div class="toggle-rail-item">
            <div class="toggle-rail-indicator"><span class="material-symbols-rounded">videocam</span></div>
            <span>Meet</span>
          </div>
        </div>
      </div>
    `,
    html: `<!-- Material You Tabs with Sliding Active Line -->
<div class="toggle-tabs">
  <button class="toggle-tab-item active">
    <span class="material-symbols-rounded">home</span>
    <span>Overview</span>
  </button>
  <button class="toggle-tab-item">
    <span class="material-symbols-rounded">settings</span>
    <span>Preferences</span>
  </button>
</div>`,
    css: `.toggle-tabs {
  display: inline-flex;
  border-bottom: 1px solid var(--md-sys-color-card-border);
  gap: 16px;
}
.toggle-tab-item {
  padding: 12px 18px;
  font-weight: 600;
  color: var(--md-sys-color-outline);
  cursor: pointer;
  border: none;
  background: transparent;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.toggle-tab-item.active {
  color: var(--md-sys-color-primary);
}
.toggle-tab-item.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 3px;
  border-radius: 3px 3px 0 0;
  background-color: var(--md-sys-color-primary);
}`,
    react: `export function Tabs({ tabs, activeIndex, onSelect }) {
  return (
    <div className="toggle-tabs">
      {tabs.map((tab, idx) => (
        <button 
          key={tab.name} 
          className={\`toggle-tab-item \${idx === activeIndex ? 'active' : ''}\`}
          onClick={() => onSelect(idx)}
        >
          {tab.icon && <span className="material-symbols-rounded">{tab.icon}</span>}
          <span>{tab.name}</span>
        </button>
      ))}
    </div>
  );
}`,
    variations: [
      { name: "Primary Tabs", desc: "Underlined active pill", html: `<div class="toggle-tabs"><button class="toggle-tab-item active">Tab 1</button><button class="toggle-tab-item">Tab 2</button></div>` }
    ],
    tokens: [
      { token: "--toggle-tab-indicator-height", default: "3px", desc: "Active indicator line height" }
    ],
    wcag: "Uses role='tablist', role='tab', and aria-selected='true' for screen readers."
  },

  // ------------------------------------------------------------------------
  // 11. FEEDBACK & DIALOGS
  // ------------------------------------------------------------------------
  "feedback": {
    id: "feedback",
    name: "Dialogs & Snackbars",
    category: "feedback",
    icon: "notifications",
    badge: "Feedback",
    description: "Dialogs inform users about a task and can contain critical information or require decisions. Snackbars inform users of a process that an app has performed.",
    interactiveHtml: `
      <div style="display:flex; gap:16px; align-items:center; justify-content:center; flex-wrap:wrap;">
        <button class="toggle-btn toggle-btn-filled" onclick="showSnackbar('Changes saved!')">  
          <span class="material-symbols-rounded">check</span>
          <span>Trigger Snackbar</span>
        </button>
        <button class="toggle-btn toggle-btn-tonal" onclick="document.getElementById('codeModalBackdrop').classList.add('show')">
          <span class="material-symbols-rounded">open_in_new</span>
          <span>Open Material Dialog</span>
        </button>
      </div>
    `,
    html: `<!-- Snackbar Trigger -->
<button class="toggle-btn toggle-btn-filled" onclick="showSnackbar('Item deleted')">
  Trigger Toast
</button>`,
    css: `.snackbar {
  background-color: var(--md-sys-color-on-surface);
  color: var(--md-sys-color-surface);
  padding: 12px 20px;
  border-radius: 9999px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.25);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
}`,
    react: `export function Snackbar({ message }) {
  return (
    <div className="snackbar">
      <span className="material-symbols-rounded">info</span>
      <span>{message}</span>
    </div>
  );
}`,
    variations: [
      { name: "Snackbar", desc: "Rounded bottom toast notification", html: `<div class="snackbar" style="position:static">Success notification</div>` }
    ],
    tokens: [
      { token: "--toggle-snackbar-radius", default: "9999px", desc: "Google pill shape" }
    ],
    wcag: "Snackbars use role='status' and aria-live='polite' to announce events without interrupting screen reader speech."
  },

  // ------------------------------------------------------------------------
  // 12. DESIGN TOKENS
  // ------------------------------------------------------------------------
  "tokens": {
    id: "tokens",
    name: "Design Tokens & Colors",
    category: "getting-started",
    icon: "palette",
    badge: "Foundations",
    description: "Material You dynamic color palettes, elevation shadows, typography scales, and shape tokens that govern the entire Toggle ecosystem.",
    isTokensPage: true
  },

  // ------------------------------------------------------------------------
  // 14. AVATARS & PRESENCE
  // ------------------------------------------------------------------------
  "avatars": {
    id: "avatars",
    name: "Avatars & Presence",
    category: "data",
    icon: "account_circle",
    badge: "Identity",
    description: "Avatars represent people or entities with images, icons, or monogram initials, alongside live status badges.",
    interactiveHtml: `
      <div style="display:flex; flex-direction:column; gap:28px; align-items:center;">
        <div style="display:flex; gap:24px; align-items:center;">
          <div class="toggle-avatar toggle-avatar-lg">
            <span>SP</span>
            <span class="toggle-avatar-status online" title="Online"></span>
          </div>
          <div class="toggle-avatar">
            <span class="material-symbols-rounded">person</span>
            <span class="toggle-avatar-status busy" title="Do Not Disturb"></span>
          </div>
          <div class="toggle-avatar toggle-avatar-sm" style="background:#e8def8; color:#4a4458;">
            <span>JD</span>
            <span class="toggle-avatar-status away" title="Away"></span>
          </div>
        </div>

        <div>
          <p style="font-size:0.8rem; font-weight:700; text-transform:uppercase; color:var(--md-sys-color-outline); margin-bottom:10px; text-align:center;">
            Stacked Avatar Group
          </p>
          <div class="toggle-avatar-group">
            <div class="toggle-avatar" style="background:#4285f4; color:#fff;">A</div>
            <div class="toggle-avatar" style="background:#ea4335; color:#fff;">B</div>
            <div class="toggle-avatar" style="background:#fbbc05; color:#000;">C</div>
            <div class="toggle-avatar" style="background:#34a853; color:#fff;">D</div>
            <div class="toggle-avatar" style="background:var(--md-sys-color-surface-container-highest); color:var(--md-sys-color-on-surface);">+8</div>
          </div>
        </div>
      </div>
    `,
    html: `<!-- Single Avatar with Presence Status -->
<div class="toggle-avatar">
  <span>SP</span>
  <span class="toggle-avatar-status online"></span>
</div>

<!-- Stacked Group -->
<div class="toggle-avatar-group">
  <div class="toggle-avatar">A</div>
  <div class="toggle-avatar">B</div>
  <div class="toggle-avatar">+5</div>
</div>`,
    css: `.toggle-avatar {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  background-color: var(--md-sys-color-primary-container);
  color: var(--md-sys-color-on-primary-container);
  font-weight: 700;
  border: 2px solid var(--md-sys-color-surface);
}
.toggle-avatar-status.online { background-color: #34a853; }
.toggle-avatar-group .toggle-avatar { margin-left: -12px; }`,
    react: `export function Avatar({ initials, status = 'online', size = 'md' }) {
  return (
    <div className={\`toggle-avatar toggle-avatar-\${size}\`}>
      <span>{initials}</span>
      {status && <span className={\`toggle-avatar-status \${status}\`} />}
    </div>
  );
}`,
    variations: [
      { name: "Online Status", desc: "Emerald presence dot", html: `<div class="toggle-avatar"><span>G</span><span class="toggle-avatar-status online"></span></div>` },
      { name: "Stacked Team", desc: "Collaborator cluster", html: `<div class="toggle-avatar-group"><div class="toggle-avatar">1</div><div class="toggle-avatar">2</div></div>` }
    ],
    tokens: [
      { token: "--toggle-avatar-size", default: "40px", desc: "Default avatar diameter" },
      { token: "--toggle-avatar-status-size", default: "12px", desc: "Status dot diameter" }
    ],
    wcag: "Avatars require alt text for images or aria-label describing user identity and presence."
  },

  // ------------------------------------------------------------------------
  // 15. DATA TABLES
  // ------------------------------------------------------------------------
  "tables": {
    id: "tables",
    name: "Data Tables",
    category: "data",
    icon: "table_chart",
    badge: "Tables",
    description: "Data tables display sets of data across rows and columns with interactive selection, sorting, and pagination.",
    interactiveHtml: `
      <div class="toggle-table-container">
        <table class="toggle-data-table">
          <thead>
            <tr>
              <th style="width:40px;"><input type="checkbox" /></th>
              <th>Component</th>
              <th>Category</th>
              <th>Status</th>
              <th>Version</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" checked /></td>
              <td style="font-weight:700; display:flex; align-items:center; gap:8px;">
                <span class="material-symbols-rounded" style="color:var(--md-sys-color-primary)">toggle_on</span>
                Material 3 Switch
              </td>
              <td>Actions</td>
              <td><span class="toggle-badge toggle-badge-success">Stable</span></td>
              <td style="font-family:var(--font-mono);">v3.2.0</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td style="font-weight:700; display:flex; align-items:center; gap:8px;">
                <span class="material-symbols-rounded" style="color:var(--google-red)">smart_button</span>
                Floating Action Button
              </td>
              <td>Actions</td>
              <td><span class="toggle-badge toggle-badge-primary">Core</span></td>
              <td style="font-family:var(--font-mono);">v3.1.4</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td style="font-weight:700; display:flex; align-items:center; gap:8px;">
                <span class="material-symbols-rounded" style="color:var(--google-green)">wb_sunny</span>
                Celestial Day/Night
              </td>
              <td>Specialty</td>
              <td><span class="toggle-badge toggle-badge-warning">Popular</span></td>
              <td style="font-family:var(--font-mono);">v2.8.0</td>
            </tr>
          </tbody>
        </table>
        <div class="toggle-table-pagination">
          <span>Showing 1-3 of 28 items</span>
          <div style="display:flex; gap:8px;">
            <button class="btn btn-secondary" style="padding:4px 10px; font-size:0.75rem;">Previous</button>
            <button class="btn btn-primary" style="padding:4px 10px; font-size:0.75rem;">Next</button>
          </div>
        </div>
      </div>
    `,
    html: `<div class="toggle-table-container">
  <table class="toggle-data-table">
    <thead>
      <tr><th>Name</th><th>Role</th><th>Status</th></tr>
    </thead>
    <tbody>
      <tr><td>Alex Mercer</td><td>Lead Engineer</td><td>Active</td></tr>
    </tbody>
  </table>
</div>`,
    css: `.toggle-data-table {
  width: 100%;
  border-collapse: collapse;
}
.toggle-data-table th {
  padding: 14px 20px;
  background-color: var(--md-sys-color-surface-container);
  border-bottom: 1px solid var(--md-sys-color-card-border);
}
.toggle-data-table td {
  padding: 16px 20px;
  border-bottom: 1px solid var(--md-sys-color-card-border);
}
.toggle-data-table tr:hover td {
  background-color: var(--md-sys-color-surface-container-low);
}`,
    react: `export function DataTable({ columns, rows }) {
  return (
    <div className="toggle-table-container">
      <table className="toggle-data-table">
        <thead>
          <tr>{columns.map(c => <th key={c}>{c}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>{columns.map(c => <td key={c}>{row[c]}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}`,
    variations: [
      { name: "Hover Rows", desc: "Highlights row under cursor", html: `<div style="font-size:0.8rem">Hover rows enabled</div>` }
    ],
    tokens: [
      { token: "--toggle-table-cell-padding", default: "16px 20px", desc: "Cell breathing space" }
    ],
    wcag: "Uses native thead, th, and scope attributes for correct screen reader tabular navigation."
  },

  // ------------------------------------------------------------------------
  // 16. TOOLTIPS
  // ------------------------------------------------------------------------
  "tooltips": {
    id: "tooltips",
    name: "Tooltips",
    category: "feedback",
    icon: "info",
    badge: "Overlays",
    description: "Tooltips display brief labels or informative text when a user hovers, focuses, or taps an element.",
    interactiveHtml: `
      <div style="display:flex; gap:32px; align-items:center; justify-content:center; padding:32px 0;">
        <div class="toggle-tooltip-wrap">
          <button class="toggle-btn toggle-btn-filled">Hover over me</button>
          <div class="toggle-tooltip">Saves draft automatically</div>
        </div>

        <div class="toggle-tooltip-wrap">
          <button class="icon-btn" style="background:var(--md-sys-color-surface-container-high);">
            <span class="material-symbols-rounded">cloud_download</span>
          </button>
          <div class="toggle-tooltip">Download latest bundle (14KB)</div>
        </div>
      </div>
    `,
    html: `<div class="toggle-tooltip-wrap">
  <button class="toggle-btn toggle-btn-filled">Button</button>
  <div class="toggle-tooltip">Helpful context info</div>
</div>`,
    css: `.toggle-tooltip-wrap {
  position: relative;
  display: inline-flex;
}
.toggle-tooltip {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) scale(0.9);
  background-color: var(--md-sys-color-on-surface);
  color: var(--md-sys-color-surface);
  padding: 6px 12px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: all 150ms ease;
}
.toggle-tooltip-wrap:hover .toggle-tooltip {
  opacity: 1;
  transform: translateX(-50%) scale(1);
}`,
    react: `export function Tooltip({ text, children }) {
  return (
    <div className="toggle-tooltip-wrap">
      {children}
      <div className="toggle-tooltip">{text}</div>
    </div>
  );
}`,
    variations: [
      { name: "Plain Tooltip", desc: "Short action label", html: `<div class="toggle-tooltip-wrap"><button class="toggle-btn toggle-btn-tonal">Hover</button><div class="toggle-tooltip">Active tip</div></div>` }
    ],
    tokens: [
      { token: "--toggle-tooltip-radius", default: "4px", desc: "Corner radius of tooltip" }
    ],
    wcag: "Must be triggerable via keyboard focus and dismissable with the Escape key."
  },

  // ------------------------------------------------------------------------
  // 17. DIALOGS
  // ------------------------------------------------------------------------
  "dialogs": {
    id: "dialogs",
    name: "Dialogs & Modals",
    category: "feedback",
    icon: "web_asset",
    badge: "Modals",
    description: "Dialogs provide critical alerts or prompt users to make a decision without navigating away from the current screen.",
    interactiveHtml: `
      <div style="display:flex; justify-content:center; width:100%;">
        <div class="m3-dialog-card">
          <div class="m3-dialog-title">
            <span class="material-symbols-rounded" style="color:var(--md-sys-color-primary)">cloud_sync</span>
            <span>Sync Cloud Data?</span>
          </div>
          <p class="m3-dialog-body">
            This will synchronize all local UI preferences and custom switch tokens with your Google Account across all active devices.
          </p>
          <div class="m3-dialog-actions">
            <button class="toggle-btn toggle-btn-text" onclick="showSnackbar('Action cancelled')">Cancel</button>
            <button class="toggle-btn toggle-btn-filled" onclick="showSnackbar('Sync started in background!')">Confirm Sync</button>
          </div>
        </div>
      </div>
    `,
    html: `<div class="m3-dialog-card">
  <div class="m3-dialog-title">
    <span class="material-symbols-rounded">cloud_sync</span>
    <span>Sync Changes?</span>
  </div>
  <p class="m3-dialog-body">Confirm sync operation.</p>
  <div class="m3-dialog-actions">
    <button class="toggle-btn toggle-btn-text">Cancel</button>
    <button class="toggle-btn toggle-btn-filled">Confirm</button>
  </div>
</div>`,
    css: `.m3-dialog-card {
  background-color: var(--md-sys-color-surface);
  border-radius: 28px;
  padding: 28px;
  max-width: 480px;
  box-shadow: var(--elevation-4);
  border: 1px solid var(--md-sys-color-card-border);
}
.m3-dialog-title {
  font-size: 1.4rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 12px;
}
.m3-dialog-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}`,
    react: `export function Dialog({ title, children, onConfirm, onCancel }) {
  return (
    <div className="m3-dialog-card">
      <div className="m3-dialog-title"><span>{title}</span></div>
      <div className="m3-dialog-body">{children}</div>
      <div className="m3-dialog-actions">
        <button className="toggle-btn toggle-btn-text" onClick={onCancel}>Cancel</button>
        <button className="toggle-btn toggle-btn-filled" onClick={onConfirm}>Confirm</button>
      </div>
    </div>
  );
}`,
    variations: [
      { name: "Confirmation Dialog", desc: "Action with confirmation", html: `<div style="font-size:0.85rem">Dialog confirmation preview</div>` }
    ],
    tokens: [
      { token: "--toggle-dialog-radius", default: "28px", desc: "M3 Dialog large corner radius" }
    ],
    wcag: "Trap keyboard focus within modal; close on Escape key and restore focus to trigger element."
  },

  // ------------------------------------------------------------------------
  // 18. ACCORDION & EXPANSION PANELS
  // ------------------------------------------------------------------------
  "accordions": {
    id: "accordions",
    name: "Expansion Panels",
    category: "data",
    icon: "expand_circle_down",
    badge: "Collapsible",
    description: "Expansion panels provide details-on-demand layouts, organizing complex forms or FAQ sections into clean collapsible cards.",
    interactiveHtml: `
      <div class="m3-accordion" id="demoAccordion">
        <div class="m3-accordion-item open">
          <div class="m3-accordion-header" onclick="this.parentElement.classList.toggle('open')">
            <span>What makes Toggle Design System unique?</span>
            <span class="material-symbols-rounded m3-accordion-chevron">expand_more</span>
          </div>
          <div class="m3-accordion-body">
            Toggle is built with Google Material You principles, zero dependencies, synthesized Web Audio tactile feedback, and rounded geometric iconography.
          </div>
        </div>

        <div class="m3-accordion-item">
          <div class="m3-accordion-header" onclick="this.parentElement.classList.toggle('open')">
            <span>Can I use these components in React or Vue?</span>
            <span class="material-symbols-rounded m3-accordion-chevron">expand_more</span>
          </div>
          <div class="m3-accordion-body">
            Yes! Every component is provided with pure HTML/CSS, React JSX snippets, and accessible ARIA attributes for any modern framework.
          </div>
        </div>

        <div class="m3-accordion-item">
          <div class="m3-accordion-header" onclick="this.parentElement.classList.toggle('open')">
            <span>How does dynamic color theming work?</span>
            <span class="material-symbols-rounded m3-accordion-chevron">expand_more</span>
          </div>
          <div class="m3-accordion-body">
            The system exposes semantic CSS tokens such as --md-sys-color-primary that adaptively recompute container, outline, and contrast shades automatically.
          </div>
        </div>
      </div>
    `,
    html: `<div class="m3-accordion-item open">
  <div class="m3-accordion-header" onclick="this.parentElement.classList.toggle('open')">
    <span>Accordion Header</span>
    <span class="material-symbols-rounded m3-accordion-chevron">expand_more</span>
  </div>
  <div class="m3-accordion-body">
    Collapsible content description goes here.
  </div>
</div>`,
    css: `.m3-accordion-item {
  background-color: var(--md-sys-color-surface-container-low);
  border: 1px solid var(--md-sys-color-card-border);
  border-radius: 18px;
  overflow: hidden;
}
.m3-accordion-header {
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-weight: 700;
}
.m3-accordion-item.open .m3-accordion-chevron {
  transform: rotate(180deg);
  color: var(--md-sys-color-primary);
}
.m3-accordion-item.open .m3-accordion-body {
  display: block;
  padding: 0 20px 20px;
}`,
    react: `export function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={\`m3-accordion-item \${open ? 'open' : ''}\`}>
      <div className="m3-accordion-header" onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <span className="material-symbols-rounded m3-accordion-chevron">expand_more</span>
      </div>
      {open && <div className="m3-accordion-body">{children}</div>}
    </div>
  );
}`,
    variations: [
      { name: "Single Open Panel", desc: "Classic FAQ accordion style", html: `<div style="font-size:0.85rem">Accordion panel item</div>` }
    ],
    tokens: [
      { token: "--toggle-accordion-radius", default: "18px", desc: "M3 card corner rounding" }
    ],
    wcag: "Uses aria-expanded and aria-controls attributes linking header to panel."
  },

  // ------------------------------------------------------------------------
  // 19. SKELETON LOADERS
  // ------------------------------------------------------------------------
  "skeletons": {
    id: "skeletons",
    name: "Skeleton Loaders",
    category: "feedback",
    icon: "view_agenda",
    badge: "Shimmer",
    description: "Skeleton loaders show placeholder layout shapes while real data is loading, reducing perceived latency.",
    interactiveHtml: `
      <div style="display:flex; flex-direction:column; gap:20px; width:100%; max-width:440px;">
        <div style="display:flex; gap:16px; align-items:center;">
          <div class="m3-skeleton m3-skeleton-circle"></div>
          <div style="flex:1; display:flex; flex-direction:column; gap:8px;">
            <div class="m3-skeleton m3-skeleton-bar" style="width:60%; height:16px;"></div>
            <div class="m3-skeleton m3-skeleton-bar" style="width:90%;"></div>
          </div>
        </div>

        <div style="display:flex; flex-direction:column; gap:10px;">
          <div class="m3-skeleton m3-skeleton-bar" style="height:120px; border-radius:18px;"></div>
          <div class="m3-skeleton m3-skeleton-bar" style="width:75%;"></div>
          <div class="m3-skeleton m3-skeleton-bar" style="width:40%;"></div>
        </div>
      </div>
    `,
    html: `<!-- Shimmer Profile Card Loader -->
<div class="m3-skeleton m3-skeleton-circle"></div>
<div class="m3-skeleton m3-skeleton-bar" style="width: 70%;"></div>
<div class="m3-skeleton m3-skeleton-bar" style="height: 100px;"></div>`,
    css: `.m3-skeleton {
  background: linear-gradient(
    90deg,
    var(--md-sys-color-surface-container-high) 0%,
    var(--md-sys-color-surface-container-highest) 50%,
    var(--md-sys-color-surface-container-high) 100%
  );
  background-size: 200% 100%;
  animation: skeletonShimmer 1.8s infinite ease-in-out;
}
@keyframes skeletonShimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}`,
    react: `export function Skeleton({ width, height, circle = false, borderRadius }) {
  return (
    <div 
      className={\`m3-skeleton \${circle ? 'm3-skeleton-circle' : 'm3-skeleton-bar'}\`}
      style={{ width, height, borderRadius }}
    />
  );
}`,
    variations: [
      { name: "Circle Shimmer", desc: "For user avatars", html: `<div class="m3-skeleton m3-skeleton-circle" style="width:36px;height:36px"></div>` },
      { name: "Text Bar", desc: "For headlines & paragraphs", html: `<div class="m3-skeleton m3-skeleton-bar" style="width:120px"></div>` }
    ],
    tokens: [
      { token: "--toggle-skeleton-shimmer-speed", default: "1.8s", desc: "Loop cycle duration" }
    ],
    wcag: "Includes aria-busy='true' and role='status' indicating pending data."
  },

  // ------------------------------------------------------------------------
  // 20. PIN & OTP CODE INPUT
  // ------------------------------------------------------------------------
  "pininput": {
    id: "pininput",
    name: "PIN & OTP Inputs",
    category: "forms",
    icon: "pin",
    badge: "Security",
    description: "Segmented security verification code input fields with auto-advance and focus animations.",
    interactiveHtml: `
      <div style="display:flex; flex-direction:column; gap:20px; align-items:center;">
        <p style="font-size:0.9rem; color:var(--md-sys-color-outline);">
          Enter the 4-digit Google verification code
        </p>
        <div class="toggle-pin-group">
          <input type="text" maxlength="1" class="toggle-pin-box" value="4" oninput="if(this.value && this.nextElementSibling) this.nextElementSibling.focus()" />
          <input type="text" maxlength="1" class="toggle-pin-box" value="2" oninput="if(this.value && this.nextElementSibling) this.nextElementSibling.focus()" />
          <input type="text" maxlength="1" class="toggle-pin-box" value="8" oninput="if(this.value && this.nextElementSibling) this.nextElementSibling.focus()" />
          <input type="text" maxlength="1" class="toggle-pin-box" value="5" oninput="if(this.value) showSnackbar('Code verified successfully!')" />
        </div>
        <button class="toggle-btn toggle-btn-tonal" onclick="showSnackbar('New verification code sent!')">
          <span class="material-symbols-rounded">forward_to_inbox</span>
          <span>Resend Code</span>
        </button>
      </div>
    `,
    html: `<div class="toggle-pin-group">
  <input type="text" maxlength="1" class="toggle-pin-box" autofocus />
  <input type="text" maxlength="1" class="toggle-pin-box" />
  <input type="text" maxlength="1" class="toggle-pin-box" />
  <input type="text" maxlength="1" class="toggle-pin-box" />
</div>`,
    css: `.toggle-pin-box {
  width: 48px;
  height: 56px;
  border-radius: 12px;
  border: 2px solid var(--md-sys-color-outline-variant);
  background-color: var(--md-sys-color-surface);
  text-align: center;
  font-family: var(--font-mono);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--md-sys-color-primary);
  outline: none;
  transition: all 150ms ease;
}
.toggle-pin-box:focus {
  border-color: var(--md-sys-color-primary);
  box-shadow: 0 0 0 3px var(--md-sys-color-primary-container);
  transform: translateY(-2px);
}`,
    react: `export function PinInput({ length = 4, onComplete }) {
  return (
    <div className="toggle-pin-group">
      {Array.from({ length }).map((_, i) => (
        <input key={i} maxLength={1} className="toggle-pin-box" />
      ))}
    </div>
  );
}`,
    variations: [
      { name: "4-Digit PIN", desc: "Standard 2-factor authentication", html: `<div style="font-size:0.85rem">4-Digit Security Code</div>` }
    ],
    tokens: [
      { token: "--toggle-pin-box-width", default: "48px", desc: "Individual digit box width" }
    ],
    wcag: "Inputs include inputmode='numeric' and autocomplete='one-time-code'."
  },

  // ------------------------------------------------------------------------
  // 21. ACCORDION & EXPANSION PANELS
  // ------------------------------------------------------------------------
  "accordion": {
    id: "accordion",
    name: "Accordion & Panels",
    category: "data",
    icon: "expand_circle_down",
    badge: "Collapsible",
    description: "Accordion panels let users show and hide sections of related content. Toggle's implementation uses smooth spring-eased height animation and staggered enter transitions.",
    interactiveHtml: `
      <div class="toggle-accordion" style="width:100%; max-width:580px;">
        <div class="toggle-accordion-item open">
          <button class="toggle-accordion-header" onclick="this.parentElement.classList.toggle('open'); if(window.soundEngine) soundEngine.playToggle(this.parentElement.classList.contains('open'));">
            <span class="material-symbols-rounded toggle-accordion-icon">design_services</span>
            <span class="toggle-accordion-label">Design Tokens</span>
            <span class="material-symbols-rounded toggle-accordion-chevron">expand_more</span>
          </button>
          <div class="toggle-accordion-body">
            <p style="margin:0; font-size:0.9rem; line-height:1.7; color:var(--md-sys-color-on-surface-variant);">Design tokens are the atomic values of the design system — colors, spacing, radii, and type scales. They ensure visual consistency across every component and platform.</p>
          </div>
        </div>
        <div class="toggle-accordion-item">
          <button class="toggle-accordion-header" onclick="this.parentElement.classList.toggle('open'); if(window.soundEngine) soundEngine.playToggle(this.parentElement.classList.contains('open'));">
            <span class="material-symbols-rounded toggle-accordion-icon">palette</span>
            <span class="toggle-accordion-label">Theming & Colors</span>
            <span class="material-symbols-rounded toggle-accordion-chevron">expand_more</span>
          </button>
          <div class="toggle-accordion-body">
            <p style="margin:0; font-size:0.9rem; line-height:1.7; color:var(--md-sys-color-on-surface-variant);">Dynamic color roles adapt to light and dark themes automatically. The primary accent is applied via HSL CSS variables, enabling one-click theme switching.</p>
          </div>
        </div>
        <div class="toggle-accordion-item">
          <button class="toggle-accordion-header" onclick="this.parentElement.classList.toggle('open'); if(window.soundEngine) soundEngine.playToggle(this.parentElement.classList.contains('open'));">
            <span class="material-symbols-rounded toggle-accordion-icon">accessibility_new</span>
            <span class="toggle-accordion-label">Accessibility</span>
            <span class="material-symbols-rounded toggle-accordion-chevron">expand_more</span>
          </button>
          <div class="toggle-accordion-body">
            <p style="margin:0; font-size:0.9rem; line-height:1.7; color:var(--md-sys-color-on-surface-variant);">All interactive surfaces meet WCAG 2.1 AA contrast ratios, include keyboard focus rings, and expose proper ARIA roles for screen reader compatibility.</p>
          </div>
        </div>
      </div>
    `,
    html: `<div class="toggle-accordion-item open">
  <button class="toggle-accordion-header"
    onclick="this.parentElement.classList.toggle('open')"
    aria-expanded="true">
    <span class="material-symbols-rounded toggle-accordion-icon">info</span>
    <span class="toggle-accordion-label">Section Title</span>
    <span class="material-symbols-rounded toggle-accordion-chevron">expand_more</span>
  </button>
  <div class="toggle-accordion-body">
    <p>Expandable panel content goes here.</p>
  </div>
</div>`,
    css: `.toggle-accordion-item {
  border-radius: 16px;
  background: var(--md-sys-color-surface-container-low);
  overflow: hidden;
  transition: background 200ms ease;
}
.toggle-accordion-item.open {
  background: var(--md-sys-color-surface-container);
}
.toggle-accordion-header {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 16px 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--md-sys-color-on-surface);
  text-align: left;
}
.toggle-accordion-icon { color: var(--md-sys-color-primary); font-size: 20px; }
.toggle-accordion-label { flex: 1; }
.toggle-accordion-chevron {
  font-size: 20px;
  color: var(--md-sys-color-outline);
  transition: transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
.toggle-accordion-item.open .toggle-accordion-chevron { transform: rotate(180deg); }
.toggle-accordion-body {
  max-height: 0;
  overflow: hidden;
  padding: 0 20px;
  transition: max-height 350ms cubic-bezier(0.4, 0, 0.2, 1),
              padding 350ms ease;
}
.toggle-accordion-item.open .toggle-accordion-body {
  max-height: 400px;
  padding: 0 20px 20px;
}`,
    react: `export function Accordion({ title, icon, children, defaultOpen = false }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div className={\`toggle-accordion-item \${open ? 'open' : ''}\`}>
      <button className="toggle-accordion-header" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span className="material-symbols-rounded toggle-accordion-icon">{icon}</span>
        <span className="toggle-accordion-label">{title}</span>
        <span className="material-symbols-rounded toggle-accordion-chevron">expand_more</span>
      </button>
      <div className="toggle-accordion-body">{children}</div>
    </div>
  );
}`,
    variations: [
      { name: "Single Expand", desc: "Only one panel open at a time", html: `<div class="toggle-accordion-item open"><button class="toggle-accordion-header"><span class="toggle-accordion-label">Open Panel</span><span class="material-symbols-rounded toggle-accordion-chevron">expand_more</span></button><div class="toggle-accordion-body" style="padding:12px 16px">Content</div></div>` },
      { name: "Borderless", desc: "Flush with surface, no card radius", html: `<div class="toggle-accordion-item" style="border-radius:0; border-bottom:1px solid var(--md-sys-color-outline-variant)"><button class="toggle-accordion-header"><span class="toggle-accordion-label">Borderless Row</span><span class="material-symbols-rounded toggle-accordion-chevron">expand_more</span></button></div>` }
    ],
    tokens: [
      { token: "--toggle-accordion-radius", default: "16px", desc: "Panel corner curvature" },
      { token: "--toggle-accordion-speed", default: "350ms", desc: "Body expand/collapse duration" }
    ],
    wcag: "Headers use <button> with aria-expanded. Body panels use aria-hidden when collapsed. Keyboard: Space/Enter to toggle."
  },

  // ------------------------------------------------------------------------
  // 22. STAR RATING
  // ------------------------------------------------------------------------
  "rating": {
    id: "rating",
    name: "Star Rating",
    category: "actions",
    icon: "star",
    badge: "Interactive",
    description: "Interactive star rating component with hover preview, fractional half-star display, and smooth scale animation. Fully keyboard-accessible with ARIA role='slider'.",
    interactiveHtml: `
      <div style="display:flex; flex-direction:column; gap:32px; align-items:center;">
        <div>
          <p style="font-size:0.8rem; font-weight:600; text-align:center; margin-bottom:12px; color:var(--md-sys-color-outline);">CLICK TO RATE</p>
          <div class="toggle-rating" id="demoRating">
            ${[1,2,3,4,5].map(i => `<button class="toggle-star" data-value="${i}" onclick="setRating('demoRating', ${i})" onmouseenter="hoverRating('demoRating', ${i})" onmouseleave="resetRatingHover('demoRating')" aria-label="${i} star" title="${i} star">
              <span class="material-symbols-rounded">star</span>
            </button>`).join('')}
          </div>
        </div>
        <div>
          <p style="font-size:0.8rem; font-weight:600; text-align:center; margin-bottom:12px; color:var(--md-sys-color-outline);">READ-ONLY (4.3 / 5)</p>
          <div class="toggle-rating readonly">
            <span class="toggle-star active"><span class="material-symbols-rounded" style="font-variation-settings:'FILL' 1">star</span></span>
            <span class="toggle-star active"><span class="material-symbols-rounded" style="font-variation-settings:'FILL' 1">star</span></span>
            <span class="toggle-star active"><span class="material-symbols-rounded" style="font-variation-settings:'FILL' 1">star</span></span>
            <span class="toggle-star active"><span class="material-symbols-rounded" style="font-variation-settings:'FILL' 1">star</span></span>
            <span class="toggle-star half"><span class="material-symbols-rounded" style="font-variation-settings:'FILL' 1">star_half</span></span>
          </div>
        </div>
      </div>
      <script>
        function setRating(id, val) {
          const el = document.getElementById(id);
          if (!el) return;
          el.dataset.value = val;
          el.querySelectorAll('.toggle-star').forEach((s,i) => s.classList.toggle('active', i < val));
        }
        function hoverRating(id, val) {
          document.getElementById(id)?.querySelectorAll('.toggle-star').forEach((s,i) => s.classList.toggle('hover', i < val));
        }
        function resetRatingHover(id) {
          document.getElementById(id)?.querySelectorAll('.toggle-star').forEach(s => s.classList.remove('hover'));
        }
      </script>
    `,
    html: `<div class="toggle-rating" role="group" aria-label="Star rating">
  <button class="toggle-star" data-value="1" aria-label="1 star">
    <span class="material-symbols-rounded">star</span>
  </button>
  <button class="toggle-star" data-value="2" aria-label="2 stars">
    <span class="material-symbols-rounded">star</span>
  </button>
  <button class="toggle-star active" data-value="3" aria-label="3 stars">
    <span class="material-symbols-rounded">star</span>
  </button>
  <button class="toggle-star" data-value="4" aria-label="4 stars">
    <span class="material-symbols-rounded">star</span>
  </button>
  <button class="toggle-star" data-value="5" aria-label="5 stars">
    <span class="material-symbols-rounded">star</span>
  </button>
</div>`,
    css: `.toggle-rating {
  display: inline-flex;
  gap: 4px;
  align-items: center;
}
.toggle-rating.readonly .toggle-star { cursor: default; }
.toggle-star {
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  border-radius: 50%;
  color: var(--md-sys-color-outline-variant);
  font-size: 0;
  transition: color 150ms ease, transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
.toggle-star .material-symbols-rounded {
  font-size: 28px;
  font-variation-settings: 'FILL' 0, 'wght' 400;
  transition: font-variation-settings 200ms ease;
}
.toggle-star:hover,
.toggle-star.hover { transform: scale(1.25); color: var(--md-sys-color-primary); }
.toggle-star:hover .material-symbols-rounded,
.toggle-star.hover .material-symbols-rounded { font-variation-settings: 'FILL' 1; }
.toggle-star.active { color: #f9ab00; }
.toggle-star.active .material-symbols-rounded { font-variation-settings: 'FILL' 1; }
.toggle-star.half { color: #f9ab00; }`,
    react: `export function StarRating({ value = 0, max = 5, onChange, readOnly = false }) {
  const [hover, setHover] = React.useState(0);
  return (
    <div className={\`toggle-rating \${readOnly ? 'readonly' : ''}\`} role="group">
      {Array.from({ length: max }, (_, i) => i + 1).map(star => (
        <button key={star} className={\`toggle-star \${(hover || value) >= star ? 'active' : ''}\`}
          onClick={() => !readOnly && onChange?.(star)}
          onMouseEnter={() => !readOnly && setHover(star)}
          onMouseLeave={() => setHover(0)}
          aria-label={\`\${star} star\`}>
          <span className="material-symbols-rounded">star</span>
        </button>
      ))}
    </div>
  );
}`,
    variations: [
      { name: "5-Star Default", desc: "Standard interactive rating", html: `<div class="toggle-rating"><button class="toggle-star active"><span class="material-symbols-rounded">star</span></button><button class="toggle-star active"><span class="material-symbols-rounded">star</span></button><button class="toggle-star active"><span class="material-symbols-rounded">star</span></button><button class="toggle-star"><span class="material-symbols-rounded">star</span></button><button class="toggle-star"><span class="material-symbols-rounded">star</span></button></div>` },
      { name: "Compact (sm)", desc: "Smaller icons for tight spaces", html: `<div class="toggle-rating" style="font-size:0"><span class="toggle-star active" style="color:#f9ab00"><span class="material-symbols-rounded" style="font-size:18px;font-variation-settings:'FILL' 1">star</span></span><span class="toggle-star active" style="color:#f9ab00"><span class="material-symbols-rounded" style="font-size:18px;font-variation-settings:'FILL' 1">star</span></span><span class="toggle-star" style="color:var(--md-sys-color-outline-variant)"><span class="material-symbols-rounded" style="font-size:18px">star</span></span></div>` }
    ],
    tokens: [
      { token: "--toggle-star-size", default: "28px", desc: "Star icon diameter" },
      { token: "--toggle-star-color-active", default: "#f9ab00", desc: "Filled star accent color" }
    ],
    wcag: "Each star is a <button> with aria-label. Keyboard: Tab to focus, Enter/Space to select. ARIA role='group' wraps the set."
  },

  // ------------------------------------------------------------------------
  // 23. BREADCRUMBS
  // ------------------------------------------------------------------------
  "breadcrumbs": {
    id: "breadcrumbs",
    name: "Breadcrumbs",
    category: "nav",
    icon: "chevron_right",
    badge: "Navigation",
    description: "Breadcrumb trails show users their current location within an app's hierarchy. Toggle's breadcrumb component supports icon prefixes, truncation, and animated entry.",
    interactiveHtml: `
      <div style="display:flex; flex-direction:column; gap:28px; width:100%; max-width:560px;">
        <div>
          <p style="font-size:0.8rem; font-weight:600; margin-bottom:10px; color:var(--md-sys-color-outline);">STANDARD</p>
          <nav class="toggle-breadcrumb" aria-label="Breadcrumb">
            <a href="#" class="toggle-crumb">
              <span class="material-symbols-rounded" style="font-size:16px;">home</span>
              <span>Home</span>
            </a>
            <span class="toggle-crumb-sep material-symbols-rounded">chevron_right</span>
            <a href="#" class="toggle-crumb">Components</a>
            <span class="toggle-crumb-sep material-symbols-rounded">chevron_right</span>
            <span class="toggle-crumb current" aria-current="page">Breadcrumbs</span>
          </nav>
        </div>
        <div>
          <p style="font-size:0.8rem; font-weight:600; margin-bottom:10px; color:var(--md-sys-color-outline);">WITH COLLAPSE</p>
          <nav class="toggle-breadcrumb" aria-label="Breadcrumb">
            <a href="#" class="toggle-crumb">
              <span class="material-symbols-rounded" style="font-size:16px;">home</span>
              <span>Home</span>
            </a>
            <span class="toggle-crumb-sep material-symbols-rounded">chevron_right</span>
            <span class="toggle-crumb" style="cursor:pointer; background:var(--md-sys-color-surface-container-highest); padding:2px 8px; border-radius:99px; font-size:0.82rem; font-weight:700;">···</span>
            <span class="toggle-crumb-sep material-symbols-rounded">chevron_right</span>
            <a href="#" class="toggle-crumb">Navigation</a>
            <span class="toggle-crumb-sep material-symbols-rounded">chevron_right</span>
            <span class="toggle-crumb current" aria-current="page">Breadcrumbs</span>
          </nav>
        </div>
      </div>
    `,
    html: `<nav class="toggle-breadcrumb" aria-label="Breadcrumb">
  <a href="/" class="toggle-crumb">
    <span class="material-symbols-rounded" style="font-size:16px;">home</span>
    <span>Home</span>
  </a>
  <span class="toggle-crumb-sep material-symbols-rounded">chevron_right</span>
  <a href="/components" class="toggle-crumb">Components</a>
  <span class="toggle-crumb-sep material-symbols-rounded">chevron_right</span>
  <span class="toggle-crumb current" aria-current="page">Current Page</span>
</nav>`,
    css: `.toggle-breadcrumb {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2px;
  list-style: none;
  padding: 0;
  margin: 0;
}
.toggle-crumb {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--md-sys-color-on-surface-variant);
  text-decoration: none;
  padding: 4px 8px;
  border-radius: 8px;
  transition: background 150ms ease, color 150ms ease;
}
.toggle-crumb:hover {
  background: var(--md-sys-color-surface-container-high);
  color: var(--md-sys-color-primary);
}
.toggle-crumb.current {
  color: var(--md-sys-color-on-surface);
  font-weight: 600;
  pointer-events: none;
}
.toggle-crumb-sep {
  font-size: 16px;
  color: var(--md-sys-color-outline);
  user-select: none;
}`,
    react: `export function Breadcrumb({ items }) {
  return (
    <nav className="toggle-breadcrumb" aria-label="Breadcrumb">
      {items.map((item, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="toggle-crumb-sep material-symbols-rounded">chevron_right</span>}
          {item.href
            ? <a href={item.href} className="toggle-crumb">{item.label}</a>
            : <span className="toggle-crumb current" aria-current="page">{item.label}</span>
          }
        </React.Fragment>
      ))}
    </nav>
  );
}`,
    variations: [
      { name: "Simple Text", desc: "No icons, slash separator", html: `<nav class="toggle-breadcrumb"><a class="toggle-crumb" href="#">Home</a><span class="toggle-crumb-sep" style="padding:0 2px;">/</span><a class="toggle-crumb" href="#">Docs</a><span class="toggle-crumb-sep" style="padding:0 2px;">/</span><span class="toggle-crumb current">Page</span></nav>` },
      { name: "With Home Icon", desc: "Home icon prefix on first crumb", html: `<nav class="toggle-breadcrumb"><a class="toggle-crumb" href="#"><span class="material-symbols-rounded" style="font-size:16px;">home</span><span>Home</span></a><span class="toggle-crumb-sep material-symbols-rounded">chevron_right</span><span class="toggle-crumb current">Current</span></nav>` }
    ],
    tokens: [
      { token: "--toggle-crumb-radius", default: "8px", desc: "Crumb hover state corner radius" },
      { token: "--toggle-crumb-font-size", default: "0.88rem", desc: "Crumb label text size" }
    ],
    wcag: "<nav aria-label='Breadcrumb'> wraps all crumbs. Current page uses aria-current='page'. Links are true <a> elements for native keyboard navigation."
  },

  // ------------------------------------------------------------------------
  // 24. SKELETON LOADER
  // ------------------------------------------------------------------------
  "skeleton": {
    id: "skeleton",
    name: "Skeleton Loaders",
    category: "feedback",
    icon: "hourglass_empty",
    badge: "Loading State",
    description: "Skeleton screens reduce perceived load time by showing shimmer placeholder shapes while content fetches. Toggle provides text, avatar, card, and list skeleton presets.",
    interactiveHtml: `
      <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:24px; width:100%; max-width:680px;">
        <!-- Card skeleton -->
        <div style="background:var(--md-sys-color-surface-container-low); border-radius:20px; padding:20px; display:flex; flex-direction:column; gap:12px;">
          <p style="font-size:0.75rem; font-weight:700; color:var(--md-sys-color-outline); margin:0 0 4px;">CARD SKELETON</p>
          <div class="toggle-skeleton" style="height:120px; border-radius:12px;"></div>
          <div class="toggle-skeleton" style="height:16px; width:80%; border-radius:8px;"></div>
          <div class="toggle-skeleton" style="height:14px; width:60%; border-radius:8px;"></div>
          <div style="display:flex; gap:10px; margin-top:4px;">
            <div class="toggle-skeleton toggle-skeleton-circle" style="width:36px; height:36px;"></div>
            <div style="flex:1; display:flex; flex-direction:column; gap:8px; justify-content:center;">
              <div class="toggle-skeleton" style="height:12px; width:70%; border-radius:6px;"></div>
              <div class="toggle-skeleton" style="height:10px; width:45%; border-radius:6px;"></div>
            </div>
          </div>
        </div>
        <!-- List skeleton -->
        <div style="background:var(--md-sys-color-surface-container-low); border-radius:20px; padding:20px; display:flex; flex-direction:column; gap:16px;">
          <p style="font-size:0.75rem; font-weight:700; color:var(--md-sys-color-outline); margin:0 0 4px;">LIST SKELETON</p>
          ${[1,2,3,4].map(() => `
          <div style="display:flex; align-items:center; gap:12px;">
            <div class="toggle-skeleton toggle-skeleton-circle" style="width:44px; height:44px; flex-shrink:0;"></div>
            <div style="flex:1; display:flex; flex-direction:column; gap:8px;">
              <div class="toggle-skeleton" style="height:13px; width:75%; border-radius:6px;"></div>
              <div class="toggle-skeleton" style="height:11px; width:50%; border-radius:6px;"></div>
            </div>
          </div>`).join('')}
        </div>
      </div>
    `,
    html: `<!-- Text skeleton -->
<div class="toggle-skeleton" style="height:16px; width:80%; border-radius:8px;"></div>
<div class="toggle-skeleton" style="height:14px; width:60%; border-radius:8px; margin-top:8px;"></div>

<!-- Avatar skeleton -->
<div class="toggle-skeleton toggle-skeleton-circle" style="width:48px; height:48px;"></div>

<!-- Image/card placeholder -->
<div class="toggle-skeleton" style="height:160px; border-radius:16px;"></div>`,
    css: `.toggle-skeleton {
  background: var(--md-sys-color-surface-container-highest);
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}
.toggle-skeleton::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-100%);
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255,255,255,0.12) 40%,
    rgba(255,255,255,0.22) 50%,
    rgba(255,255,255,0.12) 60%,
    transparent 100%
  );
  animation: skeletonShimmer 1.6s ease-in-out infinite;
}
.toggle-skeleton-circle { border-radius: 50%; }
@keyframes skeletonShimmer {
  100% { transform: translateX(100%); }
}`,
    react: `export function Skeleton({ width, height, circle = false, className = '' }) {
  return (
    <div
      className={\`toggle-skeleton \${circle ? 'toggle-skeleton-circle' : ''} \${className}\`}
      style={{ width, height }}
      aria-busy="true"
      aria-label="Loading..."
    />
  );
}

// Card skeleton preset
export function SkeletonCard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Skeleton height={120} />
      <Skeleton height={16} width="80%" />
      <Skeleton height={14} width="60%" />
    </div>
  );
}`,
    variations: [
      { name: "Text Line", desc: "Single line placeholder", html: `<div class="toggle-skeleton" style="height:14px; width:70%; border-radius:6px;"></div>` },
      { name: "Avatar Circle", desc: "Circular profile placeholder", html: `<div class="toggle-skeleton toggle-skeleton-circle" style="width:48px; height:48px;"></div>` },
      { name: "Card Block", desc: "Full card image area", html: `<div class="toggle-skeleton" style="height:100px; border-radius:12px;"></div>` }
    ],
    tokens: [
      { token: "--toggle-skeleton-speed", default: "1.6s", desc: "Shimmer sweep animation duration" },
      { token: "--toggle-skeleton-bg", default: "surface-container-highest", desc: "Base skeleton surface color" }
    ],
    wcag: "Skeleton containers carry aria-busy='true' and aria-label='Loading...' to inform screen readers content is pending. Removed from DOM when content loads."
  },

  // ------------------------------------------------------------------------
  // 25. COLOR SWATCH PICKER
  // ------------------------------------------------------------------------
  "swatches": {
    id: "swatches",
    name: "Color Swatches",
    category: "actions",
    icon: "color_lens",
    badge: "Selection",
    description: "Color swatch pickers let users select a color from a curated palette. Toggle's swatch supports checked state indicator, hover scale, and keyboard arrow-key navigation.",
    interactiveHtml: `
      <div style="display:flex; flex-direction:column; gap:28px; align-items:center;">
        <div>
          <p style="font-size:0.8rem; font-weight:600; margin-bottom:14px; text-align:center; color:var(--md-sys-color-outline);">ACCENT COLOR PICKER</p>
          <div class="toggle-swatch-group" role="radiogroup" aria-label="Color selection">
            ${[
              ['#4285f4','Blue'],['#ea4335','Red'],['#34a853','Green'],
              ['#f9ab00','Amber'],['#7c3aed','Violet'],['#00838f','Teal'],
              ['#e91e63','Pink'],['#ff5722','Deep Orange']
            ].map(([c,n],i) => `<button class="toggle-swatch${i===0?' active':''}" style="background:${c};" role="radio" aria-checked="${i===0}" aria-label="${n}" title="${n}" onclick="document.querySelectorAll('.toggle-swatch').forEach(s=>{s.classList.remove('active');s.setAttribute('aria-checked','false')});this.classList.add('active');this.setAttribute('aria-checked','true');showSnackbar('${n} selected')"></button>`).join('')}
          </div>
        </div>
        <div>
          <p style="font-size:0.8rem; font-weight:600; margin-bottom:14px; text-align:center; color:var(--md-sys-color-outline);">FABRIC / TEXTURE VARIANT</p>
          <div class="toggle-swatch-group">
            ${['#1a1a1a','#ffffff','#f5f5dc','#2196f3','#9c27b0','#ff9800'].map((c,i) => `<button class="toggle-swatch${i===1?' active':''}" style="background:${c}; border:${c==='#ffffff'?'2px solid #ddd':'none'}" aria-label="Color ${i+1}" onclick="this.closest('.toggle-swatch-group').querySelectorAll('.toggle-swatch').forEach(s=>s.classList.remove('active'));this.classList.add('active')"></button>`).join('')}
          </div>
        </div>
      </div>
    `,
    html: `<div class="toggle-swatch-group" role="radiogroup" aria-label="Pick a color">
  <button class="toggle-swatch active" style="background:#4285f4;"
    role="radio" aria-checked="true" aria-label="Blue"></button>
  <button class="toggle-swatch" style="background:#ea4335;"
    role="radio" aria-checked="false" aria-label="Red"></button>
  <button class="toggle-swatch" style="background:#34a853;"
    role="radio" aria-checked="false" aria-label="Green"></button>
  <button class="toggle-swatch" style="background:#f9ab00;"
    role="radio" aria-checked="false" aria-label="Amber"></button>
</div>`,
    css: `.toggle-swatch-group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
}
.toggle-swatch {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  position: relative;
  transition: transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 200ms ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}
.toggle-swatch:hover { transform: scale(1.2); }
.toggle-swatch::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 3px solid transparent;
  transition: border-color 150ms ease, inset 150ms ease;
}
.toggle-swatch.active {
  transform: scale(1.1);
  box-shadow: 0 0 0 3px var(--md-sys-color-surface),
              0 0 0 5px currentColor;
}
.toggle-swatch.active::after {
  content: '✓';
  color: #fff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 0 1px 3px rgba(0,0,0,0.4);
}`,
    react: `export function SwatchPicker({ colors, value, onChange }) {
  return (
    <div className="toggle-swatch-group" role="radiogroup">
      {colors.map(({ id, color, label }) => (
        <button
          key={id}
          className={\`toggle-swatch \${value === id ? 'active' : ''}\`}
          style={{ background: color }}
          role="radio"
          aria-checked={value === id}
          aria-label={label}
          onClick={() => onChange(id)}
        />
      ))}
    </div>
  );
}`,
    variations: [
      { name: "Large Swatches", desc: "48px for prominent pickers", html: `<div class="toggle-swatch-group"><button class="toggle-swatch active" style="background:#4285f4; width:48px; height:48px;"></button><button class="toggle-swatch" style="background:#ea4335; width:48px; height:48px;"></button><button class="toggle-swatch" style="background:#34a853; width:48px; height:48px;"></button></div>` },
      { name: "Rounded Squares", desc: "Square variant with radius:8px", html: `<div class="toggle-swatch-group"><button class="toggle-swatch active" style="background:#7c3aed; border-radius:8px;"></button><button class="toggle-swatch" style="background:#00838f; border-radius:8px;"></button><button class="toggle-swatch" style="background:#e91e63; border-radius:8px;"></button></div>` }
    ],
    tokens: [
      { token: "--toggle-swatch-size", default: "36px", desc: "Swatch diameter (circle)" },
      { token: "--toggle-swatch-gap", default: "10px", desc: "Space between swatches" }
    ],
    wcag: "role='radiogroup' on wrapper. Each swatch has role='radio', aria-checked, and aria-label. Arrow-key navigation moves focus within the group."
  },

  // ------------------------------------------------------------------------
  // 26. TABS & SEGMENTED BARS
  // ------------------------------------------------------------------------
  "tabs": {
    id: "tabs",
    name: "Tabs & Segmented Bars",
    category: "nav",
    icon: "tab",
    badge: "M3 Navigation",
    description: "Tabs organize and allow navigation between groups of content that are related and at the same level of hierarchy. Includes primary underline indicators and capsule pill segmented groups.",
    interactiveHtml: `
      <div style="display:flex; flex-direction:column; gap:28px; width:100%; max-width:600px; margin:0 auto;">
        <div>
          <div style="font-size:0.8rem; font-weight:700; text-transform:uppercase; color:var(--md-sys-color-outline); margin-bottom:10px;">Primary Tabs</div>
          <div class="toggle-tabs-bar" role="tablist">
            <button class="toggle-tab-btn active" role="tab" aria-selected="true" onclick="this.parentElement.querySelectorAll('.toggle-tab-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); if(window.soundEngine) soundEngine.playToggle(true);">
              <span class="material-symbols-rounded">dashboard</span>
              <span>Overview</span>
            </button>
            <button class="toggle-tab-btn" role="tab" aria-selected="false" onclick="this.parentElement.querySelectorAll('.toggle-tab-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); if(window.soundEngine) soundEngine.playToggle(true);">
              <span class="material-symbols-rounded">analytics</span>
              <span>Metrics</span>
            </button>
            <button class="toggle-tab-btn" role="tab" aria-selected="false" onclick="this.parentElement.querySelectorAll('.toggle-tab-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); if(window.soundEngine) soundEngine.playToggle(true);">
              <span class="material-symbols-rounded">settings</span>
              <span>Settings</span>
            </button>
          </div>
        </div>
        <div>
          <div style="font-size:0.8rem; font-weight:700; text-transform:uppercase; color:var(--md-sys-color-outline); margin-bottom:10px;">Segmented Capsule Controls</div>
          <div class="toggle-pill-segmented" role="group">
            <button class="toggle-pill-btn active" onclick="this.parentElement.querySelectorAll('.toggle-pill-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); if(window.soundEngine) soundEngine.playToggle(true);">
              <span class="material-symbols-rounded" style="font-size:16px;">calendar_view_day</span>
              <span>Day</span>
            </button>
            <button class="toggle-pill-btn" onclick="this.parentElement.querySelectorAll('.toggle-pill-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); if(window.soundEngine) soundEngine.playToggle(true);">
              <span class="material-symbols-rounded" style="font-size:16px;">calendar_view_week</span>
              <span>Week</span>
            </button>
            <button class="toggle-pill-btn" onclick="this.parentElement.querySelectorAll('.toggle-pill-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); if(window.soundEngine) soundEngine.playToggle(true);">
              <span class="material-symbols-rounded" style="font-size:16px;">calendar_view_month</span>
              <span>Month</span>
            </button>
            <button class="toggle-pill-btn" onclick="this.parentElement.querySelectorAll('.toggle-pill-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); if(window.soundEngine) soundEngine.playToggle(true);">
              <span>Year</span>
            </button>
          </div>
        </div>
      </div>
    `,
    html: `<!-- Primary Underlined Tabs -->
<div class="toggle-tabs-bar" role="tablist">
  <button class="toggle-tab-btn active" role="tab" aria-selected="true">
    <span class="material-symbols-rounded">dashboard</span>
    <span>Overview</span>
  </button>
  <button class="toggle-tab-btn" role="tab" aria-selected="false">
    <span class="material-symbols-rounded">analytics</span>
    <span>Metrics</span>
  </button>
  <button class="toggle-tab-btn" role="tab" aria-selected="false">
    <span class="material-symbols-rounded">settings</span>
    <span>Settings</span>
  </button>
</div>

<!-- Pill Segmented Tabs -->
<div class="toggle-pill-segmented" role="group">
  <button class="toggle-pill-btn active">Day</button>
  <button class="toggle-pill-btn">Week</button>
  <button class="toggle-pill-btn">Month</button>
</div>`,
    css: `/* Tabs Bar */
.toggle-tabs-bar {
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--md-sys-color-card-border);
  gap: 8px;
}
.toggle-tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 18px;
  background: transparent;
  border: none;
  font-weight: 500;
  cursor: pointer;
  position: relative;
}
.toggle-tab-btn.active {
  color: var(--md-sys-color-primary);
  font-weight: 700;
}
.toggle-tab-btn.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 3px;
  background-color: var(--md-sys-color-primary);
  border-radius: 3px 3px 0 0;
}`,
    react: `export function Tabs({ tabs, activeTab, onChange }) {
  return (
    <div className="toggle-tabs-bar" role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={\`toggle-tab-btn \${activeTab === tab.id ? 'active' : ''}\`}
          role="tab"
          aria-selected={activeTab === tab.id}
          onClick={() => onChange(tab.id)}
        >
          {tab.icon && <span className="material-symbols-rounded">{tab.icon}</span>}
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
}`,
    variations: [
      { name: "Primary Underlined", desc: "Classic Google Material active underline", html: `<div class="toggle-tabs-bar"><button class="toggle-tab-btn active"><span>Home</span></button><button class="toggle-tab-btn"><span>Docs</span></button></div>` },
      { name: "Pill Segmented", desc: "High-contrast container capsule", html: `<div class="toggle-pill-segmented"><button class="toggle-pill-btn active">Active</button><button class="toggle-pill-btn">History</button></div>` }
    ],
    tokens: [
      { token: "--md-sys-color-primary", default: "#0b57d0", desc: "Indicator underline and active text" },
      { token: "--radius-full", default: "9999px", desc: "Border radius for pill segmented controls" }
    ],
    wcag: "Tabs have role='tablist', each button has role='tab' and aria-selected state. Supports Arrow Left and Arrow Right keyboard navigation."
  },

  // ------------------------------------------------------------------------
  // 27. DROPDOWNS & SELECT MENUS
  // ------------------------------------------------------------------------
  "dropdowns": {
    id: "dropdowns",
    name: "Dropdowns & Select Menus",
    category: "forms",
    icon: "arrow_drop_down_circle",
    badge: "M3 Input",
    description: "Select menus and dropdowns allow users to choose one or multiple items from an expansive list of options with support for icons, search filtering, and grouped items.",
    interactiveHtml: `
      <div style="display:flex; flex-wrap:wrap; gap:24px; justify-content:center; align-items:flex-start; min-height:220px;">
        <div class="toggle-select-wrapper" id="demoSelectWrap" style="width:260px;">
          <button class="toggle-select-trigger" onclick="const w = document.getElementById('demoSelectWrap'); w.classList.toggle('open'); if(window.soundEngine) soundEngine.playToggle(true);">
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="material-symbols-rounded" style="color:var(--md-sys-color-primary); font-size:20px;">cloud</span>
              <span id="demoSelectVal">Google Cloud Platform</span>
            </div>
            <span class="material-symbols-rounded" style="color:var(--md-sys-color-outline);">arrow_drop_down</span>
          </button>
          <div class="toggle-select-menu">
            <button class="toggle-select-item selected" onclick="document.getElementById('demoSelectVal').textContent='Google Cloud Platform'; document.getElementById('demoSelectWrap').classList.remove('open');">
              <span class="material-symbols-rounded">cloud</span>
              <span>Google Cloud Platform</span>
            </button>
            <button class="toggle-select-item" onclick="document.getElementById('demoSelectVal').textContent='Google Workspace'; document.getElementById('demoSelectWrap').classList.remove('open');">
              <span class="material-symbols-rounded">work</span>
              <span>Google Workspace</span>
            </button>
            <button class="toggle-select-item" onclick="document.getElementById('demoSelectVal').textContent='Android Open Source'; document.getElementById('demoSelectWrap').classList.remove('open');">
              <span class="material-symbols-rounded">android</span>
              <span>Android Open Source</span>
            </button>
            <button class="toggle-select-item" onclick="document.getElementById('demoSelectVal').textContent='Gemini Developer API'; document.getElementById('demoSelectWrap').classList.remove('open');">
              <span class="material-symbols-rounded">auto_awesome</span>
              <span>Gemini Developer API</span>
            </button>
          </div>
        </div>
      </div>
    `,
    html: `<!-- Material 3 Select Dropdown -->
<div class="toggle-select-wrapper">
  <button class="toggle-select-trigger" aria-haspopup="listbox" aria-expanded="false">
    <div style="display:flex; align-items:center; gap:8px;">
      <span class="material-symbols-rounded">cloud</span>
      <span>Google Cloud Platform</span>
    </div>
    <span class="material-symbols-rounded">arrow_drop_down</span>
  </button>
  <div class="toggle-select-menu" role="listbox">
    <button class="toggle-select-item selected" role="option">
      <span class="material-symbols-rounded">cloud</span>
      <span>Google Cloud Platform</span>
    </button>
    <button class="toggle-select-item" role="option">
      <span class="material-symbols-rounded">work</span>
      <span>Google Workspace</span>
    </button>
  </div>
</div>`,
    css: `.toggle-select-wrapper {
  position: relative;
  display: inline-block;
  min-width: 240px;
}
.toggle-select-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: var(--md-sys-color-surface-container-low);
  border: 1px solid var(--md-sys-color-outline-variant);
  border-radius: var(--radius-md);
  color: var(--md-sys-color-on-surface);
  cursor: pointer;
}
.toggle-select-menu {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  background-color: var(--md-sys-color-surface);
  border: 1px solid var(--md-sys-color-card-border);
  border-radius: var(--radius-md);
  box-shadow: var(--elevation-3);
  padding: 6px;
  display: none;
}
.toggle-select-wrapper.open .toggle-select-menu {
  display: flex;
  flex-direction: column;
}`,
    react: `export function Dropdown({ label, options, selected, onSelect }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={\`toggle-select-wrapper \${open ? 'open' : ''}\`}>
      <button className="toggle-select-trigger" onClick={() => setOpen(!open)}>
        <span>{selected?.label || label}</span>
        <span className="material-symbols-rounded">arrow_drop_down</span>
      </button>
      {open && (
        <div className="toggle-select-menu">
          {options.map((opt) => (
            <button key={opt.value} className="toggle-select-item" onClick={() => { onSelect(opt); setOpen(false); }}>
              <span>{opt.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}`,
    variations: [
      { name: "With Leading Icons", desc: "Visual context icons preceding option text", html: `<div class="toggle-select-wrapper open" style="width:200px;"><button class="toggle-select-trigger"><span>Selected</span></button><div class="toggle-select-menu" style="display:flex; position:static;"><button class="toggle-select-item"><span class="material-symbols-rounded">mail</span><span>Mail</span></button></div></div>` },
      { name: "Selected State", desc: "High emphasis tonal highlight with check", html: `<div class="toggle-select-item selected"><span class="material-symbols-rounded">check</span><span>Active Selection</span></div>` }
    ],
    tokens: [
      { token: "--radius-md", default: "12px", desc: "Select input and menu border radius" },
      { token: "--elevation-3", default: "0 4px 12px rgba(0,0,0,0.1)", desc: "Floating dropdown menu elevation" }
    ],
    wcag: "Uses aria-haspopup='listbox', aria-expanded, and each item has role='option'. Closes on Escape and clicks outside."
  },

  // ------------------------------------------------------------------------
  // 28. BOTTOM SHEETS & DRAWERS
  // ------------------------------------------------------------------------
  "bottomsheet": {
    id: "bottomsheet",
    name: "Bottom Sheets & Drawers",
    category: "nav",
    icon: "vertical_align_top",
    badge: "M3 Surface",
    description: "Bottom sheets are surfaces containing supplementary content that anchor to the bottom of the screen with touch drag handles, fluid springs, and modal backdrops.",
    interactiveHtml: `
      <div style="display:flex; justify-content:center; width:100%;">
        <div class="toggle-bottom-sheet-preview">
          <div class="toggle-sheet-handle-bar">
            <div class="toggle-sheet-handle"></div>
          </div>
          <div class="toggle-sheet-header">
            <div class="toggle-sheet-title">Share Options</div>
            <div style="font-size:0.82rem; color:var(--md-sys-color-outline);">Select a destination to export or collaborate</div>
          </div>
          <div class="toggle-sheet-body">
            <button class="toggle-sheet-action-row" onclick="showSnackbar('Sharing via Link copied'); if(window.soundEngine) soundEngine.playToggle(true);">
              <span class="material-symbols-rounded">link</span>
              <div style="flex:1;">
                <div style="font-weight:600;">Copy Link</div>
                <div style="font-size:0.78rem; color:var(--md-sys-color-outline);">Anyone with the link can view</div>
              </div>
            </button>
            <button class="toggle-sheet-action-row" onclick="showSnackbar('Inviting Collaborator'); if(window.soundEngine) soundEngine.playToggle(true);">
              <span class="material-symbols-rounded">person_add</span>
              <div style="flex:1;">
                <div style="font-weight:600;">Invite Collaborators</div>
                <div style="font-size:0.78rem; color:var(--md-sys-color-outline);">Add emails from contacts</div>
              </div>
            </button>
            <button class="toggle-sheet-action-row" onclick="showSnackbar('QR Code generated'); if(window.soundEngine) soundEngine.playToggle(true);">
              <span class="material-symbols-rounded">qr_code_2</span>
              <div style="flex:1;">
                <div style="font-weight:600;">Show QR Code</div>
                <div style="font-size:0.78rem; color:var(--md-sys-color-outline);">Scan to open immediately on mobile</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    `,
    html: `<!-- Material 3 Bottom Sheet -->
<div class="toggle-bottom-sheet-preview">
  <div class="toggle-sheet-handle-bar">
    <div class="toggle-sheet-handle"></div>
  </div>
  <div class="toggle-sheet-header">
    <div class="toggle-sheet-title">Share Options</div>
  </div>
  <div class="toggle-sheet-body">
    <button class="toggle-sheet-action-row">
      <span class="material-symbols-rounded">link</span>
      <span>Copy Link</span>
    </button>
    <button class="toggle-sheet-action-row">
      <span class="material-symbols-rounded">person_add</span>
      <span>Invite Collaborators</span>
    </button>
  </div>
</div>`,
    css: `.toggle-bottom-sheet-preview {
  width: 100%;
  max-width: 440px;
  background-color: var(--md-sys-color-surface);
  border: 1px solid var(--md-sys-color-card-border);
  border-radius: var(--radius-2xl) var(--radius-2xl) var(--radius-md) var(--radius-md);
  box-shadow: var(--elevation-4);
  overflow: hidden;
}
.toggle-sheet-handle-bar {
  display: flex;
  justify-content: center;
  padding: 12px 0 6px;
  cursor: grab;
}
.toggle-sheet-handle {
  width: 40px;
  height: 4px;
  border-radius: 999px;
  background-color: var(--md-sys-color-outline-variant);
}`,
    react: `export function BottomSheet({ title, children, onClose }) {
  return (
    <div className="toggle-bottom-sheet-preview" role="dialog" aria-modal="true">
      <div className="toggle-sheet-handle-bar" onClick={onClose}>
        <div className="toggle-sheet-handle" />
      </div>
      {title && <div className="toggle-sheet-header"><div className="toggle-sheet-title">{title}</div></div>}
      <div className="toggle-sheet-body">{children}</div>
    </div>
  );
}`,
    variations: [
      { name: "Touch Drag Handle", desc: "Subtle pill grabber bar at the top edge", html: `<div class="toggle-sheet-handle-bar"><div class="toggle-sheet-handle"></div></div>` },
      { name: "Action List Item", desc: "Interactive rounded row with icon and subtitle", html: `<div class="toggle-sheet-action-row"><span class="material-symbols-rounded">share</span><span>Quick Share</span></div>` }
    ],
    tokens: [
      { token: "--radius-2xl", default: "32px", desc: "Top rounded surface corners" },
      { token: "--elevation-4", default: "0 8px 24px rgba(0,0,0,0.12)", desc: "Elevated bottom sheet shadow" }
    ],
    wcag: "Has role='dialog', supports keyboard Escape to dismiss, retains focus within the sheet during modal presentation."
  },

  // ------------------------------------------------------------------------
  // 29. BADGES & NOTIFICATION COUNTERS
  // ------------------------------------------------------------------------
  "badges": {
    id: "badges",
    name: "Badges & Status Counters",
    category: "data",
    icon: "mark_chat_unread",
    badge: "M3 Feedback",
    description: "Badges add numerical values, alert dots, or presence indicators (Online, Busy, Away) to icons, avatars, and navigation items.",
    interactiveHtml: `
      <div style="display:flex; flex-direction:column; gap:24px; align-items:center; width:100%;">
        <div style="display:flex; gap:32px; align-items:center; flex-wrap:wrap; justify-content:center;">
          <!-- Badge on Button -->
          <div class="toggle-badge-anchor">
            <button class="toggle-btn toggle-btn-tonal" onclick="showSnackbar('Notifications clicked'); if(window.soundEngine) soundEngine.playToggle(true);">
              <span class="material-symbols-rounded">notifications</span>
              <span>Inbox</span>
            </button>
            <span class="toggle-badge-pill">7</span>
          </div>

          <!-- Badge on Round Icon -->
          <div class="toggle-badge-anchor">
            <button class="toggle-fab" style="width:48px; height:48px;" aria-label="Mail" onclick="showSnackbar('Mail clicked'); if(window.soundEngine) soundEngine.playToggle(true);">
              <span class="material-symbols-rounded">mail</span>
            </button>
            <span class="toggle-badge-pill">99+</span>
          </div>

          <!-- Dot Badge on Avatar -->
          <div class="toggle-badge-anchor">
            <div class="toggle-avatar-ring" style="width:48px; height:48px; border-radius:50%; background:linear-gradient(135deg,#0b57d0,#34a853); display:flex; align-items:center; justify-content:center; color:#fff; font-weight:700;">
              JD
            </div>
            <span class="toggle-badge-dot toggle-badge-pulse"></span>
          </div>
        </div>

        <!-- Status Pills -->
        <div style="display:flex; gap:12px; flex-wrap:wrap; justify-content:center;">
          <div class="toggle-status-indicator online">
            <span class="toggle-status-dot"></span>
            <span>Online</span>
          </div>
          <div class="toggle-status-indicator busy">
            <span class="toggle-status-dot"></span>
            <span>Do Not Disturb</span>
          </div>
          <div class="toggle-status-indicator away">
            <span class="toggle-status-dot"></span>
            <span>Away</span>
          </div>
        </div>
      </div>
    `,
    html: `<!-- Counter Badge on Action -->
<div class="toggle-badge-anchor">
  <button class="toggle-btn toggle-btn-tonal">
    <span class="material-symbols-rounded">notifications</span>
    <span>Inbox</span>
  </button>
  <span class="toggle-badge-pill">7</span>
</div>

<!-- Dot Badge on Avatar -->
<div class="toggle-badge-anchor">
  <div class="toggle-avatar-ring">JD</div>
  <span class="toggle-badge-dot toggle-badge-pulse"></span>
</div>

<!-- Presence Indicator -->
<div class="toggle-status-indicator online">
  <span class="toggle-status-dot"></span>
  <span>Online</span>
</div>`,
    css: `.toggle-badge-anchor {
  position: relative;
  display: inline-flex;
}
.toggle-badge-pill {
  position: absolute;
  top: -6px;
  right: -8px;
  background-color: #ea4335;
  color: #ffffff;
  font-size: 0.72rem;
  font-weight: 700;
  height: 20px;
  min-width: 20px;
  padding: 0 6px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--md-sys-color-surface);
}
.toggle-badge-dot {
  position: absolute;
  top: -2px;
  right: -2px;
  width: 10px;
  height: 10px;
  background-color: #ea4335;
  border-radius: 50%;
  border: 2px solid var(--md-sys-color-surface);
}`,
    react: `export function Badge({ count, dot = false, children }) {
  return (
    <div className="toggle-badge-anchor">
      {children}
      {dot ? (
        <span className="toggle-badge-dot" />
      ) : count ? (
        <span className="toggle-badge-pill">{count > 99 ? '99+' : count}</span>
      ) : null}
    </div>
  );
}`,
    variations: [
      { name: "Pill Counter (99+)", desc: "Displays numeric alerts exceeding two digits", html: `<div class="toggle-badge-anchor"><button class="toggle-btn toggle-btn-outlined">Chat</button><span class="toggle-badge-pill">99+</span></div>` },
      { name: "Pulsing Presence Dot", desc: "Live radar pulse on user avatar", html: `<div class="toggle-badge-anchor"><div style="width:36px;height:36px;border-radius:50%;background:#0b57d0;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;">AB</div><span class="toggle-badge-dot toggle-badge-pulse"></span></div>` }
    ],
    tokens: [
      { token: "--google-red", default: "#ea4335", desc: "Notification alert badge fill color" },
      { token: "--md-sys-color-surface", default: "#ffffff", desc: "Cutout border color separating badge from icon" }
    ],
    wcag: "Badges include aria-label describing total unread notifications (e.g. '7 unread messages') for screen readers."
  },

  // ------------------------------------------------------------------------
  // 30. SPEED DIAL & FLOATING MENUS
  // ------------------------------------------------------------------------
  "speeddial": {
    id: "speeddial",
    name: "Speed Dial & Floating Menus",
    category: "actions",
    icon: "add_circle",
    badge: "M3 Action",
    description: "When pressed, a floating action button can expand into a speed dial displaying related quick actions with staggered animations, tooltips, and tactile sound feedback.",
    interactiveHtml: `
      <div style="display:flex; justify-content:center; align-items:center; min-height:280px; width:100%;">
        <div class="toggle-speed-dial" id="demoSpeedDial">
          <button class="toggle-speed-dial-trigger" aria-label="Quick Actions" onclick="const d = document.getElementById('demoSpeedDial'); d.classList.toggle('open'); if(window.soundEngine) soundEngine.playSpring();">
            <span class="material-symbols-rounded">add</span>
          </button>
          <div class="toggle-speed-dial-items">
            <div class="toggle-speed-dial-action" onclick="showSnackbar('Creating New Document'); if(window.soundEngine) soundEngine.playToggle(true);">
              <span class="toggle-dial-label">New Document</span>
              <div class="toggle-dial-sub-btn">
                <span class="material-symbols-rounded">description</span>
              </div>
            </div>
            <div class="toggle-speed-dial-action" onclick="showSnackbar('Uploading Photo'); if(window.soundEngine) soundEngine.playToggle(true);">
              <span class="toggle-dial-label">Upload Photo</span>
              <div class="toggle-dial-sub-btn">
                <span class="material-symbols-rounded">photo_camera</span>
              </div>
            </div>
            <div class="toggle-speed-dial-action" onclick="showSnackbar('Voice Memo started'); if(window.soundEngine) soundEngine.playToggle(true);">
              <span class="toggle-dial-label">Voice Memo</span>
              <div class="toggle-dial-sub-btn">
                <span class="material-symbols-rounded">mic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    html: `<!-- Material 3 Speed Dial -->
<div class="toggle-speed-dial" id="speedDial">
  <button class="toggle-speed-dial-trigger" aria-expanded="false" aria-label="Create new">
    <span class="material-symbols-rounded">add</span>
  </button>
  <div class="toggle-speed-dial-items">
    <div class="toggle-speed-dial-action">
      <span class="toggle-dial-label">New Document</span>
      <button class="toggle-dial-sub-btn"><span class="material-symbols-rounded">description</span></button>
    </div>
    <div class="toggle-speed-dial-action">
      <span class="toggle-dial-label">Upload Photo</span>
      <button class="toggle-dial-sub-btn"><span class="material-symbols-rounded">photo_camera</span></button>
    </div>
  </div>
</div>`,
    css: `.toggle-speed-dial {
  position: relative;
  display: inline-flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 12px;
}
.toggle-speed-dial-trigger {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-lg);
  background-color: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
  border: none;
  box-shadow: var(--elevation-3);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-base);
}
.toggle-speed-dial.open .toggle-speed-dial-trigger .material-symbols-rounded {
  transform: rotate(135deg);
}
.toggle-speed-dial-items {
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;
  align-items: flex-end;
  opacity: 0;
  pointer-events: none;
  transform: translateY(12px) scale(0.95);
  transition: all var(--transition-base);
}
.toggle-speed-dial.open .toggle-speed-dial-items {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0) scale(1);
}`,
    react: `export function SpeedDial({ actions, mainIcon = 'add' }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={\`toggle-speed-dial \${open ? 'open' : ''}\`}>
      <button className="toggle-speed-dial-trigger" onClick={() => setOpen(!open)}>
        <span className="material-symbols-rounded">{mainIcon}</span>
      </button>
      <div className="toggle-speed-dial-items">
        {actions.map((act) => (
          <div key={act.label} className="toggle-speed-dial-action" onClick={act.onClick}>
            <span className="toggle-dial-label">{act.label}</span>
            <button className="toggle-dial-sub-btn">
              <span className="material-symbols-rounded">{act.icon}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}`,
    variations: [
      { name: "Expanded Tooltips", desc: "Labels pop out to the left of the action buttons", html: `<div class="toggle-speed-dial-action"><span class="toggle-dial-label">Action</span><button class="toggle-dial-sub-btn"><span class="material-symbols-rounded">star</span></button></div>` },
      { name: "Spring Rotate Icon", desc: "Add icon rotates 135deg into a close cross", html: `<button class="toggle-speed-dial-trigger" style="transform:scale(0.8);"><span class="material-symbols-rounded" style="transform:rotate(135deg);">add</span></button>` }
    ],
    tokens: [
      { token: "--elevation-3", default: "0 4px 12px rgba(0,0,0,0.1)", desc: "Floating speed dial trigger shadow" },
      { token: "--transition-spring", default: "400ms cubic-bezier(0.34, 1.56, 0.64, 1)", desc: "Spring rotation duration" }
    ],
    wcag: "Uses aria-expanded state on the trigger button, tab focus cycles through speed dial actions when expanded."
  },

  // ------------------------------------------------------------------------
  // 31. DATE & TIME PICKERS
  // ------------------------------------------------------------------------
  "datepicker": {
    id: "datepicker",
    name: "Date & Time Pickers",
    category: "forms",
    icon: "calendar_today",
    badge: "M3 Form",
    description: "Date pickers let users select a date, date range, or time through an intuitive calendar grid interface matching Google Calendar styling.",
    interactiveHtml: `
      <div style="display:flex; justify-content:center; width:100%;">
        <div class="toggle-datepicker-card">
          <div class="toggle-calendar-header">
            <span class="toggle-calendar-month">September 2026</span>
            <div style="display:flex; gap:4px;">
              <button class="toggle-calendar-nav-btn" onclick="showSnackbar('Previous month'); if(window.soundEngine) soundEngine.playToggle(true);"><span class="material-symbols-rounded">chevron_left</span></button>
              <button class="toggle-calendar-nav-btn" onclick="showSnackbar('Next month'); if(window.soundEngine) soundEngine.playToggle(true);"><span class="material-symbols-rounded">chevron_right</span></button>
            </div>
          </div>
          <div class="toggle-calendar-weekdays">
            <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
          </div>
          <div class="toggle-calendar-days" id="demoCalendarDays">
            <span class="toggle-calendar-day empty"></span>
            <span class="toggle-calendar-day empty"></span>
            <button class="toggle-calendar-day" onclick="selectDemoDate(this)">1</button>
            <button class="toggle-calendar-day" onclick="selectDemoDate(this)">2</button>
            <button class="toggle-calendar-day" onclick="selectDemoDate(this)">3</button>
            <button class="toggle-calendar-day" onclick="selectDemoDate(this)">4</button>
            <button class="toggle-calendar-day" onclick="selectDemoDate(this)">5</button>
            <button class="toggle-calendar-day" onclick="selectDemoDate(this)">6</button>
            <button class="toggle-calendar-day" onclick="selectDemoDate(this)">7</button>
            <button class="toggle-calendar-day" onclick="selectDemoDate(this)">8</button>
            <button class="toggle-calendar-day" onclick="selectDemoDate(this)">9</button>
            <button class="toggle-calendar-day" onclick="selectDemoDate(this)">10</button>
            <button class="toggle-calendar-day" onclick="selectDemoDate(this)">11</button>
            <button class="toggle-calendar-day" onclick="selectDemoDate(this)">12</button>
            <button class="toggle-calendar-day" onclick="selectDemoDate(this)">13</button>
            <button class="toggle-calendar-day" onclick="selectDemoDate(this)">14</button>
            <button class="toggle-calendar-day" onclick="selectDemoDate(this)">15</button>
            <button class="toggle-calendar-day" onclick="selectDemoDate(this)">16</button>
            <button class="toggle-calendar-day" onclick="selectDemoDate(this)">17</button>
            <button class="toggle-calendar-day" onclick="selectDemoDate(this)">18</button>
            <button class="toggle-calendar-day" onclick="selectDemoDate(this)">19</button>
            <button class="toggle-calendar-day" onclick="selectDemoDate(this)">20</button>
            <button class="toggle-calendar-day" onclick="selectDemoDate(this)">21</button>
            <button class="toggle-calendar-day" onclick="selectDemoDate(this)">22</button>
            <button class="toggle-calendar-day" onclick="selectDemoDate(this)">23</button>
            <button class="toggle-calendar-day" onclick="selectDemoDate(this)">24</button>
            <button class="toggle-calendar-day" onclick="selectDemoDate(this)">25</button>
            <button class="toggle-calendar-day selected today" onclick="selectDemoDate(this)">26</button>
            <button class="toggle-calendar-day" onclick="selectDemoDate(this)">27</button>
            <button class="toggle-calendar-day" onclick="selectDemoDate(this)">28</button>
            <button class="toggle-calendar-day" onclick="selectDemoDate(this)">29</button>
            <button class="toggle-calendar-day" onclick="selectDemoDate(this)">30</button>
          </div>
        </div>
      </div>
      <script>
        function selectDemoDate(el) {
          document.querySelectorAll('#demoCalendarDays .toggle-calendar-day').forEach(b => b.classList.remove('selected'));
          el.classList.add('selected');
          if (window.soundEngine) soundEngine.playToggle(true);
          showSnackbar('Selected date: September ' + el.textContent + ', 2026');
        }
      </script>
    `,
    html: `<!-- Material 3 Calendar Date Picker -->
<div class="toggle-datepicker-card">
  <div class="toggle-calendar-header">
    <span class="toggle-calendar-month">September 2026</span>
    <div style="display:flex; gap:4px;">
      <button class="toggle-calendar-nav-btn"><span class="material-symbols-rounded">chevron_left</span></button>
      <button class="toggle-calendar-nav-btn"><span class="material-symbols-rounded">chevron_right</span></button>
    </div>
  </div>
  <div class="toggle-calendar-weekdays">
    <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
  </div>
  <div class="toggle-calendar-days">
    <button class="toggle-calendar-day today selected">26</button>
  </div>
</div>`,
    css: `.toggle-datepicker-card {
  width: 100%;
  max-width: 320px;
  background-color: var(--md-sys-color-surface);
  border: 1px solid var(--md-sys-color-card-border);
  border-radius: var(--radius-xl);
  box-shadow: var(--elevation-3);
  padding: 20px;
}
.toggle-calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
}
.toggle-calendar-day {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background: transparent;
  cursor: pointer;
}
.toggle-calendar-day.selected {
  background-color: var(--md-sys-color-primary);
  color: #ffffff;
}`,
    react: `export function DatePicker({ value, onChange }) {
  return (
    <div className="toggle-datepicker-card">
      <div className="toggle-calendar-header">
        <span className="toggle-calendar-month">Calendar</span>
      </div>
      <div className="toggle-calendar-days">
        {/* Render interactive days */}
      </div>
    </div>
  );
}`,
    variations: [
      { name: "Today Circle Highlight", desc: "Outlined primary ring on current calendar day", html: `<button class="toggle-calendar-day today" style="width:36px;height:36px;">26</button>` },
      { name: "Selected Day", desc: "Filled high-emphasis accent circle", html: `<button class="toggle-calendar-day selected" style="width:36px;height:36px;">26</button>` }
    ],
    tokens: [
      { token: "--radius-xl", default: "24px", desc: "Calendar card boundary curvature" },
      { token: "--md-sys-color-primary", default: "#0b57d0", desc: "Selected date circle color" }
    ],
    wcag: "Calendar has role='grid', day buttons have aria-label with full date (e.g. 'September 26, 2026'), and Arrow keys navigate rows and columns."
  },

  // ------------------------------------------------------------------------
  // 32. FILE UPLOAD & DROPZONE
  // ------------------------------------------------------------------------
  "fileupload": {
    id: "fileupload",
    name: "File Upload & Dropzone",
    category: "forms",
    icon: "cloud_upload",
    badge: "M3 Input",
    description: "File upload dropzones enable users to drag and drop files or browse locally, complete with upload progress indicators, file type badges, and remove actions.",
    interactiveHtml: `
      <div style="display:flex; flex-direction:column; gap:16px; width:100%; max-width:540px; margin:0 auto;">
        <div class="toggle-dropzone-box" onclick="showSnackbar('Browse dialog opened'); if(window.soundEngine) soundEngine.playToggle(true);">
          <div class="toggle-dropzone-icon-circle">
            <span class="material-symbols-rounded" style="font-size:28px;">cloud_upload</span>
          </div>
          <div>
            <div class="toggle-dropzone-title">Drop your files here, or <span style="color:var(--md-sys-color-primary); text-decoration:underline;">browse</span></div>
            <div class="toggle-dropzone-sub">Supports SVG, PNG, JPG, or PDF up to 25MB</div>
          </div>
        </div>

        <!-- Sample Uploaded File Item -->
        <div class="toggle-file-item-card">
          <div class="toggle-file-info">
            <div style="width:36px; height:36px; border-radius:8px; background:rgba(66,133,244,0.12); color:#4285f4; display:flex; align-items:center; justify-content:center;">
              <span class="material-symbols-rounded">image</span>
            </div>
            <div>
              <div style="font-size:0.88rem; font-weight:600; color:var(--md-sys-color-on-surface);">google_material_banner.png</div>
              <div style="font-size:0.75rem; color:var(--md-sys-color-outline);">2.4 MB • Complete</div>
              <div class="toggle-file-progress-bar" style="width:160px;">
                <div class="toggle-file-progress-fill" style="width:100%;"></div>
              </div>
            </div>
          </div>
          <button class="icon-btn" title="Remove File" onclick="this.closest('.toggle-file-item-card').remove(); showSnackbar('File removed');">
            <span class="material-symbols-rounded" style="font-size:18px;">close</span>
          </button>
        </div>
      </div>
    `,
    html: `<!-- Material 3 File Dropzone -->
<div class="toggle-dropzone-box">
  <div class="toggle-dropzone-icon-circle">
    <span class="material-symbols-rounded">cloud_upload</span>
  </div>
  <div class="toggle-dropzone-title">
    Drop files here, or <span style="color:var(--md-sys-color-primary)">browse</span>
  </div>
  <div class="toggle-dropzone-sub">Max size 25MB</div>
</div>`,
    css: `.toggle-dropzone-box {
  width: 100%;
  border: 2px dashed var(--md-sys-color-outline-variant);
  border-radius: var(--radius-xl);
  padding: 32px 24px;
  background-color: var(--md-sys-color-surface-container-lowest);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: all var(--transition-fast);
}
.toggle-dropzone-box:hover {
  border-color: var(--md-sys-color-primary);
  background-color: var(--md-sys-color-primary-container);
}`,
    react: `export function FileUpload({ onUpload }) {
  return (
    <div className="toggle-dropzone-box">
      <div className="toggle-dropzone-icon-circle">
        <span className="material-symbols-rounded">cloud_upload</span>
      </div>
      <div className="toggle-dropzone-title">Drop your files here</div>
    </div>
  );
}`,
    variations: [
      { name: "Active Drag Over", desc: "Tonal primary container with highlighted border", html: `<div class="toggle-dropzone-box drag-over" style="padding:16px;"><span class="material-symbols-rounded">file_download</span><span>Drop to upload</span></div>` },
      { name: "Progress State", desc: "File card with animated progress indicator fill", html: `<div class="toggle-file-progress-bar"><div class="toggle-file-progress-fill" style="width:70%;"></div></div>` }
    ],
    tokens: [
      { token: "--radius-xl", default: "24px", desc: "Dropzone rounded container corners" },
      { token: "--md-sys-color-outline-variant", default: "#c4c7c5", desc: "Dashed drag and drop border color" }
    ],
    wcag: "Dropzone includes an accessible hidden <input type='file'> input keyboard accessible via Enter or Space key."
  },

  // ------------------------------------------------------------------------
  // 33. STAT CARDS & METRIC INDICATORS
  // ------------------------------------------------------------------------
  "statcards": {
    id: "statcards",
    name: "Stat Cards & KPI Metrics",
    category: "data",
    icon: "trending_up",
    badge: "M3 Bento",
    description: "Stat cards present key performance indicators, numerical metrics, and dashboard summary data with visual trend badges and contextual icons.",
    interactiveHtml: `
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:20px; width:100%;">
        <div class="toggle-stat-card">
          <div class="toggle-stat-top">
            <span class="toggle-stat-label">Active Users</span>
            <div class="toggle-stat-icon-wrap">
              <span class="material-symbols-rounded">group</span>
            </div>
          </div>
          <div class="toggle-stat-value">128,490</div>
          <div class="toggle-stat-bottom">
            <span class="toggle-stat-trend positive">
              <span class="material-symbols-rounded" style="font-size:16px;">trending_up</span>
              +14.2%
            </span>
            <span style="color:var(--md-sys-color-outline);">vs last month</span>
          </div>
        </div>

        <div class="toggle-stat-card">
          <div class="toggle-stat-top">
            <span class="toggle-stat-label">Avg. Latency</span>
            <div class="toggle-stat-icon-wrap" style="background:rgba(52,168,83,0.15); color:#1e8e3e;">
              <span class="material-symbols-rounded">speed</span>
            </div>
          </div>
          <div class="toggle-stat-value">18.4ms</div>
          <div class="toggle-stat-bottom">
            <span class="toggle-stat-trend positive">
              <span class="material-symbols-rounded" style="font-size:16px;">arrow_downward</span>
              -3.1ms
            </span>
            <span style="color:var(--md-sys-color-outline);">faster response</span>
          </div>
        </div>

        <div class="toggle-stat-card">
          <div class="toggle-stat-top">
            <span class="toggle-stat-label">Error Rate</span>
            <div class="toggle-stat-icon-wrap" style="background:rgba(234,67,53,0.15); color:#d93025;">
              <span class="material-symbols-rounded">error</span>
            </div>
          </div>
          <div class="toggle-stat-value">0.02%</div>
          <div class="toggle-stat-bottom">
            <span class="toggle-stat-trend negative">
              <span class="material-symbols-rounded" style="font-size:16px;">trending_down</span>
              -0.05%
            </span>
            <span style="color:var(--md-sys-color-outline);">stability target met</span>
          </div>
        </div>
      </div>
    `,
    html: `<!-- Material 3 Stat / Metric Card -->
<div class="toggle-stat-card">
  <div class="toggle-stat-top">
    <span class="toggle-stat-label">Active Users</span>
    <div class="toggle-stat-icon-wrap">
      <span class="material-symbols-rounded">group</span>
    </div>
  </div>
  <div class="toggle-stat-value">128,490</div>
  <div class="toggle-stat-bottom">
    <span class="toggle-stat-trend positive">
      <span class="material-symbols-rounded">trending_up</span>
      +14.2%
    </span>
    <span>vs last month</span>
  </div>
</div>`,
    css: `.toggle-stat-card {
  background-color: var(--md-sys-color-surface);
  border: 1px solid var(--md-sys-color-card-border);
  border-radius: var(--radius-xl);
  padding: 24px;
  box-shadow: var(--elevation-1);
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.toggle-stat-value {
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--md-sys-color-on-surface);
  line-height: 1;
}
.toggle-stat-trend.positive {
  background-color: rgba(52, 168, 83, 0.12);
  color: #1e8e3e;
}`,
    react: `export function StatCard({ label, value, trend, isPositive, icon }) {
  return (
    <div className="toggle-stat-card">
      <div className="toggle-stat-top">
        <span className="toggle-stat-label">{label}</span>
        {icon && <div className="toggle-stat-icon-wrap"><span className="material-symbols-rounded">{icon}</span></div>}
      </div>
      <div className="toggle-stat-value">{value}</div>
      <div className="toggle-stat-bottom">
        <span className={\`toggle-stat-trend \${isPositive ? 'positive' : 'negative'}\`}>
          {trend}
        </span>
      </div>
    </div>
  );
}`,
    variations: [
      { name: "Positive Trend Pill", desc: "Green tinted badge with upward indicator", html: `<span class="toggle-stat-trend positive">+18.5%</span>` },
      { name: "Negative Trend Pill", desc: "Red tinted badge with downward indicator", html: `<span class="toggle-stat-trend negative">-4.2%</span>` }
    ],
    tokens: [
      { token: "--radius-xl", default: "24px", desc: "Stat card outer corner curvature" },
      { token: "--elevation-1", default: "0 1px 2px rgba(0,0,0,0.08)", desc: "Resting card elevation" }
    ],
    wcag: "Uses semantic HTML, headings for labels, and text descriptions so color is never the only visual indicator of trend direction."
  },

  // ------------------------------------------------------------------------
  // 34. TIMELINE & ACTIVITY FEEDS
  // ------------------------------------------------------------------------
  "timeline": {
    id: "timeline",
    name: "Timeline & Activity Feeds",
    category: "data",
    icon: "timeline",
    badge: "M3 Data",
    description: "Timelines display chronological sequences of events, orders, or activity logs connected with vertical step lines and status dots.",
    interactiveHtml: `
      <div style="width:100%; max-width:540px; margin:0 auto;">
        <div class="toggle-timeline">
          <div class="toggle-timeline-item">
            <div class="toggle-timeline-dot completed">
              <span class="material-symbols-rounded">check</span>
            </div>
            <div class="toggle-timeline-header">
              <span class="toggle-timeline-title">Order Placed & Confirmed</span>
              <span class="toggle-timeline-time">Today, 10:24 AM</span>
            </div>
            <div class="toggle-timeline-content">Order #TG-89024 payment verified via Google Pay.</div>
          </div>

          <div class="toggle-timeline-item">
            <div class="toggle-timeline-dot completed">
              <span class="material-symbols-rounded">check</span>
            </div>
            <div class="toggle-timeline-header">
              <span class="toggle-timeline-title">Packed at Warehouse</span>
              <span class="toggle-timeline-time">Today, 1:45 PM</span>
            </div>
            <div class="toggle-timeline-content">Items secured in eco-friendly packaging and assigned carrier tracking code.</div>
          </div>

          <div class="toggle-timeline-item">
            <div class="toggle-timeline-dot" style="background:var(--md-sys-color-primary-container);">
              <span class="material-symbols-rounded" style="font-size:14px; color:var(--md-sys-color-primary);">local_shipping</span>
            </div>
            <div class="toggle-timeline-header">
              <span class="toggle-timeline-title" style="color:var(--md-sys-color-primary);">Out for Delivery</span>
              <span class="toggle-timeline-time">Estimated 4:30 PM</span>
            </div>
            <div class="toggle-timeline-content">Courier is currently in your neighborhood. Live tracking active.</div>
          </div>

          <div class="toggle-timeline-item">
            <div class="toggle-timeline-dot" style="border-color:var(--md-sys-color-outline-variant);"></div>
            <div class="toggle-timeline-header">
              <span class="toggle-timeline-title" style="color:var(--md-sys-color-outline);">Delivered</span>
              <span class="toggle-timeline-time">Pending</span>
            </div>
            <div class="toggle-timeline-content">Recipient signature required upon handoff.</div>
          </div>
        </div>
      </div>
    `,
    html: `<!-- Material 3 Timeline -->
<div class="toggle-timeline">
  <div class="toggle-timeline-item">
    <div class="toggle-timeline-dot completed">
      <span class="material-symbols-rounded">check</span>
    </div>
    <div class="toggle-timeline-header">
      <span class="toggle-timeline-title">Order Placed</span>
      <span class="toggle-timeline-time">10:24 AM</span>
    </div>
    <div class="toggle-timeline-content">Payment verified.</div>
  </div>
</div>`,
    css: `.toggle-timeline {
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 28px;
}
.toggle-timeline::before {
  content: '';
  position: absolute;
  top: 14px;
  bottom: 14px;
  left: 9px;
  width: 2px;
  background-color: var(--md-sys-color-surface-container-highest);
}
.toggle-timeline-item {
  position: relative;
  padding-bottom: 24px;
}
.toggle-timeline-dot {
  position: absolute;
  left: -28px;
  top: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid var(--md-sys-color-primary);
  background-color: var(--md-sys-color-surface);
  display: flex;
  align-items: center;
  justify-content: center;
}`,
    react: `export function Timeline({ events }) {
  return (
    <div className="toggle-timeline">
      {events.map((ev, i) => (
        <div key={i} className="toggle-timeline-item">
          <div className={\`toggle-timeline-dot \${ev.completed ? 'completed' : ''}\`}>
            {ev.completed && <span className="material-symbols-rounded">check</span>}
          </div>
          <div className="toggle-timeline-header">
            <span className="toggle-timeline-title">{ev.title}</span>
            <span className="toggle-timeline-time">{ev.time}</span>
          </div>
          <div className="toggle-timeline-content">{ev.desc}</div>
        </div>
      ))}
    </div>
  );
}`,
    variations: [
      { name: "Completed Step Node", desc: "Solid filled dot with checkmark glyph", html: `<div class="toggle-timeline-dot completed" style="position:static;"><span class="material-symbols-rounded">check</span></div>` },
      { name: "Active Step Node", desc: "Outlined with active contextual icon", html: `<div class="toggle-timeline-dot" style="position:static; border-color:var(--md-sys-color-primary);"><span class="material-symbols-rounded" style="font-size:12px;">flight</span></div>` }
    ],
    tokens: [
      { token: "--md-sys-color-primary", default: "#0b57d0", desc: "Completed step line and marker fill" },
      { token: "--md-sys-color-surface-container-highest", default: "#dbe0e6", desc: "Connecting vertical line rail" }
    ],
    wcag: "Uses list elements with chronological aria-label structure. Clearly distinguishes completed, active, and upcoming steps."
  },

  // ------------------------------------------------------------------------
  // 35. TREE VIEW & FILE EXPLORER
  // ------------------------------------------------------------------------
  "treeview": {
    id: "treeview",
    name: "Tree View & File Explorer",
    category: "data",
    icon: "account_tree",
    badge: "M3 Navigation",
    description: "Tree views represent hierarchical information such as folder directory structures, navigation trees, and nested categories with expandable branches.",
    interactiveHtml: `
      <div style="display:flex; justify-content:center; width:100%;">
        <div class="toggle-treeview-card">
          <div class="toggle-tree-node">
            <div class="toggle-tree-row" onclick="const p = this.nextElementSibling; const t = this.querySelector('.toggle-tree-toggle'); p.style.display = p.style.display === 'none' ? 'flex' : 'none'; t.classList.toggle('open'); if(window.soundEngine) soundEngine.playToggle(true);">
              <span class="toggle-tree-toggle open material-symbols-rounded" style="font-size:16px;">chevron_right</span>
              <span class="material-symbols-rounded" style="color:#fbbc05; font-size:20px;">folder</span>
              <span style="font-weight:600;">src/</span>
            </div>
            <div class="toggle-tree-children">
              <div class="toggle-tree-node">
                <div class="toggle-tree-row" onclick="const p = this.nextElementSibling; const t = this.querySelector('.toggle-tree-toggle'); p.style.display = p.style.display === 'none' ? 'flex' : 'none'; t.classList.toggle('open'); if(window.soundEngine) soundEngine.playToggle(true);">
                  <span class="toggle-tree-toggle open material-symbols-rounded" style="font-size:16px;">chevron_right</span>
                  <span class="material-symbols-rounded" style="color:#fbbc05; font-size:20px;">folder</span>
                  <span>components/</span>
                </div>
                <div class="toggle-tree-children">
                  <div class="toggle-tree-row selected" onclick="document.querySelectorAll('.toggle-tree-row').forEach(r=>r.classList.remove('selected')); this.classList.add('selected'); if(window.soundEngine) soundEngine.playToggle(true); showSnackbar('Selected: Toggle.jsx');">
                    <span style="width:20px;"></span>
                    <span class="material-symbols-rounded" style="color:#4285f4; font-size:18px;">code</span>
                    <span>Toggle.jsx</span>
                  </div>
                  <div class="toggle-tree-row" onclick="document.querySelectorAll('.toggle-tree-row').forEach(r=>r.classList.remove('selected')); this.classList.add('selected'); if(window.soundEngine) soundEngine.playToggle(true); showSnackbar('Selected: Button.jsx');">
                    <span style="width:20px;"></span>
                    <span class="material-symbols-rounded" style="color:#4285f4; font-size:18px;">code</span>
                    <span>Button.jsx</span>
                  </div>
                </div>
              </div>
              <div class="toggle-tree-row" onclick="document.querySelectorAll('.toggle-tree-row').forEach(r=>r.classList.remove('selected')); this.classList.add('selected'); if(window.soundEngine) soundEngine.playToggle(true); showSnackbar('Selected: index.css');">
                <span style="width:20px;"></span>
                <span class="material-symbols-rounded" style="color:#ea4335; font-size:18px;">css</span>
                <span>index.css</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    html: `<!-- Material 3 Tree View -->
<div class="toggle-treeview-card" role="tree">
  <div class="toggle-tree-node" role="treeitem" aria-expanded="true">
    <div class="toggle-tree-row">
      <span class="toggle-tree-toggle open material-symbols-rounded">chevron_right</span>
      <span class="material-symbols-rounded">folder</span>
      <span>components/</span>
    </div>
    <div class="toggle-tree-children" role="group">
      <div class="toggle-tree-row selected" role="treeitem">
        <span class="material-symbols-rounded">code</span>
        <span>Toggle.jsx</span>
      </div>
    </div>
  </div>
</div>`,
    css: `.toggle-treeview-card {
  background-color: var(--md-sys-color-surface);
  border: 1px solid var(--md-sys-color-card-border);
  border-radius: var(--radius-lg);
  padding: 12px;
  width: 100%;
}
.toggle-tree-row {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 8px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-size: 0.88rem;
}
.toggle-tree-row.selected {
  background-color: var(--md-sys-color-primary-container);
  color: var(--md-sys-color-on-primary-container);
  font-weight: 600;
}
.toggle-tree-toggle.open {
  transform: rotate(90deg);
}
.toggle-tree-children {
  padding-left: 20px;
}`,
    react: `export function TreeView({ data, selectedId, onSelect }) {
  return (
    <div className="toggle-treeview-card" role="tree">
      {/* Recursive tree node rendering */}
    </div>
  );
}`,
    variations: [
      { name: "Expanded Folder", desc: "Chevron rotated 90deg with nested children visible", html: `<div class="toggle-tree-row"><span class="toggle-tree-toggle open material-symbols-rounded">chevron_right</span><span class="material-symbols-rounded">folder_open</span><span>assets</span></div>` },
      { name: "Selected File Row", desc: "Tonal pill selection with colored file glyph", html: `<div class="toggle-tree-row selected"><span class="material-symbols-rounded">code</span><span>app.js</span></div>` }
    ],
    tokens: [
      { token: "--radius-sm", default: "8px", desc: "Hover and selection row border radius" },
      { token: "--md-sys-color-primary-container", default: "hsl(217, 85%, 92%)", desc: "Selected node highlight surface" }
    ],
    wcag: "Tree container has role='tree', tree items have role='treeitem' with aria-expanded and aria-selected states. Arrow keys support navigating hierarchy."
  },

  // ------------------------------------------------------------------------
  // 37. MATERIAL 3 TYPOGRAPHY & TYPE SCALE
  // ------------------------------------------------------------------------
  "typography": {
    id: "typography",
    name: "Typography & Type Scale",
    category: "getting-started",
    icon: "match_case",
    badge: "M3 Typography",
    description: "The Material 3 typography scale establishes clear visual hierarchy with expressive display fonts, headlines, titles, body copy, and code styles crafted with Google's Outfit and JetBrains Mono.",
    interactiveHtml: `
      <div style="width:100%; max-width:680px; display:flex; flex-direction:column; gap:20px;">
        <div style="background:var(--md-sys-color-surface-container-low); border:1px solid var(--md-sys-color-card-border); border-radius:var(--radius-lg); padding:20px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; flex-wrap:wrap; gap:10px;">
            <div style="font-weight:700; font-size:0.92rem; color:var(--md-sys-color-on-surface); display:flex; align-items:center; gap:8px;">
              <span class="material-symbols-rounded" style="color:var(--md-sys-color-primary); font-size:18px;">edit</span>
              <span>Interactive Type Preview</span>
            </div>
            <div style="display:flex; gap:8px;">
              <button class="toggle-page-btn active" style="min-width:auto; height:28px; font-size:0.75rem; padding:0 10px;" onclick="document.querySelectorAll('.type-btn-tag').forEach(b=>b.classList.remove('active')); this.classList.add('active'); document.getElementById('typeDemoText').className='toggle-type-display-sm'; if(window.soundEngine) soundEngine.playClick();">Display</button>
              <button class="toggle-page-btn" style="min-width:auto; height:28px; font-size:0.75rem; padding:0 10px;" onclick="document.querySelectorAll('.type-btn-tag').forEach(b=>b.classList.remove('active')); this.classList.add('active'); document.getElementById('typeDemoText').className='toggle-type-headline-md'; if(window.soundEngine) soundEngine.playClick();">Headline</button>
              <button class="toggle-page-btn" style="min-width:auto; height:28px; font-size:0.75rem; padding:0 10px;" onclick="document.querySelectorAll('.type-btn-tag').forEach(b=>b.classList.remove('active')); this.classList.add('active'); document.getElementById('typeDemoText').className='toggle-type-title-lg'; if(window.soundEngine) soundEngine.playClick();">Title</button>
              <button class="toggle-page-btn" style="min-width:auto; height:28px; font-size:0.75rem; padding:0 10px;" onclick="document.querySelectorAll('.type-btn-tag').forEach(b=>b.classList.remove('active')); this.classList.add('active'); document.getElementById('typeDemoText').className='toggle-type-gradient'; if(window.soundEngine) soundEngine.playClick();">Gradient</button>
            </div>
          </div>
          <div id="typeDemoText" class="toggle-type-display-sm" contenteditable="true" spellcheck="false" style="outline:none; min-height:48px; border-bottom:1px dashed var(--md-sys-color-card-border); padding-bottom:8px;">
            Design with Material You
          </div>
          <div style="margin-top:10px; font-size:0.78rem; color:var(--md-sys-color-outline);">
            Click text to edit directly. Click pills above to toggle styles.
          </div>
        </div>

        <div style="background:var(--md-sys-color-surface); border:1px solid var(--md-sys-color-card-border); border-radius:var(--radius-lg); overflow:hidden;">
          <div style="padding:14px 20px; border-bottom:1px solid var(--md-sys-color-card-border); background:var(--md-sys-color-surface-container-low); font-weight:700; font-size:0.9rem;">
            Material 3 Role Scale Hierarchy
          </div>
          <div style="display:flex; flex-direction:column;">
            <div style="padding:16px 20px; display:flex; justify-content:space-between; align-items:baseline; border-bottom:1px solid var(--md-sys-color-card-border);">
              <div>
                <div class="toggle-type-display-md">Display Medium</div>
                <div style="font-size:0.78rem; color:var(--md-sys-color-outline); margin-top:2px;">Large hero titles, splash screens</div>
              </div>
              <span class="toggle-type-code">45px / 700</span>
            </div>
            <div style="padding:16px 20px; display:flex; justify-content:space-between; align-items:baseline; border-bottom:1px solid var(--md-sys-color-card-border);">
              <div>
                <div class="toggle-type-headline-md">Headline Medium</div>
                <div style="font-size:0.78rem; color:var(--md-sys-color-outline); margin-top:2px;">Section headers, dialog titles</div>
              </div>
              <span class="toggle-type-code">28px / 600</span>
            </div>
            <div style="padding:16px 20px; display:flex; justify-content:space-between; align-items:baseline; border-bottom:1px solid var(--md-sys-color-card-border);">
              <div>
                <div class="toggle-type-title-md">Title Medium</div>
                <div style="font-size:0.78rem; color:var(--md-sys-color-outline); margin-top:2px;">Card titles, list headers</div>
              </div>
              <span class="toggle-type-code">18px / 600</span>
            </div>
            <div style="padding:16px 20px; display:flex; justify-content:space-between; align-items:baseline; border-bottom:1px solid var(--md-sys-color-card-border);">
              <div>
                <div class="toggle-type-body-md">Body Medium — Adaptive text for standard reading</div>
                <div style="font-size:0.78rem; color:var(--md-sys-color-outline); margin-top:2px;">Paragraph copy, descriptions</div>
              </div>
              <span class="toggle-type-code">15px / 400</span>
            </div>
            <div style="padding:16px 20px; display:flex; justify-content:space-between; align-items:baseline;">
              <div>
                <div class="toggle-type-label-md">LABEL MEDIUM / OVERLINE</div>
                <div style="font-size:0.78rem; color:var(--md-sys-color-outline); margin-top:2px;">Caps labels, badge markers</div>
              </div>
              <span class="toggle-type-code">12.5px / 600</span>
            </div>
          </div>
        </div>
      </div>
    `,
    html: `<!-- Material 3 Typography Scale -->
<h1 class="toggle-type-display-lg">Display Large</h1>
<h2 class="toggle-type-headline-lg">Headline Large</h2>
<h3 class="toggle-type-title-lg">Title Large</h3>
<p class="toggle-type-body-lg">Body text designed for effortless readability.</p>
<span class="toggle-type-label-lg">LABEL CAPTION</span>
<code class="toggle-type-code">const token = "primary";</code>
<span class="toggle-type-gradient">Gradient Heading</span>`,
    css: `.toggle-type-display-lg {
  font-family: var(--font-family, 'Outfit', sans-serif);
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
}
.toggle-type-headline-lg {
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.25;
}
.toggle-type-body-lg {
  font-size: 1.05rem;
  line-height: 1.6;
}
.toggle-type-code {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.88em;
  background-color: var(--md-sys-color-surface-container-high);
  color: var(--md-sys-color-primary);
  padding: 0.2em 0.5em;
  border-radius: 6px;
}
.toggle-type-gradient {
  background: linear-gradient(135deg, #4285f4 0%, #a142f4 50%, #ea4335 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}`,
    react: `export function Typography({ variant = 'body-md', children, gradient = false, className = '' }) {
  const Tag = variant.startsWith('display') || variant.startsWith('headline') ? 'h2' :
              variant.startsWith('title') ? 'h3' : 'p';
  const cls = \`toggle-type-\${variant} \${gradient ? 'toggle-type-gradient' : ''} \${className}\`;
  return <Tag className={cls}>{children}</Tag>;
}`,
    variations: [
      { name: "Google 4-Color Gradient", desc: "Vibrant multi-stop gradient heading", html: `<span class="toggle-type-gradient toggle-type-headline-md">Intelligence in every toggle</span>` },
      { name: "Monospace Inline Code", desc: "JetBrains Mono with surface pill border", html: `<code class="toggle-type-code">npm install @dattebayoolo/toggle-ui-library</code>` }
    ],
    tokens: [
      { token: "--font-family", default: "'Outfit', sans-serif", desc: "Primary geometric sans font" },
      { token: "--font-mono", default: "'JetBrains Mono', monospace", desc: "Monospace font for tokens and code" }
    ],
    wcag: "Follows WCAG 2.1 AA 4.5:1 text contrast ratios against background and surface tiers across all light and dark themes."
  },

  // ------------------------------------------------------------------------
  // 38. ALERTS & CALLOUT BANNERS
  // ------------------------------------------------------------------------
  "alerts": {
    id: "alerts",
    name: "Alerts & Callouts",
    category: "feedback",
    icon: "notification_important",
    badge: "M3 Banners",
    description: "Alerts display short, important messages in a way that attracts user attention without interrupting their current task.",
    interactiveHtml: `
      <div style="display:flex; flex-direction:column; gap:12px; width:100%; max-width:540px;">
        <div class="toggle-alert toggle-alert-info">
          <span class="material-symbols-rounded toggle-alert-icon">info</span>
          <div class="toggle-alert-content">
            <div class="toggle-alert-title">New Update Available</div>
            <div class="toggle-alert-message">Version 3.2 includes 10+ new components and faster sound FX engine.</div>
          </div>
          <button class="toggle-alert-close" onclick="this.parentElement.style.opacity='0'; setTimeout(()=>this.parentElement.remove(),200); if(window.soundEngine) soundEngine.playClick();"><span class="material-symbols-rounded" style="font-size:18px;">close</span></button>
        </div>
        <div class="toggle-alert toggle-alert-success">
          <span class="material-symbols-rounded toggle-alert-icon">check_circle</span>
          <div class="toggle-alert-content">
            <div class="toggle-alert-title">Changes Saved</div>
            <div class="toggle-alert-message">Theme variables successfully published to your project bundle.</div>
          </div>
          <button class="toggle-alert-close" onclick="this.parentElement.style.opacity='0'; setTimeout(()=>this.parentElement.remove(),200); if(window.soundEngine) soundEngine.playClick();"><span class="material-symbols-rounded" style="font-size:18px;">close</span></button>
        </div>
        <div class="toggle-alert toggle-alert-warning">
          <span class="material-symbols-rounded toggle-alert-icon">warning</span>
          <div class="toggle-alert-content">
            <div class="toggle-alert-title">Storage Approaching Limit</div>
            <div class="toggle-alert-message">Your design workspace is at 88% capacity. Consider archiving unused components.</div>
          </div>
          <button class="toggle-alert-close" onclick="this.parentElement.style.opacity='0'; setTimeout(()=>this.parentElement.remove(),200); if(window.soundEngine) soundEngine.playClick();"><span class="material-symbols-rounded" style="font-size:18px;">close</span></button>
        </div>
        <div class="toggle-alert toggle-alert-error">
          <span class="material-symbols-rounded toggle-alert-icon">error</span>
          <div class="toggle-alert-content">
            <div class="toggle-alert-title">Connection Timeout</div>
            <div class="toggle-alert-message">Failed to connect to the preview telemetry server. Retrying in 5 seconds...</div>
          </div>
          <button class="toggle-alert-close" onclick="this.parentElement.style.opacity='0'; setTimeout(()=>this.parentElement.remove(),200); if(window.soundEngine) soundEngine.playClick();"><span class="material-symbols-rounded" style="font-size:18px;">close</span></button>
        </div>
      </div>
    `,
    html: `<!-- Material 3 Alerts -->
<div class="toggle-alert toggle-alert-info" role="alert">
  <span class="material-symbols-rounded toggle-alert-icon">info</span>
  <div class="toggle-alert-content">
    <div class="toggle-alert-title">Information Alert</div>
    <div class="toggle-alert-message">Helpful details about this action.</div>
  </div>
  <button class="toggle-alert-close" aria-label="Close">
    <span class="material-symbols-rounded">close</span>
  </button>
</div>`,
    css: `.toggle-alert {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 14px 18px;
  border-radius: var(--radius-lg);
  width: 100%;
}
.toggle-alert-info {
  background-color: hsl(217, 85%, 94%);
  color: hsl(217, 80%, 25%);
  border: 1px solid hsl(217, 85%, 85%);
}
.toggle-alert-success {
  background-color: hsl(142, 60%, 93%);
  color: hsl(142, 70%, 20%);
  border: 1px solid hsl(142, 60%, 82%);
}
.toggle-alert-warning {
  background-color: hsl(43, 95%, 92%);
  color: hsl(43, 90%, 22%);
  border: 1px solid hsl(43, 95%, 80%);
}
.toggle-alert-error {
  background-color: hsl(4, 85%, 94%);
  color: hsl(4, 75%, 26%);
  border: 1px solid hsl(4, 85%, 85%);
}`,
    react: `export function Alert({ severity = 'info', title, children, onClose }) {
  const icons = { info: 'info', success: 'check_circle', warning: 'warning', error: 'error' };
  return (
    <div className={\`toggle-alert toggle-alert-\${severity}\`} role="alert">
      <span className="material-symbols-rounded toggle-alert-icon">{icons[severity]}</span>
      <div className="toggle-alert-content">
        {title && <div className="toggle-alert-title">{title}</div>}
        <div className="toggle-alert-message">{children}</div>
      </div>
      {onClose && (
        <button className="toggle-alert-close" onClick={onClose}>
          <span className="material-symbols-rounded">close</span>
        </button>
      )}
    </div>
  );
}`,
    variations: [
      { name: "Filled Banner", desc: "Solid saturated background fill", html: `<div class="toggle-alert filled toggle-alert-info" style="margin-bottom:0;"><span class="material-symbols-rounded toggle-alert-icon">info</span><div class="toggle-alert-content"><div class="toggle-alert-title">Filled Notification</div><div class="toggle-alert-message">High emphasis banner style</div></div></div>` },
      { name: "Outlined Alert", desc: "Clean transparent surface with border tint", html: `<div class="toggle-alert outlined toggle-alert-success" style="margin-bottom:0;"><span class="material-symbols-rounded toggle-alert-icon">verified</span><div class="toggle-alert-content"><div class="toggle-alert-title">Outlined Success</div><div class="toggle-alert-message">Bordered transparent badge</div></div></div>` }
    ],
    tokens: [
      { token: "--radius-lg", default: "16px", desc: "Alert card curvature" },
      { token: "--md-sys-color-card-border", default: "rgba(0,0,0,0.08)", desc: "Subtle alert boundary line" }
    ],
    wcag: "Uses role='alert' with aria-live='polite'. Close button has accessible aria-label."
  },

  // ------------------------------------------------------------------------
  // 39. LISTS & ITEM GROUPS
  // ------------------------------------------------------------------------
  "lists": {
    id: "lists",
    name: "Lists & Item Groups",
    category: "data",
    icon: "format_list_bulleted",
    badge: "M3 Lists",
    description: "Lists are continuous, vertical indexes of text and images. Toggle lists feature interactive leading glyphs, secondary descriptive text, and integrated toggle switches.",
    interactiveHtml: `
      <div style="display:flex; justify-content:center; width:100%;">
        <div class="toggle-list">
          <div class="toggle-list-item" onclick="if(window.soundEngine) soundEngine.playClick();">
            <span class="material-symbols-rounded toggle-list-icon">wifi</span>
            <div class="toggle-list-content">
              <div class="toggle-list-title">Wi-Fi Network</div>
              <div class="toggle-list-subtitle">Connected to Google-Guest (5 GHz)</div>
            </div>
            <div class="toggle-list-action">
              <label class="toggle-switch toggle-m3" onclick="event.stopPropagation();">
                <input type="checkbox" checked onchange="if(window.soundEngine) soundEngine.playToggle(this.checked);" />
                <span class="toggle-slider"></span>
              </label>
            </div>
          </div>

          <div class="toggle-list-item" onclick="if(window.soundEngine) soundEngine.playClick();">
            <span class="material-symbols-rounded toggle-list-icon">bluetooth</span>
            <div class="toggle-list-content">
              <div class="toggle-list-title">Bluetooth Devices</div>
              <div class="toggle-list-subtitle">Pixel Buds Pro connected</div>
            </div>
            <div class="toggle-list-action">
              <label class="toggle-switch toggle-m3" onclick="event.stopPropagation();">
                <input type="checkbox" checked onchange="if(window.soundEngine) soundEngine.playToggle(this.checked);" />
                <span class="toggle-slider"></span>
              </label>
            </div>
          </div>

          <div class="toggle-list-item" onclick="if(window.soundEngine) soundEngine.playClick();">
            <span class="material-symbols-rounded toggle-list-icon">dark_mode</span>
            <div class="toggle-list-content">
              <div class="toggle-list-title">Dark Theme</div>
              <div class="toggle-list-subtitle">Automatically schedule with sunset</div>
            </div>
            <div class="toggle-list-action">
              <label class="toggle-switch toggle-m3" onclick="event.stopPropagation();">
                <input type="checkbox" onchange="if(window.soundEngine) soundEngine.playToggle(this.checked);" />
                <span class="toggle-slider"></span>
              </label>
            </div>
          </div>

          <div class="toggle-list-item" onclick="if(window.soundEngine) soundEngine.playClick();">
            <span class="material-symbols-rounded toggle-list-icon">notifications</span>
            <div class="toggle-list-content">
              <div class="toggle-list-title">Tactile Audio Feedback</div>
              <div class="toggle-list-subtitle">Synthesize sound on switch toggle</div>
            </div>
            <div class="toggle-list-action">
              <label class="toggle-switch toggle-m3" onclick="event.stopPropagation();">
                <input type="checkbox" checked onchange="if(window.soundEngine) soundEngine.playToggle(this.checked);" />
                <span class="toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    `,
    html: `<!-- Material 3 Interactive List -->
<div class="toggle-list" role="list">
  <div class="toggle-list-item" role="listitem">
    <span class="material-symbols-rounded toggle-list-icon">wifi</span>
    <div class="toggle-list-content">
      <div class="toggle-list-title">Wi-Fi</div>
      <div class="toggle-list-subtitle">Connected network</div>
    </div>
    <div class="toggle-list-action">
      <label class="toggle-switch toggle-m3">
        <input type="checkbox" checked />
        <span class="toggle-slider"></span>
      </label>
    </div>
  </div>
</div>`,
    css: `.toggle-list {
  background-color: var(--md-sys-color-surface);
  border: 1px solid var(--md-sys-color-card-border);
  border-radius: var(--radius-lg);
  padding: 8px 0;
  width: 100%;
}
.toggle-list-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 18px;
  cursor: pointer;
  transition: background-color var(--transition-fast);
}
.toggle-list-item:hover {
  background-color: var(--md-sys-color-surface-container);
}`,
    react: `export function List({ items }) {
  return (
    <div className="toggle-list" role="list">
      {items.map((it, i) => (
        <div key={i} className="toggle-list-item" role="listitem">
          {it.icon && <span className="material-symbols-rounded toggle-list-icon">{it.icon}</span>}
          <div className="toggle-list-content">
            <div className="toggle-list-title">{it.title}</div>
            {it.subtitle && <div className="toggle-list-subtitle">{it.subtitle}</div>}
          </div>
          {it.action && <div className="toggle-list-action">{it.action}</div>}
        </div>
      ))}
    </div>
  );
}`,
    variations: [
      { name: "Selected Row Item", desc: "Tonal pill selection indicator", html: `<div class="toggle-list-item selected"><span class="material-symbols-rounded toggle-list-icon">check</span><div class="toggle-list-content"><div class="toggle-list-title">Active Selection</div><div class="toggle-list-subtitle">Highlighted item state</div></div></div>` },
      { name: "Avatar Leading Row", desc: "Circular user thumbnail item", html: `<div class="toggle-list-item"><div class="m3-avatar m3-avatar-sm" style="background:#0b57d0; color:#fff;">JD</div><div class="toggle-list-content"><div class="toggle-list-title">John Doe</div><div class="toggle-list-subtitle">john@google.com</div></div></div>` }
    ],
    tokens: [
      { token: "--radius-lg", default: "16px", desc: "List container corner curvature" },
      { token: "--transition-fast", default: "150ms ease", desc: "Item hover duration" }
    ],
    wcag: "Uses semantic role='list' and role='listitem'. Nested inputs maintain separate keyboard click targets."
  },

  // ------------------------------------------------------------------------
  // 40. PAGINATION CONTROLS
  // ------------------------------------------------------------------------
  "pagination": {
    id: "pagination",
    name: "Pagination Controls",
    category: "navigation",
    icon: "more_horiz",
    badge: "M3 Navigation",
    description: "Pagination enables users to divide large data sets into discrete pages, navigating sequentially or directly to a specific target.",
    interactiveHtml: `
      <div style="display:flex; flex-direction:column; align-items:center; gap:20px; width:100%;">
        <div class="toggle-pagination" id="demoPagination">
          <button class="toggle-page-btn" onclick="showSnackbar('Page changed: Previous'); if(window.soundEngine) soundEngine.playClick();" title="Previous page">
            <span class="material-symbols-rounded" style="font-size:18px;">chevron_left</span>
          </button>
          <button class="toggle-page-btn" onclick="document.querySelectorAll('#demoPagination .toggle-page-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); if(window.soundEngine) soundEngine.playClick(); showSnackbar('Page 1 selected');">1</button>
          <button class="toggle-page-btn active" onclick="document.querySelectorAll('#demoPagination .toggle-page-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); if(window.soundEngine) soundEngine.playClick(); showSnackbar('Page 2 selected');">2</button>
          <button class="toggle-page-btn" onclick="document.querySelectorAll('#demoPagination .toggle-page-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); if(window.soundEngine) soundEngine.playClick(); showSnackbar('Page 3 selected');">3</button>
          <span class="toggle-page-ellipsis">•••</span>
          <button class="toggle-page-btn" onclick="document.querySelectorAll('#demoPagination .toggle-page-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); if(window.soundEngine) soundEngine.playClick(); showSnackbar('Page 12 selected');">12</button>
          <button class="toggle-page-btn" onclick="showSnackbar('Page changed: Next'); if(window.soundEngine) soundEngine.playClick();" title="Next page">
            <span class="material-symbols-rounded" style="font-size:18px;">chevron_right</span>
          </button>
        </div>
      </div>
    `,
    html: `<!-- Material 3 Pagination Controls -->
<nav class="toggle-pagination" aria-label="Pagination">
  <button class="toggle-page-btn" aria-label="Previous page">
    <span class="material-symbols-rounded">chevron_left</span>
  </button>
  <button class="toggle-page-btn active" aria-current="page">1</button>
  <button class="toggle-page-btn">2</button>
  <button class="toggle-page-btn">3</button>
  <span class="toggle-page-ellipsis">•••</span>
  <button class="toggle-page-btn">10</button>
  <button class="toggle-page-btn" aria-label="Next page">
    <span class="material-symbols-rounded">chevron_right</span>
  </button>
</nav>`,
    css: `.toggle-pagination {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.toggle-page-btn {
  min-width: 36px;
  height: 36px;
  padding: 0 8px;
  border-radius: var(--radius-full);
  border: 1px solid var(--md-sys-color-card-border);
  background: var(--md-sys-color-surface);
  color: var(--md-sys-color-on-surface);
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
}
.toggle-page-btn.active {
  background: var(--md-sys-color-primary);
  color: #ffffff;
  border-color: var(--md-sys-color-primary);
}`,
    react: `export function Pagination({ totalPages, activePage, onChange }) {
  return (
    <nav className="toggle-pagination" aria-label="Pagination">
      {/* Dynamic page generation */}
    </nav>
  );
}`,
    variations: [
      { name: "Compact Jump", desc: "First / Last direct jump buttons", html: `<div class="toggle-pagination"><button class="toggle-page-btn"><span class="material-symbols-rounded" style="font-size:16px;">first_page</span></button><button class="toggle-page-btn active">5</button><button class="toggle-page-btn"><span class="material-symbols-rounded" style="font-size:16px;">last_page</span></button></div>` }
    ],
    tokens: [
      { token: "--radius-full", default: "9999px", desc: "Circular pill button curvature" },
      { token: "--md-sys-color-primary", default: "#0b57d0", desc: "Active page node background" }
    ],
    wcag: "Uses semantic <nav aria-label='Pagination'>. Active button marked with aria-current='page'. Arrow keys support tab index."
  },

  // ------------------------------------------------------------------------
  // 41. STEPPER & PROGRESSION WIZARD
  // ------------------------------------------------------------------------
  "stepper": {
    id: "stepper",
    name: "Stepper & Progression Wizard",
    category: "navigation",
    icon: "linear_scale",
    badge: "M3 Stepper",
    description: "Steppers convey progress through numbered steps in multi-screen workflows such as checkouts, onboarding, and multi-stage configurations.",
    interactiveHtml: `
      <div style="display:flex; flex-direction:column; align-items:center; gap:24px; width:100%; max-width:580px;">
        <div class="toggle-stepper" id="demoStepper">
          <div class="toggle-step completed" onclick="(function(btn, targetIdx){ const parent = btn.closest('.toggle-stepper'); const steps = parent.querySelectorAll('.toggle-step'); const conns = parent.querySelectorAll('.toggle-step-connector'); steps.forEach((s, i) => { s.classList.remove('completed', 'active'); if (i < targetIdx) s.classList.add('completed'); else if (i === targetIdx) s.classList.add('active'); }); conns.forEach((c, i) => { if (i < targetIdx) c.classList.add('completed'); else c.classList.remove('completed'); }); })(this, 0); if(window.soundEngine) soundEngine.playClick(); showSnackbar('Step 1: Account selected');">
            <div class="toggle-step-node"><span class="material-symbols-rounded" style="font-size:18px;">check</span></div>
            <span class="toggle-step-label">Account</span>
          </div>
          <div class="toggle-step-connector completed"></div>

          <div class="toggle-step active" onclick="(function(btn, targetIdx){ const parent = btn.closest('.toggle-stepper'); const steps = parent.querySelectorAll('.toggle-step'); const conns = parent.querySelectorAll('.toggle-step-connector'); steps.forEach((s, i) => { s.classList.remove('completed', 'active'); if (i < targetIdx) s.classList.add('completed'); else if (i === targetIdx) s.classList.add('active'); }); conns.forEach((c, i) => { if (i < targetIdx) c.classList.add('completed'); else c.classList.remove('completed'); }); })(this, 1); if(window.soundEngine) soundEngine.playClick(); showSnackbar('Step 2: Personal selected');">
            <div class="toggle-step-node">2</div>
            <span class="toggle-step-label">Personal</span>
          </div>
          <div class="toggle-step-connector"></div>

          <div class="toggle-step" onclick="(function(btn, targetIdx){ const parent = btn.closest('.toggle-stepper'); const steps = parent.querySelectorAll('.toggle-step'); const conns = parent.querySelectorAll('.toggle-step-connector'); steps.forEach((s, i) => { s.classList.remove('completed', 'active'); if (i < targetIdx) s.classList.add('completed'); else if (i === targetIdx) s.classList.add('active'); }); conns.forEach((c, i) => { if (i < targetIdx) c.classList.add('completed'); else c.classList.remove('completed'); }); })(this, 2); if(window.soundEngine) soundEngine.playClick(); showSnackbar('Step 3: Billing selected');">
            <div class="toggle-step-node">3</div>
            <span class="toggle-step-label">Billing</span>
          </div>
          <div class="toggle-step-connector"></div>

          <div class="toggle-step" onclick="(function(btn, targetIdx){ const parent = btn.closest('.toggle-stepper'); const steps = parent.querySelectorAll('.toggle-step'); const conns = parent.querySelectorAll('.toggle-step-connector'); steps.forEach((s, i) => { s.classList.remove('completed', 'active'); if (i < targetIdx) s.classList.add('completed'); else if (i === targetIdx) s.classList.add('active'); }); conns.forEach((c, i) => { if (i < targetIdx) c.classList.add('completed'); else c.classList.remove('completed'); }); })(this, 3); if(window.soundEngine) soundEngine.playClick(); showSnackbar('Step 4: Confirm selected');">
            <div class="toggle-step-node">4</div>
            <span class="toggle-step-label">Confirm</span>
          </div>
        </div>

        <div style="font-size:0.85rem; color:var(--md-sys-color-outline);">
          Click any step above to jump to that milestone.
        </div>
      </div>
    `,
    html: `<!-- Material 3 Stepper -->
<div class="toggle-stepper" role="navigation" aria-label="Step progress">
  <div class="toggle-step completed">
    <div class="toggle-step-node"><span class="material-symbols-rounded">check</span></div>
    <span class="toggle-step-label">Step 1</span>
  </div>
  <div class="toggle-step-connector completed"></div>
  <div class="toggle-step active">
    <div class="toggle-step-node">2</div>
    <span class="toggle-step-label">Step 2</span>
  </div>
  <div class="toggle-step-connector"></div>
  <div class="toggle-step">
    <div class="toggle-step-node">3</div>
    <span class="toggle-step-label">Step 3</span>
  </div>
</div>`,
    css: `.toggle-stepper {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}
.toggle-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}
.toggle-step-node {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 2px solid var(--md-sys-color-card-border);
  background-color: var(--md-sys-color-surface);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}
.toggle-step.completed .toggle-step-node {
  background-color: var(--md-sys-color-primary);
  border-color: var(--md-sys-color-primary);
  color: #ffffff;
}
.toggle-step.active .toggle-step-node {
  border-color: var(--md-sys-color-primary);
  color: var(--md-sys-color-primary);
}
.toggle-step-connector {
  flex: 1;
  height: 2px;
  background-color: var(--md-sys-color-card-border);
  margin: 0 8px;
  position: relative;
  top: -14px;
}
.toggle-step-connector.completed {
  background-color: var(--md-sys-color-primary);
}`,
    react: `export function Stepper({ steps, activeStep, onStepClick }) {
  return (
    <div className="toggle-stepper">
      {/* Multi-step progress rendering */}
    </div>
  );
}`,
    variations: [
      { name: "Active Step Node", desc: "Outlined with active primary glow ring", html: `<div class="toggle-step active"><div class="toggle-step-node">2</div><span class="toggle-step-label">Active</span></div>` },
      { name: "Completed Step Node", desc: "Solid filled dot with checkmark glyph", html: `<div class="toggle-step completed"><div class="toggle-step-node"><span class="material-symbols-rounded">check</span></div><span class="toggle-step-label">Done</span></div>` }
    ],
    tokens: [
      { token: "--md-sys-color-primary", default: "#0b57d0", desc: "Completed step fill & active border" },
      { token: "--md-sys-color-primary-container", default: "hsl(217, 85%, 92%)", desc: "Active step focus halo" }
    ],
    wcag: "Uses role='navigation' with aria-current='step'. Nodes provide high-contrast visual cues for screen readers."
  },

  // ------------------------------------------------------------------------
  // 42. DIVIDERS & SEPARATORS
  // ------------------------------------------------------------------------
  "dividers": {
    id: "dividers",
    name: "Dividers & Separators",
    category: "data",
    icon: "splitscreen",
    badge: "M3 Layout",
    description: "Dividers group content into clear visual blocks. Toggle provides subtle hairlines, chip-labeled dividers, and vertical column separators.",
    interactiveHtml: `
      <div style="width:100%; max-width:540px; display:flex; flex-direction:column; gap:16px;">
        <div style="padding:16px; background:var(--md-sys-color-surface); border:1px solid var(--md-sys-color-card-border); border-radius:var(--radius-lg);">
          <div style="font-weight:600; font-size:0.95rem; margin-bottom:4px;">Standard Hairline Divider</div>
          <div style="font-size:0.85rem; color:var(--md-sys-color-on-surface-variant);">Clean 1px separation between text paragraphs.</div>
          <hr class="toggle-divider" />
          <div style="font-size:0.85rem; color:var(--md-sys-color-on-surface-variant);">Second content block after divider rule.</div>
        </div>

        <div style="padding:16px; background:var(--md-sys-color-surface); border:1px solid var(--md-sys-color-card-border); border-radius:var(--radius-lg);">
          <div style="font-weight:600; font-size:0.95rem; margin-bottom:8px;">Divider with Pill Chip Label</div>
          <div class="toggle-divider-labeled">
            <span class="toggle-divider-chip">OR CONTINUE WITH</span>
          </div>
          <div style="display:flex; gap:10px; justify-content:center; margin-top:8px;">
            <button class="toggle-btn toggle-btn-outlined" style="flex:1; justify-content:center;" onclick="if(window.soundEngine) soundEngine.playClick(); showSnackbar('Google auth selected');">Google</button>
            <button class="toggle-btn toggle-btn-outlined" style="flex:1; justify-content:center;" onclick="if(window.soundEngine) soundEngine.playClick(); showSnackbar('GitHub auth selected');">GitHub</button>
          </div>
        </div>

        <div style="padding:16px; background:var(--md-sys-color-surface); border:1px solid var(--md-sys-color-card-border); border-radius:var(--radius-lg); display:flex; align-items:center; justify-content:center;">
          <span style="font-size:0.9rem; font-weight:600;">Left Column</span>
          <span class="toggle-divider-vertical"></span>
          <span style="font-size:0.9rem; font-weight:600;">Middle Column</span>
          <span class="toggle-divider-vertical"></span>
          <span style="font-size:0.9rem; font-weight:600;">Right Column</span>
        </div>
      </div>
    `,
    html: `<!-- Material 3 Dividers -->
<hr class="toggle-divider" />

<!-- Centered Pill Label Divider -->
<div class="toggle-divider-labeled">
  <span class="toggle-divider-chip">OR</span>
</div>

<!-- Vertical Separator -->
<span class="toggle-divider-vertical"></span>`,
    css: `.toggle-divider {
  width: 100%;
  height: 1px;
  background-color: var(--md-sys-color-card-border);
  margin: 16px 0;
  border: none;
}
.toggle-divider-labeled {
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
}
.toggle-divider-labeled::before,
.toggle-divider-labeled::after {
  content: "";
  flex: 1;
  height: 1px;
  background-color: var(--md-sys-color-card-border);
}
.toggle-divider-chip {
  padding: 4px 12px;
  border-radius: var(--radius-full);
  background-color: var(--md-sys-color-surface-container);
  border: 1px solid var(--md-sys-color-card-border);
}`,
    react: `export function Divider({ label, vertical = false }) {
  if (vertical) return <span className="toggle-divider-vertical" role="separator" />;
  if (label) {
    return (
      <div className="toggle-divider-labeled" role="separator">
        <span className="toggle-divider-chip">{label}</span>
      </div>
    );
  }
  return <hr className="toggle-divider" role="separator" />;
}`,
    variations: [
      { name: "Pill Chip Divider", desc: "Centered text chip with side rule lines", html: `<div class="toggle-divider-labeled"><span class="toggle-divider-chip">STEP 2</span></div>` }
    ],
    tokens: [
      { token: "--md-sys-color-card-border", default: "rgba(0,0,0,0.08)", desc: "Hairline divider tone" }
    ],
    wcag: "Uses semantic <hr> or role='separator' with aria-orientation='horizontal' or 'vertical'."
  },

  // ------------------------------------------------------------------------
  // 43. SEGMENTED TOGGLE BUTTON GROUPS
  // ------------------------------------------------------------------------
  "togglebutton": {
    id: "togglebutton",
    name: "Segmented Toggle Buttons",
    category: "actions",
    icon: "view_week",
    badge: "M3 Toggle Group",
    description: "Segmented buttons let users select options, switch view modes, or sort elements. Toggle supports single-select pill segments and multi-select toolbar toggles.",
    interactiveHtml: `
      <div style="display:flex; flex-direction:column; align-items:center; gap:20px; width:100%; max-width:540px;">
        <!-- Single Select View Range -->
        <div class="toggle-btn-group" id="demoRangeGroup">
          <button class="toggle-segment-btn" onclick="document.querySelectorAll('#demoRangeGroup .toggle-segment-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); if(window.soundEngine) soundEngine.playClick(); showSnackbar('Timeframe: Day');">Day</button>
          <button class="toggle-segment-btn active" onclick="document.querySelectorAll('#demoRangeGroup .toggle-segment-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); if(window.soundEngine) soundEngine.playClick(); showSnackbar('Timeframe: Week');">Week</button>
          <button class="toggle-segment-btn" onclick="document.querySelectorAll('#demoRangeGroup .toggle-segment-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); if(window.soundEngine) soundEngine.playClick(); showSnackbar('Timeframe: Month');">Month</button>
          <button class="toggle-segment-btn" onclick="document.querySelectorAll('#demoRangeGroup .toggle-segment-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); if(window.soundEngine) soundEngine.playClick(); showSnackbar('Timeframe: Year');">Year</button>
        </div>

        <!-- Multi-Select Formatting Toolbar -->
        <div class="toggle-btn-group" id="demoFormatGroup">
          <button class="toggle-segment-btn active" onclick="this.classList.toggle('active'); if(window.soundEngine) soundEngine.playClick(); showSnackbar('Toggled Bold: ' + this.classList.contains('active'));" title="Bold">
            <span class="material-symbols-rounded">format_bold</span>
          </button>
          <button class="toggle-segment-btn" onclick="this.classList.toggle('active'); if(window.soundEngine) soundEngine.playClick(); showSnackbar('Toggled Italic: ' + this.classList.contains('active'));" title="Italic">
            <span class="material-symbols-rounded">format_italic</span>
          </button>
          <button class="toggle-segment-btn active" onclick="this.classList.toggle('active'); if(window.soundEngine) soundEngine.playClick(); showSnackbar('Toggled Underline: ' + this.classList.contains('active'));" title="Underline">
            <span class="material-symbols-rounded">format_underlined</span>
          </button>
          <button class="toggle-segment-btn" onclick="this.classList.toggle('active'); if(window.soundEngine) soundEngine.playClick(); showSnackbar('Toggled Strikethrough: ' + this.classList.contains('active'));" title="Strikethrough">
            <span class="material-symbols-rounded">strikethrough_s</span>
          </button>
        </div>
      </div>
    `,
    html: `<!-- Material 3 Segmented Toggle Button Group -->
<div class="toggle-btn-group" role="group" aria-label="View options">
  <button class="toggle-segment-btn active" aria-pressed="true">Day</button>
  <button class="toggle-segment-btn" aria-pressed="false">Week</button>
  <button class="toggle-segment-btn" aria-pressed="false">Month</button>
</div>`,
    css: `.toggle-btn-group {
  display: inline-flex;
  align-items: center;
  background-color: var(--md-sys-color-surface-container-low);
  border: 1px solid var(--md-sys-color-card-border);
  border-radius: var(--radius-full);
  padding: 4px;
  gap: 2px;
}
.toggle-segment-btn {
  padding: 8px 18px;
  border-radius: var(--radius-full);
  border: none;
  background: transparent;
  color: var(--md-sys-color-on-surface-variant);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
}
.toggle-segment-btn.active {
  background-color: var(--md-sys-color-primary);
  color: #ffffff;
}`,
    react: `export function ToggleButtonGroup({ options, value, onChange, multiple = false }) {
  return (
    <div className="toggle-btn-group" role="group">
      {options.map(opt => (
        <button
          key={opt.value}
          className={\`toggle-segment-btn \${(multiple ? value.includes(opt.value) : value === opt.value) ? 'active' : ''}\`}
          onClick={() => onChange(opt.value)}
        >
          {opt.icon && <span className="material-symbols-rounded">{opt.icon}</span>}
          {opt.label}
        </button>
      ))}
    </div>
  );
}`,
    variations: [
      { name: "Icon Only Segment", desc: "Format toolbar icons with pill active state", html: `<div class="toggle-btn-group"><button class="toggle-segment-btn active"><span class="material-symbols-rounded">format_align_left</span></button><button class="toggle-segment-btn"><span class="material-symbols-rounded">format_align_center</span></button><button class="toggle-segment-btn"><span class="material-symbols-rounded">format_align_right</span></button></div>` }
    ],
    tokens: [
      { token: "--radius-full", default: "9999px", desc: "Continuous segmented capsule curvature" },
      { token: "--md-sys-color-primary", default: "#0b57d0", desc: "Selected segment indicator fill" }
    ],
    wcag: "Uses role='group' and aria-pressed attributes for multi-select, or role='radiogroup' for single-choice."
  },

  // ------------------------------------------------------------------------
  // 44. SEARCH BAR & SUGGESTIONS
  // ------------------------------------------------------------------------
  "searchbar": {
    id: "searchbar",
    name: "Search Bar & Suggestions",
    category: "inputs",
    icon: "search",
    badge: "M3 Search View",
    description: "The Material 3 Search Bar serves as an anchor for search and filtering. On interaction, it reveals an elevated suggestions panel featuring recent queries, query pills, and real-time category results.",
    interactiveHtml: `
      <div class="toggle-search-container" style="width:100%; max-width:520px; display:flex; flex-direction:column; gap:16px;">
        <!-- Search Bar Capsule -->
        <div class="toggle-searchbar" id="demoSearchBar">
          <span class="material-symbols-rounded toggle-search-leading">search</span>
          <input type="text" class="toggle-search-input" id="demoSearchInput" placeholder="Search components, tokens, icons..." oninput="const val=this.value.trim(); document.getElementById('demoSearchView').style.display=val?'block':'none'; const qEl=document.getElementById('demoSearchQuery'); if(qEl) qEl.textContent=val||'components';" />
          <div class="toggle-search-trailing">
            <button class="toggle-search-btn" title="Voice Search" onclick="if(window.soundEngine) soundEngine.playClick(); showSnackbar('Voice search listening...');"><span class="material-symbols-rounded">mic</span></button>
            <button class="toggle-search-btn" title="Clear Search" onclick="document.getElementById('demoSearchInput').value=''; document.getElementById('demoSearchView').style.display='none'; if(window.soundEngine) soundEngine.playClick();"><span class="material-symbols-rounded">close</span></button>
            <div class="toggle-search-avatar" title="Account profile">K</div>
          </div>
        </div>

        <!-- Expandable Suggestion Panel -->
        <div class="toggle-search-view" id="demoSearchView">
          <!-- Quick filter chips -->
          <div class="toggle-search-filter-row">
            <button class="toggle-search-chip active" onclick="if(window.soundEngine) soundEngine.playClick();">All</button>
            <button class="toggle-search-chip" onclick="if(window.soundEngine) soundEngine.playClick();">Switches</button>
            <button class="toggle-search-chip" onclick="if(window.soundEngine) soundEngine.playClick();">Buttons</button>
            <button class="toggle-search-chip" onclick="if(window.soundEngine) soundEngine.playClick();">Tokens</button>
          </div>

          <!-- Section: Search Results / History -->
          <div class="toggle-search-section-title">Matching Results for <span id="demoSearchQuery" style="color:var(--md-sys-color-primary);">components</span></div>
          <div class="toggle-search-result-list">
            <div class="toggle-search-item" onclick="if(window.soundEngine) soundEngine.playClick(); showSnackbar('Selected: Material 3 Toggle');">
              <span class="material-symbols-rounded toggle-search-item-icon">toggle_on</span>
              <div class="toggle-search-item-text">
                <div class="toggle-search-item-title">Material 3 Toggle Switch</div>
                <div class="toggle-search-item-sub">Actions & Controls • 25 accessible variants</div>
              </div>
              <span class="material-symbols-rounded toggle-search-item-arrow">chevron_right</span>
            </div>
            <div class="toggle-search-item" onclick="if(window.soundEngine) soundEngine.playClick(); showSnackbar('Selected: Design Tokens');">
              <span class="material-symbols-rounded toggle-search-item-icon">palette</span>
              <div class="toggle-search-item-text">
                <div class="toggle-search-item-title">Design Tokens & Palette</div>
                <div class="toggle-search-item-sub">Foundations • Color, elevation, corner radius</div>
              </div>
              <span class="material-symbols-rounded toggle-search-item-arrow">chevron_right</span>
            </div>
            <div class="toggle-search-item" onclick="if(window.soundEngine) soundEngine.playClick(); showSnackbar('Selected: Floating Action Button');">
              <span class="material-symbols-rounded toggle-search-item-icon">smart_button</span>
              <div class="toggle-search-item-text">
                <div class="toggle-search-item-title">Floating Action Button (FAB)</div>
                <div class="toggle-search-item-sub">Buttons • Primary emphasized callout action</div>
              </div>
              <span class="material-symbols-rounded toggle-search-item-arrow">chevron_right</span>
            </div>
          </div>
        </div>
      </div>
    `,
    html: `<!-- Material 3 Search Bar -->
<div class="toggle-searchbar">
  <span class="material-symbols-rounded toggle-search-leading">search</span>
  <input type="text" class="toggle-search-input" placeholder="Search..." />
  <div class="toggle-search-trailing">
    <button class="toggle-search-btn" aria-label="Voice search">
      <span class="material-symbols-rounded">mic</span>
    </button>
    <div class="toggle-search-avatar">K</div>
  </div>
</div>`,
    css: `.toggle-searchbar {
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0 16px;
  background-color: var(--md-sys-color-surface-container-high);
  border-radius: var(--radius-full);
  box-shadow: var(--elevation-1);
  transition: all var(--transition-fast);
}
.toggle-searchbar:focus-within {
  background-color: var(--md-sys-color-surface-container-highest);
  box-shadow: var(--elevation-2);
}
.toggle-search-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 1rem;
  color: var(--md-sys-color-on-surface);
  padding: 0 12px;
}`,
    react: `export function SearchBar({ placeholder = "Search...", onSearch }) {
  return (
    <div className="toggle-searchbar">
      <span className="material-symbols-rounded toggle-search-leading">search</span>
      <input
        type="text"
        className="toggle-search-input"
        placeholder={placeholder}
        onChange={(e) => onSearch && onSearch(e.target.value)}
      />
      <div className="toggle-search-trailing">
        <button className="toggle-search-btn" aria-label="Voice search">
          <span className="material-symbols-rounded">mic</span>
        </button>
      </div>
    </div>
  );
}`,
    variations: [
      { name: "Compact Search Bar", desc: "40px height for dense toolbars", html: `<div class="toggle-searchbar" style="height:40px; padding:0 12px;"><span class="material-symbols-rounded toggle-search-leading" style="font-size:18px;">search</span><input type="text" class="toggle-search-input" placeholder="Quick find..." style="font-size:0.88rem;" /></div>` }
    ],
    tokens: [
      { token: "--radius-full", default: "9999px", desc: "Capsule curvature radius" },
      { token: "--md-sys-color-surface-container-high", default: "#e9edf6", desc: "Search pill container fill" }
    ],
    wcag: "Features input role='searchbox', clear and voice buttons with descriptive aria-label attributes."
  },

  // ------------------------------------------------------------------------
  // 45. CAROUSEL & CARD SLIDER
  // ------------------------------------------------------------------------
  "carousel": {
    id: "carousel",
    name: "Carousel & Card Slider",
    category: "display",
    icon: "view_carousel",
    badge: "Interactive M3",
    description: "Material 3 Carousel displays a scrollable collection of cards or media items with snap scroll physics, pill navigation controls, and animated indicator dots.",
    interactiveHtml: `
      <div class="toggle-carousel-container" style="width:100%; max-width:640px;">
        <!-- Carousel Header & Nav Controls -->
        <div class="toggle-carousel-header">
          <div class="toggle-carousel-title-group">
            <h3 style="margin:0; font-size:1.1rem; font-weight:700;">Featured Highlights</h3>
            <span style="font-size:0.8rem; color:var(--md-sys-color-outline);">Material Design 3 Multi-Browse</span>
          </div>
          <div class="toggle-carousel-nav-group">
            <button class="toggle-carousel-nav-btn" title="Previous" onclick="const t=document.getElementById('demoCarouselTrack'); t.scrollBy({left:-280, behavior:'smooth'}); if(window.soundEngine) soundEngine.playClick();"><span class="material-symbols-rounded">arrow_back</span></button>
            <button class="toggle-carousel-nav-btn" title="Next" onclick="const t=document.getElementById('demoCarouselTrack'); t.scrollBy({left:280, behavior:'smooth'}); if(window.soundEngine) soundEngine.playClick();"><span class="material-symbols-rounded">arrow_forward</span></button>
          </div>
        </div>

        <!-- Carousel Scroll Track -->
        <div class="toggle-carousel-track" id="demoCarouselTrack">
          <!-- Card 1 -->
          <div class="toggle-carousel-card card-gradient-blue" onclick="if(window.soundEngine) soundEngine.playClick(); showSnackbar('Clicked: Expressive Theming');">
            <div class="toggle-carousel-card-top">
              <span class="material-symbols-rounded toggle-carousel-card-icon">palette</span>
              <span class="toggle-carousel-badge">M3 System</span>
            </div>
            <div class="toggle-carousel-card-body">
              <h4 class="toggle-carousel-card-title">Expressive Theming</h4>
              <p class="toggle-carousel-card-desc">Dynamic tonal palettes generated from algorithmically sound seed colors.</p>
            </div>
          </div>
          <!-- Card 2 -->
          <div class="toggle-carousel-card card-gradient-green" onclick="if(window.soundEngine) soundEngine.playClick(); showSnackbar('Clicked: Tactile Sound FX');">
            <div class="toggle-carousel-card-top">
              <span class="material-symbols-rounded toggle-carousel-card-icon">volume_up</span>
              <span class="toggle-carousel-badge">Zero Assets</span>
            </div>
            <div class="toggle-carousel-card-body">
              <h4 class="toggle-carousel-card-title">Tactile Audio FX</h4>
              <p class="toggle-carousel-card-desc">Micro-synthesized clicks generated via real-time Web Audio API.</p>
            </div>
          </div>
          <!-- Card 3 -->
          <div class="toggle-carousel-card card-gradient-purple" onclick="if(window.soundEngine) soundEngine.playClick(); showSnackbar('Clicked: 25 Switches');">
            <div class="toggle-carousel-card-top">
              <span class="material-symbols-rounded toggle-carousel-card-icon">toggle_on</span>
              <span class="toggle-carousel-badge">Flagship</span>
            </div>
            <div class="toggle-carousel-card-body">
              <h4 class="toggle-carousel-card-title">25 Switch Styles</h4>
              <p class="toggle-carousel-card-desc">Material, iOS, Elastic physics, Cyber glow, and Celestial micro-interactions.</p>
            </div>
          </div>
          <!-- Card 4 -->
          <div class="toggle-carousel-card card-gradient-amber" onclick="if(window.soundEngine) soundEngine.playClick(); showSnackbar('Clicked: Accessible By Default');">
            <div class="toggle-carousel-card-top">
              <span class="material-symbols-rounded toggle-carousel-card-icon">verified</span>
              <span class="toggle-carousel-badge">WCAG 2.1 AA</span>
            </div>
            <div class="toggle-carousel-card-body">
              <h4 class="toggle-carousel-card-title">Accessible Core</h4>
              <p class="toggle-carousel-card-desc">Complete keyboard focus traps, High Contrast Mode, and ARIA state labels.</p>
            </div>
          </div>
        </div>

        <!-- Carousel Indicators -->
        <div class="toggle-carousel-indicators">
          <span class="toggle-carousel-dot active"></span>
          <span class="toggle-carousel-dot"></span>
          <span class="toggle-carousel-dot"></span>
          <span class="toggle-carousel-dot"></span>
        </div>
      </div>
    `,
    html: `<!-- Material 3 Multi-Browse Carousel -->
<div class="toggle-carousel">
  <div class="toggle-carousel-track">
    <div class="toggle-carousel-card">
      <span class="material-symbols-rounded toggle-carousel-card-icon">palette</span>
      <h4>Expressive Theming</h4>
      <p>Dynamic tonal palettes generated from seed colors.</p>
    </div>
  </div>
</div>`,
    css: `.toggle-carousel-track {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding: 8px 4px 16px;
  -webkit-overflow-scrolling: touch;
}
.toggle-carousel-card {
  flex: 0 0 260px;
  scroll-snap-align: start;
  border-radius: var(--radius-lg);
  padding: 24px;
  cursor: pointer;
  transition: transform var(--transition-bounce), box-shadow var(--transition-fast);
}
.toggle-carousel-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--elevation-3);
}`,
    react: `export function Carousel({ items }) {
  return (
    <div className="toggle-carousel">
      <div className="toggle-carousel-track">
        {items.map((item, idx) => (
          <div key={idx} className="toggle-carousel-card">
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}`,
    variations: [
      { name: "Hero Large Carousel", desc: "Wide showcase cards with background art", html: `<div class="toggle-carousel-card card-gradient-blue" style="width:100%; max-width:380px;"><h4>Featured Component</h4><p>Hero banner variant with expanded text layout.</p></div>` }
    ],
    tokens: [
      { token: "--radius-lg", default: "24px", desc: "Corner rounding for carousel card surfaces" },
      { token: "--elevation-2", default: "0 3px 6px rgba(0,0,0,0.12)", desc: "Resting card elevation" }
    ],
    wcag: "Supports horizontal arrow key navigation and scroll snap points with aria-roledescription='carousel'."
  },

  // ------------------------------------------------------------------------
  // 46. COLOR PICKER & PALETTE MATRIX
  // ------------------------------------------------------------------------
  "colorpicker": {
    id: "colorpicker",
    name: "Color Picker & Palette Matrix",
    category: "inputs",
    icon: "colorize",
    badge: "Material You",
    description: "Material You tonal color selector with continuous hue slider, opacity adjustment, curated Google palette swatches, and instant hex value clipboard copying.",
    interactiveHtml: `
      <div class="toggle-colorpicker-card" style="width:100%; max-width:480px;">
        <!-- Live Preview Header -->
        <div class="toggle-colorpicker-header">
          <div class="toggle-color-preview-circle" id="demoColorCircle" style="background:#0b57d0;"></div>
          <div class="toggle-color-info">
            <span class="toggle-color-hex" id="demoColorHex">#0B57D0</span>
            <span class="toggle-color-label" id="demoColorName">Google Blue • Primary Tone 40</span>
          </div>
          <button class="toggle-color-copy-btn" id="demoColorCopyBtn" onclick="navigator.clipboard.writeText(document.getElementById('demoColorHex').textContent); this.innerHTML='<span class=\\'material-symbols-rounded\\'>check</span> Copied'; if(window.soundEngine) soundEngine.playClick(); showSnackbar('Copied color token!'); setTimeout(()=>this.innerHTML='<span class=\\'material-symbols-rounded\\'>content_copy</span> Copy', 1500);">
            <span class="material-symbols-rounded">content_copy</span>
            <span>Copy</span>
          </button>
        </div>

        <!-- Hue Range Slider -->
        <div class="toggle-color-slider-group">
          <div style="display:flex; justify-content:space-between; font-size:0.8rem; font-weight:600; color:var(--md-sys-color-on-surface-variant); margin-bottom:6px;">
            <span>Spectrum Hue</span>
            <span id="demoHueVal">217°</span>
          </div>
          <input type="range" class="toggle-color-hue-slider" id="demoHueSlider" min="0" max="360" value="217" oninput="
            const h=this.value; document.getElementById('demoHueVal').textContent=h+'°';
            const c='hsl('+h+', 85%, 45%)';
            document.getElementById('demoColorCircle').style.background=c;
            document.getElementById('demoColorHex').textContent='HSL('+h+', 85%, 45%)';
            document.getElementById('demoColorName').textContent='Dynamic Seed Hue • Tone';
          " />
        </div>

        <!-- Material You 8-Color Preset Matrix -->
        <div style="font-size:0.82rem; font-weight:700; color:var(--md-sys-color-on-surface); margin-bottom:10px;">Material You Tonal Palettes</div>
        <div class="toggle-color-matrix">
          <button class="toggle-matrix-swatch active" style="background:#0b57d0;" data-hex="#0B57D0" data-name="Google Blue" onclick="document.querySelectorAll('.toggle-matrix-swatch').forEach(s=>s.classList.remove('active')); this.classList.add('active'); document.getElementById('demoColorCircle').style.background='#0b57d0'; document.getElementById('demoColorHex').textContent='#0B57D0'; document.getElementById('demoColorName').textContent='Google Blue • Tone 40'; if(window.soundEngine) soundEngine.playClick();" title="Google Blue"></button>
          <button class="toggle-matrix-swatch" style="background:#0d8043;" data-hex="#0D8043" data-name="Google Green" onclick="document.querySelectorAll('.toggle-matrix-swatch').forEach(s=>s.classList.remove('active')); this.classList.add('active'); document.getElementById('demoColorCircle').style.background='#0d8043'; document.getElementById('demoColorHex').textContent='#0D8043'; document.getElementById('demoColorName').textContent='Google Green • Tone 40'; if(window.soundEngine) soundEngine.playClick();" title="Google Green"></button>
          <button class="toggle-matrix-swatch" style="background:#d93025;" data-hex="#D93025" data-name="Google Red" onclick="document.querySelectorAll('.toggle-matrix-swatch').forEach(s=>s.classList.remove('active')); this.classList.add('active'); document.getElementById('demoColorCircle').style.background='#d93025'; document.getElementById('demoColorHex').textContent='#D93025'; document.getElementById('demoColorName').textContent='Google Red • Tone 40'; if(window.soundEngine) soundEngine.playClick();" title="Google Red"></button>
          <button class="toggle-matrix-swatch" style="background:#f9ab00;" data-hex="#F9AB00" data-name="Google Yellow" onclick="document.querySelectorAll('.toggle-matrix-swatch').forEach(s=>s.classList.remove('active')); this.classList.add('active'); document.getElementById('demoColorCircle').style.background='#f9ab00'; document.getElementById('demoColorHex').textContent='#F9AB00'; document.getElementById('demoColorName').textContent='Google Yellow • Tone 70'; if(window.soundEngine) soundEngine.playClick();" title="Google Yellow"></button>
          <button class="toggle-matrix-swatch" style="background:#7c3aed;" data-hex="#7C3AED" data-name="Google Purple" onclick="document.querySelectorAll('.toggle-matrix-swatch').forEach(s=>s.classList.remove('active')); this.classList.add('active'); document.getElementById('demoColorCircle').style.background='#7c3aed'; document.getElementById('demoColorHex').textContent='#7C3AED'; document.getElementById('demoColorName').textContent='Google Purple • Tone 40'; if(window.soundEngine) soundEngine.playClick();" title="Google Purple"></button>
          <button class="toggle-matrix-swatch" style="background:#00838f;" data-hex="#00838F" data-name="Cyan Teal" onclick="document.querySelectorAll('.toggle-matrix-swatch').forEach(s=>s.classList.remove('active')); this.classList.add('active'); document.getElementById('demoColorCircle').style.background='#00838f'; document.getElementById('demoColorHex').textContent='#00838F'; document.getElementById('demoColorName').textContent='Cyan Teal • Tone 40'; if(window.soundEngine) soundEngine.playClick();" title="Cyan Teal"></button>
          <button class="toggle-matrix-swatch" style="background:#e91e63;" data-hex="#E91E63" data-name="Pink Flamingo" onclick="document.querySelectorAll('.toggle-matrix-swatch').forEach(s=>s.classList.remove('active')); this.classList.add('active'); document.getElementById('demoColorCircle').style.background='#e91e63'; document.getElementById('demoColorHex').textContent='#E91E63'; document.getElementById('demoColorName').textContent='Pink Flamingo • Tone 40'; if(window.soundEngine) soundEngine.playClick();" title="Pink Flamingo"></button>
          <button class="toggle-matrix-swatch" style="background:#e65100;" data-hex="#E65100" data-name="Deep Orange" onclick="document.querySelectorAll('.toggle-matrix-swatch').forEach(s=>s.classList.remove('active')); this.classList.add('active'); document.getElementById('demoColorCircle').style.background='#e65100'; document.getElementById('demoColorHex').textContent='#E65100'; document.getElementById('demoColorName').textContent='Deep Orange • Tone 40'; if(window.soundEngine) soundEngine.playClick();" title="Deep Orange"></button>
        </div>
      </div>
    `,
    html: `<!-- Material You Color Picker Matrix -->
<div class="toggle-colorpicker-card">
  <div class="toggle-colorpicker-header">
    <div class="toggle-color-preview-circle" style="background:#0b57d0;"></div>
    <div class="toggle-color-info">
      <span class="toggle-color-hex">#0B57D0</span>
    </div>
  </div>
  <input type="range" class="toggle-color-hue-slider" min="0" max="360" value="217" />
</div>`,
    css: `.toggle-colorpicker-card {
  background-color: var(--md-sys-color-surface-container-low);
  border: 1px solid var(--md-sys-color-card-border);
  border-radius: var(--radius-lg);
  padding: 24px;
}
.toggle-color-preview-circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  box-shadow: var(--elevation-2);
}
.toggle-color-hue-slider {
  width: 100%;
  height: 12px;
  border-radius: var(--radius-full);
  background: linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000);
  outline: none;
  -webkit-appearance: none;
}`,
    react: `export function ColorPicker({ value = '#0b57d0', onChange }) {
  return (
    <div className="toggle-colorpicker-card">
      <div className="toggle-color-preview-circle" style={{ background: value }} />
      <input
        type="range"
        className="toggle-color-hue-slider"
        min="0"
        max="360"
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
}`,
    variations: [
      { name: "Mini Inline Swatch Bar", desc: "Horizontal single-line swatch selector", html: `<div style="display:flex; gap:8px;"><span class="toggle-matrix-swatch active" style="background:#0b57d0;"></span><span class="toggle-matrix-swatch" style="background:#0d8043;"></span><span class="toggle-matrix-swatch" style="background:#d93025;"></span></div>` }
    ],
    tokens: [
      { token: "--radius-lg", default: "24px", desc: "Surface radius for picker modal container" },
      { token: "--md-sys-color-primary", default: "#0b57d0", desc: "Default selected swatch tone" }
    ],
    wcag: "Exposes color values as readable hex strings with aria-label on each color swatch button."
  },

  // ------------------------------------------------------------------------
  // 47. CODE BLOCK & SNIPPETS
  // ------------------------------------------------------------------------
  "codeblock": {
    id: "codeblock",
    name: "Code Block & Snippet",
    category: "display",
    icon: "terminal",
    badge: "Dev Experience",
    description: "Code blocks present code snippets cleanly with language badges, filename tabs, syntax highlighting cues, line numbers, and a single-click copy button.",
    interactiveHtml: `
      <div class="toggle-codeblock-wrap" style="width:100%; max-width:620px;">
        <!-- Window Header -->
        <div class="toggle-codeblock-header">
          <div class="toggle-codeblock-window-dots">
            <span class="code-dot red"></span>
            <span class="code-dot yellow"></span>
            <span class="code-dot green"></span>
          </div>
          <div class="toggle-codeblock-tab">
            <span class="material-symbols-rounded" style="font-size:16px; color:#60a5fa;">javascript</span>
            <span>ToggleSwitch.jsx</span>
          </div>
          <button class="toggle-codeblock-copy" onclick="
            navigator.clipboard.writeText('import { Switch } from \\'@dattebayoolo/toggle-ui-library\\';\\n\\nexport function Settings() {\\n  return <Switch defaultChecked={true} onChange={console.log} />;\\n}');
            this.innerHTML='<span class=\\'material-symbols-rounded\\'>check</span> Copied';
            if(window.soundEngine) soundEngine.playClick();
            showSnackbar('Code copied to clipboard!');
            setTimeout(()=>this.innerHTML='<span class=\\'material-symbols-rounded\\'>content_copy</span> Copy', 1600);
          ">
            <span class="material-symbols-rounded">content_copy</span>
            <span>Copy</span>
          </button>
        </div>

        <!-- Code Body with Line Numbers -->
        <div class="toggle-codeblock-body">
          <div class="toggle-code-line"><span class="toggle-code-num">1</span><span class="token-keyword">import</span> { <span class="token-component">Switch</span>, <span class="token-component">useTheme</span> } <span class="token-keyword">from</span> <span class="token-string">'@dattebayoolo/toggle-ui-library'</span>;</div>
          <div class="toggle-code-line"><span class="toggle-code-num">2</span></div>
          <div class="toggle-code-line active-line"><span class="toggle-code-num">3</span><span class="token-comment">// Material 3 accessible haptic switch component</span></div>
          <div class="toggle-code-line"><span class="toggle-code-num">4</span><span class="token-keyword">export default function</span> <span class="token-fn">PreferencesCard</span>() {</div>
          <div class="toggle-code-line"><span class="toggle-code-num">5</span>  <span class="token-keyword">const</span> [sound, setSound] = <span class="token-fn">useState</span>(<span class="token-bool">true</span>);</div>
          <div class="toggle-code-line"><span class="toggle-code-num">6</span>  <span class="token-keyword">return</span> (</div>
          <div class="toggle-code-line"><span class="toggle-code-num">7</span>    &lt;<span class="token-tag">div</span> <span class="token-attr">className</span>=<span class="token-string">"toggle-card"</span>&gt;</div>
          <div class="toggle-code-line"><span class="toggle-code-num">8</span>      &lt;<span class="token-component">Switch</span> <span class="token-attr">checked</span>={sound} <span class="token-attr">onChange</span>={setSound} <span class="token-attr">sound</span>=<span class="token-string">"tactile"</span> /&gt;</div>
          <div class="toggle-code-line"><span class="toggle-code-num">9</span>    &lt;/<span class="token-tag">div</span>&gt;</div>
          <div class="toggle-code-line"><span class="toggle-code-num">10</span>  );</div>
          <div class="toggle-code-line"><span class="toggle-code-num">11</span>}</div>
        </div>
      </div>
    `,
    html: `<!-- Code Block with Header and Copy Button -->
<div class="toggle-codeblock-wrap">
  <div class="toggle-codeblock-header">
    <div class="toggle-codeblock-tab">
      <span>App.jsx</span>
    </div>
    <button class="toggle-codeblock-copy">
      <span class="material-symbols-rounded">content_copy</span>
      <span>Copy</span>
    </button>
  </div>
  <pre class="toggle-codeblock-body"><code>const active = true;</code></pre>
</div>`,
    css: `.toggle-codeblock-wrap {
  border-radius: var(--radius-md);
  overflow: hidden;
  background-color: #1e1e2e;
  color: #cdd6f4;
  box-shadow: var(--elevation-2);
}
.toggle-codeblock-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background-color: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.toggle-codeblock-body {
  padding: 16px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.88rem;
  line-height: 1.6;
}`,
    react: `export function CodeBlock({ filename, code }) {
  return (
    <div className="toggle-codeblock-wrap">
      <div className="toggle-codeblock-header">
        <span>{filename}</span>
        <button onClick={() => navigator.clipboard.writeText(code)}>Copy</button>
      </div>
      <pre className="toggle-codeblock-body"><code>{code}</code></pre>
    </div>
  );
}`,
    variations: [
      { name: "Terminal Prompt Style", desc: "Dark bash terminal with shell prompt marker", html: `<div class="toggle-codeblock-wrap" style="background:#0f172a; padding:12px 16px; font-family:'JetBrains Mono', monospace;"><span style="color:#22c55e;">$</span> npm install @dattebayoolo/toggle-ui-library</div>` }
    ],
    tokens: [
      { token: "--radius-md", default: "16px", desc: "Container corner radius" },
      { token: "--elevation-2", default: "0 3px 6px rgba(0,0,0,0.12)", desc: "Code box elevation shadow" }
    ],
    wcag: "Uses semantic <pre><code> tags and includes accessible labels for copy button states."
  },

  // ------------------------------------------------------------------------
  // 48. EMPTY STATE CANVASES
  // ------------------------------------------------------------------------
  "emptystate": {
    id: "emptystate",
    name: "Empty State Canvases",
    category: "display",
    icon: "inbox",
    badge: "UX Pattern",
    description: "Empty states communicate that a space has no content to show yet and guide users to take action. They feature illustrative iconography, helpful explanations, and clear primary calls to action.",
    interactiveHtml: `
      <div class="toggle-empty-container" style="width:100%; max-width:540px; display:flex; flex-direction:column; gap:20px;">
        <!-- State Selector Buttons -->
        <div class="toggle-btn-group" style="align-self:center;">
          <button class="toggle-segment-btn active" id="btnEmptyProjects" onclick="
            document.querySelectorAll('.toggle-empty-container .toggle-segment-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active');
            document.getElementById('demoEmptyIcon').textContent = 'folder_open';
            document.getElementById('demoEmptyTitle').textContent = 'No projects created yet';
            document.getElementById('demoEmptyDesc').textContent = 'Your workspace is clear and ready. Kickstart your component library by creating your first UI project.';
            document.getElementById('demoEmptyBtn').textContent = 'Create New Project';
            if(window.soundEngine) soundEngine.playClick();
          ">No Projects</button>
          <button class="toggle-segment-btn" id="btnEmptySearch" onclick="
            document.querySelectorAll('.toggle-empty-container .toggle-segment-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active');
            document.getElementById('demoEmptyIcon').textContent = 'search_off';
            document.getElementById('demoEmptyTitle').textContent = 'No matching results found';
            document.getElementById('demoEmptyDesc').textContent = 'We couldn\\'t find any components matching your search query. Try checking your spelling or adjusting filters.';
            document.getElementById('demoEmptyBtn').textContent = 'Clear All Filters';
            if(window.soundEngine) soundEngine.playClick();
          ">Search Empty</button>
          <button class="toggle-segment-btn" id="btnEmptyInbox" onclick="
            document.querySelectorAll('.toggle-empty-container .toggle-segment-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active');
            document.getElementById('demoEmptyIcon').textContent = 'mark_email_read';
            document.getElementById('demoEmptyTitle').textContent = 'You are all caught up!';
            document.getElementById('demoEmptyDesc').textContent = 'Zero unread notifications or review requests in your queue. Enjoy the peaceful inbox zero.';
            document.getElementById('demoEmptyBtn').textContent = 'Refresh Activity';
            if(window.soundEngine) soundEngine.playClick();
          ">Inbox Zero</button>
        </div>

        <!-- Empty State Surface -->
        <div class="toggle-empty-state">
          <div class="toggle-empty-icon-wrap">
            <span class="material-symbols-rounded toggle-empty-icon" id="demoEmptyIcon">folder_open</span>
          </div>
          <h3 class="toggle-empty-title" id="demoEmptyTitle">No projects created yet</h3>
          <p class="toggle-empty-desc" id="demoEmptyDesc">Your workspace is clear and ready. Kickstart your component library by creating your first UI project.</p>
          <div class="toggle-empty-actions">
            <button class="toggle-btn toggle-btn-filled" id="demoEmptyBtn" onclick="if(window.soundEngine) soundEngine.playClick(); showSnackbar('Primary action triggered!');">
              Create New Project
            </button>
            <button class="toggle-btn toggle-btn-text" onclick="if(window.soundEngine) soundEngine.playClick(); showSnackbar('Opening documentation guide...');">
              Explore Documentation
            </button>
          </div>
        </div>
      </div>
    `,
    html: `<!-- Material 3 Illustrated Empty State -->
<div class="toggle-empty-state">
  <div class="toggle-empty-icon-wrap">
    <span class="material-symbols-rounded toggle-empty-icon">folder_open</span>
  </div>
  <h3 class="toggle-empty-title">No projects created yet</h3>
  <p class="toggle-empty-desc">Your workspace is ready. Create your first project to get started.</p>
  <div class="toggle-empty-actions">
    <button class="toggle-btn toggle-btn-filled">Create New Project</button>
  </div>
</div>`,
    css: `.toggle-empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 48px 24px;
  background-color: var(--md-sys-color-surface-container-low);
  border: 1px solid var(--md-sys-color-card-border);
  border-radius: var(--radius-xl);
}
.toggle-empty-icon-wrap {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: var(--md-sys-color-primary-container);
  color: var(--md-sys-color-on-primary-container);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.toggle-empty-icon {
  font-size: 36px;
}
.toggle-empty-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--md-sys-color-on-surface);
}
.toggle-empty-desc {
  font-size: 0.95rem;
  color: var(--md-sys-color-on-surface-variant);
  max-width: 400px;
  margin-bottom: 24px;
  line-height: 1.5;
}`,
    react: `export function EmptyState({ icon = "folder_open", title, description, actionText, onAction }) {
  return (
    <div className="toggle-empty-state">
      <div className="toggle-empty-icon-wrap">
        <span className="material-symbols-rounded toggle-empty-icon">{icon}</span>
      </div>
      <h3 className="toggle-empty-title">{title}</h3>
      <p className="toggle-empty-desc">{description}</p>
      {actionText && (
        <button className="toggle-btn toggle-btn-filled" onClick={onAction}>
          {actionText}
        </button>
      )}
    </div>
  );
}`,
    variations: [
      { name: "Compact Empty State", desc: "Smaller padding for cards and dialog interiors", html: `<div class="toggle-empty-state" style="padding:24px;"><span class="material-symbols-rounded" style="font-size:28px; color:var(--md-sys-color-outline);">inbox</span><h5 style="margin:8px 0 4px;">Nothing here</h5><p style="font-size:0.8rem; margin:0;">Check back later</p></div>` }
    ],
    tokens: [
      { token: "--radius-xl", default: "28px", desc: "Outermost container radius" },
      { token: "--md-sys-color-primary-container", default: "#d3e3fd", desc: "Glow background circle fill" }
    ],
    wcag: "Ensures meaningful alternative text and clear heading hierarchy (h3) for screen readers."
  },

  // ------------------------------------------------------------------------
  // 49. NAVIGATION DRAWER & SIDE SHEET
  // ------------------------------------------------------------------------
  "drawer": {
    id: "drawer",
    name: "Navigation Drawer & Side Sheet",
    category: "navigation",
    icon: "dock_to_right",
    badge: "M3 Navigation",
    description: "Navigation Drawers provide access to top-level destinations in an application. Features user account card, active pill highlights, trailing badge counters, and organized section dividers.",
    interactiveHtml: `
      <div class="toggle-drawer-demo-frame" style="width:100%; max-width:440px; border-radius:24px; overflow:hidden; border:1px solid var(--md-sys-color-card-border); background:var(--md-sys-color-surface-container-low); box-shadow:var(--elevation-3);">
        <!-- Drawer Header / Account info -->
        <div class="toggle-drawer-header">
          <div class="toggle-drawer-user-row">
            <div class="toggle-drawer-avatar">KM</div>
            <div class="toggle-drawer-user-info">
              <div style="font-weight:700; font-size:0.95rem; color:var(--md-sys-color-on-surface);">Kazam Mahmood</div>
              <div style="font-size:0.78rem; color:var(--md-sys-color-outline);">kazam.lead@toggle.design</div>
            </div>
            <span class="material-symbols-rounded" style="color:var(--md-sys-color-outline); font-size:20px; cursor:pointer;" onclick="showSnackbar('Switching account profile'); if(window.soundEngine) soundEngine.playClick();">arrow_drop_down</span>
          </div>
        </div>

        <!-- Primary Nav Items -->
        <nav class="toggle-drawer-nav" id="demoDrawerNav">
          <div class="toggle-drawer-item active" onclick="document.querySelectorAll('#demoDrawerNav .toggle-drawer-item').forEach(i=>i.classList.remove('active')); this.classList.add('active'); if(window.soundEngine) soundEngine.playClick(); showSnackbar('Navigated to Inbox');">
            <span class="material-symbols-rounded toggle-drawer-item-icon">inbox</span>
            <span class="toggle-drawer-item-label">Inbox</span>
            <span class="toggle-drawer-badge">14</span>
          </div>
          <div class="toggle-drawer-item" onclick="document.querySelectorAll('#demoDrawerNav .toggle-drawer-item').forEach(i=>i.classList.remove('active')); this.classList.add('active'); if(window.soundEngine) soundEngine.playClick(); showSnackbar('Navigated to Starred');">
            <span class="material-symbols-rounded toggle-drawer-item-icon">star</span>
            <span class="toggle-drawer-item-label">Starred</span>
          </div>
          <div class="toggle-drawer-item" onclick="document.querySelectorAll('#demoDrawerNav .toggle-drawer-item').forEach(i=>i.classList.remove('active')); this.classList.add('active'); if(window.soundEngine) soundEngine.playClick(); showSnackbar('Navigated to Sent');">
            <span class="material-symbols-rounded toggle-drawer-item-icon">send</span>
            <span class="toggle-drawer-item-label">Sent</span>
          </div>
          <div class="toggle-drawer-item" onclick="document.querySelectorAll('#demoDrawerNav .toggle-drawer-item').forEach(i=>i.classList.remove('active')); this.classList.add('active'); if(window.soundEngine) soundEngine.playClick(); showSnackbar('Navigated to Drafts');">
            <span class="material-symbols-rounded toggle-drawer-item-icon">drafts</span>
            <span class="toggle-drawer-item-label">Drafts</span>
            <span class="toggle-drawer-badge">3</span>
          </div>

          <div class="toggle-drawer-divider"></div>
          <div class="toggle-drawer-section-title">Labels & Spaces</div>

          <div class="toggle-drawer-item" onclick="document.querySelectorAll('#demoDrawerNav .toggle-drawer-item').forEach(i=>i.classList.remove('active')); this.classList.add('active'); if(window.soundEngine) soundEngine.playClick(); showSnackbar('Label: Design System');">
            <span class="material-symbols-rounded toggle-drawer-item-icon" style="color:#0b57d0;">label</span>
            <span class="toggle-drawer-item-label">Design System</span>
          </div>
          <div class="toggle-drawer-item" onclick="document.querySelectorAll('#demoDrawerNav .toggle-drawer-item').forEach(i=>i.classList.remove('active')); this.classList.add('active'); if(window.soundEngine) soundEngine.playClick(); showSnackbar('Label: Engineering Core');">
            <span class="material-symbols-rounded toggle-drawer-item-icon" style="color:#0d8043;">label</span>
            <span class="toggle-drawer-item-label">Engineering Core</span>
          </div>

          <div class="toggle-drawer-divider"></div>

          <div class="toggle-drawer-item" onclick="if(window.soundEngine) soundEngine.playClick(); showSnackbar('Opening System Settings');">
            <span class="material-symbols-rounded toggle-drawer-item-icon">settings</span>
            <span class="toggle-drawer-item-label">Settings</span>
          </div>
        </nav>
      </div>
    `,
    html: `<!-- Material 3 Standard Navigation Drawer -->
<nav class="toggle-drawer">
  <div class="toggle-drawer-item active">
    <span class="material-symbols-rounded">inbox</span>
    <span>Inbox</span>
    <span class="toggle-drawer-badge">12</span>
  </div>
  <div class="toggle-drawer-item">
    <span class="material-symbols-rounded">star</span>
    <span>Starred</span>
  </div>
</nav>`,
    css: `.toggle-drawer {
  width: 320px;
  background-color: var(--md-sys-color-surface-container-low);
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
}
.toggle-drawer-item {
  display: flex;
  align-items: center;
  gap: 16px;
  height: 48px;
  padding: 0 16px;
  border-radius: var(--radius-full);
  color: var(--md-sys-color-on-surface-variant);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-fast);
}
.toggle-drawer-item:hover {
  background-color: var(--md-sys-color-surface-container-highest);
  color: var(--md-sys-color-on-surface);
}
.toggle-drawer-item.active {
  background-color: var(--md-sys-color-secondary-container);
  color: var(--md-sys-color-on-secondary-container);
  font-weight: 700;
}`,
    react: `export function NavigationDrawer({ items, activeId, onSelect }) {
  return (
    <nav className="toggle-drawer">
      {items.map(item => (
        <div
          key={item.id}
          className={\`toggle-drawer-item \${activeId === item.id ? 'active' : ''}\`}
          onClick={() => onSelect(item.id)}
        >
          <span className="material-symbols-rounded">{item.icon}</span>
          <span>{item.label}</span>
          {item.badge && <span className="toggle-drawer-badge">{item.badge}</span>}
        </div>
      ))}
    </nav>
  );
}`,
    variations: [
      { name: "Modal Side Sheet", desc: "Overlay drawer for secondary mobile contextual actions", html: `<div class="toggle-drawer-item active"><span class="material-symbols-rounded">tune</span><span>Adjust Parameters</span></div>` }
    ],
    tokens: [
      { token: "--radius-full", default: "9999px", desc: "Pill indicator active background radius" },
      { token: "--md-sys-color-secondary-container", default: "#c2e7ff", desc: "Active item container background" }
    ],
    wcag: "Uses semantic <nav> landmark with role='navigation' and aria-current='page' on active links."
  },

  // ------------------------------------------------------------------------
  // 50. SPLIT BUTTON & ACTIONS
  // ------------------------------------------------------------------------
  "splitbutton": {
    id: "splitbutton",
    name: "Split Button & Actions",
    category: "actions",
    icon: "call_split",
    badge: "M3 Actions",
    description: "Split buttons combine a primary action with a secondary dropdown menu trigger in a unified pill container. Ideal for contextual actions like Save & Publish or Create New Project.",
    interactiveHtml: `
      <div style="display:flex; flex-direction:column; align-items:center; gap:24px; position:relative; min-height:220px;">
        <!-- Split Button Container -->
        <div class="toggle-split-btn" id="demoSplitBtn">
          <button class="toggle-split-primary" onclick="if(window.soundEngine) soundEngine.playClick(); showSnackbar('Primary action: Saved changes successfully!');">
            <span class="material-symbols-rounded">save</span>
            <span>Save Changes</span>
          </button>
          <div class="toggle-split-sep"></div>
          <button class="toggle-split-caret" title="More options" onclick="
            const m = document.getElementById('demoSplitMenu');
            m.classList.toggle('open');
            if(window.soundEngine) soundEngine.playClick();
          ">
            <span class="material-symbols-rounded">arrow_drop_down</span>
          </button>
        </div>

        <!-- Floating Action Menu -->
        <div class="toggle-split-menu" id="demoSplitMenu">
          <div class="toggle-split-menu-item" onclick="document.getElementById('demoSplitMenu').classList.remove('open'); if(window.soundEngine) soundEngine.playClick(); showSnackbar('Saved as draft');">
            <span class="material-symbols-rounded">draft</span>
            <span>Save as Draft</span>
          </div>
          <div class="toggle-split-menu-item" onclick="document.getElementById('demoSplitMenu').classList.remove('open'); if(window.soundEngine) soundEngine.playClick(); showSnackbar('Exporting project JSON...');">
            <span class="material-symbols-rounded">file_download</span>
            <span>Export as JSON</span>
          </div>
          <div class="toggle-split-menu-divider"></div>
          <div class="toggle-split-menu-item" style="color:var(--google-green);" onclick="document.getElementById('demoSplitMenu').classList.remove('open'); if(window.soundEngine) soundEngine.playClick(); showSnackbar('Publishing live to production!');">
            <span class="material-symbols-rounded" style="color:var(--google-green);">rocket_launch</span>
            <span>Publish Live</span>
          </div>
        </div>
      </div>
    `,
    html: `<!-- Material 3 Split Button -->
<div class="toggle-split-btn">
  <button class="toggle-split-primary">
    <span class="material-symbols-rounded">save</span>
    <span>Save Changes</span>
  </button>
  <div class="toggle-split-sep"></div>
  <button class="toggle-split-caret" aria-label="More options">
    <span class="material-symbols-rounded">arrow_drop_down</span>
  </button>
</div>`,
    css: `.toggle-split-btn {
  display: inline-flex;
  align-items: center;
  border-radius: var(--radius-full);
  background-color: var(--md-sys-color-primary);
  color: #ffffff;
  box-shadow: var(--elevation-1);
  overflow: hidden;
  transition: all var(--transition-fast);
}
.toggle-split-btn:hover {
  box-shadow: var(--elevation-2);
  filter: brightness(0.95);
}
.toggle-split-primary {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: transparent;
  border: none;
  color: inherit;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
}
.toggle-split-sep {
  width: 1px;
  height: 24px;
  background-color: rgba(255, 255, 255, 0.25);
}
.toggle-split-caret {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 12px;
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
}`,
    react: `export function SplitButton({ onPrimary, options = [] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="toggle-split-btn">
      <button className="toggle-split-primary" onClick={onPrimary}>
        Save Changes
      </button>
      <div className="toggle-split-sep" />
      <button className="toggle-split-caret" onClick={() => setOpen(!open)}>
        <span className="material-symbols-rounded">arrow_drop_down</span>
      </button>
    </div>
  );
}`,
    variations: [
      { name: "Tonal Split Button", desc: "Lower emphasis split pill for secondary toolbars", html: `<div class="toggle-split-btn" style="background:var(--md-sys-color-surface-container-high); color:var(--md-sys-color-on-surface);"><button class="toggle-split-primary"><span>Export</span></button><div class="toggle-split-sep" style="background:var(--md-sys-color-card-border);"></div><button class="toggle-split-caret"><span class="material-symbols-rounded">arrow_drop_down</span></button></div>` }
    ],
    tokens: [
      { token: "--radius-full", default: "9999px", desc: "Pill curvature for joined split container" },
      { token: "--md-sys-color-primary", default: "#0b57d0", desc: "Primary fill tone" }
    ],
    wcag: "Caret button includes aria-haspopup='menu' and aria-expanded state."
  },

  // ------------------------------------------------------------------------
  // 51. SELECTABLE TOGGLE CARDS
  // ------------------------------------------------------------------------
  "togglecard": {
    id: "togglecard",
    name: "Selectable Toggle Cards",
    category: "actions",
    icon: "fact_check",
    badge: "Interactive M3",
    description: "Selectable cards blend card surfaces with toggle selection states. Often used for subscription pricing plans, device selection, or permission settings.",
    interactiveHtml: `
      <div class="toggle-selectable-grid" id="demoCardGrid" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:16px; width:100%; max-width:620px;">
        <!-- Card 1 -->
        <div class="toggle-selectable-card" onclick="document.querySelectorAll('.toggle-selectable-card').forEach(c=>c.classList.remove('selected')); this.classList.add('selected'); if(window.soundEngine) soundEngine.playClick(); showSnackbar('Selected Starter Plan');">
          <div class="toggle-card-radio-wrap">
            <span class="material-symbols-rounded toggle-card-check">radio_button_unchecked</span>
          </div>
          <h4 class="toggle-card-tier-title">Starter</h4>
          <div class="toggle-card-price">$0<span style="font-size:0.75rem; color:var(--md-sys-color-outline);">/mo</span></div>
          <ul class="toggle-card-feature-list">
            <li><span class="material-symbols-rounded">check</span> 5 Toggle Styles</li>
            <li><span class="material-symbols-rounded">check</span> Pure CSS bundle</li>
          </ul>
        </div>

        <!-- Card 2 (Active/Popular) -->
        <div class="toggle-selectable-card selected" onclick="document.querySelectorAll('.toggle-selectable-card').forEach(c=>c.classList.remove('selected')); this.classList.add('selected'); if(window.soundEngine) soundEngine.playClick(); showSnackbar('Selected Pro Plan');">
          <div class="toggle-card-popular-badge">POPULAR</div>
          <div class="toggle-card-radio-wrap">
            <span class="material-symbols-rounded toggle-card-check">check_circle</span>
          </div>
          <h4 class="toggle-card-tier-title">Professional</h4>
          <div class="toggle-card-price">$19<span style="font-size:0.75rem; color:var(--md-sys-color-outline);">/mo</span></div>
          <ul class="toggle-card-feature-list">
            <li><span class="material-symbols-rounded">check</span> All 25+ Switches</li>
            <li><span class="material-symbols-rounded">check</span> Tactile Audio Engine</li>
            <li><span class="material-symbols-rounded">check</span> Studio Customizer</li>
          </ul>
        </div>

        <!-- Card 3 -->
        <div class="toggle-selectable-card" onclick="document.querySelectorAll('.toggle-selectable-card').forEach(c=>c.classList.remove('selected')); this.classList.add('selected'); if(window.soundEngine) soundEngine.playClick(); showSnackbar('Selected Team Enterprise Plan');">
          <div class="toggle-card-radio-wrap">
            <span class="material-symbols-rounded toggle-card-check">radio_button_unchecked</span>
          </div>
          <h4 class="toggle-card-tier-title">Enterprise</h4>
          <div class="toggle-card-price">$49<span style="font-size:0.75rem; color:var(--md-sys-color-outline);">/mo</span></div>
          <ul class="toggle-card-feature-list">
            <li><span class="material-symbols-rounded">check</span> Unlimited Seats</li>
            <li><span class="material-symbols-rounded">check</span> Figma Token Sync</li>
          </ul>
        </div>
      </div>
    `,
    html: `<!-- Selectable Toggle Card -->
<div class="toggle-selectable-card selected" role="radio" aria-checked="true">
  <span class="material-symbols-rounded toggle-card-check">check_circle</span>
  <h4>Professional</h4>
  <div class="toggle-card-price">$19/mo</div>
</div>`,
    css: `.toggle-selectable-card {
  position: relative;
  background-color: var(--md-sys-color-surface-container-low);
  border: 2px solid var(--md-sys-color-card-border);
  border-radius: var(--radius-lg);
  padding: 24px 20px;
  cursor: pointer;
  transition: all var(--transition-fast);
}
.toggle-selectable-card:hover {
  transform: translateY(-2px);
  border-color: var(--md-sys-color-outline);
}
.toggle-selectable-card.selected {
  border-color: var(--md-sys-color-primary);
  background-color: var(--md-sys-color-surface-container);
  box-shadow: 0 0 0 1px var(--md-sys-color-primary), var(--elevation-2);
}
.toggle-selectable-card.selected .toggle-card-check {
  color: var(--md-sys-color-primary);
}`,
    react: `export function SelectableCard({ title, price, selected, onSelect }) {
  return (
    <div
      className={\`toggle-selectable-card \${selected ? 'selected' : ''}\`}
      role="radio"
      aria-checked={selected}
      onClick={onSelect}
    >
      <span className="material-symbols-rounded toggle-card-check">
        {selected ? 'check_circle' : 'radio_button_unchecked'}
      </span>
      <h4>{title}</h4>
      <div className="toggle-card-price">{price}</div>
    </div>
  );
}`,
    variations: [
      { name: "Compact Row Selector", desc: "Horizontal selectable item for settings lists", html: `<div class="toggle-selectable-card selected" style="padding:12px 16px; display:flex; align-items:center; justify-content:space-between;"><h5 style="margin:0;">Automatic Updates</h5><span class="material-symbols-rounded" style="color:var(--md-sys-color-primary);">check_circle</span></div>` }
    ],
    tokens: [
      { token: "--radius-lg", default: "24px", desc: "Surface radius for selectable cards" },
      { token: "--md-sys-color-primary", default: "#0b57d0", desc: "Active selection highlight outline" }
    ],
    wcag: "Uses role='radio' or role='checkbox' with aria-checked bindings and full keyboard tab stop."
  },

  // ------------------------------------------------------------------------
  // 52. TAG & MULTI-CHIP INPUT
  // ------------------------------------------------------------------------
  "taginput": {
    id: "taginput",
    name: "Tag & Multi-Chip Input",
    category: "inputs",
    icon: "sell",
    badge: "Forms & Filter",
    description: "Tokenized multi-select input allowing users to enter multiple tags or choose from suggestions. Features removable chip pills, keyboard Enter tag creation, and suggestion chips.",
    interactiveHtml: `
      <div style="width:100%; max-width:540px; display:flex; flex-direction:column; gap:16px;">
        <!-- Tag Box Container -->
        <div class="toggle-tag-box" id="demoTagBox" onclick="document.getElementById('demoTagField').focus();">
          <div class="toggle-tag-chip">
            <span>Material 3</span>
            <button class="toggle-tag-remove" onclick="event.stopPropagation(); this.closest('.toggle-tag-chip').remove(); if(window.soundEngine) soundEngine.playClick();"><span class="material-symbols-rounded">close</span></button>
          </div>
          <div class="toggle-tag-chip">
            <span>Design System</span>
            <button class="toggle-tag-remove" onclick="event.stopPropagation(); this.closest('.toggle-tag-chip').remove(); if(window.soundEngine) soundEngine.playClick();"><span class="material-symbols-rounded">close</span></button>
          </div>
          <div class="toggle-tag-chip">
            <span>Zero Runtime</span>
            <button class="toggle-tag-remove" onclick="event.stopPropagation(); this.closest('.toggle-tag-chip').remove(); if(window.soundEngine) soundEngine.playClick();"><span class="material-symbols-rounded">close</span></button>
          </div>
          <input
            type="text"
            id="demoTagField"
            class="toggle-tag-input"
            placeholder="Type and press Enter..."
            onkeydown="if(event.key === 'Enter' && this.value.trim()){
              event.preventDefault();
              const chip = document.createElement('div');
              chip.className = 'toggle-tag-chip';
              chip.innerHTML = '<span>' + this.value.trim() + '</span><button class=\\'toggle-tag-remove\\' onclick=\\'event.stopPropagation(); this.closest(\\\".toggle-tag-chip\\\").remove(); if(window.soundEngine) soundEngine.playClick();\\'><span class=\\'material-symbols-rounded\\'>close</span></button>';
              document.getElementById('demoTagBox').insertBefore(chip, this);
              this.value = '';
              if(window.soundEngine) soundEngine.playClick();
              showSnackbar('Added new tag');
            }"
          />
        </div>

        <!-- Quick Suggestions -->
        <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
          <span style="font-size:0.78rem; font-weight:700; color:var(--md-sys-color-outline);">Suggestions:</span>
          <button class="toggle-tag-sugg-btn" onclick="
            const chip = document.createElement('div');
            chip.className = 'toggle-tag-chip';
            chip.innerHTML = '<span>' + this.textContent + '</span><button class=\\'toggle-tag-remove\\' onclick=\\'event.stopPropagation(); this.closest(\\\".toggle-tag-chip\\\").remove(); if(window.soundEngine) soundEngine.playClick();\\'><span class=\\'material-symbols-rounded\\'>close</span></button>';
            document.getElementById('demoTagBox').insertBefore(chip, document.getElementById('demoTagField'));
            if(window.soundEngine) soundEngine.playClick();
            showSnackbar('Added tag: ' + this.textContent);
          ">+ Accessible</button>
          <button class="toggle-tag-sugg-btn" onclick="
            const chip = document.createElement('div');
            chip.className = 'toggle-tag-chip';
            chip.innerHTML = '<span>' + this.textContent + '</span><button class=\\'toggle-tag-remove\\' onclick=\\'event.stopPropagation(); this.closest(\\\".toggle-tag-chip\\\").remove(); if(window.soundEngine) soundEngine.playClick();\\'><span class=\\'material-symbols-rounded\\'>close</span></button>';
            document.getElementById('demoTagBox').insertBefore(chip, document.getElementById('demoTagField'));
            if(window.soundEngine) soundEngine.playClick();
            showSnackbar('Added tag: ' + this.textContent);
          ">+ React 19</button>
          <button class="toggle-tag-sugg-btn" onclick="
            const chip = document.createElement('div');
            chip.className = 'toggle-tag-chip';
            chip.innerHTML = '<span>' + this.textContent + '</span><button class=\\'toggle-tag-remove\\' onclick=\\'event.stopPropagation(); this.closest(\\\".toggle-tag-chip\\\").remove(); if(window.soundEngine) soundEngine.playClick();\\'><span class=\\'material-symbols-rounded\\'>close</span></button>';
            document.getElementById('demoTagBox').insertBefore(chip, document.getElementById('demoTagField'));
            if(window.soundEngine) soundEngine.playClick();
            showSnackbar('Added tag: ' + this.textContent);
          ">+ TypeScript</button>
        </div>
      </div>
    `,
    html: `<!-- Tag & Chip Input -->
<div class="toggle-tag-box">
  <div class="toggle-tag-chip">
    <span>Material 3</span>
    <button class="toggle-tag-remove">
      <span class="material-symbols-rounded">close</span>
    </button>
  </div>
  <input type="text" class="toggle-tag-input" placeholder="Add tag..." />
</div>`,
    css: `.toggle-tag-box {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background-color: var(--md-sys-color-surface-container-high);
  border: 1px solid var(--md-sys-color-card-border);
  border-radius: var(--radius-md);
  min-height: 52px;
  cursor: text;
  transition: all var(--transition-fast);
}
.toggle-tag-box:focus-within {
  border-color: var(--md-sys-color-primary);
  box-shadow: 0 0 0 1px var(--md-sys-color-primary);
}
.toggle-tag-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: var(--radius-full);
  background-color: var(--md-sys-color-primary-container);
  color: var(--md-sys-color-on-primary-container);
  font-size: 0.82rem;
  font-weight: 600;
}
.toggle-tag-remove {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  color: inherit;
  font-size: 14px;
}`,
    react: `export function TagInput({ tags = [], onAdd, onRemove }) {
  return (
    <div className="toggle-tag-box">
      {tags.map((tag, idx) => (
        <div key={idx} className="toggle-tag-chip">
          <span>{tag}</span>
          <button onClick={() => onRemove(tag)}>×</button>
        </div>
      ))}
      <input
        className="toggle-tag-input"
        placeholder="Add tag..."
        onKeyDown={(e) => {
          if (e.key === 'Enter') onAdd(e.target.value);
        }}
      />
    </div>
  );
}`,
    variations: [
      { name: "Outlined Tag Box", desc: "White surface with outlined pill tags", html: `<div class="toggle-tag-box" style="background:#fff;"><span class="toggle-tag-chip" style="background:transparent; border:1px solid #ccc; color:#333;">Frontend</span></div>` }
    ],
    tokens: [
      { token: "--radius-md", default: "16px", desc: "Outermost box rounding" },
      { token: "--md-sys-color-primary-container", default: "#d3e3fd", desc: "Tag chip fill tone" }
    ],
    wcag: "Includes accessible remove buttons with aria-label='Remove tag' and keyboard backspace support."
  },

  // ------------------------------------------------------------------------
  // 53. PASSWORD & STRENGTH METER
  // ------------------------------------------------------------------------
  "passwordinput": {
    id: "passwordinput",
    name: "Password & Strength Meter",
    category: "inputs",
    icon: "password",
    badge: "Security UI",
    description: "Secure password input field with visibility toggle eye, 4-tier colored strength progress bar (Weak/Fair/Good/Strong), and real-time validation criteria.",
    interactiveHtml: `
      <div style="width:100%; max-width:440px; display:flex; flex-direction:column; gap:16px;">
        <!-- Password Field Container -->
        <div class="toggle-pass-wrap">
          <input
            type="password"
            id="demoPassInput"
            class="toggle-pass-input"
            placeholder="Enter secure password..."
            oninput="
              const val = this.value;
              const hasLength = val.length >= 8;
              const hasUpper = /[A-Z]/.test(val);
              const hasNumber = /[0-9]/.test(val);
              const hasSpecial = /[^A-Za-z0-9]/.test(val);
              
              const score = (hasLength?1:0) + (hasUpper?1:0) + (hasNumber?1:0) + (hasSpecial?1:0);
              
              const bars = document.querySelectorAll('.toggle-pass-strength-bar');
              bars.forEach((b, idx) => {
                b.className = 'toggle-pass-strength-bar';
                if(idx < score) {
                  b.classList.add(score <= 1 ? 'weak' : score <= 2 ? 'fair' : score <= 3 ? 'good' : 'strong');
                }
              });

              const label = document.getElementById('demoPassScoreLabel');
              label.textContent = score === 0 ? 'Empty' : score === 1 ? 'Weak' : score === 2 ? 'Fair' : score === 3 ? 'Good' : 'Strong & Resilient';
              label.style.color = score <= 1 ? '#d93025' : score <= 2 ? '#f9ab00' : score <= 3 ? '#1a73e8' : '#1e8e3e';

              document.getElementById('critLength').classList.toggle('valid', hasLength);
              document.getElementById('critUpper').classList.toggle('valid', hasUpper);
              document.getElementById('critNumber').classList.toggle('valid', hasNumber);
              document.getElementById('critSpecial').classList.toggle('valid', hasSpecial);
            "
          />
          <button class="toggle-pass-toggle-btn" title="Toggle visibility" onclick="
            const inp = document.getElementById('demoPassInput');
            const isPass = inp.type === 'password';
            inp.type = isPass ? 'text' : 'password';
            this.querySelector('.material-symbols-rounded').textContent = isPass ? 'visibility_off' : 'visibility';
            if(window.soundEngine) soundEngine.playClick();
          ">
            <span class="material-symbols-rounded">visibility</span>
          </button>
        </div>

        <!-- 4-Segment Strength Indicator -->
        <div style="display:flex; flex-direction:column; gap:6px;">
          <div style="display:flex; justify-content:space-between; font-size:0.78rem; font-weight:700;">
            <span style="color:var(--md-sys-color-outline);">Password Strength</span>
            <span id="demoPassScoreLabel" style="color:#d93025;">Empty</span>
          </div>
          <div class="toggle-pass-strength-track">
            <div class="toggle-pass-strength-bar"></div>
            <div class="toggle-pass-strength-bar"></div>
            <div class="toggle-pass-strength-bar"></div>
            <div class="toggle-pass-strength-bar"></div>
          </div>
        </div>

        <!-- Live Validation Checklist -->
        <div class="toggle-pass-criteria-grid">
          <div class="toggle-pass-crit" id="critLength"><span class="material-symbols-rounded">check</span> 8+ characters</div>
          <div class="toggle-pass-crit" id="critUpper"><span class="material-symbols-rounded">check</span> Uppercase letter</div>
          <div class="toggle-pass-crit" id="critNumber"><span class="material-symbols-rounded">check</span> At least 1 number</div>
          <div class="toggle-pass-crit" id="critSpecial"><span class="material-symbols-rounded">check</span> Special character</div>
        </div>
      </div>
    `,
    html: `<!-- Password Input with Strength Meter -->
<div class="toggle-pass-wrap">
  <input type="password" class="toggle-pass-input" placeholder="Password" />
  <button class="toggle-pass-toggle-btn" aria-label="Show password">
    <span class="material-symbols-rounded">visibility</span>
  </button>
</div>
<div class="toggle-pass-strength-track">
  <div class="toggle-pass-strength-bar strong"></div>
</div>`,
    css: `.toggle-pass-wrap {
  display: flex;
  align-items: center;
  position: relative;
  background-color: var(--md-sys-color-surface-container-high);
  border: 1px solid var(--md-sys-color-card-border);
  border-radius: var(--radius-full);
  padding: 0 16px;
  height: 52px;
}
.toggle-pass-wrap:focus-within {
  border-color: var(--md-sys-color-primary);
  box-shadow: 0 0 0 1px var(--md-sys-color-primary);
}
.toggle-pass-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 0.95rem;
  color: var(--md-sys-color-on-surface);
}
.toggle-pass-toggle-btn {
  background: transparent;
  border: none;
  color: var(--md-sys-color-on-surface-variant);
  cursor: pointer;
  display: flex;
}
.toggle-pass-strength-track {
  display: flex;
  gap: 6px;
  height: 6px;
}
.toggle-pass-strength-bar {
  flex: 1;
  height: 100%;
  border-radius: var(--radius-full);
  background-color: var(--md-sys-color-card-border);
  transition: background-color var(--transition-fast);
}
.toggle-pass-strength-bar.weak { background-color: #d93025; }
.toggle-pass-strength-bar.fair { background-color: #f9ab00; }
.toggle-pass-strength-bar.good { background-color: #1a73e8; }
.toggle-pass-strength-bar.strong { background-color: #1e8e3e; }`,
    react: `export function PasswordInput({ value, onChange }) {
  const [show, setShow] = useState(false);
  return (
    <div className="toggle-pass-wrap">
      <input
        type={show ? "text" : "password"}
        className="toggle-pass-input"
        value={value}
        onChange={onChange}
      />
      <button className="toggle-pass-toggle-btn" onClick={() => setShow(!show)}>
        <span className="material-symbols-rounded">{show ? "visibility_off" : "visibility"}</span>
      </button>
    </div>
  );
}`,
    variations: [
      { name: "Minimal Underline", desc: "Subtle underline password input with inline eye", html: `<div style="border-bottom:2px solid var(--md-sys-color-primary); padding:8px 0; display:flex; justify-content:space-between;"><span>••••••••</span><span class="material-symbols-rounded">visibility</span></div>` }
    ],
    tokens: [
      { token: "--radius-full", default: "9999px", desc: "Pill password capsule curvature" },
      { token: "--md-sys-color-surface-container-high", default: "#e9edf6", desc: "Input background fill" }
    ],
    wcag: "Includes accessible toggle button state with aria-pressed and dynamic aria-live feedback for strength criteria."
  },

  // ------------------------------------------------------------------------
  // 54. RADIAL GAUGE & METRIC METER
  // ------------------------------------------------------------------------
  "gauge": {
    id: "gauge",
    name: "Radial Gauge & Metric Meter",
    category: "display",
    icon: "speed",
    badge: "Data Viz",
    description: "Radial Gauge visualizes scalar metric values on a circular arc scale. Features customizable threshold zones (Normal, Warning, Critical), animated needle/arc, and center value readouts.",
    interactiveHtml: `
      <div style="width:100%; max-width:440px; display:flex; flex-direction:column; align-items:center; gap:24px;">
        <!-- Gauge SVG Card -->
        <div class="toggle-gauge-card">
          <svg class="toggle-gauge-svg" viewBox="0 0 200 130">
            <!-- Background Arc -->
            <path d="M 25 115 A 75 75 0 0 1 175 115" fill="none" stroke="var(--md-sys-color-card-border)" stroke-width="16" stroke-linecap="round" />
            <!-- Active Score Arc -->
            <path id="demoGaugePath" d="M 25 115 A 75 75 0 0 1 175 115" fill="none" stroke="url(#gaugeGrad)" stroke-width="16" stroke-linecap="round" stroke-dasharray="235" stroke-dashoffset="38" style="transition: stroke-dashoffset 400ms cubic-bezier(0.34, 1.56, 0.64, 1);" />
            <!-- SVG Gradients -->
            <defs>
              <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#0b57d0" />
                <stop offset="60%" stop-color="#34a853" />
                <stop offset="100%" stop-color="#fbbc05" />
              </linearGradient>
            </defs>
          </svg>

          <!-- Center Readout -->
          <div class="toggle-gauge-readout">
            <span class="toggle-gauge-val" id="demoGaugeScore">84%</span>
            <span class="toggle-gauge-label" id="demoGaugeStatus">OPTIMAL HEALTH</span>
          </div>
        </div>

        <!-- Interactive Score Slider Control -->
        <div style="width:100%; display:flex; flex-direction:column; gap:8px;">
          <div style="display:flex; justify-content:space-between; font-size:0.8rem; font-weight:700;">
            <span style="color:var(--md-sys-color-on-surface);">Adjust Gauge Value</span>
            <span id="demoSliderValText" style="color:var(--md-sys-color-primary);">84%</span>
          </div>
          <input
            type="range"
            id="demoGaugeSlider"
            class="control-slider"
            min="0"
            max="100"
            value="84"
            oninput="
              const val = parseInt(this.value, 10);
              const maxDash = 235;
              const offset = maxDash - (val / 100) * maxDash;
              document.getElementById('demoGaugePath').style.strokeDashoffset = offset;
              document.getElementById('demoGaugeScore').textContent = val + '%';
              document.getElementById('demoSliderValText').textContent = val + '%';
              
              const statusEl = document.getElementById('demoGaugeStatus');
              if(val >= 80) {
                statusEl.textContent = 'OPTIMAL HEALTH';
                statusEl.style.color = '#1e8e3e';
              } else if(val >= 50) {
                statusEl.textContent = 'MODERATE LOAD';
                statusEl.style.color = '#f9ab00';
              } else {
                statusEl.textContent = 'CRITICAL ATTENTION';
                statusEl.style.color = '#d93025';
              }
            "
          />
        </div>

        <!-- Presets -->
        <div style="display:flex; gap:8px;">
          <button class="toggle-tag-sugg-btn" onclick="document.getElementById('demoGaugeSlider').value=35; document.getElementById('demoGaugeSlider').dispatchEvent(new Event('input')); if(window.soundEngine) soundEngine.playClick();">Eco (35%)</button>
          <button class="toggle-tag-sugg-btn" onclick="document.getElementById('demoGaugeSlider').value=68; document.getElementById('demoGaugeSlider').dispatchEvent(new Event('input')); if(window.soundEngine) soundEngine.playClick();">Balanced (68%)</button>
          <button class="toggle-tag-sugg-btn" onclick="document.getElementById('demoGaugeSlider').value=94; document.getElementById('demoGaugeSlider').dispatchEvent(new Event('input')); if(window.soundEngine) soundEngine.playClick();">Turbo (94%)</button>
        </div>
      </div>
    `,
    html: `<!-- Radial Gauge Meter Component -->
<div class="toggle-gauge-card">
  <svg class="toggle-gauge-svg" viewBox="0 0 200 130">
    <path class="toggle-gauge-bg" d="M 25 115 A 75 75 0 0 1 175 115" />
    <path class="toggle-gauge-active" d="M 25 115 A 75 75 0 0 1 175 115" />
  </svg>
  <div class="toggle-gauge-readout">
    <span class="toggle-gauge-val">84%</span>
    <span class="toggle-gauge-label">OPTIMAL</span>
  </div>
</div>`,
    css: `.toggle-gauge-card {
  position: relative;
  background-color: var(--md-sys-color-surface-container-low);
  border: 1px solid var(--md-sys-color-card-border);
  border-radius: var(--radius-xl);
  padding: 32px 24px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: var(--elevation-1);
}
.toggle-gauge-svg {
  width: 220px;
  overflow: visible;
}
.toggle-gauge-readout {
  position: absolute;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.toggle-gauge-val {
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--md-sys-color-on-surface);
}
.toggle-gauge-label {
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  color: #1e8e3e;
}`,
    react: `export function RadialGauge({ value = 80, label = "OPTIMAL" }) {
  const maxDash = 235;
  const offset = maxDash - (value / 100) * maxDash;
  return (
    <div className="toggle-gauge-card">
      <svg className="toggle-gauge-svg" viewBox="0 0 200 130">
        <path d="M 25 115 A 75 75 0 0 1 175 115" fill="none" stroke="#ddd" strokeWidth="16" />
        <path
          d="M 25 115 A 75 75 0 0 1 175 115"
          fill="none"
          stroke="#0b57d0"
          strokeWidth="16"
          strokeDasharray="235"
          strokeDashoffset={offset}
        />
      </svg>
      <div className="toggle-gauge-readout">
        <span className="toggle-gauge-val">{value}%</span>
        <span className="toggle-gauge-label">{label}</span>
      </div>
    </div>
  );
}`,
    variations: [
      { name: "Compact Speedometer", desc: "140px mini gauge for dense analytics grids", html: `<div class="toggle-gauge-card" style="padding:16px;"><span style="font-size:1.4rem; font-weight:800;">72%</span><span style="font-size:0.7rem; color:var(--md-sys-color-outline);">CPU Usage</span></div>` }
    ],
    tokens: [
      { token: "--radius-xl", default: "28px", desc: "Outermost container radius" },
      { token: "--md-sys-color-primary", default: "#0b57d0", desc: "Active meter stroke tone" }
    ],
    wcag: "Uses role='meter' with aria-valuenow, aria-valuemin='0', and aria-valuemax='100'."
  },

  // ------------------------------------------------------------------------
  // 55. NOTIFICATION CENTER & POPOVER
  // ------------------------------------------------------------------------
  "notificationcenter": {
    id: "notificationcenter",
    name: "Notification Center & Popover",
    category: "feedback",
    icon: "notifications_active",
    badge: "M3 Overlay",
    description: "Elevated notification popover featuring unread counters, category tabs (All, Mentions), timestamps, avatar indicators, interactive dismiss, and bulk 'Mark all as read'.",
    interactiveHtml: `
      <div style="width:100%; max-width:440px; display:flex; flex-direction:column; gap:16px;">
        <!-- Notification Popover Card -->
        <div class="toggle-notif-card">
          <!-- Header -->
          <div class="toggle-notif-header">
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="material-symbols-rounded" style="color:var(--md-sys-color-primary);">notifications</span>
              <span style="font-weight:700; font-size:1rem; color:var(--md-sys-color-on-surface);">Notifications</span>
              <span class="toggle-notif-counter-pill" id="demoNotifCount">3</span>
            </div>
            <button class="toggle-notif-mark-btn" onclick="
              document.querySelectorAll('.toggle-notif-item').forEach(i=>i.classList.remove('unread'));
              document.getElementById('demoNotifCount').textContent='0';
              document.getElementById('demoNotifCount').style.display='none';
              if(window.soundEngine) soundEngine.playClick();
              showSnackbar('All notifications marked as read');
            ">Mark all read</button>
          </div>

          <!-- Notification Items List -->
          <div class="toggle-notif-list">
            <!-- Item 1 -->
            <div class="toggle-notif-item unread" onclick="this.classList.remove('unread'); if(window.soundEngine) soundEngine.playClick(); showSnackbar('Opened PR #42');">
              <div class="toggle-notif-avatar" style="background:#4285f4;">SC</div>
              <div class="toggle-notif-body">
                <div class="toggle-notif-text"><strong>Sarah Chen</strong> approved PR #42 for Toggle Library v1.2</div>
                <div class="toggle-notif-time">5 minutes ago</div>
              </div>
              <div class="toggle-notif-dot"></div>
            </div>

            <!-- Item 2 -->
            <div class="toggle-notif-item unread" onclick="this.classList.remove('unread'); if(window.soundEngine) soundEngine.playClick(); showSnackbar('Viewed mention');">
              <div class="toggle-notif-avatar" style="background:#ea4335;">AR</div>
              <div class="toggle-notif-body">
                <div class="toggle-notif-text"><strong>Alex Rivera</strong> mentioned you in <em>Design Tokens</em></div>
                <div class="toggle-notif-time">1 hour ago</div>
              </div>
              <div class="toggle-notif-dot"></div>
            </div>

            <!-- Item 3 -->
            <div class="toggle-notif-item" onclick="if(window.soundEngine) soundEngine.playClick(); showSnackbar('System update details');">
              <div class="toggle-notif-avatar" style="background:#34a853;"><span class="material-symbols-rounded" style="font-size:18px;">cloud_done</span></div>
              <div class="toggle-notif-body">
                <div class="toggle-notif-text">Design tokens synced with production CDN bundle</div>
                <div class="toggle-notif-time">Yesterday at 4:32 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    html: `<!-- Notification Popover Card -->
<div class="toggle-notif-card">
  <div class="toggle-notif-header">
    <span>Notifications</span>
    <span class="toggle-notif-counter-pill">3</span>
  </div>
  <div class="toggle-notif-list">
    <div class="toggle-notif-item unread">
      <div class="toggle-notif-avatar">SC</div>
      <div class="toggle-notif-body">
        <p><strong>Sarah</strong> approved your request</p>
        <span>5m ago</span>
      </div>
      <div class="toggle-notif-dot"></div>
    </div>
  </div>
</div>`,
    css: `.toggle-notif-card {
  background-color: var(--md-sys-color-surface-container-low);
  border: 1px solid var(--md-sys-color-card-border);
  border-radius: var(--radius-xl);
  box-shadow: var(--elevation-3);
  overflow: hidden;
}
.toggle-notif-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid var(--md-sys-color-card-border);
}
.toggle-notif-counter-pill {
  background-color: var(--md-sys-color-primary);
  color: #fff;
  font-size: 0.74rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: var(--radius-full);
}
.toggle-notif-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 20px;
  cursor: pointer;
  border-bottom: 1px solid var(--md-sys-color-card-border);
  transition: background-color var(--transition-fast);
}
.toggle-notif-item:hover {
  background-color: var(--md-sys-color-surface-container-high);
}
.toggle-notif-item.unread {
  background-color: rgba(11, 87, 208, 0.05);
}
.toggle-notif-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--md-sys-color-primary);
  margin-top: 6px;
}`,
    react: `export function NotificationCenter({ notifications = [], onRead }) {
  return (
    <div className="toggle-notif-card">
      <div className="toggle-notif-header">
        <h4>Notifications</h4>
      </div>
      <div className="toggle-notif-list">
        {notifications.map(n => (
          <div key={n.id} className={\`toggle-notif-item \${n.unread ? 'unread' : ''}\`} onClick={() => onRead(n.id)}>
            <div className="toggle-notif-body">
              <p>{n.text}</p>
              <span>{n.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`,
    variations: [
      { name: "Compact Floating Bell", desc: "Header toolbar trigger button with pulse indicator", html: `<button class="icon-btn" style="position:relative;"><span class="material-symbols-rounded">notifications</span><span style="position:absolute; top:6px; right:6px; width:8px; height:8px; border-radius:50%; background:#d93025;"></span></button>` }
    ],
    tokens: [
      { token: "--radius-xl", default: "28px", desc: "Container corner radius" },
      { token: "--md-sys-color-primary", default: "#0b57d0", desc: "Unread indicator dot tone" }
    ],
    wcag: "Uses aria-expanded on notification bell, role='feed' on list, and aria-label for unread status."
  },

  // ------------------------------------------------------------------------
  // 56. INTERACTIVE STUDIO BUILDER
  // ------------------------------------------------------------------------
  "studio": {
    id: "studio",
    name: "Custom Switch Studio",
    category: "tools",
    icon: "tune",
    badge: "Interactive Builder",
    description: "Design custom switches visually in real-time. Adjust dimensions, border radii, speeds, and color tokens, then copy the generated production CSS and HTML.",
    isStudioPage: true
  }
};

window.DOCS_DATA = DOCS_DATA;
