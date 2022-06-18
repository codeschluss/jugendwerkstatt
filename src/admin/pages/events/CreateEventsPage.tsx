import { ReactElement, useState } from 'react';
import {
  FieldArrayWithId,
  FormProvider,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import {
  Accordion,
  EventImagePreview,
  FormActions,
  UploadField,
} from '../../components/molecules';
import {
  AddressForm,
  BaseDataForm,
  DescriptionFrom,
  EventsFormInputs,
  SchedulesForm,
} from '../../components/organisms';
import {
  useGetEventAdminQuery,
  useSaveEventMutation,
} from '../../../GraphQl/graphql';
import { Button } from '../../components/atoms';

const CreateEventsPage = (): ReactElement => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [file, setFile] = useState<FieldArrayWithId<
    EventsFormInputs,
    'files',
    'id'
  > | null>(null);

  const { data: result } = useGetEventAdminQuery({
    variables: { entity: { id } },
    skip: !id,
  });

  const [saveEvent] = useSaveEventMutation({
    onCompleted: () => navigate('/admin/events'),
  });

  const methods = useForm<EventsFormInputs>({
    // resolver: joiResolver(EventsFormSchema),
    // mode: 'onChange',
  });

  const { trigger, handleSubmit, register, control } = methods;

  const { fields, append, remove } = useFieldArray({
    name: 'files',
    control,
  });

  const handleOnSubmit = ({
    baseData,
    address,
    description,
    files,
  }: EventsFormInputs) => {
    console.log('handleOnSubmit', files);
    saveEvent({
      variables: {
        entity: {
          address,
          description,
          name: baseData?.name,
          organizer: { id: baseData?.organizer },
          category: { id: baseData?.category },
          ...(!!result && { id: result?.getEvent?.id }),
        },
      },
    });
  };

  const handleTrigger = () => trigger();

  const handleSetFile =
    (item: FieldArrayWithId<EventsFormInputs, 'files', 'id'>) => () => {
      console.log('item', item);
      setFile(item);
    };

  const handleAppend = (file: FileList) => {
    append({ file: file || undefined });
  };

  const handleRemoveImage = (id: string) => {
    remove(fields.findIndex((field) => field.id === id));
    setFile(null);
  };

  // useEffect(() => {
  //   if (!!result) {
  //     reset({});
  //   }
  // }, [result, reset]);

  return (
    <FormProvider {...methods}>
      <form className="min-h-full">
        <Accordion title="Stammdaten" open={!!id}>
          <BaseDataForm />
        </Accordion>
        <Accordion title="Adresse">
          <AddressForm />
        </Accordion>
        <Accordion title="Beschreibung">
          <DescriptionFrom />
        </Accordion>
        <Accordion
          title="Bilder"
          showSide
          sideClassName="w-auto"
          sideContent={
            file && (
              <EventImagePreview
                onRemoveImage={handleRemoveImage}
                file={file}
              />
            )
          }
        >
          <div className="flex items-start justify-start">
            {fields.map((item, index) => (
              <UploadField
                key={index}
                preview
                handleShow={handleSetFile(item)}
                src={URL.createObjectURL(item.file[0])}
                id={`files.${index}.file`}
                {...register(`files.${index}.file`)}
              />
            ))}

            <UploadField handleAppend={handleAppend} />
          </div>
          <Button type="button" className="mt-6" onClick={handleTrigger}>
            Speichern
          </Button>
        </Accordion>

        <SchedulesForm />

        <FormActions onSubmit={handleSubmit(handleOnSubmit)} />
      </form>
    </FormProvider>
  );
};

export default CreateEventsPage;
