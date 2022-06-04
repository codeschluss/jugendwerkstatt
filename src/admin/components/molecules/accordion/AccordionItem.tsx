import { FC, ReactElement } from 'react';
import { AccordionItemProps } from './Accordion.props';

export const AccordionItem: FC<AccordionItemProps> = ({
  children,
  ...rest
}): ReactElement => <div {...rest}>{children}</div>;

AccordionItem.displayName = 'Accordion.Item';
