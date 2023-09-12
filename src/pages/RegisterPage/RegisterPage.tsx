import React, { FC } from 'react';
import styles from './RegisterPage.module.scss';

interface RegisterPageProps { }

export const RegisterPage: FC<RegisterPageProps> = () => (
  <div className={styles.RegisterPage}>
    RegisterPage Component
  </div>
);

export default RegisterPage;
