import { joiResolver } from "@hookform/resolvers/joi";
import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { GeneralAddressFormSchema } from "../../../validations";
import { Button } from "../../atoms";
import { Accordion, InputField } from "../../molecules";
import { GeneralAddressFormProps } from "./GeneralAddressForm.props";

export const GeneralAddressForm = (): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GeneralAddressFormProps>({
    resolver: joiResolver(GeneralAddressFormSchema),
  });

  const onSubmit = (data: GeneralAddressFormProps) => console.log(data);

  return (
    <Accordion title="Adresse" className="max-w-4xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-start w-full space-y-6">
            <InputField
              id="street"
              label="Straße"
              {...register("street")}
              error={errors.street?.message}
              placeholder="Heinz-Kluncker-Straße"
            />
            <InputField
              id="city"
              label="Stadt"
              {...register("city")}
              placeholder="Wuppertal"
              error={errors.city?.message}
            />
          </div>
          <div className="flex flex-col justify-start w-full space-y-6">
            <InputField
              inputClassName="w-32"
              placeholder="4"
              id="houseNumber"
              label="Hausnummer"
              {...register("houseNumber")}
              error={errors.houseNumber?.message}
            />
            <InputField
              inputClassName="w-32"
              id="postalCode"
              label="Postleitzahl"
              placeholder="42285"
              {...register("postalCode")}
              error={errors.postalCode?.message}
            />
          </div>
        </div>

        <div className="flex w-full mt-5 mb-5 md:flex-row xs:gap-y-2 md:gap-y-0 xs:flex-col space-between gap-x-8">
          <InputField
            id="longitude"
            label="Längengrad"
            placeholder="7.1507636"
            {...register("long")}
            error={errors?.long?.message}
          />
          <InputField
            id="latitude"
            label="Breitengrad"
            placeholder="7.1507636"
            {...register("lat")}
            error={errors?.lat?.message}
          />
        </div>

        <Button type="submit">Speichern</Button>
      </form>
    </Accordion>
  );
};
