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
  { title: "test1", children: [{ title: "test1-1" }] },
  { title: "test2", children: [{ title: "test2-1" }] },
  { title: "test3", children: [{ title: "test3-1" }] },
  { title: "test4", children: [{ title: "test4-1" }] },
  { title: "test5", children: [{ title: "test5-1" }] },
  { title: "test6", children: [{ title: "test6-1" }] },
  { title: "test7", children: [{ title: "test7-1" }] },
  { title: "test8", children: [{ title: "test8-1" }] },
];

const App = () => {
  const [selectedNode, Select] = useSelect({
    items: itemsMock,
    initialNode: itemsMock[7].children[0],
  });
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    console.log(selectedNode);
  }, [selectedNode]);
  const submit = (data: any) => {
    console.log(`data: `, data);
  };
  return (
    <>
      <Select />
      <form onSubmit={handleSubmit(submit)}>
        <Radio label="딸기" {...register("food")} value="strawberry" />
        <Radio label="바나나" {...register("food")} value="banana" />
        <input type="submit" />
      </form>
    </>
  );
};

ReactDOM.render(
  <UcThemeProvider>
    <App />
  </UcThemeProvider>,
  document.getElementById("root")
);
