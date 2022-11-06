import lines from "./lines";
import calculate from "./calculate";
const calculateSum = (line: Array<number>, sum: number) => {
  const patterns = lines();
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
      console.log(`sıra ${patterns[x]} başarılı`);
      quals.trueOnes++;
      if (quals.trueOnes === 8) {
        quals.status = "hepsi doğru";
      }
    } else {
      console.log("nö");
      quals.status = "yanlışlar var";
      quals.falseOnes++;
    }
  }
  return quals;
};

export default calculateSum;
