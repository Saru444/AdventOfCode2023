const fs = require("fs");

fs.readFile(
  "/Users/leichen/Projects/AdventOfCode2023/Day-15/input.txt",
  "utf8",
  (err, data) => {
    if (err) throw err;

    const inputData = data.split(",");
    // console.log(inputData);
    //-----------part-1----------------

    const solve = (input) =>
      input.split("").reduce((a, b) => ((a + b.charCodeAt(0)) * 17) % 256, 0);
    // console.log(solve("abc"));

    const total = inputData
      .map((item) => solve(item))
      .reduce((a, b) => a + b, 0);
    // console.log("total: ", total);

    //-----------part-2----------------

    const boxes = Array(256)
      .fill(0)
      .map((i) => []);

    const dash = (box, symbol) => {
      box = box.filter((item) => item.symbol !== symbol);
    };

    const equals = (box, symbol, len) => {
      if (box.find((item) => item.symbol === symbol)) {
        return box.map((item) =>
          item.symbol === symbol ? { symbol, len } : item
        );
      } else {
        return [...box, { symbol, len }];
      }
    };
  }
);
