import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import {
  useDeleteLinkCategoryMutation,
  useGetLinkCategoriesAdminQuery,
} from "../../../GraphQl/graphql";
import { Table, Action, Panel } from "../../components/atoms";
import { CustomTable } from "../../components/molecules";

const MediaCategoriesListPage = (): ReactElement => {
  const navigate = useNavigate();

  const { data, refetch } = useGetLinkCategoriesAdminQuery({
    fetchPolicy: "cache-and-network",
  });

  const [deleteLinkCategory] = useDeleteLinkCategoryMutation({
    onCompleted: () => refetch(),
  });

  const handleDeleteById = (id: string) => () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure you want to delete!")) {
      deleteLinkCategory({ variables: { id } });
    }
  };

  const handleUpdateById = (id: string) => () => navigate(id);

  return (
    <Panel.Wrapper
      action={{
        to: "/admin/medias/categories/new",
        label: "Neue Kategorie erstellen",
      }}
    >
      <CustomTable
        headerData={["Kategorie", "Aktionen"]}
        bodyData={
          data?.getLinkCategories?.result?.map((item) => (
            <Table.Row key={item?.id}>
              <Table.Data>{item?.name}</Table.Data>
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

export default MediaCategoriesListPage;
