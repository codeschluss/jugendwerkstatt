import { useNavigate } from 'react-router-dom';
import {
  useDeleteGroupMutation,
  useGetGroupsQuery,
} from '../../../GraphQl/graphql';
import { Table, Action, Panel } from '../../components/atoms';
import { CustomTable } from '../../components/molecules';

const GroupListPage = () => {
  const navigate = useNavigate();

  const { data, refetch: refetchGroups } = useGetGroupsQuery({
    fetchPolicy: 'cache-and-network',
  });
  const [deleteGroup] = useDeleteGroupMutation({
    onCompleted: () => refetchGroups(),
  });

  const handleGroupUpdate = (groupId: string) => () => navigate(groupId);
  const handleGroupDelete = (groupId: string) => () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Möchten Sie dies löschen?')) {
      deleteGroup({ variables: { deleteGroupId: groupId } });
    }
  };

  return (
    <Panel.Wrapper
      action={{
        to: '/admin/groups/new',
        label: 'Neue Gruppen',
      }}
    >
      <CustomTable
        headerData={['Gruppen', 'Gruppenmitglieder', 'Aktionen']}
        bodyData={
          (data?.groups?.result &&
            data.groups.result.map((group) => (
              <Table.Row key={group?.id}>
                <Table.Data>{group?.name}</Table.Data>
                <Table.Data>
                  {(group?.courses && group.courses[0]?.users?.length) || 0}
                </Table.Data>
                <Table.Data>
                  <Action onUpdate={handleGroupUpdate(group?.id || '')} />
                  <Action onDelete={handleGroupDelete(group?.id || '')} />
                </Table.Data>
              </Table.Row>
            ))) ||
          []
        }
      />
    </Panel.Wrapper>
  );
};

export default GroupListPage;
