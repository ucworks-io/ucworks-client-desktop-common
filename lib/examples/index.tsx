/** @jsxImportSource @emotion/react */
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { css, ThemeProvider } from "@emotion/react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { Button, Checkbox } from "../components";
import Form from "../components/form";
import Input from "../components/input";
import { useModal } from "../hooks";
import useTab from "../hooks/useTab";
import { palettes } from "../theme";
import Table from "../components/table";

const baseTheme = {
  headerHeight: "100px",
  palettes,
};

export type BaseTheme = typeof baseTheme;

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
  <ThemeProvider theme={baseTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
