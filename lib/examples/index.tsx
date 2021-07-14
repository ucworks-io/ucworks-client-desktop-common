/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from "@emotion/react";
import ReactDOM from "react-dom";
import { Button } from "../components";
import { palettes } from "../theme";

const baseTheme = {
  headerHeight: "100px",
  palettes,
};

export type BaseTheme = typeof baseTheme;

const App = () => {
  return (
    <Button colorTheme="deepViolet">
      취소소소소소소소소소소소소소소소소소소소소소
    </Button>
  );
};

ReactDOM.render(
  <ThemeProvider theme={baseTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
