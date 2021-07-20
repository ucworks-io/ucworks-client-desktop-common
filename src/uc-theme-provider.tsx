import {ThemeProvider} from '@emotion/react';
import React from 'react';

export type UcTheme = typeof theme;

export const theme = {
    palettes: {
    primary: {
      _400: "#604790",
      _500: "#331371",
      _600: "#1C024D",
    },
    secondary: {
      _400: "#8ED9F2",
      _500: "#38b5de",
      _600: "#088ab5",
    },
    third: {
      _400: "#ff8297",
      _500: "#fa114f",
      _600: "#b80031",
    },
    grey: {
      _100: "#f1f3f6",
      _200: "#ebedf1",
      _300: "#dfe2e8",
      _400: "#d5d7dc",
      _500: "#c8cace",
      _600: "#b4b5b8",
      _700: "#9d9ea2",
      _800: "#86878b",
      _900: "#727375",
      _1000: "#636465",
      _1100: "#555555",
      _1200: "#444444",
      _1300: "#333333",
      _1400: "#222222",
    },
    systemRed: {
      _500: "#d20707",
    },
    systemYellow: {
      _500: "#ffc400",
    },
    systemGreen: {
      _500: "#00bf60",
    },
    systemBlue: {
      _500: "#0776d8",
    },
    magenta: {
      _500: "#fa114f",
    },
    red: {
      _500: "#ff3b30",
    },
    orange: {
      _500: "#ff9500",
    },
    yellow: {
      _500: "#ffe620",
    },
    green: {
      _500: "#04de71",
    },
    cyan: {
      _500: "#00f5ea",
    },
    skyblue: {
      _500: "#00c9ff",
    },
    blue: {
      _500: "#2094fa",
    },
    violet: {
      _300: "#eae4f5",
      _400: "#d5cce8",
      _500: "#787aff",
    },
    deepViolet: {
      _500: "#522391",
    },
    cobalt: {
      _500: "#0037c7",
    },
    deepGreen: {
      _500: "#006a66",
    },
  }} as const;
  

interface Props {
    children: JSX.Element | JSX.Element[];
}

export default function UcThemeProvider({children}: Props) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}