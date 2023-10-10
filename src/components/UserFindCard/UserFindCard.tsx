import React, { FC } from 'react';
import s from './UserFindCard.module.scss';
import classNames from 'classnames';

import dummyAvatar from '../../images/avatar.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getUserById } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';

interface UserFindCardProps {
  user: {
    nickname: string;
    id: string;
    onClick?: () => void;
  };
  onClick?: () => void;
}

export const UserFindCard: FC<UserFindCardProps> = ({
  user = {
    nickname: 'User',
    id: '1',
  },
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { selectedUser } = useAppSelector((state) => state.userSlice);

  const selected = false;

  const handleSelectUser = async () => {
    console.log(`${user.id} ${user.nickname} clicked`);
  
    try {
      // Dispatch the action to fetch user data
      await dispatch(getUserById(user.id))
        .then((res: any) => {
          console.log('selected user', selectedUser); // Debugging

          navigate(`/app/others-profile/${user.id}`);
        });
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <button className={s.chat__container} onClick={() => handleSelectUser()}>
      <div className={s.chat_item}>
        <div className={s.chat__info__wrapper}>
          <img className={s.chat__avatar} src={dummyAvatar} alt="chat avatar" />

          <div className={s.chat__info}>
            <p
              className={classNames(
                s.chat__title,
                selected && s.chat__title__selected,
                !selected && s.chat__title__unselected
              )}
            >
              {user.nickname}
            </p>

            {false && <p className={s.chat__last__message}>You: thnx!</p>}
          </div>
        </div>
      </div>
    </button>
  );
};

export default UserFindCard;
