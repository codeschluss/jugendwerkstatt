import { forwardRef, ReactElement } from "react";
import { Input } from "../../../atoms/Form/Input/Input";
import { Label } from "../../../atoms/Form/Label/Label";
import { InputFieldProps } from "./InputField.props";

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ id, name, label, labelProps, ...rest }, ref): ReactElement => (
    <div className="input-field">
      <Label {...labelProps} htmlFor={id || name}>
        {label}
      </Label>
      <Input {...rest} ref={ref} id={id} name={name} />
    </div>
  )
);
