import { joiResolver } from '@hookform/resolvers/joi';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { SketchPicker } from 'react-color';

import { Button } from '../../components/atoms';
import { Accordion, InputField } from '../../components/molecules';
import { VacancyCategoryFormInputs } from '../../components/organisms';
import { VacancyCategoryFormSchema } from '../../validations';

const CreateVacancyCategoriesPage = (): ReactElement => {
  const {
    watch,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VacancyCategoryFormInputs>({
    resolver: joiResolver(VacancyCategoryFormSchema),
  });

  const handleOnSubmit = (data: VacancyCategoryFormInputs) => {
    console.log('data', data);
  };

  return (
    <form className="min-h-full" onSubmit={handleSubmit(handleOnSubmit)}>
      <Accordion
        title="Kategorie"
        showSide
        sideClassName="bg-transparent"
        sideContent={
          <div className="p-3 bg-white w-fit">
            <SketchPicker
              onChange={(data: any) => setValue('color', data.hex)}
              color={watch('color')}
            />
          </div>
        }
      >
        <div className="flex flex-col justify-start w-full space-y-6">
          <InputField
            id="category"
            label="Kategoriename"
            placeholder="Metallhandwerk"
            {...register('category')}
            error={errors?.category?.message}
          />
          <InputField
            id="color"
            label="Farbe"
            placeholder="#FFFFFF"
            {...register('color')}
            error={errors?.color?.message}
          />
        </div>
        <Button className="mt-6">Speichern</Button>
      </Accordion>
    </form>
  );
};

export default CreateVacancyCategoriesPage;
