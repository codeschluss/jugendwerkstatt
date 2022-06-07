import Joi from 'joi';

export const GeneralAddressFormSchema = Joi.object({
  street: Joi.string().required().label('Straße'),
  city: Joi.string().required().label('Stadt'),
  postalCode: Joi.number().required().label('Postleitzahl'),
  houseNumber: Joi.number().required().label('Hausnummer'),
  long: Joi.number().required().label('Längengrad'),
  lat: Joi.number().required().label('Breitengrad'),
});
