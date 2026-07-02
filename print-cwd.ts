import * as fs from 'fs';
console.log("CWD:", process.cwd());
console.log("Contents of CWD:", fs.readdirSync('.'));
console.log("Contents of /app:", fs.readdirSync('/app'));
