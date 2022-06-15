import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useDeletePageMutation,
  useGetPagesQuery,
} from '../../../GraphQl/graphql';
import { Action, Panel, Table } from '../../components/atoms';
import { CustomTable } from '../../components/molecules';

const PublicPagesPage = (): ReactElement => {
  const navigate = useNavigate();
  const { data: { pages = null } = {}, refetch } = useGetPagesQuery();
  const [deletePage] = useDeletePageMutation({ onCompleted: () => refetch() });

  const handleUpdatePage = (id: string) => () => navigate(id);
  const handleDeletePage = (id: string) => () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Möchten Sie dies löschen?')) {
      deletePage({ variables: { id } });
    }
  };

  return (
    <Panel.Wrapper
      action={{
        to: '/admin/general-settings/public-pages/new',
        label: 'Neue Seite hinzufügen',
      }}
    >
      <CustomTable
        headerData={['Öffentliche Seite', 'Aktionen']}
        bodyData={
          (pages?.result &&
            pages.result.map((page) => (
              <Table.Row key={page?.id}>
                <Table.Data>{page?.content}</Table.Data>
                <Table.Data>
                  <Action
                    onUpdate={handleUpdatePage(page?.id || '')}
                    onDelete={handleDeletePage(page?.id || '')}
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

export default PublicPagesPage;
