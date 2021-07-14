/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import React, { useState } from "react";

interface Props {
  initialRow?: number;
  rows: string[];
}

export default function useTab({
  rows,
  initialRow = 0,
}: Props): [number, () => JSX.Element] {
  const [current, setCurrent] = useState<number>(initialRow);
  const theme = useTheme();
  const handleTabClick = (idx: number) => {
    setCurrent(idx);
  };

  const Tab = () => {
    return (
      <ul
        css={css`
          display: flex;
        `}
      >
        {rows.map((row, idx) => (
          <li
            onClick={() => {
              handleTabClick(idx);
            }}
            css={css`
              position: relative;
              padding: 12px 37px;
              font-size: 1.14rem;
              color: ${idx === current
                ? theme.palettes.primary._500
                : theme.palettes.grey._800};
              cursor: pointer;

              &:after {
                content: "";
                position: absolute;
                background-color: ${idx === current
                  ? theme.palettes.primary._500
                  : theme.palettes.grey._800};
                width: 100%;
                height: ${idx === current ? "4px" : "1px"};
                opacity: ${idx === current ? 1 : 0.56};
                bottom: 0;
                left: 0;
              }
            `}
          >
            {row}
          </li>
        ))}
      </ul>
    );
  };

  return [current, Tab];
}
