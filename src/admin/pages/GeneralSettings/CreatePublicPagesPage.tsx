import { joiResolver } from "@hookform/resolvers/joi";
import { ReactElement, useEffect, useState } from "react";
import { FieldArrayWithId, FormProvider, useFieldArray, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useGetPageQuery, useSavePageMutation } from "../../../GraphQl/graphql";
import { Button } from "../../components/atoms";
import {
  Accordion,
  EventImagePreview,
  FormActions,
  InputField,
  UploadField,
  UploadVideo
} from "../../components/molecules";
import { DescriptionFrom } from "../../components/organisms";
import { base64ImageToFile, fileObject, twClsx } from "../../utils";
import { PublicPagesFormSchema } from "../../validations";
import { PublicPageFormInputs } from "./PublicPageForm.props";

const CreatePublicPagesPage = (): ReactElement => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [file, setFile] = useState<FieldArrayWithId<PublicPageFormInputs, "files", "id"> | null>(
        null,
    );

    const [imageFile, setImageFile] = useState<{ file: File; id: string } | null>(null);

    const { data: { page = null } = {} } = useGetPageQuery({
        skip: !id,
        variables: { entity: { id } },
    });

    const methods = useForm<PublicPageFormInputs>({
        resolver: joiResolver(PublicPagesFormSchema),
        mode: "onChange",
        defaultValues: {
            files: [{ file: null }],
            video: { file: null },
        },
    });

    const [savePage, { loading }] = useSavePageMutation({
        onCompleted: () => navigate("/admin/general-settings/public-pages"),
    });

    const {
        reset,
        resetField,
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = methods;

    const { fields, append, remove, update } = useFieldArray({
        name: "files",
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

        const videos = Array.from(data.video as unknown as FileList);
        let pageVideo;
        for (let video of videos) {
            pageVideo = video;
        }

        savePage({
            variables: {
                entity: {
                    ...(id && { id }),
                    images,
                    slug: data.pageName,
                    name: data.pageName,
                    content: data.description,
                    ...(!!imageFile?.file &&
                        file?.file?.size !== 0 && {
                            titleImage: await fileObject(imageFile.file),
                        }),
                    ...(!!pageVideo &&
                        pageVideo?.size !== 0 && {
                            video: await fileObject(pageVideo),
                        }),
                },
            },
        });
    };

    const handleAppend = (index: number, file: File | null) => {
        update(index, { file });
        append({ file: null });
    };

    const handleSetFile = (item: FieldArrayWithId<PublicPageFormInputs, "files", "id">) => () => {
        setFile(item);
    };

    const handleRemoveImage = (id: string) => {
        remove(fields.findIndex((field) => field.id === id));
        setFile(null);
    };

    const handleRemoveVideo = () => resetField("video");

    const onHandle = (data: { file: File; id: string } | null) => {
        setImageFile(data);
    };

    useEffect(() => {
        if (!!page) {
            let images: { file: File }[] = [];

            for (const field of page?.images || []) {
                if (field?.base64 && field?.mimeType && field?.name) {
                    const object = base64ImageToFile(field.base64, field.mimeType, field.name);
                    images.push({ file: object });
                }
            }

            reset({
                pageName: page.name || "",
                description: page.content || "",
                files: [...images, { file: null }],
                video: {
                    file: base64ImageToFile(
                        page?.video?.base64 || "",
                        page?.video?.mimeType || "",
                        page?.video?.name || "",
                    ),
                },
            });

            const titleImage = base64ImageToFile(
                page?.titleImage?.base64 || "",
                page?.titleImage?.mimeType || "",
                page?.titleImage?.name || "",
            );

            setImageFile({
                id: page?.titleImage?.id || "",
                file: titleImage,
            });

            setFile({
                file: titleImage,
                id: page?.titleImage?.id || "",
            });
        }
    }, [page, reset]);

    return (
        <FormProvider {...methods}>
            <form>
                <Accordion
                    title="Stammdaten"
                    open={!!id}
                    className={twClsx(errors.pageName && "border border-primary")}
                >
                    <InputField
                        id="pageName"
                        label="Stammdaten"
                        {...register("pageName")}
                        error={errors.pageName?.message}
                    />
                </Accordion>

                <Accordion
                    title="Beschreibung"
                    className={twClsx(errors.description && "border border-primary")}
                >
                    <DescriptionFrom />
                </Accordion>

                <Accordion
                    title="Bilder"
                    showSide
                    sideClassName="w-auto"
                    className={twClsx(errors.files && "border border-primary")}
                    sideContent={
                        file && (
                            <EventImagePreview
                                id={file.id}
                                {...(file?.file && {
                                    src: URL.createObjectURL(file.file),
                                })}
                                file={file.file}
                                onHandle={onHandle}
                                isTitleBild={imageFile?.id === file.id}
                                onRemoveImage={handleRemoveImage}
                            />
                        )
                    }
                >
                    <div className="flex flex-wrap items-start justify-start">
                        {fields.map((item, index) => (
                            <UploadField
                                preview
                                key={index}
                                index={index}
                                id={`files.${index}.file`}
                                handleAppend={handleAppend}
                                handleShow={handleSetFile(item)}
                                {...register(`files.${index}.file`)}
                                error={errors.files?.[index]?.file?.message}
                                {...(!!item.file && {
                                    src: URL.createObjectURL(item.file),
                                })}
                            />
                        ))}
                    </div>
                </Accordion>

                <Accordion
                    title="Video"
                    className={twClsx("p-5", errors.video && "border border-primary")}
                >
                    <div className="flex items-start justify-start">
                        <UploadVideo
                            video
                            id="video"
                            {...register("video")}
                        />
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
                <FormActions loading={loading} onSubmit={handleSubmit(handleOnSubmit)} />
            </form>
        </FormProvider>
    );
};

export default CreatePublicPagesPage;
