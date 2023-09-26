import React, { FC, useState } from "react";
import s from "./RegisterPage.module.scss";

import AuthInput from "../../UI/AuthInput/AuthInput";

import googleAuthIcon from "../../images/google-auth-icon.svg";
import githubAuthIcon from "../../images/github-auth-icon.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { register } from "../../redux/slices/authSlice";
import { IButton } from "../../UI/IButton.tsx/IButton";

interface RegisterPageProps {}

export const RegisterPage: FC<RegisterPageProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isRegisterLoading, isRegisterError } = useAppSelector(
    (state) => state.authSlice
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nickname, setNickname] = useState("");

  const handleRegister = async () => {
    console.log("register");

    await dispatch(
      register({
        email,
        password,
        firstName,
        lastName,
        nickname,
      })
    ).then((res: any) => {
      if (!res.payload) {
        console.log("error");

        return;
      }

      console.log(`res`, res.payload);

      navigate("/auth/verify", { replace: true });
    });
  };

  return (
    <>
      {isRegisterError && <div className={s.register_page}>error</div>}
      {isRegisterLoading ? (
        <div className={s.register_page}>...loading</div>
      ) : (
        <div className={s.register_page}>
          <h1 className={s.register_page__title}>Get started with bitegram</h1>

          <div className={s.redirect_wrapper}>
            <div className={s.redirect}>
              <p className={s.redirect__text}>Already have an account?</p>

              <NavLink to="/auth/login" className={s.redirect__link}>
                Sign in
              </NavLink>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleRegister();
            }}
            className={s.register_page__form}
          >
            <div className={s.register_page__input_wrapper}>
              <AuthInput
                legend="First name"
                type="text"
                name="name"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <AuthInput
                legend="Last name"
                type="text"
                name="surname"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className={s.register_page__input_wrapper}>
              <AuthInput
                legend="nickname"
                type="text"
                name="text"
                placeholder="Nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </div>

            <div className={s.register_page__input_wrapper}>
              <AuthInput
                legend="Email"
                type="email"
                name="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={s.register_page__input_wrapper}>
              <AuthInput
                legend="Password"
                type="password"
                name="email"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* <div className={s.register_page__forgot_pass_wrapper}>
            <NavLink
              to="/forgot-password"
              className={s.forgot_pass}
            >
              Forgot password?
            </NavLink>
          </div> */}

            <div className={s.register_page__btn_wrapper}>
              <IButton text="Register" type="submit" />
            </div>
          </form>

          <div className={s.register_page__or_wrapper}>
            <div className={s.register_page__or}>
              <p className={s.register_page__or__legend}>or</p>
            </div>

            <div className={s.register_page__socials}>
              <button type="button" className={s.socials_btn}>
                <img
                  src={googleAuthIcon}
                  alt="google-logo"
                  className={s.socials_btn__ico}
                />
              </button>

              <button type="button" className={s.socials_btn}>
                <img
                  src={githubAuthIcon}
                  alt="github-logo"
                  className={s.socials_btn__ico}
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterPage;
