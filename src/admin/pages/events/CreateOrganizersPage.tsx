import { joiResolver } from "@hookform/resolvers/joi";
import { ReactElement } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Accordion } from "../../components/molecules";
import {
  AddressForm,
  BaseOrganizerForm,
  OrganizerFormInputs,
} from "../../components/organisms";
import { OrganizerFormSchema } from "../../validations";

const CreateOrganizersPage = (): ReactElement => {
  const methods = useForm<OrganizerFormInputs>({
    resolver: joiResolver(OrganizerFormSchema),
  });

  const handleOnSubmit = (data: OrganizerFormInputs) => {
    console.log("data", data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="min-h-full"
        onSubmit={methods.handleSubmit(handleOnSubmit)}
      >
        <Accordion title="Stammdaten">
          <BaseOrganizerForm />
        </Accordion>
        <Accordion title="Adresse">
          <AddressForm />
        </Accordion>
      </form>
    </FormProvider>
  );
};

export default CreateOrganizersPage;
