import { execSync } from 'child_process';

try {
  console.log("=== df -h ===");
  console.log(execSync('df -h', { encoding: 'utf8' }));
} catch (e: any) {
  console.error(e.message);
}

try {
  console.log("=== mount ===");
  console.log(execSync('mount', { encoding: 'utf8' }));
} catch (e: any) {
  console.error(e.message);
}
