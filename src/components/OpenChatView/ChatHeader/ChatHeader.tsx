import React, { useRef, useState } from "react";
import s from "./ChatHeader.module.scss";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { LinksModal } from "../../../UI/LinksModal";

export const ChatHeader = () => {
  const dispatch = useAppDispatch();
  const ignoreButtonRef = useRef<HTMLButtonElement>(null);

  const [isLinksModalOpen, setIsLinksModalOpen] = useState(false);

  const linksData = [
    {
      text: 'Contact info',
      // icon: "test",
      // to: "test",
      onClick: () => console.log('test'),
    },
    {
      text: 'Mute notifications',
      // icon: "test",
      to: "test",
    },
    {
      text: 'Clear messages',
      // icon: "test",
      to: "test",
    },
    {
      text: 'Delete chat',
      // icon: "test",
      to: "test",
    }
  ]

  const handleOpenLinksModal = () => {
    setIsLinksModalOpen(!isLinksModalOpen);
  };

  return (
    <header className={s.chat_header}>
      <div className={s.chat_header__wrapper}>
        <div className={s.chat_header__right}>
          <div className={s.chat_header__avatar} />

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
            ref={ignoreButtonRef}
            onClick={handleOpenLinksModal}
            className={`${s.chat_header__icon} ${s.chat_header__icon_menu}`}
          />

          {isLinksModalOpen && (
            <div className={s.links_modal_wrapper}>
              <LinksModal
                linksData={linksData}
                width={'175px'}
                outerPadding={'15px'}
                linkGap={'20px'}
                closeModal={() => setIsLinksModalOpen(false)}
                ignoreButtonRef={ignoreButtonRef}
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
