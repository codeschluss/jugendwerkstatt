import Joi from "joi";
import { AddressFormSchema } from "./AddressForm.schema";
import {
  EventBaseDataFormSchema,
  OrganizerBaseDataFormSchema,
} from "./EventBaseDataForm.schema";

export const EventsFormSchema = Joi.object({
  address: AddressFormSchema,
  baseData: EventBaseDataFormSchema,
  description: Joi.string().required().label("Beschreibung"),
});

export const OrganizerFormSchema = Joi.object({
  baseData: OrganizerBaseDataFormSchema,
});

export const CategoryFormSchema = Joi.object({
  category: Joi.string().required().label("Kategoriename"),
});
