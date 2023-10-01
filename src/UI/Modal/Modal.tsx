import React, { ReactNode } from "react";
import s from "./Modal.module.scss";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      onClick={onClose}
      className={s.modal__overlay}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={s.modal__content}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
