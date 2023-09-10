import React from "react";
import s from "./ChatHeader.module.scss";

export const ChatHeader = () => {
  return (
    <header className={s.chat_header}>
      <div className={s.chat_header__wrapper}>
        <div className={s.chat_header__right}>
          <div className={s.chat_header__avatar} />

          <div className={s.chat_header__info}> 
            <span className={s.chat_header__nickname}>
              Pink Panda
            </span>

            <span className={s.chat_header__status}>
              last seen recently
            </span>
          </div>
        </div>

        <div className={s.chat_header__left}>
          <div className={`${s.chat_header__icon} ${s.chat_header__icon_camera}`} />

          <div className={`${s.chat_header__icon} ${s.chat_header__icon_call}`} />

          <div className={`${s.chat_header__icon} ${s.chat_header__icon_search}`} />

          <div className={s.black_row} />

          <div className={`${s.chat_header__icon} ${s.chat_header__icon_menu}`} />
        </div>
      </div>
    </header>
  )
}