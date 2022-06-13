import { ReactElement, useEffect } from "react";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import { Accordion, FormActions, InputField } from "../../components/molecules";
import { CategoryFormInputs } from "../../components/organisms";
import { CategoryFormSchema } from "../../validations";
import {
  useGetTemplateTypeAdminQuery,
  useSaveTemplateTypeAdminMutation,
} from "../../../GraphQl/graphql";
import { gqlVar } from "../../utils";

const CreateFormsCategories = (): ReactElement => {
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

  const { data: { getTemplateType = null } = {} } =
    useGetTemplateTypeAdminQuery({
      variables: { entity: { id } },
      skip: !id,
    });

  const [saveTemplateType] = useSaveTemplateTypeAdminMutation({
    onCompleted: () => navigate("/admin/forms/categories"),
  });

  const handleOnSubmit = ({ name }: CategoryFormInputs) => {
    saveTemplateType(
      gqlVar({ name, ...(!!getTemplateType && { id: getTemplateType?.id }) })
    );
  };

  const handleReset = () => reset();

  useEffect(() => {
    if (!!getTemplateType) {
      setValue("name", getTemplateType?.name || "");
    }
  }, [getTemplateType, setValue]);

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

export default CreateFormsCategories;
