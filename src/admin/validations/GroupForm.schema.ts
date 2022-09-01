import Joi from 'joi';

export const GroupFormSchema = Joi.object({
  name: Joi.string().required().label('Name'),
  description: Joi.string().required().label('Description'),
});

export const GroupCourseFormSchema = Joi.object({
  name: Joi.string().required().label('Name'),
  group: Joi.string().required().label('Group'),
  description: Joi.string().required().label('Description'),
});
