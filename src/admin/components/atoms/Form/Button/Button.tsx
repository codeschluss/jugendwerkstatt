import { FC, ReactElement } from 'react';
import { ButtonVariantsEnum as buttonVariants } from '../../../../interfaces/enums/ButtonVariants.enum';
import { twClsx } from '../../../../utils/twClsx';
import { Icon } from '../../Icons/Icon';
import { ButtonProps, ButtonVariants } from './Button.props';

export const Button: FC<ButtonProps> = ({
  variant = buttonVariants.PRIMARY,
  iconOnly = false,
  iconLeft = null,
  iconRight = null,
  className,
  children,
  ...rest
}): ReactElement => (
  <button
    className={twClsx(
      `flex items-center justify-center gap-x-4 btn btn-${ButtonVariants[variant]}`,
      className
    )}
    {...rest}
  >
    {iconLeft && <Icon icon={iconLeft} />}
    {!iconOnly && children}
    {iconRight && <Icon icon={iconRight} />}
  </button>
);
