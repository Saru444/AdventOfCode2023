const fs = require("fs");

fs.readFile(
  "/Users/leichen/Projects/AdventOfCode2023/Day-12/input.txt",
  "utf8",
  (err, data) => {
    if (err) throw err;

    const inputData = data.split("\n");
    // console.log(inputData);
    //-----------part-1----------------

    const display = (input) => {
      const [spring, damageParts] = input.split(" "); //"" need to har space between
      const damaged = spring.split(".").filter((item) => item.length > 0);

      const partsLen = damageParts.split(",").map((item) => Number(item));
      if (damaged.length !== partsLen.length) {
        return false;
      }

      const error = damaged.filter((item) => item.length !== partsLen.shift());
      return error.length === 0;
    };

    const position = (item, index, pos) => {
      return item.substring(0, index) + pos + item.substring(index + 1);
    };

    const play = (input) => {
      const step = input.indexOf("?");
      if (step === -1) {
        return display(input) ? 1 : 0;
      }
      const optionOne = position(input, step, "."); //"," is wrong
      const optionTwo = position(input, step, "#");

      return play(optionOne) + play(optionTwo);
    };

    const total = inputData
      .map((item) => play(item))
      .reduce((a, b) => a + b, 0);

    console.log("total:", total);
  }
);
