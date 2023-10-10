import React, { FC } from 'react';
import s from './ProfilePage.module.scss';
import { ProfileBlock } from '../../components/ProfileBlock';
import { OthersProfileBlock } from '../../components/OtherProfileBlock';

interface ProfilePageProps { }

export const ProfilePage: FC<ProfilePageProps> = () => (
  <>
    {/* <ProfileBlock /> */}
    <OthersProfileBlock />
  </>
);

export default ProfilePage;
