import Joi from 'joi';

export const PublicPagesFormSchema = Joi.object({
  pageName: Joi.string().required().label('Seitenname'),
  images: Joi.array().min(1).required().label('Titelbild'),
  description: Joi.string().required().label('Text Field'),
  video: Joi.any().required().label('Video'),
});
