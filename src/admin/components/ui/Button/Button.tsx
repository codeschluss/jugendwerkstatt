import { FC, ReactElement } from 'react';
import { ButtonVariantsEnum as buttonVariants } from '../../../interfaces/enums/ButtonVariants.enum';
import { ButtonProps, ButtonVariants } from './Button.props';
import { cx } from '../../../../utils/ClassNames';

export const Button: FC<ButtonProps> = ({
  variant = buttonVariants.PRIMARY,
  className,
  children,
  ...rest
}): ReactElement => (
  <button
    className={cx([`btn btn-${ButtonVariants[variant]}`, className])}
    {...rest}
  >
    {children}
  </button>
);
