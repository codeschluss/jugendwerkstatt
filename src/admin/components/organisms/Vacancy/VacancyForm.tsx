import { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import {
  useGetCompaniesQuery,
  useGetJobTypesQuery,
} from '../../../../GraphQl/graphql';

import { Select } from '../../atoms';
import { InputField } from '../../molecules';
import { VacancyFormInputs } from './Vacancy.types';

export const VacancyForm = (): ReactElement => {
  const { data: { getJobTypes = null } = {} } = useGetJobTypesQuery();
  const { data: { getCompanies = null } = {} } = useGetCompaniesQuery();
  const {
    register,
    formState: {
      errors: { baseData },
    },
  } = useFormContext<VacancyFormInputs>();

  return (
    <div className="flex flex-col justify-start w-full space-y-6">
      <div className="grid gap-8">
        <InputField
          id="title"
          label="Titel"
          {...register('baseData.title')}
          error={baseData?.title?.message}
          placeholder="Tischler/in"
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Select
          id="company"
          label="Unternehmen"
          {...register('baseData.company')}
          error={baseData?.company?.message}
        >
          {getCompanies?.result?.map((item) => (
            <option key={item?.id} value={item?.id || ''}>
              {item?.name}
            </option>
          ))}
        </Select>

        <Select
          id="category"
          label="Kategorie"
          {...register('baseData.category')}
          error={baseData?.category?.message}
        >
          {getJobTypes?.result?.map((item) => (
            <option key={item?.id} value={item?.id || ''}>
              {item?.name}
            </option>
          ))}
        </Select>
      </div>
    </div>
  );
};
