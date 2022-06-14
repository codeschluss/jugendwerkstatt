import Joi from 'joi';

export const UserFormSchema = Joi.object({
  roles: Joi.array()
    .items(Joi.object({ label: Joi.string(), value: Joi.string() }))
    .min(1)
    .messages({
      'array.min': 'Mindestens eine Rolle sollte ausgewählt werden',
    }),
});
