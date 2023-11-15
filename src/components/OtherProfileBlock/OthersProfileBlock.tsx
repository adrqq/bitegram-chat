import React, { FC, useEffect, useState } from 'react';
import s from './OthersProfileBlock.module.scss';
import { GoBackButton } from '../../UI/GoBackButton';
import { AuthInput } from '../../UI/AuthInput';

import dinoUserLogo from '../../images/dino-user.jpg';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  sendFriendRequestSocket,
  acceptFriendRequestSocket,
  deleteFriendSocket,
} from '../../socketio/user-socket';
import socket from '../../socketio/user-socket';
import { IFriendRequest } from '../../models/IFriendRequest';
import {
  checkFriendStatus, setSelectedUserStatus,
} from '../../redux/slices/userSlice';
import classNames from 'classnames';
import { ProfileStatus } from '../../types/ProfileStatus';

interface ProfileBlockProps { }

export const OthersProfileBlock: FC<ProfileBlockProps> = () => {
  const dispatch = useAppDispatch();

  const { selectedUser } = useAppSelector(
    (state) => state.userSlice
  );
  const { user } = useAppSelector((state) => state.authSlice);

  const [bio, setBio] = useState<string>('');
  const [userPhoto, setUserPhoto] = useState<string | null>(null);

  console.log(`selectedUser`, selectedUser);

  useEffect(() => {
    dispatch(
      checkFriendStatus({
        userId: user.id,
        friendId: selectedUser.id,
      })
    ).then((response) => {
      console.log(`response`, response.payload);

      dispatch(
        setSelectedUserStatus(response.payload)
      );
    });
  }, []);

  const handleAcceptFriend = () => {
    // if (!user) return;

    acceptFriendRequestSocket(user.id, selectedUser.id);
  }

  const handleAddFriend = () => {
    // if (!user || !selectedUser.id) {

    //   alert('You are not logged in');
    // };

    sendFriendRequestSocket(user.id, selectedUser.id);
  };

  const handleDeleteFriend = () => {
    // if (!user || !selectedUser.id) {
    //   alert('You are not logged in');
    // };

    deleteFriendSocket(user.id, selectedUser.id)
  }

  if (!selectedUser) {
    return (
      <div>
        <h1>404</h1>
        <h2>User not found</h2>
      </div>
    );
  }

  return (
    <div className={s.profile_block}>
      <div className={s.profile_block__header}>
        <GoBackButton />
        <h1 className={s.profile_block__header__title}>Profile</h1>
      </div>

      <div className={s.profile_block__user}>
        <div className={s.photo_upload}>
          <img
            src={userPhoto || dinoUserLogo}
            alt=""
            className={s.photo_upload__img}
          />
        </div>

        <form className={s.profile_block__user__form}>
          <div className={s.profile_block__input_wrapper}>
            <AuthInput
              legend="First Name"
              type="text"
              name="name"
              placeholder="First Name"
              value={selectedUser.firstName}
              disabled
              isHover={false}
            />
          </div>

          <div className={s.profile_block__input_wrapper}>
            <AuthInput
              legend="Last Name"
              type="text"
              name="name"
              placeholder="Last Name"
              value={selectedUser.lastName}
              disabled
              isHover={false}
            />
          </div>

          <div className={s.profile_block__input_wrapper}>
            <AuthInput
              legend="Username"
              type="text"
              name="name"
              placeholder="Username"
              value={selectedUser.nickname}
              disabled
              isHover={false}
            />
          </div>

          <div className={s.profile_block__input_wrapper}>
            <AuthInput
              legend="Bio"
              type="text"
              name="name"
              placeholder="Bio"
              value={bio}
              isTextArea
              disabled
              isHover={false}
            />
          </div>

          {selectedUser.status === ProfileStatus.NOT_FRIEND && (
            <button
              type="button"
              className={s.save_btn}
              onClick={handleAddFriend}
            >
              <p className={s.save_btn__text}>Add</p>
            </button>
          )}

          {selectedUser.status === ProfileStatus.FRIEND && (
            <button
              type="button"
              className={s.save_btn}
              onClick={handleDeleteFriend}
            >
              <p className={s.save_btn__text}>Delete friend</p>
            </button>
          )}

          {selectedUser.status === ProfileStatus.FRIEND_REQUEST_SENT && (
            <button
              type="button"
              className={classNames(
                s.save_btn,
                s.save_btn__sent_request
              )}
              onClick={handleAddFriend}
              disabled
              style={{ backgroundColor: 'gray' }}
            >
              <p className={s.save_btn__text}>Request sent</p>
            </button>
          )}

          {selectedUser.status === ProfileStatus.FRIEND_REQUEST_RECEIVED && (
            <button
              type="button"
              className={s.save_btn}
              onClick={handleAcceptFriend}
              style={{ backgroundColor: '#32CD32' }}
            >
              <p className={s.save_btn__text}>Accept</p>
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default OthersProfileBlock;
