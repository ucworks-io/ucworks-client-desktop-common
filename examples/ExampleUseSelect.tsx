/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { useSelect, UseSelectItem } from "../src";

const defaultItems = [
  {
    title: () => <div>최상위</div>,
    key: "0",
    children: [
      {
        title: "0-1",
        key: "0-1",
      },
    ],
  },
  {
    title:
      "asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇ",
    key: 1,
  },
  {
    title:
      "asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇ",
    key: 2,
  },
  {
    title:
      "asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇ",
    key: 3,
  },
  {
    title:
      "asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇ",
    key: 4,
  },
  {
    title:
      "asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇ",
    key: 5,
  },
  {
    title:
      "asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇ",
    key: 6,
  },
  {
    title:
      "asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇ",
    key: 7,
  },
  {
    title:
      "asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇ",
    key: 8,
  },
  {
    title:
      "asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇ",
    key: 9,
  },
  {
    title:
      "asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇ",
    key: 10,
  },
];

export default function ExampleUseSelect() {
  const [items, setItems] = useState<UseSelectItem[]>(defaultItems);
  const [selectedNode, setSelectKey, Select] = useSelect({
    items,
    initialKey: 1,
  });
  return (
    <>
      <Select
        override={css`
          span {
            width: 100%;
          }
          width: 100%;
        `}
      />
      <div>{selectedNode.key}</div>
      <div>
        {typeof selectedNode.title === "string" ? (
          selectedNode.title
        ) : (
          <selectedNode.title />
        )}
      </div>
      <button
        onClick={() => {
          setSelectKey("0");
        }}
      >
        set to root
      </button>

      <button
        onClick={() => {
          const newItems = items.map((item) => {
            if (item.key === 1) {
              return { ...item, title: `${item.title}❌` };
            } else {
              return item;
            }
          });
          setItems(newItems);
        }}
      >
        change title of node which key is 1
      </button>
    </>
  );
}
