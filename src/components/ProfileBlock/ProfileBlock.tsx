import React, { FC, useState } from 'react';
import s from './ProfileBlock.module.scss';
import { GoBackButton } from '../../UI/GoBackButton';
import { AuthInput } from '../../UI/AuthInput';

interface ProfileBlockProps { }

export const ProfileBlock: FC<ProfileBlockProps> = () => {
  const [firstName, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [userPhoto, setUserPhoto] = useState<string | null>(null);

  return (
    <div className={s.profile_block}>
      <div className={s.profile_block__header}>
        <GoBackButton />
        <h1 className={s.profile_block__header__title}>
          Profile
        </h1>
      </div>

      <div className={s.profile_block__user}>
        <div className={s.photo_upload}>
          <img
            src={userPhoto || 'https://via.placeholder.com/150'}
            alt=""
            className={s.photo_upload__img}
          />
          <input
            type="file"
            className={s.photo_upload__input}
            accept="image/*"
            onChange={(e) => {
              const reader = new FileReader();
              reader.onload = () => {
                setUserPhoto(reader.result as string);
              };
              reader.readAsDataURL(e.target.files![0]);
            }}
          />
        </div>

        <form className={s.profile_block__user__form}>
          <div className={s.profile_block__input_wrapper}>
            <AuthInput
              legend='First Name'
              type='text'
              name='name'
              placeholder='First Name'
              value={firstName}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className={s.profile_block__input_wrapper}>
            <AuthInput
              legend='Last Name'
              type='text'
              name='name'
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className={s.profile_block__input_wrapper}>
            <AuthInput
              legend='Username'
              type='text'
              name='name'
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className={s.profile_block__input_wrapper}>
            <AuthInput
              legend='Bio'
              type='text'
              name='name'
              placeholder='Bio'
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              isTextArea
            />
          </div>

          <button
            className={s.save_btn}
            type='submit'
          >
            <p className={s.save_btn__text}>
              Save
            </p>
          </button>
        </form>
      </div>
    </div>
  )
}

export default ProfileBlock;
