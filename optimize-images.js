const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminAvif = require('imagemin-avif');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  const files = fs.readdirSync('src/images');
  const promises = files.map(file => {
    const filePath = path.join('src/images', file);
    return imagemin([filePath], {
      destination: 'dist/images',
      plugins: [
        imageminMozjpeg(),
        imageminPngquant(),
        imageminAvif()
      ]
    });
  });
  await Promise.all(promises);
}

optimizeImages().catch(console.error);
