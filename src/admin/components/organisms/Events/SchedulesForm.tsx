import { CalendarIcon, ClockIcon } from "@heroicons/react/outline";
import {
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useMemo,
} from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { generateSchedules } from "../../../utils/generateSchedules";

import { Select } from "../../atoms";
import { Accordion, DatePicker } from "../../molecules";
import { SchedulesPreview } from "../../molecules/SchedulesPreview/SchedulesPreview";
import { EventsFormInputs, ScheduleInputs } from "./Events.types";

export const SchedulesForm = ({
  setSchedules,
  schedules,
}: {
  setSchedules: Dispatch<SetStateAction<[] | ScheduleInputs[]>>;
  schedules: [] | ScheduleInputs[];
}): ReactElement => {
  const { register, control, getValues } = useFormContext<EventsFormInputs>();

  const fields = useWatch({ control, name: "schedule" });

  const handleDeleteAll = () => setSchedules([]);

  const handleDeleteById = (index: number) => {
    setSchedules(schedules.filter((_item, idx) => idx !== index));
  };
  const dates = useMemo(() => generateSchedules(fields || {}), [fields]);

  useEffect(() => {
    if (dates) {
      setSchedules(dates);
    }
  }, [dates, setSchedules]);

  return (
    <Accordion
      title="Termine"
      showSide
      sideContent={
        <SchedulesPreview
          schedules={schedules}
          handleDeleteAll={handleDeleteAll}
          handleDeleteById={handleDeleteById}
        />
      }
    >
      <div className="max-w-md space-y-8">
        <div className="flex items-center">
          <div className="mr-10">
            <Controller
              control={control}
              name="schedule.start_date"
              render={({ field }) => (
                <DatePicker
                  label="Beginn"
                  iconRight={<CalendarIcon />}
                  minDate={new Date()}
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                />
              )}
            />
          </div>

          <div>
            <Controller
              control={control}
              name="schedule.start_hour"
              render={({ field }) => (
                <DatePicker
                  className="w-min"
                  iconRight={<ClockIcon />}
                  label="Uhrzeit"
                  showTimeSelect
                  showTimeSelectOnly
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                  dateFormat="h:mm"
                />
              )}
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-10">
            <Controller
              control={control}
              name="schedule.end_date"
              render={({ field }) => (
                <DatePicker
                  label="Ende"
                  iconRight={<CalendarIcon />}
                  minDate={new Date()}
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                />
              )}
            />
          </div>

          <div>
            <Controller
              control={control}
              name="schedule.end_hour"
              render={({ field }) => (
                <DatePicker
                  className="w-min"
                  iconRight={<ClockIcon />}
                  label="Uhrzeit"
                  showTimeSelect
                  showTimeSelectOnly
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                  dateFormat="h:mm"
                />
              )}
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-10">
            <Select label="Turnus" {...register("schedule.repeat")}>
              <option value="">Repeat</option>
              <option value="week">Weekly</option>
              <option value="month">Monthly</option>
              <option value="year">Yearly</option>
            </Select>
          </div>

          {getValues("schedule.repeat") && (
            <div>
              <Controller
                control={control}
                name="schedule.end_repeat"
                render={({ field }) => (
                  <DatePicker
                    iconRight={<CalendarIcon />}
                    label="Enddatum"
                    minDate={new Date()}
                    onChange={(date) => field.onChange(date)}
                    selected={field.value}
                  />
                )}
              />
            </div>
          )}
        </div>
      </div>
    </Accordion>
  );
};
