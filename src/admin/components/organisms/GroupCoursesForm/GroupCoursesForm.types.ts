import { Control, FieldError, UseFormRegister } from 'react-hook-form';

export interface GroupCourseInput {
  name: string;
  courseId: string;
  isActive: boolean;
}

export interface GroupCoursesInput {
  name: string;
  courses: GroupCourseInput[];
}

export interface GroupCoursesProps {
  control: Control<GroupCoursesInput, any>;
  register: UseFormRegister<GroupCoursesInput>;
  errors:
    | {
        name?: FieldError | undefined;
        courseId?: FieldError | undefined;
        isActive?: FieldError | undefined;
      }[]
    | undefined;
  error: FieldError | undefined;
  onDelete?: (id: string) => void;
  onUpdate?: (id: string) => void;
}
