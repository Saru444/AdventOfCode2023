const fs = require("fs");

fs.readFile(
  "/Users/leichen/Projects/AdventOfCode2023/Day-1/input.txt",
  "utf8",
  (err, data) => {
    if (err) throw err;

    const inputData = data.toString().trim().split("\n");
    //-----------part-1----------------

    //idea-1
    const findDigit = (char) => {
      return /\d/.test(char);
    };
    let sum = 0;

    for (const item of inputData) {
      let firstDigit, lastDigit;
      for (const char of item) {
        if (findDigit(char)) {
          if (!firstDigit) {
            firstDigit = char;
          }
          lastDigit = char;
        }
      }
      const number = Number(`${firstDigit}${lastDigit}`);
      sum += number;
      console.log(sum);
    }

    //idea-2
    // const numberInLine = inputData.map((item) =>
    //   item.split("").filter((char) => /\d/.test(char))
    // );

    // const numberList = [];
    // for (const char of numberInLine) {
    //   const firstDigit = char[0];
    //   const lastDigit = char[char.length - 1];
    //   const number = Number(`${firstDigit}${lastDigit}`);
    //   numberList.push(number);
    // }

    // let sum = 0;
    // for (const item of numberList) {
    //   sum += item;
    // }
    // console.log(sum);

    //-----------part-2----------------

    const textNumber = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];

    let total = 0;
    for (const item of inputData) {
      let digitList = [];
      for (let i = 0; i < item.length; i++) {
        const char = item[i];
        if (findDigit(char)) {
          digitList.push(char);
        }
        const line = item.substring(i);
        for (let j = 0; j < textNumber.length; j++) {
          if (line.startsWith(textNumber[j])) {
            digitList.push(j + 1);
          }
        }
      }
      const rightNumber = Number(
        `${digitList[0]}${digitList[digitList.length - 1]}`
      );
      total += rightNumber;
      console.log(total);
    }
  }
);
