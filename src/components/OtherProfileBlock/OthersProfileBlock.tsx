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
import {
  createChat,
  getUserById,
  setSelectedUser,
} from '../../redux/slices/userSlice';
import classNames from 'classnames';
import { ProfileStatus } from '../../types/ProfileStatus';
import { useParams } from 'react-router-dom';

interface ProfileBlockProps {}

export const OthersProfileBlock: FC<ProfileBlockProps> = () => {
  const dispatch = useAppDispatch();
  const { userId: userIdParam } = useParams<{ userId: string }>();

  const { selectedUser } = useAppSelector((state) => state.userSlice);
  const { user } = useAppSelector((state) => state.authSlice);

  const [bio, setBio] = useState<string>('');
  const [userPhoto, setUserPhoto] = useState<string | null>(null);
  const [profileStatus, setProfileStatus] = useState<ProfileStatus>(
    ProfileStatus.NOT_FRIEND
  );

  console.log(`selectedUser`, selectedUser);

  useEffect(() => {
    if (!selectedUser) return;

    if (userIdParam) {
      dispatch(getUserById(userIdParam))
        .then((res) => {
          setSelectedUser(res.payload);
        })
        .catch((err) => console.error(err));
    }
  }, [selectedUser]);

  const handleAcceptFriend = () => {
    if (!user || !selectedUser.id) {
      alert('You are not logged in');
    }

    acceptFriendRequestSocket(user.id, selectedUser.id);
  };

  const handleAddFriend = () => {
    if (!user || !selectedUser.id) {
      alert('You are not logged in');
    }

    sendFriendRequestSocket(user.id, selectedUser.id);
  };

  const handleDeleteFriend = () => {
    if (!user || !selectedUser.id) {
      alert('You are not logged in');
    }

    deleteFriendSocket(user.id, selectedUser.id);
  };

  const handleSendMassage = async () => {
    if (!user || !selectedUser) {
      alert('You are not logged in');
    }

    if (user.chats.find((chat) => selectedUser.chats.includes(chat))) {
      // navigate(`/app/chats/${chatId}`);

      alert('You are already have chat with this user');

      return;
    }

    await dispatch(
      createChat({
        userId: user.id,
        friendId: selectedUser.id,
      })
    );

    alert('Chat created');
    // navigate(`/app/chats/${chatId}`);
  };

  useEffect(() => {
    if (!selectedUser) return;
    if (!user) return;

    if (user.friends.includes(selectedUser.id)) {
      setProfileStatus(ProfileStatus.FRIEND);
    } else if (user.outgoingFriendRequests.includes(selectedUser.id)) {
      setProfileStatus(ProfileStatus.FRIEND_REQUEST_SENT);
    } else if (user.incomingFriendRequests.includes(selectedUser.id)) {
      setProfileStatus(ProfileStatus.FRIEND_REQUEST_RECEIVED);
    } else {
      setProfileStatus(ProfileStatus.NOT_FRIEND);
    }
  }, [user, selectedUser]);

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

          <div className={s.btns__wrapper}>
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
                onClick={handleDeleteFriend}
                style={{ backgroundColor: 'red' }}
              >
                <p className={s.save_btn__text}>Delete</p>
              </button>
            )}

            {profileStatus === ProfileStatus.FRIEND_REQUEST_SENT && (
              <button
                type="button"
                className={classNames(s.save_btn, s.save_btn__sent_request)}
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

            {profileStatus === ProfileStatus.FRIEND && (
              <button
                type="button"
                className={`${s.save_btn} ${s.save_btn__sand_massage}`}
                onClick={handleSendMassage}
              >
                <p className={s.save_btn__text}>Send Massage</p>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default OthersProfileBlock;
