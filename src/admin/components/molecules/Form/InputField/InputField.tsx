import { FC, ReactElement } from 'react';
import { Input } from '../../../atoms/Form/Input/Input';
import { Label } from '../../../atoms/Form/Label/Label';
import { InputFieldProps } from './InputField.props';

export const InputField: FC<InputFieldProps> = ({
  label,
  labelProps,
  inputRef,
  ...rest
}): ReactElement => (
  <div className="input-field">
    <Label {...labelProps}>{label}</Label>
    <Input {...rest} ref={inputRef} />
  </div>
);
