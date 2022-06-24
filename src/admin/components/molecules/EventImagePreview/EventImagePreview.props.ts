export interface EventImagePreviewProps {
  file: File | null;
  onHandle: (file: File | null) => void;
  onRemoveImage: (id: string) => void;
  id: string;
}
