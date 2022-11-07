import React, { useState } from "react";
import Board from "./Board";
import lines from "../functions/lines";
import calculateSum from "../functions/calculateSum";
import calculate from "../functions/calculate";
import Rules from "./Rules";
import Form from "./Form";
import Result from "./Result";
export default function Game() {
  type NumInAr = number[];
  interface Stats {
    status: string;
    trueOnes: number;
    falseOnes: number;
  }
  type inputChanging = React.ChangeEvent<HTMLInputElement>;

  const [ar, setAr] = useState<number[]>(Array(9).fill(""));
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [prevented, setPrevented] = useState<NumInAr>([]);
  const [stat, setStat] = useState<Stats>({
    status: "",
    trueOnes: 0,
    falseOnes: 0,
  });
  const newAr = [...ar];
  const patterns: Array<NumInAr> = lines();
  // console.log("lines", lines);

  const start = () => {
    setIsStarted(true);
    const [a, b, c] = patterns[Math.floor(Math.random() * patterns.length)];
    console.log("a", a, "b", b, "c", c);
    setPrevented([a, b, c]);

    newAr[a] = Number(Math.floor(Math.random() * 10 + 2));
    newAr[b] = Number(Math.floor(Math.random() * 10 + 4));
    newAr[c] = Number(Math.floor(Math.random() * 10 + 6));

    setAr(newAr);
  };

  const handleChange = (e: inputChanging, n: number) => {
    if (prevented.includes(n)) {
      return;
    } else {
      newAr[n] = Number(e.target.value);
      setAr(newAr);
    }
  };

  const giveCell = (n: number): JSX.Element => {
    return (
      <Board
        onChange={(e: inputChanging) => handleChange(e, n)}
        val={newAr[n]}
        prevented={prevented}
        n={n}
      />
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitted(true);
    const sum = calculate([
      newAr[prevented[0]],
      newAr[prevented[1]],
      newAr[prevented[2]],
    ]);

    const status = calculateSum(newAr, sum);
    setStat(status);
  };

  //

  //
  const reset = () => {
    setAr(Array(9).fill(""));
    setIsStarted(false);
    setSubmitted(false);
    setStat({
      status: "",
      trueOnes: 0,
      falseOnes: 0,
    });
  };
  return (
    <div className="App">
      <Rules />
      {isStarted === false ? (
        <button className="startBtn" onClick={start}>
          START
        </button>
      ) : (
        <button className="resetBtn" onClick={reset}>
          RESET
        </button>
      )}
      <Form
        handleSubmit={handleSubmit}
        giveCell={giveCell}
        isStarted={isStarted}
      />

      {submitted && <Result stat={stat} />}
    </div>
  );
}
