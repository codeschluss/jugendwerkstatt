import { joiResolver } from '@hookform/resolvers/joi';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { ProfilePasswordFormSchema } from '../../../validations';
import { Panel } from '../../atoms';
import { PasswordField } from '../../molecules';
import { ProfilePasswordFormInputs } from './AdminProfile.props';

export const AdminProfilePassword = (): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: {
      errors: { currentPassword, newPassword, confirmPassword },
    },
  } = useForm<ProfilePasswordFormInputs>({
    resolver: joiResolver(ProfilePasswordFormSchema),
  });

  const onSubmit = (data: ProfilePasswordFormInputs) => console.log(data);

  return (
    <Panel
      title="Profil bearbeiten"
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md"
    >
      <Panel.Body className="space-y-12">
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
