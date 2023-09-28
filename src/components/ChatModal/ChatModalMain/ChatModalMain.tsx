import React from "react";
import s from "./ChatModalMain.module.scss";
import { ModalMultiSelector } from "./ModalMultiSelector/ModalMultiSelector";
import userAvatar from "../../../images/Rectangle 31.png";
import videoCall from "../../../images/camera-logo.svg";
import phoneCall from "../../../images/phone-logo.svg";

export const ChatModalMain = () => {
  return (
    <div className={s.chat_modal_main}>
      {/* <ModalMultiSelector /> */}
      <div className={s.chat_modal_main__user__info}>
        <img
          className={s.chat_modal_main__user__avatar}
          src={userAvatar}
          alt="avatar"
        />

        <div className={s.chat_modal_main__user__contact}>
          <h1 className={s.chat_modal_main__user__name}>John Doe</h1>

          <p className={s.chat_modal_main__user__phone}>+380 00 000 00 00</p>
        </div>
      </div>

      <div className={s.chat_modal_main__calls}>
        <div className={s.chat_modal_main__calls__wrapper}>
          <img
            src={videoCall}
            alt="videoCall"
            className={`${s.chat_modal_main__icon} ${s.chat_modal_main__icon__video}`}
          />
          <span className={s.chat_modal_main__calls__title}>Video</span>
        </div>

        <div className={s.chat_modal_main__calls__wrapper}>
          <img
            src={phoneCall}
            alt="videoCall"
            className={`${s.chat_modal_main__icon} ${s.chat_modal_main__icon__phone}`}
          />
          <span className={s.chat_modal_main__calls__title}>Voice</span>
        </div>
      </div>

      <div className={s.black_row} />

      <div className={s.chat_modal_main__about}>
        <h1 className={s.chat_modal_main__about__title}>About</h1>

        <p className={s.chat_modal_main__about__description}>
          Hi there, I am using{" "}
        </p>
      </div>

      <div className={s.black_row} />


      <div className={s.chat_modal_main__media}>
        <p className={s.chat_modal_main__media__title}>
          Media, Links & Docs
        </p>

        <div className={s.chat_modal_main__media}>
          <p>
            Media, Links & Docs
          </p>
          <div className={s.chat_modal_main__media__icon} />
        </div>
      </div>
    </div>
  );
};
