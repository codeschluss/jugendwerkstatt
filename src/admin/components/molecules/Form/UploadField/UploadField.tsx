import { PhotographIcon } from "@heroicons/react/outline";
import { ChangeEvent, forwardRef, useState } from "react";
import { twClsx } from "../../../../utils";
import { Input, Label } from "../../../atoms";
import { UploadFieldProps } from "./UploadField.types";

export const UploadField = forwardRef<HTMLInputElement, UploadFieldProps>(
  (
    {
      id,
      src,
      name,
      preview,
      onChange,
      handleAppend,
      className,
      inputClassName,
      labelProps,
      ...rest
    },
    ref
  ) => {
    const [filePreview, setfilePreview] = useState(src || "");

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (!!event.currentTarget.files?.length) {
        handleAppend && handleAppend(event.currentTarget.files);
        setfilePreview(URL.createObjectURL(event.currentTarget.files[0]));
      }
      onChange && onChange(event);
    };

    return (
      <Label
        {...labelProps}
        htmlFor={id || name}
        className={twClsx("w-72 h-auto min-h-48 cursor-pointer", className)}
      >
        <div
          className={twClsx(
            "p-2 border border-transparent h-full flex justify-center rounded-sm bg-[#F7F7F7]",
            className
          )}
        >
          <div className="flex flex-col items-center justify-center w-full p-2 border border-transparent rounded-sm shadow-lg shadow-gray-200">
            {preview && filePreview ? (
              <img src={filePreview} alt={name} />
            ) : (
              <>
                <PhotographIcon width={24} />
                <p className="m-2 text-lg font-medium">bild auswählen</p>
              </>
            )}
          </div>
          <Input
            type="file"
            {...rest}
            onChange={handleOnChange}
            ref={ref}
            id={id}
            name={name || id}
            className={twClsx("hidden", inputClassName)}
          />
        </div>
      </Label>
    );
  }
);
