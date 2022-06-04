import {
  ComponentPropsWithRef,
  DetailedHTMLProps,
  ElementType,
  FC,
  HTMLAttributes,
} from "react";

export type TableProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableElement>,
  HTMLTableElement
>;

export type TableSectionProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>;

export type TableRowProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableRowElement>,
  HTMLTableRowElement
>;

export interface TableDataBaseProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTableCellElement>,
    HTMLTableCellElement
  > {
  action?: boolean;
}

export interface ActionProps {
  onApprove?: () => void;
  onDelete?: () => void;
  onUpdate?: () => void;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type MergeElementProps<
  T extends ElementType,
  P extends object = {}
> = Omit<ComponentPropsWithRef<T>, keyof P> & P;

export type TableDataProps<P extends ElementType = "th"> = {
  as?: P;
} & MergeElementProps<P, TableDataBaseProps>;

export interface TableComposition {
  Data: FC<TableDataProps>;
  Row: FC<TableRowProps>;
  Header: FC<TableSectionProps>;
  Body: FC<TableSectionProps>;
}
