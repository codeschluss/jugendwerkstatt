import Joi from 'joi';

export const FormsFormSchema = Joi.object({
  baseData: Joi.object({
    name: Joi.string().required().label('Dateiname'),
    category: Joi.string().required().label('Kategoriename'),
  }).required(),
  description: Joi.string().required().label('Beschreibung'),
});

export const UserFormsFormSchema = Joi.object({
  baseData: Joi.object({
    name: Joi.string().required().label('Benutzerformulare'),
    category: Joi.string().required().label('Kategoriename'),
    user: Joi.string().required().label('Nutzername'),
  }),
  description: Joi.string().required().label('Beschreibung'),
});
