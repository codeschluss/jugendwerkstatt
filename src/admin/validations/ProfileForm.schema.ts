import Joi from 'joi';

export const ProfileFormSchema = Joi.object({
  name: Joi.string().required().label('Name'),
  email: Joi.string().email({ tlds: false }).label('E-Mail-Adresse'),
  phone: Joi.string().required().label('Telefonnummer'),
});