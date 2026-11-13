
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'www');

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });

const files = [
  'index.html',
  'styles.css',
  'app.js',
  'manifest.webmanifest',
  'logo-artigo.jpg',
  'icon-192.png',
  'icon-512.png'
];

for (const file of files) {
  const source = path.join(root, file);
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, path.join(output, file));
  }
}

const assets = path.join(root, 'assets');
if (fs.existsSync(assets)) {
  fs.cpSync(assets, path.join(output, 'assets'), { recursive: true });
}

console.log('Arquivos web preparados em www/.');
