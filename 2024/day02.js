const fs = require("fs");
const data = fs.readFileSync("2024day02input.txt", "utf8");
const lines = data.split(/\n/);
if (lines[lines.length - 1] === "") {
  lines.pop();
}

function checkSafeLevels() {
  let safeCount = 0;
  for (let i = 0; i < lines.length; i++) {
    const report = lines[i].split(" ");
    let safeReport = true;
    for (let j = 0; j < report.length - 1; j++) {
      if (
        Math.abs(report[j + 1] - report[j]) > 3 ||
        Math.abs(report[j + 1] - report[j]) === 0
      ) {
        safeReport = false;
      }
    }
    for (let j = 0; j < report.length - 2; j++) {
      if (
        (report[j + 1] - report[j] > 0 && report[j + 2] - report[j + 1] < 0) ||
        (report[j + 1] - report[j] < 0 && report[j + 2] - report[j + 1] > 0)
      ) {
        safeReport = false;
      }
    }
    if (safeReport) {
      safeCount++;
    }
  }

  console.log(safeCount);
  return safeCount;
}

function checkDampenedLevels() {
  let safeCount = 0;
  for (let i = 0; i < lines.length; i++) {
    const fullReport = lines[i].split(" ");
    //construct array of original plus all combinations with one missing,
    const dampenedReports = [fullReport];
    for (let h = 0; h < fullReport.length; h++) {
      const splicedReport = fullReport.toSpliced(h, 1);
      dampenedReports.push(splicedReport);
    }
    //then iterate over k. safe = false, any one hit makes true.
    let dampenedReport = false;
    for (let k = 0; k < dampenedReports.length; k++) {
      let report = dampenedReports[k];
      let safeReport = true;
      for (let j = 0; j < report.length - 1; j++) {
        if (
          Math.abs(report[j + 1] - report[j]) > 3 ||
          Math.abs(report[j + 1] - report[j]) === 0
        ) {
          safeReport = false;
        }
      }
      for (let j = 0; j < report.length - 2; j++) {
        if (
          (report[j + 1] - report[j] > 0 &&
            report[j + 2] - report[j + 1] < 0) ||
          (report[j + 1] - report[j] < 0 && report[j + 2] - report[j + 1] > 0)
        ) {
          safeReport = false;
        }
      }
      if (safeReport) {
        dampenedReport = true;
      }
    }
    if (dampenedReport) {
      safeCount++;
    }
  }

  console.log(safeCount);
  return safeCount;
}

checkSafeLevels();
checkDampenedLevels();
