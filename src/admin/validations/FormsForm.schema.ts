import Joi from "joi";

export const FormsFormSchema = Joi.object({
  baseData: Joi.object({
    name: Joi.string().required().label("Dateiname"),
    category: Joi.string().required().label("Kategoriename"),
  }),
  description: Joi.string().required().label("Beschreibung"),
});
