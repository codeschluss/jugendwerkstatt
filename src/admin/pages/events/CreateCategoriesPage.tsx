import { ReactElement, useEffect, useMemo } from "react";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";

import { Button } from "../../components/atoms";
import { Accordion, InputField } from "../../components/molecules";
import { CategoryFormInputs } from "../../components/organisms";
import { CategoryFormSchema } from "../../validations";
import {
  useGetEventCategoryQuery,
  useSaveEventCategoriesMutation,
} from "../../../GraphQl/graphql";
import { useNavigate, useParams } from "react-router-dom";

const CreateCategoriesPage = (): ReactElement => {
  const navigate = useNavigate();
  const params = useParams();

  const { data } = useGetEventCategoryQuery({
    variables: { entity: { id: params.id } },
    skip: !params.id,
  });

  const [saveEventCategories] = useSaveEventCategoriesMutation({
    onCompleted: () => navigate("/admin/events/categories"),
  });

  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormInputs>({
    resolver: joiResolver(CategoryFormSchema),
  });

  const handleOnSubmit = ({ category }: CategoryFormInputs) => {
    saveEventCategories({
      variables: {
        entities: {
          name: category,
          icon: "icon name",
          ...(!!data && { id: data?.getEventCategory?.id }),
        },
      },
    });
  };

  useEffect(() => {
    if (!!data) {
      setValue("category", data?.getEventCategory?.name || "");
    }
  }, [data, setValue]);

  return (
    <form className="min-h-full" onSubmit={handleSubmit(handleOnSubmit)}>
      <Accordion open={!!params?.id} title="Kategorie">
        <InputField
          id="category"
          label="Kategoriename"
          placeholder="Metallhandwerk"
          {...register("category")}
          error={errors?.category?.message}
        />
        <Button className="mt-6">Speichern</Button>
      </Accordion>
    </form>
  );
};

export default CreateCategoriesPage;
