import { FC } from "react";
import { twClsx } from "../../../utils";
import { TableBody, TableData, TableHeader, TableRow } from "../../atoms";
import { TableComposition, TableProps } from "./Table.types";

export const Table: FC<TableProps> & TableComposition = ({
  children,
  className,
  ...rest
}) => (
  <table className={twClsx("p-2 w-full border-collapse", className)} {...rest}>
    {children}
  </table>
);

Table.Row = TableRow;
Table.Data = TableData;
Table.Header = TableHeader;
Table.Body = TableBody;
