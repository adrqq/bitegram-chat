import React, { FC } from 'react';
import s from './ArchivedBar.module.scss';

import archiveIcon from '../../images/gray-archive-icon.svg'

interface ArchivedBarProps { }

export const ArchivedBar: FC<ArchivedBarProps> = () => (
  <button
    className={s.archived_bar}
    type='button'
  >
    <img
      className={s.archived_bar__icon}
      src={archiveIcon}
      alt="archive-chat"
    />
    <p
      className={s.archived_bar__text}
    >
      Archive
    </p>
  </button>
);
