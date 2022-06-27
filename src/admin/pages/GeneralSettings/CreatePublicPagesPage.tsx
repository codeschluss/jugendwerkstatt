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
import { fileToBase64 } from '../../utils/fileToBase64';
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
  });

  const { data: { page = null } = {} } = useGetPageQuery({
    skip: !id,
    variables: { entity: { id } },
  });

  console.log(page);
  const [savePage] = useSavePageMutation({
    onCompleted: () => navigate('/admin/general-settings/public-pages'),
  });

  const {
    reset,
    control,
    trigger,
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const { fields, append, remove } = useFieldArray({
    name: 'images',
    control,
  });

  const handleTrigger = () => trigger();
  const handleOnSubmit = async (data: PublicPageFormInputs) => {
    let images: { name: string; mimeType: string; base64: string }[] = [];

    for (const field of fields) {
      const object = await fileToBase64(field.file[0]);
      images.push(object);
    }

    savePage({
      variables: {
        entity: {
          ...(id && { id }),
          slug: data.pageName,
          name: data.pageName,
          content: data.description,
          video: await fileToBase64(data.video[0]),
          images,
          ...(!!imageFile && { titleImage: await fileToBase64(imageFile) }),
        },
      },
    });
  };

  const handleSetFile =
    (item: FieldArrayWithId<PublicPageFormInputs, 'images', 'id'>) => () => {
      setImages(item);
    };

  const handleAppend = (file: FileList) => {
    append({ file: file || undefined });
  };

  const handleRemoveImage = (id: string) => {
    remove(fields.findIndex((field) => field.id === id));
    setImages(null);
  };
  const handleRemoveVideo = () => {};
  const onHandle = (file: File | null) => setImageFile(file);

  useEffect(() => {
    if (!!page) {
      reset({
        pageName: page?.name || '',
        description: page?.content || '',
      });
    }
  }, [page, reset]);

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
        </Accordion>
        <Accordion
          title="Titelbild"
          showSide
          sideClassName="w-auto"
          sideContent={
            images && (
              <EventImagePreview
                id={images.id}
                onHandle={onHandle}
                onRemoveImage={handleRemoveImage}
                file={images.file[0]}
              />
            )
          }
        >
          <div className="flex items-start justify-start">
            {fields.map((item, index) => (
              <UploadField
                key={index}
                preview
                handleShow={handleSetFile(item)}
                src={URL.createObjectURL(item.file[0])}
                id={`images.${index}.file`}
                {...register(`images.${index}.file`)}
              />
            ))}

            {/* <UploadField handleAppend={handleAppend} /> */}
          </div>
        </Accordion>

        <Accordion title="Beschreibung">
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
          </div>
        </Accordion>
        <FormActions onSubmit={handleSubmit(handleOnSubmit)} />
      </form>
    </FormProvider>
  );
};

export default CreatePublicPagesPage;
