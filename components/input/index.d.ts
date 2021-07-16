/// <reference types="react" />
/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from "@emotion/react";
import { UseFormReturn } from "react-hook-form";
declare type Props = {
    type: "text" | "password" | "number";
    name: string;
    register?: UseFormReturn["register"];
    errors?: UseFormReturn["formState"]["errors"];
    watch?: UseFormReturn["watch"];
    override?: Interpolation<Theme>;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export default function Input({ type, name, register, errors, watch, override, ...rest }: Props): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
