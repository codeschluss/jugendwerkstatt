import { joiResolver } from "@hookform/resolvers/joi";
import { ReactElement } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Accordion } from "../../components/molecules";
import {
  AddressForm,
  DescriptionFrom,
  VacancyForm,
  VacancyFormInputs,
} from "../../components/organisms";
import { VacancyFormSchema } from "../../validations";

const CreateVacancyPage = (): ReactElement => {
  const methods = useForm<VacancyFormInputs>({
    resolver: joiResolver(VacancyFormSchema),
  });

  const handleOnSubmit = (data: VacancyFormInputs) => {
    console.log("data", data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="min-h-full"
        onSubmit={methods.handleSubmit(handleOnSubmit)}
      >
        <Accordion title="Stammdaten">
          <VacancyForm />
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

export default CreateVacancyPage;
