import React, { FC } from 'react';
import s from './ChatItem.module.scss';
import classNames from 'classnames';

export const ChatItem: FC = () => {
  const selected = true;

  return (
    <button
      className={classNames(s.chat__container,
        selected && s.chat__container__selected,
        !selected && s.chat__container__unselected
      )}
    >
      <div className={s.chat_item}>
        <div className={s.chat__info__wrapper}>
          <div
            className={s.chat__avatar}
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

            <p
              className={classNames(s.chat__last__message,
                selected && s.chat__last__message__selected,
                !selected && s.chat__last__message__unselected
              )}
            >
              You: thnx!
            </p>
          </div>
        </div>

        <div
          className={classNames(s.chat__time,
            selected && s.chat__time__selected,
            !selected && s.chat__time__unselected
          )}
        >
          <p>12:00</p>
        </div>
      </div>
    </button >
  );
};
