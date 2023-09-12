import { FC } from 'react';
import s from './ChatsPage.module.scss';
import { OpenChatView } from '../../components/OpenChatView';
import { SelectorBlock } from '../../components/SelectorBlock';

interface Props {
}

export const ChatsPage: FC<Props> = () => {
  const isSelected = true;

  return (
    <>
      <SelectorBlock />

      <OpenChatView />

      <div style={{backgroundColor: "red"}}/>
    </>
  );
}