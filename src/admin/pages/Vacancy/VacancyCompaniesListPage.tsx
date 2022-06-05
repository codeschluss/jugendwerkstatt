import { Table, Action, Panel } from "../../components/atoms";
import { CustomTable } from "../../components/molecules";

const VacancyCompaniesListPage = () => {
  return (
    <Panel
      action={{
        to: "/admin/job-announcements/companies/new",
        label: "Neues Unternehmen hinzufügen",
      }}
    >
      <CustomTable
        headerData={[
          "Unternehmen",
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
              <Action onDelete={() => {}} onUpdate={() => {}} />
            </Table.Data>
          </Table.Row>
        ))}
      />
    </Panel>
  );
};

export default VacancyCompaniesListPage;
