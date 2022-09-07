import { ReactElement, useEffect } from 'react';
import { joiResolver } from '@hookform/resolvers/joi';
import { FieldError, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useGetRolesQuery,
  useGetUserAdminQuery,
  useSaveUserMutation,
} from '../../../GraphQl/graphql';
import { MultiSelect } from '../../components/atoms/Form/MultiSelect/MultiSelect';
import { OptionType } from '../../components/atoms/Form/MultiSelect/MultiSelect.props';
import { Accordion, FormActions } from '../../components/molecules';
import { UserFormSchema } from '../../validations/UserForm.schema';
import { UserFormInputs } from './User.props';

const EditUserPage = (): ReactElement => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    reset,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormInputs>({
    resolver: joiResolver(UserFormSchema),
    defaultValues: { roles: [{ label: '', value: '' }] },
  });
  const { data: roles } = useGetRolesQuery();
  const { data: { user = null } = {}, loading } = useGetUserAdminQuery({
    fetchPolicy: 'cache-and-network',
    variables: { id },
  });
  const [saveUser] = useSaveUserMutation({
    onCompleted: () => navigate('/admin/users'),
  });

  useEffect(() => {
    if (id)
      reset({
        roles: user?.roles?.map((role) => ({
          value: role?.id || '',
          label: role?.name || '',
        })),
      });
  }, [id, reset, user?.roles]);

  const handleChange = (values: OptionType[]) =>
    setValue('roles', values, { shouldValidate: true });
  const onSubmit = (data: UserFormInputs) => {
    const roles = data.roles as OptionType[];
    saveUser({
      variables: {
        entity: {
          id,
          roles: roles.map(({ value }) => ({
            id: value,
          })),
        },
      },
    });
  };

  const roleOptions =
    roles?.roles?.result?.map((role) => ({
      label: role?.name,
      value: role?.id,
    })) || [];

  if (loading) return <p>loading...</p>;

  return (
    <Accordion title={`${user?.fullname} Rolle zuweisen`} open>
      <form className="min-h-full">
        {getValues('roles') && (
          <>
            <MultiSelect
              options={roleOptions}
              defaultValue={getValues('roles')}
              isSearchable={false}
              onGetValues={handleChange}
            />
            {errors && (
              <span className="text-primary">
                {(errors.roles as unknown as FieldError)?.message}
              </span>
            )}
          </>
        )}
        <FormActions onSubmit={handleSubmit(onSubmit)} />
      </form>
    </Accordion>
  );
};

export default EditUserPage;
