const fs = require("fs");
const data = fs.readFileSync("2024day03input.txt", "utf8");

function mulUncorrupted() {
  const mulRegex = /mul\(\d+,\d+\)/g;
  const mulArray = data.match(mulRegex);
  let mulTotal = 0;
  for (const calculation of mulArray) {
    const comma = calculation.indexOf(",");
    const firstNum = calculation.slice(4, comma);
    const secondNum = calculation.slice(comma + 1, -1);
    mulTotal += firstNum * secondNum;
  }
  console.log(mulTotal);
  return mulTotal;
}

function mulDoDontUncorrupted() {
  doDontData = "do()" + data + "don't()";
  doDontRegex = /do\(\).*?don't\(\)/gs;
  const mulRegex = /mul\(\d+,\d+\)/g;
  const doDontArray = doDontData.match(doDontRegex);
  const mulArray = doDontArray.map((string) => string.match(mulRegex)).flat();
  let mulTotal = 0;
  for (const calculation of mulArray) {
    const comma = calculation.indexOf(",");
    const firstNum = calculation.slice(4, comma);
    const secondNum = calculation.slice(comma + 1, -1);
    mulTotal += firstNum * secondNum;
  }
  console.log(mulTotal);
  return mulTotal;
}

mulUncorrupted();
mulDoDontUncorrupted();
