import dayjs from 'dayjs';
import { FC, ReactElement } from 'react';
import { Badge, Button } from '../../atoms';
import { SchedulesPreviewProps } from './SchedulesPreview.props';

export const SchedulesPreview: FC<SchedulesPreviewProps> = ({
  dates,
}): ReactElement => (
  <div className="p-5">
    <h1 className="mb-4 text-xl">Bestehende Termine zu diesem Event</h1>
    <div className="flex flex-col space-y-5 overflow-y-scroll h-80">
      {dates.map((date, idx) => (
        <Badge key={idx}>{`${dayjs(date.startDate).format(
          'DD-MM-YYYY'
        )} - ${dayjs(date.endDate).format('DD-MM-YYYY')}, ${dayjs(
          date.startHour
        ).format('HH:mm')} - ${dayjs(date.endHour).format('HH:mm')}`}</Badge>
      ))}
    </div>
    <Button className="mt-10">Alle Termine löschen</Button>
  </div>
);
