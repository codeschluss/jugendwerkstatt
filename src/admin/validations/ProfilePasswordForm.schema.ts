import Joi from 'joi';

export const ProfilePasswordFormSchema = Joi.object({
  currentPassword: Joi.string().required().label('Aktuelles Passwort'),
  newPassword: Joi.string().required().label('Neues Passwort'),
  confirmPassword: Joi.string()
    .valid(Joi.ref('newPassword'))
    .required()
    .messages({
      'any.only':
        'Neues Passwort wiederholen does not match with Neues Passwort',
    }),
});
