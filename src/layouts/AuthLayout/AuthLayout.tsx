import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import s from './AuthLayout.module.scss';
import { useNavigate } from 'react-router-dom';

import ovlIcon from '../../images/main-app-logo.svg';

interface AuthLayoutProps { }

export const AuthLayout: FC<AuthLayoutProps> = () => {
  const isUserLoggedIn = false;
  const navigate = useNavigate();

  if (isUserLoggedIn) {
    navigate('/app', { replace: true });
  }

  return (
    <div className={s.auth}>
      <div className={s.auth__container}>
        <div className={s.auth__logo}>
          <img
            src={ovlIcon}
            alt="app-logo"
            className={s.auth__logo__ico}
          />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
