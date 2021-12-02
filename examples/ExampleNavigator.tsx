import { useHistory } from "react-router-dom";

export default function ExampleNavigator() {
  const history = useHistory();
  return (
    <>
      <button
        onClick={() => {
          history.push("/form");
        }}
      >
        go to form
      </button>
      <button
        onClick={() => {
          history.push("/use-modal");
        }}
      >
        go to useModal
      </button>
      <button
        onClick={() => {
          history.push("/use-select");
        }}
      >
        go to useSelect
      </button>
    </>
  );
}
