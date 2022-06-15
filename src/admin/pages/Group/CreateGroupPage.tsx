import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { Accordion, FormActions, InputField } from '../../components/molecules';
import { GroupFormSchema } from '../../validations/GroupForm.schema';
import { GroupFormInputs } from './GroupForm.props';
import { useSaveGroupMutation } from '../../../GraphQl/graphql';
import { useNavigate } from 'react-router-dom';

const CreateGroupPage = (): ReactElement => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors: { name },
    },
  } = useForm<GroupFormInputs>({
    resolver: joiResolver(GroupFormSchema),
  });
  const [saveGroup] = useSaveGroupMutation({
    onCompleted: () => navigate('/admin/groups'),
  });

  const handleReset = () => reset();
  const onSubmit = (data: GroupFormInputs) =>
    saveGroup({ variables: { groupEntity: { name: data.name } } });

  return (
    <Accordion title="Stammdaten" className="max-w-4xl">
      <InputField
        id="name"
        label="Gruppenname"
        {...register('name')}
        error={name?.message}
      />
      <FormActions onReset={handleReset} onSubmit={handleSubmit(onSubmit)} />
    </Accordion>
  );
};

export default CreateGroupPage;
