import { FC } from 'react';
import s from './OpenChatView.module.scss';
import { ChatHeader } from './ChatHeader/ChatHeader';
import { ChatMain } from './ChatMain/ChatMain';
import { ChatFooter } from './ChatFooter/ChatFooter';

interface Props {
}

export const OpenChatView: FC<Props> = () => {

  return (
    <div className={s.chat}>
      <ChatHeader />

      <ChatMain />

      <ChatFooter />
    </div>
  )
}