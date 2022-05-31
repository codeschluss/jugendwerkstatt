/* eslint-disable @typescript-eslint/indent */
/* eslint-disable max-lines */
import {
  Children,
  cloneElement,
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from "react";

export interface AnimationProps {
  defaultHeight?: number;
  show: boolean;
  duration?: number;
  children: ReactElement;
  delay?: number;
  transform?: "transform" | "transform-gpu" | "transform-none";
  translateShift?: string;
  timingFunction?:
    | "ease"
    | "ease-in"
    | "ease-out"
    | "ease-in-out"
    | "linear"
    | string;
  type:
    | "fade"
    | "fade-left"
    | "fade-right"
    | "fade-top"
    | "fade-bottom"
    | "fade-in"
    | "fade-out"
    | "height";
}

const GenerateAnimation = (
  type: AnimationProps["type"],
  translateShift?: string
) => {
  switch (type) {
    case "fade":
      return {
        in: "opacity-100 pointer-events-auto",
        out: "opacity-0 pointer-events-none",
      };
    case "fade-left":
      return {
        in: "opacity-100 pointer-events-auto translate-x-0",
        out: `opacity-0 pointer-events-none ${
          translateShift || "-translate-x-5"
        }`,
      };
    case "fade-right":
      return {
        in: "opacity-100 pointer-events-auto translate-x-0",
        out: `opacity-0 pointer-events-none ${
          translateShift || "translate-x-5"
        }`,
      };
    case "fade-top":
      return {
        in: "opacity-100 pointer-events-auto translate-y-0",
        out: `opacity-0 pointer-events-none ${
          translateShift || "-translate-y-5"
        }`,
      };
    case "fade-bottom":
      return {
        in: "opacity-100 pointer-events-auto translate-y-0",
        out: `opacity-0 pointer-events-none ${
          translateShift || "translate-y-5"
        }`,
      };
    case "fade-in":
      return {
        in: "opacity-100 pointer-events-auto scale-100",
        out: "opacity-0 pointer-events-none scale-95",
      };
    case "fade-out":
      return {
        in: "opacity-100 pointer-events-auto scale-100",
        out: "opacity-0 pointer-events-none scale-105",
      };
    case "height":
      return {
        in: "overflow-hidden",
        out: "overflow-hidden",
      };
  }
};

const Animation: FC<AnimationProps> = ({
  children,
  show,
  duration = 150,
  delay = 0,
  translateShift,
  transform = "transform-gpu",
  timingFunction = "ease",
  type,
  defaultHeight,
}) => {
  const [height, setHeight] = useState<number | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [state, setState] = useState<boolean>(false);

  const animation = GenerateAnimation(type, translateShift);
  const {
    props: { className, ...childProps },
  } = children;

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (show) {
      setOpen(show);
      timer = setTimeout(() => {
        setState(show);
      });
    } else {
      setState(show);
      timer = setTimeout(() => {
        setOpen(show);
      }, duration + delay);
    }
    return () => clearTimeout(timer);
  }, [show]);

  const onRefChange = useCallback((node: HTMLElement) => {
    if (type === "height" && height === null) {
      if (node === null) setHeight(null);
      else setHeight(node?.clientHeight || null);
    }
  }, []);

  if (Children.count(children) !== 1)
    return <div className="bg-warning">Please Add only one children!</div>;

  if (!open) return null;

  return Children.only(
    cloneElement(children, {
      ref: onRefChange,

      className: `transition-all origin-center ${className}
         ${transform} ${state ? animation.in : animation.out}`,
      style: {
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: timingFunction,
        ...(type === "height" &&
          (height !== null || defaultHeight) && {
            height: `${state ? defaultHeight || height : 0}px`,
          }),
      },
      ...childProps,
    })
  );
};

export default Animation;
