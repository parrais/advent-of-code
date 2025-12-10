import run from "aocrunner";

const parseInput = (rawInput) => {
  const lines = rawInput.split("\n");
  return lines;
};

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  let dial = 50;
  let password = 0;
  for (const turn of input) {
    const clicks = Number(turn.substring(1));
    turn[0] === "L" ? (dial -= clicks) : (dial += clicks);
    if (dial % 100 === 0) {
      password++;
    }
  }
  return password.toString();
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  let dial = 50;
  let password = 0;
  for (const turn of input) {
    const clicks = Number(turn.substring(1));
    const startDial = dial;
    turn[0] === "L" ? (dial -= clicks) : (dial += clicks);
    password += Math.abs(Math.floor(dial / 100) - Math.floor(startDial / 100));
    if (startDial % 100 === 0 && turn[0] === "L") {
      password--;
    }
    if (dial % 100 === 0 && turn[0] === "L") {
      password++;
    }
  }
  return password.toString();
};

run({
  part1: {
    tests: [
      {
        input: `
          L68
          L30
          R48
          L5
          R60
          L55
          L1
          L99
          R14
          L82
        `,
        expected: "3",
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
          L68
          L30
          R48
          L5
          R60
          L55
          L1
          L99
          R14
          L82
        `,
        expected: "6",
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  // onlyTests: true,
});
