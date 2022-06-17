import Joi from 'joi';

export const EvaluationAssignmentFormSchema = Joi.object({
  user: Joi.string().required().label('Benutzer/in'),
  evaluationQuestion: Joi.string().required().label('Evaluierungsbogen'),
});
