/** @jsxImportSource @emotion/react */
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { css, ThemeProvider } from "@emotion/react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import {
  Button,
  Checkbox,
  Input,
  useModal,
  useTab,
  UcThemeProvider,
  Table,
  useSelect,
} from "../src";
import "../index.css";

const App = () => {
  const [selectedItem, Select] = useSelect({ items: ["foo", "bar"] });
  const [selectedItem1, Select1] = useSelect({ items: ["foo1", "bar1"] });
  return (
    <>
      <Select />
      <Select1 />
    </>
  );
};

ReactDOM.render(
  <UcThemeProvider>
    <App />
  </UcThemeProvider>,
  document.getElementById("root")
);
