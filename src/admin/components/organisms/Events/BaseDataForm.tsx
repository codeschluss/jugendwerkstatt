import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import { Button, Select } from "../../atoms";
import { InputField } from "../../molecules";
import { EventsFormInputs } from "./Events.types";

export const BaseDataForm = (): ReactElement => {
  const {
    trigger,
    register,
    formState: {
      errors: { baseData },
    },
  } = useFormContext<EventsFormInputs>();

  const handleTrigger = () => trigger("baseData");

  return (
    <>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col justify-start w-full space-y-6">
          <InputField
            id="eventName"
            label="Eventname"
            {...register("baseData.eventName")}
            error={baseData?.eventName?.message}
            placeholder="Das erste Event"
          />
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
          <Select
            id="organizator"
            label="Veranstalter"
            {...register("baseData.organizator")}
            defaultValue={2}
            error={baseData?.organizator?.message}
          >
            {[1, 2, 3].map((i) => (
              <option key={i} value={i}>
                test {i}
              </option>
            ))}
          </Select>
          <InputField
            id="email"
            label="E-Mail-Adresse"
            placeholder="mail@alphaev.de"
            {...register("baseData.email")}
            error={baseData?.email?.message}
          />
          <InputField
            id="website"
            label="Webseite"
            required={false}
            placeholder="https://www.alphaev.de"
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
