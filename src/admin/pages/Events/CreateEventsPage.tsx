import { joiResolver } from "@hookform/resolvers/joi";
import { ReactElement, useEffect, useState } from "react";
import { FieldArrayWithId, FormProvider, useFieldArray, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import dayjs from "dayjs";
import { useGetEventAdminQuery, useSaveEventMutation } from "../../../GraphQl/graphql";
import { Accordion, EventImagePreview, FormActions, UploadField } from "../../components/molecules";
import {
  AddressForm,
  BaseDataForm,
  DescriptionFrom,
  EventsFormInputs,
  ScheduleInputs,
  SchedulesForm
} from "../../components/organisms";
import { base64ImageToFile, fileObject, twClsx } from "../../utils";
import { EventsFormSchema } from "../../validations";

const CreateEventsPage = (): ReactElement => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [file, setFile] = useState<FieldArrayWithId<EventsFormInputs, "files", "id"> | null>(
        null,
    );

    const [imageFile, setImageFile] = useState<{ file: File; id: string } | null>(null);
    const [schedules, setSchedules] = useState<ScheduleInputs[] | []>([]);

    const { data: { getEvent = null } = {}, refetch } = useGetEventAdminQuery({
        skip: !id,
        variables: { entity: { id } },
    });

    const [saveEvent, { loading }] = useSaveEventMutation({
        onCompleted: () => {
            refetch();
            navigate("/admin/events");
        },
    });

    const methods = useForm<EventsFormInputs>({
        resolver: joiResolver(EventsFormSchema),
        defaultValues: !getEvent
            ? {
                  schedule: {
                      start_date: dayjs().startOf("date").toDate(),
                      end_date: dayjs().startOf("date").toDate(),
                      end_repeat: dayjs().startOf("date").toDate(),
                      start_hour: dayjs().startOf("h").toDate(),
                      end_hour: dayjs().startOf("h").toDate(),
                  },
                  files: [{ file: null }],
              }
            : {},
    });

    const {
        formState: { errors },
        handleSubmit,
        register,
        reset,
        control,
    } = methods;

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
            if (!!field.file && field.file.size !== 0) {
                const object = await fileObject(field.file);
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
                    ...(!!imageFile?.file &&
                        file?.file?.size !== 0 && {
                            titleImage: await fileObject(imageFile.file),
                        }),
                    ...(!!getEvent && { id: getEvent?.id }),
                },
            },
        });
    };

    const handleAppend = (index: number, file: File | null) => {
        update(index, { file });
        append({ file: null });
    };

    const handleSetFile = (item: FieldArrayWithId<EventsFormInputs, "files", "id">) => () => {
        setFile(item);
    };

    const handleRemoveImage = (id: string) => {
        remove(fields.findIndex((field) => field.id === id));
        setFile(null);
    };

    const onHandle = (data: { file: File; id: string } | null) => {
        setImageFile(data);
    };

    useEffect(() => {
        if (!!getEvent) {
            const schedules = getEvent.schedules?.map((schedule) => ({
                startDate: schedule?.startDate,
                endDate: schedule?.endDate,
            }));
            setSchedules(schedules || []);

            let images: { file: File }[] = [];

            for (const field of getEvent?.images || []) {
                if (field?.base64 && field?.mimeType && field?.name) {
                    const object = base64ImageToFile(field.base64, field.mimeType, field.name);
                    images.push({ file: object });
                }
            }

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
                    start_date: dayjs().startOf("date").toDate(),
                    end_date: dayjs().startOf("date").toDate(),
                    end_repeat: dayjs().startOf("date").toDate(),
                    start_hour: dayjs().startOf("h").toDate(),
                    end_hour: dayjs().startOf("h").toDate(),
                },
                files: [...images, { file: null }],
            });

            const titleImage = base64ImageToFile(
                getEvent?.titleImage?.base64 || "",
                getEvent?.titleImage?.mimeType || "",
                getEvent?.titleImage?.name || "",
            );

            setImageFile({
                id: getEvent?.titleImage?.id || "",
                file: titleImage,
            });

            setFile({
                file: titleImage,
                id: getEvent?.titleImage?.id || "",
            });
        }
    }, [getEvent, reset]);

    return (
        <FormProvider {...methods}>
            <form className="min-h-full">
                <Accordion
                    title="Stammdaten"
                    open={!!id}
                    className={twClsx(errors.baseData && "border border-primary")}
                >
                    <BaseDataForm />
                </Accordion>
                <Accordion
                    title="Adresse"
                    className={twClsx(errors.address && "border border-primary")}
                >
                    <AddressForm />
                </Accordion>
                <Accordion
                    title="Beschreibung"
                    className={twClsx(errors.description && "border border-primary")}
                >
                    <DescriptionFrom />
                </Accordion>
                <Accordion
                    title="Bilder"
                    showSide
                    sideClassName="w-auto"
                    className={twClsx(errors.files && "border border-primary")}
                    sideContent={
                        file && (
                            <EventImagePreview
                                id={file.id}
                                {...(file?.file && {
                                    src:
                                        file.file.size === 0
                                            ? `${process.env.REACT_APP_API_URL}media/${file?.id}`
                                            : URL.createObjectURL(file.file),
                                })}
                                file={file.file}
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
                                    src: URL.createObjectURL(item.file),
                                })}
                            />
                        ))}
                    </div>
                </Accordion>

                <SchedulesForm setSchedules={setSchedules} schedules={schedules} />
                <FormActions loading={loading} onSubmit={handleSubmit(handleOnSubmit)} />
            </form>
        </FormProvider>
    );
};

export default CreateEventsPage;
