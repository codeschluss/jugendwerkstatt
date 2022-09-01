export interface PublicPageFormInputs {
  pageName: string;
  description: string;
  images: { file: File | null }[];
  video: { file: File | null };
}
