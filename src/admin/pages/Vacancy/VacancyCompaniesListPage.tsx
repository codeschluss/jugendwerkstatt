import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import {
  useDeleteCompanyMutation,
  useGetCompaniesQuery,
} from "../../../GraphQl/graphql";
import { Table, Action, Panel } from "../../components/atoms";
import { CustomTable } from "../../components/molecules";

const VacancyCompaniesListPage = (): ReactElement => {
  const navigate = useNavigate();

  const { data, refetch } = useGetCompaniesQuery({
    fetchPolicy: "cache-and-network",
  });

  const [deleteCompany] = useDeleteCompanyMutation({
    onCompleted: () => refetch(),
  });

  const handleDeleteById = (id: string) => () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Möchten Sie dies löschen?")) {
      deleteCompany({ variables: { id } });
    }
  };

  const handleUpdateById = (id: string) => () => navigate(id);

  return (
    <Panel.Wrapper
      action={{
        to: "/admin/job-announcements/companies/new",
        label: "Neues Unternehmen hinzufügen",
      }}
    >
      <CustomTable
        headerData={["Unternehmen", "E-Mail-Adresse", "Adresse", "Aktionen"]}
        bodyData={
          data?.getCompanies?.result?.map((item) => (
            <Table.Row key={item?.id}>
              <Table.Data>{item?.name}</Table.Data>
              <Table.Data>{item?.mail}</Table.Data>
              <Table.Data>{item?.website}</Table.Data>
              <Table.Data>
                <Action
                  onUpdate={handleUpdateById(item?.id || "")}
                  onDelete={handleDeleteById(item?.id || "")}
                />
              </Table.Data>
            </Table.Row>
          )) || []
        }
      />
    </Panel.Wrapper>
  );
};

export default VacancyCompaniesListPage;
