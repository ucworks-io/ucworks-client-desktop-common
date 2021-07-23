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
} from "../src";
import "../index.css";

const App = () => {
  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(
      yup.object({
        input: yup.string().required("fuck you hahaha"),
      })
    ),
  });
  const { Modal, isOpen, closeModal, openModal } = useModal();
  const [current, Tab] = useTab({
    rows: ["foo", "bar"],
    initialRow: 1,
  });

  const columns = [
    {
      Header: "foo",
      accessor: "foo",
      minWidth: 100,
    },
    { Header: "bar", accessor: "bar", minWidth: 100 },
  ];

  const data = [
    { foo: "foo1", bar: "bar1" },
    { foo: "foo2", bar: "bar2" },
  ];
  return (
    <>
      <Button colorTheme="primary">foo</Button>
      <Table
        selectable
        columns={columns}
        data={data}
        onSelect={(row) => {
          console.log(row);
        }}
      />
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <Input type="text" {...register("input")} errors={formState.errors} />
        <Checkbox label="foo" {...register("checkbox")} />
        <Button type="submit">submit</Button>
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
