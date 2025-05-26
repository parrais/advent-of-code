const fs = require("fs/promises");

async function checkList(inputFile) {
  const input = await fs.readFile(inputFile, "utf-8");
  const stringArray = input.split(/\n/);
  stringArray.pop();
  let niceCount = 0;
  const vowelRegex = /[aeiou].*[aeiou].*[aeiou]/;
  const doubleRegex = /(\w)\1/;
  const abRegex = /ab/;
  const cdRegex = /cd/;
  const pqRegex = /pq/;
  const xyRegex = /xy/;
  console.log(stringArray);
  for (i = 0; i < stringArray.length; i++) {
    if (
      vowelRegex.test(stringArray[i]) &&
      doubleRegex.test(stringArray[i]) &&
      !abRegex.test(stringArray[i]) &&
      !cdRegex.test(stringArray[i]) &&
      !pqRegex.test(stringArray[i]) &&
      !xyRegex.test(stringArray[i])
    ) {
      niceCount++;
    }
  }
  console.log(niceCount);
  return niceCount;
}

async function betterCheck(inputFile) {
  const input = await fs.readFile(inputFile, "utf-8");
  const stringArray = input.split(/\n/);
  stringArray.pop();
  let niceCount = 0;
  const repeatRegex = /(\w)\w\1/;
  const pairRegex = /(\w\w)\w*\1/;
  console.log(stringArray);
  for (i = 0; i < stringArray.length; i++) {
    if (repeatRegex.test(stringArray[i]) && pairRegex.test(stringArray[i])) {
      niceCount++;
    }
  }
  console.log(niceCount);
  return niceCount;
}

betterCheck("day5input.txt");
