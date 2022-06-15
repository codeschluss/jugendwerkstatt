import Joi from 'joi';

export const GeneralAddressFormSchema = Joi.object({
  street: Joi.string().required().label('Straße'),
  place: Joi.string().required().label('Stadt'),
  postalCode: Joi.string().required().label('Postleitzahl'),
  houseNumber: Joi.number().required().label('Hausnummer'),
  latitude: Joi.number().required().label('Breitengrad'),
  longitude: Joi.number().required().label('Längengrad'),
});
