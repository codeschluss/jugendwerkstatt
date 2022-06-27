import Joi from "joi";
import { validateFileSize, validateFileType } from "./validateFile";

// file validation
export const validateMethod = (
  file: FileList | null,
  size: number,
  type: string[],
  helpers: Joi.CustomHelpers
): FileList | Joi.ErrorReport | null => {
  // validate
  if (file !== null) {
    if (!validateFileSize(file[0], size)) {
      return helpers.error("any.fileSize");
    }

    if (!validateFileType(file[0], type)) {
      return helpers.error("any.fileType");
    }
  }

  // Return the value unchanged
  return file;
};
