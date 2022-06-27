import dayjs from 'dayjs';
import {
  QueryOperator,
  useDeleteUserMutation,
  useGetUsersAdminQuery,
  useSaveUserAdminMutation,
} from '../../../GraphQl/graphql';
import { Table, Action, Panel } from '../../components/atoms';
import { CustomTable } from '../../components/molecules';
import { BackButton } from '../../components/molecules/BackButton/BackButton';

const UsersRequestsListPage = () => {
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
      <BackButton />
    </Panel.Wrapper>
  );
};

export default UsersRequestsListPage;
