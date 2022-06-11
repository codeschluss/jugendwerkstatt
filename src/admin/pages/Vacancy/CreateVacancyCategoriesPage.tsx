import { joiResolver } from "@hookform/resolvers/joi";
import { ReactElement, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import { Accordion, FormActions, InputField } from "../../components/molecules";
import {
  SketchColor,
  VacancyCategoryFormInputs,
} from "../../components/organisms";
import { VacancyCategoryFormSchema } from "../../validations";
import {
  useGetJobTypeQuery,
  useSaveJobTypeMutation,
} from "../../../GraphQl/graphql";

const CreateVacancyCategoriesPage = (): ReactElement => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    control,
    reset,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VacancyCategoryFormInputs>({
    resolver: joiResolver(VacancyCategoryFormSchema),
  });

  const [saveJobType] = useSaveJobTypeMutation({
    onCompleted: () => navigate("/admin/job-announcements/categories"),
  });

  const { data: jobTypeData } = useGetJobTypeQuery({
    variables: { entity: { id } },
    skip: !id,
  });

  const handleOnSubmit = (data: VacancyCategoryFormInputs) => {
    saveJobType({
      variables: {
        entity: {
          ...data,
          ...(!!jobTypeData && { id: jobTypeData?.getJobType?.id }),
        },
      },
    });
  };

  const handleReset = () => reset();

  useEffect(() => {
    if (!!jobTypeData) {
      reset({
        name: jobTypeData?.getJobType?.name || "",
        color: jobTypeData?.getJobType?.color || "",
      });
    }
  }, [jobTypeData, reset]);

  return (
    <form className="min-h-full" onSubmit={handleSubmit(handleOnSubmit)}>
      <Accordion
        title="Kategorie"
        showSide
        open={!!id}
        sideClassName="bg-transparent"
        sideContent={<SketchColor control={control} setValue={setValue} />}
      >
        <div className="flex flex-col justify-start w-full space-y-6">
          <InputField
            id="name"
            label="Kategoriename"
            placeholder="Metallhandwerk"
            {...register("name")}
            error={errors?.name?.message}
          />
          <InputField
            id="color"
            label="Farbe"
            placeholder="#FFFFFF"
            {...register("color")}
            error={errors?.color?.message}
          />
        </div>
        <FormActions
          onReset={handleReset}
          onSubmit={handleSubmit(handleOnSubmit)}
        />
      </Accordion>
    </form>
  );
};

export default CreateVacancyCategoriesPage;
