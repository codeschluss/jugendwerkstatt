import { forwardRef, ReactElement } from "react";
import { twClsx } from "../../../../utils";
import { Input, Label } from "../../../atoms";
import { InputFieldProps } from "./InputField.props";

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    { id, name, label, className, inputClassName, required = true, ...rest },
    ref
  ): ReactElement => (
    <div className={twClsx("w-full", className)}>
      {!!label && (
        <Label htmlFor={id || name} className="text-lg">
          {label}
          {required && <span className="p-1 text-primary">*</span>}
        </Label>
      )}
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
