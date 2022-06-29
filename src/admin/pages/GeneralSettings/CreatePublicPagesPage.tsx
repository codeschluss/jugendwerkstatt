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
import {
  Accordion,
  EventImagePreview,
  FormActions,
  InputField,
  UploadField,
} from '../../components/molecules';
import { DescriptionFrom } from '../../components/organisms';
import { fileObject, twClsx } from '../../utils';
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

  const [imageFile, setImageFile] = useState<{ file: File; id: string } | null>(
    null
  );

  const methods = useForm<PublicPageFormInputs>({
    resolver: joiResolver(PublicPagesFormSchema),
    mode: 'onChange',
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
    resetField,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  console.log(errors);

  const { fields, append, remove, update } = useFieldArray({
    name: 'images',
    control,
  });

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
          ...(!!imageFile?.file && {
            titleImage: await fileObject(imageFile.file),
          }),
        },
      },
    });
  };

  const handleSetFile =
    (item: FieldArrayWithId<PublicPageFormInputs, 'images', 'id'>) => () => {
      setImages(item);
    };

  const handleAppend = (index: number, file: FileList | null) => {
    update(index, { file });
    append({ file: null });
  };

  const handleRemoveImage = (id: string) => {
    remove(fields.findIndex((field) => field.id === id));
    setImages(null);
  };

  const handleRemoveVideo = () => resetField('video', { keepError: true });

  const onHandle = (data: { file: File; id: string } | null) => {
    setImageFile(data);
  };

  useEffect(() => {
    if (!!page) {
      reset({
        pageName: page.name || '',
        description: page.content || '',
      });
    }
  }, [page, reset]);

  return (
    <FormProvider {...methods}>
      <form>
        <Accordion
          title="Stammdaten"
          open={!!id}
          className={twClsx(errors.pageName && 'border border-primary')}
        >
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
                file={images.file?.[0] || null}
                onHandle={onHandle}
                isTitleBild={imageFile?.id === images.id}
                onRemoveImage={handleRemoveImage}
              />
            )
          }
          className={twClsx(errors.images && 'border border-primary')}
        >
          <div className="flex items-start justify-start">
            {fields.map((item, index) => (
              <UploadField
                preview
                key={index}
                index={index}
                id={`images.${index}.file`}
                handleAppend={handleAppend}
                handleShow={handleSetFile(item)}
                {...register(`images.${index}.file`)}
                error={errors.images?.[index]?.file?.message}
                {...(!!item.file && {
                  src: URL.createObjectURL(item.file[0]),
                })}
              />
            ))}
          </div>
        </Accordion>

        <Accordion
          title="Textfeld"
          className={twClsx(errors.description && 'border border-primary')}
        >
          <DescriptionFrom />
        </Accordion>

        <Accordion
          title="Video"
          className={twClsx('p-5', errors.video && 'border border-primary')}
        >
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
