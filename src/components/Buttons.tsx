import "../App.css";

const Buttons = ({
  isStarted,
  start,
  reset,
}: {
  isStarted: boolean;
  start: () => void;
  reset: () => void;
}) => {
  return (
    <div>
      {isStarted === false ? (
        <button className="startBtn" onClick={start}>
          START
        </button>
      ) : (
        <button className="resetBtn" onClick={reset}>
          RESET
        </button>
      )}
    </div>
  );
};

export default Buttons;
