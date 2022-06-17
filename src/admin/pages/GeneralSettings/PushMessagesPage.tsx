import { joiResolver } from '@hookform/resolvers/joi';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useSendGlobalPushMutation } from '../../../GraphQl/graphql';
import { Accordion, FormActions, InputField } from '../../components/molecules';
import { PushMessagesPageSchema } from '../../validations/PushMessagesForm.schema';
import { PushMessagesInputs } from './PushMessages.props';

const PushMessagesPage = (): ReactElement => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<PushMessagesInputs>({
    resolver: joiResolver(PushMessagesPageSchema),
  });
  const [sendGlobalPush] = useSendGlobalPushMutation();

  const onSubmit = ({ title, message }: PushMessagesInputs) =>
    sendGlobalPush({
      variables: { message: { title: title, content: message } },
    });

  return (
    <Accordion title="Push-Nachrichten" className="max-w-3xl">
      <form className="flex flex-col mt-5 mb-10 space-y-5">
        <InputField
          id="title"
          label="Titel"
          {...register('title')}
          error={errors.title?.message}
        />

        <InputField
          id="message"
          label="Nachricht"
          {...register('message')}
          error={errors.message?.message}
        />

        <FormActions onSubmit={handleSubmit(onSubmit)} />
      </form>
    </Accordion>
  );
};

export default PushMessagesPage;
