const fs = require("fs");

fs.readFile(
  "/Users/leichen/Projects/AdventOfCode2023/Day-11/input.txt",
  "utf8",
  (err, data) => {
    if (err) throw err;

    const inputData = data.split("\n").map((item) => item.split(""));
    console.log(inputData);
    //-----------part-1----------------

    const emptyRows = inputData.reduce((item, row, index) => {
      if (row.every((space) => space === ".")) {
        item.push(index);
      }
      return item;
    }, []);

    const emptyColumns = inputData[0].reduce((item, _, index) => {
      if (inputData.every((row) => row[index] === ".")) {
        item.push(index);
      }
      return item;
    }, []);

    const hashtag = inputData.reduce((item, row, index) => {
      row.forEach((column, columnIndex) => {
        if (column === "#") {
          item.push([columnIndex, index]);
        }
      });
      return item;
    }, []);

    const hashtagPart = hashtag.reduce((paris, tag, index) => {
      for (let i = index + 1; i < hashtag.length; i++) {
        paris.push([tag, hashtag[i]]);
      }
      return paris;
    }, []);

    const res = hashtagPart.reduce((a, [[x1, y1], [x2, y2]]) => {
      const stepsColumn = emptyColumns.filter((item) => {
        (item > x1 && item < x2) || (item > x2 && item < x1);
      });
      const stepsRow = emptyRows.filter((item) => {
        (item > y1 && item < y2) || (item > y2 && item < y1);
      });
      return (
        a +
        stepsColumn.length +
        stepsRow.length +
        Math.abs(x1 - x2) +
        Math.abs(y1 - y2)
      );
    }, 0);

    console.log("res", res);

    //-----------part-2----------------
  }
);
