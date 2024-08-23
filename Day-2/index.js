const fs = require("fs");

fs.readFile(
  "/Users/leichen/Projects/AdventOfCode2023/Day-2/input.txt",
  "utf8",
  (err, data) => {
    if (err) throw err;

    const inputData = data.split("\n");
    // console.log(inputData);

    //-----------part-1----------------

    const getMaxColorfulCubes = (sets, color) => {
      const regex = new RegExp(`\\d+(\\.\\d)* ${color}+`, "g");
      const maxNumber = Math.max(
        ...sets.match(regex).map((item) => item.split(" ")[0])
      );
      console.log(...sets.match(regex).map((item) => item.split(" ")));

      return maxNumber;
    };

    //the bag contained only 12 red cubes, 13 green cubes, and 14 blue cubes
    const total = inputData.reduce((a, b) => {
      const [number, sets] = b.split(": ");
      const id = Number(number.split(" ")[1]);
      // console.log(number);
      // console.log(sets);

      // console.log(id);
      const isPossible =
        getMaxColorfulCubes(sets, "green") <= 13 &&
        getMaxColorfulCubes(sets, "red") <= 12 &&
        getMaxColorfulCubes(sets, "blue") <= 14;

      return isPossible ? a + id : a;
    }, 0);
    console.log(total);

    //test
    // const total =
    //   "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red".split(
    //     ":"
    //   );
    // console.log(total);
    // const id = Number(total[0].split(" ")[1]);
    // console.log(id);

    //-----------part-2----------------

    const sum = inputData.reduce((a, b) => {
      const maxRedCubes = getMaxColorfulCubes(b, "red");
      const maxGreenCubes = getMaxColorfulCubes(b, "green");
      const maxBlueCubes = getMaxColorfulCubes(b, "blue");
      return a + maxRedCubes * maxGreenCubes * maxBlueCubes;
    }, 0);
    console.log(sum);
  }
);
