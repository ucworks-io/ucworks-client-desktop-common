/** @jsxImportSource @emotion/react */
import { cloneElement, useCallback } from "react";
import { Children, FC, createElement } from "react";
import {
  Resolver,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";

type Props = Omit<
  React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >,
  "onSubmit"
> & {
  onSubmit: SubmitHandler<any>;
  children: JSX.Element | JSX.Element[];
} & UseFormReturn<any>;

const Form: FC<Props> = ({
  children,
  onSubmit,
  handleSubmit,
  register,
  formState,
  getValues,
  setValue,
  clearErrors,
  setError,
  setFocus,
  trigger,
  watch,
  reset,
  unregister,
  ...props
}) => {
  const recursiveMap = useCallback(
    (children: JSX.Element | JSX.Element[]) =>
      Children.map(children, (child: JSX.Element) => {
        if (child.props?.name) {
          child = cloneElement(child, {
            register: register,
            key: child.props.name,
            errors: formState.errors,
          });
        }
        if (child.props?.children) {
          child = cloneElement(child, {
            children: recursiveMap(child.props.children),
          });
        }
        return child;
      }),
    [register, children, formState]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} {...props}>
      {recursiveMap(children)}
    </form>
  );
};

export default Form;
