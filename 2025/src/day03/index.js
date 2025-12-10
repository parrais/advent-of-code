import run from "aocrunner";

const parseInput = (rawInput) => {
  const lines = rawInput.split("\n");
  return lines;
};

const findMaxIndex = (stringOfNums) => {
  for (let j = 9; j >= 1; j--) {
    for (let i = 0; i < stringOfNums.length; i++) {
      if (j === Number(stringOfNums[i])) {
        return i;
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
  onlyTests: true,
});
