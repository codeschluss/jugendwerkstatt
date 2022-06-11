import { FC, ReactElement } from "react";
import { SketchPicker } from "react-color";
import { useWatch } from "react-hook-form";
import { SketchColorProps } from "./Vacancy.types";

export const SketchColor: FC<SketchColorProps> = ({
  control,
  setValue,
}): ReactElement => {
  const color = useWatch({ control, name: "color" });

  const handleSetColor = (color: any) => setValue("color", color.hex);

  return (
    <div className="p-3 bg-white w-fit">
      <SketchPicker onChange={handleSetColor} color={color} />
    </div>
  );
};
