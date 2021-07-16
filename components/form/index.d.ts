/// <reference types="react" />
/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from "@emotion/react";
import { UseFormReturn } from "react-hook-form";
declare type Props = {
    onSubmit: (data: any) => void;
    children: JSX.Element | JSX.Element[];
    override?: Interpolation<Theme>;
} & UseFormReturn;
export default function Form({ onSubmit, children, override, register, formState: { errors }, watch, handleSubmit, }: Props): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
