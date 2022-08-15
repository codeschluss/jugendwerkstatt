import { PhotographIcon } from "@heroicons/react/outline";
import { forwardRef, useEffect, useMemo, useRef } from "react";
import { useFormContext } from "react-hook-form";
import { twClsx } from "../../../../utils";
import { Input, Label } from "../../../atoms";
import { UploadFieldProps } from "./UploadField.types";
import ReactPlayer from "react-player";

export const UploadVideo = forwardRef<HTMLInputElement, UploadFieldProps>(
    (
        { id, src, name, index, preview, error, video = true, className, inputClassName, ...rest },
        ref,
    ) => {
        const { watch } = useFormContext();

        const videoFile = watch("video") as FileList | null;

        console.log(
            "videoFile",
            videoFile,
            videoFile &&
                videoFile?.[0] &&
                videoFile?.length !== 0 &&
                URL.createObjectURL(videoFile?.[0]),
        );

        const isPreview = useMemo(
            () => !!preview && (!!src || !!videoFile),
            [preview, src, videoFile],
        );

        // const videoRef = useRef<HTMLVideoElement>(null);

        // useEffect(() => {
        //     if (videoRef.current) videoRef.current?.load();
        // }, []);

        return (
            <Label
                {...(isPreview ? { as: "div" } : { htmlFor: id || name })}
                className={twClsx("w-64 h-48 m-4 mb-10 cursor-pointer", className)}
            >
                <div
                    className={twClsx(
                        "p-2 border border-transparent h-full flex justify-center rounded-sm bg-[#F7F7F7]",
                        className,
                    )}
                >
                    <div className="flex flex-col items-center justify-center w-full h-full p-2 border border-transparent rounded-sm shadow-lg shadow-gray-200">
                        {isPreview ? (
                            <ReactPlayer
                                className="object-contain h-full"
                                width="360"
                                height="250"
                                {...(!!videoFile?.[0] && {
                                    url:
                                        videoFile[0].size !== 0
                                            ? URL.createObjectURL(videoFile[0])
                                            : src,
                                })}
                                controls
                            />
                        ) : (
                            <>
                                {videoFile &&
                                    videoFile?.[0] &&
                                    videoFile?.length !== 0 &&
                                    URL.createObjectURL(videoFile?.[0]) && (
                                        <ReactPlayer
                                            url={
                                                (videoFile &&
                                                    videoFile?.[0] &&
                                                    videoFile?.length !== 0 &&
                                                    URL.createObjectURL(videoFile?.[0])) ||
                                                ""
                                            }
                                        />
                                    )}
                                <PhotographIcon width={24} />
                                <p className="m-2 text-lg font-medium">bild auswählen</p>
                            </>
                        )}
                    </div>

                    <Input
                        type="file"
                        {...rest}
                        ref={ref}
                        id={id}
                        name={name || id}
                        className={twClsx("hidden", inputClassName)}
                    />
                </div>
                {error && <span className="my-1 text-sm text-center text-primary">{error}</span>}
            </Label>
        );
    },
);
