import { FC, ReactElement } from "react";
import { twClsx } from "../../../utils";
import { TableDataProps } from "./Table.types";

export const TableData: FC<TableDataProps> = ({
  children,
  className,
  ...rest
}): ReactElement => (
  <td
    {...rest}
    className={twClsx("flex justify-center items-center flex-row", className)}
  >
    {children}
  </td>
);

TableData.displayName = "Table.Data";
