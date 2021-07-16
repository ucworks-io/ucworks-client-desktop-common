/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from "@emotion/react";
import React from "react";
declare type Props = {
    colorTheme?: "none" | "violet" | "primary" | "secondary";
    override?: Interpolation<Theme>;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export default function Button({ colorTheme, override, ...rest }: Props): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
