import { useNavigate } from "react-router-dom";
import {
  useDeleteUserTemplateMutation,
  useGetUserTemplatesAdminQuery,
} from "../../../GraphQl/graphql";
import { Table, Action, Panel } from "../../components/atoms";
import { CustomTable } from "../../components/molecules";
import { formatDate } from "../../utils";

const FormsUserListPage = () => {
  const navigate = useNavigate();

  const { data: { getUserTemplates = null } = {}, refetch } =
    useGetUserTemplatesAdminQuery({
      fetchPolicy: "cache-and-network",
    });

  const [deleteUserTemplate] = useDeleteUserTemplateMutation({
    onCompleted: () => refetch(),
  });

  const handleDeleteById = (id: string) => () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Möchten Sie dies löschen?")) {
      deleteUserTemplate({ variables: { id } });
    }
  };

  const handleUpdateById = (id: string) => () => navigate(id);
  return (
    <Panel.Wrapper>
      <CustomTable
        headerData={[
          "Schüler/in",
          "Kategorie",
          "Dokument",
          "Datum",
          "Aktionen",
        ]}
        bodyData={
          getUserTemplates?.result?.map((item) => (
            <Table.Row key={item?.id}>
              <Table.Data>{item?.name}</Table.Data>
              <Table.Data>{item?.templateType?.name}</Table.Data>
              <Table.Data>{item?.content}</Table.Data>
              <Table.Data>{formatDate(item?.created)}</Table.Data>
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

export default FormsUserListPage;
