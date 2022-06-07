import { ReactElement } from 'react';
import { Action, Panel, Table } from '../../components/atoms';
import { CustomTable } from '../../components/molecules';

const GeneralAddressPage = (): ReactElement => (
  <Panel.Wrapper
    action={{
      to: '/admin/general-settings/address/new',
      label: 'Neues Adresse erstellen',
    }}
  >
    <CustomTable
      headerData={[
        'Straße',
        'Hausnummer',
        'Postleitzahl',
        'Stadt',
        'Längengrad',
        'Breitengrad',
        'Aktionen',
      ]}
      bodyData={['test'].map((i, idx) => (
        <Table.Row key={idx}>
          <Table.Data>{i}</Table.Data>
          <Table.Data>{i}</Table.Data>
          <Table.Data>{i}</Table.Data>
          <Table.Data>{i}</Table.Data>
          <Table.Data>{i}</Table.Data>
          <Table.Data>{i}</Table.Data>
          <Table.Data>
            <Action onDelete={() => {}} onUpdate={() => {}} />
          </Table.Data>
        </Table.Row>
      ))}
    />
  </Panel.Wrapper>
);

export default GeneralAddressPage;
