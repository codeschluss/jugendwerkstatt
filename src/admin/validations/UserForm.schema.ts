import Joi from 'joi';

export const UserFormSchema = Joi.object({
  roles: Joi.array()
    .items(Joi.object({ id: Joi.string(), label: Joi.string() }))
    .required()
    .messages({
      'any.required': 'Mindestens eine Rolle sollte ausgewählt werden',
    }),
});
