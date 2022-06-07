import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import { Button, Select } from "../../atoms";
import { InputField } from "../../molecules";
import { FormsFormInputs } from "./Forms.types";

export const FormsBaseForm = (): ReactElement => {
  const {
    trigger,
    register,
    formState: {
      errors: { baseData },
    },
  } = useFormContext<FormsFormInputs>();

  const handleTrigger = () => trigger("baseData");

  return (
    <>
      <div className="flex flex-col justify-start w-full space-y-6">
        <InputField
          id="dateName"
          label="Dateiname"
          {...register("baseData.dateName")}
          placeholder="Vorlage 4"
          error={baseData?.dateName?.message}
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
      <Button className="mt-6" onClick={handleTrigger}>
        Speichern
      </Button>
    </>
  );
};
