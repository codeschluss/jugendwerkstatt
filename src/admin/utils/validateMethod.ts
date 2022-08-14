import Joi from "joi";
import { validateFileSize, validateFileType } from "./validateFile";

// file validation
export const validateMethod = (
    file: File | null,
    size: number,
    type: string[],
    helpers: Joi.CustomHelpers,
): File | Joi.ErrorReport | null => {
    // validate
    if (file !== null) {
        if (!validateFileSize(file, size)) {
            return helpers.error("any.fileSize");
        }

        if (!validateFileType(file, type)) {
            return helpers.error("any.fileType");
        }
    }

    // Return the value unchanged
    return file;
};

export const validateHasOne = (
    file: File | null,
    helpers: Joi.CustomHelpers,
): File | Joi.ErrorReport | null => {
    // validate
    if (file === null) {
        return helpers.error("any.empty");
    }

    // Return the value unchanged
    return file;
};
