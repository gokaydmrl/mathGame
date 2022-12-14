import ruleList from "../Rules/ruleList";
import "../App.css";
const Rules: () => JSX.Element = () => {
  return (
    <>
      <h3>homeWork</h3>{" "}
      {ruleList.map((r, idx) => {
        return (
          <ul
            key={idx}
            style={{
              alignItems: "center",
              justifyContent: "center",
              textAlign: "left",
            }}
          >
            <li key={idx}>{r} </li>
          </ul>
        );
      })}{" "}
    </>
  );
};
export default Rules;
