/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from "@emotion/react";
import ReactDOM from "react-dom";
import { Button } from "../components";
import { useModal } from "../hooks";
import useTab from "../hooks/useTab";
import { palettes } from "../theme";

const baseTheme = {
  headerHeight: "100px",
  palettes,
};

export type BaseTheme = typeof baseTheme;

const App = () => {
  const [current, Tab] = useTab({
    rows: ["foo", "bar"],
    initialRow: 1,
  });
  return (
    <>
      <Tab />
      {current === 0 ? (
        <Button colorTheme="primary">foo</Button>
      ) : (
        <span>bar</span>
      )}
    </>
  );
};

ReactDOM.render(
  <ThemeProvider theme={baseTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
