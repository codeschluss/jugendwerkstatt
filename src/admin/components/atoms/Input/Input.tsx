import { forwardRef } from 'react';
import { InputProps } from './Input.props';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ iconRight, ...rest }, ref) => (
    <div className="input-wrapper">
      <input ref={ref} {...rest} />
      {iconRight && iconRight}
    </div>
  )
);
