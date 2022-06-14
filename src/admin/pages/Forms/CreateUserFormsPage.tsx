import { joiResolver } from "@hookform/resolvers/joi";
import { ReactElement, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetMeBasicQuery,
  useGetUserTemplateAdminQuery,
  useSaveUserTemplateAdminMutation,
} from "../../../GraphQl/graphql";
import { Accordion, FormActions } from "../../components/molecules";
import {
  DescriptionFrom,
  FormsBaseForm,
  UserFormsFormInputs,
} from "../../components/organisms";
import { gqlVar } from "../../utils";
import { FormsFormSchema } from "../../validations";

const CreateUserFormsPage = (): ReactElement => {
  const { id } = useParams();
  const navigate = useNavigate();

  const methods = useForm<UserFormsFormInputs>({
    resolver: joiResolver(FormsFormSchema),
  });

  const { reset, handleSubmit } = methods;

  const { data: { me = null } = {} } = useGetMeBasicQuery();
  const { data: { getUserTemplate = null } = {} } =
    useGetUserTemplateAdminQuery({
      variables: { entity: { id } },
      skip: !id,
    });

  const [saveUserTemplate] = useSaveUserTemplateAdminMutation({
    onCompleted: () => navigate("/admin/forms/user-templates"),
  });

  const handleOnSubmit = ({
    description,
    baseData: { name, category, user },
  }: UserFormsFormInputs) => {
    saveUserTemplate(
      gqlVar({
        name,
        content: description,
        templateType: { id: category },
        user: { id: user },
        ...(!!getUserTemplate && { id: getUserTemplate?.id }),
      })
    );
  };

  const handleReset = () => reset();

  useEffect(() => {
    if (!!getUserTemplate) {
      reset({
        baseData: {
          name: getUserTemplate?.name || "",
          category: getUserTemplate?.templateType?.id || "",
          user: getUserTemplate?.templateType?.id || "",
        },
        description: getUserTemplate?.content || "",
      });
    }
  }, [getUserTemplate, reset]);

  return (
    <FormProvider {...methods}>
      <form className="min-h-full">
        <Accordion title="Stammdaten" open={!!id}>
          <FormsBaseForm />
        </Accordion>
        <Accordion title="Beschreibung">
          <DescriptionFrom />
        </Accordion>
        <FormActions
          onReset={handleReset}
          onSubmit={handleSubmit(handleOnSubmit)}
        />
      </form>
    </FormProvider>
  );
};

export default CreateUserFormsPage;
