import { ReactElement, useEffect } from 'react';
import { FieldError, FormProvider, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { Accordion, FormActions, InputField } from '../../components/molecules';
import { GroupFormSchema } from '../../validations/GroupForm.schema';
import {
  useGetGroupQuery,
  useSaveGroupMutation,
} from '../../../GraphQl/graphql';
import { useNavigate, useParams } from 'react-router-dom';
import {
  DescriptionFrom,
  GroupCoursesForm,
  GroupCoursesInput,
} from '../../components/organisms';
import { twClsx } from '../../utils';
import { GroupFormInputs } from './GroupForm.props';

const GroupFormPage = (): ReactElement => {
  const navigate = useNavigate();
  const { id } = useParams();

  const methods = useForm<GroupFormInputs>({
    mode: 'onChange',
    resolver: joiResolver(GroupFormSchema),
  });
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const { data: { group = null } = {} } = useGetGroupQuery({
    variables: { entity: { id } },
    skip: !id,
  });
  const [saveGroup] = useSaveGroupMutation({
    onCompleted: () => navigate('/admin/groups'),
  });

  useEffect(() => {
    if (id && group)
      reset({
        name: group.name || '',
        description: group.description || '',
      });
  }, [id, group, reset]);

  const onSubmit = ({ name, description }: GroupFormInputs) =>
    saveGroup({
      variables: {
        entity: {
          ...(id && { id }),
          name,
          description,
        },
      },
    });

  return (
    <FormProvider {...methods}>
      <form className="max-w-6xl">
        <Accordion
          title="Stammdaten"
          open={!!id}
          className={twClsx(errors.name && 'border border-primary')}
        >
          <InputField
            id="name"
            label="Gruppenname"
            {...register('name')}
            error={errors.name?.message}
          />
        </Accordion>

        <Accordion
          title="Beschreibung"
          className={twClsx(errors.description && 'border border-primary')}
        >
          <DescriptionFrom />
        </Accordion>

        <FormActions onSubmit={handleSubmit(onSubmit)} />
      </form>
    </FormProvider>
  );
};

export default GroupFormPage;
