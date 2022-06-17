import { joiResolver } from '@hookform/resolvers/joi';
import { ReactElement } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Accordion, FormActions, InputField } from '../../components/molecules';
import { PublicPagesFormProps } from '../../components/organisms/GeneralSettings/PublicPagesForm.props';
import { PublicPagesFormSchema } from '../../validations';

const CreatePublicPagesPage = (): ReactElement => {
  const methods = useForm<PublicPagesFormProps>({
    resolver: joiResolver(PublicPagesFormSchema),
  });

  const { register, reset, handleSubmit } = methods;

  const onSubmit = (data: PublicPagesFormProps) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form className="min-h-full">
        <Accordion title="Stammdaten">
          {/* <InputField id="name" label="Seitenname" {...register('name')} /> */}
        </Accordion>
        {/* <Accordion title="Beschreibung">
          <DescriptionFrom />
        </Accordion> */}
        <FormActions onSubmit={handleSubmit(onSubmit)} />
      </form>
    </FormProvider>
    // <Accordion title="Beschreibung">
    //   <DescriptionFrom />
    // </Accordion>
    // <Accordion title="Neue Seite hinzufügen">
    //   <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
    //     <InputField
    //       id="pageName"
    //       label="Seitenname"
    //       {...register('pageName')}
    //       error={errors.pageName?.message}
    //       placeholder="Team Jugendwerkstatt"
    //     />
    //     <Select
    //       id="pageContent"
    //       placeholder="Textfeld"
    //       defaultValue={1}
    //       label="Seiteninhalt"
    //       {...register('pageContent')}
    //       error={errors.pageContent?.message}
    //     >
    //       {['Value 1', 'Value 2', 'Value 3'].map((value) => (
    //         <option value={value}>{value}</option>
    //       ))}
    //     </Select>

    //     <div className="mt-5 space-y-5">
    //       <Button variant={ButtonVariantsEnum.SECONDARY}>
    //         Weiteren Seiteninhalt hinzufügen
    //       </Button>
    //       <Button>Speichern</Button>
    //     </div>
    //   </form>
    // </Accordion>
  );
};

export default CreatePublicPagesPage;
