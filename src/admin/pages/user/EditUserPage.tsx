import { joiResolver } from '@hookform/resolvers/joi';
import { ReactElement, useEffect } from 'react';
import { FieldError, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import {
  useAddRolesMutation,
  useGetRolesQuery,
  useGetUserAdminQuery,
} from '../../../GraphQl/graphql';
import { Button } from '../../components/atoms';
import { MultiSelect } from '../../components/atoms/Form/MultiSelect/MultiSelect';
import { OptionType } from '../../components/atoms/Form/MultiSelect/MultiSelect.props';
import { Accordion } from '../../components/molecules';
import { UserFormSchema } from '../../validations/UserForm.schema';
import { UserFormInputs } from './User.props';

const EditUserPage = (): ReactElement => {
  const { id } = useParams();
  const {
    reset,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormInputs>({
    resolver: joiResolver(UserFormSchema),
    defaultValues: { roles: [] },
  });
  const { data: roles } = useGetRolesQuery();
  const { data: user } = useGetUserAdminQuery({ variables: { id } });
  const [addUserRoles] = useAddRolesMutation();

  useEffect(() => {
    if (user)
      reset({
        roles: user.user?.roles?.map((role) => ({
          value: role?.id,
          label: role?.name,
        })),
      });
  }, [user, reset]);

  const handleChange = (values: OptionType[]) =>
    setValue('roles', values, { shouldValidate: true });
  const onSubmit = (data: UserFormInputs) => {
    const roles = data.roles as OptionType[];
    addUserRoles({
      variables: {
        userId: user?.user?.id || '',
        roleIds: Object.values(roles.map((role) => role.value)),
      },
    });
  };

  const roleOptions =
    roles?.roles?.result?.map((role) => ({
      label: role?.name,
      value: role?.id,
    })) || [];

  return (
    <div className="min-h-full">
      <Accordion title="Max Müller Rolle zuweisen">
        <MultiSelect
          options={roleOptions}
          defaultValue={getValues('roles')}
          isSearchable={false}
          onGetValues={handleChange}
        />
        {errors && (
          <span className="text-primary">
            {(errors.roles as FieldError)?.message}
          </span>
        )}
        <Button className="mt-6" onClick={handleSubmit(onSubmit)}>
          Speichern
        </Button>
      </Accordion>
    </div>
  );
};

export default EditUserPage;
