import { FC, ReactElement } from 'react';
import { twClsx } from '../../../utils';
import { IconProps } from './Icon.props';

export const Icon: FC<IconProps> = ({ className, icon }): ReactElement => (
  <span className={twClsx('w-5 h-5', className)}>{icon}</span>
);
