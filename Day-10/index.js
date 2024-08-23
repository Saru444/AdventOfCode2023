const fs = require("fs");

fs.readFile(
  "/Users/leichen/Projects/AdventOfCode2023/Day-10/input.txt",
  "utf8",
  (err, data) => {
    if (err) throw err;

    //| is a vertical pipe connecting north and south.
    // is a horizontal pipe connecting east and west.
    //L is a 90-degree bend connecting north and east.
    //J is a 90-degree bend connecting north and west.
    //7 is a 90-degree bend connecting south and west.
    //F is a 90-degree bend connecting south and east.
    //. is ground; there is no pipe in this tile.
    //S is the starting position of the animal; there is a pipe on this tile, but your sketch doesn't show what shape the pipe has.
    const inputData = data.toString().trim().split("\n");
    console.log(inputData);
    //-----------part-1----------------
  }
);
