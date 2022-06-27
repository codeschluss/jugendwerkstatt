import { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { useGetTemplateTypesAdminQuery } from '../../../../GraphQl/graphql';
import { Select } from '../../atoms';
import { InputField } from '../../molecules';
import { FormsFormInputs } from './Forms.types';

export const FormsBaseForm = (): ReactElement => {
  const { data: { getTemplateTypes = null } = {} } =
    useGetTemplateTypesAdminQuery();

  const {
    register,
    formState: {
      errors: { baseData },
    },
  } = useFormContext<FormsFormInputs>();

  return (
    <div className="flex flex-col justify-start w-full space-y-6">
      <InputField
        id="name"
        label="Dateiname"
        {...register('baseData.name')}
        placeholder="Vorlage 4"
        error={baseData?.name?.message}
      />

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
