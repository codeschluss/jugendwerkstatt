import { FC } from "react";
import { twClsx } from "../../../utils";
import { TableBody, TableData, TableHeader, TableRow } from "../../atoms";
import { TableComposition, TableProps } from "./Table.types";

const Table: FC<TableProps> & TableComposition = ({
  children,
  className,
  ...rest
}) => (
  <table className={twClsx(className, "bg-primary rounded-md")} {...rest}>
    {children}
  </table>
);

Table.Row = TableRow;
Table.Data = TableData;
Table.Header = TableHeader;
Table.Body = TableBody;

export default Table;
