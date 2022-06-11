import { ReactElement, useEffect } from "react";
import { joiResolver } from "@hookform/resolvers/joi";
import { FormProvider, useForm } from "react-hook-form";

import { Accordion, FormActions } from "../../components/molecules";
import { MediaForm, MediaFormInputs } from "../../components/organisms";
import { VideoFormSchema } from "../../validations/VideoForm.schema";
import { useNavigate, useParams } from "react-router-dom";
import { useGetLinkQuery, useSaveLinkMutation } from "../../../GraphQl/graphql";

const CreateMediaPage = (): ReactElement => {
  const { id } = useParams();
  const navigate = useNavigate();

  const methods = useForm<MediaFormInputs>({
    resolver: joiResolver(VideoFormSchema),
  });

  const { reset, handleSubmit } = methods;

  const { data } = useGetLinkQuery({
    variables: { entity: { id } },
    skip: !id,
  });

  const [saveLink] = useSaveLinkMutation({
    onCompleted: () => navigate("/admin/medias"),
  });

  const handleOnSubmit = ({ category, url, title }: MediaFormInputs) => {
    saveLink({
      variables: {
        entity: {
          url,
          title,
          category: { name: category },
          ...(!!data && { id: data?.getLink?.id }),
        },
      },
    });
  };

  const handleReset = () => reset();

  useEffect(() => {
    if (!!data) {
      reset({
        url: data?.getLink?.url || "",
        title: data?.getLink?.title || "",
        category: data?.getLink?.category?.name || "",
      });
    }
  }, [data, reset]);

  return (
    <FormProvider {...methods}>
      <form className="min-h-full">
        <Accordion title="Neues Video hinzufügen" open={!!id}>
          <MediaForm />
        </Accordion>
        <FormActions
          onReset={handleReset}
          onSubmit={handleSubmit(handleOnSubmit)}
        />
      </form>
    </FormProvider>
  );
};

export default CreateMediaPage;
