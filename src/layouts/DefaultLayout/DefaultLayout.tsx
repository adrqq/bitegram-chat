import React, { FC } from 'react';
// import s from './DefaultLayout.module.scss';
import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import { GeneralGrid } from '../../components/GeneralGrid';
import { useAppSelector } from '../../hooks/redux';

export const DefaultLayout: FC = () => {
  // const { isUserAuth } = useAppSelector((state) => state.authSlice);

  const isUserAuth = true;

  return (
    <>
      {!isUserAuth && <Navigate to="/auth/login" />}
      {isUserAuth && (
        <GeneralGrid>
          <Sidebar />
          <Outlet />
        </GeneralGrid>
      )}
    </>
  );
}

export default DefaultLayout;
