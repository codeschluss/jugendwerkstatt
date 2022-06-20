import { ReactElement, useEffect } from 'react';
import { joiResolver } from '@hookform/resolvers/joi';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import { Accordion, FormActions, InputField } from '../../components/molecules';
import { CategoryFormInputs } from '../../components/organisms';
import { CategoryFormSchema } from '../../validations';
import {
  useGetEventCategoryQuery,
  useSaveEventCategoryMutation,
} from '../../../GraphQl/graphql';
import { gqlVar } from '../../utils';

const CreateCategoriesPage = (): ReactElement => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormInputs>({
    resolver: joiResolver(CategoryFormSchema),
  });

  const { data: { category = null } = {} } = useGetEventCategoryQuery({
    variables: { entity: { id } },
    skip: !id,
  });

  const [saveEventCategory] = useSaveEventCategoryMutation({
    onCompleted: () => navigate('/admin/events/categories'),
  });

  const handleOnSubmit = ({ name }: CategoryFormInputs) => {
    saveEventCategory(
      gqlVar({ name, ...(!!category && { id: category?.id }) })
    );
  };

  useEffect(() => {
    if (!!category) {
      setValue('name', category?.name || '');
    }
  }, [category, setValue]);

  return (
    <form className="min-h-full">
      <Accordion open={!!id} title="Kategorie">
        <InputField
          id="name"
          label="Kategoriename"
          placeholder="Metallhandwerk"
          {...register('name')}
          error={errors?.name?.message}
        />
      </Accordion>
      <FormActions onSubmit={handleSubmit(handleOnSubmit)} />
    </form>
  );
};

export default CreateCategoriesPage;
