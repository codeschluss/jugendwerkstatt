import Joi from 'joi';

export const PublicPagesFormSchema = Joi.object({
  pageName: Joi.string().required().label('Seitenname'),
  images: Joi.array().min(1),
  description: Joi.string().required().label('TextField'),
  video: Joi.any(),
});
