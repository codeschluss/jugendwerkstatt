import { DetailedHTMLProps, LiHTMLAttributes, ReactElement } from "react";
import { MenuAlt4Icon } from "@heroicons/react/outline";

import {
  SortableContainer,
  SortableContainerProps,
  SortableElement,
  SortableElementProps,
  SortableHandle,
} from "react-sortable-hoc";
import { Button } from "../Form/Button/Button";
import { twClsx } from "../../../utils";

export const DragList = SortableContainer(
  ({
    className,
    children,
    ...props
  }: DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > &
    SortableContainerProps): ReactElement => (
    <ul className={twClsx(className)} {...props}>
      {children}
    </ul>
  )
);

export const DragItem = SortableElement(
  ({
    className,
    children,
    ...props
  }: DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> &
    SortableElementProps): ReactElement => (
    <li
      className={twClsx(
        "flex items-start justify-between my-4 bg-white rounded-sm",
        className
      )}
      {...props}
    >
      {children}
    </li>
  )
);

export const DragHandle = SortableHandle(
  (): ReactElement => (
    <Button
      type="button"
      className="p-2 text-gray-900 border-none shadow-none cursor-move focus:cursor-move"
      iconOnly
      iconLeft={<MenuAlt4Icon />}
    />
  )
);
