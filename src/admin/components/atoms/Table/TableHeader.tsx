import { FC, ReactElement } from "react";
import { twClsx } from "../../../utils";
import { TableSectionProps } from "./Table.types";

export const TableHeader: FC<TableSectionProps> = ({
  children,
  className,
  ...rest
}): ReactElement => (
  <thead {...rest} className={twClsx("w-full ", className)}>
    {children}
  </thead>
);

TableHeader.displayName = "Table.Header";
