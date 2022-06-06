import { FC } from 'react';
import { twClsx } from '../../../../utils';
import { Label } from '../Label/Label';
import { SelectProps } from './Select.types';

export const Select: FC<SelectProps> = ({
  label,
  required = true,
  error,
  className,
  children,
  ...rest
}) => (
  <div className="flex flex-col">
    <Label>
      {label}
      {required && <span className="p-1 text-lg text-primary">*</span>}
    </Label>
    <select
      className={twClsx(
        'select',
        error ? 'border-primary' : 'border-gray-400',
        className
      )}
      {...rest}
    >
      {children}
    </select>
    {error && <span className="block pt-1 text-sm text-primary">{error}</span>}
  </div>
);
