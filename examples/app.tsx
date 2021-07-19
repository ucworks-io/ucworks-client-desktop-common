/** @jsxImportSource @emotion/react */
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { css, ThemeProvider } from "@emotion/react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { Button, Checkbox, Form, Input, useModal, useTab, UcThemeProvider, Table } from "../src";

const App = () => {
  const methods = useForm({
    resolver: yupResolver(
      yup.object({
        foo: yup.string().required("fuck you hahaha"),
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
    </>
  );
};

ReactDOM.render(
  <UcThemeProvider>
    <App />
    </UcThemeProvider>,
  document.getElementById("root")
);
