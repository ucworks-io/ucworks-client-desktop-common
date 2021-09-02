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

function DepartmentNode({ department }: { department: any }) {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        & > div {
          display: flex;
          align-items: center;
          width: 100%;
          height: 100%;
        }
      `}
    >
      <div>{department.dept_name}</div>
    </div>
  );
}

const App = () => {
  const [selectedNode, set, Select] = useSelect({
    items: [
      {
        title: () => <DepartmentNode department={{ dept_name: "haha" }} />,
        key: "0",
        children: [
          {
            title: () => <DepartmentNode department={{ dept_name: "haha" }} />,
            key: "0-1",
          },
        ],
      },
    ],
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
