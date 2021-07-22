/** @jsxImportSource @emotion/react */
import { css, Interpolation, Theme } from "@emotion/react";
import { UseFormRegisterReturn, UseFormReturn } from "react-hook-form";
import cx from "classnames";
import {theme} from './uc-theme-provider';

type Props = {
  type: "text" | "password" | "number";
  override?: Interpolation<Theme>;
  errors?: UseFormReturn["formState"]["errors"];
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & Partial<UseFormRegisterReturn>;

export default function Input({
  type,
  override,
  errors,
  ...rest
}: Props) {
  return (
    <>
      <input
        type={type}
        {...rest}
        css={[
          css`
            display: inline-block;
            width: 320px;
            padding: 12px 16px;
            background-color: white;
            font-size: 0.93rem;
            border: 1px solid;
            border-radius: 4px;
            outline: none;
            transition: ease-in-out border-color 0.25s;

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
          override,
        ]}
      />
      {errors && rest.name && errors[rest.name] && (
        <label
          css={css`
            display: block;
            font-size: 1rem;
            color: ${theme.palettes.systemRed._500};
            margin-top: 8px;
          `}
        >
          {errors[rest.name].message}
        </label>
      )}
    </>
  );
}
