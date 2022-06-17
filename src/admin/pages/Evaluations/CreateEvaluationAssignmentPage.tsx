import { joiResolver } from '@hookform/resolvers/joi';
import { ReactElement, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import {
  useGetOrganizerQuery,
  useSaveOrganizerMutation,
} from '../../../GraphQl/graphql';
import { Button, Select } from '../../components/atoms';
import { Accordion, FormActions } from '../../components/molecules';
import {
  BaseOrganizerForm,
  OrganizerFormInputs,
} from '../../components/organisms';
import { OrganizerFormSchema } from '../../validations';
import { EvaluationAssignmentFormSchema } from '../../validations/EvaluationAssignmentForm.schema';
import { EvaluationFormInputs } from './EvaluationForm.props';

const CreateEvaluationAssignmentPage = (): ReactElement => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { register, reset, handleSubmit } = useForm<EvaluationFormInputs>({
    resolver: joiResolver(EvaluationAssignmentFormSchema),
  });

  //   const { reset, handleSubmit, trigger } = methods;

  //   const { data: organizerData } = useGetOrganizerQuery({
  //     variables: { entity: { id } },
  //     skip: !id,
  //   });

  //   const [saveEventOrganizer] = useSaveOrganizerMutation({
  //     onCompleted: () => navigate('/admin/evaluations/assignments'),
  //   });

  //   const handleOnSubmit = (data: OrganizerFormInputs) => {
  //     saveEventOrganizer({
  //       variables: {
  //         entity: {
  //           ...data,
  //           ...(!!organizerData && { id: organizerData?.organizer?.id }),
  //         },
  //       },
  //     });
  //   };

  const handleReset = () => reset();
  const onSubmit = (data: EvaluationFormInputs) => console.log(data);

  //   useEffect(() => {
  //     if (!!organizerData?.organizer) {
  //       reset({
  //         mail: organizerData?.organizer?.mail || '',
  //         name: organizerData?.organizer?.name || '',
  //         phone: organizerData?.organizer?.phone || '',
  //         website: organizerData?.organizer?.website || '',
  //       });
  //     }
  //   }, [organizerData, reset]);

  return (
    <form className="min-h-full">
      <Accordion title="Stammdaten" open={!!id}>
        <div className="space-y-6">
          <Select id="user" label="Benutzer/in" {...register('user')}>
            <option value="value 1">Option 1</option>
            <option value="value 2">Option 2</option>
            <option value="value 3">Option 3</option>
          </Select>
          <Select label="Evaluierungsbogen" {...register('evaluationQuestion')}>
            <option value="value 1">Option 1</option>
            <option value="value 2">Option 2</option>
            <option value="value 3">Option 3</option>
          </Select>
        </div>
      </Accordion>
      <FormActions onReset={handleReset} onSubmit={handleSubmit(onSubmit)} />
    </form>
  );
};

export default CreateEvaluationAssignmentPage;
