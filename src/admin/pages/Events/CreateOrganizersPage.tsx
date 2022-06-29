import { joiResolver } from '@hookform/resolvers/joi';
import { ReactElement, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import {
  useGetOrganizerQuery,
  useSaveOrganizerMutation,
} from '../../../GraphQl/graphql';
import { Accordion, FormActions } from '../../components/molecules';
import {
  BaseOrganizerForm,
  OrganizerFormInputs,
} from '../../components/organisms';
import { twClsx } from '../../utils';
import { OrganizerFormSchema } from '../../validations';

const CreateOrganizersPage = (): ReactElement => {
  const { id } = useParams();
  const navigate = useNavigate();

  const methods = useForm<OrganizerFormInputs>({
    resolver: joiResolver(OrganizerFormSchema),
  });

  const {
    reset,
    handleSubmit,
    formState: { errors },
  } = methods;

  const { data: organizerData } = useGetOrganizerQuery({
    variables: { entity: { id } },
    skip: !id,
  });

  const [saveEventOrganizer] = useSaveOrganizerMutation({
    onCompleted: () => navigate('/admin/events/organizers'),
  });

  const handleOnSubmit = (data: OrganizerFormInputs) => {
    saveEventOrganizer({
      variables: {
        entity: {
          ...data,
          ...(!!organizerData && { id: organizerData?.organizer?.id }),
        },
      },
    });
  };

  useEffect(() => {
    if (!!organizerData?.organizer) {
      reset({
        mail: organizerData?.organizer?.mail || '',
        name: organizerData?.organizer?.name || '',
        phone: organizerData?.organizer?.phone || '',
        website: organizerData?.organizer?.website || '',
      });
    }
  }, [organizerData, reset]);

  return (
    <FormProvider {...methods}>
      <form className="min-h-full">
        <Accordion
          title="Stammdaten"
          open={!!id}
          className={twClsx(
            (errors.name || errors.phone || errors.mail) &&
              'border border-primary'
          )}
        >
          <BaseOrganizerForm />
        </Accordion>
        <FormActions onSubmit={handleSubmit(handleOnSubmit)} />
      </form>
    </FormProvider>
  );
};

export default CreateOrganizersPage;
