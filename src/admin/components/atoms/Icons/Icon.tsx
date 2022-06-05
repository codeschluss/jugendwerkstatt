import { FC, ReactElement } from 'react';
import { IconProps } from './Icon.props';

export const Icon: FC<IconProps> = ({ icon }): ReactElement => (
  <span className="w-5 h-5">{icon}</span>
);
