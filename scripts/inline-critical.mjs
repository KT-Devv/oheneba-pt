import fs from 'fs';
import path from 'path';
import { generate } from 'critical';

const distIndex = path.join(process.cwd(), 'dist', 'index.html');

(async () => {
  try {
    const html = fs.readFileSync(distIndex, 'utf8');
    const { html: inlined } = await generate({
      base: path.join(process.cwd(), 'dist'),
      html,
      inline: true,
      extract: true,
      width: 1300,
      height: 900,
    });
    fs.writeFileSync(distIndex, inlined, 'utf8');
    console.log('Wrote inlined critical CSS to', distIndex);
  } catch (err) {
    console.error('Critical generation failed:', err);
    process.exit(1);
  }
})();
