import * as fs from 'fs';
import * as path from 'path';

const results: string[] = [];

function scan(dir: string, depth = 0) {
  if (depth > 6) return;
  try {
    const files = fs.readdirSync(dir);
    for (const f of files) {
      const fp = path.join(dir, f);
      try {
        const stat = fs.statSync(fp);
        if (stat.isFile() && !fp.includes('node_modules') && !fp.includes('.next') && !fp.includes('.git') && f !== 'search-github.ts' && f !== 'package-lock.json') {
          const content = fs.readFileSync(fp, 'utf8');
          if (content.toLowerCase().includes('github') || content.toLowerCase().includes('git@')) {
            results.push(`${fp} (contains github/git)`);
          }
        } else if (stat.isDirectory()) {
          if (f === 'node_modules' || f === '.next' || f === '.git') {
            continue;
          }
          scan(fp, depth + 1);
        }
      } catch (e) {}
    }
  } catch (e) {}
}

scan('.');
console.log("GitHub/Git references found in files:", results);
