import { ReactElement } from 'react';
import { Button } from '../../components/atoms';
import { Accordion, InputField } from '../../components/molecules';

const PushNotificationsPage = (): ReactElement => (
  <Accordion title="Push-Nachrichten" className="max-w-3xl">
    <div className="flex flex-col mt-5 mb-10 space-y-5">
      <InputField id="title" label="Titel" />
      <InputField id="message" label="Nachricht" />
    </div>

    <Button>Speichern</Button>
  </Accordion>
);

export default PushNotificationsPage;
