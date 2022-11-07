import "../App.css";
import { Stats } from "../types";

const Result = ({ stat }: { stat: Stats }) => {
  return (
    <div
      style={{
        // marginTop: "1rem",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "left",
        display: "grid",
      }}
    >
      <p> status: {stat.status} </p>
      <p>number of correct ones: {stat.trueOnes} </p>
      <p>number of wrong ones: {stat.falseOnes} </p>
    </div>
  );
};

export default Result;
