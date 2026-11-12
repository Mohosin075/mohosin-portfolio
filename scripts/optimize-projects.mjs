import sharp from 'sharp';
import { readFile, writeFile, mkdir } from 'node:fs/promises';

const projects = JSON.parse(await readFile('public/projects.json', 'utf8'));
await mkdir('public/images/projects', { recursive: true });
for (const project of projects) {
  project.sourceImage ||= project.image;
  for (const width of [480, 960, 1440]) {
    await sharp(`public${project.sourceImage}`).rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(`public/images/projects/${project.id}-${width}.webp`);
  }
  project.image = `/images/projects/${project.id}-960.webp`;
  project.imageSet = [480, 960, 1440].map(width => `/images/projects/${project.id}-${width}.webp ${width}w`).join(', ');
}
await writeFile('public/projects.json', JSON.stringify(projects, null, 2) + '\n');
console.log('Optimized six projects at three responsive widths.');
