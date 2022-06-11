import Joi from "joi";

export const VideoFormSchema = Joi.object({
  title: Joi.string().required().label("Videoname"),
  url: Joi.string().uri().required().label("Link"),
  category: Joi.string().required().label("Kategoriename"),
});
