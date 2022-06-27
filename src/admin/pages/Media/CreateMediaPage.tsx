import { ReactElement, useEffect } from "react";
import { joiResolver } from "@hookform/resolvers/joi";
import { FormProvider, useForm } from "react-hook-form";

import { Accordion, FormActions } from "../../components/molecules";
import { MediaForm, MediaFormInputs } from "../../components/organisms";
import { VideoFormSchema } from "../../validations/VideoForm.schema";
import { useNavigate, useParams } from "react-router-dom";
import { useGetLinkQuery, useSaveLinkMutation } from "../../../GraphQl/graphql";
import { gqlVar } from "../../utils";

const CreateMediaPage = (): ReactElement => {
  const { id } = useParams();
  const navigate = useNavigate();

  const methods = useForm<MediaFormInputs>({
    resolver: joiResolver(VideoFormSchema),
  });

  const { reset, handleSubmit } = methods;

  const { data: { getLink = null } = {} } = useGetLinkQuery({
    variables: { entity: { id } },
    skip: !id,
  });

  const [saveLink] = useSaveLinkMutation({
    onCompleted: () => navigate("/admin/medias"),
  });

  const handleOnSubmit = ({ category, url, title }: MediaFormInputs) => {
    saveLink(
      gqlVar({
        url,
        title,
        category: { id: category },
        ...(!!getLink && { id: getLink?.id }),
      })
    );
  };

  useEffect(() => {
    if (!!getLink) {
      reset({
        url: getLink?.url || "",
        title: getLink?.title || "",
        category: getLink?.category?.id || "",
      });
    }
  }, [getLink, reset]);

  return (
    <FormProvider {...methods}>
      <form className="min-h-full">
        <Accordion title="Neues Video hinzufügen" open={!!id}>
          <MediaForm />
        </Accordion>
        <FormActions onSubmit={handleSubmit(handleOnSubmit)} />
      </form>
    </FormProvider>
  );
};

export default CreateMediaPage;
