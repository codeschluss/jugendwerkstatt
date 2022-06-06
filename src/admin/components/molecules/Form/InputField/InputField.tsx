import { forwardRef, ReactElement } from 'react';
import { Input } from '../../../atoms/Form/Input/Input';
import { Label } from '../../../atoms/Form/Label/Label';
import { InputFieldProps } from './InputField.props';

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    { id, name, label, labelProps, required = true, ...rest },
    ref
  ): ReactElement => (
    <div className="input-field">
      <Label {...labelProps} htmlFor={id || name}>
        {label}
        <span className="p-1 text-lg text-primary">*</span>
      </Label>
      <Input {...rest} ref={ref} id={id} name={name} />
    </div>
  )
);
