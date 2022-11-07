import "../App.css";

const Form = ({
  handleSubmit,
  giveCell,
  isStarted,
}: {
  handleSubmit: (e: React.FormEvent) => void;
  giveCell: (n: number) => JSX.Element;
  isStarted: boolean;
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {giveCell(0)}
        {giveCell(1)}
        {giveCell(2)}
      </div>
      <div>
        {giveCell(3)}
        {giveCell(4)}
        {giveCell(5)}
      </div>
      <div>
        {giveCell(6)}
        {giveCell(7)}
        {giveCell(8)}
      </div>
      {isStarted && <button className="submitBtn">SUBMIT</button>}{" "}
    </form>
  );
};

export default Form;
