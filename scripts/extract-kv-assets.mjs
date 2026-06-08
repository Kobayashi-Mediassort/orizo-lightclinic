import sharp from "sharp";

await sharp("src/img/original/figma-reference.png")
  .extract({ left: 24, top: 24, width: 150, height: 72 })
  .webp({ quality: 95, effort: 5 })
  .toFile("assets/img/kv-logo.webp");

await sharp("src/img/original/figma-reference.png")
  .extract({ left: 390, top: 180, width: 390, height: 850 })
  .webp({ quality: 94, effort: 5 })
  .toFile("assets/img/kv-doctor.webp");

await sharp("src/img/original/figma-reference.png")
  .extract({ left: 384, top: 398, width: 88, height: 68 })
  .webp({ quality: 95, effort: 5 })
  .toFile("assets/img/kv-heart.webp");

await sharp("src/img/original/figma-reference.png")
  .extract({ left: 48, top: 604, width: 305, height: 160 })
  .webp({ quality: 95, effort: 5 })
  .toFile("assets/img/kv-record.webp");

await sharp("src/img/original/figma-reference.png")
  .extract({ left: 0, top: 1950, width: 656, height: 453 })
  .webp({ quality: 92, effort: 5 })
  .toFile("assets/img/profile-doctor.webp");

await sharp("src/img/original/figma-reference.png")
  .extract({ left: 40, top: 3664, width: 700, height: 392 })
  .webp({ quality: 92, effort: 5 })
  .toFile("assets/img/youtube-thumb.webp");

await sharp("src/img/original/figma-reference.png")
  .extract({ left: 40, top: 4747, width: 465, height: 330 })
  .webp({ quality: 90, effort: 5 })
  .toFile("assets/img/worry-01.webp");

await sharp("src/img/original/figma-reference.png")
  .extract({ left: 296, top: 5169, width: 452, height: 330 })
  .webp({ quality: 90, effort: 5 })
  .toFile("assets/img/worry-02.webp");

await sharp("src/img/original/figma-reference.png")
  .extract({ left: 40, top: 5598, width: 465, height: 330 })
  .webp({ quality: 90, effort: 5 })
  .toFile("assets/img/worry-03.webp");

await sharp("src/img/original/figma-reference.png")
  .extract({ left: 0, top: 6538, width: 780, height: 560 })
  .webp({ quality: 90, effort: 5 })
  .toFile("assets/img/review-doctor.webp");

await sharp("src/img/original/figma-reference.png")
  .extract({ left: 40, top: 7960, width: 700, height: 380 })
  .webp({ quality: 90, effort: 5 })
  .toFile("assets/img/feature-01.webp");

await sharp("src/img/original/figma-reference.png")
  .extract({ left: 40, top: 9060, width: 700, height: 382 })
  .webp({ quality: 92, effort: 5 })
  .toFile("assets/img/feature-02.webp");

await sharp("src/img/original/figma-reference.png")
  .extract({ left: 40, top: 10173, width: 700, height: 495 })
  .webp({ quality: 92, effort: 5 })
  .toFile("assets/img/feature-03.webp");

await sharp("src/img/original/figma-reference.png")
  .extract({ left: 0, top: 13934, width: 780, height: 620 })
  .webp({ quality: 90, effort: 5 })
  .toFile("assets/img/dendritic-bg.webp");

await sharp("src/img/original/figma-reference.png")
  .extract({ left: 276, top: 15640, width: 504, height: 260 })
  .webp({ quality: 90, effort: 5 })
  .toFile("assets/img/point-01.webp");

await sharp("src/img/original/figma-reference.png")
  .extract({ left: 0, top: 16455, width: 505, height: 260 })
  .webp({ quality: 90, effort: 5 })
  .toFile("assets/img/point-02.webp");

await sharp("src/img/original/figma-reference.png")
  .extract({ left: 276, top: 16624, width: 504, height: 260 })
  .webp({ quality: 90, effort: 5 })
  .toFile("assets/img/point-03.webp");

console.log("created assets/img/kv-logo.webp");
console.log("created assets/img/kv-doctor.webp");
console.log("created assets/img/kv-heart.webp");
console.log("created assets/img/kv-record.webp");
console.log("created assets/img/profile-doctor.webp");
console.log("created assets/img/youtube-thumb.webp");
console.log("created assets/img/worry-01.webp");
console.log("created assets/img/worry-02.webp");
console.log("created assets/img/worry-03.webp");
console.log("created assets/img/review-doctor.webp");
console.log("created assets/img/feature-01.webp");
console.log("created assets/img/feature-02.webp");
console.log("created assets/img/feature-03.webp");
console.log("created assets/img/dendritic-bg.webp");
console.log("created assets/img/point-01.webp");
console.log("created assets/img/point-02.webp");
console.log("created assets/img/point-03.webp");
