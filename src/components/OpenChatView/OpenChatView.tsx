import { FC } from 'react';
import s from './OpenChatView.module.scss';

interface Props {
}

export const OpenChatView: FC<Props> = () => {

  return (
    <div className={s.chat}>
      OpenChatView
    </div>
  )
}