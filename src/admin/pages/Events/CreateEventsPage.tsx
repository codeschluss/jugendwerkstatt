import { ReactElement, useEffect, useState } from "react";
import {
  FieldArrayWithId,
  FormProvider,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { joiResolver } from "@hookform/resolvers/joi";

import {
  Accordion,
  EventImagePreview,
  FormActions,
  UploadField,
} from "../../components/molecules";
import {
  AddressForm,
  BaseDataForm,
  DescriptionFrom,
  EventsFormInputs,
  ScheduleInputs,
  SchedulesForm,
} from "../../components/organisms";
import {
  useGetEventAdminQuery,
  useSaveEventMutation,
} from "../../../GraphQl/graphql";
import { EventsFormSchema } from "../../validations";
import dayjs from "dayjs";
import { fileObject } from "../../utils";

// const base64ImageToBlob = (str: string, type: string, fileName: string) => {
//   // decode base64
//   const imageContent = atob(str);

//   // create an ArrayBuffer and a view (as unsigned 8-bit)
//   const buffer = new ArrayBuffer(imageContent.length);
//   const view = new Uint8Array(buffer);

//   // fill the view, using the decoded base64
//   for (var n = 0; n < imageContent.length; n++) {
//     view[n] = imageContent.charCodeAt(n);
//   }

//   // convert ArrayBuffer to Blob
//   const blob = new Blob([buffer], { type });
//   const file = new File([blob], fileName, { type });

//   return file;
// };

const CreateEventsPage = (): ReactElement => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [file, setFile] = useState<FieldArrayWithId<
    EventsFormInputs,
    "files",
    "id"
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
    onCompleted: () => navigate("/admin/events"),
  });

  const methods = useForm<EventsFormInputs>({
    resolver: joiResolver(EventsFormSchema),
    defaultValues: {
      schedule: {
        start_date: dayjs().startOf("date").toDate(),
        end_date: dayjs().startOf("date").toDate(),
        end_repeat: dayjs().startOf("date").toDate(),
        start_hour: dayjs().startOf("h").toDate(),
        end_hour: dayjs().startOf("h").toDate(),
      },
      files: [{ file: null }],
    },
  });

  const { formState, handleSubmit, register, reset, control } = methods;

  const { fields, append, remove, update } = useFieldArray({
    name: "files",
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

    // console.log(
    //   "first",
    //   base64ImageToBlob(images?.[0].base64, images[0].mimeType, images[0].name)
    // );

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
    (item: FieldArrayWithId<EventsFormInputs, "files", "id">) => () => {
      setFile(item);
    };

  const handleRemoveImage = (id: string) => {
    remove(fields.findIndex((field) => field.id === id));
    setFile(null);
  };

  const onHandle = (data: { file: File; id: string } | null) => {
    setImageFile(data);
  };
  const stringToDate = (value: string) => {
    return dayjs(value, "YYYY-MM-DDTHH:mmZ[Z]").toDate();
  };

  useEffect(() => {
    if (!!getEvent && !imageFile) {
      const start_date = stringToDate(getEvent.schedules?.at(-1)?.startDate);
      const end_date = stringToDate(getEvent.schedules?.at(-1)?.endDate);
      const end_repeat = stringToDate(getEvent.schedules?.[0]?.startDate);

      const repeat = ["week", "month", "year"].find(
        (i) =>
          getEvent.schedules?.length ===
          dayjs(end_repeat).diff(start_date, i as "week" | "month" | "year") + 2
      );

      reset({
        baseData: {
          name: getEvent?.name || "",
          category: getEvent?.category?.id || "",
          organizer: getEvent?.organizer?.id || "",
        },
        description: getEvent?.description || "",
        address: {
          houseNumber: getEvent?.address?.houseNumber || "",
          place: getEvent?.address?.place || "",
          postalCode: getEvent?.address?.postalCode || "",
          street: getEvent?.address?.street || "",
        },
        schedule: {
          start_date,
          end_date,
          end_repeat,
          start_hour: dayjs(start_date).startOf("m").toDate(),
          end_hour: dayjs(end_date).startOf("m").toDate(),
          repeat: repeat as "week" | "month" | "year",
        },
      });
      // setImageFile();
    }
  }, [getEvent, imageFile, reset, schedules.length]);

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
                error={formState.errors.files?.[index]?.file?.message}
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
