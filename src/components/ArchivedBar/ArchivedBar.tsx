import React, { FC } from 'react';
import s from './ArchivedBar.module.scss';

import archiveIcon from '../../images/gray-archive-icon.svg'

interface ArchivedBarProps { }

export const ArchivedBar: FC<ArchivedBarProps> = () => (
  <div className={s.archived_bar}>
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
  </div>
);
