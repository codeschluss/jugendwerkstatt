/**
 *
 * @param {one of File or null or undefined} file
 * *Allowed file size
 * @param {number} allowed
 */

export const validateFileSize = (
  file: File | null | undefined,
  allowed: number
): boolean => (file ? file?.size / 1024 / 1024 < allowed : false);

/**
 *
 * @param {one of File or null or undefined} file
 * *Allowed file type
 * @param {string[]} allowedFileType
 */

export const validateFileType = (
  file: File | null | undefined,
  allowedFileType: string[]
): boolean =>
  file ? allowedFileType.some((i) => i.trim().includes(file?.type)) : false;
