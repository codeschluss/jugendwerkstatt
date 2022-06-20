export interface EventImagePreviewProps {
  file: File;
  onHandle: (file: File | null) => void;
  onRemoveImage: (id: string) => void;
  id: string;
}
