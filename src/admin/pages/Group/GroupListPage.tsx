import { Table, Action, Panel } from '../../components/atoms';
import { CustomTable } from '../../components/molecules';

const GroupListPage = () => {
  return (
    <Panel.Wrapper
      action={{
        to: '/admin/groups/new',
        label: 'Neue Gruppen',
      }}
    >
      <CustomTable
        headerData={['Gruppen', 'Gruppenmitglieder', 'Aktionen']}
        bodyData={['test'].map((i, idx) => (
          <Table.Row key={idx}>
            <Table.Data>{i}</Table.Data>
            <Table.Data>{i}</Table.Data>
            <Table.Data>
              <Action onUpdate={() => {}} />
              <Action onDelete={() => {}} />
            </Table.Data>
          </Table.Row>
        ))}
      />
    </Panel.Wrapper>
  );
};

export default GroupListPage;
