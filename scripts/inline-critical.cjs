const fs = require('fs');
const path = require('path');
const critical = require('critical');

const distIndex = path.join(__dirname, '..', 'dist', 'index.html');
const outIndex = distIndex;

(async () => {
  try {
    const html = fs.readFileSync(distIndex, 'utf8');
    const { html: inlined } = await critical.generate({
      base: path.join(__dirname, '..', 'dist'),
      html,
      inline: true,
      extract: true,
      width: 1300,
      height: 900,
    });
    fs.writeFileSync(outIndex, inlined, 'utf8');
    console.log('Wrote inlined critical CSS to', outIndex);
  } catch (err) {
    console.error('Critical generation failed:', err);
    process.exit(1);
  }
})();
