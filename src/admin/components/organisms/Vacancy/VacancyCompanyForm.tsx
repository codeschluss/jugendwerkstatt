import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import { Button, Select } from "../../atoms";
import { InputField } from "../../molecules";
import { VacancyCompaniesFormInputs } from "./Vacancy.types";

export const VacancyCompanyForm = (): ReactElement => {
  const {
    trigger,
    register,
    formState: {
      errors: { baseData },
    },
  } = useFormContext<VacancyCompaniesFormInputs>();

  const handleTrigger = () => trigger("baseData");

  return (
    <>
      <div className="grid grid-cols-2 gap-8">
        <div className="col-span-2 w-full space-y-6">
          <InputField
            id="company"
            label="Unternehmen Name"
            {...register("baseData.company")}
            error={baseData?.company?.message}
            placeholder="Schreinerei Müller"
          />
        </div>
        <div className="flex flex-col justify-start w-full space-y-6">
          <InputField
            id="phone"
            label="Telefonnummer"
            {...register("baseData.phone")}
            placeholder="+49 202 - 49 68 94 10"
            error={baseData?.phone?.message}
          />

          <Select
            id="category"
            label="Kategorie"
            {...register("baseData.category")}
            defaultValue={1}
            error={baseData?.category?.message}
          >
            {[1, 2, 3].map((i) => (
              <option key={i} value={i}>
                test {i}
              </option>
            ))}
          </Select>
        </div>
        <div className="flex flex-col justify-start space-y-6">
          <InputField
            id="email"
            label="E-Mail-Adresse"
            placeholder="info@schreinerei-mueller.de"
            {...register("baseData.email")}
            error={baseData?.email?.message}
          />
          <InputField
            id="website"
            label="Webseite"
            required={false}
            placeholder="https://www.schreinerei-mueller.de"
            {...register("baseData.website")}
            error={baseData?.website?.message}
          />
        </div>
      </div>
      <Button className="mt-6" onClick={handleTrigger}>
        Speichern
      </Button>
    </>
  );
};
