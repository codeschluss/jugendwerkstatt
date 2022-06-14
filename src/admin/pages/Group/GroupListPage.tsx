import { useNavigate } from 'react-router-dom';
import {
  useDeleteGroupMutation,
  useGetGroupsQuery,
} from '../../../GraphQl/graphql';
import { Table, Action, Panel } from '../../components/atoms';
import { CustomTable } from '../../components/molecules';

const GroupListPage = () => {
  const navigate = useNavigate();

  const { data: { groups = null } = {}, refetch: refetchGroups } =
    useGetGroupsQuery({
      fetchPolicy: 'cache-and-network',
    });

  const [deleteGroup] = useDeleteGroupMutation({
    onCompleted: () => refetchGroups(),
  });

  const handleGroupCoursesNavigate = (groupId: string) => () =>
    navigate(`${groupId}/courses`);
  const handleGroupUpdate = (groupId: string) => () =>
    navigate(`${groupId}/edit`);
  const handleGroupDelete = (groupId: string) => () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Möchten Sie dies löschen?')) {
      deleteGroup({ variables: { deleteGroupId: groupId } });
    }
  };

  const groupsData = groups?.result || [];

  return (
    <Panel.Wrapper
      action={{
        to: '/admin/groups/new',
        label: 'Neue Gruppen',
      }}
    >
      <CustomTable
        headerData={[
          'Gruppen',
          'Aktiver Kurs',
          'Gruppenmitglieder',
          'Aktionen',
        ]}
        bodyData={groupsData.map((group) => (
          <Table.Row key={group?.id}>
            <Table.Data>{group?.name}</Table.Data>
            <Table.Data>
              {(group?.courses &&
                group.courses.filter((course) => course?.active)[0]?.name) ||
                '/'}
            </Table.Data>
            <Table.Data>{group?.users?.length || 0}</Table.Data>
            <Table.Data>
              <Action
                onNavigate={handleGroupCoursesNavigate(group?.id || '')}
              />
              <Action onUpdate={handleGroupUpdate(group?.id || '')} />
              <Action onDelete={handleGroupDelete(group?.id || '')} />
            </Table.Data>
          </Table.Row>
        ))}
      />
    </Panel.Wrapper>
  );
};

export default GroupListPage;
