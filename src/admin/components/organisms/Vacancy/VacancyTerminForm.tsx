import dayjs from "dayjs";
import { ReactElement, SyntheticEvent } from "react";
import { useFormContext } from "react-hook-form";
import { formatDate } from "../../../utils";
import { Button } from "../../atoms";
import { DatePicker } from "../../molecules";
import { VacancyFormInputs } from "./Vacancy.types";

export const VacancyTerminForm = (): ReactElement => {
  const { trigger, setValue, watch } = useFormContext<VacancyFormInputs>();

  // handlers
  const handleTrigger = () => trigger("date");

  const handleStartDate = (date: Date, _event: SyntheticEvent<any, Event>) => {
    setValue("date.startDate", dayjs(date).format());
  };

  const handleDueDate = (date: Date, _event: SyntheticEvent<any, Event>) => {
    setValue("date.dueDate", dayjs(date).format());
  };

  return (
    <>
      <div className="flex flex-col justify-start w-full md:space-y-6">
        <DatePicker
          label="Bewerbungsfrist"
          onChange={handleStartDate}
          value={formatDate(watch("date.startDate"))}
        />
        <DatePicker
          label="Berufsstart"
          onChange={handleDueDate}
          value={formatDate(watch("date.dueDate"))}
        />
      </div>
      <Button type="button" className="mt-6" onClick={handleTrigger}>
        Speichern
      </Button>
    </>
  );
};
