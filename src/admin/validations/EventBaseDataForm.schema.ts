import Joi from "joi";

export const EventBaseDataFormSchema = Joi.object({
  eventName: Joi.string().required().label("Eventname"),
  phone: Joi.string().required().label("Telefonnummer"),
  organizer: Joi.string().required().label("Veranstalter"),
  category: Joi.string().required().label("Kategorie"),
  website: Joi.string().optional().label("Webseite"),
  email: Joi.string().email({ tlds: false }).label("E-Mail-Adresse"),
});

export const OrganizerBaseDataFormSchema = Joi.object({
  organizerName: Joi.string().required().label("Veranstalter Name"),
  phone: Joi.string().required().label("Telefonnummer"),
  category: Joi.string().required().label("Kategorie"),
  website: Joi.string().optional().label("Webseite"),
  email: Joi.string().email({ tlds: false }).label("E-Mail-Adresse"),
});
