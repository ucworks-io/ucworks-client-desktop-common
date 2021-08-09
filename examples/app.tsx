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
  Radio,
} from "../src";
import "../index.css";
import { useEffect } from "react";

const itemsMock = [
  { title: "test1" },
  { title: "test2", children: [{ title: "test2-1" }] },
];

const App = () => {
  const [selectedItem, Select] = useSelect({
    items: itemsMock,
    initialItem: itemsMock[1].children[0],
  });

  return (
    <>
      <Select />
    </>
  );
};

ReactDOM.render(
  <UcThemeProvider>
    <App />
  </UcThemeProvider>,
  document.getElementById("root")
);
