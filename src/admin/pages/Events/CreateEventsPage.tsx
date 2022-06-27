import { ReactElement, useState } from 'react';
import {
  FieldArrayWithId,
  FormProvider,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { joiResolver } from '@hookform/resolvers/joi';

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
  ScheduleInputs,
  SchedulesForm,
} from '../../components/organisms';
import {
  useGetEventAdminQuery,
  useSaveEventMutation,
} from '../../../GraphQl/graphql';
import { EventsFormSchema } from '../../validations';
import dayjs from 'dayjs';
import { fileObject } from '../../utils';

const CreateEventsPage = (): ReactElement => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [file, setFile] = useState<FieldArrayWithId<
    EventsFormInputs,
    'files',
    'id'
  > | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [schedules, setSchedules] = useState<ScheduleInputs[] | []>([]);

  const { data: result } = useGetEventAdminQuery({
    variables: { entity: { id } },
    skip: !id,
  });

  const [saveEvent] = useSaveEventMutation({
    onCompleted: () => navigate('/admin/events'),
  });

  const methods = useForm<EventsFormInputs>({
    resolver: joiResolver(EventsFormSchema),
    defaultValues: {
      schedule: {
        start_date: dayjs().startOf('date').toDate(),
        end_date: dayjs().startOf('date').toDate(),
        end_repeat: dayjs().startOf('date').toDate(),
        start_hour: dayjs().startOf('h').toDate(),
        end_hour: dayjs().startOf('h').toDate(),
      },
      files: [{ file: null }],
    },
  });

  const { formState, handleSubmit, register, control } = methods;

  const { fields, append, remove } = useFieldArray({
    name: 'files',
    control,
  });

  const handleOnSubmit = async ({
    baseData: { name, category, organizer },
    address,
    description,
  }: EventsFormInputs) => {
    let images: { name: string; mimeType: string; base64: string }[] = [];

    for (const field of fields) {
      if (!!field.file) {
        const object = await fileObject(field.file[0]);
        images.push(object);
      }
    }

    saveEvent({
      variables: {
        entity: {
          name,
          images,
          address,
          schedules,
          description,
          category: { id: category },
          organizer: { id: organizer },
          ...(!!imageFile && { titleImage: await fileObject(imageFile) }),
          ...(!!result && { id: result?.getEvent?.id }),
        },
      },
    });
  };

  console.log('errors', formState?.errors.files);

  const handleAppend = () => append({ file: null });

  const handleSetFile =
    (item: FieldArrayWithId<EventsFormInputs, 'files', 'id'>) => () => {
      setFile(item);
    };

  const handleRemoveImage = (id: string) => {
    remove(fields.findIndex((field) => field.id === id));
    setFile(null);
  };

  const onHandle = (file: File | null) => setImageFile(file);

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
                id={file.id}
                file={file.file?.[0] || null}
                onHandle={onHandle}
                onRemoveImage={handleRemoveImage}
              />
            )
          }
        >
          <div className="flex flex-wrap items-start justify-start">
            {fields.map((item, index) => (
              <UploadField
                preview
                key={index}
                id={`files.${index}.file`}
                handleAppend={handleAppend}
                handleShow={handleSetFile(item)}
                {...register(`files.${index}.file`)}
                error={formState.errors.files?.[index]?.file?.message}
                // {...(!!item.file && {
                //   src: URL.createObjectURL(item.file),
                // })}
              />
            ))}

            {/* <UploadField handleAppend={handleAppend} /> */}
          </div>
        </Accordion>

        <SchedulesForm setSchedules={setSchedules} schedules={schedules} />
        <FormActions onSubmit={handleSubmit(handleOnSubmit)} />
      </form>
    </FormProvider>
  );
};

export default CreateEventsPage;
