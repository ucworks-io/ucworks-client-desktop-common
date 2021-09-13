/** @jsxImportSource @emotion/react */

import ReactDOM from "react-dom";
import { UcThemeProvider } from "../src";
import "../index.css";
import ExampleUseSelect from "./ExampleUseSelect";
import ExampleUseModal from "./ExampleUseModal";

ReactDOM.render(
  <UcThemeProvider>
    <ExampleUseSelect />
    <ExampleUseModal />
  </UcThemeProvider>,
  document.getElementById("root")
);
