import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import {
  useGetCompaniesQuery,
  useGetJobTypesQuery,
} from "../../../../GraphQl/graphql";

import { Button, Select } from "../../atoms";
import { InputField } from "../../molecules";
import { VacancyFormInputs } from "./Vacancy.types";

export const VacancyForm = (): ReactElement => {
  const {
    trigger,
    register,
    formState: {
      errors: { baseData },
    },
  } = useFormContext<VacancyFormInputs>();

  const { data: { getJobTypes = null } = {} } = useGetJobTypesQuery({
    fetchPolicy: "cache-and-network",
  });

  const { data: { getCompanies = null } = {} } = useGetCompaniesQuery({
    fetchPolicy: "cache-and-network",
  });

  const handleTrigger = () => trigger("baseData");

  return (
    <>
      <div className="flex flex-col justify-start w-full space-y-6">
        <div className="grid gap-8">
          <InputField
            id="title"
            label="Titel"
            {...register("baseData.title")}
            error={baseData?.title?.message}
            placeholder="Tischler/in"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Select
            id="company"
            label="Unternehmen"
            {...register("baseData.company")}
            defaultValue={2}
            error={baseData?.company?.message}
          >
            {getCompanies?.result?.map((item) => (
              <option key={item?.id} value={item?.id || ""}>
                {item?.name}
              </option>
            ))}
          </Select>

          <Select
            id="category"
            label="Kategorie"
            {...register("baseData.category")}
            defaultValue={1}
            error={baseData?.category?.message}
          >
            {getJobTypes?.result?.map((item) => (
              <option key={item?.id} value={item?.id || ""}>
                {item?.name}
              </option>
            ))}
          </Select>
        </div>
      </div>
      <Button type="button" className="mt-6" onClick={handleTrigger}>
        Speichern
      </Button>
    </>
  );
};
