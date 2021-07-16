/** @jsxImportSource @emotion/react */
import { css, Interpolation, Theme, useTheme } from "@emotion/react";
import { UseFormReturn } from "react-hook-form";
import CheckedSVG from "../../icons/icon-checkbox-checked.svg";
import UnCheckedSVG from "../../icons/icon-checkbox-unchecked.svg";

type Props = {
  name: string;
  label: string;
  register?: UseFormReturn["register"];
  errors?: UseFormReturn["formState"]["errors"];
  watch?: UseFormReturn["watch"];
  override?: Interpolation<Theme>;
} & Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "type"
>;

export default function Checkbox({
  name,
  label,
  register,
  errors,
  watch,
  override,
  ...rest
}: Props) {
  if (!register) {
    throw Error("useFormMethods is required");
  }
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
        {...register(name)}
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
        htmlFor={name}
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
