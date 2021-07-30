/** @jsxImportSource @emotion/react */
import { css, Interpolation, Theme } from "@emotion/react";
import { UseFormRegisterReturn, UseFormReturn } from "react-hook-form";
import { theme } from "./uc-theme-provider";

type Props = {
  override?: Interpolation<Theme>;
} & React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> &
  Partial<UseFormRegisterReturn>;

export default function Select({}: Props) {}
