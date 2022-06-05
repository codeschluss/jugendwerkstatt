import { Table, Action, Panel } from "../../components/atoms";
import { CustomTable } from "../../components/molecules";

const VacancyCategoriesListPage = () => {
  return (
    <Panel.Wrapper
      action={{
        to: "/admin/job-announcements/categories/new",
        label: "Neue Kategorie hinzufügen",
      }}
    >
      <CustomTable
        headerData={["Kategorie", "Farbe", "Aktionen"]}
        bodyData={["test"].map((i, idx) => (
          <Table.Row key={idx}>
            <Table.Data>{i}</Table.Data>
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

export default VacancyCategoriesListPage;
