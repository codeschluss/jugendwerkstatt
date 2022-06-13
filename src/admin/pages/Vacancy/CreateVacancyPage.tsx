import { joiResolver } from "@hookform/resolvers/joi";
import dayjs from "dayjs";
import { ReactElement, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetJobAdAdminQuery,
  useSaveJobAdMutation,
} from "../../../GraphQl/graphql";
import { Accordion, FormActions } from "../../components/molecules";
import {
  VacancyForm,
  VacancyFormInputs,
  VacancyTerminForm,
} from "../../components/organisms";
import { gqlVar } from "../../utils";
import { VacancyFormSchema } from "../../validations";

const CreateVacancyPage = (): ReactElement => {
  const { id } = useParams();
  const navigate = useNavigate();

  const methods = useForm<VacancyFormInputs>({
    resolver: joiResolver(VacancyFormSchema),
    defaultValues: {
      date: {
        startDate: dayjs().format(),
        dueDate: dayjs().add(7, "day").format(),
      },
    },
  });

  const { reset, handleSubmit } = methods;

  const { data: { getJobAd = null } = {} } = useGetJobAdAdminQuery({
    variables: { entity: { id } },
    skip: !id,
  });

  const [saveJobAd] = useSaveJobAdMutation({
    onCompleted: () => navigate("/admin/job-announcements"),
  });

  const handleOnSubmit = ({
    baseData: { title, company, category },
    date: { dueDate, startDate },
  }: VacancyFormInputs) => {
    saveJobAd(
      gqlVar({
        title,
        dueDate,
        startDate,
        company: { id: company },
        type: { id: category },
        ...(!!getJobAd && { id: getJobAd?.id }),
      })
    );
  };

  const handleReset = () => reset();

  useEffect(() => {
    if (!!getJobAd) {
      reset({
        baseData: {
          title: getJobAd?.title || "",
          company: getJobAd?.company?.id || "",
          category: getJobAd?.type?.id || "",
        },
        date: {
          startDate: dayjs(getJobAd?.startDate).format(),
          dueDate: dayjs(getJobAd?.dueDate).format(),
        },
      });
    }
  }, [getJobAd, reset]);

  return (
    <FormProvider {...methods}>
      <form className="min-h-full">
        <Accordion title="Stammdaten" open={!!id}>
          <VacancyForm />
        </Accordion>
        <Accordion title="Termine">
          <VacancyTerminForm />
        </Accordion>
        <FormActions
          onReset={handleReset}
          onSubmit={handleSubmit(handleOnSubmit)}
        />
      </form>
    </FormProvider>
  );
};

export default CreateVacancyPage;
