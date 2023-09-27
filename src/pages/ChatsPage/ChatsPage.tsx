import { FC } from 'react';
import s from './ChatsPage.module.scss';
import { OpenChatView } from '../../components/OpenChatView';
import { SelectorBlock } from '../../components/SelectorBlock';
import { ChatModal } from '../../components/ChatModal/ChatModal';
import { useAppSelector } from '../../hooks/redux';

interface Props {
}

export const ChatsPage: FC<Props> = () => {
  const { isChatModalOpen } = useAppSelector((state) => state.rootSlice);

  return (
    <>
      <SelectorBlock />

      <OpenChatView />

      {isChatModalOpen && <ChatModal />}
    </>
  );
}

export default ChatsPage;