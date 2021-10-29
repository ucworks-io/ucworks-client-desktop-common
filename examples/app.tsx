/** @jsxImportSource @emotion/react */

import ReactDOM from "react-dom";
import { UcThemeProvider } from "../src";
import "../index.css";
import ExampleUseSelect from "./ExampleUseSelect";
import ExampleUseModal from "./ExampleUseModal";
import ExampleRadio from "./ExampleRadio";

ReactDOM.render(
  <UcThemeProvider>
    <ExampleUseSelect />
    <ExampleUseModal />
    <ExampleRadio />
  </UcThemeProvider>,
  document.getElementById("root")
);
