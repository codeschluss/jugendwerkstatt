import { Table, Action, Panel } from "../../components/atoms";
import { CustomTable } from "../../components/molecules";

const FormsDocumentsListPage = () => {
  return (
    <Panel.Wrapper>
      <CustomTable
        headerData={["Schüler/in", "Formular", "Dokument", "Datum", "Aktionen"]}
        bodyData={["test"].map((i, idx) => (
          <Table.Row key={idx}>
            <Table.Data>{i}</Table.Data>
            <Table.Data>{i}</Table.Data>
            <Table.Data>{i}</Table.Data>
            <Table.Data>{i}</Table.Data>
            <Table.Data>
              <Action
                onSend={() => {}}
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

export default FormsDocumentsListPage;
