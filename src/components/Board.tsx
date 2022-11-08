import "../App.css";
const Board = ({
  onChange,
  val,
  prevented,
  n,
}: {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  val: number;
  prevented: number[];
  n: number;
}) => {
  return (
    <input
      style={{
        //  color: prevented.includes(n) ? "red" : "black",
        fontWeight: prevented.includes(n) ? "bold" : "",
        justifyContent: "center",
        textAlign: "center",
        fontSize: "1rem",
        margin: "0.5px",
      }}
      onChange={onChange}
      placeholder="..."
      value={val}
    />
  );
};
export default Board;
