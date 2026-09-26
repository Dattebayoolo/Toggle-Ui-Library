const fs = require('fs');
const path = require('path');
const vm = require('vm');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

console.log('Building Toggle UI Library artifacts...');

const banner = `/*!
 * Toggle UI Library v1.0.0
 * Modern Material 3 inspired toggle & switch UI system
 * https://github.com/Dattebayoolo/Toggle-Ui-Library
 * MIT License
 */\n`;

// 1. CSS Bundling
const varCss = fs.readFileSync(path.join(rootDir, 'css', 'variables.css'), 'utf8');
const togglesCss = fs.readFileSync(path.join(rootDir, 'css', 'toggles.css'), 'utf8');
const compCss = fs.readFileSync(path.join(rootDir, 'css', 'components.css'), 'utf8');

fs.writeFileSync(path.join(distDir, 'variables.css'), banner + varCss);
fs.writeFileSync(path.join(distDir, 'toggles.css'), banner + togglesCss);
fs.writeFileSync(path.join(distDir, 'components.css'), banner + compCss);

const fullCss = banner +
  '\n/* === Material 3 Design Tokens === */\n' + varCss +
  '\n/* === Toggle & Switch Components === */\n' + togglesCss +
  '\n/* === UI Component Library === */\n' + compCss + '\n';
fs.writeFileSync(path.join(distDir, 'toggle.css'), fullCss);
console.log('? CSS bundles generated');

// 2. Load Catalog
const toggleDataSrc = fs.readFileSync(path.join(rootDir, 'js', 'toggle-data.js'), 'utf8');
const audioSrc = fs.readFileSync(path.join(rootDir, 'js', 'audio.js'), 'utf8');
const playgroundSrc = fs.readFileSync(path.join(rootDir, 'js', 'playground.js'), 'utf8');

const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(toggleDataSrc, sandbox);
const catalog = sandbox.window.TOGGLE_CATALOG || [];

const reactComponents = [];
const componentNames = [];

catalog.forEach(item => {
  if (item.react) {
    const fnMatch = item.react.match(/export\s+function\s+([A-Za-z0-9_]+)/);
    const fnName = fnMatch ? fnMatch[1] : null;
    if (fnName) {
      componentNames.push(fnName);
      const body = item.react.replace(/^export\s+function/, 'function').trim();
      reactComponents.push({ id: item.id, name: item.name, fnName, body });
    }
  }
});
console.log(`? Loaded ${componentNames.length} React switch components`);

// 3. React Modules
const reactEsm = banner +
  "import React, { useState } from 'react';\n\n" +
  reactComponents.map(c => `/** ${c.name} */\nexport ${c.body}`).join('\n\n') +
  '\n\nexport const TOGGLE_COMPONENTS = {\n  ' + componentNames.join(',\n  ') + '\n};\n';
fs.writeFileSync(path.join(distDir, 'react.mjs'), reactEsm);
fs.writeFileSync(path.join(distDir, 'react.js'), reactEsm);

const reactCjs = banner +
  "const React = require('react');\nconst { useState } = React;\n\n" +
  reactComponents.map(c => `/** ${c.name} */\n${c.body}`).join('\n\n') +
  '\n\nmodule.exports = {\n  ' + componentNames.join(',\n  ') +
  ',\n  TOGGLE_COMPONENTS: {\n    ' + componentNames.join(',\n    ') + '\n  }\n};\n';
fs.writeFileSync(path.join(distDir, 'react.cjs'), reactCjs);
console.log('? React modules generated');

// 4. Main Entries
const soundEngineMatch = audioSrc.match(/class SoundEngine\s*\{[\s\S]*?\n\}/);
const soundEngineCode = soundEngineMatch ? soundEngineMatch[0] : '';
const toggleStudioMatch = playgroundSrc.match(/class ToggleStudio\s*\{[\s\S]*?\n\}/);
const toggleStudioCode = toggleStudioMatch ? toggleStudioMatch[0] : '';
const catalogJson = JSON.stringify(catalog, null, 2);

