/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from "@emotion/react";
import ReactDOM from "react-dom";
import { palettes } from "../theme";

const baseTheme = {
  headerHeight: "100px",
  palettes,
};

export type BaseTheme = typeof baseTheme;

const App = () => {
  return (
    <button
      css={(props) => css`
        background-color: ${props.palettes.blue._500};
      `}
    >
      click me!!
    </button>
  );
};

ReactDOM.render(
  <ThemeProvider theme={baseTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
