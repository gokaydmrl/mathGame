import lines from "./lines";
import calculate from "./calculate";
const calculateSum = (line: Array<number>, sum: number) => {
  const patterns: number[][] = lines();
  let quals = {
    status: "",
    trueOnes: 0,
    falseOnes: 0,
  };

  // const calculate = (line) => line.reduce((prev, curr) => prev + curr, 0);

  for (var x = 0; x < patterns.length; x++) {
    //   const sum = calculate([lines[0], lines[1], lines[2]]);
    console.log("sum", sum);
    const [a, b, c] = patterns[x];
    // console.log("a", a, "b", b, "c", c);

    const newArray = [line[a], line[b], line[c]];
    if (calculate(newArray) === sum) {
      console.log(`line ${patterns[x]} is correct`);
      quals.trueOnes++;
      if (quals.trueOnes === 8) {
        quals.status = "all of them are true";
      }
    } else {
      console.log("no");
      quals.status = "some of them are wrong";
      quals.falseOnes++;
    }
  }
  return quals;
};

export default calculateSum;
