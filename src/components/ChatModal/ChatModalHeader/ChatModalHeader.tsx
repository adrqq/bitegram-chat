import React from "react";
import s from "./ChatModalHeader.module.scss";
import { useAppDispatch } from "../../../hooks/redux";
import { handleModalOpener } from "../../../redux/slices/rootSlice";

export const ChatModalHeader = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={s.chat_modal_header}>
      <button
        onClick={() => dispatch(handleModalOpener(false))}
        className={s.chat_modal_header__icon}
      >
      </button>

      <div className={s.chat_modal_header__info}>
        <span
         style={{marginLeft: "30px"}}
         className={s.chat_modal_header__nickname}>Contact Info</span>
      </div>
    </div>
  );
};
