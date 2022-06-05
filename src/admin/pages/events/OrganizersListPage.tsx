import { Table, Action, Panel } from "../../components/atoms";
import { CustomTable } from "../../components/molecules";

const OrganizersListPage = () => {
  return (
    <Panel
      action={{
        to: "/admin/events/organizers/new",
        label: "Neuen Veranstalter hinzufügen",
      }}
    >
      <CustomTable
        headerData={[
          "Veranstaltername",
          "Kategorie",
          "E-Mail-Adresse",
          "Adresse",
          "Aktionen",
        ]}
        bodyData={["test"].map((i, idx) => (
          <Table.Row key={idx}>
            <Table.Data>{i}</Table.Data>
            <Table.Data>{i}</Table.Data>
            <Table.Data>{i}</Table.Data>
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
    </Panel>
  );
};

export default OrganizersListPage;
