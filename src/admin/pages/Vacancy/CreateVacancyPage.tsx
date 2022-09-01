import { joiResolver } from '@hookform/resolvers/joi';
import dayjs from 'dayjs';
import { ReactElement, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useGetJobAdAdminQuery,
  useSaveJobAdMutation,
} from '../../../GraphQl/graphql';
import { Accordion, FormActions } from '../../components/molecules';
import {
  DescriptionFrom,
  VacancyForm,
  VacancyFormInputs,
  VacancyTerminForm,
} from '../../components/organisms';
import { gqlVar, twClsx } from '../../utils';
import { VacancyFormSchema } from '../../validations';

const CreateVacancyPage = (): ReactElement => {
  const { id } = useParams();
  const navigate = useNavigate();

  const methods = useForm<VacancyFormInputs>({
    resolver: joiResolver(VacancyFormSchema),
    defaultValues: {
      date: {
        startDate: dayjs().format(),
        dueDate: dayjs().add(7, 'day').format(),
      },
    },
  });

  const {
    reset,
    handleSubmit,
    formState: { errors },
  } = methods;

  const { data: { getJobAd = null } = {} } = useGetJobAdAdminQuery({
    variables: { entity: { id } },
    skip: !id,
  });

  const [saveJobAd] = useSaveJobAdMutation({
    onCompleted: () => navigate('/admin/job-announcements'),
  });

  const handleOnSubmit = ({
    description,
    date: { dueDate, startDate },
    baseData: { title, company, category },
  }: VacancyFormInputs) => {
    saveJobAd(
      gqlVar({
        title,
        dueDate,
        startDate,
        content: description,
        company: { id: company },
        type: { id: category },
        ...(!!getJobAd && { id: getJobAd?.id }),
      })
    );
  };

  useEffect(() => {
    if (!!getJobAd) {
      reset({
        baseData: {
          title: getJobAd?.title || '',
          company: getJobAd?.company?.id || '',
          category: getJobAd?.type?.id || '',
        },
        date: {
          startDate: dayjs(getJobAd?.startDate).format(),
          dueDate: dayjs(getJobAd?.dueDate).format(),
        },
        description: getJobAd?.content || '',
      });
    }
  }, [getJobAd, reset]);

  console.log(getJobAd);

  return (
    <FormProvider {...methods}>
      <form className="min-h-full">
        <Accordion
          title="Stammdaten"
          open={!!id}
          className={twClsx(errors.baseData && 'border border-primary')}
        >
          <VacancyForm />
        </Accordion>
        <Accordion
          title="Beschreibung"
          className={twClsx(errors.description && 'border border-primary')}
        >
          <DescriptionFrom />
        </Accordion>
        <Accordion
          title="Termine"
          className={twClsx(errors.date && 'border border-primary')}
        >
          <VacancyTerminForm />
        </Accordion>
        <FormActions onSubmit={handleSubmit(handleOnSubmit)} />
      </form>
    </FormProvider>
  );
};

export default CreateVacancyPage;
