import { ReactNode } from "react";
import { TableSectionProps } from "../../atoms/Table/Table.types";

export interface CustomTableProps {
  headerProps?: TableSectionProps;
  bodyProps?: TableSectionProps;
  headerData: string[];
  bodyData: ReactNode[];
}
