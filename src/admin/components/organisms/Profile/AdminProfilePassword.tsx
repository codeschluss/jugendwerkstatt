import { joiResolver } from "@hookform/resolvers/joi";
import { ReactElement, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import AuthContext from "../../../../contexts/AuthContext";
import { useSaveUserAdminMutation } from "../../../../GraphQl/graphql";
import { ProfilePasswordFormSchema } from "../../../validations";
import { Panel } from "../../atoms";
import { PasswordField } from "../../molecules";
import { ProfilePasswordFormInputs } from "./AdminProfile.props";

export const AdminProfilePassword = (): ReactElement => {
  const user = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: {
      errors: { currentPassword, newPassword, confirmPassword },
    },
  } = useForm<ProfilePasswordFormInputs>({
    resolver: joiResolver(ProfilePasswordFormSchema),
  });
  const [errorMessage, setErrorMessage] = useState("");

  const [saveUser] = useSaveUserAdminMutation();

  const onSubmit = (data: ProfilePasswordFormInputs) => {
    if (data.currentPassword !== user.password)
      setErrorMessage("Falsches aktuelles Passwort");
    else
      saveUser({
        variables: {
          entity: { id: user.password, password: data.newPassword },
        },
      });
  };

  return (
    <Panel
      title="Profil bearbeiten"
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md"
    >
      <Panel.Body className="space-y-12">
        {errorMessage && (
          <div className="p-4 mt-2 text-white bg-primary">
            <h1>{errorMessage}</h1>
          </div>
        )}
        <PasswordField
          id="currentPassword"
          label="Aktuelles Passwort"
          {...register("currentPassword")}
          error={currentPassword?.message}
        />
        <PasswordField
          id="newPassword"
          label="Neues Passwort"
          {...register("newPassword")}
          error={newPassword?.message}
        />
        <PasswordField
          id="confirmPassword"
          label="Neues Passwort wiederholen"
          {...register("confirmPassword")}
          error={confirmPassword?.message}
        />
      </Panel.Body>
    </Panel>
  );
};
