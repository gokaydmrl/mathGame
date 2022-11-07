interface Stats {
  status: string;
  trueOnes: number;
  falseOnes: number;
}
const Result = ({ stat }: { stat: Stats }) => {
  return (
    <div>
      <p style={{ marginTop: "1rem" }}> status: {stat.status} </p>
      <p>number of correct ones: {stat.trueOnes} </p>
      <p>number of wrong ones: {stat.falseOnes} </p>
    </div>
  );
};

export default Result;
