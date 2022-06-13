import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";

import { Select } from "../../atoms";
import { InputField } from "../../molecules";
import { useGetLinkCategoriesAdminQuery } from "../../../../GraphQl/graphql";
import { MediaFormInputs } from "./Media.types";

export const MediaForm = (): ReactElement => {
  const { data } = useGetLinkCategoriesAdminQuery();

  const {
    register,
    formState: { errors },
  } = useFormContext<MediaFormInputs>();

  return (
    <div className="flex flex-col justify-start w-full space-y-6">
      <InputField
        id="title"
        label="Videoname"
        {...register("title")}
        placeholder="How to...Bewerbungsvideo drehen"
        error={errors?.title?.message}
      />

      <InputField
        id="url"
        label="Link"
        {...register("url")}
        error={errors?.url?.message}
        placeholder="https://planet-beruf.de/schuelerinnen/video/video-how-to-bewerbungsvideos-drehen"
      />

      <Select
        id="category"
        label="Kategorie"
        {...register("category")}
        defaultValue={1}
        error={errors?.category?.message}
      >
        {data?.getLinkCategories?.result?.map((item) => (
          <option key={item?.id} value={item?.id || ""}>
            {item?.name}
          </option>
        ))}
      </Select>
    </div>
  );
};
