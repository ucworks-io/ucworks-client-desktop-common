/// <reference types="react" />
/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from "@emotion/react";
import { UseFormReturn } from "react-hook-form";
declare type Props = {
    name: string;
    label: string;
    register?: UseFormReturn["register"];
    errors?: UseFormReturn["formState"]["errors"];
    watch?: UseFormReturn["watch"];
    override?: Interpolation<Theme>;
} & Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "type">;
export default function Checkbox({ name, label, register, errors, watch, override, ...rest }: Props): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
