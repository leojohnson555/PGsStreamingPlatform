const fs = require('fs');
const path = require('path');
const https = require('https');

const images = [
  'Padayani_Daarika.JPG',
  'Kathakali_-Play_with_Kaurava.jpg',
  'Pulikkali_during_Onam.jpg',
  'Kudamatom_at_thrissur_pooram_2013_7618.JPG',
  'Kerala_Kuttanad1.jpg',
  'Thavil-DSC_3864.jpg'
];

const destFolder = path.join(__dirname, 'public', 'images', 'categories');

if (!fs.existsSync(destFolder)) {
  fs.mkdirSync(destFolder, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Node.js/script' } }, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return download(response.headers.location.startsWith('http') ? response.headers.location : `https://commons.wikimedia.org${response.headers.location}`, dest).then(resolve).catch(reject);
      }
      
      if (response.statusCode !== 200) {
        return reject(new Error('Failed to get ' + url + ' (' + response.statusCode + ')'));
      }

      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  for (const img of images) {
    // Special:FilePath works without width, but let's try with width just in case
    const url = `https://commons.wikimedia.org/wiki/Special:FilePath/${img}?width=960`;
    const dest = path.join(destFolder, img);
    console.log(`Downloading ${img}...`);
    try {
      await download(url, dest);
      console.log(`Downloaded ${img}`);
    } catch (err) {
      console.error(`Error downloading ${img}:`, err);
    }
  }
}

main();
