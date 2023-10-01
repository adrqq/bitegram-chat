import React, { FC } from "react";
import s from "./ChatModal.module.scss";
import { ChatModalHeader } from "./ChatModalHeader/ChatModalHeader";
import { ChatModalMain } from "./ChatModalMain/ChatModalMain";

interface ChatModalProps {
  isOpen: boolean;
}

export const ChatModal: FC<ChatModalProps> = ({
  isOpen,
}) => {
  if (!isOpen) return null;

  return (
    <div className={s.chat_modal}>
      <ChatModalHeader />
      <ChatModalMain />
    </div>
  )
}