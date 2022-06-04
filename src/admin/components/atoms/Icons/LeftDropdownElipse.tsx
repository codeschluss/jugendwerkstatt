import { FC, HTMLAttributes, ReactElement } from 'react';

export const LeftDropdownElipse: FC<HTMLAttributes<HTMLOrSVGElement>> = ({
  ...rest
}): ReactElement => (
  <svg
    width="236"
    height="240"
    viewBox="0 0 236 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <circle opacity="0.25" cx="43.5" cy="67.5" r="192.5" fill="#FFE780" />
  </svg>
);
