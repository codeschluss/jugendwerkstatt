import { Control, UseFormSetValue } from "react-hook-form";
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
  name: string;
}

export interface VacancyCompaniesFormInputs {
  baseData: Omit<VacancyBaseDataFormInputs, "title" | "category">;
  address: AddressFormInputs;
}
export interface VacancyFormInputs {
  baseData: VacancyBaseDataFormInputs;
  address: AddressFormInputs;
}
export interface SketchColorProps {
  control: Control<VacancyCategoryFormInputs, any>;
  setValue: UseFormSetValue<VacancyCategoryFormInputs>;
}
