const fs = require("fs");

fs.readFile(
  "/Users/leichen/Projects/AdventOfCode2023/Day-6/input.txt",
  "utf8",
  (err, data) => {
    if (err) throw err;

    const inputData = data.split("\n");
    //-----------part-1----------------

    const [time, distance] = inputData.map((item) => item.split(/[ ][: ][ ]+/));

    console.log([time, distance]);
    let newTimeList = [];
    newTimeList = time.splice(1).map((x) => Number(x));

    // console.log("newTimeList", newTimeList);

    let newDistanceList = [];
    newDistanceList = distance.splice(1).map((x) => Number(x));
    // console.log("newDistanceList", newDistanceList);

    let race = [];
    let raceDistance = 0;

    newTimeList.forEach((item) => {
      for (let i = 0; i < item; i++) {
        raceDistance = i * item - i * i;
        race.push(raceDistance);
      }
    });
    // console.log("race", race);

    let output = [];
    let chunk = [];
    for (const item of race) {
      if (item === 0) {
        if (chunk.length > 0) output = [...output, chunk];

        chunk = [];
      }

      chunk.push(item);
    }
    output = [...output, chunk];
    console.log("output", output);

    // const wins = [[], [], [], []];

    const wins = output.map((i) => []);
    for (let i = 0; i < output.length; i++) {
      for (let j = 0; j < output[i].length; j++) {
        if (output[i][j] > newDistanceList[i]) {
          wins[i].push(output[i][j]);
        }
      }
    }
    console.log("wins", wins);

    const sum = wins.map((winsList) => winsList.length).reduce((a, b) => a * b);
    console.log("sum", sum);
    //inte dynamisk lösning!!
    // const [time, distance] = inputData.map((item) =>
    //   item.split(/[ ][: ][ ]+/)[4].split(/[ ]+/)
    // );
    // console.log([time, distance]);

    // let race = [];
    // let raceDistance = 0;
    // let winList = [];

    // for (let i = 0; i < time; i++) {
    //   raceDistance = i * time - i * i;
    //   race.push(raceDistance);
    // }

    // for (let j = 0; j < race.length; j++) {
    //   if (race[j] > distance) {
    //     winList.push(race[j]);
    //   }
    // }
    // console.log(winList.length);

    //-----------part-2----------------

    const part2Time = newTimeList.join("");
    const part2Distance = newDistanceList.join("");
    // console.log("part2Distance", part2Distance);

    let part2Race = [];
    let winsList = [];
    for (let i = 0; i < part2Time; i++) {
      part2Race.push(i * part2Time - i * i);
    }

    for (let j = 0; j < part2Race.length; j++) {
      if (part2Race[j] > part2Distance) {
        winsList.push(part2Race[j]);
      }
    }
    console.log(winsList.length);
  }
);
