import { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { InputField } from '../../molecules';
import { VacancyCompaniesFormInputs } from './Vacancy.types';

export const VacancyCompanyForm = (): ReactElement => {
  const {
    register,
    formState: {
      errors: { baseData },
    },
  } = useFormContext<VacancyCompaniesFormInputs>();

  return (
    <div className="grid grid-cols-auto md:grid-cols-2 md:gap-8">
      <div className="w-full md:col-span-2 md:space-y-6">
        <InputField
          id="name"
          className="my-2"
          label="Unternehmen Name"
          {...register('baseData.name')}
          error={baseData?.name?.message}
          placeholder="Schreinerei Müller"
        />
      </div>

      <div className="flex flex-col justify-start md:space-y-6">
        <InputField
          id="phone"
          label="Telefonnummer"
          className="my-2"
          {...register('baseData.phone')}
          placeholder="+49 202 - 49 68 94 10"
          error={baseData?.phone?.message}
        />
        <InputField
          id="website"
          label="Webseite"
          className="my-2"
          required={false}
          placeholder="https://www.schreinerei-mueller.de"
          {...register('baseData.website')}
          error={baseData?.website?.message}
        />
      </div>
      <div className="flex flex-col justify-start w-full">
        <InputField
          id="mail"
          className="my-2"
          label="E-Mail-Adresse"
          placeholder="info@schreinerei-mueller.de"
          {...register('baseData.mail')}
          error={baseData?.mail?.message}
        />
      </div>
    </div>
  );
};
