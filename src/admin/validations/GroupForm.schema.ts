import Joi from 'joi';

const CourseSchema = Joi.object({
  name: Joi.string().required().label('Course Name'),
  isActive: Joi.boolean(),
});

export const GroupFormSchema = Joi.object({
  name: Joi.string().required().label('Name'),
  courses: Joi.array().min(1).required().items(CourseSchema).label('Courses'),
});
