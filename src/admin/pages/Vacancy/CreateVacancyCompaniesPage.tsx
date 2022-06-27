import { ReactElement, useEffect } from "react";
import { joiResolver } from "@hookform/resolvers/joi";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetCompanyQuery,
  useSaveCompanyMutation,
} from "../../../GraphQl/graphql";

import { Accordion, FormActions } from "../../components/molecules";
import {
  AddressForm,
  VacancyCompaniesFormInputs,
  VacancyCompanyForm,
} from "../../components/organisms";
import { VacancyCompaiesFormSchema } from "../../validations";

const CreateVacancyCompaniesPage = (): ReactElement => {
  const { id } = useParams();
  const navigate = useNavigate();

  const methods = useForm<VacancyCompaniesFormInputs>({
    resolver: joiResolver(VacancyCompaiesFormSchema),
  });

  const { reset, handleSubmit } = methods;

  const { data: { getCompany = null } = {} } = useGetCompanyQuery({
    variables: { entity: { id } },
    skip: !id,
  });

  const [saveCompany] = useSaveCompanyMutation({
    onCompleted: () => navigate("/admin/job-announcements/companies"),
  });

  const handleOnSubmit = ({
    baseData,
    address,
  }: VacancyCompaniesFormInputs) => {
    saveCompany({
      variables: {
        entity: {
          ...baseData,
          address,
          // jobAd: [
          //   {
          //     id: "2a592f70-9ffe-404a-b8dc-2c95ca4799ec",
          //   },
          // ],
          ...(!!getCompany && { id: getCompany?.id }),
        },
      },
    });
  };

  useEffect(() => {
    if (!!getCompany) {
      reset({
        address: {
          houseNumber: getCompany?.address?.houseNumber || "",
          place: getCompany?.address?.place || "",
          postalCode: getCompany?.address?.postalCode || "",
          street: getCompany?.address?.street || "",
        },
        baseData: {
          mail: getCompany?.mail || "",
          name: getCompany?.name || "",
          phone: getCompany?.phone || "",
          website: getCompany?.website || "",
        },
      });
    }
  }, [getCompany, reset]);

  return (
    <FormProvider {...methods}>
      <form className="min-h-full">
        <Accordion title="Stammdaten" open={!!id}>
          <VacancyCompanyForm />
        </Accordion>
        <Accordion title="Adresse">
          <AddressForm />
        </Accordion>
        <FormActions onSubmit={handleSubmit(handleOnSubmit)} />
      </form>
    </FormProvider>
  );
};

export default CreateVacancyCompaniesPage;
