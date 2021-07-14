import React from "react";
declare type Props = {
    colorTheme?: "none" | "violet" | "primary" | "secondary";
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export default function Button({ colorTheme, ...rest }: Props): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
