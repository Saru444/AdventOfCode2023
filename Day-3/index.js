const fs = require("fs");

fs.readFile(
  "/Users/leichen/Projects/AdventOfCode2023/Day-3/input.txt",
  "utf8",
  (err, data) => {
    if (err) throw err;

    //-----------part-1----------------
    const line = data.indexOf("\n") + 1;
    console.log(line);

    const symbolRegex = /[^0-9.\n]/g;
    const isMatch = [...data.matchAll(symbolRegex)].map((item) => item.index);
    const numberRegex = /[0-9]+/g;
    const numberMatch = [...data.matchAll(numberRegex)].map(
      (item) => item.index
    );
    console.log(numberMatch);
  }
);
