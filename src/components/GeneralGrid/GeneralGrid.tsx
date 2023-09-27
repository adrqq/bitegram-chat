import { FC, ReactNode } from 'react';
import s from './GeneralGrid.module.scss';
import classNames from 'classnames';
import { useAppSelector } from '../../hooks/redux';

interface Props {
  children: ReactNode;
}

export const GeneralGrid: FC<Props> = ({ children }) => {
  const { isChatModalOpen } = useAppSelector((state) => state.rootSlice);

  return (
    <div className={classNames(
      { [s.grid]: !isChatModalOpen },
      { [s.grid__with_module]: isChatModalOpen }
    )}
    >
      {children}
    </div>
  );
}