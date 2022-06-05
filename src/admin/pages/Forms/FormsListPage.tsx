import { Table, Action, Panel } from "../../components/atoms";
import { CustomTable } from "../../components/molecules";

const FormsListPage = () => {
  return (
    <Panel.Wrapper
      action={{
        to: "/admin/forms/new",
        label: "Neues Formular erstellen",
      }}
    >
      <CustomTable
        headerData={["Formularname", "Kategorie", "Aktionen"]}
        bodyData={["test"].map((i, idx) => (
          <Table.Row key={idx}>
            <Table.Data>{i}</Table.Data>
            <Table.Data>{i}</Table.Data>
            <Table.Data>
              <Action onDelete={() => {}} onUpdate={() => {}} />
            </Table.Data>
          </Table.Row>
        ))}
      />
    </Panel.Wrapper>
  );
};

export default FormsListPage;
