import React, { FC } from 'react';
import s from './NotificationPage.module.scss';
import classNames from 'classnames';
import dummyAvatar from '../../images/avatar.svg';
interface NotificationPageProps {}

export const NotificationPage: FC<NotificationPageProps> = () => {
  const selected = false;

  return (
    <div className={s.notification_page}>
      <button
        className={classNames(
          s.notification_page__container,
          selected && s.notification_page__container__selected,
          !selected && s.notification_page__container__unselected
        )}
      >
        <div className={s.notification_page_item}>
          <div className={s.notification_page__info__wrapper}>
            <img
              className={s.notification_page__avatar}
              src={dummyAvatar}
              alt="notification_page avatar"
            />

            <div className={s.notification_page__info}>
              <p
                className={classNames(
                  s.notification_page__title,
                  selected && s.notification_page__title__selected,
                  !selected && s.notification_page__title__unselected
                )}
              >
                Pink Panda
              </p>

              <p
                className={classNames(
                  s.notification_page__last__message,
                  selected && s.notification_page__last__message__selected,
                  !selected && s.notification_page__last__message__unselected
                )}
              >
                You: thnx!
              </p>
            </div>
          </div>

          <button className={s.notification_page__button__add}>
            Add Friend
          </button>
        </div>
      </button>
    </div>
  );
};

export default NotificationPage;
