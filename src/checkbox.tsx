/** @jsxImportSource @emotion/react */
import { css, Interpolation, Theme } from "@emotion/react";
import { useMemo } from "react";
import { v4 } from "uuid";
import { UseFormReturn } from "react-hook-form";
import CheckedSvg from "../icons/icon-checkbox-checked.svg";
import UnCheckedSvg from "../icons/icon-checkbox-unchecked.svg";
import { theme } from "./uc-theme-provider";

type Props = {
  label?: string;
  override?: Interpolation<Theme>;
  register?: UseFormReturn["register"];
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Checkbox: React.FC<Props> = ({
  label,
  override,
  register,
  name,
  ...rest
}) => {
  const id = useMemo(() => v4(), []);
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
        id={id}
        css={css`
          width: 14px;
          height: 14px;
          cursor: pointer;
          appearance: none;
          outline: none;
          background-size: 100%;
          background-image: url(${UnCheckedSvg});
          background-repeat: no-repeat;
          &:checked {
            background-image: url(${CheckedSvg});
          }
        `}
        {...rest}
        {...(register ? register(name || "") : {})}
      />
      {label ? (
        <label
          htmlFor={id}
          css={css`
            color: ${theme.palettes.grey._1100};
            font-size: 1rem;
            padding-left: 8px;
            cursor: pointer;
          `}
        >
          {label}
        </label>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Checkbox;
