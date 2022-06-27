import { joiResolver } from '@hookform/resolvers/joi';
import { ReactElement, useEffect, useState } from 'react';
import {
  FieldArrayWithId,
  FormProvider,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetPageQuery, useSavePageMutation } from '../../../GraphQl/graphql';
import { Button } from '../../components/atoms';
import { ButtonVariants } from '../../components/atoms/Form/Button/Button.props';
import {
  Accordion,
  EventImagePreview,
  FormActions,
  InputField,
  UploadField,
} from '../../components/molecules';
import { DescriptionFrom } from '../../components/organisms';
import { fileObject } from '../../utils';
import { PublicPagesFormSchema } from '../../validations';
import { PublicPageFormInputs } from './PublicPageForm.props';

const CreatePublicPagesPage = (): ReactElement => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [images, setImages] = useState<FieldArrayWithId<
    PublicPageFormInputs,
    'images',
    'id'
  > | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const methods = useForm<PublicPageFormInputs>({
    resolver: joiResolver(PublicPagesFormSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      images: [{ file: null }],
    },
  });

  const { data: { page = null } = {} } = useGetPageQuery({
    skip: !id,
    variables: { entity: { id } },
  });

  const [savePage] = useSavePageMutation({
    onCompleted: () => navigate('/admin/general-settings/public-pages'),
  });

  const {
    reset,
    watch,
    getValues,
    control,
    trigger,
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  // useEffect(() => {
  //   if (!!page) {
  //     reset({
  //       pageName: page.name || '',
  //       description: page.content || '',
  //     });
  //   }
  // }, [page, reset]);

  const { fields, append, remove } = useFieldArray({
    name: 'images',
    control,
  });

  console.log(watch(), errors);

  const handleTrigger = () => trigger();
  const handleOnSubmit = async (data: PublicPageFormInputs) => {
    let images: { name: string; mimeType: string; base64: string }[] = [];

    for (const field of fields) {
      if (!!field.file) {
        const object = await fileObject(field.file[0]);
        images.push(object);
      }
    }

    savePage({
      variables: {
        entity: {
          ...(id && { id }),
          slug: data.pageName,
          name: data.pageName,
          content: data.description,
          video: data.video && (await fileObject(data.video[0])),
          images,
          ...(!!imageFile && { titleImage: await fileObject(imageFile) }),
        },
      },
    });
  };

  const handleSetFile =
    (item: FieldArrayWithId<PublicPageFormInputs, 'images', 'id'>) => () => {
      setImages(item);
    };

  const handleAppend = () => {
    console.log('Executed');
    append({ file: null });
  };

  const handleRemoveImage = (id: string) => {
    console.log(
      id,
      fields.findIndex((field) => field.id === id),
      fields
    );
    remove(fields.findIndex((field) => field.id !== id));
    setImages(null);
  };
  const handleRemoveVideo = () => {};
  const onHandle = (file: File | null) => setImageFile(file);

  return (
    <FormProvider {...methods}>
      <form>
        <Accordion title="Stammdaten" open={!!id}>
          <InputField
            id="pageName"
            label="Stammdaten"
            {...register('pageName')}
            error={errors.pageName?.message}
          />
          <Button className="mt-6" type="button" onClick={handleTrigger}>
            Speichern
          </Button>
        </Accordion>
        <Accordion
          title="Titelbild"
          showSide
          sideClassName="w-auto"
          sideContent={
            images && (
              <EventImagePreview
                id={images.id}
                file={images.file?.[0] || null}
                onHandle={onHandle}
                onRemoveImage={handleRemoveImage}
              />
            )
          }
        >
          <div className="flex items-start justify-start">
            {fields.map((item, index) => (
              <UploadField
                preview
                key={index}
                id={`files.${index}.file`}
                handleAppend={handleAppend}
                handleShow={handleSetFile(item)}
                {...register(`images.${index}.file`)}
                error={errors.images?.[index]?.file?.message}
                // {...(!!item.file && {
                //   src: URL.createObjectURL(item.file),
                // })}
              />
            ))}
          </div>
          <Button type="button" className="mt-6" onClick={handleTrigger}>
            Speichern
          </Button>
        </Accordion>

        <Accordion title="Textfeld">
          <DescriptionFrom />
        </Accordion>

        <Accordion title="Video" className="p-5">
          <div className="flex items-start justify-start">
            <UploadField id="video" {...register('video')} />
          </div>
          <div className="flex gap-x-2">
            <Button
              onClick={handleRemoveVideo}
              className="border-[#424242] text-[#424242]"
              type="button"
            >
              Löschen
            </Button>
            <Button
              type="button"
              color={ButtonVariants.secondary}
              onClick={handleTrigger}
            >
              Speichern
            </Button>
          </div>
        </Accordion>
        <FormActions onSubmit={handleSubmit(handleOnSubmit)} />
      </form>
    </FormProvider>
  );
};

export default CreatePublicPagesPage;
