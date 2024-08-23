const fs = require("fs");

fs.readFile(
  "/Users/leichen/Projects/AdventOfCode2023/Day-7/input.txt",
  "utf8",
  (err, data) => {
    if (err) throw err;

    const inputData = data.split("\n").map((item) => item.split(" "));
    console.log(inputData);

    //A, K, Q, J, T, 9, 8, 7, 6, 5, 4, 3, or 2
    const cardLabels = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "T",
      "J",
      "Q",
      "K",
      "A",
    ];

    // inputData.forEach((item) => {
    //   const card = item[0];
    //   const compare = Array.from(new Set(card)).map((x) => {
    //     return { x, amount: card.split(x).length - 1 };
    //   });

    //   console.log(compare);
    // });

    const cardScore = (index) => {};

    //-----------part-2----------------
  }
);
