import { ReactNode } from "react";
import { DetailedHTMLProps, ElementType, LabelHTMLAttributes } from "react";

export type BaseLabelProps = DetailedHTMLProps<
  LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;

export type LabelProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
};
