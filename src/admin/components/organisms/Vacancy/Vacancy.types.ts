import { AddressFormInputs } from "../Events/Events.types";

export interface VacancyBaseDataFormInputs {
  name: string;
  phone: string;
  mail: string;
  website?: string;
  category: string;
  title: string;
}

export interface VacancyCategoryFormInputs {
  color: string;
  category: string;
}

export interface VacancyCompaniesFormInputs {
  baseData: Omit<VacancyBaseDataFormInputs, "title" | "category">;
  address: AddressFormInputs;
}
export interface VacancyFormInputs {
  baseData: VacancyBaseDataFormInputs;
  address: AddressFormInputs;
}
