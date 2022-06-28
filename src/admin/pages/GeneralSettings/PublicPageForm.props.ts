export interface PublicPageFormInputs {
  pageName: string;
  description: string;
  images: { file: FileList | null }[];
  video: FileList | null;
}
