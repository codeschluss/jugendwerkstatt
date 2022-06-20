import { ReactElement, useEffect } from 'react';
import { joiResolver } from '@hookform/resolvers/joi';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import { Accordion, FormActions, InputField } from '../../components/molecules';
import { CategoryFormInputs } from '../../components/organisms';
import { CategoryFormSchema } from '../../validations';
import {
  useGetLinkCategoryQuery,
  useSaveLinkCategoryMutation,
} from '../../../GraphQl/graphql';
import { gqlVar } from '../../utils';

const CreateMediaCategoriesPage = (): ReactElement => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    reset,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormInputs>({
    resolver: joiResolver(CategoryFormSchema),
  });

  const { data: { getLinkCategory = null } = {} } = useGetLinkCategoryQuery({
    variables: { entity: { id } },
    skip: !id,
  });

  const [saveLinkCategory] = useSaveLinkCategoryMutation({
    onCompleted: () => navigate('/admin/medias/categories'),
  });

  const handleOnSubmit = ({ name }: CategoryFormInputs) => {
    saveLinkCategory(
      gqlVar({ name, ...(!!getLinkCategory && { id: getLinkCategory?.id }) })
    );
  };

  useEffect(() => {
    if (!!getLinkCategory) {
      setValue('name', getLinkCategory?.name || '');
    }
  }, [getLinkCategory, setValue]);

  return (
    <form className="min-h-full">
      <Accordion title="Neue Kategorie hinzufügen" open={!!id}>
        <InputField
          id="name"
          label="Kategoriename"
          placeholder="Was kommt nach der Schule"
          {...register('name')}
          error={errors?.name?.message}
        />
      </Accordion>
      <FormActions onSubmit={handleSubmit(handleOnSubmit)} />
    </form>
  );
};

export default CreateMediaCategoriesPage;
