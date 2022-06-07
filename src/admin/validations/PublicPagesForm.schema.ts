import Joi from 'joi';

export const PublicPagesFormSchema = Joi.object({
  pageName: Joi.string().required().label('Seitenname'),
  pageContent: Joi.string().required().label('Seiteninhalt'),
});
