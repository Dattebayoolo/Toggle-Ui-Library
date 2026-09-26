/* ==========================================================================
   TOGGLE CATALOG DATA
   Component specs, accessible HTML, CSS, React templates and metadata
   ========================================================================== */

const TOGGLE_CATALOG = [
  {
    id: "m3-standard",
    name: "Material 3 Switch",
    category: "material",
    tags: ["Material 3", "Pure CSS", "Expanding Thumb"],
    description: "Material Design 3 specification switch with expanding thumb and tonal container.",
    html: `<label class="toggle-base toggle-m3" aria-label="Material 3 Switch">
  <input type="checkbox" />
  <span class="track">
    <span class="thumb"></span>
  </span>
</label>`,
    css: `.toggle-m3 {
  position: relative;
  display: inline-flex;
  width: 52px;
  height: 32px;
  cursor: pointer;
}
.toggle-m3 input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.toggle-m3 .track {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background-color: #e1e3e1;
  border: 2px solid #74777f;
  transition: all 250ms cubic-bezier(0.2, 0, 0, 1);
}
.toggle-m3 .thumb {
  position: absolute;
  top: 8px;
  left: 8px;
  width: 16px;
  height: 16px;
  border-radius: 9999px;
  background-color: #74777f;
  transition: all 250ms cubic-bezier(0.2, 0, 0, 1);
}
.toggle-m3 input:checked + .track {
  background-color: #0b57d0;
  border-color: #0b57d0;
}
.toggle-m3 input:checked + .track .thumb {
  top: 4px;
  left: 4px;
  width: 24px;
  height: 24px;
  transform: translateX(20px);
  background-color: #ffffff;
}`,
    react: `export function M3Switch({ checked, onChange }) {
  return (
    <label className="toggle-base toggle-m3">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="track">
        <span className="thumb" />
      </span>
    </label>
  );
}`
  },
  {
    id: "m3-icon",
    name: "M3 Iconic Switch",
    category: "material",
    tags: ["Material 3", "Icon Thumb", "Material Symbols"],
    description: "Material You switch featuring morphing checkmark and cross icons embedded in the sliding thumb.",
    html: `<label class="toggle-base toggle-m3-icon" aria-label="M3 Iconic Switch">
  <input type="checkbox" />
  <span class="track">
    <span class="thumb">
      <span class="material-symbols-rounded thumb-icon">check</span>
    </span>
  </span>
</label>`,
    css: `.toggle-m3-icon {
  position: relative;
  display: inline-flex;
  width: 52px;
  height: 32px;
  cursor: pointer;
}
.toggle-m3-icon input {
  position: absolute;
  opacity: 0;
}
.toggle-m3-icon .track {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background-color: #e1e3e1;
  border: 2px solid #74777f;
  transition: all 250ms cubic-bezier(0.2, 0, 0, 1);
}
.toggle-m3-icon .thumb {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 250ms cubic-bezier(0.2, 0, 0, 1);
}
.toggle-m3-icon input:checked + .track {
  background-color: #0b57d0;
  border-color: #0b57d0;
}
.toggle-m3-icon input:checked + .track .thumb {
  transform: translateX(20px);
}`,
    react: `export function M3IconSwitch({ checked, onChange }) {
  return (
    <label className="toggle-base toggle-m3-icon">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="track">
        <span className="thumb">
          <span className="material-symbols-rounded thumb-icon">{checked ? 'check' : 'close'}</span>
        </span>
      </span>
    </label>
  );
}`
  },
  {
    id: "m3-halo",
    name: "Material Touch Halo",
    category: "material",
    tags: ["Material 3", "Ripple", "State Layers"],
    description: "Material You state layer with expansive touch halo and spring motion.",
    html: `<label class="toggle-base toggle-m3-halo" aria-label="Material Touch Halo">
  <input type="checkbox" />
  <span class="track">
    <span class="thumb">
      <span class="halo"></span>
    </span>
  </span>
</label>`,
    css: `.toggle-m3-halo {
  position: relative;
  display: inline-flex;
  width: 54px;
  height: 32px;
  cursor: pointer;
}
.toggle-m3-halo input { position: absolute; opacity: 0; }
.toggle-m3-halo .track {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background: #edf2f7;
  border: 2px solid #cbd5e1;
  transition: all 250ms ease;
}
.toggle-m3-halo .thumb {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  background: #64748b;
  transition: transform 350ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
.toggle-m3-halo .halo {
  position: absolute;
  inset: -8px;
  border-radius: 9999px;
  background: transparent;
  pointer-events: none;
  transition: all 200ms ease;
  transform: scale(0.6);
  opacity: 0;
}
.toggle-m3-halo:hover .halo {
  background: #0b57d0;
  opacity: 0.15;
  transform: scale(1);
}
.toggle-m3-halo input:checked + .track {
  background: #0b57d0;
  border-color: #0b57d0;
}
.toggle-m3-halo input:checked + .track .thumb {
  transform: translateX(22px);
  background: #ffffff;
}`,
    react: `export function M3HaloSwitch({ checked, onChange }) {
  return (
    <label className="toggle-base toggle-m3-halo">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="track">
        <span className="thumb"><span className="halo" /></span>
      </span>
    </label>
  );
}`
  },
  {
    id: "ios-fluid",
    name: "iOS 18 Liquid Glass",
    category: "ios",
    tags: ["iOS", "Spring Physics", "Vibrant"],
    description: "Ultra-clean Apple iOS toggle with spring bounce physics, layered soft shadow, and thumb stretch on press.",
    html: `<label class="toggle-base toggle-ios" aria-label="iOS Fluid Switch">
  <input type="checkbox" />
  <span class="track">
    <span class="thumb"></span>
  </span>
</label>`,
    css: `.toggle-ios {
  position: relative;
  display: inline-flex;
  width: 51px;
  height: 31px;
  cursor: pointer;
}
.toggle-ios input { position: absolute; opacity: 0; }
.toggle-ios .track {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background-color: #e9e9ea;
  transition: background-color 300ms cubic-bezier(0.16, 1, 0.3, 1);
}
.toggle-ios .thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 27px;
  height: 27px;
  border-radius: 9999px;
  background-color: #ffffff;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  transition: transform 350ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
.toggle-ios input:checked + .track {
  background-color: #34c759;
}
.toggle-ios input:checked + .track .thumb {
  transform: translateX(20px);
}`,
    react: `export function IOSSwitch({ checked, onChange }) {
  return (
    <label className="toggle-base toggle-ios">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="track"><span className="thumb" /></span>
    </label>
  );
}`
  },
  {
    id: "day-night",
    name: "Celestial Day & Night",
    category: "celestial",
    tags: ["Illustrated", "Sun & Moon", "Clouds & Stars"],
    description: "Poetic celestial switch featuring fluffy day clouds and a glowing sun transitioning to a starry night with moon craters.",
    html: `<label class="toggle-base toggle-daynight" aria-label="Day Night Switch">
  <input type="checkbox" />
  <span class="track">
    <span class="clouds"></span>
    <span class="stars">★ ★</span>
    <span class="thumb">
      <span class="moon-crater"></span>
    </span>
  </span>
</label>`,
    css: `.toggle-daynight {
  position: relative;
  display: inline-flex;
  width: 76px;
  height: 36px;
  cursor: pointer;
}
.toggle-daynight input { position: absolute; opacity: 0; }
.toggle-daynight .track {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background: linear-gradient(135deg, #42a5f5, #29b6f6);
  overflow: hidden;
  transition: background 500ms ease;
}
.toggle-daynight .thumb {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 28px;
  height: 28px;
  border-radius: 9999px;
  background: #ffca28;
  box-shadow: 0 0 10px rgba(255, 202, 40, 0.8);
  transition: transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
.toggle-daynight input:checked + .track {
  background: linear-gradient(135deg, #0d1b2a, #1b263b);
}
.toggle-daynight input:checked + .track .thumb {
  transform: translateX(40px);
  background: #eceff1;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
}`,
    react: `export function DayNightSwitch({ checked, onChange }) {
  return (
    <label className="toggle-base toggle-daynight">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="track">
        <span className="clouds" />
        <span className="stars">★ ★</span>
        <span className="thumb"><span className="moon-crater" /></span>
      </span>
    </label>
  );
}`
  },
  {
    id: "squish-jelly",
    name: "Squishy Jelly Spring",
    category: "physics",
    tags: ["Elastic", "Stretch", "Physics"],
    description: "Elastic rubber toggle where the knob elongates and squishes dynamically as it slides across the track.",
    html: `<label class="toggle-base toggle-squish" aria-label="Squishy Jelly Switch">
  <input type="checkbox" />
  <span class="track">
    <span class="thumb"></span>
  </span>
</label>`,
    css: `.toggle-squish {
  position: relative;
  display: inline-flex;
  width: 60px;
  height: 32px;
  cursor: pointer;
}
.toggle-squish input { position: absolute; opacity: 0; }
.toggle-squish .track {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background: #edf2f7;
  border: 2px solid #cbd5e1;
  transition: all 300ms ease;
}
.toggle-squish .thumb {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  background: #64748b;
  transition: transform 400ms cubic-bezier(0.34, 1.7, 0.64, 1), width 250ms ease;
}
.toggle-squish:active .thumb { width: 32px; }
.toggle-squish input:checked + .track {
  background: #d3e3fd;
  border-color: #0b57d0;
}
.toggle-squish input:checked + .track .thumb {
  transform: translateX(28px);
  background: #0b57d0;
}`,
    react: `export function JellySwitch({ checked, onChange }) {
  return (
    <label className="toggle-base toggle-squish">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="track"><span className="thumb" /></span>
    </label>
  );
}`
  },
  {
    id: "cyberpunk-neon",
    name: "Cyberpunk Plasma Tube",
    category: "glow",
    tags: ["Neon", "Dark Tech", "Scanlines"],
    description: "Futuristic sci-fi switch with CRT scanline backdrop, glowing cyan tube, and laser neon aura.",
    html: `<label class="toggle-base toggle-cyberpunk" aria-label="Cyberpunk Neon Switch">
  <input type="checkbox" />
  <span class="track">
    <span class="thumb">
      <span class="neon-bar"></span>
    </span>
  </span>
</label>`,
    css: `.toggle-cyberpunk {
  position: relative;
  display: inline-flex;
  width: 68px;
  height: 34px;
  cursor: pointer;
}
.toggle-cyberpunk input { position: absolute; opacity: 0; }
.toggle-cyberpunk .track {
  position: absolute;
  inset: 0;
  border-radius: 6px;
  background: #0a0b10;
  border: 1px solid #222938;
  overflow: hidden;
  transition: all 300ms ease;
}
.toggle-cyberpunk .thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 26px;
  height: 26px;
  border-radius: 4px;
  background: #1e2230;
  border: 1px solid #485269;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 300ms cubic-bezier(0.2, 0.9, 0.3, 1.2);
}
.toggle-cyberpunk input:checked + .track {
  border-color: #00ffea;
  box-shadow: 0 0 14px rgba(0, 255, 234, 0.4);
}
.toggle-cyberpunk input:checked + .track .thumb {
  transform: translateX(34px);
  background: #002b28;
  border-color: #00ffea;
  box-shadow: 0 0 10px #00ffea;
}`,
    react: `export function CyberpunkSwitch({ checked, onChange }) {
  return (
    <label className="toggle-base toggle-cyberpunk">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="track">
        <span className="thumb"><span className="neon-bar" /></span>
      </span>
    </label>
  );
}`
  },
  {
    id: "neumorphic-soft",
    name: "Neumorphic Tactile",
    category: "retro",
    tags: ["Neumorphic", "Soft UI", "LED Indicator"],
    description: "Soft tactile switch with realistic convex and concave shadow morph and glowing blue LED status dot.",
    html: `<label class="toggle-base toggle-neumorphic" aria-label="Neumorphic Switch">
  <input type="checkbox" />
  <span class="track">
    <span class="thumb">
      <span class="led-dot"></span>
    </span>
  </span>
</label>`,
    css: `.toggle-neumorphic {
  position: relative;
  display: inline-flex;
  width: 64px;
  height: 34px;
  cursor: pointer;
}
.toggle-neumorphic input { position: absolute; opacity: 0; }
.toggle-neumorphic .track {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background: #e2e8f0;
  box-shadow: inset 3px 3px 6px #cbd5e1, inset -3px -3px 6px #ffffff;
  transition: all 300ms ease;
}
.toggle-neumorphic .thumb {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 26px;
  height: 26px;
  border-radius: 9999px;
  background: #e2e8f0;
  box-shadow: 3px 3px 6px #cbd5e1, -3px -3px 6px #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 350ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
.toggle-neumorphic .led-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #94a3b8;
  transition: all 300ms ease;
}
.toggle-neumorphic input:checked + .track .thumb {
  transform: translateX(30px);
}
.toggle-neumorphic input:checked + .track .led-dot {
  background: #3b82f6;
  box-shadow: 0 0 8px #3b82f6;
}`,
    react: `export function NeumorphicSwitch({ checked, onChange }) {
  return (
    <label className="toggle-base toggle-neumorphic">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="track">
        <span className="thumb"><span className="led-dot" /></span>
      </span>
    </label>
  );
}`
  },
  {
    id: "sound-equalizer",
    name: "Equalizer Waves",
    category: "micro",
    tags: ["Audio", "Dancing Bars", "Sound Wave"],
    description: "Live audio equalizer switch with 4 rhythmically bouncing equalizer bars when activated.",
    html: `<label class="toggle-base toggle-equalizer" aria-label="Equalizer Sound Switch">
  <input type="checkbox" />
  <span class="track">
    <span class="wave-bars">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </span>
    <span class="thumb">
      <span class="material-symbols-rounded">graphic_eq</span>
    </span>
  </span>
</label>`,
    css: `.toggle-equalizer {
  position: relative;
  display: inline-flex;
  width: 66px;
  height: 34px;
  cursor: pointer;
}
.toggle-equalizer input { position: absolute; opacity: 0; }
.toggle-equalizer .track {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background: #edf2f7;
  border: 2px solid #cbd5e1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 12px;
  transition: all 300ms ease;
}
.toggle-equalizer .wave-bars { display: flex; gap: 2px; }
.toggle-equalizer .bar {
  width: 2.5px;
  height: 4px;
  background: #94a3b8;
  border-radius: 2px;
}
.toggle-equalizer .thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 26px;
  height: 26px;
  border-radius: 9999px;
  background: #0b57d0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: transform 350ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
.toggle-equalizer input:checked + .track .thumb { transform: translateX(32px); }
.toggle-equalizer input:checked + .track .bar {
  background: #0b57d0;
  animation: equalize 0.8s ease-in-out infinite alternate;
}
@keyframes equalize { 0% { height: 4px; } 100% { height: 16px; } }`,
    react: `export function EqualizerSwitch({ checked, onChange }) {
  return (
    <label className="toggle-base toggle-equalizer">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="track">
        <span className="wave-bars">
          <span className="bar" /><span className="bar" /><span className="bar" /><span className="bar" />
        </span>
        <span className="thumb"><span className="material-symbols-rounded">graphic_eq</span></span>
      </span>
    </label>
  );
}`
  },
  {
    id: "password-eye",
    name: "Password Peek Eye",
    category: "micro",
    tags: ["Eye", "Password Show", "Morph"],
    description: "Password show/hide toggle where an animated eye opens wide on activation and shuts closed when hidden.",
    html: `<label class="toggle-base toggle-eye" aria-label="Password Eye Switch">
  <input type="checkbox" />
  <span class="track">
    <span class="thumb">
      <span class="material-symbols-rounded">visibility</span>
    </span>
  </span>
</label>`,
    css: `.toggle-eye {
  position: relative;
  display: inline-flex;
  width: 58px;
  height: 32px;
  cursor: pointer;
}
.toggle-eye input { position: absolute; opacity: 0; }
.toggle-eye .track {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background: #edf2f7;
  border: 2px solid #cbd5e1;
  transition: all 300ms ease;
}
.toggle-eye .thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: transform 350ms cubic-bezier(0.34, 1.56, 0.64, 1);
  color: #64748b;
}
.toggle-eye input:checked + .track {
  background: #0b57d0;
  border-color: #0b57d0;
}
.toggle-eye input:checked + .track .thumb {
  transform: translateX(26px);
  color: #0b57d0;
}`,
    react: `export function EyeSwitch({ checked, onChange }) {
  return (
    <label className="toggle-base toggle-eye">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="track">
        <span className="thumb">
          <span className="material-symbols-rounded">{checked ? 'visibility' : 'visibility_off'}</span>
        </span>
      </span>
    </label>
  );
}`
  },
  {
    id: "minimalist-swiss",
    name: "Minimalist Swiss Pill",
    category: "minimal",
    tags: ["Swiss Design", "Hairline", "Monochrome"],
    description: "Understated Swiss monochrome toggle with razor-thin outline and micro dot indicator.",
    html: `<label class="toggle-base toggle-minimal" aria-label="Minimal Swiss Switch">
  <input type="checkbox" />
  <span class="track">
    <span class="thumb"></span>
  </span>
</label>`,
    css: `.toggle-minimal {
  position: relative;
  display: inline-flex;
  width: 48px;
  height: 24px;
  cursor: pointer;
}
.toggle-minimal input { position: absolute; opacity: 0; }
.toggle-minimal .track {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  border: 1px solid #74777f;
  background: transparent;
  transition: all 250ms ease;
}
.toggle-minimal .thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 16px;
  height: 16px;
  border-radius: 9999px;
  background: #74777f;
  transition: transform 250ms cubic-bezier(0.2, 0, 0, 1);
}
.toggle-minimal input:checked + .track {
  border-color: #1f1f1f;
  background: #1f1f1f;
}
.toggle-minimal input:checked + .track .thumb {
  transform: translateX(24px);
  background: #ffffff;
}`,
    react: `export function MinimalSwitch({ checked, onChange }) {
  return (
    <label className="toggle-base toggle-minimal">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="track"><span className="thumb" /></span>
    </label>
  );
}`
  },
  {
    id: "nature-sprout",
    name: "Nature Sprout & Bloom",
    category: "micro",
    tags: ["Eco", "Botanical", "Organic"],
    description: "Organic switch with fertile soil tones blossoming into a fresh green seedling with budding leaves.",
    html: `<label class="toggle-base toggle-nature" aria-label="Nature Sprout Switch">
  <input type="checkbox" />
  <span class="track">
    <span class="thumb">
      <span class="material-symbols-rounded sprout-icon">eco</span>
    </span>
  </span>
</label>`,
    css: `.toggle-nature {
  position: relative;
  display: inline-flex;
  width: 60px;
  height: 32px;
  cursor: pointer;
}
.toggle-nature input { position: absolute; opacity: 0; }
.toggle-nature .track {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background: #d7ccc8;
  transition: background 350ms ease;
}
.toggle-nature .thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 26px;
  height: 26px;
  border-radius: 9999px;
  background: #8d6e63;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
.toggle-nature input:checked + .track { background: #c8e6c9; }
.toggle-nature input:checked + .track .thumb {
  transform: translateX(28px);
  background: #2e7d32;
}`,
    react: `export function NatureSwitch({ checked, onChange }) {
  return (
    <label className="toggle-base toggle-nature">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="track">
        <span className="thumb"><span className="material-symbols-rounded sprout-icon">eco</span></span>
      </span>
    </label>
  );
}`
  },
  {
    id: "heart-like",
    name: "Heart Like Micro-burst",
    category: "micro",
    tags: ["Heart", "Social", "Confetti Burst"],
    description: "Delightful social like switch bursting with joyful heart particle animation upon activation.",
    html: `<label class="toggle-base toggle-heart" aria-label="Heart Like Switch">
  <input type="checkbox" />
  <span class="track">
    <span class="thumb">
      <span class="material-symbols-rounded">favorite</span>
    </span>
  </span>
</label>`,
    css: `.toggle-heart {
  position: relative;
  display: inline-flex;
  width: 58px;
  height: 32px;
  cursor: pointer;
}
.toggle-heart input { position: absolute; opacity: 0; }
.toggle-heart .track {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background: #edf2f7;
  border: 2px solid #cbd5e1;
  transition: all 300ms ease;
}
.toggle-heart .thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  transition: transform 350ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
.toggle-heart input:checked + .track {
  background: #ffe4e6;
  border-color: #f43f5e;
}
.toggle-heart input:checked + .track .thumb {
  transform: translateX(26px);
  background: #f43f5e;
  color: #ffffff;
}`,
    react: `export function HeartSwitch({ checked, onChange }) {
  return (
    <label className="toggle-base toggle-heart">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="track">
        <span className="thumb"><span className="material-symbols-rounded">favorite</span></span>
      </span>
    </label>
  );
}`
  },
  {
    id: "segmented-tri",
    name: "Segmented Tri-State",
    category: "segmented",
    tags: ["3-Way", "Segmented", "Auto"],
    description: "Sliding segmented control pill supporting three states: Off, Automatic, and Always On.",
    html: `<div class="toggle-segmented" role="radiogroup" aria-label="Mode Selection">
  <input type="radio" id="seg-off" name="mode" value="off" checked />
  <label for="seg-off">Off</label>
  <input type="radio" id="seg-auto" name="mode" value="auto" />
  <label for="seg-auto">Auto</label>
  <input type="radio" id="seg-on" name="mode" value="on" />
  <label for="seg-on">On</label>
</div>`,
    css: `.toggle-segmented {
  position: relative;
  display: inline-flex;
  background: #edf2f7;
  border-radius: 9999px;
  padding: 3px;
  gap: 2px;
}
.toggle-segmented input[type="radio"] { display: none; }
.toggle-segmented label {
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 600;
  color: #64748b;
  border-radius: 9999px;
  cursor: pointer;
  transition: color 200ms ease;
}
.toggle-segmented input:checked + label {
  color: #ffffff;
  background: #0b57d0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
}`,
    react: `export function SegmentedToggle({ value, onChange }) {
  return (
    <div className="toggle-segmented">
      {['Off', 'Auto', 'On'].map(opt => (
        <button key={opt} className={value === opt ? 'active' : ''} onClick={() => onChange(opt)}>
          {opt}
        </button>
      ))}
    </div>
  );
}`
  },
  {
    id: "pixel-arcade",
    name: "8-Bit Retro Pixel",
    category: "retro",
    tags: ["8-Bit", "Chunky", "Arcade"],
    description: "Nostalgic 80s arcade switch with stepped pixel movement, chunky borders, and classic game palette.",
    html: `<label class="toggle-base toggle-pixel" aria-label="8-Bit Pixel Switch">
  <input type="checkbox" />
  <span class="track">
    <span class="thumb"></span>
  </span>
</label>`,
    css: `.toggle-pixel {
  position: relative;
  display: inline-flex;
  width: 62px;
  height: 32px;
  cursor: pointer;
}
.toggle-pixel input { position: absolute; opacity: 0; }
.toggle-pixel .track {
  position: absolute;
  inset: 0;
  background: #474747;
  border: 3px solid #000;
  box-shadow: inset -2px -2px 0 0 #2b2b2b, inset 2px 2px 0 0 #707070;
}
.toggle-pixel .thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 22px;
  height: 22px;
  background: #dc2626;
  border: 2px solid #000;
  box-shadow: inset -2px -2px 0 0 #991b1b, inset 2px 2px 0 0 #f87171;
  transition: transform 150ms steps(4);
}
.toggle-pixel input:checked + .track {
  background: #16a34a;
}
.toggle-pixel input:checked + .track .thumb {
  transform: translateX(30px);
  background: #facc15;
}`,
    react: `export function PixelSwitch({ checked, onChange }) {
  return (
    <label className="toggle-base toggle-pixel">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="track"><span className="thumb" /></span>
    </label>
  );
}`
  },
  {
    id: "space-rocket",
    name: "Rocket Ignition Thruster",
    category: "micro",
    tags: ["Cosmic", "Rocket", "Orange Flare"],
    description: "Launch vehicle switch pointing forward and firing orange thruster flames upon activation.",
    html: `<label class="toggle-base toggle-rocket" aria-label="Rocket Thruster Switch">
  <input type="checkbox" />
  <span class="track">
    <span class="thumb">
      <span class="material-symbols-rounded rocket-icon">rocket_launch</span>
    </span>
  </span>
</label>`,
    css: `.toggle-rocket {
  position: relative;
  display: inline-flex;
  width: 68px;
  height: 34px;
  cursor: pointer;
}
.toggle-rocket input { position: absolute; opacity: 0; }
.toggle-rocket .track {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background: #1e1b4b;
  border: 1px solid #312e81;
  overflow: hidden;
  transition: all 300ms ease;
}
.toggle-rocket .thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 28px;
  height: 28px;
  border-radius: 9999px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4338ca;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
.toggle-rocket .rocket-icon {
  font-size: 18px;
  transform: rotate(45deg);
}
.toggle-rocket input:checked + .track {
  background: #0f172a;
  border-color: #f97316;
  box-shadow: 0 0 12px rgba(249, 115, 22, 0.3);
}
.toggle-rocket input:checked + .track .thumb {
  transform: translateX(34px);
  background: #f97316;
  color: #ffffff;
}`,
    react: `export function RocketSwitch({ checked, onChange }) {
  return (
    <label className="toggle-base toggle-rocket">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="track">
        <span className="thumb"><span className="material-symbols-rounded rocket-icon">rocket_launch</span></span>
      </span>
    </label>
  );
}`
  },
  {
    id: "security-lock",
    name: "Security Padlock",
    category: "micro",
    tags: ["Security", "Padlock", "Unlock"],
    description: "Security switch where a padlock shackle springs open and turns emerald green upon unlocking.",
    html: `<label class="toggle-base toggle-lock" aria-label="Security Lock Switch">
  <input type="checkbox" />
  <span class="track">
    <span class="thumb">
      <span class="material-symbols-rounded">lock_open</span>
    </span>
  </span>
</label>`,
    css: `.toggle-lock {
  position: relative;
  display: inline-flex;
  width: 60px;
  height: 32px;
  cursor: pointer;
}
.toggle-lock input { position: absolute; opacity: 0; }
.toggle-lock .track {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background: #edf2f7;
  border: 2px solid #cbd5e1;
  transition: all 300ms ease;
}
.toggle-lock .thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: transform 350ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
.toggle-lock input:checked + .track {
  background: #10b981;
  border-color: #10b981;
}
.toggle-lock input:checked + .track .thumb {
  transform: translateX(28px);
  color: #10b981;
}`,
    react: `export function LockSwitch({ checked, onChange }) {
  return (
    <label className="toggle-base toggle-lock">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="track">
        <span className="thumb">
          <span className="material-symbols-rounded">{checked ? 'lock_open' : 'lock'}</span>
        </span>
      </span>
    </label>
  );
}`
  },
  {
    id: "wifi-broadcast",
    name: "Wifi Signal Radiator",
    category: "micro",
    tags: ["Wifi", "Radio", "Network"],
    description: "Connectivity switch radiating wireless broadcast waves.",
    html: `<label class="toggle-base toggle-wifi" aria-label="Wifi Signal Switch">
  <input type="checkbox" />
  <span class="track">
    <span class="thumb">
      <span class="material-symbols-rounded">wifi</span>
    </span>
  </span>
</label>`,
    css: `.toggle-wifi {
  position: relative;
  display: inline-flex;
  width: 60px;
  height: 32px;
  cursor: pointer;
}
.toggle-wifi input { position: absolute; opacity: 0; }
.toggle-wifi .track {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background: #edf2f7;
  border: 2px solid #cbd5e1;
  transition: all 300ms ease;
}
.toggle-wifi .thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: transform 350ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
.toggle-wifi input:checked + .track {
  background: #4285f4;
  border-color: #4285f4;
}
.toggle-wifi input:checked + .track .thumb {
  transform: translateX(28px);
  color: #4285f4;
}`,
    react: `export function WifiSwitch({ checked, onChange }) {
  return (
    <label className="toggle-base toggle-wifi">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="track">
        <span className="thumb">
          <span className="material-symbols-rounded">{checked ? 'wifi' : 'wifi_off'}</span>
        </span>
      </span>
    </label>
  );
}`
  },
  {
    id: "glass-marble",
    name: "Refraction Glass Marble",
    category: "physics",
    tags: ["Glass", "Marble", "Refraction"],
    description: "Realistic glass sphere with specular caustic highlight and smooth wall bounce physics.",
    html: `<label class="toggle-base toggle-marble" aria-label="Glass Marble Switch">
  <input type="checkbox" />
  <span class="track">
    <span class="thumb"></span>
  </span>
</label>`,
    css: `.toggle-marble {
  position: relative;
  display: inline-flex;
  width: 62px;
  height: 32px;
  cursor: pointer;
}
.toggle-marble input { position: absolute; opacity: 0; }
.toggle-marble .track {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background: #cbd5e1;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background 350ms ease;
}
.toggle-marble .thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 26px;
  height: 26px;
  border-radius: 9999px;
  background: radial-gradient(circle at 35% 35%, #ffffff 0%, #94a3b8 70%, #64748b 100%);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
  transition: transform 450ms cubic-bezier(0.34, 1.7, 0.64, 1);
}
.toggle-marble input:checked + .track { background: #93c5fd; }
.toggle-marble input:checked + .track .thumb {
  transform: translateX(30px);
  background: radial-gradient(circle at 35% 35%, #ffffff 0%, #60a5fa 70%, #2563eb 100%);
}`,
    react: `export function MarbleSwitch({ checked, onChange }) {
  return (
    <label className="toggle-base toggle-marble">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="track"><span className="thumb" /></span>
    </label>
  );
}`
  },
  {
    id: "holographic-gradient",
    name: "Holographic Spectrum Shift",
    category: "glow",
    tags: ["Gradient", "Rainbow", "Hologram"],
    description: "Dynamic iridescent spectrum gradient shifting fluidly across purple, pink and sunset orange.",
    html: `<label class="toggle-base toggle-gradient" aria-label="Gradient Holographic Switch">
  <input type="checkbox" />
  <span class="track">
    <span class="thumb"></span>
  </span>
</label>`,
    css: `.toggle-gradient {
  position: relative;
  display: inline-flex;
  width: 64px;
  height: 34px;
  cursor: pointer;
}
.toggle-gradient input { position: absolute; opacity: 0; }
.toggle-gradient .track {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background: linear-gradient(135deg, #a855f7, #ec4899, #f97316);
  background-size: 200% 200%;
  background-position: 0% 50%;
  box-shadow: 0 2px 8px rgba(236, 72, 153, 0.25);
  transition: background-position 500ms ease;
}
.toggle-gradient .thumb {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 26px;
  height: 26px;
  border-radius: 9999px;
  background: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  transition: transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
.toggle-gradient input:checked + .track {
  background-position: 100% 50%;
  box-shadow: 0 3px 12px rgba(249, 115, 22, 0.4);
}
.toggle-gradient input:checked + .track .thumb {
  transform: translateX(30px);
}`,
    react: `export function HolographicSwitch({ checked, onChange }) {
  return (
    <label className="toggle-base toggle-gradient">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="track"><span className="thumb" /></span>
    </label>
  );
}`
  },
  {
    id: "workspace-theme",
    name: "Workspace Theme Switch",
    category: "material",
    tags: ["Dark Mode", "Sun/Moon", "Workspace"],
    description: "Dark theme switch with rotating solar and lunar glyphs.",
    html: `<label class="toggle-base toggle-workspace" aria-label="Workspace Theme Switch">
  <input type="checkbox" />
  <span class="track">
    <span class="thumb">
      <span class="material-symbols-rounded">light_mode</span>
    </span>
  </span>
</label>`,
    css: `.toggle-workspace {
  position: relative;
  display: inline-flex;
  width: 58px;
  height: 32px;
  cursor: pointer;
}
.toggle-workspace input { position: absolute; opacity: 0; }
.toggle-workspace .track {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background: #f1f3f4;
  border: 1px solid #dadce0;
  transition: all 300ms ease;
}
.toggle-workspace .thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ea4335;
  box-shadow: 0 1px 3px rgba(60, 64, 67, 0.3);
  transition: transform 350ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
.toggle-workspace input:checked + .track {
  background: #202124;
  border-color: #5f6368;
}
.toggle-workspace input:checked + .track .thumb {
  transform: translateX(26px);
  background: #3c4043;
  color: #8ab4f8;
}`,
    react: `export function WorkspaceSwitch({ checked, onChange }) {
  return (
    <label className="toggle-base toggle-workspace">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="track">
        <span className="thumb">
          <span className="material-symbols-rounded">{checked ? 'dark_mode' : 'light_mode'}</span>
        </span>
      </span>
    </label>
  );
}`
  },
  {
    id: "tactile-ridge",
    name: "Tactile Grip Ridge",
    category: "retro",
    tags: ["Tactile", "Groove", "Hardware"],
    description: "Industrial hardware toggle with textured thumb ridges for enhanced tactile feel.",
    html: `<label class="toggle-base toggle-tactile" aria-label="Tactile Ridge Switch">
  <input type="checkbox" />
  <span class="track">
    <span class="thumb">
      <span class="ridge"></span>
      <span class="ridge"></span>
      <span class="ridge"></span>
    </span>
  </span>
</label>`,
    css: `.toggle-tactile {
  position: relative;
  display: inline-flex;
  width: 60px;
  height: 32px;
  cursor: pointer;
}
.toggle-tactile input { position: absolute; opacity: 0; }
.toggle-tactile .track {
  position: absolute;
  inset: 0;
  border-radius: 8px;
  background: #e2e8f0;
  border: 2px solid #cbd5e1;
  transition: all 250ms ease;
}
.toggle-tactile .thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  background: #f8fafc;
  border: 1px solid #94a3b8;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  transition: transform 300ms cubic-bezier(0.2, 0, 0, 1);
}
.toggle-tactile .ridge {
  width: 2px;
  height: 12px;
  background: #94a3b8;
  border-radius: 1px;
}
.toggle-tactile input:checked + .track {
  background: #d3e3fd;
  border-color: #0b57d0;
}
.toggle-tactile input:checked + .track .thumb {
  transform: translateX(28px);
  border-color: #0b57d0;
}
.toggle-tactile input:checked + .track .ridge {
  background: #0b57d0;
}`,
    react: `export function TactileSwitch({ checked, onChange }) {
  return (
    <label className="toggle-base toggle-tactile">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="track">
        <span className="thumb"><span className="ridge" /><span className="ridge" /><span className="ridge" /></span>
      </span>
    </label>
  );
}`
  },
  {
    id: "fluid-lava",
    name: "Viscous Lava Lamp",
    category: "physics",
    tags: ["Liquid", "Organic Blob", "Morph"],
    description: "Organic blob toggle that morphs its border radius as it glides like molten liquid wax.",
    html: `<label class="toggle-base toggle-lava" aria-label="Fluid Lava Switch">
  <input type="checkbox" />
  <span class="track">
    <span class="thumb"></span>
  </span>
</label>`,
    css: `.toggle-lava {
  position: relative;
  display: inline-flex;
  width: 64px;
  height: 32px;
  cursor: pointer;
}
.toggle-lava input { position: absolute; opacity: 0; }
.toggle-lava .track {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background: #cbd5e1;
  transition: background 400ms ease;
}
.toggle-lava .thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 26px;
  height: 26px;
  border-radius: 50% 45% 50% 45%;
  background: #64748b;
  transition: transform 500ms cubic-bezier(0.68, -0.55, 0.27, 1.55), border-radius 400ms ease;
}
.toggle-lava input:checked + .track { background: #fed7aa; }
.toggle-lava input:checked + .track .thumb {
  transform: translateX(32px);
  border-radius: 45% 50% 45% 50%;
  background: #ea580c;
}`,
    react: `export function LavaSwitch({ checked, onChange }) {
  return (
    <label className="toggle-base toggle-lava">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="track"><span className="thumb" /></span>
    </label>
  );
}`
  },
  {
    id: "steaming-coffee",
    name: "Warm Morning Coffee",
    category: "celestial",
    tags: ["Coffee", "Warmth", "Morning"],
    description: "Comforting switch warming up from a neutral mug to a steaming, aromatic golden brew.",
    html: `<label class="toggle-base toggle-coffee" aria-label="Steaming Coffee Switch">
  <input type="checkbox" />
  <span class="track">
    <span class="thumb">
      <span class="material-symbols-rounded">coffee</span>
    </span>
  </span>
</label>`,
    css: `.toggle-coffee {
  position: relative;
  display: inline-flex;
  width: 60px;
  height: 32px;
  cursor: pointer;
}
.toggle-coffee input { position: absolute; opacity: 0; }
.toggle-coffee .track {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background: #e5e7eb;
  transition: background 300ms ease;
}
.toggle-coffee .thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 26px;
  height: 26px;
  border-radius: 9999px;
  background: #9ca3af;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  transition: transform 350ms cubic-bezier(0.34, 1.56, 0.64, 1), background 300ms ease;
}
.toggle-coffee input:checked + .track { background: #fde68a; }
.toggle-coffee input:checked + .track .thumb {
  transform: translateX(28px);
  background: #b45309;
}`,
    react: `export function CoffeeSwitch({ checked, onChange }) {
  return (
    <label className="toggle-base toggle-coffee">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="track">
        <span className="thumb"><span className="material-symbols-rounded">coffee</span></span>
      </span>
    </label>
  );
}`
  },
  {
    id: "gemini-sparkle",
    name: "Gemini AI Sparkle",
    category: "glow",
    tags: ["AI", "Sparkles", "Gradient"],
    description: "Generative AI switch with rotating multi-colored sparkle star and cosmic glow.",
    html: `<label class="toggle-base toggle-gemini" aria-label="Gemini AI Switch">
  <input type="checkbox" />
  <span class="track">
    <span class="thumb">
      <span class="material-symbols-rounded">auto_awesome</span>
    </span>
  </span>
</label>`,
    css: `.toggle-gemini {
  position: relative;
  display: inline-flex;
  width: 68px;
  height: 34px;
  cursor: pointer;
}
.toggle-gemini input { position: absolute; opacity: 0; }
.toggle-gemini .track {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background: #1e1f20;
  border: 1px solid #3c4043;
  transition: all 400ms ease;
  overflow: hidden;
}
.toggle-gemini .thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 28px;
  height: 28px;
  border-radius: 9999px;
  background: #3c4043;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c4c7c5;
  transition: transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
.toggle-gemini input:checked + .track {
  background: linear-gradient(135deg, #1b0933, #041e49);
  border-color: #a855f7;
  box-shadow: 0 0 12px rgba(168, 85, 247, 0.35);
}
.toggle-gemini input:checked + .track .thumb {
  transform: translateX(34px);
  background: linear-gradient(135deg, #a855f7, #3b82f6);
  color: #ffffff;
  box-shadow: 0 0 10px rgba(168, 85, 247, 0.6);
}`,
    react: `export function GeminiSwitch({ checked, onChange }) {
  return (
    <label className="toggle-base toggle-gemini">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="track">
        <span className="thumb"><span className="material-symbols-rounded">auto_awesome</span></span>
      </span>
    </label>
  );
}`
  }
];

window.TOGGLE_CATALOG = TOGGLE_CATALOG;
