import Joi from "joi";
import { validateMethod } from "../utils";
import { FileSchema, FileSchemaHasOne } from "./EventsForm.schema";

export const PublicPagesFormSchema = Joi.object({
    pageName: Joi.string().required().label("Seitenname"),
    description: Joi.string().required().label("Beschreibung"),
    files: Joi.array().min(1).items(FileSchema).has(FileSchemaHasOne),
    video: Joi.alternatives()
        .try(
            Joi.custom(
                (value, helpers) =>
                    validateMethod(
                        value,
                        20,
                        ["video/quicktime", "video/x-msvideo", "video/mp4", "video/quicktime"],
                        helpers,
                    ),
                "file-validate",
            ),
        )
        .messages({
            "any.fileSize": "The maximum file size that can be uploaded as an image is 20 MB.",
            "any.fileType": "Sorry, is invalid, allowed extensions are: png, jpg, jepg",
        }),
});
