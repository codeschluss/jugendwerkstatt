import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useDeleteEventMutation,
  useGetEventsAdminQuery,
} from '../../../GraphQl/graphql';

import { Table, Action, Panel } from '../../components/atoms';
import { CustomTable } from '../../components/molecules';
import { formatDate, formatDateTime } from '../../utils';

const EventsListPage = (): ReactElement => {
  const navigate = useNavigate();

  const { data, refetch } = useGetEventsAdminQuery({
    fetchPolicy: 'cache-and-network',
  });

  const [deleteEvent] = useDeleteEventMutation({
    onCompleted: () => refetch(),
  });

  const handleDeleteById = (id: string) => () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Möchten Sie dies löschen?')) {
      deleteEvent({ variables: { id } });
    }
  };

  const handleUpdateById = (id: string) => () => navigate(id);

  console.log(data);

  return (
    <Panel.Wrapper
      action={{ to: '/admin/events/new', label: 'Neues Event erstellen' }}
    >
      <CustomTable
        headerData={['Eventname', 'Kategorie', 'Datum', 'Uhrzeit', 'Aktionen']}
        bodyData={
          data?.getEvents?.result?.map((item) => (
            <Table.Row key={item?.id}>
              <Table.Data>{item?.name}</Table.Data>
              <Table.Data>{item?.category?.name}</Table.Data>
              <Table.Data>
                {formatDate(item?.schedules?.[0]?.startDate)}
              </Table.Data>
              <Table.Data>
                {`${formatDateTime(
                  item?.schedules?.[0]?.startDate
                )} - ${formatDateTime(item?.schedules?.[0]?.startDate)} Uhr`}
              </Table.Data>
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

export default EventsListPage;
