import { ReactElement, useEffect } from "react";
import { useFormContext } from "react-hook-form";

import {
  useGetEventCategoriesAdminQuery,
  useGetOrganizersQuery,
} from "../../../../GraphQl/graphql";
import { Button, Select } from "../../atoms";
import { InputField } from "../../molecules";
import { EventsFormInputs } from "./Events.types";

export const BaseDataForm = (): ReactElement => {
  // graphql hooks
  const { data: organizersData } = useGetOrganizersQuery();
  const { data: categoriesData } = useGetEventCategoriesAdminQuery();

  const {
    setValue,
    getValues,
    trigger,
    register,
    formState: {
      errors: { baseData },
    },
  } = useFormContext<EventsFormInputs>();

  const handleTrigger = () => trigger("baseData");

  useEffect(() => {
    if (!getValues("baseData.category") && categoriesData) {
      setValue(
        "baseData.category",
        categoriesData?.categories?.result?.[0]?.id || ""
      );
    }
    if (!getValues("baseData.organizer") && organizersData) {
      setValue(
        "baseData.organizer",
        organizersData?.organizers?.result?.[0]?.id || ""
      );
    }
  }, [organizersData, categoriesData, getValues, setValue]);

  return (
    <>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col justify-start space-y-6">
          <InputField
            id="name"
            label="Eventname"
            {...register("baseData.name")}
            error={baseData?.name?.message}
            placeholder="Das erste Event"
          />
        </div>
        <div className="flex flex-col justify-start w-full space-y-6">
          <Select
            id="category"
            label="Kategorie"
            {...register("baseData.category")}
            error={baseData?.category?.message}
          >
            {categoriesData?.categories?.result?.map((item) => (
              <option key={item?.id} value={item?.id || ""}>
                {item?.name}
              </option>
            ))}
          </Select>

          <Select
            id="organizator"
            label="Veranstalter"
            {...register("baseData.organizer")}
            error={baseData?.organizer?.message}
          >
            {organizersData?.organizers?.result?.map((item) => (
              <option key={item?.id} value={item?.id || ""}>
                {item?.name}
              </option>
            ))}
          </Select>
        </div>
      </div>
      <Button type="button" className="mt-6" onClick={handleTrigger}>
        Speichern
      </Button>
    </>
  );
};
