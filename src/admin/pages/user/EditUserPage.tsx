import { joiResolver } from "@hookform/resolvers/joi";
import { ReactElement } from "react";
import { FieldError, useForm } from "react-hook-form";
import { useGetRolesQuery } from "../../../GraphQl/graphql";
import { Button } from "../../components/atoms";
import { MultiSelect } from "../../components/atoms/Form/MultiSelect/MultiSelect";
import { OptionType } from "../../components/atoms/Form/MultiSelect/MultiSelect.props";
import { Accordion } from "../../components/molecules";
import { UserFormSchema } from "../../validations/UserForm.schema";
import { UserFormInputs } from "./User.props";

const EditUserPage = (): ReactElement => {
  // AddRole Mutation will be Added later addRole(userId, roleId)
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserFormInputs>({
    resolver: joiResolver(UserFormSchema),
  });
  const { data } = useGetRolesQuery();
  console.log(data);
  console.log("here");

  const handleChange = (values: OptionType[]) => {
    console.log(values);
    setValue("roles", values, { shouldValidate: true });
  };
  const onSubmit = (data: UserFormInputs) => console.log(data);

  return (
    <div className="min-h-full">
      <Accordion title="Max Müller Rolle zuweisen">
        <MultiSelect
          options={
            data?.roles?.result?.map((role) => {
              return {
                id: role?.id,
                label: role?.name,
              };
            }) || []
          }
          isSearchable={false}
          onGetValues={handleChange}
        />
        {errors && (
          <span className="text-primary">
            {(errors.roles as FieldError)?.message}
          </span>
        )}
        <Button className="mt-6" onClick={handleSubmit(onSubmit)}>
          Speichern
        </Button>
      </Accordion>
    </div>
  );
};

export default EditUserPage;
