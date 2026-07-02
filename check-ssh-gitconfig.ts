import * as fs from 'fs';
import * as path from 'path';

const files = ['/root/.gitconfig', '/root/.ssh', '/root/.npmrc', '/root/.bash_history'];

for (const f of files) {
  if (fs.existsSync(f)) {
    console.log(`FOUND: ${f}`);
    try {
      const stat = fs.statSync(f);
      if (stat.isFile()) {
        console.log(fs.readFileSync(f, 'utf8'));
      } else {
        console.log(fs.readdirSync(f));
      }
    } catch (e: any) {
      console.error(`Error reading ${f}: ${e.message}`);
    }
  } else {
    console.log(`NOT FOUND: ${f}`);
  }
}
