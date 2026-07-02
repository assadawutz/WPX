import * as fs from 'fs';
import * as path from 'path';

function scan(dir: string) {
  try {
    const files = fs.readdirSync(dir);
    console.log(`Contents of ${dir}:`, files);
    for (const f of files) {
      const fp = path.join(dir, f);
      if (fs.statSync(fp).isDirectory()) {
        scan(fp);
      }
    }
  } catch (e: any) {
    console.error(`Error reading ${dir}: ${e.message}`);
  }
}

scan('components');
