import { ReactElement, useEffect } from "react";
import { joiResolver } from "@hookform/resolvers/joi";
import { FormProvider, useForm } from "react-hook-form";

import { Accordion } from "../../components/molecules";
import { MediaForm, MediaFormInputs } from "../../components/organisms";
import { VideoFormSchema } from "../../validations/VideoForm.schema";
import { useNavigate, useParams } from "react-router-dom";
import { useGetLinkQuery, useSaveLinkMutation } from "../../../GraphQl/graphql";

const CreateMediaPage = (): ReactElement => {
  const navigate = useNavigate();
  const params = useParams();

  const methods = useForm<MediaFormInputs>({
    resolver: joiResolver(VideoFormSchema),
  });

  const { reset, handleSubmit } = methods;

  const { data } = useGetLinkQuery({
    variables: { entity: { id: params.id } },
    skip: !params.id,
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
      <form className="min-h-full" onSubmit={handleSubmit(handleOnSubmit)}>
        <Accordion title="Neues Video hinzufügen">
          <MediaForm />
        </Accordion>
      </form>
    </FormProvider>
  );
};

export default CreateMediaPage;
