import { joiResolver } from "@hookform/resolvers/joi";
import { ReactElement, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetAddressQuery,
  useSaveAddressMutation,
} from "../../../../GraphQl/graphql";
import { GeneralAddressFormSchema } from "../../../validations";
import { Button } from "../../atoms";
import { Accordion, InputField } from "../../molecules";
import { GeneralAddressFormProps } from "./GeneralAddressForm.props";

export const GeneralAddressForm = (): ReactElement => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GeneralAddressFormProps>({
    resolver: joiResolver(GeneralAddressFormSchema),
  });
  const { data: { address = null } = {} } = useGetAddressQuery({
    variables: { entity: { id } },
  });

  const [saveAddress] = useSaveAddressMutation({
    onCompleted: () => navigate("/admin/general-settings/addresses"),
  });

  useEffect(() => {
    if (id)
      reset({
        street: address?.street || "",
        place: address?.place || "",
        houseNumber: address?.houseNumber || "",
        postalCode: address?.postalCode || "",
        latitude: address?.latitude || 0,
        longitude: address?.longitude || 0,
      });
  }, [id, reset, address]);

  const onSubmit = (data: GeneralAddressFormProps) =>
    saveAddress({ variables: { entity: { id, ...data } } });

  return (
    <Accordion title="Adresse" className="max-w-4xl" open>
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
              id="place"
              label="Stadt"
              {...register("place")}
              placeholder="Wuppertal"
              error={errors.place?.message}
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
            {...register("longitude")}
            error={errors?.longitude?.message}
          />
          <InputField
            id="latitude"
            label="Breitengrad"
            placeholder="7.1507636"
            {...register("latitude")}
            error={errors?.latitude?.message}
          />
        </div>

        <Button type="submit">Speichern</Button>
      </form>
    </Accordion>
  );
};
