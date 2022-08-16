import Joi from "joi";
import { validateMethod } from "../utils";
import { FileSchema, FileSchemaHasOne } from "./EventsForm.schema";

export const PublicPagesFormSchema = Joi.object({
    pageName: Joi.string().required().label("Seitenname"),
    description: Joi.string().required().label("Beschreibung"),
    files: Joi.array().min(1).items(FileSchema).has(FileSchemaHasOne),
    video: Joi.any(),
});
