import Joi from 'joi';

export const ScheduleFormSchema = Joi.object({
  start_date: Joi.string().required().label('Beginn'),
  start_hour: Joi.string().required().label('Uhrzeit'),
  end_date: Joi.string().required().label('Ende'),
  end_hour: Joi.string().required().label('Uhrzeit'),
  repeat: Joi.string().required().label('Turnus'),
  end_repeat: Joi.string().required().label('Enddatum'),
});
