import { Control, UseFormSetValue } from "react-hook-form";
import { AddressFormInputs } from "../Events/Events.types";

export interface VacancyBaseDataFormInputs {
  company: string;
  category: string;
  title: string;
}
export interface VacancyDateFormInputs {
  dueDate: string;
  startDate: string;
}
export interface VacancyBaseCompaniesFormInputs {
  name: string;
  phone: string;
  mail: string;
  website?: string;
}

export interface VacancyCategoryFormInputs {
  color: string;
  name: string;
}

export interface VacancyCompaniesFormInputs {
  baseData: VacancyBaseCompaniesFormInputs;
  address: AddressFormInputs;
}
export interface VacancyFormInputs {
  baseData: VacancyBaseDataFormInputs;
  date: VacancyDateFormInputs;
}

export interface SketchColorProps {
  control: Control<VacancyCategoryFormInputs, any>;
  setValue: UseFormSetValue<VacancyCategoryFormInputs>;
}
