/** @jsxImportSource @emotion/react */

import ReactDOM from "react-dom";
import { UcThemeProvider } from "../src";
import App from "./app";
import "../index.css";

ReactDOM.render(
  <UcThemeProvider>
    <App />
  </UcThemeProvider>,
  document.getElementById("root")
);
