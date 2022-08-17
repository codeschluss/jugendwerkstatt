import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import { InputField } from "../../molecules";

export const AddressForm = (): ReactElement => {
    const {
        register,
        formState: {
            errors: { address },
        },
    } = useFormContext();

    return (
        <>
            <div className="grid grid-cols-auto md:grid-cols-2 md:gap-8">
                <div className="flex flex-col justify-start w-full md:space-y-6">
                    <InputField
                        id="street"
                        label="Straße"
                        className="my-2"
                        {...register("address.street")}
                        error={address?.street?.message}
                        placeholder="Straße"
                    />
                    <InputField
                        id="place"
                        label="Stadt"
                        className="my-2"
                        {...register("address.place")}
                        placeholder="Stadt"
                        error={address?.place?.message}
                    />
                </div>
                <div className="flex flex-col justify-start w-full md:space-y-6">
                    <InputField
                        inputClassName="md:w-32"
                        placeholder="Hausnummer"
                        id="houseNumber"
                        label="Hausnummer"
                        className="my-2"
                        {...register("address.houseNumber")}
                        error={address?.houseNumber?.message}
                    />
                    <InputField
                        inputClassName="md:w-32"
                        id="postalCode"
                        label="Postleitzahl"
                        placeholder="Postleitzahl"
                        className="my-2"
                        {...register("address.postalCode")}
                        error={address?.postalCode?.message}
                    />
                </div>
            </div>
        </>
    );
};
