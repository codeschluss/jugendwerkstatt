import { ReactElement } from "react";
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

  const { data: companyData } = useGetCompanyQuery({
    variables: { entity: { id } },
    skip: !id,
  });

  const [saveCompany] = useSaveCompanyMutation({
    onCompleted: () => navigate("/admin/job-announcements/companies"),
  });

  const handleReset = () => reset();

  const handleOnSubmit = ({
    baseData,
    address,
  }: VacancyCompaniesFormInputs) => {
    saveCompany({
      variables: {
        entity: {
          ...baseData,
          address: { ...address, latitude: 0, longitude: 0 },
          ...(!!companyData && { id: companyData?.getCompany?.id }),
        },
      },
    });
  };

  return (
    <FormProvider {...methods}>
      <form className="min-h-full">
        <Accordion title="Stammdaten" open={!!id}>
          <VacancyCompanyForm />
        </Accordion>
        <Accordion title="Adresse">
          <AddressForm />
        </Accordion>
        <FormActions
          onReset={handleReset}
          onSubmit={handleSubmit(handleOnSubmit)}
        />
      </form>
    </FormProvider>
  );
};

export default CreateVacancyCompaniesPage;
