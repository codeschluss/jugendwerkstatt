import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { useGetUsersAdminQuery } from '../../../GraphQl/graphql';
import { Table, Action, Panel } from '../../components/atoms';
import { CustomTable } from '../../components/molecules';

const UsersListPage = () => {
  const navigate = useNavigate();
  const { data: { users = null } = {} } = useGetUsersAdminQuery({
    fetchPolicy: 'cache-and-network',
  });

  const handleUserUpdate = (userId: string) => () => navigate(userId);

  return (
    <Panel.Wrapper>
      <CustomTable
        headerData={[
          'Benutzer/in',
          'Rolle',
          'E-Mail',
          'Telefonnummer',
          'Datum',
          'Aktionen',
        ]}
        bodyData={
          (users?.result &&
            users.result.map((user) => (
              <Table.Row key={user?.id}>
                <Table.Data>{user?.fullname}</Table.Data>
                <Table.Data>
                  {user?.roles?.map((role, idx) => (
                    <p>
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
                  <Action onUpdate={handleUserUpdate(user?.id || '')} />
                </Table.Data>
              </Table.Row>
            ))) ||
          []
        }
      />
    </Panel.Wrapper>
  );
};

export default UsersListPage;
