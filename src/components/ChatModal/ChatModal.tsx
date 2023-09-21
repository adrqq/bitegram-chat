import React from "react";
import s from "./ChatModal.module.scss";
import { ChatModalHeader } from "./ChatModalHeader/ChatModalHeader";
import { ChatModalMain } from "./ChatModalMain/ChatModalMain";

export const ChatModal = () => {
  return (
    <div className={s.chat_modal}>
      <ChatModalHeader />
      <ChatModalMain />
    </div>
  )
}