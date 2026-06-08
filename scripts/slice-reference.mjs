import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const source = path.resolve("src/img/original/figma-reference.png");
const outDir = path.resolve("assets/img/lp");
const sliceHeight = 8000;

await fs.mkdir(outDir, { recursive: true });

const image = sharp(source);
const meta = await image.metadata();

if (!meta.width || !meta.height) {
  throw new Error("Could not read reference image dimensions.");
}

const count = Math.ceil(meta.height / sliceHeight);

for (let index = 0; index < count; index += 1) {
  const top = index * sliceHeight;
  const height = Math.min(sliceHeight, meta.height - top);
  const outPath = path.join(outDir, `slice-${String(index + 1).padStart(2, "0")}.webp`);

  await sharp(source)
    .extract({ left: 0, top, width: meta.width, height })
    .webp({ quality: 92, effort: 5 })
    .toFile(outPath);

  console.log(`created ${path.relative(process.cwd(), outPath)} (${meta.width}x${height})`);
}
