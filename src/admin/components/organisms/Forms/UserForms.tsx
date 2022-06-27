import { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import {
  useGetTemplateTypesAdminQuery,
  useGetUsersListQuery,
} from '../../../../GraphQl/graphql';
import { Select } from '../../atoms';
import { InputField } from '../../molecules';
import { UserFormsFormInputs } from './Forms.types';

export const UserFormsForm = (): ReactElement => {
  const { data: { getTemplateTypes = null } = {} } =
    useGetTemplateTypesAdminQuery();
  const { data: { getUsers = null } = {} } = useGetUsersListQuery();

  const {
    register,
    formState: {
      errors: { baseData },
    },
  } = useFormContext<UserFormsFormInputs>();

  return (
    <div className="flex flex-col justify-start w-full space-y-6">
      <InputField
        id="name"
        label="Benutzerformulare"
        {...register('baseData.name')}
        placeholder="Benutzerformulare 1"
        error={baseData?.name?.message}
      />

      <Select
        id="user"
        label="Nutzername"
        {...register('baseData.user')}
        error={baseData?.user?.message}
      >
        {getUsers?.result?.map((item) => (
          <option key={item?.id} value={item?.id || ''}>
            {item?.fullname}
          </option>
        ))}
      </Select>

      <Select
        id="category"
        label="Kategorie"
        {...register('baseData.category')}
        error={baseData?.category?.message}
      >
        {getTemplateTypes?.result?.map((item) => (
          <option key={item?.id} value={item?.id || ''}>
            {item?.name}
          </option>
        ))}
      </Select>
    </div>
  );
};
