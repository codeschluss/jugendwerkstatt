import { ChangeEvent, FC, ReactElement } from "react";
import { Button } from "../../atoms";
import { EventImagePreviewProps } from "./EventImagePreview.props";

export const EventImagePreview: FC<EventImagePreviewProps> = ({
  id,
  src = "",
  file,
  onHandle,
  isTitleBild,
  onRemoveImage,
}): ReactElement => {
  const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
    onHandle(event.currentTarget.value && !!file ? { file, id } : null);
  };
  const handleRemoveImage = () => onRemoveImage(id);

  return (
    <div className="p-5 space-y-4 overflow-auto">
      {file && (
        <img className="object-contain h-72" alt={file.name} src={src} />
      )}
      <div className="mt-4 space-x-4">
        <input
          type="checkbox"
          id="title"
          name="title"
          checked={isTitleBild}
          onChange={handleCheck}
        />
        <label htmlFor="title">TitelBild</label>
      </div>
      <p>{file?.name}</p>
      <Button type="button" onClick={handleRemoveImage}>
        Löschen
      </Button>
    </div>
  );
};
