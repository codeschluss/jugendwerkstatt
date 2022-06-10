import { joiResolver } from "@hookform/resolvers/joi";
import { ReactElement, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import {
  useGetOrganizerQuery,
  useSaveOrganizerMutation,
} from "../../../GraphQl/graphql";
import { Accordion } from "../../components/molecules";
import {
  AddressForm,
  BaseOrganizerForm,
  OrganizerFormInputs,
} from "../../components/organisms";
import { OrganizerFormSchema } from "../../validations";

const CreateOrganizersPage = (): ReactElement => {
  const navigate = useNavigate();
  const params = useParams();

  const methods = useForm<OrganizerFormInputs>({
    resolver: joiResolver(OrganizerFormSchema),
  });

  const { reset, handleSubmit } = methods;

  const { data } = useGetOrganizerQuery({
    variables: { entity: { id: params.id } },
    skip: !params.id,
  });

  const [saveEventOrganizer] = useSaveOrganizerMutation({
    onCompleted: () => navigate("/admin/events/organizers"),
  });

  const handleOnSubmit = ({ baseData }: OrganizerFormInputs) => {
    saveEventOrganizer({
      variables: {
        entity: { ...baseData, ...(!!data && { id: data?.organizer?.id }) },
      },
    });
  };

  useEffect(() => {
    if (!!data?.organizer) {
      reset({
        baseData: {
          mail: data?.organizer?.mail || "",
          name: data?.organizer?.name || "",
          phone: data?.organizer?.phone || "",
          website: data?.organizer?.website || "",
        },
      });
    }
  }, [data, reset]);

  return (
    <FormProvider {...methods}>
      <form className="min-h-full" onSubmit={handleSubmit(handleOnSubmit)}>
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
