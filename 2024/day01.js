const fs = require("fs");
const data = fs.readFileSync("2024day01input.txt", "utf8");
const lines = data.split(/\n/);
if (lines[lines.length - 1] === "") {
  lines.pop();
}
const leftList = lines
  .map((line) => Number(line.slice(0, 5)))
  .sort((a, b) => a - b);
const rightList = lines
  .map((line) => Number(line.slice(-5)))
  .sort((a, b) => a - b);

function getDistance() {
  let totalDistance = 0;
  for (let i = 0; i < leftList.length; i++) {
    totalDistance += Math.abs(leftList[i] - rightList[i]);
  }
  console.log(totalDistance);
  return totalDistance;
}

function getSimilarity() {
  let totalSimilarity = 0;
  for (let i = 0; i < leftList.length; i++) {
    let matches = 0;
    for (let j = 0; j < rightList.length; j++) {
      if (leftList[i] === rightList[j]) {
        matches++;
      }
    }
    totalSimilarity += matches * leftList[i];
  }
  console.log(totalSimilarity);
  return totalSimilarity;
}

getDistance();
getSimilarity();
