/** @jsxImportSource @emotion/react */
import { css, Interpolation, Theme, useTheme } from "@emotion/react";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import Tree from "rc-tree";
import ArrowUpSvg from "../icons/icon-address-arrow-up.svg";
import ArrowDownSvg from "../icons/icon-address-arrow-down.svg";
import { EventDataNode } from "rc-tree/lib/interface";
import treeCss from "./tree.css";

export type UseSelectItem = {
  key: string | number;
  title: string | (() => JSX.Element);
  children?: UseSelectItem[];
};

type Props = {
  items: UseSelectItem[];
  initialKey?: string | number;
};

type SelectProps = {
  override?: Interpolation<Theme>;
};

export default function useSelect({
  items,
  initialKey = items[0].key,
}: Props): [
  UseSelectItem,
  React.Dispatch<React.SetStateAction<string[]>>,
  (props: SelectProps) => JSX.Element
] {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState<UseSelectItem>(items[0]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mouseDownListener = (e: any) => {
      if (!selectRef.current) {
        return;
      }
      if (!selectRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", mouseDownListener);

    return () => {
      document.removeEventListener("mousedown", mouseDownListener);
    };
  }, [selectRef]);

  const handleSelect = (
    selectedKeys: (string | number)[],
    { node }: { node: EventDataNode }
  ) => {
    setSelectedNode({
      key: node.key,
      title: node.title as string | (() => JSX.Element),
    });
    setSelectedKeys(selectedKeys as string[]);
    setIsOpen(false);
  };

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
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
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
          <span>
            {typeof selectedNode.title === "string" ? (
              selectedNode.title
            ) : (
              <selectedNode.title />
            )}
          </span>
          <img
            src={ArrowUpSvg}
            css={css`
              transform: ${isOpen ? "none" : "rotateX(180deg)"};
              transition: all 0.5s linear;
            `}
          />
        </button>

        {isOpen && (
          <div
            ref={selectRef}
            css={[
              treeCss,
              `
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
            `,
            ]}
          >
            <Tree
              treeData={items}
              onSelect={handleSelect}
              defaultExpandAll
              selectedKeys={selectedKeys}
            />
          </div>
        )}
      </div>
    );
  };

  return [selectedNode, setSelectedKeys, Select];
}
