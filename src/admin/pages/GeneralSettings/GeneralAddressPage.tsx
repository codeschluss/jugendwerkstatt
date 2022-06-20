import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useDeleteAddressMutation,
  useGetAddressesQuery,
} from '../../../GraphQl/graphql';
import { Action, Panel, Table } from '../../components/atoms';
import { CustomTable } from '../../components/molecules';

const GeneralAddressPage = (): ReactElement => {
  const navigate = useNavigate();
  const { data: { addresses = null } = {}, refetch } = useGetAddressesQuery();
  const [deleteAddress] = useDeleteAddressMutation({
    onCompleted: () => refetch(),
  });

  const handleDeleteAddress = (id: string) => () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Möchten Sie dies löschen?'))
      deleteAddress({ variables: { id } });
  };
  const handleUpdateAddress = (id: string) => () => navigate(id);

  return (
    <Panel.Wrapper>
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
        bodyData={
          (addresses &&
            addresses.result?.map((address) => (
              <Table.Row key={address?.id}>
                <Table.Data>{address?.street}</Table.Data>
                <Table.Data>{address?.houseNumber}</Table.Data>
                <Table.Data>{address?.postalCode}</Table.Data>
                <Table.Data>{address?.place}</Table.Data>
                <Table.Data>{address?.longitude}</Table.Data>
                <Table.Data>{address?.latitude}</Table.Data>
                <Table.Data>
                  <Action
                    onUpdate={handleUpdateAddress(address?.id || '')}
                    onDelete={handleDeleteAddress(address?.id || '')}
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

export default GeneralAddressPage;
