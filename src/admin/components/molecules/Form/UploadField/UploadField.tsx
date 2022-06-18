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
      handleShow,
      handleAppend,
      className,
      inputClassName,
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
      console.log("files 1", event.target.files);
      event.target.files = null;
      console.log("files 2", event.target.files);
    };

    const isPreview = !!preview && !!filePreview;

    return (
      <Label
        {...(isPreview
          ? { as: "div", onClick: handleShow }
          : { htmlFor: id || name })}
        className={twClsx("w-64 h-48 m-4 cursor-pointer", className)}
      >
        <div
          className={twClsx(
            "p-2 border border-transparent h-full flex justify-center rounded-sm bg-[#F7F7F7]",
            className
          )}
        >
          <div className="flex flex-col h-full items-center justify-center w-full p-2 border border-transparent rounded-sm shadow-lg shadow-gray-200">
            {isPreview ? (
              <img
                src={filePreview}
                alt={name}
                className="object-contain h-full"
              />
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
