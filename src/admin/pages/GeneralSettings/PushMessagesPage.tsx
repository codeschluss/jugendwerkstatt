import { joiResolver } from '@hookform/resolvers/joi';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import {
  NotificationType,
  useSendGlobalPushMutation,
} from '../../../GraphQl/graphql';
import { SnackbarTypeEnum } from '../../../interfaces/enums/SnackbarType.enum';
import { snackbarStore } from '../../../store';
import { Accordion, FormActions, InputField } from '../../components/molecules';
import { twClsx } from '../../utils';
import { PushMessagesPageSchema } from '../../validations/PushMessagesForm.schema';
import { PushMessagesInputs } from './PushMessages.props';

const PushMessagesPage = (): ReactElement => {
  const { handleOpen } = snackbarStore();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PushMessagesInputs>({
    mode: 'onChange',
    resolver: joiResolver(PushMessagesPageSchema),
  });
  const [sendGlobalPush] = useSendGlobalPushMutation({
    onCompleted: () => {
      reset();
      handleOpen({
        type: SnackbarTypeEnum.SUCCESS,
        message: 'Push-Benachrichtigung erfolgreich gesendet',
      });
    },
  });

  const handleOnSubmit = ({ title, message: content }: PushMessagesInputs) =>
    sendGlobalPush({
      variables: { message: { title, content, type: NotificationType.Global } },
    });

  return (
    <form>
      <Accordion
        title="Push-Nachrichten"
        className={twClsx(
          (errors.title || errors.message) && 'border border-primary'
        )}
      >
        <div className="space-y-5">
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
        </div>
      </Accordion>

      <FormActions onSubmit={handleSubmit(handleOnSubmit)} />
    </form>
  );
};

export default PushMessagesPage;
