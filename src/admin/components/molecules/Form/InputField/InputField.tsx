import { forwardRef, ReactElement } from "react";
import { twClsx } from "../../../../utils";
import { Input, Label } from "../../../atoms";
import { InputFieldProps } from "./InputField.props";

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    { id, name, label, className, inputClassName, labelProps, ...rest },
    ref
  ): ReactElement => (
    <div className={twClsx("w-full", className)}>
      <Label {...labelProps} htmlFor={id || name}>
        {label}
      </Label>
      <Input
        {...rest}
        ref={ref}
        id={id}
        className={inputClassName}
        name={name || id}
      />
    </div>
  )
);
