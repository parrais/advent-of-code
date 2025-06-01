const fs = require("fs");
const data = fs.readFileSync("2024day05input.txt", "utf8");

function checkManuals() {
  const lines = data.split(/\n/);
  const ruleRegex = /\d+\|\d+/;
  const rulesArray = [];
  const updatesArray = [];
  for (line of lines) {
    if (ruleRegex.test(line)) {
      rulesArray.push(line);
    } else if (line === "") {
    } else {
      updatesArray.push(line);
    }
  }
  let middlePageTotal = 0;
  for (update of updatesArray) {
    let includeUpdate = true;
    const pages = update.split(",");
    for (i = 0; i < pages.length - 1; i++) {
      for (j = i + 1; j < pages.length; j++) {
        for (rule of rulesArray) {
          if (rule === pages[j] + "|" + pages[i]) {
            includeUpdate = false;
          }
        }
      }
    }
    if (includeUpdate) {
      middlePageTotal += Number(pages[(pages.length - 1) / 2]);
    }
  }
  console.log(middlePageTotal);
  return middlePageTotal;
}

checkManuals();
