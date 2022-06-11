import {
  useApproveUserMutation,
  useDeleteUserMutation,
  useGetRequestedUsersQuery,
} from '../../../GraphQl/graphql';
import { Table, Action, Panel } from '../../components/atoms';
import { CustomTable } from '../../components/molecules';

const UsersRequestsListPage = () => {
  const { data, refetch: refetchUsers } = useGetRequestedUsersQuery();

  const [approveUser] = useApproveUserMutation({
    onCompleted: () => refetchUsers(),
  });
  const [deleteUser] = useDeleteUserMutation({
    onCompleted: () => refetchUsers(),
  });

  const handleApproveUser = (userId: string) => () =>
    approveUser({ variables: { userId } });
  const handleDeleteUser = (userId: string) => () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Möchten Sie dies löschen?')) {
      deleteUser({ variables: { userId } });
    }
  };

  return (
    <Panel.Wrapper>
      <CustomTable
        headerData={[
          'Benutzer/in',
          'E-Mail',
          'Telefonnummer',
          'Registrierungsdatum',
          'Aktionen',
        ]}
        bodyData={
          (data?.requestedUsers?.result &&
            data.requestedUsers.result.map((user) => (
              <Table.Row key={user?.id}>
                <Table.Data>{user?.fullname}</Table.Data>
                <Table.Data>{user?.email}</Table.Data>
                <Table.Data>{user?.phone}</Table.Data>
                <Table.Data>{user?.created}</Table.Data>
                <Table.Data>
                  <Action
                    onApprove={handleApproveUser(user?.id || '')}
                    onDelete={handleDeleteUser(user?.id || '')}
                  />
                </Table.Data>
              </Table.Row>
            ))) ||
          []
        }
      />
    </Panel.Wrapper>
  );
};

export default UsersRequestsListPage;
