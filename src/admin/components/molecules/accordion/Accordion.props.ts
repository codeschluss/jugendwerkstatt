import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

export interface AccordionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
}

export interface AccordionComposition {
  Item: FC<AccordionItemProps>;
}

export interface AccordionItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
