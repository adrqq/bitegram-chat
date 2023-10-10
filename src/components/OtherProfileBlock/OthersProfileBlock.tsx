import React, { FC, useState } from 'react';
import s from './OthersProfileBlock.module.scss';
import { GoBackButton } from '../../UI/GoBackButton';
import { AuthInput } from '../../UI/AuthInput';

import dinoUserLogo from '../../images/dino-user.jpg';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { sendFriendRequestSocket } from '../../socketio/user-socket';
import socket from '../../socketio/user-socket';
import { IFriendRequest } from '../../models/IFriendRequest';
import { sendFriendRequest } from '../../redux/slices/userSlice';

interface ProfileBlockProps {}

export const OthersProfileBlock: FC<ProfileBlockProps> = () => {
  const dispatch = useAppDispatch();
  const { friendRequestSent } = useAppSelector((state) => state.userSlice);

  const [bio, setBio] = useState<string>('');
  const [userPhoto, setUserPhoto] = useState<string | null>(null);

  const { selectedUser } = useAppSelector((state) => state.userSlice);
  const { user } = useAppSelector((state) => state.authSlice);

  console.log(`selectedUser`, selectedUser);

  const [addFriend, setAddFriend] = useState<boolean>(false);

  // Add a conditional check to ensure selectedUser is defined
  if (!selectedUser) {
    return (
      <div>
        <h1>404</h1>
        <h2>User not found</h2>
      </div>
    );
  }

  socket.on('newFriendRequest', async (data: IFriendRequest) => {
    console.log('newFriendRequest', data);

    await dispatch(sendFriendRequest(data))
      .then(() => {

        console.log('friend request sent');
        setAddFriend(true);
      })
  });

  const handleAddFriend = () => {
    if (!user) return;

    console.log(`user`, user);

    sendFriendRequestSocket(user.id, selectedUser.id);
  };

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

          {addFriend ? (
            <div>sdsds</div>
          ) : (
            <button
              type="button"
              className={s.save_btn}
              onClick={handleAddFriend}
            >
              <p className={s.save_btn__text}>Add</p>
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default OthersProfileBlock;
