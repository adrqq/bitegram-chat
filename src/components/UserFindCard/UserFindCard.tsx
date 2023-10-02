import React, { FC } from 'react';
import s from './UserFindCard.module.scss';
import classNames from 'classnames';

import dummyAvatar from '../../images/avatar.svg'

export const UserFindCard: FC = () => {
  const selected = false;

  return (
    <button
      className={s.chat__container}
    >
      <div className={s.chat_item}>
        <div className={s.chat__info__wrapper}>
          <img
            className={s.chat__avatar}
            src={dummyAvatar}
            alt="chat avatar"
          />

          <div className={s.chat__info}>
            <p
              className={classNames(s.chat__title,
                selected && s.chat__title__selected,
                !selected && s.chat__title__unselected
              )}
            >
              Pink Panda
            </p>

            {false && (
              <p
                className={s.chat__last__message}
              >
                You: thnx!
              </p>
            )}
          </div>
        </div>
      </div>
    </button >
  );
};

export default UserFindCard;
