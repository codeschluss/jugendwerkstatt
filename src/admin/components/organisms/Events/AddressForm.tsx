import { ReactElement } from "react";
import { Button } from "../../atoms";
import { InputField } from "../../molecules";
import { AddressFormProps } from "./Events.types";

export const AddressForm = (props: AddressFormProps): ReactElement => {
  return (
    <>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col justify-start w-full space-y-6">
          <InputField
            placeholder="Heinz-Kluncker-Straße"
            name="street"
            label="Straße"
          />
          <InputField placeholder="Wuppertal" name="city" label="Stadt" />
        </div>
        <div className="flex flex-col justify-start w-32 space-y-6">
          <InputField name="houseNumber" label="Hausnummer" placeholder="4" />
          <InputField
            name="postalCode"
            label="Postleitzahl"
            placeholder="42285"
          />
        </div>
      </div>
      <Button className="mt-6">Speichern</Button>
    </>
  );
};
