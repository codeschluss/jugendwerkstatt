import { joiResolver } from '@hookform/resolvers/joi';
import { ReactElement, useEffect, useState } from 'react';
import {
  FieldArrayWithId,
  FormProvider,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../../../config/app';
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
import { base64ImageToFile, fileObject, twClsx } from '../../utils';
import { PublicPagesFormSchema } from '../../validations';
import { PublicPageFormInputs } from './PublicPageForm.props';

const CreatePublicPagesPage = (): ReactElement => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [images, setImages] = useState<FieldArrayWithId<
    PublicPageFormInputs,
    'images',
    'id'
  > | null>(null);

  const [imageFile, setImageFile] = useState<{ file: File; id: string } | null>(
    null
  );

  const { data: { page = null } = {} } = useGetPageQuery({
    skip: !id,
    variables: { entity: { id } },
  });

  const methods = useForm<PublicPageFormInputs>({
    resolver: joiResolver(PublicPagesFormSchema),
    mode: 'onChange',
    defaultValues: {
      images: [{ file: null }],
      video: { file: null },
    },
  });

  const [savePage, { loading }] = useSavePageMutation({
    onCompleted: () => navigate('/admin/general-settings/public-pages'),
  });

  const {
    watch,
    reset,
    resetField,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  console.log(page);

  const { fields, append, remove, update } = useFieldArray({
    name: 'images',
    control,
  });

  const handleOnSubmit = async (data: PublicPageFormInputs) => {
    let images: { name: string; mimeType: string; base64: string }[] = [];

    for (const field of fields) {
      if (!!field.file) {
        const object = await fileObject(field.file);
        images.push({ ...object });
      }
    }

    let videos: File[] = data.video as unknown as File[];
    let choosedVideo: {
      name: string;
      mimeType: string;
      base64: string;
    } | null = null;
    if (!page) {
      for (const v of videos) {
        const obj = await fileObject(v);
        choosedVideo = {
          name: obj.name,
          mimeType: obj.mimeType,
          base64: obj.base64,
        };
      }
    }
    console.log('videos', videos[0]);
    // for (const video of data.video) console.log(data.video[0] as FileList);
    // const video = await fileObject(data.video as unknown as File);

    savePage({
      variables: {
        entity: {
          ...(id && { id }),
          slug: data.pageName,
          name: data.pageName,
          content: data.description,
          images,
          ...(!!imageFile?.file &&
            imageFile?.file?.size !== 0 && {
            titleImage: await fileObject(imageFile.file),
          }),
          video: page
            ? {
              id: page.video?.id,
              mimeType: page.video?.mimeType,
              base64: page.video?.base64,
            }
            : { ...choosedVideo },
        },
      },
    });
  };

  const handleAppend = (index: number, file: File | null) => {
    update(index, { file });
    append({ file: null });
  };

  const handleSetFile =
    (item: FieldArrayWithId<PublicPageFormInputs, 'images', 'id'>) => () => {
      setImages(item);
    };

  const handleRemoveImage = (id: string) => {
    remove(fields.findIndex((field) => field.id === id));
    setImages(null);
  };

  const handleRemoveVideo = () => resetField('video');

  const onHandle = (data: { file: File; id: string } | null) => {
    setImageFile(data);
  };

  useEffect(() => {
    if (!!page) {
      const images =
        page?.images?.map((item) => ({
          file: base64ImageToFile(
            item?.base64 || '',
            item?.mimeType || '',
            item?.name || ''
          ),
        })) || [];

      reset({
        pageName: page.name || '',
        description: page.content || '',
        images: [...images, { file: null }],
        video: {
          file: base64ImageToFile(
            page?.video?.base64 || '',
            page?.video?.mimeType || '',
            page?.video?.name || ''
          ),
        },
      });
      setImageFile({
        id: page?.titleImage?.id || '',
        file: base64ImageToFile(
          page?.titleImage?.base64 || '',
          page?.titleImage?.mimeType || '',
          page?.titleImage?.name || ''
        ),
      });
    }
  }, [page, reset]);

  console.log(errors, watch());

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
                {...(images?.file && {
                  src:
                    images.file.size === 0
                      ? `${API_URL}media/${images?.id}`
                      : URL.createObjectURL(images.file),
                })}
                file={images.file}
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
                  src:
                    item.file.size !== 0
                      ? URL.createObjectURL(item.file)
                      : `${API_URL}media/${item?.id}`,
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
            <UploadField id="video"
              placeholderTitle="bild hinzufügen"
              {...register('video')} />
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
        <FormActions
          loading={loading}
          onSubmit={handleSubmit(handleOnSubmit)}
        />
      </form>
    </FormProvider>
  );
};

export default CreatePublicPagesPage;