const mainEsm = banner +
  "import React, { useState } from 'react';\n\n" +
  soundEngineCode + "\nexport const soundEngine = typeof window !== 'undefined' ? new SoundEngine() : null;\nexport { SoundEngine };\n\n" +
  toggleStudioCode + "\nexport { ToggleStudio };\n\n" +
  'export const TOGGLE_CATALOG = ' + catalogJson + ';\n\n' +
  reactComponents.map(c => `/** ${c.name} */\nexport ${c.body}`).join('\n\n') +
  '\n\nexport const TOGGLE_COMPONENTS = {\n  ' + componentNames.join(',\n  ') + '\n};\n\n' +
  'export default {\n  SoundEngine,\n  soundEngine,\n  ToggleStudio,\n  TOGGLE_CATALOG,\n  ...TOGGLE_COMPONENTS\n};\n';
fs.writeFileSync(path.join(distDir, 'index.mjs'), mainEsm);
fs.writeFileSync(path.join(distDir, 'index.js'), mainEsm);

const mainCjs = banner +
  "const React = require('react');\nconst { useState } = React;\n\n" +
  soundEngineCode + "\nconst soundEngine = typeof window !== 'undefined' ? new SoundEngine() : null;\n\n" +
  toggleStudioCode + "\n\n" +
  'const TOGGLE_CATALOG = ' + catalogJson + ';\n\n' +
  reactComponents.map(c => `/** ${c.name} */\n${c.body}`).join('\n\n') +
  '\n\nconst TOGGLE_COMPONENTS = {\n  ' + componentNames.join(',\n  ') + '\n};\n\n' +
  'module.exports = {\n  SoundEngine,\n  soundEngine,\n  ToggleStudio,\n  TOGGLE_CATALOG,\n  TOGGLE_COMPONENTS,\n  ' +
  componentNames.join(',\n  ') + '\n};\n';
fs.writeFileSync(path.join(distDir, 'index.cjs'), mainCjs);
console.log('? Main entries generated');

// 5. TypeScript Definitions
const dts = banner +
  "import type { ChangeEvent, ReactElement } from 'react';\n\n" +
  'export interface BaseToggleProps {\n  checked?: boolean;\n  defaultChecked?: boolean;\n  disabled?: boolean;\n  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;\n  className?: string;\n  id?: string;\n  name?: string;\n  "aria-label"?: string;\n}\n\n' +
  'export interface SegmentedSwitchProps {\n  value?: string;\n  defaultValue?: string;\n  onChange?: (val: string) => void;\n  className?: string;\n}\n\n' +
  componentNames.map(name => name === 'SegmentedSwitch' ? `export declare function ${name}(props: SegmentedSwitchProps): ReactElement;` : `export declare function ${name}(props: BaseToggleProps): ReactElement;`).join('\n') +
  '\n\nexport declare const TOGGLE_COMPONENTS: {\n  ' + componentNames.map(n => `${n}: typeof ${n};`).join('\n  ') + '\n};\n\n' +
  'export interface ToggleCatalogItem {\n  id: string;\n  name: string;\n  category: string;\n  tags: string[];\n  description: string;\n  html: string;\n  css: string;\n  react: string;\n}\n\n' +
  'export declare const TOGGLE_CATALOG: ToggleCatalogItem[];\n\n' +
  'export declare class SoundEngine {\n  constructor();\n  audioCtx: any;\n  enabled: boolean;\n  init(): void;\n  playToggle(isOn: boolean): void;\n  playSpring(): void;\n  toggleSound(): boolean;\n}\n\n' +
  'export declare const soundEngine: SoundEngine | null;\n\n' +
  'export interface ToggleStudioState {\n  width: number;\n  height: number;\n  thumbSize: number;\n  trackRadius: number;\n  thumbRadius: number;\n  padding: number;\n  speed: number;\n  activeColor: string;\n  inactiveColor: string;\n  thumbColor: string;\n  glowBlur: number;\n  isChecked: boolean;\n  activeTab: "css" | "html" | "react";\n}\n\n' +
  'export declare class ToggleStudio {\n  constructor();\n  state: ToggleStudioState;\n  update(): void;\n  generateCode(type: "css" | "html" | "react"): string;\n}\n\n' +
  'declare const _default: {\n  SoundEngine: typeof SoundEngine;\n  soundEngine: SoundEngine | null;\n  ToggleStudio: typeof ToggleStudio;\n  TOGGLE_CATALOG: ToggleCatalogItem[];\n  ' +
  componentNames.map(n => `${n}: typeof ${n};`).join('\n  ') + '\n};\nexport default _default;\n';

fs.writeFileSync(path.join(distDir, 'index.d.ts'), dts);
fs.writeFileSync(path.join(distDir, 'react.d.ts'), dts);
console.log('? TypeScript definitions generated');
console.log('? Build complete successfully!');
