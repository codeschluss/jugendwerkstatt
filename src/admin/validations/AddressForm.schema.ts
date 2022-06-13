import Joi from "joi";

export const AddressFormSchema = Joi.object({
  street: Joi.string().required().label("Straße"),
  place: Joi.string().required().label("Stadt"),
  postalCode: Joi.string().required().label("Postleitzahl"),
  houseNumber: Joi.string().required().label("Hausnummer"),
});
