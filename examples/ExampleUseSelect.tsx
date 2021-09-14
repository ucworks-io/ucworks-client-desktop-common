/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useSelect } from "../src";
import { ReactComponent as SvgIconCheckboxChecked } from "../icons/icon-checkbox-checked.svg";

export default function ExampleUseSelect() {
  const [selectedNode, set, Select] = useSelect({
    items: [
      {
        title: () => (
          <div
            css={css`
              display: flex;
              align-items: center;
              padding: 10px 0;
            `}
          >
            <SvgIconCheckboxChecked
              css={css`
                margin-right: 10px;
                transform: scale(1.5);
              `}
            />
            <span>최상위</span>
          </div>
        ),
        key: "0",
        children: [
          {
            title: "0-1",
            key: "0-1",
            isLeaf: false,
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
