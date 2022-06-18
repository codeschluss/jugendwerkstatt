import { FC, ReactElement, useState } from 'react';
import { Button } from '../../atoms';
import { EventImagePreviewProps } from './EventImagePreview.props';

export const EventImagePreview: FC<EventImagePreviewProps> = ({
  file,
  onRemoveImage,
}): ReactElement => {
  const [showTitle, setshowTitle] = useState(false);

  const handleShowTitle = () => setshowTitle(!showTitle);
  const handleRemoveImage = (id: string) => () => onRemoveImage(id);

  return (
    <div className="p-5 space-y-4">
      {file && (
        <img
          className="h-72"
          alt={file.file[0].name}
          src={URL.createObjectURL(file.file[0] as File) || ''}
        />
      )}
      <div className="mt-4 space-x-4">
        <input
          type="checkbox"
          id="title"
          name="title"
          onChange={handleShowTitle}
        />
        <label htmlFor="title">TitelBild</label>
      </div>
      {showTitle && <p>{file?.file[0].name}</p>}
      <Button type="button" onClick={handleRemoveImage(file?.id || '')}>
        Löschen
      </Button>
    </div>
  );
};
