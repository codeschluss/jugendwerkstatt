import { FC, HTMLAttributes, ReactElement } from 'react';

export const RightDropdownElipse: FC<HTMLAttributes<HTMLOrSVGElement>> = ({
  ...rest
}): ReactElement => (
  <svg
    width="156"
    height="163"
    viewBox="0 0 156 163"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <circle opacity="0.45" cx="153" cy="10" r="153" fill="#FFE780" />
  </svg>
);
