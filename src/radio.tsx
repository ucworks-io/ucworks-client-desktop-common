/** @jsxImportSource @emotion/react */
import { css, Interpolation, Theme } from "@emotion/react";
import { UseFormRegisterReturn, UseFormReturn } from "react-hook-form";
import CheckedSVG from "../icons/icon-checkbox-checked.svg";
import UnCheckedSVG from "../icons/icon-checkbox-unchecked.svg";
import { theme } from "./uc-theme-provider";
import { forwardRef } from "react";

type Props = {
  label: string;
  value: any;
  override?: Interpolation<Theme>;
} & Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "type"
> &
  Partial<UseFormRegisterReturn>;

export default forwardRef<HTMLInputElement, Props>(function Radio(
  { label, override, ...rest }: Props,
  ref
) {
  return (
    <div
      css={[
        css`
          display: flex;
          align-items: center;
        `,
        override,
      ]}
    >
      <input
        type="radio"
        {...rest}
        ref={ref}
        css={css`
          /* width: 14px;
          height: 14px;
          margin: 3px 3px 3px 4px; */
          /* appearance: none; */
          /* outline: none;
          background-size: 100%; */
          /* background-image: url(${UnCheckedSVG});
          &:checked {
            background-image: url(${CheckedSVG});
          } */
          background-color: #ffffff;
          border: 1px solid #c8cace;
          width: 14px;
          height: 14px;
          border-radius: 14px;
          appearance: none;
          outline: none;
          margin: 3px 3px 3px 4px;
          box-sizing: border-box;
          position: relative;
          &:checked {
            border: 1px solid ${theme.palettes.primary._500};
          }

          &:checked:after {
            width: 8px;
            height: 8px;
            border-radius: 8px;

            top: 2px;
            left: 2px;
            position: absolute;
            background-color: ${theme.palettes.primary._500};
            content: "";
            display: inline-block;
            visibility: visible;
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
    </div>
  );
});
