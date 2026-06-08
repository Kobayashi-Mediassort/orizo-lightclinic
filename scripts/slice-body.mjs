import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const source = path.resolve("src/img/original/figma-reference.png");
const outDir = path.resolve("assets/img/body");
const startY = 18500;
const sliceHeight = 8000;

await fs.mkdir(outDir, { recursive: true });

const meta = await sharp(source).metadata();

for (let index = 0, top = startY; top < meta.height; index += 1, top += sliceHeight) {
  const height = Math.min(sliceHeight, meta.height - top);
  const outPath = path.join(outDir, `slice-${String(index + 1).padStart(2, "0")}.webp`);

  await sharp(source)
    .extract({ left: 0, top, width: 780, height })
    .webp({ quality: 92, effort: 5 })
    .toFile(outPath);

  console.log(`created ${path.relative(process.cwd(), outPath)} (780x${height})`);
}
