import { ChangeEvent, ReactElement } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { useNavigate, useParams } from "react-router-dom";

import {
  Accordion,
  FormActions,
  UploadField,
} from "../../components/molecules";
import {
  AddressForm,
  BaseDataForm,
  DescriptionFrom,
  EventsFormInputs,
} from "../../components/organisms";
import { EventsFormSchema } from "../../validations";
import {
  useGetEventAdminQuery,
  useSaveEventMutation,
} from "../../../GraphQl/graphql";

const CreateEventsPage = (): ReactElement => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: result } = useGetEventAdminQuery({
    variables: { entity: { id } },
    skip: !id,
  });

  const [saveEvent] = useSaveEventMutation({
    onCompleted: () => navigate("/admin/events"),
  });

  const methods = useForm<EventsFormInputs>({
    // resolver: joiResolver(EventsFormSchema),
  });

  const { reset, handleSubmit, register, control, formState } = methods;

  const { fields, append, remove } = useFieldArray({
    name: "files",
    control,
  });

  const handleOnSubmit = ({
    baseData,
    address,
    description,
    files,
  }: EventsFormInputs) => {
    console.log("handleOnSubmit", files);
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

  const handleReset = () => reset();
  const handleAppend = (file: FileList | null) => {
    console.log("file", file);
    append({ file: file || undefined });
  };

  console.log("fields", fields, formState?.errors);

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
        <Accordion title="Bilder">
          <div className="flex items-start justify-start">
            {fields.map((item, index) => (
              <UploadField
                key={index}
                preview
                src={URL.createObjectURL(item.file[0])}
                id={`files.${index}.file`}
                {...register(`files.${index}.file`)}
              />
            ))}

            <UploadField
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleAppend(event.currentTarget.files)
              }
            />
          </div>
        </Accordion>
        <Accordion title="Termine">
          <p>lorem ispum</p>
        </Accordion>

        <FormActions
          onReset={handleReset}
          onSubmit={handleSubmit(handleOnSubmit)}
        />
      </form>
    </FormProvider>
  );
};

export default CreateEventsPage;
