/** @jsxImportSource @emotion/react */
import { css, Interpolation, Theme, useTheme } from "@emotion/react";
import React, { ForwardedRef, forwardRef, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import {
  useRowSelect,
  useTable,
  useGlobalFilter,
  Row,
  Column,
  Cell,
  TableState,
  useBlockLayout,
} from "react-table";
import CheckedSVG from "../../icons/icon-checkbox-checked.svg";
import UnCheckedBoldSVG from "../../icons/icon-checkbox-unchecked-bold.svg";
import UnCheckedSVG from "../../icons/icon-checkbox-unchecked.svg";

const CheckboxComponent = forwardRef(
  (
    {
      indeterminate,
      bold,
      ...rest
    }: { indeterminate?: boolean; bold?: boolean },
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const defaultRef = useRef<HTMLInputElement>(null);
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
      if (
        "current" in resolvedRef &&
        resolvedRef.current &&
        indeterminate !== undefined
      ) {
        resolvedRef.current.indeterminate = indeterminate;
      }
    }, [resolvedRef, indeterminate]);

    return (
      <input
        type="checkbox"
        ref={resolvedRef}
        {...rest}
        css={css`
          width: 14px;
          height: 14px;
          margin: 0;
          appearance: none;
          outline: none;
          background-size: 100%;
          background-image: url(${bold ? UnCheckedBoldSVG : UnCheckedSVG});
          &:checked {
            background-image: url(${CheckedSVG});
          }
        `}
      />
    );
  }
);

type Props = {
  columns: Column[];
  data: any[];
  initialState?: TableState;
  renderCell?: (cell: Cell) => React.ReactNode;
  selectable?: boolean;
  onSelect?: (row: Row) => void;
  searchValue?: string;
  override?: Interpolation<Theme>;
};

export default function Table({
  columns,
  data,
  initialState,
  renderCell,
  searchValue,
  override,
  selectable = false,
  onSelect,
}: Props) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState,
    },
    useBlockLayout,
    useRowSelect,
    (hooks) => {
      selectable &&
        hooks.visibleColumns.push((columns) => [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <CheckboxComponent {...getToggleAllRowsSelectedProps()} bold />
            ),
            Cell: ({ row }: any) => (
              <CheckboxComponent {...row.getToggleRowSelectedProps()} />
            ),

            width: 30,
          },
          ...columns,
        ]);
    },
    useGlobalFilter
  );

  useEffect(() => {
    onSelect && selectedFlatRows.length && onSelect(selectedFlatRows as any);
  }, [selectedFlatRows]);

  useEffect(() => {
    setGlobalFilter(searchValue);
  }, [searchValue]);

  const theme = useTheme();

  return (
    <table
      css={[
        css`
          display: inline-block;
          border-spacing: 0;
          user-select: none;
        `,
        override,
      ]}
      {...getTableProps()}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                css={css`
                  background-color: ${theme.palettes.grey._300};
                  margin: 0;
                  padding: 13px 0;
                  font-size: 1rem;
                  font-weight: bold;
                  line-height: 12px;
                  text-align: center;
                  overflow-wrap: break-word;
                  color: ${theme.palettes.grey._1100};
                `}
                {...column.getHeaderProps()}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    css={css`
                      background-color: ${row.isSelected
                        ? theme.palettes.grey._100
                        : "white"};
                      margin: 0;
                      padding: 13px 0;
                      font-size: 1rem;
                      line-height: 12px;
                      text-align: center;
                      border-bottom: 1px solid ${theme.palettes.grey._300};
                      overflow-wrap: break-word;
                      color: ${theme.palettes.grey._1100};
                      &:last-child {
                        border-right: 0;
                      }
                    `}
                    {...cell.getCellProps()}
                  >
                    {renderCell ? renderCell(cell) : cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
