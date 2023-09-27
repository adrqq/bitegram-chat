import React, { FC, useEffect, useState } from 'react';
import s from './AuthInput.module.scss';

import eyeOpen from '../../images/pass-eye-open.svg';
import eyeClosed from '../../images/pass-eye-closed.svg';

interface AuthInputProps {
  legend: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  errorMessage?: string;
  submitError?: boolean;
  setSubmitError?: (value: boolean) => void;
}

export const AuthInput: FC<AuthInputProps> = ({
  legend,
  type,
  name,
  placeholder,
  value,
  onChange,
  required = false,
  submitError = false,
  setSubmitError = () => { },
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (value.trim().length === 0 && required) {
      setErrorMessage('This field is required');

      setSubmitError(true);
    } else {
      setErrorMessage('');
      setSubmitError(false);
    }

    if (type === 'email' && !value.includes('@') && value.trim().length > 0) {
      setErrorMessage('Invalid email');

      setSubmitError(true);
    } else if (type === 'email' && value.includes('@')) {
      setErrorMessage('');
      setSubmitError(false);
    }
  }, [value, required, setSubmitError, type]);

  return (
    <div className={s.auth_input_wrapper}>
      <fieldset className={s.auth_input}>
        <legend className={s.auth_input__legend}>
          {legend}
        </legend>

        <input
          type={type === 'password' && isPasswordVisible ? 'text' : type}
          name={name}
          placeholder={placeholder}
          className={s.auth_input__input}
          value={value}
          onChange={(e) => {
            onChange(e);
          }}
        />

        {type === 'password' && (
          <div className={s.pass_visibility_eye_wrapper}>
            <button
              type='button'
              className={s.pass_visibility_eye}
            >
              <img
                src={isPasswordVisible ? eyeOpen : eyeClosed}
                alt="pass-visibility-eye"
                className={s.pass_visibility_eye__ico}
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              />
            </button>
          </div>
        )}
      </fieldset>

      {errorMessage && (
        <p className={s.auth_input__error}>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default AuthInput;
