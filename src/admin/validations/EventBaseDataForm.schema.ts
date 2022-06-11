import Joi from "joi";

export const EventBaseDataFormSchema = Joi.object({
  name: Joi.string().required().label("Eventname"),
  organizer: Joi.string().label("Veranstalter"),
  category: Joi.string().optional().label("Kategorie"),
  phone: Joi.string().required().label("Telefonnummer"),
  website: Joi.string().uri().optional().label("Webseite"),
  email: Joi.string().email({ tlds: false }).label("E-Mail-Adresse"),
});
