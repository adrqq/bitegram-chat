import React from "react";
import s from "./ChatModalMain.module.scss";
import { ModalMultiSelector } from "./ModalMultiSelector/ModalMultiSelector";
import userAvatar from "../../../images/Rectangle 31.png";
import videoCall from "../../../images/camera-logo.svg";
import phoneCall from "../../../images/phone-logo.svg";
import BMW from "../../../images/BMW.png";
import { Swiper } from "../../../UI/Swiper/Swiper";

export const ChatModalMain = () => {
  const [isChecked, setIsChecked] = React.useState(false);

  const onClick = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };

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
          <p className={s.chat_modal_main__media__title}>Media, Links & Docs</p>

          <button className={s.chat_modal_main__media__button}>
            <p className={s.chat_modal_main__media__count}>201</p>
            <div className={s.chat_modal_main__media__icon} />
          </button>
        </div>

        <div className={s.chat_modal_main__media__images}>
          <img className={s.chat_modal_main__media__item} src={BMW} alt="" />
          <img className={s.chat_modal_main__media__item} src={BMW} alt="" />
          <img className={s.chat_modal_main__media__item} src={BMW} alt="" />
        </div>
      </div>

      <div className={s.black_row} />

      <button className={s.chat_modal_main__item}>
        <div className={s.chat_modal_main__item__wrapper}>
          <div
            className={`${s.chat_modal_main__item__icon} ${s.chat_modal_main__item__icon__star}`}
          />
          <p className={s.chat_modal_main__item__title}>Starred Messages</p>
        </div>
        <div
          className={`${s.chat_modal_main__item__icon} ${s.chat_modal_main__item__icon__arrow}`}
        />
      </button>

      <div className={s.black_row} />

      <button className={s.chat_modal_main__item}>
        <div className={s.chat_modal_main__item__wrapper}>
          <div
            className={`${s.chat_modal_main__item__icon} ${s.chat_modal_main__item__icon__ring}`}
          />
          <p className={s.chat_modal_main__item__title}>Mute Notifications</p>
        </div>

        <Swiper size={40} onClick={onClick} isChecked={isChecked} />
      </button>

      <div className={s.black_row} />

      <div className={s.chat_modal_main__group}>
        <p className={s.chat_modal_main__group__text}>1 group in common</p>

        <div className={s.chat_modal_main__group__content}>
          <img className={s.chat_modal_main__group__img} src={BMW} alt="BMW" />

          <div className={s.chat_modal_main__group__info}>
            <h1 className={s.chat_modal_main__group__name}>Camel’s Gang</h1>

            <p className={s.chat_modal_main__group__description}>
              Owl, Parrot, Rabbit , You
            </p>
          </div>
        </div>
      </div>

      <div className={s.black_row} style={{ margin: "1px" }} />

      <div className={s.chat_modal_main__control}>
        <button className={s.white_button}>
          <div className={`${s.white_button__image} ${s.white_button__image__flag}`} />

          <p className={s.white_button__text}>block</p>
        </button>

        <button className={s.white_button}>
          <div className={`${s.white_button__image} ${s.white_button__image__trash}`} />

          <p className={s.white_button__text}>delete</p>
        </button>
      </div>
    </div>
  );
};
