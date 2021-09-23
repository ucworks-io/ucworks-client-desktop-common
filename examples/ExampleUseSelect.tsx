/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useSelect } from "../src";

export default function ExampleUseSelect() {
  const [selectedNode, set, Select] = useSelect({
    items: [
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
    ],
    initialKey: "0-1",
  });
  return (
    <>
      <Select />
    </>
  );
}
