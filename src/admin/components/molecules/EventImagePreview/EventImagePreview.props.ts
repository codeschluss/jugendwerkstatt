export interface EventImagePreviewProps {
  file: File | null;
  onHandle: (data: { file: File; id: string } | null) => void;
  onRemoveImage: (id: string) => void;
  id: string;
  isTitleBild: boolean;
}
