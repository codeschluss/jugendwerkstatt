import { useNavigate } from 'react-router-dom';
import {
  useDeleteEventCategoryMutation,
  useGetEventCategoriesAdminQuery,
} from '../../../GraphQl/graphql';
import { Table, Action, Panel } from '../../components/atoms';
import { CustomTable } from '../../components/molecules';

const CategoriesListPage = () => {
  const navigate = useNavigate();

  const { data, refetch } = useGetEventCategoriesAdminQuery({
    fetchPolicy: 'cache-and-network',
  });

  const [deleteEventCategoryMutation] = useDeleteEventCategoryMutation({
    onCompleted: () => refetch(),
  });

  const handleDeleteById = (id: string) => () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Möchten Sie dies löschen?')) {
      deleteEventCategoryMutation({ variables: { id } });
    }
  };

  const handleUpdateById = (id: string) => () => navigate(id);

  return (
    <Panel.Wrapper
      action={{
        to: '/admin/events/categories/new',
        label: 'Neue Kategorie erstellen',
      }}
    >
      <CustomTable
        headerData={['Kategorie', 'Aktionen']}
        bodyData={
          data?.categories?.result?.map((item) => (
            <Table.Row key={item?.id}>
              <Table.Data>{item?.name}</Table.Data>
              <Table.Data>
                <Action
                  onUpdate={handleUpdateById(item?.id || '')}
                  onDelete={handleDeleteById(item?.id || '')}
                />
              </Table.Data>
            </Table.Row>
          )) || []
        }
      />
    </Panel.Wrapper>
  );
};

export default CategoriesListPage;
