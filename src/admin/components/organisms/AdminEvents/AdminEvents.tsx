import { Table } from "../../atoms";
import { Action } from "../../atoms/Table/Action";
import { CustomTable } from "../../molecules";

export const AdminEvents = () => (
  <div className="min-h-full p-4 bg-white">
    <CustomTable
      headerData={["Nr", "Name"]}
      bodyData={["hello", "test"].map((i, idx) => (
        <Table.Row key={idx}>
          <Table.Data>{i}</Table.Data>
          <Table.Data>
            <Action
              onApprove={() => {}}
              onDelete={() => {}}
              onUpdate={() => {}}
            />
          </Table.Data>
        </Table.Row>
      ))}
    />
  </div>
);
