const fs = require("fs/promises");

async function wrapPresents(inputFile) {
  const input = await fs.readFile(inputFile, "utf-8");
  const presentArray = input.split(/\n/);
  let paperTotal = 0;
  for (i = 0; i < presentArray.length; i++) {
    const singlePresent = presentArray[i].split("x");
    const l = Number(singlePresent[0]);
    const w = Number(singlePresent[1]);
    const h = Number(singlePresent[2]);
    const extra = (l * w * h) / Math.max(l, w, h);
    const paper = 2 * l * w + 2 * w * h + 2 * h * l + extra;
    paperTotal += paper;
  }
  console.log(paperTotal);
  return paperTotal;
}

async function ribbonPresents(inputFile) {
  const input = await fs.readFile(inputFile, "utf-8");
  const presentArray = input.split(/\n/);
  let ribbonTotal = 0;
  for (i = 0; i < presentArray.length; i++) {
    const singlePresent = presentArray[i].split("x");
    const l = Number(singlePresent[0]);
    const w = Number(singlePresent[1]);
    const h = Number(singlePresent[2]);
    const perimeter = 2 * (l + w + h - Math.max(l, w, h));
    const ribbon = l * w * h + perimeter;
    ribbonTotal += ribbon;
  }
  console.log(ribbonTotal);
  return ribbonTotal;
}

ribbonPresents("day2input.txt");
