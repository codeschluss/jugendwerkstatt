import { FC, ReactElement } from "react";
import { twClsx } from "../../../utils";
import { TableSectionProps } from "./Table.types";

export const TableBody: FC<TableSectionProps> = ({
  children,
  className,
  ...rest
}): ReactElement => (
  <tbody {...rest} className={twClsx("w-full", className)}>
    {children}
  </tbody>
);

TableBody.displayName = "Table.Body";
