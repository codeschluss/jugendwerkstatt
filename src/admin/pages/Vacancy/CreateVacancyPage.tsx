import { joiResolver } from "@hookform/resolvers/joi";
import { ReactElement } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Accordion, FormActions } from "../../components/molecules";
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

  const { reset, handleSubmit } = methods;

  const handleOnSubmit = (data: VacancyFormInputs) => {
    console.log("data", data);
  };

  const handleReset = () => reset();

  return (
    <FormProvider {...methods}>
      <form className="min-h-full">
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
        <FormActions
          onReset={handleReset}
          onSubmit={handleSubmit(handleOnSubmit)}
        />
      </form>
    </FormProvider>
  );
};

export default CreateVacancyPage;
