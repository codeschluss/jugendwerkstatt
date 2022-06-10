import { ReactElement, useEffect } from "react";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";

import { Button } from "../../components/atoms";
import { Accordion, InputField } from "../../components/molecules";
import { CategoryFormInputs } from "../../components/organisms";
import { CategoryFormSchema } from "../../validations";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetLinkCategoryQuery,
  useSaveLinkCategoryMutation,
} from "../../../GraphQl/graphql";

const CreateMediaCategoriesPage = (): ReactElement => {
  const navigate = useNavigate();
  const params = useParams();

  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormInputs>({
    resolver: joiResolver(CategoryFormSchema),
  });

  const { data } = useGetLinkCategoryQuery({
    variables: { entity: { id: params.id } },
    skip: !params.id,
  });

  const [saveLinkCategory] = useSaveLinkCategoryMutation({
    onCompleted: () => navigate("/admin/medias/categories"),
  });

  const handleOnSubmit = ({ name }: CategoryFormInputs) => {
    saveLinkCategory({
      variables: {
        entity: {
          name,
          ...(!!data && { id: data?.getLinkCategory?.id }),
        },
      },
    });
  };

  useEffect(() => {
    if (!!data) {
      setValue("name", data?.getLinkCategory?.name || "");
    }
  }, [data, setValue]);

  return (
    <form className="min-h-full" onSubmit={handleSubmit(handleOnSubmit)}>
      <Accordion title="Neue Kategorie hinzufügen">
        <InputField
          id="name"
          label="Kategoriename"
          placeholder="Was kommt nach der Schule"
          {...register("name")}
          error={errors?.name?.message}
        />
        <Button className="mt-6">Speichern</Button>
      </Accordion>
    </form>
  );
};

export default CreateMediaCategoriesPage;
