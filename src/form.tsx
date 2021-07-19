/** @jsxImportSource @emotion/react */
import { css, Interpolation, Theme } from "@emotion/react";
import { UseFormReturn } from "react-hook-form";
import React from "react";

type Props = {
  onSubmit: (data: any) => void;
  children: JSX.Element | JSX.Element[];
  override?: Interpolation<Theme>;
} & UseFormReturn;

export default function Form({
  onSubmit,
  children,
  override,
  register,
  formState: { errors },
  watch,
  handleSubmit,
}: Props) {
  if (!register) {
    throw Error("useFormMethods is required");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} css={override}>
      {React.Children.map(children, (child) => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register,
                errors,
                watch,
                key: child.props.name,
              },
            })
          : child;
      })}
    </form>
  );
}
