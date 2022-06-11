import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "../../atoms";
import { InputField } from "../../molecules";

export const AddressForm = (): ReactElement => {
  const {
    trigger,
    register,
    formState: {
      errors: { address },
    },
  } = useFormContext();

  console.log("first");

  const handleTrigger = () => trigger("address");

  return (
    <>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col justify-start w-full space-y-6">
          <InputField
            id="street"
            label="Straße"
            {...register("address.street")}
            error={address?.street?.message}
            placeholder="Heinz-Kluncker-Straße"
          />
          <InputField
            id="city"
            label="Stadt"
            {...register("address.city")}
            placeholder="Wuppertal"
            error={address?.city?.message}
          />
        </div>
        <div className="flex flex-col justify-start w-full space-y-6">
          <InputField
            inputClassName="w-32"
            placeholder="4"
            id="houseNumber"
            label="Hausnummer"
            {...register("address.houseNumber")}
            error={address?.houseNumber?.message}
          />
          <InputField
            inputClassName="w-32"
            id="postalCode"
            label="Postleitzahl"
            placeholder="42285"
            {...register("address.postalCode")}
            error={address?.postalCode?.message}
          />
        </div>
      </div>
      <Button className="mt-6" onClick={handleTrigger}>
        Speichern
      </Button>
    </>
  );
};
