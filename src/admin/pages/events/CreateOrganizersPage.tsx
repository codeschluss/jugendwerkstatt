import { joiResolver } from "@hookform/resolvers/joi";
import { ReactElement, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import {
  useGetOrganizerQuery,
  useSaveOrganizerMutation,
} from "../../../GraphQl/graphql";
import { Button } from "../../components/atoms";
import { Accordion } from "../../components/molecules";
import {
  BaseOrganizerForm,
  OrganizerFormInputs,
} from "../../components/organisms";
import { OrganizerFormSchema } from "../../validations";

const CreateOrganizersPage = (): ReactElement => {
  const navigate = useNavigate();
  const { id } = useParams();

  const methods = useForm<OrganizerFormInputs>({
    resolver: joiResolver(OrganizerFormSchema),
  });

  const { reset, handleSubmit } = methods;

  const { data: result } = useGetOrganizerQuery({
    variables: { entity: { id } },
    skip: !id,
  });

  const [saveEventOrganizer] = useSaveOrganizerMutation({
    onCompleted: () => navigate("/admin/events/organizers"),
  });

  const handleOnSubmit = (data: OrganizerFormInputs) => {
    saveEventOrganizer({
      variables: {
        entity: {
          ...data,
          ...(!!result && { id: result?.organizer?.id }),
        },
      },
    });
  };

  useEffect(() => {
    if (!!result?.organizer) {
      reset({
        mail: result?.organizer?.mail || "",
        name: result?.organizer?.name || "",
        phone: result?.organizer?.phone || "",
        website: result?.organizer?.website || "",
      });
    }
  }, [result, reset]);

  return (
    <FormProvider {...methods}>
      <form className="min-h-full" onSubmit={handleSubmit(handleOnSubmit)}>
        <Accordion title="Stammdaten" open={!!id}>
          <>
            <BaseOrganizerForm />
            <Button className="mt-6">Speichern</Button>
          </>
        </Accordion>
      </form>
    </FormProvider>
  );
};

export default CreateOrganizersPage;
