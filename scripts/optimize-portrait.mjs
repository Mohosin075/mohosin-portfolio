import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const source = new URL("../assets-source/me-mohosin.png", import.meta.url);
const output = new URL("../src/assets/portrait/", import.meta.url);
await mkdir(output, { recursive: true });
for (const width of [320, 640, 960]) {
  await sharp(fileURLToPath(source))
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(fileURLToPath(new URL(`mohosin-${width}.webp`, output)));
}
await sharp(fileURLToPath(source))
  .rotate()
  .resize({ width: 960, withoutEnlargement: true })
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile(fileURLToPath(new URL("../public/mohosin-social.jpg", import.meta.url)));
console.log("Generated responsive portrait images and social preview.");
