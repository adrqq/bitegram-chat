import React, { FC, useEffect, useState } from 'react';
import s from './OthersProfileBlock.module.scss';
import { GoBackButton } from '../../UI/GoBackButton';
import { AuthInput } from '../../UI/AuthInput';

import dinoUserLogo from '../../images/dino-user.jpg';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  sendFriendRequestSocket,
  acceptFriendRequestSocket,
} from '../../socketio/user-socket';
import socket from '../../socketio/user-socket';
import { IFriendRequest } from '../../models/IFriendRequest';
import {
  checkFriendStatus,
  sendFriendRequest,
} from '../../redux/slices/userSlice';
import classNames from 'classnames';

interface ProfileBlockProps { }

enum ProfileStatus {
  FRIEND = 'FRIEND',
  FRIEND_REQUEST_SENT = 'FRIEND_REQUEST_SENT',
  FRIEND_REQUEST_RECEIVED = 'FRIEND_REQUEST_RECEIVED',
  NOT_FRIEND = 'NOT_FRIEND',
}

export const OthersProfileBlock: FC<ProfileBlockProps> = () => {
  const dispatch = useAppDispatch();

  const { selectedUser } = useAppSelector(
    (state) => state.userSlice
  );
  const { user } = useAppSelector((state) => state.authSlice);

  const [bio, setBio] = useState<string>('');
  const [userPhoto, setUserPhoto] = useState<string | null>(null);
  const [profileStatus, setProfileStatus] = useState<string>(
    ProfileStatus.NOT_FRIEND
  );

  console.log(`selectedUser`, selectedUser);

  const setProfileStatusHandler = (status: string) => {
    switch (status) {
      case 'FRIEND':
        setProfileStatus(ProfileStatus.FRIEND);
        break;
      case 'FRIEND_REQUEST_SENT':
        setProfileStatus(ProfileStatus.FRIEND_REQUEST_SENT);
        break;
      case 'FRIEND_REQUEST_RECEIVED':
        setProfileStatus(ProfileStatus.FRIEND_REQUEST_RECEIVED);
        break;
      case 'NOT_FRIEND':
        setProfileStatus(ProfileStatus.NOT_FRIEND);
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    dispatch(
      checkFriendStatus({
        userId: user.id,
        friendId: selectedUser.id,
      })
    ).then((response) => {
      console.log(`response`, response.payload);
      setProfileStatus(response.payload);
    });
  }, []);

  socket.on('newFriendRequest', async (data: IFriendRequest) => {
    console.log('newFriendRequest', data);

    await dispatch(sendFriendRequest(data)).then(() => {
      setProfileStatusHandler(ProfileStatus.FRIEND_REQUEST_SENT);
    });
  });

  socket.on('friendRequestAccepted', async (data: IFriendRequest) => {
    console.log('friendRequestAccepted', data);

    setProfileStatusHandler(ProfileStatus.FRIEND);
  });

  const handleAddFriend = () => {
    if (!user) return;

    console.log(`user`, user);

    sendFriendRequestSocket(user.id, selectedUser.id);
  };

  const handleAcceptFriend = () => {
    if (!user) return;

    acceptFriendRequestSocket(user.id, selectedUser.id);
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

          {profileStatus === ProfileStatus.NOT_FRIEND && (
            <button
              type="button"
              className={s.save_btn}
              onClick={handleAddFriend}
            >
              <p className={s.save_btn__text}>Add</p>
            </button>
          )}

          {profileStatus === ProfileStatus.FRIEND && (
            <button
              type="button"
              className={s.save_btn}
              onClick={handleAddFriend}
            >
              <p className={s.save_btn__text}>Delete friend</p>
            </button>
          )}

          {profileStatus === ProfileStatus.FRIEND_REQUEST_SENT && (
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

          {profileStatus === ProfileStatus.FRIEND_REQUEST_RECEIVED && (
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
