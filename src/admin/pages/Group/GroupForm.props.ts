export interface GroupFormInputs {
  name: string;
  description: string;
}

export interface GroupCourseFormInputs extends GroupFormInputs {
  group: string;
}
