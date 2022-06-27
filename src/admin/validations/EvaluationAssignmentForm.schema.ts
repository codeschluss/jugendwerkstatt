import Joi from 'joi';

export const EvaluationAssignmentFormSchema = Joi.object({
  userId: Joi.string().required().label('Benutzer/in'),
  evaluationQuestionId: Joi.string().required().label('Evaluierungsbogen'),
});
