import Joi from 'joi';

export const UserFormSchema = Joi.object({
  role: Joi.string().required().label('Rolle'),
});
