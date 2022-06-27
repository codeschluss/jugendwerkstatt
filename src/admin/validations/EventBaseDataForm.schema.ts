import Joi from "joi";

export const EventBaseDataFormSchema = Joi.object({
  name: Joi.string().required().min(3).max(50).label("Eventname"),
  organizer: Joi.string().label("Veranstalter"),
  category: Joi.string().empty("").label("Kategorie"),
});
