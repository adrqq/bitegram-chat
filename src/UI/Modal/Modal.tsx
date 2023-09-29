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
    <div className={s.modal__overlay}>
      <div className={s.modal__content}>
        <button className={s.close__button} onClick={onClose}>
          x
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
