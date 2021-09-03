/** @jsxImportSource @emotion/react */

import ReactDOM from "react-dom";
import { UcThemeProvider } from "../src";
import "../index.css";
import ExampleUseSelect from "./ExampleUseSelect";

ReactDOM.render(
  <UcThemeProvider>
    <ExampleUseSelect />
  </UcThemeProvider>,
  document.getElementById("root")
);
