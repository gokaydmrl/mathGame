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
        color: prevented.includes(n) ? "red" : "black",
        height: "5rem",
        width: "5rem",
        justifyContent: "center",
        textAlign: "center",
        fontSize: "1rem",
        margin: "-1px",
      }}
      onChange={onChange}
      placeholder="..."
      value={val}
    />
  );
};
export default Board;
