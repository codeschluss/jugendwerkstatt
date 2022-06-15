import { joiResolver } from '@hookform/resolvers/joi';
import { ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import {
  useGetMeBasicQuery,
  useResetPasswordMutation,
} from '../../../../GraphQl/graphql';
import { ProfilePasswordFormSchema } from '../../../validations';
import { Panel } from '../../atoms';
import { PasswordField } from '../../molecules';
import { ProfilePasswordFormInputs } from './AdminProfile.props';

export const AdminProfilePassword = (): ReactElement => {
  const { data: user } = useGetMeBasicQuery();
  const { key } = useParams();
  const {
    register,
    handleSubmit,
    formState: {
      errors: { currentPassword, newPassword, confirmPassword },
    },
  } = useForm<ProfilePasswordFormInputs>({
    resolver: joiResolver(ProfilePasswordFormSchema),
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [resetPassword] = useResetPasswordMutation();

  const onSubmit = (data: ProfilePasswordFormInputs) => {
    /** !!! How to decode current Password !!! */
    if (data.currentPassword !== user?.me?.password)
      setErrorMessage('Falsches aktuelles Passwort');
    else {
      setErrorMessage(null);
      resetPassword({
        variables: { key, password: data.newPassword },
      });
    }
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
          labelProps={{ htmlFor: 'currentPassword' }}
          {...register('currentPassword')}
          error={currentPassword?.message}
        />
        <PasswordField
          id="newPassword"
          label="Neues Passwort"
          labelProps={{ htmlFor: 'newPassword' }}
          {...register('newPassword')}
          error={newPassword?.message}
        />
        <PasswordField
          id="confirmPassword"
          label="Neues Passwort wiederholen"
          labelProps={{ htmlFor: 'confirmPassword' }}
          {...register('confirmPassword')}
          error={confirmPassword?.message}
        />
      </Panel.Body>
    </Panel>
  );
};
