import Switch from '../../../atoms/Form/Switch/Switch';
import Panel from '../../../atoms/Panel/Panel';

export const AdminProfileEmailNotificationsPanel = () => (
  <Panel
    title="E-Mail-Benachrichtigungen"
    submitButton={false}
    className="max-w-md"
  >
    <Panel.Body className="flex items-center justify-between mb-0 mt-14">
      <p>Neuer User</p>
      <Switch />
    </Panel.Body>
  </Panel>
);
