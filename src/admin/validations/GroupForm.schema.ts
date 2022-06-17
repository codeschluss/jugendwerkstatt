import Joi from 'joi';

const CourseSchema = Joi.object({
  name: Joi.string().required().label('Course Name'),
  courseId: Joi.string().empty(['']).label('Course Id'),
  isActive: Joi.boolean(),
});

export const GroupFormSchema = Joi.object({
  name: Joi.string().required().label('Name'),
  courses: Joi.array()
    .items(CourseSchema)
    .has(CourseSchema)
    .min(1)
    .label('Courses'),
});
