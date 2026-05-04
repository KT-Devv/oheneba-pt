const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

const images = [
  {
    src: path.join(__dirname, '..', 'public', 'profile.JPG'),
    name: 'profile',
  },
  {
    src: path.join(__dirname, '..', 'src', 'Images', 'Robot.jpg'),
    name: 'robot',
  },
];

const outDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function processImage(item) {
  const { src, name } = item;
  if (!fs.existsSync(src)) {
    console.warn(`Skipping ${src} — file not found`);
    return;
  }

  const img = sharp(src);
  const metadata = await img.metadata();

  const sizes = [480, 800, 1200];
  await Promise.all(
    sizes.map((w) =>
      sharp(src)
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(path.join(outDir, `${name}-${w}.webp`))
    )
  );

  // also output an avif master size (800)
  await sharp(src).resize({ width: 800, withoutEnlargement: true }).avif({ quality: 60 }).toFile(path.join(outDir, `${name}.avif`));

  // copy a baseline jpg to public/images
  const destJpg = path.join(outDir, `${name}.jpg`);
  await sharp(src).toFile(destJpg);

  console.log(`Processed ${name} (original: ${metadata.format}, ${metadata.width}x${metadata.height})`);
}

async function run() {
  for (const item of images) {
    try {
      await processImage(item);
    } catch (err) {
      console.error('Error processing', item.src, err.message || err);
    }
  }
}

run();
