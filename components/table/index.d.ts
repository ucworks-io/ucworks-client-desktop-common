/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from "@emotion/react";
import React from "react";
import { Row, Column, Cell, TableState } from "react-table";
declare type Props = {
    columns: Column[];
    data: any[];
    initialState?: TableState;
    renderCell?: (cell: Cell) => React.ReactNode;
    selectable?: boolean;
    onSelect?: (row: Row) => void;
    searchValue?: string;
    override?: Interpolation<Theme>;
};
export default function Table({ columns, data, initialState, renderCell, searchValue, override, selectable, onSelect, }: Props): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
