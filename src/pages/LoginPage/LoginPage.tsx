import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './LoginPage.module.scss';
import AuthInput from '../../UI/AuthInput/AuthInput';

import googleAuthIcon from '../../images/google-auth-icon.svg';
import githubAuthIcon from '../../images/github-auth-icon.svg';
import { useAppDispatch } from '../../hooks/redux';
import { login } from '../../redux/slices/authSlice';

interface LoginPageProps { }

export const LoginPage: FC<LoginPageProps> = () => {
  const dispatch = useAppDispatch();
  const [submitError, setSubmitError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      setSubmitError(true);

      setTimeout(() => {
        setSubmitError(false);
      }, 0);
    }

    console.log('login');
    await dispatch(login({ email, password })).then((res) => {
      if (!res.payload) return;

      console.log('res.payload secsess', res.payload);
    });
  }

  return (
    <div className={s.login_page}>
      <h1 className={s.login_page__title}>
        Login to bitegram
      </h1>

      <div className={s.redirect_wrapper}>
        <div className={s.redirect}>
          <p className={s.redirect__text}>
            New user?
          </p>

          <NavLink
            to="/auth/register"
            className={s.redirect__link}
          >
            Create an account
          </NavLink>
        </div>
      </div>

      <form
        className={s.login_page__form}
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <div className={s.login_page__input_wrapper}>
          <AuthInput
            legend="Email"
            type="email"
            name="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
            submitError={submitError}
          />
        </div>

        <div className={s.login_page__input_wrapper}>
          <AuthInput
            legend="Password"
            type="password"
            name="email"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
            submitError={submitError}
          />
        </div>

        <div className={s.login_page__forgot_pass_wrapper}>
          <NavLink
            to="/forgot-password"
            className={s.forgot_pass}
          >
            Forgot password?
          </NavLink>
        </div>

        <div className={s.login_page__btn_wrapper}>
          <button
            type="submit"
            className={s.submit_btn}
          >
            Login
          </button>
        </div>
      </form>

      <div className={s.login_page__or_wrapper}>
        <div className={s.login_page__or}>
          <p className={s.login_page__or__legend}>
            or
          </p>
        </div>

        <div className={s.login_page__socials}>
          <button
            type="button"
            className={s.socials_btn}
          >
            <img
              src={googleAuthIcon}
              alt="google-logo"
              className={s.socials_btn__ico}
            />
          </button>

          <button
            type="button"
            className={s.socials_btn}
          >
            <img
              src={githubAuthIcon}
              alt="github-logo"
              className={s.socials_btn__ico}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
