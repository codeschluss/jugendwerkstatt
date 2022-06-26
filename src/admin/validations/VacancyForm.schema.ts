import Joi from "joi";
import { AddressFormSchema } from "./AddressForm.schema";

export const VacancyFormSchema = Joi.object({
  baseData: Joi.object({
    company: Joi.string().min(3).max(50).required().label("Unternehmen Name"),
    category: Joi.string().required().label("Kategorie"),
    title: Joi.string().required().label("Titel"),
  }),
  date: Joi.object({
    startDate: Joi.string().isoDate().required().label("Bewerbungsfrist"),
    dueDate: Joi.string().isoDate().required().label("Berufsstart"),
  }),
  description: Joi.string().required().label("Beschreibung"),
});

export const VacancyCompaiesFormSchema = Joi.object({
  baseData: Joi.object({
    name: Joi.string().min(3).max(50).required().label("Unternehmen Name"),
    phone: Joi.string().required().label("Telefonnummer"),
    website: Joi.string().optional().label("Webseite"),
    mail: Joi.string().email({ tlds: false }).label("E-Mail-Adresse"),
  }),
  address: AddressFormSchema,
});

export const VacancyCategoryFormSchema = Joi.object({
  name: Joi.string().min(3).max(50).required().label("Kategorie"),
  color: Joi.string()
    .pattern(/^#(?:[0-9a-fA-F]{3,4}){1,2}$/, { name: "Hex-Farbcode" })
    .required()
    .label("Farbe"),
});
