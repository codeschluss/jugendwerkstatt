import { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react';

export interface InputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  iconRight?: ReactElement;
}
