import { FC, ReactNode } from 'react';
import s from './GeneralGrid.module.scss';

interface Props {
  children: ReactNode;
}

export const GeneralGrid: FC<Props> = ({ children }) => {

  return (
    <div className={s.grid}>
      {children}
    </div>
  );
}