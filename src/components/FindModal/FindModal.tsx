import React, { FC } from 'react';
import s from './FindModal.module.scss';

interface FindModalProps {}

export const FindModal: FC<FindModalProps> = () => (
  <div className={s.find_modal}>
    FindModal Component
  </div>
);

export default FindModal;
