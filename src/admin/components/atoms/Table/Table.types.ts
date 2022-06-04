import { DetailedHTMLProps, HTMLAttributes } from "react";

export type TableSectionProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>;

export type TableRowProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableRowElement>,
  HTMLTableRowElement
>;

export interface TableDataProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTableCellElement>,
    HTMLTableCellElement
  > {
  action?: boolean;
}
