import { ReactElement } from "react";
import { Panel } from "../../atoms";
import { PasswordField } from "../../molecules";

export const AdminProfilePassword = (): ReactElement => (
  <Panel
    title="Profil bearbeiten"
    onSubmit={() => console.log("Saving Informations!!!")}
    className="max-w-md"
  >
    <Panel.Body className="space-y-12">
      <PasswordField
        id="currentPassword"
        label="Aktuelles Passwort"
        labelProps={{ htmlFor: "currentPassword" }}
      />
      <PasswordField
        id="newPassword"
        label="Neues Passwort"
        labelProps={{ htmlFor: "newPassword" }}
      />
      <PasswordField
        id="repeatPassword"
        label="Neues Passwort wiederholen"
        labelProps={{ htmlFor: "repeatPassword" }}
      />
    </Panel.Body>
  </Panel>
);
