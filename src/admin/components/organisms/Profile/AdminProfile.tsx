import { joiResolver } from '@hookform/resolvers/joi';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import Avatar from '../../../../shared/components/header/sideBar/Avatar';
import { ProfileFormSchema } from '../../../validations';
import { Button, Panel } from '../../atoms';
import { InputField } from '../../molecules';
import { ProfileFormInputs } from './AdminProfile.props';

export const AdminProfile = (): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: {
      errors: { name, email, phone },
    },
  } = useForm<ProfileFormInputs>({
    resolver: joiResolver(ProfileFormSchema),
  });

  const onSubmit = (data: ProfileFormInputs) => console.log(data);

  return (
    <Panel
      onSubmit={handleSubmit(onSubmit)}
      title="Profil bearbeiten"
      className="max-w-xl"
    >
      <Panel.Body className="flex sm:flex-row xs:flex-col gap-x-8">
        <div className="flex flex-col items-center mb-5 space-y-6">
          <Avatar size="24" />
          <Button>Profilbild ändern</Button>
        </div>

        <div className="flex flex-col flex-1 gap-y-10">
          <InputField
            id="name"
            label="Name"
            labelProps={{ htmlFor: 'name' }}
            {...register('name')}
            error={name?.message}
          />
          <InputField
            id="email"
            label="E-Mail-Adresse"
            labelProps={{ htmlFor: 'email' }}
            {...register('email')}
            error={email?.message}
          />
          <InputField
            id="phone"
            label="Telefonnummer"
            labelProps={{ htmlFor: 'phone' }}
            {...register('phone')}
            error={phone?.message}
          />
        </div>
      </Panel.Body>
    </Panel>
  );
};
