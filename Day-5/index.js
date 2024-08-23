const fs = require("fs");

fs.readFile(
  "/Users/leichen/Projects/AdventOfCode2023/Day-5/input.txt",
  "utf8",
  (err, data) => {
    if (err) throw err;

    const inputData = data.split("\n\n");
    // console.log(inputData);

    //-----------part-1----------------
    //          50                        98                      2
    //          52                        50                      48

    //destination range start     source range start         range length

    const seed = inputData.shift().split(":")[1].trim();

    console.log(seed);

    const route = (item) => {
      return item.map((x) => {
        const [map, range] = x.split("map:\n");
        const [from, to] = map.split("-to-");
        const ranges = range
          .split("\n")
          .map((item) => {
            const [to, from, length] = item
              .trim()
              .split("")
              .map((x) => Number(x));
            return {
              rangeStart: from,
              rangeEnd: from + length - 1,
              diff: to - from,
            };
          })
          .sort((a, b) => a.rangeStart - b.rangeStart);
        return { from, to, ranges };
      });
    };
    // console.log(route(inputData));

    const findLocation = (map, [start, end]) => {
      if (map === "location") {
        return [start, end];
      }
      const location = route(inputData).filter((item) => item.from === map)[0];
      const locationRanges = location.ranges.filter(
        (item) => item.rangeStart <= end && item.rangeEnd >= start
      );

      const rangeList = [];

      for (let i = start; i <= end; ) {
        if (locationRanges.length === 0) {
          rangeList.push([i, end]);
        }

        const match = locationRanges.find(
          (item) => item.rangeStart <= i && item.rangeEnd >= i
        );
        if (match !== undefined) {
          const { round, diff } = locationRanges.shift();
        }
      }
    };

    //-----------part-2----------------
  }
);
