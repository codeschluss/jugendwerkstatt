import Joi from "joi";

export const AddressFormSchema = Joi.object({
  street: Joi.string().required().label("Straße"),
  place: Joi.string().required().label("Stadt"),
  postalCode: Joi.number().required().label("Postleitzahl"),
  houseNumber: Joi.number().required().label("Hausnummer"),
});
