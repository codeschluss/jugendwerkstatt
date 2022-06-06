import { ReactElement } from 'react';
import { Panel } from '../../components/atoms';
import { InputField } from '../../components/molecules';

const EditGroupPage = (): ReactElement => (
  <Panel title="Stammdaten" className="max-w-4xl">
    <Panel.Body>
      <InputField label="Gruppenname" />
    </Panel.Body>
  </Panel>
);

export default EditGroupPage;
