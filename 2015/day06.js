const fs = require("fs/promises");

async function switchLights(inputFile) {
  // read in the file and convert to array
  const input = await fs.readFile(inputFile, "utf-8");
  const switchArray = input.split(/\n/);
  if (switchArray[switchArray.length - 1] === "") {
    switchArray.pop();
  }
  // set up initial light grid
  const lightGrid = [];
  for (i = 0; i <= 999; i++) {
    lightGrid[i] = new Array(1000).fill(0);
  }
  // go line by line through input array
  for (i = 0; i < switchArray.length; i++) {
    instruction = switchArray[i].split(/[,\s]/);
    if (instruction[0] === "turn") {
      instruction.shift();
    }
    let xStartString, xEndString, yStartString, yEndString, command, through;
    [command, xStartString, yStartString, through, xEndString, yEndString] =
      instruction;
    //converttoNumber
    let xStart = Number(xStartString);
    let xEnd = Number(xEndString);
    let yStart = Number(yStartString);
    let yEnd = Number(yEndString);
    // apply instruction to grid
    for (x = xStart; x <= xEnd; x++) {
      for (y = yStart; y <= yEnd; y++) {
        if (command === "on") {
          lightGrid[x][y] = 1;
        } else if (command === "off") {
          lightGrid[x][y] = 0;
        } else if (command === "toggle") {
          lightGrid[x][y] = Math.abs(lightGrid[x][y] - 1);
        } else {
          console.log("error! ", i);
        }
      }
    }
  }
  const lightCount = lightGrid.flat().reduce((a, b) => a + b, 0);
  console.log(lightCount);
  return lightCount;
}

async function betterSwitchLights(inputFile) {
  // read in the file and convert to array
  const input = await fs.readFile(inputFile, "utf-8");
  const switchArray = input.split(/\n/);
  if (switchArray[switchArray.length - 1] === "") {
    switchArray.pop();
  }
  // set up initial light grid
  const lightGrid = [];
  for (i = 0; i <= 999; i++) {
    lightGrid[i] = new Array(1000).fill(0);
  }
  // go line by line through input array
  for (i = 0; i < switchArray.length; i++) {
    instruction = switchArray[i].split(/[,\s]/);
    if (instruction[0] === "turn") {
      instruction.shift();
    }
    let xStartString, xEndString, yStartString, yEndString, command, through;
    [command, xStartString, yStartString, through, xEndString, yEndString] =
      instruction;
    //converttoNumber
    let xStart = Number(xStartString);
    let xEnd = Number(xEndString);
    let yStart = Number(yStartString);
    let yEnd = Number(yEndString);
    // apply instruction to grid
    for (x = xStart; x <= xEnd; x++) {
      for (y = yStart; y <= yEnd; y++) {
        if (command === "on") {
          lightGrid[x][y]++;
        } else if (command === "off") {
          if (lightGrid[x][y] > 0) {
            lightGrid[x][y]--;
          }
        } else if (command === "toggle") {
          lightGrid[x][y] += 2;
        } else {
          console.log("error! ", i);
        }
      }
    }
  }
  const lightCount = lightGrid.flat().reduce((a, b) => a + b, 0);
  console.log(lightCount);
  return lightCount;
}

betterSwitchLights("day6input.txt");
