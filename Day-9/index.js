const fs = require("fs");

fs.readFile(
  "/Users/leichen/Projects/AdventOfCode2023/Day-9/inputOne.txt",
  "utf8",
  (err, data) => {
    if (err) throw err;

    const inputData = data
      .split("\n")
      .map((item) => item.split(" ").map((number) => Number(number)));
    // console.log(inputData);

    // const testData = data
    //   .split("\n")
    //   .map((item) => item.split(" ").map((number) => parseInt(number)));
    // console.log(testData);

    const line = (input) => {
      if (input.length === 1) {
        return [0];
      }
      return input
        .map((item, index) => {
          if (index < input.length - 1) {
            return input[index + 1] - item;
          }
          return "";
        })
        .slice(0, -1);
    };

    //-----------part-1----------------

    const process = inputData.reduce((a, b) => {
      let value = [];
      let currentValue = b;

      while (currentValue.some((item) => item != 0)) {
        value.push(currentValue[currentValue.length - 1]);
        currentValue = line(currentValue);
      }

      return (
        a +
        value.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        )
      );
    }, 0);
    console.log("process:", process);

    // const diffResult = (input) => {
    //   let result = [];
    //   for (let i = 0; i < input.length - 1; i++) {
    //     const diff = input[i + 1] - input[i];
    //     result.push(diff);
    //   }
    //   return result;
    // };

    // console.log("res:", diffResult(testData[0]));

    // const diffList = (input) => {
    //   const result = [input];
    //   while (input.find((item) => item != 0)) {
    //     const diff = diffResult(input);
    //     result.push(diff);
    //     input = diff;
    //   }
    //   return result;
    // };
    // console.log("list:", diffList(testData[0]));

    // const finalPro = (process) => (input) => {
    //   const diff = diffList(input);
    //   console.log("diff:", diff.reverse().slice(1));
    //   return diff
    //     .reverse()
    //     .slice(1)
    //     .reduce((a, b) => process(a, b), 0);
    // };

    // console.log("final:", finalPro(processOne)(testData));

    // const totalValue = inputData
    //   .map((item) => finalPro(processOne)(item))
    //   .reduce((a, b) => a + b, 0);

    //-----------part-2----------------

    const processTwo = inputData.reduce((a, b) => {
      let firstValue = [];
      let currentValue = b;
      while (currentValue.some((item) => item != 0)) {
        firstValue.unshift(currentValue[0]);
        currentValue = line(currentValue);
      }
      console.log("firstValue:", firstValue);

      return (
        a +
        firstValue.reduce(
          (accumulator, currentValue) => currentValue - accumulator,
          0
        )
      );
    }, 0);
    console.log("processTwo:", processTwo);
  }
);
