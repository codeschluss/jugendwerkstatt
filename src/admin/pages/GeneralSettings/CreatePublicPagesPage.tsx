import { joiResolver } from '@hookform/resolvers/joi';
import { ReactElement, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useGetPageQuery } from '../../../GraphQl/graphql';
import { Accordion, FormActions } from '../../components/molecules';
import {
  DescriptionFrom,
  FormsBaseForm,
  FormsFormInputs,
} from '../../components/organisms';
import { FormsFormSchema } from '../../validations';

const CreatePublicPagesPage = (): ReactElement => {
  const { id } = useParams();

  const methods = useForm<FormsFormInputs>({
    resolver: joiResolver(FormsFormSchema),
  });

  const { data: { page = null } = {} } = useGetPageQuery({
    skip: !id,
    variables: { entity: { id } },
  });

  // const [savePage] = useSaveTemplateAdminMutation({
  //   onCompleted: () => navigate('/admin/forms/templates'),
  // });

  const { reset, handleSubmit } = methods;

  useEffect(() => {
    if (!!page) {
      reset({
        baseData: {
          name: page?.content || '',
        },
      });
    }
  }, [page, reset]);

  const handleOnSubmit = ({
    description,
    baseData: { name, category },
  }: FormsFormInputs) => console.log(description, name, category);

  return (
    <FormProvider {...methods}>
      <form className="min-h-full">
        <Accordion title="Stammdaten" open={!!id}>
          <FormsBaseForm />
        </Accordion>
        <Accordion title="Beschreibung">
          <DescriptionFrom />
        </Accordion>
        <FormActions onSubmit={handleSubmit(handleOnSubmit)} />
      </form>
    </FormProvider>
  );
};

export default CreatePublicPagesPage;
