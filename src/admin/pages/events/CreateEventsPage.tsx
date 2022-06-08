import { ReactElement } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import { Accordion } from "../../components/molecules";
import {
  AddressForm,
  BaseDataForm,
  DescriptionFrom,
  EventsFormInputs,
} from "../../components/organisms";
import { EventsFormSchema } from "../../validations";

const CreateEventsPage = (): ReactElement => {
  const methods = useForm<EventsFormInputs>({
    resolver: joiResolver(EventsFormSchema),
  });

  const handleOnSubmit = (data: EventsFormInputs) => {
    console.log("data", data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="min-h-full"
        onSubmit={methods.handleSubmit(handleOnSubmit)}
      >
        <Accordion title="Stammdaten">
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
