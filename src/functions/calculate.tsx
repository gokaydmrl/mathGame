const calculate = (line: Array<number>): number =>
  line.reduce((prev: number, curr: number) => prev + curr, 0);
export default calculate;
