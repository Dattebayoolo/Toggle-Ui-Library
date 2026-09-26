const fs = require('fs');
const compData = fs.readFileSync('js/components-data.js', 'utf8');
const compCss = fs.readFileSync('css/components.css', 'utf8');

const matches = compData.match(/class=["']([^"']+)["']/g) || [];
const missing = new Set();
matches.forEach(m => {
  const clsStr = m.replace(/class=["']/, '').replace(/["']$/, '');
  clsStr.split(/\s+/).forEach(c => {
    if (c.startsWith('toggle-') || c.startsWith('m3-')) {
      if (!compCss.includes('.' + c)) {
        missing.add(c);
      }
    }
  });
});
console.log('Missing classes in css/components.css:');
console.log(Array.from(missing).sort());
