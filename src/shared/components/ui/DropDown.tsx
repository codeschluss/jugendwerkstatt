import { ChevronDownIcon } from "@heroicons/react/outline";
import { ReactNode, useEffect, useState } from "react";
import { cx } from "../../utils/ClassNames";
import Animation from "./Animation";
import ClickAwayListener from "./ClickAway";

type position = "left" | "right" | "top" | "bottom";
interface DropDownProps {
  name: ReactNode;
  className?: string;
  position?: position;
  boxClassName?: string;
  withArrow?: boolean;
  children: ReactNode;
}

const DropDown: React.FC<DropDownProps> = ({
  name,
  children,
  className,
  position = "right",
  boxClassName,
  withArrow = true,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className={cx([className, "relative"])}>
        <div
          onClick={() => setOpen(!open)}
          className="cursor-pointer flex items-center justify-start select-none"
        >
          {name}
          {withArrow && (
            <ChevronDownIcon
              className={cx([
                "text-gray-600 transition transform-gpu duration-150 ml-1 w-4 h-4",
                open ? "rotate-180" : "rotate-0",
              ])}
            />
          )}
        </div>
        <Animation type="fade-top" show={open}>
          <div
            className={cx([
              boxClassName,
              `absolute z-20 bg-white p-4 rounded-lg shadow  ${position}-0`,
            ])}
          >
            {children}
          </div>
        </Animation>
      </div>
    </ClickAwayListener>
  );
};

export default DropDown;
