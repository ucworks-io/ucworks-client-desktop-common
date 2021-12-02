/** @jsxImportSource @emotion/react */
import { forwardRef } from "react";
import { css, Interpolation, Theme } from "@emotion/react";
import { UseFormRegisterReturn, UseFormReturn } from "react-hook-form";
import { theme } from "./uc-theme-provider";

type Props = {
  override?: Interpolation<Theme>;
  register?: UseFormReturn["register"];
  errors?: UseFormReturn["formState"]["errors"];
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input: React.FC<Props> = ({
  type,
  name,
  override,
  errors,
  register,
  ...props
}) => {
  return (
    <div
      css={[
        css`
          width: 100%;
          display: flex;
          flex-direction: column;
        `,
        override,
      ]}
    >
      <input
        type={type}
        css={[
          css`
            display: inline-block;
            width: 320px;
            padding: 12px 16px;
            background-color: white;
            border: 1px solid;
            border-radius: 4px;
            outline: none;
            transition: ease-in-out border-color 0.25s;
            font-size: 1rem;
            &::placeholder {
              color: ${theme.palettes.grey._500};
              border-color: ${theme.palettes.grey._500};
            }

            &:focus {
              color: ${theme.palettes.grey._1100};
              border-color: ${theme.palettes.primary._500};
            }

            &:not(:focus) {
              color: ${theme.palettes.grey._1100};
              border-color: ${theme.palettes.grey._500};
            }

            &:disabled {
              color: ${theme.palettes.grey._500};
              border-color: ${theme.palettes.grey._500};
            }
          `,
        ]}
        {...(register ? register(name || "") : {})}
        {...props}
      />
      {errors && name && errors[name] && (
        <label
          css={css`
            font-size: 1rem;
            display: block;
            color: ${theme.palettes.systemRed._500};
            margin-top: 8px;
          `}
        >
          {errors[name].message}
        </label>
      )}
    </div>
  );
};

export default Input;
