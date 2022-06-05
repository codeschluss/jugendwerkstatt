import { DetailedHTMLProps, InputHTMLAttributes, ReactElement } from 'react';

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: string;
  iconRight?: ReactElement;
}
