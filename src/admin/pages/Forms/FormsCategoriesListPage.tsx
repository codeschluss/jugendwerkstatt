import { useNavigate } from "react-router-dom";
import {
  useDeleteTemplateTypeMutation,
  useGetTemplateTypesAdminQuery,
} from "../../../GraphQl/graphql";
import { Table, Action, Panel } from "../../components/atoms";
import { CustomTable } from "../../components/molecules";

const FormsCategoriesListPage = () => {
  const navigate = useNavigate();

  const { data: { getTemplateTypes = null } = {}, refetch } =
    useGetTemplateTypesAdminQuery({
      fetchPolicy: "cache-and-network",
    });

  const [deleteTemplateType] = useDeleteTemplateTypeMutation({
    onCompleted: () => refetch(),
  });

  const handleDeleteById = (id: string) => () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Möchten Sie dies löschen?")) {
      deleteTemplateType({ variables: { id } });
    }
  };

  const handleUpdateById = (id: string) => () => navigate(id);
  return (
    <Panel.Wrapper
      action={{
        to: "/admin/forms/categories/new",
        label: "Neue Kategorie erstellen",
      }}
    >
      <CustomTable
        headerData={["Kategorie", "Aktionen"]}
        bodyData={
          getTemplateTypes?.result?.map((item) => (
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

export default FormsCategoriesListPage;
