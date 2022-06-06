import Joi from "joi";

export const EventBaseDataFormSchema = Joi.object({
  eventName: Joi.string().required().label("Eventname"),
  phone: Joi.string().required().label("Telefonnummer"),
  website: Joi.string().optional().label("Webseite"),
  email: Joi.string().email({ tlds: false }).label("E-Mail-Adresse"),
});
