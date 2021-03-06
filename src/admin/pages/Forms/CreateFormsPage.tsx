import { joiResolver } from '@hookform/resolvers/joi';
import { ReactElement, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useGetTemplateAdminQuery,
  useSaveTemplateAdminMutation,
} from '../../../GraphQl/graphql';
import { Accordion, FormActions } from '../../components/molecules';
import {
  DescriptionFrom,
  FormsBaseForm,
  FormsFormInputs,
} from '../../components/organisms';
import { gqlVar, twClsx } from '../../utils';
import { FormsFormSchema } from '../../validations';

const CreateFormsPage = (): ReactElement => {
  const { id } = useParams();
  const navigate = useNavigate();

  const methods = useForm<FormsFormInputs>({
    resolver: joiResolver(FormsFormSchema),
  });

  const {
    reset,
    handleSubmit,
    formState: { errors },
  } = methods;

  const { data: { getTemplate = null } = {} } = useGetTemplateAdminQuery({
    variables: { entity: { id } },
    skip: !id,
  });

  const [saveTemplate] = useSaveTemplateAdminMutation({
    onCompleted: () => navigate('/admin/forms/templates'),
  });

  const handleOnSubmit = ({
    description,
    baseData: { name, category },
  }: FormsFormInputs) => {
    saveTemplate(
      gqlVar({
        name,
        content: description,
        templateType: { id: category },
        ...(!!getTemplate && { id: getTemplate?.id }),
      })
    );
  };

  useEffect(() => {
    if (!!getTemplate) {
      reset({
        baseData: {
          name: getTemplate?.name || '',
          category: getTemplate?.templateType?.id || '',
        },
        description: getTemplate?.content || '',
      });
    }
  }, [getTemplate, reset]);

  return (
    <FormProvider {...methods}>
      <form className="min-h-full">
        <Accordion
          title="Stammdaten"
          open={!!id}
          className={twClsx(errors.baseData && 'border border-primary')}
        >
          <FormsBaseForm />
        </Accordion>
        <Accordion
          title="Beschreibung"
          className={twClsx(errors.description && 'border border-primary')}
        >
          <DescriptionFrom />
        </Accordion>
        <FormActions onSubmit={handleSubmit(handleOnSubmit)} />
      </form>
    </FormProvider>
  );
};

export default CreateFormsPage;
