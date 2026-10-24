const fs = require('fs');
const path = require('path');
const dir = 'src/content/posts';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
const cats = {};
files.forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf-8');
  const m = content.match(/category:\s*(.+)/);
  const cat = m ? m[1].trim().replace(/^['\"]|['\"]$/g, '') : 'uncategorized';
  cats[cat] = (cats[cat] || 0) + 1;
});
console.log(cats);
