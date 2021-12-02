/** @jsxImportSource @emotion/react */
import { css, Interpolation, Theme } from "@emotion/react";
import { UseFormRegisterReturn, UseFormReturn } from "react-hook-form";
import CheckedSVG from "../icons/icon-checkbox-checked.svg";
import UnCheckedSVG from "../icons/icon-checkbox-unchecked.svg";
import { theme } from "./uc-theme-provider";
import { forwardRef } from "react";

type Props = {
  label: string;
  register?: UseFormReturn["register"];
  override?: Interpolation<Theme>;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Radio: React.FC<Props> = ({
  label,
  register,
  override,
  name,
  ...rest
}) => {
  return (
    <div
      css={[
        css`
          display: inline-block;
        `,
        override,
      ]}
    >
      <label
        css={css`
          cursor: pointer;
          font-size: 1rem;
          display: flex;
          align-items: center;
          color: ${theme.palettes.grey._1100};
        `}
      >
        <input
          type="radio"
          css={css`
            cursor: pointer;
            background-color: #ffffff;
            border: 1px solid #c8cace;
            width: 14px;
            height: 14px;
            border-radius: 14px;
            appearance: none;
            outline: none;
            margin: 3px 11px 3px 4px;
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
          {...(register ? register(name || "") : {})}
          {...rest}
        />
        {label}
      </label>
    </div>
  );
};

export default Radio;
