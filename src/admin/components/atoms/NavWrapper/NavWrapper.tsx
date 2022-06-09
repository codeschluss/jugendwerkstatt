import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

export const NavWrapper: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, ...rest }) => <div {...rest}>{children}</div>;

NavWrapper.displayName = 'Nav.Wrapper';
