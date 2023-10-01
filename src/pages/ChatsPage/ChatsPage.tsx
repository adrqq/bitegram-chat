import { FC } from 'react';
import s from './ChatsPage.module.scss';
import { OpenChatView } from '../../components/OpenChatView';
import { SelectorBlock } from '../../components/SelectorBlock';
import { ChatModal } from '../../components/ChatModal/ChatModal';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { FindModal } from '../../components/FindModal';
import Modal from '../../UI/Modal/Modal';
import { setIsFindModalOpen } from '../../redux/slices/rootSlice';

interface Props {
}

export const ChatsPage: FC<Props> = () => {
  const dispatch = useAppDispatch();

  const {
    isUserProfileModalOpen,
    isFindModalOpen
  } = useAppSelector((state) => state.rootSlice);

  return (
    <>
      <SelectorBlock />

      <OpenChatView />

      <ChatModal isOpen={isUserProfileModalOpen} />

      <Modal isOpen={isFindModalOpen} onClose={() => dispatch(setIsFindModalOpen(false))}>
        <FindModal />
      </Modal>
    </>
  );
}

export default ChatsPage;