import Joi from "joi";
import { AddressFormSchema } from "./AddressForm.schema";
import { EventBaseDataFormSchema } from "./EventBaseDataForm.schema";

export const EventsFormSchema = Joi.object({
  address: AddressFormSchema,
  baseData: EventBaseDataFormSchema,
});
