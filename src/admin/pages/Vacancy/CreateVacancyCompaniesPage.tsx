import { joiResolver } from "@hookform/resolvers/joi";
import { ReactElement } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetCompanyQuery,
  useSaveCompanyMutation,
} from "../../../GraphQl/graphql";
import { Button } from "../../components/atoms";

import { Accordion } from "../../components/molecules";
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

  console.log("companyData", companyData);

  const [saveCompany] = useSaveCompanyMutation({
    onCompleted: () => navigate("/admin/job-announcements/companies"),
  });

  const handleReset = () => reset();

  const handleOnSubmit = ({
    baseData,
    address,
  }: VacancyCompaniesFormInputs) => {
    console.log("data", baseData, address);
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
        <div className="flex md:justify-start justify-between flex-row mt-4">
          <Button
            onClick={handleReset}
            className="md:mr-6 border-[#424242] text-[#424242]"
            type="button"
          >
            Zurücksetzen
          </Button>
          <Button className="md:mr-6" onClick={handleSubmit(handleOnSubmit)}>
            Absenden
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default CreateVacancyCompaniesPage;
