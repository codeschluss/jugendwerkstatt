import { Table, Action, Panel } from "../../components/atoms";
import { CustomTable } from "../../components/molecules";

const UsersListPage = () => {
  return (
    <Panel.Wrapper>
      <CustomTable
        headerData={[
          "Benutzer/in",
          "Rolle",
          "E-Mail",
          "Telefonnummer",
          "Datum",
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
              <Action onUpdate={() => {}} />
            </Table.Data>
          </Table.Row>
        ))}
      />
    </Panel.Wrapper>
  );
};

export default UsersListPage;
