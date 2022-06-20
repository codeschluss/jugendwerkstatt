import { joiResolver } from "@hookform/resolvers/joi";
import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { ButtonVariantsEnum } from "../../../interfaces/enums/ButtonVariants.enum";
import { PublicPagesFormSchema } from "../../../validations";
import { Button, Select } from "../../atoms";
import { Accordion, InputField } from "../../molecules";
import { PublicPagesFormProps } from "./PublicPagesForm.props";

export const PublicPagesForm = (): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PublicPagesFormProps>({
    resolver: joiResolver(PublicPagesFormSchema),
  });

  const onSubmit = (data: PublicPagesFormProps) => console.log(data);

  return (
    <Accordion title="Neue Seite hinzufügen">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          id="pageName"
          label="Seitenname"
          {...register("pageName")}
          error={errors.pageName?.message}
          placeholder="Team Jugendwerkstatt"
        />
        <Select
          id="pageContent"
          placeholder="Textfeld"
          defaultValue={1}
          label="Seiteninhalt"
          {...register("pageContent")}
          error={errors.pageContent?.message}
        >
          {["Value 1", "Value 2", "Value 3"].map((value) => (
            <option value={value}>{value}</option>
          ))}
        </Select>

        <div className="mt-5 space-y-5">
          <Button variant={ButtonVariantsEnum.SECONDARY}>
            Weiteren Seiteninhalt hinzufügen
          </Button>
          <Button>Speichern</Button>
        </div>
      </form>
    </Accordion>
  );
};
