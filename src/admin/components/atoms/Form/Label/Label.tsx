import { FC, ReactElement } from 'react';
import { twClsx } from '../../../../utils/twClsx';
import { LabelProps } from './Label.props';

export const Label: FC<LabelProps> = ({
  className,
  children,
  ...rest
}): ReactElement => (
  <label className={twClsx('text-gray-600', className)} {...rest}>
    {children}
  </label>
);
