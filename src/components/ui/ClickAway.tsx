import {
  Children,
  cloneElement,
  FC,
  MouseEvent,
  ReactElement,
  useEffect,
  useRef,
} from "react";

export interface ClickAwayListenerProps {
  onClickAway: () => void;
  children: ReactElement;
}

const ClickAwayListener: FC<ClickAwayListenerProps> = ({
  children,
  onClickAway,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (event.target instanceof HTMLElement) {
        if (!ref.current || ref.current.contains(event.target)) return;
        onClickAway();
      }
    };
    document.addEventListener("mousedown", (event: any) => listener(event));
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", (event: any) =>
        listener(event)
      );
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, onClickAway]);

  return Children.only(
    cloneElement(children, {
      ref,
    })
  );
};

export default ClickAwayListener;
