const { log } = require("console");
const fs = require("fs");

fs.readFile(
  "/Users/leichen/Projects/AdventOfCode2023/Day-8/input.txt",
  "utf8",
  (err, data) => {
    if (err) throw err;

    // let [direction, network] = data.split("\n\n");

    // console.log([direction, network]);

    // direction = direction.split("").map((item) => (item === "R" ? 1 : 0));

    // const elements = network.split("\n");

    // const startNode = elements.map((item) => item.split(" = ")[0]);

    // // console.log("startNode", startNode);

    // network = elements.map((item) => {
    //   const leftElement = item.split(" = ")[1];
    //   const [left, right] = leftElement.replace(/[()]/g, "").split(", ");
    //   return [startNode.indexOf(left), startNode.indexOf(right)];
    // });

    // let startPosition = startNode.indexOf("AAA");
    // const endPosition = startNode.indexOf("ZZZ");

    // let steps = 0;
    // while (startPosition !== endPosition) {
    //   startPosition =
    //     network[startPosition][direction[steps % direction.length]];

    //   steps++;
    // }
    //console.log("steps", steps);

    //-----------part-2----------------
    // const start = startNode.filter((item) => item.endsWith("A"));
    // const goalPosition = startNode.filter((item) => item.endsWith("Z"));

    // const startIndex = [];
    // start.forEach((item) => {
    //   startIndex.push(startNode.indexOf(item));
    // });

    // console.log("startIndex", startIndex);

    const gcd = (a, b) => {
      if (a < b) {
        const tmp = b;
        b = a;
        a = tmp;
      }
      const t = a % b;
      return t ? gcd(b, t) : b;
    };

    // const lcm = () => {
    //   return (a * b) / gcd(a, b);
    // };

    const lcm = (list) => {
      let n = 1;
      for (let i = 0; i < list.length; i++) {
        n = (list[i] / gcd(list[i], n)) * n;
      }
      return n;
    };

    // const map = network
    //   .split("\n")
    //   .map((line) => line.replaceAll(/[\(\)]/g, "").split(" = "));

    // const partTwoMap = map.reduce((a, b) => {
    //   a[b[0]] = b[1].split(", ");
    //   return a;
    // }, {});
    // console.log("partTwoMap", partTwoMap);

    // const start = startNode.filter((item) => item.endsWith("A"));

    //undefined??
    // const play = (end) => (position) => {
    //   let steps = 0;
    //   for (steps; !end(position); steps++) {
    //     const directions = direction.charAt(steps % direction.length);
    //     const move = partTwoMap[position];
    //     position = move[directions === "L" ? 0 : 1];
    //   }
    //   return steps;
    // };
    // console.log(
    //   "play",
    //   play((position) => position.endsWith("Z"))
    // );

    // const goalPosition = play((position) => position.endsWith("Z"));
    // log("goalPosition", goalPosition);

    // const multipleSteps = start.map((position) => goalPosition(position));

    // const totalSteps = multipleSteps.reduce((a, b) => lcm(a, b));

    // console.log("totalSteps", totalSteps);

    // const Lcm = (list) => {
    //   list.sort((a, b) => a - b);

    //   let multiple = list[list.length - 1];
    //   while (true) {
    //     if (list.every((item) => multiple % item === 0)) {
    //       return multiple;
    //     }
    //     multiple += list[list.length - 1];
    //   }
    // };

    // let start = startNode
    //   .map((item, str) => (item.endsWith("A") ? str : ""))
    //   .filter(String);
    // let totalSteps = [];
    // console.log("start", start);

    // const result = start.forEach((current, index) => {
    //   let currentPosition = current;
    //   let goalPosition = false;
    //   while (!goalPosition) {
    //     currentPosition =
    //       network[currentPosition][direction[index % direction.length]];
    //     goalPosition = startNode[currentPosition].endsWith("Z");
    //     totalSteps[index]++;
    //   }
    //   return lcm(totalSteps);
    // });
    // console.log("result", result);

    const inputData = data.split("\r\n");
    // console.log("inputData", inputData);

    const nodes = {};
    const currentNodes = [];

    for (let i = 2; i < inputData.length; i++) {
      const lineSplit = inputData[i].split("=").map((e) => e.trim());
      const nodeName = lineSplit[0];

      if (nodeName[2] === "A") {
        currentNodes.push({ node: nodeName, endStep: 0, ended: false });
      }

      const [left, right] = lineSplit[1]
        .substring(1, lineSplit[1].length - 1)
        .split(",")
        .map((e) => e.trim());
      nodes[nodeName] = { left, right };
    }

    const moves = inputData[0];
    let currentMove = 0;
    let steps = 0;

    while (!currentNodes.every((e) => e.ended)) {
      for (let i = 0; i < currentNodes.length; i++) {
        if (currentNodes[i].ended) {
          continue;
        }

        currentNodes[i].node =
          moves[currentMove] === "R"
            ? nodes[currentNodes[i].node].right
            : nodes[currentNodes[i].node].left;

        if (currentNodes[i].node.endsWith("Z")) {
          currentNodes[i].ended = true;
          currentNodes[i].endStep = steps + 1;
        }
      }

      currentMove = currentMove + 1 === moves.length ? 0 : currentMove + 1;
      steps++;
    }

    const endSteps = currentNodes.map((e) => e.endStep);
    console.log("lcm", lcm(endSteps));
  }
);
