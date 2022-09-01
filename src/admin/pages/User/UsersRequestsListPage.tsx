import dayjs from 'dayjs';
import { Navigate } from 'react-big-calendar';
import { useNavigate } from 'react-router-dom';
import {
  QueryOperator,
  useDeleteUserMutation,
  useGetUsersAdminQuery,
  useSaveUserAdminMutation,
} from '../../../GraphQl/graphql';
import { Table, Action, Panel, Button } from '../../components/atoms';
import { CustomTable } from '../../components/molecules';

const UsersRequestsListPage = () => {
  const navigate = useNavigate();
  const { data, refetch: refetchUsers } = useGetUsersAdminQuery({
    variables: {
      params: {
        expression: {
          entity: {
            operator: QueryOperator.Equal,
            path: 'approved',
            value: 'false',
          },
        },
      },
    },
  });

  const [approveUser] = useSaveUserAdminMutation({
    onCompleted: () => refetchUsers(),
  });
  const [deleteUser] = useDeleteUserMutation({
    onCompleted: () => refetchUsers(),
  });

  const handleApproveUser = (userId: string) => () =>
    approveUser({ variables: { entity: { id: userId, approved: true } } });
  const handleDeleteUser = (userId: string) => () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Möchten Sie dies löschen?')) {
      deleteUser({ variables: { id: userId } });
    }
  };
  const handleGoBack = () => navigate('/admin/users');

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
          (data?.users?.result &&
            data.users.result.map((user) => (
              <Table.Row key={user?.id}>
                <Table.Data>{user?.fullname}</Table.Data>
                <Table.Data>{user?.email}</Table.Data>
                <Table.Data>{user?.phone}</Table.Data>
                <Table.Data>
                  {dayjs(user?.created).format('DD.MM.YYYY')}
                </Table.Data>
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
