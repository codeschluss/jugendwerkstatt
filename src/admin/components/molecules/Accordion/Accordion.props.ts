import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";

export interface AccordionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  showSide?: boolean;
  open?: boolean;
  sideTitle?: ReactNode;
  sideContent?: ReactNode;
  sideClassName?: string;
}

export interface AccordionComposition {
  Item: FC<AccordionItemProps>;
}

export interface AccordionItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
