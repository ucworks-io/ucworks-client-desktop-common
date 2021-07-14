/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";
import React, { DetailedHTMLProps, useMemo } from "react";

type Props = {
  colorTheme?: "none" | "violet" | "deepViolet";
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button(props: Props = { colorTheme: "none" }) {
  const { colorTheme, ...buttonProps } = props;
  const theme = useTheme();

  const themeCss = useMemo(() => {
    switch (colorTheme) {
      case "none": {
        return css`
          border-color: ${theme.palettes.grey._1100};
          background-color: white;
          &:hover {
            background-color: ${theme.palettes.grey._1100};
          }
          &:active {
            background-color: ${theme.palettes.grey._1100};
          }
        `;
      }
      case "violet": {
        return css`
          border-color: ${theme.palettes.primary._500};
          background-color: white;
          &:hover {
            background-color: ${theme.palettes.violet._300};
          }
          &:active {
            background-color: ${theme.palettes.violet._400};
          }
        `;
      }
      case "deepViolet": {
        return css`
          border-color: ${theme.palettes.primary._500};
          background-color: ${theme.palettes.primary._500};
          color: white;
          &:hover {
            border-color: ${theme.palettes.primary._400};
            background-color: ${theme.palettes.primary._400};
            color: white;
          }
          &:active {
            border-color: ${theme.palettes.primary._600};
            background-color: ${theme.palettes.primary._600};
            color: white;
          }
        `;
      }
    }
  }, [colorTheme]);

  return (
    <button
      {...buttonProps}
      css={[
        themeCss,
        css`
          padding: 8px 12px;
          appearance: none;
          border: 1px solid;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;

          &:disabled {
            background-color: ${theme.palettes.grey._200};
            border-color: ${theme.palettes.grey._600};
            color: ${theme.palettes.grey._600};
            cursor: not-allowed;
          }
        `,
      ]}
    ></button>
  );
}
