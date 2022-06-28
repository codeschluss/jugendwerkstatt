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
  GroupCoursesForm,
  GroupCoursesInput,
} from '../../components/organisms';
import { twClsx } from '../../utils';

const GroupFormPage = (): ReactElement => {
  const navigate = useNavigate();
  const { id } = useParams();
  const methods = useForm<GroupCoursesInput>({
    mode: 'onChange',
    resolver: joiResolver(GroupFormSchema),
  });
  const {
    reset,
    control,
    clearErrors,
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
    if (id && group) {
      reset({
        name: group.name || '',
        courses: group.courses?.map((course) => ({
          name: course?.name || '',
          isActive: course?.active || false,
        })),
      });
    }
  }, [id, reset, group]);

  const handleOnSubmit = (data: GroupCoursesInput) =>
    saveGroup({
      variables: {
        entity: {
          ...(id && { id }),
          name: data.name,
          courses: data.courses.map((course, index) => ({
            name: course.name,
            active: course.isActive,
            activeOrder: index + 1,
          })),
        },
      },
    });

  return (
    <FormProvider {...methods}>
      <div className="max-w-6xl">
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
          title="Kurs"
          open={!!id}
          className={twClsx(errors.courses && 'border border-primary')}
        >
          <GroupCoursesForm
            errors={errors?.courses}
            error={errors.courses as unknown as FieldError}
            clearErrors={clearErrors}
            control={control}
            register={register}
          />
        </Accordion>
        <FormActions onSubmit={handleSubmit(handleOnSubmit)} />
      </div>
    </FormProvider>
  );
};

export default GroupFormPage;
