/** @jsxImportSource @emotion/react */
import { css, Interpolation, Theme, useTheme } from "@emotion/react";
import { UseFormReturn } from "react-hook-form";
import cx from "classnames";

type Props = {
  type: "text" | "password" | "number";
  name: string;
  register?: UseFormReturn["register"];
  errors?: UseFormReturn["formState"]["errors"];
  watch?: UseFormReturn["watch"];
  override?: Interpolation<Theme>;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export default function Input({
  type,
  name,
  register,
  errors,
  watch,
  override,
  ...rest
}: Props) {
  if (!register || !errors || !watch) {
    throw Error("useFormMethods is required");
  }

  const theme = useTheme();

  return (
    <>
      <input
        type={type}
        {...register(name)}
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
      {errors[name] && (
        <label
          css={css`
            display: block;
            font-size: 1rem;
            color: ${theme.palettes.systemRed._500};
            margin-top: 8px;
          `}
        >
          {errors[name].message}
        </label>
      )}
    </>
  );
}
