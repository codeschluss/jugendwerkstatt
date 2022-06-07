import { ReactElement } from "react";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";

import { Button } from "../../components/atoms";
import { Accordion, InputField } from "../../components/molecules";
import { CategoryFormInputs } from "../../components/organisms";
import { CategoryFormSchema } from "../../validations";

const CreateCategoriesPage = (): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormInputs>({
    resolver: joiResolver(CategoryFormSchema),
  });

  const handleOnSubmit = (data: CategoryFormInputs) => {
    console.log("data", data);
  };

  return (
    <form className="min-h-full" onSubmit={handleSubmit(handleOnSubmit)}>
      <Accordion title="Kategorie">
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
