import React, { FC, useState } from 'react';
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
}

export const AuthInput: FC<AuthInputProps> = ({
  legend,
  type,
  name,
  placeholder,
  value,
  onChange,
  required = false,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);


  return (
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
        onChange={onChange}
        required={required}
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
  );
};

export default AuthInput;
