import React from "react";
import s from "./ChatHeader.module.scss";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { handleModalOpener } from "../../../redux/slices/rootSlice";

export const ChatHeader = () => {
  const dispach = useAppDispatch();
  const { isChatModalOpen } = useAppSelector((state) => state.rootSlice);

  return (
    <header className={s.chat_header}>
      <div className={s.chat_header__wrapper}>
        <div className={s.chat_header__right}>
          <button className={s.chat_header__avatar}
            onClick={() => dispach(handleModalOpener(!isChatModalOpen))} 
          >
            
          </button>

          <div className={s.chat_header__info}>
            <span className={s.chat_header__nickname}>Pink Panda</span>

            <span className={s.chat_header__status}>last seen recently</span>
          </div>
        </div>

        <div className={s.chat_header__left}>
          <button
            className={`${s.chat_header__icon} ${s.chat_header__icon_camera}`}
          />

          <button
            className={`${s.chat_header__icon} ${s.chat_header__icon_call}`}
          />

          <button
            className={`${s.chat_header__icon} ${s.chat_header__icon_search}`}
          />

          <div className={s.black_row} />

          <button
            // onClick={() => dispach(handleModalOpener(!isChatModalOpen))}
            className={`${s.chat_header__icon} ${s.chat_header__icon_menu}`}
          />
        </div>
      </div>
    </header>
  );
};
