import { ReactElement } from "react";
import { joiResolver } from "@hookform/resolvers/joi";
import { FormProvider, useForm } from "react-hook-form";

import { Accordion } from "../../components/molecules";
import { MediaForm, MediaFormInputs } from "../../components/organisms";
import { VideoFormSchema } from "../../validations/VideoForm.schema";

const CreateMediaPage = (): ReactElement => {
  const methods = useForm<MediaFormInputs>({
    resolver: joiResolver(VideoFormSchema),
  });

  const handleOnSubmit = (data: MediaFormInputs) => {
    console.log("data", data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="min-h-full"
        onSubmit={methods.handleSubmit(handleOnSubmit)}
      >
        <Accordion title="Neues Video hinzufügen">
          <MediaForm />
        </Accordion>
      </form>
    </FormProvider>
  );
};

export default CreateMediaPage;
