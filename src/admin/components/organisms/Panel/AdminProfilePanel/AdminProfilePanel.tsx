import { ReactElement } from 'react';
import Avatar from '../../../../../shared/components/header/sideBar/Avatar';
import { Button } from '../../../atoms/Form/Button/Button';
import Panel from '../../../atoms/Panel/Panel';
import { InputField } from '../../../molecules/Form/InputField/InputField';

export const AdminProfilePanel = (): ReactElement => (
  <Panel onSubmit={() => {}} title="Profil bearbeiten" className="max-w-xl">
    <Panel.Body className="flex sm:flex-row xs:flex-col gap-x-8">
      <div className="flex flex-col items-center mb-5 space-y-6">
        <Avatar size="24" />
        <Button>Profilbild ändern</Button>
      </div>

      <div className="flex flex-col flex-1 gap-y-10">
        <InputField id="name" label="Name" labelProps={{ htmlFor: 'name' }} />
        <InputField
          id="email"
          label="E-Mail-Adresse"
          labelProps={{ htmlFor: 'email' }}
        />
        <InputField
          id="phone"
          label="Telefonnummer"
          labelProps={{ htmlFor: 'phone' }}
        />
      </div>
    </Panel.Body>
  </Panel>
);
