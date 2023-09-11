import React from "react";
import s from "./ChatFooter.module.scss";

export const ChatFooter = () => {
  return (
    <form onSubmit={
      (e) => {
        e.preventDefault();
      }
    } className={s.chat_footer}>
      <div className={s.chat_footer__input__wrapper}>
        <button className={`${s.chat_footer__icon} ${s.chat_footer__icon__link}`} type="button" />

        <input className={s.chat_footer__input} type="text" placeholder="Write a message ..." />

        <button className={`${s.chat_footer__icon} ${s.chat_footer__icon__emoji}`} type="button" />
      </div>

      <button className={s.chat_footer__sand_massage} type="submit">
        <div className={`${s.chat_footer__icon}  ${s.chat_footer__icon__send}`} />
      </button>
    </form>
  );
};
