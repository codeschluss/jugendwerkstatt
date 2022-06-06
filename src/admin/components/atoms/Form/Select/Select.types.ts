import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';

export interface SelectProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  label: string;
  required?: boolean;
  error?: string;
}
