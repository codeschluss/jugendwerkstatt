import { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import {
  QueryOperator,
  useAddGroupMemberMutation,
  useGetGroupQuery,
  useGetUsersAdminQuery,
} from '../../../GraphQl/graphql';
import { Action, Panel, Table } from '../../components/atoms';
import { BackButton, CustomTable } from '../../components/molecules';

const CreateGroupMembersPage = (): ReactElement => {
  const { id } = useParams();
  const { data: { users = null } = {}, refetch: refetchUsers } =
    useGetUsersAdminQuery({
      variables: {
        params: {
          expression: {
            entity: {
              operator: QueryOperator.NotEqual,
              path: 'group.id',
              value: id,
            },
          },
        },
      },
    });
  const { data: { group = null } = {} } = useGetGroupQuery({
    variables: { entity: { id } },
  });

  const [addMember] = useAddGroupMemberMutation({
    onCompleted: () => refetchUsers(),
  });

  const handleAddGroupMember = (userId: string) => () =>
    addMember({ variables: { userId, groupId: group?.id || '' } });

  return (
    <Panel.Wrapper>
      <CustomTable
        headerData={['Name', 'Gruppe', 'Aktionen']}
        bodyData={
          (users?.result &&
            users.result.map((user) => (
              <Table.Row key={user?.id}>
                <Table.Data>{user?.fullname}</Table.Data>
                <Table.Data>{group?.name}</Table.Data>
                <Table.Data>
                  <Action onApprove={handleAddGroupMember(user?.id || '')} />
                </Table.Data>
              </Table.Row>
            ))) ||
          []
        }
      />
      <BackButton />
    </Panel.Wrapper>
  );
};

export default CreateGroupMembersPage;
