/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useSelect } from "../src";

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

export default function ExampleUseSelect() {
  const [selectedNode, set, Select] = useSelect({
    items: [
      {
        title: () => <DepartmentNode department={{ dept_name: "0" }} />,
        key: "0",
        children: [
          {
            title: "0-1",
            key: "0-1",
          },
        ],
      },
    ],
    initialKey: "0-1",
  });
  return (
    <>
      <Select />
    </>
  );
}
