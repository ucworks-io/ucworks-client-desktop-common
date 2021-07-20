/** @jsxImportSource @emotion/react */
import { css, Interpolation, Theme, useTheme } from "@emotion/react";
import { UseFormRegisterReturn, UseFormReturn } from "react-hook-form";
import CheckedSVG from "../icons/icon-checkbox-checked.svg";
import UnCheckedSVG from "../icons/icon-checkbox-unchecked.svg";

type Props = {
  label: string;
  override?: Interpolation<Theme>;
} & Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "type"
> & Partial<UseFormRegisterReturn>;

export default function Checkbox({
  label,
  override,
  ...rest
}: Props) {
  const theme = useTheme();
  return (
    <main
      css={[
        css`
          display: flex;
          align-items: baseline;
        `,
        override,
      ]}
    >
      <input
        type="checkbox"
        {...rest}
        css={css`
          width: 14px;
          height: 14px;
          margin: 0;
          appearance: none;
          outline: none;
          background-size: 100%;
          background-image: url(${UnCheckedSVG});
          &:checked {
            background-image: url(${CheckedSVG});
          }
        `}
      />
      <label
        css={css`
          font-size: 1.14rem;
          margin-left: 8px;
          color: ${theme.palettes.grey._1100};
        `}
      >
        {label}
      </label>
    </main>
  );
}
