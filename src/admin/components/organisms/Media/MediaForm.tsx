import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import { Button, Select } from "../../atoms";
import { InputField } from "../../molecules";
import { MediaFormInputs } from "./Media.types";

export const MediaForm = (): ReactElement => {
  const {
    register,
    formState: { errors },
  } = useFormContext<MediaFormInputs>();

  return (
    <>
      <div className="flex flex-col justify-start w-full space-y-6">
        <InputField
          id="video"
          label="Videoname"
          {...register("video")}
          placeholder="How to...Bewerbungsvideo drehen"
          error={errors?.video?.message}
        />

        <InputField
          id="link"
          label="Link"
          {...register("link")}
          error={errors?.link?.message}
          placeholder="https://planet-beruf.de/schuelerinnen/video/video-how-to-bewerbungsvideos-drehen"
        />

        <Select
          id="category"
          label="Kategorie"
          {...register("category")}
          defaultValue={1}
          error={errors?.category?.message}
        >
          {[1, 2, 3].map((i) => (
            <option key={i} value={i}>
              test {i}
            </option>
          ))}
        </Select>
      </div>
      <Button className="mt-6">Speichern</Button>
    </>
  );
};
