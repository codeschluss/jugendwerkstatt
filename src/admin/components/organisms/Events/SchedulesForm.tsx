import { CalendarIcon, ClockIcon } from '@heroicons/react/outline';
import { watch } from 'fs';
import { ReactElement } from 'react';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { useSchedules } from '../../../hooks/useSchedules';

import { Button, Select } from '../../atoms';
import { Accordion, DatePicker } from '../../molecules';
import { SchedulesPreview } from '../../molecules/SchedulesPreview/SchedulesPreview';
import { EventsFormInputs } from './Events.types';

export const SchedulesForm = (): ReactElement => {
  const { register, control, getValues, trigger } =
    useFormContext<EventsFormInputs>();
  const watchFields = useWatch({ control });
  const handleTrigger = () => trigger('schedule');
  const dates = useSchedules(watchFields.schedule || {});
  return (
    <Accordion title="Termine" showSide sideContent={<SchedulesPreview />}>
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
            <Select label="Turnus" {...register('schedule.repeat')}>
              <option value="">Repeat</option>
              <option value="week">Weekly</option>
              <option value="month">Monthly</option>
              <option value="year">Yearly</option>
            </Select>
          </div>

          {getValues('schedule.repeat') && (
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
        <Button type="button" className="mt-6" onClick={handleTrigger}>
          Speichern
        </Button>
      </div>
    </Accordion>
  );
};
