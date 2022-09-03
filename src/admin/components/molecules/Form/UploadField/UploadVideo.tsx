import { PhotographIcon } from "@heroicons/react/outline";
import { forwardRef, useMemo, useRef } from "react";
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

        const videoFile = watch("video") as any;

        const isPreview = useMemo(
            () => !!preview && (!!src || !!videoFile),
            [preview, src, videoFile],
        );

        // const videoRef = useRef<HTMLVideoElement>(null);

        // useEffect(() => {
        //     if (videoRef.current) videoRef.current?.load();
        // }, []);


        const pageVideo = videoFile[0] ?? videoFile.file
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
                                {...(!!pageVideo && {
                                    url:
                                        pageVideo.size !== 0
                                            ? URL.createObjectURL(pageVideo)
                                            : src,
                                })}
                                controls
                            />
                        ) : (
                            <>
                                {!!pageVideo &&
                                    URL.createObjectURL(pageVideo) && (
                                        <ReactPlayer
                                            width="360"
                                            height="250"
                                            url={
                                                (
                                                    URL.createObjectURL(pageVideo))
                                            }
                                        />
                                    )}
                                <PhotographIcon width={24} />
                                <p className="m-2 text-lg font-medium">Video hinzufügen</p>
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
