import Joi from 'joi';

export const GroupFormSchema = Joi.object({
  name: Joi.string().required().label('Name'),
});
