import { writeFileSync } from 'fs';
import { visualizer } from 'rollup-plugin-visualizer';
import { build } from 'vite';

async function run() {
  // build with visualizer plugin to produce stats
  await build({
    build: {
      rollupOptions: {
        plugins: [visualizer({ filename: 'dist/bundle-analysis.html', open: false })],
      },
    },
  });

  console.log('bundle-analysis.html written to dist/');
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
