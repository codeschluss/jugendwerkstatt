import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import {
  useDeleteJobTypeMutation,
  useGetJobTypesQuery,
} from "../../../GraphQl/graphql";
import { Table, Action, Panel } from "../../components/atoms";
import { CustomTable } from "../../components/molecules";

const VacancyCategoriesListPage = (): ReactElement => {
  const navigate = useNavigate();

  const { data: { getJobTypes = null } = {}, refetch } = useGetJobTypesQuery({
    fetchPolicy: "cache-and-network",
  });

  const [deleteJobType] = useDeleteJobTypeMutation({
    onCompleted: () => refetch(),
  });

  const handleDeleteById = (id: string) => () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Möchten Sie dies löschen?")) {
      deleteJobType({ variables: { id } });
    }
  };

  const handleUpdateById = (id: string) => () => navigate(id);

  return (
    <Panel.Wrapper
      action={{
        to: "/admin/job-announcements/categories/new",
        label: "Neue Kategorie hinzufügen",
      }}
    >
      <CustomTable
        headerData={["Kategorie", "Farbe", "Aktionen"]}
        bodyData={
          getJobTypes?.result?.map((item) => (
            <Table.Row key={item?.id}>
              <Table.Data>{item?.name}</Table.Data>
              <Table.Data style={{ color: item?.color || "" }}>
                {item?.color}
              </Table.Data>
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

export default VacancyCategoriesListPage;
