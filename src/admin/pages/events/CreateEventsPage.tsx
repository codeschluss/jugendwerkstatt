import { ReactElement, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { useNavigate, useParams } from "react-router-dom";

import { Accordion } from "../../components/molecules";
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

  const methods = useForm<EventsFormInputs>({
    resolver: joiResolver(EventsFormSchema),
  });

  const { reset, handleSubmit } = methods;

  const [saveEvent] = useSaveEventMutation({
    onCompleted: () => navigate("/admin/events"),
  });

  const handleOnSubmit = ({
    baseData,
    address,
    description,
  }: EventsFormInputs) => {
    console.log("first", {
      description,
      name: baseData?.name,
      organizer: { id: baseData?.organizer },
      category: { id: baseData?.category },
      ...(!!result && { id: result?.getEvent?.id }),
    });

    saveEvent({
      variables: {
        entity: {
          description,
          name: baseData?.name,
          organizer: { id: baseData?.organizer },
          category: { id: baseData?.category },
          ...(!!result && { id: result?.getEvent?.id }),
        },
      },
    });
  };

  // useEffect(() => {
  //   if (!!result) {
  //     reset({});
  //   }
  // }, [result, reset]);

  return (
    <FormProvider {...methods}>
      <form className="min-h-full" onSubmit={handleSubmit(handleOnSubmit)}>
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
          <p>lorem ispum</p>
        </Accordion>
        <Accordion title="Termine">
          <p>lorem ispum</p>
        </Accordion>
      </form>
    </FormProvider>
  );
};

export default CreateEventsPage;
