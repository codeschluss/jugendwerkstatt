import { ReactElement } from 'react';
import { Panel } from '../../components/atoms';
import { PanelBody } from '../../components/atoms/Panel/PanelBody';
import { InputField } from '../../components/molecules';

const CreateGroupPage = (): ReactElement => (
  <Panel title="Stammdaten" className="max-w-4xl">
    <PanelBody>
      <InputField label="Gruppenname" />
    </PanelBody>
  </Panel>
);

export default CreateGroupPage;
