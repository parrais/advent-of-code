import run from "aocrunner";

const parseInput = (rawInput) => {
  const lines = rawInput.split(",");
  const ranges = [];
  for (const line of lines) {
    const rawRange = line.split("-");
    const numberRange = [];
    for (const limit of rawRange) {
      numberRange.push(Number(limit));
    }
    ranges.push(numberRange);
  }
  return ranges;
};

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  let invalidTotal = 0;
  for (const range of input) {
    for (let i = range[0]; i <= range[1]; i++) {
      const idString = i.toString();
      const idLength = idString.length;
      if (
        idLength % 2 === 0 &&
        idString.slice(0, idLength / 2) === idString.slice(idLength / 2)
      ) {
        invalidTotal += i;
      }
    }
  }
  return invalidTotal.toString();
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  let invalidTotal = 0;
  for (const range of input) {
    for (let i = range[0]; i <= range[1]; i++) {
      const idString = i.toString();
      const idLength = idString.length;
      let isIdValid = true;
      for (let j = 1; j <= idLength / 2; j++) {
        if (idLength % j === 0) {
          const splitIdString = idString.match(new RegExp(".{" + j + "}", "g"));
          let splitIdStringCheck = 0;
          for (const subString of splitIdString) {
            if (subString === splitIdString[0]) {
              splitIdStringCheck++;
            }
          }
          if (splitIdStringCheck === splitIdString.length) {
            isIdValid = false;
          }
        }
      }
      if (isIdValid === false) {
        invalidTotal += i;
      }
    }
  }
  return invalidTotal.toString();
};

run({
  part1: {
    tests: [
      {
        input: `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`,
        expected: "1227775554",
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`,
        expected: "4174379265",
      },
    ],
    solution: part2,
  },
  trimTestInputs: false,
  // onlyTests: true,
});
