import Joi from 'joi';

const QuestionSchema = Joi.object({
  name: Joi.string().required().label('Question'),
});

export const EvaluationsQuestionsFormSchema = Joi.object({
  name: Joi.string().required().label('Name'),
  questions: Joi.array()
    .min(1)
    .required()
    .items(QuestionSchema)
    .label('Question'),
});
