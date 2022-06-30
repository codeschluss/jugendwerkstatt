import { FC, ReactElement } from "react";
import { twClsx } from "../../../utils";
import { TableRowProps } from "./Table.types";

export const TableRow: FC<TableRowProps> = ({
  children,
  className,
  ...rest
}): ReactElement => (
  <tr {...rest} className={twClsx("mb-2", className)}>
    {children}
  </tr>
);

TableRow.displayName = "Table.Row";
