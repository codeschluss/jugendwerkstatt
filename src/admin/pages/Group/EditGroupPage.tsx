import { ReactElement, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { Panel } from '../../components/atoms';
import { PanelBody } from '../../components/atoms/Panel/PanelBody';
import { InputField } from '../../components/molecules';
import { GroupFormSchema } from '../../validations/GroupForm.schema';
import { GroupFormInputs } from './GroupForm.props';
import { useParams } from 'react-router-dom';
import { useGetGroupQuery } from '../../../GraphQl/graphql';

const CreateGroupPage = (): ReactElement => {
  const { id } = useParams();
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

  const { data } = useGetGroupQuery({ variables: { groupId: id } });

  useEffect(() => {
    if (id) reset({ name: data?.group?.name || '' });
  }, [id, reset, data?.group?.name]);

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
