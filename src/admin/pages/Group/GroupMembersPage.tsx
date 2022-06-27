import { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import {
  useDeleteGroupMemberMutation,
  useGetGroupQuery,
} from '../../../GraphQl/graphql';
import { Action, Panel, Table } from '../../components/atoms';
import { CustomTable } from '../../components/molecules';

const GroupMembersPage = (): ReactElement => {
  const { id } = useParams();
  const { data: { group = null } = {}, refetch: refetchGroups } =
    useGetGroupQuery({
      fetchPolicy: 'cache-and-network',
      variables: { entity: { id } },
    });
  const [deleteMember] = useDeleteGroupMemberMutation({
    onCompleted: () => refetchGroups(),
  });

  const handleDeleteGroupMember = (userId: string) => () =>
    deleteMember({ variables: { userId, groupId: group?.id || '' } });

  const groupUsers = group?.users || [];

  return (
    <Panel.Wrapper
      action={{
        to: `/admin/groups/${group?.id || ''}/members/new`,
        label: 'Teilnehmer hinzufügen',
      }}
    >
      <CustomTable
        headerData={['Name', 'Gruppe', 'Aktionen']}
        bodyData={groupUsers.map((user) => (
          <Table.Row key={user?.id}>
            <Table.Data>{user?.fullname}</Table.Data>
            <Table.Data>{group?.name}</Table.Data>
            <Table.Data>
              <Action onDelete={handleDeleteGroupMember(user?.id || '')} />
            </Table.Data>
          </Table.Row>
        ))}
      />
    </Panel.Wrapper>
  );
};

export default GroupMembersPage;
