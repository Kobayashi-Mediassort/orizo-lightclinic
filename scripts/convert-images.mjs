import { promises as fs, watch } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const sourceDir = path.resolve("src/img");
const outputDir = path.resolve("assets/img");
const supported = new Set([".jpg", ".jpeg", ".png", ".gif", ".tif", ".tiff"]);
const watchMode = process.argv.includes("--watch");

async function exists(target) {
  try {
    await fs.access(target);
    return true;
  } catch {
    return false;
  }
}

async function collectImages(dir) {
  if (!(await exists(dir))) return [];

  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return collectImages(fullPath);
      if (!supported.has(path.extname(entry.name).toLowerCase())) return [];
      return [fullPath];
    })
  );

  return files.flat();
}

async function convertImage(imagePath) {
  const relative = path.relative(sourceDir, imagePath);
  const parsed = path.parse(relative);
  const outDir = path.join(outputDir, parsed.dir);
  const outPath = path.join(outDir, `${parsed.name}.webp`);

  const image = sharp(imagePath).rotate();
  const metadata = await image.metadata();
  let pipeline = image;

  if (metadata.width > 16000 || metadata.height > 16000) {
    const width = Math.min(metadata.width, 16000);
    const height = Math.min(metadata.height, 12000);
    pipeline = image.extract({ left: 0, top: 0, width, height });
  }

  await fs.mkdir(outDir, { recursive: true });
  await pipeline.webp({ quality: 86, effort: 5 }).toFile(outPath);

  console.log(`converted ${relative} -> ${path.relative(process.cwd(), outPath)}`);
}

await fs.mkdir(outputDir, { recursive: true });

const images = await collectImages(sourceDir);
if (images.length === 0) {
  console.log("No source images found in src/img");
} else {
  await Promise.all(images.map(convertImage));
  console.log(`Done. ${images.length} image(s) converted.`);
}

if (watchMode) {
  console.log(`\nWatching src/img for changes... (Ctrl+C to stop)`);

  // debounce per file to avoid double-fire on Windows
  const pending = new Map();

  watch(sourceDir, { recursive: true }, (eventType, filename) => {
    if (!filename) return;
    const ext = path.extname(filename).toLowerCase();
    if (!supported.has(ext)) return;

    if (pending.has(filename)) clearTimeout(pending.get(filename));

    pending.set(
      filename,
      setTimeout(async () => {
        pending.delete(filename);
        const imagePath = path.join(sourceDir, filename);
        if (!(await exists(imagePath))) return;
        try {
          await convertImage(imagePath);
        } catch (err) {
          console.error(`Error converting ${filename}:`, err.message);
        }
      }, 200)
    );
  });
}
