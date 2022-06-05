import { Table, Action, Panel } from "../../components/atoms";
import { CustomTable } from "../../components/molecules";

const EventsListPage = () => {
  return (
    <Panel.Wrapper
      action={{ to: "/admin/events/new", label: "Neues Event erstellen" }}
    >
      <CustomTable
        headerData={[
          "Eventname",
          "Kategorie",
          "Datum",
          "Uhrzeit",
          "Uhrzeit",
          "Aktionen",
        ]}
        bodyData={["test"].map((i, idx) => (
          <Table.Row key={idx}>
            <Table.Data>{i}</Table.Data>
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
    </Panel.Wrapper>
  );
};

export default EventsListPage;
