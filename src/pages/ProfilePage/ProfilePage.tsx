import React, { FC } from 'react';
import s from './ProfilePage.module.scss';
import { ProfileBlock } from '../../components/ProfileBlock';

interface ProfilePageProps { }

export const ProfilePage: FC<ProfilePageProps> = () => (
  <>
    <ProfileBlock />
  </>
);

export default ProfilePage;
