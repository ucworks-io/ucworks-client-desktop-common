/** @jsxImportSource @emotion/react */
import { css, Interpolation, Theme } from "@emotion/react";
import { useTheme } from "@emotion/react";
import React, { DetailedHTMLProps, useEffect, useMemo } from "react";

type Props = {
  colorTheme?: "none" | "violet" | "primary" | "secondary";
  override?: Interpolation<Theme>;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button({
  colorTheme = "none",
  override,
  ...rest
}: Props) {
  const theme = useTheme();

  const themeCss = useMemo(() => {
    switch (colorTheme) {
      case "none": {
        return css`
          border-color: ${theme.palettes.grey._1100};
          background-color: white;
          color: ${theme.palettes.grey._1100};
          &:hover {
            background-color: ${theme.palettes.grey._100};
          }
          &:active {
            background-color: ${theme.palettes.grey._200};
          }
        `;
      }
      case "violet": {
        return css`
          border-color: ${theme.palettes.primary._500};
          background-color: white;
          color: ${theme.palettes.primary._500};
          &:hover {
            background-color: ${theme.palettes.violet._300};
          }
          &:active {
            background-color: ${theme.palettes.violet._400};
          }
        `;
      }
      case "primary": {
        return css`
          border-color: ${theme.palettes.primary._500};
          background-color: ${theme.palettes.primary._500};
          color: white;
          &:hover {
            border-color: ${theme.palettes.primary._400};
            background-color: ${theme.palettes.primary._400};
          }
          &:active {
            border-color: ${theme.palettes.primary._600};
            background-color: ${theme.palettes.primary._600};
          }
        `;
      }
      case "secondary": {
        return css`
          border-color: ${theme.palettes.secondary._500};
          background-color: ${theme.palettes.secondary._500};
          color: white;
          &:hover {
            border-color: ${theme.palettes.secondary._400};
            background-color: ${theme.palettes.secondary._400};
          }
          &:active {
            border-color: ${theme.palettes.secondary._600};
            background-color: ${theme.palettes.secondary._600};
          }
        `;
      }
    }
  }, [colorTheme]);

  return (
    <button
      {...rest}
      css={[
        themeCss,
        css`
          padding: 8px 12px;
          appearance: none;
          border: 1px solid !important;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
          transition: ease-in-out background-color 0.25s;

          &:disabled {
            background-color: ${theme.palettes.grey._200};
            border-color: ${theme.palettes.grey._600};
            color: ${theme.palettes.grey._600};
            cursor: not-allowed;
          }

          outline: 0 !important;
        `,
        override,
      ]}
    ></button>
  );
}
