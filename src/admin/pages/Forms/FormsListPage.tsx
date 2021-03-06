import { useNavigate } from "react-router-dom";
import {
  useDeleteTemplateMutation,
  useGetTemplatesAdminQuery,
} from "../../../GraphQl/graphql";
import { Table, Action, Panel } from "../../components/atoms";
import { CustomTable } from "../../components/molecules";

const FormsListPage = () => {
  const navigate = useNavigate();

  const { data: { getTemplates = null } = {}, refetch } =
    useGetTemplatesAdminQuery({
      fetchPolicy: "cache-and-network",
    });

  const [deleteTemplate] = useDeleteTemplateMutation({
    onCompleted: () => refetch(),
  });

  const handleDeleteById = (id: string) => () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Möchten Sie dies löschen?")) {
      deleteTemplate({ variables: { id } });
    }
  };

  const handleUpdateById = (id: string) => () => navigate(id);

  return (
    <Panel.Wrapper
      action={{
        to: "/admin/forms/templates/new",
        label: "Neues Formular erstellen",
      }}
    >
      <CustomTable
        headerData={["Formularname", "Kategorie", "Aktionen"]}
        bodyData={
          getTemplates?.result?.map((item) => (
            <Table.Row key={item?.id}>
              <Table.Data>{item?.name}</Table.Data>
              <Table.Data>{item?.templateType?.name}</Table.Data>
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

export default FormsListPage;
