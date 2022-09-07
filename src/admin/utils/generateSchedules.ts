import dayjs from 'dayjs';
import { ScheduleProps } from '../components/organisms';

export const generateSchedules = ({
  start_date,
  end_date,
  start_hour,
  end_hour,
  end_repeat,
  repeat,
}: ScheduleProps): {
  startDate: Date;
  endDate: Date;
}[] => {
  if (!repeat)
    return [
      {
        startDate: dayjs(start_date)
          .startOf('day')
          .add(start_hour?.getHours() || 0, 'hour')
          .add(start_hour?.getMinutes() || 0, 'minute')
          .toDate(),
        endDate: dayjs(end_date)
          .startOf('day')
          .add(end_hour?.getHours() || 0, 'hour')
          .add(end_hour?.getMinutes() || 0, 'minute')
          .toDate(),
      },
    ];

  const diff = dayjs(end_repeat).diff(start_date, repeat) + 1;
  const dates = Array.from(Array(diff).keys()).map((_item, idx) => {
    return {
      startDate: dayjs(start_date)
        .add(repeat ? idx : 0, repeat || 'day')
        .startOf('day')
        .add(start_hour?.getHours() || 0, 'hour')
        .add(start_hour?.getMinutes() || 0, 'minute')
        .toDate(),
      endDate: dayjs(end_date)
        .add(repeat ? idx : 0, repeat || 'day')
        .startOf('day')
        .add(end_hour?.getHours() || 0, 'hour')
        .add(end_hour?.getMinutes() || 0, 'minute')
        .toDate(),
    };
  });

  return dates;
};
