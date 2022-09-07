import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import {
  useDeleteUserMutation,
  useGetUsersAdminQuery,
} from '../../../GraphQl/graphql';
import { Table, Action, Panel } from '../../components/atoms';
import { CustomTable } from '../../components/molecules';

const UsersListPage = () => {
  const navigate = useNavigate();
  const { data: { users = null } = {}, refetch } = useGetUsersAdminQuery({
    fetchPolicy: 'cache-and-network',
  });
  const [deleteUser] = useDeleteUserMutation({ onCompleted: () => refetch() });

  const handleUserUpdate = (userId: string) => () => navigate(userId);
  const handleUserDelete = (userId: string) => () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Möchten Sie dies löschen?'))
      deleteUser({ variables: { id: userId } });
  };

  return (
    <Panel.Wrapper>
      <CustomTable
        headerData={[
          'Benutzer/in',
          'Aktiver Kurs',
          'Rolle',
          'E-Mail',
          'Telefonnummer',
          'Datum',
          'Aktionen',
        ]}
        bodyData={
          users?.result?.map((user) => (
            <Table.Row key={user?.id}>
              <Table.Data>{user?.fullname}</Table.Data>
              <Table.Data>{user?.course?.name}</Table.Data>
              <Table.Data>
                {user?.roles?.map((role, idx) => (
                  <p key={role?.id}>
                    {role?.name || ''}
                    {idx !== (user.roles?.length || 1) - 1 && ', '}
                  </p>
                )) || ''}
              </Table.Data>
              <Table.Data>{user?.email}</Table.Data>
              <Table.Data>{user?.phone}</Table.Data>
              <Table.Data>
                {dayjs(user?.created).format('DD.MM.YYYY')}
              </Table.Data>
              <Table.Data>
                <Action
                  onUpdate={handleUserUpdate(user?.id || '')}
                  onDelete={handleUserDelete(user?.id || '')}
                />
              </Table.Data>
            </Table.Row>
          )) || []
        }
      />
    </Panel.Wrapper>
  );
};

export default UsersListPage;
