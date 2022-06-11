import Joi from "joi";
import { AddressFormSchema } from "./AddressForm.schema";

export const VacancyFormSchema = Joi.object({
  baseData: Joi.object({
    name: Joi.string().required().label("Unternehmen Name"),
    phone: Joi.string().required().label("Telefonnummer"),
    category: Joi.string().required().label("Kategorie"),
    website: Joi.string().uri().optional().label("Webseite"),
    mail: Joi.string().email({ tlds: false }).label("E-Mail-Adresse"),
    title: Joi.string().required().label("Titel"),
  }),
  address: AddressFormSchema,
});

export const VacancyCompaiesFormSchema = Joi.object({
  baseData: Joi.object({
    name: Joi.string().required().label("Unternehmen Name"),
    phone: Joi.string().required().label("Telefonnummer"),
    website: Joi.string().uri().optional().label("Webseite"),
    mail: Joi.string().email({ tlds: false }).label("E-Mail-Adresse"),
  }),
  address: AddressFormSchema,
});

export const VacancyCategoryFormSchema = Joi.object({
  category: Joi.string().required().label("Kategorie"),
  color: Joi.string().required().label("Farbe"),
});
