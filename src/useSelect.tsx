/** @jsxImportSource @emotion/react */
import { css, Interpolation, Theme, useTheme } from "@emotion/react";
import { UseFormRegisterReturn, UseFormReturn } from "react-hook-form";
import { theme } from "./uc-theme-provider";
import React, {
  MouseEventHandler,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import SortableTree, {
  TreeItem,
  ExtendedNodeData,
  walk,
  TreeNode,
  TreeIndex,
} from "@nosferatu500/react-sortable-tree";
import FileExplorerTheme from "react-sortable-tree-theme-file-explorer";
import ArrowUpSvg from "../icons/icon-address-arrow-up.svg";
import ArrowDownSvg from "../icons/icon-address-arrow-down.svg";

type Props = {
  items: TreeItem[];
  initialNode?: TreeItem;
};

type SelectProps = {
  override?: Interpolation<Theme>;
};

export default function useSelect({
  items,
  initialNode = items[0],
}: Props): [TreeItem, (props: SelectProps) => JSX.Element] {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [treeData, setTreeData] = useState(items);
  const [selectedNode, setSelectedNode] = useState(initialNode);
  const handleChange = (treeData: TreeItem[]) => {
    setTreeData(treeData);
  };
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    walk({
      treeData: treeData,
      getNodeKey: (data: TreeNode & TreeIndex) => {
        return data.treeIndex;
      },
      callback: (data: TreeNode) => {
        Object.assign(data.node, { expanded: true });
      },
    });
  }, []);

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

  const generateNodeProps = (data: ExtendedNodeData) => {
    const { node } = data;
    return {
      onClick: (e: any) => {
        if (e.target.localName !== "button") {
          setSelectedNode(node);
          setIsOpen(false);
        }
      },
    };
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
          <span>{selectedNode.title}</span>
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
            css={css`
              position: absolute;
              z-index: 10;
              width: 100%;
              /* height: 300px; */
              box-shadow: 0 3px 12px 0 rgba(75, 85, 98, 0.3);
              border: solid 1px #c8cace;
              border-radius: 4px;
              background-color: white;
              display: ${isOpen ? "block" : "none"};
              margin-top: 3px;
              padding: 4px 4px;
            `}
          >
            <SortableTree
              treeData={treeData}
              onChange={handleChange}
              generateNodeProps={generateNodeProps}
              theme={FileExplorerTheme}
              isVirtualized={false}
              canDrag={false}
              css={css`
                .rstcustom__node {
                  &:hover {
                    background-color: ${theme.palettes.grey._100};
                  }
                }
                .rstcustom__expandButton {
                  width: 25px;
                  height: 25px;
                  left: 12px !important;
                  background: no-repeat center url(${ArrowDownSvg});
                  &:after {
                    border: none;
                  }
                }
                .rstcustom__collapseButton {
                  width: 25px;
                  height: 25px;
                  left: 12px !important;
                  background: no-repeat center url(${ArrowUpSvg});

                  &:after {
                    border: none;
                  }
                }
                .rstcustom__rowWrapper {
                  cursor: pointer !important;
                  & > div {
                    height: 100%;
                  }
                }
                .rstcustom__row {
                  width: 100%;
                  height: 100%;
                }
                .rstcustom__rowContents {
                  justify-content: flex-start;
                }
                .rstcustom__rowLabel {
                  width: 100%;
                  height: 100%;
                  display: flex;
                  align-items: center;
                  font-size: 1.1rem;
                  color: ${theme.palettes.grey._1100};
                  padding: 0;
                }
              `}
            />
          </div>
        )}
      </div>
    );
  };

  return [selectedNode, Select];
}
