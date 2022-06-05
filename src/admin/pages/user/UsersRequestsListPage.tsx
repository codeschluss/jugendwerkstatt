import { Table, Action, Panel } from "../../components/atoms";
import { CustomTable } from "../../components/molecules";

const UsersRequestsListPage = () => {
  return (
    <Panel.Wrapper>
      <CustomTable
        headerData={[
          "Benutzer/in",
          "E-Mail",
          "Telefonnummer",
          "Registrierungsdatum",
          "Aktionen",
        ]}
        bodyData={["test"].map((i, idx) => (
          <Table.Row key={idx}>
            <Table.Data>{i}</Table.Data>
            <Table.Data>{i}</Table.Data>
            <Table.Data>{i}</Table.Data>
            <Table.Data>{i}</Table.Data>
            <Table.Data>
              <Action onApprove={() => {}} onDelete={() => {}} />
            </Table.Data>
          </Table.Row>
        ))}
      />
    </Panel.Wrapper>
  );
};

export default UsersRequestsListPage;
