import { ReactElement } from 'react';
import { Action, Panel, Table } from '../../components/atoms';
import { CustomTable } from '../../components/molecules';

const PublicPagesPage = (): ReactElement => (
  <Panel.Wrapper
    action={{
      to: '/admin/general-settings/public-pages/new',
      label: 'Neue Seite hinzufügen',
    }}
  >
    <CustomTable
      headerData={['Öffentliche Seite', 'Aktionen']}
      bodyData={['test'].map((i, idx) => (
        <Table.Row key={idx}>
          <Table.Data>{i}</Table.Data>
          <Table.Data>
            <Action onUpdate={() => {}} onDelete={() => {}} />
          </Table.Data>
        </Table.Row>
      ))}
    />
  </Panel.Wrapper>
);

export default PublicPagesPage;
