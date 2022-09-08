import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ForceRefetchContext from "../../../contexts/ForceRefetchContext";
import {
  useDeleteGroupMutation,
  useGetGroupsQuery,
} from "../../../GraphQl/graphql";
import { Table, Action, Panel } from "../../components/atoms";
import { CustomTable } from "../../components/molecules";

const GroupListPage = () => {
  const navigate = useNavigate();
  const { reRender, setReRender } = useContext(ForceRefetchContext);
  const { data: { groups = null } = {}, refetch: refetchGroups } =
    useGetGroupsQuery({
      fetchPolicy: "cache-and-network",
    });

  const [deleteGroup] = useDeleteGroupMutation({
    onCompleted: () => {
      refetchGroups();
      setReRender(!reRender);
    },
  });

  const handleGroupCoursesNavigate = (groupId: string) => () =>
    navigate(`${groupId}/courses`);
  const handleGroupUpdate = (groupId: string) => () => navigate(groupId);
  const handleGroupDelete = (groupId: string) => () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Möchten Sie dies löschen?")) {
      deleteGroup({ variables: { deleteGroupId: groupId } });
    }
  };

  const groupsData = groups?.result || [];

  return (
    <Panel.Wrapper
      action={{
        to: "/admin/groups/new",
        label: "Neue Gruppe",
      }}
    >
      <CustomTable
        headerData={["Gruppen", "Gruppekurs", "Aktionen"]}
        bodyData={groupsData.map((group) => (
          <Table.Row key={group?.id}>
            <Table.Data>{group?.name}</Table.Data>
            <Table.Data>{group?.courses?.length}</Table.Data>
            <Table.Data>
              <div className="flex flex-row items-center justify-center space-x-2">
                <Action
                  onNavigate={handleGroupCoursesNavigate(group?.id || "")}
                />
                <Action onUpdate={handleGroupUpdate(group?.id || "")} />
                <Action onDelete={handleGroupDelete(group?.id || "")} />
              </div>
            </Table.Data>
          </Table.Row>
        ))}
      />
    </Panel.Wrapper>
  );
};

export default GroupListPage;
