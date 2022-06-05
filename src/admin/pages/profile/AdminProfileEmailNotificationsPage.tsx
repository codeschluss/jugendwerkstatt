import { ReactElement } from "react";
import { Panel, Switch } from "../../components/atoms";

const AdminProfileEmailNotificationsPage = (): ReactElement => (
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

export default AdminProfileEmailNotificationsPage;
