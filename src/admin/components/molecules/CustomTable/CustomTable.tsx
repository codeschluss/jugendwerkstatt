import { FC, ReactElement } from "react";
import { Table } from "../../atoms";

import { CustomTableProps } from "./CustomTable.types";

export const CustomTable: FC<CustomTableProps> = ({
  bodyData,
  headerData,
  bodyProps,
  headerProps,
}): ReactElement => (
  <Table>
    <Table.Header {...headerProps}>
      <Table.Row>
        {headerData.map((item) => (
          <Table.Data key={item} as="th">
            {item}
          </Table.Data>
        ))}
      </Table.Row>
    </Table.Header>
    <Table.Body {...bodyProps}>{bodyData}</Table.Body>
  </Table>
);
