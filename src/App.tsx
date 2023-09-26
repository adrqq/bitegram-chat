import React, { ReactElement, useEffect } from 'react';
import { Router } from './routes'
import './App.module.scss'
import { useAppDispatch } from './hooks/redux';
import { checkAuth } from './redux/slices/authSlice';

function App(): ReactElement {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      console.log('check auth');

      dispatch(checkAuth()).then((res: any) => {
        if (!res.payload) {
          console.log('error');

          return;
        }

        console.log(`res`, res.payload);
      });
    }
  }, []);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
