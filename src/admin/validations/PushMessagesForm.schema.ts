import Joi from 'joi';

export const PushMessagesPageSchema = Joi.object({
  title: Joi.string().required().label('Titel'),
  message: Joi.string().required().label('Nachricht'),
});
