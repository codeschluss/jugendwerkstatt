import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

import {
  TableDataProps,
  TableRowProps,
  TableSectionProps,
} from "../../atoms/Table/Table.types";

export type TableProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableElement>,
  HTMLTableElement
>;

export interface TableComposition {
  Data: FC<TableDataProps>;
  Row: FC<TableRowProps>;
  Header: FC<TableSectionProps>;
  Body: FC<TableSectionProps>;
}
