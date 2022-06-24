import Joi from "joi";

export const ScheduleFormSchema = Joi.object({
  start_date: Joi.date().required().label("Beginn"),
  start_hour: Joi.date().required().label("Uhrzeit"),
  end_date: Joi.date().required().label("Ende"),
  end_hour: Joi.date().required().label("Uhrzeit"),
  repeat: Joi.string().optional().label("Turnus"),
  end_repeat: Joi.date().required().label("Enddatum"),
});
