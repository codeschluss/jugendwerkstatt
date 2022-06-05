import { Table, Action, Panel } from "../../components/atoms";
import { CustomTable } from "../../components/molecules";

const MediaListPage = () => {
  return (
    <Panel
      action={{ to: "/admin/medias/new", label: "Neues Video hinzufügen" }}
    >
      <CustomTable
        headerData={["Videoname", "Kategorie", "Link", "Aktionen"]}
        bodyData={["test"].map((i, idx) => (
          <Table.Row key={idx}>
            <Table.Data>{i}</Table.Data>
            <Table.Data>{i}</Table.Data>
            <Table.Data>{i}</Table.Data>
            <Table.Data>
              <Action onDelete={() => {}} onUpdate={() => {}} />
            </Table.Data>
          </Table.Row>
        ))}
      />
    </Panel>
  );
};

export default MediaListPage;
