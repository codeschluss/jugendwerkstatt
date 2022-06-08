import { AddressFormInputs } from "../Events/Events.types";

export interface VacancyBaseDataFormInputs {
  company: string;
  phone: string;
  email: string;
  website?: string;
  category: string;
  title: string;
}

export interface VacancyCategoryFormInputs {
  color: string;
  category: string;
}

export interface VacancyCompaniesFormInputs {
  baseData: Omit<VacancyBaseDataFormInputs, "title">;
  address: AddressFormInputs;
}
export interface VacancyFormInputs {
  baseData: VacancyBaseDataFormInputs;
  address: AddressFormInputs;
}
