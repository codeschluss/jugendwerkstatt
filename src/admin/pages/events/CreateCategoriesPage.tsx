import { ReactElement, useEffect } from "react";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "../../components/atoms";
import { Accordion, InputField } from "../../components/molecules";
import { CategoryFormInputs } from "../../components/organisms";
import { CategoryFormSchema } from "../../validations";
import {
  useGetEventCategoryQuery,
  useSaveEventCategoriesMutation,
} from "../../../GraphQl/graphql";

const CreateCategoriesPage = (): ReactElement => {
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

  const { data } = useGetEventCategoryQuery({
    variables: { entity: { id: params.id } },
    skip: !params.id,
  });

  const [saveEventCategories] = useSaveEventCategoriesMutation({
    onCompleted: () => navigate("/admin/events/categories"),
  });

  const handleOnSubmit = ({ name }: CategoryFormInputs) => {
    saveEventCategories({
      variables: {
        entities: {
          name,
          icon: "icon name",
          ...(!!data && { id: data?.category?.id }),
        },
      },
    });
  };

  useEffect(() => {
    if (!!data) {
      setValue("name", data?.category?.name || "");
    }
  }, [data, setValue]);

  return (
    <form className="min-h-full" onSubmit={handleSubmit(handleOnSubmit)}>
      <Accordion open={!!params?.id} title="Kategorie">
        <InputField
          id="name"
          label="Kategoriename"
          placeholder="Metallhandwerk"
          {...register("name")}
          error={errors?.name?.message}
        />
        <Button className="mt-6">Speichern</Button>
      </Accordion>
    </form>
  );
};

export default CreateCategoriesPage;
