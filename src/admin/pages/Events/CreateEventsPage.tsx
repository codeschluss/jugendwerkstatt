import { ReactElement, useState } from 'react';
import { encode } from 'base64-arraybuffer';
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
import { joiResolver } from '@hookform/resolvers/joi';
import { EventsFormSchema } from '../../validations';
import dayjs from 'dayjs';

const obj = async (file: File) => ({
  name: file?.name,
  mimeType: file?.type,
  ...(!!file && {
    base64: encode(await file.arrayBuffer()),
  }),
});

const CreateEventsPage = (): ReactElement => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [file, setFile] = useState<FieldArrayWithId<
    EventsFormInputs,
    'files',
    'id'
  > | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

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
    defaultValues: {
      schedule: {
        start_date: dayjs().startOf('date').toDate(),
        end_date: dayjs().startOf('date').toDate(),
        end_repeat: dayjs().startOf('date').toDate(),
        start_hour: dayjs().startOf('h').toDate(),
        end_hour: dayjs().startOf('h').toDate(),
      },
    },
  });

  const {
    formState: { errors },
    trigger,
    handleSubmit,
    register,
    control,
  } = methods;

  const { fields, append, remove } = useFieldArray({
    name: 'files',
    control,
  });

  const handleOnSubmit = async ({
    baseData,
    address,
    description,
  }: EventsFormInputs) => {
    let images: { name: string; mimeType: string; base64: string }[] = [];

    for (const field of fields) {
      const object = await obj(field.file[0]);
      images.push(object);
    }

    console.log({
      address,
      description,
      images,
      ...(!!imageFile && { titleImage: await obj(imageFile) }),
      name: baseData?.name,
      organizer: { id: baseData?.organizer },
      category: { id: baseData?.category },
      ...(!!result && { id: result?.getEvent?.id }),
    });

    saveEvent({
      variables: {
        entity: {
          address,
          description,
          images,
          ...(!!imageFile && { titleImage: await obj(imageFile) }),
          name: baseData?.name,
          organizer: { id: baseData?.organizer },
          category: { id: baseData?.category },
          ...(!!result && { id: result?.getEvent?.id }),
        },
      },
    });
  };

  console.log(errors);

  const handleTrigger = () => trigger();

  const handleSetFile =
    (item: FieldArrayWithId<EventsFormInputs, 'files', 'id'>) => () => {
      setFile(item);
    };

  const handleAppend = (file: FileList) => {
    append({ file: file || undefined });
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
                onHandle={onHandle}
                onRemoveImage={handleRemoveImage}
                file={file.file[0]}
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
