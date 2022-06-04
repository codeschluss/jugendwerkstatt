import { Table } from "../../atoms";
import { CustomTable } from "../../molecules";

export const AdminEvents = () => (
  <div className="min-h-full p-4 bg-white">
    <CustomTable
      headerData={["Nr", "Name"]}
      bodyData={["hello", "test"].map((i, idx) => (
        <Table.Row key={idx}>
          <Table.Data>{idx}</Table.Data>
          <Table.Data>{i}</Table.Data>
        </Table.Row>
      ))}
    />
  </div>
);
