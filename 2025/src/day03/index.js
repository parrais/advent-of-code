import run from "aocrunner";

const parseInput = (rawInput) => {
  const lines = rawInput.split("\n");
  return lines;
};

const findMaxIndex = (stringOfNums) => {
  for (let i = 9; i >= 1; i--) {
    for (let j = 0; j < stringOfNums.length; j++) {
      if (i === Number(stringOfNums[j])) {
        return j;
      }
    }
  }
  return 0;
};

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  let totalJoltage = 0;
  for (const bank of input) {
    const TensIndex = findMaxIndex(bank.slice(0, bank.length - 1));
    const bankStub = bank.slice(TensIndex + 1);
    const OnesIndex = findMaxIndex(bankStub);
    totalJoltage += Number(bank[TensIndex] + bankStub[OnesIndex]);
  }
  return totalJoltage.toString();
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  let totalJoltage = 0;
  for (const bank of input) {
    const digitValues = [];
    let currentIndex = -1;
    for (let i = 0; i < 12; i++) {
      currentIndex =
        findMaxIndex(bank.slice(currentIndex + 1, bank.length + i - 11)) +
        currentIndex +
        1;
      digitValues[i] = bank[currentIndex];
    }
    totalJoltage += Number(digitValues.join(""));
  }
  return totalJoltage.toString();
};

run({
  part1: {
    tests: [
      {
        input: `
          987654321111111
          811111111111119
          234234234234278
          818181911112111
        `,
        expected: "357",
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
          987654321111111
          811111111111119
          234234234234278
          818181911112111
        `,
        expected: "3121910778619",
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  // onlyTests: true,
});
