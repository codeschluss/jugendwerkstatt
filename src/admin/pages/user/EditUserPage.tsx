import { joiResolver } from '@hookform/resolvers/joi';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useGetRolesQuery } from '../../../GraphQl/graphql';
import { Button, Select } from '../../components/atoms';
import { Accordion } from '../../components/molecules';
import { UserFormSchema } from '../../validations/UserForm.schema';
import { UserFormInputs } from './User.props';

const EditUserPage = (): ReactElement => {
  // AddRole Mutation will be Added later addRole(userId, roleId)
  const {
    register,
    handleSubmit,
    formState: {
      errors: { role },
    },
  } = useForm<UserFormInputs>({
    resolver: joiResolver(UserFormSchema),
  });
  const { data } = useGetRolesQuery();

  const onSubmit = (data: UserFormInputs) => console.log(data);

  return (
    <div className="min-h-full">
      <Accordion title="Max Müller Rolle zuweisen">
        <Select label="Rolle" {...register('role')} error={role?.message}>
          <option value="" selected disabled>
            Wähle eine Rolle
          </option>
          {data?.roles?.result &&
            data.roles.result.map((role) => (
              <option value={role?.id || 1}>{role?.name}</option>
            ))}
        </Select>
        <Button className="mt-6" onClick={handleSubmit(onSubmit)}>
          Speichern
        </Button>
      </Accordion>
    </div>
  );
};

export default EditUserPage;
