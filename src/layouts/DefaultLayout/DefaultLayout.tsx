import React, { FC } from 'react';
// import s from './DefaultLayout.module.scss';
import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import { GeneralGrid } from '../../components/GeneralGrid';

export const DefaultLayout: FC = () => {
  return (
    <>
      <GeneralGrid>
        <Sidebar />
        <Outlet />
        {/* <Navigate to="/home" /> */}
      </GeneralGrid>
    </>
  );
}
