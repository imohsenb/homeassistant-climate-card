import { copyFile, mkdir, stat } from 'node:fs/promises';
import { dirname } from 'node:path';

const source = new URL('../dist/climate-card.js', import.meta.url);
const target = new URL('../climate-card.js', import.meta.url);

try {
  await stat(source);
} catch (err) {
  console.error('Build output not found:', source.pathname);
  throw err;
}

await mkdir(dirname(target.pathname), { recursive: true });
await copyFile(source, target);

console.log('Copied', source.pathname, '->', target.pathname);
