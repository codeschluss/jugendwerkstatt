import { FC, ReactElement } from 'react';
import { cx } from '../../../../shared/utils/ClassNames';
import { ButtonVariantsEnum as buttonVariants } from '../../../interfaces/enums/ButtonVariants.enum';
import { ButtonProps, ButtonVariants } from './Button.props';

export const Button: FC<ButtonProps> = ({
  variant = buttonVariants.PRIMARY,
  iconRight = null,
  className,
  children,
  ...rest
}): ReactElement => (
  <button
    className={cx([
      `flex items-center justify-center gap-x-4 btn btn-${ButtonVariants[variant]}`,
      className,
    ])}
    {...rest}
  >
    {children}
    {iconRight && iconRight}
  </button>
);
