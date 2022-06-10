import { useNavigate } from 'react-router-dom';
import { useGetUsersQuery } from '../../../GraphQl/graphql';
import { Table, Action, Panel } from '../../components/atoms';
import { CustomTable } from '../../components/molecules';

const UsersListPage = () => {
  const navigate = useNavigate();

  const { data } = useGetUsersQuery();

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
          (data?.users?.result &&
            data.users.result.map((user) => (
              <Table.Row key={user?.id}>
                <Table.Data>{user?.fullname}</Table.Data>
                <Table.Data>
                  {(user?.roles && user?.roles[0]?.name) || ''}
                </Table.Data>
                <Table.Data>{user?.email}</Table.Data>
                <Table.Data>{user?.phone}</Table.Data>
                <Table.Data>{user?.created}</Table.Data>
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
