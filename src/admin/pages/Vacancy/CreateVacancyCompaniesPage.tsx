import { joiResolver } from "@hookform/resolvers/joi";
import { ReactElement } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { Accordion } from "../../components/molecules";
import {
  AddressForm,
  VacancyCompaniesFormInputs,
  VacancyCompanyForm,
} from "../../components/organisms";
import { VacancyCompaiesFormSchema } from "../../validations";

const CreateVacancyCompaniesPage = (): ReactElement => {
  const methods = useForm<VacancyCompaniesFormInputs>({
    resolver: joiResolver(VacancyCompaiesFormSchema),
  });

  const handleOnSubmit = (data: VacancyCompaniesFormInputs) => {
    console.log("data", data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="min-h-full"
        onSubmit={methods.handleSubmit(handleOnSubmit)}
      >
        <Accordion title="Stammdaten">
          <VacancyCompanyForm />
        </Accordion>
        <Accordion title="Adresse">
          <AddressForm />
        </Accordion>
      </form>
    </FormProvider>
  );
};

export default CreateVacancyCompaniesPage;
