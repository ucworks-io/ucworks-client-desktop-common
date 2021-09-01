/** @jsxImportSource @emotion/react */
import { css, Interpolation, Theme } from "@emotion/react";
import { UseFormRegisterReturn, UseFormReturn } from "react-hook-form";
import CheckedSVG from "../icons/icon-checkbox-checked.svg";
import UnCheckedSVG from "../icons/icon-checkbox-unchecked.svg";
import { theme } from "./uc-theme-provider";

type Props = {
  label: string;
  override?: Interpolation<Theme>;
} & Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "type"
> &
  Partial<UseFormRegisterReturn>;

export default function Checkbox({ label, override, ...rest }: Props) {
  return (
    <div
      css={[
        css`
          display: flex;
          align-items: center;
          user-select: none;
        `,
        override,
      ]}
    >
      <input
        type="checkbox"
        id="checkbox"
        {...rest}
        css={css`
          width: 14px;
          height: 14px;
          cursor: pointer;
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
        htmlFor="checkbox"
        css={css`
          font-size: 1.14rem;
          padding-left: 8px;
          color: ${theme.palettes.grey._1100};
          cursor: pointer;
        `}
      >
        {label}
      </label>
    </div>
  );
}
