import { ReactElement, useEffect } from "react";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import { Accordion, FormActions, InputField } from "../../components/molecules";
import { CategoryFormInputs } from "../../components/organisms";
import { CategoryFormSchema } from "../../validations";
import {
  useGetEventCategoryQuery,
  useSaveEventCategoryMutation,
} from "../../../GraphQl/graphql";

const CreateCategoriesPage = (): ReactElement => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    reset,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormInputs>({
    resolver: joiResolver(CategoryFormSchema),
  });

  const { data } = useGetEventCategoryQuery({
    variables: { entity: { id } },
    skip: !id,
  });

  const [saveEventCategory] = useSaveEventCategoryMutation({
    onCompleted: () => navigate("/admin/events/categories"),
  });

  const handleOnSubmit = ({ name }: CategoryFormInputs) => {
    saveEventCategory({
      variables: {
        entity: {
          name,
          ...(!!data && { id: data?.category?.id }),
        },
      },
    });
  };

  const handleReset = () => reset();

  useEffect(() => {
    if (!!data) {
      setValue("name", data?.category?.name || "");
    }
  }, [data, setValue]);

  return (
    <form className="min-h-full">
      <Accordion open={!!id} title="Kategorie">
        <InputField
          id="name"
          label="Kategoriename"
          placeholder="Metallhandwerk"
          {...register("name")}
          error={errors?.name?.message}
        />
      </Accordion>
      <FormActions
        onReset={handleReset}
        onSubmit={handleSubmit(handleOnSubmit)}
      />
    </form>
  );
};

export default CreateCategoriesPage;
