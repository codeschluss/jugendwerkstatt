import { joiResolver } from '@hookform/resolvers/joi';
import { ReactElement } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Accordion } from '../../components/molecules';
import {
  DescriptionFrom,
  FormsBaseForm,
  FormsFormInputs,
} from '../../components/organisms';
import { FormsFormSchema } from '../../validations';

const CreateFormsPage = (): ReactElement => {
  const methods = useForm<FormsFormInputs>({
    resolver: joiResolver(FormsFormSchema),
  });

  const handleOnSubmit = (data: FormsFormInputs) => {
    console.log('data', data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="min-h-full"
        onSubmit={methods.handleSubmit(handleOnSubmit)}
      >
        <Accordion title="Stammdaten">
          <FormsBaseForm />
        </Accordion>
        <Accordion title="Beschreibung">
          <DescriptionFrom />
        </Accordion>
      </form>
    </FormProvider>
  );
};

export default CreateFormsPage;
