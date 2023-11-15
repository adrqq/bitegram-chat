import React, { FC } from 'react';
import s from './RequestCard.module.scss';
import classNames from 'classnames';
import dummyAvatar from '../../images/avatar.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import socket, { acceptFriendRequestSocket } from '../../socketio/user-socket';
import { IFriendRequest } from '../../models/IFriendRequest';

interface RequestCardProps {
  user: {
    nickname: string;
    id: string;
  };
  onClick?: () => void;
}

export const RequestCard: FC<RequestCardProps> = ({
  user: friendUser,
}) => {
  const selected = false;

  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.authSlice);

  const handleAcceptFriend = () => {
    console.table({ user, friendUser });
    if (!user) return;

    acceptFriendRequestSocket(user.id, friendUser.id);
  }

  return (
    <div
      className={classNames(
        s.request_card__container,
        selected && s.request_card__container__selected,
        !selected && s.request_card__container__unselected
      )}
    >
      <div className={s.request_card_item}>
        <div className={s.request_card__info__wrapper}>
          <img
            className={s.request_card__avatar}
            src={dummyAvatar}
            alt="request_card avatar"
          />

          <div className={s.request_card__info}>
            <p
              className={classNames(
                s.request_card__title,
                selected && s.request_card__title__selected,
                !selected && s.request_card__title__unselected
              )}
            >
              {friendUser.nickname}
            </p>
          </div>
        </div>

        <button
          className={s.request_card__button__add}
          onClick={handleAcceptFriend}
        >
          Accept
        </button>
      </div>
    </div>
  )
}

export default RequestCard;
