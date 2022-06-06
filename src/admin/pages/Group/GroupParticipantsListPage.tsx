import { Table, Action, Panel } from '../../components/atoms';
import { CustomTable } from '../../components/molecules';

const GroupParticipantsListPage = () => {
  return (
    <Panel.Wrapper
      action={{
        to: '/admin/groups/participants/new',
        label: 'Teilnehmer hinzufügen',
      }}
    >
      <CustomTable
        headerData={['Name', 'Gruppe', 'Aktionen']}
        bodyData={['test'].map((i, idx) => (
          <Table.Row key={idx}>
            <Table.Data>{i}</Table.Data>
            <Table.Data>{i}</Table.Data>
            <Table.Data>
              <Action onDelete={() => {}} />
            </Table.Data>
          </Table.Row>
        ))}
      />
    </Panel.Wrapper>
  );
};

export default GroupParticipantsListPage;
