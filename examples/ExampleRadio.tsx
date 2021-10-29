/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Radio, useSelect } from "../src";

export default function ExampleUseSelect() {
  return (
    <>
      <Radio value="test1" label="test1" name="labelGroup" />
      <Radio value="test2" label="test2" name="labelGroup" />
    </>
  );
}
