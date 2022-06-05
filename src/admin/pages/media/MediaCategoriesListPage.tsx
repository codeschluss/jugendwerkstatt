import { Table, Action, Panel } from "../../components/atoms";
import { CustomTable } from "../../components/molecules";

const MediaCategoriesListPage = () => {
  return (
    <Panel.Wrapper
      action={{
        to: "/admin/medias/categories/new",
        label: "Neue Kategorie erstellen",
      }}
    >
      <CustomTable
        headerData={["Kategorie", "Aktionen"]}
        bodyData={["test"].map((i, idx) => (
          <Table.Row key={idx}>
            <Table.Data>{i}</Table.Data>
            <Table.Data>
              <Action onUpdate={() => {}} onDelete={() => {}} />
            </Table.Data>
          </Table.Row>
        ))}
      />
    </Panel.Wrapper>
  );
};

export default MediaCategoriesListPage;
