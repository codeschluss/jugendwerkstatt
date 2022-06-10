import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import {
  useDeleteOrganizerMutation,
  useGetOrganizersQuery,
} from "../../../GraphQl/graphql";
import { Table, Action, Panel } from "../../components/atoms";
import { CustomTable } from "../../components/molecules";

const OrganizersListPage = (): ReactElement => {
  const navigate = useNavigate();

  const { data, refetch } = useGetOrganizersQuery({
    fetchPolicy: "cache-and-network",
  });

  const [deleteOrganizer] = useDeleteOrganizerMutation({
    onCompleted: () => refetch(),
  });

  const handleDeleteById = (id: string) => () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure you want to delete!")) {
      deleteOrganizer({ variables: { id } });
    }
  };

  const handleUpdateById = (id: string) => () => navigate(id);

  return (
    <Panel.Wrapper
      action={{
        to: "/admin/events/organizers/new",
        label: "Neuen Veranstalter hinzufügen",
      }}
    >
      <CustomTable
        headerData={[
          "Veranstaltername",
          "Kategorie",
          "E-Mail-Adresse",
          "Adresse",
          "Aktionen",
        ]}
        bodyData={
          data?.organizers?.result?.map((item) => (
            <Table.Row key={item?.id}>
              <Table.Data>{item?.name}</Table.Data>
              <Table.Data>{item?.mail}</Table.Data>
              <Table.Data>{item?.phone}</Table.Data>
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

export default OrganizersListPage;
