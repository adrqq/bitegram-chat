import React, { useRef, useState } from "react";
import s from "./ChatHeader.module.scss";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { LinksModal } from "../../../UI/LinksModal";
import { setIsUserProfileModalOpen } from "../../../redux/slices/rootSlice";

export const ChatHeader = () => {
  const dispatch = useAppDispatch();
  const ignoreButtonRef = useRef<HTMLButtonElement>(null);

  const { isUserProfileModalOpen } = useAppSelector(state => state.rootSlice);
  const [isLinksModalOpen, setIsLinksModalOpen] = useState(false);

  const handleOpenChatModal = () => {
    dispatch(setIsUserProfileModalOpen(true));

    setIsLinksModalOpen(false);
  }

  const linksData = [
    {
      text: 'Contact info',
      // icon: "test",
      // to: "test",
      onClick: handleOpenChatModal,
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
          <button className={s.chat_header__avatar}
            onClick={() => dispatch(setIsUserProfileModalOpen(!isUserProfileModalOpen))}
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
