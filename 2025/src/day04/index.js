import run from "aocrunner";

const parseInput = (rawInput) => {
  const lines = rawInput.split("\n");
  return lines;
};

const part1 = (rawInput) => {
  const input = parseInput(rawInput);

  // Add a buffer row/column at both ends to make checking at edges easier
  for (let i = 0; i < input.length; i++) {
    input[i] = "." + input[i] + ".";
  }
  const empty = ".";
  const bufferLine = empty.repeat(input[0].length);
  input.unshift(bufferLine);
  input.push(bufferLine);
  let accessCount = 0;

  for (let i = 1; i < input.length - 1; i++) {
    for (let j = 1; j < input[i].length - 1; j++) {
      if (input[i][j] === "@") {
        let surroundCount = 0;
        let surround = [
          input[i - 1][j - 1],
          input[i - 1][j],
          input[i - 1][j + 1],
          input[i][j - 1],
          input[i][j + 1],
          input[i + 1][j - 1],
          input[i + 1][j],
          input[i + 1][j + 1],
        ];

        for (const cell of surround) {
          if (cell === "@") {
            surroundCount++;
          }
        }
        if (surroundCount < 4) {
          accessCount++;
        }
      }
    }
  }
  return accessCount.toString();
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);

  return;
};

run({
  part1: {
    tests: [
      {
        input: `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`,
        expected: "13",
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
