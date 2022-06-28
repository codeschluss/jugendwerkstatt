import { ReactElement, useEffect, useState } from 'react';
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
import { fileObject, twClsx } from '../../utils';

const CreateEventsPage = (): ReactElement => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [file, setFile] = useState<FieldArrayWithId<
    EventsFormInputs,
    'files',
    'id'
  > | null>(null);

  const [imageFile, setImageFile] = useState<{ file: File; id: string } | null>(
    null
  );

  const [schedules, setSchedules] = useState<ScheduleInputs[] | []>([]);

  const { data: { getEvent = null } = {} } = useGetEventAdminQuery({
    variables: { entity: { id } },
    skip: !id,
  });

  const [saveEvent, { loading }] = useSaveEventMutation({
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

  const {
    formState: { isSubmitted, errors },
    handleSubmit,
    register,
    reset,
    control,
  } = methods;

  console.log(errors);

  const { fields, append, remove, update } = useFieldArray({
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
          ...(!!imageFile?.file && {
            titleImage: await fileObject(imageFile.file),
          }),
          ...(!!getEvent && { id: getEvent?.id }),
        },
      },
    });
  };

  const handleAppend = (index: number, file: FileList | null) => {
    update(index, { file });
    append({ file: null });
  };

  const handleSetFile =
    (item: FieldArrayWithId<EventsFormInputs, 'files', 'id'>) => () => {
      setFile(item);
    };

  const handleRemoveImage = (id: string) => {
    remove(fields.findIndex((field) => field.id === id));
    setFile(null);
  };

  const onHandle = (data: { file: File; id: string } | null) => {
    setImageFile(data);
  };

  console.log('result', getEvent?.images);

  useEffect(() => {
    if (!!getEvent) {
      reset({
        baseData: {
          name: getEvent?.name || '',
          category: getEvent?.category?.id || '',
          organizer: getEvent?.organizer?.id || '',
        },
        description: getEvent?.description || '',
        address: {
          houseNumber: getEvent?.address?.houseNumber || '',
          place: getEvent?.address?.place || '',
          postalCode: getEvent?.address?.postalCode || '',
          street: getEvent?.address?.street || '',
        },
      });
      // setImageFile();
    }
  }, [getEvent, reset]);

  return (
    <FormProvider {...methods}>
      <form className="min-h-full">
        <Accordion
          title="Stammdaten"
          open={!!id}
          className={twClsx(errors.baseData && 'border border-primary')}
        >
          <BaseDataForm />
        </Accordion>
        <Accordion
          title="Adresse"
          className={twClsx(errors.address && 'border border-primary')}
        >
          <AddressForm />
        </Accordion>
        <Accordion
          title="Beschreibung"
          className={twClsx(errors.description && 'border border-primary')}
        >
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
                isTitleBild={imageFile?.id === file.id}
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
                index={index}
                id={`files.${index}.file`}
                handleAppend={handleAppend}
                handleShow={handleSetFile(item)}
                {...register(`files.${index}.file`)}
                error={errors.files?.[index]?.file?.message}
                {...(!!item.file && {
                  src: URL.createObjectURL(item.file[0]),
                })}
              />
            ))}
          </div>
        </Accordion>

        <SchedulesForm setSchedules={setSchedules} schedules={schedules} />
        <FormActions
          loading={loading}
          onSubmit={handleSubmit(handleOnSubmit)}
        />
      </form>
    </FormProvider>
  );
};

export default CreateEventsPage;
