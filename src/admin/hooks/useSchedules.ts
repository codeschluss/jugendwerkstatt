import dayjs from 'dayjs';
import { ScheduleProps } from '../components/organisms';

export const useSchedules = ({
  start_date,
  end_date,
  start_hour,
  end_hour,
  end_repeat,
  repeat,
}: ScheduleProps): {
  startDate: Date;
  endDate: Date;
  startHour: Date;
  endHour: Date;
}[] => {
  // logic
  const defaultDate = {
    startDate: dayjs(start_date)
      .add(dayjs(start_hour).diff(start_date, 'h'), 'h')
      .toDate(),
    endDate: dayjs(end_date).toDate(),
    startHour: dayjs(start_hour).toDate(),
    endHour: dayjs(end_hour).toDate(),
  };

  if (!repeat) return [defaultDate];
  const diff = dayjs(end_repeat).diff(start_date, repeat);

  const dates:
    | {
        startDate: Date;
        endDate: Date;
        startHour: Date;
        endHour: Date;
      }[] = [defaultDate];

  for (let i = 0; i < diff; i++) {
    const addToEndDate =
      i !== 1
        ? dayjs(start_date)
            .add(i + 1, repeat)
            .toDate()
        : start_date;

    dates.push({
      startDate: dayjs(start_date)
        .add(i + 1, repeat)
        .toDate(),
      endDate: dayjs(addToEndDate)
        .add(dayjs(end_date).diff(start_date, 'day'), 'day')
        .toDate(),
      startHour: dayjs(start_hour).toDate(),
      endHour: dayjs(end_hour).toDate(),
    });
  }

  return dates;
};
