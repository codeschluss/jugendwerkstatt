import Joi from "joi";

export const VideoFormSchema = Joi.object({
  video: Joi.string().required().label("Videoname"),
  link: Joi.string().uri().required().label("Link"),
  category: Joi.string().required().label("Kategoriename"),
});
