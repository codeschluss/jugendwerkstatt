import React, { FunctionComponent } from "react";

interface ModalProps {
  width: string;
  height: string;
}

const Modal: FunctionComponent<ModalProps> = ({ width, height, children }) => {
  return (
    <div style={{ width: `${width}`, height: `${height}` }}>{children}</div>
  );
};

export default Modal;
