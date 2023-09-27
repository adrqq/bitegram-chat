import React from "react";
import s from "./SettingsPage.module.scss";
import userLogo from "../../images/Rectangle 31.png";

export const SettingsPage = () => {
  return (
    <div className={s.settings_page}>
      <div className={s.settings_page__wrapper}>
        <header className={s.settings_page__header}>
          <div className={s.settings_page__icon__backspace} />
          <h1 className={s.settings_page__title}> Settings </h1>
        </header>

        <main className={s.settings_page__user}>
          <img
            src={userLogo}
            alt="userLogo"
            className={s.settings_page__user__logo}
          />
          <div className={s.settings_page__user__info}>
            <div className={s.settings_page__user__name}>John Doe</div>
            <div className={s.settings_page__user__status}>Online</div>
          </div>
        </main>

        <ul className={s.settings_page__list}>
          <button className={s.settings_page__item}>
            <div className={`${s.settings_page__item__icon__notification} ${s.settings_page__item__icon}`} />
            <div className={s.settings_page__item__title}>Notification</div>
          </button>


          <button className={s.settings_page__item}>
            <div className={`${s.settings_page__item__icon__privacy} ${s.settings_page__item__icon} `} />
            <div className={s.settings_page__item__title}>Privacy</div>
          </button>

          <button className={s.settings_page__item}>
            <div className={`${s.settings_page__item__icon__security} ${s.settings_page__item__icon}`} />
            <div className={s.settings_page__item__title}>Security</div>
          </button>

          <button className={s.settings_page__item}>
            <div className={`${s.settings_page__item__icon__theme} ${s.settings_page__item__icon}`} />
            <div className={s.settings_page__item__title}>Theme</div>
          </button>

          <button className={s.settings_page__item}>
            <div className={`${s.settings_page__item__icon__chat_wallpaper} ${s.settings_page__item__icon}`} />
            <div className={s.settings_page__item__title}>Chat Wallpaper</div>
          </button>

          <button className={s.settings_page__item}>
            <div className={`${s.settings_page__item__icon__account_info} ${s.settings_page__item__icon}`} />
            <div className={s.settings_page__item__title}>Request Account Info</div>
          </button>

          <button className={s.settings_page__item}>
            <div className={`${s.settings_page__item__icon__keyboard_shortcuts} ${s.settings_page__item__icon}`} />
            <div className={s.settings_page__item__title}>Keyboard shortcuts</div>
          </button>

          <button className={s.settings_page__item}>
            <div className={`${s.settings_page__item__icon__help} ${s.settings_page__item__icon}`} />
            <div className={s.settings_page__item__title}>Help</div>
          </button>
        </ul>
      </div>
    </div>
  );
};
