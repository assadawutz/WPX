import { execSync } from 'child_process';

const usernames = [
  'assadawut',
  'assadawut-sarakul',
  'assadawutsarakul',
  'sarakul',
  'assadawut.sarakul',
  'assadawut_sarakul'
];

const repos = [
  'WhisperXBuilder-merged-v3.1',
  'WhisperXBuilder-merged',
  'WhisperXBuilder',
  'WhisperXBuilder-v3.1',
  'WhisperXBuilder_merged_v3.1',
  'wpx-os',
  'wpx_os'
];

async function checkUrl(url: string) {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    console.log(`${url} -> STATUS: ${res.status}`);
    return res.status;
  } catch (e: any) {
    console.log(`${url} -> ERROR: ${e.message}`);
    return null;
  }
}

async function run() {
  console.log("Checking potential GitHub repository URLs...");
  for (const user of usernames) {
    for (const repo of repos) {
      const url = `https://github.com/${user}/${repo}`;
      await checkUrl(url);
    }
  }
}

run();
