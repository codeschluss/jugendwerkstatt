import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";

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

  const handleTrigger = () => trigger("baseData");

  return (
    <>
      <div className="flex flex-col justify-start w-full space-y-6">
        <div className="grid gap-8 md:grid-cols-2">
          <InputField
            id="title"
            label="Titel"
            {...register("baseData.title")}
            error={baseData?.title?.message}
            placeholder="Tischler/in"
          />

          <Select
            id="name"
            label="Unternehmen"
            {...register("baseData.name")}
            defaultValue={2}
            error={baseData?.name?.message}
          >
            {[1, 2, 3].map((i) => (
              <option key={i} value={i}>
                test {i}
              </option>
            ))}
          </Select>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <InputField
            id="phone"
            label="Telefonnummer"
            {...register("baseData.phone")}
            placeholder="+49 202 - 49 68 94 10"
            error={baseData?.phone?.message}
          />

          <InputField
            id="mail"
            label="E-Mail-Adresse"
            placeholder="info@schreinerei-mueller.de"
            {...register("baseData.mail")}
            error={baseData?.mail?.message}
          />
        </div>
        <div className="grid gap-8 md:grid-cols-2">
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
      <Button type="button" className="mt-6" onClick={handleTrigger}>
        Speichern
      </Button>
    </>
  );
};
