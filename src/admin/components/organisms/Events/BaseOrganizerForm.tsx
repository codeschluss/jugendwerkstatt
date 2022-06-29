import { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { InputField } from '../../molecules';
import { OrganizerFormInputs } from './Events.types';

export const BaseOrganizerForm = (): ReactElement => {
  const {
    register,
    formState: { errors },
  } = useFormContext<OrganizerFormInputs>();

  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="flex flex-col justify-start w-full space-y-6">
        <InputField
          id="name"
          label="Veranstalter Name"
          {...register('name')}
          error={errors?.name?.message}
          placeholder="IHK Wuppertal"
        />

        <InputField
          id="phone"
          label="Telefonnummer"
          {...register('phone')}
          placeholder="+49 202 - 49 68 94 10"
          error={errors?.phone?.message}
        />
      </div>
      <div className="flex flex-col justify-start space-y-6">
        <InputField
          id="mail"
          label="E-Mail-Adresse"
          placeholder="mail@alphaev.de"
          {...register('mail')}
          error={errors?.mail?.message}
        />
        <InputField
          id="website"
          label="Webseite"
          required={false}
          placeholder="https://www.alphaev.de"
          {...register('website')}
          error={errors?.website?.message}
        />
      </div>
    </div>
  );
};
