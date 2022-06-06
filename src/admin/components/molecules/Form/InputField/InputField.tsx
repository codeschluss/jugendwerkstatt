import { forwardRef, ReactElement } from 'react';
import { twClsx } from '../../../../utils';
import { Input, Label } from '../../../atoms';
import { InputFieldProps } from './InputField.props';

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    { id, name, label, className, labelProps, required = true, ...rest },
    ref
  ): ReactElement => (
    <div className={twClsx('w-full', className)}>
      <Label {...labelProps} htmlFor={id || name}>
        {label}
        <span className="p-1 text-lg text-primary">*</span>
      </Label>
      <Input {...rest} ref={ref} id={id} name={name} />
    </div>
  )
);
