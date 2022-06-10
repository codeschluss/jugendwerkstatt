export interface AddressFormInputs {
  street: string;
  city: string;
  postalCode: string;
  houseNumber: string;
}
export interface BaseDataFormInputs {
  eventName: string;
  phone: string;
  email: string;
  website?: string;
  organizer: string;
  category: string;
}
export interface OrganizerBaseDataFormInputs {
  name: string;
  phone: string;
  mail: string;
  website?: string;
  category: string;
}

export interface EventsFormInputs {
  baseData: BaseDataFormInputs;
  address: AddressFormInputs;
  description: string;
}
export interface OrganizerFormInputs {
  baseData: OrganizerBaseDataFormInputs;
  address?: AddressFormInputs;
}
export interface CategoryFormInputs {
  name: string;
}
