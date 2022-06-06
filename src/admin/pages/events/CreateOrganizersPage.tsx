import { ReactElement } from 'react';
import { Select } from '../../components/atoms/Form/Select/Select';
import { Accordion } from '../../components/molecules';

const CreateOrganizersPage = (): ReactElement => {
  return (
    <div className="min-h-full">
      <Accordion title="Stammdaten">
        <p>lorem ispum</p>
        <Select label="Select A field">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </Select>
      </Accordion>
      <Accordion title="Adresse">
        <p>lorem ispum</p>
      </Accordion>
    </div>
  );
};

export default CreateOrganizersPage;
