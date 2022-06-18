export interface AddressFormInputs {
  street: string;
  place: string;
  postalCode: string;
  houseNumber: string;
}
export interface BaseDataFormInputs {
  name: string;
  phone?: string;
  email?: string;
  website?: string;
  organizer: string;
  category: string;
}

export interface ScheduleProps {
  start_date?: Date;
  start_hour?: Date;
  end_date?: Date;
  end_hour?: Date;
  repeat?: Date;
  end_repeat?: Date;
}

export interface EventsFormInputs {
  baseData: BaseDataFormInputs;
  address: AddressFormInputs;
  description: string;
  files: { file: FileList }[];
  schedule: ScheduleProps;
}
export interface OrganizerFormInputs {
  name: string;
  phone: string;
  mail: string;
  website?: string;
}
export interface CategoryFormInputs {
  name: string;
}
