import { CalendarIcon, ClockIcon } from "@heroicons/react/outline";
import { Dispatch, ReactElement, SetStateAction, useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { twClsx } from "../../../utils";
import { generateSchedules } from "../../../utils/generateSchedules";

import { Button, Select } from "../../atoms";
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
    const {
        register,
        control,
        getValues,
        formState: { errors },
    } = useFormContext<EventsFormInputs>();
    const fields = useWatch({ control, name: "schedule" });

    const handleDeleteAll = () => setSchedules([]);
    const handleDeleteById = (index: number) => {
        setSchedules(schedules.filter((_item, idx) => idx !== index));
    };

    useEffect(() => {
        if (fields) {
            setSchedules(generateSchedules(fields));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleGenerateSchedules = () => {
        setSchedules([...schedules, ...generateSchedules(fields)]);
    };

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
            className={twClsx(errors.schedule && "border border-primary")}
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
                                    dateFormat="dd.MM.yyyy"
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
                                    dateFormat="dd.MM.yyyy"
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
                            <option value="">Once/einmalig</option>
                            <option value="week">Wöchentlich</option>
                            <option value="month">Monatlich</option>
                            <option value="year">Jährlich</option>
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
                                        dateFormat="dd.MM.yyyy"
                                    />
                                )}
                            />
                        </div>
                    )}
                </div>
            </div>

            <Button type="button" className="mt-20" onClick={handleGenerateSchedules}>
                Termin erstellen
            </Button>
        </Accordion>
    );
};
