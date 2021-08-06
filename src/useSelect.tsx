/** @jsxImportSource @emotion/react */
import { css, Interpolation, Theme, useTheme } from "@emotion/react";
import { UseFormRegisterReturn, UseFormReturn } from "react-hook-form";
import { theme } from "./uc-theme-provider";
import { useSelect as useSelectHook } from "downshift";
import { useState } from "react";
import ArrowUpSvg from "../icons/icon-address-arrow-up.svg";

type Props = {
  items: string[];
  initialIndex?: number;
};

type SelectProps = {
  override?: Interpolation<Theme>;
} & React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> &
  Partial<UseFormRegisterReturn>;

export default function useSelect({
  items,
  initialIndex = 0,
}: Props): [string, (props: SelectProps) => JSX.Element] {
  const theme = useTheme();
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelectHook({
    items,
    initialHighlightedIndex: initialIndex,
    initialSelectedItem: items[initialIndex],
  });

  const Select = ({ override }: SelectProps) => {
    return (
      <div
        css={[
          css`
            width: 312px;
            height: 32px;
            position: relative;
          `,
          override,
        ]}
      >
        <button
          type="button"
          {...getToggleButtonProps()}
          css={css`
            position: relative;
            width: 100%;
            height: 100%;
            background-color: white;
            border: 1px solid
              ${isOpen ? theme.palettes.primary._500 : theme.palettes.grey._500};
            border-radius: 4px;
            &:hover {
              border: 1px solid ${theme.palettes.primary._500};
            }
            cursor: pointer;
            font-size: 1.1rem;
            color: ${theme.palettes.grey._1100};
            text-align: left;
          `}
        >
          <span>{selectedItem as string}</span>
          <img
            src={ArrowUpSvg}
            css={css`
              transform: ${isOpen ? "none" : "rotateX(180deg)"};
              transition: all 0.5s linear;
            `}
          />
        </button>
        <ul
          {...getMenuProps()}
          css={css`
            position: absolute;
            z-index: 10;
            width: 100%;
            box-shadow: 0 3px 12px 0 rgba(75, 85, 98, 0.3);
            border: solid 1px #c8cace;
            border-radius: 4px;
            background-color: white;
            display: ${isOpen ? "block" : "none"};
            margin-top: 3px;
            padding: 4px 4px;
          `}
        >
          {isOpen &&
            items.map((item, index) => (
              <li
                style={
                  highlightedIndex === index
                    ? { backgroundColor: theme.palettes.grey._100 }
                    : {}
                }
                key={`${item}${index}`}
                {...getItemProps({ item, index })}
                css={css`
                  font-size: 1.1rem;
                  color: ${theme.palettes.grey._1100};
                  padding: 6px;
                  cursor: pointer;
                `}
              >
                {item}
              </li>
            ))}
        </ul>
      </div>
    );
  };

  return [selectedItem!, Select];
}
