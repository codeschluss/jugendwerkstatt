import Joi from "joi";
import { AddressFormSchema } from "./AddressForm.schema";
import { EventBaseDataFormSchema } from "./EventBaseDataForm.schema";

export const EventsFormSchema = Joi.object({
  address: AddressFormSchema,
  baseData: EventBaseDataFormSchema,
  description: Joi.string().required().label("Beschreibung"),
});

export const OrganizerFormSchema = Joi.object({
  name: Joi.string().min(3).max(50).required().label("Veranstalter Name"),
  phone: Joi.string().required().label("Telefonnummer"),
  website: Joi.string().uri().optional().label("Webseite"),
  mail: Joi.string().email({ tlds: false }).label("E-Mail-Adresse"),
});

export const CategoryFormSchema = Joi.object({
  name: Joi.string().min(3).max(50).required().label("Kategoriename"),
});
