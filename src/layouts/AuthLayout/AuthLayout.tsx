import React, { FC } from 'react';
import s from './AuthLayout.module.scss';

interface AuthLayoutProps { }

export const AuthLayout: FC<AuthLayoutProps> = () => {
  const isUserLoggedIn = false;

  // if (isUserLoggedIn) {

  // }

  return (
    <div className={s.auth}>
      AuthLayout Component
    </div>
  );
};

export default AuthLayout;
