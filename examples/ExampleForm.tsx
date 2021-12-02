/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Checkbox, Form, Input, Radio, useSelect } from "../src";

export default function ExampleUseSelect() {
  const methods = useForm();
  const [uselessBoolean, setUselessBoolean] = useState(false);
  const submit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <Form onSubmit={submit} {...methods}>
        <div>
          <div>
            <Input name="input" />
          </div>
        </div>
        <Checkbox name="checkbox" label="에에엣" />

        <Radio value="radio1" label="radio1" name="labelGroup" />
        <Radio value="radio2" label="radio2" name="labelGroup" />
      </Form>
      <button
        onClick={() => {
          setUselessBoolean(!uselessBoolean);
        }}
      >
        {uselessBoolean ? "true" : "false"}
      </button>
    </>
  );
}
