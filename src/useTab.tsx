/** @jsxImportSource @emotion/react */
import { css, Interpolation, Theme } from "@emotion/react";
import React, { useState } from "react";
import { theme } from "./uc-theme-provider";

interface Props {
  initialRow?: number;
  rows: string[];
}

interface TabProps {
  override?: Interpolation<Theme>;
}

export default function useTab({
  rows,
  initialRow = 0,
}: Props): [number, (props: TabProps) => JSX.Element] {
  const [current, setCurrent] = useState<number>(initialRow);

  const handleTabClick = (idx: number) => {
    setCurrent(idx);
  };

  const Tab = ({ override }: TabProps) => {
    return (
      <ul
        css={[
          css`
            display: flex;
          `,
          override,
        ]}
      >
        {rows.map((row, idx) => (
          <li
            onClick={() => {
              handleTabClick(idx);
            }}
            css={css`
              position: relative;
              padding: 12px 37px;
              font-size: 1rem;
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
