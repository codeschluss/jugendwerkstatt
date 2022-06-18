import { FC, ReactElement } from 'react';
import { Badge, Button } from '../../atoms';
import { SchedulesPreviewProps } from './SchedulesPreview.props';

export const SchedulesPreview: FC<SchedulesPreviewProps> = (): ReactElement => (
  <div className="p-5">
    <h1 className="mb-4 text-xl">Bestehende Termine zu diesem Event</h1>
    <div className="flex flex-col space-y-5">
      <Badge>13.04.2022, 12:20</Badge>
    </div>
    <Button className="mt-10">Alle Termine löschen</Button>
  </div>
);
