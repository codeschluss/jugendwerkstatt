import { PhotographIcon } from "@heroicons/react/outline";
import { ChangeEvent, forwardRef } from "react";
import { twClsx } from "../../../../utils";
import { Input, Label } from "../../../atoms";
import { UploadFieldProps } from "./UploadField.types";

export const UploadField = forwardRef<HTMLInputElement, UploadFieldProps>(
  (
    {
      id,
      src,
      name,
      index,
      preview,
      error,
      onChange,
      handleShow,
      handleAppend,
      className,
      inputClassName,
      ...rest
    },
    ref
  ) => {
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(event);
      if (!!event.currentTarget.files?.length) {
        handleAppend && handleAppend(index || 0, event.currentTarget.files[0]);
      }
    };

    const isPreview = !!preview && !!src;

    return (
      <Label
        {...(isPreview
          ? { as: "div", onClick: handleShow }
          : { htmlFor: id || name })}
        className={twClsx("w-64 h-48 m-4 mb-10 cursor-pointer", className)}
      >
        <div
          className={twClsx(
            "p-2 border border-transparent h-full flex justify-center rounded-sm bg-[#F7F7F7]",
            className
          )}
        >
          <div className="flex flex-col items-center justify-center w-full h-full p-2 border border-transparent rounded-sm shadow-lg shadow-gray-200">
            {isPreview ? (
              <img src={src} alt={name} className="object-contain h-full" />
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
        {error && (
          <span className="my-1 text-sm text-center text-primary">{error}</span>
        )}
      </Label>
    );
  }
);
