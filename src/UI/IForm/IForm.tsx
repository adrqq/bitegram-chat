import React, { FC } from 'react';
import s from './IForm.module.scss';

interface IFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

export const IForm: FC<IFormProps> = ({
  onSubmit,
  children,
}) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();

      onSubmit(e);
    }}
    className={s.form}
  >
    {children}
  </form>
);

export default IForm;
