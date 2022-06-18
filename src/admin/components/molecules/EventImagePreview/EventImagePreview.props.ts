import { FieldArrayWithId } from 'react-hook-form';
import { EventsFormInputs } from '../../organisms';

export interface EventImagePreviewProps {
  file: FieldArrayWithId<EventsFormInputs, 'files', 'id'> | null;
  onRemoveImage: (id: string) => void;
}
