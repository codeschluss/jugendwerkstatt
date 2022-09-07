import Joi from "joi";

export const PublicPagesFormSchema = Joi.object({
    pageName: Joi.string().required().label("Seitenname"),
    description: Joi.string().required().label("Beschreibung"),
    files: Joi.any(),
    video: Joi.any(),
});
