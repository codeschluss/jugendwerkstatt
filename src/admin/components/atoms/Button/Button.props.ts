import { ButtonHTMLAttributes, DetailedHTMLProps, ReactElement } from 'react';
import { ButtonVariantsEnum } from '../../../interfaces/enums/ButtonVariants.enum';

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: ButtonVariantsEnum;
  iconRight?: ReactElement;
}

export const ButtonVariants: Record<ButtonVariantsEnum, string> = {
  primary: 'primary',
  secondary: 'secondary',
  link: 'link',
};
