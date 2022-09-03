export interface PublicPageFormInputs {
    pageName: string;
    description: string;
    files: { file: File | null }[];
    video: { file: File | null };
}
