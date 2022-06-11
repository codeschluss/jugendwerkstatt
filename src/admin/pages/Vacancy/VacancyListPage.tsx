import { ReactElement } from "react";
import { Table, Action, Panel } from "../../components/atoms";
import { CustomTable } from "../../components/molecules";

const CreateVacancyPage = (): ReactElement => {
  return (
    <Panel.Wrapper
      action={{
        to: "/admin/job-announcements/new",
        label: "Neue Stellenausschreibung erstellen",
      }}
    >
      <CustomTable
        headerData={[
          "Stellenausschreibung",
          "Kategorie",
          "Bewerbungsfrist",
          "Berufsstart",
          "Unternehmen",
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

export default CreateVacancyPage;
