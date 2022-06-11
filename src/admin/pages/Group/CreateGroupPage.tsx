import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { Panel } from '../../components/atoms';
import { PanelBody } from '../../components/atoms/Panel/PanelBody';
import { InputField } from '../../components/molecules';
import { GroupFormSchema } from '../../validations/GroupForm.schema';
import { GroupFormInputs } from './GroupForm.props';

const CreateGroupPage = (): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: {
      errors: { name },
    },
  } = useForm<GroupFormInputs>({
    resolver: joiResolver(GroupFormSchema),
  });

  const onSubmit = (data: GroupFormInputs) => console.log(data);

  return (
    <Panel
      onSubmit={handleSubmit(onSubmit)}
      title="Stammdaten"
      className="max-w-4xl"
    >
      <PanelBody>
        <InputField
          id="name"
          label="Gruppenname"
          {...register('name')}
          error={name?.message}
        />
      </PanelBody>
    </Panel>
  );
};

export default CreateGroupPage;
