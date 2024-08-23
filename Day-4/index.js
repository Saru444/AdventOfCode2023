const { log } = require("console");
const fs = require("fs");

fs.readFile(
  "/Users/leichen/Projects/AdventOfCode2023/Day-4/input.txt",
  "utf8",
  (err, data) => {
    if (err) throw err;

    const inputData = data.split("\n");
    // let winningNumberList = [];

    //-----------part-1----------------
    const sum = inputData.reduce((a, b) => {
      const [firstList, secondList] = b.split(/[:][ ]+/)[1].split(/[ ][|][ ]+/);
      const leftNumbers = firstList.split(/[ ]+/);
      const rightNumbers = secondList.split(/[ ]+/);

      const winningNumberList = leftNumbers.filter((item) =>
        rightNumbers.includes(item)
      );

      const numberListLength = winningNumberList.length;

      if (numberListLength > 0) {
        return a + Math.pow(2, numberListLength - 1);
      } else {
        return a;
      }

      //   console.log(leftNumbers);
      //   console.log(rightNumbers);
      //   console.log(winningNumberList);
      //   console.log(numberListLength);
      //   console.log(points);
    }, 0);
    // console.log(sum);
    // console.log(totalNumberList);

    //-----------part-2----------------

    const copyCardList = [];
    const copyCardLength = inputData.length;
    // console.log(copyCardLength);
    for (let i = 0; i < copyCardLength; i++) {
      copyCardList.push(1);
    }
    // console.log(copyCardList);

    inputData.forEach((item) => {
      const [card, numbers] = item.split(/[:][ ]+/);
      const cardNumber = Number(card.split(/[ ]+/)[1]);

      const [firstList, secondList] = numbers.split(/[ ][|][ ]+/);
      const leftNumbers = firstList.split(/[ ]+/);
      const rightNumbers = secondList.split(/[ ]+/);

      const winningNumberList = leftNumbers.filter((item) =>
        rightNumbers.includes(item)
      ).length;
      console.log(winningNumberList);

      for (let i = 0; i < winningNumberList; i++) {
        if (cardNumber + i < copyCardList.length) {
          copyCardList[cardNumber + i] =
            copyCardList[cardNumber + i] + copyCardList[cardNumber - 1];
        }
      }
    });
    console.log(copyCardList.reduce((a, b) => a + b, 0));

    // console.log(totalCards);
    // console.log(copyCardList.reduce((a, b) => a + b, 0));
  }
);
