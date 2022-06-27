import { joiResolver } from '@hookform/resolvers/joi';
import { ReactElement, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useGetUserTemplateAdminQuery,
  useSaveUserTemplateAdminMutation,
} from '../../../GraphQl/graphql';
import { Accordion, FormActions } from '../../components/molecules';
import {
  DescriptionFrom,
  UserFormsForm,
  UserFormsFormInputs,
} from '../../components/organisms';
import { gqlVar } from '../../utils';
import { UserFormsFormSchema } from '../../validations';

const CreateUserFormsPage = (): ReactElement => {
  const { id } = useParams();
  const navigate = useNavigate();

  const methods = useForm<UserFormsFormInputs>({
    resolver: joiResolver(UserFormsFormSchema),
  });

  const { reset, handleSubmit } = methods;

  const { data: { getUserTemplate = null } = {} } =
    useGetUserTemplateAdminQuery({
      variables: { entity: { id } },
      skip: !id,
    });

  const [saveUserTemplate] = useSaveUserTemplateAdminMutation({
    onCompleted: () => navigate('/admin/forms/user-templates'),
  });

  const handleOnSubmit = ({
    description,
    baseData: { name, category, user },
  }: UserFormsFormInputs) => {
    saveUserTemplate(
      gqlVar({
        name,
        content: description,
        templateType: { id: category },
        user: { id: user },
        ...(!!getUserTemplate && { id: getUserTemplate?.id }),
      })
    );
  };

  useEffect(() => {
    if (!!getUserTemplate) {
      reset({
        baseData: {
          name: getUserTemplate?.name || '',
          category: getUserTemplate?.templateType?.id || '',
          user: getUserTemplate?.user?.id || '',
        },
        description: getUserTemplate?.content || '',
      });
    }
  }, [getUserTemplate, reset]);

  return (
    <FormProvider {...methods}>
      <form className="min-h-full">
        <Accordion title="Stammdaten" open={!!id}>
          <UserFormsForm />
        </Accordion>
        <Accordion title="Beschreibung">
          <DescriptionFrom />
        </Accordion>
        <FormActions onSubmit={handleSubmit(handleOnSubmit)} />
      </form>
    </FormProvider>
  );
};

export default CreateUserFormsPage;
