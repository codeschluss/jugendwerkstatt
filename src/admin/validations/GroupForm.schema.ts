import Joi from 'joi';

const CourseSchema = Joi.object({
  name: Joi.string().required().label('Course Name'),
  courseId: Joi.string().empty(['']).label('Course Id'),
  isActive: Joi.boolean(),
});

export const GroupFormSchema = Joi.object({
  name: Joi.string().required().label('Name'),
  courses: Joi.array()
    .min(1)
    .items(CourseSchema)
    .has(CourseSchema)
    .label('Courses'),
});
