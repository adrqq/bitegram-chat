import React, { FC } from 'react';
import styles from './LoginPage.module.scss';

interface LoginPageProps { }

export const LoginPage: FC<LoginPageProps> = () => (
  <div className={styles.LoginPage}>
    LoginPage Component
  </div>
);

export default LoginPage;
