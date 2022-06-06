import { ReactElement } from "react";
import { InputField } from "../../molecules";

interface AddressFormProps {}

export const AddressForm = (props: AddressFormProps): ReactElement => {
  return (
    <div>
      <InputField name="street" label="Straße*" />
      <InputField name="houseNumber" label="Hausnummer*" />
    </div>
  );
};
